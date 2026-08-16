/**
 * AVRX Client-Side Form Submission Engine
 * Production-ready utility for submitting lead forms across the site
 */

export interface FormSubmissionPayload {
  name: string;
  phone: string;
  email: string;
  location?: string;
  city?: string;
  state?: string;
  serviceCategory?: string;
  subject?: string;
  message?: string;
  sourcePage?: string;
  formType?: string;
  website_hp?: string;
  additionalFields?: Record<string, any>;
}

export interface FormSubmissionResponse {
  success: boolean;
  message: string;
  leadId?: string;
  adminEmailSent?: boolean;
  clientEmailSent?: boolean;
  error?: string;
}

export function validateFormFields(data: { name: string; phone: string; email: string }): string | null {
  if (!data.name || data.name.trim().length < 2) {
    return 'Please enter your full name.';
  }
  const cleanDigits = data.phone.replace(/\D/g, '');
  if (cleanDigits.length < 10) {
    return 'Please enter a valid 10-digit mobile number.';
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email.trim())) {
    return 'Please enter a valid email address.';
  }
  return null;
}

export async function submitLeadForm(payload: FormSubmissionPayload): Promise<FormSubmissionResponse> {
  const validationError = validateFormFields(payload);
  if (validationError) {
    return {
      success: false,
      message: validationError,
      error: validationError
    };
  }

  try {
    const response = await fetch('/api/send-form-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        ...payload,
        name: payload.name.trim(),
        email: payload.email.trim().toLowerCase(),
        phone: payload.phone.trim(),
        sourcePage: payload.sourcePage || (typeof window !== 'undefined' ? window.location.pathname : 'AVRX.in')
      })
    });

    const data = await response.json();

    if (response.ok && data.success) {
      return {
        success: true,
        message: data.message || 'Your enquiry has been successfully submitted.',
        leadId: data.leadId,
        adminEmailSent: data.adminEmailSent,
        clientEmailSent: data.clientEmailSent
      };
    } else {
      return {
        success: false,
        message: data.error || "We couldn't submit your enquiry right now. Please try again or contact us directly.",
        error: data.error
      };
    }
  } catch (err: any) {
    console.error('[AVRX FORM SUBMIT ERROR]', err);
    return {
      success: false,
      message: "We couldn't submit your enquiry right now. Please try again or contact us directly.",
      error: err?.message || 'Network error'
    };
  }
}
