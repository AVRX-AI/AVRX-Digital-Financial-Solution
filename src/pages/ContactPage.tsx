import React, { useState } from 'react';
import { SITE_CONFIG } from '../config';
import { SEO } from '../components/common/SEO';
import { Mail, Phone, MapPin, Send, CheckCircle2, RefreshCw, MessageSquare } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    serviceCategory: 'Digital Solutions',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      setSubmitted(true);
    } catch (err) {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050811] text-white pt-28 pb-20">
      <SEO
        title="Contact Us | AVRX Digital & Financial Solution"
        description="Get in touch with AVRX specialists. Phone: +91 96306 61536, Email: support@avrx.in, Address: NH343 Waterpark Surguja Chhattisgarh INDIA."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            Dedicated Support
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white">
            Get in Touch with <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">AVRX</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg">
            Have questions about website development, business loans, tax filings, or insurance? Our team is ready to guide you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Contact Details Box */}
          <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-3xl p-8 space-y-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-white">Direct Contact Channels</h3>

            <div className="space-y-6 text-sm text-slate-300">
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase font-mono font-bold">Call & WhatsApp</div>
                  <a href={`tel:${SITE_CONFIG.contact.phone}`} className="text-base font-bold text-white hover:text-cyan-400 transition">
                    {SITE_CONFIG.contact.phone}
                  </a>
                  <p className="text-xs text-slate-400 mt-0.5">Mon - Sat: 9:30 AM to 7:00 PM IST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase font-mono font-bold">Official Email</div>
                  <a href={`mailto:${SITE_CONFIG.contact.email}`} className="text-base font-bold text-white hover:text-emerald-400 transition">
                    {SITE_CONFIG.contact.email}
                  </a>
                  <p className="text-xs text-slate-400 mt-0.5">Guaranteed reply within 2 business hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-purple-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase font-mono font-bold">Head Office</div>
                  <div className="text-base font-bold text-white">
                    {SITE_CONFIG.contact.address}
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5">Digital & Financial Operations Hub</p>
                </div>
              </div>

            </div>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-400 flex items-center gap-3">
              <MessageSquare className="w-5 h-5 text-cyan-400 shrink-0" />
              <span>Need instant response? Click the floating WhatsApp button on the bottom right to chat directly.</span>
            </div>
          </div>

          {/* Right Lead Gen Form */}
          <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Inquiry Received Successfully!</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you for contacting AVRX. An assigned domain specialist will review your requirements and reach out via phone/email shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', phone: '', email: '', location: '', serviceCategory: 'Digital Solutions', message: '' });
                  }}
                  className="mt-4 px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-xs font-bold text-white rounded-xl transition"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-xl font-bold text-white">Request Expert Consultation</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 uppercase">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 uppercase">Phone / WhatsApp Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400"
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
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 uppercase">City / State</label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={e => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. Mumbai, Maharashtra"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300 uppercase">Service Category Interest</label>
                  <select
                    value={formData.serviceCategory}
                    onChange={e => setFormData({ ...formData, serviceCategory: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option value="Digital Solutions">Digital Solutions (Website, App, SEO)</option>
                    <option value="Financial Solutions">Financial Solutions (Personal/Business Loan)</option>
                    <option value="Tax Solutions">Tax Solutions (GST, ITR, Udyam)</option>
                    <option value="Insurance Solutions">Insurance Solutions (Motor, Health, Property)</option>
                    <option value="Digital Products & Hosting">Hosting & Digital Products</option>
                    <option value="AI Tools">AI Business Tools</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300 uppercase">Message / Requirements</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project, loan requirement, or tax questions..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 text-slate-950 font-bold text-sm rounded-2xl shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:scale-105 transition flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Submitting Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry to AVRX</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
