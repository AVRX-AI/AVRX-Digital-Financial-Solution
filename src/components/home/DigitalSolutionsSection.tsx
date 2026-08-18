import React, { useState } from 'react';
import { 
  Globe, 
  Smartphone, 
  Layers, 
  Megaphone, 
  TrendingUp, 
  Server, 
  Mail, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Layout, 
  Briefcase, 
  User, 
  ShoppingBag, 
  GraduationCap, 
  Building2, 
  Utensils, 
  HeartPulse, 
  Cpu
} from 'lucide-react';

interface DigitalSolutionsProps {
  onNavigate: (page: string, slug?: string) => void;
}

export const DigitalSolutionsSection: React.FC<DigitalSolutionsProps> = ({ onNavigate }) => {
  const [selectedSubtype, setSelectedSubtype] = useState<string>('all');

  // 11 Specific Website Design Sub-Services
  const websiteTypes = [
    { id: 'small-business-website-design', name: 'Small Business', icon: Briefcase, desc: 'High-converting sites for local ventures, shops, and startups.' },
    { id: 'corporate-website-design', name: 'Corporate', icon: Building2, desc: 'Enterprise architecture with high brand authority.' },
    { id: 'portfolio-website-design', name: 'Portfolio', icon: User, desc: 'Showcases for creators, agencies, and independent artists.' },
    { id: 'e-commerce-solutions', name: 'Ecommerce', icon: ShoppingBag, desc: 'Online stores with payment gateways and order management.' },
    { id: 'landing-page-design', name: 'Landing Page', icon: Layout, desc: 'Ultra-fast ad campaign pages designed to maximize lead conversion.' },
    { id: 'personal-website-design', name: 'Personal', icon: User, desc: 'Individual digital presence, executive branding & portfolios.' },
    { id: 'educational-website-design', name: 'Educational', icon: GraduationCap, desc: 'School, college, coaching institutes & online course portals.' },
    { id: 'real-estate-website-design', name: 'Real Estate', icon: Building2, desc: 'Property listings, builder showcases, and inquiry capture.' },
    { id: 'restaurant-website-design', name: 'Restaurant', icon: Utensils, desc: 'Digital menus, food booking, and ambiance showcases.' },
    { id: 'healthcare-website-design', name: 'Healthcare', icon: HeartPulse, desc: 'Clinic, hospital, and doctor appointment booking systems.' },
    { id: 'custom-website-design', name: 'Custom Website', icon: Cpu, desc: 'Bespoke custom-engineered architectures from scratch.' },
  ];

  // Core Digital Services List
  const coreDigitalServices = [
    {
      id: 'website-design',
      title: 'Website Design & Development',
      badge: 'Flagship',
      tagline: '11 Tailored Website Sub-Services',
      desc: 'Engineered for speed, high conversion, and seamless mobile responsiveness across all industries.',
      features: ['Lightning Fast Load Speed', 'SEO Schema Integrated', '100% Mobile Fluid', 'WhatsApp Lead CTAs'],
      icon: Globe,
      color: 'from-cyan-500/20 to-blue-500/20',
      borderColor: 'border-cyan-500/40',
      hasSubtypes: true
    },
    {
      id: 'android-app-development',
      title: 'Android & iOS App Development',
      badge: 'Native & Cross',
      tagline: 'Flutter & React Native Architecture',
      desc: 'Custom mobile apps designed for high engagement, Play Store & App Store deployment, push notifications and payment integration.',
      features: ['Google Play & iOS Store Release', 'Offline Sync & Fast Caching', 'Biometric & UPI Payments', 'Engaging Push Alerts'],
      icon: Smartphone,
      color: 'from-blue-500/20 to-indigo-500/20',
      borderColor: 'border-blue-500/40',
      hasSubtypes: false
    },
    {
      id: 'web-application-development',
      title: 'Web Portal Development',
      badge: 'Enterprise',
      tagline: 'Custom SaaS, Dashboards & ERPs',
      desc: 'Robust full-stack web portals, customer dashboards, admin panels, CRM workflows, and database-driven enterprise systems.',
      features: ['Role-Based User Permissions', 'Real-time Analytical Dashboards', 'REST/GraphQL API Endpoints', 'Bank-Grade Security'],
      icon: Layers,
      color: 'from-indigo-500/20 to-violet-500/20',
      borderColor: 'border-indigo-500/40',
      hasSubtypes: false
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing & Performance Ads',
      badge: 'High ROI',
      tagline: 'Google Ads, Meta & Social Growth',
      desc: 'Targeted performance campaigns on Meta (Facebook/Instagram) and Google Ads engineered to generate real customers and qualified inquiries.',
      features: ['Targeted Lead Generation Ads', 'Social Media Brand Identity', 'Conversion Funnel Audits', 'Transparent Weekly ROI Reports'],
      icon: Megaphone,
      color: 'from-purple-500/20 to-pink-500/20',
      borderColor: 'border-purple-500/40',
      hasSubtypes: false
    },
    {
      id: 'seo-ranking',
      title: 'SEO Ranking & Organic Growth',
      badge: 'Organic Traffic',
      tagline: 'Top Google Rankings & Local Search',
      desc: 'Technical SEO audits, on-page optimization, content strategies, and high-authority link acquisition for sustainable search rankings.',
      features: ['Keyword & Competitor Analysis', 'Core Web Vitals Speed Fixes', 'Google Search Console Sync', 'White-Hat Backlink Strategy'],
      icon: TrendingUp,
      color: 'from-emerald-500/20 to-teal-500/20',
      borderColor: 'border-emerald-500/40',
      hasSubtypes: false
    },
    {
      id: 'website-hosting',
      title: 'Website Hosting & Cloud Infrastructure',
      badge: '99.9% Uptime',
      tagline: 'NVMe SSD Cloud Servers & LiteSpeed',
      desc: 'Ultra-fast NVMe cloud hosting with free SSL, automated daily backups, LiteSpeed web server caching, and 24/7 technical monitoring.',
      features: ['NVMe Ultra-Fast SSD Drives', 'Free Unlimited Wildcard SSL', '1-Click App Deployment', 'Daily Offsite Backups'],
      icon: Server,
      color: 'from-amber-500/20 to-orange-500/20',
      borderColor: 'border-amber-500/40',
      hasSubtypes: false
    },
    {
      id: 'personalized-email',
      title: 'Personalized Business Email',
      badge: 'Professional',
      tagline: 'name@yourcompany.com Setup',
      desc: 'Enterprise custom domain email accounts with anti-spam protection, mobile sync, webmail access, and high inbox deliverability.',
      features: ['Custom Domain Branding', 'Spam & Phishing Shield', 'Outlook & Gmail Sync', '99.9% Deliverability'],
      icon: Mail,
      color: 'from-teal-500/20 to-cyan-500/20',
      borderColor: 'border-teal-500/40',
      hasSubtypes: false
    }
  ];

  return (
    <section id="digital-solutions" className="relative py-24 bg-[#030712] text-white border-t border-slate-800/80 overflow-hidden select-none">
      {/* Subtle background glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800/80 pb-8">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CATEGORY 01</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              DIGITAL SOLUTIONS
            </h2>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              Cutting-edge web engineering, mobile app development, performance marketing, and cloud hosting crafted to scale your digital presence.
            </p>
          </div>

          <button
            onClick={() => onNavigate('digital-solutions')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-cyan-400 hover:text-cyan-300 font-bold text-xs uppercase tracking-wider transition group shrink-0"
          >
            <span>Explore All Digital Services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Highlighted Website Design Sub-Services Showcase Drawer */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/50 border border-cyan-500/30 backdrop-blur-xl shadow-[0_0_30px_rgba(0,240,255,0.05)] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider">
                <Globe className="w-4 h-4" />
                <span>Specialized Website Design Architectures</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                Explore 11 Website Design Specializations
              </h3>
            </div>
            <span className="text-xs text-slate-400 font-mono">
              Click any category to view full specifications
            </span>
          </div>

          {/* 11 Subtypes Pill Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
            {websiteTypes.map((type) => {
              const Icon = type.icon;
              return (
                <button
                  key={type.id}
                  onClick={() => onNavigate('service-detail', type.id)}
                  className="flex flex-col items-start p-3.5 rounded-xl bg-slate-950/80 hover:bg-cyan-500/10 border border-slate-800 hover:border-cyan-500/50 text-left transition-all duration-200 group relative hover:scale-105"
                >
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors mb-2">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-bold text-slate-200 group-hover:text-cyan-300">
                    {type.name}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1 line-clamp-2 leading-tight">
                    {type.desc}
                  </div>
                  <div className="mt-2.5 flex items-center gap-1 text-[10px] font-bold text-cyan-400 group-hover:translate-x-1 transition-transform">
                    <span>Visit Now</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Primary Digital Services Cards Grid (3 Key Services + 4th "See All Services" Card) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreDigitalServices.slice(0, 3).map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className={`flex flex-col justify-between p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#070b14]/95 border ${service.borderColor} shadow-xl hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] transition-all duration-300 group hover:-translate-y-1`}
              >
                <div className="space-y-4">
                  {/* Card Top Header */}
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-cyan-400 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-slate-900 text-cyan-300 border border-slate-800">
                      {service.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
                      {service.title}
                    </h3>
                    <div className="text-xs font-mono text-cyan-400/90 mt-0.5">
                      {service.tagline}
                    </div>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed line-clamp-2">
                      {service.desc}
                    </p>
                  </div>

                  {/* Bullet points */}
                  <div className="space-y-1.5 pt-3 border-t border-slate-800/80">
                    {service.features.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visit Now Action Button */}
                <div className="pt-5 mt-5 border-t border-slate-800/80">
                  <button
                    onClick={() => onNavigate('service-detail', service.id)}
                    className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-950 hover:bg-cyan-500 text-slate-200 hover:text-slate-950 font-bold text-xs transition duration-200 border border-slate-800 hover:border-cyan-400 shadow-md group/btn"
                  >
                    <span>Visit Now</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            );
          })}

          {/* 4th Card: See All Digital Services */}
          <div className="flex flex-col justify-between p-6 rounded-2xl bg-gradient-to-br from-cyan-950/30 via-slate-900/90 to-blue-950/30 border border-cyan-500/50 shadow-[0_0_30px_rgba(0,240,255,0.1)] hover:shadow-[0_0_40px_rgba(0,240,255,0.25)] transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden">
            
            {/* Ambient inner glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 group-hover:scale-110 transition-transform">
                  <Layers className="w-5 h-5 text-cyan-400" />
                </div>
                <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                  15+ Services
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  See All Digital Services
                </h3>
                <div className="text-xs font-mono text-cyan-400/90 mt-0.5">
                  Complete Technology Suite
                </div>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Explore our entire portfolio of high-performance digital engineering and growth solutions.
                </p>
              </div>

              {/* Mini tags of more services */}
              <div className="pt-3 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                {['Performance Marketing', 'SEO Organic Dominance', 'NVMe Cloud Hosting', 'Custom Business Email', 'ERP Portals'].map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-950/80 border border-slate-800 text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Explore Button */}
            <div className="pt-5 mt-5 border-t border-slate-800/80 relative z-10">
              <button
                onClick={() => onNavigate('digital-solutions')}
                className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-xs uppercase tracking-wider transition duration-200 shadow-lg group/btn"
              >
                <span>See All Services</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
