import { ServiceItem, AIToolItem, PricingPlan, BlogPost } from '../types';

export const DIGITAL_SERVICES: ServiceItem[] = [
  {
    id: 'static-onepage-website',
    title: 'Static Onepage website',
    category: 'digital',
    shortDesc: 'Affordable, lightning-fast single-page static website designed for local businesses, shops, and instant lead capture.',
    fullDesc: 'A sleek, modern, ultra-fast single-page static website tailored for local service businesses, retail stores, consultants, startups, and professionals. Features seamless fluid-scroll sections, mobile-first responsiveness, high-converting lead capture form, direct WhatsApp chat, Google Map integration, and free SSL certificate for just ₹4,999.',
    iconName: 'Globe',
    badge: 'Best Value • ₹4,999',
    priceStarting: '₹4,999',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    features: [
      'Single-Page Smooth Fluid Scroll Layout',
      '100% Mobile, Tablet & Desktop Ergonomic UI',
      'Direct 1-Click WhatsApp Floating Chat & Call CTA',
      'Lead Capture Contact Form with Instant Email Alerts',
      'Google Maps Business Location & Direction Pin',
      'Social Media Profile Integration & Quick Links',
      'Basic On-Page SEO, OpenGraph & Meta Tags',
      'Sub-Second Page Speed (<0.5s Load Time)',
      'Free Auto-Renewing SSL Certificate (HTTPS)',
      'Fast 48–72 Hours Turnaround Time'
    ],
    benefits: [
      'Launch your professional brand online in just 2 to 3 days',
      'Unbeatable price of ₹4,999 with zero hidden costs',
      'Receive inquiries directly on your WhatsApp and email inbox',
      'Zero complex CMS maintenance, database crashes, or slow page lag',
      '100% full ownership of source code, design, and domain'
    ],
    process: [
      'Discovery & Content Collection (Logo, Photos, Text)',
      'High-Converting Single-Page Wireframing & UI Layout',
      'Speed Optimization & Mobile-First Frontend Coding',
      'Lead Form, WhatsApp & Google Maps Integration',
      'Testing, SSL Activation & Live Domain Launch'
    ],
    whyChooseUs: [
      'Fixed affordable price of ₹4,999 with premium craftsmanship',
      'Handcrafted clean code — no heavy or slow WordPress plugins',
      'Dual automated lead alert system on WhatsApp & Email',
      'Dedicated post-launch support and easy upgrade path'
    ],
    faqs: [
      { 
        question: 'What is included in the ₹4,999 Static Onepage website package?', 
        answer: 'The ₹4,999 package includes a complete single-page website with a Hero Banner, About Us section, Services/Products highlight, Photo Gallery, Customer Testimonials, Google Map pin, Contact/Lead Form with email alerts, direct WhatsApp button, and free SSL certificate setup.' 
      },
      { 
        question: 'How fast will my website be delivered and made live?', 
        answer: 'Once you provide your basic business details, logo, and photos, we deliver and launch your static onepage website within 48 to 72 hours (2–3 business days).' 
      },
      { 
        question: 'Will my website work well on mobile phones?', 
        answer: 'Yes, 100%. Over 80% of web traffic in India is mobile, so every section is designed mobile-first with thumb-friendly buttons, fast tapping, and zero horizontal scrolling.' 
      },
      { 
        question: 'Can I add more pages or an online store later?', 
        answer: 'Yes, absolutely! Our clean modular code structure makes it easy to scale up to a multi-page corporate website or full e-commerce store whenever your business grows.' 
      },
      { 
        question: 'Are there any hidden or surprise renewal charges?', 
        answer: 'Never. Our pricing is 100% transparent. The development fee is ₹4,999 one-time. Standard annual domain and cloud hosting renewals are billed transparently at actuals without lock-in.' 
      }
    ]
  },
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
    imageUrl: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1200&q=80',
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
      'Quick Disbursement Post-Approval',
      'Flexible Part-Payment & Foreclosure Options'
    ],
    benefits: [
      'Fulfill urgent personal, medical, wedding, or travel needs instantly',
      'Transparent interest rates starting from 10.5% p.a. with zero hidden fees',
      'Zero collateral or asset hypothecation required for salaried & self-employed',
      'Compare customized offers across 30+ leading private & PSU lending banks',
      'Flexible EMI repayment tenures ranging from 12 to 60 months',
      'Minimal documentation with online Aadhaar & salary slip e-verification',
      'Part-prepayment and foreclosure options without exorbitant penalties',
      'Free credit score review and personalized debt consolidation advisory'
    ],
    process: ['Online Application Submission', 'Document Verification', 'Eligibility Check', 'Sanction Letter', 'Disbursement'],
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
      'Minimal Financial Statement Requirements for Micro-Businesses',
      'Fast-Track Approval within 48 to 72 Hours',
      'Overdraft & Cash Credit (OD/CC) Limit Facilities'
    ],
    benefits: [
      'Expand operational capacity, buy bulk raw materials, and scale inventory',
      'Build a robust corporate CIBIL profile for future high-ticket sanctions',
      'Unsecured working capital lines without freezing residential property',
      'Tax-deductible interest payments reducing overall business tax liability',
      'Custom repayment schedules aligned with seasonal business cash flows',
      'Minimal balance sheet vintage required for emerging MSME firms',
      'Direct liaison with senior bank credit managers and underwriting desks',
      'Transparent processing charges with no unapproved broker cuts'
    ],
    process: ['Business Profile Evaluation', 'Financial Document Check', 'Lender Match', 'Approval', 'Disbursement'],
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
      'PMAY / Subsidy Support where applicable',
      'Balance Transfer Facility with Top-Up Capital',
      'Customized Tranche Disbursement for Construction'
    ],
    benefits: [
      'Own your dream residential property with comfortable, low-EMI schedules',
      'Substantial tax deductions under Section 80C (Principal) & Section 24(b) (Interest)',
      'Free legal scrutiny and title search verifying clear seller property titles',
      'Lowest benchmark interest rates starting from 8.35% p.a.',
      'Flexible extended tenure options up to 30 years',
      'Top-up loan availability for interior design and home renovation',
      'Zero prepayment penalty on floating rate loans as per RBI mandates',
      'End-to-end guidance from builder agreement to final property registration'
    ],
    process: ['Eligibility Assessment', 'Property Technical Evaluation', 'Sanction Letter Issuance', 'Legal Search', 'Disbursement'],
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
      'Quick Spot Approval Schemes',
      'Low Processing Fees & Instant Sanction Letters',
      'Commercial Vehicle & Fleet Finance Options'
    ],
    benefits: [
      'Drive your favorite new or certified used vehicle with minimal down payment',
      'Smooth RTO hypothecation and digital RC endorsement assistance',
      'Attractive fixed and floating interest rate structures starting at 8.8% p.a.',
      'Pre-approved loan options for existing bank account holders',
      'Flexible tenures up to 84 months for pocket-friendly installments',
      'Bundled comprehensive zero-dep insurance and roadside assistance guidance',
      'Used car valuation checks ensuring fair market purchase price',
      'Doorstep document collection and rapid 24-hour turnaround'
    ],
    process: ['Vehicle Selection', 'Application & CIBIL Check', 'Instant Approval', 'Dealer Coordination', 'Disbursement'],
    whyChooseUs: ['Direct tie-ups with major vehicle manufacturers & dealer networks']
  },
  {
    id: 'gold-loan',
    title: 'Gold Loan (Instant Cash Against Gold)',
    category: 'financial',
    shortDesc: 'Instant cash liquidity against gold jewelry with highest per-gram valuation, low interest, and zero income proof.',
    fullDesc: 'Unlock the instant value of your gold jewelry and coins with highest per-gram market valuation, competitive interest rates starting from 8.50% p.a., 100% insured bank vault custody, and instant cash or bank transfer within 30 minutes with zero income documentation required.',
    iconName: 'Coins',
    badge: 'Instant Cash • 30 Mins',
    priceStarting: 'Interest from 8.50% p.a.*',
    imageUrl: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=800&q=80',
    features: [
      'Instant Cash Loan up to ₹1.5 Crores against 18k - 24k Gold',
      'Highest Per-Gram Gold Valuation as per RBI Guidelines (Up to 75% LTV)',
      'Lowest Interest Rates starting from 8.50% p.a.',
      'Zero Income Proof / ITR required (Only Aadhaar & PAN KYC)',
      '100% Insured Bank-Grade High-Security Vault Storage',
      'Flexible Repayment Schemes: Bullet, Monthly Interest, or Standard EMI',
      'Zero Prepayment or Foreclosure Penalties on Early Closure',
      'Doorstep Gold Valuation & Digital Verification Support'
    ],
    benefits: [
      'Instant cash or bank transfer within 30 minutes of purity verification',
      'No credit score (CIBIL) restriction or salary proof needed',
      'Complete safety and insurance cover for your pledged gold assets',
      'Re-loan and top-up facility as gold market price increases',
      'Multiple repayment options: pay only interest monthly and principal at maturity'
    ],
    process: ['Gold Purity & Weight Evaluation', 'Instant KYC Verification', 'Value Assessment & Sanction', 'Instant Cash / Bank Transfer', 'Safe Gold Vault Custody'],
    whyChooseUs: ['Highest market rate per gram with zero hidden processing charges', 'Insured vaults with leading banks & NBFC partners']
  },
  {
    id: 'two-three-wheeler-loan',
    title: '2/3 Wheeler Loan (Bike, Scooter & Auto/E-Rickshaw)',
    category: 'financial',
    shortDesc: 'Affordable financing for two-wheelers, EV scooters, commercial autos, and e-rickshaws with minimal down payment.',
    fullDesc: 'Drive home your preferred two-wheeler, electric bike/scooter, passenger auto-rickshaw, or e-rickshaw with up to 95% on-road funding, fast spot approvals, pocket-friendly EMIs, and special subsidized interest rates for green EV mobility.',
    iconName: 'Bike',
    badge: 'Spot Approval',
    priceStarting: 'Interest from 7.99% p.a.*',
    imageUrl: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80',
    features: [
      'Up to 95% On-Road Funding for Two-Wheelers & E-Bikes',
      'Comprehensive Commercial 3-Wheeler & E-Rickshaw Financing',
      'Rapid Spot Approvals in under 15–30 Minutes',
      'Flexible Repayment Tenures ranging from 12 to 48 Months',
      'Green Mobility Subsidy & Concessional Rates for Electric Vehicles',
      'Minimal Paperwork: Aadhaar + Bank Passbook / UPI Statement',
      'Direct Multi-Brand Dealer Coordination & Instant Delivery Token',
      'Free Bundled Comprehensive Insurance & RTO Clearance'
    ],
    benefits: [
      'Start your daily commute or passenger/cargo transport business immediately',
      'Pocket-friendly EMIs tailored to daily earners and salaried youth',
      'Fast digital processing with minimal income documentation',
      'Special discounted interest for electric scooters and e-rickshaws',
      'Pre-approved deals available for existing bank customers'
    ],
    process: ['Select 2/3 Wheeler Model & Dealer', 'Submit Aadhaar & KYC Details', 'Spot Credit Approval', 'Down Payment & Loan Disbursement', 'Drive Away Your Vehicle'],
    whyChooseUs: ['Direct tie-ups with leading 2-wheeler and EV dealerships across India', 'Special low-down-payment schemes']
  },
  {
    id: 'group-loan-shg',
    title: 'Self Help / Group Loan (SHG & JLG Microfinance)',
    category: 'financial',
    shortDesc: 'Collateral-free group loans and microfinance credit for Self-Help Groups (SHGs), JLGs, and women entrepreneurs.',
    fullDesc: 'Empower rural and semi-urban community enterprises, women entrepreneurs, artisan collectives, dairy farmers, and cottage industries through collateral-free Self Help Group (SHG) and Joint Liability Group (JLG) microfinance loans with flexible weekly/monthly repayments.',
    iconName: 'Users',
    badge: 'Collateral-Free',
    priceStarting: 'Microfinance Rates*',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    features: [
      'Collateral-Free Collective Loans for Groups of 4 to 20 Members',
      'Dedicated Credit for Women Self-Help Groups (NRLM/SRLM aligned)',
      'Joint Liability Group (JLG) Model for Micro-Enterprises & Farmers',
      'Direct Benefit Transfer (DBT) to Group / Individual Bank Accounts',
      'Flexible Repayment Options: Weekly, Fortnightly, or Monthly',
      'Peer-Guarantee System without any Property Mortgage or Security',
      'Subsidized Interest Subventions under State & Central Livelihood Missions',
      'Free Bookkeeping, Financial Literacy & Digital Banking Training'
    ],
    benefits: [
      'Access vital working capital to scale small cottage, tailoring, dairy, and trading businesses',
      'Zero property collateral or formal financial balance sheets needed',
      'Build individual formal credit bureau scores for future enterprise loans',
      'Doorstep collection and relationship management by dedicated community officers',
      'Financial independence and livelihood security for women collectives'
    ],
    process: ['Group Formation & Resolution', 'Member KYC & Aadhaar Verification', 'Group Credit Assessment', 'Direct Account Disbursement', 'Structured Regular Repayments'],
    whyChooseUs: ['Deep microfinance expertise aligned with national rural livelihood guidelines', 'Transparent group accounting support']
  },
  {
    id: 'instant-online-loan',
    title: 'Instant Online Loan (Digital Express Cash)',
    category: 'financial',
    shortDesc: '100% paperless digital loan with algorithmic pre-approval and direct bank transfer in 15 minutes.',
    fullDesc: 'Get rapid, unsecured personal cash credit from ₹10,000 up to ₹5,00,000 completely online. Powered by automated underwriting, instant DigiLocker e-KYC, and digital e-Sign, funds are deposited directly into your bank account in 15 minutes.',
    iconName: 'Zap',
    badge: '15 Mins Cash',
    priceStarting: 'Interest from 1.15%/mo*',
    imageUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80',
    features: [
      'Instant Sanctions from ₹10,000 up to ₹5,00,000',
      '100% Digital, Paperless Online Application Journey',
      'Instant Automated Pre-Approval in under 3 Minutes',
      'Direct IMPS/NEFT Cash Transfer within 15 Minutes',
      'Video KYC & DigiLocker Aadhaar Verification',
      'Flexible Tenures from 3 to 24 Months',
      'Digital e-Mandate (Auto-Debit) Setup for Seamless EMIs',
      'Transparent APR with Zero Hidden Charges or Upfront Fees'
    ],
    benefits: [
      'Resolve sudden medical emergencies, travel bookings, or bill payments immediately',
      'Apply anytime 24/7 directly from your smartphone',
      'Zero branch visits and zero physical document submissions',
      'Repay flexibly with automated bank auto-debit',
      'Instant boost to your CIBIL score on timely repayments'
    ],
    process: ['Enter Mobile & Basic Details', 'Instant DigiLocker e-KYC Verification', 'Select Loan Amount & Tenure', 'Digital e-Mandate & e-Sign', 'Instant Cash in Bank Account'],
    whyChooseUs: ['Ultra-fast disbursement pipeline backed by RBI-regulated NBFC partners', 'Safe 256-bit bank-grade encryption']
  },
  {
    id: 'kcc-loan',
    title: 'KCC Loan (Kisan Credit Card & Agri Finance)',
    category: 'financial',
    shortDesc: 'Subsidized agricultural credit at effective 4% p.a. interest for farmers, crops, dairy, and farm equipment.',
    fullDesc: 'Empowering Indian farmers and cultivators with low-interest Kisan Credit Card (KCC) loans for seasonal crop production, tractor & farm machinery purchase, dairy/poultry farming, fisheries, and post-harvest maintenance with central interest subvention benefits.',
    iconName: 'Sprout',
    badge: 'Effective 4% p.a.*',
    priceStarting: 'Effective 4% p.a.*',
    imageUrl: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80',
    features: [
      'Effective Subsidized Interest Rate of 4% p.a. (with Prompt Repayment Subvention)',
      'Credit Limit up to ₹3 Lakhs under Special Subsidized Scheme',
      'Revolving Credit Limit valid for 5 Years with Simple Annual Review',
      'Coverage for Crop Cultivation, Seeds, Fertilizers, and Irrigation Costs',
      'Allied Activity Funding: Dairy, Poultry, Fisheries & Animal Husbandry',
      'In-Built PM Fasal Bima Yojana (PMFBY) Crop Loss Insurance',
      'Collateral-Free Credit up to ₹1.6 Lakhs (or ₹2 Lakhs under tie-up arrangements)',
      'Hassle-Free Land Revenue Record (7/12, Khasra-Khatauni) Liaison'
    ],
    benefits: [
      'Protect farming income from predatory local moneylenders with ultra-low 4% interest',
      'Revolving limit: withdraw only what you need and pay interest only on used funds',
      'Automatic crop insurance protection against droughts, floods, and natural pests',
      'Flexible repayment aligned with agricultural harvesting and crop marketing cycles',
      'Dedicated guidance for obtaining Land Possession Certificates (LPC) and mutation records'
    ],
    process: ['Land Record & Crop Profile Check', 'KCC Application Drafting', 'Bank Branch Verification', 'Sanction & KCC RuPay Card Delivery', 'Disbursement for Crop Season'],
    whyChooseUs: ['Expert agri-loan advisors with deep ground experience in rural land documentation', 'Fast coordination with lead district banks']
  },
  {
    id: 'aadhar-pan-loan',
    title: 'Loan with Aadhar & PAN (Paperless Quick Loan)',
    category: 'financial',
    shortDesc: 'Fast unsecured credit using only Aadhaar and PAN cards with instant OTP verification and zero paperwork.',
    fullDesc: 'Get rapid loan sanctions solely using your Aadhaar Card and PAN Card. Designed for individuals needing fast credit without the hassle of locating multiple years of ITRs, salary slips, or complex collateral documents.',
    iconName: 'Fingerprint',
    badge: 'Aadhaar + PAN Only',
    priceStarting: 'Interest from 10.99% p.a.*',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0a67e557b63f?auto=format&fit=crop&w=800&q=80',
    features: [
      'Instant Sanction using Only Aadhaar Card & PAN Card',
      'Zero Requirement of Bulky Financial Statements or Property Papers',
      'Instant Verification via UIDAI OTP & DigiLocker e-KYC',
      'Loan Amounts from ₹25,000 up to ₹7,50,000',
      'Direct Disbursement to Aadhaar-Linked Bank Account',
      'Quick Eligibility Assessment based on Digital Credit Bureau History',
      'Flexible Repayment Tenures from 6 Months to 5 Years',
      '100% Encrypted & RBI-Authorized Lending Partner Process'
    ],
    benefits: [
      'No physical document submission or photocopies required',
      'Fast sanction within minutes of OTP submission',
      'Accessible for both salaried employees and self-employed professionals',
      'Transparent terms with instant digital loan agreement on WhatsApp / Email',
      'Direct account credit with no broker commissions'
    ],
    process: ['Enter Aadhaar & PAN Numbers', 'Verify via UIDAI Registered Mobile OTP', 'Instant Credit Limit Evaluation', 'Accept Loan Offer & e-Sign', 'Instant Account Transfer'],
    whyChooseUs: ['100% paperless workflow with trusted RBI-licensed banking partners', 'Zero upfront processing deductions']
  },
  {
    id: 'mortgage-loan',
    title: 'Mortgage Loan / Loan Against Property',
    category: 'financial',
    shortDesc: 'Unlock high-value liquidity by leveraging residential, commercial, or industrial property collateral.',
    fullDesc: 'Leverage your existing real estate assets to raise high-ticket capital for major business expansion, debt consolidation, education, or strategic investments.',
    iconName: 'Key',
    priceStarting: 'Interest from 9.25% p.a.*',
    imageUrl: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800&q=80',
    features: [
      'High Sanction Limits up to ₹5 Crores',
      'Lower Interest Rates compared to Unsecured Loans',
      'Longer Repayment Tenures up to 15 Years',
      'Retain Occupancy & Full Ownership of Property',
      'Accepted for Residential, Commercial & Industrial Properties',
      'Flexible Overdraft (OD) Drop-Line Limits Available'
    ],
    benefits: [
      'Access high-ticket liquidity up to ₹5 Crores at significantly lower interest',
      'Continue occupying and operating your property without business disruption',
      'Much longer repayment tenures up to 15 years keeping monthly installments manageable',
      'Ideal instrument to consolidate multiple high-interest short-term debts',
      'Accepted against residential houses, commercial shops, and industrial plots',
      'Flexible drop-line overdraft facilities allowing interest payment only on utilized funds',
      'Complete legal and technical appraisal support provided by senior empanelled advocates',
      'Tax efficiency when funds are deployed for verifiable business growth'
    ],
    process: ['Property Valuation', 'Title Search & Legal Audit', 'Credit Assessment', 'Loan Sanction', 'Disbursement'],
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
      'Seamless Lender Handover Process',
      'Complete Foreclosure & NOC Document Assistance',
      'Interest Rate Spread Negotiation with Target Banks'
    ],
    benefits: [
      'Save lakhs of rupees in interest outflow over the remaining loan tenure',
      'Reduce monthly EMI burden to free up disposable household/business cash flow',
      'Unlock substantial top-up capital at prevailing low home/business loan rates',
      'Consolidate multiple scattered credit lines into one streamlined monthly payment',
      'Transition from high fixed rates to modern repo-rate linked transparent benchmarks',
      'AVRX handles all inter-bank coordination, document retrieval, and NOC clearance',
      'Free amortization savings calculation before initiating balance transfer',
      'Zero upfront consultation fees for initial savings assessment'
    ],
    process: ['Existing EMI Audit', 'Refinance Calculation', 'Bank Selection', 'Switch Approval', 'Lender Payoff'],
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
      'Documentation for CGTMSE Guarantee Scheme',
      'EDP Training & Portal Submission Support',
      'Bank Appraisal & Margin Money Subsidy Liaison'
    ],
    benefits: [
      'Direct government capital subsidies ranging from 15% to 35% under PMEGP',
      'Collateral-free credit up to ₹2 Crores supported by CGTMSE guarantee cover',
      'Subsidized lower interest rates designed for new manufacturing and service units',
      'Special incentives and higher subsidy percentages for women and rural entrepreneurs',
      'Comprehensive Detailed Project Report (DPR) crafted by experienced CAs',
      'Step-by-step guidance on official government portals (KVIC, Udyam, JanSamarth)',
      'Assistance in obtaining mandatory EDP (Entrepreneurship Development) certification',
      'Dedicated follow-up with nodal agency officers and branch managers'
    ],
    process: ['Scheme Eligibility Audit', 'Detailed Project Report (DPR) Creation', 'Portal Application', 'EDP Completion', 'Bank Follow-up & Sanction'],
    whyChooseUs: ['Specialized CA/Financial expert team for Govt loan DPR creation']
  }
];

export const TAX_SERVICES: ServiceItem[] = [
  {
    id: 'gst-registration',
    title: 'GST Registration',
    category: 'tax',
    shortDesc: 'Official 15-digit GSTIN registration for proprietorships, partnerships, LLPs, and private limited companies.',
    fullDesc: 'Get your official 15-digit GSTIN number issued swiftly by government tax authorities with expert verification of business address, authorized signatory, and HSN/SAC codes. 100% digital, zero office visits required, with instant ARN generation within 24 hours.',
    iconName: 'FileCheck',
    badge: 'Essential • ₹2,499',
    priceStarting: '₹2,499',
    imageUrl: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=800&q=80',
    features: [
      '100% Digital Document Verification & Prior Scrutiny',
      'Instant ARN (Application Reference Number) within 24 Hours',
      'HSN/SAC Code Classification for Products & Services',
      'Principal & Additional Place of Business Registration',
      'Resolution of Department Clarifications & Show Cause Notices',
      'Final 15-Digit GSTIN Allotment & Downloadable Certificate',
      'Composition Scheme vs Regular Scheme Advisory',
      'Free 1-Month Post-Registration Invoicing & E-Way Bill Guidance',
      'Automated Bank Account Linking & Master Profile Setup'
    ],
    benefits: [
      'Legally sell products and services across all Indian states and UTs',
      'Sell on top e-commerce marketplaces like Amazon, Flipkart & Meesho',
      'Seamlessly claim Input Tax Credit (ITC) to save business purchase taxes',
      'Build institutional credibility with corporate B2B clients and government tenders',
      'Open current bank accounts and apply for business loans with ease',
      'Avoid harsh un-registered business penalties under CGST Section 122',
      'Direct GST portal credential handover with dedicated CA advisory support',
      'Fast 24-Hour ARN turnaround with 100% prior document audit'
    ],
    process: [
      'Step 1: Document Collection & Aadhaar OTP KYC Verification',
      'Step 2: Business Activity & HSN/SAC Mapping by GST Specialists',
      'Step 3: SPICe+ / GST Portal Application E-Filing & ARN Generation',
      'Step 4: Real-time Officer Processing & Clarification Management',
      'Step 5: Official GSTIN Certificate (Form GST REG-06) Issuance & Delivery'
    ],
    whyChooseUs: [
      'Zero rejection track record due to prior multi-point document audit',
      'Dedicated Chartered Accountant and Tax Advocate assigned to your file',
      'Super-fast turnaround: ARN in 24 hours, Certificate in 3–5 working days',
      'Transparent pricing with zero hidden government challan fees'
    ],
    faqs: [
      {
        question: 'Who is required to obtain GST registration in India?',
        answer: 'GST registration is mandatory for businesses with annual turnover exceeding ₹40 Lakhs for goods (₹20 Lakhs for special category states) and ₹20 Lakhs for services (₹10 Lakhs for special states). It is also mandatory for inter-state sellers, e-commerce sellers, and casual taxable persons regardless of turnover.'
      },
      {
        question: 'What documents are required for new GST registration?',
        answer: 'PAN card and Aadhaar of the owner/directors, passport photograph, business address proof (electricity bill, property tax receipt, or rent agreement with landlord NOC), and bank account proof (cancelled cheque or latest bank statement).'
      },
      {
        question: 'How long does the entire GST registration process take?',
        answer: 'ARN is generated within 24 hours of submission. Once submitted on the government portal, approval typically takes 3 to 7 working days, subject to government department processing.'
      },
      {
        question: 'Can I register GST from a residential address or rented home?',
        answer: 'Yes! A residential or rented address can be used as your registered business address by providing a recent electricity bill along with a simple Rent Agreement and Landlord NOC.'
      },
      {
        question: 'What is the difference between Regular and Composition Scheme?',
        answer: 'Under the Regular scheme, you collect GST from customers and claim ITC on inputs. Under the Composition scheme (for turnover up to ₹1.5 Cr), you pay a fixed flat rate (1% to 6%) but cannot collect GST from customers or claim ITC.'
      }
    ]
  },
  {
    id: 'gst-filing',
    title: 'GST Return Filing (GSTR-1, 3B, 9)',
    category: 'tax',
    shortDesc: 'Monthly and quarterly GST return filing, automated GSTR-2B ITC reconciliation, and audit support.',
    fullDesc: 'Ensure seamless, on-time monthly and quarterly GST compliance with zero penalty notices. Our CA-led compliance team handles automated GSTR-2B input credit reconciliation, outward supply reporting (GSTR-1), monthly tax payment summaries (GSTR-3B), annual returns (GSTR-9), and E-Invoicing.',
    iconName: 'Calculator',
    badge: 'CA Verified • ₹1,499/mo',
    priceStarting: '₹1,499/mo',
    imageUrl: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
    features: [
      'Monthly / Quarterly GSTR-1 Outward Supplies E-Filing',
      'Monthly GSTR-3B Tax Liability Computation & Return Filing',
      'Automated GSTR-2A vs GSTR-2B Input Tax Credit (ITC) Matching',
      'Quarterly Return Monthly Payment (QRMP) Scheme Setup',
      'Annual GSTR-9 Filing & GSTR-9C Reconciliation Statement',
      'E-Way Bill Generation & E-Invoicing Compliance Support',
      'GST Challan Generation & Net Tax Offset Guidance',
      'Proactive Advance Alerts before 11th & 20th Deadlines',
      'Notice & Mismatch Resolution Support with Tax Authorities'
    ],
    benefits: [
      'Eliminate heavy late fees (₹50/day) and interest penalties (18% p.a.)',
      'Maximize Input Tax Credit savings by catching vendor non-filers early',
      'Protect your GST registration from department cancellation orders',
      'Maintain an unblemished tax compliance rating for tenders and bank loans',
      'Dedicated CA desk so you can focus 100% on growing your core business',
      'Automated monthly summary statements for management reporting',
      'Instant WhatsApp reminders 5 days prior to statutory due dates',
      'Zero defect guarantee on all returns filed before statutory cutoff'
    ],
    process: [
      'Step 1: Monthly Sales & Purchase Invoice Data Ingestion',
      'Step 2: Automated 2B Reconciliation to verify Vendor ITC availability',
      'Step 3: Computation of Net Output Tax and Final Draft Approval',
      'Step 4: Portal Challan Creation & Digital E-Filing via EVC / DSC',
      'Step 5: Delivery of Signed Acknowledgement Receipts & ITC Log'
    ],
    whyChooseUs: [
      'Proprietary ITC matching software saves average clients 15–20% on tax',
      '100% on-time filing guarantee before statutory due dates',
      'Experienced tax litigation team for GST scrutiny and notice replies',
      'Real-time WhatsApp support for instant invoicing queries'
    ],
    faqs: [
      {
        question: 'What happens if I file my GST return after the due date?',
        answer: 'Late filing attracts a penalty of ₹50 per day (₹20 per day for Nil returns) up to a maximum cap, plus 18% annual interest on the unpaid tax liability. Repeated delays can trigger GSTIN suspension.'
      },
      {
        question: 'What is the importance of GSTR-2B reconciliation?',
        answer: 'Under current GST law, you can only claim Input Tax Credit (ITC) if your supplier has uploaded their invoice in GSTR-1 and it appears in your GSTR-2B statement. Reconciliation ensures you never lose legitimate tax credits.'
      },
      {
        question: 'Do I need to file GST returns if I had zero sales in a month?',
        answer: 'Yes. Filing a Nil GST return is mandatory even if you had zero transactions. AVRX provides automated 1-click Nil return filing.'
      }
    ]
  },
  {
    id: 'itr-filing',
    title: 'Income Tax Return (ITR) Filing',
    category: 'tax',
    shortDesc: 'CA-reviewed ITR filing for salaried individuals, freelancers, business owners, capital gains, and NRIs.',
    fullDesc: 'File your income tax returns accurately under the correct ITR form (ITR-1 to ITR-7), optimize deductions under Old vs New tax regimes, scrutinize AIS/TIS and Form 26AS records, and fast-track tax refund deposits directly into your bank account.',
    iconName: 'FileText',
    badge: 'High Accuracy • ₹999',
    priceStarting: '₹999',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80',
    features: [
      'Comprehensive AIS (Annual Information Statement) & Form 26AS Audit',
      'Old vs New Tax Regime Comparative Savings Analysis',
      'Salaried Professionals (Form 16, HRA, 80C, 80D, 80E, Home Loan Interest)',
      'Freelancers & Professionals Presumptive Tax Filing (Section 44ADA)',
      'Business Owners & Traders Presumptive Scheme (Section 44AD/44AE)',
      'Capital Gains Scrutiny (Stocks, Mutual Funds, Crypto, Real Estate)',
      'Foreign Assets, ESOPs & NRI Income Tax Compliance',
      'Instant E-Verification & Automated Refund Status Tracker',
      'Audit of Past Filed Returns for Correction & Rectification'
    ],
    benefits: [
      'Claim maximum legitimate deductions to minimize total payable income tax',
      'Get TDS and advance tax refunds processed quickly into your bank account',
      'Mandatory financial proof for Home Loans, Personal Loans & Credit Cards',
      'Essential documentation for International Tourist & Business Visa approvals',
      'Safeguard against Income Tax Section 148 & 143(1) mismatch notices',
      'Comparative tax savings report between Old vs New tax regime options',
      'Carry forward capital and business losses to offset future taxable income',
      'Direct Chartered Accountant consultation with written tax computation summary'
    ],
    process: [
      'Step 1: Upload Form 16, Bank Statements & Investment Receipts',
      'Step 2: Chartered Accountant Review of AIS, TIS & 26AS Tax Credits',
      'Step 3: Computation Sheet Preparation with Old vs New Regime Comparison',
      'Step 4: Client Review, Approval & E-Filing on Income Tax Portal',
      'Step 5: E-Verification via Aadhaar OTP & Delivery of ITR-V Acknowledgement'
    ],
    whyChooseUs: [
      'Chartered Accountant verified accuracy for every individual filing',
      'End-to-end support until tax refund is successfully credited',
      'Free assistance for minor defect rectifications under Section 139(9)',
      'Fast 24-hour turnaround for standard salaried and freelancer returns'
    ],
    faqs: [
      {
        question: 'Which tax regime should I choose: Old or New?',
        answer: 'The New Regime offers lower slab tax rates with a ₹75,000 standard deduction and rebate up to ₹7 Lakhs, but disallows most deductions. The Old Regime is beneficial if your total deductions (80C, 80D, HRA, Home Loan Interest) exceed ₹3.75 Lakhs. Our CAs calculate both and choose the one that saves you maximum tax.'
      },
      {
        question: 'What is the last date to file Income Tax Returns for individuals?',
        answer: 'For individual non-audit taxpayers, the statutory deadline is usually 31st July of the relevant Assessment Year. Belated and revised returns can be filed until 31st December with a nominal late fee.'
      },
      {
        question: 'Can I file ITR if I do not have a Form 16 from my employer?',
        answer: 'Yes! Our experts can prepare and file your ITR using your monthly salary slips, bank account statements, and Form 26AS/AIS tax credit records.'
      }
    ]
  },
  {
    id: 'udyam-registration',
    title: 'Udyam / MSME Registration',
    category: 'tax',
    shortDesc: 'Official MSME Udyam registration for priority bank lending, collateral subsidies, and tender perks.',
    fullDesc: 'Get your official Ministry of MSME Udyam Certificate to unlock immense government perks including priority bank loans at discounted interest rates, exemption from Earnest Money Deposits (EMD) in government tenders, protection against delayed payments, and electricity tariff concessions.',
    iconName: 'Award',
    badge: 'Govt Benefits • ₹499',
    priceStarting: '₹499',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    features: [
      'Official Ministry of MSME Udyam Registration Certificate',
      'Precise NIC (National Industrial Classification) Activity Code Mapping',
      'Lifetime Validity with Zero Annual Renewal Required',
      'Eligibility for Collateral-Free Loans under CGTMSE Scheme',
      '50% Govt Fee Subsidy on Trademark & Patent Registrations',
      'Access to MSME Samadhaan Portal for Recovery of Delayed Dues',
      'Waiver of Earnest Money Deposit (EMD) in Government Tenders',
      'Electricity Bill Concessions & ISO Certification Reimbursements',
      'Priority Sector Lending (PSL) Rate Reductions across Banks',
      'Direct Onboarding on Govt e-Marketplace (GeM Portal)',
      'Subsidized Participation in National & International Trade Fairs',
      'Credit Linked Capital Subsidy (CLCSS) & Barcode Subsidy Access'
    ],
    benefits: [
      'Lower interest rates (up to 1–1.5% discount) on commercial bank loans',
      'Legal power to charge compound interest on buyers delaying payment beyond 45 days',
      'Exclusive reservation for participation in central and state PSU tenders',
      'Subsidies on technology upgrades, ISO certifications, and patent filings',
      '100% digital verification completed within 24 hours',
      'Exemption from 50% government official fees on Trademark and Patent filings',
      'Collateral-free credit guarantee up to ₹5 Crores under CGTMSE trust',
      'Lifelong valid digital certificate with verifiable QR code and Zero annual maintenance'
    ],
    process: [
      'Step 1: Enter Aadhaar Number and Name as per Aadhaar for OTP verification',
      'Step 2: Submit PAN Details and verify business category (Micro / Small / Medium)',
      'Step 3: NIC Code Selection for Manufacturing and Service activities',
      'Step 4: Investment in Plant & Machinery and Annual Turnover Verification',
      'Step 5: Instant Downloadable Udyam Certificate with verifiable QR Code'
    ],
    whyChooseUs: [
      'Fast 24-hour delivery with correct enterprise classification',
      'Expert advice on leveraging government MSME subsidy schemes',
      'Zero physical paperwork — 100% paperless digital onboarding',
      'Free guidance on MSME Samadhaan dispute filing'
    ],
    faqs: [
      {
        question: 'Who is eligible for MSME Udyam Registration?',
        answer: 'Any enterprise engaged in manufacturing or service provision categorized as Micro (Investment < ₹1 Cr, Turnover < ₹5 Cr), Small (Investment < ₹10 Cr, Turnover < ₹50 Cr), or Medium (Investment < ₹50 Cr, Turnover < ₹250 Cr) is eligible.'
      },
      {
        question: 'Is Udyam Registration valid for lifetime?',
        answer: 'Yes, the Udyam Certificate has lifetime validity and does not require annual renewal. However, details are automatically updated each year based on your ITR and GST filings.'
      },
      {
        question: 'Can traders and retail shops get Udyam Registration?',
        answer: 'Yes! The Ministry of MSME allows Wholesale and Retail traders to register on the Udyam portal to access Priority Sector Lending benefits from banks.'
      }
    ]
  },
  {
    id: 'company-registration',
    title: 'Company & Business Registration',
    category: 'tax',
    shortDesc: 'Private Limited, LLP, One Person Company (OPC), and Partnership business incorporation.',
    fullDesc: 'End-to-end company incorporation services with the Ministry of Corporate Affairs (MCA). We handle name approval (RUN), Digital Signature Certificates (DSC), Director Identification Numbers (DIN), MoA & AoA drafting, Certificate of Incorporation (COI), PAN, TAN, GSTIN, and corporate bank account opening.',
    iconName: 'Building2',
    badge: 'Startup Ready • ₹6,999',
    priceStarting: '₹6,999',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    features: [
      'Private Limited / LLP / One Person Company (OPC) Incorporation',
      'Name Approval via MCA RUN & SPICe+ Part A Form',
      'Class 3 Digital Signature Certificates (DSC) with USB Tokens for 2 Directors',
      'Director Identification Number (DIN) Allocation for all Directors',
      'Custom Memorandum of Association (MoA) & Articles of Association (AoA)',
      'Official Certificate of Incorporation (COI) with CIN Number',
      'Corporate PAN & TAN Card Allocation',
      '1-Click Corporate Bank Account Opening & Zero Balance Setup Assistance',
      'EPFO, ESIC & Professional Tax Registration Integrated'
    ],
    benefits: [
      'Shield personal wealth with limited liability protection',
      'Raise venture capital, angel investment, and equity funding effortlessly',
      'Establish international enterprise credibility with clients and suppliers',
      'Enjoy corporate tax benefits, perpetual succession, and transferable ownership',
      'Complete company setup delivered in just 5 to 7 working days',
      'Includes corporate PAN, TAN, EPFO, ESIC and digital bank resolution kit',
      'Complimentary INC-20A Commencement of Business filing guidance',
      'Direct guidance from empanelled Company Secretaries (CS) and CAs'
    ],
    process: [
      'Step 1: Name Availability Check & Class 3 DSC Generation',
      'Step 2: SPICe+ Part A (Name Reservation) & Part B Form Preparation',
      'Step 3: MoA, AoA & Statutory Declarations Drafting by Company Secretaries',
      'Step 4: Portal Submission & Central Registration Centre (CRC) Approval',
      'Step 5: COI, PAN, TAN, EPFO, ESIC & Bank Resolution Dispatch'
    ],
    whyChooseUs: [
      'All-inclusive pricing with zero surprise government stamp duty bills',
      'Expert Company Secretaries and Chartered Accountants manage your file',
      'Free post-incorporation consultation for INC-20A Commencement of Business',
      'Complimentary corporate stationery templates and board resolutions'
    ],
    faqs: [
      {
        question: 'What is the minimum requirement to start a Private Limited Company?',
        answer: 'You need a minimum of 2 directors, 2 shareholders (directors can be shareholders), PAN and Aadhaar of all members, address proof, and a registered office address in India.'
      },
      {
        question: 'Is there any minimum capital requirement for incorporation?',
        answer: 'No! The government has abolished the minimum paid-up capital requirement. You can start a Private Limited company with as little as ₹1,000 capital.'
      },
      {
        question: 'Can a residential address be used as the registered office?',
        answer: 'Yes. Any residential or commercial address with a recent utility bill and landlord NOC is 100% valid for MCA company registration.'
      }
    ]
  },
  {
    id: 'trademark-registration',
    title: 'Trademark Registration & Brand IP',
    category: 'tax',
    shortDesc: 'Protect your brand name, logo, slogan, and intellectual property with official TM & ® marks.',
    fullDesc: 'Protect your business name, logo, tagline, and brand identity from copycats with official Trademark Registration under the Controller General of Patents, Designs and Trade Marks. Includes comprehensive NICE class search, TM application filing in 24 hours, and examination report reply support.',
    iconName: 'Stamp',
    badge: 'Brand Protection • ₹4,999',
    priceStarting: '₹4,999',
    imageUrl: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
    features: [
      'Comprehensive Public Trademark Database Search & Conflict Report',
      'Classification under 45 International NICE Trademark Classes',
      'TM Application Form TM-A Drafting & Electronic E-Filing',
      'Use of the ™ Symbol within 24 Hours of Application Submission',
      'Monitoring of Official Trademark Journal Publications',
      'Examination Report Scrutiny & Objection Reply Drafting Support',
      'Final Trademark Registration Certificate with ® Symbol Rights',
      '10 Years Trademark Protection with Nationwide Legal Exclusivity',
      'Brand Registry Verification on Amazon & Flipkart Marketplace'
    ],
    benefits: [
      'Legal ownership preventing competitors from copying your brand name or logo',
      'Build valuable intangible business assets that can be franchised or sold',
      'Get Brand Registry on Amazon, Flipkart, and Google Play Store',
      'Right to take legal action and claim damages against counterfeiters',
      'Use the prestigious ® symbol to build customer trust and market prestige',
      'Immediate use of the ™ symbol within 24 hours of filing',
      '50% discount on official government fees for MSME & Startup certificate holders',
      'Proactive monitoring alerts against copycat applications filed in your class'
    ],
    process: [
      'Step 1: In-depth Trademark Availability & Similarity Search',
      'Step 2: Class Selection & Power of Attorney Authorization Setup',
      'Step 3: Online TM-A Application Filing & Immediate Application Number',
      'Step 4: Department Scrutiny, Examination & Journal Publication Tracking',
      'Step 5: Issuance of Official Trademark Registration Certificate (Form RG-2)'
    ],
    whyChooseUs: [
      'Experienced Trademark Attorneys with 98%+ registration success rate',
      'Start using ™ symbol within 24 hours of filing',
      'Proactive monitoring to prevent unauthorized third-party infringements',
      'Discounted official government fee rates for MSME/Startups (₹4,500 vs ₹9,000)'
    ],
    faqs: [
      {
        question: 'When can I start using the ™ and ® symbols?',
        answer: 'You can start using the ™ symbol immediately after our attorney files the application and generates your official TM Application Number (within 24 hours). The ® symbol can be used once the government grants the final Registration Certificate.'
      },
      {
        question: 'How long is a registered trademark valid in India?',
        answer: 'A registered trademark is valid for 10 years from the date of application. It can be easily renewed indefinitely every 10 years by paying the standard renewal fee.'
      },
      {
        question: 'What is a Trademark Class?',
        answer: 'Trademarks are categorized into 45 classes (Classes 1–34 for goods/products, Classes 35–45 for services). For example, Class 35 covers retail, e-commerce, and business services; Class 42 covers software and web development.'
      }
    ]
  },
  {
    id: 'fssai-food-license',
    title: 'FSSAI Food Safety License',
    category: 'tax',
    shortDesc: 'Basic, State, and Central FSSAI food safety licenses for restaurants, cloud kitchens, and traders.',
    fullDesc: 'Obtain your 14-digit FSSAI Food License / Registration number swiftly from the Food Safety and Standards Authority of India. Mandatory for restaurants, cafes, cloud kitchens, bakeries, food processors, grocery stores, food exporters, and Zomato/Swiggy onboarding.',
    iconName: 'Utensils',
    badge: 'Food Safety • ₹1,499',
    priceStarting: '₹1,499',
    imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    features: [
      'FSSAI Basic Registration (Turnover up to ₹12 Lakhs/year)',
      'FSSAI State License (Turnover ₹12 Lakhs to ₹20 Crores/year)',
      'FSSAI Central License (Turnover > ₹20 Crores / Importers / E-commerce)',
      'Mandatory 14-Digit FSSAI License Number Generation',
      'Fast-track onboarding support for Swiggy, Zomato, Blinkit & Zepto',
      'Food Safety Management System (FSMS) Plan & Declaration Drafting',
      'Annual Return Filing (Form D-1) & License Renewal Support',
      'Hygiene Rating & Food Business Operator (FBO) Compliance Kit'
    ],
    benefits: [
      'Legally operate food manufacturing, packaging, and catering businesses in India',
      'Mandatory requirement to list your restaurant/kitchen on Swiggy & Zomato',
      'Build consumer trust with certified hygienic food preparation standards',
      'Avoid hefty legal penalties and shop closure notices by food safety officers',
      'Fast delivery in 3 to 7 working days with verifiable 14-digit number',
      'Full guidance on FSMS documentation and kitchen safety layout plans',
      'Seamless multi-location expansion under state or central license umbrellas',
      'Automated expiry alerts to ensure zero lapse in food trade permissions'
    ],
    process: [
      'Step 1: Business Category & Turnover Identification (Basic / State / Central)',
      'Step 2: Document Verification (Kitchen Layout, Photo ID, Address Proof)',
      'Step 3: FoSCoS Portal Form A / Form B Application Electronic Submission',
      'Step 4: Food Safety Officer Verification & Clarification Clearance',
      'Step 5: Delivery of Official 14-Digit FSSAI Certificate'
    ],
    whyChooseUs: [
      'Zero application rejection track record with prior FoSCoS compliance check',
      'Dedicated food industry compliance desk for cloud kitchens and D2C brands',
      'Fast-track processing for quick restaurant launches',
      'Renewal reminder alerts to prevent license lapses'
    ],
    faqs: [
      {
        question: 'Which FSSAI license do I need for my cloud kitchen or restaurant?',
        answer: 'If your expected annual turnover is under ₹12 Lakhs, a Basic FSSAI Registration is sufficient. If turnover is between ₹12 Lakhs and ₹20 Crores, you require a State FSSAI License. For large chains or inter-state operations, a Central License is needed.'
      },
      {
        question: 'Can I sell on Swiggy and Zomato with a Basic FSSAI registration?',
        answer: 'Yes! Basic FSSAI registration is 100% accepted by Swiggy, Zomato, and other online food delivery apps for onboarding cloud kitchens and home chefs.'
      }
    ]
  },
  {
    id: 'iso-certification',
    title: 'ISO Certification (9001 / 27001)',
    category: 'tax',
    shortDesc: 'Internationally recognized ISO 9001, 27001, 14001, 45001 certification for quality and security.',
    fullDesc: 'Elevate your business credibility and win high-value corporate and government tenders with accredited ISO Certification. We provide end-to-end consulting, gap analysis, documentation preparation, internal audit support, and certificate issuance for ISO 9001 (QMS), ISO 27001 (ISMS), ISO 14001 (EMS), and ISO 22000 (FSMS).',
    iconName: 'BadgeCheck',
    badge: 'Global Standard • ₹3,999',
    priceStarting: '₹3,999',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    features: [
      'ISO 9001:2015 Quality Management System (QMS) Certification',
      'ISO 27001:2022 Information Security Management System (ISMS)',
      'ISO 14001 Environmental & ISO 45001 Occupational Health & Safety',
      'Quality Manual, SOPs & Process Flow Documentation Drafting',
      'Pre-Audit Gap Analysis & Readiness Assessment',
      'Accredited Certification Body (IAF / Non-IAF) Audit Coordination',
      'Verifiable Certificate with Global QR Code & Unique Certificate ID',
      '3-Year Validity with Annual Surveillance Audit Guidance',
      'Internal Auditor Training & Process Quality Metric Framework'
    ],
    benefits: [
      'Mandatory prerequisite to qualify for major Government and PSU tenders',
      'Demonstrate international quality and data security to enterprise clients',
      'Streamline internal operational workflows and reduce process errors',
      'Boost brand reputation and global export market acceptability',
      'Complete turnaround in just 3 to 5 business days',
      'Verifiable certificate registered with international accreditation bodies',
      'Full assistance with SOP and Quality Manual creation',
      'Qualify for government MSME reimbursement subsidies on certification costs'
    ],
    process: [
      'Step 1: Selection of ISO Standard & Scope Definition',
      'Step 2: Business Workflow Documentation & Quality Manual Preparation',
      'Step 3: Internal Audit & Implementation Review',
      'Step 4: Formal Certification Body Assessment',
      'Step 5: Issuance of Accredited ISO Certificate with Online Verification'
    ],
    whyChooseUs: [
      'Recognized by IAF (International Accreditation Forum) & international bodies',
      'Complete done-for-you documentation and SOP creation',
      'Fast 3-day turnaround for urgent government tender deadlines',
      'Affordable transparent pricing with no hidden audit fees'
    ],
    faqs: [
      {
        question: 'What is the difference between IAF and Non-IAF ISO certification?',
        answer: 'IAF (International Accreditation Forum) certified certificates are globally recognized and required for government tenders and overseas exports. Non-IAF certificates are more economical and suitable for local branding and internal quality marketing.'
      },
      {
        question: 'How long is an ISO certificate valid?',
        answer: 'ISO certificates are valid for 3 years, subject to annual surveillance audits to ensure ongoing standard compliance.'
      }
    ]
  },
  {
    id: 'iec-code',
    title: 'Import Export Code (IEC)',
    category: 'tax',
    shortDesc: 'Official 10-digit Import Export Code (IEC) from DGFT for international trading and foreign remittances.',
    fullDesc: 'Get your official 10-digit Import Export Code (IEC) issued directly by the Directorate General of Foreign Trade (DGFT), Ministry of Commerce. Mandatory for any individual or company importing goods into India, exporting products or services abroad, and receiving international payments via wire transfers.',
    iconName: 'Globe',
    badge: 'DGFT Approved • ₹1,999',
    priceStarting: '₹1,999',
    imageUrl: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=800&q=80',
    features: [
      'Official DGFT 10-Digit IEC License Generation',
      'PAN-linked IEC Registration with Customs & ICEGATE Integration',
      'Lifetime Validity with Zero Annual Renewal Fees',
      'Customs Clearance & Port Code Registration Support',
      'AD Code (Authorized Dealer Code) Bank Letter Guidance',
      'Assistance for Export Promotion Council (EPC) Registrations (RCMC)',
      'Export Incentives & Duty Drawback Scheme Eligibility Setup',
      'Annual DGFT IEC Profile Validation & Portal Upkeep'
    ],
    benefits: [
      'Legally export software, services, and physical goods to over 190 countries',
      'Clear customs smoothly without shipment holds or port penalties',
      'Receive foreign currency inward remittances directly into Indian bank accounts',
      'Avail export subsidies, Duty Drawbacks, and RoDTEP government tax benefits',
      'Delivered in 24 to 48 hours with lifetime validity',
      'Direct link with ICEGATE and Indian Customs for automated tax clearing',
      'No complex recurring compliance or annual renewal fees required',
      'Essential authorization for e-commerce international shipping'
    ],
    process: [
      'Step 1: Submission of PAN, Aadhaar & Bank Certificate / Cancelled Cheque',
      'Step 2: DGFT Portal Profile Creation & Digital Signature Verification',
      'Step 3: ANF-2A Form E-Filing & Application Submission',
      'Step 4: Government Fee Payment & Processing',
      'Step 5: Immediate Downloadable IEC Certificate Issuance'
    ],
    whyChooseUs: [
      'Direct DGFT authorized filing with 24-hour turnaround',
      'Free guidance on mandatory annual IEC profile validation',
      'End-to-end support for AD Code and ICEGATE port registration',
      'Expert advice on Duty Drawback and export benefit schemes'
    ],
    faqs: [
      {
        question: 'Do software and service exporters need an Import Export Code?',
        answer: 'Yes! Service and software exporters receiving foreign payments require an IEC to legally claim export benefits and report foreign inward remittances to RBI.'
      },
      {
        question: 'Does the IEC license require annual renewal?',
        answer: 'The IEC code itself has lifetime validity. However, DGFT mandates a simple free annual online profile update between April and June each year, which our team handles for you.'
      }
    ]
  },
  {
    id: 'shop-establishment-gumasta',
    title: 'Shop & Establishment License (Gumasta)',
    category: 'tax',
    shortDesc: 'State municipal trade license and Gumasta registration for commercial shops, offices, and outlets.',
    fullDesc: 'Obtain your official Shop and Establishment Registration (Gumasta License / Trade License) issued by your state Labour Department and Municipal Corporation. Mandatory for opening commercial bank accounts, proving commercial existence, and operating retail stores, offices, and warehouses.',
    iconName: 'Store',
    badge: 'Trade License • ₹999',
    priceStarting: '₹999',
    imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
    features: [
      'Official State Labour Department Shop Act / Gumasta Certificate',
      'Accepted by All Scheduled Commercial & Private Banks for Current Accounts',
      'Registration for 0 to 10+ Employees Categories',
      'Municipal Ward Trade License Compliance',
      'Employee Working Hours & Holiday Compliance Structuring',
      'Fast 48-Hour Delivery with Verifiable Govt Certificate',
      'Trade Signboard & Business Address Proof Validation'
    ],
    benefits: [
      'Mandatory legal proof required by banks to open a business Current Account',
      'Prevent harassment and penalties during municipal inspection visits',
      'Valid proof of commercial business address across all government portals',
      'Avail state government subsidies and local small business support schemes',
      '100% online process with zero visits to municipal offices',
      'Official government certificate issued directly under state labor laws',
      'Fast 48-hour processing without physical bureau bureaucracy',
      'Legitimate verification required for state utility and supplier tie-ups'
    ],
    process: [
      'Step 1: Submit Business Name, Owner ID & Shop Front Photograph with Board',
      'Step 2: Verify Commercial Address & Electricity Bill',
      'Step 3: State Labour Portal Application E-Filing',
      'Step 4: Inspector Review & Digital Processing',
      'Step 5: Download Official Digital Shop Act Certificate'
    ],
    whyChooseUs: [
      'Coverage across Maharashtra, MP, Delhi, UP, Karnataka, Gujarat & all major states',
      'Fast 2 to 3-day certificate turnaround',
      'Instant current account opening support with top partner banks',
      'Hassle-free 100% digital execution'
    ],
    faqs: [
      {
        question: 'What is a Gumasta or Shop & Establishment License?',
        answer: 'It is a mandatory state government trade license issued under the Shop and Establishment Act that regulates conditions of work, employee rights, and authorizes commercial operations within municipal limits.'
      },
      {
        question: 'Can I open a Current Account without GST using a Shop Act license?',
        answer: 'Yes! Most banks (HDFC, ICICI, SBI, Axis) accept a valid Shop & Establishment Registration Certificate along with PAN to open a business Current Account for proprietorships.'
      }
    ]
  },
  {
    id: 'business-compliance',
    title: 'Annual ROC & Company Compliance',
    category: 'tax',
    shortDesc: 'Annual company secretarial filings, ROC filings (MGT-7, AOC-4), director KYC, and audit coordination.',
    fullDesc: 'Comprehensive compliance management for Private Limited, LLP, and OPC entities. We handle mandatory MCA filings including AOC-4 (Financial Statements), MGT-7 (Annual Return), DIR-3 KYC, Board Meeting Minutes, Statutory Registers, and Tax Audit coordination.',
    iconName: 'ShieldAlert',
    badge: 'MCA Compliance • ₹4,999/yr',
    priceStarting: '₹4,999/yr',
    imageUrl: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
    features: [
      'Filing of MCA Form AOC-4 (Balance Sheet & P&L Statement)',
      'Filing of MCA Form MGT-7 / MGT-7A (Annual Return)',
      'Annual DIR-3 KYC for all Company Directors',
      'Drafting of Statutory Board Meeting Minutes & AGM Resolutions',
      'Maintenance of Electronic Statutory Registers under Companies Act 2013',
      'Filing of Form INC-20A (Declaration of Commencement of Business)',
      'Filing of Form DPT-3 (Return of Deposits / Outstanding Loans)',
      'Statutory CA Audit Coordination & Financial Statement Scrutiny',
      'Auditor Appointment (Form ADT-1) & Statutory Disclosure Filings'
    ],
    benefits: [
      'Avoid crippling MCA late fees of ₹100 per day per form with no upper cap',
      'Protect directors from disqualification and DIN deactivation under Section 164',
      'Maintain an Active & Clean MCA status to qualify for bank loans and funding',
      'Ensure zero compliance stress with dedicated Company Secretaries (CS)',
      'Save up to 60% compared to traditional standalone retainer fees',
      'Automated alerts on upcoming statutory AGM and board meeting cutoffs',
      'Complete preparation of Board Reports and Director Declarations',
      'Direct audit synchronization between company auditor and CS team'
    ],
    process: [
      'Step 1: Annual Compliance Health Check & Financial Data Review',
      'Step 2: Preparation of Board Report, Director Declarations & AGM Notice',
      'Step 3: DIR-3 KYC Web E-Verification for all Directors',
      'Step 4: E-Filing of AOC-4 & MGT-7 Forms with MCA Digital Signatures',
      'Step 5: Dispatch of SRN Challans & MCA Filing Acknowledgements'
    ],
    whyChooseUs: [
      'Dedicated Qualified Company Secretary (CS) assigned to your business',
      'Automated statutory deadline calendar with proactive WhatsApp alerts',
      'Zero penalty guarantee for all documents provided on schedule',
      'Complete end-to-end assistance including audit coordination'
    ],
    faqs: [
      {
        question: 'What is the penalty for late filing of MCA annual returns?',
        answer: 'Late filing of AOC-4 and MGT-7 attracts a harsh statutory penalty of ₹100 per day per form, which accumulates indefinitely with no upper limit. Directors can also face disqualification for up to 5 years.'
      },
      {
        question: 'What is INC-20A and when must it be filed?',
        answer: 'INC-20A is the mandatory Declaration of Commencement of Business that every newly incorporated company must file within 180 days of incorporation after depositing share subscription money.'
      }
    ]
  },
  {
    id: 'pan-services',
    title: 'PAN Card & Direct Tax Documentation',
    category: 'tax',
    shortDesc: 'New PAN application, demographic corrections, Aadhaar-PAN linking, and fast e-PAN delivery.',
    fullDesc: 'Fast-track PAN card documentation services for individuals, businesses, LLPs, trusts, minors, and NRIs. Includes new PAN allocation (Form 49A/49AA), correction of demographic details, re-issuance of lost cards, and mandatory Aadhaar-PAN linking compliance.',
    iconName: 'CreditCard',
    badge: 'Fast Track • ₹299',
    priceStarting: '₹299',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80',
    features: [
      'New PAN Card Allotment (Form 49A for Citizens / 49AA for NRIs)',
      'PAN Correction (Name, Date of Birth, Father Name, Signature & Photo)',
      'Instant Digital e-PAN PDF Generation in 24 to 48 Hours',
      'Mandatory Aadhaar-PAN Linking Compliance & Inoperative PAN Resolution',
      'Company, Partnership Firm & Trust PAN Application',
      'Doorstep Delivery of Tamper-Proof PVC Plastic Physical Card',
      'Minor PAN to Major PAN Status Upgrade'
    ],
    benefits: [
      'Essential mandatory tax ID for all banking, salary, and investment transactions',
      'Prevent high 20% TDS deduction rates by maintaining an active linked PAN',
      '100% paperless digital verification with instant tracking number',
      'Physical PVC card delivered anywhere in India within 7 to 10 days',
      'Instant digital e-PAN PDF sent directly to your registered email',
      'Direct NSDL / UTIITSL government authorized e-filing channel',
      'Resolution of inoperative PAN status with seamless Aadhaar re-linking',
      'Expert assistance for signature mismatches and photo updates'
    ],
    process: [
      'Step 1: Upload Aadhaar / Address Proof & Identity Documents',
      'Step 2: Form Review & Verification by Tax Documentation Team',
      'Step 3: Submission on NSDL (Protean) / UTIITSL Official Portal',
      'Step 4: Digital e-PAN Delivery via Email within 24–48 Hours',
      'Step 5: Physical PVC Card Dispatched to Residential / Office Address'
    ],
    whyChooseUs: [
      '100% error-free form submission guarantee',
      'Instant tracking acknowledgement number provided immediately',
      'Specialized assistance for complex name change and photo correction cases'
    ],
    faqs: [
      {
        question: 'How fast can I receive my digital e-PAN?',
        answer: 'The digital e-PAN PDF is typically generated and emailed within 24 to 48 hours of successful verification. It is legally valid everywhere.'
      },
      {
        question: 'What happens if my PAN is not linked with Aadhaar?',
        answer: 'Unlinked PAN cards become "Inoperative", which means you cannot file ITR, receive tax refunds, or conduct high-value banking transactions, and TDS is deducted at the maximum rate of 20%.'
      }
    ]
  },
  {
    id: 'tax-consultation',
    title: 'Tax Advisory & Litigation Support',
    category: 'tax',
    shortDesc: 'One-on-one consultation with senior CAs for strategic tax savings, notice resolution, and capital gains.',
    fullDesc: 'Strategic, high-impact tax planning and advisory services for business founders, HNWIs, salaried executives, crypto investors, and NRIs. Receive personalized guidance on tax minimization, income restructuring, capital gains reinvestment, and professional reply drafting for Income Tax & GST department notices.',
    iconName: 'HelpCircle',
    badge: 'Senior CA • ₹1,999',
    priceStarting: '₹1,999/session',
    imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80',
    features: [
      '30/60 Minutes 1-on-1 Phone or Video Consultation with Senior CA',
      'Comprehensive Tax Scrutiny & Section 143(1) / 148 Notice Reply Drafting',
      'Capital Gains Optimization (Section 54, 54EC, 54F Real Estate Reinvestment)',
      'Startup Tax Planning & Section 80-IAC Angel Tax Exemption Advisory',
      'Crypto & Virtual Digital Assets (VDA) 30% Flat Tax & 1% TDS Structuring',
      'NRI Tax Advisory (Double Taxation Avoidance Agreement - DTAA & Form 15CA/CB)',
      'Corporate Restructuring, Mergers & Tax Pass-Through Structuring'
    ],
    benefits: [
      'Legally save up to lakhs in taxes through strategic restructuring',
      'Resolve intimidating tax department notices with ironclad legal replies',
      'Avoid costly audit errors before signing major property or business deals',
      'Confidential and personalized financial advisory tailored to your exact goals',
      'Written action roadmap and tax computation summary after every session',
      'Panel of senior Chartered Accountants and High Court tax advocates',
      'Protection against high penalty assessments and interest compounding',
      'Follow-up verification check included with every consultation booking'
    ],
    process: [
      'Step 1: Book Consultation Slot & Upload Notice / Financial Queries',
      'Step 2: Senior CA Conducts Pre-Consultation File Analysis',
      'Step 3: Live 1-on-1 Strategy Video/Phone Consultation',
      'Step 4: Delivery of Written Action Plan & Notice Reply Drafts',
      'Step 5: Follow-up Portal Upload & Hearing Compliance Tracking'
    ],
    whyChooseUs: [
      'Panel of senior Chartered Accountants with 12+ years experience',
      'Actionable step-by-step solutions rather than vague theoretical advice',
      'Prompt follow-up support post-consultation'
    ],
    faqs: [
      {
        question: 'Can you help me draft a reply to an Income Tax Notice?',
        answer: 'Yes! Our senior CAs review your notice, analyze your filed ITR and 26AS/AIS records, and prepare an ironclad legal reply with supporting documents for upload on the e-filing portal.'
      },
      {
        question: 'How can I save capital gains tax on property sale?',
        answer: 'You can save capital gains tax by reinvesting the net gains into another residential property under Section 54/54F or into designated Capital Gains 54EC bonds (REC, PFC) within statutory time limits. Our CAs will guide you on the exact exemptions.'
      }
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

export const ALL_SERVICES: ServiceItem[] = [
  ...DIGITAL_SERVICES,
  ...FINANCIAL_SERVICES,
  ...TAX_SERVICES,
  ...INSURANCE_SERVICES,
  ...HOSTING_PRODUCTS
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
    id: 'static-onepage-website',
    name: 'Static Onepage Website',
    category: 'website',
    price: '₹4,999',
    billingPeriod: 'one-time',
    description: 'Perfect for local businesses, shops, freelancers, and startups wanting an instant professional digital presence.',
    features: [
      'Single-Page Modern Fluid-Scroll Layout',
      'Hero Banner, About, Services, Gallery & Contact',
      '100% Mobile-Responsive & Fast Loading (<0.5s)',
      'Direct WhatsApp Chat & Click-to-Call Buttons',
      'Lead Capture Form with Instant Email Alerts',
      'Google Maps Location Integration',
      'Free SSL Certificate & Basic On-Page SEO'
    ],
    ctaText: 'Launch for ₹4,999'
  },
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
