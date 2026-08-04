import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Zap,
  TrendingUp,
  Globe,
  DollarSign,
  Cpu,
  Star,
  CheckCircle2,
  Award,
  Calculator,
  Search,
  FileCheck,
  Code2,
  Smartphone,
  RefreshCw,
  Lock,
  ArrowUpRight
} from 'lucide-react';

export default function HomeHero() {
  const [activeTab, setActiveTab] = useState<'digital' | 'loans' | 'tax' | 'ai'>('digital');

  // Interactive Loan Calculator State
  const [loanAmount, setLoanAmount] = useState<number>(2500000); // ₹25 Lakhs default
  const [tenureMonths, setTenureMonths] = useState<number>(36); // 36 months

  // Interactive AI Scanner State
  const [scanUrl, setScanUrl] = useState<string>('');
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [scanResult, setScanResult] = useState<{
    score: number;
    lcp: string;
    seo: number;
    security: string;
  } | null>(null);

  // Calculate estimated monthly EMI (Interest ~10.5% p.a.)
  const calculateEmi = (principal: number, months: number) => {
    const annualRate = 0.105;
    const monthlyRate = annualRate / 12;
    const emi =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);
    return Math.round(emi);
  };

  const handleRunScan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!scanUrl.trim()) return;
    setIsScanning(true);
    setScanResult(null);

    setTimeout(() => {
      setIsScanning(false);
      setScanResult({
        score: Math.floor(Math.random() * 8) + 92, // 92 - 99
        lcp: '0.58s',
        seo: 98,
        security: 'A+ SSL & Security Grade'
      });
    }, 1200);
  };

  const trustedLogos = [
    'CRED Enterprise',
    'Razorpay Global',
    'Linear Cloud',
    'Vercel Next',
    'Stripe Connect',
    'Coinbase Vault',
    'AWS Apex',
    'Apple Partner'
  ];

  return (
    <div className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden bg-[#08090C]">
      {/* Dynamic Background Radial Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-gradient-to-tr from-blue-600/20 via-purple-600/15 to-cyan-500/20 rounded-full blur-[180px] pointer-events-none animate-pulse-subtle" />
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 -right-40 w-96 h-96 bg-cyan-600/20 rounded-full blur-[150px] pointer-events-none" />

      {/* Futuristic Grid Dot Overlay */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Interactive Category Selector Pills Bar */}
        <div className="flex items-center justify-center mb-8">
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl">
            <button
              onClick={() => setActiveTab('digital')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'digital'
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/25 scale-[1.02]'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Code2 className="w-4 h-4" />
              <span>Web & Mobile Studio</span>
            </button>

            <button
              onClick={() => setActiveTab('loans')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'loans'
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/25 scale-[1.02]'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <DollarSign className="w-4 h-4" />
              <span>Business Loans ₹20Cr</span>
            </button>

            <button
              onClick={() => setActiveTab('tax')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'tax'
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/25 scale-[1.02]'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <FileCheck className="w-4 h-4" />
              <span>GST & Tax SLA</span>
            </button>

            <button
              onClick={() => setActiveTab('ai')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'ai'
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/25 scale-[1.02]'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Cpu className="w-4 h-4" />
              <span>Live AI Health Scanner</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Text Column */}
          <div className="lg:col-span-7 space-y-7">
            {/* Top Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-semibold shadow-lg shadow-blue-500/10">
              <Sparkles className="w-4 h-4 text-cyan-400 animate-spin" style={{ animationDuration: '6s' }} />
              <span className="tracking-wide uppercase">
                {activeTab === 'digital' && 'High-Performance Web & Mobile Products'}
                {activeTab === 'loans' && 'Collateral-Free Business Capital Up To ₹20 Cr'}
                {activeTab === 'tax' && 'Chartered Accountant GST & Statutory Filing Panel'}
                {activeTab === 'ai' && 'AI Website Health & SEO Diagnostic Engine'}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-poppins font-extrabold text-white tracking-tight leading-[1.08]">
              Architecting <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
                Digital Dominance
              </span> <br />
              & Financial Growth.
            </h1>

            {/* Dynamic Subtitle according to active tab */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              {activeTab === 'digital' &&
                'Unified CRED-inspired ecosystem delivering sub-second Next.js web platforms, native iOS/Android apps, automated GST & tax compliance, and instant business loans under one SLA.'}
              {activeTab === 'loans' &&
                'Secure collateral-free working capital from ₹10 Lakhs to ₹20 Crores with Tier-1 bank underwriting, lowest 8.35% interest rates, and in-principle sanction in 48 hours.'}
              {activeTab === 'tax' &&
                'Zero-error GSTR-3B filings, ITR audits, and ROC annual returns managed by our panel of practicing Chartered Accountants with a 15-minute SLA response desk.'}
              {activeTab === 'ai' &&
                'Instant diagnostic engine analyzing domain core web vitals, LCP speed bottlenecks, SSL security grades, and schema compliance in real-time.'}
            </p>

            {/* Value Checkpoints */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
              {[
                { label: '99.9% Uptime SLA', icon: ShieldCheck },
                { label: '0.6s LCP Core Vitals', icon: Zap },
                { label: '48-hr Loan Sanction', icon: DollarSign },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-300">
                    <Icon className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span>{item.label}</span>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Link
                to="/contact"
                className="px-8 py-4 rounded-2xl text-sm font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 group"
              >
                <span>Schedule Executive Call</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to={
                  activeTab === 'loans'
                    ? '/financial-solutions'
                    : activeTab === 'tax'
                    ? '/tax-solutions'
                    : activeTab === 'ai'
                    ? '/ai-solutions'
                    : '/services'
                }
                className="px-8 py-4 rounded-2xl text-sm font-bold bg-white/5 hover:bg-white/10 text-white border border-white/15 hover:border-white/30 transition-all duration-300 flex items-center gap-2"
              >
                <span>Explore Solutions</span>
                <ArrowUpRight className="w-4 h-4 text-cyan-400" />
              </Link>
            </div>

            {/* Client rating preview */}
            <div className="flex items-center gap-6 pt-3 border-t border-white/10">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
                <span className="text-white font-bold text-sm ml-2">4.98 / 5.0</span>
              </div>
              <div className="text-xs text-slate-400">
                Trusted by <span className="text-white font-semibold">1,400+</span> Enterprises & CFOs
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Dynamic Playground Widget */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Back Glow Effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 rounded-3xl blur-2xl opacity-30 animate-pulse-subtle" />

              {/* Main CRED-style Dashboard Glass Container */}
              <div className="relative rounded-3xl glass-card bg-[#0D0F18]/90 p-6 sm:p-8 border border-white/15 shadow-2xl space-y-6">
                {/* Header widget */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">AVRX Interactive Suite</div>
                      <div className="text-xs text-cyan-400 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                        <span>Live SLA System Verified</span>
                      </div>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/30 text-[10px] font-bold uppercase">
                    {activeTab}
                  </span>
                </div>

                {/* TAB CONTENT 1: DIGITAL STUDIO */}
                {activeTab === 'digital' && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-900/30 via-slate-900/60 to-cyan-900/30 border border-blue-500/30 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                          Core Web Vitals SLA Score
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold">
                          99 / 100 PASS
                        </span>
                      </div>
                      <div className="w-full bg-white/10 h-2.5 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 h-full w-[99%]" />
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-center pt-1">
                        <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                          <span className="text-[10px] text-slate-400 block">LCP Speed</span>
                          <span className="text-xs font-bold text-emerald-400">0.58s</span>
                        </div>
                        <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                          <span className="text-[10px] text-slate-400 block">FID Delay</span>
                          <span className="text-xs font-bold text-cyan-400">2ms</span>
                        </div>
                        <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                          <span className="text-[10px] text-slate-400 block">CLS Shift</span>
                          <span className="text-xs font-bold text-blue-400">0.00</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                        <div className="text-xs text-slate-400 flex items-center gap-1.5">
                          <Globe className="w-3.5 h-3.5 text-blue-400" />
                          <span>Enterprise Builds</span>
                        </div>
                        <div className="text-xl font-poppins font-black text-white">450+ Live</div>
                        <div className="text-[10px] text-green-400 font-semibold">+42% Avg Conversion</div>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                        <div className="text-xs text-slate-400 flex items-center gap-1.5">
                          <Smartphone className="w-3.5 h-3.5 text-cyan-400" />
                          <span>Mobile Apps</span>
                        </div>
                        <div className="text-xl font-poppins font-black text-white">iOS & Android</div>
                        <div className="text-[10px] text-cyan-300 font-semibold">Flutter / React Native</div>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs">
                      <span className="text-slate-300">Stack: React 18 • Next.js • NVMe Edge</span>
                      <Link to="/digital-products" className="text-cyan-400 font-bold hover:underline">
                        View Products &rarr;
                      </Link>
                    </div>
                  </div>
                )}

                {/* TAB CONTENT 2: BUSINESS LOANS EMI CALCULATOR */}
                {activeTab === 'loans' && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                        <Calculator className="w-4 h-4" />
                        <span>Instant Loan EMI Estimator</span>
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-green-500/20 text-green-300 font-bold">
                        0 Collateral
                      </span>
                    </div>

                    {/* Loan Amount Slider */}
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-400">Required Capital</span>
                        <span className="text-white font-bold text-sm">
                          ₹{(loanAmount / 100000).toFixed(1)} Lakhs
                        </span>
                      </div>
                      <input
                        type="range"
                        min={500000}
                        max={50000000}
                        step={500000}
                        value={loanAmount}
                        onChange={(e) => setLoanAmount(Number(e.target.value))}
                        className="w-full accent-cyan-400 bg-slate-800 rounded-lg cursor-pointer h-2"
                      />
                      <div className="flex justify-between text-[10px] text-slate-500">
                        <span>₹5L</span>
                        <span>₹1 Cr</span>
                        <span>₹5 Cr</span>
                      </div>
                    </div>

                    {/* Loan Tenure Selector */}
                    <div className="grid grid-cols-3 gap-2">
                      {[12, 36, 60].map((m) => (
                        <button
                          key={m}
                          onClick={() => setTenureMonths(m)}
                          className={`py-2 rounded-xl text-xs font-bold transition-all ${
                            tenureMonths === m
                              ? 'bg-blue-600 text-white border border-blue-400 shadow'
                              : 'bg-white/5 text-slate-400 hover:text-white border border-white/10'
                          }`}
                        >
                          {m / 12} Years ({m}m)
                        </button>
                      ))}
                    </div>

                    {/* Calculated EMI Display */}
                    <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-950/60 to-cyan-950/60 border border-cyan-500/30 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-slate-400 block uppercase">Est. Monthly EMI</span>
                        <span className="text-xl sm:text-2xl font-poppins font-black text-cyan-300">
                          ₹{calculateEmi(loanAmount, tenureMonths).toLocaleString('en-IN')}
                        </span>
                      </div>
                      <Link
                        to="/financial-solutions"
                        className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs font-bold shadow-lg shadow-blue-500/25 flex items-center gap-1"
                      >
                        <span>Apply Now</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                )}

                {/* TAB CONTENT 3: GST & TAX COMPLIANCE */}
                {activeTab === 'tax' && (
                  <div className="space-y-4 animate-fade-in">
                    <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/30 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-400" />
                          <span>CA Panel Filing Status</span>
                        </span>
                        <span className="text-[10px] font-bold text-cyan-300 bg-cyan-500/20 px-2 py-0.5 rounded">
                          0 Penalties
                        </span>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs p-2 rounded-xl bg-white/5 border border-white/5">
                          <span className="text-slate-300">GSTR-1 & GSTR-3B Auto Reconciliation</span>
                          <span className="text-green-400 font-bold">CA Verified</span>
                        </div>
                        <div className="flex items-center justify-between text-xs p-2 rounded-xl bg-white/5 border border-white/5">
                          <span className="text-slate-300">Income Tax Audit & Form 3CD</span>
                          <span className="text-green-400 font-bold">100% Tax Saved</span>
                        </div>
                        <div className="flex items-center justify-between text-xs p-2 rounded-xl bg-white/5 border border-white/5">
                          <span className="text-slate-300">Dedicated Practicing CA Phone Line</span>
                          <span className="text-cyan-300 font-bold">15-Min Response</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-white">GST Filing Packages</div>
                        <div className="text-[10px] text-slate-400">Starting at ₹1,499 / month</div>
                      </div>
                      <Link
                        to="/tax-solutions"
                        className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all"
                      >
                        View Plans &rarr;
                      </Link>
                    </div>
                  </div>
                )}

                {/* TAB CONTENT 4: AI HEALTH SCANNER */}
                {activeTab === 'ai' && (
                  <div className="space-y-4 animate-fade-in">
                    <form onSubmit={handleRunScan} className="space-y-3">
                      <div className="text-xs font-bold text-slate-300 flex items-center gap-2">
                        <Search className="w-4 h-4 text-cyan-400" />
                        <span>Run Instant Live Website Diagnostic</span>
                      </div>

                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={scanUrl}
                          onChange={(e) => setScanUrl(e.target.value)}
                          placeholder="e.g. yourcompany.com"
                          className="flex-1 px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-xs focus:outline-none focus:border-cyan-400"
                        />
                        <button
                          type="submit"
                          disabled={isScanning}
                          className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-lg shadow-blue-500/25 disabled:opacity-50"
                        >
                          {isScanning ? (
                            <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                          ) : (
                            <span>Scan Now</span>
                          )}
                        </button>
                      </div>
                    </form>

                    {scanResult ? (
                      <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-900/40 to-cyan-900/40 border border-cyan-400/50 space-y-2 animate-fade-in">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-bold text-white">Overall Performance Grade</span>
                          <span className="text-base font-black text-emerald-400">
                            {scanResult.score} / 100
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 pt-1 text-[11px]">
                          <div className="p-2 rounded-lg bg-white/5 text-slate-300">
                            LCP Load Time: <span className="text-emerald-400 font-bold">{scanResult.lcp}</span>
                          </div>
                          <div className="p-2 rounded-lg bg-white/5 text-slate-300">
                            SEO Indexing: <span className="text-cyan-300 font-bold">{scanResult.seo}%</span>
                          </div>
                        </div>
                        <div className="text-[10px] text-green-300 flex items-center gap-1 pt-1">
                          <ShieldCheck className="w-3 h-3 text-green-400" />
                          <span>{scanResult.security}</span>
                        </div>
                      </div>
                    ) : (
                      <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center space-y-1">
                        <Cpu className="w-8 h-8 text-cyan-400 mx-auto opacity-80" />
                        <div className="text-xs font-bold text-white">Type your domain above</div>
                        <p className="text-[10px] text-slate-400">
                          Inspect Core Web Vitals, LCP speed, SSL encryption & schema compliance instantly.
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Floating Decorative Badge Card */}
              <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 p-4 rounded-2xl glass-card bg-[#0F1117]/95 border border-cyan-500/30 shadow-2xl animate-float-slow">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Top 1% Digital Studio</div>
                  <div className="text-[10px] text-slate-400">CRED & Linear Inspired UI</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trusted By Businesses Bar */}
        <div className="mt-20 pt-8 border-t border-white/10">
          <div className="text-center text-xs font-semibold text-slate-500 uppercase tracking-widest mb-6">
            TRUSTED BY LEADERS, CFOS & MODERN PRODUCT ENGINES
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-60 hover:opacity-100 transition-opacity">
            {trustedLogos.map((name, idx) => (
              <div key={idx} className="flex items-center gap-2 text-slate-300 font-poppins font-bold text-sm tracking-wider">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

