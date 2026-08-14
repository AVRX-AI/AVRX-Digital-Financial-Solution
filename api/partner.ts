/**
 * Vercel Serverless Function: /api/partner
 * Handles Partnership and Channel Agent Applications
 */

import { sendLeadEmails } from './lib/emailService';
import { LeadData } from './lib/emailTemplates';

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(String(email).trim());
}

function isValidPhone(phone: string): boolean {
  const digits = String(phone).replace(/\D/g, '');
  return digits.length >= 10 && digits.length <= 15;
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
    const { name, mobile, phone, email, city, location, partnerType, experience, website_hp } = body;

    if (website_hp) {
      return res.status(200).json({
        success: true,
        message: "Thank you! Your partner application has been submitted successfully.",
        leadId: `AVRX-PTR-${Date.now().toString().slice(-6)}`
      });
    }

    const contactPhone = mobile || phone;

    if (!name || String(name).trim().length < 2) {
      return res.status(400).json({ success: false, error: "Please enter your full name." });
    }
    if (!email || !isValidEmail(email)) {
      return res.status(400).json({ success: false, error: "Please enter a valid email address." });
    }
    if (!contactPhone || !isValidPhone(contactPhone)) {
      return res.status(400).json({ success: false, error: "Please enter a valid 10-digit mobile number." });
    }

    const partnerLeadId = `AVRX-PTR-${Date.now().toString().slice(-6)}`;
    const formattedDate = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "short"
    }) + " IST";

    const leadData: LeadData = {
      id: partnerLeadId,
      name: String(name).trim(),
      email: String(email).trim().toLowerCase(),
      phone: String(contactPhone).trim(),
      location: (city || location) ? String(city || location).trim() : undefined,
      serviceCategory: `Partner Application — ${partnerType || 'Referral Partner'}`,
      subject: `AVRX Channel Partnership Application`,
      message: experience ? `Partner Experience: ${experience}` : "Partner Application Submitted",
      sourcePage: "Partner With Us Page",
      createdAt: formattedDate,
      additionalFields: {
        "Partnership Type": partnerType || "Referral Partner / Agent",
        "Experience / Background": experience || "N/A"
      }
    };

    const clientIp = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || '127.0.0.1';
    const emailResult = await sendLeadEmails(leadData, String(clientIp));

    return res.status(200).json({
      success: true,
      message: "Thank you! Your partner application has been submitted successfully. Our team will contact you shortly.",
      leadId: partnerLeadId,
      emailDelivered: emailResult.clientEmailSent && emailResult.adminEmailSent
    });

  } catch (err: any) {
    console.error("[AVRX VERCEL PARTNER API ERROR]", err?.message || err);
    return res.status(500).json({
      success: false,
      error: "Your enquiry could not be submitted right now. Please try again or contact us directly."
    });
  }
}
