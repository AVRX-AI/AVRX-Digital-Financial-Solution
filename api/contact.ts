/**
 * Vercel Serverless Function: /api/contact
 * 100% Self-Contained — No local relative module imports
 * Uses Nodemailer with Hostingspell / cPanel Direct SMTP
 */

import nodemailer from 'nodemailer';

// Helper to escape HTML and prevent XSS in email previewers
function escapeHtml(text: any): string {
  if (text === null || text === undefined) return '';
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Clean single-line header values to prevent header injection
function sanitizeHeader(str: string): string {
  if (!str) return '';
  return str.replace(/[\r\n]/g, ' ').trim();
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(String(email).trim());
}

function isValidPhone(phone: string): boolean {
  const digits = String(phone).replace(/\D/g, '');
  return digits.length >= 10 && digits.length <= 15;
}

export default async function handler(req: any, res: any) {
  // CORS Headers for API requests
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method Not Allowed',
      error: 'Method Not Allowed'
    });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
    
    // Support all possible frontend field naming conventions
    const name = body.name || body.fullName || body.clientName || '';
    const email = body.email || body.emailAddress || '';
    const phone = body.phone || body.mobile || body.phoneNumber || body.whatsapp || '';
    const location = body.location || body.city || body.state || '';
    const serviceCategory = body.serviceCategory || body.service || 'Digital & Financial Solutions';
    const subject = body.subject || serviceCategory || 'Website Enquiry';
    const message = body.message || body.requirements || body.notes || '';
    const website_hp = body.website_hp || '';
    const sourcePage = body.sourcePage || 'Contact Page';
    const additionalFields = body.additionalFields && typeof body.additionalFields === 'object' ? body.additionalFields : undefined;

    // 1. Honeypot check for spambots
    if (website_hp) {
      console.warn('[AVRX SECURITY] Honeypot field triggered by bot');
      return res.status(200).json({
        success: true,
        message: 'Thank you! Your enquiry has been submitted successfully. Our team will contact you shortly.',
        leadId: `AVRX-LEAD-${Date.now().toString().slice(-6)}`
      });
    }

    // 2. Input Validation
    if (!name || String(name).trim().length < 2) {
      return res.status(400).json({
        success: false,
        message: 'Please enter your full name.',
        error: 'Please enter your full name.'
      });
    }
    if (!email || !isValidEmail(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please enter a valid email address.',
        error: 'Please enter a valid email address.'
      });
    }
    if (!phone || !isValidPhone(phone)) {
      return res.status(400).json({
        success: false,
        message: 'Please enter a valid 10-digit mobile number.',
        error: 'Please enter a valid 10-digit mobile number.'
      });
    }

    // 3. Generate Reference Lead ID & Timestamp
    const leadId = `AVRX-LEAD-${Date.now().toString().slice(-6)}`;
    const formattedDate = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'short'
    }) + ' IST';

    const cleanName = sanitizeHeader(String(name).trim());
    const cleanEmail = String(email).trim().toLowerCase();
    const cleanPhone = sanitizeHeader(String(phone).trim());
    const cleanLocation = sanitizeHeader(String(location).trim()) || 'Not Specified';
    const cleanService = sanitizeHeader(String(serviceCategory).trim());
    const cleanSubject = sanitizeHeader(String(subject).trim());
    const cleanMessage = String(message).trim() || 'No message provided';

    // 4. SMTP Configuration from Environment Variables
    const smtpHost = process.env.SMTP_HOST || 'mail.avrx.in';
    const smtpPort = Number(process.env.SMTP_PORT) || 465;
    const smtpUser = process.env.SMTP_USER || process.env.EMAIL_FROM || 'contact@avrx.in';
    const smtpPass = process.env.SMTP_PASS;
    const smtpSecure = process.env.SMTP_SECURE === 'true' || smtpPort === 465;
    const emailFrom = process.env.EMAIL_FROM || 'contact@avrx.in';
    const adminEmail = process.env.ADMIN_EMAIL || 'contact@avrx.in';

    const formattedSender = `AVRX Digital & Financial Solution <${emailFrom}>`;

    console.log(`[AVRX CONTACT] Processing lead ${leadId} for ${cleanEmail} (${cleanService})`);

    // If SMTP_PASS is configured, create Nodemailer transport and send real emails
    if (smtpPass) {
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

      // Build Admin HTML Email
      let additionalFieldsHtml = '';
      if (additionalFields) {
        additionalFieldsHtml = Object.entries(additionalFields)
          .map(([k, v]) => `<div style="margin-bottom: 6px;"><strong style="color: #94a3b8;">${escapeHtml(k)}:</strong> <span style="color: #f8fafc;">${escapeHtml(String(v))}</span></div>`)
          .join('');
      }

      const adminHtml = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>New Website Lead - AVRX</title>
</head>
<body style="margin:0; padding:20px; background-color:#050811; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color:#e2e8f0;">
  <div style="max-width:640px; margin:0 auto; background-color:#0b0f19; border:1px solid #1e293b; border-radius:14px; overflow:hidden;">
    <div style="background:linear-gradient(90deg, #00f0ff 0%, #3b82f6 100%); padding:16px 24px; color:#030712; font-weight:900; font-size:14px; text-transform:uppercase; letter-spacing:1px;">
      🚨 NEW WEBSITE ENQUIRY LEAD — AVRX PLATFORM
    </div>
    <div style="padding:24px;">
      <h3 style="color:#00f0ff; font-size:13px; text-transform:uppercase; margin:0 0 12px 0; border-bottom:1px solid #1e293b; padding-bottom:4px;">Client Details</h3>
      <div style="background-color:#050811; border:1px solid #1e293b; border-radius:8px; padding:14px; margin-bottom:16px; font-size:13px; line-height:1.6;">
        <div><strong style="color:#94a3b8;">Lead ID:</strong> <span style="color:#00f0ff; font-weight:bold;">${escapeHtml(leadId)}</span></div>
        <div><strong style="color:#94a3b8;">Client Name:</strong> <span style="color:#ffffff; font-weight:bold;">${escapeHtml(cleanName)}</span></div>
        <div><strong style="color:#94a3b8;">Email Address:</strong> <a href="mailto:${escapeHtml(cleanEmail)}" style="color:#38bdf8;">${escapeHtml(cleanEmail)}</a></div>
        <div><strong style="color:#94a3b8;">Phone / WhatsApp:</strong> <a href="tel:${escapeHtml(cleanPhone.replace(/\s+/g, ''))}" style="color:#34d399; font-weight:bold;">${escapeHtml(cleanPhone)}</a></div>
        <div><strong style="color:#94a3b8;">Location / City:</strong> <span style="color:#ffffff;">${escapeHtml(cleanLocation)}</span></div>
      </div>

      <h3 style="color:#00f0ff; font-size:13px; text-transform:uppercase; margin:0 0 12px 0; border-bottom:1px solid #1e293b; padding-bottom:4px;">Service Information</h3>
      <div style="background-color:#050811; border:1px solid #1e293b; border-radius:8px; padding:14px; margin-bottom:16px; font-size:13px; line-height:1.6;">
        <div><strong style="color:#94a3b8;">Requested Service:</strong> <span style="color:#ffffff; font-weight:bold;">${escapeHtml(cleanService)}</span></div>
        <div><strong style="color:#94a3b8;">Subject:</strong> <span style="color:#ffffff;">${escapeHtml(cleanSubject)}</span></div>
        ${additionalFieldsHtml}
      </div>

      <h3 style="color:#00f0ff; font-size:13px; text-transform:uppercase; margin:0 0 12px 0; border-bottom:1px solid #1e293b; padding-bottom:4px;">Message / Requirements</h3>
      <div style="background-color:#050811; border:1px solid #1e293b; border-left:4px solid #00f0ff; border-radius:8px; padding:14px; margin-bottom:16px; font-size:13px; line-height:1.6; white-space:pre-wrap; color:#e2e8f0;">
        ${escapeHtml(cleanMessage)}
      </div>

      <div style="font-size:11px; color:#64748b; margin-top:20px;">
        Submitted On: ${escapeHtml(formattedDate)} | Source: ${escapeHtml(sourcePage)}
      </div>
    </div>
    <div style="background-color:#050811; border-top:1px solid #1e293b; padding:14px 24px; font-size:11px; color:#64748b; text-align:center;">
      AVRX Lead Engine | Notification for ${escapeHtml(adminEmail)} | https://avrx.in
    </div>
  </div>
</body>
</html>`;

      const adminText = `NEW WEBSITE ENQUIRY LEAD — AVRX DIGITAL & FINANCIAL SOLUTION
==================================================
Lead ID: ${leadId}
Client Name: ${cleanName}
Email: ${cleanEmail}
Phone: ${cleanPhone}
Location: ${cleanLocation}
Service: ${cleanService}
Subject: ${cleanSubject}

MESSAGE / REQUIREMENTS:
${cleanMessage}

Submitted On: ${formattedDate}
Source: ${sourcePage}
==================================================`;

      // 1. Send Admin Email
      try {
        const adminRes = await transporter.sendMail({
          from: formattedSender,
          to: adminEmail,
          replyTo: cleanEmail,
          subject: `New Website Enquiry – AVRX Digital & Financial Solution (${cleanName} – ${cleanService})`,
          text: adminText,
          html: adminHtml
        });
        console.log(`[AVRX SMTP] Admin email sent to ${adminEmail}, MessageId: ${adminRes.messageId}`);
      } catch (adminErr: any) {
        console.error('[AVRX SMTP ERROR] Failed sending to admin:', adminErr?.message || adminErr);
        throw new Error('Failed sending admin notification email');
      }

      // 2. Build Customer Confirmation Email
      const clientHtml = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Enquiry Confirmation - AVRX</title>
</head>
<body style="margin:0; padding:20px; background-color:#050811; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color:#e2e8f0;">
  <div style="max-width:600px; margin:0 auto; background-color:#0b0f19; border:1px solid #1e293b; border-radius:14px; overflow:hidden;">
    <div style="background:linear-gradient(135deg, #090d16 0%, #111827 100%); padding:24px; text-align:center; border-bottom:1px solid #1e293b;">
      <h1 style="font-size:22px; font-weight:900; color:#ffffff; margin:0;">AVRX<span style="color:#00f0ff;">.</span></h1>
      <div style="font-size:11px; color:#94a3b8; letter-spacing:2px; text-transform:uppercase; margin-top:4px;">Digital & Financial Solution</div>
    </div>
    <div style="padding:28px;">
      <div style="font-size:17px; font-weight:bold; color:#ffffff; margin-bottom:14px;">Dear ${escapeHtml(cleanName)},</div>
      <p style="font-size:14px; line-height:1.6; color:#cbd5e1; margin-bottom:18px;">
        Thank you for contacting <strong>AVRX Digital & Financial Solution</strong>. We have received your enquiry regarding <strong>${escapeHtml(cleanService)}</strong>.
      </p>
      <div style="background-color:#050811; border:1px solid #1e293b; border-left:4px solid #00f0ff; border-radius:8px; padding:16px; margin:20px 0; font-size:13px; line-height:1.6;">
        <div style="color:#00f0ff; font-weight:bold; font-size:12px; text-transform:uppercase; letter-spacing:1px; margin-bottom:8px;">Enquiry Summary</div>
        <div><strong style="color:#94a3b8;">Reference Lead ID:</strong> <span style="color:#ffffff;">${escapeHtml(leadId)}</span></div>
        <div><strong style="color:#94a3b8;">Requested Service:</strong> <span style="color:#ffffff;">${escapeHtml(cleanService)}</span></div>
        <div><strong style="color:#94a3b8;">Contact Number:</strong> <span style="color:#ffffff;">${escapeHtml(cleanPhone)}</span></div>
        <div><strong style="color:#94a3b8;">Submitted Date:</strong> <span style="color:#ffffff;">${escapeHtml(formattedDate)}</span></div>
        <div style="margin-top:10px; display:inline-block; background-color:rgba(16,185,129,0.15); border:1px solid rgba(16,185,129,0.3); color:#34d399; font-size:12px; font-weight:bold; padding:4px 10px; border-radius:12px;">
          ✓ Status: Received & In Review
        </div>
      </div>
      <p style="font-size:14px; line-height:1.6; color:#cbd5e1; margin-bottom:20px;">
        Our specialist team is reviewing your requirement and will contact you directly within <strong>2 to 4 business hours</strong>.
      </p>
      <div style="text-align:center; margin:24px 0 10px 0;">
        <a href="https://avrx.in" style="display:inline-block; background:linear-gradient(90deg, #00f0ff, #3b82f6); color:#030712; font-size:13px; font-weight:bold; text-decoration:none; padding:12px 24px; border-radius:8px;">
          Visit Official Website &rarr;
        </a>
      </div>
    </div>
    <div style="background-color:#050811; border-top:1px solid #1e293b; padding:18px 24px; text-align:center; font-size:11px; color:#64748b;">
      <p style="margin:0 0 6px 0; color:#94a3b8; font-weight:bold;">AVRX Digital & Financial Solution</p>
      <p style="margin:0 0 4px 0;">Official Support: <a href="mailto:contact@avrx.in" style="color:#00f0ff; text-decoration:none;">contact@avrx.in</a> | Phone: +91 96306 61536</p>
      <p style="margin:0;">Headquarters: NH343 Waterpark Surguja Chhattisgarh INDIA | https://avrx.in</p>
    </div>
  </div>
</body>
</html>`;

      const clientText = `Dear ${cleanName},

Thank you for contacting AVRX Digital & Financial Solution.

We have received your enquiry regarding ${cleanService}.

ENQUIRY DETAILS:
- Reference ID: ${leadId}
- Service: ${cleanService}
- Phone: ${cleanPhone}
- Date: ${formattedDate}

Our specialist will contact you shortly within 2 to 4 business hours.

Regards,
AVRX Digital & Financial Solution
Email: contact@avrx.in
Phone: +91 96306 61536
Website: https://avrx.in`;

      // 2. Send Customer Confirmation Email (graceful catch if customer email fails)
      try {
        const clientRes = await transporter.sendMail({
          from: formattedSender,
          to: cleanEmail,
          replyTo: emailFrom,
          subject: `Thank You for Contacting AVRX Digital & Financial Solution (${leadId})`,
          text: clientText,
          html: clientHtml
        });
        console.log(`[AVRX SMTP] Customer confirmation sent to ${cleanEmail}, MessageId: ${clientRes.messageId}`);
      } catch (clientErr: any) {
        console.error('[AVRX SMTP WARNING] Customer auto-reply failed:', clientErr?.message || clientErr);
      }
    } else {
      console.warn('[AVRX NOTICE] process.env.SMTP_PASS not set. Lead processed in fallback mode.');
    }

    // Return Success JSON
    return res.status(200).json({
      success: true,
      message: 'Thank you! Your enquiry has been submitted successfully. Our team will contact you shortly.',
      leadId
    });

  } catch (err: any) {
    console.error('[AVRX CONTACT ERROR]', err?.message || err);
    return res.status(500).json({
      success: false,
      message: 'Unable to submit your enquiry right now. Please try again or contact us directly.',
      error: 'Unable to submit your enquiry right now. Please try again or contact us directly.'
    });
  }
}
