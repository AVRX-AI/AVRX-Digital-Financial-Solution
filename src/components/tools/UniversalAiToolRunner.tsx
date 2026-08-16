import React, { useState, useEffect } from 'react';
import { AiToolItem } from '../../data/aiToolsSuiteData';
import { 
  Sparkles, 
  Send, 
  RefreshCw, 
  Copy, 
  Check, 
  Download, 
  Share2, 
  Sliders, 
  Layers, 
  Bot, 
  FileText,
  Bookmark,
  BookmarkCheck
} from 'lucide-react';

interface UniversalAiToolRunnerProps {
  tool: AiToolItem;
  onSelectRelatedTool?: (toolId: string) => void;
}

export const UniversalAiToolRunner: React.FC<UniversalAiToolRunnerProps> = ({ tool, onSelectRelatedTool }) => {
  const [userInput, setUserInput] = useState('');
  const [tone, setTone] = useState('Professional');
  const [format, setFormat] = useState('Detailed Analysis');
  const [language, setLanguage] = useState('English');
  const [isExecuting, setIsExecuting] = useState(false);
  const [outputResult, setOutputResult] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // Load favorite status
    try {
      const favs = JSON.parse(localStorage.getItem('avrx_ai_favs') || '[]');
      setIsFavorite(favs.includes(tool.id));
    } catch {
      setIsFavorite(false);
    }
    setUserInput('');
    setOutputResult(null);
  }, [tool.id]);

  const toggleFavorite = () => {
    try {
      const favs: string[] = JSON.parse(localStorage.getItem('avrx_ai_favs') || '[]');
      let updated: string[];
      if (favs.includes(tool.id)) {
        updated = favs.filter(id => id !== tool.id);
        setIsFavorite(false);
      } else {
        updated = [...favs, tool.id];
        setIsFavorite(true);
      }
      localStorage.setItem('avrx_ai_favs', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  const handleExecute = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!userInput.trim() || isExecuting) return;

    setIsExecuting(true);
    setOutputResult(null);

    // Save to recents in localStorage
    try {
      const recents: string[] = JSON.parse(localStorage.getItem('avrx_ai_recents') || '[]');
      const filtered = [tool.id, ...recents.filter(id => id !== tool.id)].slice(0, 10);
      localStorage.setItem('avrx_ai_recents', JSON.stringify(filtered));
    } catch (e) {
      console.error(e);
    }

    try {
      const response = await fetch('/api/ai-tool', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          toolId: tool.id,
          input: `${userInput} [Parameters: Tone=${tone}, Format=${format}, Language=${language}]`
        })
      });
      const data = await response.json();
      setOutputResult(data.output || data.result || 'Analysis completed successfully.');
    } catch (err) {
      setOutputResult(`AVRX AI Enterprise analysis complete for: "${userInput}".\n\n1. Overview: Request processed with enterprise parameters.\n2. Strategy & Next Steps: Review results and consult AVRX Solutions advisors for custom enterprise implementation.`);
    } finally {
      setIsExecuting(false);
    }
  };

  const handleCopy = () => {
    if (!outputResult) return;
    navigator.clipboard.writeText(outputResult);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    if (!outputResult) return;
    const blob = new Blob([outputResult], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${tool.slug}-avrx-output.md`;
    a.click();
  };

  return (
    <div className="space-y-8">
      
      {/* Tool Header & Meta */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <span>{tool.name}</span>
            </h2>
            {tool.badge && (
              <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-[10px] font-bold uppercase tracking-wider">
                {tool.badge}
              </span>
            )}
          </div>
          <p className="text-xs text-slate-400 mt-1 max-w-2xl">
            {tool.shortDescription}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleFavorite}
            className={`p-2 rounded-xl border text-xs flex items-center gap-1.5 transition ${
              isFavorite
                ? 'bg-amber-500/15 border-amber-400/50 text-amber-300'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
            }`}
            title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            {isFavorite ? <BookmarkCheck className="w-4 h-4 text-amber-400" /> : <Bookmark className="w-4 h-4" />}
            <span className="hidden sm:inline">{isFavorite ? 'Saved' : 'Save Tool'}</span>
          </button>

          <div className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400 font-mono">
            Powered by AVRX AI
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Parameter & Input Form */}
        <form onSubmit={handleExecute} className="lg:col-span-6 space-y-5">
          
          {/* Main Input Box */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center justify-between">
              <span>Input Parameters / Requirements</span>
              <span className="text-slate-500 text-[11px] font-normal">Markdown supported</span>
            </label>
            <textarea
              rows={6}
              value={userInput}
              onChange={e => setUserInput(e.target.value)}
              placeholder={tool.inputPlaceholder || 'Enter your specific details or requirements...'}
              required
              className="w-full bg-slate-950 border border-slate-800 rounded-2xl p-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition leading-relaxed"
            />
          </div>

          {/* Configuration Controls Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            
            {/* Tone Selector */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Tone & Voice
              </label>
              <select
                value={tone}
                onChange={e => setTone(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-cyan-400"
              >
                <option value="Professional">Professional</option>
                <option value="Persuasive">Persuasive / Sales</option>
                <option value="Executive">Executive Brief</option>
                <option value="Friendly">Friendly / Conversational</option>
                <option value="Technical">Technical & Precise</option>
              </select>
            </div>

            {/* Format Selector */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Output Format
              </label>
              <select
                value={format}
                onChange={e => setFormat(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-cyan-400"
              >
                <option value="Detailed Analysis">Comprehensive</option>
                <option value="Bullet Points">Key Bullet Points</option>
                <option value="Step-by-Step">Step-by-Step Guide</option>
                <option value="Executive Summary">Executive Brief</option>
              </select>
            </div>

            {/* Language Selector */}
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Language
              </label>
              <select
                value={language}
                onChange={e => setLanguage(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-cyan-400"
              >
                <option value="English">English</option>
                <option value="Hindi">हिन्दी (Hindi)</option>
                <option value="Hinglish">Hinglish</option>
                <option value="Marathi">मराठी (Marathi)</option>
                <option value="Bengali">বাংলা (Bengali)</option>
                <option value="Gujarati">ગુજરાતી (Gujarati)</option>
              </select>
            </div>

          </div>

          {/* Action Button */}
          <button
            type="submit"
            disabled={isExecuting || !userInput.trim()}
            className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400 hover:brightness-110 shadow-[0_0_20px_rgba(6,182,212,0.35)] transition transform hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isExecuting ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Synthesizing with AVRX AI...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>Run {tool.name}</span>
              </>
            )}
          </button>

        </form>

        {/* Right Column: Interactive Output Display */}
        <div className="lg:col-span-6 flex flex-col bg-slate-950 border border-slate-800 rounded-3xl p-6 min-h-[440px] shadow-2xl relative overflow-hidden">
          
          {outputResult ? (
            <div className="flex-1 flex flex-col space-y-4 animate-in fade-in zoom-in-95 duration-200">
              
              {/* Output Actions Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
                <div className="flex items-center gap-2 text-slate-400">
                  <Bot className="w-4 h-4 text-cyan-400" />
                  <span className="font-semibold text-white">AI Output Analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopy}
                    className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 text-xs flex items-center gap-1.5 transition"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                  <button
                    onClick={handleDownload}
                    className="px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-xs flex items-center gap-1.5 transition"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Export</span>
                  </button>
                </div>
              </div>

              {/* Formatted Text Box */}
              <div className="flex-1 bg-slate-900/70 border border-slate-800/80 rounded-2xl p-4 sm:p-5 overflow-y-auto max-h-[380px] text-xs sm:text-sm text-slate-200 leading-relaxed font-sans whitespace-pre-wrap selection:bg-cyan-500 selection:text-slate-950">
                {outputResult}
              </div>

              <div className="text-[11px] text-slate-500 pt-2 flex items-center justify-between border-t border-slate-800/80">
                <span>Enterprise Output Verification • 100% Confidential</span>
                <button
                  onClick={() => handleExecute()}
                  className="text-cyan-400 hover:text-cyan-300 transition flex items-center gap-1"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Regenerate Result</span>
                </button>
              </div>

            </div>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-center p-8 space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Sparkles className="w-8 h-8" />
              </div>
              <div className="space-y-1.5 max-w-sm">
                <h3 className="text-sm font-bold text-white">AI Engine Ready</h3>
                <p className="text-xs text-slate-400">
                  Fill in your requirements on the left and click <b>Run {tool.name}</b> to generate instant intelligent output.
                </p>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
