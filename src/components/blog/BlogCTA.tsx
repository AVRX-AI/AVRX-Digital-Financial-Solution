import React from 'react';
import { ArrowRight, Sparkles, MessageSquare } from 'lucide-react';
import { SITE_CONFIG } from '../../config';

interface BlogCTAProps {
  onNavigate: (page: string) => void;
}

export const BlogCTA: React.FC<BlogCTAProps> = ({ onNavigate }) => {
  return (
    <div className="relative my-14 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-900 via-[#0a1124] to-slate-900 border border-cyan-500/30 overflow-hidden shadow-2xl not-prose">
      {/* Background Cybernetic Shimmer */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-[#FF9933]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>TRANSFORM YOUR BUSINESS TODAY</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
          अपने Business को Digital बनाइए
        </h2>

        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Professional Website, SEO और Digital Solutions के साथ अपने Business की online presence को मजबूत करें।
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onNavigate('contact')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 text-slate-950 font-black text-sm hover:brightness-110 transition-all shadow-[0_0_25px_rgba(0,240,255,0.4)] flex items-center justify-center gap-2 transform hover:scale-105 active:scale-95"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => {
              const url = `https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent('Hello AVRX! I read your article on Business Websites and would like to build a professional website for my business.')}`;
              window.open(url, '_blank');
            }}
            className="w-full sm:w-auto px-7 py-4 rounded-xl bg-slate-900/90 border border-slate-700 hover:border-cyan-400 text-slate-200 hover:text-white font-bold text-sm transition-all flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>Contact AVRX</span>
          </button>
        </div>

        <div className="pt-2 flex items-center justify-center gap-6 text-[11px] text-slate-400 font-mono">
          <span>✓ Zero Hidden Fees</span>
          <span>✓ Sub-second Speed</span>
          <span>✓ 100% Ownership</span>
        </div>
      </div>
    </div>
  );
};
