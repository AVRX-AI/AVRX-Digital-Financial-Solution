import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SeoMeta from '../components/common/SeoMeta';
import PageBanner from '../components/layout/PageBanner';
import {
  CheckCircle2,
  ShieldCheck,
  Zap,
  Award,
  ArrowRight,
  HelpCircle
} from 'lucide-react';

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState<'digital' | 'tax' | 'loans'>('digital');

  const digitalTiers = [
    {
      name: 'Startup MVP SLA',
      price: '₹9,999',
      timeline: '7-10 Working Days',
      desc: 'Ideal for early-stage founders needing a high-conversion landing page or MVP web app.',
      features: [
        'Up to 5 custom React/Tailwind screens',
        'Mobile responsive & Retina display ready',
        'Basic Technical SEO schema setup',
        '1 Month Post-Launch SLA Warranty'
      ]
    },
    {
      name: 'Growth Enterprise SLA',
      price: '₹14,999',
      timeline: '3-4 Weeks',
      badge: 'MOST POPULAR',
      desc: 'Our flagship full-stack architecture with custom CRM/CMS integration.',
      features: [
        'Up to 15 custom screens + Admin Dashboard',
        'Next.js 14 SSR & Edge NVMe Caching',
        '0.6s LCP Core Web Vitals Guarantee',
        '3 Months 24/7 SLA Server Maintenance'
      ]
    },
    {
      name: 'Custom RFP & Scale',
      price: '₹24,999+',
      timeline: '6-8 Weeks',
      desc: 'For high-traffic FinTech, E-Commerce, or multi-tenant SaaS platforms.',
      features: [
        'Unlimited custom modules & API gateways',
        'SOC2 Type II security audit compliance',
        'Dedicated Senior Lead Architect assigned',
        '1 Year 24/7 Server Maintenance & SLA'
      ]
    }
  ];

  const taxTiers = [
    {
      name: 'GST Monthly Compliance SLA',
      price: '₹1,499 /mo',
      timeline: 'Same-Day Filing SLA',
      desc: 'Complete GST management by practicing Chartered Accountants.',
      features: [
        'GSTR-1 & GSTR-3B monthly filing',
        'Input Tax Credit (ITC) matching automation',
        'Dedicated CA assigned with direct number',
        'Notice reply advisory & penalty protection'
      ]
    },
    {
      name: 'Company Incorporation Bundle',
      price: '₹6,999 all-inc',
      timeline: '7 Working Days',
      badge: 'ALL-IN-ONE PACK',
      desc: 'Complete Pvt Ltd / LLP launch bundle with MCA Certificate.',
      features: [
        'Certificate of Incorporation & Name approval',
        'Class-3 Digital Signature Certificates (DSC)',
        'MOA & AOA drafted by corporate attorneys',
        'Company PAN, TAN & Udyam MSME certificate'
      ]
    },
    {
      name: 'Virtual CFO Enterprise Retainer',
      price: '₹14,999 /mo',
      timeline: '365-Day Retainer',
      desc: 'Outsource your entire finance and accounting department.',
      features: [
        'Monthly balance sheet & P&L statements',
        'TDS & TCS filing with Form 16 / 16A',
        'ROC annual compliance (AOC-4, MGT-7)',
        'Investor due diligence & statutory audit'
      ]
    }
  ];

  return (
    <div className="bg-[#08090C] min-h-screen">
      <SeoMeta
        title="Transparent SLA Pricing & Packages | AVRX Ecosystem"
        description="Transparent SLA pricing across Digital Product Engineering, CA Tax & GST Filing, and collateral-free Business Loans."
      />

      <PageBanner
        title="Transparent SLA Pricing & Contracts"
        subtitle="No surprise invoices. Every project is governed by a clear, legally binding Service Level Agreement with 100% money-back code quality guarantees."
        badge="CRED-INSPIRED TRANSPARENCY"
        breadcrumbs={[{ label: 'Pricing & SLA' }]}
        ctaText="Request Custom Quote"
      />

      <section className="py-20 bg-[#06070B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Selector */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex p-1.5 rounded-2xl bg-white/5 border border-white/10">
              {[
                { id: 'digital', label: 'Digital Web & Apps' },
                { id: 'tax', label: 'Statutory Tax & CA' },
                { id: 'loans', label: 'Financial & Loans' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-6 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {activeTab === 'loans' ? (
            <div className="glass-card p-10 sm:p-14 rounded-3xl border border-blue-500/30 bg-gradient-to-b from-[#0C101E] to-[#08090C] max-w-4xl mx-auto text-center space-y-6">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block">
                INTEREST ROI & CAPITAL SLA
              </span>
              <h3 className="text-2xl sm:text-4xl font-poppins font-bold text-white">
                Collateral-Free Business Loans: 8.9% – 14.5% p.a.
              </h3>
              <p className="text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
                We do not charge upfront brokerage fees. Our financial advisory works directly with Tier-1 RBI Bank Partners (HDFC, ICICI, Kotak, SBI, Tata Capital) to secure your best sanction limit.
              </p>
              <div className="pt-4">
                <Link
                  to="/financial-solutions"
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-sm shadow-xl shadow-blue-500/25 inline-flex items-center gap-2"
                >
                  <span>Use Instant EMI Calculator & Sanction Tool</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {(activeTab === 'digital' ? digitalTiers : taxTiers).map((tier, idx) => (
                <div
                  key={idx}
                  className={`glass-card p-8 rounded-3xl border flex flex-col justify-between ${
                    tier.badge
                      ? 'border-blue-500 bg-gradient-to-b from-blue-900/30 to-[#0B0D15] shadow-xl shadow-blue-500/10'
                      : 'border-white/10 bg-white/5'
                  }`}
                >
                  <div>
                    {tier.badge && (
                      <span className="inline-block px-3 py-1 rounded-full bg-blue-500 text-white text-[10px] font-bold mb-4">
                        {tier.badge}
                      </span>
                    )}
                    <h4 className="text-xl font-poppins font-bold text-white">{tier.name}</h4>
                    <div className="text-3xl font-poppins font-black text-cyan-400 mt-2 mb-1">
                      {tier.price}
                    </div>
                    <div className="text-xs text-slate-400 mb-4">Turnaround: {tier.timeline}</div>

                    <p className="text-xs text-slate-300 leading-relaxed mb-6 border-b border-white/10 pb-6">
                      {tier.desc}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {tier.features.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs text-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to="/contact"
                    className={`w-full py-3.5 rounded-xl text-center text-xs font-bold transition-all ${
                      tier.badge
                        ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/25'
                        : 'bg-white/10 hover:bg-white/20 text-white'
                    }`}
                  >
                    Lock In {tier.name}
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
