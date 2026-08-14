/**
 * AVRX Digital & Financial Solution
 * Professional Responsive Email Templates for Clients and Admin
 */

export interface LeadData {
  id: string;
  name: string;
  email: string;
  phone: string;
  location?: string;
  serviceCategory: string;
  subject?: string;
  message?: string;
  sourcePage?: string;
  createdAt: string;
  additionalFields?: Record<string, any>;
}

// Helper to escape HTML to prevent XSS in email previewers
function escapeHtml(text: string): string {
  if (!text) return '';
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * 1. CLIENT CONFIRMATION EMAIL (HTML)
 */
export function generateClientConfirmationHtml(lead: LeadData): string {
  const cleanName = escapeHtml(lead.name);
  const cleanService = escapeHtml(lead.serviceCategory);
  const cleanId = escapeHtml(lead.id);
  const cleanPhone = escapeHtml(lead.phone);
  const cleanMessage = escapeHtml(lead.message || 'N/A');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Enquiry Confirmation - AVRX</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #050811;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      color: #e2e8f0;
      -webkit-font-smoothing: antialiased;
    }
    .wrapper {
      width: 100%;
      table-layout: fixed;
      background-color: #050811;
      padding: 30px 10px;
    }
    .main-card {
      max-width: 600px;
      margin: 0 auto;
      background-color: #0b0f19;
      border: 1px solid #1e293b;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(0, 240, 255, 0.1);
    }
    .header {
      background: linear-gradient(135deg, #090d16 0%, #111827 100%);
      padding: 28px 30px;
      text-align: center;
      border-bottom: 1px solid #1e293b;
    }
    .brand-title {
      font-size: 24px;
      font-weight: 900;
      color: #ffffff;
      letter-spacing: 1px;
      margin: 0;
    }
    .brand-accent {
      color: #00f0ff;
    }
    .brand-tagline {
      font-size: 11px;
      color: #94a3b8;
      letter-spacing: 2px;
      text-transform: uppercase;
      margin-top: 4px;
    }
    .content {
      padding: 30px;
    }
    .greeting {
      font-size: 18px;
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 16px;
    }
    .text-body {
      font-size: 14px;
      line-height: 1.6;
      color: #cbd5e1;
      margin-bottom: 20px;
    }
    .summary-box {
      background-color: #050811;
      border: 1px solid #1e293b;
      border-left: 4px solid #00f0ff;
      border-radius: 8px;
      padding: 20px;
      margin: 20px 0;
    }
    .summary-title {
      font-size: 12px;
      font-weight: 700;
      color: #00f0ff;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 12px;
    }
    .summary-item {
      font-size: 13px;
      color: #94a3b8;
      margin-bottom: 8px;
    }
    .summary-item strong {
      color: #f1f5f9;
    }
    .status-badge {
      display: inline-block;
      background-color: rgba(16, 185, 129, 0.15);
      border: 1px solid rgba(16, 185, 129, 0.3);
      color: #34d399;
      font-size: 12px;
      font-weight: 700;
      padding: 6px 12px;
      border-radius: 20px;
      margin-top: 10px;
    }
    .cta-container {
      text-align: center;
      margin: 28px 0 10px 0;
    }
    .cta-button {
      display: inline-block;
      background: linear-gradient(90deg, #00f0ff, #3b82f6);
      color: #030712 !important;
      font-size: 14px;
      font-weight: 800;
      text-decoration: none;
      padding: 14px 28px;
      border-radius: 10px;
      box-shadow: 0 0 20px rgba(0, 240, 255, 0.3);
    }
    .footer {
      background-color: #050811;
      padding: 24px 30px;
      text-align: center;
      border-top: 1px solid #1e293b;
      font-size: 12px;
      color: #64748b;
    }
    .footer a {
      color: #00f0ff;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="main-card">
      
      <!-- Header -->
      <div class="header">
        <h1 class="brand-title">AVRX<span class="brand-accent">.</span></h1>
        <div class="brand-tagline">Digital & Financial Solution</div>
      </div>

      <!-- Content -->
      <div class="content">
        <div class="greeting">Dear ${cleanName},</div>
        
        <p class="text-body">
          Thank you for reaching out to <strong>AVRX Digital & Financial Solution</strong>.
        </p>
        
        <p class="text-body">
          We have successfully received your enquiry regarding <strong>${cleanService}</strong>. Our domain specialist is reviewing your requirement and will contact you shortly via phone or email.
        </p>

        <!-- Summary Box -->
        <div class="summary-box">
          <div class="summary-title">Enquiry Summary</div>
          <div class="summary-item"><strong>Reference Lead ID:</strong> ${cleanId}</div>
          <div class="summary-item"><strong>Requested Service:</strong> ${cleanService}</div>
          <div class="summary-item"><strong>Contact Phone:</strong> ${cleanPhone}</div>
          <div class="summary-item"><strong>Submitted On:</strong> ${escapeHtml(lead.createdAt)}</div>
          ${cleanMessage !== 'N/A' ? `<div class="summary-item"><strong>Requirements / Note:</strong> ${cleanMessage}</div>` : ''}
          <div class="status-badge">✓ Status: Received & Assigned</div>
        </div>

        <p class="text-body">
          Expected response time is <strong>within 2 to 4 business hours</strong> (Mon - Sat: 9:30 AM to 7:00 PM IST).
        </p>

        <!-- CTA -->
        <div class="cta-container">
          <a href="https://avrx.in" class="cta-button">Visit Official Website &rarr;</a>
        </div>
      </div>

      <!-- Footer -->
      <div class="footer">
        <p style="margin: 0 0 8px 0; font-weight: 600; color: #94a3b8;">AVRX Digital & Financial Solution</p>
        <p style="margin: 0 0 8px 0;">Official Contact Email: <a href="mailto:contact@avrx.in">contact@avrx.in</a> | Phone: +91 96306 61536</p>
        <p style="margin: 0; font-size: 11px;">Headquarters: NH343 Waterpark Surguja Chhattisgarh INDIA | <a href="https://avrx.in">https://avrx.in</a></p>
      </div>

    </div>
  </div>
</body>
</html>`;
}

/**
 * 1. CLIENT CONFIRMATION EMAIL (PLAIN TEXT)
 */
export function generateClientConfirmationText(lead: LeadData): string {
  return `Dear ${lead.name},

Thank you for contacting AVRX Digital & Financial Solution.

We have successfully received your enquiry regarding ${lead.serviceCategory}.

Our team will review your requirement and contact you shortly.

--------------------------------------------------
ENQUIRY DETAILS:
- Reference Lead ID: ${lead.id}
- Service Requested: ${lead.serviceCategory}
- Phone Number: ${lead.phone}
- Date & Time: ${lead.createdAt}
${lead.message ? `- Requirements: ${lead.message}` : ''}
--------------------------------------------------

Expected response time: Within 2 to 4 business hours (Mon - Sat: 9:30 AM to 7:00 PM IST).

Regards,
AVRX Digital & Financial Solution
Official Email: contact@avrx.in
Phone: +91 96306 61536
Website: https://avrx.in`;
}

/**
 * 2. ADMIN NOTIFICATION EMAIL (HTML)
 */
export function generateAdminNotificationHtml(lead: LeadData): string {
  const cleanName = escapeHtml(lead.name);
  const cleanEmail = escapeHtml(lead.email);
  const cleanPhone = escapeHtml(lead.phone);
  const cleanLocation = escapeHtml(lead.location || 'Not Specified');
  const cleanService = escapeHtml(lead.serviceCategory);
  const cleanSubject = escapeHtml(lead.subject || lead.serviceCategory);
  const cleanMessage = escapeHtml(lead.message || 'No additional message provided.');
  const cleanSource = escapeHtml(lead.sourcePage || 'Contact Page');
  const cleanId = escapeHtml(lead.id);

  // Format additional fields if present
  let additionalHtml = '';
  if (lead.additionalFields && Object.keys(lead.additionalFields).length > 0) {
    additionalHtml = Object.entries(lead.additionalFields)
      .map(([key, val]) => `<div class="info-row"><span class="info-label">${escapeHtml(key)}:</span> <span class="info-val">${escapeHtml(String(val))}</span></div>`)
      .join('');
  }

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Website Lead - AVRX Admin</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #050811;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      color: #e2e8f0;
    }
    .wrapper {
      padding: 30px 10px;
      background-color: #050811;
    }
    .card {
      max-width: 650px;
      margin: 0 auto;
      background-color: #0b0f19;
      border: 1px solid #1e293b;
      border-radius: 16px;
      overflow: hidden;
    }
    .banner {
      background: linear-gradient(90deg, #00f0ff 0%, #3b82f6 100%);
      padding: 16px 24px;
      color: #030712;
      font-weight: 900;
      font-size: 14px;
      letter-spacing: 1.5px;
      text-transform: uppercase;
    }
    .content {
      padding: 28px;
    }
    .section-title {
      font-size: 12px;
      font-weight: 800;
      color: #00f0ff;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      margin: 20px 0 10px 0;
      padding-bottom: 4px;
      border-bottom: 1px solid #1e293b;
    }
    .section-title:first-child {
      margin-top: 0;
    }
    .info-grid {
      background-color: #050811;
      border: 1px solid #1e293b;
      border-radius: 10px;
      padding: 16px;
      margin-bottom: 16px;
    }
    .info-row {
      font-size: 13px;
      margin-bottom: 8px;
      line-height: 1.5;
    }
    .info-row:last-child {
      margin-bottom: 0;
    }
    .info-label {
      color: #94a3b8;
      font-weight: 600;
      display: inline-block;
      width: 140px;
    }
    .info-val {
      color: #f8fafc;
      font-weight: 700;
    }
    .message-box {
      background-color: #050811;
      border: 1px solid #1e293b;
      border-left: 4px solid #3b82f6;
      border-radius: 8px;
      padding: 16px;
      font-size: 14px;
      color: #e2e8f0;
      line-height: 1.6;
      white-space: pre-wrap;
    }
    .actions {
      margin-top: 24px;
      display: flex;
      gap: 12px;
    }
    .btn {
      display: inline-block;
      padding: 12px 20px;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 700;
      text-decoration: none;
    }
    .btn-primary {
      background-color: #00f0ff;
      color: #030712 !important;
    }
    .btn-secondary {
      background-color: #1e293b;
      color: #ffffff !important;
    }
    .footer {
      background-color: #050811;
      padding: 16px 28px;
      font-size: 11px;
      color: #64748b;
      border-top: 1px solid #1e293b;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="card">
      <div class="banner">
        🚨 NEW WEBSITE ENQUIRY LEAD — AVRX PLATFORM
      </div>

      <div class="content">
        
        <!-- Client Info -->
        <div class="section-title">Client Contact Details</div>
        <div class="info-grid">
          <div class="info-row"><span class="info-label">Lead ID:</span> <span class="info-val" style="color: #00f0ff;">${cleanId}</span></div>
          <div class="info-row"><span class="info-label">Client Name:</span> <span class="info-val">${cleanName}</span></div>
          <div class="info-row"><span class="info-label">Email Address:</span> <span class="info-val"><a href="mailto:${cleanEmail}" style="color: #38bdf8;">${cleanEmail}</a></span></div>
          <div class="info-row"><span class="info-label">Phone / WhatsApp:</span> <span class="info-val"><a href="tel:${cleanPhone.replace(/\s+/g, '')}" style="color: #34d399;">${cleanPhone}</a></span></div>
          <div class="info-row"><span class="info-label">City / State:</span> <span class="info-val">${cleanLocation}</span></div>
        </div>

        <!-- Service Info -->
        <div class="section-title">Service & Requirement Info</div>
        <div class="info-grid">
          <div class="info-row"><span class="info-label">Service Category:</span> <span class="info-val">${cleanService}</span></div>
          <div class="info-row"><span class="info-label">Subject / Interest:</span> <span class="info-val">${cleanSubject}</span></div>
          ${additionalHtml}
        </div>

        <!-- Message -->
        <div class="section-title">Client Requirement / Message</div>
        <div class="message-box">
          ${cleanMessage}
        </div>

        <!-- Submission Meta -->
        <div class="section-title">Submission Metadata</div>
        <div class="info-grid">
          <div class="info-row"><span class="info-label">Date & Time:</span> <span class="info-val">${escapeHtml(lead.createdAt)}</span></div>
          <div class="info-row"><span class="info-label">Source Page:</span> <span class="info-val">${cleanSource}</span></div>
          <div class="info-row"><span class="info-label">Lead Status:</span> <span class="info-val" style="color: #34d399;">New (Processed via SMTP)</span></div>
        </div>

        <!-- Action Buttons -->
        <div class="actions">
          <a href="mailto:${cleanEmail}?subject=Re:%20AVRX%20Enquiry%20-%20${encodeURIComponent(lead.serviceCategory)}" class="btn btn-primary">Reply via Email</a>
          <a href="tel:${cleanPhone.replace(/\s+/g, '')}" class="btn btn-secondary">Call Client</a>
        </div>

      </div>

      <div class="footer">
        AVRX Lead Engine | Notification for contact@avrx.in | https://avrx.in
      </div>
    </div>
  </div>
</body>
</html>`;
}

/**
 * 2. ADMIN NOTIFICATION EMAIL (PLAIN TEXT)
 */
export function generateAdminNotificationText(lead: LeadData): string {
  return `NEW WEBSITE ENQUIRY LEAD — AVRX DIGITAL & FINANCIAL SOLUTION

==================================================
CLIENT INFORMATION:
- Lead ID: ${lead.id}
- Name: ${lead.name}
- Email: ${lead.email}
- Phone / WhatsApp: ${lead.phone}
- City / State: ${lead.location || 'Not Specified'}

SERVICE INFORMATION:
- Service Category: ${lead.serviceCategory}
- Subject / Interest: ${lead.subject || lead.serviceCategory}

CLIENT MESSAGE / REQUIREMENTS:
${lead.message || 'No additional message provided.'}

SUBMISSION INFORMATION:
- Date & Time: ${lead.createdAt}
- Source Page: ${lead.sourcePage || 'Contact Page'}
- Status: New
==================================================

AVRX Digital & Financial Solution Engine
https://avrx.in`;
}
