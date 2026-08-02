import React, { useState, useEffect } from 'react';
import { 
  Globe, 
  Sun, 
  Moon, 
  Search, 
  Menu, 
  X, 
  Sparkles, 
  TrendingUp, 
  Layout, 
  Smartphone, 
  CreditCard, 
  ShieldCheck, 
  FileText,
  PhoneCall,
  ChevronDown,
  ArrowUpRight
} from 'lucide-react';
import { Language, ThemeMode } from '../types';
import { translations } from '../data/translations';

interface NavbarProps {
  language?: Language;
  onLanguageChange?: (lang: Language) => void;
  theme?: ThemeMode;
  onThemeToggle?: () => void;
  onOpenSearch?: () => void;
  onOpenConsultation?: () => void;
  onSelectServiceCategory?: (cat: 'digital' | 'financial') => void;
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  language = 'en',
  onLanguageChange = (_lang?: any) => {},
  theme = 'dark',
  onThemeToggle = () => {},
  onOpenSearch = () => {},
  onOpenConsultation = () => {},
  onSelectServiceCategory = (_cat?: any) => {},
  activeSection = 'hero'
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [visitorCount, setVisitorCount] = useState(134);

  const t = translations[language] || translations.en;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simulate subtle real-time visitor fluctuation
  useEffect(() => {
    const interval = setInterval(() => {
      setVisitorCount(prev => {
        const delta = Math.random() > 0.5 ? 1 : -1;
        const newCount = prev + delta;
        return newCount < 125 ? 126 : newCount > 165 ? 164 : newCount;
      });
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#081B33]/85 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20' 
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      {/* Top Banner with live visitor & quick domain badge */}
      <div className="bg-[#0A66FF]/90 text-white text-xs py-1.5 px-4 font-medium border-b border-white/10 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-white/20 text-white text-[10px] font-bold tracking-wide uppercase">
              avrx.in
            </span>
            <span className="text-white/90">
              {t.tagline}
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1.5 bg-black/20 px-2.5 py-0.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-emerald-300 font-semibold">{visitorCount}</span>
              <span className="text-white/80">{t.liveVisitorText}</span>
            </div>
            <a 
              href="tel:+919630661536" 
              className="hover:underline flex items-center space-x-1 text-white font-semibold"
            >
              <PhoneCall className="w-3 h-3" />
              <span>+91-9630661536</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Glassmorphic Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a 
            href="https://avrx.in" 
            onClick={(e) => { e.preventDefault(); scrollTo('hero'); }}
            className="flex items-center group cursor-pointer"
          >
            <div className="flex items-center py-1">
              <span className="font-['Poppins'] font-black text-2xl sm:text-3xl tracking-[0.08em] text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-white drop-shadow-[0_0_15px_rgba(0,198,255,0.6)] group-hover:drop-shadow-[0_0_20px_rgba(0,198,255,0.9)] transition-all">
                AVRX
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            <button
              onClick={() => scrollTo('hero')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                activeSection === 'hero' ? 'text-cyan-400 bg-white/10 font-semibold' : 'text-white/80 hover:text-white hover:bg-white/5'
              }`}
            >
              {t.navHome}
            </button>

            {/* Mega Menu Dropdown for Services */}
            <div 
              className="relative group"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                onClick={() => scrollTo('services')}
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeSection === 'services' ? 'text-cyan-400 bg-white/10 font-semibold' : 'text-white/80 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{t.navServices}</span>
                <ChevronDown className="w-4 h-4 text-white/60 group-hover:rotate-180 transition-transform duration-200" />
              </button>

              {/* Glassmorphic Mega Menu */}
              {servicesDropdownOpen && (
                <div className="absolute left-0 top-full mt-1 w-96 rounded-2xl bg-[#081B33]/95 backdrop-blur-2xl border border-white/15 p-3 shadow-2xl shadow-black/60 grid grid-cols-1 gap-2 z-50">
                  <div 
                    onClick={() => { onSelectServiceCategory('digital'); scrollTo('services'); }}
                    className="p-3 rounded-xl hover:bg-white/10 transition-all cursor-pointer border border-transparent hover:border-blue-500/40 group/item flex items-start space-x-3"
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover/item:bg-blue-500 group-hover/item:text-white transition-colors">
                      <Layout className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white group-hover/item:text-cyan-300 flex items-center justify-between">
                        <span>Digital & Tech Services</span>
                        <ArrowUpRight className="w-4 h-4 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                      </div>
                      <p className="text-xs text-white/60 mt-0.5">
                        Websites, Android/iOS Apps, SEO, Ads, Cloud Hosting & Branding
                      </p>
                    </div>
                  </div>

                  <div 
                    onClick={() => { onSelectServiceCategory('financial'); scrollTo('services'); }}
                    className="p-3 rounded-xl hover:bg-white/10 transition-all cursor-pointer border border-transparent hover:border-purple-500/40 group/item flex items-start space-x-3"
                  >
                    <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 group-hover/item:bg-purple-500 group-hover/item:text-white transition-colors">
                      <CreditCard className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white group-hover/item:text-purple-300 flex items-center justify-between">
                        <span>Financial Services</span>
                        <ArrowUpRight className="w-4 h-4 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                      </div>
                      <p className="text-xs text-white/60 mt-0.5">
                        Personal/Business Loans, Home Loan, GST, ITR, Insurance & Credit Score
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => scrollTo('ai-tools')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center space-x-1.5 ${
                activeSection === 'ai-tools' 
                  ? 'text-cyan-400 bg-white/10 font-semibold' 
                  : 'text-white/80 hover:text-white hover:bg-white/5'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin" style={{ animationDuration: '6s' }} />
              <span>{t.navAITools}</span>
            </button>

            <button
              onClick={() => scrollTo('portfolio')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                activeSection === 'portfolio' ? 'text-cyan-400 bg-white/10 font-semibold' : 'text-white/80 hover:text-white hover:bg-white/5'
              }`}
            >
              {t.navPortfolio}
            </button>

            <button
              onClick={() => scrollTo('blog')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                activeSection === 'blog' ? 'text-cyan-400 bg-white/10 font-semibold' : 'text-white/80 hover:text-white hover:bg-white/5'
              }`}
            >
              {t.navBlog}
            </button>

            <button
              onClick={() => scrollTo('why-us')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                activeSection === 'why-us' ? 'text-cyan-400 bg-white/10 font-semibold' : 'text-white/80 hover:text-white hover:bg-white/5'
              }`}
            >
              {t.navWhyUs}
            </button>

            <button
              onClick={() => scrollTo('contact')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                activeSection === 'contact' ? 'text-cyan-400 bg-white/10 font-semibold' : 'text-white/80 hover:text-white hover:bg-white/5'
              }`}
            >
              {t.navContact}
            </button>
          </nav>

          {/* Right Action Tools: Language, Theme, Search, CTA */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Search (Command+K) Button */}
            <button
              onClick={onOpenSearch}
              className="flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 text-white/80 hover:text-white border border-white/15 text-xs font-medium transition-all"
              title="Quick Search (Ctrl/Cmd + K)"
            >
              <Search className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden md:inline">Search</span>
              <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-[10px] rounded bg-black/30 border border-white/10 font-mono text-white/70">
                ⌘K
              </kbd>
            </button>

            {/* Language Toggle (English / Hindi) */}
            <button
              onClick={() => onLanguageChange(language === 'en' ? 'hi' : 'en')}
              className="flex items-center space-x-1.5 px-2.5 py-1.5 rounded-xl bg-gradient-to-r from-blue-600/30 to-purple-600/30 hover:from-blue-600/50 hover:to-purple-600/50 border border-blue-400/40 text-xs font-bold text-white transition-all shadow-sm"
              title="Toggle English / Hindi Language"
            >
              <Globe className="w-3.5 h-3.5 text-cyan-300" />
              <span>{language === 'en' ? 'EN' : 'हिन्दी'}</span>
            </button>

            {/* Theme Toggle (Dark / Light) */}
            <button
              onClick={onThemeToggle}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-all"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-300" />
              ) : (
                <Moon className="w-4 h-4 text-cyan-300" />
              )}
            </button>

            {/* Consultation CTA Button */}
            <button
              onClick={onOpenConsultation}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-xl bg-gradient-to-r from-[#0A66FF] via-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-xs sm:text-sm font-semibold shadow-lg shadow-blue-500/30 hover:shadow-cyan-500/40 transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>{t.ctaFreeConsultation}</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-white/10 text-white border border-white/15"
              aria-label="Open navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#081B33]/95 backdrop-blur-2xl border-b border-white/10 p-4 space-y-3">
          <div className="grid grid-cols-2 gap-2 pb-2 border-b border-white/10">
            <button
              onClick={() => { onSelectServiceCategory('digital'); scrollTo('services'); }}
              className="p-3 rounded-xl bg-blue-500/20 text-left border border-blue-500/40"
            >
              <Layout className="w-5 h-5 text-blue-400 mb-1" />
              <div className="text-sm font-semibold text-white">Digital & Tech</div>
              <div className="text-[11px] text-white/70">Web, Apps & SEO</div>
            </button>
            <button
              onClick={() => { onSelectServiceCategory('financial'); scrollTo('services'); }}
              className="p-3 rounded-xl bg-purple-500/20 text-left border border-purple-500/40"
            >
              <CreditCard className="w-5 h-5 text-purple-400 mb-1" />
              <div className="text-sm font-semibold text-white">Financial Services</div>
              <div className="text-[11px] text-white/70">Loans, GST & ITR</div>
            </button>
          </div>

          <div className="flex flex-col space-y-1">
            <button
              onClick={() => scrollTo('hero')}
              className="text-left px-4 py-2.5 rounded-xl text-white font-medium hover:bg-white/10"
            >
              {t.navHome}
            </button>
            <button
              onClick={() => scrollTo('ai-tools')}
              className="text-left px-4 py-2.5 rounded-xl text-cyan-300 font-semibold bg-white/5 flex items-center space-x-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>{t.navAITools}</span>
            </button>
            <button
              onClick={() => scrollTo('portfolio')}
              className="text-left px-4 py-2.5 rounded-xl text-white font-medium hover:bg-white/10"
            >
              {t.navPortfolio}
            </button>
            <button
              onClick={() => scrollTo('blog')}
              className="text-left px-4 py-2.5 rounded-xl text-white font-medium hover:bg-white/10"
            >
              {t.navBlog}
            </button>
            <button
              onClick={() => scrollTo('why-us')}
              className="text-left px-4 py-2.5 rounded-xl text-white font-medium hover:bg-white/10"
            >
              {t.navWhyUs}
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="text-left px-4 py-2.5 rounded-xl text-white font-medium hover:bg-white/10"
            >
              {t.navContact}
            </button>
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#0A66FF] to-purple-600 text-white font-bold text-sm shadow-lg shadow-blue-500/30"
            >
              {t.ctaFreeConsultation}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
