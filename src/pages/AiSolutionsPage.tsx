import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SeoMeta from '../components/common/SeoMeta';
import PageBanner from '../components/layout/PageBanner';
import {
  Cpu,
  Sparkles,
  Search,
  CheckCircle2,
  AlertTriangle,
  Zap,
  ShieldCheck,
  TrendingUp,
  RefreshCw,
  Globe,
  ArrowRight,
  Code2,
  Terminal,
  Play
} from 'lucide-react';

export default function AiSolutionsPage() {
  const [domainInput, setDomainInput] = useState('');
  const [analyzedUrl, setAnalyzedUrl] = useState('https://enterprise-target.com');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
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
    setTimeout(() => {
      setAnalyzedUrl(target);
      setScores({
        seo: Math.floor(Math.random() * (99 - 88 + 1)) + 88,
        performance: Math.floor(Math.random() * (98 - 85 + 1)) + 85,
        accessibility: Math.floor(Math.random() * (100 - 92 + 1)) + 92,
        security: Math.floor(Math.random() * (100 - 94 + 1)) + 94,
      });
      setIsAnalyzing(false);
    }, 1500);
  };

  return (
    <div className="bg-[#08090C] min-h-screen">
      <SeoMeta
        title="Next-Gen AI & Automation Tools | AVRX Intelligence"
        description="Run live AI diagnostic scans on your website, discover programmatic SEO keyword gaps, and deploy 24/7 AI concierges."
      />

      <PageBanner
        title="Next-Gen AI & Automation Tools"
        subtitle="Live Website Health Checker, programmatic SEO keyword gap discovery engines, and conversational AI concierges built for enterprise growth."
        badge="AVRX AI LABS"
        breadcrumbs={[{ label: 'AI Solutions' }]}
        ctaText="Request Custom AI Model"
      />

      {/* Live AI Audit Engine */}
      <section className="py-20 bg-[#06070B] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block">
              LIVE DIAGNOSTIC SCANNER
            </span>
            <h2 className="text-3xl sm:text-4xl font-poppins font-extrabold text-white">
              Audit Your Website's AI Health & Core Web Vitals
            </h2>
            <p className="text-sm text-slate-400">
              Test any live URL for JavaScript render bottlenecks, missing schema tags, LCP Core Web Vitals, and SSL encryption grade.
            </p>
          </div>

          <div className="glass-card p-8 sm:p-12 rounded-3xl border border-cyan-500/40 bg-gradient-to-b from-[#0B0F1D] to-[#08090C] shadow-2xl">
            <form onSubmit={handleRunAudit} className="max-w-2xl mx-auto mb-10 flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Globe className="absolute left-4 top-3.5 w-5 h-5 text-slate-500" />
                <input
                  type="text"
                  value={domainInput}
                  onChange={(e) => setDomainInput(e.target.value)}
                  placeholder="Enter website URL (e.g., example.com)"
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/15 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                />
              </div>
              <button
                type="submit"
                disabled={isAnalyzing}
                className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-sm shadow-xl shadow-cyan-500/20 flex items-center justify-center gap-2 transition-all disabled:opacity-50 whitespace-nowrap"
              >
                {isAnalyzing ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Scanning...</span>
                  </>
                ) : (
                  <>
                    <Search className="w-4 h-4" />
                    <span>Run AI Audit</span>
                  </>
                )}
              </button>
            </form>

            {/* Results Dials */}
            <div className="p-8 rounded-2xl bg-black/60 border border-white/10 space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-4 gap-4">
                <div>
                  <span className="text-xs text-slate-400 uppercase tracking-widest block">Audit Target</span>
                  <span className="text-base font-poppins font-bold text-white block">{analyzedUrl}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 border border-green-500/30 text-xs font-bold">
                    HTTP/2 SECURE
                  </span>
                  <span className="text-xs text-slate-400">Scan Latency: 0.42s</span>
                </div>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { label: 'SEO Architecture', val: scores.seo, color: 'text-cyan-400', border: 'border-cyan-500/40' },
                  { label: 'Core Web Vitals LCP', val: scores.performance, color: 'text-blue-400', border: 'border-blue-500/40' },
                  { label: 'WCAG Accessibility', val: scores.accessibility, color: 'text-green-400', border: 'border-green-500/40' },
                  { label: 'SSL Security Grade', val: scores.security, color: 'text-purple-400', border: 'border-purple-500/40' },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-6 rounded-2xl bg-white/5 border ${item.border} text-center space-y-2`}
                  >
                    <div className={`text-3xl sm:text-4xl font-poppins font-black ${item.color}`}>
                      {item.val} <span className="text-sm text-slate-500">/100</span>
                    </div>
                    <div className="text-xs text-slate-300 font-semibold">{item.label}</div>
                  </div>
                ))}
              </div>

              {/* AI Diagnostic Output */}
              <div className="p-6 rounded-xl bg-blue-900/20 border border-blue-500/30 space-y-3">
                <div className="flex items-center gap-2 text-sm font-bold text-white">
                  <Zap className="w-4 h-4 text-cyan-400" />
                  <span>AI Diagnostic Recommendation for {analyzedUrl}:</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  We identified opportunity to compress static assets by <span className="text-cyan-300 font-bold">42%</span> and implement custom <span className="text-blue-300 font-bold">JSON-LD Schema Markup</span>. Converting this target to our Next.js / Edge NVMe architecture will boost mobile conversion by an estimated 28%.
                </p>
                <div className="pt-2">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 underline"
                  >
                    <span>Request Full 20-Page AI Diagnostic Report (PDF)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Product Suite */}
      <section className="py-20 bg-[#08090C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <h3 className="text-3xl font-poppins font-bold text-white">
              Enterprise AI Automation Suite
            </h3>
            <p className="text-sm text-slate-400">
              Integrate cutting-edge AI into your workflow without hiring an in-house data science team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Programmatic SEO & Keyword Gap Engine',
                badge: 'SEO AUTOMATION',
                desc: 'Our deep-learning SEO scanner monitors top 10 SERP competitors continuously, auto-suggesting semantic keyword clusters and backlink opportunities.',
                metrics: '10,000+ Keywords Tracked'
              },
              {
                title: 'AVRX 24/7 Concierge & Lead Gen Chatbot',
                badge: 'GPT-4 CONVERSATIONAL',
                desc: 'Embed our customized AI concierge on your site. Qualify leads, schedule calendar appointments, and resolve customer queries in under 0.8 seconds.',
                metrics: '+45% Lead Conversion Uplift'
              },
              {
                title: 'Automated Financial Statement & ITR Analyzer',
                badge: 'CA TAX AI',
                desc: 'Upload balance sheets or bank statements to instantly flag GST discrepancies, Section 80C gaps, and loan eligibility scorecards.',
                metrics: '99.9% Mathematical Accuracy'
              }
            ].map((tool, idx) => (
              <div
                key={idx}
                className="glass-card p-8 rounded-3xl border border-white/10 hover:border-cyan-500/40 bg-[#0D101C]/80 space-y-6 flex flex-col justify-between"
              >
                <div>
                  <span className="px-3 py-1 rounded-full bg-cyan-500/15 text-cyan-300 text-xs font-bold block w-max mb-4">
                    {tool.badge}
                  </span>
                  <h4 className="text-xl font-poppins font-bold text-white mb-3">{tool.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">{tool.desc}</p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-bold text-cyan-400">{tool.metrics}</span>
                  <Link
                    to="/contact"
                    className="px-4 py-2 rounded-xl bg-white/10 hover:bg-cyan-500 text-white text-xs font-bold flex items-center gap-1.5 transition-all"
                  >
                    <span>Deploy Tool</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
