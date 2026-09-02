import React, { useEffect, useState } from 'react';
import { useTheme } from '../../context/ThemeContext';

interface QuantumParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
  opacity: number;
}

export const FuturisticAtmosphere: React.FC = () => {
  const { festiveMode } = useTheme();
  const [particles, setParticles] = useState<QuantumParticle[]>([]);
  const [showLaserSweep, setShowLaserSweep] = useState(true);

  useEffect(() => {
    // If festive mode is active, don't initialize high-tech quantum sweep
    if (festiveMode === 'janmashtami') {
      setShowLaserSweep(false);
      return;
    }

    // Electric Cyber & Quantum Neon colors
    const colors = [
      '#06B6D4', // Electric Cyan
      '#3B82F6', // Blue Pulse
      '#8B5CF6', // Neon Violet
      '#6366F1', // Indigo Plasma
      '#10B981', // Quantum Emerald
      '#EC4899', // Cyber Pink
    ];

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const count = isMobile ? 16 : 32;

    const items: QuantumParticle[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1.5,
      color: colors[Math.floor(Math.random() * colors.length)],
      duration: Math.random() * 10 + 8,
      delay: Math.random() * 4,
      opacity: Math.random() * 0.4 + 0.15,
    }));

    setParticles(items);

    // Initial futuristic laser scan sweep
    const timer = setTimeout(() => {
      setShowLaserSweep(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, [festiveMode]);

  if (festiveMode === 'janmashtami') {
    return null;
  }

  return (
    <>
      {/* 1. Futuristic Quantum Laser Scanner Sweep on App Init */}
      {showLaserSweep && (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden select-none" aria-hidden="true">
          <div className="absolute top-0 -left-full w-[200%] h-[2px] bg-gradient-to-r from-transparent via-cyan-400 via-violet-400 to-transparent opacity-90 blur-[0.5px] animate-[initialSweep_2.4s_cubic-bezier(0.2,0.8,0.2,1)_forwards] shadow-[0_0_20px_rgba(6,182,212,0.8)]" />
          <div className="absolute top-0 -left-full w-[200%] h-12 bg-gradient-to-r from-transparent via-cyan-500/20 via-violet-500/25 to-transparent blur-lg animate-[initialSweep_2.4s_cubic-bezier(0.2,0.8,0.2,1)_forwards]" />
        </div>
      )}

      {/* 2. Cybernetic Multi-Layer Atmospheric Plasma Nebulae */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none" aria-hidden="true">
        {/* Top-Left Quantum Cyan Plasma */}
        <div className="absolute -top-32 -left-32 w-[650px] h-[650px] bg-gradient-to-br from-cyan-600/12 via-blue-600/8 to-transparent rounded-full blur-[160px]" />
        
        {/* Top-Right Deep Neon Purple Plasma */}
        <div className="absolute -top-20 -right-20 w-[700px] h-[700px] bg-gradient-to-bl from-purple-600/12 via-violet-600/8 to-transparent rounded-full blur-[170px]" />
        
        {/* Center Cyber Indigo Node */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] bg-indigo-600/5 rounded-full blur-[200px]" />
        
        {/* Bottom Ambient Glow */}
        <div className="absolute -bottom-40 left-1/3 w-[750px] h-[750px] bg-gradient-to-tr from-cyan-500/8 via-purple-600/8 to-transparent rounded-full blur-[180px]" />

        {/* Global Subtle Quantum Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#06b6d408_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf608_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_60%,transparent_100%)] opacity-70" />

        {/* Floating Quantum Energy Nodes */}
        {particles.map((p) => (
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
              boxShadow: `0 0 ${p.size * 4}px ${p.color}, 0 0 ${p.size * 8}px ${p.color}`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>
    </>
  );
};
