import React from 'react';
import { MessageSquare, PhoneCall, ArrowRight, ShieldCheck } from 'lucide-react';

interface AIHumanHandoffCardProps {
  whatsappUrl?: string;
  onOpenForm: () => void;
}

export const AIHumanHandoffCard: React.FC<AIHumanHandoffCardProps> = ({
  whatsappUrl = 'https://wa.me/919630661536',
  onOpenForm
}) => {
  return (
    <div className="my-2.5 p-3.5 rounded-2xl bg-gradient-to-r from-cyan-950/70 via-slate-900 to-blue-950/70 border border-cyan-500/40 shadow-lg space-y-3">
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400">
          <PhoneCall className="w-3.5 h-3.5" />
        </div>
        <div>
          <h4 className="text-xs font-black text-white">Connect with AVRX Senior Specialist</h4>
          <p className="text-[10px] text-slate-400">Immediate WhatsApp or Direct Phone Consultation</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {/* Instant WhatsApp */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition shadow"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Chat on WhatsApp</span>
        </a>

        {/* Request Call Back */}
        <button
          onClick={onOpenForm}
          className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 hover:text-white border border-cyan-500/30 text-xs font-bold flex items-center justify-center gap-1.5 transition cursor-pointer"
        >
          <span>Request Instant Call Back</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>

      <div className="flex items-center gap-1.5 text-[9px] text-slate-400 pt-0.5">
        <ShieldCheck className="w-3 h-3 text-cyan-400" />
        <span>Working Hours: 10:00 AM – 07:00 PM IST (Mon – Sat) | Priority Support</span>
      </div>
    </div>
  );
};
