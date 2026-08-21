import React from 'react';
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
  Users
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: string, slug?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
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
      border: 'border-cyan-500/30',
      bg: 'bg-cyan-500/10',
      desc: 'Custom high-performance websites, e-commerce stores, Android/iOS apps, and enterprise web portals.'
    },
    {
      num: '02',
      title: 'Capital & Finance',
      category: 'Fund & Expand',
      color: 'text-emerald-400',
      border: 'border-emerald-500/30',
      bg: 'bg-emerald-500/10',
      desc: 'Collateral-free business capital, personal loans, home financing, and PMEGP / MUDRA government subsidies.'
    },
    {
      num: '03',
      title: 'Tax & Compliance',
      category: 'Comply & Protect',
      color: 'text-amber-400',
      border: 'border-amber-500/30',
      bg: 'bg-amber-500/10',
      desc: 'Chartered Accountant backed GST return filing, error-free ITR submission, MSME Udyam, and company incorporation.'
    },
    {
      num: '04',
      title: 'Asset Protection',
      category: 'Risk Mitigation',
      color: 'text-purple-400',
      border: 'border-purple-500/30',
      bg: 'bg-purple-500/10',
      desc: '100% cashless health floater policies, instant vehicle insurance renewals, and commercial asset protection.'
    },
    {
      num: '05',
      title: 'AI Intelligence',
      category: 'Automate & Lead',
      color: 'text-pink-400',
      border: 'border-pink-500/30',
      bg: 'bg-pink-500/10',
      desc: 'Interactive business tools—Word to PDF conversion, AI image generation, loan calculators, and marketing writers.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#050811] text-white pt-24 pb-20 selection:bg-cyan-500 selection:text-slate-950">
      <SEO
        title="About AVRX Digital & Financial Solution | Next-Gen Enterprise Ecosystem"
        description="Learn about AVRX—combining digital engineering, business financing, tax compliance, insurance, and AI automation under one roof."
      />

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
          <span className="text-cyan-300 font-semibold">About Us</span>
        </nav>

        {/* 1. Page Hero Section */}
        <div className="text-center max-w-4xl mx-auto my-8 space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(0,240,255,0.15)]">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>THE AVRX INTEGRATED ECOSYSTEM</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight">
            Fintech + AI + <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400">Digital Engineering</span> Under One Roof.
          </h1>

          <p className="text-slate-300 text-sm sm:text-lg leading-relaxed max-w-3xl mx-auto">
            AVRX was founded on a simple conviction: modern businesses and professionals shouldn't need five disconnected vendors to build, finance, protect, and scale their future.
          </p>
        </div>

        {/* 2. Partners Slider */}
        <div className="my-10">
          <PartnersSlider 
            title="Trusted Ecosystem & Technical Alliances"
            badgeText="STRATEGIC REACH"
            description="Powering Indian businesses with enterprise cloud infrastructure, banking tie-ups, and legal accuracy."
            variant="compact"
          />
        </div>

        {/* 3. The 5 Ecosystem Pillars */}
        <div className="my-16 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span>THE FIVE PILLARS</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white">
              End-to-End Enterprise Architecture
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {ecosystemPillars.map((pillar, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-3 flex flex-col justify-between hover:border-cyan-500/40 transition"
              >
                <div className="space-y-2">
                  <div className={`w-8 h-8 rounded-xl ${pillar.bg} border ${pillar.border} flex items-center justify-center ${pillar.color} font-mono font-black text-xs`}>
                    {pillar.num}
                  </div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">{pillar.category}</div>
                  <h3 className="text-lg font-bold text-white">{pillar.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Mission & Vision Statements */}
        <div className="my-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-cyan-950/40 via-slate-900 to-slate-950 border border-cyan-500/30 space-y-4 shadow-xl">
            <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 w-fit">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-black text-white">Our Mission</h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              To empower 100,000+ Indian entrepreneurs, businesses, and professionals with accessible, transparent, and ultra-modern digital software, capital options, and regulatory compliance without bureaucratic friction.
            </p>
          </div>

          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-indigo-950/40 via-slate-900 to-slate-950 border border-indigo-500/30 space-y-4 shadow-xl">
            <div className="p-3.5 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 w-fit">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-black text-white">Our Vision</h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              To be India’s premier unified digital and financial operating ecosystem—where any business can launch, finance, insure, and automate operations within a single, secure, tech-enabled interface.
            </p>
          </div>
        </div>

        {/* 5. Core Values */}
        <div className="my-20 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>THE AVRX ETHOS</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white">
              Built on Principles of Trust & Innovation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-2 hover:border-cyan-500/40 transition"
              >
                <div className="text-cyan-400 font-mono font-bold text-xs">0{idx + 1} / ETHOS</div>
                <h4 className="font-bold text-white text-base">{val.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 6. High-Impact CTA */}
        <div className="my-16 rounded-3xl bg-gradient-to-r from-cyan-950 via-slate-900 to-indigo-950 border border-cyan-500/40 p-8 sm:p-14 text-center space-y-6 relative overflow-hidden shadow-[0_20px_60px_rgba(0,240,255,0.15)]">
          <div className="max-w-2xl mx-auto space-y-3 relative z-10">
            <h3 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Let's Build Something Great Together
            </h3>
            <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
              Connect with the AVRX team to explore tailored digital engineering, financial options, or partnership opportunities.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 relative z-10">
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 text-slate-950 font-black text-sm shadow-[0_0_30px_rgba(0,240,255,0.4)] hover:scale-105 transition flex items-center gap-2"
            >
              <span>Connect with AVRX Leadership</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('partner')}
              className="px-6 py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-white font-bold text-xs transition flex items-center gap-2"
            >
              <span>Explore Partner Program</span>
              <Users className="w-3.5 h-3.5 text-cyan-400" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
