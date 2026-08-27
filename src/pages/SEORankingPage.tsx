import React, { useState } from 'react';
import { 
  Search, 
  Layers, 
  Zap, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  HelpCircle, 
  ChevronDown, 
  PhoneCall, 
  MessageCircle, 
  Star, 
  Send, 
  Check, 
  Cpu, 
  Sliders, 
  Clock, 
  Award, 
  TrendingUp, 
  Headphones, 
  ChevronLeft,
  ChevronRight,
  Target,
  BarChart2,
  DollarSign,
  Globe,
  MapPin,
  RefreshCw,
  Eye,
  Rocket,
  Code2,
  Copy,
  LineChart,
  Activity,
  FileText
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { submitLeadForm } from '../utils/formSubmit';
import { SubmissionFeedbackModal } from '../components/common/SubmissionFeedbackModal';
import { launchSoundEngine } from '../utils/launchSoundEngine';

interface SEORankingPageProps {
  onNavigate: (page: string, slug?: string) => void;
}

export const SEORankingPage: React.FC<SEORankingPageProps> = ({ onNavigate }) => {
  // Navigation helper
  const handleNav = (targetPage: string, slug?: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    onNavigate(targetPage, slug);
  };

  // State management
  const [activeTab, setActiveTab] = useState<'all' | 'technical-seo' | 'local-seo' | 'ecommerce-seo' | 'backlinks' | 'content-seo'>('all');
  const [activeFaq, setActiveFaq] = useState<number | null>(1);
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [simulatedRankKeyword, setSimulatedRankKeyword] = useState<'clinic' | 'ecommerce' | 'saas' | 'lawfirm'>('clinic');

  // AI SEO Meta & Schema Generator State
  const [targetKeywordInput, setTargetKeywordInput] = useState('Best Dental Implant Clinic in Delhi');
  const [brandNameInput, setBrandNameInput] = useState('Apex Dental & Implant Centre');
  const [pageTypeInput, setPageTypeInput] = useState('Local Business Service Page');
  const [uspInput, setUSPInput] = useState('Painless Single-Sitting Implants with 15-Year Warranty & 4.9 Star Rating');
  const [isGeneratingSEO, setIsGeneratingSEO] = useState(false);
  const [generatedSEOData, setGeneratedSEOData] = useState<any>(null);
  const [hasCopiedSchema, setHasCopiedSchema] = useState(false);

  // Traffic Value & Free Google Ads Equivalent Calculator State
  const [monthlyOrganicVisits, setMonthlyOrganicVisits] = useState(25000);
  const [avgGoogleCpc, setAvgGoogleCpc] = useState(35);
  const [organicLeadConversionRate, setOrganicLeadConversionRate] = useState(3.5);

  // Lead Modal & Direct Form State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalFormPlan, setModalFormPlan] = useState('National Rank Dominator (₹19,999/mo)');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedbackState, setFeedbackState] = useState<{
    isOpen: boolean;
    success: boolean;
    title: string;
    message: string;
  }>({
    isOpen: false,
    success: false,
    title: '',
    message: ''
  });

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    websiteUrl: '',
    seoGoal: 'Google Rank #1 & Traffic Growth',
    targetGeography: 'PAN-India Organic',
    details: ''
  });

  // SEO Tech & Intelligence Ecosystem Marquee
  const seoEcosystem = [
    { name: 'Google Search Console', tag: 'Core Indexing', icon: '🔍' },
    { name: 'Ahrefs', tag: 'Backlink Authority', icon: '🔗' },
    { name: 'Semrush', tag: 'Keyword Gap Analysis', icon: '📈' },
    { name: 'Screaming Frog', tag: 'Deep Technical Crawl', icon: '🐸' },
    { name: 'Schema.org JSON-LD', tag: 'Rich Snippets', icon: '⚡' },
    { name: 'Core Web Vitals 99+', tag: 'Sub-Second Speed', icon: '🚀' },
    { name: 'Google Map Pack', tag: 'Local 3-Pack Top #1', icon: '📍' },
    { name: 'SurferSEO & NLP', tag: 'Semantic Clustering', icon: '🏄' },
    { name: 'Yoast & RankMath', tag: 'On-Page Architecture', icon: '⚙️' },
    { name: 'Moz Pro & DA', tag: 'Domain Authority', icon: '🛡️' },
    { name: 'PageSpeed Insights', tag: '100% Mobile Score', icon: '📱' },
    { name: 'Bing Webmaster', tag: 'Multi-Engine Indexing', icon: '🌐' }
  ];

  // 10 High-Growth Organic Ranking Case Studies
  const caseStudies = [
    {
      title: 'D2C Ayurvedic Skincare: 0 to 420,000 Organic Traffic',
      tagline: 'Scaled Monthly Free Google Visitors from 2,100 to 4,20,000 in 8 Months',
      niche: 'D2C Health & Wellness',
      channels: 'Programmatic SEO + High-DA Editorial Outreach + Rich Snippet Schema',
      duration: '8 Months',
      badge: '420k+ Visits',
      accentColor: 'from-emerald-500 to-teal-600',
      highlights: [
        'Ranked #1 for 480+ high-volume commercial keywords ("best kumkumadi tailam for glowing skin")',
        'Engineered 1,200+ programmatic ingredient & remedy hub pages with zero cannibalization',
        'Acquired 140+ DoFollow backlinks from Healthline, Times of India, and Femina features',
        'Delivering ₹14.5 Lakhs/month in pure organic e-commerce orders with ZERO ad spend'
      ],
      metrics: {
        traffic: '420,000 Visits/mo',
        keywords: '480+ Top 3 Ranks',
        adSaved: '₹14.5L Free Ad Value/mo'
      }
    },
    {
      title: 'Multispeciality Dental Chain: #1 Google Map Pack in 8 Cities',
      tagline: 'Generated 850+ Monthly Walk-in Patients Across Delhi NCR & Bangalore',
      niche: 'Local Healthcare & Clinics',
      channels: 'Google Business Profile (GBP) Optimization + Hyperlocal Citation Matrix',
      duration: '90 Days',
      badge: '#1 Local Map Pack',
      accentColor: 'from-teal-500 to-emerald-600',
      highlights: [
        'Ranked #1 in Google 3-Pack for "root canal specialist near me" across 12 clinic branches',
        'Cleaned and unified NAP (Name, Address, Phone) consistency across 95+ local Indian directories',
        'Implemented automated 5-star Google Review collection software via WhatsApp',
        'Organic phone calls increased by 310% within the first 60 days'
      ],
      metrics: {
        traffic: '850+ Monthly Patients',
        keywords: '12 Clinic #1 Map Ranks',
        adSaved: '310% Call Surge'
      }
    },
    {
      title: 'Global B2B Logistics SaaS: Ranking #1 in USA & UK',
      tagline: '350+ Commercial Intent Keywords Ranking on Page 1 of Google Global',
      niche: 'Enterprise B2B SaaS',
      channels: 'Technical SEO Core Web Vitals + Semantic Topic Clusters + Whitepaper Magnet',
      duration: '6 Months',
      badge: 'Global SEO',
      accentColor: 'from-cyan-500 to-blue-600',
      highlights: [
        'Outranked multi-billion-dollar competitors for high-intent SaaS keywords',
        'Fixed 1,800+ crawl errors, redirect loops, and broken canonical tags',
        'Achieved sub-0.4s Largest Contentful Paint (LCP) score on Google PageSpeed',
        'Generating 180+ monthly enterprise demo bookings on complete autopilot'
      ],
      metrics: {
        traffic: '85,000 Global Visits',
        keywords: '350+ Page 1 Positions',
        adSaved: '$38,000 Ad Value/mo'
      }
    },
    {
      title: 'Luxury Real Estate Brokerage: ₹12 Cr Inbound Sales',
      tagline: 'Dominating Ultra-Luxury Residential Queries in Gurgaon & South Mumbai',
      niche: 'Real Estate & Housing',
      channels: 'Neighborhood Hub Architecture + Floorplan Schema + Real-Time Price Index',
      duration: '5 Months',
      badge: 'High Ticket',
      accentColor: 'from-amber-500 to-emerald-600',
      highlights: [
        'Ranked #1 for "luxury penthouses Golf Course Road" & "sea facing apartments Worli"',
        'Implemented interactive RealEstateAgent & Property Schema for rich carousel display',
        'Captured 120+ high-net-worth investor inquiries leading to ₹12 Cr inventory sales',
        'Zero reliance on expensive real estate portal listing packages'
      ],
      metrics: {
        traffic: '35,000 HNWI Visits',
        keywords: '₹12 Cr Sales Booked',
        adSaved: '120+ High Net Inquiries'
      }
    },
    {
      title: 'EdTech Competitive Exam Portal: 1.8M Monthly Organic Traffic',
      tagline: 'Built India’s Most Visited Question Bank & Mock Test Search Engine',
      niche: 'Education & EdTech',
      channels: 'Programmatic SEO + Sub-Second Dynamic Caching + Structured QA Schema',
      duration: '10 Months',
      badge: '1.8M Monthly Visits',
      accentColor: 'from-emerald-600 to-teal-700',
      highlights: [
        'Generated 25,000+ programmatic syllabus and previous question pages',
        'Integrated QA Schema capturing 42% Google Featured Snippets (Position Zero)',
        'Monetized with direct course sales and ad impressions with zero paid marketing',
        'Server responds in 110ms handling 60,000 simultaneous concurrent students'
      ],
      metrics: {
        traffic: '1,800,000 Visits/mo',
        keywords: '12,000+ Top 3 Ranks',
        adSaved: '₹45L Free Ad Value/mo'
      }
    },
    {
      title: 'Top Corporate & Criminal Law Firm: 95+ Monthly Retainers',
      tagline: 'High-Authority Legal Backlinks & High-Intent Local Search Domination',
      niche: 'Legal & Law Firms',
      channels: 'Legal Authority Link Building + FAQs FAQPage Schema + Local Citations',
      duration: '4 Months',
      badge: 'High Trust',
      accentColor: 'from-slate-700 to-emerald-800',
      highlights: [
        'Ranked #1 for "top corporate lawyers in Delhi High Court" and "NCLT advocate"',
        'Implemented Attorney Schema with verified Bar Council credentials',
        '95+ corporate retainer inquiry calls received monthly from verified CXOs',
        'Created 45+ comprehensive legal guides ranking in Google AI Overviews'
      ],
      metrics: {
        traffic: '18,000 Legal Inquiries',
        keywords: '95+ Retainer Calls/mo',
        adSaved: '100% Organic Retainers'
      }
    },
    {
      title: 'Industrial Heavy Machinery Exporter: 240+ Global Inquiries',
      tagline: 'Hreflang Multi-Language International SEO Driving Export Orders to 22 Countries',
      niche: 'B2B Manufacturing & Export',
      channels: 'International Hreflang Tags + Product Catalog SEO + Industry Backlinks',
      duration: '6 Months',
      badge: 'Export B2B',
      accentColor: 'from-teal-600 to-cyan-700',
      highlights: [
        'Ranked in top 3 on Google USA, Google UAE, and Google Germany',
        'Bilingual English & Arabic product metadata for Gulf industrial buyers',
        'Export sales revenue expanded by ₹4.2 Crores from pure organic RFQ submissions',
        '100% organic leads with average deal value exceeding ₹15 Lakhs'
      ],
      metrics: {
        traffic: '240+ Global B2B RFQs',
        keywords: '22 Export Countries',
        adSaved: '₹4.2 Cr Pipeline'
      }
    },
    {
      title: 'Cosmetic & Hair Transplant Hospital: 8.5x Patient Surge',
      tagline: 'Before/After Case Study SEO & Medical Authority Schema',
      niche: 'Cosmetic & Aesthetic Surgery',
      channels: 'MedicalClinic Schema + Video Schema + Patient Search Intent Clustering',
      duration: '5 Months',
      badge: '8.5x Patients',
      accentColor: 'from-emerald-500 to-teal-500',
      highlights: [
        'Ranked #1 for "FUE hair transplant cost" & "best rhinoplasty surgeon in India"',
        'Google Video Schema displaying surgeon interview clips directly in search results',
        'International medical tourism inquiries surged from UAE, UK, and Africa',
        'Patient consultation bookings increased from 12/month to 105+/month'
      ],
      metrics: {
        traffic: '65,000 Patient Visits',
        keywords: '105+ Consultations/mo',
        adSaved: '8.5x Organic Surge'
      }
    }
  ];

  // 8 Specialized SEO Categories
  const subCategories = [
    {
      id: 'technical-seo',
      title: 'Technical SEO & Core Web Vitals Fix',
      price: '₹14,999',
      badge: 'Sub-Second Speed',
      category: 'technical-seo',
      desc: 'Complete crawl budget optimization, server-side caching, resolving 404/redirect chains, and achieving 99+ PageSpeed scores.',
      features: ['Core Web Vitals 99+ Optimization', 'XML Sitemap & Robots.txt Architecture', 'Fix 4xx/5xx Errors & Canonical Chains', 'Server-Side Rendering (SSR) Audit', 'Crawl Budget Maximization']
    },
    {
      id: 'local-seo-gbp',
      title: 'Local SEO & Google Business Profile',
      price: '₹9,999/mo',
      badge: 'Google 3-Pack #1',
      category: 'local-seo',
      desc: 'Dominate your city’s Google Map Pack, gather verified 5-star customer reviews, and capture high-intent nearby phone calls.',
      features: ['Google Business Profile (GBP) Audit', '100% NAP Consistency on 90+ Directories', 'Local Geotagged Image Optimization', 'Review Generation Strategy', 'Local Citation Building']
    },
    {
      id: 'ecommerce-seo',
      title: 'E-Commerce Product & Category SEO',
      price: '₹18,999/mo',
      badge: 'Zero Ad Spend Sales',
      category: 'ecommerce-seo',
      desc: 'Scale organic product sales on Shopify, WooCommerce, or Custom stores with high-converting category architectures and Rich Product Schema.',
      features: ['Product & Category Meta Optimization', 'Product Schema with Price & Stock Status', 'Internal Linking Silo Architecture', 'Faceted Navigation Crawl Shield', 'Competitor Keyword Conquesting']
    },
    {
      id: 'high-da-backlinks',
      title: 'High-DA Editorial Backlink Outreach',
      price: '₹16,999/mo',
      badge: 'High Authority DR 60+',
      category: 'backlinks',
      desc: '100% White-Hat manual outreach securing contextual DoFollow backlinks from reputable news outlets, high-DA blogs, and industry leaders.',
      features: ['100% Manual Editorial Outreach', 'Zero PBNs / Zero Spam Guarantee', 'DoFollow Contextual In-Article Links', 'Domain Rating (DR 50–85+) Sites', 'Monthly Live Backlink Proof Report']
    },
    {
      id: 'programmatic-seo',
      title: 'Programmatic SEO & Scaled Pages',
      price: '₹24,999',
      badge: '100k+ Visits Engine',
      category: 'technical-seo',
      desc: 'Generate thousands of high-ranking landing pages dynamically for location, product, or category keywords using modern database templates.',
      features: ['Database-Driven Dynamic Pages', 'Zero Duplicate Content Shield', 'Automatic XML Sitemap Tiering', 'Dynamic Schema.org Integration', 'Instant Indexation Ping Protocols']
    },
    {
      id: 'semantic-content-seo',
      title: 'Semantic Topic Clustering & Content',
      price: '₹12,999/mo',
      badge: 'Google AI Overviews',
      category: 'content-seo',
      desc: 'Build unstoppable topical authority with Pillar Pages and Cluster Articles engineered to win Google Featured Snippets and AI Overviews.',
      features: ['Pillar & Cluster Keyword Mapping', 'SurferSEO / NLP Content Optimization', 'Featured Snippet (Position Zero) Hooks', 'Table of Contents & FAQPage Schema', 'Comprehensive Content Rewrites']
    },
    {
      id: 'international-seo',
      title: 'International Multi-Region Hreflang SEO',
      price: '₹21,999/mo',
      badge: 'Global Organic Scale',
      category: 'technical-seo',
      desc: 'Expand your business worldwide with properly configured Hreflang tags, multi-currency schema, and region-specific CDN routing.',
      features: ['Hreflang Tag Implementation', 'Country-Specific Search Optimization', 'Multi-Language Sitemap Routing', 'International CDN Edge Caching', 'Currency & Local Tax Schema']
    },
    {
      id: 'penalty-recovery',
      title: 'Google Penalty Recovery & Shielding',
      price: '₹19,999',
      badge: 'Traffic Recovery',
      category: 'technical-seo',
      desc: 'Recover lost traffic after Google Helpful Content Updates (HCU) or Core Algorithm Updates with manual audit and toxic link disavow.',
      features: ['Google Core Update Forensic Audit', 'Toxic Backlink Disavow Submission', 'Thin & AI Slop Content Remediation', 'Internal Link Equity Restoration', 'Manual Action Reconsideration Filing']
    }
  ];

  // 17 Comprehensive Categorized FAQs
  const [faqCategory, setFaqCategory] = useState<'all' | 'rankings' | 'backlinks' | 'local' | 'technical' | 'guarantee'>('all');
  const [faqSearchQuery, setFaqSearchQuery] = useState('');

  const seoFaqs = [
    {
      id: 1,
      category: 'rankings',
      categoryLabel: 'Rankings & Timeline',
      q: 'How long does it realistically take to rank #1 on Google with AVRX SEO?',
      a: 'For low-to-medium competition and Local Google Map Pack queries, our clients see Page 1 and top 3 rankings within 45 to 90 days. For high-volume national or competitive commercial keywords, it takes 3 to 6 months of consistent technical optimization, topical content clusters, and high-DA link building.',
      tag: 'Rank in 45–90 Days'
    },
    {
      id: 2,
      category: 'rankings',
      categoryLabel: 'Rankings & Timeline',
      q: 'How does SEO traffic compare to paid Google Ads (PPC) in the long run?',
      a: 'While Google Ads stop the moment your daily budget ends, SEO creates compounding, permanent digital real estate. Once your pages rank on Page 1, you receive continuous, 24/7 inbound buyer inquiries, sales, and phone calls with ZERO cost per click (saving lakhs of rupees every month).',
      tag: 'Compounding Zero CPC'
    },
    {
      id: 3,
      category: 'backlinks',
      categoryLabel: 'Backlinks & Authority',
      q: 'What type of backlinks does AVRX build, and do you use PBNs or spam?',
      a: 'We strictly follow 100% White-Hat Google Webmaster guidelines. We NEVER use Private Blog Networks (PBNs), automated link farms, or spammy directories. Every single backlink is acquired through manual editorial outreach on real, high-traffic publications and authoritative niche blogs (DR 50 to 85+).',
      tag: '100% White-Hat DR 60+'
    },
    {
      id: 4,
      category: 'local',
      categoryLabel: 'Local & Google Maps',
      q: 'How do you get our clinic, store, or office to rank in the Google 3-Pack Map?',
      a: 'We execute a 4-pillar local domination strategy: optimizing your Google Business Profile (GBP) primary/secondary categories, generating 100% NAP (Name, Address, Phone) consistency across 90+ Indian local directories, geotagging real photos, and deploying automated WhatsApp 5-star review collection.',
      tag: 'Google 3-Pack Domination'
    },
    {
      id: 5,
      category: 'technical',
      categoryLabel: 'Technical & Speed',
      q: 'Why is Core Web Vitals and 99+ PageSpeed score essential for SEO in 2026?',
      a: 'Google’s search algorithms prioritize fast-loading websites. If your website takes more than 2.5 seconds to load (Largest Contentful Paint), over 53% of users bounce, leading to lower ranking scores. We engineer sub-second page speeds, dynamic image compression, and server-side rendering to secure top ranking boosts.',
      tag: 'Core Web Vitals 99+'
    },
    {
      id: 6,
      category: 'technical',
      categoryLabel: 'Technical & Speed',
      q: 'What is Schema.org Structured Data, and how does it get us Google Rich Snippets?',
      a: 'Schema.org JSON-LD is code that explicitly translates your website content for Google bots. We inject Organization, LocalBusiness, FAQPage, Product, Review, and Breadcrumb Schema, allowing Google to display rich star ratings, pricing, FAQ accordions, and sitelinks directly in search results, boosting CTR by 38%.',
      tag: 'Rich Snippets Schema'
    },
    {
      id: 7,
      category: 'rankings',
      categoryLabel: 'Rankings & Timeline',
      q: 'How does AVRX adapt SEO for Google AI Overviews and Search Generative Experience?',
      a: 'We structure our content with direct answer capsules, bulleted definitions, authoritative data citations, and semantic entity tagging. This directly feeds Google’s Gemini-powered AI Overviews, ensuring your brand is quoted as the primary authoritative source at the very top of AI search answers.',
      tag: 'Google AI Overviews Ready'
    },
    {
      id: 8,
      category: 'guarantee',
      categoryLabel: 'Guarantees & Reporting',
      q: 'What kind of reports do we receive, and can we track keyword rankings live?',
      a: 'You get 24/7 access to a live Google Looker Studio ranking dashboard showing daily keyword position changes, organic traffic growth from Google Search Console, backlink acquisition proofs, and inbound lead metrics. Your Dedicated SEO Lead conducts a monthly strategy review call.',
      tag: '24/7 Live Rank Tracker'
    },
    {
      id: 9,
      category: 'guarantee',
      categoryLabel: 'Guarantees & Reporting',
      q: 'Do you offer a performance guarantee on SEO improvements?',
      a: 'While Google states no agency can 100% guarantee an exact #1 spot due to algorithm shifts, we offer an SLA Milestone Commitment: If we do not deliver measurable Page 1 keyword improvements and organic traffic growth within 90 days, we work for free until targets are met.',
      tag: '90-Day SLA Commitment'
    },
    {
      id: 10,
      category: 'local',
      categoryLabel: 'Local & Google Maps',
      q: 'Can you help multi-branch businesses (e.g. 10 clinics or 20 retail stores)?',
      a: 'Yes. We specialize in Multi-Location Enterprise Local SEO: building distinct, optimized location landing pages for every branch, setting up centralized Google Business Profile management, and avoiding internal keyword cannibalization between nearby branches.',
      tag: 'Multi-Location SEO'
    },
    {
      id: 11,
      category: 'technical',
      categoryLabel: 'Technical & Speed',
      q: 'Can you recover our website if it lost traffic during a Google Helpful Content Update (HCU)?',
      a: 'Yes. We conduct a complete algorithmic penalty audit: identifying "unhelpful" thin content, purging AI slop text, restructuring user-focused original media, disavowing toxic links, and resubmitting clean XML sitemaps to restore historic search visibility.',
      tag: 'HCU Penalty Recovery'
    },
    {
      id: 12,
      category: 'backlinks',
      categoryLabel: 'Backlinks & Authority',
      q: 'What is Domain Rating (DR) / Domain Authority (DA), and why does it matter?',
      a: 'Domain Rating is a metric developed by Ahrefs (0 to 100) reflecting the total backlink strength of a website. High-DR websites rank significantly faster for competitive terms. Our outreach strategies routinely elevate client domain authority from DR 10 to DR 55+ within 6 months.',
      tag: 'DR 55+ Growth'
    },
    {
      id: 13,
      category: 'rankings',
      categoryLabel: 'Rankings & Timeline',
      q: 'What is Programmatic SEO, and is it suitable for our business?',
      a: 'Programmatic SEO involves creating hundreds or thousands of high-quality, database-driven landing pages for long-tail search queries (e.g. "Dentist in [Area]", "Hire React Developer in [City]"). It is the fastest way for portals, marketplaces, and service aggregators to capture 100k+ monthly organic visitors.',
      tag: 'Programmatic SEO'
    },
    {
      id: 14,
      category: 'guarantee',
      categoryLabel: 'Guarantees & Reporting',
      q: 'Are your SEO retainers month-to-month or do we need to sign annual lock-in contracts?',
      a: 'Our SEO retainers operate on a transparent month-to-month basis with zero long-term lock-in traps. We retain our clients through undeniable ranking results, surge in qualified leads, and measurable business revenue.',
      tag: 'No Lock-in Contracts'
    },
    {
      id: 15,
      category: 'technical',
      categoryLabel: 'Technical & Speed',
      q: 'Do you handle the actual code and CMS changes, or just give us recommendation PDFs?',
      a: 'Unlike agencies that just email endless PDF audit reports, AVRX handles full implementation: our web engineers directly edit your WordPress, Shopify, Next.js, or custom React codebase to implement meta tags, schema, speed fixes, and content updates seamlessly.',
      tag: 'Full Direct Implementation'
    },
    {
      id: 16,
      category: 'local',
      categoryLabel: 'Local & Google Maps',
      q: 'How do you prevent competitors from leaving fake negative Google reviews on our profile?',
      a: 'We actively monitor your Google Business Profile with automated sentiment alerts. When spam or fake reviews appear, we immediately file official Google Merchant Dispute appeals with IP evidence while flooding the profile with genuine 5-star verified customer feedback.',
      tag: 'Review Shielding'
    },
    {
      id: 17,
      category: 'rankings',
      categoryLabel: 'Rankings & Timeline',
      q: 'How does AVRX select high-intent keywords that actually generate sales instead of just traffic?',
      a: 'We filter keywords by Commercial and Transactional intent rather than just vanity search volume. Ranking for "buy luxury penthouse Gurgaon" (500 searches/mo) delivers ₹10 Cr+ in sales, whereas "pictures of houses" (50,000 searches/mo) delivers zero revenue.',
      tag: 'Commercial Intent Focus'
    }
  ];

  // Dynamic Free Google Ads Ad Spend Equivalent Calculation
  const estimatedMonthlyLeads = Math.round(monthlyOrganicVisits * (organicLeadConversionRate / 100));
  const estimatedAdSpendValue = Math.round(monthlyOrganicVisits * avgGoogleCpc);
  const yearlyAdSavings = estimatedAdSpendValue * 12;

  // AI SEO Meta & Schema Generator Handler
  const handleGenerateSEO = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGeneratingSEO(true);
    launchSoundEngine.playNotification();

    setTimeout(() => {
      const generatedTitle = `${targetKeywordInput} | ${brandNameInput} (2026)`;
      const generatedDesc = `Looking for ${targetKeywordInput.toLowerCase()}? ${brandNameInput} offers ${uspInput.toLowerCase()}. Book your consultation now!`;
      
      const generatedSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": brandNameInput,
        "description": uspInput,
        "url": "https://yourwebsite.com",
        "telephone": "+91-9876543210",
        "priceRange": "₹₹",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "248"
        },
        "areaServed": "Delhi NCR, India",
        "openingHours": "Mo-Sa 09:00-20:00"
      };

      setGeneratedSEOData({
        title: generatedTitle,
        description: generatedDesc,
        titleCharCount: generatedTitle.length,
        descCharCount: generatedDesc.length,
        schemaJson: JSON.stringify(generatedSchema, null, 2),
        keywordsCluster: [
          targetKeywordInput,
          `${targetKeywordInput} near me`,
          `cost of ${targetKeywordInput.toLowerCase()}`,
          `top rated ${targetKeywordInput.toLowerCase()}`
        ]
      });
      setIsGeneratingSEO(false);
    }, 600);
  };

  // Copy Schema to Clipboard
  const handleCopySchema = () => {
    if (generatedSEOData?.schemaJson) {
      navigator.clipboard.writeText(generatedSEOData.schemaJson);
      setHasCopiedSchema(true);
      launchSoundEngine.playSuccess();
      setTimeout(() => setHasCopiedSchema(false), 2000);
    }
  };

  // Open Form Modal with specific plan
  const handleOpenFormWithPlan = (planName: string) => {
    setModalFormPlan(planName);
    setFormData(prev => ({
      ...prev,
      details: `Inquiring for: ${planName}. Please audit our website URL, analyze our target keywords, and share a 90-day Page 1 ranking roadmap.`
    }));
    setIsModalOpen(true);
  };

  // Submit Lead Form
  const handleSubmitLead = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await submitLeadForm({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        service: `SEO & Organic Growth - ${formData.seoGoal}`,
        message: `Plan: ${modalFormPlan} | Website: ${formData.websiteUrl} | Geography: ${formData.targetGeography} | Notes: ${formData.details}`
      });

      if (response.success) {
        launchSoundEngine.playSuccess();
        setFeedbackState({
          isOpen: true,
          success: true,
          title: 'SEO Audit & Keyword Roadmap Requested!',
          message: `Thank you ${formData.name}. Our Principal SEO Strategist will audit your website's technical health, Core Web Vitals, and competitor ranking gaps within 30 minutes.`
        });
        setFormData({
          name: '',
          phone: '',
          email: '',
          websiteUrl: '',
          seoGoal: 'Google Rank #1 & Traffic Growth',
          targetGeography: 'PAN-India Organic',
          details: ''
        });
        setIsModalOpen(false);
      } else {
        throw new Error(response.message || 'Submission failed');
      }
    } catch (err: any) {
      launchSoundEngine.playAlert();
      setFeedbackState({
        isOpen: true,
        success: false,
        title: 'Submission Failed',
        message: err.message || 'Could not submit your request. Please try again or reach out on WhatsApp directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#030c08] text-slate-100 selection:bg-emerald-500 selection:text-slate-950 font-sans pb-24">
      
      {/* Dynamic SEO Meta */}
      <SEO 
        title="Search Engine Optimization (SEO) & Google Ranking #1 | Technical, Local & High-DA Backlinks | AVRX"
        description="Dominate Google Search with AVRX White-Hat SEO. Technical Core Web Vitals 99+, Google Map Pack #1, high-DA contextual backlinks, Programmatic SEO, and Rich Schema.org markup for sustainable organic growth."
        keywords="seo services india, rank 1 on google, local seo google maps, technical seo agency, high da backlink outreach, e-commerce seo services, core web vitals fix"
      />

      {/* 1. TOP BREADCRUMB & STATUS BAR */}
      <div className="border-b border-emerald-950/60 bg-slate-950/70 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-slate-400 overflow-x-auto whitespace-nowrap">
            <button onClick={() => handleNav('home')} className="hover:text-emerald-400 transition-colors">Home</button>
            <span>/</span>
            <button onClick={() => handleNav('digital-solutions')} className="hover:text-emerald-400 transition-colors">Digital Solutions</button>
            <span>/</span>
            <span className="text-emerald-400 font-semibold">Search Engine Optimization (SEO)</span>
          </div>
          
          <div className="hidden sm:flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>100% White-Hat • Core Web Vitals 99+ • DR 60+ Backlinks</span>
            </div>
            <a 
              href="https://wa.me/919999999999?text=Hello%20AVRX,%20I%20want%20to%20rank%20my%20website%20%231%20on%20Google%20Search"
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp SEO Lead</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. HIGH-CONVERTING EMERALD HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Glowing Background Mesh */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-gradient-to-tr from-emerald-600/20 via-teal-600/20 to-cyan-600/15 blur-[140px] pointer-events-none -z-10 rounded-full"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Value Prop & Key Metrics */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>100% WHITE-HAT ORGANIC RANKING ENGINE 2026</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
              Rank #1 on Google &amp;{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
                Capture Free Inbound Traffic
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              We engineer unstoppable search visibility with sub-second Core Web Vitals, Google 3-Pack Map dominance, high-authority DR 60+ editorial backlinks, and Schema.org rich snippets to replace expensive paid ads forever.
            </p>

            {/* Live Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2">
              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-emerald-950/80 text-center space-y-0.5">
                <div className="text-xl sm:text-2xl font-black text-emerald-400">#1 Spot</div>
                <div className="text-[11px] text-slate-400 font-medium">Google Top Ranks</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-emerald-950/80 text-center space-y-0.5">
                <div className="text-xl sm:text-2xl font-black text-teal-400">99+ Score</div>
                <div className="text-[11px] text-slate-400 font-medium">Core Web Vitals</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-emerald-950/80 text-center space-y-0.5">
                <div className="text-xl sm:text-2xl font-black text-cyan-400">100%</div>
                <div className="text-[11px] text-slate-400 font-medium">White-Hat Manual</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-emerald-950/80 text-center space-y-0.5">
                <div className="text-xl sm:text-2xl font-black text-amber-400">₹0 CPC</div>
                <div className="text-[11px] text-slate-400 font-medium">Free Buyer Leads</div>
              </div>
            </div>

            {/* Action CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => handleOpenFormWithPlan('Free Comprehensive SEO & Keyword Audit')}
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-slate-950 font-black text-sm hover:brightness-110 active:scale-95 transition-all shadow-[0_0_30px_rgba(16,185,129,0.3)] flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Get Free 360° SEO &amp; Keyword Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#seo-calculator"
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-slate-200 font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sliders className="w-4 h-4 text-emerald-400" />
                <span>Calculate Free Ad Spend Value</span>
              </a>
            </div>

            {/* Platform Trust Badges */}
            <div className="flex items-center justify-center lg:justify-start gap-6 pt-2 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Google Webmaster Compliant</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-teal-400" />
                <span>Zero PBN / Spam Guarantee</span>
              </div>
              <div className="flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-cyan-400" />
                <span>Live GSC Tracking</span>
              </div>
            </div>

          </div>

          {/* Right Column: Live Google SERP Rank & Core Web Vitals Simulator */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-slate-900/90 border border-emerald-500/40 p-5 sm:p-6 shadow-2xl space-y-4 relative overflow-hidden backdrop-blur-xl">
              
              {/* Simulator Top Nav Bar */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping"></div>
                  <span className="text-xs font-mono text-slate-300 font-bold">GOOGLE SEARCH SERP #1 SIMULATOR</span>
                </div>

                {/* Keyword Switcher */}
                <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800 text-[10px]">
                  {(['clinic', 'ecommerce', 'saas', 'lawfirm'] as const).map((k) => (
                    <button
                      key={k}
                      onClick={() => setSimulatedRankKeyword(k)}
                      className={`px-2 py-0.5 rounded-lg font-bold uppercase transition-colors ${
                        simulatedRankKeyword === k ? 'bg-emerald-500 text-slate-950' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {k}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dynamic SERP Result View */}
              {simulatedRankKeyword === 'clinic' && (
                <div className="space-y-3 text-xs animate-in fade-in duration-200">
                  <div className="p-3.5 rounded-2xl bg-slate-950 border border-emerald-500/50 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                        <span className="text-emerald-400 font-black">#1 Rank</span>
                        <span>•</span>
                        <span>https://apexcare.in &gt; dental-implants</span>
                      </div>
                      <span className="text-[10px] font-mono bg-emerald-500/10 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-500/20">
                        Google 3-Pack #1
                      </span>
                    </div>

                    <h4 className="text-sm font-extrabold text-blue-400 hover:underline cursor-pointer">
                      Best Dental Implant Clinic in Delhi | Single-Sitting Painless Implants
                    </h4>

                    <p className="text-[11px] text-slate-300 leading-snug">
                      ⭐ 4.9 (248 Google Reviews) • 15-Yr Warranty • Over 5,000+ successful implant procedures. Get instant consultation with Dr. Sharma...
                    </p>

                    <div className="flex items-center gap-2 pt-1 text-[10px] text-emerald-400 font-mono">
                      <span>✓ FAQPage Schema Active</span>
                      <span>✓ Rich Review Stars</span>
                      <span>✓ 0.3s Load Time</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-center">
                      <div className="text-[10px] text-slate-400">Core Web Vitals</div>
                      <div className="text-sm font-black text-emerald-400">99 / 100</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-center">
                      <div className="text-[10px] text-slate-400">Monthly Calls</div>
                      <div className="text-sm font-black text-white">180+ Calls</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-center">
                      <div className="text-[10px] text-slate-400">Ad Cost Saved</div>
                      <div className="text-sm font-black text-teal-400">₹85,000/mo</div>
                    </div>
                  </div>
                </div>
              )}

              {simulatedRankKeyword === 'ecommerce' && (
                <div className="space-y-3 text-xs animate-in fade-in duration-200">
                  <div className="p-3.5 rounded-2xl bg-slate-950 border border-emerald-500/50 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                        <span className="text-emerald-400 font-black">#1 Rank</span>
                        <span>•</span>
                        <span>https://auraskincare.in &gt; kumkumadi-tailam</span>
                      </div>
                      <span className="text-[10px] font-mono bg-teal-500/10 text-teal-300 px-2 py-0.5 rounded">
                        Position Zero
                      </span>
                    </div>

                    <h4 className="text-sm font-extrabold text-blue-400">
                      100% Pure Kumkumadi Tailam for Glowing Skin | BIS Certified Ayurvedic
                    </h4>

                    <div className="text-[11px] text-slate-300">
                      ₹1,299.00 • In stock • 100% Natural Saffron &amp; Sandalwood formula clinically tested for radiant skin...
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-center">
                      <div className="text-[10px] text-slate-400">Organic Traffic Growth</div>
                      <div className="text-sm font-black text-emerald-400">+420k Visits/mo</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-center">
                      <div className="text-[10px] text-slate-400">Product Rich Schema</div>
                      <div className="text-sm font-black text-cyan-400">100% Valid JSON-LD</div>
                    </div>
                  </div>
                </div>
              )}

              {simulatedRankKeyword === 'saas' && (
                <div className="space-y-3 text-xs animate-in fade-in duration-200">
                  <div className="p-3.5 rounded-2xl bg-slate-950 border border-emerald-500/50 space-y-2">
                    <div className="text-[11px] text-emerald-400 font-black">#1 Rank Global (USA, UK, India)</div>
                    <h4 className="text-sm font-extrabold text-blue-400">
                      Enterprise Fleet Logistics Software | Real-Time AI Route Optimization
                    </h4>
                    <p className="text-[11px] text-slate-300">
                      Reduce fuel costs by 28% and eliminate delivery delays. Trusted by 450+ global freight operators...
                    </p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                    <span className="text-slate-400">Commercial Keyword Value:</span>
                    <span className="text-emerald-400 font-bold">$38,000/mo in free traffic</span>
                  </div>
                </div>
              )}

              {simulatedRankKeyword === 'lawfirm' && (
                <div className="space-y-3 text-xs animate-in fade-in duration-200">
                  <div className="p-3.5 rounded-2xl bg-slate-950 border border-emerald-500/50 space-y-2">
                    <div className="text-[11px] text-emerald-400 font-black">#1 Rank Local &amp; High Court</div>
                    <h4 className="text-sm font-extrabold text-blue-400">
                      Top Corporate Law Firm in Delhi | Mergers, NCLT &amp; Contract Litigation
                    </h4>
                    <p className="text-[11px] text-slate-300">
                      Senior Advocates with 25+ years experience handling High Court &amp; Supreme Court corporate disputes...
                    </p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-center">
                    <div className="text-sm font-black text-white">95+ Monthly Retainer Calls</div>
                  </div>
                </div>
              )}

              {/* Bottom Live Streaming Telemetry */}
              <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                <span>⚡ Google Search Console Synced</span>
                <span>📈 PageSpeed 99+ Mobile</span>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 3. SEO TECH & INTELLIGENCE ECOSYSTEM MARQUEE */}
      <section className="py-8 bg-slate-950 border-y border-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-4 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
            SEO PLATFORMS, CRAWLERS, SCHEMA &amp; RANK TRACKING ECOSYSTEM
          </span>
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="flex gap-4 animate-marquee whitespace-nowrap will-change-transform py-2">
            {[...seoEcosystem, ...seoEcosystem].map((plat, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800/90 text-xs font-bold text-slate-200 shrink-0 shadow-sm hover:border-emerald-500/50 hover:bg-slate-800 transition-colors"
              >
                <span className="text-base">{plat.icon}</span>
                <span className="font-extrabold text-white">{plat.name}</span>
                <span className="text-[10px] text-slate-400 font-mono bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                  {plat.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE HIGH-GROWTH CASE STUDIES CAROUSEL (10 REAL CAMPAIGNS) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>PROVEN ORGANIC CASE STUDIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Explore 10 Proven{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-300">
              SEO Growth Case Studies
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            From 420,000 monthly organic visitors to #1 Google Map Pack domination, explore how AVRX turns search into revenue.
          </p>
        </div>

        {/* Interactive Model Display Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900/70 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3 flex-wrap">
              <span className={`text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full text-white bg-gradient-to-r ${caseStudies[activeCaseIndex].accentColor}`}>
                {caseStudies[activeCaseIndex].badge}
              </span>
              <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                {caseStudies[activeCaseIndex].niche}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                Duration: {caseStudies[activeCaseIndex].duration}
              </span>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {caseStudies[activeCaseIndex].title}
              </h3>
              <p className="text-sm text-emerald-300 font-medium mt-1">
                {caseStudies[activeCaseIndex].tagline}
              </p>
            </div>

            {/* Channels Involved */}
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs">
              <span className="text-slate-400 font-medium block mb-1">SEO Disciplines Deployed:</span>
              <span className="font-bold text-slate-200">{caseStudies[activeCaseIndex].channels}</span>
            </div>

            {/* Features Checklist */}
            <div className="space-y-2.5">
              {caseStudies[activeCaseIndex].highlights.map((feat, fIdx) => (
                <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Performance Badges */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
                <div className="text-xs sm:text-sm font-bold text-white">{caseStudies[activeCaseIndex].metrics.traffic}</div>
                <div className="text-[10px] text-slate-400">Scale Impact</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
                <div className="text-xs sm:text-sm font-bold text-emerald-400">{caseStudies[activeCaseIndex].metrics.keywords}</div>
                <div className="text-[10px] text-slate-400">Ranking Footprint</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
                <div className="text-xs sm:text-sm font-bold text-cyan-400">{caseStudies[activeCaseIndex].metrics.adSaved}</div>
                <div className="text-[10px] text-slate-400">Free Ad Spend Equivalent</div>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <button
                onClick={() => handleOpenFormWithPlan(`Case Study Strategy: ${caseStudies[activeCaseIndex].title}`)}
                className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md flex items-center gap-2 cursor-pointer"
              >
                <span>Deploy This SEO Strategy</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveCaseIndex((prev) => (prev > 0 ? prev - 1 : caseStudies.length - 1))}
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
                  aria-label="Previous case study"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono text-slate-400">
                  {activeCaseIndex + 1} / {caseStudies.length}
                </span>
                <button
                  onClick={() => setActiveCaseIndex((prev) => (prev < caseStudies.length - 1 ? prev + 1 : 0))}
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
                  aria-label="Next case study"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

          {/* Visual Showcase Thumbnail Bar */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3 max-h-[420px] overflow-y-auto pr-1 scrollbar-none">
            {caseStudies.map((model, mIdx) => {
              const isSelected = activeCaseIndex === mIdx;
              return (
                <button
                  key={mIdx}
                  onClick={() => setActiveCaseIndex(mIdx)}
                  className={`p-3.5 rounded-2xl text-left transition-all border ${
                    isSelected
                      ? 'bg-emerald-500/15 border-emerald-500/80 shadow-[0_0_15px_rgba(16,185,129,0.15)]'
                      : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700'
                  }`}
                >
                  <div className="text-[10px] font-mono text-emerald-400 font-bold uppercase">{model.niche}</div>
                  <div className="text-xs font-bold text-white truncate mt-1">{model.title}</div>
                  <div className="text-[10px] text-teal-400 font-bold mt-1">{model.badge}</div>
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. 8 SPECIALIZED SEO & ORGANIC GROWTH DISCIPLINES */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-semibold">
            <Layers className="w-3.5 h-3.5" />
            <span>SPECIALIZED SEO DISCIPLINES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Comprehensive Organic Search Engineering
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Combine technical speed, local map dominance, e-commerce indexing, and high-DA link building for permanent organic traffic.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {[
            { id: 'all', label: 'All SEO Disciplines' },
            { id: 'technical-seo', label: 'Technical & Speed' },
            { id: 'local-seo', label: 'Local Map Pack' },
            { id: 'ecommerce-seo', label: 'E-Commerce SEO' },
            { id: 'backlinks', label: 'High-DA Backlinks' },
            { id: 'content-seo', label: 'Semantic Content' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-emerald-500 text-slate-950 shadow-[0_0_15px_rgba(16,185,129,0.3)] font-extrabold'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 8 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {subCategories
            .filter((sub) => activeTab === 'all' || sub.category === activeTab)
            .map((item) => (
              <div
                key={item.id}
                className="rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 p-6 flex flex-col justify-between space-y-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(16,185,129,0.08)] group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
                      {item.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-400">Retainer</span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {item.title}
                  </h3>

                  <div className="text-2xl font-black text-emerald-400">
                    {item.price}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                    {item.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-[11px] text-slate-300">
                        <Check className="w-3 h-3 text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleOpenFormWithPlan(`SEO Discipline: ${item.title} (${item.price})`)}
                  className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-emerald-500 hover:text-slate-950 text-slate-200 font-bold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <span>Optimize This Channel</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
        </div>
      </section>

      {/* 6. INTERACTIVE AI SEO TOOLS & FREE AD SPEND CALCULATOR */}
      <section id="seo-calculator" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
            <Cpu className="w-3.5 h-3.5" />
            <span>AI SEO META GENERATOR &amp; TRAFFIC VALUE CALCULATOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Generate High-CTR Meta Tags &amp; Calculate Free Google Ads Value
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Use our AI Engine to generate Schema.org JSON-LD structured data and interactive sliders to calculate monthly ad spend savings.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Tool 1: AI SEO Meta Title, Description & Schema Generator (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">AI Meta Title, Description &amp; Schema Generator</h3>
                  <p className="text-xs text-slate-400">Generate high-CTR SERP titles, descriptions &amp; valid JSON-LD</p>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                Gemini Engine
              </span>
            </div>

            <form onSubmit={handleGenerateSEO} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">Target Search Keyword</label>
                  <input
                    type="text"
                    value={targetKeywordInput}
                    onChange={(e) => setTargetKeywordInput(e.target.value)}
                    placeholder="e.g. Best Dental Implant Clinic in Delhi"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">Brand / Business Name</label>
                  <input
                    type="text"
                    value={brandNameInput}
                    onChange={(e) => setBrandNameInput(e.target.value)}
                    placeholder="e.g. Apex Dental & Implant Centre"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">Page / Schema Type</label>
                  <select
                    value={pageTypeInput}
                    onChange={(e) => setPageTypeInput(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-emerald-500"
                  >
                    <option value="Local Business Service Page">LocalBusiness Schema (Clinic/Store)</option>
                    <option value="E-Commerce Product Page">Product Schema (Shopify/Woo)</option>
                    <option value="B2B Organization Page">Organization &amp; Software Schema</option>
                    <option value="FAQ / Pillar Article">FAQPage &amp; Article Schema</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">Unique Value Proposition (USP)</label>
                  <input
                    type="text"
                    value={uspInput}
                    onChange={(e) => setUSPInput(e.target.value)}
                    placeholder="e.g. Painless 1-Sitting Implants with 15-Year Warranty"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isGeneratingSEO}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:brightness-110 text-slate-950 font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:opacity-50"
              >
                {isGeneratingSEO ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Writing High-CTR Meta &amp; Schema...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Generate Meta Tags &amp; Schema.org JSON-LD</span>
                  </>
                )}
              </button>
            </form>

            {/* Generated Output Card */}
            {generatedSEOData && (
              <div className="mt-4 p-5 rounded-2xl bg-slate-950 border border-emerald-500/40 space-y-4 animate-in fade-in duration-300">
                
                {/* Meta Title */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-[10px] font-bold">
                    <span className="text-emerald-400 uppercase">Optimized SERP Title Tag:</span>
                    <span className="text-slate-400 font-mono">{generatedSEOData.titleCharCount} / 60 characters (Optimal)</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-bold text-blue-400">
                    {generatedSEOData.title}
                  </div>
                </div>

                {/* Meta Description */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-[10px] font-bold">
                    <span className="text-teal-400 uppercase">Meta Description:</span>
                    <span className="text-slate-400 font-mono">{generatedSEOData.descCharCount} / 160 characters (Optimal)</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 leading-relaxed">
                    {generatedSEOData.description}
                  </div>
                </div>

                {/* Schema.org JSON-LD Box */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-[10px] font-bold">
                    <span className="text-cyan-400 uppercase">Schema.org JSON-LD Structured Data:</span>
                    <button
                      onClick={handleCopySchema}
                      className="text-xs text-emerald-400 hover:text-emerald-300 flex items-center gap-1 cursor-pointer"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>{hasCopiedSchema ? 'Copied to Clipboard!' : 'Copy Code'}</span>
                    </button>
                  </div>
                  <pre className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-[10px] font-mono text-emerald-300 overflow-x-auto max-h-36">
                    {generatedSEOData.schemaJson}
                  </pre>
                </div>

                <button
                  onClick={() => handleOpenFormWithPlan(`Implement AI Schema & Meta for ${generatedSEOData.title}`)}
                  className="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Implement This SEO Setup with AVRX</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

          </div>

          {/* Tool 2: Organic Traffic Value & Free Google Ads Equivalent Calculator (5 cols) */}
          <div className="lg:col-span-5 rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 space-y-6 shadow-xl flex flex-col justify-between">
            <div className="space-y-1 border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2">
                <Sliders className="w-5 h-5 text-emerald-400" />
                <h3 className="text-base font-bold text-white">Free Google Ads Value Calculator</h3>
              </div>
              <p className="text-xs text-slate-400">Calculate how much money high organic ranking saves you in PPC ads</p>
            </div>

            {/* Slider 1: Monthly Organic Visits */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="text-slate-300">Target Monthly Organic Visitors:</span>
                <span className="text-emerald-400 font-mono">{monthlyOrganicVisits.toLocaleString('en-IN')} visits/mo</span>
              </div>
              <input
                type="range"
                min="5000"
                max="250000"
                step="5000"
                value={monthlyOrganicVisits}
                onChange={(e) => setMonthlyOrganicVisits(Number(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer"
              />
            </div>

            {/* Slider 2: Average Industry CPC */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="text-slate-300">Average Google Ads Cost Per Click (CPC):</span>
                <span className="text-teal-400 font-mono">₹{avgGoogleCpc} / click</span>
              </div>
              <input
                type="range"
                min="10"
                max="150"
                step="5"
                value={avgGoogleCpc}
                onChange={(e) => setAvgGoogleCpc(Number(e.target.value))}
                className="w-full accent-teal-500 cursor-pointer"
              />
            </div>

            {/* Slider 3: Conversion Rate */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="text-slate-300">Visitor-to-Lead Conversion Rate:</span>
                <span className="text-cyan-400 font-mono">{organicLeadConversionRate}%</span>
              </div>
              <input
                type="range"
                min="1.0"
                max="8.0"
                step="0.5"
                value={organicLeadConversionRate}
                onChange={(e) => setOrganicLeadConversionRate(Number(e.target.value))}
                className="w-full accent-cyan-500 cursor-pointer"
              />
            </div>

            {/* Output Box */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-emerald-500/40 text-center space-y-2">
              <div className="text-xs text-slate-400">Monthly Free Google Ads Ad Spend Value</div>
              <div className="text-3xl font-black text-emerald-400">
                ₹{estimatedAdSpendValue.toLocaleString('en-IN')}
                <span className="text-xs text-slate-400 font-normal"> / month</span>
              </div>
              <div className="flex items-center justify-around text-xs text-slate-300 pt-1">
                <span>🔥 {estimatedMonthlyLeads.toLocaleString('en-IN')} Free Inbound Leads</span>
                <span className="text-teal-400 font-bold font-mono">₹{(yearlyAdSavings / 100000).toFixed(1)}L/yr Saved</span>
              </div>
            </div>

            <button
              onClick={() => handleOpenFormWithPlan(`Target Organic Value: ₹${estimatedAdSpendValue.toLocaleString('en-IN')}/mo in Free Traffic`)}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:brightness-110 text-slate-950 font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
            >
              <span>Unlock This Free Traffic Value</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

        </div>
      </section>

      {/* 7. TRANSPARENT PRICING PACKAGES */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
            <Award className="w-3.5 h-3.5" />
            <span>TRANSPARENT SEO RETAINERS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            White-Hat Retainers with 100% Direct Implementation
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            No empty PDF audit reports. We directly fix your code, build high-DA links, and manage your Google Map Pack.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Plan 1: Local Rank Starter */}
          <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-8 flex flex-col justify-between space-y-6 hover:border-slate-700 transition-colors">
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Local Business Tier</span>
                <h3 className="text-2xl font-black text-white">Local Rank Starter</h3>
                <p className="text-xs text-slate-400">Single clinic, showroom, law office, or local retail store</p>
              </div>

              <div className="text-3xl font-black text-white">
                ₹9,999
                <span className="text-xs font-normal text-slate-400"> / month</span>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-slate-800 text-xs text-slate-300">
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /><span>Google Business Profile (GBP) Domination</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /><span>100% NAP Sync on 50+ Local Directories</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /><span>LocalBusiness Schema.org Integration</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /><span>Up to 15 Target Local Keywords</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /><span>Monthly Live Rank &amp; Call Volume Report</span></div>
              </div>
            </div>

            <button
              onClick={() => handleOpenFormWithPlan('Local Rank Starter (₹9,999/mo)')}
              className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-colors cursor-pointer"
            >
              Choose Local Starter
            </button>
          </div>

          {/* Plan 2: National Rank Dominator (Popular) */}
          <div className="rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border-2 border-emerald-500 p-8 flex flex-col justify-between space-y-6 relative shadow-[0_0_40px_rgba(16,185,129,0.15)]">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 font-black text-[11px] uppercase tracking-wider shadow-md">
              ⭐ Most Popular Choice
            </div>

            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">National Scaling Tier</span>
                <h3 className="text-2xl font-black text-white">National Dominator</h3>
                <p className="text-xs text-slate-400">E-Commerce brands, B2B services, and multi-location firms</p>
              </div>

              <div className="text-3xl font-black text-emerald-400">
                ₹19,999
                <span className="text-xs font-normal text-slate-400"> / month</span>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-slate-800 text-xs text-slate-200">
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /><span>Core Web Vitals 99+ Speed Optimization</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /><span>Up to 50 High-Intent Commercial Keywords</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /><span>10 High-DA (DR 50–75+) Editorial Backlinks/mo</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /><span>4 High-Converting Topic Cluster Articles</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /><span>Full Rich Snippet (FAQ, Product, Review) Schema</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /><span>Dedicated Senior SEO Account Manager</span></div>
              </div>
            </div>

            <button
              onClick={() => handleOpenFormWithPlan('National Rank Dominator (₹19,999/mo)')}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:brightness-110 text-slate-950 font-black text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
            >
              Rank Nationally
            </button>
          </div>

          {/* Plan 3: Enterprise Authority Suite */}
          <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-8 flex flex-col justify-between space-y-6 hover:border-slate-700 transition-colors">
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Enterprise &amp; Global</span>
                <h3 className="text-2xl font-black text-white">Authority Suite</h3>
                <p className="text-xs text-slate-400">Large portals, global B2B SaaS, and 10,000+ SKU stores</p>
              </div>

              <div className="text-3xl font-black text-white">
                ₹39,999
                <span className="text-xs font-normal text-slate-400"> / month</span>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-slate-800 text-xs text-slate-300">
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /><span>Unlimited Keywords &amp; Global International SEO</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /><span>Programmatic SEO Engine Architecture</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /><span>25+ Tier-1 High-DA (DR 65–85+) Backlinks/mo</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /><span>Google AI Overviews (SGE) Entity Optimization</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /><span>24/7 GSC Live Dashboard &amp; Private Slack Channel</span></div>
              </div>
            </div>

            <button
              onClick={() => handleOpenFormWithPlan('Enterprise Authority Suite (₹39,999/mo)')}
              className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-colors cursor-pointer"
            >
              Dominate Search Globally
            </button>
          </div>

        </div>
      </section>

      {/* 8. 5-STEP WHITE-HAT RANKING PROTOCOL */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
            <Clock className="w-3.5 h-3.5" />
            <span>WHITE-HAT PROTOCOL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            The AVRX 5-Step Formula for Google Search Domination
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            A rigorous, engineering-led ranking protocol that ensures sustainable top rankings across Google updates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            {
              step: '01',
              title: '360° Technical & Crawl Audit',
              desc: 'Fixing Core Web Vitals, 404 loops, canonical tags, and eliminating crawl budget waste.'
            },
            {
              step: '02',
              title: 'Keyword Intent Architecture',
              desc: 'Mapping high-value commercial search terms into structured Pillar Pages and Topic Clusters.'
            },
            {
              step: '03',
              title: 'On-Page & Schema Injection',
              desc: 'Injecting valid Schema.org JSON-LD, optimizing meta tags, and internal link silos.'
            },
            {
              step: '04',
              title: 'High-DA Editorial Outreach',
              desc: 'Manual PR and editorial outreach securing genuine DoFollow links from DR 50–85+ sites.'
            },
            {
              step: '05',
              title: 'SERP Domination & Monitoring',
              desc: 'Capturing Google 3-Pack, Featured Snippets, and tracking real-time Google Search Console telemetry.'
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-2.5 relative hover:border-emerald-500/50 transition-colors"
            >
              <div className="text-2xl font-black text-emerald-400/30 font-mono">{item.step}</div>
              <h3 className="text-sm font-bold text-white">{item.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. EXTENSIVE KNOWLEDGE BASE & FAQS (STRETCHED 2-COLUMN FULL-WIDTH GRID) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-semibold shadow-sm">
            <HelpCircle className="w-4 h-4 text-emerald-400" />
            <span>KNOWLEDGE BASE &amp; FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Everything You Need to Know About{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
              AVRX Search Engine Optimization
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Transparent answers regarding 45-day ranking timelines, 100% White-Hat backlinks, Google 3-Pack Maps, Core Web Vitals 99+, and 90-day SLA commitments.
          </p>
        </div>

        {/* Controls: Search & Category Pills */}
        <div className="space-y-4 max-w-5xl mx-auto">
          
          {/* Search Box */}
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={faqSearchQuery}
              onChange={(e) => setFaqSearchQuery(e.target.value)}
              placeholder="Search questions (e.g. Ranking Timeline, Backlinks, Google Maps, Core Web Vitals, Schema, Guarantee)..."
              className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500/80 focus:ring-2 focus:ring-emerald-500/20 shadow-inner"
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
              { id: 'all', label: 'All Questions', count: seoFaqs.length },
              { id: 'rankings', label: '📈 Rankings & Timeline', count: seoFaqs.filter(f => f.category === 'rankings').length },
              { id: 'backlinks', label: '🔗 Backlinks & Authority', count: seoFaqs.filter(f => f.category === 'backlinks').length },
              { id: 'local', label: '📍 Google 3-Pack Maps', count: seoFaqs.filter(f => f.category === 'local').length },
              { id: 'technical', label: '⚡ Technical & Speed', count: seoFaqs.filter(f => f.category === 'technical').length },
              { id: 'guarantee', label: '📜 SLA & Guarantees', count: seoFaqs.filter(f => f.category === 'guarantee').length }
            ].map((cat) => {
              const isSelected = faqCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setFaqCategory(cat.id as any)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-emerald-500 text-slate-950 shadow-[0_0_15px_rgba(16,185,129,0.3)] font-extrabold'
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

        {/* 2-Column Responsive Stretched Grid */}
        {(() => {
          const filteredFaqs = seoFaqs.filter(faq => {
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
                <HelpCircle className="w-8 h-8 text-emerald-400 mx-auto opacity-70" />
                <h4 className="text-base font-bold text-white">No Matching Questions Found</h4>
                <p className="text-xs text-slate-400">
                  Try searching for keywords like "Timeline", "Backlinks", "Google Maps", or "Core Web Vitals", or reset your search.
                </p>
                <button
                  onClick={() => { setFaqSearchQuery(''); setFaqCategory('all'); }}
                  className="px-4 py-2 rounded-xl bg-emerald-500 text-slate-950 text-xs font-bold"
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
                        ? 'bg-slate-900/95 border-emerald-500/50 shadow-[0_0_25px_rgba(16,185,129,0.08)]' 
                        : 'bg-slate-900/70 hover:bg-slate-900/90 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : faq.id)}
                      className="w-full p-5 text-left flex items-start justify-between gap-3 font-bold text-sm sm:text-base text-slate-100 hover:text-emerald-300 transition-colors cursor-pointer group"
                    >
                      <div className="space-y-1.5 pr-2">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
                            {faq.categoryLabel}
                          </span>
                          <span className="text-[10px] font-mono text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded">
                            {faq.tag}
                          </span>
                        </div>
                        <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-emerald-300 transition-colors leading-snug">
                          {faq.q}
                        </h4>
                      </div>
                      <div className={`p-1.5 rounded-lg shrink-0 mt-1 transition-all ${
                        isOpen ? 'bg-emerald-500 text-slate-950 rotate-180' : 'bg-slate-800 text-slate-400 group-hover:text-white'
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

        {/* Quick FAQ Support Bar */}
        <div className="rounded-2xl bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 border border-emerald-500/30 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <Headphones className="w-5 h-5 text-emerald-400" />
              <h4 className="text-base font-bold text-white">Need a Custom Keyword Gap Analysis or Enterprise SEO Audit?</h4>
            </div>
            <p className="text-xs sm:text-sm text-slate-300">
              Speak directly with an AVRX Senior SEO Architect to inspect your crawl budget, backlinks, and keyword competition.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0 flex-wrap justify-center">
            <button
              onClick={() => handleOpenFormWithPlan('Custom SEO & Backlink Consultation')}
              className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
            >
              <span>Ask an SEO Architect</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <a
              href="https://wa.me/919999999999?text=Hello%20AVRX,%20I%20have%20a%20question%20regarding%20SEO%20Ranking"
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

      {/* 10. BOTTOM LEAD CAPTURE SECTION (INTEGRATED WITH SUPABASE) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 p-8 sm:p-12 shadow-2xl relative overflow-hidden space-y-8">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              ⚡ FREE 360° SEO &amp; COMPETITOR AUDIT
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Ready to Claim the #1 Spot on Google?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Submit your website URL and our Principal SEO Architect will crawl your site, detect ranking bottlenecks, and share a 90-day Page 1 roadmap within 30 minutes.
            </p>
          </div>

          <form onSubmit={handleSubmitLead} className="space-y-4 max-w-3xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-300">Your Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Vikram Singhania"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-300">WhatsApp / Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. +91 98765 43210"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-300">Website URL *</label>
                <input
                  type="text"
                  required
                  value={formData.websiteUrl}
                  onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                  placeholder="e.g. https://mybrand.com"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-300">Primary SEO Objective</label>
                <select
                  value={formData.seoGoal}
                  onChange={(e) => setFormData({ ...formData, seoGoal: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 focus:outline-none focus:border-emerald-500"
                >
                  <option value="Google 3-Pack Map Domination (Local)">Google 3-Pack Map Domination (Local)</option>
                  <option value="National Page 1 Commercial Keywords">National Page 1 Commercial Keywords</option>
                  <option value="E-Commerce Product Organic Sales">E-Commerce Product Organic Sales</option>
                  <option value="Technical SEO & Core Web Vitals 99+">Technical SEO &amp; Core Web Vitals 99+</option>
                  <option value="High-DA Editorial Backlink Building">High-DA Editorial Backlink Building</option>
                  <option value="Google Penalty Recovery (HCU Fix)">Google Penalty Recovery (HCU Fix)</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-300">Target Market / Geography</label>
                <select
                  value={formData.targetGeography}
                  onChange={(e) => setFormData({ ...formData, targetGeography: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 focus:outline-none focus:border-emerald-500"
                >
                  <option value="Local City / Multi-Branch Location">Local City / Multi-Branch Location</option>
                  <option value="PAN-India National Ranking">PAN-India National Ranking</option>
                  <option value="Global / Multi-Country International">Global / Multi-Country International</option>
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-300">Top 3 Competitor Websites / Target Keywords</label>
              <textarea
                rows={3}
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                placeholder="Share the top keywords you wish to rank #1 for, or competitor websites currently outranking you..."
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:brightness-110 text-slate-950 font-black text-sm uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(16,185,129,0.3)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Submitting to SEO Crawler Engine...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Request Free SEO Audit &amp; Page 1 Ranking Roadmap</span>
                </>
              )}
            </button>
          </form>

        </div>
      </section>

      {/* POPUP MODAL FOR DIRECT PLAN QUOTE */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-emerald-500/40 rounded-3xl p-6 sm:p-8 max-w-lg w-full space-y-5 shadow-2xl relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg bg-slate-800 text-xs"
            >
              ✕
            </button>

            <div className="space-y-1">
              <span className="text-[10px] font-bold text-emerald-400 uppercase">Selected Retainer</span>
              <h3 className="text-lg font-bold text-white">{modalFormPlan}</h3>
            </div>

            <form onSubmit={handleSubmitLead} className="space-y-3">
              <div>
                <label className="text-xs text-slate-300 font-medium">Your Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Vikram Singhania"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                />
              </div>

              <div>
                <label className="text-xs text-slate-300 font-medium">WhatsApp / Mobile *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                />
              </div>

              <div>
                <label className="text-xs text-slate-300 font-medium">Website URL *</label>
                <input
                  type="text"
                  required
                  value={formData.websiteUrl}
                  onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                  placeholder="https://mybrand.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all"
              >
                {isSubmitting ? 'Sending Request...' : 'Confirm SEO Audit'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* FEEDBACK NOTIFICATION MODAL */}
      <SubmissionFeedbackModal
        isOpen={feedbackState.isOpen}
        success={feedbackState.success}
        title={feedbackState.title}
        message={feedbackState.message}
        onClose={() => setFeedbackState(prev => ({ ...prev, isOpen: false }))}
      />

    </div>
  );
};
