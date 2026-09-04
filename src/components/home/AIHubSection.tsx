import React, { useState } from 'react';
import { 
  Sparkles, 
  FileText, 
  Palette, 
  Calculator, 
  Briefcase, 
  ArrowRight, 
  Zap, 
  Bot, 
  Globe,
  Code2,
  Table,
  PenTool,
  Layers,
  Award,
  CheckCircle2,
  Search,
  Cpu,
  ShieldAlert,
  Flame,
  Rocket
} from 'lucide-react';
import { launchSoundEngine } from '../../utils/launchSoundEngine';
import aiQuantumHubBg from '../../assets/images/ai_quantum_hub_bg_1788541337870.jpg';

interface AIHubSectionProps {
  onNavigate: (page: string, slug?: string) => void;
  onLaunchTool?: (toolId: string) => void;
}

interface ToolItem {
  id: string;
  name: string;
  desc: string;
  category: 'seo' | 'document' | 'creative' | 'finance' | 'business';
  badge?: string;
  isRealAI?: boolean;
  color?: string;
}

export const AIHubSection: React.FC<AIHubSectionProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<'seo' | 'document' | 'creative' | 'finance' | 'business'>('seo');

  const categories = [
    { id: 'seo', label: 'SEO & Website', icon: Globe, count: '7 Tools', color: 'from-cyan-400 to-blue-500', glow: 'cyan' },
    { id: 'document', label: 'Document & PDF', icon: FileText, count: '6 Tools', color: 'from-indigo-400 to-purple-500', glow: 'indigo' },
    { id: 'creative', label: 'Image & Creative', icon: Palette, count: '8 Tools', color: 'from-pink-400 to-rose-500', glow: 'pink' },
    { id: 'finance', label: 'Finance & Calculators', icon: Calculator, count: '8 Tools', color: 'from-emerald-400 to-teal-500', glow: 'emerald' },
    { id: 'business', label: 'Business & AI Ops', icon: Briefcase, count: '6 Tools', color: 'from-amber-400 to-orange-500', glow: 'amber' }
  ];

  const tools: ToolItem[] = [
    // SEO & Website (Priority)
    { id: 'website-health-checker', name: 'AI Website Health Scanner', desc: 'Scan Core Web Vitals, mobile UX, speed & SSL security score in real-time.', category: 'seo', badge: 'Flagship Scanner', isRealAI: true, color: 'from-cyan-500 to-blue-600' },
    { id: 'ai-seo-audit', name: 'Technical SEO Auditor', desc: 'Discover missing meta tags, heading hierarchy, broken links & Google indexing issues.', category: 'seo', badge: 'Instant Audit', isRealAI: true, color: 'from-cyan-500 to-teal-600' },
    { id: 'website-traffic-checker', name: 'Speed & Traffic Estimator', desc: 'Estimate monthly visits, average session time, and server TTFB response speed.', category: 'seo', badge: 'Live Metrics', isRealAI: true, color: 'from-blue-500 to-indigo-600' },
    { id: 'meta-tag-generator', name: 'AI Meta Tag & OpenGraph Generator', desc: 'Generate high-CTR title tags, schema markup and social media preview tags.', category: 'seo', badge: 'High CTR', isRealAI: true, color: 'from-teal-500 to-cyan-600' },
    { id: 'keyword-generator', name: 'AI SEO Keyword Matrix', desc: 'Generate high-volume long-tail search terms and commercial search intent.', category: 'seo', badge: 'Search Engine', isRealAI: true, color: 'from-cyan-500 to-blue-500' },
    { id: 'robots-txt-generator', name: 'Robots.txt & Sitemap Maker', desc: 'Generate search crawler directives and XML sitemaps for Googlebot indexing.', category: 'seo', badge: 'Crawler Ready', color: 'from-slate-700 to-slate-900' },

    // Document AI
    { id: 'word-to-pdf', name: 'Word to PDF Converter', desc: 'Convert DOC/DOCX to vector PDF in browser with zero server storage.', category: 'document', badge: '100% Client-Side', color: 'from-indigo-500 to-blue-600' },
    { id: 'jpg-to-pdf', name: 'Image to PDF Maker', desc: 'Combine JPEG/PNG photos into a clean multi-page PDF document.', category: 'document', badge: 'Fast', color: 'from-purple-500 to-indigo-600' },
    { id: 'chat-with-pdf', name: 'Chat with PDF (AI)', desc: 'Ask questions, summarize clauses, and extract data from multi-page documents.', category: 'document', badge: 'Gemini AI', isRealAI: true, color: 'from-purple-500 to-pink-600' },
    { id: 'pdf-compressor', name: 'PDF Compressor', desc: 'Optimize PDF file weight with custom DPI and image quality tuning.', category: 'document', badge: 'Popular', color: 'from-indigo-500 to-violet-600' },

    // Creative AI
    { id: 'text-to-image', name: 'AI Image Generator', desc: 'Generate photorealistic visuals, branding concept art and UI assets.', category: 'creative', badge: 'Gemini AI', isRealAI: true, color: 'from-rose-500 to-pink-600' },
    { id: 'image-background-changer', name: 'AI Background Changer', desc: 'Replace, remove or gradient-color image backgrounds in browser.', category: 'creative', badge: 'Pro Image', isRealAI: true, color: 'from-pink-500 to-purple-600' },
    { id: 'ai-content-writer', name: 'AI Copy & Article Writer', desc: 'Draft persuasive website headlines, blog posts, and landing page copy.', category: 'creative', badge: 'Gemini AI', isRealAI: true, color: 'from-orange-500 to-rose-600' },
    { id: 'social-caption-generator', name: 'Social Caption Generator', desc: 'Create viral Instagram, LinkedIn, and YouTube hooks and hashtags.', category: 'creative', badge: 'AI Copilot', isRealAI: true, color: 'from-rose-500 to-red-600' },

    // Finance AI
    { id: 'loan-emi-calculator', name: 'Loan EMI Calculator', desc: 'Simulate exact monthly payments, total interest and amortization breakdown.', category: 'finance', badge: 'Real-Time Math', color: 'from-emerald-500 to-teal-600' },
    { id: 'sip-returns-calculator', name: 'Mutual Fund SIP & Wealth', desc: 'Forecast compound returns, wealth creation and maturity value.', category: 'finance', badge: 'Investment', color: 'from-teal-500 to-cyan-600' },
    { id: 'gst-calculator', name: 'GST & Reverse GST Calculator', desc: 'Calculate exclusive/inclusive GST amounts across 5%, 12%, 18%, 28%.', category: 'finance', badge: 'Tax Tech', color: 'from-emerald-500 to-green-600' },
    { id: 'income-tax-calculator', name: 'Income Tax Old vs New Regime', desc: 'Compare tax liabilities with 87A rebate and standard deductions.', category: 'finance', badge: 'Tax Calculator', color: 'from-teal-500 to-emerald-600' },

    // Business AI
    { id: 'ai-business-plan', name: 'AI Business Model Blueprint', desc: 'Generate 3-phase go-to-market strategies, unit economics and revenue models.', category: 'business', badge: 'Gemini AI', isRealAI: true, color: 'from-amber-500 to-orange-600' },
    { id: 'ats-resume-builder', name: 'ATS Resume Builder & Scorer', desc: 'Optimize resume keywords for high-ranking corporate recruitment parsers.', category: 'business', badge: 'Career Pro', isRealAI: true, color: 'from-yellow-500 to-amber-600' },
    { id: 'ai-email-reply', name: 'AI Business Email Composer', desc: 'Draft polished client pitches, negotiation replies, and follow-ups.', category: 'business', badge: 'Productivity', isRealAI: true, color: 'from-orange-500 to-red-600' },
    { id: 'meeting-notes-summarizer', name: 'Meeting Notes & Action Items', desc: 'Extract key decisions, deliverables and deadlines from rough discussion notes.', category: 'business', badge: 'Smart Summary', isRealAI: true, color: 'from-amber-500 to-yellow-600' }
  ];

  const categoryTools = tools.filter(t => t.category === activeCategory);
  const displayedTools = categoryTools.slice(0, 7);

  const handleLaunch = (toolId: string) => {
    launchSoundEngine.playClickTick();
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set('tool', toolId);
      window.history.pushState({}, '', url.toString());
    }
    onNavigate('ai-tools');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getCategoryDetails = () => {
    switch (activeCategory) {
      case 'seo':
        return {
          title: 'Visit All SEO & Website Tools',
          desc: '15+ technical audit, speed test, keyword matrix & schema tools',
          badge: '15+ SEO Tools',
          tags: ['PageSpeed 99+', 'Googlebot Crawler', 'Backlink Audit', 'Schema JSON-LD', 'Keyword Rank']
        };
      case 'document':
        return {
          title: 'Visit All Document & PDF Tools',
          desc: '10+ fast browser-based converters, OCR & PDF utilities',
          badge: '10+ PDF Tools',
          tags: ['PDF to Word', 'JPG to PDF', 'PDF Merge', 'PDF Split', 'Password Protect']
        };
      case 'creative':
        return {
          title: 'Visit All Creative & Image Tools',
          desc: '12+ generative neural image and marketing copy tools',
          badge: '12+ Creative Tools',
          tags: ['Text to Image', 'Logo Creator', 'Social Media Hooks', 'Ad Copy Generator', 'Prompt Lab']
        };
      case 'finance':
        return {
          title: 'Visit All Financial Calculators',
          desc: '10+ precision math tools for loans, GST & investment growth',
          badge: '10+ Math Tools',
          tags: ['Income Tax New Regime', 'Insurance Premium', 'PMEGP Subsidy', 'FD Calculator', 'CIBIL Score']
        };
      case 'business':
        return {
          title: 'Visit All Business & Ops Tools',
          desc: '14+ enterprise workflows, business plans & ATS builders',
          badge: '14+ Business Tools',
          tags: ['SWOT Matrix', 'ATS Resume', 'WhatsApp Auto Responder', 'Cold Outreach Email', 'Pitch Deck']
        };
    }
  };

  const categoryDetail = getCategoryDetails();

  return (
    <section id="ai-hub" className="py-28 bg-[#040714] relative overflow-hidden border-t border-b border-slate-800/80 select-none">
      
      {/* Futuristic AI & Quantum Neural Matrix Background Image & Overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <img 
          src={aiQuantumHubBg} 
          alt="Futuristic Quantum Neural AI Background" 
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-center opacity-20 scale-105 filter brightness-95 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#040714] via-[#040714]/92 to-[#040714]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_30%,rgba(168,85,247,0.14),transparent_70%)]" />
        <div className="absolute inset-0 bg-cyber-grid opacity-25" />
      </div>

      {/* Background Atmosphere Glows */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[700px] h-[600px] bg-gradient-to-l from-purple-500/18 via-cyan-500/12 to-transparent rounded-full blur-[160px] pointer-events-none animate-pulse" style={{ animationDuration: '10s' }} />
      <div className="absolute bottom-10 left-10 w-[600px] h-[600px] bg-indigo-500/12 rounded-full blur-[160px] pointer-events-none" />

      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-slate-800/80 pb-10">
          <div className="space-y-4 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-purple-500/40 text-purple-300 text-xs font-mono font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(168,85,247,0.2)]">
              <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-spin-slow" />
              <span>CATEGORY 04</span>
              <span className="text-slate-600">•</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-300 to-cyan-400 font-black">
                AVRX IN-BROWSER SUITE
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              AVRX <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">AI &amp; SEO TOOLS HUB</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-xl leading-relaxed font-normal max-w-3xl">
              70+ lightning-fast in-browser utilities. Free, 100% private, instant execution with zero server storage.
            </p>
          </div>

          <button
            onClick={() => {
              launchSoundEngine.playClickTick();
              onNavigate('ai-tools');
            }}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 hover:from-purple-400 hover:to-cyan-400 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-[0_0_25px_rgba(168,85,247,0.4)] hover:scale-105 active:scale-95 cursor-pointer group shrink-0"
          >
            <span>Visit All 70+ AI Tools</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>

        {/* Dynamic Category Selector Tabs */}
        <div className="flex flex-wrap items-center gap-3 border-b border-slate-800/80 pb-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id as any);
                  launchSoundEngine.playClickTick();
                }}
                onMouseEnter={() => launchSoundEngine.playHoverChirp()}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl text-xs sm:text-sm font-black transition-all duration-300 cursor-pointer border backdrop-blur-md ${
                  isActive
                    ? `bg-gradient-to-r ${cat.color} text-slate-950 border-transparent shadow-[0_0_25px_rgba(0,240,255,0.4)] scale-105`
                    : 'bg-slate-950/80 text-slate-400 hover:text-white border-slate-800 hover:border-slate-700 hover:bg-slate-900/90'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-slate-950' : 'text-cyan-400'}`} />
                <span>{cat.label}</span>
                <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-md ${
                  isActive ? 'bg-slate-950/30 text-slate-950' : 'bg-slate-900 text-slate-300'
                }`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* 2-Row Grid Layout (4 columns per row) with Rich Neon Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedTools.map((tool) => (
            <div
              key={tool.id}
              onClick={() => handleLaunch(tool.id)}
              onMouseEnter={() => launchSoundEngine.playHoverChirp()}
              className="p-6 rounded-3xl bg-gradient-to-b from-slate-900/90 via-[#080d1e]/95 to-slate-900/90 border border-slate-800 hover:border-cyan-400/80 transition-all duration-300 group flex flex-col justify-between space-y-4 cursor-pointer shadow-xl hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] hover:-translate-y-1 relative overflow-hidden backdrop-blur-xl"
            >
              {/* Subtle top light bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-60 group-hover:opacity-100 transition-opacity" />

              <div className="space-y-3">
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-mono font-bold tracking-wider px-2.5 py-0.5 rounded-full border ${
                    tool.isRealAI
                      ? 'bg-purple-500/20 text-purple-300 border-purple-500/40'
                      : 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'
                  }`}>
                    {tool.badge}
                  </span>
                  <div className="p-2 rounded-xl bg-slate-950 border border-slate-800 text-cyan-400 group-hover:scale-110 transition-transform">
                    <Zap className="w-4 h-4" />
                  </div>
                </div>

                {/* Title & Short Description */}
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition line-clamp-1">
                    {tool.name}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1.5 leading-relaxed line-clamp-2 font-normal">
                    {tool.desc}
                  </p>
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold text-cyan-400 group-hover:text-cyan-300">
                <span>Launch Tool</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </div>
          ))}

          {/* 8th Card: Category Overview & Direct Action */}
          <div 
            onClick={() => {
              launchSoundEngine.playClickTick();
              onNavigate('ai-tools');
            }}
            onMouseEnter={() => launchSoundEngine.playHoverChirp()}
            className="p-6 rounded-3xl bg-gradient-to-br from-cyan-950/40 via-slate-900/90 to-purple-950/40 border-2 border-cyan-500/50 shadow-[0_0_35px_rgba(0,240,255,0.2)] hover:shadow-[0_0_45px_rgba(0,240,255,0.35)] transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between space-y-4 cursor-pointer relative overflow-hidden backdrop-blur-2xl"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-3 relative z-10">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-cyan-500/30 text-cyan-300 border border-cyan-500/50">
                  {categoryDetail.badge}
                </span>
                <div className="p-2 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 group-hover:scale-110 transition-transform">
                  <Globe className="w-4 h-4 text-cyan-400" />
                </div>
              </div>

              <div>
                <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition line-clamp-1">
                  {categoryDetail.title}
                </h3>
                <p className="text-xs text-slate-300 mt-1.5 leading-relaxed line-clamp-2 font-normal">
                  {categoryDetail.desc}
                </p>
              </div>

              {/* Mini tags */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {categoryDetail.tags.slice(0, 3).map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950/90 border border-slate-800 text-slate-300 truncate"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Launch Button */}
            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-black text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-2.5 rounded-2xl shadow-lg group-hover:brightness-110 transition">
              <span>{activeCategory === 'seo' ? 'Visit All SEO Tools' : 'Visit All Tools'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </div>

          </div>

        </div>

        {/* Enterprise AI Consulting Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-purple-950/40 via-slate-900/90 to-cyan-950/40 border-2 border-purple-500/40 shadow-[0_0_40px_rgba(168,85,247,0.15)] flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-2xl">
          <div className="flex items-center gap-4 text-left">
            <div className="p-3.5 rounded-2xl bg-purple-500/20 border border-purple-500/40 text-purple-300 shrink-0">
              <Bot className="w-6 h-6 text-purple-400 animate-pulse" />
            </div>
            <div>
              <div className="text-base sm:text-lg font-black text-white">
                Looking for Custom Enterprise AI or WhatsApp CRM Pipelines?
              </div>
              <div className="text-xs sm:text-sm text-slate-300 mt-1 font-normal">
                We build dedicated LLM copilots, automated WhatsApp APIs, and custom multi-tenant cloud SaaS systems.
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              launchSoundEngine.playClickTick();
              onNavigate('contact');
            }}
            className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-400 hover:to-cyan-400 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:scale-105 transition-all cursor-pointer flex items-center gap-2 shrink-0"
          >
            <span>Consult AI Engineers</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
