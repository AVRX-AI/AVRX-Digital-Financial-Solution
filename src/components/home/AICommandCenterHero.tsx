import React, { useRef } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  PhoneCall, 
  CheckCircle2
} from 'lucide-react';
import { ServicesSlider } from './ServicesSlider';
import { AshokaChakraHolo } from '../common/AshokaChakraHolo';
import { TricolourRibbonWave } from '../common/TricolourRibbonWave';

interface AICommandCenterHeroProps {
  onNavigate: (page: string, slug?: string) => void;
  onQuickAction?: (action: string) => void;
}

export const AICommandCenterHero: React.FC<AICommandCenterHeroProps> = ({ onNavigate }) => {
  const heroRef = useRef<HTMLElement | null>(null);

  const headlineLetters = [
    { text: 'Build', highlight: false },
    { text: ' ', highlight: false },
    { text: 'Digital.', highlight: true, color: 'from-cyan-400 via-blue-400 to-indigo-400' },
    { text: ' ', highlight: false },
    { text: 'Grow', highlight: false },
    { text: ' ', highlight: false },
    { text: 'Smarter.', highlight: true, color: 'from-blue-400 via-indigo-400 to-cyan-300' },
    { text: ' ', highlight: false },
    { text: 'Finance', highlight: false },
    { text: ' ', highlight: false },
    { text: 'Better.', highlight: true, color: 'from-cyan-300 via-emerald-400 to-teal-300' }
  ];

  return (
    <section 
      ref={heroRef}
      id="hero-command-center"
      className="relative min-h-screen pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-[#030712] text-white flex flex-col justify-center select-none"
    >
      {/* 1. Futuristic Cinematic Atmosphere */}
      <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-purple-600/5 rounded-full blur-[180px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b0d_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0d_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* 2. Tricolour Ribbon Wave subtle aesthetic */}
      <TricolourRibbonWave opacity={0.3} />

      {/* 3. Ashoka Chakra Holographic Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0 opacity-15">
        <AshokaChakraHolo size={600} opacity={0.06} className="hidden md:block" />
      </div>

      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10 space-y-12">
        
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/90 backdrop-blur-md border border-[#FF9933]/40 shadow-[0_0_15px_rgba(255,153,51,0.2)] text-xs font-bold text-white">
            <span className="text-sm">🇮🇳</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9933] via-white to-[#138808]">
              Proudly Indian Enterprise
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold tracking-wider uppercase font-mono shadow-[0_0_20px_rgba(0,240,255,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>AVRX Digital + Financial Ecosystem</span>
          </div>
        </div>

        {/* Hero 2-Column Split: Headline & CTA on Left, Interactive Services Slider on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
          
          {/* Left Column (Headline + Value Proposition + CTAs) */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-8 text-left">
            
            {/* Animated Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight leading-[1.08]">
                {headlineLetters.map((word, idx) => {
                  if (word.highlight) {
                    return (
                      <span
                        key={idx}
                        className={`text-transparent bg-clip-text bg-gradient-to-r ${word.color} font-black drop-shadow-[0_0_25px_rgba(0,240,255,0.3)] inline-block transition-transform hover:scale-105 duration-200`}
                      >
                        {word.text}
                      </span>
                    );
                  }
                  return (
                    <span key={idx} className="text-white inline-block">
                      {word.text}
                    </span>
                  );
                })}
              </h1>
            </div>

            {/* Subtitle description */}
            <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
              From high-conversion websites, mobile apps and SEO rankings to competitive business loans, IRDAI insurance, and 70+ in-browser AI tools — all unified in one seamless ecosystem.
            </p>

            {/* Value Highlights Chips */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>100% Transparent Pricing</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Govt Subsidy (PMEGP / MUDRA) Guidance</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-purple-400" />
                <span>Fast 24-48 Hr Turnaround</span>
              </div>
            </div>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={() => {
                  const el = document.getElementById('digital-solutions');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    onNavigate('digital-solutions');
                  }
                }}
                className="btn-tricolour-hover px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 text-slate-950 font-black text-sm uppercase tracking-wider shadow-[0_0_30px_rgba(0,240,255,0.4)] hover:brightness-110 transform hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 cursor-pointer group"
              >
                <span>EXPLORE SOLUTIONS</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-850 text-white font-bold text-sm border border-slate-700 hover:border-cyan-400/60 shadow-lg transform hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-cyan-400" />
                <span>TALK TO AN EXPERT</span>
              </button>
            </div>

            {/* Quick stats counter ribbon */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800/80 max-w-xl">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-cyan-400 font-mono">10,000+</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">Businesses Powered</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">₹50 Cr+</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">Financing Facilitated</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-purple-400 font-mono">70+</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">AI Tools Suite</div>
              </div>
            </div>

          </div>

          {/* Right Column: Attractive Interactive Services Slider */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-center w-full">
            <ServicesSlider onNavigate={onNavigate} />
          </div>

        </div>

      </div>
    </section>
  );
};
