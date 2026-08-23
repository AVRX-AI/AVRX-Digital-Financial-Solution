import React, { useState } from 'react';
import { 
  TrendingUp, 
  Search, 
  Globe, 
  Award, 
  Zap, 
  CheckCircle2, 
  ArrowUpRight, 
  ShieldCheck, 
  Sparkles, 
  BarChart3, 
  Gauge, 
  Target, 
  Layers, 
  MousePointerClick,
  ChevronRight
} from 'lucide-react';

interface KeywordRankItem {
  id: string;
  keyword: string;
  category: string;
  client: string;
  rank: number;
  searchVolume: string;
  trafficGrowth: string;
  rankingUrl: string;
  impressions: string;
  color: string;
  intent: 'Transactional' | 'Commercial' | 'Informational';
}

const LIVE_SEO_RANKS: KeywordRankItem[] = [
  {
    id: 'k1',
    keyword: 'Luxury Waterfront Penthouses Mumbai',
    category: 'Real Estate',
    client: 'Grand Pinnacle Residences',
    rank: 1,
    searchVolume: '8,400 / mo',
    trafficGrowth: '+420% Organic',
    rankingUrl: 'grandpinnacle.com/residences',
    impressions: '124,000 / mo',
    color: 'from-amber-500 to-orange-600',
    intent: 'Transactional'
  },
  {
    id: 'k2',
    keyword: 'Modern D2C Silk Couture Store',
    category: 'E-Commerce',
    client: 'LuxeAura Fashion',
    rank: 1,
    searchVolume: '18,500 / mo',
    trafficGrowth: '+390% Organic',
    rankingUrl: 'luxeaura.com/collection',
    impressions: '240,000 / mo',
    color: 'from-pink-500 to-rose-600',
    intent: 'Transactional'
  },
  {
    id: 'k3',
    keyword: 'Specialist Telemedicine Video Consult',
    category: 'Healthcare',
    client: 'ApexHealth Care Network',
    rank: 1,
    searchVolume: '32,000 / mo',
    trafficGrowth: '+580% Organic',
    rankingUrl: 'apexhealth.org/specialists',
    impressions: '380,000 / mo',
    color: 'from-teal-500 to-cyan-600',
    intent: 'Commercial'
  },
  {
    id: 'k4',
    keyword: 'Corporate Tax Advocates & Audit Defense',
    category: 'Legal & Tax',
    client: 'JurisCorp Premier Legal',
    rank: 1,
    searchVolume: '6,200 / mo',
    trafficGrowth: '+400% Organic',
    rankingUrl: 'juriscorp.legal/taxation',
    impressions: '98,000 / mo',
    color: 'from-blue-500 to-indigo-600',
    intent: 'Commercial'
  },
  {
    id: 'k5',
    keyword: 'Multi-Warehouse Cloud ERP Software India',
    category: 'Enterprise SaaS',
    client: 'BizMatrix Suite',
    rank: 1,
    searchVolume: '14,200 / mo',
    trafficGrowth: '+310% Organic',
    rankingUrl: 'bizmatrix.io/modules/erp',
    impressions: '180,000 / mo',
    color: 'from-purple-500 to-indigo-600',
    intent: 'Transactional'
  },
  {
    id: 'k6',
    keyword: 'Michelin Tasting Menu Reservation Online',
    category: 'Hospitality',
    client: 'Saffron & Sage Fine Dining',
    rank: 1,
    searchVolume: '9,800 / mo',
    trafficGrowth: '+460% Organic',
    rankingUrl: 'saffronandsage.com/reserve',
    impressions: '145,000 / mo',
    color: 'from-orange-500 to-amber-600',
    intent: 'Transactional'
  }
];

export const SeoGrowthProofSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('ALL');

  const categories = ['ALL', 'Real Estate', 'E-Commerce', 'Healthcare', 'Legal & Tax', 'Enterprise SaaS', 'Hospitality'];

  const filteredRanks = selectedFilter === 'ALL'
    ? LIVE_SEO_RANKS
    : LIVE_SEO_RANKS.filter(r => r.category === selectedFilter);

  return (
    <section className="w-full py-16 sm:py-24 bg-[#030611] text-white relative overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-cyan-500/[0.08] blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-emerald-500/[0.08] blur-[150px] pointer-events-none" />

      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(16,185,129,0.2)]">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
            <span>ORGANIC SEARCH DOMINANCE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            SEO Rankings &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400">Proven Traffic Growth</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed">
            We don’t just build aesthetic websites — we architect production platforms that rank #1 on Google for transactional, high-intent buyer keywords without continuous ad spend.
          </p>
        </div>

        {/* Top 4 Proof Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          <div className="p-6 rounded-3xl bg-gradient-to-b from-emerald-950/30 via-slate-900/80 to-slate-950 border border-emerald-500/30 shadow-xl space-y-3 hover:border-emerald-400 transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-white font-mono tracking-tight flex items-baseline gap-1">
                <span>#1</span>
                <span className="text-sm font-normal text-emerald-400">Position</span>
              </div>
              <div className="text-xs font-bold text-slate-300 mt-1">Google SERP Rank #1</div>
              <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                Across 85+ competitive high-volume commercial keyword clusters.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-gradient-to-b from-cyan-950/30 via-slate-900/80 to-slate-950 border border-cyan-500/30 shadow-xl space-y-3 hover:border-cyan-400 transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-white font-mono tracking-tight flex items-baseline gap-1">
                <span>+4,760%</span>
              </div>
              <div className="text-xs font-bold text-slate-300 mt-1">Average Organic Traffic Surge</div>
              <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                Zero black-hat shortcuts — purely white-hat schema &amp; lightning speed.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-gradient-to-b from-blue-950/30 via-slate-900/80 to-slate-950 border border-blue-500/30 shadow-xl space-y-3 hover:border-blue-400 transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
              <Gauge className="w-6 h-6" />
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-white font-mono tracking-tight flex items-baseline gap-1">
                <span>99/100</span>
                <span className="text-sm font-normal text-blue-400">Score</span>
              </div>
              <div className="text-xs font-bold text-slate-300 mt-1">Google Lighthouse Core Web Vitals</div>
              <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                Sub-0.4s First Contentful Paint &amp; zero cumulative layout shift.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-gradient-to-b from-purple-950/30 via-slate-900/80 to-slate-950 border border-purple-500/30 shadow-xl space-y-3 hover:border-purple-400 transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
              <MousePointerClick className="w-6 h-6" />
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-white font-mono tracking-tight flex items-baseline gap-1">
                <span>-68%</span>
                <span className="text-sm font-normal text-purple-400">CAC</span>
              </div>
              <div className="text-xs font-bold text-slate-300 mt-1">Customer Acquisition Cost Cut</div>
              <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                Inbound organic leads replace paid PPC ad dependency.
              </p>
            </div>
          </div>

        </div>

        {/* Real Live SERP Keywords Ranking Grid */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                <Search className="w-4 h-4" />
                <span>VERIFIED TOP GOOGLE SERP POSITIONS</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Live Google Keyword Rankings Across Client Deployments
              </h3>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedFilter(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    selectedFilter === cat
                      ? 'bg-cyan-500 text-slate-950 shadow-md scale-105'
                      : 'bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Keywords Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredRanks.map((rankItem) => (
              <div
                key={rankItem.id}
                className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 shadow-xl space-y-4 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-slate-800 border border-slate-700 text-slate-300">
                      {rankItem.category}
                    </span>
                    <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-black shadow-sm">
                      <Award className="w-3.5 h-3.5 text-emerald-400" />
                      <span>RANK #{rankItem.rank} ON GOOGLE</span>
                    </span>
                  </div>

                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                      &quot;{rankItem.keyword}&quot;
                    </h4>
                    <div className="text-xs text-slate-400 mt-1 flex items-center gap-2">
                      <span>Client: <strong className="text-slate-200">{rankItem.client}</strong></span>
                      <span>•</span>
                      <span className="text-[11px] text-cyan-400 font-mono">{rankItem.intent}</span>
                    </div>
                  </div>

                  {/* Google Search Result Mockup Preview */}
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 font-sans space-y-1">
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-400 truncate font-mono">
                      <Globe className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                      <span className="text-emerald-400 truncate">https://{rankItem.rankingUrl}</span>
                    </div>
                    <div className="text-xs font-semibold text-blue-400 truncate">
                      {rankItem.keyword} | Official Portal
                    </div>
                    <div className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                      Instant verified online booking, 100% paperless consultation, and certified expert guidance with 24/7 client support...
                    </div>
                  </div>
                </div>

                {/* Growth Trajectory Footprint */}
                <div className="pt-3 border-t border-slate-800/80 grid grid-cols-2 gap-2 text-center text-xs font-mono">
                  <div className="p-2 rounded-lg bg-slate-950/60 border border-slate-800">
                    <div className="text-[10px] text-slate-400">Search Volume</div>
                    <div className="font-bold text-white mt-0.5">{rankItem.searchVolume}</div>
                  </div>
                  <div className="p-2 rounded-lg bg-emerald-950/30 border border-emerald-500/20">
                    <div className="text-[10px] text-emerald-400">Organic Growth</div>
                    <div className="font-bold text-emerald-300 mt-0.5">{rankItem.trafficGrowth}</div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* 100/100 Core Web Vitals Interactive Audit Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-slate-950 via-[#050917] to-slate-950 border border-slate-800 space-y-8 shadow-2xl relative overflow-hidden">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 text-xs font-mono font-bold uppercase">
              <Gauge className="w-3.5 h-3.5 text-cyan-400" />
              <span>GOOGLE AUDIT BENCHMARKS</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-black text-white">
              Core Web Vitals &amp; PageSpeed Perfection
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Google algorithms penalize slow websites. Every AVRX deployment ships with green 95+ scores out-of-the-box.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto text-center">
            
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-emerald-500/40 space-y-2 shadow-lg">
              <div className="w-16 h-16 rounded-full border-4 border-emerald-500 mx-auto flex items-center justify-center font-mono font-black text-2xl text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                99
              </div>
              <div className="text-sm font-bold text-white">Performance</div>
              <div className="text-[11px] text-slate-400">0.38s First Paint</div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/90 border border-emerald-500/40 space-y-2 shadow-lg">
              <div className="w-16 h-16 rounded-full border-4 border-emerald-500 mx-auto flex items-center justify-center font-mono font-black text-2xl text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                100
              </div>
              <div className="text-sm font-bold text-white">Accessibility</div>
              <div className="text-[11px] text-slate-400">WCAG AA Compliant</div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/90 border border-emerald-500/40 space-y-2 shadow-lg">
              <div className="w-16 h-16 rounded-full border-4 border-emerald-500 mx-auto flex items-center justify-center font-mono font-black text-2xl text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                100
              </div>
              <div className="text-sm font-bold text-white">Best Practices</div>
              <div className="text-[11px] text-slate-400">HTTPS &amp; CSP Ready</div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/90 border border-emerald-500/40 space-y-2 shadow-lg">
              <div className="w-16 h-16 rounded-full border-4 border-emerald-500 mx-auto flex items-center justify-center font-mono font-black text-2xl text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                100
              </div>
              <div className="text-sm font-bold text-white">SEO Score</div>
              <div className="text-[11px] text-slate-400">100% Rich Schema</div>
            </div>

          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-mono">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Zero Layout Shift (CLS &lt; 0.01)</span>
            </span>
            <span className="flex items-center gap-1.5 text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>First Contentful Paint &lt; 0.5s</span>
            </span>
            <span className="flex items-center gap-1.5 text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Edge CDN Server Response &lt; 80ms</span>
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
