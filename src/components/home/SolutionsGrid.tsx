import React from 'react';
import { Code, DollarSign, FileText, Shield, Server, ArrowRight, Check } from 'lucide-react';

interface SolutionsGridProps {
  onNavigate: (page: string) => void;
}

export const SolutionsGrid: React.FC<SolutionsGridProps> = ({ onNavigate }) => {
  const solutions = [
    {
      num: '01',
      title: 'Digital Solutions',
      page: 'digital-solutions',
      tagline: 'Build your digital presence.',
      desc: 'Modern, high-converting websites, corporate portals, e-commerce stores, Android/iOS apps, and organic SEO growth strategies.',
      icon: <Code className="w-7 h-7 text-cyan-400" />,
      colorGlow: 'from-cyan-500/20 via-cyan-500/5 to-transparent',
      borderColor: 'hover:border-cyan-500/50',
      textColor: 'text-cyan-400',
      subServices: ['Website & Corporate Design', 'E-Commerce Stores', 'Android & iOS App Dev', 'Organic SEO & Digital Growth']
    },
    {
      num: '02',
      title: 'Financial Solutions',
      page: 'financial-solutions',
      tagline: 'Smarter financial solutions.',
      desc: 'Personal loans, collateral-free business loans up to ₹1Cr, home/car loans, mortgage, and government subsidized schemes (PMEGP/MUDRA).',
      icon: <DollarSign className="w-7 h-7 text-emerald-400" />,
      colorGlow: 'from-emerald-500/20 via-emerald-500/5 to-transparent',
      borderColor: 'hover:border-emerald-500/50',
      textColor: 'text-emerald-400',
      subServices: ['Personal & Business Loans', 'Home & Vehicle Financing', 'Loan Refinance & EMI Reduction', 'PMEGP & MUDRA Govt Schemes']
    },
    {
      num: '03',
      title: 'Tax Solutions',
      page: 'tax-solutions',
      tagline: 'Simplify tax and compliance needs.',
      desc: 'End-to-end tax advisory, 100% digital GST Registration, monthly return filing, ITR filing for individuals & businesses, Udyam MSME, and ROC filings.',
      icon: <FileText className="w-7 h-7 text-amber-400" />,
      colorGlow: 'from-amber-500/20 via-amber-500/5 to-transparent',
      borderColor: 'hover:border-amber-500/50',
      textColor: 'text-amber-400',
      subServices: ['GST Registration & Filing', 'Income Tax Return (ITR)', 'Udyam MSME Certificate', 'ROC Company Compliance']
    },
    {
      num: '04',
      title: 'Insurance Solutions',
      page: 'insurance-solutions',
      tagline: 'Protect what matters most.',
      desc: 'Comprehensive motor insurance, family health floaters with cashless admissions, international travel insurance, home structure, and shop property cover.',
      icon: <Shield className="w-7 h-7 text-purple-400" />,
      colorGlow: 'from-purple-500/20 via-purple-500/5 to-transparent',
      borderColor: 'hover:border-purple-500/50',
      textColor: 'text-purple-400',
      subServices: ['Motor & Car Insurance', 'Health & Hospitalization Cover', 'Schengen Travel Insurance', 'Shop & Property Protection']
    },
    {
      num: '05',
      title: 'Digital Products & Hosting',
      page: 'hosting-products',
      tagline: 'Run your digital business effortlessly.',
      desc: 'Ultra-fast NVMe cloud web hosting, multi-company agency hosting, premium WordPress themes, domain registrations, and security maintenance.',
      icon: <Server className="w-7 h-7 text-blue-400" />,
      colorGlow: 'from-blue-500/20 via-blue-500/5 to-transparent',
      borderColor: 'hover:border-blue-500/50',
      textColor: 'text-blue-400',
      subServices: ['High-Speed NVMe Cloud Hosting', 'Multi-Company Agency Servers', 'WordPress Themes & Plugins', 'Domain Name Registration']
    }
  ];

  return (
    <section className="py-24 bg-[#050811] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            Ecosystem Architecture
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-3">
            Integrated Solution Pillars
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-4">
            Everything individuals, startups, and enterprises need to build, finance, tax-comply, protect, and scale—all under one roof.
          </p>
        </div>

        {/* 5 Solution Cards Grid with Independence Day subtle hover accents */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map(sol => (
            <div
              key={sol.num}
              onClick={() => onNavigate(sol.page)}
              className={`tricolour-card group relative bg-slate-900/80 border border-slate-800 hover:border-slate-700 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-2xl cursor-pointer flex flex-col justify-between overflow-hidden`}
            >
              {/* Independence Day Hover Layer 1: Top Saffron Subtle Glow */}
              <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#FF9933]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Independence Day Hover Layer 2: White central diagonal shimmer beam */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Independence Day Hover Layer 3: Bottom Green Subtle Glow */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#138808]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Existing Category Glow overlay */}
              <div className={`absolute inset-0 bg-gradient-to-b ${sol.colorGlow} opacity-0 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none`} />

              <div className="relative z-10">
                {/* Top Badge & Number */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 shadow-inner group-hover:scale-110 group-hover:border-slate-700 transition-transform">
                    {sol.icon}
                  </div>
                  <span className={`text-2xl font-black font-mono ${sol.textColor} opacity-60`}>
                    {sol.num}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition">
                  {sol.title}
                </h3>
                <p className={`text-xs font-semibold tracking-wide uppercase mt-1 mb-3 ${sol.textColor}`}>
                  {sol.tagline}
                </p>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {sol.desc}
                </p>

                {/* Sub-services list */}
                <div className="space-y-2 border-t border-slate-800/80 pt-4 mb-8">
                  {sol.subServices.map((sub, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                      <Check className={`w-3.5 h-3.5 ${sol.textColor} shrink-0`} />
                      <span>{sub}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Explore CTA Button with subtle tricolour sweep on hover */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigate(sol.page);
                }}
                className={`btn-tricolour-hover relative z-10 w-full py-3.5 px-4 rounded-2xl bg-slate-950 hover:bg-slate-850 border border-slate-800 text-xs font-bold text-white flex items-center justify-between group-hover:border-cyan-500/40 transition`}
              >
                <span>Explore {sol.title}</span>
                <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition" />
              </button>

            </div>
          ))}

          {/* 6th Card: All Services Hub Callout */}
          <div
            onClick={() => onNavigate('services')}
            className="tricolour-card group relative bg-gradient-to-br from-blue-900/30 via-slate-900 to-slate-950 border border-cyan-500/30 hover:border-cyan-400 rounded-3xl p-8 flex flex-col justify-between cursor-pointer shadow-2xl transition hover:-translate-y-1.5 overflow-hidden"
          >
            {/* Saffron & Green subtle hover hints */}
            <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-[#FF9933]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#138808]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold mb-6">
                <span>FULL DIRECTORY</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Looking for All 50+ AVRX Services?
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mt-3">
                Browse our complete directory of digital engineering, loans, GST tax filings, insurance plans, and AI tools in one unified list.
              </p>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onNavigate('services');
              }}
              className="btn-tricolour-hover relative z-10 mt-8 w-full py-4 px-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 text-slate-950 font-bold text-sm rounded-2xl shadow-[0_0_25px_rgba(0,240,255,0.4)] flex items-center justify-between group-hover:scale-105 transition"
            >
              <span>View All 50+ Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
