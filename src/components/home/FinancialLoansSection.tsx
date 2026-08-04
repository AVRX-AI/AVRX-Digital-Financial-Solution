import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  DollarSign,
  Calculator,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Building2,
  Home,
  UserCheck,
  Car,
  Briefcase,
  Sparkles,
  Award,
  TrendingDown,
  HelpCircle
} from 'lucide-react';

export default function FinancialLoansSection() {
  const [loanType, setLoanType] = useState<'business' | 'personal' | 'home' | 'msme'>('business');
  const [loanAmount, setLoanAmount] = useState(2500000); // 25 Lakhs default
  const [interestRate, setInterestRate] = useState(9.5); // 9.5% default
  const [tenureYears, setTenureYears] = useState(5); // 5 Years default

  // Calculate EMI mathematically
  const { monthlyEmi, totalInterest, totalAmount } = useMemo(() => {
    const P = loanAmount;
    const r = interestRate / 12 / 100;
    const n = tenureYears * 12;

    if (r === 0) {
      const emi = Math.round(P / n);
      return { monthlyEmi: emi, totalInterest: 0, totalAmount: P };
    }

    const emi = Math.round((P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));
    const total = emi * n;
    const interest = total - P;

    return {
      monthlyEmi: emi,
      totalInterest: interest,
      totalAmount: total
    };
  }, [loanAmount, interestRate, tenureYears]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  const loanProducts = [
    {
      id: 'business',
      title: 'Business & MSME Unsecured Loan',
      rate: '8.75% - 14.5% p.a.',
      maxAmount: 'Up to ₹20 Crore',
      tenure: '1 to 7 Years',
      icon: Building2,
      badge: 'MOST POPULAR',
      desc: 'No collateral required for established businesses with 2+ years GST returns. Fast track sanction within 48 hours for expansion and working capital.',
      benefits: ['Zero collateral up to ₹75 Lakhs', '48-Hour digital approval process', 'Overdraft & Credit Line facility available', 'Minimal GST & ITR documentation'],
      defaults: { amount: 5000000, rate: 9.5, tenure: 5 }
    },
    {
      id: 'personal',
      title: 'Executive Personal & Emergency Loan',
      rate: '10.25% - 16% p.a.',
      maxAmount: 'Up to ₹40 Lakhs',
      tenure: '1 to 5 Years',
      icon: UserCheck,
      badge: 'INSTANT SANCTION',
      desc: 'Quick personal loans for salaried professionals, doctors, CAs, and business directors with flexible prepayment and zero foreclosure charges after 12 months.',
      benefits: ['100% Paperless KYC onboarding', 'No end-use restriction on funds', 'Disbursal in 4 hours for prime credit scores', 'Special 0.5% rate discount for doctors/CAs'],
      defaults: { amount: 1500000, rate: 10.5, tenure: 3 }
    },
    {
      id: 'home',
      title: 'Home Purchase & Construction Loan',
      rate: '8.35% - 9.15% p.a.',
      maxAmount: 'Up to ₹15 Crore',
      tenure: '5 to 30 Years',
      icon: Home,
      badge: 'LOWEST INTEREST',
      desc: 'Dream home financing with balance transfer options, PMAY government subsidy assistance, and doorstep legal verification.',
      benefits: ['Lowest market rate starting @ 8.35%', 'Up to 90% property valuation funding', 'Zero processing fee for female applicants', 'Flexible step-up and step-down EMI'],
      defaults: { amount: 7500000, rate: 8.45, tenure: 15 }
    },
    {
      id: 'msme',
      title: 'Govt Subsidized (Mudra / PMEGP / Standup India)',
      rate: '7.5% - 10.5% p.a.',
      maxAmount: 'Up to ₹50 Lakhs',
      tenure: '3 to 7 Years',
      icon: Award,
      badge: 'UP TO 35% SUBSIDY',
      desc: 'Special government schemes for manufacturing and service MSMEs with CGTMSE credit guarantee and capital subsidy support.',
      benefits: ['Up to 35% PMEGP margin money subsidy', 'CGTMSE government collateral guarantee', 'Dedicated CA project report drafting', 'Priority sector bank facilitation'],
      defaults: { amount: 2000000, rate: 8.5, tenure: 5 }
    }
  ];

  const activeProduct = loanProducts.find((p) => p.id === loanType) || loanProducts[0];

  const handleSelectProduct = (product: typeof loanProducts[0]) => {
    setLoanType(product.id as any);
    setLoanAmount(product.defaults.amount);
    setInterestRate(product.defaults.rate);
    setTenureYears(product.defaults.tenure);
  };

  return (
    <section id="financial-solutions" className="py-24 bg-[#080A10] border-t border-white/10 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wider uppercase">
              <DollarSign className="w-3.5 h-3.5" />
              <span>Instant Financial & Credit Ecosystem</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-extrabold text-white tracking-tight">
              Powering Ambition with <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Instant Capital & Loans
              </span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Partnered with 25+ top private banks and NBFCs (HDFC, ICICI, SBI, Axis, Bajaj) to deliver lowest interest rates, minimal documentation, and 48-hour sanctions.
            </p>
          </div>

          <Link
            to="/financial-solutions"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white text-sm font-semibold transition-all group self-start md:self-auto"
          >
            <span>Explore All 12 Loan Schemes</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-cyan-400" />
          </Link>
        </div>

        {/* Loan Type Category Selector */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {loanProducts.map((product) => {
            const Icon = product.icon;
            const isSelected = loanType === product.id;
            return (
              <button
                key={product.id}
                onClick={() => handleSelectProduct(product)}
                className={`p-4 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-gradient-to-r from-blue-600/20 to-cyan-500/20 border-cyan-500/50 shadow-xl shadow-cyan-500/10'
                    : 'bg-white/5 hover:bg-white/10 border-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2.5 rounded-xl ${isSelected ? 'bg-cyan-500 text-white' : 'bg-white/10 text-slate-300'}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${
                    isSelected ? 'bg-cyan-400/20 text-cyan-300 border border-cyan-400/30' : 'bg-white/5 text-slate-400'
                  }`}>
                    {product.badge}
                  </span>
                </div>
                <div>
                  <h3 className="font-poppins font-bold text-sm text-white mb-1">{product.title}</h3>
                  <div className="text-xs text-cyan-400 font-medium">{product.rate}</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Main Grid: Selected Product Highlights + Interactive EMI Calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Loan Product Detail */}
          <div className="lg:col-span-6 glass-card p-8 rounded-3xl border border-white/15 bg-gradient-to-b from-blue-900/20 to-slate-900/40 space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest block mb-1">
                  SELECTED SCHEME
                </span>
                <h3 className="text-2xl font-poppins font-extrabold text-white">
                  {activeProduct.title}
                </h3>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-400 block">Sanction Ceiling</span>
                <span className="text-lg font-bold text-green-400">{activeProduct.maxAmount}</span>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">
              {activeProduct.desc}
            </p>

            {/* Key Benefits Checklist */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                Why Enterprises Choose AVRX Financing:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeProduct.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-300 leading-snug">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Eligibility Banner */}
            <div className="p-4 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-blue-400 flex-shrink-0" />
                <div>
                  <div className="text-xs font-bold text-white">Check Eligibility Without CIBIL Hit</div>
                  <div className="text-[11px] text-slate-400">Soft credit pull • Instant pre-approved limit check</div>
                </div>
              </div>
              <Link
                to="/financial-solutions"
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs whitespace-nowrap transition-colors"
              >
                Apply Now
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive CRED-Style EMI Calculator */}
          <div className="lg:col-span-6 glass-card p-8 rounded-3xl border border-cyan-500/30 bg-[#0F121A]/90 shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center border border-cyan-500/30">
                  <Calculator className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-poppins font-bold text-base text-white">Interactive EMI Calculator</h3>
                  <p className="text-xs text-slate-400">Slide to simulate instant repayment schedule</p>
                </div>
              </div>
              <span className="text-xs font-bold text-cyan-300 bg-cyan-500/10 px-2.5 py-1 rounded border border-cyan-500/20">
                LIVE MATH
              </span>
            </div>

            {/* Sliders */}
            <div className="space-y-6">
              {/* Loan Amount Slider */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold text-slate-300">Loan Amount Required</label>
                  <span className="text-base font-poppins font-bold text-white bg-white/10 px-3 py-1 rounded-lg border border-white/10">
                    {formatCurrency(loanAmount)}
                  </span>
                </div>
                <input
                  type="range"
                  min="100000"
                  max="20000000"
                  step="100000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-medium">
                  <span>₹1 Lakh</span>
                  <span>₹1 Crore</span>
                  <span>₹2 Crore</span>
                </div>
              </div>

              {/* Interest Rate Slider */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold text-slate-300">Interest Rate (p.a.)</label>
                  <span className="text-base font-poppins font-bold text-cyan-400 bg-white/10 px-3 py-1 rounded-lg border border-white/10">
                    {interestRate}% p.a.
                  </span>
                </div>
                <input
                  type="range"
                  min="7.5"
                  max="20"
                  step="0.25"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-medium">
                  <span>7.5% (Subsidized)</span>
                  <span>13% (Avg)</span>
                  <span>20%</span>
                </div>
              </div>

              {/* Tenure Slider */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold text-slate-300">Repayment Tenure</label>
                  <span className="text-base font-poppins font-bold text-white bg-white/10 px-3 py-1 rounded-lg border border-white/10">
                    {tenureYears} Years ({tenureYears * 12} Months)
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="25"
                  step="1"
                  value={tenureYears}
                  onChange={(e) => setTenureYears(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-medium">
                  <span>1 Year</span>
                  <span>10 Years</span>
                  <span>25 Years</span>
                </div>
              </div>
            </div>

            {/* Calculated Results Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-900/40 via-cyan-900/30 to-blue-900/40 border border-cyan-500/40 space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs text-slate-300 font-medium">Estimated Monthly EMI</span>
                <span className="text-2xl sm:text-3xl font-poppins font-black text-white tracking-tight">
                  {formatCurrency(monthlyEmi)}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-slate-400 block mb-0.5">Total Interest Payable</span>
                  <span className="text-sm font-bold text-cyan-300">{formatCurrency(totalInterest)}</span>
                </div>
                <div>
                  <span className="text-slate-400 block mb-0.5">Total Amount (Principal + Int)</span>
                  <span className="text-sm font-bold text-white">{formatCurrency(totalAmount)}</span>
                </div>
              </div>
            </div>

            {/* Apply Button CTA */}
            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <Link
                to="/contact"
                className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-sm shadow-xl shadow-cyan-500/20 text-center transition-all flex items-center justify-center gap-2"
              >
                <span>Request Sanction Call</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/financial-solutions"
                className="px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-xs border border-white/15 text-center transition-all flex items-center justify-center"
              >
                View Documentation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
