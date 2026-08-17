import React, { useState } from 'react';
import { HOSTING_PRODUCTS } from '../data/servicesData';
import { ServiceItem } from '../types';
import { SEO } from '../components/common/SEO';
import { Server, Check, ArrowRight, ShieldCheck, Zap, PhoneCall } from 'lucide-react';

interface HostingProductsPageProps {
  onNavigate: (page: string) => void;
}

export const HostingProductsPage: React.FC<HostingProductsPageProps> = ({ onNavigate }) => {
  const [selectedProduct, setSelectedProduct] = useState<ServiceItem | null>(HOSTING_PRODUCTS[0]);

  return (
    <div className="min-h-screen bg-[#050811] text-white pt-28 pb-20">
      <SEO
        title="Digital Products & High-Speed Hosting | NVMe Cloud Servers | AVRX"
        description="Run your digital business effortlessly. High-speed NVMe cloud web hosting, multi-company agency hosting, premium WordPress themes, and domain name registration."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-semibold">
            <Server className="w-4 h-4 text-blue-400" />
            <span>Infrastructure & Digital Assets</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white">
            Digital Products & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Hosting</span>.
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Ultra-fast NVMe SSD cloud web hosting, multi-company reseller infrastructure, custom themes, and domain management.
          </p>
        </div>

        {/* Speed Performance Metric Bar */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 mb-12 grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl font-black text-cyan-400 font-mono">180ms</div>
            <div className="text-xs text-slate-400 font-medium">Avg. TTFB Server Response</div>
          </div>
          <div>
            <div className="text-2xl font-black text-emerald-400 font-mono">99.98%</div>
            <div className="text-xs text-slate-400 font-medium">Uptime Service SLA</div>
          </div>
          <div>
            <div className="text-2xl font-black text-purple-400 font-mono">NVMe SSD</div>
            <div className="text-xs text-slate-400 font-medium">Gen4 Cloud Storage</div>
          </div>
          <div>
            <div className="text-2xl font-black text-amber-400 font-mono">Free SSL</div>
            <div className="text-xs text-slate-400 font-medium">Auto-renewing Certificate</div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          
          <div className="lg:col-span-4 space-y-2 sticky top-28">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 px-3 mb-2">
              Hosting & Product Plans
            </h3>
            {HOSTING_PRODUCTS.map(prod => (
              <button
                key={prod.id}
                onClick={() => setSelectedProduct(prod)}
                className={`w-full text-left p-4 rounded-2xl border transition flex items-center justify-between ${
                  selectedProduct?.id === prod.id
                    ? 'bg-blue-500/15 border-blue-400 text-white shadow-[0_0_20px_rgba(59,130,246,0.2)] font-bold'
                    : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:bg-slate-800/80'
                }`}
              >
                <div>
                  <div className="text-sm">{prod.title}</div>
                  <div className="text-[11px] text-slate-400 font-normal line-clamp-1 mt-0.5">{prod.priceStarting}</div>
                </div>
                <ArrowRight className={`w-4 h-4 ${selectedProduct?.id === prod.id ? 'text-blue-400' : 'text-slate-600'}`} />
              </button>
            ))}
          </div>

          {selectedProduct && (
            <div className="lg:col-span-8 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-8 shadow-2xl backdrop-blur-xl">
              
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
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-400 via-cyan-500 to-indigo-500 text-slate-950 font-bold text-sm rounded-2xl shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:scale-105 transition flex items-center justify-center gap-2"
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

      </div>
    </div>
  );
};
