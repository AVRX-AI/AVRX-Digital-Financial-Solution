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
  Loader2
} from 'lucide-react';

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
      { name: 'E-Commerce Website Development', slug: 'ecommerce', category: 'Digital Lab' },
      { name: 'Mobile App Development (Android/iOS)', slug: 'app-development', category: 'Digital Lab' },
      { name: 'Local SEO & Google Maps Marketing', slug: 'seo', category: 'Growth Engine' },
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
            { name: 'Web Application Development', slug: 'app-development', category: 'Digital Lab' },
            { name: 'Android & iOS App Development', slug: 'app-development', category: 'Digital Lab' },
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
            { name: 'Custom Website Design', slug: 'website-design', category: 'Digital Lab' },
            { name: 'Performance Meta Lead Generation Ads', slug: 'digital-marketing', category: 'Growth Engine' },
            { name: 'Home Loan Channel Partnership', slug: 'home-loan', category: 'Finance Hub' },
            { name: 'RERA Compliance Documentation', slug: 'company-registration', category: 'Tax Hub' }
          ],
          roadmap: [
            { phase: 'PHASE 01', title: 'Property Schema & UI UX', deliverables: 'Project listings layout & lead capture popups' },
            { phase: 'PHASE 02', title: 'CRM & WhatsApp Automation', deliverables: 'Lead routing, SMS notifications & agent app' },
            { phase: 'PHASE 03', title: 'Digital Ad Campaigns', deliverables: 'High-intent buyer acquisition on Meta & Google' }
          ]
        });
      } else {
        setBlueprint({
          title: 'Scalable Digital Business Ecosystem',
          recommendedPlatform: 'Next-Gen Responsive Web App + Native Mobile App + Cloud Stack',
          architectureTier: 'Enterprise Scalable Architecture',
          estimatedTimeline: '2 to 4 Weeks to Production Launch',
          coreFeatures: [
            'Modern high-speed conversion-focused frontend',
            'Seamless UPI & NetBanking payment processing',
            'Automated customer CRM & WhatsApp notification bots',
            'Statutory tax, GST invoicing & reporting dashboard'
          ],
          recommendedServices: [
            { name: 'Custom Website Design', slug: 'website-design', category: 'Digital Lab' },
            { name: 'Mobile App Engineering', slug: 'app-development', category: 'Digital Lab' },
            { name: 'SEO & Organic Google Traffic', slug: 'seo', category: 'Growth Engine' },
            { name: 'Collateral-Free Business Loan', slug: 'business-loan', category: 'Finance Hub' }
          ],
          roadmap: [
            { phase: 'PHASE 01', title: 'Design & Prototype Architecture', deliverables: 'Figma prototypes, architecture spec & APIs' },
            { phase: 'PHASE 02', title: 'Full-Stack Development & QA', deliverables: 'Complete code build, testing & security check' },
            { phase: 'PHASE 03', title: 'Production Launch & Growth Setup', deliverables: 'Domain deployment, SEO setup & ad launch' }
          ]
        });
      }

      setIsGenerating(false);
    }, 600);
  };

  return (
    <section className="py-24 bg-[#070b16] relative overflow-hidden border-t border-slate-800/80">
      
      {/* Background illumination */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-cyan-500/10 via-purple-500/10 to-transparent rounded-full blur-[160px] pointer-events-none" />

      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-5xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-bold font-mono uppercase tracking-widest">
            <Bot className="w-3.5 h-3.5 text-cyan-400" />
            <span>AI Architecture Generator</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            Describe Your Idea.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              We&apos;ll Map It.
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Turn your raw business concept into a comprehensive 3-phase technical specification, platform recommendation, and AVRX execution plan.
          </p>
        </div>

        {/* Interactive Prompt Input Box */}
        <div className="w-full max-w-5xl mx-auto space-y-3">
          <div className="relative rounded-3xl bg-slate-900/90 border border-slate-700/80 p-2 sm:p-3 shadow-2xl backdrop-blur-xl">
            <div className="flex items-center gap-3 px-3 py-1">
              <input
                type="text"
                value={prompt}
                onChange={e => setPrompt(e.target.value)}
                placeholder="e.g., I want an EV charging network booking app with wallet and navigation..."
                className="w-full bg-transparent text-white text-sm sm:text-base font-medium placeholder:text-slate-500 focus:outline-none"
                onKeyDown={e => {
                  if (e.key === 'Enter') handleGenerate();
                }}
              />

              <button
                onClick={() => handleGenerate()}
                disabled={isGenerating}
                className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 hover:brightness-110 text-slate-950 font-black text-xs uppercase tracking-wider rounded-2xl transition cursor-pointer shadow-lg flex items-center gap-2 shrink-0 disabled:opacity-50"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Mapping...</span>
                  </>
                ) : (
                  <>
                    <span>Generate Map</span>
                    <Sparkles className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Quick Idea Presets */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
            <span className="text-xs text-slate-500 font-mono">Try templates:</span>
            {presetIdeas.map((idea, i) => (
              <button
                key={i}
                onClick={() => {
                  setPrompt(idea);
                  handleGenerate(idea);
                }}
                className="px-3 py-1 rounded-xl bg-slate-950/80 hover:bg-cyan-500/10 border border-slate-800 hover:border-cyan-500/30 text-xs text-slate-300 hover:text-cyan-300 transition cursor-pointer"
              >
                {idea}
              </button>
            ))}
          </div>
        </div>

        {/* Generated Blueprint Holographic Container */}
        <div className="rounded-3xl bg-slate-950/90 border border-cyan-500/30 p-6 sm:p-10 backdrop-blur-2xl shadow-2xl space-y-8 animate-in fade-in zoom-in-95 duration-200">
          
          {/* Blueprint Title & Architecture Meta */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
                <Sparkles className="w-4 h-4" />
                <span>AI BLUEPRINT MATRIX GENERATED</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                {blueprint.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Recommended Core: <strong className="text-cyan-300">{blueprint.recommendedPlatform}</strong>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <div className="px-4 py-2 rounded-2xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
                Est. Speed: <strong className="text-white">{blueprint.estimatedTimeline}</strong>
              </div>
              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 hover:brightness-110 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center gap-2 transition cursor-pointer shadow-lg"
              >
                <span>Discuss This Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 3-Column Structured Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* 1. Core Features */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
                <Layers className="w-4 h-4" />
                <span>Core Architectural Features</span>
              </div>
              <div className="space-y-2.5">
                {blueprint.coreFeatures.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Recommended AVRX Services */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                <Code2 className="w-4 h-4" />
                <span>Recommended AVRX Services</span>
              </div>
              <div className="space-y-2">
                {blueprint.recommendedServices.map((srv, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      if (srv.slug) onNavigate('service-detail', srv.slug);
                      else onNavigate('services');
                    }}
                    className="w-full p-2.5 rounded-xl bg-slate-950/80 hover:bg-cyan-500/15 border border-slate-800/80 hover:border-cyan-500/40 text-left transition flex items-center justify-between group cursor-pointer"
                  >
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-cyan-300 transition">
                        {srv.name}
                      </div>
                      <div className="text-[10px] text-slate-500 font-mono">
                        {srv.category}
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-cyan-400 transition" />
                  </button>
                ))}
              </div>
            </div>

            {/* 3. 3-Phase Execution Roadmap */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-purple-400">
                <TrendingUp className="w-4 h-4" />
                <span>Execution Milestone Roadmap</span>
              </div>
              <div className="space-y-3">
                {blueprint.roadmap.map((step, i) => (
                  <div key={i} className="space-y-0.5 border-l-2 border-cyan-500/40 pl-3">
                    <div className="text-[10px] font-mono font-bold text-cyan-400">
                      {step.phase} • {step.title}
                    </div>
                    <div className="text-xs text-slate-300">
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
