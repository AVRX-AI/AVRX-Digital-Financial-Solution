import React from 'react';
import { MagneticCard } from '../common/MagneticCard';
import { 
  FileCheck, 
  Calculator, 
  FileText, 
  Award, 
  Building, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2,
  Scale,
  Clock,
  Shield,
  Zap,
  HelpCircle,
  FileSpreadsheet
} from 'lucide-react';
import { launchSoundEngine } from '../../utils/launchSoundEngine';
import taxComplianceBg from '../../assets/images/tax_compliance_bg_1788541318879.jpg';

interface TaxDocumentationProps {
  onNavigate: (page: string, slug?: string) => void;
}

export const TaxDocumentationSection: React.FC<TaxDocumentationProps> = ({ onNavigate }) => {
  const taxServices = [
    {
      id: 'gst-registration',
      title: 'GST Registration',
      badge: 'Mandatory for Biz',
      badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-400/40',
      turnaround: '24-48 Hours Digital Issuance',
      desc: 'Official 15-digit GSTIN allotment for proprietorships, partnerships, LLPs, and companies with guaranteed zero rejection support.',
      imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
      features: ['100% Digital Online Filing', 'ARN Generation in 24 Hrs', 'HSN/SAC Classification', 'CA Verification Check'],
      icon: FileCheck,
      themeColor: 'from-amber-500 to-yellow-600',
      borderColor: 'border-amber-500/40 hover:border-amber-400 hover:shadow-[0_0_35px_rgba(245,158,11,0.3)]',
      cardBg: 'from-amber-950/30 via-slate-900/90 to-slate-950'
    },
    {
      id: 'gst-filing',
      title: 'GST Return Filing (GSTR-1 / 3B / 9)',
      badge: 'Zero Penalty',
      badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/40',
      turnaround: 'Monthly & Quarterly Cycles',
      desc: 'Accurate monthly GST return filing with automated GSTR-2B input tax credit (ITC) reconciliation to maximize cash savings.',
      imageUrl: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=800&q=80',
      features: ['Automated 2B vs Purchase Matching', 'GSTR-1 & 3B Direct E-Filing', 'Avoid ₹50/day Late Penalty', 'Dedicated CA Compliance Officer'],
      icon: Calculator,
      themeColor: 'from-emerald-500 to-teal-600',
      borderColor: 'border-emerald-500/40 hover:border-emerald-400 hover:shadow-[0_0_35px_rgba(16,185,129,0.3)]',
      cardBg: 'from-emerald-950/30 via-slate-900/90 to-slate-950'
    },
    {
      id: 'itr-filing',
      title: 'Income Tax Return (ITR) Filing',
      badge: 'Fast Refunds',
      badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-400/40',
      turnaround: 'Max Deductions Claimed',
      desc: 'Expert CA review of Form 16, AIS/TIS, Capital Gains, and Crypto income under Old vs New Tax Regimes for maximum refund.',
      imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80',
      features: ['Max Tax Deductions (80C, 80D)', 'Form 26AS & AIS Reconciliation', 'TDS Refund Acceleration', 'Notice Rectification Guidance'],
      icon: FileText,
      themeColor: 'from-cyan-500 to-blue-600',
      borderColor: 'border-cyan-500/40 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(6,182,212,0.3)]',
      cardBg: 'from-cyan-950/30 via-slate-900/90 to-slate-950'
    },
    {
      id: 'udyam-registration',
      title: 'Udyam Registration (MSME)',
      badge: 'Govt Subsidy Shield',
      badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-400/40',
      turnaround: 'Same Day Certificate',
      desc: 'Official Government MSME Udyam registration unlocking collateral-free bank loans, lower electricity tariffs, and tender exemptions.',
      imageUrl: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80',
      features: ['Instant Udyam Certificate', 'Priority Bank Loan Rates', 'Delayed Payment Legal Protection', 'Lifetime Validity'],
      icon: Award,
      themeColor: 'from-indigo-500 to-purple-600',
      borderColor: 'border-indigo-500/40 hover:border-indigo-400 hover:shadow-[0_0_35px_rgba(99,102,241,0.3)]',
      cardBg: 'from-indigo-950/30 via-slate-900/90 to-slate-950'
    },
    {
      id: 'company-registration',
      title: 'Company & LLP Registration',
      badge: 'Pvt Ltd / OPC / LLP',
      badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-400/40',
      turnaround: '3-7 Working Days',
      desc: 'Complete incorporation package including SPICe+ MCA filing, DIN, DSC, PAN, TAN, MOA, AOA, and bank account setup.',
      imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      features: ['Name Approval (RUN)', 'Incorporation Certificate (COI)', 'PAN & TAN Issued Together', 'Corporate Bank Account Assist'],
      icon: Building,
      themeColor: 'from-purple-500 to-pink-600',
      borderColor: 'border-purple-500/40 hover:border-purple-400 hover:shadow-[0_0_35px_rgba(168,85,247,0.3)]',
      cardBg: 'from-purple-950/30 via-slate-900/90 to-slate-950'
    },
    {
      id: 'business-compliance',
      title: 'Annual ROC Compliance & Audits',
      badge: 'Statutory Protection',
      badgeColor: 'bg-rose-500/20 text-rose-300 border-rose-400/40',
      turnaround: 'MCA Certified Filings',
      desc: 'Annual filings (AOC-4, MGT-7), Director DIR-3 KYC, board resolutions, and statutory secretarial book-keeping support.',
      imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
      features: ['Avoid ₹100/Day Delay Penalties', 'Director DIR-3 KYC Renewal', 'Statutory Registers Maintained', 'Secretarial Audit Verification'],
      icon: ShieldCheck,
      themeColor: 'from-rose-500 to-orange-500',
      borderColor: 'border-rose-500/40 hover:border-rose-400 hover:shadow-[0_0_35px_rgba(244,63,94,0.3)]',
      cardBg: 'from-rose-950/30 via-slate-900/90 to-slate-950'
    }
  ];

  return (
    <section id="tax-solutions" className="relative py-28 bg-[#030712] text-white border-t border-slate-800/80 overflow-hidden select-none">
      
      {/* Futuristic Tax & Legal Vault Background Image & Matrix Overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <img 
          src={taxComplianceBg} 
          alt="Futuristic Tax Compliance Matrix" 
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-center opacity-20 scale-105 filter brightness-95 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-[#030712]/92 to-[#030712]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_30%,rgba(245,158,11,0.12),transparent_70%)]" />
        <div className="absolute inset-0 bg-cyber-grid opacity-25" />
      </div>

      {/* Background glowing auras */}
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-amber-500/12 rounded-full blur-[160px] pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-emerald-500/12 rounded-full blur-[160px] pointer-events-none" />

      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-slate-800/80 pb-10">
          <div className="space-y-4 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/40 text-amber-300 text-xs font-mono font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(245,158,11,0.2)]">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin-slow" />
              <span>CATEGORY 03</span>
              <span className="text-slate-600">•</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-400 font-black">
                LEGAL COMPLIANCE &amp; CA CERTIFICATION
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              TAX &amp; DOCUMENTATION <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-400">SERVICES</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-xl leading-relaxed font-normal max-w-3xl">
              Certified Chartered Accountant and corporate legal services. Error-free GST registrations, timely ITR filings, Udyam certificates, and private limited incorporations.
            </p>
          </div>

          <button
            onClick={() => {
              launchSoundEngine.playClickTick();
              onNavigate('tax-solutions');
            }}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-[0_0_25px_rgba(245,158,11,0.4)] hover:scale-105 active:scale-95 cursor-pointer group shrink-0"
          >
            <span>Explore All Tax Services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {taxServices.map((item) => {
            const Icon = item.icon;
            const itemImage = item.imageUrl;
            return (
              <MagneticCard
                key={item.id}
                glowColor="amber"
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
                    <div className="relative h-44 w-full rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 group-hover:border-amber-500/40 transition-colors">
                      <img
                        src={itemImage}
                        alt={item.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                      
                      {/* Floating Badge & Icon */}
                      <div className="absolute top-3 left-3 p-2 rounded-xl bg-slate-950/90 backdrop-blur-md border border-slate-700/80 text-amber-400">
                        <Icon className="w-4 h-4" />
                      </div>

                      <span className={`absolute top-3 right-3 text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border backdrop-blur-md ${item.badgeColor}`}>
                        {item.badge}
                      </span>
                    </div>
                  )}

                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                    <div className="text-xs font-mono text-amber-400 mt-1 font-semibold">
                      {item.turnaround}
                    </div>
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed line-clamp-2 font-normal">
                      {item.desc}
                    </p>
                  </div>

                  {/* Bullet features */}
                  <div className="space-y-1.5 pt-3 border-t border-slate-800/80">
                    {item.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
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
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-slate-950 hover:bg-gradient-to-r hover:from-amber-500 hover:to-orange-600 text-slate-200 hover:text-slate-950 font-bold text-xs uppercase tracking-wider transition-all duration-300 border border-slate-800 hover:border-amber-400 shadow-md group/btn cursor-pointer"
                  >
                    <span>File Consultation &amp; Apply</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1.5 transition-transform" />
                  </button>
                </div>

              </MagneticCard>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-amber-950/40 via-slate-900/90 to-orange-950/40 border-2 border-amber-500/40 shadow-[0_0_40px_rgba(245,158,11,0.15)] flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-2xl">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-amber-300 uppercase tracking-wider">
              <Shield className="w-4 h-4 text-amber-400 animate-pulse" />
              <span>100% Tax Notice Protection</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Received a Tax Notice or Have Pending GST Rectifications?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm max-w-2xl font-normal">
              Our seasoned tax advocates and CAs draft legal replies for Section 143(1), 148, and GST demand notices with 100% accuracy.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => {
                launchSoundEngine.playClickTick();
                onNavigate('contact');
              }}
              className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:scale-105 transition-all cursor-pointer flex items-center gap-2"
            >
              <span>Consult Tax Advocate</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
