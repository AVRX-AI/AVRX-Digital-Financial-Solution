import React, { useState, useMemo } from 'react';
import {
  Calculator,
  DollarSign,
  PieChart,
  Calendar,
  Percent,
  Download,
  Info,
  ChevronDown,
  ChevronUp,
  FileText
} from 'lucide-react';

export default function EmiCalculator() {
  const [loanAmount, setLoanAmount] = useState<number>(1500000); // ₹15 Lakhs
  const [interestRate, setInterestRate] = useState<number>(9.5); // 9.5% p.a.
  const [tenureYears, setTenureYears] = useState<number>(5); // 5 Years
  const [showSchedule, setShowSchedule] = useState<boolean>(false);

  // EMI Calculation Formula: E = P * r * (1+r)^n / ((1+r)^n - 1)
  const calculations = useMemo(() => {
    const P = loanAmount;
    const r = interestRate / 12 / 100; // Monthly rate
    const n = tenureYears * 12; // Total months

    if (P <= 0 || r <= 0 || n <= 0) {
      return { emi: 0, totalInterest: 0, totalPayment: 0, interestPercentage: 0 };
    }

    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPayment = emi * n;
    const totalInterest = totalPayment - P;
    const interestPercentage = (totalInterest / totalPayment) * 100;

    // Amortization Schedule (Yearly)
    let balance = P;
    const schedule = [];
    for (let year = 1; year <= tenureYears; year++) {
      let yearlyInterest = 0;
      let yearlyPrincipal = 0;
      for (let month = 1; month <= 12; month++) {
        const mInterest = balance * r;
        const mPrincipal = emi - mInterest;
        yearlyInterest += mInterest;
        yearlyPrincipal += mPrincipal;
        balance -= mPrincipal;
      }
      schedule.push({
        year,
        principalPaid: yearlyPrincipal,
        interestPaid: yearlyInterest,
        totalPaid: yearlyPrincipal + yearlyInterest,
        closingBalance: Math.max(0, balance)
      });
    }

    return {
      emi: Math.round(emi),
      totalInterest: Math.round(totalInterest),
      totalPayment: Math.round(totalPayment),
      interestPercentage: Math.round(interestPercentage),
      schedule
    };
  }, [loanAmount, interestRate, tenureYears]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const downloadAmortization = () => {
    let csvContent = "data:text/csv;charset=utf-8,Year,Principal Paid (INR),Interest Paid (INR),Total Payment (INR),Balance (INR)\n";
    calculations.schedule.forEach(row => {
      csvContent += `${row.year},${Math.round(row.principalPaid)},${Math.round(row.interestPaid)},${Math.round(row.totalPaid)},${Math.round(row.closingBalance)}\n`;
    });
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `AVRX_EMI_Schedule_${loanAmount}_INR.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="glass-card rounded-3xl border border-cyan-500/30 bg-[#080B14] p-6 sm:p-8 space-y-8 shadow-2xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20">
            <Calculator className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-poppins font-bold text-white">Smart 3D EMI Calculator</h3>
              <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-[10px] font-bold">
                FINANCIAL TOOL
              </span>
            </div>
            <p className="text-xs text-slate-400">Financial slider tool with loan tenure & interest breakdown</p>
          </div>
        </div>

        <button
          onClick={downloadAmortization}
          className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-cyan-500 text-white text-xs font-bold flex items-center gap-2 transition-all self-start sm:self-auto"
        >
          <Download className="w-4 h-4" /> Download Schedule
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Sliders Panel */}
        <div className="lg:col-span-7 space-y-6">
          {/* Slider 1: Loan Amount */}
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-slate-300 flex items-center gap-1.5">
                <DollarSign className="w-4 h-4 text-cyan-400" /> Loan Amount Required
              </span>
              <span className="font-poppins font-bold text-cyan-400 text-sm">{formatCurrency(loanAmount)}</span>
            </div>
            <input
              type="range"
              min={50000}
              max={10000000}
              step={25000}
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-full accent-cyan-400 bg-white/10 rounded-lg cursor-pointer h-2"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>₹50,000</span>
              <span>₹50 Lakhs</span>
              <span>₹1 Crore</span>
            </div>
          </div>

          {/* Slider 2: Interest Rate */}
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-slate-300 flex items-center gap-1.5">
                <Percent className="w-4 h-4 text-cyan-400" /> Interest Rate (% p.a.)
              </span>
              <span className="font-poppins font-bold text-cyan-400 text-sm">{interestRate}%</span>
            </div>
            <input
              type="range"
              min={6}
              max={24}
              step={0.25}
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full accent-cyan-400 bg-white/10 rounded-lg cursor-pointer h-2"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>6% (Home Loan)</span>
              <span>12% (Business)</span>
              <span>24% (Personal)</span>
            </div>
          </div>

          {/* Slider 3: Loan Tenure */}
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-slate-300 flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-cyan-400" /> Loan Tenure (Years)
              </span>
              <span className="font-poppins font-bold text-cyan-400 text-sm">{tenureYears} Years ({tenureYears * 12} Months)</span>
            </div>
            <input
              type="range"
              min={1}
              max={30}
              step={1}
              value={tenureYears}
              onChange={(e) => setTenureYears(Number(e.target.value))}
              className="w-full accent-cyan-400 bg-white/10 rounded-lg cursor-pointer h-2"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>1 Year</span>
              <span>15 Years</span>
              <span>30 Years</span>
            </div>
          </div>
        </div>

        {/* Results Card with Donut Chart */}
        <div className="lg:col-span-5 p-6 rounded-3xl bg-gradient-to-b from-[#0B0F1E] to-[#070A12] border border-cyan-500/40 shadow-2xl space-y-6 flex flex-col justify-between">
          <div className="text-center space-y-1">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Monthly EMI Payment</span>
            <div className="text-3xl sm:text-4xl font-poppins font-black text-cyan-400">
              {formatCurrency(calculations.emi)} <span className="text-xs text-slate-400 font-normal">/ mo</span>
            </div>
          </div>

          {/* Donut Chart Breakdown */}
          <div className="flex items-center justify-center relative py-4">
            <svg className="w-44 h-44 transform -rotate-90">
              <circle
                cx="88"
                cy="88"
                r="70"
                stroke="currentColor"
                strokeWidth="20"
                className="text-cyan-500/20"
                fill="transparent"
              />
              <circle
                cx="88"
                cy="88"
                r="70"
                stroke="currentColor"
                strokeWidth="20"
                className="text-cyan-400"
                fill="transparent"
                strokeDasharray={440}
                strokeDashoffset={440 - (440 * (100 - calculations.interestPercentage)) / 100}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute text-center">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Principal Share</span>
              <span className="text-lg font-bold text-white">{100 - calculations.interestPercentage}%</span>
            </div>
          </div>

          <div className="space-y-3 pt-4 border-t border-white/10 text-xs">
            <div className="flex justify-between items-center text-slate-300">
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-cyan-400 inline-block" /> Principal Loan Amount:
              </span>
              <span className="font-bold text-white">{formatCurrency(loanAmount)}</span>
            </div>
            <div className="flex justify-between items-center text-slate-300">
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-cyan-500/30 inline-block" /> Total Interest Payable:
              </span>
              <span className="font-bold text-amber-400">{formatCurrency(calculations.totalInterest)}</span>
            </div>
            <div className="flex justify-between items-center text-slate-200 font-bold pt-2 border-t border-white/10">
              <span>Total Payable Amount:</span>
              <span className="text-sm text-cyan-300">{formatCurrency(calculations.totalPayment)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Toggle Amortization Schedule */}
      <div className="pt-4 border-t border-white/10">
        <button
          onClick={() => setShowSchedule(!showSchedule)}
          className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold text-xs flex items-center justify-center gap-2 border border-white/10"
        >
          <FileText className="w-4 h-4 text-cyan-400" />
          <span>{showSchedule ? 'Hide Yearly Repayment Breakdown' : 'View Yearly Amortization Schedule'}</span>
          {showSchedule ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        {showSchedule && (
          <div className="mt-4 p-4 rounded-2xl bg-black/60 border border-white/10 overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-300">
              <thead>
                <tr className="border-b border-white/10 text-slate-400 font-bold uppercase text-[10px]">
                  <th className="py-2.5 px-3">Year</th>
                  <th className="py-2.5 px-3">Principal Paid</th>
                  <th className="py-2.5 px-3">Interest Paid</th>
                  <th className="py-2.5 px-3">Total Payment</th>
                  <th className="py-2.5 px-3">Closing Balance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-mono">
                {calculations.schedule.map((row) => (
                  <tr key={row.year} className="hover:bg-white/5">
                    <td className="py-2.5 px-3 font-bold text-white">Year {row.year}</td>
                    <td className="py-2.5 px-3 text-cyan-400">{formatCurrency(row.principalPaid)}</td>
                    <td className="py-2.5 px-3 text-amber-400">{formatCurrency(row.interestPaid)}</td>
                    <td className="py-2.5 px-3">{formatCurrency(row.totalPaid)}</td>
                    <td className="py-2.5 px-3 text-slate-400">{formatCurrency(row.closingBalance)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
