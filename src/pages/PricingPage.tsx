import React from 'react';
import { PRICING_PLANS } from '../data/servicesData';
import { SEO } from '../components/common/SEO';
import { Check, ArrowRight } from 'lucide-react';

interface PricingPageProps {
  onNavigate: (page: string) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#050811] text-white pt-28 pb-20">
      <SEO
        title="Transparent Pricing Plans | AVRX Digital & Financial Solution"
        description="Clear, transparent pricing for startup launchpads, business growth packages, and enterprise custom plans."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            Zero Hidden Fees
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white">
            Transparent Pricing Plans
          </h1>
          <p className="text-slate-300 text-base sm:text-lg">
            Scalable digital engineering, loan concierge, tax compliance, and hosting plans designed for every stage of your business.
          </p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between space-y-8 relative ${
                plan.isPopular
                  ? 'bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border-cyan-400 shadow-[0_0_30px_rgba(0,240,255,0.2)] scale-105 z-10'
                  : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-cyan-400 text-slate-950 font-bold text-xs shadow-lg uppercase tracking-wider">
                  MOST POPULAR
                </div>
              )}

              <div>
                <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                <p className="text-slate-400 text-xs mt-1 leading-relaxed">{plan.description}</p>

                <div className="my-6">
                  <div className="text-3xl sm:text-4xl font-black text-white font-mono">{plan.price}</div>
                  <div className="text-xs text-cyan-400 font-medium mt-1">{plan.billingPeriod || 'One-time investment'}</div>
                </div>

                <div className="space-y-3 pt-6 border-t border-slate-800">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Included Features:</div>
                  {plan.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                      <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onNavigate('contact')}
                className={`w-full py-4 rounded-2xl font-bold text-sm transition flex items-center justify-center gap-2 ${
                  plan.isPopular
                    ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:scale-105'
                    : 'bg-slate-950 hover:bg-slate-800 border border-slate-800 text-white'
                }`}
              >
                <span>{plan.ctaText || `Select ${plan.name}`}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
