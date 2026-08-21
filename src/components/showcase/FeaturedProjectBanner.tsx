import React, { useState } from 'react';
import { ProjectItem } from '../../types/projectTypes';
import { 
  Sparkles, 
  ArrowRight, 
  Star, 
  ExternalLink, 
  Smartphone, 
  Monitor, 
  Layers, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight, 
  TrendingUp, 
  ShieldCheck,
  Lock,
  Eye,
  Zap
} from 'lucide-react';

interface FeaturedProjectBannerProps {
  featuredProjects: ProjectItem[];
  onOpenViewer: (project: ProjectItem) => void;
  onNavigateToContact: (projectName: string) => void;
}

export const FeaturedProjectBanner: React.FC<FeaturedProjectBannerProps> = ({
  featuredProjects,
  onOpenViewer,
  onNavigateToContact
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  if (!featuredProjects.length) return null;

  const currentProject = featuredProjects[currentIndex] || featuredProjects[0];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredProjects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  const isApp = currentProject.projectType === 'android-app' || currentProject.projectType === 'ios-app';

  return (
    <div className="relative rounded-3xl bg-gradient-to-br from-[#070e24] via-[#040816] to-[#020409] border border-cyan-500/40 p-6 sm:p-10 shadow-[0_20px_60px_rgba(0,240,255,0.15)] overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Banner Navigation Bar */}
      <div className="flex items-center justify-between gap-4 mb-6 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-black uppercase tracking-wider shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>CINEMATIC FEATURED FLAGSHIP</span>
        </div>

        {/* Carousel Controls */}
        {featuredProjects.length > 1 && (
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-2 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/50 transition"
              title="Previous Featured Project"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs text-slate-400 font-mono px-2 font-bold">
              {currentIndex + 1} / {featuredProjects.length}
            </span>
            <button
              onClick={handleNext}
              className="p-2 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/50 transition"
              title="Next Featured Project"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Main Showcase Split View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* Left Column: Details, Highlights & Action (7 cols) */}
        <div className="lg:col-span-7 space-y-5">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <span className="px-2.5 py-0.5 rounded-md bg-cyan-500/20 text-cyan-300 text-xs font-extrabold border border-cyan-500/30">
                {currentProject.category}
              </span>
              <span className="text-xs text-slate-400 font-medium">
                {currentProject.client} • Delivered in {currentProject.deliveryTime}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
              {currentProject.title}
            </h3>

            <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
              {currentProject.description}
            </p>
          </div>

          {/* Key Deliverable Badges */}
          <div className="grid grid-cols-3 gap-3">
            {currentProject.metrics.map((m, idx) => (
              <div key={idx} className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800 shadow-sm">
                <div className="text-base sm:text-xl font-black text-cyan-400">{m.value}</div>
                <div className="text-[11px] text-slate-300 font-semibold">{m.label}</div>
                {m.change && <div className="text-[9px] text-slate-400">{m.change}</div>}
              </div>
            ))}
          </div>

          {/* Technology badges required by client: UI/UX, Responsive, CMS, SEO, Lead Generation */}
          <div className="space-y-1.5 pt-1">
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              Core Capabilities & Architecture:
            </div>
            <div className="flex flex-wrap gap-1.5">
              {currentProject.serviceTags.map((tag, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[11px] font-medium text-slate-300 flex items-center gap-1">
                  <span className="text-cyan-400 text-[10px]">✦</span>
                  <span>{tag}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Interactive CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => onOpenViewer(currentProject)}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 text-slate-950 font-black text-xs sm:text-sm hover:brightness-110 shadow-[0_0_25px_rgba(0,240,255,0.4)] transition flex items-center gap-2 group"
            >
              <span>Explore Full Experience</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onNavigateToContact(currentProject.title)}
              className="px-5 py-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-slate-200 font-semibold text-xs sm:text-sm transition"
            >
              Request Custom Quote
            </button>
          </div>
        </div>

        {/* Right Column: Realistic High-Fidelity Mockup Frame (5 cols) */}
        <div className="lg:col-span-5 flex justify-center">
          <div 
            onClick={() => onOpenViewer(currentProject)}
            className="w-full max-w-lg xl:max-w-xl 2xl:max-w-2xl rounded-2xl bg-[#030610] border border-cyan-500/40 p-3 sm:p-4 shadow-2xl hover:border-cyan-400 transition-all duration-300 hover:scale-[1.02] cursor-pointer group relative overflow-hidden"
          >
            {/* Top Device Bar */}
            <div className="px-3 py-2 bg-slate-900/90 rounded-xl mb-2 flex items-center justify-between text-[11px] text-slate-400 border border-slate-800">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-rose-500" />
                <div className="w-2 h-2 rounded-full bg-amber-500" />
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="font-mono text-[10px] text-slate-300 ml-1.5 flex items-center gap-1">
                  <Lock className="w-2.5 h-2.5 text-emerald-400" />
                  <span>live.avrx.in/{currentProject.id}</span>
                </span>
              </div>
              <span className="text-[10px] text-cyan-400 font-bold group-hover:underline flex items-center gap-1">
                <span>Click to Launch</span>
                <ExternalLink className="w-3 h-3" />
              </span>
            </div>

            {/* Inner Graphic Realistic Mockup Preview with Cover Image */}
            <div className="w-full h-64 sm:h-80 lg:h-96 rounded-xl relative overflow-hidden border border-slate-800 flex flex-col justify-between p-4 sm:p-6 bg-slate-950">
              
              {/* Actual Realistic Cover Photo */}
              <img 
                src={currentProject.coverImage} 
                alt={currentProject.title}
                className="absolute inset-0 w-full h-full object-cover brightness-[0.5] group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />

              {/* Gradient Darkener */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />

              {/* Abstract Top Elements */}
              <div className="flex items-center justify-between z-20">
                <div className="p-2 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-white font-bold text-xs">
                  {isApp ? <Smartphone className="w-4 h-4 text-cyan-400" /> : <Monitor className="w-4 h-4 text-cyan-400" />}
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/30 border border-emerald-500/50 text-emerald-300 text-[10px] font-extrabold backdrop-blur-sm animate-pulse">
                  ● LIVE EXPERIENCE
                </span>
              </div>

              {/* Bottom Project Text */}
              <div className="space-y-1 z-20">
                <div className="text-xs font-bold text-cyan-400">
                  {currentProject.client}
                </div>
                <div className="text-base font-black text-white tracking-tight drop-shadow-md leading-tight">
                  {currentProject.title}
                </div>
                <div className="text-xs text-slate-300 line-clamp-2 drop-shadow">
                  {currentProject.tagline}
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-cyan-950/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-30 flex flex-col items-center justify-center gap-2 text-cyan-300 font-bold text-xs">
                <Eye className="w-6 h-6 text-cyan-400" />
                <span>Open Interactive Experience &rarr;</span>
              </div>

            </div>

            {/* Bottom Quick Feature Summary */}
            <div className="mt-2.5 px-2 flex items-center justify-between text-[11px] text-slate-400">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-cyan-400" /> Fully Interactive
              </span>
              <span className="flex items-center gap-1">
                <Star className="w-3 h-3 text-amber-400 fill-amber-400" /> {currentProject.rating} Client Rating
              </span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
