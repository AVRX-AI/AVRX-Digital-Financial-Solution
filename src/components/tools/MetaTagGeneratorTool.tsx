import React, { useState } from 'react';
import { 
  FileCode, 
  Copy, 
  Check, 
  Globe, 
  Share2, 
  Eye, 
  Smartphone, 
  Monitor, 
  Download, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export const MetaTagGeneratorTool: React.FC = () => {
  const [title, setTitle] = useState('AVRX Digital & Financial Solution | Insurance, Loans & Web Tools');
  const [description, setDescription] = useState('Comprehensive digital solutions, insurance advisory, loan management, and high-performance business web development by AVRX in India.');
  const [siteUrl, setSiteUrl] = useState('https://avrx.in');
  const [keywords, setKeywords] = useState('insurance, loans, digital solutions, web development, gst calculator, emi calculator');
  const [author, setAuthor] = useState('AVRX Digital & Financial Solution');
  const [ogImage, setOgImage] = useState('https://avrx.in/og-image.jpg');
  const [twitterHandle, setTwitterHandle] = useState('@avrx_in');
  const [robotsIndex, setRobotsIndex] = useState('index, follow');
  const [previewMode, setPreviewMode] = useState<'google' | 'social'>('google');
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'mobile'>('desktop');
  const [copied, setCopied] = useState(false);

  const generatedHtml = `<!-- Primary Meta Tags -->
<title>${title}</title>
<meta name="title" content="${title}">
<meta name="description" content="${description}">
<meta name="keywords" content="${keywords}">
<meta name="author" content="${author}">
<meta name="robots" content="${robotsIndex}">
<link rel="canonical" href="${siteUrl}">

<!-- Open Graph / Facebook / WhatsApp / LinkedIn -->
<meta property="og:type" content="website">
<meta property="og:url" content="${siteUrl}">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${description}">
<meta property="og:image" content="${ogImage}">
<meta property="og:site_name" content="${author}">

<!-- Twitter / X -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:url" content="${siteUrl}">
<meta name="twitter:title" content="${title}">
<meta name="twitter:description" content="${description}">
<meta name="twitter:image" content="${ogImage}">
${twitterHandle ? `<meta name="twitter:site" content="${twitterHandle}">` : ''}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedHtml);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([generatedHtml], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `meta_tags_avrx.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-8">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Inputs Form */}
        <div className="lg:col-span-6 space-y-4 bg-slate-950/60 p-5 sm:p-7 rounded-2xl border border-slate-800">
          
          {/* Title */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs">
              <label className="font-semibold text-slate-300">Page Title</label>
              <span className={`font-mono ${title.length > 60 ? 'text-amber-400 font-bold' : 'text-slate-400'}`}>
                {title.length}/60 chars
              </span>
            </div>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:border-cyan-400 focus:outline-none"
            />
          </div>

          {/* Description */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs">
              <label className="font-semibold text-slate-300">Meta Description</label>
              <span className={`font-mono ${description.length > 160 ? 'text-amber-400 font-bold' : 'text-slate-400'}`}>
                {description.length}/160 chars
              </span>
            </div>
            <textarea
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:border-cyan-400 focus:outline-none leading-relaxed"
            />
          </div>

          {/* Canonical URL & Author */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="space-y-1.5">
              <label className="font-semibold text-slate-400">Canonical Website URL</label>
              <input
                type="url"
                value={siteUrl}
                onChange={(e) => setSiteUrl(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-cyan-400 focus:outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-semibold text-slate-400">Author / Brand Name</label>
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-cyan-400 focus:outline-none"
              />
            </div>
          </div>

          {/* OG Image & Twitter Handle */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="space-y-1.5">
              <label className="font-semibold text-slate-400">OG Social Card Image URL</label>
              <input
                type="url"
                value={ogImage}
                onChange={(e) => setOgImage(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-cyan-400 focus:outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-semibold text-slate-400">Twitter / X Username</label>
              <input
                type="text"
                value={twitterHandle}
                onChange={(e) => setTwitterHandle(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-cyan-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Keywords & Robots */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="space-y-1.5">
              <label className="font-semibold text-slate-400">Keywords (Comma separated)</label>
              <input
                type="text"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-cyan-400 focus:outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-semibold text-slate-400">Robots Indexing</label>
              <select
                value={robotsIndex}
                onChange={(e) => setRobotsIndex(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-cyan-400 focus:outline-none"
              >
                <option value="index, follow">Index, Follow (Standard SEO)</option>
                <option value="noindex, follow">NoIndex, Follow (Hidden page)</option>
                <option value="noindex, nofollow">NoIndex, NoFollow (Private)</option>
              </select>
            </div>
          </div>

        </div>

        {/* Right Output: Real-time Live Previews & Generated Code */}
        <div className="lg:col-span-6 space-y-6">
          
          {/* Live Preview Switcher Card */}
          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4 shadow-xl">
            
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-800 text-xs">
              <div className="flex bg-slate-900 rounded-lg p-0.5 border border-slate-700">
                <button
                  onClick={() => setPreviewMode('google')}
                  className={`px-3 py-1 rounded-md font-semibold transition ${
                    previewMode === 'google' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400'
                  }`}
                >
                  Google Snippet
                </button>
                <button
                  onClick={() => setPreviewMode('social')}
                  className={`px-3 py-1 rounded-md font-semibold transition ${
                    previewMode === 'social' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400'
                  }`}
                >
                  Social Card
                </button>
              </div>

              {previewMode === 'google' && (
                <div className="flex items-center gap-1 text-slate-400">
                  <button
                    onClick={() => setDeviceMode('desktop')}
                    className={`p-1.5 rounded ${deviceMode === 'desktop' ? 'text-cyan-400 bg-slate-800' : ''}`}
                    title="Desktop Preview"
                  >
                    <Monitor className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setDeviceMode('mobile')}
                    className={`p-1.5 rounded ${deviceMode === 'mobile' ? 'text-cyan-400 bg-slate-800' : ''}`}
                    title="Mobile Preview"
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>

            {/* Google Search Snippet Simulation */}
            {previewMode === 'google' ? (
              <div className="p-4 rounded-xl bg-[#202124] border border-slate-800 font-sans space-y-1.5">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-cyan-400 flex items-center justify-center text-[9px] font-bold text-black">
                    A
                  </div>
                  <div>
                    <span className="text-slate-300 text-xs font-medium">{author}</span>
                    <p className="text-[11px] text-slate-400 truncate max-w-sm">{siteUrl}</p>
                  </div>
                </div>

                <h4 className="text-base text-[#8ab4f8] font-normal hover:underline cursor-pointer line-clamp-1 leading-snug">
                  {title || 'Page Title will appear here'}
                </h4>

                <p className="text-xs text-[#bdc1c6] line-clamp-2 leading-relaxed">
                  {description || 'Page description will appear here in search snippets.'}
                </p>
              </div>
            ) : (
              /* Social Media OpenGraph Card Simulation */
              <div className="rounded-xl border border-slate-800 bg-slate-900 overflow-hidden space-y-2">
                <div className="h-36 bg-slate-800 flex items-center justify-center text-slate-500 overflow-hidden relative">
                  {ogImage ? (
                    <img src={ogImage} alt="OG Card" className="w-full h-full object-cover" onError={(e: any) => { e.target.style.display = 'none'; }} />
                  ) : null}
                  <span className="text-xs">Social Card Preview (1200×630px)</span>
                </div>
                <div className="p-3 space-y-1">
                  <span className="text-[10px] uppercase font-mono text-slate-400 block">{siteUrl.replace(/^https?:\/\//, '')}</span>
                  <h4 className="text-sm font-bold text-white line-clamp-1">{title}</h4>
                  <p className="text-xs text-slate-400 line-clamp-2">{description}</p>
                </div>
              </div>
            )}

          </div>

          {/* Generated Code Area */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-slate-400 flex items-center gap-1.5">
                <FileCode className="w-4 h-4 text-cyan-400" />
                <span>Generated HTML Code (Paste inside &lt;head&gt;)</span>
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopy}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition flex items-center gap-1"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-cyan-400" />}
                  <span>{copied ? 'Copied!' : 'Copy Code'}</span>
                </button>
                <button
                  onClick={handleDownload}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition"
                  title="Download HTML"
                >
                  <Download className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <pre className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-[11px] text-cyan-300 font-mono overflow-x-auto max-h-56 leading-relaxed">
              {generatedHtml}
            </pre>
          </div>

        </div>

      </div>

    </div>
  );
};
