import React from 'react';
import { ArrowRight, PhoneCall, Sparkles } from 'lucide-react';

interface FinalCTAProps {
  onNavigate: (page: string) => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#050811] via-[#080d1e] to-[#03060f] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-tr from-cyan-500/20 via-blue-600/15 to-purple-600/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold shadow-[0_0_20px_rgba(0,240,255,0.2)]">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span>Start Your Digital & Financial Growth</span>
        </div>

        <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
          Ready to Build, Grow & Protect Your Future?
        </h2>

        <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
          Whether you need a digital solution, financial assistance, tax support, insurance or AI-powered tools, AVRX brings everything together in one intelligent ecosystem.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onNavigate('digital-solutions')}
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 text-slate-950 font-bold text-base rounded-2xl shadow-[0_0_35px_rgba(0,240,255,0.4)] hover:scale-105 transition flex items-center justify-center gap-2.5"
          >
            <span>Explore Solutions</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <button
            onClick={() => onNavigate('contact')}
            className="w-full sm:w-auto px-8 py-4 bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 font-semibold text-base rounded-2xl transition flex items-center justify-center gap-2.5"
          >
            <PhoneCall className="w-5 h-5 text-cyan-400" />
            <span>Talk to AVRX</span>
          </button>
        </div>

      </div>
    </section>
  );
};
