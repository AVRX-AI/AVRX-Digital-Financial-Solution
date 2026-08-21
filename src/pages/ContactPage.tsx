import React, { useState } from 'react';
import { SITE_CONFIG } from '../config';
import { SEO } from '../components/common/SEO';
import { PartnersSlider } from '../components/common/PartnersSlider';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  RefreshCw, 
  MessageSquare, 
  ShieldCheck, 
  Clock, 
  ChevronRight,
  Sparkles,
  MessageCircle,
  ExternalLink
} from 'lucide-react';
import { submitLeadForm } from '../utils/formSubmit';
import { SubmissionFeedbackModal } from '../components/common/SubmissionFeedbackModal';

interface ContactPageProps {
  onNavigate?: (page: string, slug?: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    serviceCategory: 'Digital Solutions',
    message: '',
    website_hp: '' // Honeypot field for spambots
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    setErrorMessage('');
    setLoading(true);

    const result = await submitLeadForm({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      location: formData.location,
      serviceCategory: formData.serviceCategory,
      subject: `Website Inquiry — ${formData.serviceCategory}`,
      message: formData.message,
      sourcePage: 'Contact Us Page',
      formType: 'Main Contact Form',
      website_hp: formData.website_hp
    });

    setLoading(false);

    if (result.success) {
      setFeedback({
        isOpen: true,
        type: 'success',
        leadId: result.leadId,
        message: result.message
      });
      setFormData({
        name: '',
        phone: '',
        email: '',
        location: '',
        serviceCategory: 'Digital Solutions',
        message: '',
        website_hp: ''
      });
    } else {
      setErrorMessage(result.message || 'Unable to submit your enquiry right now.');
      setFeedback({
        isOpen: true,
        type: 'error',
        message: result.message
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#050811] text-white pt-24 pb-20 selection:bg-cyan-500 selection:text-slate-950">
      <SEO
        title="Contact Us | AVRX Digital & Financial Solution"
        description="Get in touch with AVRX specialists. Phone: +91 96306 61536, Email: support@avrx.in, Address: NH343 Waterpark Surguja Chhattisgarh INDIA."
      />

      {/* Main Container - Stretched Widescreen Layout */}
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="pt-4 pb-6 flex items-center gap-2 text-xs text-slate-400">
          <button 
            onClick={() => onNavigate ? onNavigate('home') : null}
            className="hover:text-cyan-400 transition-colors"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-cyan-300 font-semibold">Contact Us</span>
        </nav>

        {/* 1. Page Hero Section */}
        <div className="text-center max-w-4xl mx-auto my-8 space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(0,240,255,0.15)]">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>24/7 DEDICATED CONCIERGE & DESK</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight">
            Connect with <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400">AVRX Specialists.</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-lg leading-relaxed max-w-3xl mx-auto">
            Have questions regarding custom web architecture, business loans, GST filings, health cover, or AI integrations? Our multi-disciplinary team is standing by.
          </p>
        </div>

        {/* 2. Partners Slider */}
        <div className="my-10">
          <PartnersSlider 
            title="Trusted Multi-Domain Network"
            badgeText="INSTITUTIONAL ECOSYSTEM"
            description="Facilitating secure, encrypted document submission and direct advisory response."
            variant="compact"
          />
        </div>

        {/* 3. Contact Details & Lead Gen Form */}
        <div className="my-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Contact Details Box */}
          <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-8 shadow-2xl backdrop-blur-xl">
            <div>
              <h3 className="text-2xl font-black text-white">Direct Communication Channels</h3>
              <p className="text-xs text-slate-400 mt-1">Reach out directly via phone, WhatsApp, or official email.</p>
            </div>

            <div className="space-y-6 text-sm text-slate-300">
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase font-mono font-bold">Direct Phone Line</div>
                  <div className="flex flex-col gap-0.5 mt-0.5">
                    <a href={`tel:${SITE_CONFIG.contact.phone.replace(/\s+/g, '')}`} className="text-base font-bold text-white hover:text-cyan-400 transition">
                      {SITE_CONFIG.contact.phone}
                    </a>
                    <a href="tel:+917000859994" className="text-base font-bold text-white hover:text-cyan-400 transition">
                      {SITE_CONFIG.contact.phone2}
                    </a>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">Mon - Sat: 9:30 AM to 7:00 PM IST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase font-mono font-bold">WhatsApp Direct Advisory</div>
                  <a 
                    href={`https://wa.me/919630661536?text=${encodeURIComponent('Hello AVRX, I would like to inquire about your services.')}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-1 text-sm font-bold text-emerald-400 hover:text-emerald-300 transition"
                  >
                    <span>Chat on WhatsApp (+91 96306 61536)</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <p className="text-xs text-slate-400 mt-1">Instant digital response during business hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase font-mono font-bold">Official Support Emails</div>
                  <div className="flex flex-col gap-0.5 mt-0.5">
                    <a href={`mailto:${SITE_CONFIG.contact.email}`} className="text-base font-bold text-white hover:text-cyan-400 transition">
                      {SITE_CONFIG.contact.email}
                    </a>
                    <a href={`mailto:${SITE_CONFIG.contact.email2}`} className="text-base font-bold text-white hover:text-cyan-400 transition">
                      {SITE_CONFIG.contact.email2}
                    </a>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">Guaranteed response within 2 business hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-purple-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase font-mono font-bold">Headquarters Address</div>
                  <div className="text-base font-bold text-white">
                    {SITE_CONFIG.contact.address}
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5">Digital & Financial Operations Command Hub</p>
                </div>
              </div>

            </div>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-400 space-y-2">
              <div className="flex items-center gap-2 text-cyan-400 font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>Instant Confirmation & Privacy Guaranteed</span>
              </div>
              <p>Every submission is delivered straight to our domain specialists. You will receive an instant email receipt with your lead reference ID.</p>
            </div>
          </div>

          {/* Right Lead Gen Form */}
          <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white">Request Expert Consultation</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Fill out your requirements for a priority callback.</p>
                </div>
                <span className="text-xs text-cyan-400 flex items-center gap-1 font-mono font-bold">
                  <Clock className="w-3.5 h-3.5" /> 2-Hour Response
                </span>
              </div>

              {/* Hidden Honeypot Field */}
              <input
                type="text"
                name="website_hp"
                value={formData.website_hp}
                onChange={e => setFormData({ ...formData, website_hp: e.target.value })}
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />

              {errorMessage && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs font-semibold">
                  {errorMessage}
                </div>
              )}

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
                    placeholder="e.g. Raipur, Chhattisgarh"
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
                  <option value="Digital Solutions">Digital Solutions (Website, App, SEO, Portal)</option>
                  <option value="Personal & Business Loans">Financial Solutions (Personal, Business, Home, Subsidy)</option>
                  <option value="GST & Income Tax Filing">Tax & Documentation (GST, ITR, Udyam, Company Reg)</option>
                  <option value="Motor & Health Insurance">Insurance Solutions (Health, Motor, Travel, Property)</option>
                  <option value="Cloud Web Hosting">Cloud Web Hosting & Domain Management</option>
                  <option value="Next-Gen AI Interactive Suite">Next-Gen AI Tools & Automation</option>
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
                className="w-full py-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 text-slate-950 font-black text-sm rounded-2xl shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:scale-[1.02] transition flex items-center justify-center gap-2 cursor-pointer"
              >
                {loading ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Submitting & Sending Notification...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry to AVRX</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>

      <SubmissionFeedbackModal
        isOpen={feedback.isOpen}
        type={feedback.type}
        leadId={feedback.leadId}
        message={feedback.message}
        onClose={() => setFeedback(prev => ({ ...prev, isOpen: false }))}
        onRetry={() => setFeedback(prev => ({ ...prev, isOpen: false }))}
      />
    </div>
  );
};
