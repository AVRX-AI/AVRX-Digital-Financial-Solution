import React, { useState } from 'react';
import { GENERAL_FAQS } from '../data/servicesData';
import { SEO } from '../components/common/SEO';
import { HelpCircle, Search } from 'lucide-react';

export const FAQPage: React.FC = () => {
  const [query, setQuery] = useState('');

  const filteredFaqs = GENERAL_FAQS.filter(f =>
    f.question.toLowerCase().includes(query.toLowerCase()) ||
    f.answer.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#050811] text-white pt-28 pb-20">
      <SEO
        title="Frequently Asked Questions (FAQ) | AVRX Knowledge Base"
        description="Find clear answers to questions about AVRX digital development, business loans, GST tax filings, insurance plans, and AI tools."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            Knowledge Base
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
            Frequently Asked Questions
          </h1>
          <p className="text-slate-300 text-base">
            Everything you need to know about our services, process, timelines, and security guarantees.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-10">
          <Search className="w-5 h-5 text-cyan-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search questions (e.g. GST, Loan, Website timeline)..."
            className="w-full bg-slate-900 border border-slate-800 rounded-2xl pl-12 pr-4 py-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
          />
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2.5">
                <HelpCircle className="w-5 h-5 text-cyan-400 shrink-0" />
                <span>{faq.question}</span>
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed pl-7.5">{faq.answer}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
