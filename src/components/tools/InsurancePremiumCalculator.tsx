import React, { useState, useMemo } from 'react';
import {
  ShieldCheck,
  Heart,
  Car,
  Home,
  Building2,
  Shield,
  CheckCircle2,
  Sliders,
  DollarSign,
  ArrowRight
} from 'lucide-react';

export default function InsurancePremiumCalculator() {
  const [policyType, setPolicyType] = useState<'health' | 'motor' | 'life' | 'property' | 'commercial'>('health');
  const [sumInsured, setSumInsured] = useState<number>(1000000); // ₹10 Lakhs
  const [ageGroup, setAgeGroup] = useState<number>(30); // 30 Years
  const [hasAddons, setHasAddons] = useState<boolean>(true);

  const policyTypes = [
    { id: 'health', label: 'Health Insurance', icon: Heart, desc: 'Cashless hospital coverage & critical illness rider' },
    { id: 'motor', label: 'Motor & Vehicle', icon: Car, desc: 'Comprehensive 1st party + zero-dep depreciation cover' },
    { id: 'life', label: 'Term Life Insurance', icon: Shield, desc: 'Pure term cover up to 85 years age with accidental rider' },
    { id: 'property', label: 'Home & Property', icon: Home, desc: 'Fire, flood, theft & structure earthquake insurance' },
    { id: 'commercial', label: 'Commercial & Cyber', icon: Building2, desc: 'Office liability, shopkeeper policy & cyber security' }
  ];

  const estimatedPremium = useMemo(() => {
    let baseRate = 0.008; // 0.8% base

    if (policyType === 'health') {
      baseRate = 0.007 + (ageGroup > 45 ? 0.005 : 0);
    } else if (policyType === 'motor') {
      baseRate = 0.012;
    } else if (policyType === 'life') {
      baseRate = 0.003 + (ageGroup * 0.0001);
    } else if (policyType === 'property') {
      baseRate = 0.002;
    } else if (policyType === 'commercial') {
      baseRate = 0.005;
    }

    let annual = sumInsured * baseRate;
    if (hasAddons) annual *= 1.2; // 20% add-ons booster

    const monthly = annual / 12;

    return {
      annual: Math.round(annual),
      monthly: Math.round(monthly),
      gstAmount: Math.round(annual * 0.18),
      totalAnnualWithGst: Math.round(annual * 1.18)
    };
  }, [policyType, sumInsured, ageGroup, hasAddons]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="glass-card rounded-3xl border border-cyan-500/30 bg-[#080B14] p-6 sm:p-8 space-y-8 shadow-2xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-poppins font-bold text-white">Insurance Premium Calculator</h3>
              <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-[10px] font-bold">
                POLICY ESTIMATOR
              </span>
            </div>
            <p className="text-xs text-slate-400">Estimator for health, motor, life, property, and commercial insurance policies</p>
          </div>
        </div>

        <span className="px-3 py-1.5 rounded-full bg-green-500/20 text-green-400 border border-green-500/30 text-xs font-bold self-start sm:self-auto">
          99.2% CLAIM SETTLEMENT RATIO
        </span>
      </div>

      {/* Policy Category Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {policyTypes.map((pt) => {
          const Icon = pt.icon;
          const isSelected = policyType === pt.id;
          return (
            <button
              key={pt.id}
              onClick={() => setPolicyType(pt.id as any)}
              className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between space-y-2 ${
                isSelected
                  ? 'bg-gradient-to-b from-cyan-500/20 to-blue-600/20 border-cyan-500/50 text-white shadow-lg shadow-cyan-500/10'
                  : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${isSelected ? 'bg-cyan-500 text-white' : 'bg-white/10'}`}>
                <Icon className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">{pt.label}</div>
                <div className="text-[10px] text-slate-400 line-clamp-1">{pt.desc}</div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Sliders & Option Selectors */}
        <div className="lg:col-span-7 space-y-6">
          {/* Slider 1: Sum Insured */}
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-slate-300">Sum Insured (Coverage Amount)</span>
              <span className="font-poppins font-bold text-cyan-400 text-sm">{formatCurrency(sumInsured)}</span>
            </div>
            <input
              type="range"
              min={200000}
              max={50000000}
              step={100000}
              value={sumInsured}
              onChange={(e) => setSumInsured(Number(e.target.value))}
              className="w-full accent-cyan-400 bg-white/10 rounded-lg cursor-pointer h-2"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>₹2 Lakhs</span>
              <span>₹50 Lakhs</span>
              <span>₹5 Crores</span>
            </div>
          </div>

          {/* Slider 2: Age of Insured */}
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-slate-300">Age / Year of Establishment</span>
              <span className="font-poppins font-bold text-cyan-400 text-sm">{ageGroup} Years</span>
            </div>
            <input
              type="range"
              min={18}
              max={75}
              step={1}
              value={ageGroup}
              onChange={(e) => setAgeGroup(Number(e.target.value))}
              className="w-full accent-cyan-400 bg-white/10 rounded-lg cursor-pointer h-2"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>18 Yrs</span>
              <span>45 Yrs</span>
              <span>75 Yrs</span>
            </div>
          </div>

          {/* Add-ons Checkbox */}
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-white block">Include Zero Depreciation & Critical Illness Riders</span>
              <span className="text-[10px] text-slate-400">Enhance coverage with cashless ambulance & hospital cash daily allowance</span>
            </div>
            <input
              type="checkbox"
              checked={hasAddons}
              onChange={(e) => setHasAddons(e.target.checked)}
              className="w-5 h-5 accent-cyan-400 rounded cursor-pointer"
            />
          </div>
        </div>

        {/* Premium Estimate Output */}
        <div className="lg:col-span-5 p-6 rounded-3xl bg-gradient-to-b from-[#0B0F1E] to-[#070A12] border border-cyan-500/40 shadow-2xl space-y-6 flex flex-col justify-between">
          <div>
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block text-center">Estimated Annual Premium</span>
            <div className="text-3xl sm:text-4xl font-poppins font-black text-cyan-400 text-center mt-1">
              {formatCurrency(estimatedPremium.totalAnnualWithGst)} <span className="text-xs text-slate-400 font-normal">/ year</span>
            </div>
            <p className="text-[11px] text-slate-400 text-center mt-1">
              Equivalent to <span className="text-white font-bold">{formatCurrency(estimatedPremium.monthly)}</span> / month
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-white/10 text-xs">
            <div className="flex justify-between text-slate-300">
              <span>Base Premium:</span>
              <span className="font-mono text-white">{formatCurrency(estimatedPremium.annual)}</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>GST (18% Applicable):</span>
              <span className="font-mono text-amber-400">{formatCurrency(estimatedPremium.gstAmount)}</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>Total Sum Insured:</span>
              <span className="font-mono text-cyan-300">{formatCurrency(sumInsured)}</span>
            </div>
          </div>

          <a
            href="/contact"
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs shadow-xl shadow-cyan-500/25 flex items-center justify-center gap-2 transition-all"
          >
            <span>Request Instant Policy Sanction</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
