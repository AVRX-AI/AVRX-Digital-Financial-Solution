import React, { useState } from 'react';
import { FINANCIAL_SERVICES } from '../data/servicesData';
import { ServiceItem } from '../types';
import { SEO } from '../components/common/SEO';
import { DisclaimerBanner } from '../components/common/DisclaimerBanner';
import { DollarSign, Check, ArrowRight, Calculator, ShieldCheck, PhoneCall, ChevronDown } from 'lucide-react';

interface FinancialSolutionsPageProps {
  onNavigate: (page: string) => void;
}

export const FinancialSolutionsPage: React.FC<FinancialSolutionsPageProps> = ({ onNavigate }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(FINANCIAL_SERVICES[0]);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // EMI Calculator State
  const [loanAmount, setLoanAmount] = useState<number>(500000);
  const [interestRate, setInterestRate] = useState<number>(10.5);
  const [tenureYears, setTenureYears] = useState<number>(5);

  const calculateEmi = () => {
    const monthlyRate = interestRate / 12 / 100;
    const months = tenureYears * 12;
    const emi = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    const totalPayable = emi * months;
    const totalInterest = totalPayable - loanAmount;

    return {
      monthlyEmi: Math.round(emi),
      totalInterest: Math.round(totalInterest),
      totalPayable: Math.round(totalPayable)
    };
  };

  const emiResult = calculateEmi();

  return (
    <div className="min-h-screen bg-[#050811] text-white pt-28 pb-20">
      <SEO
        title="Financial Solutions | Personal, Business & Govt Scheme Loans | AVRX"
        description="Smarter financial solutions with AVRX. Personal loans, collateral-free business loans up to ₹1Cr, home loans, and government schemes (PMEGP/MUDRA)."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
            <DollarSign className="w-4 h-4 text-emerald-400" />
            <span>Capital & Banking Concierge</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white">
            Smarter <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Financial Solutions</span>.
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Collateral-free business capital, competitive personal loans, home financing, balance transfers, and government subsidized scheme assistance.
          </p>
        </div>

        {/* Embedded Mandatory Disclaimer */}
        <div className="mb-12">
          <DisclaimerBanner />
        </div>

        {/* EMI Calculator Tool */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 mb-16 shadow-2xl space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
            <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30">
              <Calculator className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Smart Loan EMI Calculator</h3>
              <p className="text-xs text-slate-400">Estimate your monthly installment and total payable interest</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Input Controls */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="space-y-2">
                <div className="flex justify-between text-xs sm:text-sm font-semibold">
                  <span className="text-slate-300">Loan Amount:</span>
                  <span className="text-emerald-400 font-mono text-base">₹{loanAmount.toLocaleString('en-IN')}</span>
                </div>
                <input
                  type="range"
                  min={50000}
                  max={10000000}
                  step={50000}
                  value={loanAmount}
                  onChange={e => setLoanAmount(Number(e.target.value))}
                  className="w-full accent-emerald-400 bg-slate-950 rounded-lg cursor-pointer h-2"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs sm:text-sm font-semibold">
                  <span className="text-slate-300">Interest Rate (% p.a.):</span>
                  <span className="text-emerald-400 font-mono text-base">{interestRate}%</span>
                </div>
                <input
                  type="range"
                  min={7}
                  max={24}
                  step={0.25}
                  value={interestRate}
                  onChange={e => setInterestRate(Number(e.target.value))}
                  className="w-full accent-emerald-400 bg-slate-950 rounded-lg cursor-pointer h-2"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs sm:text-sm font-semibold">
                  <span className="text-slate-300">Loan Tenure:</span>
                  <span className="text-emerald-400 font-mono text-base">{tenureYears} Years ({tenureYears * 12} Months)</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={30}
                  step={1}
                  value={tenureYears}
                  onChange={e => setTenureYears(Number(e.target.value))}
                  className="w-full accent-emerald-400 bg-slate-950 rounded-lg cursor-pointer h-2"
                />
              </div>

            </div>

            {/* Calculated Results Box */}
            <div className="lg:col-span-5 bg-slate-950 border border-slate-800 rounded-2xl p-6 text-center space-y-4">
              <div className="text-xs font-mono uppercase text-slate-400">Estimated Monthly EMI</div>
              <div className="text-3xl sm:text-4xl font-black text-emerald-400 font-mono">
                ₹{emiResult.monthlyEmi.toLocaleString('en-IN')} <span className="text-xs text-slate-400 font-normal">/ mo</span>
              </div>

              <div className="pt-4 border-t border-slate-800 grid grid-cols-2 gap-2 text-xs">
                <div>
                  <div className="text-slate-400">Total Interest:</div>
                  <div className="font-bold text-slate-200 font-mono mt-0.5">₹{emiResult.totalInterest.toLocaleString('en-IN')}</div>
                </div>
                <div>
                  <div className="text-slate-400">Total Amount:</div>
                  <div className="font-bold text-slate-200 font-mono mt-0.5">₹{emiResult.totalPayable.toLocaleString('en-IN')}</div>
                </div>
              </div>

              <button
                onClick={() => onNavigate('contact')}
                className="w-full py-3 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs rounded-xl transition"
              >
                Apply for Loan with This EMI
              </button>
            </div>

          </div>
        </div>

        {/* Services List & Detail View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          
          {/* Left Service Selector */}
          <div className="lg:col-span-4 space-y-2 sticky top-28">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 px-3 mb-2">
              Select Financial Product
            </h3>
            {FINANCIAL_SERVICES.map(svc => (
              <button
                key={svc.id}
                onClick={() => {
                  setSelectedService(svc);
                  setActiveFaq(null);
                }}
                className={`w-full text-left p-4 rounded-2xl border transition flex items-center justify-between ${
                  selectedService?.id === svc.id
                    ? 'bg-emerald-500/15 border-emerald-400 text-white shadow-[0_0_20px_rgba(16,185,129,0.2)] font-bold'
                    : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:bg-slate-800/80'
                }`}
              >
                <div>
                  <div className="text-sm">{svc.title}</div>
                  <div className="text-[11px] text-slate-400 font-normal line-clamp-1 mt-0.5">{svc.priceStarting}</div>
                </div>
                <ArrowRight className={`w-4 h-4 ${selectedService?.id === svc.id ? 'text-emerald-400' : 'text-slate-600'}`} />
              </button>
            ))}
          </div>

          {/* Right Service Details */}
          {selectedService && (
            <div className="lg:col-span-8 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-8 shadow-2xl backdrop-blur-xl">
              
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
                <div>
                  <div className="flex items-center gap-3">
                    <h2 className="text-2xl sm:text-3xl font-black text-white">{selectedService.title}</h2>
                    {selectedService.badge && (
                      <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-bold">
                        {selectedService.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-slate-300 text-sm mt-2 leading-relaxed">{selectedService.fullDesc}</p>
                </div>

                <div className="text-right">
                  <div className="text-xs text-slate-400 font-mono uppercase">Indicative Rates</div>
                  <div className="text-2xl font-black text-emerald-400">{selectedService.priceStarting}</div>
                </div>
              </div>

              {/* Key Features */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Loan Highlights & Features</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedService.features.map((feat, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Key Advantages</h4>
                <div className="space-y-2">
                  {selectedService.benefits.map((ben, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/20 text-xs text-emerald-200 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{ben}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service FAQs */}
              {selectedService.faqs && (
                <div className="space-y-3 pt-4 border-t border-slate-800">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Product FAQs</h4>
                  <div className="space-y-2">
                    {selectedService.faqs.map((faq, idx) => (
                      <div key={idx} className="border border-slate-800 rounded-2xl overflow-hidden bg-slate-950">
                        <button
                          onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                          className="w-full p-4 text-left font-semibold text-xs sm:text-sm text-slate-200 flex items-center justify-between"
                        >
                          <span>{faq.question}</span>
                          <ChevronDown className={`w-4 h-4 text-emerald-400 transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`} />
                        </button>
                        {activeFaq === idx && (
                          <div className="px-4 pb-4 text-xs text-slate-400 border-t border-slate-800/60 pt-3">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 text-slate-950 font-bold text-sm rounded-2xl shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:scale-105 transition flex items-center justify-center gap-2"
                >
                  <span>Apply for {selectedService.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full sm:w-auto px-6 py-4 bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-300 text-xs font-semibold rounded-2xl transition flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-emerald-400" />
                  <span>Talk to Loan Concierge</span>
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
};
