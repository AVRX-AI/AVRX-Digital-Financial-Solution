import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import FloatingWhatsApp from './components/layout/FloatingWhatsApp';
import FloatingChatbot from './components/layout/FloatingChatbot';

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

export default function App() {
  return (
    <Router>
      <div className="bg-[#08090C] text-slate-100 min-h-screen flex flex-col selection:bg-blue-500 selection:text-white font-sans antialiased">
        <ScrollToTop />
        <Navbar />

        <main className="flex-1 pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesIndexPage />} />
            <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
            <Route path="/financial-solutions" element={<FinancialSolutionsPage />} />
            <Route path="/tax-solutions" element={<TaxSolutionsPage />} />
            <Route path="/insurance-solutions" element={<InsuranceSolutionsPage />} />
            <Route path="/ai-solutions" element={<AiSolutionsPage />} />
            <Route path="/digital-products" element={<DigitalProductsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/career" element={<CareerPage />} />
          </Routes>
        </main>

        <Footer />
        <FloatingWhatsApp />
        <FloatingChatbot />
      </div>
    </Router>
  );
}
