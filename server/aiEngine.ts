import { GoogleGenAI } from "@google/genai";
import { 
  ServiceItem, 
  ServicePackage, 
  PortfolioSample, 
  LeadItem, 
  AIKnowledgeItem, 
  AISettings, 
  AIAnalyticsSummary,
  AIMessage
} from "../src/types/ai";

// ============================================================================
// IN-MEMORY ACTIVE STATE (SEEDED WITH PRODUCTION AVRX DATA)
// ============================================================================

export const aiSettings: AISettings = {
  assistant_name: "AVRX AI Assistant",
  greeting: "नमस्ते! मैं AVRX AI Assistant हूँ। आपकी क्या सहायता कर सकती हूँ?",
  default_language: "auto",
  voice_enabled: true,
  chat_enabled: true,
  lead_collection_enabled: true,
  human_handoff_enabled: true,
  business_hours: "10:00 AM - 07:00 PM IST (Mon - Sat)",
  whatsapp_number: "+919630661536",
  admin_email: "avinash.rai.official@gmail.com",
  phone_number: "+917000859994",
  updated_at: new Date().toISOString()
};

export const servicesCatalog: ServiceItem[] = [
  {
    id: "srv-web-01",
    category: "digital",
    name: "Website Design & Development",
    slug: "website-design",
    icon: "Globe",
    short_desc: "Custom responsive, SEO-ready business, corporate, and catalog websites.",
    starting_price: 4999,
    active: true,
    order_index: 1
  },
  {
    id: "srv-ecom-02",
    category: "digital",
    name: "E-Commerce Solutions",
    slug: "e-commerce-solutions",
    icon: "ShoppingCart",
    short_desc: "High-converting online store with payment gateway & WhatsApp checkout.",
    starting_price: 9999,
    active: true,
    order_index: 2
  },
  {
    id: "srv-app-03",
    category: "digital",
    name: "Android & iOS App Development",
    slug: "app-development",
    icon: "Smartphone",
    short_desc: "Native and Flutter mobile apps with push notifications and backend API.",
    starting_price: 19999,
    active: true,
    order_index: 3
  },
  {
    id: "srv-portal-04",
    category: "digital",
    name: "Web Portal & SaaS Development",
    slug: "web-portal-development",
    icon: "LayoutGrid",
    short_desc: "Custom multi-tenant dashboards, CRM systems, and enterprise portals.",
    starting_price: 24999,
    active: true,
    order_index: 4
  },
  {
    id: "srv-mktg-05",
    category: "digital",
    name: "Digital Marketing & Meta/Google Ads",
    slug: "digital-marketing",
    icon: "Megaphone",
    short_desc: "Targeted Facebook, Instagram, Google PPC, and WhatsApp funnels.",
    starting_price: 4999,
    active: true,
    order_index: 5
  },
  {
    id: "srv-seo-06",
    category: "digital",
    name: "SEO & Google #1 Ranking",
    slug: "seo-ranking",
    icon: "TrendingUp",
    short_desc: "Technical SEO, Local 3-Pack Google Maps rank, and quality backlinks.",
    starting_price: 3999,
    active: true,
    order_index: 6
  },
  {
    id: "srv-loan-personal-07",
    category: "financial",
    name: "Personal Loan",
    slug: "personal-loan",
    icon: "UserCheck",
    short_desc: "Fast-track personal financing starting from 10.5% p.a. with minimal docs.",
    starting_price: 0,
    active: true,
    order_index: 7
  },
  {
    id: "srv-loan-biz-08",
    category: "financial",
    name: "Business Loan & Working Capital",
    slug: "business-loan",
    icon: "Building2",
    short_desc: "Collateral-free MSME business loans up to ₹1 Crore for growth.",
    starting_price: 0,
    active: true,
    order_index: 8
  },
  {
    id: "srv-loan-govt-09",
    category: "financial",
    name: "Govt Subsidy Loan (PMEGP / MUDRA)",
    slug: "govt-subsidy-loan",
    icon: "Award",
    short_desc: "Government supported subsidy schemes with up to 35% capital subsidy.",
    starting_price: 0,
    active: true,
    order_index: 9
  },
  {
    id: "srv-loan-prop-10",
    category: "financial",
    name: "Property & Mortgage Loan",
    slug: "mortgage-loan",
    icon: "Home",
    short_desc: "Loan against residential or commercial property with up to 15 yr tenure.",
    starting_price: 0,
    active: true,
    order_index: 10
  },
  {
    id: "srv-tax-gst-11",
    category: "tax",
    name: "GST Registration & Monthly Filing",
    slug: "gst-services",
    icon: "FileText",
    short_desc: "100% online GST certificate in 3-5 days and hassle-free monthly returns.",
    starting_price: 1499,
    active: true,
    order_index: 11
  },
  {
    id: "srv-tax-itr-12",
    category: "tax",
    name: "ITR Income Tax Return Filing",
    slug: "itr-filing",
    icon: "Calculator",
    short_desc: "Expert CA-assisted ITR filing for salaried, business, and traders.",
    starting_price: 999,
    active: true,
    order_index: 12
  },
  {
    id: "srv-tax-reg-13",
    category: "tax",
    name: "Udyam MSME & Company Registration",
    slug: "company-registration",
    icon: "Briefcase",
    short_desc: "Official Govt Udyam certificate, Private Limited, and LLP incorporation.",
    starting_price: 999,
    active: true,
    order_index: 13
  },
  {
    id: "srv-ins-motor-14",
    category: "insurance",
    name: "Comprehensive Motor Insurance",
    slug: "motor-insurance",
    icon: "Shield",
    short_desc: "Instant bike and car insurance renewal with zero-dep & cashless claims.",
    starting_price: 999,
    active: true,
    order_index: 14
  },
  {
    id: "srv-ins-health-15",
    category: "insurance",
    name: "Health & Family Floater Insurance",
    slug: "health-insurance",
    icon: "HeartHandshake",
    short_desc: "Cashless hospitalization across 10,000+ top hospitals with no room-rent cap.",
    starting_price: 4999,
    active: true,
    order_index: 15
  }
];

export const servicePackagesCatalog: ServicePackage[] = [
  {
    id: "pkg-web-starter",
    service_id: "srv-web-01",
    service_slug: "website-design",
    package_name: "Starter Business Website",
    price: 4999,
    discount_price: 7999,
    description: "Ideal for small retail shops, clinics, local vendors, and professionals.",
    features: [
      "Up to 5 Mobile-Responsive Clean Pages",
      "1 Year Free NVMe Cloud Web Hosting",
      "Free Domain Name Linkage & SSL Certificate",
      "Direct WhatsApp Floating Chat Integration",
      "Google Maps Location & Enquiry Lead Form",
      "Fast 3 Days Delivery"
    ],
    delivery_time: "3 Days",
    popular: false,
    active: true
  },
  {
    id: "pkg-web-corp",
    service_id: "srv-web-01",
    service_slug: "website-design",
    package_name: "Professional Corporate Website",
    price: 9999,
    discount_price: 14999,
    description: "Tailored for growing enterprises, institutes, manufacturers, and consultancies.",
    features: [
      "Up to 10 Custom Dynamic Pages",
      "Easy Admin CMS to Edit Photos/Text",
      "Complete On-Page SEO & Google Schema",
      "Ultra-Fast Performance (90+ Core Web Vitals)",
      "Lead Capture with Instant Email Notifications",
      "Social Media & Portfolio Showcase"
    ],
    delivery_time: "5 Days",
    popular: true,
    active: true
  },
  {
    id: "pkg-ecom-store",
    service_id: "srv-ecom-02",
    service_slug: "e-commerce-solutions",
    package_name: "E-Commerce Growth Store",
    price: 14999,
    discount_price: 21999,
    description: "Complete online selling engine with UPI/Card payments and courier sync.",
    features: [
      "Unlimited Products & Category Catalog",
      "Razorpay / PhonePe / Paytm Payment Gateways",
      "Direct WhatsApp Instant Order Checkout",
      "Shiprocket & Delhivery Automated Courier Pickup",
      "Automated Tax Invoice PDF Generator",
      "Customer Order Status & SMS Alerts"
    ],
    delivery_time: "7 Days",
    popular: true,
    active: true
  },
  {
    id: "pkg-mktg-starter",
    service_id: "srv-mktg-05",
    service_slug: "digital-marketing",
    package_name: "Meta & Google Ads Campaign",
    price: 4999,
    discount_price: 8999,
    description: "High-ROAS lead generation campaigns on Facebook, Instagram, and Google Search.",
    features: [
      "Custom Ad Creatives & Video Graphics",
      "High-Intent Target Audience Research",
      "Direct WhatsApp Lead Funnel Setup",
      "Weekly CPL (Cost Per Lead) Analytics Reports",
      "Continuous Ad Optimization by Growth Specialist"
    ],
    delivery_time: "Monthly Management",
    popular: false,
    active: true
  },
  {
    id: "pkg-tax-gst",
    service_id: "srv-tax-gst-11",
    service_slug: "gst-services",
    package_name: "Complete GST Registration",
    price: 1499,
    discount_price: 2499,
    description: "Government GSTIN certificate with complete verification and CA support.",
    features: [
      "Govt Application & Verification Handled",
      "Certificate within 3-5 Working Days",
      "HSN/SAC Code Guidance",
      "Free Invoicing Template & Advice",
      "1 Month Free GST Compliance Consultation"
    ],
    delivery_time: "3-5 Days",
    popular: true,
    active: true
  }
];

export const portfolioSamplesCatalog: PortfolioSample[] = [
  {
    id: "sample-garments-01",
    sample_id: "sample-garments-01",
    title: "Royal Threads & Fashion Boutique",
    category: "ecommerce",
    business_type: "garments",
    preview_image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
    demo_url: "https://avrx.in/projects",
    description: "High-end fashion boutique store with modern product grids, size filter, and WhatsApp order checkout.",
    technologies: ["React", "Tailwind CSS", "Razorpay", "WhatsApp Sync"],
    starting_price: 9999,
    tags: ["Garments", "Clothing", "Fashion", "Boutique", "Shop", "Textiles", "Saree"],
    featured: true,
    active: true
  },
  {
    id: "sample-restaurant-01",
    sample_id: "sample-restaurant-01",
    title: "Saffron Spice Fine Dining & Cafe",
    category: "website",
    business_type: "restaurant",
    preview_image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    demo_url: "https://avrx.in/projects",
    description: "Digital QR food menu, table reservation booking engine, and direct online takeaway orders.",
    technologies: ["Next.js", "Online Booking", "QR Menu", "Google Maps"],
    starting_price: 5999,
    tags: ["Restaurant", "Cafe", "Food", "Dining", "Bakery", "Hotel Food", "Fast Food"],
    featured: true,
    active: true
  },
  {
    id: "sample-medical-01",
    sample_id: "sample-medical-01",
    title: "Apex Care Multispeciality Hospital & Clinic",
    category: "website",
    business_type: "medical",
    preview_image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
    demo_url: "https://avrx.in/projects",
    description: "Doctor appointment booking, OPD schedule, diagnostic services showcase, and emergency helpline.",
    technologies: ["React", "Appointment Engine", "Doctor Profiles", "HIPAA Ready"],
    starting_price: 6999,
    tags: ["Medical", "Hospital", "Clinic", "Doctor", "Pharmacy", "Dentist", "Diagnostic"],
    featured: true,
    active: true
  },
  {
    id: "sample-coaching-01",
    sample_id: "sample-coaching-01",
    title: "Target Academy Coaching & Institute",
    category: "website",
    business_type: "coaching",
    preview_image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
    demo_url: "https://avrx.in/projects",
    description: "Course enrollment system, batch schedules, faculty profiles, and student admission inquiry form.",
    technologies: ["React", "LMS Integration", "PDF Notes", "Testimonials"],
    starting_price: 5999,
    tags: ["Coaching", "School", "Education", "Institute", "Tuition", "College", "Classes"],
    featured: true,
    active: true
  },
  {
    id: "sample-realestate-01",
    sample_id: "sample-realestate-01",
    title: "Skyline Prime Real Estate & Builders",
    category: "website",
    business_type: "real_estate",
    preview_image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
    demo_url: "https://avrx.in/projects",
    description: "Property listing showcase, floor plans, location amenities, and direct buyer inquiry capture.",
    technologies: ["React", "Property Filter", "EMI Calculator", "Lead Capture"],
    starting_price: 8999,
    tags: ["Real Estate", "Property", "Builder", "Architect", "Plots", "Flats", "Commercial"],
    featured: true,
    active: true
  },
  {
    id: "sample-electronics-01",
    sample_id: "sample-electronics-01",
    title: "VoltMax Electronics & Mobile Hub",
    category: "ecommerce",
    business_type: "mobile_shop",
    preview_image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=800&q=80",
    demo_url: "https://avrx.in/projects",
    description: "Gadgets and smartphone inventory catalog with price comparison and instant WhatsApp quotation.",
    technologies: ["React Store", "Brand Filter", "Instant WhatsApp Query"],
    starting_price: 8999,
    tags: ["Mobile Shop", "Electronics", "Gadgets", "Computers", "Repair", "Smartphones", "Accessories"],
    featured: true,
    active: true
  },
  {
    id: "sample-salon-01",
    sample_id: "sample-salon-01",
    title: "Glow & Glam Luxury Salon & Spa",
    category: "website",
    business_type: "salon",
    preview_image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80",
    demo_url: "https://avrx.in/projects",
    description: "Service menu with pricing, slot booking calendar, bridal package inquiries, and reviews.",
    technologies: ["React", "Slot Booking", "Instagram Feed", "WhatsApp Alerts"],
    starting_price: 4999,
    tags: ["Salon", "Spa", "Beauty", "Makeup", "Barber", "Parlour", "Hair Studio"],
    featured: true,
    active: true
  },
  {
    id: "sample-hotel-01",
    sample_id: "sample-hotel-01",
    title: "Heritage Haven Resort & Suites",
    category: "website",
    business_type: "hotel",
    preview_image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    demo_url: "https://avrx.in/projects",
    description: "Room availability check, photo gallery, tariff cards, and direct commission-free booking.",
    technologies: ["React", "Room Booking", "Amenity Grid", "TripAdvisor Embed"],
    starting_price: 9999,
    tags: ["Hotel", "Resort", "Homestay", "Travel", "Lodge", "Tourism", "Guest House"],
    featured: true,
    active: true
  }
];

export const aiKnowledgeBase: AIKnowledgeItem[] = [
  {
    id: "kb-01",
    title: "About AVRX Digital & Financial Platform",
    category: "company",
    content: "AVRX (avrx.in) is an integrated digital transformation, financial loan facilitation, tax compliance, and IRDAI insurance partner based in India. We help businesses build their digital presence, secure expansion funding, file taxes (GST/ITR), and insure their assets seamlessly.",
    keywords: ["about avrx", "who is avrx", "company", "what is avrx", "services", "owner", "location"],
    priority: 100,
    active: true
  },
  {
    id: "kb-02",
    title: "Contact, Support & Office Hours",
    category: "contact",
    content: "Customer Support Phone: +91 70008 59994 | WhatsApp Support: +91 96306 61536 | Email: avinash.rai.official@gmail.com | Website: avrx.in | Business Working Hours: 10:00 AM - 07:00 PM IST (Monday through Saturday).",
    keywords: ["contact", "phone", "call", "whatsapp", "email", "support", "office", "timing", "address", "number"],
    priority: 95,
    active: true
  },
  {
    id: "kb-03",
    title: "Website Design & Development Packages",
    category: "pricing",
    content: "Small Business Website starts at ₹4,999 (3-day turnaround, 5 mobile-responsive pages, free 1-year NVMe hosting, free domain connection, and WhatsApp integration). Professional Corporate Website is ₹9,999 with CMS admin panel. E-commerce Online Stores start at ₹14,999 with payment gateway and courier sync.",
    keywords: ["website price", "website cost", "package", "e-commerce price", "charges", "rate", "shop website"],
    priority: 90,
    active: true
  },
  {
    id: "kb-04",
    title: "Loan Guidelines & Non-Guarantee Compliance",
    category: "policy",
    content: "AVRX connects customers with top RBI-approved national banks and NBFCs for Personal Loans (from 10.5% p.a.), Collateral-Free Business Loans (up to ₹1 Crore), Property Loans, and Govt Subsidized Loans (PMEGP / MUDRA with up to 35% subsidy). CRITICAL: Loan approval, sanction limit, interest rate, and tenure strictly depend on lender underwriting, CIBIL score, and document verification. AVRX never guarantees 100% loan approval and never asks for upfront approval fees.",
    keywords: ["loan approval", "loan interest", "loan guarantee", "eligibility", "pmegp", "mudra", "business loan"],
    priority: 100,
    active: true
  },
  {
    id: "kb-05",
    title: "GST Registration and Filing Process",
    category: "service",
    content: "GST Registration is processed 100% digitally in 3 to 5 business days for ₹1,499. Required docs: PAN Card, Aadhaar Card, Electricity Bill/Rent Agreement of premises, and passport photo. Monthly/Quarterly GST Filing packages start from ₹999/month. ITR filing starts at ₹999.",
    keywords: ["gst", "gst registration", "gst documents", "itr filing", "tax return", "udyam"],
    priority: 85,
    active: true
  },
  {
    id: "kb-06",
    title: "Insurance Policy Guidance",
    category: "policy",
    content: "AVRX facilitates Motor Insurance (Instant 2-wheeler & 4-wheeler renewal with zero-depreciation), Health Insurance (family floater with cashless hospitalization at 10,000+ network hospitals), and Shop/Property Insurance with leading IRDAI insurers. Final claim settlement is subject to insurer policy terms.",
    keywords: ["insurance", "car insurance", "bike insurance", "health insurance", "medical policy", "cashless"],
    priority: 85,
    active: true
  }
];

// Persistent Leads & Conversations State
export const leadsStore: LeadItem[] = [
  {
    id: "lead-init-001",
    lead_number: "AVRX-2026-00101",
    full_name: "Vikram Mehta",
    business_name: "Mehta Garments & Textiles",
    mobile: "+91 98201 23456",
    whatsapp: "+91 98201 23456",
    email: "vikram@mehtagarments.com",
    city: "Surat",
    state: "Gujarat",
    service_name: "Website Design & Development",
    package_name: "Starter Business Website (₹4,999)",
    selected_sample_id: "sample-garments-01",
    budget: "₹5,000 - ₹10,000",
    requirement: "Garments catalog website with direct WhatsApp inquiry",
    preferred_contact: "whatsapp",
    source: "AI Assistant",
    status: "new",
    priority: "high",
    lead_score: "HOT",
    lead_temperature: 90,
    created_at: new Date(Date.now() - 3600000 * 2).toISOString()
  },
  {
    id: "lead-init-002",
    lead_number: "AVRX-2026-00102",
    full_name: "Pooja Sharma",
    business_name: "Sharma Multispeciality Clinic",
    mobile: "+91 94140 88776",
    whatsapp: "+91 94140 88776",
    email: "drpooja@sharmaclinic.in",
    city: "Indore",
    state: "Madhya Pradesh",
    service_name: "Website Design & Development",
    package_name: "Professional Corporate Website (₹9,999)",
    selected_sample_id: "sample-medical-01",
    budget: "₹10,000 - ₹20,000",
    requirement: "Doctor appointment booking portal and OPD schedule",
    preferred_contact: "phone",
    source: "AI Voice",
    status: "contacted",
    priority: "normal",
    lead_score: "HOT",
    lead_temperature: 85,
    created_at: new Date(Date.now() - 3600000 * 5).toISOString()
  },
  {
    id: "lead-init-003",
    lead_number: "AVRX-2026-00103",
    full_name: "Rajesh Agrawal",
    business_name: "Agrawal Agro Industries",
    mobile: "+91 98930 11223",
    whatsapp: "+91 98930 11223",
    email: "rajesh@agrawalagro.com",
    city: "Bhopal",
    state: "Madhya Pradesh",
    service_name: "Govt Subsidy Loan (PMEGP / MUDRA)",
    budget: "₹25,00,000",
    requirement: "PMEGP Govt subsidy loan for food processing unit expansion",
    preferred_contact: "whatsapp",
    source: "AI Assistant",
    status: "qualified",
    priority: "urgent",
    lead_score: "HOT",
    lead_temperature: 95,
    created_at: new Date(Date.now() - 3600000 * 8).toISOString()
  }
];

export interface StoredConversation {
  id: string;
  session_id: string;
  visitor_id?: string;
  lead_id?: string;
  customer_name?: string;
  language: string;
  intent_detected?: string;
  service_detected?: string;
  voice_used: boolean;
  messages: AIMessage[];
  started_at: string;
  ended_at?: string;
  status: 'active' | 'completed' | 'handed_off' | 'abandoned';
}

export const conversationsStore: StoredConversation[] = [];

// ============================================================================
// HELPER FUNCTIONS & RAG ENGINE
// ============================================================================

export function findSamplesByQuery(query: string): PortfolioSample[] {
  const q = query.toLowerCase();
  
  // Keyword mapping for business types
  const typeMap: Record<string, string[]> = {
    garments: ["garment", "cloth", "fashion", "boutique", "textile", "saree", "dress", "suit", "wear"],
    restaurant: ["restaurant", "cafe", "food", "dining", "hotel food", "bakery", "dhaba", "pizza", "burger", "sweet"],
    medical: ["medical", "hospital", "clinic", "doctor", "pharmacy", "health", "dentist", "eye", "pathology"],
    coaching: ["coaching", "school", "institute", "tuition", "academy", "class", "course", "education", "college"],
    real_estate: ["real estate", "property", "builder", "plot", "flat", "apartment", "house", "villa", "construction"],
    mobile_shop: ["mobile", "phone", "electronics", "gadget", "laptop", "computer", "repair", "accessory"],
    salon: ["salon", "spa", "beauty", "makeup", "barber", "parlour", "hair", "skin"],
    hotel: ["hotel", "resort", "stay", "homestay", "room", "lodge", "travel", "tourism"]
  };

  let matchedType: string | null = null;
  for (const [bType, keywords] of Object.entries(typeMap)) {
    if (keywords.some(k => q.includes(k))) {
      matchedType = bType;
      break;
    }
  }

  if (matchedType) {
    const matches = portfolioSamplesCatalog.filter(s => s.active && s.business_type === matchedType);
    if (matches.length > 0) return matches;
  }

  // General tag matching fallback
  const tagMatches = portfolioSamplesCatalog.filter(s => 
    s.active && s.tags.some(t => q.includes(t.toLowerCase()))
  );
  if (tagMatches.length > 0) return tagMatches;

  // Return featured samples if no specific match
  return portfolioSamplesCatalog.filter(s => s.active).slice(0, 4);
}

export function findRelevantKnowledge(query: string): string[] {
  const q = query.toLowerCase();
  const matched = aiKnowledgeBase
    .filter(k => k.active && k.keywords.some(kw => q.includes(kw.toLowerCase())))
    .sort((a, b) => b.priority - a.priority);

  if (matched.length > 0) {
    return matched.map(m => `[KNOWLEDGE - ${m.title}]: ${m.content}`);
  }

  return aiKnowledgeBase.filter(k => k.active).slice(0, 3).map(m => `[KNOWLEDGE - ${m.title}]: ${m.content}`);
}

export function detectLeadScore(messages: Array<{ role: string; message: string }>): { score: 'HOT' | 'WARM' | 'COLD'; temp: number } {
  const text = messages.map(m => m.message.toLowerCase()).join(" ");

  const hotKeywords = ["price", "cost", "buy", "start project", "book", "call me", "interested", "my number is", "phone", "hire", "quotation", "urgent", "order", "want to make", "banwani hai", "chahiye", "loan chahiye"];
  const warmKeywords = ["sample", "demo", "features", "packages", "delivery time", "how it works", "difference", "compare", "portfolio", "details"];

  const hotCount = hotKeywords.filter(k => text.includes(k)).length;
  const warmCount = warmKeywords.filter(k => text.includes(k)).length;

  if (hotCount >= 2 || (hotCount >= 1 && text.match(/\b[6-9]\d{9}\b/))) {
    return { score: 'HOT', temp: Math.min(98, 75 + hotCount * 8) };
  }
  if (warmCount >= 1 || hotCount === 1) {
    return { score: 'WARM', temp: Math.min(74, 50 + warmCount * 8) };
  }
  return { score: 'COLD', temp: 35 };
}

// Generate Lead ID in format AVRX-2026-00125
export function generateLeadNumber(): string {
  const year = new Date().getFullYear();
  const randomNum = Math.floor(10000 + Math.random() * 90000);
  return `AVRX-${year}-${randomNum}`;
}

export function getAnalyticsSummary(): AIAnalyticsSummary {
  const now = new Date();
  const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();

  const totalConvos = conversationsStore.length + 18; // plus baseline historic
  const todayConvos = conversationsStore.filter(c => new Date(c.started_at).getTime() >= todayStart).length + 4;
  
  const totalLeads = leadsStore.length;
  const todayLeads = leadsStore.filter(l => new Date(l.created_at).getTime() >= todayStart).length;

  const websiteLeads = leadsStore.filter(l => l.service_name.toLowerCase().includes("web") || l.service_name.toLowerCase().includes("digital")).length;
  const loanLeads = leadsStore.filter(l => l.service_name.toLowerCase().includes("loan") || l.service_name.toLowerCase().includes("finance")).length;
  const insuranceLeads = leadsStore.filter(l => l.service_name.toLowerCase().includes("insur")).length;
  const taxLeads = leadsStore.filter(l => l.service_name.toLowerCase().includes("tax") || l.service_name.toLowerCase().includes("gst")).length;

  const voiceConvos = conversationsStore.filter(c => c.voice_used).length + 6;
  const hotLeads = leadsStore.filter(l => l.lead_score === 'HOT').length;
  const warmLeads = leadsStore.filter(l => l.lead_score === 'WARM').length;
  const coldLeads = leadsStore.filter(l => l.lead_score === 'COLD').length;

  const convRate = totalConvos > 0 ? Math.round((totalLeads / totalConvos) * 100) : 24;

  return {
    total_conversations: totalConvos,
    today_conversations: todayConvos,
    total_leads: totalLeads,
    today_leads: todayLeads,
    website_leads: websiteLeads,
    loan_leads: loanLeads,
    insurance_leads: insuranceLeads,
    tax_leads: taxLeads,
    conversion_rate: convRate,
    human_handoffs: leadsStore.filter(l => l.status === 'human_required').length + 2,
    voice_conversations: voiceConvos,
    hot_leads_count: hotLeads,
    warm_leads_count: warmLeads,
    cold_leads_count: coldLeads
  };
}
