import React, { useState } from 'react';
import { SEO } from '../components/common/SEO';
import { PartnersSlider } from '../components/common/PartnersSlider';
import { 
  Layers, 
  ShieldCheck, 
  Zap, 
  Globe2, 
  ArrowRight, 
  ChevronRight,
  Sparkles,
  Target,
  Eye,
  HeartHandshake,
  Lock,
  Cpu,
  CheckCircle2,
  TrendingUp,
  Building2,
  Users,
  Award,
  BarChart3,
  Flame,
  FileCheck,
  Check
} from 'lucide-react';
import { launchSoundEngine } from '../utils/launchSoundEngine';

interface AboutPageProps {
  onNavigate: (page: string, slug?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const [activePillar, setActivePillar] = useState<number>(0);

  const coreValues = [
    {
      title: 'Unified Accountability',
      desc: 'One integrated point of contact for your company’s digital software, capital access, tax compliance, and risk protection.'
    },
    {
      title: '100% Digital Execution',
      desc: 'Zero physical paperwork friction. Cloud-based workflows, automated status tracking, and rapid turnaround.'
    },
    {
      title: 'Absolute Transparency',
      desc: 'No hidden licensing fees, surprise renewal penalties, or vague service contracts. Everything is clear and upfront.'
    },
    {
      title: 'Cutting-Edge Craftsmanship',
      desc: 'Modern engineering standards—TypeScript architecture, sub-second speed benchmarks, and CA-verified statutory accuracy.'
    }
  ];

  const ecosystemPillars = [
    {
      num: '01',
      title: 'Digital Engineering',
      category: 'Build & Scale',
      color: 'text-cyan-400',
      border: 'border-cyan-500/40',
      bg: 'bg-cyan-500/10',
      glow: 'shadow-[0_0_30px_rgba(0,240,255,0.2)]',
      desc: 'Custom high-performance websites, e-commerce stores, Android/iOS apps, and enterprise web portals with sub-second page loads.',
      capabilities: ['Vite + React 18 SPA Architecture', 'SEO & Core Web Vitals 99+ score', 'Scalable Cloud Hosting on Tier-4 DCs', 'Custom ERP & Booking Portals']
    },
    {
      num: '02',
      title: 'Capital & Finance',
      category: 'Fund & Expand',
      color: 'text-emerald-400',
      border: 'border-emerald-500/40',
      bg: 'bg-emerald-500/10',
      glow: 'shadow-[0_0_30px_rgba(16,185,129,0.2)]',
      desc: 'Collateral-free business capital, personal loans, home financing, and PMEGP / MUDRA government subsidies through 40+ banks.',
      capabilities: ['Collateral-Free Business Loans up to ₹50L', 'PMEGP up to 35% Govt Capital Subsidy', 'Lowest Bank Interest Rates from 8.40%', 'Fast-Track In-Principle Disbursal']
    },
    {
      num: '03',
      title: 'Tax & Compliance',
      category: 'Comply & Protect',
      color: 'text-amber-400',
      border: 'border-amber-500/40',
      bg: 'bg-amber-500/10',
      glow: 'shadow-[0_0_30px_rgba(245,158,11,0.2)]',
      desc: 'Chartered Accountant backed GST return filing, error-free ITR submission, MSME Udyam, and company incorporation.',
      capabilities: ['100% CA Scrutinized Filings', 'Automated GSTR-2B ITC Matching', 'New Company SPICe+ MCA Allotment', 'Proactive Notice Resolution Desk']
    },
    {
      num: '04',
      title: 'Asset Protection',
      category: 'Risk Mitigation',
      color: 'text-purple-400',
      border: 'border-purple-500/40',
      bg: 'bg-purple-500/10',
      glow: 'shadow-[0_0_30px_rgba(168,85,247,0.2)]',
      desc: '100% cashless health floater policies, instant vehicle insurance renewals, and commercial asset protection with IRDAI insurers.',
      capabilities: ['10,000+ Cashless Hospital Network', 'Instant Zero-Depreciation Car Policy', 'Schengen & Global Visa Travel Covers', '24/7 Dedicated Emergency Claim Desk']
    },
    {
      num: '05',
      title: 'AI Intelligence',
      category: 'Automate & Lead',
      color: 'text-pink-400',
      border: 'border-pink-500/40',
      bg: 'bg-pink-500/10',
      glow: 'shadow-[0_0_30px_rgba(236,72,153,0.2)]',
      desc: 'Interactive business tools—Word to PDF conversion, AI image generation, loan calculators, and marketing writers.',
      capabilities: ['Document Format Conversion Utilities', 'AI Image & Creative Generator', 'Smart EMI & Subsidy Calculators', 'Copywriting & Content Assistance']
    }
  ];

  const milestones = [
    { stat: '5,000+', label: 'Clients Empowered', desc: 'Across India in digital, tax & finance' },
    { stat: '₹25Cr+', label: 'Loan Facilitated', desc: 'Disbursed through verified banking partners' },
    { stat: '99.98%', label: 'Cloud Uptime SLA', desc: 'Guaranteed high-speed web infrastructure' },
    { stat: '100%', label: 'CA & IRDAI Verified', desc: 'Institutional compliance standards' }
  ];

  return (
    <div className="min-h-screen bg-[#040713] text-white pt-24 pb-20 selection:bg-cyan-500 selection:text-slate-950">
      <SEO
        title="About AVRX Digital & Financial Solution | Next-Gen Enterprise Ecosystem"
        description="Learn about AVRX—combining digital engineering, business financing, tax compliance, insurance, and AI automation under one roof."
      />

      {/* Ambient background glows */}
      <div className="fixed top-20 left-1/4 w-[700px] h-[500px] bg-cyan-500/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="fixed bottom-20 right-1/4 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[180px] pointer-events-none" />

      {/* Main Container - Stretched Widescreen Layout */}
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10 space-y-16">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="pt-2 flex items-center gap-2 text-xs text-slate-400">
          <button 
            onClick={() => onNavigate('home')}
            className="hover:text-cyan-400 transition-colors"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-cyan-300 font-semibold">About Us</span>
        </nav>

        {/* 1. Page Hero Section */}
        <div className="text-center max-w-4xl mx-auto space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-widest font-mono shadow-[0_0_20px_rgba(0,240,255,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>THE AVRX INTEGRATED ECOSYSTEM</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight">
            Fintech + AI + <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300">
              Digital Engineering
            </span> Under One Roof.
          </h1>

          <p className="text-slate-300 text-base sm:text-xl leading-relaxed max-w-3xl mx-auto font-normal">
            AVRX was founded on a simple conviction: modern businesses and professionals shouldn&apos;t need five disconnected vendors to build, finance, protect, and scale their future.
          </p>
        </div>

        {/* 2. Key Metrics Showcase */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {milestones.map((m, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-3xl bg-slate-950/90 border border-slate-800 backdrop-blur-xl space-y-2 hover:border-cyan-500/40 transition group"
            >
              <div className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-mono group-hover:scale-105 transition-transform">
                {m.stat}
              </div>
              <h4 className="text-sm font-bold text-white">{m.label}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>

        {/* 3. Interactive Ecosystem Pillars Showcase */}
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase font-mono">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span>THE FIVE CORE PILLARS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white">
              End-to-End Enterprise Architecture
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Click any pillar below to inspect its integrated technical capabilities.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {ecosystemPillars.map((pillar, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActivePillar(idx);
                  launchSoundEngine.playClickTick();
                }}
                className={`p-5 rounded-2xl border text-left transition-all cursor-pointer ${
                  activePillar === idx 
                    ? `bg-slate-900 border-cyan-400 ${pillar.glow} scale-105` 
                    : 'bg-slate-950/80 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className={`w-7 h-7 rounded-lg ${pillar.bg} border ${pillar.border} flex items-center justify-center ${pillar.color} font-mono font-black text-xs mb-2`}>
                  {pillar.num}
                </div>
                <div className="text-[10px] font-mono uppercase text-slate-400">{pillar.category}</div>
                <div className="text-xs sm:text-sm font-bold text-white mt-1">{pillar.title}</div>
              </button>
            ))}
          </div>

          {/* Active Pillar Detail Box */}
          <div className="p-6 sm:p-10 rounded-3xl bg-slate-950/95 border-2 border-cyan-500/40 backdrop-blur-2xl shadow-[0_0_40px_rgba(0,240,255,0.15)] space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold uppercase text-cyan-400">{ecosystemPillars[activePillar].category}</span>
                <h3 className="text-2xl sm:text-3xl font-black text-white">{ecosystemPillars[activePillar].title}</h3>
              </div>
              <div className="text-xs font-mono text-slate-400">PILLAR {ecosystemPillars[activePillar].num} OF 05</div>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {ecosystemPillars[activePillar].desc}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {ecosystemPillars[activePillar].capabilities.map((cap, cIdx) => (
                <div key={cIdx} className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4. Mission & Vision Statements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-cyan-950/40 via-slate-950 to-slate-900 border border-cyan-500/30 space-y-4 shadow-xl">
            <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 w-fit">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-black text-white">Our Mission</h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              To empower 100,000+ Indian entrepreneurs, businesses, and professionals with accessible, transparent, and ultra-modern digital software, capital options, and regulatory compliance without bureaucratic friction.
            </p>
          </div>

          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-indigo-950/40 via-slate-950 to-slate-900 border border-indigo-500/30 space-y-4 shadow-xl">
            <div className="p-3.5 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 w-fit">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-black text-white">Our Vision</h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              To be India&apos;s premier unified digital and financial operating ecosystem—where any business can launch, finance, insure, and automate operations within a single, secure, tech-enabled interface.
            </p>
          </div>
        </div>

        {/* 5. Core Values */}
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>THE AVRX ETHOS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white">
              Built on Principles of Trust &amp; Innovation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-3xl bg-slate-950/90 border border-slate-800 space-y-2 hover:border-cyan-500/40 transition"
              >
                <div className="text-cyan-400 font-mono font-bold text-xs">0{idx + 1} / ETHOS</div>
                <h4 className="font-bold text-white text-base">{val.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 6. High-Impact CTA */}
        <div className="rounded-3xl bg-gradient-to-r from-cyan-950 via-slate-950 to-indigo-950 border border-cyan-500/40 p-8 sm:p-12 text-center space-y-6 relative overflow-hidden shadow-[0_20px_60px_rgba(0,240,255,0.2)]">
          <div className="max-w-2xl mx-auto space-y-3 relative z-10">
            <h3 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Let&apos;s Build Something Great Together
            </h3>
            <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
              Connect with the AVRX team to explore tailored digital engineering, financial options, or partnership opportunities.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 relative z-10">
            <button
              onClick={() => {
                launchSoundEngine.playClickTick();
                onNavigate('contact');
              }}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 text-slate-950 font-black text-xs uppercase tracking-wider shadow-[0_0_30px_rgba(0,240,255,0.4)] hover:scale-105 transition flex items-center gap-2 cursor-pointer"
            >
              <span>Connect with AVRX Leadership</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                launchSoundEngine.playClickTick();
                onNavigate('partner');
              }}
              className="px-6 py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-white font-bold text-xs uppercase transition flex items-center gap-2 cursor-pointer"
            >
              <span>Explore Partner Program</span>
              <Users className="w-3.5 h-3.5 text-cyan-400" />
            </button>
          </div>
        </div>

        {/* Partners Slider */}
        <PartnersSlider 
          title="Trusted Ecosystem &amp; Technical Alliances"
          badgeText="STRATEGIC REACH"
          variant="compact"
        />

      </div>
    </div>
  );
};
