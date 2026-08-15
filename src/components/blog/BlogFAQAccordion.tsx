import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { BlogFAQ } from '../../types/blog';

interface BlogFAQAccordionProps {
  faqs: BlogFAQ[];
}

export const BlogFAQAccordion: React.FC<BlogFAQAccordionProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="my-10 space-y-4 not-prose">
      <div className="mb-6">
        <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
          FAQ Knowledge Base
        </span>
        <h3 className="text-2xl sm:text-3xl font-black text-white mt-2">
          Frequently Asked Questions
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Everything you need to know before launching your business website in 2026
        </p>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div
              key={idx}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? 'bg-slate-900/90 border-cyan-500/40 shadow-[0_4px_20px_rgba(0,240,255,0.08)]'
                  : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
              }`}
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-white hover:text-cyan-300 transition"
              >
                <div className="flex items-center gap-3">
                  <HelpCircle className={`w-5 h-5 shrink-0 transition-colors ${isOpen ? 'text-cyan-400' : 'text-slate-500'}`} />
                  <span>{faq.question}</span>
                </div>
                <div className={`p-1.5 rounded-lg bg-slate-800/80 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-cyan-500/20 text-cyan-400' : 'text-slate-400'}`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-800/60 pl-13">
                  <p className="pl-8">{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
