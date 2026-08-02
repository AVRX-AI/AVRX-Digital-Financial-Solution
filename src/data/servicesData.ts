import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  // ==================== DIGITAL & TECHNOLOGY SERVICES ====================
  {
    id: 'website-design',
    title: 'Website Design & Development',
    titleHi: 'वेबसाइट डिज़ाइन और डेवलपमेंट',
    category: 'digital',
    slug: 'website-design',
    tagline: 'Custom, High-Speed, SEO-Ready Websites for Business Growth',
    description: 'Transform your brand presence with AVRX Custom Website Design. We craft Modern Responsive Websites, Business & Corporate Portals, E-Commerce Stores, Landing Pages, and WordPress/Custom Web Applications optimized for 100/100 Core Web Vitals.',
    seoDescription: 'Professional Website Design services by AVRX Digital & Financial Solution. Responsive, fast loading, SEO ready custom websites, e-commerce stores, and corporate portals.',
    iconName: 'Layout',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80',
    altText: 'AI-powered Website Design Workspace with responsive layouts and UI UX mockups by AVRX Digital',
    features: [
      'Modern Responsive & Mobile-First Layouts',
      'Business, Corporate & E-Commerce Web Stores',
      'Custom Web Apps & High-Converting Landing Pages',
      'WordPress & Bespoke Full-Stack Architectures',
      '100/100 Core Web Vitals & Google SEO Ready',
      'Enterprise-Grade SSL & Data Security'
    ],
    benefits: [
      '3x increase in visitor engagement and conversions',
      'Top-tier Google ranking with clean semantic code',
      'Instant loading speed (< 1.2s First Contentful Paint)',
      'Secure, scalable, and easy to manage via CMS'
    ],
    estimatedTimeline: '7 to 15 Business Days',
    startingPrice: '₹4,999 / Project',
    faqs: [
      {
        question: 'Do you provide SEO-optimized websites?',
        answer: 'Yes! Every website built by AVRX includes on-page SEO, schema markup, Core Web Vitals optimization, and mobile responsiveness.'
      },
      {
        question: 'Can you migrate my old website to a modern glassmorphic design?',
        answer: 'Absolutely. We specialize in redesigning legacy sites into modern Apple & Linear inspired glassmorphism interfaces.'
      }
    ],
    relatedServiceIds: ['seo-services', 'app-development', 'web-hosting']
  },
  {
    id: 'app-development',
    title: 'Application Development',
    titleHi: 'मोबाइल और वेब ऐप डेवलपमेंट',
    category: 'digital',
    slug: 'application-development',
    tagline: 'Android, iOS, Flutter & AI-Powered Business Apps',
    description: 'Build native and cross-platform mobile apps that users love. AVRX engineers high-performance Android Apps, iOS Apps, Flutter Apps, Progressive Web Apps (PWAs), Custom Admin Panels, and AI-Powered Business Applications.',
    seoDescription: 'Custom Android, iOS, and Flutter Mobile App Development by AVRX. High performance web applications, PWAs, and AI software.',
    iconName: 'Smartphone',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
    altText: 'Mobile App Development screens on Android and iOS devices with AI code integration',
    features: [
      'Native Android & iOS Mobile Applications',
      'Cross-Platform Flutter & React Native Apps',
      'Progressive Web Apps (PWAs) with Offline Support',
      'Custom Admin Panels & Business Dashboards',
      'AI Apps with Gemini & NLP Integration',
      'Real-time Cloud Sync & Push Notifications'
    ],
    benefits: [
      'Seamless performance across all smartphones and tablets',
      'Secure payment gateways & OTP authentication',
      'Dedicated admin analytics and customer CRM',
      'Long-term scalability on Google Cloud / AWS'
    ],
    estimatedTimeline: '3 to 6 Weeks',
    startingPrice: '₹9,999 / App',
    faqs: [
      {
        question: 'Do you publish the apps to Google Play Store and Apple App Store?',
        answer: 'Yes, we handle complete deployment, store listing optimization (ASO), and verification for both Apple App Store and Google Play Store.'
      }
    ],
    relatedServiceIds: ['website-design', 'web-hosting', 'branding']
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing & Ads',
    titleHi: 'डिजिटल मार्केटिंग और विज्ञापन',
    category: 'digital',
    slug: 'digital-marketing',
    tagline: 'Result-Driven Google Ads, Social Ads & High-ROI Lead Generation',
    description: 'Scale your revenue with targeted AVRX Digital Marketing campaigns. We manage Facebook Ads, Instagram Ads, Google PPC Ads, YouTube Marketing, High-Intent Lead Generation, Brand Promotion, WhatsApp Marketing, and Email Campaigns.',
    seoDescription: 'AVRX Digital Marketing Agency in India. ROI focused Facebook Ads, Google Ads, YouTube Promotion, WhatsApp Marketing & Lead Generation.',
    iconName: 'TrendingUp',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    altText: 'Digital Marketing Analytics dashboard showing traffic growth and ROI metrics by AVRX',
    features: [
      'Facebook Ads & Instagram Performance Campaigns',
      'Google Search, Display & Performance Max Ads',
      'YouTube Video Ads & Influencer Brand Promotion',
      'High-Intent B2B & B2C Lead Generation Funnels',
      'WhatsApp Marketing Automations & Chatbots',
      'Targeted Email Marketing & Re-engagement Funnels'
    ],
    benefits: [
      'Instant targeted traffic and qualified leads',
      'AI-optimized ad bidding for lowest Cost-Per-Acquisition',
      'Weekly transparent performance analytics reports',
      'Multi-channel brand omnipresence'
    ],
    estimatedTimeline: 'Ongoing Monthly Growth',
    startingPrice: '₹999 / Month',
    faqs: [
      {
        question: 'How soon can we expect leads from Google and Facebook Ads?',
        answer: 'Paid campaigns begin generating impressions and qualified inquiries within 24 to 48 hours of campaign launch.'
      }
    ],
    relatedServiceIds: ['seo-services', 'website-design', 'graphic-design']
  },
  {
    id: 'seo-services',
    title: 'Search Engine Optimization (SEO)',
    titleHi: 'सर्च इंजन ऑप्टिमाइजेशन (SEO)',
    category: 'digital',
    slug: 'seo-services',
    tagline: 'Rank #1 on Google with Technical, On-Page & Local SEO',
    description: 'Dominate search engine results with AVRX comprehensive SEO services. We execute Technical SEO audits, Local SEO for Google Business Profile, high-intent Keyword Research, Authority Backlinks, and speed optimization for top Google Ranking.',
    seoDescription: 'Top SEO Agency India. Technical SEO, Local Business SEO, Keyword Research, high authority Backlinks, and Google ranking optimization by AVRX.',
    iconName: 'Search',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80',
    altText: 'SEO Dashboard showing number one Google keyword rankings and technical audit scores',
    features: [
      'Full Technical SEO & Core Web Vitals Audit',
      'Local SEO & Google Business Profile Optimization',
      'High-Intent Keyword Research & Competitor Analysis',
      'High-Authority White-Hat Backlink Building',
      'JSON-LD Structured Schema (Organization, FAQ, Service)',
      'Continuous Google Ranking & Traffic Monitoring'
    ],
    benefits: [
      'Long-term organic traffic without paying for ad clicks',
      'Top 3 rankings for your core industry keywords',
      '100/100 Google PageSpeed & SEO technical compliance',
      'Enhanced local customer footfall and phone inquiries'
    ],
    estimatedTimeline: '3 to 6 Months for Dominance',
    startingPrice: '₹4,999 / Month',
    faqs: [
      {
        question: 'Do you provide guarantee for Google page 1 ranking?',
        answer: 'We use Google-verified white-hat SEO strategies and schema optimization that consistently bring our clients to Page 1 for targeted buyer keywords.'
      }
    ],
    relatedServiceIds: ['website-design', 'digital-marketing', 'web-hosting']
  },
  {
    id: 'web-hosting',
    title: 'Web Hosting & Cloud Solutions',
    titleHi: 'क्लाउड वेब होस्टिंग और डोमेन',
    category: 'digital',
    slug: 'web-hosting',
    tagline: 'High-Speed Cloud Hosting, VPS, Free SSL & Business Email',
    description: 'Host your websites and apps on lightning-fast, ultra-secure AVRX Cloud Servers. We offer Cloud Hosting, Dedicated VPS, Business Hosting, 256-bit SSL Certificates, Professional Email Hosting, Domain Registration, and Zero-Downtime Migration.',
    seoDescription: 'Fast & Secure Cloud Hosting, VPS, Domain Registration, Business Email, and Free SSL by AVRX Digital & Financial Solution.',
    iconName: 'Server',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    altText: 'Modern Cloud Hosting data center servers with blue glowing fiber optic connections',
    features: [
      'Enterprise Cloud Hosting & Scalable VPS Servers',
      'FREE 256-Bit SSL Certificate & DDoS Protection',
      'Professional Business Email Hosting (user@avrx.in style)',
      'Domain Name Registration & DNS Configuration',
      'Daily Automated Offsite Backups',
      'FREE Zero-Downtime Website Migration'
    ],
    benefits: [
      '99.99% Server Uptime Guarantee',
      'NVMe SSD storage for 10x faster database queries',
      '24x7 Server Monitoring and Malware Defense',
      'Dedicated Indian & Global Server Locations'
    ],
    estimatedTimeline: 'Same-Day Activation',
    startingPrice: '₹999 / Year',
    faqs: [
      {
        question: 'Will you help migrate my existing site from GoDaddy/Hostinger?',
        answer: 'Yes! We perform free, zero-downtime migrations from any hosting provider to AVRX Cloud.'
      }
    ],
    relatedServiceIds: ['website-design', 'website-maintenance', 'app-development']
  },
  {
    id: 'website-maintenance',
    title: 'Website Maintenance & Speed',
    titleHi: 'वेबसाइट मेंटेनेंस और स्पीड ऑप्टिमाइजेशन',
    category: 'digital',
    slug: 'website-maintenance',
    tagline: 'Speed Optimization, Security Updates, Backups & Bug Fixes',
    description: 'Keep your website secure, fast, and bug-free. Our monthly Website Maintenance covers Core Web Vitals speed optimization, security hardening, automated daily backups, emergency bug fixes, and continuous health monitoring.',
    seoDescription: 'Professional Website Maintenance services by AVRX. Speed optimization, security patches, regular backups, and 24x7 monitoring.',
    iconName: 'ShieldCheck',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    altText: 'Website security shield icon and speed optimization code audit by AVRX team',
    features: [
      'Continuous Core Web Vitals Speed Optimization',
      'Proactive Security Patching & Firewall Upgrades',
      'Daily Off-Site Automated Backups',
      'Rapid Bug Fixes & Content Update Support',
      'Monthly Health & Security Audit Reports',
      '24x7 Uptime & Performance Monitoring'
    ],
    benefits: [
      'Zero downtime or security vulnerability risks',
      'Always maintained for fast mobile page load',
      'Peace of mind so you focus on running your business',
      'Instant recovery from accidental data deletions'
    ],
    estimatedTimeline: 'Ongoing Monthly Protection',
    startingPrice: '₹1,999 / Month',
    faqs: [
      {
        question: 'Can I request content updates as part of maintenance?',
        answer: 'Yes, our monthly maintenance plans include regular text, image, and banner updates for your website.'
      }
    ],
    relatedServiceIds: ['website-design', 'web-hosting', 'seo-services']
  },
  {
    id: 'graphic-design',
    title: 'Graphic & UI/UX Design',
    titleHi: 'ग्राफिक और UI/UX डिज़ाइन',
    category: 'digital',
    slug: 'graphic-design',
    tagline: 'Stunning Logos, Social Media Banners, Brochures & UI Mockups',
    description: 'Elevate your visual identity with AVRX creative Graphic Design team. We design memorable Logos, Social Media Posts, Business Cards, Advertising Banners, Posters, Corporate Brochures, Marketing Flyers, and High-Fidelity UI/UX Designs.',
    seoDescription: 'Creative Graphic Design agency by AVRX. Custom Logo Design, Social Media graphics, Brochures, Banners, and UI UX design.',
    iconName: 'Palette',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80',
    altText: 'Graphic designer creating vector logos and color palettes on digital drawing tablet',
    features: [
      'Custom Logo Design & Vector Brand Marks',
      'Engaging Social Media Ad Creatives & Reels Covers',
      'Professional Business Cards & Corporate Stationery',
      'High-Impact Banners, Posters & Event Flyers',
      'Multi-page Corporate Brochures & Catalog Design',
      'Glassmorphism UI/UX Design for Web & Apps'
    ],
    benefits: [
      'Distinctive visual identity that stands out from competitors',
      'All source files provided (AI, PSD, SVG, PNG, PDF)',
      'Unlimited revisions until perfect satisfaction',
      'Cohesive brand look across digital and print media'
    ],
    estimatedTimeline: '2 to 5 Business Days',
    startingPrice: '₹4,999 / Package',
    faqs: [
      {
        question: 'Do you provide source files for logos and banners?',
        answer: 'Yes, we deliver all high-resolution vector and print-ready source files including Illustrator (.ai), SVG, EPS, and PNG.'
      }
    ],
    relatedServiceIds: ['branding', 'website-design', 'digital-marketing']
  },
  {
    id: 'branding',
    title: 'Brand Identity & Strategy',
    titleHi: 'ब्रांडिंग और कॉर्पोरेट पहचान',
    category: 'digital',
    slug: 'branding',
    tagline: 'Complete Brand Strategy, Corporate Identity & Packaging Design',
    description: 'Build an iconic brand with AVRX Branding services. We define Brand Strategy, craft Corporate Branding & Style Guides, develop professional Business Profiles, design Packaging, and position your company as an industry leader.',
    seoDescription: 'Complete Brand Identity, Corporate Branding, Business Profile, and Packaging Design by AVRX Digital & Financial Solution.',
    iconName: 'Award',
    image: 'https://images.unsplash.com/photo-1542744094-3a3e220383f1?auto=format&fit=crop&w=800&q=80',
    altText: 'Corporate branding strategy meeting and brand style guide book by AVRX',
    features: [
      'Comprehensive Brand Identity & Positioning Strategy',
      'Corporate Style Guide (Typography, Color Palettes, Usage)',
      'Executive Business Profile & Deck Design',
      'Product Packaging & Label Design',
      'Brand Voice, Tone & Tagline Creation',
      'Rebranding & Corporate Makeovers'
    ],
    benefits: [
      'Establishes instant trust and authority with clients',
      'Consistent brand storytelling across every touchpoint',
      'Increases brand equity and customer loyalty',
      'Professional presentation for investors and stakeholders'
    ],
    estimatedTimeline: '10 to 20 Business Days',
    startingPrice: '₹19,999 / Brand Suite',
    faqs: [
      {
        question: 'What is included in the Corporate Style Guide?',
        answer: 'It includes your logo usage rules, official color hex/RGB codes, typography pairing, iconography, and brand photography guidelines.'
      }
    ],
    relatedServiceIds: ['graphic-design', 'website-design', 'digital-marketing']
  },

  // ==================== FINANCIAL SERVICES ====================
  {
    id: 'personal-loans',
    title: 'Personal Loans',
    titleHi: 'पर्सनल लोन (व्यक्तिगत ऋण)',
    category: 'financial',
    slug: 'personal-loans',
    tagline: 'Instant Personal Loans with Minimum Documentation & Low EMI',
    description: 'Fulfill your medical, travel, wedding, or emergency needs with AVRX Personal Loans. We assist with quick eligibility verification, competitive interest rates from top banks/NBFCs, transparent terms, and paperless documentation.',
    seoDescription: 'Apply for Personal Loans online through AVRX Digital & Financial Solution. Minimum documentation, low EMI, quick approval guidance.',
    iconName: 'CreditCard',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
    altText: 'Financial planning dashboard with personal loan EMI calculator and approved badge',
    features: [
      'Loan Amount from ₹50,000 up to ₹40,00,000',
      'Flexible Repayment Tenures (12 to 60 Months)',
      'Competitive Interest Rates Starting from 10.5% p.a.',
      'Paperless Digital Verification & KYC Guidance',
      'Zero Hidden Processing Surprises',
      'Expert Eligibility & CIBIL Assessment'
    ],
    benefits: [
      'Fast sanction within 24 to 48 hours',
      'No collateral or guarantor required',
      'Customized EMI plans to match your monthly budget',
      'Direct coordination with top lending banks & NBFCs'
    ],
    estimatedTimeline: '24 to 72 Hours Disbursal',
    startingPrice: 'Low EMI Options',
    faqs: [
      {
        question: 'What documents are required for a Personal Loan?',
        answer: 'Basic KYC (PAN card, Aadhaar card), last 6 months bank statements, and salary slips (for salaried) or ITR (for self-employed).'
      }
    ],
    relatedServiceIds: ['credit-score', 'business-loans', 'income-tax-itr']
  },
  {
    id: 'business-loans',
    title: 'Business & MSME Loans',
    titleHi: 'बिज़नेस और MSME लोन',
    category: 'financial',
    slug: 'business-loans',
    tagline: 'Working Capital, MSME & Startup Financing Without Hassle',
    description: 'Empower your enterprise expansion with AVRX Business Loan consultation. We help MSMEs, startups, and established businesses secure Working Capital Loans, Unsecured Business Loans, Machinery Financing, and Government Scheme Loans.',
    seoDescription: 'MSME Loans, Business Working Capital, Startup Loans and Term Loan assistance by AVRX Digital & Financial Solution.',
    iconName: 'Briefcase',
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
    altText: 'Business meeting analyzing company revenue growth and MSME loan approval chart',
    features: [
      'Unsecured Business Loans up to ₹75,00,000',
      'MSME & CGTMSE Government Scheme Loan Assistance',
      'Working Capital Limits, Overdraft & Cash Credit',
      'Startup Funding & Term Loan Consultation',
      'Flexible Repayment Schedules aligned with cash flow',
      'Balance Transfer & Top-Up Loan Advisory'
    ],
    benefits: [
      'Fuel business expansion without diluting ownership',
      'Quick financial assessment by AVRX experts',
      'Special interest rate discounts for Udyam/MSME registered firms',
      'Dedicated relationship manager support'
    ],
    estimatedTimeline: '3 to 7 Business Days',
    startingPrice: 'Competitive Rates',
    faqs: [
      {
        question: 'Can new startups apply for MSME loans?',
        answer: 'Yes, we assist startups in checking eligibility under government MSME schemes like PMEGP, Mudra, and CGTMSE.'
      }
    ],
    relatedServiceIds: ['udyam-registration', 'gst-services', 'credit-score']
  },
  {
    id: 'home-loans',
    title: 'Home Loans & Balance Transfer',
    titleHi: 'होम लोन और बैलेंस ट्रांसफर',
    category: 'financial',
    slug: 'home-loans',
    tagline: 'Lowest Interest Rates for Home Purchase, Construction & Transfer',
    description: 'Make your dream home a reality with AVRX Home Loan advisory. We assist in Home Purchase Loans, Plot & Construction Loans, Home Renovation Financing, and Home Loan Balance Transfer to reduce your ongoing EMI burden.',
    seoDescription: 'Home Loans, Property Purchase, House Construction, and Home Loan Balance Transfer guidance by AVRX Digital & Financial Solution.',
    iconName: 'Home',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
    altText: 'Modern residential home with golden house keys and home loan interest rate calculator',
    features: [
      'Home Purchase & Construction Loans up to ₹5+ Crores',
      'Lowest Interest Rates Starting from 8.35% p.a.',
      'Long Repayment Tenure up to 30 Years',
      'Home Loan Balance Transfer to lower interest rates',
      'Top-Up Loan Facility for Home Improvement',
      'PMAY Subsidy Eligibility Assessment'
    ],
    benefits: [
      'Maximum tax benefits under Section 24(b) and 80C',
      'Zero prepayment penalties for floating rate loans',
      'Doorstep document pickup & valuation assistance',
      'Transparent comparison across SBI, HDFC, ICICI & Axis Bank'
    ],
    estimatedTimeline: '7 to 14 Business Days',
    startingPrice: 'From 8.35% p.a.',
    faqs: [
      {
        question: 'How much can I save by transferring my existing home loan balance?',
        answer: 'Even a 0.5% reduction in interest rate on a ₹50 Lakh home loan can save you over ₹3.5 Lakhs in total interest over 20 years.'
      }
    ],
    relatedServiceIds: ['insurance-services', 'credit-score', 'personal-loans']
  },
  {
    id: 'vehicle-loans',
    title: 'Vehicle & Commercial Loans',
    titleHi: 'कार, बाइक और कमर्शियल वाहन लोन',
    category: 'financial',
    slug: 'vehicle-loans',
    tagline: 'Fast Approval Car, Two-Wheeler & Commercial Fleet Loans',
    description: 'Drive away in your new vehicle with AVRX Vehicle Loan assistance. We offer hassle-free Car Loans, Two-Wheeler Loans, Used Car Financing, and Commercial Fleet Loans with up to 90% to 100% on-road funding.',
    seoDescription: 'Car Loans, Bike Loans, and Commercial Vehicle Loans with fast approval and low down payment by AVRX.',
    iconName: 'Truck',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
    altText: 'Luxury automobile and commercial fleet vehicle loan financing illustration',
    features: [
      'New & Used Car Loans with up to 100% On-Road Funding',
      'Two-Wheeler & Electric Vehicle (EV) Special Interest Rates',
      'Commercial Fleet & Transport Vehicle Financing',
      'Instant In-Principle Sanction Check',
      'Flexible repayment up to 7 years',
      'Minimal down payment options'
    ],
    benefits: [
      'Quick dealer coordination and direct disbursal',
      'Special EV green loan discount interest rates',
      'Simple documentation for salaried and self-employed',
      'Comprehensive motor insurance bundling support'
    ],
    estimatedTimeline: '24 to 48 Hours',
    startingPrice: 'Quick Disbursal',
    faqs: [
      {
        question: 'Is 100% on-road financing available for cars?',
        answer: 'Yes, select banks offer up to 100% on-road financing for applicants with a strong credit score (750+).'
      }
    ],
    relatedServiceIds: ['insurance-services', 'personal-loans', 'credit-score']
  },
  {
    id: 'insurance-services',
    title: 'Comprehensive Insurance Services',
    titleHi: 'संपूर्ण इंश्योरेंस सेवाएं (स्वास्थ्य, जीवन, वाहन)',
    category: 'financial',
    slug: 'insurance-services',
    tagline: 'Health, Life, Motor, Business & Travel Protection for Your Family',
    description: 'Protect what matters most with AVRX Insurance Advisory. We provide unbiased guidance and policy issuance for Health Insurance, Term Life Insurance, Vehicle Insurance, Business Property Insurance, Travel Insurance, and Group Coverages.',
    seoDescription: 'Health Insurance, Life Insurance, Motor Insurance, Business Insurance, and Travel policies by AVRX Digital & Financial Solution.',
    iconName: 'Shield',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    altText: 'Family protection and business insurance shield illustration with verified coverage checkmarks',
    features: [
      'Comprehensive Health & Medical Insurance Plans',
      'High-Cover Term Life Insurance with riders',
      'Two-Wheeler & Comprehensive Four-Wheeler Motor Insurance',
      'Commercial Business, Fire & Office Property Insurance',
      'International Travel & Accidental Insurance Plans',
      'Assistance with Rapid Claim Settlement & Renewals'
    ],
    benefits: [
      'Comparison across 25+ top IRDAI approved insurance providers',
      'Zero spam calls — impartial advice from AVRX advisors',
      'Tax deduction savings under Section 80D and 80C',
      'Dedicated claim assistance during medical emergencies'
    ],
    estimatedTimeline: 'Instant Policy Issuance',
    startingPrice: 'From ₹15 / Day',
    faqs: [
      {
        question: 'Will AVRX assist me during hospital insurance claim processing?',
        answer: 'Yes, our team provides full operational guidance for both cashless hospitalization and reimbursement claims.'
      }
    ],
    relatedServiceIds: ['personal-loans', 'home-loans', 'income-tax-itr']
  },
  {
    id: 'credit-score',
    title: 'Credit Score & Financial Guidance',
    titleHi: 'क्रेडिट स्कोर सुधार और परामर्श',
    category: 'financial',
    slug: 'credit-score',
    tagline: 'Check, Analyze & Improve Your Credit Score for High Loan Approval',
    description: 'Take control of your financial health with AVRX Credit Score Guidance. We provide Credit Score Analysis, practical improvement roadmaps, error dispute assistance, and guidance on achieving a 750+ score for lowest interest loans.',
    seoDescription: 'Credit Score Check Guidance, CIBIL Improvement Tips, Loan Eligibility Guide & Financial Planning by AVRX.',
    iconName: 'BarChart2',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
    altText: 'Credit score gauge speedometer showing excellent 800+ rating on financial dashboard',
    features: [
      'Comprehensive Credit Health & Report Review',
      'Actionable Roadmap to Boost Score Above 750+',
      'Credit Utilization Ratio Optimization Guidance',
      'Identification of Incorrect Entries & Dispute Support',
      'Best Credit Card & Loan Matching Recommendations',
      'Personalized Debt Consolidation Strategies'
    ],
    benefits: [
      'Unlock lowest interest rates on home, car & personal loans',
      'Avoid loan rejections due to hidden credit report errors',
      'Clear step-by-step instructions to rebuild damaged scores',
      'Free access to our AI Credit Simulator tool'
    ],
    estimatedTimeline: 'Immediate Analysis',
    startingPrice: 'Free AI Check Available',
    faqs: [
      {
        question: 'How long does it take to improve a low credit score?',
        answer: 'With disciplined repayment and correct credit mix as guided by AVRX, you can see noticeable score improvements within 3 to 6 months.'
      }
    ],
    relatedServiceIds: ['personal-loans', 'business-loans', 'home-loans']
  },
  {
    id: 'gst-services',
    title: 'GST Registration & Return Filing',
    titleHi: 'GST रजिस्ट्रेशन और रिटर्न फाइलिंग',
    category: 'financial',
    slug: 'gst-services',
    tagline: 'Hassle-Free GST Registration, Monthly Returns & Compliance',
    description: 'Ensure 100% tax compliance with AVRX GST Services. We handle New GST Registration, Monthly/Quarterly GST Return Filing (GSTR-1, GSTR-3B), Annual Returns, GST Amendments, Cancellation, and Expert GST Consultation.',
    seoDescription: 'GST Registration, GST Return Filing, GST Cancellation, Modification, and tax consultation by AVRX Digital & Financial Solution.',
    iconName: 'FileText',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
    altText: 'Accountant filing GST returns and reviewing tax compliance documents on laptop',
    features: [
      'New GSTIN Registration with Government Verification',
      'Monthly & Quarterly GSTR-1, GSTR-3B & GSTR-9 Filing',
      'Input Tax Credit (ITC) Reconciliation & Optimization',
      'GST Registration Amendment & Address Modification',
      'GST Cancellation & Surrender Assistance',
      'Notice Handling & Legal Tax Advisory Support'
    ],
    benefits: [
      '100% error-free filing on time to avoid government penalties',
      'Maximized Input Tax Credit savings for your business',
      'Dedicated Chartered Accountant & tax expert support',
      'Instant digital delivery of GST certificate and receipts'
    ],
    estimatedTimeline: '3 to 5 Days Registration',
    startingPrice: '₹999 / Filing',
    faqs: [
      {
        question: 'Is GST registration mandatory for my small business?',
        answer: 'GST registration is mandatory if your annual turnover exceeds ₹40 Lakhs (for goods) or ₹20 Lakhs (for services), or if you sell across state borders or on e-commerce sites.'
      }
    ],
    relatedServiceIds: ['income-tax-itr', 'tax-filing', 'udyam-registration']
  },
  {
    id: 'income-tax-itr',
    title: 'Income Tax Return (ITR) Filing',
    titleHi: 'इनकम टैक्स (ITR) फाइलिंग और टैक्स प्लानिंग',
    category: 'financial',
    slug: 'income-tax-itr',
    tagline: 'Expert ITR Filing, Maximum Tax Saving & Notice Reply Assistance',
    description: 'Optimize your taxes legally with AVRX Income Tax Services. We provide Salaried & Business ITR Filing (ITR-1 to ITR-6), Tax Saving Planning, Capital Gains Calculation, Refund Tracking, and Expert Reply to Income Tax Notices.',
    seoDescription: 'ITR Filing, Tax Planning, Tax Saving, Notice Reply, and Tax Refund Status Guidance by AVRX Digital & Financial Solution.',
    iconName: 'DollarSign',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=800&q=80',
    altText: 'Income tax return ITR filing calculator with savings advice and refund status',
    features: [
      'Salaried, Freelancer, Professional & Business ITR Filing',
      'Capital Gains (Stock Market, Crypto & Property) Tax Computation',
      'Old vs New Tax Regime Comparison & Tax Saving Advice',
      'Assistance with Income Tax Refund Tracking & Corrections',
      'Drafting & Filing Replies to IT Department Notices',
      'NRI Taxation & Foreign Income Compliance'
    ],
    benefits: [
      'Maximized legal tax deductions under sections 80C, 80D, 80E, etc.',
      'Zero calculation errors or defect notices',
      'Proof of income ready for bank loan & visa approvals',
      'Confidential and secure handling of financial data'
    ],
    estimatedTimeline: 'Same-Day or 24 Hours',
    startingPrice: '₹799 / ITR',
    faqs: [
      {
        question: 'Can you file ITR for stock market and F&O trading losses?',
        answer: 'Yes, our tax experts specialize in filing ITR-3 / ITR-2 for intraday, Futures & Options (F&O), and capital gains, ensuring loss carry-forward benefits.'
      }
    ],
    relatedServiceIds: ['tax-filing', 'gst-services', 'personal-loans']
  },
  {
    id: 'udyam-registration',
    title: 'Udyam (MSME) Registration',
    titleHi: 'उद्यम (MSME) रजिस्ट्रेशन और सरकारी योजनाएं',
    category: 'financial',
    slug: 'udyam-registration',
    tagline: 'Official Udyam Certificate & Unlock Government Loan Schemes',
    description: 'Empower your small or medium enterprise with official Udyam (MSME) Registration. AVRX assists with quick certificate issuance, explanation of MSME benefits, collateral-free government loan schemes, and trademark subsidies.',
    seoDescription: 'Udyam Registration, MSME Certificate Assistance, Government Scheme Guidance, and subsidy benefits explanation by AVRX.',
    iconName: 'CheckCircle',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    altText: 'MSME government certification Udyam registration badge and business expansion support',
    features: [
      'Official Government Udyam Registration Certificate',
      'Conversion of Old Udyog Aadhaar to New Udyam',
      'Complete Guidance on Government Subsidy & Schemes',
      'Eligibility for Collateral-Free Bank Loans (CGTMSE)',
      '1% Interest Rate Exemption on Bank Overdrafts',
      '50% Discount on Trademark & Patent Filing Fees'
    ],
    benefits: [
      'Protection against delayed payments from corporate buyers',
      'Priority consideration in government e-tenders (GeM)',
      'Concession on electricity bills and ISO certifications',
      'Permanent lifetime validity with no annual renewal hassle'
    ],
    estimatedTimeline: '1 to 2 Business Days',
    startingPrice: '₹499 / Certificate',
    faqs: [
      {
        question: 'What documents are needed for Udyam Registration?',
        answer: 'Only your Aadhaar number linked with mobile OTP and PAN card are required for instant digital Udyam Registration.'
      }
    ],
    relatedServiceIds: ['business-loans', 'gst-services', 'other-financial-services']
  },
  {
    id: 'tax-filing',
    title: 'Complete Tax Filing Services',
    titleHi: 'संपूर्ण टैक्स फाइलिंग (TDS, प्रोफेशनल टैक्स, कॉर्पोरेट)',
    category: 'financial',
    slug: 'tax-filing',
    tagline: 'Income Tax, Business Tax, GST, TDS & Professional Tax Filing',
    description: 'Your one-stop corporate tax department. AVRX provides complete Tax Filing Services covering Corporate Tax Returns, Quarterly TDS/TCS Filing (Forms 24Q, 26Q), Professional Tax Compliance, and Year-End Financial Audit preparation.',
    seoDescription: 'Comprehensive Tax Filing Services: Income Tax, Business Tax, GST, TDS, and Professional Tax filing by AVRX Digital & Financial Solution.',
    iconName: 'PieChart',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80',
    altText: 'Financial tax compliance spreadsheets and corporate audit documentation by AVRX',
    features: [
      'Quarterly TDS & TCS Return Filing (24Q, 26Q, 27Q)',
      'Corporate & Partnership Firm Tax Returns',
      'Professional Tax Registration & Monthly Filings',
      'Form 16 / Form 16A Generation & Verification',
      'Advance Tax Computation & Timely Alerts',
      'Year-End Accounting & Financial Statements'
    ],
    benefits: [
      'Zero late filing fees or compliance notices',
      'Single POC for all statutory corporate tax obligations',
      'Accurate reconciliation with Form 26AS & AIS/TIS',
      'Executive tax planning for upcoming financial years'
    ],
    estimatedTimeline: 'Scheduled Timely Filing',
    startingPrice: '₹1,499 / Quarter',
    faqs: [
      {
        question: 'Can AVRX handle monthly TDS compliance for our employees?',
        answer: 'Yes, we manage complete payroll TDS deductions, quarterly Form 24Q returns, and Form 16 issuance for employees.'
      }
    ],
    relatedServiceIds: ['income-tax-itr', 'gst-services', 'other-financial-services']
  },
  {
    id: 'other-financial-services',
    title: 'PAN, DSC, IEC & Company Registration',
    titleHi: 'PAN, DSC, IEC और कंपनी रजिस्ट्रेशन सेवाएं',
    category: 'financial',
    slug: 'other-financial-services',
    tagline: 'Company Registration, Digital Signature (DSC), IEC & PAN Assistance',
    description: 'Start and structure your business legally with AVRX Legal & Financial Advisory. We assist with Private Limited / LLP / OPC Company Registration, Class-3 Digital Signature Certificate (DSC), Import-Export Code (IEC), and New/Correction PAN Cards.',
    seoDescription: 'PAN Assistance, Business Registration, Digital Signature (DSC), IEC Registration, and Company Incorporation by AVRX Digital & Financial Solution.',
    iconName: 'Award',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
    altText: 'Company incorporation certificate, digital signature token DSC and legal business documents',
    features: [
      'Private Limited, LLP, OPC & Partnership Firm Registration',
      'Class 3 Digital Signature Certificate (DSC) with USB Token',
      'Import Export Code (IEC) Registration for Global Trade',
      'New PAN / TAN Application & Correction Assistance',
      'FSSAI Food License & Shop & Establishment Registration',
      'Dedicated Financial & Corporate Secretarial Consultation'
    ],
    benefits: [
      'Fast-track incorporation with MCA & Registrar of Companies',
      'Complete company incorporation kit (COI, MOA, AOA, PAN, TAN)',
      'Legal guidance on selecting the best business structure',
      'Transparent pricing with government fee breakdown'
    ],
    estimatedTimeline: '3 to 10 Business Days',
    startingPrice: '₹1,999 / Service',
    faqs: [
      {
        question: 'How long does it take to register a Private Limited Company in India?',
        answer: 'With standard MCA SPICe+ processing, Private Limited Company registration takes approximately 7 to 10 working days.'
      }
    ],
    relatedServiceIds: ['udyam-registration', 'gst-services', 'business-loans']
  }
];
