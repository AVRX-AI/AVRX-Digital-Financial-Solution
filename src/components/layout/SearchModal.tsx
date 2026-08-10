import React, { useState, useMemo } from 'react';
import { Search, X, ArrowRight, Code, DollarSign, FileText, Shield, Server, Cpu } from 'lucide-react';
import { DIGITAL_SERVICES, FINANCIAL_SERVICES, TAX_SERVICES, INSURANCE_SERVICES, HOSTING_PRODUCTS, AI_TOOLS } from '../../data/servicesData';
import { ServiceItem, AIToolItem } from '../../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectService: (service: ServiceItem | AIToolItem) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onSelectService }) => {
  const [query, setQuery] = useState('');

  const allItems = useMemo(() => {
    const services: (ServiceItem | AIToolItem)[] = [
      ...DIGITAL_SERVICES,
      ...FINANCIAL_SERVICES,
      ...TAX_SERVICES,
      ...INSURANCE_SERVICES,
      ...HOSTING_PRODUCTS,
      ...AI_TOOLS
    ];
    return services;
  }, []);

  const filteredItems = useMemo(() => {
    if (!query.trim()) return allItems.slice(0, 8);
    const q = query.toLowerCase();
    return allItems.filter(item => {
      const name = 'title' in item ? item.title : item.name;
      const desc = 'shortDesc' in item ? item.shortDesc : item.description;
      return name.toLowerCase().includes(q) || desc.toLowerCase().includes(q) || item.category.toLowerCase().includes(q);
    }).slice(0, 10);
  }, [query, allItems]);

  if (!isOpen) return null;

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'digital': return <Code className="w-4 h-4 text-cyan-400" />;
      case 'financial': return <DollarSign className="w-4 h-4 text-emerald-400" />;
      case 'tax': return <FileText className="w-4 h-4 text-amber-400" />;
      case 'insurance': return <Shield className="w-4 h-4 text-purple-400" />;
      case 'hosting': return <Server className="w-4 h-4 text-blue-400" />;
      default: return <Cpu className="w-4 h-4 text-rose-400" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-start justify-center pt-16 sm:pt-24 px-4">
      <div className="w-full max-w-2xl bg-[#0b0f19] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Search Input Bar */}
        <div className="relative flex items-center px-4 py-3.5 border-b border-slate-800/80 bg-slate-900/50">
          <Search className="w-5 h-5 text-cyan-400 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search services, loans, tax, insurance or AI tools..."
            className="w-full bg-transparent pl-3 pr-10 text-slate-100 placeholder-slate-400 text-sm sm:text-base focus:outline-none"
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Tag Pills */}
        <div className="px-4 py-2 bg-slate-950/60 border-b border-slate-800/40 flex flex-wrap gap-1.5 text-xs">
          <span className="text-slate-400 py-0.5">Popular:</span>
          {['Website Design', 'Personal Loan', 'GST Registration', 'SEO Ranking', 'Health Insurance', 'AI Health Checker'].map(tag => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              className="px-2 py-0.5 rounded-full bg-slate-800/80 hover:bg-cyan-500/20 hover:text-cyan-300 text-slate-300 transition text-[11px]"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-2 divide-y divide-slate-800/40">
          {filteredItems.length === 0 ? (
            <div className="p-8 text-center text-slate-400 text-sm">
              No services found matching "{query}". Try searching for <span className="text-cyan-400 font-medium">Loans, Website, GST, or AI Tools</span>.
            </div>
          ) : (
            filteredItems.map(item => {
              const title = 'title' in item ? item.title : item.name;
              const desc = 'shortDesc' in item ? item.shortDesc : item.description;

              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onSelectService(item);
                    onClose();
                  }}
                  className="w-full text-left p-3 rounded-xl hover:bg-cyan-500/10 hover:border-cyan-500/30 border border-transparent transition flex items-center justify-between group"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 shrink-0 mt-0.5">
                      {getCategoryIcon(item.category)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-slate-100 text-sm group-hover:text-cyan-300 transition">
                          {title}
                        </span>
                        <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">
                          {item.category}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">{desc}</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition shrink-0 ml-2" />
                </button>
              );
            })
          )}
        </div>

        <div className="px-4 py-2.5 bg-slate-950 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center justify-between">
          <span>Tip: Press ESC to close search</span>
          <span className="text-cyan-400 font-mono">AVRX Search v2.6</span>
        </div>

      </div>
    </div>
  );
};
