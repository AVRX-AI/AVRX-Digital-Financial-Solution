import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SeoMeta from '../components/common/SeoMeta';
import Breadcrumbs from '../components/common/Breadcrumbs';
import PageBanner from '../components/layout/PageBanner';
import {
  FileText,
  CheckCircle2,
  ShieldCheck,
  Award,
  Clock,
  ArrowRight,
  Calculator,
  Briefcase,
  Layers,
  AlertCircle
} from 'lucide-react';

export default function TaxSolutionsPage() {
  const location = useLocation();
  const currentPath = location.pathname.toLowerCase().replace(/\/$/, '');
  const [activeTab, setActiveTab] = useState<'gst' | 'itr' | 'inc' | 'cfo'>('gst');

  const breadcrumbs = [
    { name: 'Tax Solutions', url: '/tax-solutions' },
    ...(currentPath !== '/tax-solutions'
      ? [{ name: currentPath.replace('/', '').replace('-', ' ').toUpperCase(), url: currentPath }]
      : [])
  ];

  const taxFaqs = [
    {
      question: 'How quickly can AVRX process GST Registration in Ambikapur?',
      answer: 'Our tax experts process GST Registration applications within 24 to 48 hours upon complete document submission, guiding you through ARN generation and certificate issuance.'
    },
    {
      question: 'Do you file monthly GSTR-1, GSTR-3B, and annual GSTR-9 returns?',
      answer: 'Yes, we provide end-to-end monthly GST filing, Input Tax Credit (ITC) reconciliation, and annual tax audits for traders, contractors, and businesses in Ambikapur, Surguja, and across Chhattisgarh.'
    },
    {
      question: 'Can you prepare ITR filings for salaried individuals and small business owners?',
      answer: 'Yes, we handle ITR-1 through ITR-6 filings with CA verification, maximizing eligible Section 80C to 80U deductions and advance tax computations.'
    }
  ];

  const taxSchema = {
    '@context': 'https://schema.org',
    '@type': 'AccountingService',
    name: 'GST Filing & Income Tax Return Services',
    provider: {
      '@type': 'LocalBusiness',
      name: 'AVRX Digital & Financial Solution',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Ambikapur',
        addressRegion: 'Chhattisgarh',
        addressCountry: 'IN'
      }
    },
    areaServed: 'Ambikapur, Surguja, Chhattisgarh, India',
    description: 'CA-verified GST registration, monthly GSTR-1 & 3B filing, ITR tax return e-filing, and MSME Udyam registration in Ambikapur.'
  };

  const services = [
    {
      id: 'gst',
      title: 'GST Registration & Monthly Filing SLA',
      badge: 'SAME-DAY PROCESSING',
      fee: '₹1,499 / month',
      turnaround: '24-48 Hours',
      desc: 'Complete GST management by practicing tax advisors. We handle GSTIN issuance, GSTR-1 & GSTR-3B monthly filing, annual GSTR-9 reconciliation, and GST notice advisory.',
      deliverables: [
        'New GSTIN Certificate within 48 hours',
        'GSTR-1 & GSTR-3B monthly filing SLA',
        'Input Tax Credit (ITC) automated matching',
        'Annual GSTR-9 & GSTR-9C audit filing',
        'Representation against GST scrutiny notices'
      ]
    },
    {
      id: 'itr',
      title: 'Income Tax Return (ITR) & Corporate Tax Strategy',
      badge: 'MAXIMUM REFUND SLA',
      fee: '₹1,999 / year',
      turnaround: 'Same Day Filing',
      desc: 'Expert tax computation and ITR-1 to ITR-6 filing for salaried leaders, freelancers, stock/crypto investors, and Pvt Ltd entities with Section 80C to 80U deduction optimization.',
      deliverables: [
        'CA-certified ITR-1 to ITR-6 preparation',
        'Capital gains & crypto taxation optimization',
        'Advance tax installment scheduling',
        'Section 80C–80U tax saving advisory',
        'Income Tax refund tracking & escalation'
      ]
    },
    {
      id: 'inc',
      title: 'Pvt Ltd / LLP Incorporation + MSME Udyam Pack',
      badge: 'STARTUP BUNDLE',
      fee: '₹6,999 all-inclusive',
      turnaround: '7 Working Days',
      desc: 'Everything required to launch your company legally: MCA name approval, MOA/AOA drafting, Certificate of Incorporation, PAN, TAN, Bank Account support, and MSME Udyam certificate.',
      deliverables: [
        'Certificate of Incorporation (MCA)',
        'Class-3 Digital Signature Certificates (DSC)',
        'MOA & AOA drafted by corporate attorneys',
        'Company PAN, TAN & Current Bank Account',
        'Udyam MSME & Startup India registration'
      ]
    },
    {
      id: 'cfo',
      title: 'Virtual CFO, Bookkeeping & Statutory Audit',
      badge: 'ENTERPRISE RETAINER',
      fee: '₹14,999 / month',
      turnaround: 'Continuous On-Call',
      desc: 'Dedicated Senior Financial Advisory team acting as your Virtual CFO. Monthly P&L analysis, cash flow budgeting, tax risk auditing, and investor pitch deck financial modeling.',
      deliverables: [
        'Weekly cash-flow velocity dashboards',
        'Monthly Board-ready financial statements',
        'Internal controls & inventory audit SLAs',
        'Direct Tax & Indirect Tax planning reviews',
        'Banking credit limit review preparation'
      ]
    }
  ];

  const currentService = services.find((s) => s.id === activeTab) || services[0];

  return (
    <div className="bg-[#08090C] min-h-screen">
      <SeoMeta
        title="GST Filing & ITR Return Services in Ambikapur | AVRX Tax"
        description="CA-verified GST registration, monthly GSTR-1 & GSTR-3B filing, Income Tax Return e-filing, and Pvt Ltd company incorporation in Ambikapur, Surguja, Chhattisgarh."
        keywords="GST registration Ambikapur, GST filing Surguja, ITR filing Chhattisgarh, company incorporation Ambikapur, Udyam registration, AVRX tax solutions"
        canonicalUrl={`https://avrx.in${currentPath || '/tax-solutions'}`}
        breadcrumbsData={breadcrumbs}
        faqData={taxFaqs}
        schemaData={taxSchema}
      />

      <PageBanner
        title="Statutory Tax, GST & Corporate Legal SLAs (Ambikapur)"
        subtitle="Eliminate compliance headaches and statutory penalties. Our team ensures flawless GST returns, ITR filings, and rapid company incorporation."
        badge="CA & LEGAL PANEL VERIFIED"
        breadcrumbs={[{ label: 'Tax & Compliance SLA' }]}
        ctaText="Book CA Consultation"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      <section className="py-20 bg-[#06070B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Selector */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {[
              { id: 'gst', label: 'GST Filing & Reg', icon: FileText },
              { id: 'itr', label: 'Income Tax (ITR)', icon: Calculator },
              { id: 'inc', label: 'Company Incorporation', icon: Award },
              { id: 'cfo', label: 'Virtual CA / CFO', icon: Briefcase },
            ].map((tab) => {
              const Icon = tab.icon;
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`p-5 rounded-2xl text-left transition-all duration-300 border flex items-center gap-4 ${
                    isSelected
                      ? 'bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-purple-500 shadow-xl shadow-purple-500/10'
                      : 'bg-white/5 hover:bg-white/10 border-white/10 text-slate-300'
                  }`}
                >
                  <div className={`p-3 rounded-xl ${isSelected ? 'bg-purple-500 text-white' : 'bg-white/10 text-slate-400'}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">{tab.label}</div>
                    <div className="text-xs text-purple-300 font-medium">Verified CA SLA</div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Service Display */}
          <div className="glass-card p-10 sm:p-14 rounded-3xl border border-white/15 bg-gradient-to-b from-purple-900/20 via-[#0B0D17] to-[#08090C] shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="px-3.5 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-bold tracking-wider">
                    {currentService.badge}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <Clock className="w-4 h-4 text-cyan-400" />
                    <span>SLA Turnaround: {currentService.turnaround}</span>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-4xl font-poppins font-extrabold text-white">
                  {currentService.title}
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {currentService.desc}
                </p>

                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                    Guaranteed Deliverables Under SLA:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentService.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/5">
                        <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-200 font-medium leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Link
                    to="/contact"
                    className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold text-sm shadow-xl shadow-purple-500/25 flex items-center gap-2 transition-all"
                  >
                    <span>Hire Chartered Accountant Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <ShieldCheck className="w-4 h-4 text-green-400" />
                    <span>100% Penalty Protection SLA</span>
                  </div>
                </div>
              </div>

              {/* Pricing Box */}
              <div className="lg:col-span-5">
                <div className="p-8 sm:p-10 rounded-3xl bg-[#0D101E] border border-purple-500/30 space-y-6">
                  <div className="text-center space-y-2 border-b border-white/10 pb-6">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
                      Transparent Professional Fee
                    </span>
                    <div className="text-3xl sm:text-4xl font-poppins font-black text-white">
                      {currentService.fee}
                    </div>
                    <p className="text-xs text-purple-300">
                      Govt challan / MCA registration fees at actuals
                    </p>
                  </div>

                  <div className="space-y-3 text-xs text-slate-300">
                    <div className="flex justify-between py-2 border-b border-white/5">
                      <span>Dedicated CA Assigned:</span>
                      <span className="text-white font-bold">Yes (Direct Number)</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-white/5">
                      <span>Scrutiny Notice Defense:</span>
                      <span className="text-green-400 font-bold">Included</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span>Confidentiality:</span>
                      <span className="text-white font-bold">Bank-Grade SOC2</span>
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="block w-full py-4 rounded-xl bg-white text-[#0B0D13] font-bold text-xs text-center hover:bg-slate-200 transition-colors"
                  >
                    Request Formal Quotation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
