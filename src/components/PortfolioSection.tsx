import React, { useState } from 'react';
import { ExternalLink, CheckCircle2, TrendingUp, Sparkles, Layout, Award } from 'lucide-react';

export const PortfolioSection: React.FC<{ onOpenConsultation: () => void }> = ({ onOpenConsultation }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'digital' | 'financial'>('all');

  const caseStudies = [
    {
      id: 1,
      title: 'Luxe Aura E-Commerce & Organic SEO Growth',
      category: 'digital',
      tag: 'Custom Website + SEO',
      client: 'D2C Jewelry & Luxury Brand, Mumbai',
      metric: '+340% Organic Sales',
      timeline: '60 Days Delivery',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      description: 'Engineered a lightning-fast React/Node.js e-commerce store with NVMe cloud hosting and executed a 90-day technical SEO campaign ranking 14 high-volume keywords on Google #1.',
      results: [
        '100/100 Core Web Vitals performance score',
        '3.2x conversion rate increase from organic traffic',
        'Full SSL & automated razorpay/GST invoice integration'
      ]
    },
    {
      id: 2,
      title: '₹75 Lakh MSME Unsecured Business Loan Sanction',
      category: 'financial',
      tag: 'Business Loan + CGTMSE',
      client: 'Vedic Organic Foods Pvt Ltd, Pune',
      metric: '₹75,00,000 Sanctioned',
      timeline: '11 Business Days',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
      description: 'Facilitated a collateral-free CGTMSE MSME business loan from SBI & HDFC by structuring clean GST returns, Udyam registration, and a 3-year projected financial report.',
      results: [
        '10.75% p.a. low interest rate negotiated',
        'Zero collateral required under government CGTMSE scheme',
        'Complete paperless documentation handled by AVRX CAs'
      ]
    },
    {
      id: 3,
      title: 'MedPlus Multispecialty Clinic Portal & Local SEO',
      category: 'digital',
      tag: 'Website + GMB Ranking',
      client: 'Healthcare Group, Bangalore & Hyderabad',
      metric: '450+ Monthly Patient Leads',
      timeline: '14 Days Delivery',
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80',
      description: 'Built a multi-location doctor appointment booking platform with WhatsApp AI chat automation and ranked #1 on Google Local Map Pack for 8 major medical specialties.',
      results: [
        'Instant WhatsApp confirmation for patient bookings',
        '+420% increase in Google Business Profile call clicks',
        'HIPAA-compliant patient data security architecture'
      ]
    },
    {
      id: 4,
      title: 'Corporate Tax Restructuring & ₹4.2 Lakh ITR Refund',
      category: 'financial',
      tag: 'GST & Corporate Tax',
      client: 'Apex Software Consulting LLP, Noida',
      metric: '₹4,20,000 Tax Saved',
      timeline: 'FY 2024-25 Assessment',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
      description: 'Conducted a comprehensive GST reconciliation and corporate tax audit, identifying unutilized Input Tax Credit (ITC) and legitimate Section 80JJAA wage deductions.',
      results: [
        '100% clean notice-free ITR assessment',
        '₹4.2 Lakh refund credited directly to corporate bank account',
        'Monthly GSTR-2B automated reconciliation workflow implemented'
      ]
    },
    {
      id: 5,
      title: 'FinTech App UI/UX & High-Speed Cloud VPS Infrastructure',
      category: 'digital',
      tag: 'Enterprise App + Hosting',
      client: 'PayNova Digital Solutions, Delhi NCR',
      metric: '99.999% Uptime',
      timeline: '4 Weeks Architecture',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      description: 'Designed a high-security fintech transaction portal with dedicated NVMe cloud VPS servers, SSL pinning, and 1-year free maintenance.',
      results: [
        'Sub-200ms API response time across pan-India nodes',
        'Zero downtime during festival traffic spikes',
        'Comprehensive cyber liability insurance coverage advised'
      ]
    },
    {
      id: 6,
      title: 'Group Health & Cyber Insurance for 45-Employee Agency',
      category: 'financial',
      tag: 'Corporate Insurance',
      client: 'DigitalSphere Marketing Agency, Gurugram',
      metric: '35% Premium Savings',
      timeline: '5 Days Policy Issuance',
      image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
      description: 'Structured a bespoke ₹10 Lakh family floater group health policy + ₹2 Crore cyber ransomware indemnity policy at 35% lower premium than legacy brokers.',
      results: [
        'Cashless coverage across 12,000+ network hospitals',
        '100% tax deductible business expense under Income Tax Act',
        'Dedicated AVRX claims escalation manager assigned'
      ]
    }
  ];

  const filtered = activeFilter === 'all' 
    ? caseStudies 
    : caseStudies.filter(c => c.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-[#081B33] via-[#051021] to-[#081B33] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-bold mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>PROVEN CLIENT TRANSFORMATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Our Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-[#0A66FF]">Case Studies</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white/70">
            See how we combine modern digital engineering with strategic CA financial structuring to generate real measurable growth.
          </p>

          {/* Category filter pills */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'All Case Studies (6)' },
              { id: 'digital', label: 'Websites & SEO (3)' },
              { id: 'financial', label: 'Loans, GST & Tax (3)' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeFilter === tab.id
                    ? 'bg-gradient-to-r from-[#0A66FF] to-cyan-500 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-400/50 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-xl"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081B33] via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#081B33]/80 backdrop-blur-md text-[10px] font-bold text-cyan-300 border border-white/10">
                    {item.tag}
                  </span>
                  <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-emerald-500/90 text-[10px] font-extrabold text-white shadow-lg">
                    {item.metric}
                  </span>
                </div>

                <div className="p-6">
                  <div className="text-[11px] font-semibold text-white/50 mb-1">{item.client}</div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/70 mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="space-y-1.5">
                    {item.results.map((res, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-xs text-white/80">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{res}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-semibold text-white/50">Timeline: {item.timeline}</span>
                <button
                  onClick={onOpenConsultation}
                  className="text-xs font-bold text-cyan-300 hover:text-white flex items-center space-x-1"
                >
                  <span>Request Similar Package</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
