import React from 'react';
import { MessageSquare } from 'lucide-react';
import { SITE_CONFIG } from '../../config';

export const WhatsAppButton: React.FC = () => {
  const handleClick = () => {
    const encodedMsg = encodeURIComponent(SITE_CONFIG.contact.defaultWhatsAppMessage);
    const url = `https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${encodedMsg}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Chat with AVRX on WhatsApp"
      id="whatsapp-floating-btn"
      className="fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-40 group flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-full shadow-[0_4px_25px_rgba(16,185,129,0.4)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
    >
      <div className="relative">
        <MessageSquare className="w-5 h-5 text-slate-950 fill-current" />
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full animate-ping" />
      </div>
      <span className="hidden sm:inline text-xs sm:text-sm font-bold tracking-wide">
        Chat with AVRX
      </span>
    </button>
  );
};
