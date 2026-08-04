import React from 'react';
import {
  ShieldCheck,
  Zap,
  Award,
  Cpu,
  CheckCircle2,
  Lock,
  TrendingUp,
  Clock,
  Users,
  Sparkles
} from 'lucide-react';

export default function WhyChooseAvrxSection() {
  const standards = [
    {
      icon: Zap,
      title: '0.6s LCP Core Web Vitals',
      desc: 'We reject bloated templates. Every website and web application is custom-coded in React, Next.js, and Tailwind CSS with Edge NVMe caching for near-instant load times.',
      badge: 'TOP 1% SPEED',
      color: 'text-cyan-400',
      border: 'border-cyan-500/30'
    },
    {
      icon: ShieldCheck,
      title: 'SOC2 Bank-Grade Security & SLA',
      desc: 'Our digital architectures, GST tax filings, and loan document pipelines use 256-bit encryption with strict NDA protection and 99.99% server uptime guarantees.',
      badge: 'ZERO DATA LEAK',
      color: 'text-blue-400',
      border: 'border-blue-500/30'
    },
    {
      icon: Award,
      title: 'Senior Domain Architects Only',
      desc: 'No junior handoffs. Every project is led by a Senior Solution Architect, practicing Chartered Accountant, or Corporate Legal Counsel with 10+ years of domain mastery.',
      badge: 'ELITE TEAM',
      color: 'text-purple-400',
      border: 'border-purple-500/30'
    },
    {
      icon: TrendingUp,
      title: 'Guaranteed ROI & Traffic SLA',
      desc: 'We bind our digital marketing and programmatic SEO contracts to clear traffic and revenue KPIs, backed by monthly performance audits and transparent attribution.',
      badge: 'SLA DRIVEN',
      color: 'text-emerald-400',
      border: 'border-emerald-500/30'
    }
  ];

  return (
    <section className="py-24 bg-[#08090C] border-t border-white/10 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE AVRX CRAFTSMANSHIP ADVANTAGE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-poppins font-extrabold text-white tracking-tight">
            Why CFOs, Founders & Leaders <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
              Trust AVRX Ecosystem
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            We bridge the gap between world-class digital product engineering, statutory financial compliance, and rapid capital access—all under one unified SLA.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {standards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`glass-card p-8 rounded-3xl border ${item.border} bg-[#0D101A]/80 hover:bg-[#111422] transition-all duration-300 space-y-4 group`}
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Icon className={`w-6 h-6 ${item.color} group-hover:text-white`} />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white/5 text-white text-[10px] font-bold tracking-widest uppercase border border-white/10">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-poppins font-bold text-white group-hover:text-blue-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Live Performance Benchmarks Bar */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-blue-900/30 via-slate-900/50 to-cyan-900/30 border border-white/10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-poppins font-black text-white">450+</div>
              <div className="text-xs text-slate-400">Enterprise Websites & Mobile Apps</div>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-poppins font-black text-cyan-400">₹140 Cr+</div>
              <div className="text-xs text-slate-400">Loans & Working Capital Disbursed</div>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-poppins font-black text-purple-400">100%</div>
              <div className="text-xs text-slate-400">GST & ITR Compliance Rate</div>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-poppins font-black text-green-400">4.98 / 5.0</div>
              <div className="text-xs text-slate-400">Client CSAT Score (1,400+ Reviews)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
