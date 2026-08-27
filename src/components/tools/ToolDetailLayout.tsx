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
  Check,
  Zap,
  Star,
  Users,
  Cpu,
  Layers,
  Award,
  Clock,
  ExternalLink
} from 'lucide-react';

interface ToolDetailLayoutProps {
  tool: ToolDefinition;
  onBackToHub: () => void;
  onSelectTool: (toolSlug: string) => void;
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

  const relatedTools = TOOLS_LIST.filter(t => tool.relatedToolIds.includes(t.id) || tool.relatedToolIds.includes(t.slug));

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      const shareUrl = `${window.location.origin}/ai-tools/${tool.slug}`;
      navigator.clipboard.writeText(shareUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const gradientClass = tool.gradient || 'from-cyan-500 via-blue-600 to-indigo-600';

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 pt-24 pb-24 relative overflow-hidden">
      <SEO
        title={`${tool.seoTitle}`}
        description={tool.seoDescription}
      />

      {/* Dynamic Background Neon Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-cyan-500/10 via-blue-600/10 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-gradient-to-br from-purple-600/10 via-pink-600/10 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-gradient-to-br from-emerald-500/10 via-teal-600/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Top Breadcrumb & Share Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-b border-slate-800/80 pb-4">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 font-medium">
            <button
              onClick={onBackToHub}
              className="hover:text-cyan-400 transition flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>All AI Tools</span>
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-slate-400 capitalize px-2 py-0.5 rounded bg-slate-900/40">{tool.categoryLabel}</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-cyan-300 font-semibold truncate max-w-[180px] sm:max-w-none">{tool.name}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-slate-300 hover:text-white hover:border-cyan-400 text-xs font-semibold shadow-md transition transform hover:-translate-y-0.5"
              title="Copy Tool Permalink"
            >
              {copiedLink ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-bold">Copied Tool Link</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Share Tool</span>
                </>
              )}
            </button>

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>100% Free &amp; Private</span>
            </div>
          </div>
        </div>

        {/* Tool Hero Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4 pt-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/40 text-cyan-300 text-xs font-bold shadow-lg shadow-cyan-500/10">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>{tool.categoryLabel}</span>
            {tool.badge && (
              <>
                <span className="w-1 h-1 rounded-full bg-cyan-400" />
                <span className="text-emerald-400">{tool.badge}</span>
              </>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            <span className={`bg-gradient-to-r ${gradientClass} bg-clip-text text-transparent`}>
              {tool.name}
            </span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto font-normal">
            {tool.fullDescription}
          </p>

          {/* Quick Metrics Badge Strip */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 pt-2">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-300">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>Instant Response (&lt;1s)</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-300">
              <Lock className="w-3.5 h-3.5 text-emerald-400" />
              <span>Zero Data Logging</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-300">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>4.9 / 5.0 Rating</span>
            </div>
          </div>
        </div>

        {/* 1. Main Interactive Working Tool Component */}
        <div className="relative rounded-3xl bg-slate-950/90 border border-slate-800 p-4 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-2xl overflow-hidden group">
          {/* Subtle Cyber Glowing Outline & Glow Accents */}
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-purple-500/5 pointer-events-none" />
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10">
            {children}
          </div>
        </div>

        {/* 2. Why We Use This Service / Core Value Proposition */}
        {tool.whyUseThis && tool.whyUseThis.length > 0 && (
          <div className="space-y-6 pt-4">
            <div className="flex items-center gap-2">
              <Award className="w-6 h-6 text-cyan-400" />
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Why Use AVRX {tool.name}?
                </h2>
                <p className="text-xs sm:text-sm text-slate-400">
                  Key advantages and benefits engineered for precision, speed, and privacy.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {tool.whyUseThis.map((reason, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800/80 p-5 space-y-2.5 hover:border-cyan-500/40 transition-all duration-300 group"
                >
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-mono font-bold text-xs group-hover:scale-110 transition-transform">
                    0{idx + 1}
                  </div>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {reason}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. Step-by-Step Usage Guide (How It Works) */}
        {tool.howItWorks && tool.howItWorks.length > 0 && (
          <div className="space-y-6 pt-4">
            <div className="flex items-center gap-2">
              <Clock className="w-6 h-6 text-emerald-400" />
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  How to Use {tool.name} (Step-by-Step)
                </h2>
                <p className="text-xs sm:text-sm text-slate-400">
                  Simple workflow to execute and export results in under 30 seconds.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {tool.howItWorks.map((step) => (
                <div
                  key={step.step}
                  className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6 space-y-3 relative overflow-hidden hover:border-emerald-500/40 transition duration-300"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black px-3 py-1 rounded-xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-300 border border-emerald-500/40">
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

        {/* 4. Key Features & Capabilities Grid */}
        {tool.features && tool.features.length > 0 && (
          <div className="space-y-6 pt-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-purple-400" />
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Key Features &amp; Capabilities
                </h2>
                <p className="text-xs sm:text-sm text-slate-400">
                  Built-in tools, parameters, and enterprise-grade functions.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {tool.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3.5 p-4 sm:p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-purple-500/40 hover:bg-slate-900/90 transition-all duration-200"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-slate-200 text-xs sm:text-sm leading-relaxed font-medium">{feat}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 5. Real-World Applications & Use Cases */}
        {tool.useCases && tool.useCases.length > 0 && (
          <div className="space-y-6 pt-4">
            <div className="flex items-center gap-2">
              <Users className="w-6 h-6 text-amber-400" />
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Real-World Applications &amp; Use Cases
                </h2>
                <p className="text-xs sm:text-sm text-slate-400">
                  Who uses this tool and how it accelerates daily productivity.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {tool.useCases.map((uc, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-slate-900/80 border border-slate-800 p-5 space-y-2 flex flex-col justify-between hover:border-amber-500/40 transition duration-300"
                >
                  <div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/30">
                      {uc.audience}
                    </span>
                    <h4 className="font-bold text-white text-sm mt-2.5">
                      {uc.title}
                    </h4>
                    <p className="text-slate-300 text-xs mt-1 leading-relaxed">
                      {uc.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 6. Technical Specifications & Privacy Guarantee */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-4 items-stretch">
          
          {/* Tech Specs Table */}
          {tool.techSpecs && tool.techSpecs.length > 0 && (
            <div className="lg:col-span-7 bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-7 space-y-4">
              <div className="flex items-center gap-2">
                <Cpu className="w-5 h-5 text-cyan-400" />
                <h3 className="text-base sm:text-lg font-bold text-white">
                  Technical Specifications
                </h3>
              </div>

              <div className="divide-y divide-slate-800/80">
                {tool.techSpecs.map((spec, idx) => (
                  <div key={idx} className="py-3 flex items-center justify-between text-xs sm:text-sm gap-4">
                    <span className="text-slate-400 font-medium">{spec.label}</span>
                    <span className="text-white font-mono font-semibold text-right">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Privacy Guarantee Box */}
          <div className={`${tool.techSpecs && tool.techSpecs.length > 0 ? 'lg:col-span-5' : 'lg:col-span-12'} bg-gradient-to-br from-emerald-950/30 via-slate-900 to-cyan-950/30 border border-emerald-500/30 rounded-3xl p-6 sm:p-7 flex flex-col justify-between space-y-4`}>
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
                <Lock className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-base sm:text-lg flex items-center gap-2">
                <span>AVRX Client-Side Privacy Guarantee</span>
              </h4>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {tool.privacyNote}
              </p>
            </div>

            <div className="pt-2 border-t border-emerald-500/20 flex items-center gap-2 text-emerald-400 text-xs font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>Zero Persistent Tracking • TLS 1.3 Encrypted</span>
            </div>
          </div>

        </div>

        {/* 7. Frequently Asked Questions (FAQ Accordion) */}
        {tool.faqs && tool.faqs.length > 0 && (
          <div className="space-y-6 pt-4">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-cyan-400" />
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Frequently Asked Questions
                </h2>
                <p className="text-xs sm:text-sm text-slate-400">
                  Got questions? We've got answers.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {tool.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-800 bg-slate-900/70 overflow-hidden transition"
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

        {/* 8. Related Working Tools */}
        {relatedTools.length > 0 && (
          <div className="space-y-6 pt-6 border-t border-slate-800/80">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Explore Related Working Tools
                </h3>
                <p className="text-xs text-slate-400">
                  Switch to other fully functional tools in this suite.
                </p>
              </div>
              <button
                onClick={onBackToHub}
                className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition"
              >
                <span>View All 29 Tools</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedTools.map((relTool) => (
                <button
                  key={relTool.id}
                  onClick={() => {
                    onSelectTool(relTool.slug);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="group text-left p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/60 hover:bg-slate-800/80 transition-all duration-300 flex flex-col justify-between space-y-4 shadow-lg hover:shadow-cyan-500/10"
                >
                  <div className="space-y-2">
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-lg bg-slate-800 text-slate-300 border border-slate-700">
                      {relTool.categoryLabel}
                    </span>
                    <h4 className="font-bold text-white text-sm group-hover:text-cyan-300 transition">
                      {relTool.name}
                    </h4>
                    <p className="text-slate-400 text-xs line-clamp-2 leading-relaxed">
                      {relTool.shortDescription}
                    </p>
                  </div>
                  <div className="flex items-center text-xs font-bold text-cyan-400 gap-1.5 pt-3 border-t border-slate-800/60 group-hover:translate-x-1 transition-transform">
                    <span>Open Working Tool</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* 9. AVRX Services Enterprise CTA Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-blue-950/80 via-slate-900 to-indigo-950/80 border border-cyan-500/30 p-6 sm:p-10 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5 justify-center sm:justify-start">
              <Sparkles className="w-3.5 h-3.5" />
              <span>AVRX Business Solutions</span>
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Need Custom AI, Web, or Financial Systems?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
              From enterprise web apps and NVMe Cloud Hosting to MSME collateral-free business loans, GST compliance, and motor/health insurance — AVRX empowers over 500+ businesses across India.
            </p>
          </div>
          <a
            href="https://wa.me/919999999999?text=Hello%20AVRX%20Team,%20I%20am%20using%20your%20Tools%20Hub%20and%20interested%20in%20business%20solutions."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-xs sm:text-sm shadow-xl shadow-cyan-500/25 transition transform hover:-translate-y-0.5 flex items-center gap-2"
          >
            <span>Consult an Expert on WhatsApp</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
};
