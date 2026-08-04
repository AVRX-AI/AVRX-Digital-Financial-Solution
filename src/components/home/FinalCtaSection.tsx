import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  PhoneCall,
  MessageCircle,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export default function FinalCtaSection() {
  const handleWhatsAppClick = () => {
    const phoneNumber = '919876543210';
    const message = encodeURIComponent('Hello AVRX Team, I would like to schedule an Executive Consultation for Digital/Financial Solutions.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section className="py-24 bg-[#050609] border-t border-white/10 relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[400px] bg-gradient-to-r from-blue-600/15 to-cyan-500/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-card p-10 sm:p-16 rounded-3xl border border-white/15 bg-gradient-to-r from-blue-900/30 via-[#0B0D15]/90 to-cyan-900/30 shadow-2xl relative overflow-hidden">
          {/* Decorative Corner Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Headline */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>BEGIN YOUR DIGITAL & FINANCIAL UPGRADE</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-poppins font-extrabold text-white tracking-tight leading-tight">
                Ready to Experience <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
                  CRED-Level Craftsmanship?
                </span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
                Whether you need a sub-second website, ₹20 Crore collateral-free business loan, or same-day GST filing, our Executive Solution Architects are ready to assist.
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>30-Minute Free Strategy Call</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>Strict NDA & Data Privacy</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-400" />
                  <span>No Obligation Proposal</span>
                </div>
              </div>
            </div>

            {/* Right Action CTA Card */}
            <div className="lg:col-span-5">
              <div className="p-8 rounded-3xl bg-[#0D101A] border border-white/15 shadow-2xl space-y-6">
                <div className="text-center space-y-1 border-b border-white/10 pb-5">
                  <h3 className="font-poppins font-bold text-lg text-white">Direct Executive Desk</h3>
                  <p className="text-xs text-slate-400">Response guaranteed within 15 minutes during business hours</p>
                </div>

                <div className="space-y-3">
                  <Link
                    to="/contact"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-sm shadow-xl shadow-blue-500/25 flex items-center justify-center gap-2 transition-all group"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>Book Consultation Call</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <button
                    onClick={handleWhatsAppClick}
                    className="w-full py-4 rounded-xl bg-green-600 hover:bg-green-500 text-white font-bold text-sm shadow-xl shadow-green-600/25 flex items-center justify-center gap-2 transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Instant WhatsApp Chat</span>
                  </button>
                </div>

                <div className="pt-2 text-center text-xs text-slate-400">
                  Prefer direct email? Reach us at <span className="text-white font-semibold">support@avrxdigital.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
