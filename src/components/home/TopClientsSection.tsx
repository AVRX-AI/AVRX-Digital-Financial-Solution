import React from 'react';
import { Sparkles } from 'lucide-react';

export const TopClientsSection: React.FC = () => {
  // Trusted client partner brands / enterprise placeholders
  const clientLogos = [
    { name: 'Fintech Pro India', sector: 'Financial Services', icon: '₹' },
    { name: 'TechNexus Solutions', sector: 'Enterprise Software', icon: '⚡' },
    { name: 'Bharat Logistics & Infra', sector: 'Supply Chain', icon: '🚛' },
    { name: 'Apex Dynamics', sector: 'Manufacturing', icon: '⚙️' },
    { name: 'CloudMatrix Digital', sector: 'SaaS Platform', icon: '☁️' },
    { name: 'Prime HealthCare Networks', sector: 'Health & Medical', icon: '🏥' },
    { name: 'SmartRetail Bharat', sector: 'E-Commerce', icon: '🛍️' },
    { name: 'GlobalVentures Capital', sector: 'Investment & Trade', icon: '📈' },
    { name: 'CyberVanguard Security', sector: 'Cyber Infrastructure', icon: '🛡️' },
    { name: 'UrbanNest Realty', sector: 'Real Estate', icon: '🏢' },
    { name: 'GreenWave Agro', sector: 'AgriTech', icon: '🌱' },
    { name: 'OmniPay Solutions', sector: 'Digital Payments', icon: '💳' }
  ];

  return (
    <section className="relative py-16 bg-[#030712] border-y border-slate-800/80 overflow-hidden select-none">
      {/* Ambient background light trail */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/[0.03] to-transparent pointer-events-none" />

      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10 space-y-8">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700/80 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>TOP CLIENTS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Trusted by businesses and individuals
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Powering fast-growing enterprises, startups, MSMEs, and entrepreneurs across India.
          </p>
        </div>

        {/* Continuous Infinite Logo Slider Marquee */}
        <div className="relative w-full overflow-hidden py-4 group">
          {/* Edge Blur Gradients */}
          <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-[#030712] to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-[#030712] to-transparent z-20 pointer-events-none" />

          {/* Marquee Track */}
          <div className="flex w-max animate-marquee space-x-6 sm:space-x-8 group-hover:[animation-play-state:paused]">
            {[...clientLogos, ...clientLogos].map((client, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-slate-900/60 border border-slate-800/90 backdrop-blur-xl shadow-lg transition-all duration-300 hover:border-cyan-500/50 hover:bg-slate-900/90 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] hover:scale-105 group/card cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-lg text-slate-400 group-hover/card:text-cyan-400 group-hover/card:border-cyan-500/40 transition-colors shrink-0">
                  {client.icon}
                </div>
                <div className="text-left min-w-[130px]">
                  <div className="text-sm font-bold text-slate-400 group-hover/card:text-white transition-colors">
                    {client.name}
                  </div>
                  <div className="text-[11px] font-medium text-slate-400 group-hover/card:text-cyan-400 transition-colors">
                    {client.sector}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
