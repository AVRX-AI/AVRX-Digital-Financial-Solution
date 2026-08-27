import React, { useState } from 'react';
import { GENERAL_FAQS } from '../data/servicesData';
import { SEO } from '../components/common/SEO';
import { HelpCircle, Search, ChevronRight, MessageSquare, PhoneCall, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

interface FAQPageProps {
  onNavigate?: (page: string, slug?: string) => void;
}

export const FAQPage: React.FC<FAQPageProps> = ({ onNavigate }) => {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'digital', name: 'Web & Digital' },
    { id: 'financial', name: 'Loans & Finance' },
    { id: 'tax', name: 'GST & Tax Legal' },
    { id: 'insurance', name: 'Insurance' }
  ];

  const filteredFaqs = GENERAL_FAQS.filter(f =>
    f.question.toLowerCase().includes(query.toLowerCase()) ||
    f.answer.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#040713] text-white pt-28 pb-24 selection:bg-cyan-500 selection:text-slate-950 relative">
      <SEO
        title="Frequently Asked Questions (FAQ) | AVRX Knowledge Base"
        description="Find clear, verified answers to questions about AVRX website development, business loans, GST tax filings, insurance plans, and next-gen AI tools."
        faqs={GENERAL_FAQS}
        breadcrumbs={[
          { name: 'Home', url: 'https://avrx.in/' },
          { name: 'FAQ', url: 'https://avrx.in/faq' }
        ]}
      />

      {/* Ambient background glows */}
      <div className="fixed top-20 left-1/4 w-[600px] h-[400px] bg-cyan-500/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="fixed bottom-20 right-1/4 w-[600px] h-[500px] bg-purple-500/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10 space-y-12">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400">
          <button 
            onClick={() => onNavigate?.('home')}
            className="hover:text-cyan-400 transition-colors"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-cyan-300 font-semibold">FAQ &amp; Knowledge Base</span>
        </nav>

        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-widest font-mono">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>INSTANT KNOWLEDGE BASE &amp; VERIFIED ADVISORY</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            Frequently Asked <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300">
              Questions &amp; Insights
            </span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Everything you need to know about our web engineering, loan disbursements, GST compliance, and enterprise SLAs.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-300" />
            <div className="relative flex items-center bg-slate-950 border border-slate-700/80 rounded-2xl px-4 py-3.5 shadow-2xl">
              <Search className="w-5 h-5 text-cyan-400 shrink-0 mr-3" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by topic, keyword (e.g. GST, Website, Loans, SLA)..."
                className="w-full bg-transparent border-none text-white placeholder-slate-400 focus:outline-none text-sm sm:text-base font-medium"
              />
              {query && (
                <button 
                  onClick={() => setQuery('')}
                  className="text-xs text-slate-400 hover:text-white px-2 py-1 bg-slate-800 rounded-lg"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* FAQ Accordion Grid */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'bg-slate-900/90 border-cyan-500/50 shadow-[0_0_25px_rgba(0,240,255,0.15)]'
                      : 'bg-slate-950/70 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/50'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-xl shrink-0 transition-colors ${
                        isOpen ? 'bg-cyan-500/20 text-cyan-400' : 'bg-slate-900 text-slate-400'
                      }`}>
                        <HelpCircle className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold text-base sm:text-lg text-white">
                        {faq.question}
                      </h3>
                    </div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-transform duration-300 ${
                      isOpen ? 'rotate-180 border-cyan-500/40 bg-cyan-500/10 text-cyan-400' : 'border-slate-800 text-slate-400'
                    }`}>
                      <ChevronRight className="w-4 h-4 rotate-90" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-800/60 animate-in fade-in duration-200">
                      <div className="pl-11">
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-16 bg-slate-950/60 rounded-3xl border border-slate-800 p-8 space-y-4">
              <HelpCircle className="w-12 h-12 text-slate-500 mx-auto" />
              <h3 className="text-xl font-bold text-white">No matching questions found</h3>
              <p className="text-slate-400 text-sm max-w-md mx-auto">
                Couldn't find what you're looking for? Our human consultants and AI assistant are available 24/7.
              </p>
              <button
                onClick={() => onNavigate?.('contact')}
                className="px-6 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-sm hover:bg-cyan-400 transition"
              >
                Ask Our Support Team
              </button>
            </div>
          )}
        </div>

        {/* Still have questions banner */}
        <div className="max-w-4xl mx-auto rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-slate-950 via-cyan-950/30 to-slate-950 border border-cyan-500/30 shadow-[0_0_40px_rgba(0,240,255,0.1)] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-black text-white">Still have custom questions?</h3>
            <p className="text-slate-300 text-sm max-w-lg">
              Speak directly with an AVRX technical architect or financial advisor for a free 15-minute project estimation.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigate?.('contact')}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-black text-sm shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:brightness-110 transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Contact Us Now</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
