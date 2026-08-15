import React from 'react';
import { ArrowRight, Sparkles, PhoneCall, ShieldCheck, Zap, Globe2, ChevronDown } from 'lucide-react';
import { ServicesSlider } from './ServicesSlider';
import { useTheme } from '../../context/ThemeContext';
import { AshokaChakraHolo } from '../common/AshokaChakraHolo';
import { TricolourRibbonWave } from '../common/TricolourRibbonWave';

interface HeroProps {
  onNavigate: (page: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const { t } = useTheme();

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight * 0.85,
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-36 overflow-hidden bg-[#050811]">
      {/* 1. Tricolour Atmosphere Glows & Light Rays */}
      {/* Saffron Aura Glow (Top-Left) */}
      <div className="absolute -top-12 -left-20 w-[450px] sm:w-[650px] h-[450px] bg-gradient-to-br from-[#FF9933]/15 via-[#FF9933]/5 to-transparent rounded-full blur-[130px] pointer-events-none" />
      
      {/* White & Cyan Luminescence (Center-Backdrop) */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[450px] bg-gradient-to-tr from-cyan-500/10 via-white/5 to-blue-600/10 rounded-full blur-[150px] pointer-events-none" />
      
      {/* India Green Aura Glow (Bottom-Right) */}
      <div className="absolute -bottom-10 right-0 w-[450px] sm:w-[600px] h-[450px] bg-gradient-to-tl from-[#138808]/15 via-[#138808]/5 to-transparent rounded-full blur-[130px] pointer-events-none" />

      {/* 2. Flowing Tricolour 3D Digital Ribbon Wave */}
      <TricolourRibbonWave opacity={0.5} />

      {/* 3. Ashoka Chakra Holographic Watermark behind Hero */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0">
        <AshokaChakraHolo size={560} opacity={0.07} className="hidden md:block" />
        <AshokaChakraHolo size={340} opacity={0.05} className="block md:hidden" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center">
          
          {/* Left Column: Headline & Action CTAs */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-7 text-center lg:text-left">
            
            {/* Independence Day Floating Badge & Platform Tag */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              {/* 🇮🇳 Special Independence Day Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-[#FF9933]/40 shadow-[0_0_15px_rgba(255,153,51,0.25)] text-xs font-bold text-white transition-all hover:scale-105">
                <span className="text-sm">🇮🇳</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9933] via-white to-[#138808]">
                  Proudly Indian | 15 August
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>

              {/* Top Pill Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs sm:text-xs font-semibold shadow-[0_0_20px_rgba(0,240,255,0.15)]">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse shrink-0" />
                <span>Next-Gen Global Ecosystem</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
              One Platform.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                Powerful Digital, Financial & AI Solutions.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {t('hero.subtitle')}
            </p>

            {/* Action Buttons with subtle Tricolour hover sweep */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-1">
              <button
                onClick={() => onNavigate('digital-solutions')}
                className="btn-tricolour-hover w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 hover:brightness-110 text-slate-950 font-bold text-base rounded-2xl shadow-[0_0_35px_rgba(0,240,255,0.4)] transition transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2.5"
              >
                <span>{t('hero.explore')}</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="btn-tricolour-hover w-full sm:w-auto px-7 py-4 bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 font-semibold text-base rounded-2xl transition flex items-center justify-center gap-2.5"
              >
                <PhoneCall className="w-5 h-5 text-cyan-400" />
                <span>{t('nav.talk_expert')}</span>
              </button>
            </div>

            {/* Trust Indicators Bar */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-center lg:text-left max-w-lg mx-auto lg:mx-0">
              <div className="space-y-1">
                <div className="text-xl sm:text-2xl font-black text-white flex items-center justify-center lg:justify-start gap-1">
                  <Zap className="w-5 h-5 text-cyan-400" />
                  <span>50+</span>
                </div>
                <div className="text-xs text-slate-400 font-medium">Services & AI Tools</div>
              </div>

              <div className="space-y-1">
                <div className="text-xl sm:text-2xl font-black text-white flex items-center justify-center lg:justify-start gap-1">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <span>100%</span>
                </div>
                <div className="text-xs text-slate-400 font-medium">Digital Execution</div>
              </div>

              <div className="space-y-1">
                <div className="text-xl sm:text-2xl font-black text-white flex items-center justify-center lg:justify-start gap-1">
                  <Globe2 className="w-5 h-5 text-purple-400" />
                  <span>2026</span>
                </div>
                <div className="text-xs text-slate-400 font-medium">AI Technology</div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Services Slider */}
          <div className="lg:col-span-6 xl:col-span-6 relative">
            <ServicesSlider onNavigate={onNavigate} />
          </div>

        </div>

        {/* 5. Tricolour Scroll Indicator at Bottom of Hero */}
        <div className="mt-14 lg:mt-16 flex flex-col items-center justify-center">
          <button
            onClick={handleScrollDown}
            className="group flex flex-col items-center gap-2 text-slate-400 hover:text-white transition focus:outline-none cursor-pointer"
            aria-label="Scroll to explore"
          >
            {/* Tricolour Capsule Indicator */}
            <div className="w-6 h-10 rounded-full border border-slate-700/80 bg-slate-950/60 p-1 flex justify-center backdrop-blur-sm group-hover:border-slate-500 transition shadow-inner">
              <div className="w-1.5 h-3 rounded-full animate-[scrollPulse_2.4s_ease-in-out_infinite]" />
            </div>
            
            {/* Subtle Label */}
            <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 group-hover:text-cyan-300 flex items-center gap-1 transition">
              <span>Scroll to Explore</span>
              <ChevronDown className="w-3 h-3 text-cyan-400 group-hover:translate-y-0.5 transition-transform" />
            </span>
          </button>
        </div>

      </div>
    </section>
  );
};
