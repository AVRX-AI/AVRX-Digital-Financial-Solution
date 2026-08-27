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
  Palette,
  QrCode,
  DollarSign,
  TrendingUp,
  PackageCheck,
  RotateCcw,
  Receipt,
  Headphones,
  Award,
  Star,
  Users,
  BellRing
} from 'lucide-react';
import { submitLeadForm } from '../utils/formSubmit';
import { SubmissionFeedbackModal } from '../components/common/SubmissionFeedbackModal';

interface EcommerceSolutionsPageProps {
  onNavigate: (page: string, slug?: string) => void;
}

// 10 E-Commerce Showcase Storefront Slides
interface EcommerceSlide {
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

const ECOMMERCE_SHOWCASE_SLIDES: EcommerceSlide[] = [
  {
    id: 'fashion-apparel',
    category: 'Fashion, Apparel & Luxury D2C',
    badge: 'Trending D2C',
    title: 'Aura Luxe Couture & Lifestyle Store',
    tagline: 'High-conversion aesthetic catalog, instant size recommender, variant color swatches, and 1-click Razorpay UPI checkout.',
    previewUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#F59E0B',
    bgGradient: 'from-amber-950/70 via-slate-900 to-slate-950',
    metrics: [
      { label: 'Checkout Time', value: '< 18s' },
      { label: 'Cart Conversion', value: '5.2%' },
      { label: 'Mobile Revenue', value: '82%' }
    ],
    keyFeatures: ['1-Click Fast Checkout', 'Color/Size Matrix', 'Instagram Shop Integration']
  },
  {
    id: 'electronics-gadgets',
    category: 'Electronics & Smart Gadgets',
    badge: 'High Performance',
    title: 'Voltrix Smart Tech & Audio Store',
    tagline: 'Technical spec comparators, warranty registration, EMI calculators, and pincode delivery speed estimators.',
    previewUrl: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#00F0FF',
    bgGradient: 'from-cyan-950/70 via-slate-900 to-slate-950',
    metrics: [
      { label: 'Page Speed', value: '99/100' },
      { label: 'Search Speed', value: '120ms' },
      { label: 'Average Order Value', value: '₹4,850' }
    ],
    keyFeatures: ['Instant Spec Comparison', 'Live Pincode Checker', 'No-Cost EMI Options']
  },
  {
    id: 'grocery-supermarket',
    category: 'Grocery & Hyperlocal Mart',
    badge: 'Quick Commerce Ready',
    title: 'FarmFresh Organic & Quick Mart',
    tagline: 'Slot-based delivery scheduler, multi-item fast cart add, minimum order threshold rules, and direct WhatsApp order dispatch.',
    previewUrl: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#10B981',
    bgGradient: 'from-emerald-950/70 via-slate-900 to-slate-950',
    metrics: [
      { label: 'Re-Order Rate', value: '68%' },
      { label: 'Avg Items/Cart', value: '11.4' },
      { label: 'Delivery Time', value: 'Scheduled' }
    ],
    keyFeatures: ['Delivery Slot Selection', 'WhatsApp Order Sync', 'Multi-Category Bulk Cart']
  },
  {
    id: 'jewelry-luxury',
    category: 'Jewelry & Precious Crafts',
    badge: 'High-Ticket Trust',
    title: 'Zaveri & Co. Fine Jewels & Solitaires',
    tagline: '360° high-definition product view, BIS hallmark trust badges, custom gold rate calculation, and insured courier tracking.',
    previewUrl: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#EC4899',
    bgGradient: 'from-pink-950/70 via-slate-900 to-slate-950',
    metrics: [
      { label: 'Trust Rating', value: '4.9/5' },
      { label: 'VIP Inquiries', value: '4.2x' },
      { label: 'Insured Shipping', value: '100%' }
    ],
    keyFeatures: ['360° Ultra Zoom', 'Live Gold Rate Calculator', 'Video Call Shopping Booking']
  },
  {
    id: 'health-supplements',
    category: 'Health, Fitness & Supplements',
    badge: 'Subscription Engine',
    title: 'CoreNutra Sports & Wellness Labs',
    tagline: 'Lab test certification displays, recurring monthly subscription orders, flavor variants, and QR authenticity check.',
    previewUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#8B5CF6',
    bgGradient: 'from-purple-950/70 via-slate-900 to-slate-950',
    metrics: [
      { label: 'Subscription Retention', value: '74%' },
      { label: 'Conversion Rate', value: '4.9%' },
      { label: 'Lab Verify Scans', value: '35K+' }
    ],
    keyFeatures: ['Recurring Subscriptions', 'Authenticity QR Verifier', 'Nutrition Facts Panel']
  },
  {
    id: 'home-furniture',
    category: 'Home Decor & Handcrafted Furniture',
    badge: 'Visual Commerce',
    title: 'Loom & Timber Artisan Living',
    tagline: 'Room visualizer previews, fabric and wood customization, heavy parcel shipping calculators, and custom dimension quotes.',
    previewUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#3B82F6',
    bgGradient: 'from-blue-950/70 via-slate-900 to-slate-950',
    metrics: [
      { label: 'Engaged Dwell Time', value: '4.6m' },
      { label: 'Custom Quotes', value: '+58%' },
      { label: 'Zero RTO Returns', value: '98%' }
    ],
    keyFeatures: ['Material Swatch Selector', 'Heavy Parcel Courier Sync', 'Room Placement Mockup']
  },
  {
    id: 'beauty-cosmetics',
    category: 'Beauty, Skincare & Cosmetics',
    badge: 'Influencer Ready',
    title: 'GlowAura Pure Botanical Skincare',
    tagline: 'Skin concern quiz recommendation funnel, bundle & save packages, customer photo reviews, and free gift with purchase rules.',
    previewUrl: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#F43F5E',
    bgGradient: 'from-rose-950/70 via-slate-900 to-slate-950',
    metrics: [
      { label: 'Quiz-to-Buy Rate', value: '26%' },
      { label: 'Bundle Sales', value: '+44%' },
      { label: 'UGC Review Rating', value: '4.88' }
    ],
    keyFeatures: ['AI Skin Diagnostic Quiz', 'Dynamic Bundle Builder', 'Free Gift Threshold Engine']
  },
  {
    id: 'b2b-wholesale',
    category: 'Wholesale B2B Industrial Supply',
    badge: 'B2B Enterprise',
    title: 'ApexTrade Industrial Mart & Raw Goods',
    tagline: 'GST-compliant invoice auto-generation, tiered bulk discount tables, minimum order quantity (MOQ) enforcement, and credit terms.',
    previewUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#EAB308',
    bgGradient: 'from-yellow-950/70 via-slate-900 to-slate-950',
    metrics: [
      { label: 'Average Order Value', value: '₹65,000' },
      { label: 'GST Invoice Match', value: '100%' },
      { label: 'Distributor Leads', value: '3.4x' }
    ],
    keyFeatures: ['Automated GST Invoicing', 'Tiered Bulk Price Matrix', 'RFQs & Custom Inquiries']
  },
  {
    id: 'gourmet-foods',
    category: 'Gourmet Bakeries & Artisan Sweets',
    badge: 'Fresh Delivery',
    title: 'ChocoCraze Artisanal Patisserie',
    tagline: 'Custom cake message cards, date/time slot delivery picker, cold-chain parcel tracking, and gift packaging options.',
    previewUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#D97706',
    bgGradient: 'from-amber-950/70 via-slate-900 to-slate-950',
    metrics: [
      { label: 'Gift Orders', value: '62%' },
      { label: 'Same-Day Dispatch', value: '95%' },
      { label: 'Customer Delight', value: '4.95' }
    ],
    keyFeatures: ['Custom Message Card Input', 'Cold-Chain Delivery Sync', 'Special Gift Packaging']
  },
  {
    id: 'digital-products',
    category: 'Digital Downloads & E-Learning',
    badge: 'Zero Fulfillment Cost',
    title: 'ByteSkill Masterclasses & Digital Assets',
    tagline: 'Instant secure download links, automated license key generation, video stream DRM, and recurring monthly memberships.',
    previewUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#06B6D4',
    bgGradient: 'from-cyan-950/70 via-slate-900 to-slate-950',
    metrics: [
      { label: 'Fulfillment Time', value: '0.2s' },
      { label: 'Gross Margin', value: '94%' },
      { label: 'Global Sales', value: '40+ Countries' }
    ],
    keyFeatures: ['Instant Secure File Delivery', 'Automated License Keys', 'Global Multi-Currency']
  }
];

// 8 Specific E-Commerce Subcategories / Store Models
const ECOMMERCE_SUB_CATEGORIES = [
  {
    id: 'd2c-brand-store',
    title: 'D2C Brand Flagship Store',
    tagline: 'For consumer brands, startups & manufacturers selling directly to shoppers with superior storytelling.',
    startingPrice: '₹14,999+',
    badge: 'Highest Conversion',
    badgeColor: 'border-amber-500/40 text-amber-300 bg-amber-500/10',
    gradient: 'from-amber-500/20 to-orange-500/20',
    icon: ShoppingBag,
    features: [
      'High-converting mobile-first brand story layout',
      'Ultra-fast 1-click checkout (Razorpay / Cashfree / UPI)',
      'Smart customer reviews & star ratings engine',
      'Discount coupon codes & countdown sale banners',
      'Automated WhatsApp abandoned cart recovery alerts',
      'Automated Shiprocket / Delhivery courier sync'
    ],
    idealFor: 'Clothing, electronics, beauty, nutrition, jewelry & consumer product brands'
  },
  {
    id: 'multi-category-supermarket',
    title: 'Multi-Category Retail & Supermarket',
    tagline: 'Massive nested category architecture with high-speed search, filters, and bulk basket checkout.',
    startingPrice: '₹19,999+',
    badge: 'Enterprise Catalog',
    badgeColor: 'border-cyan-500/40 text-cyan-300 bg-cyan-500/10',
    gradient: 'from-cyan-500/20 to-blue-500/20',
    icon: Boxes,
    features: [
      'Nested multi-level category & brand taxonomy',
      'Sub-second instant faceted search & filter bar',
      'Bulk add to cart & quick repeat order buttons',
      'Pincode delivery check & minimum order thresholds',
      'Multi-warehouse stock inventory tracking',
      'Excel/CSV bulk product upload and export engine'
    ],
    idealFor: 'Departmental stores, hardware marts, stationery, electronic megastores'
  },
  {
    id: 'fashion-lifestyle-boutique',
    title: 'Fashion & Lifestyle Boutique Store',
    tagline: 'Visual-first catalog with interactive size guides, color swatches, and lookbook styling.',
    startingPrice: '₹16,999+',
    badge: 'Visual Experience',
    badgeColor: 'border-pink-500/40 text-pink-300 bg-pink-500/10',
    gradient: 'from-pink-500/20 to-rose-500/20',
    icon: Palette,
    features: [
      'Interactive size charts & fit guidance popups',
      'Dynamic visual color swatches & fabric previews',
      'Instagram Shop & Meta catalog direct integration',
      'Complete look / "Pair with this" cross-sell widgets',
      'Hassle-free automated customer return/exchange portal',
      'Live stock scarcity indicators ("Only 2 left!")'
    ],
    idealFor: 'Ethnic wear, western fashion, streetwear, footwear & designer labels'
  },
  {
    id: 'grocery-hyperlocal-delivery',
    title: 'Grocery & Hyperlocal Quick Store',
    tagline: 'Engineered for rapid local orders, scheduled delivery slots, and direct WhatsApp dispatch.',
    startingPrice: '₹16,999+',
    badge: 'Quick Commerce',
    badgeColor: 'border-emerald-500/40 text-emerald-300 bg-emerald-500/10',
    gradient: 'from-emerald-500/20 to-teal-500/20',
    icon: Truck,
    features: [
      'Date & Time Slot delivery selection at checkout',
      'Direct WhatsApp order confirmation & PDF receipt',
      'Distance-based or fixed local delivery fee calculator',
      'Minimum order amount rules for free home delivery',
      'Quick repeat order from past purchase history',
      'Store manager mobile notification alert for every order'
    ],
    idealFor: 'Grocery stores, organic farms, bakeries, sweet shops, meat & fruits'
  },
  {
    id: 'b2b-wholesale-portal',
    title: 'B2B Wholesale & Distributor Portal',
    tagline: 'Tiered wholesale pricing, MOQ rules, GST auto-calculation, and credit payment flows.',
    startingPrice: '₹24,999+',
    badge: 'B2B Powerhouse',
    badgeColor: 'border-purple-500/40 text-purple-300 bg-purple-500/10',
    gradient: 'from-purple-500/20 to-indigo-500/20',
    icon: Building2,
    features: [
      'Tiered bulk quantity pricing tables (Buy 50+ @ ₹450)',
      'Mandatory GST Number collection & B2B tax invoices',
      'Minimum Order Quantity (MOQ) validation per item',
      'Request for Quotation (RFQ) & custom negotiation form',
      'Distributor user accounts with role-based price tiers',
      'Bank Transfer / NEFT / RTGS payment slip upload'
    ],
    idealFor: 'Wholesalers, factories, industrial suppliers, corporate gift suppliers'
  },
  {
    id: 'digital-goods-subscriptions',
    title: 'Digital Goods, Courses & Subscriptions',
    tagline: 'Automated instant digital file delivery, software licenses, and recurring membership plans.',
    startingPrice: '₹14,999+',
    badge: 'Zero Inventory',
    badgeColor: 'border-sky-500/40 text-sky-300 bg-sky-500/10',
    gradient: 'from-sky-500/20 to-cyan-500/20',
    icon: Zap,
    features: [
      'Automated secure download links with expiring tokens',
      'Serial / license key generator and automated dispatch',
      'Monthly / Annual recurring auto-debit subscription billing',
      'Protected customer member library & login dashboard',
      'Global multi-currency checkout (USD, EUR, GBP, INR)',
      'Zero shipping fees & 100% automated instant fulfillment'
    ],
    idealFor: 'E-books, software licenses, audio presets, design templates, video courses'
  },
  {
    id: 'custom-headless-commerce',
    title: 'Custom Headless Next.js Store',
    tagline: 'Ultra-modern sub-second page loads built with React, Next.js, and headless commerce APIs.',
    startingPrice: '₹34,999+',
    badge: 'Enterprise Performance',
    badgeColor: 'border-yellow-500/40 text-yellow-300 bg-yellow-500/10',
    gradient: 'from-yellow-500/20 to-amber-500/20',
    icon: Code2,
    features: [
      'Blazing fast sub-second (0.3s) page load speeds',
      '99+ Google Core Web Vitals & Lighthouse score',
      'Next.js 14 / React frontend with scalable cloud backend',
      'Custom bespoke UI animations & interaction shaders',
      'Direct headless integration with Shopify / Supabase / Strapi',
      'Enterprise cloud CDN distribution across India & worldwide'
    ],
    idealFor: 'High-traffic brands doing ₹10L+ monthly GMV seeking highest speeds'
  },
  {
    id: 'multivendor-marketplace',
    title: 'Multi-Vendor E-Commerce Marketplace',
    tagline: 'Amazon/Flipkart style platform with individual seller portals, commissions, and automated payouts.',
    startingPrice: '₹49,999+',
    badge: 'Marketplace Platform',
    badgeColor: 'border-teal-500/40 text-teal-300 bg-teal-500/10',
    gradient: 'from-teal-500/20 to-emerald-500/20',
    icon: Store,
    features: [
      'Dedicated seller onboarding & vendor management dashboard',
      'Automated platform commission deduction per sale',
      'Vendor product upload with admin approval workflow',
      'Automated multi-vendor shipping split & tracking',
      'Customer rating & review engine for each individual seller',
      'Super Admin master control with real-time gross revenue logs'
    ],
    idealFor: 'Niche marketplaces, regional artisan hubs, multi-brand aggregators'
  }
];

// Payment Gateway Integrations
const PAYMENT_SOLUTIONS = [
  {
    name: 'UPI Intent & QR Codes',
    description: 'Instant 1-click mobile checkout with Google Pay, PhonePe, Paytm, BHIM & Cred UPI.',
    fee: '0% - Low fee',
    badge: 'Most Preferred in India',
    icon: QrCode,
    color: 'from-purple-500/20 to-indigo-500/20',
    border: 'border-purple-500/30 text-purple-400'
  },
  {
    name: 'Credit & Debit Cards',
    description: 'Visa, MasterCard, RuPay, Maestro & American Express with 3D Secure OTP verification.',
    fee: 'Standard 2%',
    badge: '100% Bank Protected',
    icon: CreditCard,
    color: 'from-blue-500/20 to-cyan-500/20',
    border: 'border-blue-500/30 text-blue-400'
  },
  {
    name: 'NetBanking (50+ Banks)',
    description: 'Direct corporate & retail net banking through SBI, HDFC, ICICI, Axis, Kotak and all major banks.',
    fee: 'Direct Integration',
    badge: 'All Banks Supported',
    icon: Building2,
    color: 'from-emerald-500/20 to-teal-500/20',
    border: 'border-emerald-500/30 text-emerald-400'
  },
  {
    name: 'Cardless EMI & PayLater',
    description: 'Increase high-ticket conversions with Simpl, LazyPay, ZestMoney, and 12+ Bank EMIs.',
    fee: 'High Conversion',
    badge: 'Boosts Order Value',
    icon: BadgePercent,
    color: 'from-amber-500/20 to-orange-500/20',
    border: 'border-amber-500/30 text-amber-400'
  },
  {
    name: 'Cash on Delivery (COD) + OTP',
    description: 'Smart COD verification with automated WhatsApp OTP to eliminate fake orders & reduce RTO.',
    fee: 'Zero Risk Setup',
    badge: 'RTO Protection Engine',
    icon: ShieldCheck,
    color: 'from-rose-500/20 to-pink-500/20',
    border: 'border-rose-500/30 text-rose-400'
  },
  {
    name: 'International Multi-Currency',
    description: 'Sell globally in USD, EUR, GBP, AED, SGD with automated currency converter and Stripe/PayPal.',
    fee: 'Global Ready',
    badge: 'Export & NRI Sales',
    icon: Globe,
    color: 'from-cyan-500/20 to-sky-500/20',
    border: 'border-cyan-500/30 text-cyan-400'
  }
];

// Supported Gateway Partners
const GATEWAY_BRANDS = [
  { name: 'Razorpay', tag: 'Fast UPI & All Modes', popular: true },
  { name: 'Cashfree', tag: 'Lowest Failure Rate', popular: true },
  { name: 'PhonePe PG', tag: 'Instant UPI Intent', popular: true },
  { name: 'PayU India', tag: 'Enterprise Scale', popular: false },
  { name: 'Stripe', tag: 'Global Cards & Subscriptions', popular: true },
  { name: 'Paytm PG', tag: 'Paytm Wallet & UPI', popular: false },
  { name: 'Instamojo', tag: 'Quick Micro-Store PG', popular: false },
  { name: 'Shiprocket', tag: 'Automated Courier Shipping', popular: true }
];

export const EcommerceSolutionsPage: React.FC<EcommerceSolutionsPageProps> = ({ onNavigate }) => {
  // Slider State
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [activeTabFeature, setActiveTabFeature] = useState<'checkout' | 'catalog' | 'shipping' | 'admin'>('checkout');

  // Consultation Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>('D2C Brand Flagship Store');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    storeType: 'D2C Brand Flagship Store',
    productCount: '1 - 50 Products',
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

  // Interactive AI & ROI Tool 1: Product Description Generator State
  const [productTitle, setProductTitle] = useState('Handcrafted Pure Leather Laptop Bag');
  const [productCategory, setProductCategory] = useState('Fashion & Accessories');
  const [productKeyFeature, setProductKeyFeature] = useState('Water-resistant, padded 15.6 inch compartment, 100% genuine full-grain leather, antique brass hardware');
  const [generatedCopy, setGeneratedCopy] = useState<string | null>(null);
  const [isGeneratingCopy, setIsGeneratingCopy] = useState(false);

  // Interactive AI & ROI Tool 2: Profit & Margin Calculator State
  const [sellingPrice, setSellingPrice] = useState(1499);
  const [cogsPrice, setCogsPrice] = useState(480);
  const [adSpendPerOrder, setAdSpendPerOrder] = useState(350);
  const [shippingCost, setShippingCost] = useState(110);
  const [monthlyOrders, setMonthlyOrders] = useState(250);

  // Interactive Tool 3: Store Launch Cost Estimator State
  const [calcTier, setCalcTier] = useState<'starter' | 'pro' | 'enterprise'>('pro');
  const [calcProducts, setCalcProducts] = useState<'1-50' | '50-500' | '500+'>('50-500');
  const [needPaymentGateway, setNeedPaymentGateway] = useState(true);
  const [needCourierSync, setNeedCourierSync] = useState(true);
  const [needWhatsappAlerts, setNeedWhatsappAlerts] = useState(true);

  // Touch Swipe Handlers for Showcase Slider
  const touchStartX = useRef<number | null>(null);

  // Autoplay Slider Timer
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveSlideIndex((prev) => (prev + 1) % ECOMMERCE_SHOWCASE_SLIDES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrevSlide = () => {
    setActiveSlideIndex((prev) => (prev === 0 ? ECOMMERCE_SHOWCASE_SLIDES.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setActiveSlideIndex((prev) => (prev + 1) % ECOMMERCE_SHOWCASE_SLIDES.length);
  };

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
    setFormData(prev => ({ ...prev, storeType: planName }));
    setIsModalOpen(true);
  };

  // Submission handler with Supabase Edge Function
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
      serviceCategory: `E-Commerce Solution — ${formData.storeType}`,
      subject: `New E-Commerce Store Enquiry: ${formData.storeType} — ${formData.name}`,
      message: `${formData.requirements || 'Client requested quote for E-Commerce Store.'}\nProduct Count: ${formData.productCount}\nStore Type: ${formData.storeType}`,
      sourcePage: 'E-Commerce Solutions Master Service Page',
      formType: 'E-Commerce Solutions Lead Form',
      website_hp: formData.website_hp,
      additionalFields: {
        'Store Type': formData.storeType,
        'Estimated Product Count': formData.productCount
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
        storeType: 'D2C Brand Flagship Store',
        productCount: '1 - 50 Products',
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

  // AI Product Description Generator Simulation
  const handleGenerateAiCopy = () => {
    setIsGeneratingCopy(true);
    setTimeout(() => {
      const generated = `🔥 **${productTitle}**\n\nElevate your daily hustle with the master-crafted ${productTitle}. Engineered from premium materials, this high-performance lifestyle essential blends enduring elegance with modern utility.\n\n✨ **Key Highlights:**\n• ${productKeyFeature.split(', ').join('\n• ')}\n• Precision stitching & reinforced stress points for lifetime durability\n• Weather-sealed construction to keep your valuables 100% protected\n• Ergonomic weight distribution for all-day comfort\n\n🛡️ **Risk-Free Assurance:** 7-Day Hassle-Free Exchange • 1-Year Warranty • Free Express Shipping across India.\n\n👉 **Order today and get an instant 10% discount with code: FIRSTBUY10**`;
      setGeneratedCopy(generated);
      setIsGeneratingCopy(false);
    }, 600);
  };

  // ROI Calculator Math
  const gatewayFeePerOrder = Math.round(sellingPrice * 0.02);
  const totalCostPerOrder = cogsPrice + adSpendPerOrder + shippingCost + gatewayFeePerOrder;
  const netProfitPerOrder = sellingPrice - totalCostPerOrder;
  const netMarginPercent = Math.round((netProfitPerOrder / sellingPrice) * 100);
  const monthlyGrossRevenue = sellingPrice * monthlyOrders;
  const monthlyNetProfit = netProfitPerOrder * monthlyOrders;

  // Cost Estimator Math
  const calculateEstimatedQuote = () => {
    let base = calcTier === 'starter' ? 14999 : calcTier === 'pro' ? 24999 : 49999;
    if (calcProducts === '50-500') base += 5000;
    if (calcProducts === '500+') base += 12000;
    if (needPaymentGateway) base += 0; // included
    if (needCourierSync) base += 0; // included
    if (needWhatsappAlerts) base += 2500;
    return base;
  };

  // FAQ Category & Search Filter State
  const [faqCategory, setFaqCategory] = useState<'all' | 'payments' | 'shipping' | 'rto' | 'store' | 'tech'>('all');
  const [faqSearchQuery, setFaqSearchQuery] = useState('');

  // 17 In-depth Categorized E-Commerce FAQs (Stretched Full-Scope)
  const ecommerceFaqs = [
    {
      id: 1,
      category: 'payments',
      categoryLabel: 'Payments & Settlement',
      q: 'Which payment gateways are supported, and how does money reach my bank account?',
      a: 'We integrate all leading Indian and global payment gateways including Razorpay, Cashfree, PhonePe PG, PayU, Paytm Payment Gateway, and Stripe. Customer payments made via UPI Intent (GPay, PhonePe, Paytm, Cred), Credit/Debit Cards, NetBanking (50+ banks), and digital wallets settle directly into your verified current or savings bank account automatically within T+1 to T+2 business days with 0% platform commission.',
      tag: 'Razorpay / Cashfree'
    },
    {
      id: 2,
      category: 'payments',
      categoryLabel: 'Payments & Settlement',
      q: 'Are there any monthly platform commissions or hidden transaction cuts charged by AVRX?',
      a: 'Zero. Unlike proprietary e-commerce platforms that charge 1.5% to 3% on every single order you process, AVRX charges 0% platform commission on your gross sales. You keep 100% of your earnings. You only pay the standard banking interchange fee (typically ~1.9% for cards/netbanking, while standard UPI via supported gateways is free or capped).',
      tag: '0% Commission'
    },
    {
      id: 3,
      category: 'payments',
      categoryLabel: 'Payments & Settlement',
      q: 'Can customers purchase via 0-Cost Cardless EMI and PayLater (Simpl / LazyPay)?',
      a: 'Yes. We enable Cardless EMI and BNPL (Buy Now Pay Later) integrations like Simpl, LazyPay, and ZestMoney through Razorpay & Cashfree. This allows your buyers to split payments into interest-free installments, boosting average order values (AOV) by up to 35% on high-ticket products.',
      tag: 'Cardless EMI / BNPL'
    },
    {
      id: 4,
      category: 'payments',
      categoryLabel: 'Payments & Settlement',
      q: 'Do you support International Payments (USD, EUR, GBP, AED) with automated currency conversion?',
      a: 'Yes. For cross-border export stores, we integrate Stripe, PayPal, and Razorpay International Payments. Your international buyers see localized currency pricing (USD, EUR, GBP, AED, etc.) with automated real-time exchange rates and international credit/debit card processing compliant with RBI and FEMA guidelines.',
      tag: 'Global Multi-Currency'
    },
    {
      id: 5,
      category: 'shipping',
      categoryLabel: 'Shipping & Logistics',
      q: 'How does automated courier shipping, AWB generation, and tracking work?',
      a: 'We connect your store with top logistics aggregators like Shiprocket, Delhivery, Pickrr, and Bluedart via direct API synchronization. When a customer places an order, you can generate shipping labels and courier AWB numbers in 1-click from your admin panel, schedule automatic doorstep pickup, and send automated real-time SMS & WhatsApp tracking links to the customer.',
      tag: 'Shiprocket / Delhivery'
    },
    {
      id: 6,
      category: 'shipping',
      categoryLabel: 'Shipping & Logistics',
      q: 'Can we set custom shipping rules like free delivery over ₹499 or pincode-based rates?',
      a: 'Yes, completely customizable. You can configure conditional delivery fees (e.g. Free Shipping above ₹499, Flat ₹60 under ₹499), express next-day shipping surcharge, weight-based calculations, or pincode-specific delivery rules directly from your store control panel.',
      tag: 'Custom Shipping Rules'
    },
    {
      id: 7,
      category: 'shipping',
      categoryLabel: 'Shipping & Logistics',
      q: 'Can we integrate scheduled delivery time slots for fresh grocery or hyperlocal items?',
      a: 'Yes. For hyperlocal stores, supermarkets, and bakery businesses, we integrate scheduled delivery calendars where customers can pick preferred time slots (e.g. "Today 6:00 PM – 8:00 PM" or "Tomorrow Morning"). Orders can also be mapped directly to Dunzo, Shadowfax, or in-house delivery drivers.',
      tag: 'Hyperlocal Slots'
    },
    {
      id: 8,
      category: 'rto',
      categoryLabel: 'COD & RTO Shield',
      q: 'How do you prevent fake orders and reduce RTO (Return to Origin) on Cash on Delivery?',
      a: 'High RTO is the #1 profit killer in Indian e-commerce. AVRX implements a 3-layer anti-RTO defense: (1) Instant WhatsApp OTP verification before a COD order is accepted, (2) Automated invalid/incomplete address warning, and (3) Optional nominal confirmation token (e.g. ₹99 upfront advance to confirm COD intent, with the balance paid at doorstep). This reduces RTO returns by up to 70%.',
      tag: '70% RTO Reduction'
    },
    {
      id: 9,
      category: 'rto',
      categoryLabel: 'COD & RTO Shield',
      q: 'Can we disable Cash on Delivery for specific high-ticket products or risky pin codes?',
      a: 'Yes. You have full granular control over payment methods. You can disable COD for high-value items (e.g. above ₹5,000), disable COD for pin codes with high historical courier return rates, or offer an automatic extra 5% instant discount when paying prepaid via UPI.',
      tag: 'Granular COD Rules'
    },
    {
      id: 10,
      category: 'store',
      categoryLabel: 'Store & Products',
      q: 'Can I add unlimited products, update prices, and upload banners myself without coding?',
      a: '100% yes. Every AVRX store includes an intuitive, mobile-friendly Admin Control Center. You can add unlimited products, upload multiple HD photo angles, set variant sizes & colors, edit inventory stock levels, change promotional banners, and import/export bulk catalogs via CSV spreadsheet in seconds without touching a single line of code.',
      tag: 'No-Code Admin Panel'
    },
    {
      id: 11,
      category: 'store',
      categoryLabel: 'Store & Products',
      q: 'Does AVRX provide automated GST-compliant B2B & B2C tax invoicing?',
      a: 'Yes. Every order automatically generates a downloadable PDF GST invoice with your company legal name, GSTIN number, HSN/SAC codes, and separate CGST/SGST/IGST tax breakdowns. For B2B wholesale buyers, an optional "Add Company GSTIN for Input Tax Credit" field is built right into the checkout.',
      tag: 'GST Invoicing Built-in'
    },
    {
      id: 12,
      category: 'store',
      categoryLabel: 'Store & Products',
      q: 'How does automated WhatsApp Abandoned Cart recovery work to rescue lost sales?',
      a: 'Over 65% of online shoppers drop off at checkout. We integrate automated WhatsApp cart abandonment triggers that send gentle, personalized reminders with a direct 1-click checkout recovery link (and optional time-limited discount coupon) within 15 minutes and 24 hours of cart abandonment, recovering up to 25% of otherwise lost revenue.',
      tag: 'WhatsApp Cart Recovery'
    },
    {
      id: 13,
      category: 'store',
      categoryLabel: 'Store & Products',
      q: 'Can we run flash sales, countdown timers, bundle offers, and coupon codes?',
      a: 'Yes. Your store includes rich promotional marketing tools: percentage discounts, flat amount vouchers, Buy-1-Get-1 (BOGO) rules, minimum cart quantity thresholds, dynamic countdown timers on high-demand products, and exit-intent promotional popups.',
      tag: 'Flash Sales & Bundles'
    },
    {
      id: 14,
      category: 'tech',
      categoryLabel: 'Tech & Ownership',
      q: 'Do I get 100% complete ownership of my store domain, customer database, and code?',
      a: 'Absolutely. Unlike SaaS platforms where your business data is locked inside their proprietary servers, AVRX builds your store with complete asset transparency. You receive 100% administrative control, full customer database ownership (emails, phone numbers, order histories), custom domain connection, and zero platform lock-in.',
      tag: '100% Data Ownership'
    },
    {
      id: 15,
      category: 'tech',
      categoryLabel: 'Tech & Ownership',
      q: 'Will my store load instantly in sub-0.4s on mobile phones and 4G networks?',
      a: 'Yes. We engineer e-commerce storefronts using modern frameworks (Next.js / Headless architectures or lightweight optimized engines) with WebP image compression, edge CDN caching across Indian server nodes, and lazy loading. Your store achieves 90+ Google PageSpeed scores for swift conversions on mobile.',
      tag: 'Sub-0.4s Speed'
    },
    {
      id: 16,
      category: 'tech',
      categoryLabel: 'Tech & Ownership',
      q: 'Can you convert our e-commerce website into native Android and iOS mobile apps?',
      a: 'Yes! We can package and develop native or hybrid Progressive Web Apps (PWA) / Flutter mobile shopping apps for Google Play Store and Apple App Store, synchronizing product inventory, orders, and push notifications in real-time with your website database.',
      tag: 'Android & iOS App'
    },
    {
      id: 17,
      category: 'tech',
      categoryLabel: 'Tech & Ownership',
      q: 'What is the standard turnaround time to build and take my store live with live payments?',
      a: 'Standard D2C Brand and Retail stores are fully designed, integrated with live payment gateways & courier logistics, catalog populated, and launched within 7 to 12 working days. Enterprise-scale custom headless stores and multi-vendor marketplaces take 15 to 25 working days with dedicated milestone sign-offs.',
      tag: '7 - 12 Days Delivery'
    }
  ];

  return (
    <div className="min-h-screen bg-[#050811] text-slate-100 selection:bg-amber-500 selection:text-slate-950 font-sans pb-24 relative overflow-hidden">
      
      {/* SEO Configuration */}
      <SEO 
        title="E-Commerce Solutions & Online Store Development | AVRX India"
        description="Launch your high-converting online store with instant UPI/Card payment gateway, Shiprocket courier tracking, abandoned cart WhatsApp recovery, and mobile-first speed. Starting at ₹14,999."
        keywords="ecommerce website design, online store development, d2c brand store, razorpay store integration, shopify alternative, b2b ecommerce portal, hyperlocal grocery app, woocommerce development india"
      />

      {/* Global Ambient Glow & Background Highlights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-amber-500/10 via-orange-500/5 to-transparent blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-[800px] right-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-[2200px] left-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] pointer-events-none -z-10" />

      {/* 1. HERO SECTION: BOLD, VIBRANT, CONVERSION-ENGINEERED */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-10 xl:px-12 max-w-[1720px] mx-auto">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 mb-6 flex-wrap">
          <button onClick={() => onNavigate('home')} className="hover:text-amber-400 transition-colors">Home</button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <button onClick={() => onNavigate('digital-solutions')} className="hover:text-amber-400 transition-colors">Digital Solutions</button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-amber-400 font-medium">E-Commerce Solutions</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline, Highlights & Quick Action */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Live Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500/15 to-orange-500/15 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-medium shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span>Next-Gen High-Converting E-Commerce Stores • 2026 Edition</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
              Turn Visitors into Paying Customers with{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200">
                High-Speed E-Commerce
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              We engineer custom, ultra-fast online storefronts equipped with <span className="text-amber-300 font-medium">instant 1-click UPI checkout</span>, automated Shiprocket courier dispatch, WhatsApp abandoned cart recovery, and zero monthly revenue commission.
            </p>

            {/* Live Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2">
              <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3 text-center">
                <div className="text-xl sm:text-2xl font-black text-amber-400">+4.8x</div>
                <div className="text-[11px] text-slate-400 font-medium">Checkout Speed</div>
              </div>
              <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3 text-center">
                <div className="text-xl sm:text-2xl font-black text-emerald-400">100%</div>
                <div className="text-[11px] text-slate-400 font-medium">UPI / Cards / COD</div>
              </div>
              <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3 text-center">
                <div className="text-xl sm:text-2xl font-black text-cyan-400">&lt; 0.4s</div>
                <div className="text-[11px] text-slate-400 font-medium">Page Load Speed</div>
              </div>
              <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3 text-center">
                <div className="text-xl sm:text-2xl font-black text-purple-400">0%</div>
                <div className="text-[11px] text-slate-400 font-medium">Commission Cut</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={() => handleOpenFormWithPlan('D2C Brand Flagship Store')}
                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 text-slate-950 font-bold hover:opacity-95 transition-all shadow-[0_0_30px_rgba(245,158,11,0.3)] flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Launch Your Online Store</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#store-tiers"
                className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold transition-all flex items-center justify-center gap-2 text-center"
              >
                <span>Explore Store Tiers</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </a>

              <a
                href="#ecommerce-tools"
                className="px-5 py-3.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 font-semibold transition-all flex items-center justify-center gap-2 text-center"
              >
                <Cpu className="w-4 h-4 text-amber-400" />
                <span>AI E-Commerce Tools</span>
              </a>
            </div>

            {/* Trust Badges Bar */}
            <div className="flex items-center gap-4 text-xs text-slate-400 flex-wrap pt-2">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>256-Bit SSL Encrypted</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CreditCard className="w-4 h-4 text-cyan-400" />
                <span>Razorpay / UPI Verified</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-amber-400" />
                <span>Shiprocket Courier Sync</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Live Store Mockup Preview */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border border-amber-500/30 p-4 sm:p-6 shadow-[0_0_50px_rgba(245,158,11,0.15)] group">
              
              {/* Top Window Bar */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-[11px] text-amber-400 font-mono flex items-center gap-1.5">
                  <Lock className="w-3 h-3 text-emerald-400" />
                  <span>https://yourstore.avrx.in</span>
                </div>
                <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">LIVE STORE</span>
              </div>

              {/* Product Store Mockup Body */}
              <div className="space-y-4">
                <div className="relative rounded-xl overflow-hidden aspect-video bg-slate-950">
                  <img
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
                    alt="E-Commerce Storefront Preview"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-2 left-2 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-semibold text-amber-300 border border-amber-500/30 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>D2C Best Seller</span>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-emerald-500/90 text-slate-950 text-[11px] font-bold px-2 py-0.5 rounded-full shadow">
                    Instant UPI Enabled
                  </div>
                </div>

                {/* Store Mini Specs */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-semibold text-white">Aura Luxe D2C Storefront</span>
                    <span className="text-amber-400 font-bold">₹14,999 Starting</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Includes dynamic product catalog, instant mobile checkout, courier tracking, and WhatsApp cart recovery.
                  </p>
                </div>

                {/* Interactive Feature Pills */}
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-950/60 border border-slate-800 text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Razorpay & Cashfree</span>
                  </div>
                  <div className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-950/60 border border-slate-800 text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Shiprocket Logistics</span>
                  </div>
                  <div className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-950/60 border border-slate-800 text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>WhatsApp Order Sync</span>
                  </div>
                  <div className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-950/60 border border-slate-800 text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    <span>GST Invoices Included</span>
                  </div>
                </div>

                {/* Direct Action */}
                <button
                  onClick={() => handleOpenFormWithPlan('D2C Brand Flagship Store')}
                  className="w-full py-2.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 text-xs font-bold transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Request Live Store Consultation</span>
                </button>
              </div>

            </div>
          </div>

        </div>

      </section>

      {/* 2. CLIENT & TECHNOLOGY MARQUEE SCROLLER */}
      <section className="py-8 bg-slate-950/80 border-y border-slate-800/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Powered by Leading Global E-Commerce & Payment Ecosystems
          </span>
        </div>
        <PartnersSlider />
      </section>

      {/* 3. INTERACTIVE E-COMMERCE SHOWCASE SLIDER (10 DIVERSE STOREFRONT MOCKUPS) */}
      <section 
        className="py-20 px-4 sm:px-6 lg:px-10 xl:px-12 max-w-[1720px] mx-auto"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold">
            <Eye className="w-3.5 h-3.5" />
            <span>Interactive Store Showcase</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
            10 Proven Store Architectures Designed to Convert
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Swipe through real-world e-commerce blueprints engineered across various industries for maximum average order value and frictionless checkout.
          </p>
        </div>

        {/* Slider Card Container */}
        {(() => {
          const slide = ECOMMERCE_SHOWCASE_SLIDES[activeSlideIndex];
          return (
            <div className={`relative rounded-3xl bg-gradient-to-br ${slide.bgGradient} border border-slate-700/80 p-6 sm:p-10 shadow-2xl transition-all duration-500`}>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Side: Store Details & Metrics */}
                <div className="lg:col-span-6 space-y-6">
                  
                  {/* Category & Badge */}
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-900 border border-slate-700 text-slate-200">
                      {slide.category}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-amber-400" />
                      {slide.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                    {slide.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {slide.tagline}
                  </p>

                  {/* Metrics Row */}
                  <div className="grid grid-cols-3 gap-3">
                    {slide.metrics.map((m, idx) => (
                      <div key={idx} className="bg-slate-950/70 border border-slate-800 rounded-xl p-3 text-center">
                        <div className="text-lg sm:text-xl font-bold text-amber-400">{m.value}</div>
                        <div className="text-[11px] text-slate-400">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Feature Bullets */}
                  <div className="space-y-2">
                    {slide.keyFeatures.map((f, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action */}
                  <div className="pt-2">
                    <button
                      onClick={() => handleOpenFormWithPlan(`${slide.category} (${slide.title})`)}
                      className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold transition-all text-sm flex items-center gap-2 cursor-pointer shadow-lg"
                    >
                      <span>Get A Quote for This Store Type</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>

                {/* Right Side: Mockup Image with Visual Frame */}
                <div className="lg:col-span-6">
                  <div className="relative rounded-2xl overflow-hidden border border-slate-700 bg-slate-950 shadow-2xl group">
                    <img 
                      src={slide.previewUrl} 
                      alt={slide.title}
                      className="w-full h-72 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-800 flex justify-between items-center text-xs">
                      <span className="text-slate-300 font-medium">{slide.title}</span>
                      <span className="text-amber-400 font-bold">100% Mobile Ready</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Slider Controls */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-800/80 flex-wrap gap-4">
                
                {/* Dots / Indicators */}
                <div className="flex items-center gap-1.5 overflow-x-auto max-w-full py-1">
                  {ECOMMERCE_SHOWCASE_SLIDES.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveSlideIndex(idx)}
                      className={`h-2.5 rounded-full transition-all cursor-pointer ${
                        idx === activeSlideIndex 
                          ? 'w-8 bg-amber-400' 
                          : 'w-2.5 bg-slate-700 hover:bg-slate-500'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Prev / Next Arrows */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrevSlide}
                    className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 transition-colors cursor-pointer"
                    aria-label="Previous Slide"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <span className="text-xs font-mono text-slate-400 px-2">
                    {activeSlideIndex + 1} / {ECOMMERCE_SHOWCASE_SLIDES.length}
                  </span>
                  <button
                    onClick={handleNextSlide}
                    className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 transition-colors cursor-pointer"
                    aria-label="Next Slide"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

              </div>

            </div>
          );
        })()}
      </section>

      {/* 4. SUB-CATEGORIES & STORE MODELS GRID (VIBRANT & COMPREHENSIVE) */}
      <section id="store-tiers" className="py-20 px-4 sm:px-6 lg:px-10 xl:px-12 max-w-[1720px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
            <Layers className="w-3.5 h-3.5" />
            <span>Tailored Store Frameworks</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
            Choose the Perfect E-Commerce Model for Your Business
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            From single-product D2C brand stores to massive wholesale B2B portals, every architecture is engineered for conversion, speed, and automated fulfillment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ECOMMERCE_SUB_CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <div 
                key={cat.id}
                className="rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/40 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(245,158,11,0.1)] group relative overflow-hidden"
              >
                <div className="space-y-4">
                  
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-amber-400 group-hover:border-amber-500/40 group-hover:bg-amber-500/10 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${cat.badgeColor}`}>
                      {cat.badge}
                    </span>
                  </div>

                  {/* Title & Price */}
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                      {cat.title}
                    </h3>
                    <div className="text-xs font-semibold text-amber-400 mt-1">
                      Starting from {cat.startingPrice}
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {cat.tagline}
                  </p>

                  {/* Checklist */}
                  <div className="space-y-2 pt-2 border-t border-slate-800/80">
                    {cat.features.slice(0, 4).map((f, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-300 leading-tight">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* Ideal For */}
                  <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 text-[11px] text-slate-400">
                    <strong className="text-slate-300 font-semibold">Best For:</strong> {cat.idealFor}
                  </div>

                </div>

                {/* CTA Button */}
                <div className="pt-6 mt-4">
                  <button
                    onClick={() => handleOpenFormWithPlan(cat.title)}
                    className="w-full py-2.5 rounded-xl bg-slate-950 hover:bg-amber-500 hover:text-slate-950 border border-slate-700 hover:border-amber-500 text-slate-200 text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Get {cat.title.split(' ')[0]} Store</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>
      </section>

      {/* 5. PAYMENT SOLUTIONS & GATEWAYS ECOSYSTEM (DEEP & COMPREHENSIVE) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-slate-950/60 rounded-3xl border border-slate-800/80 my-10 relative">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
            <CreditCard className="w-3.5 h-3.5" />
            <span>Frictionless Payment Ecosystem</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
            100% Payment Coverage: Zero Dropout at Checkout
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Integrate all major Indian & Global payment gateways with instant UPI QR, Cardless EMIs, NetBanking, and automated OTP-verified COD protection.
          </p>
        </div>

        {/* 6 Payment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {PAYMENT_SOLUTIONS.map((ps, idx) => {
            const Icon = ps.icon;
            return (
              <div key={idx} className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4 hover:border-slate-700 transition-colors">
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${ps.color} border ${ps.border}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-950 border border-slate-800 text-slate-300">
                    {ps.badge}
                  </span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">{ps.name}</h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">{ps.description}</p>
                </div>
                <div className="text-[11px] text-amber-400 font-semibold bg-slate-950/70 p-2 rounded-lg border border-slate-800 flex items-center justify-between">
                  <span>Advantage:</span>
                  <span className="text-slate-200">{ps.fee}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Gateway Brand Logos / Tags Strip */}
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-4">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Supported Gateway & Logistics Partners
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {GATEWAY_BRANDS.map((gw, idx) => (
              <div key={idx} className="px-3.5 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-semibold text-slate-200 flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>{gw.name}</span>
                <span className="text-[10px] text-slate-400 font-normal">({gw.tag})</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. INTERACTIVE AI TOOLS SUITE FOR E-COMMERCE */}
      <section id="ecommerce-tools" className="py-20 px-4 sm:px-6 lg:px-10 xl:px-12 max-w-[1720px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Interactive AI & Growth Tools</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
            Built-In AI & Margin Calculators for Store Owners
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Use these interactive utilities right now to generate compelling product copy, estimate net profit margins, and calculate your custom store launch estimate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Tool 1: AI Product Title & Description Generator */}
          <div className="bg-slate-900/90 border border-purple-500/30 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-300">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">AI Product Copy & SEO Generator</h3>
                <p className="text-xs text-slate-400">Generate high-converting product descriptions & bullet points.</p>
              </div>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Product Title</label>
                <input
                  type="text"
                  value={productTitle}
                  onChange={(e) => setProductTitle(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 focus:outline-none focus:border-purple-500"
                  placeholder="e.g. Handcrafted Leather Laptop Bag"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Category</label>
                <select
                  value={productCategory}
                  onChange={(e) => setProductCategory(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 focus:outline-none focus:border-purple-500"
                >
                  <option>Fashion & Accessories</option>
                  <option>Electronics & Gadgets</option>
                  <option>Health & Beauty</option>
                  <option>Home & Kitchen</option>
                  <option>Food & Gourmet</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Key Features / Materials (Comma separated)</label>
                <textarea
                  rows={2}
                  value={productKeyFeature}
                  onChange={(e) => setProductKeyFeature(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 focus:outline-none focus:border-purple-500 resize-none"
                  placeholder="e.g. 100% genuine leather, waterproof, 15-inch laptop pocket"
                />
              </div>

              <button
                onClick={handleGenerateAiCopy}
                disabled={isGeneratingCopy}
                className="w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                {isGeneratingCopy ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Generating High-Converting Copy...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Generate AI Product Description</span>
                  </>
                )}
              </button>

              {/* Generated Output Preview */}
              {generatedCopy && (
                <div className="p-4 rounded-xl bg-slate-950 border border-purple-500/40 text-slate-200 text-xs font-mono space-y-2 whitespace-pre-wrap animate-in fade-in duration-300">
                  <div className="flex justify-between items-center pb-1 border-b border-slate-800 text-[10px] text-purple-400">
                    <span>Generated Sales Copy:</span>
                    <span>Ready to Paste</span>
                  </div>
                  <div>{generatedCopy}</div>
                </div>
              )}
            </div>
          </div>

          {/* Tool 2: E-Commerce Profit & Margin Calculator */}
          <div className="bg-slate-900/90 border border-amber-500/30 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-300">
                <BarChart3 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">E-Commerce Net Profit & Margin Calculator</h3>
                <p className="text-xs text-slate-400">Calculate realistic unit economics, CAC, shipping, and monthly profits.</p>
              </div>
            </div>

            <div className="space-y-4 text-xs">
              
              {/* Sliders */}
              <div>
                <div className="flex justify-between text-slate-300 font-semibold mb-1">
                  <span>Product Selling Price:</span>
                  <span className="text-amber-400 font-bold">₹{sellingPrice}</span>
                </div>
                <input 
                  type="range" 
                  min="299" 
                  max="15000" 
                  step="50" 
                  value={sellingPrice} 
                  onChange={(e) => setSellingPrice(Number(e.target.value))}
                  className="w-full accent-amber-400 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-slate-300 font-semibold mb-1">
                  <span>Product Sourcing / Manufacturing Cost (COGS):</span>
                  <span className="text-slate-200 font-bold">₹{cogsPrice}</span>
                </div>
                <input 
                  type="range" 
                  min="50" 
                  max="10000" 
                  step="50" 
                  value={cogsPrice} 
                  onChange={(e) => setCogsPrice(Number(e.target.value))}
                  className="w-full accent-amber-400 cursor-pointer"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <div className="flex justify-between text-slate-300 font-semibold mb-1">
                    <span>Ad Spend (CAC):</span>
                    <span className="text-slate-200 font-bold">₹{adSpendPerOrder}</span>
                  </div>
                  <input 
                    type="range" 
                    min="0" 
                    max="3000" 
                    step="25" 
                    value={adSpendPerOrder} 
                    onChange={(e) => setAdSpendPerOrder(Number(e.target.value))}
                    className="w-full accent-amber-400 cursor-pointer"
                  />
                </div>
                <div>
                  <div className="flex justify-between text-slate-300 font-semibold mb-1">
                    <span>Courier & Packing:</span>
                    <span className="text-slate-200 font-bold">₹{shippingCost}</span>
                  </div>
                  <input 
                    type="range" 
                    min="40" 
                    max="500" 
                    step="10" 
                    value={shippingCost} 
                    onChange={(e) => setShippingCost(Number(e.target.value))}
                    className="w-full accent-amber-400 cursor-pointer"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-slate-300 font-semibold mb-1">
                  <span>Expected Monthly Orders:</span>
                  <span className="text-cyan-400 font-bold">{monthlyOrders} orders/mo</span>
                </div>
                <input 
                  type="range" 
                  min="20" 
                  max="2000" 
                  step="10" 
                  value={monthlyOrders} 
                  onChange={(e) => setMonthlyOrders(Number(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
              </div>

              {/* Profit Scorebox */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-center">
                  <div className="text-[10px] text-slate-400">Net Profit / Order</div>
                  <div className={`text-base font-black ${netProfitPerOrder > 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                    ₹{netProfitPerOrder}
                  </div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-center">
                  <div className="text-[10px] text-slate-400">Net Margin %</div>
                  <div className={`text-base font-black ${netMarginPercent > 15 ? 'text-emerald-400' : 'text-amber-400'}`}>
                    {netMarginPercent}%
                  </div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-center">
                  <div className="text-[10px] text-slate-400">Gross Revenue</div>
                  <div className="text-base font-black text-amber-400">
                    ₹{(monthlyGrossRevenue / 100000).toFixed(2)}L
                  </div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-center">
                  <div className="text-[10px] text-slate-400">Est. Net Profit / Mo</div>
                  <div className="text-base font-black text-emerald-400">
                    ₹{(monthlyNetProfit / 100000).toFixed(2)}L
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 7. TRANSPARENT PRICING TIERS */}
      <section className="py-20 px-4 sm:px-6 lg:px-10 xl:px-12 max-w-[1720px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold">
            <DollarSign className="w-3.5 h-3.5" />
            <span>Clear & Honest Pricing</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
            Transparent E-Commerce Store Packages
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            No hidden recurring development charges. You get a complete, production-grade online storefront ready to accept orders from Day 1.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Plan 1: Starter Store */}
          <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-8 flex flex-col justify-between space-y-6 hover:border-slate-700 transition-all">
            <div className="space-y-4">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-800 text-slate-300 uppercase tracking-wider">
                Micro & Boutique
              </span>
              <h3 className="text-xl font-bold text-white">Starter E-Commerce Store</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-extrabold text-white">₹14,999</span>
                <span className="text-xs text-slate-400">/ one-time</span>
              </div>
              <p className="text-xs text-slate-400">
                Perfect for home businesses, boutique fashion, creators, and single-category brands.
              </p>
              <div className="space-y-2.5 pt-4 border-t border-slate-800 text-xs text-slate-300">
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> Up to 50 Products with Variations</div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> Razorpay / Cashfree UPI & Cards PG</div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> Automated Shiprocket Courier Sync</div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> Mobile-Optimized Fast Shopping Cart</div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> Admin Dashboard for Order Management</div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> Free SSL & HTTPS Security Setup</div>
              </div>
            </div>
            <button
              onClick={() => handleOpenFormWithPlan('Starter E-Commerce Store (₹14,999)')}
              className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-colors cursor-pointer"
            >
              Get Starter Store
            </button>
          </div>

          {/* Plan 2: Professional D2C (Featured) */}
          <div className="rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900 to-amber-950/40 border-2 border-amber-500/60 p-8 flex flex-col justify-between space-y-6 shadow-[0_0_40px_rgba(245,158,11,0.2)] relative transform lg:-translate-y-2">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 text-xs font-black uppercase tracking-wider shadow">
              Most Popular for D2C Brands
            </div>
            <div className="space-y-4">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 uppercase tracking-wider">
                Full-Featured D2C
              </span>
              <h3 className="text-2xl font-bold text-white">Professional D2C Store</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-amber-400">₹24,999</span>
                <span className="text-xs text-slate-400">/ one-time</span>
              </div>
              <p className="text-xs text-slate-300">
                Ideal for growing brands doing online marketing, paid Meta/Google ads, and high daily orders.
              </p>
              <div className="space-y-2.5 pt-4 border-t border-slate-800 text-xs text-slate-200">
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-400 shrink-0" /> <strong>Unlimited Products</strong> & Categories</div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-400 shrink-0" /> <strong>WhatsApp Cart Recovery</strong> Automated Engine</div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-400 shrink-0" /> Multi-Gateway: Razorpay, PhonePe & Stripe</div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-400 shrink-0" /> Pincode Checker & Free Delivery Threshold</div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-400 shrink-0" /> Instagram Shop & Meta Pixel Ad Setup</div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-400 shrink-0" /> Automated GST Invoicing & Packing Slips</div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-400 shrink-0" /> Sub-Second Fast Cloud Speed Caching</div>
              </div>
            </div>
            <button
              onClick={() => handleOpenFormWithPlan('Professional D2C Store (₹24,999)')}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 text-slate-950 font-extrabold text-sm transition-all shadow-lg hover:opacity-95 cursor-pointer"
            >
              Get Professional D2C Store
            </button>
          </div>

          {/* Plan 3: Enterprise / Multi-Vendor */}
          <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-8 flex flex-col justify-between space-y-6 hover:border-slate-700 transition-all">
            <div className="space-y-4">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 uppercase tracking-wider">
                Enterprise & Marketplace
              </span>
              <h3 className="text-xl font-bold text-white">Custom / Multi-Vendor Hub</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-extrabold text-white">₹49,999+</span>
                <span className="text-xs text-slate-400">/ custom</span>
              </div>
              <p className="text-xs text-slate-400">
                For large enterprises, multi-vendor marketplaces, wholesale B2B portals, and headless setups.
              </p>
              <div className="space-y-2.5 pt-4 border-t border-slate-800 text-xs text-slate-300">
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-400 shrink-0" /> Bespoke Headless Next.js Architecture</div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-400 shrink-0" /> Vendor Onboarding & Commission Engine</div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-400 shrink-0" /> ERP, CRM & Custom Database Integrations</div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-400 shrink-0" /> Multi-Warehouse Stock Splitting</div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-400 shrink-0" /> Dedicated Account Manager & SLA Support</div>
              </div>
            </div>
            <button
              onClick={() => handleOpenFormWithPlan('Custom / Multi-Vendor Hub (₹49,999+)')}
              className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-colors cursor-pointer"
            >
              Contact for Enterprise
            </button>
          </div>

        </div>
      </section>

      {/* 8. 5-STEP E-COMMERCE ROADMAP */}
      <section className="py-16 px-4 sm:px-6 lg:px-10 xl:px-12 max-w-[1720px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
            <Compass className="w-3.5 h-3.5" />
            <span>Structured 5-Stage Delivery</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            From Blueprint to First Sale: How We Build Your Store
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { step: '01', title: 'Catalog & Architecture', desc: 'Product taxonomy, pricing tiers, and brand identity structuring.' },
            { step: '02', title: 'High-Converting UI/UX', desc: 'Custom mobile-first layout with smooth shopping cart and filters.' },
            { step: '03', title: 'Payment & Courier Setup', desc: 'Razorpay/Cashfree approval & automated Shiprocket sync.' },
            { step: '04', title: 'Speed & Conversion QA', desc: 'Stress testing, test orders, and SEO schema validation.' },
            { step: '05', title: 'Launch & Handoff', desc: 'Store goes live with admin training and ongoing technical support.' }
          ].map((s, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3 relative">
              <span className="text-2xl font-black text-amber-500/40 font-mono">{s.step}</span>
              <h4 className="text-sm font-bold text-white">{s.title}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. EXTENSIVE E-COMMERCE FAQS (STRETCHED 2-COLUMN FULL-WIDTH GRID) */}
      <section className="py-20 px-4 sm:px-6 lg:px-10 xl:px-12 max-w-[1720px] mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-semibold shadow-sm">
            <HelpCircle className="w-4 h-4 text-amber-400" />
            <span>KNOWLEDGE BASE &amp; FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Everything You Need to Know About{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200">
              AVRX E-Commerce
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Transparent answers regarding payment settlements, zero commission policies, courier automation, anti-RTO technology, and full store ownership.
          </p>
        </div>

        {/* FAQ Controls: Search Bar & Category Filter Pills */}
        <div className="space-y-4 max-w-5xl mx-auto">
          
          {/* Search Input Box */}
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={faqSearchQuery}
              onChange={(e) => setFaqSearchQuery(e.target.value)}
              placeholder="Search questions (e.g., Razorpay, COD, RTO, Shiprocket, GST, Domain, Mobile App)..."
              className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500/80 focus:ring-2 focus:ring-amber-500/20 shadow-inner"
            />
            {faqSearchQuery && (
              <button
                onClick={() => setFaqSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white bg-slate-800 px-2 py-1 rounded-md"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-start sm:justify-center flex-nowrap sm:flex-wrap">
            {[
              { id: 'all', label: 'All Questions', count: ecommerceFaqs.length },
              { id: 'payments', label: '💳 Payments & Settlement', count: ecommerceFaqs.filter(f => f.category === 'payments').length },
              { id: 'shipping', label: '🚚 Shipping & Tracking', count: ecommerceFaqs.filter(f => f.category === 'shipping').length },
              { id: 'rto', label: '🛡️ COD & RTO Shield', count: ecommerceFaqs.filter(f => f.category === 'rto').length },
              { id: 'store', label: '📦 Store & Products', count: ecommerceFaqs.filter(f => f.category === 'store').length },
              { id: 'tech', label: '⚡ Tech & Ownership', count: ecommerceFaqs.filter(f => f.category === 'tech').length }
            ].map((cat) => {
              const isSelected = faqCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setFaqCategory(cat.id as any)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-amber-500 text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.3)] font-extrabold'
                      : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 border border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isSelected ? 'bg-slate-950/30 text-slate-950' : 'bg-slate-800 text-slate-400'}`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

        </div>

        {/* Stretched 2-Column Responsive FAQ Grid */}
        {(() => {
          const filteredFaqs = ecommerceFaqs.filter(faq => {
            const matchesCategory = faqCategory === 'all' || faq.category === faqCategory;
            const matchesSearch = faqSearchQuery.trim() === '' || 
              faq.q.toLowerCase().includes(faqSearchQuery.toLowerCase()) || 
              faq.a.toLowerCase().includes(faqSearchQuery.toLowerCase()) ||
              faq.tag.toLowerCase().includes(faqSearchQuery.toLowerCase()) ||
              faq.categoryLabel.toLowerCase().includes(faqSearchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
          });

          if (filteredFaqs.length === 0) {
            return (
              <div className="text-center py-12 px-4 rounded-3xl bg-slate-900/50 border border-slate-800 max-w-xl mx-auto space-y-3">
                <HelpCircle className="w-8 h-8 text-amber-400 mx-auto opacity-70" />
                <h4 className="text-base font-bold text-white">No Matching Questions Found</h4>
                <p className="text-xs text-slate-400">
                  Try searching for keywords like "UPI", "Shiprocket", "OTP", or "GST", or reset your search.
                </p>
                <button
                  onClick={() => { setFaqSearchQuery(''); setFaqCategory('all'); }}
                  className="px-4 py-2 rounded-xl bg-amber-500 text-slate-950 text-xs font-bold"
                >
                  Reset FAQ Filter
                </button>
              </div>
            );
          }

          return (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
              {filteredFaqs.map((faq) => {
                const isOpen = activeFaq === faq.id;
                return (
                  <div 
                    key={faq.id}
                    className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                      isOpen 
                        ? 'bg-slate-900/95 border-amber-500/50 shadow-[0_0_25px_rgba(245,158,11,0.08)]' 
                        : 'bg-slate-900/70 hover:bg-slate-900/90 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : faq.id)}
                      className="w-full p-5 text-left flex items-start justify-between gap-3 font-bold text-sm sm:text-base text-slate-100 hover:text-amber-300 transition-colors cursor-pointer group"
                    >
                      <div className="space-y-1.5 pr-2">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 text-amber-300">
                            {faq.categoryLabel}
                          </span>
                          <span className="text-[10px] font-mono text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded">
                            {faq.tag}
                          </span>
                        </div>
                        <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                          {faq.q}
                        </h4>
                      </div>
                      <div className={`p-1.5 rounded-lg shrink-0 mt-1 transition-all ${
                        isOpen ? 'bg-amber-500 text-slate-950 rotate-180' : 'bg-slate-800 text-slate-400 group-hover:text-white'
                      }`}>
                        <ChevronDown className="w-4 h-4 transition-transform" />
                      </div>
                    </button>
                    
                    {isOpen && (
                      <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-4 bg-slate-950/30 animate-in fade-in duration-200">
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })()}

        {/* Quick FAQ Support & WhatsApp Assistance Bar */}
        <div className="rounded-2xl bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 border border-amber-500/30 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <Headphones className="w-5 h-5 text-amber-400" />
              <h4 className="text-base font-bold text-white">Have a Unique Question or Custom Architecture Need?</h4>
            </div>
            <p className="text-xs sm:text-sm text-slate-300">
              Speak directly with an AVRX E-Commerce Solution Specialist to evaluate your product requirements, catalog size, and growth roadmap.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0 flex-wrap justify-center">
            <button
              onClick={() => handleOpenFormWithPlan('Custom E-Commerce Architecture')}
              className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
            >
              <span>Ask an Architect</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <a
              href="https://wa.me/919999999999?text=Hello%20AVRX,%20I%20have%20a%20question%20regarding%20E-Commerce%20Store%20Development"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-all flex items-center gap-1.5 shadow-md"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>

      </section>

      {/* 10. BOTTOM LEAD CAPTURE SECTION (INTEGRATED WITH SUPABASE EDGE FUNCTION) */}
      <section className="py-16 px-4 sm:px-6 lg:px-10 xl:px-12 max-w-[1560px] mx-auto">
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-amber-950/40 border border-amber-500/40 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Side Copy */}
            <div className="lg:col-span-6 space-y-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 inline-block">
                Free E-Commerce Growth Strategy Call
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Ready to Start Selling Online with AVRX?
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Fill out the quick requirement form and our senior e-commerce architect will review your product category, provide a live store demo, and share an itemized blueprint.
              </p>
              <div className="space-y-2 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Guaranteed 0% Platform Commission Lock-in</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Full Payment Gateway & Shipping Setup Included</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Turnaround within 7 to 12 Working Days</div>
              </div>
            </div>

            {/* Right Side Direct Form */}
            <div className="lg:col-span-6 bg-slate-950/80 p-6 rounded-2xl border border-slate-800">
              <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
                
                {/* Honeypot anti-spam */}
                <input 
                  type="text" 
                  name="website_hp" 
                  value={formData.website_hp} 
                  onChange={(e) => setFormData(prev => ({ ...prev, website_hp: e.target.value }))}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 focus:outline-none focus:border-amber-500"
                    placeholder="e.g. Rahul Sharma"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">WhatsApp / Phone *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 focus:outline-none focus:border-amber-500"
                      placeholder="e.g. 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 focus:outline-none focus:border-amber-500"
                      placeholder="e.g. rahul@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">Store Architecture Type</label>
                    <select
                      value={formData.storeType}
                      onChange={(e) => setFormData(prev => ({ ...prev, storeType: e.target.value }))}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 focus:outline-none focus:border-amber-500"
                    >
                      <option>D2C Brand Flagship Store</option>
                      <option>Multi-Category Supermarket</option>
                      <option>Fashion & Lifestyle Boutique</option>
                      <option>Grocery & Hyperlocal Quick Store</option>
                      <option>B2B Wholesale Portal</option>
                      <option>Digital Goods & Subscriptions</option>
                      <option>Custom Headless Next.js Store</option>
                      <option>Multi-Vendor Marketplace</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">City / Location</label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData(prev => ({ ...prev, city: e.target.value }))}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 focus:outline-none focus:border-amber-500"
                      placeholder="e.g. Mumbai / Delhi / Bengaluru"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Product Details & Specific Features Needed</label>
                  <textarea
                    rows={2}
                    value={formData.requirements}
                    onChange={(e) => setFormData(prev => ({ ...prev, requirements: e.target.value }))}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 focus:outline-none focus:border-amber-500 resize-none"
                    placeholder="Tell us what products you sell (e.g. apparel, spices, electronics)..."
                  />
                </div>

                {errorMessage && (
                  <div className="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs">
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 text-slate-950 font-bold hover:opacity-95 transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  {loading ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Submitting to Supabase...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Store Requirement</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

              </form>
            </div>

          </div>

        </div>
      </section>

      {/* POPUP CONSULTATION MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-amber-500/40 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white text-lg font-bold"
            >
              ✕
            </button>

            <div className="space-y-2 mb-6">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                Store Consultation Quote
              </span>
              <h3 className="text-xl font-bold text-white">
                Get Custom Quote for {selectedPlan}
              </h3>
              <p className="text-xs text-slate-400">
                Enter your details to receive an itemized proposal, store demo link, and launch timeline.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <input 
                type="text" 
                name="website_hp" 
                value={formData.website_hp} 
                onChange={(e) => setFormData(prev => ({ ...prev, website_hp: e.target.value }))}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 focus:outline-none focus:border-amber-500"
                  placeholder="Rahul Sharma"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">WhatsApp / Phone *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 focus:outline-none focus:border-amber-500"
                    placeholder="98765 43210"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 focus:outline-none focus:border-amber-500"
                    placeholder="rahul@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Requirements / Product Category</label>
                <textarea
                  rows={2}
                  value={formData.requirements}
                  onChange={(e) => setFormData(prev => ({ ...prev, requirements: e.target.value }))}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 focus:outline-none focus:border-amber-500 resize-none"
                  placeholder="e.g. Need D2C fashion store with 100 products and Razorpay UPI checkout..."
                />
              </div>

              {errorMessage && (
                <div className="p-2 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs">
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 text-slate-950 font-bold transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                {loading ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <span>Submit & Get Instant Quote</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* FEEDBACK POPUP MODAL */}
      <SubmissionFeedbackModal
        isOpen={feedback.isOpen}
        onClose={() => setFeedback(prev => ({ ...prev, isOpen: false }))}
        type={feedback.type}
        leadId={feedback.leadId}
        message={feedback.message}
      />

    </div>
  );
};
