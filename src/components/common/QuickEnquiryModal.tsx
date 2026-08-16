import React, { useState, useEffect } from 'react';
import { X, Send, RefreshCw, CheckCircle2, MessageSquare, Phone, Mail } from 'lucide-react';
import { submitLeadForm } from '../../utils/formSubmit';
import { SubmissionFeedbackModal } from './SubmissionFeedbackModal';

export interface QuickEnquiryModalProps {
  isOpen: boolean;
  defaultService?: string;
  sourceTitle?: string;
  onClose: () => void;
}

export const QuickEnquiryModal: React.FC<QuickEnquiryModalProps> = ({
  isOpen,
  defaultService = 'Digital Solutions',
  sourceTitle = 'Direct Service Request',
  onClose
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    serviceCategory: defaultService,
    message: '',
    website_hp: ''
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [feedback, setFeedback] = useState<{
    isOpen: boolean;
    type: 'success' | 'error';
    leadId?: string;
    message?: string;
  }>({
    isOpen: false,
    type: 'success'
  });

  useEffect(() => {
    if (defaultService) {
      setFormData(prev => ({ ...prev, serviceCategory: defaultService }));
    }
  }, [defaultService]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    setErrorMessage('');
    setLoading(true);

    const res = await submitLeadForm({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      location: formData.location,
      serviceCategory: formData.serviceCategory,
      subject: `Enquiry for ${formData.serviceCategory}`,
      message: formData.message,
      sourcePage: `Modal – ${sourceTitle}`,
      formType: 'Quick Enquiry Modal',
      website_hp: formData.website_hp
    });

    setLoading(false);

    if (res.success) {
      setFeedback({
        isOpen: true,
        type: 'success',
        leadId: res.leadId,
        message: res.message
      });
    } else {
      setFeedback({
        isOpen: true,
        type: 'error',
        message: res.message
      });
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
        <div
          className="relative w-full max-w-xl rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 shadow-2xl space-y-6 overflow-hidden max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="space-y-2 pr-8">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
              Instant Consultation &amp; Quote
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Request {formData.serviceCategory}
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm">
              Enter your details below. You will receive an instant confirmation email and our team will get in touch shortly.
            </p>
          </div>

          {errorMessage && (
            <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs font-semibold">
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            {/* Honeypot Field */}
            <input
              type="text"
              name="website_hp"
              value={formData.website_hp}
              onChange={e => setFormData({ ...formData, website_hp: e.target.value })}
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300 uppercase">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Rahul Verma"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300 uppercase">Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300 uppercase">Email Address *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  placeholder="rahul@example.com"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300 uppercase">City / State</label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={e => setFormData({ ...formData, location: e.target.value })}
                  placeholder="e.g. Raipur, CG"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300 uppercase">Service Category</label>
              <select
                value={formData.serviceCategory}
                onChange={e => setFormData({ ...formData, serviceCategory: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400"
              >
                <option value="Digital Solutions">Digital Solutions (Website, App, SEO)</option>
                <option value="Personal Loan">Personal Loan (from 10.5% p.a.)</option>
                <option value="Business Loan">Business Loan (up to ₹1 Crore)</option>
                <option value="Home & Property Loan">Home &amp; Property Loan</option>
                <option value="GST Registration & Filing">GST Registration &amp; Filing</option>
                <option value="ITR Filing & Tax Consultation">ITR Filing &amp; Tax Consultation</option>
                <option value="Company & MSME Registration">Company &amp; MSME Registration</option>
                <option value="Motor & Health Insurance">Motor &amp; Health Insurance</option>
                <option value="Cloud Web Hosting">Cloud Web Hosting &amp; Server</option>
                <option value="AI Business Tools">AI Business Suite</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300 uppercase">Message / Project Requirements</label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                placeholder="Briefly describe your requirements or questions..."
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3.5 text-sm text-white focus:outline-none focus:border-cyan-400"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 text-slate-950 font-bold text-sm rounded-2xl shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:scale-[1.02] transition flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Sending Enquiry...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Submit Enquiry to AVRX</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      <SubmissionFeedbackModal
        isOpen={feedback.isOpen}
        type={feedback.type}
        leadId={feedback.leadId}
        message={feedback.message}
        onClose={() => {
          setFeedback(prev => ({ ...prev, isOpen: false }));
          if (feedback.type === 'success') {
            onClose();
          }
        }}
        onRetry={() => {
          setFeedback(prev => ({ ...prev, isOpen: false }));
        }}
      />
    </>
  );
};
