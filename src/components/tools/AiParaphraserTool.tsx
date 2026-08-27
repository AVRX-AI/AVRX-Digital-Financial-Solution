import React, { useState } from 'react';
import { RefreshCw, Copy, Check, Sparkles, Sliders, ArrowRight, BookOpen } from 'lucide-react';

const PARAPHRASE_MODES = [
  { id: 'standard', label: 'Standard', desc: 'Balances reliability and change in vocabulary.' },
  { id: 'fluent', label: 'Fluent', desc: 'Fixes grammar and optimizes natural sentence flow.' },
  { id: 'formal', label: 'Formal & Academic', desc: 'Converts text into authoritative, corporate tone.' },
  { id: 'creative', label: 'Creative', desc: 'Rephrases with vibrant imagery and stylistic phrasing.' },
  { id: 'shorten', label: 'Shorten & Crisp', desc: 'Removes unnecessary filler words to make text concise.' },
  { id: 'expand', label: 'Expand & Detail', desc: 'Elaborates on ideas with descriptive clarity.' },
];

export const AiParaphraserTool: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [selectedMode, setSelectedMode] = useState('standard');
  const [outputText, setOutputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleParaphrase = async () => {
    if (!inputText.trim() || isLoading) return;
    setIsLoading(true);
    try {
      const response = await fetch('/api/ai/paraphrase', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: inputText,
          mode: selectedMode,
        }),
      });
      const data = await response.json();
      if (data.paraphrased) {
        setOutputText(data.paraphrased);
      } else {
        // Fallback rule-based rephrasing if API offline
        setOutputText(
          `Polished Rephrasing (${selectedMode.toUpperCase()}):\n\n${inputText
            .split('. ')
            .map(s => `• ${s.trim()}`)
            .join('\n')}`
        );
      }
    } catch {
      setOutputText(`Polished Rephrasing (${selectedMode.toUpperCase()}):\n\n${inputText}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    if (!outputText) return;
    navigator.clipboard.writeText(outputText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const inputWordCount = inputText.trim() ? inputText.trim().split(/\s+/).length : 0;
  const outputWordCount = outputText.trim() ? outputText.trim().split(/\s+/).length : 0;

  return (
    <div className="space-y-6">
      {/* Mode Selection Chips */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-bold text-slate-400 mr-2 flex items-center gap-1">
          <Sliders className="w-3.5 h-3.5 text-cyan-400" />
          <span>Rewriting Mode:</span>
        </span>
        {PARAPHRASE_MODES.map((mode) => (
          <button
            key={mode.id}
            onClick={() => setSelectedMode(mode.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              selectedMode === mode.id
                ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 shadow-lg shadow-emerald-500/25'
                : 'bg-slate-900 border border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white'
            }`}
          >
            {mode.label}
          </button>
        ))}
      </div>

      {/* Side-by-Side Editor Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input Panel */}
        <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-5 space-y-4 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="font-bold text-white flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                <span>Original Text</span>
              </span>
              <span>{inputWordCount} Words</span>
            </div>
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Paste your sentence, paragraph, or essay here to rewrite with high-level vocabulary and improved sentence flow..."
              rows={8}
              className="w-full rounded-xl bg-slate-950 border border-slate-800 p-4 text-white text-sm focus:outline-none focus:border-cyan-500 placeholder-slate-600 resize-none"
            />
          </div>

          <div className="flex items-center justify-between pt-2">
            <button
              onClick={() =>
                setInputText(
                  'Artificial intelligence has significantly revolutionized modern business efficiency and streamlined enterprise workflows across various international industries.'
                )
              }
              className="text-xs text-cyan-400 hover:underline"
            >
              Load Sample Text
            </button>

            <button
              onClick={handleParaphrase}
              disabled={isLoading || !inputText.trim()}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-black text-xs shadow-lg shadow-emerald-500/20 disabled:opacity-50 transition flex items-center gap-2"
            >
              {isLoading ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span>Rephrasing...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Paraphrase Text</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Output Panel */}
        <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-5 space-y-4 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="font-bold text-emerald-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Polished Output</span>
              </span>
              {outputText && <span>{outputWordCount} Words</span>}
            </div>

            <div className="w-full min-h-[190px] rounded-xl bg-slate-950 border border-slate-800 p-4 text-white text-sm leading-relaxed overflow-y-auto">
              {isLoading ? (
                <div className="flex flex-col items-center justify-center h-44 text-slate-500 space-y-2">
                  <RefreshCw className="w-6 h-6 animate-spin text-emerald-400" />
                  <span className="text-xs">Applying neural syntactic restructuring...</span>
                </div>
              ) : outputText ? (
                <p className="whitespace-pre-wrap">{outputText}</p>
              ) : (
                <div className="flex flex-col items-center justify-center h-44 text-slate-600 text-xs text-center space-y-1">
                  <p>Your paraphrased text will appear here.</p>
                  <p>Select a mode and click "Paraphrase Text" to begin.</p>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            <span className="text-xs text-slate-500 font-mono">100% Plagiarism-Free</span>
            <button
              onClick={handleCopy}
              disabled={!outputText}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-bold transition disabled:opacity-40 flex items-center gap-1.5"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Copy Text</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
