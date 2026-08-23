import React, { useState } from 'react';
import { MagneticCard } from '../components/common/MagneticCard';
import { DIGITAL_SERVICES } from '../data/servicesData';
import { ServiceItem } from '../types';
import { SEO } from '../components/common/SEO';
import { PartnersSlider } from '../components/common/PartnersSlider';
import { renderServiceIcon } from '../utils/iconMap';
import { 
  Code2, 
  Layout, 
  Smartphone, 
  Megaphone, 
  TrendingUp, 
  Layers, 
  Check, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  PhoneCall, 
  ChevronDown, 
  ChevronRight,
  ExternalLink,
  Zap,
  Globe,
  Database,
  Cpu,
  Star,
  CheckCircle2,
  Lock
} from 'lucide-react';

interface DigitalSolutionsPageProps {
  onNavigate: (page: string, slug?: string) => void;
}

export const DigitalSolutionsPage: React.FC<DigitalSolutionsPageProps> = ({ onNavigate }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(DIGITAL_SERVICES[0]);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // Six core digital service categories specified by master prompt
  const digitalCategoryCards = [
    {
      id: 'website-design',
      slug: 'website-design',
      title: 'Website Design & Development',
      badge: 'Popular',
      icon: Layout,
      bgImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      shortDesc: 'High-speed, conversion-focused websites engineered for businesses, corporate brands, and e-commerce stores.',
      deliverables: [
        'Static Onepage Websites (₹4,999)',
        'Business & Corporate Websites',
        'E-commerce & Online Stores',
        'High-Conversion Landing Pages',
        'Mobile Responsive UI/UX',
        'SEO-Ready Architecture & Lead Forms'
      ],
      price: 'Starting from ₹4,999'
    },
    {
      id: 'app-development',
      slug: 'android-app-development',
      title: 'App Development (Android & iOS)',
      badge: 'High Impact',
      icon: Smartphone,
      bgImage: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80',
      shortDesc: 'Native & cross-platform mobile apps engineered for fluid performance, security, and Play Store / App Store release.',
      deliverables: [
        'Android & iOS Mobile Applications',
        'Customer-Facing & Business Apps',
        'REST API & Cloud Database Integration',
        'Push Notifications & User Engagement Hooks',
        'Biometric Auth & Secure Gateways',
        'Full Admin Control Console'
      ],
      price: 'Starting from ₹24,999'
    },
    {
      id: 'web-portal-development',
      slug: 'web-portal-development',
      title: 'Web Portal Development',
      badge: 'Enterprise',
      icon: Layers,
      bgImage: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80',
      shortDesc: 'Enterprise web portals for customer self-service, employee management, and vendor networks.',
      deliverables: [
        'Customer & Client Self-Service Portals',
        'Employee Attendance & HRMS Systems',
        'Business Management & Vendor Portals',
        'Interactive Analytics & Real-Time Dashboards',
        'Role-Based Access Control (RBAC)',
        'Enterprise Relational Database Integration'
      ],
      price: 'Starting from ₹34,999'
    },
    {
      id: 'web-application-development',
      slug: 'web-application-development',
      title: 'Web Application Development',
      badge: 'Full-Stack',
      icon: Code2,
      bgImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
      shortDesc: 'Bespoke SaaS platforms, custom business automation, and robust web applications with TypeScript and Node.js.',
      deliverables: [
        'Custom Web Applications & SaaS MVPs',
        'Automated Business Workflows',
        'Custom REST & GraphQL APIs',
        'Secure 2FA & Multi-Tenant Authentication',
        'Real-Time Webhooks & Cloud Sync',
        'Interactive Super-Admin Dashboards'
      ],
      price: 'Starting from ₹29,999'
    },
    {
      id: 'digital-marketing',
      slug: 'digital-marketing',
      title: 'Digital Marketing & Growth',
      badge: 'Lead Gen',
      icon: Megaphone,
      bgImage: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80',
      shortDesc: 'Targeted paid advertising and social media campaigns engineered to generate qualified business inquiries.',
      deliverables: [
        'Social Media Marketing & Branding',
        'Google Search & Display Ads',
        'Meta (Facebook & Instagram) Lead Ads',
        'B2B Content Marketing & Strategy',
        'High-Intent Lead Generation Campaigns',
        'Transparent Weekly ROI Reporting'
      ],
      price: 'Starting from ₹9,999/mo'
    },
    {
      id: 'seo-ranking',
      slug: 'seo-ranking',
      title: 'Search Engine Optimization (SEO)',
      badge: 'Organic',
      icon: TrendingUp,
      bgImage: 'https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?auto=format&fit=crop&w=800&q=80',
      shortDesc: 'Rank higher on Google search results for valuable high-intent keywords to secure organic inbound customers.',
      deliverables: [
        'In-Depth Technical SEO & Core Web Vitals',
        'On-Page Optimization & Schema Tagging',
        'Local SEO & Google Business Profile Boost',
        'Strategic Keyword Discovery & Mapping',
        'Google Search Console & GA4 Integration',
        'Ethical High-Authority Backlink Acquisition'
      ],
      price: 'Starting from ₹14,999/mo'
    }
  ];

  const whyChooseReasons = [
    {
      title: 'Bespoke Engineering (No Bloated CMS)',
      desc: 'We build ultra-fast, modern web applications and mobile apps using clean TypeScript and modern frameworks—guaranteeing sub-second page loads.'
    },
    {
      title: 'Lead & Conversion Centric UI/UX',
      desc: 'Every layout, button placement, and visual hierarchy is mathematically tested to turn casual visitors into paying leads and customers.'
    },
    {
      title: 'Full Intellectual Property Ownership',
      desc: 'You receive complete source code ownership, database access, and documentation without vendor lock-ins or recurring licensing fees.'
    },
    {
      title: 'Enterprise Security & SSL Architecture',
      desc: 'Built-in protection against cross-site scripting, SQL injections, and spam, backed by automatic SSL certificate encryption.'
    },
    {
      title: 'End-to-End Digital Ecosystem',
      desc: 'From initial domain registration to hosting, mobile apps, digital marketing, and ongoing maintenance—all managed under one roof.'
    },
    {
      title: 'Dedicated Account Architect',
      desc: 'Direct communication with dedicated software engineers and growth strategists, ensuring rapid turnaround and continuous support.'
    }
  ];

  const digitalProcessSteps = [
    { number: '01', title: 'Consultation & Discovery', desc: 'We analyze your business model, target audience, competitors, and functional specifications.' },
    { number: '02', title: 'Architecture & UI/UX', desc: 'Crafting responsive wireframes, design systems, and database blueprints for approval.' },
    { number: '03', title: 'Engineering & Coding', desc: 'Writing clean, modular code with frontend animations, robust APIs, and secure authentication.' },
    { number: '04', title: 'Testing & Optimization', desc: 'Rigorous cross-device quality assurance, speed benchmarking, and security scanning.' },
    { number: '05', title: 'Deployment & Launch', desc: 'Zero-downtime deployment to high-speed cloud servers and live Play Store/App Store submission.' },
    { number: '06', title: 'Continuous Growth & SLA', desc: 'Ongoing technical maintenance, analytics tracking, and performance marketing expansion.' }
  ];

  const digitalFaqs = [
    {
      q: 'How long does it take to develop a custom business website or web portal?',
      a: 'Standard business websites and landing pages are typically delivered in 3 to 7 working days. Complex custom web applications, e-commerce platforms, or multi-role portals take between 10 to 20 working days depending on custom feature requirements.'
    },
    {
      q: 'Can you redesign our existing outdated website without losing our Google rankings?',
      a: 'Yes. We perform a complete URL and content mapping audit with 301 redirects, preserving your existing organic search rankings while drastically modernizing your visual identity, mobile responsiveness, and page load speed.'
    },
    {
      q: 'Will my website and mobile app work smoothly on all devices?',
      a: 'Absolutely. Every digital solution built by AVRX is developed mobile-first and tested rigorously across iOS, Android smartphones, tablets, laptops, and ultra-wide 4K desktop screens.'
    },
    {
      q: 'Do you provide maintenance and security updates after the project is live?',
      a: 'Yes. AVRX provides ongoing maintenance packages covering security patches, daily cloud backups, server monitoring, content updates, SSL renewals, and dedicated developer support.'
    },
    {
      q: 'Can you integrate WhatsApp chat, payment gateways, and custom CRM forms?',
      a: 'Yes. We seamlessly integrate Razorpay, Stripe, Cashfree, UPI QR codes, automated WhatsApp lead triggers, Google Sheets, custom CRM webhooks, and instant email/SMS alerts.'
    },
    {
      q: 'Do I get 100% source code ownership and database access?',
      a: 'Yes, 100%. Upon project completion and final handover, all intellectual property, source code repositories, domain access, and cloud credentials belong fully to you with zero vendor lock-in.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#050811] text-white pt-24 pb-20 selection:bg-cyan-500 selection:text-slate-950">
      <SEO
        title="Digital Solutions | Website, App, SEO & Digital Marketing | AVRX"
        description="Build. Scale. Transform. AVRX delivers modern digital solutions including custom website design, mobile apps, web portals, SaaS applications, and SEO growth."
      />

      {/* Main Container - Stretched Widescreen Layout */}
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="pt-4 pb-6 flex items-center gap-2 text-xs text-slate-400">
          <button 
            onClick={() => onNavigate('home')}
            className="hover:text-cyan-400 transition-colors"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-cyan-300 font-semibold">Digital Solutions</span>
        </nav>

        {/* 1. Animated Page Hero */}
        <div className="text-center max-w-4xl mx-auto my-8 space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(0,240,255,0.15)]">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>DIGITAL ENGINEERING & GROWTH ECOSYSTEM</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight">
            Build. Scale. <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400">Transform.</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-lg leading-relaxed max-w-3xl mx-auto">
            AVRX delivers high-performance digital solutions for businesses, fast-growing startups, professionals, and organizations. From custom websites and native mobile apps to enterprise portals and organic SEO growth.
          </p>

          {/* Core Visual Capabilities Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-3">
            {['Website Design', 'Mobile App', 'Cloud Systems', 'Digital Marketing', 'SEO Growth', 'Web Portals'].map((badge, idx) => (
              <span 
                key={idx}
                className="px-3 py-1 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 font-mono flex items-center gap-1.5"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* 2. Partners Slider Strip */}
        <div className="my-12">
          <PartnersSlider 
            title="Trusted by Fast-Growing Businesses & Startups"
            badgeText="PROVEN INFRASTRUCTURE"
            description="Engineering software and growth channels on enterprise cloud and security frameworks."
            variant="compact"
          />
        </div>

        {/* 3. Main Digital Services Grid — 6 Dedicated Pillars with Learn More CTAs */}
        <div className="my-16 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5 text-blue-400" />
              <span>CORE DIGITAL OFFERINGS</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white">
              Engineered for Modern Business Impact
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Select any solution below to explore in-depth specifications, features, and pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {digitalCategoryCards.map(card => {
              const Icon = card.icon;
              return (
                <MagneticCard
                  key={card.id}
                  glowColor="cyan"
                  enableTilt={true}
                  tiltStrength={3.5}
                  spotlightRadius={420}
                  spotlightOpacity={0.25}
                  soundOnHover={true}
                  className="rounded-3xl bg-slate-900/80 border border-slate-800/90 hover:border-cyan-500/50 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group"
                >
                  {/* Subtle Background Service Image (Shows faintly in background as requested) */}
                  {card.bgImage && (
                    <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none z-0">
                      <img
                        src={card.bgImage}
                        alt={card.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover opacity-[0.07] group-hover:opacity-[0.15] transition-all duration-700 mix-blend-luminosity scale-105 group-hover:scale-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />
                    </div>
                  )}

                  {/* Subtle Corner Glow */}
                  <div className="absolute top-0 right-0 w-36 h-36 bg-cyan-500/[0.04] rounded-full blur-2xl group-hover:bg-cyan-500/[0.1] transition-all z-0" />

                  <div className="space-y-5 relative z-10">
                    {/* Icon & Badge Header */}
                    <div className="flex items-center justify-between">
                      <div className="p-3.5 rounded-2xl bg-slate-950/90 backdrop-blur-sm border border-slate-800 text-cyan-400 group-hover:border-cyan-500/40 group-hover:text-cyan-300 transition-colors shadow-inner">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 text-[11px] font-mono font-bold">
                        {card.badge}
                      </span>
                    </div>

                    {/* Title & Short Description */}
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-cyan-300 transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                        {card.shortDesc}
                      </p>
                    </div>

                    {/* Deliverables Checklist */}
                    <div className="space-y-2 pt-2 border-t border-slate-800/80">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                        Included Deliverables:
                      </div>
                      {card.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price & Action Buttons */}
                  <div className="pt-6 mt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 relative z-10">
                    <div>
                      <div className="text-[10px] uppercase font-mono text-slate-500">Starting At</div>
                      <div className="text-sm font-black text-cyan-400 font-mono">{card.price}</div>
                    </div>

                    <button
                      onClick={() => onNavigate('service-detail', card.slug)}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500 border border-cyan-500/30 hover:border-cyan-400 text-cyan-300 hover:text-slate-950 font-bold text-xs transition flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
                    >
                      <span>Learn More / Get Started</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </MagneticCard>
              );
            })}
          </div>
        </div>

        {/* 4. Interactive Live Service Explorer */}
        <div className="my-20 bg-gradient-to-br from-[#060a17] via-[#040816] to-[#02050f] border border-cyan-500/30 rounded-3xl p-6 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] relative overflow-hidden">
          
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase">
              <Zap className="w-3.5 h-3.5 text-cyan-400" />
              <span>INTERACTIVE SOLUTION SPECIFICATION</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-black text-white">
              Explore Detailed Service Blueprint
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Click through our modular digital stack to inspect features, deliverables, and technical execution.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Nav Menu */}
            <div className="lg:col-span-4 space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 px-3 mb-2">
                Available Service Modules
              </div>
              {DIGITAL_SERVICES.map(svc => (
                <button
                  key={svc.id}
                  onClick={() => setSelectedService(svc)}
                  className={`w-full text-left p-3.5 rounded-2xl border transition flex items-center justify-between gap-3 ${
                    selectedService?.id === svc.id
                      ? 'bg-cyan-500/20 border-cyan-400 text-white shadow-[0_0_25px_rgba(0,240,255,0.25)] font-bold'
                      : 'bg-slate-950/80 border-slate-800 text-slate-300 hover:bg-slate-900'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 shrink-0">
                      {renderServiceIcon(svc.iconName, 'w-4 h-4')}
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm truncate">{svc.title}</div>
                      <div className="text-[11px] text-slate-400 font-normal line-clamp-1 mt-0.5">{svc.priceStarting}</div>
                    </div>
                  </div>
                  <ArrowRight className={`w-4 h-4 shrink-0 ${selectedService?.id === svc.id ? 'text-cyan-400' : 'text-slate-600'}`} />
                </button>
              ))}
            </div>

            {/* Right Detailed Preview Panel */}
            {selectedService && (
              <div className="lg:col-span-8 bg-slate-950/90 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl backdrop-blur-xl">
                
                {/* Hero Header */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800">
                  <div>
                    <div className="flex items-center gap-3">
                      <h4 className="text-2xl font-black text-white">{selectedService.title}</h4>
                      {selectedService.badge && (
                        <span className="px-3 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-bold">
                          {selectedService.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed max-w-2xl">{selectedService.fullDesc}</p>
                  </div>

                  <div className="text-right">
                    <div className="text-xs text-slate-500 font-mono uppercase">Starting From</div>
                    <div className="text-xl font-black text-cyan-400 font-mono">{selectedService.priceStarting}</div>
                  </div>
                </div>

                {/* Features & Deliverables Grid */}
                <div className="space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Core Features & Architecture</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedService.features.map((feat, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Business Benefits */}
                <div className="space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">What You Get (Business ROI)</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedService.benefits.map((ben, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300 flex items-center gap-2">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{ben}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Action Bar */}
                <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <button
                    onClick={() => onNavigate('service-detail', selectedService.id)}
                    className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 text-slate-950 font-bold text-xs rounded-xl shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:scale-105 transition flex items-center justify-center gap-2"
                  >
                    <span>View Full {selectedService.title} Page</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onNavigate('contact')}
                    className="w-full sm:w-auto px-5 py-3 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 text-xs font-semibold rounded-xl transition flex items-center justify-center gap-2"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Request Custom Quote</span>
                  </button>
                </div>

              </div>
            )}

          </div>

        </div>

        {/* 5. Key Numbers & Trust Statistics Strip */}
        <div className="my-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-center space-y-1">
            <div className="text-3xl sm:text-4xl font-black text-cyan-400 font-mono">100+</div>
            <div className="text-xs font-bold text-white">Digital Projects Shipped</div>
            <div className="text-[11px] text-slate-400">Websites, Apps & Portals</div>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-center space-y-1">
            <div className="text-3xl sm:text-4xl font-black text-emerald-400 font-mono">99.9%</div>
            <div className="text-xs font-bold text-white">Cloud Server Uptime</div>
            <div className="text-[11px] text-slate-400">Enterprise NVMe Stack</div>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-center space-y-1">
            <div className="text-3xl sm:text-4xl font-black text-blue-400 font-mono">&lt; 1.0s</div>
            <div className="text-xs font-bold text-white">Cold Start Speed</div>
            <div className="text-[11px] text-slate-400">Core Web Vitals Pass</div>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-center space-y-1">
            <div className="text-3xl sm:text-4xl font-black text-purple-400 font-mono">24/7</div>
            <div className="text-xs font-bold text-white">Dedicated SLA Support</div>
            <div className="text-[11px] text-slate-400">Instant Technical Concierge</div>
          </div>
        </div>

        {/* 6. Why Choose AVRX Digital Solutions */}
        <div className="my-20 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>THE AVRX ADVANTAGE</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white">
              Why Businesses Choose AVRX Digital
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Modern architectural craftsmanship that sets your digital presence apart from generic templates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseReasons.map((reason, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-cyan-500/40 transition-all space-y-3"
              >
                <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-mono font-black text-xs">
                  0{idx + 1}
                </div>
                <h4 className="text-base font-bold text-white">{reason.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 7. How It Works / Process Timeline */}
        <div className="my-20 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase">
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              <span>DEVELOPMENT WORKFLOW</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white">
              How It Works: From Idea to Live Launch
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              A transparent, 6-step structured engineering pipeline with continuous milestone check-ins.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {digitalProcessSteps.map((step, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 transition space-y-2 text-center"
              >
                <div className="inline-block px-2.5 py-1 rounded-lg bg-cyan-500/10 text-cyan-400 font-mono font-black text-xs">
                  {step.number}
                </div>
                <div className="text-sm font-bold text-white">{step.title}</div>
                <div className="text-[11px] text-slate-400 leading-relaxed">{step.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 8. Digital Solutions FAQ Section (2-Column Grid Layout) */}
        <div className="my-20 max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-bold uppercase">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>COMMON QUESTIONS</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white">
              Frequently Asked Questions on Digital Solutions
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Clear, transparent answers to technical, delivery and pricing queries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
            {digitalFaqs.map((faq, idx) => (
              <div 
                key={idx}
                className="border border-slate-800 rounded-2xl overflow-hidden bg-slate-900/80 hover:border-cyan-500/30 transition-colors"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left font-bold text-xs sm:text-sm text-slate-200 flex items-center justify-between gap-3 hover:text-cyan-300 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-cyan-400 shrink-0 transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {activeFaq === idx && (
                  <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-slate-300 border-t border-slate-800/80 pt-3 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 9. High-Impact Strong Call to Action */}
        <div className="my-16 rounded-3xl bg-gradient-to-r from-cyan-950 via-slate-900 to-blue-950 border border-cyan-500/40 p-8 sm:p-14 text-center space-y-6 relative overflow-hidden shadow-[0_20px_60px_rgba(0,240,255,0.15)]">
          <div className="max-w-2xl mx-auto space-y-3 relative z-10">
            <h3 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Ready to Build Your Digital Future?
            </h3>
            <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
              Let's engineer a fast, high-converting website, mobile app, or portal tailored to your exact business goals.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 relative z-10">
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 text-slate-950 font-black text-sm shadow-[0_0_30px_rgba(0,240,255,0.4)] hover:scale-105 transition flex items-center gap-2"
            >
              <span>Get Started with AVRX</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('projects')}
              className="px-6 py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-white font-bold text-xs transition flex items-center gap-2"
            >
              <span>Explore Live Client Experiences</span>
              <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
