import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home, Sparkles } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface PageBannerProps {
  title: string;
  subtitle: string;
  badge?: string;
  breadcrumbs: BreadcrumbItem[];
  ctaText?: string;
  ctaLink?: string;
}

export default function PageBanner({
  title,
  subtitle,
  badge = 'PRODUCTION ENTERPRISE GRADE',
  breadcrumbs,
  ctaText = 'Request Consultation',
  ctaLink = '/contact'
}: PageBannerProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden border-b border-white/10 bg-[#06070B]">
      {/* Glow Backdrops */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6 flex-wrap">
          <Link
            to="/"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          {breadcrumbs.map((item, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
              {item.path ? (
                <Link
                  to={item.path}
                  className="hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-blue-400 font-medium">{item.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Hero Banner Content */}
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{badge}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-extrabold text-white tracking-tight leading-tight">
            {title}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-3xl">
            {subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              to={ctaLink}
              className="px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
            >
              {ctaText}
            </Link>
            <Link
              to="/pricing"
              className="px-8 py-4 rounded-xl font-semibold bg-white/5 hover:bg-white/10 text-white border border-white/15 transition-all duration-300"
            >
              View Transparent Pricing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
