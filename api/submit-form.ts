/**
 * AVRX Centralized Serverless Function: /api/submit-form
 * Primary handler for all website form submissions on AVRX.in
 * Connects directly to Supabase Edge Function: submit-client
 */

interface GenericReq {
  method?: string;
  body?: any;
  headers: Record<string, any>;
  socket?: { remoteAddress?: string };
}

interface GenericRes {
  status: (code: number) => GenericRes;
  json: (data: any) => void;
  setHeader: (name: string, value: any) => void;
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(String(email).trim());
}

function isValidPhone(phone: string): boolean {
  const digits = String(phone).replace(/\D/g, '');
  return digits.length >= 10 && digits.length <= 15;
}

function getDeviceType(userAgent: string = ''): string {
  const ua = userAgent.toLowerCase();
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return 'Tablet';
  }
  if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/i.test(ua)) {
    return 'Mobile Device';
  }
  return 'Desktop Browser';
}

export default async function handler(req: GenericReq, res: GenericRes) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ success: false, error: `Method ${req.method} Not Allowed` });
  }

  try {
    const body = req.body || {};
    const {
      formName,
      formType,
      name,
      fullName,
      clientName,
      email,
      emailAddress,
      phone,
      mobile,
      phoneNumber,
      service,
      serviceCategory,
      subject,
      message,
      comments,
      requirements,
      location,
      city,
      state,
      pageName,
      sourcePage,
      currentUrl,
      deviceType,
      website_hp,
      hp_field,
      _hp,
      formData,
      additionalFields
    } = body;

    // 1. Honeypot check for spambots
    if (website_hp || hp_field || _hp) {
      return res.status(200).json({
        success: true,
        message: "Thank You!\n\nYour request has been submitted successfully.\n\nOur AVRX team will contact you shortly.",
        leadId: `AVRX-LEAD-${Date.now().toString().slice(-6)}`,
        adminEmailSent: true,
        clientEmailSent: true
      });
    }

    // 2. Client IP & Device
    const userAgent = (req.headers['user-agent'] as string) || '';
    const clientIp = (req.headers['x-forwarded-for'] as string || req.socket?.remoteAddress || '127.0.0.1').split(',')[0].trim();
    const resolvedDevice = deviceType || getDeviceType(userAgent);

    // 3. Normalization & Validation
    const resolvedName = String(name || fullName || clientName || '').trim();
    const resolvedEmail = String(email || emailAddress || '').trim().toLowerCase();
    const resolvedPhone = String(phone || mobile || phoneNumber || '').trim();
    const resolvedService = String(service || serviceCategory || subject || 'Digital & Financial Solution').trim();
    const resolvedLocation = String(location || (city && state ? `${city}, ${state}` : city || state) || '').trim();
    const resolvedMessage = String(message || comments || requirements || '').trim();
    const resolvedFormName = String(formName || formType || 'Website Enquiry Form').trim();
    const resolvedPage = String(pageName || sourcePage || 'AVRX.in Website').trim();
    const resolvedUrl = String(currentUrl || req.headers['referer'] || 'https://avrx.in').trim();

    if (!resolvedName || resolvedName.length < 2) {
      return res.status(400).json({ success: false, error: "Please enter your full name." });
    }
    if (!resolvedEmail || !isValidEmail(resolvedEmail)) {
      return res.status(400).json({ success: false, error: "Please enter a valid email address." });
    }
    if (!resolvedPhone || !isValidPhone(resolvedPhone)) {
      return res.status(400).json({ success: false, error: "Please enter a valid 10-digit mobile number." });
    }

    // 4. Extract all dynamic fields
    const dynamicFields: Record<string, any> = {
      ...(typeof formData === 'object' && formData ? formData : {}),
      ...(typeof additionalFields === 'object' && additionalFields ? additionalFields : {})
    };

    // Grab other non-standard fields from body
    const standardKeys = new Set([
      'formName', 'formType', 'name', 'fullName', 'clientName', 'email', 'emailAddress',
      'phone', 'mobile', 'phoneNumber', 'service', 'serviceCategory', 'subject',
      'message', 'comments', 'requirements', 'location', 'city', 'state',
      'pageName', 'sourcePage', 'currentUrl', 'deviceType', 'website_hp', 'hp_field', '_hp',
      'formData', 'additionalFields'
    ]);

    for (const [key, value] of Object.entries(body)) {
      if (!standardKeys.has(key) && value !== undefined && value !== null && value !== '') {
        dynamicFields[key] = value;
      }
    }

    // 5. Construct Structured Lead Payload
    const leadId = `AVRX-${Date.now().toString().slice(-6)}`;
    const formattedDate = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "short"
    }) + " IST";

    const leadData = {
      id: leadId,
      formName: resolvedFormName,
      name: resolvedName,
      email: resolvedEmail,
      phone: resolvedPhone,
      service: resolvedService,
      serviceCategory: resolvedService,
      subject: subject ? String(subject).trim() : `Website Inquiry – ${resolvedService}`,
      message: resolvedMessage || 'No message provided',
      location: resolvedLocation || undefined,
      city: city ? String(city).trim() : undefined,
      state: state ? String(state).trim() : undefined,
      pageName: resolvedPage,
      sourcePage: resolvedPage,
      currentUrl: resolvedUrl,
      deviceType: resolvedDevice,
      createdAt: formattedDate,
      ipAddress: clientIp,
      dynamicFields: Object.keys(dynamicFields).length > 0 ? dynamicFields : undefined
    };

    // 6. Forward exact JSON schema payload to Supabase Edge Function
    const supabasePayload = {
      name: resolvedName,
      phone: resolvedPhone,
      email: resolvedEmail,
      message: resolvedMessage || `Enquiry for ${resolvedService}`
    };

    const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY || '';
    const supabaseHeaders: Record<string, string> = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };
    if (supabaseAnonKey) {
      supabaseHeaders['apikey'] = supabaseAnonKey;
      supabaseHeaders['Authorization'] = `Bearer ${supabaseAnonKey}`;
    }

    try {
      await fetch('https://ncopprboovzhsqzqbrab.supabase.co/functions/v1/submit-client', {
        method: 'POST',
        headers: supabaseHeaders,
        body: JSON.stringify(supabasePayload)
      });
    } catch (edgeErr: any) {
      console.error('[SERVERLESS /api/submit-form -> SUPABASE EDGE ERROR]', edgeErr?.message || edgeErr);
    }

    // 7. Return Clean Structured Response
    return res.status(200).json({
      success: true,
      message: "Thank you! Your enquiry has been received. Our team will contact you shortly.",
      leadId: leadData.id
    });

  } catch (err: any) {
    console.error("[AVRX /api/submit-form ERROR]", err?.message || err);
    return res.status(500).json({
      success: false,
      error: "Unable to submit your request right now. Please try again or contact us directly at +91 96306 61536 / +91 70008 59994."
    });
  }
}
