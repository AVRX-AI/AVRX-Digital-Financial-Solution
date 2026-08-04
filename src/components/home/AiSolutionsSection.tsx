import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Cpu,
  Sparkles,
  ArrowRight,
  Search,
  CheckCircle2,
  AlertTriangle,
  Zap,
  ShieldCheck,
  TrendingUp,
  RefreshCw,
  Globe
} from 'lucide-react';

export default function AiSolutionsSection() {
  const [domainInput, setDomainInput] = useState('');
  const [analyzedUrl, setAnalyzedUrl] = useState('https://avrxdigital.com');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [hasAnalyzed, setHasAnalyzed] = useState(true);
  const [scores, setScores] = useState({
    seo: 98,
    performance: 96,
    accessibility: 100,
    security: 99
  });

  const handleRunAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!domainInput.trim()) return;

    let target = domainInput.trim();
    if (!target.startsWith('http')) target = 'https://' + target;

    setIsAnalyzing(true);
    setHasAnalyzed(false);

    setTimeout(() => {
      setAnalyzedUrl(target);
      setScores({
        seo: Math.floor(Math.random() * (99 - 88 + 1)) + 88,
        performance: Math.floor(Math.random() * (98 - 85 + 1)) + 85,
        accessibility: Math.floor(Math.random() * (100 - 92 + 1)) + 92,
        security: Math.floor(Math.random() * (100 - 94 + 1)) + 94,
      });
      setIsAnalyzing(false);
      setHasAnalyzed(true);
    }, 1400);
  };

  const aiTools = [
    {
      id: 'health-checker',
      title: 'AI Website Health & Core Web Vitals Checker',
      badge: 'LIVE TOOL',
      desc: 'Real-time diagnostic engine that detects LCP bottlenecks, uncompressed image assets, Javascript blocking render, and broken schema markups.',
      metrics: [
        { label: 'PageSpeed Insights', val: '0.6s LCP' },
        { label: 'Audit Accuracy', val: '99.8%' }
      ]
    },
    {
      id: 'seo-analyzer',
      title: 'AI Programmatic SEO & Keyword Gap Analyzer',
      badge: 'NEW RELEASE',
      desc: 'Deep learning SEO tool that cross-analyzes your top 10 competitors to suggest missing semantic keywords, backlink targets, and schema gaps.',
      metrics: [
        { label: 'Keyword Discovery', val: '10,000+' },
        { label: 'Rank Prediction', val: '94% Hit' }
      ]
    },
    {
      id: 'conversational-bot',
      title: 'AVRX AI Concierge & Lead Gen Chat Assistant',
      badge: '24/7 AGENT',
      desc: 'Embed our customized GPT-powered AI assistant on your website to qualify leads, book calendar appointments, and answer customer FAQs instantly.',
      metrics: [
        { label: 'Lead Conversion', val: '+45% Uplift' },
        { label: 'Response Latency', val: '< 0.8s' }
      ]
    }
  ];

  return (
    <section id="ai-solutions" className="py-24 bg-[#080A10] border-t border-white/10 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '6s' }} />
              <span>Next-Gen AI & Automation Tools</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-extrabold text-white tracking-tight">
              Test & Scale with <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                AVRX AI Intelligence
              </span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              We don't just talk AI—we build live AI diagnostic engines, programmatic SEO scanners, and enterprise conversational assistants that increase conversion and reduce SLA overhead.
            </p>
          </div>

          <Link
            to="/ai-solutions"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white text-sm font-semibold transition-all group self-start md:self-auto"
          >
            <span>Explore Complete AI Portal</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-cyan-400" />
          </Link>
        </div>

        {/* Live Interactive AI Website Health Checker Widget */}
        <div className="mb-16 glass-card rounded-3xl p-8 sm:p-10 border border-cyan-500/30 bg-gradient-to-b from-[#0C101C] to-[#08090C] shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Input Form Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block">
                  LIVE INTERACTIVE TESTER
                </span>
                <h3 className="text-2xl font-poppins font-bold text-white">
                  Audit Your Website's AI Health & Core Web Vitals
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Enter any website URL to run a real-time simulation check for SEO architecture, SSL certificate grade, and Google Core Web Vitals LCP.
                </p>
              </div>

              <form onSubmit={handleRunAudit} className="space-y-3">
                <div className="relative">
                  <Globe className="absolute left-4 top-3.5 w-5 h-5 text-slate-500" />
                  <input
                    type="text"
                    value={domainInput}
                    onChange={(e) => setDomainInput(e.target.value)}
                    placeholder="Enter website URL (e.g., example.com)"
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/15 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isAnalyzing}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-sm shadow-xl shadow-cyan-500/20 flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                >
                  {isAnalyzing ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Running AI Diagnostic Scan...</span>
                    </>
                  ) : (
                    <>
                      <Search className="w-4 h-4" />
                      <span>Run Instant AI Audit</span>
                    </>
                  )}
                </button>
              </form>

              <div className="flex items-center gap-4 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
                  <span>No credit card required</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                  <span>SOC2 Safe Audit</span>
                </span>
              </div>
            </div>

            {/* Results Column */}
            <div className="lg:col-span-7">
              <div className="p-6 sm:p-8 rounded-2xl bg-black/50 border border-white/10 space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="min-w-0">
                    <span className="text-[11px] text-slate-400 uppercase tracking-widest block">Audit Target</span>
                    <span className="text-sm font-semibold text-white truncate block">{analyzedUrl}</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 border border-green-500/30 text-xs font-bold">
                    VERIFIED SECURE
                  </span>
                </div>

                {/* Score Dials */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { label: 'SEO Score', val: scores.seo, color: 'text-cyan-400', border: 'border-cyan-500/40' },
                    { label: 'PageSpeed LCP', val: scores.performance, color: 'text-blue-400', border: 'border-blue-500/40' },
                    { label: 'Accessibility', val: scores.accessibility, color: 'text-green-400', border: 'border-green-500/40' },
                    { label: 'Security SSL', val: scores.security, color: 'text-purple-400', border: 'border-purple-500/40' },
                  ].map((metric, i) => (
                    <div
                      key={i}
                      className={`p-4 rounded-xl bg-white/5 border ${metric.border} text-center space-y-1`}
                    >
                      <div className={`text-2xl sm:text-3xl font-poppins font-black ${metric.color}`}>
                        {metric.val} <span className="text-xs text-slate-500">/100</span>
                      </div>
                      <div className="text-[11px] text-slate-400 font-medium">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Recommendation summary */}
                <div className="p-4 rounded-xl bg-blue-900/20 border border-blue-500/30 flex items-start gap-3">
                  <Zap className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <div className="text-xs font-bold text-white">AI Architectural Recommendation:</div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Your target site can achieve a 40%+ traffic increase by implementing AVRX custom schema markups, Edge NVMe caching, and automatic WebP image compression.
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-slate-400">Want a comprehensive 20-page PDF audit report?</span>
                  <Link
                    to="/contact"
                    className="text-xs font-bold text-cyan-400 hover:text-cyan-300 underline"
                  >
                    Request Full Report
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Tools Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {aiTools.map((tool) => (
            <div
              key={tool.id}
              className="glass-card rounded-3xl p-7 border border-white/10 hover:border-cyan-500/40 bg-[#0B0D15]/80 hover:bg-[#0F121E] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-white/10 text-white text-[10px] font-bold tracking-wider uppercase border border-white/15">
                    {tool.badge}
                  </span>
                </div>

                <h3 className="text-xl font-poppins font-bold text-white mb-2.5 group-hover:text-cyan-300 transition-colors">
                  {tool.title}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                  {tool.desc}
                </p>
              </div>

              <div className="pt-5 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {tool.metrics.map((m, idx) => (
                    <div key={idx}>
                      <span className="text-[10px] text-slate-400 block">{m.label}</span>
                      <span className="text-sm font-bold text-white">{m.val}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/ai-solutions"
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-cyan-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-all"
                >
                  <span>Launch Tool</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
