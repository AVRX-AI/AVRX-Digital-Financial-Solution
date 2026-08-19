import React, { useState } from 'react';
import { 
  CircleDollarSign, 
  Shield, 
  Briefcase, 
  Car, 
  Home, 
  CreditCard, 
  Bike, 
  Landmark, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  HeartPulse, 
  Plane, 
  Store, 
  Truck, 
  Tractor, 
  HardHat, 
  ShieldCheck
} from 'lucide-react';

interface FinancialSolutionsProps {
  onNavigate: (page: string, slug?: string) => void;
}

export const FinancialSolutionsSection: React.FC<FinancialSolutionsProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'loans' | 'insurance'>('loans');

  // Comprehensive Loan Solutions
  const loanServices = [
    {
      id: 'personal-loan',
      title: 'Personal Loan',
      badge: 'Fast Disbursal',
      rate: 'Interest from 10.5% p.a.*',
      desc: 'Instant collateral-free funds up to ₹25 Lakhs for medical emergencies, weddings, education, or travel.',
      imageUrl: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
      features: ['Up to ₹25 Lakhs', 'Tenure 12-60 Months', '100% Digital KYC', 'Minimal Documents'],
      icon: CircleDollarSign
    },
    {
      id: 'business-loan',
      title: 'Business Loan',
      badge: 'Growth Capital',
      rate: 'Interest from 12.0% p.a.*',
      desc: 'Unsecured working capital, machinery financing, and expansion credit for enterprises and startups.',
      imageUrl: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=1200&q=80',
      features: ['Up to ₹1 Crore', 'Collateral-Free Options', 'Quick Sanction Cycle', 'Flexible Repayment'],
      icon: Briefcase
    },
    {
      id: 'car-loan',
      title: 'Car Loan (New & Used)',
      badge: 'Low Downpayment',
      rate: 'Interest from 8.8% p.a.*',
      desc: 'High on-road financing for new vehicles and competitive funding for certified pre-owned cars.',
      imageUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
      features: ['Up to 100% On-Road Funding', 'Tenure up to 7 Years', 'Used Car Valuation Support', 'Spot Approvals'],
      icon: Car
    },
    {
      id: 'property-loan',
      title: 'Loan Against Property (LAP)',
      badge: 'High Value',
      rate: 'Interest from 9.25% p.a.*',
      desc: 'Unlock deep liquidity against residential, commercial, or industrial properties with long tenures.',
      imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
      features: ['Up to ₹5 Crores Sanction', 'Tenures up to 15 Years', 'Lower Interest Rate', 'Retain Full Ownership'],
      icon: Landmark
    },
    {
      id: 'credit-cards',
      title: 'Credit Cards Advisory',
      badge: 'Instant Rewards',
      rate: 'Pre-Approved Offers',
      desc: 'Compare and apply for top lifestyle, fuel, travel, and cashback credit cards with lifetime-free benefits.',
      imageUrl: 'https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=800&q=80',
      features: ['Zero Annual Fee Options', 'Airport Lounge Access', 'Instant Reward Points', 'Digital Card Issuance'],
      icon: CreditCard
    },
    {
      id: 'home-loan',
      title: 'Home Loan & Construction',
      badge: 'Lowest Rates',
      rate: 'Interest from 8.35% p.a.*',
      desc: 'Affordable home purchase and plot construction loans with long repayment tenures up to 30 years.',
      imageUrl: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80',
      features: ['Up to 90% Property Cost', 'Tenures up to 30 Years', 'Tax Benefits 80C & 24b', 'Balance Transfer Support'],
      icon: Home
    },
    {
      id: 'bike-loan',
      title: 'Two-Wheeler & Bike Loan',
      badge: 'Spot Approval',
      rate: 'Interest from 9.9% p.a.*',
      desc: 'Instant financing for commuter bikes, sports motorcycles, and high-efficiency electric scooters (EVs).',
      imageUrl: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80',
      features: ['Up to 95% On-Road Funding', 'Instant In-Showroom Approval', 'Low Monthly EMIs', 'EV Subsidies Included'],
      icon: Bike
    },
    {
      id: 'govt-subsidy-loan',
      title: 'Govt Subsidy Scheme Loans',
      badge: 'Govt Backed',
      rate: 'Subsidies up to 35%*',
      desc: 'Comprehensive guidance to secure government-backed credit facilities and capital subsidies.',
      imageUrl: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80',
      features: ['Subsidies up to 35%', 'Project Report Preparation', 'CGTMSE Collateral Waiver', 'Direct Bank Coordination'],
      icon: Landmark
    },
    {
      id: 'pmegp-loan',
      title: 'PMEGP Scheme Loan',
      badge: '35% Subsidy',
      rate: 'Govt PMEGP Program',
      desc: 'Prime Minister Employment Generation Programme financing for setting up new manufacturing or service units.',
      imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
      features: ['Up to ₹50 Lakhs Project Size', 'Margin Money Subsidy 15-35%', 'CA-Certified DPR Included', 'Portal Filing Assistance'],
      icon: Briefcase
    },
    {
      id: 'mudra-loan',
      title: 'MUDRA Loan (Shishu/Kishore/Tarun)',
      badge: 'Zero Collateral',
      rate: 'MUDRA Scheme',
      desc: 'Collateral-free micro loans up to ₹10 Lakhs under the Pradhan Mantri MUDRA Yojana for small business owners.',
      imageUrl: 'https://images.unsplash.com/photo-1589758438368-0ad531db3366?auto=format&fit=crop&w=800&q=80',
      features: ['Shishu (up to ₹50K)', 'Kishore (₹50K to ₹5L)', 'Tarun (₹5L to ₹10L)', 'No Collateral Security'],
      icon: CircleDollarSign
    }
  ];

  // Comprehensive Insurance Solutions
  const insuranceServices = [
    {
      id: 'motor-insurance',
      title: 'Motor Insurance (All Vehicles)',
      badge: 'Instant PDF',
      categoryType: 'Comprehensive & Third Party',
      desc: 'Instant vehicle policy issuance with cashless repair network across 5,000+ garages nationwide.',
      imageUrl: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80',
      features: ['Zero Dep & Engine Protect', 'Cashless Claims Network', 'Instant NCB Transfer', '24x7 Roadside Assist'],
      icon: Shield
    },
    {
      id: 'two-wheeler-insurance',
      title: 'Two Wheeler Bike Insurance',
      badge: 'Starts @ ₹499/yr',
      categoryType: 'Bike / Scooter / EV',
      desc: 'Comprehensive & mandatory third-party insurance for all scooters, commuter bikes, and electric 2-wheelers.',
      imageUrl: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80',
      features: ['Instant Policy Issuance', 'Personal Accident Cover ₹15L', 'No Inspection Required', 'Break-in Renewal Support'],
      icon: Bike
    },
    {
      id: 'four-wheeler-insurance',
      title: 'Four Wheeler Car Insurance',
      badge: 'Cashless Garages',
      categoryType: 'Private & Fleet',
      desc: 'Complete accidental damage, theft, and natural calamity protection for private cars and commercial fleets.',
      imageUrl: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80',
      features: ['Bumper to Bumper Zero Dep', 'Consumable & Tyre Cover', 'Key Replacement Benefit', 'Instant Claim Concierge'],
      icon: Car
    },
    {
      id: 'goods-vehicle-insurance',
      title: 'Goods Commercial Vehicle Insurance',
      badge: 'Commercial Fleet',
      categoryType: 'Trucks / Pickups / Vans',
      desc: 'Heavy and light goods carriage commercial vehicle policies compliant with national transport regulations.',
      imageUrl: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80',
      features: ['Goods in Transit Coverage', 'Driver & Cleaner Personal Cover', 'Third Party Legal Liability', 'Multi-Vehicle Fleet Rates'],
      icon: Truck
    },
    {
      id: 'tractor-insurance',
      title: 'Tractor & Agro Vehicle Insurance',
      badge: 'Agriculture Plan',
      categoryType: 'Farm Machinery',
      desc: 'Dedicated rural & agricultural vehicle insurance safeguarding tractors, trailers, and harvester machinery.',
      imageUrl: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=800&q=80',
      features: ['Farm Equipment Damage Cover', 'Third Party Rural Liability', 'Subsidized Rural Premiums', 'Fast Claim Settlement'],
      icon: Tractor
    },
    {
      id: 'construction-equipment-insurance',
      title: 'Construction Equipment Policy',
      badge: 'Heavy Machinery',
      categoryType: 'Excavator / Cranes / JCB',
      desc: 'Specialized Contractor Plant & Machinery (CPM) insurance covering cranes, excavators, loaders, and pavers.',
      imageUrl: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80',
      features: ['On-Site Accidental Damage', 'Burglary & Vandalism Shield', 'Operator Liability Cover', 'High Sum Insured Protection'],
      icon: HardHat
    },
    {
      id: 'health-insurance',
      title: 'Health & Medical Insurance',
      badge: '10,000+ Hospitals',
      categoryType: 'Family & Individual',
      desc: 'Cashless hospitalization, ICU coverage, and daycare treatment protection for your entire family.',
      features: ['No Room Rent Capping', 'Pre/Post Hospitalization 180 Days', 'Section 80D Tax Benefit', '24x7 Emergency Concierge'],
      icon: HeartPulse
    },
    {
      id: 'life-insurance',
      title: 'Life & Term Insurance',
      badge: 'High Sum Assured',
      categoryType: 'Family Security',
      desc: 'Pure risk term insurance and guaranteed return plans securing your family’s financial future.',
      features: ['₹1 Crore+ Term Cover', 'Critical Illness Riders', 'Zero Stage Claim Assistance', 'Section 80C Tax Exemption'],
      icon: ShieldCheck
    },
    {
      id: 'travel-insurance',
      title: 'International Travel Insurance',
      badge: 'Visa Compliant',
      categoryType: 'Schengen & Global',
      desc: 'Embassy-approved global travel insurance covering emergency medical expenses, flight delays, and lost baggage.',
      features: ['Schengen Visa Mandatory Compliant', 'Medical Emergencies up to $500K', 'Baggage Loss Reimbursement', 'Instant PDF for Embassy'],
      icon: Plane
    },
    {
      id: 'shop-insurance',
      title: 'Shop & Property Insurance',
      badge: 'Business Protection',
      categoryType: 'Stock & Structure',
      desc: 'All-risk commercial shopkeeper insurance protecting stock inventory, cash in till, and building structure.',
      features: ['Fire & Earthquake Shield', 'Theft & Burglary Compensation', 'Cash-in-Transit Protection', 'Plate Glass Damage Cover'],
      icon: Store
    }
  ];

  return (
    <section id="financial-solutions" className="relative py-24 bg-[#050811] text-white border-t border-slate-800/80 overflow-hidden select-none">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800/80 pb-8">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CATEGORY 02</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              FINANCIAL SOLUTIONS
            </h2>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              Empowering personal ambitions and business scale with competitive loans, government subsidy schemes, and comprehensive insurance coverage.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center p-1 bg-slate-900 border border-slate-800 rounded-2xl shrink-0">
            <button
              onClick={() => setActiveTab('loans')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition ${
                activeTab === 'loans'
                  ? 'bg-emerald-500 text-slate-950 shadow-[0_0_20px_rgba(16,185,129,0.3)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <CircleDollarSign className="w-4 h-4" />
              <span>Loans & Schemes ({loanServices.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('insurance')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition ${
                activeTab === 'insurance'
                  ? 'bg-cyan-500 text-slate-950 shadow-[0_0_20px_rgba(0,240,255,0.3)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Shield className="w-4 h-4" />
              <span>Insurance ({insuranceServices.length})</span>
            </button>
          </div>
        </div>

        {/* Cards Grid (3 Featured Services + 4th "See All Services" Card) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {(activeTab === 'loans' ? loanServices : insuranceServices).slice(0, 3).map((item) => {
            const Icon = item.icon;
            const isLoan = activeTab === 'loans';
            const itemImage = 'imageUrl' in item ? (item as any).imageUrl : undefined;
            return (
              <div
                key={item.id}
                className={`flex flex-col justify-between p-5 sm:p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 via-[#070b14]/95 to-slate-900/90 border border-slate-800 ${
                  isLoan ? 'hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]' : 'hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)]'
                } shadow-xl transition-all duration-300 group hover:-translate-y-1 overflow-hidden`}
              >
                <div className="space-y-4">
                  {/* Thumbnail Image Header */}
                  {itemImage && (
                    <div className="relative h-36 w-full rounded-xl overflow-hidden border border-slate-800 bg-slate-950 group-hover:border-slate-700 transition-colors">
                      <img
                        src={itemImage}
                        alt={item.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                      
                      {/* Floating Badge & Icon */}
                      <div className={`absolute top-2.5 left-2.5 p-2 rounded-lg bg-slate-950/85 backdrop-blur-md border border-slate-700/80 ${
                        isLoan ? 'text-emerald-400' : 'text-cyan-400'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>

                      <span className={`absolute top-2.5 right-2.5 text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${
                        isLoan ? 'bg-emerald-500/90 text-slate-950' : 'bg-cyan-500/90 text-slate-950'
                      } shadow-sm`}>
                        {item.badge}
                      </span>
                    </div>
                  )}

                  {!itemImage && (
                    <div className="flex items-center justify-between">
                      <div className={`p-3 rounded-xl bg-slate-950 border border-slate-800 ${
                        isLoan ? 'text-emerald-400' : 'text-cyan-400'
                      } group-hover:scale-110 transition-transform`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className={`text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full ${
                        isLoan ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20' : 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20'
                      } border`}>
                        {item.badge}
                      </span>
                    </div>
                  )}

                  <div>
                    <h3 className={`text-lg font-bold text-white ${
                      isLoan ? 'group-hover:text-emerald-300' : 'group-hover:text-cyan-300'
                    } transition-colors line-clamp-1`}>
                      {item.title}
                    </h3>
                    <div className={`text-xs font-mono ${
                      isLoan ? 'text-emerald-400/90' : 'text-cyan-400/90'
                    } font-semibold mt-0.5`}>
                      {'rate' in item ? item.rate : ('categoryType' in item ? item.categoryType : '')}
                    </div>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed line-clamp-2">
                      {item.desc}
                    </p>
                  </div>

                  {/* Bullet features */}
                  <div className="space-y-1.5 pt-3 border-t border-slate-800/80">
                    {item.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className={`w-3.5 h-3.5 ${
                          isLoan ? 'text-emerald-400' : 'text-cyan-400'
                        } shrink-0`} />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Visit Now button */}
                <div className="pt-5 mt-5 border-t border-slate-800/80">
                  <button
                    onClick={() => onNavigate('service-detail', item.id)}
                    className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-950 ${
                      isLoan ? 'hover:bg-emerald-500 hover:border-emerald-400' : 'hover:bg-cyan-500 hover:border-cyan-400'
                    } text-slate-200 hover:text-slate-950 font-bold text-xs transition duration-200 border border-slate-800 group/btn`}
                  >
                    <span>Visit Now</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            );
          })}

          {/* 4th Card: See All Financial / Insurance Services */}
          {activeTab === 'loans' ? (
            <div className="flex flex-col justify-between p-6 rounded-2xl bg-gradient-to-br from-emerald-950/30 via-slate-900/90 to-teal-950/30 border border-emerald-500/50 shadow-[0_0_30px_rgba(16,185,129,0.1)] hover:shadow-[0_0_40px_rgba(16,185,129,0.25)] transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden">
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 group-hover:scale-110 transition-transform">
                    <CircleDollarSign className="w-5 h-5 text-emerald-400" />
                  </div>
                  <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                    10+ Loan Types
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                    See All Loan Services
                  </h3>
                  <div className="text-xs font-mono text-emerald-400/90 mt-0.5">
                    Subsidies &amp; Capital Finance
                  </div>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    Compare lowest interest rates, check CIBIL eligibility, and calculate EMI for all loan types.
                  </p>
                </div>

                {/* Mini tags of more loan types */}
                <div className="pt-3 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                  {['Home Loan / LAP', 'Commercial Vehicle', 'Machinery Finance', 'Project DPR Reports', 'MUDRA Tarun'].map((tag, tIdx) => (
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
                  onClick={() => onNavigate('financial-solutions')}
                  className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-xs uppercase tracking-wider transition duration-200 shadow-lg group/btn"
                >
                  <span>See All Loan Services</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ) : (
            <div className="flex flex-col justify-between p-6 rounded-2xl bg-gradient-to-br from-cyan-950/30 via-slate-900/90 to-blue-950/30 border border-cyan-500/50 shadow-[0_0_30px_rgba(0,240,255,0.1)] hover:shadow-[0_0_40px_rgba(0,240,255,0.25)] transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden">
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 group-hover:scale-110 transition-transform">
                    <Shield className="w-5 h-5 text-cyan-400" />
                  </div>
                  <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                    25+ Insurers
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    See All Insurance Policies
                  </h3>
                  <div className="text-xs font-mono text-cyan-400/90 mt-0.5">
                    IRDAI Certified Protection
                  </div>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    Zero-hassle claims, instant digital policy issuance, and maximum coverage for life, health &amp; fleet.
                  </p>
                </div>

                {/* Mini tags of more insurance types */}
                <div className="pt-3 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                  {['Excavator / JCB Plant', 'International Travel', 'Shop & Inventory', 'Marine Cargo', 'Directors D&O'].map((tag, tIdx) => (
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
                  onClick={() => onNavigate('insurance-solutions')}
                  className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-slate-950 font-black text-xs uppercase tracking-wider transition duration-200 shadow-lg group/btn"
                >
                  <span>See All Insurance</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          )}
        </div>

      </div>
    </section>
  );
};
