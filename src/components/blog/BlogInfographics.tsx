import React from 'react';
import { 
  Globe, 
  Search, 
  Users, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  Zap, 
  Smartphone, 
  Lock, 
  Compass, 
  MousePointerClick, 
  FileText,
  ArrowRight,
  TrendingUp
} from 'lucide-react';

export const BlogInfographics: React.FC = () => {
  const flowSteps = [
    { step: '01', title: 'Website', desc: 'Official Digital HQ', icon: <Globe className="w-5 h-5 text-cyan-400" />, color: 'border-cyan-500/40 bg-cyan-500/10 text-cyan-300' },
    { step: '02', title: 'SEO', desc: 'Google Search Rank', icon: <Search className="w-5 h-5 text-blue-400" />, color: 'border-blue-500/40 bg-blue-500/10 text-blue-300' },
    { step: '03', title: 'Traffic', desc: 'High-Intent Visitors', icon: <TrendingUp className="w-5 h-5 text-indigo-400" />, color: 'border-indigo-500/40 bg-indigo-500/10 text-indigo-300' },
    { step: '04', title: 'Trust', desc: 'Proof & Security', icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />, color: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300' },
    { step: '05', title: 'Leads', desc: 'Calls & Inquiries', icon: <Users className="w-5 h-5 text-amber-400" />, color: 'border-amber-500/40 bg-amber-500/10 text-amber-300' },
    { step: '06', title: 'Customers', desc: 'Closed Sales Revenue', icon: <Sparkles className="w-5 h-5 text-purple-400" />, color: 'border-purple-500/40 bg-purple-500/10 text-purple-300' }
  ];

  const greatWebsiteFeatures = [
    { title: 'Professional Design', desc: 'Pixel-perfect typography, modern aesthetics and clean UI that establishes instant credibility.', icon: <Sparkles className="w-5 h-5 text-cyan-400" /> },
    { title: 'Mobile Responsive', desc: 'Flawless fluid experience across smartphones, tablets, laptops and large monitors.', icon: <Smartphone className="w-5 h-5 text-emerald-400" /> },
    { title: 'Ultra-Fast Speed', desc: 'Sub-second page load times with optimized code to retain every visitor.', icon: <Zap className="w-5 h-5 text-amber-400" /> },
    { title: 'SEO Friendly', desc: 'Semantic HTML5, automated schema JSON-LD and fast indexing for top Google rank.', icon: <Search className="w-5 h-5 text-blue-400" /> },
    { title: 'Enterprise Secure', desc: 'SSL Encryption (HTTPS), automated DDoS defense and safe transaction gateways.', icon: <Lock className="w-5 h-5 text-green-400" /> },
    { title: 'Easy Navigation', desc: 'Intuitive user journey, clear menus, and smart search to find answers in 1 click.', icon: <Compass className="w-5 h-5 text-indigo-400" /> },
    { title: 'Strong High-Converting CTA', desc: 'Prominent WhatsApp, Get a Quote, and callback buttons that trigger action.', icon: <MousePointerClick className="w-5 h-5 text-pink-400" /> },
    { title: 'Useful & Engaging Content', desc: 'Clear service details, transparent pricing, case studies, and helpful FAQ answers.', icon: <FileText className="w-5 h-5 text-teal-400" /> }
  ];

  return (
    <div className="space-y-12 my-12 not-prose">
      {/* 1. Animated Flow Diagram */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            Interactive Visual Model
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-white">
            Modern Business Growth Engine
          </h3>
          <p className="text-xs sm:text-sm text-slate-400">
            How a strategic business website transforms online searches into profitable recurring revenue
          </p>
        </div>

        {/* Step Flow Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 relative">
          {flowSteps.map((item, idx) => (
            <div key={idx} className="relative group">
              <div className={`p-4 rounded-2xl border ${item.color} backdrop-blur-md flex flex-col items-center text-center space-y-2.5 transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] h-full justify-between`}>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-slate-950/60 border border-slate-700/50">
                  STEP {item.step}
                </span>

                <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>

                <div>
                  <div className="text-sm font-bold text-white group-hover:text-cyan-300 transition">
                    {item.title}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                    {item.desc}
                  </div>
                </div>
              </div>

              {idx < flowSteps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-2 -translate-y-1/2 z-20 text-slate-600">
                  <ArrowRight className="w-4 h-4 text-cyan-400/50" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 2. What Makes a Great Business Website (8 Cards) */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800/90 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              AVRX Quality Standard
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
              What Makes a Great Business Website?
            </h3>
          </div>
          <div className="text-xs text-slate-400 font-mono">
            8 Essential Pillars for 2026
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {greatWebsiteFeatures.map((feat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 w-fit mb-3 group-hover:scale-110 transition-transform">
                {feat.icon}
              </div>
              <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition">
                {feat.title}
              </h4>
              <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
