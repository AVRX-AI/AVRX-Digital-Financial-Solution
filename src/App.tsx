import React, { useState, useEffect } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { SearchModal } from './components/layout/SearchModal';
import { WhatsAppButton } from './components/layout/WhatsAppButton';
import { FuturisticAtmosphere } from './components/common/FuturisticAtmosphere';
import { JanmashtamiAtmosphere } from './components/festive/JanmashtamiAtmosphere';
import { JanmashtamiFloatingBadge } from './components/festive/JanmashtamiFloatingBadge';

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
import { AppDevelopmentPage } from './pages/AppDevelopmentPage';
import { WebPortalPage } from './pages/WebPortalPage';
import { DigitalMarketingPage } from './pages/DigitalMarketingPage';
import { SEORankingPage } from './pages/SEORankingPage';
import { AdminAIPage } from './pages/AdminAIPage';
import { AskAVRXAIFloating } from './components/common/AskAVRXAIFloating';
import { MobileBottomNav } from './components/layout/MobileBottomNav';
import { trackPageView } from './utils/analytics';

const pathToState = (pathname: string): { page: string; serviceSlug?: string; blogPostId?: string; toolSlug?: string } => {
  const cleanPath = pathname.replace(/\/$/, '') || '/';
  
  if (cleanPath.startsWith('/services/') && cleanPath !== '/services') {
    const slug = cleanPath.replace('/services/', '');
    return { page: 'service-detail', serviceSlug: slug };
  }
  if (cleanPath.startsWith('/ai-tools/') && cleanPath !== '/ai-tools') {
    const slug = cleanPath.replace('/ai-tools/', '');
    return { page: 'ai-tools', toolSlug: slug };
  }
  if (cleanPath.startsWith('/tools/') && cleanPath !== '/tools') {
    const slug = cleanPath.replace('/tools/', '');
    return { page: 'ai-tools', toolSlug: slug };
  }
  if (cleanPath === '/admin' || cleanPath === '/admin/ai' || cleanPath === '/admin-ai' || cleanPath === '/control-center') return { page: 'admin' };
  if (cleanPath === '/services') return { page: 'services' };
  if (cleanPath === '/contact' || cleanPath === '/contact-us') return { page: 'contact' };
  if (cleanPath === '/pricing' || cleanPath === '/plans') return { page: 'pricing' };
  if (cleanPath === '/projects' || cleanPath === '/portfolio' || cleanPath === '/showcase') return { page: 'projects' };
  if (cleanPath === '/about' || cleanPath === '/about-us') return { page: 'about' };
  if (cleanPath === '/partner' || cleanPath === '/partner-with-us') return { page: 'partner' };
  if (cleanPath === '/faq' || cleanPath === '/faqs') return { page: 'faq' };
  if (cleanPath === '/digital-solutions' || cleanPath === '/digital') return { page: 'digital-solutions' };
  if (cleanPath === '/financial-solutions' || cleanPath === '/finance' || cleanPath === '/loans') return { page: 'financial-solutions' };
  if (cleanPath === '/tax-solutions' || cleanPath === '/tax' || cleanPath === '/legal') return { page: 'tax-solutions' };
  if (cleanPath === '/insurance-solutions' || cleanPath === '/insurance') return { page: 'insurance-solutions' };
  if (cleanPath === '/hosting-products' || cleanPath === '/hosting') return { page: 'hosting-products' };
  if (cleanPath === '/ai-tools' || cleanPath === '/ai-suite' || cleanPath === '/ai') return { page: 'ai-tools' };
  if (cleanPath === '/privacy' || cleanPath === '/privacy-policy') return { page: 'privacy' };
  if (cleanPath === '/terms' || cleanPath === '/terms-and-conditions') return { page: 'terms' };
  if (cleanPath === '/disclaimer') return { page: 'disclaimer' };
  if (cleanPath.startsWith('/blog/') && cleanPath !== '/blog') {
    const id = cleanPath.replace('/blog/', '');
    return { page: 'blog-post', blogPostId: id };
  }
  if (cleanPath === '/blog') return { page: 'blog' };
  if (cleanPath === '/website-design') return { page: 'service-detail', serviceSlug: 'website-design' };
  if (cleanPath === '/e-commerce-solutions' || cleanPath === '/ecommerce') return { page: 'service-detail', serviceSlug: 'e-commerce-solutions' };
  if (cleanPath === '/android-app-development' || cleanPath === '/app-development') return { page: 'service-detail', serviceSlug: 'android-app-development' };
  if (cleanPath === '/web-portal-development') return { page: 'service-detail', serviceSlug: 'web-portal-development' };
  if (cleanPath === '/digital-marketing') return { page: 'service-detail', serviceSlug: 'digital-marketing' };
  if (cleanPath === '/seo-ranking' || cleanPath === '/seo') return { page: 'service-detail', serviceSlug: 'seo-ranking' };
  
  return { page: 'home' };
};

const pageToPath = (page: string, slugOrId?: string): string => {
  if (page === 'admin' || page === 'admin-ai') return '/admin';
  if (page === 'service-detail' && slugOrId) return `/services/${slugOrId}`;
  if (page === 'ai-tools' && slugOrId) return `/ai-tools/${slugOrId}`;
  if (page === 'blog-post' && slugOrId) return `/blog/${slugOrId}`;
  if (page === 'home') return '/';
  if (page === 'contact') return '/contact';
  if (page === 'services') return '/services';
  if (page === 'pricing') return '/pricing';
  if (page === 'projects' || page === 'portfolio') return '/projects';
  if (page === 'about') return '/about';
  if (page === 'partner') return '/partner';
  if (page === 'faq') return '/faq';
  if (page === 'digital-solutions') return '/digital-solutions';
  if (page === 'financial-solutions') return '/financial-solutions';
  if (page === 'tax-solutions') return '/tax-solutions';
  if (page === 'insurance-solutions') return '/insurance-solutions';
  if (page === 'hosting-products') return '/hosting-products';
  if (page === 'ai-tools') return '/ai-tools';
  if (page === 'privacy') return '/privacy';
  if (page === 'terms') return '/terms';
  if (page === 'disclaimer') return '/disclaimer';
  if (page === 'blog') return '/blog';
  if (page === 'website-design') return '/services/website-design';
  if (page === 'e-commerce-solutions') return '/services/e-commerce-solutions';
  return `/${page}`;
};

export function AppContent() {
  const { festiveMode } = useTheme();
  const initialRoute = typeof window !== 'undefined' ? pathToState(window.location.pathname) : { page: 'home' };

  const [currentPage, setCurrentPage] = useState<string>(initialRoute.page);
  const [selectedServiceSlug, setSelectedServiceSlug] = useState<string>(initialRoute.serviceSlug || 'website-design');
  const [selectedBlogPostId, setSelectedBlogPostId] = useState<string | null>(initialRoute.blogPostId || null);
  const [selectedToolSlug, setSelectedToolSlug] = useState<string | null>(initialRoute.toolSlug || null);

  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  useEffect(() => {
    const handlePopState = () => {
      const route = pathToState(window.location.pathname);
      if (route.serviceSlug) {
        setSelectedServiceSlug(route.serviceSlug);
      }
      if (route.toolSlug) {
        setSelectedToolSlug(route.toolSlug);
      } else {
        setSelectedToolSlug(null);
      }
      if (route.blogPostId) {
        setSelectedBlogPostId(route.blogPostId);
      } else {
        setSelectedBlogPostId(null);
      }
      setCurrentPage(route.page);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Google Analytics 4 (GA4) Page View Tracking on SPA route changes
  useEffect(() => {
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined') {
        trackPageView(window.location.pathname + window.location.search, document.title);
      }
    }, 50);
    return () => clearTimeout(timer);
  }, [currentPage, selectedServiceSlug, selectedBlogPostId, selectedToolSlug]);

  const handleNavigate = (page: string, slugOrPostId?: string) => {
    let targetPage = page;
    let targetSlug = selectedServiceSlug;
    let targetBlogPostId = selectedBlogPostId;
    let targetToolSlug = selectedToolSlug;

    if (page === 'service-detail' && slugOrPostId) {
      targetSlug = slugOrPostId;
      setSelectedServiceSlug(slugOrPostId);
      setCurrentPage('service-detail');
    } else if (page === 'ai-tools' && slugOrPostId) {
      targetToolSlug = slugOrPostId;
      setSelectedToolSlug(slugOrPostId);
      setCurrentPage('ai-tools');
    } else if (page === 'blog-post' && slugOrPostId) {
      targetBlogPostId = slugOrPostId;
      setSelectedBlogPostId(slugOrPostId);
      setCurrentPage('blog-post');
    } else {
      if (page === 'website-design' || page === 'e-commerce-solutions' || page === 'web-portal-development' || page === 'digital-marketing' || page === 'seo-ranking' || page === 'android-app-development') {
        targetPage = 'service-detail';
        targetSlug = page;
        setSelectedServiceSlug(page);
      }
      setSelectedBlogPostId(null);
      if (page !== 'ai-tools') {
        setSelectedToolSlug(null);
      }
      setCurrentPage(targetPage);
    }

    const targetPath = pageToPath(
      targetPage, 
      targetPage === 'service-detail' ? targetSlug : targetPage === 'ai-tools' ? targetToolSlug || undefined : targetBlogPostId || undefined
    );
    if (typeof window !== 'undefined' && window.location.pathname !== targetPath) {
      window.history.pushState({}, '', targetPath);
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
      case 'admin':
      case 'admin-ai':
      case 'control-center':
        return <AdminAIPage onNavigate={handleNavigate} />;
      case 'website-design':
      case 'website-development':
        return <WebsiteDesignPage onNavigate={handleNavigate} />;
      case 'e-commerce-solutions':
      case 'ecommerce-solutions':
      case 'ecommerce':
      case 'e-commerce':
        return <EcommerceSolutionsPage onNavigate={handleNavigate} />;
      case 'android-app-development':
      case 'app-development':
      case 'mobile-app-development':
        return <AppDevelopmentPage onNavigate={handleNavigate} />;
      case 'web-portal-development':
      case 'web-portal':
      case 'b2b-portal-development':
        return <WebPortalPage onNavigate={handleNavigate} />;
      case 'digital-marketing':
      case 'marketing':
        return <DigitalMarketingPage onNavigate={handleNavigate} />;
      case 'seo-ranking':
      case 'seo':
        return <SEORankingPage onNavigate={handleNavigate} />;
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
        return <AIToolsPage initialToolSlug={selectedToolSlug || undefined} onNavigate={handleNavigate} />;
      case 'services':
        return <AllServicesPage onNavigate={handleNavigate} />;
      case 'pricing':
        return <PricingPage onNavigate={handleNavigate} />;
      case 'projects':
      case 'portfolio':
      case 'showcase':
        return <ProjectsPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage onNavigate={handleNavigate} />;
      case 'partner':
        return <PartnerPage onNavigate={handleNavigate} />;
      case 'faq':
        return <FAQPage onNavigate={handleNavigate} />;
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
    <div
      className={`min-h-screen bg-[#030712] font-sans text-slate-100 flex flex-col relative transition-colors duration-500 ${
        festiveMode === 'janmashtami'
          ? 'theme-janmashtami selection:bg-amber-400 selection:text-slate-950'
          : 'selection:bg-cyan-500 selection:text-slate-950'
      }`}
    >
      {/* Festive Krishna Janmashtami Atmosphere (Aura, Peacock & Golden Particles, Flower Petals) */}
      <JanmashtamiAtmosphere />

      {/* Advanced Futuristic Global Ambient Particles & Laser Scanner */}
      <FuturisticAtmosphere />

      {/* Sticky Glassmorphic Navbar with Cyan Laser Accent & Festive Ribbon */}
      <Navbar
        activePage={currentPage}
        onNavigate={handleNavigate}
        onOpenSearch={() => setIsSearchOpen(true)}
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

      {/* Floating Janmashtami Theme Switcher & Auspicious Greeting Badge */}
      <JanmashtamiFloatingBadge onNavigate={handleNavigate} />

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Mobile Sticky Bottom Navigation Bar */}
      <MobileBottomNav activePage={currentPage} onNavigate={handleNavigate} />

    </div>
  );
}

export function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
