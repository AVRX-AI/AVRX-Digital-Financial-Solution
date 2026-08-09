import React from 'react';
import { Link } from 'react-router-dom';
import SeoMeta from '../components/common/SeoMeta';
import { ShieldAlert, ArrowLeft, Globe, DollarSign, FileCheck, Phone } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="bg-[#08090C] min-h-screen flex items-center justify-center pt-24 pb-20 px-4">
      <SeoMeta
        title="404 Page Not Found | AVRX Digital & Financial Solution"
        description="The requested page could not be found on AVRX Digital & Financial Solution. Explore our website design, financial loans, GST tax, and insurance solutions in Ambikapur, Chhattisgarh."
        canonicalUrl="https://avrx.in/404"
      />

      <div className="max-w-2xl mx-auto text-center space-y-8">
        <div className="relative inline-block">
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-3xl bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-cyan-500/20 border border-white/10 flex items-center justify-center mx-auto shadow-2xl">
            <ShieldAlert className="w-12 h-12 sm:w-16 sm:h-16 text-cyan-400 animate-pulse" />
          </div>
          <span className="absolute -top-3 -right-3 px-3 py-1 rounded-full bg-red-500/20 border border-red-500/40 text-red-400 text-xs font-bold">
            ERROR 404
          </span>
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl sm:text-5xl font-poppins font-extrabold text-white tracking-tight">
            Page Not Found
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-lg mx-auto">
            The page you are looking for might have been moved, renamed, or is temporarily unavailable. Explore our core services below.
          </p>
        </div>

        {/* Quick Route Shortcuts */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
          <Link
            to="/services"
            className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/40 transition-all space-y-1 group"
          >
            <Globe className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
            <div className="text-xs font-bold text-white">Digital Services</div>
            <div className="text-[10px] text-slate-400">Web, Mobile & SEO</div>
          </Link>

          <Link
            to="/financial-solutions"
            className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/40 transition-all space-y-1 group"
          >
            <DollarSign className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
            <div className="text-xs font-bold text-white">Business Loans</div>
            <div className="text-[10px] text-slate-400">Up to ₹20 Crore</div>
          </Link>

          <Link
            to="/tax-solutions"
            className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/40 transition-all space-y-1 group"
          >
            <FileCheck className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
            <div className="text-xs font-bold text-white">GST & Tax SLA</div>
            <div className="text-[10px] text-slate-400">Zero Error Filing</div>
          </Link>

          <Link
            to="/contact"
            className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/40 transition-all space-y-1 group"
          >
            <Phone className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
            <div className="text-xs font-bold text-white">Contact Desk</div>
            <div className="text-[10px] text-slate-400">Ambikapur Office</div>
          </Link>
        </div>

        <div className="pt-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-sm shadow-xl shadow-blue-500/25 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
