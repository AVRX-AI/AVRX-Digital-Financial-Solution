import React, { useState } from 'react';
import { TAX_SERVICES } from '../data/servicesData';
import { ServiceItem } from '../types';
import { SEO } from '../components/common/SEO';
import { DisclaimerBanner } from '../components/common/DisclaimerBanner';
import { FileText, Check, ArrowRight, ShieldCheck, PhoneCall, ChevronDown } from 'lucide-react';

interface TaxSolutionsPageProps {
  onNavigate: (page: string) => void;
}

export const TaxSolutionsPage: React.FC<TaxSolutionsPageProps> = ({ onNavigate }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(TAX_SERVICES[0]);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#050811] text-white pt-28 pb-20">
      <SEO
        title="Tax & Compliance Solutions | GST, ITR, Udyam & ROC | AVRX"
        description="Simplify tax and business compliance with AVRX. 100% digital GST registration, monthly return filing, ITR filing for individuals & businesses, and Udyam MSME certificate."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold">
            <FileText className="w-4 h-4 text-amber-400" />
            <span>Taxation & ROC Advisory</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white">
            Simplify <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Tax & Compliance</span>.
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            100% digital GST registration, monthly filing automation, Income Tax Returns (ITR), Udyam MSME certification, and ROC company compliance.
          </p>
        </div>

        {/* Embedded Disclaimer */}
        <div className="mb-12">
          <DisclaimerBanner />
        </div>

        {/* Services Master Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          
          {/* Left Service List */}
          <div className="lg:col-span-4 space-y-2 sticky top-28">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 px-3 mb-2">
              Select Tax Service
            </h3>
            {TAX_SERVICES.map(svc => (
              <button
                key={svc.id}
                onClick={() => {
                  setSelectedService(svc);
                  setActiveFaq(null);
                }}
                className={`w-full text-left p-4 rounded-2xl border transition flex items-center justify-between ${
                  selectedService?.id === svc.id
                    ? 'bg-amber-500/15 border-amber-400 text-white shadow-[0_0_20px_rgba(245,158,11,0.2)] font-bold'
                    : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:bg-slate-800/80'
                }`}
              >
                <div>
                  <div className="text-sm">{svc.title}</div>
                  <div className="text-[11px] text-slate-400 font-normal line-clamp-1 mt-0.5">{svc.priceStarting}</div>
                </div>
                <ArrowRight className={`w-4 h-4 ${selectedService?.id === svc.id ? 'text-amber-400' : 'text-slate-600'}`} />
              </button>
            ))}
          </div>

          {/* Right Selected Service Detail */}
          {selectedService && (
            <div className="lg:col-span-8 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-8 shadow-2xl backdrop-blur-xl">
              
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
                <div>
                  <div className="flex items-center gap-3">
                    <h2 className="text-2xl sm:text-3xl font-black text-white">{selectedService.title}</h2>
                    {selectedService.badge && (
                      <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-bold">
                        {selectedService.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-slate-300 text-sm mt-2 leading-relaxed">{selectedService.fullDesc}</p>
                </div>

                <div className="text-right">
                  <div className="text-xs text-slate-400 font-mono uppercase">Transparent Pricing</div>
                  <div className="text-2xl font-black text-amber-400">{selectedService.priceStarting}</div>
                </div>
              </div>

              {/* Key Features */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Included Services & Deliverables</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedService.features.map((feat, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Compliance Benefits</h4>
                <div className="space-y-2">
                  {selectedService.benefits.map((ben, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-amber-500/5 border border-amber-500/20 text-xs text-amber-200 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{ben}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service FAQs */}
              {selectedService.faqs && (
                <div className="space-y-3 pt-4 border-t border-slate-800">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Tax FAQs</h4>
                  <div className="space-y-2">
                    {selectedService.faqs.map((faq, idx) => (
                      <div key={idx} className="border border-slate-800 rounded-2xl overflow-hidden bg-slate-950">
                        <button
                          onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                          className="w-full p-4 text-left font-semibold text-xs sm:text-sm text-slate-200 flex items-center justify-between"
                        >
                          <span>{faq.question}</span>
                          <ChevronDown className={`w-4 h-4 text-amber-400 transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`} />
                        </button>
                        {activeFaq === idx && (
                          <div className="px-4 pb-4 text-xs text-slate-400 border-t border-slate-800/60 pt-3">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-500 text-slate-950 font-bold text-sm rounded-2xl shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:scale-105 transition flex items-center justify-center gap-2"
                >
                  <span>Start {selectedService.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full sm:w-auto px-6 py-4 bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-300 text-xs font-semibold rounded-2xl transition flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-amber-400" />
                  <span>Talk to Chartered Accountant</span>
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
};
