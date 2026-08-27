import React, { useState } from 'react';
import { 
  Building2, 
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
  Users, 
  Sliders, 
  Globe, 
  Clock, 
  Award, 
  TrendingUp, 
  Headphones, 
  ChevronLeft,
  ChevronRight,
  Search,
  Lock,
  RefreshCw,
  Server,
  Database,
  Key,
  Shield,
  FileSpreadsheet,
  Activity,
  CheckSquare,
  Square,
  BarChart3,
  UserCheck,
  Briefcase
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { submitLeadForm } from '../utils/formSubmit';
import { SubmissionFeedbackModal } from '../components/common/SubmissionFeedbackModal';
import { launchSoundEngine } from '../utils/launchSoundEngine';

interface WebPortalPageProps {
  onNavigate: (page: string, slug?: string) => void;
}

export const WebPortalPage: React.FC<WebPortalPageProps> = ({ onNavigate }) => {
  // Navigation helper
  const handleNav = (targetPage: string, slug?: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    onNavigate(targetPage, slug);
  };

  // State management
  const [activeTab, setActiveTab] = useState<'all' | 'customer' | 'b2b-vendor' | 'hrms' | 'saas' | 'enterprise'>('all');
  const [activeFaq, setActiveFaq] = useState<number | null>(1);
  const [activePortalIndex, setActivePortalIndex] = useState(0);
  const [simulatedRole, setSimulatedRole] = useState<'admin' | 'vendor' | 'customer'>('admin');

  // AI Portal Architecture Builder State
  const [portalTypeInput, setPortalTypeInput] = useState('B2B Distributor & Wholesaler Portal');
  const [userRolesInput, setUserRolesInput] = useState('Super Admin, Regional Distributors, Sales Reps, Retailers');
  const [securityTierInput, setSecurityTierInput] = useState('Bank-Grade 2FA + Role Based Access Control');
  const [integrationNeedsInput, setIntegrationNeedsInput] = useState('Tally/SAP Webhooks, Razorpay Invoicing, SMS Alerts');
  const [isGeneratingArchitecture, setIsGeneratingArchitecture] = useState(false);
  const [generatedPortalArchitecture, setGeneratedPortalArchitecture] = useState<any>(null);

  // Operational Efficiency & Labor Savings Calculator State
  const [teamSize, setTeamSize] = useState(35);
  const [manualHoursPerDay, setManualHoursPerDay] = useState(2.5);
  const [averageHourlyCost, setAverageHourlyCost] = useState(350);
  const [portalComplexity, setPortalComplexity] = useState<'standard' | 'multi-role' | 'enterprise'>('multi-role');

  // Lead Modal & Direct Form State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalFormPlan, setModalFormPlan] = useState('Business Multi-Role Portal (₹59,999)');
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
    portalType: 'B2B Distributor / Vendor Portal',
    budget: '₹35,000 - ₹75,000',
    details: ''
  });

  // Enterprise Tech Stack Ecosystem Marquee
  const enterpriseTechStack = [
    { name: 'React 19', tag: 'Modern Frontend', icon: '⚛️' },
    { name: 'Next.js 15', tag: 'Full-Stack Server', icon: '▲' },
    { name: 'Node.js / Express', tag: 'Backend Microservices', icon: '🟢' },
    { name: 'PostgreSQL', tag: 'Relational Cloud DB', icon: '🐘' },
    { name: 'Redis Cache', tag: 'Sub-Millisecond Speed', icon: '⚡' },
    { name: 'Docker & K8s', tag: 'Container Scalability', icon: '🐳' },
    { name: 'AWS & GCP', tag: '99.99% Uptime Cloud', icon: '☁️' },
    { name: 'Auth0 / SSO', tag: 'Enterprise Identity', icon: '🔐' },
    { name: 'GraphQL / REST', tag: 'High-Speed API', icon: '📊' },
    { name: 'Supabase', tag: 'Realtime Backend', icon: '⚡' },
    { name: 'Stripe Billing', tag: 'Subscription Invoicing', icon: '💳' },
    { name: 'SendGrid & Twilio', tag: 'Automated SMS/Email', icon: '📨' }
  ];

  // 10 Real Web Portal Models
  const portalModels = [
    {
      title: 'B2B Wholesale & Distributor Procurement Hub',
      tagline: 'Tiered Bulk Pricing, Credit Limits, Instant PO Generation & Dispatch Tracking',
      category: 'B2B Procurement',
      roles: 'Super Admin • Territory Manager • Wholesaler • Warehouse',
      delivery: '12 Days',
      badge: 'B2B Flagship',
      accentColor: 'from-purple-500 to-indigo-600',
      features: [
        'Multi-Tier Price Lists mapped per distributor geography & volume',
        'Automated Purchase Order (PO) & GST Tax Invoicing generator',
        'Credit Limit Ledger & Outstanding Balance settlement gateway',
        'Real-time Warehouse Inventory Stock Availability checks',
        'Two-Way Automated Sync with Tally ERP, SAP & Zoho Books'
      ],
      metrics: {
        efficiency: '92% Less Manual Work',
        concurrency: '10,000+ Active Users',
        sla: '99.99% Uptime SLA'
      }
    },
    {
      title: 'Customer Self-Service & Billing Dashboard',
      tagline: '24/7 Subscription Management, Ticket Helpdesk, Invoice Downloads & Usage Analytics',
      category: 'Customer Experience',
      roles: 'Account Admin • Billing Manager • Standard User',
      delivery: '10 Days',
      badge: 'High Adoption',
      accentColor: 'from-emerald-500 to-teal-600',
      features: [
        'Instant Self-Service Plan Upgrades, Downgrades & Addons',
        'Historical PDF GST Invoices with 1-Click Payment Settlement',
        'Integrated Live Ticket Support & AI Automated Helpdesk',
        'Usage Consumption Graphs & Real-Time Metering Analytics',
        'Team Member Invitations with Custom Role Permissions'
      ],
      metrics: {
        efficiency: '70% Ticket Deflection',
        concurrency: 'Sub-200ms Load',
        sla: 'Zero Downtime'
      }
    },
    {
      title: 'Enterprise Employee HRMS & Payroll Portal',
      tagline: 'Biometric Attendance Sync, Leave Workflows, Payslips & Performance Appraisals',
      category: 'Corporate HRMS',
      roles: 'HR Director • Department Head • Employee • Auditor',
      delivery: '14 Days',
      badge: 'Corporate',
      accentColor: 'from-blue-600 to-indigo-700',
      features: [
        'Automated Geofenced & Biometric Facial Attendance sync',
        'One-Click Monthly Payroll Calculation with PF/ESI/TDS Deductions',
        'Multi-Level Leave Approval Workflows with WhatsApp Alerts',
        'Encrypted Digital Document Locker (Aadhaar, PAN, Offers)',
        'Quarterly KPI & 360-Degree Appraisal Tracking Modules'
      ],
      metrics: {
        efficiency: '100% Paperless HR',
        concurrency: '5,000+ Employees',
        sla: 'ISO 27001 Ready'
      }
    },
    {
      title: 'Franchise & Multi-Branch Network Dashboard',
      tagline: 'Centralized Sales Auditing, Royalty Calculation, Inventory & Compliance Monitoring',
      category: 'Franchise Network',
      roles: 'HQ Leadership • Regional Auditor • Branch Manager • Cashier',
      delivery: '15 Days',
      badge: 'Multi-Branch',
      accentColor: 'from-amber-500 to-orange-600',
      features: [
        'Consolidated Real-Time Multi-Outlet Sales & Revenue Command View',
        'Automated Monthly Franchise Royalty Settlement & Invoicing',
        'Centralized Raw Material Supply Ordering & Dispatch Tracking',
        'Branch Compliance Checklist & Health Inspection Uploads',
        'Comparative Outlet Performance Leaderboards & P&L Analysis'
      ],
      metrics: {
        efficiency: 'Real-Time HQ Control',
        concurrency: '500+ Outlets',
        sla: '99.99% Reliability'
      }
    },
    {
      title: 'Hospital EHR, Doctor & Patient Care Portal',
      tagline: 'HIPAA/ABDM Compliant Electronic Health Records, Appointments & Digital Prescriptions',
      category: 'Healthcare & EHR',
      roles: 'Chief Medical Officer • Doctor • Nurse • Patient • Lab Technician',
      delivery: '16 Days',
      badge: 'HIPAA Compliant',
      accentColor: 'from-cyan-500 to-blue-600',
      features: [
        'ABDM-Ready Digital Patient Health Records (EHR/PHR)',
        'Doctor Smart Prescription Writer with Drug Interaction Warnings',
        'Online Diagnostic Lab Reports Sync & Patient Download Vault',
        'Automated OPD Queue Management & Bed Occupancy Dashboard',
        'Integrated Video Consultation & Telemedicine Gateway'
      ],
      metrics: {
        efficiency: 'Zero Clinical Delay',
        concurrency: 'Bank-Grade AES 256',
        sla: 'NABH/ABDM Compliant'
      }
    },
    {
      title: 'University & EdTech LMS Student Portal',
      tagline: 'Course Curriculum, Live Exam Engine, Fee Payments & Attendance Portals',
      category: 'Education & LMS',
      roles: 'Dean / Registrar • Professor • Student • Parent',
      delivery: '12 Days',
      badge: 'EdTech Scalable',
      accentColor: 'from-fuchsia-500 to-purple-600',
      features: [
        'Secure Proctored Online Examination Engine with Anti-Cheating',
        'Automated Fee Installment Collection with UPI & NetBanking',
        'Digital Assignment Submissions & Plagiarism Checking',
        'Student GPA/Grade Card Generator with QR Code Verification',
        'Parent Portal with Real-Time Attendance & Academic Alerts'
      ],
      metrics: {
        efficiency: 'Instant Grading',
        concurrency: '50,000+ Students',
        sla: '99.9% Uptime'
      }
    },
    {
      title: 'Real Estate Tenant, Owner & Asset Portal',
      tagline: 'Rent Invoicing, Maintenance Tickets, Lease Agreements & Property P&L',
      category: 'Real Estate & Assets',
      roles: 'Asset Manager • Property Owner • Tenant • Maintenance Vendor',
      delivery: '12 Days',
      badge: 'Property Asset',
      accentColor: 'from-rose-500 to-pink-600',
      features: [
        'Automated Monthly Rent Generation & Payment Gateway Links',
        'Tenant KYC Document Verification & Digital Lease Vault',
        'Maintenance Ticket Dispatching with Contractor Quotes',
        'Property Expense vs Rental Yield P&L Analytics',
        'Vacant Unit Inquiry & Virtual Tour Management'
      ],
      metrics: {
        efficiency: '98% Rent On-Time',
        concurrency: 'Sub-Second Queries',
        sla: '256-Bit SSL'
      }
    },
    {
      title: 'Multi-Tenant SaaS Management & Billing Console',
      tagline: 'Isolated Workspace DBs, Feature Flagging, Usage Metering & Stripe Subscriptions',
      category: 'SaaS Platform',
      roles: 'SaaS Super Admin • Org Owner • Workspace Admin • Member',
      delivery: '15 Days',
      badge: 'Multi-Tenant SaaS',
      accentColor: 'from-violet-500 to-indigo-700',
      features: [
        'Dynamic Multi-Tenant Database Architecture with Row-Level Security',
        'Stripe / Razorpay Recurring Subscription & Metered Billing Engine',
        'Custom Domain White-Label Mapping with Auto-Generated SSL',
        'Feature Flag Toggles & Plan Permission Matrix per Tenant',
        'Comprehensive Audit Trails & System Telemetry Logs'
      ],
      metrics: {
        efficiency: 'Infinite Tenant Scale',
        concurrency: '100,000+ API Calls/min',
        sla: '99.99% Availability'
      }
    }
  ];

  // 8 Specialized Web Portal Categories & Tiers
  const subCategories = [
    {
      id: 'customer-portal',
      title: 'Customer Self-Service Portal',
      price: '₹29,999',
      badge: 'High Demand',
      category: 'customer',
      desc: 'Empower clients with 24/7 billing access, subscription control, invoice downloads, and integrated helpdesk ticketing.',
      features: ['Client Login & Profile Dashboard', 'Automated GST Invoice Downloads', 'Support Ticket Helpdesk', 'Real-Time Notification Center', '10-12 Days Delivery']
    },
    {
      id: 'b2b-distributor',
      title: 'B2B Distributor & Wholesaler Hub',
      price: '₹39,999',
      badge: 'Revenue Driver',
      category: 'b2b-vendor',
      desc: 'Streamline large distributor orders with custom tiered pricing, credit limits, automated purchase orders, and stock visibility.',
      features: ['Tiered Distributor Price Lists', 'PO Generation & Ledger System', 'Credit Limit Management', 'Tally / ERP Sync Support', '12-14 Days Delivery']
    },
    {
      id: 'hrms-payroll',
      title: 'Corporate HRMS & Payroll Portal',
      price: '₹34,999',
      badge: 'Corporate',
      category: 'hrms',
      desc: 'All-in-one employee operations: biometric attendance sync, automated PF/ESI/TDS payroll slips, and leave management.',
      features: ['Biometric Attendance Sync', 'One-Click Payroll & Tax Slips', 'Leave Approval Workflows', 'Employee Document Locker', '12-15 Days Delivery']
    },
    {
      id: 'vendor-supplier',
      title: 'Vendor & Supplier Procurement Hub',
      price: '₹39,999',
      badge: 'Operations',
      category: 'b2b-vendor',
      desc: 'Digitize vendor onboarding, RFQ bidding, purchase order confirmations, and delivery challan reconciliation.',
      features: ['Vendor KYC & Compliance Upload', 'RFQ Bidding & Quote Comparison', 'GRN & Delivery Challan Sync', 'Bank Payment Reconciliation', '14-16 Days Delivery']
    },
    {
      id: 'franchise-portal',
      title: 'Franchise & Multi-Outlet Network',
      price: '₹44,999',
      badge: 'Multi-Location',
      category: 'enterprise',
      desc: 'Central command for multi-branch brands: real-time sales auditing, central inventory ordering, and automated royalty calculation.',
      features: ['Multi-Branch Real-Time Auditing', 'Automated Royalty Calculation', 'Central Supply Chain Orders', 'Compliance Scorecards', '15-18 Days Delivery']
    },
    {
      id: 'healthcare-portal',
      title: 'Healthcare EHR & Doctor Clinic Portal',
      price: '₹49,999',
      badge: 'HIPAA Ready',
      category: 'enterprise',
      desc: 'ABDM-compliant digital medical records, doctor consultation scheduling, digital prescription vault, and lab sync.',
      features: ['ABDM / HIPAA Compliant Records', 'Digital Prescription Engine', 'OPD / IPD Queue System', 'Lab Test & Reports Sync', '15-20 Days Delivery']
    },
    {
      id: 'saas-portal',
      title: 'Multi-Tenant SaaS Portal Architecture',
      price: '₹54,999',
      badge: 'SaaS Scalable',
      category: 'saas',
      desc: 'Enterprise multi-tenant software architecture with isolated workspaces, usage-based metered billing, and custom domains.',
      features: ['Isolated Workspace Architecture', 'Recurring Subscription Billing', 'Custom Domain Mapping', 'Feature Flag Permissions', '18-22 Days Delivery']
    },
    {
      id: 'custom-erp',
      title: 'Custom ERP & Command Dashboard',
      price: '₹69,999',
      badge: 'Enterprise',
      category: 'enterprise',
      desc: 'Bespoke operational headquarters unifying inventory, finance, logistics, HR, and custom business pipelines in one screen.',
      features: ['Custom Workflow Automation', 'Role-Based Access (RBAC)', 'Real-Time Executive BI Graphs', '256-Bit SSL & Audit Logs', '20-25 Days Delivery']
    }
  ];

  // 17 Comprehensive Categorized Web Portal FAQs
  const [faqCategory, setFaqCategory] = useState<'all' | 'security' | 'integration' | 'cost' | 'architecture' | 'ownership'>('all');
  const [faqSearchQuery, setFaqSearchQuery] = useState('');

  const portalFaqs = [
    {
      id: 1,
      category: 'security',
      categoryLabel: 'Security & RBAC',
      q: 'How does Role-Based Access Control (RBAC) work in AVRX Web Portals?',
      a: 'RBAC allows you to define granular permission tiers for different stakeholders (e.g. Super Admin, Regional Manager, Accounts Officer, Vendor, or Client). Each user only sees the exact data, menus, and actions permitted for their role. Sensitive actions (like approving large payouts or exporting customer lists) require 2FA verification and create permanent audit logs.',
      tag: 'Granular RBAC'
    },
    {
      id: 2,
      category: 'security',
      categoryLabel: 'Security & RBAC',
      q: 'Is company and financial data protected with bank-grade encryption?',
      a: 'Yes. All data in transit is encrypted using 256-bit TLS/SSL certificates, and sensitive database columns (passwords, bank accounts, tokens) are encrypted at rest using AES-256. We implement OWASP Top 10 security standards, automated SQL injection prevention, rate limiting, and daily automated cloud database backups.',
      tag: 'AES-256 Encryption'
    },
    {
      id: 3,
      category: 'integration',
      categoryLabel: 'Integrations & ERP',
      q: 'Can the web portal integrate with Tally Prime, SAP, Zoho Books, or custom ERPs?',
      a: 'Yes, 100%. We engineer robust REST and Webhook APIs that synchronize data automatically with accounting software (Tally Prime, Zoho Books, QuickBooks) and enterprise ERPs (SAP, Oracle). Invoices, purchase orders, customer ledgers, and inventory updates flow bidirectionally in real-time.',
      tag: 'Tally & SAP Sync'
    },
    {
      id: 4,
      category: 'integration',
      categoryLabel: 'Integrations & ERP',
      q: 'Can we send automated WhatsApp, SMS, and Email alerts on portal events?',
      a: 'Yes. We integrate official WhatsApp Business APIs, Twilio/SMS gateways, and SendGrid/AWS SES. When an invoice is generated, a leave request is submitted, or a purchase order is approved, relevant parties receive instant automated alerts with direct action links.',
      tag: 'WhatsApp & SMS Alerts'
    },
    {
      id: 5,
      category: 'architecture',
      categoryLabel: 'Architecture & Tech',
      q: 'What technology stack is used to ensure high speed and zero crashes under load?',
      a: 'We build enterprise web portals using modern full-stack architectures: React 19 / Next.js on the frontend, Node.js / Express or Go microservices on the backend, and high-performance PostgreSQL with Redis caching. This architecture comfortably supports tens of thousands of concurrent users with sub-200ms page response times.',
      tag: 'Next.js & PostgreSQL'
    },
    {
      id: 6,
      category: 'architecture',
      categoryLabel: 'Architecture & Tech',
      q: 'Will the web portal work smoothly on mobile smartphones and tablets?',
      a: 'Yes. Every dashboard screen, data table, and modal is engineered with responsive desktop-first and mobile-optimized layouts. Field staff, branch managers, and executives can approve requests, view live reports, and perform actions seamlessly on their smartphones.',
      tag: '100% Mobile Responsive'
    },
    {
      id: 7,
      category: 'ownership',
      categoryLabel: 'Ownership & Licenses',
      q: 'Are there any recurring per-user licensing fees charged by AVRX?',
      a: 'Zero. Unlike SaaS products that charge ₹500 to ₹2,000 per user every single month (which becomes exorbitantly expensive as your team grows), AVRX builds your portal with a one-time development fee. You can have 50 or 50,000 users with zero per-user software licensing penalties.',
      tag: '0 Per-User Fees'
    },
    {
      id: 8,
      category: 'ownership',
      categoryLabel: 'Ownership & Licenses',
      q: 'Do we get complete ownership of the portal source code and database?',
      a: 'Yes, 100%. You receive the complete Git source code, database schemas, Docker containers, and admin credentials. You have full freedom to host on your preferred cloud servers (AWS, Google Cloud, Azure, DigitalOcean) with zero vendor lock-in.',
      tag: '100% Code Ownership'
    },
    {
      id: 9,
      category: 'cost',
      categoryLabel: 'Cost & Timelines',
      q: 'What is the standard delivery timeline for an enterprise web portal?',
      a: 'A standard single-role or customer portal is completed and deployed within 10 to 12 working days. Advanced multi-role B2B portals, HRMS, and enterprise ERP ecosystems take 15 to 22 business days with structured weekly sprint reviews and milestone sign-offs.',
      tag: '10 - 15 Days Delivery'
    },
    {
      id: 10,
      category: 'cost',
      categoryLabel: 'Cost & Timelines',
      q: 'What post-launch maintenance, training, and warranty are included?',
      a: 'Every AVRX web portal project includes 3 months of comprehensive post-launch technical warranty, automated security patches, bug fixes, and interactive staff training sessions (via screen-share and recorded video tutorials) to ensure 100% team adoption.',
      tag: '3 Months Free Warranty'
    },
    {
      id: 11,
      category: 'integration',
      categoryLabel: 'Integrations & ERP',
      q: 'Can the portal generate automated GST-compliant PDF invoices and reports?',
      a: 'Yes. Every transaction, order, or billing event generates instant downloadable and printable PDF documents formatted with your legal company letterhead, GSTIN number, HSN/SAC codes, and QR codes. Custom Excel/CSV data exports are available on every tabular view.',
      tag: 'Automated GST PDF'
    },
    {
      id: 12,
      category: 'security',
      categoryLabel: 'Security & RBAC',
      q: 'Can we implement Single Sign-On (SSO) with Google Workspace or Microsoft Azure AD?',
      a: 'Yes. We support enterprise Single Sign-On (SSO) integrations using OAuth 2.0, SAML, Google Workspace, and Microsoft Azure Active Directory, enabling your corporate employees to log in securely with their official company email credentials.',
      tag: 'Google / Azure SSO'
    },
    {
      id: 13,
      category: 'architecture',
      categoryLabel: 'Architecture & Tech',
      q: 'Can we expand or add new custom modules to the portal in the future?',
      a: 'Absolutely. Our modular microservices and clean TypeScript component hierarchy allow you to effortlessly add new department modules, workflow automations, or API connections as your business operations expand.',
      tag: 'Modular Scalability'
    },
    {
      id: 14,
      category: 'cost',
      categoryLabel: 'Cost & Timelines',
      q: 'How does the payment milestone structure work for web portal projects?',
      a: 'We work on transparent milestone-based payments: 40% advance upon architecture blueprint and UI wireframe approval, 40% upon staging server demo & integration testing, and 20% final release upon production cloud deployment and staff handover.',
      tag: 'Milestone Payments'
    },
    {
      id: 15,
      category: 'security',
      categoryLabel: 'Security & RBAC',
      q: 'How are database backups and disaster recovery handled?',
      a: 'We configure automated daily encrypted snapshots of your PostgreSQL database to secure offsite cloud storage (AWS S3 / Google Cloud Storage) with point-in-time recovery (PITR), guaranteeing zero business data loss.',
      tag: 'Daily Cloud Backups'
    },
    {
      id: 16,
      category: 'architecture',
      categoryLabel: 'Architecture & Tech',
      q: 'Can we host the portal on our own private enterprise cloud server?',
      a: 'Yes. We can deploy the portal directly inside your company’s private AWS, GCP, Azure, or on-premises server infrastructure, configuring production Docker containers, SSL certificates, and Nginx reverse proxies.',
      tag: 'Private Cloud Deploy'
    },
    {
      id: 17,
      category: 'integration',
      categoryLabel: 'Integrations & ERP',
      q: 'Can we integrate online payment gateways for customer and distributor collections?',
      a: 'Yes. We integrate Razorpay, Cashfree, PayU, and Stripe. Portals support UPI Intent, NetBanking (50+ banks), Virtual Account auto-reconciliation (NEFT/RTGS), and recurring automated debit mandates (e-NACH).',
      tag: 'UPI & NetBanking Pay'
    }
  ];

  // Dynamic Calculation for Operational Labor Savings
  const annualHoursSaved = Math.round(teamSize * manualHoursPerDay * 250 * 0.75);
  const annualCostSaved = Math.round(annualHoursSaved * averageHourlyCost);

  // AI Architecture Generator Handler
  const handleGeneratePortalArchitecture = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGeneratingArchitecture(true);
    launchSoundEngine.playNotification();

    setTimeout(() => {
      let recStack = 'Next.js 15 (React 19) + Node.js Microservices + PostgreSQL';
      let recAuth = 'JWT Auth with Multi-Tier RBAC & 2FA (TOTP / SMS)';
      let estTimeline = '12 - 16 Business Days';
      let estCostTier = '₹44,999 - ₹64,999';

      if (portalTypeInput.includes('HRMS')) {
        recStack = 'React 19 + Express TypeScript + PostgreSQL + Redis';
        recAuth = 'SSO (Google Workspace / Microsoft) + Biometric Device Sync';
        estTimeline = '12 - 15 Business Days';
        estCostTier = '₹34,999 - ₹49,999';
      } else if (portalTypeInput.includes('SaaS')) {
        recStack = 'Next.js 15 Multi-Tenant + Supabase + Stripe Billing Engine';
        recAuth = 'Row-Level Security (RLS) + Custom Domain SSL Ingress';
        estTimeline = '16 - 20 Business Days';
        estCostTier = '₹54,999 - ₹79,999';
      }

      setGeneratedPortalArchitecture({
        portalType: portalTypeInput,
        rolesHierarchy: userRolesInput.split(',').map(r => r.trim()),
        recommendedStack: recStack,
        securityModel: recAuth,
        estimatedTimeline: estTimeline,
        budgetTier: estCostTier,
        coreModules: [
          'Granular Role-Based Permissions & Action Access Control',
          'Automated GST Invoicing & PDF Ledger Generation',
          'Real-time Audit Logs & Suspicious Activity Alerts',
          'Two-Way Tally / ERP Webhook Sync Architecture',
          'Sub-200ms Redis-Cached Executive BI Dashboard'
        ]
      });
      setIsGeneratingArchitecture(false);
    }, 600);
  };

  // Open Form Modal with specific plan
  const handleOpenFormWithPlan = (planName: string) => {
    setModalFormPlan(planName);
    setFormData(prev => ({
      ...prev,
      details: `Inquiring for: ${planName}. Please provide architectural blueprint, module scope, and formal quotation.`
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
        service: `Web Portal Development - ${formData.portalType}`,
        message: `Scope: ${modalFormPlan} | Budget: ${formData.budget} | Notes: ${formData.details}`
      });

      if (response.success) {
        launchSoundEngine.playSuccess();
        setFeedbackState({
          isOpen: true,
          success: true,
          title: 'Portal Blueprint Request Received!',
          message: `Thank you ${formData.name}. Our Enterprise Portal Architect will contact you within 30 minutes with a customized RBAC schema, module plan & live demo.`
        });
        setFormData({
          name: '',
          phone: '',
          email: '',
          portalType: 'B2B Distributor / Vendor Portal',
          budget: '₹35,000 - ₹75,000',
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
    <div className="min-h-screen bg-[#060713] text-slate-100 selection:bg-purple-500 selection:text-slate-950 font-sans pb-24">
      
      {/* Dynamic SEO Meta */}
      <SEO 
        title="Custom Web Portal Development | B2B Distributor, HRMS & Customer Portals | AVRX"
        description="Build secure, role-based cloud web portals with AVRX. Customer self-service, B2B vendor hubs, HRMS payroll, and multi-tenant SaaS dashboards with 100% source code ownership and zero per-user licensing fees."
        keywords="web portal development, b2b portal developer, hrms portal, customer self service portal, vendor portal, custom erp development, enterprise web application india"
      />

      {/* 1. TOP BREADCRUMB & STATUS BAR */}
      <div className="border-b border-purple-950/60 bg-slate-950/70 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 py-3 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-slate-400 overflow-x-auto whitespace-nowrap">
            <button onClick={() => handleNav('home')} className="hover:text-purple-400 transition-colors">Home</button>
            <span>/</span>
            <button onClick={() => handleNav('digital-solutions')} className="hover:text-purple-400 transition-colors">Digital Solutions</button>
            <span>/</span>
            <span className="text-purple-400 font-semibold">Web Portal Development</span>
          </div>
          
          <div className="hidden sm:flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 font-medium">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
              <span>Zero Per-User Licensing Fees • 100% Code Ownership</span>
            </div>
            <a 
              href="https://wa.me/919999999999?text=Hello%20AVRX,%20I%20want%20to%20develop%20an%20Enterprise%20Web%20Portal"
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Enterprise Architect</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. DYNAMIC ENTERPRISE HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 px-4 sm:px-6 lg:px-10 xl:px-12">
        {/* Glowing Background Mesh */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-gradient-to-tr from-purple-600/20 via-indigo-600/20 to-emerald-600/15 blur-[140px] pointer-events-none -z-10 rounded-full"></div>

        <div className="max-w-[1720px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Value Prop & Metrics */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-purple-500/10 via-indigo-500/10 to-emerald-500/10 border border-purple-500/30 text-purple-300 text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
              <ShieldCheck className="w-4 h-4 text-purple-400" />
              <span>ENTERPRISE-GRADE WEB PORTALS &amp; DASHBOARDS 2026</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
              Digitize Workflows with{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-300 to-emerald-400">
                Custom Web Portals
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              We design and engineer bespoke B2B distributor hubs, customer self-service portals, employee HRMS systems, and multi-tenant SaaS consoles. Built with granular RBAC, bank-grade encryption, Tally/ERP sync, and zero per-user software licensing penalties.
            </p>

            {/* Live Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2">
              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-purple-950/80 text-center space-y-0.5">
                <div className="text-xl sm:text-2xl font-black text-purple-400">0%</div>
                <div className="text-[11px] text-slate-400 font-medium">Per-User Fees</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-purple-950/80 text-center space-y-0.5">
                <div className="text-xl sm:text-2xl font-black text-indigo-400">256-Bit</div>
                <div className="text-[11px] text-slate-400 font-medium">SSL Encryption</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-purple-950/80 text-center space-y-0.5">
                <div className="text-xl sm:text-2xl font-black text-emerald-400">99.99%</div>
                <div className="text-[11px] text-slate-400 font-medium">Cloud SLA Uptime</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-purple-950/80 text-center space-y-0.5">
                <div className="text-xl sm:text-2xl font-black text-amber-400">10–15</div>
                <div className="text-[11px] text-slate-400 font-medium">Days Live Delivery</div>
              </div>
            </div>

            {/* Action CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => handleOpenFormWithPlan('Custom Web Portal Consultation')}
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-gradient-to-r from-purple-500 via-indigo-500 to-emerald-500 text-slate-950 font-black text-sm hover:brightness-110 active:scale-95 transition-all shadow-[0_0_30px_rgba(168,85,247,0.3)] flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Get Free Portal Architecture &amp; Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#portal-calculator"
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-slate-200 font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sliders className="w-4 h-4 text-purple-400" />
                <span>Calculate Labor Cost Savings</span>
              </a>
            </div>

            {/* Feature Compliance Trust Badges */}
            <div className="flex items-center justify-center lg:justify-start gap-6 pt-2 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <Lock className="w-4 h-4 text-purple-400" />
                <span>Granular RBAC Security</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Database className="w-4 h-4 text-indigo-400" />
                <span>Tally &amp; SAP Sync Ready</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-emerald-400" />
                <span>Full Source Code Ownership</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Enterprise Portal Dashboard Simulator */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-slate-900/90 border border-purple-500/40 p-5 sm:p-6 shadow-2xl space-y-4 relative overflow-hidden backdrop-blur-xl">
              
              {/* Simulator Top Nav Bar */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  <span className="text-xs font-mono text-slate-400 ml-2">portal.avrxenterprise.com</span>
                </div>

                {/* Role Switcher */}
                <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800 text-[10px]">
                  {(['admin', 'vendor', 'customer'] as const).map((r) => (
                    <button
                      key={r}
                      onClick={() => setSimulatedRole(r)}
                      className={`px-2 py-0.5 rounded-lg font-bold capitalize transition-colors ${
                        simulatedRole === r ? 'bg-purple-500 text-slate-950' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dynamic View based on simulatedRole */}
              {simulatedRole === 'admin' && (
                <div className="space-y-3 text-xs animate-in fade-in duration-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-purple-400 font-bold uppercase">Executive HQ Console</span>
                      <h4 className="text-sm font-extrabold text-white">Central Operations Overview</h4>
                    </div>
                    <span className="text-[10px] font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                      ● 99.99% Live
                    </span>
                  </div>

                  {/* 3 Metric Cards */}
                  <div className="grid grid-cols-3 gap-2">
                    <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                      <div className="text-[10px] text-slate-400">Total B2B Billing</div>
                      <div className="text-sm font-black text-purple-400">₹48.6 Lakh</div>
                      <div className="text-[9px] text-emerald-400 font-medium">↑ +24% MoM</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                      <div className="text-[10px] text-slate-400">Active Portals</div>
                      <div className="text-sm font-black text-indigo-400">142 Outlets</div>
                      <div className="text-[9px] text-slate-400">100% Synced</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                      <div className="text-[10px] text-slate-400">Pending POs</div>
                      <div className="text-sm font-black text-amber-400">18 Orders</div>
                      <div className="text-[9px] text-amber-400">Action Required</div>
                    </div>
                  </div>

                  {/* Audit Logs Table */}
                  <div className="space-y-1.5 pt-1">
                    <div className="text-[11px] font-bold text-slate-300 flex items-center justify-between">
                      <span>Real-Time Audit Trail &amp; Approvals</span>
                      <span className="text-[9px] text-purple-400 font-mono">Live Stream</span>
                    </div>

                    <div className="space-y-1 bg-slate-950/80 p-2.5 rounded-xl border border-slate-800 text-[10px]">
                      <div className="flex items-center justify-between text-slate-300">
                        <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-emerald-400" /> Apex Dist. PO #8492</span>
                        <span className="text-emerald-400 font-bold">₹1,85,000 (Approved)</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-400">
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-amber-400" /> BioMed Supplies KYC</span>
                        <span className="text-amber-400 font-medium">Pending Review</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-400">
                        <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3 text-purple-400" /> Tally ERP Auto-Sync</span>
                        <span className="text-slate-400 font-mono">0.12s ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {simulatedRole === 'vendor' && (
                <div className="space-y-3 text-xs animate-in fade-in duration-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-emerald-400 font-bold uppercase">Vendor Procurement Portal</span>
                      <h4 className="text-sm font-extrabold text-white">Apex Industrial Supplies</h4>
                    </div>
                    <span className="text-[10px] font-mono bg-purple-500/10 text-purple-300 px-2 py-0.5 rounded">
                      Verified Supplier
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                      <div className="text-[10px] text-slate-400">Approved Purchase Orders</div>
                      <div className="text-sm font-black text-emerald-400">12 Active POs</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                      <div className="text-[10px] text-slate-400">Pending Settlements</div>
                      <div className="text-sm font-black text-amber-400">₹3,40,000</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950 border border-emerald-500/30 space-y-1.5">
                    <div className="flex items-center justify-between text-[11px] font-bold">
                      <span>Dispatch Challan Upload</span>
                      <span className="text-emerald-400 text-[10px]">1-Click GRN</span>
                    </div>
                    <div className="text-[10px] text-slate-400">Upload signed e-way bill &amp; tax invoice for instant payment clearance.</div>
                  </div>
                </div>
              )}

              {simulatedRole === 'customer' && (
                <div className="space-y-3 text-xs animate-in fade-in duration-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-indigo-400 font-bold uppercase">Client Self-Service Dashboard</span>
                      <h4 className="text-sm font-extrabold text-white">Enterprise Cloud Plan</h4>
                    </div>
                    <span className="text-[10px] font-mono bg-emerald-500/10 text-emerald-300 px-2 py-0.5 rounded">
                      Active
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="text-[11px] font-bold text-white">Latest GST Tax Invoice #INV-2026-89</div>
                      <div className="text-[9px] text-slate-400">Generated on 1st of this month • Paid via UPI</div>
                    </div>
                    <button className="px-2.5 py-1 rounded-lg bg-purple-500 text-slate-950 font-bold text-[10px]">
                      Download PDF
                    </button>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950 border border-indigo-500/30 flex items-center justify-between">
                    <div>
                      <div className="text-[11px] font-bold text-white">24/7 Dedicated Priority Helpdesk</div>
                      <div className="text-[9px] text-slate-400">Avg Resolution Time: 12 Minutes</div>
                    </div>
                    <span className="text-[10px] font-bold text-indigo-400">Raise Ticket</span>
                  </div>
                </div>
              )}

              {/* Bottom Security Footer */}
              <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                <span>🔐 RBAC Multi-Tier Active</span>
                <span>⚡ Sub-180ms DB Latency</span>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 3. ENTERPRISE TECH ECOSYSTEM MARQUEE SCROLL */}
      <section className="py-8 bg-slate-950 border-y border-slate-900 overflow-hidden">
        <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 mb-4 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
            ENTERPRISE FULL-STACK &amp; CLOUD DATABASE ECOSYSTEM
          </span>
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="flex gap-4 animate-marquee whitespace-nowrap will-change-transform py-2">
            {[...enterpriseTechStack, ...enterpriseTechStack].map((tech, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800/90 text-xs font-bold text-slate-200 shrink-0 shadow-sm hover:border-purple-500/50 hover:bg-slate-800 transition-colors"
              >
                <span className="text-base">{tech.icon}</span>
                <span className="font-extrabold text-white">{tech.name}</span>
                <span className="text-[10px] text-slate-400 font-mono bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                  {tech.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE PORTAL SHOWCASE CAROUSEL (10 REAL ARCHITECTURES) */}
      <section className="py-20 px-4 sm:px-6 lg:px-10 xl:px-12 max-w-[1720px] mx-auto space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold">
            <Building2 className="w-3.5 h-3.5" />
            <span>PROVEN PORTAL ARCHITECTURES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Explore 10 Specialized{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-300">
              Web Portal Solutions
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            From B2B wholesale hubs to HRMS operations and healthcare portals, explore how AVRX automates enterprise complexity.
          </p>
        </div>

        {/* Interactive Model Display Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900/70 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3 flex-wrap">
              <span className={`text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full text-white bg-gradient-to-r ${portalModels[activePortalIndex].accentColor}`}>
                {portalModels[activePortalIndex].badge}
              </span>
              <span className="text-xs font-bold text-purple-400 bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-full">
                {portalModels[activePortalIndex].category}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                Delivery: {portalModels[activePortalIndex].delivery}
              </span>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {portalModels[activePortalIndex].title}
              </h3>
              <p className="text-sm text-purple-300 font-medium mt-1">
                {portalModels[activePortalIndex].tagline}
              </p>
            </div>

            {/* Roles Covered */}
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs">
              <span className="text-slate-400 font-medium block mb-1">User Roles Hierarchy:</span>
              <span className="font-bold text-slate-200">{portalModels[activePortalIndex].roles}</span>
            </div>

            {/* Features Checklist */}
            <div className="space-y-2.5">
              {portalModels[activePortalIndex].features.map((feat, fIdx) => (
                <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Performance Badges */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
                <div className="text-xs sm:text-sm font-bold text-white">{portalModels[activePortalIndex].metrics.efficiency}</div>
                <div className="text-[10px] text-slate-400">Automation Rate</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
                <div className="text-xs sm:text-sm font-bold text-purple-400">{portalModels[activePortalIndex].metrics.concurrency}</div>
                <div className="text-[10px] text-slate-400">Capacity</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
                <div className="text-xs sm:text-sm font-bold text-emerald-400">{portalModels[activePortalIndex].metrics.sla}</div>
                <div className="text-[10px] text-slate-400">SLA Guarantee</div>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <button
                onClick={() => handleOpenFormWithPlan(`Portal Architecture: ${portalModels[activePortalIndex].title}`)}
                className="px-6 py-3 rounded-xl bg-purple-500 hover:bg-purple-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md flex items-center gap-2 cursor-pointer"
              >
                <span>Deploy This Portal Model</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActivePortalIndex((prev) => (prev > 0 ? prev - 1 : portalModels.length - 1))}
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
                  aria-label="Previous portal model"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono text-slate-400">
                  {activePortalIndex + 1} / {portalModels.length}
                </span>
                <button
                  onClick={() => setActivePortalIndex((prev) => (prev < portalModels.length - 1 ? prev + 1 : 0))}
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
                  aria-label="Next portal model"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

          {/* Visual Showcase Thumbnail Bar */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3 max-h-[420px] overflow-y-auto pr-1 scrollbar-none">
            {portalModels.map((model, mIdx) => {
              const isSelected = activePortalIndex === mIdx;
              return (
                <button
                  key={mIdx}
                  onClick={() => setActivePortalIndex(mIdx)}
                  className={`p-3.5 rounded-2xl text-left transition-all border ${
                    isSelected
                      ? 'bg-purple-500/15 border-purple-500/80 shadow-[0_0_15px_rgba(168,85,247,0.15)]'
                      : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700'
                  }`}
                >
                  <div className="text-[10px] font-mono text-purple-400 font-bold uppercase">{model.category}</div>
                  <div className="text-xs font-bold text-white truncate mt-1">{model.title}</div>
                  <div className="text-[10px] text-slate-400 mt-1">{model.delivery} Delivery</div>
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. 8 SPECIALIZED WEB PORTAL TIERS */}
      <section className="py-16 px-4 sm:px-6 lg:px-10 xl:px-12 max-w-[1720px] mx-auto space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
            <Layers className="w-3.5 h-3.5" />
            <span>PORTAL TIERS &amp; CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Specialized Portal Tiers Built for Growth
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            From single-tenant customer portals to complex enterprise multi-branch networks, choose your ideal operational baseline.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {[
            { id: 'all', label: 'All Portals' },
            { id: 'customer', label: 'Customer Self-Service' },
            { id: 'b2b-vendor', label: 'B2B & Vendor Hub' },
            { id: 'hrms', label: 'HRMS & Payroll' },
            { id: 'saas', label: 'Multi-Tenant SaaS' },
            { id: 'enterprise', label: 'Enterprise & ERP' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-purple-500 text-slate-950 shadow-[0_0_15px_rgba(168,85,247,0.3)] font-extrabold'
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
                className="rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-purple-500/50 p-6 flex flex-col justify-between space-y-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(168,85,247,0.08)] group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/20 text-purple-300">
                      {item.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-400">Starting</span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                    {item.title}
                  </h3>

                  <div className="text-2xl font-black text-purple-400">
                    {item.price}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                    {item.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-[11px] text-slate-300">
                        <Check className="w-3 h-3 text-purple-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleOpenFormWithPlan(`Tier: ${item.title} (${item.price})`)}
                  className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-purple-500 hover:text-slate-950 text-slate-200 font-bold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <span>Build This Portal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
        </div>
      </section>

      {/* 6. INTERACTIVE AI TOOLS & LABOR SAVINGS CALCULATOR */}
      <section id="portal-calculator" className="py-20 px-4 sm:px-6 lg:px-10 xl:px-12 max-w-[1720px] mx-auto space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
            <Cpu className="w-3.5 h-3.5" />
            <span>AI ARCHITECT &amp; ROI CALCULATOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Map Architecture &amp; Calculate Operational Cost Savings
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Auto-generate role permissions and calculate how much labor time and paper costs your organization will save.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Tool 1: AI Portal Architecture & RBAC Generator (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-purple-500/20 text-purple-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">AI RBAC &amp; Architecture Recommender</h3>
                  <p className="text-xs text-slate-400">Auto-map role hierarchies, database security &amp; API triggers</p>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20">
                Gemini Engine
              </span>
            </div>

            <form onSubmit={handleGeneratePortalArchitecture} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">Portal Classification</label>
                  <select
                    value={portalTypeInput}
                    onChange={(e) => setPortalTypeInput(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-purple-500"
                  >
                    <option value="B2B Distributor & Wholesaler Portal">B2B Distributor &amp; Wholesaler Hub</option>
                    <option value="Customer Self-Service & Billing">Customer Self-Service &amp; Billing</option>
                    <option value="Corporate HRMS & Payroll Portal">Corporate HRMS &amp; Payroll Portal</option>
                    <option value="Vendor & Supplier Procurement Hub">Vendor &amp; Supplier Procurement Hub</option>
                    <option value="Franchise & Multi-Branch Network">Franchise &amp; Multi-Branch Network</option>
                    <option value="Multi-Tenant SaaS Portal Architecture">Multi-Tenant SaaS Portal Architecture</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">Security Standard</label>
                  <select
                    value={securityTierInput}
                    onChange={(e) => setSecurityTierInput(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-purple-500"
                  >
                    <option value="Bank-Grade 2FA + Role Based Access Control">Bank-Grade 2FA + RBAC</option>
                    <option value="Corporate SSO (Google / Azure AD)">Corporate SSO (Google / Azure AD)</option>
                    <option value="Multi-Tenant Row-Level Security">Multi-Tenant Row-Level Security</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300">User Roles &amp; Stakeholders (Comma separated)</label>
                <input
                  type="text"
                  value={userRolesInput}
                  onChange={(e) => setUserRolesInput(e.target.value)}
                  placeholder="e.g. Super Admin, Territory Manager, Wholesaler, Warehouse"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-purple-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300">External Integrations Required</label>
                <input
                  type="text"
                  value={integrationNeedsInput}
                  onChange={(e) => setIntegrationNeedsInput(e.target.value)}
                  placeholder="e.g. Tally Prime Webhooks, Razorpay Invoicing, WhatsApp SMS Alerts"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-purple-500"
                />
              </div>

              <button
                type="submit"
                disabled={isGeneratingArchitecture}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 via-indigo-500 to-emerald-500 hover:brightness-110 text-slate-950 font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:opacity-50"
              >
                {isGeneratingArchitecture ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Mapping Security Architecture...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Generate AI Portal RBAC &amp; Tech Blueprint</span>
                  </>
                )}
              </button>
            </form>

            {/* Generated Output Card */}
            {generatedPortalArchitecture && (
              <div className="mt-4 p-5 rounded-2xl bg-slate-950 border border-purple-500/40 space-y-4 animate-in fade-in duration-300">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-bold text-purple-400 uppercase">Recommended Architecture</span>
                    <h4 className="text-sm font-extrabold text-white">{generatedPortalArchitecture.recommendedStack}</h4>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-400 block">Est. Investment</span>
                    <span className="text-xs font-bold text-emerald-400">{generatedPortalArchitecture.budgetTier}</span>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <span className="text-[11px] font-bold text-purple-300 block">Mapped User Roles Hierarchy:</span>
                  <div className="flex items-center gap-2 flex-wrap">
                    {generatedPortalArchitecture.rolesHierarchy.map((role: string, rIdx: number) => (
                      <span key={rIdx} className="px-2.5 py-1 rounded-lg bg-slate-900 border border-purple-500/30 text-[11px] font-bold text-slate-200">
                        🛡️ {role}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <span className="text-[11px] font-bold text-purple-300 block">Key Architecture Modules:</span>
                  <div className="space-y-1">
                    {generatedPortalArchitecture.coreModules.map((hl: string, hIdx: number) => (
                      <div key={hIdx} className="flex items-center gap-2 text-[11px] text-slate-300">
                        <Check className="w-3 h-3 text-purple-400 shrink-0" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleOpenFormWithPlan(`AI Blueprint: ${generatedPortalArchitecture.recommendedStack} (${generatedPortalArchitecture.budgetTier})`)}
                  className="w-full py-2.5 rounded-xl bg-purple-500 hover:bg-purple-400 text-slate-950 font-bold text-xs transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Claim Free Technical Specification Blueprint</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

          </div>

          {/* Tool 2: Labor Cost & Operational Savings Calculator (5 cols) */}
          <div className="lg:col-span-5 rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 space-y-6 shadow-xl flex flex-col justify-between">
            <div className="space-y-1 border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2">
                <Sliders className="w-5 h-5 text-emerald-400" />
                <h3 className="text-base font-bold text-white">Labor Cost &amp; Hours Saved Calculator</h3>
              </div>
              <p className="text-xs text-slate-400">See direct financial ROI from digitizing manual paperwork</p>
            </div>

            {/* Slider 1: Team / Stakeholder Size */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="text-slate-300">Total Staff / Distributor Count:</span>
                <span className="text-purple-400 font-mono">{teamSize} Members</span>
              </div>
              <input
                type="range"
                min="5"
                max="250"
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                className="w-full accent-purple-500 cursor-pointer"
              />
            </div>

            {/* Slider 2: Manual Hours per Day */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="text-slate-300">Hours Spent on Manual Coordination/Day:</span>
                <span className="text-indigo-400 font-mono">{manualHoursPerDay} Hours / person</span>
              </div>
              <input
                type="range"
                min="1"
                max="6"
                step="0.5"
                value={manualHoursPerDay}
                onChange={(e) => setManualHoursPerDay(Number(e.target.value))}
                className="w-full accent-indigo-500 cursor-pointer"
              />
            </div>

            {/* Slider 3: Average Hourly Cost */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="text-slate-300">Average Hourly Employee Cost:</span>
                <span className="text-emerald-400 font-mono">₹{averageHourlyCost} / hr</span>
              </div>
              <input
                type="range"
                min="150"
                max="1000"
                step="50"
                value={averageHourlyCost}
                onChange={(e) => setAverageHourlyCost(Number(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer"
              />
            </div>

            {/* Calculated Output Box */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-emerald-500/40 text-center space-y-2">
              <div className="text-xs text-slate-400">Projected Annual Cost Saved</div>
              <div className="text-3xl font-black text-emerald-400">
                ₹{annualCostSaved.toLocaleString('en-IN')}
              </div>
              <div className="text-xs text-purple-300 font-medium">
                ⚡ ~{annualHoursSaved.toLocaleString('en-IN')} Productive Labor Hours Recovered / Year
              </div>
            </div>

            <button
              onClick={() => handleOpenFormWithPlan(`ROI Projection: Saving ₹${annualCostSaved.toLocaleString('en-IN')}/yr for ${teamSize} staff`)}
              className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
            >
              <span>Digitize Operations &amp; Save Costs</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

        </div>
      </section>

      {/* 7. TRANSPARENT PRICING PACKAGES */}
      <section className="py-16 px-4 sm:px-6 lg:px-10 xl:px-12 max-w-[1720px] mx-auto space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
            <Award className="w-3.5 h-3.5" />
            <span>TRANSPARENT PORTAL PRICING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Fixed Investment, Unlimited Users &amp; Zero Lock-In
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Never pay per-seat SaaS subscription penalties again. Own your portal outright.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Plan 1: Standard Portal */}
          <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-8 flex flex-col justify-between space-y-6 hover:border-slate-700 transition-colors">
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">Starter Tier</span>
                <h3 className="text-2xl font-black text-white">Standard Web Portal</h3>
                <p className="text-xs text-slate-400">Customer self-service or single-role dashboard</p>
              </div>

              <div className="text-3xl font-black text-white">
                ₹34,999
                <span className="text-xs font-normal text-slate-400"> / one-time</span>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-slate-800 text-xs text-slate-300">
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-400" /><span>2 User Roles (Admin + Client)</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-400" /><span>Unlimited User Accounts</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-400" /><span>Automated PDF Invoicing &amp; Downloads</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-400" /><span>1-Click Payment Gateway Integration</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-400" /><span>Support Ticket Helpdesk Module</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-400" /><span>100% Full Source Code Handover</span></div>
              </div>
            </div>

            <button
              onClick={() => handleOpenFormWithPlan('Standard Web Portal (₹34,999)')}
              className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-colors cursor-pointer"
            >
              Choose Standard Portal
            </button>
          </div>

          {/* Plan 2: Business Multi-Role Portal (Popular) */}
          <div className="rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border-2 border-purple-500 p-8 flex flex-col justify-between space-y-6 relative shadow-[0_0_40px_rgba(168,85,247,0.15)]">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 text-slate-950 font-black text-[11px] uppercase tracking-wider shadow-md">
              ⭐ Most Popular Choice
            </div>

            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">Business Tier</span>
                <h3 className="text-2xl font-black text-white">Multi-Role Business Hub</h3>
                <p className="text-xs text-slate-400">B2B distributors, HRMS payroll, or vendor procurement</p>
              </div>

              <div className="text-3xl font-black text-purple-400">
                ₹59,999
                <span className="text-xs font-normal text-slate-400"> / one-time</span>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-slate-800 text-xs text-slate-200">
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-400" /><span>Up to 5 Granular User Roles &amp; Permissions</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-400" /><span>Two-Factor Authentication (2FA) Security</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-400" /><span>Tally / ERP Accounting Sync Webhooks</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-400" /><span>WhatsApp &amp; SMS Automated Notification Hooks</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-400" /><span>Permanent Audit Trails &amp; Action Logs</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-400" /><span>3 Months Post-Launch Support &amp; Training</span></div>
              </div>
            </div>

            <button
              onClick={() => handleOpenFormWithPlan('Multi-Role Business Hub (₹59,999)')}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 hover:brightness-110 text-slate-950 font-black text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
            >
              Launch Business Hub
            </button>
          </div>

          {/* Plan 3: Enterprise Scale Cloud Portal */}
          <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-8 flex flex-col justify-between space-y-6 hover:border-slate-700 transition-colors">
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Enterprise Scale</span>
                <h3 className="text-2xl font-black text-white">Custom Cloud ERP Suite</h3>
                <p className="text-xs text-slate-400">Franchise networks, multi-tenant SaaS, or custom ERP</p>
              </div>

              <div className="text-3xl font-black text-white">
                ₹99,999+
                <span className="text-xs font-normal text-slate-400"> / custom scope</span>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-slate-800 text-xs text-slate-300">
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-400" /><span>Unlimited Roles &amp; Complex Workflow Hierarchy</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-400" /><span>Multi-Tenant Architecture / Isolated DBs</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-400" /><span>SAP / Oracle / Custom API Integration</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-400" /><span>High-Availability Cloud Kubernetes Cluster</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-400" /><span>Dedicated Solution Architect &amp; SLA Support</span></div>
              </div>
            </div>

            <button
              onClick={() => handleOpenFormWithPlan('Custom Cloud ERP Suite (₹99,999+)')}
              className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-colors cursor-pointer"
            >
              Consult Enterprise Architect
            </button>
          </div>

        </div>
      </section>

      {/* 8. 5-STAGE PORTAL ENGINEERING ROADMAP */}
      <section className="py-16 px-4 sm:px-6 lg:px-10 xl:px-12 max-w-[1720px] mx-auto space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold">
            <Clock className="w-3.5 h-3.5" />
            <span>ENTERPRISE SPRINT METHODOLOGY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How We Engineer Your Web Portal
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Structured 5-stage sprint execution ensuring security compliance, zero data loss, and seamless staff training.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            {
              step: '01',
              title: 'Role & Flow Mapping',
              desc: 'Mapping all department roles, approval hierarchies, and database schema relationships.'
            },
            {
              step: '02',
              title: 'Security Blueprint',
              desc: 'Architecting RBAC rules, 2FA, JWT token sessions, and API encryption layers.'
            },
            {
              step: '03',
              title: 'Full-Stack Sprints',
              desc: 'Constructing high-speed React/Next.js frontend dashboards and Node.js microservices.'
            },
            {
              step: '04',
              title: 'Integrations & QA',
              desc: 'Testing Tally/SAP sync, payment gateways, automated PDF generation, and load testing.'
            },
            {
              step: '05',
              title: 'Cloud Launch & Handover',
              desc: 'Production deployment, SSL configuration, full source code delivery, and staff training.'
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-2.5 relative hover:border-purple-500/50 transition-colors"
            >
              <div className="text-2xl font-black text-purple-400/30 font-mono">{item.step}</div>
              <h3 className="text-sm font-bold text-white">{item.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. EXTENSIVE KNOWLEDGE BASE & FAQS (STRETCHED 2-COLUMN FULL-WIDTH GRID) */}
      <section className="py-20 px-4 sm:px-6 lg:px-10 xl:px-12 max-w-[1720px] mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs sm:text-sm font-semibold shadow-sm">
            <HelpCircle className="w-4 h-4 text-purple-400" />
            <span>KNOWLEDGE BASE &amp; FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Everything You Need to Know About{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-300 to-emerald-400">
              AVRX Web Portals
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Transparent answers regarding RBAC security, zero per-user licensing fees, Tally/ERP sync, 256-bit encryption, and 100% source code ownership.
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
              placeholder="Search questions (e.g. RBAC, Tally, Encryption, Per-User Fees, Source Code, SSO)..."
              className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-purple-500/80 focus:ring-2 focus:ring-purple-500/20 shadow-inner"
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
              { id: 'all', label: 'All Questions', count: portalFaqs.length },
              { id: 'security', label: '🔐 Security & RBAC', count: portalFaqs.filter(f => f.category === 'security').length },
              { id: 'integration', label: '🔌 Integrations & ERP', count: portalFaqs.filter(f => f.category === 'integration').length },
              { id: 'architecture', label: '⚡ Tech & Architecture', count: portalFaqs.filter(f => f.category === 'architecture').length },
              { id: 'ownership', label: '📜 Ownership & Licenses', count: portalFaqs.filter(f => f.category === 'ownership').length },
              { id: 'cost', label: '💰 Cost & Timelines', count: portalFaqs.filter(f => f.category === 'cost').length }
            ].map((cat) => {
              const isSelected = faqCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setFaqCategory(cat.id as any)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-purple-500 text-slate-950 shadow-[0_0_15px_rgba(168,85,247,0.3)] font-extrabold'
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
          const filteredFaqs = portalFaqs.filter(faq => {
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
                <HelpCircle className="w-8 h-8 text-purple-400 mx-auto opacity-70" />
                <h4 className="text-base font-bold text-white">No Matching Questions Found</h4>
                <p className="text-xs text-slate-400">
                  Try searching for keywords like "RBAC", "Tally", "Encryption", or "Source Code", or reset your search.
                </p>
                <button
                  onClick={() => { setFaqSearchQuery(''); setFaqCategory('all'); }}
                  className="px-4 py-2 rounded-xl bg-purple-500 text-slate-950 text-xs font-bold"
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
                        ? 'bg-slate-900/95 border-purple-500/50 shadow-[0_0_25px_rgba(168,85,247,0.08)]' 
                        : 'bg-slate-900/70 hover:bg-slate-900/90 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : faq.id)}
                      className="w-full p-5 text-left flex items-start justify-between gap-3 font-bold text-sm sm:text-base text-slate-100 hover:text-purple-300 transition-colors cursor-pointer group"
                    >
                      <div className="space-y-1.5 pr-2">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/20 text-purple-300">
                            {faq.categoryLabel}
                          </span>
                          <span className="text-[10px] font-mono text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded">
                            {faq.tag}
                          </span>
                        </div>
                        <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-purple-300 transition-colors leading-snug">
                          {faq.q}
                        </h4>
                      </div>
                      <div className={`p-1.5 rounded-lg shrink-0 mt-1 transition-all ${
                        isOpen ? 'bg-purple-500 text-slate-950 rotate-180' : 'bg-slate-800 text-slate-400 group-hover:text-white'
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
        <div className="rounded-2xl bg-gradient-to-r from-purple-500/10 via-indigo-500/10 to-emerald-500/10 border border-purple-500/30 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <Headphones className="w-5 h-5 text-purple-400" />
              <h4 className="text-base font-bold text-white">Have a Custom Enterprise Architecture or ERP Integration Need?</h4>
            </div>
            <p className="text-xs sm:text-sm text-slate-300">
              Speak directly with an AVRX Enterprise Portal Specialist to evaluate your user roles, ERP schemas, and deployment timeline.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0 flex-wrap justify-center">
            <button
              onClick={() => handleOpenFormWithPlan('Custom Enterprise Portal Consultation')}
              className="px-5 py-2.5 rounded-xl bg-purple-500 hover:bg-purple-400 text-slate-950 font-bold text-xs transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
            >
              <span>Ask an Enterprise Architect</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <a
              href="https://wa.me/919999999999?text=Hello%20AVRX,%20I%20have%20a%20question%20regarding%20Web%20Portal%20Development"
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
      <section className="py-16 px-4 sm:px-6 lg:px-10 xl:px-12 max-w-[1560px] mx-auto">
        <div className="rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 p-8 sm:p-12 shadow-2xl relative overflow-hidden space-y-8">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
              ⚡ FREE PORTAL SPECIFICATION &amp; RBAC BLUEPRINT
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Ready to Digitize Your Enterprise Operations?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Fill out this quick form and our Principal Solutions Architect will draft your RBAC permission matrix, database schema, and live preview demo within 30 minutes.
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
                  placeholder="e.g. Vikram Singhania"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-purple-500"
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
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-purple-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-300">Company Email (Optional)</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. vikram@enterprise.com"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-300">Portal Type</label>
                <select
                  value={formData.portalType}
                  onChange={(e) => setFormData({ ...formData, portalType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 focus:outline-none focus:border-purple-500"
                >
                  <option value="B2B Distributor / Vendor Portal">B2B Distributor / Vendor Portal</option>
                  <option value="Customer Self-Service & Billing Dashboard">Customer Self-Service &amp; Billing Dashboard</option>
                  <option value="Employee HRMS & Payroll Portal">Employee HRMS &amp; Payroll Portal</option>
                  <option value="Franchise & Multi-Outlet Network">Franchise &amp; Multi-Outlet Network</option>
                  <option value="Healthcare EHR / Hospital Portal">Healthcare EHR / Hospital Portal</option>
                  <option value="Multi-Tenant SaaS Portal Architecture">Multi-Tenant SaaS Portal Architecture</option>
                  <option value="Custom Cloud ERP System">Custom Cloud ERP System</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-300">Target Budget Range</label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 focus:outline-none focus:border-purple-500"
                >
                  <option value="₹34,999 - ₹55,000">₹34,999 - ₹55,000 (Standard Portal)</option>
                  <option value="₹55,000 - ₹95,000">₹55,000 - ₹95,000 (Multi-Role Business Hub)</option>
                  <option value="₹95,000 - ₹2,00,000+">₹95,000 - ₹2,00,000+ (Enterprise Cloud ERP)</option>
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-300">Operations Scope &amp; Special Requirements</label>
              <textarea
                rows={3}
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                placeholder="Tell us about your departments, team size, required user roles, and existing accounting/ERP software..."
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-purple-500"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-500 via-indigo-500 to-emerald-500 hover:brightness-110 text-slate-950 font-black text-sm uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(168,85,247,0.3)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Submitting to Portal Engine...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Request Free Portal Architecture &amp; Demo</span>
                </>
              )}
            </button>
          </form>

        </div>
      </section>

      {/* POPUP MODAL FOR DIRECT PLAN QUOTE */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-purple-500/40 rounded-3xl p-6 sm:p-8 max-w-lg w-full space-y-5 shadow-2xl relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg bg-slate-800 text-xs"
            >
              ✕
            </button>

            <div className="space-y-1">
              <span className="text-[10px] font-bold text-purple-400 uppercase">Selected Configuration</span>
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
                  placeholder="Vikram Singhania"
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
                <label className="text-xs text-slate-300 font-medium">Brief Requirements</label>
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
                className="w-full py-3 rounded-xl bg-purple-500 hover:bg-purple-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all"
              >
                {isSubmitting ? 'Sending Request...' : 'Confirm Portal Consultation'}
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
