import { Router, Request, Response } from "express";
import { GoogleGenAI } from "@google/genai";
import {
  aiSettings,
  servicesCatalog,
  servicePackagesCatalog,
  portfolioSamplesCatalog,
  aiKnowledgeBase,
  leadsStore,
  conversationsStore,
  findSamplesByQuery,
  findRelevantKnowledge,
  detectLeadScore,
  generateLeadNumber,
  getAnalyticsSummary,
  StoredConversation
} from "./aiEngine";
import { LeadItem, ServiceItem, ServicePackage, PortfolioSample, AIKnowledgeItem, AISettings, AIMessage } from "../src/types/ai";

export const aiRouter = Router();

// Lazy Gemini client helper
function getGeminiClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
    return null;
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
}

// ---------------------------------------------------------------------------
// 1. CHAT CONVERSATION ENDPOINT
// ---------------------------------------------------------------------------
aiRouter.post("/chat", async (req: Request, res: Response) => {
  try {
    const { 
      message, 
      conversationHistory = [], 
      sessionId = `sess_${Date.now()}`,
      visitorId,
      voiceUsed = false,
      userLanguage = "auto"
    } = req.body;

    if (!message || typeof message !== "string") {
      res.status(400).json({ error: "Valid message string is required" });
      return;
    }

    const cleanMsg = message.trim();
    const lower = cleanMsg.toLowerCase();

    // 1. Detect Intent
    let detectedIntent = "general_question";
    let detectedService: string | undefined = undefined;
    let quickOptions: Array<{ label: string; action_value: string; category?: string }> = [];
    let navigationTarget: { label: string; page: string; slug?: string } | undefined = undefined;
    let samplesToShow: PortfolioSample[] = [];
    let packagesToShow: ServicePackage[] = [];
    let handoffTriggered = false;

    // Detect Service Categories
    if (lower.includes("website") || lower.includes("web site") || lower.includes("site banwani") || lower.includes("web development") || lower.includes("landing page") || lower.includes("wordpress") || lower.includes("portal")) {
      detectedIntent = "website_requirement";
      detectedService = "Website Design & Development";
      quickOptions = [
        { label: "Business Website", action_value: "I need a Business Website for my shop/company" },
        { label: "E-commerce Online Store", action_value: "I want an E-commerce Website with online payment" },
        { label: "Corporate Website", action_value: "I need a Corporate Website with CMS admin panel" },
        { label: "Portfolio / Landing Page", action_value: "I need a 1-page Portfolio or Landing Page" },
        { label: "See Sample Designs", action_value: "Show me website sample designs" },
        { label: "Not Sure / Need Advice", action_value: "Suggest the best website type for my business" }
      ];
      navigationTarget = { label: "Explore Website Packages", page: "services", slug: "website-design" };
      packagesToShow = servicePackagesCatalog.filter(p => p.service_slug === "website-design" || p.service_slug === "e-commerce-solutions").slice(0, 2);
    } else if (lower.includes("app") || lower.includes("android") || lower.includes("ios") || lower.includes("flutter") || lower.includes("mobile app")) {
      detectedIntent = "app_requirement";
      detectedService = "Android & iOS App Development";
      quickOptions = [
        { label: "Android Mobile App", action_value: "I need an Android App for my business" },
        { label: "iOS & Android Cross-Platform", action_value: "I need both iOS and Android App" },
        { label: "E-Commerce App", action_value: "I need an E-commerce mobile app with push notifications" }
      ];
      navigationTarget = { label: "View App Development Solutions", page: "service-detail", slug: "app-development" };
    } else if (lower.includes("loan") || lower.includes("finance") || lower.includes("emi") || lower.includes("mudra") || lower.includes("pmegp") || lower.includes("udyam loan") || lower.includes("kcc") || lower.includes("karza")) {
      detectedIntent = "loan_requirement";
      detectedService = "Financial Solutions & Loans";
      quickOptions = [
        { label: "Personal Loan (from 10.5%)", action_value: "I want to apply for a Personal Loan" },
        { label: "Business Loan (Up to 1 Cr)", action_value: "I need an Unsecured Business Loan" },
        { label: "Govt Subsidy (PMEGP / MUDRA)", action_value: "Tell me about PMEGP / MUDRA Govt Subsidy Loan" },
        { label: "Property / Mortgage Loan", action_value: "I want a Loan against Property" },
        { label: "Check EMI Calculator", action_value: "Calculate monthly EMI" }
      ];
      navigationTarget = { label: "Explore Loan Schemes & EMI Calculator", page: "financial-solutions" };
    } else if (lower.includes("insurance") || lower.includes("bima") || lower.includes("health insurance") || lower.includes("car insurance") || lower.includes("bike insurance")) {
      detectedIntent = "insurance_requirement";
      detectedService = "Insurance Solutions";
      quickOptions = [
        { label: "Motor / Car / Bike Insurance", action_value: "I want to renew my Motor / Car Insurance" },
        { label: "Health & Family Insurance", action_value: "I want a Cashless Health Insurance policy" },
        { label: "Shop / Property Insurance", action_value: "I need Commercial Shop/Property Insurance" }
      ];
      navigationTarget = { label: "Compare Insurance Plans", page: "insurance-solutions" };
    } else if (lower.includes("gst") || lower.includes("itr") || lower.includes("tax") || lower.includes("udyam") || lower.includes("company registration") || lower.includes("llp") || lower.includes("pvt ltd")) {
      detectedIntent = "tax_requirement";
      detectedService = "Tax & Registration Services";
      quickOptions = [
        { label: "New GST Registration (₹1,499)", action_value: "I want a new GST Registration Certificate" },
        { label: "Monthly GST Return Filing", action_value: "I need monthly GST return filing service" },
        { label: "Income Tax Return (ITR)", action_value: "I want to file my Income Tax Return" },
        { label: "Govt Udyam MSME Certificate", action_value: "I want Udyam MSME Registration" }
      ];
      navigationTarget = { label: "View Tax & Compliance Packages", page: "tax-solutions" };
    } else if (lower.includes("sample") || lower.includes("portfolio") || lower.includes("demo") || lower.includes("design") || lower.includes("shop") || lower.includes("restaurant") || lower.includes("hotel") || lower.includes("clinic") || lower.includes("school") || lower.includes("garment") || lower.includes("salon")) {
      detectedIntent = "portfolio";
      samplesToShow = findSamplesByQuery(cleanMsg);
    } else if (lower.includes("price") || lower.includes("pricing") || lower.includes("cost") || lower.includes("charges") || lower.includes("rate") || lower.includes("package")) {
      detectedIntent = "pricing";
      packagesToShow = servicePackagesCatalog.filter(p => p.active);
      navigationTarget = { label: "View All Transparent Plans", page: "pricing" };
    } else if (lower.includes("human") || lower.includes("team") || lower.includes("talk to agent") || lower.includes("call me") || lower.includes("agent") || lower.includes("executive") || lower.includes("manager") || lower.includes("helpline") || lower.includes("contact number")) {
      detectedIntent = "human_handoff";
      handoffTriggered = true;
    }

    // Always check for samples if business type is hinted
    if (samplesToShow.length === 0 && (lower.includes("shop") || lower.includes("restaurant") || lower.includes("clinic") || lower.includes("garment") || lower.includes("salon") || lower.includes("hotel") || lower.includes("school") || lower.includes("property"))) {
      samplesToShow = findSamplesByQuery(cleanMsg);
    }

    // 2. Retrieve verified context from Knowledge Base & Services Catalog
    const retrievedKnowledge = findRelevantKnowledge(cleanMsg);
    const activePackages = servicePackagesCatalog.map(p => `- ${p.package_name}: ₹${p.price.toLocaleString('en-IN')} (${p.delivery_time}) - ${p.description}`).join("\n");
    const activeServicesList = servicesCatalog.map(s => `- ${s.name} (${s.category})`).join("\n");

    const systemPrompt = `You are AVRX AI Assistant, the virtual customer support, sales executive, and lead qualification assistant for AVRX Digital & Financial Solution (avrx.in).

Your job is to understand customer requirements, explain AVRX services, recommend suitable services and packages, show relevant samples, answer questions using verified AVRX information, and collect qualified leads.

CORE OPERATING DIRECTIVES:
1. Always be polite, concise, welcoming, and helpful.
2. Speak naturally in the customer's language. Detect if they are speaking Hindi, English, or Hinglish (Hindi written in English alphabet) and continue seamlessly in that same language.
   - For Hindi: Use clean Devanagari script or conversational Hindi.
   - For Hinglish: e.g., "Aapki shop ke liye hamara ₹4,999 ka Starter Business Website package perfect rahega..."
3. Ask ONE clear, useful question at a time. Never overwhelm the customer with a long wall of text or multiple questions.
4. NEVER invent pricing, services, offers, or company information. Use strictly the provided verified catalog:
   VERIFIED PACKAGES:
   ${activePackages}
   VERIFIED SERVICES:
   ${activeServicesList}
   VERIFIED KNOWLEDGE:
   ${retrievedKnowledge.join("\n")}
5. For Loan and Insurance queries:
   - NEVER guarantee loan approval, claim settlement, or exact interest rates.
   - Explicitly include compliance tone: "Eligibility and loan approval strictly depend on lender policy and document verification."
   - Ask for: (1) Loan/Insurance type, (2) Approximate amount/coverage, (3) Employment or business type, (4) City/State.
6. When the customer shows buying intent (e.g. asking price, expressing interest, wanting to start):
   - Guide them toward sharing their contact details naturally and progressively: "अगर आप चाहें तो मैं आपकी requirement AVRX team तक भेज सकती हूँ। क्या मैं आपका शुभ नाम और WhatsApp नंबर जान सकती हूँ?"
7. NEVER ask for passwords, OTPs, PINs, bank account numbers, or debit/credit cards.
8. If asked something outside verified AVRX knowledge:
   - State clearly: "माफ़ कीजिए, इस बारे में अभी मेरे पास प्रमाणित जानकारी नहीं है। क्या आप चाहेंगे कि मैं आपकी enquiry AVRX specialist team को भेज दूँ?"
9. Keep responses structured, concise, and focused on helping the customer.`;

    let replyText = "";
    const ai = getGeminiClient();

    if (ai) {
      try {
        const fullPrompt = `Customer Query: "${cleanMsg}"\n\nRecent Conversation History:\n${conversationHistory.slice(-4).map((h: any) => `${h.role}: ${h.message}`).join("\n")}\n\nDeliver the best helpful, concise response:`;

        const response = await ai.models.generateContent({
          model: "gemini-3.6-flash",
          contents: fullPrompt,
          config: {
            systemInstruction: systemPrompt,
            temperature: 0.6,
          },
        });

        if (response.text) {
          replyText = response.text.trim();
        }
      } catch (err: any) {
        console.error("[AVRX AI CHAT ERROR]", err?.message || err);
      }
    }

    // Smart Multilingual Fallback Generator when Gemini key is not configured or offline
    if (!replyText) {
      if (detectedIntent === "website_requirement") {
        replyText = "ज़रूर! AVRX में हम आपकी business requirement के अनुसार custom, fast और mobile-responsive websites बनाते हैं। हमारा Starter Business Website package केवल ₹4,999 से शुरू होता है (3 दिन में डिलीवरी + 1 साल Free Hosting + WhatsApp Sync)।\n\nआप किस तरह की website या किस business के लिए बनवाना चाहते हैं?";
      } else if (detectedIntent === "loan_requirement") {
        replyText = "AVRX आपको Personal Loans (starting 10.5% p.a.), Collateral-Free Business Loans (up to ₹1 Crore), और Govt Subsidized Loans (PMEGP / MUDRA) में complete assistance प्रदान करता है।\n\n(कृपया ध्यान दें: Loan approval और interest rate संबंधित lender की policies पर निर्भर करता है।)\n\nआपको लगभग कितने amount का loan चाहिए और किस purpose के लिए?";
      } else if (detectedIntent === "tax_requirement") {
        replyText = "AVRX 100% online GST Registration (₹1,499 में 3-5 दिनों में), Monthly GST Return Filing, ITR Income Tax Return Filing (starting ₹999), और Udyam MSME Registration की सुविधा देता है।\n\nआपको किस tax या registration service में सहायता चाहिए?";
      } else if (detectedIntent === "insurance_requirement") {
        replyText = "हम Motor Insurance (Bike/Car renewal with zero-depreciation), Health Insurance (cashless treatment at 10,000+ network hospitals), और Shop/Property Insurance उपलब्ध कराते हैं।\n\nआप किस प्रकार का Insurance plan देखना चाहते हैं?";
      } else if (detectedIntent === "human_handoff") {
        replyText = "मैं आपकी request सीधे AVRX senior specialist team को भेज देती हूँ। आप नीचे दिए गए बटन से सीधे WhatsApp पर भी बात कर सकते हैं या अपना Contact Number शेयर कर सकते हैं।";
      } else {
        replyText = "नमस्ते! मैं AVRX AI Assistant हूँ। हम Website/App Development, Digital Marketing, Business & Personal Loans, GST/Tax Filing, और Insurance Solutions प्रदान करते हैं। मैं आपके लिए क्या सहायता कर सकती हूँ?";
      }
    }

    // Format WhatsApp prefilled URL
    const whatsappText = encodeURIComponent(`Hello AVRX Team,\nI am consulting AVRX AI Assistant on avrx.in.\nRequirement: ${cleanMsg}\nSession: ${sessionId}`);
    const whatsappUrl = `https://wa.me/${aiSettings.whatsapp_number.replace(/\D/g, '')}?text=${whatsappText}`;

    // Record or update conversation in session store
    let conv = conversationsStore.find(c => c.session_id === sessionId);
    const nowIso = new Date().toISOString();
    const userMsgObj: AIMessage = {
      id: `msg_u_${Date.now()}`,
      role: "user",
      message: cleanMsg,
      message_type: voiceUsed ? "voice" : "text",
      timestamp: nowIso
    };
    const assistantMsgObj: AIMessage = {
      id: `msg_a_${Date.now() + 1}`,
      role: "assistant",
      message: replyText,
      message_type: "text",
      service_detected: detectedService,
      intent_detected: detectedIntent,
      timestamp: nowIso,
      payload: {
        quick_options: quickOptions.length > 0 ? quickOptions : undefined,
        samples: samplesToShow.length > 0 ? samplesToShow : undefined,
        packages: packagesToShow.length > 0 ? packagesToShow : undefined,
        navigation: navigationTarget,
        handoff_triggered: handoffTriggered,
        whatsapp_url: whatsappUrl
      }
    };

    if (!conv) {
      conv = {
        id: `conv_${Date.now()}`,
        session_id: sessionId,
        visitor_id: visitorId,
        language: userLanguage,
        intent_detected: detectedIntent,
        service_detected: detectedService,
        voice_used: voiceUsed,
        messages: [userMsgObj, assistantMsgObj],
        started_at: nowIso,
        status: handoffTriggered ? "handed_off" : "active"
      };
      conversationsStore.unshift(conv);
    } else {
      conv.messages.push(userMsgObj, assistantMsgObj);
      conv.intent_detected = detectedIntent;
      if (detectedService) conv.service_detected = detectedService;
      if (voiceUsed) conv.voice_used = true;
      if (handoffTriggered) conv.status = "handed_off";
    }

    res.json({
      reply: replyText,
      intent: detectedIntent,
      service: detectedService,
      quick_options: quickOptions,
      samples: samplesToShow,
      packages: packagesToShow,
      navigation: navigationTarget,
      handoff: handoffTriggered,
      whatsapp_url: whatsappUrl,
      sessionId
    });

  } catch (err: any) {
    console.error("[AVRX CHAT CONTROLLER ERROR]", err?.message || err);
    res.status(500).json({
      reply: "माफ़ कीजिए, अभी technical connectivity में समस्या है। आप सीधे WhatsApp पर AVRX team से संपर्क कर सकते हैं।",
      whatsapp_url: `https://wa.me/${aiSettings.whatsapp_number.replace(/\D/g, '')}`
    });
  }
});

// ---------------------------------------------------------------------------
// 2. LEADS MANAGEMENT ENDPOINTS
// ---------------------------------------------------------------------------
aiRouter.get("/leads", (req: Request, res: Response) => {
  const { status, score, search } = req.query;

  let results = [...leadsStore];

  if (status && typeof status === "string" && status !== "all") {
    results = results.filter(l => l.status === status);
  }
  if (score && typeof score === "string" && score !== "all") {
    results = results.filter(l => l.lead_score === score);
  }
  if (search && typeof search === "string" && search.trim()) {
    const q = search.toLowerCase();
    results = results.filter(l => 
      l.full_name.toLowerCase().includes(q) ||
      (l.business_name && l.business_name.toLowerCase().includes(q)) ||
      l.mobile.includes(q) ||
      (l.email && l.email.toLowerCase().includes(q)) ||
      l.service_name.toLowerCase().includes(q) ||
      l.lead_number.toLowerCase().includes(q)
    );
  }

  res.json({
    success: true,
    count: results.length,
    leads: results
  });
});

aiRouter.post("/leads", async (req: Request, res: Response) => {
  try {
    const body = req.body || {};
    const {
      full_name,
      business_name,
      mobile,
      whatsapp,
      email,
      city,
      state,
      service_name,
      package_name,
      selected_sample_id,
      budget,
      requirement,
      preferred_contact = "whatsapp",
      source = "AI Assistant",
      sessionId
    } = body;

    if (!full_name || full_name.trim().length < 2) {
      res.status(400).json({ success: false, error: "Full Name is required" });
      return;
    }
    if (!mobile || mobile.replace(/\D/g, "").length < 10) {
      res.status(400).json({ success: false, error: "Valid 10-digit mobile number is required" });
      return;
    }

    const leadNumber = generateLeadNumber();
    const resolvedService = service_name || "Website & Digital Solutions";
    const resolvedRequirement = requirement || `Requirement submitted via ${source}`;

    // Automatic lead temperature and score estimation
    const scoreData = detectLeadScore([
      { role: "user", message: `${resolvedRequirement} ${package_name || ''} ${budget || ''}` }
    ]);

    const newLead: LeadItem = {
      id: `lead_${Date.now()}`,
      lead_number: leadNumber,
      full_name: full_name.trim(),
      business_name: business_name ? business_name.trim() : undefined,
      mobile: mobile.trim(),
      whatsapp: (whatsapp || mobile).trim(),
      email: email ? email.trim().toLowerCase() : undefined,
      city: city ? city.trim() : undefined,
      state: state ? state.trim() : undefined,
      service_name: resolvedService,
      package_name: package_name ? package_name.trim() : undefined,
      selected_sample_id: selected_sample_id || undefined,
      budget: budget ? String(budget).trim() : undefined,
      requirement: resolvedRequirement,
      preferred_contact,
      source,
      status: "new",
      priority: scoreData.score === "HOT" ? "high" : "normal",
      lead_score: scoreData.score,
      lead_temperature: scoreData.temp,
      created_at: new Date().toISOString()
    };

    leadsStore.unshift(newLead);

    // Link lead to conversation session if provided
    if (sessionId) {
      const conv = conversationsStore.find(c => c.session_id === sessionId);
      if (conv) {
        conv.lead_id = newLead.id;
        conv.customer_name = newLead.full_name;
      }
    }

    // Construct WhatsApp message prefill
    const waText = encodeURIComponent(
      `Hello AVRX Team,\nI am ${newLead.full_name}.\nI am interested in ${newLead.service_name}.\nRequirement: ${newLead.requirement || 'General Enquiry'}\nLead ID: ${newLead.lead_number}`
    );
    const whatsappUrl = `https://wa.me/${aiSettings.whatsapp_number.replace(/\D/g, '')}?text=${waText}`;

    // Forward to Supabase Edge Function asynchronously
    try {
      const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY || '';
      const headers: Record<string, string> = { 'Content-Type': 'application/json' };
      if (supabaseAnonKey) {
        headers['apikey'] = supabaseAnonKey;
        headers['Authorization'] = `Bearer ${supabaseAnonKey}`;
      }
      fetch('https://ncopprboovzhsqzqbrab.supabase.co/functions/v1/submit-client', {
        method: 'POST',
        headers,
        body: JSON.stringify({
          name: newLead.full_name,
          phone: newLead.mobile,
          email: newLead.email || 'not-provided@avrx.in',
          message: `[AI LEAD - ${newLead.lead_number}] Service: ${newLead.service_name} | Package: ${newLead.package_name || 'N/A'} | Req: ${newLead.requirement}`
        })
      }).catch(() => {});
    } catch {}

    res.json({
      success: true,
      message: "Lead created successfully",
      lead_number: newLead.lead_number,
      lead: newLead,
      whatsapp_url: whatsappUrl
    });

  } catch (err: any) {
    console.error("[AVRX CREATE LEAD ERROR]", err);
    res.status(500).json({ success: false, error: "Failed to create lead" });
  }
});

aiRouter.patch("/leads/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const leadIndex = leadsStore.findIndex(l => l.id === id || l.lead_number === id);

  if (leadIndex === -1) {
    res.status(404).json({ success: false, error: "Lead not found" });
    return;
  }

  const updates = req.body || {};
  leadsStore[leadIndex] = {
    ...leadsStore[leadIndex],
    ...updates,
    updated_at: new Date().toISOString()
  };

  res.json({
    success: true,
    message: "Lead updated",
    lead: leadsStore[leadIndex]
  });
});

aiRouter.delete("/leads/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const leadIndex = leadsStore.findIndex(l => l.id === id || l.lead_number === id);

  if (leadIndex === -1) {
    res.status(404).json({ success: false, error: "Lead not found" });
    return;
  }

  leadsStore.splice(leadIndex, 1);
  res.json({ success: true, message: "Lead removed" });
});

// ---------------------------------------------------------------------------
// 3. CONVERSATIONS MANAGEMENT ENDPOINTS
// ---------------------------------------------------------------------------
aiRouter.get("/conversations", (_req: Request, res: Response) => {
  res.json({
    success: true,
    count: conversationsStore.length,
    conversations: conversationsStore
  });
});

aiRouter.get("/conversations/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const conv = conversationsStore.find(c => c.id === id || c.session_id === id);

  if (!conv) {
    res.status(404).json({ success: false, error: "Conversation not found" });
    return;
  }

  res.json({
    success: true,
    conversation: conv
  });
});

// ---------------------------------------------------------------------------
// 4. SERVICES MANAGEMENT ENDPOINTS
// ---------------------------------------------------------------------------
aiRouter.get("/services", (_req: Request, res: Response) => {
  res.json({ success: true, count: servicesCatalog.length, services: servicesCatalog });
});

aiRouter.post("/services", (req: Request, res: Response) => {
  const body = req.body as ServiceItem;
  if (!body.name || !body.category) {
    res.status(400).json({ success: false, error: "Name and Category are required" });
    return;
  }

  const newService: ServiceItem = {
    id: `srv_${Date.now()}`,
    category: body.category,
    name: body.name,
    slug: body.slug || body.name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    icon: body.icon || "Globe",
    short_desc: body.short_desc || "",
    full_desc: body.full_desc,
    starting_price: Number(body.starting_price) || 0,
    active: body.active ?? true,
    order_index: servicesCatalog.length + 1
  };

  servicesCatalog.push(newService);
  res.json({ success: true, service: newService });
});

aiRouter.put("/services/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const idx = servicesCatalog.findIndex(s => s.id === id || s.slug === id);
  if (idx === -1) {
    res.status(404).json({ success: false, error: "Service not found" });
    return;
  }

  servicesCatalog[idx] = { ...servicesCatalog[idx], ...req.body };
  res.json({ success: true, service: servicesCatalog[idx] });
});

aiRouter.delete("/services/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const idx = servicesCatalog.findIndex(s => s.id === id || s.slug === id);
  if (idx === -1) {
    res.status(404).json({ success: false, error: "Service not found" });
    return;
  }

  servicesCatalog.splice(idx, 1);
  res.json({ success: true, message: "Service deleted" });
});

// ---------------------------------------------------------------------------
// 5. PACKAGES & PRICING MANAGEMENT ENDPOINTS
// ---------------------------------------------------------------------------
aiRouter.get("/packages", (_req: Request, res: Response) => {
  res.json({ success: true, count: servicePackagesCatalog.length, packages: servicePackagesCatalog });
});

aiRouter.post("/packages", (req: Request, res: Response) => {
  const body = req.body as ServicePackage;
  if (!body.package_name || !body.price) {
    res.status(400).json({ success: false, error: "Package Name and Price are required" });
    return;
  }

  const newPkg: ServicePackage = {
    id: `pkg_${Date.now()}`,
    service_id: body.service_id || "srv-web-01",
    service_slug: body.service_slug || "website-design",
    package_name: body.package_name,
    price: Number(body.price),
    discount_price: body.discount_price ? Number(body.discount_price) : undefined,
    description: body.description || "",
    features: Array.isArray(body.features) ? body.features : [],
    delivery_time: body.delivery_time || "3-5 Days",
    popular: body.popular ?? false,
    active: body.active ?? true
  };

  servicePackagesCatalog.push(newPkg);
  res.json({ success: true, package: newPkg });
});

aiRouter.put("/packages/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const idx = servicePackagesCatalog.findIndex(p => p.id === id);
  if (idx === -1) {
    res.status(404).json({ success: false, error: "Package not found" });
    return;
  }

  servicePackagesCatalog[idx] = { ...servicePackagesCatalog[idx], ...req.body };
  res.json({ success: true, package: servicePackagesCatalog[idx] });
});

aiRouter.delete("/packages/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const idx = servicePackagesCatalog.findIndex(p => p.id === id);
  if (idx === -1) {
    res.status(404).json({ success: false, error: "Package not found" });
    return;
  }

  servicePackagesCatalog.splice(idx, 1);
  res.json({ success: true, message: "Package deleted" });
});

// ---------------------------------------------------------------------------
// 6. PORTFOLIO SAMPLES MANAGEMENT ENDPOINTS
// ---------------------------------------------------------------------------
aiRouter.get("/portfolio", (_req: Request, res: Response) => {
  res.json({ success: true, count: portfolioSamplesCatalog.length, samples: portfolioSamplesCatalog });
});

aiRouter.post("/portfolio", (req: Request, res: Response) => {
  const body = req.body as PortfolioSample;
  if (!body.title || !body.preview_image) {
    res.status(400).json({ success: false, error: "Title and Preview Image are required" });
    return;
  }

  const newSample: PortfolioSample = {
    id: `sample_${Date.now()}`,
    sample_id: body.sample_id || `sample-${Date.now().toString().slice(-4)}`,
    title: body.title,
    category: body.category || "website",
    business_type: body.business_type || "other",
    preview_image: body.preview_image,
    demo_url: body.demo_url || "https://avrx.in/projects",
    description: body.description || "",
    technologies: Array.isArray(body.technologies) ? body.technologies : ["React", "Tailwind"],
    starting_price: Number(body.starting_price) || 4999,
    tags: Array.isArray(body.tags) ? body.tags : [body.business_type || "Design"],
    featured: body.featured ?? false,
    active: body.active ?? true
  };

  portfolioSamplesCatalog.push(newSample);
  res.json({ success: true, sample: newSample });
});

aiRouter.put("/portfolio/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const idx = portfolioSamplesCatalog.findIndex(s => s.id === id || s.sample_id === id);
  if (idx === -1) {
    res.status(404).json({ success: false, error: "Sample not found" });
    return;
  }

  portfolioSamplesCatalog[idx] = { ...portfolioSamplesCatalog[idx], ...req.body };
  res.json({ success: true, sample: portfolioSamplesCatalog[idx] });
});

aiRouter.delete("/portfolio/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const idx = portfolioSamplesCatalog.findIndex(s => s.id === id || s.sample_id === id);
  if (idx === -1) {
    res.status(404).json({ success: false, error: "Sample not found" });
    return;
  }

  portfolioSamplesCatalog.splice(idx, 1);
  res.json({ success: true, message: "Sample deleted" });
});

// ---------------------------------------------------------------------------
// 7. KNOWLEDGE BASE MANAGEMENT ENDPOINTS
// ---------------------------------------------------------------------------
aiRouter.get("/knowledge", (_req: Request, res: Response) => {
  res.json({ success: true, count: aiKnowledgeBase.length, knowledge: aiKnowledgeBase });
});

aiRouter.post("/knowledge", (req: Request, res: Response) => {
  const body = req.body as AIKnowledgeItem;
  if (!body.title || !body.content) {
    res.status(400).json({ success: false, error: "Title and Content are required" });
    return;
  }

  const newKb: AIKnowledgeItem = {
    id: `kb_${Date.now()}`,
    title: body.title,
    category: body.category || "company",
    content: body.content,
    keywords: Array.isArray(body.keywords) ? body.keywords : [],
    priority: Number(body.priority) || 50,
    active: body.active ?? true,
    updated_at: new Date().toISOString()
  };

  aiKnowledgeBase.push(newKb);
  res.json({ success: true, item: newKb });
});

aiRouter.put("/knowledge/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const idx = aiKnowledgeBase.findIndex(k => k.id === id);
  if (idx === -1) {
    res.status(404).json({ success: false, error: "Knowledge item not found" });
    return;
  }

  aiKnowledgeBase[idx] = { ...aiKnowledgeBase[idx], ...req.body, updated_at: new Date().toISOString() };
  res.json({ success: true, item: aiKnowledgeBase[idx] });
});

aiRouter.delete("/knowledge/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const idx = aiKnowledgeBase.findIndex(k => k.id === id);
  if (idx === -1) {
    res.status(404).json({ success: false, error: "Knowledge item not found" });
    return;
  }

  aiKnowledgeBase.splice(idx, 1);
  res.json({ success: true, message: "Knowledge item deleted" });
});

// ---------------------------------------------------------------------------
// 8. AI SETTINGS & ANALYTICS ENDPOINTS
// ---------------------------------------------------------------------------
aiRouter.get("/settings", (_req: Request, res: Response) => {
  res.json({ success: true, settings: aiSettings });
});

aiRouter.post("/settings", (req: Request, res: Response) => {
  const updates = req.body as Partial<AISettings>;
  Object.assign(aiSettings, updates, { updated_at: new Date().toISOString() });
  res.json({ success: true, settings: aiSettings, message: "AI Settings updated successfully" });
});

aiRouter.get("/analytics", (_req: Request, res: Response) => {
  res.json({
    success: true,
    analytics: getAnalyticsSummary()
  });
});
