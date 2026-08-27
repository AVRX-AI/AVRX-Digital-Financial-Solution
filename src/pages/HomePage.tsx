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
import { HomeBlogSection } from '../components/home/HomeBlogSection';
import { ResourceCenterSection } from '../components/home/ResourceCenterSection';
import { SmartJourneyContactSection } from '../components/home/SmartJourneyContactSection';
import { SEO } from '../components/common/SEO';
import { RakshaBandhanSeparator } from '../components/common/RakshaBandhanSeparator';
import { RakshaBandhanEffects } from '../components/common/RakshaBandhanEffects';

interface HomePageProps {
  onNavigate: (page: string, postSlug?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#07020d] text-white selection:bg-amber-500 selection:text-slate-950 pb-16 md:pb-0 relative overflow-hidden">
      
      {/* RAKSHA BANDHAN FESTIVE THEME EFFECTS & PARTICLES */}
      <RakshaBandhanEffects />

      <SEO
        title="AVRX | No 1 Digital & Financial Solution Company in Chhattisgarh India"
        description="Next-generation digital engineering, business loans, IRDAI insurance, GST tax compliance, and 70+ in-browser AI tools by AVRX Digital and Financial Solution."
        canonicalUrl="https://avrx.in/"
        breadcrumbs={[
          { name: 'Home', url: 'https://avrx.in/' }
        ]}
      />

      {/* 01 — CINEMATIC FULL-SCREEN HERO */}
      <AICommandCenterHero onNavigate={onNavigate} />

      {/* Raksha Bandhan Festive Separator */}
      <RakshaBandhanSeparator />

      {/* 02 — TOP CLIENTS MARQUEE */}
      <TopClientsSection />

      {/* 03 — WHY CHOOSE AVRX */}
      <WhyChooseAVRXSection onNavigate={onNavigate} />

      {/* Raksha Bandhan Festive Separator */}
      <RakshaBandhanSeparator />

      {/* 04 — DIGITAL SOLUTIONS */}
      <DigitalSolutionsSection onNavigate={onNavigate} />

      {/* 05 — FINANCIAL SOLUTIONS */}
      <FinancialSolutionsSection onNavigate={onNavigate} />

      {/* 06 — TAX & DOCUMENTATION */}
      <TaxDocumentationSection onNavigate={onNavigate} />

      {/* Raksha Bandhan Festive Separator */}
      <RakshaBandhanSeparator />

      {/* 07 — AVRX AI TOOLS SUITE */}
      <AIHubSection onNavigate={onNavigate} />

      {/* 08 — INTERACTIVE FINANCIAL CALCULATOR LAB */}
      <FinanceCalculatorLab onNavigate={onNavigate} />

      {/* 09 — WEBSITE HEALTH & SPEED SCANNER */}
      <WebsiteHealthScannerSection onNavigate={onNavigate} />

      {/* Raksha Bandhan Festive Separator */}
      <RakshaBandhanSeparator />

      {/* 10 — AI PROJECT BUILDER & COST ESTIMATOR */}
      <AIProjectBuilderSection onNavigate={onNavigate} />

      {/* 11 — BUSINESS READINESS EVALUATOR */}
      <BusinessReadinessScoreSection onNavigate={onNavigate} />

      {/* 12 — PROJECTS SHOWCASE LAB */}
      <ProjectsShowcaseLab onNavigate={onNavigate} />

      {/* 13 — RESOURCE CENTER & KNOWLEDGE BASE */}
      <ResourceCenterSection onNavigate={onNavigate} />

      {/* Raksha Bandhan Festive Separator */}
      <RakshaBandhanSeparator />

      {/* 14 — DEDICATED BLOG & ARTICLES SECTION */}
      <HomeBlogSection onNavigate={onNavigate} />

      {/* Raksha Bandhan Festive Separator */}
      <RakshaBandhanSeparator />

      {/* 15 — CONTACT & SMART INTAKE WIZARD */}
      <SmartJourneyContactSection onNavigate={onNavigate} />
    </div>
  );
};
