import React from 'react';
import { ArrowRight, MessageSquare, Compass, PhoneCall, Rocket } from 'lucide-react';

interface HowItWorksProps {
  onNavigate: (page: string) => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onNavigate }) => {
  const steps = [
    {
      num: '01',
      title: 'Tell Us What You Need',
      desc: 'Use our AI Smart Finder, Health Checker, or contact form to submit your digital, financial, tax, or insurance requirements.',
      icon: <MessageSquare className="w-6 h-6 text-cyan-400" />
    },
    {
      num: '02',
      title: 'Get the Right Solution',
      desc: 'AVRX algorithms & domain architects analyze your profile and tailor the optimal solution roadmap with transparent pricing.',
      icon: <Compass className="w-6 h-6 text-emerald-400" />
    },
    {
      num: '03',
      title: 'Connect With an Expert',
      desc: 'A dedicated AVRX project engineer, CA, or loan concierge is assigned to review documents and guide execution.',
      icon: <PhoneCall className="w-6 h-6 text-amber-400" />
    },
    {
      num: '04',
      title: 'Get Started & Scale',
      desc: 'Watch your website launch, loan disburse, tax returns file, or insurance activate with 100% digital speed.',
      icon: <Rocket className="w-6 h-6 text-purple-400" />
    }
  ];

  return (
    <section className="py-24 bg-[#070b16] relative overflow-hidden border-t border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            Streamlined Execution
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-3">
            How It Works
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-4">
            A simple, transparent 4-step journey from initial inquiry to final deployment and growth.
          </p>
        </div>

        {/* 4 Step Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              className="relative p-8 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 transition duration-300 shadow-xl flex flex-col justify-between space-y-6"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800">
                    {step.icon}
                  </div>
                  <span className="text-3xl font-black font-mono text-cyan-400/80">
                    {step.num}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{step.desc}</p>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-slate-700">
                  <ArrowRight className="w-6 h-6 text-cyan-500/40" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 text-slate-950 font-bold text-sm rounded-2xl shadow-[0_0_25px_rgba(0,240,255,0.3)] hover:scale-105 transition"
          >
            Start Your AVRX Journey Today
          </button>
        </div>

      </div>
    </section>
  );
};
