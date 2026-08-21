import React, { useState } from 'react';
import { SEO } from '../components/common/SEO';
import { ServiceItem } from '../types';
import { WebsiteDesignPage } from './WebsiteDesignPage';
import { 
  DIGITAL_SERVICES, 
  FINANCIAL_SERVICES, 
  TAX_SERVICES, 
  INSURANCE_SERVICES, 
  HOSTING_PRODUCTS 
} from '../data/servicesData';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Clock, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  PhoneCall, 
  MessageSquare, 
  Sparkles, 
  Layers, 
  ChevronRight,
  TrendingUp,
  Award,
  Users,
  Send,
  RefreshCw
} from 'lucide-react';
import { submitLeadForm } from '../utils/formSubmit';
import { SubmissionFeedbackModal } from '../components/common/SubmissionFeedbackModal';

interface ServiceDetailPageProps {
  serviceSlug: string;
  onNavigate: (page: string, slug?: string) => void;
}

// Slug alias mapper
const SLUG_ALIASES: Record<string, string> = {
  'seo': 'seo-ranking',
  'seo-ranking': 'seo-ranking',
  'web-app': 'web-application-development',
  'web-apps': 'web-application-development',
  'web-application-development': 'web-application-development',
  'app-development': 'android-app-development',
  'application-development': 'android-app-development',
  'android-app-development': 'android-app-development',
  'ios-app-development': 'ios-app-development',
  'ecommerce': 'e-commerce-solutions',
  'e-commerce': 'e-commerce-solutions',
  'e-commerce-solutions': 'e-commerce-solutions',
  'website-design': 'website-design',
  'digital-marketing': 'digital-marketing',
  'personal-loan': 'personal-loan',
  'business-loan': 'business-loan',
  'home-loan': 'home-loan',
  'car-loan': 'car-loan',
  'mortgage-loan': 'mortgage-loan',
  'loan-refinance': 'loan-refinance',
  'government-scheme-loans': 'government-scheme-loans',
  'gst': 'gst-registration',
  'gst-registration': 'gst-registration',
  'gst-filing': 'gst-filing',
  'itr': 'itr-filing',
  'itr-filing': 'itr-filing',
  'udyam': 'udyam-registration',
  'udyam-registration': 'udyam-registration',
  'company-registration': 'company-registration',
  'business-compliance': 'business-compliance',
  'motor-insurance': 'motor-insurance',
  'health-insurance': 'health-insurance',
  'travel-insurance': 'travel-insurance',
  'home-insurance': 'home-insurance',
  'shop-insurance': 'shop-property-insurance',
  'shop-property-insurance': 'shop-property-insurance',
};

// Curated high quality imagery for each service
const SERVICE_IMAGES: Record<string, string> = {
  'website-design': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
  'corporate-website-design': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
  'e-commerce-solutions': 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1200&q=80',
  'web-application-development': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
  'android-app-development': 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
  'ios-app-development': 'https://images.unsplash.com/photo-1510519138197-04075c7e145c?auto=format&fit=crop&w=1200&q=80',
  'digital-marketing': 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=1200&q=80',
  'seo-ranking': 'https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?auto=format&fit=crop&w=1200&q=80',
  'website-redesign': 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
  'website-maintenance': 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
  'personal-loan': 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=1200&q=80',
  'business-loan': 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=1200&q=80',
  'home-loan': 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
  'car-loan': 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80',
  'mortgage-loan': 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1200&q=80',
  'loan-refinance': 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80',
  'government-scheme-loans': 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=1200&q=80',
  'gst-registration': 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1200&q=80',
  'gst-filing': 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80',
  'itr-filing': 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80',
  'udyam-registration': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
  'business-compliance': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
  'company-registration': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
  'motor-insurance': 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
  'health-insurance': 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80',
  'travel-insurance': 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80',
  'home-insurance': 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
  'shop-property-insurance': 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
  'default': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80'
};

// Company registration fallback item if requested specifically
const COMPANY_REGISTRATION_ITEM: ServiceItem = {
  id: 'company-registration',
  title: 'Company & Business Registration',
  category: 'tax',
  shortDesc: 'Private Limited, LLP, One Person Company (OPC), and Partnership business incorporation.',
  fullDesc: 'End-to-end company incorporation services with Ministry of Corporate Affairs (MCA). Includes DIN, DSC, PAN, TAN, MoA, AoA, GST registration and corporate bank account opening guidance.',
  iconName: 'Building',
  badge: 'Startup Ready',
  priceStarting: '₹6,999',
  features: [
    'Private Limited / LLP / OPC Incorporation',
    'Name Approval Application & RUN Form',
    'Digital Signature Certificate (DSC) for 2 Directors',
    'Director Identification Number (DIN) Allotment',
    'MoA & AoA Drafting & Incorporation Certificate',
    'Company PAN, TAN & Bank Account Resolution'
  ],
  benefits: [
    'Limited liability protection for founders',
    'Raise angel/venture capital easily with registered equity',
    'High credibility with global enterprise clients'
  ],
  process: [
    'DSC & Name Availability Search',
    'SPICe+ Form E-Filing on MCA Portal',
    'Certificate of Incorporation (COI) Issuance',
    'Bank Account & Post-Incorporation Setup'
  ],
  whyChooseUs: [
    'Fastest 5-7 day incorporation timeline',
    'Zero hidden govt stamp duty fees',
    'Free post-incorporation compliance consultation'
  ],
  faqs: [
    { question: 'What is the minimum number of directors needed for Private Limited?', answer: 'A minimum of 2 directors and 2 shareholders are required. The directors can also be the shareholders.' },
    { question: 'How long does company registration take in India?', answer: 'Typically 5 to 7 working days once all director KYC documents (PAN, Aadhaar, bank statements) are submitted.' },
    { question: 'Is physical office presence required for registration?', answer: 'No, any commercial or residential address with a valid utility bill and NOC can serve as your registered office address.' }
  ]
};

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ serviceSlug, onNavigate }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    budget: 'Standard',
    message: '',
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

  // Find target service
  const allServices: ServiceItem[] = [
    ...DIGITAL_SERVICES,
    ...FINANCIAL_SERVICES,
    ...TAX_SERVICES,
    ...INSURANCE_SERVICES,
    ...HOSTING_PRODUCTS,
    COMPANY_REGISTRATION_ITEM
  ];

  const targetId = SLUG_ALIASES[serviceSlug] || serviceSlug;
  
  // Render dedicated Website Design Master Service Page when website design/development is selected
  if (targetId === 'website-design' || serviceSlug === 'website-design' || serviceSlug === 'website-development' || serviceSlug === 'web-design' || serviceSlug === 'web-development') {
    return <WebsiteDesignPage onNavigate={onNavigate} />;
  }

  const service = allServices.find(s => s.id === targetId) || allServices[0];

  const heroImage = service.imageUrl || SERVICE_IMAGES[service.id] || SERVICE_IMAGES[serviceSlug] || SERVICE_IMAGES.default;

  // Category display details
  const getCategoryMeta = (cat: string) => {
    switch (cat) {
      case 'digital':
        return { label: 'Digital Solutions', page: 'digital-solutions', color: 'text-cyan-400', border: 'border-cyan-500/30', bg: 'bg-cyan-500/10' };
      case 'financial':
        return { label: 'Financial Solutions', page: 'financial-solutions', color: 'text-emerald-400', border: 'border-emerald-500/30', bg: 'bg-emerald-500/10' };
      case 'tax':
        return { label: 'Tax & Compliance', page: 'tax-solutions', color: 'text-amber-400', border: 'border-amber-500/30', bg: 'bg-amber-500/10' };
      case 'insurance':
        return { label: 'Insurance Protection', page: 'insurance-solutions', color: 'text-purple-400', border: 'border-purple-500/30', bg: 'bg-purple-500/10' };
      default:
        return { label: 'Hosting & Products', page: 'hosting-products', color: 'text-blue-400', border: 'border-blue-500/30', bg: 'bg-blue-500/10' };
    }
  };

  const catMeta = getCategoryMeta(service.category);

  // Standard 4-step process
  const processSteps = [
    {
      num: '01',
      title: 'Understand & Assess',
      desc: 'We conduct a comprehensive assessment of your exact goals, business model, timeline, and requirements.'
    },
    {
      num: '02',
      title: 'Plan & Blueprint',
      desc: 'Our specialists craft a tailored execution roadmap, technical architecture, and transparent cost breakdown.'
    },
    {
      num: '03',
      title: 'Execute & Build',
      desc: 'We implement the solution with rigorous precision, compliance checks, modern engineering, and speed.'
    },
    {
      num: '04',
      title: 'Launch & 24/7 Support',
      desc: 'Seamless deployment, certification handoff, and dedicated post-launch support to ensure ongoing success.'
    }
  ];

  // Extended FAQs if service has fewer than 5
  const defaultFaqs = [
    {
      question: `What is the delivery timeline for ${service.title}?`,
      answer: 'Initial consultation and requirements intake are completed within 24 hours. Full delivery typically ranges from 2 days to 2 weeks depending on the required documentation and complexity.'
    },
    {
      question: 'How do I start and what documents are required?',
      answer: 'Simply request a consultation or click "Talk to AVRX". Our specialist will provide an exact checklist of documents tailored to your specific application or project.'
    },
    {
      question: 'Are there any hidden charges or surprise renewal fees?',
      answer: 'No. AVRX maintains complete transparency. All government statutory fees, platform costs, and service charges are itemized and shared upfront.'
    },
    {
      question: 'Will I get a dedicated specialist or account manager?',
      answer: 'Yes! Every AVRX client is assigned a dedicated expert who provides regular updates via WhatsApp, phone, and email throughout the engagement.'
    },
    {
      question: 'How is data privacy and security handled?',
      answer: 'We enforce strict 256-bit encryption standards and adhere to strict Indian data compliance guidelines. Your personal and financial information is never shared with unauthorized third parties.'
    }
  ];

  const serviceFaqs = service.faqs && service.faqs.length >= 3 ? service.faqs : [...(service.faqs || []), ...defaultFaqs.slice(0, 6 - (service.faqs?.length || 0))];

  // Related services
  const relatedServices = allServices
    .filter(s => s.id !== service.id && s.category === service.category)
    .slice(0, 3);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setLoading(true);

    const result = await submitLeadForm({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      city: formData.city,
      location: formData.city,
      serviceCategory: `${service.title} (${catMeta.label})`,
      subject: `Service Inquiry — ${service.title} — ${formData.name}`,
      message: formData.message || `Inquiry for ${service.title}`,
      sourcePage: `/services/${serviceSlug}`,
      formType: 'Service Detail Inquiry Form',
      website_hp: formData.website_hp,
      additionalFields: {
        'Service Requested': service.title,
        'Service ID': service.id,
        'Category': service.category,
        'Budget Range': formData.budget
      }
    });

    setLoading(false);

    if (result.success) {
      setIsLeadModalOpen(false);
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
        budget: 'Standard',
        message: '',
        website_hp: ''
      });
    } else {
      setErrorMessage(result.message || 'Unable to submit request. Please try again.');
      setFeedback({
        isOpen: true,
        type: 'error',
        message: result.message
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#050811] text-white pt-28 pb-24 selection:bg-cyan-500 selection:text-slate-950">
      <SEO
        title={`${service.title} | AVRX Digital & Financial Solution`}
        description={service.shortDesc || service.fullDesc}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-24">

        {/* 1. Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400 flex-wrap">
          <button 
            onClick={() => onNavigate('home')} 
            className="hover:text-cyan-400 transition"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <button 
            onClick={() => onNavigate('services')} 
            className="hover:text-cyan-400 transition"
          >
            Services
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <button 
            onClick={() => onNavigate(catMeta.page)} 
            className={`hover:underline font-semibold ${catMeta.color}`}
          >
            {catMeta.label}
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-white font-bold truncate max-w-xs">{service.title}</span>
        </nav>

        {/* 2. Hero Section with Rich Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className={`px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${catMeta.bg} ${catMeta.color} border ${catMeta.border}`}>
                {catMeta.label}
              </span>
              {service.badge && (
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  ★ {service.badge}
                </span>
              )}
              {service.priceStarting && (
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-900 border border-slate-800 text-slate-300">
                  {service.priceStarting}
                </span>
              )}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              {service.title}
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed">
              {service.shortDesc}
            </p>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              {service.fullDesc}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={() => setIsLeadModalOpen(true)}
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 hover:brightness-110 text-slate-950 font-black text-base rounded-2xl shadow-[0_0_30px_rgba(0,240,255,0.35)] transition transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <span>Get a Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href={`https://wa.me/919876543210?text=${encodeURIComponent(`Hello AVRX, I would like to inquire about ${service.title}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 font-bold text-base rounded-2xl transition flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-5 h-5 text-emerald-400" />
                <span>WhatsApp Inquiry</span>
              </a>
            </div>

            {/* Fast Trust Indicators */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-800/80 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>100% Verified Process</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Rapid Execution</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Dedicated Expert</span>
              </div>
            </div>
          </div>

          {/* Right Hero Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/90 shadow-2xl group">
              <div className="aspect-[4/3] w-full overflow-hidden relative">
                <img
                  src={heroImage}
                  alt={service.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050811] via-transparent to-transparent opacity-90" />
              </div>

              <div className="p-6 sm:p-8 space-y-4 relative -mt-12 bg-gradient-to-b from-slate-950/80 to-slate-950 backdrop-blur-xl border-t border-slate-800/80 rounded-b-3xl">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Starting Investment</span>
                  <span className="text-lg font-black text-cyan-400">{service.priceStarting || 'Custom Assessment'}</span>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-800/60">
                  <div className="text-xs font-semibold text-slate-300">Included Highlights:</div>
                  <div className="grid grid-cols-1 gap-2 text-xs text-slate-400">
                    {service.features.slice(0, 3).map((feat, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setIsLeadModalOpen(true)}
                  className="w-full py-3 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-bold rounded-xl transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Request Callback for {service.title}</span>
                  <PhoneCall className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* 3. About This Service */}
        <section className="p-8 sm:p-12 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-6">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">Overview</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">About This Service</h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {service.fullDesc}
            </p>
          </div>

          {service.benefits && service.benefits.length > 0 && (
            <div className="pt-6 border-t border-slate-800/80">
              <h3 className="text-sm font-bold uppercase text-slate-400 tracking-wider mb-4">Key Value Delivered</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-950 border border-slate-800/80 space-y-2">
                    <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <p className="text-xs text-slate-300 font-medium leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* 4. What We Provide (Detailed Feature Cards) */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
              Capabilities & Deliverables
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              What We Provide
            </h2>
            <p className="text-slate-400 text-sm">
              Comprehensive features, technical scope, and service deliverables included with {service.title}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition group space-y-3 hover:-translate-y-1 shadow-lg"
              >
                <div className="w-10 h-10 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:border-cyan-500/30 group-hover:text-cyan-300 transition">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition">
                  {feature}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Engineered and verified according to industry best practices, compliance guidelines, and performance standards.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. 4-Step Process Section */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-slate-900/90 to-slate-950 border border-slate-800 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">Structured Roadmap</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">How It Works</h2>
            <p className="text-slate-400 text-sm">
              Our transparent 4-stage execution model ensures zero friction from discovery to final delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3 group hover:border-cyan-500/40 transition">
                <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  {step.num}
                </div>
                <h4 className="text-base font-bold text-white">{step.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Why Choose AVRX */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4">
            <Award className="w-8 h-8 text-cyan-400" />
            <h3 className="text-xl font-bold text-white">Modern 2026 Standards</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              We leverage modern technology, high-speed architectures, AI tools, and streamlined digital paperwork without outdated manual delays.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4">
            <ShieldCheck className="w-8 h-8 text-emerald-400" />
            <h3 className="text-xl font-bold text-white">100% Transparent Pricing</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              No hidden broker fees or surprise surcharges. We provide itemized cost breakdowns upfront before any project kicks off.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4">
            <TrendingUp className="w-8 h-8 text-purple-400" />
            <h3 className="text-xl font-bold text-white">End-to-End Governance</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              From business incorporation and custom software development to working capital loans and GST compliance, AVRX unites your growth stack.
            </p>
          </div>
        </section>

        {/* 7. Comprehensive FAQ Accordion */}
        <section className="space-y-8 max-w-4xl mx-auto">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
              Clear Answers
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-400 text-sm">
              Common questions regarding {service.title}, process workflows, and deliverables.
            </p>
          </div>

          <div className="space-y-4">
            {serviceFaqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-slate-900/90 border border-slate-800 overflow-hidden transition"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-800/40 transition cursor-pointer"
                  >
                    <span className="text-base font-bold text-white flex items-center gap-2.5">
                      <HelpCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{faq.question}</span>
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-cyan-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-800/60 pl-12">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* 8. Related Services Carousel */}
        {relatedServices.length > 0 && (
          <section className="space-y-6 pt-8 border-t border-slate-800/80">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">Explore More</span>
                <h3 className="text-2xl font-black text-white">Related {catMeta.label}</h3>
              </div>
              <button
                onClick={() => onNavigate(catMeta.page)}
                className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
              >
                <span>View Category</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map(rel => (
                <div
                  key={rel.id}
                  onClick={() => {
                    onNavigate('service-detail', rel.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition cursor-pointer group space-y-4 hover:-translate-y-1 shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                      {rel.badge || rel.category}
                    </span>
                    <span className="text-xs font-semibold text-cyan-400">{rel.priceStarting || 'Available'}</span>
                  </div>

                  <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition">
                    {rel.title}
                  </h4>

                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {rel.shortDesc}
                  </p>

                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold text-cyan-400">
                    <span>Explore Service</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 9. Final Bottom CTA Banner */}
        <div className="relative rounded-3xl p-8 sm:p-14 bg-gradient-to-r from-cyan-950/60 via-slate-900 to-blue-950/60 border border-cyan-500/30 overflow-hidden text-center space-y-6 shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Ready to Get Started with {service.title}?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Speak with our senior specialists today for a free technical and commercial consultation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => setIsLeadModalOpen(true)}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-black text-base rounded-2xl shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:scale-105 transition cursor-pointer"
            >
              Request a Callback
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 font-bold text-base rounded-2xl transition cursor-pointer"
            >
              Talk to AVRX
            </button>
          </div>
        </div>

      </div>

      {/* Consultation Request Modal */}
      {isLeadModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg rounded-3xl bg-slate-900 border border-slate-800 p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase text-cyan-400 tracking-wider">Fast Intake</span>
                <h3 className="text-xl font-bold text-white">Inquire for {service.title}</h3>
              </div>
              <button
                onClick={() => setIsLeadModalOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition cursor-pointer"
              >
                ✕
              </button>
            </div>

            {errorMessage && (
              <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs font-semibold">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <input
                type="text"
                name="website_hp"
                value={formData.website_hp}
                onChange={e => setFormData({ ...formData, website_hp: e.target.value })}
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300 uppercase">Your Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Full name"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300 uppercase">Mobile Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300 uppercase">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300 uppercase">City &amp; State</label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={e => setFormData({ ...formData, city: e.target.value })}
                    placeholder="e.g. Pune, Maharashtra"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300 uppercase">Budget / Scale</label>
                  <select
                    value={formData.budget}
                    onChange={e => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option value="Starter / Individual">Starter / Individual</option>
                    <option value="Growth / Standard">Growth / Standard</option>
                    <option value="Enterprise / High-Scale">Enterprise / High-Scale</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300 uppercase">Project Notes / Details</label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  placeholder={`Tell us briefly about your goals or requirements for ${service.title}...`}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-bold text-sm rounded-xl shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:brightness-110 transition flex items-center justify-center gap-2 cursor-pointer"
              >
                {loading ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Submitting Inquiry...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Consultation Request</span>
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
