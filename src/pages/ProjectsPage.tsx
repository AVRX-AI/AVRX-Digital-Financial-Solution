import React, { useState } from 'react';
import { ProjectShowcaseSection } from '../components/showcase/ProjectShowcaseSection';
import { BeforeAfterSection } from '../components/showcase/BeforeAfterSection';
import { SeoGrowthProofSection } from '../components/showcase/SeoGrowthProofSection';
import { WebsiteFeaturesGrid } from '../components/showcase/WebsiteFeaturesGrid';
import { PartnersSlider } from '../components/common/PartnersSlider';
import { SEO } from '../components/common/SEO';
import { SITE_CONFIG } from '../config';
import { 
  Sparkles, 
  Zap, 
  Smartphone, 
  ShieldCheck, 
  TrendingUp, 
  ChevronRight, 
  Award, 
  Gauge, 
  SlidersHorizontal, 
  Layers, 
  ArrowRight, 
  MessageCircle,
  CheckCircle2,
  Search,
  Laptop
} from 'lucide-react';

interface ProjectsPageProps {
  onNavigate: (page: string, slug?: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate }) => {
  const [activeSectionView, setActiveSectionView] = useState<'all' | 'showcase' | 'before-after' | 'seo-growth' | 'features'>('all');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleWhatsApp = () => {
    const url = `https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(
      'Hello AVRX team, I saw your recent projects portfolio & Before/After case studies. I would like to discuss building a high-speed, SEO-ranked website for my business.'
    )}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#030611] text-white pt-20 sm:pt-24 w-full">
      <SEO
        title="Recent Projects, Before & After Redesigns & SEO Growth | AVRX Digital"
        description="Explore real interactive websites, before-after redesigns, live Google #1 SEO rankings, and high-performance Web & App solutions engineered by AVRX Digital."
      />

      {/* Page Hero Header - Ultra-Vibrant & Stretched Across Full Layout */}
      <div className="relative py-14 sm:py-20 px-4 sm:px-6 lg:px-10 xl:px-12 border-b border-slate-800/80 bg-gradient-to-b from-[#091026] via-[#050817] to-[#030611] overflow-hidden">
        
        {/* Background Ambient Aura Glows */}
        <div className="absolute top-0 left-1/4 w-[700px] h-[400px] bg-cyan-500/[0.12] blur-[160px] pointer-events-none" />
        <div className="absolute top-10 right-1/4 w-[600px] h-[350px] bg-purple-600/[0.12] blur-[160px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[250px] bg-emerald-500/[0.06] blur-[150px] pointer-events-none" />

        <div className="w-full max-w-[1720px] mx-auto space-y-8 relative z-10">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400">
            <button 
              onClick={() => onNavigate('home')}
              className="hover:text-cyan-400 transition-colors"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-cyan-300 font-semibold">Client Projects &amp; Live Showcase</span>
          </nav>

          <div className="text-center space-y-6 max-w-5xl mx-auto">
            
            {/* Top Multi-Color Glowing Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/15 via-purple-500/15 to-pink-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-black uppercase tracking-widest shadow-[0_0_25px_rgba(0,240,255,0.25)]">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin" style={{ animationDuration: '6s' }} />
              <span>✦ RECENT WORK • BEFORE &amp; AFTER • GOOGLE #1 SEO RANKINGS</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1]">
              Recent Completed Websites &amp;{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                High-Growth Masterpieces
              </span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base lg:text-xl max-w-4xl mx-auto leading-relaxed font-normal">
              Every project is engineered for speed, search dominance, and revenue conversion. Explore our recent production websites, before &amp; after redesign transformations, and live Google SEO rankings.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={() => scrollToSection('projects-showcase')}
                className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:brightness-110 hover:scale-105 transition-all"
              >
                <Laptop className="w-4 h-4" />
                <span>Explore Recent Websites</span>
              </button>

              <button
                onClick={() => scrollToSection('before-after-section')}
                className="px-6 py-3.5 rounded-2xl bg-slate-900/90 border border-slate-700 hover:border-pink-500 text-pink-300 font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 transition-all hover:bg-pink-500/10"
              >
                <SlidersHorizontal className="w-4 h-4 text-pink-400" />
                <span>View Before vs After</span>
              </button>

              <button
                onClick={() => scrollToSection('seo-growth-section')}
                className="px-6 py-3.5 rounded-2xl bg-slate-900/90 border border-slate-700 hover:border-emerald-500 text-emerald-300 font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 transition-all hover:bg-emerald-500/10"
              >
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                <span>Google #1 SEO Case Studies</span>
              </button>
            </div>

          </div>

          {/* Stretched Colorful Value Metrics Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-6xl mx-auto pt-6 text-left">
            
            <div className="p-5 rounded-2xl bg-gradient-to-b from-cyan-950/40 via-slate-900/90 to-slate-950 border border-cyan-500/30 backdrop-blur-md hover:border-cyan-400 transition-all shadow-xl group">
              <div className="flex items-center justify-between">
                <span className="text-2xl sm:text-3xl font-black text-cyan-400 font-mono">0.38s</span>
                <Zap className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-xs sm:text-sm text-white font-bold mt-1">Average Edge Load Speed</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Global Cloudflare CDN Delivery</div>
            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-b from-emerald-950/40 via-slate-900/90 to-slate-950 border border-emerald-500/30 backdrop-blur-md hover:border-emerald-400 transition-all shadow-xl group">
              <div className="flex items-center justify-between">
                <span className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">99/100</span>
                <Gauge className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-xs sm:text-sm text-white font-bold mt-1">Google Core Web Vitals</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Zero Cumulative Layout Shift</div>
            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-b from-purple-950/40 via-slate-900/90 to-slate-950 border border-purple-500/30 backdrop-blur-md hover:border-purple-400 transition-all shadow-xl group">
              <div className="flex items-center justify-between">
                <span className="text-2xl sm:text-3xl font-black text-purple-400 font-mono">+340%</span>
                <TrendingUp className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-xs sm:text-sm text-white font-bold mt-1">Organic Traffic Growth</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Target Transactional Keywords</div>
            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-b from-amber-950/40 via-slate-900/90 to-slate-950 border border-amber-500/30 backdrop-blur-md hover:border-amber-400 transition-all shadow-xl group">
              <div className="flex items-center justify-between">
                <span className="text-2xl sm:text-3xl font-black text-amber-400 font-mono">100%</span>
                <ShieldCheck className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-xs sm:text-sm text-white font-bold mt-1">Codebase Ownership</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Zero Platform Lock-in Fees</div>
            </div>

          </div>

        </div>
      </div>

      {/* 1. Main Interactive Showcase Section (Recent Projects) */}
      <div id="projects-showcase">
        <ProjectShowcaseSection onNavigate={onNavigate} />
      </div>

      {/* 2. Before vs After Redesign Transformation Section */}
      <div id="before-after-section">
        <BeforeAfterSection onOpenConsultation={() => onNavigate('contact')} />
      </div>

      {/* 3. SEO Rankings & Growth Proof Case Studies */}
      <div id="seo-growth-section">
        <SeoGrowthProofSection />
      </div>

      {/* 4. Built-in Technical Superpowers & Features Bento Grid */}
      <div id="features-section">
        <WebsiteFeaturesGrid />
      </div>

      {/* 5. Free 15-Point SEO & UX Website Audit Callout Strip */}
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 py-12">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-r from-[#0d1633] via-[#091129] to-[#0d1633] border-2 border-cyan-500/40 shadow-2xl relative overflow-hidden text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold uppercase">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>COMPLIMENTARY PERFORMANCE EVALUATION</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Have an Existing Website That Isn&apos;t Ranking or Converting?
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Request our comprehensive 15-point UI/UX, PageSpeed, and Google Keyword Audit. We will analyze your Core Web Vitals, mobile friction, and conversion bottlenecks — 100% free with actionable next steps.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="px-7 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:scale-105 transition-all cursor-pointer"
            >
              <span>Get Free 15-Point Website &amp; SEO Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={handleWhatsApp}
              className="px-7 py-4 rounded-2xl bg-slate-900 border border-slate-700 hover:border-emerald-500 text-slate-200 hover:text-emerald-300 font-bold text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer shadow-lg"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Direct WhatsApp Discussion</span>
            </button>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-mono">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Turnaround &lt; 24 Hours</span>
            </span>
            <span className="flex items-center gap-1.5 text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>No Obligation or Credit Card</span>
            </span>
            <span className="flex items-center gap-1.5 text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Senior Engineer Review</span>
            </span>
          </div>

        </div>
      </div>

      {/* 6. Technology Stack & Infrastructure Partners */}
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 pb-16">
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
