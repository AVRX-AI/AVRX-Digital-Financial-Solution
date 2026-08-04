export interface ServiceItem {
  id: string;
  title: string;
  category: 'digital' | 'financial' | 'tax' | 'insurance' | 'products' | 'ai';
  shortDesc: string;
  fullDesc: string;
  icon: string;
  features: string[];
  benefits: string[];
  pricing?: {
    starter: string;
    pro: string;
    enterprise: string;
  };
  badge?: string;
}

export interface LoanProduct {
  id: string;
  title: string;
  category: 'personal' | 'business' | 'home' | 'car' | 'mortgage' | 'property' | 'refinance' | 'education' | 'gold' | 'msme' | 'working-capital' | 'gov-scheme';
  maxAmount: string;
  interestRate: string;
  tenure: string;
  shortDesc: string;
  eligibility: string[];
  documents: string[];
  benefits: string[];
  process: string[];
  isGovScheme?: boolean;
}

export interface TaxService {
  id: string;
  title: string;
  category: 'gst' | 'itr' | 'registration' | 'accounting' | 'compliance';
  desc: string;
  turnaroundTime: string;
  documentsRequired: string[];
  feeStarting: string;
  highlights: string[];
}

export interface InsuranceProduct {
  id: string;
  title: string;
  category: 'health' | 'motor' | 'travel' | 'home' | 'shop' | 'property' | 'life' | 'corporate';
  coverageRange: string;
  claimRatio: string;
  keyBenefits: string[];
  idealFor: string;
}

export interface DigitalProduct {
  id: string;
  title: string;
  type: 'theme' | 'plugin' | 'template' | 'source-code' | 'hosting' | 'domain' | 'ssl' | 'email';
  price: string;
  desc: string;
  features: string[];
  rating: number;
  salesCount: number;
}

export interface AiTool {
  id: string;
  title: string;
  badge: 'Live Tool' | 'AI Assistant' | 'Dashboard' | 'Generator';
  desc: string;
  toolType: 'health' | 'traffic' | 'seo' | 'speed' | 'content' | 'recommendation' | 'lead';
  metrics?: { label: string; value: string; change: string }[];
}

export interface PortfolioProject {
  id: string;
  title: string;
  client: string;
  category: 'website' | 'mobile-app' | 'seo' | 'marketing' | 'branding' | 'ai';
  image: string;
  results: string;
  desc: string;
  techStack: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  outcome: string;
  stats: { label: string; value: string }[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  excerpt: string;
  content: string;
  tags: string[];
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Remote' | 'Contract';
  experience: string;
  salary: string;
  desc: string;
  responsibilities: string[];
  requirements: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'digital' | 'financial' | 'tax' | 'insurance' | 'ai';
}

export interface PricingPlan {
  id: string;
  name: string;
  category: 'website' | 'app' | 'seo' | 'maintenance' | 'ai';
  price: string;
  period: string;
  badge?: string;
  desc: string;
  features: string[];
  isPopular?: boolean;
}
