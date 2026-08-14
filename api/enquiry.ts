/**
 * Vercel Serverless Function: /api/enquiry
 * Handles Quick Enquiries and Newsletter Subscriptions
 */

import { sendLeadEmails } from './lib/emailService';
import { LeadData } from './lib/emailTemplates';

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
    return res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
    const { name, email, phone, serviceCategory, subject, message, sourcePage, website_hp } = body;

    if (website_hp) {
      return res.status(200).json({
        success: true,
        message: "Thank you! Your enquiry has been submitted successfully.",
        leadId: `AVRX-ENQ-${Date.now().toString().slice(-6)}`
      });
    }

    if (!email || !isValidEmail(email)) {
      return res.status(400).json({ success: false, error: "Please enter a valid email address." });
    }

    const leadId = `AVRX-ENQ-${Date.now().toString().slice(-6)}`;
    const formattedDate = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "short"
    }) + " IST";

    const leadData: LeadData = {
      id: leadId,
      name: name ? String(name).trim() : 'Website Visitor',
      email: String(email).trim().toLowerCase(),
      phone: phone ? String(phone).trim() : '+91 00000 00000',
      serviceCategory: serviceCategory ? String(serviceCategory).trim() : "AVRX Service Enquiry",
      subject: subject ? String(subject).trim() : "General Website Enquiry",
      message: message ? String(message).trim() : undefined,
      sourcePage: sourcePage ? String(sourcePage).trim() : "Quick Enquiry Form",
      createdAt: formattedDate
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
    console.error("[AVRX VERCEL ENQUIRY API ERROR]", err?.message || err);
    return res.status(500).json({
      success: false,
      error: "Your enquiry could not be submitted right now. Please try again or contact us directly."
    });
  }
}
