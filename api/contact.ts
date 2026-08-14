/**
 * Vercel Serverless Function: /api/contact
 * Handles Contact Us and General Inquiries with Hostingspell cPanel SMTP
 */

import { sendLeadEmails } from '../src/server/emailService';
import { LeadData } from '../src/server/emailTemplates';

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(String(email).trim());
}

function isValidPhone(phone: string): boolean {
  const digits = String(phone).replace(/\D/g, '');
  return digits.length >= 10 && digits.length <= 15;
}

export default async function handler(req: any, res: any) {
  // CORS Headers for API flexibility
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
    const { name, email, phone, location, city, serviceCategory, subject, message, website_hp, sourcePage, additionalFields } = body;

    // Honeypot check for bots
    if (website_hp) {
      return res.status(200).json({
        success: true,
        message: "Thank you! Your enquiry has been submitted successfully. Our team will contact you shortly.",
        leadId: `AVRX-LEAD-${Date.now().toString().slice(-6)}`,
        emailDelivered: true
      });
    }

    // Required fields validation
    if (!name || String(name).trim().length < 2) {
      return res.status(400).json({ success: false, error: "Please enter your full name." });
    }
    if (!email || !isValidEmail(email)) {
      return res.status(400).json({ success: false, error: "Please enter a valid email address." });
    }
    if (!phone || !isValidPhone(phone)) {
      return res.status(400).json({ success: false, error: "Please enter a valid 10-digit mobile number." });
    }

    const leadId = `AVRX-LEAD-${Date.now().toString().slice(-6)}`;
    const formattedDate = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "short"
    }) + " IST";

    const leadData: LeadData = {
      id: leadId,
      name: String(name).trim(),
      email: String(email).trim().toLowerCase(),
      phone: String(phone).trim(),
      location: (location || city) ? String(location || city).trim() : undefined,
      serviceCategory: serviceCategory ? String(serviceCategory).trim() : "General Digital & Financial Solution",
      subject: subject ? String(subject).trim() : (serviceCategory ? String(serviceCategory).trim() : "Website Inquiry"),
      message: message ? String(message).trim() : undefined,
      sourcePage: sourcePage ? String(sourcePage).trim() : "Contact Page",
      createdAt: formattedDate,
      additionalFields: additionalFields && typeof additionalFields === 'object' ? additionalFields : undefined
    };

    const clientIp = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || '127.0.0.1';
    const emailResult = await sendLeadEmails(leadData, String(clientIp));

    return res.status(200).json({
      success: true,
      message: "Thank you! Your enquiry has been submitted successfully. Our team will contact you shortly.",
      leadId: leadData.id,
      emailDelivered: emailResult.clientEmailSent && emailResult.adminEmailSent
    });

  } catch (err: any) {
    console.error("[AVRX VERCEL API ERROR]", err?.message || err);
    return res.status(500).json({
      success: false,
      error: "Your enquiry could not be submitted right now. Please try again or contact us directly."
    });
  }
}
