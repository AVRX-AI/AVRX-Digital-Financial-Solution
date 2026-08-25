import React, { useState, useEffect } from 'react';
import { MagneticCard } from '../components/common/MagneticCard';
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
  CheckCheck,
  Bike,
  Users,
  Sprout,
  Fingerprint,
  Gem,
  Banknote,
  CreditCard
} from 'lucide-react';

interface FinancialSolutionsPageProps {
  onNavigate: (page: string, slug?: string) => void;
}

export const FinancialSolutionsPage: React.FC<FinancialSolutionsPageProps> = ({ onNavigate }) => {
  // Modal & Consultation States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSolution, setSelectedSolution] = useState<string>('Personal Loan');
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [activeComparisonTab, setActiveComparisonTab] = useState<string>('gold');
  const [activeDocTab, setActiveDocTab] = useState<string>('identity');

  // Hero Card Stack Animation Index
  const [heroCardIndex, setHeroCardIndex] = useState(0);
  const heroCardStack = [
    { title: 'Gold Loan (30 Mins)', icon: Coins, tag: 'Instant Cash', color: 'from-amber-500/20 to-yellow-500/20', border: 'border-amber-500/40' },
    { title: 'Loan Against Property', icon: Building2, tag: 'Up to ₹5 Cr', color: 'from-blue-500/20 to-cyan-500/20', border: 'border-blue-500/40' },
    { title: '2/3 Wheeler Loan', icon: Bike, tag: 'Bike, EV & Auto', color: 'from-emerald-500/20 to-teal-500/20', border: 'border-emerald-500/40' },
    { title: 'Self Help / Group Loan', icon: Users, tag: 'SHG / JLG Microfinance', color: 'from-purple-500/20 to-pink-500/20', border: 'border-purple-500/40' },
    { title: 'Instant Online Loan', icon: Zap, tag: '15 Mins Direct Cash', color: 'from-cyan-500/20 to-blue-500/20', border: 'border-cyan-500/40' },
    { title: 'KCC Loan (Agri)', icon: Sprout, tag: '4% Subsidized Rate', color: 'from-lime-500/20 to-emerald-500/20', border: 'border-lime-500/40' },
    { title: 'Loan with Aadhaar & PAN', icon: Fingerprint, tag: '100% Paperless KYC', color: 'from-indigo-500/20 to-purple-500/20', border: 'border-indigo-500/40' },
    { title: 'Business Capital', icon: Briefcase, tag: 'MSME & OD Limits', color: 'from-teal-500/20 to-cyan-500/20', border: 'border-teal-500/40' },
    { title: 'Govt Subsidy (PMEGP)', icon: Landmark, tag: 'Subsidies to 35%', color: 'from-rose-500/20 to-pink-500/20', border: 'border-rose-500/40' }
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
    solutionType: 'Gold Loan (Instant Cash)',
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
        solutionType: 'Gold Loan (Instant Cash)',
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

  // 13 Comprehensive Core Financial & Loan Solutions
  const allFinancialServices = [
    {
      id: 'gold-loan',
      slug: 'gold-loan',
      title: 'Gold Loan (Instant Cash Against Gold)',
      category: 'Instant Gold Collateral',
      icon: Coins,
      imageUrl: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=800&q=80',
      desc: 'Instant cash liquidity against gold jewelry with highest per-gram valuation, low interest rates, and zero income proof.',
      indicativeInfo: 'Instant cash in 30 mins | Up to 75% market valuation',
      features: [
        'Instant loan up to ₹1.5 Cr against 18k–24k gold jewelry',
        'Lowest interest rates starting from 8.50% p.a.',
        'Zero income proof or ITR required (KYC only)',
        '100% insured bank vault custody storage',
        'Flexible bullet, monthly interest or EMI repayment',
        'Zero prepayment or foreclosure penalties'
      ],
      disclaimer: 'Gold purity evaluation, valuation per gram, and loan-to-value (LTV) limits are governed by RBI norms.'
    },
    {
      id: 'mortgage-loan',
      slug: 'mortgage-loan',
      title: 'Mortgage Loan / Loan Against Property (LAP)',
      category: 'Secured Real Estate Equity',
      icon: Building2,
      imageUrl: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800&q=80',
      desc: 'Unlock high-value liquidity by leveraging residential, commercial, or industrial properties while retaining complete property ownership.',
      indicativeInfo: 'High sanction limits up to ₹5 Crores | Tenures to 15 Years',
      features: [
        'High sanction limits up to ₹5 Crores at lowest rates',
        'Extended repayment tenures up to 15 years for low EMIs',
        'Accepted for residential houses, commercial shops & plots',
        'Retain 100% continuous usage and occupancy of property',
        'Drop-line overdraft (OD) & term loan facilities available',
        'End-to-end legal title clearance and technical appraisal'
      ],
      disclaimer: 'Property valuation, sanction limits and mortgage creation are subject to clear legal title and bank evaluation.'
    },
    {
      id: 'two-three-wheeler-loan',
      slug: 'two-three-wheeler-loan',
      title: '2/3 Wheeler Loan (Bike, Scooter & Auto/E-Rickshaw)',
      category: 'Vehicle & Green Mobility',
      icon: Bike,
      imageUrl: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80',
      desc: 'Affordable financing for two-wheelers, electric scooters, commercial autos, and e-rickshaws with minimal down payment.',
      indicativeInfo: 'Up to 95% on-road funding | Spot approval in 15 mins',
      features: [
        'Up to 95% on-road funding for bikes, scooters & EV 2-wheelers',
        'Commercial 3-wheeler auto-rickshaw & e-rickshaw financing',
        'Spot approvals within 15–30 minutes at authorized dealers',
        'Pocket-friendly EMIs with tenures from 12 to 48 months',
        'Special subsidized interest rates for electric green mobility',
        'Minimal documentation: Aadhaar + Bank Passbook / UPI'
      ],
      disclaimer: 'Down payment, on-road funding percentage and interest rates depend on vehicle model and borrower profile.'
    },
    {
      id: 'group-loan-shg',
      slug: 'group-loan-shg',
      title: 'Self Help / Group Loan (SHG & JLG Microfinance)',
      category: 'Community & Microfinance',
      icon: Users,
      imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
      desc: 'Collateral-free group loans and microfinance credit for Self-Help Groups (SHGs), Joint Liability Groups (JLGs), and women entrepreneurs.',
      indicativeInfo: 'Collateral-free group credit | Weekly / Monthly repayment',
      features: [
        'Collateral-free collective financing for groups of 4 to 20 members',
        'Dedicated funding for women SHGs (NRLM/SRLM aligned)',
        'Joint Liability Group (JLG) model for artisans & micro-traders',
        'Direct Benefit Transfer (DBT) to individual or group accounts',
        'Flexible repayment frequencies: weekly, fortnightly, or monthly',
        'Peer-guarantee structure with zero real estate security needed'
      ],
      disclaimer: 'Group credit sanction is subject to group cohesion, mutual guarantee terms, and microfinance institutional policies.'
    },
    {
      id: 'instant-online-loan',
      slug: 'instant-online-loan',
      title: 'Instant Online Loan (Digital Express Cash)',
      category: 'Digital Express Credit',
      icon: Zap,
      imageUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80',
      desc: '100% paperless digital loan with algorithmic pre-approval, Video KYC, and fund transfer directly to your bank in 15 minutes.',
      indicativeInfo: 'Disbursement in 15 mins | 100% paperless digital flow',
      features: [
        'Instant credit sanctions from ₹10,000 up to ₹5,00,000',
        '100% digital app/web journey with DigiLocker e-KYC',
        'Algorithmic credit decision within 3 to 5 minutes',
        'Direct instant NEFT/IMPS disbursement into your bank account',
        'Flexible tenures from 3 to 24 months with auto-debit',
        'Zero branch visits and transparent processing fees'
      ],
      disclaimer: 'Instant disbursement is subject to digital credit bureau verification and bank account name match.'
    },
    {
      id: 'kcc-loan',
      slug: 'kcc-loan',
      title: 'KCC Loan (Kisan Credit Card & Agri Finance)',
      category: 'Agricultural & Crop Credit',
      icon: Sprout,
      imageUrl: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80',
      desc: 'Subsidized agricultural credit at effective 4% p.a. interest for farmers, seasonal crop production, dairy, and farm equipment.',
      indicativeInfo: 'Effective 4% p.a.* with Govt Interest Subvention',
      features: [
        'Effective subsidized 4% p.a. interest on prompt repayment',
        'Credit limit based on agricultural land holding & crop scale',
        'Revolving 5-year credit limit with simple annual renewal',
        'Allied farming support: dairy, poultry, fisheries & equipment',
        'In-built PM Fasal Bima Yojana (PMFBY) crop damage cover',
        'Collateral-free credit up to ₹1.6 Lakhs (up to ₹2 Lakhs in tie-ups)'
      ],
      disclaimer: 'Subsidized interest rate is applicable upon prompt repayment as per Central Govt guidelines and land title verification.'
    },
    {
      id: 'aadhar-pan-loan',
      slug: 'aadhar-pan-loan',
      title: 'Loan with Aadhar & PAN (Paperless Quick Loan)',
      category: 'Instant KYC Credit',
      icon: Fingerprint,
      imageUrl: 'https://images.unsplash.com/photo-1556742049-0a67e557b63f?auto=format&fit=crop&w=800&q=80',
      desc: 'Fast unsecured credit solely using your Aadhaar Card and PAN Card with instant OTP-based verification and direct bank credit.',
      indicativeInfo: 'Zero physical paperwork | Instant OTP & DigiLocker e-KYC',
      features: [
        'Instant loan sanction using only Aadhaar card & PAN card',
        'No requirement of physical salary slips or heavy balance sheets',
        'Instant identity verification via DigiLocker & UIDAI OTP',
        'Loan amounts from ₹25,000 up to ₹7,50,000',
        'Direct disbursement to Aadhaar-seeded bank account',
        '100% secure, encrypted and RBI-authorized lending partner flow'
      ],
      disclaimer: 'Loan approval depends on digital credit bureau check and bank statement analysis where required.'
    },
    {
      id: 'personal-loan',
      slug: 'personal-loan',
      title: 'Personal Loan',
      category: 'Unsecured Credit',
      icon: UserCheck,
      imageUrl: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=800&q=80',
      desc: 'Unsecured credit solutions to meet personal requirements, emergency expenses, weddings, travel, or debt consolidation.',
      indicativeInfo: 'Flexible loan amounts from ₹50,000 up to ₹25 Lakhs',
      features: [
        'Flexible loan amount depending on eligibility',
        'Multiple lender options from 30+ top banks & NBFCs',
        'Documentation assistance & salary verification',
        'Transparent application guidance with zero hidden cost',
        'Personalized repayment tenure options (12 to 60 Months)',
        'Pre-application credit score & profile assessment'
      ],
      disclaimer: 'Loan approval, interest rate, amount and tenure are subject to lender criteria and credit evaluation.'
    },
    {
      id: 'business-loan',
      slug: 'business-loan',
      title: 'Business & Working Capital Loan',
      category: 'Commercial Capital',
      icon: Briefcase,
      imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      desc: 'Structured business funding for working capital, inventory replenishment, machinery purchase, and operational expansion.',
      indicativeInfo: 'Working capital & term loan solutions up to ₹1 Crore',
      features: [
        'Unsecured & secured business financing options',
        'GST & balance sheet documentation support',
        'Assistance for MSMEs, proprietorships & private firms',
        'Overdraft (OD) and Cash Credit (CC) limit facilities',
        'Custom repayment schedule aligned with cash flows',
        'Working capital requirement & project review'
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
      indicativeInfo: 'Up to 100% on-road financing for select profiles',
      features: [
        'Financing options for new & certified used vehicles',
        'Vehicle valuation & documentation guidance',
        'Eligibility assessment based on income profile',
        'Doorstep document collection and rapid processing',
        'Repayment tenure planning up to 7 years',
        'Dealer quotation and RTO hypothecation support'
      ],
      disclaimer: 'Lending terms, loan-to-value (LTV) ratio and interest rates depend on vehicle age and lender norms.'
    },
    {
      id: 'home-loan',
      slug: 'home-loan',
      title: 'Home Loan & Construction',
      category: 'Real Estate Finance',
      icon: Home,
      imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
      desc: 'Credit solutions for residential home purchases, plot acquisition, home construction, renovation, and extension.',
      indicativeInfo: 'Long-term financing up to 30 years for property purchases',
      features: [
        'Residential home purchase financing (up to 90% funding)',
        'Plot purchase + construction loan assistance',
        'Property chain & legal document guidance',
        'Tax deductions under Section 80C & Section 24(b)',
        'Balance transfer options with top-up capital',
        'Tranche-wise construction disbursement alignment'
      ],
      disclaimer: 'Mortgage sanction and disbursement are subject to property title clearance and institutional underwriting.'
    },
    {
      id: 'loan-refinance',
      slug: 'loan-refinance',
      title: 'Loan Refinance & Balance Transfer',
      category: 'Interest Optimization',
      icon: Percent,
      imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
      desc: 'Switch existing high-interest home, business, or personal loans to lower interest partner lenders and reduce monthly EMI burden.',
      indicativeInfo: 'Save up to 2% interest & access additional top-up funds',
      features: [
        'Significant EMI and overall interest outflow reduction',
        'Top-up loan facility available for immediate liquidity',
        'Zero prepayment penalties on floating rate loans',
        'Complete inter-bank handover & NOC document assistance',
        'Switch from fixed rates to repo-rate linked transparent benchmarks',
        'Free preliminary amortization savings calculation'
      ],
      disclaimer: 'Interest rate reduction and top-up eligibility depend on current repayment track and lender credit policies.'
    },
    {
      id: 'government-subsidy-loans',
      slug: 'government-subsidy-loans',
      title: 'Government Subsidy Loans (PMEGP / MUDRA)',
      category: 'PMEGP & Mudra Schemes',
      icon: Landmark,
      imageUrl: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80',
      desc: 'Comprehensive guidance for government-linked entrepreneurship schemes including PMEGP, MUDRA, Stand-Up India, and CGTMSE cover.',
      indicativeInfo: 'Subsidies up to 25% - 35% under Prime Minister schemes',
      features: [
        'PMEGP capital subsidy guidance (15% to 35% project cost)',
        'Mudra loans (Shishu, Kishore, Tarun) up to ₹10 Lakhs',
        'Detailed Project Report (DPR) formatting by experienced CAs',
        'CGTMSE collateral-free guarantee assistance',
        'Official government portal application & EDP guidance',
        'Direct coordination with partner bank branch appraisals'
      ],
      disclaimer: 'Eligibility and approval are strictly subject to applicable government guidelines, bank criteria and documentation. Subsidies are not guaranteed.'
    }
  ];

  // Comparison Tabs Data
  const comparisonCategories: Record<string, { title: string; desc: string; services: string[] }> = {
    gold: {
      title: 'Gold & Instant Digital Credit',
      desc: 'Fastest liquidity solutions with minimal to zero paperwork and spot approval within 15–30 minutes.',
      services: ['Gold Loan (Instant Cash Against Gold)', 'Instant Online Loan (Digital Express Cash)', 'Loan with Aadhar & PAN (Paperless Quick Loan)']
    },
    property: {
      title: 'Property & Mortgage Financing',
      desc: 'High-ticket secured funding leveraging residential, commercial, or industrial real estate equity.',
      services: ['Mortgage Loan / Loan Against Property (LAP)', 'Home Loan & Construction', 'Loan Refinance & Balance Transfer']
    },
    vehicles: {
      title: 'Vehicle & Green Mobility',
      desc: 'Tailored loans for two-wheelers, EV bikes/scooters, commercial auto-rickshaws, e-rickshaws, and passenger cars.',
      services: ['2/3 Wheeler Loan (Bike, Scooter & Auto/E-Rickshaw)', 'Car Loan (New & Used)']
    },
    agri: {
      title: 'Agri, SHG & Rural Enterprise',
      desc: 'Specialized government-supported credit for farming, Kisan Credit Card, Self-Help Groups, and women collectives.',
      services: ['KCC Loan (Kisan Credit Card & Agri Finance)', 'Self Help / Group Loan (SHG & JLG Microfinance)', 'Government Subsidy Loans (PMEGP / MUDRA)']
    },
    business: {
      title: 'Business & Commercial Capital',
      desc: 'Working capital lines, machinery loans, OD/CC limits, and MSME subsidy programs.',
      services: ['Business & Working Capital Loan', 'Government Subsidy Loans (PMEGP / MUDRA)', 'Mortgage Loan / Loan Against Property (LAP)']
    },
    personal: {
      title: 'Personal Credit & Debt Optimization',
      desc: 'Unsecured personal funding, debt consolidation, and balance transfer interest savings.',
      services: ['Personal Loan', 'Loan Refinance & Balance Transfer', 'Instant Online Loan (Digital Express Cash)']
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
    instant: {
      label: 'Aadhaar / Gold / Online',
      items: [
        'Only Aadhaar Card & PAN Card for Instant / DigiLocker Loans',
        'Physical Gold Jewelry for Purity & Weight Verification (for Gold Loan)',
        'Active mobile number linked to Aadhaar for UIDAI OTP verification'
      ]
    },
    agri_shg: {
      label: 'Agri & SHG Records',
      items: [
        'Land Revenue Record: 7/12 Extract, Khasra / Khatauni, or Land Possession Certificate (for KCC)',
        'SHG / JLG Group Resolution, Member List & Group Bank Passbook',
        'Crop details or allied dairy/poultry activity summary'
      ]
    },
    vehicle: {
      label: '2/3 Wheeler & Auto',
      items: [
        'Proforma Invoice / Quotation from Authorized Vehicle Dealer',
        'Applicant KYC (Aadhaar & PAN) + 3-month Bank Passbook / UPI Statement',
        'Driving License / Commercial Permit (for commercial 3-wheelers / autos)'
      ]
    },
    property: {
      label: 'Mortgage / LAP / Home',
      items: [
        'Registered Title Deed / Sale Deed chain for 13 to 30 years',
        'Sanctioned Building Plan, Mutation Copy, and Latest Property Tax Receipt',
        'Encumbrance Certificate (EC) and NOC from Society / Builder'
      ]
    },
    business: {
      label: 'Business & Subsidy',
      items: [
        'GST Registration Certificate & 12-Month GST Returns',
        'Udyam MSME Registration Certificate',
        'Detailed Project Report (DPR) for PMEGP / MUDRA schemes'
      ]
    }
  };

  // Why Choose AVRX 6 Cards
  const whyChooseAvrx = [
    {
      icon: Layers,
      title: '13+ Specialized Loan Categories',
      desc: 'Access complete guidance across Gold loans, 2/3 wheeler financing, SHG group credit, KCC farming loans, LAP mortgages, and instant paperless loans.'
    },
    {
      icon: Compass,
      title: 'Requirement-Based Matching',
      desc: 'We analyze your profile, credit history, asset collateral, and timeline to recommend the most optimal institutional banking partner.'
    },
    {
      icon: FileText,
      title: 'End-to-End Paperwork Support',
      desc: 'We assist with online e-KYC, Aadhaar verification, land revenue record checks, GST alignment, and Detailed Project Report (DPR) formatting.'
    },
    {
      icon: ShieldCheck,
      title: '100% Transparent & Secure',
      desc: 'Clear communication with zero false guarantees, no unapproved broker deductions, and complete adherence to RBI guidelines.'
    },
    {
      icon: UserCheck,
      title: 'Dedicated Financial Advisors',
      desc: 'Experienced loan officers walking you through every milestone, bank verification call, property appraisal, and sanction letter.'
    },
    {
      icon: CheckCheck,
      title: 'Fast Track Verification',
      desc: 'Direct liaison with senior bank credit desks to expedite instant 15-minute digital cash transfers and quick spot vehicle approvals.'
    }
  ];

  // 6-Step Workflow Timeline
  const workflowSteps = [
    {
      num: '01',
      title: 'Select Loan Service',
      desc: 'Choose from Gold, 2/3 Wheeler, SHG, KCC, LAP, Instant Online, or Business loan schemes.'
    },
    {
      num: '02',
      title: 'Profile & Need Evaluation',
      desc: 'Our advisors review your income profile, collateral (gold/property/vehicle), and required tenure.'
    },
    {
      num: '03',
      title: 'Lender Comparison & Match',
      desc: 'We compare interest rates and LTV offers across 30+ top scheduled commercial banks and NBFCs.'
    },
    {
      num: '04',
      title: 'Fast-Track e-KYC / Valuation',
      desc: 'We assist in DigiLocker Aadhaar e-KYC, gold purity valuation, vehicle dealer tie-up, or land checks.'
    },
    {
      num: '05',
      title: 'Bank Appraisal & Sanction',
      desc: 'Application is processed smoothly with dedicated credit desk follow-up for instant sanction.'
    },
    {
      num: '06',
      title: 'Direct Disbursement',
      desc: 'Funds are directly transferred to your bank account or vehicle dealer with transparent terms.'
    }
  ];

  // FAQs
  const financialFaqs = [
    {
      q: 'How does Gold Loan work and how quickly is it disbursed?',
      a: 'Gold Loan allows you to pledge your 18k to 24k gold jewelry for instant cash liquidity up to 75% of market value. Gold purity is verified on the spot, and funds are disbursed directly into your bank account or in cash within 30 minutes. Zero salary slips or ITRs are required.'
    },
    {
      q: 'Can I get a loan using only my Aadhaar Card and PAN Card?',
      a: 'Yes. Our Loan with Aadhaar & PAN and Instant Online Loan options utilize digital DigiLocker e-KYC and UIDAI OTP authentication. If you have an active bank account with a clean credit track, loans from ₹10,000 up to ₹7,50,000 can be sanctioned paperlessly in minutes.'
    },
    {
      q: 'What is a 2/3 Wheeler Loan and what vehicles are eligible?',
      a: 'A 2/3 Wheeler Loan covers financing for motorcycles, scooters, high-speed electric 2-wheelers, passenger auto-rickshaws, commercial cargo autos, and e-rickshaws. We offer up to 95% on-road funding with spot approvals at major dealerships.'
    },
    {
      q: 'How does a Self Help / Group Loan (SHG & JLG) operate?',
      a: 'Self Help Group (SHG) and Joint Liability Group (JLG) loans are collateral-free group microfinance loans provided to groups of 4 to 20 individuals (especially women collectives and micro-entrepreneurs) using a mutual peer-guarantee system with flexible weekly or monthly repayments.'
    },
    {
      q: 'What are the benefits of a KCC (Kisan Credit Card) Loan?',
      a: 'KCC loans offer farmers subsidized agricultural credit at an effective interest rate of just 4% p.a. (with government prompt repayment subvention). It covers crop cultivation, seeds, fertilizers, tractor/farm machinery, and allied dairy/poultry activities with in-built crop insurance.'
    },
    {
      q: 'What is Loan Against Property (LAP) / Mortgage Loan?',
      a: 'Loan Against Property is a secured mortgage loan where you pledge residential, commercial, or industrial property to access high-ticket capital up to ₹5 Crores at significantly lower interest rates and long repayment tenures up to 15 years while retaining full ownership.'
    },
    {
      q: 'Does AVRX guarantee loan approvals or government subsidies?',
      a: 'No. AVRX is an advisory and facilitation ecosystem. Final loan sanctions, interest rates, tenure, and subsidy disbursements are strictly governed by our RBI-licensed partner banks, NBFCs, and respective government nodal agencies.'
    },
    {
      q: 'Are interest rates fixed or floating for loans?',
      a: 'This depends on the product and lender. Personal and auto loans are commonly offered on fixed or semi-fixed rates, whereas home loans and long-term property mortgages are predominantly linked to floating benchmark rates (EBLR/RLLR).'
    },
    {
      q: 'How does loan balance transfer / refinancing help me save money?',
      a: 'By refinancing an existing high-interest loan to a partner bank with a lower interest rate, you can reduce your monthly EMI outflow or total interest liability, and optionally get a top-up loan sanction for additional funding needs.'
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
                Explore practical financial solutions and credit guidance designed around your personal and business requirements.
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
                  <div className="text-lg font-black text-emerald-400 font-mono">7+</div>
                  <div className="text-[11px] text-slate-400 font-medium">Loan & Credit Options</div>
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
                      <div className="text-base font-black text-white">Advisory & Credit Desk</div>
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
                <span>Multiple Loan Options</span>
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
            title="Our Trusted Banking & Lending Alliances"
            badgeText="FINANCIAL NETWORK"
            description="Facilitating access through established scheduled commercial banks and RBI-regulated NBFC partners."
            variant="compact"
          />
        </section>

        {/* 4. FINANCIAL SOLUTIONS OVERVIEW (7 CARDS GRID) */}
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
              From personal liquidity and business growth funds to vehicle financing, property mortgages, and government-subsidized schemes, find the right credit solution for your financial path.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allFinancialServices.map((service) => {
              const Icon = service.icon;
              const glow = service.category.toLowerCase().includes('insurance') || service.category.toLowerCase().includes('protection') ? 'purple' : 'emerald';
              return (
                <MagneticCard
                  key={service.id}
                  glowColor={glow}
                  enableTilt={true}
                  tiltStrength={3}
                  spotlightRadius={400}
                  spotlightOpacity={0.25}
                  soundOnHover={true}
                  className="rounded-3xl bg-slate-900/80 border border-slate-800/90 hover:border-emerald-500/50 flex flex-col justify-between overflow-hidden shadow-lg"
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
                          className="w-full py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white font-bold text-xs transition cursor-pointer"
                        >
                          View Details
                        </button>

                        <button
                          onClick={() => handleOpenFormWithSolution(service.title)}
                          className="w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-500 text-slate-950 font-black text-xs transition shadow-sm hover:scale-105 cursor-pointer"
                        >
                          Enquire Now
                        </button>
                      </div>

                      <div className="text-[9px] text-slate-500 italic line-clamp-1">
                        *Subject to eligibility and lender criteria
                      </div>
                    </div>

                  </div>

                </MagneticCard>
              );
            })}
          </div>

        </section>

        {/* 5. SPOTLIGHT: GOLD LOAN & INSTANT PAPERLESS CASH (EYE-CATCHING SHOWCASE) */}
        <section className="my-20 rounded-3xl bg-gradient-to-br from-[#1a1403] via-[#0d0f14] to-slate-950 border border-amber-500/40 p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[300px] bg-amber-500/[0.12] blur-[130px] pointer-events-none" />
          <div className="absolute -bottom-10 left-10 w-[400px] h-[250px] bg-cyan-500/[0.08] blur-[120px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(245,158,11,0.2)]">
                <Coins className="w-3.5 h-3.5 text-amber-400" />
                <span>INSTANT LIQUIDITY & DIGITAL CASH HUB</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Gold Loan & Express <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-200">
                  Paperless Digital Credit.
                </span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Need urgent funds for medical emergencies, business opportunities, or immediate bills? Get maximum valuation on your gold jewelry within 30 minutes, or instant ₹10,000 to ₹7.5 Lakhs digital cash using only your Aadhaar and PAN cards.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-amber-500/30 space-y-1">
                  <div className="font-bold text-amber-400 flex items-center gap-1.5">
                    <Coins className="w-4 h-4" />
                    <span>Gold Loan (30 Mins)</span>
                  </div>
                  <div className="text-slate-400 text-[11px]">Up to 75% market valuation. 100% insured bank vault safety.</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-cyan-500/30 space-y-1">
                  <div className="font-bold text-cyan-400 flex items-center gap-1.5">
                    <Zap className="w-4 h-4" />
                    <span>Instant Online Loan</span>
                  </div>
                  <div className="text-slate-400 text-[11px]">100% digital app flow. Algorithmic sanction in 3 mins.</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-indigo-500/30 space-y-1">
                  <div className="font-bold text-indigo-400 flex items-center gap-1.5">
                    <Fingerprint className="w-4 h-4" />
                    <span>Aadhaar & PAN Loan</span>
                  </div>
                  <div className="text-slate-400 text-[11px]">Zero physical paperwork. Instant OTP & DigiLocker e-KYC.</div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => handleOpenFormWithSolution('Gold Loan (Instant Cash)')}
                  className="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 font-black text-xs sm:text-sm transition shadow-[0_0_25px_rgba(245,158,11,0.4)] hover:scale-105 flex items-center gap-2 cursor-pointer"
                >
                  <Coins className="w-4 h-4" />
                  <span>Enquire for Gold Loan</span>
                </button>

                <button
                  onClick={() => handleOpenFormWithSolution('Loan with Aadhar & PAN')}
                  className="px-6 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-bold text-xs sm:text-sm transition flex items-center gap-2 cursor-pointer"
                >
                  <Fingerprint className="w-4 h-4 text-cyan-400" />
                  <span>Apply with Aadhaar & PAN</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative rounded-3xl overflow-hidden border border-amber-500/30 bg-slate-950 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=1000&q=80"
                alt="Gold and Instant Paperless Loan"
                referrerPolicy="no-referrer"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-950/90 backdrop-blur-md border border-amber-500/30 text-xs space-y-2">
                <div className="flex items-center justify-between text-amber-300 font-mono font-bold text-[11px]">
                  <span>// ZERO INCOME PROOF NEEDED</span>
                  <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-400">Doorstep / Branch</span>
                </div>
                <div className="text-[11px] text-slate-300">
                  Enjoy lower interest rates from 8.50% p.a., flexible bullet interest or easy monthly EMI payouts with zero foreclosure penalties on gold release.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. SPOTLIGHT: 2/3 WHEELER, BIKE, AUTO & E-RICKSHAW LOANS */}
        <section className="my-20 rounded-3xl bg-gradient-to-br from-[#06191b] via-[#040f13] to-slate-950 border border-teal-500/40 p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-1/3 w-[500px] h-[300px] bg-teal-500/[0.1] blur-[130px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5 relative rounded-3xl overflow-hidden border border-teal-500/30 bg-slate-950 shadow-2xl order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1000&q=80"
                alt="Two Wheeler and Commercial Auto Rickshaw Loan"
                referrerPolicy="no-referrer"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-950/90 backdrop-blur-md border border-teal-500/30 text-xs space-y-1.5">
                <div className="text-teal-300 font-mono font-bold text-[11px]">
                  // UP TO 95% ON-ROAD FINANCING
                </div>
                <div className="text-[11px] text-slate-300 leading-relaxed">
                  Special subsidized interest rates for electric two-wheelers and commercial e-rickshaws with minimal down payment and spot dealer delivery.
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/20 border border-teal-500/40 text-teal-300 text-xs font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(20,184,166,0.2)]">
                <Bike className="w-3.5 h-3.5 text-teal-400" />
                <span>MOBILITY & COMMERCIAL TRANSPORT FINANCE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                2/3 Wheeler Loan: <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-emerald-300 to-cyan-300">
                  Bikes, Scooters, Autos & E-Rickshaws.
                </span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Whether you're purchasing a brand-new commuter motorcycle, an eco-friendly electric scooter, or a commercial passenger auto-rickshaw / cargo 3-wheeler to build your livelihood, AVRX provides quick spot finance.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
                  <div className="font-bold text-teal-300 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                    <span>Personal Two-Wheelers</span>
                  </div>
                  <div className="text-slate-400 text-[11px]">Bikes, high-speed scooters & EV two-wheelers with low EMIs from 12 to 48 months.</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
                  <div className="font-bold text-emerald-300 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Commercial 3-Wheelers & Autos</span>
                  </div>
                  <div className="text-slate-400 text-[11px]">Auto-rickshaws, commercial cargo trikes & e-rickshaws with permit assistance.</div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => handleOpenFormWithSolution('2/3 Wheeler & Auto Loan')}
                  className="px-8 py-4 rounded-2xl bg-gradient-to-r from-teal-400 to-emerald-500 text-slate-950 font-black text-sm transition shadow-[0_0_30px_rgba(20,184,166,0.4)] hover:scale-105 flex items-center gap-2 cursor-pointer"
                >
                  <Bike className="w-4 h-4" />
                  <span>Apply for 2/3 Wheeler Loan</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 7. SPOTLIGHT: RURAL, FARMING & WOMEN SHG / JLG GROUP LOANS */}
        <section className="my-20 rounded-3xl bg-gradient-to-br from-[#12071f] via-[#090b14] to-slate-950 border border-purple-500/40 p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-10 w-[500px] h-[300px] bg-purple-500/[0.12] blur-[140px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-300 text-xs font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                <Users className="w-3.5 h-3.5 text-purple-400" />
                <span>RURAL CREDIT & COMMUNITY ENTERPRISE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                KCC Agri Loans & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-300 to-lime-300">
                  Self Help / Group Loans.
                </span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Empowering farmers, dairy operators, women collectives, and micro-entrepreneurs. Access subsidized Kisan Credit Card (KCC) loans at an effective 4% interest rate, and collateral-free microfinance for Self Help Groups (SHGs) and Joint Liability Groups (JLGs).
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-lime-500/30 space-y-1.5">
                  <div className="font-bold text-lime-400 flex items-center gap-1.5">
                    <Sprout className="w-4 h-4" />
                    <span>KCC Loan (Kisan Credit Card)</span>
                  </div>
                  <div className="text-slate-300 text-[11px] leading-relaxed">
                    Subsidized 4% p.a. interest rate for seasonal crop cultivation, seeds, fertilizers, tractor implements, and allied dairy/poultry farming with built-in PMFBY crop insurance.
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-purple-500/30 space-y-1.5">
                  <div className="font-bold text-purple-300 flex items-center gap-1.5">
                    <Users className="w-4 h-4" />
                    <span>Self Help / Group Loan (SHG & JLG)</span>
                  </div>
                  <div className="text-slate-300 text-[11px] leading-relaxed">
                    Collateral-free group microcredit for 4 to 20 member collectives and women entrepreneurs with peer-guarantee security and weekly or monthly repayment flexibility.
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => handleOpenFormWithSolution('KCC Loan (Kisan Credit Card)')}
                  className="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-lime-400 to-emerald-500 text-slate-950 font-black text-xs sm:text-sm transition shadow-[0_0_25px_rgba(132,204,22,0.4)] hover:scale-105 flex items-center gap-2 cursor-pointer"
                >
                  <Sprout className="w-4 h-4" />
                  <span>Enquire for KCC Agri Loan</span>
                </button>

                <button
                  onClick={() => handleOpenFormWithSolution('Self Help / Group Loan (SHG/JLG)')}
                  className="px-6 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-purple-500/40 text-purple-200 font-bold text-xs sm:text-sm transition flex items-center gap-2 cursor-pointer"
                >
                  <Users className="w-4 h-4 text-purple-400" />
                  <span>Apply for Group / SHG Loan</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative rounded-3xl overflow-hidden border border-purple-500/30 bg-slate-950 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80"
                alt="Self Help Group and Farmer Loan"
                referrerPolicy="no-referrer"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-950/90 backdrop-blur-md border border-purple-500/30 text-xs space-y-1.5">
                <div className="text-pink-300 font-mono font-bold text-[11px]">
                  // COLLATERAL-FREE COMMUNITY FINANCING
                </div>
                <div className="text-[11px] text-slate-300">
                  Government interest subventions, direct DBT disbursements to group accounts, and simple group resolution documentation support.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. SPOTLIGHT: MORTGAGE LOAN / LOAN AGAINST PROPERTY (LAP) */}
        <section className="my-20 rounded-3xl bg-gradient-to-br from-[#061426] via-[#040f1a] to-slate-950 border border-blue-500/40 p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[300px] bg-blue-500/[0.12] blur-[130px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5 relative rounded-3xl overflow-hidden border border-blue-500/30 bg-slate-950 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1000&q=80"
                alt="Mortgage Loan and Loan Against Property"
                referrerPolicy="no-referrer"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-950/90 backdrop-blur-md border border-blue-500/30 text-xs space-y-1.5">
                <div className="text-cyan-300 font-mono font-bold text-[11px]">
                  // HIGH LIQUIDITY UP TO ₹5 CRORES
                </div>
                <div className="text-[11px] text-slate-300 leading-relaxed">
                  Leverage residential, commercial, or industrial real estate with extended tenures up to 15 years and drop-line overdraft facilities.
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-300 text-xs font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                <Building2 className="w-3.5 h-3.5 text-blue-400" />
                <span>SECURED MORTGAGE & REAL ESTATE EQUITY</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Mortgage Loan: <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300">
                  Loan Against Property (LAP).
                </span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Unlock large-scale business expansion capital, refinance costly loans, or fund major family requirements by mortgaging your residential, commercial, or industrial property while continuing complete ownership and occupancy.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
                  <div className="font-bold text-blue-400">Lower Interest</div>
                  <div className="text-slate-400 text-[11px]">Significantly lower interest than personal/business loans.</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
                  <div className="font-bold text-cyan-400">15-Year Tenure</div>
                  <div className="text-slate-400 text-[11px]">Spacious repayment horizons ensuring pocket-friendly EMIs.</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
                  <div className="font-bold text-indigo-400">Term / Overdraft</div>
                  <div className="text-slate-400 text-[11px]">Choose between lumpsum term credit or flexible OD limits.</div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => handleOpenFormWithSolution('Mortgage Loan (Loan Against Property)')}
                  className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-400 to-cyan-500 text-slate-950 font-black text-sm transition shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:scale-105 flex items-center gap-2 cursor-pointer"
                >
                  <Building2 className="w-4 h-4" />
                  <span>Enquire for Mortgage Loan / LAP</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
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

        {/* 12. FINANCIAL COMPARISON SECTION (INTERACTIVE TABS & STRETCHED MATRIX) */}
        <section className="my-24 w-full max-w-7xl mx-auto space-y-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <SlidersHorizontal className="w-4 h-4 text-cyan-400" />
              <span>DYNAMIC DECISION MATRIX</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Which Solution Fits Your Requirement?
            </h2>
            <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
              Explore categorized financial instruments tailored for personal milestones, working capital, vehicle acquisitions, property mortgages, and subsidy programs.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {Object.keys(comparisonCategories).map((key) => (
              <button
                key={key}
                onClick={() => setActiveComparisonTab(key)}
                className={`px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeComparisonTab === key
                    ? 'bg-gradient-to-r from-emerald-400 to-teal-500 text-slate-950 shadow-[0_0_25px_rgba(16,185,129,0.4)] scale-105'
                    : 'bg-slate-900/90 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                {key}
              </button>
            ))}
          </div>

          {/* Stretched Tab Content Card */}
          <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-10 lg:p-12 shadow-2xl space-y-8 w-full">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">Active Category Match</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white">{comparisonCategories[activeComparisonTab].title}</h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">{comparisonCategories[activeComparisonTab].desc}</p>
              </div>
              <div className="px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-cyan-400 font-bold self-start md:self-auto">
                {comparisonCategories[activeComparisonTab].services.length} Solutions Available
              </div>
            </div>

            {/* Expansive Stretched Service Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
              {comparisonCategories[activeComparisonTab].services.map((serviceName, idx) => (
                <div 
                  key={idx} 
                  className="p-6 rounded-2xl bg-slate-950/90 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 space-y-4 flex flex-col justify-between group shadow-lg"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                        <Check className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-slate-500 uppercase px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800">
                        Option 0{idx + 1}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                        {serviceName}
                      </h4>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        Comprehensive loan and credit assistance with rapid eligibility review, documentation guidance, and bank liaison.
                      </p>
                    </div>

                    <div className="space-y-1.5 pt-2 border-t border-slate-900 text-xs text-slate-300">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>Pre-application eligibility check</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>Multiple regulated lender tie-ups</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 grid grid-cols-2 gap-2">
                    <button
                      onClick={() => handleOpenFormWithSolution(serviceName)}
                      className="w-full py-2.5 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-black text-xs transition shadow-sm cursor-pointer"
                    >
                      Enquire Now
                    </button>
                    <button
                      onClick={() => onNavigate('service-detail', serviceName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''))}
                      className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 font-bold text-xs transition cursor-pointer"
                    >
                      Details
                    </button>
                  </div>
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

        {/* 15. DOCUMENT CHECKLIST (STRETCHED EXPANSIVE BENTO GRID) */}
        <section className="my-24 w-full max-w-7xl mx-auto space-y-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-wider">
              <FileText className="w-4 h-4 text-purple-400" />
              <span>DOCUMENT READINESS HUB</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              What Documents May Be Required?
            </h2>
            <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
              Comprehensive itemized document requirements across borrower categories for prompt credit evaluation and swift bank sanctions.
            </p>
          </div>

          {/* Stretched Multi-Card Grid for All Document Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(documentCategories).map(([key, data], idx) => {
              const borderStyles = [
                'border-cyan-500/30 hover:border-cyan-400/80 bg-cyan-950/10',
                'border-amber-500/30 hover:border-amber-400/80 bg-amber-950/10',
                'border-emerald-500/30 hover:border-emerald-400/80 bg-emerald-950/10',
                'border-purple-500/30 hover:border-purple-400/80 bg-purple-950/10',
                'border-rose-500/30 hover:border-rose-400/80 bg-rose-950/10'
              ];
              const bStyle = borderStyles[idx % borderStyles.length];

              return (
                <div 
                  key={key} 
                  className={`p-6 sm:p-7 rounded-3xl bg-slate-900/90 border ${bStyle} shadow-xl space-y-4 hover:-translate-y-1 transition duration-300 flex flex-col justify-between group`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-white font-mono font-bold text-xs">
                          0{idx + 1}
                        </div>
                        <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                          {data.label}
                        </h3>
                      </div>
                      <span className="text-[10px] font-mono text-slate-500 uppercase">
                        {data.items.length} Proofs
                      </span>
                    </div>

                    <div className="space-y-2.5 pt-1">
                      {data.items.map((item, i) => (
                        <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 text-xs text-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="font-mono text-emerald-400 font-semibold">Self-Attested / E-KYC</span>
                    <button
                      onClick={() => handleOpenFormWithSolution(`Document Guidance for ${data.label}`)}
                      className="text-xs font-bold text-cyan-400 hover:text-cyan-300 transition cursor-pointer"
                    >
                      Need Help? &rarr;
                    </button>
                  </div>
                </div>
              );
            })}

            {/* Special Callout 6th Card: Expert Support */}
            <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-emerald-950/30 via-slate-900 to-slate-950 border border-emerald-500/40 shadow-xl space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold uppercase">
                  <ShieldCheck className="w-5 h-5" />
                  <span>SPECIALIST ASSISTANCE</span>
                </div>
                <h3 className="text-xl font-bold text-white">Missing Some Paperwork?</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Our loan concierges assist in preparing Chartered Accountant certified DPRs, net worth certificates, e-bank statement aggregation, and rent agreement affidavits.
                </p>
                <div className="p-3.5 rounded-xl bg-slate-950/90 border border-emerald-500/20 text-xs text-emerald-300">
                  ⚡ 100% Free Initial Document Scrutiny &amp; CIBIL Assessment
                </div>
              </div>

              <button
                onClick={() => handleOpenFormWithSolution('Document Review & Loan Assistance')}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-500 text-slate-950 font-black text-xs uppercase tracking-wider hover:scale-105 transition shadow-lg cursor-pointer"
              >
                Upload / Review My Documents
              </button>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 text-center text-xs text-slate-400 italic">
            *Note: Additional documentation such as property chain deeds, sanctioned blueprint maps, or CA net worth certificates may be requested by specific institutional underwriters.
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

        {/* 17. FINANCIAL FAQ ACCORDION (2-COLUMN GRID LAYOUT) */}
        <section className="my-24 max-w-6xl mx-auto space-y-8">
          
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5 text-purple-400" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white">
              Financial Solutions &amp; Eligibility FAQs
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Clear guidance on eligibility criteria, documentation, interest benchmarks, and timelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
            {financialFaqs.map((faq, idx) => (
              <div 
                key={idx}
                className="border border-slate-800 rounded-2xl overflow-hidden bg-slate-900/80 hover:border-emerald-500/30 transition-colors"
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
                <label className="text-xs font-semibold text-slate-300 uppercase">Selected Loan / Service *</label>
                <select
                  value={formData.solutionType}
                  onChange={e => setFormData({ ...formData, solutionType: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-400"
                >
                  <option value="Gold Loan (Instant Cash Against Gold)">Gold Loan (Instant Cash Against Gold)</option>
                  <option value="Mortgage Loan / Loan Against Property (LAP)">Mortgage Loan / Loan Against Property (LAP)</option>
                  <option value="2/3 Wheeler Loan (Bike, Scooter & Auto/E-Rickshaw)">2/3 Wheeler Loan (Bike, Scooter & Auto/E-Rickshaw)</option>
                  <option value="Self Help / Group Loan (SHG & JLG Microfinance)">Self Help / Group Loan (SHG & JLG Microfinance)</option>
                  <option value="Instant Online Loan (Digital Express Cash)">Instant Online Loan (Digital Express Cash)</option>
                  <option value="KCC Loan (Kisan Credit Card & Agri Finance)">KCC Loan (Kisan Credit Card & Agri Finance)</option>
                  <option value="Loan with Aadhar & PAN (Paperless Quick Loan)">Loan with Aadhar & PAN (Paperless Quick Loan)</option>
                  <option value="Personal Loan">Personal Loan</option>
                  <option value="Business & Working Capital Loan">Business & Working Capital Loan</option>
                  <option value="Car Loan (New & Used)">Car Loan (New & Used)</option>
                  <option value="Home Loan & Construction">Home Loan & Construction</option>
                  <option value="Loan Refinance & Balance Transfer">Loan Refinance & Balance Transfer</option>
                  <option value="Government Subsidy Loans (PMEGP / MUDRA)">Government Subsidy Loans (PMEGP / MUDRA)</option>
                  <option value="General Financial Advisory">General Financial Advisory</option>
                </select>
              </div>

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
