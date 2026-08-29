/**
 * Google Analytics 4 (GA4) Integration Utility for AVRX
 * Measurement ID: G-HB9M06BD6H
 */

export const GA_MEASUREMENT_ID = 'G-HB9M06BD6H';

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

/**
 * Send a page_view event to GA4
 */
export const trackPageView = (path?: string, title?: string) => {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;

  const pagePath = path || window.location.pathname + window.location.search;
  const pageTitle = title || document.title;
  const pageLocation = window.location.href;

  window.gtag('event', 'page_view', {
    page_title: pageTitle,
    page_location: pageLocation,
    page_path: pagePath,
    send_to: GA_MEASUREMENT_ID,
  });
};

/**
 * Generic GA4 custom event tracking helper
 */
export const trackEvent = (eventName: string, params: Record<string, any> = {}) => {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;

  window.gtag('event', eventName, {
    ...params,
    send_to: GA_MEASUREMENT_ID,
  });
};

/* =========================================================================
   Prepared Event Helper Functions for GA4
   These are lightweight, non-breaking and ready for current/future event tracking
   ========================================================================= */

/** Track WhatsApp button interactions */
export const trackWhatsAppClick = (source: string = 'floating_button', label?: string) => {
  trackEvent('whatsapp_click', {
    event_category: 'Lead & Contact',
    source,
    label: label || 'WhatsApp Consultation',
  });
};

/** Track Phone call button clicks */
export const trackPhoneCallClick = (phoneNumber: string = '+919999999999', source: string = 'contact') => {
  trackEvent('phone_call_click', {
    event_category: 'Lead & Contact',
    phone_number: phoneNumber,
    source,
  });
};

/** Track Contact form submissions */
export const trackContactFormSubmission = (formName: string, serviceInterest?: string) => {
  trackEvent('contact_form_submission', {
    event_category: 'Form Submission',
    form_name: formName,
    service_interest: serviceInterest || 'General',
  });
};

/** Track Service enquiry inquiries */
export const trackServiceEnquiry = (serviceName: string, category?: string) => {
  trackEvent('service_enquiry', {
    event_category: 'Enquiry',
    service_name: serviceName,
    service_category: category || 'Digital & Financial',
  });
};

/** Track Service page views */
export const trackServicePageView = (serviceName: string, serviceSlug: string) => {
  trackEvent('service_page_view', {
    event_category: 'Service Navigation',
    service_name: serviceName,
    service_slug: serviceSlug,
  });
};

/** Track CTA button clicks */
export const trackCtaClick = (ctaName: string, location: string = 'page_body') => {
  trackEvent('cta_click', {
    event_category: 'User Engagement',
    cta_name: ctaName,
    location,
  });
};

/** Track AI Tool usage */
export const trackAiToolUsage = (toolName: string, action: string = 'run_tool') => {
  trackEvent('ai_tool_usage', {
    event_category: 'AI Tools',
    tool_name: toolName,
    tool_action: action,
  });
};

/** Track Quote requests */
export const trackQuoteRequest = (serviceType: string, estimatedValue?: number) => {
  trackEvent('quote_request', {
    event_category: 'Lead Generation',
    service_type: serviceType,
    estimated_value: estimatedValue,
  });
};

/** Track Lead generation events */
export const trackLeadGeneration = (leadType: string, status: string = 'new') => {
  trackEvent('generate_lead', {
    event_category: 'Conversion',
    lead_type: leadType,
    status,
  });
};
