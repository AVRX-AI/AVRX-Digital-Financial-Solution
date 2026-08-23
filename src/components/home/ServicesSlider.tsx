import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { 
  Code2, 
  Building2, 
  ShoppingBag, 
  Smartphone, 
  Search, 
  DollarSign, 
  Building, 
  Briefcase, 
  FileText, 
  Receipt, 
  Scale, 
  ShieldCheck, 
  HeartPulse, 
  Truck, 
  Server, 
  Cpu, 
  Bot, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Award, 
  ArrowUpRight, 
  Star,
  MessageCircle,
  Clock,
  Layers
} from 'lucide-react';

interface ServicesSliderProps {
  onNavigate: (page: string, slug?: string) => void;
}

export interface FeaturedHeroService {
  id: string;
  slug?: string;
  title: string;
  category: 'digital' | 'financial' | 'tax' | 'insurance' | 'hosting' | 'ai';
  categoryLabel: string;
  tagline: string;
  shortDesc: string;
  badge: string;
  priceOrRate: string;
  priceSub: string;
  imageUrl?: string;
  icon: React.ElementType;
  colorTheme: {
    text: string;
    bg: string;
    border: string;
    gradient: string;
    glow: string;
    accent: string;
    bar: string;
  };
  features: string[];
  sla: string;
  targetPage: string;
}

export const HERO_SERVICES: FeaturedHeroService[] = [
  {
    id: 'web-design',
    slug: 'website-design',
    title: 'Custom Website Design & Web Apps',
    category: 'digital',
    categoryLabel: 'Digital Engineering',
    tagline: 'High-speed conversion websites & web portals',
    shortDesc: 'Ultra-fast, responsive web experiences with 2026 UI/UX, built-in SEO architecture, WhatsApp lead capture, and SSL security.',
    badge: '🔥 Most Popular',
    priceOrRate: 'Starting ₹9,999',
    priceSub: 'Complete design + domain + hosting',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    icon: Code2,
    colorTheme: {
      text: 'text-cyan-400',
      bg: 'bg-cyan-500/10',
      border: 'border-cyan-500/40',
      gradient: 'from-cyan-500/25 via-blue-600/15 to-transparent',
      glow: 'rgba(0, 240, 255, 0.25)',
      accent: 'text-cyan-300',
      bar: 'bg-cyan-400'
    },
    features: [
      'Custom 2026 Responsive UI/UX Design',
      'Ultra-Fast Cold Starts & 95+ Core Web Vitals',
      'Integrated WhatsApp & Lead Capture Forms'
    ],
    sla: 'Delivery in 5-7 Days',
    targetPage: 'digital-solutions'
  },
  {
    id: 'business-loans',
    slug: 'business-loan',
    title: 'Business Loans & MSME Working Capital',
    category: 'financial',
    categoryLabel: 'Financial Solutions',
    tagline: 'Collateral-free business capital up to ₹50 Lakhs',
    shortDesc: 'Fast-track funding from top RBI-registered banking partners & NBFCs with competitive interest rates and minimal paperwork.',
    badge: '⚡ Instant Approval',
    priceOrRate: 'ROI from 8.99% p.a.',
    priceSub: 'Loan sanction in 24 to 48 Hours',
    imageUrl: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=1200&q=80',
    icon: DollarSign,
    colorTheme: {
      text: 'text-emerald-400',
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/40',
      gradient: 'from-emerald-500/25 via-teal-600/15 to-transparent',
      glow: 'rgba(16, 185, 129, 0.25)',
      accent: 'text-emerald-300',
      bar: 'bg-emerald-400'
    },
    features: [
      'Unsecured Loans up to ₹50,00,000',
      '100% Transparent Zero Hidden Charges',
      'Dedicated AVRX Loan Specialist Assistance'
    ],
    sla: 'Sanction in 24-48 Hrs',
    targetPage: 'financial-solutions'
  },
  {
    id: 'pmegp-subsidy',
    slug: 'government-scheme-loans',
    title: 'PMEGP & Govt Subsidy Project Reports',
    category: 'financial',
    categoryLabel: 'Govt Subsidy Scheme',
    tagline: 'Up to 35% Govt Subsidy on project cost',
    shortDesc: 'End-to-end guidance for PMEGP, MUDRA & CGTMSE loans with CA-certified DPR (Detailed Project Reports) and portal filing.',
    badge: '🏛️ Govt Backed',
    priceOrRate: 'Up to 35% Subsidy',
    priceSub: 'Project costs up to ₹50 Lakhs',
    imageUrl: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80',
    icon: Building,
    colorTheme: {
      text: 'text-amber-400',
      bg: 'bg-amber-500/10',
      border: 'border-amber-500/40',
      gradient: 'from-amber-500/25 via-orange-600/15 to-transparent',
      glow: 'rgba(245, 158, 11, 0.25)',
      accent: 'text-amber-300',
      bar: 'bg-amber-400'
    },
    features: [
      'Complete DPR (Detailed Project Report) Preparation',
      'Online KVIC / PMEGP Portal Submission',
      'Bank Follow-up & Subsidy Claim Support'
    ],
    sla: 'Zero Rejection Record',
    targetPage: 'financial-solutions'
  },
  {
    id: 'ecommerce-stores',
    slug: 'e-commerce-solutions',
    title: 'E-Commerce & Online Store Solutions',
    category: 'digital',
    categoryLabel: 'Digital Engineering',
    tagline: 'Sell 24/7 across India with zero commissions',
    shortDesc: 'Feature-rich online store platforms with UPI/Card payment gateways, automated inventory, discount coupons, and shipping tracking.',
    badge: '🚀 High Growth',
    priceOrRate: 'Starting ₹19,999',
    priceSub: 'Zero ongoing sales commissions',
    imageUrl: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1200&q=80',
    icon: ShoppingBag,
    colorTheme: {
      text: 'text-blue-400',
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/40',
      gradient: 'from-blue-500/25 via-indigo-600/15 to-transparent',
      glow: 'rgba(59, 130, 246, 0.25)',
      accent: 'text-blue-300',
      bar: 'bg-blue-400'
    },
    features: [
      'Instant Razorpay/PhonePe UPI Payment Integration',
      'Live Shipping API & Automated Order Tracking',
      'Mobile-first Cart & Abandoned Cart Recovery'
    ],
    sla: 'Delivery in 7-10 Days',
    targetPage: 'digital-solutions'
  },
  {
    id: 'gst-tax-filing',
    slug: 'gst-registration',
    title: 'GST Registration & Monthly Filings',
    category: 'tax',
    categoryLabel: 'Tax & Compliance',
    tagline: '100% compliant tax filings with expert CAs',
    shortDesc: 'New GST registrations, monthly GSTR-1 & 3B return filings, ITC reconciliation, and notice resolution by experienced tax professionals.',
    badge: '⚖️ 100% Compliant',
    priceOrRate: 'Starting ₹1,499',
    priceSub: 'Monthly & Annual Retainers Available',
    imageUrl: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=800&q=80',
    icon: Receipt,
    colorTheme: {
      text: 'text-yellow-400',
      bg: 'bg-yellow-500/10',
      border: 'border-yellow-500/40',
      gradient: 'from-yellow-500/25 via-amber-600/15 to-transparent',
      glow: 'rgba(234, 179, 8, 0.25)',
      accent: 'text-yellow-300',
      bar: 'bg-yellow-400'
    },
    features: [
      'Same-Day GST Application Processing',
      'Accurate GSTR-1, 3B & 9 Return Filings',
      'ITC Mismatch Audits & Notice Advisory'
    ],
    sla: 'Same-Day Initiation',
    targetPage: 'tax-solutions'
  },
  {
    id: 'commercial-insurance',
    slug: 'shop-property-insurance',
    title: 'Commercial & Shopkeeper Insurance',
    category: 'insurance',
    categoryLabel: 'Protection & Safety',
    tagline: 'Comprehensive asset, fire & stock protection',
    shortDesc: 'Protect your business premises, inventory, machinery, and commercial assets with tailored IRDAI-regulated insurance policies.',
    badge: '🛡️ 100% Claim Support',
    priceOrRate: 'Custom Quotation',
    priceSub: 'Cashless claims across top insurers',
    imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
    icon: ShieldCheck,
    colorTheme: {
      text: 'text-purple-400',
      bg: 'bg-purple-500/10',
      border: 'border-purple-500/40',
      gradient: 'from-purple-500/25 via-fuchsia-600/15 to-transparent',
      glow: 'rgba(168, 85, 247, 0.25)',
      accent: 'text-purple-300',
      bar: 'bg-purple-400'
    },
    features: [
      'Fire, Theft, Burglary & Natural Calamity Cover',
      'Transit & Stock Loss Protection',
      'Dedicated AVRX Claims Support Executive'
    ],
    sla: 'Instant Policy Issuance',
    targetPage: 'insurance-solutions'
  },
  {
    id: 'ai-tools-suite',
    slug: 'ai-tools',
    title: '70+ In-Browser AI & SEO Tools Suite',
    category: 'ai',
    categoryLabel: 'AVRX AI Engine',
    tagline: 'Instant web utilities, SEO audits & AI creators',
    shortDesc: 'Free, client-side neural tools for website SEO audits, speed analysis, PDF management, AI image prompt generation, and business calculators.',
    badge: '🤖 Free In-Browser Tools',
    priceOrRate: 'Free & Instant',
    priceSub: 'No sign-up required for instant audits',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    icon: Cpu,
    colorTheme: {
      text: 'text-rose-400',
      bg: 'bg-rose-500/10',
      border: 'border-rose-500/40',
      gradient: 'from-rose-500/25 via-pink-600/15 to-transparent',
      glow: 'rgba(244, 63, 94, 0.25)',
      accent: 'text-rose-300',
      bar: 'bg-rose-400'
    },
    features: [
      'Comprehensive Website SEO & Speed Scanner',
      'PDF Editor, Converter, Compressor & Merger',
      'AI Content Summarizer, Prompt Generator & Writers'
    ],
    sla: 'Real-time Processing',
    targetPage: 'ai-tools'
  }
];

export const ServicesSlider: React.FC<ServicesSliderProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const slideDuration = 4500; // ms per slide

  const filteredServices = HERO_SERVICES.filter(service => 
    activeCategory === 'all' || service.category === activeCategory
  );

  // Reset index when filter changes
  useEffect(() => {
    setCurrentIndex(0);
    setProgress(0);
  }, [activeCategory]);

  // Handle auto-advance with continuous smooth progress bar
  useEffect(() => {
    if (!isPlaying || filteredServices.length <= 1) {
      setProgress(0);
      return;
    }

    const intervalStep = 50; // update progress every 50ms
    const stepIncrement = (intervalStep / slideDuration) * 100;

    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setCurrentIndex(current => (current + 1) % filteredServices.length);
          return 0;
        }
        return prev + stepIncrement;
      });
    }, intervalStep);

    return () => clearInterval(timer);
  }, [isPlaying, filteredServices.length, currentIndex]);

  const handleNext = () => {
    setProgress(0);
    setCurrentIndex(prev => (prev + 1) % filteredServices.length);
  };

  const handlePrev = () => {
    setProgress(0);
    setCurrentIndex(prev => (prev - 1 + filteredServices.length) % filteredServices.length);
  };

  const selectService = (idx: number) => {
    setProgress(0);
    setCurrentIndex(idx);
  };

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (diff > 40) {
      handleNext();
    } else if (diff < -40) {
      handlePrev();
    }
    setTouchStart(null);
  };

  const current = filteredServices[currentIndex] || filteredServices[0];
  const IconComponent = current.icon;

  const categories = [
    { id: 'all', label: 'All Services', icon: Sparkles },
    { id: 'digital', label: 'Web & Tech', icon: Code2 },
    { id: 'financial', label: 'Loans & PMEGP', icon: DollarSign },
    { id: 'tax', label: 'Tax & GST', icon: FileText },
    { id: 'insurance', label: 'Insurance', icon: ShieldCheck },
    { id: 'ai', label: 'AI Suite', icon: Cpu }
  ];

  return (
    <div 
      className="relative w-full rounded-3xl bg-slate-950/85 backdrop-blur-2xl border border-slate-800/90 shadow-[0_20px_60px_rgba(0,0,0,0.85)] overflow-hidden flex flex-col justify-between select-none group"
      style={{
        boxShadow: `0 20px 60px -15px ${current.colorTheme.glow}`
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      {/* 1. Ambient Dynamic Glow Backdrop */}
      <div 
        className={`absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br ${current.colorTheme.gradient} rounded-full blur-[110px] pointer-events-none transition-all duration-700 opacity-80`} 
      />
      <div 
        className="absolute -bottom-24 -left-24 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" 
      />

      {/* Decorative Grid texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b0a_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0a_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none opacity-40" />

      {/* 2. Top Header & Category Filter Tabs */}
      <div className="p-4 sm:p-5 border-b border-slate-800/80 bg-slate-950/70 relative z-10 space-y-3">
        
        {/* Header Ribbon */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
            </span>
            <span className="text-xs font-bold font-mono tracking-wider text-cyan-300 uppercase flex items-center gap-1.5">
              <span>AVRX SERVICES HUB</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-400 font-medium">Explore 50+ Solutions</span>
            </span>
          </div>

          {/* Slide counter & Auto-play indicator */}
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono font-semibold text-slate-400 bg-slate-900/90 border border-slate-800 px-2.5 py-0.5 rounded-full">
              {currentIndex + 1} / {filteredServices.length}
            </span>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              title={isPlaying ? 'Pause auto-slide' : 'Resume auto-slide'}
              className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-850 border border-slate-800 text-slate-400 hover:text-cyan-400 transition cursor-pointer"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5 text-cyan-400" /> : <Play className="w-3.5 h-3.5 text-emerald-400 fill-current" />}
            </button>
          </div>
        </div>

        {/* Filter Tabs Strip */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {categories.map(tab => {
            const TabIcon = tab.icon;
            const isSelected = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3 py-1 rounded-xl text-[11px] font-bold transition-all duration-200 whitespace-nowrap flex items-center gap-1.5 cursor-pointer border ${
                  isSelected
                    ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.35)] scale-102'
                    : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:bg-slate-850 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                <TabIcon className="w-3 h-3" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

      </div>

      {/* 3. Main Dynamic Slide Body with Smooth Motion Fade Effect */}
      <div className="p-5 sm:p-7 flex-1 flex flex-col justify-between space-y-5 relative z-10 min-h-[380px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -8, filter: 'blur(4px)' }}
            transition={{ duration: 0.38, ease: 'easeInOut' }}
            className="flex-1 flex flex-col justify-between space-y-5"
          >
            {/* Service Header Info & Image Thumbnail */}
            <div className="space-y-3">
              
              {/* Top Pill Badges Row */}
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-bold ${current.colorTheme.bg} ${current.colorTheme.border} ${current.colorTheme.text}`}>
                  <IconComponent className="w-3.5 h-3.5" />
                  <span>{current.categoryLabel}</span>
                </div>

                <span className="px-2.5 py-1 rounded-lg bg-slate-900/90 border border-slate-700/80 text-[11px] font-extrabold text-white tracking-wide shadow-sm">
                  {current.badge}
                </span>
              </div>

              {/* Service Hero Image & Title Box */}
              {current.imageUrl && (
                <div className="relative h-28 sm:h-32 w-full rounded-2xl overflow-hidden border border-slate-800/80 shadow-md group/img">
                  <img
                    src={current.imageUrl}
                    alt={current.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050811] via-[#050811]/60 to-transparent" />
                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-white px-2 py-0.5 rounded-md bg-slate-950/80 border border-slate-700 backdrop-blur-sm">
                      {current.categoryLabel}
                    </span>
                    <span className={`text-[11px] font-mono font-black ${current.colorTheme.text} px-2 py-0.5 rounded-md bg-slate-950/80 border border-slate-700 backdrop-blur-sm`}>
                      {current.priceOrRate}
                    </span>
                  </div>
                </div>
              )}

              {/* Service Title */}
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl lg:text-[24px] font-black text-white tracking-tight leading-snug group-hover:text-cyan-100 transition-colors">
                  {current.title}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-cyan-400/90 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>{current.tagline}</span>
                </p>
              </div>

              {/* Description */}
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-2">
                {current.shortDesc}
              </p>

              {/* Price / Rate Highlight Box */}
              <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-900/90 border border-slate-800/90 shadow-inner">
                <div>
                  <div className="text-[10px] font-mono uppercase font-bold text-slate-400 tracking-wider">
                    Financial Rate / Cost
                  </div>
                  <div className={`text-base sm:text-lg font-black font-mono ${current.colorTheme.text}`}>
                    {current.priceOrRate}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] font-mono uppercase font-bold text-slate-400 tracking-wider">
                    Turnaround / SLA
                  </div>
                  <div className="text-xs font-bold text-emerald-400 flex items-center gap-1 justify-end">
                    <Clock className="w-3 h-3 text-emerald-400" />
                    <span>{current.sla}</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Feature Checkpoints */}
            <div className="space-y-2 pt-2 border-t border-slate-800/80">
              <div className="text-[10px] font-mono uppercase font-bold text-slate-400 tracking-wider flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-cyan-400" />
                <span>Key Deliverables & Guarantees:</span>
              </div>

              <div className="space-y-1.5">
                {current.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="line-clamp-1 font-medium">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Action Buttons & Navigation */}
            <div className="pt-3 border-t border-slate-800/80 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              
              {/* Main Action Button */}
              <button
                onClick={() => {
                  if (current.slug) {
                    onNavigate('service-detail', current.slug);
                  } else {
                    onNavigate(current.targetPage);
                  }
                }}
                className="flex-1 py-3 px-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 hover:brightness-110 active:scale-98 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-all shadow-[0_0_25px_rgba(0,240,255,0.3)] flex items-center justify-center gap-2 cursor-pointer group/btn"
              >
                <span>Explore {current.categoryLabel}</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>

              {/* Quick WhatsApp / Contact */}
              <a
                href={`https://wa.me/919630661536?text=Hello%20AVRX%20Team,%20I%20am%20interested%20in%20${encodeURIComponent(current.title)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/40 text-emerald-300 font-bold text-xs flex items-center justify-center gap-2 transition cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Enquire</span>
              </a>

              {/* Prev / Next Controls */}
              <div className="flex items-center gap-1.5 justify-center sm:justify-end shrink-0">
                <button
                  onClick={handlePrev}
                  title="Previous Service"
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-400 text-slate-300 hover:text-white transition cursor-pointer active:scale-90"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <button
                  onClick={handleNext}
                  title="Next Service"
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-400 text-slate-300 hover:text-white transition cursor-pointer active:scale-90"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>

      {/* 5. Bottom Thumbnail Strip + Auto-Slide Progress Bar */}
      <div className="border-t border-slate-800/80 bg-slate-950/90 relative z-10">
        
        {/* Continuous Animated Progress Bar */}
        <div className="w-full h-1 bg-slate-900 overflow-hidden">
          <div 
            className={`h-full ${current.colorTheme.bar} transition-all duration-75`}
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Thumbnail Selector Dots / Pills */}
        <div className="p-2.5 px-4 flex items-center justify-between gap-2 overflow-x-auto scrollbar-none text-xs">
          
          <div className="flex items-center gap-1.5">
            {filteredServices.map((srv, idx) => (
              <button
                key={srv.id}
                onClick={() => selectService(idx)}
                title={srv.title}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === currentIndex 
                    ? `w-7 ${current.colorTheme.bar} shadow-[0_0_8px_rgba(0,240,255,0.6)]` 
                    : 'w-2 bg-slate-800 hover:bg-slate-700'
                }`}
              />
            ))}
          </div>

          <div className="text-[10px] font-mono text-slate-400 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Call: 9630661536 / 7000859994</span>
          </div>

        </div>

      </div>

    </div>
  );
};
