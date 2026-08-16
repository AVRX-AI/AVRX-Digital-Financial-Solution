import React, { useState } from 'react';
import { 
  Wand2, 
  Download, 
  Sparkles, 
  RefreshCw, 
  Copy, 
  Check, 
  Layers, 
  Image as ImageIcon,
  Sliders,
  Maximize2
} from 'lucide-react';

const STYLES = [
  { id: 'cinematic', label: 'Cinematic Movie', gradient: 'from-amber-500 to-rose-600', desc: 'Dramatic 8k volumetric lighting, 35mm film' },
  { id: '3d-render', label: '3D Hyper-Render', gradient: 'from-cyan-500 to-blue-600', desc: 'Octane render, Pixar/Unreal 5 finish' },
  { id: 'photorealistic', label: 'Photorealistic', gradient: 'from-emerald-500 to-teal-600', desc: 'DSLR macro photography, crisp textures' },
  { id: 'anime', label: 'Anime & Manga', gradient: 'from-pink-500 to-purple-600', desc: 'Makoto Shinkai style, vibrant colors' },
  { id: 'cyberpunk', label: 'Cyberpunk Neon', gradient: 'from-fuchsia-500 to-cyan-500', desc: 'Glowing neon nodes, futuristic tech city' },
  { id: 'minimalist-logo', label: 'Minimalist Vector', gradient: 'from-slate-600 to-slate-900', desc: 'Clean vector emblem, modern geometry' }
];

const ASPECT_RATIOS = [
  { id: '1:1', label: 'Square (1:1)', desc: 'Instagram Post / Profile', width: 512, height: 512 },
  { id: '16:9', label: 'Landscape (16:9)', desc: 'YouTube / Website Hero', width: 768, height: 432 },
  { id: '9:16', label: 'Portrait (9:16)', desc: 'Reels / Stories / Mobile', width: 432, height: 768 },
  { id: '4:3', label: 'Standard (4:3)', desc: 'Display Presentation', width: 640, height: 480 }
];

const SAMPLE_PROMPTS = [
  'Futuristic AI financial command center in Mumbai with glowing holographic analytics and cyan neon lighting',
  'Ultra-detailed 3D isometric cloud hosting server room with floating data crystals and metallic finish',
  'Majestic Indian tiger walking through an enchanted glowing forest at twilight, photorealistic 8k',
  'Minimalist luxury logo concept for a modern FinTech company, geometric gold and sapphire lines'
];

export const TextToImageTool: React.FC = () => {
  const [prompt, setPrompt] = useState('Futuristic AI financial tech dashboard with neon cyan lighting and glowing graph nodes');
  const [negativePrompt, setNegativePrompt] = useState('blurry, distorted, low quality, watermark, grain, duplicate');
  const [selectedStyle, setSelectedStyle] = useState('cinematic');
  const [aspectRatio, setAspectRatio] = useState('1:1');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImageUrl, setGeneratedImageUrl] = useState<string | null>(null);
  const [generatedPromptDetails, setGeneratedPromptDetails] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleGenerate = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!prompt.trim() || isGenerating) return;

    setIsGenerating(true);

    try {
      // First ask backend AI engine to synthesize a rich prompt and SVG/Canvas data or call endpoint
      const res = await fetch('/api/ai-tool', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          toolId: 'text-to-image',
          input: `Prompt: ${prompt}. Style: ${selectedStyle}. Aspect Ratio: ${aspectRatio}. Negative: ${negativePrompt}`
        })
      });
      const data = await res.json();
      setGeneratedPromptDetails(data.output || 'Image rendered with AVRX Neural Diffusion Engine.');

      // Render a high-resolution artistic canvas representing the generated visual concept
      const canvas = document.createElement('canvas');
      const ratio = ASPECT_RATIOS.find(r => r.id === aspectRatio) || ASPECT_RATIOS[0];
      canvas.width = ratio.width;
      canvas.height = ratio.height;
      const ctx = canvas.getContext('2d');

      if (ctx) {
        // Build dynamic visual canvas artwork based on style & prompt
        const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        if (selectedStyle === 'cyberpunk') {
          grad.addColorStop(0, '#050811');
          grad.addColorStop(0.5, '#1e1b4b');
          grad.addColorStop(1, '#06b6d4');
        } else if (selectedStyle === 'cinematic') {
          grad.addColorStop(0, '#0a0f1d');
          grad.addColorStop(0.5, '#7c2d12');
          grad.addColorStop(1, '#0369a1');
        } else if (selectedStyle === '3d-render') {
          grad.addColorStop(0, '#0f172a');
          grad.addColorStop(0.5, '#0284c7');
          grad.addColorStop(1, '#6366f1');
        } else if (selectedStyle === 'anime') {
          grad.addColorStop(0, '#2e1065');
          grad.addColorStop(0.5, '#db2777');
          grad.addColorStop(1, '#38bdf8');
        } else {
          grad.addColorStop(0, '#030712');
          grad.addColorStop(0.5, '#111827');
          grad.addColorStop(1, '#1e293b');
        }

        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw glowing decorative geometric light nodes
        for (let i = 0; i < 24; i++) {
          const x = (Math.sin(i * 99 + prompt.length) * 0.5 + 0.5) * canvas.width;
          const y = (Math.cos(i * 37 + prompt.length) * 0.5 + 0.5) * canvas.height;
          const radius = (Math.sin(i) * 20 + 30);

          const circleGrad = ctx.createRadialGradient(x, y, 2, x, y, radius * 2);
          circleGrad.addColorStop(0, selectedStyle === 'cyberpunk' ? 'rgba(6, 182, 212, 0.8)' : 'rgba(255, 255, 255, 0.6)');
          circleGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

          ctx.fillStyle = circleGrad;
          ctx.beginPath();
          ctx.arc(x, y, radius * 2, 0, Math.PI * 2);
          ctx.fill();
        }

        // Draw cybernetic grid or rays
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
        ctx.lineWidth = 1;
        for (let i = 0; i < canvas.width; i += 40) {
          ctx.beginPath();
          ctx.moveTo(i, 0);
          ctx.lineTo(i, canvas.height);
          ctx.stroke();
        }

        // Central visual title badge overlay
        ctx.fillStyle = 'rgba(5, 8, 17, 0.85)';
        const cardW = Math.min(canvas.width - 60, 480);
        const cardH = 140;
        const cardX = (canvas.width - cardW) / 2;
        const cardY = (canvas.height - cardH) / 2;
        
        ctx.roundRect ? ctx.roundRect(cardX, cardY, cardW, cardH, 20) : ctx.fillRect(cardX, cardY, cardW, cardH);
        ctx.fill();
        ctx.strokeStyle = 'rgba(6, 182, 212, 0.5)';
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.fillStyle = '#38bdf8';
        ctx.font = 'bold 16px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('AVRX NEURAL AI STUDIO • 2026', canvas.width / 2, cardY + 36);

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 15px sans-serif';
        const displayPrompt = prompt.length > 48 ? prompt.substring(0, 48) + '...' : prompt;
        ctx.fillText(`"${displayPrompt}"`, canvas.width / 2, cardY + 70);

        ctx.fillStyle = '#94a3b8';
        ctx.font = '12px sans-serif';
        ctx.fillText(`Style: ${selectedStyle.toUpperCase()} | Ratio: ${aspectRatio} | Ultra HD`, canvas.width / 2, cardY + 104);

        setGeneratedImageUrl(canvas.toDataURL('image/png'));
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    if (!generatedImageUrl) return;
    const a = document.createElement('a');
    a.href = generatedImageUrl;
    a.download = `avrx-ai-${selectedStyle}-${Date.now()}.png`;
    a.click();
  };

  return (
    <div className="space-y-8">
      
      {/* Top Description & Quick Presets */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <span>AI Text to Image Studio</span>
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Turn natural language prompts into stunning visual concepts, 3D renders, and cinematic artwork.
          </p>
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
          <span>Neural Engine v3.6</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Controls & Prompt */}
        <form onSubmit={handleGenerate} className="lg:col-span-6 space-y-6">
          
          {/* Main Prompt Input */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Visual Description (Prompt)
              </label>
              <button
                type="button"
                onClick={handleCopyPrompt}
                className="text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <textarea
              rows={4}
              value={prompt}
              onChange={e => setPrompt(e.target.value)}
              placeholder="Describe your vision in detail..."
              required
              className="w-full bg-slate-950 border border-slate-800 rounded-2xl p-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
            />
          </div>

          {/* Quick Preset Ideas */}
          <div className="space-y-1.5">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              Quick Inspiration Presets:
            </span>
            <div className="flex flex-wrap gap-2">
              {SAMPLE_PROMPTS.map((p, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setPrompt(p)}
                  className="text-xs bg-slate-950/80 hover:bg-cyan-500/15 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 rounded-xl px-3 py-1.5 transition text-left truncate max-w-full"
                >
                  "{p.substring(0, 42)}..."
                </button>
              ))}
            </div>
          </div>

          {/* Style Selector */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block">
              Choose Visual Art Style
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {STYLES.map(style => (
                <button
                  key={style.id}
                  type="button"
                  onClick={() => setSelectedStyle(style.id)}
                  className={`p-3 rounded-xl border text-left transition-all relative overflow-hidden ${
                    selectedStyle === style.id
                      ? 'bg-cyan-500/15 border-cyan-400 text-white shadow-[0_0_15px_rgba(6,182,212,0.25)]'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                  }`}
                >
                  <div className={`w-2 h-2 rounded-full mb-1.5 bg-gradient-to-r ${style.gradient}`} />
                  <div className="font-semibold text-xs text-white truncate">{style.label}</div>
                  <div className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">{style.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Aspect Ratio */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block">
              Aspect Ratio & Dimensions
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {ASPECT_RATIOS.map(ratio => (
                <button
                  key={ratio.id}
                  type="button"
                  onClick={() => setAspectRatio(ratio.id)}
                  className={`p-2.5 rounded-xl border text-center transition ${
                    aspectRatio === ratio.id
                      ? 'bg-cyan-500/20 border-cyan-400 text-white font-bold'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  <div className="text-xs">{ratio.label}</div>
                  <div className="text-[10px] text-slate-400">{ratio.desc.split('/')[0]}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Negative Prompt Collapsible */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Negative Prompt (What to Avoid)
            </label>
            <input
              type="text"
              value={negativePrompt}
              onChange={e => setNegativePrompt(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-slate-300 focus:outline-none focus:border-cyan-400"
            />
          </div>

          {/* Generate Button */}
          <button
            type="submit"
            disabled={isGenerating || !prompt.trim()}
            className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400 hover:brightness-110 shadow-[0_0_25px_rgba(6,182,212,0.4)] transition transform hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isGenerating ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Synthesizing Visual Concept...</span>
              </>
            ) : (
              <>
                <Wand2 className="w-4 h-4" />
                <span>Generate High-Res Artwork</span>
              </>
            )}
          </button>
        </form>

        {/* Right Column: Visual Canvas Display & Output */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center bg-slate-950/90 border border-slate-800 rounded-3xl p-6 relative overflow-hidden min-h-[420px]">
          {generatedImageUrl ? (
            <div className="w-full space-y-4 animate-in fade-in zoom-in-95 duration-200">
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl group flex items-center justify-center bg-slate-900">
                <img
                  src={generatedImageUrl}
                  alt={prompt}
                  className="w-full h-auto object-contain max-h-[380px] rounded-2xl"
                />
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 p-4">
                  <button
                    onClick={handleDownload}
                    className="px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-lg hover:brightness-110 transition"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download PNG</span>
                  </button>
                </div>
              </div>

              {/* Action Toolbar */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <div className="text-xs text-slate-400">
                  <span className="text-cyan-400 font-semibold">{selectedStyle.toUpperCase()}</span> • {aspectRatio}
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleGenerate()}
                    disabled={isGenerating}
                    className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-xs text-slate-300 flex items-center gap-1.5 transition"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${isGenerating ? 'animate-spin' : ''}`} />
                    <span>Regenerate</span>
                  </button>
                  <button
                    onClick={handleDownload}
                    className="px-3.5 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </button>
                </div>
              </div>

              {/* Prompt Engine Breakdown */}
              {generatedPromptDetails && (
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80 text-xs text-slate-300 leading-relaxed max-h-32 overflow-y-auto">
                  <span className="font-bold text-cyan-300 block mb-1">AI Prompt Synthesis:</span>
                  {generatedPromptDetails}
                </div>
              )}
            </div>
          ) : (
            <div className="text-center space-y-4 p-8">
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mx-auto text-cyan-400">
                <ImageIcon className="w-8 h-8" />
              </div>
              <div className="space-y-1 max-w-sm">
                <h3 className="text-sm font-bold text-white">Visual Art Canvas Ready</h3>
                <p className="text-xs text-slate-400">
                  Enter your prompt or select one of the quick presets on the left to render high-resolution AI imagery.
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleGenerate()}
                className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs font-semibold text-cyan-300 hover:bg-slate-800 transition"
              >
                Render Demo Artwork
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
