import React from 'react';

interface AVRXFaviconProps {
  variant?: 'default' | 'transparent' | 'light' | 'dark';
  size?: number | string;
  className?: string;
  glow?: boolean;
}

export const AVRXFavicon: React.FC<AVRXFaviconProps> = ({
  variant = 'default',
  size = 48,
  className = '',
  glow = true,
}) => {
  const isLight = variant === 'light';
  const isTransparent = variant === 'transparent';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={size}
      height={size}
      className={`inline-block select-none ${className}`}
      aria-label="AVRX Digital & Financial Solution Monogram"
    >
      <defs>
        {/* Background Gradients */}
        <radialGradient id="avrx_bgGlow" cx="50%" cy="45%" r="65%">
          <stop offset="0%" stopColor="#0a1630" />
          <stop offset="60%" stopColor="#040814" />
          <stop offset="100%" stopColor="#020409" />
        </radialGradient>

        <radialGradient id="avrx_lightBg" cx="50%" cy="40%" r="70%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="70%" stopColor="#F1F5F9" />
          <stop offset="100%" stopColor="#E2E8F0" />
        </radialGradient>

        {/* Outer Glow */}
        {glow && (
          <filter id="avrx_glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="16" result="blur1" />
            <feGaussianBlur stdDeviation="28" result="blur2" />
            <feMerge>
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        )}

        {/* Drop Shadow */}
        <filter id="avrx_dropShadow" x="-15%" y="-15%" width="130%" height="130%">
          <feDropShadow
            dx="0"
            dy="10"
            stdDeviation="14"
            floodColor={isLight ? '#0F172A' : '#000000'}
            floodOpacity={isLight ? 0.2 : 0.8}
          />
        </filter>

        {/* Gradients */}
        <linearGradient id="avrx_apexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={isLight ? '#1E293B' : '#FFFFFF'} />
          <stop offset="35%" stopColor={isLight ? '#0F172A' : '#DCE8FF'} />
          <stop offset="70%" stopColor={isLight ? '#334155' : '#7B93B8'} />
          <stop offset="100%" stopColor={isLight ? '#020617' : '#3B4B66'} />
        </linearGradient>

        <linearGradient id="avrx_blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60EFFF" />
          <stop offset="50%" stopColor="#00D2FF" />
          <stop offset="100%" stopColor="#0077FF" />
        </linearGradient>

        <linearGradient id="avrx_goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF3C4" />
          <stop offset="30%" stopColor="#FFD043" />
          <stop offset="70%" stopColor="#E59B12" />
          <stop offset="100%" stopColor="#996000" />
        </linearGradient>

        <linearGradient id="avrx_darkMetal" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={isLight ? '#64748B' : '#334155'} />
          <stop offset="50%" stopColor={isLight ? '#475569' : '#1E293B'} />
          <stop offset="100%" stopColor={isLight ? '#1E293B' : '#0F172A'} />
        </linearGradient>

        <linearGradient id="avrx_ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF9933" />
          <stop offset="50%" stopColor="#00F0FF" />
          <stop offset="100%" stopColor="#10B981" />
        </linearGradient>
      </defs>

      {/* Container Background (skipped if transparent) */}
      {!isTransparent && (
        <>
          <rect
            width="512"
            height="512"
            rx="112"
            fill={isLight ? 'url(#avrx_lightBg)' : 'url(#avrx_bgGlow)'}
          />
          <rect
            width="506"
            height="506"
            x="3"
            y="3"
            rx="109"
            fill="none"
            stroke={isLight ? '#CBD5E1' : 'url(#avrx_ringGrad)'}
            strokeWidth={isLight ? 2 : 3}
            strokeOpacity={isLight ? 0.8 : 0.45}
          />
          {!isLight && (
            <rect
              width="500"
              height="500"
              x="6"
              y="6"
              rx="106"
              fill="none"
              stroke="#00F0FF"
              strokeWidth="1.5"
              strokeOpacity="0.25"
            />
          )}
        </>
      )}

      {/* AVRX Symbol Group */}
      <g filter="url(#avrx_dropShadow)">
        {/* Left Wing of 'A' / Left arm of 'V' */}
        <path d="M 148 372 L 236 128 L 256 128 L 198 372 Z" fill="url(#avrx_apexGrad)" />
        <path
          d="M 148 372 L 180 372 L 236 128 L 210 128 Z"
          fill="url(#avrx_darkMetal)"
          opacity={0.45}
        />

        {/* Right Downward Chevron */}
        <path
          d="M 256 128 L 276 128 L 364 372 L 314 372 L 256 210 L 222 305 L 198 238 Z"
          fill="url(#avrx_darkMetal)"
        />

        {/* Central Electric Cyber Chevron ('V' Vector & AI Core) */}
        <path
          d="M 256 182 L 298 300 L 256 362 L 214 300 Z"
          fill="url(#avrx_blueGrad)"
          filter={glow && !isLight ? 'url(#avrx_glow)' : undefined}
        />
        <path
          d="M 256 200 L 286 288 L 256 338 L 226 288 Z"
          fill="#FFFFFF"
          opacity={0.35}
        />

        {/* Golden Upward Growth Arrow & 'R'/'X' Dynamic Cross-Swoosh */}
        <path
          d="M 132 322 C 175 285 235 235 348 165 L 340 148 L 398 140 L 378 198 L 360 182 C 265 240 200 290 148 335 Z"
          fill="url(#avrx_goldGrad)"
        />

        {/* 'X' Lower-Right Stabilizer Arm */}
        <path d="M 292 278 L 372 372 L 324 372 L 264 302 Z" fill="url(#avrx_apexGrad)" />

        {/* Apex Top Marker */}
        <polygon
          points="256,118 266,134 256,128 246,134"
          fill={isLight ? '#0284C7' : '#60EFFF'}
        />
      </g>
    </svg>
  );
};
export default AVRXFavicon;
