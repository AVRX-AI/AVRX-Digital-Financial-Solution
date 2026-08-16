import React, { useState, useMemo } from 'react';
import { 
  TrendingUp, 
  IndianRupee, 
  Calendar, 
  Sparkles, 
  CheckCircle2, 
  Target, 
  ArrowUpRight,
  PieChart
} from 'lucide-react';

export const SipReturnsCalculatorTool: React.FC = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState<number>(10000); // ₹10,000 / month
  const [expectedReturnRate, setExpectedReturnRate] = useState<number>(13.5); // 13.5% p.a.
  const [investmentPeriod, setInvestmentPeriod] = useState<number>(15); // 15 years
  const [stepUpPercent, setStepUpPercent] = useState<number>(10); // 10% annual step up
  const [enableStepUp, setEnableStepUp] = useState<boolean>(false);
  const [sipMode, setSipMode] = useState<'sip' | 'lumpsum' | 'target'>('sip');

  // Target Goal Planner State
  const [targetCorpus, setTargetCorpus] = useState<number>(10000000); // ₹1 Crore
  const [targetYears, setTargetYears] = useState<number>(12);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  const results = useMemo(() => {
    const r = expectedReturnRate / 100;
    const monthlyRate = r / 12;
    const years = Math.max(1, investmentPeriod);

    let totalInvested = 0;
    let finalCorpus = 0;
    const yearlyBreakdown: { year: number; invested: number; totalInvested: number; corpus: number; profit: number }[] = [];

    if (sipMode === 'lumpsum') {
      const P = monthlyInvestment * 10; // Use input as lump sum amount
      totalInvested = P;
      finalCorpus = P * Math.pow(1 + r, years);

      let running = P;
      for (let y = 1; y <= years; y++) {
        running = P * Math.pow(1 + r, y);
        yearlyBreakdown.push({
          year: y,
          invested: P,
          totalInvested: P,
          corpus: Math.round(running),
          profit: Math.round(running - P)
        });
      }
    } else {
      // SIP / Step-Up SIP Simulation
      let currentMonthly = monthlyInvestment;
      let runningCorpus = 0;
      let cumInvested = 0;

      for (let y = 1; y <= years; y++) {
        let yearInvested = 0;
        for (let m = 1; m <= 12; m++) {
          runningCorpus = (runningCorpus + currentMonthly) * (1 + monthlyRate);
          cumInvested += currentMonthly;
          yearInvested += currentMonthly;
        }

        yearlyBreakdown.push({
          year: y,
          invested: yearInvested,
          totalInvested: cumInvested,
          corpus: Math.round(runningCorpus),
          profit: Math.round(runningCorpus - cumInvested)
        });

        if (enableStepUp) {
          currentMonthly = Math.round(currentMonthly * (1 + stepUpPercent / 100));
        }
      }

      totalInvested = cumInvested;
      finalCorpus = runningCorpus;
    }

    const totalWealthGained = Math.max(0, finalCorpus - totalInvested);
    const investedPercent = finalCorpus > 0 ? Math.round((totalInvested / finalCorpus) * 100) : 0;
    const gainPercent = 100 - investedPercent;

    // Inflation Adjusted (at 6% annual inflation)
    const inflationAdjustedCorpus = finalCorpus / Math.pow(1.06, years);

    return {
      totalInvested: Math.round(totalInvested),
      totalWealthGained: Math.round(totalWealthGained),
      finalCorpus: Math.round(finalCorpus),
      investedPercent,
      gainPercent,
      inflationAdjustedCorpus: Math.round(inflationAdjustedCorpus),
      yearlyBreakdown
    };
  }, [monthlyInvestment, expectedReturnRate, investmentPeriod, stepUpPercent, enableStepUp, sipMode]);

  // Target Goal Calculation
  const requiredMonthlySip = useMemo(() => {
    const r = expectedReturnRate / 12 / 100;
    const n = targetYears * 12;
    if (r === 0) return targetCorpus / n;
    // P = Target * r / [((1 + r)^n - 1) * (1 + r)]
    const factor = ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    return Math.round(targetCorpus / factor);
  }, [targetCorpus, targetYears, expectedReturnRate]);

  return (
    <div className="space-y-8">
      
      {/* Top Mode Tabs */}
      <div className="flex bg-slate-900 rounded-xl p-1 border border-slate-800 max-w-md mx-auto text-xs font-semibold">
        <button
          onClick={() => setSipMode('sip')}
          className={`flex-1 py-2 rounded-lg transition ${
            sipMode === 'sip' ? 'bg-cyan-500 text-slate-950 shadow-md font-bold' : 'text-slate-400 hover:text-white'
          }`}
        >
          Monthly SIP
        </button>
        <button
          onClick={() => setSipMode('lumpsum')}
          className={`flex-1 py-2 rounded-lg transition ${
            sipMode === 'lumpsum' ? 'bg-cyan-500 text-slate-950 shadow-md font-bold' : 'text-slate-400 hover:text-white'
          }`}
        >
          One-Time Lumpsum
        </button>
        <button
          onClick={() => setSipMode('target')}
          className={`flex-1 py-2 rounded-lg transition ${
            sipMode === 'target' ? 'bg-cyan-500 text-slate-950 shadow-md font-bold' : 'text-slate-400 hover:text-white'
          }`}
        >
          🎯 Goal Planner
        </button>
      </div>

      {sipMode !== 'target' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Form: Sliders */}
          <div className="lg:col-span-7 space-y-6 bg-slate-950/60 p-5 sm:p-7 rounded-2xl border border-slate-800">
            
            {/* 1. Monthly Investment Amount */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <label className="font-semibold text-slate-300 flex items-center gap-1.5">
                  <IndianRupee className="w-4 h-4 text-cyan-400" />
                  <span>{sipMode === 'sip' ? 'Monthly SIP Amount' : 'Lumpsum Investment Amount'}</span>
                </label>
                <div className="flex items-center gap-1 px-3 py-1 rounded-lg bg-slate-900 border border-slate-700">
                  <span className="text-slate-400 text-xs">₹</span>
                  <input
                    type="number"
                    min="500"
                    value={monthlyInvestment}
                    onChange={(e) => setMonthlyInvestment(Math.max(500, Number(e.target.value)))}
                    className="w-28 bg-transparent text-right font-mono font-bold text-white focus:outline-none text-sm"
                  />
                </div>
              </div>

              <input
                type="range"
                min="500"
                max={sipMode === 'sip' ? 100000 : 2000000}
                step="500"
                value={monthlyInvestment}
                onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                className="w-full accent-cyan-400"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                <span>₹500</span>
                <span>₹25,000</span>
                <span>₹50,000</span>
                <span>{sipMode === 'sip' ? '₹1,00,000' : '₹20,00,000'}</span>
              </div>
            </div>

            {/* 2. Expected Return Rate (% p.a.) */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <label className="font-semibold text-slate-300 flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  <span>Expected Return Rate (% p.a.)</span>
                </label>
                <div className="flex items-center gap-1 px-3 py-1 rounded-lg bg-slate-900 border border-slate-700">
                  <input
                    type="number"
                    step="0.5"
                    min="1"
                    max="30"
                    value={expectedReturnRate}
                    onChange={(e) => setExpectedReturnRate(Math.max(1, Number(e.target.value)))}
                    className="w-16 bg-transparent text-right font-mono font-bold text-white focus:outline-none text-sm"
                  />
                  <span className="text-slate-400 text-xs">%</span>
                </div>
              </div>

              <input
                type="range"
                min="5"
                max="25"
                step="0.5"
                value={expectedReturnRate}
                onChange={(e) => setExpectedReturnRate(Number(e.target.value))}
                className="w-full accent-emerald-400"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                <span>5% (Debt)</span>
                <span>12% (Index)</span>
                <span>15% (Flexi-cap)</span>
                <span>20% (Small-cap)</span>
              </div>
            </div>

            {/* 3. Time Horizon */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <label className="font-semibold text-slate-300 flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-purple-400" />
                  <span>Time Period (Years)</span>
                </label>
                <div className="flex items-center gap-1 px-3 py-1 rounded-lg bg-slate-900 border border-slate-700">
                  <input
                    type="number"
                    min="1"
                    max="40"
                    value={investmentPeriod}
                    onChange={(e) => setInvestmentPeriod(Math.max(1, Number(e.target.value)))}
                    className="w-14 bg-transparent text-right font-mono font-bold text-white focus:outline-none text-sm"
                  />
                  <span className="text-slate-400 text-xs">Yrs</span>
                </div>
              </div>

              <input
                type="range"
                min="1"
                max="35"
                value={investmentPeriod}
                onChange={(e) => setInvestmentPeriod(Number(e.target.value))}
                className="w-full accent-purple-400"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                <span>1 Year</span>
                <span>10 Years</span>
                <span>20 Years</span>
                <span>35 Years</span>
              </div>
            </div>

            {/* 4. Optional Annual Step-Up Feature */}
            {sipMode === 'sip' && (
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={enableStepUp}
                      onChange={(e) => setEnableStepUp(e.target.checked)}
                      className="rounded accent-cyan-400"
                    />
                    <span className="font-bold text-white text-xs sm:text-sm">
                      Enable Annual Step-Up (Top-Up SIP)
                    </span>
                  </label>
                  {enableStepUp && (
                    <span className="text-xs font-mono font-bold text-cyan-400">
                      +{stepUpPercent}% / year
                    </span>
                  )}
                </div>

                {enableStepUp && (
                  <div className="space-y-1.5 pt-1">
                    <input
                      type="range"
                      min="5"
                      max="25"
                      step="5"
                      value={stepUpPercent}
                      onChange={(e) => setStepUpPercent(Number(e.target.value))}
                      className="w-full accent-cyan-400"
                    />
                    <div className="flex justify-between text-[10px] text-slate-500">
                      <span>5% step-up</span>
                      <span>10% (Recommended)</span>
                      <span>20% step-up</span>
                    </div>
                  </div>
                )}
              </div>
            )}

          </div>

          {/* Right Output: Maturity Card & Ratio */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Final Corpus Hero */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-950/60 via-slate-900 to-cyan-950/60 border border-emerald-500/40 space-y-4 shadow-xl">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Total Expected Corpus Value
                </span>
                <div className="text-3xl sm:text-4xl font-black text-white font-mono">
                  {formatCurrency(results.finalCorpus)}
                </div>
                <span className="text-xs text-slate-400">at the end of {investmentPeriod} years</span>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-800 text-xs">
                <div>
                  <span className="text-slate-400 block text-[11px]">Total Amount Invested</span>
                  <span className="font-bold text-white font-mono">{formatCurrency(results.totalInvested)}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Estimated Wealth Gain</span>
                  <span className="font-bold text-emerald-400 font-mono">+{formatCurrency(results.totalWealthGained)}</span>
                </div>
              </div>
            </div>

            {/* Split Bar */}
            <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Investment vs Growth Breakdown
              </h4>

              <div className="h-4 w-full rounded-full bg-slate-800 overflow-hidden flex">
                <div
                  style={{ width: `${results.investedPercent}%` }}
                  className="h-full bg-cyan-400 transition-all duration-300"
                  title={`Invested: ${results.investedPercent}%`}
                />
                <div
                  style={{ width: `${results.gainPercent}%` }}
                  className="h-full bg-emerald-400 transition-all duration-300"
                  title={`Gain: ${results.gainPercent}%`}
                />
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-cyan-400 shrink-0" />
                  <div>
                    <span className="text-slate-400 block text-[11px]">Invested Capital</span>
                    <span className="font-bold text-white font-mono">{results.investedPercent}%</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-emerald-400 shrink-0" />
                  <div>
                    <span className="text-slate-400 block text-[11px]">Wealth Gained</span>
                    <span className="font-bold text-emerald-400 font-mono">{results.gainPercent}%</span>
                  </div>
                </div>
              </div>

              {/* Inflation Power Check */}
              <div className="pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center justify-between">
                <span>Real Purchasing Power (at 6% inflation):</span>
                <span className="font-mono font-bold text-slate-200">{formatCurrency(results.inflationAdjustedCorpus)}</span>
              </div>
            </div>

          </div>

        </div>
      ) : (
        /* Target Goal Planner Mode */
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-950 border border-slate-800 space-y-6 max-w-2xl mx-auto">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Target className="w-5 h-5 text-cyan-400" />
              <span>Target Wealth Goal Calculator</span>
            </h3>
            <p className="text-xs text-slate-400">
              Calculate the exact monthly SIP needed to reach your dream target corpus
            </p>
          </div>

          <div className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">Target Corpus Goal Amount</label>
              <div className="flex items-center gap-2">
                <div className="flex-grow flex items-center px-3 py-2 rounded-xl bg-slate-900 border border-slate-700">
                  <span className="text-slate-400 text-sm mr-2">₹</span>
                  <input
                    type="number"
                    value={targetCorpus}
                    onChange={(e) => setTargetCorpus(Math.max(100000, Number(e.target.value)))}
                    className="w-full bg-transparent font-mono font-bold text-white focus:outline-none"
                  />
                </div>
                <button
                  onClick={() => setTargetCorpus(10000000)}
                  className="px-3 py-2 rounded-xl bg-slate-800 text-xs font-semibold text-cyan-400 hover:bg-slate-700"
                >
                  ₹1 Crore
                </button>
                <button
                  onClick={() => setTargetCorpus(50000000)}
                  className="px-3 py-2 rounded-xl bg-slate-800 text-xs font-semibold text-cyan-400 hover:bg-slate-700"
                >
                  ₹5 Crore
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="space-y-1.5">
                <label className="font-semibold text-slate-300">Target Time Horizon (Years)</label>
                <input
                  type="number"
                  min="1"
                  max="35"
                  value={targetYears}
                  onChange={(e) => setTargetYears(Math.max(1, Number(e.target.value)))}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 font-mono font-bold text-white focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-semibold text-slate-300">Expected CAGR (% p.a.)</label>
                <input
                  type="number"
                  step="0.5"
                  value={expectedReturnRate}
                  onChange={(e) => setExpectedReturnRate(Math.max(1, Number(e.target.value)))}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 font-mono font-bold text-white focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Goal Output Banner */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-cyan-950 via-slate-900 to-blue-950 border border-cyan-500/40 text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              Required Monthly SIP
            </span>
            <div className="text-3xl sm:text-4xl font-black text-white font-mono">
              {formatCurrency(requiredMonthlySip)} / month
            </div>
            <p className="text-xs text-slate-400">
              Investing {formatCurrency(requiredMonthlySip)} monthly for {targetYears} years at {expectedReturnRate}% CAGR will accumulate your {formatCurrency(targetCorpus)} goal.
            </p>
          </div>
        </div>
      )}

      {/* Year-by-Year Growth Table */}
      {sipMode !== 'target' && (
        <div className="space-y-4 pt-6 border-t border-slate-800">
          <h3 className="text-lg font-bold text-white">
            Year-by-Year Wealth Progression Table
          </h3>

          <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="bg-slate-900/90 text-slate-400 font-semibold border-b border-slate-800">
                <tr>
                  <th className="p-3 sm:p-4">Year</th>
                  <th className="p-3 sm:p-4 text-right">Invested in Year</th>
                  <th className="p-3 sm:p-4 text-right text-cyan-400">Cumulative Invested</th>
                  <th className="p-3 sm:p-4 text-right text-emerald-400">Wealth Gain</th>
                  <th className="p-3 sm:p-4 text-right font-bold text-white">Ending Portfolio Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-900 font-mono">
                {results.yearlyBreakdown.map((row) => (
                  <tr key={row.year} className="hover:bg-slate-900/50 transition">
                    <td className="p-3 sm:p-4 font-bold text-white">Year {row.year}</td>
                    <td className="p-3 sm:p-4 text-right text-slate-400">{formatCurrency(row.invested)}</td>
                    <td className="p-3 sm:p-4 text-right text-cyan-400">{formatCurrency(row.totalInvested)}</td>
                    <td className="p-3 sm:p-4 text-right text-emerald-400">+{formatCurrency(row.profit)}</td>
                    <td className="p-3 sm:p-4 text-right text-white font-bold">{formatCurrency(row.corpus)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

    </div>
  );
};
