import React, { useState } from 'react';
import { HOSTING_PRODUCTS } from '../data/servicesData';
import { ServiceItem } from '../types';
import { SEO } from '../components/common/SEO';
import { PartnersSlider } from '../components/common/PartnersSlider';
import { renderServiceIcon } from '../utils/iconMap';
import { 
  Server, 
  Check, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  PhoneCall, 
  ChevronRight, 
  Cpu, 
  HardDrive, 
  Globe, 
  Lock, 
  Clock,
  Sparkles,
  ExternalLink
} from 'lucide-react';

interface HostingProductsPageProps {
  onNavigate: (page: string, slug?: string) => void;
}

export const HostingProductsPage: React.FC<HostingProductsPageProps> = ({ onNavigate }) => {
  const [selectedProduct, setSelectedProduct] = useState<ServiceItem | null>(HOSTING_PRODUCTS[0]);

  return (
    <div className="min-h-screen bg-[#050811] text-white pt-24 pb-20 selection:bg-blue-500 selection:text-slate-950">
      <SEO
        title="Digital Products & High-Speed Hosting | NVMe Cloud Servers | AVRX"
        description="Ultra-fast NVMe SSD cloud web hosting, multi-company agency infrastructure, custom WordPress themes, and domain name management."
      />

      {/* Main Container - Stretched Widescreen Layout */}
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="pt-4 pb-6 flex items-center gap-2 text-xs text-slate-400">
          <button 
            onClick={() => onNavigate('home')}
            className="hover:text-blue-400 transition-colors"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-blue-300 font-semibold">Digital Products & Hosting</span>
        </nav>

        {/* 1. Page Hero Section */}
        <div className="text-center max-w-4xl mx-auto my-8 space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(59,130,246,0.15)]">
            <Server className="w-3.5 h-3.5 text-blue-400" />
            <span>ENTERPRISE CLOUD INFRASTRUCTURE</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight">
            Digital Products & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">High-Speed Hosting.</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-lg leading-relaxed max-w-3xl mx-auto">
            Ultra-fast NVMe Gen4 cloud web hosting, multi-company reseller infrastructure, custom themes, and domain registration engineered for 99.98% uptime and sub-second global response times.
          </p>
        </div>

        {/* 2. Speed Performance Metric Bar */}
        <div className="my-10 bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center shadow-xl">
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-black text-cyan-400 font-mono">180ms</div>
            <div className="text-xs text-slate-400 font-medium">Avg. TTFB Server Response</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-black text-emerald-400 font-mono">99.98%</div>
            <div className="text-xs text-slate-400 font-medium">Uptime Service SLA Guarantee</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-black text-purple-400 font-mono">NVMe Gen4</div>
            <div className="text-xs text-slate-400 font-medium">Ultra-Fast SSD Storage</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-black text-amber-400 font-mono">Free SSL</div>
            <div className="text-xs text-slate-400 font-medium">Auto-Renewing Wildcard SSL</div>
          </div>
        </div>

        {/* 3. Partners Slider */}
        <div className="my-10">
          <PartnersSlider 
            title="Cloud Infrastructure Alliances"
            badgeText="CLOUD ECOSYSTEM"
            description="Tier-4 enterprise datacenter infrastructure with automated DDoS protection and multi-regional CDN."
            variant="compact"
          />
        </div>

        {/* 4. Products Master Grid */}
        <div className="my-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Menu */}
          <div className="lg:col-span-4 space-y-3 sticky top-28">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 px-3 mb-2">
              Hosting & Product Plans
            </h3>
            {HOSTING_PRODUCTS.map(prod => (
              <button
                key={prod.id}
                onClick={() => setSelectedProduct(prod)}
                className={`w-full text-left p-4 rounded-2xl border transition flex items-center justify-between gap-3 ${
                  selectedProduct?.id === prod.id
                    ? 'bg-blue-500/15 border-blue-400 text-white shadow-[0_0_20px_rgba(59,130,246,0.2)] font-bold'
                    : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:bg-slate-800/80'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-blue-400 shrink-0">
                    {renderServiceIcon(prod.iconName, 'w-5 h-5')}
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-bold truncate">{prod.title}</div>
                    <div className="text-xs text-slate-400 font-normal line-clamp-1 mt-0.5">{prod.priceStarting}</div>
                  </div>
                </div>
                <ArrowRight className={`w-4 h-4 shrink-0 ${selectedProduct?.id === prod.id ? 'text-blue-400' : 'text-slate-600'}`} />
              </button>
            ))}
          </div>

          {/* Right Selected Detail */}
          {selectedProduct && (
            <div className="lg:col-span-8 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-8 shadow-2xl backdrop-blur-xl">
              
              {selectedProduct.imageUrl && (
                <div className="relative h-48 sm:h-64 w-full rounded-2xl overflow-hidden border border-slate-800">
                  <img
                    src={selectedProduct.imageUrl}
                    alt={selectedProduct.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md border border-slate-700/80 text-blue-300 text-xs font-semibold">
                      {renderServiceIcon(selectedProduct.iconName, 'w-3.5 h-3.5')}
                      <span>{selectedProduct.category}</span>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
                <div>
                  <div className="flex items-center gap-3">
                    <h2 className="text-2xl sm:text-3xl font-black text-white">{selectedProduct.title}</h2>
                    {selectedProduct.badge && (
                      <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/40 text-xs font-bold">
                        {selectedProduct.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-slate-300 text-sm mt-2 leading-relaxed">{selectedProduct.fullDesc}</p>
                </div>

                <div className="text-right">
                  <div className="text-xs text-slate-400 font-mono uppercase">Plan Price</div>
                  <div className="text-2xl font-black text-blue-400">{selectedProduct.priceStarting}</div>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Server Specifications & Deliverables</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedProduct.features.map((feat, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-400 via-cyan-500 to-indigo-500 text-slate-950 font-black text-sm rounded-2xl shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:scale-105 transition flex items-center justify-center gap-2"
                >
                  <span>Deploy {selectedProduct.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full sm:w-auto px-6 py-4 bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-300 text-xs font-semibold rounded-2xl transition flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-blue-400" />
                  <span>Talk to Hosting Specialist</span>
                </button>
              </div>

            </div>
          )}

        </div>

        {/* 5. High-Conversion CTA */}
        <div className="my-16 rounded-3xl bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 border border-blue-500/40 p-8 sm:p-14 text-center space-y-6 relative overflow-hidden shadow-[0_20px_60px_rgba(59,130,246,0.15)]">
          <div className="max-w-2xl mx-auto space-y-3 relative z-10">
            <h3 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Ready for Uncompromised Cloud Speed?
            </h3>
            <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
              Migrate your website to AVRX NVMe infrastructure with zero downtime and free cPanel migration.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 relative z-10">
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-400 to-cyan-400 text-slate-950 font-black text-sm shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:scale-105 transition flex items-center gap-2"
            >
              <span>Get Free Server Migration</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
