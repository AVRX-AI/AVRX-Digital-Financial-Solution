/**
 * AVRX Centralized Client-Side Form Submission Engine
 * Connected to Supabase Edge Function:
 * https://ncopprboovzhsqzqbrab.supabase.co/functions/v1/submit-client
 */

export interface FormSubmissionPayload {
  formName?: string;
  formType?: string;
  name: string;
  phone: string;
  email: string;
  location?: string;
  city?: string;
  state?: string;
  service?: string;
  serviceCategory?: string;
  subject?: string;
  message?: string;
  comments?: string;
  requirements?: string;
  pageName?: string;
  sourcePage?: string;
  currentUrl?: string;
  deviceType?: string;
  website_hp?: string;
  hp_field?: string;
  formData?: Record<string, any>;
  additionalFields?: Record<string, any>;
  [key: string]: any;
}

export interface FormSubmissionResponse {
  success: boolean;
  message: string;
  leadId?: string;
  adminEmailSent?: boolean;
  clientEmailSent?: boolean;
  error?: string;
}

export const SUPABASE_SUBMIT_CLIENT_URL = 'https://ncopprboovzhsqzqbrab.supabase.co/functions/v1/submit-client';

export function detectClientDevice(): string {
  if (typeof window === 'undefined') return 'Desktop Browser';
  const ua = navigator.userAgent.toLowerCase();
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return 'Tablet';
  }
  if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/i.test(ua)) {
    return 'Mobile Device';
  }
  return 'Desktop Browser';
}

export function validateFormFields(data: { name?: string; phone?: string; email?: string }): string | null {
  if (!data.name || data.name.trim().length < 2) {
    return 'Please enter your full name.';
  }
  const cleanDigits = (data.phone || '').replace(/\D/g, '');
  if (cleanDigits.length < 10) {
    return 'Please enter a valid 10-digit mobile number.';
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    return 'Please enter a valid email address.';
  }
  return null;
}

/**
 * Universal Form Submitter
 * Sends the payload to Supabase Edge Function: submit-client
 * Exact JSON Schema:
 * {
 *   "name": "...",
 *   "phone": "...",
 *   "email": "...",
 *   "message": "..."
 * }
 */
export async function submitForm(payload: FormSubmissionPayload): Promise<FormSubmissionResponse> {
  const validationError = validateFormFields(payload);
  if (validationError) {
    return {
      success: false,
      message: validationError,
      error: validationError
    };
  }

  // Honeypot check for spambots
  if (payload.website_hp || payload.hp_field || payload._hp) {
    return {
      success: true,
      message: 'Thank you! Your enquiry has been received. Our team will contact you shortly.',
      leadId: `AVRX-${Date.now().toString().slice(-6)}`
    };
  }

  // Compile composite message if service, location, or requirements are present
  let resolvedMessage = (payload.message || payload.requirements || payload.comments || payload.subject || '').trim();
  const contextDetails: string[] = [];

  if (payload.serviceCategory && !resolvedMessage.toLowerCase().includes(payload.serviceCategory.toLowerCase())) {
    contextDetails.push(`Service: ${payload.serviceCategory}`);
  }
  if (payload.location && !resolvedMessage.toLowerCase().includes(payload.location.toLowerCase())) {
    contextDetails.push(`Location: ${payload.location}`);
  } else if (payload.city && !resolvedMessage.toLowerCase().includes(payload.city.toLowerCase())) {
    contextDetails.push(`City: ${payload.city}`);
  }
  if (payload.sourcePage && !resolvedMessage.includes(payload.sourcePage)) {
    contextDetails.push(`Source: ${payload.sourcePage}`);
  }

  if (contextDetails.length > 0) {
    resolvedMessage = resolvedMessage
      ? `${resolvedMessage}\n\n[Details: ${contextDetails.join(' | ')}]`
      : `Enquiry from ${payload.sourcePage || 'AVRX Website'} [${contextDetails.join(' | ')}]`;
  }

  if (!resolvedMessage) {
    resolvedMessage = `New client enquiry submitted via AVRX Website (${payload.formName || payload.formType || 'Contact Form'}).`;
  }

  // Exact JSON field names required by Supabase Edge Function
  const supabasePayload = {
    name: payload.name.trim(),
    phone: payload.phone.trim(),
    email: payload.email.trim().toLowerCase(),
    message: resolvedMessage
  };

  const anonKey =
    (typeof import.meta !== 'undefined' && (import.meta as any).env?.VITE_SUPABASE_ANON_KEY) ||
    (typeof import.meta !== 'undefined' && (import.meta as any).env?.VITE_SUPABASE_KEY) ||
    (typeof process !== 'undefined' && process.env?.VITE_SUPABASE_ANON_KEY) ||
    (typeof process !== 'undefined' && process.env?.SUPABASE_ANON_KEY) ||
    '';

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  };

  if (anonKey) {
    headers['apikey'] = anonKey;
    headers['Authorization'] = `Bearer ${anonKey}`;
  }

  try {
    // 1. Send direct request to Supabase Edge Function
    const response = await fetch(SUPABASE_SUBMIT_CLIENT_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify(supabasePayload)
    });

    const data = await response.json().catch(() => null);

    // If edge function returned success
    if (response.ok && (data?.success === true || (data?.success === undefined && !data?.error))) {
      return {
        success: true,
        message: 'Thank you! Your enquiry has been received. Our team will contact you shortly.',
        leadId: data?.leadId || data?.id || data?.data?.id || `AVRX-${Date.now().toString().slice(-6)}`
      };
    }

    // If Supabase returned an explicit error or 401 missing header, fallback to server handler
    if (!response.ok) {
      console.warn('[SUPABASE EDGE DIRECT ATTEMPT]', response.status, data);

      // Attempt via backend proxy endpoint which handles server-side headers
      const serverResponse = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...payload,
          ...supabasePayload
        })
      });

      const serverData = await serverResponse.json().catch(() => null);
      if (serverResponse.ok && (serverData?.success === true || serverData?.success === undefined)) {
        return {
          success: true,
          message: serverData?.message || 'Thank you! Your enquiry has been received. Our team will contact you shortly.',
          leadId: serverData?.leadId || `AVRX-${Date.now().toString().slice(-6)}`
        };
      }

      return {
        success: false,
        message: data?.message || data?.error || serverData?.error || "We couldn't submit your request right now. Please try again or contact us directly at +91 96306 61536.",
        error: data?.error || serverData?.error || `Status: ${response.status}`
      };
    }

    return {
      success: true,
      message: 'Thank you! Your enquiry has been received. Our team will contact you shortly.',
      leadId: data?.leadId || `AVRX-${Date.now().toString().slice(-6)}`
    };

  } catch (err: any) {
    console.error('[AVRX SUPABASE FORM SUBMISSION ERROR]', err);

    // Network error fallback to /api/submit-form
    try {
      const serverResponse = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...payload,
          ...supabasePayload
        })
      });
      const serverData = await serverResponse.json().catch(() => null);
      if (serverResponse.ok && serverData?.success) {
        return {
          success: true,
          message: 'Thank you! Your enquiry has been received. Our team will contact you shortly.',
          leadId: serverData?.leadId || `AVRX-${Date.now().toString().slice(-6)}`
        };
      }
    } catch (_fallbackErr) {
      // ignore
    }

    return {
      success: false,
      message: "We couldn't submit your request right now. Please try again or contact us directly at +91 96306 61536 / +91 70008 59994.",
      error: err?.message || 'Network error'
    };
  }
}

// Alias for backward compatibility
export const submitLeadForm = submitForm;

