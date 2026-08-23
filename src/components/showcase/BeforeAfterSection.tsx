import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  TrendingUp, 
  Zap, 
  Gauge, 
  ShieldCheck, 
  Smartphone, 
  Clock, 
  Eye, 
  Layers, 
  ShoppingBag, 
  Building2, 
  Stethoscope, 
  Scale, 
  ChevronRight,
  SlidersHorizontal
} from 'lucide-react';

interface BeforeAfterCase {
  id: string;
  category: string;
  clientName: string;
  industry: string;
  icon: React.ElementType;
  accentColor: string;
  badgeColor: string;
  before: {
    title: string;
    image: string;
    loadTime: string;
    lighthouseScore: number;
    mobileScore: string;
    seoRank: string;
    conversionRate: string;
    bounceRate: string;
    painPoints: string[];
  };
  after: {
    title: string;
    image: string;
    loadTime: string;
    lighthouseScore: number;
    mobileScore: string;
    seoRank: string;
    conversionRate: string;
    bounceRate: string;
    achievements: string[];
    growthHighlights: { label: string; value: string; change: string }[];
  };
}

const BEFORE_AFTER_CASES: BeforeAfterCase[] = [
  {
    id: 'ecommerce-fashion',
    category: 'D2C E-Commerce & Retail',
    clientName: 'LuxeAura Paris & Mumbai',
    industry: 'Luxury Fashion & Apparel',
    icon: ShoppingBag,
    accentColor: 'from-pink-500 to-rose-600',
    badgeColor: 'border-pink-500/40 text-pink-300 bg-pink-500/10',
    before: {
      title: 'Old WooCommerce Storefront (2021)',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=70',
      loadTime: '4.8s Lag',
      lighthouseScore: 38,
      mobileScore: 'Non-Responsive',
      seoRank: 'Page 5 (Google)',
      conversionRate: '1.1%',
      bounceRate: '68%',
      painPoints: [
        'Sluggish 4.8s page loads causing 68% cart bounce',
        'Complex 5-step checkout losing mobile impulse shoppers',
        'Zero structured schema markup & unranked on Google',
        'Frequent server crashes during seasonal festive flash sales'
      ]
    },
    after: {
      title: 'AVRX Next.js 14 Headless Commerce Engine',
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=85',
      loadTime: '0.38s Ultra-Fast',
      lighthouseScore: 99,
      mobileScore: '100/100 Fluid',
      seoRank: 'Rank #1 for "Luxury Silk Couture"',
      conversionRate: '5.4%',
      bounceRate: '22%',
      achievements: [
        'Sub-400ms edge caching across Mumbai & global nodes',
        'Frictionless 1-Click Instant Cart & UPI checkout',
        'Full JSON-LD Rich Product Schema for Google Search',
        'Auto-scaling serverless architecture handling 100k concurrent users'
      ],
      growthHighlights: [
        { label: 'Sales Conversion', value: '+390%', change: 'MoM Jump' },
        { label: 'Organic Traffic', value: '84,000/mo', change: 'From 4,200/mo' },
        { label: 'Cart Drop-Off', value: '-62%', change: 'Instant Checkout' }
      ]
    }
  },
  {
    id: 'real-estate-luxury',
    category: 'Luxury Real Estate & 3D Tours',
    clientName: 'Grand Pinnacle Residences',
    industry: 'Premium Waterfront Property',
    icon: Building2,
    accentColor: 'from-amber-500 to-orange-600',
    badgeColor: 'border-amber-500/40 text-amber-300 bg-amber-500/10',
    before: {
      title: 'Static Broker Listing Site (2020)',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1000&q=70',
      loadTime: '6.2s Heavy',
      lighthouseScore: 42,
      mobileScore: 'Broken Layout',
      seoRank: 'Unindexed',
      conversionRate: '0.8%',
      bounceRate: '74%',
      painPoints: [
        'Heavy uncompressed PDFs taking 20+ seconds to download',
        'Casual low-budget unqualified leads wasting sales reps time',
        'No interactive floor plans or 3D architectural views',
        'Zero WhatsApp integration or automated VIP tour booking'
      ]
    },
    after: {
      title: 'AVRX 4K Immersive Architectural Showcase',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85',
      loadTime: '0.45s Instant',
      lighthouseScore: 98,
      mobileScore: '100% Touch-Optimized',
      seoRank: 'Rank #1 for "Luxury Waterfront Penthouses"',
      conversionRate: '4.9%',
      bounceRate: '26%',
      achievements: [
        'Interactive 4K WebGL gallery with dynamic floor-plan filter',
        'Live mortgage amortization engine & stamp duty calculator',
        'VIP chauffeur tour booking with automated CRM qualification',
        'Ranked #1 on Google for high-intent luxury property terms'
      ],
      growthHighlights: [
        { label: 'High-Net-Worth Leads', value: '+420%', change: 'Qualified Buyers' },
        { label: 'Avg Dwell Time', value: '4m 32s', change: 'Interactive 3D' },
        { label: 'Brochure Inquiries', value: '₹140 Cr+', change: 'Property Value' }
      ]
    }
  },
  {
    id: 'healthcare-telemed',
    category: 'Healthcare & Hospital Portal',
    clientName: 'ApexHealth Super Specialty',
    industry: 'Multispecialty Healthcare Network',
    icon: Stethoscope,
    accentColor: 'from-teal-500 to-cyan-600',
    badgeColor: 'border-teal-500/40 text-teal-300 bg-teal-500/10',
    before: {
      title: 'Legacy Hospital Info Page (2019)',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=70',
      loadTime: '5.1s Lag',
      lighthouseScore: 35,
      mobileScore: 'Hard to Read',
      seoRank: 'Page 4 (Google Local)',
      conversionRate: '1.4%',
      bounceRate: '71%',
      painPoints: [
        'Patients forced to call congested phone lines for appointments',
        'No doctor availability calendar or specialty department search',
        'Slow non-secure portal without patient health record privacy',
        'High no-show appointment rate (34%) with zero reminder SMS'
      ]
    },
    after: {
      title: 'AVRX HIPAA/NABH Compliant Telemed Ecosystem',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85',
      loadTime: '0.42s Fast',
      lighthouseScore: 100,
      mobileScore: '100% Mobile Care',
      seoRank: 'Rank #1 in Google Maps & Local Pack',
      conversionRate: '6.8%',
      bounceRate: '18%',
      achievements: [
        'Instant specialist doctor video consult booking in 20 seconds',
        'Encrypted electronic health records (EHR) & e-prescriptions',
        'Automated WhatsApp & SMS reminders cutting no-shows to 4%',
        'Ranked #1 for local hospital and teleconsultation keywords'
      ],
      growthHighlights: [
        { label: 'Online Consultations', value: '62,000+', change: 'Safely Completed' },
        { label: 'Patient Inflow', value: '+580%', change: 'Digital Bookings' },
        { label: 'Doctor Admin Time', value: '-75%', change: 'Automated Slots' }
      ]
    }
  },
  {
    id: 'legal-corporate',
    category: 'Corporate Legal & Tax Law',
    clientName: 'JurisCorp Premier Legal Advocates',
    industry: 'Corporate & Taxation Advisory',
    icon: Scale,
    accentColor: 'from-blue-500 to-indigo-600',
    badgeColor: 'border-blue-500/40 text-blue-300 bg-blue-500/10',
    before: {
      title: 'Outdated Static Firm Directory (2018)',
      image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1000&q=70',
      loadTime: '4.4s',
      lighthouseScore: 45,
      mobileScore: 'Tiny Fonts',
      seoRank: 'Invisible on Search',
      conversionRate: '0.6%',
      bounceRate: '66%',
      painPoints: [
        'Looked like a generic 2010 directory without institutional authority',
        'Zero inbound corporate retainer leads from search engines',
        'No online consultation fee checkout or notice upload locker',
        'Unsafe HTTP protocol without SSL or cybersecurity encryption'
      ]
    },
    after: {
      title: 'AVRX High-Authority Legal & Tax Enterprise Hub',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85',
      loadTime: '0.36s Edge',
      lighthouseScore: 99,
      mobileScore: 'Ultra-Crisp UI',
      seoRank: 'Rank #1 for "Corporate Tax Advocates"',
      conversionRate: '4.8%',
      bounceRate: '21%',
      achievements: [
        'Institutional luxury dark aesthetic commanding premium retainer fees',
        'Integrated 256-bit encrypted document drop box for audit files',
        'Automated corporate compliance health-check calculator',
        'Dominated 1st page Google rankings across 24 corporate legal terms'
      ],
      growthHighlights: [
        { label: 'Corporate Retainers', value: '+400%', change: 'Quarterly Growth' },
        { label: 'Notice Defense Leads', value: '380+/mo', change: 'From 12/mo' },
        { label: 'Avg Retainer Value', value: '₹1.8 Lakhs', change: 'High Authority' }
      ]
    }
  }
];

interface BeforeAfterSectionProps {
  onOpenConsultation?: () => void;
}

export const BeforeAfterSection: React.FC<BeforeAfterSectionProps> = ({ onOpenConsultation }) => {
  const [activeCaseIndex, setActiveCaseIndex] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'split' | 'before' | 'after'>('split');

  const currentCase = BEFORE_AFTER_CASES[activeCaseIndex];
  const IconComponent = currentCase.icon;

  return (
    <section className="w-full py-16 sm:py-24 bg-gradient-to-b from-[#060a17] via-[#040711] to-[#060a17] text-white relative overflow-hidden border-y border-slate-800/80">
      
      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-rose-600/[0.06] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-emerald-600/[0.06] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-500/[0.04] blur-[150px] pointer-events-none" />

      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-rose-500/10 via-cyan-500/10 to-emerald-500/10 border border-slate-700 text-xs font-mono font-bold uppercase tracking-widest text-cyan-300 shadow-[0_0_20px_rgba(0,240,255,0.15)]">
            <SlidersHorizontal className="w-3.5 h-3.5 text-cyan-400" />
            <span>REAL DIGITAL TRANSFORMATIONS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Before vs After <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-amber-300 to-emerald-400">AVRX Re-Engineering</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed">
            See how converting sluggish, outdated websites into blazing-fast Next.js architectures radically accelerates Google SEO rankings, page speed, and inbound revenue.
          </p>
        </div>

        {/* Case Study Tab Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-5xl mx-auto">
          {BEFORE_AFTER_CASES.map((item, idx) => {
            const ItemIcon = item.icon;
            const isActive = idx === activeCaseIndex;
            return (
              <button
                key={item.id}
                onClick={() => setActiveCaseIndex(idx)}
                className={`flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 border ${
                  isActive
                    ? 'bg-gradient-to-r from-slate-900 to-slate-800 border-cyan-500/60 text-white shadow-[0_0_25px_rgba(0,240,255,0.25)] scale-105'
                    : 'bg-slate-950/60 border-slate-800/80 text-slate-400 hover:text-white hover:border-slate-700 hover:bg-slate-900/60'
                }`}
              >
                <ItemIcon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-slate-500'}`} />
                <span>{item.category}</span>
                {isActive && (
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping ml-1" />
                )}
              </button>
            );
          })}
        </div>

        {/* View Mode Toggle Controls (Mobile / Tablet quick toggles) */}
        <div className="flex items-center justify-center gap-2 sm:hidden">
          <button
            onClick={() => setViewMode('before')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold border ${
              viewMode === 'before'
                ? 'bg-rose-500/20 border-rose-500 text-rose-300'
                : 'bg-slate-900 border-slate-800 text-slate-400'
            }`}
          >
            Show Before
          </button>
          <button
            onClick={() => setViewMode('split')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold border ${
              viewMode === 'split'
                ? 'bg-cyan-500/20 border-cyan-500 text-cyan-300'
                : 'bg-slate-900 border-slate-800 text-slate-400'
            }`}
          >
            Side-by-Side
          </button>
          <button
            onClick={() => setViewMode('after')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold border ${
              viewMode === 'after'
                ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300'
                : 'bg-slate-900 border-slate-800 text-slate-400'
            }`}
          >
            Show After
          </button>
        </div>

        {/* Transformation Comparison Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          
          {/* 1. THE BEFORE CARD (Outdated, Red/Amber Accents) */}
          {(viewMode === 'split' || viewMode === 'before') && (
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-red-950/20 via-slate-950/90 to-slate-950 border border-red-900/40 shadow-2xl flex flex-col justify-between space-y-6 relative overflow-hidden group hover:border-red-500/50 transition-all duration-300">
              
              <div className="absolute top-0 right-0 px-4 py-1.5 bg-red-600/20 border-b border-l border-red-500/30 rounded-bl-2xl text-[11px] font-mono font-bold text-red-300 uppercase tracking-wider flex items-center gap-1.5">
                <XCircle className="w-3.5 h-3.5 text-red-400" />
                <span>BEFORE TRANSFORMATION</span>
              </div>

              <div className="space-y-4 pt-2">
                <div className="space-y-1">
                  <div className="text-xs font-mono font-bold text-red-400 uppercase tracking-widest">
                    Legacy Architecture
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                    {currentCase.before.title}
                  </h3>
                  <p className="text-xs text-slate-400">
                    Client: <span className="text-slate-300 font-semibold">{currentCase.clientName}</span> ({currentCase.industry})
                  </p>
                </div>

                {/* Before Screenshot Preview with Warning Badges */}
                <div className="relative rounded-2xl overflow-hidden border border-red-950/60 aspect-[16/9] bg-slate-900 shadow-inner group-hover:scale-[1.01] transition-transform duration-500">
                  <img
                    src={currentCase.before.image}
                    alt={currentCase.before.title}
                    className="w-full h-full object-cover grayscale opacity-60 contrast-125 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <div className="px-2.5 py-1 rounded-md bg-red-950/90 border border-red-500/40 text-[11px] font-mono font-bold text-red-400 flex items-center gap-1.5">
                      <Clock className="w-3 h-3" />
                      <span>{currentCase.before.loadTime}</span>
                    </div>
                    <div className="px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-700 text-[11px] font-mono text-slate-400">
                      Lighthouse: <span className="text-red-400 font-bold">{currentCase.before.lighthouseScore}/100</span>
                    </div>
                  </div>
                </div>

                {/* Before Performance Metrics Grid */}
                <div className="grid grid-cols-3 gap-2.5 pt-2 text-center">
                  <div className="p-3 rounded-xl bg-red-950/20 border border-red-900/30">
                    <div className="text-[10px] font-mono text-slate-400 uppercase">Google Rank</div>
                    <div className="text-sm sm:text-base font-bold text-red-400 mt-0.5">{currentCase.before.seoRank}</div>
                  </div>
                  <div className="p-3 rounded-xl bg-red-950/20 border border-red-900/30">
                    <div className="text-[10px] font-mono text-slate-400 uppercase">Conversion</div>
                    <div className="text-sm sm:text-base font-bold text-red-400 mt-0.5">{currentCase.before.conversionRate}</div>
                  </div>
                  <div className="p-3 rounded-xl bg-red-950/20 border border-red-900/30">
                    <div className="text-[10px] font-mono text-slate-400 uppercase">Bounce Rate</div>
                    <div className="text-sm sm:text-base font-bold text-red-400 mt-0.5">{currentCase.before.bounceRate}</div>
                  </div>
                </div>

                {/* Legacy Pain Points Checklist */}
                <div className="space-y-2 pt-2">
                  <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                    Core Business Bottlenecks:
                  </div>
                  <div className="space-y-2">
                    {currentCase.before.painPoints.map((pain, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-400">
                        <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                        <span>{pain}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-red-950/60 flex items-center justify-between text-xs text-red-400/80 font-mono">
                <span>Result: Lost Customers &amp; Wasted Ad Budget</span>
                <span className="font-bold">❌ Low ROI</span>
              </div>

            </div>
          )}

          {/* 2. THE AFTER CARD (AVRX Re-Engineered, Emerald/Cyan Accents) */}
          {(viewMode === 'split' || viewMode === 'after') && (
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-emerald-950/30 via-slate-950/95 to-slate-950 border-2 border-emerald-500/50 shadow-[0_0_40px_rgba(16,185,129,0.15)] flex flex-col justify-between space-y-6 relative overflow-hidden group hover:border-emerald-400 transition-all duration-300">
              
              <div className="absolute top-0 right-0 px-4 py-1.5 bg-emerald-500/20 border-b border-l border-emerald-500/40 rounded-bl-2xl text-[11px] font-mono font-bold text-emerald-300 uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-spin" style={{ animationDuration: '4s' }} />
                <span>AFTER AVRX RE-ENGINEERING</span>
              </div>

              <div className="space-y-4 pt-2">
                <div className="space-y-1">
                  <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5" />
                    <span>Next.js 14 Production Engine</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white leading-snug">
                    {currentCase.after.title}
                  </h3>
                  <p className="text-xs text-slate-300">
                    Engineered by <span className="text-cyan-300 font-bold">AVRX Digital Specialists</span>
                  </p>
                </div>

                {/* After Screenshot Preview with High-Conversion Badges */}
                <div className="relative rounded-2xl overflow-hidden border border-emerald-500/40 aspect-[16/9] bg-slate-900 shadow-xl group-hover:scale-[1.01] transition-transform duration-500">
                  <img
                    src={currentCase.after.image}
                    alt={currentCase.after.title}
                    className="w-full h-full object-cover contrast-105 group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500 text-slate-950 font-black text-[10px] font-mono uppercase tracking-wider shadow-lg">
                      🔥 99/100 LIGHTHOUSE
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-cyan-500/90 text-slate-950 font-black text-[10px] font-mono uppercase tracking-wider shadow-lg">
                      ⚡ 0.38s LOAD
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <div className="px-2.5 py-1 rounded-md bg-emerald-950/90 border border-emerald-500/40 text-[11px] font-mono font-bold text-emerald-300 flex items-center gap-1.5">
                      <Gauge className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{currentCase.after.loadTime}</span>
                    </div>
                    <div className="px-2.5 py-1 rounded-md bg-slate-900/90 border border-emerald-500/40 text-[11px] font-mono text-emerald-300 font-bold">
                      SEO: <span className="text-white">{currentCase.after.seoRank}</span>
                    </div>
                  </div>
                </div>

                {/* Verified Growth Metrics Grid */}
                <div className="grid grid-cols-3 gap-2.5 pt-2 text-center">
                  {currentCase.after.growthHighlights.map((gh, gIdx) => (
                    <div key={gIdx} className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/30 shadow-inner">
                      <div className="text-[10px] font-mono text-emerald-400 font-bold uppercase">{gh.label}</div>
                      <div className="text-base sm:text-lg font-black text-white mt-0.5 font-mono">{gh.value}</div>
                      <div className="text-[10px] text-emerald-300 font-medium">{gh.change}</div>
                    </div>
                  ))}
                </div>

                {/* Re-Engineered Superpowers Checklist */}
                <div className="space-y-2 pt-2">
                  <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>AVRX Technical Deliverables:</span>
                  </div>
                  <div className="space-y-2">
                    {currentCase.after.achievements.map((ach, aIdx) => (
                      <div key={aIdx} className="flex items-start gap-2.5 text-xs text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action Strip */}
              <div className="pt-4 border-t border-emerald-900/60 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-xs text-emerald-300 font-mono font-bold flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  <span>Verified 4x Inbound Revenue Surge</span>
                </div>
                {onOpenConsultation && (
                  <button
                    onClick={onOpenConsultation}
                    className="w-full sm:w-auto px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-lg hover:shadow-cyan-500/25 transition-all"
                  >
                    <span>Transform My Website</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

            </div>
          )}

        </div>

        {/* Bottom Callout Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900/90 via-slate-950 to-slate-900/90 border border-slate-800 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center justify-center md:justify-start gap-2">
              <Gauge className="w-4 h-4" />
              <span>IS YOUR CURRENT WEBSITE SLOW OR UNDERPERFORMING?</span>
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-white">
              Get a Free 15-Point UI/UX &amp; SEO Performance Audit in 24 Hours
            </h4>
            <p className="text-xs text-slate-400">
              We analyze your Core Web Vitals, Google keyword ranks, mobile UX bottlenecks, and conversion drop-offs.
            </p>
          </div>

          <div className="flex-shrink-0">
            {onOpenConsultation && (
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 shadow-[0_0_25px_rgba(0,240,255,0.3)] hover:scale-105 transition-all"
              >
                <Sparkles className="w-4 h-4" />
                <span>Claim Free Audit Report</span>
              </button>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
