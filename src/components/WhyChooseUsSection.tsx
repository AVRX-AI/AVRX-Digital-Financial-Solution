import React from 'react';
import { ShieldCheck, Cpu, Briefcase, Zap, CheckCircle2, Trophy, Clock, Lock } from 'lucide-react';

export const WhyChooseUsSection: React.FC = () => {
  const pillars = [
    {
      icon: Cpu,
      title: 'Dual Tech & CA Expertise',
      subtitle: 'Where Software Engineers Meet Senior Chartered Accountants',
      description: 'Unlike ordinary web agencies or standalone CAs, AVRX bridges high-performance web engineering with expert tax & financial structuring under one roof.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Lock,
      title: '100% Fixed-Price Transparency',
      subtitle: 'Zero Hidden Costs or Surprise Bills',
      description: 'Every project begins with a clear, itemized architecture & cost quotation. What we quote is exactly what you pay — guaranteed by contract.',
      color: 'from-purple-500 to-blue-600'
    },
    {
      icon: Clock,
      title: 'Guaranteed Speed & Delivery',
      subtitle: '7-14 Day Website Sprints & Rapid Financial Filing',
      description: 'We respect your time. From custom React websites to CGTMSE MSME loan documentation, our streamlined workflows deliver ahead of schedule.',
      color: 'from-emerald-500 to-cyan-500'
    },
    {
      icon: Trophy,
      title: 'Pan-India MSME & D2C Track Record',
      subtitle: '500+ Successful Businesses Scaled Since 2019',
      description: 'We have helped startups and established enterprises across Delhi NCR, Mumbai, Bangalore & Pune secure ₹50+ Crores in financing and #1 organic rankings.',
      color: 'from-amber-500 to-purple-600'
    }
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-[#081B33] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-bold mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>THE AVRX ARCHITECTURAL ADVANTAGE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Why Indian Enterprises Trust <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-[#0A66FF]">AVRX Solutions</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white/70">
            We don't just build websites or file taxes in isolation — we harmonize your entire digital presence and financial backbone for sustainable compounding growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-400/40 transition-all duration-300 flex items-start space-x-5"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-500/20`}>
                  <Icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <div className="text-xs font-semibold text-cyan-300 mt-0.5 mb-2">{item.subtitle}</div>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Table */}
        <div className="mt-16 p-8 rounded-3xl bg-white/5 border border-white/10">
          <h3 className="text-xl font-bold text-white text-center mb-6">
            AVRX vs. Standard Agencies & Standalone CAs
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-3 px-4 text-xs font-bold text-white/60">Feature / Standard</th>
                  <th className="py-3 px-4 text-xs font-bold text-cyan-400 bg-cyan-950/40 rounded-t-xl">AVRX 360° Architecture</th>
                  <th className="py-3 px-4 text-xs font-bold text-white/40">Standard Web Agency</th>
                  <th className="py-3 px-4 text-xs font-bold text-white/40">Standalone CA / Tax Firm</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-xs text-white/80">
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-white">Custom Responsive Code & Speed</td>
                  <td className="py-3.5 px-4 text-emerald-400 font-bold bg-cyan-950/40">✅ 100/100 Core Web Vitals</td>
                  <td className="py-3.5 px-4 text-amber-300">⚠️ Slow WordPress templates</td>
                  <td className="py-3.5 px-4 text-rose-400">❌ Not offered</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-white">GST, ITR & Tax Strategy</td>
                  <td className="py-3.5 px-4 text-emerald-400 font-bold bg-cyan-950/40">✅ In-house CA Tax Specialists</td>
                  <td className="py-3.5 px-4 text-rose-400">❌ Zero financial expertise</td>
                  <td className="py-3.5 px-4 text-emerald-400">✅ Traditional filing only</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-white">MSME Unsecured Loan Assistance</td>
                  <td className="py-3.5 px-4 text-emerald-400 font-bold bg-cyan-950/40">✅ CGTMSE & Bank Liaison</td>
                  <td className="py-3.5 px-4 text-rose-400">❌ Not offered</td>
                  <td className="py-3.5 px-4 text-amber-300">⚠️ Limited bank network</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-white">Pricing & Delivery Guarantee</td>
                  <td className="py-3.5 px-4 text-emerald-400 font-bold bg-cyan-950/40">✅ Fixed Contract & Timeline</td>
                  <td className="py-3.5 px-4 text-rose-400">❌ Frequent scope creep</td>
                  <td className="py-3.5 px-4 text-white/70">Hourly / Retainer billing</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
