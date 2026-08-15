import React from 'react';

interface TricolourSeparatorProps {
  className?: string;
}

export const TricolourSeparator: React.FC<TricolourSeparatorProps> = ({
  className = '',
}) => {
  return (
    <div
      className={`relative w-full max-w-6xl mx-auto py-8 px-4 flex items-center justify-center overflow-hidden pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      {/* Left Gradient Beam - Saffron into White */}
      <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#FF9933]/40 to-white/70" />

      {/* Center Chakra Core Micro-Node */}
      <div className="mx-3 relative flex items-center justify-center">
        <div className="w-2.5 h-2.5 rounded-full border border-blue-500/80 bg-[#050811] flex items-center justify-center shadow-[0_0_10px_rgba(59,130,246,0.6)]">
          <div className="w-1 h-1 rounded-full bg-cyan-300 animate-ping" />
        </div>
        {/* Subtle glowing halo */}
        <div className="absolute inset-0 -m-1 rounded-full bg-blue-600/20 blur-[2px]" />
      </div>

      {/* Right Gradient Beam - White into India Green */}
      <div className="flex-1 h-[1px] bg-gradient-to-r from-white/70 via-[#138808]/40 to-transparent" />
    </div>
  );
};
