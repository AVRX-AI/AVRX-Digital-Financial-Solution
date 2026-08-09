import React, { useState } from 'react';
import {
  Image as ImageIcon,
  Sparkles,
  Download,
  RefreshCw,
  Layers,
  Zap,
  Sliders,
  CheckCircle2,
  Box,
  Share2
} from 'lucide-react';

export default function TextToImageAi() {
  const [prompt, setPrompt] = useState('Cyberpunk 3D glassmorphic fintech dashboard UI mockup with neon blue holograms');
  const [selectedStyle, setSelectedStyle] = useState('Glassmorphic 3D');
  const [selectedAspect, setSelectedAspect] = useState('1:1');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [provider, setProvider] = useState<string>('Gemini 3.1 Flash Lite Image');

  const stylePresets = [
    { label: 'Glassmorphic 3D', desc: 'Frosted neon glass, realistic lighting, floating layers' },
    { label: 'Cyberpunk Hologram', desc: 'Futuristic glowing grid, cyan/purple laser optics' },
    { label: 'Minimalist Clay 3D', desc: 'Soft pastel 3D claymation, studio illumination' },
    { label: 'Metallic Chrome', desc: 'High-shine silver chrome texture, liquid reflection' },
    { label: 'Neo-Futuristic Studio', desc: 'Ultra-clean dark matte, isometric CAD architecture' }
  ];

  const aspectRatios = [
    { label: 'Square (1:1)', val: '1:1', width: 800, height: 800 },
    { label: 'Banner (16:9)', val: '16:9', width: 1280, height: 720 },
    { label: 'Card (4:3)', val: '4:3', width: 960, height: 720 },
    { label: 'Mobile (9:16)', val: '9:16', width: 720, height: 1280 }
  ];

  const handleGenerate = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!prompt.trim() || isGenerating) return;

    setIsGenerating(true);

    try {
      const response = await fetch('/api/gemini/generate-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: prompt.trim(),
          aspectRatio: selectedAspect,
          style: selectedStyle
        })
      });

      const data = await response.json();
      if (data.imageUrl) {
        setGeneratedImage(data.imageUrl);
        setProvider(data.provider || 'Gemini 3.1 Flash Lite Image');
      }
    } catch (err) {
      console.error('Image gen error:', err);
      // Fallback placeholder image
      setGeneratedImage(`https://picsum.photos/seed/${encodeURIComponent(prompt)}/800/800`);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownload = () => {
    if (!generatedImage) return;
    const link = document.createElement('a');
    link.href = generatedImage;
    link.download = `AVRX_3D_Mockup_${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="glass-card rounded-3xl border border-cyan-500/30 bg-[#080B14] p-6 sm:p-8 space-y-8 shadow-2xl">
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20">
            <ImageIcon className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-poppins font-bold text-white">Text to 3D Image AI Generator</h3>
              <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-[10px] font-bold">
                Nano Banana / Gemini 3.1
              </span>
            </div>
            <p className="text-xs text-slate-400">Generate downloadable 3D visual mockups & asset graphics from text prompts</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Input Controls Panel */}
        <div className="lg:col-span-5 space-y-6">
          <form onSubmit={handleGenerate} className="space-y-4">
            <div>
              <label className="text-xs font-bold text-slate-300 block mb-2 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Enter Visual Prompt
              </label>
              <textarea
                rows={3}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="E.g., Futuristic 3D banking credit card floating in dark neon background with holographic light flares..."
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-400 resize-none"
              />
            </div>

            {/* Style Selector */}
            <div>
              <label className="text-xs font-bold text-slate-300 block mb-2 uppercase tracking-wider flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5 text-cyan-400" /> 3D Render Style
              </label>
              <div className="grid grid-cols-1 gap-2">
                {stylePresets.map((s) => (
                  <button
                    key={s.label}
                    type="button"
                    onClick={() => setSelectedStyle(s.label)}
                    className={`p-3 rounded-xl border text-left transition-all flex items-center justify-between ${
                      selectedStyle === s.label
                        ? 'bg-cyan-500/15 border-cyan-500/50 text-white'
                        : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                    }`}
                  >
                    <div>
                      <div className="text-xs font-bold">{s.label}</div>
                      <div className="text-[10px] text-slate-400">{s.desc}</div>
                    </div>
                    {selectedStyle === s.label && <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Aspect Ratio */}
            <div>
              <label className="text-xs font-bold text-slate-300 block mb-2 uppercase tracking-wider">
                Aspect Ratio
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {aspectRatios.map((a) => (
                  <button
                    key={a.val}
                    type="button"
                    onClick={() => setSelectedAspect(a.val)}
                    className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all ${
                      selectedAspect === a.val
                        ? 'bg-cyan-500/20 border-cyan-500/40 text-cyan-300'
                        : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                    }`}
                  >
                    {a.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={isGenerating || !prompt.trim()}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-sm shadow-xl shadow-cyan-500/25 flex items-center justify-center gap-2 transition-all disabled:opacity-50"
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin text-white" />
                  <span>Rendering 3D Visual...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Generate 3D Visual Mockup</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Live Preview Canvas */}
        <div className="lg:col-span-7 flex flex-col justify-between p-6 rounded-2xl bg-black/60 border border-white/10 relative overflow-hidden min-h-[420px]">
          <div className="flex items-center justify-between pb-4 border-b border-white/10 z-10">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
              <Box className="w-4 h-4 text-cyan-400" /> 3D Canvas Stage
            </span>
            {generatedImage && (
              <span className="text-[11px] text-cyan-300 font-bold px-2.5 py-0.5 rounded-full bg-cyan-500/20 border border-cyan-500/30">
                {provider}
              </span>
            )}
          </div>

          <div className="flex-1 flex items-center justify-center my-6 relative z-10">
            {isGenerating ? (
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full border-4 border-cyan-500/20 border-t-cyan-400 animate-spin mx-auto" />
                <p className="text-xs text-cyan-300 font-bold">Synthesizing 3D render depth maps...</p>
              </div>
            ) : generatedImage ? (
              <div className="relative group max-w-full overflow-hidden rounded-2xl border border-white/15 shadow-2xl">
                <img
                  src={generatedImage}
                  alt="3D Generated Mockup"
                  referrerPolicy="no-referrer"
                  className="max-h-[380px] w-auto object-contain rounded-2xl transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 justify-between">
                  <span className="text-xs text-white font-medium truncate max-w-[200px]">{prompt}</span>
                  <button
                    onClick={handleDownload}
                    className="p-2.5 rounded-xl bg-cyan-500 text-white font-bold text-xs shadow-lg flex items-center gap-1.5 hover:bg-cyan-400"
                  >
                    <Download className="w-4 h-4" /> Download
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center p-8 border border-dashed border-white/15 rounded-2xl max-w-sm space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto text-slate-500">
                  <ImageIcon className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-bold text-white">No 3D Visual Rendered Yet</h4>
                <p className="text-xs text-slate-400">Click "Generate 3D Visual Mockup" to create a realistic 3D graphic asset.</p>
                <button
                  onClick={() => handleGenerate()}
                  className="px-4 py-2 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/30 text-xs font-bold transition-all"
                >
                  Generate Sample 3D Mockup
                </button>
              </div>
            )}
          </div>

          {generatedImage && (
            <div className="pt-4 border-t border-white/10 flex items-center justify-between z-10">
              <span className="text-xs text-slate-400 truncate max-w-[250px]">Style: {selectedStyle}</span>
              <button
                onClick={handleDownload}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-bold flex items-center gap-2 shadow-lg shadow-cyan-500/20 transition-all"
              >
                <Download className="w-4 h-4" /> Download 3D Visual (PNG)
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
