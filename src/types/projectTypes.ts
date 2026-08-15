export type ProjectCategory =
  | 'ALL'
  | 'WEBSITES'
  | 'E-COMMERCE'
  | 'CORPORATE'
  | 'MOBILE APPS'
  | 'FINTECH'
  | 'LANDING PAGES'
  | 'CUSTOM SOFTWARE'
  // Legacy aliases for backward compatibility
  | 'All Projects'
  | 'Website Design'
  | 'Corporate Websites'
  | 'App Development'
  | 'Android Apps'
  | 'iOS Apps'
  | 'Digital Marketing'
  | 'Landing Pages'
  | 'Financial Solutions';

export type ProjectType =
  | 'website'
  | 'corporate'
  | 'e-commerce'
  | 'android-app'
  | 'ios-app'
  | 'financial-portal'
  | 'custom-software'
  | 'landing-page';

export type DeviceMode = 'desktop' | 'tablet' | 'mobile';

export interface AppScreen {
  id: string;
  name: string;
  subtitle: string;
  iconName: string;
  content: {
    heroTitle?: string;
    heroSubtitle?: string;
    stats?: { label: string; value: string; change?: string }[];
    items?: {
      title: string;
      desc: string;
      tag?: string;
      amount?: string;
      status?: string;
      icon?: string;
      image?: string;
    }[];
    actions?: { label: string; primary?: boolean; variant?: string }[];
    formFields?: { label: string; placeholder: string; type: string }[];
    customNotice?: string;
  };
}

export interface WebsiteSectionData {
  hero: {
    badge: string;
    title: string;
    highlightWord: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    heroImage?: string;
    stats: { label: string; value: string }[];
  };
  navigationItems: string[];
  aboutSnippet?: {
    heading: string;
    description: string;
    points: string[];
    image?: string;
  };
  servicesOrProducts?: {
    id: string;
    title: string;
    category?: string;
    price?: string;
    rating?: string;
    desc: string;
    badge?: string;
    image?: string;
    features?: string[];
  }[];
  interactiveModule?: {
    type: 'calculator' | 'booking' | 'cart' | 'property-filter' | 'lms-courses' | 'menu-explorer' | 'compliance-audit' | 'doctor-booking';
    title: string;
    description: string;
  };
  testimonials?: {
    name: string;
    role: string;
    comment: string;
    rating: number;
    avatar?: string;
  }[];
  ctaSection: {
    heading: string;
    subheading: string;
    buttonText: string;
  };
}

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  tagline: string;
  category: ProjectCategory;
  subcategory: string;
  projectType: ProjectType;
  platform: 'Web' | 'Android' | 'iOS' | 'Cross-Platform' | 'Cloud SaaS';
  thumbnailGradient: string;
  accentColor: string;
  coverImage: string;
  mockupDesktop?: string;
  mockupMobile?: string;
  featured?: boolean;
  year: string;
  deliveryTime: string;
  rating: number;
  description: string;
  technologies: string[];
  serviceTags: string[];
  features: string[];
  metrics: { label: string; value: string; change?: string }[];
  demoUrl?: string;
  verifiedBadges: string[];
  
  // Interactive prototype data
  websiteData?: WebsiteSectionData;
  appScreens?: AppScreen[];
  
  // Custom theme hints for prototype styling
  theme: {
    bgDark: string;
    cardBg: string;
    primaryColor: string;
    secondaryColor: string;
    fontStyle?: string;
  };
}
