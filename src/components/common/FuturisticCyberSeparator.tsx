import React from 'react';

interface FuturisticCyberSeparatorProps {
  className?: string;
  label?: string;
}

export const FuturisticCyberSeparator: React.FC<FuturisticCyberSeparatorProps> = ({
  className = '',
  label,
}) => {
  return (
    <div
      className={`relative w-full max-w-7xl mx-auto py-10 px-4 flex items-center justify-center overflow-hidden pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      {/* Left Laser Beam - Transparent into Electric Cyan into Neon Violet */}
      <div className="flex-1 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-500/40 via-blue-500/70 to-violet-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]" />

      {/* Left Tech Bracket Accent */}
      <div className="flex items-center gap-1 mx-2 opacity-75">
        <span className="text-[10px] text-cyan-400 font-mono tracking-tighter">⟨</span>
        <div className="w-1.5 h-1.5 rotate-45 bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.9)]" />
      </div>

      {/* Center Quantum Core Diamond Node */}
      <div className="mx-2 relative flex items-center justify-center group">
        {/* Outer Hex Glow Ring */}
        <div className="w-7 h-7 rounded-lg rotate-45 bg-gradient-to-tr from-cyan-500 via-indigo-500 to-violet-500 p-[1.5px] shadow-[0_0_20px_rgba(6,182,212,0.6)] flex items-center justify-center animate-pulse">
          <div className="w-full h-full rounded-lg bg-[#050814] flex items-center justify-center">
            {/* Center Core Micro Pulse */}
            <div className="w-2.5 h-2.5 rounded-sm bg-gradient-to-tr from-cyan-300 via-emerald-300 to-violet-300 shadow-[0_0_10px_rgba(34,211,238,1)] animate-ping" />
          </div>
        </div>

        {/* Ambient Halo */}
        <div className="absolute inset-0 -m-2 rounded-full bg-cyan-500/20 blur-md" />

        {label && (
          <div className="absolute -bottom-6 whitespace-nowrap text-[9px] font-mono font-bold tracking-[0.25em] uppercase text-cyan-400/70 bg-slate-950/80 px-2 py-0.5 rounded border border-cyan-500/30">
            {label}
          </div>
        )}
      </div>

      {/* Right Tech Bracket Accent */}
      <div className="flex items-center gap-1 mx-2 opacity-75">
        <div className="w-1.5 h-1.5 rotate-45 bg-violet-400 shadow-[0_0_8px_rgba(139,92,246,0.9)]" />
        <span className="text-[10px] text-violet-400 font-mono tracking-tighter">⟩</span>
      </div>

      {/* Right Laser Beam - Neon Violet into Cyan into Transparent */}
      <div className="flex-1 h-[1.5px] bg-gradient-to-r from-violet-500 via-indigo-500/70 via-cyan-500/40 to-transparent shadow-[0_0_10px_rgba(139,92,246,0.5)]" />
    </div>
  );
};
