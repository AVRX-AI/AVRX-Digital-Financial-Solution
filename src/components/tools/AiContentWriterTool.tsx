import React, { useState } from 'react';
import { 
  Sparkles, 
  Send, 
  Copy, 
  Check, 
  Download, 
  RefreshCw, 
  AlertCircle, 
  FileText, 
  PenTool, 
  Clock, 
  BarChart2,
  Share2
} from 'lucide-react';

export const AiContentWriterTool: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [contentType, setContentType] = useState('article');
  const [tone, setTone] = useState('Professional & Authoritative');
  const [language, setLanguage] = useState('English');
  const [targetLength, setTargetLength] = useState('medium');
  const [keywords, setKeywords] = useState('');
  
  const [generatedResult, setGeneratedResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim()) {
      setError('Please provide a topic or prompt for the AI.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setGeneratedResult('');

    try {
      const lengthPrompt = 
        targetLength === 'short' ? 'Keep it concise (~150 to 200 words).' :
        targetLength === 'long' ? 'Provide an extensive, in-depth piece (~700 to 1000 words) with structured subheadings.' :
        'Provide a balanced piece (~400 to 500 words).';

      const fullPrompt = `Topic / Instructions: ${topic}
Content Type: ${contentType}
Target Tone: ${tone}
Target Language: ${language}
${keywords ? `Keywords to naturally include: ${keywords}` : ''}
Length requirement: ${lengthPrompt}

Please produce high quality, human-grade, publication-ready copy formatted cleanly with markdown headings, bullet points, and paragraphs.`;

      const response = await fetch('/api/tools/ai-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: fullPrompt,
          toolType: contentType
        })
      });

      const data = await response.json();
      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Generation failed.');
      }

      setGeneratedResult(data.result);
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Failed to generate content. Please check network connection.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    if (!generatedResult) return;
    navigator.clipboard.writeText(generatedResult);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadTxt = () => {
    if (!generatedResult) return;
    const blob = new Blob([generatedResult], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `avrx_ai_content_${Date.now()}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const wordCount = generatedResult ? generatedResult.trim().split(/\s+/).filter(Boolean).length : 0;
  const readingTime = Math.ceil(wordCount / 200);

  return (
    <div className="space-y-6">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Input Configuration Form */}
        <form onSubmit={handleGenerate} className="lg:col-span-6 space-y-4 bg-slate-950/60 p-5 sm:p-7 rounded-2xl border border-slate-800">
          
          {/* Content Type Selector */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Content Format
            </label>
            <select
              value={contentType}
              onChange={(e) => setContentType(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs font-semibold focus:border-cyan-400 focus:outline-none"
            >
              <option value="article">Blog Post / In-depth Article</option>
              <option value="email">Professional Business Email</option>
              <option value="social">Social Media Post (LinkedIn / X / Instagram)</option>
              <option value="ad_copy">Marketing &amp; Sales Ad Copy</option>
              <option value="script">Video Script (YouTube / Reels / Pitch)</option>
              <option value="summary">Executive Summary &amp; Key Takeaways</option>
            </select>
          </div>

          {/* Topic & Prompt */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Topic or Instructions <span className="text-rose-400">*</span>
            </label>
            <textarea
              rows={4}
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="E.g., 5 practical strategies for small business owners in India to optimize GST and working capital in 2025..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none leading-relaxed"
              required
            />
          </div>

          {/* Tone & Language */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="space-y-1.5">
              <label className="font-semibold text-slate-400">Tone of Voice</label>
              <select
                value={tone}
                onChange={(e) => setTone(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-cyan-400 focus:outline-none"
              >
                <option value="Professional & Authoritative">Professional &amp; Authoritative</option>
                <option value="Friendly & Conversational">Friendly &amp; Conversational</option>
                <option value="Persuasive & High Converting">Persuasive &amp; Sales-Driven</option>
                <option value="Informative & Educational">Informative &amp; Educational</option>
                <option value="Witty & Creative">Witty &amp; Creative</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="font-semibold text-slate-400">Language</label>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-cyan-400 focus:outline-none"
              >
                <option value="English">English</option>
                <option value="Hindi">Hindi (हिंदी)</option>
                <option value="Hinglish">Hinglish (Conversational)</option>
                <option value="Spanish">Spanish (Español)</option>
                <option value="French">French (Français)</option>
                <option value="German">German (Deutsch)</option>
              </select>
            </div>
          </div>

          {/* Target Length & Keywords */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="space-y-1.5">
              <label className="font-semibold text-slate-400">Target Length</label>
              <select
                value={targetLength}
                onChange={(e) => setTargetLength(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-cyan-400 focus:outline-none"
              >
                <option value="short">Short (~150 - 200 words)</option>
                <option value="medium">Standard (~400 - 500 words)</option>
                <option value="long">In-Depth (~800+ words)</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="font-semibold text-slate-400">Keywords (Optional)</label>
              <input
                type="text"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                placeholder="E.g., tax saving, MSME loan"
                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-cyan-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Error Notice */}
          {error && (
            <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-start gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          {/* Generate Button */}
          <button
            type="submit"
            disabled={isLoading || !topic.trim()}
            className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:opacity-50 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/20 transition flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Generating with Gemini AI...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>Generate Content with AI</span>
              </>
            )}
          </button>

        </form>

        {/* Right Output Card */}
        <div className="lg:col-span-6 space-y-4">
          
          <div className="p-5 sm:p-6 rounded-2xl bg-slate-950 border border-slate-800 min-h-[420px] flex flex-col justify-between space-y-4">
            
            {/* Output Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-cyan-400" />
                <span className="font-bold text-white">Generated Content</span>
              </div>

              {generatedResult && (
                <div className="flex items-center gap-2 text-slate-400 font-mono text-[11px]">
                  <span>{wordCount} words</span>
                  <span>•</span>
                  <span>~{readingTime} min read</span>
                </div>
              )}
            </div>

            {/* Content Body */}
            <div className="flex-grow">
              {isLoading ? (
                <div className="h-64 flex flex-col items-center justify-center space-y-3 text-slate-400">
                  <div className="w-10 h-10 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin" />
                  <p className="text-xs font-medium animate-pulse">Drafting polished content with AI intelligence...</p>
                </div>
              ) : generatedResult ? (
                <div className="text-xs sm:text-sm text-slate-200 whitespace-pre-wrap leading-relaxed max-h-[400px] overflow-y-auto pr-2">
                  {generatedResult}
                </div>
              ) : (
                <div className="h-64 flex flex-col items-center justify-center text-center space-y-2 text-slate-500">
                  <PenTool className="w-8 h-8 opacity-40" />
                  <p className="text-xs">Your AI-generated draft will appear here ready to copy or download.</p>
                </div>
              )}
            </div>

            {/* Action Bar */}
            {generatedResult && (
              <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-800">
                <button
                  onClick={handleCopy}
                  className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition flex items-center gap-1.5"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-cyan-400" />}
                  <span>{copied ? 'Copied to Clipboard!' : 'Copy Text'}</span>
                </button>

                <button
                  onClick={handleDownloadTxt}
                  className="px-3.5 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-semibold transition flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download .txt</span>
                </button>
              </div>
            )}

          </div>

        </div>

      </div>

    </div>
  );
};
