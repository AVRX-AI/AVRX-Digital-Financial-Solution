import React, { useState } from 'react';
import { TAX_SERVICES } from '../data/servicesData';
import { ServiceItem } from '../types';
import { SEO } from '../components/common/SEO';
import { PartnersSlider } from '../components/common/PartnersSlider';
import { renderServiceIcon } from '../utils/iconMap';
import { 
  FileText, 
  Check, 
  ArrowRight, 
  ShieldCheck, 
  PhoneCall, 
  ChevronDown, 
  ChevronRight,
  Calculator,
  Calendar,
  Building2,
  CreditCard,
  Award,
  AlertCircle,
  Clock,
  Sparkles,
  Zap,
  ExternalLink
} from 'lucide-react';

interface TaxSolutionsPageProps {
  onNavigate: (page: string, slug?: string) => void;
}

export const TaxSolutionsPage: React.FC<TaxSolutionsPageProps> = ({ onNavigate }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(TAX_SERVICES[0]);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // Core 5 Tax & Documentation Pillars specified by Master Prompt
  const taxCategoryCards = [
    {
      id: 'gst-services',
      slug: 'gst-filing',
      title: 'GST Registration & Return Filing',
      badge: 'Monthly & Annual',
      icon: Calculator,
      shortDesc: 'End-to-end GST solutions including new GSTIN registration, monthly GSTR-1/3B filing, and automated ITC reconciliation.',
      features: [
        'New GST Registration & ARN Generation',
        'Monthly GSTR-1 & GSTR-3B Return Filing',
        'Automated GSTR-2B Input Tax Credit (ITC) Matching',
        'Annual GSTR-9 Filing & Tax Audit Coordination',
        'E-Way Bill & E-Invoicing Assistance',
        'GST Notice Clarification & Reply Drafting'
      ],
      price: 'Starting from ₹1,499/mo'
    },
    {
      id: 'itr-filing',
      slug: 'itr-filing',
      title: 'Income Tax Return (ITR) Filing',
      badge: 'CA Verified',
      icon: FileText,
      shortDesc: 'Accurate, CA-reviewed ITR filing for salaried professionals, freelancers, businesses, capital gains, and NRIs.',
      features: [
        'Filing under Old vs New Tax Regime Optimization',
        'Salaried Employees (Form 16 & AIS/TIS Scrutiny)',
        'Business & Professional Presumptive Tax (44AD/44ADA)',
        'Capital Gains (Stock Market, Mutual Funds, Real Estate)',
        'Foreign Income & NRI Tax Compliance',
        'Fast-Track Tax Refund Processing Support'
      ],
      price: 'Starting from ₹999'
    },
    {
      id: 'udyam-registration',
      slug: 'udyam-registration',
      title: 'Udyam / MSME Registration',
      badge: 'Govt Benefits',
      icon: Award,
      shortDesc: 'Official MSME Udyam registration to unlock priority bank lending, government tender access, and collateral exemptions.',
      features: [
        'Instant Digital Udyam Certificate Issuance',
        'Priority Sector Bank Lending Concessions',
        'Lower Interest Rates on Business Loans',
        'Protection Against Delayed Payments (MSME Samadhaan)',
        'Subsidy on Patent & Trademark Registrations',
        '50% Concession on Govt Tender Fees'
      ],
      price: 'Starting from ₹499'
    },
    {
      id: 'company-registration',
      slug: 'company-registration',
      title: 'Company & Business Registration',
      badge: 'Startup Incorporation',
      icon: Building2,
      shortDesc: 'Incorporate Private Limited, LLP, One Person Company (OPC), or Partnership with Ministry of Corporate Affairs (MCA).',
      features: [
        'Private Limited / LLP / OPC Incorporation',
        'Name Approval (RUN) & SPICe+ E-Filing',
        'Digital Signature Certificates (DSC) for 2 Directors',
        'Director Identification Number (DIN) Allocation',
        'MoA, AoA & Certificate of Incorporation (COI)',
        'Company PAN, TAN & Bank Resolution Kit'
      ],
      price: 'Starting from ₹6,999'
    },
    {
      id: 'pan-services',
      slug: 'pan-services',
      title: 'PAN Card & Direct Tax Documentation',
      badge: 'Fast Track',
      icon: CreditCard,
      shortDesc: 'New PAN applications, demographic corrections, Aadhaar-PAN linking, and fast e-PAN delivery.',
      features: [
        'New PAN Card Allotment (Form 49A / 49AA)',
        'Correction of Name, DOB, Father Name, Address',
        'Instant e-PAN Allotment within 24 to 48 Hours',
        'Mandatory Aadhaar-PAN Linking Compliance',
        'Company / Firm / Trust PAN Issuance',
        'Doorstep PVC Card Delivery Across India'
      ],
      price: 'Starting from ₹299'
    }
  ];

  // Statutory Tax & Compliance Deadlines Calendar
  const complianceCalendar = [
    {
      period: 'Every 11th of Month',
      title: 'GSTR-1 Monthly Return',
      desc: 'Outward supplies & sales invoice data filing for regular taxpayers with turnover > ₹5 Cr or monthly filers.'
    },
    {
      period: 'Every 20th of Month',
      title: 'GSTR-3B Summary Return',
      desc: 'Monthly summary return of outward & inward supplies with payment of self-assessed net GST liability.'
    },
    {
      period: '15th Jun / Sep / Dec / Mar',
      title: 'Advance Tax Installments',
      desc: 'Quarterly payment of advance income tax liability for businesses and professionals if tax exceeds ₹10,000.'
    },
    {
      period: '31st July Annually',
      title: 'Individual & Non-Audit ITR',
      desc: 'Mandatory annual Income Tax Return filing deadline for salaried individuals, freelancers, and HUFs.'
    },
    {
      period: '31st October Annually',
      title: 'Corporate & Tax Audit ITR',
      desc: 'Income tax return filing and CA tax audit report submission for businesses liable to statutory tax audit.'
    },
    {
      period: '31st December Annually',
      title: 'Annual GST Return (GSTR-9)',
      desc: 'Consolidated annual return filing for registered taxpayers reflecting all transactions of the financial year.'
    }
  ];

  const taxDocumentChecklist = [
    {
      title: 'GST Registration Checklist',
      items: [
        'PAN Card & Aadhaar Card of Applicant/Directors',
        'Passport Size Photographs',
        'Business Address Proof (Electricity Bill / Property Tax Receipt)',
        'Rent Agreement & Landlord NOC (if rented property)',
        'Cancelled Cheque / Bank Statement with IFSC & Account Number'
      ]
    },
    {
      title: 'ITR Filing Checklist',
      items: [
        'PAN Card & Aadhaar Card',
        'Form 16 (for salaried employees) or Form 16A (TDS)',
        'Annual Information Statement (AIS) & Form 26AS',
        'Bank Account Statements for all active accounts',
        'Capital Gain Statements from Broker (Zerodha/Groww/Upstox)',
        'Tax Saving Investment Proofs (80C, 80D, NPS, Home Loan Interest)'
      ]
    },
    {
      title: 'Company Incorporation Checklist',
      items: [
        'PAN & Aadhaar of all Directors & Shareholders',
        'Identity Proof (Voter ID / Passport / Driving License)',
        'Recent Bank Statement / Electricity Bill of Directors (< 2 months old)',
        'Proposed Registered Office Address Proof & Utility Bill',
        'NOC from Property Owner for Registered Office'
      ]
    }
  ];

  const taxFaqs = [
    {
      q: 'When is GST registration mandatory in India?',
      a: 'GST registration is mandatory if your annual turnover exceeds ₹40 Lakhs for goods (₹20 Lakhs for special category states) or ₹20 Lakhs for service providers. It is also mandatory for anyone selling goods through e-commerce platforms like Amazon/Flipkart regardless of turnover.'
    },
    {
      q: 'Should I choose the New Tax Regime or the Old Tax Regime for ITR filing?',
      a: 'Our Chartered Accountants calculate your tax liability under BOTH regimes. If you have significant deductions (80C, 80D, HRA, home loan interest), the Old Regime might save more. For individuals with lower deductions, the New Regime offers lower baseline tax slabs.'
    },
    {
      q: 'What happens if I miss the ITR filing deadline of July 31st?',
      a: 'Belated ITR can be filed up to December 31st with a late filing fee of up to ₹5,000 under Section 234F plus interest on unpaid tax under Section 234A. You also forfeit the ability to carry forward certain capital losses.'
    },
    {
      q: 'What is the validity of the Udyam MSME Registration Certificate?',
      a: 'Udyam Registration has lifetime validity. There is no requirement for annual renewal, although businesses must update their turnover and investment details annually based on filed ITR and GST records.'
    },
    {
      q: 'How long does company incorporation take with AVRX?',
      a: 'Company incorporation (Private Limited or LLP) typically takes 5 to 7 working days once all director KYC documents, digital signatures (DSC), and name approval forms are submitted on the MCA SPICe+ portal.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#050811] text-white pt-24 pb-20 selection:bg-amber-500 selection:text-slate-950">
      <SEO
        title="Tax & Documentation Solutions | GST, ITR, Udyam & Company Registration | AVRX"
        description="Simplify tax and documentation. CA-backed GST registration, monthly return filing, individual & business ITR, Udyam MSME certificate, and company incorporation."
      />

      {/* Main Container - Stretched Widescreen Layout */}
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="pt-4 pb-6 flex items-center gap-2 text-xs text-slate-400">
          <button 
            onClick={() => onNavigate('home')}
            className="hover:text-amber-400 transition-colors"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-amber-300 font-semibold">Tax & Documentation</span>
        </nav>

        {/* 1. Page Hero Section */}
        <div className="text-center max-w-4xl mx-auto my-8 space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(245,158,11,0.15)]">
            <FileText className="w-3.5 h-3.5 text-amber-400" />
            <span>TAXATION & CORPORATE COMPLIANCE CONCIERGE</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight">
            Simplify Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-300">Tax & Documentation.</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-lg leading-relaxed max-w-3xl mx-auto">
            Chartered Accountant backed GST compliance, error-free ITR filing, official Udyam MSME certification, and end-to-end company incorporation for entrepreneurs, professionals, and growing enterprises.
          </p>
        </div>

        {/* 2. Statutory Legal Notice */}
        <div className="my-8">
          <div className="rounded-2xl bg-amber-500/10 border border-amber-500/30 p-4 sm:p-5 flex items-start gap-3.5">
            <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="text-xs text-amber-200/90 leading-relaxed">
              <strong className="text-amber-300 font-semibold">Statutory & Regulatory Advisory: </strong>
              AVRX operates as a professional tech-enabled facilitation platform collaborating with registered Chartered Accountants and corporate legal professionals. All filings, tax calculations, and registration certificates are governed by applicable Indian tax laws (Income Tax Act, CGST/SGST Acts, and MCA Regulations).
            </div>
          </div>
        </div>

        {/* 3. Partners Slider */}
        <div className="my-10">
          <PartnersSlider 
            title="Institutional & Compliance Ecosystem"
            badgeText="VERIFIED NETWORK"
            description="Facilitating secure, encrypted document filing and compliance with official statutory portals."
            variant="compact"
          />
        </div>

        {/* 4. Core Tax & Documentation Offerings Grid */}
        <div className="my-16 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>KEY TAX & LEGAL SERVICES</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white">
              Complete Corporate & Personal Compliance
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Select any compliance service below to view process timelines, deliverables, and transparent pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {taxCategoryCards.map(item => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="rounded-3xl bg-slate-900/80 border border-slate-800/90 hover:border-amber-500/50 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_15px_40px_rgba(245,158,11,0.12)] group relative overflow-hidden"
                >
                  <div className="space-y-5">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 text-amber-400 group-hover:border-amber-500/40 group-hover:text-amber-300 transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30 text-[11px] font-mono font-bold">
                        {item.badge}
                      </span>
                    </div>

                    {/* Title & Desc */}
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-amber-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                        {item.shortDesc}
                      </p>
                    </div>

                    {/* Features List */}
                    <div className="space-y-2 pt-3 border-t border-slate-800/80">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                        Included Deliverables:
                      </div>
                      {item.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price & Action */}
                  <div className="pt-6 mt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div>
                      <div className="text-[10px] uppercase font-mono text-slate-500">Transparent Fee</div>
                      <div className="text-sm font-black text-amber-400 font-mono">{item.price}</div>
                    </div>

                    <button
                      onClick={() => onNavigate('service-detail', item.slug)}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-amber-500/10 hover:bg-amber-500 border border-amber-500/30 hover:border-amber-400 text-amber-300 hover:text-slate-950 font-bold text-xs transition flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <span>Get Started</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* 5. Statutory Tax Deadline & Compliance Calendar */}
        <div className="my-20 bg-gradient-to-br from-[#120a04] via-[#08070d] to-[#02050f] border border-amber-500/30 rounded-3xl p-6 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] relative overflow-hidden">
          
          <div className="flex items-center gap-3 pb-6 border-b border-slate-800/90">
            <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-white">Statutory Tax & Compliance Calendar (2026)</h3>
              <p className="text-xs text-slate-400">Stay ahead of government tax deadlines to avoid late fees, interest, and compliance notices.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
            {complianceCalendar.map((item, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-2 hover:border-amber-500/40 transition"
              >
                <div className="inline-block px-2.5 py-0.5 rounded-md bg-amber-500/15 border border-amber-500/30 text-amber-300 font-mono font-bold text-[11px]">
                  {item.period}
                </div>
                <h4 className="text-sm font-bold text-white">{item.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-400">
              Need automated reminders for your business GST and advance tax dates?
            </div>
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs transition"
            >
              Sign Up for Free Compliance Alerts
            </button>
          </div>

        </div>

        {/* 6. Document Checklist ("What You'll Need") */}
        <div className="my-20 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase">
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>FILING PREPARATION</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white">
              What You'll Need: Document Checklist
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {taxDocumentChecklist.map((group, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-4 hover:border-amber-500/40 transition-colors"
              >
                <div className="flex items-center gap-2.5 pb-3 border-b border-slate-800">
                  <div className="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-400 font-mono font-bold flex items-center justify-center text-xs">
                    0{idx + 1}
                  </div>
                  <h4 className="font-bold text-white text-sm sm:text-base">{group.title}</h4>
                </div>

                <div className="space-y-2.5">
                  {group.items.map((doc, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{doc}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 7. Why Choose AVRX Tax & Legal Advisory */}
        <div className="my-20 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>THE AVRX COMPLIANCE ADVANTAGE</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white">
              Why Trust AVRX for Tax & Documentation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-2">
              <div className="text-amber-400 font-mono font-bold text-xs">01 / CA SCRUTINY</div>
              <h4 className="font-bold text-white text-sm">100% Chartered Accountant Review</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Every return is audited by experienced CAs before government portal submission.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-2">
              <div className="text-amber-400 font-mono font-bold text-xs">02 / ITC OPTIMIZATION</div>
              <h4 className="font-bold text-white text-sm">Maximum Tax Savings</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Automated 2B matching guarantees zero eligible Input Tax Credit is left unclaimed.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-2">
              <div className="text-amber-400 font-mono font-bold text-xs">03 / ZERO PENALTY SYSTEM</div>
              <h4 className="font-bold text-white text-sm">Proactive Deadline Tracking</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Automated WhatsApp & email triggers ensure you never incur statutory late fees.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-2">
              <div className="text-amber-400 font-mono font-bold text-xs">04 / NOTICE RESOLUTION</div>
              <h4 className="font-bold text-white text-sm">End-to-End Legal Support</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Expert draft replies and representation assistance for Income Tax and GST notices.</p>
            </div>
          </div>
        </div>

        {/* 8. Tax FAQs Section */}
        <div className="my-20 max-w-4xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-bold uppercase">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Tax & Legal Documentation Questions
            </h2>
          </div>

          <div className="space-y-3">
            {taxFaqs.map((faq, idx) => (
              <div 
                key={idx}
                className="border border-slate-800 rounded-2xl overflow-hidden bg-slate-900/80"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left font-bold text-xs sm:text-sm text-slate-200 flex items-center justify-between gap-3 hover:text-amber-300 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-amber-400 shrink-0 transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {activeFaq === idx && (
                  <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-slate-300 border-t border-slate-800/80 pt-3 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 9. High-Conversion CTA */}
        <div className="my-16 rounded-3xl bg-gradient-to-r from-amber-950 via-slate-900 to-orange-950 border border-amber-500/40 p-8 sm:p-14 text-center space-y-6 relative overflow-hidden shadow-[0_20px_60px_rgba(245,158,11,0.15)]">
          <div className="max-w-2xl mx-auto space-y-3 relative z-10">
            <h3 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Ready to Streamline Your Tax & Documentation?
            </h3>
            <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
              Connect with an AVRX tax advisor for a personalized compliance consultation.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 relative z-10">
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-400 text-slate-950 font-black text-sm shadow-[0_0_30px_rgba(245,158,11,0.4)] hover:scale-105 transition flex items-center gap-2"
            >
              <span>File Returns with AVRX</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('ai-tools')}
              className="px-6 py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-white font-bold text-xs transition flex items-center gap-2"
            >
              <span>Use AI Tax Regime Calculator</span>
              <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
