import React, { useState, useEffect } from 'react';
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
  ExternalLink,
  Activity,
  Gauge,
  Layers,
  Database,
  CheckCircle2
} from 'lucide-react';
import { launchSoundEngine } from '../utils/launchSoundEngine';

interface HostingProductsPageProps {
  onNavigate: (page: string, slug?: string) => void;
}

export const HostingProductsPage: React.FC<HostingProductsPageProps> = ({ onNavigate }) => {
  const [selectedProduct, setSelectedProduct] = useState<ServiceItem | null>(HOSTING_PRODUCTS[0]);
  const [activeTab, setActiveTab] = useState<'plans' | 'benchmark' | 'vpscalc'>('plans');

  // VPS Custom Configurator
  const [vCpu, setVCpu] = useState<number>(2);
  const [ramGb, setRamGb] = useState<number>(4);
  const [ssdGb, setSsdGb] = useState<number>(80);

  // Latency benchmark simulator
  const [activeRegion, setActiveRegion] = useState<string>('Mumbai, IN (Tier-4)');
  const [pingMs, setPingMs] = useState<number>(14);
  const [isPinging, setIsPinging] = useState<boolean>(false);

  const calculateVpsPrice = () => {
    const base = (vCpu * 450) + (ramGb * 220) + (ssdGb * 5);
    return Math.round(base);
  };

  const handleTestPing = (region: string, basePing: number) => {
    launchSoundEngine.playClickTick();
    setActiveRegion(region);
    setIsPinging(true);
    setTimeout(() => {
      setPingMs(basePing + Math.floor(Math.random() * 4));
      setIsPinging(false);
      launchSoundEngine.playSuccessBell();
    }, 400);
  };

  return (
    <div className="min-h-screen bg-[#040713] text-white pt-24 pb-20 selection:bg-blue-500 selection:text-slate-950">
      <SEO
        title="Digital Products & High-Speed Hosting | NVMe Cloud Servers | AVRX"
        description="Ultra-fast NVMe SSD cloud web hosting, multi-company agency infrastructure, custom WordPress themes, and domain name management."
      />

      {/* Ambient background glows */}
      <div className="fixed top-20 left-1/4 w-[700px] h-[500px] bg-blue-500/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="fixed bottom-20 right-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[180px] pointer-events-none" />

      {/* Main Container - Stretched Widescreen Layout */}
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10 space-y-16">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="pt-2 flex items-center gap-2 text-xs text-slate-400">
          <button 
            onClick={() => onNavigate('home')}
            className="hover:text-blue-400 transition-colors"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-blue-300 font-semibold">Digital Products &amp; Hosting</span>
        </nav>

        {/* 1. Page Hero Section */}
        <div className="text-center max-w-4xl mx-auto space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-widest font-mono shadow-[0_0_20px_rgba(59,130,246,0.2)]">
            <Server className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
            <span>ENTERPRISE CLOUD INFRASTRUCTURE</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight">
            Digital Products &amp; <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-300">
              High-Speed Hosting.
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-xl leading-relaxed max-w-3xl mx-auto font-normal">
            Ultra-fast NVMe Gen4 cloud web hosting, multi-company reseller infrastructure, custom themes, and domain registration engineered for 99.98% uptime and sub-second global response times.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
            <button
              onClick={() => {
                launchSoundEngine.playClickTick();
                setActiveTab('plans');
              }}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition cursor-pointer border ${
                activeTab === 'plans' 
                  ? 'bg-blue-500 text-slate-950 border-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.3)]' 
                  : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:text-white'
              }`}
            >
              Managed Hosting Products
            </button>
            <button
              onClick={() => {
                launchSoundEngine.playClickTick();
                setActiveTab('benchmark');
              }}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition cursor-pointer border ${
                activeTab === 'benchmark' 
                  ? 'bg-blue-500 text-slate-950 border-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.3)]' 
                  : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:text-white'
              }`}
            >
              Live Latency &amp; Speed Test
            </button>
            <button
              onClick={() => {
                launchSoundEngine.playClickTick();
                setActiveTab('vpscalc');
              }}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition cursor-pointer border ${
                activeTab === 'vpscalc' 
                  ? 'bg-blue-500 text-slate-950 border-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.3)]' 
                  : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:text-white'
              }`}
            >
              Custom Cloud VPS Configurator
            </button>
          </div>
        </div>

        {/* 2. Interactive Benchmarks / VPS Configurator */}
        {activeTab === 'benchmark' && (
          <div className="rounded-3xl bg-slate-950/95 border-2 border-blue-500/40 p-6 sm:p-10 backdrop-blur-2xl shadow-[0_0_50px_rgba(59,130,246,0.15)] space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
              <div className="space-y-1">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 flex items-center gap-2">
                  <Gauge className="w-4 h-4" />
                  <span>REAL-TIME DATACENTER NETWORK LATENCY</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-white">
                  Global Cloud Edge Ping Benchmarks
                </h2>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-right">
                <div className="text-xs text-slate-400 font-mono">Current Latency</div>
                <div className="text-3xl font-black text-emerald-400 font-mono">
                  {isPinging ? '...' : `${pingMs} ms`}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: 'Mumbai, IN (Tier-4)', base: 12 },
                { name: 'Singapore (Asia-East)', base: 42 },
                { name: 'Frankfurt, DE (EU-Central)', base: 118 },
                { name: 'N. Virginia, US (US-East)', base: 175 }
              ].map(reg => (
                <button
                  key={reg.name}
                  onClick={() => handleTestPing(reg.name, reg.base)}
                  className={`p-4 rounded-2xl border text-left transition cursor-pointer ${
                    activeRegion === reg.name 
                      ? 'bg-blue-500/20 border-blue-400 text-white shadow' 
                      : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <div className="text-xs font-bold">{reg.name}</div>
                  <div className="text-[11px] font-mono text-cyan-400 mt-1">
                    {activeRegion === reg.name ? `${pingMs} ms ping` : `~${reg.base} ms`}
                  </div>
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-800 text-center">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-xl font-black text-cyan-400 font-mono">0.00%</div>
                <div className="text-xs text-slate-400">Packet Loss Rate</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-xl font-black text-emerald-400 font-mono">10 Gbps</div>
                <div className="text-xs text-slate-400">Port Uplink Speed</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-xl font-black text-purple-400 font-mono">NVMe Gen4</div>
                <div className="text-xs text-slate-400">7,000 MB/s Read/Write</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-xl font-black text-amber-400 font-mono">24/7 SLA</div>
                <div className="text-xs text-slate-400">Hardware Monitoring</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'vpscalc' && (
          <div className="rounded-3xl bg-slate-950/95 border-2 border-blue-500/40 p-6 sm:p-10 backdrop-blur-2xl shadow-[0_0_50px_rgba(59,130,246,0.15)] space-y-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
              <div className="space-y-1">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 flex items-center gap-2">
                  <Cpu className="w-4 h-4" />
                  <span>CUSTOM CLOUD VPS CONFIGURATOR</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-white">
                  Build Your Custom Cloud Virtual Machine
                </h2>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900 border border-blue-500/40 text-right">
                <div className="text-xs text-slate-400 font-mono uppercase">Calculated VPS Price</div>
                <div className="text-3xl font-black text-blue-400 font-mono">
                  ₹{calculateVpsPrice().toLocaleString('en-IN')}/mo
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* vCPU */}
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                <div className="flex justify-between items-center text-xs font-bold text-slate-300">
                  <span>vCPU Cores</span>
                  <span className="font-mono text-cyan-400 text-sm">{vCpu} Cores</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="16"
                  value={vCpu}
                  onChange={e => {
                    setVCpu(Number(e.target.value));
                    launchSoundEngine.playClickTick();
                  }}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>1 Core</span>
                  <span>8 Cores</span>
                  <span>16 Cores</span>
                </div>
              </div>

              {/* RAM */}
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                <div className="flex justify-between items-center text-xs font-bold text-slate-300">
                  <span>DDR5 ECC RAM</span>
                  <span className="font-mono text-emerald-400 text-sm">{ramGb} GB</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="64"
                  step="2"
                  value={ramGb}
                  onChange={e => {
                    setRamGb(Number(e.target.value));
                    launchSoundEngine.playClickTick();
                  }}
                  className="w-full accent-emerald-400 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>2 GB</span>
                  <span>32 GB</span>
                  <span>64 GB</span>
                </div>
              </div>

              {/* NVMe SSD */}
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                <div className="flex justify-between items-center text-xs font-bold text-slate-300">
                  <span>NVMe Gen4 Storage</span>
                  <span className="font-mono text-purple-400 text-sm">{ssdGb} GB</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="500"
                  step="20"
                  value={ssdGb}
                  onChange={e => {
                    setSsdGb(Number(e.target.value));
                    launchSoundEngine.playClickTick();
                  }}
                  className="w-full accent-purple-400 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>20 GB</span>
                  <span>250 GB</span>
                  <span>500 GB</span>
                </div>
              </div>

            </div>

            <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-blue-200">
                Instant provisioning within 60 seconds with root access, Ubuntu/Debian/AlmaLinux OS, and automated daily backups.
              </div>
              <button
                onClick={() => {
                  launchSoundEngine.playClickTick();
                  onNavigate('contact');
                }}
                className="px-6 py-2.5 rounded-xl bg-blue-400 text-slate-950 font-bold text-xs uppercase hover:bg-blue-300 transition cursor-pointer shrink-0 shadow-lg"
              >
                Provision Custom Cloud VPS
              </button>
            </div>
          </div>
        )}

        {/* 3. Products Master Explorer */}
        <div className="space-y-6">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase font-mono">
              <Layers className="w-3.5 h-3.5 text-blue-400" />
              <span>MANAGED HOSTING STACK</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white">
              Enterprise Hosting &amp; Server Products
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Menu */}
            <div className="lg:col-span-4 space-y-3 sticky top-28">
              {HOSTING_PRODUCTS.map(prod => (
                <button
                  key={prod.id}
                  onClick={() => {
                    setSelectedProduct(prod);
                    launchSoundEngine.playClickTick();
                  }}
                  className={`w-full text-left p-4 rounded-2xl border transition flex items-center justify-between gap-3 cursor-pointer ${
                    selectedProduct?.id === prod.id
                      ? 'bg-blue-500/20 border-blue-400 text-white shadow-[0_0_20px_rgba(59,130,246,0.2)] font-bold'
                      : 'bg-slate-950/80 border-slate-800 text-slate-300 hover:bg-slate-900'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-blue-400 shrink-0">
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
              <div className="lg:col-span-8 bg-slate-950/95 border-2 border-blue-500/40 rounded-3xl p-6 sm:p-10 space-y-8 shadow-[0_0_50px_rgba(59,130,246,0.15)] backdrop-blur-2xl">
                
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
                        <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/40 text-xs font-bold font-mono">
                          {selectedProduct.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-slate-300 text-sm mt-2 leading-relaxed">{selectedProduct.fullDesc}</p>
                  </div>

                  <div className="text-right">
                    <div className="text-xs text-slate-400 font-mono uppercase">Plan Price</div>
                    <div className="text-2xl font-black text-blue-400 font-mono">{selectedProduct.priceStarting}</div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">Server Specifications &amp; Deliverables</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedProduct.features.map((feat, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    onClick={() => {
                      launchSoundEngine.playClickTick();
                      onNavigate('contact');
                    }}
                    className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-400 via-cyan-500 to-indigo-500 text-slate-950 font-black text-xs uppercase tracking-wider rounded-2xl shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:scale-105 transition flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Deploy {selectedProduct.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => {
                      launchSoundEngine.playClickTick();
                      onNavigate('contact');
                    }}
                    className="w-full sm:w-auto px-6 py-4 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 text-xs font-semibold rounded-2xl transition flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <PhoneCall className="w-4 h-4 text-blue-400" />
                    <span>Talk to Hosting Specialist</span>
                  </button>
                </div>

              </div>
            )}
          </div>
        </div>

        {/* 4. High-Conversion CTA */}
        <div className="rounded-3xl bg-gradient-to-r from-blue-950 via-slate-950 to-indigo-950 border border-blue-500/40 p-8 sm:p-12 text-center space-y-6 relative overflow-hidden shadow-[0_20px_60px_rgba(59,130,246,0.2)]">
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
              onClick={() => {
                launchSoundEngine.playClickTick();
                onNavigate('contact');
              }}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-400 to-cyan-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:scale-105 transition flex items-center gap-2 cursor-pointer"
            >
              <span>Get Free Server Migration</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Partners Slider */}
        <PartnersSlider 
          title="Cloud Infrastructure Alliances"
          badgeText="CLOUD ECOSYSTEM"
          variant="compact"
        />

      </div>
    </div>
  );
};
