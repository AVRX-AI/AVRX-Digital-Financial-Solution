import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  PhoneCall, 
  ShieldCheck, 
  Zap, 
  Code2, 
  DollarSign, 
  FileText, 
  Shield, 
  Cpu,
  ChevronDown,
  Layers,
  CheckCircle2
} from 'lucide-react';
import { AshokaChakraHolo } from '../common/AshokaChakraHolo';
import { TricolourRibbonWave } from '../common/TricolourRibbonWave';

interface HeroProps {
  onNavigate: (page: string, slug?: string) => void;
}

interface CoreModule {
  id: string;
  label: string;
  category: string;
  color: string;
  glow: string;
  icon: React.ElementType;
  page: string;
  tagline: string;
  highlights: string[];
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [activeModuleId, setActiveModuleId] = useState<string>('digital');

  const modules: CoreModule[] = [
    {
      id: 'digital',
      label: 'Digital Solutions',
      category: 'Engineering & Growth',
      color: 'from-cyan-400 to-blue-500',
      glow: 'shadow-[0_0_25px_rgba(0,240,255,0.4)]',
      icon: Code2,
      page: 'digital-solutions',
      tagline: 'High-performance websites, mobile apps, SaaS & SEO ranking.',
      highlights: ['Custom Websites', 'Android & iOS Apps', 'E-Commerce Stores', 'Search Optimization']
    },
    {
      id: 'finance',
      label: 'Financial Services',
      category: 'Capital & Lending',
      color: 'from-emerald-400 to-teal-500',
      glow: 'shadow-[0_0_25px_rgba(16,185,129,0.4)]',
      icon: DollarSign,
      page: 'financial-solutions',
      tagline: 'Personal, business, vehicle, home loans & PMEGP/MUDRA schemes.',
      highlights: ['Personal & Business Loans', 'Home & Vehicle Capital', 'MUDRA & PMEGP Schemes', 'Low Interest EMI']
    },
    {
      id: 'tax',
      label: 'Tax & Compliance',
      category: 'Statutory & Legal',
      color: 'from-amber-400 to-orange-500',
      glow: 'shadow-[0_0_25px_rgba(245,158,11,0.4)]',
      icon: FileText,
      page: 'tax-solutions',
      tagline: 'GST registration, monthly filings, ITR filing & Udyam MSME.',
      highlights: ['GST Registration & Filing', 'ITR Return Submission', 'Udyam / MSME Certificate', 'Company Incorporation']
    },
    {
      id: 'insurance',
      label: 'Insurance Protection',
      category: 'Risk Mitigation',
      color: 'from-purple-400 to-pink-500',
      glow: 'shadow-[0_0_25px_rgba(168,85,247,0.4)]',
      icon: Shield,
      page: 'insurance-solutions',
      tagline: 'Health, motor vehicle, international travel & business property.',
      highlights: ['Cashless Health Cover', 'Comprehensive Motor Policy', 'Overseas Travel Cover', 'Commercial Property']
    },
    {
      id: 'ai-tools',
      label: 'AVRX AI Tools',
      category: 'In-Browser Intelligence',
      color: 'from-rose-400 to-indigo-500',
      glow: 'shadow-[0_0_25px_rgba(244,63,94,0.4)]',
      icon: Cpu,
      page: 'ai-tools',
      tagline: 'Instant Word-to-PDF, Text-to-Image, EMI calculators & SEO audits.',
      highlights: ['Document Converters', 'AI Image Generator', 'EMI & Tax Calculators', 'Live Website Health Audit']
    }
  ];

  const activeModule = modules.find(m => m.id === activeModuleId) || modules[0];

  const handleScrollDown = () => {
    const servicesElement = document.getElementById('solutions-section');
    if (servicesElement) {
      servicesElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: window.innerHeight * 0.85, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-28 overflow-hidden bg-[#050811]">
      {/* 1. Global Ambient Atmosphere Glows */}
      <div className="absolute -top-12 -left-20 w-[450px] sm:w-[650px] h-[450px] bg-gradient-to-br from-[#FF9933]/15 via-[#FF9933]/5 to-transparent rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[450px] bg-gradient-to-tr from-cyan-500/10 via-white/5 to-blue-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute -bottom-10 right-0 w-[450px] sm:w-[600px] h-[450px] bg-gradient-to-tl from-[#138808]/15 via-[#138808]/5 to-transparent rounded-full blur-[130px] pointer-events-none" />

      {/* 2. Flowing Tricolour 3D Digital Ribbon Wave */}
      <TricolourRibbonWave opacity={0.4} />

      {/* 3. Ashoka Chakra Holographic Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0">
        <AshokaChakraHolo size={560} opacity={0.06} className="hidden md:block" />
        <AshokaChakraHolo size={320} opacity={0.04} className="block md:hidden" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid: Left Copy & Right 3D AI Intelligence Core */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headline & Action CTAs */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-7 text-center lg:text-left">
            
            {/* Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/90 backdrop-blur-md border border-[#FF9933]/40 shadow-[0_0_15px_rgba(255,153,51,0.25)] text-xs font-bold text-white transition-all hover:scale-105">
                <span className="text-sm">🇮🇳</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9933] via-white to-[#138808]">
                  Proudly Indian | 15 August
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs font-semibold shadow-[0_0_20px_rgba(0,240,255,0.15)]">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse shrink-0" />
                <span>Next-Gen Platform</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
              Build. Grow. Secure.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                — With AVRX
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Digital solutions, financial services, tax assistance, insurance and intelligent AI tools — all in one powerful platform.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-1">
              <button
                onClick={() => onNavigate('services')}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 hover:brightness-110 text-slate-950 font-black text-base rounded-2xl shadow-[0_0_35px_rgba(0,240,255,0.4)] transition transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto px-7 py-4 bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 font-bold text-base rounded-2xl transition flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <PhoneCall className="w-5 h-5 text-cyan-400" />
                <span>Talk to AVRX</span>
              </button>
            </div>

            {/* Fast Feature Highlights */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% Digital & Paperless</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-cyan-400" />
                <span>AI-Powered Velocity</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>Dedicated Relationship Manager</span>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Interactive AI Intelligence Core */}
          <div className="lg:col-span-6 xl:col-span-6 relative">
            <div className="relative rounded-3xl bg-slate-950/80 border border-slate-800 p-6 sm:p-8 backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden">
              
              {/* Subtle orbital glowing rings */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[340px] h-[340px] rounded-full border border-cyan-500/15 animate-[spin_40s_linear_infinite]" />
                <div className="absolute w-[440px] h-[440px] rounded-full border border-blue-500/10 animate-[spin_60s_linear_infinite_reverse]" />
                <div className="absolute w-40 h-40 rounded-full bg-cyan-500/10 blur-2xl animate-pulse" />
              </div>

              {/* Header inside Core */}
              <div className="flex items-center justify-between mb-6 relative z-10">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-cyan-400 animate-ping" />
                  <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider">
                    AVRX Digital Intelligence Core
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">
                  Interactive Matrix
                </span>
              </div>

              {/* 5 Interactive Module Selector Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 relative z-10 mb-6">
                {modules.map(mod => {
                  const Icon = mod.icon;
                  const isActive = mod.id === activeModuleId;
                  return (
                    <button
                      key={mod.id}
                      onMouseEnter={() => setActiveModuleId(mod.id)}
                      onClick={() => onNavigate(mod.page)}
                      className={`p-3 rounded-2xl text-left transition-all border flex flex-col justify-between space-y-2 cursor-pointer ${
                        isActive
                          ? `bg-slate-900 border-cyan-400 ${mod.glow} scale-102`
                          : 'bg-slate-950/80 hover:bg-slate-900/90 border-slate-800/80 text-slate-400'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className={`p-2 rounded-xl bg-slate-950 border border-slate-800 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        )}
                      </div>
                      <div>
                        <div className={`text-xs font-bold ${isActive ? 'text-white' : 'text-slate-300'}`}>
                          {mod.label}
                        </div>
                        <div className="text-[10px] text-slate-500 font-mono truncate">
                          {mod.category}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Active Module Detailed Hologram Display Card */}
              <div className="relative z-10 p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950 border border-cyan-500/30 space-y-4 shadow-xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                      {activeModule.category}
                    </span>
                    <span className="text-xs font-mono text-slate-400">• Active Module</span>
                  </div>
                  <button
                    onClick={() => onNavigate(activeModule.page)}
                    className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 cursor-pointer"
                  >
                    <span>Open Module</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div>
                  <h3 className="text-xl font-black text-white flex items-center gap-2">
                    <span>{activeModule.label}</span>
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    {activeModule.tagline}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800/80">
                  {activeModule.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span className="truncate">{h}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => onNavigate(activeModule.page)}
                  className="w-full py-3 bg-gradient-to-r from-cyan-400 to-blue-500 hover:brightness-110 text-slate-950 text-xs font-bold rounded-xl transition flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(0,240,255,0.3)]"
                >
                  <span>Explore {activeModule.label}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* 5. Trust / Quick Stats Section (Category-based with verified indicators) */}
        <div className="mt-16 lg:mt-24 pt-10 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
          <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/60 space-y-1">
            <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-mono">
              50+
            </div>
            <div className="text-xs font-bold text-white">Digital Solutions</div>
            <div className="text-[10px] text-slate-400">Web, Apps, SaaS &amp; SEO</div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/60 space-y-1">
            <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 font-mono">
              20+
            </div>
            <div className="text-xs font-bold text-white">Financial Partners</div>
            <div className="text-[10px] text-slate-400">Banks &amp; NBFC Lenders</div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/60 space-y-1">
            <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-mono">
              25+
            </div>
            <div className="text-xs font-bold text-white">AVRX AI Tools</div>
            <div className="text-[10px] text-slate-400">Instant Online Utilities</div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/60 space-y-1">
            <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 font-mono">
              100%
            </div>
            <div className="text-xs font-bold text-white">Digital Execution</div>
            <div className="text-[10px] text-slate-400">Zero Paper Hassles</div>
          </div>

          <div className="col-span-2 sm:col-span-1 p-4 rounded-2xl bg-slate-900/40 border border-slate-800/60 space-y-1">
            <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 font-mono">
              24/7
            </div>
            <div className="text-xs font-bold text-white">Dedicated Support</div>
            <div className="text-[10px] text-slate-400">WhatsApp &amp; Phone</div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-10 flex justify-center">
          <button
            onClick={handleScrollDown}
            className="group flex flex-col items-center gap-1.5 text-slate-400 hover:text-white transition cursor-pointer"
            aria-label="Scroll to explore"
          >
            <div className="w-5 h-8 rounded-full border border-slate-700/80 bg-slate-950/60 p-1 flex justify-center backdrop-blur-sm group-hover:border-slate-500 transition">
              <div className="w-1 h-2.5 rounded-full bg-cyan-400 animate-bounce" />
            </div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500 group-hover:text-cyan-300 transition flex items-center gap-1">
              <span>Scroll to Explore</span>
              <ChevronDown className="w-3 h-3 text-cyan-400" />
            </span>
          </button>
        </div>

      </div>
    </section>
  );
};
