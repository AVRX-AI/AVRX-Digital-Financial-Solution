import React, { useState } from 'react';
import { Sparkles, Heart, Gift, ShieldCheck, ArrowRight, X } from 'lucide-react';

interface RakshaBandhanBannerProps {
  onNavigate?: (page: string) => void;
}

export const RakshaBandhanBanner: React.FC<RakshaBandhanBannerProps> = ({ onNavigate }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative z-50 bg-gradient-to-r from-[#500724] via-[#7c1529] to-[#431407] border-b border-amber-500/40 text-white shadow-[0_4px_25px_rgba(245,158,11,0.25)] overflow-hidden">
      {/* Background festive shimmer */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(245,158,11,0.2),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(225,29,72,0.2),transparent_60%)] pointer-events-none" />

      {/* Decorative Golden Rakhi Thread Border at Top and Bottom */}
      <div className="h-[2px] w-full bg-gradient-to-r from-amber-400 via-rose-400 to-amber-400 animate-pulse opacity-90" />

      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 py-2.5 sm:py-3 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
        
        {/* Left Side: Festive Icon & Greetings */}
        <div className="flex items-center gap-2.5 flex-wrap">
          <span className="flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-tr from-amber-500 to-rose-600 shadow-md shadow-amber-500/40 border border-yellow-300 text-sm">
            🪢
          </span>

          <div className="flex items-center gap-2">
            <span className="font-extrabold text-amber-300 tracking-wide uppercase text-[11px] sm:text-xs px-2.5 py-0.5 rounded-full bg-amber-950/80 border border-amber-400/50 shadow-inner">
              ✨ रक्षाबंधन महापर्व
            </span>
            <span className="font-semibold text-rose-100 hidden md:inline">
              | Celebrating the Eternal Bond of Trust, Protection &amp; Prosperity
            </span>
          </div>
        </div>

        {/* Center: Festive Message */}
        <div className="hidden lg:flex items-center gap-2 text-amber-100/90 font-medium text-xs">
          <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400 inline" />
          <span>
            सुरक्षा और विश्वास का अटूट बंधन — AVRX empowers your business with digital trust and growth!
          </span>
        </div>

        {/* Right Side: CTA Button & Dismiss */}
        <div className="flex items-center gap-2 ml-auto">
          {onNavigate && (
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-yellow-300 text-slate-950 text-xs font-black transition-all shadow-md shadow-amber-500/30 hover:scale-105 cursor-pointer whitespace-nowrap"
            >
              <Gift className="w-3.5 h-3.5" />
              <span>Rakhi Special Consultation</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          )}

          <button
            onClick={() => setIsVisible(false)}
            className="p-1 rounded-full text-amber-200/70 hover:text-white hover:bg-white/10 transition cursor-pointer"
            title="Dismiss Banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

      </div>

      <div className="h-[2px] w-full bg-gradient-to-r from-amber-400 via-rose-400 to-amber-400 animate-pulse opacity-90" />
    </div>
  );
};
