import React, { useState } from 'react';
import { MessageSquare, X, Send, Sparkles, Bot, PhoneCall, CheckCircle2 } from 'lucide-react';

export default function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'bot'; text: string; time: string }>>([
    {
      sender: 'bot',
      text: "Hello! Welcome to AVRX Digital & Financial Solution. How can I assist you with your Digital, Financial, Tax, or AI requirements today?",
      time: 'Just now'
    }
  ]);
  const [input, setInput] = useState('');
  const [step, setStep] = useState<'chat' | 'lead'>('chat');
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [leadForm, setLeadForm] = useState({ name: '', phone: '', service: 'Digital Services' });

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMsg = input;
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    setMessages((prev) => [...prev, { sender: 'user', text: newMsg, time: timestamp }]);
    setInput('');

    setTimeout(() => {
      let reply = "Thank you for reaching out! Our Senior Solution Architect can guide you on this.";
      const lower = newMsg.toLowerCase();
      if (lower.includes('loan') || lower.includes('finance') || lower.includes('interest')) {
        reply = "We offer instant Personal, Business, Home, and MSME loans up to ₹20 Crores with rates starting at 8.35% p.a. Would you like to schedule a quick call with our Financial Advisor?";
      } else if (lower.includes('website') || lower.includes('app') || lower.includes('design') || lower.includes('seo')) {
        reply = "Our digital team builds CRED-inspired websites, Flutter/iOS apps, and SEO strategies. Let's book a free 30-min strategy session!";
      } else if (lower.includes('gst') || lower.includes('tax') || lower.includes('itr')) {
        reply = "Our Chartered Accountants provide same-day GST filing, ITR tax advisory, and Udyam/company incorporation.";
      } else if (lower.includes('ai') || lower.includes('tool')) {
        reply = "Explore our live AI Website Health Checker and SEO Score tools in our AI Solutions portal!";
      }

      setMessages((prev) => [...prev, { sender: 'bot', text: reply, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
    }, 800);
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadForm.name || !leadForm.phone) return;

    setLeadSubmitted(true);
    setMessages((prev) => [
      ...prev,
      {
        sender: 'bot',
        text: `Thank you ${leadForm.name}! We have received your callback request for ${leadForm.service}. A specialist will call you at ${leadForm.phone} shortly.`,
        time: 'Just now'
      }
    ]);
    setTimeout(() => {
      setStep('chat');
      setLeadSubmitted(false);
      setLeadForm({ name: '', phone: '', service: 'Digital Services' });
    }, 2500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Open Chatbot window */}
      {isOpen && (
        <div className="w-80 sm:w-96 h-[480px] mb-4 rounded-3xl glass-card bg-[#0B0D13]/95 border border-white/15 shadow-2xl shadow-blue-950/40 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-300">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 flex items-center justify-between text-white">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center border border-white/20">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <div className="font-poppins font-bold text-sm flex items-center gap-1.5">
                  <span>AVRX AI Assistant</span>
                  <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                </div>
                <div className="text-[11px] text-blue-100/80 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span>24x7 Online • Instant Support</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setStep(step === 'chat' ? 'lead' : 'chat')}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-medium px-2.5 transition-colors"
                title="Request Callback"
              >
                {step === 'chat' ? 'Call Me' : 'Chat'}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Body */}
          {step === 'chat' ? (
            <>
              <div className="flex-1 p-4 overflow-y-auto space-y-3">
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                  >
                    <div
                      className={`max-w-[82%] p-3 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                        msg.sender === 'user'
                          ? 'bg-blue-600 text-white rounded-br-none'
                          : 'bg-white/10 text-slate-200 border border-white/10 rounded-bl-none'
                      }`}
                    >
                      {msg.text}
                    </div>
                    <span className="text-[10px] text-slate-500 mt-1 px-1">{msg.time}</span>
                  </div>
                ))}
              </div>

              {/* Smart Suggestion Chips */}
              <div className="px-4 py-2 border-t border-white/5 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
                {[
                  'Financial Loans',
                  'Website Design',
                  'GST & Tax',
                  'AI Tools',
                  'Pricing'
                ].map((chip) => (
                  <button
                    key={chip}
                    onClick={() => setInput(chip)}
                    className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] text-slate-300 whitespace-nowrap transition-colors"
                  >
                    {chip}
                  </button>
                ))}
              </div>

              {/* Footer Form */}
              <form onSubmit={handleSend} className="p-3 border-t border-white/10 bg-black/30 flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about digital, loans, tax or AI..."
                  className="flex-1 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
                <button
                  type="submit"
                  className="p-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-md transition-all"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </>
          ) : (
            <div className="flex-1 p-6 flex flex-col justify-center">
              {leadSubmitted ? (
                <div className="text-center space-y-3 py-6">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="font-poppins font-bold text-white text-base">Callback Booked!</h4>
                  <p className="text-xs text-slate-400">
                    Our Senior Solution Advisor will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleLeadSubmit} className="space-y-4">
                  <div className="text-center space-y-1">
                    <h4 className="font-poppins font-bold text-white text-sm">Request 1-on-1 Consultation</h4>
                    <p className="text-xs text-slate-400">We respond within 15 minutes during business hours.</p>
                  </div>

                  <div>
                    <label className="block text-xs text-slate-300 mb-1">Your Full Name</label>
                    <input
                      type="text"
                      required
                      value={leadForm.name}
                      onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-300 mb-1">Phone Number / WhatsApp</label>
                    <input
                      type="tel"
                      required
                      value={leadForm.phone}
                      onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                      placeholder="+1 (800) 000-0000"
                      className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-300 mb-1">Service Category</label>
                    <select
                      value={leadForm.service}
                      onChange={(e) => setLeadForm({ ...leadForm, service: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-blue-500"
                    >
                      <option className="bg-[#0B0D13]">Digital Services & Website</option>
                      <option className="bg-[#0B0D13]">Financial Loans & Credit</option>
                      <option className="bg-[#0B0D13]">GST, ITR & Tax Advisory</option>
                      <option className="bg-[#0B0D13]">Insurance Comparison</option>
                      <option className="bg-[#0B0D13]">AI Solutions & Custom Tech</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold text-xs shadow-lg shadow-blue-500/25 flex items-center justify-center gap-1.5"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Submit Request</span>
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 via-blue-700 to-cyan-500 text-white shadow-2xl shadow-blue-500/40 hover:shadow-blue-500/60 hover:scale-105 transition-all duration-300 flex items-center justify-center relative group"
        aria-label="Toggle AI Support Assistant"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <>
            <Bot className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-[#08090C] animate-ping" />
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-[#08090C]" />
          </>
        )}
      </button>
    </div>
  );
}
