import React from 'react';
import { 
  FileCheck, 
  Calculator, 
  FileText, 
  Award, 
  Building, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2 
} from 'lucide-react';

interface TaxDocumentationProps {
  onNavigate: (page: string, slug?: string) => void;
}

export const TaxDocumentationSection: React.FC<TaxDocumentationProps> = ({ onNavigate }) => {
  const taxServices = [
    {
      id: 'gst-registration',
      title: 'GST Registration',
      badge: 'Mandatory',
      turnaround: '24-48 Hours Processing',
      desc: 'Official 15-digit GSTIN allotment for proprietorships, partnerships, LLPs, and companies.',
      features: ['100% Digital Processing', 'ARN Generation in 24 Hrs', 'HSN/SAC Classification', 'Zero Rejection Guarantee'],
      icon: FileCheck,
      color: 'border-amber-500/30 hover:border-amber-500/80',
      tagColor: 'bg-amber-500/10 text-amber-300 border-amber-500/20'
    },
    {
      id: 'gst-filing',
      title: 'GST Return Filing (GSTR-1 / 3B / 9)',
      badge: 'Monthly / Quarterly',
      turnaround: 'On-Time Compliance',
      desc: 'Accurate monthly GST return filing with automated GSTR-2B reconciliation for maximum ITC claims.',
      features: ['Automated ITC Matching', 'GSTR-1 & 3B E-Filing', 'Avoid Late Fee Penalties', 'Dedicated Tax Manager'],
      icon: Calculator,
      color: 'border-amber-500/30 hover:border-amber-500/80',
      tagColor: 'bg-amber-500/10 text-amber-300 border-amber-500/20'
    },
    {
      id: 'itr-filing',
      title: 'Income Tax Return (ITR) Filing',
      badge: 'Salaried & Business',
      turnaround: 'Fast Refund Processing',
      desc: 'Expert CA review of Form 16, AIS/TIS, Capital Gains, and Crypto income under Old vs New Tax Regimes.',
      features: ['Max Tax Deductions', 'Form 26AS Reconciliation', 'TDS Refund Acceleration', 'Notice Rectification Support'],
      icon: FileText,
      color: 'border-amber-500/30 hover:border-amber-500/80',
      tagColor: 'bg-amber-500/10 text-amber-300 border-amber-500/20'
    },
    {
      id: 'itr-registration',
      title: 'ITR Registration & PAN Linking',
      badge: 'First-Time Filers',
      turnaround: 'Instant Verification',
      desc: 'Official Income Tax e-filing portal profile setup, e-verification linkage, and bank account validation.',
      features: ['E-Filing Portal Setup', 'PAN-Aadhaar Linkage', 'Pre-Validated Bank Account', 'Digital Signature (DSC) Sync'],
      icon: FileCheck,
      color: 'border-amber-500/30 hover:border-amber-500/80',
      tagColor: 'bg-amber-500/10 text-amber-300 border-amber-500/20'
    },
    {
      id: 'udyam-registration',
      title: 'Udyam Registration',
      badge: 'Govt Certified',
      turnaround: 'Same Day Certificate',
      desc: 'Government MSME Udyam registration certificate unlocking priority lending and electricity subsidies.',
      features: ['Instant Udyam Certificate', 'Priority Bank Loan Rates', 'Delayed Payment Protection', 'Lifetime Validity'],
      icon: Award,
      color: 'border-amber-500/30 hover:border-amber-500/80',
      tagColor: 'bg-amber-500/10 text-amber-300 border-amber-500/20'
    },
    {
      id: 'msme-registration',
      title: 'MSME Databank & Scheme Registration',
      badge: 'Subsidy Ready',
      turnaround: 'Government Schemes',
      desc: 'Official MSME databank mapping for government procurement tenders and capital subsidy schemes.',
      features: ['Govt Tender EMD Exemption', 'ISO Certification Subsidy', 'Concession on Patent/Trademark', 'Priority Sector Lending'],
      icon: ShieldCheck,
      color: 'border-amber-500/30 hover:border-amber-500/80',
      tagColor: 'bg-amber-500/10 text-amber-300 border-amber-500/20'
    },
    {
      id: 'company-registration',
      title: 'Company & LLP Registration',
      badge: 'Pvt Ltd / LLP / OPC',
      turnaround: '3-7 Working Days',
      desc: 'Complete incorporation package including SPICe+ filing, DIN, DSC, PAN, TAN, MOA, and AOA.',
      features: ['Name Approval (RUN)', 'Incorporation Certificate', 'PAN & TAN Issued Together', 'Bank Account Opening Assist'],
      icon: Building,
      color: 'border-amber-500/30 hover:border-amber-500/80',
      tagColor: 'bg-amber-500/10 text-amber-300 border-amber-500/20'
    },
    {
      id: 'business-compliance',
      title: 'Annual ROC Compliance & Audits',
      badge: 'Statutory Shield',
      turnaround: 'Annual Filings',
      desc: 'MCA annual filings (AOC-4, MGT-7), DIR-3 KYC, board resolutions, and statutory secretarial support.',
      features: ['Avoid Rs 100/day Penalties', 'Director DIR-3 KYC Renewal', 'Statutory Registers Maintained', 'Secretarial Audit Check'],
      icon: ShieldCheck,
      color: 'border-amber-500/30 hover:border-amber-500/80',
      tagColor: 'bg-amber-500/10 text-amber-300 border-amber-500/20'
    }
  ];

  return (
    <section id="tax-solutions" className="relative py-24 bg-[#030712] text-white border-t border-slate-800/80 overflow-hidden select-none">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800/80 pb-8">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CATEGORY 03</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              TAX & DOCUMENTATION
            </h2>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              Certified Chartered Accountant & legal compliance services. Error-free GST registrations, timely ITR filings, Udyam certificates, and company incorporations.
            </p>
          </div>

          <button
            onClick={() => onNavigate('tax-solutions')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-amber-400 hover:text-amber-300 font-bold text-xs uppercase tracking-wider transition group shrink-0"
          >
            <span>Explore All Tax Services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Cards Grid (3 Featured Services + 4th "See All Services" Card) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {taxServices.filter(s => ['gst-registration', 'itr-filing', 'company-registration'].includes(s.id)).map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="flex flex-col justify-between p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 via-[#070b14]/95 to-slate-900/90 border border-slate-800 hover:border-amber-500/50 shadow-xl hover:shadow-[0_0_30px_rgba(245,158,11,0.15)] transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="space-y-4">
                  
                  {/* Card Top */}
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-amber-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">
                      {item.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                    <div className="text-xs font-mono text-amber-400/90 font-semibold mt-0.5">
                      {item.turnaround}
                    </div>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed line-clamp-2">
                      {item.desc}
                    </p>
                  </div>

                  {/* Bullet features */}
                  <div className="space-y-1.5 pt-3 border-t border-slate-800/80">
                    {item.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Visit Now button */}
                <div className="pt-5 mt-5 border-t border-slate-800/80">
                  <button
                    onClick={() => onNavigate('service-detail', item.id)}
                    className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-950 hover:bg-amber-500 text-slate-200 hover:text-slate-950 font-bold text-xs transition duration-200 border border-slate-800 hover:border-amber-400 group/btn"
                  >
                    <span>Visit Now</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            );
          })}

          {/* 4th Card: See All Tax & Compliance Services */}
          <div className="flex flex-col justify-between p-6 rounded-2xl bg-gradient-to-br from-amber-950/30 via-slate-900/90 to-orange-950/30 border border-amber-500/50 shadow-[0_0_30px_rgba(245,158,11,0.1)] hover:shadow-[0_0_40px_rgba(245,158,11,0.25)] transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden">
            
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 group-hover:scale-110 transition-transform">
                  <Award className="w-5 h-5 text-amber-400" />
                </div>
                <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40">
                  12+ Services
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                  See All Tax &amp; Compliance
                </h3>
                <div className="text-xs font-mono text-amber-400/90 mt-0.5">
                  CA Certified &amp; Legal Shield
                </div>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Government registrations, Udyam MSME certificates, annual ROC returns, and statutory auditing.
                </p>
              </div>

              {/* Mini tags of more tax types */}
              <div className="pt-3 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                {['Udyam MSME Certificate', 'MSME Databank Subsidy', 'Annual ROC Filings', 'DIR-3 KYC Renewal', 'Trademark Filing'].map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-950/80 border border-slate-800 text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Explore Button */}
            <div className="pt-5 mt-5 border-t border-slate-800/80 relative z-10">
              <button
                onClick={() => onNavigate('tax-solutions')}
                className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-xs uppercase tracking-wider transition duration-200 shadow-lg group/btn"
              >
                <span>See All Tax Solutions</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
