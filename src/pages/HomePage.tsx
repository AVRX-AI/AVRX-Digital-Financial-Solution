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
  const homeFaqs = [
    {
      question: 'What services does AVRX Digital & Financial Solution offer in Ambikapur?',
      answer: 'AVRX Digital & Financial Solution provides website design, web development, mobile application development, SEO, business loans, personal loans, GST registration & filing, ITR tax e-filing, and insurance solutions in Ambikapur, Surguja, Chhattisgarh.'
    },
    {
      question: 'Where is AVRX Digital & Financial Solution located?',
      answer: 'Our main office is located at Waterpark Ambikapur, NH343, Surguja District, Chhattisgarh, India - 497001.'
    },
    {
      question: 'How do I apply for a business or personal loan with AVRX?',
      answer: 'You can submit an inquiry through our website contact form or call/WhatsApp us directly at +91-9630661536. Our financial advisors assist with complete documentation for bank partners.'
    }
  ];

  return (
    <div className="bg-[#08090C] min-h-screen">
      <SeoMeta
        title="AVRX Digital & Financial Solution | Digital, Financial & AI Services in Ambikapur"
        description="AVRX Digital & Financial Solution delivers custom website design, web development, SEO, GST filing, personal & business loans, and insurance services in Ambikapur, Surguja, Chhattisgarh."
        keywords="AVRX Digital, Financial Solution Ambikapur, website design company Ambikapur, web development Surguja, business loan Chhattisgarh, GST filing Ambikapur, personal loan Surguja"
        canonicalUrl="https://avrx.in/"
        faqData={homeFaqs}
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
