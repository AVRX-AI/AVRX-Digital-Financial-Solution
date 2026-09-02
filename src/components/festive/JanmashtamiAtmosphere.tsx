import React, { useEffect, useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import krishnaDivineLoveBg from '../../assets/images/krishna_divine_love_bg_1788378324820.jpg';

interface FestiveParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
  opacity: number;
  type: 'sparkle' | 'petal' | 'star' | 'diya';
}

export const JanmashtamiAtmosphere: React.FC = () => {
  const { festiveMode } = useTheme();
  const [particles, setParticles] = useState<FestiveParticle[]>([]);

  useEffect(() => {
    if (festiveMode !== 'janmashtami') return;

    // Divine Vrindavan & Krishna Bhakti palette
    const colors = [
      '#F59E0B', // Sacred Amber Gold
      '#FBBF24', // Pitambari Glowing Gold
      '#06B6D4', // Divine Peacock Feather Cyan
      '#10B981', // Vrindavan Kadamba Emerald
      '#8B5CF6', // Krishna Shyam Blue-Violet
      '#F472B6', // Sacred Lotus Pink
      '#FEF08A', // Makhan Butter Yellow
    ];

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const count = isMobile ? 22 : 45;

    const items: FestiveParticle[] = Array.from({ length: count }, (_, i) => {
      const rand = Math.random();
      const pType: 'sparkle' | 'petal' | 'star' | 'diya' = 
        rand > 0.75 ? 'petal' : rand > 0.5 ? 'diya' : rand > 0.25 ? 'sparkle' : 'star';

      return {
        id: i,
        x: Math.random() * 98 + 1,
        y: Math.random() * 98 + 1,
        size: pType === 'petal' ? Math.random() * 12 + 12 : pType === 'diya' ? Math.random() * 8 + 6 : Math.random() * 4 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        duration: Math.random() * 14 + 12,
        delay: Math.random() * 6,
        opacity: Math.random() * 0.6 + 0.25,
        type: pType,
      };
    });

    setParticles(items);
  }, [festiveMode]);

  if (festiveMode !== 'janmashtami') {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none" aria-hidden="true">
      {/* 1. Full-Screen Divine Krishna Background Artwork */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 scale-105 transform-gpu"
        style={{
          backgroundImage: `url(${krishnaDivineLoveBg})`,
          opacity: 0.38,
          filter: 'saturate(1.25) contrast(1.1)',
        }}
      />

      {/* 2. Pure Spiritual Gradient Overlay to ensure maximum contrast & readability for content */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020914]/90 via-[#030e22]/82 via-[#04122c]/85 to-[#020814]/94 backdrop-blur-[0.5px]" />

      {/* 3. Celestial Radha-Krishna Golden & Peacock Radial Auras */}
      {/* Top Center: Bansuri & Peacock Feather Golden Crown Glow */}
      <div className="absolute -top-44 left-1/2 -translate-x-1/2 w-[1100px] h-[750px] bg-gradient-to-b from-amber-500/22 via-yellow-400/12 via-cyan-500/10 to-transparent rounded-full blur-[190px] animate-pulse" />

      {/* Left Sacred Yamuna Bank Aura */}
      <div className="absolute top-1/4 -left-40 w-[700px] h-[700px] bg-gradient-to-tr from-cyan-600/16 via-emerald-500/10 to-transparent rounded-full blur-[180px]" />

      {/* Right Sacred Vrindavan Groves & Kadamba Aura */}
      <div className="absolute top-1/3 -right-40 w-[750px] h-[750px] bg-gradient-to-tl from-amber-500/18 via-purple-600/12 to-transparent rounded-full blur-[180px]" />

      {/* 4. Subtle Holy Stardust Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f59e0b09_1px,transparent_1px),linear-gradient(to_bottom,#06b6d409_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,#000_70%,transparent_100%)] opacity-85" />

      {/* 5. Delicate Floating Devotional Lotus Petals, Glowing Diyas & Celestial Sparkles */}
      {particles.map((p) => {
        if (p.type === 'petal') {
          return (
            <span
              key={p.id}
              className="absolute select-none transform-gpu animate-[floatPetal_16s_ease-in-out_infinite]"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                fontSize: `${p.size}px`,
                opacity: p.opacity,
                filter: 'drop-shadow(0 0 10px rgba(244, 114, 182, 0.6))',
                animationDuration: `${p.duration + 4}s`,
                animationDelay: `${p.delay}s`,
              }}
            >
              🌸
            </span>
          );
        }

        if (p.type === 'diya') {
          return (
            <span
              key={p.id}
              className="absolute select-none transform-gpu animate-[floatDiya_18s_ease-in-out_infinite]"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                fontSize: `${p.size}px`,
                opacity: p.opacity * 0.9,
                filter: 'drop-shadow(0 0 12px rgba(251, 191, 36, 0.8))',
                animationDuration: `${p.duration + 6}s`,
                animationDelay: `${p.delay}s`,
              }}
            >
              🪔
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
              boxShadow: `0 0 ${p.size * 3}px ${p.color}, 0 0 ${p.size * 7}px ${p.color}`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        );
      })}

      {/* 6. Subtle Divine Watermark of Sacred Devotion in Background */}
      <div className="absolute bottom-6 right-8 text-right opacity-15 pointer-events-none select-none font-serif hidden md:block">
        <div className="text-amber-200 text-2xl font-bold tracking-widest drop-shadow-[0_0_15px_rgba(251,191,36,0.8)]">
          ॥ हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे ॥
        </div>
        <div className="text-cyan-300 text-sm tracking-wider mt-1">
          ॥ हरे राम हरे राम राम राम हरे हरे ॥
        </div>
      </div>
    </div>
  );
};
