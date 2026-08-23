import React, { useState, useMemo } from 'react';
import { 
  DIGITAL_SERVICES, 
  FINANCIAL_SERVICES, 
  TAX_SERVICES, 
  INSURANCE_SERVICES, 
  HOSTING_PRODUCTS 
} from '../data/servicesData';
import { ServiceItem } from '../types';
import { SEO } from '../components/common/SEO';
import { WebsiteDesignPage } from './WebsiteDesignPage';
import { submitLeadForm } from '../utils/formSubmit';
import { SubmissionFeedbackModal } from '../components/common/SubmissionFeedbackModal';
import { launchSoundEngine } from '../utils/launchSoundEngine';
import { renderServiceIcon } from '../utils/iconMap';
import { 
  ArrowRight, 
  CheckCircle2, 
  PhoneCall, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  ShieldCheck, 
  Zap, 
  Users, 
  Sparkles, 
  MessageSquare, 
  ChevronRight, 
  Clock, 
  Award, 
  TrendingUp, 
  FileText, 
  Send, 
  RefreshCw, 
  Check, 
  Calculator, 
  Building2, 
  Layers, 
  Shield, 
  CheckSquare, 
  Square, 
  Info, 
  AlertCircle,
  ExternalLink,
  Lock,
  Percent,
  Coins,
  FileCheck,
  Star
} from 'lucide-react';

interface ServiceDetailPageProps {
  serviceSlug: string;
  onNavigate: (page: string, slug?: string) => void;
}

// Comprehensive Slug Aliases Mapping
const SLUG_ALIASES: Record<string, string> = {
  // Website & Digital
  'static-onepage-website': 'static-onepage-website',
  'static-website': 'static-onepage-website',
  'onepage-website': 'static-onepage-website',
  'static-onepage': 'static-onepage-website',
  'one-page-website': 'static-onepage-website',
  'website-design': 'website-design',
  'website-development': 'website-design',
  'corporate-website-design': 'corporate-website-design',
  'e-commerce-solutions': 'e-commerce-solutions',
  'ecommerce': 'e-commerce-solutions',
  'web-application-development': 'web-application-development',
  'web-app': 'web-application-development',
  'android-app-development': 'android-app-development',
  'app-development': 'android-app-development',
  'ios-app-development': 'ios-app-development',
  'digital-marketing': 'digital-marketing',
  'seo-ranking': 'seo-ranking',
  'seo': 'seo-ranking',
  'website-redesign': 'website-redesign',
  'website-maintenance': 'website-maintenance',

  // Financial / Loans
  'personal-loan': 'personal-loan',
  'business-loan': 'business-loan',
  'home-loan': 'home-loan',
  'car-loan': 'car-loan',
  'mortgage-loan': 'mortgage-loan',
  'loan-refinance': 'loan-refinance',
  'government-scheme-loans': 'government-scheme-loans',
  'pmegp-loan': 'government-scheme-loans',

  // Tax & Legal Solutions
  'gst': 'gst-registration',
  'gst-registration': 'gst-registration',
  'gst-filing': 'gst-registration',
  'itr': 'itr-filing',
  'itr-filing': 'itr-filing',
  'income-tax': 'itr-filing',
  'udyam': 'udyam-registration',
  'udyam-registration': 'udyam-registration',
  'msme': 'udyam-registration',
  'msme-registration': 'udyam-registration',
  'company-registration': 'company-registration',
  'pvt-ltd': 'company-registration',
  'trademark': 'trademark-registration',
  'trademark-registration': 'trademark-registration',
  'fssai': 'fssai-license',
  'fssai-license': 'fssai-license',
  'food-license': 'fssai-license',
  'iso': 'iso-certification',
  'iso-certification': 'iso-certification',
  'iec': 'iec-code',
  'iec-code': 'iec-code',
  'import-export': 'iec-code',
  'gumasta': 'gumasta-license',
  'gumasta-license': 'gumasta-license',
  'shop-establishment': 'gumasta-license',
  'shop-license': 'gumasta-license',
  'roc': 'roc-compliance',
  'roc-compliance': 'roc-compliance',
  'business-compliance': 'roc-compliance',
  'pan': 'pan-services',
  'pan-services': 'pan-services',
  'pan-card': 'pan-services',
  'tax-advisory': 'tax-advisory',
  'tax-litigation': 'tax-advisory',
  'tax-notice': 'tax-advisory',

  // Insurance
  'motor-insurance': 'motor-insurance',
  'vehicle-insurance': 'motor-insurance',
  'health-insurance': 'health-insurance',
  'travel-insurance': 'travel-insurance',
  'home-insurance': 'home-insurance',
  'shop-property-insurance': 'shop-property-insurance',
  'shop-insurance': 'shop-property-insurance'
};

// Curated high quality imagery for each service
const SERVICE_IMAGES: Record<string, string> = {
  'static-onepage-website': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
  'website-design': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
  'corporate-website-design': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
  'e-commerce-solutions': 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1200&q=80',
  'web-application-development': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
  'android-app-development': 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
  'ios-app-development': 'https://images.unsplash.com/photo-1510519138197-04075c7e145c?auto=format&fit=crop&w=1200&q=80',
  'digital-marketing': 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=1200&q=80',
  'seo-ranking': 'https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?auto=format&fit=crop&w=1200&q=80',
  'website-redesign': 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
  'website-maintenance': 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
  'personal-loan': 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=1200&q=80',
  'business-loan': 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=1200&q=80',
  'home-loan': 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
  'car-loan': 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80',
  'mortgage-loan': 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1200&q=80',
  'loan-refinance': 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80',
  'government-scheme-loans': 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=1200&q=80',
  
  // Tax & Legal images
  'gst-registration': 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1200&q=80',
  'itr-filing': 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80',
  'udyam-registration': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
  'company-registration': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
  'trademark-registration': 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80',
  'fssai-license': 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
  'iso-certification': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
  'iec-code': 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
  'gumasta-license': 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1200&q=80',
  'roc-compliance': 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80',
  'pan-services': 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80',
  'tax-advisory': 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80',

  // Insurance
  'motor-insurance': 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
  'health-insurance': 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80',
  'travel-insurance': 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80',
  'home-insurance': 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
  'shop-property-insurance': 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
  'default': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80'
};

// Dynamic Theme Palette Resolver per service & category
interface ThemeConfig {
  gradient: string;
  glow: string;
  borderGlow: string;
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
  accentBg: string;
  accentText: string;
  accentBorder: string;
  buttonGradient: string;
  heroMesh: string;
  iconBg: string;
}

const getServiceTheme = (category: string, serviceId: string): ThemeConfig => {
  // Service-specific overrides for tax & legal
  if (serviceId === 'gst-registration') {
    return {
      gradient: 'from-amber-400 via-orange-500 to-amber-600',
      glow: 'shadow-[0_0_50px_rgba(245,158,11,0.25)]',
      borderGlow: 'border-amber-500/40 hover:border-amber-400',
      badgeBg: 'bg-amber-500/10',
      badgeText: 'text-amber-300',
      badgeBorder: 'border-amber-500/30',
      accentBg: 'bg-amber-500/15',
      accentText: 'text-amber-400',
      accentBorder: 'border-amber-500/30',
      buttonGradient: 'from-amber-400 via-orange-500 to-amber-500 text-slate-950',
      heroMesh: 'from-amber-950/40 via-slate-950 to-slate-950',
      iconBg: 'bg-gradient-to-br from-amber-500/20 to-orange-500/20 border-amber-500/30 text-amber-400'
    };
  }
  if (serviceId === 'itr-filing') {
    return {
      gradient: 'from-emerald-400 via-teal-500 to-green-500',
      glow: 'shadow-[0_0_50px_rgba(16,185,129,0.25)]',
      borderGlow: 'border-emerald-500/40 hover:border-emerald-400',
      badgeBg: 'bg-emerald-500/10',
      badgeText: 'text-emerald-300',
      badgeBorder: 'border-emerald-500/30',
      accentBg: 'bg-emerald-500/15',
      accentText: 'text-emerald-400',
      accentBorder: 'border-emerald-500/30',
      buttonGradient: 'from-emerald-400 via-teal-500 to-green-500 text-slate-950',
      heroMesh: 'from-emerald-950/40 via-slate-950 to-slate-950',
      iconBg: 'bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-400'
    };
  }
  if (serviceId === 'udyam-registration') {
    return {
      gradient: 'from-cyan-400 via-sky-500 to-blue-600',
      glow: 'shadow-[0_0_50px_rgba(6,182,212,0.25)]',
      borderGlow: 'border-cyan-500/40 hover:border-cyan-400',
      badgeBg: 'bg-cyan-500/10',
      badgeText: 'text-cyan-300',
      badgeBorder: 'border-cyan-500/30',
      accentBg: 'bg-cyan-500/15',
      accentText: 'text-cyan-400',
      accentBorder: 'border-cyan-500/30',
      buttonGradient: 'from-cyan-400 via-sky-500 to-blue-500 text-slate-950',
      heroMesh: 'from-cyan-950/40 via-slate-950 to-slate-950',
      iconBg: 'bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-cyan-500/30 text-cyan-400'
    };
  }
  if (serviceId === 'company-registration') {
    return {
      gradient: 'from-purple-400 via-indigo-500 to-violet-600',
      glow: 'shadow-[0_0_50px_rgba(168,85,247,0.25)]',
      borderGlow: 'border-purple-500/40 hover:border-purple-400',
      badgeBg: 'bg-purple-500/10',
      badgeText: 'text-purple-300',
      badgeBorder: 'border-purple-500/30',
      accentBg: 'bg-purple-500/15',
      accentText: 'text-purple-400',
      accentBorder: 'border-purple-500/30',
      buttonGradient: 'from-purple-400 via-indigo-500 to-violet-500 text-slate-950',
      heroMesh: 'from-purple-950/40 via-slate-950 to-slate-950',
      iconBg: 'bg-gradient-to-br from-purple-500/20 to-indigo-500/20 border-purple-500/30 text-purple-400'
    };
  }
  if (serviceId === 'trademark-registration') {
    return {
      gradient: 'from-rose-400 via-pink-500 to-purple-600',
      glow: 'shadow-[0_0_50px_rgba(244,63,94,0.25)]',
      borderGlow: 'border-rose-500/40 hover:border-rose-400',
      badgeBg: 'bg-rose-500/10',
      badgeText: 'text-rose-300',
      badgeBorder: 'border-rose-500/30',
      accentBg: 'bg-rose-500/15',
      accentText: 'text-rose-400',
      accentBorder: 'border-rose-500/30',
      buttonGradient: 'from-rose-400 via-pink-500 to-purple-500 text-slate-950',
      heroMesh: 'from-rose-950/40 via-slate-950 to-slate-950',
      iconBg: 'bg-gradient-to-br from-rose-500/20 to-pink-500/20 border-rose-500/30 text-rose-400'
    };
  }
  if (serviceId === 'fssai-license') {
    return {
      gradient: 'from-orange-400 via-amber-500 to-yellow-500',
      glow: 'shadow-[0_0_50px_rgba(249,115,22,0.25)]',
      borderGlow: 'border-orange-500/40 hover:border-orange-400',
      badgeBg: 'bg-orange-500/10',
      badgeText: 'text-orange-300',
      badgeBorder: 'border-orange-500/30',
      accentBg: 'bg-orange-500/15',
      accentText: 'text-orange-400',
      accentBorder: 'border-orange-500/30',
      buttonGradient: 'from-orange-400 via-amber-500 to-yellow-500 text-slate-950',
      heroMesh: 'from-orange-950/40 via-slate-950 to-slate-950',
      iconBg: 'bg-gradient-to-br from-orange-500/20 to-amber-500/20 border-orange-500/30 text-orange-400'
    };
  }
  if (serviceId === 'iso-certification') {
    return {
      gradient: 'from-blue-400 via-indigo-500 to-cyan-500',
      glow: 'shadow-[0_0_50px_rgba(59,130,246,0.25)]',
      borderGlow: 'border-blue-500/40 hover:border-blue-400',
      badgeBg: 'bg-blue-500/10',
      badgeText: 'text-blue-300',
      badgeBorder: 'border-blue-500/30',
      accentBg: 'bg-blue-500/15',
      accentText: 'text-blue-400',
      accentBorder: 'border-blue-500/30',
      buttonGradient: 'from-blue-400 via-indigo-500 to-cyan-500 text-slate-950',
      heroMesh: 'from-blue-950/40 via-slate-950 to-slate-950',
      iconBg: 'bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border-blue-500/30 text-blue-400'
    };
  }

  // Category defaults
  switch (category) {
    case 'digital':
      return {
        gradient: 'from-cyan-400 via-blue-500 to-indigo-500',
        glow: 'shadow-[0_0_50px_rgba(0,240,255,0.25)]',
        borderGlow: 'border-cyan-500/40 hover:border-cyan-400',
        badgeBg: 'bg-cyan-500/10',
        badgeText: 'text-cyan-300',
        badgeBorder: 'border-cyan-500/30',
        accentBg: 'bg-cyan-500/15',
        accentText: 'text-cyan-400',
        accentBorder: 'border-cyan-500/30',
        buttonGradient: 'from-cyan-400 via-blue-500 to-indigo-500 text-slate-950',
        heroMesh: 'from-cyan-950/40 via-slate-950 to-slate-950',
        iconBg: 'bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-cyan-500/30 text-cyan-400'
      };
    case 'financial':
      return {
        gradient: 'from-emerald-400 via-teal-500 to-cyan-500',
        glow: 'shadow-[0_0_50px_rgba(16,185,129,0.25)]',
        borderGlow: 'border-emerald-500/40 hover:border-emerald-400',
        badgeBg: 'bg-emerald-500/10',
        badgeText: 'text-emerald-300',
        badgeBorder: 'border-emerald-500/30',
        accentBg: 'bg-emerald-500/15',
        accentText: 'text-emerald-400',
        accentBorder: 'border-emerald-500/30',
        buttonGradient: 'from-emerald-400 via-teal-500 to-cyan-500 text-slate-950',
        heroMesh: 'from-emerald-950/40 via-slate-950 to-slate-950',
        iconBg: 'bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-400'
      };
    case 'tax':
      return {
        gradient: 'from-amber-400 via-yellow-500 to-orange-500',
        glow: 'shadow-[0_0_50px_rgba(245,158,11,0.25)]',
        borderGlow: 'border-amber-500/40 hover:border-amber-400',
        badgeBg: 'bg-amber-500/10',
        badgeText: 'text-amber-300',
        badgeBorder: 'border-amber-500/30',
        accentBg: 'bg-amber-500/15',
        accentText: 'text-amber-400',
        accentBorder: 'border-amber-500/30',
        buttonGradient: 'from-amber-400 via-yellow-500 to-orange-500 text-slate-950',
        heroMesh: 'from-amber-950/40 via-slate-950 to-slate-950',
        iconBg: 'bg-gradient-to-br from-amber-500/20 to-orange-500/20 border-amber-500/30 text-amber-400'
      };
    case 'insurance':
      return {
        gradient: 'from-purple-400 via-fuchsia-500 to-pink-500',
        glow: 'shadow-[0_0_50px_rgba(168,85,247,0.25)]',
        borderGlow: 'border-purple-500/40 hover:border-purple-400',
        badgeBg: 'bg-purple-500/10',
        badgeText: 'text-purple-300',
        badgeBorder: 'border-purple-500/30',
        accentBg: 'bg-purple-500/15',
        accentText: 'text-purple-400',
        accentBorder: 'border-purple-500/30',
        buttonGradient: 'from-purple-400 via-fuchsia-500 to-pink-500 text-slate-950',
        heroMesh: 'from-purple-950/40 via-slate-950 to-slate-950',
        iconBg: 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-500/30 text-purple-400'
      };
    default:
      return {
        gradient: 'from-blue-400 via-cyan-500 to-teal-500',
        glow: 'shadow-[0_0_50px_rgba(59,130,246,0.25)]',
        borderGlow: 'border-blue-500/40 hover:border-blue-400',
        badgeBg: 'bg-blue-500/10',
        badgeText: 'text-blue-300',
        badgeBorder: 'border-blue-500/30',
        accentBg: 'bg-blue-500/15',
        accentText: 'text-blue-400',
        accentBorder: 'border-blue-500/30',
        buttonGradient: 'from-blue-400 via-cyan-500 to-teal-500 text-slate-950',
        heroMesh: 'from-blue-950/40 via-slate-950 to-slate-950',
        iconBg: 'bg-gradient-to-br from-blue-500/20 to-teal-500/20 border-blue-500/30 text-blue-400'
      };
  }
};

// Document Checklist Helper per service category
const getServiceDocuments = (serviceId: string): string[] => {
  if (serviceId.includes('gst')) {
    return [
      'PAN Card of Business / Proprietor / Directors',
      'Aadhaar Card of Authorized Signatories',
      'Electricity Bill / Property Tax Receipt (Business Place)',
      'Rent Agreement & Landlord NOC (if rented)',
      'Cancelled Cheque / Bank Statement with IFSC',
      'Digital Signature Certificate (DSC) for Companies'
    ];
  }
  if (serviceId.includes('itr')) {
    return [
      'PAN & Aadhaar Card of Taxpayer',
      'Form 16 / Form 16A (TDS Certificates)',
      'Bank Account Statements for the entire Financial Year',
      'AIS / TIS Statement from Income Tax Portal',
      'Capital Gains Statement (Stocks, Mutual Funds, Crypto)',
      'Home Loan Interest & 80C/80D Investment Proofs'
    ];
  }
  if (serviceId.includes('company') || serviceId.includes('roc')) {
    return [
      'PAN & Aadhaar of all proposed Directors & Shareholders',
      'Passport size photographs of all Directors',
      'Bank Statement / Electricity Bill of Directors (KYC)',
      'Registered Office Address Proof (Utility Bill < 2 months old)',
      'Rent Agreement & Owner NOC for office premises',
      'Digital Signature Certificates (Class 3 DSC)'
    ];
  }
  if (serviceId.includes('trademark')) {
    return [
      'Brand Name, Slogan or Logo Artwork file',
      'Applicant Identity & Address Proof (PAN & Aadhaar)',
      'Udyam Certificate (to get 50% Govt Fee discount)',
      'User Affidavit with Date of First Commercial Use',
      'Power of Attorney (TM-48 authorization)'
    ];
  }
  if (serviceId.includes('fssai')) {
    return [
      'Passport photo of Proprietor / Business Owner',
      'Government Photo ID Proof (PAN / Aadhaar / Voter ID)',
      'Premises Proof (Electricity Bill, Rent Agreement, NOC)',
      'Food Safety Management Plan & List of Food Items',
      'Partnership Deed / Certificate of Incorporation (if entity)'
    ];
  }
  if (serviceId.includes('loan') || serviceId.includes('finance')) {
    return [
      'PAN Card & Aadhaar Card / Passport',
      'Last 6 Months Bank Statement (Salary or Current Account)',
      'Last 3 Months Salary Slips or 2 Years ITR with Computations',
      'Current Residence Proof (Electricity bill / Rent agreement)',
      'Existing Loan Sanction Letters & Track Record (if any)'
    ];
  }
  return [
    'Business / Individual Identity Proof (PAN / Aadhaar)',
    'Official Email & Active Mobile Number for verification',
    'Specific Technical or Statutory Requirement Brief',
    'Bank Account / Payment Details for invoice generation'
  ];
};

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ serviceSlug, onNavigate }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [checkedDocs, setCheckedDocs] = useState<Record<number, boolean>>({});

  // Quick Loan EMI State for financial services
  const [miniEmiAmount, setMiniEmiAmount] = useState(500000);
  const [miniEmiTenure, setMiniEmiTenure] = useState(5);
  const [miniEmiRate, setMiniEmiRate] = useState(10.5);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    budget: 'Standard',
    message: '',
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

  // Find target service
  const allServices: ServiceItem[] = useMemo(() => [
    ...DIGITAL_SERVICES,
    ...FINANCIAL_SERVICES,
    ...TAX_SERVICES,
    ...INSURANCE_SERVICES,
    ...HOSTING_PRODUCTS
  ], []);

  const targetId = SLUG_ALIASES[serviceSlug] || serviceSlug;
  
  // Render dedicated Website Design Master Service Page when website design/development is selected
  if (targetId === 'website-design' || serviceSlug === 'website-design' || serviceSlug === 'website-development' || serviceSlug === 'web-design' || serviceSlug === 'web-development') {
    return <WebsiteDesignPage onNavigate={onNavigate} />;
  }

  const service = allServices.find(s => s.id === targetId) || allServices[0];
  const theme = getServiceTheme(service.category, service.id);
  const heroImage = service.imageUrl || SERVICE_IMAGES[service.id] || SERVICE_IMAGES[serviceSlug] || SERVICE_IMAGES.default;
  const serviceDocs = getServiceDocuments(service.id);

  // Category display details
  const getCategoryMeta = (cat: string) => {
    switch (cat) {
      case 'digital':
        return { label: 'Digital Solutions', page: 'digital-solutions', color: 'text-cyan-400', border: 'border-cyan-500/30', bg: 'bg-cyan-500/10' };
      case 'financial':
        return { label: 'Financial Solutions', page: 'financial-solutions', color: 'text-emerald-400', border: 'border-emerald-500/30', bg: 'bg-emerald-500/10' };
      case 'tax':
        return { label: 'Tax & Compliance', page: 'tax-solutions', color: 'text-amber-400', border: 'border-amber-500/30', bg: 'bg-amber-500/10' };
      case 'insurance':
        return { label: 'Insurance Protection', page: 'insurance-solutions', color: 'text-purple-400', border: 'border-purple-500/30', bg: 'bg-purple-500/10' };
      default:
        return { label: 'Hosting & Products', page: 'hosting-products', color: 'text-blue-400', border: 'border-blue-500/30', bg: 'bg-blue-500/10' };
    }
  };

  const catMeta = getCategoryMeta(service.category);

  // Calculated EMI for financial widgets
  const calculatedMiniEmi = useMemo(() => {
    const monthlyRate = miniEmiRate / 12 / 100;
    const months = miniEmiTenure * 12;
    const emi = (miniEmiAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    return Math.round(emi);
  }, [miniEmiAmount, miniEmiTenure, miniEmiRate]);

  // Document Readiness percentage
  const docReadinessScore = useMemo(() => {
    const checkedCount = Object.values(checkedDocs).filter(Boolean).length;
    if (serviceDocs.length === 0) return 100;
    return Math.round((checkedCount / serviceDocs.length) * 100);
  }, [checkedDocs, serviceDocs.length]);

  // Standard process steps fallback
  const processSteps = service.process && service.process.length > 0 
    ? service.process 
    : [
        'Step 1: Free Consultation & Requirement Intake',
        'Step 2: Document Verification & Legal/Technical Scrutiny',
        'Step 3: Execution, E-Filing & Portal Processing',
        'Step 4: Quality Check & Official Dispatch of Certificates/Deliverables',
        'Step 5: Post-Service Handoff & Lifetime Compliance Support'
      ];

  // Extended FAQs fallback
  const defaultFaqs = [
    {
      question: `What is the estimated delivery timeline for ${service.title}?`,
      answer: 'Requirement review and document verification are initiated within 2 to 4 hours of submission. Full completion and delivery typically range from 24 hours to 5 working days depending on statutory approvals.'
    },
    {
      question: 'How do I submit my documents securely to AVRX?',
      answer: 'You can upload your documents through our encrypted client portal, share them via official WhatsApp with your dedicated relationship manager, or email them directly. All files are protected with 256-bit encryption.'
    },
    {
      question: 'Are there any hidden charges or surprise renewal fees?',
      answer: 'Never. AVRX guarantees 100% price transparency. All government portal statutory fees, challans, and professional fees are itemized in writing upfront.'
    },
    {
      question: 'Will I be assigned a dedicated expert or Chartered Accountant?',
      answer: 'Yes! Every file is handled by certified specialists (CAs, Tax Advocates, or Senior Engineers) and tracked by a dedicated Account Manager.'
    },
    {
      question: 'What happens if I receive a statutory query or notice later?',
      answer: 'AVRX provides complete post-service support. If any department authority requests clarification, our specialists handle the response drafting at no extra friction.'
    }
  ];

  const serviceFaqs = service.faqs && service.faqs.length >= 3 
    ? service.faqs 
    : [...(service.faqs || []), ...defaultFaqs.slice(0, 6 - (service.faqs?.length || 0))];

  // Related services
  const relatedServices = allServices
    .filter(s => s.id !== service.id && s.category === service.category)
    .slice(0, 3);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setLoading(true);

    const result = await submitLeadForm({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      city: formData.city,
      location: formData.city,
      serviceCategory: `${service.title} (${catMeta.label})`,
      subject: `Service Inquiry — ${service.title} — ${formData.name}`,
      message: formData.message || `Inquiry for ${service.title}`,
      sourcePage: `/services/${serviceSlug}`,
      formType: 'Service Detail Inquiry Form',
      website_hp: formData.website_hp,
      additionalFields: {
        'Service Requested': service.title,
        'Service ID': service.id,
        'Category': service.category,
        'Budget Range': formData.budget,
        'Doc Readiness': `${docReadinessScore}%`
      }
    });

    setLoading(false);

    if (result.success) {
      launchSoundEngine.playSuccessSwoosh();
      setIsLeadModalOpen(false);
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
        budget: 'Standard',
        message: '',
        website_hp: ''
      });
    } else {
      setErrorMessage(result.message || 'Unable to submit request. Please try again.');
      setFeedback({
        isOpen: true,
        type: 'error',
        message: result.message
      });
    }
  };

  // Sound-wrapped click handler
  const handleNavClick = (page: string, slug?: string) => {
    launchSoundEngine.playClickTick();
    onNavigate(page, slug);
  };

  return (
    <div className="min-h-screen bg-[#050811] text-white pt-24 pb-24 selection:bg-cyan-500 selection:text-slate-950 relative overflow-hidden">
      <SEO
        title={`${service.title} | AVRX Digital & Financial Solution`}
        description={service.shortDesc || service.fullDesc}
      />

      {/* Dynamic Ambient Background Aura */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-10 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-cyan-600/10 via-blue-600/5 to-purple-600/10 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-gradient-to-bl from-amber-600/10 via-emerald-600/5 to-transparent rounded-full blur-[130px]" />
        <div className="absolute -bottom-20 left-1/3 w-[700px] h-[700px] bg-gradient-to-t from-indigo-600/10 via-cyan-600/5 to-transparent rounded-full blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">

        {/* 1. Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400 flex-wrap pt-4">
          <button 
            onClick={() => handleNavClick('home')} 
            className="hover:text-cyan-400 transition cursor-pointer"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <button 
            onClick={() => handleNavClick('services')} 
            className="hover:text-cyan-400 transition cursor-pointer"
          >
            Services
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <button 
            onClick={() => handleNavClick(catMeta.page)} 
            className={`hover:underline font-semibold cursor-pointer ${catMeta.color}`}
          >
            {catMeta.label}
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-white font-bold truncate max-w-xs">{service.title}</span>
        </nav>

        {/* 2. Hero Section with Rich Multi-Color Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="flex flex-wrap items-center gap-3">
              <span className={`px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider ${catMeta.bg} ${catMeta.color} border ${catMeta.border} shadow-sm`}>
                {catMeta.label}
              </span>
              {service.badge && (
                <span className={`px-3.5 py-1.5 rounded-full text-xs font-bold ${theme.badgeBg} ${theme.badgeText} border ${theme.badgeBorder} flex items-center gap-1.5 shadow-sm`}>
                  <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '4s' }} />
                  <span>{service.badge}</span>
                </span>
              )}
              {service.priceStarting && (
                <span className="px-3.5 py-1.5 rounded-full text-xs font-black bg-slate-900 border border-slate-700/80 text-white font-mono shadow-inner">
                  {service.priceStarting}
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
              <span className="text-white">{service.title.split(' ')[0]} </span>
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${theme.gradient}`}>
                {service.title.split(' ').slice(1).join(' ')}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200 font-medium leading-relaxed">
              {service.shortDesc}
            </p>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-2xl">
              {service.fullDesc}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={() => {
                  launchSoundEngine.playClickTick();
                  setIsLeadModalOpen(true);
                }}
                className={`px-8 py-4 bg-gradient-to-r ${theme.buttonGradient} font-black text-sm sm:text-base rounded-2xl shadow-xl hover:scale-[1.03] active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer`}
              >
                <span>Get Instant Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href={`https://wa.me/919876543210?text=${encodeURIComponent(`Hello AVRX, I would like to inquire about ${service.title}. Please share the process and quote.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => launchSoundEngine.playClickTick()}
                className="px-6 py-4 bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 font-bold text-sm sm:text-base rounded-2xl transition flex items-center justify-center gap-2.5 shadow-lg group cursor-pointer"
              >
                <MessageSquare className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span>WhatsApp Specialist</span>
              </a>
            </div>

            {/* Fast Trust Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-800/80 text-xs text-slate-300">
              <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="font-semibold">100% Verified</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="font-semibold">Fast Turnaround</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-2">
                <Award className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-semibold">Expert CA/Tech</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-2">
                <Users className="w-4 h-4 text-purple-400 shrink-0" />
                <span className="font-semibold">24/7 Dedicated</span>
              </div>
            </div>
          </div>

          {/* Right Hero Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className={`relative rounded-3xl overflow-hidden border ${theme.borderGlow} bg-slate-950/90 shadow-2xl transition-all duration-500 group backdrop-blur-xl`}>
              
              {/* Media image */}
              <div className="aspect-[16/10] w-full overflow-hidden relative">
                <img
                  src={heroImage}
                  alt={service.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                
                <div className="absolute top-4 right-4 px-3 py-1.5 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10 text-xs font-mono font-bold text-white flex items-center gap-1.5 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>Active Service</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 space-y-5 relative bg-slate-950">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">Transparent Pricing</span>
                    <div className="text-xl sm:text-2xl font-black text-white font-mono mt-0.5">
                      {service.priceStarting || 'Standard Assessment'}
                    </div>
                  </div>
                  <div className={`p-3 rounded-2xl ${theme.iconBg} shrink-0`}>
                    {renderServiceIcon(service.iconName, 'w-6 h-6')}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center justify-between">
                    <span>Key Package Deliverables</span>
                    <span className="text-[10px] text-cyan-400 font-mono">Verified 2026</span>
                  </div>
                  <div className="grid grid-cols-1 gap-2 text-xs text-slate-300">
                    {service.features.slice(0, 4).map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 p-2 rounded-xl bg-slate-900/80 border border-slate-800/80">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1 font-medium">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => {
                    launchSoundEngine.playClickTick();
                    setIsLeadModalOpen(true);
                  }}
                  className={`w-full py-3.5 rounded-xl bg-gradient-to-r ${theme.buttonGradient} font-bold text-xs uppercase tracking-wider shadow-lg hover:brightness-110 active:scale-98 transition flex items-center justify-center gap-2 cursor-pointer`}
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Request Instant Callback</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* 3. Interactive Utility & Eligibility Widget */}
        <div className={`p-6 sm:p-10 rounded-3xl bg-slate-950/90 border ${theme.borderGlow} shadow-2xl backdrop-blur-2xl space-y-8`}>
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
                <CheckSquare className="w-4 h-4" />
                <span>INTERACTIVE SERVICE READINESS &amp; SCOPE CHECK</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                Prepare Your Application for {service.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 max-w-2xl">
                Check off your available documents or customize your requirements to receive expedited priority processing.
              </p>
            </div>

            {service.category === 'financial' ? (
              <div className="p-4 rounded-2xl bg-slate-900 border border-emerald-500/30 text-right shrink-0">
                <div className="text-[10px] font-mono text-slate-400 uppercase font-bold">Estimated Monthly EMI</div>
                <div className="text-2xl font-black text-emerald-400 font-mono mt-0.5">
                  ₹{calculatedMiniEmi.toLocaleString('en-IN')}/mo
                </div>
                <div className="text-[10px] text-slate-400 font-mono mt-0.5">At {miniEmiRate}% for {miniEmiTenure} Years</div>
              </div>
            ) : (
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-right shrink-0">
                <div className="text-[10px] font-mono text-slate-400 uppercase font-bold">Document Readiness</div>
                <div className={`text-2xl font-black font-mono mt-0.5 ${docReadinessScore === 100 ? 'text-emerald-400' : 'text-cyan-400'}`}>
                  {docReadinessScore}% Ready
                </div>
                <div className="text-[10px] text-slate-400 font-mono mt-0.5">
                  {Object.values(checkedDocs).filter(Boolean).length} of {serviceDocs.length} Checked
                </div>
              </div>
            )}
          </div>

          {/* Interactive Mode depending on category */}
          {service.category === 'financial' ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2 p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
                <div className="flex justify-between text-xs font-bold text-slate-300">
                  <span>Loan Principal Amount</span>
                  <span className="text-emerald-400 font-mono">₹{miniEmiAmount.toLocaleString('en-IN')}</span>
                </div>
                <input
                  type="range"
                  min="50000"
                  max="5000000"
                  step="50000"
                  value={miniEmiAmount}
                  onChange={e => setMiniEmiAmount(Number(e.target.value))}
                  className="w-full accent-emerald-400 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>₹50K</span>
                  <span>₹25L</span>
                  <span>₹50L</span>
                </div>
              </div>

              <div className="space-y-2 p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
                <div className="flex justify-between text-xs font-bold text-slate-300">
                  <span>Repayment Tenure</span>
                  <span className="text-cyan-400 font-mono">{miniEmiTenure} Years</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  step="1"
                  value={miniEmiTenure}
                  onChange={e => setMiniEmiTenure(Number(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>1 Year</span>
                  <span>5 Years</span>
                  <span>10 Years</span>
                </div>
              </div>

              <div className="space-y-2 p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
                <div className="flex justify-between text-xs font-bold text-slate-300">
                  <span>Expected Interest Rate</span>
                  <span className="text-amber-400 font-mono">{miniEmiRate}% p.a.</span>
                </div>
                <input
                  type="range"
                  min="8.5"
                  max="18"
                  step="0.5"
                  value={miniEmiRate}
                  onChange={e => setMiniEmiRate(Number(e.target.value))}
                  className="w-full accent-amber-400 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>8.5% (Low)</span>
                  <span>12.5% (Avg)</span>
                  <span>18% (High)</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Required Documentation Checklist (Click to verify your readiness)</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {serviceDocs.map((doc, idx) => {
                  const isChecked = !!checkedDocs[idx];
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        launchSoundEngine.playClickTick();
                        setCheckedDocs(prev => ({ ...prev, [idx]: !prev[idx] }));
                      }}
                      className={`p-4 rounded-2xl border text-left transition flex items-start gap-3 cursor-pointer ${
                        isChecked 
                          ? 'bg-emerald-950/30 border-emerald-500/50 text-white shadow-[0_0_15px_rgba(16,185,129,0.15)]' 
                          : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-lg border flex items-center justify-center shrink-0 mt-0.5 ${
                        isChecked ? 'bg-emerald-500 border-emerald-400 text-slate-950' : 'border-slate-700 bg-slate-950'
                      }`}>
                        {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                      <span className="text-xs font-medium leading-snug">{doc}</span>
                    </button>
                  );
                })}
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-400 flex items-center gap-2">
                  <Info className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Don't have all documents? Our specialists assist in obtaining affidavits, NOCs, and digital certificates.</span>
                </div>
                <button
                  onClick={() => {
                    launchSoundEngine.playClickTick();
                    setIsLeadModalOpen(true);
                  }}
                  className="px-5 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-cyan-400 transition shrink-0 cursor-pointer"
                >
                  Consult an Expert
                </button>
              </div>
            </div>
          )}

        </div>

        {/* 4. Strategic Value & Key Benefits (Vibrant Bento Grid - Full Columns) */}
        {service.benefits && service.benefits.length > 0 && (
          <section className="space-y-8 w-full max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full ${theme.badgeBg} ${theme.badgeText} border ${theme.badgeBorder} text-xs font-mono font-bold uppercase`}>
                <Sparkles className="w-3.5 h-3.5" />
                <span>BUSINESS VALUE &amp; STRATEGIC ROI</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                Key Benefits &amp; Strategic Advantages
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                Measurable financial, operational, and statutory advantages delivered with every {service.title} engagement.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {(() => {
                // Ensure at least 8 benefits for full 2-row x 4-column balanced grid
                const defaultStrategicAdvantages = [
                  'Accelerated SLA with guaranteed fastest turnaround',
                  'Direct supervision by empanelled Chartered Accountants & Specialists',
                  'Bank-grade 256-bit data encryption & complete privacy',
                  'Transparent itemized pricing with zero surprise surcharges'
                ];
                let combinedBenefits = [...service.benefits];
                if (combinedBenefits.length < 8 && combinedBenefits.length >= 4) {
                  const needed = 8 - combinedBenefits.length;
                  for (let i = 0; i < needed; i++) {
                    if (!combinedBenefits.includes(defaultStrategicAdvantages[i])) {
                      combinedBenefits.push(defaultStrategicAdvantages[i]);
                    }
                  }
                }

                return combinedBenefits.map((benefit, idx) => {
                  const colors = [
                    { bg: 'from-amber-500/15 via-slate-900/80 to-slate-950', border: 'border-amber-500/30 hover:border-amber-400', text: 'text-amber-400', icon: Sparkles },
                    { bg: 'from-cyan-500/15 via-slate-900/80 to-slate-950', border: 'border-cyan-500/30 hover:border-cyan-400', text: 'text-cyan-400', icon: Zap },
                    { bg: 'from-emerald-500/15 via-slate-900/80 to-slate-950', border: 'border-emerald-500/30 hover:border-emerald-400', text: 'text-emerald-400', icon: ShieldCheck },
                    { bg: 'from-purple-500/15 via-slate-900/80 to-slate-950', border: 'border-purple-500/30 hover:border-purple-400', text: 'text-purple-400', icon: TrendingUp },
                    { bg: 'from-rose-500/15 via-slate-900/80 to-slate-950', border: 'border-rose-500/30 hover:border-rose-400', text: 'text-rose-400', icon: Award },
                    { bg: 'from-blue-500/15 via-slate-900/80 to-slate-950', border: 'border-blue-500/30 hover:border-blue-400', text: 'text-blue-400', icon: CheckCircle2 },
                    { bg: 'from-teal-500/15 via-slate-900/80 to-slate-950', border: 'border-teal-500/30 hover:border-teal-400', text: 'text-teal-400', icon: FileCheck },
                    { bg: 'from-indigo-500/15 via-slate-900/80 to-slate-950', border: 'border-indigo-500/30 hover:border-indigo-400', text: 'text-indigo-400', icon: Star }
                  ];
                  const c = colors[idx % colors.length];
                  const IconComponent = c.icon;

                  return (
                    <div
                      key={idx}
                      className={`p-6 rounded-3xl bg-gradient-to-b ${c.bg} border ${c.border} space-y-4 hover:-translate-y-1.5 transition-all duration-300 shadow-xl group flex flex-col justify-between`}
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className={`w-12 h-12 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center justify-center ${c.text} group-hover:scale-110 transition-transform shadow-md`}>
                            <IconComponent className="w-6 h-6" />
                          </div>
                          <span className="text-[10px] font-mono font-bold text-slate-500 uppercase px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-800">
                            0{idx + 1}
                          </span>
                        </div>
                        
                        <div>
                          <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">Advantage 0{idx + 1}</div>
                          <p className="text-sm text-slate-100 font-semibold leading-relaxed group-hover:text-white transition-colors mt-1">
                            {benefit}
                          </p>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-slate-800/60 flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 font-bold">
                        <Check className="w-3.5 h-3.5" />
                        <span>Verified Advantage</span>
                      </div>
                    </div>
                  );
                });
              })()}
            </div>
          </section>
        )}

        {/* 5. Comprehensive Capabilities & What We Provide (Detailed Feature Cards) */}
        <section className="space-y-8 w-full max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 text-xs font-mono font-bold uppercase">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span>FULL CAPABILITIES &amp; DELIVERABLES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              What Is Included in {service.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              End-to-end scope, technical deliverables, and statutory filings managed from start to finish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, idx) => {
              const borderStyles = [
                'hover:border-cyan-500/50 hover:shadow-[0_10px_30px_rgba(0,240,255,0.15)]',
                'hover:border-amber-500/50 hover:shadow-[0_10px_30px_rgba(245,158,11,0.15)]',
                'hover:border-emerald-500/50 hover:shadow-[0_10px_30px_rgba(16,185,129,0.15)]',
                'hover:border-purple-500/50 hover:shadow-[0_10px_30px_rgba(168,85,247,0.15)]',
                'hover:border-rose-500/50 hover:shadow-[0_10px_30px_rgba(244,63,94,0.15)]',
                'hover:border-blue-500/50 hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)]'
              ];
              const bStyle = borderStyles[idx % borderStyles.length];

              return (
                <div
                  key={idx}
                  className={`p-6 sm:p-7 rounded-3xl bg-slate-950/90 border border-slate-800/90 transition-all duration-300 hover:-translate-y-1.5 group space-y-4 shadow-lg backdrop-blur-xl ${bStyle}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:text-cyan-300 group-hover:scale-110 transition">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-400">
                      Module 0{idx + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                      {feature}
                    </h3>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                      Structured and executed in strict accordance with 2026 statutory guidelines, digital compliance, and best practices.
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-900 flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 font-semibold">
                    <Check className="w-3.5 h-3.5" />
                    <span>Included in Standard Scope</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 6. Step-by-Step Execution Process Roadmap (Stretched Expansive Timeline) */}
        <section className="w-full max-w-7xl mx-auto p-8 sm:p-12 lg:p-14 rounded-3xl bg-gradient-to-b from-slate-950 via-slate-900/80 to-slate-950 border border-slate-800 space-y-12 shadow-2xl relative overflow-hidden">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30 text-xs font-mono font-bold uppercase">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>TRANSPARENT STEP-BY-STEP EXECUTION ROADMAP</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              How the Execution Process Works
            </h2>
            <p className="text-xs sm:text-base text-slate-300 leading-relaxed">
              Expedited, fully paperless multi-stage workflow from initial document ingestion to final approval, sanction, and lifelong compliance tracking.
            </p>
          </div>

          {/* Stretched Interactive Step Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 relative">
            {processSteps.map((step, idx) => {
              const stepColors = [
                { text: 'text-cyan-400', border: 'border-cyan-500/40 hover:border-cyan-400', badge: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30', glow: 'group-hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]' },
                { text: 'text-amber-400', border: 'border-amber-500/40 hover:border-amber-400', badge: 'bg-amber-500/10 text-amber-300 border-amber-500/30', glow: 'group-hover:shadow-[0_0_20px_rgba(245,158,11,0.2)]' },
                { text: 'text-emerald-400', border: 'border-emerald-500/40 hover:border-emerald-400', badge: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30', glow: 'group-hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]' },
                { text: 'text-purple-400', border: 'border-purple-500/40 hover:border-purple-400', badge: 'bg-purple-500/10 text-purple-300 border-purple-500/30', glow: 'group-hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]' },
                { text: 'text-rose-400', border: 'border-rose-500/40 hover:border-rose-400', badge: 'bg-rose-500/10 text-rose-300 border-rose-500/30', glow: 'group-hover:shadow-[0_0_20px_rgba(244,63,94,0.2)]' }
              ];
              const sc = stepColors[idx % stepColors.length];

              return (
                <div 
                  key={idx} 
                  className={`p-6 rounded-2xl bg-slate-900/90 border ${sc.border} ${sc.glow} space-y-4 group hover:-translate-y-2 transition-all duration-300 shadow-xl flex flex-col justify-between`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <span className={`text-3xl font-black font-mono ${sc.text}`}>
                        0{idx + 1}
                      </span>
                      <span className={`px-2.5 py-1 rounded-md text-[10px] font-mono font-bold border ${sc.badge}`}>
                        Phase 0{idx + 1}
                      </span>
                    </div>

                    <h4 className="text-sm sm:text-base font-bold text-white leading-snug group-hover:text-cyan-300 transition-colors">
                      {step}
                    </h4>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      Handled with direct expert audit and real-time portal synchronization.
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono">
                    <span className="text-slate-500">SLA Window</span>
                    <span className="text-emerald-400 font-bold">2–24 Hours</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Stretched Action Bar with Assurance Metrics */}
          <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-6 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Digital Document Vault</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Live WhatsApp Milestone Updates</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Zero Physical Office Queues</span>
              </div>
            </div>

            <button
              onClick={() => {
                launchSoundEngine.playClickTick();
                setIsLeadModalOpen(true);
              }}
              className="w-full md:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(0,240,255,0.3)] hover:scale-105 transition cursor-pointer"
            >
              Initiate Step 1 with AVRX
            </button>
          </div>
        </section>

        {/* 7. Why Choose AVRX vs Traditional Agents (Comparison Matrix) */}
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 text-xs font-mono font-bold uppercase">
              <Award className="w-3.5 h-3.5 text-emerald-400" />
              <span>THE AVRX ADVANTAGE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Why Work with AVRX Solutions
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Modern digital systems vs outdated manual brokers. Experience pure transparency and speed.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* AVRX Advantage Card */}
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-cyan-950/40 via-slate-950 to-slate-950 border-2 border-cyan-500/40 space-y-6 shadow-[0_0_40px_rgba(0,240,255,0.15)] relative">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-widest">Modern Digital Approach</span>
                  <h3 className="text-2xl font-black text-white mt-1">The AVRX Standard</h3>
                </div>
                <div className="px-3.5 py-1.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-black font-mono">
                  VERIFIED 2026
                </div>
              </div>

              <div className="space-y-4">
                {[
                  '100% Paperless Digital Intake & Instant WhatsApp Updates',
                  'Clear Itemized Pricing with Zero Hidden Broker Surcharges',
                  'Chartered Accountants, Advocates & Senior Tech Engineers Direct Oversight',
                  'Direct Integration with Official Portals (MCA, GSTN, Income Tax, DGFT)',
                  'End-to-End Growth Suite (Finance, Legal, Software & Insurance under one roof)'
                ].map((adv, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="font-semibold">{adv}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Traditional Agents Card */}
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-950/80 border border-slate-800/80 space-y-6 opacity-75">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <span className="text-[10px] font-mono text-slate-500 font-bold uppercase tracking-widest">Outdated Legacy Method</span>
                  <h3 className="text-2xl font-black text-slate-400 mt-1">Traditional Offline Brokers</h3>
                </div>
                <div className="px-3.5 py-1.5 rounded-full bg-slate-900 text-slate-500 border border-slate-800 text-xs font-bold font-mono">
                  SLOW &amp; OPAQUE
                </div>
              </div>

              <div className="space-y-4">
                {[
                  'Tedious physical visits, manual paperwork and courier delays',
                  'Unpredictable surprise fees and hidden commission markups',
                  'Unqualified intermediaries without senior CA/CS supervision',
                  'Lack of tracking, silent periods, and missed statutory deadlines',
                  'Fragmented agents requiring you to hire 5 separate service providers'
                ].map((dis, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-500">
                    <div className="w-5 h-5 rounded-full bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 shrink-0 mt-0.5">
                      ✕
                    </div>
                    <span>{dis}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* 8. Comprehensive FAQ Accordion (2-Column Grid Layout) */}
        <section className="space-y-8 max-w-6xl mx-auto">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/30 text-xs font-mono font-bold uppercase">
              <HelpCircle className="w-3.5 h-3.5 text-purple-400" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Questions About {service.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Clear, transparent answers to help you make informed decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
            {serviceFaqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? 'bg-slate-900/90 border-cyan-500/40 shadow-[0_0_20px_rgba(0,240,255,0.1)]' 
                      : 'bg-slate-950/80 border-slate-800/80 hover:border-slate-700'
                  }`}
                >
                  <button
                    onClick={() => {
                      launchSoundEngine.playClickTick();
                      setOpenFaqIndex(isOpen ? null : idx);
                    }}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-3 transition cursor-pointer"
                  >
                    <span className="text-xs sm:text-sm font-bold text-white flex items-center gap-2.5">
                      <HelpCircle className={`w-4 h-4 shrink-0 ${isOpen ? 'text-cyan-400' : 'text-slate-500'}`} />
                      <span>{faq.question}</span>
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-cyan-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 pt-2 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-800/80">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* 9. Related Services Discovery Grid */}
        {relatedServices.length > 0 && (
          <section className="space-y-6 pt-10 border-t border-slate-800/80">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400">DISCOVER RELATED CAPABILITIES</span>
                <h3 className="text-2xl sm:text-3xl font-black text-white">Explore More {catMeta.label}</h3>
              </div>
              <button
                onClick={() => handleNavClick(catMeta.page)}
                className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 cursor-pointer"
              >
                <span>View Full Category</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map(rel => (
                <div
                  key={rel.id}
                  onClick={() => {
                    handleNavClick('service-detail', rel.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="p-6 rounded-3xl bg-slate-950/90 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 cursor-pointer group space-y-4 hover:-translate-y-1.5 shadow-lg flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase font-mono font-bold px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                        {rel.badge || rel.category}
                      </span>
                      <span className="text-xs font-mono font-bold text-cyan-400">{rel.priceStarting || 'Available'}</span>
                    </div>

                    <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {rel.title}
                    </h4>

                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {rel.shortDesc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold text-cyan-400">
                    <span>Explore Service</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 10. High-Impact Bottom Conversion Banner */}
        <div className="relative rounded-3xl p-8 sm:p-14 bg-gradient-to-r from-cyan-950/70 via-slate-950 to-blue-950/70 border-2 border-cyan-500/40 overflow-hidden text-center space-y-6 shadow-[0_0_60px_rgba(0,240,255,0.2)]">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Ready to Expedite Your {service.title}?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Connect directly with our senior specialists for a free, confidential assessment and customized execution plan.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => {
                launchSoundEngine.playClickTick();
                setIsLeadModalOpen(true);
              }}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-black text-sm sm:text-base rounded-2xl shadow-[0_0_30px_rgba(0,240,255,0.4)] hover:scale-105 active:scale-95 transition cursor-pointer"
            >
              Request a Fast Callback
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 font-bold text-sm sm:text-base rounded-2xl transition cursor-pointer"
            >
              Talk to AVRX Support
            </button>
          </div>
        </div>

      </div>

      {/* Consultation Request Modal */}
      {isLeadModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
          <div className="relative w-full max-w-lg rounded-3xl bg-slate-900 border border-slate-800 p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase text-cyan-400 tracking-wider">PRIORITY INTAKE</span>
                <h3 className="text-xl font-bold text-white">Inquire for {service.title}</h3>
              </div>
              <button
                onClick={() => {
                  launchSoundEngine.playClickTick();
                  setIsLeadModalOpen(false);
                }}
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition cursor-pointer"
              >
                ✕
              </button>
            </div>

            {errorMessage && (
              <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs font-semibold flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <input
                type="text"
                name="website_hp"
                value={formData.website_hp}
                onChange={e => setFormData({ ...formData, website_hp: e.target.value })}
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300 uppercase">Your Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Full name"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300 uppercase">Mobile Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300 uppercase">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300 uppercase">City &amp; State</label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={e => setFormData({ ...formData, city: e.target.value })}
                    placeholder="e.g. Raipur, Chhattisgarh"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300 uppercase">Budget / Scale</label>
                  <select
                    value={formData.budget}
                    onChange={e => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option value="Starter / Individual">Starter / Individual</option>
                    <option value="Growth / Standard">Growth / Standard</option>
                    <option value="Enterprise / High-Scale">Enterprise / High-Scale</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300 uppercase">Project Notes / Requirements</label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  placeholder={`Tell us briefly about your goals or questions regarding ${service.title}...`}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 text-slate-950 font-black text-sm uppercase tracking-wider rounded-xl shadow-[0_0_25px_rgba(0,240,255,0.35)] hover:brightness-110 active:scale-98 transition flex items-center justify-center gap-2 cursor-pointer"
              >
                {loading ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Submitting Inquiry...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Priority Request</span>
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
