import React, { useState } from 'react';
import { ToolDefinition, TOOLS_LIST } from '../../data/toolsData';
import { SEO } from '../common/SEO';
import { 
  ShieldCheck, 
  HelpCircle, 
  ChevronDown, 
  ChevronRight, 
  ArrowLeft, 
  CheckCircle2, 
  Sparkles, 
  Lock, 
  ArrowRight,
  Share2,
  Check
} from 'lucide-react';

interface ToolDetailLayoutProps {
  tool: ToolDefinition;
  onBackToHub: () => void;
  onSelectTool: (toolId: string) => void;
  children: React.ReactNode;
}

export const ToolDetailLayout: React.FC<ToolDetailLayoutProps> = ({
  tool,
  onBackToHub,
  onSelectTool,
  children,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [copiedLink, setCopiedLink] = useState(false);

  const relatedTools = TOOLS_LIST.filter(t => tool.relatedToolIds.includes(t.id));

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  return (
    <div className="min-h-screen bg-[#050811] text-slate-100 pt-24 pb-20">
      <SEO
        title={`${tool.seoTitle} | AVRX Tools`}
        description={tool.seoDescription}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Breadcrumb & Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-b border-slate-800/80 pb-4">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 font-medium">
            <button
              onClick={onBackToHub}
              className="hover:text-cyan-400 transition flex items-center gap-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Tools Hub</span>
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-slate-400 capitalize">{tool.categoryLabel}</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-cyan-300 font-semibold truncate max-w-[200px] sm:max-w-none">{tool.name}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-700/70 text-slate-300 hover:text-white hover:border-cyan-500/50 text-xs font-medium transition"
              title="Copy Tool Link"
            >
              {copiedLink ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied URL</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share Tool</span>
                </>
              )}
            </button>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">100% Free &amp; Private</span>
              <span className="sm:hidden">Private</span>
            </div>
          </div>
        </div>

        {/* Tool Header Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{tool.categoryLabel}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            {tool.name}
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {tool.fullDescription}
          </p>
        </div>

        {/* 1. Main Interactive Tool Core Container */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-2xl backdrop-blur-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10">
            {children}
          </div>
        </div>

        {/* 2. Privacy & Security Notice Guarantee */}
        <div className="bg-gradient-to-r from-emerald-950/30 via-slate-900 to-cyan-950/30 border border-emerald-500/20 rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
            <Lock className="w-6 h-6" />
          </div>
          <div className="space-y-1 text-sm">
            <h4 className="font-bold text-white text-base flex items-center gap-2">
              <span>AVRX Client-Side Privacy Guarantee</span>
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">Zero Data Retention</span>
            </h4>
            <p className="text-slate-300 text-xs sm:text-sm">
              {tool.privacyNote}
            </p>
          </div>
        </div>

        {/* 3. How It Works (Step-by-Step) */}
        {tool.howItWorks && tool.howItWorks.length > 0 && (
          <div className="space-y-6">
            <div className="text-center sm:text-left">
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                How to Use {tool.name}
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-1">
                Follow these 3 simple steps to complete your task in seconds.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {tool.howItWorks.map((step) => (
                <div
                  key={step.step}
                  className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-5 space-y-3 relative overflow-hidden"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black px-2.5 py-1 rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-500/40">
                      Step 0{step.step}
                    </span>
                    <span className="text-slate-600 font-mono text-xs">#AVRX-0{step.step}</span>
                  </div>
                  <h3 className="font-bold text-white text-base">{step.title}</h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. Key Features & Highlights */}
        {tool.features && tool.features.length > 0 && (
          <div className="space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Key Features &amp; Capabilities
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {tool.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition"
                >
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-slate-200 text-xs sm:text-sm leading-relaxed">{feat}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 5. Frequently Asked Questions (Accordion) */}
        {tool.faqs && tool.faqs.length > 0 && (
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-cyan-400" />
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3">
              {tool.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-800 bg-slate-900/70 overflow-hidden transition"
                >
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-white hover:text-cyan-300 transition"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                        openFaqIndex === idx ? 'rotate-180 text-cyan-400' : ''
                      }`}
                    />
                  </button>
                  {openFaqIndex === idx && (
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-800/60 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 6. Related Tools Carousel */}
        {relatedTools.length > 0 && (
          <div className="space-y-6 pt-4 border-t border-slate-800/80">
            <div className="flex items-center justify-between">
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Explore Related Tools
              </h3>
              <button
                onClick={onBackToHub}
                className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition"
              >
                <span>View All 24 Tools</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedTools.map((relTool) => (
                <button
                  key={relTool.id}
                  onClick={() => {
                    onSelectTool(relTool.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="group text-left p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800/80 transition flex flex-col justify-between space-y-3"
                >
                  <div>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      {relTool.categoryLabel}
                    </span>
                    <h4 className="font-bold text-white text-sm mt-2 group-hover:text-cyan-300 transition">
                      {relTool.name}
                    </h4>
                    <p className="text-slate-400 text-xs line-clamp-2 mt-1">
                      {relTool.shortDescription}
                    </p>
                  </div>
                  <div className="flex items-center text-xs font-semibold text-cyan-400 gap-1 pt-2 border-t border-slate-800/60">
                    <span>Use Tool</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* 7. AVRX Services Enterprise CTA */}
        <div className="rounded-3xl bg-gradient-to-r from-blue-950/60 via-slate-900 to-cyan-950/60 border border-blue-500/30 p-6 sm:p-10 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              AVRX Business Solutions
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Need Custom AI, Web, or Financial Systems?
            </h3>
            <p className="text-slate-300 text-sm max-w-2xl">
              From enterprise software and high-speed NVMe hosting to MSME business loans and automated tax filing — AVRX empowers over 500+ Indian enterprises.
            </p>
          </div>
          <a
            href="https://wa.me/919999999999?text=Hello%20AVRX%20Team,%20I%20am%20using%20your%20Tools%20Hub%20and%20interested%20in%20business%20solutions."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25 transition transform hover:-translate-y-0.5 flex items-center gap-2"
          >
            <span>Consult an Expert</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
};
