import React, { useState } from 'react';
import {
  Sparkles,
  ShieldCheck,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Globe,
  Clock,
  Lock,
  Award,
  FileText,
  X,
  Send,
  HelpCircle,
  MessageSquare,
  ChevronRight
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { ServiceItem } from '../types';

interface FooterProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenConsultation: () => void;
  onExploreService?: (service: ServiceItem) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectService,
  onOpenConsultation,
  onExploreService
}) => {
  const digitalServices = servicesData.filter(s => s.category.toLowerCase() === 'digital');
  const financialServices = servicesData.filter(s => s.category.toLowerCase() === 'financial');

  const [callbackPhone, setCallbackPhone] = useState('');
  const [callbackEmail, setCallbackEmail] = useState('');
  const [callbackService, setCallbackService] = useState('General Consultation');
  const [isCallbackSubmitted, setIsCallbackSubmitted] = useState(false);
  const [activePolicyModal, setActivePolicyModal] = useState<string | null>(null);

  const handleServiceClick = (srv: ServiceItem) => {
    if (onExploreService) {
      onExploreService(srv);
    } else {
      onSelectService(srv);
    }
  };

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!callbackPhone && !callbackEmail) return;
    setIsCallbackSubmitted(true);
    setTimeout(() => {
      setCallbackPhone('');
      setCallbackEmail('');
      setIsCallbackSubmitted(false);
    }, 5000);
  };

  const policies: Record<string, { title: string; content: string[] }> = {
    privacy: {
      title: 'Privacy Policy & Data Protection',
      content: [
        '1. Strict Confidentiality: AVRX Solutions India Pvt. Ltd. adheres to bank-grade 256-bit SSL encryption for all client financial statements, tax returns, and technical blueprints.',
        '2. Zero Third-Party Sharing: We never share, sell, or disclose your Udyam registration, PAN, GST, or business CMA data to unauthorized vendors.',
        '3. ICAI & RBI Guidelines Compliance: All Chartered Accountant (CA) consultations are conducted strictly under professional secrecy norms mandated by the Institute of Chartered Accountants of India.',
        '4. Data Retention: Clients can request complete deletion or archival of their financial records and server logs at any time via contact@avrx.in.'
      ]
    },
    terms: {
      title: 'Terms of Service & Engagement SLA',
      content: [
        '1. Transparent Scope: Every web development, SEO, or financial consulting project is governed by a mutually agreed Scope of Work (SOW) with clear timelines and milestones.',
        '2. Service Level Agreements: We guarantee 99.9% uptime for cloud hosting clients and SLA-backed turnaround times for GST returns and ITR filings.',
        '3. Bank Loan Facilitation: AVRX assists in loan documentation, CMA preparation, and bank liaison. Final credit sanction is at the sole discretion of partner public and private sector banks.',
        '4. Intellectual Property: All custom source code, website designs, and SEO strategies become the exclusive property of the client upon final milestone payment.'
      ]
    },
    refund: {
      title: 'Refund & Cancellation Policy',
      content: [
        '1. 100% Satisfaction Guarantee: For web design projects, if you are not satisfied with the initial design mockups within the first 7 days, you are eligible for a full refund.',
        '2. Government & Statutory Fees: Payments made towards statutory government registrations (GST, Udyam, DSC, ROC fees) are non-refundable once filed with official portals.',
        '3. Monthly Subscriptions: SEO, maintenance, and cloud hosting plans can be paused or cancelled with a 15-day prior written notice.'
      ]
    },
    compliance: {
      title: 'CA, statutory & RBI Compliance Disclaimer',
      content: [
        '1. ICAI Advisory Standards: Our Chartered Accountants provide tax planning and financial restructuring within the legal frameworks of the Income Tax Act, 1961 and GST regulations.',
        '2. CGTMSE Scheme Assistance: We facilitate collateral-free MSME loans under the Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE) in strict accordance with Ministry of MSME guidelines.',
        '3. Direct Technical Helpdesk: All software engineering adheres to ISO 9001:2015 quality management benchmarks.'
      ]
    }
  };

  return (
    <footer className="bg-[#040D1A] border-t border-white/10 text-white/80 relative overflow-hidden">
      {/* Subtle Background Accent Glow */}
      <div className="absolute -top-40 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Banner Ticker: Live Helpdesk & Security Assurance */}
      <div className="bg-gradient-to-r from-blue-900/40 via-cyan-900/30 to-purple-900/40 border-b border-white/10 px-4 py-3">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center space-x-3">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-extrabold text-white">AVRX DIRECT CA & TECH HELPDESK ONLINE</span>
            <span className="text-white/40 hidden sm:inline">•</span>
            <span className="text-cyan-300 font-semibold hidden md:inline">
              Call / WhatsApp: +91-9630661536 (Instant Support)
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1.5 text-emerald-400 font-bold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>ISO 9001:2015 Certified</span>
            </div>
            <div className="flex items-center space-x-1.5 text-cyan-300 font-bold hidden sm:flex">
              <Lock className="w-3.5 h-3.5" />
              <span>100% Secure & Confidential</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12">
        {/* Main Comprehensive Footer Grid: 5 Multi-purpose Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-14 border-b border-white/10">
          
          {/* Column 1: Brand Info, Full Address & Social Media (3 columns wide) */}
          <div className="lg:col-span-3 space-y-5">
            <div className="flex items-center space-x-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0A66FF] to-cyan-500 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-500/30">
                A
              </div>
              <div>
                <span className="text-xl font-black tracking-wider text-white block">
                  AVRX <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-[#0A66FF]">SOLUTIONS</span>
                </span>
                <span className="text-[10px] uppercase font-bold text-cyan-300 tracking-widest block -mt-1">
                  INDIA PVT. LTD.
                </span>
              </div>
            </div>

            <p className="text-xs text-white/70 leading-relaxed">
              India&apos;s premier hybrid digital and financial architecture firm. We empower startups, MSMEs, and enterprises with custom web engineering, #1 SEO rankings, and CA-backed tax &amp; loan solutions.
            </p>

            {/* Official Contact Coordinates */}
            <div className="space-y-2.5 pt-2 text-xs">
              <div className="flex items-start space-x-2.5 text-white/80">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="leading-snug">
                  <strong className="text-white block">Corporate &amp; Registered Office:</strong>
                  Waterpark, NH43, Ambikapur, Surguja C.G. INDIA 497001
                </span>
              </div>
              <div className="flex items-center space-x-2.5 text-white/80">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:+919630661536" className="hover:text-emerald-300 font-bold transition-colors">
                  +91-9630661536 (CA &amp; Tech Helpdesk)
                </a>
              </div>
              <div className="flex items-center space-x-2.5 text-white/80">
                <Mail className="w-4 h-4 text-purple-400 shrink-0" />
                <a href="mailto:contact@avrx.in" className="hover:text-purple-300 font-bold transition-colors">
                  contact@avrx.in
                </a>
              </div>
              <div className="flex items-center space-x-2.5 text-white/80">
                <Clock className="w-4 h-4 text-cyan-300 shrink-0" />
                <span>Mon – Sat: 9:00 AM – 8:00 PM IST</span>
              </div>
            </div>

            {/* Social Connect Icons */}
            <div className="pt-2">
              <div className="text-[11px] font-bold text-white/60 uppercase tracking-wider mb-2">
                Connect With AVRX Strategy Desk
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {[
                  { name: 'WhatsApp', href: 'https://wa.me/919630661536', color: 'hover:bg-emerald-600' },
                  { name: 'LinkedIn', href: '#', color: 'hover:bg-blue-600' },
                  { name: 'Twitter/X', href: '#', color: 'hover:bg-sky-500' },
                  { name: 'Instagram', href: '#', color: 'hover:bg-pink-600' },
                  { name: 'Facebook', href: '#', color: 'hover:bg-blue-700' }
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className={`px-3 py-1.5 rounded-lg bg-white/10 text-white text-[11px] font-bold transition-all ${social.color}`}
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Digital & Web Services Menu (3 columns wide - All 12 Digital Services) */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/10">
              <h4 className="text-xs font-black text-cyan-400 uppercase tracking-wider">
                Digital &amp; Web Services (12)
              </h4>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-400/30 font-bold">
                ISO Certified
              </span>
            </div>
            <ul className="space-y-2 text-xs">
              {digitalServices.map(srv => (
                <li key={srv.id}>
                  <button
                    onClick={() => handleServiceClick(srv)}
                    className="w-full text-left py-1 px-2 rounded-lg hover:bg-white/5 hover:text-cyan-300 text-white/80 transition-all flex items-center justify-between group"
                  >
                    <span className="truncate pr-2 font-medium">{srv.title}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-white/30 group-hover:text-cyan-400 shrink-0 group-hover:translate-x-0.5 transition-all" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Financial & Tax Services Menu (2 columns wide - All 8 Financial Services) */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/10">
              <h4 className="text-xs font-black text-purple-400 uppercase tracking-wider">
                Financial &amp; CA Services (8)
              </h4>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-400/30 font-bold">
                CA Backed
              </span>
            </div>
            <ul className="space-y-2 text-xs">
              {financialServices.map(srv => (
                <li key={srv.id}>
                  <button
                    onClick={() => handleServiceClick(srv)}
                    className="w-full text-left py-1 px-2 rounded-lg hover:bg-white/5 hover:text-purple-300 text-white/80 transition-all flex items-center justify-between group"
                  >
                    <span className="truncate pr-2 font-medium">{srv.title}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-white/30 group-hover:text-purple-400 shrink-0 group-hover:translate-x-0.5 transition-all" />
                  </button>
                </li>
              ))}
            </ul>

            {/* Quick Website & Important Links */}
            <div className="mt-6 pt-4 border-t border-white/10">
              <h4 className="text-[11px] font-extrabold text-emerald-400 uppercase tracking-wider mb-2">
                Important Navigation
              </h4>
              <div className="grid grid-cols-2 gap-1.5 text-xs">
                {[
                  { label: 'Why Choose AVRX', href: '#why-us' },
                  { label: 'Success Portfolio', href: '#portfolio' },
                  { label: '8 Free AI Simulators', href: '#ai-tools' },
                  { label: 'Client Testimonials', href: '#testimonials' },
                  { label: 'CA & Tax Blog Hub', href: '#blog' },
                  { label: 'All 20 Services Hub', href: '#services' }
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    className="text-white/70 hover:text-white hover:underline transition-colors py-0.5"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 4: Interactive Quick Contact & Callback Request Box (3 columns wide) */}
          <div className="lg:col-span-3">
            <div className="p-5 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 border border-cyan-400/30 relative">
              <div className="flex items-center space-x-2 text-cyan-300 font-extrabold text-xs mb-2">
                <Sparkles className="w-4 h-4" />
                <span>INSTANT CA &amp; TECH CALLBACK</span>
              </div>
              <p className="text-[11px] text-white/70 mb-4 leading-relaxed">
                Need advice on your website, ₹5 Cr MSME loan, or GST return? Enter your details for a guaranteed 10-minute callback.
              </p>

              {isCallbackSubmitted ? (
                <div className="p-4 rounded-xl bg-emerald-500/20 border border-emerald-400/40 text-center animate-fadeIn">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 mx-auto mb-1" />
                  <div className="text-xs font-bold text-white">Callback Request Received!</div>
                  <div className="text-[11px] text-emerald-300 mt-0.5">
                    An AVRX Senior CA or Tech Architect will call you shortly.
                  </div>
                </div>
              ) : (
                <form onSubmit={handleCallbackSubmit} className="space-y-2.5">
                  <div>
                    <input
                      type="tel"
                      required
                      value={callbackPhone}
                      onChange={(e) => setCallbackPhone(e.target.value)}
                      placeholder="Your Phone Number (+91...)"
                      className="w-full px-3 py-2 rounded-xl bg-white/10 border border-white/20 text-white text-xs placeholder:text-white/40 focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      value={callbackEmail}
                      onChange={(e) => setCallbackEmail(e.target.value)}
                      placeholder="Your Email (Optional)"
                      className="w-full px-3 py-2 rounded-xl bg-white/10 border border-white/20 text-white text-xs placeholder:text-white/40 focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                  <div>
                    <select
                      value={callbackService}
                      onChange={(e) => setCallbackService(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-[#081B33] border border-white/20 text-white text-xs focus:outline-none focus:border-cyan-400"
                    >
                      <option value="General Consultation">General Consultation</option>
                      <option value="Website Design & App">Website Design &amp; App Development</option>
                      <option value="SEO & Digital Marketing">SEO &amp; Digital Marketing</option>
                      <option value="MSME Loan & Financing">MSME Loan &amp; Financing (₹10L - ₹50Cr)</option>
                      <option value="GST, ITR & Tax Advisory">GST, ITR &amp; Corporate Tax Advisory</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#0A66FF] to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-black text-xs flex items-center justify-center space-x-1.5 shadow-lg shadow-blue-500/30 transition-all"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Request Instant Callback</span>
                  </button>
                </form>
              )}

              {/* Quick WhatsApp Action button */}
              <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between">
                <span className="text-[10px] text-white/60">Prefer instant WhatsApp?</span>
                <a
                  href="https://wa.me/919630661536"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-extrabold text-emerald-400 hover:text-emerald-300 flex items-center space-x-1"
                >
                  <span>Chat on WhatsApp →</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Security & Official Accreditation Strip */}
        <div className="pb-10 border-b border-white/10">
          <div className="flex flex-wrap items-center justify-between gap-6 text-xs text-white/80">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center text-emerald-400 font-black text-sm">
                ISO
              </div>
              <div>
                <div className="font-bold text-white">ISO 9001:2015 Certified</div>
                <div className="text-[10px] text-white/60">International Quality Architecture</div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/15 border border-cyan-400/30 flex items-center justify-center text-cyan-300">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold text-white">Udyam &amp; MSME Recognized</div>
                <div className="text-[10px] text-white/60">Govt. of India Registered Enterprise</div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-purple-500/15 border border-purple-400/30 flex items-center justify-center text-purple-300 font-bold text-xs">
                CA
              </div>
              <div>
                <div className="font-bold text-white">ICAI &amp; RBI Guided Advisory</div>
                <div className="text-[10px] text-white/60">Chartered Accountant &amp; Banking Ethics</div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-blue-500/15 border border-blue-400/30 flex items-center justify-center text-blue-300">
                <Lock className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold text-white">256-Bit SSL Encrypted</div>
                <div className="text-[10px] text-white/60">Bank-Grade Privacy &amp; Data Security</div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Links, Policies & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div>
            &copy; {new Date().getFullYear()} <strong className="text-white">AVRX Solutions India Pvt. Ltd.</strong> All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            {[
              { id: 'privacy', label: 'Privacy Policy' },
              { id: 'terms', label: 'Terms of Service' },
              { id: 'refund', label: 'Refund & Cancellation Policy' },
              { id: 'compliance', label: 'CA & RBI Compliance' }
            ].map((policy) => (
              <button
                key={policy.id}
                onClick={() => setActivePolicyModal(policy.id)}
                className="hover:text-cyan-300 hover:underline transition-colors"
              >
                {policy.label}
              </button>
            ))}
          </div>
        </div>

        {/* Statutory Disclaimer Box */}
        <div className="mt-6 p-4 rounded-2xl bg-white/5 border border-white/10 text-[11px] text-white/50 text-center max-w-5xl mx-auto leading-relaxed">
          <strong className="text-white/70">Statutory &amp; Regulatory Disclaimer:</strong> AVRX Solutions India Pvt. Ltd. provides technical web engineering, speed optimization, and SEO consulting. Our financial advisory services are conducted by experienced Chartered Accountants in strict compliance with the ethical guidelines of the Institute of Chartered Accountants of India (ICAI). All bank loan sanctions (MSME, CGTMSE, Working Capital) are subject to the individual credit assessment and sole discretion of partner public &amp; private sector banks (SBI, HDFC, ICICI, Bank of Baroda, etc.).
        </div>
      </div>

      {/* Interactive Policy Modal Popup */}
      {activePolicyModal && policies[activePolicyModal] && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#081B33] border border-cyan-400/40 rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
              <div className="flex items-center space-x-2 text-cyan-300">
                <FileText className="w-5 h-5" />
                <h3 className="text-lg sm:text-xl font-black text-white">
                  {policies[activePolicyModal].title}
                </h3>
              </div>
              <button
                onClick={() => setActivePolicyModal(null)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-white/80 leading-relaxed">
              {policies[activePolicyModal].content.map((para, i) => (
                <p key={i} className="p-3 rounded-xl bg-white/5 border border-white/5">
                  {para}
                </p>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-white/50">
                For statutory or legal queries: <strong className="text-white">contact@avrx.in</strong>
              </span>
              <button
                onClick={() => setActivePolicyModal(null)}
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#0A66FF] to-cyan-500 text-white text-xs font-bold shadow-lg"
              >
                Close Policy
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
