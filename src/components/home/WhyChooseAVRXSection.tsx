import React, { useState } from 'react';
import { 
  Cpu, 
  Layers, 
  Users2, 
  ShieldCheck, 
  Rocket, 
  Sparkles, 
  ArrowRight,
  Handshake,
  CheckCircle2,
  TrendingUp,
  Award,
  Zap,
  Globe2,
  Clock,
  ChevronRight,
  Shield,
  Star
} from 'lucide-react';
import { launchSoundEngine } from '../../utils/launchSoundEngine';

interface WhyChooseAVRXProps {
  onNavigate?: (page: string, slug?: string) => void;
}

export const WhyChooseAVRXSection: React.FC<WhyChooseAVRXProps> = ({ onNavigate }) => {
  const [activeFeature, setActiveFeature] = useState<number>(0);
  const [activeCategory, setActiveCategory] = useState<'all' | 'digital' | 'finance' | 'ai'>('all');

  const stats = [
    { label: 'Enterprises & Startups Powered', val: '500+', sub: 'Across Chhattisgarh & India', color: 'from-cyan-400 to-blue-500' },
    { label: 'Capital & Loans Facilitated', val: '₹50 Cr+', sub: 'MSME, PMEGP & Business', color: 'from-amber-400 to-orange-500' },
    { label: 'IRDAI & CA Filings On-Time', val: '100%', sub: 'Zero Penalty Guarantee', color: 'from-emerald-400 to-teal-500' },
    { label: 'Client Satisfaction Score', val: '4.95 / 5', sub: 'Based on 420+ Verified Reviews', color: 'from-fuchsia-400 to-pink-500' }
  ];

  const features = [
    {
      id: 'innovation',
      category: 'digital',
      num: '01',
      title: 'Innovation & Modern Tech',
      tagline: 'High-Velocity Next.js & React Architecture',
      short: 'Pioneering intelligent digital platforms, ultra-fast web architectures, and automated workflows.',
      desc: 'We engineer high-conversion web apps, mobile solutions, and enterprise software using cutting-edge 2026 tech stacks (Next.js, Vite, Node, Python) with NVMe cloud speed, zero bloatware, and 99.9% uptime.',
      icon: Cpu,
      theme: {
        accent: 'cyan',
        border: 'border-cyan-500/50 hover:border-cyan-400',
        activeBorder: 'border-cyan-400 shadow-[0_0_35px_rgba(6,182,212,0.35)]',
        bg: 'from-cyan-950/40 via-slate-900/90 to-slate-950/90',
        badgeBg: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
        iconBg: 'bg-gradient-to-br from-cyan-500 to-blue-600 text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.5)]',
        glow: 'rgba(6,182,212,0.4)',
        gradientText: 'from-cyan-400 via-sky-300 to-blue-400'
      },
      points: ['Sub-Second Page Load Times', 'Custom WebGL & Modern UI/UX', 'SEO & AI-Search Optimized'],
      badge: 'Tech Edge'
    },
    {
      id: 'ecosystem',
      category: 'all',
      num: '02',
      title: 'One Integrated Ecosystem',
      tagline: 'Digital + Finance + Tax + Insurance + AI',
      short: 'Zero vendor chaos. Websites, loans, tax filings, and insurance united under one roof.',
      desc: 'Instead of coordinating with 5 separate disconnected agencies, AVRX seamlessly integrates your software development, MSME loan facilitation, CA tax filings, and risk protection in one unified powerhouse.',
      icon: Layers,
      theme: {
        accent: 'indigo',
        border: 'border-indigo-500/50 hover:border-indigo-400',
        activeBorder: 'border-indigo-400 shadow-[0_0_35px_rgba(99,102,241,0.35)]',
        bg: 'from-indigo-950/40 via-slate-900/90 to-slate-950/90',
        badgeBg: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30',
        iconBg: 'bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-[0_0_20px_rgba(99,102,241,0.5)]',
        glow: 'rgba(99,102,241,0.4)',
        gradientText: 'from-indigo-400 via-purple-300 to-pink-400'
      },
      points: ['Single Point of Contact', 'Sync Business Financials with Tech', 'Cross-Disciplinary Team'],
      badge: 'All-In-One Partner'
    },
    {
      id: 'client-focus',
      category: 'finance',
      num: '03',
      title: 'Dedicated Client Focus',
      tagline: 'Direct Senior CA & Tech Lead Access',
      short: 'Tailored solutions engineered strictly around your ROI, revenue, and business growth.',
      desc: 'We dive deep into your specific operational workflow. Every line of code, loan recommendation, government subsidy application (PMEGP/MUDRA), and tax strategy is tailored to maximize your profitability.',
      icon: Users2,
      theme: {
        accent: 'emerald',
        border: 'border-emerald-500/50 hover:border-emerald-400',
        activeBorder: 'border-emerald-400 shadow-[0_0_35px_rgba(16,185,129,0.35)]',
        bg: 'from-emerald-950/40 via-slate-900/90 to-slate-950/90',
        badgeBg: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
        iconBg: 'bg-gradient-to-br from-emerald-400 to-teal-600 text-slate-950 shadow-[0_0_20px_rgba(16,185,129,0.5)]',
        glow: 'rgba(16,185,129,0.4)',
        gradientText: 'from-emerald-400 via-teal-300 to-cyan-400'
      },
      points: ['Personal Relationship Manager', 'Custom Milestone Delivery', 'Transparent Weekly Reports'],
      badge: 'Dedicated Guidance'
    },
    {
      id: 'transparency',
      category: 'finance',
      num: '04',
      title: '100% Ethical & Transparent',
      tagline: 'Zero Hidden Costs • Clear Terms',
      short: 'No surprises, no hidden traps. Transparent quotes, clear milestones, and strict ethics.',
      desc: 'Transparent pricing for digital engineering and direct, ethical facilitation for banking loans and insurance. You receive upfront terms, complete CA paperwork visibility, and genuine advisory with no inflated promises.',
      icon: ShieldCheck,
      theme: {
        accent: 'amber',
        border: 'border-amber-500/50 hover:border-amber-400',
        activeBorder: 'border-amber-400 shadow-[0_0_35px_rgba(245,158,11,0.35)]',
        bg: 'from-amber-950/40 via-slate-900/90 to-slate-950/90',
        badgeBg: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
        iconBg: 'bg-gradient-to-br from-amber-400 to-orange-600 text-slate-950 shadow-[0_0_20px_rgba(245,158,11,0.5)]',
        glow: 'rgba(245,158,11,0.4)',
        gradientText: 'from-amber-300 via-orange-300 to-yellow-400'
      },
      points: ['Itemized Transparent Invoices', 'Direct Bank Tie-Ups', '100% Legal Compliance'],
      badge: 'Zero Hidden Fees'
    },
    {
      id: 'future-ready',
      category: 'digital',
      num: '05',
      title: 'Future-Ready Scalability',
      tagline: 'Cloud Infrastructure & Enterprise Security',
      short: 'Scalable cloud infrastructure, NVMe hosting, automated backups, and 2026-grade security.',
      desc: 'Built to scale from day one. Whether handling 1,000 or 1,000,000 visitors, our cloud systems scale dynamically. Bank-grade SSL encryption and automated daily backups ensure your critical assets are always safe.',
      icon: Rocket,
      theme: {
        accent: 'purple',
        border: 'border-purple-500/50 hover:border-purple-400',
        activeBorder: 'border-purple-400 shadow-[0_0_35px_rgba(168,85,247,0.35)]',
        bg: 'from-purple-950/40 via-slate-900/90 to-slate-950/90',
        badgeBg: 'bg-purple-500/10 text-purple-300 border-purple-500/30',
        iconBg: 'bg-gradient-to-br from-purple-400 to-violet-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.5)]',
        glow: 'rgba(168,85,247,0.4)',
        gradientText: 'from-purple-400 via-fuchsia-300 to-pink-400'
      },
      points: ['NVMe Ultra-Fast SSD Servers', 'Automated Daily Cloud Backups', 'Enterprise DDoS & WAF Guard'],
      badge: 'Enterprise Grade'
    },
    {
      id: 'hybrid-ai',
      category: 'ai',
      num: '06',
      title: 'Human Experts + AI Intelligence',
      tagline: '70+ Smart Tools Guided by Real Specialists',
      short: 'Instantaneous AI speed combined with seasoned human domain authority and accountability.',
      desc: 'We combine instantaneous AI calculation speed with seasoned human oversight. Our senior Chartered Accountants, financial advisors, and software architects supervise every tool, document, and policy recommendation.',
      icon: Sparkles,
      theme: {
        accent: 'rose',
        border: 'border-rose-500/50 hover:border-rose-400',
        activeBorder: 'border-rose-400 shadow-[0_0_35px_rgba(244,63,94,0.35)]',
        bg: 'from-rose-950/40 via-slate-900/90 to-slate-950/90',
        badgeBg: 'bg-rose-500/10 text-rose-300 border-rose-500/30',
        iconBg: 'bg-gradient-to-br from-rose-400 to-pink-600 text-white shadow-[0_0_20px_rgba(244,63,94,0.5)]',
        glow: 'rgba(244,63,94,0.4)',
        gradientText: 'from-rose-400 via-pink-300 to-orange-400'
      },
      points: ['Instant In-Browser Calculators', 'CA-Verified Accuracy', 'Continuous AI Evolution'],
      badge: 'Hybrid Intelligence'
    }
  ];

  const filteredFeatures = activeCategory === 'all' 
    ? features 
    : features.filter(f => f.category === activeCategory || f.category === 'all');

  const current = features[activeFeature] || features[0];
  const CurrentIcon = current.icon;

  const handleCardSelect = (index: number) => {
    setActiveFeature(index);
    launchSoundEngine.playClickTick();
  };

  return (
    <section className="relative py-28 bg-[#030712] text-white overflow-hidden select-none">
      
      {/* Dynamic Animated Ambient Multi-Color Glow Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top-Left Cyan Aura */}
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-cyan-500/15 rounded-full blur-[140px] animate-pulse" style={{ animationDuration: '7s' }} />
        {/* Top-Right Saffron & Amber Aura */}
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-[#FF9933]/15 rounded-full blur-[140px] animate-pulse" style={{ animationDuration: '9s' }} />
        {/* Center Emerald & Indigo Aura */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] bg-indigo-600/10 rounded-full blur-[180px]" />
        {/* Bottom Emerald Green Aura */}
        <div className="absolute -bottom-32 left-1/4 w-[600px] h-[600px] bg-[#138808]/15 rounded-full blur-[150px]" />
        {/* Bottom Right Rose Aura */}
        <div className="absolute -bottom-32 -right-32 w-[600px] h-[600px] bg-rose-500/10 rounded-full blur-[140px]" />
        
        {/* Subtle Futuristic Tech Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370f_1px,transparent_1px),linear-gradient(to_bottom,#1f29370f_1px,transparent_1px)] bg-[size:48px_48px] opacity-40" />
      </div>

      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10 space-y-16">
        
        {/* Section Header with Vivid Indian Tricolor Accent & High-Impact Badge */}
        <div className="text-center max-w-4xl mx-auto space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-slate-900/90 via-slate-800/90 to-slate-900/90 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-bold uppercase tracking-widest shadow-[0_0_25px_rgba(0,240,255,0.2)] backdrop-blur-xl">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <Sparkles className="w-3.5 h-3.5 text-cyan-300 animate-spin-slow" />
            <span>THE AVRX POWER ADVANTAGE</span>
            <span className="text-slate-600">|</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9933] via-white to-[#138808] font-bold">
              Chhattisgarh #1 Ecosystem
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            WHY BUSINESSES <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">CHOOSE AVRX</span>
          </h2>
          
          <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-normal max-w-3xl mx-auto">
            We don’t just write code or file papers — we build high-growth digital engines, secure critical business capital, ensure 100% tax compliance, and deploy cutting-edge AI for your enterprise.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
            {[
              { key: 'all', label: '🌟 All Advantages' },
              { key: 'digital', label: '💻 Digital & Web Engineering' },
              { key: 'finance', label: '💰 Loans, Finance & Tax' },
              { key: 'ai', label: '⚡ Next-Gen AI Suite' }
            ].map((cat) => (
              <button
                key={cat.key}
                onClick={() => {
                  setActiveCategory(cat.key as typeof activeCategory);
                  launchSoundEngine.playClickTick();
                }}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer border backdrop-blur-md ${
                  activeCategory === cat.key
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 border-cyan-300 shadow-[0_0_20px_rgba(0,240,255,0.4)] scale-105'
                    : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-white hover:bg-slate-800/80'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic 3-Column Bento Constellation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Feature Cards 01, 02, 03 */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-4">
            {features.slice(0, 3).map((feat, idx) => {
              const IconComp = feat.icon;
              const isSelected = activeFeature === idx;
              return (
                <div
                  key={feat.id}
                  onClick={() => handleCardSelect(idx)}
                  onMouseEnter={() => {
                    setActiveFeature(idx);
                    launchSoundEngine.playHoverChirp();
                  }}
                  className={`p-6 rounded-3xl border transition-all duration-300 cursor-pointer text-left group relative backdrop-blur-xl overflow-hidden ${
                    isSelected
                      ? `bg-gradient-to-br ${feat.theme.bg} ${feat.theme.activeBorder} scale-[1.02]`
                      : `bg-slate-900/50 ${feat.theme.border} hover:bg-slate-900/80 hover:scale-[1.01]`
                  }`}
                >
                  {/* Subtle inner top glow line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feat.theme.gradientText} opacity-80`} />

                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs font-mono font-black text-white bg-slate-950/80 px-2.5 py-1 rounded-lg border border-slate-700">
                        {feat.num}
                      </span>
                      <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${feat.theme.badgeBg}`}>
                        {feat.badge}
                      </span>
                    </div>

                    <div className={`p-3 rounded-2xl ${feat.theme.iconBg} transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className={`text-lg font-black transition-colors ${isSelected ? 'text-white' : 'text-slate-100 group-hover:text-cyan-300'}`}>
                    {feat.title}
                  </h3>
                  
                  <p className="text-xs font-semibold text-slate-300 mt-1">
                    {feat.tagline}
                  </p>

                  <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                    {feat.short}
                  </p>

                  {/* Highlights Bullet points if selected */}
                  {isSelected && (
                    <div className="mt-4 pt-3 border-t border-slate-800/80 space-y-1.5 animate-fadeIn">
                      {feat.points.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-center gap-2 text-[11px] text-slate-300 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Center Column: Vivid Holographic Command Center & Interactive Spotlight */}
          <div className="lg:col-span-4 relative flex flex-col justify-between p-8 rounded-3xl bg-gradient-to-b from-slate-900/95 via-[#080f24] to-slate-950/95 border-2 border-cyan-400/80 shadow-[0_0_70px_rgba(0,240,255,0.25)] backdrop-blur-2xl text-center space-y-6 overflow-hidden group">
            
            {/* Top Multi-Color Light Beam */}
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-80 h-80 bg-gradient-to-br from-cyan-400/25 via-blue-500/20 to-purple-600/25 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-80 h-80 bg-gradient-to-tr from-emerald-400/20 via-teal-500/20 to-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

            {/* Glowing Tech Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/80 border border-cyan-400/40 text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider mx-auto shadow-[0_0_15px_rgba(0,240,255,0.3)]">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>CORE ARCHITECTURE</span>
            </div>

            {/* Glowing Holographic 3D Orbit Display */}
            <div className="relative w-52 h-52 sm:w-60 sm:h-60 mx-auto flex items-center justify-center">
              {/* Outer Dashed Orbit 1 */}
              <div className="absolute inset-0 rounded-full border-2 border-cyan-400/40 border-dashed animate-spin-slow shadow-[0_0_30px_rgba(0,240,255,0.3)]" />
              {/* Middle Orbit 2 */}
              <div className="absolute inset-4 rounded-full border border-indigo-400/50 animate-reverse-spin" />
              {/* Inner Pulsing Orbit 3 */}
              <div className="absolute inset-8 rounded-full border border-emerald-400/40 animate-pulse" />
              
              {/* Central Dynamic Symbol with Color Sync */}
              <div className={`relative w-32 h-32 rounded-3xl bg-gradient-to-tr from-slate-950 via-slate-900 to-slate-950 border-2 border-cyan-300 flex flex-col items-center justify-center shadow-[0_0_50px_rgba(0,240,255,0.6)] backdrop-blur-md transition-all duration-500`}>
                <div className={`p-3 rounded-2xl ${current.theme.iconBg} mb-1.5 transition-all duration-300 transform group-hover:scale-110 shadow-lg`}>
                  <CurrentIcon className="w-7 h-7" />
                </div>
                <span className="text-xs font-black tracking-widest text-white drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]">
                  AVRX #{current.num}
                </span>
                <span className="text-[9px] font-mono font-extrabold text-cyan-300 uppercase tracking-wider">
                  {current.badge}
                </span>
              </div>
            </div>

            {/* Dynamic Active Feature Comprehensive Detail */}
            <div className="space-y-3 min-h-[140px] flex flex-col justify-center relative z-10 px-2">
              <div className="inline-flex items-center justify-center gap-2 text-xs font-mono text-cyan-300 font-extrabold uppercase tracking-wider bg-slate-950/80 px-3.5 py-1.5 rounded-full border border-cyan-500/40 mx-auto">
                <span className="text-emerald-400 font-black">FEATURE {current.num}</span>
                <span>•</span>
                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${current.theme.gradientText}`}>
                  {current.title}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-sm mx-auto font-normal">
                {current.desc}
              </p>
            </div>

            {/* High-Impact Multi-Gradient Call-To-Action Button */}
            {onNavigate && (
              <div className="w-full pt-2 relative z-10 space-y-2">
                <button
                  onClick={() => {
                    launchSoundEngine.playClickTick();
                    onNavigate('contact');
                  }}
                  className="relative group w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#FF9933] via-cyan-400 to-[#138808] hover:from-[#ffaa4d] hover:via-cyan-300 hover:to-[#1ebb0d] text-slate-950 font-black text-xs sm:text-sm uppercase tracking-widest flex items-center justify-center gap-2.5 transition-all duration-300 transform hover:scale-[1.03] shadow-[0_0_35px_rgba(0,240,255,0.6),0_0_40px_rgba(255,153,51,0.4)] hover:shadow-[0_0_60px_rgba(0,240,255,0.9)] cursor-pointer overflow-hidden"
                >
                  {/* Internal Light Glare Sweep Effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none" />
                  
                  <Handshake className="w-5 h-5 text-slate-950 shrink-0" />
                  <span>Start Your Project With AVRX</span>
                  <ArrowRight className="w-5 h-5 text-slate-950 group-hover:translate-x-1.5 transition-transform shrink-0" />
                </button>

                <div className="flex items-center justify-center gap-3 text-[11px] text-slate-400 font-medium">
                  <span className="flex items-center gap-1 text-emerald-400">
                    <Shield className="w-3.5 h-3.5" /> 100% Free Discovery
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-cyan-400">
                    <Clock className="w-3.5 h-3.5" /> 30-Min Fast Turnaround
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Feature Cards 04, 05, 06 */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-4">
            {features.slice(3, 6).map((feat, idx) => {
              const actualIdx = idx + 3;
              const IconComp = feat.icon;
              const isSelected = activeFeature === actualIdx;
              return (
                <div
                  key={feat.id}
                  onClick={() => handleCardSelect(actualIdx)}
                  onMouseEnter={() => {
                    setActiveFeature(actualIdx);
                    launchSoundEngine.playHoverChirp();
                  }}
                  className={`p-6 rounded-3xl border transition-all duration-300 cursor-pointer text-left group relative backdrop-blur-xl overflow-hidden ${
                    isSelected
                      ? `bg-gradient-to-br ${feat.theme.bg} ${feat.theme.activeBorder} scale-[1.02]`
                      : `bg-slate-900/50 ${feat.theme.border} hover:bg-slate-900/80 hover:scale-[1.01]`
                  }`}
                >
                  {/* Subtle inner top glow line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feat.theme.gradientText} opacity-80`} />

                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs font-mono font-black text-white bg-slate-950/80 px-2.5 py-1 rounded-lg border border-slate-700">
                        {feat.num}
                      </span>
                      <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${feat.theme.badgeBg}`}>
                        {feat.badge}
                      </span>
                    </div>

                    <div className={`p-3 rounded-2xl ${feat.theme.iconBg} transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className={`text-lg font-black transition-colors ${isSelected ? 'text-white' : 'text-slate-100 group-hover:text-cyan-300'}`}>
                    {feat.title}
                  </h3>
                  
                  <p className="text-xs font-semibold text-slate-300 mt-1">
                    {feat.tagline}
                  </p>

                  <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                    {feat.short}
                  </p>

                  {/* Highlights Bullet points if selected */}
                  {isSelected && (
                    <div className="mt-4 pt-3 border-t border-slate-800/80 space-y-1.5 animate-fadeIn">
                      {feat.points.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-center gap-2 text-[11px] text-slate-300 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom High-Impact Metrics & Trust Stats Bar */}
        <div className="pt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((st, sIdx) => (
              <div 
                key={sIdx}
                className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 backdrop-blur-xl group relative overflow-hidden text-center sm:text-left"
              >
                {/* Background ambient glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex items-center justify-between mb-2">
                  <span className={`text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r ${st.color} tracking-tight`}>
                    {st.val}
                  </span>
                  <div className="p-2 rounded-xl bg-slate-950 border border-slate-800 text-cyan-400 group-hover:scale-110 transition-transform">
                    {sIdx === 0 && <Globe2 className="w-4 h-4" />}
                    {sIdx === 1 && <TrendingUp className="w-4 h-4" />}
                    {sIdx === 2 && <Award className="w-4 h-4" />}
                    {sIdx === 3 && <Star className="w-4 h-4 text-amber-400 fill-amber-400" />}
                  </div>
                </div>

                <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {st.label}
                </h4>
                <p className="text-xs text-slate-400 mt-1 font-medium">
                  {st.sub}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
