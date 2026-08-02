import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Bot, 
  TrendingUp, 
  ShieldCheck, 
  CheckCircle2, 
  Cpu, 
  Award, 
  Zap,
  Globe2,
  DollarSign,
  BarChart3
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface HeroSectionProps {
  language?: Language;
  onOpenConsultation?: () => void;
  onExploreServices?: () => void;
  onTalkToAI?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  language = 'en',
  onOpenConsultation = () => {},
  onExploreServices = () => {},
  onTalkToAI = () => {}
}) => {
  const t = translations[language] || translations.en;

  return (
    <section id="hero" className="relative pt-8 pb-16 sm:pt-16 sm:pb-24 overflow-hidden">
      {/* Background Radial Glow & Glassmorphic Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-tr from-blue-600/25 via-cyan-500/15 to-purple-600/25 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-32 left-10 w-72 h-72 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/15 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-inner">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span className="text-xs sm:text-sm font-semibold tracking-wide bg-gradient-to-r from-blue-300 via-cyan-300 to-purple-300 bg-clip-text text-transparent">
                INDIA’S #1 AI-POWERED DIGITAL & FINANCIAL PLATFORM • avrx.in
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-['Poppins'] font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.12] text-white">
              Transform Your Business with{' '}
              <span className="bg-gradient-to-r from-[#0A66FF] via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                AI-Powered Digital
              </span>{' '}
              & Financial Solutions
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              {t.heroSubheading}
            </p>

            {/* CTA Buttons Row */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-gradient-to-r from-[#0A66FF] via-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold text-sm sm:text-base shadow-xl shadow-blue-500/30 hover:shadow-cyan-500/40 transition-all flex items-center justify-center space-x-2 group"
              >
                <span>{t.ctaFreeConsultation}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreServices}
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base border border-white/20 backdrop-blur-xl transition-all flex items-center justify-center space-x-2"
              >
                <span>{t.ctaExploreServices}</span>
              </button>

              <button
                onClick={onTalkToAI}
                className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 hover:from-cyan-500/30 hover:to-purple-500/30 text-cyan-300 font-bold text-sm sm:text-base border border-cyan-400/40 backdrop-blur-xl transition-all flex items-center justify-center space-x-2"
              >
                <Bot className="w-5 h-5 text-cyan-400" />
                <span>{t.ctaTalkAI}</span>
              </button>
            </div>

            {/* Core Trust Badges Row */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              <div className="flex items-center space-x-2.5">
                <div className="p-2 rounded-xl bg-blue-500/20 text-blue-400">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">100/100</div>
                  <div className="text-[11px] text-white/60">Core Web Vitals</div>
                </div>
              </div>

              <div className="flex items-center space-x-2.5">
                <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">#1 on Google</div>
                  <div className="text-[11px] text-white/60">SEO Growth</div>
                </div>
              </div>

              <div className="flex items-center space-x-2.5">
                <div className="p-2 rounded-xl bg-purple-500/20 text-purple-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">₹100+ Crores</div>
                  <div className="text-[11px] text-white/60">Loans & ITR Advised</div>
                </div>
              </div>

              <div className="flex items-center space-x-2.5">
                <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">500+ Clients</div>
                  <div className="text-[11px] text-white/60">Pan India Partner</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Column (5 Cols) - Apple + Linear 3D Glassmorphic Dashboard */}
          <div className="lg:col-span-5 relative">
            {/* Main Glass Dashboard Card */}
            <div className="relative rounded-3xl bg-gradient-to-b from-white/15 to-white/5 p-4 sm:p-6 backdrop-blur-2xl border border-white/20 shadow-2xl shadow-blue-900/50">
              
              {/* Dashboard Header Bar */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-400"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
                  <span className="ml-2 text-xs font-mono text-white/70">https://avrx.in/dashboard</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-[11px] font-semibold text-cyan-300 flex items-center space-x-1">
                  <Cpu className="w-3 h-3" />
                  <span>AI Engine v2.4 Active</span>
                </span>
              </div>

              {/* Interactive 3D AI Workspace & Business Growth Graph preview */}
              <div className="space-y-4">
                {/* Visual Banner Image */}
                <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden group">
                  <img 
                    src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80" 
                    alt="AI Powered Digital & Financial Dashboard by AVRX"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081B33] via-[#081B33]/40 to-transparent" />
                  
                  {/* Overlay Floating AI Robot & SEO Score Badge */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <div className="flex items-center space-x-2.5 bg-[#081B33]/90 backdrop-blur-xl px-3 py-1.5 rounded-xl border border-white/20 shadow-lg">
                      <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center text-white font-bold">
                        AI
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">AVRX 360° Smart Engine</div>
                        <div className="text-[10px] text-cyan-300">Web • Apps • Loans • GST • SEO</div>
                      </div>
                    </div>
                    <div className="bg-emerald-500/90 text-white font-bold text-xs px-2.5 py-1.5 rounded-xl shadow-lg flex items-center space-x-1">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>+340% ROI</span>
                    </div>
                  </div>
                </div>

                {/* Simulated Business Growth Bar Chart */}
                <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-white/80 flex items-center space-x-1.5">
                      <BarChart3 className="w-4 h-4 text-cyan-400" />
                      <span>Year-over-Year Client Business Growth</span>
                    </span>
                    <span className="text-xs font-bold text-emerald-400">+142.8%</span>
                  </div>

                  <div className="grid grid-cols-6 gap-2 items-end h-20 pt-2">
                    {[
                      { month: 'Jan', height: '40%', val: '₹18L' },
                      { month: 'Mar', height: '55%', val: '₹28L' },
                      { month: 'May', height: '65%', val: '₹39L' },
                      { month: 'Jul', height: '78%', val: '₹52L' },
                      { month: 'Sep', height: '88%', val: '₹68L' },
                      { month: 'Nov', height: '100%', val: '₹95L' },
                    ].map((bar, i) => (
                      <div key={i} className="flex flex-col items-center">
                        <div className="w-full bg-white/10 rounded-t-lg h-16 flex items-end justify-center p-1">
                          <div 
                            className="w-full rounded-t-md bg-gradient-to-t from-[#0A66FF] to-cyan-400 transition-all duration-500"
                            style={{ height: bar.height }}
                          />
                        </div>
                        <span className="text-[10px] text-white/60 mt-1 font-mono">{bar.month}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Two Floating Neomorphic Status Chips */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center space-x-2.5">
                    <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
                      <Globe2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Digital Tech</div>
                      <div className="text-[10px] text-white/60">Web, Apps, SEO #1</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center space-x-2.5">
                    <div className="p-2 rounded-lg bg-purple-500/20 text-purple-400">
                      <DollarSign className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Financial Hub</div>
                      <div className="text-[10px] text-white/60">Loans, GST & ITR</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Floating Tech Badges around card */}
            <div className="absolute -top-6 -right-4 bg-[#081B33]/90 backdrop-blur-xl border border-cyan-500/40 px-3.5 py-2 rounded-2xl shadow-xl hidden sm:flex items-center space-x-2 animate-bounce" style={{ animationDuration: '4s' }}>
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
              <span className="text-xs font-bold text-cyan-300">ISO & IRDAI Aligned</span>
            </div>
            <div className="absolute -bottom-5 -left-4 bg-[#081B33]/90 backdrop-blur-xl border border-purple-500/40 px-3.5 py-2 rounded-2xl shadow-xl hidden sm:flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-purple-400" />
              <span className="text-xs font-bold text-white">Fast-Track Loan Approval</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
