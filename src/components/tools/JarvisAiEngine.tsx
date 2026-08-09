import React, { useState, useRef, useEffect } from 'react';
import {
  Cpu,
  Send,
  Sparkles,
  Bot,
  User,
  RefreshCw,
  Zap,
  HelpCircle,
  CheckCircle2,
  Volume2,
  VolumeX,
  Code2,
  Copy,
  Check
} from 'lucide-react';

interface Message {
  id: string;
  sender: 'user' | 'jarvis';
  text: string;
  timestamp: string;
  provider?: string;
}

export default function JarvisAiEngine() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'jarvis',
      text: `### **JARVIS 3D AI Assistant Initialized**\n\nWelcome! I am **JARVIS**, AVRX's AI Engine powered by **Gemini 3.6 Flash**. How can I help you today?\n\n- **Loans & Capital**: Business, MSME, Personal & Home loan interest rates & eligibility.\n- **Tax Solutions**: GST filing, ITR e-filing, company registration.\n- **Digital Services**: Website design, mobile app development, technical SEO & hosting.`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      provider: 'Gemini 3.6 Flash'
    }
  ]);
  const [inputPrompt, setInputPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [soundEnabled, setSoundEnabled] = useState(true);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const presetPrompts = [
    "Which business loan has lowest interest rate & zero collateral?",
    "How can I legally minimize GST & ITR taxes for my business?",
    "Estimate cost and timeline for a modern React & Flutter e-commerce website",
    "What are Core Web Vitals and how to achieve 90+ Mobile Speed score?"
  ];

  const handleSend = async (textToSend?: string) => {
    const prompt = (textToSend || inputPrompt).trim();
    if (!prompt || isLoading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: prompt,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputPrompt('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/gemini/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, history: messages.slice(-6) }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to communicate with JARVIS Engine');
      }

      const jarvisMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'jarvis',
        text: data.response || 'JARVIS processed your query successfully.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        provider: data.provider || 'Gemini 3.6 Flash'
      };

      setMessages((prev) => [...prev, jarvisMsg]);
    } catch (err: any) {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'jarvis',
          text: `### **JARVIS Advisory**\n\nI encountered a transient network condition, but here is instant guidance:\n\n- **Consultation Hotline**: Call/WhatsApp our Senior Architect at **+91 96306 61536**.\n- **Services Desk**: Explore our full range of Web, App, Loan, and Tax solutions in the top menu.`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          provider: 'AVRX Core Knowledge Engine'
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="glass-card rounded-3xl border border-cyan-500/30 bg-[#080B14] overflow-hidden shadow-2xl flex flex-col h-[700px]">
      {/* 3D Header Bar */}
      <div className="p-4 sm:p-6 bg-gradient-to-r from-[#0C1222] via-[#0D152A] to-[#0A0D18] border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-600 p-0.5 shadow-lg shadow-cyan-500/20 group">
            <div className="w-full h-full bg-[#080B14] rounded-[14px] flex items-center justify-center relative overflow-hidden">
              <Cpu className="w-6 h-6 text-cyan-400 animate-pulse" />
              <div className="absolute inset-0 bg-cyan-400/10 animate-ping rounded-full pointer-events-none" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-poppins font-bold text-lg text-white tracking-wide">JARVIS 3D AI Engine</h3>
              <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-[10px] font-bold tracking-wider uppercase">
                Gemini 3.6 Flash API
              </span>
            </div>
            <p className="text-xs text-slate-400">Intelligent query resolution for Services, Loans, Taxes & Tech</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className={`p-2.5 rounded-xl border text-xs font-semibold transition-all ${
              soundEnabled
                ? 'bg-cyan-500/20 border-cyan-500/40 text-cyan-300'
                : 'bg-white/5 border-white/10 text-slate-400'
            }`}
            title="Toggle Sound Effects"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Preset Query Pills */}
      <div className="px-4 py-3 bg-black/40 border-b border-white/5 overflow-x-auto flex items-center gap-2 no-scrollbar">
        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider whitespace-nowrap flex items-center gap-1">
          <Zap className="w-3 h-3 text-cyan-400" /> Quick Prompts:
        </span>
        {presetPrompts.map((prompt, idx) => (
          <button
            key={idx}
            onClick={() => handleSend(prompt)}
            className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-cyan-500/15 border border-white/10 hover:border-cyan-500/40 text-xs text-slate-300 hover:text-cyan-200 whitespace-nowrap transition-all"
          >
            {prompt}
          </button>
        ))}
      </div>

      {/* Message Chat Feed */}
      <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4 custom-scrollbar">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {msg.sender === 'jarvis' && (
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/20 flex-shrink-0 mt-1">
                <Bot className="w-5 h-5" />
              </div>
            )}

            <div
              className={`max-w-[85%] sm:max-w-[75%] p-4 sm:p-5 rounded-2xl text-xs sm:text-sm leading-relaxed space-y-2 relative group ${
                msg.sender === 'user'
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-tr-none shadow-lg shadow-blue-500/10'
                  : 'bg-[#0E1322] border border-white/10 text-slate-200 rounded-tl-none shadow-md'
              }`}
            >
              {msg.sender === 'jarvis' && (
                <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[10px] text-slate-400">
                  <span className="font-bold text-cyan-400 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-cyan-400" /> {msg.provider || 'JARVIS Engine'}
                  </span>
                  <span>{msg.timestamp}</span>
                </div>
              )}

              <div className="whitespace-pre-wrap font-sans">
                {msg.text}
              </div>

              {msg.sender === 'jarvis' && (
                <div className="pt-2 flex justify-end">
                  <button
                    onClick={() => copyToClipboard(msg.text, msg.id)}
                    className="text-[10px] text-slate-400 hover:text-cyan-300 flex items-center gap-1 px-2 py-1 rounded bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    {copiedId === msg.id ? (
                      <>
                        <Check className="w-3 h-3 text-green-400" />
                        <span className="text-green-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy Response</span>
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>

            {msg.sender === 'user' && (
              <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-slate-300 flex-shrink-0 mt-1">
                <User className="w-5 h-5" />
              </div>
            )}
          </div>
        ))}

        {isLoading && (
          <div className="flex gap-3 items-center">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/20">
              <Bot className="w-5 h-5" />
            </div>
            <div className="p-4 rounded-2xl bg-[#0E1322] border border-cyan-500/30 text-cyan-300 text-xs flex items-center gap-3">
              <RefreshCw className="w-4 h-4 animate-spin text-cyan-400" />
              <span>JARVIS is querying Gemini 3.6 Flash server API...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Prompt Input Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        className="p-4 bg-[#0A0D18] border-t border-white/10 flex items-center gap-3"
      >
        <input
          type="text"
          value={inputPrompt}
          onChange={(e) => setInputPrompt(e.target.value)}
          placeholder="Ask JARVIS about Business Loans, GST, Website Redesign, or Tech Stack..."
          className="flex-1 px-4 py-3.5 rounded-xl bg-white/5 border border-white/15 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-400"
        />
        <button
          type="submit"
          disabled={!inputPrompt.trim() || isLoading}
          className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-sm shadow-xl shadow-cyan-500/25 flex items-center gap-2 transition-all disabled:opacity-50"
        >
          <span>Send</span>
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}
