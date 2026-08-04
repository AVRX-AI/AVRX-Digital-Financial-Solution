import React from 'react';
import SeoMeta from '../components/common/SeoMeta';
import PageBanner from '../components/layout/PageBanner';
import {
  ShieldCheck,
  Award,
  Users,
  Briefcase,
  TrendingUp,
  Cpu,
  CheckCircle2,
  Lock,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  const leadership = [
    {
      name: 'Avinash Rai',
      role: 'Founder & Chief Solutions Architect',
      desc: '12+ years building enterprise digital products, FinTech platforms, and high-frequency cloud architectures across Silicon Valley and Mumbai.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'CA Siddharth Kothari',
      role: 'Head of Statutory Tax & Audit Panel',
      desc: 'Practicing Fellow Chartered Accountant (FCA) with specialization in GST scrutiny defense, ITR restructuring, and corporate ROC audit.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'Adv. Neha Mukerji',
      role: 'Legal Counsel & Corporate Structuring',
      desc: 'Expert in startup incorporation, private equity due diligence, shareholder agreements, and RBI regulatory compliance.',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80'
    }
  ];

  return (
    <div className="bg-[#08090C] min-h-screen">
      <SeoMeta
        title="About AVRX Digital & Financial Solution | Our Leadership"
        description="Learn about AVRX Ecosystem: Where Silicon Valley product engineering meets practicing Chartered Accountants and Tier-1 RBI lending partners."
      />

      <PageBanner
        title="Where Digital Mastery Meets Financial Power"
        subtitle="We founded AVRX to eliminate the friction between building a world-class digital product, maintaining statutory tax compliance, and securing rapid capital."
        badge="OUR MISSION & LEADERSHIP"
        breadcrumbs={[{ label: 'About Us' }]}
        ctaText="Meet The Leadership"
      />

      {/* Philosophy Section */}
      <section className="py-20 bg-[#06070B] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block">
                THE CRED-INSPIRED PHILOSOPHY
              </span>
              <h2 className="text-3xl sm:text-4xl font-poppins font-extrabold text-white leading-tight">
                Why Should You Deal With 4 Vendors When You Can Have 1 Trusted Partner?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Most businesses waste hundreds of hours coordinating between web agencies that don't understand business finance, chartered accountants who don't understand tech, and loan brokers who don't understand cash flow.
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                AVRX Ecosystem unifies these three pillars under a single, bank-grade SOC2 Service Level Agreement. One dedicated team for your website, your taxes, and your capital growth.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-2xl font-poppins font-black text-cyan-400">450+</div>
                  <div className="text-xs text-slate-400 mt-1">Enterprise Clients Served</div>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-2xl font-poppins font-black text-blue-400">₹140 Cr+</div>
                  <div className="text-xs text-slate-400 mt-1">Working Capital Disbursed</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-blue-900/30 via-[#0D101C] to-purple-900/30 border border-blue-500/30 space-y-6">
                <h3 className="text-xl font-poppins font-bold text-white">
                  Our Non-Negotiable Engineering Standards
                </h3>
                <div className="space-y-4">
                  {[
                    { title: '0.6s LCP Performance SLA', desc: 'Every website must pass Google Core Web Vitals with 95+ PageSpeed.' },
                    { title: 'Zero Statutory Penalty Guarantee', desc: 'Any GST or ITR penalty caused by our panel error is reimbursed 100%.' },
                    { title: '256-Bit Bank Grade Encryption', desc: 'Your financial statements and codebases remain strictly under NDA.' },
                    { title: 'Direct Senior Architect Access', desc: 'No ticket queues. Direct WhatsApp & phone access to your project lead.' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm font-bold text-white">{item.title}</div>
                        <div className="text-xs text-slate-400">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Panel */}
      <section className="py-20 bg-[#08090C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <h3 className="text-3xl font-poppins font-bold text-white">
              Meet Our Executive Leadership
            </h3>
            <p className="text-sm text-slate-400">
              Domain veterans across Silicon Valley digital engineering, Mumbai chartered accountancy, and corporate law.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((person, idx) => (
              <div
                key={idx}
                className="glass-card p-8 rounded-3xl border border-white/10 hover:border-blue-500/40 bg-[#0C0F1C]/80 space-y-4 text-center"
              >
                <img
                  src={person.avatar}
                  alt={person.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto border-2 border-blue-500/50"
                />
                <div>
                  <h4 className="text-lg font-poppins font-bold text-white">{person.name}</h4>
                  <div className="text-xs font-semibold text-cyan-400">{person.role}</div>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">{person.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
