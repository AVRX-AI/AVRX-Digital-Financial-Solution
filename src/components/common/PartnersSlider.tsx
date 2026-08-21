import React from 'react';
import { 
  Building2, 
  ShieldCheck, 
  TrendingUp, 
  Sparkles, 
  Star, 
  CheckCircle2,
  Award,
  Layers
} from 'lucide-react';

export interface PartnerItem {
  name: string;
  category: 'Banking & NBFC' | 'Insurance Partner' | 'Cloud & Tech Stack' | 'Govt Scheme & Legal' | 'Corporate Client';
  subtitle: string;
  badge: string;
  iconBg: string;
  avatarText: string;
}

interface PartnersSliderProps {
  title?: string;
  badgeText?: string;
  description?: string;
  variant?: 'compact' | 'full' | 'subtle';
  className?: string;
}

export const PARTNERS_DATA: PartnerItem[] = [
  {
    name: 'State Bank of India',
    category: 'Banking & NBFC',
    subtitle: 'Institutional Banking Partner',
    badge: 'RBI Regulated',
    iconBg: 'from-blue-600/20 to-cyan-500/20 text-blue-400 border-blue-500/30',
    avatarText: 'SBI'
  },
  {
    name: 'HDFC Bank',
    category: 'Banking & NBFC',
    subtitle: 'Premier Lending Partner',
    badge: 'Capital & Mortgage',
    iconBg: 'from-indigo-600/20 to-blue-500/20 text-indigo-400 border-indigo-500/30',
    avatarText: 'HDFC'
  },
  {
    name: 'ICICI Bank',
    category: 'Banking & NBFC',
    subtitle: 'Corporate Working Capital',
    badge: 'Fast-Track SLA',
    iconBg: 'from-amber-600/20 to-orange-500/20 text-amber-400 border-amber-500/30',
    avatarText: 'ICICI'
  },
  {
    name: 'Bajaj Finserv',
    category: 'Banking & NBFC',
    subtitle: 'Business & Consumer Credit',
    badge: 'NBFC Partner',
    iconBg: 'from-cyan-600/20 to-teal-500/20 text-cyan-400 border-cyan-500/30',
    avatarText: 'BAJAJ'
  },
  {
    name: 'Tata AIG Insurance',
    category: 'Insurance Partner',
    subtitle: 'General & Motor Insurance',
    badge: 'IRDAI Approved',
    iconBg: 'from-blue-500/20 to-indigo-600/20 text-blue-300 border-blue-500/30',
    avatarText: 'TATA'
  },
  {
    name: 'HDFC ERGO',
    category: 'Insurance Partner',
    subtitle: 'Health & Asset Safeguard',
    badge: 'Cashless Network',
    iconBg: 'from-rose-500/20 to-pink-600/20 text-rose-400 border-rose-500/30',
    avatarText: 'ERGO'
  },
  {
    name: 'Star Health & Allied',
    category: 'Insurance Partner',
    subtitle: 'Family & Corporate Medical',
    badge: '14,000+ Hospitals',
    iconBg: 'from-emerald-500/20 to-teal-600/20 text-emerald-400 border-emerald-500/30',
    avatarText: 'STAR'
  },
  {
    name: 'Amazon Web Services (AWS)',
    category: 'Cloud & Tech Stack',
    subtitle: 'Cloud Architecture & Compute',
    badge: '99.99% Uptime',
    iconBg: 'from-amber-500/20 to-yellow-600/20 text-amber-400 border-amber-500/30',
    avatarText: 'AWS'
  },
  {
    name: 'Google Cloud Platform',
    category: 'Cloud & Tech Stack',
    subtitle: 'AI & Data Infrastructure',
    badge: 'Enterprise Stack',
    iconBg: 'from-blue-500/20 to-red-500/20 text-blue-400 border-blue-500/30',
    avatarText: 'GCP'
  },
  {
    name: 'PMEGP & MUDRA Portal',
    category: 'Govt Scheme & Legal',
    subtitle: 'MSME Subsidy Facilitation',
    badge: 'Govt. Schemes',
    iconBg: 'from-orange-500/20 to-emerald-500/20 text-orange-400 border-orange-500/30',
    avatarText: 'MSME'
  },
  {
    name: 'GSTN & MCA Portal',
    category: 'Govt Scheme & Legal',
    subtitle: 'Tax & Corporate Registry',
    badge: 'Statutory E-Filing',
    iconBg: 'from-teal-500/20 to-cyan-500/20 text-teal-400 border-teal-500/30',
    avatarText: 'MCA'
  },
  {
    name: 'Razorpay & Cashfree',
    category: 'Cloud & Tech Stack',
    subtitle: 'Payment Gateway Integration',
    badge: 'PCI-DSS Level 1',
    iconBg: 'from-blue-600/20 to-purple-600/20 text-blue-400 border-blue-500/30',
    avatarText: 'PAY'
  }
];

export const PartnersSlider: React.FC<PartnersSliderProps> = ({
  title = 'Powering Success Through Strong Partnerships',
  badgeText = 'TRUSTED ECOSYSTEM',
  description = 'Collaborating with leading Indian banks, NBFCs, IRDAI insurers, and enterprise cloud providers.',
  variant = 'full',
  className = ''
}) => {
  // Tripled list for infinite marquee scrolling
  const infiniteList = [...PARTNERS_DATA, ...PARTNERS_DATA, ...PARTNERS_DATA];

  return (
    <section className={`relative w-full py-14 sm:py-18 bg-[#030612]/90 border-y border-slate-800/80 overflow-hidden select-none ${className}`}>
      
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/[0.03] rounded-full blur-3xl pointer-events-none" />

      {/* Header Container */}
      {variant !== 'subtle' && (
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 text-center mb-10 space-y-3 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-black uppercase tracking-widest shadow-[0_0_15px_rgba(0,240,255,0.15)]">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>{badgeText}</span>
          </div>

          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            {title}
          </h3>

          {description && (
            <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
        </div>
      )}

      {/* Infinite Horizontal Marquee Carousel with Edge Fade Masks */}
      <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_6%,_black_94%,transparent_100%)]">
        
        <div className="flex w-max items-center gap-5 sm:gap-6 animate-marquee py-3 hover:[animation-play-state:paused] cursor-grab active:cursor-grabbing">
          {infiniteList.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex-shrink-0 w-[270px] sm:w-[310px] p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-slate-800/90 hover:border-cyan-500/50 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_10px_30px_rgba(0,240,255,0.15)] group"
            >
              <div className="flex items-center gap-3.5">
                
                {/* Logo / Monogram Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${partner.iconBg} border flex items-center justify-center font-mono font-black text-sm tracking-wider shrink-0 transition-transform group-hover:scale-105 shadow-inner`}>
                  {partner.avatarText}
                </div>

                {/* Text Content */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-1 mb-0.5">
                    <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors truncate">
                      {partner.name}
                    </h4>
                  </div>
                  
                  <p className="text-[11px] text-slate-400 truncate mb-1">
                    {partner.subtitle}
                  </p>

                  <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-950/90 border border-slate-800 text-[10px] font-mono text-cyan-400">
                    <CheckCircle2 className="w-2.5 h-2.5 text-cyan-400 shrink-0" />
                    <span className="truncate">{partner.badge}</span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
};
