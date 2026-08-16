import React, { useState, useRef } from 'react';
import { 
  FileText, 
  Sparkles, 
  Copy, 
  Check, 
  Download, 
  UploadCloud, 
  RefreshCw, 
  AlertCircle, 
  CheckCircle2, 
  ListChecks, 
  BarChart2,
  Trash2
} from 'lucide-react';

export const AiSummarizerTool: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [summaryType, setSummaryType] = useState<'bullet' | 'paragraph' | 'action_items' | 'comprehensive'>('bullet');
  const [summaryLength, setSummaryLength] = useState<'concise' | 'balanced' | 'detailed'>('balanced');
  
  const [summaryResult, setSummaryResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (file: File) => {
    setError(null);
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result as string;
      if (text) {
        setInputText(text);
      }
    };
    reader.onerror = () => setError('Failed to read text file.');
    reader.readAsText(file);
  };

  const handleSummarize = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) {
      setError('Please paste text or upload a document to summarize.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setSummaryResult('');

    try {
      const modeInstruction = 
        summaryType === 'bullet' ? 'Provide concise, high-impact bulleted key takeaways.' :
        summaryType === 'paragraph' ? 'Provide a crisp, unified TL;DR executive summary paragraph.' :
        summaryType === 'action_items' ? 'Extract all concrete decisions, key numbers, deliverables, and actionable next steps.' :
        'Provide a structured comprehensive chapter-by-chapter synthesis with headings.';

      const fullPrompt = `Task: Summarize and extract insights from the following text.
Format Style: ${modeInstruction}
Length Level: ${summaryLength}

Original Content:
"""
${inputText.slice(0, 15000)}
"""

Please provide a clean, beautifully formatted markdown output highlighting the most critical information, key facts, metrics, and conclusions.`;

      const response = await fetch('/api/tools/ai-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: fullPrompt,
          toolType: 'summary'
        })
      });

      const data = await response.json();
      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Summarization failed.');
      }

      setSummaryResult(data.result);
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Failed to summarize text.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    if (!summaryResult) return;
    navigator.clipboard.writeText(summaryResult);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    if (!summaryResult) return;
    const blob = new Blob([summaryResult], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `avrx_summary_${Date.now()}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const originalWordCount = inputText.trim() ? inputText.trim().split(/\s+/).filter(Boolean).length : 0;
  const summaryWordCount = summaryResult.trim() ? summaryResult.trim().split(/\s+/).filter(Boolean).length : 0;
  const reductionPercent = originalWordCount > 0 && summaryWordCount > 0 
    ? Math.max(0, Math.round(((originalWordCount - summaryWordCount) / originalWordCount) * 100)) 
    : 0;

  return (
    <div className="space-y-6">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Input Area */}
        <form onSubmit={handleSummarize} className="lg:col-span-6 space-y-4 bg-slate-950/60 p-5 sm:p-7 rounded-2xl border border-slate-800">
          
          <div className="flex items-center justify-between">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Source Text or Document
            </label>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="text-xs text-cyan-400 hover:underline flex items-center gap-1 font-medium"
              >
                <UploadCloud className="w-3.5 h-3.5" />
                <span>Upload .txt/.md</span>
              </button>
              <input
                type="file"
                ref={fileInputRef}
                onChange={(e) => {
                  if (e.target.files?.[0]) handleFileUpload(e.target.files[0]);
                }}
                accept=".txt,.md,.text"
                className="hidden"
              />

              {inputText && (
                <button
                  type="button"
                  onClick={() => setInputText('')}
                  className="text-xs text-slate-500 hover:text-rose-400 ml-2"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          <textarea
            rows={8}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Paste your long document, meeting notes, research paper, financial report or article here..."
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none leading-relaxed font-mono"
            required
          />

          <div className="flex justify-between text-[11px] text-slate-400 font-mono">
            <span>{originalWordCount} words entered</span>
            <span>Up to 15,000 characters</span>
          </div>

          {/* Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="space-y-1.5">
              <label className="font-semibold text-slate-400">Summary Format</label>
              <select
                value={summaryType}
                onChange={(e: any) => setSummaryType(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-cyan-400 focus:outline-none"
              >
                <option value="bullet">Bulleted Key Takeaways</option>
                <option value="paragraph">Executive Paragraph (TL;DR)</option>
                <option value="action_items">Action Items &amp; Decisions</option>
                <option value="comprehensive">Comprehensive Outline</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="font-semibold text-slate-400">Length Detail</label>
              <select
                value={summaryLength}
                onChange={(e: any) => setSummaryLength(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:border-cyan-400 focus:outline-none"
              >
                <option value="concise">Ultra-Concise (~20% length)</option>
                <option value="balanced">Balanced (~40% length)</option>
                <option value="detailed">In-Depth (~60% length)</option>
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
            disabled={isLoading || !inputText.trim()}
            className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:opacity-50 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/20 transition flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Distilling Key Insights...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>Generate Intelligent Summary</span>
              </>
            )}
          </button>

        </form>

        {/* Right Output Area */}
        <div className="lg:col-span-6 space-y-4">
          
          <div className="p-5 sm:p-6 rounded-2xl bg-slate-950 border border-slate-800 min-h-[420px] flex flex-col justify-between space-y-4">
            
            {/* Header with Stats */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
              <div className="flex items-center gap-2">
                <ListChecks className="w-4 h-4 text-cyan-400" />
                <span className="font-bold text-white">Synthesized Summary</span>
              </div>

              {summaryResult && (
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-[11px]">
                    -{reductionPercent}% Shorter
                  </span>
                  <span className="text-slate-400 font-mono text-[11px]">
                    {summaryWordCount} words
                  </span>
                </div>
              )}
            </div>

            {/* Content Display */}
            <div className="flex-grow">
              {isLoading ? (
                <div className="h-64 flex flex-col items-center justify-center space-y-3 text-slate-400">
                  <div className="w-10 h-10 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin" />
                  <p className="text-xs font-medium animate-pulse">Reading and extracting core takeaways...</p>
                </div>
              ) : summaryResult ? (
                <div className="text-xs sm:text-sm text-slate-200 whitespace-pre-wrap leading-relaxed max-h-[380px] overflow-y-auto pr-2">
                  {summaryResult}
                </div>
              ) : (
                <div className="h-64 flex flex-col items-center justify-center text-center space-y-2 text-slate-500">
                  <FileText className="w-8 h-8 opacity-40" />
                  <p className="text-xs">Your AI-distilled summary and key takeaways will be displayed here.</p>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            {summaryResult && (
              <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-800">
                <button
                  onClick={handleCopy}
                  className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition flex items-center gap-1.5"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-cyan-400" />}
                  <span>{copied ? 'Copied!' : 'Copy Summary'}</span>
                </button>

                <button
                  onClick={handleDownload}
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
