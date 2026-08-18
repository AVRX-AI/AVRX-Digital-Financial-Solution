import React from 'react';
import { 
  Sparkles, 
  Layers, 
  Bot, 
  Target, 
  Network, 
  Users, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

interface WhyAVRXNextGenProps {
  onNavigate: (page: string, slug?: string) => void;
}

export const WhyAVRXNextGen: React.FC<WhyAVRXNextGenProps> = ({ onNavigate }) => {
  const reasons = [
    {
      title: 'One Unified Platform',
      tagline: 'Digital + Finance + Tax + Insurance + AI',
      desc: 'Eliminate the friction of juggling 5 different agencies, CAs, and loan brokers. AVRX brings everything under one synchronized roof.',
      icon: Layers,
      color: 'from-cyan-400 to-blue-500',
      badge: 'Integrated'
    },
    {
      title: 'AI Assisted Intelligence',
      tagline: 'Smart tools & automated workflows',
      desc: 'Access 70+ in-browser productivity utilities, instant loan EMI math, and AI copilot discovery tailored to your business profile.',
      icon: Bot,
      color: 'from-purple-400 to-indigo-500',
      badge: 'AI-Powered'
    },
    {
      title: 'Practical Business Focus',
      tagline: 'Built for real Indian enterprise growth',
      desc: 'Zero fluff, zero unnecessary technical debt. We deliver high-converting websites, guaranteed statutory filings, and bank-sanctioned credit.',
      icon: Target,
      color: 'from-emerald-400 to-teal-500',
      badge: 'High ROI'
    },
    {
      title: 'Connected Ecosystem',
      tagline: 'Services work together symbiotically',
      desc: 'Your company registration feeds directly into GST, which feeds into your business loan eligibility and e-commerce payment gateways.',
      icon: Network,
      color: 'from-amber-400 to-yellow-500',
      badge: 'Connected'
    },
    {
      title: 'Senior Human Support',
      tagline: 'AI speed + Dedicated relationship managers',
      desc: 'Enjoy rapid automated tooling with the reassurance of real experienced human CAs, developers, and loan advisors just a phone call away.',
      icon: Users,
      color: 'from-rose-400 to-pink-500',
      badge: 'Human + AI'
    }
  ];

  return (
    <section className="py-24 bg-[#050811] relative overflow-hidden">
      
      {/* Background illumination */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-l from-cyan-500/10 via-blue-500/10 to-transparent rounded-full blur-[150px] pointer-events-none" />

      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-5xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-bold font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Platform Advantages</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            Why Build Your Journey{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              With AVRX?
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            The next-generation standard for digital products, capital access, and tax compliance across India.
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => {
            const Icon = r.icon;

            return (
              <div
                key={i}
                className="p-6 sm:p-8 rounded-3xl bg-slate-950/80 hover:bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 space-y-4 flex flex-col justify-between shadow-xl group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-2xl bg-gradient-to-r ${r.color} text-slate-950 font-black shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-slate-900 text-cyan-300 border border-slate-800">
                      {r.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition">
                      {r.title}
                    </h3>
                    <div className="text-xs text-cyan-400 font-mono mt-0.5">
                      {r.tagline}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-400 mt-2.5 leading-relaxed">
                      {r.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-xs font-bold text-cyan-400">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Standard AVRX Protocol</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
