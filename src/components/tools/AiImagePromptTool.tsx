import React, { useState } from 'react';
import { 
  Sparkles, 
  Copy, 
  Check, 
  RefreshCw, 
  AlertCircle, 
  Camera, 
  Layers, 
  Sliders, 
  Sun,
  Eye
} from 'lucide-react';

export const AiImagePromptTool: React.FC = () => {
  const [concept, setConcept] = useState('');
  const [style, setStyle] = useState('Photorealistic 8K');
  const [lighting, setLighting] = useState('Cinematic Volumetric Rays');
  const [camera, setCamera] = useState('85mm Portrait f/1.4 Lens');
  const [aspectRatio, setAspectRatio] = useState('16:9');
  const [engineTarget, setEngineTarget] = useState('Midjourney v6 & Flux.1');

  const [prompts, setPrompts] = useState<{ label: string; text: string; negative?: string; params?: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const handleGeneratePrompts = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!concept.trim()) {
      setError('Please provide an image concept or subject description.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setPrompts([]);

    try {
      const compositeInput = `Concept: ${concept}
Aesthetic Style: ${style}
Lighting: ${lighting}
Camera & Lens: ${camera}
Aspect Ratio: ${aspectRatio}
Target Engine: ${engineTarget}`;

      const response = await fetch('/api/tools/ai-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: compositeInput
        })
      });

      const data = await response.json();
      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Generation failed.');
      }

      // Parse structured prompts or provide structured breakdown
      const rawText = data.result || '';
      const promptBlocks: { label: string; text: string; negative?: string; params?: string }[] = [];

      // Extract sections if formatted, or construct 3 distinct variations
      const arTag = aspectRatio === '16:9' ? '--ar 16:9' : aspectRatio === '9:16' ? '--ar 9:16' : aspectRatio === '1:1' ? '--ar 1:1' : '--ar 4:3';

      promptBlocks.push({
        label: 'Master Cinematic Prompt',
        text: rawText.length > 50 ? rawText : `${concept}, ${style}, ${lighting}, ${camera}, award-winning photography, photorealistic, intricate details, 8k resolution`,
        negative: 'blurry, distorted, low quality, oversaturated, watermark, grainy, extra limbs',
        params: `${arTag} --v 6.0 --style raw --q 2`
      });

      promptBlocks.push({
        label: 'Hyper-Realistic Commercial Concept',
        text: `High-end commercial stock photography of ${concept}, captured with ${camera}, bathed in ${lighting}, crisp textures, clean studio aesthetic, Hasselblad medium format color science`,
        negative: 'cartoon, 3D render, cartoonish, low-res, bad anatomy, cropped',
        params: `${arTag} --v 6.0`
      });

      promptBlocks.push({
        label: 'Artistic Atmosphere & Mood',
        text: `Atmospheric visual of ${concept}, styled as ${style}, dramatic ${lighting}, volumetric depth, dynamic framing, rich subtle shadows, unreal engine 5 render feel`,
        negative: 'flat lighting, amateurish, ugly, plastic look, text, logo',
        params: `${arTag} --stylize 250`
      });

      setPrompts(promptBlocks);
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Failed to craft prompts.');
    } finally {
      setIsLoading(false);
    }
  };

  const copyPromptText = (fullText: string, index: number) => {
    navigator.clipboard.writeText(fullText);
    setCopiedIdx(index);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  return (
    <div className="space-y-6">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Form: Visual Modifiers */}
        <form onSubmit={handleGeneratePrompts} className="lg:col-span-5 space-y-4 bg-slate-950/60 p-5 sm:p-7 rounded-2xl border border-slate-800">
          
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Core Visual Concept / Subject <span className="text-rose-400">*</span>
            </label>
            <textarea
              rows={3}
              value={concept}
              onChange={(e) => setConcept(e.target.value)}
              placeholder="E.g., Futuristic robotic financial advisor analyzing holographic stock charts in a sleek glass penthouse overlooking Mumbai at dusk..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none leading-relaxed"
              required
            />
          </div>

          <div className="space-y-1.5 text-xs">
            <label className="font-semibold text-slate-400 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span>Artistic Style</span>
            </label>
            <select
              value={style}
              onChange={(e) => setStyle(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-cyan-400 focus:outline-none"
            >
              <option value="Photorealistic 8K">Photorealistic 8K / Real Life</option>
              <option value="Cinematic Movie Still (35mm Film)">Cinematic Movie Still (35mm Film)</option>
              <option value="3D Blender Isometric Render">3D Blender Isometric Render</option>
              <option value="Cyberpunk Neon Sci-Fi">Cyberpunk Neon Sci-Fi</option>
              <option value="Minimalist Luxury Editorial">Minimalist Luxury Editorial</option>
              <option value="Digital Oil Painting">Digital Oil Painting / Matte Artwork</option>
              <option value="Anime / Studio Ghibli Aesthetic">Anime / Studio Ghibli Aesthetic</option>
            </select>
          </div>

          <div className="space-y-1.5 text-xs">
            <label className="font-semibold text-slate-400 flex items-center gap-1.5">
              <Sun className="w-3.5 h-3.5 text-amber-400" />
              <span>Lighting Condition</span>
            </label>
            <select
              value={lighting}
              onChange={(e) => setLighting(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-cyan-400 focus:outline-none"
            >
              <option value="Cinematic Volumetric Rays">Cinematic Volumetric God Rays</option>
              <option value="Golden Hour Sunset Glow">Golden Hour Sunset Glow</option>
              <option value="High-End Studio Softbox Lighting">High-End Studio Softbox Lighting</option>
              <option value="Moody Cyberpunk Neon Rim Light">Moody Cyberpunk Neon Rim Light</option>
              <option value="Natural Diffused Daylight">Natural Diffused Daylight</option>
              <option value="Dark Low-Key Dramatic Lighting">Dark Low-Key Dramatic Lighting</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="space-y-1.5">
              <label className="font-semibold text-slate-400 flex items-center gap-1">
                <Camera className="w-3 h-3 text-purple-400" />
                <span>Camera / Lens</span>
              </label>
              <select
                value={camera}
                onChange={(e) => setCamera(e.target.value)}
                className="w-full px-2.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-cyan-400 focus:outline-none text-[11px]"
              >
                <option value="85mm Portrait f/1.4 Lens">85mm Portrait f/1.4</option>
                <option value="24mm Wide-Angle Cinematic">24mm Wide-Angle</option>
                <option value="100mm Macro Lens Close-up">100mm Macro Close-Up</option>
                <option value="Drone Aerial 4K Top-Down">Drone Aerial 4K</option>
                <option value="GoPro Action Perspective">GoPro Action Perspective</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="font-semibold text-slate-400">Aspect Ratio</label>
              <select
                value={aspectRatio}
                onChange={(e) => setAspectRatio(e.target.value)}
                className="w-full px-2.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-cyan-400 focus:outline-none text-[11px]"
              >
                <option value="16:9">16:9 (Landscape Web/YouTube)</option>
                <option value="9:16">9:16 (Vertical Reel/TikTok)</option>
                <option value="1:1">1:1 (Square Instagram/Post)</option>
                <option value="4:3">4:3 (Classic Frame)</option>
              </select>
            </div>
          </div>

          {error && (
            <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-start gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading || !concept.trim()}
            className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:opacity-50 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/20 transition flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Crafting AI Prompts...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>Generate High-Converting Prompts</span>
              </>
            )}
          </button>

        </form>

        {/* Right Output: Ready-to-use Prompt Cards */}
        <div className="lg:col-span-7 space-y-4">
          
          {isLoading ? (
            <div className="p-12 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col items-center justify-center space-y-3 text-slate-400 min-h-[380px]">
              <div className="w-10 h-10 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin" />
              <p className="text-xs font-medium animate-pulse">Engineering precision prompts with lighting &amp; camera metadata...</p>
            </div>
          ) : prompts.length > 0 ? (
            <div className="space-y-4">
              {prompts.map((p, idx) => {
                const completeCopy = `${p.text} ${p.params || ''}`;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-slate-700 transition space-y-3 shadow-lg"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-cyan-400 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>{p.label}</span>
                      </span>

                      <button
                        onClick={() => copyPromptText(completeCopy, idx)}
                        className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-semibold transition flex items-center gap-1"
                      >
                        {copiedIdx === idx ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-cyan-400" />}
                        <span>{copiedIdx === idx ? 'Copied!' : 'Copy Prompt'}</span>
                      </button>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80 text-xs text-slate-200 font-mono leading-relaxed">
                      {p.text}
                      {p.params && <span className="text-cyan-400 font-bold ml-1.5">{p.params}</span>}
                    </div>

                    {p.negative && (
                      <div className="text-[11px] text-slate-400 flex items-start gap-1.5">
                        <span className="text-rose-400 font-bold shrink-0">Negative Prompt:</span>
                        <span className="font-mono">{p.negative}</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="p-12 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col items-center justify-center text-center space-y-3 text-slate-500 min-h-[380px]">
              <Camera className="w-10 h-10 opacity-30" />
              <p className="text-xs max-w-sm">
                Describe your visual idea on the left and select your favorite style, camera, and lighting to generate tailored prompts for Midjourney, Flux.1, and DALL-E 3.
              </p>
            </div>
          )}

        </div>

      </div>

    </div>
  );
};
