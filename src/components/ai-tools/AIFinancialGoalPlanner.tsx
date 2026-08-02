import React, { useState } from 'react';
import { TrendingUp, Sparkles, CheckCircle2, ArrowRight, PiggyBank } from 'lucide-react';

export const AIFinancialGoalPlanner: React.FC<{ onOpenConsultation: () => void }> = ({ onOpenConsultation }) => {
  const [monthlySip, setMonthlySip] = useState(15000);
  const [years, setYears] = useState(10);
  const [returnRate, setReturnRate] = useState(13.5); // Expected CAGR

  // Compounding SIP formula: M * [ (1+i)^n - 1 ] * (1+i)/i
  const i = returnRate / 12 / 100;
  const n = years * 12;
  const investedAmount = monthlySip * n;
  const estimatedCorpus = Math.round(monthlySip * ((Math.pow(1 + i, n) - 1) / i) * (1 + i));
  const wealthGain = estimatedCorpus - investedAmount;

  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xl">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-emerald-500/30">
          <PiggyBank className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">8. AI SIP & Financial Wealth Planner</h3>
          <p className="text-xs text-white/70">Simulate monthly SIP compounding & long-term wealth creation for business & personal goals</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-xs font-semibold text-white/80 mb-1.5">
            Monthly SIP Investment: ₹{monthlySip.toLocaleString('en-IN')}
          </label>
          <input
            type="range"
            min="2000"
            max="100000"
            step="1000"
            value={monthlySip}
            onChange={(e) => setMonthlySip(Number(e.target.value))}
            className="w-full accent-emerald-400 cursor-pointer"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-white/80 mb-1.5">
            Investment Horizon: {years} Years
          </label>
          <input
            type="range"
            min="3"
            max="25"
            step="1"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="w-full accent-purple-400 cursor-pointer"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-white/80 mb-1.5">
            Expected Annual CAGR: {returnRate}% p.a.
          </label>
          <input
            type="range"
            min="8"
            max="18"
            step="0.5"
            value={returnRate}
            onChange={(e) => setReturnRate(Number(e.target.value))}
            className="w-full accent-cyan-400 cursor-pointer"
          />
        </div>
      </div>

      {/* Result Card */}
      <div className="p-6 rounded-2xl bg-gradient-to-br from-[#081B33] to-[#0A2E28] border border-emerald-400/40 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
            <div className="text-[11px] font-semibold text-white/60">TOTAL AMOUNT INVESTED</div>
            <div className="text-lg font-black text-white">₹{investedAmount.toLocaleString('en-IN')}</div>
            <div className="text-[10px] text-white/50 mt-0.5">Over {years} years period</div>
          </div>

          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
            <div className="text-[11px] font-semibold text-white/60">ESTIMATED WEALTH GAIN</div>
            <div className="text-lg font-black text-emerald-400">+₹{wealthGain.toLocaleString('en-IN')}</div>
            <div className="text-[10px] text-white/50 mt-0.5">Compounded interest appreciation</div>
          </div>

          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
            <div className="text-[11px] font-semibold text-white/60">EXPECTED FINAL CORPUS</div>
            <div className="text-xl font-black text-cyan-300">₹{estimatedCorpus.toLocaleString('en-IN')}</div>
            <div className="text-[10px] text-white/50 mt-0.5">At {returnRate}% CAGR return</div>
          </div>
        </div>

        <div className="space-y-2 pt-1">
          <span className="text-xs font-semibold text-white/80">AVRX Wealth Strategy Insights:</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className="flex items-center space-x-2 text-xs text-white/80">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Step-up your SIP by 10% annually to reach your goal 3 years faster</span>
            </div>
            <div className="flex items-center space-x-2 text-xs text-white/80">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Diversify across Flexi-Cap & Mid-Cap Index mutual fund baskets</span>
            </div>
          </div>
        </div>

        <div className="pt-2 flex items-center justify-end">
          <button
            onClick={onOpenConsultation}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-cyan-500 text-white font-bold text-xs flex items-center space-x-2 shadow-lg shadow-emerald-500/30 hover:scale-105 transition-all"
          >
            <span>Book 1-on-1 Portfolio Strategy Review</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
