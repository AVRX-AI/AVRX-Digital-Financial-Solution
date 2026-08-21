import React, { useRef, useState, useCallback, useMemo } from 'react';
import { launchSoundEngine } from '../../utils/launchSoundEngine';

export type GlowPreset = 
  | 'cyan' 
  | 'emerald' 
  | 'amber' 
  | 'purple' 
  | 'blue' 
  | 'rose' 
  | 'indigo' 
  | 'orange' 
  | 'teal' 
  | 'fuchsia'
  | string;

export interface MagneticCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glowColor?: GlowPreset;
  spotlightRadius?: number;
  spotlightOpacity?: number;
  borderGlow?: boolean;
  enableTilt?: boolean;
  tiltStrength?: number;
  soundOnHover?: boolean;
  as?: 'div' | 'button' | 'article';
}

const GLOW_COLORS: Record<string, { spotlight: string; border: string; ambient: string }> = {
  cyan: {
    spotlight: 'rgba(0, 240, 255, 0.22)',
    border: 'rgba(0, 240, 255, 0.55)',
    ambient: 'rgba(0, 240, 255, 0.08)'
  },
  emerald: {
    spotlight: 'rgba(16, 185, 129, 0.22)',
    border: 'rgba(16, 185, 129, 0.55)',
    ambient: 'rgba(16, 185, 129, 0.08)'
  },
  amber: {
    spotlight: 'rgba(245, 158, 11, 0.22)',
    border: 'rgba(245, 158, 11, 0.55)',
    ambient: 'rgba(245, 158, 11, 0.08)'
  },
  purple: {
    spotlight: 'rgba(168, 85, 247, 0.22)',
    border: 'rgba(168, 85, 247, 0.55)',
    ambient: 'rgba(168, 85, 247, 0.08)'
  },
  blue: {
    spotlight: 'rgba(59, 130, 246, 0.22)',
    border: 'rgba(59, 130, 246, 0.55)',
    ambient: 'rgba(59, 130, 246, 0.08)'
  },
  rose: {
    spotlight: 'rgba(244, 63, 94, 0.22)',
    border: 'rgba(244, 63, 94, 0.55)',
    ambient: 'rgba(244, 63, 94, 0.08)'
  },
  indigo: {
    spotlight: 'rgba(99, 102, 241, 0.22)',
    border: 'rgba(99, 102, 241, 0.55)',
    ambient: 'rgba(99, 102, 241, 0.08)'
  },
  orange: {
    spotlight: 'rgba(249, 115, 22, 0.22)',
    border: 'rgba(249, 115, 22, 0.55)',
    ambient: 'rgba(249, 115, 22, 0.08)'
  },
  teal: {
    spotlight: 'rgba(20, 184, 166, 0.22)',
    border: 'rgba(20, 184, 166, 0.55)',
    ambient: 'rgba(20, 184, 166, 0.08)'
  },
  fuchsia: {
    spotlight: 'rgba(217, 70, 239, 0.22)',
    border: 'rgba(217, 70, 239, 0.55)',
    ambient: 'rgba(217, 70, 239, 0.08)'
  }
};

export const MagneticCard: React.FC<MagneticCardProps> = ({
  children,
  className = '',
  glowColor = 'cyan',
  spotlightRadius = 380,
  spotlightOpacity = 0.25,
  borderGlow = true,
  enableTilt = false,
  tiltStrength = 3.5,
  soundOnHover = false,
  as: Component = 'div',
  onMouseEnter,
  onMouseLeave,
  onMouseMove,
  style,
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, xPct: 50, yPct: 50 });
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const colorConfig = useMemo(() => {
    if (GLOW_COLORS[glowColor]) {
      return GLOW_COLORS[glowColor];
    }
    // Custom color string (hex or rgba)
    return {
      spotlight: glowColor.startsWith('rgba') ? glowColor : `${glowColor}33`,
      border: glowColor.startsWith('rgba') ? glowColor : `${glowColor}88`,
      ambient: glowColor.startsWith('rgba') ? glowColor : `${glowColor}15`
    };
  }, [glowColor]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xPct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    const yPct = Math.max(0, Math.min(100, (y / rect.height) * 100));

    setMousePos({ x, y, xPct, yPct });

    if (enableTilt) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -tiltStrength;
      const rotateY = ((x - centerX) / centerX) * tiltStrength;
      setTilt({ rotateX, rotateY });
    }

    if (onMouseMove) {
      onMouseMove(e);
    }
  }, [enableTilt, tiltStrength, onMouseMove]);

  const handleMouseEnter = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    setIsHovered(true);
    if (soundOnHover) {
      try {
        launchSoundEngine.playHoverChirp();
      } catch (err) {
        // Safe fallback
      }
    }
    if (onMouseEnter) {
      onMouseEnter(e);
    }
  }, [soundOnHover, onMouseEnter]);

  const handleMouseLeave = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    setIsHovered(false);
    if (enableTilt) {
      setTilt({ rotateX: 0, rotateY: 0 });
    }
    if (onMouseLeave) {
      onMouseLeave(e);
    }
  }, [enableTilt, onMouseLeave]);

  return (
    <Component
      ref={cardRef as any}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        ...style,
        transform: enableTilt && isHovered
          ? `perspective(1000px) rotateX(${tilt.rotateX.toFixed(2)}deg) rotateY(${tilt.rotateY.toFixed(2)}deg) translateY(-4px)`
          : style?.transform,
        transition: isHovered 
          ? 'transform 0.15s ease-out, border-color 0.3s ease, box-shadow 0.3s ease' 
          : 'transform 0.5s ease-out, border-color 0.4s ease, box-shadow 0.4s ease',
      }}
      className={`relative group overflow-hidden ${className}`}
      {...(props as any)}
    >
      {/* 1. Magnetic Moving Radial Spotlight Layer */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500 ease-out"
        style={{
          opacity: isHovered ? spotlightOpacity : 0,
          background: `radial-gradient(${spotlightRadius}px circle at ${mousePos.x}px ${mousePos.y}px, ${colorConfig.spotlight}, transparent 70%)`,
        }}
      />

      {/* 2. Magnetic Moving Border Illumination Layer */}
      {borderGlow && (
        <div
          className="pointer-events-none absolute -inset-[1px] rounded-[inherit] z-0 transition-opacity duration-500 ease-out"
          style={{
            opacity: isHovered ? 0.75 : 0,
            background: `radial-gradient(${spotlightRadius * 0.75}px circle at ${mousePos.x}px ${mousePos.y}px, ${colorConfig.border}, transparent 60%)`,
            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            maskComposite: 'exclude',
            WebkitMaskComposite: 'xor',
            padding: '1px'
          }}
        />
      )}

      {/* 3. Card Inner Content (Raised z-index for clarity) */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between">
        {children}
      </div>
    </Component>
  );
};
