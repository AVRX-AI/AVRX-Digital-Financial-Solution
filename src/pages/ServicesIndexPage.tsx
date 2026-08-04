import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SeoMeta from '../components/common/SeoMeta';
import PageBanner from '../components/layout/PageBanner';
import {
  Search,
  Globe,
  Smartphone,
  Share2,
  TrendingUp,
  RefreshCw,
  Code2,
  Database,
  Cpu,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { servicesList } from '../data/mockData';

export default function ServicesIndexPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Website Design');

  const categories = [
    'Website Design',
    'Application Development',
    'SEO & Organic Growth',
    'Digital Marketing & Ads',
    'Loans & Insurance',
    'Registration & Materials',
    'Join us & Earn 💰'
  ];

  const filteredServices = servicesList.filter((service) => {
    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.features.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory =
      selectedCategory === 'All' ||
      service.category === selectedCategory ||
      (selectedCategory === 'Website Design' && (service.category === 'digital' || service.title.toLowerCase().includes('website') || service.title.toLowerCase().includes('design') || service.id.includes('website')));

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-[#08090C] min-h-screen">
      <SeoMeta
        title="40+ Digital Services & Technology SLA"
        description="Explore AVRX Digital's complete matrix of 40+ services: Enterprise Website Design, iOS/Android Apps, Technical SEO, Performance Marketing, and 24/7 Server Maintenance."
      />

      <PageBanner
        title="40+ World-Class Digital Services & SLAs"
        subtitle="Custom-engineered web applications, native Flutter/iOS apps, programmatic SEO, performance marketing, and 99.99% SLA server maintenance."
        badge="CRED-INSPIRED DIGITAL ASSETS"
        breadcrumbs={[{ label: 'Digital Services' }]}
        ctaText="Request Consultation"
      />

      {/* Main Filter & Search Section */}
      <section className="py-16 bg-[#06070B] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-3.5 w-5 h-5 text-slate-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search 40+ services (e.g., React, Flutter, SEO...)"
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                    selectedCategory === cat
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/25 border border-blue-400/30'
                      : 'bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          {filteredServices.length === 0 ? (
            <div className="text-center py-20 space-y-4">
              <div className="text-4xl">🔍</div>
              <h3 className="text-xl font-bold text-white">No services found matching your criteria</h3>
              <p className="text-sm text-slate-400">Try clearing your search query or selecting a different category.</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                className="px-6 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-semibold"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="glass-card rounded-3xl p-7 border border-white/10 hover:border-blue-500/40 bg-[#0E111C]/80 hover:bg-[#111422] transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Category Tag & Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-bold text-blue-400 uppercase tracking-wider">
                        {service.category}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-white text-[10px] font-bold">
                        {service.badge || 'ENTERPRISE SLA'}
                      </span>
                    </div>

                    <h3 className="text-xl font-poppins font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                      {service.shortDesc}
                    </p>

                    {/* Features Checklist */}
                    <ul className="space-y-2 mb-6">
                      {service.features.slice(0, 4).map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer & SLA button */}
                  <div className="pt-5 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-400 block uppercase">Starting From</span>
                      <span className="text-sm font-poppins font-bold text-white">{service.pricing?.starter || '$499'}</span>
                    </div>

                    <Link
                      to={`/services/${service.id}`}
                      className="px-4 py-2 rounded-xl bg-white/10 hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-all group/btn"
                    >
                      <span>Explore SLA</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Enterprise SLA Banner */}
      <section className="py-16 bg-[#08090C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-8 sm:p-12 rounded-3xl border border-blue-500/30 bg-gradient-to-r from-blue-900/30 via-[#0B0D15] to-cyan-900/30 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-widest">
                <ShieldCheck className="w-4 h-4" />
                <span>Custom RFP & Dedicated Augmentation</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-poppins font-bold text-white">
                Need a multi-service enterprise SLA or dedicated team?
              </h3>
              <p className="text-sm text-slate-400">
                We sign strict NDAs, assign dedicated Senior Project Managers, and deliver milestone-based billing with 100% money-back code quality guarantees.
              </p>
            </div>
            <Link
              to="/contact"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-sm shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 whitespace-nowrap transition-all"
            >
              Request Custom Enterprise Proposal
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
