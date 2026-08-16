import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  Download, 
  Printer, 
  PieChart, 
  Calendar, 
  IndianRupee, 
  CheckCircle2, 
  TrendingUp, 
  ChevronRight,
  Info
} from 'lucide-react';

interface AmortizationRow {
  period: number;
  year: number;
  month: number;
  openingBalance: number;
  emi: number;
  principal: number;
  interest: number;
  closingBalance: number;
}

export const LoanEmiCalculatorTool: React.FC = () => {
  const [principal, setPrincipal] = useState<number>(1000000); // 10 Lakhs default
  const [interestRate, setInterestRate] = useState<number>(9.5); // 9.5% p.a.
  const [tenureYears, setTenureYears] = useState<number>(5); // 5 years
  const [tenureUnit, setTenureUnit] = useState<'years' | 'months'>('years');
  const [scheduleView, setScheduleView] = useState<'yearly' | 'monthly'>('yearly');

  const {
    monthlyEmi,
    totalInterest,
    totalPayment,
    principalPercent,
    interestPercent,
    monthlySchedule,
    yearlySchedule
  } = useMemo(() => {
    const totalMonths = tenureUnit === 'years' ? tenureYears * 12 : tenureYears;
    const r = interestRate / 12 / 100;
    const n = Math.max(1, totalMonths);
    const P = Math.max(1000, principal);

    let emi = 0;
    if (r === 0) {
      emi = P / n;
    } else {
      emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    }

    const totalPay = emi * n;
    const totalInt = totalPay - P;

    const pPct = Math.round((P / totalPay) * 100);
    const iPct = 100 - pPct;

    // Build monthly amortization
    const mRows: AmortizationRow[] = [];
    let currentBalance = P;

    for (let m = 1; m <= n; m++) {
      const monthInterest = currentBalance * r;
      const monthPrincipal = Math.min(currentBalance, emi - monthInterest);
      const closeBal = Math.max(0, currentBalance - monthPrincipal);

      mRows.push({
        period: m,
        year: Math.ceil(m / 12),
        month: ((m - 1) % 12) + 1,
        openingBalance: Math.round(currentBalance),
        emi: Math.round(emi),
        principal: Math.round(monthPrincipal),
        interest: Math.round(monthInterest),
        closingBalance: Math.round(closeBal)
      });

      currentBalance = closeBal;
    }

    // Aggregate into yearly amortization
    const yRows: { year: number; openingBalance: number; emi: number; principal: number; interest: number; closingBalance: number }[] = [];
    const totalYears = Math.ceil(n / 12);

    for (let y = 1; y <= totalYears; y++) {
      const yearMonths = mRows.filter(row => row.year === y);
      if (yearMonths.length > 0) {
        const openBal = yearMonths[0].openingBalance;
        const closeBal = yearMonths[yearMonths.length - 1].closingBalance;
        const sumEmi = yearMonths.reduce((acc, r) => acc + r.emi, 0);
        const sumPrincipal = yearMonths.reduce((acc, r) => acc + r.principal, 0);
        const sumInterest = yearMonths.reduce((acc, r) => acc + r.interest, 0);

        yRows.push({
          year: y,
          openingBalance: openBal,
          emi: sumEmi,
          principal: sumPrincipal,
          interest: sumInterest,
          closingBalance: closeBal
        });
      }
    }

    return {
      monthlyEmi: Math.round(emi),
      totalInterest: Math.round(totalInt),
      totalPayment: Math.round(totalPay),
      principalPercent: pPct,
      interestPercent: iPct,
      monthlySchedule: mRows,
      yearlySchedule: yRows
    };
  }, [principal, interestRate, tenureYears, tenureUnit]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  const handleExportCsv = () => {
    let csvContent = 'data:text/csv;charset=utf-8,';
    csvContent += 'Period,Opening Balance (INR),EMI (INR),Principal (INR),Interest (INR),Closing Balance (INR)\n';

    const rows = scheduleView === 'yearly' ? yearlySchedule : monthlySchedule;
    rows.forEach((r: any) => {
      const label = scheduleView === 'yearly' ? `Year ${r.year}` : `Month ${r.period}`;
      csvContent += `${label},${r.openingBalance},${r.emi},${r.principal},${r.interest},${r.closingBalance}\n`;
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `Loan_Amortization_Schedule_AVRX.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-8">
      
      {/* Top Input Sliders & Visual Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Form: Sliders & Numeric Inputs */}
        <div className="lg:col-span-7 space-y-6 bg-slate-950/60 p-5 sm:p-7 rounded-2xl border border-slate-800">
          
          {/* 1. Loan Amount */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <label className="font-semibold text-slate-300 flex items-center gap-1.5">
                <IndianRupee className="w-4 h-4 text-cyan-400" />
                <span>Loan Amount</span>
              </label>
              <div className="flex items-center gap-1 px-3 py-1 rounded-lg bg-slate-900 border border-slate-700">
                <span className="text-slate-400 text-xs">₹</span>
                <input
                  type="number"
                  value={principal}
                  onChange={(e) => setPrincipal(Math.max(1000, Number(e.target.value)))}
                  className="w-28 bg-transparent text-right font-mono font-bold text-white focus:outline-none text-sm"
                />
              </div>
            </div>

            <input
              type="range"
              min="50000"
              max="20000000"
              step="50000"
              value={principal}
              onChange={(e) => setPrincipal(Number(e.target.value))}
              className="w-full accent-cyan-400"
            />
            <div className="flex justify-between text-[11px] text-slate-500 font-mono">
              <span>₹50 K</span>
              <span>₹50 L</span>
              <span>₹1 Cr</span>
              <span>₹2 Cr</span>
            </div>
          </div>

          {/* 2. Interest Rate */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <label className="font-semibold text-slate-300 flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                <span>Interest Rate (% per annum)</span>
              </label>
              <div className="flex items-center gap-1 px-3 py-1 rounded-lg bg-slate-900 border border-slate-700">
                <input
                  type="number"
                  step="0.1"
                  min="1"
                  max="30"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Math.max(0.1, Number(e.target.value)))}
                  className="w-16 bg-transparent text-right font-mono font-bold text-white focus:outline-none text-sm"
                />
                <span className="text-slate-400 text-xs">%</span>
              </div>
            </div>

            <input
              type="range"
              min="5"
              max="25"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full accent-emerald-400"
            />
            <div className="flex justify-between text-[11px] text-slate-500 font-mono">
              <span>5%</span>
              <span>10%</span>
              <span>15%</span>
              <span>20%</span>
              <span>25%</span>
            </div>
          </div>

          {/* 3. Loan Tenure */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <label className="font-semibold text-slate-300 flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-purple-400" />
                <span>Loan Tenure</span>
              </label>
              
              <div className="flex items-center gap-2">
                <div className="flex bg-slate-900 rounded-lg p-0.5 border border-slate-700 text-xs">
                  <button
                    onClick={() => {
                      if (tenureUnit === 'months') {
                        setTenureYears(Math.max(1, Math.round(tenureYears / 12)));
                        setTenureUnit('years');
                      }
                    }}
                    className={`px-2 py-1 rounded-md font-semibold transition ${
                      tenureUnit === 'years' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400'
                    }`}
                  >
                    Yr
                  </button>
                  <button
                    onClick={() => {
                      if (tenureUnit === 'years') {
                        setTenureYears(tenureYears * 12);
                        setTenureUnit('months');
                      }
                    }}
                    className={`px-2 py-1 rounded-md font-semibold transition ${
                      tenureUnit === 'months' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400'
                    }`}
                  >
                    Mo
                  </button>
                </div>

                <div className="flex items-center gap-1 px-3 py-1 rounded-lg bg-slate-900 border border-slate-700">
                  <input
                    type="number"
                    min="1"
                    max={tenureUnit === 'years' ? 30 : 360}
                    value={tenureYears}
                    onChange={(e) => setTenureYears(Math.max(1, Number(e.target.value)))}
                    className="w-14 bg-transparent text-right font-mono font-bold text-white focus:outline-none text-sm"
                  />
                  <span className="text-slate-400 text-xs">{tenureUnit === 'years' ? 'Yrs' : 'Mos'}</span>
                </div>
              </div>
            </div>

            <input
              type="range"
              min="1"
              max={tenureUnit === 'years' ? 30 : 360}
              value={tenureYears}
              onChange={(e) => setTenureYears(Number(e.target.value))}
              className="w-full accent-purple-400"
            />
            <div className="flex justify-between text-[11px] text-slate-500 font-mono">
              <span>1 {tenureUnit === 'years' ? 'Yr' : 'Mo'}</span>
              <span>{tenureUnit === 'years' ? '15 Yrs' : '180 Mos'}</span>
              <span>{tenureUnit === 'years' ? '30 Yrs' : '360 Mos'}</span>
            </div>
          </div>

          {/* Loan Presets */}
          <div className="pt-2 border-t border-slate-800">
            <span className="text-[11px] text-slate-400 font-semibold block mb-2">
              Quick Presets:
            </span>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => { setPrincipal(5000000); setInterestRate(8.5); setTenureYears(20); setTenureUnit('years'); }}
                className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 text-xs transition"
              >
                🏠 Home Loan (₹50L, 8.5%, 20Y)
              </button>
              <button
                onClick={() => { setPrincipal(1000000); setInterestRate(9.0); setTenureYears(7); setTenureUnit('years'); }}
                className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 text-xs transition"
              >
                🚗 Car Loan (₹10L, 9.0%, 7Y)
              </button>
              <button
                onClick={() => { setPrincipal(500000); setInterestRate(12.5); setTenureYears(3); setTenureUnit('years'); }}
                className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 text-xs transition"
              >
                💼 Personal Loan (₹5L, 12.5%, 3Y)
              </button>
            </div>
          </div>

        </div>

        {/* Right Output: EMI Summary & Ring Chart */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Monthly EMI Hero Card */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-950/60 via-slate-900 to-blue-950/60 border border-cyan-500/40 space-y-4 shadow-xl">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                Monthly Loan EMI
              </span>
              <div className="text-3xl sm:text-4xl font-black text-white font-mono">
                {formatCurrency(monthlyEmi)}
              </div>
              <span className="text-xs text-slate-400">per month installment</span>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-800">
              <div>
                <span className="text-[11px] text-slate-400 block">Total Interest Payable</span>
                <span className="text-sm sm:text-base font-bold text-rose-400 font-mono">
                  {formatCurrency(totalInterest)}
                </span>
              </div>
              <div>
                <span className="text-[11px] text-slate-400 block">Total Amount Payable</span>
                <span className="text-sm sm:text-base font-bold text-white font-mono">
                  {formatCurrency(totalPayment)}
                </span>
              </div>
            </div>
          </div>

          {/* Visual Ratio Progress Ring / Bar */}
          <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Breakup of Total Repayment
            </h4>

            {/* Split Bar */}
            <div className="h-4 w-full rounded-full bg-slate-800 overflow-hidden flex">
              <div
                style={{ width: `${principalPercent}%` }}
                className="h-full bg-cyan-400 transition-all duration-300"
                title={`Principal: ${principalPercent}%`}
              />
              <div
                style={{ width: `${interestPercent}%` }}
                className="h-full bg-rose-400 transition-all duration-300"
                title={`Interest: ${interestPercent}%`}
              />
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-cyan-400 shrink-0" />
                <div>
                  <span className="text-slate-400 block text-[11px]">Principal Amount</span>
                  <span className="font-bold text-white font-mono">{principalPercent}% ({formatCurrency(principal)})</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-400 shrink-0" />
                <div>
                  <span className="text-slate-400 block text-[11px]">Total Interest</span>
                  <span className="font-bold text-white font-mono">{interestPercent}% ({formatCurrency(totalInterest)})</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Amortization Schedule Table */}
      <div className="space-y-4 pt-6 border-t border-slate-800">
        
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Repayment Schedule (Amortization)
            </h3>
            <p className="text-xs text-slate-400">
              Track how your loan balance decreases over time
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* View Switcher */}
            <div className="flex bg-slate-900 rounded-lg p-0.5 border border-slate-700 text-xs">
              <button
                onClick={() => setScheduleView('yearly')}
                className={`px-3 py-1.5 rounded-md font-semibold transition ${
                  scheduleView === 'yearly' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400'
                }`}
              >
                Yearly Schedule
              </button>
              <button
                onClick={() => setScheduleView('monthly')}
                className={`px-3 py-1.5 rounded-md font-semibold transition ${
                  scheduleView === 'monthly' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400'
                }`}
              >
                Monthly Schedule
              </button>
            </div>

            <button
              onClick={handleExportCsv}
              className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white text-xs font-semibold transition flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span>Export CSV</span>
            </button>
          </div>
        </div>

        {/* Responsive Table Container */}
        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-900/90 text-slate-400 font-semibold border-b border-slate-800">
              <tr>
                <th className="p-3 sm:p-4">{scheduleView === 'yearly' ? 'Year' : 'Month'}</th>
                <th className="p-3 sm:p-4 text-right">Opening Balance</th>
                <th className="p-3 sm:p-4 text-right">EMI Paid</th>
                <th className="p-3 sm:p-4 text-right text-cyan-400">Principal</th>
                <th className="p-3 sm:p-4 text-right text-rose-400">Interest</th>
                <th className="p-3 sm:p-4 text-right">Closing Balance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-900 font-mono">
              {(scheduleView === 'yearly' ? yearlySchedule : monthlySchedule).map((row: any) => (
                <tr key={scheduleView === 'yearly' ? row.year : row.period} className="hover:bg-slate-900/50 transition">
                  <td className="p-3 sm:p-4 font-bold text-white">
                    {scheduleView === 'yearly' ? `Year ${row.year}` : `Mo ${row.period}`}
                  </td>
                  <td className="p-3 sm:p-4 text-right text-slate-400">{formatCurrency(row.openingBalance)}</td>
                  <td className="p-3 sm:p-4 text-right text-white font-semibold">{formatCurrency(row.emi)}</td>
                  <td className="p-3 sm:p-4 text-right text-cyan-400 font-semibold">{formatCurrency(row.principal)}</td>
                  <td className="p-3 sm:p-4 text-right text-rose-400">{formatCurrency(row.interest)}</td>
                  <td className="p-3 sm:p-4 text-right text-slate-300 font-bold">{formatCurrency(row.closingBalance)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>

    </div>
  );
};
