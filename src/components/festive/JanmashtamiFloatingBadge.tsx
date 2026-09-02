import React, { useState } from 'react';
import { Sparkles, X, Check, ArrowRight, ToggleLeft, ToggleRight, Gift } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import janmashtamiBanner from '../../assets/images/janmashtami_banner_1788375834314.jpg';

interface JanmashtamiFloatingBadgeProps {
  onNavigate?: (page: string) => void;
}

export const JanmashtamiFloatingBadge: React.FC<JanmashtamiFloatingBadgeProps> = ({ onNavigate }) => {
  const { festiveMode, toggleFestiveMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const isFestive = festiveMode === 'janmashtami';

  return (
    <>
      {/* Floating Pill Trigger Button (Bottom Left, safely away from WhatsApp on right) */}
      <div className="fixed bottom-20 md:bottom-6 left-4 z-40 select-none">
        <button
          onClick={() => setIsOpen(true)}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-full border shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer ${
            isFestive
              ? 'bg-gradient-to-r from-[#031d38] via-[#092b52] to-[#041d38] border-amber-400/60 text-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.4)]'
              : 'bg-slate-900/95 border-slate-700 text-slate-300 hover:text-white shadow-md'
          }`}
          title="Janmashtami Festive Theme Settings & Greetings"
        >
          <span className="text-lg">{isFestive ? '🦚' : '✨'}</span>
          <div className="text-left leading-tight hidden xs:block">
            <div className="text-[11px] font-extrabold tracking-wide text-amber-200">
              {isFestive ? 'जन्माष्टमी थीम Active' : 'Janmashtami Theme'}
            </div>
            <div className="text-[9px] text-amber-300/80 font-mono">
              {isFestive ? 'Click to manage' : 'Click to preview'}
            </div>
          </div>
          {isFestive && (
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping ml-0.5" />
          )}
        </button>
      </div>

      {/* Celebratory Dialog Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg rounded-3xl bg-gradient-to-b from-[#041a33] via-[#031326] to-[#020a14] border-2 border-amber-400/60 shadow-[0_0_50px_rgba(245,158,11,0.35)] overflow-hidden text-white p-6 sm:p-7 space-y-5">
            
            {/* Top golden accent line */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-amber-400 via-yellow-200 to-emerald-400" />

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Festive Header Graphic */}
            <div className="rounded-2xl overflow-hidden border border-amber-400/40 relative shadow-[0_0_20px_rgba(245,158,11,0.2)]">
              <img
                src={janmashtamiBanner}
                alt="Janmashtami Celebration"
                className="w-full h-36 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#031326] via-transparent to-transparent" />
              <div className="absolute bottom-2 left-3 right-3 text-center">
                <span className="text-amber-300 font-extrabold text-sm drop-shadow-md">
                  🦚 श्री कृष्ण जन्माष्टमी महापर्व 🪈
                </span>
              </div>
            </div>

            {/* Greeting & Message */}
            <div className="text-center space-y-2">
              <h3 className="text-xl font-extrabold text-white">
                हाथी घोड़ा पालकी, <span className="text-amber-300">जय कन्हैया लाल की!</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                AVRX परिवार की ओर से आपको और आपके परिजनों को श्री कृष्ण जन्माष्टमी की हार्दिक शुभकामनाएँ!
              </p>
            </div>

            {/* Theme Toggle Box (Easily toggle/change anytime) */}
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-amber-400/30 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <span>Website Festive Theme</span>
                    {isFestive && (
                      <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-400 font-mono font-bold">
                        ON
                      </span>
                    )}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    {isFestive
                      ? 'जन्माष्टमी थीम अभी एक्टिव है। आप इसे कभी भी बदल सकते हैं।'
                      : 'सामान्य थीम एक्टिव है। जन्माष्टमी थीम देखने के लिए ऑन करें।'}
                  </div>
                </div>

                <button
                  onClick={toggleFestiveMode}
                  className={`p-2 rounded-xl border transition flex items-center gap-2 cursor-pointer ${
                    isFestive
                      ? 'bg-amber-400 text-slate-950 font-bold border-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.4)]'
                      : 'bg-slate-800 text-slate-300 border-slate-700 hover:text-white'
                  }`}
                >
                  {isFestive ? (
                    <>
                      <ToggleRight className="w-5 h-5 text-slate-950" />
                      <span className="text-xs">Turn Off</span>
                    </>
                  ) : (
                    <>
                      <ToggleLeft className="w-5 h-5 text-slate-400" />
                      <span className="text-xs">Activate</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-[10px] text-amber-200/70 border-t border-slate-800 pt-2 flex items-center gap-1">
                <Check className="w-3 h-3 text-emerald-400 shrink-0" />
                <span>त्योहार के बाद आप इस थीम को एक क्लिक में सामान्य कर सकते हैं।</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onNavigate?.('contact');
                }}
                className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-slate-950 font-extrabold text-xs shadow-[0_0_15px_rgba(245,158,11,0.4)] hover:brightness-110 transition text-center cursor-pointer"
              >
                Special Festive Benefits
              </button>

              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-xs font-semibold hover:bg-slate-800 cursor-pointer"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
