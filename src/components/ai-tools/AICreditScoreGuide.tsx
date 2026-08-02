import React, { useState } from 'react';
import { BarChart2, CheckCircle2, AlertTriangle, TrendingUp, CreditCard, ArrowRight } from 'lucide-react';

export const AICreditScoreGuide: React.FC<{ onOpenConsultation: () => void }> = ({ onOpenConsultation }) => {
  const [score, setScore] = useState(740);

  const getAssessment = (cibil: number) => {
    if (cibil >= 750) {
      return {
        label: 'Excellent / Top Tier',
        color: 'text-emerald-400',
        bg: 'bg-emerald-500/20 border-emerald-400/40',
        loanChance: '98% Instant Approval',
        interestDiscount: 'Maximum 1.5% Interest Rate Discount on Home & Personal Loans',
        cardSuggest: 'Eligible for Premium Lifetime-Free Travel & Lounge Credit Cards (SBI Card Elite, HDFC Regalia)',
        tips: [
          'Maintain your credit card utilization below 25%',
          'Avoid applying for unnecessary personal loans within short intervals',
          'Continue auto-debit payments for all existing EMIs'
        ]
      };
    } else if (cibil >= 700) {
      return {
        label: 'Good / Satisfactory',
        color: 'text-cyan-400',
        bg: 'bg-cyan-500/20 border-cyan-400/40',
        loanChance: '85% Approval Probability',
        interestDiscount: 'Standard Interest Rates (No risk premium added)',
        cardSuggest: 'Eligible for Rewards & Cashback Credit Cards (ICICI Amazon Pay, Axis Ace)',
        tips: [
          'Pay off any credit card balance that exceeds 35% of your limit',
          'Do not close old credit card accounts (history length increases score)',
          'Check your Experian/CIBIL report for any minor reporting delay errors'
        ]
      };
    } else {
      return {
        label: 'Needs Immediate Improvement',
        color: 'text-amber-400',
        bg: 'bg-amber-500/20 border-amber-400/40',
        loanChance: '50% (High risk of rejection without AVRX guidance)',
        interestDiscount: 'Lenders may charge 2% to 4% higher interest rates',
        cardSuggest: 'Recommend Secured Fixed-Deposit (FD) Backed Credit Cards to Rebuild Score',
        tips: [
          'Set up automated NACH debit so you never miss a 30-day EMI cycle',
          'Consolidate multiple small high-interest loans into one structured loan',
          'Use AVRX Credit Repair Advisory to dispute any incorrect default remarks'
        ]
      };
    }
  };

  const info = getAssessment(score);

  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xl">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-amber-500/30">
          <BarChart2 className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">5. AI Credit Score Guide & Simulator</h3>
          <p className="text-xs text-white/70">Simulate your CIBIL score to see loan chances, interest discounts & credit card suggestions</p>
        </div>
      </div>

      {/* Simulator Slider */}
      <div className="p-6 rounded-2xl bg-[#081B33]/80 border border-white/15 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs text-white/70 font-semibold uppercase tracking-wider">Simulated CIBIL Credit Score</span>
            <div className="text-3xl sm:text-4xl font-black text-white mt-1">{score} <span className="text-sm font-normal text-white/50">/ 900</span></div>
          </div>
          <span className={`px-3.5 py-1.5 rounded-full text-xs font-bold border ${info.bg} ${info.color}`}>
            {info.label}
          </span>
        </div>

        <input
          type="range"
          min="550"
          max="850"
          step="10"
          value={score}
          onChange={(e) => setScore(Number(e.target.value))}
          className="w-full accent-cyan-400 cursor-pointer h-2 bg-white/10 rounded-lg"
        />

        <div className="flex justify-between text-[11px] text-white/50 font-mono">
          <span>550 (Poor)</span>
          <span>650 (Fair)</span>
          <span>750 (Excellent)</span>
          <span>850 (Exceptional)</span>
        </div>
      </div>

      {/* Results grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
          <div className="text-[11px] font-semibold text-white/60">LOAN APPROVAL PROBABILITY</div>
          <div className="text-sm font-bold text-emerald-400">{info.loanChance}</div>
        </div>

        <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
          <div className="text-[11px] font-semibold text-white/60">INTEREST RATE BENEFIT</div>
          <div className="text-sm font-bold text-cyan-300">{info.interestDiscount}</div>
        </div>
      </div>

      <div className="mt-4 p-4 rounded-xl bg-purple-950/40 border border-purple-500/30 flex items-start space-x-3">
        <CreditCard className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
        <div>
          <div className="text-xs font-bold text-purple-300">Recommended Credit Card Strategy:</div>
          <div className="text-xs text-white/80 mt-0.5">{info.cardSuggest}</div>
        </div>
      </div>

      {/* Actionable improvement tips */}
      <div className="mt-6 space-y-2">
        <span className="text-xs font-semibold text-white/80">3 Proven Rules to Boost Your Score Above 750+:</span>
        <div className="space-y-2">
          {info.tips.map((tip, i) => (
            <div key={i} className="flex items-center space-x-2 text-xs text-white/80 p-2.5 rounded-lg bg-white/5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{tip}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end">
        <button
          onClick={onOpenConsultation}
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-[#0A66FF] text-white font-bold text-xs flex items-center space-x-2 shadow-lg shadow-amber-500/30 hover:scale-105 transition-all"
        >
          <span>Get Free Credit Score Audit & Loan Guidance</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
