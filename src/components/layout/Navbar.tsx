import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Globe,
  Smartphone,
  Share2,
  Search,
  RefreshCw,
  DollarSign,
  FileText,
  ShieldCheck,
  Cpu,
  ShoppingBag,
  Briefcase,
  HelpCircle,
  Menu,
  X,
  ChevronDown,
  Sparkles,
  ArrowRight,
  Shield,
  Layers
} from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const navigationMenus = [
    {
      label: 'Digital Services',
      id: 'services',
      items: [
        { label: 'Website Design', path: '/services/website-design', icon: Globe, desc: 'Corporate, eCommerce & custom websites' },
        { label: 'Application Development', path: '/services/application-development', icon: Smartphone, desc: 'iOS, Android & Flutter cross-platform' },
        { label: 'Digital Marketing', path: '/services/digital-marketing', icon: Share2, desc: 'Meta ads, Google PPC & social growth' },
        { label: 'SEO Optimization', path: '/services/seo-optimization', icon: Search, desc: 'Rank #1 on Google with technical SEO' },
        { label: 'Website Redesign & SLA', path: '/services/website-redesign-maintenance', icon: RefreshCw, desc: '24/7 maintenance, speed & security' },
      ]
    },
    {
      label: 'Financial & Tax',
      id: 'financial',
      items: [
        { label: 'Financial Solutions & Loans', path: '/financial-solutions', icon: DollarSign, desc: 'Personal, business, MSME & home loans' },
        { label: 'Tax Solutions & GST', path: '/tax-solutions', icon: FileText, desc: 'GST filing, ITR, company registration' },
        { label: 'Insurance Solutions', path: '/insurance-solutions', icon: ShieldCheck, desc: 'Health, car, shop & term life insurance' },
      ]
    },
    {
      label: 'AI & Products',
      id: 'ai-products',
      items: [
        { label: 'AI Solutions & Tools', path: '/ai-solutions', icon: Cpu, desc: 'AI website health, SEO & chat assistants', badge: 'NEW' },
        { label: 'Digital Products & Hosting', path: '/digital-products', icon: ShoppingBag, desc: 'WordPress themes, plugins & NVMe hosting' },
      ]
    },
    {
      label: 'Company',
      id: 'company',
      items: [
        { label: 'About Us', path: '/about', icon: Briefcase, desc: 'Our mission, leadership & credentials' },
        { label: 'Portfolio & Case Studies', path: '/portfolio', icon: Layers, desc: 'Award-winning client deliverables' },
        { label: 'Pricing Plans', path: '/pricing', icon: Shield, desc: 'Transparent packages & SLA' },
        { label: 'Insights Blog', path: '/blog', icon: FileText, desc: 'Latest financial & tech articles' },
        { label: 'Career Opportunities', path: '/career', icon: Sparkles, desc: 'Join our team of elite creators' },
        { label: 'FAQ & Knowledge Base', path: '/faq', icon: HelpCircle, desc: 'Quick answers to common questions' },
      ]
    }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav py-3.5 shadow-2xl shadow-blue-950/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:shadow-blue-400/50 transition-all duration-300">
              <span className="text-white font-poppins font-black text-xl tracking-tighter">A</span>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full border-2 border-[#08090C]" />
            </div>
            <div className="flex flex-col">
              <span className="font-poppins font-extrabold text-lg tracking-tight text-white flex items-center gap-1">
                AVRX <span className="text-blue-400 font-medium text-xs px-1.5 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">DIGITAL</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-slate-400 font-medium">
                Digital • Financial • AI
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              to="/"
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === '/' ? 'text-blue-400 bg-white/5' : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Home
            </Link>

            {navigationMenus.map((menu) => (
              <div
                key={menu.id}
                className="relative"
                onMouseEnter={() => setActiveDropdown(menu.id)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeDropdown === menu.id ? 'text-white bg-white/5' : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{menu.label}</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === menu.id ? 'rotate-180 text-blue-400' : 'text-slate-400'
                    }`}
                  />
                </button>

                {/* Dropdown Card */}
                {activeDropdown === menu.id && (
                  <div className="absolute top-full left-0 w-80 pt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="glass-card bg-[#0F1117]/95 p-2 rounded-2xl border border-white/10 shadow-2xl shadow-black/80 backdrop-blur-2xl">
                      <div className="space-y-1">
                        {menu.items.map((item) => {
                          const Icon = item.icon;
                          return (
                            <Link
                              key={item.path}
                              to={item.path}
                              className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-all group"
                            >
                              <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                <Icon className="w-5 h-5" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2">
                                  <span className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                                    {item.label}
                                  </span>
                                  {item.badge && (
                                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                                      {item.badge}
                                    </span>
                                  )}
                                </div>
                                <p className="text-xs text-slate-400 truncate mt-0.5">
                                  {item.desc}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            <Link
              to="/services"
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === '/services' ? 'text-blue-400 bg-white/5' : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              All Services
            </Link>
          </nav>

          {/* Action buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              to="/ai-solutions"
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500/10 to-blue-500/10 hover:from-cyan-500/20 hover:to-blue-500/20 text-cyan-300 border border-cyan-500/30 flex items-center gap-1.5 transition-all shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>AI Tools</span>
            </Link>

            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 flex items-center gap-2 group"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[72px] bottom-0 bg-[#08090C]/98 backdrop-blur-2xl border-t border-white/10 overflow-y-auto z-50 p-6 space-y-6 animate-in fade-in slide-in-from-top-4">
          <div className="space-y-4">
            <Link
              to="/"
              className="block px-4 py-3 rounded-xl text-base font-semibold text-white bg-white/5 border border-white/10"
            >
              Home
            </Link>

            {navigationMenus.map((menu) => (
              <div key={menu.id} className="space-y-2">
                <div className="px-4 text-xs font-bold uppercase tracking-wider text-blue-400">
                  {menu.label}
                </div>
                <div className="grid grid-cols-1 gap-1 pl-2">
                  {menu.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
                      >
                        <Icon className="w-4 h-4 text-blue-400" />
                        <span>{item.label}</span>
                        {item.badge && (
                          <span className="ml-auto text-[10px] font-bold px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}

            <Link
              to="/services"
              className="block px-4 py-3 rounded-xl text-base font-semibold text-white hover:bg-white/5 border border-white/5"
            >
              All 40+ Services
            </Link>
          </div>

          <div className="pt-4 border-t border-white/10 space-y-3">
            <Link
              to="/contact"
              className="w-full py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 text-white flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
            >
              <span>Request Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/ai-solutions"
              className="w-full py-3 rounded-xl text-sm font-semibold bg-white/5 border border-white/10 text-cyan-300 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Explore AI Tools</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
