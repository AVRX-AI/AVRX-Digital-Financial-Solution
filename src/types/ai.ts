// AVRX AI Ecosystem Types

export type ServiceCategory = 'digital' | 'financial' | 'tax' | 'insurance';

export interface ServiceItem {
  id: string;
  category: ServiceCategory;
  name: string;
  slug: string;
  icon?: string;
  short_desc: string;
  full_desc?: string;
  starting_price: number;
  active: boolean;
  order_index?: number;
}

export interface ServicePackage {
  id: string;
  service_id: string;
  service_slug?: string;
  package_name: string;
  price: number;
  discount_price?: number;
  description: string;
  features: string[];
  delivery_time: string;
  popular?: boolean;
  active: boolean;
}

export type BusinessType = 
  | 'restaurant' 
  | 'hotel' 
  | 'medical' 
  | 'coaching' 
  | 'school' 
  | 'real_estate' 
  | 'retail' 
  | 'mobile_shop' 
  | 'electronics' 
  | 'garments' 
  | 'salon' 
  | 'travel' 
  | 'finance' 
  | 'corporate' 
  | 'portfolio'
  | 'ecommerce'
  | 'other';

export interface PortfolioSample {
  id: string;
  sample_id: string;
  title: string;
  category: 'website' | 'ecommerce' | 'app' | 'portal' | 'branding';
  business_type: BusinessType | string;
  preview_image: string;
  demo_url?: string;
  description: string;
  technologies: string[];
  starting_price: number;
  tags: string[];
  featured?: boolean;
  active: boolean;
}

export type LeadStatus = 
  | 'new' 
  | 'contacted' 
  | 'qualified' 
  | 'follow_up' 
  | 'converted' 
  | 'closed' 
  | 'lost' 
  | 'human_required';

export type LeadScore = 'HOT' | 'WARM' | 'COLD';
export type LeadPriority = 'low' | 'normal' | 'high' | 'urgent';

export interface LeadRequirement {
  key: string;
  label?: string;
  value: string;
}

export interface LeadItem {
  id: string;
  lead_number: string; // e.g. 'AVRX-2026-00125'
  full_name: string;
  business_name?: string;
  mobile: string;
  whatsapp?: string;
  email?: string;
  city?: string;
  state?: string;
  service_id?: string;
  service_name: string;
  package_id?: string;
  package_name?: string;
  selected_sample_id?: string;
  budget?: string;
  requirement?: string;
  preferred_contact?: 'whatsapp' | 'phone' | 'email';
  source: string; // 'AI Assistant', 'AI Voice', 'Web Form'
  status: LeadStatus;
  priority: LeadPriority;
  lead_score: LeadScore;
  lead_temperature: number; // 0 - 100
  assigned_to?: string;
  notes?: string;
  requirements_breakdown?: Record<string, string>;
  created_at: string;
  updated_at?: string;
}

export interface AIConversation {
  id: string;
  session_id: string;
  visitor_id?: string;
  lead_id?: string;
  language: string;
  intent_detected?: string;
  service_detected?: string;
  voice_used: boolean;
  messages_count: number;
  started_at: string;
  ended_at?: string;
  status: 'active' | 'completed' | 'handed_off' | 'abandoned';
}

export interface AIMessage {
  id: string;
  conversation_id?: string;
  role: 'user' | 'assistant' | 'system' | 'action';
  message: string;
  message_type?: 'text' | 'voice' | 'system' | 'action';
  service_detected?: string;
  intent_detected?: string;
  timestamp: string;
  payload?: {
    quick_options?: Array<{ label: string; action_value: string; category?: string }>;
    samples?: PortfolioSample[];
    packages?: ServicePackage[];
    lead_form_step?: string;
    navigation?: { label: string; page: string; slug?: string };
    handoff_triggered?: boolean;
    whatsapp_url?: string;
    lead_created?: {
      lead_number: string;
      full_name: string;
      service_name: string;
      package_name?: string;
    };
  };
}

export interface AIKnowledgeItem {
  id: string;
  title: string;
  category: 'company' | 'service' | 'pricing' | 'faq' | 'policy' | 'offer' | 'process' | 'contact';
  content: string;
  keywords: string[];
  priority: number;
  active: boolean;
  updated_at?: string;
}

export interface AISettings {
  id?: string;
  assistant_name: string;
  greeting: string;
  default_language: string;
  voice_enabled: boolean;
  chat_enabled: boolean;
  lead_collection_enabled: boolean;
  human_handoff_enabled: boolean;
  business_hours: string;
  whatsapp_number: string;
  admin_email: string;
  phone_number: string;
  updated_at?: string;
}

export interface AIAnalyticsSummary {
  total_conversations: number;
  today_conversations: number;
  total_leads: number;
  today_leads: number;
  website_leads: number;
  loan_leads: number;
  insurance_leads: number;
  tax_leads: number;
  conversion_rate: number;
  human_handoffs: number;
  voice_conversations: number;
  hot_leads_count: number;
  warm_leads_count: number;
  cold_leads_count: number;
}
