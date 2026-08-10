import React from 'react';
import { ArrowRight, Sparkles, PhoneCall, ShieldCheck, Zap, Globe2 } from 'lucide-react';
import { ServicesSlider } from './ServicesSlider';
import { useTheme } from '../../context/ThemeContext';

interface HeroProps {
  onNavigate: (page: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const { t } = useTheme();

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-[#050811]">
      {/* Background Aurora Gradients & Light Rays */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[400px] bg-gradient-to-tr from-cyan-500/15 via-blue-600/10 to-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center">
          
          {/* Left Column: Headline & Action CTAs */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-8 text-center lg:text-left">
            
            {/* Top Pill Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-semibold shadow-[0_0_20px_rgba(0,240,255,0.2)]">
              <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse shrink-0" />
              <span>Next-Generation Global Digital & Financial Platform</span>
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

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => onNavigate('digital-solutions')}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 hover:brightness-110 text-slate-950 font-bold text-base rounded-2xl shadow-[0_0_35px_rgba(0,240,255,0.4)] transition transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2.5"
              >
                <span>{t('hero.explore')}</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto px-7 py-4 bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 font-semibold text-base rounded-2xl transition flex items-center justify-center gap-2.5"
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
      </div>
    </section>
  );
};
