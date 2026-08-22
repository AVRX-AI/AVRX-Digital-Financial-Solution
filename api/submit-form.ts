interface Req { method?:string; body?:any; headers?:Record<string,any>; }
interface Res { status:(n:number)=>Res; json:(v:any)=>void; setHeader:(k:string,v:any)=>void; }
const emailOk=(v:string)=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
const phoneOk=(v:string)=>{const d=v.replace(/\D/g,'');return d.length>=10&&d.length<=15};
const text=(v:any)=>v==null?'':String(v).trim();
async function resend(apiKey:string,from:string,to:string,replyTo:string,subject:string,html:string,textBody:string){
 const r=await fetch('https://api.resend.com/emails',{method:'POST',headers:{Authorization:`Bearer ${apiKey}`,'Content-Type':'application/json'},body:JSON.stringify({from,to:[to],reply_to:replyTo,subject,html,text:textBody})});
 const raw=await r.text(); let d:any={}; try{d=raw?JSON.parse(raw):{}}catch{}; return {ok:r.ok,error:d.message||(!r.ok?`Resend ${r.status}`:undefined)};
}
function htmlEscape(v:any){return text(v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
async function saveSupabase(lead:any){
 const url=text(process.env.SUPABASE_URL), key=text(process.env.SUPABASE_SERVICE_ROLE_KEY); if(!url||!key)return {ok:false,skipped:true};
 const table=encodeURIComponent(process.env.SUPABASE_TABLE||'leads');
 const r=await fetch(`${url.replace(/\/$/,'')}/rest/v1/${table}`,{method:'POST',headers:{apikey:key,Authorization:`Bearer ${key}`,'Content-Type':'application/json',Prefer:'return=minimal'},body:JSON.stringify(lead)}); return {ok:r.ok,error:r.ok?undefined:await r.text()};
}
async function sendWhatsApp(phone:string,leadId:string,name:string){
 const token=text(process.env.WHATSAPP_ACCESS_TOKEN), id=text(process.env.WHATSAPP_PHONE_NUMBER_ID); if(!token||!id)return {ok:false,skipped:true};
 const version=process.env.WHATSAPP_API_VERSION||'v23.0'; const to=phone.replace(/\D/g,'').replace(/^0/,'');
 const body:any={messaging_product:'whatsapp',to, type:'text', text:{preview_url:false,body:`Hello ${name}, we received your AVRX enquiry. Reference: ${leadId}. Our team will contact you shortly.`}};
 const r=await fetch(`https://graph.facebook.com/${version}/${id}/messages`,{method:'POST',headers:{Authorization:`Bearer ${token}`,'Content-Type':'application/json'},body:JSON.stringify(body)}); return {ok:r.ok,error:r.ok?undefined:await r.text()};
}
export default async function handler(req:Req,res:Res){
 res.setHeader('Cache-Control','no-store'); res.setHeader('Content-Type','application/json');
 if(req.method!=='POST')return res.status(405).json({success:false,error:'Method Not Allowed'});
 try{
  const b=req.body||{};
  if(text(b.website_hp)||text(b.hp_field)||text(b._hp))return res.status(400).json({success:false,error:'Invalid submission.'});
  const name=text(b.name||b.fullName||b.clientName), email=text(b.email||b.emailAddress).toLowerCase(), phone=text(b.phone||b.mobile||b.phoneNumber);
  if(name.length<2)return res.status(400).json({success:false,error:'Please enter your full name.'});
  if(!emailOk(email))return res.status(400).json({success:false,error:'Please enter a valid email address.'});
  if(!phoneOk(phone))return res.status(400).json({success:false,error:'Please enter a valid 10-digit mobile number.'});
  const leadId=`AVRX-${Date.now().toString().slice(-8)}`;
  const lead={id:leadId,created_at:new Date().toISOString(),name,email,phone,location:text(b.location||(b.city&&b.state?`${b.city}, ${b.state}`:b.city||b.state)),service:text(b.service||b.serviceCategory||b.subject||'Digital & Financial Solution'),subject:text(b.subject||'Website Enquiry'),message:text(b.message||b.comments||b.requirements||'No message provided'),page_name:text(b.pageName||b.sourcePage||'AVRX Website'),source_page:text(b.sourcePage||'Website'),current_url:text(b.currentUrl||'https://avrx.in'),device_type:text(b.deviceType||''),status:'New',metadata:{formName:text(b.formName||b.formType||'Website Enquiry Form'),additionalFields:b.additionalFields||{},formData:b.formData||{}}};
  const db=await saveSupabase(lead);
  const admin=text(process.env.ADMIN_EMAIL)||'avrx.india@gmail.com', apiKey=text(process.env.RESEND_API_KEY)||text(process.env.EMAIL_API_KEY), from=text(process.env.EMAIL_FROM)||'onboarding@resend.dev', fromName=text(process.env.EMAIL_FROM_NAME)||'AVRX Digital and Financial Solution';
  let adminEmailSent=false,clientEmailSent=false,whatsappSent=false; let warnings:string[]=[];
  if(apiKey){
    const sender=`${fromName} <${from}>`; const adminHtml=`<h2>New AVRX Website Lead</h2><p><b>Lead ID:</b> ${leadId}</p><p><b>Name:</b> ${htmlEscape(name)}</p><p><b>Phone:</b> ${htmlEscape(phone)}</p><p><b>Email:</b> ${htmlEscape(email)}</p><p><b>Service:</b> ${htmlEscape(lead.service)}</p><p><b>Message:</b> ${htmlEscape(lead.message)}</p>`;
    const a=await resend(apiKey,sender,admin,email,`[AVRX LEAD] ${name}`,adminHtml,`New lead ${leadId}\n${name}\n${phone}\n${email}\n${lead.service}\n${lead.message}`); adminEmailSent=a.ok;if(!a.ok)warnings.push(a.error||'Admin email failed');
    const c=await resend(apiKey,sender,email,admin,'AVRX — We Received Your Request',`<h2>Thank you, ${htmlEscape(name)}!</h2><p>We received your enquiry successfully.</p><p><b>Reference:</b> ${leadId}</p><p>Our AVRX team will contact you shortly.</p>`,`Thank you ${name}. We received your AVRX enquiry. Reference: ${leadId}.`); clientEmailSent=c.ok;if(!c.ok)warnings.push(c.error||'Client email failed');
  } else warnings.push('Email provider is not configured in Vercel.');
  const w=await sendWhatsApp(phone,leadId,name);whatsappSent=w.ok;if(!w.ok&&!w.skipped)warnings.push('WhatsApp delivery failed');
  if(!db.ok&&!db.skipped)warnings.push('Lead database save failed');
  if(!db.ok&&db.skipped)warnings.push('Supabase is not configured; lead is not permanently stored.');
  if(!apiKey&&!db.ok&&!w.ok)return res.status(503).json({success:false,error:'Form backend is not configured yet. Add the required Vercel environment variables and try again.',leadId});
  return res.status(200).json({success:true,message:'Thank you! Your enquiry has been submitted successfully. Our AVRX team will contact you shortly.',leadId,adminEmailSent,clientEmailSent,whatsappSent,warnings});
 }catch(e:any){console.error('[AVRX API]',e);return res.status(500).json({success:false,error:'Server error while processing your enquiry. Please try again.'});}
}
