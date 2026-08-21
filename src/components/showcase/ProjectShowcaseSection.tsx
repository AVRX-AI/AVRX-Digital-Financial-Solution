import React, { useState, useMemo } from 'react';
import { PROJECTS_DATA, SHOWCASE_CATEGORIES } from '../../data/projectsData';
import { ProjectItem, ProjectCategory } from '../../types/projectTypes';
import { DeviceStage3D } from './DeviceStage3D';
import { WhatWeBuildStrip } from './WhatWeBuildStrip';
import { FeaturedProjectBanner } from './FeaturedProjectBanner';
import { IdeaToExperienceTransformation } from './IdeaToExperienceTransformation';
import { ProjectViewerModal } from './ProjectViewerModal';
import { SITE_CONFIG } from '../../config';
import { 
  Sparkles, 
  Search, 
  ArrowRight, 
  Monitor, 
  Smartphone, 
  ShieldCheck, 
  Zap, 
  Layers, 
  MessageCircle, 
  Eye
} from 'lucide-react';

interface ProjectShowcaseSectionProps {
  onNavigate: (page: string) => void;
  initialCategory?: ProjectCategory;
  showFeaturedBanner?: boolean;
}

export const ProjectShowcaseSection: React.FC<ProjectShowcaseSectionProps> = ({
  onNavigate,
  initialCategory = 'All Projects',
  showFeaturedBanner = true
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProjectForModal, setSelectedProjectForModal] = useState<ProjectItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Filter projects by category and search
  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((project) => {
      // Category match
      let matchesCategory = false;
      if (selectedCategory === 'All Projects') {
        matchesCategory = true;
      } else if (selectedCategory === 'App Development') {
        matchesCategory = project.category === 'Android Apps' || project.category === 'iOS Apps' || project.projectType === 'android-app' || project.projectType === 'ios-app';
      } else if (selectedCategory === 'Digital Marketing') {
        matchesCategory = project.category === 'Digital Marketing' || project.category === 'Landing Pages' || project.subcategory === 'Digital Marketing';
      } else {
        matchesCategory = project.category === selectedCategory || project.subcategory === selectedCategory;
      }

      // Search match
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesQuery = 
        project.title.toLowerCase().includes(query) ||
        project.tagline.toLowerCase().includes(query) ||
        project.client.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.technologies.some(t => t.toLowerCase().includes(query)) ||
        project.category.toLowerCase().includes(query);

      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  const featuredProjects = useMemo(() => {
    return PROJECTS_DATA.filter(p => p.featured);
  }, []);

  const handleOpenProject = (project: ProjectItem) => {
    setSelectedProjectForModal(project);
    setIsModalOpen(true);
  };

  const handleNavigateToContact = () => {
    setIsModalOpen(false);
    onNavigate('contact');
  };

  const handleWhatsApp = () => {
    const url = `https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(
      'Hello AVRX team, I am interested in building a project similar to your showcase portfolio.'
    )}`;
    window.open(url, '_blank');
  };

  return (
    <section id="projects-showcase" className="w-full py-16 sm:py-24 bg-[#030611] text-white relative overflow-hidden">
      
      {/* Background Ambient Aura */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[1200px] h-[500px] bg-gradient-to-b from-cyan-500/15 via-blue-600/5 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      
      {/* Full-width Stretched Layout Container */}
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10 space-y-16">
        
        {/* 1. CINEMATIC HERO INTRO */}
        <div className="text-center max-w-4xl mx-auto space-y-6 pt-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-black uppercase tracking-widest shadow-[0_0_20px_rgba(0,240,255,0.25)]">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>✦ AVRX DIGITAL SHOWROOM</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.1]">
            Don’t Just See Our Work.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300">
              Experience It.
            </span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Explore high-conversion websites, native mobile applications, and enterprise financial portals designed with immersive interactive experiences.
          </p>

          {/* Quick Stat Highlights */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <div className="px-4 py-2.5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md flex items-center gap-2">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-bold text-white">98% Avg Performance Score</span>
            </div>

            <div className="px-4 py-2.5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-bold text-white">Mobile-First Fluid UX</span>
            </div>

            <div className="px-4 py-2.5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-bold text-white">Bank-Grade Architecture</span>
            </div>
          </div>
        </div>

        {/* 2. 3D MULTI-DEVICE EXPERIENCE STAGE */}
        <DeviceStage3D 
          projects={PROJECTS_DATA}
          onOpenProject={handleOpenProject}
        />

        {/* 3. CONTINUOUS ANIMATED CAPABILITY STRIP */}
        <WhatWeBuildStrip />

        {/* 4. CINEMATIC FEATURED FLAGSHIP BANNER */}
        {showFeaturedBanner && featuredProjects.length > 0 && (
          <FeaturedProjectBanner
            featuredProjects={featuredProjects}
            onOpenViewer={handleOpenProject}
            onNavigateToContact={handleNavigateToContact}
          />
        )}

        {/* 5. INTERACTIVE BEFORE/AFTER TRANSFORMATION PIPELINE */}
        <IdeaToExperienceTransformation 
          projects={PROJECTS_DATA}
          onOpenProject={handleOpenProject}
        />

        {/* 6. CATEGORY FILTER NAVIGATION BAR & LIVE SEARCH */}
        <div className="space-y-6 pt-4">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-black text-cyan-400 uppercase tracking-wider block mb-1">
                ALL PRODUCTION PORTFOLIO
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Filter by Category & Industry
              </h3>
            </div>

            {/* Quick reset if filtered */}
            {selectedCategory !== 'All Projects' && (
              <button
                onClick={() => setSelectedCategory('All Projects')}
                className="text-xs text-cyan-400 hover:underline font-bold self-start sm:self-auto"
              >
                Reset to All Projects ({PROJECTS_DATA.length})
              </button>
            )}
          </div>

          {/* Horizontally Scrollable Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none scroll-smooth">
            {SHOWCASE_CATEGORIES.map((cat) => {
              const count = cat === 'All Projects' 
                ? PROJECTS_DATA.length 
                : PROJECTS_DATA.filter(p => {
                    if (cat === 'App Development') return p.projectType === 'android-app' || p.projectType === 'ios-app';
                    if (cat === 'Digital Marketing') return p.category === 'Digital Marketing' || p.category === 'Landing Pages';
                    return p.category === cat || p.subcategory === cat;
                  }).length;

              const isSelected = selectedCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all duration-200 shrink-0 flex items-center gap-2 ${
                    isSelected
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-[0_0_20px_rgba(0,240,255,0.4)] scale-105'
                      : 'bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-black ${
                    isSelected ? 'bg-slate-950 text-cyan-300' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Bar & Result Counter - Stretched Wide */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-md">
            <div className="relative w-full sm:w-96 md:w-[480px]">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by keyword, tech, or industry (e.g. React, E-Commerce)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9.5 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
              />
            </div>

            <div className="text-xs sm:text-sm text-slate-400 flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
              <span>
                Showing <strong className="text-cyan-400">{filteredProjects.length}</strong> of {PROJECTS_DATA.length} projects
              </span>

              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-cyan-400 hover:underline font-semibold"
                >
                  Clear search
                </button>
              )}
            </div>
          </div>

        </div>

        {/* 7. STRETCHED PROJECTS CARDS GRID */}
        {filteredProjects.length === 0 ? (
          <div className="p-12 text-center rounded-3xl bg-slate-900/50 border border-slate-800 space-y-3">
            <Layers className="w-10 h-10 text-slate-600 mx-auto" />
            <h3 className="text-base font-bold text-white">No projects found</h3>
            <p className="text-xs text-slate-400">
              No matching projects for "{searchQuery}". Try selecting "All Projects" or clearing your search query.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All Projects');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
            {filteredProjects.map((project) => {
              const isApp = project.projectType === 'android-app' || project.projectType === 'ios-app';

              return (
                <div
                  key={project.id}
                  className="rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col justify-between overflow-hidden group"
                >
                  <div>
                    {/* Visual Card Top Thumbnail with Photography */}
                    <div 
                      onClick={() => handleOpenProject(project)}
                      className="relative h-56 sm:h-60 bg-slate-950 p-5 flex flex-col justify-between cursor-pointer overflow-hidden border-b border-slate-800"
                    >
                      {/* Cover photography */}
                      <img 
                        src={project.coverImage} 
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover brightness-[0.4] group-hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />

                      {/* Gradient darkener */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-10" />

                      {/* Header tags */}
                      <div className="flex items-center justify-between z-20">
                        <span className="px-2.5 py-1 rounded-full bg-slate-950/90 backdrop-blur-md border border-slate-800 text-[10px] font-bold text-cyan-300 flex items-center gap-1.5">
                          {isApp ? <Smartphone className="w-3 h-3 text-cyan-400" /> : <Monitor className="w-3 h-3 text-cyan-400" />}
                          <span>{project.platform}</span>
                        </span>

                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/25 border border-emerald-500/40 text-[10px] font-bold text-emerald-300 backdrop-blur-sm animate-pulse">
                          ● Live Experience
                        </span>
                      </div>

                      {/* Title & Tagline in thumbnail */}
                      <div className="z-20 space-y-1">
                        <div className="text-xs font-bold text-cyan-400">
                          {project.client}
                        </div>
                        <div className="text-lg font-black text-white group-hover:text-cyan-300 transition-colors leading-snug">
                          {project.title}
                        </div>
                      </div>

                      {/* Interactive Hover Overlay */}
                      <div className="absolute inset-0 bg-cyan-950/85 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center gap-2 text-cyan-300 font-bold text-xs z-30">
                        <Eye className="w-6 h-6 text-cyan-400" />
                        <span>Open Interactive Experience &rarr;</span>
                      </div>
                    </div>

                    {/* Card Content Body */}
                    <div className="p-5 space-y-4">
                      
                      {/* Tagline */}
                      <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                        {project.tagline}
                      </p>

                      {/* Key Metric Pills */}
                      <div className="grid grid-cols-2 gap-2">
                        {project.metrics.slice(0, 2).map((m, idx) => (
                          <div key={idx} className="p-2 rounded-xl bg-slate-950/80 border border-slate-800/80">
                            <div className="text-xs font-black text-cyan-400">{m.value}</div>
                            <div className="text-[10px] text-slate-400 truncate">{m.label}</div>
                          </div>
                        ))}
                      </div>

                      {/* Tech stack chips */}
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((tech, idx) => (
                          <span key={idx} className="px-2 py-0.5 rounded-md bg-slate-950 border border-slate-800 text-[10px] font-medium text-slate-400">
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-1.5 py-0.5 rounded-md bg-slate-950 text-[10px] text-slate-500">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>

                    </div>
                  </div>

                  {/* Card Bottom Actions */}
                  <div className="p-5 pt-0 border-t border-slate-800/50 mt-2">
                    <button
                      onClick={() => handleOpenProject(project)}
                      className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500 hover:text-slate-950 border border-slate-700 hover:border-transparent text-slate-200 font-bold text-xs transition-all duration-200 flex items-center justify-center gap-1.5 shadow-sm group-hover:shadow-[0_0_15px_rgba(0,240,255,0.25)] cursor-pointer"
                    >
                      <span>Explore Live Experience</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              );
            })}
          </div>
        )}

        {/* 8. STRETCHED BOTTOM CONVERSION CTA BANNER */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-cyan-950/70 via-[#071128] to-blue-950/70 border border-cyan-500/40 p-8 sm:p-14 text-center relative overflow-hidden shadow-2xl">
          
          <div className="max-w-3xl mx-auto space-y-5 relative z-10">
            <span className="text-xs font-black uppercase tracking-widest text-cyan-400 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30">
              Transform Your Digital Presence
            </span>

            <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Ready to Build a High-End Digital Experience?
            </h3>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Let's turn your vision into an interactive, fast, and high-converting product. Transparent pricing, modern engineering, and complete post-launch support.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-4 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 text-slate-950 font-black text-xs sm:text-sm hover:brightness-110 shadow-[0_0_25px_rgba(0,240,255,0.4)] transition flex items-center gap-2 cursor-pointer"
              >
                <span>Start Your Project With AVRX</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleWhatsApp}
                className="px-6 py-4 rounded-xl bg-slate-900 border border-slate-700 hover:border-emerald-500/60 text-slate-200 hover:text-emerald-300 font-semibold text-xs sm:text-sm transition flex items-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Talk to AVRX on WhatsApp</span>
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* 9. FULLSCREEN INTERACTIVE PROJECT VIEWER MODAL */}
      <ProjectViewerModal
        project={selectedProjectForModal}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onNavigateToContact={handleNavigateToContact}
      />

    </section>
  );
};
