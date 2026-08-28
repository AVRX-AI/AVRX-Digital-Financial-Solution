import React, { useState } from 'react';
import { Sparkles, Bot, MessageSquare } from 'lucide-react';
import { AIChatModal } from '../ai/AIChatModal';

interface AskAVRXAIFloatingProps {
  onNavigate: (page: string, slug?: string) => void;
}

export const AskAVRXAIFloating: React.FC<AskAVRXAIFloatingProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Futuristic Trigger Pill */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          onClick={() => setIsOpen(true)}
          className="group relative px-4 py-3 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border border-cyan-500/40 hover:border-cyan-400 rounded-full shadow-[0_0_30px_rgba(0,240,255,0.3)] hover:shadow-[0_0_40px_rgba(0,240,255,0.5)] transition transform hover:-translate-y-0.5 flex items-center gap-2.5 cursor-pointer backdrop-blur-xl"
          aria-label="Open AVRX AI Assistant"
        >
          {/* Glowing pulse aura */}
          <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-30 group-hover:opacity-60 blur transition duration-300 pointer-events-none" />

          {/* Animated Avatar Icon */}
          <div className="relative w-7 h-7 rounded-full bg-cyan-500/20 border border-cyan-400/50 flex items-center justify-center text-cyan-300">
            <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
          </div>

          {/* Label */}
          <div className="relative text-left pr-1">
            <div className="text-xs font-black text-white flex items-center gap-1.5">
              <span>AVRX AI Assistant</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            </div>
            <div className="text-[9px] text-cyan-300 font-mono tracking-wider">AI CHAT & VOICE</div>
          </div>
        </button>
      </div>

      {/* Futuristic Full AI Chat & Voice Assistant Modal */}
      <AIChatModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onNavigate={onNavigate}
      />
    </>
  );
};
