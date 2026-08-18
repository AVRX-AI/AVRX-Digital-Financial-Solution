import React, { useState } from 'react';
import { 
  BookOpen, 
  Sparkles, 
  Search, 
  FileText, 
  HelpCircle, 
  ArrowRight, 
  ShieldCheck, 
  DollarSign, 
  TrendingUp, 
  Code2,
  CheckCircle2
} from 'lucide-react';

interface ResourceCenterSectionProps {
  onNavigate: (page: string, slug?: string) => void;
}

interface KnowledgeCard {
  id: string;
  category: 'web' | 'loan' | 'tax' | 'seo' | 'insurance';
  titleHi: string;
  titleEn: string;
  summary: string;
  keyPoints: string[];
  readTime: string;
}

export const ResourceCenterSection: React.FC<ResourceCenterSectionProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'web' | 'loan' | 'tax' | 'seo' | 'insurance'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const cards: KnowledgeCard[] = [
    {
      id: 'web-10-points',
      category: 'web',
      titleHi: 'Website banwane se pehle 10 zaroori cheezein',
      titleEn: '10 Crucial Checklist Points Before Building a Website',
      summary: 'Avoid common costly agency mistakes. Understand domain ownership, mobile speed, SSL, and CMS scalability.',
      keyPoints: [
        'Domain must always be registered in your own name',
        'Ensure mobile load speed is under 2.0 seconds',
        'Verify SSL HTTPS security certificate inclusion'
      ],
      readTime: '3 Min Guide'
    },
    {
      id: 'loan-docs',
      category: 'loan',
      titleHi: 'Business loan ke liye kya documents chahiye?',
      titleEn: 'Complete Document Checklist for Unsecured Business Loans',
      summary: 'Get your loan sanctioned in under 48 hours by keeping these exact KYC and financial files ready.',
      keyPoints: [
        'Last 12 months active bank account statements',
        'Last 2 years ITR returns with computation of income',
        'Business registration proof (GSTIN / Udyam)'
      ],
      readTime: '4 Min Guide'
    },
    {
      id: 'gst-mandatory',
      category: 'tax',
      titleHi: 'GST registration kab zaroori hota hai?',
      titleEn: 'When is GST Registration Legally Mandatory in India?',
      summary: 'Clear breakdown of ₹40L goods and ₹20L services threshold limits, inter-state commerce, and e-commerce rules.',
      keyPoints: [
        'Turnover exceeding ₹40 Lakhs (Goods) / ₹20 Lakhs (Services)',
        'Mandatory for inter-state supply regardless of turnover',
        'Required for selling on Amazon, Flipkart, or own store'
      ],
      readTime: '3 Min Guide'
    },
    {
      id: 'seo-ranking',
      category: 'seo',
      titleHi: 'SEO se Google ranking kaise improve hoti hai?',
      titleEn: 'How Technical & Local SEO Boosts Organic Google Ranking',
      summary: 'How to outrank local competitors with Google Business Profile optimization, schema markup, and backlink authority.',
      keyPoints: [
        'Optimize local city keywords and NAP consistency',
        'Earn authoritative backlinks from genuine portals',
        'Maintain 90+ Core Web Vitals mobile score'
      ],
      readTime: '5 Min Guide'
    },
    {
      id: 'health-insurance',
      category: 'insurance',
      titleHi: 'Health insurance choose karte waqt kya dekhein?',
      titleEn: 'Critical Clauses to Check When Buying Health Insurance',
      summary: 'How to avoid claim rejection: Room rent capping, pre-existing disease waiting periods, and cashless hospital networks.',
      keyPoints: [
        'Opt for plans with NO room rent sub-limits',
        'Check cashless hospital network in your city',
        'Check pre-existing disease waiting period (1-3 yrs)'
      ],
      readTime: '4 Min Guide'
    }
  ];

  const filteredCards = cards.filter(card => {
    const matchesCat = activeCategory === 'all' || card.category === activeCategory;
    const matchesSearch = !searchTerm || 
      card.titleHi.toLowerCase().includes(searchTerm.toLowerCase()) || 
      card.titleEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.summary.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section className="py-24 bg-[#070b16] relative overflow-hidden border-t border-slate-800/80">
      
      {/* Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-transparent rounded-full blur-[160px] pointer-events-none" />

      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-5xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-bold font-mono uppercase tracking-widest">
            <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
            <span>Knowledge &amp; Intelligence Base</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            AVRX{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              Resource Center
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Practical, actionable business guides, financial document checklists, and tax compliance playbooks for Indian entrepreneurs.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer border ${
              activeCategory === 'all' ? 'bg-cyan-500 text-slate-950 border-cyan-400' : 'bg-slate-900 text-slate-400 border-slate-800'
            }`}
          >
            All Guides ({cards.length})
          </button>
          <button
            onClick={() => setActiveCategory('web')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer border ${
              activeCategory === 'web' ? 'bg-cyan-500 text-slate-950 border-cyan-400' : 'bg-slate-900 text-slate-400 border-slate-800'
            }`}
          >
            Web &amp; Tech
          </button>
          <button
            onClick={() => setActiveCategory('loan')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer border ${
              activeCategory === 'loan' ? 'bg-cyan-500 text-slate-950 border-cyan-400' : 'bg-slate-900 text-slate-400 border-slate-800'
            }`}
          >
            Loans &amp; Finance
          </button>
          <button
            onClick={() => setActiveCategory('tax')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer border ${
              activeCategory === 'tax' ? 'bg-cyan-500 text-slate-950 border-cyan-400' : 'bg-slate-900 text-slate-400 border-slate-800'
            }`}
          >
            GST &amp; Tax
          </button>
          <button
            onClick={() => setActiveCategory('seo')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer border ${
              activeCategory === 'seo' ? 'bg-cyan-500 text-slate-950 border-cyan-400' : 'bg-slate-900 text-slate-400 border-slate-800'
            }`}
          >
            SEO &amp; Growth
          </button>
          <button
            onClick={() => setActiveCategory('insurance')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer border ${
              activeCategory === 'insurance' ? 'bg-cyan-500 text-slate-950 border-cyan-400' : 'bg-slate-900 text-slate-400 border-slate-800'
            }`}
          >
            Insurance Protection
          </button>
        </div>

        {/* Knowledge Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCards.map(card => (
            <div
              key={card.id}
              className="p-6 sm:p-7 rounded-3xl bg-slate-950/90 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between space-y-4 shadow-xl group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold tracking-widest px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 uppercase">
                    {card.category}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">
                    {card.readTime}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition">
                    {card.titleHi}
                  </h3>
                  <div className="text-xs text-slate-400 font-mono mt-0.5">
                    {card.titleEn}
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {card.summary}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                  {card.keyPoints.map((pt, i) => (
                    <div key={i} className="flex items-start gap-2 text-[11px] text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-xs font-bold text-cyan-400 group-hover:text-cyan-300 flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Ask Specialist About This</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
