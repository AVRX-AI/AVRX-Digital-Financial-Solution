import React, { useState, useMemo } from 'react';
import { 
  Code, 
  Copy, 
  Check, 
  Download, 
  Minimize2, 
  Maximize2, 
  AlertTriangle, 
  CheckCircle2, 
  FileJson, 
  Trash2, 
  Sparkles,
  ChevronRight,
  ChevronDown
} from 'lucide-react';

export const JsonFormatterTool: React.FC = () => {
  const [inputJson, setInputJson] = useState<string>(() => {
    return JSON.stringify({
      company: "AVRX Digital & Financial Solution",
      website: "https://avrx.in",
      established: 2026,
      verified: true,
      services: [
        { id: "web-dev", name: "High Performance Web Apps", speedRating: 99 },
        { id: "cloud-hosting", name: "NVMe Enterprise Hosting", uptime: "99.99%" },
        { id: "business-loans", name: "MSME Collateral-Free Loans", maxSanction: 10000000 }
      ],
      contact: {
        email: "support@avrx.in",
        phone: "+91 96306 61536",
        headquarters: "Raipur, Chhattisgarh, India"
      }
    }, null, 2);
  });

  const [indentSize, setIndentSize] = useState<number | 'tab'>(2);
  const [activeTab, setActiveTab] = useState<'formatted' | 'tree'>('formatted');
  const [copied, setCopied] = useState<boolean>(false);

  // Parse and validate JSON
  const validation = useMemo(() => {
    if (!inputJson.trim()) {
      return { isValid: true, parsed: null, error: null, formatted: '', minified: '' };
    }

    try {
      const parsed = JSON.parse(inputJson);
      const indent = indentSize === 'tab' ? '\t' : indentSize;
      const formatted = JSON.stringify(parsed, null, indent);
      const minified = JSON.stringify(parsed);
      return {
        isValid: true,
        parsed,
        error: null,
        formatted,
        minified
      };
    } catch (err: any) {
      return {
        isValid: false,
        parsed: null,
        error: err.message || 'Invalid JSON syntax',
        formatted: inputJson,
        minified: inputJson
      };
    }
  }, [inputJson, indentSize]);

  const handleCopy = () => {
    if (typeof window !== 'undefined' && validation.formatted) {
      navigator.clipboard.writeText(validation.formatted);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleMinify = () => {
    if (validation.isValid && validation.minified) {
      setInputJson(validation.minified);
    }
  };

  const handleBeautify = () => {
    if (validation.isValid && validation.formatted) {
      setInputJson(validation.formatted);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([validation.formatted || inputJson], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `avrx-formatted-${Date.now().toString().slice(-4)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const loadSample = (type: string) => {
    if (type === 'ecommerce') {
      setInputJson(JSON.stringify({
        orderId: "AVRX-ORD-94821",
        customer: { name: "Aarav Sharma", tier: "Gold Member", email: "aarav@example.com" },
        items: [
          { sku: "HOST-NVME-PRO", name: "Cloud NVMe Hosting", qty: 1, price: 4999 },
          { sku: "SSL-WILDCARD", name: "SSL Certificate", qty: 1, price: 1499 }
        ],
        payment: { method: "UPI", status: "SUCCESS", amount: 6498 }
      }, null, 2));
    } else if (type === 'user') {
      setInputJson(JSON.stringify({
        id: "usr_7834",
        username: "vikram_fintech",
        profile: { firstName: "Vikram", lastName: "Verma", role: "Financial Advisor" },
        preferences: { theme: "dark", notifications: true, language: "en-IN" }
      }, null, 2));
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      
      {/* 1. Status and Action Ribbon */}
      <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 flex flex-wrap items-center justify-between gap-4">
        
        {/* Validation Status Indicator */}
        <div className="flex items-center gap-2 text-xs font-mono">
          {validation.isValid ? (
            <div className="flex items-center gap-1.5 text-emerald-400 font-bold px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
              <CheckCircle2 className="w-4 h-4" />
              <span>Valid JSON Syntax</span>
            </div>
          ) : (
            <div className="flex items-center gap-1.5 text-rose-400 font-bold px-3 py-1 rounded-lg bg-rose-500/10 border border-rose-500/30">
              <AlertTriangle className="w-4 h-4" />
              <span>Syntax Error: {validation.error}</span>
            </div>
          )}
        </div>

        {/* View Mode & Indent Selector */}
        <div className="flex flex-wrap items-center gap-2">
          
          <div className="flex items-center bg-slate-900 border border-slate-800 rounded-xl p-0.5 text-xs">
            <button
              onClick={() => setActiveTab('formatted')}
              className={`px-3 py-1 rounded-lg transition ${
                activeTab === 'formatted' ? 'bg-cyan-500 text-slate-950 font-bold shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              Code Editor
            </button>
            <button
              onClick={() => setActiveTab('tree')}
              disabled={!validation.isValid}
              className={`px-3 py-1 rounded-lg transition disabled:opacity-40 ${
                activeTab === 'tree' ? 'bg-cyan-500 text-slate-950 font-bold shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              Tree Inspector
            </button>
          </div>

          <select
            value={indentSize}
            onChange={(e) => setIndentSize(e.target.value === 'tab' ? 'tab' : Number(e.target.value))}
            className="bg-slate-900 border border-slate-800 rounded-xl px-2.5 py-1 text-xs text-slate-300 focus:outline-none focus:border-cyan-400"
          >
            <option value={2}>2 Spaces</option>
            <option value={4}>4 Spaces</option>
            <option value="tab">Tab Indent</option>
          </select>

          <button
            onClick={handleBeautify}
            disabled={!validation.isValid}
            className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-slate-800 text-xs font-semibold transition disabled:opacity-40"
          >
            Format
          </button>

          <button
            onClick={handleMinify}
            disabled={!validation.isValid}
            className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs font-semibold transition disabled:opacity-40"
          >
            Minify
          </button>

          <button
            onClick={handleCopy}
            className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs font-semibold transition flex items-center gap-1"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>

          <button
            onClick={handleDownload}
            disabled={!validation.isValid}
            className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs transition flex items-center gap-1 shadow-md shadow-cyan-500/20 disabled:opacity-40"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download</span>
          </button>
        </div>

      </div>

      {/* 2. Main Editor Workspace */}
      <div className="bg-slate-950/90 border border-slate-800 rounded-3xl p-5 sm:p-6 shadow-2xl relative overflow-hidden">
        
        {activeTab === 'formatted' ? (
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="font-mono">JSON Source Input &amp; Output</span>
              <div className="flex items-center gap-2">
                <span className="text-[11px]">Load Sample:</span>
                <button
                  type="button"
                  onClick={() => loadSample('ecommerce')}
                  className="px-2 py-0.5 rounded bg-slate-900 hover:bg-slate-800 text-[11px] text-cyan-400 border border-slate-800"
                >
                  Order
                </button>
                <button
                  type="button"
                  onClick={() => loadSample('user')}
                  className="px-2 py-0.5 rounded bg-slate-900 hover:bg-slate-800 text-[11px] text-cyan-400 border border-slate-800"
                >
                  User
                </button>
                <button
                  type="button"
                  onClick={() => setInputJson('')}
                  className="p-1 rounded text-slate-500 hover:text-rose-400"
                  title="Clear"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <textarea
              rows={16}
              value={inputJson}
              onChange={(e) => setInputJson(e.target.value)}
              placeholder="Paste your raw JSON code here to validate and format..."
              className={`w-full bg-slate-900/90 border rounded-2xl p-4 sm:p-5 font-mono text-xs sm:text-sm text-cyan-200 placeholder-slate-600 focus:outline-none transition leading-relaxed ${
                validation.isValid ? 'border-slate-800 focus:border-cyan-400' : 'border-rose-500/60 focus:border-rose-400 bg-rose-950/10'
              }`}
              spellCheck={false}
            />
          </div>
        ) : (
          <div className="space-y-3">
            <span className="text-xs font-mono text-slate-400 block">Interactive Object Tree View:</span>
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 font-mono text-xs sm:text-sm text-slate-200 max-h-[500px] overflow-y-auto space-y-2">
              {validation.parsed && <JsonTreeNode data={validation.parsed} name="root" />}
            </div>
          </div>
        )}

      </div>

    </div>
  );
};

// Recursive JSON Tree Node Inspector component
interface JsonTreeNodeProps {
  data: any;
  name: string;
  isLast?: boolean;
}

const JsonTreeNode: React.FC<JsonTreeNodeProps> = ({ data, name }) => {
  const [isOpen, setIsOpen] = useState(true);

  if (data === null) {
    return (
      <div className="pl-4 py-0.5 flex items-center gap-2">
        <span className="text-slate-400">{name}:</span>
        <span className="text-slate-500 italic">null</span>
      </div>
    );
  }

  const type = typeof data;

  if (type === 'boolean') {
    return (
      <div className="pl-4 py-0.5 flex items-center gap-2">
        <span className="text-slate-400">{name}:</span>
        <span className="text-amber-400 font-bold">{data ? 'true' : 'false'}</span>
        <span className="text-[10px] text-slate-600 bg-slate-800 px-1 rounded">bool</span>
      </div>
    );
  }

  if (type === 'number') {
    return (
      <div className="pl-4 py-0.5 flex items-center gap-2">
        <span className="text-slate-400">{name}:</span>
        <span className="text-emerald-400 font-bold">{data}</span>
        <span className="text-[10px] text-slate-600 bg-slate-800 px-1 rounded">num</span>
      </div>
    );
  }

  if (type === 'string') {
    return (
      <div className="pl-4 py-0.5 flex items-center gap-2">
        <span className="text-slate-400">{name}:</span>
        <span className="text-cyan-300">"{data}"</span>
        <span className="text-[10px] text-slate-600 bg-slate-800 px-1 rounded">str</span>
      </div>
    );
  }

  if (Array.isArray(data)) {
    return (
      <div className="pl-3 border-l border-slate-800/80 my-1">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1.5 text-slate-300 hover:text-cyan-300 transition py-0.5"
        >
          {isOpen ? <ChevronDown className="w-3.5 h-3.5 text-cyan-400" /> : <ChevronRight className="w-3.5 h-3.5 text-slate-500" />}
          <span className="font-bold text-white">{name}</span>
          <span className="text-[11px] text-slate-500">[{data.length} items]</span>
        </button>

        {isOpen && (
          <div className="pl-2 space-y-1">
            {data.map((item, idx) => (
              <JsonTreeNode key={idx} data={item} name={`[${idx}]`} />
            ))}
          </div>
        )}
      </div>
    );
  }

  if (type === 'object') {
    const keys = Object.keys(data);
    return (
      <div className="pl-3 border-l border-slate-800/80 my-1">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1.5 text-slate-300 hover:text-cyan-300 transition py-0.5"
        >
          {isOpen ? <ChevronDown className="w-3.5 h-3.5 text-cyan-400" /> : <ChevronRight className="w-3.5 h-3.5 text-slate-500" />}
          <span className="font-bold text-white">{name}</span>
          <span className="text-[11px] text-slate-500">&#123;{keys.length} keys&#125;</span>
        </button>

        {isOpen && (
          <div className="pl-2 space-y-1">
            {keys.map((key) => (
              <JsonTreeNode key={key} data={data[key]} name={key} />
            ))}
          </div>
        )}
      </div>
    );
  }

  return null;
};
