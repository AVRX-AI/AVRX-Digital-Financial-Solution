import React, { useState } from 'react';
import { FileText, CheckCircle2, ArrowRight, DollarSign } from 'lucide-react';

export const AIGSTTaxCalculator: React.FC<{ onOpenConsultation: () => void }> = ({ onOpenConsultation }) => {
  const [turnover, setTurnover] = useState(3500000);
  const [businessType, setBusinessType] = useState('Service / IT / Consulting Agency');
  const [expenses, setExpenses] = useState(1200000);

  // Simple calculation for GST & ITR estimates
  const gstRate = 0.18;
  const estimatedGstPayable = Math.round((turnover * 0.6) * gstRate);
  const estimatedItcBenefit = Math.round(expenses * 0.18);
  const netGstLiability = Math.max(0, estimatedGstPayable - estimatedItcBenefit);

  // New vs Old regime business tax estimation
  const netProfit = Math.max(0, turnover - expenses);
  const estimatedIncomeTax = Math.round(netProfit > 1200000 ? netProfit * 0.25 : netProfit * 0.15);

  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xl">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
          <FileText className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">6. AI GST & Income Tax Saving Calculator</h3>
          <p className="text-xs text-white/70">Estimate annual GST liability, Input Tax Credit (ITC) savings & ITR corporate tax</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-xs font-semibold text-white/80 mb-1.5">
            Annual Turnover: ₹{turnover.toLocaleString('en-IN')}
          </label>
          <input
            type="range"
            min="500000"
            max="20000000"
            step="100000"
            value={turnover}
            onChange={(e) => setTurnover(Number(e.target.value))}
            className="w-full accent-blue-400 cursor-pointer"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-white/80 mb-1.5">Business Sector</label>
          <select
            value={businessType}
            onChange={(e) => setBusinessType(e.target.value)}
            className="w-full px-3 py-2 rounded-xl bg-[#081B33] border border-white/20 text-white text-xs focus:outline-none focus:border-blue-400"
          >
            <option>Service / IT / Consulting Agency</option>
            <option>E-Commerce / Retail Store</option>
            <option>Manufacturing / Trader</option>
            <option>Freelancer / Professional</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-white/80 mb-1.5">
            Annual Expenses: ₹{expenses.toLocaleString('en-IN')}
          </label>
          <input
            type="range"
            min="100000"
            max="15000000"
            step="100000"
            value={expenses}
            onChange={(e) => setExpenses(Number(e.target.value))}
            className="w-full accent-purple-400 cursor-pointer"
          />
        </div>
      </div>

      {/* Result breakdown card */}
      <div className="p-6 rounded-2xl bg-gradient-to-br from-[#081B33] to-[#161B40] border border-blue-400/40 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
            <div className="text-[11px] font-semibold text-white/60">ESTIMATED ITC (GST SAVED)</div>
            <div className="text-lg font-black text-emerald-400">₹{estimatedItcBenefit.toLocaleString('en-IN')}</div>
            <div className="text-[10px] text-white/50 mt-0.5">Via GSTR-2B purchase invoice matching</div>
          </div>

          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
            <div className="text-[11px] font-semibold text-white/60">NET GST PAYABLE (EST.)</div>
            <div className="text-lg font-black text-cyan-300">₹{netGstLiability.toLocaleString('en-IN')}</div>
            <div className="text-[10px] text-white/50 mt-0.5">After full ITC reconciliation</div>
          </div>

          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
            <div className="text-[11px] font-semibold text-white/60">EST. INCOME TAX (NEW REGIME)</div>
            <div className="text-lg font-black text-purple-300">₹{estimatedIncomeTax.toLocaleString('en-IN')}</div>
            <div className="text-[10px] text-white/50 mt-0.5">With legitimate business deductions</div>
          </div>
        </div>

        <div className="space-y-2 pt-1">
          <span className="text-xs font-semibold text-white/80">AVRX Tax Compliance Recommendations:</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className="flex items-center space-x-2 text-xs text-white/80">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>File monthly GSTR-1 & GSTR-3B on time to avoid ₹200/day penalties</span>
            </div>
            <div className="flex items-center space-x-2 text-xs text-white/80">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Reconcile Form 26AS & AIS/TIS before filing corporate ITR</span>
            </div>
          </div>
        </div>

        <div className="pt-2 flex items-center justify-end">
          <button
            onClick={onOpenConsultation}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-xs flex items-center space-x-2 shadow-lg shadow-blue-500/30 hover:scale-105 transition-all"
          >
            <span>Consult AVRX Chartered Accountants</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
