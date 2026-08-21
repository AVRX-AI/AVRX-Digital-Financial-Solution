import React, { useState } from 'react';
import { ProjectItem } from '../../types/projectTypes';
import { 
  Sparkles, 
  ExternalLink, 
  Monitor, 
  Laptop, 
  Tablet, 
  Smartphone, 
  ArrowRight, 
  Eye,
  ShieldCheck,
  TrendingUp,
  Zap,
  CheckCircle2,
  Lock,
  Layers
} from 'lucide-react';

interface DeviceStage3DProps {
  projects: ProjectItem[];
  onOpenProject: (project: ProjectItem) => void;
}

export const DeviceStage3D: React.FC<DeviceStage3DProps> = ({ projects, onOpenProject }) => {
  const [activeDeviceTab, setActiveDeviceTab] = useState<'desktop' | 'laptop' | 'tablet' | 'smartphone'>('desktop');

  // Find sample projects for each device slot
  const realEstateProject = projects.find(p => p.id === 'luxury-real-estate') || projects[0];
  const ecommerceProject = projects.find(p => p.id === 'fashion-ecommerce') || projects[1] || projects[0];
  const fintechProject = projects.find(p => p.id === 'fintech-application') || projects[2] || projects[0];
  const healthProject = projects.find(p => p.id === 'healthcare-medtech') || projects[3] || projects[0];

  const getSelectedProject = () => {
    switch (activeDeviceTab) {
      case 'desktop': return realEstateProject;
      case 'laptop': return ecommerceProject;
      case 'tablet': return healthProject;
      case 'smartphone': return fintechProject;
      default: return realEstateProject;
    }
  };

  const currentSelection = getSelectedProject();

  return (
    <div className="relative my-12 rounded-3xl bg-gradient-to-b from-[#060a17] via-[#040713] to-[#020409] border border-cyan-500/20 p-6 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden">
      
      {/* Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-cyan-500/15 via-blue-600/10 to-purple-600/10 blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-10 right-10 w-72 h-72 bg-amber-500/5 rounded-full blur-[80px] pointer-events-none" />

      {/* Floating Capability Badges */}
      <div className="hidden xl:block absolute top-8 left-8 z-20">
        <div className="px-3 py-1.5 rounded-xl bg-slate-900/80 backdrop-blur-md border border-cyan-500/30 text-[11px] font-bold text-cyan-300 flex items-center gap-2 shadow-lg animate-bounce duration-1000">
          <Zap className="w-3.5 h-3.5 text-cyan-400" />
          <span>98% Core Web Vitals Performance</span>
        </div>
      </div>

      <div className="hidden xl:block absolute top-8 right-8 z-20">
        <div className="px-3 py-1.5 rounded-xl bg-slate-900/80 backdrop-blur-md border border-amber-500/30 text-[11px] font-bold text-amber-300 flex items-center gap-2 shadow-lg">
          <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
          <span>High-Security Enterprise Enclave</span>
        </div>
      </div>

      <div className="hidden xl:block absolute bottom-8 left-8 z-20">
        <div className="px-3 py-1.5 rounded-xl bg-slate-900/80 backdrop-blur-md border border-emerald-500/30 text-[11px] font-bold text-emerald-300 flex items-center gap-2 shadow-lg">
          <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
          <span>High Conversion & Lead Funnels</span>
        </div>
      </div>

      {/* Top Header of the 3D Stage */}
      <div className="text-center max-w-3xl mx-auto space-y-3 relative z-10 mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-black uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>3D MULTI-DEVICE EXPERIENCE STAGE</span>
        </div>
        <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
          Engineered for Every Screen & Viewport
        </h3>
        <p className="text-xs sm:text-sm text-slate-300">
          Click any device below to explore real, high-performance web and mobile products built by AVRX.
        </p>

        {/* Device Switcher Pills */}
        <div className="flex items-center justify-center gap-2 pt-2 overflow-x-auto pb-1">
          <button
            onClick={() => setActiveDeviceTab('desktop')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
              activeDeviceTab === 'desktop'
                ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-[0_0_20px_rgba(0,240,255,0.4)]'
                : 'bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>Desktop Monitor (Real Estate)</span>
          </button>

          <button
            onClick={() => setActiveDeviceTab('laptop')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
              activeDeviceTab === 'laptop'
                ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-[0_0_20px_rgba(0,240,255,0.4)]'
                : 'bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            <Laptop className="w-3.5 h-3.5" />
            <span>Pro Laptop (E-Commerce)</span>
          </button>

          <button
            onClick={() => setActiveDeviceTab('tablet')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
              activeDeviceTab === 'tablet'
                ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-[0_0_20px_rgba(0,240,255,0.4)]'
                : 'bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            <Tablet className="w-3.5 h-3.5" />
            <span>Tablet View (MedTech)</span>
          </button>

          <button
            onClick={() => setActiveDeviceTab('smartphone')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
              activeDeviceTab === 'smartphone'
                ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-[0_0_20px_rgba(0,240,255,0.4)]'
                : 'bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Smartphone (FinTech App)</span>
          </button>
        </div>
      </div>

      {/* Main 3D Stage Visual Centerpiece */}
      <div className="relative z-10 w-full max-w-6xl 2xl:max-w-7xl mx-auto flex flex-col items-center justify-center">
        
        {/* Active Stage Device Display */}
        <div 
          onClick={() => onOpenProject(currentSelection)}
          className="relative w-full rounded-2xl bg-[#02050e] border border-cyan-500/40 p-3 sm:p-5 shadow-[0_25px_80px_rgba(0,0,0,0.9)] cursor-pointer group transition-all duration-300 hover:scale-[1.01] hover:border-cyan-400 overflow-hidden"
        >
          {/* Top Realistic Device Frame / Browser Bar */}
          <div className="px-4 py-2.5 bg-slate-900/90 rounded-xl mb-3 flex items-center justify-between text-xs text-slate-400 border border-slate-800">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/90" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/90" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/90" />
              </div>
              <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-950 text-[11px] font-mono text-slate-300 border border-slate-800/80">
                <Lock className="w-3 h-3 text-emerald-400" />
                <span>https://live.avrx.in/{currentSelection.id}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-extrabold border border-emerald-500/30 animate-pulse">
                ● LIVE INTERACTIVE PROTOTYPE
              </span>
              <span className="text-cyan-400 text-xs font-bold flex items-center gap-1 group-hover:underline">
                <span>Launch Experience</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          {/* Device Screen Realistic High-Fidelity UI Presentation */}
          <div className="relative rounded-xl overflow-hidden bg-slate-950 aspect-[16/9] sm:aspect-[21/9] max-h-[520px] border border-slate-800 flex flex-col justify-between">
            
            {/* Background High-Resolution Photography */}
            <img 
              src={currentSelection.coverImage} 
              alt={currentSelection.title}
              className="absolute inset-0 w-full h-full object-cover object-center brightness-[0.45] group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            
            {/* Subtle Gradient Overlays for High Legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#02050e] via-[#02050e]/60 to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#02050e]/90 via-[#02050e]/40 to-transparent z-10" />

            {/* Top Mockup Navigation Bar */}
            <div className="relative z-20 p-4 sm:p-6 flex items-center justify-between border-b border-white/10 backdrop-blur-sm bg-black/20">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-slate-950 font-black text-xs">
                  {currentSelection.client.charAt(0)}
                </div>
                <div className="font-bold text-white text-xs sm:text-sm tracking-tight">
                  {currentSelection.client}
                </div>
              </div>

              <div className="hidden md:flex items-center gap-5 text-xs text-slate-300 font-medium">
                {currentSelection.websiteData?.navigationItems.slice(0, 4).map((item, idx) => (
                  <span key={idx} className="hover:text-white transition cursor-pointer">{item}</span>
                ))}
              </div>

              <div className="px-3 py-1.5 rounded-lg bg-cyan-500 text-slate-950 font-bold text-xs">
                {currentSelection.websiteData?.hero.ctaPrimary || 'Explore'}
              </div>
            </div>

            {/* Middle / Bottom Hero Content in Screen */}
            <div className="relative z-20 p-4 sm:p-8 space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-[10px] font-extrabold uppercase tracking-wider">
                {currentSelection.category} • {currentSelection.subcategory}
              </div>

              <h4 className="text-xl sm:text-3xl font-black text-white tracking-tight leading-snug">
                {currentSelection.title}
              </h4>

              <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed">
                {currentSelection.tagline}
              </p>

              {/* Quick Metrics Strip */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                {currentSelection.metrics.map((m, idx) => (
                  <div key={idx} className="px-3 py-1.5 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-800">
                    <span className="text-xs font-black text-cyan-400">{m.value}</span>{' '}
                    <span className="text-[10px] text-slate-400">{m.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hover Fullscreen Prompt Overlay */}
            <div className="absolute inset-0 z-30 bg-cyan-950/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 text-cyan-300">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500 text-slate-950 flex items-center justify-center shadow-[0_0_30px_rgba(0,240,255,0.6)] transform group-hover:scale-110 transition-transform">
                <Eye className="w-7 h-7" />
              </div>
              <div className="text-base font-black text-white tracking-tight">
                Click to Open Full Interactive Experience
              </div>
              <div className="text-xs text-cyan-300 font-semibold flex items-center gap-1">
                <span>Fully responsive in Desktop, Tablet & Smartphone modes</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

          </div>

          {/* Bottom Stage Reflection Bar */}
          <div className="mt-3 px-2 flex items-center justify-between text-xs text-slate-400">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Zero Latency Edge Deployment</span>
              </span>
              <span className="hidden sm:flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Client Rating {currentSelection.rating} / 5.0</span>
              </span>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onOpenProject(currentSelection);
              }}
              className="px-4 py-1.5 rounded-xl bg-cyan-500/20 border border-cyan-500/50 hover:bg-cyan-500 hover:text-slate-950 text-cyan-300 font-bold text-xs transition flex items-center gap-1.5"
            >
              <span>Explore Live</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
