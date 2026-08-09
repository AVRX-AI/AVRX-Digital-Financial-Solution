import React, { useState } from 'react';
import {
  Globe,
  Sparkles,
  RefreshCw,
  Monitor,
  Tablet,
  Smartphone,
  Eye,
  Code,
  Layers,
  ArrowRight,
  Zap,
  Shield,
  CheckCircle2,
  Copy,
  Check,
  RotateCcw
} from 'lucide-react';

interface WireframeData {
  title: string;
  tagline: string;
  description: string;
  themeColor: string;
  heroCta: string;
  secondaryCta: string;
  stats: { label: string; value: string }[];
  features: { title: string; description: string; icon?: string }[];
  threeDElements: string[];
}

export default function PromptToWebsiteAi() {
  const [prompt, setPrompt] = useState('Fintech MSME Business Loan Portal with instant approval AI calculator');
  const [isGenerating, setIsGenerating] = useState(false);
  const [viewport, setViewport] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [enable3dPerspective, setEnable3dPerspective] = useState(true);
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [copied, setCopied] = useState(false);

  const [wireframe, setWireframe] = useState<WireframeData>({
    title: 'AVRX Lending Node 3D',
    tagline: 'Instant AI-Powered MSME & Corporate Loan Capital',
    description: 'Get verified MSME loans up to ₹1 Crore with sub-second credit scorecards and automated GST reconciliation.',
    themeColor: 'cyan',
    heroCta: 'Apply for Loan Now',
    secondaryCta: 'Calculate EMI Payout',
    stats: [
      { label: 'Max Loan Sanction', value: '₹1,00,00,000' },
      { label: 'Approval Speed', value: '15 Mins' },
      { label: 'Starting Interest', value: '8.5% p.a.' }
    ],
    features: [
      { title: 'Zero Collateral Capital', description: 'Quick working capital backed by CGTMSE credit guarantee scheme.', icon: 'zap' },
      { title: 'Automated GST Verification', description: 'Instant tax compliance check via GST portal integration.', icon: 'shield' },
      { title: '3D Real-time Repayment Visualizer', description: 'Interactive slider breakdowns for tenure and monthly interest.', icon: 'sparkles' }
    ],
    threeDElements: [
      'Interactive Glassmorphic Loan Slider Stage',
      'Rotating 3D Holographic Credit Score Ring',
      'Float-Motion Parallax Verification Badge'
    ]
  });

  const handleGenerateWireframe = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!prompt.trim() || isGenerating) return;

    setIsGenerating(true);

    try {
      const response = await fetch('/api/gemini/generate-website', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: prompt.trim() })
      });

      const data = await response.json();
      if (data.wireframe) {
        setWireframe(data.wireframe);
      }
    } catch (err) {
      console.error('Website gen error:', err);
    } finally {
      setIsGenerating(false);
    }
  };

  const samplePrompts = [
    "Luxury E-commerce Watch Store with 3D Configurator",
    "CA Tax Consultancy & GST Filing Portal with ITR Calculator",
    "Enterprise AI Software SaaS Landing Page with NVMe Edge SLA"
  ];

  const generatedCode = `<!-- Generated 3D Wireframe Snippet for: ${wireframe.title} -->
<section className="bg-[#08090C] text-white py-20">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center space-y-4">
      <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold uppercase">
        ${wireframe.title}
      </span>
      <h1 className="text-4xl font-extrabold">${wireframe.tagline}</h1>
      <p className="text-slate-400 max-w-2xl mx-auto">${wireframe.description}</p>
      <div className="pt-4 flex justify-center gap-4">
        <button className="px-6 py-3 rounded-xl bg-cyan-500 text-white font-bold">${wireframe.heroCta}</button>
        <button className="px-6 py-3 rounded-xl bg-white/10 text-white font-bold">${wireframe.secondaryCta}</button>
      </div>
    </div>
  </div>
</section>`;

  const copyCode = () => {
    navigator.clipboard.writeText(generatedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="glass-card rounded-3xl border border-cyan-500/30 bg-[#080B14] p-6 sm:p-8 space-y-8 shadow-2xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20">
            <Globe className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-poppins font-bold text-white">Prompt to 3D Website AI Generator</h3>
              <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-[10px] font-bold">
                Gemini 3.6 Wireframe AI
              </span>
            </div>
            <p className="text-xs text-slate-400">Generate live 3D website wireframe previews from client prompts in real time</p>
          </div>
        </div>

        {/* Viewport & 3D Controls */}
        <div className="flex items-center gap-2 bg-black/60 p-1.5 rounded-2xl border border-white/10 self-start sm:self-auto">
          <button
            onClick={() => setViewport('desktop')}
            className={`p-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1 ${
              viewport === 'desktop' ? 'bg-cyan-500 text-white shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Monitor className="w-4 h-4" />
            <span className="hidden sm:inline">Desktop</span>
          </button>
          <button
            onClick={() => setViewport('tablet')}
            className={`p-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1 ${
              viewport === 'tablet' ? 'bg-cyan-500 text-white shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Tablet className="w-4 h-4" />
            <span className="hidden sm:inline">Tablet</span>
          </button>
          <button
            onClick={() => setViewport('mobile')}
            className={`p-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1 ${
              viewport === 'mobile' ? 'bg-cyan-500 text-white shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Smartphone className="w-4 h-4" />
            <span className="hidden sm:inline">Mobile</span>
          </button>

          <div className="w-px h-6 bg-white/10 mx-1" />

          <button
            onClick={() => setEnable3dPerspective(!enable3dPerspective)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${
              enable3dPerspective
                ? 'bg-cyan-500/20 border-cyan-500/40 text-cyan-300'
                : 'bg-white/5 border-white/10 text-slate-400'
            }`}
          >
            3D Tilt {enable3dPerspective ? 'ON' : 'OFF'}
          </button>
        </div>
      </div>

      {/* Prompt Form */}
      <form onSubmit={handleGenerateWireframe} className="space-y-3">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe the website concept (e.g. MSME loan application portal with 3D calculator)..."
            className="flex-1 px-4 py-3.5 rounded-xl bg-white/5 border border-white/15 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-400"
          />
          <button
            type="submit"
            disabled={isGenerating || !prompt.trim()}
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-sm shadow-xl shadow-cyan-500/25 flex items-center justify-center gap-2 transition-all disabled:opacity-50 whitespace-nowrap"
          >
            {isGenerating ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Building 3D Wireframe...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>Generate 3D Wireframe</span>
              </>
            )}
          </button>
        </div>

        <div className="flex items-center gap-2 flex-wrap text-xs text-slate-400 pt-1">
          <span className="font-bold text-cyan-400">Samples:</span>
          {samplePrompts.map((sp, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                setPrompt(sp);
              }}
              className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-cyan-500/20 border border-white/10 text-slate-300 transition-colors"
            >
              {sp}
            </button>
          ))}
        </div>
      </form>

      {/* Viewport Preview Stage */}
      <div className="space-y-4">
        <div className="flex items-center justify-between bg-black/40 p-2 rounded-xl border border-white/10">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('preview')}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'preview' ? 'bg-cyan-500 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Eye className="w-3.5 h-3.5" /> Live 3D Wireframe Stage
            </button>
            <button
              onClick={() => setActiveTab('code')}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'code' ? 'bg-cyan-500 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Code className="w-3.5 h-3.5" /> JSX Code Snippet
            </button>
          </div>
          <span className="text-[11px] text-slate-400 hidden sm:inline">Viewport: {viewport.toUpperCase()}</span>
        </div>

        {activeTab === 'preview' ? (
          <div className="flex justify-center items-center py-6 bg-[#04060A] rounded-3xl border border-white/10 overflow-hidden relative min-h-[500px]">
            {/* 3D Wireframe Container with Perspective Transform */}
            <div
              className={`transition-all duration-500 rounded-3xl border border-cyan-500/40 bg-gradient-to-b from-[#0B0F1D] to-[#070A12] shadow-2xl p-6 sm:p-10 space-y-8 overflow-hidden relative ${
                enable3dPerspective ? 'transform perspective-1000 rotateX-6 rotateY-[-4deg] shadow-cyan-500/10' : ''
              } ${
                viewport === 'desktop'
                  ? 'w-full max-w-4xl'
                  : viewport === 'tablet'
                  ? 'w-[640px]'
                  : 'w-[360px]'
              }`}
            >
              {/* Browser Bar */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="text-xs text-slate-400 ml-2 font-mono">https://avrx-3d-wireframe.preview</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-[10px] font-bold uppercase">
                  LIVE 3D MODEL
                </span>
              </div>

              {/* Wireframe Hero Section */}
              <div className="text-center space-y-4 max-w-2xl mx-auto py-6">
                <span className="px-3 py-1 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 text-xs font-bold inline-block">
                  {wireframe.title}
                </span>
                <h2 className="text-2xl sm:text-4xl font-poppins font-black text-white leading-tight">
                  {wireframe.tagline}
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {wireframe.description}
                </p>
                <div className="pt-2 flex flex-wrap justify-center gap-3">
                  <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-xs shadow-lg shadow-cyan-500/20 flex items-center gap-2">
                    <span>{wireframe.heroCta}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs border border-white/10">
                    {wireframe.secondaryCta}
                  </button>
                </div>
              </div>

              {/* 3D Wireframe Stats Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-y border-white/10 py-6">
                {wireframe.stats.map((st, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10 text-center space-y-1">
                    <div className="text-lg font-extrabold text-cyan-400">{st.value}</div>
                    <div className="text-[11px] text-slate-400 font-semibold">{st.label}</div>
                  </div>
                ))}
              </div>

              {/* Wireframe Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {wireframe.features.map((ft, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-2">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <h4 className="text-xs font-bold text-white">{ft.title}</h4>
                    <p className="text-[11px] text-slate-400">{ft.description}</p>
                  </div>
                ))}
              </div>

              {/* 3D Elements Specs Badge */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-cyan-950/40 to-blue-950/40 border border-cyan-500/30 space-y-2">
                <div className="text-xs font-bold text-cyan-300 flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-cyan-400" /> Active 3D Render Components:
                </div>
                <div className="flex flex-wrap gap-2">
                  {wireframe.threeDElements.map((el, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[10px] text-slate-300">
                      • {el}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Code View */
          <div className="p-6 rounded-2xl bg-[#060810] border border-white/10 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-xs font-bold text-slate-300 font-mono">React Component Wireframe</span>
              <button
                onClick={copyCode}
                className="px-3 py-1.5 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-bold flex items-center gap-1.5"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy Code'}</span>
              </button>
            </div>
            <pre className="p-4 rounded-xl bg-black/80 text-cyan-300 text-xs font-mono overflow-x-auto leading-relaxed border border-white/5">
              {generatedCode}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
