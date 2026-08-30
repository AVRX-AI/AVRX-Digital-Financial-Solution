import React, { useState, useEffect } from 'react';
import { Sparkles, Volume2, VolumeX, ArrowRight, Compass, Heart } from 'lucide-react';
import brandLogo from '../../assets/images/avrx_white_logo_1786467039540.jpg';
import { launchSoundEngine } from '../../utils/launchSoundEngine';

interface AVRXLaunchScreenProps {
  onComplete: () => void;
}

export const AVRXLaunchScreen: React.FC<AVRXLaunchScreenProps> = ({ onComplete }) => {
  // Animation phases: 'opening' | 'ready' | 'launching' | 'transition'
  const [phase, setPhase] = useState<'opening' | 'ready' | 'launching' | 'transition'>('opening');
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

    // Opening cinematic transition timer -> set to 'ready' after 1s
    const timer = setTimeout(() => {
      setPhase('ready');
    }, 1000);

    // Prevent body scrolling during launch screen
    document.body.style.overflow = 'hidden';

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
    };
  }, []);

  // Direct Launch trigger (NO COUNTDOWN)
  const handleLaunchClick = () => {
    if (phase !== 'ready') return;

    // Trigger Iron Man JARVIS voice greeting ("Hello, Welcome to AVRX")
    launchSoundEngine.speakWelcomeToAVRX();

    if (reducedMotion) {
      finishLaunch();
      return;
    }

    // Immediate festive entry
    setPhase('launching');

    // Smooth direct transition into website (600ms ascent)
    setTimeout(() => {
      setPhase('transition');
      setTimeout(() => {
        finishLaunch();
      }, 350);
    }, 650);
  };

  const finishLaunch = () => {
    launchSoundEngine.speakWelcomeToAVRX();
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
      className={`fixed inset-0 z-50 overflow-hidden select-none bg-[#0a020f] text-white flex flex-col items-center justify-between transition-all duration-700 ${
        phase === 'transition' ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100'
      }`}
      style={{
        perspective: '1200px',
      }}
    >
      {/* 1. Atmospheric Festive Raksha Bandhan Background with Golden & Crimson Nebulae */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top-Left Sacred Saffron / Gold Aura */}
        <div className="absolute -top-32 -left-32 w-[550px] sm:w-[750px] h-[550px] bg-gradient-to-br from-amber-500/25 via-[#FF9933]/15 to-transparent rounded-full blur-[140px] animate-pulse" />

        {/* Center Vermilion Rose Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1000px] h-[600px] bg-gradient-to-tr from-rose-600/15 via-amber-500/10 to-yellow-500/15 rounded-full blur-[160px]" />

        {/* Bottom-Right Kumkum Ruby Nebula Aura */}
        <div className="absolute -bottom-32 -right-32 w-[550px] sm:w-[750px] h-[550px] bg-gradient-to-tl from-rose-700/25 via-amber-600/15 to-transparent rounded-full blur-[140px] animate-pulse" />

        {/* High-Tech Festive Grid Horizon Layer */}
        <div
          className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#f59e0b_1px,transparent_1px),linear-gradient(to_bottom,#f43f5e_1px,transparent_1px)] bg-[size:48px_48px]"
          style={{
            maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 30%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 30%, transparent 80%)',
          }}
        />

        {/* Dynamic Festive Sparkle & Petal Particles */}
        <div
          className={`absolute inset-0 transition-transform duration-1000 ${
            phase === 'launching' ? 'translate-y-[200%] scale-y-150 duration-700' : ''
          }`}
        >
          {Array.from({ length: 45 }).map((_, i) => {
            const size = (i % 3) + 2;
            const colors = ['#F59E0B', '#FF9933', '#E11D48', '#FBBF24', '#F43F5E', '#FEF08A'];
            const color = colors[i % colors.length];
            return (
              <span
                key={i}
                className="absolute rounded-full animate-pulse"
                style={{
                  top: `${(i * 17) % 100}%`,
                  left: `${(i * 23) % 100}%`,
                  width: `${size}px`,
                  height: `${size}px`,
                  backgroundColor: color,
                  opacity: (i % 5) * 0.15 + 0.3,
                  boxShadow: `0 0 ${size * 3}px ${color}`,
                  animationDuration: `${(i % 4) + 2}s`,
                }}
              />
            );
          })}
        </div>
      </div>

      {/* 2. Top Header Bar: Sound Controls & Raksha Bandhan Capsule */}
      <div className="w-full max-w-7xl mx-auto px-6 pt-6 sm:pt-8 flex items-center justify-between relative z-20">
        {/* Raksha Bandhan Capsule */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-950/90 backdrop-blur-md border border-amber-400/50 shadow-[0_0_20px_rgba(245,158,11,0.3)] text-xs font-bold text-white">
          <span className="text-sm">🪢</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-rose-300 to-yellow-300">
            ✨ रक्षाबंधन महापर्व स्पेशल
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
        </div>

        {/* Audio Mute/Unmute Toggle */}
        <button
          onClick={() => {
            const nextSound = !soundEnabled;
            setSoundEnabled(nextSound);
            launchSoundEngine.setMuted(!nextSound);
            if (nextSound) {
              launchSoundEngine.speakWelcomeToAVRX();
            }
          }}
          className="p-2 rounded-xl bg-slate-900/80 border border-slate-700/80 hover:border-amber-400 text-slate-300 hover:text-white transition flex items-center gap-1.5 text-xs backdrop-blur-md cursor-pointer"
          title={soundEnabled ? 'Mute Voice' : 'Enable Voice'}
        >
          {soundEnabled ? (
            <>
              <Volume2 className="w-4 h-4 text-amber-400 animate-pulse" />
              <span className="hidden sm:inline">Voice Audio On</span>
            </>
          ) : (
            <>
              <VolumeX className="w-4 h-4 text-slate-400" />
              <span className="hidden sm:inline">Voice Muted</span>
            </>
          )}
        </button>
      </div>

      {/* 3. Center Stage: Branding, Raksha Bandhan Emblem Motif & Welcome */}
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
          <div className="inline-block p-1 sm:p-1.5 rounded-2xl bg-[#0a020f]/90 border border-amber-400/50 shadow-[0_0_25px_rgba(245,158,11,0.3)]">
            <img
              src={brandLogo}
              alt="AVRX Logo"
              className="h-8 sm:h-10 w-auto max-h-10 object-contain rounded-xl brightness-110"
              style={{ height: '38px', maxHeight: '42px', width: 'auto' }}
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="space-y-1">
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-white uppercase">
              Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-rose-400">AVRX</span>
            </h1>
            <p className="text-xs sm:text-sm font-semibold text-amber-200/90 flex items-center justify-center gap-1.5">
              <span>सुरक्षा, विश्वास और सफलता का अटूट बंधन</span>
              <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400 inline" />
            </p>
          </div>

          <div className="inline-flex items-center gap-1.5 text-xs text-amber-300/80 font-mono">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" />
            <span>Digital • Financial • AI Solutions</span>
          </div>
        </div>

        {/* 4. Rakhi Decorative Sacred Emblem */}
        <div
          className={`relative my-6 sm:my-8 transition-all duration-1000 transform-gpu ${
            phase === 'launching'
              ? '-translate-y-[850px] scale-110 duration-[1500ms] ease-in'
              : 'animate-[rocketHover_4s_ease-in-out_infinite]'
          }`}
        >
          {/* Rakhi SVG Centerpiece */}
          <div className="relative w-32 sm:w-44 h-40 sm:h-48 mx-auto filter drop-shadow-[0_10px_30px_rgba(245,158,11,0.4)] flex items-center justify-center">
            
            {/* Left Thread */}
            <div className="absolute left-0 w-12 sm:w-16 h-[2px] bg-gradient-to-r from-transparent via-[#FF9933] to-[#E11D48]" />
            {/* Right Thread */}
            <div className="absolute right-0 w-12 sm:w-16 h-[2px] bg-gradient-to-l from-transparent via-[#FF9933] to-[#E11D48]" />

            {/* Glowing Floral Ring (Outer Golden Sun Petals) */}
            <div className="w-24 sm:w-32 h-24 sm:h-32 rounded-full bg-gradient-to-tr from-[#E11D48] via-[#FF9933] to-[#F59E0B] p-[2px] shadow-[0_0_35px_rgba(245,158,11,0.8)] flex items-center justify-center animate-[spin_18s_linear_infinite]">
              <div className="w-full h-full rounded-full border-2 border-dashed border-yellow-300 bg-[#160410] flex items-center justify-center">
                <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-gradient-to-br from-rose-600 via-amber-500 to-yellow-400 p-[1.5px] flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-[#1e0516] flex items-center justify-center text-3xl sm:text-4xl shadow-inner">
                    🪢
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Vermilion Bead */}
            <div className="absolute -top-1 w-3 h-3 rounded-full bg-yellow-300 border border-amber-600 shadow-[0_0_10px_rgba(253,224,71,0.9)]" />
            <div className="absolute -bottom-1 w-3 h-3 rounded-full bg-yellow-300 border border-amber-600 shadow-[0_0_10px_rgba(253,224,71,0.9)]" />
          </div>

          {/* Golden Aura Glow */}
          <div
            className={`absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-full transition-all duration-300 pointer-events-none ${
              phase === 'launching'
                ? 'w-48 h-72 bg-gradient-to-b from-yellow-300 via-amber-500 to-rose-600 opacity-100 blur-2xl'
                : 'w-24 h-24 bg-gradient-to-b from-amber-400 via-rose-500 to-yellow-500 opacity-50 blur-xl animate-pulse'
            }`}
          />
        </div>

        {/* 5. Direct Launch Action */}
        <div className="relative z-30 min-h-[90px] flex items-center justify-center">
          {phase === 'launching' ? (
            <div className="flex flex-col items-center justify-center gap-2 animate-in zoom-in-75 duration-200">
              <div className="text-3xl sm:text-5xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-100 to-rose-400 filter drop-shadow-[0_0_20px_rgba(245,158,11,0.6)] font-mono">
                ✨ ENTERING AVRX
              </div>
              <span className="text-xs uppercase font-mono tracking-widest text-amber-300 animate-pulse">
                Happy Raksha Bandhan • Happy Growth
              </span>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-3">
              {/* Primary High-Impact Direct Launch Button */}
              <button
                onClick={handleLaunchClick}
                disabled={phase === 'opening'}
                className="group relative px-8 sm:px-12 py-4 sm:py-5 rounded-2xl bg-slate-950/90 hover:bg-slate-900 border border-amber-400/60 backdrop-blur-xl shadow-[0_0_35px_rgba(245,158,11,0.4)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer overflow-hidden"
              >
                {/* Animated Festive Border Shimmer */}
                <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-r from-[#FF9933] via-yellow-200 to-[#E11D48] opacity-85 blur-[1px] group-hover:opacity-100 group-hover:blur-[2px] transition duration-500 animate-[spin_6s_linear_infinite]" />
                
                {/* Button Inner Body */}
                <div className="relative z-10 px-4 py-1 rounded-[14px] bg-[#0c0211] flex flex-col items-center justify-center">
                  <div className="flex items-center gap-3 text-lg sm:text-2xl font-black text-white tracking-wide">
                    <span className="text-xl sm:text-2xl transform group-hover:scale-110 transition-transform">🪢</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-100 to-rose-300">
                      ENTER AVRX ECOSYSTEM
                    </span>
                    <Sparkles className="w-5 h-5 text-amber-400 animate-pulse" />
                  </div>
                  <span className="text-[11px] font-mono tracking-widest text-amber-300/80 group-hover:text-amber-200 uppercase transition">
                    सुरक्षा और विश्वास • Explore All Solutions
                  </span>
                </div>
              </button>

              {/* Micro Subtitle */}
              <p className="text-xs text-amber-200/80 flex items-center gap-1.5 font-medium">
                <span>Happy Raksha Bandhan 2026</span>
                <span>✨</span>
              </p>
            </div>
          )}
        </div>

      </div>

      {/* 6. Bottom Bar: Skip Option & Status */}
      <div className="w-full max-w-7xl mx-auto px-6 pb-6 sm:pb-8 flex items-center justify-between relative z-20 text-xs text-slate-400">
        <div className="hidden sm:flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
          <span className="font-mono text-amber-200/80">AVRX Digital + Financial Command Center • Online</span>
        </div>

        {/* Skip Intro Button */}
        <button
          onClick={finishLaunch}
          className="ml-auto flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-amber-500/40 hover:border-amber-400 text-amber-200 hover:text-white transition cursor-pointer"
        >
          <span>Skip Intro</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* CSS Keyframes for hovering */}
      <style>{`
        @keyframes rocketHover {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(0.5deg);
          }
        }
      `}</style>
    </div>
  );
};

