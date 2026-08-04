import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SeoMeta from '../components/common/SeoMeta';
import PageBanner from '../components/layout/PageBanner';
import {
  IndianRupee,
  Calculator,
  ShieldCheck,
  Zap,
  CheckCircle2,
  TrendingUp,
  Clock,
  ArrowRight,
  Briefcase,
  Building2,
  FileText,
  Award
} from 'lucide-react';

export default function FinancialSolutionsPage() {
  // CRED-style EMI Calculator State
  const [loanAmount, setLoanAmount] = useState<number>(2500000); // 25 Lakhs
  const [interestRate, setInterestRate] = useState<number>(9.5); // 9.5% p.a.
  const [tenureYears, setTenureYears] = useState<number>(3); // 3 Years (36 mos)

  // EMI Formula: E = P * r * (1+r)^n / ((1+r)^n - 1)
  const monthlyRate = interestRate / 12 / 100;
  const totalMonths = tenureYears * 12;
  const emi = Math.round(
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1)
  );
  const totalPayable = emi * totalMonths;
  const totalInterest = totalPayable - loanAmount;

  const [selectedTab, setSelectedTab] = useState<'all' | 'business' | 'msme' | 'property'>('all');

  const loansList = [
    {
      id: 'unsecured-business',
      title: 'Collateral-Free Unsecured Business Loan',
      category: 'business',
      amount: '₹10 Lakhs – ₹5 Crores',
      roi: '8.9% – 14.5% p.a.',
      tenure: '12 to 60 Months',
      badge: '48 HR DISBURSAL',
      desc: 'Rapid liquidity for expansion, marketing, or inventory without pledging residential or commercial collateral. Evaluated purely on GST returns & banking cash flows.',
      eligibility: [
        'Minimum 2 years business vintage',
        'Annual turnover above ₹50 Lakhs',
        'CIBIL score 700+ for promoters'
      ]
    },
    {
      id: 'msme-udyam',
      title: 'MSME & CGTMSE Subsidized Working Capital',
      category: 'msme',
      amount: '₹25 Lakhs – ₹2 Crores',
      roi: '7.8% – 11.2% p.a.',
      tenure: '3 to 7 Years',
      badge: 'GOVT GUARANTEED',
      desc: 'Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE) scheme with up to 85% government collateral guarantee and interest subvention.',
      eligibility: [
        'Udyam / MSME Registration Certificate',
        'Profitable unit for last 2 financial years',
        'No default in existing banking limits'
      ]
    },
    {
      id: 'loan-against-property',
      title: 'Loan Against Property (LAP) & Commercial Real Estate',
      category: 'property',
      amount: '₹50 Lakhs – ₹20 Crores',
      roi: '8.5% – 10.8% p.a.',
      tenure: 'Up to 15 Years',
      badge: 'LOWEST EMI',
      desc: 'Unlock up to 75% market value of your residential, commercial, or industrial property. Ideal for high-ticket business acquisitions or debt refinancing.',
      eligibility: [
        'Clear marketable title of property',
        'ITR returns for past 3 assessment years',
        'Stable operating profit margins'
      ]
    },
    {
      id: 'overdraft-limit',
      title: 'CC / Overdraft & Invoice Discounting Limits',
      category: 'business',
      amount: '₹20 Lakhs – ₹10 Crores',
      roi: '9.0% – 12.0% p.a.',
      tenure: 'Annual Renewal',
      badge: 'PAY ONLY ON USE',
      desc: 'Flexible revolving credit limit linked to your current account or trade invoices. Pay interest only on the utilized amount on a daily balance basis.',
      eligibility: [
        'GST compliant businesses',
        'Audited balance sheet & profit/loss',
        'Satisfactory banking transaction velocity'
      ]
    }
  ];

  const filteredLoans = loansList.filter(
    (l) => selectedTab === 'all' || l.category === selectedTab
  );

  return (
    <div className="bg-[#08090C] min-h-screen">
      <SeoMeta
        title="Financial Solutions & Instant Loans up to ₹20 Crore"
        description="Access ₹10 Lakhs to ₹20 Crores in collateral-free business loans, MSME schemes, and LAP with 48-hour disbursal SLA and CRED-level transparency."
      />

      <PageBanner
        title="Instant Financial & Capital Access (₹10L to ₹20 Cr)"
        subtitle="Collateral-free business loans, CGTMSE MSME schemes, working capital limits, and lowest-ROI property mortgages backed by Tier-1 RBI Banks."
        badge="RBI PARTNER BANKS SLA"
        breadcrumbs={[{ label: 'Financial Solutions' }]}
        ctaText="Check Instant Sanction Limit"
      />

      {/* Interactive CRED-Inspired EMI Calculator Section */}
      <section className="py-20 bg-[#06070B] border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block">
              REAL-TIME AMORTIZATION ENGINE
            </span>
            <h2 className="text-3xl sm:text-4xl font-poppins font-extrabold text-white">
              CRED-Inspired Instant EMI Calculator
            </h2>
            <p className="text-sm text-slate-400">
              Calculate exact monthly outflow, total interest cost, and amortization without hidden charges.
            </p>
          </div>

          <div className="glass-card p-8 sm:p-12 rounded-3xl border border-blue-500/30 bg-gradient-to-b from-[#0B0D17] to-[#08090C] shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Sliders Area (7 Cols) */}
              <div className="lg:col-span-7 space-y-8">
                {/* Loan Amount Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm font-bold">
                    <span className="text-slate-300">Loan Principal Amount:</span>
                    <span className="text-xl font-poppins text-cyan-400">
                      ₹{(loanAmount / 100000).toFixed(1)} Lakhs
                    </span>
                  </div>
                  <input
                    type="range"
                    min="500000"
                    max="100000000"
                    step="500000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                  />
                  <div className="flex justify-between text-[11px] text-slate-500">
                    <span>₹5 Lakhs</span>
                    <span>₹5 Crores</span>
                    <span>₹10 Crores</span>
                  </div>
                </div>

                {/* Interest Rate Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm font-bold">
                    <span className="text-slate-300">Interest Rate (p.a.):</span>
                    <span className="text-xl font-poppins text-blue-400">{interestRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="7.5"
                    max="18.0"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-400"
                  />
                  <div className="flex justify-between text-[11px] text-slate-500">
                    <span>7.5% (Subsidized)</span>
                    <span>12.5% (Standard)</span>
                    <span>18.0% (Unsecured)</span>
                  </div>
                </div>

                {/* Tenure Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm font-bold">
                    <span className="text-slate-300">Repayment Tenure:</span>
                    <span className="text-xl font-poppins text-purple-400">{tenureYears} Years</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="15"
                    step="1"
                    value={tenureYears}
                    onChange={(e) => setTenureYears(Number(e.target.value))}
                    className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-400"
                  />
                  <div className="flex justify-between text-[11px] text-slate-500">
                    <span>1 Year</span>
                    <span>7 Years</span>
                    <span>15 Years (LAP)</span>
                  </div>
                </div>
              </div>

              {/* Summary Dashboard Card (5 Cols) */}
              <div className="lg:col-span-5">
                <div className="p-8 rounded-3xl bg-[#0F121F] border border-cyan-500/30 space-y-6 relative overflow-hidden">
                  <div className="text-center space-y-1 border-b border-white/10 pb-6">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
                      Your Monthly Installment
                    </span>
                    <div className="text-4xl sm:text-5xl font-poppins font-black text-white">
                      ₹{emi.toLocaleString('en-IN')}
                    </div>
                    <p className="text-xs text-cyan-400 font-semibold">
                      Fixed monthly outflow • Zero prepayment penalty
                    </p>
                  </div>

                  <div className="space-y-3 text-xs text-slate-300">
                    <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                      <span>Total Principal Borrowed:</span>
                      <span className="text-white font-bold">₹{loanAmount.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                      <span>Total Interest Payable:</span>
                      <span className="text-cyan-400 font-bold">₹{totalInterest.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex items-center justify-between py-1.5">
                      <span>Total Repayment Amount:</span>
                      <span className="text-white font-black text-sm">₹{totalPayable.toLocaleString('en-IN')}</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link
                      to="/contact"
                      className="block w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs text-center shadow-xl shadow-cyan-500/20 transition-all"
                    >
                      Apply for Instant In-Principle Sanction
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Loan Schemes Matrix */}
      <section className="py-20 bg-[#08090C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12">
            <div>
              <h3 className="text-2xl sm:text-3xl font-poppins font-bold text-white">
                12+ RBI & Bank Partner Loan Schemes
              </h3>
              <p className="text-sm text-slate-400">
                Choose the right capital facility for your corporate growth.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-2">
              {[
                { id: 'all', label: 'All Schemes' },
                { id: 'business', label: 'Unsecured Business' },
                { id: 'msme', label: 'MSME Govt Subsidized' },
                { id: 'property', label: 'Property Mortgages' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedTab(tab.id as any)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                    selectedTab === tab.id
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                      : 'bg-white/5 text-slate-400 hover:text-white border border-white/10'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredLoans.map((loan) => (
              <div
                key={loan.id}
                className="glass-card p-8 rounded-3xl border border-white/10 hover:border-cyan-500/40 bg-[#0C0F1A]/90 hover:bg-[#0F1221] transition-all duration-300 space-y-6"
              >
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 text-xs font-bold tracking-wider">
                    {loan.badge}
                  </span>
                  <span className="text-xs text-slate-400">Tenure: {loan.tenure}</span>
                </div>

                <div>
                  <h4 className="text-xl font-poppins font-bold text-white mb-2">
                    {loan.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {loan.desc}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-black/40 border border-white/10">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase block">Sanction Limit</span>
                    <span className="text-base font-poppins font-black text-white">{loan.amount}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase block">Interest ROI</span>
                    <span className="text-base font-poppins font-black text-cyan-400">{loan.roi}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-bold text-white uppercase tracking-wider block">
                    Key Eligibility Parameters:
                  </span>
                  <div className="space-y-1.5">
                    {loan.eligibility.map((req, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                        <span>{req}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    to="/contact"
                    className="block w-full py-3.5 rounded-xl bg-white/10 hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-500 text-white text-center font-bold text-xs transition-all"
                  >
                    Apply Now & Check CIBIL Eligibility
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
