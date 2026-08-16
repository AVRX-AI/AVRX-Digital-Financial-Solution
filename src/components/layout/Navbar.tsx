import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Menu, 
  X, 
  ChevronDown, 
  Code, 
  DollarSign, 
  FileText, 
  Shield, 
  Server, 
  Sparkles, 
  Handshake,
  ArrowRight,
  PenTool,
  Palette,
  Table,
  Briefcase,
  Globe,
  Award,
  Calculator,
  Layers,
  Zap,
  FlaskConical,
  Image as ImageIcon,
  MessageSquare,
  BarChart2,
  Gauge
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { SITE_CONFIG } from '../../config';
import brandLogo from '../../assets/images/avrx_white_logo_1786467039540.jpg';
import { AI_SUITE_CATEGORIES, POPULAR_HIGHLIGHTED_TOOLS } from '../../data/aiToolsSuiteData';

interface NavbarProps {
  activePage: string;
  onNavigate: (page: string, postSlug?: string) => void;
  onOpenSearch: () => void;
  onReplayLaunch?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate, onOpenSearch }) => {
  const { language, setLanguage, t } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [aiToolsOpen, setAiToolsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (page: string, toolId?: string) => {
    if (page === 'ai-tools' && toolId) {
      if (typeof window !== 'undefined') {
        const url = new URL(window.location.href);
        url.searchParams.set('tool', toolId);
        window.history.pushState({}, '', url.toString());
      }
    }
    onNavigate(page);
    setMobileMenuOpen(false);
    setSolutionsOpen(false);
    setAiToolsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const solutionCategories = [
    {
      id: 'digital-solutions',
      title: 'Digital Solutions',
      desc: 'Websites, Apps, E-Commerce, SEO & Marketing',
      icon: <Code className="w-5 h-5 text-cyan-400" />
    },
    {
      id: 'financial-solutions',
      title: 'Financial Solutions',
      desc: 'Personal, Business, Home, Car Loans & Govt Schemes',
      icon: <DollarSign className="w-5 h-5 text-emerald-400" />
    },
    {
      id: 'tax-solutions',
      title: 'Tax Solutions',
      desc: 'GST Registration/Filing, ITR, Udyam & ROC Compliance',
      icon: <FileText className="w-5 h-5 text-amber-400" />
    },
    {
      id: 'insurance-solutions',
      title: 'Insurance Solutions',
      desc: 'Motor, Health, Travel, Home & Shop Insurance',
      icon: <Shield className="w-5 h-5 text-purple-400" />
    },
    {
      id: 'hosting-products',
      title: 'Digital Products & Hosting',
      desc: 'Cloud NVMe Hosting, Themes, Domains & Multi-site',
      icon: <Server className="w-5 h-5 text-blue-400" />
    }
  ];

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'content': return <PenTool className="w-4 h-4 text-rose-400" />;
      case 'creative': return <Palette className="w-4 h-4 text-fuchsia-400" />;
      case 'documents': return <FileText className="w-4 h-4 text-cyan-400" />;
      case 'data': return <Table className="w-4 h-4 text-emerald-400" />;
      case 'business': return <Briefcase className="w-4 h-4 text-amber-400" />;
      case 'seo': return <Globe className="w-4 h-4 text-blue-400" />;
      case 'career': return <Award className="w-4 h-4 text-violet-400" />;
      case 'finance': return <Calculator className="w-4 h-4 text-emerald-400" />;
      case 'developer': return <Code className="w-4 h-4 text-teal-400" />;
      case 'utilities': return <Layers className="w-4 h-4 text-sky-400" />;
      case 'automation': return <Zap className="w-4 h-4 text-amber-300" />;
      case 'lab': return <FlaskConical className="w-4 h-4 text-purple-400" />;
      default: return <Sparkles className="w-4 h-4 text-cyan-400" />;
    }
  };

  const getToolIcon = (iconName: string) => {
    switch (iconName) {
      case 'Image': return <ImageIcon className="w-4 h-4 text-fuchsia-400" />;
      case 'MessageSquare': return <MessageSquare className="w-4 h-4 text-cyan-400" />;
      case 'BarChart2': return <BarChart2 className="w-4 h-4 text-emerald-400" />;
      case 'Gauge': return <Gauge className="w-4 h-4 text-blue-400" />;
      case 'Calculator': return <Calculator className="w-4 h-4 text-teal-400" />;
      case 'FlaskConical': return <FlaskConical className="w-4 h-4 text-purple-400" />;
      default: return <PenTool className="w-4 h-4 text-rose-400" />;
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050811]/94 backdrop-blur-2xl border-b border-slate-800/80 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.6)]'
          : 'bg-transparent py-5'
      }`}
    >
      {/* Subtle Tricolour Line Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#FF9933]/50 via-white/60 via-[#138808]/50 to-transparent opacity-75" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between relative">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleNav('home')}
            className="flex items-center group focus:outline-none py-1"
          >
            <div className="relative rounded-xl p-1 bg-[#050811]/90 border border-slate-700/80 shadow-[0_0_15px_rgba(255,255,255,0.15)] transition-all duration-300 group-hover:scale-105 group-hover:border-white group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              <img
                src={brandLogo}
                alt="AVRX Digital & Financial Solution Logo"
                className="h-9 sm:h-11 md:h-12 w-auto object-contain rounded-lg brightness-110"
                referrerPolicy="no-referrer"
              />
            </div>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
          <button
            onClick={() => handleNav('home')}
            className={`hover:text-cyan-400 transition ${activePage === 'home' ? 'text-cyan-400 font-semibold' : ''}`}
          >
            {t('nav.home')}
          </button>

          {/* Solutions Dropdown Mega Menu */}
          <div
            className="relative"
            onMouseEnter={() => setSolutionsOpen(true)}
            onMouseLeave={() => setSolutionsOpen(false)}
          >
            <button
              onClick={() => setSolutionsOpen(!solutionsOpen)}
              className={`flex items-center gap-1 hover:text-cyan-400 transition py-2 ${
                ['digital-solutions', 'financial-solutions', 'tax-solutions', 'insurance-solutions', 'hosting-products'].includes(activePage)
                  ? 'text-cyan-400 font-semibold'
                  : ''
              }`}
            >
              <span>{t('nav.solutions')}</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${solutionsOpen ? 'rotate-180 text-cyan-400' : ''}`} />
            </button>

            {solutionsOpen && (
              <div className="absolute top-full left-0 w-[500px] bg-[#0b0f19]/98 backdrop-blur-2xl border border-slate-800 rounded-2xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.8)] grid grid-cols-1 gap-2 animate-in fade-in zoom-in-95 duration-150">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 px-3 py-1">
                  AVRX Ecosystem Solutions
                </div>
                {solutionCategories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => handleNav(cat.id)}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-cyan-500/10 hover:border-cyan-500/30 border border-transparent transition group text-left"
                  >
                    <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      {cat.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-white group-hover:text-cyan-300 transition text-sm">
                        {cat.title}
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5 leading-snug">
                        {cat.desc}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* AI Tools Mega Menu (Flagship Next-Gen AI Interactive Suite) */}
          <div
            className="relative"
            onMouseEnter={() => setAiToolsOpen(true)}
            onMouseLeave={() => setAiToolsOpen(false)}
          >
            <button
              onClick={() => handleNav('ai-tools')}
              className={`flex items-center gap-1.5 hover:text-cyan-400 transition py-2 ${
                activePage === 'ai-tools' ? 'text-cyan-400 font-semibold' : ''
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>AI Tools</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${aiToolsOpen ? 'rotate-180 text-cyan-400' : ''}`} />
            </button>

            {aiToolsOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[860px] bg-[#070b14]/98 backdrop-blur-2xl border border-slate-700/80 rounded-3xl p-6 shadow-[0_25px_60px_rgba(0,0,0,0.9)] animate-in fade-in zoom-in-95 duration-150 border-cyan-500/20">
                
                {/* Mega Menu Top Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/30">
                        Next-Gen AI Interactive Suite
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 mt-1">
                      Powerful AI tools designed to create, analyze, automate and transform your everyday digital work.
                    </p>
                  </div>
                  <button
                    onClick={() => handleNav('ai-tools')}
                    className="px-3.5 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold transition flex items-center gap-1 shadow-[0_0_15px_rgba(6,182,212,0.3)] shrink-0"
                  >
                    <span>Open Full Suite</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* 2-Column Mega Menu Content */}
                <div className="grid grid-cols-12 gap-6">
                  
                  {/* Left Column: 12 Categories Grid */}
                  <div className="col-span-7 border-r border-slate-800/80 pr-6 space-y-2">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-1 mb-2">
                      Explore by Category (12 Suites)
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {AI_SUITE_CATEGORIES.filter(c => c.id !== 'all').map(cat => (
                        <button
                          key={cat.id}
                          onClick={() => handleNav('ai-tools')}
                          className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-cyan-500/10 hover:border-cyan-500/30 border border-transparent transition text-left group"
                        >
                          <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 shrink-0 group-hover:scale-110 transition-transform">
                            {getCategoryIcon(cat.id)}
                          </div>
                          <div className="min-w-0">
                            <div className="font-semibold text-xs text-slate-200 group-hover:text-cyan-300 transition truncate">
                              {cat.shortName}
                            </div>
                            <div className="text-[10px] text-slate-400 truncate">
                              {cat.badge || 'Suite'}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Highlighted Popular Tools */}
                  <div className="col-span-5 space-y-2.5">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-1 mb-2 flex items-center justify-between">
                      <span>Popular Tools</span>
                      <span className="text-[10px] text-cyan-400 font-mono">Instant Launch</span>
                    </div>

                    <div className="space-y-1.5">
                      {POPULAR_HIGHLIGHTED_TOOLS.slice(0, 5).map(tool => (
                        <button
                          key={tool.id}
                          onClick={() => handleNav('ai-tools', tool.id)}
                          className="w-full flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 hover:bg-cyan-500/15 border border-slate-800 hover:border-cyan-500/40 text-left transition group"
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <div className="p-1.5 rounded-lg bg-slate-950 border border-slate-800 shrink-0 text-cyan-400 group-hover:scale-105 transition-transform">
                              {getToolIcon(tool.icon)}
                            </div>
                            <div className="min-w-0">
                              <div className="text-xs font-bold text-white group-hover:text-cyan-300 truncate">
                                {tool.name}
                              </div>
                              <div className="text-[10px] text-slate-400 truncate">
                                {tool.desc}
                              </div>
                            </div>
                          </div>
                          <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                        </button>
                      ))}
                    </div>

                    <div className="pt-2 text-center">
                      <button
                        onClick={() => handleNav('ai-tools')}
                        className="text-[11px] text-cyan-400 hover:text-cyan-300 font-semibold inline-flex items-center gap-1 transition"
                      >
                        <span>Browse full catalogue of 70+ AI tools</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                </div>

              </div>
            )}
          </div>

          <button
            onClick={() => handleNav('projects')}
            className={`hover:text-cyan-400 transition ${activePage === 'projects' ? 'text-cyan-400 font-semibold' : ''}`}
          >
            Projects
          </button>

          <button
            onClick={() => handleNav('pricing')}
            className={`hover:text-cyan-400 transition ${activePage === 'pricing' ? 'text-cyan-400 font-semibold' : ''}`}
          >
            {t('nav.pricing')}
          </button>

          <button
            onClick={() => handleNav('about')}
            className={`hover:text-cyan-400 transition ${activePage === 'about' ? 'text-cyan-400 font-semibold' : ''}`}
          >
            {t('nav.about')}
          </button>

          {/* Highlighted Partner With Us Link */}
          <button
            onClick={() => handleNav('partner')}
            className={`group relative px-3 py-1.5 rounded-xl transition-all duration-300 flex items-center gap-1.5 text-xs font-bold ${
              activePage === 'partner'
                ? 'bg-slate-900 text-white border border-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                : 'bg-slate-900/90 text-slate-200 hover:text-white border border-[#FF9933]/50 hover:border-cyan-400 shadow-[0_0_12px_rgba(255,153,51,0.25)] hover:shadow-[0_0_18px_rgba(0,240,255,0.4)]'
            }`}
            title="Join AVRX Partner Network"
          >
            <Handshake className="w-3.5 h-3.5 text-[#FF9933] group-hover:text-cyan-400 group-hover:scale-110 transition-transform" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9933] via-white to-[#138808] font-bold">
              {t('nav.partner')}
            </span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          </button>

          <button
            onClick={() => handleNav('contact')}
            className={`hover:text-cyan-400 transition ${activePage === 'contact' ? 'text-cyan-400 font-semibold' : ''}`}
          >
            {t('nav.contact')}
          </button>
        </nav>

        {/* Right Tools & Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={onOpenSearch}
            className="p-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-800/60 rounded-xl transition border border-slate-800/60"
            title="Search Solutions"
          >
            <Search className="w-4 h-4" />
          </button>

          <div className="flex items-center bg-slate-900 border border-slate-800 rounded-xl p-0.5 text-xs font-semibold">
            <button
              onClick={() => setLanguage('EN')}
              className={`px-2 py-1 rounded-lg transition ${language === 'EN' ? 'bg-cyan-500 text-slate-950 shadow' : 'text-slate-400 hover:text-white'}`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('HI')}
              className={`px-2 py-1 rounded-lg transition ${language === 'HI' ? 'bg-cyan-500 text-slate-950 shadow' : 'text-slate-400 hover:text-white'}`}
            >
              हिन्दी
            </button>
          </div>

          <button
            onClick={() => handleNav('contact')}
            className="btn-tricolour-hover px-4 py-2 text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 hover:brightness-110 rounded-xl shadow-[0_0_20px_rgba(0,240,255,0.4)] transition transform hover:scale-105 active:scale-95"
          >
            {t('nav.get_started')}
          </button>
        </div>

        {/* Mobile Top Controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenSearch}
            className="p-2 text-slate-300 hover:text-cyan-400 bg-slate-900 border border-slate-800 rounded-xl"
          >
            <Search className="w-5 h-5" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-200 bg-slate-900 border border-slate-800 rounded-xl hover:text-cyan-400"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[70px] bottom-0 z-50 bg-[#050811]/98 backdrop-blur-2xl border-t border-slate-800 p-6 overflow-y-auto flex flex-col justify-between animate-in slide-in-from-top-4 duration-200">
          <div className="space-y-4">
            
            {/* Lang mobile row */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center w-full bg-slate-900 border border-slate-800 rounded-xl p-1 text-xs font-semibold">
                <button
                  onClick={() => setLanguage('EN')}
                  className={`flex-1 py-1.5 text-center rounded-lg transition ${language === 'EN' ? 'bg-cyan-500 text-slate-950 font-bold shadow' : 'text-slate-400'}`}
                >
                  English
                </button>
                <button
                  onClick={() => setLanguage('HI')}
                  className={`flex-1 py-1.5 text-center rounded-lg transition ${language === 'HI' ? 'bg-cyan-500 text-slate-950 font-bold shadow' : 'text-slate-400'}`}
                >
                  हिन्दी
                </button>
              </div>
            </div>

            {/* Mobile Nav Links */}
            <div className="flex flex-col gap-2 pt-2">
              <button
                onClick={() => handleNav('home')}
                className={`text-left p-3 rounded-xl font-medium text-base ${activePage === 'home' ? 'bg-cyan-500/10 text-cyan-400 font-semibold' : 'text-slate-200'}`}
              >
                {t('nav.home')}
              </button>

              {/* Mobile Solutions Accordion */}
              <div className="border border-slate-800/80 rounded-2xl p-2 bg-slate-950/60 space-y-1">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 px-3 py-1">
                  Solutions Categories
                </div>
                {solutionCategories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => handleNav(cat.id)}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-slate-800/60 text-slate-200 flex items-center gap-3 text-sm"
                  >
                    {cat.icon}
                    <span>{cat.title}</span>
                  </button>
                ))}
              </div>

              {/* Mobile AI Tools Accordion */}
              <div className="border border-cyan-500/30 rounded-2xl p-3 bg-cyan-950/20 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-cyan-300 font-bold text-sm">
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    <span>Next-Gen AI Suite</span>
                  </div>
                  <button
                    onClick={() => handleNav('ai-tools')}
                    className="text-xs text-cyan-400 underline font-semibold"
                  >
                    View All
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-2 pt-1">
                  {POPULAR_HIGHLIGHTED_TOOLS.slice(0, 4).map(t => (
                    <button
                      key={t.id}
                      onClick={() => handleNav('ai-tools', t.id)}
                      className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-left text-xs text-slate-200 hover:text-cyan-300 truncate"
                    >
                      {t.name}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => handleNav('projects')}
                className={`text-left p-3 rounded-xl font-medium text-base ${activePage === 'projects' ? 'bg-cyan-500/10 text-cyan-400 font-semibold' : 'text-slate-200'}`}
              >
                Projects Showcase
              </button>

              <button
                onClick={() => handleNav('pricing')}
                className={`text-left p-3 rounded-xl font-medium text-base ${activePage === 'pricing' ? 'bg-cyan-500/10 text-cyan-400 font-semibold' : 'text-slate-200'}`}
              >
                {t('nav.pricing')}
              </button>

              <button
                onClick={() => handleNav('about')}
                className={`text-left p-3 rounded-xl font-medium text-base ${activePage === 'about' ? 'bg-cyan-500/10 text-cyan-400 font-semibold' : 'text-slate-200'}`}
              >
                {t('nav.about')}
              </button>

              {/* Highlighted Partner With Us link */}
              <button
                onClick={() => handleNav('partner')}
                className={`text-left p-3 rounded-xl font-medium text-base flex items-center justify-between border transition ${
                  activePage === 'partner'
                    ? 'bg-slate-900 text-white border-cyan-400 font-bold shadow-[0_0_15px_rgba(0,240,255,0.3)]'
                    : 'bg-slate-900/90 text-white border-[#FF9933]/50 shadow-[0_0_12px_rgba(255,153,51,0.2)]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Handshake className="w-4 h-4 text-[#FF9933]" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9933] via-white to-[#138808] font-bold">
                    {t('nav.partner')}
                  </span>
                </div>
                <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Earn ₹50k+
                </span>
              </button>

              <button
                onClick={() => handleNav('contact')}
                className={`text-left p-3 rounded-xl font-medium text-base ${activePage === 'contact' ? 'bg-cyan-500/10 text-cyan-400 font-semibold' : 'text-slate-200'}`}
              >
                {t('nav.contact')}
              </button>
            </div>
          </div>

          {/* Mobile Bottom Action Buttons */}
          <div className="pt-6 border-t border-slate-800">
            <button
              onClick={() => handleNav('contact')}
              className="w-full py-3.5 text-center font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-xl shadow-lg"
            >
              {t('nav.get_started')}
            </button>
          </div>

        </div>
      )}
    </header>
  );
};
