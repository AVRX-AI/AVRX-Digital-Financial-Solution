import React, { useRef } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  PhoneCall, 
  CheckCircle2,
  Cpu,
  Zap,
  ShieldCheck,
  Binary
} from 'lucide-react';
import { ServicesSlider } from './ServicesSlider';
import { useTheme } from '../../context/ThemeContext';

interface AICommandCenterHeroProps {
  onNavigate: (page: string, slug?: string) => void;
  onQuickAction?: (action: string) => void;
}

export const AICommandCenterHero: React.FC<AICommandCenterHeroProps> = ({ onNavigate }) => {
  const { festiveMode } = useTheme();
  const heroRef = useRef<HTMLElement | null>(null);

  const headlineLetters = [
    { text: 'Build', highlight: false },
    { text: ' ', highlight: false },
    { text: 'Digital.', highlight: true, color: 'from-cyan-300 via-sky-200 to-blue-500' },
    { text: ' ', highlight: false },
    { text: 'Grow', highlight: false },
    { text: ' ', highlight: false },
    { text: 'Smarter.', highlight: true, color: 'from-violet-300 via-fuchsia-300 to-purple-400' },
    { text: ' ', highlight: false },
    { text: 'Finance', highlight: false },
    { text: ' ', highlight: false },
    { text: 'Better.', highlight: true, color: 'from-emerald-300 via-teal-200 to-cyan-400' }
  ];

  return (
    <section 
      ref={heroRef}
      id="hero-command-center"
      className="relative min-h-screen pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-[#030712] text-white flex flex-col justify-center select-none"
    >
      {/* 1. Futuristic Quantum Plasma Nebulae or Divine Golden Aura */}
      {festiveMode !== 'janmashtami' ? (
        <>
          <div className="absolute top-0 left-1/4 w-[750px] h-[750px] bg-cyan-500/12 rounded-full blur-[170px] pointer-events-none animate-pulse" />
          <div className="absolute bottom-10 right-1/4 w-[650px] h-[650px] bg-violet-600/15 rounded-full blur-[160px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[950px] h-[950px] bg-indigo-600/10 rounded-full blur-[200px] pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#06b6d40a_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf60a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
          <div className="absolute top-16 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400/80 via-violet-500/80 to-transparent shadow-[0_0_15px_rgba(6,182,212,0.6)] pointer-events-none" />
        </>
      ) : (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-gradient-to-b from-amber-500/15 via-yellow-400/10 to-transparent rounded-full blur-[180px] pointer-events-none" />
      )}

      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10 space-y-12">
        
        {/* Top Futuristic Telemetry Badges */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-950/90 backdrop-blur-md border border-cyan-500/40 shadow-[0_0_20px_rgba(6,182,212,0.25)] text-xs font-bold text-white">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-200 to-violet-300 font-mono tracking-wider">
              AVRX NEXT-GEN AI OS v4.5
            </span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-xs font-bold tracking-wider uppercase font-mono shadow-[0_0_20px_rgba(139,92,246,0.2)]">
            <Zap className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>Digital + Financial Ecosystem</span>
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
                        className={`text-transparent bg-clip-text bg-gradient-to-r ${word.color} font-black drop-shadow-[0_0_30px_rgba(6,182,212,0.35)] inline-block transition-transform hover:scale-105 duration-200`}
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
              Next-generation digital engineering, enterprise web & app ecosystems, strategic SEO rankings, instant business financing, and 70+ in-browser AI engines — engineered for exponential scale.
            </p>

            {/* Value Highlights Chips */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-cyan-500/30 text-xs text-cyan-200 shadow-[0_0_12px_rgba(6,182,212,0.15)] backdrop-blur-md">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>100% Transparent Architecture</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-violet-500/30 text-xs text-violet-200 shadow-[0_0_12px_rgba(139,92,246,0.15)] backdrop-blur-md">
                <CheckCircle2 className="w-4 h-4 text-violet-400" />
                <span>PMEGP & MUDRA Govt Subsidies</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-emerald-500/30 text-xs text-emerald-200 shadow-[0_0_12px_rgba(16,185,129,0.15)] backdrop-blur-md">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Rapid 24-48 Hr Cloud Deployment</span>
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
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white font-black text-sm uppercase tracking-wider shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:shadow-[0_0_40px_rgba(139,92,246,0.6)] transform hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 cursor-pointer group border border-cyan-300/30"
              >
                <span>EXPLORE ECOSYSTEM</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-cyan-200" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-850 text-white font-bold text-sm border border-cyan-500/40 hover:border-cyan-400/80 shadow-lg shadow-cyan-950/40 transform hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2.5 cursor-pointer backdrop-blur-md"
              >
                <PhoneCall className="w-4 h-4 text-cyan-400" />
                <span>CONSULT ARCHITECT</span>
              </button>
            </div>

            {/* Quick stats counter ribbon */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800/80 max-w-xl">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-cyan-300 font-mono">10,000+</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">Enterprises Scaled</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-violet-300 font-mono">₹50 Cr+</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">Capital Facilitated</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-emerald-300 font-mono">70+</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">AI Neural Engines</div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Services Slider */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-center w-full">
            <ServicesSlider onNavigate={onNavigate} />
          </div>

        </div>

      </div>
    </section>
  );
};

