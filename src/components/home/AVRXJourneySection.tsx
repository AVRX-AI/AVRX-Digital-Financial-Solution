import React, { useState } from 'react';
import { 
  Sparkles, 
  Search, 
  Compass, 
  Code2, 
  TrendingUp, 
  DollarSign, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Layers
} from 'lucide-react';

interface AVRXJourneySectionProps {
  onNavigate: (page: string, slug?: string) => void;
}

interface JourneyStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  icon: React.ElementType;
  color: string;
  deliverables: string[];
  timeline: string;
  targetPage: string;
  targetSlug?: string;
  ctaText: string;
}

export const AVRXJourneySection: React.FC<AVRXJourneySectionProps> = ({ onNavigate }) => {
  const [activeStepIdx, setActiveStepIdx] = useState<number>(0);

  const journeySteps: JourneyStep[] = [
    {
      stepNumber: '01',
      title: 'DISCOVER',
      subtitle: 'Tell Us What You Need',
      tagline: 'Deep Requirements Mapping & AI Consultation',
      description: 'Interact with the AVRX AI Assistant or consult our technical architects to define your exact digital, capital, tax, or protection roadmap.',
      icon: Search,
      color: 'from-cyan-400 to-blue-500',
      deliverables: [
        'Comprehensive Needs Assessment',
        'Website Architecture Diagnostic',
        'Financial & Credit Profiling',
        'Statutory Tax & Insurance Gap Analysis'
      ],
      timeline: 'Instant to 24 Hours',
      targetPage: 'contact',
      ctaText: 'Start Discovery'
    },
    {
      stepNumber: '02',
      title: 'PLAN',
      subtitle: 'AVRX Recommends Solutions',
      tagline: 'Tailored Execution Strategy & Milestone Spec',
      description: 'Receive an optimal, modular plan covering tech stacks, estimated budgets, lender shortlists, and statutory compliance timelines.',
      icon: Compass,
      color: 'from-blue-400 to-indigo-500',
      deliverables: [
        'Detailed Project Spec Sheet (SRS)',
        'Customized Tech & Growth Roadmap',
        'Transparent Cost & Timeline Breakdown',
        'Assigned Relationship Manager'
      ],
      timeline: '24 to 48 Hours',
      targetPage: 'services',
      ctaText: 'Explore Strategy Matrix'
    },
    {
      stepNumber: '03',
      title: 'BUILD',
      subtitle: 'Create Digital Infrastructure',
      tagline: 'High-Velocity Engineering & Deployment',
      description: 'Our engineering lab designs and develops lightning-fast websites, mobile apps, e-commerce stores, and high-converting landing pages.',
      icon: Code2,
      color: 'from-indigo-400 to-purple-500',
      deliverables: [
        'Responsive Mobile-First UI/UX',
        'Custom Web & App Engineering',
        'UPI Payment Gateway Integration',
        'Cloud NVMe Hosting Deployment'
      ],
      timeline: '5 to 15 Business Days',
      targetPage: 'service-detail',
      targetSlug: 'website-design',
      ctaText: 'Explore Website Design'
    },
    {
      stepNumber: '04',
      title: 'GROW',
      subtitle: 'Improve Visibility & Customers',
      tagline: 'Organic SEO Dominance & Performance Ads',
      description: 'Scale your revenue with on-page Google ranking, technical Core Web Vitals optimization, Meta targeted lead ads, and ROI campaigns.',
      icon: TrendingUp,
      color: 'from-emerald-400 to-teal-500',
      deliverables: [
        'Google Page-1 Keyword Strategy',
        'Meta & Google Lead Ad Campaigns',
        'Conversion Rate Optimization (CRO)',
        'Monthly Transparent Analytics Reports'
      ],
      timeline: 'Ongoing Growth Loops',
      targetPage: 'service-detail',
      targetSlug: 'seo',
      ctaText: 'Explore SEO & Marketing'
    },
    {
      stepNumber: '05',
      title: 'FINANCE',
      subtitle: 'Access Capital Solutions',
      tagline: 'Collateral-Free Loans & Government Subsidies',
      description: 'Secure personal financing or collateral-free business loans up to ₹1 Crore with top RBI-approved bank partners and PMEGP/MUDRA subsidies.',
      icon: DollarSign,
      color: 'from-amber-400 to-orange-500',
      deliverables: [
        'Collateral-Free Business Loans',
        'Personal, Home & Vehicle Loans',
        'PMEGP Subsidy Guidance (up to 35%)',
        'Quick Digital KYC & Fast Sanctions'
      ],
      timeline: '2 to 5 Banking Days',
      targetPage: 'financial-solutions',
      ctaText: 'Explore Loan Solutions'
    },
    {
      stepNumber: '06',
      title: 'PROTECT',
      subtitle: 'Insurance & Statutory Compliance',
      tagline: 'Shield Your Business, Health & Wealth',
      description: 'Maintain 100% tax peace-of-mind with GST/ITR filings and protect what matters most with cashless health, motor, and property insurance.',
      icon: ShieldCheck,
      color: 'from-rose-400 to-pink-500',
      deliverables: [
        'Cashless Family Health Insurance',
        'Comprehensive Vehicle Protection',
        'GST Registration & Monthly Filings',
        'Expert ITR Return Submission'
      ],
      timeline: 'Instant Policy / Monthly Filings',
      targetPage: 'insurance-solutions',
      ctaText: 'Explore Protection Plans'
    }
  ];

  const currentStep = journeySteps[activeStepIdx];

  return (
    <section className="py-24 bg-[#050811] relative overflow-hidden border-t border-slate-800/80">
      
      {/* Ambient background light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-tr from-cyan-500/10 via-purple-500/5 to-blue-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-5xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-bold font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Structured Business Progression</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            Your AVRX{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              Journey
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            From your very first idea to building digital platforms, accessing capital, and securing long-term compliance — we guide every step.
          </p>
        </div>

        {/* Step Progression Ribbon / Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {journeySteps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = idx === activeStepIdx;

            return (
              <button
                key={step.stepNumber}
                onClick={() => setActiveStepIdx(idx)}
                className={`p-4 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between space-y-3 cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 border-cyan-400 shadow-[0_0_25px_rgba(0,240,255,0.35)] scale-103'
                    : 'bg-slate-950/80 hover:bg-slate-900 border-slate-800 text-slate-400'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-mono font-black ${isActive ? 'text-cyan-400' : 'text-slate-500'}`}>
                    STEP {step.stepNumber}
                  </span>
                  <div className={`p-2 rounded-xl bg-slate-950 border border-slate-800 ${isActive ? 'text-cyan-400' : 'text-slate-500'}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <div className={`text-sm font-black ${isActive ? 'text-white' : 'text-slate-300'}`}>
                    {step.title}
                  </div>
                  <div className="text-[11px] text-slate-500 font-mono truncate">
                    {step.subtitle}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Interactive Showcase Card */}
        <div className="rounded-3xl bg-slate-950/90 border border-cyan-500/30 p-6 sm:p-10 backdrop-blur-2xl shadow-2xl space-y-8">
          
          {/* Top Bar of Stage */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800/80">
            <div className="flex items-start gap-4">
              <div className={`p-4 rounded-2xl bg-gradient-to-r ${currentStep.color} text-slate-950 font-black shadow-xl shrink-0`}>
                <currentStep.icon className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
                  <span>STAGE {currentStep.stepNumber} OF 06</span>
                  <span>•</span>
                  <span>{currentStep.tagline}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  {currentStep.title}: {currentStep.subtitle}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-3 self-start lg:self-auto bg-slate-900/90 border border-slate-800 px-4 py-2 rounded-2xl text-xs font-mono text-slate-300">
              <Clock className="w-4 h-4 text-cyan-400" />
              <span>Turnaround: <strong className="text-white">{currentStep.timeline}</strong></span>
            </div>
          </div>

          {/* Description */}
          <p className="text-base text-slate-300 leading-relaxed max-w-4xl">
            {currentStep.description}
          </p>

          {/* Deliverables Checklist */}
          <div className="space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
              Key Stage Deliverables &amp; Outcomes:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {currentStep.deliverables.map((item, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-3 text-xs font-semibold text-slate-200 shadow-sm"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stage Action Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800/80">
            <div className="text-xs text-slate-400">
              Ready to execute this phase for your company?
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => onNavigate(currentStep.targetPage, currentStep.targetSlug)}
                className={`w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-gradient-to-r ${currentStep.color} hover:brightness-110 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition cursor-pointer shadow-lg`}
              >
                <span>{currentStep.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
