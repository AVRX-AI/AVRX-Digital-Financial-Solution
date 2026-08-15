import React from 'react';
import { ProjectShowcaseSection } from '../components/showcase/ProjectShowcaseSection';
import { SEO } from '../components/common/SEO';
import { Sparkles, Layers, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

interface ProjectsPageProps {
  onNavigate: (page: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#050811] text-white pt-24">
      <SEO
        title="Our Previous Work & Project Showcase | AVRX Digital & Financial Solution"
        description="Explore real interactive websites, mobile apps, e-commerce storefronts, and fintech solutions developed by AVRX Digital & Financial Solution."
      />

      {/* Page Hero Header */}
      <div className="relative py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-800/80 bg-gradient-to-b from-[#091024] via-[#050814] to-[#050811]">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-black uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>PORTFOLIO & LIVE PROTOTYPES</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Client Projects & Live Experiences
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Every business deserves software that converts visitors into customers. Test our live prototypes across Web, Android, iOS, and Enterprise SaaS.
          </p>

          {/* Quick Value Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto pt-4">
            <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div className="text-lg sm:text-xl font-black text-cyan-400">100%</div>
              <div className="text-[11px] text-slate-400 font-medium">Responsive & Fast</div>
            </div>
            <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div className="text-lg sm:text-xl font-black text-emerald-400">0.45s</div>
              <div className="text-[11px] text-slate-400 font-medium">Average Load Speed</div>
            </div>
            <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div className="text-lg sm:text-xl font-black text-amber-400">4.9 / 5.0</div>
              <div className="text-[11px] text-slate-400 font-medium">Client Satisfaction</div>
            </div>
            <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div className="text-lg sm:text-xl font-black text-purple-400">Pan-India</div>
              <div className="text-[11px] text-slate-400 font-medium">Deployment & Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Interactive Showcase Section */}
      <ProjectShowcaseSection onNavigate={onNavigate} />

    </div>
  );
};
