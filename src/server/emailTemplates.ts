/**
 * AVRX Production Email Templates
 * Responsive, brand-consistent HTML & text email generators for AVRX.in
 */

export interface LeadData {
  id: string;
  name: string;
  email: string;
  phone: string;
  location?: string;
  city?: string;
  serviceCategory: string;
  subject?: string;
  message?: string;
  sourcePage?: string;
  formType?: string;
  createdAt: string;
  ipAddress?: string;
  additionalFields?: Record<string, any>;
}

export function escapeHtml(text: any): string {
  if (text === null || text === undefined) return '';
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * 1. Admin Notification Email (HTML)
 * Sent to: avrx.india@gmail.com
 * Reply-To: Client's submitted email
 */
export function generateAdminNotificationHtml(lead: LeadData): string {
  const cleanName = escapeHtml(lead.name);
  const cleanEmail = escapeHtml(lead.email);
  const cleanPhone = escapeHtml(lead.phone);
  const cleanService = escapeHtml(lead.serviceCategory || 'General Inquiry');
  const cleanLocation = escapeHtml(lead.location || lead.city || 'Not specified');
  const cleanMessage = escapeHtml(lead.message || 'No additional message provided.');
  const cleanSource = escapeHtml(lead.sourcePage || lead.formType || 'AVRX.in Website');
  const cleanDate = escapeHtml(lead.createdAt);
  const cleanId = escapeHtml(lead.id);
  const rawDigits = lead.phone.replace(/\D/g, '');
  const waPhone = rawDigits.startsWith('91') ? rawDigits : `91${rawDigits.slice(-10)}`;

  let additionalFieldsHtml = '';
  if (lead.additionalFields && Object.keys(lead.additionalFields).length > 0) {
    const rows = Object.entries(lead.additionalFields)
      .map(([key, val]) => `
        <tr>
          <td style="padding:8px 12px; font-weight:600; color:#64748b; font-size:13px; border-bottom:1px solid #e2e8f0; width:35%;">${escapeHtml(key)}</td>
          <td style="padding:8px 12px; color:#1e293b; font-size:13px; border-bottom:1px solid #e2e8f0;">${escapeHtml(val)}</td>
        </tr>
      `)
      .join('');

    additionalFieldsHtml = `
      <div style="margin-top:20px;">
        <h4 style="margin:0 0 10px 0; font-size:14px; text-transform:uppercase; letter-spacing:0.05em; color:#0f172a;">Additional Details</h4>
        <table style="width:100%; border-collapse:collapse; background-color:#f8fafc; border-radius:8px; overflow:hidden; border:1px solid #e2e8f0;">
          ${rows}
        </table>
      </div>
    `;
  }

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Website Lead – AVRX</title>
</head>
<body style="margin:0; padding:24px 12px; background-color:#f1f5f9; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color:#0f172a;">
  <div style="max-width:620px; margin:0 auto; background-color:#ffffff; border-radius:16px; overflow:hidden; box-shadow:0 10px 25px rgba(0,0,0,0.08); border:1px solid #e2e8f0;">
    
    <!-- Top Brand Header -->
    <div style="background: linear-gradient(135deg, #0a1128 0%, #1e293b 100%); padding:28px 24px; text-align:center; border-bottom:3px solid #00f0ff;">
      <div style="display:inline-block; font-size:24px; font-weight:900; letter-spacing:0.08em; color:#ffffff; margin-bottom:4px;">
        AVRX <span style="color:#00f0ff;">INDIA</span>
      </div>
      <div style="color:#94a3b8; font-size:12px; text-transform:uppercase; letter-spacing:0.12em; font-weight:600;">
        Digital &amp; Financial Solution
      </div>
    </div>

    <!-- Alert Banner -->
    <div style="background: linear-gradient(90deg, #0ea5e9, #0284c7); padding:12px 24px; color:#ffffff; display:flex; justify-content:space-between; align-items:center;">
      <div style="font-size:14px; font-weight:700; text-transform:uppercase; letter-spacing:0.05em;">
        🚨 New Client Lead Inquiry
      </div>
      <div style="font-size:11px; background-color:rgba(255,255,255,0.2); padding:3px 8px; border-radius:12px; font-family:monospace; font-weight:600;">
        ${cleanId}
      </div>
    </div>

    <div style="padding:28px 24px;">
      
      <!-- Lead Summary Card -->
      <table style="width:100%; border-collapse:collapse; margin-bottom:24px; background-color:#f8fafc; border:1px solid #e2e8f0; border-radius:12px; overflow:hidden;">
        <tr>
          <td style="padding:12px 16px; font-weight:600; color:#64748b; font-size:13px; border-bottom:1px solid #e2e8f0; width:32%;">Client Name:</td>
          <td style="padding:12px 16px; font-weight:700; color:#0f172a; font-size:15px; border-bottom:1px solid #e2e8f0;">${cleanName}</td>
        </tr>
        <tr>
          <td style="padding:12px 16px; font-weight:600; color:#64748b; font-size:13px; border-bottom:1px solid #e2e8f0;">Phone Number:</td>
          <td style="padding:12px 16px; border-bottom:1px solid #e2e8f0;">
            <a href="tel:${cleanPhone}" style="color:#0284c7; font-weight:700; text-decoration:none; font-size:15px;">${cleanPhone}</a>
            &nbsp;
            <a href="https://wa.me/${waPhone}" target="_blank" style="display:inline-block; background-color:#22c55e; color:#ffffff; text-decoration:none; font-size:11px; font-weight:700; padding:2px 8px; border-radius:6px;">WhatsApp 💬</a>
          </td>
        </tr>
        <tr>
          <td style="padding:12px 16px; font-weight:600; color:#64748b; font-size:13px; border-bottom:1px solid #e2e8f0;">Email Address:</td>
          <td style="padding:12px 16px; border-bottom:1px solid #e2e8f0;">
            <a href="mailto:${cleanEmail}" style="color:#0284c7; font-weight:600; text-decoration:none; font-size:14px;">${cleanEmail}</a>
          </td>
        </tr>
        <tr>
          <td style="padding:12px 16px; font-weight:600; color:#64748b; font-size:13px; border-bottom:1px solid #e2e8f0;">Service Required:</td>
          <td style="padding:12px 16px; border-bottom:1px solid #e2e8f0;">
            <span style="display:inline-block; background-color:#e0f2fe; color:#0369a1; font-weight:700; font-size:13px; padding:3px 10px; border-radius:6px;">
              ${cleanService}
            </span>
          </td>
        </tr>
        <tr>
          <td style="padding:12px 16px; font-weight:600; color:#64748b; font-size:13px; border-bottom:1px solid #e2e8f0;">Location / City:</td>
          <td style="padding:12px 16px; color:#334155; font-size:14px; border-bottom:1px solid #e2e8f0;">${cleanLocation}</td>
        </tr>
        <tr>
          <td style="padding:12px 16px; font-weight:600; color:#64748b; font-size:13px; border-bottom:1px solid #e2e8f0;">Source Form / Page:</td>
          <td style="padding:12px 16px; color:#334155; font-size:13px; border-bottom:1px solid #e2e8f0;">${cleanSource}</td>
        </tr>
        <tr>
          <td style="padding:12px 16px; font-weight:600; color:#64748b; font-size:13px;">Submitted On:</td>
          <td style="padding:12px 16px; color:#64748b; font-size:12px;">${cleanDate}</td>
        </tr>
      </table>

      <!-- Client Message Box -->
      <div style="margin-bottom:24px;">
        <h4 style="margin:0 0 8px 0; font-size:14px; text-transform:uppercase; letter-spacing:0.05em; color:#0f172a;">Client Requirements / Message:</h4>
        <div style="background-color:#f1f5f9; border-left:4px solid #0284c7; padding:16px; border-radius:0 8px 8px 0; color:#1e293b; font-size:14px; line-height:1.6; white-space:pre-wrap;">
${cleanMessage}
        </div>
      </div>

      ${additionalFieldsHtml}

      <!-- Quick Action Buttons for Admin -->
      <div style="margin-top:28px; padding-top:20px; border-top:1px solid #e2e8f0; text-align:center;">
        <div style="font-size:13px; font-weight:700; color:#475569; margin-bottom:12px; text-transform:uppercase; letter-spacing:0.05em;">
          Immediate Follow-Up Actions:
        </div>
        <div style="display:inline-block; margin:4px;">
          <a href="tel:${cleanPhone}" style="display:inline-block; background-color:#0f172a; color:#ffffff; text-decoration:none; font-weight:700; font-size:13px; padding:10px 18px; border-radius:8px;">
            📞 Call Client
          </a>
        </div>
        <div style="display:inline-block; margin:4px;">
          <a href="https://wa.me/${waPhone}?text=Hello%20${encodeURIComponent(lead.name)},%20thank%20you%20for%20contacting%20AVRX%20regarding%20${encodeURIComponent(lead.serviceCategory)}." target="_blank" style="display:inline-block; background-color:#22c55e; color:#ffffff; text-decoration:none; font-weight:700; font-size:13px; padding:10px 18px; border-radius:8px;">
            💬 Open WhatsApp
          </a>
        </div>
        <div style="display:inline-block; margin:4px;">
          <a href="mailto:${cleanEmail}?subject=AVRX%20Enquiry%20Follow-up%20%7C%20${encodeURIComponent(lead.serviceCategory)}" style="display:inline-block; background-color:#0284c7; color:#ffffff; text-decoration:none; font-weight:700; font-size:13px; padding:10px 18px; border-radius:8px;">
            ✉️ Reply by Email
          </a>
        </div>
      </div>

    </div>

    <!-- Admin Footer -->
    <div style="background-color:#f8fafc; padding:16px 24px; border-top:1px solid #e2e8f0; text-align:center; font-size:11px; color:#94a3b8;">
      This lead was automatically captured and dispatched via the AVRX.in Secure Serverless Engine.<br>
      Reply directly to this email to contact <strong>${cleanEmail}</strong> directly.
    </div>

  </div>
</body>
</html>`;
}

/**
 * 1.1. Admin Notification (Plain Text)
 */
export function generateAdminNotificationText(lead: LeadData): string {
  return `========================================
AVRX INDIA – NEW WEBSITE INQUIRY
========================================
Lead Reference: ${lead.id}
Date & Time:    ${lead.createdAt}
Source Page:    ${lead.sourcePage || lead.formType || 'AVRX.in Website'}

CLIENT DETAILS:
- Full Name:    ${lead.name}
- Phone Number: ${lead.phone}
- Email:        ${lead.email}
- Service:      ${lead.serviceCategory}
- Location:     ${lead.location || lead.city || 'N/A'}

CLIENT MESSAGE / REQUIREMENTS:
${lead.message || 'N/A'}

ADDITIONAL DETAILS:
${lead.additionalFields ? JSON.stringify(lead.additionalFields, null, 2) : 'None'}

========================================
AVRX Digital & Financial Solution
Direct Reply-To: ${lead.email}
========================================`;
}

/**
 * 2. Client Auto-Reply Confirmation Email (HTML)
 * Sent to: Client's submitted email address
 * From: AVRX Digital & Financial Solution <contact@avrx.in>
 * Reply-To: avrx.india@gmail.com
 */
export function generateClientConfirmationHtml(lead: LeadData): string {
  const cleanName = escapeHtml(lead.name);
  const cleanService = escapeHtml(lead.serviceCategory || 'Digital & Financial Services');
  const cleanMessage = escapeHtml(lead.message || 'General consultation request');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>We Received Your Enquiry – AVRX</title>
</head>
<body style="margin:0; padding:24px 12px; background-color:#f1f5f9; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color:#0f172a;">
  <div style="max-width:600px; margin:0 auto; background-color:#ffffff; border-radius:16px; overflow:hidden; box-shadow:0 10px 25px rgba(0,0,0,0.06); border:1px solid #e2e8f0;">
    
    <!-- Top Brand Header -->
    <div style="background: linear-gradient(135deg, #0a1128 0%, #1e293b 100%); padding:32px 24px; text-align:center; border-bottom:3px solid #00f0ff;">
      <div style="font-size:24px; font-weight:900; letter-spacing:0.08em; color:#ffffff; margin-bottom:4px;">
        AVRX
      </div>
      <div style="color:#00f0ff; font-size:12px; text-transform:uppercase; letter-spacing:0.14em; font-weight:700;">
        DIGITAL &amp; FINANCIAL SOLUTION
      </div>
    </div>

    <!-- Main Body Content -->
    <div style="padding:32px 28px; line-height:1.6;">
      
      <h2 style="margin:0 0 16px 0; font-size:20px; font-weight:800; color:#0f172a;">
        Hello ${cleanName},
      </h2>

      <p style="margin:0 0 16px 0; font-size:15px; color:#334155;">
        Thank you for contacting <strong>AVRX Digital &amp; Financial Solution</strong>.
      </p>

      <p style="margin:0 0 20px 0; font-size:15px; color:#334155;">
        We have successfully received your enquiry. Our domain specialist team will review your requirements and get back to you as soon as possible.
      </p>

      <!-- Enquiry Details Summary Card -->
      <div style="background-color:#f8fafc; border:1px solid #e2e8f0; border-radius:12px; padding:20px; margin-bottom:24px;">
        <div style="font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:0.05em; color:#64748b; margin-bottom:12px; border-bottom:1px solid #e2e8f0; padding-bottom:8px;">
          Your Enquiry Summary
        </div>
        <div style="margin-bottom:10px; font-size:14px;">
          <strong style="color:#0f172a;">Service Requested:</strong>
          <span style="color:#0284c7; font-weight:600; margin-left:6px;">${cleanService}</span>
        </div>
        <div style="margin-bottom:10px; font-size:14px;">
          <strong style="color:#0f172a;">Contact Number:</strong>
          <span style="color:#334155; margin-left:6px;">${escapeHtml(lead.phone)}</span>
        </div>
        <div style="font-size:14px;">
          <strong style="color:#0f172a;">Your Note / Query:</strong>
          <div style="margin-top:6px; color:#475569; background-color:#ffffff; border:1px solid #e2e8f0; padding:10px 12px; border-radius:6px; font-size:13px; font-style:italic;">
            ${cleanMessage}
          </div>
        </div>
      </div>

      <!-- Urgent Assistance Notice -->
      <div style="background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%); border:1px solid #bbf7d0; border-radius:12px; padding:16px 20px; margin-bottom:28px;">
        <div style="font-weight:700; font-size:14px; color:#166534; margin-bottom:4px;">
          💬 Need Immediate Assistance?
        </div>
        <p style="margin:0 0 12px 0; font-size:13px; color:#15803d;">
          You can connect with us directly on WhatsApp or call our support lines during business hours (9:30 AM – 7:00 PM IST).
        </p>
        <div>
          <a href="https://wa.me/919630661536?text=Hello%20AVRX%20Team,%20I%20have%20submitted%20an%20enquiry%20regarding%20${encodeURIComponent(lead.serviceCategory)}." target="_blank" style="display:inline-block; background-color:#16a34a; color:#ffffff; text-decoration:none; font-weight:700; font-size:13px; padding:8px 16px; border-radius:8px;">
            Chat on WhatsApp (+91 96306 61536)
          </a>
        </div>
      </div>

      <!-- Signoff -->
      <div style="border-top:1px solid #e2e8f0; padding-top:20px; color:#475569; font-size:14px;">
        <div style="font-weight:700; color:#0f172a; margin-bottom:4px;">Regards,</div>
        <div style="font-weight:800; color:#0a1128;">AVRX Digital &amp; Financial Solution</div>
        <div style="font-size:13px; color:#64748b; margin-top:4px;">
          Website: <a href="https://avrx.in" style="color:#0284c7; text-decoration:none; font-weight:600;">AVRX.in</a><br>
          Helpline: +91 96306 61536 / +91 70008 59994<br>
          Official Email: support@avrx.in / avrx.india@gmail.com
        </div>
      </div>

    </div>

    <!-- Footer -->
    <div style="background-color:#0a1128; padding:20px 24px; text-align:center; color:#94a3b8; font-size:12px;">
      <div style="color:#ffffff; font-weight:600; margin-bottom:4px;">AVRX India Operations Hub</div>
      <div>NH343 Waterpark, Surguja, Chhattisgarh, INDIA</div>
      <div style="margin-top:8px; font-size:11px; color:#64748b;">
        &copy; ${new Date().getFullYear()} AVRX Digital &amp; Financial Solution. All rights reserved.
      </div>
    </div>

  </div>
</body>
</html>`;
}

/**
 * 2.1. Client Auto-Reply Confirmation (Plain Text)
 */
export function generateClientConfirmationText(lead: LeadData): string {
  return `AVRX DIGITAL & FINANCIAL SOLUTION
========================================

Hello ${lead.name},

Thank you for contacting AVRX Digital & Financial Solution.

We have successfully received your enquiry.
Our team will review your request and get back to you as soon as possible.

Your enquiry details:
- Service: ${lead.serviceCategory}
- Phone:   ${lead.phone}
- Message: ${lead.message || 'General inquiry'}

If you need immediate assistance, you can contact us through WhatsApp (+91 96306 61536) or email us directly at support@avrx.in.

Regards,
AVRX Digital & Financial Solution
Website: https://avrx.in
Phone: +91 96306 61536 / +91 70008 59994
Email: support@avrx.in / avrx.india@gmail.com`;
}

