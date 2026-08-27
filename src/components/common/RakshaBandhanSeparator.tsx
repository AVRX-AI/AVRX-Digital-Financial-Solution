import React from 'react';

interface RakshaBandhanSeparatorProps {
  className?: string;
}

export const RakshaBandhanSeparator: React.FC<RakshaBandhanSeparatorProps> = ({
  className = '',
}) => {
  return (
    <div
      className={`relative w-full max-w-6xl mx-auto py-8 px-4 flex items-center justify-center overflow-hidden pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      {/* Left Festive Sacred Thread Beam - Gold into Kumkum Red */}
      <div className="flex-1 h-[1.5px] bg-gradient-to-r from-transparent via-[#FF9933]/60 to-[#E11D48]" />

      {/* Left Golden Bead */}
      <div className="w-2 h-2 rounded-full bg-gradient-to-tr from-amber-600 to-yellow-300 shadow-[0_0_8px_rgba(234,179,8,0.8)] border border-yellow-200 mx-1" />

      {/* Center Rakhi Motif Emblem */}
      <div className="mx-2 relative flex items-center justify-center">
        {/* Outer Golden Petal Glow */}
        <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#E11D48] via-[#FF9933] to-[#F59E0B] p-[1.5px] shadow-[0_0_15px_rgba(245,158,11,0.7)] flex items-center justify-center">
          <div className="w-full h-full rounded-full bg-[#18050e] flex items-center justify-center">
            {/* Center Sacred Vermilion Dot */}
            <div className="w-2 h-2 rounded-full bg-gradient-to-tr from-rose-600 to-yellow-400 animate-pulse shadow-[0_0_8px_rgba(244,63,94,0.9)]" />
          </div>
        </div>

        {/* Pulsing Aura */}
        <div className="absolute inset-0 -m-1 rounded-full bg-amber-500/20 blur-[3px]" />
      </div>

      {/* Right Golden Bead */}
      <div className="w-2 h-2 rounded-full bg-gradient-to-tr from-yellow-300 to-amber-600 shadow-[0_0_8px_rgba(234,179,8,0.8)] border border-yellow-200 mx-1" />

      {/* Right Festive Sacred Thread Beam - Kumkum Red into Saffron into Transparent */}
      <div className="flex-1 h-[1.5px] bg-gradient-to-r from-[#E11D48] via-[#FF9933]/60 to-transparent" />
    </div>
  );
};
