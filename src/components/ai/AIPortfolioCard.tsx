import React from 'react';
import { ExternalLink, CheckCircle2, Sparkles, Layers } from 'lucide-react';
import { PortfolioSample } from '../../types/ai';

interface AIPortfolioCardProps {
  samples: PortfolioSample[];
  onSelectSample: (sample: PortfolioSample) => void;
}

export const AIPortfolioCard: React.FC<AIPortfolioCardProps> = ({ samples, onSelectSample }) => {
  if (!samples || samples.length === 0) return null;

  return (
    <div className="my-2.5 space-y-2">
      <div className="flex items-center justify-between text-[11px] text-cyan-400 font-mono">
        <span className="flex items-center gap-1.5 font-bold">
          <Sparkles className="w-3 h-3 text-cyan-400" />
          <span>Recommended Live Demos ({samples.length})</span>
        </span>
        <span className="text-[10px] text-slate-400">Click to preview</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {samples.map((sample) => (
          <div
            key={sample.id}
            className="group relative rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 p-2.5 transition duration-200 overflow-hidden shadow-lg flex flex-col justify-between"
          >
            {/* Image Preview with Hover Overlay */}
            <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-950 mb-2">
              <img
                src={sample.preview_image}
                alt={sample.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-1.5 left-2 right-2 flex items-center justify-between">
                <span className="px-2 py-0.5 rounded-full bg-slate-950/80 backdrop-blur-md text-[9px] font-mono font-bold text-cyan-300 border border-cyan-500/30 uppercase">
                  {sample.business_type}
                </span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-950/80 backdrop-blur-md text-[9px] font-mono font-bold text-emerald-300 border border-emerald-500/30">
                  Starts ₹{sample.starting_price.toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            {/* Info */}
            <div className="space-y-1">
              <h4 className="text-xs font-bold text-white line-clamp-1 group-hover:text-cyan-300 transition">
                {sample.title}
              </h4>
              <p className="text-[10px] text-slate-400 line-clamp-2 leading-relaxed">
                {sample.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 pt-1">
                {sample.tags.slice(0, 3).map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-1.5 py-0.2 rounded bg-slate-800/80 text-[8px] text-slate-300 font-mono"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="mt-2.5 pt-2 border-t border-slate-800/80 flex items-center gap-1.5">
              {sample.demo_url && (
                <a
                  href={sample.demo_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-2 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-[10px] font-bold flex items-center justify-center gap-1 transition"
                >
                  <span>Live Preview</span>
                  <ExternalLink className="w-2.5 h-2.5 text-slate-400" />
                </a>
              )}

              <button
                onClick={() => onSelectSample(sample)}
                className="flex-1 px-2 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:brightness-110 text-slate-950 text-[10px] font-black flex items-center justify-center gap-1 transition cursor-pointer"
              >
                <CheckCircle2 className="w-3 h-3 text-slate-950" />
                <span>Choose This</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
