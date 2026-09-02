import React, { useEffect, useState } from 'react';
import { useTheme } from '../../context/ThemeContext';

interface FestiveParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
  opacity: number;
  type: 'sparkle' | 'petal' | 'star';
}

export const JanmashtamiAtmosphere: React.FC = () => {
  const { festiveMode } = useTheme();
  const [particles, setParticles] = useState<FestiveParticle[]>([]);

  useEffect(() => {
    if (festiveMode !== 'janmashtami') return;

    // Divine Peacock & Golden Janmashtami palette
    const colors = [
      '#F59E0B', // Golden Amber
      '#FBBF24', // Pitambari Gold
      '#06B6D4', // Divine Peacock Cyan
      '#10B981', // Vrindavan Emerald
      '#8B5CF6', // Krishna Blue-Violet
      '#EC4899', // Lotus Blossom Pink
      '#FEF08A', // Soft Butter Yellow
    ];

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const count = isMobile ? 18 : 36;

    const items: FestiveParticle[] = Array.from({ length: count }, (_, i) => {
      const typeRand = Math.random();
      const pType: 'sparkle' | 'petal' | 'star' = typeRand > 0.7 ? 'petal' : typeRand > 0.4 ? 'sparkle' : 'star';
      return {
        id: i,
        x: Math.random() * 98 + 1,
        y: Math.random() * 98 + 1,
        size: pType === 'petal' ? Math.random() * 12 + 10 : Math.random() * 4 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        duration: Math.random() * 12 + 10,
        delay: Math.random() * 5,
        opacity: Math.random() * 0.5 + 0.25,
        type: pType,
      };
    });

    setParticles(items);
  }, [festiveMode]);

  if (festiveMode !== 'janmashtami') {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden select-none" aria-hidden="true">
      {/* 1. Divine Peacock Blue & Golden Sunburst Atmospheric Aura */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[750px] bg-gradient-to-b from-amber-500/15 via-cyan-600/10 via-emerald-600/5 to-transparent rounded-full blur-[180px]" />
      <div className="absolute top-1/4 -left-32 w-[650px] h-[650px] bg-gradient-to-tr from-amber-500/10 via-emerald-500/8 to-transparent rounded-full blur-[170px]" />
      <div className="absolute top-1/3 -right-32 w-[650px] h-[650px] bg-gradient-to-tl from-cyan-500/12 via-violet-600/10 to-transparent rounded-full blur-[170px]" />

      {/* 2. Delicate Golden Celestial Stardust Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f59e0b08_1px,transparent_1px),linear-gradient(to_bottom,#06b6d408_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,#000_65%,transparent_100%)] opacity-80" />

      {/* 3. Floating Divine Particles & Lotus Petals */}
      {particles.map((p) => {
        if (p.type === 'petal') {
          return (
            <span
              key={p.id}
              className="absolute select-none transform-gpu animate-[floatPetal_14s_ease-in-out_infinite]"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                fontSize: `${p.size}px`,
                opacity: p.opacity,
                filter: 'drop-shadow(0 0 8px rgba(245, 158, 11, 0.4))',
                animationDuration: `${p.duration + 4}s`,
                animationDelay: `${p.delay}s`,
              }}
            >
              🌸
            </span>
          );
        }

        return (
          <span
            key={p.id}
            className="absolute rounded-full transform-gpu animate-[floatParticle_linear_infinite]"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              backgroundColor: p.color,
              opacity: p.opacity,
              boxShadow: `0 0 ${p.size * 3}px ${p.color}, 0 0 ${p.size * 6}px ${p.color}`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        );
      })}
    </div>
  );
};
