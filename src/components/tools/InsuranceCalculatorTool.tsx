import React, { useState, useMemo } from 'react';
import { 
  ShieldCheck, 
  Car, 
  Bike, 
  Truck, 
  HelpCircle, 
  CheckCircle2, 
  Info, 
  IndianRupee,
  Percent,
  Plus
} from 'lucide-react';

export const InsuranceCalculatorTool: React.FC = () => {
  const [vehicleType, setVehicleType] = useState<'car' | 'bike' | 'commercial'>('car');
  const [exShowroomPrice, setExShowroomPrice] = useState<number>(800000); // ₹8 Lakhs
  const [vehicleAge, setVehicleAge] = useState<number>(1); // 1 year old (15% depreciation)
  const [engineCapacity, setEngineCapacity] = useState<string>('1000-1500');
  const [zone, setZone] = useState<'A' | 'B'>('A'); // Zone A (Metro) vs Zone B
  const [policyType, setPolicyType] = useState<'comprehensive' | 'tp_only' | 'od_only'>('comprehensive');
  const [ncbPercent, setNcbPercent] = useState<number>(20); // 20% NCB

  // Add-ons toggles
  const [addOns, setAddOns] = useState<{
    zeroDep: boolean;
    engineProtect: boolean;
    roadsideAssistance: boolean;
    consumables: boolean;
    returnToInvoice: boolean;
    ncbProtect: boolean;
    paCover: boolean;
  }>({
    zeroDep: true,
    engineProtect: true,
    roadsideAssistance: true,
    consumables: true,
    returnToInvoice: false,
    ncbProtect: false,
    paCover: true,
  });

  const toggleAddOn = (key: keyof typeof addOns) => {
    setAddOns(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const calculatedQuote = useMemo(() => {
    // 1. Depreciation schedule by age
    let depRate = 0.05;
    if (vehicleAge === 1) depRate = 0.15;
    else if (vehicleAge === 2) depRate = 0.20;
    else if (vehicleAge === 3) depRate = 0.30;
    else if (vehicleAge === 4) depRate = 0.40;
    else if (vehicleAge >= 5) depRate = 0.50;

    const idv = Math.round(exShowroomPrice * (1 - depRate));

    // 2. Base OD Rate (approx 2.5% to 3.2% of IDV based on zone & vehicle)
    let baseOdRate = 0.028;
    if (vehicleType === 'bike') baseOdRate = 0.018;
    else if (vehicleType === 'commercial') baseOdRate = 0.038;
    if (zone === 'A') baseOdRate += 0.003;

    const rawOdPremium = policyType === 'tp_only' ? 0 : Math.round(idv * baseOdRate);
    const ncbDiscount = policyType === 'tp_only' ? 0 : Math.round(rawOdPremium * (ncbPercent / 100));
    const netBasicOd = Math.max(0, rawOdPremium - ncbDiscount);

    // 3. Add-on pricing
    let addOnsCost = 0;
    const addOnBreakdown: { name: string; cost: number }[] = [];

    if (policyType !== 'tp_only') {
      if (addOns.zeroDep) {
        const cost = Math.round(idv * 0.008);
        addOnsCost += cost;
        addOnOn(addOnBreakdown, 'Zero Depreciation (Bumper to Bumper)', cost);
      }
      if (addOns.engineProtect) {
        const cost = Math.round(idv * 0.0035);
        addOnsCost += cost;
        addOnOn(addOnBreakdown, 'Engine & Gearbox Protection', cost);
      }
      if (addOns.roadsideAssistance) {
        const cost = vehicleType === 'bike' ? 350 : 850;
        addOnsCost += cost;
        addOnOn(addOnBreakdown, '24x7 Roadside Assistance', cost);
      }
      if (addOns.consumables) {
        const cost = Math.round(idv * 0.002);
        addOnsCost += cost;
        addOnOn(addOnBreakdown, 'Consumables Cover', cost);
      }
      if (addOns.returnToInvoice) {
        const cost = Math.round(idv * 0.004);
        addOnsCost += cost;
        addOnOn(addOnBreakdown, 'Return to Invoice (RTI)', cost);
      }
      if (addOns.ncbProtect) {
        const cost = Math.round(idv * 0.0015);
        addOnsCost += cost;
        addOnOn(addOnBreakdown, 'NCB Retention Protector', cost);
      }
    }

    if (addOns.paCover) {
      const cost = 375; // Standard IRDAI PA Cover ₹15 Lakhs
      addOnsCost += cost;
      addOnOn(addOnBreakdown, 'Personal Accident Cover (₹15 Lakhs)', cost);
    }

    // 4. Statutory Third-Party Premium based on IRDAI brackets
    let tpPremium = 0;
    if (policyType !== 'od_only') {
      if (vehicleType === 'car') {
        if (engineCapacity === 'under-1000') tpPremium = 2094;
        else if (engineCapacity === '1000-1500') tpPremium = 3416;
        else tpPremium = 7890;
      } else if (vehicleType === 'bike') {
        if (engineCapacity === 'under-75') tpPremium = 538;
        else if (engineCapacity === '75-150') tpPremium = 714;
        else if (engineCapacity === '150-350') tpPremium = 1366;
        else tpPremium = 2804;
      } else {
        tpPremium = 12500;
      }
    }

    const netOdTotal = netBasicOd + addOnsCost;
    const netPremiumBeforeTax = netOdTotal + tpPremium;
    const gstAmount = Math.round(netPremiumBeforeTax * 0.18);
    const finalTotalPremium = netPremiumBeforeTax + gstAmount;

    return {
      idv,
      depRatePercent: Math.round(depRate * 100),
      rawOdPremium,
      ncbDiscount,
      netBasicOd,
      addOnsCost,
      addOnBreakdown,
      tpPremium,
      netPremiumBeforeTax,
      gstAmount,
      finalTotalPremium
    };
  }, [vehicleType, exShowroomPrice, vehicleAge, engineCapacity, zone, policyType, ncbPercent, addOns]);

  function addOnOn(arr: any[], name: string, cost: number) {
    arr.push({ name, cost });
  }

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <div className="space-y-8">
      
      {/* Top Selector Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Form: Vehicle & Policy Parameters */}
        <div className="lg:col-span-7 space-y-6 bg-slate-950/60 p-5 sm:p-7 rounded-2xl border border-slate-800">
          
          {/* 1. Vehicle Type Tabs */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Select Vehicle Category
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => { setVehicleType('car'); setExShowroomPrice(800000); setEngineCapacity('1000-1500'); }}
                className={`p-3 rounded-xl border font-semibold text-xs transition flex flex-col items-center gap-1.5 ${
                  vehicleType === 'car'
                    ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-300 shadow-md'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                <Car className="w-5 h-5" />
                <span>Private Car</span>
              </button>

              <button
                onClick={() => { setVehicleType('bike'); setExShowroomPrice(120000); setEngineCapacity('75-150'); }}
                className={`p-3 rounded-xl border font-semibold text-xs transition flex flex-col items-center gap-1.5 ${
                  vehicleType === 'bike'
                    ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-300 shadow-md'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                <Bike className="w-5 h-5" />
                <span>Two-Wheeler</span>
              </button>

              <button
                onClick={() => { setVehicleType('commercial'); setExShowroomPrice(1500000); setEngineCapacity('commercial'); }}
                className={`p-3 rounded-xl border font-semibold text-xs transition flex flex-col items-center gap-1.5 ${
                  vehicleType === 'commercial'
                    ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-300 shadow-md'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                <Truck className="w-5 h-5" />
                <span>Commercial</span>
              </button>
            </div>
          </div>

          {/* 2. Ex-Showroom / Valuation Price */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <label className="font-semibold text-slate-300">Vehicle Ex-Showroom Price</label>
              <div className="flex items-center gap-1 px-3 py-1 rounded-lg bg-slate-900 border border-slate-700">
                <span className="text-slate-400 text-xs">₹</span>
                <input
                  type="number"
                  value={exShowroomPrice}
                  onChange={(e) => setExShowroomPrice(Math.max(10000, Number(e.target.value)))}
                  className="w-28 bg-transparent text-right font-mono font-bold text-white focus:outline-none text-sm"
                />
              </div>
            </div>

            <input
              type="range"
              min={vehicleType === 'bike' ? 30000 : 200000}
              max={vehicleType === 'bike' ? 500000 : 5000000}
              step={vehicleType === 'bike' ? 5000 : 25000}
              value={exShowroomPrice}
              onChange={(e) => setExShowroomPrice(Number(e.target.value))}
              className="w-full accent-cyan-400"
            />
            <div className="flex justify-between text-[11px] text-slate-400 font-mono">
              <span>Estimated IDV: <strong className="text-cyan-400">{formatCurrency(calculatedQuote.idv)}</strong></span>
              <span>({calculatedQuote.depRatePercent}% Age Depreciation)</span>
            </div>
          </div>

          {/* 3. Vehicle Age & Engine Capacity */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="space-y-1.5">
              <label className="font-semibold text-slate-300">Vehicle Age</label>
              <select
                value={vehicleAge}
                onChange={(e) => setVehicleAge(Number(e.target.value))}
                className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white focus:border-cyan-400 focus:outline-none"
              >
                <option value={0}>Brand New (0 to 6 months - 5% dep)</option>
                <option value={1}>1 Year Old (15% dep)</option>
                <option value={2}>2 Years Old (20% dep)</option>
                <option value={3}>3 Years Old (30% dep)</option>
                <option value={4}>4 Years Old (40% dep)</option>
                <option value={5}>5+ Years Old (50% dep)</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="font-semibold text-slate-300">Engine Capacity</label>
              <select
                value={engineCapacity}
                onChange={(e) => setEngineCapacity(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white focus:border-cyan-400 focus:outline-none"
              >
                {vehicleType === 'car' && (
                  <>
                    <option value="under-1000">Below 1,000 CC (Hatchback/Small)</option>
                    <option value="1000-1500">1,000 CC - 1,500 CC (Sedan/Compact SUV)</option>
                    <option value="above-1500">Above 1,500 CC (Luxury/Full SUV)</option>
                  </>
                )}
                {vehicleType === 'bike' && (
                  <>
                    <option value="under-75">Below 75 CC</option>
                    <option value="75-150">75 CC - 150 CC (Commuter)</option>
                    <option value="150-350">150 CC - 350 CC (Sports/Cruiser)</option>
                    <option value="above-350">Above 350 CC (Superbike)</option>
                  </>
                )}
                {vehicleType === 'commercial' && (
                  <option value="commercial">Commercial Goods / Passenger</option>
                )}
              </select>
            </div>
          </div>

          {/* 4. Policy Type & NCB */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="space-y-1.5">
              <label className="font-semibold text-slate-300">Coverage Type</label>
              <select
                value={policyType}
                onChange={(e: any) => setPolicyType(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white focus:border-cyan-400 focus:outline-none"
              >
                <option value="comprehensive">Comprehensive Package (OD + TP)</option>
                <option value="tp_only">Third Party Liability Only</option>
                <option value="od_only">Standalone Own Damage (OD)</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="font-semibold text-slate-300">No Claim Bonus (NCB)</label>
              <select
                value={ncbPercent}
                onChange={(e) => setNcbPercent(Number(e.target.value))}
                disabled={policyType === 'tp_only'}
                className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white focus:border-cyan-400 focus:outline-none disabled:opacity-40"
              >
                <option value={0}>0% (New Vehicle or Made Claim)</option>
                <option value={20}>20% (1 Claim-Free Year)</option>
                <option value={25}>25% (2 Claim-Free Years)</option>
                <option value={35}>35% (3 Claim-Free Years)</option>
                <option value={45}>45% (4 Claim-Free Years)</option>
                <option value={50}>50% (5+ Claim-Free Years)</option>
              </select>
            </div>
          </div>

          {/* 5. Add-ons Checklist */}
          {policyType !== 'tp_only' && (
            <div className="space-y-3 pt-3 border-t border-slate-800">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Recommended Add-On Covers
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                
                <label className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={addOns.zeroDep}
                    onChange={() => toggleAddOn('zeroDep')}
                    className="rounded accent-cyan-400"
                  />
                  <span className="text-slate-200">Zero Depreciation</span>
                </label>

                <label className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={addOns.engineProtect}
                    onChange={() => toggleAddOn('engineProtect')}
                    className="rounded accent-cyan-400"
                  />
                  <span className="text-slate-200">Engine Protection</span>
                </label>

                <label className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={addOns.roadsideAssistance}
                    onChange={() => toggleAddOn('roadsideAssistance')}
                    className="rounded accent-cyan-400"
                  />
                  <span className="text-slate-200">Roadside Assistance (24x7)</span>
                </label>

                <label className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={addOns.consumables}
                    onChange={() => toggleAddOn('consumables')}
                    className="rounded accent-cyan-400"
                  />
                  <span className="text-slate-200">Consumables Cover</span>
                </label>

                <label className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={addOns.returnToInvoice}
                    onChange={() => toggleAddOn('returnToInvoice')}
                    className="rounded accent-cyan-400"
                  />
                  <span className="text-slate-200">Return to Invoice (RTI)</span>
                </label>

                <label className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={addOns.paCover}
                    onChange={() => toggleAddOn('paCover')}
                    className="rounded accent-cyan-400"
                  />
                  <span className="text-slate-200">PA Owner-Driver (₹15L)</span>
                </label>

              </div>
            </div>
          )}

        </div>

        {/* Right Output: Premium Breakdown Summary */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Estimated Total Hero Box */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-950/60 via-slate-900 to-cyan-950/60 border border-cyan-500/40 space-y-4 shadow-xl">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                Estimated Annual Premium
              </span>
              <div className="text-3xl sm:text-4xl font-black text-white font-mono">
                {formatCurrency(calculatedQuote.finalTotalPremium)}
              </div>
              <span className="text-xs text-slate-400">including 18% GST</span>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-800 text-xs">
              <div>
                <span className="text-slate-400 block text-[11px]">Insured Value (IDV)</span>
                <span className="font-bold text-white font-mono">{formatCurrency(calculatedQuote.idv)}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">NCB Savings</span>
                <span className="font-bold text-emerald-400 font-mono">-{formatCurrency(calculatedQuote.ncbDiscount)}</span>
              </div>
            </div>
          </div>

          {/* Itemized Premium Receipt */}
          <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-3 text-xs">
            <h4 className="font-bold text-white text-sm pb-2 border-b border-slate-800">
              Premium Calculation Breakup
            </h4>

            {policyType !== 'tp_only' && (
              <>
                <div className="flex justify-between text-slate-300">
                  <span>Basic Own Damage (OD)</span>
                  <span className="font-mono">{formatCurrency(calculatedQuote.rawOdPremium)}</span>
                </div>
                {calculatedQuote.ncbDiscount > 0 && (
                  <div className="flex justify-between text-emerald-400">
                    <span>Less: {ncbPercent}% NCB Discount</span>
                    <span className="font-mono">-{formatCurrency(calculatedQuote.ncbDiscount)}</span>
                  </div>
                )}
                {calculatedQuote.addOnBreakdown.map((item, idx) => (
                  <div key={idx} className="flex justify-between text-slate-400 text-[11px] pl-2">
                    <span>+ {item.name}</span>
                    <span className="font-mono">{formatCurrency(item.cost)}</span>
                  </div>
                ))}
              </>
            )}

            {policyType !== 'od_only' && (
              <div className="flex justify-between text-slate-300 pt-1">
                <span>Third Party Liability (IRDAI)</span>
                <span className="font-mono">{formatCurrency(calculatedQuote.tpPremium)}</span>
              </div>
            )}

            <div className="flex justify-between text-slate-400 pt-2 border-t border-slate-800/80">
              <span>Net Premium (Before GST)</span>
              <span className="font-mono">{formatCurrency(calculatedQuote.netPremiumBeforeTax)}</span>
            </div>

            <div className="flex justify-between text-slate-400">
              <span>GST @ 18%</span>
              <span className="font-mono">{formatCurrency(calculatedQuote.gstAmount)}</span>
            </div>

            <div className="flex justify-between text-sm font-bold text-cyan-400 pt-2 border-t border-slate-800">
              <span>Total Payable</span>
              <span className="font-mono">{formatCurrency(calculatedQuote.finalTotalPremium)}</span>
            </div>
          </div>

          {/* Transparent Disclaimer */}
          <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-400 flex items-start gap-2.5 leading-relaxed">
            <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <span>
              <strong>Informational Estimation:</strong> Final policy quotation may vary slightly based on specific insurer underwriting rules, claims history, exact RTO location, and vehicle variant.
            </span>
          </div>

        </div>

      </div>

    </div>
  );
};
