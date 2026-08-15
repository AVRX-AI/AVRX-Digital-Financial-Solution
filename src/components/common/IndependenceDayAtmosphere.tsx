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
    // Generate subtle floating particles
    // Saffron (#FF9933), White (#FFFFFF), Green (#138808), Navy (#000080 / #0055ff)
    const colors = [
      '#FF9933', // Saffron
      '#FF9933', // Saffron
      '#FFFFFF', // White
      '#FFFFFF', // White
      '#138808', // India Green
      '#138808', // India Green
      '#0033aa', // Navy / Deep Blue
    ];

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const count = isMobile ? 12 : 28;

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
      {/* 1. Micro-Interaction: Single elegant tricolour light sweep on first entry */}
      {showInitialSweep && (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden select-none">
          <div className="absolute top-0 -left-full w-[200%] h-1 bg-gradient-to-r from-transparent via-[#FF9933] via-[#ffffff] to-[#138808] opacity-80 blur-[1px] animate-[initialSweep_2.8s_cubic-bezier(0.25,1,0.5,1)_forwards] shadow-[0_0_15px_rgba(255,153,51,0.5)]" />
          <div className="absolute top-0 -left-full w-[200%] h-8 bg-gradient-to-r from-transparent via-[#FF9933]/20 via-[#ffffff]/30 to-[#138808]/20 blur-md animate-[initialSweep_2.8s_cubic-bezier(0.25,1,0.5,1)_forwards]" />
        </div>
      )}

      {/* 2. Floating Ambient Particles */}
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
