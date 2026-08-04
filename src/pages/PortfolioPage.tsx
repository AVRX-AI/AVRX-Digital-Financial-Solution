import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SeoMeta from '../components/common/SeoMeta';
import PageBanner from '../components/layout/PageBanner';
import {
  ExternalLink,
  TrendingUp,
  Award,
  ShieldCheck,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'web' | 'fin' | 'tax'>('all');

  const caseStudies = [
    {
      id: 'fintech-cred-redesign',
      title: 'Apex Capital FinTech Platform Redesign & GST SLA',
      category: 'web',
      tag: 'WEBSITE + TAX SLA',
      metrics: '48% Conversion Uplift • 0.5s LCP',
      desc: 'Rebuilt their multi-product lending portal using Next.js and Tailwind CSS with a CRED-inspired dark aesthetic, while our CA team took over monthly GSTR-3B compliance.',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'diwali-working-capital',
      title: '₹5 Crore Emergency Working Capital for E-Commerce Brand',
      category: 'fin',
      tag: '₹5 CR UNSECURED LOAN',
      metrics: '48 Hour Sanction • 8.9% Interest',
      desc: 'Facilitated a collateral-free overdraft limit through Tier-1 bank partners just ahead of the Diwali shopping season, allowing 300% inventory scale-up.',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'programmatic-seo-saas',
      title: '300% Organic Traffic Growth for SaaS AI Startup',
      category: 'web',
      tag: 'PROGRAMMATIC SEO',
      metrics: '+14,000 Monthly Visitors',
      desc: 'Implemented custom schema markups and programmatic keyword clusters that ranked top 3 on Google for 420 competitive enterprise AI terms.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'nbfc-cfo-audit',
      title: 'Virtual CFO & RBI Annual Audit for Lending Brokerage',
      category: 'tax',
      tag: 'VIRTUAL CFO & ROC',
      metrics: 'Zero Audit Defect SLA',
      desc: 'Managed complete bookkeeping, ROC AOC-4 annual returns, and statutory tax reconciliation for a rapidly scaling Mumbai financial brokerage.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80'
    }
  ];

  const filtered = caseStudies.filter((c) => activeFilter === 'all' || c.category === activeFilter);

  return (
    <div className="bg-[#08090C] min-h-screen">
      <SeoMeta
        title="50+ Enterprise Case Studies & ROI SLAs | AVRX Portfolio"
        description="Explore how AVRX Digital & Financial Solution accelerates enterprise growth through sub-second web apps, ₹20 Cr loans, and zero-error GST returns."
      />

      <PageBanner
        title="Verified Client Case Studies & ROI SLAs"
        subtitle="Real metrics from CFOs, CTOs, and Founders who entrusted their digital architecture, corporate taxes, and growth capital to AVRX Ecosystem."
        badge="AVRX CLIENT SUCCESS"
        breadcrumbs={[{ label: 'Case Studies' }]}
        ctaText="View All Case Studies"
      />

      <section className="py-20 bg-[#06070B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex items-center gap-3 mb-12">
            {[
              { id: 'all', label: 'All Case Studies' },
              { id: 'web', label: 'Web & AI Engineering' },
              { id: 'fin', label: 'Financial & Loans' },
              { id: 'tax', label: 'GST & Virtual CFO' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeFilter === f.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                    : 'bg-white/5 text-slate-400 hover:text-white border border-white/10'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filtered.map((study) => (
              <div
                key={study.id}
                className="glass-card rounded-3xl border border-white/10 overflow-hidden hover:border-blue-500/40 bg-[#0C0F1D]/80 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="h-56 w-full relative overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-cyan-300 text-[11px] font-bold border border-white/20">
                        {study.tag}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 space-y-4">
                    <div className="flex items-center gap-2 text-xs font-bold text-cyan-400">
                      <TrendingUp className="w-4 h-4" />
                      <span>{study.metrics}</span>
                    </div>

                    <h3 className="text-xl font-poppins font-bold text-white">
                      {study.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {study.desc}
                    </p>
                  </div>
                </div>

                <div className="p-8 pt-0">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 hover:text-blue-300"
                  >
                    <span>Request Similar SLA Solution</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
