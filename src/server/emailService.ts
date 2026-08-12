/**
 * AVRX Email Automation & Delivery Service
 * Compatible with Resend API and Nodemailer/SMTP
 */

import { Resend } from 'resend';
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
 * Sanitize header strings against header injection attacks
 */
function sanitizeHeader(str: string): string {
  if (!str) return '';
  return str.replace(/[\r\n]/g, ' ').trim();
}

/**
 * Send dual emails: Client Confirmation & Admin Lead Notification
 */
export async function sendLeadEmails(lead: LeadData, ipAddress?: string): Promise<EmailSendResult> {
  const emailFrom = process.env.EMAIL_FROM || 'support@avrx.in';
  const adminEmail = process.env.ADMIN_EMAIL || 'support@avrx.in';
  const resendApiKey = process.env.RESEND_API_KEY;

  // Format sender name and email
  const formattedSender = emailFrom.includes('<') 
    ? emailFrom 
    : `AVRX Digital & Financial Solution <${emailFrom}>`;

  const clientHtml = generateClientConfirmationHtml(lead);
  const clientText = generateClientConfirmationText(lead);
  const adminHtml = generateAdminNotificationHtml(lead);
  const adminText = generateAdminNotificationText(lead);

  const cleanName = sanitizeHeader(lead.name);
  const cleanService = sanitizeHeader(lead.serviceCategory);
  const adminSubject = `New Website Enquiry — ${cleanName} — ${cleanService}`;
  const clientSubject = `Enquiry Received — AVRX Digital & Financial Solution (${lead.id})`;

  let clientEmailSent = false;
  let adminEmailSent = false;
  let isSimulated = false;
  let lastError: string | undefined = undefined;

  console.log(`[AVRX EMAIL SERVICE] Processing lead ${lead.id} for ${lead.email} (${lead.serviceCategory})`);

  if (resendApiKey) {
    try {
      const resend = new Resend(resendApiKey);

      // 1. Send Client Confirmation Email
      try {
        const clientRes = await resend.emails.send({
          from: formattedSender,
          to: [lead.email],
          subject: clientSubject,
          html: clientHtml,
          text: clientText
        });
        if (clientRes.data) {
          clientEmailSent = true;
          console.log(`[AVRX EMAIL] Client confirmation email sent to ${lead.email}. Message ID: ${clientRes.data.id}`);
        } else if (clientRes.error) {
          console.error(`[AVRX EMAIL ERROR] Client email error:`, clientRes.error);
          lastError = clientRes.error.message;
        }
      } catch (err: any) {
        console.error(`[AVRX EMAIL ERROR] Failed sending to client ${lead.email}:`, err?.message || err);
        lastError = err?.message || String(err);
      }

      // 2. Send Admin Notification Email
      try {
        const adminRes = await resend.emails.send({
          from: formattedSender,
          to: [adminEmail],
          subject: adminSubject,
          html: adminHtml,
          text: adminText,
          replyTo: lead.email
        });
        if (adminRes.data) {
          adminEmailSent = true;
          console.log(`[AVRX EMAIL] Admin notification email sent to ${adminEmail}. Message ID: ${adminRes.data.id}`);
        } else if (adminRes.error) {
          console.error(`[AVRX EMAIL ERROR] Admin email error:`, adminRes.error);
          if (!lastError) lastError = adminRes.error.message;
        }
      } catch (err: any) {
        console.error(`[AVRX EMAIL ERROR] Failed sending to admin ${adminEmail}:`, err?.message || err);
        if (!lastError) lastError = err?.message || String(err);
      }

    } catch (err: any) {
      console.error(`[AVRX EMAIL SERVICE ERROR] Resend initialization/sending failed:`, err?.message || err);
      lastError = err?.message || String(err);
    }
  } else {
    // Simulated delivery mode (When RESEND_API_KEY is not yet added in environment variables)
    isSimulated = true;
    clientEmailSent = true;
    adminEmailSent = true;
    console.warn(`[AVRX EMAIL SERVICE NOTICE] RESEND_API_KEY is not set in environment variables.`);
    console.warn(`[AVRX EMAIL SERVICE NOTICE] Lead ${lead.id} saved securely in backup database. Add RESEND_API_KEY in Vercel settings for live dispatches.`);
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
