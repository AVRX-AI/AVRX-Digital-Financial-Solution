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
  Search
} from 'lucide-react';

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
}

export const AIHubSection: React.FC<AIHubSectionProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<'seo' | 'document' | 'creative' | 'finance' | 'business'>('seo');

  const categories = [
    { id: 'seo', label: 'SEO & Website', icon: Globe, count: '7 Tools' },
    { id: 'document', label: 'Document & PDF', icon: FileText, count: '6 Tools' },
    { id: 'creative', label: 'Image & Creative', icon: Palette, count: '8 Tools' },
    { id: 'finance', label: 'Finance & Calculators', icon: Calculator, count: '8 Tools' },
    { id: 'business', label: 'Business & AI Ops', icon: Briefcase, count: '6 Tools' }
  ];

  const tools: ToolItem[] = [
    // SEO & Website (Priority)
    { id: 'website-health-checker', name: 'AI Website Health Scanner', desc: 'Scan Core Web Vitals, mobile UX, speed & SSL security score in real-time.', category: 'seo', badge: 'Flagship Scanner', isRealAI: true },
    { id: 'ai-seo-audit', name: 'Technical SEO Auditor', desc: 'Discover missing meta tags, heading hierarchy, broken links & Google indexing issues.', category: 'seo', badge: 'Instant Audit', isRealAI: true },
    { id: 'website-traffic-checker', name: 'Speed & Traffic Estimator', desc: 'Estimate monthly visits, average session time, and server TTFB response speed.', category: 'seo', badge: 'Live Metrics', isRealAI: true },
    { id: 'meta-tag-generator', name: 'AI Meta Tag & OpenGraph Generator', desc: 'Generate high-CTR title tags, schema markup and social media preview tags.', category: 'seo', badge: 'High CTR', isRealAI: true },
    { id: 'keyword-generator', name: 'AI SEO Keyword Matrix', desc: 'Generate high-volume long-tail search terms and commercial search intent.', category: 'seo', badge: 'Search Engine', isRealAI: true },
    { id: 'robots-txt-generator', name: 'Robots.txt & Sitemap Maker', desc: 'Generate search crawler directives and XML sitemaps for Googlebot indexing.', category: 'seo', badge: 'Crawler Ready' },

    // Document AI
    { id: 'word-to-pdf', name: 'Word to PDF Converter', desc: 'Convert DOC/DOCX to vector PDF in browser with zero server storage.', category: 'document', badge: '100% Client-Side' },
    { id: 'jpg-to-pdf', name: 'Image to PDF Maker', desc: 'Combine JPEG/PNG photos into a clean multi-page PDF document.', category: 'document', badge: 'Fast' },
    { id: 'chat-with-pdf', name: 'Chat with PDF (AI)', desc: 'Ask questions, summarize clauses, and extract data from multi-page documents.', category: 'document', badge: 'Gemini AI', isRealAI: true },
    { id: 'pdf-compressor', name: 'PDF Compressor', desc: 'Optimize PDF file weight with custom DPI and image quality tuning.', category: 'document', badge: 'Popular' },

    // Creative AI
    { id: 'text-to-image', name: 'AI Image Generator', desc: 'Generate photorealistic visuals, branding concept art and UI assets.', category: 'creative', badge: 'Gemini AI', isRealAI: true },
    { id: 'image-background-changer', name: 'AI Background Changer', desc: 'Replace, remove or gradient-color image backgrounds in browser.', category: 'creative', badge: 'Pro Image', isRealAI: true },
    { id: 'ai-content-writer', name: 'AI Copy & Article Writer', desc: 'Draft persuasive website headlines, blog posts, and landing page copy.', category: 'creative', badge: 'Gemini AI', isRealAI: true },
    { id: 'social-caption-generator', name: 'Social Caption Generator', desc: 'Create viral Instagram, LinkedIn, and YouTube hooks and hashtags.', category: 'creative', badge: 'AI Copilot', isRealAI: true },

    // Finance AI
    { id: 'loan-emi-calculator', name: 'Loan EMI Calculator', desc: 'Simulate exact monthly payments, total interest and amortization breakdown.', category: 'finance', badge: 'Real-Time Math' },
    { id: 'sip-returns-calculator', name: 'Mutual Fund SIP & Wealth', desc: 'Forecast compound returns, wealth creation and maturity value.', category: 'finance', badge: 'Investment' },
    { id: 'gst-calculator', name: 'GST & Reverse GST Calculator', desc: 'Calculate exclusive/inclusive GST amounts across 5%, 12%, 18%, 28%.', category: 'finance', badge: 'Tax Tech' },
    { id: 'income-tax-calculator', name: 'Income Tax Old vs New Regime', desc: 'Compare tax liabilities with 87A rebate and standard deductions.', category: 'finance', badge: 'Tax Calculator' },

    // Business AI
    { id: 'ai-business-plan', name: 'AI Business Model Blueprint', desc: 'Generate 3-phase go-to-market strategies, unit economics and revenue models.', category: 'business', badge: 'Gemini AI', isRealAI: true },
    { id: 'ats-resume-builder', name: 'ATS Resume Builder & Scorer', desc: 'Optimize resume keywords for high-ranking corporate recruitment parsers.', category: 'business', badge: 'Career Pro', isRealAI: true },
    { id: 'ai-email-reply', name: 'AI Business Email Composer', desc: 'Draft polished client pitches, negotiation replies, and follow-ups.', category: 'business', badge: 'Productivity', isRealAI: true },
    { id: 'meeting-notes-summarizer', name: 'Meeting Notes & Action Items', desc: 'Extract key decisions, deliverables and deadlines from rough discussion notes.', category: 'business', badge: 'Smart Summary', isRealAI: true }
  ];

  // Get exactly 7 tools for active category to show in 2 lines (Line 1: 3 tools, Line 2: 4 tools -> or 2 rows of 4 cards where 8th is See All)
  // 2 rows of 4-column cards = 7 tools + 8th is "Visit All SEO/AI Tools"
  const categoryTools = tools.filter(t => t.category === activeCategory);
  
  // Showcase top 7 tools + 8th card is "Visit All Tools"
  const displayedTools = categoryTools.slice(0, 7);

  const handleLaunch = (toolId: string) => {
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
          tags: ['PageSpeed 99+', 'Googlebot Crawler', 'Backlink Audit', 'Schema.org JSON-LD', 'Keyword Rank']
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
          tags: ['Income Tax New Regime', 'Insurance Premium', 'PMEGP Subsidy', 'FD Calculator', 'CIBIL Score Estimator']
        };
      case 'business':
        return {
          title: 'Visit All Business & Ops Tools',
          desc: '14+ enterprise workflows, business plans & ATS builders',
          badge: '14+ Business Tools',
          tags: ['SWOT Matrix', 'ATS Resume', 'WhatsApp Auto Responder', 'Cold Outreach Email', 'Pitch Deck Outline']
        };
    }
  };

  const categoryDetail = getCategoryDetails();

  return (
    <section id="ai-hub" className="py-20 bg-[#070b16] relative overflow-hidden border-t border-b border-slate-800/80 select-none">
      
      {/* Background Atmosphere */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[500px] bg-gradient-to-l from-purple-500/10 via-cyan-500/10 to-transparent rounded-full blur-[150px] pointer-events-none" />

      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800/80 pb-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold font-mono uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>CATEGORY 04 • AVRX IN-BROWSER SUITE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              AVRX{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                AI &amp; SEO Tools Hub
              </span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              70+ lightning-fast in-browser utilities. Free, 100% private, instant execution with zero server storage.
            </p>
          </div>

          <button
            onClick={() => onNavigate('ai-tools')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-850 border border-cyan-500/40 text-cyan-300 font-bold text-xs uppercase tracking-wider transition group shadow-[0_0_20px_rgba(0,240,255,0.15)] shrink-0"
          >
            <span>Visit All 70+ AI Tools</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Compact Category Selector Tabs (Small & Clean) */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-800/80 pb-4">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer border ${
                  isActive
                    ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.35)]'
                    : 'bg-slate-900/90 text-slate-400 hover:text-white border-slate-800 hover:border-slate-700'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-slate-950' : 'text-cyan-400'}`} />
                <span>{cat.label}</span>
                <span className={`text-[10px] font-mono font-normal px-1.5 py-0.2 rounded-md ${
                  isActive ? 'bg-slate-950/20 text-slate-950 font-bold' : 'bg-slate-950 text-slate-400'
                }`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Exactly 2 Rows Layout (4 Columns per row = 8 total cards) */}
        {/* Cards 1 to 7: Featured category tools | Card 8: "Visit All Tools" */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {displayedTools.map((tool) => (
            <div
              key={tool.id}
              onClick={() => handleLaunch(tool.id)}
              className="p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-slate-900/90 via-[#070b14]/95 to-slate-900/90 hover:bg-slate-850 border border-slate-800 hover:border-cyan-400/80 transition-all duration-200 group flex flex-col justify-between space-y-3 cursor-pointer shadow-lg hover:shadow-[0_8px_25px_rgba(0,240,255,0.15)] hover:-translate-y-0.5"
            >
              <div className="space-y-2.5">
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-mono font-bold tracking-wider px-2 py-0.5 rounded-full border ${
                    tool.isRealAI
                      ? 'bg-purple-500/10 text-purple-300 border-purple-500/30'
                      : 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30'
                  }`}>
                    {tool.badge}
                  </span>
                  <div className="p-1.5 rounded-lg bg-slate-950 border border-slate-800 text-cyan-400 group-hover:scale-110 transition-transform">
                    <Zap className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Title & Short Description */}
                <div>
                  <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition line-clamp-1">
                    {tool.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 leading-snug line-clamp-2">
                    {tool.desc}
                  </p>
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold text-cyan-400 group-hover:text-cyan-300">
                <span>Launch Tool</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}

          {/* 8th Card (Completes 2 full 4-column rows): Visit All SEO / AI Tools */}
          <div 
            onClick={() => onNavigate('ai-tools')}
            className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-cyan-950/30 via-slate-900/90 to-purple-950/30 border border-cyan-500/50 shadow-[0_0_30px_rgba(0,240,255,0.1)] hover:shadow-[0_0_40px_rgba(0,240,255,0.25)] transition-all duration-300 group hover:-translate-y-0.5 flex flex-col justify-between space-y-3 cursor-pointer relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl pointer-events-none" />

            <div className="space-y-2.5 relative z-10">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                  {categoryDetail.badge}
                </span>
                <div className="p-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 group-hover:scale-110 transition-transform">
                  <Globe className="w-3.5 h-3.5 text-cyan-400" />
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition line-clamp-1">
                  {categoryDetail.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1 leading-snug line-clamp-2">
                  {categoryDetail.desc}
                </p>
              </div>

              {/* Mini tags */}
              <div className="flex flex-wrap gap-1 pt-1">
                {categoryDetail.tags.slice(0, 3).map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-950/80 border border-slate-800 text-slate-300 truncate"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Launch Button */}
            <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs font-black text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 px-3 py-1.5 rounded-xl shadow-md group-hover:brightness-110 transition">
              <span>{activeCategory === 'seo' ? 'Visit All SEO Tools' : 'Visit All Tools'}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>

          </div>

        </div>

        {/* Compact Bottom Banner */}
        <div className="rounded-2xl bg-slate-950 border border-slate-800/90 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shrink-0">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-white">
                Looking for custom enterprise AI or proprietary CRM automated pipelines?
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                We build dedicated LLM copilots, automated WhatsApp APIs, and multi-cloud web services.
              </div>
            </div>
          </div>

          <button
            onClick={() => onNavigate('contact')}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-cyan-300 font-bold text-xs uppercase tracking-wider transition shrink-0 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Consult AI Engineers</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
