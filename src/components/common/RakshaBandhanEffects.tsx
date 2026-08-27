import React, { useState, useEffect } from 'react';
import { Sparkles, Heart } from 'lucide-react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
  symbol: string;
}

export const RakshaBandhanEffects: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate celebratory golden & rose sparkles / petals
    const items: Particle[] = Array.from({ length: 28 }, (_, i) => {
      const symbols = ['✨', '🌸', '🪢', '✦', '💛', '🌟', '🏵️'];
      const colors = ['#F59E0B', '#E11D48', '#FF9933', '#FBBF24', '#F43F5E', '#FEF08A'];
      return {
        id: i,
        x: Math.random() * 100, // percentage
        y: Math.random() * 100, // percentage
        size: Math.random() * 14 + 10,
        duration: Math.random() * 12 + 10,
        delay: Math.random() * 8,
        color: colors[Math.floor(Math.random() * colors.length)],
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
      };
    });
    setParticles(items);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden" aria-hidden="true">
      {/* 1. Festive Ambient Atmospheric Glows */}
      <div className="absolute top-0 left-0 w-[550px] h-[550px] bg-gradient-to-br from-amber-500/15 via-rose-500/10 to-transparent rounded-full blur-[140px] -z-10 pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-rose-600/12 via-amber-500/10 to-transparent rounded-full blur-[150px] -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-amber-600/10 via-rose-500/10 to-transparent rounded-full blur-[130px] -z-10 pointer-events-none" />

      {/* 2. Floating Festive Sparkles & Petals */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute select-none opacity-40 hover:opacity-80 transition-opacity"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            fontSize: `${p.size}px`,
            color: p.color,
            animation: `floatFestiveParticle ${p.duration}s ease-in-out infinite`,
            animationDelay: `${p.delay}s`,
            filter: 'drop-shadow(0 0 6px rgba(245, 158, 11, 0.6))',
          }}
        >
          {p.symbol}
        </div>
      ))}

      {/* 3. Corner Festive Hanging Rakhi Motif */}
      <div className="fixed bottom-6 right-6 hidden lg:flex flex-col items-center pointer-events-auto group z-40">
        <div className="relative p-2.5 rounded-2xl bg-gradient-to-br from-slate-900/90 via-amber-950/80 to-rose-950/90 border border-amber-400/50 shadow-[0_8px_30px_rgba(245,158,11,0.35)] backdrop-blur-xl flex items-center gap-3 text-white transition-all duration-300 hover:scale-105">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-rose-600 via-amber-500 to-yellow-300 p-[1.5px] shadow-[0_0_15px_rgba(245,158,11,0.6)] flex items-center justify-center animate-spin-slow">
            <div className="w-full h-full rounded-full bg-[#18050e] flex items-center justify-center text-base">
              🪢
            </div>
          </div>
          <div className="pr-1 text-left">
            <div className="flex items-center gap-1.5 text-[10px] font-bold text-amber-300 tracking-wider uppercase">
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>रक्षाबंधन पर्व 2026</span>
            </div>
            <div className="text-xs font-semibold text-rose-100">
              Happy Raksha Bandhan! ✨
            </div>
          </div>
        </div>
      </div>

      {/* Inline styles for keyframe floating */}
      <style>{`
        @keyframes floatFestiveParticle {
          0% {
            transform: translateY(0px) translateX(0px) rotate(0deg) scale(0.8);
            opacity: 0.1;
          }
          25% {
            opacity: 0.55;
          }
          50% {
            transform: translateY(-80px) translateX(25px) rotate(180deg) scale(1.1);
            opacity: 0.8;
          }
          75% {
            opacity: 0.55;
          }
          100% {
            transform: translateY(-160px) translateX(-15px) rotate(360deg) scale(0.8);
            opacity: 0;
          }
        }
        .animate-spin-slow {
          animation: spin 14s linear infinite;
        }
      `}</style>
    </div>
  );
};
