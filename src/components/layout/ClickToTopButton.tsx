import React, { useState, useEffect } from 'react';
import { ArrowUp, Sparkles } from 'lucide-react';

export default function ClickToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    toggleVisibility(); // check on mount

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center group pointer-events-auto transition-all duration-300 animate-in fade-in slide-in-from-bottom-6">
      {/* Glow aura background */}
      <div className="absolute -inset-2 rounded-full bg-cyan-500/30 blur-xl group-hover:bg-cyan-400/50 transition duration-500 animate-pulse" />

      {/* Main Clickable 'A' Letter Button */}
      <button
        onClick={scrollToTop}
        aria-label="Click to top"
        title="Click to Top"
        className="relative flex flex-col items-center justify-center p-1 transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none"
      >
        <svg
          width="110"
          height="100"
          viewBox="0 0 110 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="filter drop-shadow-[0_0_15px_rgba(6,182,212,0.6)] group-hover:drop-shadow-[0_0_25px_rgba(6,182,212,0.9)] transition-all duration-300"
        >
          <defs>
            <linearGradient id="aGradientBorder" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>

            <linearGradient id="aBodyFill" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0B0F19" stopOpacity="0.98" />
              <stop offset="100%" stopColor="#030712" stopOpacity="0.98" />
            </linearGradient>

            <linearGradient id="crossbarGlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>

          {/* Outer 'A' Letter Silhouette Path */}
          <path
            d="M 55 5 L 104 92 H 81 L 70 67 H 40 L 29 92 H 6 Z"
            fill="url(#aBodyFill)"
            stroke="url(#aGradientBorder)"
            strokeWidth="3"
            strokeLinejoin="round"
          />

          {/* Inner Triangular Window of 'A' */}
          <path
            d="M 55 22 L 64 47 H 46 Z"
            fill="#061224"
            stroke="url(#aGradientBorder)"
            strokeWidth="2"
            strokeLinejoin="round"
          />

          {/* Upward Arrow in Upper Peak of 'A' */}
          <path
            d="M 55 28 L 60 38 H 50 Z"
            fill="#22d3ee"
            className="animate-bounce"
          />

          {/* Crossbar Accent Bar */}
          <rect
            x="24"
            y="54"
            width="62"
            height="18"
            rx="5"
            fill="#082f49"
            stroke="url(#crossbarGlow)"
            strokeWidth="1.5"
          />

          {/* Text inside the Crossbar Bar */}
          <text
            x="55"
            y="66"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="7.5"
            fontWeight="900"
            fontFamily="sans-serif"
            letterSpacing="0.8px"
            className="select-none tracking-widest drop-shadow-[0_0_4px_rgba(34,211,238,0.9)]"
          >
            CLICK TO TOP
          </text>
        </svg>

        {/* Floating Text Pill underneath for extra accessibility */}
        <div className="-mt-2 px-3 py-0.5 rounded-full bg-cyan-950/90 border border-cyan-400/60 text-[10px] font-black text-cyan-300 group-hover:text-white group-hover:bg-cyan-500 transition-all shadow-xl flex items-center gap-1 uppercase tracking-wider">
          <ArrowUp className="w-3 h-3 text-cyan-300 group-hover:text-white group-hover:-translate-y-0.5 transition-transform" />
          <span>CLICK TO TOP</span>
        </div>
      </button>
    </div>
  );
}
