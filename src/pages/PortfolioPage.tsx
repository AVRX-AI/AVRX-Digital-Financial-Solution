import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SeoMeta from '../components/common/SeoMeta';
import Breadcrumbs from '../components/common/Breadcrumbs';
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

  const breadcrumbs = [
    { name: 'Portfolio & Projects', url: '/portfolio' }
  ];

  const caseStudies = [
    {
      id: 'retail-website-ambikapur',
      title: 'E-Commerce & Digital Presence for Retail Store in Ambikapur',
      category: 'web',
      tag: 'WEBSITE + SEO',
      metrics: '250% Online Leads • Fast Load Time',
      desc: 'Built a responsive retail e-commerce website with localized Google My Business SEO integration for a leading retailer in Ambikapur.',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'working-capital-surguja',
      title: '₹25 Lakh Business Working Capital Loan in Surguja',
      category: 'fin',
      tag: 'BUSINESS LOAN',
      metrics: '48 Hour Sanction • Competitive Rate',
      desc: 'Facilitated a collateral-free business loan through partner banks for a local manufacturing business in Surguja District.',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'local-seo-chhattisgarh',
      title: 'On-Page & Local SEO Optimization for Healthcare Clinic',
      category: 'web',
      tag: 'LOCAL SEO',
      metrics: '#1 Rank in Ambikapur for Local Search',
      desc: 'Implemented custom schema markups, Google Map optimization, and local content strategy to capture top rankings in Surguja.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'gst-compliance-chhattisgarh',
      title: 'GST Filing & Annual Audit for Commercial Enterprise',
      category: 'tax',
      tag: 'GST & TAX COMPLIANCE',
      metrics: 'Zero Penalty SLA Compliance',
      desc: 'Managed monthly GSTR-1, GSTR-3B filings and annual tax reconciliation for a growing business in Ambikapur.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80'
    }
  ];

  const filtered = caseStudies.filter((c) => activeFilter === 'all' || c.category === activeFilter);

  return (
    <div className="bg-[#08090C] min-h-screen">
      <SeoMeta
        title="Portfolio & Work Gallery | AVRX Digital Ambikapur"
        description="View our portfolio of website designs, web development, SEO success stories, business loans, and GST tax compliance projects in Ambikapur, Chhattisgarh."
        keywords="AVRX portfolio, website work Ambikapur, web development projects Surguja, business loan client success Chhattisgarh"
        canonicalUrl="https://avrx.in/portfolio"
        breadcrumbsData={breadcrumbs}
      />

      <PageBanner
        title="Verified Client Case Studies & Success Stories (Ambikapur)"
        subtitle="Real results from business owners, traders, and founders who trusted AVRX Digital & Financial Solution."
        badge="AVRX CLIENT SUCCESS"
        breadcrumbs={[{ label: 'Portfolio' }]}
        ctaText="View All Case Studies"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={breadcrumbs} />
      </div>

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
