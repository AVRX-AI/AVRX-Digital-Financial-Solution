import React from 'react';
import { 
  Zap, 
  Search, 
  Smartphone, 
  ShieldCheck, 
  Calculator, 
  MessageSquare, 
  ShoppingBag, 
  Code2, 
  Sparkles, 
  CheckCircle2, 
  Cpu, 
  Layers, 
  Database, 
  Lock,
  Globe,
  Sliders
} from 'lucide-react';

interface FeatureItem {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  icon: React.ElementType;
  color: {
    bg: string;
    border: string;
    text: string;
    badge: string;
    glow: string;
  };
  metrics: string;
  deliverables: string[];
}

const WEBSITE_SUPERPOWERS: FeatureItem[] = [
  {
    id: 'speed-architecture',
    title: 'Sub-400ms Next.js Edge Architecture',
    subtitle: 'Lightning-Fast Load Performance',
    desc: 'Server-side rendering, static edge caching, and automated image optimization deliver instant page loads that keep visitors engaged and reduce bounce rates.',
    icon: Zap,
    color: {
      bg: 'from-cyan-500/15 via-slate-900/90 to-slate-950',
      border: 'border-cyan-500/30 hover:border-cyan-400',
      text: 'text-cyan-400',
      badge: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
      glow: 'shadow-cyan-500/10'
    },
    metrics: '0.38s Average First Paint',
    deliverables: ['Incremental Static Regeneration (ISR)', 'WebP/AVIF Auto Compression', 'Global Cloudflare Edge CDN']
  },
  {
    id: 'seo-schema-engine',
    title: 'Automated JSON-LD Schema & Deep SEO',
    subtitle: 'Built for Google SERP Rank #1',
    desc: 'Every page is structured with OpenGraph meta, canonical links, semantic HTML5, breadcrumbs schema, and automated XML sitemaps for instant Google indexing.',
    icon: Search,
    color: {
      bg: 'from-emerald-500/15 via-slate-900/90 to-slate-950',
      border: 'border-emerald-500/30 hover:border-emerald-400',
      text: 'text-emerald-400',
      badge: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
      glow: 'shadow-emerald-500/10'
    },
    metrics: '100/100 Lighthouse SEO Score',
    deliverables: ['Rich Google Search Snippets', 'Local Business Geo Tags', 'Dynamic Social OG Image Cards']
  },
  {
    id: 'interactive-calculators',
    title: 'Interactive Calculators & Dynamic Tools',
    subtitle: '10x Visitor Dwell Time',
    desc: 'Custom-built EMI calculators, mortgage estimators, tax health check engines, and quotation wizards that turn passive scrollers into qualified active leads.',
    icon: Calculator,
    color: {
      bg: 'from-amber-500/15 via-slate-900/90 to-slate-950',
      border: 'border-amber-500/30 hover:border-amber-400',
      text: 'text-amber-400',
      badge: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
      glow: 'shadow-amber-500/10'
    },
    metrics: '+420% Lead Intent Capture',
    deliverables: ['Instant Real-Time Math Algorithms', 'Automated PDF Quote Downloader', 'Pre-Filled WhatsApp Routing']
  },
  {
    id: 'mobile-fluidity',
    title: 'Mobile-First Fluid Touch UI/UX',
    subtitle: 'Pixel-Perfect on All Screens',
    desc: 'Tailored specifically for modern touch devices with 48px+ touch targets, swipeable carousels, bottom sheets, and zero awkward horizontal overflow.',
    icon: Smartphone,
    color: {
      bg: 'from-pink-500/15 via-slate-900/90 to-slate-950',
      border: 'border-pink-500/30 hover:border-pink-400',
      text: 'text-pink-400',
      badge: 'bg-pink-500/10 text-pink-300 border-pink-500/30',
      glow: 'shadow-pink-500/10'
    },
    metrics: '100% Touch-Optimized',
    deliverables: ['Adaptive Breakpoints (sm, md, lg, xl)', 'Thumb-Friendly Bottom Bars', 'Smooth 60fps Native Gestures']
  },
  {
    id: 'crm-whatsapp-funnels',
    title: '1-Click WhatsApp & Lead Ingestion',
    subtitle: 'Zero Lead Leakage',
    desc: 'Direct-to-WhatsApp pre-configured chat links, automated email confirmations, webhook integrations, and CRM sync to capture every high-intent buyer immediately.',
    icon: MessageSquare,
    color: {
      bg: 'from-teal-500/15 via-slate-900/90 to-slate-950',
      border: 'border-teal-500/30 hover:border-teal-400',
      text: 'text-teal-400',
      badge: 'bg-teal-500/10 text-teal-300 border-teal-500/30',
      glow: 'shadow-teal-500/10'
    },
    metrics: '&lt; 30s Lead Routing Speed',
    deliverables: ['Smart WhatsApp Message Builders', 'Spam-Protected Contact Forms', 'Zapier / Webhook Live Endpoints']
  },
  {
    id: 'security-ddos-shield',
    title: 'Bank-Grade AES-256 & DDoS Shield',
    subtitle: 'Enterprise 99.99% Uptime',
    desc: 'Hardware enclave encryption, TLS 1.3 SSL certificates, rate limiting, and automated bot mitigation ensure your business stays online 24/7/365.',
    icon: ShieldCheck,
    color: {
      bg: 'from-indigo-500/15 via-slate-900/90 to-slate-950',
      border: 'border-indigo-500/30 hover:border-indigo-400',
      text: 'text-indigo-400',
      badge: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30',
      glow: 'shadow-indigo-500/10'
    },
    metrics: '99.99% Guaranteed SLA',
    deliverables: ['Strict Content Security Policy (CSP)', 'SQL Injection & XSS Immunity', 'Automated Daily Cloud Backups']
  },
  {
    id: 'ecommerce-checkout',
    title: '1-Click High-Speed Checkout & UPI',
    subtitle: 'Frictionless Payment Flow',
    desc: 'Integrated with Razorpay, Stripe, Cashfree, UPI QR codes, Apple Pay, and EMI gateways. Reduces checkout drop-offs and maximizes sales margins.',
    icon: ShoppingBag,
    color: {
      bg: 'from-rose-500/15 via-slate-900/90 to-slate-950',
      border: 'border-rose-500/30 hover:border-rose-400',
      text: 'text-rose-400',
      badge: 'bg-rose-500/10 text-rose-300 border-rose-500/30',
      glow: 'shadow-rose-500/10'
    },
    metrics: '-42% Cart Abandonment',
    deliverables: ['Dynamic Coupon & Discount Engine', 'Instant UPI QR & Net Banking', 'Automated GST Invoice Ingestion']
  },
  {
    id: 'clean-code-ownership',
    title: '100% Full Codebase Ownership',
    subtitle: 'Zero Monthly Platform Lock-In',
    desc: 'You receive complete source code, deployment scripts, Git repositories, and documentation. No recurring proprietary platform licensing fees.',
    icon: Code2,
    color: {
      bg: 'from-blue-500/15 via-slate-900/90 to-slate-950',
      border: 'border-blue-500/30 hover:border-blue-400',
      text: 'text-blue-400',
      badge: 'bg-blue-500/10 text-blue-300 border-blue-500/30',
      glow: 'shadow-blue-500/10'
    },
    metrics: 'Lifetime Asset Ownership',
    deliverables: ['Clean Modular TypeScript Code', 'Docker & CI/CD Deployment Files', 'Full Developer Handoff Guides']
  }
];

export const WebsiteFeaturesGrid: React.FC = () => {
  return (
    <section className="w-full py-16 sm:py-24 bg-gradient-to-b from-[#030611] via-[#050817] to-[#030611] text-white relative overflow-hidden">
      
      {/* Ambient Background Aura */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 blur-[150px] pointer-events-none" />

      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(0,240,255,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>ENGINEERING &amp; ARCHITECTURAL SUPERPOWERS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Features Built Into Every <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">AVRX Project</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed">
            We don’t use generic slow templates. Every application is custom engineered with modern software design principles, airtight security, and conversion psychology.
          </p>
        </div>

        {/* Bento Grid (8 Colorful Feature Modules) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WEBSITE_SUPERPOWERS.map((feat, idx) => {
            const IconComp = feat.icon;
            return (
              <div
                key={feat.id}
                className={`p-6 sm:p-7 rounded-3xl bg-gradient-to-b ${feat.color.bg} border ${feat.color.border} space-y-5 hover:-translate-y-2 transition-all duration-300 shadow-2xl flex flex-col justify-between group ${feat.color.glow}`}
              >
                <div className="space-y-4">
                  
                  {/* Top Bar with Icon and Metric */}
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center justify-center ${feat.color.text} group-hover:scale-110 transition-transform shadow-lg`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold border ${feat.color.badge}`}>
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-1.5">
                    <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                      {feat.subtitle}
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                      {feat.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed pt-1">
                      {feat.desc}
                    </p>
                  </div>

                  {/* Key Deliverables */}
                  <div className="space-y-2 pt-2 border-t border-slate-800/80">
                    <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                      Included Deliverables:
                    </div>
                    <div className="space-y-1.5">
                      {feat.deliverables.map((del, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-300">
                          <CheckCircle2 className={`w-3.5 h-3.5 ${feat.color.text} flex-shrink-0`} />
                          <span className="truncate">{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Bottom Metric Pill */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">Standard SLA</span>
                  <span className={`font-bold ${feat.color.text}`}>{feat.metrics}</span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
