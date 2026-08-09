import React, { useState } from 'react';
import SeoMeta from '../components/common/SeoMeta';
import Breadcrumbs from '../components/common/Breadcrumbs';
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

  const breadcrumbs = [
    { name: 'FAQ & Help', url: '/faq' }
  ];

  const faqs = [
    {
      q: 'Why choose AVRX Digital & Financial Solution in Ambikapur?',
      a: 'AVRX Digital & Financial Solution unifies digital web development, SEO, CA tax & GST filing, personal & business loans, and insurance services under one roof in Ambikapur, Surguja, Chhattisgarh. You deal with one reliable team for all your digital and financial growth needs.'
    },
    {
      q: 'How fast can I get a website built for my business in Ambikapur?',
      a: 'Our website design and development projects are delivered within 7 to 10 working days for Startup MVPs, and 3 to 4 weeks for custom enterprise web applications.'
    },
    {
      q: 'How quickly can I secure a business or personal loan in Surguja?',
      a: 'For business and personal loans, in-principle sanction is provided within 24 to 48 hours based on eligibility and partner bank documentation guidelines.'
    },
    {
      q: 'Who handles GST registration and monthly ITR filing?',
      a: 'Your GST returns and Income Tax filings are prepared and verified by tax specialists, ensuring timely GSTR-1, GSTR-3B, and ITR compliance.'
    },
    {
      q: 'Do I own 100% of the source code for my website or application?',
      a: 'Yes. Upon project completion, 100% intellectual property, source code, and design assets belong entirely to you.'
    },
    {
      q: 'Where is AVRX Digital & Financial Solution located in Ambikapur?',
      a: 'Our office is located at Waterpark Ambikapur, NH343, Surguja District, Chhattisgarh - 497001. You can visit or contact us at +91-9630661536.'
    }
  ];

  const faqSchemaData = faqs.map((item) => ({
    question: item.q,
    answer: item.a
  }));

  return (
    <div className="bg-[#08090C] min-h-screen">
      <SeoMeta
        title="Frequently Asked Questions (FAQ) | AVRX Digital Ambikapur"
        description="Get answers to FAQs about website design, SEO, business loans, personal loans, GST filing, and insurance services at AVRX in Ambikapur, Surguja, Chhattisgarh."
        keywords="AVRX FAQ, website design FAQ Ambikapur, business loan questions Surguja, GST filing FAQ Chhattisgarh"
        canonicalUrl="https://avrx.in/faq"
        breadcrumbsData={breadcrumbs}
        faqData={faqSchemaData}
      />

      <PageBanner
        title="Frequently Asked Questions (FAQ) - Ambikapur"
        subtitle="Answers to common questions regarding our digital services, tax compliance, and financial loan solutions."
        badge="AVRX KNOWLEDGE BASE"
        breadcrumbs={[{ label: 'FAQ' }]}
        ctaText="Ask Executive Desk"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={breadcrumbs} />
      </div>

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
