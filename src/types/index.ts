export type CategoryType = 'digital' | 'financial' | 'tax' | 'insurance' | 'hosting' | 'ai-tools';

export interface ServiceItem {
  id: string;
  title: string;
  category: CategoryType;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  badge?: string;
  features: string[];
  benefits: string[];
  process: string[];
  whyChooseUs: string[];
  faqs?: { question: string; answer: string }[];
  popularFor?: string[];
  priceStarting?: string;
}

export interface AIToolItem {
  id: string;
  name: string;
  category: string;
  description: string;
  iconName: string;
  badge?: string;
  placeholderPrompt: string;
  inputLabel: string;
  buttonText: string;
  sampleOutputs?: string[];
}

export interface PricingPlan {
  id: string;
  name: string;
  category: 'website' | 'hosting' | 'digital';
  price: string;
  billingPeriod?: string;
  description: string;
  isPopular?: boolean;
  features: string[];
  ctaText: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  imageUrl: string;
  tags: string[];
}

export interface HealthCheckResult {
  url: string;
  performanceScore: number;
  seoScore: number;
  mobileScore: number;
  accessibilityScore: number;
  securityScore: number;
  criticalIssues: string[];
  warnings: string[];
  recommendations: string[];
  quickFixes: string[];
  summary: string;
  analyzedAt: string;
}

export interface SmartFinderResult {
  persona: string;
  needs: string[];
  recommendedServices: ServiceItem[];
  suggestedAITools: AIToolItem[];
  customMessage: string;
}

export interface PartnerFormData {
  name: string;
  mobile: string;
  email: string;
  city: string;
  occupation: string;
  interestedCategory: string;
  experienceYears: string;
  message: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  serviceCategory: string;
  specificService?: string;
  message: string;
}
