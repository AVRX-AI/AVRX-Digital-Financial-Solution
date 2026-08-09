import React, { useState } from 'react';
import SeoMeta from '../components/common/SeoMeta';
import Breadcrumbs from '../components/common/Breadcrumbs';
import PageBanner from '../components/layout/PageBanner';
import {
  PhoneCall,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Sparkles,
  Building2
} from 'lucide-react';

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const breadcrumbs = [
    { name: 'Contact Us', url: '/contact' }
  ];

  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'AVRX Digital & Financial Solution',
    image: 'https://avrx.in/favicon.ico',
    telephone: '+91-9630661536',
    email: 'avrxin@gmail.com',
    url: 'https://avrx.in/contact',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Waterpark Ambikapur, NH343',
      addressLocality: 'Ambikapur',
      addressRegion: 'Chhattisgarh',
      postalCode: '497001',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 23.1186,
      longitude: 83.1987
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:30',
      closes: '19:00'
    }
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Website Design & Development SLA',
    company: '',
    budget: '₹25,000 – ₹1,00,000',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '919630661536';
    const msg = encodeURIComponent(
      `Hello AVRX Team,\nI would like to schedule a consultation regarding: ${formData.service}.\nName: ${formData.name || 'Client'}\nCompany: ${formData.company || 'N/A'}`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${msg}`, '_blank');
  };

  return (
    <div className="bg-[#08090C] min-h-screen">
      <SeoMeta
        title="Contact AVRX Digital & Financial Solution | Ambikapur Office"
        description="Contact AVRX Digital & Financial Solution at Waterpark Ambikapur, NH343, Surguja, Chhattisgarh. Call +91-9630661536 or WhatsApp for digital, loan, tax, and insurance queries."
        keywords="contact AVRX Ambikapur, AVRX phone number, website design office Ambikapur, business loan office Surguja, GST consultant Ambikapur"
        canonicalUrl="https://avrx.in/contact"
        breadcrumbsData={breadcrumbs}
        schemaData={contactSchema}
      />

      <PageBanner
        title="Connect With Our Executive Desk in Ambikapur"
        subtitle="Schedule a consultation with a Solution Architect, Financial Advisor, or Tax Specialist. We respond promptly during business hours."
        badge="LOCAL & PAN-INDIA SUPPORT"
        breadcrumbs={[{ label: 'Contact Us' }]}
        ctaText="Instant WhatsApp Chat"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      <section className="py-20 bg-[#06070B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left 7 cols: Interactive Form */}
            <div className="lg:col-span-7">
              <div className="glass-card p-8 sm:p-12 rounded-3xl border border-white/15 bg-[#0C0F1D]/90 shadow-2xl space-y-8">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase mb-3">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>STRICT NDA & SOC2 CONFIDENTIALITY</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-poppins font-bold text-white">
                    Request Formal SLA Scoping & Consultation
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    Fill out the form below. Your request goes directly to Avinash Rai & CA Siddharth Kothari.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="p-8 rounded-2xl bg-green-500/10 border border-green-500/30 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-2xl font-poppins font-bold text-white">
                      Consultation Request Received!
                    </h4>
                    <p className="text-sm text-slate-300 max-w-md mx-auto">
                      Thank you, <span className="text-white font-bold">{formData.name || 'Executive Client'}</span>. An assigned Senior Solution Architect will contact you within <span className="text-green-400 font-bold">15 minutes</span>.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold"
                    >
                      Send Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-bold text-slate-300 block mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Rajesh Singhania"
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-sm focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-bold text-slate-300 block mb-1.5">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="rajesh@enterprise.com"
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-sm focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-bold text-slate-300 block mb-1.5">
                          Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-sm focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-bold text-slate-300 block mb-1.5">
                          Company / Organization
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Apex Capital Markets"
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-sm focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-bold text-slate-300 block mb-1.5">
                          Primary Service Required
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-sm focus:outline-none focus:border-blue-500"
                        >
                          <option className="bg-[#0D101C]">Website Design SLA</option>
                          <option className="bg-[#0D101C]">Application Development (iOS/Android/Flutter)</option>
                          <option className="bg-[#0D101C]">Programmatic SEO & Marketing</option>
                          <option className="bg-[#0D101C]">Business Loan / Working Capital (₹10L – ₹20Cr)</option>
                          <option className="bg-[#0D101C]">GST Filing / ITR / CA Tax Advisory</option>
                          <option className="bg-[#0D101C]">Company Incorporation & MSME</option>
                          <option className="bg-[#0D101C]">Corporate Insurance & GMC Cover</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-xs font-bold text-slate-300 block mb-1.5">
                          Estimated Budget / Loan Requirement
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-sm focus:outline-none focus:border-blue-500"
                        >
                          <option className="bg-[#0D101C]">$500 – $2,500 / ₹40K – ₹2L</option>
                          <option className="bg-[#0D101C]">$2,500 – $10,000 / ₹2L – ₹8L</option>
                          <option className="bg-[#0D101C]">$10,000+ / ₹10L – ₹50L (Enterprise)</option>
                          <option className="bg-[#0D101C]">₹50 Lakhs – ₹5 Crores (Loan Requirement)</option>
                          <option className="bg-[#0D101C]">₹5 Crores – ₹20 Crores (Corporate Capital)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-300 block mb-1.5">
                        Project Scope or Loan Requirements
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please describe your timeline, current tech stack, or capital requirements..."
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-sm focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row gap-3">
                      <button
                        type="submit"
                        className="flex-1 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-sm shadow-xl shadow-blue-500/25 flex items-center justify-center gap-2 transition-all"
                      >
                        <Send className="w-4 h-4" />
                        <span>Submit Executive Request</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleWhatsAppClick}
                        className="px-6 py-4 rounded-xl bg-green-600 hover:bg-green-500 text-white font-bold text-sm shadow-xl shadow-green-600/25 flex items-center justify-center gap-2 transition-all"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>WhatsApp Now</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Right 5 cols: Executive Offices & Maps */}
            <div className="lg:col-span-5 space-y-6">
              <div className="glass-card p-8 rounded-3xl border border-white/15 bg-[#0C0F1D]/80 space-y-6">
                <div className="border-b border-white/10 pb-4">
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block">
                    GLOBAL HEADQUARTERS
                  </span>
                  <h4 className="text-xl font-poppins font-bold text-white mt-1">
                    Waterpark Ambikapur, Chhattisgarh
                  </h4>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/30 text-blue-400 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">AVRX Global Headquarters</div>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        Waterpark Ambikapur, NH343, Surguja, Chhattisgarh, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-green-500/15 border border-green-500/30 text-green-400 flex items-center justify-center flex-shrink-0">
                      <PhoneCall className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Direct Executive Lines</div>
                      <p className="text-xs text-slate-300 mt-1">
                        +91-9630661536 • +91-7000859994
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Official Support Emails</div>
                      <p className="text-xs text-slate-300 mt-1">
                        support@avrx.in • contact@avrx.in
                      </p>
                    </div>
                  </div>
                </div>

                {/* Google Maps Embed Card */}
                <div className="rounded-2xl overflow-hidden border border-white/10 h-48 relative bg-slate-900">
                  <iframe
                    title="AVRX Waterpark Ambikapur Headquarters Map"
                    src="https://maps.google.com/maps?q=Waterpark+Ambikapur+Chhattisgarh+India&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                    allowFullScreen={false}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
