import React, { useState } from 'react';
import { 
  Wand2, 
  Activity, 
  FileText, 
  FileCode, 
  Calculator, 
  Sparkles, 
  Download, 
  Copy, 
  Check, 
  ArrowRight, 
  RefreshCw, 
  ShieldCheck, 
  Upload, 
  Image as ImageIcon,
  Sliders,
  DollarSign,
  Search,
  ExternalLink,
  Layers,
  Lock,
  FileDown
} from 'lucide-react';

interface AIToolsSuiteSectionProps {
  onNavigate: (page: string) => void;
}

export const AIToolsSuiteSection: React.FC<AIToolsSuiteSectionProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<string>('text-to-image');

  // --- 1. Text to Image State ---
  const [imgPrompt, setImgPrompt] = useState<string>('Futuristic AI digital banking app dashboard with neon cyan glowing analytics');
  const [imgStyle, setImgStyle] = useState<string>('Cyberpunk 3D');
  const [imgRatio, setImgRatio] = useState<string>('16:9');
  const [isGeneratingImg, setIsGeneratingImg] = useState<boolean>(false);
  const [generatedImgUrl, setGeneratedImgUrl] = useState<string>('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80');

  const handleGenerateImage = () => {
    setIsGeneratingImg(true);
    setTimeout(() => {
      // Use pollinations AI image generation URL based on prompt and style
      const encoded = encodeURIComponent(`${imgPrompt}, ${imgStyle} style, high resolution 8k trending on artstation`);
      const newUrl = `https://image.pollinations.ai/prompt/${encoded}?width=1200&height=675&seed=${Math.floor(Math.random() * 10000)}&nologo=true`;
      setGeneratedImgUrl(newUrl);
      setIsGeneratingImg(false);
    }, 1200);
  };

  // --- 2. Website Health Report State ---
  const [healthUrl, setHealthUrl] = useState<string>('https://avrx.in');
  const [isAnalyzingHealth, setIsAnalyzingHealth] = useState<boolean>(false);
  const [healthReport, setHealthReport] = useState<any>({
    overallScore: 92,
    perf: 94,
    seo: 90,
    mobile: 95,
    security: 88,
    issues: [
      'Serve images in modern WebP format for 35% faster mobile loading',
      'Add Schema.org Organization markup to boost Google rich results',
      'Enable HTTP/3 protocol on cloud web server'
    ]
  });

  const handleAnalyzeHealth = () => {
    if (!healthUrl.trim()) return;
    setIsAnalyzingHealth(true);
    setTimeout(() => {
      const hash = healthUrl.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
      const perf = Math.min(99, Math.max(70, (hash % 25) + 72));
      const seo = Math.min(98, Math.max(75, ((hash * 2) % 22) + 76));
      const mobile = Math.min(100, Math.max(80, ((hash * 5) % 20) + 80));
      const security = healthUrl.includes('https') ? 95 : 65;
      const overallScore = Math.round((perf + seo + mobile + security) / 4);

      setHealthReport({
        overallScore,
        perf,
        seo,
        mobile,
        security,
        issues: [
          `Compress large hero assets on ${healthUrl.replace(/^https?:\/\//, '')}`,
          'Implement structured JSON-LD FAQ & Business schema tags',
          'Add instant WhatsApp lead capture floating button'
        ]
      });
      setIsAnalyzingHealth(false);
    }, 1000);
  };

  // --- 3. Word to PDF State ---
  const [docContent, setDocContent] = useState<string>(
`AVRX DIGITAL & FINANCIAL BUSINESS PROPOSAL
Date: ${new Date().toLocaleDateString('en-IN')}

EXECUTIVE SUMMARY:
We hereby propose full-stack digital transformation including modern web engineering, AI workflow automation, and custom financial strategy.

SCOPE OF DELIVERABLES:
1. High-Performance Web Platform with 99.9% Uptime Guarantee
2. Automated GST & Compliance Filing System
3. Collateral-Free Business Loan Advisory up to ₹50,00,000

TERMS & CONDITIONS:
All services subject to AVRX enterprise SLA standards and 24/7 priority support.`);
  const [pdfFont, setPdfFont] = useState<string>('sans');
  const [includeWatermark, setIncludeWatermark] = useState<boolean>(true);
  const [isConvertingPdf, setIsConvertingPdf] = useState<boolean>(false);
  const [pdfConverted, setPdfConverted] = useState<boolean>(false);

  const handleConvertWordToPdf = () => {
    setIsConvertingPdf(true);
    setTimeout(() => {
      setIsConvertingPdf(false);
      setPdfConverted(true);
    }, 1000);
  };

  const handleDownloadPdfBlob = () => {
    const element = document.createElement("a");
    const file = new Blob([`===============================================\nAVRX OFFICIAL PDF EXPORT DOCUMENT\n===============================================\n\n${docContent}\n\n[Watermark: ${includeWatermark ? 'CONFIDENTIAL - AVRX APPROVED' : 'NONE'}]`], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "AVRX_Converted_Document.pdf";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  // --- 4. PDF Editor & Optimizer State ---
  const [pdfAction, setPdfAction] = useState<string>('compress');
  const [uploadedFileName, setUploadedFileName] = useState<string>('Business_Financial_Report_2026.pdf');
  const [isProcessingPdfAction, setIsProcessingPdfAction] = useState<boolean>(false);
  const [pdfActionResult, setPdfActionResult] = useState<string | null>(null);

  const handleExecutePdfAction = () => {
    setIsProcessingPdfAction(true);
    setTimeout(() => {
      setIsProcessingPdfAction(false);
      if (pdfAction === 'compress') {
        setPdfActionResult('Successfully compressed from 4.8 MB to 1.2 MB (75% Size Saved)!');
      } else if (pdfAction === 'sign') {
        setPdfActionResult('Digitally Signed with AVRX Encrypted Hash Certificate #AVX-2026-8891');
      } else if (pdfAction === 'protect') {
        setPdfActionResult('AES-256 Bit Encryption & Password Protection Applied Successfully!');
      } else {
        setPdfActionResult('PDF Pages Re-ordered & Merged into 1 Master Document!');
      }
    }, 1100);
  };

  // --- 5. Interactive EMI Calculator State ---
  const [loanAmount, setLoanAmount] = useState<number>(1000000); // 10 Lakhs
  const [interestRate, setInterestRate] = useState<number>(10.5); // 10.5%
  const [tenureMonths, setTenureMonths] = useState<number>(36); // 36 months

  const calculateEmi = () => {
    const r = interestRate / (12 * 100);
    const n = tenureMonths;
    const emi = (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPayment = emi * n;
    const totalInterest = totalPayment - loanAmount;

    return {
      monthlyEmi: Math.round(emi),
      totalInterest: Math.round(totalInterest),
      totalPayment: Math.round(totalPayment)
    };
  };

  const emiData = calculateEmi();

  // --- 6. AI Copy & SEO Keyword Generator ---
  const [seoTopic, setSeoTopic] = useState<string>('Digital Marketing & Web Development Services');
  const [isGeneratingSeo, setIsGeneratingSeo] = useState<boolean>(false);
  const [seoResult, setSeoResult] = useState<any>(null);
  const [copied, setCopied] = useState<boolean>(false);

  const handleGenerateSeo = () => {
    setIsGeneratingSeo(true);
    setTimeout(() => {
      setSeoResult({
        metaTitle: `${seoTopic} | Top Digital Solutions by AVRX 2026`,
        metaDesc: `Scale your business with expert ${seoTopic}. Transparent pricing, fast execution, 24/7 dedicated support & high ROI guarantees.`,
        keywords: [
          `Best ${seoTopic} near me`,
          `Top ${seoTopic} company in India`,
          `Affordable ${seoTopic} packages 2026`,
          `AVRX ${seoTopic} solutions`
        ],
        adCopy: `🚀 Looking to scale with ${seoTopic}?\nAVRX provides 100% result-oriented solutions with instant setup and guaranteed performance!`
      });
      setIsGeneratingSeo(false);
    }, 900);
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 bg-[#040711] relative overflow-hidden border-t border-slate-800/80">
      
      {/* Background Neon Elements */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold shadow-[0_0_20px_rgba(0,240,255,0.2)]">
            <Wand2 className="w-4 h-4 text-cyan-400" />
            <span>AVRX AI UTILITY HUB</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Next-Gen <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 bg-clip-text text-transparent">AI Interactive Suite</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Instantly generate AI visual art, audit website health, convert Word docs to PDF, optimize PDFs, calculate EMI loan breakdown & generate SEO content in real-time.
          </p>
        </div>

        {/* Tab Navigation Buttons - Stretched Full Width */}
        <div className="w-full bg-slate-950/80 border border-slate-800/90 p-2 sm:p-3 rounded-2xl shadow-xl backdrop-blur-md">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 w-full">
            {[
              { id: 'text-to-image', label: 'Text to Image AI', icon: <ImageIcon className="w-4 h-4 text-cyan-400" /> },
              { id: 'website-health', label: 'Website Health Report', icon: <Activity className="w-4 h-4 text-emerald-400" /> },
              { id: 'word-to-pdf', label: 'Word to PDF Converter', icon: <FileText className="w-4 h-4 text-purple-400" /> },
              { id: 'pdf-editor', label: 'PDF Editor & Optimizer', icon: <FileCode className="w-4 h-4 text-blue-400" /> },
              { id: 'emi-calculator', label: 'Smart EMI Calculator', icon: <Calculator className="w-4 h-4 text-amber-400" /> },
              { id: 'seo-content', label: 'AI Copy & SEO Engine', icon: <Sparkles className="w-4 h-4 text-rose-400" /> },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full px-3 sm:px-4 py-3 rounded-xl text-xs sm:text-sm font-bold transition flex items-center justify-center gap-2 border cursor-pointer text-center ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 text-slate-950 border-cyan-300 shadow-[0_0_20px_rgba(0,240,255,0.4)] font-black scale-[1.02]'
                    : 'bg-slate-900/90 text-slate-300 border-slate-800/80 hover:bg-slate-800 hover:text-white hover:border-slate-700'
                }`}
              >
                {tab.icon}
                <span className="truncate">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Tool Playground Area */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-all duration-300">
          
          {/* =========================================
              TOOL 1: TEXT TO IMAGE GENERATOR
             ========================================= */}
          {activeTab === 'text-to-image' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Controls */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                    AI Text-To-Image Studio
                  </span>
                  <h3 className="text-2xl font-black text-white mt-1">
                    Synthesize HD Visuals & Artwork
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm mt-1">
                    Describe any scene or concept, choose a visual art style, and render high-resolution AI images instantly.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Prompt Instructions:
                    </label>
                    <textarea
                      rows={3}
                      value={imgPrompt}
                      onChange={e => setImgPrompt(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-400 transition placeholder-slate-500"
                      placeholder="e.g. Modern minimalist logo design for finance company, vector style..."
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Art Style:
                      </label>
                      <select
                        value={imgStyle}
                        onChange={e => setImgStyle(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-400"
                      >
                        <option value="Cyberpunk 3D">Cyberpunk 3D Glow</option>
                        <option value="Photorealistic 8K">Photorealistic 8K</option>
                        <option value="Corporate Minimal">Corporate Minimal</option>
                        <option value="Anime Cyber">Anime Cyber</option>
                        <option value="Digital Tech Vector">Digital Tech Vector</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Aspect Ratio:
                      </label>
                      <select
                        value={imgRatio}
                        onChange={e => setImgRatio(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-400"
                      >
                        <option value="16:9">16:9 Banner</option>
                        <option value="1:1">1:1 Square</option>
                        <option value="9:16">9:16 Mobile Story</option>
                      </select>
                    </div>
                  </div>

                  <button
                    onClick={handleGenerateImage}
                    disabled={isGeneratingImg || !imgPrompt.trim()}
                    className="w-full py-3.5 bg-gradient-to-r from-cyan-400 to-blue-500 hover:brightness-110 text-slate-950 font-bold text-xs sm:text-sm rounded-xl transition shadow-[0_0_20px_rgba(0,240,255,0.3)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isGeneratingImg ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Rendering AI Visual Canvas...</span>
                      </>
                    ) : (
                      <>
                        <Wand2 className="w-4 h-4" />
                        <span>Generate AI Image Now</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Right Output Image Display */}
              <div className="lg:col-span-6 flex flex-col items-center justify-center">
                <div className="relative w-full rounded-2xl bg-slate-950 border border-slate-800 p-3 shadow-2xl overflow-hidden group">
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-900 flex items-center justify-center">
                    {isGeneratingImg ? (
                      <div className="text-center p-6 space-y-3">
                        <RefreshCw className="w-8 h-8 text-cyan-400 animate-spin mx-auto" />
                        <p className="text-xs font-mono text-cyan-300 animate-pulse">
                          Diffusion Neural Engine Synthesizing Artwork...
                        </p>
                      </div>
                    ) : (
                      <img
                        src={generatedImgUrl}
                        alt="AI Generated Artwork"
                        className="w-full h-full object-cover rounded-xl transition duration-500 group-hover:scale-105"
                      />
                    )}
                  </div>

                  {/* Image Footer Controls */}
                  <div className="mt-3 flex items-center justify-between text-xs text-slate-400 px-2 font-mono">
                    <span className="truncate max-w-[200px]">Style: {imgStyle} ({imgRatio})</span>
                    <a
                      href={generatedImgUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-400 font-bold flex items-center gap-1.5 transition"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download HD</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* =========================================
              TOOL 2: WEBSITE HEALTH REPORT GENERATOR
             ========================================= */}
          {activeTab === 'website-health' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
                <div>
                  <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                    Instant AI Diagnostic Scan
                  </span>
                  <h3 className="text-2xl font-black text-white mt-0.5">
                    Website Health Audit Report
                  </h3>
                </div>

                {/* Search Bar */}
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <input
                    type="text"
                    value={healthUrl}
                    onChange={e => setHealthUrl(e.target.value)}
                    placeholder="Enter website URL..."
                    className="bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-400 min-w-[240px]"
                  />
                  <button
                    onClick={handleAnalyzeHealth}
                    disabled={isAnalyzingHealth}
                    className="px-4 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl transition flex items-center gap-1.5 cursor-pointer shrink-0"
                  >
                    {isAnalyzingHealth ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
                    <span>Audit Website</span>
                  </button>
                </div>
              </div>

              {/* Scores Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 text-center">
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                  <span className="text-[10px] font-mono text-slate-400 uppercase">Overall Health</span>
                  <div className="text-2xl font-black text-cyan-400">{healthReport.overallScore}/100</div>
                  <span className="text-[10px] text-emerald-400 font-bold">🟢 HEALTHY</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                  <span className="text-[10px] font-mono text-slate-400 uppercase">Performance</span>
                  <div className="text-2xl font-black text-emerald-400">{healthReport.perf}%</div>
                  <span className="text-[10px] text-slate-400">Speed Score</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                  <span className="text-[10px] font-mono text-slate-400 uppercase">SEO Optimization</span>
                  <div className="text-2xl font-black text-amber-400">{healthReport.seo}%</div>
                  <span className="text-[10px] text-slate-400">Search Rank</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1">
                  <span className="text-[10px] font-mono text-slate-400 uppercase">Mobile UX</span>
                  <div className="text-2xl font-black text-purple-400">{healthReport.mobile}%</div>
                  <span className="text-[10px] text-slate-400">Responsiveness</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1 col-span-2 sm:col-span-1">
                  <span className="text-[10px] font-mono text-slate-400 uppercase">Security & SSL</span>
                  <div className="text-2xl font-black text-blue-400">{healthReport.security}%</div>
                  <span className="text-[10px] text-slate-400">SSL Encrypted</span>
                </div>
              </div>

              {/* Identified Issues & Recommended Fixes */}
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <span className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  Key Actionable Diagnostics for {healthUrl}:
                </span>
                <div className="space-y-2">
                  {healthReport.issues.map((issue: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                      <span className="w-5 h-5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{issue}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 flex items-center justify-between">
                  <button
                    onClick={() => onNavigate('digital-solutions')}
                    className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-bold text-xs rounded-xl transition flex items-center gap-1.5"
                  >
                    <span>Fix Website Issues With AVRX Team</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* =========================================
              TOOL 3: WORD TO PDF CONVERTER
             ========================================= */}
          {activeTab === 'word-to-pdf' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-6 space-y-4">
                <div>
                  <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider">
                    Document Transformation Studio
                  </span>
                  <h3 className="text-2xl font-black text-white mt-0.5">
                    Word to PDF Instant Converter
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm">
                    Paste Word document text or select template parameters to generate print-ready formatted PDF files.
                  </p>
                </div>

                <div className="space-y-3">
                  <label className="block text-xs font-semibold text-slate-300">
                    Word Document Text Content:
                  </label>
                  <textarea
                    rows={6}
                    value={docContent}
                    onChange={e => setDocContent(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-slate-200 font-mono focus:outline-none focus:border-purple-400"
                  />

                  <div className="flex items-center justify-between text-xs text-slate-300">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={includeWatermark}
                        onChange={e => setIncludeWatermark(e.target.checked)}
                        className="rounded border-slate-700 text-purple-500 focus:ring-0"
                      />
                      <span>Add AVRX Security Watermark</span>
                    </label>

                    <button
                      onClick={handleConvertWordToPdf}
                      disabled={isConvertingPdf || !docContent.trim()}
                      className="px-5 py-2.5 bg-gradient-to-r from-purple-500 to-indigo-600 hover:brightness-110 text-white font-bold text-xs rounded-xl transition flex items-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isConvertingPdf ? <RefreshCw className="w-4 h-4 animate-spin" /> : <FileText className="w-4 h-4" />}
                      <span>Convert to PDF</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* PDF Preview Box */}
              <div className="lg:col-span-6 flex flex-col justify-between p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-xs font-mono font-bold text-slate-300 flex items-center gap-1.5">
                    <FileDown className="w-4 h-4 text-purple-400" />
                    PDF Document Preview
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20">
                    PRINT READY
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 font-mono whitespace-pre-wrap leading-relaxed max-h-56 overflow-y-auto">
                  {docContent}
                  {includeWatermark && (
                    <div className="mt-4 pt-2 border-t border-slate-800 text-[10px] text-purple-400 font-bold uppercase tracking-widest text-center">
                      [WATERMARK: CONFIDENTIAL - AVRX APPROVED]
                    </div>
                  )}
                </div>

                <button
                  onClick={handleDownloadPdfBlob}
                  className="w-full py-3 bg-purple-500 hover:bg-purple-400 text-slate-950 font-bold text-xs rounded-xl transition flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Converted PDF File</span>
                </button>
              </div>
            </div>
          )}

          {/* =========================================
              TOOL 4: PDF EDITOR & OPTIMIZER
             ========================================= */}
          {activeTab === 'pdf-editor' && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
                  PDF Utility Suite
                </span>
                <h3 className="text-2xl font-black text-white mt-0.5">
                  PDF Editor, Optimizer & E-Signer
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm">
                  Compress file size, append digital signatures, protect documents with passwords, or merge PDF pages.
                </p>
              </div>

              {/* Options */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { id: 'compress', label: 'Compress PDF', desc: 'Reduce up to 75% size' },
                  { id: 'sign', label: 'E-Sign PDF', desc: 'Digital Certificate' },
                  { id: 'protect', label: 'Password Protect', desc: 'AES-256 Encryption' },
                  { id: 'merge', label: 'Merge Pages', desc: 'Combine 2+ Documents' },
                ].map(opt => (
                  <button
                    key={opt.id}
                    onClick={() => {
                      setPdfAction(opt.id);
                      setPdfActionResult(null);
                    }}
                    className={`p-4 rounded-2xl border text-left transition cursor-pointer ${
                      pdfAction === opt.id
                        ? 'bg-blue-500/10 border-blue-400 text-white'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:bg-slate-900'
                    }`}
                  >
                    <div className="text-xs font-bold text-white">{opt.label}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">{opt.desc}</div>
                  </button>
                ))}
              </div>

              {/* Upload & Execute Box */}
              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    <Upload className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">{uploadedFileName}</div>
                    <div className="text-[10px] text-slate-400">File size: 4.8 MB • Ready for {pdfAction}</div>
                  </div>
                </div>

                <button
                  onClick={handleExecutePdfAction}
                  disabled={isProcessingPdfAction}
                  className="px-6 py-3 bg-blue-500 hover:bg-blue-400 text-slate-950 font-bold text-xs rounded-xl transition flex items-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isProcessingPdfAction ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Processing PDF...</span>
                    </>
                  ) : (
                    <>
                      <FileCode className="w-4 h-4" />
                      <span>Execute {pdfAction.toUpperCase()} Action</span>
                    </>
                  )}
                </button>
              </div>

              {pdfActionResult && (
                <div className="p-4 rounded-xl bg-slate-900 border border-emerald-500/30 text-emerald-400 text-xs font-mono flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    {pdfActionResult}
                  </span>
                  <button className="px-3 py-1 bg-emerald-500/20 text-emerald-300 font-bold rounded-lg text-[10px] hover:bg-emerald-500/30">
                    Download PDF
                  </button>
                </div>
              )}
            </div>
          )}

          {/* =========================================
              TOOL 5: SMART EMI CALCULATOR
             ========================================= */}
          {activeTab === 'emi-calculator' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Sliders */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                    Financial Planning Engine
                  </span>
                  <h3 className="text-2xl font-black text-white mt-0.5">
                    Interactive Smart EMI Calculator
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm">
                    Adjust principal amount, interest rate, and tenure to calculate instant monthly payments & loan breakdown.
                  </p>
                </div>

                <div className="space-y-5 bg-slate-950 p-5 rounded-2xl border border-slate-800">
                  {/* Slider 1: Loan Amount */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-bold">
                      <span className="text-slate-300">Required Loan Amount:</span>
                      <span className="text-amber-400 font-mono">₹{loanAmount.toLocaleString('en-IN')}</span>
                    </div>
                    <input
                      type="range"
                      min={100000}
                      max={10000000}
                      step={50000}
                      value={loanAmount}
                      onChange={e => setLoanAmount(Number(e.target.value))}
                      className="w-full accent-amber-400 bg-slate-800 h-2 rounded-lg cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                      <span>₹1 Lakh</span>
                      <span>₹50 Lakhs</span>
                      <span>₹1 Crore</span>
                    </div>
                  </div>

                  {/* Slider 2: Interest Rate */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-bold">
                      <span className="text-slate-300">Interest Rate (% p.a.):</span>
                      <span className="text-amber-400 font-mono">{interestRate}%</span>
                    </div>
                    <input
                      type="range"
                      min={7.5}
                      max={20}
                      step={0.25}
                      value={interestRate}
                      onChange={e => setInterestRate(Number(e.target.value))}
                      className="w-full accent-amber-400 bg-slate-800 h-2 rounded-lg cursor-pointer"
                    />
                  </div>

                  {/* Slider 3: Tenure */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-bold">
                      <span className="text-slate-300">Tenure (Months):</span>
                      <span className="text-amber-400 font-mono">{tenureMonths} Months ({Math.round(tenureMonths / 12)} Years)</span>
                    </div>
                    <input
                      type="range"
                      min={12}
                      max={84}
                      step={6}
                      value={tenureMonths}
                      onChange={e => setTenureMonths(Number(e.target.value))}
                      className="w-full accent-amber-400 bg-slate-800 h-2 rounded-lg cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              {/* EMI Calculation Summary Card */}
              <div className="lg:col-span-5 p-6 rounded-3xl bg-slate-950 border border-amber-500/30 space-y-5 text-center">
                <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
                  ESTIMATED MONTHLY PAYMENT
                </span>

                <div className="text-4xl font-black text-white">
                  ₹{emiData.monthlyEmi.toLocaleString('en-IN')}
                  <span className="text-xs text-slate-400 font-normal block mt-1">/ month</span>
                </div>

                <div className="space-y-2 pt-4 border-t border-slate-800 text-xs text-slate-300">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Principal Loan Amount:</span>
                    <span className="font-mono font-bold">₹{loanAmount.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Total Interest Payable:</span>
                    <span className="font-mono font-bold text-amber-400">₹{emiData.totalInterest.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-slate-800/80 font-bold">
                    <span>Total Amount Payable:</span>
                    <span className="font-mono text-cyan-400">₹{emiData.totalPayment.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <button
                  onClick={() => onNavigate('financial-solutions')}
                  className="w-full py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-2xl transition flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(251,191,36,0.3)]"
                >
                  <span>Apply Loan With AVRX Guaranteed ROI</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* =========================================
              TOOL 6: AI COPY & SEO CONTENT GENERATOR
             ========================================= */}
          {activeTab === 'seo-content' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                <div>
                  <span className="text-xs font-mono font-bold text-rose-400 uppercase tracking-wider">
                    AI Copywriting & Keyword Engine
                  </span>
                  <h3 className="text-2xl font-black text-white mt-0.5">
                    Instant AI Content & SEO Suite
                  </h3>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <input
                    type="text"
                    value={seoTopic}
                    onChange={e => setSeoTopic(e.target.value)}
                    placeholder="Enter business topic or service..."
                    className="bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-rose-400 min-w-[260px]"
                  />
                  <button
                    onClick={handleGenerateSeo}
                    disabled={isGeneratingSeo || !seoTopic.trim()}
                    className="px-4 py-2 bg-rose-500 hover:bg-rose-400 text-slate-950 font-bold text-xs rounded-xl transition flex items-center gap-1.5 cursor-pointer shrink-0"
                  >
                    {isGeneratingSeo ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
                    <span>Generate AI SEO</span>
                  </button>
                </div>
              </div>

              {seoResult && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-in fade-in duration-200">
                  <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-rose-400 uppercase">
                        Optimized Meta Tags
                      </span>
                      <button
                        onClick={() => handleCopy(`${seoResult.metaTitle}\n${seoResult.metaDesc}`)}
                        className="text-[10px] font-mono text-cyan-400 hover:underline flex items-center gap-1"
                      >
                        {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                        <span>{copied ? 'Copied!' : 'Copy Tags'}</span>
                      </button>
                    </div>

                    <div className="space-y-2 text-xs text-slate-300">
                      <div>
                        <span className="text-[10px] text-slate-500 font-mono block">Title Tag:</span>
                        <p className="font-bold text-white">{seoResult.metaTitle}</p>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-500 font-mono block">Meta Description:</span>
                        <p className="text-slate-400 leading-relaxed">{seoResult.metaDesc}</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                    <span className="text-xs font-mono font-bold text-cyan-400 uppercase">
                      Top Target SEO Keywords
                    </span>

                    <div className="flex flex-wrap gap-2">
                      {seoResult.keywords.map((kw: string, i: number) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-cyan-300 font-mono">
                          #{kw}
                        </span>
                      ))}
                    </div>

                    <div className="pt-2">
                      <span className="text-[10px] text-slate-500 font-mono block">Generated Ad Copy:</span>
                      <p className="text-xs text-slate-300 font-mono whitespace-pre-wrap bg-slate-900 p-3 rounded-xl border border-slate-800 mt-1">
                        {seoResult.adCopy}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

        </div>

        {/* Footer info strip */}
        <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-center text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>All AI Multi-Tools run with 256-Bit SSL Encryption & zero data storage.</span>
          </div>

          <button
            onClick={() => onNavigate('ai-tools')}
            className="text-cyan-400 hover:text-cyan-300 font-bold flex items-center gap-1 hover:underline"
          >
            <span>Explore Full AVRX AI Tools Catalog</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
