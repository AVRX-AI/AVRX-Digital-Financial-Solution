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
  const getRouteState = () => {
    if (typeof window === 'undefined') return { page: 'home', serviceSlug: 'website-design', blogId: null as string | null, toolSlug: null as string | null };
    const path = window.location.pathname.replace(/\/$/, '') || '/';
    if (path.startsWith('/services/')) {
      const serviceSlug = decodeURIComponent(path.slice('/services/'.length)).trim().toLowerCase();
      return { page: 'service-detail', serviceSlug, blogId: null, toolSlug: null };
    }
    if (path === '/services') return { page: 'services', serviceSlug: 'website-design', blogId: null, toolSlug: null };
    if (path.startsWith('/blog/')) return { page: 'blog-post', serviceSlug: 'website-design', blogId: decodeURIComponent(path.slice('/blog/'.length)), toolSlug: null };
    if (path === '/blog') return { page: 'blog', serviceSlug: 'website-design', blogId: null, toolSlug: null };
    if (path.startsWith('/tools/')) return { page: 'ai-tools', serviceSlug: 'website-design', blogId: null, toolSlug: decodeURIComponent(path.slice('/tools/'.length)) };
    if (path === '/tools') return { page: 'ai-tools', serviceSlug: 'website-design', blogId: null, toolSlug: null };
    const staticRoutes: Record<string, string> = {
      '/': 'home', '/digital-solutions': 'digital-solutions', '/financial-solutions': 'financial-solutions',
      '/tax-solutions': 'tax-solutions', '/insurance-solutions': 'insurance-solutions', '/hosting-products': 'hosting-products',
      '/ai-tools': 'ai-tools', '/pricing': 'pricing', '/projects': 'projects', '/portfolio': 'projects', '/showcase': 'projects',
      '/contact': 'contact', '/partner': 'partner', '/faq': 'faq', '/about': 'about', '/privacy': 'privacy', '/terms': 'terms', '/disclaimer': 'disclaimer',
      '/website-design': 'website-design', '/website-development': 'website-design', '/e-commerce-solutions': 'e-commerce-solutions',
      '/ecommerce-solutions': 'ecommerce-solutions', '/ecommerce': 'ecommerce', '/e-commerce': 'e-commerce'
    };
    return { page: staticRoutes[path] || 'not-found', serviceSlug: 'website-design', blogId: null, toolSlug: null };
  };

  const initialRoute = getRouteState();
  const [currentPage, setCurrentPage] = useState<string>(initialRoute.page);
  const [selectedServiceSlug, setSelectedServiceSlug] = useState<string>(initialRoute.serviceSlug);
  const [selectedBlogPostId, setSelectedBlogPostId] = useState<string | null>(initialRoute.blogId);

  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [showLaunchScreen, setShowLaunchScreen] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem('avrx_launch_completed') !== 'true';
    } catch {
      return true;
    }
  });

  useEffect(() => {
    const syncRoute = () => {
      const route = getRouteState();
      setCurrentPage(route.page);
      setSelectedServiceSlug(route.serviceSlug);
      setSelectedBlogPostId(route.blogId);
    };
    window.addEventListener('popstate', syncRoute);
    return () => window.removeEventListener('popstate', syncRoute);
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
    let path = '/';
    if (page === 'service-detail' && slugOrPostId) {
      setCurrentPage('service-detail');
      const normalizedSlug = String(slugOrPostId).trim().toLowerCase();
      setSelectedServiceSlug(normalizedSlug);
      path = `/services/${encodeURIComponent(normalizedSlug)}`;
    } else if (page === 'blog-post' && slugOrPostId) {
      setSelectedBlogPostId(slugOrPostId);
      setCurrentPage('blog-post');
      path = `/blog/${encodeURIComponent(slugOrPostId)}`;
    } else {
      const paths: Record<string, string> = {
        home: '/', services: '/services', blog: '/blog', 'digital-solutions': '/digital-solutions',
        'financial-solutions': '/financial-solutions', 'tax-solutions': '/tax-solutions', 'insurance-solutions': '/insurance-solutions',
        'hosting-products': '/hosting-products', 'ai-tools': '/ai-tools', pricing: '/pricing', projects: '/projects', portfolio: '/projects',
        showcase: '/projects', contact: '/contact', partner: '/partner', faq: '/faq', about: '/about', privacy: '/privacy',
        terms: '/terms', disclaimer: '/disclaimer', 'website-design': '/services/website-design', 'website-development': '/services/website-design',
        'e-commerce-solutions': '/services/e-commerce-solutions', 'ecommerce-solutions': '/services/e-commerce-solutions', ecommerce: '/services/e-commerce-solutions', 'e-commerce': '/services/e-commerce-solutions'
      };
      path = paths[page] || '/';
      setSelectedBlogPostId(null);
      setCurrentPage(page === 'website-design' || page === 'website-development' ? 'website-design' : page);
    }
    if (typeof window !== 'undefined' && window.location.pathname !== path) {
      window.history.pushState({}, '', path);
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
        return <AIToolsPage initialToolSlug={initialRoute.toolSlug} />;
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
