import React, { useState, useMemo } from 'react';
import { MagneticCard } from '../components/common/MagneticCard';
import { DIGITAL_SERVICES } from '../data/servicesData';
import { ServiceItem } from '../types';
import { SEO } from '../components/common/SEO';
import { PartnersSlider } from '../components/common/PartnersSlider';
import { renderServiceIcon } from '../utils/iconMap';
import { launchSoundEngine } from '../utils/launchSoundEngine';
import { 
  Layout, 
  Smartphone, 
  Megaphone, 
  TrendingUp, 
  Layers, 
  Check, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  PhoneCall, 
  ChevronDown, 
  ChevronRight,
  ExternalLink,
  Zap,
  Globe,
  Database,
  Cpu,
  Star,
  CheckCircle2,
  Lock,
  ShoppingBag,
  Sliders,
  DollarSign,
  Copy,
  CheckCheck,
  RefreshCw,
  BarChart3,
  Search,
  Bot,
  Lightbulb,
  Rocket,
  Code2,
  Server,
  Award,
  Terminal,
  Activity,
  Flame,
  Calculator
} from 'lucide-react';

interface DigitalSolutionsPageProps {
  onNavigate: (page: string, slug?: string) => void;
}

export const DigitalSolutionsPage: React.FC<DigitalSolutionsPageProps> = ({ onNavigate }) => {
  // Filter out any web-application-development items as requested by user
  const sanitizedDigitalServices = useMemo(() => {
    return DIGITAL_SERVICES.filter(s => s.id !== 'web-application-development');
  }, []);

  const [selectedService, setSelectedService] = useState<ServiceItem | null>(sanitizedDigitalServices[0] || null);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [faqSearch, setFaqSearch] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // --- 1. AI TOOLS SUITE STATE ---
  const [activeAiTool, setActiveAiTool] = useState<'scope' | 'stack' | 'roi' | 'adgen'>('scope');
  const [isGeneratingAi, setIsGeneratingAi] = useState(false);
  const [aiScopeType, setAiScopeType] = useState('website');
  const [aiIndustry, setAiIndustry] = useState('E-Commerce & Retail');
  const [aiBudget, setAiBudget] = useState('₹15,000 - ₹35,000');
  const [aiScopeOutput, setAiScopeOutput] = useState<any>(null);

  // Tool 2: Tech Stack Advisor State
  const [stackTraffic, setStackTraffic] = useState('50,000 visitors/mo');
  const [stackNiche, setStackNiche] = useState('Healthcare & Clinic Booking');
  const [stackOutput, setStackOutput] = useState<any>(null);

  // Tool 3: Revenue ROI Scaler State
  const [roiVisitors, setRoiVisitors] = useState<number>(10000);
  const [roiCurrentCvr, setRoiCurrentCvr] = useState<number>(1.2);
  const [roiAov, setRoiAov] = useState<number>(1800);

  // Tool 4: AI High-CTR Ad Copy State
  const [adProduct, setAdProduct] = useState('Handcrafted Organic Tea');
  const [adAudience, setAdAudience] = useState('Health-conscious professionals (25-45)');
  const [adOutput, setAdOutput] = useState<any>(null);

  // --- 2. DYNAMIC PROJECT ESTIMATOR STATE ---
  const [calcPlatform, setCalcPlatform] = useState<'static' | 'custom-web' | 'ecommerce' | 'android-ios' | 'web-portal' | 'seo-marketing'>('ecommerce');
  const [calcTier, setCalcTier] = useState<'starter' | 'growth' | 'enterprise'>('growth');
  const [calcAddons, setCalcAddons] = useState<string[]>(['payment', 'whatsapp', 'seo']);

  // Core 6 Colorful Service Pillars (Excluding Web Application Development as strictly requested)
  const digitalPillars = [
    {
      id: 'website-design',
      slug: 'website-design',
      title: 'Website Design & Development',
      badge: 'Bestseller',
      badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-400/40',
      accentGradient: 'from-cyan-500 via-blue-500 to-indigo-600',
      glowColor: 'cyan' as const,
      borderGlow: 'hover:border-cyan-400/60 hover:shadow-[0_0_35px_rgba(6,182,212,0.25)]',
      iconBg: 'bg-gradient-to-br from-cyan-500/20 to-blue-600/30 text-cyan-300 border-cyan-500/40',
      icon: Layout,
      bgImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      tagline: 'High-speed, conversion-focused websites engineered for local businesses, corporate brands, and high-growth ventures.',
      highlights: [
        'Static Onepage Websites (₹4,999)',
        'Business & Corporate Multi-page Portals',
        'Sub-second (<0.8s) Core Web Vitals Performance',
        'Lead Capture Contact Forms with Instant WhatsApp/Email',
        '100% Fluid Mobile & Retina Display Responsive UI',
        'Free SSL Certificate & Zero-CMS Bloatware'
      ],
      price: 'Starting from ₹4,999',
      priceColor: 'text-cyan-300',
      buttonBg: 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 hover:from-cyan-400 hover:to-blue-500 shadow-[0_0_20px_rgba(6,182,212,0.4)]'
    },
    {
      id: 'e-commerce-solutions',
      slug: 'e-commerce-solutions',
      title: 'E-Commerce Solutions',
      badge: 'High Conversion',
      badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/40',
      accentGradient: 'from-emerald-500 via-teal-500 to-cyan-600',
      glowColor: 'emerald' as const,
      borderGlow: 'hover:border-emerald-400/60 hover:shadow-[0_0_35px_rgba(16,185,129,0.25)]',
      iconBg: 'bg-gradient-to-br from-emerald-500/20 to-teal-600/30 text-emerald-300 border-emerald-500/40',
      icon: ShoppingBag,
      bgImage: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1200&q=80',
      tagline: 'Full-featured online store engines with dynamic product catalogs, instant Razorpay/UPI checkout, and automated shipping.',
      highlights: [
        'Dynamic Product Catalogues with Variant Selectors',
        'Instant Razorpay, UPI QR, Cards & NetBanking Checkout',
        'Automated Shiprocket Logistics & Real-Time Tracking',
        'Abandoned Cart Recovery via WhatsApp & Email',
        'Coupons, Tiered Discounts & Flash Sale Engine',
        'Live Revenue Dashboard & Real-Time Stock Alerts'
      ],
      price: 'Starting from ₹14,999',
      priceColor: 'text-emerald-300',
      buttonBg: 'bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 hover:from-emerald-400 hover:to-teal-500 shadow-[0_0_20px_rgba(16,185,129,0.4)]'
    },
    {
      id: 'app-development',
      slug: 'android-app-development',
      title: 'App Development (Android & iOS)',
      badge: 'High Impact',
      badgeColor: 'bg-violet-500/20 text-violet-300 border-violet-400/40',
      accentGradient: 'from-violet-500 via-purple-500 to-indigo-600',
      glowColor: 'purple' as const,
      borderGlow: 'hover:border-violet-400/60 hover:shadow-[0_0_35px_rgba(139,92,246,0.25)]',
      iconBg: 'bg-gradient-to-br from-violet-500/20 to-purple-600/30 text-violet-300 border-violet-500/40',
      icon: Smartphone,
      bgImage: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80',
      tagline: 'Native and cross-platform mobile apps engineered for fluid 120 FPS performance, biometrics, and Play Store / App Store publishing.',
      highlights: [
        'Native Kotlin Android & Swift iOS Applications',
        'Flutter & React Native Cross-Platform Excellence',
        'Live Firebase / PostgreSQL Cloud Sync & Offline Mode',
        'Rich Push Notifications & Geofencing Engagement',
        'Biometric Auth, Camera & In-App UPI Gateways',
        'Dedicated Web Super-Admin Control Panel'
      ],
      price: 'Starting from ₹24,999',
      priceColor: 'text-violet-300',
      buttonBg: 'bg-gradient-to-r from-violet-500 to-purple-600 text-white hover:from-violet-400 hover:to-purple-500 shadow-[0_0_20px_rgba(139,92,246,0.4)]'
    },
    {
      id: 'web-portal-development',
      slug: 'web-portal-development',
      title: 'Web Portal Development',
      badge: 'Enterprise RBAC',
      badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-400/40',
      accentGradient: 'from-indigo-500 via-blue-600 to-cyan-600',
      glowColor: 'blue' as const,
      borderGlow: 'hover:border-indigo-400/60 hover:shadow-[0_0_35px_rgba(99,102,241,0.25)]',
      iconBg: 'bg-gradient-to-br from-indigo-500/20 to-blue-600/30 text-indigo-300 border-indigo-500/40',
      icon: Layers,
      bgImage: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80',
      tagline: 'Enterprise-scale portals for customer self-service, employee HRMS, distributor networks, and multi-tenant systems.',
      highlights: [
        'Customer & Client Self-Service Portals',
        'Vendor, Supplier & Distributor B2B Ecosystems',
        'Employee Attendance, Payroll & HRMS Systems',
        'Role-Based Access Control (RBAC) & Tiered Permissions',
        'Real-Time Analytical Dashboards with Excel/PDF Export',
        'High-Security 256-Bit SSL Data Encryption'
      ],
      price: 'Starting from ₹34,999',
      priceColor: 'text-indigo-300',
      buttonBg: 'bg-gradient-to-r from-indigo-500 to-blue-600 text-white hover:from-indigo-400 hover:to-blue-500 shadow-[0_0_20px_rgba(99,102,241,0.4)]'
    },
    {
      id: 'digital-marketing',
      slug: 'digital-marketing',
      title: 'Digital Marketing & Growth',
      badge: '5.4x ROAS',
      badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-400/40',
      accentGradient: 'from-amber-500 via-orange-500 to-rose-600',
      glowColor: 'gold' as const,
      borderGlow: 'hover:border-amber-400/60 hover:shadow-[0_0_35px_rgba(245,158,11,0.25)]',
      iconBg: 'bg-gradient-to-br from-amber-500/20 to-orange-600/30 text-amber-300 border-amber-500/40',
      icon: Megaphone,
      bgImage: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80',
      tagline: 'High-intent paid advertising and performance funnels engineered to convert clicks into high-ticket paying inquiries.',
      highlights: [
        'Meta (Facebook & Instagram) Advantage+ Ads',
        'Google High-Intent Search PPC & Performance Max (PMax)',
        'Direct WhatsApp Business Click-to-Chat Funnels',
        'Creative Copywriting, High-CTR Hooks & Video Scripts',
        'Custom Conversion Tracking & Server-Side CAPI Setup',
        'Weekly Transparent Cost-Per-Lead (CPL) & ROAS Reports'
      ],
      price: 'Starting from ₹9,999/mo',
      priceColor: 'text-amber-300',
      buttonBg: 'bg-gradient-to-r from-amber-500 to-orange-600 text-slate-950 hover:from-amber-400 hover:to-orange-500 shadow-[0_0_20px_rgba(245,158,11,0.4)]'
    },
    {
      id: 'seo-ranking',
      slug: 'seo-ranking',
      title: 'Search Engine Optimization (SEO)',
      badge: '#1 Google Rank',
      badgeColor: 'bg-rose-500/20 text-rose-300 border-rose-400/40',
      accentGradient: 'from-rose-500 via-pink-500 to-purple-600',
      glowColor: 'rose' as const,
      borderGlow: 'hover:border-rose-400/60 hover:shadow-[0_0_35px_rgba(244,63,94,0.25)]',
      iconBg: 'bg-gradient-to-br from-rose-500/20 to-pink-600/30 text-rose-300 border-rose-500/40',
      icon: TrendingUp,
      bgImage: 'https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?auto=format&fit=crop&w=800&q=80',
      tagline: 'Dominate Google search results for valuable commercial keywords to secure non-stop organic inbound customer flow.',
      highlights: [
        'Technical SEO Audits & Core Web Vitals 99/100 Tuning',
        'Local SEO & Google Business Profile (GBP) 3-Pack Rank',
        'On-Page Schema.org JSON-LD Structured Data',
        'High-Intent Keyword Discovery & Content Clustering',
        'Ethical White-Hat High-Authority (DA 50+) Backlinks',
        'Monthly Traffic, Rank Progress & Google Console Tracking'
      ],
      price: 'Starting from ₹14,999/mo',
      priceColor: 'text-rose-300',
      buttonBg: 'bg-gradient-to-r from-rose-500 to-pink-600 text-white hover:from-rose-400 hover:to-pink-500 shadow-[0_0_20px_rgba(244,63,94,0.4)]'
    }
  ];

  // Helper for copying text
  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    launchSoundEngine.playNotification();
    setTimeout(() => setCopiedId(null), 2500);
  };

  // Helper for AI Tool 1: Scope Generation
  const handleGenerateScope = () => {
    setIsGeneratingAi(true);
    launchSoundEngine.playLaserFire();
    setTimeout(() => {
      let result = {
        title: `${aiIndustry} — ${aiScopeType.toUpperCase()} Technical Blueprint`,
        recommendedTech: aiScopeType === 'app' ? 'React Native / Flutter + Node.js + Firebase' : aiScopeType === 'ecommerce' ? 'Next.js 15 + Tailwind + Supabase + Razorpay' : 'Vite React + TypeScript + Cloudflare Workers',
        timeline: aiScopeType === 'website' ? '3 to 5 Working Days' : aiScopeType === 'ecommerce' ? '7 to 12 Working Days' : aiScopeType === 'app' ? '14 to 21 Working Days' : '15 to 25 Working Days',
        securityLevel: 'Bank-Grade SSL + Automated Daily Cloud Backups + RBAC',
        milestones: [
          'Phase 1: Discovery, UX Wireframes & Information Architecture (25%)',
          'Phase 2: Frontend Coding, Animations & Responsive Mobile Ergonomics (50%)',
          'Phase 3: Database Integration, API Webhooks & Payment Gateway (75%)',
          'Phase 4: Security Hardening, Speed Optimization & Live Cloud Launch (100%)'
        ],
        keyFeatures: [
          'Sub-second page load speed with Core Web Vitals green score',
          'WhatsApp floating chat button & direct lead alert webhooks',
          'Responsive UI with dark/light themes and retina display rendering',
          'Built-in SEO schema and automated XML sitemap generation',
          'Admin dashboard with customer analytics and user management'
        ]
      };
      setAiScopeOutput(result);
      setIsGeneratingAi(false);
      launchSoundEngine.playSuccess();
    }, 1200);
  };

  // Helper for AI Tool 2: Stack Generation
  const handleGenerateStack = () => {
    setIsGeneratingAi(true);
    launchSoundEngine.playLaserFire();
    setTimeout(() => {
      setStackOutput({
        frontend: 'Next.js 15 (React) + Tailwind CSS + Framer Motion (Sub-0.5s cold starts)',
        mobile: 'Flutter 3.24 / React Native (120 FPS native Android & iOS codebases)',
        backend: 'Node.js Express / Go Microservices with Edge Routing',
        database: 'PostgreSQL on Supabase / Cloud SQL with Redis In-Memory Caching',
        hosting: 'Cloudflare Pages / AWS ECS Container Cluster with Global CDN',
        payments: 'Razorpay + Cashfree Multi-Gateway UPI Fallback',
        security: '2FA Auth, WAF Firewall, Rate-Limiting & Automatic Hourly Backups'
      });
      setIsGeneratingAi(false);
      launchSoundEngine.playSuccess();
    }, 1000);
  };

  // Helper for AI Tool 4: Ad Copy Generation
  const handleGenerateAdCopy = () => {
    setIsGeneratingAi(true);
    launchSoundEngine.playLaserFire();
    setTimeout(() => {
      setAdOutput({
        metaHook1: `🔥 Tired of generic ${adProduct}? Discover the 100% authentic difference trusted by 10,000+ happy customers.`,
        metaHook2: `⚡ Stop settling for slow results. Upgrade to ${adProduct} today and experience the transformation in under 48 hours!`,
        googleHeadlines: [
          `Best ${adProduct} in 2026 | Verified Quality & Fast Delivery`,
          `Get 20% Off ${adProduct} | Order Online with Free Shipping`,
          `Rated 4.9/5 by 2,500+ Customers | Try ${adProduct} Today`
        ],
        primaryBody: `Looking for top-tier ${adProduct}? Built specifically for ${adAudience}, our proven solution delivers unmatched quality, premium performance, and 100% satisfaction guarantee. Tap the link below to unlock exclusive introductory offers before stock runs out!`,
        cta: 'Shop Now / Claim Your Exclusive Offer ➔'
      });
      setIsGeneratingAi(false);
      launchSoundEngine.playSuccess();
    }, 1100);
  };

  // Dynamic Calculator Result Calculations
  const calculatedCostAndTimeline = useMemo(() => {
    let basePrice = 4999;
    let baseDays = 3;

    if (calcPlatform === 'custom-web') { basePrice = 9999; baseDays = 6; }
    else if (calcPlatform === 'ecommerce') { basePrice = 14999; baseDays = 8; }
    else if (calcPlatform === 'android-ios') { basePrice = 24999; baseDays = 14; }
    else if (calcPlatform === 'web-portal') { basePrice = 34999; baseDays = 18; }
    else if (calcPlatform === 'seo-marketing') { basePrice = 9999; baseDays = 30; }

    if (calcTier === 'growth') { basePrice = Math.round(basePrice * 1.5); baseDays += 3; }
    else if (calcTier === 'enterprise') { basePrice = Math.round(basePrice * 2.5); baseDays += 7; }

    // Addons
    let addonCost = 0;
    if (calcAddons.includes('payment')) addonCost += 3000;
    if (calcAddons.includes('whatsapp')) addonCost += 1500;
    if (calcAddons.includes('seo')) addonCost += 4000;
    if (calcAddons.includes('multilang')) addonCost += 3500;
    if (calcAddons.includes('express')) { addonCost += 5000; baseDays = Math.max(2, Math.round(baseDays * 0.6)); }

    const total = basePrice + addonCost;
    return { total, days: baseDays };
  }, [calcPlatform, calcTier, calcAddons]);

  // Dynamic ROI Calculations
  const roiResults = useMemo(() => {
    const currentOrders = Math.round((roiVisitors * roiCurrentCvr) / 100);
    const currentRevenue = currentOrders * roiAov;

    // Projected after AVRX optimization (+1.8% CVR boost average)
    const projectedCvr = Number((roiCurrentCvr + 1.8).toFixed(2));
    const projectedOrders = Math.round((roiVisitors * projectedCvr) / 100);
    const projectedRevenue = projectedOrders * roiAov;
    const extraMonthly = projectedRevenue - currentRevenue;
    const annualUpside = extraMonthly * 12;

    return {
      currentOrders,
      currentRevenue,
      projectedCvr,
      projectedOrders,
      projectedRevenue,
      extraMonthly,
      annualUpside
    };
  }, [roiVisitors, roiCurrentCvr, roiAov]);

  const whyChooseReasons = [
    {
      title: 'Bespoke Engineering (Zero Bloated CMS)',
      desc: 'We engineer blazing-fast modern web applications and mobile apps using clean TypeScript and modern frameworks—guaranteeing sub-second page loads.',
      icon: Zap,
      gradient: 'from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/30'
    },
    {
      title: 'Conversion-Centric UX Architecture',
      desc: 'Every layout, button placement, and visual hierarchy is mathematically designed to turn casual traffic into qualified paying customers.',
      icon: Flame,
      gradient: 'from-amber-500/20 to-orange-500/20 text-amber-400 border-amber-500/30'
    },
    {
      title: 'Full Intellectual Property Ownership',
      desc: 'You receive 100% complete source code ownership, database access, and documentation without vendor lock-ins or recurring licensing fees.',
      icon: Lock,
      gradient: 'from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30'
    },
    {
      title: 'Enterprise Security & SSL Architecture',
      desc: 'Built-in protection against cross-site scripting, SQL injections, and DDoS, backed by automated TLS SSL encryption and cloud backups.',
      icon: ShieldCheck,
      gradient: 'from-violet-500/20 to-purple-500/20 text-violet-400 border-violet-500/30'
    },
    {
      title: 'Unified Digital & Growth Ecosystem',
      desc: 'From initial domain registration to cloud hosting, mobile apps, digital marketing, and continuous SEO—all managed under one roof.',
      icon: Globe,
      gradient: 'from-blue-500/20 to-indigo-500/20 text-blue-400 border-blue-500/30'
    },
    {
      title: 'Dedicated Account Architect & 24/7 SLA',
      desc: 'Direct communication with seasoned software engineers and growth strategists, ensuring rapid turnaround and continuous technical support.',
      icon: Activity,
      gradient: 'from-rose-500/20 to-pink-500/20 text-rose-400 border-rose-500/30'
    }
  ];

  const digitalProcessSteps = [
    { number: '01', title: 'Consultation & Discovery', desc: 'We analyze your business model, target audience, competitors, and functional specifications.', color: 'text-cyan-400 border-cyan-500/40 bg-cyan-500/10' },
    { number: '02', title: 'Architecture & UI/UX', desc: 'Crafting responsive wireframes, design systems, and database blueprints for approval.', color: 'text-blue-400 border-blue-500/40 bg-blue-500/10' },
    { number: '03', title: 'Engineering & Coding', desc: 'Writing clean, modular code with frontend animations, robust APIs, and secure authentication.', color: 'text-violet-400 border-violet-500/40 bg-violet-500/10' },
    { number: '04', title: 'Testing & Optimization', desc: 'Rigorous cross-device quality assurance, speed benchmarking, and security scanning.', color: 'text-emerald-400 border-emerald-500/40 bg-emerald-500/10' },
    { number: '05', title: 'Deployment & Launch', desc: 'Zero-downtime deployment to high-speed cloud servers and live Play Store/App Store submission.', color: 'text-amber-400 border-amber-500/40 bg-amber-500/10' },
    { number: '06', title: 'Continuous Growth & SLA', desc: 'Ongoing technical maintenance, analytics tracking, and performance marketing expansion.', color: 'text-rose-400 border-rose-500/40 bg-rose-500/10' }
  ];

  const digitalFaqs = [
    {
      q: 'How long does it take to develop a custom business website, e-commerce store, or mobile app?',
      a: 'Standard static onepage websites are delivered within 48 to 72 hours. Dynamic corporate websites and e-commerce stores take 5 to 10 working days. Custom mobile apps and multi-tier enterprise web portals take 14 to 25 working days depending on custom API and database scope.',
      category: 'Delivery'
    },
    {
      q: 'What is included in the ₹4,999 Static Onepage website package?',
      a: 'The ₹4,999 package includes a modern single-page responsive website, Hero section, About Us, Services/Products showcase, Customer Testimonials, Contact/Lead Form with instant email alerts, direct floating WhatsApp button, Google Maps pin, free SSL certificate, and sub-second loading speed.',
      category: 'Pricing'
    },
    {
      q: 'Can you redesign our existing outdated website without losing our Google rankings?',
      a: 'Yes, 100%. We execute a comprehensive 301 redirect mapping audit and content preservation strategy. This safeguards all your existing Google organic rankings while dramatically modernizing your design, Core Web Vitals speed score, and mobile conversion rate.',
      category: 'SEO & Migration'
    },
    {
      q: 'Do I get 100% source code ownership and full database access?',
      a: 'Yes, absolutely. Upon project completion and final handover, all intellectual property, source code repositories, domain access, cloud server logins, and database credentials belong fully to you with zero vendor lock-in or recurring software penalties.',
      category: 'Ownership'
    },
    {
      q: 'Which payment gateways and logistics partners can you integrate for e-commerce?',
      a: 'We seamlessly integrate Razorpay, Cashfree, Stripe, PayU, PhonePe, Paytm, and direct UPI QR codes. For logistics, we integrate automated Shiprocket, Delhivery, and Blue Dart APIs with real-time tracking webhooks and WhatsApp customer delivery notifications.',
      category: 'E-Commerce'
    },
    {
      q: 'Do you provide ongoing maintenance, security updates, and technical support after launch?',
      a: 'Yes. Every project includes complimentary post-launch warranty support. Additionally, AVRX offers proactive monthly maintenance plans covering 24/7 server monitoring, automated daily cloud backups, security patches, speed audits, and dedicated developer assistance.',
      category: 'Support'
    },
    {
      q: 'How do your Digital Marketing & Meta/Google Ad campaigns generate leads?',
      a: 'We design high-converting custom landing pages paired with targeted Meta (Facebook/Instagram) Advantage+ and Google High-Intent Search PPC ads. We handle copywriting, graphic creatives, pixel tracking, and A/B split testing to deliver lowest cost-per-lead (CPL).',
      category: 'Marketing'
    },
    {
      q: 'Can you help publish our mobile app to Google Play Store and Apple App Store?',
      a: 'Yes. We manage the entire store publishing pipeline, including developer console setup, signing keystores, app privacy policy compliance, screenshot assets generation, and Store Review guidelines approval.',
      category: 'App Development'
    }
  ];

  const filteredFaqs = useMemo(() => {
    if (!faqSearch.trim()) return digitalFaqs;
    const query = faqSearch.toLowerCase();
    return digitalFaqs.filter(f => f.q.toLowerCase().includes(query) || f.a.toLowerCase().includes(query) || f.category.toLowerCase().includes(query));
  }, [faqSearch, digitalFaqs]);

  return (
    <div className="min-h-screen bg-[#050811] text-white pt-24 pb-20 selection:bg-cyan-500 selection:text-slate-950 relative overflow-hidden">
      <SEO
        title="Digital Solutions & Engineering Hub | Website, E-Commerce, Mobile Apps, Portals & Growth | AVRX"
        description="Build, scale, and dominate online with AVRX. Explore bespoke website design from ₹4,999, e-commerce stores, Android/iOS mobile apps, enterprise portals, SEO and performance marketing."
      />

      {/* Floating Ambient Aura Glows (Rich, Multi-Colored Atmosphere) */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse" />
      <div className="absolute top-48 right-1/4 w-96 h-96 bg-purple-500/15 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute top-[800px] left-10 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute top-[1600px] right-10 w-[600px] h-[600px] bg-rose-500/10 rounded-full blur-[180px] pointer-events-none -z-10" />
      <div className="absolute top-[2600px] left-1/3 w-[550px] h-[550px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Main Container - Stretched Widescreen Layout */}
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="pt-4 pb-6 flex items-center gap-2 text-xs text-slate-400">
          <button 
            onClick={() => onNavigate('home')}
            className="hover:text-cyan-400 transition-colors"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-cyan-300 font-semibold">Digital Solutions</span>
        </nav>

        {/* 1. ANIMATED VIBRANT HERO SECTION */}
        <div className="text-center max-w-5xl mx-auto my-8 space-y-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-emerald-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-widest shadow-[0_0_25px_rgba(0,240,255,0.2)] backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-cyan-400 animate-spin" style={{ animationDuration: '6s' }} />
            <span className="bg-gradient-to-r from-cyan-300 via-purple-300 to-emerald-300 bg-clip-text text-transparent">
              NEXT-GEN DIGITAL ENGINEERING & GROWTH ECOSYSTEM
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.1]">
            Build. Scale. <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400">Supercharge.</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-lg leading-relaxed max-w-3xl mx-auto">
            AVRX engineers high-performance digital infrastructure for ambitious businesses, scaling brands, and startups. From bespoke websites and high-converting online stores to native mobile apps, enterprise web portals, and #1 Google SEO dominance.
          </p>

          {/* Quick Action Navigation Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
            <button
              onClick={() => {
                const el = document.getElementById('digital-pillars-grid');
                el?.scrollIntoView({ behavior: 'smooth' });
                launchSoundEngine.playHoverTone();
              }}
              className="px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-slate-950 font-black text-xs sm:text-sm shadow-[0_0_30px_rgba(0,240,255,0.35)] hover:scale-105 transition flex items-center gap-2 cursor-pointer"
            >
              <Zap className="w-4 h-4" />
              <span>Explore Digital Offerings</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                const el = document.getElementById('ai-tools-suite');
                el?.scrollIntoView({ behavior: 'smooth' });
                launchSoundEngine.playLaserFire();
              }}
              className="px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-900/60 to-indigo-900/60 hover:from-purple-800 hover:to-indigo-800 border border-purple-500/40 text-purple-200 font-bold text-xs sm:text-sm shadow-[0_0_20px_rgba(168,85,247,0.25)] hover:scale-105 transition flex items-center gap-2 cursor-pointer"
            >
              <Bot className="w-4 h-4 text-purple-400" />
              <span>Interactive AI Suite</span>
            </button>

            <button
              onClick={() => {
                const el = document.getElementById('project-cost-calculator');
                el?.scrollIntoView({ behavior: 'smooth' });
                launchSoundEngine.playClickBlip();
              }}
              className="px-6 py-3 rounded-2xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-slate-200 font-bold text-xs sm:text-sm transition flex items-center gap-2 cursor-pointer"
            >
              <Calculator className="w-4 h-4 text-emerald-400" />
              <span>Cost & Timeline Calculator</span>
            </button>
          </div>

          {/* Core Visual Capabilities Badges with Vibrant Glowing Dots */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-4">
            {[
              { label: 'Website Design (₹4,999)', color: 'bg-cyan-400', border: 'border-cyan-500/30 text-cyan-300' },
              { label: 'E-Commerce Stores', color: 'bg-emerald-400', border: 'border-emerald-500/30 text-emerald-300' },
              { label: 'Android & iOS Apps', color: 'bg-purple-400', border: 'border-purple-500/30 text-purple-300' },
              { label: 'Enterprise Web Portals', color: 'bg-indigo-400', border: 'border-indigo-500/30 text-indigo-300' },
              { label: 'Digital Marketing (5.4x ROAS)', color: 'bg-amber-400', border: 'border-amber-500/30 text-amber-300' },
              { label: 'SEO #1 Google Rankings', color: 'bg-rose-400', border: 'border-rose-500/30 text-rose-300' }
            ].map((badge, idx) => (
              <span 
                key={idx}
                className={`px-3.5 py-1.5 rounded-xl bg-slate-900/90 border ${badge.border} text-xs font-mono font-medium flex items-center gap-2 shadow-sm`}
              >
                <div className={`w-2 h-2 rounded-full ${badge.color} animate-pulse`} />
                {badge.label}
              </span>
            ))}
          </div>
        </div>

        {/* 2. PARTNERS & ENTERPRISE TRUST STRIP */}
        <div className="my-10">
          <PartnersSlider 
            title="Engineered with Enterprise Cloud, AI & Payment Frameworks"
            badgeText="PRODUCTION INFRASTRUCTURE"
            description="Powering Indian and global businesses with scalable, high-availability architecture."
            variant="compact"
          />
        </div>

        {/* 3. MAIN DIGITAL SERVICES GRID (6 COLORFUL POWERHOUSE PILLARS) */}
        <div id="digital-pillars-grid" className="my-16 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
              <Layers className="w-4 h-4 text-blue-400" />
              <span>CORE DIGITAL OFFERINGS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Engineered for Real Business Growth
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto">
              Select any core digital solution to explore dedicated blueprints, live demo simulators, technical features, and pricing tiers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {digitalPillars.map(pillar => {
              const Icon = pillar.icon;
              return (
                <MagneticCard
                  key={pillar.id}
                  glowColor={pillar.glowColor}
                  enableTilt={true}
                  tiltStrength={3.5}
                  spotlightRadius={450}
                  spotlightOpacity={0.3}
                  soundOnHover={true}
                  className={`rounded-3xl bg-slate-900/85 border border-slate-800/90 ${pillar.borderGlow} p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group transition-all duration-300`}
                >
                  {/* Subtle Background Service Image with Luminosity */}
                  {pillar.bgImage && (
                    <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none z-0">
                      <img
                        src={pillar.bgImage}
                        alt={pillar.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover opacity-[0.06] group-hover:opacity-[0.14] transition-all duration-700 mix-blend-luminosity scale-105 group-hover:scale-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/40" />
                    </div>
                  )}

                  {/* Top Animated Color Accent Line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${pillar.accentGradient} opacity-40 group-hover:opacity-100 transition-opacity`} />

                  <div className="space-y-5 relative z-10">
                    {/* Icon & Badge Header */}
                    <div className="flex items-center justify-between">
                      <div className={`p-3.5 rounded-2xl ${pillar.iconBg} backdrop-blur-md border shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className={`px-3.5 py-1 rounded-full ${pillar.badgeColor} border text-[11px] font-mono font-bold shadow-sm`}>
                        {pillar.badge}
                      </span>
                    </div>

                    {/* Title & Short Description */}
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-cyan-300 transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                        {pillar.tagline}
                      </p>
                    </div>

                    {/* Highlights / Deliverables Checklist */}
                    <div className="space-y-2.5 pt-3 border-t border-slate-800/80">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center justify-between">
                        <span>Included Deliverables</span>
                        <span className="text-[10px] font-mono text-cyan-400">100% Tested</span>
                      </div>
                      {pillar.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price & Action Buttons */}
                  <div className="pt-6 mt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 relative z-10">
                    <div>
                      <div className="text-[10px] uppercase font-mono text-slate-400">Investment</div>
                      <div className={`text-base font-black ${pillar.priceColor} font-mono`}>{pillar.price}</div>
                    </div>

                    <button
                      onClick={() => {
                        launchSoundEngine.playClickBlip();
                        onNavigate('service-detail', pillar.slug);
                      }}
                      className={`w-full sm:w-auto px-5 py-2.5 rounded-xl ${pillar.buttonBg} font-black text-xs transition flex items-center justify-center gap-2 cursor-pointer`}
                    >
                      <span>Explore Blueprint</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </MagneticCard>
              );
            })}
          </div>
        </div>

        {/* 4. ⭐ INTERACTIVE AI DIGITAL TOOLS SUITE (COLORFUL & HIGHLY ENGAGING) */}
        <div id="ai-tools-suite" className="my-20 rounded-3xl bg-gradient-to-br from-slate-950 via-[#070b18] to-slate-950 border border-purple-500/40 p-6 sm:p-10 shadow-[0_0_60px_rgba(168,85,247,0.15)] relative overflow-hidden">
          
          {/* Background Ambient Glow */}
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-wider">
              <Bot className="w-4 h-4 text-purple-400 animate-pulse" />
              <span>AVRX AI DIGITAL SUITE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white">
              Instant AI Digital Intelligence Tools
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Leverage custom AI models to synthesize project architecture, choose tech stacks, forecast revenue growth, and generate high-CTR ad hooks.
            </p>
          </div>

          {/* AI Tool Navigation Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8 relative z-10">
            {[
              { id: 'scope', label: '1. AI Project Blueprint', icon: Code2, color: 'text-cyan-400' },
              { id: 'stack', label: '2. AI Stack & Cloud Advisor', icon: Server, color: 'text-emerald-400' },
              { id: 'roi', label: '3. AI Revenue ROI Scaler', icon: BarChart3, color: 'text-amber-400' },
              { id: 'adgen', label: '4. AI Ad Copy & Hook Ideator', icon: Megaphone, color: 'text-rose-400' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveAiTool(tab.id as any);
                  launchSoundEngine.playHoverTone();
                }}
                className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition flex items-center gap-2 border cursor-pointer ${
                  activeAiTool === tab.id
                    ? 'bg-purple-600 text-white border-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.4)]'
                    : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:text-white hover:bg-slate-800'
                }`}
              >
                <tab.icon className={`w-4 h-4 ${activeAiTool === tab.id ? 'text-white' : tab.color}`} />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* TOOL 1: AI Project Scope & Architecture Generator */}
          {activeAiTool === 'scope' && (
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2">
                    Project Type
                  </label>
                  <select
                    value={aiScopeType}
                    onChange={e => setAiScopeType(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option value="website">Static / Business Website</option>
                    <option value="ecommerce">E-Commerce & Online Store</option>
                    <option value="app">Android & iOS Mobile App</option>
                    <option value="portal">Enterprise Web Portal</option>
                    <option value="seo">SEO & Growth Marketing</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2">
                    Target Industry
                  </label>
                  <select
                    value={aiIndustry}
                    onChange={e => setAiIndustry(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option value="E-Commerce & Retail">E-Commerce & Retail</option>
                    <option value="Healthcare & Doctors">Healthcare & Clinics</option>
                    <option value="Real Estate & Builders">Real Estate & Properties</option>
                    <option value="FinTech & Loan Services">FinTech & Finance</option>
                    <option value="EdTech & Coaching">EdTech & Institutes</option>
                    <option value="Logistics & B2B Supply">Logistics & B2B</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2">
                    Budget Tier
                  </label>
                  <select
                    value={aiBudget}
                    onChange={e => setAiBudget(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option value="₹4,999 - ₹14,999">Starter (₹4,999 - ₹14,999)</option>
                    <option value="₹15,000 - ₹35,000">Growth (₹15,000 - ₹35,000)</option>
                    <option value="₹35,000+">Enterprise & Custom (₹35,000+)</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-center pt-2">
                <button
                  onClick={handleGenerateScope}
                  disabled={isGeneratingAi}
                  className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-500 text-slate-950 font-black text-xs sm:text-sm shadow-[0_0_25px_rgba(168,85,247,0.35)] hover:scale-105 transition flex items-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isGeneratingAi ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin text-slate-950" />
                      <span>Synthesizing Technical Architecture...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-slate-950" />
                      <span>Generate AI Project Blueprint</span>
                    </>
                  )}
                </button>
              </div>

              {aiScopeOutput && (
                <div className="mt-6 p-6 rounded-2xl bg-slate-950 border border-purple-500/40 space-y-4 animate-in fade-in">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="font-bold text-sm text-purple-300 flex items-center gap-2">
                      <Bot className="w-4 h-4 text-purple-400" />
                      <span>{aiScopeOutput.title}</span>
                    </div>
                    <button
                      onClick={() => handleCopy(JSON.stringify(aiScopeOutput, null, 2), 'scope-copy')}
                      className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs text-slate-300 flex items-center gap-1.5"
                    >
                      {copiedId === 'scope-copy' ? <CheckCheck className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-cyan-400" />}
                      <span>{copiedId === 'scope-copy' ? 'Copied' : 'Copy Blueprint'}</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                    <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                      <div className="text-slate-500 uppercase font-mono text-[10px]">Recommended Stack</div>
                      <div className="font-bold text-cyan-300 mt-0.5">{aiScopeOutput.recommendedTech}</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                      <div className="text-slate-500 uppercase font-mono text-[10px]">Estimated Timeline</div>
                      <div className="font-bold text-emerald-300 mt-0.5">{aiScopeOutput.timeline}</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                      <div className="text-slate-500 uppercase font-mono text-[10px]">Security Standard</div>
                      <div className="font-bold text-amber-300 mt-0.5">{aiScopeOutput.securityLevel}</div>
                    </div>
                  </div>

                  <div className="space-y-2 pt-2">
                    <div className="text-[11px] font-bold uppercase text-slate-400">Core Engineering Milestones:</div>
                    {aiScopeOutput.milestones.map((m: string, i: number) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                        <span>{m}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TOOL 2: AI Tech Stack & Cloud Advisor */}
          {activeAiTool === 'stack' && (
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2">
                    Industry & Workload
                  </label>
                  <input
                    type="text"
                    value={stackNiche}
                    onChange={e => setStackNiche(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-emerald-400"
                    placeholder="e.g. Healthcare & Clinic Booking"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2">
                    Monthly Traffic Expectation
                  </label>
                  <select
                    value={stackTraffic}
                    onChange={e => setStackTraffic(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-emerald-400"
                  >
                    <option value="10,000 visitors/mo">Up to 10,000 visitors/mo</option>
                    <option value="50,000 visitors/mo">10,000 to 50,000 visitors/mo</option>
                    <option value="250,000+ visitors/mo">250,000+ High Scale</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  onClick={handleGenerateStack}
                  disabled={isGeneratingAi}
                  className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 font-black text-xs sm:text-sm shadow-[0_0_25px_rgba(16,185,129,0.35)] hover:scale-105 transition flex items-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isGeneratingAi ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin text-slate-950" />
                      <span>Optimizing Architecture Matrix...</span>
                    </>
                  ) : (
                    <>
                      <Server className="w-4 h-4 text-slate-950" />
                      <span>Recommend Best Tech Stack</span>
                    </>
                  )}
                </button>
              </div>

              {stackOutput && (
                <div className="mt-6 p-6 rounded-2xl bg-slate-950 border border-emerald-500/40 space-y-3">
                  <div className="font-bold text-sm text-emerald-300 mb-3 flex items-center gap-2">
                    <Server className="w-4 h-4 text-emerald-400" />
                    <span>Recommended Architecture for {stackNiche} ({stackTraffic})</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                      <div className="text-slate-500 font-mono text-[10px]">FRONTEND FRAMEWORK</div>
                      <div className="text-slate-200 font-semibold mt-0.5">{stackOutput.frontend}</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                      <div className="text-slate-500 font-mono text-[10px]">MOBILE FRAMEWORK</div>
                      <div className="text-slate-200 font-semibold mt-0.5">{stackOutput.mobile}</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                      <div className="text-slate-500 font-mono text-[10px]">DATABASE ENGINE</div>
                      <div className="text-slate-200 font-semibold mt-0.5">{stackOutput.database}</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                      <div className="text-slate-500 font-mono text-[10px]">PAYMENTS & UPI</div>
                      <div className="text-slate-200 font-semibold mt-0.5">{stackOutput.payments}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TOOL 3: AI Revenue ROI Scaler */}
          {activeAiTool === 'roi' && (
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold text-slate-300">
                    <span>Monthly Website Visitors</span>
                    <span className="text-amber-400 font-mono">{roiVisitors.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min={1000}
                    max={100000}
                    step={1000}
                    value={roiVisitors}
                    onChange={e => setRoiVisitors(Number(e.target.value))}
                    className="w-full accent-amber-400 cursor-pointer"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold text-slate-300">
                    <span>Current Conversion Rate (%)</span>
                    <span className="text-amber-400 font-mono">{roiCurrentCvr}%</span>
                  </div>
                  <input
                    type="range"
                    min={0.5}
                    max={5.0}
                    step={0.1}
                    value={roiCurrentCvr}
                    onChange={e => setRoiCurrentCvr(Number(e.target.value))}
                    className="w-full accent-amber-400 cursor-pointer"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold text-slate-300">
                    <span>Average Order Value / Lead (₹)</span>
                    <span className="text-amber-400 font-mono">₹{roiAov.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min={500}
                    max={25000}
                    step={250}
                    value={roiAov}
                    onChange={e => setRoiAov(Number(e.target.value))}
                    className="w-full accent-amber-400 cursor-pointer"
                  />
                </div>
              </div>

              {/* Live Metric Comparison Card */}
              <div className="p-6 rounded-2xl bg-slate-950 border border-amber-500/40 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="text-[11px] font-mono uppercase text-slate-500">Current Monthly Revenue</div>
                  <div className="text-xl font-black text-slate-300 font-mono mt-1">₹{roiResults.currentRevenue.toLocaleString()}</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">{roiResults.currentOrders} orders/leads</div>
                </div>

                <div className="p-4 rounded-xl bg-gradient-to-b from-amber-500/10 to-orange-500/10 border border-amber-500/40 shadow-inner">
                  <div className="text-[11px] font-mono uppercase text-amber-300">Projected with AVRX ({roiResults.projectedCvr}%)</div>
                  <div className="text-2xl font-black text-amber-400 font-mono mt-1">₹{roiResults.projectedRevenue.toLocaleString()}</div>
                  <div className="text-[10px] text-amber-300/80 mt-0.5">{roiResults.projectedOrders} orders/leads (+150% boost)</div>
                </div>

                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
                  <div className="text-[11px] font-mono uppercase text-emerald-300">Net Annual Revenue Upside</div>
                  <div className="text-2xl font-black text-emerald-400 font-mono mt-1">+₹{roiResults.annualUpside.toLocaleString()}</div>
                  <div className="text-[10px] text-emerald-300/80 mt-0.5">Pure extra top-line value</div>
                </div>
              </div>
            </div>
          )}

          {/* TOOL 4: AI High-CTR Ad Copy & Hook Ideator */}
          {activeAiTool === 'adgen' && (
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2">
                    Product / Business Name
                  </label>
                  <input
                    type="text"
                    value={adProduct}
                    onChange={e => setAdProduct(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-rose-400"
                    placeholder="e.g. Handcrafted Organic Tea"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2">
                    Target Customer Persona
                  </label>
                  <input
                    type="text"
                    value={adAudience}
                    onChange={e => setAdAudience(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-rose-400"
                    placeholder="e.g. Health-conscious professionals (25-45)"
                  />
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  onClick={handleGenerateAdCopy}
                  disabled={isGeneratingAi}
                  className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 text-white font-black text-xs sm:text-sm shadow-[0_0_25px_rgba(244,63,94,0.35)] hover:scale-105 transition flex items-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isGeneratingAi ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin text-white" />
                      <span>Generating High-Converting Copy...</span>
                    </>
                  ) : (
                    <>
                      <Megaphone className="w-4 h-4 text-white" />
                      <span>Generate Viral Ad Hooks & Copy</span>
                    </>
                  )}
                </button>
              </div>

              {adOutput && (
                <div className="mt-6 p-6 rounded-2xl bg-slate-950 border border-rose-500/40 space-y-4">
                  <div className="font-bold text-sm text-rose-300 flex items-center gap-2">
                    <Megaphone className="w-4 h-4 text-rose-400" />
                    <span>High-CTR Ad Copy Hooks for {adProduct}</span>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                      <div className="text-rose-400 font-mono text-[10px] uppercase font-bold">Meta / Instagram Hook 1 (FOMO Angle)</div>
                      <div className="text-slate-200 mt-1 font-medium">{adOutput.metaHook1}</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                      <div className="text-rose-400 font-mono text-[10px] uppercase font-bold">Meta / Instagram Hook 2 (Speed Transformation)</div>
                      <div className="text-slate-200 mt-1 font-medium">{adOutput.metaHook2}</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                      <div className="text-cyan-400 font-mono text-[10px] uppercase font-bold">Google Search Ad Headlines</div>
                      <ul className="list-disc list-inside text-slate-200 mt-1 space-y-1">
                        {adOutput.googleHeadlines.map((h: string, i: number) => (
                          <li key={i}>{h}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

        </div>

        {/* 5. 🎮 DYNAMIC DIGITAL PROJECT COST & TIMELINE CALCULATOR */}
        <div id="project-cost-calculator" className="my-20 rounded-3xl bg-gradient-to-br from-[#060c1d] via-[#040815] to-[#02050e] border border-cyan-500/40 p-6 sm:p-10 shadow-[0_20px_60px_rgba(0,240,255,0.12)] relative overflow-hidden">
          
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase">
              <Sliders className="w-4 h-4 text-cyan-400" />
              <span>TRANSPARENT PRICING MATRIX</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-black text-white">
              Instant Project Cost & Delivery Timeline Estimator
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Customize your requirements below to calculate an upfront estimate with zero hidden surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Controls (Left 8 Cols) */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Step 1: Solution Platform */}
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                  <span>1. Choose Solution Platform</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {[
                    { id: 'static', label: 'Static Website', price: '₹4,999' },
                    { id: 'custom-web', label: 'Corporate Website', price: '₹9,999' },
                    { id: 'ecommerce', label: 'E-Commerce Store', price: '₹14,999' },
                    { id: 'android-ios', label: 'Mobile App (Android/iOS)', price: '₹24,999' },
                    { id: 'web-portal', label: 'Web Portal (RBAC)', price: '₹34,999' },
                    { id: 'seo-marketing', label: 'SEO & Ads Growth', price: '₹9,999/mo' }
                  ].map(item => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setCalcPlatform(item.id as any);
                        launchSoundEngine.playHoverTone();
                      }}
                      className={`p-3.5 rounded-xl border text-left transition flex flex-col justify-between cursor-pointer ${
                        calcPlatform === item.id
                          ? 'bg-cyan-500/20 border-cyan-400 text-white shadow-[0_0_20px_rgba(6,182,212,0.3)] font-bold'
                          : 'bg-slate-950/80 border-slate-800 text-slate-400 hover:bg-slate-900 hover:text-white'
                      }`}
                    >
                      <span className="text-xs font-bold">{item.label}</span>
                      <span className="text-[11px] text-cyan-400 font-mono mt-1">{item.price}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Complexity & Scale Tier */}
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  2. Project Scale & Features Tier
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { id: 'starter', label: 'Starter MVP', desc: 'Essential core features' },
                    { id: 'growth', label: 'Growth Pro', desc: 'Full custom UI & API' },
                    { id: 'enterprise', label: 'Enterprise Suite', desc: 'High scale & SLA' }
                  ].map(tier => (
                    <button
                      key={tier.id}
                      onClick={() => {
                        setCalcTier(tier.id as any);
                        launchSoundEngine.playClickBlip();
                      }}
                      className={`p-3.5 rounded-xl border text-center transition cursor-pointer ${
                        calcTier === tier.id
                          ? 'bg-purple-500/20 border-purple-400 text-white shadow-[0_0_15px_rgba(168,85,247,0.3)] font-bold'
                          : 'bg-slate-950/80 border-slate-800 text-slate-400 hover:bg-slate-900'
                      }`}
                    >
                      <div className="text-xs font-bold">{tier.label}</div>
                      <div className="text-[10px] text-slate-500 mt-0.5">{tier.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Add-on Capabilities */}
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  3. Select Add-on Superpowers (Optional)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    { id: 'payment', label: 'Payment Gateway (Razorpay/UPI)', cost: '+₹3,000' },
                    { id: 'whatsapp', label: 'WhatsApp Automated Chat Hook', cost: '+₹1,500' },
                    { id: 'seo', label: 'Core Web Vitals & On-Page SEO', cost: '+₹4,000' },
                    { id: 'multilang', label: 'Multi-Language (Hindi/Eng)', cost: '+₹3,500' },
                    { id: 'express', label: '⚡ 48-Hour Express Delivery', cost: '+₹5,000' }
                  ].map(addon => {
                    const isChecked = calcAddons.includes(addon.id);
                    return (
                      <button
                        key={addon.id}
                        onClick={() => {
                          if (isChecked) {
                            setCalcAddons(calcAddons.filter(a => a !== addon.id));
                          } else {
                            setCalcAddons([...calcAddons, addon.id]);
                          }
                          launchSoundEngine.playClickBlip();
                        }}
                        className={`p-3 rounded-xl border text-left transition flex items-center justify-between cursor-pointer ${
                          isChecked
                            ? 'bg-emerald-500/20 border-emerald-400 text-white'
                            : 'bg-slate-950/80 border-slate-800 text-slate-400 hover:bg-slate-900'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <div className={`w-4 h-4 rounded-md flex items-center justify-center border ${isChecked ? 'bg-emerald-500 border-emerald-400 text-slate-950' : 'border-slate-700'}`}>
                            {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                          <span className="text-xs">{addon.label}</span>
                        </div>
                        <span className="text-[11px] font-mono text-emerald-400">{addon.cost}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Price Output Summary Box (Right 4 Cols) */}
            <div className="lg:col-span-4 bg-slate-950/95 border border-cyan-500/40 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl backdrop-blur-xl">
              <div className="space-y-1 pb-4 border-b border-slate-800">
                <span className="text-[11px] uppercase font-mono tracking-widest text-cyan-400 font-bold">Estimated Investment</span>
                <div className="text-4xl font-black text-white font-mono flex items-baseline gap-1">
                  <span>₹{calculatedCostAndTimeline.total.toLocaleString()}</span>
                  <span className="text-xs text-slate-500 font-normal">one-time</span>
                </div>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between text-slate-300">
                  <span className="text-slate-500">Estimated Delivery:</span>
                  <span className="font-bold text-emerald-400 font-mono flex items-center gap-1">
                    <Rocket className="w-3.5 h-3.5" />
                    <span>{calculatedCostAndTimeline.days} Working Days</span>
                  </span>
                </div>

                <div className="flex items-center justify-between text-slate-300">
                  <span className="text-slate-500">Source Code:</span>
                  <span className="font-bold text-white">100% Full Ownership</span>
                </div>

                <div className="flex items-center justify-between text-slate-300">
                  <span className="text-slate-500">Post-Launch Support:</span>
                  <span className="font-bold text-cyan-400">Included Free</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-400 leading-relaxed">
                ✅ Transparent quote. Includes free domain/hosting setup assistance, SSL certificate, and zero vendor lock-in.
              </div>

              <button
                onClick={() => {
                  launchSoundEngine.playSuccess();
                  onNavigate('contact');
                }}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-slate-950 font-black text-xs sm:text-sm shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:scale-105 transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Lock In This Pricing Quote</span>
              </button>
            </div>

          </div>

        </div>

        {/* 6. KEY PERFORMANCE NUMBERS & TRUST METRICS STRIP */}
        <div className="my-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-6 rounded-2xl bg-gradient-to-b from-cyan-950/40 to-slate-900/60 border border-cyan-500/30 text-center space-y-1.5 shadow-lg">
            <div className="text-3xl sm:text-5xl font-black text-cyan-400 font-mono">100+</div>
            <div className="text-xs font-bold text-white">Digital Projects Shipped</div>
            <div className="text-[11px] text-slate-400">Websites, Apps & Portals</div>
          </div>
          <div className="p-6 rounded-2xl bg-gradient-to-b from-emerald-950/40 to-slate-900/60 border border-emerald-500/30 text-center space-y-1.5 shadow-lg">
            <div className="text-3xl sm:text-5xl font-black text-emerald-400 font-mono">99.9%</div>
            <div className="text-xs font-bold text-white">Cloud Server Uptime</div>
            <div className="text-[11px] text-slate-400">Enterprise NVMe Stack</div>
          </div>
          <div className="p-6 rounded-2xl bg-gradient-to-b from-blue-950/40 to-slate-900/60 border border-blue-500/30 text-center space-y-1.5 shadow-lg">
            <div className="text-3xl sm:text-5xl font-black text-blue-400 font-mono">&lt; 0.8s</div>
            <div className="text-xs font-bold text-white">Sub-Second Load Time</div>
            <div className="text-[11px] text-slate-400">Core Web Vitals Pass</div>
          </div>
          <div className="p-6 rounded-2xl bg-gradient-to-b from-purple-950/40 to-slate-900/60 border border-purple-500/30 text-center space-y-1.5 shadow-lg">
            <div className="text-3xl sm:text-5xl font-black text-purple-400 font-mono">24/7</div>
            <div className="text-xs font-bold text-white">Dedicated SLA Support</div>
            <div className="text-[11px] text-slate-400">Instant Technical Concierge</div>
          </div>
        </div>

        {/* 7. WHY BUSINESSES CHOOSE AVRX DIGITAL */}
        <div className="my-20 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>THE AVRX ADVANTAGE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white">
              Why Leaders Partner with AVRX Digital
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Modern architectural craftsmanship that sets your digital presence apart from generic WordPress templates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseReasons.map((reason, idx) => {
              const Icon = reason.icon;
              return (
                <div 
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800/90 hover:border-cyan-500/40 transition-all space-y-3.5 group shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${reason.gradient} group-hover:scale-110 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs font-black text-slate-600 group-hover:text-cyan-400 transition-colors">
                      0{idx + 1}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">{reason.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{reason.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 8. HOW IT WORKS / DEVELOPMENT PIPELINE */}
        <div className="my-20 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase">
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span>DEVELOPMENT WORKFLOW</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white">
              From Concept to Zero-Downtime Launch
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              A transparent, 6-step structured engineering pipeline with continuous milestone check-ins.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {digitalProcessSteps.map((step, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 transition space-y-2.5 text-center shadow-sm"
              >
                <div className={`inline-block px-3 py-1 rounded-lg font-mono font-black text-xs border ${step.color}`}>
                  {step.number}
                </div>
                <div className="text-sm font-bold text-white">{step.title}</div>
                <div className="text-[11px] text-slate-400 leading-relaxed">{step.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 9. DIGITAL SOLUTIONS FAQ ACCORDION (WITH SEARCH) */}
        <div className="my-20 max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-bold uppercase">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span>TRANSPARENT KNOWLEDGE BASE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Clear answers to timeline, pricing, IP ownership, and technical execution queries.
            </p>
          </div>

          {/* Search Filter Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={faqSearch}
              onChange={e => setFaqSearch(e.target.value)}
              placeholder="Search questions (e.g. source code, pricing, payment)..."
              className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-11 pr-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
            {filteredFaqs.map((faq, idx) => (
              <div 
                key={idx}
                className="border border-slate-800 rounded-2xl overflow-hidden bg-slate-900/80 hover:border-cyan-500/40 transition-colors shadow-sm"
              >
                <button
                  onClick={() => {
                    setActiveFaq(activeFaq === idx ? null : idx);
                    launchSoundEngine.playClickBlip();
                  }}
                  className="w-full p-4 sm:p-5 text-left font-bold text-xs sm:text-sm text-slate-200 flex items-center justify-between gap-3 hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-cyan-400 shrink-0 transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {activeFaq === idx && (
                  <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-slate-300 border-t border-slate-800/80 pt-3 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 10. HIGH-IMPACT VIBRANT FINAL CALL TO ACTION */}
        <div className="my-16 rounded-3xl bg-gradient-to-r from-cyan-950 via-slate-900 to-purple-950 border border-cyan-500/50 p-8 sm:p-14 text-center space-y-6 relative overflow-hidden shadow-[0_20px_70px_rgba(0,240,255,0.2)]">
          
          <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl mx-auto space-y-3 relative z-10">
            <h3 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Ready to Build Your Digital Presence?
            </h3>
            <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
              Let's engineer a blazing-fast, high-converting website, mobile app, or portal tailored to your exact business specifications.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 relative z-10">
            <button
              onClick={() => {
                launchSoundEngine.playSuccess();
                onNavigate('contact');
              }}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-slate-950 font-black text-sm shadow-[0_0_35px_rgba(0,240,255,0.45)] hover:scale-105 transition flex items-center gap-2 cursor-pointer"
            >
              <span>Get Started with AVRX Today</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                launchSoundEngine.playClickBlip();
                onNavigate('projects');
              }}
              className="px-6 py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-white font-bold text-xs transition flex items-center gap-2 cursor-pointer"
            >
              <span>Explore Live Client Showcase</span>
              <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
