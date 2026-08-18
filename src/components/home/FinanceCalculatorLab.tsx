import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  DollarSign, 
  TrendingUp, 
  Receipt, 
  PieChart, 
  ArrowRight, 
  Sparkles, 
  RotateCcw, 
  CheckCircle2,
  FileSpreadsheet
} from 'lucide-react';

interface FinanceCalculatorLabProps {
  onNavigate: (page: string, slug?: string) => void;
}

export const FinanceCalculatorLab: React.FC<FinanceCalculatorLabProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'emi' | 'eligibility' | 'sip' | 'gst'>('emi');

  // 1. EMI State
  const [loanAmount, setLoanAmount] = useState<number>(1000000); // 10 Lakhs
  const [interestRate, setInterestRate] = useState<number>(9.5); // 9.5%
  const [tenureYears, setTenureYears] = useState<number>(5); // 5 Years

  // 2. SIP State
  const [sipMonthly, setSipMonthly] = useState<number>(10000);
  const [sipReturnRate, setSipReturnRate] = useState<number>(12); // 12%
  const [sipYears, setSipYears] = useState<number>(10);

  // 3. GST State
  const [gstAmount, setGstAmount] = useState<number>(50000);
  const [gstRate, setGstRate] = useState<number>(18);
  const [gstType, setGstType] = useState<'exclusive' | 'inclusive'>('exclusive');

  // 4. Loan Eligibility State
  const [monthlyIncome, setMonthlyIncome] = useState<number>(75000);
  const [existingEmi, setExistingEmi] = useState<number>(15000);
  const [eligibilityTenure, setEligibilityTenure] = useState<number>(20); // 20 years
  const [eligibilityRate, setEligibilityRate] = useState<number>(8.5);

  // EMI Math
  const emiCalc = useMemo(() => {
    const p = loanAmount;
    const r = interestRate / 12 / 100;
    const n = tenureYears * 12;
    if (r === 0) {
      const emi = p / n;
      return { emi: Math.round(emi), totalInterest: 0, totalPayable: p };
    }
    const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPayable = emi * n;
    const totalInterest = totalPayable - p;
    return {
      emi: Math.round(emi),
      totalInterest: Math.round(totalInterest),
      totalPayable: Math.round(totalPayable)
    };
  }, [loanAmount, interestRate, tenureYears]);

  // SIP Math
  const sipCalc = useMemo(() => {
    const p = sipMonthly;
    const i = sipReturnRate / 12 / 100;
    const n = sipYears * 12;
    const invested = p * n;
    if (i === 0) {
      return { invested, returns: 0, total: invested };
    }
    const total = p * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
    const returns = total - invested;
    return {
      invested: Math.round(invested),
      returns: Math.round(returns),
      total: Math.round(total)
    };
  }, [sipMonthly, sipReturnRate, sipYears]);

  // GST Math
  const gstCalc = useMemo(() => {
    const val = gstAmount;
    const rate = gstRate / 100;
    if (gstType === 'exclusive') {
      const gstVal = val * rate;
      const total = val + gstVal;
      return { base: val, gstVal: Math.round(gstVal), total: Math.round(total), cgst: Math.round(gstVal / 2), sgst: Math.round(gstVal / 2) };
    } else {
      const base = val / (1 + rate);
      const gstVal = val - base;
      return { base: Math.round(base), gstVal: Math.round(gstVal), total: val, cgst: Math.round(gstVal / 2), sgst: Math.round(gstVal / 2) };
    }
  }, [gstAmount, gstRate, gstType]);

  // Eligibility Math (FOIR = 50%)
  const eligibilityCalc = useMemo(() => {
    const netDisposable = (monthlyIncome * 0.5) - existingEmi;
    if (netDisposable <= 0) return { maxEmi: 0, maxLoan: 0 };
    const r = eligibilityRate / 12 / 100;
    const n = eligibilityTenure * 12;
    const maxLoan = (netDisposable * (Math.pow(1 + r, n) - 1)) / (r * Math.pow(1 + r, n));
    return {
      maxEmi: Math.round(netDisposable),
      maxLoan: Math.max(0, Math.round(maxLoan))
    };
  }, [monthlyIncome, existingEmi, eligibilityTenure, eligibilityRate]);

  return (
    <section id="finance-calculators" className="py-24 bg-[#050811] relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-r from-amber-500/10 via-emerald-500/10 to-transparent rounded-full blur-[150px] pointer-events-none" />

      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-5xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-bold font-mono uppercase tracking-widest">
            <Calculator className="w-3.5 h-3.5 text-amber-400" />
            <span>Precision FinTech Algorithms</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            Finance Calculator{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-emerald-400">
              Lab
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Mathematically verified interactive financial tools for business loans, EMI schedules, wealth compounding, and GST tax calculations.
          </p>
        </div>

        {/* Calculator Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <button
            onClick={() => setActiveTab('emi')}
            className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition cursor-pointer border flex items-center gap-2 ${
              activeTab === 'emi'
                ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.4)]'
                : 'bg-slate-900 text-slate-400 hover:text-white border-slate-800'
            }`}
          >
            <DollarSign className="w-4 h-4" />
            <span>Loan EMI Calculator</span>
          </button>

          <button
            onClick={() => setActiveTab('eligibility')}
            className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition cursor-pointer border flex items-center gap-2 ${
              activeTab === 'eligibility'
                ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.4)]'
                : 'bg-slate-900 text-slate-400 hover:text-white border-slate-800'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Loan Eligibility</span>
          </button>

          <button
            onClick={() => setActiveTab('sip')}
            className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition cursor-pointer border flex items-center gap-2 ${
              activeTab === 'sip'
                ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.4)]'
                : 'bg-slate-900 text-slate-400 hover:text-white border-slate-800'
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            <span>SIP &amp; Wealth</span>
          </button>

          <button
            onClick={() => setActiveTab('gst')}
            className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition cursor-pointer border flex items-center gap-2 ${
              activeTab === 'gst'
                ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.4)]'
                : 'bg-slate-900 text-slate-400 hover:text-white border-slate-800'
            }`}
          >
            <Receipt className="w-4 h-4" />
            <span>GST Calculator</span>
          </button>
        </div>

        {/* Active Calculator Canvas */}
        <div className="rounded-3xl bg-slate-950/90 border border-amber-500/30 p-6 sm:p-10 backdrop-blur-2xl shadow-2xl animate-in fade-in zoom-in-95 duration-150">
          
          {/* 1. EMI CALCULATOR */}
          {activeTab === 'emi' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Controls */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-amber-400" />
                    <span>Loan Parameters</span>
                  </h3>
                  <button 
                    onClick={() => { setLoanAmount(1000000); setInterestRate(9.5); setTenureYears(5); }}
                    className="text-xs text-slate-400 hover:text-amber-400 flex items-center gap-1 cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset</span>
                  </button>
                </div>

                {/* Amount Slider */}
                <div className="space-y-2 p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-slate-400">Loan Amount</span>
                    <span className="text-amber-300 font-mono text-base font-bold">₹{loanAmount.toLocaleString('en-IN')}</span>
                  </div>
                  <input
                    type="range"
                    min={50000}
                    max={10000000}
                    step={25000}
                    value={loanAmount}
                    onChange={e => setLoanAmount(Number(e.target.value))}
                    className="w-full accent-amber-400 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                    <span>₹50K</span>
                    <span>₹50 Lakhs</span>
                    <span>₹1 Crore</span>
                  </div>
                </div>

                {/* Interest Slider */}
                <div className="space-y-2 p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-slate-400">Interest Rate (p.a.)</span>
                    <span className="text-amber-300 font-mono text-base font-bold">{interestRate}%</span>
                  </div>
                  <input
                    type="range"
                    min={5}
                    max={24}
                    step={0.1}
                    value={interestRate}
                    onChange={e => setInterestRate(Number(e.target.value))}
                    className="w-full accent-amber-400 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                    <span>5%</span>
                    <span>12%</span>
                    <span>24%</span>
                  </div>
                </div>

                {/* Tenure Slider */}
                <div className="space-y-2 p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-slate-400">Tenure</span>
                    <span className="text-amber-300 font-mono text-base font-bold">{tenureYears} Years ({tenureYears * 12} Months)</span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={30}
                    step={1}
                    value={tenureYears}
                    onChange={e => setTenureYears(Number(e.target.value))}
                    className="w-full accent-amber-400 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                    <span>1 Yr</span>
                    <span>15 Yrs</span>
                    <span>30 Yrs</span>
                  </div>
                </div>

              </div>

              {/* Right Output Display */}
              <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-amber-500/40 space-y-6 shadow-xl text-center sm:text-left">
                <div>
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
                    Monthly Loan Payment
                  </div>
                  <div className="text-4xl sm:text-5xl font-black text-white mt-1 font-mono tracking-tight">
                    ₹{emiCalc.emi.toLocaleString('en-IN')}
                    <span className="text-xs text-slate-400 font-sans font-normal ml-1">/ month</span>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-800 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Principal Loan:</span>
                    <span className="font-bold text-white font-mono">₹{loanAmount.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Total Interest:</span>
                    <span className="font-bold text-amber-300 font-mono">₹{emiCalc.totalInterest.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-slate-800">
                    <span className="text-slate-300 font-bold">Total Amount Payable:</span>
                    <span className="font-black text-white font-mono text-sm">₹{emiCalc.totalPayable.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onNavigate('service-detail', 'business-loan')}
                    className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-500 hover:brightness-110 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition cursor-pointer shadow-lg"
                  >
                    <span>Apply for Loan with This EMI</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[10px] text-slate-500 text-center mt-2">
                    *Estimated calculation. Actual sanction subject to lender credit policy and CIBIL score.
                  </p>
                </div>
              </div>

            </div>
          )}

          {/* 2. ELIGIBILITY CALCULATOR */}
          {activeTab === 'eligibility' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-6">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-amber-400" />
                  <span>Applicant Income Profile</span>
                </h3>

                <div className="space-y-2 p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-slate-400">Net Monthly In-Hand Income</span>
                    <span className="text-amber-300 font-mono text-base font-bold">₹{monthlyIncome.toLocaleString('en-IN')}</span>
                  </div>
                  <input
                    type="range"
                    min={20000}
                    max={500000}
                    step={5000}
                    value={monthlyIncome}
                    onChange={e => setMonthlyIncome(Number(e.target.value))}
                    className="w-full accent-amber-400 cursor-pointer"
                  />
                </div>

                <div className="space-y-2 p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-slate-400">Existing Monthly EMIs / Liabilities</span>
                    <span className="text-amber-300 font-mono text-base font-bold">₹{existingEmi.toLocaleString('en-IN')}</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={200000}
                    step={2500}
                    value={existingEmi}
                    onChange={e => setExistingEmi(Number(e.target.value))}
                    className="w-full accent-amber-400 cursor-pointer"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
                    <span className="text-xs text-slate-400">Tenure (Years)</span>
                    <input
                      type="number"
                      value={eligibilityTenure}
                      onChange={e => setEligibilityTenure(Number(e.target.value))}
                      className="w-full bg-transparent text-white font-mono font-bold text-sm focus:outline-none"
                    />
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
                    <span className="text-xs text-slate-400">Expected Interest Rate (%)</span>
                    <input
                      type="number"
                      step={0.1}
                      value={eligibilityRate}
                      onChange={e => setEligibilityRate(Number(e.target.value))}
                      className="w-full bg-transparent text-white font-mono font-bold text-sm focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-amber-500/40 space-y-6 shadow-xl">
                <div>
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
                    Max Estimated Loan Eligibility
                  </div>
                  <div className="text-4xl sm:text-5xl font-black text-white mt-1 font-mono tracking-tight">
                    ₹{eligibilityCalc.maxLoan.toLocaleString('en-IN')}
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-800 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Permissible Max EMI (50% FOIR):</span>
                    <span className="font-bold text-white font-mono">₹{eligibilityCalc.maxEmi.toLocaleString('en-IN')}/mo</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Applicant Debt Burden:</span>
                    <span className="font-bold text-emerald-400 font-mono">{Math.round((existingEmi / monthlyIncome) * 100)}%</span>
                  </div>
                </div>

                <button
                  onClick={() => onNavigate('financial-solutions')}
                  className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-500 hover:brightness-110 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition cursor-pointer shadow-lg"
                >
                  <span>Check Bank Approval Rates</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* 3. SIP CALCULATOR */}
          {activeTab === 'sip' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-6">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-emerald-400" />
                  <span>SIP Compounding Inputs</span>
                </h3>

                <div className="space-y-2 p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-slate-400">Monthly SIP Investment</span>
                    <span className="text-emerald-300 font-mono text-base font-bold">₹{sipMonthly.toLocaleString('en-IN')}</span>
                  </div>
                  <input
                    type="range"
                    min={500}
                    max={100000}
                    step={500}
                    value={sipMonthly}
                    onChange={e => setSipMonthly(Number(e.target.value))}
                    className="w-full accent-emerald-400 cursor-pointer"
                  />
                </div>

                <div className="space-y-2 p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-slate-400">Expected Annual Return (%)</span>
                    <span className="text-emerald-300 font-mono text-base font-bold">{sipReturnRate}%</span>
                  </div>
                  <input
                    type="range"
                    min={6}
                    max={25}
                    step={0.5}
                    value={sipReturnRate}
                    onChange={e => setSipReturnRate(Number(e.target.value))}
                    className="w-full accent-emerald-400 cursor-pointer"
                  />
                </div>

                <div className="space-y-2 p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-slate-400">Time Horizon (Years)</span>
                    <span className="text-emerald-300 font-mono text-base font-bold">{sipYears} Years</span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={35}
                    step={1}
                    value={sipYears}
                    onChange={e => setSipYears(Number(e.target.value))}
                    className="w-full accent-emerald-400 cursor-pointer"
                  />
                </div>
              </div>

              <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-emerald-500/40 space-y-6 shadow-xl">
                <div>
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                    Projected Maturity Value
                  </div>
                  <div className="text-4xl sm:text-5xl font-black text-white mt-1 font-mono tracking-tight">
                    ₹{sipCalc.total.toLocaleString('en-IN')}
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-800 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Total Invested Amount:</span>
                    <span className="font-bold text-white font-mono">₹{sipCalc.invested.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Estimated Wealth Gain:</span>
                    <span className="font-bold text-emerald-400 font-mono">+₹{sipCalc.returns.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-emerald-400 to-teal-500 hover:brightness-110 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition cursor-pointer shadow-lg"
                >
                  <span>Consult Financial Planner</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* 4. GST CALCULATOR */}
          {activeTab === 'gst' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-6">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Receipt className="w-5 h-5 text-cyan-400" />
                  <span>GST Calculation Inputs</span>
                </h3>

                <div className="flex gap-2">
                  <button
                    onClick={() => setGstType('exclusive')}
                    className={`flex-1 py-2 rounded-xl text-xs font-bold border transition cursor-pointer ${
                      gstType === 'exclusive' ? 'bg-cyan-500 text-slate-950 border-cyan-400' : 'bg-slate-900 text-slate-400 border-slate-800'
                    }`}
                  >
                    GST Exclusive (Add GST)
                  </button>
                  <button
                    onClick={() => setGstType('inclusive')}
                    className={`flex-1 py-2 rounded-xl text-xs font-bold border transition cursor-pointer ${
                      gstType === 'inclusive' ? 'bg-cyan-500 text-slate-950 border-cyan-400' : 'bg-slate-900 text-slate-400 border-slate-800'
                    }`}
                  >
                    GST Inclusive (Extract GST)
                  </button>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
                  <span className="text-xs text-slate-400">Amount (₹)</span>
                  <input
                    type="number"
                    value={gstAmount}
                    onChange={e => setGstAmount(Number(e.target.value))}
                    className="w-full bg-transparent text-white font-mono font-bold text-xl focus:outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <span className="text-xs text-slate-400">GST Slab Rate</span>
                  <div className="grid grid-cols-4 gap-2">
                    {[5, 12, 18, 28].map(rate => (
                      <button
                        key={rate}
                        onClick={() => setGstRate(rate)}
                        className={`py-2 rounded-xl text-xs font-bold border transition cursor-pointer ${
                          gstRate === rate ? 'bg-cyan-500 text-slate-950 border-cyan-400 font-black' : 'bg-slate-900 text-slate-300 border-slate-800'
                        }`}
                      >
                        {rate}%
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-cyan-500/40 space-y-6 shadow-xl">
                <div>
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
                    Total Invoice Value
                  </div>
                  <div className="text-4xl sm:text-5xl font-black text-white mt-1 font-mono tracking-tight">
                    ₹{gstCalc.total.toLocaleString('en-IN')}
                  </div>
                </div>

                <div className="space-y-2.5 pt-4 border-t border-slate-800 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Net Base Amount:</span>
                    <span className="font-bold text-white font-mono">₹{gstCalc.base.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Total GST ({gstRate}%):</span>
                    <span className="font-bold text-cyan-400 font-mono">₹{gstCalc.gstVal.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-slate-500">
                    <span>CGST ({gstRate / 2}%) / SGST ({gstRate / 2}%):</span>
                    <span>₹{gstCalc.cgst} / ₹{gstCalc.sgst}</span>
                  </div>
                </div>

                <button
                  onClick={() => onNavigate('service-detail', 'gst')}
                  className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:brightness-110 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition cursor-pointer shadow-lg"
                >
                  <span>File GST or Generate Invoices</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
