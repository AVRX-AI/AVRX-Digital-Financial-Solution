import React, { useState } from 'react';
import { 
  Cpu, 
  Layers, 
  Users2, 
  ShieldCheck, 
  Rocket, 
  Sparkles, 
  ArrowRight,
  Handshake
} from 'lucide-react';

interface WhyChooseAVRXProps {
  onNavigate?: (page: string, slug?: string) => void;
}

export const WhyChooseAVRXSection: React.FC<WhyChooseAVRXProps> = ({ onNavigate }) => {
  const [activeFeature, setActiveFeature] = useState<number>(0);

  const features = [
    {
      num: '01',
      title: 'Innovation First',
      short: 'Pioneering intelligent digital architecture and AI-driven workflows.',
      desc: 'We engineer cutting-edge digital platforms, high-conversion web architectures, and automated intelligence engines that keep your business ahead of market disruption.',
      icon: Cpu,
      color: 'from-cyan-500 to-blue-600',
      badge: 'Technological Edge'
    },
    {
      num: '02',
      title: 'Complete Solutions',
      short: 'One unified ecosystem for digital development, financing, and tax.',
      desc: 'No fragmented vendors. From building high-speed apps and web portals to securing business loans and managing GST/ITR filings, everything operates seamlessly under one roof.',
      icon: Layers,
      color: 'from-blue-500 to-indigo-600',
      badge: 'All-In-One Partner'
    },
    {
      num: '03',
      title: 'Client Focused',
      short: 'Tailored solutions aligned with measurable business and ROI goals.',
      desc: 'We dive deep into your unique operational requirements. Every line of code, loan recommendation, and compliance filing is engineered to maximize your growth and profit.',
      icon: Users2,
      color: 'from-emerald-500 to-teal-600',
      badge: 'Dedicated Guidance'
    },
    {
      num: '04',
      title: 'Transparent Approach',
      short: 'Zero hidden fees, clear regulatory compliance, and honest advisory.',
      desc: 'Transparent pricing for digital engineering and direct, ethical facilitation for loans and insurance. You receive upfront terms, milestones, and direct real-time updates.',
      icon: ShieldCheck,
      color: 'from-amber-500 to-orange-600',
      badge: '100% Transparency'
    },
    {
      num: '05',
      title: 'Future Ready',
      short: 'Scalable cloud infrastructure, NVMe hosting, and forward-looking tools.',
      desc: 'Built for 2026 and beyond. Our cloud deployments scale automatically, security protocols meet international benchmarks, and financial systems adapt to regulatory updates.',
      icon: Rocket,
      color: 'from-purple-500 to-violet-600',
      badge: 'Enterprise Scalability'
    },
    {
      num: '06',
      title: 'Human + AI',
      short: 'Intelligent automation powered and supervised by experienced specialists.',
      desc: 'We combine instantaneous AI speed with seasoned human judgment. Our Chartered Accountants, senior developers, and financial experts oversee every engagement.',
      icon: Sparkles,
      color: 'from-fuchsia-500 to-pink-600',
      badge: 'Hybrid Intelligence'
    }
  ];

  return (
    <section className="relative py-24 bg-[#050811] text-white overflow-hidden select-none">
      {/* Background radial glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-widest shadow-[0_0_15px_rgba(0,240,255,0.15)]">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>THE AVRX ADVANTAGE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            WHY CHOOSE AVRX?
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed font-normal">
            Technology, financial expertise and intelligent tools — brought together in one unified high-performance ecosystem.
          </p>
        </div>

        {/* Constellation Architecture: Central Visual + 6 Surrounding Feature Points */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left 3 Features */}
          <div className="lg:col-span-4 space-y-4">
            {features.slice(0, 3).map((feat, idx) => {
              const IconComp = feat.icon;
              const isSelected = activeFeature === idx;
              return (
                <div
                  key={feat.num}
                  onClick={() => setActiveFeature(idx)}
                  onMouseEnter={() => setActiveFeature(idx)}
                  className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer text-left group relative ${
                    isSelected
                      ? 'bg-slate-900/95 border-cyan-500/80 shadow-[0_0_30px_rgba(0,240,255,0.2)] scale-[1.02]'
                      : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/60'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-black text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-lg border border-cyan-500/20">
                        {feat.num}
                      </span>
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        {feat.badge}
                      </span>
                    </div>
                    <div className={`p-2 rounded-xl bg-slate-950 border border-slate-800 transition-transform group-hover:scale-110 ${isSelected ? 'text-cyan-400 border-cyan-500/40' : 'text-slate-400'}`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1.5 line-clamp-2 leading-relaxed">
                    {feat.short}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Central Highlighted Interactive Focal Card with Eye-Catching Light Atmosphere */}
          <div className="lg:col-span-4 relative flex flex-col items-center justify-center p-8 rounded-3xl bg-gradient-to-b from-slate-900/95 via-[#080e1e] to-slate-900/95 border-2 border-cyan-400 shadow-[0_0_60px_rgba(0,240,255,0.3)] backdrop-blur-2xl text-center space-y-6 overflow-hidden group">
            
            {/* Ambient Eye-Catching Light Beam & Radiance */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

            {/* Glowing Orbit Rings */}
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center">
              {/* Outer Pulsing Orbit */}
              <div className="absolute inset-0 rounded-full border-2 border-cyan-400/40 border-dashed animate-spin-slow shadow-[0_0_20px_rgba(0,240,255,0.2)]" />
              {/* Middle Orbit */}
              <div className="absolute inset-3 rounded-full border border-blue-400/50 animate-reverse-spin" />
              
              {/* Core Symbol */}
              <div className="relative w-28 h-28 rounded-2xl bg-gradient-to-tr from-cyan-400/30 via-blue-600/40 to-indigo-600/30 border-2 border-cyan-300 flex flex-col items-center justify-center shadow-[0_0_40px_rgba(0,240,255,0.6)] backdrop-blur-md">
                <Sparkles className="w-8 h-8 text-cyan-200 animate-pulse mb-1" />
                <span className="text-sm font-black tracking-widest text-white drop-shadow-[0_0_10px_rgba(0,240,255,0.8)]">AVRX</span>
                <span className="text-[9px] font-mono font-bold text-cyan-300 uppercase tracking-wider">ECOSYSTEM</span>
              </div>
            </div>

            {/* Dynamic Active Feature Detail Display */}
            <div className="space-y-2 min-h-[110px] flex flex-col justify-center relative z-10">
              <div className="inline-flex items-center justify-center gap-1.5 text-xs font-mono text-cyan-300 font-bold uppercase tracking-wider bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/30 mx-auto">
                <span>{features[activeFeature].num}</span>
                <span>•</span>
                <span>{features[activeFeature].title}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-sm mx-auto">
                {features[activeFeature].desc}
              </p>
            </div>

            {/* Glowing Eye-Catching "Partner With Us" Button */}
            {onNavigate && (
              <div className="w-full pt-2 relative z-10">
                <button
                  onClick={() => onNavigate('partner')}
                  className="relative group w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-400 via-cyan-300 to-teal-300 hover:from-emerald-300 hover:via-cyan-200 hover:to-teal-200 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-widest flex items-center justify-center gap-2.5 transition-all duration-300 transform hover:scale-[1.03] shadow-[0_0_35px_rgba(16,185,129,0.6),0_0_50px_rgba(0,240,255,0.4)] hover:shadow-[0_0_55px_rgba(16,185,129,0.85),0_0_80px_rgba(0,240,255,0.7)] cursor-pointer overflow-hidden"
                >
                  {/* Internal Light Glare Sweep Effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none" />
                  
                  <Handshake className="w-4 h-4 text-slate-950 shrink-0" />
                  <span>Partner With Us</span>
                  <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1.5 transition-transform shrink-0" />
                </button>
              </div>
            )}
          </div>

          {/* Right 3 Features */}
          <div className="lg:col-span-4 space-y-4">
            {features.slice(3, 6).map((feat, idx) => {
              const actualIdx = idx + 3;
              const IconComp = feat.icon;
              const isSelected = activeFeature === actualIdx;
              return (
                <div
                  key={feat.num}
                  onClick={() => setActiveFeature(actualIdx)}
                  onMouseEnter={() => setActiveFeature(actualIdx)}
                  className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer text-left group relative ${
                    isSelected
                      ? 'bg-slate-900/95 border-cyan-500/80 shadow-[0_0_30px_rgba(0,240,255,0.2)] scale-[1.02]'
                      : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/60'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-black text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-lg border border-cyan-500/20">
                        {feat.num}
                      </span>
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        {feat.badge}
                      </span>
                    </div>
                    <div className={`p-2 rounded-xl bg-slate-950 border border-slate-800 transition-transform group-hover:scale-110 ${isSelected ? 'text-cyan-400 border-cyan-500/40' : 'text-slate-400'}`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1.5 line-clamp-2 leading-relaxed">
                    {feat.short}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
