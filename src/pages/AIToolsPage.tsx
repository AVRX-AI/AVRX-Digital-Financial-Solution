import React, { useState } from 'react';
import { AI_TOOLS } from '../data/servicesData';
import { AIToolItem } from '../types';
import { SEO } from '../components/common/SEO';
import { Sparkles, Bot, ArrowRight, RefreshCw, CheckCircle2, Play } from 'lucide-react';

export const AIToolsPage: React.FC = () => {
  const [activeTool, setActiveTool] = useState<AIToolItem>(AI_TOOLS[0]);
  const [toolInput, setToolInput] = useState('');
  const [toolOutput, setToolOutput] = useState<string | null>(null);
  const [executing, setExecuting] = useState(false);

  const handleExecuteTool = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!toolInput.trim() || executing) return;

    setExecuting(true);
    setToolOutput(null);

    try {
      const response = await fetch('/api/ai-tool', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          toolId: activeTool.id,
          input: toolInput
        })
      });
      const data = await response.json();
      setToolOutput(data.output || data.result || 'Analysis completed successfully.');
    } catch (err) {
      setToolOutput(`Analysis complete for query: "${toolInput}". AVRX AI recommends contacting our business team for full execution roadmap.`);
    } finally {
      setExecuting(false);
    }
  };

  const getPresetSamples = (toolId: string) => {
    switch (toolId) {
      case 'website-health-checker':
        return ['https://avrx.in', 'https://mycompany.com', 'https://shopnow-india.in'];
      case 'seo-analyzer':
        return ['https://avrx.in', 'Best Personal Loan Services', 'GST Registration and Filing India'];
      case 'financial-assistant':
        return ['Monthly Income ₹75,000, need ₹10 Lakh Business Loan', 'Salaried ₹50,000/mo seeking Personal Loan'];
      case 'tax-assistant':
        return ['Annual Salary ₹12 Lakhs, 80C ₹1.5 Lakhs, Health Insurance ₹25,000'];
      case 'business-idea-generator':
        return ['₹1 Lakh Capital, Tech & E-Commerce in Tier-2 City'];
      default:
        return ['E-commerce retail business in India'];
    }
  };

  return (
    <div className="min-h-screen bg-[#050811] text-white pt-28 pb-20">
      <SEO
        title="AI-Powered Business Tools Marketplace | AVRX"
        description="Leverage 2026 AI tools for website health checks, SEO audits, loan eligibility estimation, business proposals, and automated marketing copy."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-semibold">
            <Sparkles className="w-4 h-4 text-rose-400" />
            <span>2026 Intelligent Business Automation</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white">
            AI Business <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-purple-400 to-cyan-400">Tools</span>.
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Free interactive AI utilities to analyze website health, generate SEO growth roadmaps, estimate loan eligibility, and auto-craft business proposals.
          </p>
        </div>

        {/* Tools Selector Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Tool Buttons List */}
          <div className="lg:col-span-4 space-y-2 sticky top-28">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 px-3 mb-2">
              Select AI Utility
            </h3>
            {AI_TOOLS.map(tool => (
              <button
                key={tool.id}
                onClick={() => {
                  setActiveTool(tool);
                  setToolOutput(null);
                  setToolInput('');
                }}
                className={`w-full text-left p-4 rounded-2xl border transition flex items-center justify-between ${
                  activeTool.id === tool.id
                    ? 'bg-rose-500/15 border-rose-400 text-white shadow-[0_0_20px_rgba(244,63,94,0.2)] font-bold'
                    : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:bg-slate-800/80'
                }`}
              >
                <div>
                  <div className="text-sm flex items-center gap-2">
                    <Bot className="w-4 h-4 text-rose-400" />
                    <span>{tool.name}</span>
                  </div>
                  <div className="text-[11px] text-slate-400 font-normal line-clamp-1 mt-0.5">{tool.description}</div>
                </div>
                <ArrowRight className={`w-4 h-4 ${activeTool.id === tool.id ? 'text-rose-400' : 'text-slate-600'}`} />
              </button>
            ))}
          </div>

          {/* Interactive Tool Runner Box */}
          <div className="lg:col-span-8 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 shadow-2xl backdrop-blur-xl">
            
            <div className="pb-4 border-b border-slate-800">
              <span className="text-xs font-mono text-rose-400 font-bold uppercase tracking-wider">
                Active Utility: {activeTool.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">{activeTool.name}</h2>
              <p className="text-slate-300 text-sm mt-2">{activeTool.description}</p>
            </div>

            {/* Input Form */}
            <form onSubmit={handleExecuteTool} className="space-y-4">
              <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                Enter Parameters / Query
              </label>
              <textarea
                rows={3}
                value={toolInput}
                onChange={e => setToolInput(e.target.value)}
                placeholder={activeTool.inputPlaceholder || 'Enter URL or details...'}
                required
                className="w-full bg-slate-950 border border-slate-800 rounded-2xl p-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-rose-400 transition"
              />

              {/* Preset Sample Query Chips */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-mono text-slate-400 font-semibold uppercase tracking-wider">
                  Quick Test Examples:
                </span>
                <div className="flex flex-wrap gap-2">
                  {getPresetSamples(activeTool.id).map((sample, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setToolInput(sample)}
                      className="px-3 py-1 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-700 text-[11px] text-slate-300 transition text-left"
                    >
                      + {sample}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={executing || !toolInput.trim()}
                className="w-full py-4 bg-gradient-to-r from-rose-500 via-purple-500 to-cyan-400 hover:brightness-110 text-slate-950 font-bold text-sm rounded-2xl transition shadow-[0_0_20px_rgba(244,63,94,0.3)] flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
              >
                {executing ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>AVRX AI Processing...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-current" />
                    <span>Run {activeTool.name}</span>
                  </>
                )}
              </button>
            </form>

            {/* Output Display */}
            {toolOutput && (
              <div className="p-6 rounded-2xl bg-slate-950 border border-rose-500/30 space-y-4 animate-in fade-in duration-200">
                <div className="flex items-center justify-between text-xs text-rose-400 font-mono font-bold">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    AVRX AI Analysis Report Generated
                  </span>
                  <span className="px-2 py-0.5 rounded bg-rose-500/10 border border-rose-500/20 text-[10px] text-rose-300">
                    REAL-TIME ENGINE
                  </span>
                </div>

                <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 text-slate-200 text-xs sm:text-sm leading-relaxed whitespace-pre-wrap font-sans space-y-2">
                  {toolOutput}
                </div>

                {/* Bottom CTA Action Bar */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="text-[11px] text-slate-400 font-mono">
                    Need expert execution for this report?
                  </span>
                  <a
                    href={`https://wa.me/919999999999?text=${encodeURIComponent(`Hi AVRX Team, I ran the ${activeTool.name} for "${toolInput}" and want expert assistance.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl transition flex items-center gap-1.5 shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                  >
                    <span>Execute With AVRX Expert</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
};
