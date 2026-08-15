export type BlogCategory = 
  | 'Digital Solutions'
  | 'Financial Solutions'
  | 'Tax & GST'
  | 'Insurance'
  | 'Business & Startup';

export interface BlogFAQ {
  question: string;
  answer: string;
}

export interface BlogSectionItem {
  id: string;
  title: string;
  content: string;
  points?: string[];
  callout?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: BlogCategory;
  featuredImage: string;
  imageAlt: string;
  excerpt: string;
  date: string;
  isoDate: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  tags: string[];
  seoTitle: string;
  metaDescription: string;
  canonicalUrl: string;
  isFeatured?: boolean;
  isComingSoon?: boolean;
  tableOfContents?: {
    id: string;
    title: string;
  }[];
  introduction?: string[];
  whatIsSection?: {
    title: string;
    content: string[];
  };
  mainSections?: BlogSectionItem[];
  faqs?: BlogFAQ[];
  relatedSlugs?: string[];
}
