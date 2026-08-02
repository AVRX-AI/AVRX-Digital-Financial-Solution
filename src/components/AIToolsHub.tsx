import React, { useState } from 'react';
import { Bot, Sparkles, Layout, CreditCard, Shield, BarChart2, FileText, Globe, PiggyBank } from 'lucide-react';
import { ServiceItem } from '../types';
import { AIBusinessConsultant } from './ai-tools/AIBusinessConsultant';
import { AIWebsiteRecommendation } from './ai-tools/AIWebsiteRecommendation';
import { AILoanEligibility } from './ai-tools/AILoanEligibility';
import { AIInsuranceAdvisor } from './ai-tools/AIInsuranceAdvisor';
import { AICreditScoreGuide } from './ai-tools/AICreditScoreGuide';
import { AIGSTTaxCalculator } from './ai-tools/AIGSTTaxCalculator';
import { AISEORankingAuditor } from './ai-tools/AISEORankingAuditor';
import { AIFinancialGoalPlanner } from './ai-tools/AIFinancialGoalPlanner';

interface AIToolsHubProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenConsultation: () => void;
}

export const AIToolsHub: React.FC<AIToolsHubProps> = ({
  onSelectService,
  onOpenConsultation
}) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const toolsList = [
    { id: 0, title: 'AI Business Consultant', icon: Bot, badge: 'Smart Q&A', color: 'from-[#0A66FF] to-cyan-500' },
    { id: 1, title: 'AI Website Recommender', icon: Layout, badge: 'Instant Quote', color: 'from-cyan-500 to-blue-600' },
    { id: 2, title: 'Loan Sanction Checker', icon: CreditCard, badge: 'Eligibility', color: 'from-purple-500 to-blue-600' },
    { id: 3, title: 'Insurance Advisor', icon: Shield, badge: 'Health / Life / Tax', color: 'from-emerald-500 to-blue-600' },
    { id: 4, title: 'Credit Score Simulator', icon: BarChart2, badge: 'CIBIL / Cards', color: 'from-amber-500 to-blue-600' },
    { id: 5, title: 'GST & Tax Calculator', icon: FileText, badge: 'ITR / ITC Saving', color: 'from-blue-500 to-purple-600' },
    { id: 6, title: 'SEO & Speed Auditor', icon: Globe, badge: 'Core Web Vitals', color: 'from-cyan-500 to-emerald-600' },
    { id: 7, title: 'SIP Wealth Planner', icon: PiggyBank, badge: 'CAGR Compounding', color: 'from-emerald-500 to-purple-600' },
  ];

  return (
    <section id="ai-tools" className="py-20 bg-gradient-to-b from-[#081B33] via-[#051122] to-[#081B33] relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-bold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>8 INTERACTIVE AI GROWTH & FINANCE SIMULATORS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Make Smarter Decisions With Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-[#0A66FF]">AI-Powered Tools</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white/70">
            Check loan eligibility, simulate your CIBIL score, estimate website architecture budgets, audit SEO health, and calculate GST tax savings — completely free & instant.
          </p>
        </div>

        {/* Tools navigation pills */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 gap-2 mb-8 scrollbar-none">
          {toolsList.map((tool) => {
            const Icon = tool.icon;
            const active = activeTab === tool.id;
            return (
              <button
                key={tool.id}
                onClick={() => setActiveTab(tool.id)}
                className={`px-4 py-3 rounded-2xl text-xs font-bold flex items-center space-x-2.5 shrink-0 transition-all ${
                  active
                    ? 'bg-gradient-to-r from-[#0A66FF] to-cyan-500 text-white shadow-lg shadow-blue-500/30 scale-105'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tool.title}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full ${active ? 'bg-white/20 text-white' : 'bg-white/10 text-cyan-300'}`}>
                  {tool.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected AI Tool View */}
        <div className="transition-all duration-300">
          {activeTab === 0 && (
            <AIBusinessConsultant
              onSelectService={onSelectService}
              onOpenConsultation={onOpenConsultation}
            />
          )}
          {activeTab === 1 && (
            <AIWebsiteRecommendation onOpenConsultation={onOpenConsultation} />
          )}
          {activeTab === 2 && (
            <AILoanEligibility onOpenConsultation={onOpenConsultation} />
          )}
          {activeTab === 3 && (
            <AIInsuranceAdvisor onOpenConsultation={onOpenConsultation} />
          )}
          {activeTab === 4 && (
            <AICreditScoreGuide onOpenConsultation={onOpenConsultation} />
          )}
          {activeTab === 5 && (
            <AIGSTTaxCalculator onOpenConsultation={onOpenConsultation} />
          )}
          {activeTab === 6 && (
            <AISEORankingAuditor onOpenConsultation={onOpenConsultation} />
          )}
          {activeTab === 7 && (
            <AIFinancialGoalPlanner onOpenConsultation={onOpenConsultation} />
          )}
        </div>
      </div>
    </section>
  );
};
