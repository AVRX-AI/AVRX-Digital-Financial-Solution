import React, { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
  opacity: number;
}

export const IndependenceDayAtmosphere: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [showInitialSweep, setShowInitialSweep] = useState(true);

  useEffect(() => {
    // Generate subtle floating Raksha Bandhan festive particles
    // Sacred Saffron, Vermilion Crimson, Golden Yellow, Warm Amber
    const colors = [
      '#F59E0B', // Amber
      '#FF9933', // Saffron
      '#E11D48', // Vermilion / Rose Crimson
      '#FBBF24', // Golden Yellow
      '#F43F5E', // Rose
      '#FEF08A', // Pale Gold
    ];

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const count = isMobile ? 12 : 24;

    const items: Particle[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1.5,
      color: colors[Math.floor(Math.random() * colors.length)],
      duration: Math.random() * 12 + 10,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.35 + 0.15,
    }));

    setParticles(items);

    // Initial micro-interaction light sweep disappears after 3.2 seconds
    const timer = setTimeout(() => {
      setShowInitialSweep(false);
    }, 3200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* 1. Micro-Interaction: Single elegant golden-crimson thread light sweep on first entry */}
      {showInitialSweep && (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden select-none">
          <div className="absolute top-0 -left-full w-[200%] h-1 bg-gradient-to-r from-transparent via-amber-400 via-yellow-200 to-rose-500 opacity-80 blur-[1px] animate-[initialSweep_2.8s_cubic-bezier(0.25,1,0.5,1)_forwards] shadow-[0_0_15px_rgba(245,158,11,0.5)]" />
          <div className="absolute top-0 -left-full w-[200%] h-8 bg-gradient-to-r from-transparent via-amber-500/20 via-yellow-300/30 to-rose-500/20 blur-md animate-[initialSweep_2.8s_cubic-bezier(0.25,1,0.5,1)_forwards]" />
        </div>
      )}

      {/* 2. Floating Ambient Festive Particles */}
      <div
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
        aria-hidden="true"
      >
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
              boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>
    </>
  );
};

