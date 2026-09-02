import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Menu, 
  X, 
  ChevronDown, 
  Home,
  Code2,
  Code, 
  Landmark,
  DollarSign, 
  FileText, 
  Shield, 
  Server, 
  Sparkles, 
  FolderGit2,
  CreditCard,
  Users,
  Handshake,
  PhoneCall,
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
import { launchSoundEngine } from '../../utils/launchSoundEngine';
import { JanmashtamiTopBanner } from '../festive/JanmashtamiTopBanner';

interface NavbarProps {
  activePage: string;
  onNavigate: (page: string, postSlug?: string) => void;
  onOpenSearch: () => void;
  onReplayLaunch?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate, onOpenSearch, onReplayLaunch }) => {
  const { language, setLanguage, t, festiveMode, toggleFestiveMode } = useTheme();
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
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
      {/* Festive Janmashtami Announcement Ribbon (Active only when festiveMode is 'janmashtami') */}
      <JanmashtamiTopBanner onNavigate={handleNav} />

      <div
        className={`transition-all duration-300 relative ${
          isScrolled
            ? 'bg-[#050811]/94 backdrop-blur-2xl border-b border-slate-800/80 py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.6)]'
            : 'bg-[#050811]/70 backdrop-blur-md py-4'
        }`}
      >
        {/* Futuristic Cyber Holographic Laser Border Line Accent */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 via-amber-400 to-transparent opacity-90 shadow-[0_0_15px_rgba(6,182,212,0.6)]" />

        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 flex items-center justify-between flex-nowrap gap-3 relative">
        
        {/* Brand Logo */}
        <div className="flex items-center shrink-0">
          <button
            onClick={() => handleNav('home')}
            className="flex items-center group focus:outline-none py-0.5 cursor-pointer"
          >
            <div className="relative rounded-lg p-0.5 sm:p-1 bg-[#050811]/90 border border-cyan-500/30 shadow-[0_0_12px_rgba(6,182,212,0.2)] transition-all duration-300 group-hover:scale-105 group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center">
              <img
                src={brandLogo}
                alt="AVRX Digital & Financial Solution Logo"
                className="h-7 sm:h-8 md:h-9 w-auto max-h-9 object-contain rounded-md brightness-110"
                style={{ height: '34px', maxHeight: '36px', width: 'auto' }}
                referrerPolicy="no-referrer"
              />
            </div>
          </button>

          {/* Janmashtami Festive Badge */}
          {festiveMode === 'janmashtami' && (
            <div className="hidden sm:flex items-center gap-1.5 ml-2.5 px-2.5 py-1 rounded-full bg-gradient-to-r from-amber-500/20 via-yellow-500/15 to-emerald-500/20 border border-amber-400/50 shadow-[0_0_15px_rgba(245,158,11,0.25)] select-none animate-pulse">
              <span className="text-xs">🦚</span>
              <span className="text-[11px] font-bold text-amber-300 font-sans tracking-wide">
                जन्माष्टमी उत्सव
              </span>
              <span className="text-xs">🪈</span>
            </div>
          )}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-2 xl:gap-2.5 text-xs xl:text-sm font-medium text-slate-300">
          <button
            onClick={() => handleNav('home')}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl transition-all ${
              activePage === 'home' 
                ? 'bg-cyan-500/15 text-cyan-300 font-bold border border-cyan-500/30 shadow-[0_0_12px_rgba(0,240,255,0.25)]' 
                : 'hover:text-cyan-300 hover:bg-slate-800/50'
            }`}
          >
            <Home className="w-3.5 h-3.5 text-cyan-400" />
            <span>{t('nav.home')}</span>
          </button>

          <button
            onClick={() => handleNav('digital-solutions')}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl transition-all ${
              activePage === 'digital-solutions' 
                ? 'bg-blue-500/15 text-blue-300 font-bold border border-blue-500/30 shadow-[0_0_12px_rgba(59,130,246,0.25)]' 
                : 'hover:text-blue-300 hover:bg-slate-800/50'
            }`}
          >
            <Code2 className="w-3.5 h-3.5 text-blue-400" />
            <span>Digital</span>
          </button>

          <button
            onClick={() => handleNav('financial-solutions')}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl transition-all ${
              activePage === 'financial-solutions' 
                ? 'bg-emerald-500/15 text-emerald-300 font-bold border border-emerald-500/30 shadow-[0_0_12px_rgba(16,185,129,0.25)]' 
                : 'hover:text-emerald-300 hover:bg-slate-800/50'
            }`}
          >
            <Landmark className="w-3.5 h-3.5 text-emerald-400" />
            <span>Finance</span>
          </button>

          <button
            onClick={() => handleNav('tax-solutions')}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl transition-all ${
              activePage === 'tax-solutions' 
                ? 'bg-amber-500/15 text-amber-300 font-bold border border-amber-500/30 shadow-[0_0_12px_rgba(245,158,11,0.25)]' 
                : 'hover:text-amber-300 hover:bg-slate-800/50'
            }`}
          >
            <FileText className="w-3.5 h-3.5 text-amber-400" />
            <span>Tax &amp; Legal</span>
          </button>

          {/* AI Tools Mega Menu (Flagship Next-Gen AI Interactive Suite) */}
          <div
            className="relative"
            onMouseEnter={() => setAiToolsOpen(true)}
            onMouseLeave={() => setAiToolsOpen(false)}
          >
            <button
              onClick={() => handleNav('ai-tools')}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl transition-all ${
                activePage === 'ai-tools' 
                  ? 'bg-purple-500/15 text-purple-300 font-bold border border-purple-500/30 shadow-[0_0_12px_rgba(168,85,247,0.25)]' 
                  : 'hover:text-purple-300 hover:bg-slate-800/50'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
              <span>AI Tools</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${aiToolsOpen ? 'rotate-180 text-purple-400' : 'text-slate-400'}`} />
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
                    className="px-3.5 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold transition flex items-center gap-1 shadow-[0_0_15px_rgba(6,182,212,0.3)] shrink-0 cursor-pointer"
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
                          className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-cyan-500/10 hover:border-cyan-500/30 border border-transparent transition text-left group cursor-pointer"
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
                          className="w-full flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 hover:bg-cyan-500/15 border border-slate-800 hover:border-cyan-500/40 text-left transition group cursor-pointer"
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
                        className="text-[11px] text-cyan-400 hover:text-cyan-300 font-semibold inline-flex items-center gap-1 transition cursor-pointer"
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
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl transition-all ${
              activePage === 'projects' 
                ? 'bg-violet-500/15 text-violet-300 font-bold border border-violet-500/30 shadow-[0_0_12px_rgba(139,92,246,0.25)]' 
                : 'hover:text-violet-300 hover:bg-slate-800/50'
            }`}
          >
            <FolderGit2 className="w-3.5 h-3.5 text-violet-400" />
            <span>Projects</span>
          </button>

          <button
            onClick={() => handleNav('pricing')}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl transition-all ${
              activePage === 'pricing' 
                ? 'bg-teal-500/15 text-teal-300 font-bold border border-teal-500/30 shadow-[0_0_12px_rgba(20,184,166,0.25)]' 
                : 'hover:text-teal-300 hover:bg-slate-800/50'
            }`}
          >
            <CreditCard className="w-3.5 h-3.5 text-teal-400" />
            <span>{t('nav.pricing')}</span>
          </button>

          <button
            onClick={() => handleNav('about')}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl transition-all ${
              activePage === 'about' 
                ? 'bg-indigo-500/15 text-indigo-300 font-bold border border-indigo-500/30 shadow-[0_0_12px_rgba(99,102,241,0.25)]' 
                : 'hover:text-indigo-300 hover:bg-slate-800/50'
            }`}
          >
            <Users className="w-3.5 h-3.5 text-indigo-400" />
            <span>{t('nav.about')}</span>
          </button>

          <button
            onClick={() => handleNav('partner')}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl transition-all ${
              activePage === 'partner'
                ? 'bg-amber-500/15 text-amber-300 font-bold border border-amber-500/30 shadow-[0_0_12px_rgba(245,158,11,0.25)]'
                : 'hover:text-amber-300 hover:bg-slate-800/50'
            }`}
          >
            <Handshake className="w-3.5 h-3.5 text-amber-400" />
            <span>{t('nav.partner')}</span>
          </button>

          <button
            onClick={() => handleNav('contact')}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl transition-all ${
              activePage === 'contact' 
                ? 'bg-rose-500/15 text-rose-300 font-bold border border-rose-500/30 shadow-[0_0_12px_rgba(244,63,94,0.25)]' 
                : 'hover:text-rose-300 hover:bg-slate-800/50'
            }`}
          >
            <PhoneCall className="w-3.5 h-3.5 text-rose-400" />
            <span>{t('nav.contact')}</span>
          </button>
        </nav>

        {/* Right Tools & Action Buttons */}
        <div className="hidden lg:flex items-center gap-2.5">
          {/* Janmashtami Theme Toggle Button */}
          <button
            onClick={toggleFestiveMode}
            className={`px-2.5 py-1.5 rounded-xl transition border cursor-pointer flex items-center gap-1.5 ${
              festiveMode === 'janmashtami'
                ? 'bg-amber-400/20 border-amber-400/60 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.3)] hover:brightness-110'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
            }`}
            title={festiveMode === 'janmashtami' ? 'Janmashtami Theme Active (Click to switch to standard theme)' : 'Janmashtami Theme Off (Click to activate)'}
          >
            <span>{festiveMode === 'janmashtami' ? '🦚' : '✨'}</span>
            <span className="text-xs font-bold text-amber-200">
              {festiveMode === 'janmashtami' ? 'जन्माष्टमी' : 'Festive'}
            </span>
          </button>

          <button
            onClick={onOpenSearch}
            className="p-2 text-slate-400 hover:text-amber-400 hover:bg-slate-800/60 rounded-xl transition border border-slate-800/60 cursor-pointer"
            title="Search Solutions"
          >
            <Search className="w-4 h-4" />
          </button>

          <div className="flex items-center bg-slate-900 border border-slate-800 rounded-xl p-0.5 text-xs font-semibold">
            <button
              onClick={() => setLanguage('EN')}
              className={`px-2 py-1 rounded-lg transition cursor-pointer ${language === 'EN' ? 'bg-amber-500 text-slate-950 shadow font-bold' : 'text-slate-400 hover:text-white'}`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('HI')}
              className={`px-2 py-1 rounded-lg transition cursor-pointer ${language === 'HI' ? 'bg-amber-500 text-slate-950 shadow font-bold' : 'text-slate-400 hover:text-white'}`}
            >
              हिन्दी
            </button>
          </div>

          <button
            onClick={() => handleNav('contact')}
            className="px-4 py-2 text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:brightness-110 rounded-xl shadow-[0_0_20px_rgba(245,158,11,0.35)] transition transform hover:scale-105 active:scale-95 cursor-pointer"
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

              {/* Mobile Festive Janmashtami Theme Switcher */}
              <div className="mt-2 flex items-center justify-between p-2.5 rounded-xl bg-[#031528] border border-amber-400/40">
                <div className="flex items-center gap-2">
                  <span className="text-base">🦚</span>
                  <div>
                    <div className="text-xs font-bold text-amber-200">जन्माष्टमी थीम</div>
                    <div className="text-[10px] text-slate-400">
                      {festiveMode === 'janmashtami' ? 'सक्रिय है (Active)' : 'निष्क्रिय (Off)'}
                    </div>
                  </div>
                </div>
                <button
                  onClick={toggleFestiveMode}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition ${
                    festiveMode === 'janmashtami'
                      ? 'bg-amber-400 text-slate-950 shadow-[0_0_10px_rgba(245,158,11,0.4)]'
                      : 'bg-slate-800 text-slate-300'
                  }`}
                >
                  {festiveMode === 'janmashtami' ? 'Turn Off' : 'Turn On'}
                </button>
              </div>
            </div>

            {/* Mobile Nav Links */}
            <div className="flex flex-col gap-2 pt-2">
              <button
                onClick={() => handleNav('home')}
                className={`text-left p-3 rounded-xl font-medium text-base flex items-center gap-3 ${
                  activePage === 'home' 
                    ? 'bg-cyan-500/15 text-cyan-400 font-semibold border border-cyan-500/30' 
                    : 'text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                <Home className="w-5 h-5 text-cyan-400 shrink-0" />
                <span>{t('nav.home')}</span>
              </button>

              {/* Mobile Solutions Accordion */}
              <div className="border border-slate-800/80 rounded-2xl p-2 bg-slate-950/60 space-y-1">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 px-3 py-1 flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Solutions Categories</span>
                </div>
                {solutionCategories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => handleNav(cat.id)}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-slate-800/60 text-slate-200 flex items-center gap-3 text-sm"
                  >
                    {cat.icon}
                    <div>
                      <div className="font-semibold text-white text-xs sm:text-sm">{cat.title}</div>
                      <div className="text-[11px] text-slate-400">{cat.desc}</div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Mobile AI Tools Accordion */}
              <div className="border border-purple-500/30 rounded-2xl p-3 bg-purple-950/20 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-purple-300 font-bold text-sm">
                    <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
                    <span>Next-Gen AI Suite</span>
                  </div>
                  <button
                    onClick={() => handleNav('ai-tools')}
                    className="text-xs text-purple-300 underline font-semibold flex items-center gap-1"
                  >
                    <span>View All</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-2 pt-1">
                  {POPULAR_HIGHLIGHTED_TOOLS.slice(0, 4).map(t => (
                    <button
                      key={t.id}
                      onClick={() => handleNav('ai-tools', t.id)}
                      className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-left text-xs text-slate-200 hover:text-cyan-300 truncate flex items-center gap-2"
                    >
                      {getToolIcon(t.icon)}
                      <span className="truncate">{t.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => handleNav('projects')}
                className={`text-left p-3 rounded-xl font-medium text-base flex items-center gap-3 ${
                  activePage === 'projects' 
                    ? 'bg-violet-500/15 text-violet-400 font-semibold border border-violet-500/30' 
                    : 'text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                <FolderGit2 className="w-5 h-5 text-violet-400 shrink-0" />
                <span>Projects Showcase</span>
              </button>

              <button
                onClick={() => handleNav('pricing')}
                className={`text-left p-3 rounded-xl font-medium text-base flex items-center gap-3 ${
                  activePage === 'pricing' 
                    ? 'bg-teal-500/15 text-teal-400 font-semibold border border-teal-500/30' 
                    : 'text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                <CreditCard className="w-5 h-5 text-teal-400 shrink-0" />
                <span>{t('nav.pricing')}</span>
              </button>

              <button
                onClick={() => handleNav('about')}
                className={`text-left p-3 rounded-xl font-medium text-base flex items-center gap-3 ${
                  activePage === 'about' 
                    ? 'bg-indigo-500/15 text-indigo-400 font-semibold border border-indigo-500/30' 
                    : 'text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                <Users className="w-5 h-5 text-indigo-400 shrink-0" />
                <span>{t('nav.about')}</span>
              </button>

              <button
                onClick={() => handleNav('partner')}
                className={`text-left p-3 rounded-xl font-medium text-base flex items-center gap-3 ${
                  activePage === 'partner'
                    ? 'bg-amber-500/15 text-amber-400 font-semibold border border-amber-500/30'
                    : 'text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                <Handshake className="w-5 h-5 text-amber-400 shrink-0" />
                <span>{t('nav.partner')}</span>
              </button>

              <button
                onClick={() => handleNav('contact')}
                className={`text-left p-3 rounded-xl font-medium text-base flex items-center gap-3 ${
                  activePage === 'contact' 
                    ? 'bg-rose-500/15 text-rose-400 font-semibold border border-rose-500/30' 
                    : 'text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                <PhoneCall className="w-5 h-5 text-rose-400 shrink-0" />
                <span>{t('nav.contact')}</span>
              </button>
            </div>
          </div>

          {/* Mobile Bottom Action Buttons */}
          <div className="pt-6 border-t border-slate-800">
            <button
              onClick={() => handleNav('contact')}
              className="w-full py-3.5 text-center font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 rounded-xl shadow-lg shadow-amber-950/40"
            >
              {t('nav.get_started')}
            </button>
          </div>

        </div>
      )}
    </header>
  );
};
