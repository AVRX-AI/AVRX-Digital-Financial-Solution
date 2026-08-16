/**
 * AVRX Production Dual-Channel Email Service
 * Handles Admin Notifications (to avrx.india@gmail.com) and Client Auto-Replies
 * Supports Resend API, SMTP (Hostinger/cPanel/Gmail), and In-Memory Lead Logging
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
 * Main Lead Email Dispatcher
 */
export async function sendLeadEmails(lead: LeadData, ipAddress?: string): Promise<EmailSendResult> {
  const adminEmail = process.env.ADMIN_EMAIL || 'avrx.india@gmail.com';
  const emailFrom = process.env.EMAIL_FROM || 'contact@avrx.in';
  const fromName = process.env.EMAIL_FROM_NAME || 'AVRX Digital & Financial Solution';
  const formattedSender = `${fromName} <${emailFrom}>`;

  // API Key for Transactional Providers (Resend)
  const resendApiKey = process.env.RESEND_API_KEY || process.env.EMAIL_API_KEY;

  // SMTP Settings
  const smtpHost = process.env.SMTP_HOST || 'mail.avrx.in';
  const smtpPort = Number(process.env.SMTP_PORT) || 465;
  const smtpUser = process.env.SMTP_USER || process.env.EMAIL_FROM || 'contact@avrx.in';
  const smtpPass = process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD;
  const smtpSecure = process.env.SMTP_SECURE === 'true' || smtpPort === 465;

  const adminSubject = `New AVRX Website Enquiry — ${lead.name} — ${lead.serviceCategory}`;
  const clientSubject = `We Received Your Enquiry — AVRX Digital & Financial Solution`;

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

    // 1a. Dispatch Admin Notification
    const adminRes = await sendViaResend(
      resendApiKey,
      formattedSender,
      adminEmail,
      lead.email, // Reply-To client's email so clicking Reply goes to the user!
      adminSubject,
      adminHtml,
      adminText
    );
    adminEmailSent = adminRes.success;
    adminError = adminRes.error;

    // 1b. Dispatch Client Confirmation
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

      // 2a. Admin Notification
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

      // 2b. Client Auto-Reply
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
    } catch (err: any) {
      adminError = err?.message || 'SMTP Transporter init failed';
      console.error('[AVRX EMAIL] Transporter Error:', err?.message || err);
    }
  }
  // 3. Fallback: Log and record lead in memory / persistent store
  else {
    transportMode = 'simulated-logged';
    adminEmailSent = true;
    clientEmailSent = true;
    console.log(`[AVRX LEAD SIMULATION] Lead ${lead.id} received from ${lead.name} (${lead.email}). Captured and saved.`);
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

