import { ServiceItem, AIToolItem, PricingPlan, BlogPost } from '../types';

export const DIGITAL_SERVICES: ServiceItem[] = [
  {
    id: 'website-design',
    title: 'Website Design',
    category: 'digital',
    shortDesc: 'Modern business websites designed for high performance, aesthetics and maximum conversion.',
    fullDesc: 'We build bespoke, ultra-fast, mobile-optimized business websites using modern frameworks. Designed with custom UI/UX, responsive layouts, fast cold starts, and built-in SEO architecture.',
    iconName: 'Layout',
    badge: 'Popular',
    priceStarting: '₹9,999',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    features: [
      'Custom Responsive UI/UX Design',
      'Ultra-Fast Loading & Core Web Vitals Optimization',
      'Built-in Technical & On-Page SEO Architecture',
      'Interactive Contact Forms & Lead Capture',
      'WhatsApp & Live Chat Integration',
      'SSL Security & Anti-Spam Architecture'
    ],
    benefits: [
      'Establish premium digital credibility',
      'Convert 3x more visitors into qualified leads',
      'Seamless experience across desktop, tablet & mobile',
      'Full ownership of source code & assets'
    ],
    process: [
      'Discovery & Business Requirements Analysis',
      'Wireframing & Visual UX Mockups',
      'Frontend Development & Responsive Styling',
      'SEO Architecture & Speed Optimization',
      'Testing & Live Deployment'
    ],
    whyChooseUs: [
      '2026 Modern Design Philosophy',
      'No slow generic templates or bloated CMS',
      'Built-in security & analytics architecture',
      'Dedicated ongoing technical support'
    ],
    faqs: [
      { question: 'How long does it take to design a business website?', answer: 'Most business websites are delivered within 7 to 14 working days, depending on scope and feature complexity.' },
      { question: 'Will my website work well on mobile devices?', answer: 'Yes, all AVRX websites are built desktop-first and mobile-optimized with 100% fluid responsive design.' }
    ]
  },
  {
    id: 'corporate-website-design',
    title: 'Corporate Website Design',
    category: 'digital',
    shortDesc: 'Enterprise-grade corporate websites for companies, organizations, and global brands.',
    fullDesc: 'Custom corporate web platforms engineered for enterprises, financial institutions, and fast-scaling organizations. Features multi-department architecture, investor portals, and enterprise security compliance.',
    iconName: 'Building2',
    badge: 'Enterprise',
    priceStarting: '₹19,999',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    features: [
      'Multi-Page Enterprise Navigation',
      'Investor & Newsroom Publishing Systems',
      'Role-based Content Access & Portals',
      'ISO/Security & Compliance Ready Architecture',
      'Custom CRM & Webhook API Integration',
      'High-Availability Cloud Server Setup'
    ],
    benefits: [
      'Project global enterprise brand stature',
      'Streamline corporate communications & stakeholder trust',
      'Scale effortlessly with growing traffic and traffic spikes'
    ],
    process: ['Enterprise Strategy', 'Architectural Design', 'Security & API Integration', 'Deployment & SLA Support'],
    whyChooseUs: ['Used by fast-growing brands & corporate leaders', 'Strict SLA uptime guarantees']
  },
  {
    id: 'landing-page-development',
    title: 'Landing Pages & Sales Funnels',
    category: 'digital',
    shortDesc: 'High-converting single-page landing experiences designed for paid ads, products, and lead generation.',
    fullDesc: 'Custom designed high-impact landing pages engineered specifically to maximize visitor conversions for marketing campaigns, product launches, event registrations, and direct lead generation.',
    iconName: 'Layout',
    badge: 'High Conversion',
    priceStarting: '₹4,999',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    features: [
      'Conversion-Centric UX & Visual Hierarchy',
      'Instant Lead Capture Forms & CRM Webhooks',
      'Direct WhatsApp & Call Click-to-Action Hooks',
      'Sub-Second Page Load Speed for Low Ad Bounce Rates',
      'Meta Pixel & Google Ads Conversion Tracking Setup',
      'A/B Split Test Ready Architecture'
    ],
    benefits: [
      'Lower customer acquisition costs on paid ad campaigns',
      'Double your lead capture rates with distraction-free UI',
      '100% mobile-optimized layout'
    ],
    process: [
      'Offer & Copywriting Strategy',
      'High-Impact Wireframe & UI Mockup',
      'Speed-Optimized Frontend Coding',
      'Tracking & Analytics Integration',
      'Launch & Campaign Live Test'
    ],
    whyChooseUs: [
      'Engineered for maximum ROI on ad spend',
      'Ultra-fast delivery within 3 to 5 business days'
    ],
    faqs: [
      { question: 'Can I link this landing page with my Google or Facebook ads?', answer: 'Yes, we integrate all necessary conversion tags, Meta Pixel, Google Ads tracking, and Google Analytics 4 tags.' },
      { question: 'How soon can a landing page be made live?', answer: 'Landing pages are typically completed and launched within 3 to 5 working days.' }
    ]
  },
  {
    id: 'web-portal-development',
    title: 'Web Portal Development',
    category: 'digital',
    shortDesc: 'Customer, employee, vendor, and multi-tier business management portal ecosystems.',
    fullDesc: 'Comprehensive cloud-based web portals for customer self-service, employee workflows, distributor networks, and business management. Features robust role-based access control, secure authentication, and real-time database integrations.',
    iconName: 'Building2',
    badge: 'Enterprise',
    priceStarting: '₹34,999',
    imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    features: [
      'Customer & Client Self-Service Portals',
      'Employee Management & Attendance Portals',
      'Vendor & Distributor Inventory Ecosystems',
      'Role-Based Access Control (RBAC) & Permissions',
      'Real-Time Reporting Dashboards & Data Export',
      'Bank-Grade 256-Bit SSL Data Encryption'
    ],
    benefits: [
      'Eliminate manual operational bottlenecks and paperwork',
      'Provide 24/7 self-service convenience to clients and stakeholders',
      'Unified real-time data visibility across departments'
    ],
    process: [
      'User Flow & Department Requirements Mapping',
      'Database Architecture & Security Blueprint',
      'Frontend Portal & Admin Dashboard Development',
      'Security Auditing & User Acceptance Testing',
      'Deployment & Staff Training'
    ],
    whyChooseUs: [
      'Bespoke scalable architecture with zero per-user licensing fees',
      'Enterprise SLA uptime and data backup protection'
    ],
    faqs: [
      { question: 'What types of portals can AVRX build?', answer: 'We build Customer Portals, Vendor/Supplier Portals, Employee HRMS Portals, B2B Distributor Dashboards, and Franchise Management systems.' },
      { question: 'Is user data secured inside the portal?', answer: 'Yes, all portals feature encrypted authentication, session timeouts, role-based permission tiers, and automated database backups.' }
    ]
  },
  {
    id: 'e-commerce-solutions',
    title: 'E-Commerce Solutions',
    category: 'digital',
    shortDesc: 'Scalable online stores with modern UI, secure payment gateways, and inventory management.',
    fullDesc: 'End-to-end e-commerce platforms with fast product catalogues, direct payment gateway integrations (UPI, Cards, NetBanking), order tracking, automated customer receipts, and cart recovery.',
    iconName: 'ShoppingBag',
    badge: 'High Demand',
    priceStarting: '₹24,999',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=800&q=80',
    features: [
      'Unlimited Product Catalogues & Categories',
      'Seamless Razorpay/Stripe Payment Gateway Integration',
      'Automated Order & Shipping Tracking',
      'Discount Coupons & Abandoned Cart Recovery',
      'Customer Accounts & Order History Dashboard',
      'Inventory & Stock Alert Management'
    ],
    benefits: ['Sell 24/7 to customers across India and globally', 'Zero monthly transaction commission penalties'],
    process: ['Product Structuring', 'Payment & Shipping Integration', 'Store Launch & Testing'],
    whyChooseUs: ['Instant page load speed for higher conversion', 'Mobile-first shopping cart UI']
  },
  {
    id: 'web-application-development',
    title: 'Web Application Development',
    category: 'digital',
    shortDesc: 'Custom web applications, SaaS products, dashboards, and internal business tools.',
    fullDesc: 'Tailor-made web applications designed for custom workflows, SaaS MVPs, customer portals, and internal management tools with TypeScript, Node.js, and cloud backend architecture.',
    iconName: 'Code2',
    priceStarting: '₹29,999',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    features: [
      'Full-Stack Architecture (React + Express / Next.js)',
      'Database Modeling & Authentication Systems',
      'REST & GraphQL Custom APIs',
      'Real-time Dashboards & Data Visualization',
      'Role-Based Access Control (RBAC)',
      'Automated Testing & CI/CD Deployment'
    ],
    benefits: ['Automate manual business processes', 'Scale your digital SaaS business seamlessly'],
    process: ['System Architecture', 'Database & API Engineering', 'Frontend UI Build', 'QA & Launch'],
    whyChooseUs: ['Clean modular TypeScript architecture', 'High performance cloud deployment']
  },
  {
    id: 'android-app-development',
    title: 'Android App Development',
    category: 'digital',
    shortDesc: 'Modern native & cross-platform Android applications for Play Store deployment.',
    fullDesc: 'High-performance Android apps with offline support, push notifications, biometric auth, and smooth fluid animations published directly to Google Play Store.',
    iconName: 'Smartphone',
    priceStarting: '₹24,999',
    imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
    features: [
      'Native Flutter / React Native App Build',
      'Play Store Publishing & Guidelines Compliance',
      'Push Notifications & User Engagement Hooks',
      'In-App Payments & Biometric Auth',
      'Offline Data Synchronization'
    ],
    benefits: ['Reach millions of mobile smartphone users directly', 'Enhance brand recall and customer loyalty'],
    process: ['App Wireframing', 'UI/UX Design', 'App Engineering', 'Google Play Store Release'],
    whyChooseUs: ['Optimized battery & memory consumption', 'Regular OS updates compatibility']
  },
  {
    id: 'ios-app-development',
    title: 'iOS App Development',
    category: 'digital',
    shortDesc: 'Premium iOS applications engineered for iPhone and iPad ecosystems.',
    fullDesc: 'Elegant iOS mobile apps engineered following Apple Human Interface Guidelines for App Store distribution, delivering high performance and security.',
    iconName: 'Smartphone',
    priceStarting: '₹29,999',
    imageUrl: 'https://images.unsplash.com/photo-1510519138197-04075c7e145c?auto=format&fit=crop&w=800&q=80',
    features: [
      'iOS Human Interface Guidelines Compliance',
      'Apple Pay Integration & StoreKit Support',
      'TestFlight Beta & App Store Approval Guarantee',
      'iCloud & Push Notification Integration'
    ],
    benefits: ['Target high-value iOS demographics', 'Flawless performance across all iPhone models'],
    process: ['Design Audit', 'iOS Development', 'TestFlight QA', 'App Store Submission'],
    whyChooseUs: ['100% App Store approval compliance track record']
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing & Growth',
    category: 'digital',
    shortDesc: 'Performance marketing, social media campaigns, brand growth and targeted ads.',
    fullDesc: 'Data-driven marketing campaigns on Meta (Facebook/Instagram) and Google Ads engineered to generate high-intent sales leads, inquiries, and brand awareness.',
    iconName: 'Megaphone',
    priceStarting: '₹9,999/mo',
    imageUrl: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=800&q=80',
    features: [
      'Google Search & Display Performance Ads',
      'Meta (Facebook & Instagram) Targeted Lead Ads',
      'Social Media Branding & Content Strategy',
      'Conversion Rate Optimization (CRO)',
      'Weekly ROI & Conversion Analytics Reports'
    ],
    benefits: ['Acquire real customers at optimized Cost Per Lead (CPL)', 'Transparent ROI tracking'],
    process: ['Audience Research', 'Creative Campaign Design', 'Ad Launch & Testing', 'Weekly Optimization'],
    whyChooseUs: ['Focus on qualified leads & actual revenue, not vanity clicks']
  },
  {
    id: 'seo-ranking',
    title: 'SEO Ranking & Organic Growth',
    category: 'digital',
    shortDesc: 'Technical SEO, on-page optimization, backlink building and top search rankings.',
    fullDesc: 'Comprehensively optimize your website to rank higher on Google search results for valuable business keywords and drive sustainable organic traffic.',
    iconName: 'TrendingUp',
    priceStarting: '₹14,999/mo',
    imageUrl: 'https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?auto=format&fit=crop&w=800&q=80',
    features: [
      'In-depth Keyword & Competitor Analysis',
      'Technical SEO Audit & Core Web Vitals Fixes',
      'On-Page Optimization & Schema Markup',
      'High-Authority Organic Backlink Acquisition',
      'Google Search Console & Analytics Tracking'
    ],
    benefits: ['Get consistent organic inbound leads without paying daily ad costs', 'Build long-term domain authority'],
    process: ['Audit & Keyword Discovery', 'On-Page Repair', 'Content & Link Strategy', 'Monthly Growth Tracking'],
    whyChooseUs: ['White-hat ethical SEO techniques guaranteed to protect domain reputation']
  },
  {
    id: 'website-redesign',
    title: 'Website Redesign',
    category: 'digital',
    shortDesc: 'Modernize slow, outdated websites into sleek, high-converting digital platforms.',
    fullDesc: 'Transform legacy WordPress or older websites with contemporary 2026 aesthetics, mobile responsiveness, rapid load speed, and improved lead conversion UI.',
    iconName: 'RefreshCw',
    priceStarting: '₹9,999',
    imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    features: [
      'Modern UI/UX Visual Revamp',
      'Speed Boost & Code Refactoring',
      'Mobile Responsiveness Overhaul',
      'SEO Content Preservations & 301 Redirects'
    ],
    benefits: ['Zero loss in existing search rankings', 'Instant boost in brand perception'],
    process: ['Existing Audit', 'Redesign Mockups', 'Content Migration', 'Launch'],
    whyChooseUs: ['Safe seamless migration without downtime']
  },
  {
    id: 'website-maintenance',
    title: 'Website Maintenance & Security',
    category: 'digital',
    shortDesc: 'Continuous updates, security monitoring, daily backups, and ongoing technical support.',
    fullDesc: 'Comprehensive website upkeep service keeping your platform secure, bug-free, updated, backed up, and fast round-the-clock.',
    iconName: 'ShieldCheck',
    priceStarting: '₹4,999/mo',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    features: [
      '24/7 Security Scanning & Firewall Protection',
      'Daily Automated Offsite Backups',
      'Regular Software & Plugin Updates',
      'Content & Design Updates Allocation',
      'Uptime Monitoring & Emergency Recovery'
    ],
    benefits: ['Peace of mind knowing your digital asset is safe', 'Immediate developer assistance'],
    process: ['Site Audit', 'Automated Setup', 'Continuous Care'],
    whyChooseUs: ['Instant reaction time for critical website issues']
  }
];

export const FINANCIAL_SERVICES: ServiceItem[] = [
  {
    id: 'personal-loan',
    title: 'Personal Loan',
    category: 'financial',
    shortDesc: 'Flexible personal financing for medical, education, travel, or immediate cash requirements.',
    fullDesc: 'Access quick personal loans with competitive interest rates, minimal documentation, and flexible repayment tenures from top RBI-regulated lending partners.',
    iconName: 'UserCheck',
    priceStarting: 'Interest from 10.5% p.a.*',
    imageUrl: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=800&q=80',
    features: [
      'Loan Amounts from ₹50,000 up to ₹25 Lakhs',
      'Tenure Options from 12 to 60 Months',
      '100% Digital & Hassle-free Paperwork Process',
      'No Collateral or Security Required',
      'Quick Disbursement Post-Approval'
    ],
    benefits: ['Fulfill urgent personal requirements fast', 'Transparent interest & processing terms'],
    process: ['Online Application Submission', 'Document Verification', 'Eligibility Check', 'Disbursement'],
    whyChooseUs: ['Partnerships with leading banks and NBFCs', 'Dedicated loan manager assistance']
  },
  {
    id: 'business-loan',
    title: 'Business Loan',
    category: 'financial',
    shortDesc: 'Collateral-free working capital and expansion capital for startups and established enterprises.',
    fullDesc: 'Fuel your business growth, purchase inventory, upgrade machinery, or manage cash flow with customized business financing options.',
    iconName: 'Briefcase',
    badge: 'Popular',
    priceStarting: 'Interest from 12% p.a.*',
    imageUrl: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Business Capital up to ₹1 Crore',
      'Collateral-Free Financing Options Available',
      'Flexible Daily/Monthly EMI Repayment Schemes',
      'Minimal Financial Statement Requirements for Micro-Businesses'
    ],
    benefits: ['Expand operational capacity smoothly', 'Build strong business credit score'],
    process: ['Business Profile Evaluation', 'Financial Document Check', 'Lender Match', 'Approval'],
    whyChooseUs: ['Expert guidance on structuring loan applications for highest approval rates']
  },
  {
    id: 'home-loan',
    title: 'Home Loan & Construction',
    category: 'financial',
    shortDesc: 'Lowest interest rate home loans for purchasing, constructing, or extending your dream property.',
    fullDesc: 'Secure long-term housing loans with attractive floating/fixed interest rates, balance transfer facilities, and maximum tenure options up to 30 years.',
    iconName: 'Home',
    priceStarting: 'Interest from 8.35% p.a.*',
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
    features: [
      'Up to 90% Property Cost Financing',
      'Tenure up to 30 Years for Low Monthly EMIs',
      'Doorstep Property Legal & Technical Clearance',
      'PMAY / Subsidy Support where applicable'
    ],
    benefits: ['Own your home with comfortable EMI schedules', 'Tax benefits under Section 80C & 24(b)'],
    process: ['Eligibility Assessment', 'Property Technical Evaluation', 'Sanction Letter Issuance', 'Disbursement'],
    whyChooseUs: ['Comparison across 20+ top housing finance institutions']
  },
  {
    id: 'car-loan',
    title: 'Car & Vehicle Loan',
    category: 'financial',
    shortDesc: 'New and used car loans with instant approvals and attractive interest rates.',
    fullDesc: 'Finance your new or pre-owned personal or commercial vehicle with high on-road funding ratios and flexible repayment terms.',
    iconName: 'Car',
    priceStarting: 'Interest from 8.8% p.a.*',
    imageUrl: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
    features: [
      'Up to 100% On-Road Price Funding for Select Profiles',
      'New & Used Vehicle Financing Support',
      'Tenures up to 7 Years',
      'Quick Spot Approval Schemes'
    ],
    benefits: ['Drive your new vehicle with minimal down payment', 'Smooth RC endorsement process'],
    process: ['Vehicle Selection', 'Application & CIBIL Check', 'Instant Approval'],
    whyChooseUs: ['Direct tie-ups with major vehicle manufacturers & dealer networks']
  },
  {
    id: 'mortgage-loan',
    title: 'Mortgage Loan / Loan Against Property',
    category: 'financial',
    shortDesc: 'Unlock high-value liquidity by leveraging residential or commercial property collateral.',
    fullDesc: 'Leverage your existing real estate assets to raise high-ticket capital for major business expansion, debt consolidation, or strategic investments.',
    iconName: 'Key',
    priceStarting: 'Interest from 9.25% p.a.*',
    imageUrl: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800&q=80',
    features: [
      'High Sanction Limits up to ₹5 Crores',
      'Lower Interest Rates compared to Unsecured Loans',
      'Longer Repayment Tenures up to 15 Years',
      'Retain Occupancy & Full Ownership of Property'
    ],
    benefits: ['Cheaper source of capital for large investments', 'Easier qualification terms'],
    process: ['Property Valuation', 'Title Search & Legal Audit', 'Loan Sanction'],
    whyChooseUs: ['End-to-end assistance on title verification and legal clearance']
  },
  {
    id: 'loan-refinance',
    title: 'Loan Refinance & Balance Transfer',
    category: 'financial',
    shortDesc: 'Transfer high-interest loans to lower interest partners and reduce your monthly EMIs.',
    fullDesc: 'Switch existing home, business, or personal loans to lower interest lenders and unlock top-up capital without hassles.',
    iconName: 'Percent',
    priceStarting: 'Save up to 2% Interest*',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
    features: [
      'Significant EMI Cost Reduction',
      'Top-up Loan Amount Facility Available',
      'Zero Prepayment Penalty on Floating Rates',
      'Seamless Lender Handover Process'
    ],
    benefits: ['Save lakhs of rupees over long loan tenures', 'Consolidate multiple EMIs into one'],
    process: ['Existing EMI Audit', 'Refinance Calculation', 'Switch Approval'],
    whyChooseUs: ['Free interest savings calculation before application']
  },
  {
    id: 'government-scheme-loans',
    title: 'Government Scheme Loans (PMEGP / MUDRA)',
    category: 'financial',
    shortDesc: 'Government subsidized loan schemes including PMEGP, MUDRA, Stand-Up India, and MSME grants.',
    fullDesc: 'Comprehensive assistance for eligible entrepreneurs, MSMEs, and micro-enterprises to apply for government-backed subsidized loans and credit guarantees.',
    iconName: 'Landmark',
    badge: 'Govt Scheme',
    priceStarting: 'Subsidies up to 35%*',
    imageUrl: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80',
    features: [
      'PMEGP Subsidy Loan Application Guidance',
      'MUDRA Loan (Shishu, Kishore, Tarun) Facilitation',
      'Project Report Preparation & Financial Forecasting',
      'Documentation for CGTMSE Guarantee Scheme'
    ],
    benefits: ['Capital subsidies available up to 35%', 'Collateral-free credit under CGTMSE'],
    process: ['Scheme Eligibility Audit', 'Detailed Project Report (DPR) Creation', 'Portal Application & Bank Follow-up'],
    whyChooseUs: ['Specialized CA/Financial expert team for Govt loan DPR creation']
  },
  {
    id: 'fixed-deposits',
    title: 'Fixed Deposits & Term Savings',
    category: 'financial',
    shortDesc: 'High-yield corporate & bank fixed deposit comparison, planning, and documentation support.',
    fullDesc: 'Maximize guaranteed returns on surplus funds through top-rated corporate fixed deposits, scheduled commercial banks, and RBI-regulated NBFC term deposits offering yields up to 8.75% p.a.',
    iconName: 'Coins',
    badge: 'High Yield',
    priceStarting: 'Yields up to 8.75% p.a.*',
    imageUrl: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=800&q=80',
    features: [
      'Comparative Interest Rate Audits Across Top Banks & AAA NBFCs',
      'Senior Citizen Higher Interest Rate Benefits (Extra 0.50% - 0.75%)',
      'Flexible Payouts (Monthly, Quarterly, Cumulative at Maturity)',
      'DICGC Insurance Protection up to ₹5 Lakhs per Bank',
      'Zero Penalty Premature Withdrawal Guidance'
    ],
    benefits: [
      'Guaranteed predictable returns with capital preservation',
      'Higher returns than traditional savings accounts',
      'Flexible tenures ranging from 7 days to 10 years'
    ],
    process: [
      'Financial Goal & Tenure Planning',
      'Lender & Issuer Yield Comparison',
      'Digital KYC & Application Booking',
      'FD Certificate Delivery'
    ],
    whyChooseUs: [
      'Direct comparison across 30+ top institutions',
      'Dedicated relationship concierge'
    ],
    faqs: [
      { question: 'What is the highest FD interest rate available currently?', answer: 'Top rated corporate and small finance bank FDs currently offer rates between 7.50% and 8.75% p.a., with higher rates for senior citizens.' },
      { question: 'Are my fixed deposits insured?', answer: 'Bank fixed deposits are insured under DICGC up to ₹5,00,000 per depositor per bank.' }
    ]
  }
];

export const TAX_SERVICES: ServiceItem[] = [
  {
    id: 'gst-registration',
    title: 'GST Registration',
    category: 'tax',
    shortDesc: 'New GST registration for proprietorships, partnerships, LLPs, and private limited companies.',
    fullDesc: 'Get your official 15-digit GSTIN number issued swiftly by government tax authorities with expert verification of business address and documents.',
    iconName: 'FileCheck',
    badge: 'Essential',
    priceStarting: '₹2,499',
    imageUrl: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=800&q=80',
    features: [
      '100% Digital Document Verification',
      'ARN Application Generation within 24 Hours',
      'GSTIN Allotment Certificate Issuance',
      'Includes HSN/SAC Code Classification'
    ],
    benefits: ['Sell across India & on major e-commerce platforms', 'Legally claim Input Tax Credit (ITC)'],
    process: ['Document Collection', 'Portal Upload', 'ARN Tracking', 'GST Certificate Download'],
    whyChooseUs: ['Zero rejection rate due to prior expert compliance review']
  },
  {
    id: 'gst-filing',
    title: 'GST Return Filing (GSTR-1, 3B, 9)',
    category: 'tax',
    shortDesc: 'Monthly and quarterly GST return filing, reconciliation, and ITC optimization.',
    fullDesc: 'Ensure monthly/quarterly GST return compliance without late fees or tax notices. Includes automated GSTR-2B reconciliation for maximum ITC claims.',
    iconName: 'Calculator',
    priceStarting: '₹1,499/mo',
    imageUrl: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
    features: [
      'GSTR-1 Sales & GSTR-3B Monthly Return Filing',
      'Automated GSTR-2A/2B Input Tax Credit Reconciliation',
      'Annual GSTR-9 Filing & Tax Audit Support',
      'E-Way Bill & E-Invoicing System Assistance'
    ],
    benefits: ['Avoid heavy late fee penalties and GST cancellation notices', 'Maximize eligible ITC savings'],
    process: ['Sales & Purchase Data Collection', 'ITC Matching', 'Tax Calculation', 'Return Filing'],
    whyChooseUs: ['Dedicated GST expert assigned to your business account']
  },
  {
    id: 'itr-filing',
    title: 'Income Tax Return (ITR) Filing',
    category: 'tax',
    shortDesc: 'Error-free ITR filing for salaried individuals, freelancers, business owners, and NRIs.',
    fullDesc: 'File your income tax returns accurately under the correct ITR form (ITR-1 to ITR-7), claim maximum deductions, and get your tax refunds processed fast.',
    iconName: 'FileText',
    badge: 'Tax Season',
    priceStarting: '₹999',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80',
    features: [
      'Expert CA Review of AIS/TIS & Form 26AS',
      'Optimization under Old vs New Tax Regime',
      'Filing for Salaried, Business, Capital Gains & Crypto Traders',
      'Notice Resolution & Rectification Support'
    ],
    benefits: ['Claim eligible TDS refunds quickly', 'Mandatory for home/personal loan approvals'],
    process: ['Form 16 / Income Data Upload', 'Tax Computation Audit', 'E-Filing & E-Verification'],
    whyChooseUs: ['Chartered Accountant backed accuracy guarantee']
  },
  {
    id: 'udyam-registration',
    title: 'Udyam / MSME Registration',
    category: 'tax',
    shortDesc: 'Official MSME Udyam registration for government benefits, priority lending, and subsidies.',
    fullDesc: 'Get your official Udyam Certificate to unlock MSME benefits including priority bank loans, lower loan interest rates, protection against delayed payments, and electricity concessions.',
    iconName: 'Award',
    priceStarting: '₹499',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    features: [
      'Instant Udyam Registration Certificate',
      'NIC Code Classification for Business Activities',
      'Lifetime Validity with Zero Annual Renewal Required'
    ],
    benefits: ['Protection under MSME Delayed Payment Act (Samadhaan)', 'Eligibility for Govt tenders without EMD'],
    process: ['Aadhaar & PAN Verification', 'Activity Mapping', 'Certificate Generation'],
    whyChooseUs: ['Fast 24-hour delivery']
  },
  {
    id: 'business-compliance',
    title: 'Business Compliance Assistance',
    category: 'tax',
    shortDesc: 'Annual company secretarial filings, ROC filings, trade licenses, and statutory audits.',
    fullDesc: 'Complete compliance management for Private Limited, LLP, and OPC entities including ROC annual filings, director KYC, and maintenance of statutory registers.',
    iconName: 'ShieldAlert',
    priceStarting: '₹4,999/yr',
    imageUrl: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
    features: [
      'ROC Annual Filings (MGT-7 & AOC-4)',
      'DIR-3 KYC Director Annual Renewal',
      'Minutes of Meeting & Board Resolutions Preparation',
      'Statutory Audit Coordination'
    ],
    benefits: ['Maintain clean company standing on MCA portal', 'Avoid heavy Rs 100/day ROC penalties'],
    process: ['Compliance Audit', 'Document Drafting', 'ROC E-filing'],
    whyChooseUs: ['Proactive reminder system for statutory deadlines']
  },
  {
    id: 'tax-consultation',
    title: 'Tax Advisory Services',
    category: 'tax',
    shortDesc: 'One-on-one consultation with senior tax experts for strategic tax planning and notice support.',
    fullDesc: 'Strategic tax structure advice for HNWIs, startups, crypto traders, and corporate entities to legally optimize tax liability and resolve tax department notices.',
    iconName: 'HelpCircle',
    priceStarting: '₹1,999/session',
    imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80',
    features: [
      '30/60 Mins Direct Phone / Video Consultation',
      'Custom Tax Savings Blueprint Preparation',
      'Income Tax & GST Notice Draft Responses'
    ],
    benefits: ['Clear tax confusion before major financial transactions', 'Save significant tax legally'],
    process: ['Book Session', 'Share Tax Context', 'Live Consultation & Action Plan'],
    whyChooseUs: ['Senior CAs with 10+ years experience']
  },
  {
    id: 'company-registration',
    title: 'Company & Business Registration',
    category: 'tax',
    shortDesc: 'Private Limited, LLP, One Person Company (OPC), and Partnership business incorporation.',
    fullDesc: 'End-to-end company incorporation services with Ministry of Corporate Affairs (MCA). Includes DIN, DSC, PAN, TAN, MoA, AoA, GST registration, and corporate bank account opening guidance.',
    iconName: 'Building2',
    badge: 'Startup Ready',
    priceStarting: '₹6,999',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    features: [
      'Private Limited / LLP / OPC Incorporation Support',
      'Name Approval Application & RUN / SPICe+ Form E-Filing',
      'Digital Signature Certificates (DSC) for 2 Directors',
      'Director Identification Numbers (DIN) Allotment',
      'MoA & AoA Drafting & Incorporation Certificate (COI)',
      'Company PAN, TAN & Corporate Bank Account Resolution'
    ],
    benefits: [
      'Limited liability protection for founders & shareholders',
      'Raise angel/venture capital easily with registered equity',
      'High credibility with global enterprise clients'
    ],
    process: [
      'Name Availability Search & DSC Setup',
      'SPICe+ Part A & Part B Form E-Filing on MCA Portal',
      'Certificate of Incorporation (COI) Issuance',
      'Post-Incorporation Compliance & Bank Setup'
    ],
    whyChooseUs: [
      'Fast 5 to 7 day incorporation timeline',
      'Zero hidden govt stamp duty surprises',
      'Free post-incorporation compliance consultation'
    ],
    faqs: [
      { question: 'What is the minimum number of directors needed for Private Limited?', answer: 'A minimum of 2 directors and 2 shareholders are required. The directors can also be the shareholders.' },
      { question: 'How long does company registration take in India?', answer: 'Typically 5 to 7 working days once all director KYC documents (PAN, Aadhaar, bank statements) are submitted.' },
      { question: 'Is physical office presence required for registration?', answer: 'No, any commercial or residential address with a valid utility bill and NOC can serve as your registered office address.' }
    ]
  },
  {
    id: 'pan-services',
    title: 'PAN Card & Direct Tax Services',
    category: 'tax',
    shortDesc: 'New PAN application, PAN corrections, Aadhaar-PAN linking, and duplicate card issuance.',
    fullDesc: 'Fast-track PAN card documentation services for individuals, businesses, trusts, minors, and NRIs. Includes correction of demographic details, re-issuance, and statutory Aadhaar-PAN linking compliance.',
    iconName: 'CreditCard',
    priceStarting: '₹299',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80',
    features: [
      'New PAN Application (Form 49A / 49AA for NRIs)',
      'PAN Correction (Name, DOB, Father Name, Address)',
      'Instant e-PAN Generation in 24 to 48 Hours',
      'Aadhaar-PAN Mandatory Linking Facilitation',
      'Company / Partnership Firm PAN Allotment'
    ],
    benefits: [
      'Mandatory identification for all banking and tax transactions',
      'Avoid high 20% TDS deduction rates by linking PAN with Aadhaar',
      'Doorstep physical PVC card delivery across India'
    ],
    process: [
      'Identity & Address Proof Upload',
      'Application Form Verification',
      'NSDL / UTIITSL Portal Submission',
      'e-PAN PDF & Physical Card Dispatch'
    ],
    whyChooseUs: [
      '100% error-free form submission',
      'Instant tracking acknowledgement number'
    ],
    faqs: [
      { question: 'How long does it take to get an e-PAN?', answer: 'Digital e-PAN is typically issued within 24 to 48 hours, while the physical PVC card arrives at your address in 7 to 10 days.' },
      { question: 'What documents are required for PAN application?', answer: 'Proof of Identity (Aadhaar/Voter ID/Passport), Proof of Address, and Proof of Date of Birth with recent photographs.' }
    ]
  }
];

export const INSURANCE_SERVICES: ServiceItem[] = [
  {
    id: 'motor-insurance',
    title: 'Motor & Vehicle Insurance',
    category: 'insurance',
    shortDesc: 'Comprehensive car, bike, and commercial vehicle insurance with instant cash-free claims.',
    fullDesc: 'Protect your vehicles against accident damage, theft, third-party liability, and natural disasters with cash-free repairs across 5,000+ network garages.',
    iconName: 'Car',
    badge: 'Instant Renewal',
    imageUrl: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
    features: [
      'Comprehensive & Third-Party Cover Options',
      'Zero Depreciation, Engine Protect & Consumable Add-ons',
      'Cashless Claims at 5000+ Partner Garages',
      'Instant Policy Issuance & No Claim Bonus (NCB) Transfer'
    ],
    benefits: ['Avoid traffic fines for non-insurance', 'Peace of mind on every drive'],
    process: ['Enter Vehicle Number', 'Compare Quotes', 'Instant Online Payment & Policy PDF'],
    whyChooseUs: ['Lowest premium quotes guaranteed across top IRDAI insurers']
  },
  {
    id: 'health-insurance',
    title: 'Health & Medical Insurance',
    category: 'insurance',
    shortDesc: 'Family floaters and individual health insurance with cashless hospital admission.',
    fullDesc: 'Comprehensive health protection covering hospitalization costs, pre/post admission expenses, ICU charges, day care procedures, and critical illness treatments.',
    iconName: 'HeartPulse',
    badge: 'Must Have',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    features: [
      'Cashless Hospitalization across 10,000+ Hospitals',
      'No Room Rent Capping Options Available',
      'Pre & Post Hospitalization Cover (60 & 180 Days)',
      'Tax Deduction under Section 80D up to ₹75,000'
    ],
    benefits: ['Protect family savings against rising medical inflation', '24x7 emergency cashless approval support'],
    process: ['Health Assessment', 'Compare Family Plans', 'Medical Underwriting', 'Policy Issuance'],
    whyChooseUs: ['Dedicated AVRX claim settlement concierge team']
  },
  {
    id: 'travel-insurance',
    title: 'International Travel Insurance',
    category: 'insurance',
    shortDesc: 'Global travel coverage for flight delays, lost baggage, and international medical emergencies.',
    fullDesc: 'Schengen & global visa compliant travel insurance policies protecting leisure and business travelers against unexpected overseas emergencies.',
    iconName: 'Plane',
    imageUrl: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80',
    features: [
      'Schengen Visa Mandatory Coverage Compliance',
      'Medical Expenses & Emergency Evacuation up to $500,000',
      'Passport & Luggage Loss Reimbursement',
      'Trip Delay & Cancellation Compensation'
    ],
    benefits: ['Smooth visa approvals', 'Zero out-of-pocket medical expenses abroad'],
    process: ['Select Destination & Trip Dates', 'Get Instant Quote', 'Download Policy'],
    whyChooseUs: ['Instant policy generation required for embassy visa appointments']
  },
  {
    id: 'home-insurance',
    title: 'Home & Property Insurance',
    category: 'insurance',
    shortDesc: 'Protection for your house structure and home contents against fire, theft, and natural hazards.',
    fullDesc: 'Safeguard your home building structure and valuable interior belongings (furniture, appliances, electronics) against fire, floods, earthquake, and burglary.',
    iconName: 'Home',
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    features: [
      'Structure & Contents Comprehensive Cover',
      'Protection against Natural Calamities (Floods, Earthquakes)',
      'Burglary & Theft Compensation',
      'Affordable Premiums starting under ₹5/day'
    ],
    benefits: ['Protect your lifetime property investment', 'Comprehensive contents inventory protection'],
    process: ['Property Value Estimation', 'Custom Policy Plan', 'Instant Issuance'],
    whyChooseUs: ['Flexible sum insured customization']
  },
  {
    id: 'shop-property-insurance',
    title: 'Shop & Business Property Insurance',
    category: 'insurance',
    shortDesc: 'Commercial shopkeeper insurance covering stock, inventory, machinery, and cash-in-transit.',
    fullDesc: 'Customized business property insurance designed for shop owners, showrooms, offices, and warehouses to cover goods, machinery, and business interruption.',
    iconName: 'Store',
    imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
    features: [
      'Shop Structure & Inventory Stock Cover',
      'Cash in Till & Transit Security Coverage',
      'Public Liability Protection',
      'Plate Glass & Signboard Damage Cover'
    ],
    benefits: ['Resume business operations smoothly post unforeseen hazards', 'Protect commercial stock'],
    process: ['Stock Evaluation', 'Site Inspection (if required)', 'Policy Active'],
    whyChooseUs: ['Fast track business claim settlements']
  }
];

export const HOSTING_PRODUCTS: ServiceItem[] = [
  {
    id: 'wordpress-themes',
    title: 'Premium WordPress Themes',
    category: 'hosting',
    shortDesc: 'Ultra-fast, conversion-focused WordPress themes built for business & e-commerce.',
    fullDesc: 'Pre-designed enterprise WordPress theme templates optimized for Core Web Vitals, elementor compatible, responsive, and SEO ready.',
    iconName: 'Palette',
    priceStarting: '₹2,499',
    imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    features: ['100% Responsive Design', 'Elementor & Gutenberg Compatible', '1-Click Demo Import', 'Lifetime Updates'],
    benefits: ['Launch professional sites in hours', 'Clean fast lightweight code'],
    process: ['Select Theme', 'Download Asset Package', 'Import & Customize'],
    whyChooseUs: ['Designed by elite UI developers']
  },
  {
    id: 'website-hosting',
    title: 'High-Speed Cloud Hosting',
    category: 'hosting',
    shortDesc: 'NVMe SSD cloud hosting with free SSL, CDN, automated backups, and 99.9% uptime.',
    fullDesc: 'Enterprise cloud hosting powered by LiteSpeed web servers and NVMe storage for lightning-fast website rendering and rock-solid security.',
    iconName: 'Server',
    badge: '99.9% Uptime',
    priceStarting: '₹199/mo',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    features: [
      'NVMe Ultra SSD Storage',
      'Free Unlimited Wildcard SSL Certificates',
      'LiteSpeed Caching & Cloudflare CDN Integration',
      'Automated Daily Offsite Backups',
      '1-Click WordPress & Script Installer',
      'cPanel / Custom Control Panel'
    ],
    benefits: ['3x faster page load speeds', 'Unbreakable server security'],
    process: ['Choose Plan', 'Connect Domain', 'Instant Account Activation'],
    whyChooseUs: ['India-based low latency cloud data centers']
  },
  {
    id: 'multi-company-hosting',
    title: 'Multi-Company Agency Hosting',
    category: 'hosting',
    shortDesc: 'Reseller & multi-site cloud hosting designed for agencies, web developers, and IT firms.',
    fullDesc: 'Host multiple client websites or business entities under one master management console with dedicated isolated resources and white-label cPanels.',
    iconName: 'Layers',
    priceStarting: '₹999/mo',
    imageUrl: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
    features: [
      'Host 10 to 100+ Websites',
      'White-Label WHM / cPanel Accounts',
      'Dedicated Memory & CPU Resource Limits per Site',
      'Automated Client Billing Integration Ready'
    ],
    benefits: ['Monetize web hosting for your own web clients', 'Simplified multi-site governance'],
    process: ['Select Server Capacity', 'Provision Accounts', 'Deploy Sites'],
    whyChooseUs: ['24/7 priority server engineer support']
  },
  {
    id: 'domain-services',
    title: 'Domain Registration & DNS',
    category: 'hosting',
    shortDesc: 'Instant .in, .com, .org, .tech domain name registration and secure DNS management.',
    fullDesc: 'Register and protect your online brand address with free domain privacy protection, DNS management, and seamless WHOIS masking.',
    iconName: 'Globe',
    priceStarting: '₹499/yr',
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    features: ['Instant .COM & .IN Registration', 'Free WHOIS Privacy Guard', 'Advanced DNS Management Interface', 'Easy Domain Transfer'],
    benefits: ['Secure your brand name before competitors', 'Complete DNS control'],
    process: ['Search Availability', 'Add to Cart', 'Instant Activation'],
    whyChooseUs: ['Transparent renewal pricing without hidden spikes']
  }
];

export const AI_TOOLS: AIToolItem[] = [
  {
    id: 'website-health-checker',
    name: 'AI Website Health Checker',
    category: 'Technical & Audit',
    description: 'Scans any website URL and generates an instant 5-point audit score (Performance, SEO, Mobile, Accessibility, Security) with actionable fixes.',
    iconName: 'Activity',
    badge: 'Popular',
    placeholderPrompt: 'https://yourwebsite.com',
    inputLabel: 'Enter Website URL to Analyze',
    buttonText: 'Analyze Website Now',
    sampleOutputs: ['Performance: 94/100', 'SEO Score: 88/100', 'Mobile Optimization: 96/100']
  },
  {
    id: 'seo-analyzer',
    name: 'AI SEO Keyword & Audit Analyzer',
    category: 'Growth & SEO',
    description: 'Analyzes your webpage for meta tags, keyword density, header tags, schema markup, and generates content optimization tips.',
    iconName: 'Search',
    placeholderPrompt: 'Enter page URL or target keyword (e.g. Best Loan Services)',
    inputLabel: 'Enter Target Keyword or URL',
    buttonText: 'Run AI SEO Audit'
  },
  {
    id: 'business-idea-generator',
    name: 'AI Business Idea & Monetization Generator',
    category: 'Startup & Strategy',
    description: 'Generates innovative, profitable business ideas tailored to your budget, skills, location, and market demand in 2026.',
    iconName: 'Lightbulb',
    placeholderPrompt: 'e.g. $5,000 budget, interested in financial tech in India',
    inputLabel: 'Describe Your Budget & Interests',
    buttonText: 'Generate Business Ideas'
  },
  {
    id: 'content-generator',
    name: 'AI Marketing Copy & Content Writer',
    category: 'Marketing',
    description: 'Writes persuasive social media posts, ad copy, website headlines, and email newsletters engineered for high engagement.',
    iconName: 'FileText',
    placeholderPrompt: 'e.g. Write a Facebook ad for a Personal Loan at 10.5% interest',
    inputLabel: 'What content do you need?',
    buttonText: 'Generate Content'
  },
  {
    id: 'marketing-assistant',
    name: 'AI Digital Marketing & Campaign Planner',
    category: 'Marketing',
    description: 'Creates a 30-day step-by-step digital marketing roadmap and content calendar for your specific business niche.',
    iconName: 'Target',
    placeholderPrompt: 'e.g. E-commerce clothing brand targeting young professionals in Delhi',
    inputLabel: 'Describe Your Business Niche & Audience',
    buttonText: 'Create Marketing Roadmap'
  },
  {
    id: 'financial-assistant',
    name: 'AI Loan Eligibility & Financial Advisor',
    category: 'Finance',
    description: 'Evaluates your income, loan requirement, and CIBIL score range to recommend suitable loan schemes and EMI plans.',
    iconName: 'DollarSign',
    placeholderPrompt: 'e.g. Monthly income ₹60,000, need ₹5 Lakh Business Loan for 3 years',
    inputLabel: 'Provide Financial Details',
    buttonText: 'Check Loan Eligibility'
  },
  {
    id: 'tax-assistant',
    name: 'AI Tax Guidance & Regime Calculator',
    category: 'Tax & Legal',
    description: 'Helps compare Old vs New Income Tax Regimes, lists eligible deductions, and guides GST registration requirements.',
    iconName: 'Calculator',
    placeholderPrompt: 'e.g. Annual salary ₹12 Lakhs, investments under 80C ₹1.5 Lakhs',
    inputLabel: 'Enter Income & Deductions Summary',
    buttonText: 'Calculate Tax Savings'
  },
  {
    id: 'requirement-generator',
    name: 'AI Website Requirement Specification Generator',
    category: 'Digital Strategy',
    description: 'Translates your vague website idea into a structured technical requirement specification (SRS) for developers.',
    iconName: 'Cpu',
    placeholderPrompt: 'e.g. I want an online doctor appointment booking platform with video consultation',
    inputLabel: 'Describe your website/app concept',
    buttonText: 'Generate Tech Spec'
  },
  {
    id: 'proposal-generator',
    name: 'AI Business Proposal & Quote Estimator',
    category: 'Sales',
    description: 'Drafts professional business proposals, scope breakdown, and milestone estimates for client projects.',
    iconName: 'Send',
    placeholderPrompt: 'e.g. E-commerce website for a gourmet bakery with 50 items',
    inputLabel: 'Describe Client Project Requirements',
    buttonText: 'Generate Business Proposal'
  },
  {
    id: 'business-growth-assistant',
    name: 'AI Business Growth & Scaling Blueprint',
    category: 'Strategy',
    description: 'Provides actionable growth hacks, operational optimization, and technology adoption strategies to double your revenue.',
    iconName: 'TrendingUp',
    placeholderPrompt: 'e.g. Local retail furniture shop wanting to expand online across North India',
    inputLabel: 'Current Business Overview & Expansion Target',
    buttonText: 'Generate Growth Strategy'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter-website',
    name: 'Starter Website',
    category: 'website',
    price: '₹9,999',
    billingPeriod: 'one-time',
    description: 'Ideal for small businesses, startups, and professionals establishing their online presence.',
    features: [
      '5 Pages Custom Responsive Website',
      'Mobile-First UI/UX & Fast Load Speed',
      'Free SSL Security Certificate',
      'Contact Form & WhatsApp Chat Integration',
      'Basic On-Page SEO Setup',
      '1 Year Domain & Hosting Included'
    ],
    ctaText: 'Get Started'
  },
  {
    id: 'business-website',
    name: 'Business Website',
    category: 'website',
    price: '₹19,999',
    billingPeriod: 'one-time',
    isPopular: true,
    description: 'Our most popular package for growing companies seeking leads, traffic, and high brand authority.',
    features: [
      'Up to 10 Pages Custom Design',
      'Advanced Animations & Micro-Interactions',
      'AI Health Checker & Lead Magnet Setup',
      'Comprehensive Technical & Schema SEO',
      'Speed Optimization (Score 90+)',
      '1 Year High-Speed NVMe Cloud Hosting',
      '3 Months Technical Support'
    ],
    ctaText: 'Choose Business Plan'
  },
  {
    id: 'ecommerce-website',
    name: 'E-Commerce Website',
    category: 'website',
    price: '₹24,999',
    billingPeriod: 'one-time',
    description: 'Full-featured online store with payment gateway, product catalogue, and order management.',
    features: [
      'Unlimited Products & Categories',
      'UPI / Card Payment Gateway Integration',
      'Automated Order & Invoice System',
      'Abandoned Cart & Discount Coupons',
      'Customer Dashboard & Order Tracking',
      'High-Capacity E-Commerce Hosting'
    ],
    ctaText: 'Launch Store'
  },
  {
    id: 'enterprise-custom',
    name: 'Custom Web Application / Enterprise',
    category: 'website',
    price: 'Custom Quote',
    description: 'Tailor-made web applications, SaaS platforms, portals, and complex enterprise systems.',
    features: [
      'Custom React + Express Full-Stack Architecture',
      'Custom APIs & Database Modeling',
      'Role-Based Admin Control Panels',
      'Dedicated Server Infrastructure',
      'SLA Guaranteed Support'
    ],
    ctaText: 'Get Custom Quote'
  }
];

export const HOSTING_PRICING: PricingPlan[] = [
  {
    id: 'host-starter',
    name: 'Starter Cloud',
    category: 'hosting',
    price: '₹199',
    billingPeriod: 'per month',
    description: 'Perfect for single blogs or basic business websites.',
    features: [
      '1 Website',
      '15 GB NVMe SSD Storage',
      'Unmetered Bandwidth',
      'Free SSL Certificate',
      '5 Professional Email Accounts'
    ],
    ctaText: 'Deploy Now'
  },
  {
    id: 'host-business',
    name: 'Business Pro',
    category: 'hosting',
    price: '₹399',
    billingPeriod: 'per month',
    isPopular: true,
    description: 'High performance cloud hosting for busy business sites & e-commerce.',
    features: [
      '5 Websites',
      '50 GB NVMe SSD Storage',
      'LiteSpeed Web Server Boost',
      'Free Daily Offsite Backups',
      'Unlimited Email Accounts'
    ],
    ctaText: 'Choose Pro'
  },
  {
    id: 'host-multi',
    name: 'Multi-Company Agency',
    category: 'hosting',
    price: '₹999',
    billingPeriod: 'per month',
    description: 'Multi-site cloud server for agencies, IT firms, and enterprise groups.',
    features: [
      '25 Websites',
      '150 GB NVMe SSD Storage',
      'Dedicated Resource CPU/RAM',
      'White-Label cPanel Accounts',
      'Priority 24/7 Support'
    ],
    ctaText: 'Start Agency Plan'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    slug: '5-essential-website-elements-for-business-growth-2026',
    title: '5 Essential Website Elements Every Indian Business Needs in 2026',
    category: 'Digital Growth',
    excerpt: 'Discover why modern speed, instant WhatsApp connectivity, and AI-powered lead generation are critical for outperforming competitors online.',
    content: `In 2026, a business website is no longer just a digital business card—it is your primary 24/7 sales engine.
    
    1. Ultra-Fast Cold Start & Page Speed: Customers leave if a site takes more than 2 seconds to load on mobile.
    2. Direct Instant Communication: Integrating direct WhatsApp lead CTAs increases customer conversion by 300%.
    3. Built-In Technical SEO: Schema markup and proper semantic tags help Google understand and rank your business locally.
    4. Trust & Security Architecture: SSL certificates, clear legal disclaimers, and transparent pricing build immediate visitor confidence.
    5. Mobile-First Fluid Design: Over 80% of digital inquiries in India originate on smartphones.`,
    author: 'AVRX Digital Strategy Team',
    date: 'August 02, 2026',
    readTime: '4 min read',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    tags: ['Web Design', 'SEO', 'Business Growth']
  },
  {
    id: 'blog-2',
    slug: 'how-to-choose-the-right-business-loan-and-government-scheme',
    title: 'How to Choose the Right Business Loan & Maximize Govt Subsidies (PMEGP/MUDRA)',
    category: 'Finance',
    excerpt: 'Learn the key differences between unsecured business loans, MUDRA schemes, and PMEGP capital subsidies up to 35%.',
    content: `Navigating capital options for your business can feel overwhelming. Here is a clear breakdown:
    
    - MUDRA Loans: Best for small shopkeepers, micro-manufacturers, and service providers up to ₹10 Lakhs without collateral.
    - PMEGP Scheme: Excellent for new manufacturing and service projects with government subsidies ranging from 15% to 35%.
    - Bank Business Loans: Ideal for fast scaling businesses with steady bank turnover looking for larger working capital.
    
    Pro Tip: Always ensure your GST filings and ITR records are up-to-date before applying to guarantee approval.`,
    author: 'AVRX Financial Advisory',
    date: 'July 28, 2026',
    readTime: '6 min read',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
    tags: ['Business Loan', 'PMEGP', 'MUDRA', 'Finance']
  },
  {
    id: 'blog-3',
    slug: 'gst-compliance-and-itr-filing-guide-for-startups',
    title: 'GST Compliance & ITR Filing Guide for Startups and Freelancers',
    category: 'Tax & Compliance',
    excerpt: 'Avoid common tax penalties, maximize Input Tax Credit (ITC), and understand mandatory ROC compliance for small businesses.',
    content: `Staying compliant with Indian tax laws is essential to avoid heavy late fee penalties.
    
    - GST Registration is mandatory if turnover exceeds ₹20/40 Lakhs (or for e-commerce sellers regardless of turnover).
    - Monthly GSTR-3B and GSTR-1 filings ensure your business claims valid Input Tax Credit (ITC).
    - Filing ITR on time builds financial creditworthiness when applying for future loans or visa applications.`,
    author: 'AVRX Tax Experts',
    date: 'July 15, 2026',
    readTime: '5 min read',
    imageUrl: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=800&q=80',
    tags: ['GST', 'ITR', 'Tax Savings']
  }
];

export const GENERAL_FAQS = [
  {
    question: 'What is AVRX Digital & Financial Solution?',
    answer: 'AVRX is an integrated global digital, financial, and AI technology ecosystem. We help individuals, startups, and enterprises build modern websites & apps, secure loans and capital, manage GST and tax compliance, get insurance coverage, host digital products, and leverage powerful AI tools.'
  },
  {
    question: 'How do I get started with AVRX services?',
    answer: 'You can explore our solution pages, use our AI Assistant or Smart Service Finder to identify your exact needs, or click "Talk to an Expert" to send an instant inquiry via WhatsApp or our contact form.'
  },
  {
    question: 'Are financial loan approvals guaranteed by AVRX?',
    answer: 'No. AVRX provides expert facilitation, document preparation, and connects you with authorized lending institutions and banks. All loan eligibility, interest rates, and final approvals are subject to lender policies and applicable regulatory terms.'
  },
  {
    question: 'Are there any hidden costs in AVRX digital packages?',
    answer: 'None. All our digital website, app, and hosting packages feature transparent pricing without hidden renewal traps or unexpected charges.'
  },
  {
    question: 'How can I become an AVRX Partner?',
    answer: 'Eligible individuals, freelancers, consultants, and business professionals can apply through our "Partner With Us" page to join our partner ecosystem and grow alongside AVRX.'
  }
];
