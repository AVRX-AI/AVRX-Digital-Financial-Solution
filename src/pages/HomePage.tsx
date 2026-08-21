import React from 'react';
import { AICommandCenterHero } from '../components/home/AICommandCenterHero';
import { TopClientsSection } from '../components/home/TopClientsSection';
import { WhyChooseAVRXSection } from '../components/home/WhyChooseAVRXSection';
import { DigitalSolutionsSection } from '../components/home/DigitalSolutionsSection';
import { FinancialSolutionsSection } from '../components/home/FinancialSolutionsSection';
import { TaxDocumentationSection } from '../components/home/TaxDocumentationSection';
import { AIHubSection } from '../components/home/AIHubSection';
import { AIConversationalSearch } from '../components/home/AIConversationalSearch';
import { FinanceCalculatorLab } from '../components/home/FinanceCalculatorLab';
import { WebsiteHealthScannerSection } from '../components/home/WebsiteHealthScannerSection';
import { AIProjectBuilderSection } from '../components/home/AIProjectBuilderSection';
import { BusinessReadinessScoreSection } from '../components/home/BusinessReadinessScoreSection';
import { ProjectsShowcaseLab } from '../components/home/ProjectsShowcaseLab';
import { ResourceCenterSection } from '../components/home/ResourceCenterSection';
import { SmartJourneyContactSection } from '../components/home/SmartJourneyContactSection';
import { SEO } from '../components/common/SEO';
import { TricolourSeparator } from '../components/common/TricolourSeparator';

interface HomePageProps {
  onNavigate: (page: string, postSlug?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#030712] text-white selection:bg-cyan-500 selection:text-slate-950 pb-16 md:pb-0">
      <SEO
        title="AVRX.in — No 1 Digital & Financial Solution in Chhattisgarh"
        description="Next-generation digital engineering, business loans, IRDAI insurance, tax compliance, and 70+ in-browser AI tools by AVRX Digital and Financial Solution."
      />

      {/* 01 — CINEMATIC FULL-SCREEN HERO */}
      <AICommandCenterHero onNavigate={onNavigate} />

      {/* Tricolour Separator */}
      <TricolourSeparator />

      {/* 02 — TOP CLIENTS MARQUEE */}
      <TopClientsSection />

      {/* 03 — WHY CHOOSE AVRX */}
      <WhyChooseAVRXSection onNavigate={onNavigate} />

      {/* Tricolour Separator */}
      <TricolourSeparator />

      {/* 04 — DIGITAL SOLUTIONS */}
      <DigitalSolutionsSection onNavigate={onNavigate} />

      {/* 05 — FINANCIAL SOLUTIONS */}
      <FinancialSolutionsSection onNavigate={onNavigate} />

      {/* 06 — TAX & DOCUMENTATION */}
      <TaxDocumentationSection onNavigate={onNavigate} />

      {/* Tricolour Separator */}
      <TricolourSeparator />

      {/* 07 — AVRX AI TOOLS SUITE */}
      <AIHubSection onNavigate={onNavigate} />

      {/* 08 — INTERACTIVE FINANCIAL CALCULATOR LAB */}
      <FinanceCalculatorLab onNavigate={onNavigate} />

      {/* 09 — WEBSITE HEALTH & SPEED SCANNER */}
      <WebsiteHealthScannerSection onNavigate={onNavigate} />

      {/* Tricolour Separator */}
      <TricolourSeparator />

      {/* 10 — AI PROJECT BUILDER & COST ESTIMATOR */}
      <AIProjectBuilderSection onNavigate={onNavigate} />

      {/* 11 — BUSINESS READINESS EVALUATOR */}
      <BusinessReadinessScoreSection onNavigate={onNavigate} />

      {/* 12 — PROJECTS SHOWCASE LAB */}
      <ProjectsShowcaseLab onNavigate={onNavigate} />

      {/* 13 — RESOURCE CENTER & KNOWLEDGE BASE */}
      <ResourceCenterSection onNavigate={onNavigate} />

      {/* Tricolour Separator */}
      <TricolourSeparator />

      {/* 14 — CONTACT & SMART INTAKE WIZARD */}
      <SmartJourneyContactSection onNavigate={onNavigate} />
    </div>
  );
};
