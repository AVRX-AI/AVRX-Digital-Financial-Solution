import React from 'react';
import { CheckCircle2, AlertTriangle, Phone, MessageCircle, X, ArrowRight, Mail } from 'lucide-react';

export interface SubmissionFeedbackModalProps {
  isOpen: boolean;
  type: 'success' | 'error';
  title?: string;
  message?: string;
  leadId?: string;
  onClose: () => void;
  onRetry?: () => void;
}

export const SubmissionFeedbackModal: React.FC<SubmissionFeedbackModalProps> = ({
  isOpen,
  type,
  title,
  message,
  leadId,
  onClose,
  onRetry
}) => {
  if (!isOpen) return null;

  const isSuccess = type === 'success';

  const defaultTitle = isSuccess ? 'Thank You!' : 'Something went wrong';
  const defaultMessage = isSuccess
    ? "Your enquiry has been successfully submitted. We've received your details and sent a confirmation email to your email address. Our team will contact you shortly."
    : "We couldn't submit your enquiry right now. Please try again or contact us directly.";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 shadow-2xl space-y-6 text-center overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle background glow */}
        <div
          className={`absolute -top-24 -left-24 w-48 h-48 rounded-full blur-3xl pointer-events-none ${
            isSuccess ? 'bg-emerald-500/20' : 'bg-red-500/20'
          }`}
        />
        <div
          className={`absolute -bottom-24 -right-24 w-48 h-48 rounded-full blur-3xl pointer-events-none ${
            isSuccess ? 'bg-cyan-500/20' : 'bg-amber-500/20'
          }`}
        />

        {/* Close Icon */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Status Icon */}
        <div className="flex justify-center pt-2">
          {isSuccess ? (
            <div className="w-20 h-20 rounded-3xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.25)] animate-bounce-short">
              <CheckCircle2 className="w-10 h-10" />
            </div>
          ) : (
            <div className="w-20 h-20 rounded-3xl bg-red-500/15 border border-red-500/30 text-red-400 flex items-center justify-center shadow-[0_0_30px_rgba(239,68,68,0.25)]">
              <AlertTriangle className="w-10 h-10" />
            </div>
          )}
        </div>

        {/* Text Content */}
        <div className="space-y-3">
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            {title || defaultTitle}
          </h3>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-md mx-auto">
            {message || defaultMessage}
          </p>

          {isSuccess && (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/90 border border-slate-700/80 text-cyan-300 text-xs font-mono">
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>Confirmation Email Dispatched</span>
              {leadId && <span className="text-slate-400">({leadId})</span>}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          {isSuccess ? (
            <>
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm transition"
              >
                Close &amp; Continue
              </button>

              <a
                href={`https://wa.me/919630661536?text=Hello%20AVRX%20Team,%20I%20have%20submitted%20an%20enquiry${
                  leadId ? `%20(Ref:%20${leadId})` : ''
                }.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-sm shadow-[0_0_20px_rgba(16,185,129,0.3)] transition flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us Now</span>
              </a>
            </>
          ) : (
            <>
              {onRetry && (
                <button
                  onClick={onRetry}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition flex items-center justify-center gap-2"
                >
                  <span>Try Again</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}

              <a
                href="tel:+919630661536"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm transition flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>Call +91 96306 61536</span>
              </a>

              <a
                href="https://wa.me/919630661536?text=Hello%20AVRX%20Team,%20I%20am%20facing%20an%20issue%20submitting%20the%20website%20form."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 font-bold text-sm transition flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Us</span>
              </a>
            </>
          )}
        </div>

      </div>
    </div>
  );
};
