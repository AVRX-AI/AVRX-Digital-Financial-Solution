/**
 * AVRX Centralized Client-Side Form Submission Engine
 * Production-ready utility for submitting all lead forms across the AVRX website
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
 * Directs to the centralized /api/submit-form endpoint
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

  const isBrowser = typeof window !== 'undefined';
  const currentUrl = isBrowser ? window.location.href : 'https://avrx.in';
  const pageName = isBrowser ? (document.title || window.location.pathname) : 'AVRX Website';
  const deviceType = detectClientDevice();

  const preparedPayload = {
    ...payload,
    formName: payload.formName || payload.formType || 'Website Enquiry Form',
    name: payload.name.trim(),
    email: payload.email.trim().toLowerCase(),
    phone: payload.phone.trim(),
    currentUrl: payload.currentUrl || currentUrl,
    pageName: payload.pageName || payload.sourcePage || pageName,
    sourcePage: payload.sourcePage || pageName,
    deviceType: payload.deviceType || deviceType
  };

  try {
    const response = await fetch('/api/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(preparedPayload)
    });

    const raw = await response.text();
    let data: any = {};
    try { data = raw ? JSON.parse(raw) : {}; } catch { data = {}; }

    if (response.ok && data.success) {
      return {
        success: true,
        message: data.message || 'Thank You!\n\nYour enquiry has been submitted successfully.\n\nOur AVRX team will contact you shortly.',
        leadId: data.leadId,
        adminEmailSent: data.adminEmailSent,
        clientEmailSent: data.clientEmailSent
      };
    } else {
      return {
        success: false,
        message: data.error || "We couldn't submit your request right now. Please try again or contact us directly at +91 96306 61536.",
        error: data.error
      };
    }
  } catch (err: any) {
    console.error('[AVRX FORM SUBMISSION ERROR]', err);
    return {
      success: false,
      message: "We couldn't submit your request right now. Please try again or contact us directly at +91 96306 61536 / +91 70008 59994.",
      error: err?.message || 'Network error'
    };
  }
}

// Alias for backward compatibility
export const submitLeadForm = submitForm;
