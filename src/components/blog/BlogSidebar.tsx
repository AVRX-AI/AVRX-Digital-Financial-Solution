import React, { useEffect, useState } from 'react';
import { List, ArrowRight, PhoneCall, Sparkles, MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '../../config';

interface TOCItem {
  id: string;
  title: string;
}

interface BlogSidebarProps {
  tableOfContents?: TOCItem[];
  onNavigate: (page: string) => void;
}

export const BlogSidebar: React.FC<BlogSidebarProps> = ({ tableOfContents = [], onNavigate }) => {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const headings = tableOfContents
        .map(item => document.getElementById(item.id))
        .filter((el): el is HTMLElement => el !== null);

      const scrollPosition = window.scrollY + 160;

      for (let i = headings.length - 1; i >= 0; i--) {
        const heading = headings[i];
        if (heading.offsetTop <= scrollPosition) {
          setActiveId(heading.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [tableOfContents]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <aside className="space-y-8 sticky top-28">
      {/* 1. Table of Contents Card */}
      {tableOfContents.length > 0 && (
        <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800/90 backdrop-blur-xl shadow-xl space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-800 text-xs font-bold uppercase tracking-wider text-cyan-400">
            <List className="w-4 h-4" />
            <span>Table of Contents</span>
          </div>

          <nav className="space-y-1 max-h-[380px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-slate-800">
            {tableOfContents.map(item => {
              const isActive = activeId === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToHeading(item.id)}
                  className={`w-full text-left py-1.5 px-2.5 rounded-lg text-xs font-medium transition-all duration-200 flex items-center justify-between group ${
                    isActive
                      ? 'bg-cyan-500/10 text-cyan-300 font-bold border-l-2 border-cyan-400 pl-3'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                  }`}
                >
                  <span className="truncate">{item.title}</span>
                  <ArrowRight className={`w-3 h-3 transition-transform ${isActive ? 'text-cyan-400 translate-x-0.5' : 'opacity-0 group-hover:opacity-100 text-slate-500'}`} />
                </button>
              );
            })}
          </nav>
        </div>
      )}

      {/* 2. Need a Digital Solution? Conversion Card */}
      <div className="relative p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-slate-900 via-[#0b1328] to-slate-900 border border-cyan-500/30 overflow-hidden shadow-2xl space-y-5">
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/15 rounded-full blur-2xl pointer-events-none" />

        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-[11px] font-bold uppercase tracking-wide">
            <Sparkles className="w-3 h-3 text-cyan-400" />
            <span>EXPERT ARCHITECTURE</span>
          </div>
          <h3 className="text-xl font-bold text-white leading-tight">
            Need a Digital Solution?
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Let's build something powerful for your business. Modern websites, apps, and automated growth engines.
          </p>
        </div>

        <div className="space-y-2.5 pt-1">
          <button
            onClick={() => onNavigate('contact')}
            className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-400 text-slate-950 font-bold text-xs hover:brightness-110 transition shadow-[0_0_15px_rgba(0,240,255,0.3)] flex items-center justify-center gap-2"
          >
            <span>Talk to AVRX</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => {
              const url = `https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent('Hello AVRX! I need a digital solution for my business.')}`;
              window.open(url, '_blank');
            }}
            className="w-full py-2.5 px-4 rounded-xl bg-slate-900/90 border border-slate-700 hover:border-emerald-500 text-slate-300 hover:text-white font-semibold text-xs transition flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp Consultation</span>
          </button>
        </div>
      </div>
    </aside>
  );
};
