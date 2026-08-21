import React, { useState } from 'react';
import { PRICING_PLANS } from '../data/servicesData';
import { SEO } from '../components/common/SEO';
import { 
  Check, 
  ArrowRight, 
  Sparkles, 
  Zap, 
  ShieldCheck, 
  HelpCircle, 
  Calculator, 
  Sliders, 
  CheckCircle2, 
  Layers, 
  Code2, 
  Landmark, 
  FileText, 
  Server, 
  Shield, 
  ChevronDown, 
  ChevronRight,
  TrendingUp,
  Percent,
  Clock,
  Award
} from 'lucide-react';
import { launchSoundEngine } from '../utils/launchSoundEngine';
import { PartnersSlider } from '../components/common/PartnersSlider';

interface PricingPageProps {
  onNavigate: (page: string, slug?: string) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onNavigate }) => {
  // Billing Frequency
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  const [activeCategory, setActiveCategory] = useState<'all' | 'digital' | 'finance' | 'tax' | 'hosting'>('all');
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // Custom Price Estimator Calculator States
  const [calcPages, setCalcPages] = useState<number>(5);
  const [calcPlatform, setCalcPlatform] = useState<'web' | 'mobile' | 'both'>('web');
  const [calcSeo, setCalcSeo] = useState<boolean>(true);
  const [calcHosting, setCalcHosting] = useState<'starter' | 'pro' | 'enterprise'>('pro');
  const [calcMaintenance, setCalcMaintenance] = useState<boolean>(true);

  const calculateCustomEstimate = () => {
    let base = 7999;
    // Pages cost
    base += (calcPages - 1) * 1200;
    // Platform
    if (calcPlatform === 'mobile') base += 18000;
    if (calcPlatform === 'both') base += 26000;
    // SEO
    if (calcSeo) base += 4999;
    // Hosting
    if (calcHosting === 'pro') base += 2999;
    if (calcHosting === 'enterprise') base += 6999;
    // Maintenance
    if (calcMaintenance) base += 1999;

    return base;
  };

  const customEstimateTotal = calculateCustomEstimate();

  // Multi-Category Pricing Plans
  const categorizedPlans = [
    {
      id: 'digital-starter',
      category: 'digital',
      name: 'Starter Business Web',
      tagline: 'Ideal for local stores, consultancies & service professionals',
      badge: 'Best For New Ventures',
      badgeColor: 'border-cyan-500/40 text-cyan-300 bg-cyan-500/10',
      price: billingCycle === 'annual' ? '₹8,499' : '₹9,999',
      period: 'one-time investment',
      savings: billingCycle === 'annual' ? 'Save ₹1,500' : undefined,
      color: 'cyan',
      glow: 'shadow-[0_0_30px_rgba(0,240,255,0.15)]',
      border: 'border-cyan-500/40',
      features: [
        'Up to 5 High-Speed Mobile-Responsive Pages',
        'Sub-second 98+ Google Core Web Vitals Speed',
        'Direct WhatsApp & Instant Click-to-Call CTAs',
        'Google Business Profile & Local Map Integration',
        '1-Year High-Speed NVMe Cloud Hosting + SSL',
        '1 Corporate Business Email Account'
      ],
      ctaText: 'Launch Starter Website',
      popular: false
    },
    {
      id: 'digital-growth',
      category: 'digital',
      name: 'Growth E-Commerce & App',
      tagline: 'Engineered for scaling businesses, catalog sales & high lead volume',
      badge: 'Most Popular',
      badgeColor: 'border-emerald-500/50 text-emerald-300 bg-emerald-500/20',
      price: billingCycle === 'annual' ? '₹19,999' : '₹24,999',
      period: 'one-time investment',
      savings: billingCycle === 'annual' ? 'Save ₹5,000' : undefined,
      color: 'emerald',
      glow: 'shadow-[0_0_40px_rgba(16,185,129,0.25)]',
      border: 'border-emerald-400',
      features: [
        'Complete Dynamic Web Store or Custom SaaS MVP',
        'Razorpay / PhonePe / Paytm 1-Click UPI Gateway',
        'Android App (APK + Google Play Store Ready)',
        'Admin Inventory & Order Management Dashboard',
        'Automated WhatsApp Notification Bot Integration',
        'Full On-Page SEO & Rich Google Schema Tagging',
        'Free Domain + LiteSpeed NVMe Cloud Hosting'
      ],
      ctaText: 'Deploy Growth Platform',
      popular: true
    },
    {
      id: 'digital-enterprise',
      category: 'digital',
      name: 'Enterprise Full-Stack Suite',
      tagline: 'Custom SaaS, multi-branch portals & high-throughput digital systems',
      badge: 'Bespoke Architecture',
      badgeColor: 'border-purple-500/40 text-purple-300 bg-purple-500/10',
      price: billingCycle === 'annual' ? '₹44,999' : '₹49,999',
      period: 'custom milestone roadmap',
      savings: billingCycle === 'annual' ? 'Save ₹5,000' : undefined,
      color: 'purple',
      glow: 'shadow-[0_0_30px_rgba(168,85,247,0.15)]',
      border: 'border-purple-500/40',
      features: [
        'Full-Stack TypeScript / Node.js Distributed Web App',
        'Cross-Platform Android & Apple iOS Mobile Apps',
        'Multi-Tenant Role Based Access Control (RBAC)',
        'Automated Lead Routing CRM & Live Webhooks',
        'Dedicated Enterprise NVMe Gen4 Cloud Server',
        '24/7 Priority SLA & Dedicated Software Architect'
      ],
      ctaText: 'Schedule Architecture Call',
      popular: false
    },
    {
      id: 'tax-gst-annual',
      category: 'tax',
      name: 'CA Tax & GST Annual Retainer',
      tagline: 'Zero-penalty GST, ITR and corporate statutory compliance',
      badge: 'Chartered Accountant Verified',
      badgeColor: 'border-amber-500/40 text-amber-300 bg-amber-500/10',
      price: billingCycle === 'annual' ? '₹1,249/mo' : '₹1,499/mo',
      period: 'billed annually',
      savings: billingCycle === 'annual' ? 'Save 20%' : undefined,
      color: 'amber',
      glow: 'shadow-[0_0_30px_rgba(245,158,11,0.15)]',
      border: 'border-amber-500/40',
      features: [
        'Monthly GSTR-1 & GSTR-3B Zero-Error Filing',
        'Automated 2B Input Tax Credit (ITC) Reconciliation',
        'Annual GSTR-9 Return & Tax Audit Drafting',
        'Business ITR-3/ITR-4 Return with Balance Sheet',
        'MSME Udyam Registration & Subsidy Guidance',
        'Dedicated CA Account Manager on WhatsApp/Call'
      ],
      ctaText: 'Retain CA Compliance',
      popular: false
    },
    {
      id: 'finance-loan-concierge',
      category: 'finance',
      name: 'Zero-Fee Loan Concierge',
      tagline: 'PMEGP Subsidy, MSME Working Capital & Business Loans',
      badge: 'Direct Bank Tie-Ups',
      badgeColor: 'border-blue-500/40 text-blue-300 bg-blue-500/10',
      price: '₹0 Upfront',
      period: 'success-based bank facilitation',
      color: 'blue',
      glow: 'shadow-[0_0_30px_rgba(59,130,246,0.15)]',
      border: 'border-blue-500/40',
      features: [
        'Detailed DPR Project Report Preparation (PMEGP / MUDRA)',
        'Bank Eligibility Check Across 30+ Public & Private Banks',
        'Up to 35% Government Capital Subsidy Advisory',
        'Collateral-Free Business Loans up to ₹50 Lakhs',
        'Fast-Track Disbursement in 4 to 7 Working Days',
        'Complete Doorstep & Digital Paperwork Assistance'
      ],
      ctaText: 'Check Loan Eligibility',
      popular: false
    },
    {
      id: 'cloud-hosting-nvme',
      category: 'hosting',
      name: 'LiteSpeed NVMe Cloud Pro',
      tagline: 'Blazing-fast SSD cloud hosting for Indian businesses',
      badge: '99.98% SLA',
      badgeColor: 'border-indigo-500/40 text-indigo-300 bg-indigo-500/10',
      price: billingCycle === 'annual' ? '₹299/mo' : '₹399/mo',
      period: 'billed annually with free .in / .com',
      savings: billingCycle === 'annual' ? 'Save ₹1,200/yr' : undefined,
      color: 'indigo',
      glow: 'shadow-[0_0_30px_rgba(99,102,241,0.15)]',
      border: 'border-indigo-500/40',
      features: [
        '50 GB NVMe Gen4 High-Throughput SSD Storage',
        'LiteSpeed Web Server with LSCache Accelerator',
        'Unmetered Bandwidth with Indian Edge CDN',
        'Automated Daily Offsite Cloud Snapshots',
        'Free Lifetime Wildcard SSL Certificates',
        'AI Web Application Firewall & Malware Protection'
      ],
      ctaText: 'Deploy NVMe Hosting',
      popular: false
    }
  ];

  const filteredPlans = activeCategory === 'all' 
    ? categorizedPlans 
    : categorizedPlans.filter(p => p.category === activeCategory);

  const pricingFaqs = [
    {
      q: 'Are there any hidden costs or surprise renewal fees?',
      a: 'Never. At AVRX, transparency is our core foundation. Every quote includes domain, hosting, SSL, development, testing, and initial maintenance. Any recurring fees for domain/hosting renewals in subsequent years are clearly disclosed upfront with zero lock-in.'
    },
    {
      q: 'Can I start with a Starter plan and upgrade to E-commerce or Mobile App later?',
      a: 'Yes, 100%. Our modular TypeScript codebase and cloud architecture are engineered to scale seamlessly. You can expand with extra pages, payment gateways, mobile apps, or custom CRM integrations whenever your business grows.'
    },
    {
      q: 'What is the payment milestone schedule for digital projects?',
      a: 'We work on transparent milestone-based tranches: typically 40% advance upon project kickoff & UI wireframe approval, 40% after core development & live staging demo, and the remaining 20% upon final launch and source code transfer.'
    },
    {
      q: 'How does your zero-upfront Loan & Subsidy concierge work?',
      a: 'We do not charge upfront consultation fees for loan eligibility checks. We assist with bank documentation, DPR project reports, and subsidy applications through our direct banking channel tie-ups.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#040713] text-white pt-24 pb-20 selection:bg-cyan-500 selection:text-slate-950">
      <SEO
        title="Transparent Pricing Plans & Custom Estimator | AVRX Digital & Financial Solution"
        description="Clear, upfront pricing for web design, mobile apps, CA tax compliance, business loans, and NVMe hosting. Calculate your custom project cost instantly."
      />

      {/* Ambient background glows */}
      <div className="fixed top-20 left-1/4 w-[700px] h-[500px] bg-cyan-500/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="fixed bottom-20 right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10 space-y-16">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="pt-2 flex items-center gap-2 text-xs text-slate-400">
          <button 
            onClick={() => onNavigate('home')}
            className="hover:text-cyan-400 transition-colors"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-cyan-300 font-semibold">Pricing &amp; Plans</span>
        </nav>

        {/* Hero Header */}
        <div className="text-center max-w-4xl mx-auto space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold font-mono uppercase tracking-widest shadow-[0_0_20px_rgba(0,240,255,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>TRANSPARENT &amp; VALUE-PACKED PRICING</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight">
            Transparent Plans. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">
              Zero Hidden Surprises.
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed font-normal">
            Whether you need a lightning-fast business website, CA-verified GST compliance, a government loan DPR, or high-speed NVMe hosting, pick a transparent package below.
          </p>

          {/* Billing Cycle Switcher */}
          <div className="flex items-center justify-center gap-4 pt-4">
            <div className="p-1.5 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center gap-1 shadow-lg backdrop-blur-xl">
              <button
                onClick={() => {
                  launchSoundEngine.playClickTick();
                  setBillingCycle('monthly');
                }}
                className={`px-5 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                  billingCycle === 'monthly'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Standard Pricing
              </button>
              <button
                onClick={() => {
                  launchSoundEngine.playClickTick();
                  setBillingCycle('annual');
                }}
                className={`px-5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 cursor-pointer ${
                  billingCycle === 'annual'
                    ? 'bg-gradient-to-r from-emerald-400 to-teal-500 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>Annual &amp; Bundled</span>
                <span className="px-2 py-0.5 rounded-full bg-slate-950 text-emerald-400 text-[10px] font-mono font-black">
                  SAVE UP TO 20%
                </span>
              </button>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {[
              { id: 'all', label: 'All Solutions', icon: Layers },
              { id: 'digital', label: 'Web & Apps', icon: Code2 },
              { id: 'tax', label: 'CA Tax & GST', icon: FileText },
              { id: 'finance', label: 'Loans & Subsidy', icon: Landmark },
              { id: 'hosting', label: 'Cloud Hosting', icon: Server }
            ].map(cat => {
              const IconComp = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    launchSoundEngine.playClickTick();
                    setActiveCategory(cat.id as any);
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer border ${
                    activeCategory === cat.id
                      ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/60 shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                      : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200'
                  }`}
                >
                  <IconComp className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPlans.map(plan => (
            <div
              key={plan.id}
              className={`p-7 sm:p-8 rounded-3xl bg-slate-950/90 border-2 backdrop-blur-2xl transition-all duration-300 flex flex-col justify-between relative hover:translate-y-[-4px] ${
                plan.popular ? 'border-emerald-400 shadow-[0_0_40px_rgba(16,185,129,0.25)] scale-[1.02]' : `${plan.border} ${plan.glow}`
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-slate-950" />
                  <span>MOST POPULAR CHOICE</span>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold font-mono border ${plan.badgeColor}`}>
                    {plan.badge}
                  </div>
                  <h3 className="text-2xl font-black text-white mt-3">{plan.name}</h3>
                  <p className="text-slate-400 text-xs mt-1.5 leading-relaxed font-normal">{plan.tagline}</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800/80">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-black text-white font-mono tracking-tight">{plan.price}</span>
                    {plan.savings && (
                      <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        {plan.savings}
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-cyan-400 font-mono mt-1 font-semibold">{plan.period}</div>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                    What&apos;s Included in Plan:
                  </div>
                  <div className="space-y-2.5">
                    {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-8 mt-6 border-t border-slate-800/80">
                <button
                  onClick={() => {
                    launchSoundEngine.playClickTick();
                    onNavigate('contact');
                  }}
                  className={`w-full py-4 rounded-2xl font-black text-xs uppercase tracking-wider transition cursor-pointer flex items-center justify-center gap-2 shadow-lg hover:scale-105 active:scale-95 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 text-slate-950'
                      : 'bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 2. Interactive Real-Time Custom Project Cost Estimator */}
        <div className="rounded-3xl bg-slate-950/95 border-2 border-cyan-500/40 p-6 sm:p-10 backdrop-blur-2xl shadow-[0_0_50px_rgba(0,240,255,0.15)] space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
                <Calculator className="w-4 h-4 animate-pulse" />
                <span>INTERACTIVE PROJECT COST CALCULATOR</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white">
                Customize &amp; Estimate Your Project Budget
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl font-normal">
                Adjust the sliders and switches below to calculate your estimated investment in real-time with zero commitments.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900 border border-cyan-500/40 text-right shrink-0">
              <div className="text-xs font-mono text-slate-400 uppercase font-bold">Estimated Total Investment</div>
              <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 font-mono mt-1">
                ₹{customEstimateTotal.toLocaleString('en-IN')}
              </div>
              <div className="text-[11px] text-cyan-300 font-mono mt-1">Includes Domain, Hosting &amp; SSL</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Slider 1: Pages Count */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
              <div className="flex justify-between items-center text-xs font-bold text-slate-300">
                <span>Number of Pages / Views</span>
                <span className="font-mono text-cyan-400 text-sm">{calcPages} Pages</span>
              </div>
              <input
                type="range"
                min="1"
                max="25"
                value={calcPages}
                onChange={e => {
                  setCalcPages(Number(e.target.value));
                  launchSoundEngine.playClickTick();
                }}
                className="w-full accent-cyan-400 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>1 Page (Landing)</span>
                <span>10 Pages</span>
                <span>25+ Pages (Portal)</span>
              </div>
            </div>

            {/* Platform Option */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
              <div className="text-xs font-bold text-slate-300">Target Platforms</div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'web', label: 'Web Only' },
                  { id: 'mobile', label: 'Android App' },
                  { id: 'both', label: 'Web + Android + iOS' }
                ].map(item => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCalcPlatform(item.id as any);
                      launchSoundEngine.playClickTick();
                    }}
                    className={`py-2 px-1 text-center rounded-xl text-[11px] font-bold transition cursor-pointer border ${
                      calcPlatform === item.id
                        ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-md'
                        : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Hosting Tier */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
              <div className="text-xs font-bold text-slate-300">Cloud Infrastructure Tier</div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'starter', label: 'Standard' },
                  { id: 'pro', label: 'LiteSpeed Pro' },
                  { id: 'enterprise', label: 'Dedicated NVMe' }
                ].map(item => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCalcHosting(item.id as any);
                      launchSoundEngine.playClickTick();
                    }}
                    className={`py-2 px-1 text-center rounded-xl text-[11px] font-bold transition cursor-pointer border ${
                      calcHosting === item.id
                        ? 'bg-emerald-400 text-slate-950 border-emerald-300 shadow-md'
                        : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Addons Checklist */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2.5 md:col-span-2 lg:col-span-3 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-6">
                <label className="flex items-center gap-2 text-xs font-semibold text-slate-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={calcSeo}
                    onChange={e => {
                      setCalcSeo(e.target.checked);
                      launchSoundEngine.playClickTick();
                    }}
                    className="w-4 h-4 accent-cyan-400 cursor-pointer rounded"
                  />
                  <span>Include Local Google SEO &amp; Schema (+₹4,999)</span>
                </label>

                <label className="flex items-center gap-2 text-xs font-semibold text-slate-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={calcMaintenance}
                    onChange={e => {
                      setCalcMaintenance(e.target.checked);
                      launchSoundEngine.playClickTick();
                    }}
                    className="w-4 h-4 accent-cyan-400 cursor-pointer rounded"
                  />
                  <span>1-Year Dedicated Security &amp; Backup Maintenance (+₹1,999)</span>
                </label>
              </div>

              <button
                onClick={() => {
                  launchSoundEngine.playClickTick();
                  onNavigate('contact');
                }}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-black text-xs uppercase tracking-wider transition cursor-pointer shadow-lg hover:scale-105"
              >
                Lock In This Quote
              </button>
            </div>

          </div>
        </div>

        {/* 3. Comprehensive Feature Comparison Matrix Table */}
        <div className="rounded-3xl bg-slate-950/90 border border-slate-800 p-6 sm:p-10 space-y-6">
          <div className="space-y-2 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-black text-white">
              Detailed Plan Comparison Matrix
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Full breakdown of engineering standards, SLA guarantees, and deliverables across each tier.
            </p>
          </div>

          <div className="overflow-x-auto pt-4">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 font-mono uppercase">
                  <th className="p-4 w-1/3">Core Capability</th>
                  <th className="p-4 text-center">Starter Web</th>
                  <th className="p-4 text-center text-emerald-400">Growth Suite</th>
                  <th className="p-4 text-center text-purple-400">Enterprise SaaS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-900 text-slate-300">
                <tr>
                  <td className="p-4 font-semibold text-white">Google Core Web Vitals &gt;95 Speed</td>
                  <td className="p-4 text-center text-emerald-400">✓ Included</td>
                  <td className="p-4 text-center text-emerald-400">✓ Included</td>
                  <td className="p-4 text-center text-emerald-400">✓ Included (Sub-0.4s)</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">Mobile Android / iOS Apps</td>
                  <td className="p-4 text-center text-slate-600">—</td>
                  <td className="p-4 text-center text-emerald-400">✓ Android Ready</td>
                  <td className="p-4 text-center text-purple-400">✓ Android + iOS Native</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">Payment Gateway (Razorpay/PhonePe)</td>
                  <td className="p-4 text-center text-slate-600">—</td>
                  <td className="p-4 text-center text-emerald-400">✓ 1-Click UPI &amp; Cards</td>
                  <td className="p-4 text-center text-purple-400">✓ Multi-Vendor Escrow</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">Intellectual Property &amp; Source Code</td>
                  <td className="p-4 text-center text-emerald-400">100% Owned</td>
                  <td className="p-4 text-center text-emerald-400">100% Owned</td>
                  <td className="p-4 text-center text-purple-400">100% Owned + Git Repo</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">Support &amp; SLA Commitment</td>
                  <td className="p-4 text-center">Email &amp; WhatsApp</td>
                  <td className="p-4 text-center text-emerald-400">Priority WhatsApp / Call</td>
                  <td className="p-4 text-center text-purple-400">24/7 Dedicated Architect</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 4. FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Frequently Asked Questions on Pricing
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Clear answers regarding payments, invoices, GST input credit, and ongoing support.
            </p>
          </div>

          <div className="space-y-3 pt-2">
            {pricingFaqs.map((faq, idx) => (
              <div 
                key={idx}
                className="rounded-2xl bg-slate-900/80 border border-slate-800 overflow-hidden transition"
              >
                <button
                  onClick={() => {
                    launchSoundEngine.playClickTick();
                    setActiveFaq(activeFaq === idx ? null : idx);
                  }}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 text-sm font-bold text-white hover:text-cyan-300 transition cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-cyan-400 shrink-0 transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {activeFaq === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Partners Slider */}
        <PartnersSlider 
          title="Technology Infrastructure & Banking Partners"
          badgeText="TRUSTED ECOSYSTEM"
          variant="compact"
        />

      </div>
    </div>
  );
};
