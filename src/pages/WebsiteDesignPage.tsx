import React, { useState, useEffect, useRef } from 'react';
import { SEO } from '../components/common/SEO';
import { PartnersSlider } from '../components/common/PartnersSlider';
import { 
  Sparkles, 
  ArrowRight, 
  Check, 
  ChevronRight, 
  ChevronLeft, 
  ChevronDown, 
  Phone, 
  MessageCircle, 
  Send, 
  RefreshCw, 
  Laptop, 
  Smartphone, 
  Globe, 
  ShieldCheck, 
  Zap, 
  Search, 
  BarChart3, 
  Lock, 
  Code2, 
  ShoppingCart, 
  ShoppingBag,
  CreditCard,
  Truck,
  Boxes,
  Percent,
  Building2, 
  Store, 
  UtensilsCrossed, 
  Briefcase, 
  GraduationCap, 
  BadgePercent, 
  Layers, 
  SlidersHorizontal,
  Compass, 
  Eye, 
  Clock, 
  MousePointerClick, 
  CheckCircle2, 
  ExternalLink,
  HelpCircle,
  Cpu,
  Monitor,
  Flame,
  Palette
} from 'lucide-react';
import { submitLeadForm } from '../utils/formSubmit';
import { SubmissionFeedbackModal } from '../components/common/SubmissionFeedbackModal';

interface WebsiteDesignPageProps {
  onNavigate: (page: string, slug?: string) => void;
}

// 10 Distinct, Realistic Website Design Showcase Mockups
interface ShowcaseSlide {
  id: string;
  category: string;
  badge: string;
  title: string;
  tagline: string;
  previewUrl: string;
  accentColor: string;
  bgGradient: string;
  metrics: { label: string; value: string }[];
  keyFeatures: string[];
}

const SHOWCASE_SLIDES: ShowcaseSlide[] = [
  {
    id: 'business-corporate',
    category: 'Business & Corporate',
    badge: 'Enterprise Standard',
    title: 'Apex Global Financial Advisors',
    tagline: 'Multi-tiered portfolio management, investor relation portals, and executive advisory interface.',
    previewUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#00F0FF',
    bgGradient: 'from-cyan-950/70 via-slate-900 to-slate-950',
    metrics: [
      { label: 'Speed Score', value: '99/100' },
      { label: 'Avg TTFB', value: '140ms' },
      { label: 'Conversion Lift', value: '+38%' }
    ],
    keyFeatures: ['Interactive Wealth Calculators', 'Live Market Ticker', 'Lead Generation Funnel']
  },
  {
    id: 'ecommerce-fashion',
    category: 'E-Commerce Storefront',
    badge: 'Direct-to-Consumer',
    title: 'Aura Luxe Couture & Living',
    tagline: 'High-conversion lifestyle catalog, sub-second search, Razorpay/Stripe checkout, and inventory sync.',
    previewUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#F59E0B',
    bgGradient: 'from-amber-950/70 via-slate-900 to-slate-950',
    metrics: [
      { label: 'Checkout Time', value: '18s' },
      { label: 'Cart Conversion', value: '4.8%' },
      { label: 'Mobile Sales', value: '78%' }
    ],
    keyFeatures: ['Instant 1-Click Buy', 'Smart Size Recommender', 'Live Order Tracking']
  },
  {
    id: 'restaurant-hospitality',
    category: 'Restaurant & Hospitality',
    badge: 'F&B Experience',
    title: 'Saffron & Sage Fine Dining',
    tagline: 'Interactive culinary menu, online table reservations, direct WhatsApp order routing, and chef stories.',
    previewUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#EF4444',
    bgGradient: 'from-rose-950/70 via-slate-900 to-slate-950',
    metrics: [
      { label: 'Table Bookings', value: '+62%' },
      { label: 'Mobile Optimized', value: '100%' },
      { label: 'Menu Dwell Time', value: '3.4m' }
    ],
    keyFeatures: ['Digital QR & Web Menu', 'Table Booking Engine', 'Google Maps Geo-Location']
  },
  {
    id: 'real-estate-luxury',
    category: 'Real Estate & Properties',
    badge: 'High-Ticket Sales',
    title: 'Skyline Haven Luxury Residences',
    tagline: 'Immersive floorplan viewers, neighborhood amenity maps, mortgage calculators, and VIP site tour bookings.',
    previewUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#10B981',
    bgGradient: 'from-emerald-950/70 via-slate-900 to-slate-950',
    metrics: [
      { label: 'Lead Inquiries', value: '3.2x' },
      { label: 'Virtual Tours', value: '12K+' },
      { label: 'Form Completion', value: '82%' }
    ],
    keyFeatures: ['3D Floorplan Viewer', 'Dynamic EMI Calculator', 'WhatsApp VIP Concierge']
  },
  {
    id: 'creative-portfolio',
    category: 'Creative & Agency Portfolio',
    badge: 'Award Winning',
    title: 'Vanguard Visual Architecture Studio',
    tagline: 'Bespoke case study layouts, WebGL shader interactions, dark-mode styling, and client showcase grids.',
    previewUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#A855F7',
    bgGradient: 'from-purple-950/70 via-slate-900 to-slate-950',
    metrics: [
      { label: 'Design Score', value: '9.8/10' },
      { label: 'Page Speed', value: '0.4s' },
      { label: 'Inbound Inquiries', value: '+45%' }
    ],
    keyFeatures: ['Smooth Micro-Interactions', 'Dynamic Project Showcase', 'Interactive Pitch Kit']
  },
  {
    id: 'saas-startup',
    category: 'Tech Startup & SaaS',
    badge: 'Product-Led Growth',
    title: 'Synthetix AI Intelligence Cloud',
    tagline: 'Product feature walkthroughs, tier-based pricing toggles, interactive API docs, and self-serve onboarding.',
    previewUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#3B82F6',
    bgGradient: 'from-blue-950/70 via-slate-900 to-slate-950',
    metrics: [
      { label: 'Free Trial Signups', value: '+54%' },
      { label: 'Bounce Rate', value: '21%' },
      { label: 'Lighthouse', value: '100' }
    ],
    keyFeatures: ['Monthly/Annual Pricing Toggle', 'Live Demo Playground', 'SOC-2 Compliance Badges']
  },
  {
    id: 'edtech-academy',
    category: 'Education & Academy',
    badge: 'Learning Portal',
    title: 'Quantix Next-Gen Coding Institute',
    tagline: 'Curriculum syllabus explorer, student testimonial reels, live webinar registrations, and payment gateways.',
    previewUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#EC4899',
    bgGradient: 'from-pink-950/70 via-slate-900 to-slate-950',
    metrics: [
      { label: 'Course Enrollment', value: '+70%' },
      { label: 'Mobile Attendance', value: '88%' },
      { label: 'Syllabus Downloads', value: '5.6K' }
    ],
    keyFeatures: ['Course Curriculum Filter', 'Scholarship Test Registration', 'Direct UPI Checkout']
  },
  {
    id: 'healthcare-clinic',
    category: 'Healthcare & Clinic',
    badge: 'Patient Trust',
    title: 'CareWell Superspeciality Medical',
    tagline: 'Doctor profiles, online appointment scheduler, health blog library, and emergency ambulance hotline.',
    previewUrl: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#06B6D4',
    bgGradient: 'from-cyan-950/70 via-slate-900 to-slate-950',
    metrics: [
      { label: 'Appointments Booked', value: '2.8x' },
      { label: 'Patient Retention', value: '94%' },
      { label: 'Emergency Response', value: '<2m' }
    ],
    keyFeatures: ['Instant Doctor Booking', 'Health Checkup Packages', 'Cashless TPA Assistance']
  }
];

export const WebsiteDesignPage: React.FC<WebsiteDesignPageProps> = ({ onNavigate }) => {
  // Slider state
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [beforeAfterPos, setBeforeAfterPos] = useState(50);
  const [isDraggingSlider, setIsDraggingSlider] = useState(false);
  const [activeFeatureKey, setActiveFeatureKey] = useState<string>('responsive');

  // Consultation Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>('Business Website');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    websiteType: 'Business Website',
    requirements: '',
    website_hp: ''
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [feedback, setFeedback] = useState<{
    isOpen: boolean;
    type: 'success' | 'error';
    leadId?: string;
    message?: string;
  }>({
    isOpen: false,
    type: 'success'
  });

  // Autoplay Slider Timer
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveSlideIndex((prev) => (prev + 1) % SHOWCASE_SLIDES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrevSlide = () => {
    setActiveSlideIndex((prev) => (prev === 0 ? SHOWCASE_SLIDES.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setActiveSlideIndex((prev) => (prev + 1) % SHOWCASE_SLIDES.length);
  };

  // Touch Swipe Handlers
  const touchStartX = useRef<number | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) handleNextSlide();
    else if (diff < -50) handlePrevSlide();
    touchStartX.current = null;
  };

  const handleOpenFormWithPlan = (planName: string) => {
    setSelectedPlan(planName);
    setFormData(prev => ({ ...prev, websiteType: planName }));
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    setErrorMessage('');
    setLoading(true);

    const result = await submitLeadForm({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      location: formData.city,
      serviceCategory: `Website Design — ${formData.websiteType}`,
      subject: `New Website Inquery: ${formData.websiteType} — ${formData.name}`,
      message: formData.requirements || `Client requested quote for ${formData.websiteType}.`,
      sourcePage: 'Website Design Master Service Page',
      formType: 'Website Design Lead Form',
      website_hp: formData.website_hp,
      additionalFields: {
        'Selected Website Tier': formData.websiteType
      }
    });

    setLoading(false);

    if (result.success) {
      setIsModalOpen(false);
      setFeedback({
        isOpen: true,
        type: 'success',
        leadId: result.leadId,
        message: result.message
      });
      setFormData({
        name: '',
        phone: '',
        email: '',
        city: '',
        websiteType: 'Business Website',
        requirements: '',
        website_hp: ''
      });
    } else {
      setErrorMessage(result.message || 'Unable to submit your request right now.');
      setFeedback({
        isOpen: true,
        type: 'error',
        message: result.message
      });
    }
  };

  // 9 Specific Website Categories
  const websiteCategories = [
    {
      id: 'static-onepage-website',
      title: 'Static Onepage website',
      suitableFor: 'Local shops, micro-enterprises, consultants, service providers, freelancers & quick promotions',
      priceStarting: '₹4,999',
      priceDisclaimer: 'Fixed Special Package — Complete single-page layout with domain & SSL setup support.',
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      badge: 'Best Value • ₹4,999',
      features: [
        'Single-Page Smooth Fluid Scroll Architecture',
        'Hero Banner, About Us, Services, Highlights & Gallery',
        '100% Mobile, Tablet & Desktop Ergonomic UI',
        'Direct WhatsApp Floating Button & Call CTA',
        'Lead Capture Form with Instant Email Alerts',
        'Google Maps Location & Social Media Links',
        'Sub-Second Ultra Fast Page Speed (<0.5s)',
        'Basic On-Page SEO & Meta Tags for Google',
        'Free SSL (HTTPS) Security Setup',
        'Fast 48–72 Hours Turnaround Time'
      ],
      ctaText: 'Get Static Onepage Website'
    },
    {
      id: 'business-website',
      title: 'Business Website',
      suitableFor: 'Local businesses, retail shops, consultants, clinics & professional services',
      priceStarting: '₹4,999+',
      priceDisclaimer: 'Starting from — final pricing depends on pages & customization.',
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      badge: 'Most Popular for MSMEs',
      features: [
        '3–5 Custom Designed Pages',
        '100% Mobile & Tablet Responsive UI',
        'Modern High-Converting Layout',
        'Lead Capture Contact Form',
        'Direct WhatsApp Floating Button',
        'Google Maps Location Integration',
        'Social Media Profile Linking',
        'Basic On-Page SEO Architecture',
        'Fast SSD Cloud Speed Optimization',
        'SSL Security & HTTPS Setup'
      ],
      ctaText: 'Get Business Website'
    },
    {
      id: 'corporate-website',
      title: 'Corporate Website',
      suitableFor: 'Growing companies, consulting firms, manufacturing enterprises & B2B brands',
      priceStarting: '₹9,999+',
      priceDisclaimer: 'Starting from — final pricing depends on architecture & requirements.',
      imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      badge: 'Brand Authority',
      features: [
        '5–10 Premium Custom Pages',
        'Bespoke Enterprise UI/UX Design',
        'Dedicated Detailed Service Pages',
        'Leadership & Team Showcase',
        'Multi-Department Inquiry Forms',
        'Interactive Case Studies / Projects',
        'Google Analytics & Tag Manager Setup',
        'Advanced Technical SEO & Schema',
        'Sub-Second Performance Caching',
        'CMS Admin for Easy Text Editing'
      ],
      ctaText: 'Build Corporate Website'
    },
    {
      id: 'e-commerce-solutions',
      title: 'E-Commerce Solution',
      suitableFor: 'Retail shops, D2C brands, fashion boutiques, grocery delivery, electronics, handmade products & wholesale B2B/B2C stores',
      priceStarting: '₹14,999+',
      priceDisclaimer: 'Starting from — includes full product catalog, online payment gateway (UPI/Cards), order & inventory management.',
      imageUrl: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1200&q=80',
      badge: 'High-Converting Online Store',
      features: [
        'Dynamic Product Catalog & Category Taxonomy',
        'High-Converting Product Detail Pages & Image Zoom',
        'Multi-Gateway Payment Integration (Razorpay, UPI QR, Cards & NetBanking)',
        'Frictionless 1-Page Shopping Cart & Instant Checkout',
        'Automated Order Tracking, SMS/WhatsApp Alerts & GST Invoices',
        'Customer Dashboard & Reorder History Portal',
        'Coupon Codes, Tiered Discounts & Referral Engine',
        'Automated Abandoned Cart Recovery Sequences',
        'Real-Time Inventory Management & Low-Stock Alerts',
        'Master Admin Dashboard with Real-Time Revenue Analytics'
      ],
      ctaText: 'Get E-Commerce Solution'
    },
    {
      id: 'landing-page',
      title: 'High-Converting Landing Page',
      suitableFor: 'Google/Meta ad campaigns, product launches, event promotions & high-volume lead gen',
      priceStarting: '₹2,999+',
      priceDisclaimer: 'Starting from — final pricing depends on copy length & integrations.',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      badge: 'Fast Lead Gen',
      features: [
        '1-Page Ultra-Focused Conversion Layout',
        'High-Impact Display Hero Section',
        'Sticky Call-to-Action Buttons',
        'Instant Lead Inquiry Form',
        'Direct 1-Click WhatsApp Chat Button',
        'Speed Optimized (< 0.5s Load Time)',
        'Facebook Pixel & Google Ads Tag Ready',
        'Customer Review & Social Proof Showcase',
        'FAQ Accordion for Objection Handling',
        '100% Mobile First Ergonomics'
      ],
      ctaText: 'Create Landing Page'
    },
    {
      id: 'portfolio-website',
      title: 'Portfolio / Personal Website',
      suitableFor: 'Designers, developers, photographers, architects, models, consultants & creators',
      priceStarting: '₹4,999+',
      priceDisclaimer: 'Starting from — final pricing depends on gallery depth & media assets.',
      imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
      badge: 'Creative Identity',
      features: [
        'Personal Branding & Bio Story',
        'Visual Work & Case Study Gallery',
        'Interactive Lightbox Image / Video Popups',
        'Services & Hourly/Project Pricing Table',
        'Client Testimonials & Press Mentions',
        'Downloadable Resume / CV Kit',
        'Direct Booking / Contact Calendar',
        'Social Media Profile Integration',
        'Clean Typographic Aesthetic',
        'Custom Domain Configuration'
      ],
      ctaText: 'Build My Portfolio'
    },
    {
      id: 'restaurant-hotel-website',
      title: 'Restaurant & Hospitality Website',
      suitableFor: 'Restaurants, bistros, cafes, cloud kitchens, luxury resorts & hotels',
      priceStarting: '₹7,999+',
      priceDisclaimer: 'Starting from — final pricing depends on online ordering & room booking engines.',
      imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
      badge: 'Appetizing UI',
      features: [
        'Interactive Food & Beverage Menu',
        'Appetizing Dish Gallery & Food Highlights',
        'Table Reservation Booking Form',
        'Direct WhatsApp Order Routing',
        'Google Maps Store Locator & Directions',
        'Operating Hours & Special Offers Banner',
        'Zomato / Swiggy / Google Review Badges',
        'Mobile-First Layout for On-the-Go Diners',
        'Event / Party Hall Booking Inquiries',
        'Fast Image Loading with CDN'
      ],
      ctaText: 'Create Hospitality Website'
    },
    {
      id: 'real-estate-website',
      title: 'Real Estate Website',
      suitableFor: 'Realtors, property developers, real estate agencies & property brokers',
      priceStarting: '₹12,999+',
      priceDisclaimer: 'Starting from — final pricing depends on listing volume & 3D virtual tour integrations.',
      imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      badge: 'Property Engine',
      features: [
        'Residential & Commercial Property Listings',
        'Property Detail View with High-Res Photos',
        'Advanced Search by Location, Price & BHK',
        'Interactive Floorplan & Masterplan Views',
        'Built-in Loan EMI Calculator',
        'Schedule Site Visit Inquiry Form',
        'Direct Agent WhatsApp Quick Connect',
        'Neighborhood Distance & Map Amenity Pins',
        'Admin Portal to Add / Edit Property Units',
        'Lead Capture Popups for Premium Projects'
      ],
      ctaText: 'Build Real Estate Website'
    },
    {
      id: 'custom-web-portal',
      title: 'Custom Web Application / Portal',
      suitableFor: 'Custom business portals, SaaS platforms, internal staff management & multi-tenant tools',
      priceStarting: '₹24,999+',
      priceDisclaimer: 'Custom Quote — estimated based on database architecture, roles & API complexity.',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      badge: 'Full-Stack Architecture',
      features: [
        'Bespoke Full-Stack Web Architecture',
        'Secure User Authentication & RBAC Roles',
        'Interactive Data Analytics Dashboard',
        'Custom Relational Database Architecture',
        'REST / GraphQL API Endpoints & Webhooks',
        'Third-Party Service & Payment Integrations',
        'Comprehensive Master Admin Control Panel',
        'Automated Email / WhatsApp Notifications',
        'Custom Business Workflows & PDF Invoicing',
        'Enterprise Cloud Deployment & Auto-Scaling'
      ],
      ctaText: 'Discuss Your Project'
    }
  ];

  // Pricing Comparison Table Columns
  const comparisonPlans = [
    {
      name: 'Starter',
      price: '₹4,999+',
      popular: false,
      desc: 'Ideal for local businesses & personal portfolios needing a clean digital presence.',
      pages: '3–5 Pages',
      responsive: true,
      contactForm: true,
      whatsapp: true,
      seoSetup: 'Basic On-Page',
      analytics: false,
      ecommerce: false,
      paymentGateway: false,
      adminPanel: 'Basic Editor',
      customIntegrations: false,
      support: '30 Days Free Support'
    },
    {
      name: 'Business',
      price: '₹9,999+',
      popular: true,
      desc: 'Most chosen by service firms, clinics, agencies & corporate companies.',
      pages: '5–10 Pages',
      responsive: true,
      contactForm: true,
      whatsapp: true,
      seoSetup: 'Advanced Technical SEO',
      analytics: true,
      ecommerce: false,
      paymentGateway: false,
      adminPanel: 'Full CMS Dashboard',
      customIntegrations: 'Google Maps / Leads',
      support: '60 Days Priority Support'
    },
    {
      name: 'Professional',
      price: '₹14,999+',
      popular: false,
      desc: 'Complete solution for e-commerce, real estate, and product businesses.',
      pages: 'Up to 20 Pages',
      responsive: true,
      contactForm: true,
      whatsapp: true,
      seoSetup: 'Full Search Optimization',
      analytics: true,
      ecommerce: true,
      paymentGateway: true,
      adminPanel: 'E-commerce & Orders',
      customIntegrations: 'Payment + Shipping + SMS',
      support: '90 Days Dedicated Support'
    },
    {
      name: 'Custom Portal',
      price: 'Custom Quote',
      popular: false,
      desc: 'Tailor-made web applications, multi-role SaaS, and scalable enterprise portals.',
      pages: 'Unlimited / Dynamic',
      responsive: true,
      contactForm: true,
      whatsapp: true,
      seoSetup: 'Enterprise SEO Architecture',
      analytics: true,
      ecommerce: 'Custom Logic / Subscriptions',
      paymentGateway: true,
      adminPanel: 'Super-Admin RBAC Portal',
      customIntegrations: 'Custom APIs / Webhooks / AI',
      support: 'Dedicated SLA & Maintenance'
    }
  ];

  // What We Include 8 Cards
  const whatWeInclude = [
    {
      icon: Smartphone,
      title: '100% Responsive Design',
      desc: 'Pixel-perfect rendering on iPhones, Androids, iPads, laptops, and ultra-wide desktop monitors.'
    },
    {
      icon: Palette,
      title: 'Modern UI/UX Craftsmanship',
      desc: 'Clean layouts, thoughtful whitespace, high-contrast typography, and intuitive customer navigation.'
    },
    {
      icon: Search,
      title: 'SEO Ready Architecture',
      desc: 'Semantic HTML5 structure, schema metadata, open-graph tags, and clean URLs for Google indexing.'
    },
    {
      icon: Zap,
      title: 'Sub-Second Performance',
      desc: 'Optimized image assets, lightweight JavaScript bundles, and high-speed NVMe CDN caching.'
    },
    {
      icon: MousePointerClick,
      title: 'Lead Generation Engines',
      desc: 'Strategic CTA placements, high-converting inquiry forms, and sticky call/chat triggers.'
    },
    {
      icon: MessageCircle,
      title: 'Direct WhatsApp Integration',
      desc: 'Allow visitors to initiate instant conversations with your team with pre-filled inquiry messages.'
    },
    {
      icon: BarChart3,
      title: 'Traffic & Conversion Analytics',
      desc: 'Track visitor traffic, page views, click hotspots, and form completions with Google Analytics.'
    },
    {
      icon: Lock,
      title: 'Bank-Grade Security & SSL',
      desc: 'Free auto-renewing SSL certificate, HTTPS enforcement, sanitized inputs, and DDoS protection.'
    }
  ];

  // 7-Step Animated Process
  const processSteps = [
    {
      num: '01',
      title: 'Discovery',
      desc: 'We analyze your business model, target audience, competitors, brand aesthetic, and conversion goals.'
    },
    {
      num: '02',
      title: 'Planning & Sitemap',
      desc: 'We draft a clear sitemap, wireframe wirepaths, content structure, and technical requirements document.'
    },
    {
      num: '03',
      title: 'UI/UX Design',
      desc: 'We craft high-fidelity visual concepts, color schemes, typography pairings, and interactive components.'
    },
    {
      num: '04',
      title: 'Development',
      desc: 'Our engineers build your website using modern, clean code (TypeScript / React / Tailwind) with modular scalability.'
    },
    {
      num: '05',
      title: 'Rigorous Testing',
      desc: 'We test across 10+ mobile and desktop screen sizes, verify form submissions, links, SSL, and speed score.'
    },
    {
      num: '06',
      title: 'Launch & Deployment',
      desc: 'We configure your custom domain, point DNS records, activate SSL, and push the live website to the cloud.'
    },
    {
      num: '07',
      title: 'Support & Handover',
      desc: 'We provide video training, admin credentials, source assets, and ongoing post-launch technical assistance.'
    }
  ];

  // Why Choose AVRX (6 Cards)
  const whyChooseUs = [
    {
      icon: Flame,
      title: 'Business-Focused Design',
      desc: 'We do not build generic art pieces; we craft purposeful digital assets engineered to generate calls, leads, and revenue.'
    },
    {
      icon: Code2,
      title: 'Cutting-Edge Technology',
      desc: 'Zero bloated old templates. Built with modern TypeScript, clean React, and ultra-fast responsive frameworks.'
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Ergonomics',
      desc: 'Over 75% of Indian web traffic comes from mobile devices. We ensure flawless thumb-friendly mobile navigation.'
    },
    {
      icon: MousePointerClick,
      title: 'Conversion-Optimized Layouts',
      desc: 'Strategic placement of phone numbers, WhatsApp triggers, trust badges, and inquiry forms for maximum lead capture.'
    },
    {
      icon: ShieldCheck,
      title: '100% Transparent Process',
      desc: 'Fixed upfront quotes, no hidden renewal traps, no surprise hosting markups, and complete ownership of your code.'
    },
    {
      icon: Cpu,
      title: 'Long-Term Scalability',
      desc: 'Easily add e-commerce capabilities, payment gateways, blog modules, or CRM integrations as your company expands.'
    }
  ];

  // Interactive Mockup Hotspots & Architecture Anatomy
  const interactiveFeatures: Record<string, { label: string; title: string; desc: string; icon: any; position: string; badge: string; highlights: string[] }> = {
    responsive: {
      label: 'Responsive UI',
      title: 'Fluid Adaptive Viewports & Mobile UX',
      desc: 'Automatically reflows typography, touch targets, and visual hierarchy from 360px smartphones to 4K ultra-wide monitors with sub-pixel perfection.',
      icon: Smartphone,
      position: 'top-8 left-8',
      badge: 'Core UI Layer',
      highlights: ['Thumb-friendly bottom navigation', 'Adaptive fluid font scaling', 'Zero horizontal scroll on any screen']
    },
    speed: {
      label: 'Ultra-Fast Speed',
      title: 'Sub-Second Page Load (<0.4s)',
      desc: 'Lightweight modern bundles, WebP/AVIF image formats, pre-fetched route chunks, and NVMe CDN edge caching guaranteeing 98+ Google Lighthouse scores.',
      icon: Zap,
      position: 'top-1/2 -left-4',
      badge: 'Performance Engine',
      highlights: ['<0.4s First Contentful Paint (FCP)', '98+ Google Core Web Vitals Pass', 'Brotli compression + Global CDN edge']
    },
    seo: {
      label: 'SEO & Schema',
      title: 'Search Engine Optimization & Rich Snippets',
      desc: 'Structured JSON-LD schema metadata, clean canonical URLs, OpenGraph social cards, and automated sitemap.xml to dominate Google organic rankings.',
      icon: Search,
      position: 'top-8 right-8',
      badge: 'Google Rank Engine',
      highlights: ['Local business schema JSON-LD', 'Dynamic OpenGraph & Twitter cards', 'Google Search Console & GA4 pre-mapped']
    },
    whatsapp: {
      label: 'WhatsApp CTA',
      title: 'Instant 1-Click WhatsApp Sales Trigger',
      desc: 'Floating animated chat widget routing prospective customers straight into your sales team’s WhatsApp inbox with pre-filled product/service inquiry text.',
      icon: MessageCircle,
      position: 'bottom-16 right-8',
      badge: 'Conversion Trigger',
      highlights: ['Pre-filled smart message prompts', 'Zero friction lead initiation', '24/7 sticky bottom trigger on mobile']
    },
    forms: {
      label: 'Lead Routing Forms',
      title: 'Spam-Protected Real-Time Lead Engine',
      desc: 'Instant email delivery, SMS notifications, Telegram/WhatsApp webhooks, client validation checks, and honeypot spam bot prevention.',
      icon: Send,
      position: 'bottom-16 left-8',
      badge: 'Automation API',
      highlights: ['Instant email & SMS team notifications', 'Google Sheets & CRM webhook sync', 'Honeypot anti-spam defense']
    },
    security: {
      label: 'SSL & Security Shield',
      title: 'Bank-Grade 256-Bit SSL & HTTPS Shield',
      desc: 'Auto-renewing 256-bit SSL encryption, sanitized form endpoints, Content Security Policies (CSP), and secure server headers protecting client data.',
      icon: Lock,
      position: 'top-1/2 -right-4',
      badge: 'Enterprise Trust',
      highlights: ['256-bit TLS auto-renewing encryption', 'OWASP Top 10 vulnerability mitigation', 'Sanitized inputs & XSS prevention']
    },
    admin: {
      label: 'CMS Admin Hub',
      title: '1-Click Self-Editing Admin Dashboard',
      desc: 'Intuitive visual content management interface letting you easily update text, upload photos, publish announcements, and manage leads without touching code.',
      icon: Palette,
      position: 'top-1/4 left-1/2',
      badge: 'Self Management',
      highlights: ['Zero-code visual text & image editor', 'Real-time preview before publishing', 'Role-based editor access controls']
    },
    analytics: {
      label: 'Analytics & Heatmaps',
      title: 'Real-Time Visitor Traffic & ROI Analytics',
      desc: 'Built-in Google Analytics 4 tracking, conversion event tracking, user journey heatmaps, and weekly automated traffic summary reports.',
      icon: BarChart3,
      position: 'bottom-1/4 right-1/2',
      badge: 'Business Intelligence',
      highlights: ['Full GA4 conversion tracking', 'Click & scroll depth analytics', 'UTM campaign tracking integration']
    }
  };

  // FAQs
  const webDesignFaqs = [
    {
      q: 'How much does a professional website cost with AVRX?',
      a: 'Our website packages start from ₹2,999 for high-converting landing pages, ₹4,999 for standard 3-5 page business websites, and ₹14,999 for full e-commerce platforms. Final pricing depends on your exact page count, custom features, payment gateway needs, and content volume.'
    },
    {
      q: 'How long does website design and development take?',
      a: 'A standard Business Website or Landing Page is typically completed and launched within 3 to 7 working days. Comprehensive E-Commerce stores or Custom Web Portals usually take 10 to 20 working days depending on catalog size and integrations.'
    },
    {
      q: 'Can you redesign our existing outdated website?',
      a: 'Yes, absolutely. We can overhaul your existing website with a modern, high-speed, mobile-responsive layout while preserving your current domain name, SEO rankings, and existing URL structures.'
    },
    {
      q: 'Will my website work smoothly on all mobile phones and tablets?',
      a: 'Yes, 100%. Every single website we build is tested rigorously on iOS, Android, tablets, laptops, and wide desktop screens to ensure flawless responsiveness and quick touch navigation.'
    },
    {
      q: 'Can I add a floating WhatsApp chat button to the website?',
      a: 'Yes. We include a direct 1-click WhatsApp chat button configured with pre-filled inquiry text on every website package at zero additional charge.'
    },
    {
      q: 'Can you integrate online payment gateways like Razorpay, Cashfree, or UPI?',
      a: 'Yes. We integrate verified Indian and international payment gateways (Razorpay, Cashfree, PhonePe, Paytm, Stripe, and direct UPI QR codes) for instant customer checkout.'
    },
    {
      q: 'Is basic SEO included with the website development?',
      a: 'Yes. All websites include foundational on-page SEO: title tags, meta descriptions, image ALT text, header hierarchy (H1-H3), OpenGraph social preview tags, and sitemap generation for Google search indexing.'
    },
    {
      q: 'Can I update photos and text on the website later by myself?',
      a: 'Yes. We provide an easy-to-use CMS admin panel or structured editor so you or your staff can easily update text, add new photos, publish blogs, and manage product inventory without writing code.'
    },
    {
      q: 'Do you provide domain name registration and high-speed cloud hosting?',
      a: 'Yes. AVRX offers end-to-end services including domain registration (.in, .com, .org), ultra-fast NVMe cloud hosting, professional business email addresses (e.g. contact@yourbrand.com), and free SSL certificates.'
    },
    {
      q: 'Can you build custom web applications, customer portals, or SaaS platforms?',
      a: 'Yes. Our senior software engineering team builds complex full-stack web applications, customer management portals, booking engines, and SaaS tools using modern TypeScript, React, Node.js, and cloud databases.'
    }
  ];

  const currentSlide = SHOWCASE_SLIDES[activeSlideIndex];

  return (
    <div className="min-h-screen bg-[#050811] text-white pt-24 pb-20 selection:bg-cyan-500 selection:text-slate-950">
      <SEO
        title="Website Design & Development Services | Fast, Modern & Responsive Websites | AVRX"
        description="We design fast, modern, responsive and conversion-focused websites built around your brand, business goals and customers. Packages from ₹2,999+. Business, E-Commerce & Custom Web Apps."
      />

      {/* Main Container - Stretched Widescreen Layout */}
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="pt-4 pb-6 flex items-center gap-2 text-xs text-slate-400">
          <button 
            onClick={() => onNavigate('home')}
            className="hover:text-cyan-400 transition-colors"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <button 
            onClick={() => onNavigate('digital-solutions')}
            className="hover:text-cyan-400 transition-colors"
          >
            Digital Solutions
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-cyan-300 font-semibold">Website Design & Development</span>
        </nav>

        {/* 1. HERO SECTION — WEBSITE DESIGN SHOWCASE */}
        <section className="relative my-8 lg:my-12">
          
          {/* Background Ambient Glows */}
          <div className="absolute -top-10 left-1/4 w-[600px] h-[350px] bg-cyan-500/[0.08] blur-[150px] pointer-events-none" />
          <div className="absolute top-20 right-1/4 w-[500px] h-[300px] bg-blue-600/[0.08] blur-[150px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center">
            
            {/* Left Side Copy & CTAs */}
            <div className="lg:col-span-5 space-y-6 text-left">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(0,240,255,0.15)]">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                <span>AVRX DIGITAL SOLUTIONS</span>
              </div>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black tracking-tight text-white leading-[1.1]">
                Websites That Make Your Business <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500">Stand Out.</span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
                We design fast, modern, responsive and conversion-focused websites built around your brand, business goals and customers.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => handleOpenFormWithPlan('Custom Website Inquiry')}
                  className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 text-slate-950 font-black text-sm shadow-[0_0_30px_rgba(0,240,255,0.4)] hover:scale-105 transition flex items-center gap-2 cursor-pointer"
                >
                  <span>Start Your Website</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="#pricing-section"
                  className="px-7 py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-white font-bold text-xs sm:text-sm transition flex items-center gap-2"
                >
                  <span>View Website Packages</span>
                  <ChevronDown className="w-3.5 h-3.5 text-cyan-400" />
                </a>
              </div>

              {/* Quick Trust Highlights */}
              <div className="pt-4 border-t border-slate-800/80 grid grid-cols-3 gap-3 text-left">
                <div className="space-y-0.5">
                  <div className="text-lg font-black text-cyan-400 font-mono">100%</div>
                  <div className="text-[11px] text-slate-400 font-medium">Mobile Responsive</div>
                </div>
                <div className="space-y-0.5">
                  <div className="text-lg font-black text-emerald-400 font-mono">₹2,999+</div>
                  <div className="text-[11px] text-slate-400 font-medium">Starting Package</div>
                </div>
                <div className="space-y-0.5">
                  <div className="text-lg font-black text-amber-400 font-mono">3-7 Days</div>
                  <div className="text-[11px] text-slate-400 font-medium">Fast Turnaround</div>
                </div>
              </div>

            </div>

            {/* Right Side: MULTI-DESIGN WEBSITE SLIDER in Realistic Laptop / Browser Chrome */}
            <div 
              className="lg:col-span-7 relative"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              
              {/* Decorative Glow Ring */}
              <div 
                className="absolute -inset-1.5 rounded-[32px] opacity-40 blur-xl transition-all duration-700"
                style={{ background: `radial-gradient(circle, ${currentSlide.accentColor} 0%, transparent 70%)` }}
              />

              {/* Laptop / Browser Container Frame */}
              <div className="relative rounded-3xl bg-slate-950 border border-slate-800 shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden">
                
                {/* Browser Top Window Bar */}
                <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                  </div>

                  {/* Mock URL Bar */}
                  <div className="px-4 py-1 rounded-lg bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-400 flex items-center gap-2 max-w-[280px] sm:max-w-[340px] truncate">
                    <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span className="truncate">https://avrx.in/showcase/{currentSlide.id}</span>
                  </div>

                  {/* Slide Category Badge */}
                  <div className="px-2.5 py-0.5 rounded-full bg-slate-800 text-[10px] font-mono text-cyan-300 border border-slate-700">
                    {currentSlide.category}
                  </div>
                </div>

                {/* Main Website Showcase Preview Image with Overlay Card */}
                <div className="relative h-[340px] sm:h-[420px] w-full overflow-hidden group">
                  <img
                    src={currentSlide.previewUrl}
                    alt={currentSlide.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                  {/* Floating Interactive Project Card */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 sm:p-5 rounded-2xl bg-slate-950/90 backdrop-blur-xl border border-slate-800/90 shadow-2xl space-y-3">
                    
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold font-mono uppercase bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                        {currentSlide.badge}
                      </span>

                      <div className="flex items-center gap-1.5 text-xs text-slate-400">
                        <span className="font-bold text-white font-mono">{activeSlideIndex + 1}</span>
                        <span>/</span>
                        <span>{SHOWCASE_SLIDES.length}</span>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-white">{currentSlide.title}</h3>
                      <p className="text-xs text-slate-300 line-clamp-1 mt-1">{currentSlide.tagline}</p>
                    </div>

                    {/* Slide Features & Metric Chips */}
                    <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800">
                      {currentSlide.metrics.map((m, idx) => (
                        <div key={idx} className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[11px]">
                          <span className="text-slate-400">{m.label}: </span>
                          <span className="font-bold text-cyan-300 font-mono">{m.value}</span>
                        </div>
                      ))}
                    </div>

                  </div>

                </div>

                {/* Slider Controls Bar */}
                <div className="px-4 py-3 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    {SHOWCASE_SLIDES.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveSlideIndex(idx)}
                        className={`h-1.5 rounded-full transition-all ${
                          activeSlideIndex === idx ? 'w-6 bg-cyan-400' : 'w-2 bg-slate-700 hover:bg-slate-500'
                        }`}
                        aria-label={`Slide ${idx + 1}`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePrevSlide}
                      className="p-2 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition"
                      aria-label="Previous Design"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleNextSlide}
                      className="p-2 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition"
                      aria-label="Next Design"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* 2. HERO TRUST STRIP */}
        <section className="my-10">
          <div className="rounded-2xl bg-gradient-to-r from-slate-900/90 via-[#0a1226] to-slate-900/90 border border-cyan-500/20 p-4 sm:p-5 shadow-lg">
            <div className="flex flex-wrap items-center justify-around gap-4 text-xs sm:text-sm font-bold text-slate-200">
              
              <div className="flex items-center gap-2 text-cyan-300">
                <Laptop className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Modern Aesthetics</span>
              </div>

              <div className="w-1 h-1 rounded-full bg-slate-700 hidden sm:block" />

              <div className="flex items-center gap-2 text-emerald-300">
                <Smartphone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Responsive</span>
              </div>

              <div className="w-1 h-1 rounded-full bg-slate-700 hidden sm:block" />

              <div className="flex items-center gap-2 text-amber-300">
                <Search className="w-4 h-4 text-amber-400 shrink-0" />
                <span>SEO Ready</span>
              </div>

              <div className="w-1 h-1 rounded-full bg-slate-700 hidden sm:block" />

              <div className="flex items-center gap-2 text-purple-300">
                <Zap className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Ultra Fast Load</span>
              </div>

              <div className="w-1 h-1 rounded-full bg-slate-700 hidden sm:block" />

              <div className="flex items-center gap-2 text-blue-300">
                <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                <span>SSL & Bank Secure</span>
              </div>

              <div className="w-1 h-1 rounded-full bg-slate-700 hidden sm:block" />

              <div className="flex items-center gap-2 text-rose-300">
                <MousePointerClick className="w-4 h-4 text-rose-400 shrink-0" />
                <span>Conversion Focused</span>
              </div>

            </div>
          </div>
        </section>

        {/* 3. OUR PARTNERS SLIDER */}
        <section className="my-12">
          <PartnersSlider 
            title="Our Trusted Technology & Infrastructure Partners"
            badgeText="INFRASTRUCTURE ALLIANCES"
            description="Building better digital experiences through strong technology, cloud, and business partnerships."
            variant="compact"
          />
        </section>

        {/* 4. INTRODUCTION SECTION */}
        <section className="my-20">
          <div className="rounded-3xl bg-slate-900/80 border border-slate-800/90 p-8 sm:p-12 lg:p-14 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider">
                  <Compass className="w-3.5 h-3.5 text-cyan-400" />
                  <span>MORE THAN JUST CODE</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                  A Website Is More Than Just a Design. <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">It's Your 24/7 Sales Engine.</span>
                </h2>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  In today's digital economy, your website is the first and most critical impression of your business. A professionally engineered website must:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm text-slate-200">
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950 border border-slate-800/80">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Build immediate brand credibility & trust</span>
                  </div>
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950 border border-slate-800/80">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Clearly communicate your products & services</span>
                  </div>
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950 border border-slate-800/80">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Generate inquiries & qualified customer leads</span>
                  </div>
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950 border border-slate-800/80">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Work effortlessly on every mobile device</span>
                  </div>
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950 border border-slate-800/80">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Load in under 1 second without lag</span>
                  </div>
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950 border border-slate-800/80">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>Convert casual visitors into paying customers</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => handleOpenFormWithPlan('Custom Website Consultation')}
                    className="px-7 py-3.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs sm:text-sm transition flex items-center gap-2 shadow-lg"
                  >
                    <span>Request Free Strategy Call</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>

              {/* Visual Side with Animated Quality Cards */}
              <div className="lg:col-span-5 space-y-4">
                <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl h-64 sm:h-72">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80"
                    alt="AVRX Website Design Strategy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-xs font-mono text-cyan-300">
                    // Engineered with TypeScript, React & Tailwind
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-center space-y-1">
                    <Smartphone className="w-5 h-5 text-cyan-400 mx-auto" />
                    <div className="font-bold text-white text-xs sm:text-sm">Responsive</div>
                    <div className="text-[10px] text-slate-400">All Viewports</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-center space-y-1">
                    <Search className="w-5 h-5 text-emerald-400 mx-auto" />
                    <div className="font-bold text-white text-xs sm:text-sm">SEO Ready</div>
                    <div className="text-[10px] text-slate-400">Google Optimized</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-center space-y-1">
                    <Zap className="w-5 h-5 text-amber-400 mx-auto" />
                    <div className="font-bold text-white text-xs sm:text-sm">Mobile First</div>
                    <div className="text-[10px] text-slate-400">Thumb Navigation</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-center space-y-1">
                    <BarChart3 className="w-5 h-5 text-purple-400 mx-auto" />
                    <div className="font-bold text-white text-xs sm:text-sm">Performance</div>
                    <div className="text-[10px] text-slate-400">Sub-Second Load</div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* 5. TYPES OF WEBSITES (8 CATEGORIES GRID) */}
        <section id="website-types-section" className="my-20 space-y-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span>CUSTOM-TAILORED SOLUTIONS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Choose the Right Website for Your Business
            </h2>
            <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
              From simple business websites to powerful ecommerce platforms, choose a solution based on your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {websiteCategories.map((cat) => (
              <div
                key={cat.id}
                className="rounded-3xl bg-slate-900/80 border border-slate-800/90 hover:border-cyan-500/50 flex flex-col justify-between overflow-hidden group transition-all duration-300 hover:shadow-[0_15px_40px_rgba(0,240,255,0.12)] hover:-translate-y-1"
              >
                
                {/* Image Header with Badge */}
                <div className="relative h-44 w-full overflow-hidden bg-slate-950">
                  <img
                    src={cat.imageUrl}
                    alt={cat.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-700/80 text-[10px] font-mono font-bold text-cyan-300">
                      {cat.badge}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="text-xl font-black text-white group-hover:text-cyan-300 transition-colors">
                      {cat.title}
                    </h3>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-5 sm:p-6 space-y-4 flex-grow flex flex-col justify-between">
                  
                  <div className="space-y-3">
                    <p className="text-xs text-slate-400 leading-relaxed font-normal">
                      <strong className="text-slate-300 font-semibold">Suitable for: </strong>{cat.suitableFor}
                    </p>

                    {/* Features List */}
                    <div className="space-y-1.5 pt-3 border-t border-slate-800">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Key Features:</div>
                      {cat.features.slice(0, 6).map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price & Action Section */}
                  <div className="pt-4 mt-4 border-t border-slate-800 space-y-3">
                    <div>
                      <div className="text-[10px] uppercase font-mono text-slate-500">Starting Price</div>
                      <div className="text-2xl font-black text-cyan-400 font-mono">{cat.priceStarting}</div>
                      <div className="text-[9px] text-slate-500 line-clamp-1">{cat.priceDisclaimer}</div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <button
                        onClick={() => onNavigate('service-detail', cat.id)}
                        className="w-full py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white font-bold text-xs transition"
                      >
                        View Details
                      </button>

                      <button
                        onClick={() => handleOpenFormWithPlan(cat.title)}
                        className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-black text-xs transition shadow-sm hover:scale-105"
                      >
                        {cat.ctaText.replace('Get ', '').replace('Build ', '').replace('Create ', '')}
                      </button>
                    </div>
                  </div>

                </div>

              </div>
            ))}
          </div>

        </section>

        {/* 6. DEDICATED E-COMMERCE SOLUTION SPOTLIGHT SECTION */}
        <section id="ecommerce-solutions-section" className="my-24 bg-gradient-to-br from-[#061b29] via-[#050e1b] to-[#02050f] border border-cyan-500/30 rounded-3xl p-6 sm:p-10 lg:p-14 shadow-2xl relative overflow-hidden">
          {/* Ambient Glows */}
          <div className="absolute top-0 right-0 w-[500px] h-[350px] bg-cyan-500/[0.08] blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[350px] bg-amber-500/[0.06] blur-[140px] pointer-events-none" />

          <div className="relative z-10 space-y-12">
            {/* Section Header */}
            <div className="text-center max-w-4xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                <ShoppingCart className="w-3.5 h-3.5 text-cyan-400" />
                <span>E-COMMERCE SPECIALIZATION</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                E-Commerce Solution — <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-amber-400">Sell 24/7 Across India &amp; Globally</span>
              </h2>
              <p className="text-slate-300 text-xs sm:text-base max-w-3xl mx-auto leading-relaxed">
                Full-featured online store platforms engineered for maximum sales conversion. Includes dynamic product catalogues, instant UPI/Card payment gateway checkout, automated courier tracking, and zero recurring transaction commissions.
              </p>
            </div>

            {/* Main Interactive Showcase: Left Visual Preview + Right Specs & Features */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Left Side: Realistic Online Store Mockup Card */}
              <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl group">
                  {/* Browser Bar */}
                  <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    </div>
                    <div className="px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-[11px] font-mono text-cyan-300 flex items-center gap-2 max-w-[260px] truncate">
                      <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span className="truncate">https://store.yourbrand.com</span>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-mono font-bold">
                      Live Store
                    </span>
                  </div>

                  {/* Store Preview Image */}
                  <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-900">
                    <img
                      src="https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1200&q=80"
                      alt="AVRX E-Commerce Solution Storefront"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                    {/* Floating Product Highlight Card */}
                    <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-950/90 backdrop-blur-xl border border-cyan-500/30 shadow-2xl flex items-center justify-between gap-4">
                      <div>
                        <div className="text-[10px] font-mono uppercase text-amber-400 font-bold">D2C Conversion Engine</div>
                        <div className="text-sm sm:text-base font-black text-white">Instant 1-Click UPI &amp; Card Checkout</div>
                        <div className="text-xs text-slate-400 mt-0.5">Sub-second cart loading • 0% revenue commission</div>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="text-xs text-slate-400">Starting from</div>
                        <div className="text-xl font-black text-cyan-400 font-mono">₹14,999+</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Performance Metrics Bar */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 text-center space-y-0.5">
                    <div className="text-lg font-black text-emerald-400 font-mono">18s</div>
                    <div className="text-[10px] uppercase font-bold text-slate-400">Avg Checkout</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 text-center space-y-0.5">
                    <div className="text-lg font-black text-cyan-400 font-mono">0%</div>
                    <div className="text-[10px] uppercase font-bold text-slate-400">Sales Commission</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 text-center space-y-0.5">
                    <div className="text-lg font-black text-amber-400 font-mono">+42%</div>
                    <div className="text-[10px] uppercase font-bold text-slate-400">Cart Recovery</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 text-center space-y-0.5">
                    <div className="text-lg font-black text-purple-400 font-mono">100%</div>
                    <div className="text-[10px] uppercase font-bold text-slate-400">Code Ownership</div>
                  </div>
                </div>
              </div>

              {/* Right Side: 6 High-Impact Feature Breakdown Cards */}
              <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition space-y-1.5">
                    <div className="flex items-center gap-2 text-cyan-400">
                      <ShoppingBag className="w-4 h-4" />
                      <h4 className="font-bold text-sm text-white">Dynamic Product Catalog</h4>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Unlimited products, category hierarchies, color/size variants, high-res galleries, and bulk CSV imports.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition space-y-1.5">
                    <div className="flex items-center gap-2 text-emerald-400">
                      <CreditCard className="w-4 h-4" />
                      <h4 className="font-bold text-sm text-white">Payment Gateways &amp; UPI</h4>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Instant checkout via Razorpay, PhonePe, Paytm, Stripe, UPI QR, Credit/Debit Cards, NetBanking, and COD.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition space-y-1.5">
                    <div className="flex items-center gap-2 text-amber-400">
                      <Truck className="w-4 h-4" />
                      <h4 className="font-bold text-sm text-white">Courier &amp; Live Tracking</h4>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Auto-sync with Shiprocket, Delhivery, BlueDart, automated WhatsApp tracking links &amp; GST invoices.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition space-y-1.5">
                    <div className="flex items-center gap-2 text-purple-400">
                      <Percent className="w-4 h-4" />
                      <h4 className="font-bold text-sm text-white">Coupons &amp; Cart Recovery</h4>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Smart discount promo codes, flash sale banners, and automated WhatsApp/email abandoned cart triggers.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition space-y-1.5">
                    <div className="flex items-center gap-2 text-rose-400">
                      <Boxes className="w-4 h-4" />
                      <h4 className="font-bold text-sm text-white">Inventory &amp; Stock Alerts</h4>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Real-time inventory deduction, low-stock alerts, out-of-stock badges, and backorder notifications.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition space-y-1.5">
                    <div className="flex items-center gap-2 text-blue-400">
                      <BarChart3 className="w-4 h-4" />
                      <h4 className="font-bold text-sm text-white">Master Admin Analytics</h4>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Intuitive dashboard for revenue trends, order fulfillment, top SKUs, customer data, and sales reports.
                    </p>
                  </div>
                </div>

                {/* CTAs and Gateway Badges */}
                <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800/90 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <div className="text-xs font-bold text-white">Supported Payment Gateways &amp; Logistics:</div>
                      <div className="text-[11px] text-slate-400">Razorpay • PhonePe • Paytm • Stripe • Cashfree • Shiprocket • Delhivery</div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                    <button
                      onClick={() => handleOpenFormWithPlan('E-Commerce Solution')}
                      className="w-full sm:w-auto flex-1 py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 text-slate-950 font-black text-xs shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:scale-105 transition flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Get E-Commerce Solution Quote</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => onNavigate('service-detail', 'e-commerce-solutions')}
                      className="w-full sm:w-auto py-3.5 px-5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 font-bold text-xs transition text-center"
                    >
                      Explore E-Commerce Specs
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
        <section id="pricing-section" className="my-24 space-y-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <BadgePercent className="w-3.5 h-3.5 text-emerald-400" />
              <span>TRANSPARENT VALUE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Compare Website Packages
            </h2>
            <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
              Transparent, upfront pricing structure with zero hidden fees. Select the tier that matches your roadmap.
            </p>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {comparisonPlans.map((plan, idx) => (
              <div
                key={idx}
                className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-b from-[#091e2b] via-[#05111d] to-[#050811] border-2 border-cyan-400 shadow-[0_0_40px_rgba(0,240,255,0.2)] lg:-translate-y-2'
                    : 'bg-slate-900/80 border border-slate-800'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 text-[11px] font-black uppercase tracking-wider shadow-lg">
                    Most Popular
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-black text-white">{plan.name}</h3>
                    <p className="text-xs text-slate-400 mt-1 min-h-[32px]">{plan.desc}</p>
                  </div>

                  <div className="pb-4 border-b border-slate-800">
                    <div className="text-3xl sm:text-4xl font-black text-cyan-400 font-mono">{plan.price}</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">Starting price*</div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 text-xs">
                    <div className="flex items-center justify-between text-slate-300">
                      <span className="text-slate-400">Pages:</span>
                      <span className="font-bold text-white">{plan.pages}</span>
                    </div>

                    <div className="flex items-center justify-between text-slate-300">
                      <span className="text-slate-400">Mobile Responsive:</span>
                      <Check className="w-4 h-4 text-emerald-400" />
                    </div>

                    <div className="flex items-center justify-between text-slate-300">
                      <span className="text-slate-400">Contact & Leads:</span>
                      <Check className="w-4 h-4 text-emerald-400" />
                    </div>

                    <div className="flex items-center justify-between text-slate-300">
                      <span className="text-slate-400">WhatsApp Button:</span>
                      <Check className="w-4 h-4 text-emerald-400" />
                    </div>

                    <div className="flex items-center justify-between text-slate-300">
                      <span className="text-slate-400">SEO Setup:</span>
                      <span className="font-semibold text-slate-200">{plan.seoSetup}</span>
                    </div>

                    <div className="flex items-center justify-between text-slate-300">
                      <span className="text-slate-400">Analytics:</span>
                      {plan.analytics ? <Check className="w-4 h-4 text-emerald-400" /> : <span className="text-slate-600">—</span>}
                    </div>

                    <div className="flex items-center justify-between text-slate-300">
                      <span className="text-slate-400">E-Commerce Cart:</span>
                      {plan.ecommerce ? <Check className="w-4 h-4 text-emerald-400" /> : <span className="text-slate-600">—</span>}
                    </div>

                    <div className="flex items-center justify-between text-slate-300">
                      <span className="text-slate-400">Payment Gateway:</span>
                      {plan.paymentGateway ? <Check className="w-4 h-4 text-emerald-400" /> : <span className="text-slate-600">—</span>}
                    </div>

                    <div className="flex items-center justify-between text-slate-300">
                      <span className="text-slate-400">Admin Control:</span>
                      <span className="font-semibold text-slate-200">{plan.adminPanel}</span>
                    </div>

                    <div className="flex items-center justify-between text-slate-300">
                      <span className="text-slate-400">Support:</span>
                      <span className="font-semibold text-cyan-300">{plan.support}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800">
                  <button
                    onClick={() => handleOpenFormWithPlan(`${plan.name} Package`)}
                    className={`w-full py-3.5 rounded-xl font-bold text-xs transition ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 text-slate-950 font-black shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:scale-105'
                        : 'bg-slate-950 hover:bg-slate-800 border border-slate-800 text-white'
                    }`}
                  >
                    Select {plan.name} Plan
                  </button>
                </div>

              </div>
            ))}
          </div>

          <div className="text-center text-xs text-slate-400 max-w-2xl mx-auto">
            * <strong className="text-slate-300 font-semibold">Pricing Notice: </strong>
            Final pricing may vary depending on design complexity, content preparation, custom integrations, API workflows and exact project scope.
          </div>

        </section>

        {/* 15. WHAT WE INCLUDE (8 FEATURE CARDS) */}
        <section className="my-24 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>THE AVRX STANDARD</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Every Website We Build Is Designed for Real Business Goals
            </h2>
            <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
              We never compromise on fundamental digital craftsmanship. Here is what comes standard in our web builds.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatWeInclude.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-3 hover:border-cyan-500/40 transition hover:shadow-lg"
                >
                  <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 text-cyan-400 w-fit">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* 18. WEBSITE FEATURES SHOWCASE (STRETCHED FULL-WIDTH MODERN WEBSITE ANATOMY) */}
        <section className="my-24 bg-gradient-to-br from-[#061424] via-[#050811] to-[#02050f] border border-cyan-500/30 rounded-3xl p-6 sm:p-10 lg:p-14 shadow-2xl relative overflow-hidden">
          
          <div className="text-center max-w-4xl mx-auto mb-10 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(0,240,255,0.2)]">
              <SlidersHorizontal className="w-3.5 h-3.5 text-cyan-400" />
              <span>FULL-STACK ARCHITECTURAL EXPLORER</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Inside Our Modern Website Anatomy
            </h2>
            <p className="text-xs sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Every layer of an AVRX website is systematically engineered for extreme speed, instant conversion, mobile elegance, and search engine dominance.
            </p>
          </div>

          {/* Interactive Feature Category Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 max-w-5xl mx-auto">
            {Object.entries(interactiveFeatures).map(([key, data]) => {
              const Icon = data.icon;
              const isSelected = activeFeatureKey === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveFeatureKey(key)}
                  className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer border ${
                    isSelected
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 border-cyan-300 shadow-[0_0_25px_rgba(0,240,255,0.4)] scale-105 font-black'
                      : 'bg-slate-950/80 border-slate-800 text-slate-300 hover:border-cyan-500/50 hover:bg-slate-900'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-slate-950' : 'text-cyan-400'}`} />
                  <span>{data.label}</span>
                </button>
              );
            })}
          </div>

          {/* Stretched Widescreen Interactive Architecture Studio */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-slate-950/90 border border-slate-800/90 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden backdrop-blur-md">
            
            {/* Left/Center: High-Fidelity Interactive Mockup with Live Benchmarks (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              
              {/* Browser Window Header Mockup */}
              <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl relative group">
                
                {/* Browser Top Bar */}
                <div className="px-4 py-2.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>

                  <div className="px-4 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[11px] font-mono text-cyan-300 flex items-center gap-2 max-w-sm w-full truncate">
                    <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span className="truncate">https://yourbusiness.com/demo-preview</span>
                  </div>

                  <div className="flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>0.38s</span>
                  </div>
                </div>

                {/* Mockup Canvas */}
                <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-950">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
                    alt="Feature Architecture Mockup"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top opacity-70 group-hover:opacity-85 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  
                  {/* Active Highlight Overlay Card */}
                  <div className="absolute inset-x-4 bottom-4 p-4 rounded-2xl bg-slate-950/90 border border-cyan-500/40 shadow-2xl backdrop-blur-md flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                        {React.createElement(interactiveFeatures[activeFeatureKey].icon, { className: 'w-5 h-5' })}
                      </div>
                      <div>
                        <div className="text-[10px] font-mono uppercase tracking-wider text-cyan-300 font-bold">
                          {interactiveFeatures[activeFeatureKey].badge}
                        </div>
                        <div className="text-sm font-black text-white">
                          {interactiveFeatures[activeFeatureKey].title}
                        </div>
                      </div>
                    </div>

                    <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 text-[11px] font-mono font-bold shrink-0">
                      Active In All Packages
                    </span>
                  </div>
                </div>
              </div>

              {/* Real-Time Live Architectural Metric Gauges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 text-center space-y-0.5">
                  <div className="text-lg font-black text-cyan-400 font-mono">0.38s</div>
                  <div className="text-[10px] uppercase font-bold text-slate-400">Cold Start LCP</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 text-center space-y-0.5">
                  <div className="text-lg font-black text-emerald-400 font-mono">99/100</div>
                  <div className="text-[10px] uppercase font-bold text-slate-400">PageSpeed Score</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 text-center space-y-0.5">
                  <div className="text-lg font-black text-purple-400 font-mono">A+ Grade</div>
                  <div className="text-[10px] uppercase font-bold text-slate-400">SSL / TLS 1.3</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 text-center space-y-0.5">
                  <div className="text-lg font-black text-amber-400 font-mono">100%</div>
                  <div className="text-[10px] uppercase font-bold text-slate-400">Mobile Friendly</div>
                </div>
              </div>

            </div>

            {/* Right: Feature In-Depth Blueprint & Technical Specs (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 sm:p-8">
              <div className="space-y-4">
                
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 w-fit">
                    {React.createElement(interactiveFeatures[activeFeatureKey].icon, { className: 'w-6 h-6' })}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 text-xs font-mono font-bold">
                    {interactiveFeatures[activeFeatureKey].badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">
                    {interactiveFeatures[activeFeatureKey].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2">
                    {interactiveFeatures[activeFeatureKey].desc}
                  </p>
                </div>

                {/* Key Execution Highlights Checklist */}
                <div className="space-y-2.5 pt-2 border-t border-slate-800">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-mono">
                    Technical Capabilities Included:
                  </div>
                  {interactiveFeatures[activeFeatureKey].highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                      <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => handleOpenFormWithPlan(`Inquiry: ${interactiveFeatures[activeFeatureKey].title}`)}
                  className="w-full sm:w-auto flex-1 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 text-slate-950 font-black text-xs shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:scale-105 transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Build This Into My Website</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

        </section>

        {/* 19. BEFORE / AFTER WEBSITE SECTION (EXPANDED WITH COMPREHENSIVE FEATURES) */}
        <section className="my-24 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(168,85,247,0.2)]">
              <Eye className="w-3.5 h-3.5 text-purple-400" />
              <span>THE AVRX DIGITAL MAKEOVER</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Transform Your Digital Presence
            </h2>
            <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
              Drag the interactive split slider below to see how AVRX turns slow, outdated, zero-lead websites into high-speed conversion powerhouses.
            </p>
          </div>

          {/* Interactive Comparison Slider */}
          <div className="max-w-6xl mx-auto relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl select-none">
            
            {/* Split Comparison Window */}
            <div className="relative h-[400px] sm:h-[500px] w-full">
              
              {/* After: AVRX Modern Website (Right Side Background) */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#061e31] via-[#05101f] to-slate-950 flex items-center justify-end p-6 sm:p-12 text-left">
                <div className="max-w-md space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-mono font-bold">
                      MODERN AVRX ARCHITECTURE
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[11px] font-mono font-bold">
                      99/100 Speed
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-white">
                    High-Converting & Ultra-Fast
                  </h3>

                  <div className="space-y-2.5 text-xs text-slate-200">
                    <div className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span><strong>0.4s Sub-Second</strong> Lightning Cold-Start Speed</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span><strong>1-Click Direct</strong> Floating WhatsApp & Instant Call CTAs</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span><strong>Thumb-Friendly</strong> Ergonomic Mobile App-Like Feel</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span><strong>Google Rich Snippet</strong> Structured SEO Schema Tags</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span><strong>Bank-Grade 256-Bit SSL</strong> & DDoS Protected Cloud Server</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span><strong>1-Click CMS Dashboard</strong> to update content anytime</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Before: Old / Basic Website (Left Side Clipped) */}
              <div 
                className="absolute inset-y-0 left-0 overflow-hidden bg-slate-900 border-r-2 border-cyan-400 shadow-2xl flex items-center justify-start p-6 sm:p-12 text-left"
                style={{ width: `${beforeAfterPos}%` }}
              >
                <div className="w-[420px] sm:w-[480px] space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-300 border border-red-500/40 text-xs font-mono font-bold">
                      OLD / BASIC WEBSITE
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-red-500/20 text-red-300 border border-red-500/30 text-[11px] font-mono font-bold">
                      24/100 Speed
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-slate-400">
                    Outdated, Slow & Cluttered
                  </h3>

                  <div className="space-y-2.5 text-xs text-slate-400">
                    <div className="flex items-center gap-2.5">
                      <span className="text-red-400 font-bold">✕</span>
                      <span>4.8+ seconds slow loading times causing 65% bounce</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="text-red-400 font-bold">✕</span>
                      <span>Broken or buried contact forms with zero lead alerts</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="text-red-400 font-bold">✕</span>
                      <span>Pinch-and-zoom broken desktop view on mobile screens</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="text-red-400 font-bold">✕</span>
                      <span>Missing Google Schema metadata and invisible ranking</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="text-red-400 font-bold">✕</span>
                      <span>"Not Secure" browser warnings scaring away visitors</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="text-red-400 font-bold">✕</span>
                      <span>Dependent on expensive developers for simple text changes</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Draggable Divider Handle */}
              <div 
                className="absolute inset-y-0 -ml-5 flex items-center justify-center cursor-ew-resize pointer-events-none z-30"
                style={{ left: `${beforeAfterPos}%` }}
              >
                <div className="w-10 h-10 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center shadow-[0_0_25px_rgba(0,240,255,0.9)] border-2 border-white">
                  <SlidersHorizontal className="w-4 h-4" />
                </div>
              </div>

              {/* Invisible Slider Input for Dragging */}
              <input
                type="range"
                min="5"
                max="95"
                value={beforeAfterPos}
                onChange={(e) => setBeforeAfterPos(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-40"
                aria-label="Before / After Website Comparison Slider"
              />

            </div>

            <div className="px-6 py-3.5 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span className="font-semibold text-slate-300">← Drag Left to see Modern AVRX Architecture</span>
              <span className="font-semibold text-slate-300">Drag Right to see Outdated Website →</span>
            </div>

          </div>

          {/* 8-Point Comprehensive Feature Transformation Matrix */}
          <div className="max-w-6xl mx-auto space-y-4 pt-4">
            <div className="text-center space-y-1">
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Detailed Transformation Matrix: Old Website vs. AVRX
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                A systematic side-by-side comparison across the 8 key pillars of web engineering.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                <div className="text-xs font-mono font-bold text-cyan-400 uppercase">1. Page Load Speed</div>
                <div className="text-sm font-bold text-white">Sub-0.4s Instant Load</div>
                <div className="text-xs text-slate-400">Old: 4.8s slow spin vs AVRX: Brotli compression, NVMe SSD &amp; CDN caching.</div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                <div className="text-xs font-mono font-bold text-cyan-400 uppercase">2. Lead Capture Engine</div>
                <div className="text-sm font-bold text-white">Instant WhatsApp + Alerts</div>
                <div className="text-xs text-slate-400">Old: Static mailto link vs AVRX: Direct WhatsApp trigger &amp; instant SMS/Email.</div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                <div className="text-xs font-mono font-bold text-cyan-400 uppercase">3. Mobile Ergonomics</div>
                <div className="text-sm font-bold text-white">Native App-Like UI</div>
                <div className="text-xs text-slate-400">Old: Pinch-to-zoom desktop layout vs AVRX: Thumb-friendly mobile navigation.</div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                <div className="text-xs font-mono font-bold text-cyan-400 uppercase">4. Google Search SEO</div>
                <div className="text-sm font-bold text-white">Rich Snippets &amp; Schema</div>
                <div className="text-xs text-slate-400">Old: Zero meta tags vs AVRX: JSON-LD Local Business Schema &amp; fast indexing.</div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                <div className="text-xs font-mono font-bold text-cyan-400 uppercase">5. Security &amp; Trust</div>
                <div className="text-sm font-bold text-white">256-Bit SSL HTTPS</div>
                <div className="text-xs text-slate-400">Old: "Not Secure" warning vs AVRX: Auto-renewing SSL certificate &amp; CSP headers.</div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                <div className="text-xs font-mono font-bold text-cyan-400 uppercase">6. Content Control</div>
                <div className="text-sm font-bold text-white">1-Click Admin CMS</div>
                <div className="text-xs text-slate-400">Old: Dependent on agency vs AVRX: Intuitive visual self-management editor.</div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                <div className="text-xs font-mono font-bold text-cyan-400 uppercase">7. Code Ownership</div>
                <div className="text-sm font-bold text-white">100% IP &amp; Source Code</div>
                <div className="text-xs text-slate-400">Old: Locked in proprietary platforms vs AVRX: Full source code and asset handover.</div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                <div className="text-xs font-mono font-bold text-cyan-400 uppercase">8. Inbound ROI</div>
                <div className="text-sm font-bold text-white">+340% Higher Conversion</div>
                <div className="text-xs text-slate-400">Old: &lt;0.5% lead conversion vs AVRX: Multi-channel booking &amp; inquiry routing.</div>
              </div>

            </div>
          </div>

        </section>

        {/* 16. WEBSITE DESIGN PROCESS (ANIMATED TIMELINE) */}
        <section className="my-24 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              <span>OUR PROVEN WORKFLOW</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              How We Build Your Website
            </h2>
            <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
              From concept to live deployment in 7 streamlined, transparent stages.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
            {processSteps.map((step, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 hover:border-cyan-500/40 transition flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-mono font-black text-xs">
                    {step.num}
                  </div>
                  <h3 className="text-base font-bold text-white">{step.title}</h3>
                  <p className="text-[11px] text-slate-400 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 17. WHY CHOOSE AVRX (6 PREMIUM CARDS) */}
        <section className="my-24 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>THE AVRX ADVANTAGE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Why Choose AVRX for Your Website?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div 
                  key={idx}
                  className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-3 hover:border-cyan-500/40 transition"
                >
                  <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 text-cyan-400 w-fit">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{card.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{card.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* 20. FAQ ACCORDION (2-COLUMN GRID LAYOUT) */}
        <section className="my-24 max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5 text-purple-400" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white">
              Website Design &amp; Development FAQs
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Clear, transparent answers to help you select the ideal digital solution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
            {webDesignFaqs.map((faq, idx) => (
              <div 
                key={idx}
                className="border border-slate-800 rounded-2xl overflow-hidden bg-slate-900/80 hover:border-cyan-500/30 transition-colors"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left font-bold text-xs sm:text-sm text-slate-200 flex items-center justify-between gap-3 hover:text-cyan-300 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-cyan-400 shrink-0 transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {activeFaq === idx && (
                  <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-slate-300 border-t border-slate-800/80 pt-3 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 21. FINAL HIGH-CONVERSION CTA */}
        <section className="my-20 rounded-3xl bg-gradient-to-r from-cyan-950 via-[#071324] to-indigo-950 border border-cyan-500/40 p-8 sm:p-14 text-center space-y-6 relative overflow-hidden shadow-[0_20px_60px_rgba(0,240,255,0.15)]">
          <div className="max-w-3xl mx-auto space-y-3 relative z-10">
            <h3 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Ready to Build Your Next Website?
            </h3>
            <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
              Tell us what you want to build and we'll help you choose the right website solution for your business.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 relative z-10">
            <button
              onClick={() => handleOpenFormWithPlan('Custom Website Project')}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 text-slate-950 font-black text-sm shadow-[0_0_30px_rgba(0,240,255,0.4)] hover:scale-105 transition flex items-center gap-2 cursor-pointer"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className="px-7 py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-white font-bold text-xs sm:text-sm transition flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>Talk to AVRX</span>
            </button>
          </div>
        </section>

        {/* 22. PARTNERS SLIDER — SECOND TRUST POINT */}
        <section className="my-14">
          <PartnersSlider 
            title="Technology & Business Partners"
            badgeText="CLOUD & DIGITAL INFRASTRUCTURE"
            description="Empowering Indian businesses with enterprise uptime, cloud CDN, and certified security."
            variant="compact"
          />
        </section>

      </div>

      {/* Interactive Consultation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 max-w-lg w-full space-y-6 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div>
                <h3 className="text-xl font-black text-white">Start Your Website Project</h3>
                <p className="text-xs text-slate-400">Selected Tier: <span className="text-cyan-400 font-bold">{selectedPlan}</span></p>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-white text-xl"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Hidden Honeypot */}
              <input
                type="text"
                name="website_hp"
                value={formData.website_hp}
                onChange={e => setFormData({ ...formData, website_hp: e.target.value })}
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />

              {errorMessage && (
                <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs">
                  {errorMessage}
                </div>
              )}

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300 uppercase">Your Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Ramesh Patel"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300 uppercase">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300 uppercase">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ramesh@example.com"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300 uppercase">City & State</label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={e => setFormData({ ...formData, city: e.target.value })}
                  placeholder="e.g. Surat, Gujarat"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300 uppercase">Project Scope / Requirements</label>
                <textarea
                  rows={3}
                  value={formData.requirements}
                  onChange={e => setFormData({ ...formData, requirements: e.target.value })}
                  placeholder="Describe your business, required pages, reference websites..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-black text-sm rounded-xl transition shadow-lg hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer"
              >
                {loading ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Submitting Request...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit & Get Instant Quote</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Submission Feedback Modal */}
      <SubmissionFeedbackModal
        isOpen={feedback.isOpen}
        type={feedback.type}
        leadId={feedback.leadId}
        message={feedback.message}
        onClose={() => setFeedback(prev => ({ ...prev, isOpen: false }))}
        onRetry={() => setFeedback(prev => ({ ...prev, isOpen: false }))}
      />

    </div>
  );
};
