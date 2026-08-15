import React from 'react';

interface AshokaChakraHoloProps {
  className?: string;
  size?: number;
  opacity?: number;
}

export const AshokaChakraHolo: React.FC<AshokaChakraHoloProps> = ({
  className = '',
  size = 360,
  opacity = 0.12,
}) => {
  // Generate 24 spokes at 15-degree increments (360 / 24 = 15)
  const spokes = Array.from({ length: 24 }, (_, i) => i * 15);

  return (
    <div
      className={`pointer-events-none select-none relative ${className}`}
      style={{ width: size, height: size, opacity }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full animate-[spin_90s_linear_infinite]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="chakraNavyGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0044ff" stopOpacity="0.4" />
            <stop offset="60%" stopColor="#000080" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#000080" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="spokeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="50%" stopColor="#1e40af" />
            <stop offset="100%" stopColor="#000080" />
          </linearGradient>
        </defs>

        {/* Ambient radial glow backdrop */}
        <circle cx="100" cy="100" r="95" fill="url(#chakraNavyGlow)" />

        {/* Outer concentric tech rings */}
        <circle
          cx="100"
          cy="100"
          r="92"
          stroke="#0284c7"
          strokeWidth="1.2"
          strokeDasharray="4 2"
          opacity="0.6"
        />
        <circle
          cx="100"
          cy="100"
          r="86"
          stroke="#000080"
          strokeWidth="2.5"
          className="text-blue-900"
        />
        <circle
          cx="100"
          cy="100"
          r="82"
          stroke="#38bdf8"
          strokeWidth="0.8"
          opacity="0.5"
        />

        {/* 24 Spokes with subtle teardrop pinches */}
        {spokes.map((angle) => (
          <g key={angle} transform={`rotate(${angle} 100 100)`}>
            {/* Spoke line */}
            <line
              x1="100"
              y1="100"
              x2="100"
              y2="18"
              stroke="url(#spokeGrad)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            {/* Outer perimeter micro-node */}
            <circle cx="100" cy="18" r="1.5" fill="#38bdf8" opacity="0.8" />
          </g>
        ))}

        {/* Mid-radius decorative orbit */}
        <circle
          cx="100"
          cy="100"
          r="48"
          stroke="#0284c7"
          strokeWidth="0.8"
          strokeDasharray="2 3"
          opacity="0.4"
        />

        {/* Inner Hub concentric rings */}
        <circle cx="100" cy="100" r="22" stroke="#000080" strokeWidth="2" />
        <circle cx="100" cy="100" r="16" fill="#000080" fillOpacity="0.4" />
        <circle cx="100" cy="100" r="8" fill="#38bdf8" fillOpacity="0.7" />
        <circle cx="100" cy="100" r="3" fill="#ffffff" />
      </svg>
    </div>
  );
};
