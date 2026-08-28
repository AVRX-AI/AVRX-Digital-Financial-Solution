import React, { useState } from 'react';
import { Send, CheckCircle2, Phone, Mail, Building, User, MapPin, Sparkles, Loader2 } from 'lucide-react';
import { LeadItem } from '../../types/ai';

interface AILeadCaptureCardProps {
  initialServiceName?: string;
  initialPackageName?: string;
  initialRequirement?: string;
  sessionId: string;
  onSuccess: (lead: LeadItem, whatsappUrl: string) => void;
  onCancel?: () => void;
}

export const AILeadCaptureCard: React.FC<AILeadCaptureCardProps> = ({
  initialServiceName = 'Website & Digital Solutions',
  initialPackageName,
  initialRequirement = '',
  sessionId,
  onSuccess,
  onCancel
}) => {
  const [fullName, setFullName] = useState('');
  const [mobile, setMobile] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      setError('Please provide your Full Name');
      return;
    }
    const cleanPhone = mobile.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setError('Please provide a valid 10-digit Mobile Number');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/ai/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          full_name: fullName.trim(),
          mobile: mobile.trim(),
          whatsapp: mobile.trim(),
          business_name: businessName.trim() || undefined,
          city: city.trim() || undefined,
          service_name: initialServiceName,
          package_name: initialPackageName,
          requirement: initialRequirement || `Request for ${initialServiceName}`,
          source: 'AI Assistant',
          sessionId
        })
      });

      const data = await res.json();
      if (data.success && data.lead) {
        setSubmitted(true);
        setTimeout(() => {
          onSuccess(data.lead, data.whatsapp_url);
        }, 800);
      } else {
        setError(data.error || 'Failed to submit details. Please try again.');
      }
    } catch (err: any) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="my-2 p-3.5 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2.5 animate-in fade-in">
        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
        <div>
          <div className="font-bold text-white">Details Received Successfully!</div>
          <div className="text-[10px] text-emerald-300/90 mt-0.5">
            AVRX specialist team is reviewing your requirement.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="my-2 p-3.5 rounded-2xl bg-slate-900/95 border border-cyan-500/40 shadow-[0_0_25px_rgba(0,240,255,0.15)] space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-xs font-black text-white">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>Confirm Your Consultation Request</span>
        </div>
        {initialPackageName && (
          <span className="px-2 py-0.5 rounded-md bg-cyan-500/20 text-cyan-300 text-[9px] font-mono border border-cyan-500/30">
            {initialPackageName}
          </span>
        )}
      </div>

      <p className="text-[11px] text-slate-300">
        Fill your details to get a priority proposal & customized quote within 15 minutes.
      </p>

      {error && (
        <div className="p-2 rounded-xl bg-rose-950/80 border border-rose-500/50 text-rose-300 text-[10px]">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {/* Full Name */}
          <div className="relative">
            <User className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Your Full Name *"
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-8 pr-2.5 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
            />
          </div>

          {/* Mobile Number */}
          <div className="relative">
            <Phone className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
            <input
              type="tel"
              required
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="10-Digit Mobile / WhatsApp *"
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-8 pr-2.5 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
            />
          </div>

          {/* Business Name */}
          <div className="relative">
            <Building className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
            <input
              type="text"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              placeholder="Shop / Business Name (Optional)"
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-8 pr-2.5 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
            />
          </div>

          {/* City */}
          <div className="relative">
            <MapPin className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="City / State (Optional)"
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-8 pr-2.5 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 pt-1">
          {onCancel && (
            <button
              type="button"
              onClick={onCancel}
              className="px-3 py-1.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white text-[11px] font-bold cursor-pointer"
            >
              Cancel
            </button>
          )}

          <button
            type="submit"
            disabled={loading}
            className="flex-1 py-2 px-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:brightness-110 text-slate-950 font-black text-xs flex items-center justify-center gap-1.5 transition cursor-pointer disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                <span>Processing...</span>
              </>
            ) : (
              <>
                <Send className="w-3.5 h-3.5" />
                <span>Submit & Connect with Specialist</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
