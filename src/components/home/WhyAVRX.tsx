import React from 'react';
import { Layers, Bot, Users, Shield, Cpu, Lock } from 'lucide-react';

export const WhyAVRX: React.FC = () => {
  const reasons = [
    {
      title: 'One Ecosystem',
      desc: 'No need to hire 5 separate agencies. AVRX integrates digital development, finance, tax compliance, insurance, and AI under one roof.',
      icon: <Layers className="w-6 h-6 text-cyan-400" />
    },
    {
      title: 'AI Powered',
      desc: 'Leverage modern 2026 AI tools for website health audits, SEO analysis, business idea generation, and automated proposal creation.',
      icon: <Bot className="w-6 h-6 text-purple-400" />
    },
    {
      title: 'Human Support',
      desc: 'Technology backed by real domain experts. Dedicated chartered accountants, loan officers, and software engineers at your service.',
      icon: <Users className="w-6 h-6 text-emerald-400" />
    },
    {
      title: 'Transparent',
      desc: 'Zero hidden fee traps. Complete clarity on digital package deliverables, loan interest rates, tax compliance timelines, and terms.',
      icon: <Shield className="w-6 h-6 text-amber-400" />
    },
    {
      title: 'Scalable',
      desc: 'Whether you are a student, freelancer, startup, or multi-company enterprise, AVRX scales seamlessly as your business grows.',
      icon: <Cpu className="w-6 h-6 text-blue-400" />
    },
    {
      title: 'Enterprise Security',
      desc: 'Built with SSL encryption, strict data privacy protocols, and secure backend server architecture to protect your business assets.',
      icon: <Lock className="w-6 h-6 text-rose-400" />
    }
  ];

  return (
    <section className="py-24 bg-[#050811] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            Value Proposition
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-3">
            Why Businesses Choose AVRX
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-4">
            Combining next-generation digital technology, financial intelligence, and trusted expert execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 shadow-xl space-y-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
