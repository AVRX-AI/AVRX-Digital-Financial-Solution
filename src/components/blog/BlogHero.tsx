import React from 'react';
import { Sparkles, BookOpen, TrendingUp, Shield, Cpu } from 'lucide-react';

export const BlogHero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-16 overflow-hidden bg-[#050811] border-b border-slate-800/80">
      {/* Futuristic Background Lights & Tricolour Accent */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft Radial Ambient Glows */}
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-[#FF9933]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-full max-w-4xl h-48 bg-[#138808]/10 rounded-full blur-3xl" />

        {/* Faint Cyber Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, #00f0ff 1px, transparent 1px), linear-gradient(to bottom, #00f0ff 1px, transparent 1px)`,
            backgroundSize: '48px 48px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(0,240,255,0.2)]">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>AVRX INSIGHTS & KNOWLEDGE HUB</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight">
          AVRX <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300">Insights</span>
        </h1>

        {/* Subheading */}
        <p className="max-w-3xl mx-auto text-slate-300 text-base sm:text-xl font-normal leading-relaxed">
          Ideas, strategies and practical knowledge to help businesses grow in a digital world.
        </p>

        {/* Subtle Category Pillars Pill Row */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-400">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-slate-900/80 border border-slate-800">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" /> Digital Websites & Apps
          </span>
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-slate-900/80 border border-slate-800">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-400" /> Capital & Business Loans
          </span>
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-slate-900/80 border border-slate-800">
            <Shield className="w-3.5 h-3.5 text-amber-400" /> Tax, GST & Compliance
          </span>
        </div>
      </div>
    </div>
  );
};
