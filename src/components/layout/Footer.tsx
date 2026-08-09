import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Globe,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  Youtube,
  Github
} from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const footerLinks = {
    services: [
      { label: 'Website Design', path: '/services/website-design' },
      { label: 'Application Development', path: '/services/application-development' },
      { label: 'Digital Marketing', path: '/services/digital-marketing' },
      { label: 'SEO Optimization', path: '/services/seo-optimization' },
      { label: 'Website Redesign', path: '/services/website-redesign-maintenance' },
      { label: 'Website Maintenance SLA', path: '/services/website-redesign-maintenance' },
      { label: 'All Digital Services', path: '/services' },
    ],
    financial: [
      { label: 'Personal Loan', path: '/financial-solutions' },
      { label: 'Business & MSME Loan', path: '/financial-solutions' },
      { label: 'Home & Construction Loan', path: '/financial-solutions' },
      { label: 'Car & Auto Loan', path: '/financial-solutions' },
      { label: 'Mortgage & LAP Loan', path: '/financial-solutions' },
      { label: 'Govt Schemes (PMEGP/Mudra)', path: '/financial-solutions' },
    ],
    tax: [
      { label: 'GST Registration & Filing', path: '/tax-solutions' },
      { label: 'Income Tax Return (ITR)', path: '/tax-solutions' },
      { label: 'Pvt Ltd & LLP Incorporation', path: '/tax-solutions' },
      { label: 'Udyam / MSME Registration', path: '/tax-solutions' },
      { label: 'Class-3 Digital Signature', path: '/tax-solutions' },
      { label: 'Monthly Bookkeeping', path: '/tax-solutions' },
    ],
    insurance: [
      { label: 'Health Insurance', path: '/insurance-solutions' },
      { label: 'Car & Bike Motor Policy', path: '/insurance-solutions' },
      { label: 'Home & Property Protection', path: '/insurance-solutions' },
      { label: 'Term Life Insurance', path: '/insurance-solutions' },
      { label: 'Shop & Warehouse Cover', path: '/insurance-solutions' },
      { label: 'Corporate GMC Cover', path: '/insurance-solutions' },
    ],
    productsAi: [
      { label: 'AI Website Health Checker', path: '/ai-solutions' },
      { label: 'AI Traffic & UX Analyzer', path: '/ai-solutions' },
      { label: 'AI SEO Score Checker', path: '/ai-solutions' },
      { label: 'AI Conversational Assistant', path: '/ai-solutions' },
      { label: 'WordPress Themes & Plugins', path: '/digital-products' },
      { label: 'NVMe Cloud Hosting', path: '/digital-products' },
    ],
    company: [
      { label: 'About AVRX', path: '/about' },
      { label: 'Portfolio & Work', path: '/portfolio' },
      { label: 'Pricing Plans', path: '/pricing' },
      { label: 'Insights Blog', path: '/blog' },
      { label: 'Career Opportunities', path: '/career' },
      { label: 'FAQ & Help Center', path: '/faq' },
      { label: 'Contact Us', path: '/contact' },
    ],
    legal: [
      { label: 'Privacy Policy', path: '/privacy-policy' },
      { label: 'Terms & Conditions', path: '/terms-conditions' },
      { label: 'Refund Policy', path: '/refund-policy' },
      { label: 'Sitemap', path: '/sitemap' },
    ]
  };

  return (
    <footer className="relative bg-[#050608] border-t border-white/10 text-slate-300 overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Top CTA / Newsletter Section */}
      <div className="border-b border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-8 sm:p-12 rounded-3xl border border-white/10 bg-gradient-to-r from-blue-900/20 via-slate-900/40 to-cyan-900/20 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Stay Ahead of the Curve</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-poppins font-bold text-white tracking-tight">
                  Subscribe to AVRX Digital & Financial Intelligence
                </h3>
                <p className="text-slate-400 text-sm max-w-xl">
                  Get weekly briefings on GST policy changes, loan interest rate updates, Google algorithm shifts, and AI tool breakthroughs.
                </p>
              </div>

              <div className="lg:col-span-5">
                {subscribed ? (
                  <div className="flex items-center gap-3 p-4 rounded-2xl bg-green-500/10 border border-green-500/30 text-green-300">
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0 text-green-400" />
                    <div>
                      <div className="text-sm font-semibold">Subscribed Successfully!</div>
                      <div className="text-xs text-green-400/80">You are on our priority executive mailing list.</div>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your work email..."
                      required
                      className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-sm"
                    />
                    <button
                      type="submit"
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2 whitespace-nowrap"
                    >
                      <span>Join Free</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
            {/* Brand Information */}
            <div className="lg:col-span-2 space-y-5">
              <Link to="/" className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <span className="text-white font-poppins font-black text-xl">A</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-poppins font-bold text-lg text-white">AVRX DIGITAL</span>
                  <span className="text-[10px] uppercase tracking-widest text-slate-400">
                    Digital • Financial • AI
                  </span>
                </div>
              </Link>
              <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
                AVRX Digital & Financial Solution is a world-class technology and financial advisory platform engineering No 1 Digital and Financial Solution experiences, statutory GST & tax compliance, instant business loans, and AI-driven growth for global enterprises.
              </p>

              {/* Contact Information */}
              <div className="space-y-2.5 pt-2 text-sm">
                <div className="flex items-start gap-3 text-slate-300">
                  <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>Waterpark Ambikapur, NH343, Surguja, Chhattisgarh, India</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>+91-9630661536 • +91-7000859994</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span>support@avrx.in • contact@avrx.in</span>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="flex items-center gap-2 pt-2">
                {[
                  { icon: Linkedin, label: 'LinkedIn', url: 'https://linkedin.com' },
                  { icon: Twitter, label: 'Twitter X', url: 'https://twitter.com' },
                  { icon: Instagram, label: 'Instagram', url: 'https://instagram.com' },
                  { icon: Facebook, label: 'Facebook', url: 'https://facebook.com' },
                  { icon: Youtube, label: 'YouTube', url: 'https://youtube.com' },
                  { icon: Github, label: 'GitHub', url: 'https://github.com' },
                ].map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600/20 hover:border-blue-500/40 transition-all"
                      aria-label={social.label}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Digital Services */}
            <div className="space-y-4">
              <h4 className="text-sm font-poppins font-semibold text-white uppercase tracking-wider">
                Digital Services
              </h4>
              <ul className="space-y-2.5 text-sm">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50" />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Financial & Tax */}
            <div className="space-y-4">
              <h4 className="text-sm font-poppins font-semibold text-white uppercase tracking-wider">
                Financial & Tax
              </h4>
              <ul className="space-y-2.5 text-sm">
                {footerLinks.financial.slice(0, 4).map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/50" />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
                {footerLinks.tax.slice(0, 3).map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50" />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Insurance & AI */}
            <div className="space-y-4">
              <h4 className="text-sm font-poppins font-semibold text-white uppercase tracking-wider">
                Insurance & AI
              </h4>
              <ul className="space-y-2.5 text-sm">
                {footerLinks.insurance.slice(0, 3).map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500/50" />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
                {footerLinks.productsAi.slice(0, 4).map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/50" />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company & Legal */}
            <div className="space-y-4">
              <h4 className="text-sm font-poppins font-semibold text-white uppercase tracking-wider">
                Company & Legal
              </h4>
              <ul className="space-y-2.5 text-sm">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-slate-400">
            <div>
              © {new Date().getFullYear()} AVRX Digital & Financial Solution. All rights reserved. Built with CRED-Level Craftsmanship.
            </div>

            {/* A-Letter Shaped Footer Click To Top Button */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 border border-cyan-500/40 hover:border-cyan-400 text-white hover:text-cyan-300 transition-all shadow-lg hover:shadow-cyan-500/20 group"
              title="Click to Top"
            >
              <svg width="22" height="22" viewBox="0 0 110 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:-translate-y-0.5 transition-transform">
                <path d="M 55 5 L 104 92 H 81 L 70 67 H 40 L 29 92 H 6 Z" fill="#06b6d4" stroke="#22d3ee" strokeWidth="4" />
                <path d="M 55 22 L 64 47 H 46 Z" fill="#080d1a" />
              </svg>
              <span className="font-bold tracking-wider text-[11px] text-cyan-300 group-hover:text-white uppercase">CLICK TO TOP</span>
            </button>

            <div className="flex flex-wrap items-center gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className="hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
