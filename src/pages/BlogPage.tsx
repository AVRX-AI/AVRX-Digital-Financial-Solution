import React from 'react';
import { Link } from 'react-router-dom';
import SeoMeta from '../components/common/SeoMeta';
import Breadcrumbs from '../components/common/Breadcrumbs';
import PageBanner from '../components/layout/PageBanner';
import {
  Calendar,
  User,
  ArrowRight,
  TrendingUp,
  Award,
  Sparkles
} from 'lucide-react';

export default function BlogPage() {
  const breadcrumbs = [
    { name: 'Blog & Articles', url: '/blog' }
  ];

  const posts = [
    {
      id: 'website-design-guide-ambikapur',
      title: 'Essential Guide to Website Design & Local SEO for Businesses in Ambikapur',
      category: 'WEBSITE & SEO',
      date: 'August 1, 2026',
      author: 'Avinash Rai',
      readTime: '6 min read',
      desc: 'How custom mobile-responsive website design and localized SEO help local businesses in Surguja attract more local customers online.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'gst-notice-defense-guide',
      title: 'GST Registration & Monthly Filing Checklist for Traders in Chhattisgarh',
      category: 'STATUTORY TAX',
      date: 'July 24, 2026',
      author: 'CA Siddharth Kothari',
      readTime: '8 min read',
      desc: 'A comprehensive guide on GSTR-1, GSTR-3B monthly filings, ITC reconciliation, and avoiding compliance penalties in Chhattisgarh.',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'business-loans-surguja-guide',
      title: 'How to Secure Unsecured Business Loans in Ambikapur & Surguja',
      category: 'FINANCIAL CAPITAL',
      date: 'July 15, 2026',
      author: 'AVRX Capital Advisory',
      readTime: '5 min read',
      desc: 'Understand bank underwriting criteria, GST turnover requirements, and document checklists for quick business loan approvals.',
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <div className="bg-[#08090C] min-h-screen">
      <SeoMeta
        title="Blog & Business Insights | AVRX Digital Ambikapur"
        description="Read articles on website design, local SEO, GST filing, ITR returns, and business loan guidance in Ambikapur, Surguja, Chhattisgarh."
        keywords="AVRX blog, website design Ambikapur blog, GST guide Chhattisgarh, business loan tips Surguja"
        canonicalUrl="https://avrx.in/blog"
        breadcrumbsData={breadcrumbs}
      />

      <PageBanner
        title="Digital & Financial Business Journal (Ambikapur)"
        subtitle="Practical guides and insights on website development, SEO, tax compliance, and business loans."
        badge="AVRX JOURNAL"
        breadcrumbs={[{ label: 'Insights & Blog' }]}
        ctaText="Subscribe to Digest"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      <section className="py-20 bg-[#06070B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <div
                key={post.id}
                className="glass-card rounded-3xl border border-white/10 overflow-hidden hover:border-blue-500/40 bg-[#0C0F1D]/80 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="h-48 w-full relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-blue-600/90 backdrop-blur-md text-white text-[10px] font-bold">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-7 space-y-3">
                    <div className="flex items-center gap-4 text-xs text-slate-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        {post.date}
                      </span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-lg font-poppins font-bold text-white leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {post.desc}
                    </p>
                  </div>
                </div>

                <div className="p-7 pt-0 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-400">{post.author}</span>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 hover:text-blue-300"
                  >
                    <span>Read Article</span>
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
