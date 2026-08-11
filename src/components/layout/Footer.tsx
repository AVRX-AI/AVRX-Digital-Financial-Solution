import React, { useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight, ShieldCheck, CheckCircle2, X } from 'lucide-react';
import { SITE_CONFIG } from '../../config';
import brandLogo from '../../assets/images/avrx_white_logo_1786467039540.jpg';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const handleLink = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#03060f] text-slate-300 border-t border-slate-800/80 relative overflow-hidden pt-16 pb-12">
      {/* Background glow accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Newsletter & Callout Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900 border border-slate-800/80 rounded-3xl p-6 sm:p-10 mb-16 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-3">
              <ShieldCheck className="w-4 h-4" />
              <span>AVRX Business Intelligence Newsletter</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Stay Ahead with Digital, Tax & Financial Insights
            </h3>
            <p className="text-slate-400 text-sm mt-2">
              Receive market growth updates, government loan subsidy alerts, and AI strategy guides directly in your inbox.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="w-full lg:w-auto flex flex-col sm:flex-row gap-3">
            {subscribed ? (
              <div className="flex items-center gap-2 px-6 py-3.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-2xl text-sm font-semibold">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span>Thank you! You are subscribed to AVRX Insights.</span>
              </div>
            ) : (
              <>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Enter your business email..."
                  required
                  className="px-4 py-3.5 bg-slate-950 border border-slate-800 rounded-2xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 w-full sm:w-80"
                />
                <button
                  type="submit"
                  className="px-6 py-3.5 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-sm rounded-2xl transition shadow-[0_0_20px_rgba(0,240,255,0.3)] shrink-0 flex items-center justify-center gap-2"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </>
            )}
          </form>
        </div>

        {/* Main Footer Links Columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 mb-16 text-xs sm:text-sm">
          
          {/* Brand Info Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2 space-y-4">
            <button
              onClick={() => handleLink('home')}
              className="flex items-center text-left focus:outline-none"
            >
              <div className="relative rounded-xl p-1 bg-[#050811]/90 border border-slate-700/80 shadow-[0_0_15px_rgba(255,255,255,0.15)] transition-all duration-300 hover:scale-105 hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                <img
                  src={brandLogo}
                  alt="AVRX Digital & Financial Solution Logo"
                  className="h-10 sm:h-12 w-auto object-contain rounded-lg brightness-110"
                  referrerPolicy="no-referrer"
                />
              </div>
            </button>

            <p className="text-slate-400 leading-relaxed max-w-sm">
              AVRX is a modern technology and financial solutions platform helping individuals, startups, and enterprises build, grow, finance, protect, and automate their future.
            </p>

            <div className="space-y-2.5 text-xs text-slate-400 pt-2">
              <div className="flex flex-col space-y-1">
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                  <a href={`mailto:${SITE_CONFIG.contact.email}`} className="hover:text-cyan-300 transition">
                    {SITE_CONFIG.contact.email}
                  </a>
                </div>
                <div className="flex items-center gap-2.5 pl-6">
                  <a href={`mailto:${SITE_CONFIG.contact.email2}`} className="hover:text-cyan-300 transition">
                    {SITE_CONFIG.contact.email2}
                  </a>
                </div>
              </div>

              <div className="flex flex-col space-y-1">
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <a href={`tel:${SITE_CONFIG.contact.phone.replace(/\s+/g, '')}`} className="hover:text-emerald-300 transition">
                    {SITE_CONFIG.contact.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2.5 pl-6">
                  <a href="tel:+917000859994" className="hover:text-emerald-300 transition">
                    {SITE_CONFIG.contact.phone2}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <MapPin className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.contact.address}</span>
              </div>
            </div>
          </div>

          {/* Digital Column */}
          <div>
            <h4 className="font-bold text-white text-sm tracking-wide uppercase mb-4 text-cyan-400">
              Digital
            </h4>
            <ul className="space-y-2.5 text-slate-400">
              <li><button onClick={() => handleLink('digital-solutions')} className="text-left block w-full hover:text-cyan-300 transition">Website Design</button></li>
              <li><button onClick={() => handleLink('digital-solutions')} className="text-left block w-full hover:text-cyan-300 transition">Corporate Sites</button></li>
              <li><button onClick={() => handleLink('digital-solutions')} className="text-left block w-full hover:text-cyan-300 transition">E-Commerce</button></li>
              <li><button onClick={() => handleLink('digital-solutions')} className="text-left block w-full hover:text-cyan-300 transition">App Development</button></li>
              <li><button onClick={() => handleLink('digital-solutions')} className="text-left block w-full hover:text-cyan-300 transition">Digital Marketing</button></li>
              <li><button onClick={() => handleLink('digital-solutions')} className="text-left block w-full hover:text-cyan-300 transition">SEO Services</button></li>
            </ul>
          </div>

          {/* Finance Column */}
          <div>
            <h4 className="font-bold text-white text-sm tracking-wide uppercase mb-4 text-emerald-400">
              Finance
            </h4>
            <ul className="space-y-2.5 text-slate-400">
              <li><button onClick={() => handleLink('financial-solutions')} className="text-left block w-full hover:text-emerald-300 transition">Personal Loan</button></li>
              <li><button onClick={() => handleLink('financial-solutions')} className="text-left block w-full hover:text-emerald-300 transition">Business Loan</button></li>
              <li><button onClick={() => handleLink('financial-solutions')} className="text-left block w-full hover:text-emerald-300 transition">Home Loan</button></li>
              <li><button onClick={() => handleLink('financial-solutions')} className="text-left block w-full hover:text-emerald-300 transition">Car Loan</button></li>
              <li><button onClick={() => handleLink('financial-solutions')} className="text-left block w-full hover:text-emerald-300 transition">Loan Refinance</button></li>
              <li><button onClick={() => handleLink('financial-solutions')} className="text-left block w-full hover:text-emerald-300 transition leading-snug">Govt Schemes (MUDRA / PMEGP)</button></li>
            </ul>
          </div>

          {/* Tax & Insurance Column */}
          <div>
            <h4 className="font-bold text-white text-sm tracking-wide uppercase mb-4 text-amber-400">
              Tax & Insurance
            </h4>
            <ul className="space-y-2.5 text-slate-400">
              <li><button onClick={() => handleLink('tax-solutions')} className="text-left block w-full hover:text-amber-300 transition">GST Registration</button></li>
              <li><button onClick={() => handleLink('tax-solutions')} className="text-left block w-full hover:text-amber-300 transition">GST Filing</button></li>
              <li><button onClick={() => handleLink('tax-solutions')} className="text-left block w-full hover:text-amber-300 transition">ITR Filing</button></li>
              <li><button onClick={() => handleLink('insurance-solutions')} className="text-left block w-full hover:text-purple-300 transition">Motor Insurance</button></li>
              <li><button onClick={() => handleLink('insurance-solutions')} className="text-left block w-full hover:text-purple-300 transition">Health Insurance</button></li>
              <li><button onClick={() => handleLink('insurance-solutions')} className="text-left block w-full hover:text-purple-300 transition">Property Insurance</button></li>
            </ul>
          </div>

          {/* Resources & Ecosystem Column */}
          <div>
            <h4 className="font-bold text-white text-sm tracking-wide uppercase mb-4 text-purple-400">
              Resources
            </h4>
            <ul className="space-y-2.5 text-slate-400">
              <li><button onClick={() => handleLink('ai-tools')} className="text-left block w-full hover:text-purple-300 transition">AI Marketplace</button></li>
              <li><button onClick={() => handleLink('hosting-products')} className="text-left block w-full hover:text-purple-300 transition">Hosting & Products</button></li>
              <li><button onClick={() => handleLink('blog')} className="text-left block w-full hover:text-purple-300 transition">Blog & Strategy</button></li>
              <li><button onClick={() => handleLink('faq')} className="text-left block w-full hover:text-purple-300 transition">FAQ</button></li>
              <li><button onClick={() => handleLink('partner')} className="text-left block w-full hover:text-purple-300 transition">Partner With Us</button></li>
              <li><button onClick={() => handleLink('contact')} className="text-left block w-full hover:text-purple-300 transition">Contact AVRX</button></li>
            </ul>
          </div>

        </div>

        {/* Legal Disclaimer Box */}
        <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/80 text-slate-400 text-xs leading-relaxed mb-10">
          <p>
            <strong className="text-slate-200">Disclaimer:</strong> AVRX Digital & Financial Solution (avrx.in) operates as an integrated technological platform and service facilitator. All loan approvals, financial terms, interest rates, tax compliance statuses, and insurance policy claims are subject to applicable documentation, statutory regulations, and final underwriting policies of respective banks, NBFCs, IRDAI insurance providers, and government authorities. AVRX makes no fixed return or unconditional approval guarantees.
          </p>
        </div>

        {/* Bottom Bar: Copyright, Click-to-Top (Middle), & Legal Policy Links */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="text-center md:text-left">
            © 2026 AVRX Digital & Financial Solution. All Rights Reserved.
          </div>

          {/* Click to Top X Button - Centered in Middle */}
          <div className="flex items-center justify-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              title="Click here to top"
              aria-label="Click here to top"
              className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 transition flex items-center gap-1.5 text-xs font-medium shadow-md hover:scale-105 active:scale-95 cursor-pointer"
            >
              <X className="w-3.5 h-3.5 text-rose-400" />
              <span>click here to top</span>
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-6">
            <button onClick={() => handleLink('privacy')} className="hover:text-cyan-400 transition">Privacy Policy</button>
            <button onClick={() => handleLink('terms')} className="hover:text-cyan-400 transition">Terms & Conditions</button>
            <button onClick={() => handleLink('disclaimer')} className="hover:text-cyan-400 transition">Disclaimer</button>
          </div>
        </div>

      </div>
    </footer>
  );
};
