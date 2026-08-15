import React, { useState, useEffect } from 'react';
import { Search, Sun, Moon, Menu, X, ChevronDown, Code, DollarSign, FileText, Shield, Server, Sparkles, PhoneCall } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { SITE_CONFIG } from '../../config';
import brandLogo from '../../assets/images/avrx_white_logo_1786467039540.jpg';

interface NavbarProps {
  activePage: string;
  onNavigate: (page: string) => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate, onOpenSearch }) => {
  const { theme, toggleTheme, language, setLanguage, t } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setSolutionsOpen(false);
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050811]/92 backdrop-blur-xl border-b border-slate-800/80 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent py-5'
      }`}
    >
      {/* Tiny Subtle Tricolour Line Accent under the Navbar */}
      <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#FF9933]/50 via-white/60 via-[#138808]/50 to-transparent opacity-75" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between relative">
        
        {/* Brand Logo & Independence Micro-Badge */}
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
              
              {/* Subtle Tricolour Dot near logo */}
              <div className="absolute -top-1 -right-1 flex items-center gap-0.5 p-0.5 rounded-full bg-slate-950 border border-slate-700 shadow-sm" title="Celebrating India's Independence">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF9933]" />
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#138808]" />
              </div>
            </div>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
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

            {/* Mega Menu Overlay Box */}
            {solutionsOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[520px] bg-[#0b0f19]/95 backdrop-blur-2xl border border-slate-800 rounded-2xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.8)] grid grid-cols-1 gap-2 animate-in fade-in zoom-in-95 duration-150">
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

          <button
            onClick={() => handleNav('ai-tools')}
            className={`flex items-center gap-1.5 hover:text-cyan-400 transition ${activePage === 'ai-tools' ? 'text-cyan-400 font-semibold' : ''}`}
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>{t('nav.ai_tools')}</span>
          </button>

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

          <button
            onClick={() => handleNav('partner')}
            className={`hover:text-cyan-400 transition ${activePage === 'partner' ? 'text-cyan-400 font-semibold' : ''}`}
          >
            {t('nav.partner')}
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
          {/* Search Trigger */}
          <button
            onClick={onOpenSearch}
            className="p-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-800/60 rounded-xl transition border border-slate-800/60"
            title="Search Solutions"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Language Switcher */}
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

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 text-slate-400 hover:text-amber-300 hover:bg-slate-800/60 rounded-xl transition border border-slate-800/60"
            title="Toggle Theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Secondary CTA: Talk to Expert */}
          <button
            onClick={() => handleNav('contact')}
            className="px-3.5 py-2 text-xs font-medium text-slate-300 hover:text-cyan-300 hover:bg-slate-800/80 rounded-xl border border-slate-800 transition flex items-center gap-1.5"
          >
            <PhoneCall className="w-3.5 h-3.5 text-cyan-400" />
            <span>{t('nav.talk_expert')}</span>
          </button>

          {/* Primary CTA: Get Started with subtle Tricolour sweep on hover */}
          <button
            onClick={() => handleNav('contact')}
            className="btn-tricolour-hover px-4 py-2 text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 hover:brightness-110 rounded-xl shadow-[0_0_20px_rgba(0,240,255,0.4)] transition transform hover:scale-105 active:scale-95"
          >
            {t('nav.get_started')}
          </button>
        </div>

        {/* Mobile Top Controls (Search + Hamburger) */}
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
            
            {/* Lang & Theme mobile row */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center bg-slate-900 border border-slate-800 rounded-xl p-1 text-xs font-semibold">
                <button
                  onClick={() => setLanguage('EN')}
                  className={`px-3 py-1 rounded-lg transition ${language === 'EN' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400'}`}
                >
                  English
                </button>
                <button
                  onClick={() => setLanguage('HI')}
                  className={`px-3 py-1 rounded-lg transition ${language === 'HI' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400'}`}
                >
                  हिन्दी
                </button>
              </div>

              <button
                onClick={toggleTheme}
                className="p-2 bg-slate-900 border border-slate-800 rounded-xl text-amber-300"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>

            {/* Mobile Nav Links */}
            <div className="flex flex-col gap-2 pt-2">
              <button
                onClick={() => handleNav('home')}
                className={`text-left p-3 rounded-xl font-medium text-base ${activePage === 'home' ? 'bg-cyan-500/10 text-cyan-400 font-semibold' : 'text-slate-200'}`}
              >
                {t('nav.home')}
              </button>

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

              <button
                onClick={() => handleNav('ai-tools')}
                className={`text-left p-3 rounded-xl font-medium text-base flex items-center gap-2 ${activePage === 'ai-tools' ? 'bg-cyan-500/10 text-cyan-400 font-semibold' : 'text-slate-200'}`}
              >
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>{t('nav.ai_tools')}</span>
              </button>

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

              <button
                onClick={() => handleNav('partner')}
                className={`text-left p-3 rounded-xl font-medium text-base ${activePage === 'partner' ? 'bg-cyan-500/10 text-cyan-400 font-semibold' : 'text-slate-200'}`}
              >
                {t('nav.partner')}
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
          <div className="pt-6 border-t border-slate-800 space-y-3">
            <button
              onClick={() => handleNav('contact')}
              className="w-full py-3.5 text-center font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-xl shadow-lg"
            >
              {t('nav.get_started')}
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                const url = `https://wa.me/${SITE_CONFIG.contact.whatsapp}`;
                window.open(url, '_blank');
              }}
              className="w-full py-3 text-center text-sm font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-xl"
            >
              {t('nav.talk_expert')}
            </button>
          </div>

        </div>
      )}
    </header>
  );
};
