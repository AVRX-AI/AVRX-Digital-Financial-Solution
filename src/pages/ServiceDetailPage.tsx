import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import SeoMeta from '../components/common/SeoMeta';
import PageBanner from '../components/layout/PageBanner';
import {
  CheckCircle2,
  ShieldCheck,
  Zap,
  Clock,
  ArrowRight,
  Code2,
  Cpu,
  Award,
  Layers,
  HelpCircle,
  Calculator
} from 'lucide-react';
import { servicesList } from '../data/mockData';

export default function ServiceDetailPage() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = servicesList.find((s) => s.id === serviceId) || servicesList[0];

  const [selectedTier, setSelectedTier] = useState<'startup' | 'growth' | 'enterprise'>('growth');
  const [pagesCount, setPagesCount] = useState<number>(10);
  const [needSeo, setNeedSeo] = useState<boolean>(true);
  const [needSpeedSla, setNeedSpeedSla] = useState<boolean>(true);

  // Simple dynamic estimator
  const basePrice = selectedTier === 'startup' ? 499 : selectedTier === 'growth' ? 1499 : 3499;
  const estimatedTotal = basePrice + (pagesCount - 5) * 35 + (needSeo ? 200 : 0) + (needSpeedSla ? 150 : 0);

  const tiers = [
    {
      id: 'startup',
      name: 'Startup Launch SLA',
      price: '₹39,999 / $499',
      timeline: '7-10 Working Days',
      desc: 'Ideal for early-stage founders needing a high-conversion landing page or MVP web app.',
      features: [
        'Up to 5 custom React/Tailwind pages',
        'Mobile responsive & Retina ready',
        'Basic Technical SEO schema setup',
        '1 Month Post-Launch Maintenance'
      ]
    },
    {
      id: 'growth',
      name: 'Growth Enterprise SLA',
      price: '₹1,25,000 / $1,499',
      timeline: '3-4 Weeks',
      desc: 'Our most popular tier. Complete full-stack architecture with custom CRM/CMS integration.',
      badge: 'MOST POPULAR',
      features: [
        'Up to 15 custom pages + Dashboard',
        'Next.js SSR & Edge NVMe Caching',
        '0.6s LCP Core Web Vitals Guarantee',
        'Programmatic SEO & 3 Months Maintenance'
      ]
    },
    {
      id: 'enterprise',
      name: 'Custom RFP & Scale',
      price: '₹2,99,000+ / $3,499+',
      timeline: '6-8 Weeks',
      desc: 'For high-traffic FinTech, E-Commerce, or multi-tenant SaaS platforms requiring custom SLA.',
      features: [
        'Unlimited custom modules & API gateways',
        'SOC2 Type II security audit compliance',
        'Dedicated Senior Lead Architect assigned',
        '1 Year 24/7 Server Maintenance & SLA'
      ]
    }
  ];

  return (
    <div className="bg-[#08090C] min-h-screen">
      <SeoMeta
        title={`${service.title} | AVRX Technology SLA`}
        description={service.shortDesc}
      />

      <PageBanner
        title={service.title}
        subtitle={service.shortDesc}
        badge={service.category}
        breadcrumbs={[
          { label: 'Services', path: '/services' },
          { label: service.title }
        ]}
        ctaText="Book Technical scoping call"
      />

      {/* Main Content Area */}
      <section className="py-20 bg-[#06070B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left 8 cols: Deep Specifications & Deliverables */}
            <div className="lg:col-span-8 space-y-12">
              {/* Overview & Architecture */}
              <div className="glass-card p-8 sm:p-10 rounded-3xl border border-white/10 space-y-6">
                <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-widest">
                  <Cpu className="w-4 h-4" />
                  <span>ARCHITECTURE & TECHNICAL SLA</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-poppins font-bold text-white">
                  Why Our {service.title} Outperforms Standard Templates
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  We engineer every digital solution from scratch using modern TypeScript, React 18, and Vite/Next.js frameworks. Unlike drag-and-drop website builders that bloat JavaScript bundles and fail Google PageSpeed Insights, our builds guarantee sub-second LCP and 99.9% uptime.
                </p>

                {/* Core Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  {service.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm font-semibold text-white">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interactive Cost & Timeline Calculator */}
              <div className="glass-card p-8 sm:p-10 rounded-3xl border border-blue-500/30 bg-gradient-to-b from-blue-900/20 via-[#0B0D15] to-[#08090C] space-y-8">
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <div>
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">
                      LIVE ESTIMATOR
                    </span>
                    <h3 className="text-xl sm:text-2xl font-poppins font-bold text-white">
                      Interactive Project Cost & Timeline Estimator
                    </h3>
                  </div>
                  <Calculator className="w-8 h-8 text-blue-400" />
                </div>

                <div className="space-y-6">
                  {/* Select Base Tier */}
                  <div>
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-3">
                      1. Select Architecture Tier:
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { id: 'startup', label: 'Startup MVP', price: '$499' },
                        { id: 'growth', label: 'Growth Pro', price: '$1,499' },
                        { id: 'enterprise', label: 'Enterprise RFP', price: '$3,499' },
                      ].map((t) => (
                        <button
                          key={t.id}
                          onClick={() => setSelectedTier(t.id as any)}
                          className={`p-3.5 rounded-xl text-center border transition-all ${
                            selectedTier === t.id
                              ? 'bg-blue-600/30 border-blue-400 text-white font-bold'
                              : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                          }`}
                        >
                          <div className="text-xs">{t.label}</div>
                          <div className="text-sm font-poppins text-cyan-400 font-bold mt-1">{t.price}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Slider for pages/screens */}
                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      <span>2. Number of Custom Screens/Pages:</span>
                      <span className="text-cyan-400">{pagesCount} screens</span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="40"
                      step="1"
                      value={pagesCount}
                      onChange={(e) => setPagesCount(Number(e.target.value))}
                      className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                    />
                  </div>

                  {/* Add-on Toggles */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <label className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={needSeo}
                        onChange={(e) => setNeedSeo(e.target.checked)}
                        className="rounded bg-slate-800 border-white/20 text-blue-600 focus:ring-0"
                      />
                      <span className="text-xs font-semibold text-white">Include Programmatic SEO (+$200)</span>
                    </label>

                    <label className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={needSpeedSla}
                        onChange={(e) => setNeedSpeedSla(e.target.checked)}
                        className="rounded bg-slate-800 border-white/20 text-blue-600 focus:ring-0"
                      />
                      <span className="text-xs font-semibold text-white">0.6s LCP Speed SLA (+$150)</span>
                    </label>
                  </div>

                  {/* Estimated Output Card */}
                  <div className="p-6 rounded-2xl bg-[#0D101A] border border-blue-500/40 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div>
                      <span className="text-xs text-slate-400 block uppercase">Estimated Investment</span>
                      <div className="text-3xl font-poppins font-black text-white">
                        ${estimatedTotal.toLocaleString()}{' '}
                        <span className="text-xs text-slate-400 font-normal">/ Fixed SLA</span>
                      </div>
                      <div className="text-xs text-cyan-400 mt-1">
                        Includes 100% code ownership & NDA compliance
                      </div>
                    </div>

                    <Link
                      to="/contact"
                      className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-xs shadow-xl shadow-blue-500/25 whitespace-nowrap transition-all"
                    >
                      Lock In Estimate & Scope
                    </Link>
                  </div>
                </div>
              </div>

              {/* Pricing Packages Matrix */}
              <div className="space-y-6">
                <div className="text-center sm:text-left">
                  <h3 className="text-2xl font-poppins font-bold text-white">
                    Transparent SLA Pricing Tiers
                  </h3>
                  <p className="text-sm text-slate-400">
                    No surprise invoices. Every package is governed by a formal Service Level Agreement (SLA).
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {tiers.map((tier) => (
                    <div
                      key={tier.id}
                      className={`glass-card p-6 rounded-3xl border flex flex-col justify-between ${
                        tier.id === 'growth'
                          ? 'border-blue-500 bg-gradient-to-b from-blue-900/30 to-[#0B0D15] shadow-xl shadow-blue-500/10'
                          : 'border-white/10 bg-white/5'
                      }`}
                    >
                      <div>
                        {tier.badge && (
                          <span className="inline-block px-2.5 py-0.5 rounded-full bg-blue-500 text-white text-[10px] font-bold mb-3">
                            {tier.badge}
                          </span>
                        )}
                        <h4 className="text-lg font-poppins font-bold text-white">{tier.name}</h4>
                        <div className="text-2xl font-poppins font-black text-cyan-400 mt-2 mb-1">
                          {tier.price}
                        </div>
                        <div className="text-xs text-slate-400 mb-4">Turnaround: {tier.timeline}</div>

                        <p className="text-xs text-slate-300 leading-relaxed mb-6 border-b border-white/10 pb-4">
                          {tier.desc}
                        </p>

                        <ul className="space-y-2 mb-6">
                          {tier.features.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link
                        to="/contact"
                        className={`w-full py-3 rounded-xl text-center text-xs font-bold transition-all ${
                          tier.id === 'growth'
                            ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/25'
                            : 'bg-white/10 hover:bg-white/20 text-white'
                        }`}
                      >
                        Choose {tier.name}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 4 cols: Sticky Contact & Assurance Desk */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 space-y-6">
                <div className="p-8 rounded-3xl bg-[#0D101A] border border-blue-500/30 space-y-6">
                  <div className="space-y-2 border-b border-white/10 pb-5">
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block">
                      INSTANT EXECUTIVE SCOPING
                    </span>
                    <h4 className="text-xl font-poppins font-bold text-white">
                      Have Custom Requirements?
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Speak directly with our Chief Solutions Architect to define your tech stack and SLA terms.
                    </p>
                  </div>

                  <div className="space-y-3 text-xs text-slate-300">
                    <div className="flex items-center justify-between py-2 border-b border-white/5">
                      <span>Code Ownership</span>
                      <span className="text-white font-semibold">100% Client Owned</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-white/5">
                      <span>NDA Legal Protection</span>
                      <span className="text-green-400 font-semibold">Signed Day 1</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-white/5">
                      <span>Post-Launch Warranty</span>
                      <span className="text-white font-semibold">30 Days Guaranteed</span>
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="block w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-center font-bold text-sm shadow-xl shadow-blue-500/20 transition-all"
                  >
                    Schedule Scoping Call
                  </Link>
                </div>

                {/* Need Financial Loan integration box */}
                <div className="p-6 rounded-3xl bg-purple-900/20 border border-purple-500/30 space-y-3">
                  <div className="text-xs font-bold text-purple-400 uppercase tracking-widest">
                    FINANCING AVAILABLE
                  </div>
                  <h5 className="text-sm font-bold text-white">
                    Need Capital to Fund This Digital Product?
                  </h5>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    We offer instant working capital loans up to ₹50 Lakhs for startup IT expansion and product development.
                  </p>
                  <Link
                    to="/financial-solutions"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-300 hover:text-purple-200"
                  >
                    <span>Explore IT Expansion Loans</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
