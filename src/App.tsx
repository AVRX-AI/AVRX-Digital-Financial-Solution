import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { AIToolsHub } from './components/AIToolsHub';
import { PortfolioSection } from './components/PortfolioSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BlogSection } from './components/BlogSection';
import { ConsultationModal } from './components/ConsultationModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { Footer } from './components/Footer';
import { ServiceItem, Language, ThemeMode } from './types';
import { MessageSquare, PhoneCall } from 'lucide-react';

export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [theme, setTheme] = useState<ThemeMode>('dark');
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [exploredService, setExploredService] = useState<ServiceItem | null>(null);

  const handleSelectService = (service: ServiceItem) => {
    setSelectedService(service);
    setIsConsultationOpen(true);
  };

  const handleOpenGeneralConsultation = () => {
    setSelectedService(null);
    setIsConsultationOpen(true);
  };

  const handleThemeToggle = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-[#081B33] text-white' : 'bg-[#F4F8FC] text-gray-900'} font-sans selection:bg-cyan-500 selection:text-white transition-colors duration-300`}>
      {/* Top Navigation */}
      <Navbar
        language={language}
        onLanguageChange={setLanguage}
        theme={theme}
        onThemeToggle={handleThemeToggle}
        onOpenConsultation={handleOpenGeneralConsultation}
      />

      {/* Hero Header */}
      <HeroSection
        language={language}
        onOpenConsultation={handleOpenGeneralConsultation}
        onExploreServices={() => scrollToSection('services')}
        onTalkToAI={() => scrollToSection('ai-tools')}
      />

      {/* Services Section (12 Digital + 8 Financial) */}
      <ServicesSection
        onSelectService={handleSelectService}
        onOpenConsultation={handleOpenGeneralConsultation}
        onExploreService={setExploredService}
      />

      {/* Interactive AI Tools Hub (8 Interactive Tools) */}
      <AIToolsHub
        onSelectService={handleSelectService}
        onOpenConsultation={handleOpenGeneralConsultation}
      />

      {/* Why Choose Us & Tech+CA Comparison Table */}
      <WhyChooseUsSection />

      {/* Portfolio & Case Studies */}
      <PortfolioSection onOpenConsultation={handleOpenGeneralConsultation} />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Knowledge Hub & Blog */}
      <BlogSection />

      {/* Footer */}
      <Footer
        onSelectService={handleSelectService}
        onOpenConsultation={handleOpenGeneralConsultation}
        onExploreService={setExploredService}
      />

      {/* Floating Action Button for Quick Consultation */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3">
        <button
          onClick={handleOpenGeneralConsultation}
          className="px-4 py-3 rounded-2xl bg-gradient-to-r from-[#0A66FF] to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-extrabold text-xs shadow-2xl shadow-blue-500/40 flex items-center space-x-2 border border-white/20 transition-all hover:scale-105"
        >
          <MessageSquare className="w-4 h-4" />
          <span>Ask AVRX AI / Book Free Call</span>
        </button>
      </div>

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        selectedService={selectedService}
      />

      {/* Service Detail Page Modal */}
      <ServiceDetailModal
        isOpen={!!exploredService}
        onClose={() => setExploredService(null)}
        service={exploredService}
        onSelectRelatedService={setExploredService}
        onBookService={(srv) => {
          setExploredService(null);
          handleSelectService(srv);
        }}
      />
    </div>
  );
}
