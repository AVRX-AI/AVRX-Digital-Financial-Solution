import React from 'react';
import { 
  Globe, 
  Smartphone, 
  ShoppingBag, 
  Building2, 
  Cpu, 
  ShieldCheck, 
  Sparkles, 
  Zap, 
  Database, 
  Rocket 
} from 'lucide-react';

export const WhatWeBuildStrip: React.FC = () => {
  const items = [
    { label: 'HIGH-PERFORMANCE WEBSITES', icon: Globe, highlight: 'Next.js & React 18' },
    { label: 'NATIVE & HYBRID MOBILE APPS', icon: Smartphone, highlight: 'Android & iOS' },
    { label: 'LUXURY E-COMMERCE STOREFRONTS', icon: ShoppingBag, highlight: '1-Click Checkout' },
    { label: 'BANK-GRADE FINTECH PORTALS', icon: ShieldCheck, highlight: 'AES-256 & KYC' },
    { label: 'CUSTOM CLOUD SOFTWARE & ERP', icon: Database, highlight: 'Multi-Branch Sync' },
    { label: 'CONVERSION-FOCUSED LANDING PAGES', icon: Rocket, highlight: 'High ROI & CRO' },
    { label: 'CORPORATE & INVESTOR RELATIONS', icon: Building2, highlight: 'ESG & Analytics' },
    { label: 'ENTERPRISE AI INTEGRATIONS', icon: Cpu, highlight: 'Smart Automation' }
  ];

  return (
    <div className="relative py-6 bg-[#030611] border-y border-cyan-500/20 overflow-hidden select-none">
      
      {/* Background Soft Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent pointer-events-none" />
      
      {/* Marquee Track */}
      <div className="flex items-center gap-6 animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-md shrink-0 transition-colors hover:border-cyan-500/40 group"
            >
              <div className="p-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:text-cyan-300">
                <Icon className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-black tracking-wider text-white group-hover:text-cyan-300 transition-colors">
                  {item.label}
                </span>
                <span className="text-[10px] text-slate-400 font-mono">
                  {item.highlight}
                </span>
              </div>
              <span className="text-cyan-500/40 text-xs ml-2">✦</span>
            </div>
          );
        })}
      </div>

    </div>
  );
};
