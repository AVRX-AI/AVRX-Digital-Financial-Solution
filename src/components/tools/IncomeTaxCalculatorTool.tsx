import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  IndianRupee, 
  Sparkles, 
  CheckCircle2, 
  HelpCircle, 
  TrendingDown, 
  ArrowRight,
  ShieldCheck,
  Scale
} from 'lucide-react';

export const IncomeTaxCalculatorTool: React.FC = () => {
  const [grossSalary, setGrossSalary] = useState<number>(1200000); // 12 Lakhs
  const [otherIncome, setOtherIncome] = useState<number>(50000); // Interest/Freelance
  const [sec80C, setSec80C] = useState<number>(150000); // Max 1.5L
  const [sec80D, setSec80D] = useState<number>(25000); // Health insurance
  const [nps80CCD, setNps80CCD] = useState<number>(50000); // NPS ₹50k
  const [homeLoanInterest, setHomeLoanInterest] = useState<number>(0); // Sec 24(b)
  const [hraExemption, setHraExemption] = useState<number>(0); // HRA

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  const calculation = useMemo(() => {
    const totalGross = Math.max(0, grossSalary) + Math.max(0, otherIncome);

    // ================= NEW REGIME (FY 2024-25 / Budget 2024) =================
    // Standard deduction in New Regime: ₹75,000
    const newStdDeduction = 75000;
    const newTaxableIncome = Math.max(0, totalGross - newStdDeduction);

    let newTax = 0;
    if (newTaxableIncome <= 300000) {
      newTax = 0;
    } else if (newTaxableIncome <= 700000) {
      newTax = (newTaxableIncome - 300000) * 0.05;
    } else if (newTaxableIncome <= 1000000) {
      newTax = (400000 * 0.05) + ((newTaxableIncome - 700000) * 0.10);
    } else if (newTaxableIncome <= 1200000) {
      newTax = (400000 * 0.05) + (300000 * 0.10) + ((newTaxableIncome - 1000000) * 0.15);
    } else if (newTaxableIncome <= 1500000) {
      newTax = (400000 * 0.05) + (300000 * 0.10) + (200000 * 0.15) + ((newTaxableIncome - 1200000) * 0.20);
    } else {
      newTax = (400000 * 0.05) + (300000 * 0.10) + (200000 * 0.15) + (300000 * 0.20) + ((newTaxableIncome - 1500000) * 0.30);
    }

    // Section 87A Rebate in New Regime: up to ₹7,00,000 taxable income -> 100% rebate (max ₹25,000)
    let newRebate87A = 0;
    if (newTaxableIncome <= 700000) {
      newRebate87A = newTax;
      newTax = 0;
    }

    const newCess = Math.round(newTax * 0.04);
    const newTotalTax = Math.round(newTax + newCess);

    // ================= OLD REGIME =================
    // Standard deduction in Old Regime: ₹50,000
    const oldStdDeduction = 50000;
    const capped80C = Math.min(150000, Math.max(0, sec80C));
    const capped80D = Math.min(100000, Math.max(0, sec80D));
    const cappedNps = Math.min(50000, Math.max(0, nps80CCD));
    const cappedHomeLoan = Math.min(200000, Math.max(0, homeLoanInterest));
    const totalOldDeductions = oldStdDeduction + capped80C + capped80D + cappedNps + cappedHomeLoan + Math.max(0, hraExemption);

    const oldTaxableIncome = Math.max(0, totalGross - totalOldDeductions);

    let oldTax = 0;
    if (oldTaxableIncome <= 250000) {
      oldTax = 0;
    } else if (oldTaxableIncome <= 500000) {
      oldTax = (oldTaxableIncome - 250000) * 0.05;
    } else if (oldTaxableIncome <= 1000000) {
      oldTax = (250000 * 0.05) + ((oldTaxableIncome - 500000) * 0.20);
    } else {
      oldTax = (250000 * 0.05) + (500000 * 0.20) + ((oldTaxableIncome - 1000000) * 0.30);
    }

    // Section 87A Rebate in Old Regime: up to ₹5,00,000 taxable income -> 100% rebate (max ₹12,500)
    let oldRebate87A = 0;
    if (oldTaxableIncome <= 500000) {
      oldRebate87A = oldTax;
      oldTax = 0;
    }

    const oldCess = Math.round(oldTax * 0.04);
    const oldTotalTax = Math.round(oldTax + oldCess);

    const difference = Math.abs(newTotalTax - oldTotalTax);
    const recommended = newTotalTax <= oldTotalTax ? 'new' : 'old';

    return {
      totalGross,
      newRegime: {
        stdDeduction: newStdDeduction,
        taxableIncome: newTaxableIncome,
        baseTax: Math.round(newTax),
        rebate87A: Math.round(newRebate87A),
        cess: newCess,
        totalTax: newTotalTax
      },
      oldRegime: {
        stdDeduction: oldStdDeduction,
        totalDeductions: totalOldDeductions,
        taxableIncome: oldTaxableIncome,
        baseTax: Math.round(oldTax),
        rebate87A: Math.round(oldRebate87A),
        cess: oldCess,
        totalTax: oldTotalTax
      },
      recommended,
      difference
    };
  }, [grossSalary, otherIncome, sec80C, sec80D, nps80CCD, homeLoanInterest, hraExemption]);

  return (
    <div className="space-y-8">
      
      {/* Top Recommendation Banner */}
      <div className={`p-5 rounded-2xl border flex flex-wrap items-center justify-between gap-4 shadow-lg ${
        calculation.recommended === 'new'
          ? 'bg-gradient-to-r from-cyan-950/60 via-slate-900 to-blue-950/60 border-cyan-500/40'
          : 'bg-gradient-to-r from-emerald-950/60 via-slate-900 to-cyan-950/60 border-emerald-500/40'
      }`}>
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400">
            <Scale className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-white text-base sm:text-lg">
                {calculation.recommended === 'new' ? 'New Tax Regime is Better' : 'Old Tax Regime is Better'}
              </span>
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-cyan-500 text-slate-950">
                Recommended
              </span>
            </div>
            <p className="text-xs text-slate-300 mt-0.5">
              You will save <strong className="text-emerald-400 font-mono font-bold">{formatCurrency(calculation.difference)}</strong> in taxes by opting for the {calculation.recommended === 'new' ? 'New Regime (Sec 115BAC)' : 'Old Regime'}.
            </p>
          </div>
        </div>
      </div>

      {/* Inputs & Comparison Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Form: Income & Deductions */}
        <div className="lg:col-span-7 space-y-6 bg-slate-950/60 p-5 sm:p-7 rounded-2xl border border-slate-800">
          
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
            1. Income Details (FY 2024-25 / AY 2025-26)
          </h3>

          {/* Gross Salary */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <label className="font-semibold text-slate-300">Annual Gross Salary / CTC</label>
              <div className="flex items-center gap-1 px-3 py-1 rounded-lg bg-slate-900 border border-slate-700">
                <span className="text-slate-400 text-xs">₹</span>
                <input
                  type="number"
                  value={grossSalary}
                  onChange={(e) => setGrossSalary(Math.max(0, Number(e.target.value)))}
                  className="w-28 bg-transparent text-right font-mono font-bold text-white focus:outline-none text-sm"
                />
              </div>
            </div>
            <input
              type="range"
              min="300000"
              max="5000000"
              step="50000"
              value={grossSalary}
              onChange={(e) => setGrossSalary(Number(e.target.value))}
              className="w-full accent-cyan-400"
            />
          </div>

          {/* Other Income */}
          <div className="space-y-1.5 text-xs">
            <label className="font-semibold text-slate-300">Income from Other Sources (Interest, Rental, Freelancing)</label>
            <input
              type="number"
              value={otherIncome}
              onChange={(e) => setOtherIncome(Math.max(0, Number(e.target.value)))}
              className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 font-mono text-white focus:outline-none"
            />
          </div>

          {/* Old Regime Deductions Section */}
          <div className="space-y-4 pt-4 border-t border-slate-800">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                2. Deductions (Applicable to Old Regime Only)
              </h3>
              <span className="text-[10px] text-slate-500">Standard ₹75K auto-applied for New Regime</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="space-y-1">
                <label className="text-slate-300">Section 80C (PPF, ELSS, EPF, LIC - Max 1.5L)</label>
                <input
                  type="number"
                  value={sec80C}
                  onChange={(e) => setSec80C(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 font-mono text-white focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-slate-300">Section 80D (Mediclaim / Health Insurance)</label>
                <input
                  type="number"
                  value={sec80D}
                  onChange={(e) => setSec80D(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 font-mono text-white focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-slate-300">Section 80CCD(1B) (NPS - Max ₹50,000)</label>
                <input
                  type="number"
                  value={nps80CCD}
                  onChange={(e) => setNps80CCD(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 font-mono text-white focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-slate-300">Section 24(b) (Home Loan Interest - Max 2L)</label>
                <input
                  type="number"
                  value={homeLoanInterest}
                  onChange={(e) => setHomeLoanInterest(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 font-mono text-white focus:outline-none"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Right Output: Side-by-Side Regime Cards */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* New Regime Card */}
          <div className={`p-5 rounded-2xl border transition space-y-3 ${
            calculation.recommended === 'new'
              ? 'bg-slate-900 border-cyan-500/60 shadow-xl shadow-cyan-500/10'
              : 'bg-slate-950/70 border-slate-800 opacity-70'
          }`}>
            <div className="flex items-center justify-between">
              <span className="font-bold text-white text-sm flex items-center gap-1.5">
                <span>New Tax Regime</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-400 font-mono">
                  Default (Budget 2024)
                </span>
              </span>
              {calculation.recommended === 'new' && (
                <span className="text-xs font-bold text-emerald-400">Save {formatCurrency(calculation.difference)}</span>
              )}
            </div>

            <div className="space-y-1.5 text-xs text-slate-300">
              <div className="flex justify-between">
                <span>Total Gross Income:</span>
                <span className="font-mono">{formatCurrency(calculation.totalGross)}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Standard Deduction:</span>
                <span className="font-mono">-₹75,000</span>
              </div>
              <div className="flex justify-between font-semibold text-white pt-1 border-t border-slate-800">
                <span>Taxable Income:</span>
                <span className="font-mono">{formatCurrency(calculation.newRegime.taxableIncome)}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Calculated Tax:</span>
                <span className="font-mono">{formatCurrency(calculation.newRegime.baseTax)}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Health &amp; Education Cess (4%):</span>
                <span className="font-mono">+{formatCurrency(calculation.newRegime.cess)}</span>
              </div>
              <div className="flex justify-between text-base font-black text-cyan-400 pt-2 border-t border-slate-800">
                <span>Total Tax Payable:</span>
                <span className="font-mono">{formatCurrency(calculation.newRegime.totalTax)}</span>
              </div>
            </div>
          </div>

          {/* Old Regime Card */}
          <div className={`p-5 rounded-2xl border transition space-y-3 ${
            calculation.recommended === 'old'
              ? 'bg-slate-900 border-emerald-500/60 shadow-xl shadow-emerald-500/10'
              : 'bg-slate-950/70 border-slate-800 opacity-70'
          }`}>
            <div className="flex items-center justify-between">
              <span className="font-bold text-white text-sm flex items-center gap-1.5">
                <span>Old Tax Regime</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 font-mono">
                  With Deductions
                </span>
              </span>
              {calculation.recommended === 'old' && (
                <span className="text-xs font-bold text-emerald-400">Save {formatCurrency(calculation.difference)}</span>
              )}
            </div>

            <div className="space-y-1.5 text-xs text-slate-300">
              <div className="flex justify-between">
                <span>Total Gross Income:</span>
                <span className="font-mono">{formatCurrency(calculation.totalGross)}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Total Deductions Claimed:</span>
                <span className="font-mono">-{formatCurrency(calculation.oldRegime.totalDeductions)}</span>
              </div>
              <div className="flex justify-between font-semibold text-white pt-1 border-t border-slate-800">
                <span>Taxable Income:</span>
                <span className="font-mono">{formatCurrency(calculation.oldRegime.taxableIncome)}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Calculated Tax:</span>
                <span className="font-mono">{formatCurrency(calculation.oldRegime.baseTax)}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Health &amp; Education Cess (4%):</span>
                <span className="font-mono">+{formatCurrency(calculation.oldRegime.cess)}</span>
              </div>
              <div className="flex justify-between text-base font-black text-emerald-400 pt-2 border-t border-slate-800">
                <span>Total Tax Payable:</span>
                <span className="font-mono">{formatCurrency(calculation.oldRegime.totalTax)}</span>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
