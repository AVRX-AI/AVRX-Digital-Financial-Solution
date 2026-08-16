import React, { useState, useMemo } from 'react';
import { 
  Percent, 
  Copy, 
  Check, 
  IndianRupee, 
  ArrowRightLeft, 
  Receipt, 
  CheckCircle2, 
  HelpCircle,
  FileText
} from 'lucide-react';

export const GstCalculatorTool: React.FC = () => {
  const [amount, setAmount] = useState<number>(10000);
  const [gstRate, setGstRate] = useState<number>(18);
  const [calcType, setCalcType] = useState<'exclusive' | 'inclusive'>('exclusive'); // Add GST vs Remove GST
  const [supplyType, setSupplyType] = useState<'intra' | 'inter'>('intra'); // CGST+SGST vs IGST
  const [copied, setCopied] = useState(false);

  const {
    netAmount,
    gstAmount,
    totalAmount,
    cgstAmount,
    sgstAmount,
    igstAmount
  } = useMemo(() => {
    const P = Math.max(0, amount);
    const r = Math.max(0, gstRate);

    let net = 0;
    let gst = 0;
    let total = 0;

    if (calcType === 'exclusive') {
      // Add GST
      net = P;
      gst = (P * r) / 100;
      total = net + gst;
    } else {
      // Remove / Extract GST
      total = P;
      net = (P * 100) / (100 + r);
      gst = total - net;
    }

    const cgst = supplyType === 'intra' ? gst / 2 : 0;
    const sgst = supplyType === 'intra' ? gst / 2 : 0;
    const igst = supplyType === 'inter' ? gst : 0;

    return {
      netAmount: Math.round(net * 100) / 100,
      gstAmount: Math.round(gst * 100) / 100,
      totalAmount: Math.round(total * 100) / 100,
      cgstAmount: Math.round(cgst * 100) / 100,
      sgstAmount: Math.round(sgst * 100) / 100,
      igstAmount: Math.round(igst * 100) / 100,
    };
  }, [amount, gstRate, calcType, supplyType]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 2
    }).format(val);
  };

  const handleCopySummary = () => {
    const text = `--- AVRX GST Calculation Receipt ---
Calculation Mode: ${calcType === 'exclusive' ? 'Add GST (Exclusive)' : 'Remove GST (Inclusive)'}
GST Rate: ${gstRate}%
Net / Base Amount: ${formatCurrency(netAmount)}
${supplyType === 'intra' ? `CGST (${gstRate / 2}%): ${formatCurrency(cgstAmount)}\nSGST (${gstRate / 2}%): ${formatCurrency(sgstAmount)}` : `IGST (${gstRate}%): ${formatCurrency(igstAmount)}`}
Total GST Amount: ${formatCurrency(gstAmount)}
Total Final Amount: ${formatCurrency(totalAmount)}
------------------------------------`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8">
      
      {/* Main Calculator Body */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Form: Inputs & GST Slabs */}
        <div className="lg:col-span-7 space-y-6 bg-slate-950/60 p-5 sm:p-7 rounded-2xl border border-slate-800">
          
          {/* 1. Mode Toggle */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Calculation Type
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setCalcType('exclusive')}
                className={`p-3 rounded-xl border font-semibold text-xs transition flex flex-col items-center gap-1 ${
                  calcType === 'exclusive'
                    ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-300 shadow-md'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                <span className="font-bold">Add GST (Exclusive)</span>
                <span className="text-[10px] text-slate-400">Amount + GST = Total</span>
              </button>

              <button
                onClick={() => setCalcType('inclusive')}
                className={`p-3 rounded-xl border font-semibold text-xs transition flex flex-col items-center gap-1 ${
                  calcType === 'inclusive'
                    ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-300 shadow-md'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                <span className="font-bold">Remove GST (Inclusive)</span>
                <span className="text-[10px] text-slate-400">Gross Amount includes GST</span>
              </button>
            </div>
          </div>

          {/* 2. Amount Input */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <label className="font-semibold text-slate-300">
                {calcType === 'exclusive' ? 'Base / Net Amount' : 'Gross / Total Amount (with GST)'}
              </label>
              <div className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700">
                <span className="text-slate-400 text-xs">₹</span>
                <input
                  type="number"
                  min="0"
                  value={amount}
                  onChange={(e) => setAmount(Math.max(0, Number(e.target.value)))}
                  className="w-32 bg-transparent text-right font-mono font-bold text-white focus:outline-none text-sm"
                />
              </div>
            </div>

            <input
              type="range"
              min="500"
              max="500000"
              step="500"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full accent-cyan-400"
            />
            <div className="flex justify-between text-[11px] text-slate-500 font-mono">
              <span>₹500</span>
              <span>₹1 Lakh</span>
              <span>₹2.5 Lakh</span>
              <span>₹5 Lakh</span>
            </div>
          </div>

          {/* 3. GST Rate Slabs */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
              GST Rate Slab
            </label>
            <div className="grid grid-cols-5 gap-2">
              {[0, 5, 12, 18, 28].map((rate) => (
                <button
                  key={rate}
                  onClick={() => setGstRate(rate)}
                  className={`py-2.5 px-2 rounded-xl border font-mono font-bold text-xs transition ${
                    gstRate === rate
                      ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-md shadow-cyan-500/20'
                      : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  {rate}%
                </button>
              ))}
            </div>
          </div>

          {/* 4. Supply State Type */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Supply Location
            </label>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <button
                onClick={() => setSupplyType('intra')}
                className={`p-3 rounded-xl border transition text-left space-y-1 ${
                  supplyType === 'intra'
                    ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-300'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                <div className="font-bold">Intra-State (Same State)</div>
                <div className="text-[11px] text-slate-400">Split into CGST (50%) + SGST (50%)</div>
              </button>

              <button
                onClick={() => setSupplyType('inter')}
                className={`p-3 rounded-xl border transition text-left space-y-1 ${
                  supplyType === 'inter'
                    ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-300'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                <div className="font-bold">Inter-State (Outside State)</div>
                <div className="text-[11px] text-slate-400">Applied as IGST (100%)</div>
              </button>
            </div>
          </div>

        </div>

        {/* Right Output: Tax Invoice Receipt Card */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-cyan-950/40 border border-cyan-500/30 space-y-5 shadow-xl">
            
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Receipt className="w-5 h-5 text-cyan-400" />
                <span className="font-bold text-white text-sm">Tax Summary Receipt</span>
              </div>

              <button
                onClick={handleCopySummary}
                className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition flex items-center gap-1"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            {/* Total Hero */}
            <div className="space-y-1">
              <span className="text-xs text-slate-400 block font-medium">
                {calcType === 'exclusive' ? 'Total Invoice Amount' : 'Net Price (Pre-Tax)'}
              </span>
              <div className="text-3xl sm:text-4xl font-black text-cyan-400 font-mono">
                {formatCurrency(totalAmount)}
              </div>
            </div>

            {/* Itemized Breakdown Table */}
            <div className="space-y-2.5 text-xs pt-2">
              <div className="flex justify-between text-slate-300">
                <span>Net / Base Amount:</span>
                <span className="font-mono font-semibold">{formatCurrency(netAmount)}</span>
              </div>

              {supplyType === 'intra' ? (
                <>
                  <div className="flex justify-between text-slate-400 pl-2">
                    <span>+ CGST ({gstRate / 2}%):</span>
                    <span className="font-mono">{formatCurrency(cgstAmount)}</span>
                  </div>
                  <div className="flex justify-between text-slate-400 pl-2">
                    <span>+ SGST / UTGST ({gstRate / 2}%):</span>
                    <span className="font-mono">{formatCurrency(sgstAmount)}</span>
                  </div>
                </>
              ) : (
                <div className="flex justify-between text-slate-400 pl-2">
                  <span>+ IGST ({gstRate}%):</span>
                  <span className="font-mono">{formatCurrency(igstAmount)}</span>
                </div>
              )}

              <div className="flex justify-between text-rose-400 font-semibold pt-1 border-t border-slate-800">
                <span>Total Tax Amount ({gstRate}%):</span>
                <span className="font-mono">+{formatCurrency(gstAmount)}</span>
              </div>

              <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-slate-800">
                <span>Final Payable / Gross:</span>
                <span className="font-mono">{formatCurrency(totalAmount)}</span>
              </div>
            </div>

          </div>

          {/* Quick GST Slabs Guide */}
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2 text-xs text-slate-400">
            <span className="font-bold text-white block">Standard Indian GST Slabs:</span>
            <ul className="space-y-1 text-[11px] list-disc list-inside">
              <li><strong>0%:</strong> Essential food grains, fresh milk, vegetables, books.</li>
              <li><strong>5%:</strong> Household essentials, packaged food, economy flight tickets.</li>
              <li><strong>12%:</strong> Computers, processed food, business apparel, medicines.</li>
              <li><strong>18%:</strong> IT services, software, restaurants, telecom, banking fees.</li>
              <li><strong>28%:</strong> Luxury vehicles, consumer electronics, tobacco, aerated drinks.</li>
            </ul>
          </div>

        </div>

      </div>

    </div>
  );
};
