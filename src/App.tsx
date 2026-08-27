import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { SearchModal } from './components/layout/SearchModal';
import { WhatsAppButton } from './components/layout/WhatsAppButton';
import { IndependenceDayAtmosphere } from './components/common/IndependenceDayAtmosphere';
import { AVRXLaunchScreen } from './components/common/AVRXLaunchScreen';
import { launchSoundEngine } from './utils/launchSoundEngine';

// Pages
import { HomePage } from './pages/HomePage';
import { DigitalSolutionsPage } from './pages/DigitalSolutionsPage';
import { FinancialSolutionsPage } from './pages/FinancialSolutionsPage';
import { TaxSolutionsPage } from './pages/TaxSolutionsPage';
import { InsuranceSolutionsPage } from './pages/InsuranceSolutionsPage';
import { HostingProductsPage } from './pages/HostingProductsPage';
import { AIToolsPage } from './pages/AIToolsPage';
import { AllServicesPage } from './pages/AllServicesPage';
import { PricingPage } from './pages/PricingPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ContactPage } from './pages/ContactPage';
import { PartnerPage } from './pages/PartnerPage';
import { FAQPage } from './pages/FAQPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { AboutPage } from './pages/AboutPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { DisclaimerPage } from './pages/DisclaimerPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { WebsiteDesignPage } from './pages/WebsiteDesignPage';
import { EcommerceSolutionsPage } from './pages/EcommerceSolutionsPage';
import { AskAVRXAIFloating } from './components/common/AskAVRXAIFloating';
import { MobileBottomNav } from './components/layout/MobileBottomNav';

export function App() {
  const [currentPage, setCurrentPage] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      if (path.startsWith('/services/') && path !== '/services/') {
        return 'service-detail';
      }
      if (path === '/services') {
        return 'services';
      }
      if (path.startsWith('/blog/')) {
        return 'blog-post';
      }
      if (path === '/blog') {
        return 'blog';
      }
    }
    return 'home';
  });

  const [selectedServiceSlug, setSelectedServiceSlug] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      if (path.startsWith('/services/') && path !== '/services/') {
        return path.replace('/services/', '');
      }
    }
    return 'website-design';
  });

  const [selectedBlogPostId, setSelectedBlogPostId] = useState<string | null>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      if (path.startsWith('/blog/')) {
        return path.replace('/blog/', '');
      }
    }
    return null;
  });

  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [showLaunchScreen, setShowLaunchScreen] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem('avrx_launch_completed') !== 'true';
    } catch {
      return true;
    }
  });

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path.startsWith('/services/') && path !== '/services/') {
        setSelectedServiceSlug(path.replace('/services/', ''));
        setCurrentPage('service-detail');
      } else if (path === '/services') {
        setCurrentPage('services');
      } else if (path.startsWith('/blog/')) {
        setSelectedBlogPostId(path.replace('/blog/', ''));
        setCurrentPage('blog-post');
      } else if (path === '/blog') {
        setSelectedBlogPostId(null);
        setCurrentPage('blog');
      } else if (path === '/' || path === '') {
        setSelectedBlogPostId(null);
        setCurrentPage('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Announce "Welcome to AVRX" JARVIS voice greeting when website opens
  useEffect(() => {
    // Attempt automatic voice greeting on initial mount
    const timer = setTimeout(() => {
      launchSoundEngine.speakWelcomeToAVRX();
    }, 400);

    // Fallback: If browser autoplay policy requires user interaction, voice on first click/touch
    const handleFirstGesture = () => {
      launchSoundEngine.speakWelcomeToAVRX();
      window.removeEventListener('click', handleFirstGesture);
      window.removeEventListener('touchstart', handleFirstGesture);
      window.removeEventListener('keydown', handleFirstGesture);
    };

    window.addEventListener('click', handleFirstGesture, { once: true });
    window.addEventListener('touchstart', handleFirstGesture, { once: true });
    window.addEventListener('keydown', handleFirstGesture, { once: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('click', handleFirstGesture);
      window.removeEventListener('touchstart', handleFirstGesture);
      window.removeEventListener('keydown', handleFirstGesture);
    };
  }, []);

  const handleNavigate = (page: string, slugOrPostId?: string) => {
    if (page === 'service-detail' && slugOrPostId) {
      setSelectedServiceSlug(slugOrPostId);
      setCurrentPage('service-detail');
      if (typeof window !== 'undefined') {
        window.history.pushState({}, '', `/services/${slugOrPostId}`);
      }
    } else if (page === 'blog-post' && slugOrPostId) {
      setSelectedBlogPostId(slugOrPostId);
      setCurrentPage('blog-post');
      if (typeof window !== 'undefined') {
        window.history.pushState({}, '', `/blog/${slugOrPostId}`);
      }
    } else if (page === 'blog') {
      setSelectedBlogPostId(null);
      setCurrentPage('blog');
      if (typeof window !== 'undefined') {
        window.history.pushState({}, '', '/blog');
      }
    } else if (page === 'services') {
      setCurrentPage('services');
      if (typeof window !== 'undefined') {
        window.history.pushState({}, '', '/services');
      }
    } else {
      setSelectedBlogPostId(null);
      setCurrentPage(page);
      if (typeof window !== 'undefined' && page === 'home') {
        window.history.pushState({}, '', '/');
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectBlogPost = (postId: string) => {
    handleNavigate('blog-post', postId);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'website-design':
      case 'website-development':
        return <WebsiteDesignPage onNavigate={handleNavigate} />;
      case 'e-commerce-solutions':
      case 'ecommerce-solutions':
      case 'ecommerce':
      case 'e-commerce':
        return <EcommerceSolutionsPage onNavigate={handleNavigate} />;
      case 'service-detail':
        return <ServiceDetailPage serviceSlug={selectedServiceSlug} onNavigate={handleNavigate} />;
      case 'digital-solutions':
        return <DigitalSolutionsPage onNavigate={handleNavigate} />;
      case 'financial-solutions':
        return <FinancialSolutionsPage onNavigate={handleNavigate} />;
      case 'tax-solutions':
        return <TaxSolutionsPage onNavigate={handleNavigate} />;
      case 'insurance-solutions':
        return <InsuranceSolutionsPage onNavigate={handleNavigate} />;
      case 'hosting-products':
        return <HostingProductsPage onNavigate={handleNavigate} />;
      case 'ai-tools':
        return <AIToolsPage />;
      case 'services':
        return <AllServicesPage onNavigate={handleNavigate} />;
      case 'pricing':
        return <PricingPage onNavigate={handleNavigate} />;
      case 'projects':
      case 'portfolio':
      case 'showcase':
        return <ProjectsPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage />;
      case 'partner':
        return <PartnerPage />;
      case 'faq':
        return <FAQPage />;
      case 'blog':
        return <BlogPage onSelectPost={handleSelectBlogPost} />;
      case 'blog-post':
        return selectedBlogPostId ? (
          <BlogPostPage
            postId={selectedBlogPostId}
            onBack={() => setCurrentPage('blog')}
            onNavigate={handleNavigate}
          />
        ) : (
          <BlogPage onSelectPost={handleSelectBlogPost} />
        );
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'privacy':
        return <PrivacyPolicyPage />;
      case 'terms':
        return <TermsPage />;
      case 'disclaimer':
        return <DisclaimerPage />;
      default:
        return <NotFoundPage onNavigate={handleNavigate} />;
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#050811] font-sans text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-slate-950 relative">
        
        {/* 1. Cinematic Interactive Launch Experience Screen */}
        {showLaunchScreen && (
          <AVRXLaunchScreen
            onComplete={() => {
              setShowLaunchScreen(false);
              launchSoundEngine.speakWelcomeToAVRX();
            }}
          />
        )}

        {/* Independence Day Global Ambient Particles & Initial Entry Wave */}
        <IndependenceDayAtmosphere />

        {/* Sticky Glassmorphic Navbar with Tricolour Accent & Replay Launch button */}
        <Navbar
          activePage={currentPage}
          onNavigate={handleNavigate}
          onOpenSearch={() => setIsSearchOpen(true)}
          onReplayLaunch={() => setShowLaunchScreen(true)}
        />

        {/* Global Live Search Modal */}
        <SearchModal
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
          onSelectService={(item) => {
            if (item.category === 'digital') handleNavigate('digital-solutions');
            else if (item.category === 'financial') handleNavigate('financial-solutions');
            else if (item.category === 'tax') handleNavigate('tax-solutions');
            else if (item.category === 'insurance') handleNavigate('insurance-solutions');
            else if (item.category === 'hosting') handleNavigate('hosting-products');
            else handleNavigate('ai-tools');
          }}
        />

        {/* Active Route Screen */}
        <main className="flex-grow relative z-10">
          {renderPage()}
        </main>

        {/* Floating WhatsApp CTA */}
        <WhatsAppButton />

        {/* Floating Ask AVRX AI Assistant */}
        <AskAVRXAIFloating onNavigate={handleNavigate} />

        {/* Global Footer with Tribute Line */}
        <Footer onNavigate={handleNavigate} onReplayLaunch={() => setShowLaunchScreen(true)} />

        {/* Mobile Sticky Bottom Navigation Bar */}
        <MobileBottomNav activePage={currentPage} onNavigate={handleNavigate} />

      </div>
    </ThemeProvider>
  );
}

export default App;
