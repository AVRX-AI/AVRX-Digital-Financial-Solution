import React, { useState } from 'react';
import { ProjectItem } from '../../types/projectTypes';
import { 
  Sparkles, 
  ArrowRight, 
  Lightbulb, 
  Cpu, 
  CheckCircle2, 
  ExternalLink, 
  TrendingUp, 
  Layers, 
  Zap, 
  ShieldCheck,
  Building2,
  ShoppingBag,
  Utensils,
  Landmark
} from 'lucide-react';

interface IdeaToExperienceTransformationProps {
  projects: ProjectItem[];
  onOpenProject: (project: ProjectItem) => void;
}

export const IdeaToExperienceTransformation: React.FC<IdeaToExperienceTransformationProps> = ({
  projects,
  onOpenProject
}) => {
  const [selectedTransformationIndex, setSelectedTransformationIndex] = useState<number>(0);

  const transformations = [
    {
      id: 'luxury-real-estate',
      category: 'Luxury Real Estate',
      icon: Building2,
      ideaTitle: 'Raw Real Estate Concept',
      ideaChallenge: 'Generic broker listings & low-intent leads from third-party property classifieds.',
      ideaPainPoints: [
        'Slow image loading on standard templates',
        'Unqualified casual inquiries wasting sales time',
        'Lack of luxury brand prestige & exclusivity'
      ],
      transformationEngineering: 'AVRX 4K Architectural Showcase, Live Mortgage Engine & VIP Private Tour Scheduler',
      deliveredResult: 'Grand Pinnacle Residences Portal',
      resultOutcome: '+420% Qualified HNW Inquiries • ₹140 Cr+ in brochure downloads',
      projectRefId: 'luxury-real-estate',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'fashion-ecommerce',
      category: 'D2C E-Commerce',
      icon: ShoppingBag,
      ideaTitle: 'Boutique Apparel Brand',
      ideaChallenge: 'High cart abandonment (72%) and sluggish 4.2-second page loads on basic commerce platforms.',
      ideaPainPoints: [
        'Multi-step tedious checkout losing impulse buyers',
        'Clunky variant selectors for size & color',
        'No real-time inventory synchronization'
      ],
      transformationEngineering: 'AVRX Sub-400ms Headless Storefront with 1-Click Instant Cart & Dynamic Coupon Engine',
      deliveredResult: 'LuxeAura Modern D2C Storefront',
      resultOutcome: '+310% Checkout Completion • -42% Cart Abandonment Drop',
      projectRefId: 'fashion-ecommerce',
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'fintech-application',
      category: 'FinTech & Banking',
      icon: Landmark,
      ideaTitle: 'Financial Advisory & Lending',
      ideaChallenge: '14-day manual physical paperwork, high loan drop-off rates, and opaque compliance.',
      ideaPainPoints: [
        'Confusing loan interest calculations',
        'Slow physical courier document collection',
        'Security compliance vulnerabilities'
      ],
      transformationEngineering: 'AVRX Bank-Grade FinTech Portal with Live EMI Engine & Sub-45s Paperless e-KYC',
      deliveredResult: 'Apex Wealth & FinTech Ecosystem',
      resultOutcome: '+340% Lead Conversion • ₹48 Cr+ Verified Loan Applications',
      projectRefId: 'fintech-application',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'restaurant-food',
      category: 'Fine Dining & Hospitality',
      icon: Utensils,
      ideaTitle: 'Michelin-Caliber Restaurant',
      ideaChallenge: 'Paying 25% commissions to food aggregators and losing high-value table bookings to phone line busy signals.',
      ideaPainPoints: [
        'No direct customer relationship or guest data',
        'High third-party platform fee leakage',
        'Clunky PDF menus unreadable on mobile'
      ],
      transformationEngineering: 'AVRX Sensory Tasting Menu Explorer & 1-Click Direct VIP Table Reservation Engine',
      deliveredResult: 'Saffron & Sage Hospitality Portal',
      resultOutcome: '+460% Direct Bookings • Zero Third-Party Commissions',
      projectRefId: 'restaurant-food',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80'
    }
  ];

  const current = transformations[selectedTransformationIndex];
  const linkedProject = projects.find(p => p.id === current.projectRefId) || projects[0];

  return (
    <div className="my-16 rounded-3xl bg-gradient-to-br from-[#060a17] via-[#040816] to-[#02050f] border border-cyan-500/30 p-6 sm:p-10 shadow-[0_15px_50px_rgba(0,0,0,0.8)] relative overflow-hidden">
      
      {/* Background Lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 relative z-10 mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-black uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>TRANSFORMATION SHOWCASE</span>
        </div>
        <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
          From Business Idea → High-Impact Digital Product
        </h3>
        <p className="text-xs sm:text-sm text-slate-300">
          See how AVRX transforms raw client business concepts into high-yielding digital reality.
        </p>

        {/* Industry Selector Tabs */}
        <div className="flex items-center justify-center gap-2 pt-3 overflow-x-auto pb-1">
          {transformations.map((t, idx) => {
            const Icon = t.icon;
            const isSelected = selectedTransformationIndex === idx;
            return (
              <button
                key={t.id}
                onClick={() => setSelectedTransformationIndex(idx)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition flex items-center gap-2 shrink-0 ${
                  isSelected
                    ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-[0_0_20px_rgba(0,240,255,0.4)] scale-105'
                    : 'bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{t.category}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Transformation Pipeline Visual Comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
        
        {/* Left: Raw Business Concept Card (5 cols) */}
        <div className="lg:col-span-5 rounded-2xl bg-slate-950/80 border border-rose-500/30 p-6 space-y-4 shadow-xl">
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-bold uppercase">
              <Lightbulb className="w-3.5 h-3.5 text-rose-400" />
              <span>Starting Point: Client Challenge</span>
            </div>
            <span className="text-xs text-slate-500 font-mono">BEFORE AVRX</span>
          </div>

          <div>
            <h4 className="text-lg font-black text-white">
              {current.ideaTitle}
            </h4>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              {current.ideaChallenge}
            </p>
          </div>

          {/* Pain points checklist */}
          <div className="space-y-2 pt-1">
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              Key Bottlenecks Solved:
            </div>
            {current.ideaPainPoints.map((point, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                <span className="text-rose-400 font-bold">✕</span>
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Center: Animated Transformation Arrow & Engineering Badge (2 cols) */}
        <div className="lg:col-span-2 flex flex-col items-center justify-center text-center space-y-2 py-2">
          <div className="w-12 h-12 rounded-2xl bg-cyan-500 text-slate-950 flex items-center justify-center shadow-[0_0_25px_rgba(0,240,255,0.6)] animate-pulse">
            <Cpu className="w-6 h-6" />
          </div>
          <div className="text-[10px] font-black text-cyan-300 uppercase tracking-widest">
            AVRX Full-Stack Engineering
          </div>
          <div className="hidden lg:flex items-center justify-center text-cyan-400">
            <ArrowRight className="w-6 h-6 animate-bounce horizontal" />
          </div>
        </div>

        {/* Right: Finished High-Performance Digital Product (5 cols) */}
        <div 
          onClick={() => onOpenProject(linkedProject)}
          className="lg:col-span-5 rounded-2xl bg-gradient-to-br from-[#07132e] to-[#040916] border border-cyan-500/50 p-6 space-y-4 shadow-[0_10px_35px_rgba(0,240,255,0.2)] cursor-pointer group hover:scale-[1.02] transition-all duration-300"
        >
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-xs font-bold uppercase">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Engineered Outcome</span>
            </div>
            <span className="text-xs text-emerald-400 font-mono font-bold">● LIVE RESULT</span>
          </div>

          <div>
            <h4 className="text-lg font-black text-white group-hover:text-cyan-300 transition-colors">
              {current.deliveredResult}
            </h4>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              {current.transformationEngineering}
            </p>
          </div>

          {/* Outcome Metric */}
          <div className="p-3 rounded-xl bg-slate-950/80 border border-cyan-500/30">
            <div className="text-xs font-black text-cyan-400 flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-cyan-400" />
              <span>Verified Impact:</span>
            </div>
            <div className="text-xs text-slate-200 font-medium mt-0.5">
              {current.resultOutcome}
            </div>
          </div>

          {/* Action Trigger */}
          <button className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-black text-xs transition flex items-center justify-center gap-2 shadow-lg group-hover:brightness-110">
            <span>Explore Live Project</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

    </div>
  );
};
