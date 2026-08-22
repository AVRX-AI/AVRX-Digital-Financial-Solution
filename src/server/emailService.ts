/**
 * AVRX Centralized Email Dispatch Service
 * Handles Dual-Channel Email Notifications:
 * 1. Admin Email (to avrx.india@gmail.com)
 * 2. User Confirmation Email (to visitor's submitted email address)
 */

import nodemailer from 'nodemailer';
import {
  LeadData,
  generateClientConfirmationHtml,
  generateClientConfirmationText,
  generateAdminNotificationHtml,
  generateAdminNotificationText
} from './emailTemplates';
import { saveLead, LeadRecord } from './leadStore';

export interface EmailSendResult {
  success: boolean;
  leadId: string;
  adminEmailSent: boolean;
  clientEmailSent: boolean;
  transport: 'resend-api' | 'smtp' | 'simulated-logged';
  error?: string;
  adminError?: string;
  clientError?: string;
  details?: {
    adminTarget: string;
    clientTarget: string;
  };
}

/**
 * Send an email via Resend REST API (HTTPS fetch)
 */
async function sendViaResend(
  apiKey: string,
  from: string,
  to: string,
  replyTo: string,
  subject: string,
  html: string,
  text: string
): Promise<{ success: boolean; error?: string }> {
  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: replyTo,
        subject,
        html,
        text
      })
    });

    const data = await res.json();
    if (!res.ok) {
      return { success: false, error: data?.message || `Resend API returned status ${res.status}` };
    }
    return { success: true };
  } catch (err: any) {
    return { success: false, error: err?.message || 'Resend HTTP dispatch failed' };
  }
}

/**
 * Main Centralized Lead Email Dispatcher
 */
export async function sendLeadEmails(lead: LeadData, ipAddress?: string): Promise<EmailSendResult> {
  const adminEmail = process.env.ADMIN_EMAIL || 'avrx.india@gmail.com';
  const emailFrom = process.env.EMAIL_FROM || 'contact@avrx.in';
  const fromName = process.env.EMAIL_FROM_NAME || 'AVRX Digital and Financial Solution';
  const formattedSender = `${fromName} <${emailFrom}>`;

  // API Key for Transactional Providers (Resend)
  const resendApiKey = process.env.RESEND_API_KEY || process.env.EMAIL_API_KEY;

  // SMTP Settings
  const smtpHost = process.env.SMTP_HOST || process.env.EMAIL_HOST || 'mail.avrx.in';
  const smtpPort = Number(process.env.SMTP_PORT || process.env.EMAIL_PORT) || 465;
  const smtpUser = process.env.SMTP_USER || process.env.EMAIL_USER || process.env.EMAIL_FROM || 'contact@avrx.in';
  const smtpPass = process.env.SMTP_PASS || process.env.EMAIL_PASSWORD || process.env.GMAIL_APP_PASSWORD;
  const smtpSecure = process.env.SMTP_SECURE === 'true' || smtpPort === 465;

  const formName = lead.formName || lead.formType || 'Website Inquiry';
  const adminSubject = `[AVRX WEBSITE LEAD] ${formName} — ${lead.name}`;
  const clientSubject = `AVRX — We Received Your Request`;

  const adminHtml = generateAdminNotificationHtml(lead);
  const adminText = generateAdminNotificationText(lead);
  const clientHtml = generateClientConfirmationHtml(lead);
  const clientText = generateClientConfirmationText(lead);

  let adminEmailSent = false;
  let clientEmailSent = false;
  let transportMode: 'resend-api' | 'smtp' | 'simulated-logged' = 'simulated-logged';
  let adminError: string | undefined;
  let clientError: string | undefined;

  // 1. Try Resend REST API (Preferred for Serverless & Cloud Containers)
  if (resendApiKey) {
    transportMode = 'resend-api';

    // 1a. Dispatch Admin Notification to avrx.india@gmail.com
    const adminRes = await sendViaResend(
      resendApiKey,
      formattedSender,
      adminEmail,
      lead.email, // Reply-To client's email so clicking Reply in Gmail goes to user
      adminSubject,
      adminHtml,
      adminText
    );
    adminEmailSent = adminRes.success;
    adminError = adminRes.error;

    // 1b. Dispatch User Confirmation to submitted email
    if (lead.email && !lead.email.endsWith('@avrx-lead.in')) {
      const clientRes = await sendViaResend(
        resendApiKey,
        formattedSender,
        lead.email,
        adminEmail, // Reply-To AVRX
        clientSubject,
        clientHtml,
        clientText
      );
      clientEmailSent = clientRes.success;
      clientError = clientRes.error;
    } else {
      clientEmailSent = true;
    }
  }
  // 2. Try SMTP Transport via Nodemailer
  else if (smtpPass) {
    transportMode = 'smtp';
    try {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpSecure,
        auth: {
          user: smtpUser,
          pass: smtpPass
        },
        tls: {
          rejectUnauthorized: false
        }
      });

      // 2a. Admin Notification to avrx.india@gmail.com
      try {
        await transporter.sendMail({
          from: formattedSender,
          to: adminEmail,
          replyTo: lead.email, // Client's email
          subject: adminSubject,
          text: adminText,
          html: adminHtml
        });
        adminEmailSent = true;
      } catch (err: any) {
        adminError = err?.message || 'SMTP Admin send failed';
        console.error('[AVRX EMAIL] SMTP Admin Error:', err?.message || err);
      }

      // 2b. User Confirmation
      if (lead.email && !lead.email.endsWith('@avrx-lead.in')) {
        try {
          await transporter.sendMail({
            from: formattedSender,
            to: lead.email,
            replyTo: adminEmail,
            subject: clientSubject,
            text: clientText,
            html: clientHtml
          });
          clientEmailSent = true;
        } catch (err: any) {
          clientError = err?.message || 'SMTP Client send failed';
          console.error('[AVRX EMAIL] SMTP Client Error:', err?.message || err);
        }
      } else {
        clientEmailSent = true;
      }
    } catch (err: any) {
      adminError = err?.message || 'SMTP Transporter init failed';
      console.error('[AVRX EMAIL] Transporter Error:', err?.message || err);
    }
  }
  // 3. Fallback: In-memory logging
  else {
    transportMode = 'simulated-logged';
    adminEmailSent = false;
    clientEmailSent = false;
    console.warn(`[AVRX LEAD EMAIL NOT SENT] Missing RESEND_API_KEY/SMTP_PASS. Lead was captured for database persistence:  Captured lead ${lead.id} from ${lead.name} (${lead.email}, ${lead.phone}) for "${formName}". Ready.`);
  }

  // Record into Lead Storage
  const record: LeadRecord = {
    ...lead,
    status: 'New',
    emailStatus: (adminEmailSent && clientEmailSent) ? (transportMode === 'simulated-logged' ? 'simulated' : 'sent') : 'failed',
    emailError: adminError || clientError,
    ipAddress
  };
  saveLead(record);

  return {
    success: true,
    leadId: lead.id,
    adminEmailSent,
    clientEmailSent,
    transport: transportMode,
    adminError,
    clientError,
    details: {
      adminTarget: adminEmail,
      clientTarget: lead.email
    }
  };
}
