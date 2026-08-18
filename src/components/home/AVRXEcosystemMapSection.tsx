import React, { useState } from 'react';
import { 
  Sparkles, 
  Code2, 
  Smartphone, 
  TrendingUp, 
  Share2, 
  DollarSign, 
  ShieldCheck, 
  FileText, 
  Cpu, 
  Zap, 
  BarChart3, 
  Server, 
  ArrowRight,
  Briefcase
} from 'lucide-react';

interface AVRXEcosystemMapSectionProps {
  onNavigate: (page: string, slug?: string) => void;
}

interface EcosystemNode {
  id: string;
  label: string;
  category: string;
  color: string;
  icon: React.ElementType;
  page: string;
  slug?: string;
  desc: string;
}

export const AVRXEcosystemMapSection: React.FC<AVRXEcosystemMapSectionProps> = ({ onNavigate }) => {
  const [activeNodeId, setActiveNodeId] = useState<string>('website');

  const nodes: EcosystemNode[] = [
    { id: 'website', label: 'Website', category: 'Build', color: 'from-cyan-400 to-blue-500', icon: Code2, page: 'service-detail', slug: 'website-design', desc: 'Custom, high-speed responsive web platform engineered for conversions.' },
    { id: 'app', label: 'Mobile App', category: 'Build', color: 'from-cyan-400 to-blue-500', icon: Smartphone, page: 'service-detail', slug: 'app-development', desc: 'Native Android & iOS smartphone apps with cloud backend sync.' },
    { id: 'seo', label: 'SEO & Ranking', category: 'Grow', color: 'from-emerald-400 to-teal-500', icon: TrendingUp, page: 'service-detail', slug: 'seo', desc: 'Page-1 organic Google Search keyword ranking dominance.' },
    { id: 'marketing', label: 'Lead Ads', category: 'Grow', color: 'from-emerald-400 to-teal-500', icon: Share2, page: 'service-detail', slug: 'digital-marketing', desc: 'Targeted Google Ads & Meta performance buyer acquisition.' },
    { id: 'finance', label: 'Business Capital', category: 'Finance', color: 'from-amber-400 to-orange-500', icon: DollarSign, page: 'service-detail', slug: 'business-loan', desc: 'Collateral-free business loans up to ₹1 Crore with fast sanctions.' },
    { id: 'insurance', label: 'Insurance Shield', category: 'Protect', color: 'from-purple-400 to-pink-500', icon: ShieldCheck, page: 'insurance-solutions', slug: 'health-insurance', desc: 'Cashless medical, motor, and commercial property risk cover.' },
    { id: 'tax', label: 'GST & Compliance', category: 'Protect', color: 'from-blue-400 to-cyan-500', icon: FileText, page: 'service-detail', slug: 'gst', desc: '100% on-time statutory GST & ITR returns with zero penalties.' },
    { id: 'ai', label: 'AI Suite', category: 'Automate', color: 'from-rose-400 to-indigo-500', icon: Cpu, page: 'ai-tools', desc: 'In-browser productivity tools, Document AI, and custom AI copilots.' },
    { id: 'automation', label: 'Workflow Automation', category: 'Automate', color: 'from-rose-400 to-indigo-500', icon: Zap, page: 'ai-tools', desc: 'Automated CRM, invoicing, and customer WhatsApp notification bots.' },
    { id: 'analytics', label: 'Analytics & CRO', category: 'Grow', color: 'from-emerald-400 to-teal-500', icon: BarChart3, page: 'service-detail', slug: 'seo', desc: 'Real-time conversion tracking, funnel diagnostics & ROI metrics.' },
    { id: 'hosting', label: 'Cloud NVMe Hosting', category: 'Build', color: 'from-cyan-400 to-blue-500', icon: Server, page: 'hosting-products', desc: 'Sub-100ms ultra-fast cloud server infrastructure with 99.9% uptime.' }
  ];

  const activeNode = nodes.find(n => n.id === activeNodeId) || nodes[0];

  return (
    <section className="py-24 bg-[#050811] relative overflow-hidden">
      
      {/* Background illumination */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-gradient-to-tr from-cyan-500/10 via-purple-500/5 to-emerald-500/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-5xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-bold font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Unified Platform Ecosystem</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            AVRX Ecosystem{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              Neural Map
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            All pillars orbit around your core enterprise. Click any node in the constellation to explore how it accelerates your business.
          </p>
        </div>

        {/* Neural Network Visualization Canvas */}
        <div className="rounded-3xl bg-slate-950/90 border border-cyan-500/30 p-6 sm:p-10 backdrop-blur-2xl shadow-2xl space-y-8">
          
          {/* Central Enterprise Core with Orbital Nodes */}
          <div className="relative py-12 flex items-center justify-center min-h-[380px]">
            
            {/* Concentric Orbital Rings */}
            <div className="absolute w-[280px] sm:w-[380px] h-[280px] sm:h-[380px] rounded-full border border-cyan-500/15 animate-[spin_60s_linear_infinite]" />
            <div className="absolute w-[440px] sm:w-[580px] h-[440px] sm:h-[580px] rounded-full border border-blue-500/10 animate-[spin_90s_linear_infinite_reverse]" />

            {/* Central Node: YOUR BUSINESS */}
            <div className="relative z-20 p-6 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-cyan-400 shadow-[0_0_40px_rgba(0,240,255,0.4)] text-center space-y-1">
              <div className="p-3 mx-auto w-12 h-12 rounded-2xl bg-cyan-500 text-slate-950 flex items-center justify-center font-black shadow-lg">
                <Briefcase className="w-6 h-6" />
              </div>
              <div className="text-sm font-black text-white uppercase tracking-wider">
                YOUR BUSINESS
              </div>
              <div className="text-[10px] text-cyan-300 font-mono">
                CENTRAL INTELLIGENCE
              </div>
            </div>

          </div>

          {/* 11 Clickable Interactive Nodes Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {nodes.map(node => {
              const Icon = node.icon;
              const isActive = node.id === activeNodeId;

              return (
                <button
                  key={node.id}
                  onClick={() => setActiveNodeId(node.id)}
                  className={`p-3.5 rounded-2xl text-left transition-all duration-200 border flex flex-col justify-between space-y-2 cursor-pointer ${
                    isActive
                      ? 'bg-slate-900 border-cyan-400 shadow-[0_0_20px_rgba(0,240,255,0.3)] scale-103 z-10'
                      : 'bg-slate-950/80 hover:bg-slate-900 border-slate-800 text-slate-400'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className={`p-2 rounded-xl bg-slate-950 border border-slate-800 ${isActive ? 'text-cyan-400' : 'text-slate-500'}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[9px] font-mono uppercase text-slate-500">
                      {node.category}
                    </span>
                  </div>

                  <div>
                    <div className={`text-xs font-bold ${isActive ? 'text-white' : 'text-slate-300'}`}>
                      {node.label}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Node Detail Card */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className={`p-3 rounded-2xl bg-gradient-to-r ${activeNode.color} text-slate-950 font-black shrink-0`}>
                <activeNode.icon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">
                  {activeNode.label} Pillar Integration
                </h4>
                <p className="text-xs text-slate-300 mt-0.5">
                  {activeNode.desc}
                </p>
              </div>
            </div>

            <button
              onClick={() => onNavigate(activeNode.page, activeNode.slug)}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer shadow-lg shrink-0"
            >
              <span>Explore {activeNode.label}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
