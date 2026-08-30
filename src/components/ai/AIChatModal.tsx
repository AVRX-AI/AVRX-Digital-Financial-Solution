import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  Send, 
  Mic, 
  MicOff, 
  Volume2, 
  VolumeX, 
  Bot, 
  User, 
  Sparkles, 
  ArrowRight, 
  Maximize2, 
  Minimize2, 
  RefreshCw, 
  ShieldAlert, 
  Globe, 
  PhoneCall, 
  Check, 
  Layers, 
  Zap, 
  Building2, 
  FileText, 
  HeartHandshake
} from 'lucide-react';
import { AIMessage, PortfolioSample, ServicePackage, LeadItem } from '../../types/ai';
import { aiVoiceEngine } from '../../utils/aiVoiceEngine';
import { AIPortfolioCard } from './AIPortfolioCard';
import { AIPricingCard } from './AIPricingCard';
import { AILeadCaptureCard } from './AILeadCaptureCard';
import { AIHumanHandoffCard } from './AIHumanHandoffCard';

interface AIChatModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: string, serviceSlug?: string) => void;
}

const QUICK_SERVICE_CHIPS = [
  { label: '🌐 Website Design', query: 'I want to build a website for my business. What are your packages and live samples?' },
  { label: '🛒 E-commerce Store', query: 'I want an E-commerce Online Store with UPI payment and WhatsApp checkout' },
  { label: '📱 Mobile App', query: 'Tell me about Android & iOS Mobile App development' },
  { label: '💰 Loans & Finance', query: 'What are the loan options, interest rates, and eligibility criteria?' },
  { label: '🏛️ Govt Subsidy Loan', query: 'Tell me about PMEGP and MUDRA Govt Subsidized Loans' },
  { label: '📄 GST & ITR Filing', query: 'I need GST Registration and Income Tax Return (ITR) filing service' },
  { label: '🛡️ Insurance Plans', query: 'What motor and health insurance plans do you offer?' },
  { label: '🎨 View Live Samples', query: 'Show me your live website and design portfolio samples' },
  { label: '💬 Talk to AVRX Team', query: 'I want to speak directly with an AVRX specialist executive' }
];

export const AIChatModal: React.FC<AIChatModalProps> = ({
  isOpen,
  onClose,
  onNavigate
}) => {
  const [messages, setMessages] = useState<AIMessage[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [sessionId] = useState(() => `sess_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`);
  
  // Audio & Voice States
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [ttsSpeechEnabled, setTtsSpeechEnabled] = useState(false); // assistant auto reads out
  const [selectedLanguage, setSelectedLanguage] = useState<'auto' | 'hi-IN' | 'en-US'>('hi-IN');
  const [voiceTranscript, setVoiceTranscript] = useState('');

  // Viewport states
  const [isMaximized, setIsMaximized] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadContext, setLeadContext] = useState<{ serviceName: string; packageName?: string; requirement?: string }>({
    serviceName: 'Website & Digital Solutions'
  });

  const chatBottomRef = useRef<HTMLDivElement>(null);

  // Initialize greeting on mount
  useEffect(() => {
    if (messages.length === 0) {
      const initialGreeting: AIMessage = {
        id: 'msg_welcome',
        role: 'assistant',
        message: 'नमस्ते! मैं AVRX AI Assistant हूँ।\n\nमैं आपकी Website/App Development, Business/Personal Loans, GST/Tax, और Insurance ज़रूरतों में मदद कर सकती हूँ। आप क्या जानना या शुरू करना चाहते हैं?',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        payload: {
          quick_options: [
            { label: '🌐 Website (starts ₹4,999)', action_value: 'Show me website packages and live demos' },
            { label: '💰 Business/Personal Loan', action_value: 'Tell me about loan options and interest rates' },
            { label: '📄 GST / ITR Tax Filing', action_value: 'I need GST registration or ITR filing' },
            { label: '🎨 See Design Samples', action_value: 'Show me live demo samples for shops & businesses' }
          ]
        }
      };
      setMessages([initialGreeting]);
    }
  }, []);

  // Voice Engine Callbacks Setup
  useEffect(() => {
    aiVoiceEngine.setCallbacks({
      onListeningStart: () => setIsListening(true),
      onListeningEnd: () => setIsListening(false),
      onSpeakingStart: () => setIsSpeaking(true),
      onSpeakingEnd: () => setIsSpeaking(false),
      onTranscript: (transcript, isFinal) => {
        setVoiceTranscript(transcript);
        if (isFinal) {
          setInput(transcript);
          handleSend(transcript, true);
        }
      },
      onError: (err) => {
        console.warn('Voice Engine Error:', err);
        setIsListening(false);
      }
    });

    return () => {
      aiVoiceEngine.stopAll();
    };
  }, [messages, selectedLanguage, ttsSpeechEnabled]);

  // Scroll to bottom smoothly
  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading, showLeadForm]);

  // Handle sending message
  const handleSend = async (customQuery?: string, fromVoice: boolean = false) => {
    const query = (customQuery || input).trim();
    if (!query || loading) return;

    // Stop speaking active TTS if any
    aiVoiceEngine.stopSpeaking();

    const userMsg: AIMessage = {
      id: `msg_u_${Date.now()}`,
      role: 'user',
      message: query,
      message_type: fromVoice ? 'voice' : 'text',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!customQuery) setInput('');
    setVoiceTranscript('');
    setLoading(true);

    try {
      const response = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: query,
          conversationHistory: messages.slice(-5).map(m => ({ role: m.role, message: m.message })),
          sessionId,
          voiceUsed: fromVoice || isSpeaking || isListening,
          userLanguage: selectedLanguage
        })
      });

      const data = await response.json();

      const assistantMsg: AIMessage = {
        id: `msg_a_${Date.now()}`,
        role: 'assistant',
        message: data.reply || 'AVRX combines digital development, loan financing, tax compliance, and IRDAI insurance assistance.',
        service_detected: data.service,
        intent_detected: data.intent,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        payload: {
          quick_options: data.quick_options,
          samples: data.samples,
          packages: data.packages,
          navigation: data.navigation,
          handoff_triggered: data.handoff,
          whatsapp_url: data.whatsapp_url
        }
      };

      setMessages(prev => [...prev, assistantMsg]);

      // Auto-speak response if TTS is toggled on or voice was used
      if (ttsSpeechEnabled || fromVoice) {
        aiVoiceEngine.speak(data.reply, selectedLanguage === 'en-US' ? 'en-IN' : 'hi-IN');
      }

    } catch (err) {
      const errorFallback: AIMessage = {
        id: `msg_err_${Date.now()}`,
        role: 'assistant',
        message: 'AVRX helps businesses with Custom Websites, Business & Personal Loans, GST/ITR compliance, and Insurance.\n\nWould you like to connect directly with our specialist team on WhatsApp?',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        payload: {
          handoff_triggered: true,
          whatsapp_url: 'https://wa.me/919630661536'
        }
      };
      setMessages(prev => [...prev, errorFallback]);
    } finally {
      setLoading(false);
    }
  };

  const toggleVoiceListening = () => {
    if (isListening) {
      aiVoiceEngine.stopListening();
      setIsListening(false);
    } else {
      aiVoiceEngine.startListening(selectedLanguage === 'en-US' ? 'en-IN' : 'hi-IN');
    }
  };

  const handleSelectSample = (sample: PortfolioSample) => {
    setLeadContext({
      serviceName: 'Website Design & Development',
      packageName: `Sample Reference: ${sample.title}`,
      requirement: `Interested in sample design: ${sample.title} (${sample.business_type})`
    });
    setShowLeadForm(true);
  };

  const handleSelectPackage = (pkg: ServicePackage) => {
    setLeadContext({
      serviceName: pkg.package_name.includes('GST') ? 'GST Registration' : 'Website Design & Development',
      packageName: `${pkg.package_name} (₹${pkg.price.toLocaleString('en-IN')})`,
      requirement: `Selected Package: ${pkg.package_name}`
    });
    setShowLeadForm(true);
  };

  const handleLeadCreated = (lead: LeadItem, whatsappUrl: string) => {
    setShowLeadForm(false);
    const confirmationMsg: AIMessage = {
      id: `msg_lead_confirm_${Date.now()}`,
      role: 'assistant',
      message: `धन्यवाद ${lead.full_name}! आपका Consultation Request (Lead ID: ${lead.lead_number}) सफलतापूर्वक दर्ज कर लिया गया है।\n\nहमारी टीम आपसे 15 मिनट के अंदर संपर्क करेगी। आप चाहें तो नीचे दिए बटन से सीधे WhatsApp पर भी बात कर सकते हैं।`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      payload: {
        whatsapp_url: whatsappUrl,
        lead_created: {
          lead_number: lead.lead_number,
          full_name: lead.full_name,
          service_name: lead.service_name,
          package_name: lead.package_name
        }
      }
    };
    setMessages(prev => [...prev, confirmationMsg]);
  };

  const clearChat = () => {
    aiVoiceEngine.stopAll();
    setMessages([
      {
        id: 'msg_welcome_new',
        role: 'assistant',
        message: 'नमस्ते! मैं AVRX AI Assistant हूँ। आपकी क्या सहायता कर सकती हूँ?',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        payload: {
          quick_options: [
            { label: '🌐 Website Design', action_value: 'Show me website packages' },
            { label: '💰 Loans & Finance', action_value: 'Tell me about loans' },
            { label: '📄 GST / Tax', action_value: 'I need GST registration' }
          ]
        }
      }
    ]);
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed z-50 transition-all duration-300 flex flex-col overflow-hidden bg-slate-950/95 border border-cyan-500/40 backdrop-blur-2xl shadow-[0_0_60px_rgba(0,240,255,0.25)] ${
        isMaximized
          ? 'inset-2 sm:inset-6 rounded-2xl sm:rounded-3xl'
          : 'inset-x-2 bottom-3 top-14 sm:top-auto sm:inset-x-auto sm:bottom-6 sm:right-6 sm:w-[460px] sm:h-[660px] sm:max-h-[85vh] rounded-2xl sm:rounded-3xl'
      }`}
    >
      {/* 1. FUTURISTIC HEADER */}
      <div className="p-3.5 sm:p-4 bg-gradient-to-r from-cyan-950/90 via-slate-950 to-blue-950/90 border-b border-cyan-500/20 flex items-center justify-between">
        
        {/* Assistant Identity */}
        <div className="flex items-center gap-2.5">
          <div className="relative w-9 h-9 rounded-2xl bg-gradient-to-tr from-cyan-500/20 to-blue-600/30 border border-cyan-400/50 flex items-center justify-center text-cyan-300 shadow-[0_0_20px_rgba(0,240,255,0.3)]">
            <Bot className="w-5 h-5 text-cyan-300" />
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-slate-950 animate-pulse" />
          </div>

          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="text-xs sm:text-sm font-black text-white tracking-wide">AVRX AI Assistant</h3>
              <span className="text-[9px] font-mono px-1.5 py-0.2 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                v4.0 PRO
              </span>
            </div>
            <div className="flex items-center gap-2 text-[10px] text-slate-400 font-mono">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Online Concierge
              </span>
              <span>•</span>
              <span className="text-cyan-400">Digital & Finance</span>
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1 sm:gap-1.5">
          
          {/* TTS Audio Toggle */}
          <button
            onClick={() => {
              const next = !ttsSpeechEnabled;
              setTtsSpeechEnabled(next);
              if (!next) aiVoiceEngine.stopSpeaking();
            }}
            title={ttsSpeechEnabled ? 'Assistant Voice Audio: ON' : 'Assistant Voice Audio: OFF (Muted)'}
            className={`p-1.5 rounded-xl border transition cursor-pointer ${
              ttsSpeechEnabled
                ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-[0_0_10px_rgba(0,240,255,0.3)]'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            {ttsSpeechEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
          </button>

          {/* Language Selector */}
          <div className="relative">
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value as any)}
              className="bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-300 text-[10px] rounded-xl px-2 py-1.5 font-mono focus:outline-none cursor-pointer"
            >
              <option value="hi-IN">🇮🇳 Hindi / Hinglish</option>
              <option value="en-US">🇬🇧 English</option>
              <option value="auto">🌐 Auto Detect</option>
            </select>
          </div>

          {/* Reset Chat */}
          <button
            onClick={clearChat}
            title="Reset Chat"
            className="p-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>

          {/* Maximize Toggle */}
          <button
            onClick={() => setIsMaximized(!isMaximized)}
            title={isMaximized ? 'Restore View' : 'Full Screen'}
            className="p-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition cursor-pointer hidden sm:block"
          >
            {isMaximized ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>

          {/* Close */}
          <button
            onClick={() => {
              aiVoiceEngine.stopAll();
              onClose();
            }}
            className="p-1.5 rounded-xl bg-slate-900 hover:bg-rose-950 border border-slate-800 hover:border-rose-500/50 text-slate-400 hover:text-rose-300 transition cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 2. TOP QUICK ACTION CHIPS */}
      <div className="px-3 py-2 bg-slate-900/70 border-b border-slate-800/80 overflow-x-auto scrollbar-none flex items-center gap-1.5">
        {QUICK_SERVICE_CHIPS.map((chip, idx) => (
          <button
            key={idx}
            onClick={() => handleSend(chip.query)}
            disabled={loading}
            className="px-2.5 py-1 rounded-xl bg-slate-950 hover:bg-cyan-500/20 border border-slate-800 hover:border-cyan-500/40 text-[10px] text-slate-300 hover:text-cyan-300 whitespace-nowrap transition cursor-pointer disabled:opacity-50 font-medium"
          >
            {chip.label}
          </button>
        ))}
      </div>

      {/* 3. VOICE WAVEFORM STATUS BAR (Visible when listening or speaking) */}
      {(isListening || isSpeaking) && (
        <div className="px-4 py-2 bg-gradient-to-r from-cyan-950/90 via-slate-900 to-blue-950/90 border-b border-cyan-500/30 flex items-center justify-between text-xs animate-in fade-in">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-4 rounded-full bg-cyan-400 animate-pulse" />
              <span className="w-1.5 h-6 rounded-full bg-cyan-300 animate-bounce" />
              <span className="w-1.5 h-3 rounded-full bg-blue-400 animate-pulse" />
              <span className="w-1.5 h-5 rounded-full bg-cyan-400 animate-bounce" />
            </div>
            <span className="text-cyan-300 font-mono font-bold text-[11px]">
              {isListening ? 'Listening to your voice...' : 'AVRX AI is speaking...'}
            </span>
          </div>

          <button
            onClick={() => aiVoiceEngine.stopAll()}
            className="px-2 py-0.5 rounded-lg bg-rose-950 border border-rose-500/40 text-rose-300 text-[10px] font-mono hover:bg-rose-900 cursor-pointer"
          >
            Stop Audio
          </button>
        </div>
      )}

      {/* 4. MESSAGES CONTAINER */}
      <div className="flex-1 p-3.5 sm:p-4 overflow-y-auto space-y-4 text-xs">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-start gap-2.5 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
          >
            {/* Avatar */}
            <div
              className={`w-7 h-7 rounded-xl flex items-center justify-center shrink-0 text-xs font-black shadow ${
                msg.role === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gradient-to-tr from-cyan-400 to-blue-500 text-slate-950'
              }`}
            >
              {msg.role === 'user' ? (
                <User className="w-3.5 h-3.5" />
              ) : (
                <Bot className="w-3.5 h-3.5" />
              )}
            </div>

            {/* Message Bubble & Cards */}
            <div className={`space-y-2 max-w-[86%] ${msg.role === 'user' ? 'text-right' : ''}`}>
              
              {/* Text Bubble */}
              <div
                className={`p-3.5 rounded-2xl leading-relaxed whitespace-pre-wrap ${
                  msg.role === 'user'
                    ? 'bg-blue-600 text-white rounded-tr-none shadow-md'
                    : 'bg-slate-900/90 border border-slate-800 text-slate-100 rounded-tl-none shadow-lg'
                }`}
              >
                {msg.message}
              </div>

              {/* Quick Option Buttons */}
              {msg.payload?.quick_options && msg.payload.quick_options.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {msg.payload.quick_options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => handleSend(opt.action_value)}
                      disabled={loading}
                      className="px-2.5 py-1.5 rounded-xl bg-slate-900 hover:bg-cyan-500/20 border border-slate-800 hover:border-cyan-500/40 text-cyan-300 text-[10px] font-semibold transition cursor-pointer hover:scale-102"
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              )}

              {/* Recommended Live Samples Card Carousel */}
              {msg.payload?.samples && msg.payload.samples.length > 0 && (
                <AIPortfolioCard
                  samples={msg.payload.samples}
                  onSelectSample={handleSelectSample}
                />
              )}

              {/* Recommended Pricing Packages */}
              {msg.payload?.packages && msg.payload.packages.length > 0 && (
                <AIPricingCard
                  packages={msg.payload.packages}
                  onSelectPackage={handleSelectPackage}
                />
              )}

              {/* Navigation Action CTA */}
              {msg.payload?.navigation && (
                <button
                  onClick={() => {
                    onNavigate(msg.payload!.navigation!.page, msg.payload!.navigation!.slug);
                    onClose();
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 border border-cyan-400/40 text-cyan-300 text-[11px] font-bold transition hover:scale-102 cursor-pointer shadow"
                >
                  <span>{msg.payload.navigation.label}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}

              {/* Human Handoff Card */}
              {msg.payload?.handoff_triggered && (
                <AIHumanHandoffCard
                  whatsappUrl={msg.payload.whatsapp_url}
                  onOpenForm={() => setShowLeadForm(true)}
                />
              )}

              {/* Timestamp */}
              <div className="text-[9px] text-slate-500 font-mono px-1">
                {msg.timestamp}
              </div>
            </div>
          </div>
        ))}

        {/* In-Chat Progressive Lead Capture Modal Card */}
        {showLeadForm && (
          <AILeadCaptureCard
            initialServiceName={leadContext.serviceName}
            initialPackageName={leadContext.packageName}
            initialRequirement={leadContext.requirement}
            sessionId={sessionId}
            onSuccess={handleLeadCreated}
            onCancel={() => setShowLeadForm(false)}
          />
        )}

        {/* Loading Indicator */}
        {loading && (
          <div className="flex items-center gap-2 p-2.5 text-cyan-400 text-xs font-mono animate-pulse">
            <RefreshCw className="w-3.5 h-3.5 animate-spin" />
            <span>AVRX AI is formulating response...</span>
          </div>
        )}

        <div ref={chatBottomRef} />
      </div>

      {/* 5. DISCLAIMER BAR */}
      <div className="px-3.5 py-1.5 bg-slate-950 border-t border-slate-800/80 text-[10px] text-slate-400 flex items-center justify-between">
        <div className="flex items-center gap-1.5 truncate">
          <ShieldAlert className="w-3 h-3 text-amber-400 shrink-0" />
          <span className="truncate">Informational AI. Loan/Tax approvals are subject to official verification.</span>
        </div>

        <button
          onClick={() => setShowLeadForm(true)}
          className="text-cyan-400 hover:text-cyan-300 font-bold whitespace-nowrap text-[10px] ml-2 underline cursor-pointer"
        >
          Get Free Proposal
        </button>
      </div>

      {/* 6. INPUT BAR */}
      <div className="p-3 bg-slate-950 border-t border-slate-800">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex items-center gap-2"
        >
          {/* Voice Microphone Toggle */}
          <button
            type="button"
            onClick={toggleVoiceListening}
            title={isListening ? 'Click to stop listening' : 'Speak into microphone'}
            className={`p-2.5 rounded-xl border transition cursor-pointer shrink-0 ${
              isListening
                ? 'bg-rose-600 border-rose-400 text-white animate-pulse shadow-[0_0_15px_rgba(244,63,94,0.5)]'
                : 'bg-slate-900 border-slate-800 hover:border-cyan-500 text-cyan-400 hover:text-cyan-300'
            }`}
          >
            {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
          </button>

          {/* Text Input */}
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={isListening ? 'Listening to voice...' : 'Ask about website, loan, GST, packages...'}
            className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
          />

          {/* Submit Button */}
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
  );
};
