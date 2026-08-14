/**
 * Vercel Serverless Function: /api/enquiry
 * 100% Self-Contained — No local relative module imports
 * Uses Nodemailer with Hostingspell / cPanel Direct SMTP
 */

import nodemailer from 'nodemailer';

function escapeHtml(text: any): string {
  if (text === null || text === undefined) return '';
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function sanitizeHeader(str: string): string {
  if (!str) return '';
  return str.replace(/[\r\n]/g, ' ').trim();
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(String(email).trim());
}

export default async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed', error: 'Method Not Allowed' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
    const { name, email, phone, serviceCategory, subject, message, sourcePage, website_hp } = body;

    if (website_hp) {
      return res.status(200).json({
        success: true,
        message: 'Thank you! Your enquiry has been submitted successfully.',
        leadId: `AVRX-ENQ-${Date.now().toString().slice(-6)}`
      });
    }

    if (!email || !isValidEmail(email)) {
      return res.status(400).json({ success: false, message: 'Please enter a valid email address.', error: 'Please enter a valid email address.' });
    }

    const leadId = `AVRX-ENQ-${Date.now().toString().slice(-6)}`;
    const formattedDate = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'short'
    }) + ' IST';

    const cleanName = sanitizeHeader(name || 'Website Visitor');
    const cleanEmail = String(email).trim().toLowerCase();
    const cleanPhone = sanitizeHeader(phone || '+91 00000 00000');
    const cleanService = sanitizeHeader(serviceCategory || 'AVRX Service Enquiry');
    const cleanSubject = sanitizeHeader(subject || 'General Website Enquiry');
    const cleanMessage = String(message || 'Enquiry submitted via quick form').trim();

    const smtpHost = process.env.SMTP_HOST || 'mail.avrx.in';
    const smtpPort = Number(process.env.SMTP_PORT) || 465;
    const smtpUser = process.env.SMTP_USER || process.env.EMAIL_FROM || 'contact@avrx.in';
    const smtpPass = process.env.SMTP_PASS;
    const smtpSecure = process.env.SMTP_SECURE === 'true' || smtpPort === 465;
    const emailFrom = process.env.EMAIL_FROM || 'contact@avrx.in';
    const adminEmail = process.env.ADMIN_EMAIL || 'contact@avrx.in';

    const formattedSender = `AVRX Digital & Financial Solution <${emailFrom}>`;

    if (smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpSecure,
        auth: { user: smtpUser, pass: smtpPass },
        tls: { rejectUnauthorized: false }
      });

      const adminHtml = `<!DOCTYPE html>
<html>
<body style="margin:0; padding:20px; background-color:#050811; font-family:sans-serif; color:#e2e8f0;">
  <div style="max-width:600px; margin:0 auto; background-color:#0b0f19; border:1px solid #1e293b; border-radius:12px; padding:20px;">
    <div style="color:#00f0ff; font-weight:bold; font-size:16px; margin-bottom:12px;">New Quick Enquiry / Newsletter Subscription</div>
    <p><strong>Lead ID:</strong> ${escapeHtml(leadId)}</p>
    <p><strong>Name:</strong> ${escapeHtml(cleanName)}</p>
    <p><strong>Email:</strong> <a href="mailto:${escapeHtml(cleanEmail)}" style="color:#38bdf8;">${escapeHtml(cleanEmail)}</a></p>
    <p><strong>Phone:</strong> ${escapeHtml(cleanPhone)}</p>
    <p><strong>Service / Category:</strong> ${escapeHtml(cleanService)}</p>
    <p><strong>Message / Note:</strong> ${escapeHtml(cleanMessage)}</p>
    <p style="font-size:11px; color:#64748b;">Date: ${escapeHtml(formattedDate)} | Source: ${escapeHtml(sourcePage || 'Website')}</p>
  </div>
</body>
</html>`;

      await transporter.sendMail({
        from: formattedSender,
        to: adminEmail,
        replyTo: cleanEmail,
        subject: `New Enquiry – AVRX Digital & Financial Solution (${cleanName})`,
        text: `New Enquiry:\nLead ID: ${leadId}\nName: ${cleanName}\nEmail: ${cleanEmail}\nPhone: ${cleanPhone}\nService: ${cleanService}\nMessage: ${cleanMessage}\nDate: ${formattedDate}`,
        html: adminHtml
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Thank you! Your enquiry has been submitted successfully.',
      leadId
    });
  } catch (err: any) {
    console.error('[AVRX ENQUIRY ERROR]', err?.message || err);
    return res.status(500).json({
      success: false,
      message: 'Unable to submit your enquiry right now. Please try again or contact us directly.',
      error: 'Unable to submit your enquiry right now. Please try again or contact us directly.'
    });
  }
}
