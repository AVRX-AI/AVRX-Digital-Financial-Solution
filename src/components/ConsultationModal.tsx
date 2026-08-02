import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Sparkles, Send, PhoneCall } from 'lucide-react';
import { ServiceItem } from '../types';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService: ServiceItem | null;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  selectedService
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [requirement, setRequirement] = useState(
    selectedService ? `I am interested in ${selectedService.title} (${selectedService.startingPrice})` : ''
  );
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
    setTimeout(() => {
      // Keep state showing submitted
    }, 1500);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setName('');
    setPhone('');
    setEmail('');
    setCity('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#081B33] border border-cyan-400/40 rounded-3xl max-w-xl w-full p-6 sm:p-8 relative shadow-2xl overflow-hidden">
        {/* Background gradient effect */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center space-x-2 text-cyan-300 text-xs font-bold mb-2">
              <Sparkles className="w-4 h-4" />
              <span>FREE PAN-INDIA STRATEGY SESSION</span>
            </div>
            <h3 className="text-2xl font-black text-white">
              {selectedService ? `Book "${selectedService.title}"` : 'Book 1-on-1 Consultation Call'}
            </h3>
            <p className="text-xs text-white/70 mt-1 mb-6">
              Connect directly with our Senior Tech Architects & Chartered Accountants. Zero consulting fee.
            </p>

            {selectedService && (
              <div className="mb-6 p-3.5 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-cyan-300">{selectedService.title}</div>
                  <div className="text-[11px] text-white/60">Estimated Timeline: {selectedService.estimatedTimeline}</div>
                </div>
                <span className="text-xs font-extrabold text-white">{selectedService.startingPrice}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-white/80 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Avinash Rai"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/20 text-white text-xs focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white/80 mb-1">WhatsApp / Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +91 96306 61536"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/20 text-white text-xs focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-white/80 mb-1">Email Address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/20 text-white text-xs focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white/80 mb-1">City / State</label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g. New Delhi / Pune / Pan India"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/20 text-white text-xs focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-white/80 mb-1">Project or Financial Requirement</label>
                <textarea
                  rows={3}
                  value={requirement}
                  onChange={(e) => setRequirement(e.target.value)}
                  placeholder="Describe your goals (e.g., Build custom React e-commerce website, check ₹25L MSME loan eligibility, file GST returns)..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/20 text-white text-xs focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#0A66FF] to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-extrabold text-sm shadow-lg shadow-blue-500/30 flex items-center justify-center space-x-2 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Request Free 1-on-1 Consultation Call</span>
                </button>
              </div>

              <div className="flex items-center justify-center space-x-2 pt-2 text-[11px] text-white/60">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Your contact details are 100% confidential & encrypted. Zero spam guaranteed.</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-400/40 flex items-center justify-center mx-auto shadow-lg">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="text-2xl font-extrabold text-white">Consultation Request Received!</h3>
            <p className="text-sm text-white/80 max-w-sm mx-auto">
              Thank you <span className="text-cyan-300 font-bold">{name}</span>. An AVRX Senior Strategy Architect will call your WhatsApp/Phone <span className="text-emerald-400 font-bold">{phone}</span> within 15 minutes.
            </p>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 max-w-sm mx-auto text-left text-xs text-white/70 space-y-1">
              <div className="font-bold text-white">What happens next?</div>
              <div>1. We review your requirement & prepare a tailored roadmap.</div>
              <div>2. You receive an itemized fixed-price proposal with zero hidden fees.</div>
            </div>

            <div className="pt-4">
              <button
                onClick={handleResetAndClose}
                className="px-8 py-3 rounded-xl bg-gradient-to-r from-[#0A66FF] to-cyan-500 text-white font-bold text-xs"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
