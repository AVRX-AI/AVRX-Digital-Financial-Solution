import React, { useState } from 'react';
import { Bot, Send, Sparkles, User, RefreshCw, CheckCircle2, MessageSquareText } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  time: string;
}

export const AIAssistantSection: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'assistant',
      text: 'Hello! I am AVRX AI, your intelligent business & financial advisor. How can I assist you with website development, business loans, GST/tax filings, or insurance today?',
      time: 'Just now'
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const suggestedPrompts = [
    'Which loan is suitable for me?',
    'Check my website health',
    'How can I improve my SEO?',
    'I need a business website',
    'Which tax registration do I need?',
    'Find the right insurance solution',
    'How can I grow my business online?'
  ];

  const handleSend = async (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query || loading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/ai-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: query })
      });
      const data = await response.json();

      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'assistant',
        text: data.reply || 'Thank you for consulting AVRX AI. Our team is ready to guide your business requirements.',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botMsg]);
    } catch (err) {
      const fallbackMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'assistant',
        text: 'AVRX offers comprehensive Digital, Financial, Tax, and Insurance solutions. You can also connect directly with an AVRX specialist via WhatsApp or our Contact page.',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, fallbackMsg]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-[#070b16] relative overflow-hidden border-t border-b border-slate-800/80">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-4">
            <Bot className="w-4 h-4 text-cyan-400" />
            <span>AI Command Center</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">AVRX AI</span>
          </h2>
          <p className="text-slate-400 text-base mt-3">
            Your intelligent business & financial assistant. Get instant recommendations on digital development, loans, tax filings, and insurance.
          </p>
        </div>

        {/* AI Command Center Box */}
        <div className="max-w-4xl mx-auto bg-slate-900/90 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden backdrop-blur-xl">
          
          {/* Top Terminal Bar */}
          <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-xs font-mono font-semibold text-slate-300 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                AVRX AI Intelligence Core v3.6
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>ONLINE</span>
            </div>
          </div>

          {/* Quick Prompts Bar */}
          <div className="px-4 py-3 bg-slate-950/60 border-b border-slate-800/60 overflow-x-auto scrollbar-none flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-400 shrink-0 px-2 flex items-center gap-1">
              <MessageSquareText className="w-3.5 h-3.5 text-cyan-400" />
              Prompts:
            </span>
            {suggestedPrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(prompt)}
                disabled={loading}
                className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-cyan-500/20 hover:border-cyan-500/40 border border-slate-800 text-xs font-medium text-slate-300 hover:text-cyan-300 transition shrink-0 disabled:opacity-50"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Chat Messages Container */}
          <div className="p-6 max-h-[380px] overflow-y-auto space-y-4 bg-slate-950/40">
            {messages.map(msg => (
              <div
                key={msg.id}
                className={`flex items-start gap-3 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
              >
                <div
                  className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-xs font-bold ${
                    msg.sender === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gradient-to-tr from-cyan-400 to-blue-500 text-slate-950 shadow-[0_0_15px_rgba(0,240,255,0.3)]'
                  }`}
                >
                  {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>

                <div className={`max-w-xl space-y-1 ${msg.sender === 'user' ? 'text-right' : ''}`}>
                  <div
                    className={`p-4 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                      msg.sender === 'user'
                        ? 'bg-blue-600/90 text-white rounded-tr-none'
                        : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-tl-none shadow'
                    }`}
                  >
                    {msg.text}
                  </div>
                  <div className="text-[10px] text-slate-500 font-mono px-1">
                    {msg.time}
                  </div>
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex items-center gap-3 text-slate-400 text-xs font-mono p-2">
                <RefreshCw className="w-4 h-4 text-cyan-400 animate-spin" />
                <span>AVRX AI is analyzing your business context...</span>
              </div>
            )}
          </div>

          {/* Chat Input Bar */}
          <div className="p-4 bg-slate-950 border-t border-slate-800">
            <form
              onSubmit={e => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-3"
            >
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Ask AVRX AI (e.g., Which tax filing is required for my startup?)"
                className="w-full bg-slate-900 border border-slate-800 rounded-2xl px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="px-5 py-3.5 bg-gradient-to-r from-cyan-400 to-blue-500 hover:brightness-110 text-slate-950 font-bold rounded-2xl transition disabled:opacity-40 disabled:hover:brightness-100 flex items-center justify-center shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
            <div className="flex items-center justify-between text-[11px] text-slate-500 mt-2.5 px-2">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                Powered by AVRX Gemini AI Engine
              </span>
              <span>All requests protected by SSL encryption</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
