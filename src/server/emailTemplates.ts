/**
 * AVRX Email Templates (Server Internal)
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

function escapeHtml(text: any): string {
  if (text === null || text === undefined) return '';
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export function generateClientConfirmationHtml(lead: LeadData): string {
  const cleanName = escapeHtml(lead.name);
  const cleanService = escapeHtml(lead.serviceCategory);
  const cleanId = escapeHtml(lead.id);
  const cleanPhone = escapeHtml(lead.phone);
  const cleanMessage = escapeHtml(lead.message || 'N/A');

  return `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><title>Enquiry Confirmation</title></head>
<body style="margin:0; padding:20px; background-color:#050811; font-family:sans-serif; color:#e2e8f0;">
  <div style="max-width:600px; margin:0 auto; background-color:#0b0f19; border:1px solid #1e293b; border-radius:14px; padding:24px;">
    <h2 style="color:#00f0ff; margin-top:0;">AVRX Digital & Financial Solution</h2>
    <p>Dear ${cleanName},</p>
    <p>Thank you for contacting AVRX. We have received your enquiry regarding <strong>${cleanService}</strong>.</p>
    <div style="background-color:#050811; border-left:4px solid #00f0ff; padding:14px; margin:16px 0;">
      <div><strong>Lead ID:</strong> ${cleanId}</div>
      <div><strong>Service:</strong> ${cleanService}</div>
      <div><strong>Phone:</strong> ${cleanPhone}</div>
      <div><strong>Date:</strong> ${escapeHtml(lead.createdAt)}</div>
      <div><strong>Note:</strong> ${cleanMessage}</div>
    </div>
    <p>Our team will contact you shortly within 2 to 4 business hours.</p>
  </div>
</body>
</html>`;
}

export function generateClientConfirmationText(lead: LeadData): string {
  return `Dear ${lead.name},\n\nThank you for contacting AVRX regarding ${lead.serviceCategory}.\nLead ID: ${lead.id}\nOur team will contact you shortly.\n\nAVRX Digital & Financial Solution\ncontact@avrx.in`;
}

export function generateAdminNotificationHtml(lead: LeadData): string {
  const cleanName = escapeHtml(lead.name);
  const cleanEmail = escapeHtml(lead.email);
  const cleanPhone = escapeHtml(lead.phone);
  const cleanService = escapeHtml(lead.serviceCategory);

  return `<!DOCTYPE html>
<html>
<body style="margin:0; padding:20px; background-color:#050811; font-family:sans-serif; color:#e2e8f0;">
  <div style="max-width:600px; margin:0 auto; background-color:#0b0f19; border:1px solid #1e293b; border-radius:14px; padding:24px;">
    <h3 style="color:#00f0ff; margin-top:0;">New Website Enquiry Lead</h3>
    <p><strong>Lead ID:</strong> ${escapeHtml(lead.id)}</p>
    <p><strong>Client Name:</strong> ${cleanName}</p>
    <p><strong>Email:</strong> <a href="mailto:${cleanEmail}" style="color:#38bdf8;">${cleanEmail}</a></p>
    <p><strong>Phone:</strong> ${cleanPhone}</p>
    <p><strong>Service:</strong> ${cleanService}</p>
    <p><strong>Location:</strong> ${escapeHtml(lead.location || 'N/A')}</p>
    <p><strong>Message:</strong> ${escapeHtml(lead.message || 'N/A')}</p>
    <p style="font-size:11px; color:#64748b;">Submitted: ${escapeHtml(lead.createdAt)} | Source: ${escapeHtml(lead.sourcePage || 'Website')}</p>
  </div>
</body>
</html>`;
}

export function generateAdminNotificationText(lead: LeadData): string {
  return `New Lead:\nID: ${lead.id}\nName: ${lead.name}\nEmail: ${lead.email}\nPhone: ${lead.phone}\nService: ${lead.serviceCategory}\nMessage: ${lead.message || 'N/A'}`;
}
