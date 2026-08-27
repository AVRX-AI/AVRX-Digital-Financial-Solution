import React, { useState, useMemo } from 'react';
import { 
  ArrowRightLeft, 
  Copy, 
  Check, 
  Layers, 
  Scale, 
  Ruler, 
  Thermometer, 
  HardDrive, 
  Clock, 
  Zap, 
  Box,
  RotateCcw
} from 'lucide-react';

interface UnitOption {
  id: string;
  name: string;
  symbol: string;
  toBase: (val: number) => number;
  fromBase: (val: number) => number;
}

interface UnitCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  gradient: string;
  units: UnitOption[];
  defaultFrom: string;
  defaultTo: string;
  defaultValue: number;
}

const CATEGORIES: UnitCategory[] = [
  {
    id: 'length',
    name: 'Length & Distance',
    icon: <Ruler className="w-4 h-4" />,
    gradient: 'from-cyan-500 to-blue-600',
    defaultFrom: 'm',
    defaultTo: 'ft',
    defaultValue: 10,
    units: [
      { id: 'km', name: 'Kilometer', symbol: 'km', toBase: v => v * 1000, fromBase: v => v / 1000 },
      { id: 'm', name: 'Meter', symbol: 'm', toBase: v => v, fromBase: v => v },
      { id: 'cm', name: 'Centimeter', symbol: 'cm', toBase: v => v / 100, fromBase: v => v * 100 },
      { id: 'mm', name: 'Millimeter', symbol: 'mm', toBase: v => v / 1000, fromBase: v => v * 1000 },
      { id: 'mi', name: 'Mile', symbol: 'mi', toBase: v => v * 1609.344, fromBase: v => v / 1609.344 },
      { id: 'yd', name: 'Yard', symbol: 'yd', toBase: v => v * 0.9144, fromBase: v => v / 0.9144 },
      { id: 'ft', name: 'Foot', symbol: 'ft', toBase: v => v * 0.3048, fromBase: v => v / 0.3048 },
      { id: 'in', name: 'Inch', symbol: 'in', toBase: v => v * 0.0254, fromBase: v => v / 0.0254 },
      { id: 'nmi', name: 'Nautical Mile', symbol: 'NM', toBase: v => v * 1852, fromBase: v => v / 1852 },
    ]
  },
  {
    id: 'weight',
    name: 'Weight & Mass',
    icon: <Scale className="w-4 h-4" />,
    gradient: 'from-emerald-500 to-teal-600',
    defaultFrom: 'kg',
    defaultTo: 'lb',
    defaultValue: 5,
    units: [
      { id: 't', name: 'Metric Ton', symbol: 't', toBase: v => v * 1000, fromBase: v => v / 1000 },
      { id: 'kg', name: 'Kilogram', symbol: 'kg', toBase: v => v, fromBase: v => v },
      { id: 'g', name: 'Gram', symbol: 'g', toBase: v => v / 1000, fromBase: v => v * 1000 },
      { id: 'mg', name: 'Milligram', symbol: 'mg', toBase: v => v / 1000000, fromBase: v => v * 1000000 },
      { id: 'lb', name: 'Pound', symbol: 'lb', toBase: v => v * 0.45359237, fromBase: v => v / 0.45359237 },
      { id: 'oz', name: 'Ounce', symbol: 'oz', toBase: v => v * 0.028349523, fromBase: v => v / 0.028349523 },
      { id: 'quintal', name: 'Quintal (India)', symbol: 'q', toBase: v => v * 100, fromBase: v => v / 100 },
      { id: 'tola', name: 'Tola (India)', symbol: 'tola', toBase: v => v * 0.0116638, fromBase: v => v / 0.0116638 },
    ]
  },
  {
    id: 'temperature',
    name: 'Temperature',
    icon: <Thermometer className="w-4 h-4" />,
    gradient: 'from-amber-500 to-rose-600',
    defaultFrom: 'c',
    defaultTo: 'f',
    defaultValue: 37,
    units: [
      { id: 'c', name: 'Celsius', symbol: '°C', toBase: v => v, fromBase: v => v },
      { id: 'f', name: 'Fahrenheit', symbol: '°F', toBase: v => (v - 32) * (5 / 9), fromBase: v => (v * (9 / 5)) + 32 },
      { id: 'k', name: 'Kelvin', symbol: 'K', toBase: v => v - 273.15, fromBase: v => v + 273.15 },
    ]
  },
  {
    id: 'area',
    name: 'Area & Land Measurement',
    icon: <Box className="w-4 h-4" />,
    gradient: 'from-purple-500 to-indigo-600',
    defaultFrom: 'sqm',
    defaultTo: 'sqft',
    defaultValue: 100,
    units: [
      { id: 'sqkm', name: 'Square Kilometer', symbol: 'km²', toBase: v => v * 1000000, fromBase: v => v / 1000000 },
      { id: 'sqm', name: 'Square Meter', symbol: 'm²', toBase: v => v, fromBase: v => v },
      { id: 'sqft', name: 'Square Feet', symbol: 'sq ft', toBase: v => v * 0.092903, fromBase: v => v / 0.092903 },
      { id: 'sqyd', name: 'Square Yard (Gaj)', symbol: 'sq yd', toBase: v => v * 0.836127, fromBase: v => v / 0.836127 },
      { id: 'acre', name: 'Acre', symbol: 'acre', toBase: v => v * 4046.86, fromBase: v => v / 4046.86 },
      { id: 'hectare', name: 'Hectare', symbol: 'ha', toBase: v => v * 10000, fromBase: v => v / 10000 },
      { id: 'bigha', name: 'Bigha (Standard)', symbol: 'bigha', toBase: v => v * 2529.28, fromBase: v => v / 2529.28 },
      { id: 'guntha', name: 'Guntha (India)', symbol: 'guntha', toBase: v => v * 101.17, fromBase: v => v / 101.17 },
    ]
  },
  {
    id: 'storage',
    name: 'Digital Data & Storage',
    icon: <HardDrive className="w-4 h-4" />,
    gradient: 'from-blue-500 to-cyan-500',
    defaultFrom: 'gb',
    defaultTo: 'mb',
    defaultValue: 16,
    units: [
      { id: 'b', name: 'Byte', symbol: 'B', toBase: v => v, fromBase: v => v },
      { id: 'kb', name: 'Kilobyte', symbol: 'KB', toBase: v => v * 1024, fromBase: v => v / 1024 },
      { id: 'mb', name: 'Megabyte', symbol: 'MB', toBase: v => v * 1024 * 1024, fromBase: v => v / (1024 * 1024) },
      { id: 'gb', name: 'Gigabyte', symbol: 'GB', toBase: v => v * 1024 * 1024 * 1024, fromBase: v => v / (1024 * 1024 * 1024) },
      { id: 'tb', name: 'Terabyte', symbol: 'TB', toBase: v => v * Math.pow(1024, 4), fromBase: v => v / Math.pow(1024, 4) },
      { id: 'pb', name: 'Petabyte', symbol: 'PB', toBase: v => v * Math.pow(1024, 5), fromBase: v => v / Math.pow(1024, 5) },
    ]
  },
  {
    id: 'speed',
    name: 'Speed & Velocity',
    icon: <Zap className="w-4 h-4" />,
    gradient: 'from-fuchsia-500 to-rose-600',
    defaultFrom: 'kmh',
    defaultTo: 'mph',
    defaultValue: 100,
    units: [
      { id: 'kmh', name: 'Kilometers / Hour', symbol: 'km/h', toBase: v => v / 3.6, fromBase: v => v * 3.6 },
      { id: 'ms', name: 'Meters / Second', symbol: 'm/s', toBase: v => v, fromBase: v => v },
      { id: 'mph', name: 'Miles / Hour', symbol: 'mph', toBase: v => v * 0.44704, fromBase: v => v / 0.44704 },
      { id: 'knot', name: 'Knot (Nautical)', symbol: 'kn', toBase: v => v * 0.514444, fromBase: v => v / 0.514444 },
    ]
  },
  {
    id: 'time',
    name: 'Time & Duration',
    icon: <Clock className="w-4 h-4" />,
    gradient: 'from-amber-400 to-orange-500',
    defaultFrom: 'day',
    defaultTo: 'hr',
    defaultValue: 7,
    units: [
      { id: 'ms', name: 'Millisecond', symbol: 'ms', toBase: v => v / 1000, fromBase: v => v * 1000 },
      { id: 'sec', name: 'Second', symbol: 's', toBase: v => v, fromBase: v => v },
      { id: 'min', name: 'Minute', symbol: 'min', toBase: v => v * 60, fromBase: v => v / 60 },
      { id: 'hr', name: 'Hour', symbol: 'hr', toBase: v => v * 3600, fromBase: v => v / 3600 },
      { id: 'day', name: 'Day', symbol: 'd', toBase: v => v * 86400, fromBase: v => v / 86400 },
      { id: 'wk', name: 'Week', symbol: 'wk', toBase: v => v * 604800, fromBase: v => v / 604800 },
      { id: 'mo', name: 'Month (30.44d)', symbol: 'mo', toBase: v => v * 2629746, fromBase: v => v / 2629746 },
      { id: 'yr', name: 'Year (365.25d)', symbol: 'yr', toBase: v => v * 31557600, fromBase: v => v / 31557600 },
    ]
  }
];

export const UnitConverterTool: React.FC = () => {
  const [selectedCatId, setSelectedCatId] = useState('length');
  const currentCategory = useMemo(() => CATEGORIES.find(c => c.id === selectedCatId) || CATEGORIES[0], [selectedCatId]);

  const [fromUnitId, setFromUnitId] = useState(currentCategory.defaultFrom);
  const [toUnitId, setToUnitId] = useState(currentCategory.defaultTo);
  const [inputValue, setInputValue] = useState<number>(currentCategory.defaultValue);
  const [copied, setCopied] = useState(false);

  // Handle Category Change
  const handleCategorySelect = (catId: string) => {
    const cat = CATEGORIES.find(c => c.id === catId);
    if (cat) {
      setSelectedCatId(catId);
      setFromUnitId(cat.defaultFrom);
      setToUnitId(cat.defaultTo);
      setInputValue(cat.defaultValue);
    }
  };

  const fromUnit = useMemo(() => currentCategory.units.find(u => u.id === fromUnitId) || currentCategory.units[0], [currentCategory, fromUnitId]);
  const toUnit = useMemo(() => currentCategory.units.find(u => u.id === toUnitId) || currentCategory.units[1] || currentCategory.units[0], [currentCategory, toUnitId]);

  // Compute conversion
  const convertedResult = useMemo(() => {
    if (isNaN(inputValue)) return 0;
    const baseValue = fromUnit.toBase(inputValue);
    const result = toUnit.fromBase(baseValue);
    
    // Format precision cleanly
    if (Math.abs(result) < 0.000001 && result !== 0) {
      return Number(result.toExponential(4));
    }
    return Number(Math.round(Number(result + 'e+6')) + 'e-6');
  }, [inputValue, fromUnit, toUnit]);

  const handleSwap = () => {
    const temp = fromUnitId;
    setFromUnitId(toUnitId);
    setToUnitId(temp);
  };

  const handleCopy = () => {
    const text = `${inputValue} ${fromUnit.symbol} = ${convertedResult} ${toUnit.symbol}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8">
      {/* Category Pills Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
        {CATEGORIES.map(cat => {
          const isActive = cat.id === selectedCatId;
          return (
            <button
              key={cat.id}
              onClick={() => handleCategorySelect(cat.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 border ${
                isActive 
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 border-cyan-400 shadow-lg shadow-cyan-500/25' 
                  : 'bg-slate-900/90 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>

      {/* Main Interactive Converter Box */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        
        {/* FROM Card */}
        <div className="lg:col-span-5 bg-slate-950/80 border border-slate-800/80 rounded-2xl p-6 space-y-4 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">From Unit</span>
            <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
              {fromUnit.symbol}
            </span>
          </div>

          <div className="space-y-2">
            <label className="text-xs text-slate-400">Value to Convert</label>
            <input
              type="number"
              value={inputValue}
              onChange={(e) => setInputValue(parseFloat(e.target.value) || 0)}
              className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white font-mono text-2xl font-bold focus:border-cyan-400 focus:outline-none"
              placeholder="0"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs text-slate-400">Select Unit</label>
            <select
              value={fromUnitId}
              onChange={(e) => setFromUnitId(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm font-semibold focus:border-cyan-400 focus:outline-none"
            >
              {currentCategory.units.map(u => (
                <option key={u.id} value={u.id}>
                  {u.name} ({u.symbol})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* SWAP Button */}
        <div className="lg:col-span-2 flex justify-center">
          <button
            onClick={handleSwap}
            className="p-4 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-blue-600/20 hover:from-cyan-500 hover:to-blue-600 text-cyan-400 hover:text-slate-950 border border-cyan-500/40 transition-all duration-300 transform hover:scale-110 shadow-lg"
            title="Swap Units"
          >
            <ArrowRightLeft className="w-6 h-6" />
          </button>
        </div>

        {/* TO Card */}
        <div className="lg:col-span-5 bg-slate-950/80 border border-slate-800/80 rounded-2xl p-6 space-y-4 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">To Unit (Result)</span>
            <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              {toUnit.symbol}
            </span>
          </div>

          <div className="space-y-2">
            <label className="text-xs text-slate-400">Calculated Value</label>
            <div className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-emerald-500/30 text-emerald-400 font-mono text-2xl font-bold flex items-center justify-between overflow-x-auto">
              <span className="truncate">{convertedResult}</span>
              <span className="text-sm text-slate-500 ml-2">{toUnit.symbol}</span>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs text-slate-400">Select Unit</label>
            <select
              value={toUnitId}
              onChange={(e) => setToUnitId(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm font-semibold focus:border-cyan-400 focus:outline-none"
            >
              {currentCategory.units.map(u => (
                <option key={u.id} value={u.id}>
                  {u.name} ({u.symbol})
                </option>
              ))}
            </select>
          </div>
        </div>

      </div>

      {/* Conversion Formula & Quick Action Result Bar */}
      <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-950 border border-slate-800 p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Conversion Equation</span>
          <div className="font-mono text-base sm:text-lg font-bold text-white flex items-center gap-2">
            <span className="text-cyan-400">{inputValue} {fromUnit.symbol}</span>
            <span className="text-slate-500">=</span>
            <span className="text-emerald-400">{convertedResult} {toUnit.symbol}</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setInputValue(currentCategory.defaultValue)}
            className="p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white border border-slate-700 text-xs font-semibold flex items-center gap-1.5 transition"
            title="Reset default value"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>

          <button
            onClick={handleCopy}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 text-xs font-bold flex items-center gap-2 shadow-lg shadow-cyan-500/20 transition"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-slate-950" />
                <span>Copied Equation</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy Result</span>
              </>
            )}
          </button>
        </div>
      </div>

    </div>
  );
};
