import React, { useState, useEffect, useMemo } from 'react';
import { 
  TOOLS_CATEGORIES, 
  TOOLS_LIST, 
  ToolDefinition 
} from '../data/toolsData';
import { SEO } from '../components/common/SEO';
import { ToolDetailLayout } from '../components/tools/ToolDetailLayout';

// Interactive Tool Components
import { LoanEmiCalculatorTool } from '../components/tools/LoanEmiCalculatorTool';
import { GstCalculatorTool } from '../components/tools/GstCalculatorTool';
import { IncomeTaxCalculatorTool } from '../components/tools/IncomeTaxCalculatorTool';
import { SipReturnsCalculatorTool } from '../components/tools/SipReturnsCalculatorTool';
import { InsuranceCalculatorTool } from '../components/tools/InsuranceCalculatorTool';

import { WordToPdfTool } from '../components/tools/WordToPdfTool';
import { PdfToWordTool } from '../components/tools/PdfToWordTool';
import { PdfToJpgTool } from '../components/tools/PdfToJpgTool';
import { JpgToPdfTool } from '../components/tools/JpgToPdfTool';
import { PdfEditorTool } from '../components/tools/PdfEditorTool';
import { ChatWithPdfTool } from '../components/tools/ChatWithPdfTool';

import { AiContentWriterTool } from '../components/tools/AiContentWriterTool';
import { AiSummarizerTool } from '../components/tools/AiSummarizerTool';
import { AiParaphraserTool } from '../components/tools/AiParaphraserTool';
import { AiTranslatorTool } from '../components/tools/AiTranslatorTool';
import { TextToImageTool } from '../components/tools/TextToImageTool';
import { AiImagePromptTool } from '../components/tools/AiImagePromptTool';

import { WebsiteAuditTool } from '../components/tools/WebsiteAuditTool';
import { MetaTagGeneratorTool } from '../components/tools/MetaTagGeneratorTool';
import { WebsiteTechCheckerTool } from '../components/tools/WebsiteTechCheckerTool';
import { UrlStatusCheckerTool } from '../components/tools/UrlStatusCheckerTool';
import { WebsiteTrafficSpeedTool } from '../components/tools/WebsiteTrafficSpeedTool';

import { QrCodeGeneratorTool } from '../components/tools/QrCodeGeneratorTool';
import { PasswordGeneratorTool } from '../components/tools/PasswordGeneratorTool';
import { JsonFormatterTool } from '../components/tools/JsonFormatterTool';
import { TextCounterTool } from '../components/tools/TextCounterTool';
import { ImageCompressorTool } from '../components/tools/ImageCompressorTool';
import { ImageBackgroundChangerTool } from '../components/tools/ImageBackgroundChangerTool';
import { AgeCalculatorTool } from '../components/tools/AgeCalculatorTool';
import { UnitConverterTool } from '../components/tools/UnitConverterTool';

import { 
  Sparkles, 
  Search, 
  ArrowRight, 
  Star, 
  Zap, 
  CheckCircle2, 
  Layers, 
  ShieldCheck,
  DollarSign,
  FileText,
  Cpu,
  Globe,
  Sliders
} from 'lucide-react';

interface AIToolsPageProps {
  initialToolSlug?: string;
  onNavigate?: (page: string, slug?: string) => void;
}

export const AIToolsPage: React.FC<AIToolsPageProps> = ({ initialToolSlug, onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeToolSlug, setActiveToolSlug] = useState<string | null>(() => {
    if (initialToolSlug) return initialToolSlug;
    if (typeof window !== 'undefined') {
      const pathname = window.location.pathname;
      if (pathname.startsWith('/ai-tools/') && pathname !== '/ai-tools') {
        return pathname.replace('/ai-tools/', '');
      }
      if (pathname.startsWith('/tools/') && pathname !== '/tools') {
        return pathname.replace('/tools/', '');
      }
      const params = new URLSearchParams(window.location.search);
      const toolParam = params.get('tool');
      if (toolParam) return toolParam;
    }
    return null;
  });

  // Sync initialToolSlug prop if changed from parent router
  useEffect(() => {
    if (initialToolSlug) {
      setActiveToolSlug(initialToolSlug);
    }
  }, [initialToolSlug]);

  // Handle URL history state
  useEffect(() => {
    if (activeToolSlug && typeof window !== 'undefined') {
      const targetPath = `/ai-tools/${activeToolSlug}`;
      if (window.location.pathname !== targetPath) {
        window.history.pushState({}, '', targetPath);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeToolSlug]);

  // Active Tool Object
  const activeTool: ToolDefinition | null = useMemo(() => {
    if (!activeToolSlug) return null;
    return TOOLS_LIST.find(t => t.slug === activeToolSlug || t.id === activeToolSlug) || null;
  }, [activeToolSlug]);

  // Filter tools
  const filteredTools = useMemo(() => {
    let list = TOOLS_LIST;

    if (selectedCategory !== 'all') {
      list = list.filter(t => t.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(t => 
        t.name.toLowerCase().includes(q) ||
        t.shortDescription.toLowerCase().includes(q) ||
        t.categoryLabel.toLowerCase().includes(q) ||
        t.slug.toLowerCase().includes(q) ||
        t.features.some(f => f.toLowerCase().includes(q))
      );
    }

    return list;
  }, [selectedCategory, searchQuery]);

  const handleSelectTool = (slug: string) => {
    setActiveToolSlug(slug);
  };

  const handleBackToHub = () => {
    setActiveToolSlug(null);
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', '/ai-tools');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const renderToolComponent = (tool: ToolDefinition) => {
    switch (tool.slug) {
      // 1. Finance & Tax
      case 'loan-calculator':
        return <LoanEmiCalculatorTool />;
      case 'gst-calculator':
        return <GstCalculatorTool />;
      case 'income-tax-calculator':
        return <IncomeTaxCalculatorTool />;
      case 'sip-calculator':
        return <SipReturnsCalculatorTool />;
      case 'insurance-premium-calculator':
        return <InsuranceCalculatorTool />;

      // 2. Documents & PDF Studio
      case 'word-to-pdf':
        return <WordToPdfTool />;
      case 'pdf-to-word':
        return <PdfToWordTool />;
      case 'pdf-to-jpg':
        return <PdfToJpgTool />;
      case 'jpg-to-pdf':
        return <JpgToPdfTool />;
      case 'pdf-editor':
        return <PdfEditorTool />;
      case 'chat-with-pdf':
        return <ChatWithPdfTool />;

      // 3. AI & Generative Content
      case 'ai-content-generator':
        return <AiContentWriterTool />;
      case 'text-summarizer':
        return <AiSummarizerTool />;
      case 'paraphrasing-tool':
        return <AiParaphraserTool />;
      case 'text-translator':
        return <AiTranslatorTool />;
      case 'text-to-image':
        return <TextToImageTool />;
      case 'ai-image-prompt-generator':
        return <AiImagePromptTool />;

      // 4. Website Diagnostics
      case 'website-health-check':
        return <WebsiteAuditTool />;
      case 'seo-meta-checker':
        return <MetaTagGeneratorTool />;
      case 'website-tech-checker':
        return <WebsiteTechCheckerTool />;
      case 'url-status-checker':
        return <UrlStatusCheckerTool />;
      case 'website-traffic-speed':
        return <WebsiteTrafficSpeedTool />;

      // 5. Productivity & Utilities
      case 'qr-generator':
        return <QrCodeGeneratorTool />;
      case 'password-generator':
        return <PasswordGeneratorTool />;
      case 'json-formatter':
        return <JsonFormatterTool />;
      case 'text-counter':
        return <TextCounterTool />;
      case 'image-compressor':
        return <ImageCompressorTool />;
      case 'image-background-changer':
        return <ImageBackgroundChangerTool />;
      case 'age-calculator':
        return <AgeCalculatorTool />;
      case 'unit-converter':
        return <UnitConverterTool />;

      default:
        return <AiContentWriterTool />;
    }
  };

  // If a specific tool is active, render the dedicated ToolDetailLayout page!
  if (activeTool) {
    return (
      <ToolDetailLayout
        tool={activeTool}
        onBackToHub={handleBackToHub}
        onSelectTool={handleSelectTool}
      >
        {renderToolComponent(activeTool)}
      </ToolDetailLayout>
    );
  }

  // Otherwise, render the Hub Overview with all 29 tools
  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 pt-28 pb-24 relative overflow-hidden">
      <SEO
        title="AVRX Free AI Tools Suite - 29 Working Productivity, Finance & PDF Tools"
        description="Access 29 free, 100% working AI and productivity tools including Loan EMI & Tax calculators, PDF converter studio, AI copywriting, QR code generator, and website SEO diagnostics."
      />

      {/* Ambient Neon Backdrops */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-cyan-500/10 via-blue-600/10 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Hub Hero Banner */}
        <div className="text-center max-w-4xl mx-auto space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/40 text-cyan-300 text-xs font-bold shadow-lg shadow-cyan-500/10">
            <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span>29 Free &amp; 100% Fully Functional Tools</span>
            <span className="w-1 h-1 rounded-full bg-cyan-400" />
            <span className="text-emerald-400 font-extrabold">Instant &amp; Zero Sign-Up</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
            AVRX Next-Gen{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
              AI &amp; Productivity Tools
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Every single tool in our suite is 100% working, privacy-first, and equipped with dedicated feature guides, step-by-step instructions, and direct permalinks.
          </p>

          {/* Live Search Bar */}
          <div className="max-w-2xl mx-auto relative pt-2">
            <Search className="w-5 h-5 text-cyan-400 absolute left-4 top-1/2 -translate-y-1/2 pt-1" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search working tools (e.g. EMI calculator, PDF to Word, QR Code, Paraphraser)..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 shadow-2xl text-sm sm:text-base backdrop-blur-xl"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white bg-slate-800 px-2 py-1 rounded-lg"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {TOOLS_CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-lg shadow-cyan-500/25 scale-105'
                    : 'bg-slate-900/90 border border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`px-2 py-0.5 rounded-full text-[11px] font-mono ${
                  isActive ? 'bg-slate-950/30 text-slate-950' : 'bg-slate-800 text-slate-400'
                }`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Tools Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <p className="text-xs sm:text-sm text-slate-400">
              Showing <span className="text-white font-bold">{filteredTools.length}</span> active working tools
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-bold bg-emerald-500/10 border border-emerald-500/30 px-3 py-1.5 rounded-xl">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Verified &amp; Tested</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map((tool) => {
              const gradient = tool.gradient || 'from-cyan-500 via-blue-600 to-indigo-600';
              return (
                <div
                  key={tool.id}
                  onClick={() => handleSelectTool(tool.slug)}
                  className="group relative rounded-3xl bg-slate-900/80 border border-slate-800/90 hover:border-cyan-500/60 p-6 sm:p-7 flex flex-col justify-between space-y-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-cyan-500/15 cursor-pointer backdrop-blur-xl overflow-hidden"
                >
                  {/* Subtle top glow bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient} opacity-80 group-hover:opacity-100 transition-opacity`} />

                  <div className="space-y-4">
                    {/* Category & Badge */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-3 py-1 rounded-xl">
                        {tool.categoryLabel}
                      </span>
                      {tool.badge && (
                        <span className="text-[11px] font-extrabold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-0.5 rounded-lg">
                          {tool.badge}
                        </span>
                      )}
                    </div>

                    {/* Tool Name */}
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                      {tool.name}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed line-clamp-3">
                      {tool.shortDescription}
                    </p>

                    {/* Feature Chips */}
                    <div className="space-y-1.5 pt-2">
                      {tool.features.slice(0, 2).map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Launch CTA */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-500">
                      /ai-tools/{tool.slug}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-cyan-400 group-hover:translate-x-1 transition-transform">
                      <span>Launch Tool</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
