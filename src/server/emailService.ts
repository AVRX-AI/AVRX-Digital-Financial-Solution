/**
 * AVRX Email Automation & Delivery Service
 * Uses Nodemailer with Hostingspell / cPanel SMTP Configuration
 * Host: mail.avrx.in | Port: 465 | SSL/TLS: true
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
  clientEmailSent: boolean;
  adminEmailSent: boolean;
  simulated: boolean;
  error?: string;
}

/**
 * Sanitize header strings against email header injection attacks
 */
function sanitizeHeader(str: string): string {
  if (!str) return '';
  return str.replace(/[\r\n]/g, ' ').trim();
}

/**
 * Create Nodemailer SMTP Transporter using Environment Variables
 */
function createSmtpTransporter(): nodemailer.Transporter | null {
  const host = process.env.SMTP_HOST || 'mail.avrx.in';
  const port = Number(process.env.SMTP_PORT) || 465;
  const user = process.env.SMTP_USER || process.env.EMAIL_FROM || 'contact@avrx.in';
  const pass = process.env.SMTP_PASS;
  const secure = process.env.SMTP_SECURE === 'true' || port === 465;

  if (!pass) {
    console.warn('[AVRX SMTP NOTICE] process.env.SMTP_PASS is not configured. Email will run in safe simulation mode.');
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure, // true for port 465 (SSL/TLS)
    auth: {
      user,
      pass
    },
    tls: {
      // Do not fail on valid self-signed cPanel certificates if present
      rejectUnauthorized: false
    }
  });
}

/**
 * Send dual emails via Hostingspell SMTP:
 * 1. Admin notification to contact@avrx.in
 * 2. Customer auto-reply confirmation to client
 */
export async function sendLeadEmails(lead: LeadData, ipAddress?: string): Promise<EmailSendResult> {
  const emailFrom = process.env.EMAIL_FROM || 'contact@avrx.in';
  const adminEmail = process.env.ADMIN_EMAIL || 'contact@avrx.in';

  // Professional sender formatting
  const formattedSender = emailFrom.includes('<')
    ? emailFrom
    : `AVRX Digital & Financial Solution <${emailFrom}>`;

  const replyTo = process.env.SMTP_USER || emailFrom;

  const clientHtml = generateClientConfirmationHtml(lead);
  const clientText = generateClientConfirmationText(lead);
  const adminHtml = generateAdminNotificationHtml(lead);
  const adminText = generateAdminNotificationText(lead);

  const cleanName = sanitizeHeader(lead.name);
  const cleanService = sanitizeHeader(lead.serviceCategory);
  const adminSubject = `New Website Enquiry – AVRX Digital & Financial Solution (${cleanName} – ${cleanService})`;
  const clientSubject = `Thank You for Contacting AVRX Digital & Financial Solution (${lead.id})`;

  let clientEmailSent = false;
  let adminEmailSent = false;
  let isSimulated = false;
  let lastError: string | undefined = undefined;

  console.log(`[AVRX LEAD PROCESSOR] Processing lead ${lead.id} from ${lead.email} (${lead.serviceCategory})`);

  const transporter = createSmtpTransporter();

  if (transporter) {
    try {
      // 1. Send Admin Notification Email
      try {
        const adminInfo = await transporter.sendMail({
          from: formattedSender,
          to: adminEmail,
          replyTo: lead.email,
          subject: adminSubject,
          text: adminText,
          html: adminHtml
        });
        adminEmailSent = true;
        console.log(`[AVRX SMTP] Admin notification sent to ${adminEmail}. Message ID: ${adminInfo.messageId}`);
      } catch (err: any) {
        console.error(`[AVRX SMTP ERROR] Failed sending to admin ${adminEmail}:`, err?.message || err);
        lastError = err?.message || 'Admin email dispatch failed';
      }

      // 2. Send Customer Confirmation Auto-Reply
      try {
        const clientInfo = await transporter.sendMail({
          from: formattedSender,
          to: lead.email,
          replyTo,
          subject: clientSubject,
          text: clientText,
          html: clientHtml
        });
        clientEmailSent = true;
        console.log(`[AVRX SMTP] Customer auto-reply sent to ${lead.email}. Message ID: ${clientInfo.messageId}`);
      } catch (err: any) {
        console.error(`[AVRX SMTP ERROR] Failed sending auto-reply to client ${lead.email}:`, err?.message || err);
        if (!lastError) lastError = err?.message || 'Customer email dispatch failed';
      }

    } catch (err: any) {
      console.error(`[AVRX SMTP CRITICAL ERROR] SMTP transporter error:`, err?.message || err);
      lastError = err?.message || 'SMTP service error';
    }
  } else {
    // Simulated delivery mode (When SMTP_PASS is pending in environment variables)
    isSimulated = true;
    clientEmailSent = true;
    adminEmailSent = true;
    console.warn(`[AVRX SMTP SIMULATION] SMTP credentials not set yet. Lead ${lead.id} backed up securely to lead store.`);
  }

  // Save to persistent database store
  const leadRecord: LeadRecord = {
    ...lead,
    status: 'New',
    emailStatus: (clientEmailSent && adminEmailSent) ? (isSimulated ? 'simulated' : 'sent') : 'failed',
    emailError: lastError,
    ipAddress
  };

  saveLead(leadRecord);

  return {
    success: true,
    leadId: lead.id,
    clientEmailSent,
    adminEmailSent,
    simulated: isSimulated,
    error: lastError
  };
}
