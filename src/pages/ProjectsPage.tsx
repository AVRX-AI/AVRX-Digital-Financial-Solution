import React from 'react';
import { ProjectShowcaseSection } from '../components/showcase/ProjectShowcaseSection';
import { PartnersSlider } from '../components/common/PartnersSlider';
import { SEO } from '../components/common/SEO';
import { Sparkles, Zap, Smartphone, ShieldCheck, TrendingUp, ChevronRight } from 'lucide-react';

interface ProjectsPageProps {
  onNavigate: (page: string, slug?: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#050811] text-white pt-20 sm:pt-24 w-full">
      <SEO
        title="Our Previous Work & Project Showcase | AVRX Digital & Financial Solution"
        description="Explore real interactive websites, mobile apps, e-commerce storefronts, and fintech solutions developed by AVRX Digital & Financial Solution."
      />

      {/* Page Hero Header - Stretched Across Full Layout */}
      <div className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-10 xl:px-12 border-b border-slate-800/80 bg-gradient-to-b from-[#091024] via-[#050814] to-[#050811] overflow-hidden">
        {/* Background Ambient Glows */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[350px] bg-cyan-500/[0.08] blur-[140px] pointer-events-none" />
        <div className="absolute top-10 right-1/4 w-[500px] h-[300px] bg-blue-600/[0.08] blur-[140px] pointer-events-none" />

        <div className="w-full max-w-[1720px] mx-auto space-y-6 relative z-10">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400">
            <button 
              onClick={() => onNavigate('home')}
              className="hover:text-cyan-400 transition-colors"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-cyan-300 font-semibold">Client Projects</span>
          </nav>

          <div className="text-center space-y-5 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-black uppercase tracking-widest shadow-[0_0_20px_rgba(0,240,255,0.2)]">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>PORTFOLIO & LIVE PROTOTYPES</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Client Projects & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300">Live Experiences</span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed font-normal">
              Every business deserves software that converts visitors into customers. Test our live prototypes across Web, Android, iOS, and Enterprise SaaS.
            </p>
          </div>

          {/* Stretched Value Metrics Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto pt-4 text-left">
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md hover:border-cyan-500/30 transition">
              <div className="text-xl sm:text-2xl font-black text-cyan-400 font-mono">100%</div>
              <div className="text-xs text-slate-400 font-medium mt-0.5">Responsive & Ultra-Fast</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md hover:border-emerald-500/30 transition">
              <div className="text-xl sm:text-2xl font-black text-emerald-400 font-mono">0.45s</div>
              <div className="text-xs text-slate-400 font-medium mt-0.5">Average Load Speed</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md hover:border-amber-500/30 transition">
              <div className="text-xl sm:text-2xl font-black text-amber-400 font-mono">4.9 / 5.0</div>
              <div className="text-xs text-slate-400 font-medium mt-0.5">Client Satisfaction</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md hover:border-purple-500/30 transition">
              <div className="text-xl sm:text-2xl font-black text-purple-400 font-mono">Pan-India</div>
              <div className="text-xs text-slate-400 font-medium mt-0.5">Deployment & Support</div>
            </div>
          </div>

        </div>
      </div>

      {/* Main Interactive Showcase Section */}
      <ProjectShowcaseSection onNavigate={onNavigate} />

      {/* Partners Slider at Bottom */}
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 py-12">
        <PartnersSlider 
          title="Technology Stack & Infrastructure Partners"
          badgeText="ENTERPRISE CAPABILITIES"
          description="Built using modern cloud architectures, scalable databases, and enterprise CDN networks."
          variant="compact"
        />
      </div>

    </div>
  );
};
