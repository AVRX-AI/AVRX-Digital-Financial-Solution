import {
  ServiceItem,
  LoanProduct,
  TaxService,
  InsuranceProduct,
  DigitalProduct,
  AiTool,
  PortfolioProject,
  CaseStudy,
  BlogPost,
  JobOpening,
  FaqItem,
  PricingPlan
} from '../types';

export const WEBSITE_DESIGN_SERVICES: ServiceItem[] = [
  {
    id: 'business-website',
    title: 'Business Website',
    category: 'digital',
    shortDesc: 'High-converting corporate identity websites tailored for scalable growth and authority.',
    fullDesc: 'We craft bespoke, performance-oriented business websites designed to elevate your corporate reputation and generate qualified enterprise leads 24/7.',
    icon: 'Globe',
    badge: 'Popular',
    features: ['Custom UI/UX architecture', 'Mobile-first responsive layout', 'SEO-friendly schema markup', 'High-speed cloud deployment', 'CRM & Lead Form Integration'],
    benefits: ['Establishes instant brand credibility', 'Reduces customer acquisition cost', '99.9% uptime with global CDN', 'Optimized for high Google rankings'],
    pricing: { starter: '$899', pro: '$1,899', enterprise: 'Custom' }
  },
  {
    id: 'corporate-website',
    title: 'Corporate Website',
    category: 'digital',
    shortDesc: 'Multi-regional enterprise portals with investor relations, governance, and career hubs.',
    fullDesc: 'Tailored for large organizations, multinational conglomerates, and publicly listed firms needing secure, compliant, and multi-language web architectures.',
    icon: 'Building2',
    badge: 'Enterprise',
    features: ['Multi-language & localization', 'Investor & PR media suites', 'Role-based CMS workflows', 'Enterprise-grade firewall & DDOS protection'],
    benefits: ['Seamless corporate communications', 'SOC2 compliant data architecture', 'Unlimited departmental pages'],
    pricing: { starter: '$2,499', pro: '$4,999', enterprise: 'Custom' }
  },
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    category: 'digital',
    shortDesc: 'Stunning visual showcases for agencies, architects, creators, and consultants.',
    fullDesc: 'Designed to let your work shine with immersive case studies, ultra-smooth Framer Motion animations, and interactive galleries.',
    icon: 'Award',
    features: ['Interactive project lightboxes', 'Before/after slider showcases', 'Fast-loading image CDN', 'Direct appointment scheduler'],
    benefits: ['Converts high-ticket clients', 'Elevates personal & agency branding', '100+ Lighthouse speed score'],
    pricing: { starter: '$599', pro: '$1,199', enterprise: '$2,299' }
  },
  {
    id: 'landing-page',
    title: 'Landing Page',
    category: 'digital',
    shortDesc: 'Hyper-focused conversion funnels optimized for PPC campaigns and product launches.',
    fullDesc: 'Engineered with proven psychological triggers, social proof sections, and A/B tested call-to-actions to maximize your advertising ROI.',
    icon: 'Target',
    badge: 'High Conversion',
    features: ['A/B testing ready structure', 'One-click checkout/form submission', 'Exit-intent popup integration', 'Pixel & conversion tracking'],
    benefits: ['Up to 3x higher ad conversion rate', 'Instant loading under 1.2s', 'Seamless Google & Meta ads sync'],
    pricing: { starter: '$499', pro: '$899', enterprise: '$1,499' }
  },
  {
    id: 'ecommerce-website',
    title: 'eCommerce Website',
    category: 'digital',
    shortDesc: 'High-performance online stores with automated inventory, payments, and shipping.',
    fullDesc: 'We build enterprise online shopping platforms powered by custom headless commerce, Shopify Plus, or WooCommerce with CRED-like frictionless checkout.',
    icon: 'ShoppingBag',
    badge: 'Best Seller',
    features: ['Multi-currency & payment gateway', 'Real-time inventory management', 'AI product recommendations', 'Automated abandoned cart emails'],
    benefits: ['Zero transaction fees', 'Scalable to 100,000+ SKUs', 'High average order value design'],
    pricing: { starter: '$1,499', pro: '$3,299', enterprise: 'Custom' }
  },
  {
    id: 'wordpress-website',
    title: 'WordPress Website',
    category: 'digital',
    shortDesc: 'Custom-themed WordPress solutions with extreme speed and zero bloatware.',
    fullDesc: 'Clean-coded custom WordPress themes that provide your marketing team with effortless drag-and-drop editing without compromising on Core Web Vitals.',
    icon: 'Layers',
    features: ['Custom block theme development', 'Zero-bloat performance tuning', 'Automated daily cloud backups', 'Advanced SEO Yoast/RankMath setup'],
    benefits: ['Easy for non-technical teams', 'Highly secure & hardened core', 'Full ownership of source code'],
    pricing: { starter: '$699', pro: '$1,499', enterprise: '$2,899' }
  },
  {
    id: 'school-website',
    title: 'School & College Website',
    category: 'digital',
    shortDesc: 'Educational portals with student admission portals, notices, and LMS integration.',
    fullDesc: 'Comprehensive educational websites for schools, colleges, and universities featuring online fee payment, admission forms, exam schedules, and alumni networks.',
    icon: 'GraduationCap',
    features: ['Online admissions & fee gateway', 'Student & parent login portal', 'Faculty directory & timetable', 'Event calendar & photo gallery'],
    benefits: ['Streamlined academic administration', '24/7 parent communication', 'ADA accessible design'],
    pricing: { starter: '$1,199', pro: '$2,499', enterprise: 'Custom' }
  },
  {
    id: 'hospital-website',
    title: 'Hospital & Healthcare Website',
    category: 'digital',
    shortDesc: 'HIPAA-ready healthcare portals with doctor appointment booking and patient care.',
    fullDesc: 'Secure healthcare websites for hospitals, clinics, and diagnostic centers with online appointment booking, doctor schedules, and telemedicine links.',
    icon: 'HeartPulse',
    features: ['Online doctor appointment booking', 'Department & specialist directory', 'Emergency contact & ambulance alert', 'Patient reports lookup portal'],
    benefits: ['Enhanced patient trust & ease', 'HIPAA & data privacy compliant', 'Reduces reception desk workload'],
    pricing: { starter: '$1,399', pro: '$2,899', enterprise: 'Custom' }
  },
  {
    id: 'hotel-website',
    title: 'Hotel & Hospitality Website',
    category: 'digital',
    shortDesc: 'Luxury resort and hotel websites with direct room reservation engines.',
    fullDesc: 'Immersive hotel websites with 360-degree virtual tours, seasonal rate calculators, and commission-free direct booking engines.',
    icon: 'Hotel',
    features: ['Direct room reservation engine', '360° virtual room tours', 'Multi-currency rate converter', 'Restaurant table booking integration'],
    benefits: ['Saves 15-25% OTA commissions', 'Elevates luxury guest perception', 'Real-time availability sync'],
    pricing: { starter: '$1,199', pro: '$2,599', enterprise: '$4,499' }
  },
  {
    id: 'real-estate-website',
    title: 'Real Estate Website',
    category: 'digital',
    shortDesc: 'Property listing portals with IDX/MLS integration and interactive map search.',
    fullDesc: 'Powerful real estate platforms for brokers and developers with advanced filtering, mortgage calculators, lead capture forms, and virtual tours.',
    icon: 'Home',
    features: ['Interactive map & neighborhood view', 'MLS/IDX property feed integration', 'Built-in mortgage EMI calculator', 'Agent profile & lead routing'],
    benefits: ['Generates high-intent buyer leads', 'Automates property inquiry follow-ups', 'Mobile-responsive property cards'],
    pricing: { starter: '$1,499', pro: '$3,499', enterprise: 'Custom' }
  },
  {
    id: 'custom-website',
    title: 'Custom Web Application',
    category: 'digital',
    shortDesc: 'Bespoke web architectures tailored to unique workflow or SaaS requirements.',
    fullDesc: 'From ground-up SaaS platforms to complex internal tools, we architect scalable custom websites using React, Node.js, and cloud native microservices.',
    icon: 'Code2',
    badge: 'Tailored',
    features: ['Custom database & API architecture', 'Third-party ERP/CRM integration', 'Scalable microservice deployment', 'Enterprise SSO & security'],
    benefits: ['100% tailored to your business model', 'No vendor lock-in or licensing fees', 'Unlimited future scalability'],
    pricing: { starter: '$3,500', pro: '$7,500', enterprise: 'Custom' }
  },
  {
    id: 'website-redesign',
    title: 'Website Redesign',
    category: 'digital',
    shortDesc: 'Transform outdated websites into modern CRED-inspired high-converting experiences.',
    fullDesc: 'We overhaul legacy websites with modern aesthetics, lightning-fast code, updated SEO architecture, and conversion rate optimization.',
    icon: 'RefreshCw',
    features: ['Comprehensive UX audit', 'Zero SEO traffic loss migration', 'Modern dark/light theme options', 'Mobile UX optimization'],
    benefits: ['Immediate boost in conversion rate', 'Modernizes brand image', 'Fixes core web vital penalties'],
    pricing: { starter: '$799', pro: '$1,699', enterprise: '$3,499' }
  },
  {
    id: 'website-maintenance',
    title: 'Website Maintenance & SLA',
    category: 'digital',
    shortDesc: '24/7 technical monitoring, security patching, cloud backups, and content updates.',
    fullDesc: 'Focus on your business while our DevOps engineers handle server monitoring, security patching, SSL management, and monthly performance audits.',
    icon: 'ShieldCheck',
    features: ['24x7 automated uptime monitoring', 'Weekly cloud backups & recovery', 'Malware scanning & firewall protection', 'Monthly Core Web Vitals report'],
    benefits: ['Peace of mind & zero downtime', 'Protected against cyber threats', 'Fast turnaround on content edits'],
    pricing: { starter: '$149/mo', pro: '$349/mo', enterprise: '$699/mo' }
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design & Prototyping',
    category: 'digital',
    shortDesc: 'World-class Figma design systems, wireframes, and interactive prototypes.',
    fullDesc: 'We create award-winning digital interfaces that combine intuitive user psychology with CRED-like dark luxury aesthetic and micro-animations.',
    icon: 'Palette',
    badge: 'Design Studio',
    features: ['Comprehensive Figma Design System', 'Interactive clickable prototypes', 'User research & usability testing', 'Developer-ready design tokens'],
    benefits: ['Reduces development rework by 40%', 'Delivers unforgettable user delight', 'Accessible & responsive UI components'],
    pricing: { starter: '$999', pro: '$2,199', enterprise: '$4,500' }
  },
  {
    id: 'framer-3d-website',
    title: '3D & Interactive Website Design',
    category: 'digital',
    shortDesc: 'Immersive Framer Motion, WebGL 3D, and interactive storytelling website design.',
    fullDesc: 'Stand out from competitors with cutting-edge WebGL 3D animations, interactive visualizers, and ultra-smooth Framer micro-interactions that captivate high-ticket enterprise clients and increase conversion rates.',
    icon: 'Sparkles',
    badge: 'Trending Design',
    features: ['3D WebGL & Canvas visualizers', 'Framer Motion scroll animations', 'Custom micro-interaction design system', 'Sub-second 60 FPS performance rendering'],
    benefits: ['4x higher visitor engagement', 'Award-winning visual presentation', 'Fully responsive across all mobile viewports'],
    pricing: { starter: '₹9,999', pro: '₹19,999', enterprise: 'Custom' }
  }
];

export const APPLICATION_DEVELOPMENT_SERVICES: ServiceItem[] = [
  {
    id: 'android-app',
    title: 'Android App Development',
    category: 'digital',
    shortDesc: 'Native Kotlin & Android apps optimized for speed, battery, and Google Play success.',
    fullDesc: 'We build high-performance native Android apps that run flawlessly across all device form factors, from budget smartphones to flagship foldables.',
    icon: 'Smartphone',
    features: ['Native Kotlin / Jetpack Compose', 'Offline data sync & SQLite', 'Google Pay & UPI integration', 'Push notifications & FCM'],
    benefits: ['Access to 2.5B+ Android users', 'Flawless 60fps animations', 'Strict Google Play policy compliance'],
    pricing: { starter: '$3,500', pro: '$6,500', enterprise: 'Custom' }
  },
  {
    id: 'ios-app',
    title: 'iOS App Development',
    category: 'digital',
    shortDesc: 'Premium native Swift & SwiftUI apps designed for Apple ecosystem excellence.',
    fullDesc: 'Crafted with Apple’s Human Interface Guidelines, our native iOS apps deliver CRED-level visual polish, haptic feedback, and FaceID security.',
    icon: 'Apple',
    badge: 'Premium',
    features: ['Swift & SwiftUI architecture', 'Apple Pay & iCloud sync', 'FaceID & biometric security', 'App Store review guarantee'],
    benefits: ['High-revenue Apple user base', 'Ultra-smooth Apple haptics', 'Zero latency UI interaction'],
    pricing: { starter: '$3,900', pro: '$7,200', enterprise: 'Custom' }
  },
  {
    id: 'flutter-app',
    title: 'Flutter Cross-Platform App',
    category: 'digital',
    shortDesc: 'Single codebase mobile apps for iOS and Android with native performance.',
    fullDesc: 'Using Google’s Flutter SDK, we build stunning mobile applications that run on both iOS and Android with a single codebase and half the cost.',
    icon: 'Cpu',
    badge: 'Best Value',
    features: ['Single codebase for iOS & Android', 'Custom animations & shaders', 'Hot-reload rapid iteration', 'Native device hardware access'],
    benefits: ['50% faster time to market', 'Consistent UX on all platforms', 'Lower long-term maintenance cost'],
    pricing: { starter: '$4,500', pro: '$8,500', enterprise: 'Custom' }
  },
  {
    id: 'business-app',
    title: 'Business & Enterprise App',
    category: 'digital',
    shortDesc: 'Internal employee mobility apps, field sales trackers, and executive dashboards.',
    fullDesc: 'Empower your workforce with secure mobile applications for attendance tracking, CRM access, approval workflows, and live sales analytics.',
    icon: 'Briefcase',
    features: ['Role-based employee authentication', 'Offline field data collection', 'ERP / Salesforce / SAP integration', 'MDM & enterprise security'],
    benefits: ['Increases field productivity by 35%', 'Paperless digital workflows', 'Real-time executive oversight'],
    pricing: { starter: '$5,000', pro: '$9,500', enterprise: 'Custom' }
  },
  {
    id: 'school-app',
    title: 'School & University App',
    category: 'digital',
    shortDesc: 'Mobile learning apps with live classes, homework submission, and parent alerts.',
    fullDesc: 'Connect teachers, students, and parents with an intuitive educational mobile app featuring attendance alerts, fee receipts, and live video classes.',
    icon: 'BookOpen',
    features: ['Live class & assignment module', 'Instant SMS & push notifications', 'Online fee payment gateway', 'Student progress report cards'],
    benefits: ['Boosts parent engagement', 'Automates fee collection', 'Secure student record vault'],
    pricing: { starter: '$3,800', pro: '$6,800', enterprise: 'Custom' }
  },
  {
    id: 'hospital-app',
    title: 'Hospital & Telemedicine App',
    category: 'digital',
    shortDesc: 'Doctor consultation, prescription tracking, and lab report mobile apps.',
    fullDesc: 'HIPAA-compliant healthcare mobile apps enabling secure video consultations, e-prescriptions, vitals monitoring, and lab test bookings.',
    icon: 'Heart',
    features: ['HD Video telemedicine calls', 'Digital prescription download', 'Lab test home sample booking', 'Medical history secure vault'],
    benefits: ['Extends healthcare reach', 'HIPAA encrypted video & chat', 'Instant doctor appointment booking'],
    pricing: { starter: '$6,000', pro: '$11,000', enterprise: 'Custom' }
  },
  {
    id: 'booking-app',
    title: 'Booking & Reservation App',
    category: 'digital',
    shortDesc: 'On-demand service, salon, hotel, and travel booking apps with calendar sync.',
    fullDesc: 'Seamless booking apps for service businesses featuring real-time availability slots, automated reminder notifications, and upfront deposits.',
    icon: 'Calendar',
    features: ['Real-time slot availability calendar', 'Automated SMS reminder alerts', 'Cancellation & refund logic', 'Customer loyalty rewards program'],
    benefits: ['Eliminates double bookings', 'Reduces no-shows by 80%', 'Instant payment collection'],
    pricing: { starter: '$4,200', pro: '$7,800', enterprise: 'Custom' }
  },
  {
    id: 'finance-app',
    title: 'Fintech & Banking App',
    category: 'digital',
    shortDesc: 'CRED-like financial apps with UPI, loan management, and investment tracking.',
    fullDesc: 'We architect bank-grade fintech apps with AES-256 encryption, biometric login, credit score checking, investment portfolios, and instant KYC.',
    icon: 'DollarSign',
    badge: 'Flagship',
    features: ['Bank-grade security & encryption', 'Instant Aadhaar/PAN video KYC', 'Credit score & credit card tracker', 'UPI / Gateway payment rails'],
    benefits: ['CRED-level visual elegance', '100% regulatory compliance', 'Lightning-fast transaction speed'],
    pricing: { starter: '$8,000', pro: '$15,000', enterprise: 'Custom' }
  },
  {
    id: 'crm-app',
    title: 'Custom CRM System',
    category: 'digital',
    shortDesc: 'Tailored Customer Relationship Management software for sales and lead pipelines.',
    fullDesc: 'Replace clunky generic CRMs with a custom CRM designed around your exact sales funnel, automated lead scoring, and WhatsApp API integration.',
    icon: 'Users',
    features: ['Custom Kanban deal pipeline', 'Automated WhatsApp & email follow-up', 'Lead scoring & AI insights', 'Team performance leaderboard'],
    benefits: ['Zero per-user monthly licensing fees', 'Tailored to your sales methodology', '360-degree customer view'],
    pricing: { starter: '$4,500', pro: '$8,900', enterprise: 'Custom' }
  },
  {
    id: 'erp-app',
    title: 'Custom ERP Software',
    category: 'digital',
    shortDesc: 'Enterprise Resource Planning for manufacturing, retail, and supply chain.',
    fullDesc: 'Unified ERP platforms combining inventory, supply chain, procurement, HR, and accounting into one cohesive real-time cloud dashboard.',
    icon: 'Database',
    features: ['Multi-warehouse inventory tracking', 'Automated invoice & GST billing', 'Supply chain & vendor portal', 'HR & payroll processing'],
    benefits: ['Eliminates departmental silos', 'Real-time financial transparency', 'Scales to multi-plant operations'],
    pricing: { starter: '$9,000', pro: '$18,000', enterprise: 'Custom' }
  },
  {
    id: 'custom-applications',
    title: 'Custom SaaS & Cloud Apps',
    category: 'digital',
    shortDesc: 'Multi-tenant Software-as-a-Service applications with Stripe subscription billing.',
    fullDesc: 'Turn your software idea into a revenue-generating SaaS product with multi-tenancy, subscription billing, onboarding flows, and user analytics.',
    icon: 'Cloud',
    features: ['Multi-tenant database isolation', 'Stripe / Razorpay subscription billing', 'User onboarding & walkthroughs', 'Admin super-user dashboard'],
    benefits: ['Ready for venture scale', 'Automated recurring billing', 'Global cloud resiliency'],
    pricing: { starter: '$6,500', pro: '$14,000', enterprise: 'Custom' }
  },
  {
    id: 'cross-platform-apps',
    title: 'React Native Cross-Platform',
    category: 'digital',
    shortDesc: 'High-speed React Native apps for iOS, Android, and Web.',
    fullDesc: 'Leverage React Native to deliver responsive, native-feel mobile applications that share business logic with your web application.',
    icon: 'Layers',
    features: ['Shared code with React web app', 'Over-the-air (OTA) instant updates', 'Native module bridging', 'High performance gesture handling'],
    benefits: ['Unified frontend engineering team', 'Instant bug fixes without app store wait', 'Cost-efficient scaling'],
    pricing: { starter: '$4,500', pro: '$8,200', enterprise: 'Custom' }
  },
  {
    id: 'admin-dashboard',
    title: 'Executive Admin Dashboard',
    category: 'digital',
    shortDesc: 'Linear-inspired dark mode control panels with real-time charts and analytics.',
    fullDesc: 'We build ultra-premium admin panels and command centers featuring real-time Chart.js graphs, data tables, filterable logs, and role permissions.',
    icon: 'LayoutDashboard',
    badge: 'Linear Style',
    features: ['Real-time WebSocket data updates', 'Interactive Chart.js & D3 graphs', 'Advanced filtering & CSV/PDF export', 'Dark mode glassmorphism UI'],
    benefits: ['Complete operational visibility', 'Lightning-fast data querying', 'Executive command center feel'],
    pricing: { starter: '$2,800', pro: '$5,500', enterprise: 'Custom' }
  }
];

export const DIGITAL_MARKETING_SERVICES: ServiceItem[] = [
  {
    id: 'facebook-ads',
    title: 'Facebook & Meta Ads',
    category: 'digital',
    shortDesc: 'Precision-targeted Meta ad campaigns that drive high-ROI leads and sales.',
    fullDesc: 'Our performance marketers design scroll-stopping video ads, custom lookalike audiences, and automated retargeting funnels across Facebook & Instagram.',
    icon: 'Share2',
    badge: 'High ROI',
    features: ['Custom audience & lookalike creation', 'A/B tested creative ad variations', 'Conversion API (CAPI) server tracking', 'Weekly ROI & ROAS reporting'],
    benefits: ['Low cost per acquisition (CPA)', 'Scalable lead generation', 'Full funnel attribution'],
    pricing: { starter: '$599/mo', pro: '$1,299/mo', enterprise: 'Custom' }
  },
  {
    id: 'instagram-marketing',
    title: 'Instagram Growth & Reels',
    category: 'digital',
    shortDesc: 'Viral Reels production, influencer collaborations, and aesthetic feed branding.',
    fullDesc: 'Turn Instagram into a brand powerhouse with engaging Reels, story sequences, influencer outreach, and organic community management.',
    icon: 'Camera',
    features: ['Viral Reel scripting & editing', 'Aesthetic dark/luxury brand grid', 'Influencer matching & campaign management', 'Daily story engagement triggers'],
    benefits: ['Rapid organic follower growth', 'Higher brand affinity & trust', 'Direct DMs conversion strategy'],
    pricing: { starter: '$499/mo', pro: '$999/mo', enterprise: '$1,999/mo' }
  },
  {
    id: 'google-ads',
    title: 'Google PPC & Search Ads',
    category: 'digital',
    shortDesc: 'Capture high-intent searchers on Google Search, Shopping, and YouTube.',
    fullDesc: 'We manage high-performing Google Ads campaigns with negative keyword pruning, smart bidding algorithms, and high quality-score landing pages.',
    icon: 'Search',
    badge: 'Instant Traffic',
    features: ['High-intent keyword bidding', 'Google Shopping feed optimization', 'Remarketing & display banners', 'Landing page CRO alignment'],
    benefits: ['Immediate page 1 visibility', 'Pay only for genuine clicks', 'Optimized Quality Score for lower CPC'],
    pricing: { starter: '$699/mo', pro: '$1,499/mo', enterprise: 'Custom' }
  },
  {
    id: 'youtube-marketing',
    title: 'YouTube Video Marketing',
    category: 'digital',
    shortDesc: 'YouTube channel growth, pre-roll ad campaigns, and SEO video ranking.',
    fullDesc: 'Harness the world’s second largest search engine with professional video SEO, engaging thumbnails, and high-conversion pre-roll ad scripts.',
    icon: 'Video',
    features: ['YouTube SEO keyword optimization', 'High-CTR custom thumbnail design', 'In-stream video ad campaign setup', 'Audience retention analysis'],
    benefits: ['Long-term evergreen organic leads', 'Massive brand awareness', 'High conversion video authority'],
    pricing: { starter: '$599/mo', pro: '$1,199/mo', enterprise: 'Custom' }
  },
  {
    id: 'email-marketing',
    title: 'Email & CRM Marketing',
    category: 'digital',
    shortDesc: 'Automated email flows, newsletter design, and customer retention campaigns.',
    fullDesc: 'We craft automated Klaviyo and Mailchimp funnels including welcome sequences, abandoned carts, win-back campaigns, and VIP newsletters.',
    icon: 'Mail',
    features: ['Automated email drip sequences', 'Custom dark/light HTML templates', 'Advanced segmentation & personalization', 'A/B subject line testing'],
    benefits: ['Average 42x ROI on spend', 'High open (40%+) & click rates', 'Automated customer retention'],
    pricing: { starter: '$399/mo', pro: '$799/mo', enterprise: '$1,499/mo' }
  },
  {
    id: 'whatsapp-marketing',
    title: 'WhatsApp API & Automation',
    category: 'digital',
    shortDesc: 'Official WhatsApp Business API chatbots, blast campaigns, and support.',
    fullDesc: 'Engage customers where they reply fastest. We integrate official WhatsApp API with automated chatbots, abandoned cart reminders, and instant updates.',
    icon: 'MessageSquare',
    badge: '98% Open Rate',
    features: ['Official WhatsApp Business API setup', 'Automated FAQ chatbot workflows', 'Transactional alert messages', 'Interactive button broadcast messages'],
    benefits: ['98% open rate within 5 minutes', 'Direct conversational commerce', 'Seamless CRM integration'],
    pricing: { starter: '$499/mo', pro: '$999/mo', enterprise: 'Custom' }
  },
  {
    id: 'social-media-management',
    title: 'Social Media Management',
    category: 'digital',
    shortDesc: '360° management of LinkedIn, X (Twitter), Instagram, and Facebook.',
    fullDesc: 'Complete social media stewardship including content calendar planning, graphic design, copywriting, comment moderation, and monthly reporting.',
    icon: 'ThumbsUp',
    features: ['Monthly content calendar & strategy', 'Custom branded graphics & carousels', 'Daily community comment moderation', 'Competitor benchmarking reports'],
    benefits: ['Consistent professional brand voice', 'Saves 20+ hours of executive time', 'Multi-channel brand authority'],
    pricing: { starter: '$699/mo', pro: '$1,399/mo', enterprise: '$2,499/mo' }
  },
  {
    id: 'lead-generation',
    title: 'B2B Lead Generation',
    category: 'digital',
    shortDesc: 'Targeted B2B outreach via LinkedIn Sales Navigator and verified cold email.',
    fullDesc: 'We build high-intent B2B prospect lists, craft personalized outreach sequences, and book qualified meetings directly onto your sales team’s calendar.',
    icon: 'Target',
    badge: 'B2B Dedicated',
    features: ['Verified decision-maker contact mining', 'Personalized multi-touch cold email', 'LinkedIn automated outreach', 'Meeting scheduling & calendar booking'],
    benefits: ['Predictable B2B pipeline growth', 'No time wasted on unqualified leads', 'High conversion executive meetings'],
    pricing: { starter: '$999/mo', pro: '$1,999/mo', enterprise: 'Custom' }
  },
  {
    id: 'branding',
    title: 'Corporate Branding & Identity',
    category: 'digital',
    shortDesc: 'Premium logos, brand guidelines, typography, and visual systems.',
    fullDesc: 'We define iconic brand identities from CRED-inspired luxury tech aesthetics to corporate minimalism, complete with brand books and asset kits.',
    icon: 'Award',
    features: ['Logo mark & wordmark design', 'Comprehensive brand guidelines book', 'Color palette & typography hierarchy', 'Social media & stationery kit'],
    benefits: ['Stand out in crowded markets', 'Premium brand equity perception', 'Consistent multi-platform identity'],
    pricing: { starter: '$1,200', pro: '$2,800', enterprise: '$5,500' }
  },
  {
    id: 'content-marketing',
    title: 'Content Marketing & SEO Copy',
    category: 'digital',
    shortDesc: 'Authority articles, whitepapers, case studies, and thought leadership.',
    fullDesc: 'We write compelling, SEO-optimized content that positions your brand as an industry authority while driving evergreen organic traffic.',
    icon: 'FileText',
    features: ['SEO-optimized blog articles & pillars', 'Enterprise whitepapers & e-books', 'Executive LinkedIn thought leadership', 'Case study interviews & writeups'],
    benefits: ['Builds long-term organic domain authority', 'Educates & converts complex buyers', 'Supports sales team with collateral'],
    pricing: { starter: '$599/mo', pro: '$1,199/mo', enterprise: '$2,299/mo' }
  }
];

export const SEO_SERVICES: ServiceItem[] = [
  {
    id: 'technical-seo',
    title: 'Technical SEO Audit & Fix',
    category: 'digital',
    shortDesc: 'Deep crawl analysis, Core Web Vitals optimization, schema, and site architecture.',
    fullDesc: 'We resolve deep technical issues that hold your website back from Google’s top rankings, including indexing errors, canonical tags, and mobile usability.',
    icon: 'Code',
    badge: 'Essential',
    features: ['Comprehensive Screaming Frog crawl', 'Core Web Vitals LCP/CLS optimization', 'XML Sitemap & Robots.txt tuning', 'Schema.org JSON-LD structured data'],
    benefits: ['100% crawlability & indexing', 'Higher CTR in Google SERPs', 'Faster mobile load speed'],
    pricing: { starter: '$499', pro: '$999', enterprise: '$1,999' }
  },
  {
    id: 'on-page-seo',
    title: 'On-Page SEO Optimization',
    category: 'digital',
    shortDesc: 'Title tags, meta descriptions, headings, keyword density, and internal linking.',
    fullDesc: 'We optimize every page on your site for target keywords, user intent, semantic relevance, and compelling meta tags that increase click-through rates.',
    icon: 'FileCheck',
    features: ['Title tag & meta description overhaul', 'H1-H6 semantic heading structure', 'Keyword density & TF-IDF scoring', 'Strategic internal linking hubs'],
    benefits: ['Immediate ranking boosts for target keywords', 'Higher organic click-through rate', 'Better user dwell time'],
    pricing: { starter: '$399/mo', pro: '$799/mo', enterprise: '$1,499/mo' }
  },
  {
    id: 'off-page-seo',
    title: 'Off-Page SEO & Backlinks',
    category: 'digital',
    shortDesc: 'High DA outreach, digital PR, guest posting, and authority link building.',
    fullDesc: 'We earn high-authority contextual backlinks from trusted publications in your industry to skyrocket your domain authority and competitive search rankings.',
    icon: 'Link',
    badge: 'High DA',
    features: ['White-hat editorial outreach', 'High DA (50-80+) contextual links', 'Digital PR & journalist pitching', 'Toxic backlink disavow audits'],
    benefits: ['Rapid Domain Authority (DA) growth', 'Safe from Google spam updates', 'Outrank long-standing competitors'],
    pricing: { starter: '$699/mo', pro: '$1,499/mo', enterprise: '$2,999/mo' }
  },
  {
    id: 'local-seo',
    title: 'Local SEO & GMB Domination',
    category: 'digital',
    shortDesc: 'Rank #1 in Google Maps and local search for near-me business queries.',
    fullDesc: 'We optimize your Google Business Profile, build local citations, and generate authentic 5-star reviews so customers find you first in your city.',
    icon: 'MapPin',
    badge: 'Local Leader',
    features: ['Google Business Profile optimization', 'Local NAP citation building', 'Automated review generation funnel', 'Local neighborhood landing pages'],
    benefits: ['Dominates Google Maps 3-pack', 'Drives foot traffic & phone calls', 'High local trust & reviews'],
    pricing: { starter: '$399/mo', pro: '$799/mo', enterprise: '$1,299/mo' }
  },
  {
    id: 'international-seo',
    title: 'International & Hreflang SEO',
    category: 'digital',
    shortDesc: 'Multi-lingual and multi-country SEO with hreflang and geo-targeting.',
    fullDesc: 'Expand globally with correct hreflang tags, regional domain strategies, and localized keyword optimization for USA, UK, Europe, UAE, and Asia.',
    icon: 'Globe2',
    features: ['Hreflang tag implementation', 'International keyword localization', 'Geo-targeted search console setup', 'Multi-currency/region UX alignment'],
    benefits: ['Rank in multiple countries seamlessly', 'Zero duplicate content penalties', 'Global organic expansion'],
    pricing: { starter: '$899/mo', pro: '$1,899/mo', enterprise: 'Custom' }
  },
  {
    id: 'keyword-research',
    title: 'Strategic Keyword Research',
    category: 'digital',
    shortDesc: 'High-volume, low-competition commercial intent keyword roadmaps.',
    fullDesc: 'We uncover lucrative search terms your competitors are missing, categorizing them by buyer intent to fuel your SEO and content strategy.',
    icon: 'Search',
    features: ['Competitor keyword gap analysis', 'Buyer intent categorization', 'Long-tail high-conversion discovery', 'Monthly search volume & CPC matrix'],
    benefits: ['Focus resources on money keywords', 'Uncover untapped niche traffic', 'Clear 12-month SEO roadmap'],
    pricing: { starter: '$299', pro: '$599', enterprise: '$999' }
  },
  {
    id: 'seo-audit',
    title: 'Comprehensive SEO Audit',
    category: 'digital',
    shortDesc: '100+ point inspection of technical, content, and backlink profile.',
    fullDesc: 'Receive a detailed executive report prioritizing the exact fixes needed to unlock organic traffic growth, with developer-ready instruction sheets.',
    icon: 'CheckSquare',
    features: ['100+ checkpoint manual & automated audit', 'Competitor benchmarking score', 'Prioritized action matrix', 'Video walkthrough of findings'],
    benefits: ['Clear diagnosis of ranking drops', 'Actionable roadmap for developers', 'No fluff or generic automated output'],
    pricing: { starter: '$349', pro: '$699', enterprise: '$1,299' }
  },
  {
    id: 'website-speed-optimization',
    title: 'Website Speed Optimization',
    category: 'digital',
    shortDesc: 'Achieve 90+ Lighthouse speed scores and sub-second loading times.',
    fullDesc: 'We optimize JavaScript execution, compress assets, implement next-gen image formats, and configure caching to ensure blazing-fast page loads.',
    icon: 'Zap',
    badge: '90+ Score',
    features: ['Next-gen WebP/AVIF image conversion', 'JavaScript & CSS minification', 'Server response time optimization', 'Cloudflare CDN edge caching'],
    benefits: ['Passes Google Core Web Vitals', 'Reduces bounce rate by up to 30%', 'Higher ad quality score'],
    pricing: { starter: '$299', pro: '$599', enterprise: '$999' }
  },
  {
    id: 'google-search-console',
    title: 'Google Search Console Setup',
    category: 'digital',
    shortDesc: 'Full Search Console verification, sitemap indexing, and crawl error alert setup.',
    fullDesc: 'We configure and monitor your Google Search Console to fix indexing errors, track search queries, and ensure instant indexing of new pages.',
    icon: 'Activity',
    features: ['XML sitemap submission & verification', 'Manual indexing for key pages', 'Crawl error alert monitoring', 'Search query performance reports'],
    benefits: ['Direct communication with Googlebot', 'Early warning on technical drops', 'Accurate ranking query data'],
    pricing: { starter: '$199', pro: '$399', enterprise: '$599' }
  },
  {
    id: 'google-analytics',
    title: 'Google Analytics 4 (GA4) Setup',
    category: 'digital',
    shortDesc: 'Custom GA4 dashboards, event tracking, and eCommerce attribution.',
    fullDesc: 'Get clean, actionable data with custom GA4 property configuration, Google Tag Manager event setup, and interactive conversion funnels.',
    icon: 'BarChart2',
    features: ['Google Tag Manager (GTM) installation', 'Custom event & conversion tracking', 'eCommerce revenue & funnel reports', 'Custom Data Studio executive dashboard'],
    benefits: ['Accurate ROI measurement', 'Full visibility into user journeys', 'GDPR/cookie consent compliant'],
    pricing: { starter: '$299', pro: '$599', enterprise: '$999' }
  },
  {
    id: 'monthly-seo-packages',
    title: 'Monthly Managed SEO Packages',
    category: 'digital',
    shortDesc: 'Turnkey monthly SEO execution including content, links, and technical care.',
    fullDesc: 'Our dedicated SEO team acts as your in-house organic growth engine, executing monthly link building, technical tweaks, and content publication.',
    icon: 'TrendingUp',
    badge: 'Turnkey',
    features: ['Dedicated Senior SEO Manager', 'Monthly backlink building campaigns', 'New SEO blog content published monthly', 'Live interactive ranking dashboard'],
    benefits: ['Compound YoY organic traffic growth', 'Hands-off turnkey execution', 'Transparent monthly ROI reports'],
    pricing: { starter: '$799/mo', pro: '$1,599/mo', enterprise: '$3,199/mo' }
  }
];

export const WEBSITE_REDESIGN_MAINTENANCE_SERVICES: ServiceItem[] = [
  {
    id: 'redesign-service',
    title: 'Strategic Website Redesign',
    category: 'digital',
    shortDesc: 'Overhaul legacy websites into CRED-inspired dark luxury masterpieces.',
    fullDesc: 'We transform dated, slow websites into modern, high-converting digital flagships without losing your existing SEO authority or backlinks.',
    icon: 'RefreshCw',
    badge: 'Popular',
    features: ['Modern glassmorphism UI/UX upgrade', 'Mobile-first responsive architecture', 'SEO 301 redirect map protection', 'Speed & Core Web Vitals optimization'],
    benefits: ['Modernizes brand perception', 'Increases lead conversion rate', 'Preserves 100% of SEO equity'],
    pricing: { starter: '$899', pro: '$1,899', enterprise: 'Custom' }
  },
  {
    id: 'performance-opt',
    title: 'Performance & Speed Tuning',
    category: 'digital',
    shortDesc: 'Eliminate bloat and achieve lightning-fast sub-second loading.',
    fullDesc: 'We audit your server response times, optimize database queries, and implement edge CDN caching to deliver instant page rendering.',
    icon: 'Zap',
    features: ['Database query optimization', 'Asset bundling & tree-shaking', 'Edge CDN & cache rules setup', 'Font loading optimization'],
    benefits: ['Sub-second page loading speed', 'Higher SEO ranking factor', 'Better mobile experience'],
    pricing: { starter: '$349', pro: '$699', enterprise: '$1,199' }
  },
  {
    id: 'bug-fixes',
    title: 'Emergency Bug Fixes & Audit',
    category: 'digital',
    shortDesc: 'Rapid diagnosis and resolution of layout breaks, script errors, and crashes.',
    fullDesc: 'Got a broken checkout, layout glitch, or plugin conflict? Our full-stack engineers jump in to diagnose and resolve emergency issues fast.',
    icon: 'Wrench',
    badge: '24/7 SLA',
    features: ['24-hour rapid response SLA', 'PHP/Node/React/WordPress error fixes', 'Cross-browser compatibility testing', 'Post-fix security regression test'],
    benefits: ['Minimizes revenue-losing downtime', 'Professional code-level repair', 'Guaranteed fix or no charge'],
    pricing: { starter: '$199', pro: '$499', enterprise: '$899' }
  },
  {
    id: 'security-updates',
    title: 'Security Hardening & WAF',
    category: 'digital',
    shortDesc: 'Protect against malware, DDoS, SQL injection, and zero-day exploits.',
    fullDesc: 'We install enterprise Web Application Firewalls (WAF), secure admin access, perform vulnerability scans, and remove malware infestations.',
    icon: 'ShieldAlert',
    features: ['Web Application Firewall (WAF) setup', 'Malware scanning & malware removal', 'Two-factor admin authentication', 'SQL injection & XSS vulnerability patch'],
    benefits: ['Complete protection against hackers', 'Prevents Google blacklist penalties', 'GDPR data security compliance'],
    pricing: { starter: '$299', pro: '$599', enterprise: '$999' }
  },
  {
    id: 'content-updates',
    title: 'On-Demand Content Updates',
    category: 'digital',
    shortDesc: 'Fast turnaround on text, banner, pricing, and product catalog updates.',
    fullDesc: 'Send us your new banners, blog posts, pricing tables, or staff photos and our team updates your site within 4 hours.',
    icon: 'Edit3',
    features: ['4-hour average turnaround time', 'Banner & promotional graphic updates', 'Pricing & product SKU additions', 'Staff & team profile edits'],
    benefits: ['No need to train internal staff', 'Always up-to-date information', 'Zero risk of breaking site layout'],
    pricing: { starter: '$149/mo', pro: '$299/mo', enterprise: '$599/mo' }
  },
  {
    id: 'monthly-maintenance',
    title: 'Monthly Maintenance SLA',
    category: 'digital',
    shortDesc: 'Turnkey monthly care with backups, security patches, and uptime reports.',
    fullDesc: 'Comprehensive monthly website care plans designed to keep your digital infrastructure fast, secure, and always online.',
    icon: 'CheckCircle',
    badge: 'Turnkey SLA',
    features: ['24x7 automated uptime monitoring', 'Weekly automated cloud backups', 'Core, theme & plugin patching', 'Monthly health & speed report'],
    benefits: ['100% peace of mind', 'Dedicated technical account manager', 'Priority support queue access'],
    pricing: { starter: '$149/mo', pro: '$349/mo', enterprise: '$699/mo' }
  },
  {
    id: 'website-backup',
    title: 'Cloud Backups & Disaster Recovery',
    category: 'digital',
    shortDesc: 'Automated daily cloud snapshots with 1-click disaster restoration.',
    fullDesc: 'Never lose a single piece of customer data. We store encrypted backups on AWS S3 with instant rollback capability.',
    icon: 'Database',
    features: ['Daily automated off-site backups', 'AWS S3 encrypted storage', '1-click disaster recovery testing', '30-day backup history archive'],
    benefits: ['Zero risk of permanent data loss', 'Quick recovery from server crashes', 'Compliance with data retention laws'],
    pricing: { starter: '$99/mo', pro: '$199/mo', enterprise: '$399/mo' }
  },
  {
    id: 'website-migration',
    title: 'Zero-Downtime Website Migration',
    category: 'digital',
    shortDesc: 'Seamless transfer to AWS, Google Cloud, or high-speed hosting providers.',
    fullDesc: 'We move your website, databases, and emails to a faster cloud server with zero downtime and zero broken links.',
    icon: 'Server',
    features: ['Zero-downtime server migration', 'DNS & email server reconfiguration', 'Database integrity verification', 'Post-migration speed benchmark'],
    benefits: ['No interruption to customer traffic', 'Faster cloud server performance', 'Clean DNS configuration'],
    pricing: { starter: '$249', pro: '$499', enterprise: '$899' }
  },
  {
    id: 'ssl-installation',
    title: 'SSL Certificate & HTTPS Setup',
    category: 'digital',
    shortDesc: 'Enterprise SSL certificates with green lock security and HSTS headers.',
    fullDesc: 'We install 256-bit SSL certificates, enforce strict HTTPS redirects, and configure HSTS security headers for maximum browser trust.',
    icon: 'Lock',
    features: ['256-bit encryption SSL installation', 'Automatic HTTPS 301 redirection', 'HTTP Strict Transport Security (HSTS)', 'Mixed content warning resolution'],
    benefits: ['Removes "Not Secure" browser warning', 'Boosts Google SEO trust score', 'Protects user login & form data'],
    pricing: { starter: '$99', pro: '$199', enterprise: '$399' }
  },
  {
    id: 'speed-opt-maintenance',
    title: 'Continuous Core Web Vitals Care',
    category: 'digital',
    shortDesc: 'Ongoing monitoring to keep your website in the green 90+ Lighthouse zone.',
    fullDesc: 'As you add new marketing pixels and content, websites can slow down. We continuously audit and optimize to maintain peak performance.',
    icon: 'TrendingUp',
    features: ['Continuous Lighthouse monitoring', 'Third-party script loading control', 'Image CDN auto-compression', 'Monthly speed report & tuning'],
    benefits: ['Never lose Google page speed ranking', 'Always fast for mobile visitors', 'Optimized ad landing pages'],
    pricing: { starter: '$199/mo', pro: '$399/mo', enterprise: '$699/mo' }
  }
];

export const servicesList: ServiceItem[] = [
  ...WEBSITE_DESIGN_SERVICES,
  ...APPLICATION_DEVELOPMENT_SERVICES,
  ...DIGITAL_MARKETING_SERVICES,
  ...SEO_SERVICES,
  ...WEBSITE_REDESIGN_MAINTENANCE_SERVICES
];

export const FINANCIAL_LOAN_PRODUCTS: LoanProduct[] = [
  {
    id: 'personal-loan',
    title: 'Instant Personal Loan',
    category: 'personal',
    maxAmount: '₹50 Lakhs ($60,000)',
    interestRate: '10.25% - 14.50% p.a.',
    tenure: '12 - 60 Months',
    shortDesc: 'Unsecured personal loans with instant digital KYC and 24-hour disbursal.',
    eligibility: ['Salaried or self-employed individuals', 'Minimum monthly income ₹25,000 / $800', 'CIBIL / Credit Score 700+', 'Age 21 to 60 years'],
    documents: ['PAN Card / National ID', 'Aadhaar / Address Proof', 'Last 3 months salary slips / ITR', '6 months bank statements'],
    benefits: ['Zero collateral required', 'Minimal digital paperwork', 'Flexible repayment tenure', 'No end-use restriction'],
    process: ['Submit simple online application', 'Instant digital credit check', 'Document upload & KYC verification', 'Funds transferred to bank in 24 hrs']
  },
  {
    id: 'business-loan',
    title: 'Unsecured Business Loan',
    category: 'business',
    maxAmount: '₹2 Crores ($250,000)',
    interestRate: '11.50% - 16.00% p.a.',
    tenure: '12 - 48 Months',
    shortDesc: 'Growth capital for small and medium businesses without property collateral.',
    eligibility: ['Business vintage of minimum 2 years', 'Annual turnover above ₹30 Lakhs', 'Profitable for last 2 financial years', 'CIBIL / Commercial score 720+'],
    documents: ['Business registration / GST certificate', 'Last 2 years audited ITR & balance sheet', '12 months current account statements', 'KYC of directors / partners'],
    benefits: ['No property security required', 'Quick 48-hour approval turnaround', 'Custom repayment schedules', 'Tax deductible interest payments'],
    process: ['Online eligibility questionnaire', 'Upload financial statements', 'Credit appraisal by AVRX finance team', 'Sanction letter & agreement signing']
  },
  {
    id: 'home-loan',
    title: 'Home Loan & Construction',
    category: 'home',
    maxAmount: '₹10 Crores ($1.2M)',
    interestRate: '8.35% - 9.50% p.a.',
    tenure: 'Up to 30 Years',
    shortDesc: 'Low interest home purchase, construction, and plot loans with tax benefits.',
    eligibility: ['Salaried or self-employed with stable income', 'Good credit standing (CIBIL 750+)', 'Approved property legal documents', 'Age up to 65 years at loan maturity'],
    documents: ['Property chain of title documents', 'Agreement for sale & approved plan', '3 years ITR & income documents', 'KYC and address proofs'],
    benefits: ['Lowest industry interest rates', 'Maximum tenure up to 30 years', 'No prepayment charges for floating rate', 'Tax deduction under Section 24 & 80C'],
    process: ['Select property & check eligibility', 'Legal & technical property valuation', 'Sanction & loan agreement', 'Disbursement according to construction stage']
  },
  {
    id: 'car-loan',
    title: 'Car & Auto Loan',
    category: 'car',
    maxAmount: 'Up to 90% On-Road Price',
    interestRate: '8.75% - 11.25% p.a.',
    tenure: '12 - 84 Months',
    shortDesc: 'New and pre-owned vehicle loans with instant showroom sanction approval.',
    eligibility: ['Salaried or self-employed individuals', 'Minimum income ₹25,000 / month', 'CIBIL score 700+', 'Age 21 to 65 years'],
    documents: ['Proforma invoice from car dealer', 'PAN & Aadhaar / Identity proof', '3 months bank statement', 'Income proof / salary slips'],
    benefits: ['Up to 90-100% on-road financing', 'Special rates for EVs & hybrid cars', 'Quick 4-hour showroom approval', 'Easy doorstep documentation'],
    process: ['Choose vehicle & get quotation', 'Apply online with AVRX instant check', 'Sign hypothecation agreement', 'Direct payment to automobile dealer']
  },
  {
    id: 'mortgage-loan',
    title: 'Mortgage Loan (LAP)',
    category: 'mortgage',
    maxAmount: '₹15 Crores ($2.0M)',
    interestRate: '9.50% - 11.75% p.a.',
    tenure: 'Up to 15 Years',
    shortDesc: 'High-value loans against residential, commercial, or industrial property.',
    eligibility: ['Clear marketable title to property', 'Stable business or professional income', 'CIBIL score 700+', 'Property located in municipal limits'],
    documents: ['Original property title deed', 'Building approval map & occupancy cert', '3 years audited financial statements', 'Bank statements for 12 months'],
    benefits: ['High loan quantum up to 65% of property value', 'Lower interest rate than unsecured loans', 'Continued occupancy of property', 'Flexible usage for business or personal'],
    process: ['Property valuation by certified engineer', 'Title verification by legal panel', 'Loan underwriting & credit check', 'Mortgage registration & disbursal']
  },
  {
    id: 'loan-against-property',
    title: 'Commercial Property Loan',
    category: 'property',
    maxAmount: '₹20 Crores ($2.5M)',
    interestRate: '9.75% - 12.00% p.a.',
    tenure: 'Up to 15 Years',
    shortDesc: 'Unlock liquidity from commercial real estate for expansion and equipment.',
    eligibility: ['Commercial or industrial property owners', '3+ years profitable business operation', 'CIBIL score 720+', 'Valid property lease or ownership proof'],
    documents: ['Property tax receipts & title deed', 'Rental agreement (for lease-rental discounting)', 'Audited ITR & GST returns', 'Director / Partner KYC'],
    benefits: ['Leverage idle commercial real estate', 'Special lease rental discounting (LRD) rates', 'Long repayment horizon', 'High ticket sanction limits'],
    process: ['Valuation & rental yield assessment', 'Legal clearance report', 'Sanction letter issuance', 'Disbursement against mortgage charge']
  },
  {
    id: 'refinance-loan',
    title: 'Balance Transfer & Refinance',
    category: 'refinance',
    maxAmount: 'Existing Outstanding + Top-up',
    interestRate: '8.35% - 10.50% p.a.',
    tenure: 'Remaining Tenure',
    shortDesc: 'Transfer high-interest existing loans to AVRX for lower EMI and top-up cash.',
    eligibility: ['Regular repayment track record (no defaults)', 'Existing loan vintage of at least 6 months', 'CIBIL score 730+', 'Good current income standing'],
    documents: ['Loan foreclosure letter from existing lender', 'Last 12 months loan repayment statement', 'Updated KYC & income documents', 'Property or asset documents'],
    benefits: ['Save lakhs in interest over tenure', 'Additional top-up cash amount available', 'Zero balance transfer processing fee offer', 'Consolidate multiple debts into one EMI'],
    process: ['Share existing loan sanction & schedule', 'AVRX calculates interest savings', 'Sign balance transfer agreement', 'We pay off existing lender & start new low EMI']
  },
  {
    id: 'education-loan',
    title: 'Global Education Loan',
    category: 'education',
    maxAmount: '₹1.5 Crores ($180,000)',
    interestRate: '9.00% - 11.50% p.a.',
    tenure: 'Up to 15 Years (with Moratorium)',
    shortDesc: 'Funding for higher studies in USA, UK, Canada, Europe, and top domestic institutes.',
    eligibility: ['Confirmed admission letter from recognized university', 'Co-applicant (parent/guardian) with stable income', 'Good academic track record', 'Indian or permanent resident status'],
    documents: ['University admission offer letter', 'Fee structure & living cost estimate', 'Academic transcripts (10th, 12th, Degree)', 'Co-applicant ITR & salary proof'],
    benefits: ['Covers 100% tuition, accommodation & flights', 'Moratorium period during course + 6 months', 'Tax benefit under Section 80E', 'No collateral for Premier Institutes up to ₹40L'],
    process: ['Submit admission offer letter', 'Credit check of co-applicant', 'Sanction letter for visa interview', 'Direct fee remittance to foreign university']
  },
  {
    id: 'gold-loan',
    title: 'Instant Gold Loan',
    category: 'gold',
    maxAmount: '₹50 Lakhs ($60,000)',
    interestRate: '8.80% - 11.90% p.a.',
    tenure: '3 - 36 Months',
    shortDesc: 'Instant liquidity against gold ornaments with secure vault storage.',
    eligibility: ['Any individual aged 18 to 70 years', 'Gold jewelry of 18K to 24K purity', 'Valid photo ID & address proof', 'No credit score check required'],
    documents: ['Aadhaar Card or Passport', 'PAN Card', '1 passport size photograph'],
    benefits: ['Instant 30-minute cash/bank disbursement', 'Highest per-gram valuation rate', '100% insured bank-grade vault security', 'Pay interest only at end of tenure option'],
    process: ['Bring gold ornaments to AVRX partner branch or doorstep', 'Purity test & valuation check', 'Sign pledge agreement', 'Instant bank transfer']
  },
  {
    id: 'msme-loan',
    title: 'MSME Business Growth Loan',
    category: 'msme',
    maxAmount: '₹5 Crores ($600,000)',
    interestRate: '10.50% - 14.00% p.a.',
    tenure: '12 - 60 Months',
    shortDesc: 'Customized financing for Micro, Small and Medium Enterprises with Udyam registration.',
    eligibility: ['Valid Udyam Registration Certificate', 'Minimum 1 year business operation', 'GST filing up to date', 'Positive cash flow'],
    documents: ['Udyam Registration Certificate', '12 months GST returns (GSTR-3B)', 'Last 2 years ITR & balance sheet', 'Bank statements for 12 months'],
    benefits: ['Collateral-free up to ₹2 Crores under CGTMSE', 'Subsidized interest rates for women entrepreneurs', 'Quick digital credit score appraisal', 'Flexible seasonal repayment options'],
    process: ['Upload Udyam & GST returns', 'Automated cash flow verification', 'Sanction approval within 72 hours', 'Disbursement to business account']
  },
  {
    id: 'working-capital-loan',
    title: 'Working Capital & Overdraft',
    category: 'working-capital',
    maxAmount: '₹10 Crores ($1.2M)',
    interestRate: '10.00% - 13.50% p.a.',
    tenure: 'Annual Renewal',
    shortDesc: 'Cash Credit (CC) and Overdraft (OD) limits to manage daily operational cash flow.',
    eligibility: ['Manufacturing, trading, or service enterprises', 'Minimum turnover ₹50 Lakhs', '2+ years vintage with clean banking', 'CIBIL Commercial score 700+'],
    documents: ['Projected cash flow statement', 'Audited balance sheets for 2 years', 'Stock & debtor statement', 'Existing sanction letters if any'],
    benefits: ['Pay interest ONLY on the amount utilized', 'Instant liquidity for vendor payments & payroll', 'Seamless integration with existing current account', 'Annual limit enhancement based on turnover'],
    process: ['Turnover & working capital assessment', 'Facility structuring (CC/OD/Bill Discounting)', 'Limit setup & agreement', 'Daily revolving drawing power']
  },
  {
    id: 'pmegp-loan',
    title: 'PMEGP Subsidy Loan Scheme',
    category: 'gov-scheme',
    maxAmount: '₹50 Lakhs (Manufacturing) / ₹20 Lakhs (Service)',
    interestRate: '9.00% - 11.50% p.a.',
    tenure: '3 - 7 Years',
    shortDesc: 'Prime Minister Employment Generation Programme with up to 35% government subsidy.',
    eligibility: ['Any individual above 18 years of age', '8th pass standard for projects above ₹10L', 'New enterprise projects only', 'No income ceiling'],
    documents: ['Project report & business plan', 'Aadhaar Card & PAN Card', 'Educational qualification certificate', 'Caste/Special category certificate (for higher subsidy)'],
    benefits: ['Up to 35% direct government margin money subsidy', 'Low beneficiary contribution (5% to 10%)', 'Supported by KVIC, KVIB and DIC', 'Handholding by AVRX financial advisors'],
    process: ['Prepare bankable project report with AVRX', 'Submit application on official PMEGP portal', 'Bank task force appraisal', 'Sanction & EDP training completion']
  },
  {
    id: 'mudra-loan',
    title: 'Pradhan Mantri MUDRA Yojana',
    category: 'gov-scheme',
    maxAmount: '₹20 Lakhs ($24,000)',
    interestRate: '8.50% - 11.00% p.a.',
    tenure: '3 - 5 Years',
    shortDesc: 'Shishu, Kishore, and Tarun collateral-free loans for micro enterprises.',
    eligibility: ['Non-corporate, non-farm small/micro enterprises', 'Indian citizen above 18 years', 'No default with any bank or financial institution', 'Clear viable business plan'],
    documents: ['Mudra loan application form', 'Identity & address proof', 'Proof of business ownership & address', 'Quotations for machinery/assets to be purchased'],
    benefits: ['Zero collateral security required', 'No processing fee for Shishu category (up to ₹50K)', 'MUDRA RuPay card for working capital withdrawals', 'Covered under Credit Guarantee Fund'],
    process: ['Choose category (Shishu/Kishore/Tarun)', 'Submit application with business proof', 'AVRX coordinates with lending bank partner', 'Mudra card & fund disbursement']
  },
  {
    id: 'standup-india',
    title: 'Stand-Up India Scheme',
    category: 'gov-scheme',
    maxAmount: '₹10 Lakhs to ₹1 Crore',
    interestRate: 'Lowest applicable bank rate',
    tenure: 'Up to 7 Years',
    shortDesc: 'Special financing for SC/ST and Women entrepreneurs for greenfield enterprises.',
    eligibility: ['SC/ST and/or Women entrepreneurs above 18 years', 'Greenfield project in manufacturing, services or trading', 'In case of company, 51% shareholding by SC/ST/Woman', 'No default history'],
    documents: ['Caste certificate (if SC/ST) / Identity proof', 'Detailed project feasibility report', 'Company incorporation / partnership deed', 'Statutory clearances'],
    benefits: ['Dedicated scheme for inclusive entrepreneurship', 'Composite loan covering 75% of project cost', '18-month moratorium period available', 'Handholding support through Connect Centers'],
    process: ['Register on Stand-Up India portal via AVRX', 'Project appraisal & technical evaluation', 'Sanction by scheduled commercial bank', 'Disbursement according to project milestone']
  },
  {
    id: 'startup-india',
    title: 'Startup India Seed & VC Assistance',
    category: 'gov-scheme',
    maxAmount: '₹50 Lakhs Seed / VC Connect',
    interestRate: 'Subsidized / Equity Convertibles',
    tenure: 'Flexible / Equity milestone',
    shortDesc: 'DPIIT Startup India recognition, seed fund scheme, and tax exemption support.',
    eligibility: ['Incorporated private limited or LLP in last 10 years', 'Annual turnover not exceeding ₹100 Crores', 'Working towards innovation or scalability', 'Valid DPIIT recognition certificate'],
    documents: ['DPIIT Startup Recognition Certificate', 'Pitch deck & financial projections', 'Certificate of incorporation', 'Patent or trademark filings (if any)'],
    benefits: ['3 consecutive years 100% income tax exemption (80-IAC)', 'Fast-track patent application with 80% fee rebate', 'Access to Startup India Seed Fund Scheme', 'Self-certification under labor & environmental laws'],
    process: ['DPIIT registration assistance by AVRX', 'Pitch deck & seed fund application review', 'Presentation to incubator committee', 'Seed grant or convertible debenture sanction']
  }
];

export const TAX_SOLUTIONS: TaxService[] = [
  {
    id: 'gst-registration',
    title: 'New GST Registration',
    category: 'gst',
    desc: 'Hassle-free online GSTIN registration for proprietorships, partnerships, and companies.',
    turnaroundTime: '3 - 5 Business Days',
    documentsRequired: ['PAN Card of Business / Proprietor', 'Aadhaar Card of authorized signatory', 'Electricity bill / Rent agreement of business place', 'Cancelled cheque or bank statement'],
    feeStarting: '$49 / ₹1,499',
    highlights: ['100% online process', 'Dedicated tax associate', 'GSTIN certificate download', 'Free initial consultation']
  },
  {
    id: 'gst-filing',
    title: 'Monthly / Quarterly GST Filing',
    category: 'gst',
    desc: 'Timely filing of GSTR-1, GSTR-3B, and GSTR-9 annual returns with input tax credit reconciliation.',
    turnaroundTime: 'Monthly / On-Time Guarantee',
    documentsRequired: ['Sales invoice register', 'Purchase invoice register', 'Bank account statement', 'E-way bill records'],
    feeStarting: '$39/mo / ₹1,199/mo',
    highlights: ['Zero late fee guarantee', 'Maximized Input Tax Credit (ITC)', 'Automated reconciliation reports', 'Expert CA verification']
  },
  {
    id: 'gst-amendments',
    title: 'GST Amendments & Updates',
    category: 'gst',
    desc: 'Change business address, add additional places of business, or update partner details in GSTIN.',
    turnaroundTime: '4 - 7 Business Days',
    documentsRequired: ['Existing GST Certificate', 'Proof of change (New address / Resolution)', 'Authorized signatory KYC'],
    feeStarting: '$59 / ₹1,999',
    highlights: ['Core & non-core amendment support', 'Quick government portal approval', 'No disruption to GST billing']
  },
  {
    id: 'gst-cancellation',
    title: 'GST Cancellation & Surrender',
    category: 'gst',
    desc: 'Clean and legally compliant surrender of GST registration with final GSTR-10 return filing.',
    turnaroundTime: '7 - 14 Days',
    documentsRequired: ['Reason for closure declaration', 'All past GST returns filed acknowledgment', 'Final stock valuation report'],
    feeStarting: '$79 / ₹2,499',
    highlights: ['Prevents future notice & penalty', 'Final GSTR-10 filing included', 'Complete closure audit']
  },
  {
    id: 'itr-filing',
    title: 'Income Tax Return (ITR-1 to ITR-6)',
    category: 'itr',
    desc: 'Expert tax return preparation and filing for salaried individuals, freelancers, and businesses.',
    turnaroundTime: '2 - 4 Business Days',
    documentsRequired: ['Form 16 / Form 26AS / AIS report', 'Bank statements for financial year', 'Investment proofs (80C, 80D, etc.)', 'Capital gains statement (if stock/crypto trading)'],
    feeStarting: '$39 / ₹999',
    highlights: ['Maximum tax refund claim', 'CA-assisted filing', 'Capital gains & crypto tax calculation', 'Notice assistance support']
  },
  {
    id: 'business-registration',
    title: 'Private Limited / LLP Incorporation',
    category: 'registration',
    desc: 'Complete company incorporation with MCA, Name Approval, MOA, AOA, PAN, TAN, and Certificate of Incorporation.',
    turnaroundTime: '7 - 10 Business Days',
    documentsRequired: ['PAN & Aadhaar of all Directors', 'Passport size photos', 'Registered office electricity bill', 'NOC from property owner'],
    feeStarting: '$199 / ₹6,999',
    highlights: ['MCA Name Approval guarantee', 'Free DIN & DSC for 2 directors', 'PAN & TAN application included', 'Free banking partner account open']
  },
  {
    id: 'udyam-registration',
    title: 'Udyam / MSME Registration',
    category: 'registration',
    desc: 'Get official government MSME recognition to unlock collateral-free loans and subsidies.',
    turnaroundTime: '1 Business Day',
    documentsRequired: ['Aadhaar Card linked with mobile', 'PAN Card of applicant', 'Bank account details'],
    feeStarting: '$29 / ₹799',
    highlights: ['Same-day certificate delivery', 'Lifetime validity', 'Eligible for PMEGP & Mudra loans']
  },
  {
    id: 'pan-tan-services',
    title: 'PAN & TAN Registration',
    category: 'registration',
    desc: 'New PAN and TAN application or correction for individuals, partnerships, and companies.',
    turnaroundTime: '5 - 7 Business Days',
    documentsRequired: ['Proof of identity & address', 'Incorporation certificate (for entities)', 'Passport photo'],
    feeStarting: '$25 / ₹499',
    highlights: ['e-PAN delivered in 48 hours', 'Physical card dispatched', 'TAN for TDS compliance']
  },
  {
    id: 'digital-signature',
    title: 'Class-3 Digital Signature (DSC)',
    category: 'registration',
    desc: 'Encrypted Class-3 Digital Signature Certificate with USB Token for MCA, GST, and e-Tendering.',
    turnaroundTime: '1 Business Day',
    documentsRequired: ['PAN Card & Aadhaar Card', 'Video verification selfie clip'],
    feeStarting: '$45 / ₹1,499',
    highlights: ['2-Year validity with USB token', 'Valid for MCA, Income Tax & tenders', 'Instant online video KYC']
  },
  {
    id: 'professional-tax',
    title: 'Professional Tax & TDS Compliance',
    category: 'compliance',
    desc: 'State professional tax registration and quarterly TDS (Form 24Q/26Q) return filing.',
    turnaroundTime: 'Monthly / Quarterly',
    documentsRequired: ['Employee salary register', 'TDS challan payment receipts', 'Vendor invoice deductions'],
    feeStarting: '$49/mo / ₹1,499/mo',
    highlights: ['Complete TDS return accuracy', 'Form 16/16A generation', 'Zero interest/penalty assurance']
  },
  {
    id: 'accounting-bookkeeping',
    title: 'Monthly Virtual Bookkeeping & Accounting',
    category: 'accounting',
    desc: 'Dedicated cloud accounting using Tally, QuickBooks, or Zoho Books with monthly P&L statements.',
    turnaroundTime: 'Monthly Ongoing',
    documentsRequired: ['Monthly bank statements', 'Sales and purchase bills', 'Expense vouchers'],
    feeStarting: '$149/mo / ₹4,999/mo',
    highlights: ['Dedicated accountant assigned', 'Monthly Balance Sheet & P&L', 'GST & TDS reconciliation', 'Audit-ready clean books']
  }
];

export const INSURANCE_PRODUCTS: InsuranceProduct[] = [
  {
    id: 'health-insurance',
    title: 'Comprehensive Health Insurance',
    category: 'health',
    coverageRange: '₹5 Lakhs to ₹1 Crore ($6,000 - $120,000)',
    claimRatio: '98.4% Claim Settlement',
    keyBenefits: ['Cashless hospitalization across 10,000+ hospitals', 'Zero copayment & no room rent capping', 'Pre & post hospitalization expenses covered', 'Free annual full body health checkup'],
    idealFor: 'Individuals, families, and senior citizens'
  },
  {
    id: 'motor-insurance',
    title: 'Car & Motor Comprehensive Policy',
    category: 'motor',
    coverageRange: '100% IDV + Zero Depreciation',
    claimRatio: '99.1% Claim Settlement',
    keyBenefits: ['Zero depreciation bumper-to-bumper cover', '24x7 roadside assistance & towing', 'Engine protection & consumable cover', 'Instant digital policy issuance'],
    idealFor: 'Private car owners and luxury vehicle buyers'
  },
  {
    id: 'bike-insurance',
    title: 'Two-Wheeler & Bike Insurance',
    category: 'motor',
    coverageRange: 'Third-Party + Own Damage',
    claimRatio: '98.8% Claim Settlement',
    keyBenefits: ['Mandatory third-party liability protection', 'Cover against theft, fire, and accidents', 'Personal accident cover up to ₹15 Lakhs', 'Instant policy renewal without inspection'],
    idealFor: 'Motorcycles, scooters, and electric bikes'
  },
  {
    id: 'travel-insurance',
    title: 'International Travel Insurance',
    category: 'travel',
    coverageRange: 'Up to $500,000 Emergency Medical',
    claimRatio: '97.9% Claim Settlement',
    keyBenefits: ['Overseas emergency hospitalization coverage', 'Flight delay & trip cancellation reimbursement', 'Lost baggage & passport assistance', 'Valid for Schengen visa & worldwide travel'],
    idealFor: 'International tourists, students, and business travelers'
  },
  {
    id: 'home-insurance',
    title: 'Home & Property Protection',
    category: 'home',
    coverageRange: 'Building + Household Contents',
    claimRatio: '96.5% Claim Settlement',
    keyBenefits: ['Protection against fire, earthquake, and flood', 'Burglary, theft, and valuable jewelry cover', 'Temporary relocation living expense', 'Affordable annual premiums'],
    idealFor: 'Homeowners and residential property landlords'
  },
  {
    id: 'shop-insurance',
    title: 'Shop & Retail Comprehensive Policy',
    category: 'shop',
    coverageRange: 'Inventory + Structure + Cash in Transit',
    claimRatio: '97.2% Claim Settlement',
    keyBenefits: ['Covers merchandise stock against fire & flood', 'Protection against burglary & vandalism', 'Cash counter & money-in-transit cover', 'Public liability protection'],
    idealFor: 'Retail shop owners, showrooms, and wholesalers'
  },
  {
    id: 'property-insurance',
    title: 'Commercial Property & Warehouse Cover',
    category: 'property',
    coverageRange: 'Up to ₹50 Crores ($6 Million)',
    claimRatio: '98.0% Claim Settlement',
    keyBenefits: ['Standard Fire and Special Perils (SFSP) cover', 'Machinery breakdown & electrical damage', 'Business interruption loss of profits', 'Custom risk underwriting for factories'],
    idealFor: 'Manufacturing plants, warehouses, and commercial offices'
  },
  {
    id: 'life-insurance',
    title: 'Term Life Insurance',
    category: 'life',
    coverageRange: '₹1 Crore to ₹10 Crores ($120,000 - $1.2M)',
    claimRatio: '99.3% Claim Settlement',
    keyBenefits: ['High life cover at ultra-low monthly premium', 'Critical illness rider covering 40+ illnesses', 'Accidental death benefit payout booster', 'Tax exemption under Sec 80C & 10(10D)'],
    idealFor: 'Primary family breadwinners and business owners'
  },
  {
    id: 'corporate-insurance',
    title: 'Group Medical Cover (GMC) & Workman',
    category: 'corporate',
    coverageRange: 'Custom per Employee Limits',
    claimRatio: '98.9% Claim Settlement',
    keyBenefits: ['Group health coverage for startup & enterprise teams', 'Maternity benefit & newborn cover from day 1', 'No waiting period for pre-existing diseases', 'Dedicated AVRX claim assistance desk'],
    idealFor: 'Startups, SMEs, and corporate employers'
  }
];

export const DIGITAL_PRODUCTS_HOSTING: DigitalProduct[] = [
  {
    id: 'wordpress-themes',
    title: 'CRED-Inspired Dark WordPress Theme',
    type: 'theme',
    price: '$79',
    desc: 'High-performance dark luxury WordPress theme built for agencies and SaaS companies with Elementor widgets.',
    features: ['100+ Pre-built dark glassmorphism blocks', 'One-click demo importer', 'Lighthouse 95+ speed optimized', 'Lifetime updates & support'],
    rating: 4.9,
    salesCount: 1420
  },
  {
    id: 'premium-plugins',
    title: 'AVRX SEO & Schema Pro Plugin',
    type: 'plugin',
    price: '$49/yr',
    desc: 'Automate rich snippet JSON-LD schema markup, canonical tags, and automated internal linking for WordPress.',
    features: ['Automated FAQ & article schema generator', '404 monitor & instant 301 redirection', 'AI keyword density analyzer', 'Multi-language compatibility'],
    rating: 4.8,
    salesCount: 890
  },
  {
    id: 'business-templates',
    title: 'React & Tailwind Enterprise Dashboard Kit',
    type: 'template',
    price: '$99',
    desc: 'Complete Linear-style executive UI kit with 50+ Chart.js components, data tables, and dark mode tokens.',
    features: ['Figma design file included', '50+ React functional components', 'TypeScript & Tailwind CSS native', 'Responsive mobile layouts'],
    rating: 5.0,
    salesCount: 2150
  },
  {
    id: 'website-source-code',
    title: 'Fintech Loan & Banking App Starter Code',
    type: 'source-code',
    price: '$249',
    desc: 'Production-ready React Native codebase with biometric login, UPI payment screens, and KYC verification flows.',
    features: ['Clean modular TypeScript codebase', 'Redux / Zustand state management', 'Dark luxury UI theme pre-configured', 'Comprehensive developer doc'],
    rating: 4.9,
    salesCount: 630
  },
  {
    id: 'shared-hosting',
    title: 'NVMe Ultra-Fast Shared Hosting',
    type: 'hosting',
    price: '$4.99/mo',
    desc: 'Perfect for small business websites and blogs with LiteSpeed web server and free SSL.',
    features: ['50 GB NVMe SSD Storage', 'Unmetered bandwidth', 'Free SSL & domain name for 1st year', 'Daily automated cloud backup'],
    rating: 4.8,
    salesCount: 3400
  },
  {
    id: 'cloud-hosting',
    title: 'Managed AWS & GCP Cloud Hosting',
    type: 'hosting',
    price: '$29.99/mo',
    desc: 'Dedicated cloud CPU & RAM on Amazon Web Services or Google Cloud with 99.99% uptime SLA.',
    features: ['4 Dedicated vCPU / 8 GB RAM', 'Dedicated static IP address', 'Automated horizontal auto-scaling', '24/7 DevOps monitoring SLA'],
    rating: 5.0,
    salesCount: 1890
  },
  {
    id: 'reseller-hosting',
    title: 'White-Label Reseller Hosting Plan',
    type: 'hosting',
    price: '$49.99/mo',
    desc: 'Start your own hosting agency with custom cPanel accounts, WHMCS billing, and white-label servers.',
    features: ['250 GB NVMe SSD Disk Space', 'Host up to 50 cPanel client accounts', 'Free WHMCS automated billing license', 'White-label custom nameservers'],
    rating: 4.7,
    salesCount: 710
  },
  {
    id: 'domain-registration',
    title: 'Domain Name Registration & Privacy',
    type: 'domain',
    price: '$12.99/yr',
    desc: 'Register .com, .ai, .io, .in, and .org domain names with free WHOIS privacy protection and DNS management.',
    features: ['Free WHOIS identity privacy protection', 'Instant DNS zone editor', 'Auto-renewal protection', 'Free email forwarding'],
    rating: 4.9,
    salesCount: 8200
  },
  {
    id: 'ssl-certificate',
    title: 'Wildcard Enterprise SSL Certificate',
    type: 'ssl',
    price: '$39/yr',
    desc: 'Secure your main domain and unlimited subdomains with 256-bit encryption and $10,000 warranty.',
    features: ['Covers domain + unlimited subdomains', 'Instant domain validation issuance', 'Green padlock & browser trust badge', '$10,000 Relying Party Warranty'],
    rating: 4.9,
    salesCount: 4100
  },
  {
    id: 'business-email',
    title: 'Google Workspace & Business Email',
    type: 'email',
    price: '$6/mo per user',
    desc: 'Professional @yourcompany.com email addresses powered by Gmail, Google Drive, Meet, and Docs.',
    features: ['30 GB to 5TB Cloud storage per user', '99.9% uptime SLA guarantee', 'Advanced anti-spam & phishing protection', '24/7 AVRX admin support'],
    rating: 5.0,
    salesCount: 5200
  }
];

export const AI_SOLUTIONS_TOOLS: AiTool[] = [
  {
    id: 'health-checker',
    title: 'AI Website Health Checker',
    badge: 'Live Tool',
    desc: 'Instant AI diagnostic scanning your website for broken links, security leaks, accessibility, and Core Web Vitals.',
    toolType: 'health',
    metrics: [
      { label: 'Avg Health Score', value: '94/100', change: '+12% with AVRX' },
      { label: 'Scan Time', value: '1.4 sec', change: 'Real-time' },
      { label: 'Issues Detected', value: '0 Critical', change: '100% Protected' }
    ]
  },
  {
    id: 'traffic-analyzer',
    title: 'AI Website Traffic & UX Analyzer',
    badge: 'Dashboard',
    desc: 'Deep learning insights predicting bounce risks, highest converting referral sources, and heat map focus zones.',
    toolType: 'traffic',
    metrics: [
      { label: 'Conversion Lift', value: '+34%', change: 'AI Optimized' },
      { label: 'Bounce Reduction', value: '-22%', change: 'Better UX' },
      { label: 'User Dwell Time', value: '3m 42s', change: '+65s' }
    ]
  },
  {
    id: 'seo-score-checker',
    title: 'AI SEO Score & Keyword Gap Checker',
    badge: 'Live Tool',
    desc: 'Analyze your on-page metadata, semantic keyword density, and competitor ranking gaps instantly.',
    toolType: 'seo',
    metrics: [
      { label: 'Top 10 Rankings', value: '42 KW', change: '+18 This Month' },
      { label: 'Schema Score', value: '100%', change: 'JSON-LD Valid' },
      { label: 'Backlink Authority', value: 'DA 64', change: '+8 YoY' }
    ]
  },
  {
    id: 'page-speed-analyzer',
    title: 'AI Page Speed & LCP Analyzer',
    badge: 'Live Tool',
    desc: 'Real-time breakdown of First Contentful Paint (FCP), LCP, and asset compression bottlenecks.',
    toolType: 'speed',
    metrics: [
      { label: 'Desktop Speed', value: '98/100', change: 'Ultra Fast' },
      { label: 'Mobile Speed', value: '92/100', change: 'Lighthouse Green' },
      { label: 'LCP Time', value: '0.8s', change: 'Sub-second' }
    ]
  },
  {
    id: 'content-generator',
    title: 'AI SEO Content & Copy Generator',
    badge: 'Generator',
    desc: 'Generate high-converting landing page headlines, meta descriptions, and blog outlines tuned to your brand voice.',
    toolType: 'content',
    metrics: [
      { label: 'Time Saved', value: '18 hrs/wk', change: '10x Faster' },
      { label: 'SEO Unique Score', value: '99.8%', change: 'Plagiarism-free' },
      { label: 'Engagement Rate', value: '64%', change: '+24%' }
    ]
  },
  {
    id: 'chat-assistant',
    title: 'AVRX AI Conversational Assistant',
    badge: 'AI Assistant',
    desc: 'Embeddable 24/7 AI customer service chatbot that answers FAQs, qualifies leads, and books appointments.',
    toolType: 'recommendation',
    metrics: [
      { label: 'Query Resolution', value: '88%', change: 'Without Human Agent' },
      { label: 'Response Time', value: '< 0.4s', change: 'Instant' },
      { label: 'Leads Captured', value: '3.4x', change: 'Higher conversion' }
    ]
  },
  {
    id: 'business-assistant',
    title: 'AI Financial & Business Consultant',
    badge: 'AI Assistant',
    desc: 'Analyze cash flows, recommend optimal loan products, and calculate tax GST savings automatically.',
    toolType: 'recommendation',
    metrics: [
      { label: 'Interest Saved', value: '₹4.2L avg', change: 'Optimized EMI' },
      { label: 'GST Accuracy', value: '100%', change: 'Automated' },
      { label: 'Audit Readiness', value: '100%', change: 'Zero errors' }
    ]
  },
  {
    id: 'lead-qualification',
    title: 'AI Interactive Lead Scoring Engine',
    badge: 'Dashboard',
    desc: 'Score incoming B2B website visitors based on firmographics and engagement to route high-ticket leads to sales.',
    toolType: 'lead',
    metrics: [
      { label: 'Sales Close Rate', value: '41%', change: '+15% lift' },
      { label: 'Spam Filtered', value: '99.4%', change: 'Clean CRM' },
      { label: 'Meeting Booking', value: 'Instant', change: 'Calendar Sync' }
    ]
  }
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'nexapay-fintech',
    title: 'NexaPay — Global Cross-Border Fintech Platform',
    client: 'NexaPay Financial Technologies',
    category: 'mobile-app',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80',
    results: '+340% User Growth & $45M Processed Monthly',
    desc: 'Architected a CRED-inspired luxury financial app allowing instant multi-currency transfers, virtual cards, and crypto-asset staking with zero-latency UX.',
    techStack: ['React Native', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS KMS'],
    testimonial: {
      quote: 'AVRX delivered a product that looks and feels like Apple and Stripe had a baby. Our investors were blown away.',
      author: 'Marcus Vance',
      role: 'Chief Executive Officer, NexaPay'
    }
  },
  {
    id: 'zenith-health',
    title: 'Zenith Health — Telemedicine & AI Diagnostics Portal',
    client: 'Zenith Hospitals Care Network',
    category: 'website',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
    results: '0.9s Page Load & 14,000 Monthly Doctor Appointments',
    desc: 'A HIPAA-ready healthcare portal with 3D anatomical illustrations, instant doctor appointment booking, and encrypted video consultation rooms.',
    techStack: ['React 18', 'Vite', 'Tailwind CSS', 'WebRTC', 'HIPAA Cloud'],
    testimonial: {
      quote: 'Our patient appointment bookings increased by 220% within the first 60 days of launching the new AVRX portal.',
      author: 'Dr. Alistair Sterling',
      role: 'Medical Director, Zenith Health'
    }
  },
  {
    id: 'lumina-luxury',
    title: 'Lumina Residences — Ultra-Luxury Real Estate IDX Platform',
    client: 'Lumina Real Estate Developers',
    category: 'website',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    results: '$18M in Property Inquiries within 90 Days',
    desc: 'An immersive architectural showcase website with 360-degree interactive floor plans, neighborhood noise heatmaps, and mortgage EMI calculators.',
    techStack: ['Next.js', 'Three.js / WebGL', 'Framer Motion', 'Tailwind CSS'],
    testimonial: {
      quote: 'The 3D floating interactions and dark theme created an exclusivity that sold out our penthouse phase in record time.',
      author: 'Elena Rostova',
      role: 'Head of Marketing, Lumina'
    }
  },
  {
    id: 'scaleup-seo',
    title: 'ScaleUp SaaS — Global Organic SEO Domination',
    client: 'ScaleUp Workflow Automation',
    category: 'seo',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    results: 'Ranked #1 for 48 High-Intent Enterprise SaaS Keywords',
    desc: 'Executed a 12-month technical SEO audit, high DA digital PR campaign, and programmatic SEO architecture that tripled organic trial signups.',
    techStack: ['Technical SEO', 'Schema JSON-LD', 'Hreflang', 'Ahrefs API'],
    testimonial: {
      quote: 'We now outrank Zendesk and HubSpot for our core workflow automation search terms. AVRX is our secret weapon.',
      author: 'Samir Patel',
      role: 'VP of Growth, ScaleUp SaaS'
    }
  },
  {
    id: 'aegis-wealth',
    title: 'Aegis Wealth Management — Brand Identity & Corporate Portal',
    client: 'Aegis Capital Advisors',
    category: 'branding',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    results: 'Rebranding Award Winner 2025 & $120M AUM Onboarded',
    desc: 'Comprehensive rebranding from traditional wealth firm to a futuristic dark-luxury financial institution with interactive wealth projection charts.',
    techStack: ['Figma Design System', 'Brand Identity', 'React', 'D3.js Charts'],
    testimonial: {
      quote: 'The dark CRED-style aesthetic transformed our firm from looking like a legacy bank to an elite modern family office.',
      author: 'Catherine Duwain',
      role: 'Managing Partner, Aegis Wealth'
    }
  },
  {
    id: 'avrx-ai-copilot',
    title: 'Enterprise AI Lead Scoring & Advisor Copilot',
    client: 'Global Logistics Enterprise',
    category: 'ai',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    results: '99.4% Spam Filtering & 3.8x High-Ticket Lead Conversion',
    desc: 'Custom trained AI assistant embedded into client web properties that evaluates visitor intent, calculates instant quotes, and schedules executive calls.',
    techStack: ['Gemini API', 'TypeScript', 'Vector Embeddings', 'Node.js'],
    testimonial: {
      quote: 'Our sales team stopped wasting time on tire-kickers. The AI qualifies and routes only decision-makers with budget.',
      author: 'David Thorne',
      role: 'Chief Revenue Officer'
    }
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cred-style-fintech',
    title: 'How NexaPay Achieved 340% Growth with CRED-Inspired Luxury UX',
    client: 'NexaPay Financial',
    industry: 'Fintech & Banking',
    challenge: 'NexaPay suffered from a clunky, outdated mobile interface with a 68% drop-off rate during KYC onboarding and low daily active user engagement.',
    solution: 'AVRX redesigned the entire application with dark luxury glassmorphism, haptic micro-interactions, instant biometric KYC, and gamified credit reward cards.',
    outcome: 'Onboarding completion rose to 94%, daily active users tripled, and the brand secured $18M in Series A funding within 4 months of launch.',
    stats: [
      { label: 'Onboarding Completion', value: '94%' },
      { label: 'Monthly Active Users', value: '+340%' },
      { label: 'App Store Rating', value: '4.9 ★' }
    ]
  },
  {
    id: 'enterprise-seo-scale',
    title: 'From 5,000 to 180,000 Monthly Organic Visitors in 12 Months',
    client: 'ScaleUp SaaS Platform',
    industry: 'B2B Enterprise Software',
    challenge: 'Stagnant organic search traffic and high reliance on expensive Google search ads with rising CPCs.',
    solution: 'AVRX performed a 100-point technical SEO overhaul, implemented programmatic comparison pages, and earned 85 high-authority DA 70+ editorial backlinks.',
    outcome: 'Organic search became their #1 customer acquisition channel, generating 1,400+ qualified software trials every month.',
    stats: [
      { label: 'Organic Search Growth', value: '3,600%' },
      { label: 'Page 1 Keywords', value: '420+' },
      { label: 'Ad Spend Saved', value: '$45K/mo' }
    ]
  },
  {
    id: 'healthcare-speed-revamp',
    title: 'Hospital Portal Modernization & Telemedicine Booking Engine',
    client: 'Zenith Hospital Group',
    industry: 'Healthcare & Telemedicine',
    challenge: 'Legacy hospital website took 6.8 seconds to load, failing mobile Core Web Vitals and causing patient frustration during emergency appointment bookings.',
    solution: 'Rebuilt the portal from the ground up using React, Vite, and Tailwind CSS with edge caching and integrated 3-click doctor appointment scheduling.',
    outcome: 'Page speed dropped to 0.8s (100 Lighthouse score), mobile booking conversions rose 220%, and receptionist call volume decreased by 40%.',
    stats: [
      { label: 'Lighthouse Speed', value: '100/100' },
      { label: 'Booking Conversion', value: '+220%' },
      { label: 'Server Response', value: '80 ms' }
    ]
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'cred-dark-ui-design-principles',
    title: 'Why CRED & Linear-Inspired Dark Luxury UI Converts High-Ticket Clients',
    slug: 'cred-dark-ui-design-principles',
    category: 'UI/UX Design',
    date: 'August 1, 2026',
    readTime: '6 min read',
    author: {
      name: 'Vikramaditya Rai',
      role: 'Chief Design Officer, AVRX',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    excerpt: 'Explore the psychology of dark luxury web design, glassmorphism aesthetics, and why high-value enterprise buyers trust polished visual hierarchy.',
    content: `In digital business, your website is your global flagship headquarters. When enterprise decision-makers and high-net-worth consumers evaluate a brand, they make a trust judgment within 50 milliseconds. Traditional bright white templates with generic stock photos signal commoditization; in contrast, CRED and Linear-inspired dark luxury aesthetics convey authority, precision, and engineering excellence.
    
    Why Dark Themes Work for High-Ticket B2B & Fintech:
    1. Reduced Visual Noise: Dark backgrounds (#08090C to #13161F) allow vibrant accent colors like electric blue and neon cyan to guide the human eye directly to primary call-to-actions.
    2. Perceived Premium Value: Just as luxury watches use matte black and brushed steel packaging, dark glassmorphic cards create a tactile sense of depth and security.
    3. OLED Battery & Eye Comfort: Professionals spend 10+ hours a day on screens. Dark themes reduce glare and eye strain, increasing average session dwell time by up to 35%.`,
    tags: ['UI/UX', 'Dark Theme', 'CRED Design', 'Web Development', 'Branding']
  },
  {
    id: 'ai-in-digital-banking-2026',
    title: 'The Rise of Autonomous AI Assistants in Financial Lending & Loan Underwriting',
    slug: 'ai-in-digital-banking-2026',
    category: 'AI & Finance',
    date: 'July 28, 2026',
    readTime: '8 min read',
    author: {
      name: 'Dr. Neha Sharma',
      role: 'Head of Financial Tech & AI',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
    },
    excerpt: 'How AI-powered loan eligibility algorithms and instant GST reconciliation are replacing traditional 30-day bank approval bottlenecks.',
    content: `For decades, obtaining a business loan or home mortgage required weeks of physical paperwork, manual balance sheet audits, and opaque credit officer appraisals. In 2026, AI-driven lending platforms like AVRX Financial are transforming the speed of credit.
    
    By connecting directly to verified GST filing registries and bank account data APIs, our AI underwriting models analyze cash flow stability, seasonal revenue dips, and debt service ratios in under 90 seconds. Entrepreneurs no longer have to wait 30 days for growth capital.`,
    tags: ['Fintech', 'Artificial Intelligence', 'Business Loan', 'GST', 'Banking']
  },
  {
    id: 'core-web-vitals-seo-checklist',
    title: 'The 2026 Core Web Vitals Checklist: Hitting 100/100 Lighthouse Scores',
    slug: 'core-web-vitals-seo-checklist',
    category: 'SEO & Performance',
    date: 'July 19, 2026',
    readTime: '7 min read',
    author: {
      name: 'Arjun Mehta',
      role: 'Senior SEO Architect',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    },
    excerpt: 'Practical engineering tips to eliminate Layout Shift (CLS), optimize Largest Contentful Paint (LCP), and rank above slower competitors on Google.',
    content: `Google's algorithm prioritizes websites that load instantly and respond without lag. Even if you have world-class backlinks, a sluggish website with high First Input Delay will lose top rankings to faster competitors.
    
    Here is how AVRX engineers achieve 100/100 Lighthouse scores:
    - Zero Blocking Scripts: Defer non-essential third-party analytics until after First Contentful Paint.
    - Image Dimension Fixing: Always declare explicit width and height attributes to prevent Cumulative Layout Shift (CLS).
    - Next-Gen Asset Encoding: Serve AVIF and WebP images via an edge CDN with automatic responsive srcset tags.`,
    tags: ['SEO', 'Page Speed', 'React', 'Vite', 'Core Web Vitals']
  }
];

export const JOB_OPENINGS: JobOpening[] = [
  {
    id: 'senior-full-stack-engineer',
    title: 'Senior Full Stack TypeScript & React Engineer',
    department: 'Engineering & Architecture',
    location: 'Bangalore / Remote (Global)',
    type: 'Full-time',
    experience: '5+ Years',
    salary: '$95,000 - $140,000 / ₹25L - ₹42L p.a.',
    desc: 'We are looking for an elite full-stack engineer passionate about CRED-level visual perfection, ultra-fast Vite builds, and scalable Node.js microservices.',
    responsibilities: [
      'Architect and build production-ready web and mobile applications using React 18, Tailwind CSS, and TypeScript.',
      'Design high-throughput backend APIs and database schemas with PostgreSQL and Firebase.',
      'Collaborate directly with product design to implement buttery-smooth Framer Motion animations.',
      'Mentor junior engineers and uphold strict code quality and security standards.'
    ],
    requirements: [
      '5+ years of production experience with React, TypeScript, and modern CSS.',
      'Deep understanding of performance optimization, Core Web Vitals, and SSR/SSG.',
      'Experience with payment gateways (Stripe, Razorpay) and financial security protocols.',
      'A portfolio of visually stunning, high-performance web applications.'
    ]
  },
  {
    id: 'lead-ui-ux-designer',
    title: 'Lead Product UI/UX Designer (Dark Luxury Systems)',
    department: 'Product Design Studio',
    location: 'Bangalore / Remote',
    type: 'Full-time',
    experience: '4+ Years',
    salary: '$85,000 - $125,000 / ₹20L - ₹35L p.a.',
    desc: 'Lead the visual identity and interaction design for AVRX’s flagship digital platforms, fintech loans, and AI dashboards.',
    responsibilities: [
      'Create high-fidelity Figma design systems inspired by CRED, Linear, and Apple.',
      'Design interactive micro-animations, glassmorphism cards, and intuitive mobile journeys.',
      'Conduct user research and usability testing with enterprise clients.',
      'Work alongside frontend developers to ensure 100% pixel-perfect implementation.'
    ],
    requirements: [
      'Mastery of Figma, design tokens, auto-layout, and interactive prototyping.',
      'Strong portfolio showcasing dark mode UI, financial dashboards, and luxury aesthetics.',
      'Obsessive eye for typography hierarchy, whitespace, and accessibility.'
    ]
  },
  {
    id: 'seo-growth-lead',
    title: 'Senior Enterprise SEO & Growth Specialist',
    department: 'Digital Marketing & Growth',
    location: 'Remote',
    type: 'Full-time',
    experience: '4+ Years',
    salary: '$70,000 - $105,000 / ₹15L - ₹28L p.a.',
    desc: 'Drive organic search growth and technical SEO strategy for AVRX and our enterprise client portfolio.',
    responsibilities: [
      'Execute technical SEO audits, schema JSON-LD implementation, and site speed strategy.',
      'Manage high DA editorial outreach and digital PR backlink campaigns.',
      'Analyze Google Search Console and GA4 data to uncover keyword ranking opportunities.',
      'Collaborate with content writers to publish high-authority industry pillar articles.'
    ],
    requirements: [
      '4+ years proven track record of ranking enterprise websites on Google Page 1.',
      'Expertise in Ahrefs, Screaming Frog, Search Console, and schema markup.',
      'Strong analytical mindset and excellent written communication skills.'
    ]
  }
];

export const FAQS_LIST: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'What makes AVRX different from a standard web development or finance agency?',
    answer: 'AVRX is a unified enterprise platform combining world-class digital engineering (CRED-inspired web & app development), comprehensive financial solutions (loans & government subsidy schemes), statutory tax/GST compliance, and cutting-edge AI tools under one roof. You deal with one trusted partner instead of juggling 5 different vendors.',
    category: 'general'
  },
  {
    id: 'faq-2',
    question: 'How long does it take to develop a custom business website or mobile app with AVRX?',
    answer: 'A high-converting corporate website typically takes 2 to 4 weeks from Figma approval to live cloud deployment. Complex custom mobile apps (iOS & Android) or fintech platforms take 6 to 10 weeks depending on custom integrations, payment gateways, and backend architecture.',
    category: 'digital'
  },
  {
    id: 'faq-3',
    question: 'Can AVRX help me get a collateral-free business loan or government subsidy?',
    answer: 'Yes! We specialize in unsecured business loans up to ₹2 Crores ($250,000) based on GST returns and cash flows, as well as government subsidy schemes like PMEGP (up to 35% subsidy), Mudra Shishu/Kishore/Tarun, and Stand-Up India for SC/ST and Women entrepreneurs.',
    category: 'financial'
  },
  {
    id: 'faq-4',
    question: 'What documents are required to start GST registration and monthly filing?',
    answer: 'For a new GST registration, you only need the proprietor/director PAN Card, Aadhaar Card, passport photo, and business address proof (electricity bill or rent agreement). Our team completes the entire application online within 3 to 5 business days.',
    category: 'tax'
  },
  {
    id: 'faq-5',
    question: 'Do you provide continuous SLA maintenance and security for websites after launch?',
    answer: 'Absolutely. Our Website Maintenance SLA plans include 24/7 automated uptime monitoring, weekly AWS cloud backups, WAF malware protection, Core Web Vitals speed tuning, and 4-hour turnaround for on-demand content updates.',
    category: 'digital'
  },
  {
    id: 'faq-6',
    question: 'Are the AVRX AI tools free to use on the website?',
    answer: 'Yes! Our AI Website Health Checker, AI SEO Score Analyzer, and AI Page Speed tool are available for instant live scans on our AI Solutions page. For enterprise AI chatbots and custom lead scoring integration, we offer dedicated API plans.',
    category: 'ai'
  },
  {
    id: 'faq-7',
    question: 'How does AVRX ensure my company data and financial information remain secure?',
    answer: 'We adhere to SOC2, GDPR, and HIPAA data security practices. All data in transit is encrypted using 256-bit TLS/SSL, and all stored data uses AES-256 encryption. We never share client financial records or trade secrets with third parties.',
    category: 'general'
  },
  {
    id: 'faq-8',
    question: 'Can I transfer my existing high-interest loan to AVRX for a lower EMI?',
    answer: 'Yes, our Balance Transfer & Refinance solution allows you to transfer existing home, business, or property loans to AVRX partner banks at lower interest rates (starting 8.35% p.a.), reducing your EMI and offering additional top-up cash.',
    category: 'financial'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'web-starter',
    name: 'Corporate Flagship Website',
    category: 'website',
    price: '$1,299',
    period: 'one-time / ₹89,000',
    badge: 'Popular for Business',
    desc: 'High-converting 8-10 page CRED-inspired corporate website with SEO schema and CMS.',
    features: [
      'Custom Figma dark/light theme design',
      '8 to 10 fully responsive pages',
      'Core Web Vitals 95+ speed optimized',
      'SEO Schema JSON-LD & meta tag setup',
      'Contact form & WhatsApp live button',
      '1 Year Free NVMe Cloud Hosting & SSL',
      '30 Days post-launch technical SLA'
    ],
    isPopular: true
  },
  {
    id: 'web-enterprise',
    name: 'Enterprise Custom Portal',
    category: 'website',
    price: '$3,499',
    period: 'one-time / ₹2,45,000',
    badge: 'Comprehensive',
    desc: 'Multi-language enterprise web platform with custom backend integrations and animations.',
    features: [
      'Unlimited custom pages & components',
      'Advanced Framer Motion 3D micro-animations',
      'Custom CRM / ERP API integration',
      'Multi-currency & multi-language support',
      'Dedicated cloud server architecture',
      'Comprehensive Core Web Vitals SLA',
      '90 Days VIP technical account manager'
    ]
  },
  {
    id: 'app-mobile',
    name: 'Cross-Platform Mobile App',
    category: 'app',
    price: '$5,500',
    period: 'one-time / ₹3,85,000',
    badge: 'iOS & Android',
    desc: 'React Native / Flutter mobile application for both iOS and Android App Stores.',
    features: [
      'Single codebase native performance',
      'Apple FaceID & Biometric login',
      'Stripe / Razorpay payment gateway',
      'Real-time push notifications & alerts',
      'Admin command center web panel',
      'App Store & Google Play publishing',
      '6 Months free maintenance & bug fixes'
    ],
    isPopular: true
  },
  {
    id: 'seo-growth-monthly',
    name: 'SEO & Organic Domination',
    category: 'seo',
    price: '$799',
    period: 'per month / ₹55,000/mo',
    badge: 'Growth Engine',
    desc: 'Turnkey monthly SEO execution including content, technical fixes, and high DA links.',
    features: [
      'Dedicated Senior SEO Strategist',
      'Technical Core Web Vitals maintenance',
      '4 In-depth SEO pillar blog posts monthly',
      '8 to 10 High DA (60+) editorial backlinks',
      'Google Maps & local citation building',
      'Live interactive keyword ranking dashboard',
      'Monthly ROI executive video report'
    ]
  },
  {
    id: 'maintenance-sla-pro',
    name: '24/7 Website Maintenance SLA',
    category: 'maintenance',
    price: '$249',
    period: 'per month / ₹18,000/mo',
    badge: 'Peace of Mind',
    desc: 'Comprehensive cloud maintenance, security patching, and unlimited content edits.',
    features: [
      '24x7 Automated uptime & server monitoring',
      'Weekly AWS S3 off-site encrypted backup',
      'Malware firewall & attack protection',
      'Unlimited minor content & banner updates',
      'Monthly Core Web Vitals speed tuning',
      'Priority 4-hour support SLA'
    ],
    isPopular: true
  },
  {
    id: 'ai-copilot-integration',
    name: 'Custom AI Assistant & Chatbot',
    category: 'ai',
    price: '$1,899',
    period: 'one-time setup + $99/mo',
    badge: 'AI Powered',
    desc: 'Custom trained AI chatbot embedded on your site for 24/7 lead qualification & support.',
    features: [
      'Custom trained on your docs & FAQs',
      '24/7 automated customer query resolution',
      'Instant lead qualification & CRM routing',
      'Automated appointment calendar booking',
      'Multi-language conversational support',
      'Real-time analytics & conversation logs'
    ]
  }
];

export const COMPANY_STATS = [
  { label: 'Successful Projects Delivered', value: '450+', change: 'Across 18 Countries' },
  { label: 'Financial Loans Sanctioned', value: '₹180 Cr+', change: '$22M+ Disbursed' },
  { label: 'Client Retention & SLA Rate', value: '98.6%', change: 'Long-term Trust' },
  { label: 'Average Speed Lighthouse Score', value: '99/100', change: 'Sub-second UI' }
];

export const INDUSTRIES_SERVED = [
  { title: 'Fintech & Digital Banking', desc: 'Secure payment apps, UPI rails, lending portals, and KYC automation.', icon: 'DollarSign' },
  { title: 'Healthcare & Telemedicine', desc: 'HIPAA-compliant doctor portals, online appointments, and lab booking.', icon: 'HeartPulse' },
  { title: 'Real Estate & Construction', desc: 'Property listing portals, 360° virtual tours, and mortgage calculators.', icon: 'Home' },
  { title: 'Education & Universities', desc: 'School management apps, online admissions, and live class LMS.', icon: 'GraduationCap' },
  { title: 'Retail & eCommerce', desc: 'High-speed online shopping stores, abandoned cart recovery, and inventory sync.', icon: 'ShoppingBag' },
  { title: 'Corporate & Legal Firms', desc: 'Executive brand websites, investor relations suites, and GST compliance.', icon: 'Briefcase' }
];

export const CLIENT_TESTIMONIALS = [
  {
    quote: 'AVRX is the only partner we found that excels at both elite CRED-like digital design and statutory financial & tax compliance. They built our website and handle our GST seamlessly.',
    author: 'Rajeshwar Bhargava',
    role: 'Founder & CEO, Apex Venture Dynamics',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    quote: 'The AI Website Health Checker and SEO package doubled our organic trial signups in 5 months. Their code quality is immaculate.',
    author: 'Sarah Jenkins',
    role: 'VP of Growth, Hyperion SaaS USA',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
  },
  {
    quote: 'We secured an unsecured business loan of ₹75 Lakhs within 72 hours through AVRX’s financial team, allowing us to double our manufacturing capacity.',
    author: 'Mohammad Farooq',
    role: 'Managing Director, Horizon Components',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  }
];
