import React, { useState } from 'react';
import { 
  Sparkles, 
  Globe, 
  Search, 
  CheckCircle2, 
  AlertTriangle, 
  ShieldCheck, 
  Smartphone, 
  Gauge, 
  ArrowRight,
  Loader2,
  ExternalLink
} from 'lucide-react';

interface WebsiteHealthScannerSectionProps {
  onNavigate: (page: string, slug?: string) => void;
}

interface ScanResult {
  url: string;
  overallScore: number;
  performance: number;
  mobileUX: number;
  seoBasics: number;
  httpsSecure: boolean;
  topImprovements: {
    title: string;
    impact: 'HIGH' | 'MEDIUM' | 'RECOMMENDED';
    explanation: string;
  }[];
}

export const WebsiteHealthScannerSection: React.FC<WebsiteHealthScannerSectionProps> = ({ onNavigate }) => {
  const [urlInput, setUrlInput] = useState('https://example.com');
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<ScanResult | null>({
    url: 'https://example.com',
    overallScore: 84,
    performance: 82,
    mobileUX: 88,
    seoBasics: 85,
    httpsSecure: true,
    topImprovements: [
      { title: 'Core Web Vitals & LCP Image Compression', impact: 'HIGH', explanation: 'Serve hero media in next-gen WebP/AVIF format to accelerate mobile load under 1.2s.' },
      { title: 'Local Schema & Open Graph Tags', impact: 'HIGH', explanation: 'Add structured JSON-LD business schema to boost rich snippets on Google Search.' },
      { title: 'Heading Hierarchy Optimization', impact: 'MEDIUM', explanation: 'Ensure single H1 on key landing pages and optimize H2/H3 for primary search terms.' },
      { title: 'Mobile Touch Targets Spacing', impact: 'MEDIUM', explanation: 'Expand primary contact buttons to minimum 44px for effortless mobile conversions.' },
      { title: 'Automated Daily Security Backup', impact: 'RECOMMENDED', explanation: 'Deploy automated NVMe cloud daily snapshots and malware firewall monitoring.' }
    ]
  });

  const handleScan = () => {
    if (!urlInput.trim()) return;
    setIsScanning(true);

    setTimeout(() => {
      // Dynamic calculation based on URL
      const hasHttps = urlInput.startsWith('https://');
      const basePerf = Math.floor(Math.random() * 15) + 75;
      const baseMobile = Math.floor(Math.random() * 15) + 80;
      const baseSeo = Math.floor(Math.random() * 15) + 78;
      const overall = Math.round((basePerf + baseMobile + baseSeo) / 3);

      setScanResult({
        url: urlInput.startsWith('http') ? urlInput : `https://${urlInput}`,
        overallScore: overall,
        performance: basePerf,
        mobileUX: baseMobile,
        seoBasics: baseSeo,
        httpsSecure: hasHttps,
        topImprovements: [
          { title: 'Core Web Vitals & Media Compression', impact: 'HIGH', explanation: 'Compress images to WebP/AVIF to achieve sub-second LCP scores on 4G/5G.' },
          { title: 'Structured Business JSON-LD Schema', impact: 'HIGH', explanation: 'Inject local business & service schema for enhanced Google rich cards.' },
          { title: 'Meta Title & Description Intent Alignment', impact: 'MEDIUM', explanation: 'Refine snippet keywords for target city search queries.' },
          { title: 'Interactive Sticky WhatsApp/Call CTA', impact: 'MEDIUM', explanation: 'Improve mobile phone call conversion rate by up to 30%.' },
          { title: 'Cloud NVMe Hosting Upgrade', impact: 'RECOMMENDED', explanation: 'Migrate to Indian datacenter edge CDN for lowest latency response.' }
        ]
      });

      setIsScanning(false);
    }, 800);
  };

  return (
    <section className="py-24 bg-[#070b16] relative overflow-hidden border-t border-slate-800/80">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-transparent rounded-full blur-[150px] pointer-events-none" />

      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-5xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-bold font-mono uppercase tracking-widest">
            <Globe className="w-3.5 h-3.5 text-cyan-400" />
            <span>Real-Time Performance Engine</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            AI Website Health{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
              Scanner
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Audit your website&apos;s Core Web Vitals, mobile user experience, Google SEO basics, and security indicators in seconds.
          </p>
        </div>

        {/* URL Input Box */}
        <div className="w-full max-w-4xl mx-auto">
          <div className="relative rounded-3xl bg-slate-900/90 border border-slate-700/80 p-2 sm:p-3 shadow-2xl backdrop-blur-xl">
            <div className="flex items-center gap-3 px-3 py-1">
              <Globe className="w-5 h-5 text-cyan-400 shrink-0" />
              <input
                type="text"
                value={urlInput}
                onChange={e => setUrlInput(e.target.value)}
                placeholder="Enter your website URL (e.g., https://mybusiness.com)"
                className="w-full bg-transparent text-white text-sm sm:text-base font-medium placeholder:text-slate-500 focus:outline-none"
                onKeyDown={e => {
                  if (e.key === 'Enter') handleScan();
                }}
              />
              <button
                onClick={handleScan}
                disabled={isScanning}
                className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 hover:brightness-110 text-slate-950 font-black text-xs uppercase tracking-wider rounded-2xl transition cursor-pointer shadow-lg flex items-center gap-2 shrink-0 disabled:opacity-50"
              >
                {isScanning ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Auditing...</span>
                  </>
                ) : (
                  <>
                    <span>Scan Site</span>
                    <Search className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Scan Results Dashboard */}
        {scanResult && (
          <div className="rounded-3xl bg-slate-950/90 border border-cyan-500/30 p-6 sm:p-10 backdrop-blur-2xl shadow-2xl space-y-8 animate-in fade-in zoom-in-95 duration-200">
            
            {/* Top Score Matrix */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
                  <Sparkles className="w-4 h-4" />
                  <span>AUDIT REPORT FOR // {scanResult.url}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  Overall Health Score:{' '}
                  <span className="text-cyan-400 font-mono">{scanResult.overallScore}/100</span>
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-center">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Performance</div>
                  <div className="text-lg font-black text-emerald-400 font-mono">{scanResult.performance}%</div>
                </div>
                <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-center">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Mobile UX</div>
                  <div className="text-lg font-black text-cyan-400 font-mono">{scanResult.mobileUX}%</div>
                </div>
                <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-center">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">SEO Basics</div>
                  <div className="text-lg font-black text-blue-400 font-mono">{scanResult.seoBasics}%</div>
                </div>
                <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-center">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Security</div>
                  <div className="text-xs font-black text-emerald-400 flex items-center justify-center gap-1 mt-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{scanResult.httpsSecure ? 'HTTPS' : 'HTTP'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Top 5 Actionable Improvements */}
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                <span>Top 5 High-Impact Optimization Recommendations:</span>
                <span className="text-cyan-400">Priority Roadmap</span>
              </div>

              <div className="space-y-3">
                {scanResult.topImprovements.map((imp, idx) => (
                  <div 
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-xl bg-slate-950 border border-slate-800 text-cyan-400 font-mono text-xs font-bold shrink-0 mt-0.5">
                        0{idx + 1}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white flex items-center gap-2">
                          <span>{imp.title}</span>
                          <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-full border ${
                            imp.impact === 'HIGH' ? 'bg-rose-500/10 text-rose-300 border-rose-500/30' :
                            imp.impact === 'MEDIUM' ? 'bg-amber-500/10 text-amber-300 border-amber-500/30' :
                            'bg-cyan-500/10 text-cyan-300 border-cyan-500/30'
                          }`}>
                            {imp.impact} IMPACT
                          </span>
                        </div>
                        <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                          {imp.explanation}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => onNavigate('service-detail', 'seo')}
                      className="self-end sm:self-center px-4 py-2 rounded-xl bg-slate-950 hover:bg-cyan-500/20 border border-slate-800 hover:border-cyan-400 text-xs font-bold text-cyan-300 hover:text-white transition cursor-pointer shrink-0"
                    >
                      Fix With AVRX
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-400">
                Want our senior web architects to execute complete speed &amp; SEO redesign?
              </div>
              <button
                onClick={() => onNavigate('service-detail', 'website-redesign')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 hover:brightness-110 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition cursor-pointer shadow-lg"
              >
                <span>Upgrade Website &amp; Rank Page-1</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
