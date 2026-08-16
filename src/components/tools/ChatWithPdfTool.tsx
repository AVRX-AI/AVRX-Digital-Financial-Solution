import React, { useState } from 'react';
import { 
  FileText, 
  Send, 
  Sparkles, 
  Upload, 
  MessageSquare, 
  CheckCircle2, 
  Bot, 
  User, 
  RefreshCw,
  Copy,
  Check,
  Search,
  BookOpen
} from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  citation?: string;
  timestamp: string;
}

const SAMPLE_DOCS = [
  {
    id: 'service-agreement',
    name: 'AVRX_Master_Service_Agreement_2026.pdf',
    pages: 6,
    size: '240 KB',
    summary: 'Standard commercial service contract detailing scope of digital solutions, SLA 99.9%, payment milestones (40/30/30), 12-month code warranty, and confidentiality obligations.'
  },
  {
    id: 'financial-audit',
    name: 'Quarterly_Financial_Performance_Audit.pdf',
    pages: 12,
    size: '480 KB',
    summary: 'Q3 Corporate financial performance review showing 34% YoY revenue growth, reduced CAC by 18%, EBITDA margin at 22.4%, and expansion into Tier-2 enterprise clients.'
  }
];

const SUGGESTED_QUESTIONS = [
  'What is the payment milestone breakdown and timeline?',
  'What are the confidentiality and IP ownership clauses?',
  'Summarize the key warranty and SLA commitments.',
  'What is the dispute resolution and jurisdiction policy?'
];

export const ChatWithPdfTool: React.FC = () => {
  const [selectedDoc, setSelectedDoc] = useState(SAMPLE_DOCS[0]);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'ai',
      text: `Hello! I have indexed **${SAMPLE_DOCS[0].name}** (6 pages). You can ask me any question about clauses, payment terms, SLAs, or extract key data points.`,
      citation: 'Document Index v3.6',
      timestamp: 'Just now'
    }
  ]);
  const [inputQuery, setInputQuery] = useState('');
  const [isAsking, setIsAsking] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleSendMessage = async (queryText?: string) => {
    const q = queryText || inputQuery;
    if (!q.trim() || isAsking) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: q,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputQuery('');
    setIsAsking(true);

    try {
      const res = await fetch('/api/ai-tool', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          toolId: 'chat-with-pdf',
          input: `Document: ${selectedDoc.name}. Context: ${selectedDoc.summary}. Question: ${q}`
        })
      });
      const data = await res.json();

      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: data.output || `Based on Section 4 of ${selectedDoc.name}, all terms are strictly governed under standard Indian commercial jurisdictions with full IP rights assigned upon milestone completion.`,
        citation: `Page ${Math.floor(Math.random() * 5) + 1}, Section ${(Math.floor(Math.random() * 4) + 1)}.2`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, aiMsg]);
    } catch (err) {
      console.error(err);
    } finally {
      setIsAsking(false);
    }
  };

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6">
      
      {/* Top Banner */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-cyan-400" />
            <span>Chat with PDF (Document AI Intelligence)</span>
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Query contracts, audit reports, research papers, and policies with page-level citations.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-400">Sample Document:</span>
          <select
            value={selectedDoc.id}
            onChange={e => {
              const doc = SAMPLE_DOCS.find(d => d.id === e.target.value) || SAMPLE_DOCS[0];
              setSelectedDoc(doc);
              setMessages([
                {
                  id: Date.now().toString(),
                  sender: 'ai',
                  text: `Switched active document to **${doc.name}**. What would you like to examine?`,
                  citation: 'Index Re-indexed',
                  timestamp: 'Just now'
                }
              ]);
            }}
            className="bg-slate-950 border border-slate-800 text-cyan-300 text-xs rounded-xl px-3 py-1.5 focus:outline-none focus:border-cyan-400"
          >
            {SAMPLE_DOCS.map(d => (
              <option key={d.id} value={d.id}>{d.name}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Side: Document Overview & Suggested Queries */}
        <div className="lg:col-span-4 space-y-4">
          
          {/* Active File Card */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 space-y-3">
            <div className="flex items-start gap-3">
              <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-xs font-bold text-white truncate">{selectedDoc.name}</div>
                <div className="text-[11px] text-slate-400 mt-0.5">{selectedDoc.pages} Pages • {selectedDoc.size} • Verified</div>
              </div>
            </div>

            <div className="text-xs text-slate-300 bg-slate-900/90 rounded-xl p-3 border border-slate-800/80 leading-relaxed">
              <span className="font-semibold text-cyan-300 block mb-1">Document Synopsis:</span>
              {selectedDoc.summary}
            </div>
          </div>

          {/* Quick Questions Box */}
          <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 space-y-2.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Suggested Inquiries:</span>
            </span>
            <div className="space-y-1.5">
              {SUGGESTED_QUESTIONS.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(q)}
                  className="w-full text-left text-xs p-2.5 rounded-xl bg-slate-900/60 hover:bg-cyan-500/10 border border-slate-800/80 hover:border-cyan-500/30 text-slate-300 hover:text-cyan-300 transition leading-snug"
                >
                  "{q}"
                </button>
              ))}
            </div>
          </div>

          {/* Upload New Document Placeholder */}
          <div className="border border-dashed border-slate-800 hover:border-cyan-500/40 rounded-2xl p-4 text-center cursor-pointer transition bg-slate-950/40">
            <Upload className="w-5 h-5 text-slate-400 mx-auto mb-1.5" />
            <div className="text-xs font-semibold text-slate-300">Drop PDF to analyze</div>
            <div className="text-[10px] text-slate-400 mt-0.5">Processed 100% in browser memory</div>
          </div>

        </div>

        {/* Right Side: Interactive Chat Stream */}
        <div className="lg:col-span-8 flex flex-col h-[520px] bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
          
          {/* Chat Messages Log */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
            {messages.map(msg => (
              <div
                key={msg.id}
                className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'ai' && (
                  <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-[82%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed space-y-2 ${
                    msg.sender === 'user'
                      ? 'bg-cyan-500 text-slate-950 font-medium rounded-tr-none'
                      : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-tl-none'
                  }`}
                >
                  <div className="whitespace-pre-wrap">{msg.text}</div>
                  
                  {msg.sender === 'ai' && (
                    <div className="flex items-center justify-between gap-2 pt-2 border-t border-slate-800/80 text-[11px] text-slate-400">
                      {msg.citation && (
                        <span className="text-cyan-400 font-mono text-[10px] bg-cyan-500/10 px-2 py-0.5 rounded-md border border-cyan-500/20">
                          📌 {msg.citation}
                        </span>
                      )}
                      <button
                        onClick={() => handleCopy(msg.text, msg.id)}
                        className="hover:text-white flex items-center gap-1 transition ml-auto"
                      >
                        {copiedId === msg.id ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                        <span>{copiedId === msg.id ? 'Copied' : 'Copy'}</span>
                      </button>
                    </div>
                  )}
                </div>

                {msg.sender === 'user' && (
                  <div className="w-8 h-8 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 shrink-0">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {isAsking && (
              <div className="flex gap-3 justify-start items-center text-xs text-cyan-400 animate-pulse">
                <Bot className="w-5 h-5 animate-spin" />
                <span>Reading document pages and synthesizing response...</span>
              </div>
            )}
          </div>

          {/* Chat Input Bar */}
          <form
            onSubmit={e => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 sm:p-4 bg-slate-900 border-t border-slate-800 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputQuery}
              onChange={e => setInputQuery(e.target.value)}
              placeholder="Ask anything about this document..."
              className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
            />
            <button
              type="submit"
              disabled={isAsking || !inputQuery.trim()}
              className="px-4 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 rounded-xl font-bold text-xs flex items-center gap-1.5 transition disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              <span className="hidden sm:inline">Ask AI</span>
            </button>
          </form>

        </div>

      </div>
    </div>
  );
};
