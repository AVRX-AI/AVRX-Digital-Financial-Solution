export type Language = 'en' | 'hi';
export type ThemeMode = 'dark' | 'light';

export type ServiceCategory = 'digital' | 'financial';

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  titleHi: string;
  category: ServiceCategory;
  slug: string;
  tagline: string;
  description: string;
  seoDescription: string;
  iconName: string; // Lucide icon name
  image: string;
  altText: string;
  features: string[];
  benefits: string[];
  estimatedTimeline: string;
  startingPrice?: string;
  faqs: ServiceFAQ[];
  relatedServiceIds: string[];
}

export interface BlogArticle {
  id: string;
  title: string;
  slug: string;
  category: 'Website Design' | 'AI' | 'SEO' | 'Digital Marketing' | 'Hosting' | 'Loans' | 'Insurance' | 'GST' | 'ITR' | 'Credit Score' | 'Business Growth' | 'Technology' | 'Finance';
  seoTitle: string;
  metaDescription: string;
  keywords: string[];
  excerpt: string;
  content: string[];
  author: string;
  date: string;
  readTimeMinutes: number;
  featuredImage: string;
  altText: string;
  faqs: ServiceFAQ[];
  internalLinks: { label: string; url: string; serviceId?: string }[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Website Projects' | 'App Projects' | 'Marketing Campaigns' | 'SEO Results' | 'Graphic Designs' | 'Financial Consultancy';
  client: string;
  metrics: string;
  description: string;
  image: string;
  altText: string;
  tags: string[];
  solution: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  text: string;
  serviceUsed: string;
}

export interface AIRecommendationResult {
  recommendedPackage: string;
  websiteType: string;
  hostingPlan: string;
  seoStrategy: string;
  marketingPlan: string;
  estimatedCost: string;
  timeline: string;
  whyThisMatches: string[];
}

export interface LoanEligibilityResult {
  eligible: boolean;
  maxLoanAmount: number;
  estimatedEmi: number;
  interestRateRange: string;
  approvalChance: 'High' | 'Moderate' | 'Needs Improvement';
  recommendations: string[];
}
