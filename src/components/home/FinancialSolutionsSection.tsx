import React, { useState } from 'react';
import { MagneticCard } from '../common/MagneticCard';
import { 
  CircleDollarSign, 
  Shield, 
  Briefcase, 
  Car, 
  Home, 
  CreditCard, 
  Bike, 
  Landmark, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  HeartPulse, 
  Plane, 
  Store, 
  Truck, 
  Tractor, 
  HardHat, 
  ShieldCheck,
  TrendingUp,
  Percent,
  Clock,
  Zap,
  Building2,
  FileCheck
} from 'lucide-react';
import { launchSoundEngine } from '../../utils/launchSoundEngine';
import financialSolutionsBg from '../../assets/images/financial_solutions_bg_1788541303193.jpg';

interface FinancialSolutionsProps {
  onNavigate: (page: string, slug?: string) => void;
}

export const FinancialSolutionsSection: React.FC<FinancialSolutionsProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'loans' | 'insurance'>('loans');

  // Comprehensive Loan Solutions with distinctive rich colors
  const loanServices = [
    {
      id: 'personal-loan',
      title: 'Personal Loan',
      badge: 'Instant Disbursal',
      badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-400/40',
      rate: 'Interest from 10.5% p.a.*',
      desc: 'Instant collateral-free funds up to ₹25 Lakhs for medical emergencies, weddings, education, or personal liquidity.',
      imageUrl: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
      features: ['Up to ₹25 Lakhs Limit', 'Flexible Tenure 12-60 Months', '100% Digital KYC Approval', 'Minimal Physical Paperwork'],
      icon: CircleDollarSign,
      themeColor: 'from-cyan-500 to-blue-600',
      borderColor: 'border-cyan-500/40 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(6,182,212,0.3)]',
      cardBg: 'from-cyan-950/30 via-slate-900/90 to-slate-950'
    },
    {
      id: 'business-loan',
      title: 'Business & Working Capital Loan',
      badge: 'Growth Capital',
      badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/40',
      rate: 'Interest from 11.5% p.a.*',
      desc: 'Unsecured working capital, machinery financing, inventory credit, and expansion funding for enterprises and MSMEs.',
      imageUrl: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=1200&q=80',
      features: ['Up to ₹1 Crore Sanction', 'Collateral-Free Options', 'Express 48-Hour Approval', 'Overdraft (OD/CC) Facility'],
      icon: Briefcase,
      themeColor: 'from-emerald-500 to-teal-600',
      borderColor: 'border-emerald-500/40 hover:border-emerald-400 hover:shadow-[0_0_35px_rgba(16,185,129,0.3)]',
      cardBg: 'from-emerald-950/30 via-slate-900/90 to-slate-950'
    },
    {
      id: 'govt-subsidy-loan',
      title: 'PMEGP & Govt Subsidy Schemes',
      badge: '35% Govt Subsidy',
      badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-400/40',
      rate: 'Govt PMEGP & MUDRA',
      desc: 'Prime Minister Employment Generation Programme financing with up to 35% capital subsidy and CA-certified project reports.',
      imageUrl: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80',
      features: ['Up to 35% Margin Money Subsidy', 'Loans Up to ₹50 Lakhs', 'CGTMSE Collateral Security Waiver', 'End-to-End DPR Filing Support'],
      icon: Landmark,
      themeColor: 'from-amber-500 to-orange-600',
      borderColor: 'border-amber-500/40 hover:border-amber-400 hover:shadow-[0_0_35px_rgba(245,158,11,0.3)]',
      cardBg: 'from-amber-950/30 via-slate-900/90 to-slate-950'
    },
    {
      id: 'car-loan',
      title: 'Car Loan (New & Used)',
      badge: 'Low Downpayment',
      badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-400/40',
      rate: 'Interest from 8.75% p.a.*',
      desc: 'High on-road financing for new vehicles and competitive funding for certified pre-owned cars with fast spot approvals.',
      imageUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
      features: ['Up to 100% On-Road Funding', 'Tenure up to 7 Years', 'Used Car Valuation Support', 'Zero Foreclosure Penalty Options'],
      icon: Car,
      themeColor: 'from-blue-500 to-indigo-600',
      borderColor: 'border-blue-500/40 hover:border-blue-400 hover:shadow-[0_0_35px_rgba(59,130,246,0.3)]',
      cardBg: 'from-blue-950/30 via-slate-900/90 to-slate-950'
    },
    {
      id: 'home-loan',
      title: 'Home Loan & Construction',
      badge: 'Lowest Rates',
      badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-400/40',
      rate: 'Interest from 8.35% p.a.*',
      desc: 'Affordable home purchase, renovation, and plot construction loans with long repayment tenures up to 30 years.',
      imageUrl: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80',
      features: ['Up to 90% Property Valuation', 'Tenures up to 30 Years', 'Tax Exemption under 80C & 24(b)', 'Fast Balance Transfer with Top-Up'],
      icon: Home,
      themeColor: 'from-purple-500 to-violet-600',
      borderColor: 'border-purple-500/40 hover:border-purple-400 hover:shadow-[0_0_35px_rgba(168,85,247,0.3)]',
      cardBg: 'from-purple-950/30 via-slate-900/90 to-slate-950'
    },
    {
      id: 'property-loan',
      title: 'Loan Against Property (LAP)',
      badge: 'High Value',
      badgeColor: 'bg-rose-500/20 text-rose-300 border-rose-400/40',
      rate: 'Interest from 9.25% p.a.*',
      desc: 'Unlock deep liquidity against residential, commercial, or industrial properties while retaining complete property ownership.',
      imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
      features: ['Up to ₹5 Crores Funding', 'Tenures up to 15 Years', 'Lower Interest Rate vs Personal Loans', 'Flexible Overdraft Repayment'],
      icon: Landmark,
      themeColor: 'from-rose-500 to-pink-600',
      borderColor: 'border-rose-500/40 hover:border-rose-400 hover:shadow-[0_0_35px_rgba(244,63,94,0.3)]',
      cardBg: 'from-rose-950/30 via-slate-900/90 to-slate-950'
    }
  ];

  // Comprehensive Insurance Solutions with distinctive rich colors
  const insuranceServices = [
    {
      id: 'motor-insurance',
      title: 'Motor Vehicle Insurance (All Types)',
      badge: 'Instant Policy',
      badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-400/40',
      categoryType: 'Comprehensive & Third Party',
      desc: 'Instant vehicle policy issuance with cashless repair network across 5,000+ garages nationwide and zero-depreciation covers.',
      imageUrl: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80',
      features: ['Bumper-to-Bumper Zero Dep Cover', '5,000+ Cashless Network Garages', 'Instant NCB Transfer Discount', '24x7 Emergency Roadside Assist'],
      icon: Shield,
      themeColor: 'from-cyan-500 to-blue-600',
      borderColor: 'border-cyan-500/40 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(6,182,212,0.3)]',
      cardBg: 'from-cyan-950/30 via-slate-900/90 to-slate-950'
    },
    {
      id: 'health-insurance',
      title: 'Health & Family Floater Insurance',
      badge: '10,000+ Hospitals',
      badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/40',
      categoryType: 'Cashless Medical Coverage',
      desc: 'Cashless hospitalization, ICU coverage, critical illness riders, and daycare treatment protection for your entire family.',
      imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
      features: ['Zero Room Rent Capping', 'Pre & Post Hospitalization 180 Days', 'Section 80D Tax Benefit', 'Instant Claim Settlement Support'],
      icon: HeartPulse,
      themeColor: 'from-emerald-500 to-teal-600',
      borderColor: 'border-emerald-500/40 hover:border-emerald-400 hover:shadow-[0_0_35px_rgba(16,185,129,0.3)]',
      cardBg: 'from-emerald-950/30 via-slate-900/90 to-slate-950'
    },
    {
      id: 'construction-equipment-insurance',
      title: 'Excavator, JCB & Heavy Plant Policy',
      badge: 'Heavy Machinery',
      badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-400/40',
      categoryType: 'Contractor Plant & Machinery',
      desc: 'Specialized Contractor Plant & Machinery (CPM) insurance covering excavators, cranes, loaders, JCBs, and road rollers.',
      imageUrl: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80',
      features: ['On-Site Accidental Damage Coverage', 'Burglary, Riot & Vandalism Shield', 'Operator & Third-Party Liability', 'High Sum Insured Protection'],
      icon: HardHat,
      themeColor: 'from-amber-500 to-orange-600',
      borderColor: 'border-amber-500/40 hover:border-amber-400 hover:shadow-[0_0_35px_rgba(245,158,11,0.3)]',
      cardBg: 'from-amber-950/30 via-slate-900/90 to-slate-950'
    },
    {
      id: 'commercial-vehicle-insurance',
      title: 'Goods & Commercial Vehicle Fleet',
      badge: 'Fleet Discount',
      badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-400/40',
      categoryType: 'Trucks / Pickups / Tankers',
      desc: 'Heavy and light goods carriage commercial vehicle policies fully compliant with national transport regulations.',
      imageUrl: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80',
      features: ['Goods in Transit Damage Shield', 'Driver & Helper Personal Accident Cover', 'Third-Party Legal Liability Protection', 'Special Multi-Vehicle Fleet Rates'],
      icon: Truck,
      themeColor: 'from-indigo-500 to-purple-600',
      borderColor: 'border-indigo-500/40 hover:border-indigo-400 hover:shadow-[0_0_35px_rgba(99,102,241,0.3)]',
      cardBg: 'from-indigo-950/30 via-slate-900/90 to-slate-950'
    },
    {
      id: 'life-insurance',
      title: 'Life & Term Insurance Plans',
      badge: '₹1 Cr+ Cover',
      badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-400/40',
      categoryType: 'Family Financial Security',
      desc: 'Pure risk term insurance and guaranteed return plans securing your family’s financial future with zero stage claim assistance.',
      imageUrl: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=800&q=80',
      features: ['High Sum Assured up to ₹5 Crores', 'Critical Illness & Disability Riders', '100% Online Instant Policy PDF', 'Section 80C Tax Exemption'],
      icon: ShieldCheck,
      themeColor: 'from-purple-500 to-violet-600',
      borderColor: 'border-purple-500/40 hover:border-purple-400 hover:shadow-[0_0_35px_rgba(168,85,247,0.3)]',
      cardBg: 'from-purple-950/30 via-slate-900/90 to-slate-950'
    },
    {
      id: 'shop-insurance',
      title: 'Shopkeeper & Inventory Insurance',
      badge: 'All-Risk Shield',
      badgeColor: 'bg-rose-500/20 text-rose-300 border-rose-400/40',
      categoryType: 'Retail & Warehouse',
      desc: 'All-risk commercial shopkeeper insurance protecting stock inventory, cash in till, electronic equipment, and building structure.',
      imageUrl: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=800&q=80',
      features: ['Fire, Flood & Earthquake Shield', 'Theft & Shoplifting Compensation', 'Cash in Safe & Transit Coverage', 'Plate Glass & Signboard Cover'],
      icon: Store,
      themeColor: 'from-rose-500 to-pink-600',
      borderColor: 'border-rose-500/40 hover:border-rose-400 hover:shadow-[0_0_35px_rgba(244,63,94,0.3)]',
      cardBg: 'from-rose-950/30 via-slate-900/90 to-slate-950'
    }
  ];

  return (
    <section id="financial-solutions" className="relative py-28 bg-[#040814] text-white border-t border-slate-800/80 overflow-hidden select-none">
      
      {/* Futuristic Fintech Section Background Image & Cyber Matrix Overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <img 
          src={financialSolutionsBg} 
          alt="Futuristic Fintech Analytics Matrix" 
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-center opacity-20 scale-105 filter brightness-95 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#040814] via-[#040814]/92 to-[#040814]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_30%,rgba(16,185,129,0.12),transparent_70%)]" />
        <div className="absolute inset-0 bg-cyber-grid opacity-25" />
      </div>

      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-emerald-500/15 rounded-full blur-[160px] pointer-events-none animate-pulse" style={{ animationDuration: '9s' }} />
      <div className="absolute bottom-10 left-10 w-[600px] h-[600px] bg-teal-500/12 rounded-full blur-[160px] pointer-events-none" />

      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-slate-800/80 pb-10">
          <div className="space-y-4 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(16,185,129,0.2)]">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-spin-slow" />
              <span>CATEGORY 02</span>
              <span className="text-slate-600">•</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 font-black">
                FINANCIAL ADVISORY &amp; RISK PROTECTION
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              FINANCIAL SOLUTIONS &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">CREDIT LINES</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-xl leading-relaxed font-normal max-w-3xl">
              Empowering personal ambitions and business scale with competitive loans, government subsidy schemes (PMEGP / MUDRA), and IRDAI-certified insurance coverage.
            </p>
          </div>

          {/* High-Impact Tab Selector */}
          <div className="flex items-center p-1.5 bg-slate-950 border-2 border-slate-800 rounded-2xl shrink-0 shadow-2xl backdrop-blur-xl">
            <button
              onClick={() => {
                setActiveTab('loans');
                launchSoundEngine.playClickTick();
              }}
              onMouseEnter={() => launchSoundEngine.playHoverChirp()}
              className={`flex items-center gap-2.5 px-6 sm:px-8 py-3 rounded-xl font-black text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeTab === 'loans'
                  ? 'bg-gradient-to-r from-emerald-400 to-teal-500 text-slate-950 shadow-[0_0_25px_rgba(16,185,129,0.4)] scale-105'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900/60'
              }`}
            >
              <CircleDollarSign className="w-4 h-4" />
              <span>Loans &amp; Schemes ({loanServices.length})</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('insurance');
                launchSoundEngine.playClickTick();
              }}
              onMouseEnter={() => launchSoundEngine.playHoverChirp()}
              className={`flex items-center gap-2.5 px-6 sm:px-8 py-3 rounded-xl font-black text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeTab === 'insurance'
                  ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-[0_0_25px_rgba(0,240,255,0.4)] scale-105'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900/60'
              }`}
            >
              <Shield className="w-4 h-4" />
              <span>Insurance ({insuranceServices.length})</span>
            </button>
          </div>
        </div>

        {/* Dynamic Cards Grid with Rich Color Themes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {(activeTab === 'loans' ? loanServices : insuranceServices).map((item) => {
            const Icon = item.icon;
            const itemImage = 'imageUrl' in item ? (item as any).imageUrl : undefined;
            const glow = activeTab === 'loans' ? 'emerald' : 'purple';
            return (
              <MagneticCard
                key={item.id}
                glowColor={glow}
                enableTilt={true}
                tiltStrength={3.5}
                spotlightRadius={420}
                spotlightOpacity={0.25}
                soundOnHover={true}
                className={`flex flex-col justify-between p-6 rounded-3xl bg-gradient-to-b ${item.cardBg} border ${item.borderColor} shadow-xl backdrop-blur-xl`}
              >
                {/* Top Subtle Light Accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.themeColor} opacity-80`} />

                <div className="space-y-4">
                  {/* Thumbnail Image Header */}
                  {itemImage && (
                    <div className="relative h-44 w-full rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 group-hover:border-emerald-500/40 transition-colors">
                      <img
                        src={itemImage}
                        alt={item.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                      
                      {/* Floating Badge & Icon */}
                      <div className="absolute top-3 left-3 p-2 rounded-xl bg-slate-950/90 backdrop-blur-md border border-slate-700/80 text-white">
                        <Icon className="w-4 h-4 text-emerald-400" />
                      </div>

                      <span className={`absolute top-3 right-3 text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border backdrop-blur-md ${item.badgeColor}`}>
                        {item.badge}
                      </span>
                    </div>
                  )}

                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                    <div className="text-xs font-mono text-emerald-400 mt-1 font-semibold">
                      {'rate' in item ? item.rate : ('categoryType' in item ? item.categoryType : '')}
                    </div>
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed line-clamp-2 font-normal">
                      {item.desc}
                    </p>
                  </div>

                  {/* Bullet features */}
                  <div className="space-y-1.5 pt-3 border-t border-slate-800/80">
                    {item.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visit Now button */}
                <div className="pt-5 mt-5 border-t border-slate-800/80">
                  <button
                    onClick={() => {
                      launchSoundEngine.playClickTick();
                      onNavigate('service-detail', item.id);
                    }}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-slate-950 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-600 text-slate-200 hover:text-slate-950 font-bold text-xs uppercase tracking-wider transition-all duration-300 border border-slate-800 hover:border-emerald-400 shadow-md group/btn cursor-pointer"
                  >
                    <span>Check Eligibility &amp; Apply</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1.5 transition-transform" />
                  </button>
                </div>

              </MagneticCard>
            );
          })}
        </div>

        {/* Comprehensive Financial Bottom CTA Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-emerald-950/40 via-slate-900/90 to-cyan-950/40 border-2 border-emerald-500/40 shadow-[0_0_40px_rgba(16,185,129,0.15)] flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-2xl">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-emerald-300 uppercase tracking-wider">
              <Zap className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span>Direct Bank &amp; NBFC Tie-ups</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Need Assistance with Business Project Reports or DPRs?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm max-w-2xl font-normal">
              Our in-house senior Chartered Accountants prepare certified bank-ready Detailed Project Reports (DPR) for PMEGP, MUDRA, Stand-Up India, and term loan sanctions.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => {
                launchSoundEngine.playClickTick();
                onNavigate(activeTab === 'loans' ? 'financial-solutions' : 'insurance-solutions');
              }}
              className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-300 hover:to-teal-400 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:scale-105 transition-all cursor-pointer flex items-center gap-2"
            >
              <span>{activeTab === 'loans' ? 'Explore All Loans' : 'Explore All Insurance'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
