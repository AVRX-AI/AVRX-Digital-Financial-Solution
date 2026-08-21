import React, { useState, useEffect } from 'react';
import { Sparkles, Volume2, VolumeX, ArrowRight, Compass, Music2 } from 'lucide-react';
import { AshokaChakraHolo } from './AshokaChakraHolo';
import brandLogo from '../../assets/images/avrx_white_logo_1786467039540.jpg';
import { launchSoundEngine } from '../../utils/launchSoundEngine';

interface AVRXLaunchScreenProps {
  onComplete: () => void;
}

export const AVRXLaunchScreen: React.FC<AVRXLaunchScreenProps> = ({ onComplete }) => {
  // Animation phases: 'opening' | 'ready' | 'countdown' | 'launching' | 'transition'
  const [phase, setPhase] = useState<'opening' | 'ready' | 'countdown' | 'launching' | 'transition'>('opening');
  const [countdownNum, setCountdownNum] = useState<number | string>(3);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [reducedMotion, setReducedMotion] = useState<boolean>(false);

  // Sync mute state with sound engine
  useEffect(() => {
    launchSoundEngine.setMuted(!soundEnabled);
  }, [soundEnabled]);

  // Check reduced motion & session
  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motionQuery.matches) {
      setReducedMotion(true);
    }

    // Opening cinematic transition timer -> set to 'ready' after 1.8s
    const timer = setTimeout(() => {
      setPhase('ready');
      // Play atmospheric welcome boot chord shimmer
      launchSoundEngine.playWelcomeChime();
    }, 1800);

    // Prevent body scrolling during launch screen
    document.body.style.overflow = 'hidden';

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
    };
  }, []);

  // Launch button trigger
  const handleLaunchClick = () => {
    if (phase !== 'ready') return;

    if (reducedMotion) {
      finishLaunch();
      return;
    }

    setPhase('countdown');
    setCountdownNum(3);
    
    // Stage 3 sound & brief
    launchSoundEngine.playCountdownPulse(3);

    // 3 -> 2
    setTimeout(() => {
      setCountdownNum(2);
      launchSoundEngine.playCountdownPulse(2);
    }, 750);

    // 2 -> 1
    setTimeout(() => {
      setCountdownNum(1);
      launchSoundEngine.playCountdownPulse(1);
    }, 1500);

    // 1 -> LIFTOFF!
    setTimeout(() => {
      setCountdownNum('🚀 LIFTOFF!');
      // Multi-layer sonic boom, roaring thruster exhaust, warp glissando & celestial victory chord
      launchSoundEngine.playRocketLiftoff();
      setPhase('launching');

      // Transition to final flash & completion
      setTimeout(() => {
        setPhase('transition');
        setTimeout(() => {
          finishLaunch();
        }, 600);
      }, 1600);
    }, 2250);
  };

  const finishLaunch = () => {
    launchSoundEngine.playClickTick();
    try {
      sessionStorage.setItem('avrx_launch_completed', 'true');
    } catch {
      // Handle private browsing storage restrictions
    }
    document.body.style.overflow = 'auto';
    onComplete();
  };

  return (
    <div
      className={`fixed inset-0 z-50 overflow-hidden select-none bg-[#030611] text-white flex flex-col items-center justify-between transition-all duration-700 ${
        phase === 'transition' ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100'
      }`}
      style={{
        perspective: '1200px',
      }}
    >
      {/* 1. Atmospheric Space Background with Saffron & Green Nebulae */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top-Left Saffron Nebula Aura */}
        <div className="absolute -top-32 -left-32 w-[550px] sm:w-[750px] h-[550px] bg-gradient-to-br from-[#FF9933]/25 via-[#FF9933]/10 to-transparent rounded-full blur-[140px] animate-pulse" />

        {/* Center White High-Tech Star Cluster */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1000px] h-[600px] bg-gradient-to-tr from-cyan-500/10 via-white/10 to-blue-600/15 rounded-full blur-[160px]" />

        {/* Bottom-Right India Green Nebula Aura */}
        <div className="absolute -bottom-32 -right-32 w-[550px] sm:w-[750px] h-[550px] bg-gradient-to-tl from-[#138808]/25 via-[#138808]/10 to-transparent rounded-full blur-[140px] animate-pulse" />

        {/* Subtle Ashoka Chakra Hologram in Distant Cosmic Orbit */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none opacity-20">
          <AshokaChakraHolo size={680} opacity={0.08} />
        </div>

        {/* High-Tech Grid Horizon Layer */}
        <div
          className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(to_right,#38bdf8_1px,transparent_1px),linear-gradient(to_bottom,#38bdf8_1px,transparent_1px)] bg-[size:48px_48px]"
          style={{
            maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 30%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 30%, transparent 80%)',
          }}
        />

        {/* Dynamic Starfield Particles (Streaks down when launching!) */}
        <div
          className={`absolute inset-0 transition-transform duration-1000 ${
            phase === 'launching' ? 'translate-y-[200%] scale-y-150 duration-700' : ''
          }`}
        >
          {Array.from({ length: 40 }).map((_, i) => {
            const size = (i % 3) + 1.5;
            const colors = ['#FF9933', '#ffffff', '#ffffff', '#22c55e', '#38bdf8'];
            const color = colors[i % colors.length];
            return (
              <span
                key={i}
                className="absolute rounded-full animate-pulse"
                style={{
                  top: `${(i * 19) % 100}%`,
                  left: `${(i * 29) % 100}%`,
                  width: `${size}px`,
                  height: `${size}px`,
                  backgroundColor: color,
                  opacity: (i % 5) * 0.15 + 0.25,
                  boxShadow: `0 0 ${size * 2.5}px ${color}`,
                  animationDuration: `${(i % 4) + 2}s`,
                }}
              />
            );
          })}
        </div>
      </div>

      {/* 2. Top Header Bar: Sound Controls & Badge */}
      <div className="w-full max-w-7xl mx-auto px-6 pt-6 sm:pt-8 flex items-center justify-between relative z-20">
        {/* Independence Day Capsule */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-[#FF9933]/40 shadow-[0_0_15px_rgba(255,153,51,0.25)] text-xs font-semibold text-white">
          <span className="text-sm">🇮🇳</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9933] via-white to-[#138808]">
            15 August • Special Launch Edition
          </span>
        </div>

        {/* Audio Mute/Unmute Toggle */}
        <button
          onClick={() => {
            const nextSound = !soundEnabled;
            setSoundEnabled(nextSound);
            launchSoundEngine.setMuted(!nextSound);
            if (nextSound) {
              launchSoundEngine.playWelcomeChime();
            } else {
              launchSoundEngine.playClickTick();
            }
          }}
          className="p-2 rounded-xl bg-slate-900/80 border border-slate-700/80 hover:border-cyan-400 text-slate-300 hover:text-white transition flex items-center gap-1.5 text-xs backdrop-blur-md cursor-pointer"
          title={soundEnabled ? 'Mute Sound' : 'Enable Audio'}
        >
          {soundEnabled ? (
            <>
              <Volume2 className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span className="hidden sm:inline">Sound FX On</span>
            </>
          ) : (
            <>
              <VolumeX className="w-4 h-4 text-slate-400" />
              <span className="hidden sm:inline">Sound FX Muted</span>
            </>
          )}
        </button>
      </div>

      {/* 3. Center Stage: Branding, Futuristic Rocket & Countdown */}
      <div className="relative z-20 w-full max-w-2xl px-4 flex flex-col items-center justify-center my-auto text-center">
        
        {/* Branding Intro */}
        <div
          className={`space-y-3 transition-all duration-700 ${
            phase === 'opening'
              ? 'opacity-0 translate-y-4 scale-95'
              : phase === 'launching'
              ? 'opacity-30 -translate-y-8 scale-90'
              : 'opacity-100 translate-y-0 scale-100'
          }`}
        >
          {/* Logo */}
          <div className="inline-block p-1.5 rounded-2xl bg-[#050811]/90 border border-slate-700/80 shadow-[0_0_25px_rgba(0,240,255,0.2)]">
            <img
              src={brandLogo}
              alt="AVRX Logo"
              className="h-10 sm:h-12 w-auto object-contain rounded-xl brightness-110"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="space-y-1">
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-white uppercase">
              Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">AVRX</span>
            </h1>
            <p className="text-xs sm:text-sm font-medium text-slate-300">
              A New Digital Journey Begins Today.
            </p>
          </div>

          <div className="inline-flex items-center gap-1.5 text-xs text-slate-400 font-mono">
            <Compass className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
            <span>Digital • Financial • AI Solutions</span>
          </div>
        </div>

        {/* 4. Futuristic High-Tech Rocket Vehicle */}
        <div
          className={`relative my-6 sm:my-8 transition-all duration-1000 transform-gpu ${
            phase === 'launching'
              ? '-translate-y-[850px] scale-110 duration-[1500ms] ease-in'
              : phase === 'countdown'
              ? 'animate-[rocketVibrate_0.1s_ease-in-out_infinite]'
              : 'animate-[rocketHover_4s_ease-in-out_infinite]'
          }`}
        >
          {/* Rocket SVG Asset */}
          <div className="relative w-28 sm:w-36 h-48 sm:h-60 mx-auto filter drop-shadow-[0_10px_25px_rgba(0,240,255,0.3)]">
            <svg
              viewBox="0 0 160 260"
              className="w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Hull Titanium Gradient */}
                <linearGradient id="rocketBodyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0f172a" />
                  <stop offset="30%" stopColor="#334155" />
                  <stop offset="50%" stopColor="#f8fafc" />
                  <stop offset="70%" stopColor="#334155" />
                  <stop offset="100%" stopColor="#0f172a" />
                </linearGradient>

                {/* Left Fin Saffron */}
                <linearGradient id="saffronFin" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FF9933" />
                  <stop offset="100%" stopColor="#c2410c" />
                </linearGradient>

                {/* Right Fin Green */}
                <linearGradient id="greenFin" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#22c55e" />
                  <stop offset="100%" stopColor="#138808" />
                </linearGradient>

                {/* Visor Cyan Glow */}
                <linearGradient id="visorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="#0369a1" />
                </linearGradient>

                {/* Thruster Flame Gradient */}
                <linearGradient id="flameGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="25%" stopColor="#FF9933" />
                  <stop offset="65%" stopColor="#38bdf8" />
                  <stop offset="100%" stopColor="#138808" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Lateral Delta Wing Left (Saffron Accent) */}
              <path
                d="M48 135 L12 195 C10 200 15 206 22 204 L48 185 Z"
                fill="url(#saffronFin)"
                stroke="#FF9933"
                strokeWidth="1.5"
              />
              <circle cx="26" cy="198" r="2.5" fill="#ffffff" />

              {/* Lateral Delta Wing Right (Green Accent) */}
              <path
                d="M112 135 L148 195 C150 200 145 206 138 204 L112 185 Z"
                fill="url(#greenFin)"
                stroke="#22c55e"
                strokeWidth="1.5"
              />
              <circle cx="134" cy="198" r="2.5" fill="#ffffff" />

              {/* Main Fuselage Body */}
              <path
                d="M80 15 C62 55 48 105 48 190 L112 190 C112 105 98 55 80 15 Z"
                fill="url(#rocketBodyGrad)"
                stroke="#64748b"
                strokeWidth="1.5"
              />

              {/* High-Tech Aerodynamic Nose Cone Tip */}
              <path
                d="M80 15 C74 38 72 60 72 70 L88 70 C88 60 86 38 80 15 Z"
                fill="#0284c7"
                opacity="0.85"
              />

              {/* Cockpit / Sensor Glass Pod */}
              <ellipse
                cx="80"
                cy="95"
                rx="14"
                ry="18"
                fill="url(#visorGrad)"
                stroke="#e0f2fe"
                strokeWidth="1.5"
              />
              <ellipse
                cx="77"
                cy="90"
                rx="6"
                ry="9"
                fill="#ffffff"
                opacity="0.6"
              />

              {/* Center Hull AVRX Brand Decal */}
              <rect x="66" y="132" width="28" height="12" rx="3" fill="#050811" stroke="#0284c7" strokeWidth="0.8" />
              <text
                x="80"
                y="141"
                textAnchor="middle"
                fill="#38bdf8"
                fontSize="7"
                fontWeight="bold"
                fontFamily="sans-serif"
                letterSpacing="1"
              >
                AVRX
              </text>

              {/* Tricolour Hull Strakes */}
              <line x1="58" y1="160" x2="102" y2="160" stroke="#FF9933" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="60" y1="166" x2="100" y2="166" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
              <line x1="62" y1="172" x2="98" y2="172" stroke="#138808" strokeWidth="2.5" strokeLinecap="round" />

              {/* Base Engine Nozzle */}
              <path
                d="M60 190 L100 190 L94 205 L66 205 Z"
                fill="#1e293b"
                stroke="#475569"
                strokeWidth="1.5"
              />

              {/* Dynamic Ion Thruster Jet Flame */}
              <g className={phase === 'launching' ? 'scale-y-200' : ''}>
                <path
                  d="M68 205 Q80 255 80 255 Q80 255 92 205 Z"
                  fill="url(#flameGrad)"
                  className="animate-pulse"
                />
                {/* Core white-hot plasma column */}
                <path
                  d="M74 205 Q80 235 80 235 Q80 235 86 205 Z"
                  fill="#ffffff"
                  opacity="0.9"
                />
              </g>
            </svg>
          </div>

          {/* Engine Exhaust Glow Aura (Saffron/White/Green) */}
          <div
            className={`absolute -bottom-8 left-1/2 -translate-x-1/2 rounded-full transition-all duration-300 pointer-events-none ${
              phase === 'launching'
                ? 'w-48 h-72 bg-gradient-to-b from-white via-[#FF9933] to-[#138808] opacity-100 blur-2xl'
                : phase === 'countdown'
                ? 'w-24 h-32 bg-gradient-to-b from-[#FF9933] via-white to-[#138808] opacity-80 blur-xl animate-pulse'
                : 'w-16 h-20 bg-gradient-to-b from-cyan-400 via-[#FF9933] to-[#138808] opacity-40 blur-lg'
            }`}
          />
        </div>

        {/* 5. Countdown Display OR Launch Button */}
        <div className="relative z-30 min-h-[90px] flex items-center justify-center">
          {phase === 'countdown' || phase === 'launching' ? (
            <div className="flex flex-col items-center justify-center gap-2 animate-in zoom-in-50 duration-200">
              <div className="text-4xl sm:text-6xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#FF9933] via-white to-[#22c55e] filter drop-shadow-[0_0_20px_rgba(255,255,255,0.6)] font-mono">
                {countdownNum}
              </div>
              <span className="text-xs uppercase font-mono tracking-widest text-cyan-300 animate-pulse">
                Ignition Sequence Active
              </span>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-3">
              {/* Primary High-Impact Launch Button */}
              <button
                onClick={handleLaunchClick}
                onMouseEnter={() => launchSoundEngine.playHoverChirp()}
                disabled={phase === 'opening'}
                className="group relative px-8 sm:px-12 py-4 sm:py-5 rounded-2xl bg-slate-950/80 hover:bg-slate-900 border border-slate-700/80 backdrop-blur-xl shadow-[0_0_35px_rgba(0,240,255,0.35)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer overflow-hidden"
              >
                {/* Animated Tricolour Border Shimmer */}
                <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-r from-[#FF9933] via-white to-[#138808] opacity-75 blur-[1px] group-hover:opacity-100 group-hover:blur-[2px] transition duration-500 animate-[spin_6s_linear_infinite]" />
                
                {/* Button Inner Body */}
                <div className="relative z-10 px-4 py-1 rounded-[14px] bg-[#050811] flex flex-col items-center justify-center">
                  <div className="flex items-center gap-3 text-lg sm:text-2xl font-black text-white tracking-wide">
                    <span className="text-xl sm:text-2xl transform group-hover:-translate-y-1 transition-transform">🚀</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-emerald-300">
                      LAUNCH AVRX
                    </span>
                    <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" />
                  </div>
                  <span className="text-[11px] font-mono tracking-widest text-slate-400 group-hover:text-cyan-300 uppercase transition">
                    Enter the Future
                  </span>
                </div>
              </button>

              {/* Micro Subtitle */}
              <p className="text-xs text-slate-400 flex items-center gap-1.5 font-medium">
                <span>Proudly Celebrating India's Independence</span>
                <span>🇮🇳</span>
              </p>
            </div>
          )}
        </div>

      </div>

      {/* 6. Bottom Bar: Skip Option & Status */}
      <div className="w-full max-w-7xl mx-auto px-6 pb-6 sm:pb-8 flex items-center justify-between relative z-20 text-xs text-slate-400">
        <div className="hidden sm:flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="font-mono text-slate-400">AVRX Mission Control • Online</span>
        </div>

        {/* Skip Intro Button */}
        <button
          onClick={finishLaunch}
          className="ml-auto flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-slate-600 text-slate-400 hover:text-white transition cursor-pointer"
        >
          <span>Skip Intro</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* CSS Keyframes for Rocket hovering & vibration */}
      <style>{`
        @keyframes rocketHover {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-12px) rotate(0.5deg);
          }
        }
        @keyframes rocketVibrate {
          0% {
            transform: translate(1px, 1px) rotate(0deg);
          }
          25% {
            transform: translate(-1.5px, -1px) rotate(-0.5deg);
          }
          50% {
            transform: translate(1.5px, 0.5px) rotate(0.5deg);
          }
          75% {
            transform: translate(-1px, 1.5px) rotate(0deg);
          }
          100% {
            transform: translate(1px, -1px) rotate(-0.5deg);
          }
        }
      `}</style>
    </div>
  );
};
