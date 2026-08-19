import React, { useState } from 'react';
import { DIGITAL_SERVICES, FINANCIAL_SERVICES, TAX_SERVICES, INSURANCE_SERVICES, HOSTING_PRODUCTS, AI_TOOLS } from '../data/servicesData';
import { ServiceItem, AIToolItem } from '../types';
import { SEO } from '../components/common/SEO';
import { renderServiceIcon } from '../utils/iconMap';
import { Search, ArrowRight, Code, DollarSign, FileText, Shield, Server, Cpu } from 'lucide-react';

interface AllServicesPageProps {
  onNavigate: (page: string, serviceId?: string) => void;
}

export const AllServicesPage: React.FC<AllServicesPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const allServices: (ServiceItem | AIToolItem)[] = [
    ...DIGITAL_SERVICES,
    ...FINANCIAL_SERVICES,
    ...TAX_SERVICES,
    ...INSURANCE_SERVICES,
    ...HOSTING_PRODUCTS,
    ...AI_TOOLS
  ];

  const filtered = allServices.filter(item => {
    const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
    const title = 'title' in item ? item.title : item.name;
    const desc = 'shortDesc' in item ? item.shortDesc : item.description;
    const matchesQuery = !searchQuery.trim() || 
      title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      desc.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCat && matchesQuery;
  });

  const categories = [
    { id: 'all', label: 'All Services (50+)' },
    { id: 'digital', label: 'Digital' },
    { id: 'financial', label: 'Financial' },
    { id: 'tax', label: 'Tax' },
    { id: 'insurance', label: 'Insurance' },
    { id: 'hosting', label: 'Hosting & Products' },
    { id: 'ai-tool', label: 'AI Tools' }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'digital': return 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10';
      case 'financial': return 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10';
      case 'tax': return 'text-amber-400 border-amber-500/30 bg-amber-500/10';
      case 'insurance': return 'text-purple-400 border-purple-500/30 bg-purple-500/10';
      case 'hosting': return 'text-blue-400 border-blue-500/30 bg-blue-500/10';
      default: return 'text-rose-400 border-rose-500/30 bg-rose-500/10';
    }
  };

  return (
    <div className="min-h-screen bg-[#050811] text-white pt-28 pb-20">
      <SEO
        title="Complete Services Directory (50+) | AVRX Ecosystem"
        description="Browse all 50+ AVRX Digital, Financial, Tax, Insurance, Hosting, and AI tools in one directory."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            Unified Ecosystem Directory
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white">
            All AVRX Services & Solutions
          </h1>
          <p className="text-slate-300 text-base sm:text-lg">
            Search and filter through our full directory of digital engineering, loans, tax returns, insurance plans, and AI tools.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="space-y-6 mb-12">
          <div className="max-w-2xl mx-auto relative">
            <Search className="w-5 h-5 text-cyan-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search 50+ services (e.g. Website, Personal Loan, GST, Motor Insurance)..."
              className="w-full bg-slate-900 border border-slate-800 rounded-2xl pl-12 pr-4 py-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 shadow-xl"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2.5 rounded-2xl text-xs font-semibold transition border ${
                  selectedCategory === cat.id
                    ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.3)] font-bold'
                    : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(item => {
            const title = 'title' in item ? item.title : item.name;
            const desc = 'shortDesc' in item ? item.shortDesc : item.description;
            const iconName = item.iconName;
            const imageUrl = 'imageUrl' in item ? (item as any).imageUrl : undefined;
            const badge = 'badge' in item ? item.badge : ('tag' in item ? item.tag : undefined);
            const price = 'priceStarting' in item ? item.priceStarting : undefined;

            return (
              <div
                key={item.id}
                onClick={() => {
                  if (item.category === 'ai-tool') {
                    onNavigate('ai-tools');
                  } else {
                    onNavigate('service-detail', item.id);
                  }
                }}
                className="rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition cursor-pointer group flex flex-col justify-between overflow-hidden hover:-translate-y-1 shadow-lg"
              >
                <div>
                  {/* Card Image Thumbnail */}
                  {imageUrl ? (
                    <div className="relative h-44 w-full overflow-hidden bg-slate-950 border-b border-slate-800/80">
                      <img
                        src={imageUrl}
                        alt={title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
                      
                      <div className="absolute top-3 left-3 p-2 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-700/80">
                        {renderServiceIcon(iconName, 'w-4 h-4 text-cyan-400')}
                      </div>

                      <div className="absolute top-3 right-3 flex items-center gap-1.5">
                        <span className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full border ${getCategoryColor(item.category)} backdrop-blur-md`}>
                          {item.category}
                        </span>
                      </div>

                      {price && (
                        <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-slate-950/90 border border-slate-800 text-[11px] font-mono font-bold text-cyan-300">
                          {price}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="p-6 pb-0 flex items-center justify-between">
                      <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                        {renderServiceIcon(iconName, 'w-5 h-5 text-cyan-400')}
                      </div>
                      <span className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full border ${getCategoryColor(item.category)}`}>
                        {item.category}
                      </span>
                    </div>
                  )}

                  <div className="p-6">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition line-clamp-1">
                        {title}
                      </h3>
                      {badge && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 shrink-0">
                          {badge}
                        </span>
                      )}
                    </div>
                    <p className="text-slate-400 text-xs mt-2 leading-relaxed line-clamp-3">
                      {desc}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold text-cyan-400 group-hover:translate-x-1 transition">
                    <span>Explore Service</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
