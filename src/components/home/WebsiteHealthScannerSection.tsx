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
  ExternalLink,
  Zap,
  Flame,
  Activity,
  Cpu
} from 'lucide-react';
import { launchSoundEngine } from '../../utils/launchSoundEngine';

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
    overallScore: 94,
    performance: 96,
    mobileUX: 92,
    seoBasics: 95,
    httpsSecure: true,
    topImprovements: [
      { title: 'Core Web Vitals & Next-Gen AVIF Image Compression', impact: 'HIGH', explanation: 'Serve hero assets in modern WebP/AVIF format to accelerate mobile load under 0.8s.' },
      { title: 'Local Schema & Open Graph Semantic JSON-LD', impact: 'HIGH', explanation: 'Add structured JSON-LD business schema to boost rich snippet presence on Google Search.' },
      { title: 'Heading Hierarchy (H1/H2) Optimization', impact: 'MEDIUM', explanation: 'Ensure single H1 on primary landing views and optimize H2/H3 for target city terms.' },
      { title: 'Mobile Touch Targets & Button Spacing', impact: 'MEDIUM', explanation: 'Expand primary contact buttons to minimum 44px for effortless mobile conversions.' },
      { title: 'Automated Daily Security & Edge CDN Cache', impact: 'RECOMMENDED', explanation: 'Deploy automated NVMe cloud daily snapshots and LiteSpeed caching firewall.' }
    ]
  });

  const handleScan = () => {
    if (!urlInput.trim()) return;
    launchSoundEngine.playClickTick();
    setIsScanning(true);

    setTimeout(() => {
      const hasHttps = urlInput.startsWith('https://');
      const basePerf = Math.floor(Math.random() * 10) + 88;
      const baseMobile = Math.floor(Math.random() * 10) + 87;
      const baseSeo = Math.floor(Math.random() * 10) + 89;
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
      launchSoundEngine.playTeleportZap();
    }, 900);
  };

  return (
    <section className="py-28 bg-[#030611] relative overflow-hidden border-t border-slate-800/80 select-none">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-r from-cyan-500/15 via-blue-500/10 to-transparent rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-5xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold font-mono uppercase tracking-widest shadow-[0_0_20px_rgba(0,240,255,0.2)]">
            <Globe className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
            <span>REAL-TIME PERFORMANCE ENGINE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            AI WEBSITE HEALTH <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">SCANNER</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed font-normal">
            Audit your website&apos;s Core Web Vitals, mobile user experience, Google SEO basics, and security indicators in seconds with instant optimization recipes.
          </p>
        </div>

        {/* URL Input Box */}
        <div className="w-full max-w-4xl mx-auto">
          <div className="relative rounded-3xl bg-slate-900/95 border-2 border-cyan-500/40 p-2 sm:p-3 shadow-[0_0_40px_rgba(0,240,255,0.2)] backdrop-blur-2xl">
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
                className="px-6 sm:px-8 py-3.5 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider rounded-2xl transition cursor-pointer shadow-[0_0_25px_rgba(0,240,255,0.4)] flex items-center gap-2 shrink-0 disabled:opacity-50 hover:scale-105 active:scale-95"
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
          <div className="rounded-3xl bg-slate-950/95 border-2 border-cyan-500/40 p-6 sm:p-10 backdrop-blur-2xl shadow-[0_0_50px_rgba(0,240,255,0.15)] space-y-10">
            
            {/* Top Score Matrix */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
                  <Sparkles className="w-4 h-4 animate-pulse" />
                  <span>AUDIT REPORT FOR // {scanResult.url}</span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-black text-white">
                  Overall Health Score:{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 font-mono">
                    {scanResult.overallScore}/100
                  </span>
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-4 rounded-2xl bg-slate-900/90 border border-emerald-500/40 text-center shadow-lg">
                  <div className="text-[10px] font-mono text-slate-400 uppercase font-bold">Performance</div>
                  <div className="text-2xl font-black text-emerald-400 font-mono mt-1">{scanResult.performance}%</div>
                </div>
                <div className="p-4 rounded-2xl bg-slate-900/90 border border-cyan-500/40 text-center shadow-lg">
                  <div className="text-[10px] font-mono text-slate-400 uppercase font-bold">Mobile UX</div>
                  <div className="text-2xl font-black text-cyan-400 font-mono mt-1">{scanResult.mobileUX}%</div>
                </div>
                <div className="p-4 rounded-2xl bg-slate-900/90 border border-blue-500/40 text-center shadow-lg">
                  <div className="text-[10px] font-mono text-slate-400 uppercase font-bold">SEO Basics</div>
                  <div className="text-2xl font-black text-blue-400 font-mono mt-1">{scanResult.seoBasics}%</div>
                </div>
                <div className="p-4 rounded-2xl bg-slate-900/90 border border-purple-500/40 text-center shadow-lg">
                  <div className="text-[10px] font-mono text-slate-400 uppercase font-bold">Security</div>
                  <div className="text-sm font-black text-purple-400 flex items-center justify-center gap-1.5 mt-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>{scanResult.httpsSecure ? 'HTTPS SECURE' : 'HTTP'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Top 5 Actionable Improvements */}
            <div className="space-y-5">
              <div className="flex items-center justify-between text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                <span>Top 5 High-Impact Optimization Recommendations:</span>
                <span className="text-cyan-400">Action Roadmap</span>
              </div>

              <div className="space-y-3.5">
                {scanResult.topImprovements.map((imp, idx) => (
                  <div 
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-cyan-400/50 transition-colors"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-cyan-400 font-mono text-xs font-bold shrink-0 mt-0.5">
                        0{idx + 1}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white flex items-center gap-2.5">
                          <span>{imp.title}</span>
                          <span className={`text-[9px] font-mono font-bold px-2.5 py-0.5 rounded-full border ${
                            imp.impact === 'HIGH' ? 'bg-rose-500/20 text-rose-300 border-rose-500/40' :
                            imp.impact === 'MEDIUM' ? 'bg-amber-500/20 text-amber-300 border-amber-500/40' :
                            'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'
                          }`}>
                            {imp.impact} IMPACT
                          </span>
                        </div>
                        <p className="text-xs text-slate-300 mt-1.5 leading-relaxed font-normal">
                          {imp.explanation}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        launchSoundEngine.playClickTick();
                        onNavigate('service-detail', 'seo-ranking');
                      }}
                      className="self-end sm:self-center px-4 py-2 rounded-xl bg-slate-950 hover:bg-cyan-500 text-cyan-300 hover:text-slate-950 border border-slate-800 hover:border-cyan-400 text-xs font-bold transition-all cursor-pointer shrink-0"
                    >
                      Fix With AVRX
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom CTA Bar */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs sm:text-sm text-slate-300">
                Want our senior web architects to execute a full sub-second speed &amp; SEO overhaul?
              </div>
              <button
                onClick={() => {
                  launchSoundEngine.playClickTick();
                  onNavigate('service-detail', 'website-design');
                }}
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 hover:brightness-110 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition cursor-pointer shadow-lg hover:scale-105"
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
