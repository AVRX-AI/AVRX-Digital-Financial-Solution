import React, { useState } from 'react';
import { 
  Megaphone, 
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
  Search,
  Target,
  BarChart2,
  DollarSign,
  MousePointerClick,
  Users2,
  PieChart,
  RefreshCw,
  Eye,
  Rocket,
  Filter,
  CheckSquare,
  Square,
  Percent,
  Play
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { submitLeadForm } from '../utils/formSubmit';
import { SubmissionFeedbackModal } from '../components/common/SubmissionFeedbackModal';
import { launchSoundEngine } from '../utils/launchSoundEngine';

interface DigitalMarketingPageProps {
  onNavigate: (page: string, slug?: string) => void;
}

export const DigitalMarketingPage: React.FC<DigitalMarketingPageProps> = ({ onNavigate }) => {
  // Navigation helper
  const handleNav = (targetPage: string, slug?: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    onNavigate(targetPage, slug);
  };

  // State management
  const [activeTab, setActiveTab] = useState<'all' | 'meta-ads' | 'google-ads' | 'funnels' | 'b2b-linkedin' | 'retention'>('all');
  const [activeFaq, setActiveFaq] = useState<number | null>(1);
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [simulatedNiche, setSimulatedNiche] = useState<'d2c' | 'realestate' | 'clinic' | 'saas'>('d2c');

  // AI Ad Copy & Hook Generator State
  const [industryInput, setIndustryInput] = useState('D2C E-Commerce & Fashion Brand');
  const [campaignGoalInput, setCampaignGoalInput] = useState('Direct Purchases & ROAS Scaling');
  const [targetAudienceInput, setTargetAudienceInput] = useState('Women aged 22-45 across Tier 1 & Tier 2 Indian cities');
  const [uniqueOfferInput, setUniqueOfferInput] = useState('Flat 30% Off First Order + Free Shipping & Cash on Delivery');
  const [isGeneratingCopy, setIsGeneratingCopy] = useState(false);
  const [generatedAdCopy, setGeneratedAdCopy] = useState<any>(null);

  // ROAS & Ad Spend ROI Calculator State
  const [monthlyAdSpend, setMonthlyAdSpend] = useState(50000);
  const [targetCpl, setTargetCpl] = useState(120);
  const [avgTicketSize, setAvgTicketSize] = useState(2499);
  const [closeRate, setCloseRate] = useState(15);

  // Lead Modal & Direct Form State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalFormPlan, setModalFormPlan] = useState('Scale Accelerator Retainer (₹24,999/mo)');
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
    marketingGoal: 'Meta + Google Performance Ads',
    monthlyBudget: '₹30,000 - ₹1,00,000/mo',
    details: ''
  });

  // Marketing Platforms & Ad Networks Marquee
  const adPlatforms = [
    { name: 'Meta Ads', tag: 'FB & Instagram', icon: '♾️' },
    { name: 'Google Search Ads', tag: 'High-Intent PPC', icon: '🔍' },
    { name: 'Performance Max', tag: 'Google PMax', icon: '🎯' },
    { name: 'YouTube Video Ads', tag: 'Brand & Scale', icon: '▶️' },
    { name: 'LinkedIn B2B Ads', tag: 'Enterprise Leads', icon: '💼' },
    { name: 'WhatsApp Business API', tag: 'Instant Conversion', icon: '💬' },
    { name: 'Meta Pixel & CAPI', tag: 'Server-Side Tracking', icon: '⚡' },
    { name: 'Google Analytics 4', tag: 'Event Telemetry', icon: '📊' },
    { name: 'HubSpot & CRM', tag: 'Lead Routing', icon: '🧲' },
    { name: 'Klaviyo Email / SMS', tag: 'LTV & Retention', icon: '✉️' },
    { name: 'Semrush & SpyFu', tag: 'Competitor Intelligence', icon: '📈' },
    { name: 'Hotjar', tag: 'Conversion Heatmaps', icon: '🔥' }
  ];

  // 10 High-Growth Campaign Case Studies
  const caseStudies = [
    {
      title: 'D2C Sustainable Footwear: 5.4x ROAS Scaling',
      tagline: 'Scaled Monthly Revenue from ₹3.5 Lakhs to ₹32 Lakhs in 90 Days',
      niche: 'D2C E-Commerce',
      channels: 'Meta Ads (Advantage+) + Google PMax + WhatsApp Abandoned Cart',
      duration: '90 Days',
      badge: '5.4x ROAS',
      accentColor: 'from-rose-500 to-pink-600',
      highlights: [
        'High-converting UGC video creatives achieving 3.8% Click-Through Rate (CTR)',
        'Server-Side Meta Conversions API (CAPI) restoring 100% iOS 14+ tracking',
        'Custom 1-Click WhatsApp flash sale recovery recovering 31% abandoned carts',
        'Targeted dynamic catalog retargeting at 8.2x return on ad spend'
      ],
      metrics: {
        roas: '5.4x Blended ROAS',
        cpa: '₹280 Cost Per Acquisition',
        revenue: '₹32+ Lakhs/mo'
      }
    },
    {
      title: 'Luxury 3BHK Real Estate: ₹3.8 Cr Sales Booked',
      tagline: 'Generated 420 High-Net-Worth Buyer Leads with 68 Site Visits',
      niche: 'Real Estate & Luxury Housing',
      channels: 'Google High-Intent Search + Meta Lead Generation + WhatsApp Routing',
      duration: '45 Days',
      badge: 'High Ticket',
      accentColor: 'from-amber-500 to-orange-600',
      highlights: [
        'Laser-targeted Google Search for high-intent queries ("luxury 3bhk in Gurgaon")',
        'Interactive 3D Virtual Tour landing page with 24% conversion rate',
        'Instant WhatsApp lead alert to sales agents within 15 seconds of submission',
        'Zero junk leads through two-step OTP mobile number verification'
      ],
      metrics: {
        roas: '₹140 Cost Per Lead',
        cpa: '68 Site Visits Booked',
        revenue: '₹3.8 Cr Inventory Sold'
      }
    },
    {
      title: 'B2B Manufacturing Tech: 450+ High-Ticket Inquiries',
      tagline: 'LinkedIn InMail & Google Search Campaign Driving Pan-India Factory Deals',
      niche: 'B2B Industrial Tech',
      channels: 'LinkedIn Sponsored Content + Google B2B Search',
      duration: '60 Days',
      badge: 'B2B Enterprise',
      accentColor: 'from-blue-600 to-indigo-700',
      highlights: [
        'Targeting Chief Procurement Officers & Plant Heads across industrial hubs',
        'Case study & ROI calculator lead magnets driving 42% download rate',
        'Automated CRM webhook piping hot leads directly into sales rep calendars',
        'Account-Based Marketing (ABM) lists for top 500 manufacturing corporations'
      ],
      metrics: {
        roas: '450+ Inquiries',
        cpa: '38% Demo Conversion',
        revenue: '₹1.8 Cr Pipeline'
      }
    },
    {
      title: 'Multispeciality Dental & IVF Clinic: 180+ Consultations',
      tagline: 'Hyperlocal Google Maps & Meta Ads Generating Daily Patient Bookings',
      niche: 'Healthcare & Clinics',
      channels: 'Google Local Service Ads + Instagram Video Reels + WhatsApp Bot',
      duration: '30 Days',
      badge: 'Healthcare',
      accentColor: 'from-emerald-500 to-teal-600',
      highlights: [
        'Local radius targeting within 10 km of clinic locations',
        'Doctor video testimonials explaining treatments, building immense trust',
        'Direct 1-Click WhatsApp booking bot confirming appointment slots instantly',
        'Automated SMS appointment reminders reducing patient no-shows by 78%'
      ],
      metrics: {
        roas: '180+ Bookings/mo',
        cpa: '₹95 Cost Per Patient',
        revenue: '12x Clinic ROI'
      }
    },
    {
      title: 'EdTech UPSC & IIT Coaching: ₹18 Cost Per Lead',
      tagline: '12,000+ Webinar Registrations via Instagram Reels & Meta Instant Forms',
      niche: 'Education & EdTech',
      channels: 'Meta Reels Ads + YouTube Non-Skippable + Instant WhatsApp PDF',
      duration: '21 Days',
      badge: 'High Volume',
      accentColor: 'from-purple-500 to-indigo-600',
      highlights: [
        'Free previous 10-year question bank PDF hook generating massive viral shares',
        'Sub-second Meta Instant Form submissions integrated with automated email drip',
        'Live webinar attendance boost via automated WhatsApp voice broadcasts',
        'Course admissions conversion rate surging by 4.2x'
      ],
      metrics: {
        roas: '12,000+ Leads',
        cpa: '₹18 CPL',
        revenue: '₹48 Lakhs Batch Sales'
      }
    },
    {
      title: 'Cloud Kitchen & Food Brand: 3,500+ App Orders',
      tagline: 'Hyperlocal Instagram Food Porn Video Ads with First-Time Promo Codes',
      niche: 'Food & Quick Service',
      channels: 'Meta Geo-Targeted Ads + Swiggy/Zomato Retargeting Landing Page',
      duration: '30 Days',
      badge: 'Rapid Scale',
      accentColor: 'from-yellow-500 to-amber-600',
      highlights: [
        'Geo-fenced ads running during peak lunch (11 AM–2 PM) and dinner hours (6–10 PM)',
        'Sensory-loaded slow-motion food video creative hooks',
        'Custom promo code tracking measuring exact offline & online order counts',
        'Repeat customer SMS automation driving 42% 30-day retention'
      ],
      metrics: {
        roas: '3,500+ Orders',
        cpa: '₹42 Cost Per Order',
        revenue: '3.8x Food ROAS'
      }
    },
    {
      title: 'FinTech Personal Loan Funnel: 15,000+ Verified Applicants',
      tagline: 'Multi-Step Google Search & Meta Funnel with CIBIL Eligibility Check',
      niche: 'FinTech & Lending',
      channels: 'Google Search PPC + Meta Lead Generation + SMS KYC Hooks',
      duration: '60 Days',
      badge: 'FinTech Certified',
      accentColor: 'from-cyan-500 to-blue-600',
      highlights: [
        'Interactive Loan EMI Calculator landing page capturing high-intent borrowers',
        'Instant Aadhaar / PAN validation API filtering out low-CIBIL applicants',
        'Strict RBI & Google Financial Services Verification policy compliance',
        'Automated WhatsApp agent routing for instant sanction letter release'
      ],
      metrics: {
        roas: '15,000+ Applicants',
        cpa: '₹65 Qualified Lead',
        revenue: '₹18 Cr Sanctioned'
      }
    },
    {
      title: 'Luxury Gold & Diamond Jewelry: 4.9x Festive ROAS',
      tagline: 'Diwali & Dhanteras Multi-Channel Omnichannel Campaign',
      niche: 'Luxury & Jewelry',
      channels: 'Google Shopping + Meta Catalog + YouTube TrueView Ads',
      duration: '30 Days',
      badge: 'High Ticket D2C',
      accentColor: 'from-fuchsia-500 to-rose-600',
      highlights: [
        'Dynamic high-resolution product catalog ads showing BIS Hallmarked jewelry',
        'Store visit optimization driving 820+ physical showroom walk-ins',
        'Video consultation booking via WhatsApp for customized bridal sets',
        'VIP customer retargeting with exclusive gold coin incentives'
      ],
      metrics: {
        roas: '4.9x Blended ROAS',
        cpa: '₹55,000 Avg Ticket',
        revenue: '₹1.2 Cr Sales'
      }
    }
  ];

  // 8 Specialized Marketing Growth Channels
  const subCategories = [
    {
      id: 'meta-performance-ads',
      title: 'Meta (Facebook & Insta) Performance Ads',
      price: '₹12,999/mo',
      badge: 'Highest Scale',
      category: 'meta-ads',
      desc: 'High-converting Advantage+ shopping campaigns, custom audience lookalikes, and video UGC creative testing engineered for sales.',
      features: ['Advantage+ Campaign Architecture', 'Custom UGC Creative Concepts', 'Meta Conversions API (CAPI)', 'A/B Creative Split Testing', 'Daily ROAS Optimization']
    },
    {
      id: 'google-search-ppc',
      title: 'Google Search & Intent PPC Ads',
      price: '₹14,999/mo',
      badge: 'High Intent',
      category: 'google-ads',
      desc: 'Capture ready-to-buy customers searching for your exact services on Google Search with high quality scores and low Cost Per Click.',
      features: ['High-Intent Keyword Bidding', 'Negative Keyword Shielding', 'Search Ad Copy Optimization', 'Conversion Tagging (GTM)', 'Weekly Search Query Auditing']
    },
    {
      id: 'google-pmax-shopping',
      title: 'Google Shopping & Performance Max',
      price: '₹16,999/mo',
      badge: 'E-Commerce Hero',
      category: 'google-ads',
      desc: 'Dominate Google Shopping, YouTube, Gmail, Maps, and Discover with automated AI-driven Performance Max e-commerce campaigns.',
      features: ['Merchant Center Feed Optimization', 'Google PMax Asset Groups', 'Dynamic Remarketing Banners', 'ROAS Target Bidding (tROAS)', 'Competitor Price Monitoring']
    },
    {
      id: 'funnel-landing-pages',
      title: 'High-Converting Sales Funnels',
      price: '₹9,999',
      badge: '3x Conversion',
      category: 'funnels',
      desc: 'Custom engineered sub-second landing pages with compelling copywriting, distraction-free layout, and two-step OTP lead capture.',
      features: ['Persuasive Copywriting & UI', 'Sub-0.5s Page Load Speed', 'Direct WhatsApp & Call Triggers', 'Heatmaps & Form Drop-off Tracking', 'Meta & Google Pixel Sync']
    },
    {
      id: 'whatsapp-automation',
      title: 'Automated WhatsApp Lead Nurturing',
      price: '₹7,999/mo',
      badge: '98% Open Rate',
      category: 'retention',
      desc: 'Official WhatsApp Business API automation recovering abandoned carts, booking consultations, and nurturing leads 24/7.',
      features: ['Official Green Tick Setup Guide', 'Abandoned Cart Instant Recovery', 'Automated Interactive Chatbot', 'Broadcast Drip Sequences', 'Live Agent Multi-Inbox']
    },
    {
      id: 'linkedin-b2b-growth',
      title: 'B2B LinkedIn Demand Generation',
      price: '₹19,999/mo',
      badge: 'Enterprise B2B',
      category: 'b2b-linkedin',
      desc: 'Target CXOs, Directors, and decision-makers on LinkedIn with Sponsored InMail, Lead Gen Forms, and Thought Leadership Content.',
      features: ['Job Title & Industry Targeting', 'Sponsored Content & InMail Ads', 'Lead Magnet Funnel Setup', 'Account-Based Marketing (ABM)', 'CRM Webhook Integration']
    },
    {
      id: 'influencer-ugc-ads',
      title: 'Influencer & Creator UGC Video Ads',
      price: '₹16,999/mo',
      badge: 'Viral CTR',
      category: 'meta-ads',
      desc: 'Scripting, sourcing, and editing authentic creator UGC (User Generated Content) video ads that convert 3x better than studio banners.',
      features: ['High-Converting Scriptwriting', 'Creator Outreach & Sourcing', 'Fast-Paced TikTok/Reels Editing', 'Hook & CTA Iteration Testing', 'Full Ad Whitelisting Rights']
    },
    {
      id: 'retention-email-sms',
      title: 'Retention Email & SMS (Klaviyo)',
      price: '₹9,999/mo',
      badge: 'Zero Ad Cost Revenue',
      category: 'retention',
      desc: 'Turn one-time buyers into lifetime repeat customers with automated welcome flows, VIP rewards, and browse abandonment sequences.',
      features: ['Klaviyo / Mailchimp Automation', 'Welcome & Post-Purchase Flows', 'Browse & Cart Abandonment Drips', 'Customer Segmentation & LTV', 'SMS Campaign Blasts']
    }
  ];

  // 17 Comprehensive Categorized FAQs
  const [faqCategory, setFaqCategory] = useState<'all' | 'roas' | 'tracking' | 'budget' | 'funnels' | 'transparency'>('all');
  const [faqSearchQuery, setFaqSearchQuery] = useState('');

  const marketingFaqs = [
    {
      id: 1,
      category: 'roas',
      categoryLabel: 'ROAS & Results',
      q: 'How fast can we expect results from Meta and Google Ads campaigns?',
      a: 'Google Search Ads and Meta Lead Generation campaigns begin delivering inbound phone calls, WhatsApp inquiries, and qualified leads within 24 to 48 hours of launch. For E-commerce store sales, our AI algorithms optimize bidding and custom lookalikes to reach peak 3.5x–6.0x ROAS within the first 10 to 14 days of data learning.',
      tag: 'Results in 24–48 Hours'
    },
    {
      id: 2,
      category: 'roas',
      categoryLabel: 'ROAS & Results',
      q: 'What is AVRX’s track record for reducing Cost Per Lead (CPL) and increasing ROAS?',
      a: 'Across 150+ managed accounts, our rigorous creative split testing, negative keyword shielding, and server-side Conversions API (CAPI) tracking reduce Cost Per Lead by an average of 42% and increase E-commerce return on ad spend (ROAS) from 1.8x up to 4.5x–5.4x.',
      tag: '-42% CPL Reduction'
    },
    {
      id: 3,
      category: 'budget',
      categoryLabel: 'Ad Budget & Billing',
      q: 'Who pays for the actual advertising budget on Meta (Facebook/Instagram) and Google?',
      a: 'You pay your advertising budget directly to Google and Meta using your own company credit card or GST invoice billing. AVRX never marks up your media spend. You maintain 100% financial transparency and receive official tax credit GST invoices directly from Google and Meta.',
      tag: '100% Direct Ad Spend'
    },
    {
      id: 4,
      category: 'budget',
      categoryLabel: 'Ad Budget & Billing',
      q: 'What is the minimum recommended monthly ad spend to get started?',
      a: 'For local lead generation (clinics, real estate, B2B services), we recommend starting with an ad budget of ₹15,000 to ₹30,000/month. For pan-India E-commerce and D2C brands, we recommend starting with ₹30,000 to ₹60,000/month to feed machine learning algorithms enough conversion data.',
      tag: 'Flexible Ad Budget'
    },
    {
      id: 5,
      category: 'tracking',
      categoryLabel: 'Tracking & Pixel CAPI',
      q: 'How do you overcome Apple iOS 14+ tracking loss and cookie blocking?',
      a: 'We implement Server-Side Meta Conversions API (CAPI) and Google Tag Manager Server Containers. Instead of relying on vulnerable browser cookies, conversion events (Add to Cart, Purchase, Lead Form) are sent securely from your cloud server directly to Meta and Google servers, recovering 100% of lost tracking data.',
      tag: 'Server-Side CAPI'
    },
    {
      id: 6,
      category: 'tracking',
      categoryLabel: 'Tracking & Pixel CAPI',
      q: 'How do you ensure zero fake or invalid bot leads in our campaigns?',
      a: 'We implement three layers of lead verification: Google reCAPTCHA v3 on landing pages, mandatory mobile number OTP verification, and AI IP-address rate limiting. This completely filters out spam bots, competitors clicking ads, and invalid phone numbers.',
      tag: 'OTP Lead Shield'
    },
    {
      id: 7,
      category: 'funnels',
      categoryLabel: 'Creatives & Funnels',
      q: 'Do you create the ad creatives, video hooks, and landing pages for our campaigns?',
      a: 'Yes! Our performance marketing service includes end-to-end creative production: high-converting graphic ad carousels, fast-paced UGC video editing with viral hooks, persuasive copy, and custom high-speed landing pages engineered specifically for high conversion rates.',
      tag: 'End-to-End Creatives'
    },
    {
      id: 8,
      category: 'funnels',
      categoryLabel: 'Creatives & Funnels',
      q: 'Why are custom landing pages better than sending traffic to a standard homepage?',
      a: 'Standard homepages have multiple distracting menus and generic text, resulting in a low 1%–2% conversion rate. Our dedicated campaign landing pages focus on one specific irresistible offer with clear proof, reviews, and a single high-impact call-to-action, delivering 12%–28% conversion rates.',
      tag: '3x Conversion Funnel'
    },
    {
      id: 9,
      category: 'transparency',
      categoryLabel: 'Reporting & Transparency',
      q: 'How frequently do we receive campaign performance reports and updates?',
      a: 'You get access to a 24/7 Live Google Looker Studio analytics dashboard showing real-time spend, leads, sales, and ROAS. Additionally, your dedicated Performance Marketing Manager conducts weekly strategy video calls and sends daily WhatsApp summary updates.',
      tag: '24/7 Live Dashboard'
    },
    {
      id: 10,
      category: 'transparency',
      categoryLabel: 'Reporting & Transparency',
      q: 'Are we locked into a long-term contract?',
      a: 'No. We believe in earning your business every single month through measurable profit and ROI. Our retainer agreements operate on a flexible month-to-month basis with zero long-term lock-in penalties.',
      tag: 'Month-to-Month Retainer'
    },
    {
      id: 11,
      category: 'roas',
      categoryLabel: 'ROAS & Results',
      q: 'What makes Google Performance Max (PMax) so effective for E-commerce stores?',
      a: 'Google Performance Max uses advanced machine learning to automatically serve your best-performing product ads across Google Search, Shopping, YouTube, Gmail, Maps, and Discover simultaneously, targeting buyers based on their real-time purchase intent across the web.',
      tag: 'Google PMax AI'
    },
    {
      id: 12,
      category: 'funnels',
      categoryLabel: 'Creatives & Funnels',
      q: 'How does WhatsApp Automation help recover abandoned carts and scale sales?',
      a: 'Over 70% of online shoppers abandon their carts before completing payment. Our automated WhatsApp integration sends a friendly reminder with the customer’s cart items and a 1-click checkout link within 15 minutes of abandonment, recovering 25%–35% of lost sales automatically.',
      tag: 'WhatsApp Cart Recovery'
    },
    {
      id: 13,
      category: 'tracking',
      categoryLabel: 'Tracking & Pixel CAPI',
      q: 'Can you integrate our lead generation campaigns with our internal CRM or sales team WhatsApp?',
      a: 'Yes. We use automated webhooks to route every incoming lead instantly into your CRM (HubSpot, Zoho, Salesforce, LeadSquared) and simultaneously dispatch an instant WhatsApp notification to your sales rep with the prospect’s name, phone, and requirements.',
      tag: 'Instant Lead Routing'
    },
    {
      id: 14,
      category: 'transparency',
      categoryLabel: 'Reporting & Transparency',
      q: 'Do we retain full ownership of our Meta Ad Accounts, Pixels, and Google Ads Accounts?',
      a: 'Yes, 100%. We always run campaigns inside your own official Meta Business Manager and Google Ads accounts. You retain full administrative ownership of all pixel conversion data, audience lists, and creative assets forever.',
      tag: '100% Account Ownership'
    },
    {
      id: 15,
      category: 'budget',
      categoryLabel: 'Ad Budget & Billing',
      q: 'How do you handle A/B split testing to find winning creatives?',
      a: 'We continuously test 3 to 5 distinct creative variations (UGC video vs. aesthetic carousel vs. pain-point graphic) alongside multiple headline hooks. The algorithm allocates 80% of your budget to proven top performers while investing 20% in discovering new viral winning hooks.',
      tag: 'Scientific A/B Testing'
    },
    {
      id: 16,
      category: 'roas',
      categoryLabel: 'ROAS & Results',
      q: 'Can AVRX help with B2B enterprise lead generation on LinkedIn?',
      a: 'Yes! We specialize in B2B demand generation, targeting exact corporate job titles (e.g. Chief Technology Officer, VP of Supply Chain, Managing Director), pairing LinkedIn Sponsored InMail with gated case studies to build high-ticket sales pipelines.',
      tag: 'B2B LinkedIn ABM'
    },
    {
      id: 17,
      category: 'funnels',
      categoryLabel: 'Creatives & Funnels',
      q: 'How do you handle seasonal flash sales like Diwali, Great Indian Festival, or New Year?',
      a: 'We design aggressive festive sprint funnels: building VIP early-access VIP waitlists, custom countdown timers, festive bundle discounts, and high-frequency retargeting across Meta and Google to maximize surge revenue during festive shopping peaks.',
      tag: 'Festive Scaling Sprints'
    }
  ];

  // Dynamic Calculation for ROAS & Revenue Projection
  const estimatedLeadsOrOrders = Math.round(monthlyAdSpend / targetCpl);
  const estimatedGrossRevenue = Math.round(estimatedLeadsOrOrders * avgTicketSize * (closeRate / 100));
  const calculatedRoas = monthlyAdSpend > 0 ? (estimatedGrossRevenue / monthlyAdSpend).toFixed(1) : '0';

  // AI Ad Copy & Hook Generator Handler
  const handleGenerateAdCopy = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGeneratingCopy(true);
    launchSoundEngine.playNotification();

    setTimeout(() => {
      setGeneratedAdCopy({
        industry: industryInput,
        goal: campaignGoalInput,
        headlineVariations: [
          `🔥 Stop Scrolling: Get ${uniqueOfferInput} Today!`,
          `✨ Why 15,000+ Smart Shoppers Switched to Us (And Love It)`,
          `⚡ Limited Stock Alert: Claim Your Exclusive Discount Before Midnight`
        ],
        primaryTextCopy: `Tired of poor quality and slow delivery? Discover the 2026 collection engineered for perfection.\n\n✅ 100% Premium Quality Guaranteed\n✅ Instant 1-Click Fast Checkout & Cash on Delivery\n✅ ${uniqueOfferInput}\n\n👉 Tap 'Shop Now' to unlock your festive discount before items sell out!`,
        hookAngles: [
          'Direct Benefit Hook: "The easiest way to upgrade your style without breaking the bank."',
          'Social Proof Hook: "Over 4.9★ rating from 12,000+ verified customers across India."',
          'Urgency Hook: "Selling out fast! Only 45 units remaining at this promotional price."'
        ],
        callToAction: 'Shop Now / Get Offer (High CTR Trigger)'
      });
      setIsGeneratingCopy(false);
    }, 600);
  };

  // Open Form Modal with specific plan
  const handleOpenFormWithPlan = (planName: string) => {
    setModalFormPlan(planName);
    setFormData(prev => ({
      ...prev,
      details: `Inquiring for: ${planName}. Please audit our current ad accounts and share a customized ROAS scaling strategy.`
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
        service: `Digital Marketing - ${formData.marketingGoal}`,
        message: `Plan: ${modalFormPlan} | Ad Spend: ${formData.monthlyBudget} | Notes: ${formData.details}`
      });

      if (response.success) {
        launchSoundEngine.playSuccess();
        setFeedbackState({
          isOpen: true,
          success: true,
          title: 'Growth Strategy Audit Requested!',
          message: `Thank you ${formData.name}. Our Senior Performance Marketing Strategist will reach out within 30 minutes with a free competitive ad audit and campaign roadmap.`
        });
        setFormData({
          name: '',
          phone: '',
          email: '',
          marketingGoal: 'Meta + Google Performance Ads',
          monthlyBudget: '₹30,000 - ₹1,00,000/mo',
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
    <div className="min-h-screen bg-[#0b040c] text-slate-100 selection:bg-rose-500 selection:text-slate-950 font-sans pb-24">
      
      {/* Dynamic SEO Meta */}
      <SEO 
        title="Digital Marketing & Performance Growth | Meta Ads, Google PPC & ROAS Scaling | AVRX"
        description="Scale your revenue with AVRX data-driven performance marketing. Meta (Facebook/Instagram) ads, Google Search & PMax, high-converting landing page funnels, WhatsApp automation, and server-side CAPI tracking."
        keywords="digital marketing agency india, performance marketing, meta ads agency, google ads ppc, roas scaling, e-commerce marketing, b2b lead generation india"
      />

      {/* 1. TOP BREADCRUMB & STATUS BAR */}
      <div className="border-b border-rose-950/60 bg-slate-950/70 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-slate-400 overflow-x-auto whitespace-nowrap">
            <button onClick={() => handleNav('home')} className="hover:text-rose-400 transition-colors">Home</button>
            <span>/</span>
            <button onClick={() => handleNav('digital-solutions')} className="hover:text-rose-400 transition-colors">Digital Solutions</button>
            <span>/</span>
            <span className="text-rose-400 font-semibold">Digital Marketing &amp; Growth</span>
          </div>
          
          <div className="hidden sm:flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 font-medium">
              <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse"></span>
              <span>4.8x Avg Blended ROAS • -42% CPL Reduction</span>
            </div>
            <a 
              href="https://wa.me/919999999999?text=Hello%20AVRX,%20I%20want%20to%20scale%20my%20business%20with%20Performance%20Marketing"
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Growth Strategist</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. HIGH-CONVERTING FIERY HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Glowing Background Mesh */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-gradient-to-tr from-rose-600/20 via-pink-600/20 to-amber-600/15 blur-[140px] pointer-events-none -z-10 rounded-full"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Value Prop & Key Metrics */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-rose-500/10 via-pink-500/10 to-amber-500/10 border border-rose-500/30 text-rose-300 text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
              <Rocket className="w-4 h-4 text-rose-400" />
              <span>DATA-DRIVEN PERFORMANCE MARKETING 2026</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
              Scale Revenue with{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-400 via-pink-400 to-amber-400">
                High-ROAS Ad Campaigns
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              We engineer high-converting Meta Ads (Facebook &amp; Instagram), Google Search &amp; Performance Max campaigns, viral UGC video hooks, and automated WhatsApp funnels to maximize qualified inbound leads and e-commerce profitability.
            </p>

            {/* Live Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2">
              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-rose-950/80 text-center space-y-0.5">
                <div className="text-xl sm:text-2xl font-black text-rose-400">4.8x</div>
                <div className="text-[11px] text-slate-400 font-medium">Average ROAS</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-rose-950/80 text-center space-y-0.5">
                <div className="text-xl sm:text-2xl font-black text-pink-400">-42%</div>
                <div className="text-[11px] text-slate-400 font-medium">Lower CPL</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-rose-950/80 text-center space-y-0.5">
                <div className="text-xl sm:text-2xl font-black text-emerald-400">100%</div>
                <div className="text-[11px] text-slate-400 font-medium">CAPI Tracking</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-rose-950/80 text-center space-y-0.5">
                <div className="text-xl sm:text-2xl font-black text-amber-400">24–48h</div>
                <div className="text-[11px] text-slate-400 font-medium">First Leads Live</div>
              </div>
            </div>

            {/* Action CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => handleOpenFormWithPlan('Free Performance Marketing Audit')}
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 text-slate-950 font-black text-sm hover:brightness-110 active:scale-95 transition-all shadow-[0_0_30px_rgba(244,63,94,0.3)] flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Get Free Ad Account Audit &amp; Strategy</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#marketing-calculator"
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-slate-200 font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sliders className="w-4 h-4 text-rose-400" />
                <span>Calculate Projected ROAS</span>
              </a>
            </div>

            {/* Platform Trust Badges */}
            <div className="flex items-center justify-center lg:justify-start gap-6 pt-2 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <Target className="w-4 h-4 text-rose-400" />
                <span>Meta Business Partner</span>
              </div>
              <div className="flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-pink-400" />
                <span>Google Ads Certified</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Direct Account Ownership</span>
              </div>
            </div>

          </div>

          {/* Right Column: Live Campaign Performance Simulator */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-slate-900/90 border border-rose-500/40 p-5 sm:p-6 shadow-2xl space-y-4 relative overflow-hidden backdrop-blur-xl">
              
              {/* Simulator Top Nav Bar */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500 animate-ping"></div>
                  <span className="text-xs font-mono text-slate-300 font-bold">LIVE CAMPAIGN MONITOR</span>
                </div>

                {/* Niche Switcher */}
                <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800 text-[10px]">
                  {(['d2c', 'realestate', 'clinic', 'saas'] as const).map((n) => (
                    <button
                      key={n}
                      onClick={() => setSimulatedNiche(n)}
                      className={`px-2 py-0.5 rounded-lg font-bold uppercase transition-colors ${
                        simulatedNiche === n ? 'bg-rose-500 text-slate-950' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dynamic View based on simulatedNiche */}
              {simulatedNiche === 'd2c' && (
                <div className="space-y-3 text-xs animate-in fade-in duration-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-rose-400 font-bold uppercase">Advantage+ Shopping Sprint</span>
                      <h4 className="text-sm font-extrabold text-white">D2C Fashion &amp; Footwear Brand</h4>
                    </div>
                    <span className="text-[10px] font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                      5.4x Blended ROAS
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                      <div className="text-[10px] text-slate-400">Total Ad Spend</div>
                      <div className="text-sm font-black text-rose-400">₹1,20,000</div>
                      <div className="text-[9px] text-slate-400">Meta + Google PMax</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                      <div className="text-[10px] text-slate-400">Gross Sales</div>
                      <div className="text-sm font-black text-emerald-400">₹6,48,000</div>
                      <div className="text-[9px] text-emerald-400 font-medium">↑ +38% Week</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                      <div className="text-[10px] text-slate-400">Avg CPA</div>
                      <div className="text-sm font-black text-amber-400">₹280</div>
                      <div className="text-[9px] text-emerald-400 font-medium">-34% Reduced</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950 border border-rose-500/30 space-y-1">
                    <div className="flex items-center justify-between text-[11px] font-bold">
                      <span className="text-rose-300">🔥 Top Performing Creative: UGC Reel #4</span>
                      <span className="text-emerald-400 text-[10px]">3.8% High CTR</span>
                    </div>
                    <div className="text-[10px] text-slate-400">"5 Reasons why these sneakers outperform top ₹10k brands" (7.8x ROAS)</div>
                  </div>
                </div>
              )}

              {simulatedNiche === 'realestate' && (
                <div className="space-y-3 text-xs animate-in fade-in duration-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-amber-400 font-bold uppercase">Google High-Intent Search</span>
                      <h4 className="text-sm font-extrabold text-white">Luxury 3BHK Residential Project</h4>
                    </div>
                    <span className="text-[10px] font-mono bg-amber-500/10 text-amber-300 px-2 py-0.5 rounded">
                      68 Site Visits
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                      <div className="text-[10px] text-slate-400">Total Spend</div>
                      <div className="text-sm font-black text-amber-400">₹58,000</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                      <div className="text-[10px] text-slate-400">Verified Leads</div>
                      <div className="text-sm font-black text-white">420 Leads</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                      <div className="text-[10px] text-slate-400">Cost / Lead</div>
                      <div className="text-sm font-black text-emerald-400">₹138 / lead</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950 border border-amber-500/30 flex items-center justify-between">
                    <div>
                      <div className="text-[11px] font-bold text-white">2-Step OTP Lead Shield</div>
                      <div className="text-[9px] text-slate-400">100% Genuine Mobile Numbers, Zero Junk</div>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">
                      Active
                    </span>
                  </div>
                </div>
              )}

              {simulatedNiche === 'clinic' && (
                <div className="space-y-3 text-xs animate-in fade-in duration-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-emerald-400 font-bold uppercase">Local Clinic Domination</span>
                      <h4 className="text-sm font-extrabold text-white">Dental &amp; Hair Transplant Clinic</h4>
                    </div>
                    <span className="text-[10px] font-mono bg-emerald-500/10 text-emerald-300 px-2 py-0.5 rounded">
                      180+ Appointments
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                      <div className="text-[10px] text-slate-400">Cost Per Patient Booking</div>
                      <div className="text-sm font-black text-emerald-400">₹95 / Booking</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                      <div className="text-[10px] text-slate-400">WhatsApp Instant Book Rate</div>
                      <div className="text-sm font-black text-rose-400">68% of Total Leads</div>
                    </div>
                  </div>
                </div>
              )}

              {simulatedNiche === 'saas' && (
                <div className="space-y-3 text-xs animate-in fade-in duration-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-pink-400 font-bold uppercase">B2B LinkedIn &amp; Search Pipeline</span>
                      <h4 className="text-sm font-extrabold text-white">B2B Logistics SaaS Platform</h4>
                    </div>
                    <span className="text-[10px] font-mono bg-pink-500/10 text-pink-300 px-2 py-0.5 rounded">
                      $42k MRR Pipeline
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                    <div className="text-[11px] font-bold text-white">CXO Gated Whitepaper Funnel</div>
                    <div className="text-[10px] text-slate-400">450+ Plant Directors &amp; Procurement Heads Acquired at ₹320 CPL</div>
                  </div>
                </div>
              )}

              {/* Bottom Live Streaming Telemetry */}
              <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                <span>⚡ Meta CAPI Active (100% Events)</span>
                <span>📈 Real-Time GA4 Sync</span>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 3. AD PLATFORMS & MARKETING CHANNELS MARQUEE */}
      <section className="py-8 bg-slate-950 border-y border-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-4 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
            PAID AD NETWORKS, ANALYTICS &amp; AUTOMATION CHANNELS
          </span>
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="flex gap-4 animate-marquee whitespace-nowrap will-change-transform py-2">
            {[...adPlatforms, ...adPlatforms].map((plat, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800/90 text-xs font-bold text-slate-200 shrink-0 shadow-sm hover:border-rose-500/50 hover:bg-slate-800 transition-colors"
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-semibold">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>REAL CAMPAIGN CASE STUDIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Explore 10 Proven{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-pink-300">
              Growth Case Studies
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            From D2C 5.4x ROAS scaling to real estate high-ticket lead generation, explore how AVRX turns paid traffic into profit.
          </p>
        </div>

        {/* Interactive Model Display Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900/70 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3 flex-wrap">
              <span className={`text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full text-white bg-gradient-to-r ${caseStudies[activeCaseIndex].accentColor}`}>
                {caseStudies[activeCaseIndex].badge}
              </span>
              <span className="text-xs font-bold text-rose-400 bg-rose-500/10 border border-rose-500/20 px-3 py-1 rounded-full">
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
              <p className="text-sm text-rose-300 font-medium mt-1">
                {caseStudies[activeCaseIndex].tagline}
              </p>
            </div>

            {/* Channels Involved */}
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs">
              <span className="text-slate-400 font-medium block mb-1">Growth Channels Deployed:</span>
              <span className="font-bold text-slate-200">{caseStudies[activeCaseIndex].channels}</span>
            </div>

            {/* Features Checklist */}
            <div className="space-y-2.5">
              {caseStudies[activeCaseIndex].highlights.map((feat, fIdx) => (
                <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Performance Badges */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
                <div className="text-xs sm:text-sm font-bold text-white">{caseStudies[activeCaseIndex].metrics.roas}</div>
                <div className="text-[10px] text-slate-400">Peak Return</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
                <div className="text-xs sm:text-sm font-bold text-rose-400">{caseStudies[activeCaseIndex].metrics.cpa}</div>
                <div className="text-[10px] text-slate-400">Efficiency Metric</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
                <div className="text-xs sm:text-sm font-bold text-emerald-400">{caseStudies[activeCaseIndex].metrics.revenue}</div>
                <div className="text-[10px] text-slate-400">Scale Impact</div>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <button
                onClick={() => handleOpenFormWithPlan(`Case Study Strategy: ${caseStudies[activeCaseIndex].title}`)}
                className="px-6 py-3 rounded-xl bg-rose-500 hover:bg-rose-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md flex items-center gap-2 cursor-pointer"
              >
                <span>Deploy This Growth Strategy</span>
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
                      ? 'bg-rose-500/15 border-rose-500/80 shadow-[0_0_15px_rgba(244,63,94,0.15)]'
                      : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700'
                  }`}
                >
                  <div className="text-[10px] font-mono text-rose-400 font-bold uppercase">{model.niche}</div>
                  <div className="text-xs font-bold text-white truncate mt-1">{model.title}</div>
                  <div className="text-[10px] text-emerald-400 font-bold mt-1">{model.badge}</div>
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. 8 SPECIALIZED MARKETING & GROWTH CHANNELS */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-xs font-semibold">
            <Layers className="w-3.5 h-3.5" />
            <span>SPECIALIZED GROWTH CHANNELS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Comprehensive Full-Funnel Marketing Solutions
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Combine high-intent search, social performance ads, high-converting funnels, and automated retention for maximum scale.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {[
            { id: 'all', label: 'All Growth Channels' },
            { id: 'meta-ads', label: 'Meta Performance Ads' },
            { id: 'google-ads', label: 'Google PPC & PMax' },
            { id: 'funnels', label: 'Funnels & Landing Pages' },
            { id: 'b2b-linkedin', label: 'B2B LinkedIn Growth' },
            { id: 'retention', label: 'WhatsApp & Retention' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-rose-500 text-slate-950 shadow-[0_0_15px_rgba(244,63,94,0.3)] font-extrabold'
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
                className="rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-rose-500/50 p-6 flex flex-col justify-between space-y-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(244,63,94,0.08)] group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-rose-500/10 border border-rose-500/20 text-rose-300">
                      {item.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-400">Retainer</span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-rose-300 transition-colors">
                    {item.title}
                  </h3>

                  <div className="text-2xl font-black text-rose-400">
                    {item.price}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                    {item.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-[11px] text-slate-300">
                        <Check className="w-3 h-3 text-rose-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleOpenFormWithPlan(`Growth Channel: ${item.title} (${item.price})`)}
                  className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-rose-500 hover:text-slate-950 text-slate-200 font-bold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <span>Scale This Channel</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
        </div>
      </section>

      {/* 6. INTERACTIVE AI TOOLS & ROAS ROI CALCULATOR */}
      <section id="marketing-calculator" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold">
            <Cpu className="w-3.5 h-3.5" />
            <span>AI COPYWRITER &amp; ROAS CALCULATOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Generate High-CTR Ad Copy &amp; Calculate Real ROAS Live
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Use our AI Copy Generator to craft viral ad hooks and interactive sliders to project monthly leads, gross revenue, and ROAS.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Tool 1: AI High-Converting Ad Copy & Hook Generator (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-rose-500/20 text-rose-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">AI High-CTR Ad Copy &amp; Hook Generator</h3>
                  <p className="text-xs text-slate-400">Generate high-converting headlines, primary text &amp; viral video hooks</p>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-500/10 text-rose-300 border border-rose-500/20">
                Gemini Engine
              </span>
            </div>

            <form onSubmit={handleGenerateAdCopy} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">Business / Industry</label>
                  <select
                    value={industryInput}
                    onChange={(e) => setIndustryInput(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-rose-500"
                  >
                    <option value="D2C E-Commerce & Fashion Brand">D2C E-Commerce &amp; Fashion</option>
                    <option value="Real Estate & Luxury Apartments">Real Estate &amp; Housing</option>
                    <option value="Dental & Healthcare Clinic">Dental &amp; Healthcare Clinic</option>
                    <option value="B2B Manufacturing & Tech">B2B Manufacturing &amp; Tech</option>
                    <option value="EdTech & Coaching Institute">EdTech &amp; Coaching</option>
                    <option value="FinTech & Loan Advisory">FinTech &amp; Loan Advisory</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">Campaign Objective</label>
                  <select
                    value={campaignGoalInput}
                    onChange={(e) => setCampaignGoalInput(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-rose-500"
                  >
                    <option value="Direct Purchases & ROAS Scaling">Direct Purchases &amp; ROAS</option>
                    <option value="High-Intent Inbound Leads (WhatsApp/Call)">Inbound Leads (WhatsApp/Call)</option>
                    <option value="Webinar / Event Registrations">Event Registrations</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300">Target Demographic</label>
                <input
                  type="text"
                  value={targetAudienceInput}
                  onChange={(e) => setTargetAudienceInput(e.target.value)}
                  placeholder="e.g. Women aged 22-45 in Tier 1 & 2 cities, interested in luxury fashion"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-rose-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300">Irresistible Offer / Angle</label>
                <input
                  type="text"
                  value={uniqueOfferInput}
                  onChange={(e) => setUniqueOfferInput(e.target.value)}
                  placeholder="e.g. Flat 30% Off First Order + Free Shipping & COD"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-rose-500"
                />
              </div>

              <button
                type="submit"
                disabled={isGeneratingCopy}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 hover:brightness-110 text-slate-950 font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:opacity-50"
              >
                {isGeneratingCopy ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Writing Winning Ad Copy...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Generate High-Converting Ad Copy &amp; Hooks</span>
                  </>
                )}
              </button>
            </form>

            {/* Generated Output Card */}
            {generatedAdCopy && (
              <div className="mt-4 p-5 rounded-2xl bg-slate-950 border border-rose-500/40 space-y-4 animate-in fade-in duration-300">
                
                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold text-rose-400 uppercase block">High-CTR Ad Headlines (Google &amp; Meta):</span>
                  <div className="space-y-1">
                    {generatedAdCopy.headlineVariations.map((h: string, hIdx: number) => (
                      <div key={hIdx} className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-xs font-bold text-white flex items-center justify-between">
                        <span>{h}</span>
                        <span className="text-[9px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded font-mono">High CTR</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold text-pink-400 uppercase block">Primary Text Copy (Meta Feed):</span>
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 whitespace-pre-line leading-relaxed">
                    {generatedAdCopy.primaryTextCopy}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold text-amber-400 uppercase block">Video Creative Hook Angles:</span>
                  <div className="space-y-1">
                    {generatedAdCopy.hookAngles.map((hk: string, hkIdx: number) => (
                      <div key={hkIdx} className="text-[11px] text-slate-300 flex items-center gap-2">
                        <Check className="w-3 h-3 text-amber-400 shrink-0" />
                        <span>{hk}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleOpenFormWithPlan(`AI Copywriting Campaign: ${generatedAdCopy.industry}`)}
                  className="w-full py-2.5 rounded-xl bg-rose-500 hover:bg-rose-400 text-slate-950 font-bold text-xs transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Launch This Ad Strategy with AVRX</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

          </div>

          {/* Tool 2: ROAS & Ad Spend ROI Calculator (5 cols) */}
          <div className="lg:col-span-5 rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 space-y-6 shadow-xl flex flex-col justify-between">
            <div className="space-y-1 border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2">
                <Sliders className="w-5 h-5 text-amber-400" />
                <h3 className="text-base font-bold text-white">ROAS &amp; Revenue Projection Calculator</h3>
              </div>
              <p className="text-xs text-slate-400">Calculate projected leads, gross sales &amp; ad multiplier</p>
            </div>

            {/* Slider 1: Monthly Ad Spend */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="text-slate-300">Monthly Advertising Budget:</span>
                <span className="text-rose-400 font-mono">₹{monthlyAdSpend.toLocaleString('en-IN')}/mo</span>
              </div>
              <input
                type="range"
                min="10000"
                max="500000"
                step="5000"
                value={monthlyAdSpend}
                onChange={(e) => setMonthlyAdSpend(Number(e.target.value))}
                className="w-full accent-rose-500 cursor-pointer"
              />
            </div>

            {/* Slider 2: Target Cost Per Lead (CPL) / CPA */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="text-slate-300">Target Cost Per Acquisition / Lead:</span>
                <span className="text-pink-400 font-mono">₹{targetCpl} / lead</span>
              </div>
              <input
                type="range"
                min="30"
                max="500"
                step="10"
                value={targetCpl}
                onChange={(e) => setTargetCpl(Number(e.target.value))}
                className="w-full accent-pink-500 cursor-pointer"
              />
            </div>

            {/* Slider 3: Average Ticket Size */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="text-slate-300">Average Order / Deal Value:</span>
                <span className="text-amber-400 font-mono">₹{avgTicketSize.toLocaleString('en-IN')}</span>
              </div>
              <input
                type="range"
                min="500"
                max="25000"
                step="250"
                value={avgTicketSize}
                onChange={(e) => setAvgTicketSize(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
            </div>

            {/* Output Box */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-rose-500/40 text-center space-y-2">
              <div className="text-xs text-slate-400">Projected Gross Monthly Revenue</div>
              <div className="text-3xl font-black text-emerald-400">
                ₹{estimatedGrossRevenue.toLocaleString('en-IN')}
              </div>
              <div className="flex items-center justify-around text-xs text-slate-300 pt-1">
                <span>🔥 {estimatedLeadsOrOrders.toLocaleString('en-IN')} Inbound Leads</span>
                <span className="text-rose-400 font-bold font-mono">⚡ {calculatedRoas}x ROAS</span>
              </div>
            </div>

            <button
              onClick={() => handleOpenFormWithPlan(`ROAS Projection: ${calculatedRoas}x ROAS on ₹${monthlyAdSpend.toLocaleString('en-IN')}/mo`)}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 hover:brightness-110 text-slate-950 font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
            >
              <span>Lock This Growth Projection</span>
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
            <span>TRANSPARENT GROWTH RETAINERS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Performance Retainers with 100% Direct Ad Spend Transparency
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            No media spend markups. You pay Google and Meta directly and keep 100% account ownership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Plan 1: Growth Starter */}
          <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-8 flex flex-col justify-between space-y-6 hover:border-slate-700 transition-colors">
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-bold text-rose-400 uppercase tracking-wider">Starter Tier</span>
                <h3 className="text-2xl font-black text-white">Growth Starter</h3>
                <p className="text-xs text-slate-400">Local clinics, real estate agents, or single-product launch</p>
              </div>

              <div className="text-3xl font-black text-white">
                ₹12,999
                <span className="text-xs font-normal text-slate-400"> / month</span>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-slate-800 text-xs text-slate-300">
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-rose-400" /><span>Meta Ads (FB &amp; Instagram) Setup</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-rose-400" /><span>Up to 4 Custom Graphic Ad Creatives</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-rose-400" /><span>Meta Pixel &amp; Lead Form Optimization</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-rose-400" /><span>Audience Research &amp; Negative Shielding</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-rose-400" /><span>Weekly Performance Report &amp; Call</span></div>
              </div>
            </div>

            <button
              onClick={() => handleOpenFormWithPlan('Growth Starter Retainer (₹12,999/mo)')}
              className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-colors cursor-pointer"
            >
              Choose Growth Starter
            </button>
          </div>

          {/* Plan 2: Scale Accelerator (Popular) */}
          <div className="rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border-2 border-rose-500 p-8 flex flex-col justify-between space-y-6 relative shadow-[0_0_40px_rgba(244,63,94,0.15)]">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-rose-500 to-pink-600 text-slate-950 font-black text-[11px] uppercase tracking-wider shadow-md">
              ⭐ Most Popular Choice
            </div>

            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-bold text-rose-400 uppercase tracking-wider">Scaling Tier</span>
                <h3 className="text-2xl font-black text-white">Scale Accelerator</h3>
                <p className="text-xs text-slate-400">D2C e-commerce brands, hospitals, and fast-growing B2B firms</p>
              </div>

              <div className="text-3xl font-black text-rose-400">
                ₹24,999
                <span className="text-xs font-normal text-slate-400"> / month</span>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-slate-800 text-xs text-slate-200">
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-rose-400" /><span>Both Meta Ads + Google Ads (Search &amp; PMax)</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-rose-400" /><span>Server-Side Conversions API (CAPI) Tracking</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-rose-400" /><span>8+ Ad Creatives &amp; Fast-Paced Video Reels</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-rose-400" /><span>High-Converting Sales Funnel Landing Page</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-rose-400" /><span>WhatsApp Abandoned Cart &amp; Lead Recovery</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-rose-400" /><span>Dedicated Performance Marketing Manager</span></div>
              </div>
            </div>

            <button
              onClick={() => handleOpenFormWithPlan('Scale Accelerator Retainer (₹24,999/mo)')}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 hover:brightness-110 text-slate-950 font-black text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
            >
              Scale With Accelerator
            </button>
          </div>

          {/* Plan 3: Market Domination Suite */}
          <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-8 flex flex-col justify-between space-y-6 hover:border-slate-700 transition-colors">
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Enterprise Domination</span>
                <h3 className="text-2xl font-black text-white">Domination Suite</h3>
                <p className="text-xs text-slate-400">High-spend e-commerce &amp; multi-branch national brands</p>
              </div>

              <div className="text-3xl font-black text-white">
                ₹49,999
                <span className="text-xs font-normal text-slate-400"> / month</span>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-slate-800 text-xs text-slate-300">
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-rose-400" /><span>Meta + Google + YouTube + LinkedIn Campaigns</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-rose-400" /><span>Unlimited UGC Video Ads &amp; Motion Graphics</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-rose-400" /><span>Multi-Variant A/B Split Testing Funnels</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-rose-400" /><span>Klaviyo Email &amp; SMS Flow Retention Suite</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-rose-400" /><span>Daily Bid Management &amp; 24/7 Slack Channel</span></div>
              </div>
            </div>

            <button
              onClick={() => handleOpenFormWithPlan('Market Domination Suite (₹49,999/mo)')}
              className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-colors cursor-pointer"
            >
              Dominate Your Market
            </button>
          </div>

        </div>
      </section>

      {/* 8. 5-STAGE DATA-DRIVEN GROWTH ROADMAP */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-semibold">
            <Clock className="w-3.5 h-3.5" />
            <span>DATA-DRIVEN SPRINT FRAMEWORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How We Optimize Your Ad Spend for Maximum Profit
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            A scientific 5-step methodology that eliminates ad waste and scales winning creative angles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            {
              step: '01',
              title: 'Competitor & Offer Audit',
              desc: 'Deep analysis of competitor ads, audience demographics, and formulating irresistible value hooks.'
            },
            {
              step: '02',
              title: 'Creative & Funnel Build',
              desc: 'Producing high-CTR video reels, carousels, and conversion-optimized fast landing pages.'
            },
            {
              step: '03',
              title: 'CAPI Tracking Setup',
              desc: 'Configuring Meta Conversions API (CAPI), GA4 server containers, and automated CRM webhooks.'
            },
            {
              step: '04',
              title: 'Live Launch & A/B Test',
              desc: 'Launching targeted campaigns, testing multiple creative hooks, and pruning high-CPA ad sets.'
            },
            {
              step: '05',
              title: 'ROAS Scaling & Retention',
              desc: 'Scaling budget on winning 4x+ ROAS campaigns and automating WhatsApp repeat purchases.'
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-2.5 relative hover:border-rose-500/50 transition-colors"
            >
              <div className="text-2xl font-black text-rose-400/30 font-mono">{item.step}</div>
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs sm:text-sm font-semibold shadow-sm">
            <HelpCircle className="w-4 h-4 text-rose-400" />
            <span>KNOWLEDGE BASE &amp; FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Everything You Need to Know About{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-400 via-pink-400 to-amber-400">
              AVRX Performance Marketing
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Transparent answers regarding direct ad spend billing, 4.8x ROAS optimization, server-side CAPI tracking, OTP lead validation, and month-to-month contracts.
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
              placeholder="Search questions (e.g. ROAS, Direct Billing, CAPI, Budget, Funnels, WhatsApp, Creatives)..."
              className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-rose-500/80 focus:ring-2 focus:ring-rose-500/20 shadow-inner"
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
              { id: 'all', label: 'All Questions', count: marketingFaqs.length },
              { id: 'roas', label: '📈 ROAS & Results', count: marketingFaqs.filter(f => f.category === 'roas').length },
              { id: 'tracking', label: '⚡ CAPI & Tracking', count: marketingFaqs.filter(f => f.category === 'tracking').length },
              { id: 'budget', label: '💰 Budget & Billing', count: marketingFaqs.filter(f => f.category === 'budget').length },
              { id: 'funnels', label: '🎯 Creatives & Funnels', count: marketingFaqs.filter(f => f.category === 'funnels').length },
              { id: 'transparency', label: '📜 Transparency & SLA', count: marketingFaqs.filter(f => f.category === 'transparency').length }
            ].map((cat) => {
              const isSelected = faqCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setFaqCategory(cat.id as any)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-rose-500 text-slate-950 shadow-[0_0_15px_rgba(244,63,94,0.3)] font-extrabold'
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
          const filteredFaqs = marketingFaqs.filter(faq => {
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
                <HelpCircle className="w-8 h-8 text-rose-400 mx-auto opacity-70" />
                <h4 className="text-base font-bold text-white">No Matching Questions Found</h4>
                <p className="text-xs text-slate-400">
                  Try searching for keywords like "ROAS", "CAPI", "Direct Billing", or "Creatives", or reset your search.
                </p>
                <button
                  onClick={() => { setFaqSearchQuery(''); setFaqCategory('all'); }}
                  className="px-4 py-2 rounded-xl bg-rose-500 text-slate-950 text-xs font-bold"
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
                        ? 'bg-slate-900/95 border-rose-500/50 shadow-[0_0_25px_rgba(244,63,94,0.08)]' 
                        : 'bg-slate-900/70 hover:bg-slate-900/90 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : faq.id)}
                      className="w-full p-5 text-left flex items-start justify-between gap-3 font-bold text-sm sm:text-base text-slate-100 hover:text-rose-300 transition-colors cursor-pointer group"
                    >
                      <div className="space-y-1.5 pr-2">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-rose-500/10 border border-rose-500/20 text-rose-300">
                            {faq.categoryLabel}
                          </span>
                          <span className="text-[10px] font-mono text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded">
                            {faq.tag}
                          </span>
                        </div>
                        <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-rose-300 transition-colors leading-snug">
                          {faq.q}
                        </h4>
                      </div>
                      <div className={`p-1.5 rounded-lg shrink-0 mt-1 transition-all ${
                        isOpen ? 'bg-rose-500 text-slate-950 rotate-180' : 'bg-slate-800 text-slate-400 group-hover:text-white'
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
        <div className="rounded-2xl bg-gradient-to-r from-rose-500/10 via-pink-500/10 to-amber-500/10 border border-rose-500/30 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <Headphones className="w-5 h-5 text-rose-400" />
              <h4 className="text-base font-bold text-white">Need a Customized ROAS Audit or High-Spend Growth Plan?</h4>
            </div>
            <p className="text-xs sm:text-sm text-slate-300">
              Speak directly with an AVRX Senior Growth Specialist to audit your current ads, pixels, and conversion rates.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0 flex-wrap justify-center">
            <button
              onClick={() => handleOpenFormWithPlan('Custom Growth Strategy Consultation')}
              className="px-5 py-2.5 rounded-xl bg-rose-500 hover:bg-rose-400 text-slate-950 font-bold text-xs transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
            >
              <span>Ask a Growth Specialist</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <a
              href="https://wa.me/919999999999?text=Hello%20AVRX,%20I%20have%20a%20question%20regarding%20Digital%20Marketing"
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
            <span className="text-xs font-bold uppercase tracking-wider text-rose-400 bg-rose-500/10 px-3 py-1 rounded-full border border-rose-500/20">
              ⚡ FREE AD AUDIT &amp; ROAS PROJECTION
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Ready to Scale Your Inbound Revenue?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Fill out this quick form and our Principal Growth Strategist will audit your competitor ads and share an actionable campaign blueprint within 30 minutes.
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
                  placeholder="e.g. Ankit Mehra"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-rose-500"
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
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-rose-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-300">Business Email (Optional)</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. ankit@brand.com"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-rose-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-300">Primary Marketing Goal</label>
                <select
                  value={formData.marketingGoal}
                  onChange={(e) => setFormData({ ...formData, marketingGoal: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 focus:outline-none focus:border-rose-500"
                >
                  <option value="Meta (FB & Insta) Performance Ads">Meta (FB &amp; Insta) Performance Ads</option>
                  <option value="Google Search & Performance Max">Google Search &amp; Performance Max</option>
                  <option value="E-Commerce Direct ROAS Scaling">E-Commerce Direct ROAS Scaling</option>
                  <option value="High-Ticket Real Estate & Clinic Leads">High-Ticket Real Estate &amp; Clinic Leads</option>
                  <option value="B2B LinkedIn Enterprise Leads">B2B LinkedIn Enterprise Leads</option>
                  <option value="High-Converting Funnel & Landing Page">High-Converting Funnel &amp; Landing Page</option>
                  <option value="WhatsApp Lead & Cart Automation">WhatsApp Lead &amp; Cart Automation</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-300">Planned Monthly Ad Spend</label>
                <select
                  value={formData.monthlyBudget}
                  onChange={(e) => setFormData({ ...formData, monthlyBudget: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 focus:outline-none focus:border-rose-500"
                >
                  <option value="₹15,000 - ₹35,000/mo">₹15,000 - ₹35,000 / month</option>
                  <option value="₹35,000 - ₹1,00,000/mo">₹35,000 - ₹1,00,000 / month</option>
                  <option value="₹1,00,000 - ₹5,00,000+/mo">₹1,00,000 - ₹5,00,000+ / month</option>
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-300">Website URL &amp; Current Ad Challenges</label>
              <textarea
                rows={3}
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                placeholder="Share your website/Instagram link, current Cost Per Lead or ROAS, and your revenue target..."
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-rose-500"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 hover:brightness-110 text-slate-950 font-black text-sm uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(244,63,94,0.3)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Submitting to Growth Engine...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Request Free Campaign Audit &amp; Growth Blueprint</span>
                </>
              )}
            </button>
          </form>

        </div>
      </section>

      {/* POPUP MODAL FOR DIRECT PLAN QUOTE */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-rose-500/40 rounded-3xl p-6 sm:p-8 max-w-lg w-full space-y-5 shadow-2xl relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg bg-slate-800 text-xs"
            >
              ✕
            </button>

            <div className="space-y-1">
              <span className="text-[10px] font-bold text-rose-400 uppercase">Selected Retainer</span>
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
                  placeholder="Ankit Mehra"
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
                <label className="text-xs text-slate-300 font-medium">Website URL / Notes</label>
                <textarea
                  rows={2}
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-xl bg-rose-500 hover:bg-rose-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all"
              >
                {isSubmitting ? 'Sending Request...' : 'Confirm Growth Audit'}
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
