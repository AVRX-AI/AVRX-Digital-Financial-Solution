import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Gift, HeartHandshake, PhoneCall } from 'lucide-react';
import janmashtamiBanner from '../../assets/images/janmashtami_banner_1788375834314.jpg';
import { useTheme } from '../../context/ThemeContext';

interface JanmashtamiHeroCardProps {
  onNavigate: (page: string) => void;
}

export const JanmashtamiHeroCard: React.FC<JanmashtamiHeroCardProps> = ({ onNavigate }) => {
  const { festiveMode, toggleFestiveMode } = useTheme();

  if (festiveMode !== 'janmashtami') {
    return null;
  }

  return (
    <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 my-6">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#031528] via-[#092240] to-[#041a33] border-2 border-amber-400/50 shadow-[0_0_40px_rgba(245,158,11,0.25)]">
        
        {/* Divine Golden Top Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-amber-400 via-yellow-200 via-cyan-400 to-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.8)] z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center p-6 sm:p-8 lg:p-10 relative z-10">
          
          {/* Left Column: Festive Message & Highlights */}
          <div className="lg:col-span-7 space-y-5 text-left">
            
            {/* Auspicious Badge */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 border border-amber-400/60 shadow-[0_0_15px_rgba(245,158,11,0.4)] text-amber-300 text-xs sm:text-sm font-bold tracking-wide">
                <span>🦚</span>
                <span>श्री कृष्ण जन्माष्टमी महापर्व विशेष</span>
                <span>🪈</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/40 text-emerald-300 text-xs font-semibold">
                <Gift className="w-3.5 h-3.5 text-emerald-400" />
                <span>Special Festive Celebration</span>
              </div>
            </div>

            {/* Main Headline */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
                हाथी घोड़ा पालकी, <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400">जय कन्हैया लाल की!</span>
              </h2>
              <p className="text-sm sm:text-base text-amber-100/90 mt-2 font-medium leading-relaxed">
                भगवान श्री कृष्ण के जन्मोत्सव पर आपके व्यापार और जीवन में सुख, समृद्धि एवं अद्वितीय डिजिटल और आर्थिक प्रगति का शुभ आगमन हो।
              </p>
            </div>

            {/* Sacred Gita Shloka Card */}
            <div className="p-4 rounded-2xl bg-[#020b17]/80 border border-amber-400/30 shadow-[inset_0_0_20px_rgba(245,158,11,0.1)] relative">
              <div className="text-xs sm:text-sm font-serif italic text-amber-200 font-semibold tracking-wide text-center sm:text-left">
                "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत। अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्॥"
              </div>
              <div className="text-[11px] text-slate-400 mt-1.5 text-center sm:text-left">
                — श्रीमद्भगवद्गीता | कर्म ही पूजा है, अपने व्यवसाय को दीजिए AVRX की डिजिटल और वित्तीय शक्ति।
              </div>
            </div>

            {/* Festive Privilege Perks */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="p-3 rounded-xl bg-slate-900/80 border border-amber-400/25 flex items-start gap-2.5">
                <div className="p-1.5 rounded-lg bg-amber-400/20 text-amber-300 shrink-0 mt-0.5">
                  <Gift className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">20% Festive Off</div>
                  <div className="text-[11px] text-slate-400">On Custom Web & Apps</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-amber-400/25 flex items-start gap-2.5">
                <div className="p-1.5 rounded-lg bg-emerald-400/20 text-emerald-300 shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Free Consultation</div>
                  <div className="text-[11px] text-slate-400">Business Loans & GST</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-amber-400/25 flex items-start gap-2.5">
                <div className="p-1.5 rounded-lg bg-cyan-400/20 text-cyan-300 shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Express Setup</div>
                  <div className="text-[11px] text-slate-400">Priority Processing</div>
                </div>
              </div>
            </div>

            {/* Action Buttons & Theme Controls */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-slate-950 font-extrabold text-sm shadow-[0_0_25px_rgba(245,158,11,0.5)] hover:brightness-110 transition-transform active:scale-95 flex items-center gap-2 cursor-pointer"
              >
                <span>शुभ जन्माष्टमी ऑफर प्राप्त करें</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('digital-solutions')}
                className="px-5 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-850 text-amber-200 border border-amber-400/30 font-semibold text-sm transition cursor-pointer"
              >
                Explore Solutions
              </button>

              {/* Seamless Theme Toggle Button (fulfill user's wish to easily change later) */}
              <button
                onClick={toggleFestiveMode}
                className="px-3 py-2 rounded-xl bg-black/50 hover:bg-black/80 border border-slate-700 text-xs text-slate-300 hover:text-white transition cursor-pointer flex items-center gap-1.5 ml-auto"
                title="You can switch back to standard theme anytime"
              >
                <span>Theme:</span>
                <span className="text-amber-400 font-bold">Janmashtami</span>
                <span className="text-[10px] text-slate-400 underline">(Turn Off)</span>
              </button>
            </div>

          </div>

          {/* Right Column: Visual Artwork Display */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto rounded-2xl overflow-hidden border-2 border-amber-400/40 shadow-[0_0_35px_rgba(245,158,11,0.35)] group">
              <img
                src={janmashtamiBanner}
                alt="Shree Krishna Janmashtami Mahaparva - AVRX Celebration"
                className="w-full h-auto object-cover max-h-[360px] transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020b17] via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-3 left-4 right-4 text-center">
                <div className="text-xs font-bold text-amber-300 font-mono tracking-wider uppercase">
                  शुभ कृष्ण जन्माष्टमी महोत्सव
                </div>
                <div className="text-sm font-extrabold text-white drop-shadow-md">
                  शाश्वत कृपा, सुख और समृद्ध व्यापार
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
