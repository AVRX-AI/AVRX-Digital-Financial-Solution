import React, { useState } from 'react';
import { Shield, Check, Heart, Car, Briefcase, Plane, UserCheck, ArrowRight } from 'lucide-react';

export const AIInsuranceAdvisor: React.FC<{ onOpenConsultation: () => void }> = ({ onOpenConsultation }) => {
  const [selectedType, setSelectedType] = useState<'Health' | 'Life' | 'Vehicle' | 'Business' | 'Travel'>('Health');
  const [age, setAge] = useState(30);
  const [dependents, setDependents] = useState('2 Parents + Spouse');
  const [budget, setBudget] = useState('₹1,500 / month');

  const getAdvice = () => {
    switch (selectedType) {
      case 'Health':
        return {
          title: 'Comprehensive Family Floater Health Plan',
          cover: '₹15,00,000 to ₹25,00,000 Sum Insured',
          premium: 'Est. ₹1,200 - ₹1,800 / Month',
          taxSaving: 'Save up to ₹75,000 under Section 80D',
          perks: [
            'Zero room-rent limit & cashless treatment across 12,000+ Indian hospitals',
            '100% restoration of cover upon claim utilization',
            'Annual complimentary health check-up for all insured members',
            'AVRX priority hospital claim assistance'
          ]
        };
      case 'Life':
        return {
          title: 'Pure Term Life Insurance with Critical Illness Rider',
          cover: '₹1,50,00,000 (1.5 Crore) Pure Protection',
          premium: 'Est. ₹1,100 / Month (locked for 40 years)',
          taxSaving: 'Save up to ₹1,50,000 under Section 80C',
          perks: [
            'Financial security for family with lump-sum payout',
            'Waiver of premium on critical illness diagnosis',
            'Highest IRDAI Claim Settlement Ratio (> 98%) partner insurers',
            'No maturity gimmick — pure high-value life protection'
          ]
        };
      case 'Vehicle':
        return {
          title: 'Comprehensive Motor Insurance with Zero Depreciation',
          cover: '100% IDV Valuation Cover + Third-Party Liability',
          premium: 'Est. ₹6,500 - ₹12,000 / Year',
          taxSaving: 'Business expense tax deduction for commercial fleet',
          perks: [
            'Zero Depreciation cover for bumper-to-bumper replacement',
            'Engine protect & return to invoice (RTI) add-on available',
            '24x7 Roadside Assistance across India',
            'Instant digital policy issuance in 5 minutes'
          ]
        };
      case 'Business':
        return {
          title: 'Office Property, Fire & Cyber Liability Insurance',
          cover: '₹2,00,00,000 (2 Crore) Commercial Indemnity',
          premium: 'Est. ₹1,500 / Month',
          taxSaving: '100% deductible as valid business expense',
          perks: [
            'Covers office machinery, server hardware, and stock inventory',
            'Protection against fire, flood, burglary, and cyber ransomware',
            'Workmen compensation cover included for employees',
            'Tailored for MSMEs and corporate tech agencies'
          ]
        };
      case 'Travel':
        return {
          title: 'International Travel & Medical Emergency Cover',
          cover: '$250,000 USD Worldwide Medical & Baggage Cover',
          premium: 'Est. ₹1,499 / Trip',
          taxSaving: 'Complies with Schengen & USA visa mandatory norms',
          perks: [
            'Covers overseas emergency hospitalization and evacuation',
            'Compensation for flight delay, cancellation & lost baggage',
            '24x7 international medical emergency helpline',
            'Instant e-policy accepted by all international embassies'
          ]
        };
    }
  };

  const advice = getAdvice();

  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xl">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-emerald-500/30">
          <Shield className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">4. AI Insurance Advisor</h3>
          <p className="text-xs text-white/70">Custom Health, Life, Motor, Business & Travel policy recommendations</p>
        </div>
      </div>

      {/* Category tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {[
          { id: 'Health', label: 'Health Insurance', icon: Heart },
          { id: 'Life', label: 'Life Insurance', icon: UserCheck },
          { id: 'Vehicle', label: 'Vehicle Insurance', icon: Car },
          { id: 'Business', label: 'Business Insurance', icon: Briefcase },
          { id: 'Travel', label: 'Travel Insurance', icon: Plane }
        ].map((item) => {
          const Icon = item.icon;
          const active = selectedType === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setSelectedType(item.id as any)}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center space-x-2 transition-all ${
                active 
                  ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30' 
                  : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>

      {/* Input row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-xs font-semibold text-white/80 mb-1.5">Insured Person Age: {age} yrs</label>
          <input
            type="range"
            min="18"
            max="65"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            className="w-full accent-emerald-400 cursor-pointer"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-white/80 mb-1.5">Covering Who?</label>
          <select
            value={dependents}
            onChange={(e) => setDependents(e.target.value)}
            className="w-full px-3 py-2 rounded-xl bg-[#081B33] border border-white/20 text-white text-xs focus:outline-none focus:border-emerald-400"
          >
            <option>Self Only</option>
            <option>Self + Spouse</option>
            <option>Self + Spouse + 2 Children</option>
            <option>2 Parents + Spouse</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-white/80 mb-1.5">Preferred Budget</label>
          <select
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full px-3 py-2 rounded-xl bg-[#081B33] border border-white/20 text-white text-xs focus:outline-none focus:border-emerald-400"
          >
            <option>₹1,000 / month</option>
            <option>₹1,500 / month</option>
            <option>₹2,500+ / month (High Cover)</option>
          </select>
        </div>
      </div>

      {/* Recommended Advice Card */}
      <div className="p-6 rounded-2xl bg-gradient-to-br from-[#081B33] to-[#0D382B] border border-emerald-400/40 space-y-4 animate-fadeIn">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
          <div>
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Recommended Policy Plan</span>
            <h4 className="text-xl font-extrabold text-white mt-1">{advice.title}</h4>
          </div>
          <div className="px-3 py-1.5 rounded-xl bg-emerald-500/20 border border-emerald-400/40 text-xs font-bold text-emerald-300">
            {advice.taxSaving}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
            <div className="text-[11px] font-semibold text-white/60">RECOMMENDED SUM INSURED</div>
            <div className="text-lg font-black text-cyan-400">{advice.cover}</div>
          </div>

          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
            <div className="text-[11px] font-semibold text-white/60">ESTIMATED PREMIUM</div>
            <div className="text-lg font-black text-emerald-300">{advice.premium}</div>
          </div>
        </div>

        <div className="space-y-2 pt-1">
          <span className="text-xs font-semibold text-white/80">Key Policy Benefits & Safeguards:</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {advice.perks.map((perk, i) => (
              <div key={i} className="flex items-center space-x-2 text-xs text-white/80">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{perk}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 flex items-center justify-end">
          <button
            onClick={onOpenConsultation}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-[#0A66FF] text-white font-bold text-xs flex items-center space-x-2 shadow-lg shadow-emerald-500/30 hover:scale-105 transition-all"
          >
            <span>Get Free Quote & Tax Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
