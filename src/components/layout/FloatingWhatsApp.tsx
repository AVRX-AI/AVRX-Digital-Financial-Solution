import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles, Check } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('Website Development & AI');

  const predefinedTopics = [
    { label: 'Website Development & AI', text: 'Hi AVRX Team, I am interested in custom Website Development / AI Solutions.' },
    { label: 'Instant Business / Home Loan', text: 'Hi AVRX Team, I need assistance regarding an Instant Personal / Business / Home Loan.' },
    { label: 'GST, Tax & ITR Filing', text: 'Hi AVRX Team, I would like to consult regarding GST filing / Tax Solutions / Incorporation.' },
    { label: 'Insurance Comparison', text: 'Hi AVRX Team, I need help comparing Health / Motor / Term Life Insurance plans.' },
  ];

  const handleWhatsAppRedirect = (messageText: string) => {
    const phoneNumber = '919876543210';
    const encodedMessage = encodeURIComponent(messageText);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start">
      {/* Quick WhatsApp Drawer */}
      {isOpen && (
        <div className="w-80 mb-4 rounded-3xl glass-card bg-[#0B0D13]/95 border border-green-500/30 shadow-2xl shadow-green-950/40 p-5 space-y-4 animate-in fade-in slide-in-from-bottom-6 duration-300">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-green-500/20 text-green-400 flex items-center justify-center border border-green-500/30">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <div className="font-poppins font-bold text-sm text-white">AVRX WhatsApp Desk</div>
                <div className="text-[11px] text-green-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span>Typically replies in 3 mins</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-2">
            <div className="text-xs text-slate-300 font-medium">Select your topic for instant chat:</div>
            {predefinedTopics.map((topic, idx) => (
              <button
                key={idx}
                onClick={() => handleWhatsAppRedirect(topic.text)}
                className="w-full text-left p-2.5 rounded-xl bg-white/5 hover:bg-green-500/15 border border-white/10 hover:border-green-500/40 transition-all group flex items-center justify-between"
              >
                <span className="text-xs font-medium text-slate-200 group-hover:text-green-300">
                  {topic.label}
                </span>
                <Send className="w-3.5 h-3.5 text-slate-400 group-hover:text-green-400 group-hover:translate-x-0.5 transition-all" />
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-white/10 text-center">
            <button
              onClick={() => handleWhatsAppRedirect('Hello AVRX Team, I would like to speak with a consultant.')}
              className="w-full py-2.5 rounded-xl bg-green-600 hover:bg-green-500 text-white font-semibold text-xs shadow-lg shadow-green-600/30 flex items-center justify-center gap-2 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Start Direct WhatsApp Chat</span>
            </button>
          </div>
        </div>
      )}

      {/* WhatsApp Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-green-600 to-emerald-500 text-white shadow-2xl shadow-green-500/40 hover:shadow-green-500/60 hover:scale-105 transition-all duration-300 flex items-center justify-center relative group"
        aria-label="Connect on WhatsApp"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <>
            <MessageCircle className="w-6 h-6" />
            <span className="absolute -top-1 -left-1 w-3.5 h-3.5 bg-green-300 rounded-full border-2 border-[#08090C]" />
          </>
        )}
      </button>
    </div>
  );
}
