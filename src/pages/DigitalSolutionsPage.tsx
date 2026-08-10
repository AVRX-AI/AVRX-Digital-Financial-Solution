import React, { useState } from 'react';
import { DIGITAL_SERVICES } from '../data/servicesData';
import { ServiceItem } from '../types';
import { SEO } from '../components/common/SEO';
import { Code, Check, ArrowRight, ShieldCheck, Sparkles, PhoneCall, ChevronDown } from 'lucide-react';

interface DigitalSolutionsPageProps {
  onNavigate: (page: string) => void;
}

export const DigitalSolutionsPage: React.FC<DigitalSolutionsPageProps> = ({ onNavigate }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(DIGITAL_SERVICES[0]);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#050811] text-white pt-28 pb-20">
      <SEO
        title="Digital Solutions | Website, App, SEO & Marketing | AVRX"
        description="Build your digital future with AVRX. Custom high-performance website design, corporate portals, e-commerce, mobile apps, and organic SEO growth."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
            <Code className="w-4 h-4 text-cyan-400" />
            <span>Digital Engineering & Growth</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white">
            Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Digital Future</span>.
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            High-converting business websites, custom web apps, iOS/Android mobile applications, and performance marketing designed for 2026.
          </p>
        </div>

        {/* Services Grid Selection */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          
          {/* Left Service Menu */}
          <div className="lg:col-span-4 space-y-2 sticky top-28">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 px-3 mb-2">
              Select Digital Service
            </h3>
            {DIGITAL_SERVICES.map(svc => (
              <button
                key={svc.id}
                onClick={() => {
                  setSelectedService(svc);
                  setActiveFaq(null);
                }}
                className={`w-full text-left p-4 rounded-2xl border transition flex items-center justify-between ${
                  selectedService?.id === svc.id
                    ? 'bg-cyan-500/15 border-cyan-400 text-white shadow-[0_0_20px_rgba(0,240,255,0.2)] font-bold'
                    : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:bg-slate-800/80'
                }`}
              >
                <div>
                  <div className="text-sm">{svc.title}</div>
                  <div className="text-[11px] text-slate-400 font-normal line-clamp-1 mt-0.5">{svc.priceStarting}</div>
                </div>
                <ArrowRight className={`w-4 h-4 ${selectedService?.id === svc.id ? 'text-cyan-400' : 'text-slate-600'}`} />
              </button>
            ))}
          </div>

          {/* Right Detailed Service View */}
          {selectedService && (
            <div className="lg:col-span-8 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-8 shadow-2xl backdrop-blur-xl">
              
              {/* Title & Badge Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
                <div>
                  <div className="flex items-center gap-3">
                    <h2 className="text-2xl sm:text-3xl font-black text-white">{selectedService.title}</h2>
                    {selectedService.badge && (
                      <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-bold">
                        {selectedService.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-slate-300 text-sm mt-2 leading-relaxed">{selectedService.fullDesc}</p>
                </div>

                <div className="text-right">
                  <div className="text-xs text-slate-400 font-mono uppercase">Starting From</div>
                  <div className="text-2xl font-black text-cyan-400">{selectedService.priceStarting}</div>
                </div>
              </div>

              {/* Key Features */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Key Deliverables & Features</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedService.features.map((feat, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Business Benefits */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Business Benefits</h4>
                <div className="space-y-2">
                  {selectedService.benefits.map((ben, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/20 text-xs text-emerald-200 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{ben}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Execution Process Timeline */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">AVRX Execution Process</h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {selectedService.process.map((step, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center space-y-1">
                      <div className="text-xs font-mono font-bold text-cyan-400">STEP 0{idx + 1}</div>
                      <div className="text-[11px] text-slate-300 font-medium leading-tight">{step}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service FAQs */}
              {selectedService.faqs && (
                <div className="space-y-3 pt-4 border-t border-slate-800">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Service FAQs</h4>
                  <div className="space-y-2">
                    {selectedService.faqs.map((faq, idx) => (
                      <div key={idx} className="border border-slate-800 rounded-2xl overflow-hidden bg-slate-950">
                        <button
                          onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                          className="w-full p-4 text-left font-semibold text-xs sm:text-sm text-slate-200 flex items-center justify-between"
                        >
                          <span>{faq.question}</span>
                          <ChevronDown className={`w-4 h-4 text-cyan-400 transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`} />
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
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 text-slate-950 font-bold text-sm rounded-2xl shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:scale-105 transition flex items-center justify-center gap-2"
                >
                  <span>Order {selectedService.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full sm:w-auto px-6 py-4 bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-300 text-xs font-semibold rounded-2xl transition flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-cyan-400" />
                  <span>Talk to Digital Architect</span>
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
};
