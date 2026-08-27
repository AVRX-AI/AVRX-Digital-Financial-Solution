import React, { useRef } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  PhoneCall, 
  CheckCircle2,
  Heart,
  Gift
} from 'lucide-react';
import { ServicesSlider } from './ServicesSlider';

interface AICommandCenterHeroProps {
  onNavigate: (page: string, slug?: string) => void;
  onQuickAction?: (action: string) => void;
}

export const AICommandCenterHero: React.FC<AICommandCenterHeroProps> = ({ onNavigate }) => {
  const heroRef = useRef<HTMLElement | null>(null);

  const headlineLetters = [
    { text: 'Build', highlight: false },
    { text: ' ', highlight: false },
    { text: 'Digital.', highlight: true, color: 'from-amber-300 via-yellow-200 to-amber-500' },
    { text: ' ', highlight: false },
    { text: 'Grow', highlight: false },
    { text: ' ', highlight: false },
    { text: 'Smarter.', highlight: true, color: 'from-yellow-300 via-rose-300 to-amber-400' },
    { text: ' ', highlight: false },
    { text: 'Finance', highlight: false },
    { text: ' ', highlight: false },
    { text: 'Better.', highlight: true, color: 'from-amber-200 via-emerald-300 to-yellow-300' }
  ];

  return (
    <section 
      ref={heroRef}
      id="hero-command-center"
      className="relative min-h-screen pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-[#07020d] text-white flex flex-col justify-center select-none"
    >
      {/* 1. Festive Cinematic Atmosphere - Saffron, Vermilion & Gold Nebulae */}
      <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-amber-500/15 rounded-full blur-[160px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-10 right-1/4 w-[600px] h-[600px] bg-rose-600/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-amber-600/10 rounded-full blur-[180px] pointer-events-none" />

      {/* Festive Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f59e0b0d_1px,transparent_1px),linear-gradient(to_bottom,#e11d480d_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Decorative Golden Rakhi Thread Wave Accent */}
      <div className="absolute top-16 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400 via-rose-400 to-transparent opacity-60 pointer-events-none" />

      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10 space-y-12">
        
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-950/90 backdrop-blur-md border border-amber-400/50 shadow-[0_0_20px_rgba(245,158,11,0.25)] text-xs font-bold text-white">
            <span className="text-sm">🪢</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-rose-300 to-yellow-300">
              रक्षाबंधन महापर्व स्पेशल
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/40 text-amber-300 text-xs font-bold tracking-wider uppercase font-mono shadow-[0_0_20px_rgba(245,158,11,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
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
                        className={`text-transparent bg-clip-text bg-gradient-to-r ${word.color} font-black drop-shadow-[0_0_25px_rgba(245,158,11,0.35)] inline-block transition-transform hover:scale-105 duration-200`}
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
            <p className="text-base sm:text-xl text-amber-100/90 font-normal leading-relaxed max-w-2xl">
              From high-conversion websites, mobile apps and SEO rankings to competitive business loans, IRDAI insurance, and 70+ in-browser AI tools — backed by unconditional trust and protection for your digital growth.
            </p>

            {/* Value Highlights Chips */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-amber-500/30 text-xs text-amber-100 shadow-[0_0_10px_rgba(245,158,11,0.1)]">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>100% Transparent Pricing</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-amber-500/30 text-xs text-amber-100 shadow-[0_0_10px_rgba(245,158,11,0.1)]">
                <CheckCircle2 className="w-4 h-4 text-rose-400" />
                <span>Govt Subsidy (PMEGP / MUDRA) Guidance</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-amber-500/30 text-xs text-amber-100 shadow-[0_0_10px_rgba(245,158,11,0.1)]">
                <CheckCircle2 className="w-4 h-4 text-yellow-400" />
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
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-yellow-300 text-slate-950 font-black text-sm uppercase tracking-wider shadow-[0_0_30px_rgba(245,158,11,0.4)] hover:brightness-110 transform hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 cursor-pointer group"
              >
                <span>EXPLORE SOLUTIONS</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-850 text-white font-bold text-sm border border-amber-500/40 hover:border-amber-400/80 shadow-lg shadow-amber-950/40 transform hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-amber-400" />
                <span>TALK TO AN EXPERT</span>
              </button>
            </div>

            {/* Quick stats counter ribbon */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-amber-500/20 max-w-xl">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-amber-300 font-mono">10,000+</div>
                <div className="text-xs text-amber-200/80 font-medium mt-0.5">Businesses Powered</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-yellow-300 font-mono">₹50 Cr+</div>
                <div className="text-xs text-amber-200/80 font-medium mt-0.5">Financing Facilitated</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-rose-300 font-mono">70+</div>
                <div className="text-xs text-amber-200/80 font-medium mt-0.5">AI Tools Suite</div>
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

