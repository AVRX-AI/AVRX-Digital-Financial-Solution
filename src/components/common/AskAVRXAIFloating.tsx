import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, Sparkles, User, RefreshCw, X, MessageSquareText, ShieldAlert, ArrowRight, ExternalLink } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  time: string;
  action?: {
    label: string;
    targetPage: string;
    serviceSlug?: string;
  };
}

interface AskAVRXAIFloatingProps {
  onNavigate: (page: string, slug?: string) => void;
}

export const AskAVRXAIFloating: React.FC<AskAVRXAIFloatingProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'assistant',
      text: 'Greetings. I am AVRX AI, your intelligent digital, financial, and tax solutions navigator. How can I assist you with your business goals or personal financing today?',
      time: 'Online',
      action: {
        label: 'Explore All Solutions',
        targetPage: 'services'
      }
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  const suggestedPrompts = [
    'Which loan may suit my requirement?',
    'Which insurance should I explore?',
    'I need a business website.',
    'Help me calculate EMI.',
    'I want to improve my website SEO.'
  ];

  useEffect(() => {
    if (isOpen && chatBottomRef.current) {
      chatBottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSend = async (queryToSend?: string) => {
    const query = (queryToSend || input).trim();
    if (!query || loading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!queryToSend) setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/ai-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: query })
      });
      const data = await response.json();

      let action: ChatMessage['action'] = undefined;
      const lower = query.toLowerCase();
      if (lower.includes('loan') || lower.includes('emi') || lower.includes('finance')) {
        action = { label: 'Explore Loan Solutions & Calculators', targetPage: 'financial-solutions' };
      } else if (lower.includes('website') || lower.includes('web') || lower.includes('app') || lower.includes('seo')) {
        action = { label: 'Explore Digital & Web Solutions', targetPage: 'digital-solutions' };
      } else if (lower.includes('insurance') || lower.includes('health') || lower.includes('motor')) {
        action = { label: 'Explore Insurance Plans', targetPage: 'insurance-solutions' };
      } else if (lower.includes('gst') || lower.includes('tax') || lower.includes('itr') || lower.includes('udyam')) {
        action = { label: 'Explore Tax & Compliance Services', targetPage: 'tax-solutions' };
      }

      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'assistant',
        text: data.reply || 'AVRX delivers integrated digital engineering, loans, GST compliance, and insurance coverage.',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        action
      };
      setMessages(prev => [...prev, botMsg]);
    } catch {
      const fallbackMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'assistant',
        text: 'AVRX combines digital development, loan financing, tax compliance, and IRDAI insurance assistance. Would you like to view our dedicated service pages or consult an advisor?',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        action: { label: 'Explore Services Directory', targetPage: 'services' }
      };
      setMessages(prev => [...prev, fallbackMsg]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Trigger Pill */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          onClick={() => setIsOpen(true)}
          className="group relative px-4 py-3 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border border-cyan-500/40 hover:border-cyan-400 rounded-full shadow-[0_0_25px_rgba(0,240,255,0.3)] hover:shadow-[0_0_35px_rgba(0,240,255,0.5)] transition transform hover:-translate-y-0.5 flex items-center gap-2.5 cursor-pointer backdrop-blur-xl"
          aria-label="Ask AVRX AI"
        >
          {/* Glowing pulse aura */}
          <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-30 group-hover:opacity-60 blur transition duration-300 pointer-events-none" />

          <div className="relative w-7 h-7 rounded-full bg-cyan-500/20 border border-cyan-400/50 flex items-center justify-center text-cyan-300">
            <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
          </div>

          <div className="relative text-left pr-1">
            <div className="text-xs font-black text-white flex items-center gap-1.5">
              <span>Ask AVRX AI</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            </div>
            <div className="text-[9px] text-cyan-300 font-mono tracking-wider">JARVIS INTEL CORE</div>
          </div>
        </button>
      </div>

      {/* Floating Glassmorphic Chat Panel */}
      {isOpen && (
        <div className="fixed bottom-20 left-4 sm:left-6 z-50 w-[92vw] sm:w-[420px] max-h-[82vh] h-[600px] flex flex-col rounded-3xl bg-slate-950/95 border border-cyan-500/30 backdrop-blur-2xl shadow-[0_0_50px_rgba(0,240,255,0.2)] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-cyan-950/80 via-slate-950 to-blue-950/80 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-2xl bg-cyan-500/10 border border-cyan-400/40 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                <Bot className="w-5 h-5" />
                <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-slate-950" />
              </div>
              <div>
                <h3 className="text-sm font-black text-white flex items-center gap-1.5">
                  <span>AVRX AI Advisor</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">v3.6</span>
                </h3>
                <p className="text-[10px] text-slate-400 font-mono">Digital • Finance • Tax • Insurance</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Suggested Prompts */}
          <div className="px-3 py-2 bg-slate-900/60 border-b border-slate-800/80 overflow-x-auto scrollbar-none flex items-center gap-1.5">
            {suggestedPrompts.map((p, i) => (
              <button
                key={i}
                onClick={() => handleSend(p)}
                disabled={loading}
                className="px-2.5 py-1 rounded-xl bg-slate-950 hover:bg-cyan-500/20 hover:border-cyan-500/40 border border-slate-800 text-[11px] text-slate-300 hover:text-cyan-300 whitespace-nowrap transition cursor-pointer disabled:opacity-50"
              >
                {p}
              </button>
            ))}
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs">
            {messages.map(msg => (
              <div
                key={msg.id}
                className={`flex items-start gap-2.5 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
              >
                <div
                  className={`w-7 h-7 rounded-xl flex items-center justify-center shrink-0 text-xs font-bold ${
                    msg.sender === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gradient-to-tr from-cyan-400 to-blue-500 text-slate-950'
                  }`}
                >
                  {msg.sender === 'user' ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                </div>

                <div className={`space-y-1.5 max-w-[82%] ${msg.sender === 'user' ? 'text-right' : ''}`}>
                  <div
                    className={`p-3 rounded-2xl leading-relaxed whitespace-pre-wrap ${
                      msg.sender === 'user'
                        ? 'bg-blue-600 text-white rounded-tr-none'
                        : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-tl-none shadow-md'
                    }`}
                  >
                    {msg.text}
                  </div>

                  {msg.action && (
                    <button
                      onClick={() => {
                        onNavigate(msg.action!.targetPage, msg.action!.serviceSlug);
                        setIsOpen(false);
                      }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-[11px] font-bold transition hover:scale-102 cursor-pointer"
                    >
                      <span>{msg.action.label}</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  )}

                  <div className="text-[9px] text-slate-500 font-mono px-1">
                    {msg.time}
                  </div>
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex items-center gap-2 p-2 text-cyan-400 text-[11px] font-mono">
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                <span>AVRX AI is computing response...</span>
              </div>
            )}
            <div ref={chatBottomRef} />
          </div>

          {/* Legal Disclaimer Bar */}
          <div className="px-3 py-1.5 bg-slate-950 border-t border-slate-800/80 text-[10px] text-slate-500 flex items-center gap-1.5">
            <ShieldAlert className="w-3 h-3 text-amber-400 shrink-0" />
            <span className="truncate">Informational only; does not replace formal financial/legal advisory.</span>
          </div>

          {/* Input Footer */}
          <div className="p-3 bg-slate-950 border-t border-slate-800">
            <form
              onSubmit={e => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Ask AVRX AI about loans, websites, GST..."
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="p-2.5 bg-gradient-to-r from-cyan-400 to-blue-500 hover:brightness-110 text-slate-950 font-bold rounded-xl transition disabled:opacity-40 cursor-pointer shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>
      )}
    </>
  );
};
