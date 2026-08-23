import React, { useState } from 'react';
import { MagneticCard } from '../common/MagneticCard';
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
  Cpu,
  Bot,
  Zap,
  Shield,
  CreditCard,
  Rocket,
  Search,
  MessageSquare,
  BarChart3,
  Flame,
  Code2,
  Lock,
  Gauge,
  Boxes,
  Truck
} from 'lucide-react';
import { launchSoundEngine } from '../../utils/launchSoundEngine';

interface DigitalSolutionsProps {
  onNavigate: (page: string, slug?: string) => void;
}

export const DigitalSolutionsSection: React.FC<DigitalSolutionsProps> = ({ onNavigate }) => {
  const [selectedSubtype, setSelectedSubtype] = useState<string>('all');
  const [activeFeatureTab, setActiveFeatureTab] = useState<'speed' | 'ai' | 'payments' | 'security' | 'seo'>('speed');

  // 12 Specific Website Design Sub-Services with individual rich colors
  const websiteTypes = [
    { id: 'small-business-website-design', name: 'Small Business', icon: Briefcase, desc: 'High-converting sites for local ventures, shops, and startups.', color: 'from-cyan-500 to-blue-500', glow: 'cyan' },
    { id: 'corporate-website-design', name: 'Corporate', icon: Building2, desc: 'Enterprise architecture with high brand authority.', color: 'from-blue-500 to-indigo-500', glow: 'blue' },
    { id: 'portfolio-website-design', name: 'Portfolio', icon: User, desc: 'Showcases for creators, agencies, and independent artists.', color: 'from-purple-500 to-pink-500', glow: 'purple' },
    { id: 'e-commerce-solutions', name: 'Ecommerce', icon: ShoppingBag, desc: 'Online stores with payment gateways and order management.', color: 'from-emerald-500 to-teal-500', glow: 'emerald' },
    { id: 'landing-page-design', name: 'Landing Page', icon: Layout, desc: 'Ultra-fast ad campaign pages designed to maximize lead conversion.', color: 'from-amber-500 to-orange-500', glow: 'amber' },
    { id: 'personal-website-design', name: 'Personal', icon: User, desc: 'Individual digital presence, executive branding & portfolios.', color: 'from-rose-500 to-pink-500', glow: 'rose' },
    { id: 'educational-website-design', name: 'Educational', icon: GraduationCap, desc: 'School, college, coaching institutes & online course portals.', color: 'from-indigo-500 to-purple-500', glow: 'indigo' },
    { id: 'real-estate-website-design', name: 'Real Estate', icon: Building2, desc: 'Property listings, builder showcases, and inquiry capture.', color: 'from-teal-500 to-emerald-500', glow: 'teal' },
    { id: 'restaurant-website-design', name: 'Restaurant', icon: Utensils, desc: 'Digital menus, food booking, and ambiance showcases.', color: 'from-orange-500 to-red-500', glow: 'orange' },
    { id: 'healthcare-website-design', name: 'Healthcare', icon: HeartPulse, desc: 'Clinic, hospital, and doctor appointment booking systems.', color: 'from-red-500 to-rose-500', glow: 'red' },
    { id: 'b2b-portal-development', name: 'B2B & Wholesale', icon: Boxes, desc: 'Distributor portals, bulk quote engines, and dealer networks.', color: 'from-yellow-500 to-amber-500', glow: 'yellow' },
    { id: 'custom-website-design', name: 'Custom Website', icon: Cpu, desc: 'Bespoke custom-engineered architectures from scratch.', color: 'from-fuchsia-500 to-cyan-500', glow: 'fuchsia' },
  ];

  // Core Digital Services List with vibrant themes & top-tier feature highlights (8 Comprehensive Solutions)
  const coreDigitalServices = [
    {
      id: 'website-design',
      title: 'Website Design & Development',
      badge: 'Flagship Speed',
      badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-400/40',
      tagline: '12 Tailored Architectures • React & Next.js',
      desc: 'Engineered for sub-second page loads, 98+ Google Lighthouse scores, high conversion rates, and seamless mobile responsiveness.',
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      features: ['Sub-Second Load Times (98+ Core Web Vitals)', 'Structured JSON-LD SEO Schema', 'Mobile-First Fluid Responsive UI', '1-Click WhatsApp Lead Ingestion'],
      techStack: ['Next.js 15', 'React 19', 'Tailwind CSS', 'Vite', 'TypeScript'],
      icon: Globe,
      accentColor: 'from-cyan-500 to-blue-600',
      cardBg: 'from-cyan-950/30 via-slate-900/90 to-slate-950',
      borderColor: 'border-cyan-500/40 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(6,182,212,0.3)]',
      glowColor: 'rgba(6,182,212,0.5)',
      hasSubtypes: true
    },
    {
      id: 'e-commerce-solutions',
      title: 'E-Commerce Solution',
      badge: 'High Converting',
      badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/40',
      tagline: 'Full Online Store • 0% Commissions',
      desc: 'Full-featured online store platforms with dynamic product catalogs, instant Razorpay/UPI/Cards checkout, automated WhatsApp tracking, and zero commission.',
      imageUrl: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1200&q=80',
      features: ['Dynamic Product Catalog & Variant Selectors', 'Multi-Gateway UPI QR, Cards & NetBanking', 'Automated Courier Tracking & GST Invoices', 'Coupon Codes & Abandoned Cart Recovery'],
      techStack: ['Next.js', 'Razorpay', 'Shiprocket', 'PostgreSQL', 'Tailwind'],
      icon: ShoppingBag,
      accentColor: 'from-emerald-500 to-teal-500',
      cardBg: 'from-emerald-950/30 via-slate-900/90 to-slate-950',
      borderColor: 'border-emerald-500/40 hover:border-emerald-400 hover:shadow-[0_0_35px_rgba(16,185,129,0.3)]',
      glowColor: 'rgba(16,185,129,0.5)',
      hasSubtypes: false
    },
    {
      id: 'android-app-development',
      title: 'Android & iOS Mobile Apps',
      badge: 'Cross & Native',
      badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-400/40',
      tagline: 'Flutter & React Native Architecture',
      desc: 'High-performance mobile applications with offline synchronization, biometric security, push notifications, and Play Store / App Store release.',
      imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
      features: ['Google Play & Apple App Store Publishing', 'Offline First Sync & Edge Caching', 'Biometric Face/Touch ID & UPI Pay', 'FCM High-Engagement Push Notifications'],
      techStack: ['Flutter', 'React Native', 'Kotlin', 'Swift', 'Firebase'],
      icon: Smartphone,
      accentColor: 'from-indigo-500 to-purple-600',
      cardBg: 'from-indigo-950/30 via-slate-900/90 to-slate-950',
      borderColor: 'border-indigo-500/40 hover:border-indigo-400 hover:shadow-[0_0_35px_rgba(99,102,241,0.3)]',
      glowColor: 'rgba(99,102,241,0.5)',
      hasSubtypes: false
    },
    {
      id: 'web-application-development',
      title: 'Web Portals & Custom SaaS',
      badge: 'Enterprise Grade',
      badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-400/40',
      tagline: 'Custom SaaS, Dashboards & ERPs',
      desc: 'Scalable multi-tenant web portals, administrative dashboards, CRM workflows, database-driven systems, and secure REST/GraphQL APIs.',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      features: ['Granular Role-Based Access Control (RBAC)', 'Real-time Analytical Charts & Reports', 'Secure REST & GraphQL Microservices', 'Automated GST & PDF Invoice Generators'],
      techStack: ['Node.js', 'Python', 'PostgreSQL', 'Redis', 'Docker'],
      icon: Layers,
      accentColor: 'from-purple-500 to-pink-600',
      cardBg: 'from-purple-950/30 via-slate-900/90 to-slate-950',
      borderColor: 'border-purple-500/40 hover:border-purple-400 hover:shadow-[0_0_35px_rgba(168,85,247,0.3)]',
      glowColor: 'rgba(168,85,247,0.5)',
      hasSubtypes: false
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing & Ads Growth',
      badge: 'High ROI Growth',
      badgeColor: 'bg-rose-500/20 text-rose-300 border-rose-400/40',
      tagline: 'Google Ads, Meta & Conversion Funnels',
      desc: 'Data-driven performance campaigns on Meta (Facebook/Instagram) and Google Ads engineered to acquire verified inquiries and high sales conversions.',
      imageUrl: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=800&q=80',
      features: ['High-Conversion Lead Generation Ads', 'Dynamic Retargeting & Custom Audiences', 'A/B Split-Testing Landing Pages', 'Transparent Weekly ROI & ROAS Dashboard'],
      techStack: ['Google Ads', 'Meta Pixel', 'Looker Studio', 'GA4 Analytics'],
      icon: Megaphone,
      accentColor: 'from-rose-500 to-orange-500',
      cardBg: 'from-rose-950/30 via-slate-900/90 to-slate-950',
      borderColor: 'border-rose-500/40 hover:border-rose-400 hover:shadow-[0_0_35px_rgba(244,63,94,0.3)]',
      glowColor: 'rgba(244,63,94,0.5)',
      hasSubtypes: false
    },
    {
      id: 'seo-ranking',
      title: 'SEO Ranking & Search Dominance',
      badge: '#1 Google Rank',
      badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/40',
      tagline: 'Top Google Rankings & Local Search',
      desc: 'Technical SEO audits, on-page optimization, content strategy, and high-authority link acquisition for sustainable organic traffic growth.',
      imageUrl: 'https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?auto=format&fit=crop&w=800&q=80',
      features: ['Competitor & High-Intent Keyword Mining', 'Google Map 3-Pack Local Optimization', 'Speed & Core Web Vitals Fixes', 'White-Hat Backlink & PR Strategy'],
      techStack: ['Search Console', 'Ahrefs', 'Semrush', 'Schema.org'],
      icon: TrendingUp,
      accentColor: 'from-emerald-500 to-teal-500',
      cardBg: 'from-emerald-950/30 via-slate-900/90 to-slate-950',
      borderColor: 'border-emerald-500/40 hover:border-emerald-400 hover:shadow-[0_0_35px_rgba(16,185,129,0.3)]',
      glowColor: 'rgba(16,185,129,0.5)',
      hasSubtypes: false
    },
    {
      id: 'website-hosting',
      title: 'NVMe Cloud Hosting & CDN',
      badge: '99.99% Uptime',
      badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-400/40',
      tagline: 'NVMe SSD Servers & LiteSpeed Cache',
      desc: 'Enterprise-tier NVMe cloud hosting with free wildcard SSL, automated daily backups, LiteSpeed web server caching, and 24/7 technical monitoring.',
      imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
      features: ['PCI-Compliant NVMe Ultra-Fast SSDs', 'Free Unlimited Lifetime SSL Certificate', 'Global Edge CDN & Web Application Firewall (WAF)', 'Automated Off-Site Daily Cloud Backups'],
      techStack: ['LiteSpeed', 'Cloudflare CDN', 'NVMe Gen4', 'Linux Cloud'],
      icon: Server,
      accentColor: 'from-amber-500 to-orange-500',
      cardBg: 'from-amber-950/30 via-slate-900/90 to-slate-950',
      borderColor: 'border-amber-500/40 hover:border-amber-400 hover:shadow-[0_0_35px_rgba(245,158,11,0.3)]',
      glowColor: 'rgba(245,158,11,0.5)',
      hasSubtypes: false
    },
    {
      id: 'personalized-email',
      title: 'Personalized Business Email',
      badge: 'Zero Spam',
      badgeColor: 'bg-teal-500/20 text-teal-300 border-teal-400/40',
      tagline: 'name@yourcompany.com Setup',
      desc: 'Enterprise custom domain email accounts with AI spam filtering, SPF/DKIM/DMARC authentication, and 99.9% inbox deliverability.',
      imageUrl: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&w=800&q=80',
      features: ['Custom Domain Branding (CEO@Company.com)', 'SPF, DKIM & DMARC 100% Deliverability', 'Outlook, Apple Mail & Gmail Seamless Sync', 'Advanced AI Phishing & Anti-Spam Guard'],
      techStack: ['Google Workspace', 'Microsoft 365', 'Custom IMAP/SMTP'],
      icon: Mail,
      accentColor: 'from-teal-500 to-cyan-500',
      cardBg: 'from-teal-950/30 via-slate-900/90 to-slate-950',
      borderColor: 'border-teal-500/40 hover:border-teal-400 hover:shadow-[0_0_35px_rgba(20,184,166,0.3)]',
      glowColor: 'rgba(20,184,166,0.5)',
      hasSubtypes: false
    }
  ];

  // Interactive Digital Features Top Matrix
  const topFeaturesMatrix = [
    {
      key: 'speed',
      title: 'Sub-Second Loading & Core Web Vitals',
      icon: Gauge,
      badge: '98+ Lighthouse Score',
      color: 'from-cyan-400 to-blue-500',
      border: 'border-cyan-400',
      stat: '0.42s',
      statLabel: 'Average First Contentful Paint',
      desc: 'Every website engineered by AVRX uses modern asset minification, next-gen WebP/AVIF images, and edge caching to load instantly across 4G and 5G networks.'
    },
    {
      key: 'ai',
      title: 'AI Smart Chatbots & In-Browser Tools',
      icon: Bot,
      badge: '24/7 Auto Conversion',
      color: 'from-purple-400 to-pink-500',
      border: 'border-purple-400',
      stat: '3.4x',
      statLabel: 'Lead Conversion Lift',
      desc: 'Integrate conversational AI assistants that understand client questions, recommend solutions, capture phone numbers, and route leads directly to WhatsApp.'
    },
    {
      key: 'payments',
      title: '1-Click Instant UPI & Cards Gateway',
      icon: CreditCard,
      badge: 'Zero Friction',
      color: 'from-emerald-400 to-teal-500',
      border: 'border-emerald-400',
      stat: '100%',
      statLabel: 'Instant Auto Settlement Support',
      desc: 'Seamlessly accept payments via GPay, PhonePe, Paytm, RuPay, Credit/Debit Cards, and Net Banking with Razorpay, Cashfree, and Stripe integrations.'
    },
    {
      key: 'security',
      title: 'Bank-Grade Security & Anti-DDoS',
      icon: Shield,
      badge: 'TLS 1.3 Encryption',
      color: 'from-amber-400 to-orange-500',
      border: 'border-amber-400',
      stat: '99.99%',
      statLabel: 'Uptime & Defense Rate',
      desc: 'Multi-layer cloud protection against brute-force attacks, SQL injection, cross-site scripting (XSS), and malicious bots with automated daily offsite snapshots.'
    },
    {
      key: 'seo',
      title: 'Autonomous Local SEO & Rich Snippets',
      icon: Search,
      badge: 'Google 3-Pack Ready',
      color: 'from-rose-400 to-pink-500',
      border: 'border-rose-400',
      stat: '#1 Rank',
      statLabel: 'Target City Search Authority',
      desc: 'Automated JSON-LD schema markup, breadcrumb navigation, meta tags, and Google Search Console sitemap indexing for guaranteed high visibility.'
    }
  ];

  return (
    <section id="digital-solutions" className="relative py-28 bg-[#030712] text-white border-t border-slate-800/80 overflow-hidden select-none">
      
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[160px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute top-1/2 right-10 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[160px] animate-pulse" style={{ animationDuration: '10s' }} />
        <div className="absolute bottom-10 left-1/3 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[160px]" />
      </div>

      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10 space-y-16">
        
        {/* Section Header with Multi-Color Aura */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-slate-800/80 pb-10">
          <div className="space-y-4 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(0,240,255,0.2)]">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
              <span>CATEGORY 01</span>
              <span className="text-slate-600">•</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 font-black">
                NEXT-GEN DIGITAL ENGINEERING
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              DIGITAL SOLUTIONS & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">HIGH-PERFORMANCE TECH</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-xl leading-relaxed font-normal max-w-3xl">
              From bespoke conversion-focused websites and native mobile apps to enterprise web portals, performance ad campaigns, and cloud hosting — engineered with modern 2026 tech standards.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => {
                launchSoundEngine.playClickTick();
                onNavigate('digital-solutions');
              }}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:scale-105 active:scale-95 cursor-pointer group"
            >
              <span>Explore All Digital Services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* 🌟 TOP DIGITAL FEATURES INTERACTIVE PLAYGROUND 🌟 */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-slate-900/95 via-[#080e22] to-slate-950/95 border-2 border-cyan-500/40 shadow-[0_0_50px_rgba(0,240,255,0.15)] backdrop-blur-2xl space-y-8 relative overflow-hidden">
          
          {/* Top subtle light streak */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF9933] via-cyan-400 to-[#138808]" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider">
                <Rocket className="w-4 h-4 text-cyan-400 animate-pulse" />
                <span>Next-Gen Built-In Capabilities</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Top Features Included with Every AVRX Digital Project
              </h3>
            </div>
            <span className="text-xs text-slate-400 font-mono bg-slate-950/80 px-3 py-1.5 rounded-xl border border-slate-800">
              ⚡ Zero extra charges for core infrastructure
            </span>
          </div>

          {/* Interactive Feature Switcher Buttons */}
          <div className="flex flex-wrap gap-2.5">
            {topFeaturesMatrix.map((item) => {
              const Icon = item.icon;
              const isActive = activeFeatureTab === item.key;
              return (
                <button
                  key={item.key}
                  onClick={() => {
                    setActiveFeatureTab(item.key as typeof activeFeatureTab);
                    launchSoundEngine.playClickTick();
                  }}
                  onMouseEnter={() => launchSoundEngine.playHoverChirp()}
                  className={`flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer border backdrop-blur-md ${
                    isActive
                      ? `bg-gradient-to-r ${item.color} text-slate-950 ${item.border} shadow-[0_0_25px_rgba(0,240,255,0.4)] scale-105 font-black`
                      : 'bg-slate-950/70 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white hover:bg-slate-900/90'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-slate-950' : 'text-cyan-400'}`} />
                  <span>{item.title.split('&')[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Active Feature Detail Showcase Card */}
          {(() => {
            const currentTab = topFeaturesMatrix.find(t => t.key === activeFeatureTab) || topFeaturesMatrix[0];
            const TabIcon = currentTab.icon;
            return (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 rounded-2xl bg-slate-950/90 border border-cyan-500/30 backdrop-blur-xl animate-fadeIn">
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="p-3 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-slate-950 shadow-lg">
                      <TabIcon className="w-6 h-6" />
                    </span>
                    <div>
                      <h4 className="text-xl sm:text-2xl font-black text-white">
                        {currentTab.title}
                      </h4>
                      <span className="text-xs font-mono font-bold text-cyan-400">
                        {currentTab.badge}
                      </span>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {currentTab.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {['100% Clean Code', 'Multi-Device Synchronized', '24/7 Cloud Health Guard', 'Direct CA & Tech Access'].map((t, i) => (
                      <span key={i} className="flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full bg-slate-900 text-slate-200 border border-slate-800">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{t}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-4 p-6 rounded-2xl bg-slate-900/90 border border-slate-800 text-center space-y-2 relative overflow-hidden">
                  <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 font-mono">
                    {currentTab.stat}
                  </div>
                  <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    {currentTab.statLabel}
                  </div>
                  <div className="text-[11px] text-slate-400 pt-2 border-t border-slate-800/80">
                    Tested across 500+ live deployed applications
                  </div>
                </div>
              </div>
            );
          })()}

        </div>

        {/* Highlighted Website Design Sub-Services Showcase Drawer */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/60 border border-cyan-500/30 backdrop-blur-xl shadow-[0_0_30px_rgba(0,240,255,0.05)] space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider">
                <Globe className="w-4 h-4" />
                <span>Specialized Industry Architectures</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                Explore 12 Tailored Website Design Categories
              </h3>
            </div>
            <span className="text-xs text-slate-400 font-mono bg-slate-950/80 px-3 py-1.5 rounded-xl border border-slate-800">
              Click any category to open specifications
            </span>
          </div>

          {/* 12 Subtypes Pill Grid with Vibrant Hover Effects */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3.5">
            {websiteTypes.map((type) => {
              const Icon = type.icon;
              return (
                <MagneticCard
                  key={type.id}
                  glowColor={type.glow}
                  enableTilt={true}
                  tiltStrength={4}
                  spotlightRadius={280}
                  spotlightOpacity={0.25}
                  soundOnHover={true}
                  onClick={() => {
                    launchSoundEngine.playClickTick();
                    onNavigate('service-detail', type.id);
                  }}
                  className="flex flex-col items-start p-4 rounded-2xl bg-slate-950/90 hover:bg-slate-900 border border-slate-800 hover:border-cyan-400/80 text-left cursor-pointer"
                >
                  <div className={`p-2.5 rounded-xl bg-gradient-to-br ${type.color} text-slate-950 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-transform mb-3`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-black text-slate-200 group-hover:text-cyan-300 transition-colors">
                    {type.name}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1 line-clamp-2 leading-relaxed font-normal">
                    {type.desc}
                  </div>
                  <div className="mt-3 flex items-center gap-1 text-[11px] font-bold text-cyan-400 group-hover:translate-x-1 transition-transform">
                    <span>Explore</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </MagneticCard>
              );
            })}
          </div>
        </div>

        {/* Primary Digital Services Cards Grid (Rich Neon Borders & Tech Stack Chips) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {coreDigitalServices.map((service) => {
            const IconComponent = service.icon;
            return (
              <MagneticCard
                key={service.id}
                glowColor="cyan"
                enableTilt={true}
                tiltStrength={3}
                spotlightRadius={400}
                spotlightOpacity={0.25}
                soundOnHover={true}
                className={`flex flex-col justify-between p-6 rounded-3xl bg-gradient-to-b ${service.cardBg} border ${service.borderColor} shadow-xl backdrop-blur-xl`}
              >
                {/* Top Subtle Light Accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.accentColor} opacity-80`} />

                <div className="space-y-4">
                  {/* Thumbnail Image Header */}
                  {service.imageUrl && (
                    <div className="relative h-40 w-full rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 group-hover:border-cyan-500/40 transition-colors">
                      <img
                        src={service.imageUrl}
                        alt={service.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                      
                      {/* Floating Badge & Icon */}
                      <div className="absolute top-2.5 left-2.5 p-2 rounded-xl bg-slate-950/90 backdrop-blur-md border border-slate-700/80 text-cyan-400">
                        <IconComponent className="w-4 h-4" />
                      </div>

                      <span className={`absolute top-2.5 right-2.5 text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border backdrop-blur-md ${service.badgeColor}`}>
                        {service.badge}
                      </span>
                    </div>
                  )}

                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
                      {service.title}
                    </h3>
                    <div className="text-xs font-mono text-cyan-400 mt-1 font-semibold">
                      {service.tagline}
                    </div>
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed line-clamp-2 font-normal">
                      {service.desc}
                    </p>
                  </div>

                  {/* Bullet points */}
                  <div className="space-y-1.5 pt-3 border-t border-slate-800/80">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="pt-3 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                    {service.techStack.map((tech, tIdx) => (
                      <span key={tIdx} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-950/90 border border-slate-800 text-slate-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Visit Now Action Button */}
                <div className="pt-5 mt-5 border-t border-slate-800/80">
                  <button
                    onClick={() => {
                      launchSoundEngine.playClickTick();
                      onNavigate('service-detail', service.id);
                    }}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-slate-950 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 text-slate-200 hover:text-slate-950 font-bold text-xs uppercase tracking-wider transition-all duration-300 border border-slate-800 hover:border-cyan-400 shadow-md group/btn cursor-pointer"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1.5 transition-transform" />
                  </button>
                </div>

              </MagneticCard>
            );
          })}
        </div>

      </div>
    </section>
  );
};
