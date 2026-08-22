export interface FormSubmissionPayload {
  formName?: string; formType?: string; name: string; phone: string; email: string;
  location?: string; city?: string; state?: string; service?: string; serviceCategory?: string;
  subject?: string; message?: string; comments?: string; requirements?: string;
  pageName?: string; sourcePage?: string; currentUrl?: string; deviceType?: string;
  website_hp?: string; hp_field?: string; formData?: Record<string, any>;
  additionalFields?: Record<string, any>; [key: string]: any;
}
export interface FormSubmissionResponse { success:boolean; message:string; leadId?:string; adminEmailSent?:boolean; clientEmailSent?:boolean; whatsappSent?:boolean; error?:string; }
export function detectClientDevice(){ if(typeof window==='undefined') return 'Desktop Browser'; const ua=navigator.userAgent; if(/tablet|ipad|playbook|silk|android(?!.*mobi)/i.test(ua)) return 'Tablet'; if(/mobile|android|iphone|ipod|iemobile|blackberry|kindle|silk/i.test(ua)) return 'Mobile Device'; return 'Desktop Browser'; }
export function validateFormFields(data:{name?:string;phone?:string;email?:string}){ if(!data.name?.trim()||data.name.trim().length<2)return 'Please enter your full name.'; if((data.phone||'').replace(/\D/g,'').length<10)return 'Please enter a valid 10-digit mobile number.'; if(!data.email?.trim()||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim()))return 'Please enter a valid email address.'; return null; }
export async function submitForm(payload:FormSubmissionPayload):Promise<FormSubmissionResponse>{
 const validationError=validateFormFields(payload); if(validationError)return {success:false,message:validationError,error:validationError};
 const preparedPayload={...payload,name:payload.name.trim(),email:payload.email.trim().toLowerCase(),phone:payload.phone.trim(),formName:payload.formName||payload.formType||'Website Enquiry Form',currentUrl:typeof window!=='undefined'?window.location.href:'https://avrx.in',pageName:payload.pageName||payload.sourcePage||(typeof document!=='undefined'?document.title:'AVRX Website'),sourcePage:payload.sourcePage||'Website',deviceType:payload.deviceType||detectClientDevice()};
 const controller=new AbortController(); const timer=window.setTimeout(()=>controller.abort(),20000);
 try{
   const response=await fetch('/api/submit-form',{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify(preparedPayload),signal:controller.signal,credentials:'same-origin'});
   const raw=await response.text(); let data:any={}; try{data=raw?JSON.parse(raw):{}}catch{}
   if(!response.ok||data.success!==true) return {success:false,message:data.message||data.error||`Submission failed (${response.status}). Please try again.`,error:data.error||`HTTP ${response.status}`};
   return {success:true,message:data.message||'Thank you! Your enquiry has been submitted successfully.',leadId:data.leadId,adminEmailSent:data.adminEmailSent,clientEmailSent:data.clientEmailSent,whatsappSent:data.whatsappSent};
 }catch(err:any){ console.error('[AVRX FORM]',err); return {success:false,message:err?.name==='AbortError'?'The server took too long to respond. Please try again.':'Unable to connect to the form server. Please try again or contact AVRX directly.',error:err?.message||'Network error'}; }
 finally{window.clearTimeout(timer);}
}
export const submitLeadForm=submitForm;
