/**
 * Vercel Serverless Function: /api/send-form-email
 * Universal handler for form lead submissions on AVRX.in
 */

import { sendLeadEmails } from '../src/server/emailService';
import { LeadData } from '../src/server/emailTemplates';

interface GenericReq {
  method?: string;
  body?: any;
  headers: Record<string, any>;
  socket?: { remoteAddress?: string };
}

interface GenericRes {
  status: (code: number) => GenericRes;
  json: (data: any) => void;
  setHeader: (name: string, value: any) => void;
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(String(email).trim());
}

function isValidPhone(phone: string): boolean {
  const digits = String(phone).replace(/\D/g, '');
  return digits.length >= 10 && digits.length <= 15;
}

export default async function handler(req: GenericReq, res: GenericRes) {
  // Only accept POST requests
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ success: false, error: `Method ${req.method} Not Allowed` });
  }

  try {
    const body = req.body || {};
    const {
      name,
      fullName,
      clientName,
      email,
      emailAddress,
      phone,
      mobile,
      phoneNumber,
      location,
      city,
      state,
      service,
      serviceCategory,
      subject,
      message,
      comments,
      requirements,
      website_hp,
      hp_field,
      _hp,
      sourcePage,
      formType,
      additionalFields
    } = body;

    // 1. Honeypot check for spambots
    if (website_hp || hp_field || _hp) {
      return res.status(200).json({
        success: true,
        message: "Thank You!\n\nYour enquiry has been submitted successfully.\n\nOur AVRX team will contact you shortly.",
        leadId: `AVRX-LEAD-${Date.now().toString().slice(-6)}`,
        adminEmailSent: true,
        clientEmailSent: true
      });
    }

    // 2. Client IP
    const clientIp = (req.headers['x-forwarded-for'] as string || req.socket?.remoteAddress || '127.0.0.1').split(',')[0].trim();

    // 3. Normalization & Validation
    const resolvedName = String(name || fullName || clientName || '').trim();
    const resolvedEmail = String(email || emailAddress || '').trim().toLowerCase();
    const resolvedPhone = String(phone || mobile || phoneNumber || '').trim();
    const resolvedService = String(service || serviceCategory || subject || 'Digital & Financial Solution').trim();
    const resolvedLocation = String(location || (city && state ? `${city}, ${state}` : city || state) || '').trim();
    const resolvedMessage = String(message || comments || requirements || '').trim();
    const resolvedSource = String(sourcePage || formType || 'AVRX.in Website Form').trim();

    if (!resolvedName || resolvedName.length < 2) {
      return res.status(400).json({ success: false, error: "Please enter your full name." });
    }
    if (!resolvedEmail || !isValidEmail(resolvedEmail)) {
      return res.status(400).json({ success: false, error: "Please enter a valid email address." });
    }
    if (!resolvedPhone || !isValidPhone(resolvedPhone)) {
      return res.status(400).json({ success: false, error: "Please enter a valid 10-digit mobile number." });
    }

    // 4. Construct Lead Payload
    const leadId = `AVRX-LEAD-${Date.now().toString().slice(-6)}`;
    const formattedDate = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "short"
    }) + " IST";

    const leadData: LeadData = {
      id: leadId,
      name: resolvedName,
      email: resolvedEmail,
      phone: resolvedPhone,
      location: resolvedLocation || undefined,
      city: city ? String(city).trim() : undefined,
      serviceCategory: resolvedService,
      subject: subject ? String(subject).trim() : `Website Inquiry – ${resolvedService}`,
      message: resolvedMessage || undefined,
      sourcePage: resolvedSource,
      formType: formType ? String(formType).trim() : undefined,
      createdAt: formattedDate,
      ipAddress: clientIp,
      additionalFields: additionalFields && typeof additionalFields === 'object' ? additionalFields : undefined
    };

    // 5. Send Admin Notification and Client Auto-Reply
    const emailResult = await sendLeadEmails(leadData, clientIp);

    // 6. Return response
    return res.status(200).json({
      success: true,
      message: "Thank You!\n\nYour enquiry has been submitted successfully.\n\nOur AVRX team will contact you shortly.",
      leadId: leadData.id,
      adminEmailSent: emailResult.adminEmailSent,
      clientEmailSent: emailResult.clientEmailSent,
      transport: emailResult.transport
    });

  } catch (err: any) {
    console.error("[VERCEL /api/send-form-email ERROR]", err?.message || err);
    return res.status(500).json({
      success: false,
      error: "Unable to submit your enquiry right now. Please try again or contact us directly at +91 96306 61536."
    });
  }
}

