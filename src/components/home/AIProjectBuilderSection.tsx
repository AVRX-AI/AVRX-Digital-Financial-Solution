import React, { useState } from 'react';
import { 
  Sparkles, 
  Bot, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Code2, 
  TrendingUp, 
  Server, 
  ShieldCheck, 
  DollarSign, 
  Send,
  Loader2,
  Zap,
  Rocket,
  Cpu
} from 'lucide-react';
import { launchSoundEngine } from '../../utils/launchSoundEngine';

interface AIProjectBuilderSectionProps {
  onNavigate: (page: string, slug?: string) => void;
  onOpenConsultation?: (blueprintSummary: string) => void;
}

interface BlueprintResult {
  title: string;
  recommendedPlatform: string;
  architectureTier: string;
  estimatedTimeline: string;
  coreFeatures: string[];
  recommendedServices: {
    name: string;
    slug?: string;
    category: string;
  }[];
  roadmap: {
    phase: string;
    title: string;
    deliverables: string;
  }[];
}

export const AIProjectBuilderSection: React.FC<AIProjectBuilderSectionProps> = ({ onNavigate }) => {
  const [prompt, setPrompt] = useState('I want an online grocery business with home delivery and UPI payments in Chhattisgarh.');
  const [isGenerating, setIsGenerating] = useState(false);
  const [blueprint, setBlueprint] = useState<BlueprintResult>({
    title: 'Hyperlocal E-Commerce & Grocery Delivery Network',
    recommendedPlatform: 'Next.js Web Store + Android/iOS Mobile Apps + Merchant Ops Panel',
    architectureTier: 'Full-Stack Distributed Cloud Architecture',
    estimatedTimeline: '3 to 5 Weeks to Production Launch',
    coreFeatures: [
      'Pin-code based stock and inventory catalogue',
      'Real-time delivery partner GPS tracking & push alerts',
      'One-click Razorpay/PhonePe/Paytm UPI & COD checkout',
      'Automated GST billing & daily sales accounting sync'
    ],
    recommendedServices: [
      { name: 'E-Commerce Website Development', slug: 'e-commerce-solutions', category: 'Digital Lab' },
      { name: 'Mobile App Development (Android/iOS)', slug: 'android-app-development', category: 'Digital Lab' },
      { name: 'Local SEO & Google Maps Marketing', slug: 'seo-ranking', category: 'Growth Engine' },
      { name: 'PMEGP / Business Loan Financing', slug: 'business-loan', category: 'Finance Hub' }
    ],
    roadmap: [
      { phase: 'PHASE 01', title: 'UX Design & Catalog Architecture', deliverables: 'UI wireframes, database schema & vendor API specs' },
      { phase: 'PHASE 02', title: 'Full-Stack Build & UPI Integration', deliverables: 'Admin portal, delivery app & security hardening' },
      { phase: 'PHASE 03', title: 'Local Launch & Growth Engine', deliverables: 'Local search domination, Meta lead ads & scale' }
    ]
  });

  const presetIdeas = [
    'Online Grocery Delivery Store',
    'Doctor Video Consultation & Clinic App',
    'Real Estate CRM & Property Marketplace',
    'EdTech Online Learning & Test Series Portal',
    'B2B Manufacturing Wholesale Catalog'
  ];

  const handleGenerate = (customText?: string) => {
    const textToUse = customText || prompt;
    launchSoundEngine.playClickTick();
    setIsGenerating(true);

    setTimeout(() => {
      const lower = textToUse.toLowerCase();

      if (lower.includes('doctor') || lower.includes('clinic') || lower.includes('health')) {
        setBlueprint({
          title: 'Telemedicine & Clinic Management Platform',
          recommendedPlatform: 'Patient Mobile App + Doctor Web Dashboard + Video SDK',
          architectureTier: 'HIPAA & Telemedicine Compliant Cloud',
          estimatedTimeline: '4 Weeks to Launch',
          coreFeatures: [
            'WebRTC encrypted HD video/audio consultations',
            'Digital Rx prescription generator & PDF download',
            'Automated SMS/WhatsApp appointment reminders',
            'Integrated consultation fee UPI payments'
          ],
          recommendedServices: [
            { name: 'Web Application Development', slug: 'web-application-development', category: 'Digital Lab' },
            { name: 'Android & iOS App Development', slug: 'android-app-development', category: 'Digital Lab' },
            { name: 'Google Ads Healthcare Campaign', slug: 'digital-marketing', category: 'Growth Engine' },
            { name: 'Doctor Professional Indemnity', slug: 'health-insurance', category: 'Protection' }
          ],
          roadmap: [
            { phase: 'PHASE 01', title: 'Compliance & Telehealth UX', deliverables: 'Patient journey, doctor scheduling workflows' },
            { phase: 'PHASE 02', title: 'Video SDK & EHR Integration', deliverables: 'Encrypted consultation rooms & payment gateways' },
            { phase: 'PHASE 03', title: 'Clinic Onboarding & Marketing', deliverables: 'Staff training, patient acquisition campaigns' }
          ]
        });
      } else if (lower.includes('real estate') || lower.includes('property') || lower.includes('crm')) {
        setBlueprint({
          title: 'Real Estate Marketplace & Lead Pipeline CRM',
          recommendedPlatform: 'Property Showcase Web Platform + Agent Mobile Portal',
          architectureTier: 'High-Throughput Media & Lead Architecture',
          estimatedTimeline: '3 to 4 Weeks',
          coreFeatures: [
            '360 Virtual Tour & high-res property image galleries',
            'Automated WhatsApp lead capture & agent distribution',
            'EMI & Loan Eligibility live calculator widgets',
            'Interactive Google Maps vicinity & amenities locator'
          ],
          recommendedServices: [
            { name: 'Custom Website Design', slug: 'custom-website-design', category: 'Digital Lab' },
            { name: 'Performance Meta Lead Generation Ads', slug: 'digital-marketing', category: 'Growth Engine' },
            { name: 'Home Loan & LAP Referral Tie-Ups', slug: 'home-loan', category: 'Finance Hub' },
            { name: 'Company Registration & Compliance', slug: 'company-registration', category: 'Legal CA' }
          ],
          roadmap: [
            { phase: 'PHASE 01', title: 'Inventory Architecture & Geo-Map', deliverables: 'Property filtering engine & interactive maps' },
            { phase: 'PHASE 02', title: 'Lead Routing CRM & Speed Fix', deliverables: 'WhatsApp auto-assign & 99+ Core Web Vitals' },
            { phase: 'PHASE 03', title: 'Targeted High-Net-Worth Ads', deliverables: 'Meta & Google Ads for buyer acquisition' }
          ]
        });
      } else {
        setBlueprint({
          title: 'Custom High-Growth Digital Venture Architecture',
          recommendedPlatform: 'Next.js 15 PWA + Native Android App + Cloud Dashboard',
          architectureTier: 'Ultra-Fast NVMe LiteSpeed Microservices',
          estimatedTimeline: '2 to 4 Weeks to Production',
          coreFeatures: [
            'Sub-second Google Core Web Vitals performance',
            'Automated WhatsApp instant lead notifications',
            '1-Click UPI (GPay/PhonePe/Paytm) & Card gateway',
            'Full SEO Schema & Search Console direct indexing'
          ],
          recommendedServices: [
            { name: 'Custom Website Design', slug: 'custom-website-design', category: 'Digital Lab' },
            { name: 'Android & iOS App Development', slug: 'android-app-development', category: 'Digital Lab' },
            { name: 'Local SEO Ranking', slug: 'seo-ranking', category: 'Growth Engine' },
            { name: 'GST & Business Registration', slug: 'gst-registration', category: 'Legal CA' }
          ],
          roadmap: [
            { phase: 'PHASE 01', title: 'UI/UX & Interactive Prototyping', deliverables: 'Brand guidelines & component library' },
            { phase: 'PHASE 02', title: 'Full-Stack Build & Integrations', deliverables: 'UPI payments, database & edge caching' },
            { phase: 'PHASE 03', title: 'Page-1 Launch & Ad Acceleration', deliverables: 'SEO schema rollout & lead funnels' }
          ]
        });
      }

      setIsGenerating(false);
      launchSoundEngine.playTeleportZap();
    }, 900);
  };

  return (
    <section className="py-28 bg-[#040814] relative overflow-hidden border-t border-slate-800/80 select-none">
      
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/3 w-[700px] h-[500px] bg-gradient-to-r from-purple-500/15 via-cyan-500/10 to-transparent rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-5xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-bold font-mono uppercase tracking-widest shadow-[0_0_20px_rgba(168,85,247,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-spin-slow" />
            <span>INSTANT AI ARCHITECT ENGINE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            AI PROJECT &amp; VENTURE <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">BLUEPRINT BUILDER</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed font-normal">
            Type your business or software idea in plain English or Hindi. Our AI engine will map out your exact tech stack, timeline, features, and cost-efficient execution roadmap.
          </p>
        </div>

        {/* Input & Presets */}
        <div className="w-full max-w-4xl mx-auto space-y-4">
          <div className="relative rounded-3xl bg-slate-900/95 border-2 border-purple-500/40 p-2 sm:p-3 shadow-[0_0_40px_rgba(168,85,247,0.2)] backdrop-blur-2xl">
            <div className="flex items-center gap-3 px-3 py-1">
              <Bot className="w-5 h-5 text-purple-400 shrink-0" />
              <input
                type="text"
                value={prompt}
                onChange={e => setPrompt(e.target.value)}
                placeholder="Describe your business idea (e.g., Grocery delivery app with UPI)"
                className="w-full bg-transparent text-white text-sm sm:text-base font-medium placeholder:text-slate-500 focus:outline-none"
                onKeyDown={e => {
                  if (e.key === 'Enter') handleGenerate();
                }}
              />

              <button
                onClick={() => handleGenerate()}
                disabled={isGenerating}
                className="px-6 sm:px-8 py-3.5 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 hover:from-purple-400 hover:to-cyan-400 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider rounded-2xl transition cursor-pointer shadow-[0_0_25px_rgba(168,85,247,0.4)] flex items-center gap-2 shrink-0 disabled:opacity-50 hover:scale-105 active:scale-95"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Mapping...</span>
                  </>
                ) : (
                  <>
                    <span>Generate Blueprint</span>
                    <Sparkles className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Quick Idea Presets */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
            <span className="text-xs text-slate-400 font-mono">Try templates:</span>
            {presetIdeas.map((idea, i) => (
              <button
                key={i}
                onClick={() => {
                  setPrompt(idea);
                  handleGenerate(idea);
                }}
                className="px-3.5 py-1.5 rounded-xl bg-slate-950/80 hover:bg-purple-500/20 border border-slate-800 hover:border-purple-500/40 text-xs text-slate-300 hover:text-purple-300 transition cursor-pointer"
              >
                {idea}
              </button>
            ))}
          </div>
        </div>

        {/* Generated Blueprint Container */}
        <div className="rounded-3xl bg-slate-950/95 border-2 border-purple-500/40 p-6 sm:p-10 backdrop-blur-2xl shadow-[0_0_50px_rgba(168,85,247,0.15)] space-y-10">
          
          {/* Blueprint Title & Architecture Meta */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-purple-400">
                <Sparkles className="w-4 h-4 animate-pulse" />
                <span>AI BLUEPRINT MATRIX GENERATED</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-black text-white">
                {blueprint.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Recommended Core: <strong className="text-cyan-300">{blueprint.recommendedPlatform}</strong>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <div className="px-4 py-2.5 rounded-2xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
                Est. Speed: <strong className="text-emerald-400">{blueprint.estimatedTimeline}</strong>
              </div>
              <button
                onClick={() => {
                  launchSoundEngine.playClickTick();
                  onNavigate('contact');
                }}
                className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 hover:brightness-110 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center gap-2 transition cursor-pointer shadow-lg hover:scale-105"
              >
                <span>Discuss This Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 3-Column Structured Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
            
            {/* 1. Core Features */}
            <div className="p-6 rounded-3xl bg-slate-900/80 border border-cyan-500/30 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
                <Layers className="w-4 h-4" />
                <span>Core Architectural Features</span>
              </div>
              <div className="space-y-3">
                {blueprint.coreFeatures.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Recommended AVRX Services */}
            <div className="p-6 rounded-3xl bg-slate-900/80 border border-emerald-500/30 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                <Code2 className="w-4 h-4" />
                <span>Recommended AVRX Services</span>
              </div>
              <div className="space-y-2.5">
                {blueprint.recommendedServices.map((srv, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      launchSoundEngine.playClickTick();
                      if (srv.slug) onNavigate('service-detail', srv.slug);
                      else onNavigate('digital-solutions');
                    }}
                    className="w-full p-3 rounded-2xl bg-slate-950/80 hover:bg-emerald-500/15 border border-slate-800 hover:border-emerald-500/40 text-left transition flex items-center justify-between group cursor-pointer"
                  >
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-emerald-300 transition">
                        {srv.name}
                      </div>
                      <div className="text-[10px] text-slate-400 font-mono">
                        {srv.category}
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-transform" />
                  </button>
                ))}
              </div>
            </div>

            {/* 3. 3-Phase Execution Roadmap */}
            <div className="p-6 rounded-3xl bg-slate-900/80 border border-purple-500/30 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-purple-400">
                <TrendingUp className="w-4 h-4" />
                <span>Execution Milestone Roadmap</span>
              </div>
              <div className="space-y-3.5">
                {blueprint.roadmap.map((step, i) => (
                  <div key={i} className="space-y-1 border-l-2 border-purple-500/60 pl-3.5">
                    <div className="text-[10px] font-mono font-bold text-purple-400">
                      {step.phase} • {step.title}
                    </div>
                    <div className="text-xs text-slate-300 leading-relaxed font-normal">
                      {step.deliverables}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
