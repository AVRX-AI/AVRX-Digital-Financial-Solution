import React, { useState } from 'react';
import { Sparkles, ArrowRight, X, Heart, ShieldCheck, Check } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface JanmashtamiTopBannerProps {
  onNavigate?: (page: string) => void;
}

export const JanmashtamiTopBanner: React.FC<JanmashtamiTopBannerProps> = ({ onNavigate }) => {
  const { festiveMode, toggleFestiveMode } = useTheme();
  const [isDismissed, setIsDismissed] = useState(false);

  // If festiveMode is off or user dismissed the top banner, don't show
  if (festiveMode !== 'janmashtami' || isDismissed) {
    return null;
  }

  return (
    <div className="relative z-50 bg-gradient-to-r from-[#031525] via-[#0b2545] via-[#133e66] to-[#041d33] border-b border-amber-400/40 text-white shadow-[0_4px_25px_rgba(245,158,11,0.25)] select-none">
      {/* Top golden sparkling line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-amber-400 via-yellow-200 via-emerald-400 to-amber-400 opacity-90 shadow-[0_0_12px_rgba(251,191,36,0.8)]" />

      <div className="max-w-[1720px] mx-auto px-3 sm:px-6 py-2 sm:py-2.5 flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm">
        
        {/* Left: Divine Motifs & Festive Salutation */}
        <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-[280px]">
          {/* Animated Peacock Feather & Flute Badge */}
          <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-400/15 border border-amber-400/50 shadow-[0_0_12px_rgba(245,158,11,0.3)] text-amber-300 font-bold shrink-0 animate-pulse">
            <span className="text-base sm:text-lg">🦚</span>
            <span className="text-base sm:text-lg">🪈</span>
            <span className="hidden xs:inline text-[11px] font-mono uppercase tracking-wider text-amber-200">
              जन्माष्टमी महापर्व
            </span>
          </div>

          <div className="leading-tight">
            <div className="font-bold flex items-center gap-1.5 text-white text-[12px] sm:text-[13px] tracking-wide">
              <span className="text-amber-300 font-extrabold">जय श्री कृष्णा!</span>
              <span>AVRX परिवार की ओर से श्री कृष्ण जन्माष्टमी की हार्दिक शुभकामनाएँ!</span>
              <span className="hidden md:inline text-amber-300">✨</span>
            </div>
            <div className="text-[11px] text-amber-200/80 hidden sm:block">
              हाथी घोड़ा पालकी, जय कन्हैया लाल की! Special Festive Offer: 20% Privilege Benefits on Web & Financial Setup.
            </div>
          </div>
        </div>

        {/* Right: Quick Action & One-Click Theme Switcher */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0 ml-auto">
          {/* Quick CTA */}
          <button
            onClick={() => onNavigate?.('contact')}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-slate-950 font-extrabold text-[11px] sm:text-xs shadow-[0_0_15px_rgba(245,158,11,0.4)] hover:brightness-110 transition-transform active:scale-95 cursor-pointer"
          >
            <span>Festive Consultation</span>
            <ArrowRight className="w-3 h-3" />
          </button>

          {/* Theme Quick Switcher (Explicitly fulfill user's requirement: easy to change later) */}
          <button
            onClick={toggleFestiveMode}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-950/70 border border-amber-400/40 text-amber-300 hover:text-white hover:bg-slate-900 transition text-[11px] font-medium cursor-pointer"
            title="Click to toggle Janmashtami theme on or off"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="hidden xs:inline">Theme:</span>
            <span className="font-bold text-amber-200">Janmashtami Active</span>
            <span className="text-[10px] text-slate-400 bg-slate-800 px-1.5 py-0.5 rounded ml-0.5 hover:bg-slate-700">
              (Change)
            </span>
          </button>

          {/* Dismiss button */}
          <button
            onClick={() => setIsDismissed(true)}
            className="p-1 text-amber-300/70 hover:text-white rounded-md hover:bg-white/10 transition cursor-pointer"
            title="Close banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
