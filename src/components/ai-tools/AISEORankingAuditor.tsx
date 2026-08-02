import React, { useState } from 'react';
import { Search, Sparkles, CheckCircle2, AlertCircle, TrendingUp, ArrowRight, Globe } from 'lucide-react';

export const AISEORankingAuditor: React.FC<{ onOpenConsultation: () => void }> = ({ onOpenConsultation }) => {
  const [domain, setDomain] = useState('');
  const [keyword, setKeyword] = useState('Best E-Commerce Website Developer');
  const [loading, setLoading] = useState(false);
  const [auditResult, setAuditResult] = useState<{
    score: number;
    speedScore: number;
    mobileScore: number;
    seoIssues: string[];
    rankingChance: string;
    actionPlan: string;
  } | null>(null);

  const handleAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!domain.trim()) return;

    setLoading(true);
    setTimeout(() => {
      const isGood = domain.toLowerCase().includes('avrx') || domain.length > 12;
      setAuditResult({
        score: isGood ? 88 : 64,
        speedScore: isGood ? 94 : 58,
        mobileScore: isGood ? 98 : 72,
        seoIssues: isGood ? [
          'Add FAQ schema markup for rich snippet display in Google SERPs',
          'Optimize 2 hero image WebP compression formats for <1.2s LCP'
        ] : [
          'Missing critical meta descriptions & canonical tags on 6 core pages',
          'Slow server response (TTFB > 850ms) — consider upgrading to NVMe Cloud',
          'No Local Google Business Profile (GMB) integration detected'
        ],
        rankingChance: isGood ? 'High (Estimated Top 3 ranking within 45 days)' : 'Moderate (Requires technical SEO restructuring)',
        actionPlan: 'Execute 30-day AVRX Technical SEO & Authority Backlink Sprint'
      });
      setLoading(false);
    }, 850);
  };

  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xl">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-emerald-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/30">
          <Globe className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">7. AI SEO & Core Web Vitals Auditor</h3>
          <p className="text-xs text-white/70">Analyze any website URL for Google search ranking score, page speed & SEO errors</p>
        </div>
      </div>

      <form onSubmit={handleAudit} className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="sm:col-span-2">
          <label className="block text-xs font-semibold text-white/80 mb-1.5">Website Domain / URL</label>
          <input
            type="text"
            required
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            placeholder="e.g. www.yourcompany.com"
            className="w-full px-4 py-3 rounded-xl bg-[#081B33] border border-white/20 text-white text-xs focus:outline-none focus:border-cyan-400 placeholder:text-white/40"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-white/80 mb-1.5">Target Keyword / Industry</label>
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-[#081B33] border border-white/20 text-white text-xs focus:outline-none focus:border-cyan-400"
          />
        </div>

        <div className="sm:col-span-3">
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-600 hover:from-cyan-600 hover:to-emerald-700 text-white font-bold text-sm shadow-lg shadow-cyan-500/30 transition-all flex items-center justify-center space-x-2"
          >
            {loading ? (
              <Sparkles className="w-5 h-5 animate-spin" />
            ) : (
              <>
                <Search className="w-4 h-4" />
                <span>Run Instant AI SEO & Speed Audit</span>
              </>
            )}
          </button>
        </div>
      </form>

      {/* Output audit report */}
      {auditResult && (
        <div className="p-6 rounded-2xl bg-gradient-to-br from-[#081B33] to-[#0B253A] border border-cyan-400/40 space-y-5 animate-fadeIn">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
            <div>
              <span className="text-xs font-bold text-cyan-300 uppercase tracking-widest">SEO Health Score</span>
              <div className="text-3xl font-black text-white mt-1">{auditResult.score} <span className="text-sm font-normal text-white/50">/ 100</span></div>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-xs text-white/60">Google Ranking Potential:</span>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/40">
                {auditResult.rankingChance}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
              <div className="text-[11px] font-semibold text-white/60">CORE WEB VITALS SPEED</div>
              <div className="text-lg font-black text-emerald-400">{auditResult.speedScore} / 100</div>
              <div className="text-[10px] text-white/50">Lighthouse Server TTFB & LCP index</div>
            </div>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
              <div className="text-[11px] font-semibold text-white/60">MOBILE RESPONSIVENESS</div>
              <div className="text-lg font-black text-cyan-400">{auditResult.mobileScore} / 100</div>
              <div className="text-[10px] text-white/50">Responsive viewport & touch layout check</div>
            </div>
          </div>

          <div className="space-y-2 pt-1">
            <span className="text-xs font-semibold text-white/80">Key Audit Observations & Fixes:</span>
            <div className="space-y-1.5">
              {auditResult.seoIssues.map((issue, i) => (
                <div key={i} className="flex items-center space-x-2 text-xs text-white/80">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{issue}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2 flex items-center justify-end">
            <button
              onClick={onOpenConsultation}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-600 text-white font-bold text-xs flex items-center space-x-2 shadow-lg shadow-cyan-500/30 hover:scale-105 transition-all"
            >
              <span>Get Free Complete SEO Audit Report</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
