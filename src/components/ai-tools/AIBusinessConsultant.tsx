import React, { useState } from 'react';
import { Bot, Send, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { ServiceItem } from '../../types';
import { servicesData } from '../../data/servicesData';

interface AIBusinessConsultantProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenConsultation: () => void;
}

export const AIBusinessConsultant: React.FC<AIBusinessConsultantProps> = ({
  onSelectService,
  onOpenConsultation
}) => {
  const [userQuestion, setUserQuestion] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const [response, setResponse] = useState<{
    summary: string;
    recommendedDigitalServices: ServiceItem[];
    recommendedFinancialServices: ServiceItem[];
    actionAdvice: string;
  } | null>(null);

  const [leadForm, setLeadForm] = useState({ name: '', phone: '', email: '', submitted: false });

  const handleAsk = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userQuestion.trim()) return;

    setIsThinking(true);
    setTimeout(() => {
      const qLower = userQuestion.toLowerCase();
      let digitalRecs: ServiceItem[] = [];
      let financialRecs: ServiceItem[] = [];
      let summaryText = '';
      let adviceText = '';

      if (qLower.includes('ecommerce') || qLower.includes('shop') || qLower.includes('sell') || qLower.includes('online')) {
        digitalRecs = servicesData.filter(s => s.id === 'website-design' || s.id === 'seo-services' || s.id === 'web-hosting');
        financialRecs = servicesData.filter(s => s.id === 'gst-services' || s.id === 'business-loans');
        summaryText = 'For launching a high-converting online e-commerce store, you need a custom-built responsive store, reliable NVMe hosting, and GST compliance for multi-state shipping.';
        adviceText = 'Step 1: Register for GSTIN. Step 2: Build your Custom E-Commerce Website. Step 3: Set up Google PPC Ads for immediate sales.';
      } else if (qLower.includes('loan') || qLower.includes('fund') || qLower.includes('money') || qLower.includes('capital') || qLower.includes('startup')) {
        digitalRecs = servicesData.filter(s => s.id === 'website-design' || s.id === 'branding');
        financialRecs = servicesData.filter(s => s.id === 'business-loans' || s.id === 'udyam-registration' || s.id === 'credit-score');
        summaryText = 'To secure startup financing or MSME working capital, banks require a clean credit profile, official Udyam (MSME) registration, and up-to-date GST/ITR records.';
        adviceText = 'We recommend checking your Udyam eligibility to qualify for collateral-free CGTMSE loans up to ₹5 Crores.';
      } else if (qLower.includes('tax') || qLower.includes('itr') || qLower.includes('gst') || qLower.includes('save')) {
        digitalRecs = servicesData.filter(s => s.id === 'website-maintenance');
        financialRecs = servicesData.filter(s => s.id === 'income-tax-itr' || s.id === 'gst-services' || s.id === 'tax-filing');
        summaryText = 'Proper corporate tax planning under Sections 80C, 80D, and Section 24(b) can legally reduce your tax liability by up to 35%.';
        adviceText = 'Ensure quarterly TDS reconciliation (Form 26AS & AIS) before filing your business or personal ITR.';
      } else {
        digitalRecs = servicesData.filter(s => s.id === 'website-design' || s.id === 'seo-services');
        financialRecs = servicesData.filter(s => s.id === 'business-loans' || s.id === 'gst-services');
        summaryText = `Based on your query "${userQuestion}", AVRX recommends a dual digital-financial strategy: establishing an authoritative web presence while structuring your business taxes for growth.`;
        adviceText = 'Book a 1-on-1 strategy call with our Senior Tech & CA consultants to map your exact 90-day roadmap.';
      }

      setResponse({
        summary: summaryText,
        recommendedDigitalServices: digitalRecs,
        recommendedFinancialServices: financialRecs,
        actionAdvice: adviceText
      });
      setIsThinking(false);
    }, 900);
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadForm.name || !leadForm.phone) return;
    setLeadForm({ ...leadForm, submitted: true });
  };

  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xl">
      <div className="flex items-center space-x-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0A66FF] to-purple-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
          <Bot className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">1. AI Business Consultant</h3>
          <p className="text-xs text-white/70">Ask any question about growing your business digitally or financially</p>
        </div>
      </div>

      <form onSubmit={handleAsk} className="space-y-3">
        <div className="relative">
          <input
            type="text"
            value={userQuestion}
            onChange={(e) => setUserQuestion(e.target.value)}
            placeholder="e.g. How do I start an online e-commerce store in Delhi with a ₹2 Lakh budget?"
            className="w-full px-4 py-3.5 pr-28 rounded-xl bg-[#081B33] border border-white/20 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors placeholder:text-white/40"
          />
          <button
            type="submit"
            disabled={isThinking}
            className="absolute right-1.5 top-1.5 bottom-1.5 px-4 rounded-lg bg-gradient-to-r from-[#0A66FF] to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold text-xs flex items-center space-x-1 transition-all disabled:opacity-50"
          >
            {isThinking ? (
              <Sparkles className="w-4 h-4 animate-spin" />
            ) : (
              <>
                <span>Ask AI</span>
                <Send className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        </div>
        <div className="flex flex-wrap gap-2 pt-1">
          {[
            'How do I scale my startup online?',
            'What loans are available for MSMEs?',
            'How can I rank #1 on Google in 90 days?',
            'What is the tax saving limit for ITR FY 2026-27?'
          ].map((prompt, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setUserQuestion(prompt)}
              className="text-[11px] px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 text-cyan-300 border border-white/10 transition-colors"
            >
              {prompt}
            </button>
          ))}
        </div>
      </form>

      {/* AI Recommendation Output */}
      {response && (
        <div className="mt-6 p-6 rounded-2xl bg-[#081B33]/80 border border-cyan-500/30 space-y-5 animate-fadeIn">
          <div className="flex items-start space-x-3">
            <Sparkles className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-cyan-300">AVRX AI Strategic Assessment:</h4>
              <p className="text-sm text-white/90 mt-1 leading-relaxed">{response.summary}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 border-t border-white/10">
            {/* Digital Service Recommendations */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">Recommended Digital & Tech Services</span>
              <div className="space-y-2">
                {response.recommendedDigitalServices.map(srv => (
                  <div 
                    key={srv.id}
                    onClick={() => onSelectService(srv)}
                    className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between cursor-pointer group transition-all"
                  >
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-cyan-300">{srv.title}</div>
                      <div className="text-[10px] text-white/60">{srv.startingPrice}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-cyan-300 group-hover:translate-x-1 transition-all" />
                  </div>
                ))}
              </div>
            </div>

            {/* Financial Service Recommendations */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">Recommended Financial Services</span>
              <div className="space-y-2">
                {response.recommendedFinancialServices.map(srv => (
                  <div 
                    key={srv.id}
                    onClick={() => onSelectService(srv)}
                    className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between cursor-pointer group transition-all"
                  >
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-purple-300">{srv.title}</div>
                      <div className="text-[10px] text-white/60">{srv.estimatedTimeline}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-purple-300 group-hover:translate-x-1 transition-all" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Advice + Lead Capture */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-blue-950/60 to-purple-950/60 border border-white/10 space-y-3">
            <div className="text-xs font-semibold text-amber-300">💡 Next Action Plan: {response.actionAdvice}</div>
            
            {!leadForm.submitted ? (
              <form onSubmit={handleLeadSubmit} className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
                <input
                  type="text"
                  required
                  placeholder="Your Name *"
                  value={leadForm.name}
                  onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                  className="px-3 py-2 rounded-lg bg-[#081B33] border border-white/20 text-xs text-white focus:outline-none focus:border-cyan-400"
                />
                <input
                  type="tel"
                  required
                  placeholder="WhatsApp / Phone *"
                  value={leadForm.phone}
                  onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                  className="px-3 py-2 rounded-lg bg-[#081B33] border border-white/20 text-xs text-white focus:outline-none focus:border-cyan-400"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#0A66FF] to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold text-xs"
                >
                  Save Strategy Plan
                </button>
              </form>
            ) : (
              <div className="flex items-center space-x-2 text-emerald-400 text-xs font-bold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Thank you {leadForm.name}! An AVRX Strategy Expert will call your phone shortly.</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
