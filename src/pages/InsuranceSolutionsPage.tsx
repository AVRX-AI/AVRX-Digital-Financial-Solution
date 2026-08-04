import React from 'react';
import { Link } from 'react-router-dom';
import SeoMeta from '../components/common/SeoMeta';
import PageBanner from '../components/layout/PageBanner';
import {
  Shield,
  HeartPulse,
  Car,
  Home,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Award
} from 'lucide-react';

export default function InsuranceSolutionsPage() {
  const insurancePlans = [
    {
      id: 'health-gmc',
      title: 'Corporate GMC & Family Floater Health Cover',
      badge: 'CASHLESS ALL-INDIA',
      cover: '₹10 Lakhs – ₹1 Crore',
      premium: 'Starting ₹699 /month',
      desc: 'Comprehensive hospitalisation cover with zero room rent capping, maternity benefits, pre/post hospitalisation expenses, and annual executive body checkups across 14,000+ cashless hospitals.',
      features: [
        '14,000+ Cashless Network Hospitals',
        'Zero Co-Payment & Zero Room Rent Limit',
        'Pre-Existing Diseases Covered After 1 Year',
        '100% Tax Rebate under Section 80D'
      ]
    },
    {
      id: 'term-life',
      title: 'Corporate Term Life & Executive Keyman Insurance',
      badge: '100% CLAIM RATIO',
      cover: '₹1 Crore – ₹10 Crores',
      premium: 'Starting ₹850 /month',
      desc: 'Protect your enterprise leadership and family estate. Keyman insurance policies allow private limited companies to protect business continuity and claim tax deductions under Section 37(1).',
      features: [
        'Cover up to ₹10 Crores for Founders & Directors',
        'Tax-free death benefit payout under Sec 10(10D)',
        'Critical illness & accidental disability riders',
        '99.4% insurer claim settlement ratio SLA'
      ]
    },
    {
      id: 'shop-fire',
      title: 'Commercial Office, Shop & Industrial Fire Cover',
      badge: 'ALL-RISK PROTECTION',
      cover: '₹50 Lakhs – ₹25 Crores',
      premium: 'Starting ₹1,499 /year',
      desc: 'Protect your office IT infrastructure, factory machinery, showroom inventory, and commercial real estate against fire, flood, burglary, and electrical short-circuit breakdowns.',
      features: [
        'Covers IT hardware, servers & office interiors',
        'Burglary & employee infidelity protection',
        'Business interruption loss of profits rider',
        'Rapid 7-day surveyor settlement SLA'
      ]
    },
    {
      id: 'motor-fleet',
      title: 'Commercial Vehicle & Executive Fleet Motor Insurance',
      badge: 'ZERO DEPRECIATION',
      cover: 'Complete IDV Protection',
      premium: 'Starting ₹2,100 /year',
      desc: 'Bumper-to-bumper zero depreciation cover for corporate fleets, executive cars, and transport vehicles with 24/7 roadside assistance and engine hydro-static lock cover.',
      features: [
        '100% Zero Depreciation bumper-to-bumper cover',
        '24/7 Pan-India towing & roadside assistance',
        'Consumables cover (engine oil, coolants, nuts)',
        'Instant digital policy issuance in 10 minutes'
      ]
    }
  ];

  return (
    <div className="bg-[#08090C] min-h-screen">
      <SeoMeta
        title="Insurance Solutions | Health, Term, Shop & GMC Cover"
        description="Comprehensive Health, Term Life, Commercial Office, and Motor insurance backed by India's top insurers with 99.4% claim settlement SLA."
      />

      <PageBanner
        title="Corporate & Personal Insurance Solutions"
        subtitle="Protect your family, leadership, office infrastructure, and corporate fleet with zero-deduction cashless policies from India's top-rated insurers."
        badge="IRDAI COMPLIANT PARTNERS"
        breadcrumbs={[{ label: 'Insurance Solutions' }]}
        ctaText="Compare Instant Quotes"
      />

      <section className="py-20 bg-[#06070B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {insurancePlans.map((plan) => (
              <div
                key={plan.id}
                className="glass-card p-8 sm:p-10 rounded-3xl border border-white/10 hover:border-blue-500/40 bg-[#0C0F1B]/90 hover:bg-[#0F1322] transition-all duration-300 space-y-6"
              >
                <div className="flex items-center justify-between">
                  <span className="px-3.5 py-1 rounded-full bg-blue-500/15 text-blue-300 border border-blue-500/30 text-xs font-bold tracking-wider">
                    {plan.badge}
                  </span>
                  <span className="text-xs text-slate-400">Sum Insured: {plan.cover}</span>
                </div>

                <div>
                  <h3 className="text-2xl font-poppins font-bold text-white mb-2">
                    {plan.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {plan.desc}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-black/40 border border-white/10">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase block">Starting Premium</span>
                    <span className="text-base font-poppins font-black text-cyan-400">{plan.premium}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase block">Tax Savings</span>
                    <span className="text-base font-poppins font-black text-green-400">Sec 80D / 80C</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-bold text-white uppercase tracking-wider block">
                    Policy Highlights:
                  </span>
                  <div className="space-y-1.5">
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    to="/contact"
                    className="block w-full py-3.5 rounded-xl bg-white/10 hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-500 text-white text-center font-bold text-xs transition-all"
                  >
                    Compare Premiums & Get Instant Quotation
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
