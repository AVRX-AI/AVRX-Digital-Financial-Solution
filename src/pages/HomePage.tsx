import React from 'react';
import { Hero } from '../components/home/Hero';
import { AIAssistantSection } from '../components/home/AIAssistantSection';
import { SolutionsGrid } from '../components/home/SolutionsGrid';
import { HealthCheckerSection } from '../components/home/HealthCheckerSection';
import { AIToolsSuiteSection } from '../components/home/AIToolsSuiteSection';
import { SmartServiceFinder } from '../components/home/SmartServiceFinder';
import { WhyAVRX } from '../components/home/WhyAVRX';
import { HowItWorks } from '../components/home/HowItWorks';
import { BusinessOSPreview } from '../components/home/BusinessOSPreview';
import { FinalCTA } from '../components/home/FinalCTA';
import { SEO } from '../components/common/SEO';
import { GENERAL_FAQS } from '../data/servicesData';
import { ArrowRight, HelpCircle, CheckCircle2, ShieldCheck } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#050811] text-white">
      <SEO
        title="AVRX Digital & Financial Solution | Next-Gen Ecosystem"
        description="AVRX helps individuals and businesses build, grow, protect and manage their digital and financial future with modern technology-driven solutions."
      />

      {/* 2. Hero + 3D AI Core */}
      <Hero onNavigate={onNavigate} />

      {/* 3. AVRX AI Assistant */}
      <AIAssistantSection />

      {/* 4. Solution Categories */}
      <SolutionsGrid onNavigate={onNavigate} />

      {/* 10. Website Health Checker */}
      <HealthCheckerSection onNavigate={onNavigate} />

      {/* 10b. Interactive AI Multi-Tool Suite */}
      <AIToolsSuiteSection onNavigate={onNavigate} />

      {/* 11. Smart Service Finder */}
      <SmartServiceFinder onNavigate={onNavigate} />

      {/* 12. Why AVRX */}
      <WhyAVRX />

      {/* 13. How It Works */}
      <HowItWorks onNavigate={onNavigate} />

      {/* 14. Business Command Center Preview */}
      <BusinessOSPreview />

      {/* FAQ Highlights Section */}
      <section className="py-20 bg-[#070b16] border-t border-slate-800/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
              Clear Answers
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-3">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {GENERAL_FAQS.map((faq, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed pl-7">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => onNavigate('faq')}
              className="text-xs font-bold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 hover:underline"
            >
              <span>View All Frequently Asked Questions</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 18. Final CTA */}
      <FinalCTA onNavigate={onNavigate} />
    </div>
  );
};
