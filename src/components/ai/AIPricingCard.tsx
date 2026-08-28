import React from 'react';
import { Check, Zap, Sparkles, ArrowRight } from 'lucide-react';
import { ServicePackage } from '../../types/ai';

interface AIPricingCardProps {
  packages: ServicePackage[];
  onSelectPackage: (pkg: ServicePackage) => void;
}

export const AIPricingCard: React.FC<AIPricingCardProps> = ({ packages, onSelectPackage }) => {
  if (!packages || packages.length === 0) return null;

  return (
    <div className="my-2.5 space-y-2">
      <div className="flex items-center justify-between text-[11px] text-cyan-400 font-mono">
        <span className="flex items-center gap-1.5 font-bold">
          <Zap className="w-3 h-3 text-cyan-400" />
          <span>Recommended Packages</span>
        </span>
        <span className="text-[10px] text-emerald-400 font-bold">Transparent Pricing</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className={`relative rounded-2xl p-3 flex flex-col justify-between border transition duration-200 shadow-md ${
              pkg.popular
                ? 'bg-gradient-to-b from-cyan-950/50 via-slate-900 to-slate-950 border-cyan-500/50 shadow-[0_0_20px_rgba(0,240,255,0.15)]'
                : 'bg-slate-900/90 border-slate-800 hover:border-slate-700'
            }`}
          >
            {pkg.popular && (
              <span className="absolute -top-2.5 right-3 px-2 py-0.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 text-[9px] font-black uppercase tracking-wider flex items-center gap-1 shadow">
                <Sparkles className="w-2.5 h-2.5" />
                Popular
              </span>
            )}

            <div>
              <h4 className="text-xs font-black text-white">{pkg.package_name}</h4>
              <p className="text-[10px] text-slate-400 mt-0.5 line-clamp-2 leading-tight">
                {pkg.description}
              </p>

              {/* Price Row */}
              <div className="my-2 flex items-baseline gap-1.5">
                <span className="text-lg font-black text-cyan-300">
                  ₹{pkg.price.toLocaleString('en-IN')}
                </span>
                {pkg.discount_price && (
                  <span className="text-[10px] text-slate-500 line-through">
                    ₹{pkg.discount_price.toLocaleString('en-IN')}
                  </span>
                )}
                <span className="text-[9px] font-mono text-emerald-400 ml-auto">
                  ⚡ {pkg.delivery_time}
                </span>
              </div>

              {/* Features List */}
              <ul className="space-y-1 my-2">
                {pkg.features.slice(0, 4).map((feat, i) => (
                  <li key={i} className="text-[10px] text-slate-300 flex items-start gap-1.5">
                    <Check className="w-3 h-3 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="line-clamp-1">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => onSelectPackage(pkg)}
              className="mt-2 w-full py-1.5 px-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:brightness-110 text-slate-950 font-black text-[11px] flex items-center justify-center gap-1.5 transition cursor-pointer"
            >
              <span>Select {pkg.package_name.split(' ')[0]}</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
