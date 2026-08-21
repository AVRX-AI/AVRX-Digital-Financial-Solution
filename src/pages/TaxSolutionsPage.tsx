import React, { useState } from 'react';
import { TAX_SERVICES } from '../data/servicesData';
import { ServiceItem } from '../types';
import { SEO } from '../components/common/SEO';
import { PartnersSlider } from '../components/common/PartnersSlider';
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
  ExternalLink,
  Percent,
  CheckCircle2,
  HelpCircle,
  Scale,
  BadgePercent,
  Layers,
  FileCheck
} from 'lucide-react';
import { launchSoundEngine } from '../utils/launchSoundEngine';

interface TaxSolutionsPageProps {
  onNavigate: (page: string, slug?: string) => void;
}

export const TaxSolutionsPage: React.FC<TaxSolutionsPageProps> = ({ onNavigate }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<'regime' | 'gstcalc' | 'calendar'>('regime');

  // Interactive Tax Regime Calculator State
  const [annualIncome, setAnnualIncome] = useState<number>(1200000);
  const [section80CDeduction, setSection80CDeduction] = useState<number>(150000);
  const [otherDeductions, setOtherDeductions] = useState<number>(50000); // 80D + HRA

  // GST Late Fee State
  const [gstLateDays, setGstLateDays] = useState<number>(15);
  const [gstTaxType, setGstTaxType] = useState<'nil' | 'taxable'>('taxable');

  // Calculate Tax under New Regime (FY 2024-25 / AY 2025-26 Budget Slabs)
  const calculateNewRegimeTax = (income: number) => {
    // Standard deduction for salaried: ₹75,000
    const taxableIncome = Math.max(0, income - 75000);
    
    // Slabs:
    // 0 - 3L: 0%
    // 3L - 7L: 5%
    // 7L - 10L: 10%
    // 10L - 12L: 15%
    // 12L - 15L: 20%
    // > 15L: 30%
    let tax = 0;
    if (taxableIncome <= 700000) {
      // 87A rebate makes tax up to 7L zero (plus marginal relief up to ~7.75L with std deduction)
      return 0;
    }

    if (taxableIncome > 300000) {
      tax += Math.min(taxableIncome - 300000, 400000) * 0.05; // 3L to 7L
    }
    if (taxableIncome > 700000) {
      tax += Math.min(taxableIncome - 700000, 300000) * 0.10; // 7L to 10L
    }
    if (taxableIncome > 1000000) {
      tax += Math.min(taxableIncome - 1000000, 200000) * 0.15; // 10L to 12L
    }
    if (taxableIncome > 1200000) {
      tax += Math.min(taxableIncome - 1200000, 300000) * 0.20; // 12L to 15L
    }
    if (taxableIncome > 1500000) {
      tax += (taxableIncome - 1500000) * 0.30; // Above 15L
    }

    // 4% Health & Education Cess
    const cess = tax * 0.04;
    return Math.round(tax + cess);
  };

  // Calculate Tax under Old Regime
  const calculateOldRegimeTax = (income: number, ded80c: number, otherDed: number) => {
    const totalDeductions = 50000 + Math.min(ded80c, 150000) + otherDed; // 50k standard deduction
    const taxableIncome = Math.max(0, income - totalDeductions);

    if (taxableIncome <= 500000) {
      return 0; // Section 87A rebate
    }

    let tax = 0;
    if (taxableIncome > 250000) {
      tax += Math.min(taxableIncome - 250000, 250000) * 0.05; // 2.5L to 5L
    }
    if (taxableIncome > 500000) {
      tax += Math.min(taxableIncome - 500000, 500000) * 0.20; // 5L to 10L
    }
    if (taxableIncome > 1000000) {
      tax += (taxableIncome - 1000000) * 0.30; // Above 10L
    }

    const cess = tax * 0.04;
    return Math.round(tax + cess);
  };

  const newRegimeTax = calculateNewRegimeTax(annualIncome);
  const oldRegimeTax = calculateOldRegimeTax(annualIncome, section80CDeduction, otherDeductions);
  const taxDifference = Math.abs(newRegimeTax - oldRegimeTax);
  const betterRegime = newRegimeTax < oldRegimeTax ? 'New Tax Regime' : 'Old Tax Regime';

  // GST Late fee calculation (₹50/day for regular, ₹20/day for nil return)
  const gstLateFee = gstTaxType === 'taxable' 
    ? Math.min(gstLateDays * 50, 10000) 
    : Math.min(gstLateDays * 20, 10000);

  // Core 5 Tax & Documentation Pillars
  const taxCategoryCards = [
    {
      id: 'gst-services',
      slug: 'gst-filing',
      title: 'GST Registration & Return Filing',
      badge: 'Monthly & Annual',
      badgeColor: 'border-amber-500/40 text-amber-300 bg-amber-500/10',
      icon: Calculator,
      glow: 'hover:shadow-[0_15px_40px_rgba(245,158,11,0.2)]',
      border: 'hover:border-amber-500/60',
      shortDesc: 'End-to-end GST solutions including new GSTIN registration, monthly GSTR-1/3B filing, and automated ITC reconciliation.',
      features: [
        'New GST Registration & Instant ARN Generation',
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
      badgeColor: 'border-emerald-500/40 text-emerald-300 bg-emerald-500/10',
      icon: FileText,
      glow: 'hover:shadow-[0_15px_40px_rgba(16,185,129,0.2)]',
      border: 'hover:border-emerald-500/60',
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
      badgeColor: 'border-cyan-500/40 text-cyan-300 bg-cyan-500/10',
      icon: Award,
      glow: 'hover:shadow-[0_15px_40px_rgba(0,240,255,0.2)]',
      border: 'hover:border-cyan-500/60',
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
      badgeColor: 'border-purple-500/40 text-purple-300 bg-purple-500/10',
      icon: Building2,
      glow: 'hover:shadow-[0_15px_40px_rgba(168,85,247,0.2)]',
      border: 'hover:border-purple-500/60',
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
      badgeColor: 'border-pink-500/40 text-pink-300 bg-pink-500/10',
      icon: CreditCard,
      glow: 'hover:shadow-[0_15px_40px_rgba(236,72,153,0.2)]',
      border: 'hover:border-pink-500/60',
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
      tag: 'GST Returns',
      tagColor: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
      desc: 'Outward supplies & sales invoice data filing for regular taxpayers with turnover > ₹5 Cr or monthly filers.'
    },
    {
      period: 'Every 20th of Month',
      title: 'GSTR-3B Summary Return',
      tag: 'Tax Payment',
      tagColor: 'text-rose-400 bg-rose-500/10 border-rose-500/30',
      desc: 'Monthly summary return of outward & inward supplies with payment of self-assessed net GST liability.'
    },
    {
      period: '15th Jun / Sep / Dec / Mar',
      title: 'Advance Tax Installments',
      tag: 'Direct Tax',
      tagColor: 'text-blue-400 bg-blue-500/10 border-blue-500/30',
      desc: 'Quarterly payment of advance income tax liability for businesses and professionals if tax exceeds ₹10,000.'
    },
    {
      period: '31st July Annually',
      title: 'Individual & Non-Audit ITR',
      tag: 'Annual ITR',
      tagColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
      desc: 'Mandatory annual Income Tax Return filing deadline for salaried individuals, freelancers, and HUFs.'
    },
    {
      period: '31st October Annually',
      title: 'Corporate & Tax Audit ITR',
      tag: 'Audit Report',
      tagColor: 'text-purple-400 bg-purple-500/10 border-purple-500/30',
      desc: 'Income tax return filing and CA tax audit report submission for businesses liable to statutory tax audit.'
    },
    {
      period: '31st December Annually',
      title: 'Annual GST Return (GSTR-9)',
      tag: 'GST Annual',
      tagColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
      desc: 'Consolidated annual return filing for registered taxpayers reflecting all transactions of the financial year.'
    }
  ];

  const taxDocumentChecklist = [
    {
      title: 'GST Registration Checklist',
      badge: '5 Mandatory Documents',
      items: [
        'PAN Card & Aadhaar Card of Applicant/Directors',
        'Passport Size Photographs of Authorized Signatory',
        'Business Address Proof (Electricity Bill / Property Tax Receipt)',
        'Rent Agreement & Landlord NOC (if rented property)',
        'Cancelled Cheque / Bank Statement with IFSC & Account Number'
      ]
    },
    {
      title: 'ITR Filing Checklist',
      badge: 'Fast 1-Day Processing',
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
      badge: 'Ministry of Corporate Affairs',
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
      a: 'Our Chartered Accountants calculate your tax liability under BOTH regimes. If you have significant deductions (80C, 80D, HRA, home loan interest exceeding ₹3.75 Lakhs), the Old Regime might save more. For individuals with lower deductions, the New Regime offers lower baseline tax slabs and zero tax up to ₹7.75 Lakhs (with standard deduction).'
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
    <div className="min-h-screen bg-[#040713] text-white pt-24 pb-20 selection:bg-amber-500 selection:text-slate-950">
      <SEO
        title="Tax & Documentation Solutions | GST, ITR, Udyam & Company Registration | AVRX"
        description="Simplify tax and documentation. CA-backed GST registration, monthly return filing, individual & business ITR, Udyam MSME certificate, and company incorporation."
      />

      {/* Ambient background glows */}
      <div className="fixed top-20 left-1/4 w-[700px] h-[500px] bg-amber-500/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="fixed bottom-20 right-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[180px] pointer-events-none" />

      {/* Main Container - Stretched Widescreen Layout */}
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10 space-y-16">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="pt-2 flex items-center gap-2 text-xs text-slate-400">
          <button 
            onClick={() => onNavigate('home')}
            className="hover:text-amber-400 transition-colors"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-amber-300 font-semibold">Tax &amp; Documentation</span>
        </nav>

        {/* 1. Page Hero Section */}
        <div className="text-center max-w-4xl mx-auto space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-widest font-mono shadow-[0_0_20px_rgba(245,158,11,0.2)]">
            <FileText className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span>CHARTERED ACCOUNTANT COMPLIANCE CONCIERGE</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight">
            Simplify Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-300 to-yellow-300">
              Tax &amp; Legal Compliance.
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-xl leading-relaxed max-w-3xl mx-auto font-normal">
            Chartered Accountant backed GST return filing, error-free ITR submissions, official Udyam MSME certification, and end-to-end company incorporation for entrepreneurs, freelancers, and businesses.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
            <button
              onClick={() => {
                launchSoundEngine.playClickTick();
                setActiveTab('regime');
              }}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition cursor-pointer border ${
                activeTab === 'regime' 
                  ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.3)]' 
                  : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:text-white'
              }`}
            >
              Tax Regime Calculator
            </button>
            <button
              onClick={() => {
                launchSoundEngine.playClickTick();
                setActiveTab('gstcalc');
              }}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition cursor-pointer border ${
                activeTab === 'gstcalc' 
                  ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.3)]' 
                  : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:text-white'
              }`}
            >
              GST Late Fee Estimator
            </button>
            <button
              onClick={() => {
                launchSoundEngine.playClickTick();
                setActiveTab('calendar');
              }}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition cursor-pointer border ${
                activeTab === 'calendar' 
                  ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.3)]' 
                  : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:text-white'
              }`}
            >
              Statutory Deadlines 2026
            </button>
          </div>
        </div>

        {/* 2. Interactive Feature Tabs (Tax Regime & GST Late Fee Calculators) */}
        {activeTab === 'regime' && (
          <div className="rounded-3xl bg-slate-950/95 border-2 border-amber-500/40 p-6 sm:p-10 backdrop-blur-2xl shadow-[0_0_50px_rgba(245,158,11,0.15)] space-y-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
                  <Scale className="w-4 h-4" />
                  <span>OLD VS NEW TAX REGIME COMPARATOR (AY 2025-26)</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-black text-white">
                  Find Out Which Tax Regime Saves You More
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
                  Adjust your annual income and eligible deductions to instantly compare tax liabilities under both regimes.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-slate-900 border border-amber-500/40 text-right shrink-0">
                <div className="text-[11px] font-mono text-slate-400 uppercase font-bold">Recommended Choice</div>
                <div className="text-2xl sm:text-3xl font-black text-amber-300 font-mono mt-0.5">
                  {betterRegime}
                </div>
                <div className="text-xs text-emerald-400 font-mono font-bold mt-1">
                  Saves ~₹{taxDifference.toLocaleString('en-IN')} annually
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Sliders Area */}
              <div className="lg:col-span-2 space-y-5 p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
                
                {/* Annual Income */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-bold text-slate-300">
                    <span>Annual Gross Total Income</span>
                    <span className="font-mono text-amber-400 text-sm">₹{annualIncome.toLocaleString('en-IN')}</span>
                  </div>
                  <input
                    type="range"
                    min="300000"
                    max="5000000"
                    step="25000"
                    value={annualIncome}
                    onChange={e => {
                      setAnnualIncome(Number(e.target.value));
                      launchSoundEngine.playClickTick();
                    }}
                    className="w-full accent-amber-400 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                    <span>₹3 Lakhs</span>
                    <span>₹25 Lakhs</span>
                    <span>₹50 Lakhs</span>
                  </div>
                </div>

                {/* 80C Deduction */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-bold text-slate-300">
                    <span>Section 80C Deductions (EPF, PPF, ELSS, Life Insurance)</span>
                    <span className="font-mono text-cyan-400 text-sm">₹{section80CDeduction.toLocaleString('en-IN')}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="150000"
                    step="5000"
                    value={section80CDeduction}
                    onChange={e => {
                      setSection80CDeduction(Number(e.target.value));
                      launchSoundEngine.playClickTick();
                    }}
                    className="w-full accent-cyan-400 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                    <span>₹0</span>
                    <span>Max ₹1,50,000 Limit</span>
                  </div>
                </div>

                {/* Other Deductions (80D + HRA + Home Loan) */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-bold text-slate-300">
                    <span>Other Deductions (80D Health, HRA, Home Loan Interest)</span>
                    <span className="font-mono text-emerald-400 text-sm">₹{otherDeductions.toLocaleString('en-IN')}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="300000"
                    step="10000"
                    value={otherDeductions}
                    onChange={e => {
                      setOtherDeductions(Number(e.target.value));
                      launchSoundEngine.playClickTick();
                    }}
                    className="w-full accent-emerald-400 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                    <span>₹0</span>
                    <span>₹1,50,000</span>
                    <span>₹3,00,000+</span>
                  </div>
                </div>

              </div>

              {/* Comparison Result Cards */}
              <div className="space-y-4">
                <div className={`p-5 rounded-2xl border transition-all ${
                  betterRegime === 'New Tax Regime' 
                    ? 'bg-gradient-to-b from-amber-950/40 to-slate-900 border-amber-400 shadow-[0_0_25px_rgba(245,158,11,0.2)]' 
                    : 'bg-slate-900/60 border-slate-800'
                }`}>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white">New Tax Regime</span>
                    {betterRegime === 'New Tax Regime' && (
                      <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[10px] font-bold">
                        RECOMMENDED
                      </span>
                    )}
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-white font-mono mt-2">
                    ₹{newRegimeTax.toLocaleString('en-IN')}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">Includes ₹75,000 Standard Deduction &amp; 4% Cess</div>
                </div>

                <div className={`p-5 rounded-2xl border transition-all ${
                  betterRegime === 'Old Tax Regime' 
                    ? 'bg-gradient-to-b from-emerald-950/40 to-slate-900 border-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.2)]' 
                    : 'bg-slate-900/60 border-slate-800'
                }`}>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white">Old Tax Regime</span>
                    {betterRegime === 'Old Tax Regime' && (
                      <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[10px] font-bold">
                        RECOMMENDED
                      </span>
                    )}
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-white font-mono mt-2">
                    ₹{oldRegimeTax.toLocaleString('en-IN')}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">Includes 80C + 80D + HRA Deductions</div>
                </div>

                <button
                  onClick={() => {
                    launchSoundEngine.playClickTick();
                    onNavigate('service-detail', 'itr-filing');
                  }}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-orange-400 text-slate-950 font-black text-xs uppercase tracking-wider transition cursor-pointer shadow-lg hover:scale-105"
                >
                  File My ITR With A CA (From ₹999)
                </button>
              </div>

            </div>
          </div>
        )}

        {activeTab === 'gstcalc' && (
          <div className="rounded-3xl bg-slate-950/95 border-2 border-amber-500/40 p-6 sm:p-10 backdrop-blur-2xl shadow-[0_0_50px_rgba(245,158,11,0.15)] space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
              <div className="space-y-1">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
                  <Calculator className="w-4 h-4" />
                  <span>GST LATE FEE &amp; INTEREST CALCULATOR</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-white">
                  Estimate Penalty on Delayed GST Return Filing
                </h2>
              </div>
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-right">
                <div className="text-xs text-slate-400 font-mono">Estimated Late Fee</div>
                <div className="text-2xl sm:text-3xl font-black text-rose-400 font-mono">
                  ₹{gstLateFee.toLocaleString('en-IN')}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="text-xs font-bold text-slate-300">GST Return Type</div>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => {
                      setGstTaxType('taxable');
                      launchSoundEngine.playClickTick();
                    }}
                    className={`py-3 px-4 rounded-xl text-xs font-bold transition border cursor-pointer ${
                      gstTaxType === 'taxable' 
                        ? 'bg-amber-500 text-slate-950 border-amber-400 shadow' 
                        : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
                    }`}
                  >
                    Taxable Supply (₹50/day)
                  </button>
                  <button
                    onClick={() => {
                      setGstTaxType('nil');
                      launchSoundEngine.playClickTick();
                    }}
                    className={`py-3 px-4 rounded-xl text-xs font-bold transition border cursor-pointer ${
                      gstTaxType === 'nil' 
                        ? 'bg-amber-500 text-slate-950 border-amber-400 shadow' 
                        : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
                    }`}
                  >
                    Nil Return (₹20/day)
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-bold text-slate-300">
                  <span>Days Passed Past Due Date</span>
                  <span className="font-mono text-amber-400 text-sm">{gstLateDays} Days</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="120"
                  value={gstLateDays}
                  onChange={e => {
                    setGstLateDays(Number(e.target.value));
                    launchSoundEngine.playClickTick();
                  }}
                  className="w-full accent-amber-400 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>1 Day</span>
                  <span>60 Days</span>
                  <span>120 Days</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between gap-4">
              <div className="text-xs text-amber-200">
                Avoid further late penalties and interest on outward tax liability. File GSTR-1 and GSTR-3B immediately.
              </div>
              <button
                onClick={() => {
                  launchSoundEngine.playClickTick();
                  onNavigate('service-detail', 'gst-filing');
                }}
                className="px-5 py-2 rounded-xl bg-amber-400 text-slate-950 font-bold text-xs uppercase hover:bg-amber-300 transition shrink-0"
              >
                File GST Now
              </button>
            </div>
          </div>
        )}

        {/* 3. Statutory Legal Advisory Notice */}
        <div className="rounded-2xl bg-amber-500/10 border border-amber-500/30 p-4 sm:p-5 flex items-start gap-3.5">
          <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div className="text-xs text-amber-200/90 leading-relaxed font-normal">
            <strong className="text-amber-300 font-bold">Statutory &amp; Regulatory Advisory: </strong>
            AVRX operates as a professional tech-enabled facilitation platform collaborating with registered Chartered Accountants, Tax Advocates, and MCA professionals. All filings, tax calculations, and registration certificates are governed by applicable Indian tax laws (Income Tax Act, CGST/SGST Acts, and MCA Regulations).
          </div>
        </div>

        {/* 4. Core Offerings Grid */}
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>KEY TAX &amp; LEGAL SERVICES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white">
              Complete Corporate &amp; Individual Compliance
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
                  className={`rounded-3xl bg-slate-950/90 border border-slate-800 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] group relative overflow-hidden backdrop-blur-xl ${item.glow} ${item.border}`}
                >
                  <div className="space-y-5">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-amber-400 group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className={`px-3 py-1 rounded-full border text-[11px] font-mono font-bold ${item.badgeColor}`}>
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
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-mono">
                        Included Deliverables:
                      </div>
                      {item.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price & Action */}
                  <div className="pt-6 mt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div>
                      <div className="text-[10px] uppercase font-mono text-slate-500 font-semibold">Transparent Fee</div>
                      <div className="text-sm font-black text-amber-400 font-mono">{item.price}</div>
                    </div>

                    <button
                      onClick={() => {
                        launchSoundEngine.playClickTick();
                        onNavigate('service-detail', item.slug);
                      }}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-amber-500/10 hover:bg-amber-400 border border-amber-500/30 hover:border-amber-400 text-amber-300 hover:text-slate-950 font-bold text-xs transition flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
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

        {/* 5. Statutory Tax & Compliance Calendar */}
        <div className="bg-slate-950/95 border border-amber-500/40 rounded-3xl p-6 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] relative overflow-hidden space-y-8">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-3xl font-black text-white">Statutory Tax &amp; Compliance Calendar (2026)</h3>
                <p className="text-xs text-slate-400">Stay ahead of government deadlines to avoid statutory late fees, interest, and compliance notices.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceCalendar.map((item, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 hover:border-amber-500/50 transition group"
              >
                <div className="flex items-center justify-between">
                  <div className="px-2.5 py-0.5 rounded-md bg-amber-500/15 border border-amber-500/30 text-amber-300 font-mono font-bold text-[11px]">
                    {item.period}
                  </div>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-mono border ${item.tagColor}`}>
                    {item.tag}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">{item.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-400">
              Need proactive automated WhatsApp reminders for your company&apos;s GST and advance tax dates?
            </div>
            <button
              onClick={() => {
                launchSoundEngine.playClickTick();
                onNavigate('contact');
              }}
              className="px-6 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs transition cursor-pointer shadow-lg hover:scale-105"
            >
              Sign Up for Free Compliance Alerts
            </button>
          </div>

        </div>

        {/* 6. Document Checklist ("What You'll Need") */}
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase font-mono">
              <FileCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>DOCUMENTATION READINESS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white">
              What You&apos;ll Need: Checklist
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {taxDocumentChecklist.map((group, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-3xl bg-slate-950/90 border border-slate-800 space-y-4 hover:border-amber-500/40 transition-colors"
              >
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <h4 className="font-bold text-white text-sm sm:text-base">{group.title}</h4>
                  <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-cyan-300">
                    {group.badge}
                  </span>
                </div>

                <div className="space-y-2.5">
                  {group.items.map((doc, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{doc}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 7. FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-bold uppercase font-mono">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white">
              Tax &amp; Legal Documentation Queries
            </h2>
          </div>

          <div className="space-y-3">
            {taxFaqs.map((faq, idx) => (
              <div 
                key={idx}
                className="border border-slate-800 rounded-2xl overflow-hidden bg-slate-950/80"
              >
                <button
                  onClick={() => {
                    launchSoundEngine.playClickTick();
                    setActiveFaq(activeFaq === idx ? null : idx);
                  }}
                  className="w-full p-4 sm:p-5 text-left font-bold text-xs sm:text-sm text-slate-200 flex items-center justify-between gap-3 hover:text-amber-300 transition-colors cursor-pointer"
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

        {/* 8. Bottom CTA Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-amber-950 via-slate-950 to-orange-950 border border-amber-500/40 p-8 sm:p-12 text-center space-y-6 relative overflow-hidden shadow-[0_20px_60px_rgba(245,158,11,0.2)]">
          <div className="max-w-2xl mx-auto space-y-3 relative z-10">
            <h3 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Ready to Streamline Your Tax &amp; Documentation?
            </h3>
            <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
              Connect with an AVRX tax advisor for a personalized compliance consultation.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 relative z-10">
            <button
              onClick={() => {
                launchSoundEngine.playClickTick();
                onNavigate('contact');
              }}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-[0_0_30px_rgba(245,158,11,0.4)] hover:scale-105 transition flex items-center gap-2 cursor-pointer"
            >
              <span>File Returns with AVRX</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                launchSoundEngine.playClickTick();
                onNavigate('ai-tools');
              }}
              className="px-6 py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-white font-bold text-xs uppercase transition flex items-center gap-2 cursor-pointer"
            >
              <span>Explore AI Tools Suite</span>
              <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
            </button>
          </div>
        </div>

        {/* Partners Slider */}
        <PartnersSlider 
          title="Institutional &amp; Compliance Ecosystem"
          badgeText="VERIFIED NETWORK"
          variant="compact"
        />

      </div>
    </div>
  );
};
