/**
 * AVRX Production Email Templates
 * Centralized Email Templates for Admin Notifications and User Confirmations
 * Standardized for AVRX Digital and Financial Solution
 */

export interface LeadData {
  id: string;
  formName?: string;
  name: string;
  email: string;
  phone: string;
  serviceCategory?: string;
  service?: string;
  subject?: string;
  message?: string;
  location?: string;
  city?: string;
  state?: string;
  sourcePage?: string;
  pageName?: string;
  currentUrl?: string;
  deviceType?: string;
  formType?: string;
  createdAt: string;
  ipAddress?: string;
  additionalFields?: Record<string, any>;
  dynamicFields?: Record<string, any>;
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
 * Subject: [AVRX WEBSITE LEAD] {FORM_NAME} — {USER_NAME}
 */
export function generateAdminNotificationHtml(lead: LeadData): string {
  const formName = lead.formName || lead.formType || 'Website Inquiry';
  const cleanFormName = escapeHtml(formName);
  const cleanName = escapeHtml(lead.name);
  const cleanEmail = escapeHtml(lead.email);
  const cleanPhone = escapeHtml(lead.phone);
  const cleanService = escapeHtml(lead.serviceCategory || lead.service || 'Digital & Financial Solution');
  const cleanMessage = escapeHtml(lead.message || 'No additional message provided.');
  const cleanPage = escapeHtml(lead.pageName || lead.sourcePage || 'AVRX.in Website');
  const cleanUrl = escapeHtml(lead.currentUrl || 'https://avrx.in');
  const cleanDevice = escapeHtml(lead.deviceType || 'Desktop Browser');
  const cleanDate = escapeHtml(lead.createdAt);
  const cleanId = escapeHtml(lead.id);

  const rawDigits = lead.phone.replace(/\D/g, '');
  const waPhone = rawDigits.startsWith('91') ? rawDigits : `91${rawDigits.slice(-10)}`;

  // Combine dynamic fields
  const allDynamicFields: Record<string, any> = {
    ...(lead.additionalFields || {}),
    ...(lead.dynamicFields || {})
  };

  // If service or location or city are not in dynamic fields, add them
  if (lead.serviceCategory && !allDynamicFields['Service']) {
    allDynamicFields['Service'] = lead.serviceCategory;
  }
  if (lead.location && !allDynamicFields['Location']) {
    allDynamicFields['Location'] = lead.location;
  } else if (lead.city && !allDynamicFields['City']) {
    allDynamicFields['City'] = lead.city;
  }

  let dynamicFieldsHtml = '';
  const entries = Object.entries(allDynamicFields).filter(([k]) => 
    !['website_hp', 'hp_field', '_hp', 'name', 'fullName', 'clientName', 'email', 'emailAddress', 'phone', 'mobile', 'phoneNumber'].includes(k)
  );

  if (entries.length > 0) {
    const rows = entries
      .map(([key, val]) => `
        <tr>
          <td style="padding:10px 14px; font-weight:600; color:#475569; font-size:13px; border-bottom:1px solid #e2e8f0; width:35%; background-color:#f8fafc;">${escapeHtml(key)}</td>
          <td style="padding:10px 14px; color:#0f172a; font-size:14px; border-bottom:1px solid #e2e8f0; font-weight:500;">${escapeHtml(typeof val === 'object' ? JSON.stringify(val) : val)}</td>
        </tr>
      `)
      .join('');

    dynamicFieldsHtml = `
      <table style="width:100%; border-collapse:collapse; background-color:#ffffff; border-radius:8px; overflow:hidden; border:1px solid #e2e8f0; margin-bottom:16px;">
        ${rows}
      </table>
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
  <div style="max-width:620px; margin:0 auto; background-color:#ffffff; border-radius:16px; overflow:hidden; box-shadow:0 10px 30px rgba(0,0,0,0.08); border:1px solid #e2e8f0;">
    
    <!-- Top Header -->
    <div style="background: linear-gradient(135deg, #0a1128 0%, #1e293b 100%); padding:28px 24px; text-align:center; border-bottom:3px solid #00f0ff;">
      <div style="font-size:22px; font-weight:900; letter-spacing:0.06em; color:#ffffff; margin-bottom:4px;">
        AVRX Digital and Financial Solution
      </div>
      <div style="color:#00f0ff; font-size:13px; text-transform:uppercase; letter-spacing:0.12em; font-weight:700;">
        NEW WEBSITE ENQUIRY
      </div>
    </div>

    <!-- Alert Sub-Header -->
    <div style="background-color:#0284c7; padding:12px 24px; color:#ffffff; display:flex; justify-content:space-between; align-items:center;">
      <div style="font-size:13px; font-weight:700; text-transform:uppercase; letter-spacing:0.04em;">
        Form: ${cleanFormName}
      </div>
      <div style="font-size:11px; background-color:rgba(255,255,255,0.25); padding:3px 10px; border-radius:12px; font-family:monospace; font-weight:700;">
        ${cleanId}
      </div>
    </div>

    <div style="padding:28px 24px;">
      
      <div style="font-size:12px; color:#64748b; margin-bottom:20px; font-weight:600;">
        <strong>Submission Date:</strong> ${cleanDate}
      </div>

      <!-- Section: User Details -->
      <div style="margin-bottom:24px;">
        <div style="font-size:13px; font-weight:800; text-transform:uppercase; letter-spacing:0.08em; color:#0f172a; margin-bottom:8px; border-bottom:2px solid #00f0ff; padding-bottom:4px; display:inline-block;">
          USER DETAILS
        </div>
        <table style="width:100%; border-collapse:collapse; background-color:#ffffff; border:1px solid #e2e8f0; border-radius:8px; overflow:hidden;">
          <tr>
            <td style="padding:10px 14px; font-weight:600; color:#475569; font-size:13px; border-bottom:1px solid #e2e8f0; width:35%; background-color:#f8fafc;">Name:</td>
            <td style="padding:10px 14px; font-weight:700; color:#0f172a; font-size:15px; border-bottom:1px solid #e2e8f0;">${cleanName}</td>
          </tr>
          <tr>
            <td style="padding:10px 14px; font-weight:600; color:#475569; font-size:13px; border-bottom:1px solid #e2e8f0; background-color:#f8fafc;">Email:</td>
            <td style="padding:10px 14px; border-bottom:1px solid #e2e8f0;">
              <a href="mailto:${cleanEmail}" style="color:#0284c7; font-weight:600; text-decoration:none; font-size:14px;">${cleanEmail}</a>
            </td>
          </tr>
          <tr>
            <td style="padding:10px 14px; font-weight:600; color:#475569; font-size:13px; background-color:#f8fafc;">Phone:</td>
            <td style="padding:10px 14px;">
              <a href="tel:${cleanPhone}" style="color:#0f172a; font-weight:700; text-decoration:none; font-size:14px;">${cleanPhone}</a>
              &nbsp;
              <a href="https://wa.me/${waPhone}" target="_blank" style="display:inline-block; background-color:#22c55e; color:#ffffff; text-decoration:none; font-size:11px; font-weight:700; padding:2px 8px; border-radius:4px;">WhatsApp 💬</a>
            </td>
          </tr>
        </table>
      </div>

      <!-- Section: Form Details -->
      <div style="margin-bottom:24px;">
        <div style="font-size:13px; font-weight:800; text-transform:uppercase; letter-spacing:0.08em; color:#0f172a; margin-bottom:8px; border-bottom:2px solid #00f0ff; padding-bottom:4px; display:inline-block;">
          FORM DETAILS
        </div>
        ${dynamicFieldsHtml}
        <div style="background-color:#f8fafc; border:1px solid #e2e8f0; border-left:4px solid #0284c7; padding:14px 16px; border-radius:0 8px 8px 0; color:#1e293b; font-size:14px; line-height:1.6; white-space:pre-wrap;">
<strong>Message / Requirement:</strong>
${cleanMessage}
        </div>
      </div>

      <!-- Section: Source -->
      <div style="margin-bottom:24px;">
        <div style="font-size:13px; font-weight:800; text-transform:uppercase; letter-spacing:0.08em; color:#0f172a; margin-bottom:8px; border-bottom:2px solid #00f0ff; padding-bottom:4px; display:inline-block;">
          SOURCE
        </div>
        <table style="width:100%; border-collapse:collapse; background-color:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; overflow:hidden;">
          <tr>
            <td style="padding:8px 14px; font-weight:600; color:#475569; font-size:12px; border-bottom:1px solid #e2e8f0; width:35%;">Page:</td>
            <td style="padding:8px 14px; color:#0f172a; font-size:13px; border-bottom:1px solid #e2e8f0;">${cleanPage}</td>
          </tr>
          <tr>
            <td style="padding:8px 14px; font-weight:600; color:#475569; font-size:12px; border-bottom:1px solid #e2e8f0;">URL:</td>
            <td style="padding:8px 14px; color:#0284c7; font-size:12px; border-bottom:1px solid #e2e8f0; word-break:break-all;">${cleanUrl}</td>
          </tr>
          <tr>
            <td style="padding:8px 14px; font-weight:600; color:#475569; font-size:12px;">Device:</td>
            <td style="padding:8px 14px; color:#0f172a; font-size:13px;">${cleanDevice}</td>
          </tr>
        </table>
      </div>

      <!-- Follow-up CTA buttons -->
      <div style="margin-top:24px; padding-top:20px; border-top:1px solid #e2e8f0; text-align:center;">
        <div style="display:inline-block; margin:4px;">
          <a href="tel:${cleanPhone}" style="display:inline-block; background-color:#0f172a; color:#ffffff; text-decoration:none; font-weight:700; font-size:13px; padding:10px 18px; border-radius:8px;">
            📞 Call Client
          </a>
        </div>
        <div style="display:inline-block; margin:4px;">
          <a href="https://wa.me/${waPhone}?text=Hello%20${encodeURIComponent(lead.name)},%20thank%20you%20for%20contacting%20AVRX%20regarding%20${encodeURIComponent(cleanService)}." target="_blank" style="display:inline-block; background-color:#22c55e; color:#ffffff; text-decoration:none; font-weight:700; font-size:13px; padding:10px 18px; border-radius:8px;">
            💬 WhatsApp
          </a>
        </div>
        <div style="display:inline-block; margin:4px;">
          <a href="mailto:${cleanEmail}?subject=AVRX%20Enquiry%20Follow-up%20%7C%20${encodeURIComponent(cleanService)}" style="display:inline-block; background-color:#0284c7; color:#ffffff; text-decoration:none; font-weight:700; font-size:13px; padding:10px 18px; border-radius:8px;">
            ✉️ Email Reply
          </a>
        </div>
      </div>

    </div>

    <!-- Admin Footer -->
    <div style="background-color:#0a1128; padding:20px 24px; color:#94a3b8; font-size:12px; border-top:1px solid #1e293b; line-height:1.7;">
      <div style="font-weight:700; color:#ffffff; margin-bottom:4px;">AVRX Contact Information:</div>
      <div>Phone: <strong>7000859994</strong> / <strong>9630661536</strong></div>
      <div>Email: <a href="mailto:contact@avrx.in" style="color:#00f0ff; text-decoration:none;">contact@avrx.in</a> / <a href="mailto:avrx.india@avrx.in" style="color:#00f0ff; text-decoration:none;">avrx.india@avrx.in</a></div>
      <div style="margin-top:8px; font-size:11px; color:#64748b;">
        Delivered to avrx.india@gmail.com via AVRX Centralized Form Submission Engine.
      </div>
    </div>

  </div>
</body>
</html>`;
}

/**
 * 1.1. Admin Notification (Plain Text)
 */
export function generateAdminNotificationText(lead: LeadData): string {
  const formName = lead.formName || lead.formType || 'Website Inquiry';
  const allDynamicFields = {
    ...(lead.additionalFields || {}),
    ...(lead.dynamicFields || {})
  };

  const dynamicText = Object.entries(allDynamicFields)
    .filter(([k]) => !['website_hp', 'hp_field', '_hp', 'name', 'fullName', 'email', 'phone', 'mobile'].includes(k))
    .map(([k, v]) => `${k}: ${typeof v === 'object' ? JSON.stringify(v) : v}`)
    .join('\n');

  return `AVRX Digital and Financial Solution

NEW WEBSITE ENQUIRY

Form:
${formName}

Submission Date:
${lead.createdAt}

--------------------------------

USER DETAILS

Name:
${lead.name}

Email:
${lead.email}

Phone:
${lead.phone}

--------------------------------

FORM DETAILS

${dynamicText ? dynamicText + '\n\n' : ''}Message:
${lead.message || 'No message provided'}

--------------------------------

SOURCE

Page:
${lead.pageName || lead.sourcePage || 'AVRX.in Website'}

URL:
${lead.currentUrl || 'https://avrx.in'}

Device:
${lead.deviceType || 'Desktop Browser'}

--------------------------------

AVRX Contact:

7000859994
9630661536

contact@avrx.in
avrx.india@avrx.in`;
}

/**
 * 2. Client Auto-Reply Confirmation Email (HTML)
 * Sent to: Client's submitted email
 * Subject: AVRX — We Received Your Request
 */
export function generateClientConfirmationHtml(lead: LeadData): string {
  const cleanName = escapeHtml(lead.name);
  const cleanService = escapeHtml(lead.serviceCategory || lead.service || 'Digital and Financial Solution');
  const cleanMessage = escapeHtml(lead.message || 'Consultation request');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AVRX — We Received Your Request</title>
</head>
<body style="margin:0; padding:24px 12px; background-color:#f1f5f9; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color:#0f172a;">
  <div style="max-width:600px; margin:0 auto; background-color:#ffffff; border-radius:16px; overflow:hidden; box-shadow:0 10px 30px rgba(0,0,0,0.06); border:1px solid #e2e8f0;">
    
    <!-- Header -->
    <div style="background: linear-gradient(135deg, #0a1128 0%, #1e293b 100%); padding:32px 24px; text-align:center; border-bottom:3px solid #00f0ff;">
      <div style="font-size:24px; font-weight:900; letter-spacing:0.06em; color:#ffffff; margin-bottom:4px;">
        AVRX
      </div>
      <div style="color:#00f0ff; font-size:12px; text-transform:uppercase; letter-spacing:0.14em; font-weight:700;">
        DIGITAL AND FINANCIAL SOLUTION
      </div>
    </div>

    <!-- Body -->
    <div style="padding:32px 28px; line-height:1.65;">
      
      <p style="margin:0 0 16px 0; font-size:16px; font-weight:700; color:#0f172a;">
        Hello ${cleanName},
      </p>

      <p style="margin:0 0 16px 0; font-size:15px; color:#334155;">
        Thank you for contacting <strong>AVRX Digital and Financial Solution</strong>.
      </p>

      <p style="margin:0 0 20px 0; font-size:15px; color:#334155;">
        We have successfully received your request.
      </p>

      <p style="margin:0 0 24px 0; font-size:15px; color:#334155;">
        Our team will review your enquiry and contact you using the information you provided.
      </p>

      <!-- Request Summary Box -->
      <div style="background-color:#f8fafc; border:1px solid #e2e8f0; border-radius:12px; padding:20px; margin-bottom:24px;">
        <div style="font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:0.06em; color:#64748b; margin-bottom:12px; border-bottom:1px solid #e2e8f0; padding-bottom:8px;">
          Your request:
        </div>
        <div style="margin-bottom:12px; font-size:14px;">
          <strong style="color:#0f172a;">Service:</strong>
          <div style="color:#0284c7; font-weight:600; margin-top:2px;">${cleanService}</div>
        </div>
        <div style="font-size:14px;">
          <strong style="color:#0f172a;">Message:</strong>
          <div style="color:#475569; background-color:#ffffff; border:1px solid #e2e8f0; padding:10px 12px; border-radius:6px; margin-top:4px; font-size:13px; white-space:pre-wrap;">
            ${cleanMessage}
          </div>
        </div>
      </div>

      <!-- Quick WhatsApp Assist -->
      <div style="background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%); border:1px solid #bbf7d0; border-radius:12px; padding:16px 20px; margin-bottom:28px;">
        <div style="font-weight:700; font-size:14px; color:#166534; margin-bottom:4px;">
          💬 Need Immediate Assistance?
        </div>
        <p style="margin:0 0 12px 0; font-size:13px; color:#15803d;">
          You can connect with us directly on WhatsApp or call our support lines during business hours (9:30 AM – 7:00 PM IST).
        </p>
        <div>
          <a href="https://wa.me/919630661536?text=Hello%20AVRX%20Team,%20I%20have%20submitted%20a%20request%20regarding%20${encodeURIComponent(cleanService)}." target="_blank" style="display:inline-block; background-color:#16a34a; color:#ffffff; text-decoration:none; font-weight:700; font-size:13px; padding:8px 16px; border-radius:8px;">
            Chat on WhatsApp (+91 96306 61536)
          </a>
        </div>
      </div>

      <p style="margin:0 0 20px 0; font-size:15px; color:#334155;">
        Thank you for choosing AVRX.
      </p>

      <!-- Signature -->
      <div style="border-top:1px solid #e2e8f0; padding-top:20px; color:#475569; font-size:14px; line-height:1.7;">
        <div style="font-weight:800; color:#0a1128; font-size:15px;">AVRX Digital and Financial Solution</div>
        <div style="margin-top:6px;">
          <strong>Phone:</strong><br>
          <a href="tel:7000859994" style="color:#0284c7; text-decoration:none;">7000859994</a><br>
          <a href="tel:9630661536" style="color:#0284c7; text-decoration:none;">9630661536</a>
        </div>
        <div style="margin-top:6px;">
          <strong>Email:</strong><br>
          <a href="mailto:contact@avrx.in" style="color:#0284c7; text-decoration:none;">contact@avrx.in</a>
        </div>
        <div style="margin-top:6px;">
          <strong>Address:</strong><br>
          NH343, Waterpark,<br>
          Surguja, Chhattisgarh 497001, India
        </div>
      </div>

    </div>

    <!-- Footer -->
    <div style="background-color:#0a1128; padding:18px 24px; text-align:center; color:#94a3b8; font-size:11px;">
      &copy; ${new Date().getFullYear()} AVRX Digital and Financial Solution. All rights reserved.
    </div>

  </div>
</body>
</html>`;
}

/**
 * 2.1. Client Confirmation (Plain Text)
 */
export function generateClientConfirmationText(lead: LeadData): string {
  return `Hello ${lead.name},

Thank you for contacting AVRX Digital and Financial Solution.

We have successfully received your request.

Our team will review your enquiry and contact you using the information you provided.

Your request:

Service:
${lead.serviceCategory || lead.service || 'Digital and Financial Solution'}

Message:
${lead.message || 'Consultation request'}

Thank you for choosing AVRX.

AVRX Digital and Financial Solution

Phone:
7000859994
9630661536

Email:
contact@avrx.in

Address:
NH343, Waterpark,
Surguja, Chhattisgarh 497001, India`;
}
