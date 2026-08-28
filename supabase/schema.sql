-- ============================================================================
-- AVRX AI ASSISTANT & DIGITAL/FINANCIAL ECOSYSTEM DATABASE SCHEMA
-- Website: https://avrx.in
-- Platform: Supabase / PostgreSQL 15+
-- ============================================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. SERVICES TABLE
CREATE TABLE IF NOT EXISTS services (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    category VARCHAR(50) NOT NULL, -- 'digital', 'financial', 'tax', 'insurance'
    name VARCHAR(150) NOT NULL,
    slug VARCHAR(150) UNIQUE NOT NULL,
    icon VARCHAR(50) DEFAULT 'Globe',
    short_desc TEXT,
    full_desc TEXT,
    starting_price NUMERIC(10, 2) DEFAULT 0,
    active BOOLEAN DEFAULT TRUE,
    order_index INT DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. SERVICE PACKAGES & PRICING TABLE
CREATE TABLE IF NOT EXISTS service_packages (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    service_id UUID REFERENCES services(id) ON DELETE CASCADE,
    service_slug VARCHAR(150),
    package_name VARCHAR(150) NOT NULL,
    price NUMERIC(10, 2) NOT NULL,
    discount_price NUMERIC(10, 2),
    description TEXT,
    features JSONB DEFAULT '[]'::jsonb,
    delivery_time VARCHAR(50),
    popular BOOLEAN DEFAULT FALSE,
    active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. PORTFOLIO & SAMPLE DESIGNS TABLE
CREATE TABLE IF NOT EXISTS portfolio_samples (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    sample_id VARCHAR(50) UNIQUE NOT NULL,
    title VARCHAR(150) NOT NULL,
    category VARCHAR(50) NOT NULL, -- 'website', 'ecommerce', 'app', 'portal', 'branding'
    business_type VARCHAR(100) NOT NULL, -- 'restaurant', 'hotel', 'medical', 'coaching', 'school', 'real_estate', 'retail', 'mobile_shop', 'electronics', 'garments', 'salon', 'travel', 'finance', 'corporate', 'portfolio'
    preview_image TEXT NOT NULL,
    demo_url TEXT,
    description TEXT,
    technologies JSONB DEFAULT '[]'::jsonb,
    starting_price NUMERIC(10, 2) DEFAULT 4999,
    tags JSONB DEFAULT '[]'::jsonb,
    featured BOOLEAN DEFAULT FALSE,
    active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. LEADS TABLE
CREATE TABLE IF NOT EXISTS leads (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    lead_number VARCHAR(50) UNIQUE NOT NULL, -- e.g. 'AVRX-2026-00125'
    full_name VARCHAR(150) NOT NULL,
    business_name VARCHAR(150),
    mobile VARCHAR(20) NOT NULL,
    whatsapp VARCHAR(20),
    email VARCHAR(150),
    city VARCHAR(100),
    state VARCHAR(100),
    service_id UUID REFERENCES services(id) ON DELETE SET NULL,
    service_name VARCHAR(150) DEFAULT 'General Enquiry',
    package_id UUID REFERENCES service_packages(id) ON DELETE SET NULL,
    package_name VARCHAR(150),
    selected_sample_id VARCHAR(50),
    budget VARCHAR(50),
    requirement TEXT,
    preferred_contact VARCHAR(30) DEFAULT 'whatsapp', -- 'whatsapp', 'phone', 'email'
    source VARCHAR(50) DEFAULT 'AI Assistant', -- 'AI Assistant', 'AI Voice', 'Web Form', 'WhatsApp'
    status VARCHAR(30) DEFAULT 'new', -- 'new', 'contacted', 'qualified', 'follow_up', 'converted', 'closed', 'lost', 'human_required'
    priority VARCHAR(20) DEFAULT 'normal', -- 'low', 'normal', 'high', 'urgent'
    lead_score VARCHAR(20) DEFAULT 'WARM', -- 'HOT', 'WARM', 'COLD'
    lead_temperature INT DEFAULT 65, -- 0 to 100
    assigned_to VARCHAR(100),
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 5. LEAD DYNAMIC REQUIREMENTS TABLE
CREATE TABLE IF NOT EXISTS lead_requirements (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    lead_id UUID REFERENCES leads(id) ON DELETE CASCADE,
    requirement_key VARCHAR(100) NOT NULL, -- e.g. 'loan_amount', 'tenure', 'business_turnover', 'pages_needed', 'insurance_type'
    requirement_value TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 6. AI CONVERSATIONS TABLE
CREATE TABLE IF NOT EXISTS ai_conversations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    session_id VARCHAR(100) UNIQUE NOT NULL,
    visitor_id VARCHAR(100),
    lead_id UUID REFERENCES leads(id) ON DELETE SET NULL,
    language VARCHAR(20) DEFAULT 'hi-IN', -- 'hi-IN', 'en-US', 'hinglish'
    intent_detected VARCHAR(100),
    service_detected VARCHAR(100),
    voice_used BOOLEAN DEFAULT FALSE,
    messages_count INT DEFAULT 0,
    started_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    ended_at TIMESTAMP WITH TIME ZONE,
    status VARCHAR(30) DEFAULT 'active' -- 'active', 'completed', 'handed_off', 'abandoned'
);

-- 7. AI MESSAGES TABLE
CREATE TABLE IF NOT EXISTS ai_messages (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    conversation_id UUID REFERENCES ai_conversations(id) ON DELETE CASCADE,
    role VARCHAR(20) NOT NULL, -- 'user', 'assistant', 'system', 'action'
    message TEXT NOT NULL,
    message_type VARCHAR(20) DEFAULT 'text', -- 'text', 'voice', 'system', 'action'
    service_detected VARCHAR(100),
    payload JSONB DEFAULT '{}'::jsonb, -- structured cards (samples, packages, forms)
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 8. AI KNOWLEDGE BASE TABLE
CREATE TABLE IF NOT EXISTS ai_knowledge (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(200) NOT NULL,
    category VARCHAR(50) NOT NULL, -- 'company', 'service', 'pricing', 'faq', 'policy', 'offer', 'process', 'contact'
    content TEXT NOT NULL,
    keywords JSONB DEFAULT '[]'::jsonb,
    priority INT DEFAULT 10,
    active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 9. AI SETTINGS TABLE
CREATE TABLE IF NOT EXISTS ai_settings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    assistant_name VARCHAR(100) DEFAULT 'AVRX AI Assistant',
    greeting TEXT DEFAULT 'नमस्ते! मैं AVRX AI Assistant हूँ। आपकी क्या सहायता कर सकती हूँ?',
    default_language VARCHAR(20) DEFAULT 'auto',
    voice_enabled BOOLEAN DEFAULT TRUE,
    chat_enabled BOOLEAN DEFAULT TRUE,
    lead_collection_enabled BOOLEAN DEFAULT TRUE,
    human_handoff_enabled BOOLEAN DEFAULT TRUE,
    business_hours VARCHAR(100) DEFAULT '10:00 AM - 07:00 PM IST (Mon - Sat)',
    whatsapp_number VARCHAR(30) DEFAULT '+919630661536',
    admin_email VARCHAR(150) DEFAULT 'avinash.rai.official@gmail.com',
    phone_number VARCHAR(30) DEFAULT '+917000859994',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================================================
-- INDEXES FOR PERFORMANCE
-- ============================================================================
CREATE INDEX IF NOT EXISTS idx_services_category ON services(category);
CREATE INDEX IF NOT EXISTS idx_services_slug ON services(slug);
CREATE INDEX IF NOT EXISTS idx_packages_service ON service_packages(service_id);
CREATE INDEX IF NOT EXISTS idx_portfolio_business ON portfolio_samples(business_type);
CREATE INDEX IF NOT EXISTS idx_portfolio_category ON portfolio_samples(category);
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_score ON leads(lead_score);
CREATE INDEX IF NOT EXISTS idx_leads_created ON leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_conversations_session ON ai_conversations(session_id);
CREATE INDEX IF NOT EXISTS idx_messages_conv ON ai_messages(conversation_id);
CREATE INDEX IF NOT EXISTS idx_knowledge_cat ON ai_knowledge(category);

-- ============================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ============================================================================
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE service_packages ENABLE ROW LEVEL SECURITY;
ALTER TABLE portfolio_samples ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE lead_requirements ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_knowledge ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_settings ENABLE ROW LEVEL SECURITY;

-- Public read access for active catalog data
CREATE POLICY "Public read active services" ON services FOR SELECT USING (active = TRUE);
CREATE POLICY "Public read active packages" ON service_packages FOR SELECT USING (active = TRUE);
CREATE POLICY "Public read active samples" ON portfolio_samples FOR SELECT USING (active = TRUE);
CREATE POLICY "Public read active knowledge" ON ai_knowledge FOR SELECT USING (active = TRUE);
CREATE POLICY "Public read ai settings" ON ai_settings FOR SELECT USING (TRUE);

-- Public insert access for leads & conversations
CREATE POLICY "Public insert leads" ON leads FOR INSERT WITH CHECK (TRUE);
CREATE POLICY "Public insert lead requirements" ON lead_requirements FOR INSERT WITH CHECK (TRUE);
CREATE POLICY "Public insert conversations" ON ai_conversations FOR INSERT WITH CHECK (TRUE);
CREATE POLICY "Public update own conversation" ON ai_conversations FOR UPDATE USING (TRUE);
CREATE POLICY "Public insert messages" ON ai_messages FOR INSERT WITH CHECK (TRUE);
CREATE POLICY "Public read messages of own session" ON ai_messages FOR SELECT USING (TRUE);

-- Service role & Admin full access
CREATE POLICY "Admin full access services" ON services FOR ALL TO service_role USING (TRUE);
CREATE POLICY "Admin full access packages" ON service_packages FOR ALL TO service_role USING (TRUE);
CREATE POLICY "Admin full access portfolio" ON portfolio_samples FOR ALL TO service_role USING (TRUE);
CREATE POLICY "Admin full access leads" ON leads FOR ALL TO service_role USING (TRUE);
CREATE POLICY "Admin full access requirements" ON lead_requirements FOR ALL TO service_role USING (TRUE);
CREATE POLICY "Admin full access conversations" ON ai_conversations FOR ALL TO service_role USING (TRUE);
CREATE POLICY "Admin full access messages" ON ai_messages FOR ALL TO service_role USING (TRUE);
CREATE POLICY "Admin full access knowledge" ON ai_knowledge FOR ALL TO service_role USING (TRUE);
CREATE POLICY "Admin full access settings" ON ai_settings FOR ALL TO service_role USING (TRUE);

-- ============================================================================
-- SEED INITIAL DATA
-- ============================================================================

-- Insert default AI Settings
INSERT INTO ai_settings (id, assistant_name, greeting, default_language, voice_enabled, chat_enabled, lead_collection_enabled, human_handoff_enabled, business_hours, whatsapp_number, admin_email, phone_number)
VALUES (
    '00000000-0000-0000-0000-000000000001',
    'AVRX AI Assistant',
    'नमस्ते! मैं AVRX AI Assistant हूँ। आपकी क्या सहायता कर सकती हूँ?',
    'auto',
    TRUE,
    TRUE,
    TRUE,
    TRUE,
    '10:00 AM - 07:00 PM IST (Mon - Sat)',
    '+919630661536',
    'avinash.rai.official@gmail.com',
    '+917000859994'
) ON CONFLICT (id) DO NOTHING;

-- Insert Core Services
INSERT INTO services (id, category, name, slug, icon, short_desc, starting_price, active, order_index) VALUES
('11111111-0000-0000-0000-000000000001', 'digital', 'Website Design & Development', 'website-design', 'Globe', 'Custom responsive, SEO-ready business and corporate websites.', 4999, TRUE, 1),
('11111111-0000-0000-0000-000000000002', 'digital', 'E-commerce Solutions', 'e-commerce-solutions', 'ShoppingCart', 'High-converting online store with payment gateway & WhatsApp order checkout.', 9999, TRUE, 2),
('11111111-0000-0000-0000-000000000003', 'digital', 'Android & iOS App Development', 'app-development', 'Smartphone', 'Native and hybrid mobile applications with push notifications.', 19999, TRUE, 3),
('11111111-0000-0000-0000-000000000004', 'digital', 'Web Portal & SaaS Development', 'web-portal-development', 'LayoutGrid', 'Custom multi-tenant dashboards, CRM, and enterprise portals.', 24999, TRUE, 4),
('11111111-0000-0000-0000-000000000005', 'digital', 'Digital Marketing & Meta/Google Ads', 'digital-marketing', 'Megaphone', 'Targeted Facebook, Instagram, Google PPC, and WhatsApp funnels.', 4999, TRUE, 5),
('11111111-0000-0000-0000-000000000006', 'digital', 'SEO & Google #1 Ranking', 'seo-ranking', 'TrendingUp', 'Technical SEO, Local 3-Pack Google Maps rank, and backlinks.', 3999, TRUE, 6),
('11111111-0000-0000-0000-000000000007', 'financial', 'Personal Loan', 'personal-loan', 'UserCheck', 'Fast-track personal financing starting from 10.5% p.a. with minimal docs.', 0, TRUE, 7),
('11111111-0000-0000-0000-000000000008', 'financial', 'Business Loan & Working Capital', 'business-loan', 'Building2', 'Collateral-free MSME business loans up to ₹1 Crore for growth.', 0, TRUE, 8),
('11111111-0000-0000-0000-000000000009', 'financial', 'Govt Subsidy Loan (PMEGP / MUDRA)', 'govt-subsidy-loan', 'Award', 'Government supported subsidy schemes with up to 35% capital subsidy.', 0, TRUE, 9),
('11111111-0000-0000-0000-000000000010', 'financial', 'Property & Mortgage Loan', 'mortgage-loan', 'Home', 'Loan against residential or commercial property with up to 15 yr tenure.', 0, TRUE, 10),
('11111111-0000-0000-0000-000000000011', 'tax', 'GST Registration & Monthly Filing', 'gst-services', 'FileText', '100% online GST certificate in 3-5 days and hassle-free monthly returns.', 1499, TRUE, 11),
('11111111-0000-0000-0000-000000000012', 'tax', 'ITR Income Tax Return Filing', 'itr-filing', 'Calculator', 'Expert CA-assisted ITR filing for salaried, business, and traders.', 999, TRUE, 12),
('11111111-0000-0000-0000-000000000013', 'tax', 'Udyam MSME & Company Registration', 'company-registration', 'Briefcase', 'Official Govt Udyam certificate, Private Limited, and LLP incorporation.', 999, TRUE, 13),
('11111111-0000-0000-0000-000000000014', 'insurance', 'Comprehensive Motor Insurance', 'motor-insurance', 'Shield', 'Instant bike and car insurance renewal with zero-dep & cashless claims.', 999, TRUE, 14),
('11111111-0000-0000-0000-000000000015', 'insurance', 'Health & Family Floater Insurance', 'health-insurance', 'HeartHandshake', 'Cashless hospitalization across 10,000+ top hospitals with no room-rent cap.', 4999, TRUE, 15)
ON CONFLICT (id) DO NOTHING;

-- Insert Initial Service Packages
INSERT INTO service_packages (id, service_id, service_slug, package_name, price, discount_price, description, features, delivery_time, popular, active) VALUES
('22222222-0000-0000-0000-000000000001', '11111111-0000-0000-0000-000000000001', 'website-design', 'Starter Business Website', 4999, 7999, 'Ideal for small retail shops, clinics, tutors, and local businesses.', '["Up to 5 Mobile Responsive Pages", "1 Year Free Cloud NVMe Hosting", "Free Domain Name Connection", "Direct WhatsApp Chat Integration", "Contact & Lead Form with Email Alert", "Google Maps Location Embed", "3 Days Delivery"]'::jsonb, '3 Days', FALSE, TRUE),
('22222222-0000-0000-0000-000000000002', '11111111-0000-0000-0000-000000000001', 'website-design', 'Professional Corporate Website', 9999, 14999, 'Perfect for expanding firms, factories, schools, and professional consultants.', '["Up to 10 Custom Designed Pages", "Dynamic Admin CMS to edit text/photos", "On-Page SEO & Meta Tags Setup", "Fast Loading Core Web Vitals (90+ Score)", "SSL Certificate & DDoS Protection", "Social Media Integration", "5 Days Delivery"]'::jsonb, '5 Days', TRUE, TRUE),
('22222222-0000-0000-0000-000000000003', '11111111-0000-0000-0000-000000000002', 'e-commerce-solutions', 'E-Commerce Growth Store', 14999, 21999, 'Full online shopping store with UPI & Card payment gateway and courier sync.', '["Unlimited Product Catalog", "Razorpay / PhonePe / Paytm Gateway", "Direct WhatsApp Instant Checkout", "Shiprocket Courier Integration", "Automated Invoice PDF Generation", "Customer Account & Order Tracking", "7 Days Delivery"]'::jsonb, '7 Days', TRUE, TRUE),
('22222222-0000-0000-0000-000000000004', '11111111-0000-0000-0000-000000000005', 'digital-marketing', 'Meta & Google Ads Starter', 4999, 8999, 'High-ROAS paid campaign setup and management for lead generation.', '["Facebook & Instagram Ad Creatives", "Target Audience & Lookalike Setup", "Google High-Intent Search Ads", "Direct WhatsApp Click-to-Chat Funnel", "Weekly Performance & CPL Reports", "Dedicated Growth Strategist"]'::jsonb, 'Monthly', FALSE, TRUE),
('22222222-0000-0000-0000-000000000005', '11111111-0000-0000-0000-000000000011', 'gst-services', 'Complete GST Registration', 1499, 2499, 'Govt GSTIN certificate generation with full documentation support.', '["Govt Fee & Filing Handled", "Certificate within 3-5 Working Days", "HSN / SAC Code Consultation", "Free Invoicing Software Guidance", "1 Month Free Compliance Advisory"]'::jsonb, '3-5 Days', TRUE, TRUE)
ON CONFLICT (id) DO NOTHING;

-- Insert Portfolio / Sample Designs
INSERT INTO portfolio_samples (id, sample_id, title, category, business_type, preview_image, demo_url, description, technologies, starting_price, tags, featured, active) VALUES
('33333333-0000-0000-0000-000000000001', 'sample-garments-01', 'Royal Threads & Fashion Boutique', 'ecommerce', 'garments', 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80', 'https://avrx.in/projects/royal-threads', 'High-end apparel and garments storefront with size guides and WhatsApp ordering.', '["React", "Tailwind", "Razorpay", "WhatsApp Sync"]'::jsonb, 9999, '["Garments", "Clothing", "Fashion", "Boutique", "Shop"]'::jsonb, TRUE, TRUE),
('33333333-0000-0000-0000-000000000002', 'sample-restaurant-01', 'Saffron Spice Fine Dining & Cafe', 'website', 'restaurant', 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80', 'https://avrx.in/projects/saffron-spice', 'Digital QR menu, table reservation booking, and food ordering website.', '["Next.js", "Online Booking", "QR Menu", "Google Maps"]'::jsonb, 5999, '["Restaurant", "Cafe", "Food", "Dining", "Bakery"]'::jsonb, TRUE, TRUE),
('33333333-0000-0000-0000-000000000003', 'sample-medical-01', 'Apex Care Multispeciality Hospital & Clinic', 'website', 'medical', 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80', 'https://avrx.in/projects/apex-care', 'Doctor appointment booking, OPD schedule, and department showcases.', '["React", "Appointment Engine", "Doctor Profiles", "HIPAA Ready"]'::jsonb, 6999, '["Medical", "Hospital", "Clinic", "Doctor", "Pharmacy"]'::jsonb, TRUE, TRUE),
('33333333-0000-0000-0000-000000000004', 'sample-coaching-01', 'Target Academy Coaching & Institute', 'website', 'coaching', 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80', 'https://avrx.in/projects/target-academy', 'Online course enrollment, batch schedules, test series, and student inquiry portal.', '["React", "LMS Integration", "PDF Notes", "Testimonials"]'::jsonb, 5999, '["Coaching", "School", "Education", "Institute", "Tuition"]'::jsonb, TRUE, TRUE),
('33333333-0000-0000-0000-000000000005', 'sample-realestate-01', 'Skyline Prime Real Estate & Builders', 'website', 'real_estate', 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80', 'https://avrx.in/projects/skyline-prime', 'Property listing showcase, virtual 3D tour embeds, and direct buyer inquiries.', '["React", "Property Filter", "EMI Calculator", "Lead Capture"]'::jsonb, 8999, '["Real Estate", "Property", "Builder", "Architect", "Plots"]'::jsonb, TRUE, TRUE),
('33333333-0000-0000-0000-000000000006', 'sample-electronics-01', 'VoltMax Electronics & Mobile Hub', 'ecommerce', 'mobile_shop', 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=800&q=80', 'https://avrx.in/projects/voltmax', 'Gadget & smartphone catalog with price comparison, EMI options, and fast order.', '["Shopify/React", "Filter by Brand", "Instant WhatsApp Query"]'::jsonb, 8999, '["Mobile Shop", "Electronics", "Gadgets", "Computers", "Repair"]'::jsonb, TRUE, TRUE),
('33333333-0000-0000-0000-000000000007', 'sample-salon-01', 'Glow & Glam Luxury Salon & Spa', 'website', 'salon', 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80', 'https://avrx.in/projects/glow-glam', 'Service menu with pricing, slot booking calendar, and client review showcase.', '["React", "Slot Booking", "Instagram Feed", "WhatsApp Alerts"]'::jsonb, 4999, '["Salon", "Spa", "Beauty", "Makeup", "Barber"]'::jsonb, TRUE, TRUE),
('33333333-0000-0000-0000-000000000008', 'sample-hotel-01', 'Heritage Haven Resort & Suites', 'website', 'hotel', 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80', 'https://avrx.in/projects/heritage-haven', 'Room availability check, photo gallery, location guide, and instant booking.', '["React", "Room Booking", "Amenity Grid", "TripAdvisor Embed"]'::jsonb, 9999, '["Hotel", "Resort", "Homestay", "Travel", "Lodge"]'::jsonb, TRUE, TRUE)
ON CONFLICT (id) DO NOTHING;

-- Insert AI Knowledge Base facts
INSERT INTO ai_knowledge (title, category, content, keywords, priority, active) VALUES
('About AVRX Organization', 'company', 'AVRX Digital & Financial Solution (avrx.in) is an integrated technology and financial consulting enterprise. Headquartered in India, AVRX provides Website/App Development, Digital Marketing, SEO, Business/Personal Loans, Tax (GST/ITR), and Insurance services under one roof.', '["about avrx", "who is avrx", "avrx company", "founder", "location"]'::jsonb, 100, TRUE),
('Contact and Support Info', 'contact', 'Customer Care Phone: +91 70008 59994 | WhatsApp Support: +91 96306 61536 | Official Email: avinash.rai.official@gmail.com | Website: avrx.in | Business Hours: 10:00 AM to 7:00 PM IST (Mon - Sat).', '["contact", "phone", "whatsapp", "email", "address", "call", "helpline"]'::jsonb, 90, TRUE),
('Website Development Pricing Policy', 'pricing', 'Small Business Website starts at ₹4,999 (3 days delivery, free hosting, 5 pages). Corporate CMS Website is ₹9,999. E-Commerce Online Store starts at ₹14,999. All websites include 1 year free NVMe hosting, SSL security, and WhatsApp integration.', '["website price", "website cost", "package", "e-commerce price", "charges"]'::jsonb, 85, TRUE),
('Loan Approval Terms & Disclaimers', 'policy', 'AVRX acts as a financial facilitator connecting borrowers with top RBI-registered banks and NBFCs. We offer Personal Loans (from 10.5%), Unsecured Business Loans (up to ₹1 Cr), and Govt Subsidy Loans (PMEGP/MUDRA). NOTE: Final loan approval, rate, and sanction are strictly subject to lender credit policies and document verification. We NEVER charge upfront fees for loan approval.', '["loan approval", "loan terms", "interest rate", "guarantee", "eligibility"]'::jsonb, 95, TRUE),
('GST and Tax Return Process', 'service', 'GST Registration is completed 100% online within 3 to 5 business days for ₹1,499. Required documents: PAN Card, Aadhaar Card, Electricity Bill/Rent Agreement of business place, and Passport Photo. ITR Filing starts at ₹999.', '["gst documents", "gst price", "itr documents", "tax filing time"]'::jsonb, 80, TRUE),
('Insurance Policy Compliance', 'policy', 'AVRX assists clients with IRDAI-registered insurance providers for Motor, Health, and Property coverage. Cashless claims are available across network hospitals and garages. Final claim settlement depends on insurer underwriting.', '["insurance claim", "cashless hospital", "motor insurance renewal"]'::jsonb, 80, TRUE);
