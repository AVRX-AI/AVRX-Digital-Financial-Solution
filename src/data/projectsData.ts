import { ProjectItem, ProjectCategory } from '../types/projectTypes';

export const SHOWCASE_CATEGORIES: ProjectCategory[] = [
  'ALL',
  'WEBSITES',
  'E-COMMERCE',
  'CORPORATE',
  'MOBILE APPS',
  'FINTECH',
  'LANDING PAGES',
  'CUSTOM SOFTWARE'
];

export const PROJECTS_DATA: ProjectItem[] = [
  // PROJECT 01: Luxury Real Estate
  {
    id: 'luxury-real-estate',
    title: 'Grand Pinnacle Luxury Residences',
    client: 'Pinnacle Estates & Sovereign Living',
    tagline: 'Ultra-Luxury Waterfront Villas & Penthouse Showcase with 3D Virtual Tours & Concierge Booking',
    category: 'WEBSITES',
    subcategory: 'Luxury Real Estate',
    projectType: 'website',
    platform: 'Web',
    featured: true,
    year: '2025',
    deliveryTime: '18 Days',
    rating: 4.98,
    coverImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
    mockupDesktop: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    thumbnailGradient: 'from-amber-950/80 via-slate-900 to-stone-950',
    accentColor: '#f59e0b',
    description: 'An architectural digital masterpiece designed to capture high-net-worth buyers. Features immersive 4K architectural galleries, dynamic floor-plan filters, mortgage feasibility estimator, and direct VIP private tour scheduling.',
    technologies: ['Next.js 14', 'React 18', 'Tailwind CSS', 'Framer Motion', 'Three.js / WebGL', 'Headless CMS', 'PostgreSQL'],
    serviceTags: ['UI/UX Design', 'Web Development', 'Responsive Design', 'SEO', 'CMS', 'Lead Generation'],
    features: [
      'Interactive Property Filter by BHK, Square Footage & Waterfront View',
      'High-Resolution 4K Architectural Photography & Gallery',
      'Private VIP Showing & Helicopter Tour Scheduler',
      'Live Stamp Duty & Luxury Mortgage Amortization Engine',
      'Integrated WhatsApp Private Concierge & Brochure Downloader',
      'Ultra-Fast 0.4s Global Edge Load Times'
    ],
    metrics: [
      { label: 'High-Intent Leads', value: '+420%', change: 'Qualified HNW Inquiries' },
      { label: 'Avg Session Time', value: '4m 18s', change: 'Interactive Engagement' },
      { label: 'Gross Property Inquiries', value: '₹140 Cr+', change: 'Brochure Downloads' }
    ],
    verifiedBadges: ['4K Media Optimized', 'Zero Layout Shift', '100% Mobile Fluid', 'Ultra-Low Latency'],
    theme: {
      bgDark: '#07090f',
      cardBg: '#0f1422',
      primaryColor: '#f59e0b',
      secondaryColor: '#06b6d4'
    },
    websiteData: {
      navigationItems: ['Residences', 'Penthouses', 'Virtual Tours', 'Amenities', 'Floor Plans', 'Schedule Visit'],
      hero: {
        badge: 'EXCLUSIVE WATERFRONT DEVELOPMENTS',
        title: 'Where Architectural Elegance Meets',
        highlightWord: 'Uncompromising Luxury.',
        subtitle: 'Experience panoramic lakefront penthouses, private infinity pools, and bespoke concierge residences crafted for the world’s discerning few.',
        ctaPrimary: 'Explore Residences',
        ctaSecondary: 'Book Private Tour',
        heroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
        stats: [
          { label: 'Starting Price', value: '₹4.85 Cr' },
          { label: 'Prime Acres', value: '28+ Lush Land' },
          { label: 'Private Residences', value: '42 Limited Units' }
        ]
      },
      aboutSnippet: {
        heading: 'Crafted for Distinction, Privacy & Timeless Value',
        description: 'Every residence is a bespoke collaboration between award-winning international architects and interior designers, marrying raw Italian marble, smart home automation, and floor-to-ceiling double-glazed thermal glass.',
        points: [
          'Direct waterfront frontage with private yacht dock and helipad access',
          'Biometric elevator arriving directly into private penthouse foyers',
          'LEED Platinum certified sustainable cooling and solar micro-grid'
        ],
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80'
      },
      servicesOrProducts: [
        {
          id: 'prop-1',
          title: 'The Sky Penthouse — Triplex Suite',
          category: '5 BHK Ultra-Luxury',
          price: '₹12.50 Cr',
          rating: '5.0',
          badge: 'Signature Collection',
          image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
          desc: '8,400 sq.ft triplex with 360-degree skyline views, private glass infinity pool, 6-car temperature-controlled garage, and dedicated butler quarters.',
          features: ['Private Infinity Pool', '8,400 Sq.Ft Triplex', 'Smart Biometric Access']
        },
        {
          id: 'prop-2',
          title: 'The Waterfront Lake Villa',
          category: '4 BHK Private Estate',
          price: '₹8.20 Cr',
          rating: '4.9',
          badge: 'Waterfront Frontage',
          image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80',
          desc: '5,600 sq.ft independent villa situated on private lakefront with Japanese Zen garden, wine cellar, and automated outdoor entertaining terrace.',
          features: ['Private Boat Dock', 'Japanese Zen Garden', '5,600 Sq.Ft Built-up']
        },
        {
          id: 'prop-3',
          title: 'The Horizon Terrace Suite',
          category: '3 BHK Duplex',
          price: '₹4.85 Cr',
          rating: '4.9',
          badge: 'Panoramic Deck',
          image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80',
          desc: '3,800 sq.ft duplex featuring double-height living ceilings, wraparound sunset terrace, and custom Italian modular kitchen.',
          features: ['Double-Height Ceiling', 'Italian Marble Flooring', 'Sunset Deck']
        }
      ],
      interactiveModule: {
        type: 'property-filter',
        title: 'Interactive Residence Finder & Pricing Matrix',
        description: 'Filter available floor plans by configuration, square footage, and budget.'
      },
      testimonials: [
        {
          name: 'Vikramaditya Singhania',
          role: 'Managing Partner, Singhania Capital',
          comment: 'The website experience reflects the exact luxury our discerning buyers demand. Our private showing inquiries tripled within the first three weeks of launch.',
          rating: 5,
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
        },
        {
          name: 'Elena Rostova',
          role: 'Director of Global Acquisitions',
          comment: 'Flawless performance, cinematic imagery presentation, and seamless lead routing right to our sales directors.',
          rating: 5,
          avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
        }
      ],
      ctaSection: {
        heading: 'Schedule an Exclusive VIP Private Showing',
        subheading: 'Our Senior Portfolio Concierge will curate a private chauffeur tour and champagne reception at the sales lounge.',
        buttonText: 'Request VIP Invitation'
      }
    }
  },

  // PROJECT 02: Fashion E-Commerce
  {
    id: 'fashion-ecommerce',
    title: 'LuxeAura Modern D2C Fashion',
    client: 'LuxeAura Paris & Mumbai',
    tagline: 'High-Converting Luxury Apparel & Lifestyle E-Commerce Storefront with 1-Click Checkout & Dynamic Inventory',
    category: 'E-COMMERCE',
    subcategory: 'Fashion & Apparel',
    projectType: 'e-commerce',
    platform: 'Web',
    featured: true,
    year: '2025',
    deliveryTime: '24 Days',
    rating: 4.96,
    coverImage: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1600&q=85',
    mockupDesktop: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
    thumbnailGradient: 'from-pink-950/80 via-slate-900 to-indigo-950',
    accentColor: '#ec4899',
    description: 'An editorial fashion shopping experience combining Parisian minimalist aesthetics with ultra-fast frictionless cart flows, automated inventory syncing, dynamic coupon application, and multi-currency checkout.',
    technologies: ['React 18', 'Next.js 14', 'Tailwind CSS', 'Shopify Storefront API', 'Stripe & Razorpay', 'Algolia Search', 'Cloudflare Edge'],
    serviceTags: ['UI/UX Design', 'E-Commerce Architecture', 'Cart Optimization', 'Payment Gateway Integration', 'SEO', 'Speed Optimization'],
    features: [
      'Instant 1-Click Interactive Cart Simulator with Promo Code Discount',
      'Dynamic Size & Color Variant Swatches with Real-Time Stock Status',
      'Integrated Multi-Payment Gateway (UPI, Credit/Debit, EMI, Apple Pay)',
      'Algolia Powered Sub-50ms Predictive Product Search',
      'Automated Order Tracking & Return Merchandise Authorization Portal',
      'Sub-0.5s Page Transitions across Mobile & Desktop'
    ],
    metrics: [
      { label: 'Cart Conversion', value: '+310%', change: 'Checkout Completion' },
      { label: 'Cart Abandonment Drop', value: '-42%', change: '1-Click Fast Checkout' },
      { label: 'Orders Processed', value: '18,500+', change: 'First 90 Days' }
    ],
    verifiedBadges: ['Payment Compliant', 'PCI DSS Level 1', 'Instant Cart Sync', 'Mobile-First Touch'],
    theme: {
      bgDark: '#0a0610',
      cardBg: '#150f24',
      primaryColor: '#ec4899',
      secondaryColor: '#8b5cf6'
    },
    websiteData: {
      navigationItems: ['New Arrivals', 'Autumn Atelier', 'Leather Goods', 'Chronographs', 'Sustainability', 'Bag (1)'],
      hero: {
        badge: 'AUTUMN / WINTER 2026 EDITORIAL',
        title: 'Modern Couture Redefined by',
        highlightWord: 'Sculptural Minimalism.',
        subtitle: 'Hand-tailored mulberry silk, structured Italian wool, and ethically sourced full-grain leather crafted for effortless sophistication.',
        ctaPrimary: 'Shop The Collection',
        ctaSecondary: 'View Lookbook',
        heroImage: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1600&q=85',
        stats: [
          { label: 'Artisanal Pieces', value: '120+ Styles' },
          { label: 'Worldwide Shipping', value: '48hr Express' },
          { label: 'Customer Trust', value: '4.9★ (3.4k Reviews)' }
        ]
      },
      aboutSnippet: {
        heading: 'Ethical Craftsmanship Meets Contemporary Silhouettes',
        description: 'Every LuxeAura garment is produced in strictly certified fair-wage ateliers in Milan and Florence, utilizing zero-waste waterless dyes and 100% biodegradable packaging.',
        points: [
          'Certified traceable GOTS organic fibers and recycled metals',
          'Complimentary worldwide climate-neutral courier delivery',
          'Lifetime repair and garment care advisory'
        ],
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80'
      },
      servicesOrProducts: [
        {
          id: 'prod-1',
          title: 'Obsidian Chronograph Automatic Watch',
          category: 'Horology & Timepieces',
          price: '₹14,999',
          rating: '4.9',
          badge: 'Bestseller',
          image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
          desc: 'Sapphire crystal face with Japanese automatic movement, DLC black matte steel case, and interchangeable vegetable-tanned leather strap.',
          features: ['Sapphire Crystal Face', 'Japanese Auto Movement', '100m Water Resistant']
        },
        {
          id: 'prod-2',
          title: 'Aura Structured Cashmere Overcoat',
          category: 'Outerwear',
          price: '₹22,499',
          rating: '5.0',
          badge: 'Limited Run',
          image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80',
          desc: 'Pure Mongolian double-faced cashmere tailored with clean drop shoulders, horn buttons, and cupro silk lining.',
          features: ['100% Mongolian Cashmere', 'Horn Button Closures', 'Tailored Drop Shoulder']
        },
        {
          id: 'prod-3',
          title: 'Milano Sculpted Leather Crossbody',
          category: 'Accessories',
          price: '₹9,899',
          rating: '4.8',
          badge: 'Handcrafted',
          image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80',
          desc: 'Hand-stitched Tuscan calfskin with brushed gold hardware, magnetic flap closure, and dedicated organizer compartments.',
          features: ['Tuscan Full-Grain Leather', 'Brushed Gold Hardware', 'Modular Strap']
        }
      ],
      interactiveModule: {
        type: 'cart',
        title: 'Interactive Live Shopping Bag & Checkout Engine',
        description: 'Test the live cart system: add items, apply promo code "AVRX15" for 15% instant savings, and simulate seamless order completion.'
      },
      testimonials: [
        {
          name: 'Natasha Wadia',
          role: 'Founder, Atelier Wadia',
          comment: 'AVRX delivered a fashion store that feels faster than Zara and more premium than Net-a-Porter. Our checkout conversion shot up by 310% in month one!',
          rating: 5,
          avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
        }
      ],
      ctaSection: {
        heading: 'Elevate Your Digital Brand with AVRX Commerce',
        subheading: 'Launch high-converting D2C and multi-vendor storefronts engineered for scale, lightning speed, and maximum margin.',
        buttonText: 'Build Your E-Commerce Store'
      }
    }
  },

  // PROJECT 03: FinTech Application (Mobile & Cross-Platform)
  {
    id: 'fintech-application',
    title: 'Apex Wealth & FinTech Ecosystem',
    client: 'Apex Capital Partners Ltd.',
    tagline: 'Enterprise Financial Advisory, Instant Loan Eligibility, Biometric KYC & Real-Time Tax Audit Engine',
    category: 'FINTECH',
    subcategory: 'Banking & Lending',
    projectType: 'financial-portal',
    platform: 'Cross-Platform',
    featured: true,
    year: '2025',
    deliveryTime: '21 Days',
    rating: 4.97,
    coverImage: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1600&q=85',
    mockupDesktop: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    mockupMobile: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    thumbnailGradient: 'from-cyan-950/90 via-slate-900 to-blue-950',
    accentColor: '#00f0ff',
    description: 'A bank-grade financial portal and mobile ecosystem featuring real-time EMI calculators, risk scoring, automated loan documentation, paperless KYC, and live compliance tracking.',
    technologies: ['React 18', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Chart.js', 'PostgreSQL', 'AES-256 Encryption'],
    serviceTags: ['FinTech Engineering', 'Banking UI/UX', 'Risk Algorithms', 'Security Compliance', 'API Integration', 'Data Visualization'],
    features: [
      'Interactive Dynamic Loan & EMI Simulator with Monthly Amortization Schedule',
      'Bank-Grade 256-Bit Data Encryption & Biometric Authentication Flow',
      'Real-Time KYC & CIBIL Readiness Checker with Instant Verification Feedback',
      'Automated PDF Quotation & Tax Optimization Calculator',
      'Instant WhatsApp Specialist Connect & Direct Advisory Routing',
      'Zero-Latency High-Concurrency Financial Computation Engine'
    ],
    metrics: [
      { label: 'Lead Conversion', value: '+340%', change: 'MoM Growth' },
      { label: 'Avg Page Load', value: '0.45s', change: '99 Core Web Vitals' },
      { label: 'Processed Volume', value: '₹48 Cr+', change: 'Verified Applications' }
    ],
    verifiedBadges: ['ISO 27001 Ready', '99.99% Uptime', 'Zero-Latency Engine', 'Bank-Grade AES-256'],
    theme: {
      bgDark: '#040814',
      cardBg: '#091024',
      primaryColor: '#00f0ff',
      secondaryColor: '#3b82f6'
    },
    websiteData: {
      navigationItems: ['Home', 'Loan Solutions', 'EMI Calculator', 'Tax Audit', 'Security', 'Apply Now'],
      hero: {
        badge: 'CERTIFIED FINTECH ECOSYSTEM',
        title: 'Smarter Lending, Wealth Growth &',
        highlightWord: 'Financial Clarity.',
        subtitle: 'Empowering over 14,000 businesses & individuals across India with instant eligibility pre-approvals, low-interest funding, and algorithmic tax advisory.',
        ctaPrimary: 'Calculate Eligibility',
        ctaSecondary: 'Explore Loan Products',
        heroImage: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1600&q=85',
        stats: [
          { label: 'Disbursal Rate', value: '98.4%' },
          { label: 'Partner Banks', value: '35+' },
          { label: 'Turnaround Time', value: '< 24 Hours' }
        ]
      },
      aboutSnippet: {
        heading: 'Why Leading Enterprises Choose Apex Financial Portal',
        description: 'Engineered from the ground up for zero-downtime, sub-second loan comparisons, and transparent compliance filing.',
        points: [
          'Direct integration with major banking aggregators and NBFC APIs',
          'Automated income-to-debt ratio optimization models',
          'End-to-end encrypted document lockers with biometric verification'
        ],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80'
      },
      servicesOrProducts: [
        {
          id: 'p-loan',
          title: 'SME Business Expansion Loan',
          category: 'Commercial',
          price: 'Starting 9.25% p.a.',
          rating: '4.9/5',
          desc: 'Collateral-free working capital funding up to ₹1.5 Crore with flexible repayment tenure.',
          badge: 'Fast Disbursal',
          image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
          features: ['No collateral for up to ₹50L', 'Sanction within 24 hours', 'Minimal KYC documentation']
        },
        {
          id: 'p-mortgage',
          title: 'Commercial Property Mortgage',
          category: 'Secured Lending',
          price: 'Starting 8.40% p.a.',
          rating: '4.8/5',
          desc: 'Long-tenure institutional funding for industrial land, retail properties, and offices.',
          badge: 'High Value',
          image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
          features: ['Tenure up to 20 years', 'High loan-to-value ratio', 'Balance transfer benefits']
        }
      ],
      interactiveModule: {
        type: 'calculator',
        title: 'Real-Time Loan EMI & Repayment Calculator',
        description: 'Adjust loan parameters to instantly compute monthly installments and total savings.'
      },
      testimonials: [
        {
          name: 'Rajeev Malhotra',
          role: 'Chief Financial Officer, Delta Matrix Group',
          comment: 'The algorithmic loan comparator and clean interface reduced our loan processing turnaround from 14 days down to 24 hours. Phenomenal engineering by AVRX.',
          rating: 5,
          avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
        }
      ],
      ctaSection: {
        heading: 'Accelerate Your Financial Tech Architecture',
        subheading: 'Let AVRX build your secure, compliant fintech portal or loan distribution platform.',
        buttonText: 'Request FinTech Consultation'
      }
    },
    appScreens: [
      {
        id: 'splash',
        name: '1. Splash & Security',
        subtitle: 'Biometric Handshake',
        iconName: 'ShieldCheck',
        content: {
          heroTitle: 'Apex Wealth Mobile Ecosystem',
          heroSubtitle: 'AES-256 Hardware Enclave Active',
          items: [
            { title: 'Biometric Secure Handshake', desc: 'Hardware Knox & Secure Enclave verified' },
            { title: 'Server Edge Health', desc: 'Zero latency nodes online across Mumbai & Singapore' }
          ],
          actions: [{ label: 'Enter Secure Terminal', primary: true }]
        }
      },
      {
        id: 'dashboard',
        name: '2. Financial Dashboard',
        subtitle: 'Balances & Portfolio',
        iconName: 'PieChart',
        content: {
          heroTitle: 'Total Net Liquid Assets',
          heroSubtitle: '₹ 42,85,400.00 (+14.2% YTD)',
          stats: [
            { label: 'Available Credit', value: '₹ 25.0 Lakhs', change: 'Pre-Approved' },
            { label: 'Active Return', value: '18.4% p.a.', change: '+2.1% Alpha' }
          ],
          items: [
            { title: 'Instant Working Capital Line', desc: '₹15,00,000 ready for instant 1-tap withdrawal', amount: 'Ready', tag: 'Pre-Approved' },
            { title: 'Automated Tax Harvester', desc: 'Saved ₹1,24,000 in short-term capital gains', amount: 'Active', tag: 'AI Engine' }
          ],
          actions: [{ label: 'Transfer Funds' }, { label: 'Apply Loan', primary: true }]
        }
      },
      {
        id: 'kyc',
        name: '3. Paperless e-KYC',
        subtitle: 'Aadhaar & PAN Verification',
        iconName: 'Lock',
        content: {
          heroTitle: 'Instant Paperless e-KYC',
          heroSubtitle: 'Verified with UIDAI & NSDL in under 45 seconds',
          formFields: [
            { label: 'Aadhaar Card Number', placeholder: 'xxxx - xxxx - 8492', type: 'text' },
            { label: 'PAN Card Number', placeholder: 'ABCDE1234F', type: 'text' }
          ],
          actions: [{ label: 'Send OTP Verification', primary: true }]
        }
      },
      {
        id: 'wallet',
        name: '4. Digital Wallet & Cards',
        subtitle: 'Virtual Commercial Cards',
        iconName: 'CreditCard',
        content: {
          heroTitle: 'Apex Platinum Virtual Metal Card',
          heroSubtitle: '•••• •••• •••• 4092 (Exp 08/29)',
          stats: [
            { label: 'Monthly Spend Limit', value: '₹ 10,00,000' },
            { label: 'Cashback Earned', value: '₹ 38,450' }
          ],
          items: [
            { title: 'Google Workspace Cloud Bill', desc: 'Paid via auto-debit', amount: '- ₹14,200', tag: 'SaaS' },
            { title: 'Amazon AWS Infrastructure', desc: 'Corporate card billing', amount: '- ₹48,900', tag: 'Server' }
          ]
        }
      }
    ]
  },

  // PROJECT 04: Corporate Business
  {
    id: 'corporate-business',
    title: 'Vanguard Global Infrastructure',
    client: 'Vanguard Infrastructure Group Ltd.',
    tagline: 'Enterprise Corporate Presence, Investor Relations Hub & Sustainability ESG Tracker',
    category: 'CORPORATE',
    subcategory: 'Infrastructure & Energy',
    projectType: 'corporate',
    platform: 'Web',
    featured: false,
    year: '2025',
    deliveryTime: '15 Days',
    rating: 4.95,
    coverImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85',
    mockupDesktop: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    thumbnailGradient: 'from-slate-900 via-indigo-950 to-slate-950',
    accentColor: '#6366f1',
    description: 'A commanding enterprise portal designed for an institutional infrastructure titan. Features real-time stock and ESG metrics, interactive global project map, annual report document vault, and executive media center.',
    technologies: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Sanity CMS', 'D3.js Data Maps'],
    serviceTags: ['Corporate Identity', 'Investor Relations UX', 'ESG Data Visualization', 'Enterprise Security', 'Performance Tuning'],
    features: [
      'Interactive Global Infrastructure Project Map & Case Studies',
      'Real-Time Investor Relations Document Repository & PDF Downloader',
      'ESG Environmental & Carbon Offset Interactive Metric Dashboard',
      'Multi-Tier Role-Based Media Kit & Press Center',
      'GDPR & Compliance Audited Architecture'
    ],
    metrics: [
      { label: 'Institutional Inquiries', value: '+280%', change: 'Quarterly Growth' },
      { label: 'Annual Report Downloads', value: '45,000+', change: 'PDF Downloads' },
      { label: 'Global Page Performance', value: '99/100', change: 'Lighthouse Score' }
    ],
    verifiedBadges: ['Enterprise SLA', 'SOC-2 Ready', 'Zero Zero-Day Vulnerability', 'Global CDN'],
    theme: {
      bgDark: '#030712',
      cardBg: '#0b1120',
      primaryColor: '#6366f1',
      secondaryColor: '#38bdf8'
    },
    websiteData: {
      navigationItems: ['About Vanguard', 'Sectors', 'Global Projects', 'ESG Impact', 'Investor Hub', 'Contact'],
      hero: {
        badge: 'POWERING GLOBAL RESILIENCE',
        title: 'Building Tomorrow’s Sustainable',
        highlightWord: 'Mega-Infrastructure.',
        subtitle: 'Deploying over $4.2 Billion in clean energy grids, deep-sea smart logistics ports, and hyper-connected urban transit hubs across 14 nations.',
        ctaPrimary: 'Explore Projects',
        ctaSecondary: 'Investor Relations',
        heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85',
        stats: [
          { label: 'Capital Deployed', value: '$4.2 Billion' },
          { label: 'Mega Projects', value: '68 Completed' },
          { label: 'Clean Energy Generated', value: '2.4 GW' }
        ]
      },
      aboutSnippet: {
        heading: 'Pioneering Clean Transition & Resilient Civil Engineering',
        description: 'Vanguard unites institutional capital with cutting-edge engineering to build critical national assets that withstand climate change and empower emerging economies.',
        points: [
          'Ranked Top 5 globally for ESG transparent infrastructure governance',
          'Zero workplace fatalities recorded over 12 million engineering hours',
          'Proprietary AI predictive maintenance deployed across all power assets'
        ],
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80'
      },
      servicesOrProducts: [
        {
          id: 'corp-1',
          title: 'Offshore Wind & Renewable Microgrids',
          category: 'Clean Energy',
          price: '850 MW Capacity',
          rating: '5.0',
          badge: 'Zero Emission',
          image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80',
          desc: 'High-yield offshore turbine arrays delivering green power to over 1.2 million homes with smart undersea battery storage.',
          features: ['850 MW Grid Output', 'Subsea Cable Routing', 'AI Load Balancing']
        },
        {
          id: 'corp-2',
          title: 'Automated High-Speed Rail Corridors',
          category: 'Smart Transit',
          price: '420 KM Network',
          rating: '4.9',
          badge: 'High Velocity',
          image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=800&q=80',
          desc: 'Electrified magnetic levitation and standard gauge rapid transit connecting industrial clusters with zero carbon footprint.',
          features: ['320 km/h Transit Speed', '100% Solar Powered Stations', 'IoT Track Telemetry']
        }
      ],
      interactiveModule: {
        type: 'compliance-audit',
        title: 'Interactive ESG Carbon Offset & Sustainability Model',
        description: 'Explore Vanguard’s verified carbon offset data and real-time metric projections.'
      },
      testimonials: [
        {
          name: 'Sir Arthur Sterling',
          role: 'Chairman, Global Infrastructure Council',
          comment: 'The digital transformation crafted by AVRX represents the gold standard of corporate and institutional communications in our sector.',
          rating: 5,
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
        }
      ],
      ctaSection: {
        heading: 'Partner on Landmark Global Initiatives',
        subheading: 'Connect with our institutional project finance and engineering directors.',
        buttonText: 'Initiate Corporate Dialog'
      }
    }
  },

  // PROJECT 05: Restaurant & Food
  {
    id: 'restaurant-food',
    title: 'Saffron & Sage Fine Dining',
    client: 'Saffron & Sage Culinary Hospitality',
    tagline: 'Michelin-Caliber Culinary Showcase, Degustation Menu Explorer & Live VIP Table Reservation Engine',
    category: 'WEBSITES',
    subcategory: 'Hospitality & Dining',
    projectType: 'website',
    platform: 'Web',
    featured: false,
    year: '2025',
    deliveryTime: '12 Days',
    rating: 4.99,
    coverImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=85',
    mockupDesktop: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
    thumbnailGradient: 'from-amber-950/90 via-slate-900 to-red-950',
    accentColor: '#d97706',
    description: 'An evocative, sensory digital showcase designed for a modern culinary destination. Features interactive 7-course tasting menu reveals, wine pairing advisory, and 1-click real-time table booking with SMS confirmations.',
    technologies: ['React 18', 'Tailwind CSS', 'Framer Motion', 'Resy API', 'Twilio SMS', 'Web Audio API'],
    serviceTags: ['Luxury UI/UX', 'Reservation System', 'Food Photography Art Direction', 'Mobile Fast Booking', 'Local SEO'],
    features: [
      'Live Table Reservation Simulator with Seating Selection (Terrace, Chef Counter, Dining Hall)',
      'Sensory Degustation Menu Explorer with Sommelier Wine Pairings',
      'Instant WhatsApp & SMS Booking Confirmation Engine',
      'Curated Chef’s Philosophy & Organic Farm Sourcing Journey',
      'Dynamic Event & Private Dining Inquiries Flow'
    ],
    metrics: [
      { label: 'Direct Table Bookings', value: '+460%', change: 'Zero Commission Third-Party' },
      { label: 'Weekend Fill Rate', value: '100%', change: '4 Weeks in Advance' },
      { label: 'Average Cover Value', value: '₹5,200', change: 'Tasting Menu Uptake' }
    ],
    verifiedBadges: ['Zero Booking Commission', '100% Mobile Frictionless', 'Instant SMS Confirm', 'SEO Rank #1'],
    theme: {
      bgDark: '#0a0705',
      cardBg: '#18110a',
      primaryColor: '#d97706',
      secondaryColor: '#f59e0b'
    },
    websiteData: {
      navigationItems: ['Our Story', 'Degustation Menu', 'Sommelier Cellar', 'Reserve Table', 'Private Dining', 'Contact'],
      hero: {
        badge: 'MICHELIN GUIDE SELECTED 2026',
        title: 'Modern Coastal Flavors Meet',
        highlightWord: 'Heritage Alchemy.',
        subtitle: 'A sensory culinary journey guided by Chef Ranveer Oberoi, highlighting wild-foraged botanicals, coastal seafood, and wood-fired mastery.',
        ctaPrimary: 'Reserve A Table',
        ctaSecondary: 'View Tasting Menu',
        heroImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=85',
        stats: [
          { label: 'Course Experience', value: '9-Course Tasting' },
          { label: 'Cellar Selection', value: '380+ Vintage Labels' },
          { label: 'Farm Traceability', value: '100% Organic & Local' }
        ]
      },
      aboutSnippet: {
        heading: 'Honoring Wild Terroir & Slow Culinary Artistry',
        description: 'Every ingredient on your plate has an unbroken lineage — from heirloom grains grown by smallholder farmers in the Himalayan foothills to line-caught daily seafood from the Konkan coast.',
        points: [
          'Zero single-use plastics or commercial preservatives across our kitchen',
          'Private 12-seat Chef’s counter with bespoke culinary theater',
          'Dedicated non-alcoholic botanical fermentation pairings'
        ],
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80'
      },
      servicesOrProducts: [
        {
          id: 'menu-1',
          title: 'The Sovereign 9-Course Degustation Menu',
          category: 'Chef Special',
          price: '₹4,950 / guest',
          rating: '5.0',
          badge: 'Signature',
          image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
          desc: 'Smoked Konkan crab, wood-roasted heirloom beetroot carpaccio, slow-braised duck in fermented black garlic, and saffron infused kulfi gelato.',
          features: ['9 Seasonal Courses', 'Optional Wine Flight', 'Chef Ranveer Oberoi Special']
        },
        {
          id: 'menu-2',
          title: 'Himalayan Truffle & Morel Polenta',
          category: 'A La Carte',
          price: '₹1,850',
          rating: '4.9',
          badge: 'Seasonal Forage',
          image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
          desc: 'Stoneground organic polenta folded with 24-month aged parmesan cream, wild Himalayan morels, and shaved fresh black truffle.',
          features: ['Wild Himalayan Forage', 'Aged 24-Month Parmesan', 'Gluten-Free']
        }
      ],
      interactiveModule: {
        type: 'booking',
        title: 'Interactive Live VIP Table Reservation Engine',
        description: 'Select your preferred date, guest party size, and seating area for immediate table confirmation.'
      },
      testimonials: [
        {
          name: 'Chef Ranveer Oberoi',
          role: 'Executive Chef & Co-Owner',
          comment: 'AVRX gave our restaurant a digital soul. Guests constantly praise how easy and elegant it is to reserve tables directly from their phones without painful third-party apps.',
          rating: 5,
          avatar: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=200&q=80'
        }
      ],
      ctaSection: {
        heading: 'Create an Unforgettable Evening of Taste',
        subheading: 'Book your table online in under 30 seconds with immediate confirmation.',
        buttonText: 'Reserve Your Experience Now'
      }
    }
  },

  // PROJECT 06: Healthcare & MedTech
  {
    id: 'healthcare-medtech',
    title: 'ApexHealth Pro Telemedicine',
    client: 'ApexHealth Healthcare Networks',
    tagline: 'Modern Digital Hospital, Specialist Doctor Tele-Consultation & Encrypted Electronic Health Records (EHR)',
    category: 'WEBSITES',
    subcategory: 'Healthcare & MedTech',
    projectType: 'website',
    platform: 'Web',
    featured: false,
    year: '2025',
    deliveryTime: '20 Days',
    rating: 4.97,
    coverImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=85',
    mockupDesktop: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1200&q=80',
    thumbnailGradient: 'from-teal-950/90 via-slate-900 to-cyan-950',
    accentColor: '#14b8a6',
    description: 'A compassionate, HIPAA and NABH compliant medical ecosystem connecting patients with top specialists. Features instant video consult booking, automated digital prescriptions, vital tracker, and lab test delivery.',
    technologies: ['React 18', 'TypeScript', 'Tailwind CSS', 'WebRTC Video', 'FHIR / HL7 Standards', 'HIPAA Enclave'],
    serviceTags: ['Healthcare UI/UX', 'Telemedicine Engine', 'HIPAA Compliance', 'Doctor Scheduling', 'Patient Portal'],
    features: [
      'Interactive Specialist Doctor Booking Simulator by Department & Symptoms',
      'Secure End-to-End Encrypted WebRTC Video Consultation Room',
      'Electronic Health Records (EHR) & Digital Prescription Vault',
      'Instant Home Diagnostic Sample Collection Scheduler',
      '24/7 AI Health Symptom Triaging Assistant'
    ],
    metrics: [
      { label: 'Patient Consultations', value: '62,000+', change: 'Completed Safely' },
      { label: 'Wait Time Reduction', value: '-75%', change: 'Digital Queueing' },
      { label: 'Patient Satisfaction', value: '4.95 / 5', change: 'Verified Reviews' }
    ],
    verifiedBadges: ['HIPAA Compliant', 'NABH Standards', '256-Bit Video Encryption', 'Zero Health Data Leak'],
    theme: {
      bgDark: '#030c0e',
      cardBg: '#081a1c',
      primaryColor: '#14b8a6',
      secondaryColor: '#06b6d4'
    },
    websiteData: {
      navigationItems: ['Find Doctors', 'Specialties', 'Book Tele-Consult', 'Health Packages', 'Lab Tests', 'Patient Portal'],
      hero: {
        badge: 'NABH & HIPAA ACCREDITED HEALTHCARE',
        title: 'World-Class Medical Care,',
        highlightWord: 'Delivered Instantly.',
        subtitle: 'Connect with India’s leading super-specialists across Cardiology, Oncology, Neurology, and Paediatrics in under 15 minutes via HD encrypted video.',
        ctaPrimary: 'Book Consultation',
        ctaSecondary: 'Browse Specialists',
        heroImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=85',
        stats: [
          { label: 'Super Specialists', value: '450+ Doctors' },
          { label: 'Average Connect Time', value: '< 10 Minutes' },
          { label: 'NABH Hospital Partners', value: '28 Centers' }
        ]
      },
      aboutSnippet: {
        heading: 'Clinical Excellence Backed by Modern Medical Intelligence',
        description: 'We believe exceptional medical care should be accessible without stressful waiting rooms, opaque pricing, or delayed test reports.',
        points: [
          'Direct integration with smart wearables and home vitals monitors',
          'Automated digital prescription delivery right to your pharmacy',
          'Multilingual consultation in English, Hindi, and regional languages'
        ],
        image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1000&q=80'
      },
      servicesOrProducts: [
        {
          id: 'doc-1',
          title: 'Dr. Ananya Sengupta, MD, DM',
          category: 'Interventional Cardiology',
          price: '₹1,200 / Video Consult',
          rating: '4.9',
          badge: 'Senior Director',
          image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',
          desc: '18+ years experience in preventive cardiology, hypertension reversal, and post-angioplasty care. AIIMS New Delhi Alumna.',
          features: ['18+ Years Experience', 'AIIMS New Delhi Alumna', 'Next Slot in 20 Mins']
        },
        {
          id: 'doc-2',
          title: 'Dr. Rohan Mehra, MD (Peds)',
          category: 'Paediatric Pulmonology',
          price: '₹950 / Video Consult',
          rating: '5.0',
          badge: 'Top Rated',
          image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80',
          desc: 'Specialized in childhood asthma management, neonatal nutrition, and seasonal respiratory illness treatment.',
          features: ['Child-Friendly Care', 'Neonatal Specialist', 'Available 24/7']
        }
      ],
      interactiveModule: {
        type: 'doctor-booking',
        title: 'Interactive Specialist Appointment Scheduler',
        description: 'Choose your medical specialty and test the instant doctor booking and time-slot allocator.'
      },
      testimonials: [
        {
          name: 'Dr. Ananya Sengupta',
          role: 'Head of Clinical Informatics',
          comment: 'The patient onboarding flow built by AVRX is flawless. Elderly patients book video consults effortlessly, and our electronic health records stay 100% compliant.',
          rating: 5,
          avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=200&q=80'
        }
      ],
      ctaSection: {
        heading: 'Transform Your Healthcare Practice with AVRX HealthTech',
        subheading: 'Launch patient portals, telemedicine apps, and hospital management software designed for care and compliance.',
        buttonText: 'Build Your HealthTech Solution'
      }
    }
  },

  // PROJECT 07: Custom Software & ERP
  {
    id: 'custom-software-erp',
    title: 'BizMatrix Cloud ERP & Multi-Warehouse Hub',
    client: 'BizMatrix Enterprise Solutions',
    tagline: 'Multi-Branch Inventory Synchronization, Automated GST Invoicing & Supply-Chain Intelligence Platform',
    category: 'CUSTOM SOFTWARE',
    subcategory: 'Enterprise SaaS & ERP',
    projectType: 'custom-software',
    platform: 'Cloud SaaS',
    featured: false,
    year: '2025',
    deliveryTime: '28 Days',
    rating: 4.96,
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=85',
    mockupDesktop: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    thumbnailGradient: 'from-purple-950/90 via-slate-900 to-indigo-950',
    accentColor: '#a855f7',
    description: 'A heavy-duty, distributed cloud software platform unifying manufacturing, procurement, multi-warehouse stock management, automated GST e-Invoicing, and AI stock forecasting.',
    technologies: ['React 18', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis Cache', 'Docker', 'AWS ECS', 'Tailwind CSS'],
    serviceTags: ['Custom Software Architecture', 'Database Engineering', 'GST Automation', 'Role-Based Access Control', 'Multi-Warehouse Sync'],
    features: [
      'Live Multi-Warehouse Inventory Telemetry & Low-Stock Alerts',
      'Automated 1-Click GST e-Way Bill & B2B Tax Invoice Generation',
      'Role-Based Granular Access Control (Warehouse, Accountant, Executive)',
      'Automated Purchase Order Creation & Vendor Portal',
      'Real-Time Consolidated P&L and Margin Analytics'
    ],
    metrics: [
      { label: 'Inventory Leakage Cut', value: '-94%', change: 'Real-Time Barcode Audit' },
      { label: 'Invoicing Speed', value: '3.2s', change: 'Direct GST Portal API' },
      { label: 'Daily SKU Operations', value: '450,000+', change: 'Sub-10ms Database Query' }
    ],
    verifiedBadges: ['99.99% Cloud SLA', 'Automated Daily Backup', 'GST E-Invoice Certified', 'High Concurrency'],
    theme: {
      bgDark: '#080512',
      cardBg: '#120b24',
      primaryColor: '#a855f7',
      secondaryColor: '#3b82f6'
    },
    websiteData: {
      navigationItems: ['ERP Modules', 'Supply Chain', 'GST Automation', 'Warehouse Telemetry', 'Pricing', 'Book Demo'],
      hero: {
        badge: 'ENTERPRISE ERP & SUPPLY CHAIN SUITE',
        title: 'Run Multi-Location Business With',
        highlightWord: 'Absolute Precision.',
        subtitle: 'Unify 20+ warehouses, retail outlets, accounting ledgers, and logistics fleets on one ultra-fast, zero-headache cloud software platform.',
        ctaPrimary: 'Schedule Live Demo',
        ctaSecondary: 'View ERP Modules',
        heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=85',
        stats: [
          { label: 'Warehouses Managed', value: '240+ Locations' },
          { label: 'Daily Invoices', value: '80,000+ Generated' },
          { label: 'Accounting Accuracy', value: '99.99%' }
        ]
      },
      aboutSnippet: {
        heading: 'Engineered for Heavy Industrial & Retail Workloads',
        description: 'Say goodbye to sluggish legacy software and spreadsheet chaos. BizMatrix executes complex stock transfers and GST filings at sub-second speeds.',
        points: [
          'Offline-first point of sale sync with automatic cloud reconciliation',
          'Direct integration with Tally, SAP, Zoho, and banking payment rails',
          'Customizable workflow builders with zero code required'
        ],
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80'
      },
      servicesOrProducts: [
        {
          id: 'erp-1',
          title: 'Multi-Warehouse Inventory & Dispatch Module',
          category: 'Supply Chain',
          price: 'Starting ₹14,999/mo',
          rating: '4.9',
          badge: 'Core Engine',
          image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
          desc: 'Barcode scanning, bin-location optimization, batch expiry tracking, and inter-branch transit manifests.',
          features: ['Barcode Scanner Support', 'Batch & Expiry Telemetry', 'Auto PO Reorders']
        },
        {
          id: 'erp-2',
          title: 'Automated GST & Financial Accounting Engine',
          category: 'Compliance',
          price: 'Starting ₹9,999/mo',
          rating: '5.0',
          badge: 'Zero-Error Filing',
          image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
          desc: 'Instant GSTR-1, GSTR-3B reconciliation, automated input tax credit (ITC) matching, and direct e-Way bill generation.',
          features: ['1-Click e-Way Bill', 'Automated 2B Matching', 'Multi-Company Ledgers']
        }
      ],
      interactiveModule: {
        type: 'compliance-audit',
        title: 'Interactive Multi-Branch Inventory Telemetry Simulator',
        description: 'Test live warehouse stock level adjustments, transfer workflows, and automated GST reconciliation.'
      },
      testimonials: [
        {
          name: 'Harshvardhan Singhal',
          role: 'Managing Director, Apex Logistics & Wholesale',
          comment: 'AVRX custom-engineered our entire cloud ERP from scratch. It eliminated 12 hours of manual ledger work every day and paid for itself in 60 days.',
          rating: 5,
          avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
        }
      ],
      ctaSection: {
        heading: 'Ready for Custom Software Engineered for Your Exact Workflow?',
        subheading: 'Stop forcing your business into rigid generic software. We engineer tailor-made ERPs and portals.',
        buttonText: 'Consult Our Software Architects'
      }
    }
  },

  // PROJECT 08: High-Converting Landing Page
  {
    id: 'growth-landing-page',
    title: 'ScaleOps B2B Growth Engine',
    client: 'ScaleOps AI & Cloud Automation',
    tagline: 'High-Impact Performance Landing Page, Interactive ROI Simulator & Accelerated B2B Lead Funnel',
    category: 'LANDING PAGES',
    subcategory: 'SaaS & B2B Funnels',
    projectType: 'landing-page',
    platform: 'Web',
    featured: false,
    year: '2025',
    deliveryTime: '7 Days',
    rating: 4.98,
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=85',
    mockupDesktop: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    thumbnailGradient: 'from-blue-950/90 via-slate-900 to-cyan-950',
    accentColor: '#38bdf8',
    description: 'A conversion-engineered standalone landing page designed to turn paid media traffic into booked executive enterprise demos. Features interactive ROI calculators, social proof wall, and friction-free multi-step qualification.',
    technologies: ['Next.js 14', 'React 18', 'Tailwind CSS', 'Framer Motion', 'HubSpot & Salesforce API', 'PostHog Analytics'],
    serviceTags: ['Landing Page Design', 'Conversion Rate Optimization (CRO)', 'A/B Testing', 'Copywriting', 'Lead Routing'],
    features: [
      'Interactive Cloud Cost Savings & ROI Simulator',
      'Frictionless 2-Step Interactive Qualification Form',
      'Dynamic Enterprise Social Proof & Logo Marquee',
      'Sub-400ms First Contentful Paint (FCP) for Lower Ad CPA',
      'Direct HubSpot & Google Ads Conversion Pixel Integration'
    ],
    metrics: [
      { label: 'Demo Bookings Rate', value: '14.8%', change: 'Industry Benchmark 2.4%' },
      { label: 'Customer CPA Reduction', value: '-52%', change: 'Ad Spend Efficiency' },
      { label: 'Lighthouse Performance', value: '100/100', change: 'Instant Mobile Load' }
    ],
    verifiedBadges: ['100 Lighthouse Score', 'Sub-400ms Paint', 'High-Yield CRO', 'Pixel Ready'],
    theme: {
      bgDark: '#030814',
      cardBg: '#081226',
      primaryColor: '#38bdf8',
      secondaryColor: '#00f0ff'
    },
    websiteData: {
      navigationItems: ['Features', 'ROI Calculator', 'Case Studies', 'Pricing', 'Book 15-Min Demo'],
      hero: {
        badge: 'AUTONOMOUS CLOUD INFRASTRUCTURE',
        title: 'Cut AWS & Cloud Spend by 40%',
        highlightWord: 'Without Breaking Code.',
        subtitle: 'ScaleOps automatically tunes Kubernetes clusters, right-sizes memory leaks, and eliminates idle cloud compute in real-time.',
        ctaPrimary: 'Calculate Cloud Savings',
        ctaSecondary: 'Watch 2-Min Product Tour',
        heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=85',
        stats: [
          { label: 'Avg Cloud Savings', value: '42.4%' },
          { label: 'Setup Time', value: '< 15 Minutes' },
          { label: 'Engineering Hours Saved', value: '120 hrs/mo' }
        ]
      },
      aboutSnippet: {
        heading: 'Engineered for CTOs and DevOps Leaders Tired of Cloud Waste',
        description: 'Zero code modifications required. Attach our read-only telemetry agent and watch your compute bills plummet immediately.',
        points: [
          'SOC-2 Type II Certified read-only agent architecture',
          'Instant rollback and zero-downtime safety guarantee',
          'Direct integration with Datadog, Slack, and PagerDuty'
        ],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80'
      },
      servicesOrProducts: [
        {
          id: 'tier-1',
          title: 'Growth SaaS Infrastructure Plan',
          category: 'Cloud Plan',
          price: '₹19,999 / mo',
          rating: '5.0',
          badge: 'Most Popular',
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
          desc: 'Autonomous container autoscaling, spot instance orchestration, and 24/7 Slack alerts for up to 50 cloud servers.',
          features: ['Autopilot Tuning', 'Spot Orchestrator', '24/7 Slack Support']
        }
      ],
      interactiveModule: {
        type: 'calculator',
        title: 'Interactive Cloud Savings & ROI Calculator',
        description: 'Input your monthly cloud budget to instantly calculate your annual cost reduction.'
      },
      testimonials: [
        {
          name: 'Aditya Srivastava',
          role: 'VP of Engineering, CloudSpire Tech',
          comment: 'This landing page converted cold LinkedIn traffic into 42 enterprise demos in our very first week. AVRX understands the science of high-conversion design.',
          rating: 5,
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
        }
      ],
      ctaSection: {
        heading: 'Need a High-Converting Landing Page for Your Campaign?',
        subheading: 'Stop losing ad clicks to slow, generic landing pages. We build pages that convert.',
        buttonText: 'Launch Your High-ROI Page'
      }
    }
  }
];
