import React from 'react';
import SeoMeta from '../components/common/SeoMeta';
import HomeHero from '../components/home/HomeHero';
import ServicesGridSection from '../components/home/ServicesGridSection';
import FinancialLoansSection from '../components/home/FinancialLoansSection';
import TaxAndGstSection from '../components/home/TaxAndGstSection';
import AiSolutionsSection from '../components/home/AiSolutionsSection';
import WhyChooseAvrxSection from '../components/home/WhyChooseAvrxSection';
import ClientTestimonialsSection from '../components/home/ClientTestimonialsSection';
import FinalCtaSection from '../components/home/FinalCtaSection';

export default function HomePage() {
  return (
    <div className="bg-[#08090C] min-h-screen">
      <SeoMeta
        title="No 1 Digital and Financial Solution"
        description="AVRX Digital & Financial Solution delivers ultra-premium website design, native mobile apps, automated GST & tax compliance, instant business loans up to ₹20 Cr, and futuristic AI tools."
      />

      <HomeHero />
      <WhyChooseAvrxSection />
      <ServicesGridSection />
      <FinancialLoansSection />
      <TaxAndGstSection />
      <AiSolutionsSection />
      <ClientTestimonialsSection />
      <FinalCtaSection />
    </div>
  );
}
