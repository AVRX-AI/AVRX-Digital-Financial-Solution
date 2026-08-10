import React, { useState, useEffect, useRef } from 'react';
import { 
  DIGITAL_SERVICES, 
  FINANCIAL_SERVICES, 
  TAX_SERVICES, 
  INSURANCE_SERVICES, 
  HOSTING_PRODUCTS, 
  AI_TOOLS 
} from '../../data/servicesData';
import { 
  Code, 
  DollarSign, 
  FileText, 
  Shield, 
  Server, 
  Bot, 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';

interface ServicesSliderProps {
  onNavigate: (page: string) => void;
}

export interface SliderItem {
  id: string;
  title: string;
  category: string;
  categoryLabel: string;
  shortDesc: string;
  badge?: string;
  priceStarting?: string;
  features: string[];
  targetPage: string;
  colorClass: string;
  bgGlow: string;
}

export const ServicesSlider: React.FC<ServicesSliderProps> = ({ onNavigate }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  // Normalize all services into unified slider items
  const allServices: SliderItem[] = [
    ...DIGITAL_SERVICES.map(s => ({
      id: s.id,
      title: s.title,
      category: 'digital',
      categoryLabel: 'Digital Engineering',
      shortDesc: s.shortDesc,
      badge: s.badge || 'Digital',
      priceStarting: s.priceStarting || '₹14,999',
      features: s.features.slice(0, 3),
      targetPage: 'digital-solutions',
      colorClass: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10',
      bgGlow: 'from-cyan-500/20 to-blue-600/10'
    })),
    ...FINANCIAL_SERVICES.map(s => ({
      id: s.id,
      title: s.title,
      category: 'financial',
      categoryLabel: 'Financial & Capital',
      shortDesc: s.shortDesc,
      badge: s.badge || 'Fast Approval',
      priceStarting: s.priceStarting || 'Attractive ROI',
      features: s.features.slice(0, 3),
      targetPage: 'financial-solutions',
      colorClass: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
      bgGlow: 'from-emerald-500/20 to-teal-600/10'
    })),
    ...TAX_SERVICES.map(s => ({
      id: s.id,
      title: s.title,
      category: 'tax',
      categoryLabel: 'Tax & Legal Compliance',
      shortDesc: s.shortDesc,
      badge: s.badge || 'Government Compliant',
      priceStarting: s.priceStarting || '₹1,499',
      features: s.features.slice(0, 3),
      targetPage: 'tax-solutions',
      colorClass: 'text-amber-400 border-amber-500/30 bg-amber-500/10',
      bgGlow: 'from-amber-500/20 to-orange-600/10'
    })),
    ...INSURANCE_SERVICES.map(s => ({
      id: s.id,
      title: s.title,
      category: 'insurance',
      categoryLabel: 'Insurance & Protection',
      shortDesc: s.shortDesc,
      badge: s.badge || '100% Claim Support',
      priceStarting: s.priceStarting || 'Instant Quote',
      features: s.features.slice(0, 3),
      targetPage: 'insurance-solutions',
      colorClass: 'text-purple-400 border-purple-500/30 bg-purple-500/10',
      bgGlow: 'from-purple-500/20 to-indigo-600/10'
    })),
    ...HOSTING_PRODUCTS.map(s => ({
      id: s.id,
      title: s.title,
      category: 'hosting',
      categoryLabel: 'Cloud Hosting & Domain',
      shortDesc: s.shortDesc,
      badge: s.badge || '99.9% Uptime',
      priceStarting: s.priceStarting || '₹299/mo',
      features: s.features.slice(0, 3),
      targetPage: 'hosting-products',
      colorClass: 'text-blue-400 border-blue-500/30 bg-blue-500/10',
      bgGlow: 'from-blue-500/20 to-cyan-600/10'
    })),
    ...AI_TOOLS.map(s => ({
      id: s.id,
      title: s.name,
      category: 'ai-tool',
      categoryLabel: '2026 AI Utility',
      shortDesc: s.description,
      badge: s.badge || 'Free Interactive Tool',
      priceStarting: 'Instant Processing',
      features: [s.inputLabel, 'AI Instant Analysis', 'Export Roadmap & Report'],
      targetPage: 'ai-tools',
      colorClass: 'text-rose-400 border-rose-500/30 bg-rose-500/10',
      bgGlow: 'from-rose-500/20 to-purple-600/10'
    }))
  ];

  const filteredItems = allServices.filter(item => 
    selectedFilter === 'all' || item.category === selectedFilter
  );

  // Reset current index when filter changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedFilter]);

  // Auto-slide effect
  useEffect(() => {
    if (!isPlaying || filteredItems.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % filteredItems.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isPlaying, filteredItems.length]);

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % filteredItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex(prev => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    setTouchStart(null);
  };

  const currentItem = filteredItems[currentIndex] || filteredItems[0];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'digital': return <Code className="w-4 h-4 text-cyan-400" />;
      case 'financial': return <DollarSign className="w-4 h-4 text-emerald-400" />;
      case 'tax': return <FileText className="w-4 h-4 text-amber-400" />;
      case 'insurance': return <Shield className="w-4 h-4 text-purple-400" />;
      case 'hosting': return <Server className="w-4 h-4 text-blue-400" />;
      default: return <Bot className="w-4 h-4 text-rose-400" />;
    }
  };

  return (
    <div 
      className="relative rounded-3xl bg-slate-900/90 border border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col justify-between min-h-[480px]"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      {/* Background Dynamic Glow */}
      <div className={`absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br ${currentItem.bgGlow} rounded-full blur-[90px] pointer-events-none transition-all duration-700`} />

      {/* Top Header & Category Filter Tabs */}
      <div className="p-4 sm:p-5 border-b border-slate-800/80 bg-slate-950/60 flex flex-col space-y-3 z-10">
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-xs font-mono font-bold tracking-wider text-cyan-300 uppercase">
              AVRX Service Directory ({filteredItems.length} Available)
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
            <span>{currentIndex + 1} / {filteredItems.length}</span>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {[
            { id: 'all', label: 'All Services' },
            { id: 'digital', label: 'Digital' },
            { id: 'financial', label: 'Loans' },
            { id: 'tax', label: 'Tax' },
            { id: 'insurance', label: 'Insurance' },
            { id: 'hosting', label: 'Hosting' },
            { id: 'ai-tool', label: 'AI Tools' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id)}
              className={`px-2.5 py-1 rounded-full text-[11px] font-semibold transition whitespace-nowrap border ${
                selectedFilter === tab.id
                  ? 'bg-cyan-500 text-slate-950 border-cyan-400 font-bold shadow-[0_0_12px_rgba(0,240,255,0.3)]'
                  : 'bg-slate-900 text-slate-400 border-slate-800 hover:bg-slate-800 hover:text-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

      </div>

      {/* Main Slide Card Area */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6 z-10 relative">
        
        {/* Category & Badge */}
        <div className="space-y-3">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-semibold ${currentItem.colorClass}`}>
              {getCategoryIcon(currentItem.category)}
              <span>{currentItem.categoryLabel}</span>
            </div>

            {currentItem.badge && (
              <span className="px-2.5 py-0.5 rounded-md bg-slate-800 border border-slate-700 text-[10px] font-bold text-slate-300 uppercase tracking-wider">
                {currentItem.badge}
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug">
            {currentItem.title}
          </h3>

          {/* Price Starting Tag */}
          {currentItem.priceStarting && (
            <div className="text-xs font-mono text-cyan-400 font-bold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Starting: {currentItem.priceStarting}</span>
            </div>
          )}

          {/* Short Description */}
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-3">
            {currentItem.shortDesc}
          </p>
        </div>

        {/* Feature Bullet Highlights */}
        {currentItem.features && currentItem.features.length > 0 && (
          <div className="space-y-2 pt-2 border-t border-slate-800/80">
            <span className="text-[10px] font-mono uppercase font-bold text-slate-400 tracking-wider">
              Core Highlights:
            </span>
            <div className="space-y-1.5">
              {currentItem.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="line-clamp-1">{feat}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Button & Navigation Bar */}
        <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-4">
          
          {/* Action CTA Button */}
          <button
            onClick={() => onNavigate(currentItem.targetPage)}
            className="flex-1 py-3 px-4 bg-gradient-to-r from-cyan-400 to-blue-500 hover:brightness-110 text-slate-950 font-bold text-xs sm:text-sm rounded-xl transition flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,240,255,0.25)]"
          >
            <span>Explore {currentItem.title}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Slider Controls: Prev, Pause/Play, Next */}
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={handlePrev}
              title="Previous Service"
              className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-400 text-slate-300 hover:text-white transition"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              title={isPlaying ? 'Pause auto-slide' : 'Play auto-slide'}
              className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-400 text-slate-300 hover:text-white transition"
            >
              {isPlaying ? <Pause className="w-4 h-4 text-cyan-400" /> : <Play className="w-4 h-4 text-emerald-400 fill-current" />}
            </button>

            <button
              onClick={handleNext}
              title="Next Service"
              className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-400 text-slate-300 hover:text-white transition"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>

      {/* Bottom Footer Label replacing original 3D canvas label */}
      <div className="p-3 bg-slate-950/90 border-t border-slate-800/80 text-center text-[11px] sm:text-xs text-slate-400 flex items-center justify-center gap-2 font-mono">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        <span>AVRX Ecosystem Slider • Auto-playing 50+ Digital, Financial, Tax & AI Services</span>
      </div>

    </div>
  );
};
