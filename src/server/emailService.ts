/**
 * AVRX Email Service (Express Internal)
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

export async function sendLeadEmails(lead: LeadData, ipAddress?: string): Promise<EmailSendResult> {
  const emailFrom = process.env.EMAIL_FROM || 'contact@avrx.in';
  const adminEmail = process.env.ADMIN_EMAIL || 'contact@avrx.in';
  const smtpHost = process.env.SMTP_HOST || 'mail.avrx.in';
  const smtpPort = Number(process.env.SMTP_PORT) || 465;
  const smtpUser = process.env.SMTP_USER || process.env.EMAIL_FROM || 'contact@avrx.in';
  const smtpPass = process.env.SMTP_PASS;
  const smtpSecure = process.env.SMTP_SECURE === 'true' || smtpPort === 465;

  let clientEmailSent = false;
  let adminEmailSent = false;
  let simulated = false;
  let lastError: string | undefined = undefined;

  if (smtpPass) {
    try {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpSecure,
        auth: { user: smtpUser, pass: smtpPass },
        tls: { rejectUnauthorized: false }
      });

      const formattedSender = `AVRX Digital & Financial Solution <${emailFrom}>`;

      // 1. Admin Email
      try {
        await transporter.sendMail({
          from: formattedSender,
          to: adminEmail,
          replyTo: lead.email,
          subject: `New Website Enquiry – AVRX Digital & Financial Solution (${lead.name} – ${lead.serviceCategory})`,
          text: generateAdminNotificationText(lead),
          html: generateAdminNotificationHtml(lead)
        });
        adminEmailSent = true;
      } catch (err: any) {
        lastError = err?.message || 'Admin email dispatch failed';
      }

      // 2. Client Email
      try {
        await transporter.sendMail({
          from: formattedSender,
          to: lead.email,
          replyTo: emailFrom,
          subject: `Thank You for Contacting AVRX Digital & Financial Solution (${lead.id})`,
          text: generateClientConfirmationText(lead),
          html: generateClientConfirmationHtml(lead)
        });
        clientEmailSent = true;
      } catch (err: any) {
        if (!lastError) lastError = err?.message || 'Client email dispatch failed';
      }
    } catch (err: any) {
      lastError = err?.message || 'SMTP transport failed';
    }
  } else {
    simulated = true;
    clientEmailSent = true;
    adminEmailSent = true;
  }

  const record: LeadRecord = {
    ...lead,
    status: 'New',
    emailStatus: (clientEmailSent && adminEmailSent) ? (simulated ? 'simulated' : 'sent') : 'failed',
    emailError: lastError,
    ipAddress
  };
  saveLead(record);

  return {
    success: true,
    leadId: lead.id,
    clientEmailSent,
    adminEmailSent,
    simulated,
    error: lastError
  };
}
