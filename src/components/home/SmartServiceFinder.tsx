import React, { useState } from 'react';
import { Sparkles, Check, ArrowRight, UserCheck, Code, DollarSign, FileText, Shield } from 'lucide-react';
import { DIGITAL_SERVICES, FINANCIAL_SERVICES, TAX_SERVICES, INSURANCE_SERVICES, AI_TOOLS } from '../../data/servicesData';
import { ServiceItem, AIToolItem } from '../../types';

interface SmartFinderProps {
  onNavigate: (page: string) => void;
}

export const SmartServiceFinder: React.FC<SmartFinderProps> = ({ onNavigate }) => {
  const [selectedPersona, setSelectedPersona] = useState<string>('Business Owner');
  const [selectedNeeds, setSelectedNeeds] = useState<string[]>(['Build a website', 'Need finance / loan']);
  const [showResults, setShowResults] = useState<boolean>(true);

  const personas = [
    'Student',
    'Salaried Professional',
    'Business Owner',
    'Startup',
    'Freelancer',
    'Self-employed',
    'Individual'
  ];

  const needOptions = [
    'Build a website',
    'Grow business & SEO',
    'Need finance / loan',
    'File taxes / GST / ITR',
    'Buy insurance',
    'Start online business',
    'Use AI tools'
  ];

  const toggleNeed = (need: string) => {
    setSelectedNeeds(prev =>
      prev.includes(need) ? prev.filter(n => n !== need) : [...prev, need]
    );
  };

  const getRecommendedItems = () => {
    const recommended: (ServiceItem | AIToolItem)[] = [];

    if (selectedNeeds.includes('Build a website') || selectedNeeds.includes('Start online business')) {
      recommended.push(DIGITAL_SERVICES[0]); // Website Design
      recommended.push(DIGITAL_SERVICES[2]); // E-commerce
    }

    if (selectedNeeds.includes('Grow business & SEO')) {
      recommended.push(DIGITAL_SERVICES[7]); // SEO
      recommended.push(DIGITAL_SERVICES[6]); // Digital Marketing
    }

    if (selectedNeeds.includes('Need finance / loan')) {
      if (selectedPersona === 'Salaried Professional' || selectedPersona === 'Individual') {
        recommended.push(FINANCIAL_SERVICES[0]); // Personal Loan
      } else {
        recommended.push(FINANCIAL_SERVICES[1]); // Business Loan
        recommended.push(FINANCIAL_SERVICES[6]); // Govt Scheme Loans
      }
    }

    if (selectedNeeds.includes('File taxes / GST / ITR')) {
      recommended.push(TAX_SERVICES[0]); // GST
      recommended.push(TAX_SERVICES[2]); // ITR
    }

    if (selectedNeeds.includes('Buy insurance')) {
      recommended.push(INSURANCE_SERVICES[1]); // Health
      recommended.push(INSURANCE_SERVICES[0]); // Motor
    }

    if (selectedNeeds.includes('Use AI tools')) {
      recommended.push(AI_TOOLS[0]); // Health checker
      recommended.push(AI_TOOLS[2]); // Business idea generator
    }

    // Default fallbacks if empty
    if (recommended.length === 0) {
      recommended.push(DIGITAL_SERVICES[0]);
      recommended.push(FINANCIAL_SERVICES[1]);
      recommended.push(TAX_SERVICES[0]);
    }

    return Array.from(new Set(recommended)).slice(0, 4);
  };

  return (
    <section className="py-24 bg-[#070b16] relative overflow-hidden border-t border-b border-slate-800/80">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-3">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>Interactive Recommendation Engine</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Not sure what you need?
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3">
            Select your profile and requirements below. AVRX Smart Service Finder will generate custom solution recommendations instantly.
          </p>
        </div>

        {/* Wizard Form Container - Expanded Width */}
        <div className="w-full mx-auto bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8">
          
          {/* Step 1: Persona Selection */}
          <div className="space-y-3">
            <label className="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-cyan-400" />
              <span>Step 1: I am a...</span>
            </label>
            <div className="flex flex-wrap gap-2">
              {personas.map(persona => (
                <button
                  key={persona}
                  onClick={() => setSelectedPersona(persona)}
                  className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition border ${
                    selectedPersona === persona
                      ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                      : 'bg-slate-950 hover:bg-slate-800 text-slate-300 border-slate-800'
                  }`}
                >
                  {persona}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Need Selection */}
          <div className="space-y-3">
            <label className="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span>Step 2: I want to... (Select all that apply)</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
              {needOptions.map(need => {
                const isSelected = selectedNeeds.includes(need);
                return (
                  <button
                    key={need}
                    onClick={() => toggleNeed(need)}
                    className={`p-3 rounded-2xl text-xs font-semibold text-left transition border flex items-center justify-between ${
                      isSelected
                        ? 'bg-purple-500/20 border-purple-400 text-purple-200 shadow'
                        : 'bg-slate-950 hover:bg-slate-800 text-slate-400 border-slate-800'
                    }`}
                  >
                    <span>{need}</span>
                    {isSelected && <Check className="w-4 h-4 text-purple-400 shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Results Recommendations Box */}
          <div className="pt-6 border-t border-slate-800/80 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span>Tailored AVRX Solutions for "{selectedPersona}"</span>
              </h4>
              <span className="text-xs text-slate-400 font-mono">Instant Match</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {getRecommendedItems().map(item => {
                const title = 'title' in item ? item.title : item.name;
                const desc = 'shortDesc' in item ? item.shortDesc : item.description;

                return (
                  <div
                    key={item.id}
                    onClick={() => onNavigate(item.category === 'digital' ? 'digital-solutions' : item.category === 'financial' ? 'financial-solutions' : item.category === 'tax' ? 'tax-solutions' : item.category === 'insurance' ? 'insurance-solutions' : 'ai-tools')}
                    className="p-5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-cyan-500/40 transition cursor-pointer group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-bold text-white group-hover:text-cyan-300 transition">
                          {title}
                        </span>
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                          {item.category}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                        {desc}
                      </p>
                    </div>

                    <div className="mt-4 flex items-center justify-between text-xs font-semibold text-cyan-400 group-hover:translate-x-1 transition">
                      <span>Explore Solution</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-4 text-center">
              <button
                onClick={() => onNavigate('contact')}
                className="px-8 py-3.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-slate-950 font-bold text-sm rounded-2xl shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:scale-105 transition"
              >
                Get Expert Advice for Your Custom Profile
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
