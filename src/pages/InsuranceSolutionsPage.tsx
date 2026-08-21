import React, { useState } from 'react';
import { INSURANCE_SERVICES } from '../data/servicesData';
import { ServiceItem } from '../types';
import { SEO } from '../components/common/SEO';
import { PartnersSlider } from '../components/common/PartnersSlider';
import { renderServiceIcon } from '../utils/iconMap';
import { 
  Shield, 
  Check, 
  ArrowRight, 
  ShieldCheck, 
  PhoneCall, 
  ChevronDown, 
  ChevronRight,
  HeartPulse,
  Car,
  Plane,
  Store,
  Home,
  AlertCircle,
  Clock,
  Sparkles,
  Building2,
  FileCheck,
  ExternalLink
} from 'lucide-react';

interface InsuranceSolutionsPageProps {
  onNavigate: (page: string, slug?: string) => void;
}

export const InsuranceSolutionsPage: React.FC<InsuranceSolutionsPageProps> = ({ onNavigate }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(INSURANCE_SERVICES[0]);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // Core 5 Insurance Pillars
  const insurancePillars = [
    {
      id: 'health-insurance',
      slug: 'health-insurance',
      title: 'Health & Medical Insurance',
      badge: '100% Cashless',
      icon: HeartPulse,
      shortDesc: 'Comprehensive individual and family floater health plans with cashless hospital admissions across 10,000+ network hospitals.',
      deliverables: [
        'Cashless Admissions at 10,000+ Partner Hospitals',
        'Zero Room Rent Capping & No Pre-Medical Checkup Options',
        'Automatic 100% Sum Insured Restoration',
        'Pre & Post Hospitalization Expenses Covered',
        'Day Care Procedures & AYUSH Treatments',
        'Section 80D Tax Deduction Benefits up to ₹75,000'
      ],
      price: 'Starting from ₹499/mo*'
    },
    {
      id: 'motor-insurance',
      slug: 'motor-insurance',
      title: 'Motor & Vehicle Insurance',
      badge: 'Instant Renewal',
      icon: Car,
      shortDesc: 'Comprehensive car, two-wheeler, and commercial fleet insurance with instant policy issuance and zero-depreciation add-ons.',
      deliverables: [
        'Comprehensive & Third-Party Mandatory Cover',
        'Zero Depreciation, Engine Protect & Consumables Add-ons',
        'Cashless Repairs at 5,000+ Authorized Garages',
        '24/7 Nationwide Roadside Breakdown Assistance',
        'No Claim Bonus (NCB) Transfer up to 50%',
        'Instant Digital Policy Issuance in 2 Minutes'
      ],
      price: 'Starting from ₹2,094/yr*'
    },
    {
      id: 'travel-insurance',
      slug: 'travel-insurance',
      title: 'International Travel Insurance',
      badge: 'Schengen Approved',
      icon: Plane,
      shortDesc: 'Global travel cover fulfilling mandatory visa requirements with cashless medical emergency support overseas.',
      deliverables: [
        'Schengen, USA, UK & Global Visa Compliant Cover',
        'Overseas Emergency Medical & Hospitalization Cover',
        'Checked-In Baggage Delay & Loss Compensation',
        'Trip Cancellation, Delay & Interruption Protection',
        'Loss of Passport & Travel Document Assistance',
        '24/7 International Emergency Assistance Hotline'
      ],
      price: 'Starting from ₹450/trip*'
    },
    {
      id: 'home-insurance',
      slug: 'home-insurance',
      title: 'Home & Structure Insurance',
      badge: 'Complete Safety',
      icon: Home,
      shortDesc: 'Safeguard your apartment, villa, structure, and expensive home contents against fire, earthquake, and burglary.',
      deliverables: [
        'Building Structure Cover Against Fire, Storms & Floods',
        'Earthquake & Natural Calamity Protection',
        'Home Contents & Electronics Burglary Cover',
        'Alternative Accommodation Expense Cover',
        'Public Liability Cover for Third-Party Property Damage',
        'Flexible Multi-Year Discounts up to 25%'
      ],
      price: 'Starting from ₹999/yr*'
    },
    {
      id: 'shop-property-insurance',
      slug: 'shop-property-insurance',
      title: 'Shop & Commercial Property Insurance',
      badge: 'Business Shield',
      icon: Store,
      shortDesc: 'Comprehensive commercial insurance for retail shops, offices, warehouses, and factories against operational risks.',
      deliverables: [
        'Building, Stock & Inventory Fire Damage Protection',
        'Burglary, Housebreaking & Robbery Cover',
        'Machinery Breakdown & Electrical Surge Cover',
        'Business Interruption & Loss of Profit Insurance',
        'Money in Transit & Safe Protection',
        'Workmen Compensation & Public Liability Cover'
      ],
      price: 'Starting from ₹1,499/yr*'
    }
  ];

  // 4-Step Cashless Claim Workflow
  const claimSteps = [
    {
      step: '01',
      title: 'Intimate Claim',
      desc: 'Show your AVRX / Insurer health e-card or vehicle details at any network hospital or garage.'
    },
    {
      step: '02',
      title: 'Pre-Authorization',
      desc: 'The network hospital/garage submits the cashless pre-authorization form directly to the insurer TPA.'
    },
    {
      step: '03',
      title: 'Instant Approval',
      desc: 'TPA processes the cashless approval within 1 to 2 hours with zero upfront hospital cash payments.'
    },
    {
      step: '04',
      title: 'Direct Settlement',
      desc: 'Insurer settles admissible treatment/repair bills directly with the medical center or network garage.'
    }
  ];

  const insuranceFaqs = [
    {
      q: 'Does AVRX provide claim settlement assistance when an emergency occurs?',
      a: 'Yes. Our dedicated claim desk assists policyholders with immediate guidance, hospital intimation, document verification, and following up with insurer TPAs to ensure fast cashless approvals.'
    },
    {
      q: 'Can I transfer my existing No Claim Bonus (NCB) when switching car insurers?',
      a: 'Yes. You can transfer up to 50% of your accumulated No Claim Bonus (NCB) from your previous insurance provider by submitting your previous policy copy during renewal.'
    },
    {
      q: 'Are pre-existing medical diseases covered under Health Insurance?',
      a: 'Most health policies cover pre-existing conditions after a waiting period of 2 to 3 years. We also offer specialized plans with reduced waiting periods (1 year or day 1) for specific conditions subject to underwriting.'
    },
    {
      q: 'Is travel insurance mandatory for Schengen European visa applications?',
      a: 'Yes. European embassies mandate travel health insurance with a minimum medical coverage of €30,000 covering all Schengen member countries. All AVRX international travel policies fully comply with Schengen visa mandates.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#050811] text-white pt-24 pb-20 selection:bg-purple-500 selection:text-slate-950">
      <SEO
        title="Insurance Solutions | Health, Motor, Travel & Commercial Insurance | AVRX"
        description="Protect what matters most. Instant digital quotes for health floater policies, car/bike insurance, Schengen travel cover, and commercial property protection."
      />

      {/* Main Container - Stretched Widescreen Layout */}
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="pt-4 pb-6 flex items-center gap-2 text-xs text-slate-400">
          <button 
            onClick={() => onNavigate('home')}
            className="hover:text-purple-400 transition-colors"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-purple-300 font-semibold">Insurance Solutions</span>
        </nav>

        {/* 1. Page Hero Section */}
        <div className="text-center max-w-4xl mx-auto my-8 space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(168,85,247,0.15)]">
            <Shield className="w-3.5 h-3.5 text-purple-400" />
            <span>RISK & ASSET PROTECTION CONCIERGE</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight">
            Protect <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">What Matters Most.</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-lg leading-relaxed max-w-3xl mx-auto">
            Comprehensive individual and family health covers with 100% cashless hospital admissions, instant vehicle renewals, international travel safeguards, and commercial asset protection.
          </p>
        </div>

        {/* 2. Statutory IRDAI Notice */}
        <div className="my-8">
          <div className="rounded-2xl bg-purple-500/10 border border-purple-500/30 p-4 sm:p-5 flex items-start gap-3.5">
            <AlertCircle className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
            <div className="text-xs text-purple-200/90 leading-relaxed">
              <strong className="text-purple-300 font-semibold">Statutory Advisory & Regulatory Disclosure: </strong>
              Insurance is the subject matter of solicitation. Policy terms, exclusions, sum insured limits, waiting periods, and claim settlements are governed solely by the respective IRDAI-registered insurance underwriting companies and policy wordings. AVRX facilitates policy comparison and claims support.
            </div>
          </div>
        </div>

        {/* 3. Partners Slider */}
        <div className="my-10">
          <PartnersSlider 
            title="Underwriting & Insurance Alliances"
            badgeText="IRDAI REGISTERED INSURERS"
            description="Comparing plans across leading general and health insurance providers in India."
            variant="compact"
          />
        </div>

        {/* 4. Core Insurance Products Grid */}
        <div className="my-16 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
              <span>INSURANCE PORTFOLIO</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white">
              Tailored Protection Plans
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Select any protection plan below to check coverage highlights and request an instant quote.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {insurancePillars.map(item => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="rounded-3xl bg-slate-900/80 border border-slate-800/90 hover:border-purple-500/50 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_15px_40px_rgba(168,85,247,0.12)] group relative overflow-hidden"
                >
                  <div className="space-y-5">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 text-purple-400 group-hover:border-purple-500/40 group-hover:text-purple-300 transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/30 text-[11px] font-mono font-bold">
                        {item.badge}
                      </span>
                    </div>

                    {/* Title & Desc */}
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-purple-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                        {item.shortDesc}
                      </p>
                    </div>

                    {/* Features List */}
                    <div className="space-y-2 pt-3 border-t border-slate-800/80">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                        Coverage Highlights:
                      </div>
                      {item.deliverables.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <Check className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price & Action */}
                  <div className="pt-6 mt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div>
                      <div className="text-[10px] uppercase font-mono text-slate-500">Premium Indicative</div>
                      <div className="text-sm font-black text-purple-400 font-mono">{item.price}</div>
                    </div>

                    <button
                      onClick={() => onNavigate('service-detail', item.slug)}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-purple-500/10 hover:bg-purple-500 border border-purple-500/30 hover:border-purple-400 text-purple-300 hover:text-slate-950 font-bold text-xs transition flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <span>Compare Plans</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* 5. 4-Step Cashless Claim Workflow */}
        <div className="my-20 bg-gradient-to-br from-[#10061a] via-[#08070d] to-[#02050f] border border-purple-500/30 rounded-3xl p-6 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] relative overflow-hidden">
          
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-bold uppercase">
              <Clock className="w-3.5 h-3.5 text-purple-400" />
              <span>HASSLE-FREE CLAIMS</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-black text-white">
              How Cashless Claims Work
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Zero out-of-pocket stress during medical or accidental emergencies with our direct network settlement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {claimSteps.map((step, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-3 hover:border-purple-500/40 transition text-center"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-300 font-mono font-black text-sm mx-auto">
                  {step.step}
                </div>
                <h4 className="text-base font-bold text-white">{step.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

        </div>

        {/* 6. Why Choose AVRX Insurance Concierge */}
        <div className="my-20 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-bold uppercase">
              <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
              <span>THE AVRX DIFFERENCE</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white">
              Why Insure Through AVRX
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-2">
              <div className="text-purple-400 font-mono font-bold text-xs">01 / UNBIASED COMPARISON</div>
              <h4 className="font-bold text-white text-sm">Transparent Policy Audits</h4>
              <p className="text-xs text-slate-400 leading-relaxed">We analyze room rent limits, co-pay clauses, and hidden exclusions across 20+ insurers.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-2">
              <div className="text-purple-400 font-mono font-bold text-xs">02 / DEDICATED CLAIM DESK</div>
              <h4 className="font-bold text-white text-sm">24/7 Emergency Support</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Direct human assistance to guide pre-auth approvals and eliminate hospital desk delays.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-2">
              <div className="text-purple-400 font-mono font-bold text-xs">03 / INSTANT RENEWAL</div>
              <h4 className="font-bold text-white text-sm">100% Digital Issuance</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Renew motor, health, and commercial policies in 2 minutes with instant digital certificate delivery.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-2">
              <div className="text-purple-400 font-mono font-bold text-xs">04 / MAXIMUM DISCOUNTS</div>
              <h4 className="font-bold text-white text-sm">NCB & Multi-Year Savings</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Transfer up to 50% NCB bonus and unlock up to 25% multi-year family floater discounts.</p>
            </div>
          </div>
        </div>

        {/* 7. Insurance FAQs Section */}
        <div className="my-20 max-w-4xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-bold uppercase">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Insurance & Claim Assistance Questions
            </h2>
          </div>

          <div className="space-y-3">
            {insuranceFaqs.map((faq, idx) => (
              <div 
                key={idx}
                className="border border-slate-800 rounded-2xl overflow-hidden bg-slate-900/80"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left font-bold text-xs sm:text-sm text-slate-200 flex items-center justify-between gap-3 hover:text-purple-300 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-purple-400 shrink-0 transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`} />
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

        {/* 8. High-Conversion CTA */}
        <div className="my-16 rounded-3xl bg-gradient-to-r from-purple-950 via-slate-900 to-indigo-950 border border-purple-500/40 p-8 sm:p-14 text-center space-y-6 relative overflow-hidden shadow-[0_20px_60px_rgba(168,85,247,0.15)]">
          <div className="max-w-2xl mx-auto space-y-3 relative z-10">
            <h3 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Ready to Secure Comprehensive Protection?
            </h3>
            <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
              Compare family health, motor, and business insurance plans with an AVRX specialist today.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 relative z-10">
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-400 text-slate-950 font-black text-sm shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:scale-105 transition flex items-center gap-2"
            >
              <span>Get Instant Insurance Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('ai-tools')}
              className="px-6 py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-white font-bold text-xs transition flex items-center gap-2"
            >
              <span>Calculate Insurance Premium</span>
              <ExternalLink className="w-3.5 h-3.5 text-purple-400" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
