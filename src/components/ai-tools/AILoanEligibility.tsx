import React, { useState } from 'react';
import { CreditCard, Sparkles, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import { LoanEligibilityResult } from '../../types';

export const AILoanEligibility: React.FC<{ onOpenConsultation: () => void }> = ({ onOpenConsultation }) => {
  const [income, setIncome] = useState(65000);
  const [age, setAge] = useState(32);
  const [employment, setEmployment] = useState('Salaried');
  const [loanAmount, setLoanAmount] = useState(1500000);
  const [tenureYears, setTenureYears] = useState(5);
  const [result, setResult] = useState<LoanEligibilityResult | null>(null);

  const calculateEligibility = (e: React.FormEvent) => {
    e.preventDefault();
    const annualIncome = income * 12;
    const maxEligible = Math.round(income * 28);
    const rate = employment === 'Salaried' ? 10.5 : 11.25;
    const monthlyRate = rate / 12 / 100;
    const n = tenureYears * 12;
    
    // EMI formula: P * r * (1+r)^n / ((1+r)^n - 1)
    const emi = Math.round((loanAmount * monthlyRate * Math.pow(1 + monthlyRate, n)) / (Math.pow(1 + monthlyRate, n) - 1));
    const emiRatio = emi / income;

    let chance: 'High' | 'Moderate' | 'Needs Improvement' = 'High';
    if (emiRatio > 0.6 || loanAmount > maxEligible) {
      chance = 'Needs Improvement';
    } else if (emiRatio > 0.45) {
      chance = 'Moderate';
    }

    setResult({
      eligible: loanAmount <= maxEligible,
      maxLoanAmount: maxEligible,
      estimatedEmi: emi,
      interestRateRange: employment === 'Salaried' ? '10.50% - 11.50% p.a.' : '11.25% - 13.50% p.a.',
      approvalChance: chance,
      recommendations: [
        `Maximum eligible loan limit based on ₹${income.toLocaleString('en-IN')}/mo income is ₹${maxEligible.toLocaleString('en-IN')}`,
        `Your monthly EMI will be approximately ₹${emi.toLocaleString('en-IN')} for ${tenureYears} years`,
        `Maintain a CIBIL score of 750+ to qualify for the lowest interest rate bracket of ${employment === 'Salaried' ? '10.50%' : '11.25%'}`,
        'AVRX financial consultants can coordinate directly with SBI, HDFC & ICICI for paperless sanction'
      ]
    });
  };

  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xl">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-purple-500/30">
          <CreditCard className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">3. AI Loan Eligibility Checker</h3>
          <p className="text-xs text-white/70">Check Personal, Business & MSME loan sanction chance instantly</p>
        </div>
      </div>

      <form onSubmit={calculateEligibility} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <div>
          <label className="block text-xs font-semibold text-white/80 mb-1.5">Monthly Income: ₹{income.toLocaleString('en-IN')}</label>
          <input
            type="range"
            min="20000"
            max="300000"
            step="5000"
            value={income}
            onChange={(e) => setIncome(Number(e.target.value))}
            className="w-full accent-cyan-400 cursor-pointer"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-white/80 mb-1.5">Age: {age} Years</label>
          <input
            type="range"
            min="21"
            max="65"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            className="w-full accent-cyan-400 cursor-pointer"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-white/80 mb-1.5">Employment Type</label>
          <select
            value={employment}
            onChange={(e) => setEmployment(e.target.value)}
            className="w-full px-3 py-2 rounded-xl bg-[#081B33] border border-white/20 text-white text-xs focus:outline-none focus:border-cyan-400"
          >
            <option value="Salaried">Salaried Employee</option>
            <option value="Self-Employed">Self-Employed / Business Owner</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-white/80 mb-1.5">Desired Loan Amount</label>
          <select
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
            className="w-full px-3 py-2 rounded-xl bg-[#081B33] border border-white/20 text-white text-xs focus:outline-none focus:border-cyan-400"
          >
            <option value="300000">₹3,00,000</option>
            <option value="500000">₹5,00,000</option>
            <option value="1000000">₹10,00,000</option>
            <option value="1500000">₹15,00,000</option>
            <option value="2500000">₹25,00,000</option>
            <option value="5000000">₹50,00,000</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-white/80 mb-1.5">Tenure: {tenureYears} Years</label>
          <select
            value={tenureYears}
            onChange={(e) => setTenureYears(Number(e.target.value))}
            className="w-full px-3 py-2 rounded-xl bg-[#081B33] border border-white/20 text-white text-xs focus:outline-none focus:border-cyan-400"
          >
            <option value="2">2 Years</option>
            <option value="3">3 Years</option>
            <option value="5">5 Years</option>
            <option value="7">7 Years</option>
          </select>
        </div>

        <div className="sm:col-span-2 lg:col-span-5 pt-2">
          <button
            type="submit"
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-[#0A66FF] hover:from-purple-700 hover:to-blue-700 text-white font-bold text-sm shadow-lg shadow-purple-500/30 transition-all flex items-center justify-center space-x-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>Check My Loan Eligibility & Monthly EMI</span>
          </button>
        </div>
      </form>

      {result && (
        <div className="mt-6 p-6 rounded-2xl bg-gradient-to-br from-[#081B33] to-[#141238] border border-purple-500/40 space-y-4 animate-fadeIn">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
            <div>
              <span className="text-xs font-bold text-purple-300 uppercase tracking-widest">Eligibility Assessment</span>
              <div className="flex items-center space-x-2 mt-1">
                <span className={`text-xl font-black ${result.eligible ? 'text-emerald-400' : 'text-amber-400'}`}>
                  {result.eligible ? '✅ Eligible for Instant Approval' : '⚠️ Loan Modification Recommended'}
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-xs text-white/60">Approval Probability:</span>
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                result.approvalChance === 'High' 
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/40' 
                  : result.approvalChance === 'Moderate' 
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-400/40' 
                  : 'bg-rose-500/20 text-rose-300 border border-rose-400/40'
              }`}>
                {result.approvalChance}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
              <div className="text-[11px] font-semibold text-white/60">ESTIMATED MONTHLY EMI</div>
              <div className="text-lg font-black text-white mt-1">₹{result.estimatedEmi.toLocaleString('en-IN')}</div>
            </div>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
              <div className="text-[11px] font-semibold text-white/60">MAX ELIGIBLE LOAN LIMIT</div>
              <div className="text-lg font-black text-cyan-400">₹{result.maxLoanAmount.toLocaleString('en-IN')}</div>
            </div>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
              <div className="text-[11px] font-semibold text-white/60">ESTIMATED INTEREST RATE</div>
              <div className="text-lg font-black text-purple-300">{result.interestRateRange}</div>
            </div>
          </div>

          <div className="space-y-2 pt-1">
            <span className="text-xs font-semibold text-white/80">AI Credit & Loan Insights:</span>
            <div className="space-y-1.5">
              {result.recommendations.map((rec, i) => (
                <div key={i} className="flex items-center space-x-2 text-xs text-white/80">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{rec}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2 flex items-center justify-end">
            <button
              onClick={onOpenConsultation}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-[#0A66FF] text-white font-bold text-xs flex items-center space-x-2 shadow-lg shadow-purple-500/30 hover:scale-105 transition-all"
            >
              <span>Apply Now with AVRX Assistance</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
