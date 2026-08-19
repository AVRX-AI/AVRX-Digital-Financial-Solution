import React, { useState } from 'react';
import { 
  Code2, 
  DollarSign, 
  FileText, 
  Shield, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Layout, 
  Smartphone, 
  ShoppingBag, 
  Megaphone, 
  TrendingUp, 
  Building2, 
  Home, 
  Car, 
  Key, 
  Landmark, 
  HeartPulse, 
  Plane, 
  Store, 
  FileCheck, 
  Calculator, 
  Award,
  ChevronRight
} from 'lucide-react';

interface SolutionsGridProps {
  onNavigate: (page: string, slug?: string) => void;
}

interface ServiceCardData {
  id: string;
  slug: string;
  category: 'digital' | 'financial' | 'tax' | 'insurance';
  badge?: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  ctaText: string;
}

export const SolutionsGrid: React.FC<SolutionsGridProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'digital' | 'financial' | 'insurance' | 'tax'>('all');

  const services: ServiceCardData[] = [
    // --- DIGITAL SOLUTIONS ---
    {
      id: 'web-design',
      slug: 'website-design',
      category: 'digital',
      badge: 'Popular',
      title: 'Website Design',
      description: 'High-performance, modern and conversion-focused websites designed to establish a powerful digital presence for your business.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      features: [
        'Responsive Fluid UI/UX Design',
        'SEO-Ready Semantic Architecture',
        'Fast Performance & Cold-Start Speed',
        'Business Websites & High-Converting Landing Pages',
        'CMS & Lead Form Integration'
      ],
      ctaText: 'Explore Website Design'
    },
    {
      id: 'app-dev',
      slug: 'app-development',
      category: 'digital',
      badge: 'Cross-Platform',
      title: 'Application Development',
      description: 'Custom Android, iOS and cross-platform mobile applications engineered seamlessly around your business workflows and user experience.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
      features: [
        'Native & React Native / Flutter Apps',
        'Play Store & App Store Publishing',
        'User Biometric Auth & Security',
        'API & Payment Gateway Integration',
        'Push Notifications & Analytics Hooks'
      ],
      ctaText: 'Explore App Development'
    },
    {
      id: 'web-app',
      slug: 'web-app',
      category: 'digital',
      badge: 'Scalable SaaS',
      title: 'Web App Development',
      description: 'Scalable web applications and enterprise portals that transform complex business workflows into simple, high-speed digital experiences.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      features: [
        'Custom SaaS Platforms & Portals',
        'Interactive Admin Dashboards',
        'Role-Based Access Control (RBAC)',
        'Cloud Database & REST/GraphQL APIs',
        'Automated CI/CD Deployment'
      ],
      ctaText: 'Explore Web Apps'
    },
    {
      id: 'ecommerce',
      slug: 'ecommerce',
      category: 'digital',
      badge: 'High Conversion',
      title: 'E-Commerce Website',
      description: 'Build a complete online store designed to attract customers, simplify shopping, process UPI/card payments, and scale your online business.',
      image: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=800&q=80',
      features: [
        'Unlimited Product Catalogues',
        'Seamless UPI & Razorpay/Stripe Payments',
        'Automated Order & Shipping Tracking',
        'Abandoned Cart Recovery & Coupons',
        'Customer Accounts & Mobile-Optimized Cart'
      ],
      ctaText: 'Build My Store'
    },
    {
      id: 'digital-marketing',
      slug: 'digital-marketing',
      category: 'digital',
      badge: 'ROI Focused',
      title: 'Digital Marketing & Growth',
      description: 'Data-driven digital marketing strategies and paid ad campaigns designed to improve visibility, engagement, and qualified customer acquisition.',
      image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=800&q=80',
      features: [
        'Google Search & Display Ads',
        'Meta (Facebook & Instagram) Targeted Lead Ads',
        'Content Strategy & Social Branding',
        'Conversion Rate Optimization (CRO)',
        'Weekly Transparent ROI Analytics'
      ],
      ctaText: 'Grow My Business'
    },
    {
      id: 'seo',
      slug: 'seo',
      category: 'digital',
      badge: 'Organic Rank',
      title: 'SEO & Google Ranking',
      description: 'Technical and content-focused SEO strategies designed to improve your website search visibility, keyword authority, and organic traffic.',
      image: 'https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?auto=format&fit=crop&w=800&q=80',
      features: [
        'Technical SEO Audit & Core Web Vitals Fixes',
        'Keyword & Competitor Research',
        'On-Page Optimization & Schema Markup',
        'Google Search Console & Local SEO Setup',
        'Organic High-Authority Link Strategy'
      ],
      ctaText: 'Improve My Ranking'
    },

    // --- FINANCIAL SOLUTIONS ---
    {
      id: 'personal-loan',
      slug: 'personal-loan',
      category: 'financial',
      badge: 'Quick Approval',
      title: 'Personal Loan Solutions',
      description: 'Flexible personal financing for medical emergencies, wedding, travel, education or immediate cash requirements from top RBI-approved partners.',
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=800&q=80',
      features: [
        'Loan Limits from ₹50,000 up to ₹25 Lakhs',
        'Tenure Options from 12 to 60 Months',
        '100% Digital Paperless Application',
        'No Collateral or Security Required',
        'Quick Disbursement Post-Verification'
      ],
      ctaText: 'Explore Personal Loan'
    },
    {
      id: 'business-loan',
      slug: 'business-loan',
      category: 'financial',
      badge: 'Collateral Free',
      title: 'Business & Working Capital Loans',
      description: 'Collateral-free working capital, machinery loans, and expansion financing customized for MSMEs, startups, and established enterprises.',
      image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=1200&q=80',
      features: [
        'Business Capital up to ₹1 Crore',
        'Collateral-Free Financing Options',
        'Daily / Monthly Flexible EMI Repayment',
        'Minimal Financials for Micro-Enterprises',
        'Partnerships with 20+ Leading Banks & NBFCs'
      ],
      ctaText: 'Explore Business Loan'
    },
    {
      id: 'home-loan',
      slug: 'home-loan',
      category: 'financial',
      badge: 'Lowest Rates',
      title: 'Home Loan & Construction',
      description: 'Attractive interest rate home loans for purchasing flats, constructing houses, or extending your dream property with tenures up to 30 years.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
      features: [
        'Up to 90% Property Cost Funding',
        'Tenure up to 30 Years for Low EMIs',
        'Doorstep Legal & Technical Assistance',
        'PMAY / Subsidy Guidance Support',
        'Balance Transfer & Top-Up Facility'
      ],
      ctaText: 'Explore Home Loan'
    },
    {
      id: 'car-loan',
      slug: 'car-loan',
      category: 'financial',
      badge: 'New & Used',
      title: 'New & Used Car Loans',
      description: 'Finance your new or pre-owned personal or commercial vehicle with high on-road funding ratios and competitive interest rates.',
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
      features: [
        'Up to 100% On-Road Price Financing',
        'New & Pre-Owned Vehicle Coverage',
        'Flexible Tenures up to 7 Years',
        'Quick Spot Approval Schemes',
        'Smooth RC Endorsement Assistance'
      ],
      ctaText: 'Explore Car Loan'
    },
    {
      id: 'property-loan',
      slug: 'mortgage-loan',
      category: 'financial',
      badge: 'High Value',
      title: 'Property Loan / Loan Against Property',
      description: 'Unlock high-ticket liquidity by mortgaging your residential or commercial real estate for major business expansion or debt consolidation.',
      image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800&q=80',
      features: [
        'High Sanction Limits up to ₹5 Crores',
        'Significantly Lower Interest than Unsecured Loans',
        'Longer Repayment Tenures up to 15 Years',
        'Retain Occupancy & Property Ownership',
        'End-to-End Legal Title Audit'
      ],
      ctaText: 'Explore Property Loan'
    },
    {
      id: 'govt-scheme-loans',
      slug: 'government-scheme-loans',
      category: 'financial',
      badge: 'Govt Subsidy',
      title: 'Government Scheme Loans (PMEGP / MUDRA)',
      description: 'Explore government-subsidized credit programs including PMEGP subsidies up to 35%, MUDRA loans, and CGTMSE collateral guarantees.',
      image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80',
      features: [
        'PMEGP Subsidy Application Assistance (up to 35%)',
        'MUDRA Loans (Shishu, Kishore, Tarun)',
        'Detailed Project Report (DPR) Preparation',
        'CGTMSE Collateral-Free Credit Guarantee Guidance',
        'Handholding through Bank Follow-ups'
      ],
      ctaText: 'Explore Govt Schemes'
    },

    // --- INSURANCE SOLUTIONS ---
    {
      id: 'health-insurance',
      slug: 'health-insurance',
      category: 'insurance',
      badge: 'Cashless Network',
      title: 'Health & Medical Insurance',
      description: 'Comprehensive family floaters and individual health insurance covering hospitalization, surgeries, ICU fees, and day-care procedures.',
      image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80',
      features: [
        'Cashless Admission across 10,000+ Network Hospitals',
        'No Room Rent Capping Options',
        'Pre & Post Hospitalization Cover (60/180 Days)',
        'Tax Benefit under Section 80D up to ₹75,000',
        'Dedicated 24/7 Claim Assistance Concierge'
      ],
      ctaText: 'Explore Health Insurance'
    },
    {
      id: 'motor-insurance',
      slug: 'motor-insurance',
      category: 'insurance',
      badge: 'Instant Renewal',
      title: 'Motor & Vehicle Insurance',
      description: 'Protect your two-wheeler, private car, or commercial vehicle against accident damage, theft, third-party liability, and natural disasters.',
      image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
      features: [
        'Comprehensive & Third-Party Mandatory Policies',
        'Zero Depreciation & Engine Protection Add-ons',
        'Cashless Repairs at 5,000+ Partner Garages',
        'Instant Policy Issuance with NCB Transfer',
        'Fast-Track Digital Claim Processing'
      ],
      ctaText: 'Explore Motor Insurance'
    },
    {
      id: 'travel-insurance',
      slug: 'travel-insurance',
      category: 'insurance',
      badge: 'Schengen Compliant',
      title: 'International Travel Insurance',
      description: 'Overseas travel protection covering international medical emergencies, trip delays, passport loss, and baggage loss for seamless visa approvals.',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
      features: [
        'Schengen & Global Embassy Visa Compliant',
        'Medical Emergency Cover up to $500,000',
        'Baggage Loss & Passport Reimbursement',
        'Trip Cancellation & Delay Coverage',
        'Instant Policy PDF for Visa Appointments'
      ],
      ctaText: 'Explore Travel Insurance'
    },
    {
      id: 'home-shop-insurance',
      slug: 'home-insurance',
      category: 'insurance',
      badge: 'Property & Stock',
      title: 'Home & Shop Property Insurance',
      description: 'Safeguard your residence, retail store, showroom, or warehouse against fire, earthquakes, floods, burglary, and commercial stock damage.',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
      features: [
        'Building Structure & Interior Contents Cover',
        'Commercial Inventory & Stock-in-Trade Protection',
        'Burglary, Theft & Public Liability Cover',
        'Protection against Floods, Earthquakes & Fire',
        'Affordable Protection Starting under ₹5/day'
      ],
      ctaText: 'Explore Property Insurance'
    },

    // --- TAX & BUSINESS SOLUTIONS ---
    {
      id: 'gst-services',
      slug: 'gst',
      category: 'tax',
      badge: 'Essential',
      title: 'GST Registration & Monthly Filings',
      description: 'Get your official 15-digit GSTIN issued swiftly with expert compliance review, followed by monthly GSTR-1 & 3B return filings and ITC reconciliation.',
      image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=800&q=80',
      features: [
        '100% Digital Document Verification & ARN Generation',
        'GSTR-1 Sales & GSTR-3B Monthly Return Filing',
        'Automated GSTR-2B Input Tax Credit (ITC) Matching',
        'Annual GSTR-9 Filing & Tax Audit Support',
        'Zero Rejection Guarantee on Applications'
      ],
      ctaText: 'Explore GST Services'
    },
    {
      id: 'itr-filing',
      slug: 'itr',
      category: 'tax',
      badge: 'Max Refund',
      title: 'Income Tax Return (ITR) Filing',
      description: 'Accurate tax return filing for salaried employees, business owners, freelancers, and NRIs under Old vs New Tax Regimes with maximum tax deductions.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80',
      features: [
        'Chartered Accountant Review of AIS/TIS & Form 26AS',
        'Optimization under Old vs New Tax Regime',
        'Filing for Salaried, Business, Capital Gains & Crypto',
        'Expedited Tax Refund Processing',
        'IT Notice Resolution & Rectification Support'
      ],
      ctaText: 'Explore ITR Filing'
    },
    {
      id: 'udyam-registration',
      slug: 'udyam-registration',
      category: 'tax',
      badge: 'Govt MSME',
      title: 'Udyam / MSME Registration',
      description: 'Obtain your official government MSME Udyam Certificate to unlock priority bank loans, lower interest rates, and protection against delayed payments.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      features: [
        'Official Udyam Certificate with Lifetime Validity',
        'Correct NIC Activity Code Classification',
        'Priority Sector Bank Lending Concessions',
        'Protection under MSME Delayed Payments Samadhaan',
        'Fast 24-Hour Certificate Delivery'
      ],
      ctaText: 'Explore Udyam Registration'
    },
    {
      id: 'company-registration',
      slug: 'company-registration',
      category: 'tax',
      badge: 'Startup Ready',
      title: 'Company & Business Incorporation',
      description: 'Incorporate Private Limited, LLP, One Person Company (OPC), or Partnership entities with MCA, including DIN, DSC, PAN, TAN, and MoA/AoA.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
      features: [
        'Private Limited / LLP / OPC Incorporation',
        'Company Name Approval & SPICe+ MCA Filing',
        'Digital Signature Certificates (DSC) for Directors',
        'MoA, AoA & Certificate of Incorporation',
        'PAN, TAN & Corporate Bank Account Guidance'
      ],
      ctaText: 'Explore Company Registration'
    }
  ];

  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(s => s.category === activeTab);

  const getCategoryBadgeColor = (category: string) => {
    switch (category) {
      case 'digital':
        return 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30';
      case 'financial':
        return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30';
      case 'tax':
        return 'text-amber-400 bg-amber-500/10 border-amber-500/30';
      case 'insurance':
        return 'text-purple-400 bg-purple-500/10 border-purple-500/30';
      default:
        return 'text-blue-400 bg-blue-500/10 border-blue-500/30';
    }
  };

  return (
    <section id="solutions-section" className="py-24 bg-[#050811] relative overflow-hidden border-t border-slate-800/80">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-cyan-500/5 via-blue-500/5 to-purple-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comprehensive Solutions Portfolio</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            Solutions Built Around{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              Your Goals
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            From building your digital presence to managing your financial and business needs, AVRX brings everything together in one platform.
          </p>
        </div>

        {/* Category Switcher Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {[
            { id: 'all', label: 'All Solutions (18+)', icon: Sparkles },
            { id: 'digital', label: 'Digital Solutions', icon: Code2 },
            { id: 'financial', label: 'Financial Solutions', icon: DollarSign },
            { id: 'insurance', label: 'Insurance Solutions', icon: Shield },
            { id: 'tax', label: 'Tax & Business', icon: FileText }
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 sm:px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all border flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 border-cyan-400 shadow-[0_0_20px_rgba(0,240,255,0.35)] scale-102'
                    : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 border-slate-800'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-slate-950' : 'text-cyan-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Responsive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map(service => {
            const badgeColor = getCategoryBadgeColor(service.category);

            return (
              <div
                key={service.id}
                onClick={() => {
                  onNavigate('service-detail', service.slug);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group relative rounded-3xl bg-slate-900/85 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] flex flex-col justify-between overflow-hidden cursor-pointer backdrop-blur-sm"
              >
                {/* Image Showcase Container with subtle zoom on hover */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-95" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${badgeColor}`}>
                      {service.category}
                    </span>
                    {service.badge && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-950/80 text-cyan-300 border border-cyan-500/30 backdrop-blur-md">
                        ★ {service.badge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed line-clamp-3">
                      {service.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="pt-4 border-t border-slate-800/80 space-y-2">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Key Highlights:
                    </div>
                    <div className="space-y-1.5">
                      {service.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 group-hover:text-cyan-300 transition" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action CTA Button */}
                  <div className="pt-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onNavigate('service-detail', service.slug);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="w-full py-3.5 px-4 rounded-2xl bg-slate-950 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500 text-slate-300 hover:text-slate-950 border border-slate-800 hover:border-cyan-400 text-xs font-bold flex items-center justify-between transition group-hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] cursor-pointer"
                    >
                      <span>{service.ctaText}</span>
                      <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:text-slate-950 group-hover:translate-x-1.5 transition-transform" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Fast Navigation Bar to All Categories */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            Need something tailored or complex? Explore our specialized category hubs:
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button onClick={() => onNavigate('digital-solutions')} className="text-cyan-400 hover:underline font-semibold">
              Digital Hub →
            </button>
            <button onClick={() => onNavigate('financial-solutions')} className="text-emerald-400 hover:underline font-semibold">
              Finance Hub →
            </button>
            <button onClick={() => onNavigate('tax-solutions')} className="text-amber-400 hover:underline font-semibold">
              Tax Hub →
            </button>
            <button onClick={() => onNavigate('insurance-solutions')} className="text-purple-400 hover:underline font-semibold">
              Insurance Hub →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
