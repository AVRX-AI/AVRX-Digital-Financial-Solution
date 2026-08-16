import React, { useState, useMemo } from 'react';
import { 
  AlignLeft, 
  Copy, 
  Check, 
  Trash2, 
  Download, 
  Clock, 
  Volume2, 
  Sparkles, 
  Layers,
  FileText
} from 'lucide-react';

export const TextCounterTool: React.FC = () => {
  const [text, setText] = useState<string>(
    'AVRX Digital & Financial Solution delivers next-generation web design, cloud hosting, business loans, tax compliance, and modern AI productivity tools for Indian enterprises and entrepreneurs.'
  );
  const [copied, setCopied] = useState<boolean>(false);

  // Statistics calculation
  const stats = useMemo(() => {
    const raw = text;
    const charsWithSpaces = raw.length;
    const charsWithoutSpaces = raw.replace(/\s+/g, '').length;
    
    // Words
    const trimmed = raw.trim();
    const wordsArray = trimmed ? trimmed.split(/\s+/).filter(Boolean) : [];
    const wordCount = wordsArray.length;

    // Sentences
    const sentenceMatches = raw.match(/[^.!?]+[.!?]+(\s|$)/g) || [];
    const sentenceCount = sentenceMatches.length || (wordCount > 0 ? 1 : 0);

    // Paragraphs
    const paragraphsArray = raw.split(/\n+/).filter(p => p.trim().length > 0);
    const paragraphCount = paragraphsArray.length;

    // Reading & Speaking times
    // Avg reading speed: ~200-250 wpm
    const readingTimeSec = Math.ceil((wordCount / 200) * 60);
    const readingTimeMin = (wordCount / 200).toFixed(1);

    // Avg speaking speed: ~130 wpm
    const speakingTimeMin = (wordCount / 130).toFixed(1);

    // Keyword density
    const stopWords = new Set([
      'the', 'and', 'a', 'to', 'of', 'in', 'i', 'is', 'that', 'it', 'on', 'you', 'this', 'for', 'but',
      'with', 'are', 'have', 'be', 'at', 'or', 'as', 'was', 'so', 'if', 'out', 'not', 'by', 'an', 'from'
    ]);
    const wordFreq: Record<string, number> = {};
    wordsArray.forEach(w => {
      const clean = w.toLowerCase().replace(/[^a-z0-9]/gi, '');
      if (clean.length > 2 && !stopWords.has(clean)) {
        wordFreq[clean] = (wordFreq[clean] || 0) + 1;
      }
    });

    const topKeywords = Object.entries(wordFreq)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([word, count]) => ({
        word,
        count,
        density: ((count / Math.max(1, wordCount)) * 100).toFixed(1)
      }));

    return {
      charsWithSpaces,
      charsWithoutSpaces,
      wordCount,
      sentenceCount,
      paragraphCount,
      readingTimeMin,
      speakingTimeMin,
      topKeywords
    };
  }, [text]);

  const handleCopy = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `avrx-text-${Date.now().toString().slice(-4)}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Case transforms
  const transformCase = (type: string) => {
    switch (type) {
      case 'uppercase':
        setText(text.toUpperCase());
        break;
      case 'lowercase':
        setText(text.toLowerCase());
        break;
      case 'title':
        setText(
          text.replace(
            /\w\S*/g,
            txt => txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase()
          )
        );
        break;
      case 'sentence':
        setText(
          text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, c => c.toUpperCase())
        );
        break;
      case 'camel':
        setText(
          text
            .toLowerCase()
            .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase())
        );
        break;
      case 'snake':
        setText(
          text
            .trim()
            .toLowerCase()
            .replace(/\s+/g, '_')
            .replace(/[^a-z0-9_]/g, '')
        );
        break;
      case 'kebab':
        setText(
          text
            .trim()
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^a-z0-9-]/g, '')
        );
        break;
      case 'clean-whitespace':
        setText(text.replace(/[ \t]+/g, ' ').replace(/\n\s*\n/g, '\n\n').trim());
        break;
      default:
        break;
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      
      {/* 1. Live Summary Metrics Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-center">
          <div className="text-2xl sm:text-3xl font-black text-white">{stats.wordCount.toLocaleString()}</div>
          <div className="text-[11px] text-slate-400 font-semibold uppercase mt-0.5">Words</div>
        </div>
        <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-center">
          <div className="text-2xl sm:text-3xl font-black text-cyan-300">{stats.charsWithSpaces.toLocaleString()}</div>
          <div className="text-[11px] text-slate-400 font-semibold uppercase mt-0.5">Characters</div>
        </div>
        <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-center">
          <div className="text-2xl sm:text-3xl font-black text-emerald-300">{stats.charsWithoutSpaces.toLocaleString()}</div>
          <div className="text-[11px] text-slate-400 font-semibold uppercase mt-0.5">No Spaces</div>
        </div>
        <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-center">
          <div className="text-2xl sm:text-3xl font-black text-amber-300">{stats.sentenceCount}</div>
          <div className="text-[11px] text-slate-400 font-semibold uppercase mt-0.5">Sentences</div>
        </div>
        <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-center col-span-2 sm:col-span-1">
          <div className="text-2xl sm:text-3xl font-black text-purple-300">{stats.paragraphCount}</div>
          <div className="text-[11px] text-slate-400 font-semibold uppercase mt-0.5">Paragraphs</div>
        </div>
      </div>

      {/* 2. Text Editor & Action Toolbar */}
      <div className="bg-slate-950/80 border border-slate-800 rounded-3xl p-5 sm:p-7 space-y-4 shadow-inner">
        
        {/* Top Control Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <AlignLeft className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-bold text-white uppercase tracking-wider">Live Text Workspace</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setText('')}
              className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-rose-500/20 text-slate-400 hover:text-rose-300 border border-slate-800 text-xs font-medium transition flex items-center gap-1.5"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear</span>
            </button>
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs font-medium transition flex items-center gap-1.5"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
            <button
              onClick={handleDownload}
              className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs transition flex items-center gap-1.5 shadow-md shadow-cyan-500/20"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Save .txt</span>
            </button>
          </div>
        </div>

        {/* Text Area */}
        <textarea
          rows={9}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type or paste your text here to analyze live word counts and transform cases..."
          className="w-full bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-5 text-sm sm:text-base text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition resize-y leading-relaxed font-sans"
        />

        {/* Transformation Pills Toolbar */}
        <div className="space-y-2 pt-2">
          <span className="text-[11px] font-mono text-slate-400 uppercase font-bold tracking-wider block">
            One-Click Case Converters &amp; Cleaners:
          </span>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => transformCase('sentence')}
              className="px-3 py-1 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-xs text-slate-300 hover:text-white transition"
            >
              Sentence case
            </button>
            <button
              onClick={() => transformCase('lowercase')}
              className="px-3 py-1 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-xs text-slate-300 hover:text-white transition"
            >
              lower case
            </button>
            <button
              onClick={() => transformCase('uppercase')}
              className="px-3 py-1 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-xs text-slate-300 hover:text-white transition"
            >
              UPPERCASE
            </button>
            <button
              onClick={() => transformCase('title')}
              className="px-3 py-1 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-xs text-slate-300 hover:text-white transition"
            >
              Title Case
            </button>
            <button
              onClick={() => transformCase('camel')}
              className="px-3 py-1 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-xs text-slate-300 hover:text-white transition font-mono"
            >
              camelCase
            </button>
            <button
              onClick={() => transformCase('snake')}
              className="px-3 py-1 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-xs text-slate-300 hover:text-white transition font-mono"
            >
              snake_case
            </button>
            <button
              onClick={() => transformCase('kebab')}
              className="px-3 py-1 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-xs text-slate-300 hover:text-white transition font-mono"
            >
              kebab-case
            </button>
            <button
              onClick={() => transformCase('clean-whitespace')}
              className="px-3 py-1 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-xs text-cyan-300 transition"
            >
              Clean Extra Spaces
            </button>
          </div>
        </div>

      </div>

      {/* 3. Deep Analytics: Reading Time & Top Keywords */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Reading and Speaking Speed */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4">
          <h3 className="font-bold text-white text-sm pb-3 border-b border-slate-800 flex items-center gap-2">
            <Clock className="w-4 h-4 text-cyan-400" />
            <span>Reading &amp; Speaking Speeds</span>
          </h3>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 space-y-1">
              <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                <span>Reading Time</span>
              </div>
              <div className="text-2xl font-bold text-white">~{stats.readingTimeMin} min</div>
              <div className="text-[10px] text-slate-500">Based on 200 words / min</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 space-y-1">
              <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold">
                <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Speaking Time</span>
              </div>
              <div className="text-2xl font-bold text-white">~{stats.speakingTimeMin} min</div>
              <div className="text-[10px] text-slate-500">Based on 130 words / min</div>
            </div>
          </div>
        </div>

        {/* Top Keyword Density */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4">
          <h3 className="font-bold text-white text-sm pb-3 border-b border-slate-800 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Top Keyword Density</span>
          </h3>

          {stats.topKeywords.length > 0 ? (
            <div className="space-y-2.5">
              {stats.topKeywords.map((kw, idx) => (
                <div key={idx} className="flex items-center justify-between text-xs p-2 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="font-mono text-cyan-300 font-bold">{kw.word}</span>
                  <div className="flex items-center gap-3 text-slate-400 font-mono">
                    <span>{kw.count}x</span>
                    <span className="text-emerald-400 font-semibold">{kw.density}%</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-xs text-slate-500 p-4 text-center">
              Add more text to see keyword density distribution.
            </div>
          )}
        </div>

      </div>

    </div>
  );
};
