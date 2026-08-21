import React from 'react';
import { Layers, Bot, Users, Shield, Cpu, Lock, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { launchSoundEngine } from '../../utils/launchSoundEngine';

export const WhyAVRX: React.FC = () => {
  const reasons = [
    {
      title: 'One Unified Ecosystem',
      tagline: 'Digital + Finance + Tax + AI',
      desc: 'No need to juggle 5 separate agencies. AVRX seamlessly unites software engineering, loans, CA tax filings, insurance, and AI under one roof.',
      icon: Layers,
      gradient: 'from-cyan-500 to-blue-600',
      border: 'border-cyan-500/40 hover:border-cyan-400',
      bgGlow: 'from-cyan-950/30 via-slate-900/80 to-slate-950',
      badge: 'Integrated'
    },
    {
      title: 'Next-Gen AI Capabilities',
      tagline: '70+ Smart In-Browser Tools',
      desc: 'Leverage 2026 AI tools for website speed audits, SEO keyword intelligence, business plan generation, and instantaneous EMI/Tax calculators.',
      icon: Bot,
      gradient: 'from-purple-500 to-violet-600',
      border: 'border-purple-500/40 hover:border-purple-400',
      bgGlow: 'from-purple-950/30 via-slate-900/80 to-slate-950',
      badge: 'AI Powered'
    },
    {
      title: 'Dedicated Human Experts',
      tagline: 'Chartered Accountants & Tech Leads',
      desc: 'Technology backed by real domain authorities. Senior Chartered Accountants, certified loan specialists, and full-stack software engineers.',
      icon: Users,
      gradient: 'from-emerald-500 to-teal-600',
      border: 'border-emerald-500/40 hover:border-emerald-400',
      bgGlow: 'from-emerald-950/30 via-slate-900/80 to-slate-950',
      badge: 'Human Touch'
    },
    {
      title: '100% Ethical & Transparent',
      tagline: 'Zero Hidden Fees & Clear Terms',
      desc: 'Complete clarity on digital development milestones, loan interest rates, subsidy eligibility, and CA compliance filing schedules.',
      icon: Shield,
      gradient: 'from-amber-500 to-orange-600',
      border: 'border-amber-500/40 hover:border-amber-400',
      bgGlow: 'from-amber-950/30 via-slate-900/80 to-slate-950',
      badge: 'Honest Advisory'
    },
    {
      title: 'Enterprise Scalability',
      tagline: 'From Startups to Large Conglomerates',
      desc: 'Whether you are a solo entrepreneur, retail business, or multi-state enterprise, our cloud architectures and financial pipelines scale effortlessly.',
      icon: Cpu,
      gradient: 'from-blue-500 to-indigo-600',
      border: 'border-blue-500/40 hover:border-blue-400',
      bgGlow: 'from-blue-950/30 via-slate-900/80 to-slate-950',
      badge: 'Cloud Ready'
    },
    {
      title: 'Bank-Grade Security',
      tagline: 'SSL Encryption & Zero Data Sharing',
      desc: 'Built with TLS encryption, strict client data privacy protocols, and automated cloud backups to keep your sensitive business assets 100% secure.',
      icon: Lock,
      gradient: 'from-rose-500 to-pink-600',
      border: 'border-rose-500/40 hover:border-rose-400',
      bgGlow: 'from-rose-950/30 via-slate-900/80 to-slate-950',
      badge: 'Encrypted'
    }
  ];

  return (
    <section className="py-24 bg-[#030712] relative overflow-hidden text-white select-none">
      {/* Multi-Color Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(0,240,255,0.15)]">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>THE AVRX VALUE PROPOSITION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Why Businesses Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">AVRX</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Combining next-generation digital technology, financial intelligence, and trusted expert execution in Chhattisgarh and India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                onMouseEnter={() => launchSoundEngine.playHoverChirp()}
                className={`p-8 rounded-3xl bg-gradient-to-br ${item.bgGlow} border ${item.border} transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] backdrop-blur-xl group relative overflow-hidden space-y-4`}
              >
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-950/80 border border-slate-800 text-slate-300">
                    {item.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-cyan-400 mt-0.5">
                    {item.tagline}
                  </p>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
