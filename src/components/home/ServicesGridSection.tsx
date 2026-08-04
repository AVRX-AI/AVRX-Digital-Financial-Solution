import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Globe,
  Smartphone,
  Share2,
  Search,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Zap,
  ShieldCheck,
  TrendingUp,
  Code2,
  Cpu,
  Lock,
  Target,
  Award,
  MapPin,
  DollarSign,
  FileCheck,
  Server,
  Building2,
  Layers,
  Gift,
  Coins,
  Users
} from 'lucide-react';

export default function ServicesGridSection() {
  const [selectedCategory, setSelectedCategory] = useState<'website' | 'app' | 'seo' | 'marketing' | 'loans_insurance' | 'registration_materials' | 'join_earn'>('website');

  const categories = [
    { id: 'website', label: 'Website Design' },
    { id: 'app', label: 'iOS & Android Apps' },
    { id: 'seo', label: 'SEO & Google Rank' },
    { id: 'marketing', label: 'Digital Marketing & Ads' },
    { id: 'loans_insurance', label: 'Loans & Insurance' },
    { id: 'registration_materials', label: 'Registration & Materials' },
    { id: 'join_earn', label: 'Join us & Earn 💰', highlight: true },
  ];

  const featuredServices = [
    // --- WEBSITE DESIGN (3 Services) ---
    {
      id: 'website-design',
      title: 'Enterprise & eCommerce Website Design',
      category: 'website',
      icon: Globe,
      badge: 'TOP RATED',
      desc: 'CRED & Linear inspired ultra-fast websites built with React, Next.js, and Tailwind CSS. Optimized for 99+ Google PageSpeed and high conversion rates.',
      highlights: ['Custom UI/UX Design System', '0.6s LCP Core Web Vitals', 'eCommerce & Payment Gateways', 'SEO & Schema Markup Ready'],
      startingPrice: '₹24,999',
      path: '/services/website-design',
      gradient: 'from-blue-600/20 via-blue-500/10 to-transparent',
      borderColor: 'border-blue-500/30'
    },
    {
      id: 'framer-3d-website',
      title: '3D & Interactive Website Design',
      category: 'website',
      icon: Sparkles,
      badge: 'TRENDING DESIGN',
      desc: 'Immersive WebGL 3D visualizers, Framer Motion scroll animations, and interactive storytelling design that elevates corporate brand authority.',
      highlights: ['3D WebGL & Canvas Visualizers', 'Framer Motion Scroll Effects', 'Custom Micro-Interaction System', 'Sub-second 60 FPS Rendering'],
      startingPrice: '₹9,999',
      path: '/services/framer-3d-website',
      gradient: 'from-blue-600/20 via-cyan-500/10 to-transparent',
      borderColor: 'border-cyan-500/30'
    },
    {
      id: 'custom-website',
      title: 'Custom Web Application Design',
      category: 'website',
      icon: Code2,
      badge: 'ENTERPRISE',
      desc: 'Tailor-made SaaS interfaces, executive web portals, billing CRMs, and multi-tenant cloud application architectures.',
      highlights: ['Custom React & Node Architecture', 'REST & GraphQL APIs Integration', 'Role-Based Access Control (RBAC)', 'Scalable Cloud Microservices'],
      startingPrice: '₹14,999',
      path: '/services/custom-website',
      gradient: 'from-indigo-600/20 via-indigo-500/10 to-transparent',
      borderColor: 'border-indigo-500/30'
    },

    // --- APPLICATION DEVELOPMENT (3 Services) ---
    {
      id: 'app-development',
      title: 'iOS, Android & Flutter Cross-Platform Apps',
      category: 'app',
      icon: Smartphone,
      badge: 'HIGH DEMAND',
      desc: 'Native and cross-platform mobile apps for Fintech, HealthTech, eCommerce, and SaaS startups with biometric auth and real-time cloud sync.',
      highlights: ['Flutter & React Native Cross-Build', 'App Store & Play Store Guarantee', 'SOC2 Security & Biometrics', 'Offline SQLite / Cloud Sync'],
      startingPrice: '₹24,999',
      path: '/services/application-development',
      gradient: 'from-cyan-600/20 via-cyan-500/10 to-transparent',
      borderColor: 'border-cyan-500/30'
    },
    {
      id: 'finance-app',
      title: 'Fintech & Bank-Grade Mobile Apps',
      category: 'app',
      icon: Lock,
      badge: 'FLAGSHIP',
      desc: 'High-security financial apps with AES-256 encryption, instant Aadhaar/PAN video KYC, UPI payments, and CRED-level visual polish.',
      highlights: ['Bank-grade AES-256 Encryption', 'Instant Video KYC Integration', 'UPI & Credit Card Payment Rails', 'CRED-level Visual Polish'],
      startingPrice: '₹39,999',
      path: '/services/finance-app',
      gradient: 'from-blue-600/20 via-indigo-500/10 to-transparent',
      borderColor: 'border-blue-500/30'
    },
    {
      id: 'business-app',
      title: 'Business Mobility & Field Team Apps',
      category: 'app',
      icon: Cpu,
      badge: 'ENTERPRISE',
      desc: 'Internal workforce mobility apps, field sales trackers, inventory managers, and executive command center dashboards.',
      highlights: ['Employee Attendance & GPS Tracking', 'Offline Field Data Collection', 'ERP / Salesforce / SAP Integration', 'Paperless Mobile Workflows'],
      startingPrice: '₹29,999',
      path: '/services/business-app',
      gradient: 'from-purple-600/20 via-purple-500/10 to-transparent',
      borderColor: 'border-purple-500/30'
    },

    // --- SEO & GOOGLE RANK (3 Services) ---
    {
      id: 'seo-optimization',
      title: 'Technical SEO & #1 Google Ranking Engine',
      category: 'seo',
      icon: Search,
      badge: '98% SUCCESS RATE',
      desc: 'Data-driven programmatic SEO, Schema.org architecture, technical crawl error repair, and Core Web Vitals LCP/CLS optimization.',
      highlights: ['Technical Site Audit & Fixes', 'Programmatic Schema & JSON-LD', 'Core Web Vitals Speed Optimization', 'Monthly Traffic Growth SLA'],
      startingPrice: '₹14,999 /mo',
      path: '/services/seo-optimization',
      gradient: 'from-purple-600/20 via-purple-500/10 to-transparent',
      borderColor: 'border-purple-500/30'
    },
    {
      id: 'local-seo',
      title: 'Local SEO & Google Maps Dominance',
      category: 'seo',
      icon: MapPin,
      badge: 'LOCAL LEADER',
      desc: 'Dominate Google Maps 3-Pack and local search with GMB optimization, local citations, and automated customer review funnels.',
      highlights: ['Google Business Profile Optimization', 'Local NAP Citation Building', 'Automated 5-Star Review Funnel', 'High Intent Foot Traffic & Calls'],
      startingPrice: '₹4,999 /mo',
      path: '/services/local-seo',
      gradient: 'from-emerald-600/20 via-emerald-500/10 to-transparent',
      borderColor: 'border-emerald-500/30'
    },
    {
      id: 'off-page-seo',
      title: 'High-DA Backlinks & Digital PR SLA',
      category: 'seo',
      icon: TrendingUp,
      badge: 'HIGH DA 60+',
      desc: 'Earn high-authority DA 60+ contextual backlinks and editorial press mentions to outrank long-standing industry competitors.',
      highlights: ['White-hat Editorial Outreach', 'DA 50-80+ Contextual Link Placement', 'Digital PR & Journalist Pitching', 'Toxic Backlink Disavow Audits'],
      startingPrice: '₹9,999 /mo',
      path: '/services/off-page-seo',
      gradient: 'from-blue-600/20 via-cyan-500/10 to-transparent',
      borderColor: 'border-blue-500/30'
    },

    // --- DIGITAL MARKETING & ADS (3 Services) ---
    {
      id: 'digital-marketing',
      title: 'Performance Marketing & Meta/Google PPC',
      category: 'marketing',
      icon: Share2,
      badge: '3.8X AVG ROAS',
      desc: 'Precision-targeted Meta ad campaigns, Google Search & Shopping PPC, negative keyword pruning, and conversion tracking.',
      highlights: ['Google PPC & Shopping Ads', 'Meta & Instagram Ad Scaling', 'High Intent Keyword Bidding', 'CRO & Landing Page A/B Testing'],
      startingPrice: '₹14,999 /mo',
      path: '/services/digital-marketing',
      gradient: 'from-blue-600/20 via-cyan-500/10 to-transparent',
      borderColor: 'border-blue-500/30'
    },
    {
      id: 'instagram-marketing',
      title: 'Instagram Reels & Viral Social Growth',
      category: 'marketing',
      icon: Award,
      badge: 'VIRAL GROWTH',
      desc: 'High-converting video Reel scripting, aesthetic dark/luxury brand grid design, influencer outreach, and community growth.',
      highlights: ['Viral Reel Scripting & Editing', 'Aesthetic Dark/Luxury Grid Design', 'Influencer Campaign Management', 'Direct DM Conversion Funnels'],
      startingPrice: '₹4,999 /mo',
      path: '/services/instagram-marketing',
      gradient: 'from-purple-600/20 via-pink-500/10 to-transparent',
      borderColor: 'border-pink-500/30'
    },
    {
      id: 'lead-generation',
      title: 'B2B LinkedIn Lead Gen & WhatsApp API',
      category: 'marketing',
      icon: Target,
      badge: 'B2B DEDICATED',
      desc: 'Verified decision-maker contact mining, official WhatsApp API chatbot automation, and qualified meeting calendar booking.',
      highlights: ['Verified Executive Contact Mining', 'Official WhatsApp Business API Chatbot', 'Personalized Multi-touch Sequences', 'Direct Meeting Calendar Booking'],
      startingPrice: '₹4,999 /mo',
      path: '/services/lead-generation',
      gradient: 'from-cyan-600/20 via-blue-500/10 to-transparent',
      borderColor: 'border-cyan-500/30'
    },

    // --- LOANS & INSURANCE (3 Services - NO PRICE) ---
    {
      id: 'business-working-capital-loans',
      title: 'Collateral-Free Business Loans & Capital',
      category: 'loans_insurance',
      icon: DollarSign,
      badge: 'UP TO ₹20 CR',
      desc: 'Collateral-free working capital, machinery financing, MSME business expansion loans, and flexible overdraft limits from partner banks.',
      highlights: ['₹10 Lakhs to ₹20 Crores Disbursal', 'Lowest 8.35% Annual Interest Rates', 'In-Principle Sanction in 48 Hours', '100% Paperless & Hassle-Free SLA'],
      startingPrice: null,
      path: '/financial-solutions',
      gradient: 'from-blue-600/20 via-cyan-500/10 to-transparent',
      borderColor: 'border-blue-500/30'
    },
    {
      id: 'personal-lap-property-loans',
      title: 'Personal, LAP & Commercial Property Loans',
      category: 'loans_insurance',
      icon: Building2,
      badge: 'LOWEST EMI',
      desc: 'High-value Loan Against Property (LAP), commercial real estate loans, and executive personal capital with flexible tenure up to 15 years.',
      highlights: ['Up to 80% Property LTV Valuation', 'Flexible Tenure 12 to 180 Months', 'Balance Transfer & Top-Up SLA', 'Zero Prepayment Penalty Options'],
      startingPrice: null,
      path: '/financial-solutions',
      gradient: 'from-emerald-600/20 via-emerald-500/10 to-transparent',
      borderColor: 'border-emerald-500/30'
    },
    {
      id: 'corporate-health-cyber-insurance',
      title: 'Corporate Health, Cyber & Commercial Insurance',
      category: 'loans_insurance',
      icon: ShieldCheck,
      badge: '100% COVERAGE',
      desc: 'Comprehensive Group Health Insurance for workforce teams, Keyman insurance, Cyber Liability protection, and commercial asset coverage.',
      highlights: ['Cashless Claims Across 10,000+ Hospitals', 'Corporate Group Health & Term Covers', 'Cyber Attack & Data Theft Cover', 'Commercial Asset & Machinery Protection'],
      startingPrice: null,
      path: '/financial-solutions',
      gradient: 'from-purple-600/20 via-indigo-500/10 to-transparent',
      borderColor: 'border-purple-500/30'
    },

    // --- REGISTRATION & MATERIALS (3 Services - NO PRICE) ---
    {
      id: 'gst-itr-udyam-registration',
      title: 'GST, ITR & MSME Company Registration',
      category: 'registration_materials',
      icon: FileCheck,
      badge: 'GOVT VERIFIED',
      desc: 'Instant GST registration, zero-error GSTR-1/3B filings, Udyam MSME certificate, Income Tax Returns (ITR), and Private Limited incorporation.',
      highlights: ['Practicing CA Panel Compliance', 'Pvt Ltd, LLP, OPC & MSME Registration', 'Zero-Error Tax Audit Guarantee', '15-Minute SLA Response Desk'],
      startingPrice: null,
      path: '/tax-solutions',
      gradient: 'from-blue-600/20 via-cyan-500/10 to-transparent',
      borderColor: 'border-blue-500/30'
    },
    {
      id: 'website-themes-ui-materials',
      title: 'Premium Website Design Themes & UI Kits',
      category: 'registration_materials',
      icon: Layers,
      badge: 'PRO UI MATERIALS',
      desc: 'CRED & Linear inspired premium Framer templates, React Tailwind UI component systems, Figma design tokens, and developer licenses.',
      highlights: ['Clean Figma & React Code Source', 'Responsive 60 FPS Micro-Interactions', 'Commercial Royalty-Free License', 'Free Monthly Material Updates'],
      startingPrice: null,
      path: '/services/framer-3d-website',
      gradient: 'from-purple-600/20 via-pink-500/10 to-transparent',
      borderColor: 'border-pink-500/30'
    },
    {
      id: 'cloud-vps-server-hosting',
      title: 'Enterprise Web Hosting & NVMe Cloud Servers',
      category: 'registration_materials',
      icon: Server,
      badge: '99.99% UPTIME',
      desc: 'Ultra-fast NVMe VPS hosting, dedicated cloud server clusters, Wildcard SSL certificates, CDN speed acceleration, and 24/7 server monitoring.',
      highlights: ['High-Speed NVMe Storage Arrays', 'Free Wildcard SSL & DDoS Protection', 'Automated Daily S3 Cloud Backups', '24/7 Server Engineer SLA'],
      startingPrice: null,
      path: '/digital-products',
      gradient: 'from-amber-600/20 via-yellow-500/10 to-transparent',
      borderColor: 'border-amber-500/30'
    },

    // --- JOIN US & EARN (3 Earning Partner Programs - NO PRICE) ---
    {
      id: 'loan-insurance-referral-partner',
      title: 'Financial & Loan Referral Partner Program',
      category: 'join_earn',
      icon: Coins,
      badge: 'HIGH COMMISSIONS',
      desc: 'Partner with us by sharing leads for Business Loans, LAP, Machinery Loans & Insurance. Earn up to ₹50,000+ per successful loan disbursal.',
      highlights: ['Up to 2% Instant Payout per Loan Disbursal', 'Real-time Lead Status Tracking Dashboard', 'Zero Investment / Instant Partner Onboarding', 'Covers Business Loans, LAP & Insurance'],
      startingPrice: null,
      path: '/contact',
      gradient: 'from-amber-600/25 via-yellow-500/15 to-transparent',
      borderColor: 'border-amber-500/40'
    },
    {
      id: 'web-app-referral-partner',
      title: 'Web & App Project Affiliate Partner',
      category: 'join_earn',
      icon: Gift,
      badge: 'PASSIVE INCOME',
      desc: 'Connect clients needing Website Design, Mobile Apps, Framer 3D, or Custom SaaS development and earn lucrative commission per closed deal.',
      highlights: ['10% to 20% Direct Commission per Deal', 'Weekly Automated Bank Transfers', 'Dedicated Sales Closing & Tech Support', 'Covers Websites, iOS/Android & SaaS'],
      startingPrice: null,
      path: '/contact',
      gradient: 'from-pink-600/25 via-purple-500/15 to-transparent',
      borderColor: 'border-pink-500/40'
    },
    {
      id: 'tax-legal-referral-partner',
      title: 'Tax, GST & Legal Registration Partner',
      category: 'join_earn',
      icon: Users,
      badge: 'RECURRING EARNINGS',
      desc: 'Refer business owners & startups for GST Registration, ITR Filing, Udyam certificate & Company Registration to build steady monthly income.',
      highlights: ['Instant Commission on Every GST / ITR Lead', 'Bulk Client Referral Cash Bonuses', '100% Practicing CA Backed Operations', 'Covers GST, ITR, Udyam & Pvt Ltd'],
      startingPrice: null,
      path: '/contact',
      gradient: 'from-emerald-600/25 via-teal-500/15 to-transparent',
      borderColor: 'border-emerald-500/40'
    }
  ];

  const filteredServices = featuredServices.filter(s => s.category === selectedCategory);

  return (
    <section id="digital-services" className="py-24 bg-[#06070B] border-t border-white/10 relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 -right-48 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>World-Class Solutions & Partner Earnings</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-extrabold text-white tracking-tight">
              Crafting High-Performance <br />
              <span className="bg-gradient-to-r from-blue-400 via-amber-300 to-cyan-300 bg-clip-text text-transparent">
                Digital & Financial Assets
              </span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Explore web & mobile engineering, SEO rank engine, loans, GST filings, or join our partner program to earn high commissions by sharing leads!
            </p>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white text-sm font-semibold transition-all group self-start md:self-auto"
          >
            <span>View All Solutions</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-blue-400" />
          </Link>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => {
            const isHighlight = cat.highlight;
            const isSelected = selectedCategory === cat.id;

            if (isHighlight) {
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id as any)}
                  className={`relative group px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap overflow-hidden border ${
                    isSelected
                      ? 'bg-gradient-to-r from-amber-500 via-pink-500 to-emerald-500 text-white shadow-xl shadow-amber-500/30 border-amber-300 scale-105'
                      : 'bg-gradient-to-r from-amber-500/20 via-pink-500/20 to-emerald-500/20 hover:from-amber-500/40 hover:to-emerald-500/40 text-amber-300 border-amber-500/50 hover:border-amber-400'
                  }`}
                >
                  {/* Subtle animated pulse ring */}
                  <span className="absolute -top-1 -right-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
                  </span>

                  <span className="flex items-center gap-1.5 font-extrabold tracking-wide uppercase text-[11px] sm:text-xs">
                    <Sparkles className="w-4 h-4 animate-spin text-yellow-300" style={{ animationDuration: '4s' }} />
                    <span className="bg-gradient-to-r from-yellow-200 via-white to-emerald-200 bg-clip-text text-transparent drop-shadow-sm">
                      {cat.label}
                    </span>
                  </span>
                </button>
              );
            }

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as any)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                  isSelected
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/25 border border-blue-400/30'
                    : 'bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Services Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            const hasPrice = service.startingPrice !== null && service.startingPrice !== undefined;
            const isJoinEarn = service.category === 'join_earn';

            return (
              <div
                key={service.id}
                className={`glass-card rounded-3xl p-7 border ${service.borderColor} bg-gradient-to-b ${service.gradient} hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden`}
              >
                <div>
                  {/* Card Header Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                      isJoinEarn
                        ? 'bg-amber-500/20 border border-amber-500/40 text-amber-300 group-hover:bg-amber-500 group-hover:text-black'
                        : 'bg-blue-500/15 border border-blue-500/30 text-blue-400 group-hover:bg-blue-500 group-hover:text-white'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase border ${
                      isJoinEarn
                        ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 animate-pulse'
                        : 'bg-white/10 text-white border-white/15'
                    }`}>
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <h3 className={`text-xl font-poppins font-bold text-white mb-2.5 transition-colors ${
                    isJoinEarn ? 'group-hover:text-amber-300' : 'group-hover:text-blue-300'
                  }`}>
                    {service.title}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                    {service.desc}
                  </p>

                  {/* Highlight Checklist */}
                  <ul className="space-y-2 mb-6">
                    {service.highlights.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${isJoinEarn ? 'text-amber-400' : 'text-cyan-400'}`} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Footer Pricing & CTA */}
                <div className="pt-5 border-t border-white/10 flex items-center justify-between">
                  <div>
                    {hasPrice ? (
                      <>
                        <span className="text-[10px] text-slate-400 uppercase tracking-widest block">Starting At</span>
                        <span className="text-base font-poppins font-bold text-white">{service.startingPrice}</span>
                      </>
                    ) : isJoinEarn ? (
                      <>
                        <span className="text-[10px] text-amber-400 uppercase tracking-widest font-bold block">Partner Payout</span>
                        <span className="text-xs font-poppins font-bold text-amber-200">High Commission SLA</span>
                      </>
                    ) : (
                      <>
                        <span className="text-[10px] text-cyan-400 uppercase tracking-widest font-semibold block">SLA Assurance</span>
                        <span className="text-xs font-poppins font-bold text-slate-300">Fast Sanction & Process</span>
                      </>
                    )}
                  </div>

                  <Link
                    to={service.path}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all group/btn ${
                      isJoinEarn
                        ? 'bg-amber-500/20 hover:bg-gradient-to-r hover:from-amber-500 hover:to-emerald-500 text-amber-200 hover:text-white border border-amber-500/40'
                        : 'bg-white/10 hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-500 text-white'
                    }`}
                  >
                    <span>{isJoinEarn ? 'Join & Submit Lead' : hasPrice ? 'Explore SLA' : 'Enquire Now'}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom SLA Assurance Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-amber-900/30 via-slate-900/50 to-blue-900/30 border border-amber-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-300 flex items-center justify-center border border-amber-500/30 flex-shrink-0">
              <Coins className="w-6 h-6 animate-bounce" style={{ animationDuration: '2s' }} />
            </div>
            <div>
              <h4 className="text-base font-poppins font-bold text-white">Want to become an official AVRX Digital Partner & Earn?</h4>
              <p className="text-xs text-slate-400">Share leads for Loans, Insurance, Website, Mobile Apps, GST & ITR filings to earn attractive payouts!</p>
            </div>
          </div>
          <Link
            to="/contact"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-emerald-400 text-black font-extrabold text-xs sm:text-sm hover:scale-105 transition-transform whitespace-nowrap shadow-lg shadow-amber-500/20"
          >
            Register as Partner Now 🚀
          </Link>
        </div>
      </div>
    </section>
  );
}


