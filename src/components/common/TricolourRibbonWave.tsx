import React from 'react';

interface TricolourRibbonWaveProps {
  className?: string;
  opacity?: number;
}

export const TricolourRibbonWave: React.FC<TricolourRibbonWaveProps> = ({
  className = '',
  opacity = 0.45,
}) => {
  return (
    <div
      className={`pointer-events-none select-none absolute inset-0 overflow-hidden ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      {/* 3D Flowing Vector Mesh Light Waves */}
      <svg
        className="absolute w-[180%] sm:w-[140%] -left-[20%] top-0 h-full max-h-[700px] object-cover mix-blend-screen transform-gpu"
        viewBox="0 0 1440 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Saffron Glowing Wave Gradient */}
          <linearGradient id="saffronWave" x1="0%" y1="0%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#FF9933" stopOpacity="0" />
            <stop offset="25%" stopColor="#FF9933" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#FFB366" stopOpacity="0.6" />
            <stop offset="75%" stopColor="#FF9933" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#FF9933" stopOpacity="0" />
          </linearGradient>

          {/* White Luminescence Wave Gradient */}
          <linearGradient id="whiteWave" x1="0%" y1="0%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="30%" stopColor="#ffffff" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.75" />
            <stop offset="70%" stopColor="#ffffff" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>

          {/* India Green Glowing Wave Gradient */}
          <linearGradient id="greenWave" x1="0%" y1="0%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#138808" stopOpacity="0" />
            <stop offset="25%" stopColor="#138808" stopOpacity="0.35" />
            <stop offset="50%" stopColor="#22c55e" stopOpacity="0.55" />
            <stop offset="75%" stopColor="#138808" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#138808" stopOpacity="0" />
          </linearGradient>

          {/* Navy Depth Shadow Gradient */}
          <linearGradient id="navyDepth" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#000080" stopOpacity="0" />
            <stop offset="50%" stopColor="#0a1e5c" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#000080" stopOpacity="0" />
          </linearGradient>

          <filter id="waveGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Ambient Wave 1 - Saffron Upper Stream */}
        <path
          d="M-50,180 C300,90 600,260 950,140 C1250,30 1400,200 1500,160"
          stroke="url(#saffronWave)"
          strokeWidth="3.5"
          filter="url(#waveGlow)"
          className="animate-[waveDrift1_18s_ease-in-out_infinite_alternate]"
        />
        <path
          d="M-50,200 C320,110 580,280 930,160 C1230,50 1380,220 1500,180"
          stroke="url(#saffronWave)"
          strokeWidth="1.5"
          opacity="0.6"
          className="animate-[waveDrift1_18s_ease-in-out_infinite_alternate]"
        />

        {/* Ambient Wave 2 - Pure White Central Beam */}
        <path
          d="M-50,240 C340,150 620,320 970,200 C1270,90 1420,260 1500,220"
          stroke="url(#whiteWave)"
          strokeWidth="2.8"
          filter="url(#waveGlow)"
          className="animate-[waveDrift2_14s_ease-in-out_infinite_alternate]"
        />
        <path
          d="M-50,250 C350,160 610,330 960,210 C1260,100 1410,270 1500,230"
          stroke="url(#navyDepth)"
          strokeWidth="4"
          className="animate-[waveDrift2_14s_ease-in-out_infinite_alternate]"
        />

        {/* Ambient Wave 3 - India Green Lower Stream */}
        <path
          d="M-50,300 C380,210 660,380 1010,260 C1310,150 1460,320 1500,280"
          stroke="url(#greenWave)"
          strokeWidth="3.5"
          filter="url(#waveGlow)"
          className="animate-[waveDrift3_20s_ease-in-out_infinite_alternate]"
        />
        <path
          d="M-50,320 C400,230 640,400 990,280 C1290,170 1440,340 1500,300"
          stroke="url(#greenWave)"
          strokeWidth="1.5"
          opacity="0.6"
          className="animate-[waveDrift3_20s_ease-in-out_infinite_alternate]"
        />
      </svg>
    </div>
  );
};
