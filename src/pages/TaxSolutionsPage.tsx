import React, { useState, useMemo } from 'react';
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
  ExternalLink,
  Percent,
  CheckCircle2,
  HelpCircle,
  Scale,
  BadgePercent,
  Layers,
  FileCheck,
  Search,
  CheckSquare,
  Shield,
  Coins
} from 'lucide-react';
import { launchSoundEngine } from '../utils/launchSoundEngine';

interface TaxSolutionsPageProps {
  onNavigate: (page: string, slug?: string) => void;
}

export const TaxSolutionsPage: React.FC<TaxSolutionsPageProps> = ({ onNavigate }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<'regime' | 'gstcalc' | 'calendar'>('regime');
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Interactive Tax Regime Calculator State
  const [annualIncome, setAnnualIncome] = useState<number>(1200000);
  const [section80CDeduction, setSection80CDeduction] = useState<number>(150000);
  const [otherDeductions, setOtherDeductions] = useState<number>(50000); // 80D + HRA

  // GST Late Fee State
  const [gstLateDays, setGstLateDays] = useState<number>(15);
  const [gstTaxType, setGstTaxType] = useState<'nil' | 'taxable'>('taxable');

  // Calculate Tax under New Regime (FY 2024-25 / AY 2025-26 Budget Slabs)
  const calculateNewRegimeTax = (income: number) => {
    const taxableIncome = Math.max(0, income - 75000);
    if (taxableIncome <= 700000) return 0;

    let tax = 0;
    if (taxableIncome > 300000) tax += Math.min(taxableIncome - 300000, 400000) * 0.05;
    if (taxableIncome > 700000) tax += Math.min(taxableIncome - 700000, 300000) * 0.10;
    if (taxableIncome > 1000000) tax += Math.min(taxableIncome - 1000000, 200000) * 0.15;
    if (taxableIncome > 1200000) tax += Math.min(taxableIncome - 1200000, 300000) * 0.20;
    if (taxableIncome > 1500000) tax += (taxableIncome - 1500000) * 0.30;

    const cess = tax * 0.04;
    return Math.round(tax + cess);
  };

  // Calculate Tax under Old Regime
  const calculateOldRegimeTax = (income: number, ded80c: number, otherDed: number) => {
    const totalDeductions = 50000 + Math.min(ded80c, 150000) + otherDed;
    const taxableIncome = Math.max(0, income - totalDeductions);

    if (taxableIncome <= 500000) return 0;

    let tax = 0;
    if (taxableIncome > 250000) tax += Math.min(taxableIncome - 250000, 250000) * 0.05;
    if (taxableIncome > 500000) tax += Math.min(taxableIncome - 500000, 500000) * 0.20;
    if (taxableIncome > 1000000) tax += (taxableIncome - 1000000) * 0.30;

    const cess = tax * 0.04;
    return Math.round(tax + cess);
  };

  const newRegimeTax = calculateNewRegimeTax(annualIncome);
  const oldRegimeTax = calculateOldRegimeTax(annualIncome, section80CDeduction, otherDeductions);
  const taxDifference = Math.abs(newRegimeTax - oldRegimeTax);
  const betterRegime = newRegimeTax < oldRegimeTax ? 'New Tax Regime' : 'Old Tax Regime';

  // GST Late fee calculation
  const gstLateFee = gstTaxType === 'taxable' 
    ? Math.min(gstLateDays * 50, 10000) 
    : Math.min(gstLateDays * 20, 10000);

  // Filtered Tax Services
  const filteredServices = useMemo(() => {
    return TAX_SERVICES.filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.features.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()));

      if (!matchesSearch) return false;

      if (selectedFilter === 'all') return true;
      if (selectedFilter === 'tax' && (service.id.includes('gst') || service.id.includes('itr') || service.id.includes('pan'))) return true;
      if (selectedFilter === 'startup' && (service.id.includes('company') || service.id.includes('udyam') || service.id.includes('trademark'))) return true;
      if (selectedFilter === 'licenses' && (service.id.includes('fssai') || service.id.includes('iso') || service.id.includes('iec') || service.id.includes('gumasta'))) return true;
      if (selectedFilter === 'compliance' && (service.id.includes('roc') || service.id.includes('advisory'))) return true;

      return true;
    });
  }, [selectedFilter, searchQuery]);

  // Visual style config for each tax service card
  const getCardStyle = (index: number, id: string) => {
    const styles = [
      {
        badgeColor: 'border-amber-500/40 text-amber-300 bg-amber-500/10',
        glow: 'hover:shadow-[0_15px_40px_rgba(245,158,11,0.25)]',
        border: 'border-amber-500/30 hover:border-amber-400',
        textGradient: 'from-amber-400 to-orange-400',
        btnBg: 'bg-amber-500/15 hover:bg-amber-400 hover:text-slate-950 text-amber-300 border-amber-500/30'
      },
      {
        badgeColor: 'border-emerald-500/40 text-emerald-300 bg-emerald-500/10',
        glow: 'hover:shadow-[0_15px_40px_rgba(16,185,129,0.25)]',
        border: 'border-emerald-500/30 hover:border-emerald-400',
        textGradient: 'from-emerald-400 to-teal-400',
        btnBg: 'bg-emerald-500/15 hover:bg-emerald-400 hover:text-slate-950 text-emerald-300 border-emerald-500/30'
      },
      {
        badgeColor: 'border-cyan-500/40 text-cyan-300 bg-cyan-500/10',
        glow: 'hover:shadow-[0_15px_40px_rgba(6,182,212,0.25)]',
        border: 'border-cyan-500/30 hover:border-cyan-400',
        textGradient: 'from-cyan-400 to-blue-400',
        btnBg: 'bg-cyan-500/15 hover:bg-cyan-400 hover:text-slate-950 text-cyan-300 border-cyan-500/30'
      },
      {
        badgeColor: 'border-purple-500/40 text-purple-300 bg-purple-500/10',
        glow: 'hover:shadow-[0_15px_40px_rgba(168,85,247,0.25)]',
        border: 'border-purple-500/30 hover:border-purple-400',
        textGradient: 'from-purple-400 to-indigo-400',
        btnBg: 'bg-purple-500/15 hover:bg-purple-400 hover:text-slate-950 text-purple-300 border-purple-500/30'
      },
      {
        badgeColor: 'border-rose-500/40 text-rose-300 bg-rose-500/10',
        glow: 'hover:shadow-[0_15px_40px_rgba(244,63,94,0.25)]',
        border: 'border-rose-500/30 hover:border-rose-400',
        textGradient: 'from-rose-400 to-pink-400',
        btnBg: 'bg-rose-500/15 hover:bg-rose-400 hover:text-slate-950 text-rose-300 border-rose-500/30'
      },
      {
        badgeColor: 'border-orange-500/40 text-orange-300 bg-orange-500/10',
        glow: 'hover:shadow-[0_15px_40px_rgba(249,115,22,0.25)]',
        border: 'border-orange-500/30 hover:border-orange-400',
        textGradient: 'from-orange-400 to-amber-400',
        btnBg: 'bg-orange-500/15 hover:bg-orange-400 hover:text-slate-950 text-orange-300 border-orange-500/30'
      }
    ];

    return styles[index % styles.length];
  };

  // Statutory Tax & Compliance Calendar (2026)
  const complianceCalendar = [
    { period: '11th of Every Month', title: 'GSTR-1 Outward Return', tag: 'Monthly GST', tagColor: 'border-amber-500/40 text-amber-300 bg-amber-500/10', desc: 'Monthly reporting of outward supplies and tax invoices on the GSTN portal.' },
    { period: '20th of Every Month', title: 'GSTR-3B Summary Return', tag: 'Tax Payment', tagColor: 'border-emerald-500/40 text-emerald-300 bg-emerald-500/10', desc: 'Summary return and electronic payment of net GST tax liability after ITC offset.' },
    { period: '15th June, Sep, Dec, Mar', title: 'Advance Tax Installments', tag: 'Income Tax', tagColor: 'border-cyan-500/40 text-cyan-300 bg-cyan-500/10', desc: 'Mandatory advance tax payment (15%, 45%, 75%, 100%) for individuals & corporations.' },
    { period: '31st July', title: 'Individual & Salaried ITR', tag: 'Annual ITR', tagColor: 'border-purple-500/40 text-purple-300 bg-purple-500/10', desc: 'Statutory deadline for non-audit individual, salaried, and professional tax returns.' },
    { period: '31st October', title: 'Corporate & Tax Audit ITR', tag: 'Audit Filing', tagColor: 'border-rose-500/40 text-rose-300 bg-rose-500/10', desc: 'Statutory filing for companies and business entities subject to Tax Audit under Sec 44AB.' },
    { period: '31st December', title: 'GSTR-9 Annual GST Return', tag: 'Annual GST', tagColor: 'border-blue-500/40 text-blue-300 bg-blue-500/10', desc: 'Annual consolidation of inward/outward supplies, tax paid, and ITC reconciliations.' }
  ];

  // Document Checklist ("What You'll Need")
  const taxDocumentChecklist = [
    {
      title: 'For GST & Business Tax',
      badge: 'Immediate Registration',
      items: ['PAN Card of Business / Proprietor', 'Aadhaar Card of Signatories', 'Electricity Bill / Property Tax Receipt', 'Rent Agreement & Landlord NOC', 'Bank Statement / Cancelled Cheque']
    },
    {
      title: 'For Income Tax Return (ITR)',
      badge: 'Direct Tax',
      items: ['PAN & Aadhaar of Taxpayer', 'Form 16 / 16A (TDS Certificates)', 'Bank Statements (Full FY)', 'Annual Information Statement (AIS/TIS)', 'Investment & 80C/80D Proofs']
    },
    {
      title: 'For Startup / Company Setup',
      badge: 'Corporate MCA',
      items: ['Director Identification (DIN) KYC', 'Digital Signature Certificates (DSC)', 'Registered Office Utility Bill', 'MoA & AoA Drafts by CS', 'Name Approval Confirmation']
    }
  ];

  // FAQ list
  const taxFaqs = [
    {
      q: 'Who is required to obtain mandatory GST Registration in India?',
      a: 'Businesses with annual turnover exceeding ₹40 Lakhs (₹20 Lakhs for Special Category States) for goods, or ₹20 Lakhs (₹10 Lakhs for Special Category) for service providers are required to register. Additionally, e-commerce sellers, interstate suppliers, and casual taxable persons require mandatory GST registration irrespective of turnover.'
    },
    {
      q: 'What is the key difference between the Old and New Tax Regime?',
      a: 'The New Tax Regime offers lower slab tax rates with a ₹75,000 standard deduction and full tax rebate up to ₹7.75 Lakhs taxable income (AY 2025-26), but disallows most deductions like 80C, 80D, and HRA. The Old Regime allows all major exemptions (80C up to ₹1.5L, 80D medical insurance, Home loan interest up to ₹2L, HRA) but features higher base tax slabs.'
    },
    {
      q: 'How long does company incorporation take with MCA and AVRX?',
      a: 'With AVRX digital facilitation, incorporation of a Private Limited Company or LLP typically completes in 5 to 7 working days, including RUN name approval, DSC generation, SPICe+ filing, and Certificate of Incorporation (COI) issuance.'
    },
    {
      q: 'Can AVRX help me respond to an Income Tax or GST Notice?',
      a: 'Yes! Our panel of senior Chartered Accountants and Tax Advocates reviews your notice, verifies your portal records, and prepares a legally sound reply with supporting documentation within 24 to 48 hours.'
    },
    {
      q: 'How is client data protected during tax filing and document sharing?',
      a: 'AVRX implements bank-grade 256-bit encryption for all file uploads and transactions. Your PAN, Aadhaar, bank records, and financial statements are strictly processed for statutory filings and never shared with unauthorized third parties.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#050811] text-white pt-24 pb-24 selection:bg-amber-500 selection:text-slate-950 relative overflow-hidden">
      <SEO
        title="Tax, Legal & Compliance Solutions | AVRX Digital & Financial Solution"
        description="Comprehensive GST, Income Tax Return (ITR), Company Registration, MSME Udyam, Trademark, and Legal Compliance services in India."
      />

      {/* Dynamic Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-amber-600/10 via-orange-600/5 to-transparent rounded-full blur-[140px] animate-pulse" />
        <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-gradient-to-bl from-emerald-600/10 via-cyan-600/5 to-transparent rounded-full blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">

        {/* 1. Header Hero Section */}
        <div className="text-center max-w-4xl mx-auto space-y-6 pt-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold uppercase shadow-sm">
            <Scale className="w-3.5 h-3.5 text-amber-400" />
            <span>TAX, LEGAL &amp; CORPORATE COMPLIANCE ECOSYSTEM</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.12]">
            Systematic Tax, Legal &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500">
              Corporate Governance
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto">
            From seamless GST registration and CA-reviewed ITR filing to Private Limited incorporation and trademark defense — AVRX simplifies compliance with 100% transparent pricing and rapid digital execution.
          </p>

          {/* Quick Action Navigation Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <button
              onClick={() => {
                launchSoundEngine.playClickTick();
                setActiveTab('regime');
              }}
              className={`px-6 py-3 rounded-2xl text-xs font-bold transition cursor-pointer border flex items-center gap-2 ${
                activeTab === 'regime' 
                  ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.35)]' 
                  : 'bg-slate-900/90 text-slate-300 border-slate-800 hover:text-white'
              }`}
            >
              <Scale className="w-4 h-4" />
              <span>Tax Regime Comparator</span>
            </button>
            <button
              onClick={() => {
                launchSoundEngine.playClickTick();
                setActiveTab('gstcalc');
              }}
              className={`px-6 py-3 rounded-2xl text-xs font-bold transition cursor-pointer border flex items-center gap-2 ${
                activeTab === 'gstcalc' 
                  ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.35)]' 
                  : 'bg-slate-900/90 text-slate-300 border-slate-800 hover:text-white'
              }`}
            >
              <Calculator className="w-4 h-4" />
              <span>GST Late Fee Estimator</span>
            </button>
            <button
              onClick={() => {
                launchSoundEngine.playClickTick();
                setActiveTab('calendar');
              }}
              className={`px-6 py-3 rounded-2xl text-xs font-bold transition cursor-pointer border flex items-center gap-2 ${
                activeTab === 'calendar' 
                  ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.35)]' 
                  : 'bg-slate-900/90 text-slate-300 border-slate-800 hover:text-white'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>Statutory Deadlines 2026</span>
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
                    ? 'bg-gradient-to-b from-amber-950/40 to-slate-900 border-amber-400 shadow-[0_0_25px_rgba(245,158,11,0.2)]' 
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
                  <div className="text-[11px] text-slate-400 mt-1">Includes 80C, 80D &amp; ₹50,000 Standard Deduction</div>
                </div>

                <button
                  onClick={() => {
                    launchSoundEngine.playClickTick();
                    onNavigate('service-detail', 'itr-filing');
                  }}
                  className="w-full py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs uppercase tracking-wider transition shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>File ITR with Optimal Regime</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>
        )}

        {activeTab === 'gstcalc' && (
          <div className="rounded-3xl bg-slate-950/95 border-2 border-amber-500/40 p-6 sm:p-10 backdrop-blur-2xl shadow-[0_0_50px_rgba(245,158,11,0.15)] space-y-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
                  <Calculator className="w-4 h-4" />
                  <span>GST STATUTORY LATE FEE &amp; PENALTY CALCULATOR</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-black text-white">
                  Estimate Overdue GST Filing Penalty
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
                  Calculate statutory late fees under Section 47 of the CGST/SGST Act for delayed GSTR-1 and GSTR-3B submissions.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-slate-900 border border-amber-500/40 text-right shrink-0">
                <div className="text-[11px] font-mono text-slate-400 uppercase font-bold">Estimated Late Fee</div>
                <div className="text-2xl sm:text-3xl font-black text-amber-300 font-mono mt-0.5">
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

            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-amber-200">
                Avoid compounding late penalties and interest on outward tax liability. File GSTR-1 and GSTR-3B immediately.
              </div>
              <button
                onClick={() => {
                  launchSoundEngine.playClickTick();
                  onNavigate('service-detail', 'gst-registration');
                }}
                className="px-6 py-2.5 rounded-xl bg-amber-400 text-slate-950 font-bold text-xs uppercase hover:bg-amber-300 transition shrink-0 cursor-pointer"
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

        {/* 4. Complete Services Showcase Grid (All 12 Tax & Legal Services) */}
        <div className="space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase font-mono">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>COMPLETE CATALOG (12 SERVICES)</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-white">
                Comprehensive Tax, Legal &amp; Licensing Services
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 max-w-2xl">
                Explore our full suite of certified tax, business incorporation, licensing, and compliance services. Click any service to view comprehensive features, benefits, and statutory checklists.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search tax, GST, ITR, company..."
                className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-9 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
              />
              <Search className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-b border-slate-800 pb-4">
            {[
              { id: 'all', label: `All Services (${TAX_SERVICES.length})` },
              { id: 'tax', label: 'GST & Direct Tax' },
              { id: 'startup', label: 'Company & Startup' },
              { id: 'licenses', label: 'Licenses & Certificates' },
              { id: 'compliance', label: 'Advisory & MCA Compliance' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => {
                  launchSoundEngine.playClickTick();
                  setSelectedFilter(tab.id);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer border ${
                  selectedFilter === tab.id
                    ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md'
                    : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Grid of 12 Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredServices.map((item, idx) => {
              const cardTheme = getCardStyle(idx, item.id);

              return (
                <div
                  key={item.id}
                  className={`rounded-3xl bg-slate-950/90 border p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] group relative overflow-hidden backdrop-blur-xl ${cardTheme.glow} ${cardTheme.border}`}
                >
                  <div className="space-y-5">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-amber-400 group-hover:scale-110 transition-transform">
                        {renderServiceIcon(item.iconName, 'w-6 h-6')}
                      </div>
                      <span className={`px-3 py-1 rounded-full border text-[11px] font-mono font-bold ${cardTheme.badgeColor}`}>
                        {item.badge || 'Verified'}
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
                        Key Package Inclusions:
                      </div>
                      {item.features.slice(0, 4).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price & Action */}
                  <div className="pt-6 mt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div>
                      <div className="text-[10px] uppercase font-mono text-slate-500 font-semibold">Starting Fee</div>
                      <div className="text-sm font-black text-amber-400 font-mono">{item.priceStarting || '₹999'}</div>
                    </div>

                    <button
                      onClick={() => {
                        launchSoundEngine.playClickTick();
                        onNavigate('service-detail', item.id);
                      }}
                      className={`w-full sm:w-auto px-5 py-2.5 rounded-xl font-bold text-xs transition flex items-center justify-center gap-1.5 shadow-sm cursor-pointer border ${cardTheme.btnBg}`}
                    >
                      <span>Explore Service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              );
            })}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12 p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-3">
              <HelpCircle className="w-10 h-10 text-amber-400 mx-auto" />
              <h3 className="text-lg font-bold text-white">No matching services found</h3>
              <p className="text-xs text-slate-400">Try searching for different keywords or clear the filter.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedFilter('all');
                }}
                className="px-4 py-2 rounded-xl bg-amber-400 text-slate-950 font-bold text-xs"
              >
                Reset Filters
              </button>
            </div>
          )}
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
