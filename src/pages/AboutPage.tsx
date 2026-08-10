import React from 'react';
import { SEO } from '../components/common/SEO';
import { Layers, ShieldCheck, Zap, Globe2, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#050811] text-white pt-28 pb-20">
      <SEO
        title="About AVRX Digital & Financial Solution | Next-Gen Global Platform"
        description="Learn about AVRX positioning as a modern technology and financial solutions company helping individuals, startups, and enterprises."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            About AVRX
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white">
            Combining Fintech + AI + Digital Agency
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            AVRX is a modern technology and financial solutions company designed to streamline how individuals and businesses build, finance, tax-comply, protect, and automate their future.
          </p>
        </div>

        {/* Brand Mission Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-16">
          
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-2">
            <div className="text-xl font-black text-cyan-400 font-mono">01. BUILD</div>
            <p className="text-xs text-slate-300">Websites, Apps & E-Commerce Infrastructure</p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-2">
            <div className="text-xl font-black text-emerald-400 font-mono">02. GROW</div>
            <p className="text-xs text-slate-300">Organic SEO Growth & Digital Marketing</p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-2">
            <div className="text-xl font-black text-amber-400 font-mono">03. FINANCE</div>
            <p className="text-xs text-slate-300">Personal & Business Capital Concierge</p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-2">
            <div className="text-xl font-black text-purple-400 font-mono">04. PROTECT</div>
            <p className="text-xs text-slate-300">Tax Compliance & Risk Insurance</p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-2">
            <div className="text-xl font-black text-rose-400 font-mono">05. AUTOMATE</div>
            <p className="text-xs text-slate-300">AI Business Intelligence Tools</p>
          </div>

        </div>

        {/* Detailed Story Box */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl space-y-6 max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-white">The AVRX Philosophy</h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Historically, business owners had to deal with fragmented vendors—a web developer for site creation, a separate loan agent for business working capital, a distant accountant for GST tax filings, and an insurance broker for coverage.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            AVRX eliminates this friction by unifying software engineering, capital disbursement, tax filings, and AI tools into a single, high-speed ecosystem backed by 100% digital execution.
          </p>

          <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-3.5 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs sm:text-sm rounded-xl transition flex items-center gap-2"
            >
              <span>Connect with AVRX Leadership</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono text-slate-400">Official Domain: avrx.in</span>
          </div>
        </div>

      </div>
    </div>
  );
};
