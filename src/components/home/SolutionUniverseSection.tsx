import React, { useState } from 'react';
import { 
  Code2, 
  TrendingUp, 
  DollarSign, 
  ShieldCheck, 
  FileText, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  ExternalLink,
  Layers,
  ChevronRight,
  Server,
  Zap,
  Globe
} from 'lucide-react';

interface SolutionUniverseSectionProps {
  onNavigate: (page: string, slug?: string) => void;
}

interface HubSector {
  id: 'digital' | 'growth' | 'finance' | 'protection' | 'tax';
  name: string;
  subtitle: string;
  tagline: string;
  color: string;
  accentColor: string;
  glow: string;
  icon: React.ElementType;
  page: string;
  overview: string;
  services: {
    title: string;
    slug?: string;
    tag: string;
    desc: string;
  }[];
}

export const SolutionUniverseSection: React.FC<SolutionUniverseSectionProps> = ({ onNavigate }) => {
  const [activeHubId, setActiveHubId] = useState<string>('digital');

  const hubs: HubSector[] = [
    {
      id: 'digital',
      name: 'DIGITAL LAB',
      subtitle: 'Engineering & Scalable Platforms',
      tagline: 'High-speed web platforms, mobile applications & digital ecosystems.',
      color: 'from-cyan-400 to-blue-500',
      accentColor: 'text-cyan-400',
      glow: 'shadow-[0_0_30px_rgba(0,240,255,0.3)]',
      icon: Code2,
      page: 'digital-solutions',
      overview: 'Transform your brand with tailored modern software architectures, lightning-fast responsive websites, custom iOS/Android mobile apps, seamless e-commerce stores with UPI integration, and managed high-speed NVMe cloud hosting.',
      services: [
        { title: 'Website Design', slug: 'website-design', tag: 'Core Web', desc: 'Custom, mobile-first responsive business portals.' },
        { title: 'Web Applications', slug: 'app-development', tag: 'Full-Stack', desc: 'Enterprise dashboards, portals & internal tools.' },
        { title: 'Android & iOS Apps', slug: 'app-development', tag: 'Mobile', desc: 'Native & cross-platform smartphone apps.' },
        { title: 'E-Commerce Platforms', slug: 'ecommerce', tag: 'Store', desc: 'Catalog, cart, Razorpay/UPI payments & order sync.' },
        { title: 'UI/UX Design', slug: 'website-design', tag: 'Creative', desc: 'Interactive prototypes & modern design systems.' },
        { title: 'Website Maintenance', slug: 'website-redesign', tag: 'Support', desc: 'Security updates, backups & 99.9% uptime.' },
        { title: 'NVMe Cloud Hosting', slug: '', tag: 'Cloud', desc: 'Sub-100ms load time with free SSL certificates.' },
        { title: 'Domain & Email Setup', slug: '', tag: 'Setup', desc: 'Custom domain mapping & Google Workspace.' }
      ]
    },
    {
      id: 'growth',
      name: 'GROWTH ENGINE',
      subtitle: 'Traffic, Rankings & Conversion Optimization',
      tagline: 'Dominate Google search results and generate qualified client enquiries.',
      color: 'from-emerald-400 to-teal-500',
      accentColor: 'text-emerald-400',
      glow: 'shadow-[0_0_30px_rgba(16,185,129,0.3)]',
      icon: TrendingUp,
      page: 'digital-solutions',
      overview: 'Scale your business pipeline with technical SEO audits, Google Page-1 search ranking strategies, targeted Meta/Instagram performance lead campaigns, local Google Maps optimization, and comprehensive conversion rate engineering.',
      services: [
        { title: 'Search Engine Optimization', slug: 'seo', tag: 'Rankings', desc: 'Page-1 organic keyword ranking on Google.' },
        { title: 'Google Ads & PPC', slug: 'digital-marketing', tag: 'High-Intent', desc: 'Search ads targeting customers actively buying.' },
        { title: 'Social Media Lead Ads', slug: 'digital-marketing', tag: 'Meta Ads', desc: 'Targeted Instagram & Facebook lead forms.' },
        { title: 'Local SEO & Google Maps', slug: 'seo', tag: 'Local', desc: 'Rank #1 on local 3-pack search in your city.' },
        { title: 'Content & Copywriting', slug: 'seo', tag: 'Authority', desc: 'Persuasive landing page copy & blog content.' },
        { title: 'Conversion Optimization', slug: 'website-redesign', tag: 'CRO', desc: 'A/B testing, speed tuning & funnel refinement.' }
      ]
    },
    {
      id: 'finance',
      name: 'FINANCE HUB',
      subtitle: 'Capital, Credit & Government Subsidies',
      tagline: 'Transparent business loans, personal financing and MSME schemes.',
      color: 'from-amber-400 to-yellow-500',
      accentColor: 'text-amber-400',
      glow: 'shadow-[0_0_30px_rgba(245,158,11,0.3)]',
      icon: DollarSign,
      page: 'financial-solutions',
      overview: 'Access fast, flexible financing across 30+ leading Indian banks and NBFC partners. We structure collateral-free working capital loans up to ₹1 Crore, personal and medical loans, vehicle & home loans, and official PMEGP/MUDRA subsidy schemes.',
      services: [
        { title: 'Business Loans', slug: 'business-loan', tag: 'Collateral-Free', desc: 'Unsecured working capital up to ₹1 Crore.' },
        { title: 'Personal Loans', slug: 'personal-loan', tag: 'Fast Sanction', desc: 'From 10.5% p.a. for salary & self-employed.' },
        { title: 'Home & Property Loans', slug: 'home-loan', tag: 'Lowest Rates', desc: 'Purchase, construction & Loan Against Property.' },
        { title: 'Car & Commercial Vehicle', slug: 'car-loan', tag: 'Auto', desc: 'Financing for new, used & commercial vehicles.' },
        { title: 'PMEGP Subsidy Loan', slug: 'government-scheme-loans', tag: 'Govt 35%', desc: 'Up to 35% capital subsidy for new projects.' },
        { title: 'MUDRA Scheme (Shishu/Kishor)', slug: 'government-scheme-loans', tag: 'Micro Credit', desc: 'Govt micro loans up to ₹10 Lakhs with zero collateral.' }
      ]
    },
    {
      id: 'protection',
      name: 'PROTECTION HUB',
      subtitle: 'Health, Motor & Commercial Property Shield',
      tagline: 'Comprehensive insurance coverage with cashless claim support.',
      color: 'from-purple-400 to-pink-500',
      accentColor: 'text-purple-400',
      glow: 'shadow-[0_0_30px_rgba(168,85,247,0.3)]',
      icon: ShieldCheck,
      page: 'insurance-solutions',
      overview: 'Protect your family, vehicle, and business against unforeseen risks. We partner with leading IRDAI-registered insurers to offer cashless hospitalization across 10,000+ hospitals, zero-depreciation motor insurance, and commercial property safeguarding.',
      services: [
        { title: 'Health & Medical Insurance', slug: 'health-insurance', tag: 'Cashless', desc: 'Coverage up to ₹1 Crore with no room rent capping.' },
        { title: 'Motor & Bike Insurance', slug: 'motor-insurance', tag: 'Zero Dep', desc: 'Comprehensive damage & 3rd-party liability protection.' },
        { title: 'International Travel Insurance', slug: 'travel-insurance', tag: 'Visa Compliant', desc: 'Global medical, baggage & flight cancellation.' },
        { title: 'Home & Fire Protection', slug: 'home-insurance', tag: 'Property', desc: 'Structure & contents against fire, theft & storm.' },
        { title: 'Shopkeeper & Commercial Insurance', slug: 'home-insurance', tag: 'Business', desc: 'Safeguard retail stock, machinery & public liability.' },
        { title: 'Instant Policy Renewal', slug: '', tag: 'Fast Renewal', desc: 'Instant quote comparison and renewal in 2 minutes.' }
      ]
    },
    {
      id: 'tax',
      name: 'BUSINESS & TAX HUB',
      subtitle: 'GST, ITR & Statutory MCA Compliance',
      tagline: 'Zero-penalty tax filings, company registrations and MSME certifications.',
      color: 'from-blue-400 to-cyan-500',
      accentColor: 'text-blue-400',
      glow: 'shadow-[0_0_30px_rgba(59,130,246,0.3)]',
      icon: FileText,
      page: 'tax-solutions',
      overview: 'Ensure 100% statutory compliance with expert CA-backed filings. We handle GST registrations, monthly GSTR-1/3B filings, maximum refund ITR returns, Udyam MSME government certifications, and MCA Private Limited company incorporation.',
      services: [
        { title: 'GST Registration', slug: 'gst', tag: 'Statutory', desc: 'Official 15-digit GSTIN allotment within 3-7 days.' },
        { title: 'GST Monthly Filings', slug: 'gst', tag: 'Return Filing', desc: 'GSTR-1, GSTR-3B & Input Tax Credit (ITC) reconciliation.' },
        { title: 'Income Tax Return (ITR)', slug: 'itr', tag: 'Tax Refund', desc: 'Salaried, business, and capital gains tax filings.' },
        { title: 'Udyam / MSME Certificate', slug: 'udyam-registration', tag: 'Govt Benefit', desc: 'Instant registration for priority sector benefits.' },
        { title: 'Company Incorporation', slug: 'company-registration', tag: 'MCA Legal', desc: 'Private Limited, LLP, OPC & Partnership deeds.' },
        { title: 'ROC & Annual Compliance', slug: 'company-registration', tag: 'Compliance', desc: 'Annual returns, DIN KYC & director documentation.' }
      ]
    }
  ];

  const activeHub = hubs.find(h => h.id === activeHubId) || hubs[0];

  return (
    <section id="solution-universe" className="py-24 bg-[#050811] relative overflow-hidden">
      
      {/* Background glowing effects */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-transparent rounded-full blur-[160px] pointer-events-none" />

      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-5xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-bold font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Solution Universe</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            Everything Your Business Needs.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              Connected.
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Navigate our 5 major solution hubs. Explore dedicated services, verified deliverables, and high-velocity execution capabilities.
          </p>
        </div>

        {/* Hubs Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {hubs.map(hub => {
            const Icon = hub.icon;
            const isActive = hub.id === activeHubId;

            return (
              <button
                key={hub.id}
                onClick={() => setActiveHubId(hub.id)}
                className={`px-5 py-3.5 rounded-2xl font-bold text-xs sm:text-sm transition-all duration-300 flex items-center gap-2.5 cursor-pointer border ${
                  isActive
                    ? `bg-slate-900 text-white border-cyan-400 ${hub.glow} scale-103`
                    : 'bg-slate-950/80 text-slate-400 hover:text-white border-slate-800 hover:bg-slate-900'
                }`}
              >
                <div className={`p-1.5 rounded-lg ${isActive ? 'bg-cyan-500 text-slate-950' : 'bg-slate-900 text-slate-400'}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <span>{hub.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Hub Showcase Canvas */}
        <div className="rounded-3xl bg-slate-950/90 border border-cyan-500/30 p-6 sm:p-10 backdrop-blur-2xl shadow-2xl space-y-8 animate-in fade-in zoom-in-95 duration-200">
          
          {/* Hub Top Overview */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div className="flex items-start gap-4">
              <div className={`p-4 rounded-2xl bg-gradient-to-r ${activeHub.color} text-slate-950 font-black shadow-xl shrink-0`}>
                <activeHub.icon className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
                  <span>HUB SECTOR // {activeHub.name}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  {activeHub.subtitle}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 font-medium">
                  {activeHub.tagline}
                </p>
              </div>
            </div>

            <button
              onClick={() => onNavigate(activeHub.page)}
              className="self-start lg:self-auto px-6 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-bold text-cyan-300 hover:text-white flex items-center gap-2 transition cursor-pointer"
            >
              <span>Explore All {activeHub.name} Offerings</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Overview text */}
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-4xl">
            {activeHub.overview}
          </p>

          {/* Grid of Dedicated Services */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
              <span>Included Specialized Services ({activeHub.services.length})</span>
              <span className="text-cyan-400">Click any service to view full technical spec</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {activeHub.services.map((srv, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    if (srv.slug) {
                      onNavigate('service-detail', srv.slug);
                    } else {
                      onNavigate(activeHub.page);
                    }
                  }}
                  className="p-4 rounded-2xl bg-slate-900/80 hover:bg-cyan-500/15 border border-slate-800 hover:border-cyan-400/80 text-left transition-all group flex flex-col justify-between space-y-3 cursor-pointer shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold tracking-widest px-2 py-0.5 rounded-full bg-slate-950 text-cyan-300 border border-slate-800">
                      {srv.tag}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition">
                      {srv.title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 leading-snug">
                      {srv.desc}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Hub Footer CTA */}
          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-400">
              Need a custom multi-hub configuration combining digital, capital, and tax?
            </div>
            <button
              onClick={() => onNavigate('contact')}
              className={`w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-gradient-to-r ${activeHub.color} text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:brightness-110 transition cursor-pointer shadow-lg`}
            >
              <span>Request Custom {activeHub.name} Architecture</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
