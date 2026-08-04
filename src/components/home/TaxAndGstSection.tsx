import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FileText,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Award,
  Clock,
  Sparkles,
  Calculator,
  Briefcase,
  Layers
} from 'lucide-react';

export default function TaxAndGstSection() {
  const [selectedService, setSelectedService] = useState<'gst' | 'itr' | 'inc' | 'cfo'>('gst');

  const taxServices = [
    {
      id: 'gst',
      title: 'GST Registration & Zero-Error Monthly Filing',
      badge: 'SAME-DAY PROCESSING',
      fee: '₹1,499 / $20 /mo',
      turnaround: '24-48 Hours',
      desc: 'End-to-end GST compliance including new GSTIN registration, GSTR-1, GSTR-3B monthly filing, annual GSTR-9 reconciliation, and notice reply advisory.',
      deliverables: [
        'New GSTIN certificate within 48 hrs',
        'GSTR-1 & GSTR-3B monthly filing SLA',
        'Input Tax Credit (ITC) matching automation',
        'Dedicated Chartered Accountant assigned'
      ],
      path: '/tax-solutions'
    },
    {
      id: 'itr',
      title: 'Income Tax Return (ITR) & Tax Saving Advisory',
      badge: 'MAXIMUM REFUND',
      fee: '₹1,999 / $25 /year',
      turnaround: 'Same Day Filing',
      desc: 'Expert ITR filing for salaried executives, freelancers, stock/crypto capital gains, and corporate entities with maximum deduction structuring under Section 80C to 80U.',
      deliverables: [
        'ITR-1 to ITR-6 filing by CA team',
        'Capital gains & crypto taxation computation',
        'Advance tax installment planning',
        'Assessment & refund escalation support'
      ],
      path: '/tax-solutions'
    },
    {
      id: 'inc',
      title: 'Pvt Ltd & LLP Incorporation + MSME Udyam',
      badge: 'ALL-IN-ONE PACK',
      fee: '₹6,999 / $90 all-inc',
      turnaround: '7 Working Days',
      desc: 'Complete startup incorporation bundle: Name approval, MOA/AOA drafting, Certificate of Incorporation, PAN, TAN, Bank Account, and Udyam MSME registration.',
      deliverables: [
        'Certificate of Incorporation (MCA)',
        'Digital Signature Certificates (Class-3 DSC)',
        'MOA & AOA drafted by corporate lawyers',
        'Udyam MSME & Startup India registration'
      ],
      path: '/tax-solutions'
    },
    {
      id: 'cfo',
      title: 'Virtual CFO, Bookkeeping & Statutory Audit',
      badge: 'ENTERPRISE SLA',
      fee: '₹14,999 / $180 /mo',
      turnaround: 'Continuous 365 Days',
      desc: 'Outsource your entire finance and accounting department. We manage Tally/Zoho books, GST, TDS, EPF, ESIC, balance sheet preparation, and statutory audit.',
      deliverables: [
        'Monthly balance sheet & P&L statements',
        'TDS & TCS filing with Form 16 / 16A',
        'ROC annual compliance (AOC-4, MGT-7)',
        'Investor due diligence & MIS reports'
      ],
      path: '/tax-solutions'
    }
  ];

  const currentService = taxServices.find((s) => s.id === selectedService) || taxServices[0];

  return (
    <section id="tax-solutions" className="py-24 bg-[#06070B] border-t border-white/10 relative overflow-hidden">
      {/* Background Backdrops */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold tracking-wider uppercase">
              <FileText className="w-3.5 h-3.5" />
              <span>Statutory Compliance & Tax Advisory</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-extrabold text-white tracking-tight">
              Flawless GST, ITR & <br />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Corporate Compliance
              </span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Eliminate tax notices and statutory penalties. Our panel of Chartered Accountants and Corporate Lawyers ensure zero-error GST returns, ITR optimization, and rapid incorporation.
            </p>
          </div>

          <Link
            to="/tax-solutions"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white text-sm font-semibold transition-all group self-start md:self-auto"
          >
            <span>View All Statutory SLAs</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-purple-400" />
          </Link>
        </div>

        {/* Category Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {[
            { id: 'gst', label: 'GST Filing & Registration', icon: FileText },
            { id: 'itr', label: 'Income Tax Return (ITR)', icon: Calculator },
            { id: 'inc', label: 'Company Incorporation', icon: Award },
            { id: 'cfo', label: 'Virtual CA / CFO & Audit', icon: Briefcase },
          ].map((tab) => {
            const Icon = tab.icon;
            const isSelected = selectedService === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedService(tab.id as any)}
                className={`p-4 rounded-2xl text-left transition-all duration-300 border flex items-center gap-3 ${
                  isSelected
                    ? 'bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-purple-500/50 shadow-lg shadow-purple-500/10'
                    : 'bg-white/5 hover:bg-white/10 border-white/10'
                }`}
              >
                <div className={`p-2.5 rounded-xl flex-shrink-0 ${isSelected ? 'bg-purple-500 text-white' : 'bg-white/10 text-slate-300'}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-white truncate">{tab.label}</div>
                  <div className="text-[10px] text-purple-300 font-medium mt-0.5">CA Verified SLA</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Service Detailed Card */}
        <div className="glass-card rounded-3xl p-8 sm:p-10 border border-white/15 bg-gradient-to-b from-purple-900/20 via-[#0B0E17]/90 to-[#08090C] shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-bold tracking-wider">
                  {currentService.badge}
                </span>
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <span>SLA Turnaround: {currentService.turnaround}</span>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-poppins font-extrabold text-white">
                {currentService.title}
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {currentService.desc}
              </p>

              {/* Deliverables Grid */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                  Guaranteed Deliverables Under Contract:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentService.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-200 font-medium leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  to="/contact"
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold text-xs sm:text-sm shadow-xl shadow-purple-500/25 flex items-center gap-2 transition-all"
                >
                  <span>Book Free CA Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to={currentService.path}
                  className="px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-xs sm:text-sm border border-white/15 transition-all"
                >
                  View Full Statutory SLA
                </Link>
              </div>
            </div>

            {/* Right Pricing Badge & Trust Assurance Card */}
            <div className="lg:col-span-5">
              <div className="p-8 rounded-3xl bg-[#0D101A] border border-purple-500/30 space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />

                <div className="text-center space-y-2 border-b border-white/10 pb-6">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
                    Transparent Professional Fee
                  </span>
                  <div className="text-3xl sm:text-4xl font-poppins font-black text-white">
                    {currentService.fee}
                  </div>
                  <p className="text-xs text-purple-300 font-medium">
                    Zero hidden charges • Govt challan at actuals
                  </p>
                </div>

                <div className="space-y-3 text-xs text-slate-300">
                  <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                    <span>CA / Legal Team Assigned</span>
                    <span className="text-white font-semibold">Yes (Dedicated)</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                    <span>Penalty Protection SLA</span>
                    <span className="text-green-400 font-semibold">100% Guaranteed</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-white/5">
                    <span>Data Security Compliance</span>
                    <span className="text-white font-semibold">256-Bit SOC2 Bank Grade</span>
                  </div>
                </div>

                <div className="pt-2 text-center">
                  <Link
                    to="/contact"
                    className="block w-full py-3 rounded-xl bg-white text-[#0B0D13] font-bold text-xs hover:bg-slate-200 transition-colors"
                  >
                    Request Instant Quotation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
