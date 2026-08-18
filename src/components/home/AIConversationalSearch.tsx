import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Sparkles, 
  ArrowRight, 
  Bot, 
  Code2, 
  DollarSign, 
  FileText, 
  ShieldCheck, 
  TrendingUp, 
  Layers, 
  CheckCircle2,
  CornerDownLeft,
  X
} from 'lucide-react';

interface AIConversationalSearchProps {
  onNavigate: (page: string, slug?: string) => void;
}

interface SuggestedServiceMatch {
  title: string;
  category: 'digital' | 'financial' | 'tax' | 'insurance' | 'ai';
  slug?: string;
  page: string;
  reason: string;
  icon: React.ElementType;
}

export const AIConversationalSearch: React.FC<AIConversationalSearchProps> = ({ onNavigate }) => {
  const rotatingPlaceholders = [
    'Build a website for my business…',
    'I need a business loan for expansion…',
    'I want to improve my Google ranking & SEO…',
    'I need health insurance for my family…',
    'I want to register my new company & get GST…',
    'I want to start an online store / e-commerce business…'
  ];

  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [matchedServices, setMatchedServices] = useState<SuggestedServiceMatch[]>([]);

  // Rotating placeholder effect
  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex(prev => (prev + 1) % rotatingPlaceholders.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // Intelligent matching engine based on natural language input
  useEffect(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) {
      setMatchedServices([]);
      return;
    }

    const matches: SuggestedServiceMatch[] = [];

    // Business Startup / Company
    if (trimmed.includes('start') || trimmed.includes('business') || trimmed.includes('company') || trimmed.includes('register') || trimmed.includes('startup')) {
      matches.push(
        { title: 'Company Registration & Incorporation', category: 'tax', slug: 'company-registration', page: 'service-detail', reason: 'Official MCA Incorporation & DIN', icon: FileText },
        { title: 'GST Registration & Filing', category: 'tax', slug: 'gst', page: 'service-detail', reason: '15-Digit GSTIN with zero rejections', icon: FileText },
        { title: 'Udyam / MSME Registration', category: 'tax', slug: 'udyam-registration', page: 'service-detail', reason: 'Govt subsidies & priority credit', icon: FileText },
        { title: 'Website Design & Branding', category: 'digital', slug: 'website-design', page: 'service-detail', reason: 'Establish high-converting digital identity', icon: Code2 },
        { title: 'Collateral-Free Business Loan', category: 'financial', slug: 'business-loan', page: 'service-detail', reason: 'Working capital up to ₹1 Crore', icon: DollarSign },
        { title: 'Digital Marketing & Lead Generation', category: 'digital', slug: 'digital-marketing', page: 'service-detail', reason: 'Google & Meta high-ROI ads', icon: TrendingUp }
      );
    }
    // Website / App / Digital
    else if (trimmed.includes('web') || trimmed.includes('site') || trimmed.includes('app') || trimmed.includes('code') || trimmed.includes('software') || trimmed.includes('ecom') || trimmed.includes('store')) {
      matches.push(
        { title: 'Custom Website Design', category: 'digital', slug: 'website-design', page: 'service-detail', reason: 'Fast Next-Gen responsive platform', icon: Code2 },
        { title: 'Mobile App Development (Android/iOS)', category: 'digital', slug: 'app-development', page: 'service-detail', reason: 'Play Store & App Store apps', icon: Code2 },
        { title: 'E-Commerce Website', category: 'digital', slug: 'ecommerce', page: 'service-detail', reason: 'UPI payment gateway & catalog', icon: Code2 },
        { title: 'SEO & Google Ranking', category: 'digital', slug: 'seo', page: 'service-detail', reason: 'Page-1 organic Google traffic', icon: TrendingUp },
        { title: 'Cloud NVMe Web Hosting', category: 'digital', page: 'hosting-products', reason: 'Ultra-fast sub-100ms load time', icon: Layers }
      );
    }
    // Loan / Finance
    else if (trimmed.includes('loan') || trimmed.includes('money') || trimmed.includes('fund') || trimmed.includes('finance') || trimmed.includes('credit') || trimmed.includes('emi') || trimmed.includes('mudra') || trimmed.includes('pmegp')) {
      matches.push(
        { title: 'Collateral-Free Business Loan', category: 'financial', slug: 'business-loan', page: 'service-detail', reason: 'Unsecured financing up to ₹1 Crore', icon: DollarSign },
        { title: 'Personal Loan Solutions', category: 'financial', slug: 'personal-loan', page: 'service-detail', reason: 'Instant approvals from 10.5% p.a.', icon: DollarSign },
        { title: 'Govt Scheme Loans (PMEGP / MUDRA)', category: 'financial', slug: 'government-scheme-loans', page: 'service-detail', reason: 'Up to 35% Govt capital subsidy', icon: DollarSign },
        { title: 'Home Loan & Construction', category: 'financial', slug: 'home-loan', page: 'service-detail', reason: 'Low rates with 30-year tenures', icon: DollarSign },
        { title: 'Finance Calculator Lab', category: 'ai', page: 'ai-tools', reason: 'Simulate exact EMI & interest schedules', icon: DollarSign }
      );
    }
    // Tax / GST / ITR
    else if (trimmed.includes('tax') || trimmed.includes('gst') || trimmed.includes('itr') || trimmed.includes('return') || trimmed.includes('compliance')) {
      matches.push(
        { title: 'GST Registration & Filings', category: 'tax', slug: 'gst', page: 'service-detail', reason: 'GSTR-1, 3B & Input Tax Credit matching', icon: FileText },
        { title: 'Income Tax Return (ITR) Filing', category: 'tax', slug: 'itr', page: 'service-detail', reason: 'Max tax refund under Old/New regime', icon: FileText },
        { title: 'Udyam MSME Certificate', category: 'tax', slug: 'udyam-registration', page: 'service-detail', reason: 'Priority MSME benefits', icon: FileText }
      );
    }
    // Insurance
    else if (trimmed.includes('insurance') || trimmed.includes('health') || trimmed.includes('car') || trimmed.includes('vehicle') || trimmed.includes('motor') || trimmed.includes('travel') || trimmed.includes('protect')) {
      matches.push(
        { title: 'Health & Medical Insurance', category: 'insurance', slug: 'health-insurance', page: 'service-detail', reason: '10,000+ cashless network hospitals', icon: ShieldCheck },
        { title: 'Motor & Car Insurance', category: 'insurance', slug: 'motor-insurance', page: 'service-detail', reason: 'Instant cashless claim settlement', icon: ShieldCheck },
        { title: 'International Travel Insurance', category: 'insurance', slug: 'travel-insurance', page: 'service-detail', reason: 'Schengen & global visa compliant', icon: ShieldCheck },
        { title: 'Shop & Property Protection', category: 'insurance', slug: 'home-insurance', page: 'service-detail', reason: 'Safeguard inventory & commercial property', icon: ShieldCheck }
      );
    }
    // SEO / Marketing
    else if (trimmed.includes('seo') || trimmed.includes('rank') || trimmed.includes('market') || trimmed.includes('traffic') || trimmed.includes('ad')) {
      matches.push(
        { title: 'SEO & Google Ranking', category: 'digital', slug: 'seo', page: 'service-detail', reason: 'Technical & on-page search dominance', icon: TrendingUp },
        { title: 'Digital Marketing & Ads', category: 'digital', slug: 'digital-marketing', page: 'service-detail', reason: 'Google Ads & Meta campaign management', icon: TrendingUp },
        { title: 'AI Website Health Scanner', category: 'ai', page: 'ai-tools', reason: 'Audit live page vitals & keywords', icon: Sparkles }
      );
    }
    // General Fallback Matches
    else {
      matches.push(
        { title: 'Website Design', category: 'digital', slug: 'website-design', page: 'service-detail', reason: 'High-converting business web platform', icon: Code2 },
        { title: 'Business Loan Solutions', category: 'financial', slug: 'business-loan', page: 'service-detail', reason: 'Collateral-free business capital', icon: DollarSign },
        { title: 'GST & Compliance', category: 'tax', slug: 'gst', page: 'service-detail', reason: 'Tax registration & monthly returns', icon: FileText },
        { title: 'Explore All AVRX Solutions', category: 'ai', page: 'services', reason: 'Browse complete 50+ service ecosystem', icon: Sparkles }
      );
    }

    setMatchedServices(matches);
  }, [query]);

  const presetChips = [
    'I want to start a business',
    'Build a website',
    'Need business loan',
    'Improve Google ranking',
    'Get GST & ITR',
    'Health Insurance'
  ];

  return (
    <section className="py-16 bg-[#070b16] relative overflow-hidden border-t border-b border-slate-800/80">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10 space-y-8">
        
        {/* Title Header */}
        <div className="text-center max-w-4xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-bold font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI Service Discovery Engine</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Tell AVRX What You Need
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Type your requirement naturally. Our platform will map the ideal digital, financial, and compliance architecture.
          </p>
        </div>

        {/* Huge Conversational Search Box */}
        <div className="w-full max-w-5xl mx-auto">
          <div className={`relative rounded-3xl bg-slate-900/90 border transition-all duration-300 backdrop-blur-2xl shadow-2xl p-2 sm:p-3 ${
            isFocused ? 'border-cyan-400 shadow-[0_0_40px_rgba(0,240,255,0.25)]' : 'border-slate-700/80 hover:border-slate-600'
          }`}>
            
            <div className="flex items-center gap-3 px-3 sm:px-4 py-2">
              <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 text-cyan-400 shrink-0 shadow-inner">
                <Bot className="w-6 h-6 animate-pulse" />
              </div>

              <div className="flex-1 relative">
                <input
                  type="text"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setTimeout(() => setIsFocused(false), 250)}
                  placeholder={rotatingPlaceholders[placeholderIndex]}
                  className="w-full bg-transparent text-white text-base sm:text-lg font-medium placeholder:text-slate-500 focus:outline-none pr-8"
                />
                {query && (
                  <button
                    onClick={() => setQuery('')}
                    className="absolute right-0 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white p-1"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              <button
                onClick={() => {
                  if (matchedServices.length > 0) {
                    onNavigate(matchedServices[0].page, matchedServices[0].slug);
                  } else {
                    onNavigate('services');
                  }
                }}
                className="hidden sm:flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 hover:brightness-110 text-slate-950 font-black text-xs uppercase tracking-wider rounded-2xl transition cursor-pointer shadow-lg shrink-0"
              >
                <span>Discover</span>
                <CornerDownLeft className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Preset Instant Quick-Query Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
            <span className="text-xs text-slate-500 font-mono mr-1">Popular prompts:</span>
            {presetChips.map((chip, idx) => (
              <button
                key={idx}
                onClick={() => setQuery(chip)}
                className="px-3 py-1.5 rounded-xl bg-slate-950/80 hover:bg-cyan-500/10 border border-slate-800 hover:border-cyan-500/30 text-xs text-slate-300 hover:text-cyan-300 transition cursor-pointer"
              >
                {chip}
              </button>
            ))}
          </div>

          {/* Real-Time Intelligent Service Matches Result Dropdown / Grid */}
          {matchedServices.length > 0 && (
            <div className="mt-6 p-6 rounded-3xl bg-slate-950/95 border border-cyan-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl space-y-4 animate-in fade-in zoom-in-95 duration-200">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-300">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span>AI Recommended Solutions ({matchedServices.length} mapped)</span>
                </div>
                <span className="text-[11px] text-slate-500">Click to launch service experience</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {matchedServices.map((service, i) => {
                  const Icon = service.icon;
                  return (
                    <button
                      key={i}
                      onClick={() => onNavigate(service.page, service.slug)}
                      className="p-4 rounded-2xl bg-slate-900/90 hover:bg-cyan-500/15 border border-slate-800 hover:border-cyan-400 text-left transition-all group flex items-start justify-between cursor-pointer"
                    >
                      <div className="flex items-start gap-3 min-w-0">
                        <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-cyan-400 group-hover:scale-110 transition-transform shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-bold text-white group-hover:text-cyan-300 transition truncate">
                            {service.title}
                          </div>
                          <div className="text-xs text-slate-400 mt-0.5 leading-snug">
                            {service.reason}
                          </div>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all shrink-0 ml-2 mt-1" />
                    </button>
                  );
                })}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
