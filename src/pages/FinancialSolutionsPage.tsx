import React, { useState, useEffect } from 'react';
import { SEO } from '../components/common/SEO';
import { PartnersSlider } from '../components/common/PartnersSlider';
import { submitLeadForm } from '../utils/formSubmit';
import { SubmissionFeedbackModal } from '../components/common/SubmissionFeedbackModal';
import { 
  Sparkles, 
  ArrowRight, 
  Check, 
  ChevronRight, 
  ChevronDown, 
  Phone, 
  MessageCircle, 
  Send, 
  RefreshCw, 
  ShieldCheck, 
  Zap, 
  Search, 
  BarChart3, 
  Lock, 
  Landmark, 
  Coins, 
  Building2, 
  Store, 
  Car, 
  Home, 
  Briefcase, 
  UserCheck, 
  Shield, 
  HeartHandshake, 
  FileText, 
  CheckCircle2, 
  Calculator, 
  HelpCircle, 
  Compass, 
  SlidersHorizontal, 
  Clock, 
  Info,
  BadgePercent,
  Layers,
  Plane,
  Percent,
  CheckCheck
} from 'lucide-react';

interface FinancialSolutionsPageProps {
  onNavigate: (page: string, slug?: string) => void;
}

export const FinancialSolutionsPage: React.FC<FinancialSolutionsPageProps> = ({ onNavigate }) => {
  // Modal & Consultation States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSolution, setSelectedSolution] = useState<string>('Personal Loan');
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [activeComparisonTab, setActiveComparisonTab] = useState<string>('personal');
  const [activeDocTab, setActiveDocTab] = useState<string>('identity');

  // Hero Card Stack Animation Index
  const [heroCardIndex, setHeroCardIndex] = useState(0);
  const heroCardStack = [
    { title: 'Personal Loans', icon: UserCheck, tag: 'Flexible Terms', color: 'from-cyan-500/20 to-blue-500/20', border: 'border-cyan-500/40' },
    { title: 'Business Capital', icon: Briefcase, tag: 'Growth Finance', color: 'from-emerald-500/20 to-teal-500/20', border: 'border-emerald-500/40' },
    { title: 'Vehicle Finance', icon: Car, tag: 'New & Used Cars', color: 'from-amber-500/20 to-orange-500/20', border: 'border-amber-500/40' },
    { title: 'Home & Property Loans', icon: Home, tag: 'Long Tenures', color: 'from-purple-500/20 to-indigo-500/20', border: 'border-purple-500/40' },
    { title: 'Govt Subsidy (PMEGP)', icon: Landmark, tag: 'Subsidized Schemes', color: 'from-rose-500/20 to-pink-500/20', border: 'border-rose-500/40' },
    { title: 'Protection & Insurance', icon: Shield, tag: 'Health & Motor', color: 'from-blue-500/20 to-cyan-500/20', border: 'border-blue-500/40' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroCardIndex((prev) => (prev + 1) % heroCardStack.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [heroCardStack.length]);

  // EMI Calculator State
  const [loanAmount, setLoanAmount] = useState<number>(500000);
  const [interestRate, setInterestRate] = useState<number>(10.5);
  const [tenureYears, setTenureYears] = useState<number>(5);

  const calculateEmi = () => {
    const monthlyRate = interestRate / 12 / 100;
    const months = tenureYears * 12;
    const emi = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    const totalPayable = emi * months;
    const totalInterest = totalPayable - loanAmount;

    return {
      monthlyEmi: Math.round(emi),
      totalInterest: Math.round(totalInterest),
      totalPayable: Math.round(totalPayable)
    };
  };

  const emiResult = calculateEmi();

  // Lead Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    solutionType: 'Personal Loan',
    loanAmount: '₹5,00,000',
    employmentType: 'Salaried',
    notes: '',
    website_hp: ''
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [feedback, setFeedback] = useState<{
    isOpen: boolean;
    type: 'success' | 'error';
    leadId?: string;
    message?: string;
  }>({
    isOpen: false,
    type: 'success'
  });

  const handleOpenFormWithSolution = (solutionName: string) => {
    setSelectedSolution(solutionName);
    setFormData(prev => ({ ...prev, solutionType: solutionName }));
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    setErrorMessage('');
    setLoading(true);

    const result = await submitLeadForm({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      location: formData.city,
      serviceCategory: `Financial Solutions — ${formData.solutionType}`,
      subject: `New Financial Inquiry: ${formData.solutionType} — ${formData.name}`,
      message: formData.notes || `Client requested consultation for ${formData.solutionType}. Approx amount: ${formData.loanAmount}, Employment: ${formData.employmentType}`,
      sourcePage: 'Financial Solutions Master Service Page',
      formType: 'Financial Advisory Lead Form',
      website_hp: formData.website_hp,
      additionalFields: {
        'Selected Product': formData.solutionType,
        'Approx Amount': formData.loanAmount,
        'Employment Type': formData.employmentType
      }
    });

    setLoading(false);

    if (result.success) {
      setIsModalOpen(false);
      setFeedback({
        isOpen: true,
        type: 'success',
        leadId: result.leadId,
        message: result.message
      });
      setFormData({
        name: '',
        phone: '',
        email: '',
        city: '',
        solutionType: 'Personal Loan',
        loanAmount: '₹5,00,000',
        employmentType: 'Salaried',
        notes: '',
        website_hp: ''
      });
    } else {
      setErrorMessage(result.message || 'Unable to submit your request right now.');
      setFeedback({
        isOpen: true,
        type: 'error',
        message: result.message
      });
    }
  };

  // 11 Core Financial & Insurance Solutions
  const allFinancialServices = [
    {
      id: 'personal-loan',
      slug: 'personal-loan',
      title: 'Personal Loan',
      category: 'Unsecured Credit',
      icon: UserCheck,
      imageUrl: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=800&q=80',
      desc: 'Unsecured credit solutions to meet personal requirements, emergency expenses, travel, or debt consolidation.',
      indicativeInfo: 'Flexible loan amounts based on profile & lender criteria',
      features: [
        'Flexible loan amount depending on eligibility',
        'Multiple lender options where available',
        'Documentation assistance & review',
        'Transparent application guidance',
        'Personalized repayment tenure options',
        'Pre-application profile assessment'
      ],
      disclaimer: 'Loan approval, interest rate, amount and tenure are subject to lender criteria and credit evaluation.'
    },
    {
      id: 'business-loan',
      slug: 'business-loan',
      title: 'Business Loan',
      category: 'Commercial Capital',
      icon: Briefcase,
      imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      desc: 'Structured business funding for working capital, inventory replenishment, machinery purchase, and operational expansion.',
      indicativeInfo: 'Working capital & term loan solutions for enterprises',
      features: [
        'Business-focused financing options',
        'GST & balance sheet documentation support',
        'Assistance for MSMEs, proprietorships & private firms',
        'Multiple financial institution channels',
        'Custom repayment schedule alignment',
        'Working capital requirement review'
      ],
      disclaimer: 'Financing terms and eligibility are determined by institutional lenders and financial vintage.'
    },
    {
      id: 'car-loan',
      slug: 'car-loan',
      title: 'Car Loan (New & Used)',
      category: 'Vehicle Financing',
      icon: Car,
      imageUrl: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
      desc: 'Financing solutions for new passenger vehicles and verified pre-owned cars with structured repayment periods.',
      indicativeInfo: 'New car and pre-owned vehicle loan assistance',
      features: [
        'Financing options for new & certified used vehicles',
        'Vehicle valuation & documentation guidance',
        'Eligibility assessment based on income profile',
        'End-to-end application support',
        'Repayment tenure planning up to 7 years',
        'Dealer quotation liaison support'
      ],
      disclaimer: 'Lending terms, loan-to-value (LTV) ratio and interest rates depend on vehicle age and lender norms.'
    },
    {
      id: 'home-loan',
      slug: 'home-loan',
      title: 'Home / Property Loan',
      category: 'Real Estate & LAP',
      icon: Home,
      imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
      desc: 'Credit solutions for residential home purchases, plot construction, home expansion, and Loan Against Property (LAP).',
      indicativeInfo: 'Long-term financing for property purchases & mortgage',
      features: [
        'Residential home purchase financing',
        'Plot purchase + construction loan assistance',
        'Loan Against Property (LAP) for liquid capital',
        'Property chain & legal document guidance',
        'Balance transfer options where suitable',
        'Long repayment tenures up to 30 years'
      ],
      disclaimer: 'Mortgage sanction and disbursement are subject to property title clearance and institutional underwriting.'
    },
    {
      id: 'government-subsidy-loans',
      slug: 'government-subsidy-loans',
      title: 'Government Subsidy Loans',
      category: 'PMEGP & Mudra Schemes',
      icon: Landmark,
      imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
      desc: 'Assistance for government-linked business finance schemes including PMEGP, MUDRA (Shishu/Kishore/Tarun), and CGTMSE.',
      indicativeInfo: 'Government-supported entrepreneurship credit assistance',
      features: [
        'PMEGP subsidy & margin money scheme guidance',
        'Mudra loan documentation support (up to ₹10 Lakh)',
        'Detailed Project Report (DPR) formatting help',
        'Category-specific eligibility guidance (Urban/Rural)',
        'Application submission portal support',
        'Banking coordination for DPR appraisal'
      ],
      disclaimer: 'Eligibility and approval are strictly subject to applicable government guidelines, bank criteria and documentation. Subsidies are not guaranteed.'
    },
    {
      id: 'motor-insurance',
      slug: 'motor-insurance',
      title: 'Motor Insurance',
      category: 'Vehicle Protection',
      icon: ShieldCheck,
      imageUrl: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
      desc: 'Comprehensive & third-party motor insurance options for private cars, two-wheelers, and commercial vehicles.',
      indicativeInfo: 'Instant digital policy issuance & renewal guidance',
      features: [
        'Comprehensive own-damage + third-party protection',
        'Zero depreciation & roadside assistance add-ons',
        'No Claim Bonus (NCB) transfer assistance',
        'Multi-insurer policy comparison',
        'Instant digital renewal support',
        'Cashless garage network guidance'
      ],
      disclaimer: 'Insurance coverage, premium, and claims are subject to the terms and conditions of the underwriting insurer.'
    },
    {
      id: 'health-insurance',
      slug: 'health-insurance',
      title: 'Health Insurance',
      category: 'Medical Protection',
      icon: HeartHandshake,
      imageUrl: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80',
      desc: 'Individual and family health coverage options protecting against unexpected hospitalization, medical treatments, and critical illnesses.',
      indicativeInfo: 'Cashless hospital network & family floater plans',
      features: [
        'Individual and family floater coverage options',
        'Cashless hospitalization network comparison',
        'Pre & post-hospitalization expense coverage',
        'Daycare procedures & modern treatment inclusion',
        'Pre-existing disease waiting period guidance',
        'Tax benefit assistance under Section 80D'
      ],
      disclaimer: 'Policy terms, exclusions, waiting periods, and claim settlements are subject to insurer guidelines.'
    },
    {
      id: 'travel-insurance',
      slug: 'travel-insurance',
      title: 'Travel Insurance',
      category: 'Global & Domestic Travel',
      icon: Plane,
      imageUrl: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
      desc: 'Protection for international and domestic travels covering medical emergencies abroad, trip cancellations, and lost luggage.',
      indicativeInfo: 'Schengen & worldwide coverage options available',
      features: [
        'Emergency medical expenses and evacuation abroad',
        'Passport loss and checked baggage delay coverage',
        'Flight cancellation and trip interruption protection',
        'Schengen visa compliant insurance options',
        'Single-trip and multi-trip annual plans',
        '24x7 worldwide emergency assistance support'
      ],
      disclaimer: 'Travel cover limits, deductibles, and claim verification are governed by the respective policy wording.'
    },
    {
      id: 'home-insurance',
      slug: 'home-insurance',
      title: 'Home & Property Insurance',
      category: 'Residential Asset Protection',
      icon: Home,
      imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      desc: 'Coverage for residential buildings and household contents against fire, natural calamities, burglary, and electrical breakdown.',
      indicativeInfo: 'Structure and household content coverage options',
      features: [
        'Building structure protection against fire & storm',
        'Household appliances, electronics & furniture cover',
        'Burglary and theft protection options',
        'Alternative accommodation expense support',
        'Transparent documentation and valuation support',
        'Multi-year residential coverage possibilities'
      ],
      disclaimer: 'Covered perils and claim assessments are subject to survey and underwriting policy guidelines.'
    },
    {
      id: 'shop-insurance',
      slug: 'shop-insurance',
      title: 'Shop & Commercial Insurance',
      category: 'Business Asset Protection',
      icon: Store,
      imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
      desc: 'Comprehensive protection packages for retail shops, commercial establishments, warehouses, and merchandise stock.',
      indicativeInfo: 'Stock, furniture & public liability coverage',
      features: [
        'Shop premises and merchandise stock cover',
        'Burglary, housebreaking & cash-in-safe protection',
        'Plate glass & neon sign damage options',
        'Public liability coverage for visitor safety',
        'Machinery breakdown and business interruption',
        'Documentation assistance for commercial claims'
      ],
      disclaimer: 'Insurance coverage, policy terms and exclusions are subject to underwriting guidelines of the insurer.'
    },
    {
      id: 'fixed-deposits',
      slug: 'fixed-deposits',
      title: 'Fixed Deposit Solutions',
      category: 'Secure Savings Guidance',
      icon: Coins,
      imageUrl: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80',
      desc: 'Guidance on corporate and banking fixed deposits with flexible tenures, periodic payout options, and comparative insights.',
      indicativeInfo: 'Indicative rate comparison across institutional tenures',
      features: [
        'Tenure options ranging from 12 months to 5 years',
        'Cumulative and periodic interest payout alternatives',
        'Senior citizen additional indicative benefits',
        'Credit rating comparison (AAA / AA+ rated entities)',
        'Digital application and documentation support',
        'Maturity and renewal planning assistance'
      ],
      disclaimer: 'Fixed deposit interest rates are indicative and subject to change by issuing institutions. AVRX does not guarantee returns.'
    }
  ];

  // Comparison Tabs Data
  const comparisonCategories: Record<string, { title: string; desc: string; services: string[] }> = {
    personal: {
      title: 'Personal Financial Solutions',
      desc: 'Solutions designed for individual credit, emergency funding, and personal milestones.',
      services: ['Personal Loan', 'Fixed Deposit Solutions', 'Health Insurance']
    },
    business: {
      title: 'Business & Enterprise Finance',
      desc: 'Capital support and risk mitigation for MSMEs, commercial traders, and growing businesses.',
      services: ['Business Loan', 'Government Subsidy Loans', 'Shop & Commercial Insurance']
    },
    vehicle: {
      title: 'Vehicle Finance & Protection',
      desc: 'Complete funding and insurance solutions for passenger and commercial vehicles.',
      services: ['Car Loan (New & Used)', 'Motor Insurance']
    },
    property: {
      title: 'Property & Real Estate Finance',
      desc: 'Mortgage, home construction funding, and residential asset protection.',
      services: ['Home / Property Loan', 'Home & Property Insurance']
    },
    protection: {
      title: 'Protection & Insurance Portfolio',
      desc: 'Risk coverage across health, mobility, travel, and commercial premises.',
      services: ['Health Insurance', 'Motor Insurance', 'Travel Insurance', 'Home & Property Insurance', 'Shop & Commercial Insurance']
    },
    savings: {
      title: 'Savings & Term Investments',
      desc: 'Guidance on structured tenure options with regulated institutions.',
      services: ['Fixed Deposit Solutions']
    }
  };

  // Document Checklist Categories
  const documentCategories: Record<string, { label: string; items: string[] }> = {
    identity: {
      label: 'Identity Proof',
      items: [
        'Aadhaar Card (Front & Back with verified mobile number)',
        'Permanent Account Number (PAN Card)',
        'Valid Passport or Voter ID Card (where applicable)'
      ]
    },
    address: {
      label: 'Address Proof',
      items: [
        'Latest Electricity or Water Utility Bill (under 2 months old)',
        'Registered Rent Agreement / Lease Deed with Utility Bill',
        'Property Tax Receipt or Municipal Allotment Letter'
      ]
    },
    income: {
      label: 'Income Documents',
      items: [
        'Last 3 to 6 months Salary Slips (for salaried individuals)',
        'Latest Form 16 / Income Tax Returns (ITR) with computation',
        'Audited Financials (P&L & Balance Sheet for self-employed)'
      ]
    },
    banking: {
      label: 'Banking Records',
      items: [
        'Last 6 to 12 months Bank Account Statements (Official PDF / E-statement)',
        'Cancelled Cheque with printed applicant name for mandate setup',
        'Existing loan repayment track records (if balance transfer)'
      ]
    },
    business: {
      label: 'Business Proofs',
      items: [
        'GST Registration Certificate & 12-Month GST Returns',
        'Udyam MSME Registration Certificate',
        'Partnership Deed / Certificate of Incorporation & MOA/AOA',
        'Detailed Project Report (DPR) for government subsidy schemes'
      ]
    }
  };

  // Why Choose AVRX 6 Cards
  const whyChooseAvrx = [
    {
      icon: Layers,
      title: 'Multiple Solution Categories',
      desc: 'Access guidance across personal credit, business financing, property mortgages, and multi-line insurance under one roof.'
    },
    {
      icon: Compass,
      title: 'Requirement-Based Guidance',
      desc: 'We analyze your specific requirements, profile stability, and timeline to suggest relevant institutional options.'
    },
    {
      icon: FileText,
      title: 'Documentation Assistance',
      desc: 'We assist with document formatting, salary slip verification, GST report structuring, and DPR preparation.'
    },
    {
      icon: ShieldCheck,
      title: 'Transparent & Compliant Process',
      desc: 'Clear communication with zero false guarantees, no upfront hidden charges, and total adherence to lender guidelines.'
    },
    {
      icon: UserCheck,
      title: 'Customer-Centric Approach',
      desc: 'Dedicated financial advisors walking you through application stages, verification calls, and disbursal milestones.'
    },
    {
      icon: CheckCheck,
      title: 'End-to-End Assistance',
      desc: 'Continuous follow-up from initial consultation through document submission and final status updates.'
    }
  ];

  // 6-Step Workflow Timeline
  const workflowSteps = [
    {
      num: '01',
      title: 'Tell Us Your Requirement',
      desc: 'Submit your requirement (loan, insurance, or subsidy) along with preliminary profile details.'
    },
    {
      num: '02',
      title: 'Profile Understanding',
      desc: 'Our financial advisors evaluate your income type, credit history, and document readiness.'
    },
    {
      num: '03',
      title: 'Explore Available Options',
      desc: 'We present relevant institutional options, indicative tenures, and process requirements.'
    },
    {
      num: '04',
      title: 'Document Assembly',
      desc: 'We assist in gathering KYC, banking, GST, and project documents for lender submission.'
    },
    {
      num: '05',
      title: 'Application Processing',
      desc: 'Application is submitted to the chosen partner institution for official verification.'
    },
    {
      num: '06',
      title: 'Status & Follow-Up',
      desc: 'We track verification calls, property valuations, and coordinate until resolution.'
    }
  ];

  // FAQs
  const financialFaqs = [
    {
      q: 'How do I know which financial solution is suitable for me?',
      a: 'Our team evaluates your current requirement, monthly income, existing financial commitments, and business vintage to suggest suitable options. For instance, short-term personal needs align with personal loans, while capital expansion suits business credit or government-linked schemes.'
    },
    {
      q: 'What basic documents may be required for loan assistance?',
      a: 'Standard requirements typically include KYC documents (PAN, Aadhaar), address proof, 6 months bank statements, and income verification (salary slips and Form 16 for salaried; 2-3 years ITR and GST returns for business owners).'
    },
    {
      q: 'How is loan eligibility determined by lending institutions?',
      a: 'Lenders assess eligibility based on monthly net disposable income, CIBIL/credit score, employment stability, debt-to-income ratio (FOIR), business vintage, and property title clarity (for secured loans).'
    },
    {
      q: 'How long does the loan application and processing take?',
      a: 'Personal loans and car loans are typically processed within 2 to 5 business days. Business loans, secured mortgage loans (LAP), and government subsidy schemes (PMEGP) may take 7 to 20 business days due to documentation verification, project evaluation, and physical surveys.'
    },
    {
      q: 'Can I apply for a business loan as a new startup or MSME?',
      a: 'Yes. Existing businesses with 1+ years of GST returns can explore unsecured business credit. For new ventures and artisans, government-backed schemes like PMEGP or Mudra provide structured capital options subject to project feasibility and institutional approval.'
    },
    {
      q: 'What is the difference between new car and used car financing?',
      a: 'New car loans generally offer higher funding (up to 85-90% of on-road value) and lower interest rates with tenures up to 7 years. Used car loans depend on the vehicle’s valuation and age, usually covering up to 70-80% of valuation with tenures up to 5 years.'
    },
    {
      q: 'What types of insurance solutions does AVRX assist with?',
      a: 'We provide comparative assistance for Comprehensive Motor Insurance, Health Insurance (Individual & Family Floater), Schengen & International Travel Insurance, Home/Property Insurance, and Commercial Shop Package Policies.'
    },
    {
      q: 'Does AVRX guarantee loan approval or government subsidies?',
      a: 'No. AVRX is a digital advisory and documentation assistance platform. Final loan sanctions, interest rates, tenure, subsidy disbursement, and insurance claim approvals are strictly determined by the respective banks, NBFCs, government bodies, and insurance underwriters.'
    },
    {
      q: 'Are interest rates fixed or floating for loans?',
      a: 'This depends on the product and lender. Personal and auto loans are commonly offered on fixed or semi-fixed rates, whereas home loans and long-term property mortgages are predominantly linked to floating benchmark rates (EBLR/RLLR).'
    },
    {
      q: 'What factors determine my insurance premium?',
      a: 'For motor insurance, premium is based on vehicle IDV, cubic capacity, geographical zone, and age. For health insurance, factors include age of members, sum insured, pre-existing conditions, and city tier.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#050811] text-white pt-24 pb-20 selection:bg-cyan-500 selection:text-slate-950">
      <SEO
        title="Financial Solutions & Loan Guidance | Personal, Business & Property Finance | AVRX"
        description="Explore practical financial and insurance solutions with guidance designed around your requirements. Personal loans, business capital, car loans, property loans, and subsidy assistance."
      />

      {/* Main Container - Stretched Widescreen Layout */}
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="pt-4 pb-6 flex items-center gap-2 text-xs text-slate-400">
          <button 
            onClick={() => onNavigate('home')}
            className="hover:text-cyan-400 transition-colors"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-emerald-400 font-semibold">Financial Solutions</span>
        </nav>

        {/* 1. HERO — FINANCIAL SOLUTIONS */}
        <section className="relative my-8 lg:my-12">
          
          {/* Background Ambient Glows */}
          <div className="absolute -top-10 left-1/4 w-[600px] h-[350px] bg-emerald-500/[0.08] blur-[150px] pointer-events-none" />
          <div className="absolute top-20 right-1/4 w-[500px] h-[300px] bg-cyan-600/[0.08] blur-[150px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center">
            
            {/* Left Side Copy & CTAs */}
            <div className="lg:col-span-6 space-y-6 text-left">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(16,185,129,0.15)]">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                <span>AVRX FINANCIAL SOLUTIONS</span>
              </div>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black tracking-tight text-white leading-[1.1]">
                Financial Solutions Built Around <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">Your Goals.</span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
                Explore practical financial and insurance solutions with guidance designed around your requirements.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#overview-section"
                  className="px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 text-slate-950 font-black text-sm shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:scale-105 transition flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Financial Solutions</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  onClick={() => handleOpenFormWithSolution('General Financial Advisory')}
                  className="px-7 py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-white font-bold text-xs sm:text-sm transition flex items-center gap-2 cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>Talk to an Expert</span>
                </button>
              </div>

              {/* Quick Trust Highlights */}
              <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-3 text-left">
                <div className="space-y-0.5">
                  <div className="text-lg font-black text-emerald-400 font-mono">11+</div>
                  <div className="text-[11px] text-slate-400 font-medium">Service Categories</div>
                </div>
                <div className="space-y-0.5">
                  <div className="text-lg font-black text-cyan-400 font-mono">100%</div>
                  <div className="text-[11px] text-slate-400 font-medium">Documentation Support</div>
                </div>
                <div className="space-y-0.5">
                  <div className="text-lg font-black text-amber-400 font-mono">Transparent</div>
                  <div className="text-[11px] text-slate-400 font-medium">Lender Direct Process</div>
                </div>
              </div>

            </div>

            {/* Right Side: Animated Financial Visual with Dynamic Card Stack */}
            <div className="lg:col-span-6 relative">
              
              {/* Outer Decorative Glow Ring */}
              <div className="absolute -inset-1.5 rounded-[32px] bg-gradient-to-r from-emerald-500/30 to-cyan-500/30 blur-2xl opacity-50" />

              {/* Container Frame */}
              <div className="relative rounded-3xl bg-slate-950 border border-slate-800 p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.8)] space-y-6">
                
                {/* Visual Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                      <Landmark className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono uppercase tracking-wider text-slate-400">Financial Ecosystem</div>
                      <div className="text-base font-black text-white">Advisory & Protection Desk</div>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                    Active Guidance
                  </span>
                </div>

                {/* Main Hero Card Stack (Rotating Preview) */}
                <div className="relative h-44 sm:h-52 w-full rounded-2xl overflow-hidden bg-slate-900/90 border border-slate-800 p-5 flex flex-col justify-between transition-all duration-500">
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {React.createElement(heroCardStack[heroCardIndex].icon, { className: 'w-5 h-5 text-emerald-400' })}
                      <span className="text-lg font-black text-white">{heroCardStack[heroCardIndex].title}</span>
                    </div>

                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-slate-950 text-cyan-300 border border-slate-700">
                      {heroCardStack[heroCardIndex].tag}
                    </span>
                  </div>

                  <div className="text-xs text-slate-300">
                    Comprehensive documentation guidance and institutional eligibility review designed around your financial milestones.
                  </div>

                  {/* Indicator Dots */}
                  <div className="flex items-center justify-between pt-3 border-t border-slate-800/80">
                    <div className="flex items-center gap-1.5">
                      {heroCardStack.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setHeroCardIndex(idx)}
                          className={`h-1.5 rounded-full transition-all ${
                            heroCardIndex === idx ? 'w-6 bg-emerald-400' : 'w-2 bg-slate-700'
                          }`}
                          aria-label={`Slide ${idx + 1}`}
                        />
                      ))}
                    </div>

                    <div className="text-[10px] font-mono text-slate-400">
                      Card {heroCardIndex + 1} of {heroCardStack.length}
                    </div>
                  </div>

                </div>

                {/* Sub-grid of Financial Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
                    <div className="text-[10px] uppercase font-mono text-slate-400">Documentation</div>
                    <div className="text-sm font-bold text-white">Full Assistance</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
                    <div className="text-[10px] uppercase font-mono text-slate-400">Institutions</div>
                    <div className="text-sm font-bold text-emerald-400">Banks & NBFCs</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 space-y-1 col-span-2 sm:col-span-1">
                    <div className="text-[10px] uppercase font-mono text-slate-400">Compliance</div>
                    <div className="text-sm font-bold text-cyan-400">Zero Hidden Cost</div>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* 2. QUICK TRUST STRIP */}
        <section className="my-10">
          <div className="rounded-2xl bg-gradient-to-r from-slate-900/90 via-[#07191d] to-slate-900/90 border border-emerald-500/20 p-4 sm:p-5 shadow-lg">
            <div className="flex flex-wrap items-center justify-around gap-4 text-xs sm:text-sm font-bold text-slate-200">
              
              <div className="flex items-center gap-2 text-emerald-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Transparent Assistance</span>
              </div>

              <div className="w-1 h-1 rounded-full bg-slate-700 hidden sm:block" />

              <div className="flex items-center gap-2 text-cyan-300">
                <Layers className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Multiple Financial Options</span>
              </div>

              <div className="w-1 h-1 rounded-full bg-slate-700 hidden sm:block" />

              <div className="flex items-center gap-2 text-amber-300">
                <FileText className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Documentation Support</span>
              </div>

              <div className="w-1 h-1 rounded-full bg-slate-700 hidden sm:block" />

              <div className="flex items-center gap-2 text-purple-300">
                <UserCheck className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Customer Focused</span>
              </div>

            </div>
          </div>
        </section>

        {/* Statutory Compliance Notice Banner */}
        <section className="my-6">
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-amber-500/30 text-slate-300 text-xs flex items-start gap-3">
            <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <strong className="text-amber-300 font-semibold">Regulatory Disclosure: </strong>
              Loan eligibility, interest rates, tenure, sanction amounts, and processing timelines are strictly determined by respective lending institutions and underwriting policies. AVRX operates as a digital facilitator and does not guarantee loan approval or government subsidies.
            </div>
          </div>
        </section>

        {/* 3. OUR PARTNERS SLIDER */}
        <section className="my-12">
          <PartnersSlider 
            title="Our Trusted Banking & Insurance Alliances"
            badgeText="FINANCIAL NETWORK"
            description="Facilitating access through established banks, NBFCs, and certified general insurance partners."
            variant="compact"
          />
        </section>

        {/* 4. FINANCIAL SOLUTIONS OVERVIEW (11 CARDS GRID) */}
        <section id="overview-section" className="my-20 space-y-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <Coins className="w-3.5 h-3.5 text-emerald-400" />
              <span>COMPREHENSIVE CATALOG</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Explore Our Financial Solutions
            </h2>
            <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
              From personal capital and business growth funds to asset protection and term deposits, find the right solution for your financial path.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allFinancialServices.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="rounded-3xl bg-slate-900/80 border border-slate-800/90 hover:border-emerald-500/50 flex flex-col justify-between overflow-hidden group transition-all duration-300 hover:shadow-[0_15px_40px_rgba(16,185,129,0.12)] hover:-translate-y-1"
                >
                  {/* Card Image Header */}
                  <div className="relative h-44 w-full overflow-hidden bg-slate-950">
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-700/80 text-[10px] font-mono font-bold text-emerald-300">
                        {service.category}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-4 right-4 flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-slate-900/90 text-emerald-400 shrink-0 border border-slate-700">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-lg font-black text-white group-hover:text-emerald-300 transition-colors line-clamp-1">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 space-y-4 flex-grow flex flex-col justify-between">
                    <div className="space-y-3">
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {service.desc}
                      </p>

                      <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800/80 text-[11px] text-emerald-400 font-mono">
                        {service.indicativeInfo}
                      </div>

                      {/* Feature Bullet Points */}
                      <div className="space-y-1.5 pt-2 border-t border-slate-800">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Key Features:</div>
                        {service.features.slice(0, 4).map((feat, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                            <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-4 border-t border-slate-800 space-y-2">
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => onNavigate('service-detail', service.slug)}
                          className="w-full py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white font-bold text-xs transition"
                        >
                          View Details
                        </button>

                        <button
                          onClick={() => handleOpenFormWithSolution(service.title)}
                          className="w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-500 text-slate-950 font-black text-xs transition shadow-sm hover:scale-105"
                        >
                          Enquire Now
                        </button>
                      </div>

                      <div className="text-[9px] text-slate-500 italic line-clamp-1">
                        *Subject to eligibility and lender criteria
                      </div>
                    </div>

                  </div>

                </div>
              );
            })}
          </div>

        </section>

        {/* 9. GOVERNMENT SUBSIDY LOANS (SPECIAL HIGHLIGHTED SECTION) */}
        <section className="my-24 rounded-3xl bg-gradient-to-br from-[#061b17] via-[#040f13] to-slate-950 border border-emerald-500/40 p-6 sm:p-12 lg:p-14 shadow-2xl relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-[500px] h-[300px] bg-emerald-500/[0.08] blur-[120px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                <Landmark className="w-3.5 h-3.5 text-emerald-400" />
                <span>SPECIAL ENTERPRISE INITIATIVE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Explore Government-Linked <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                  Business Finance Options.
                </span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Take advantage of structured credit guidance under state and central entrepreneurship programs, including PMEGP (Prime Minister’s Employment Generation Programme), MUDRA schemes, and MSME credit support.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
                  <div className="font-bold text-emerald-400">PMEGP Scheme</div>
                  <div className="text-slate-400 text-[11px]">Subsidies up to 25% - 35% on project cost*</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
                  <div className="font-bold text-cyan-400">MUDRA Loans</div>
                  <div className="text-slate-400 text-[11px]">Shishu, Kishore & Tarun (up to ₹10 Lakhs)*</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
                  <div className="font-bold text-amber-400">CGTMSE Cover</div>
                  <div className="text-slate-400 text-[11px]">Collateral-free credit guarantee assistance*</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/90 border border-emerald-500/30 text-xs text-slate-300 space-y-1">
                <div className="font-bold text-emerald-300 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>How AVRX Assists Your Application:</span>
                </div>
                <div className="text-slate-400 text-[11px] leading-relaxed">
                  We assist with Detailed Project Report (DPR) formatting, EDP certificate guidance, online portal application submission, and bank appraisal coordination.
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => handleOpenFormWithSolution('Government Subsidy Loan (PMEGP/Mudra)')}
                  className="px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-400 to-teal-500 text-slate-950 font-black text-sm transition shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:scale-105 flex items-center gap-2 cursor-pointer"
                >
                  <span>Check Eligibility</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* Visual Side */}
            <div className="lg:col-span-5 relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1000&q=80"
                alt="Government Scheme Loan Guidance"
                referrerPolicy="no-referrer"
                className="w-full h-72 sm:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-950/90 backdrop-blur-md border border-slate-800 text-xs space-y-1">
                <div className="font-bold text-amber-300 font-mono">// STATUTORY COMPLIANCE MANDATE</div>
                <div className="text-[11px] text-slate-400 leading-relaxed">
                  Eligibility and approval are subject to applicable government rules, lender criteria and documentation. Subsidy sanction is not guaranteed.
                </div>
              </div>
            </div>

          </div>

        </section>

        {/* 12. FINANCIAL COMPARISON SECTION (INTERACTIVE TABS) */}
        <section className="my-24 space-y-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <SlidersHorizontal className="w-3.5 h-3.5 text-cyan-400" />
              <span>DECISION MATRIX</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Which Solution Fits Your Requirement?
            </h2>
            <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
              Select your objective below to filter through the most relevant financial and protection instruments.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {Object.keys(comparisonCategories).map((key) => (
              <button
                key={key}
                onClick={() => setActiveComparisonTab(key)}
                className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold uppercase tracking-wider transition ${
                  activeComparisonTab === key
                    ? 'bg-gradient-to-r from-emerald-400 to-teal-500 text-slate-950 shadow-[0_0_20px_rgba(16,185,129,0.4)] scale-105'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {key}
              </button>
            ))}
          </div>

          {/* Active Tab Content Card */}
          <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-10 shadow-2xl max-w-5xl mx-auto space-y-6">
            <div>
              <h3 className="text-2xl font-black text-white">{comparisonCategories[activeComparisonTab].title}</h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">{comparisonCategories[activeComparisonTab].desc}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              {comparisonCategories[activeComparisonTab].services.map((serviceName, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 flex flex-col justify-between">
                  <div>
                    <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-2">
                      <Check className="w-4 h-4" />
                    </div>
                    <h4 className="text-base font-bold text-white">{serviceName}</h4>
                    <p className="text-xs text-slate-400 mt-1">Structured guidance & eligibility assistance available.</p>
                  </div>

                  <button
                    onClick={() => handleOpenFormWithSolution(serviceName)}
                    className="w-full py-2 rounded-xl bg-slate-900 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-bold transition"
                  >
                    Enquire for {serviceName}
                  </button>
                </div>
              ))}
            </div>
          </div>

        </section>

        {/* 16. FINANCIAL CALCULATOR SECTION (LOAN EMI CALCULATOR) */}
        <section className="my-24 space-y-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <Calculator className="w-3.5 h-3.5 text-amber-400" />
              <span>REAL-TIME ESTIMATION</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Interactive Loan EMI Calculator
            </h2>
            <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
              Estimate your monthly repayment installment, total interest, and total payable amount with our interactive sliders.
            </p>
          </div>

          <div className="max-w-5xl mx-auto rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-10 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Sliders Input Area */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Loan Amount Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-bold">
                    <span className="text-slate-400 uppercase">Loan Amount (₹)</span>
                    <span className="text-emerald-400 text-lg font-mono">₹{loanAmount.toLocaleString('en-IN')}</span>
                  </div>
                  <input
                    type="range"
                    min="50000"
                    max="10000000"
                    step="50000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                    <span>₹50,000</span>
                    <span>₹50 Lakh</span>
                    <span>₹1 Crore</span>
                  </div>
                </div>

                {/* Interest Rate Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-bold">
                    <span className="text-slate-400 uppercase">Indicative Interest Rate (% p.a.)</span>
                    <span className="text-cyan-400 text-lg font-mono">{interestRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="7"
                    max="24"
                    step="0.25"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                    <span>7%</span>
                    <span>14%</span>
                    <span>24%</span>
                  </div>
                </div>

                {/* Tenure Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-bold">
                    <span className="text-slate-400 uppercase">Tenure (Years)</span>
                    <span className="text-amber-400 text-lg font-mono">{tenureYears} Years ({tenureYears * 12} Mo)</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="30"
                    step="1"
                    value={tenureYears}
                    onChange={(e) => setTenureYears(Number(e.target.value))}
                    className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-amber-400"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                    <span>1 Year</span>
                    <span>15 Years</span>
                    <span>30 Years</span>
                  </div>
                </div>

              </div>

              {/* Output Display Card */}
              <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4 text-center">
                <div className="text-xs uppercase font-mono text-slate-400">Estimated Monthly EMI</div>
                <div className="text-4xl font-black text-emerald-400 font-mono">
                  ₹{emiResult.monthlyEmi.toLocaleString('en-IN')}
                </div>

                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-800 text-left text-xs">
                  <div>
                    <div className="text-slate-500 text-[10px]">Total Interest:</div>
                    <div className="font-bold text-white font-mono">₹{emiResult.totalInterest.toLocaleString('en-IN')}</div>
                  </div>
                  <div>
                    <div className="text-slate-500 text-[10px]">Total Payment:</div>
                    <div className="font-bold text-cyan-400 font-mono">₹{emiResult.totalPayable.toLocaleString('en-IN')}</div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => handleOpenFormWithSolution(`Loan Inquiry for ₹${loanAmount.toLocaleString('en-IN')}`)}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-500 text-slate-950 font-bold text-xs transition hover:scale-105"
                  >
                    Apply with This Estimation
                  </button>
                </div>

                <div className="text-[10px] text-slate-500 italic">
                  *This is an indicative calculation and not a formal loan offer. Actual terms are subject to lender sanction.
                </div>

              </div>

            </div>
          </div>

        </section>

        {/* 15. DOCUMENT CHECKLIST (INTERACTIVE CATEGORIES) */}
        <section className="my-24 space-y-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-wider">
              <FileText className="w-3.5 h-3.5 text-purple-400" />
              <span>TRANSPARENT REQUIREMENTS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              What Documents May Be Required?
            </h2>
            <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
              Exact requirements vary by product, lender/provider and applicant profile. Here is the general checklist.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {/* Checklist Category Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {Object.entries(documentCategories).map(([key, data]) => (
                <button
                  key={key}
                  onClick={() => setActiveDocTab(key)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition ${
                    activeDocTab === key
                      ? 'bg-emerald-400 text-slate-950 shadow-md font-black'
                      : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {data.label}
                </button>
              ))}
            </div>

            {/* Checklist Items Container */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Required for {documentCategories[activeDocTab].label}:
              </div>
              <div className="space-y-2.5">
                {documentCategories[activeDocTab].items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="text-[11px] text-slate-500 italic pt-2">
                *Note: Additional documentation such as property title deeds, CA certifications, or guarantor proofs may be requested based on specific institutional mandates.
              </div>
            </div>
          </div>

        </section>

        {/* 13. WHY CHOOSE AVRX (6 PREMIUM CARDS) */}
        <section className="my-24 space-y-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>THE AVRX PROMISE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Why Choose AVRX for Financial Solutions?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseAvrx.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div 
                  key={idx}
                  className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-3 hover:border-emerald-500/40 transition hover:shadow-lg"
                >
                  <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 text-emerald-400 w-fit">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{card.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{card.desc}</p>
                </div>
              );
            })}
          </div>

        </section>

        {/* 14. HOW IT WORKS (6-STEP TIMELINE) */}
        <section className="my-24 space-y-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              <span>STRUCTURED WORKFLOW</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              How the Consultation Process Works
            </h2>
            <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
              Step-by-step assistance ensuring clarity, compliance, and timely updates at every milestone.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {workflowSteps.map((step, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 hover:border-emerald-500/40 transition flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-mono font-black text-xs">
                    {step.num}
                  </div>
                  <h3 className="text-base font-bold text-white">{step.title}</h3>
                  <p className="text-[11px] text-slate-400 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </section>

        {/* 17. FINANCIAL FAQ ACCORDION */}
        <section className="my-24 max-w-4xl mx-auto space-y-8">
          
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5 text-purple-400" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Financial Solutions & Eligibility FAQs
            </h2>
          </div>

          <div className="space-y-3">
            {financialFaqs.map((faq, idx) => (
              <div 
                key={idx}
                className="border border-slate-800 rounded-2xl overflow-hidden bg-slate-900/80"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left font-bold text-xs sm:text-sm text-slate-200 flex items-center justify-between gap-3 hover:text-emerald-300 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-emerald-400 shrink-0 transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {activeFaq === idx && (
                  <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-slate-300 border-t border-slate-800/80 pt-3 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </section>

        {/* 18. FINAL CTA */}
        <section className="my-20 rounded-3xl bg-gradient-to-r from-[#07241d] via-[#041416] to-[#040f1a] border border-emerald-500/40 p-8 sm:p-14 text-center space-y-6 relative overflow-hidden shadow-[0_20px_60px_rgba(16,185,129,0.15)]">
          
          <div className="max-w-3xl mx-auto space-y-3 relative z-10">
            <h3 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Let's Find the Right Financial Solution for You
            </h3>
            <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
              Tell us what you need and our team can help you understand the available options.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 relative z-10">
            <button
              onClick={() => handleOpenFormWithSolution('General Financial Inquiry')}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 text-slate-950 font-black text-sm shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:scale-105 transition flex items-center gap-2 cursor-pointer"
            >
              <span>Start Your Enquiry</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className="px-7 py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-white font-bold text-xs sm:text-sm transition flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Talk to AVRX</span>
            </button>
          </div>

        </section>

        {/* 19. PARTNERS SLIDER (SECOND TRUST POINT) */}
        <section className="my-14">
          <PartnersSlider 
            title="Our Financial & Business Network"
            badgeText="INSTITUTIONAL ALLIANCES"
            description="Empowering clients with compliant, direct channel access to regulated financial entities."
            variant="compact"
          />
        </section>

      </div>

      {/* Interactive Consultation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 max-w-lg w-full space-y-6 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div>
                <h3 className="text-xl font-black text-white">Financial Consultation Request</h3>
                <p className="text-xs text-slate-400">Selected Product: <span className="text-emerald-400 font-bold">{selectedSolution}</span></p>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-white text-xl"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Hidden Honeypot */}
              <input
                type="text"
                name="website_hp"
                value={formData.website_hp}
                onChange={e => setFormData({ ...formData, website_hp: e.target.value })}
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />

              {errorMessage && (
                <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs">
                  {errorMessage}
                </div>
              )}

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300 uppercase">Your Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Anand Sharma"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300 uppercase">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-400"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300 uppercase">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="anand@example.com"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300 uppercase">Employment Type</label>
                  <select
                    value={formData.employmentType}
                    onChange={e => setFormData({ ...formData, employmentType: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-400"
                  >
                    <option value="Salaried">Salaried Employee</option>
                    <option value="Self-Employed Professional">Self-Employed Professional</option>
                    <option value="Business Owner / MSME">Business Owner / MSME</option>
                    <option value="Freelancer / Consultant">Freelancer / Consultant</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300 uppercase">Approx Amount / Sum</label>
                  <input
                    type="text"
                    value={formData.loanAmount}
                    onChange={e => setFormData({ ...formData, loanAmount: e.target.value })}
                    placeholder="e.g. ₹10 Lakhs"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-400"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300 uppercase">City & State</label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={e => setFormData({ ...formData, city: e.target.value })}
                  placeholder="e.g. Ahmedabad, Gujarat"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-400"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300 uppercase">Additional Requirements / Query</label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={e => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Mention current CIBIL score, existing loans, or specific requirements..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-emerald-400"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-gradient-to-r from-emerald-400 to-teal-500 text-slate-950 font-black text-sm rounded-xl transition shadow-lg hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer"
              >
                {loading ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Submitting Consultation...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Request Expert Guidance</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Submission Feedback Modal */}
      <SubmissionFeedbackModal
        isOpen={feedback.isOpen}
        type={feedback.type}
        leadId={feedback.leadId}
        message={feedback.message}
        onClose={() => setFeedback(prev => ({ ...prev, isOpen: false }))}
        onRetry={() => setFeedback(prev => ({ ...prev, isOpen: false }))}
      />

    </div>
  );
};
