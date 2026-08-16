import React, { useState, useEffect, useMemo } from 'react';
import { 
  AI_SUITE_CATEGORIES, 
  AI_SUITE_TOOLS, 
  AiToolItem, 
  ToolCategoryType 
} from '../data/aiToolsSuiteData';
import { SEO } from '../components/common/SEO';
import { ToolDetailLayout } from '../components/tools/ToolDetailLayout';
import { ToolDefinition } from '../data/toolsData';

// Specialized Interactive Tool Components
import { TextToImageTool } from '../components/tools/TextToImageTool';
import { ChatWithPdfTool } from '../components/tools/ChatWithPdfTool';
import { UniversalAiToolRunner } from '../components/tools/UniversalAiToolRunner';
import { WordToPdfTool } from '../components/tools/WordToPdfTool';
import { PdfToWordTool } from '../components/tools/PdfToWordTool';
import { PdfToJpgTool } from '../components/tools/PdfToJpgTool';
import { JpgToPdfTool } from '../components/tools/JpgToPdfTool';
import { PdfEditorTool } from '../components/tools/PdfEditorTool';
import { WebsiteAuditTool } from '../components/tools/WebsiteAuditTool';
import { LoanEmiCalculatorTool } from '../components/tools/LoanEmiCalculatorTool';
import { SipReturnsCalculatorTool } from '../components/tools/SipReturnsCalculatorTool';
import { GstCalculatorTool } from '../components/tools/GstCalculatorTool';
import { IncomeTaxCalculatorTool } from '../components/tools/IncomeTaxCalculatorTool';
import { InsuranceCalculatorTool } from '../components/tools/InsuranceCalculatorTool';
import { JsonFormatterTool } from '../components/tools/JsonFormatterTool';
import { TextCounterTool } from '../components/tools/TextCounterTool';
import { PasswordGeneratorTool } from '../components/tools/PasswordGeneratorTool';
import { AgeCalculatorTool } from '../components/tools/AgeCalculatorTool';
import { QrCodeGeneratorTool } from '../components/tools/QrCodeGeneratorTool';
import { ImageCompressorTool } from '../components/tools/ImageCompressorTool';
import { MetaTagGeneratorTool } from '../components/tools/MetaTagGeneratorTool';

import { 
  Sparkles, 
  Search, 
  ArrowRight, 
  Bookmark, 
  Clock, 
  Star, 
  FlaskConical, 
  Zap, 
  Compass, 
  ChevronRight,
  Filter,
  CheckCircle2,
  Share2
} from 'lucide-react';

const QUICK_INTENT_CHIPS = [
  { label: '🖼️ Generate Image', query: 'image' },
  { label: '📄 Chat with PDF', query: 'pdf' },
  { label: '💰 Calculate Loan EMI', query: 'loan' },
  { label: '📈 Audit Website & SEO', query: 'website' },
  { label: '💼 Create Business Plan', query: 'business' },
  { label: '🎯 ATS Resume Builder', query: 'resume' },
  { label: '🧪 AI Prompt Lab', query: 'prompt' },
  { label: '📝 Summarize Text', query: 'summarize' }
];

export const AIToolsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ToolCategoryType | 'all' | 'favorites' | 'recents'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeToolId, setActiveToolId] = useState<string | null>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const toolParam = params.get('tool');
      if (toolParam) return toolParam;
    }
    return null;
  });

  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem('avrx_ai_favs') || '[]');
    } catch {
      return [];
    }
  });

  const [recents, setRecents] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem('avrx_ai_recents') || '[]');
    } catch {
      return [];
    }
  });

  useEffect(() => {
    if (activeToolId && typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set('tool', activeToolId);
      window.history.replaceState({}, '', url.toString());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeToolId]);

  // Filter tools
  const filteredTools = useMemo(() => {
    let list = AI_SUITE_TOOLS;

    if (selectedCategory === 'favorites') {
      list = list.filter(t => favorites.includes(t.id));
    } else if (selectedCategory === 'recents') {
      list = list.filter(t => recents.includes(t.id));
    } else if (selectedCategory !== 'all') {
      list = list.filter(t => t.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(t => 
        t.name.toLowerCase().includes(q) ||
        t.shortDescription.toLowerCase().includes(q) ||
        t.categoryLabel.toLowerCase().includes(q) ||
        t.slug.toLowerCase().includes(q)
      );
    }

    return list;
  }, [selectedCategory, searchQuery, favorites, recents]);

  const activeTool = useMemo(() => {
    if (!activeToolId) return null;
    return AI_SUITE_TOOLS.find(t => t.id === activeToolId || t.slug === activeToolId) || null;
  }, [activeToolId]);

  // Convert AiToolItem to ToolDefinition format for ToolDetailLayout
  const activeToolDef: ToolDefinition | null = useMemo(() => {
    if (!activeTool) return null;
    return {
      id: activeTool.id,
      slug: activeTool.slug,
      name: activeTool.name,
      shortDescription: activeTool.shortDescription,
      fullDescription: activeTool.fullDescription,
      category: 'ai',
      categoryLabel: activeTool.categoryLabel,
      iconName: activeTool.iconName,
      badge: activeTool.badge,
      seoTitle: activeTool.seoTitle,
      seoDescription: activeTool.seoDescription,
      features: activeTool.features,
      howItWorks: activeTool.howItWorks,
      faqs: activeTool.faqs,
      privacyNote: '100% Secure & Ephemeral. Inputs and files are processed strictly in compliance with AVRX data protection guidelines.',
      relatedToolIds: AI_SUITE_TOOLS.filter(t => t.category === activeTool.category && t.id !== activeTool.id).slice(0, 3).map(t => t.id)
    };
  }, [activeTool]);

  const renderActiveToolComponent = (tool: AiToolItem) => {
    switch (tool.id) {
      case 'text-to-image':
      case 'ai-image-prompt-generator':
        return <TextToImageTool />;
      case 'chat-with-pdf':
      case 'pdf-summarizer':
        return <ChatWithPdfTool />;
      case 'word-to-pdf':
        return <WordToPdfTool />;
      case 'pdf-to-word':
        return <PdfToWordTool />;
      case 'pdf-to-jpg':
        return <PdfToJpgTool />;
      case 'jpg-to-pdf':
        return <JpgToPdfTool />;
      case 'image-compressor':
        return <ImageCompressorTool />;
      case 'pdf-editor':
        return <PdfEditorTool />;
      case 'website-health-checker':
      case 'ai-seo-audit':
        return <WebsiteAuditTool />;
      case 'meta-tag-generator':
        return <MetaTagGeneratorTool />;
      case 'loan-emi-calculator':
        return <LoanEmiCalculatorTool />;
      case 'sip-calculator':
        return <SipReturnsCalculatorTool />;
      case 'gst-calculator':
        return <GstCalculatorTool />;
      case 'income-tax-calculator':
        return <IncomeTaxCalculatorTool />;
      case 'insurance-calculator':
        return <InsuranceCalculatorTool />;
      case 'json-formatter':
        return <JsonFormatterTool />;
      case 'text-counter':
        return <TextCounterTool />;
      case 'password-generator':
        return <PasswordGeneratorTool />;
      case 'age-calculator':
        return <AgeCalculatorTool />;
      case 'qr-code-generator':
        return <QrCodeGeneratorTool />;
      default:
        return <UniversalAiToolRunner tool={tool} onSelectRelatedTool={id => setActiveToolId(id)} />;
    }
  };

  // If a specific tool is selected, render standard layout view
  if (activeTool && activeToolDef) {
    return (
      <ToolDetailLayout
        tool={activeToolDef}
        onBackToHub={() => {
          setActiveToolId(null);
          if (typeof window !== 'undefined') {
            const url = new URL(window.location.href);
            url.searchParams.delete('tool');
            window.history.replaceState({}, '', url.toString());
          }
        }}
        onSelectTool={id => setActiveToolId(id)}
      >
        {renderActiveToolComponent(activeTool)}
      </ToolDetailLayout>
    );
  }

  return (
    <div className="min-h-screen bg-[#050811] text-white pt-28 pb-24 relative overflow-hidden">
      <SEO
        title="Next-Gen AI Interactive Suite | AVRX.in"
        description="Explore 70+ next-gen AI tools for content writing, image creation, PDF analysis, Excel formulas, business planning, SEO audits, and developer utilities."
      />

      {/* Ambient background glows */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-rose-500/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* 1. Futuristic Header Hero */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/15 via-blue-500/15 to-purple-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-semibold shadow-[0_0_20px_rgba(6,182,212,0.2)]">
            <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span>Next-Gen AI Interactive Suite • 2026</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-tight">
            Next-Gen AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400">Interactive Suite</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Powerful AI tools designed to create, analyze, automate and transform your everyday digital work.
          </p>
        </div>

        {/* 2. Smart Discovery Search & Intent Box */}
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl blur-md opacity-25 group-hover:opacity-60 transition duration-300" />
            <div className="relative flex items-center bg-slate-900/90 border border-slate-700/80 rounded-2xl p-2 shadow-2xl backdrop-blur-xl">
              <Search className="w-5 h-5 text-cyan-400 ml-3 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="What do you want to do? (e.g. Generate image, Chat with PDF, Calculate EMI, Audit SEO)..."
                className="w-full bg-transparent px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-xs text-slate-400 hover:text-white px-3 py-1 mr-1"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Quick Intent Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mr-1">
              Popular Actions:
            </span>
            {QUICK_INTENT_CHIPS.map((chip, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setSearchQuery(chip.query);
                  setSelectedCategory('all');
                }}
                className="text-xs px-3 py-1.5 rounded-full bg-slate-900/80 hover:bg-cyan-500/20 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 transition"
              >
                {chip.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3. Category Selector Navigation Bar */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <Compass className="w-4 h-4 text-cyan-400" />
              <span>Explore AI Tool Categories</span>
            </h3>
            <span className="text-xs text-slate-500">
              Showing {filteredTools.length} {filteredTools.length === 1 ? 'Tool' : 'Tools'}
            </span>
          </div>

          {/* Category Tabs Scrollable */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {AI_SUITE_CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`whitespace-nowrap px-4 py-2.5 rounded-2xl text-xs font-semibold border transition flex items-center gap-2 shrink-0 ${
                  selectedCategory === cat.id
                    ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                    : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:bg-slate-800/80 hover:border-slate-700'
                }`}
              >
                <span>{cat.shortName}</span>
                {cat.badge && (
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-md ${
                    selectedCategory === cat.id
                      ? 'bg-slate-950/30 text-slate-950'
                      : 'bg-slate-800 text-cyan-300'
                  }`}>
                    {cat.badge}
                  </span>
                )}
              </button>
            ))}

            {/* Favorites Tab */}
            {favorites.length > 0 && (
              <button
                onClick={() => setSelectedCategory('favorites')}
                className={`whitespace-nowrap px-4 py-2.5 rounded-2xl text-xs font-semibold border transition flex items-center gap-1.5 shrink-0 ${
                  selectedCategory === 'favorites'
                    ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold'
                    : 'bg-slate-900/80 border-slate-800 text-amber-300 hover:bg-slate-800'
                }`}
              >
                <Bookmark className="w-3.5 h-3.5" />
                <span>Saved ({favorites.length})</span>
              </button>
            )}
          </div>
        </div>

        {/* 4. Tools Display Grid */}
        {filteredTools.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {filteredTools.map(tool => (
              <div
                key={tool.id}
                onClick={() => setActiveToolId(tool.id)}
                className="group relative bg-slate-900/70 hover:bg-slate-850 border border-slate-800 hover:border-cyan-500/50 rounded-3xl p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_10px_30px_rgba(6,182,212,0.15)] cursor-pointer hover:-translate-y-1"
              >
                <div className="space-y-3">
                  
                  {/* Card Top: Category Tag + Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                      {tool.categoryLabel}
                    </span>
                    {tool.badge && (
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${
                        tool.badge === 'AI Lab'
                          ? 'bg-purple-500/15 border-purple-500/30 text-purple-300'
                          : tool.badge === 'Popular'
                          ? 'bg-amber-500/15 border-amber-500/30 text-amber-300'
                          : 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300'
                      }`}>
                        {tool.badge}
                      </span>
                    )}
                  </div>

                  {/* Card Title & Desc */}
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition">
                      {tool.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1.5 line-clamp-2 leading-relaxed">
                      {tool.shortDescription}
                    </p>
                  </div>

                </div>

                {/* Card Bottom: Launch Action */}
                <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 group-hover:text-cyan-400 transition">
                  <span className="font-semibold">Launch Tool</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-slate-900/40 border border-slate-800 rounded-3xl space-y-4">
            <Sparkles className="w-10 h-10 text-slate-600 mx-auto" />
            <h3 className="text-lg font-bold text-white">No tools found matching "{searchQuery}"</h3>
            <p className="text-xs text-slate-400 max-w-sm mx-auto">
              Try searching for "PDF", "Image", "SEO", "EMI", "Business", or reset your category filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs"
            >
              Show All Tools
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
