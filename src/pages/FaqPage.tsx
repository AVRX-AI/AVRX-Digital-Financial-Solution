import React, { useState } from 'react';
import SeoMeta from '../components/common/SeoMeta';
import PageBanner from '../components/layout/PageBanner';
import {
  HelpCircle,
  ChevronDown,
  ShieldCheck,
  Award,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Why should I choose AVRX Ecosystem over standard web agencies or loan brokers?',
      a: 'AVRX Ecosystem unifies three critical business pillars under one NDA and Service Level Agreement: 1) High-performance React/Next.js Digital Product Engineering, 2) CA-certified statutory GST and Income Tax compliance, and 3) Collateral-free business loans up to ₹20 Crores from RBI Tier-1 bank partners. You deal with one accountable executive team instead of four disconnected vendors.'
    },
    {
      q: 'What is your 0.6s LCP Core Web Vitals speed guarantee?',
      a: 'Unlike template builders that bloat JavaScript, we handcraft our web applications using React 18, Next.js, Tailwind CSS, and Edge NVMe caching. We guarantee your application will load within 0.6 seconds LCP and achieve 95+ Google PageSpeed Insights scores.'
    },
    {
      q: 'How fast can my company secure a collateral-free business loan?',
      a: 'For unsecured business loans up to ₹5 Crores, we provide in-principle sanction within 48 hours based on your GST returns and banking transaction flows. No residential or commercial collateral is pledged.'
    },
    {
      q: 'Who manages my GST and Income Tax filing?',
      a: 'Your statutory taxes are managed by our in-house panel of Fellow Chartered Accountants (FCA) and Corporate Attorneys. We assign a dedicated CA with a direct phone line to ensure zero-error GSTR-3B filing and audit compliance.'
    },
    {
      q: 'Do I own 100% of the source code for my web or mobile application?',
      a: 'Yes. Upon final milestone payment, 100% intellectual property, GitHub source code repositories, and design assets are legally assigned to your enterprise under strict NDA.'
    },
    {
      q: 'How does your AI Website Health Checker work?',
      a: 'Our live diagnostic scanner inspects your live domain for JavaScript render bottlenecks, missing schema tags, SSL certificate encryption grade, and mobile accessibility, providing actionable architectural recommendations.'
    }
  ];

  return (
    <div className="bg-[#08090C] min-h-screen">
      <SeoMeta
        title="Frequently Asked Questions | AVRX Ecosystem SLA"
        description="Answers to common questions regarding our digital product engineering SLAs, CA tax compliance, and instant business loan sanctions."
      />

      <PageBanner
        title="Frequently Asked Questions & SLA Knowledge Base"
        subtitle="Everything you need to know about our engineering standards, statutory tax SLA guarantees, and capital disbursal timelines."
        badge="AVRX SLA KNOWLEDGE BASE"
        breadcrumbs={[{ label: 'FAQ & Knowledge Base' }]}
        ctaText="Ask Executive Desk"
      />

      <section className="py-20 bg-[#06070B]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="glass-card rounded-2xl border border-white/10 overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-white/5 transition-colors"
                  >
                    <span className="text-base sm:text-lg font-poppins font-bold text-white">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-blue-400 flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-16 glass-card p-8 rounded-3xl border border-blue-500/30 text-center space-y-4 bg-gradient-to-r from-blue-900/30 to-cyan-900/30">
            <h4 className="text-xl font-poppins font-bold text-white">
              Still have questions about your specific requirements?
            </h4>
            <p className="text-sm text-slate-300 max-w-lg mx-auto">
              Our Chief Solutions Architect and practicing Chartered Accountants are available for a 30-minute free scoping call.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-xs shadow-xl shadow-blue-500/25 transition-all"
            >
              <span>Schedule 30-Minute Free Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
