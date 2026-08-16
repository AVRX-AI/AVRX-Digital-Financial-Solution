import React, { useState } from 'react';
import { 
  Activity, 
  Search, 
  RefreshCw, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck, 
  Zap, 
  Globe, 
  Share2, 
  ExternalLink, 
  XCircle,
  HelpCircle,
  FileCode
} from 'lucide-react';

interface AuditResult {
  url: string;
  status: number;
  statusText: string;
  responseTimeMs: number;
  isHttps: boolean;
  meta: {
    title: string | null;
    description: string | null;
    canonical: string | null;
    ogTitle: string | null;
    ogDescription: string | null;
    ogImage: string | null;
    h1Count: number;
    hasViewport: boolean;
  };
  security: {
    hsts: boolean;
    xContentTypeOptions: boolean;
    xFrameOptions: string | null;
    contentSecurityPolicy: boolean;
  };
  grade: number;
}

export const WebsiteAuditTool: React.FC = () => {
  const [urlInput, setUrlInput] = useState('https://');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [auditData, setAuditData] = useState<AuditResult | null>(null);

  const handleAudit = async (e: React.FormEvent) => {
    e.preventDefault();
    let url = urlInput.trim();
    if (!url || url === 'https://') {
      setError('Please enter a valid website URL.');
      return;
    }

    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      url = 'https://' + url;
    }

    setIsLoading(true);
    setError(null);
    setAuditData(null);

    try {
      const response = await fetch('/api/health-check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url })
      });

      const data = await response.json();
      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Audit failed. Check URL accessibility.');
      }

      setAuditData(data.data);
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Unable to audit website. Make sure the server allows automated indexing.');
    } finally {
      setIsLoading(false);
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 85) return 'text-emerald-400 border-emerald-500/40 bg-emerald-500/10';
    if (score >= 65) return 'text-cyan-400 border-cyan-500/40 bg-cyan-500/10';
    if (score >= 50) return 'text-amber-400 border-amber-500/40 bg-amber-500/10';
    return 'text-rose-400 border-rose-500/40 bg-rose-500/10';
  };

  return (
    <div className="space-y-6">
      
      {/* Search Input Bar */}
      <form onSubmit={handleAudit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-grow">
            <Globe className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
              placeholder="https://example.com or yourcompany.in"
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-900 border border-slate-700 text-white text-sm placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none font-mono"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:opacity-50 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/20 transition flex items-center justify-center gap-2 shrink-0"
          >
            {isLoading ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Auditing Live URL...</span>
              </>
            ) : (
              <>
                <Search className="w-4 h-4" />
                <span>Run Full Audit</span>
              </>
            )}
          </button>
        </div>

        {error && (
          <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}
      </form>

      {/* Audit Results Dashboard */}
      {auditData && (
        <div className="space-y-6 animate-fadeIn">
          
          {/* Top Score Banner */}
          <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 flex flex-wrap items-center justify-between gap-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-white truncate max-w-md">
                  {auditData.url}
                </h3>
                <a
                  href={auditData.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-cyan-400"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <p className="text-xs text-slate-400 flex items-center gap-3">
                <span>HTTP Status: <strong className="text-emerald-400 font-mono">{auditData.status} {auditData.statusText}</strong></span>
                <span>•</span>
                <span>Response Time: <strong className="text-cyan-400 font-mono">{auditData.responseTimeMs} ms</strong></span>
              </p>
            </div>

            {/* Score Ring */}
            <div className={`p-4 rounded-2xl border flex items-center gap-3 ${getScoreColor(auditData.grade)}`}>
              <div className="text-3xl font-black font-mono">
                {auditData.grade}
              </div>
              <div className="text-left">
                <span className="text-[10px] uppercase tracking-wider font-bold block text-slate-400">
                  Overall Health
                </span>
                <span className="text-xs font-bold">
                  {auditData.grade >= 80 ? 'Excellent' : auditData.grade >= 60 ? 'Good' : 'Needs Optimization'}
                </span>
              </div>
            </div>
          </div>

          {/* Diagnostic Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            
            {/* 1. On-Page SEO Pillar */}
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="font-bold text-white text-xs flex items-center gap-1.5">
                    <FileCode className="w-4 h-4 text-cyan-400" />
                    <span>On-Page SEO Tags</span>
                  </span>
                  <span className="text-[10px] font-mono text-cyan-400">Search Engine</span>
                </div>

                <div className="space-y-2 text-xs">
                  <div>
                    <span className="text-slate-400 block text-[11px] font-semibold">Title Tag:</span>
                    {auditData.meta.title ? (
                      <p className="text-slate-200 line-clamp-2 mt-0.5">
                        {auditData.meta.title} ({auditData.meta.title.length} chars)
                      </p>
                    ) : (
                      <span className="text-rose-400 flex items-center gap-1 mt-0.5">
                        <XCircle className="w-3.5 h-3.5" /> Missing &lt;title&gt; tag
                      </span>
                    )}
                  </div>

                  <div>
                    <span className="text-slate-400 block text-[11px] font-semibold">Meta Description:</span>
                    {auditData.meta.description ? (
                      <p className="text-slate-300 line-clamp-2 text-[11px] mt-0.5">
                        {auditData.meta.description}
                      </p>
                    ) : (
                      <span className="text-amber-400 flex items-center gap-1 mt-0.5">
                        <AlertCircle className="w-3.5 h-3.5" /> Missing meta description
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-1 border-t border-slate-800/80">
                    <span className="text-slate-400">H1 Headings:</span>
                    <span className="font-mono font-bold text-white">
                      {auditData.meta.h1Count} found
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Mobile Viewport:</span>
                    <span className={auditData.meta.hasViewport ? 'text-emerald-400 font-semibold' : 'text-rose-400'}>
                      {auditData.meta.hasViewport ? 'Configured' : 'Missing'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Security & SSL Pillar */}
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="font-bold text-white text-xs flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Security &amp; SSL Protocol</span>
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400">Protection</span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">HTTPS Encryption:</span>
                    <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Active (TLS)
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">HSTS Header:</span>
                    <span className={auditData.security.hsts ? 'text-emerald-400 font-semibold' : 'text-slate-500'}>
                      {auditData.security.hsts ? 'Enforced' : 'Not Set'}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">X-Frame-Options:</span>
                    <span className={auditData.security.xFrameOptions ? 'text-emerald-400 font-mono text-[11px]' : 'text-slate-500'}>
                      {auditData.security.xFrameOptions || 'Not Configured'}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">MIME Sniffing Defense:</span>
                    <span className={auditData.security.xContentTypeOptions ? 'text-emerald-400 font-semibold' : 'text-slate-500'}>
                      {auditData.security.xContentTypeOptions ? 'Protected' : 'Missing'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Social Media OpenGraph Pillar */}
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="font-bold text-white text-xs flex items-center gap-1.5">
                    <Share2 className="w-4 h-4 text-purple-400" />
                    <span>Social Media OpenGraph</span>
                  </span>
                  <span className="text-[10px] font-mono text-purple-400">Viral Preview</span>
                </div>

                <div className="space-y-2 text-xs">
                  <div>
                    <span className="text-slate-400 block text-[11px] font-semibold">OG Title:</span>
                    <p className="text-slate-300 line-clamp-1 mt-0.5 font-mono text-[11px]">
                      {auditData.meta.ogTitle || 'Missing og:title'}
                    </p>
                  </div>

                  <div>
                    <span className="text-slate-400 block text-[11px] font-semibold">OG Image Card:</span>
                    {auditData.meta.ogImage ? (
                      <span className="text-emerald-400 flex items-center gap-1 mt-0.5 text-[11px]">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Card Image Specified
                      </span>
                    ) : (
                      <span className="text-amber-400 flex items-center gap-1 mt-0.5 text-[11px]">
                        <AlertCircle className="w-3.5 h-3.5" /> No og:image found
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-1 border-t border-slate-800/80">
                    <span className="text-slate-400">Canonical Tag:</span>
                    <span className={auditData.meta.canonical ? 'text-emerald-400 font-semibold' : 'text-slate-500'}>
                      {auditData.meta.canonical ? 'Specified' : 'None'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Actionable Recommendations */}
          <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-3 text-xs">
            <h4 className="font-bold text-white flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>Recommended Improvements:</span>
            </h4>
            <ul className="space-y-1.5 text-slate-300 list-disc list-inside">
              {!auditData.meta.description && (
                <li>Add an optimized meta description between 140–160 characters to improve click-through rates from Google search.</li>
              )}
              {auditData.meta.h1Count !== 1 && (
                <li>Ensure exactly one primary &lt;h1&gt; heading exists on the page for clean semantic structure.</li>
              )}
              {!auditData.security.hsts && (
                <li>Enable HTTP Strict Transport Security (HSTS) header to force end-to-end encrypted connections.</li>
              )}
              {!auditData.meta.ogImage && (
                <li>Add an OpenGraph image (og:image) with 1200×630px resolution for rich previews when shared on WhatsApp, LinkedIn, and X.</li>
              )}
              {auditData.responseTimeMs > 800 && (
                <li>Server response time is above 800ms. Consider enabling edge caching or CDN optimization.</li>
              )}
            </ul>
          </div>

        </div>
      )}

    </div>
  );
};
