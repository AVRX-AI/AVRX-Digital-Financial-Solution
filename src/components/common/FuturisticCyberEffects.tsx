import React, { useState, useEffect } from 'react';
import { Cpu, Zap, Activity, Radio, ShieldCheck } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface CyberGlyph {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
  symbol: string;
}

export const FuturisticCyberEffects: React.FC = () => {
  const { festiveMode } = useTheme();
  const [glyphs, setGlyphs] = useState<CyberGlyph[]>([]);
  const [isExpandedTelemetry, setIsExpandedTelemetry] = useState(false);
  const [pingMs, setPingMs] = useState(18);

  useEffect(() => {
    if (festiveMode === 'janmashtami') return;

    // Cyber glyph symbols and neon glow palette
    const symbols = ['⬡', '⚡', '◈', '◇', 'λ', '✦', '01', '⌘', '▲', '⬢'];
    const colors = ['#06B6D4', '#8B5CF6', '#3B82F6', '#10B981', '#F43F5E', '#A855F7', '#38BDF8'];

    const items: CyberGlyph[] = Array.from({ length: 24 }, (_, i) => ({
      id: i,
      x: Math.random() * 96 + 2,
      y: Math.random() * 96 + 2,
      size: Math.random() * 12 + 10,
      duration: Math.random() * 14 + 10,
      delay: Math.random() * 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      symbol: symbols[Math.floor(Math.random() * symbols.length)],
    }));

    setGlyphs(items);

    // Subtle ping simulation interval
    const interval = setInterval(() => {
      setPingMs(Math.floor(Math.random() * 8) + 14);
    }, 4000);

    return () => clearInterval(interval);
  }, [festiveMode]);

  if (festiveMode === 'janmashtami') {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden" aria-hidden="true">
      {/* 1. Floating Cyber Glyphs & Quantum Hexagon Nodes */}
      {glyphs.map((g) => (
        <div
          key={g.id}
          className="absolute select-none font-mono opacity-30 hover:opacity-80 transition-opacity"
          style={{
            left: `${g.x}%`,
            top: `${g.y}%`,
            fontSize: `${g.size}px`,
            color: g.color,
            animation: `floatCyberGlyph ${g.duration}s ease-in-out infinite`,
            animationDelay: `${g.delay}s`,
            filter: `drop-shadow(0 0 8px ${g.color})`,
          }}
        >
          {g.symbol}
        </div>
      ))}

      {/* 2. Interactive High-Tech HUD Telemetry Badge in bottom-left */}
      <div className="fixed bottom-6 left-6 hidden xl:flex flex-col pointer-events-auto z-40">
        <div 
          onClick={() => setIsExpandedTelemetry(!isExpandedTelemetry)}
          className="relative px-3.5 py-2 rounded-xl bg-[#050814]/90 border border-cyan-500/40 shadow-[0_0_25px_rgba(6,182,212,0.25)] backdrop-blur-xl flex items-center gap-3 text-white cursor-pointer transition-all duration-300 hover:scale-105 hover:border-cyan-400 group"
        >
          {/* Pulsing Core Indicator */}
          <div className="relative flex items-center justify-center w-6 h-6">
            <span className="absolute w-full h-full rounded-full bg-cyan-400/20 animate-ping" />
            <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 shadow-[0_0_10px_rgba(34,211,238,0.9)]" />
          </div>

          {/* Telemetry info */}
          <div className="text-left font-mono">
            <div className="flex items-center gap-2 text-[10px] font-bold text-cyan-400 tracking-widest uppercase">
              <Cpu className="w-3 h-3 text-cyan-400" />
              <span>AVRX CORE // v4.5</span>
              <span className="text-[9px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">ONLINE</span>
            </div>
            <div className="text-[11px] text-slate-300 flex items-center gap-2 mt-0.5">
              <span className="text-cyan-300/80">LATENCY: {pingMs}ms</span>
              <span className="text-slate-600">•</span>
              <span className="text-violet-300">QUANTUM ENGINE</span>
            </div>
          </div>
        </div>

        {/* Expanded mini dashboard drawer */}
        {isExpandedTelemetry && (
          <div className="mt-2 p-3.5 w-64 rounded-xl bg-[#050814]/95 border border-cyan-500/50 shadow-[0_10px_35px_rgba(6,182,212,0.35)] backdrop-blur-2xl text-xs space-y-2 text-slate-300 font-mono animate-in fade-in slide-in-from-bottom-2">
            <div className="flex items-center justify-between pb-1.5 border-b border-cyan-500/20 text-[11px] text-cyan-300 font-bold">
              <span>SYSTEM DIAGNOSTICS</span>
              <Activity className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            </div>
            <div className="flex justify-between items-center text-[10px]">
              <span className="text-slate-400">AI INFERENCE CLUSTER:</span>
              <span className="text-emerald-400 font-bold">ACTIVE (100%)</span>
            </div>
            <div className="flex justify-between items-center text-[10px]">
              <span className="text-slate-400">ENCRYPTION PROTOCOL:</span>
              <span className="text-cyan-400 font-bold">AES-256 / SHA3</span>
            </div>
            <div className="flex justify-between items-center text-[10px]">
              <span className="text-slate-400">FINTECH GATEWAY:</span>
              <span className="text-purple-400 font-bold">VERIFIED</span>
            </div>
          </div>
        )}
      </div>

      {/* Keyframe animation */}
      <style>{`
        @keyframes floatCyberGlyph {
          0% {
            transform: translateY(0px) translateX(0px) rotate(0deg) scale(0.85);
            opacity: 0.15;
          }
          25% {
            opacity: 0.6;
          }
          50% {
            transform: translateY(-90px) translateX(30px) rotate(180deg) scale(1.15);
            opacity: 0.85;
          }
          75% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(-180px) translateX(-20px) rotate(360deg) scale(0.8);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};
