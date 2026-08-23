import React, { useState } from 'react';
import { INSURANCE_SERVICES } from '../data/servicesData';
import { ServiceItem } from '../types';
import { SEO } from '../components/common/SEO';
import { PartnersSlider } from '../components/common/PartnersSlider';
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
  ExternalLink,
  CheckCircle2,
  Calculator,
  Search,
  MapPin,
  HelpCircle,
  Zap,
  Activity
} from 'lucide-react';
import { launchSoundEngine } from '../utils/launchSoundEngine';

interface InsuranceSolutionsPageProps {
  onNavigate: (page: string, slug?: string) => void;
}

export const InsuranceSolutionsPage: React.FC<InsuranceSolutionsPageProps> = ({ onNavigate }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<'quote' | 'network'>('quote');

  // Interactive Insurance Quote State
  const [insType, setInsType] = useState<'health' | 'motor' | 'term' | 'shop'>('health');
  const [sumInsured, setSumInsured] = useState<number>(1000000); // 10 Lakhs
  const [memberCount, setMemberCount] = useState<number>(2);
  const [vehicleAge, setVehicleAge] = useState<number>(2);

  // Network Search Simulator
  const [searchCity, setSearchCity] = useState<string>('Ambikapur / Surguja');

  // Calculate estimated premium
  const calculateEstimatedPremium = () => {
    if (insType === 'health') {
      const base = (sumInsured / 100000) * 850;
      const multiplier = memberCount === 1 ? 1 : memberCount === 2 ? 1.6 : memberCount === 3 ? 2.1 : 2.6;
      return Math.round(base * multiplier);
    }
    if (insType === 'motor') {
      const base = (sumInsured / 100000) * 1400;
      const ageFactor = Math.max(0.7, 1 - vehicleAge * 0.05);
      return Math.round(base * ageFactor);
    }
    if (insType === 'term') {
      return Math.round((sumInsured / 10000000) * 9600); // 1 Crore ~ 9,600/yr
    }
    // Shop
    return Math.round((sumInsured / 1000000) * 2400);
  };

  const estimatedPremium = calculateEstimatedPremium();

  // Core 5 Insurance Pillars
  const insurancePillars = [
    {
      id: 'health-insurance',
      slug: 'health-insurance',
      title: 'Health & Medical Insurance',
      badge: '100% Cashless',
      badgeColor: 'border-emerald-500/40 text-emerald-300 bg-emerald-500/10',
      icon: HeartPulse,
      glow: 'hover:shadow-[0_15px_40px_rgba(16,185,129,0.2)]',
      border: 'hover:border-emerald-500/60',
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
      badgeColor: 'border-blue-500/40 text-blue-300 bg-blue-500/10',
      icon: Car,
      glow: 'hover:shadow-[0_15px_40px_rgba(59,130,246,0.2)]',
      border: 'hover:border-blue-500/60',
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
      badgeColor: 'border-purple-500/40 text-purple-300 bg-purple-500/10',
      icon: Plane,
      glow: 'hover:shadow-[0_15px_40px_rgba(168,85,247,0.2)]',
      border: 'hover:border-purple-500/60',
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
      badgeColor: 'border-amber-500/40 text-amber-300 bg-amber-500/10',
      icon: Home,
      glow: 'hover:shadow-[0_15px_40px_rgba(245,158,11,0.2)]',
      border: 'hover:border-amber-500/60',
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
      badgeColor: 'border-pink-500/40 text-pink-300 bg-pink-500/10',
      icon: Store,
      glow: 'hover:shadow-[0_15px_40px_rgba(236,72,153,0.2)]',
      border: 'hover:border-pink-500/60',
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
      desc: 'Show your AVRX / Insurer health e-card or vehicle registration number at any network hospital or garage.'
    },
    {
      step: '02',
      title: 'Pre-Authorization',
      desc: 'The network medical desk/garage submits cashless pre-authorization form directly to insurer TPA.'
    },
    {
      step: '03',
      title: 'Instant Approval',
      desc: 'TPA processes cashless approval within 1 to 2 hours with zero cash payment required from you.'
    },
    {
      step: '04',
      title: 'Direct Settlement',
      desc: 'Insurer settles admissible treatment and repair invoices directly with the hospital or network garage.'
    }
  ];

  const simulatedNetworkHospitals = [
    { name: 'Holy Cross Hospital', city: 'Ambikapur / Surguja', type: 'Super-Specialty Hospital', beds: '250+ Beds', status: '100% Cashless Active' },
    { name: 'Sanjeevani Cancer & Multi-Specialty', city: 'Raipur', type: 'Super-Specialty Hospital', beds: '400+ Beds', status: '100% Cashless Active' },
    { name: 'Apollo Hospitals Bilaspur', city: 'Bilaspur', type: 'Tertiary Care Center', beds: '300+ Beds', status: '100% Cashless Active' },
    { name: 'Max Healthcare & Fortis Network', city: 'Delhi-NCR & Pan-India', type: 'National Network', beds: '5000+ Beds', status: '100% Cashless Active' }
  ];

  const insuranceFaqs = [
    {
      q: 'Does AVRX provide claim settlement assistance when an emergency occurs?',
      a: 'Yes. Our dedicated claim desk assists policyholders with immediate guidance, hospital intimation, document verification, and following up with insurer TPAs to ensure fast cashless approvals within 60 minutes.'
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
    },
    {
      q: 'What is the cashless hospitalization procedure under Health Insurance?',
      a: 'Simply present your health e-card and photo ID at the hospital insurance desk. The hospital initiates pre-authorization with the TPA, and approvals are typically granted within 1 to 2 hours with zero out-of-pocket cash requirements for admissible expenses.'
    },
    {
      q: 'How does Commercial Shop & Property Insurance safeguard business assets?',
      a: 'Commercial policies cover physical damage caused by fire, lightning, earthquake, floods, burglary, money-in-transit theft, and public liability, ensuring financial continuity following unexpected business disruptions.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#040713] text-white pt-24 pb-20 selection:bg-purple-500 selection:text-slate-950">
      <SEO
        title="Insurance Solutions | Health, Motor, Travel & Commercial Insurance | AVRX"
        description="Protect what matters most. Instant digital quotes for health floater policies, car/bike insurance, Schengen travel cover, and commercial property protection."
      />

      {/* Ambient background glows */}
      <div className="fixed top-20 left-1/4 w-[700px] h-[500px] bg-purple-500/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="fixed bottom-20 right-1/4 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-[180px] pointer-events-none" />

      {/* Main Container */}
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10 space-y-16">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="pt-2 flex items-center gap-2 text-xs text-slate-400">
          <button 
            onClick={() => onNavigate('home')}
            className="hover:text-purple-400 transition-colors"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-purple-300 font-semibold">Insurance &amp; Protection</span>
        </nav>

        {/* 1. Page Hero Section */}
        <div className="text-center max-w-4xl mx-auto space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-widest font-mono shadow-[0_0_20px_rgba(168,85,247,0.2)]">
            <Shield className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
            <span>RISK &amp; ASSET PROTECTION CONCIERGE</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight">
            Protect What <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-300">
              Matters Most.
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-xl leading-relaxed max-w-3xl mx-auto font-normal">
            Comprehensive individual and family health covers with 100% cashless hospital admissions, instant vehicle renewals, international travel safeguards, and commercial asset protection.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
            <button
              onClick={() => {
                launchSoundEngine.playClickTick();
                setActiveTab('quote');
              }}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition cursor-pointer border ${
                activeTab === 'quote' 
                  ? 'bg-purple-500 text-slate-950 border-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.3)]' 
                  : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:text-white'
              }`}
            >
              Instant Premium Calculator
            </button>
            <button
              onClick={() => {
                launchSoundEngine.playClickTick();
                setActiveTab('network');
              }}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition cursor-pointer border ${
                activeTab === 'network' 
                  ? 'bg-purple-500 text-slate-950 border-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.3)]' 
                  : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:text-white'
              }`}
            >
              10,000+ Cashless Hospital Network
            </button>
          </div>
        </div>

        {/* 2. Interactive Feature Tabs (Quote Estimator & Hospital Network) */}
        {activeTab === 'quote' && (
          <div className="rounded-3xl bg-slate-950/95 border-2 border-purple-500/40 p-6 sm:p-10 backdrop-blur-2xl shadow-[0_0_50px_rgba(168,85,247,0.15)] space-y-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-purple-400">
                  <Calculator className="w-4 h-4" />
                  <span>INSTANT PREMIUM CALCULATOR</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-black text-white">
                  Get An Instant Approximate Insurance Quote
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
                  Compare plan estimates with cashless hospitalization and zero-depreciation add-ons.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-slate-900 border border-purple-500/40 text-right shrink-0">
                <div className="text-[11px] font-mono text-slate-400 uppercase font-bold">Estimated Premium</div>
                <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-mono mt-0.5">
                  ₹{estimatedPremium.toLocaleString('en-IN')}{insType === 'health' ? '/year' : '/year'}
                </div>
                <div className="text-xs text-emerald-400 font-mono font-bold mt-1">
                  Includes 18% GST &amp; Tax Deductions
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Type Switcher */}
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
                <div className="text-xs font-bold text-slate-300">Select Protection Category</div>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'health', label: 'Health Floater' },
                    { id: 'motor', label: 'Car / Motor' },
                    { id: 'term', label: 'Term Life (1Cr)' },
                    { id: 'shop', label: 'Shop / Property' }
                  ].map(item => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setInsType(item.id as any);
                        launchSoundEngine.playClickTick();
                      }}
                      className={`p-2.5 rounded-xl text-xs font-bold transition border cursor-pointer ${
                        insType === item.id 
                          ? 'bg-purple-500 text-slate-950 border-purple-400 shadow' 
                          : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sum Insured Slider */}
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
                <div className="flex justify-between items-center text-xs font-bold text-slate-300">
                  <span>Coverage / Sum Insured</span>
                  <span className="font-mono text-purple-400 text-sm">₹{(sumInsured / 100000).toFixed(1)} Lakhs</span>
                </div>
                <input
                  type="range"
                  min="300000"
                  max="5000000"
                  step="100000"
                  value={sumInsured}
                  onChange={e => {
                    setSumInsured(Number(e.target.value));
                    launchSoundEngine.playClickTick();
                  }}
                  className="w-full accent-purple-400 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>₹3 Lakhs</span>
                  <span>₹25 Lakhs</span>
                  <span>₹50 Lakhs</span>
                </div>
              </div>

              {/* Members or Vehicle Age */}
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
                {insType === 'health' ? (
                  <>
                    <div className="text-xs font-bold text-slate-300">Insured Family Members</div>
                    <div className="grid grid-cols-4 gap-2">
                      {[1, 2, 3, 4].map(num => (
                        <button
                          key={num}
                          onClick={() => {
                            setMemberCount(num);
                            launchSoundEngine.playClickTick();
                          }}
                          className={`py-2 rounded-xl text-xs font-bold border transition cursor-pointer ${
                            memberCount === num
                              ? 'bg-emerald-400 text-slate-950 border-emerald-300 shadow'
                              : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                          }`}
                        >
                          {num === 1 ? '1 (Self)' : `${num} Members`}
                        </button>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex justify-between items-center text-xs font-bold text-slate-300">
                      <span>Vehicle / Property Age</span>
                      <span className="font-mono text-pink-400 text-sm">{vehicleAge} Years Old</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="10"
                      value={vehicleAge}
                      onChange={e => {
                        setVehicleAge(Number(e.target.value));
                        launchSoundEngine.playClickTick();
                      }}
                      className="w-full accent-pink-400 cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                      <span>Brand New (0 Yr)</span>
                      <span>5 Years</span>
                      <span>10+ Years</span>
                    </div>
                  </>
                )}
              </div>

            </div>

            <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-purple-200">
                100% Cashless admissions at 10,000+ hospitals with dedicated AVRX claim desk concierge.
              </div>
              <button
                onClick={() => {
                  launchSoundEngine.playClickTick();
                  onNavigate('contact');
                }}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-400 to-pink-400 text-slate-950 font-black text-xs uppercase hover:scale-105 transition cursor-pointer shrink-0 shadow-lg"
              >
                Request Official Quotation
              </button>
            </div>
          </div>
        )}

        {activeTab === 'network' && (
          <div className="rounded-3xl bg-slate-950/95 border-2 border-purple-500/40 p-6 sm:p-10 backdrop-blur-2xl shadow-[0_0_50px_rgba(168,85,247,0.15)] space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
              <div className="space-y-1">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-purple-400 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>PAN-INDIA CASHLESS NETWORK HOSPITALS &amp; GARAGES</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-white">
                  Find Cashless Facilities Near You
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {simulatedNetworkHospitals.map((hosp, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2 hover:border-purple-500/40 transition">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-purple-300 font-mono">{hosp.city}</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-bold">
                      {hosp.status}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white">{hosp.name}</h4>
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span>{hosp.type}</span>
                    <span>•</span>
                    <span className="text-cyan-300">{hosp.beds}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. Statutory Regulatory Advisory */}
        <div className="rounded-2xl bg-purple-500/10 border border-purple-500/30 p-4 sm:p-5 flex items-start gap-3.5">
          <AlertCircle className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
          <div className="text-xs text-purple-200/90 leading-relaxed font-normal">
            <strong className="text-purple-300 font-semibold">Statutory Advisory &amp; Regulatory Disclosure: </strong>
            Insurance is the subject matter of solicitation. Policy terms, exclusions, sum insured limits, waiting periods, and claim settlements are governed solely by the respective IRDAI-registered insurance underwriting companies and policy wordings. AVRX facilitates policy comparison and claims support.
          </div>
        </div>

        {/* 4. Core Insurance Offerings Grid */}
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-bold uppercase font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
              <span>INSURANCE PORTFOLIO</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white">
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
                  className={`rounded-3xl bg-slate-950/90 border border-slate-800 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] group relative overflow-hidden backdrop-blur-xl ${item.glow} ${item.border}`}
                >
                  <div className="space-y-5">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-purple-400 group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className={`px-3 py-1 rounded-full border text-[11px] font-mono font-bold ${item.badgeColor}`}>
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
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-mono">
                        Coverage Highlights:
                      </div>
                      {item.deliverables.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price & Action */}
                  <div className="pt-6 mt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div>
                      <div className="text-[10px] uppercase font-mono text-slate-500 font-semibold">Indicative Premium</div>
                      <div className="text-sm font-black text-purple-400 font-mono">{item.price}</div>
                    </div>

                    <button
                      onClick={() => {
                        launchSoundEngine.playClickTick();
                        onNavigate('service-detail', item.slug);
                      }}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-purple-500/10 hover:bg-purple-400 border border-purple-500/30 hover:border-purple-400 text-purple-300 hover:text-slate-950 font-bold text-xs transition flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
                    >
                      <span>Get Free Quote</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* 5. 4-Step Cashless Claim Workflow */}
        <div className="bg-slate-950/95 border border-purple-500/40 rounded-3xl p-6 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] relative overflow-hidden space-y-8">
          
          <div className="flex items-center gap-3 pb-6 border-b border-slate-800">
            <div className="p-3.5 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-purple-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl sm:text-3xl font-black text-white">4-Step Fast-Track Cashless Claim Process</h3>
              <p className="text-xs text-slate-400">Zero physical paper hassle and prompt approvals supported by AVRX concierge.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {claimSteps.map((s, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 relative group hover:border-purple-500/40 transition">
                <div className="text-2xl font-mono font-black text-purple-400 group-hover:scale-110 transition-transform">
                  {s.step}
                </div>
                <h4 className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors">{s.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-400">
              Facing an emergency or need immediate hospital admission support?
            </div>
            <button
              onClick={() => {
                launchSoundEngine.playClickTick();
                onNavigate('contact');
              }}
              className="px-6 py-2.5 rounded-xl bg-purple-400 hover:bg-purple-300 text-slate-950 font-bold text-xs transition cursor-pointer shadow-lg hover:scale-105"
            >
              Contact 24/7 Claim Assistance Desk
            </button>
          </div>

        </div>

        {/* 6. FAQ Accordion (2-Column Grid Layout) */}
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-bold uppercase font-mono">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white">
              Insurance &amp; Claims Support Queries
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Straightforward answers about cashless claims, waiting periods, and policy benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
            {insuranceFaqs.map((faq, idx) => (
              <div 
                key={idx}
                className="border border-slate-800 rounded-2xl overflow-hidden bg-slate-950/80 hover:border-purple-500/30 transition-colors"
              >
                <button
                  onClick={() => {
                    launchSoundEngine.playClickTick();
                    setActiveFaq(activeFaq === idx ? null : idx);
                  }}
                  className="w-full p-4 sm:p-5 text-left font-bold text-xs sm:text-sm text-slate-200 flex items-center justify-between gap-3 hover:text-purple-300 transition-colors cursor-pointer"
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

        {/* 7. Bottom CTA Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-purple-950 via-slate-950 to-pink-950 border border-purple-500/40 p-8 sm:p-12 text-center space-y-6 relative overflow-hidden shadow-[0_20px_60px_rgba(168,85,247,0.2)]">
          <div className="max-w-2xl mx-auto space-y-3 relative z-10">
            <h3 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Get Your Free Personalized Insurance Comparison
            </h3>
            <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
              Our IRDAI certified advisors compare 15+ insurance companies to find the highest claim settlement ratio at the best premium.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 relative z-10">
            <button
              onClick={() => {
                launchSoundEngine.playClickTick();
                onNavigate('contact');
              }}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-400 to-pink-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:scale-105 transition flex items-center gap-2 cursor-pointer"
            >
              <span>Get Insurance Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Partners Slider */}
        <PartnersSlider 
          title="Underwriting &amp; Insurance Alliances"
          badgeText="IRDAI REGISTERED INSURERS"
          variant="compact"
        />

      </div>
    </div>
  );
};
