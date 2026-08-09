import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import FloatingWhatsApp from './components/layout/FloatingWhatsApp';
import FloatingChatbot from './components/layout/FloatingChatbot';
import ClickToTopButton from './components/layout/ClickToTopButton';

// Pages
import HomePage from './pages/HomePage';
import ServicesIndexPage from './pages/ServicesIndexPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import FinancialSolutionsPage from './pages/FinancialSolutionsPage';
import TaxSolutionsPage from './pages/TaxSolutionsPage';
import InsuranceSolutionsPage from './pages/InsuranceSolutionsPage';
import AiSolutionsPage from './pages/AiSolutionsPage';
import DigitalProductsPage from './pages/DigitalProductsPage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import PricingPage from './pages/PricingPage';
import ContactPage from './pages/ContactPage';
import FaqPage from './pages/FaqPage';
import BlogPage from './pages/BlogPage';
import CareerPage from './pages/CareerPage';

// Legal, Trust & Utility Pages
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsConditionsPage from './pages/TermsConditionsPage';
import DisclaimerPage from './pages/DisclaimerPage';
import RefundPolicyPage from './pages/RefundPolicyPage';
import SitemapPage from './pages/SitemapPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <Router>
      <div className="bg-[#08090C] text-slate-100 min-h-screen flex flex-col selection:bg-blue-500 selection:text-white font-sans antialiased">
        <ScrollToTop />
        <Navbar />

        <main className="flex-1 pt-20">
          <Routes>
            {/* Core Pages */}
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesIndexPage />} />
            <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
            
            {/* Direct Digital Service SEO Routes */}
            <Route path="/website-design" element={<ServiceDetailPage />} />
            <Route path="/web-development" element={<ServiceDetailPage />} />
            <Route path="/application-development" element={<ServiceDetailPage />} />
            <Route path="/ecommerce-website" element={<ServiceDetailPage />} />
            <Route path="/digital-marketing" element={<ServiceDetailPage />} />
            <Route path="/seo-services" element={<ServiceDetailPage />} />
            <Route path="/website-redesign" element={<ServiceDetailPage />} />
            <Route path="/website-maintenance" element={<ServiceDetailPage />} />
            
            {/* Direct Financial Solution SEO Routes */}
            <Route path="/financial-solutions" element={<FinancialSolutionsPage />} />
            <Route path="/personal-loan" element={<FinancialSolutionsPage />} />
            <Route path="/business-loan" element={<FinancialSolutionsPage />} />
            <Route path="/home-loan" element={<FinancialSolutionsPage />} />
            <Route path="/car-loan" element={<FinancialSolutionsPage />} />
            <Route path="/mortgage-loan" element={<FinancialSolutionsPage />} />
            <Route path="/refinance" element={<FinancialSolutionsPage />} />
            <Route path="/pmegp-loan" element={<FinancialSolutionsPage />} />
            <Route path="/mudra-loan" element={<FinancialSolutionsPage />} />

            {/* Direct Tax & Compliance SEO Routes */}
            <Route path="/tax-solutions" element={<TaxSolutionsPage />} />
            <Route path="/gst-registration" element={<TaxSolutionsPage />} />
            <Route path="/gst-filing" element={<TaxSolutionsPage />} />
            <Route path="/itr-filing" element={<TaxSolutionsPage />} />
            <Route path="/udyam-registration" element={<TaxSolutionsPage />} />

            {/* Direct Insurance SEO Routes */}
            <Route path="/insurance-solutions" element={<InsuranceSolutionsPage />} />
            <Route path="/motor-insurance" element={<InsuranceSolutionsPage />} />
            <Route path="/health-insurance" element={<InsuranceSolutionsPage />} />
            <Route path="/travel-insurance" element={<InsuranceSolutionsPage />} />
            <Route path="/home-insurance" element={<InsuranceSolutionsPage />} />
            <Route path="/shop-insurance" element={<InsuranceSolutionsPage />} />
            <Route path="/property-insurance" element={<InsuranceSolutionsPage />} />

            {/* Company, AI & Product Pages */}
            <Route path="/ai-solutions" element={<AiSolutionsPage />} />
            <Route path="/digital-products" element={<DigitalProductsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/career" element={<CareerPage />} />

            {/* Legal, Compliance & Sitemap Pages */}
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-and-conditions" element={<TermsConditionsPage />} />
            <Route path="/terms-conditions" element={<TermsConditionsPage />} />
            <Route path="/disclaimer" element={<DisclaimerPage />} />
            <Route path="/refund-policy" element={<RefundPolicyPage />} />
            <Route path="/sitemap" element={<SitemapPage />} />

            {/* Branded 404 Page */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <Footer />
        <FloatingWhatsApp />
        <FloatingChatbot />
        <ClickToTopButton />
      </div>
    </Router>
  );
}
