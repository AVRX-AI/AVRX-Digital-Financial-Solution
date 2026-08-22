export interface WhatsAppResult { attempted:boolean; sent:boolean; error?:string; }

/** Optional WhatsApp Cloud API notification. Requires a pre-approved template for business-initiated messages. */
export async function sendWhatsAppNotification(name:string, phone:string, leadId:string): Promise<WhatsAppResult> {
  const token = process.env.WHATSAPP_ACCESS_TOKEN;
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  const version = process.env.WHATSAPP_API_VERSION || 'v23.0';
  const template = process.env.WHATSAPP_TEMPLATE_NAME;
  const language = process.env.WHATSAPP_TEMPLATE_LANGUAGE || 'en_US';
  if (!token || !phoneNumberId || !template) return {attempted:false, sent:false, error:'WhatsApp credentials/template are not configured'};

  const digits = String(phone).replace(/\D/g,'');
  const recipient = digits.length === 10 ? `91${digits}` : digits;
  try {
    const res = await fetch(`https://graph.facebook.com/${version}/${phoneNumberId}/messages`, {
      method:'POST',
      headers:{Authorization:`Bearer ${token}`,'Content-Type':'application/json'},
      body:JSON.stringify({messaging_product:'whatsapp',to:recipient,type:'template',template:{name:template,language:{code:language},components:[{type:'body',parameters:[{type:'text',text:name},{type:'text',text:leadId}]}]}})
    });
    const body=await res.text();
    if(!res.ok) return {attempted:true,sent:false,error:body};
    return {attempted:true,sent:true};
  } catch(e:any){ return {attempted:true,sent:false,error:e?.message||'WhatsApp request failed'}; }
}
