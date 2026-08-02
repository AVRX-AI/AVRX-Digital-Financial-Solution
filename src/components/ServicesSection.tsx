import React, { useState } from 'react';
import {
  Search,
  Sparkles,
  Check,
  ArrowRight,
  DollarSign,
  Clock,
  ShieldCheck,
  Tag,
  ExternalLink,
  Layers,
  Award,
  TrendingUp,
  Zap
} from 'lucide-react';
import { ServiceItem } from '../types';
import { servicesData } from '../data/servicesData';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenConsultation: () => void;
  onExploreService?: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onOpenConsultation,
  onExploreService
}) => {
  const [activeTab, setActiveTab] = useState<'All' | 'Digital' | 'Financial'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSubFilter, setActiveSubFilter] = useState<string>('all');

  const subFilters = [
    { id: 'all', label: 'All Categories' },
    { id: 'web', label: 'Web & E-Commerce' },
    { id: 'app', label: 'Mobile Apps & Cloud' },
    { id: 'seo', label: 'SEO & Growth' },
    { id: 'loan', label: 'MSME & Business Loans' },
    { id: 'tax', label: 'GST & Income Tax (ITR)' }
  ];

  const filteredServices = servicesData.filter((service) => {
    const isDigital = service.category.toLowerCase() === 'digital';

    const matchesTab =
      activeTab === 'All' ||
      (activeTab === 'Digital' && isDigital) ||
      (activeTab === 'Financial' && !isDigital);

    const matchesSubFilter =
      activeSubFilter === 'all' ||
      (activeSubFilter === 'web' && (service.id.includes('website') || service.id.includes('ecommerce') || service.id.includes('maintenance'))) ||
      (activeSubFilter === 'app' && (service.id.includes('app') || service.id.includes('cloud') || service.id.includes('hosting'))) ||
      (activeSubFilter === 'seo' && (service.id.includes('seo') || service.id.includes('ads') || service.id.includes('social') || service.id.includes('branding') || service.id.includes('graphic'))) ||
      (activeSubFilter === 'loan' && (service.id.includes('loan') || service.id.includes('credit') || service.id.includes('udyam'))) ||
      (activeSubFilter === 'tax' && (service.id.includes('gst') || service.id.includes('itr') || service.id.includes('tax') || service.id.includes('company') || service.id.includes('insurance')));

    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.features.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesTab && matchesSubFilter && matchesSearch;
  });

  // Featured Packages Spotlight (Top 4 most popular services)
  const featuredIds = ['website-design', 'app-development', 'seo-services', 'web-hosting'];
  const featuredServices = servicesData.filter((s) => featuredIds.includes(s.id));

  const handleExplore = (srv: ServiceItem) => {
    if (onExploreService) {
      onExploreService(srv);
    } else {
      onSelectService(srv);
    }
  };

  return (
    <section id="services" className="py-24 bg-[#081B33] relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-bold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>20+ SPECIALIZED GROWTH & FINANCE SOLUTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-[#0A66FF]">Dedicated Service Pages</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white/70">
            Click any service to view full specifications, transparent pricing, deliverables, and CA/Tech dual advantages.
          </p>
        </div>

        {/* Featured Top Packages Spotlight Banner */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2 text-xs font-extrabold text-cyan-400 uppercase tracking-wider">
              <Zap className="w-4 h-4" />
              <span>MOST POPULAR AVRX PACKAGES</span>
            </div>
            <span className="text-xs text-white/50">Fixed & Transparent Pricing</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredServices.map((feat) => (
              <div
                key={feat.id}
                onClick={() => handleExplore(feat)}
                className="group rounded-2xl bg-gradient-to-b from-white/[0.08] to-white/[0.03] hover:from-white/[0.12] hover:to-white/[0.06] border border-cyan-400/30 hover:border-cyan-400 p-5 cursor-pointer transition-all duration-300 hover:-translate-y-1 shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold text-cyan-300 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-400/30">
                      Featured Package
                    </span>
                    <span className="text-xs font-black text-emerald-400">
                      {feat.startingPrice}
                    </span>
                  </div>
                  <h3 className="text-base font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-[11px] text-white/70 line-clamp-2 mt-1">
                    {feat.tagline}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-bold text-cyan-300 group-hover:text-white">
                  <span>Explore Full Page</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filters & Search Row */}
        <div className="space-y-4 mb-10 pb-6 border-b border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Main Category Tabs */}
            <div className="flex items-center p-1 rounded-2xl bg-white/5 border border-white/10 w-full md:w-auto">
              {[
                { id: 'All', label: 'All Services (20)' },
                { id: 'Digital', label: '12 Digital & Web' },
                { id: 'Financial', label: '8 Financial & CA' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex-1 md:flex-initial px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-[#0A66FF] to-cyan-500 text-white shadow-lg shadow-blue-500/30'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search website, GST, loan, SEO..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-white/40 focus:outline-none focus:border-cyan-400"
              />
            </div>
          </div>

          {/* Sub-category Pill Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {subFilters.map((sub) => (
              <button
                key={sub.id}
                onClick={() => setActiveSubFilter(sub.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  activeSubFilter === sub.id
                    ? 'bg-cyan-400/20 text-cyan-300 border border-cyan-400/40'
                    : 'bg-white/5 text-white/60 hover:text-white border border-white/5 hover:border-white/20'
                }`}
              >
                {sub.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid (20 Specialized Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((srv) => {
            const isDigital = srv.category.toLowerCase() === 'digital';
            return (
              <div
                key={srv.id}
                onClick={() => handleExplore(srv)}
                className="group relative rounded-3xl bg-gradient-to-b from-white/[0.07] to-white/[0.03] hover:from-white/[0.11] hover:to-white/[0.05] border border-white/10 hover:border-cyan-400/60 p-6 sm:p-7 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:-translate-y-1.5 shadow-xl shadow-black/30"
              >
                {/* Top Subtle Gradient Line */}
                <div
                  className={`absolute top-0 left-6 right-6 h-1 rounded-full transition-opacity opacity-70 group-hover:opacity-100 ${
                    isDigital
                      ? 'bg-gradient-to-r from-cyan-400 to-[#0A66FF]'
                      : 'bg-gradient-to-r from-purple-400 to-pink-500'
                  }`}
                />

                <div>
                  {/* Badge & Price */}
                  <div className="flex items-center justify-between mb-4 pt-1">
                    <span
                      className={`px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider border ${
                        isDigital
                          ? 'bg-blue-500/10 text-cyan-300 border-cyan-400/30'
                          : 'bg-purple-500/10 text-purple-300 border-purple-400/30'
                      }`}
                    >
                      {isDigital ? 'DIGITAL & TECH' : 'FINANCIAL & TAX'}
                    </span>
                    <div className="text-right">
                      <div className="text-sm font-black text-white group-hover:text-cyan-300 transition-colors">
                        {srv.startingPrice}
                      </div>
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold text-white mb-1.5 group-hover:text-cyan-300 transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs font-semibold text-cyan-300/90 mb-3">
                    {srv.tagline}
                  </p>
                  <p className="text-xs text-white/70 line-clamp-3 mb-5 leading-relaxed">
                    {srv.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2 mb-6">
                    {srv.features.slice(0, 4).map((feat, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-xs text-white/80">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Timeline & Two CTA Buttons */}
                <div className="pt-4 border-t border-white/10 space-y-3">
                  <div className="flex items-center justify-between text-[11px] text-white/60">
                    <div className="flex items-center space-x-1.5">
                      <Clock className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{srv.estimatedTimeline}</span>
                    </div>
                    <span className="text-[10px] text-cyan-400 font-bold group-hover:underline">
                      Click for Full Page ↗
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleExplore(srv);
                      }}
                      className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all flex items-center justify-center space-x-1"
                    >
                      <span>Explore Page</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectService(srv);
                      }}
                      className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#0A66FF] to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white text-xs font-black transition-all flex items-center justify-center space-x-1 shadow-md shadow-blue-500/20"
                    >
                      <span>Book Now</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-blue-900/40 via-purple-900/40 to-cyan-900/40 border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-6 backdrop-blur-xl">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0A66FF] to-cyan-500 flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-500/30">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Need a Customized Multi-Service Combo?</h4>
              <p className="text-xs text-white/70 mt-0.5">
                Get a custom package bundling Website + SEO + GST Registration + MSME Loan assistance with a 15% bundled discount.
              </p>
            </div>
          </div>
          <button
            onClick={onOpenConsultation}
            className="px-6 py-3.5 rounded-2xl bg-white text-[#081B33] font-black text-xs hover:bg-cyan-300 transition-all shadow-xl shrink-0"
          >
            Request Custom Combo Package →
          </button>
        </div>
      </div>
    </section>
  );
};
