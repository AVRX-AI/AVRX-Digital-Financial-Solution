import React, { useState } from 'react';
import {
  X,
  Sparkles,
  CheckCircle2,
  Clock,
  ShieldCheck,
  ArrowRight,
  PhoneCall,
  MessageSquare,
  ChevronDown,
  ChevronUp,
  Layers,
  Award,
  Zap,
  HelpCircle,
  ExternalLink,
  DollarSign
} from 'lucide-react';
import { ServiceItem } from '../types';
import { servicesData } from '../data/servicesData';
import { Footer } from './Footer';

interface ServiceDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: ServiceItem | null;
  onSelectRelatedService: (service: ServiceItem) => void;
  onBookService: (service: ServiceItem) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  isOpen,
  onClose,
  service,
  onSelectRelatedService,
  onBookService
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [selectedTier, setSelectedTier] = useState<'starter' | 'growth' | 'enterprise'>('growth');

  if (!isOpen || !service) return null;

  const isDigital = service.category.toLowerCase() === 'digital';

  const relatedServices = servicesData.filter(
    (item) => service.relatedServiceIds.includes(item.id) && item.id !== service.id
  );

  const handleToggleFaq = (idx: number) => {
    setOpenFaqIndex((prev) => (prev === idx ? null : idx));
  };

  const getTiers = () => {
    if (isDigital) {
      return [
        {
          id: 'starter' as const,
          name: 'Starter Express',
          price: service.startingPrice || '₹4,999',
          tag: 'Quick Launch',
          features: [
            'Core Service Implementation',
            'Mobile & Responsive Ready',
            'Basic On-Page SEO / Setup',
            '7 Business Days Turnaround',
            '30 Days Free Technical Support'
          ]
        },
        {
          id: 'growth' as const,
          name: 'Growth Professional',
          price: 'Recommended Value',
          tag: 'Most Popular',
          isPopular: true,
          features: [
            'Everything in Starter +',
            'Advanced Custom Architecture / Custom Design',
            '100/100 Core Web Vitals & Speed Optimization',
            'Schema Markup & Deep Google SEO Ready',
            'Dedicated Tech Architect Support',
            '3 Months Free Maintenance & Security Updates'
          ]
        },
        {
          id: 'enterprise' as const,
          name: 'Enterprise / Full-Stack',
          price: 'Custom Scale',
          tag: 'VIP SLA',
          features: [
            'Full-Stack Cloud / Dedicated Server Solution',
            'Custom API & Third-Party Integrations',
            'CA & Tech Hybrid Consultation Included',
            '24/7 Priority Emergency Helpdesk',
            'Annual Maintenance & Unlimited Modifications'
          ]
        }
      ];
    } else {
      return [
        {
          id: 'starter' as const,
          name: 'Essential Compliance',
          price: service.startingPrice || '₹999',
          tag: 'Standard Filing',
          features: [
            'Standard Documentation & Eligibility Check',
            'Timely Return / Application Submission',
            'Zero Error & 100% Confidential Handling',
            'Dedicated CA Assistance via Call/WhatsApp',
            'Digital Proof & Certificate Delivery'
          ]
        },
        {
          id: 'growth' as const,
          name: 'Comprehensive Advisory & Audit',
          price: 'Most Preferred',
          tag: 'Best for MSMEs',
          isPopular: true,
          features: [
            'Everything in Essential +',
            '3-Year CMA Data & Balance Sheet Projection',
            'Certified CA Signature & Verification',
            'Direct Bank / Government Liaison Support',
            'Tax Saving Optimization Strategy Included',
            'Priority Notice Reply / Appeal Guidance'
          ]
        },
        {
          id: 'enterprise' as const,
          name: 'Corporate CFO & Structuring',
          price: 'Custom Advisory',
          tag: 'Dedicated CA',
          features: [
            'Dedicated Chartered Accountant Partner',
            'Complete Financial & Tax Structuring',
            'Loan Sanction Facilitation (₹1 Cr to ₹50 Cr+)',
            'Monthly Compliance Dashboard & Updates',
            'Unlimited Strategic Tax Consultations'
          ]
        }
      ];
    }
  };

  const tiers = getTiers();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-lg animate-fadeIn overflow-y-auto">
      <div className="bg-[#081B33] border border-cyan-400/40 rounded-3xl max-w-5xl w-full max-h-[92vh] overflow-y-auto relative shadow-2xl my-auto">
        {/* Top Header Floating Bar */}
        <div className="sticky top-0 z-30 bg-[#081B33]/95 backdrop-blur-md px-6 py-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span
              className={`px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider border ${
                isDigital
                  ? 'bg-blue-500/15 text-cyan-300 border-cyan-400/40'
                  : 'bg-purple-500/15 text-purple-300 border-purple-400/40'
              }`}
            >
              {isDigital ? 'DIGITAL & WEB ENGINEERING' : 'FINANCIAL & TAX ADVISORY'}
            </span>
            <span className="text-xs text-white/50 hidden sm:inline">•</span>
            <span className="text-xs text-white/70 font-semibold hidden sm:inline">
              ISO 9001:2015 & CA-Backed Excellence
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <a
              href="tel:+919630661536"
              className="px-3.5 py-1.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold flex items-center space-x-1.5 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span className="hidden md:inline">+91-9630661536</span>
            </a>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              title="Close Service Detail Page"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Hero Banner Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={service.image}
              alt={service.altText || service.title}
              className="w-full h-full object-cover opacity-25 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#081B33] via-[#081B33]/80 to-transparent" />
          </div>

          <div className="relative z-10 px-6 sm:px-10 pt-10 pb-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-bold mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>AVRX SPECIALIZED SOLUTION PAGE</span>
              </div>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-3">
                {service.title}
              </h1>
              <p className="text-sm sm:text-base text-cyan-300 font-semibold mb-4">
                {service.tagline}
              </p>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Price & Timeline Badge Bar */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <div className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-blue-600/30 to-cyan-500/30 border border-cyan-400/40 flex items-center space-x-2.5">
                  <DollarSign className="w-4 h-4 text-cyan-300" />
                  <div>
                    <div className="text-[10px] uppercase font-bold text-white/60">Starting Investment</div>
                    <div className="text-sm font-black text-white">{service.startingPrice || '₹4,999'}</div>
                  </div>
                </div>

                <div className="px-5 py-2.5 rounded-2xl bg-white/5 border border-white/10 flex items-center space-x-2.5">
                  <Clock className="w-4 h-4 text-purple-400" />
                  <div>
                    <div className="text-[10px] uppercase font-bold text-white/60">Estimated Timeline</div>
                    <div className="text-sm font-bold text-white">{service.estimatedTimeline}</div>
                  </div>
                </div>

                <button
                  onClick={() => {
                    onClose();
                    onBookService(service);
                  }}
                  className="px-6 py-3 rounded-2xl bg-gradient-to-r from-[#0A66FF] to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white text-xs sm:text-sm font-black flex items-center space-x-2 shadow-xl shadow-blue-500/30 transition-all hover:scale-105"
                >
                  <span>Book Free Strategy Session</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="px-6 sm:px-10 py-8 space-y-12">
          {/* Why AVRX Dual Tech & CA Advantage */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-900/40 via-purple-900/30 to-cyan-900/30 border border-cyan-400/30 relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-cyan-300 text-xs font-bold">
                  <Award className="w-4 h-4" />
                  <span>THE AVRX HYBRID ADVANTAGE</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  Why Our {isDigital ? 'Tech Architecture + SEO' : 'Chartered Accountant (CA)'} Methodology Outperforms Standard Agencies
                </h3>
                <p className="text-xs sm:text-sm text-white/80 max-w-3xl leading-relaxed">
                  {isDigital
                    ? 'Unlike generic web shops using slow WordPress page builders, our Senior Tech Architects engineer custom sub-100ms React, Node.js, and Cloud native applications that score 100/100 on Google Lighthouse while converting visitors into paying clients.'
                    : 'Unlike basic tax filing vendors, our Chartered Accountants analyze your balance sheets, CMA data, and operating cash flows to ensure 100% tax compliance while unlocking zero-collateral government loans under CGTMSE up to ₹5 Crores.'}
                </p>
              </div>

              <div className="flex items-center space-x-3 shrink-0">
                <div className="px-4 py-2.5 rounded-2xl bg-white/10 border border-white/20 text-center">
                  <div className="text-lg font-black text-emerald-400">100%</div>
                  <div className="text-[10px] text-white/70">Compliance & SLA</div>
                </div>
                <div className="px-4 py-2.5 rounded-2xl bg-white/10 border border-white/20 text-center">
                  <div className="text-lg font-black text-cyan-300">₹100+ Cr</div>
                  <div className="text-[10px] text-white/70">Client Growth</div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Features & Deliverables Grid */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Layers className="w-5 h-5 text-cyan-400" />
              <h2 className="text-xl sm:text-2xl font-black text-white">
                What is Included in "{service.title}"
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {service.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/40 transition-all flex items-start space-x-3 group"
                >
                  <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-300 shrink-0 group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white mb-1">{feat}</h4>
                    <p className="text-[11px] text-white/60">
                      Engineered & verified by AVRX {isDigital ? 'Senior Architects' : 'Chartered Accountants'}.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Guaranteed Business Outcomes */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Zap className="w-5 h-5 text-purple-400" />
              <h2 className="text-xl sm:text-2xl font-black text-white">
                Key Business Benefits & Outcomes
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-gradient-to-r from-white/5 to-white/[0.02] border border-white/10 flex items-center space-x-3"
                >
                  <div className="w-8 h-8 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0">
                    {idx + 1}
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-white/90">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Package & Service Tiers Matrix */}
          <div>
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-400/30 text-[10px] font-bold uppercase">
                TRANSPARENT TIERED ARCHITECTURE
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-2">
                Choose the Right Tier for Your Growth
              </h2>
              <p className="text-xs text-white/70 mt-1">
                Zero hidden fees. All tiers include direct access to AVRX technical and financial strategists.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tiers.map((tier) => {
                const isSelected = selectedTier === tier.id;
                return (
                  <div
                    key={tier.id}
                    onClick={() => setSelectedTier(tier.id)}
                    className={`rounded-3xl p-6 border transition-all cursor-pointer flex flex-col justify-between relative ${
                      tier.isPopular
                        ? 'bg-gradient-to-b from-cyan-950/40 to-[#081B33] border-cyan-400 shadow-xl shadow-cyan-500/10 scale-105'
                        : isSelected
                        ? 'bg-white/10 border-white/40'
                        : 'bg-white/5 border-white/10 hover:border-white/20'
                    }`}
                  >
                    {tier.isPopular && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-gradient-to-r from-[#0A66FF] to-cyan-500 text-white text-[10px] font-extrabold uppercase shadow-lg">
                        RECOMMENDED VALUE
                      </span>
                    )}

                    <div>
                      <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-1">
                        {tier.tag}
                      </div>
                      <h3 className="text-lg font-black text-white mb-2">{tier.name}</h3>
                      <div className="text-xl font-extrabold text-white mb-4 pb-4 border-b border-white/10">
                        {tier.price}
                      </div>

                      <ul className="space-y-2.5 mb-6">
                        {tier.features.map((f, i) => (
                          <li key={i} className="flex items-start space-x-2 text-xs text-white/80">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onClose();
                        onBookService(service);
                      }}
                      className={`w-full py-3 rounded-xl text-xs font-extrabold transition-all flex items-center justify-center space-x-1.5 ${
                        tier.isPopular || isSelected
                          ? 'bg-gradient-to-r from-[#0A66FF] to-cyan-500 text-white shadow-lg shadow-blue-500/30'
                          : 'bg-white/10 hover:bg-white/20 text-white'
                      }`}
                    >
                      <span>Select Tier & Book Now</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Interactive FAQ Accordion */}
          {service.faqs && service.faqs.length > 0 && (
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <HelpCircle className="w-5 h-5 text-cyan-400" />
                <h2 className="text-xl sm:text-2xl font-black text-white">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="space-y-3">
                {service.faqs.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div
                      key={idx}
                      className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden transition-all"
                    >
                      <button
                        onClick={() => handleToggleFaq(idx)}
                        className="w-full p-5 text-left flex items-center justify-between text-sm font-bold text-white hover:text-cyan-300 transition-colors"
                      >
                        <span>{faq.question}</span>
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 text-cyan-400 shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-white/50 shrink-0" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-5 text-xs sm:text-sm text-white/75 leading-relaxed border-t border-white/5 pt-3">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Related Services Jump Bar */}
          {relatedServices.length > 0 && (
            <div className="pt-6 border-t border-white/10">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                Explore Related Services
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedServices.map((rel) => (
                  <div
                    key={rel.id}
                    onClick={() => onSelectRelatedService(rel)}
                    className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/40 cursor-pointer transition-all flex items-center justify-between group"
                  >
                    <div>
                      <div className="text-[10px] font-bold text-cyan-400 uppercase">
                        {rel.category === 'digital' ? 'Digital Service' : 'Financial Service'}
                      </div>
                      <div className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {rel.title}
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-white/50 group-hover:text-white transition-colors shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Action Footer Bar */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#040D1A] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-lg sm:text-xl font-black text-white">
                Ready to Get Started with {service.title}?
              </h4>
              <p className="text-xs text-white/70 mt-1">
                No obligations. Speak directly with an AVRX Senior Architect or Chartered Accountant today.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <a
                href="https://wa.me/919630661536"
                target="_blank"
                rel="noreferrer"
                className="flex-1 sm:flex-initial px-5 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center space-x-2 transition-colors"
              >
                <span>WhatsApp Strategy Desk</span>
              </a>
              <button
                onClick={() => {
                  onClose();
                  onBookService(service);
                }}
                className="flex-1 sm:flex-initial px-6 py-3 rounded-2xl bg-gradient-to-r from-[#0A66FF] to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-extrabold text-xs flex items-center justify-center space-x-2 shadow-lg shadow-blue-500/30 transition-all"
              >
                <span>Book Strategy Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Complete Footer Section for Every Single Page */}
        <div className="border-t border-white/10">
          <Footer
            onSelectService={(srv) => {
              onSelectRelatedService(srv);
            }}
            onOpenConsultation={() => {
              onClose();
              onBookService(service);
            }}
            onExploreService={(srv) => {
              onSelectRelatedService(srv);
            }}
          />
        </div>
      </div>
    </div>
  );
};
