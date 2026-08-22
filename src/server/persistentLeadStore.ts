import { LeadRecord } from './leadStore';

/** Persistent lead storage using Supabase REST API. Safe for Vercel/serverless. */
export async function persistLead(lead: LeadRecord): Promise<{success:boolean; error?:string}> {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const table = process.env.SUPABASE_TABLE || 'leads';
  if (!url || !key) return { success: false, error: 'Supabase credentials are not configured' };

  try {
    const res = await fetch(`${url.replace(/\/$/, '')}/rest/v1/${table}`, {
      method: 'POST',
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
        'Content-Type': 'application/json',
        Prefer: 'return=minimal'
      },
      body: JSON.stringify({
        id: lead.id,
        created_at: new Date().toISOString(),
        name: lead.name,
        email: lead.email,
        phone: lead.phone,
        service: lead.service,
        message: lead.message,
        location: lead.location || null,
        city: lead.city || null,
        state: lead.state || null,
        form_name: lead.formName,
        page_name: lead.pageName,
        source_page: lead.sourcePage,
        current_url: lead.currentUrl,
        device_type: lead.deviceType,
        status: lead.status,
        email_status: lead.emailStatus,
        email_error: lead.emailError || null,
        ip_address: lead.ipAddress || null,
        metadata: lead.dynamicFields || {}
      })
    });
    if (!res.ok) return { success:false, error: await res.text() };
    return { success:true };
  } catch (e:any) {
    return { success:false, error:e?.message || 'Supabase request failed' };
  }
}
