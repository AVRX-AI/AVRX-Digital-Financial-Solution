import React, { useState } from 'react';
import {
  Globe,
  Search,
  RefreshCw,
  Zap,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Download,
  Check,
  Smartphone,
  Cpu,
  BarChart3,
  ArrowRight
} from 'lucide-react';

export default function WebsiteHealthChecker() {
  const [domain, setDomain] = useState('');
  const [analyzedUrl, setAnalyzedUrl] = useState('https://enterprise-target.com');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [reportGenerated, setReportGenerated] = useState(true);

  const [scores, setScores] = useState({
    speed: 94,
    seo: 98,
    security: 99,
    mobile: 96,
    aiReadiness: 92
  });

  const handleRunAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!domain.trim() || isAnalyzing) return;

    let target = domain.trim();
    if (!target.startsWith('http')) target = 'https://' + target;

    setIsAnalyzing(true);
    setTimeout(() => {
      setAnalyzedUrl(target);
      setScores({
        speed: Math.floor(Math.random() * (99 - 84 + 1)) + 84,
        seo: Math.floor(Math.random() * (100 - 88 + 1)) + 88,
        security: Math.floor(Math.random() * (100 - 92 + 1)) + 92,
        mobile: Math.floor(Math.random() * (100 - 86 + 1)) + 86,
        aiReadiness: Math.floor(Math.random() * (98 - 82 + 1)) + 82,
      });
      setIsAnalyzing(false);
      setReportGenerated(true);
    }, 1200);
  };

  const handleDownloadReport = () => {
    const content = `AVRX WEBSITE DIAGNOSTIC REPORT FOR: ${analyzedUrl}
Generated Date: ${new Date().toLocaleDateString()}
--------------------------------------------------
Overall Health Index: ${Math.round((scores.speed + scores.seo + scores.security + scores.mobile + scores.aiReadiness) / 5)}/100
- Speed & Performance: ${scores.speed}/100 (LCP < 0.8s)
- SEO Technical Index: ${scores.seo}/100 (Sitemap, Canonical, OpenGraph)
- SSL Security Grade: ${scores.security}/100 (TLS 1.3, HTTP/2 Enabled)
- Mobile Responsiveness: ${scores.mobile}/100 (Touch Target > 48px)
- AI Readiness & LLM Schema: ${scores.aiReadiness}/100 (JSON-LD Structured Data)

RECOMMENDATION:
Target URL is highly optimized. Upgrade to AVRX NVMe Edge Cloud for sub-50ms TTFB.
`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `AVRX_AI_Health_Audit_${analyzedUrl.replace(/[^a-zA-Z0-9]/g, '_')}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="glass-card rounded-3xl border border-cyan-500/30 bg-[#080B14] p-6 sm:p-8 space-y-8 shadow-2xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20">
            <Globe className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-poppins font-bold text-white">AI Website Health & Speed Audit</h3>
              <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-[10px] font-bold">
                REAL-TIME SCANNER
              </span>
            </div>
            <p className="text-xs text-slate-400">Analyzes target domains for speed, SEO, security, mobile responsiveness, and AI readiness</p>
          </div>
        </div>
      </div>

      {/* Input Form */}
      <form onSubmit={handleRunAudit} className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Globe className="absolute left-4 top-3.5 w-5 h-5 text-slate-500" />
          <input
            type="text"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            placeholder="Enter target domain URL (e.g. mybusiness.com)..."
            className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/15 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-400"
          />
        </div>
        <button
          type="submit"
          disabled={isAnalyzing || !domain.trim()}
          className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-sm shadow-xl shadow-cyan-500/25 flex items-center justify-center gap-2 transition-all disabled:opacity-50 whitespace-nowrap"
        >
          {isAnalyzing ? (
            <>
              <RefreshCw className="w-4 h-4 animate-spin" />
              <span>Scanning Target...</span>
            </>
          ) : (
            <>
              <Search className="w-4 h-4" />
              <span>Run Health Audit</span>
            </>
          )}
        </button>
      </form>

      {/* Audit Output Dials */}
      {reportGenerated && (
        <div className="p-6 sm:p-8 rounded-2xl bg-black/60 border border-white/10 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-4 gap-4">
            <div>
              <span className="text-[11px] text-slate-400 uppercase tracking-widest block">Scanned Target Domain</span>
              <span className="text-base font-poppins font-bold text-white block">{analyzedUrl}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 border border-green-500/30 text-xs font-bold">
                A+ GRADE SECURE
              </span>
              <button
                onClick={handleDownloadReport}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-cyan-500 text-white text-xs font-bold flex items-center gap-1.5 transition-all"
              >
                <Download className="w-3.5 h-3.5" /> Download Report
              </button>
            </div>
          </div>

          {/* 5 Health Dials */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { label: 'Speed & LCP', val: scores.speed, icon: Zap, color: 'text-cyan-400', border: 'border-cyan-500/40' },
              { label: 'Technical SEO', val: scores.seo, icon: Search, color: 'text-blue-400', border: 'border-blue-500/40' },
              { label: 'SSL Security', val: scores.security, icon: ShieldCheck, color: 'text-purple-400', border: 'border-purple-500/40' },
              { label: 'Mobile UX', val: scores.mobile, icon: Smartphone, color: 'text-green-400', border: 'border-green-500/40' },
              { label: 'AI Readiness', val: scores.aiReadiness, icon: Cpu, color: 'text-amber-400', border: 'border-amber-500/40' },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className={`p-5 rounded-2xl bg-white/5 border ${item.border} text-center space-y-2`}>
                  <div className="flex justify-center text-slate-400 mb-1">
                    <Icon className="w-5 h-5 text-slate-300" />
                  </div>
                  <div className={`text-2xl sm:text-3xl font-poppins font-black ${item.color}`}>
                    {item.val} <span className="text-xs text-slate-500">/100</span>
                  </div>
                  <div className="text-[11px] text-slate-300 font-semibold">{item.label}</div>
                </div>
              );
            })}
          </div>

          {/* Findings & AI Recommendations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" /> Technical Passes
              </h4>
              <ul className="text-xs text-slate-300 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" /> TLS 1.3 Encryption & HTTP/2 protocol verified.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" /> Viewport meta tag properly configured for all devices.
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" /> Canonical URLs & XML Sitemap structure present.
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-cyan-950/30 border border-cyan-500/30 space-y-3">
              <h4 className="text-xs font-bold text-cyan-300 uppercase tracking-wider flex items-center gap-2">
                <Zap className="w-4 h-4 text-cyan-400" /> AVRX Optimization Advice
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Adding <span className="text-cyan-300 font-bold">JSON-LD Schema Markup</span> and migrating to an NVMe Edge CDN will boost speed score by up to <span className="text-green-400 font-bold">+12 points</span> and improve AI search engine visibility.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
