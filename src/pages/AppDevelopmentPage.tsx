import React, { useState, useEffect } from 'react';
import { 
  Smartphone, 
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
  Play, 
  Cpu, 
  Bell, 
  Fingerprint, 
  WifiOff, 
  CreditCard, 
  MapPin, 
  Radio, 
  Terminal, 
  Share2, 
  Code2, 
  Sliders, 
  Globe, 
  Clock, 
  Award, 
  TrendingUp, 
  Headphones, 
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Search,
  CheckSquare,
  Square,
  Lock,
  Apple,
  Store,
  RefreshCw,
  Box,
  Monitor
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { submitLeadForm } from '../utils/formSubmit';
import { SubmissionFeedbackModal } from '../components/common/SubmissionFeedbackModal';
import { launchSoundEngine } from '../utils/launchSoundEngine';

interface AppDevelopmentPageProps {
  onNavigate: (page: string, slug?: string) => void;
}

export const AppDevelopmentPage: React.FC<AppDevelopmentPageProps> = ({ onNavigate }) => {
  // Navigation helper
  const handleNav = (targetPage: string, slug?: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    onNavigate(targetPage, slug);
  };

  // State management
  const [activeTab, setActiveTab] = useState<'all' | 'native-android' | 'native-ios' | 'flutter' | 'react-native' | 'enterprise'>('all');
  const [activeFaq, setActiveFaq] = useState<number | null>(1);
  const [activeAppModelIndex, setActiveAppModelIndex] = useState(0);
  const [simulatedDevice, setSimulatedDevice] = useState<'ios' | 'android'>('ios');
  const [simulatedScreen, setSimulatedScreen] = useState<'home' | 'feed' | 'checkout' | 'profile'>('home');

  // AI App Architecture Estimator State
  const [appTypeInput, setAppTypeInput] = useState('E-Commerce & Quick Delivery');
  const [targetAudienceInput, setTargetAudienceInput] = useState('Pan-India Consumers & Retailers');
  const [primaryOsInput, setPrimaryOsInput] = useState('Both Android & iOS');
  const [keyFeaturesInput, setKeyFeaturesInput] = useState('UPI Payments, Live GPS Tracking, Push Notifications, Offline Mode');
  const [isGeneratingArchitecture, setIsGeneratingArchitecture] = useState(false);
  const [generatedArchitecture, setGeneratedArchitecture] = useState<any>(null);

  // App Cost & ROI Calculator State
  const [screenCount, setScreenCount] = useState(12);
  const [platformSelection, setPlatformSelection] = useState<'dual' | 'android' | 'ios'>('dual');
  const [hasRealtimeChat, setHasRealtimeChat] = useState(true);
  const [hasPaymentGateway, setHasPaymentGateway] = useState(true);
  const [hasLiveTracking, setHasLiveTracking] = useState(true);
  const [hasBiometricAuth, setHasBiometricAuth] = useState(true);
  const [hasCustomBackend, setHasCustomBackend] = useState(true);

  // Lead Modal & Direct Form State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalFormPlan, setModalFormPlan] = useState('Pro Cross-Platform App (Android + iOS)');
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
    appType: 'Cross-Platform Mobile App (Android + iOS)',
    budget: '₹25,000 - ₹50,000',
    details: ''
  });

  // Client Ecosystem Marquee Stack
  const techLogos = [
    { name: 'Flutter', tag: 'Google UI Toolkit', icon: '⚡' },
    { name: 'React Native', tag: 'Meta Native Framework', icon: '⚛️' },
    { name: 'Kotlin', tag: 'Android Native', icon: '🤖' },
    { name: 'Swift', tag: 'Apple iOS Native', icon: '🍎' },
    { name: 'Jetpack Compose', tag: 'Modern Android UI', icon: '📱' },
    { name: 'SwiftUI', tag: 'Declarative iOS', icon: '✨' },
    { name: 'Firebase', tag: 'Realtime Cloud DB', icon: '🔥' },
    { name: 'Google Play', tag: 'Store Publishing', icon: '▶️' },
    { name: 'Apple App Store', tag: 'iOS Distribution', icon: '🍏' },
    { name: 'Fastlane', tag: 'CI/CD Automation', icon: '🚀' },
    { name: 'Razorpay SDK', tag: 'UPI & In-App Pay', icon: '💳' },
    { name: 'OneSignal', tag: 'Push Notifications', icon: '🔔' },
    { name: 'SQLite / Realm', tag: 'Offline Storage', icon: '💾' },
    { name: 'Supabase', tag: 'PostgreSQL Mobile API', icon: '⚡' }
  ];

  // 10 Real Mobile App Showcase Models
  const appModels = [
    {
      title: 'Zepto-Speed Quick Delivery & E-Commerce App',
      tagline: '10-Minute Hyperlocal Cart, Live Rider GPS & Instant UPI Intent',
      category: 'E-Commerce & Delivery',
      platforms: 'Android + iOS (Flutter)',
      launchTime: '10 Days',
      rating: '4.9 ★ (120k+ Downloads)',
      badge: 'Bestseller',
      accentColor: 'from-amber-500 to-orange-600',
      features: [
        'Dynamic Category Showcase with Sub-0.3s Search',
        'Direct UPI Intent (PhonePe, GPay, Paytm, Cred)',
        'Real-time Mapbox / Google Maps Live Rider Dispatch',
        'Automated Push Notifications via Firebase FCM',
        'Offline Product Caching with Instant Sync'
      ],
      metrics: {
        fps: '60 FPS Ultra-Smooth',
        size: '<18 MB APK / IPA',
        rating: '4.9/5 Store Score'
      }
    },
    {
      title: 'Neo-Bank UPI & Wealth Wallet App',
      tagline: 'Bank-Grade Biometric Security, Instant P2P QR Scanner & Subscriptions',
      category: 'FinTech & Payments',
      platforms: 'Native Kotlin + Swift',
      launchTime: '14 Days',
      rating: '5.0 ★ (Fintech Certified)',
      badge: 'Bank Grade',
      accentColor: 'from-cyan-500 to-blue-600',
      features: [
        'Biometric Fingerprint & FaceID Instant Unlock',
        'Dynamic QR Code Scanner with Sub-100ms Decoding',
        '256-Bit Hardware Security Module (HSM) Encryption',
        'Automated Monthly Bill Reminder Push Hooks',
        'Multi-Account Balance Tracking & Transaction Logs'
      ],
      metrics: {
        fps: '120 Hz ProMotion Ready',
        size: '<22 MB High Security',
        rating: '99.99% Uptime'
      }
    },
    {
      title: 'Doctor Consultation & Health Vital App',
      tagline: 'Live Video Appointments, Digital Prescription Vault & Lab Booking',
      category: 'Healthcare & Telemedicine',
      platforms: 'Android + iOS (React Native)',
      launchTime: '12 Days',
      rating: '4.9 ★ (HIPAA Compliant)',
      badge: 'Healthcare',
      accentColor: 'from-emerald-500 to-teal-600',
      features: [
        'WebRTC Encrypted HD Video Calling with Doctors',
        'Patient Health Record (PHR) & Prescription Vault',
        'Automated Medicine Dose Alert Reminders',
        'Diagnostic Lab Test Slot Booking with Home Sample',
        'Doctor Availability Real-Time Calendar Sync'
      ],
      metrics: {
        fps: 'HD 60 FPS Video',
        size: '<20 MB Lightweight',
        rating: '4.9 ★ Rating'
      }
    },
    {
      title: 'EdTech Live Classes & Quiz Master App',
      tagline: 'Interactive Video Streaming, Offline Study Downloads & Test Series',
      category: 'Education & Learning',
      platforms: 'Android + iOS (Flutter)',
      launchTime: '10 Days',
      rating: '4.8 ★ (50k+ Students)',
      badge: 'High Engagement',
      accentColor: 'from-purple-500 to-indigo-600',
      features: [
        'HLS Adaptive Bitrate DRM Protected Video Player',
        'Offline Video & PDF Study Material Download Locker',
        'Gamified Live Quiz Leaderboards with Instant Scores',
        'In-App Course Purchases & EMI Split Options',
        'Automated Doubt Chat with Teacher Voice Notes'
      ],
      metrics: {
        fps: 'Zero Buffering Player',
        size: '<24 MB Bundle',
        rating: '4.8 ★ Rating'
      }
    },
    {
      title: 'Uber-Style Cab & Taxi Dispatching App Suite',
      tagline: 'Passenger App + Driver Partner App + Master Admin Fleet Console',
      category: 'On-Demand Mobility',
      platforms: 'Dual Native / Flutter',
      launchTime: '15 Days',
      rating: '4.9 ★ (Fleet Proven)',
      badge: 'Dual App Ecosystem',
      accentColor: 'from-yellow-500 to-amber-600',
      features: [
        'Live Real-time Passenger & Driver Geolocation Tracking',
        'Smart Fare Calculation Algorithm with Surge Pricing',
        'Instant SOS Emergency Beacon & Trip Share Link',
        'Driver Wallet with Instant Daily Bank Settlement',
        'In-App Voice Call Masking for Privacy'
      ],
      metrics: {
        fps: 'Sub-50ms GPS Polling',
        size: '<19 MB Driver & Rider',
        rating: '100% Uptime'
      }
    },
    {
      title: 'Real Estate & Luxury Property Discovery App',
      tagline: '3D Virtual Tours, Map Search Filter & Direct Builder Chat',
      category: 'Real Estate & Rentals',
      platforms: 'Android + iOS',
      launchTime: '11 Days',
      rating: '4.9 ★ (Verified Listings)',
      badge: 'High Conversion',
      accentColor: 'from-rose-500 to-pink-600',
      features: [
        'Interactive Map Polygon Search by Locality & Budget',
        '360-Degree Panoramic Virtual Property Walkthroughs',
        'Direct WhatsApp & Instant In-App Calling with Agents',
        'Built-in Home Loan EMI Calculator & Eligibility Check',
        'Automated New Listing Alerts based on User Saved Search'
      ],
      metrics: {
        fps: '60 FPS 3D Tours',
        size: '<21 MB Fast Asset Cache',
        rating: '4.9 ★ Rating'
      }
    },
    {
      title: 'B2B Field Force & Distributor Inventory App',
      tagline: 'Offline Order Booking, Sales Rep Geofencing & Real-time Stock Sync',
      category: 'Enterprise & B2B',
      platforms: 'Android Enterprise / iOS',
      launchTime: '12 Days',
      rating: '5.0 ★ (Enterprise SLA)',
      badge: 'Enterprise',
      accentColor: 'from-blue-600 to-indigo-800',
      features: [
        '100% Offline Order Punching in Remote Connectivity',
        'Automated GPS Route Planning & Store Check-in Geofencing',
        'Instant Bluetooth Thermal Receipt & GST Invoice Printing',
        'Multi-Tier Wholesale Pricing & Distributor Discounts',
        'Live Sync with Tally, SAP, and Central ERP Webhooks'
      ],
      metrics: {
        fps: 'Instant Offline DB',
        size: '<15 MB Compact',
        rating: 'Enterprise Grade'
      }
    },
    {
      title: 'FitPulse Smart Workout & Calorie Tracker App',
      tagline: 'AI Camera Rep Counter, Personalized Diet Plans & Wearable Sync',
      category: 'Health & Fitness',
      platforms: 'Flutter + HealthKit / Google Fit',
      launchTime: '10 Days',
      rating: '4.9 ★ (Global Users)',
      badge: 'AI Integrated',
      accentColor: 'from-teal-400 to-emerald-600',
      features: [
        'Direct Bluetooth Sync with Apple Watch & Smart Bands',
        'AI Computer Vision Camera for Exercise Posture Correction',
        'Custom Macro & Calorie Tracker with Indian Food Database',
        'Daily Hydration & Habit Streaks with Audio Badges',
        'Monthly Subscription In-App Purchases (StoreKit)'
      ],
      metrics: {
        fps: 'Realtime Sensor Sync',
        size: '<25 MB Machine Learning',
        rating: '4.9 ★ Score'
      }
    }
  ];

  // 8 Specialized App Categories & Tiers
  const subCategories = [
    {
      id: 'flutter-apps',
      title: 'Cross-Platform Flutter Apps',
      price: '₹34,999',
      badge: 'Most Popular',
      category: 'flutter',
      desc: 'Single codebase powering stunning 60/120 FPS native apps for both Google Play Store and Apple App Store at 50% cost.',
      features: ['One Codebase for Android & iOS', 'Dart High-Performance Engine', 'Native Hardware API Access', 'Custom Fluid Animations', 'Fast 10-14 Day Delivery']
    },
    {
      id: 'native-android',
      title: 'Native Android (Kotlin / Compose)',
      price: '₹24,999',
      badge: 'Google Certified',
      category: 'native-android',
      desc: '100% native Android development using Kotlin and Jetpack Compose for peak hardware performance, low memory and battery usage.',
      features: ['Kotlin 2.0 & Jetpack Compose', 'Google Play Store 100% Approval', 'Deep Android OS Integration', 'Low-End Device Optimization', 'Instant App & Widget Support']
    },
    {
      id: 'native-ios',
      title: 'Native iOS (Swift & SwiftUI)',
      price: '₹29,999',
      badge: 'Apple Ecosystem',
      category: 'native-ios',
      desc: 'Pixel-perfect Apple iOS apps engineered for iPhone and iPad following strict Apple Human Interface Guidelines and StoreKit.',
      features: ['Swift 6 & SwiftUI Architecture', 'Apple Pay & FaceID Integration', 'TestFlight QA & Store Approval', 'Dynamic Island & WidgetKit', 'iCloud Sync & CoreData']
    },
    {
      id: 'react-native',
      title: 'React Native Apps (TypeScript)',
      price: '₹32,999',
      badge: 'Fast Scaling',
      category: 'react-native',
      desc: 'Robust JavaScript/TypeScript mobile architecture used by Instagram and Shopify, enabling fast over-the-air updates.',
      features: ['TypeScript Clean Architecture', 'OTA (Over-The-Air) App Updates', 'Shared Web & Mobile Logic', 'Extensive NPM Ecosystem', 'Sub-Second Cold Boot']
    },
    {
      id: 'ecommerce-app',
      title: 'E-Commerce & Quick Commerce Apps',
      price: '₹39,999',
      badge: 'High Revenue',
      category: 'flutter',
      desc: 'Complete mobile shopping apps with 1-click UPI checkout, live delivery order tracking, push deals, and abandoned cart alerts.',
      features: ['Instant UPI Intent (GPay/PhonePe)', 'Live Delivery Boy Tracking', 'Automated Push Notifications', 'Coupon & Flash Sale Engine', 'Offline Catalog Browsing']
    },
    {
      id: 'on-demand-apps',
      title: 'On-Demand Booking & Marketplace Apps',
      price: '₹44,999',
      badge: 'Dual Platform',
      category: 'enterprise',
      desc: 'Uber-style ecosystem including Customer App, Service Provider / Driver App, and central Master Admin Management Panel.',
      features: ['Customer + Partner Dual Apps', 'Live Real-Time GPS Tracking', 'In-App Wallet & Commission Split', 'Automated Push & SMS Alerts', 'Master Cloud Admin Panel']
    },
    {
      id: 'b2b-field-apps',
      title: 'Enterprise B2B & Field Force Apps',
      price: '₹39,999',
      badge: 'Enterprise',
      category: 'enterprise',
      desc: 'Mobile workflow apps for sales teams, delivery executives, and factory inspections with offline sync and barcode scanning.',
      features: ['100% Offline Data Collection', 'GPS Geofenced Check-ins', 'Camera & Barcode / QR Scanning', 'ERP / Tally API Integration', 'Role-Based Access Security']
    },
    {
      id: 'iot-wearables',
      title: 'IoT & Smart Device Connected Apps',
      price: '₹49,999',
      badge: 'Advanced Hardware',
      category: 'enterprise',
      desc: 'Bluetooth Low Energy (BLE) and Wi-Fi smart hardware mobile apps for medical wearables, smart home devices, and sensors.',
      features: ['Bluetooth Low Energy (BLE) Sync', 'HealthKit & Google Fit Sync', 'Background Sensor Telemetry', 'Firmware OTA Update Hooks', 'Real-Time Hardware Graphs']
    }
  ];

  // 17 Comprehensive Categorized FAQs
  const [faqCategory, setFaqCategory] = useState<'all' | 'publishing' | 'tech' | 'cost' | 'payments' | 'ownership'>('all');
  const [faqSearchQuery, setFaqSearchQuery] = useState('');

  const appFaqs = [
    {
      id: 1,
      category: 'publishing',
      categoryLabel: 'Store Publishing',
      q: 'Will AVRX handle 100% Google Play Store and Apple App Store publishing and approval?',
      a: 'Yes, 100%. We handle the end-to-end publishing pipeline. This includes app bundling (.aab and .ipa files), privacy policy compliance, data safety forms, target API level 34+ compliance, Apple Human Interface review guidelines, and TestFlight beta testing. We guarantee approval or address all store review feedback directly.',
      tag: 'Play Store & App Store'
    },
    {
      id: 2,
      category: 'publishing',
      categoryLabel: 'Store Publishing',
      q: 'Do I need my own Google Play Console and Apple Developer Account?',
      a: 'We can either publish the app under your own official company developer accounts (recommended for full corporate brand ownership) or assist you in setting up your Google Developer Account ($25 one-time fee) and Apple Developer Account ($99/year). We guide you through the entire verification process.',
      tag: 'Developer Accounts'
    },
    {
      id: 3,
      category: 'tech',
      categoryLabel: 'Tech & Performance',
      q: 'What is the difference between Flutter, React Native, and Native Kotlin/Swift?',
      a: 'Flutter (Google) and React Native (Meta) are cross-platform frameworks allowing a single codebase to run natively on both Android and iOS, saving up to 50% in development cost and time with smooth 60–120 FPS performance. Native Kotlin (Android) and Swift (iOS) are used when your app requires specialized low-level hardware access, complex BLE sensors, or ultra-intensive native background processing.',
      tag: 'Flutter vs Native'
    },
    {
      id: 4,
      category: 'tech',
      categoryLabel: 'Tech & Performance',
      q: 'Will my mobile app work smoothly in low internet or offline mode?',
      a: 'Yes. We architect mobile apps with local SQLite / Realm caching and background queue synchronization. Users can view previously loaded products, browse offline data, and even place draft orders or submit forms. As soon as connectivity is restored, data synchronizes seamlessly with the central cloud database.',
      tag: 'Offline-First'
    },
    {
      id: 5,
      category: 'tech',
      categoryLabel: 'Tech & Performance',
      q: 'How do you ensure the app does not drain smartphone battery or consume heavy memory?',
      a: 'We use optimized asynchronous threads, lazy image loading (WebP / SVG), efficient memory garbage collection, and compressed binary assets. Most of our Flutter and Native apps boast an APK size under 18 MB with sub-100ms screen transition benchmarks.',
      tag: 'Sub-18MB Size'
    },
    {
      id: 6,
      category: 'payments',
      categoryLabel: 'Payments & APIs',
      q: 'How do in-app UPI Intent and Card payments work in the mobile app?',
      a: 'We integrate native SDKs from Razorpay, Cashfree, PhonePe PG, and Stripe. In India, UPI Intent allows your customers to tap "Pay with PhonePe / GPay / Paytm" to open their installed UPI app directly with zero manual VPA typing, resulting in a 95%+ payment success rate.',
      tag: '1-Click UPI Intent'
    },
    {
      id: 7,
      category: 'payments',
      categoryLabel: 'Payments & APIs',
      q: 'How do Push Notifications work to engage and retain mobile users?',
      a: 'We integrate Firebase Cloud Messaging (FCM) and OneSignal. You get an easy admin control panel to send instant automated push notifications (order updates, shipping alerts, flash sale banners, abandoned cart reminders) directly to users’ lock screens with high-converting rich images and deep-links.',
      tag: 'Firebase FCM & Rich Push'
    },
    {
      id: 8,
      category: 'payments',
      categoryLabel: 'Payments & APIs',
      q: 'Can you integrate live GPS tracking and location-based geofencing?',
      a: 'Yes. For delivery, taxi, logistics, or field force apps, we integrate Google Maps Platform and Mapbox APIs. This enables live driver location tracking, automated ETA calculation, distance-based pricing, and geofenced automatic punch-ins.',
      tag: 'Live GPS Tracking'
    },
    {
      id: 9,
      category: 'ownership',
      categoryLabel: 'Ownership & Source Code',
      q: 'Do I get 100% full ownership of the mobile app source code and database?',
      a: 'Absolutely. Upon project completion and handover, you receive full ownership of the entire Git repository, compiled release binaries, API keys, database credentials, and graphics with zero vendor lock-in or recurring code licensing fees.',
      tag: '100% Code Ownership'
    },
    {
      id: 10,
      category: 'ownership',
      categoryLabel: 'Ownership & Source Code',
      q: 'Can I easily push app updates, new products, and banner changes without resubmitting to app stores?',
      a: 'Yes! Dynamic content such as products, pricing, banners, promotional popups, and categories are powered by your real-time cloud backend (Admin Dashboard). Changes appear on user devices instantly without needing a new Play Store/App Store update. For code updates, we also support Over-The-Air (OTA) patching.',
      tag: 'Instant Dynamic Updates'
    },
    {
      id: 11,
      category: 'cost',
      categoryLabel: 'Cost & Timelines',
      q: 'What is the standard timeline to build and launch a mobile app?',
      a: 'A standard Android or Cross-Platform Flutter mobile app is completed, tested, and submitted to stores within 10 to 14 business days. Advanced multi-app ecosystems (e.g., Customer App + Delivery App + Admin Panel) take 18 to 25 working days with structured milestone demos.',
      tag: '10 - 14 Days Delivery'
    },
    {
      id: 12,
      category: 'cost',
      categoryLabel: 'Cost & Timelines',
      q: 'What are the post-launch support and OS update policies?',
      a: 'Every AVRX app includes 3 months of complimentary post-launch technical warranty, bug fixes, and compatibility maintenance. We ensure your app remains fully compliant with new Android and iOS major version releases (Android 15 / iOS 18+).',
      tag: '3 Months Free Warranty'
    },
    {
      id: 13,
      category: 'tech',
      categoryLabel: 'Tech & Performance',
      q: 'Can we integrate Biometric FaceID and Fingerprint authentication?',
      a: 'Yes. We implement native BiometricPrompt (Android) and LocalAuthentication (iOS FaceID & TouchID) with secure keychain token storage, allowing your users to log in securely in under 0.2 seconds.',
      tag: 'Biometric Fast Login'
    },
    {
      id: 14,
      category: 'tech',
      categoryLabel: 'Tech & Performance',
      q: 'Can you convert our existing website or web portal into native mobile apps?',
      a: 'Yes! We can either engineer a native Flutter / React Native app backed by your existing website API/database, or convert your web application into an ultra-fast Progressive Web App (PWA) with native push notifications, offline support, and Play Store packaging.',
      tag: 'Web to App Migration'
    },
    {
      id: 15,
      category: 'cost',
      categoryLabel: 'Cost & Timelines',
      q: 'Are there any hidden monthly commission charges on app sales?',
      a: 'Zero. AVRX charges 0% commission on your app transactions. You keep 100% of your earnings. You only pay your standard payment gateway fees or cloud server hosting costs (e.g., Firebase/AWS), which are billed directly at actuals.',
      tag: '0% Commission'
    },
    {
      id: 16,
      category: 'publishing',
      categoryLabel: 'Store Publishing',
      q: 'How do you handle App Store Review Guidelines for Apple iOS approval?',
      a: 'Apple is known for strict App Store Guidelines (Guideline 2.1 Performance, Guideline 4.8 Sign in with Apple, Guideline 5.1 Privacy). AVRX adheres to Apple Human Interface guidelines from Day 1, ensuring required Apple Sign-In hooks, account deletion options, and compliant in-app metadata for first-attempt approval.',
      tag: 'Apple Guidelines Ready'
    },
    {
      id: 17,
      category: 'tech',
      categoryLabel: 'Tech & Performance',
      q: 'Can we integrate AI features like Chatbots, Image Recognition, or Voice in our app?',
      a: 'Yes! We integrate Gemini AI, OpenAI, and on-device ML models for smart conversational voice search, automated product recommendation algorithms, receipt scanner OCR, and AI customer support assistants.',
      tag: 'AI Models Integrated'
    }
  ];

  // Dynamic Calculation for App Cost & Feature Estimator
  const calculatedAppCost = (() => {
    let base = 24999;
    base += (screenCount - 5) * 1200;
    if (platformSelection === 'dual') base += 12000;
    if (platformSelection === 'ios') base += 5000;
    if (hasRealtimeChat) base += 5000;
    if (hasPaymentGateway) base += 4500;
    if (hasLiveTracking) base += 6500;
    if (hasBiometricAuth) base += 3500;
    if (hasCustomBackend) base += 8500;
    return base;
  })();

  const calculatedDays = Math.max(7, Math.round(screenCount * 0.8 + (platformSelection === 'dual' ? 4 : 2)));

  // AI Architecture Generator Handler
  const handleGenerateArchitecture = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGeneratingArchitecture(true);
    launchSoundEngine.playNotification();

    setTimeout(() => {
      let recFramework = 'Flutter 3.x (Google Dart)';
      let recBackend = 'Node.js + PostgreSQL + Supabase';
      let recDb = 'PostgreSQL with Offline SQLite Cache';
      let estTimeline = '10 - 14 Business Days';
      let budgetTier = '₹34,999 - ₹44,999';

      if (primaryOsInput.includes('iOS Only')) {
        recFramework = 'Swift 6 & SwiftUI Native';
        recBackend = 'Node.js / Firebase Realtime';
        estTimeline = '10 - 12 Business Days';
        budgetTier = '₹29,999 - ₹39,999';
      } else if (appTypeInput.includes('FinTech') || appTypeInput.includes('Wallet')) {
        recFramework = 'Native Kotlin + Swift (High Security)';
        recBackend = 'Go / Node.js Microservices + Redis + HSM';
        estTimeline = '14 - 18 Business Days';
        budgetTier = '₹49,999 - ₹69,999';
      } else if (appTypeInput.includes('B2B') || appTypeInput.includes('Enterprise')) {
        recFramework = 'Flutter / React Native Enterprise';
        recBackend = 'Node.js Express + Docker + Tally/ERP API';
        estTimeline = '12 - 16 Business Days';
        budgetTier = '₹39,999 - ₹54,999';
      }

      setGeneratedArchitecture({
        appType: appTypeInput,
        targetAudience: targetAudienceInput,
        primaryOs: primaryOsInput,
        recommendedFramework: recFramework,
        recommendedBackend: recBackend,
        databaseArchitecture: recDb,
        estimatedTimeline: estTimeline,
        budgetTier: budgetTier,
        securityCompliance: ['Biometric Auth Ready', 'OWASP Mobile Top 10 Protected', '256-Bit SSL Pinning', 'Play Store 34+ API Compliant'],
        keyArchitectureHighlights: [
          'Sub-0.4s Screen Cold Boot Optimization',
          'Offline-First Local SQLite Queue with Auto-Sync',
          'Instant UPI Intent SDK & Gateway Integration',
          'Firebase Cloud Messaging (FCM) Rich Push Channels',
          'Automated CI/CD Fastlane Build Pipeline'
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
      details: `Inquiring for: ${planName}. Please provide detailed architecture roadmap and quotation.`
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
        service: `App Development - ${formData.appType}`,
        message: `Plan/Scope: ${modalFormPlan} | Budget: ${formData.budget} | Notes: ${formData.details}`
      });

      if (response.success) {
        launchSoundEngine.playSuccess();
        setFeedbackState({
          isOpen: true,
          success: true,
          title: 'App Architecture Request Received!',
          message: `Thank you ${formData.name}. Our Mobile App Tech Lead will reach out to you within 30 minutes with a free technical blueprint & live preview demo.`
        });
        setFormData({
          name: '',
          phone: '',
          email: '',
          appType: 'Cross-Platform Mobile App (Android + iOS)',
          budget: '₹25,000 - ₹50,000',
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
    <div className="min-h-screen bg-[#030914] text-slate-100 selection:bg-cyan-500 selection:text-slate-950 font-sans pb-24">
      
      {/* Dynamic SEO Meta */}
      <SEO 
        title="Mobile App Development (Android & iOS) | Flutter, Kotlin, Swift Apps | AVRX"
        description="Launch ultra-fast, high-converting Android and iOS mobile applications with AVRX. Cross-platform Flutter & React Native, Native Kotlin & Swift, 100% Play Store & App Store publishing guarantee, UPI payments, and offline sync."
        keywords="mobile app development, android app development, ios app development, flutter developer, react native app, play store publishing, app development india, avrx mobile apps"
      />

      {/* 1. TOP BREADCRUMB NAVIGATION & STATUS BAR */}
      <div className="border-b border-cyan-950/60 bg-slate-950/70 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 py-3 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-slate-400 overflow-x-auto whitespace-nowrap">
            <button onClick={() => handleNav('home')} className="hover:text-cyan-400 transition-colors">Home</button>
            <span>/</span>
            <button onClick={() => handleNav('digital-solutions')} className="hover:text-cyan-400 transition-colors">Digital Solutions</button>
            <span>/</span>
            <span className="text-cyan-400 font-semibold">App Development (Android &amp; iOS)</span>
          </div>
          
          <div className="hidden sm:flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-medium">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span>100% Play Store &amp; App Store Approval Guarantee</span>
            </div>
            <a 
              href="https://wa.me/919999999999?text=Hello%20AVRX,%20I%20want%20to%20build%20a%20Mobile%20App%20(Android/iOS)"
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Tech Lead</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. DYNAMIC CYBER HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 px-4 sm:px-6 lg:px-10 xl:px-12">
        {/* Glowing Background Mesh */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-cyan-600/20 via-blue-600/15 to-indigo-600/20 blur-[130px] pointer-events-none -z-10 rounded-full"></div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 blur-[90px] pointer-events-none -z-10 rounded-full"></div>

        <div className="max-w-[1720px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Value Prop & Key Metrics */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
              <Sparkles className="w-4 h-4 text-cyan-400 animate-spin" style={{ animationDuration: '4s' }} />
              <span>NEXT-GEN MOBILE APP ENGINEERING 2026</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
              Turn Your Vision Into a{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
                High-Converting Mobile App
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              We design and engineer lightning-fast, 60 FPS native Android &amp; iOS mobile applications with Flutter, Kotlin &amp; Swift. Integrated with 1-click UPI intent, live GPS tracking, offline data sync, push alerts, and guaranteed app store publishing.
            </p>

            {/* Live Metrics 4-Box Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2">
              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-cyan-950/80 text-center space-y-0.5">
                <div className="text-xl sm:text-2xl font-black text-cyan-400">60–120</div>
                <div className="text-[11px] text-slate-400 font-medium">FPS Ultra Smooth</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-cyan-950/80 text-center space-y-0.5">
                <div className="text-xl sm:text-2xl font-black text-blue-400">100%</div>
                <div className="text-[11px] text-slate-400 font-medium">Store Approval</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-cyan-950/80 text-center space-y-0.5">
                <div className="text-xl sm:text-2xl font-black text-emerald-400">&lt;18 MB</div>
                <div className="text-[11px] text-slate-400 font-medium">Lightweight APK</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-cyan-950/80 text-center space-y-0.5">
                <div className="text-xl sm:text-2xl font-black text-amber-400">10–14</div>
                <div className="text-[11px] text-slate-400 font-medium">Days Live Launch</div>
              </div>
            </div>

            {/* Action CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => handleOpenFormWithPlan('Custom Mobile App Consultation')}
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 text-slate-950 font-black text-sm hover:brightness-110 active:scale-95 transition-all shadow-[0_0_30px_rgba(6,182,212,0.3)] flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Get Free App Wireframe &amp; Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#app-calculator"
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-slate-200 font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sliders className="w-4 h-4 text-cyan-400" />
                <span>Estimate App Cost Live</span>
              </a>
            </div>

            {/* Supported Store Badges */}
            <div className="flex items-center justify-center lg:justify-start gap-6 pt-2 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <Apple className="w-4 h-4 text-slate-300" />
                <span>Apple App Store Ready</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Play className="w-4 h-4 text-emerald-400 fill-emerald-400" />
                <span>Google Play Store Compliant</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>Full Source Code</span>
              </div>
            </div>

          </div>

          {/* Right Column: Live Interactive Smartphone Simulator */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-[320px] sm:w-[350px] rounded-[44px] p-3.5 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 border-4 border-slate-700 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(6,182,212,0.15)]">
              
              {/* Phone Speaker Notch & Dynamic Island */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-5 bg-slate-950 rounded-full z-30 flex items-center justify-between px-3">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div>
                <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></div>
              </div>

              {/* Inside Screen Canvas */}
              <div className="rounded-[34px] bg-slate-950 overflow-hidden border border-slate-800 h-[580px] flex flex-col justify-between relative text-slate-100 text-xs select-none">
                
                {/* Status Bar */}
                <div className="pt-3 px-6 pb-2 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>9:41 AM</span>
                  <div className="flex items-center gap-1.5 text-cyan-400">
                    <span className="text-[10px]">5G</span>
                    <span className="font-bold">100%</span>
                  </div>
                </div>

                {/* Simulated Screen Content Switcher */}
                <div className="px-4 py-2 space-y-3 flex-1 overflow-y-auto scrollbar-none">
                  
                  {/* Top Bar Switcher */}
                  <div className="flex items-center justify-between pb-1">
                    <div className="space-y-0.5">
                      <div className="text-[10px] text-cyan-400 font-bold uppercase tracking-wider">Live Storefront</div>
                      <div className="text-sm font-black text-white">AVRX QuickMart</div>
                    </div>
                    <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800 text-[10px]">
                      <button 
                        onClick={() => setSimulatedDevice('ios')}
                        className={`px-2 py-0.5 rounded-lg font-bold transition-colors ${simulatedDevice === 'ios' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400'}`}
                      >
                        iOS
                      </button>
                      <button 
                        onClick={() => setSimulatedDevice('android')}
                        className={`px-2 py-0.5 rounded-lg font-bold transition-colors ${simulatedDevice === 'android' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400'}`}
                      >
                        Android
                      </button>
                    </div>
                  </div>

                  {/* Hero Delivery Banner inside Simulator */}
                  <div className="p-3.5 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-700 text-white space-y-1 shadow-md">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] bg-slate-950/40 px-2 py-0.5 rounded-full font-bold">⚡ 10-Min Flash Express</span>
                      <span className="text-[10px] font-mono">LIVE GPS</span>
                    </div>
                    <div className="text-sm font-bold">Fresh Groceries &amp; Gadgets</div>
                    <div className="text-[10px] text-cyan-100 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-amber-300" />
                      <span>Delivering to Your Location • 8 Mins</span>
                    </div>
                  </div>

                  {/* Simulated App Products Grid */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-[11px] font-bold text-slate-300">
                      <span>Trending Right Now</span>
                      <span className="text-cyan-400 text-[10px]">See All</span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                        <div className="h-16 rounded-lg bg-gradient-to-br from-slate-800 to-slate-700 flex items-center justify-center text-2xl">
                          🎧
                        </div>
                        <div className="font-bold text-[11px] truncate">Wireless ANC Pods</div>
                        <div className="flex items-center justify-between text-[10px]">
                          <span className="text-cyan-400 font-bold">₹1,999</span>
                          <span className="bg-cyan-500/20 text-cyan-300 px-1.5 py-0.5 rounded text-[9px] font-bold">+ ADD</span>
                        </div>
                      </div>

                      <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                        <div className="h-16 rounded-lg bg-gradient-to-br from-slate-800 to-slate-700 flex items-center justify-center text-2xl">
                          ⌚
                        </div>
                        <div className="font-bold text-[11px] truncate">AMOLED Smartwatch</div>
                        <div className="flex items-center justify-between text-[10px]">
                          <span className="text-cyan-400 font-bold">₹2,499</span>
                          <span className="bg-cyan-500/20 text-cyan-300 px-1.5 py-0.5 rounded text-[9px] font-bold">+ ADD</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Live Simulated UPI Payment Bar */}
                  <div className="p-3 rounded-xl bg-slate-900/90 border border-cyan-500/30 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                        <CreditCard className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[11px] font-bold text-white">Instant UPI Intent</div>
                        <div className="text-[9px] text-slate-400">GPay, PhonePe, Paytm, Cred</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-md">
                      0.4s Fast
                    </span>
                  </div>

                </div>

                {/* Bottom App Navigation Bar */}
                <div className="p-3 bg-slate-900/90 border-t border-slate-800/80 flex items-center justify-around text-slate-400">
                  <button 
                    onClick={() => setSimulatedScreen('home')}
                    className={`flex flex-col items-center gap-0.5 ${simulatedScreen === 'home' ? 'text-cyan-400' : ''}`}
                  >
                    <Smartphone className="w-4 h-4" />
                    <span className="text-[9px] font-bold">Shop</span>
                  </button>
                  <button 
                    onClick={() => setSimulatedScreen('feed')}
                    className={`flex flex-col items-center gap-0.5 ${simulatedScreen === 'feed' ? 'text-cyan-400' : ''}`}
                  >
                    <Radio className="w-4 h-4" />
                    <span className="text-[9px] font-bold">Live</span>
                  </button>
                  <button 
                    onClick={() => setSimulatedScreen('checkout')}
                    className={`flex flex-col items-center gap-0.5 ${simulatedScreen === 'checkout' ? 'text-cyan-400' : ''}`}
                  >
                    <div className="relative">
                      <CreditCard className="w-4 h-4" />
                      <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-cyan-400"></span>
                    </div>
                    <span className="text-[9px] font-bold">Cart</span>
                  </button>
                  <button 
                    onClick={() => setSimulatedScreen('profile')}
                    className={`flex flex-col items-center gap-0.5 ${simulatedScreen === 'profile' ? 'text-cyan-400' : ''}`}
                  >
                    <Fingerprint className="w-4 h-4" />
                    <span className="text-[9px] font-bold">Profile</span>
                  </button>
                </div>

                {/* Simulated Home Indicator Bar */}
                <div className="pb-1.5 pt-0.5 flex justify-center bg-slate-900">
                  <div className="w-28 h-1 bg-slate-600 rounded-full"></div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. TECH STACK & CLIENT ECOSYSTEM MARQUEE SCROLL */}
      <section className="py-8 bg-slate-950 border-y border-slate-900 overflow-hidden">
        <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 mb-4 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
            ENTERPRISE MOBILE PLATFORMS &amp; CLOUD SDK ECOSYSTEM
          </span>
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="flex gap-4 animate-marquee whitespace-nowrap will-change-transform py-2">
            {[...techLogos, ...techLogos].map((tech, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800/90 text-xs font-bold text-slate-200 shrink-0 shadow-sm hover:border-cyan-500/50 hover:bg-slate-800 transition-colors"
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

      {/* 4. INTERACTIVE APP SHOWCASE CAROUSEL (10 REAL APP ARCHITECTURES) */}
      <section className="py-20 px-4 sm:px-6 lg:px-10 xl:px-12 max-w-[1720px] mx-auto space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
            <Smartphone className="w-3.5 h-3.5" />
            <span>REAL-WORLD MOBILE ARCHITECTURES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Explore 10 High-Performing{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
              Mobile App Models
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            From on-demand delivery to fintech neo-banking and healthcare telemedicine, explore how AVRX crafts battle-tested mobile solutions.
          </p>
        </div>

        {/* Interactive Model Display Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900/70 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3 flex-wrap">
              <span className={`text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full text-white bg-gradient-to-r ${appModels[activeAppModelIndex].accentColor}`}>
                {appModels[activeAppModelIndex].badge}
              </span>
              <span className="text-xs font-bold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full">
                {appModels[activeAppModelIndex].category}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                Launch: {appModels[activeAppModelIndex].launchTime}
              </span>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {appModels[activeAppModelIndex].title}
              </h3>
              <p className="text-sm text-cyan-300 font-medium mt-1">
                {appModels[activeAppModelIndex].tagline}
              </p>
            </div>

            {/* Features Checklist */}
            <div className="space-y-2.5">
              {appModels[activeAppModelIndex].features.map((feat, fIdx) => (
                <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Performance Badges */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
                <div className="text-xs sm:text-sm font-bold text-white">{appModels[activeAppModelIndex].metrics.fps}</div>
                <div className="text-[10px] text-slate-400">Rendering Rate</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
                <div className="text-xs sm:text-sm font-bold text-cyan-400">{appModels[activeAppModelIndex].metrics.size}</div>
                <div className="text-[10px] text-slate-400">Binary Footprint</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
                <div className="text-xs sm:text-sm font-bold text-emerald-400">{appModels[activeAppModelIndex].metrics.rating}</div>
                <div className="text-[10px] text-slate-400">App Store Rating</div>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <button
                onClick={() => handleOpenFormWithPlan(`Model: ${appModels[activeAppModelIndex].title}`)}
                className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md flex items-center gap-2 cursor-pointer"
              >
                <span>Launch This App Model</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveAppModelIndex((prev) => (prev > 0 ? prev - 1 : appModels.length - 1))}
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
                  aria-label="Previous app model"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono text-slate-400">
                  {activeAppModelIndex + 1} / {appModels.length}
                </span>
                <button
                  onClick={() => setActiveAppModelIndex((prev) => (prev < appModels.length - 1 ? prev + 1 : 0))}
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
                  aria-label="Next app model"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

          {/* Visual Showcase Thumbnail Bar */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3 max-h-[420px] overflow-y-auto pr-1 scrollbar-none">
            {appModels.map((model, mIdx) => {
              const isSelected = activeAppModelIndex === mIdx;
              return (
                <button
                  key={mIdx}
                  onClick={() => setActiveAppModelIndex(mIdx)}
                  className={`p-3.5 rounded-2xl text-left transition-all border ${
                    isSelected
                      ? 'bg-cyan-500/15 border-cyan-500/80 shadow-[0_0_15px_rgba(6,182,212,0.15)]'
                      : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700'
                  }`}
                >
                  <div className="text-[10px] font-mono text-cyan-400 font-bold uppercase">{model.category}</div>
                  <div className="text-xs font-bold text-white truncate mt-1">{model.title}</div>
                  <div className="text-[10px] text-slate-400 mt-1">{model.platforms}</div>
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. 8 SPECIALIZED APP TIERS & SUB-CATEGORIES */}
      <section className="py-16 px-4 sm:px-6 lg:px-10 xl:px-12 max-w-[1720px] mx-auto space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-semibold">
            <Layers className="w-3.5 h-3.5" />
            <span>TAILORED MOBILE CATEGORIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Specialized Development Tiers for Every Business
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Choose from pure native Android/iOS builds, cross-platform Flutter/React Native, or full-scale multi-app on-demand ecosystems.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {[
            { id: 'all', label: 'All App Tiers' },
            { id: 'flutter', label: 'Flutter Cross-Platform' },
            { id: 'native-android', label: 'Native Android' },
            { id: 'native-ios', label: 'Native iOS' },
            { id: 'react-native', label: 'React Native' },
            { id: 'enterprise', label: 'Enterprise & Multi-App' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.3)] font-extrabold'
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
                className="rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 p-6 flex flex-col justify-between space-y-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(6,182,212,0.08)] group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
                      {item.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-400">Starting</span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  <div className="text-2xl font-black text-cyan-400">
                    {item.price}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                    {item.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-[11px] text-slate-300">
                        <Check className="w-3 h-3 text-cyan-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleOpenFormWithPlan(`Tier: ${item.title} (${item.price})`)}
                  className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-slate-200 font-bold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <span>Build This App</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
        </div>
      </section>

      {/* 6. INTERACTIVE AI TOOLS & APP COST ESTIMATOR SUITE */}
      <section id="app-calculator" className="py-20 px-4 sm:px-6 lg:px-10 xl:px-12 max-w-[1720px] mx-auto space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
            <Cpu className="w-3.5 h-3.5" />
            <span>AI ARCHITECT &amp; COST ESTIMATOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Plan Architecture &amp; Estimate Development Cost Live
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Use our AI Blueprint Generator to map technical architecture and interactive budget sliders to calculate real app investment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Tool 1: AI App Architecture Blueprint Generator (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">AI App Architecture Recommender</h3>
                  <p className="text-xs text-slate-400">Auto-generate optimal framework, backend, and security tier</p>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                Gemini Engine
              </span>
            </div>

            <form onSubmit={handleGenerateArchitecture} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">App Category / Model</label>
                  <select
                    value={appTypeInput}
                    onChange={(e) => setAppTypeInput(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                  >
                    <option value="E-Commerce & Quick Delivery">E-Commerce &amp; Quick Delivery</option>
                    <option value="FinTech, UPI & Digital Wallet">FinTech, UPI &amp; Digital Wallet</option>
                    <option value="Healthcare & Telemedicine">Healthcare &amp; Telemedicine</option>
                    <option value="On-Demand Taxi & Cab Booking">On-Demand Taxi &amp; Cab Booking</option>
                    <option value="EdTech & Live Video Learning">EdTech &amp; Live Video Learning</option>
                    <option value="B2B Field Force & Inventory">B2B Field Force &amp; Inventory</option>
                    <option value="Real Estate & Virtual Property">Real Estate &amp; Virtual Property</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">Target Operating System</label>
                  <select
                    value={primaryOsInput}
                    onChange={(e) => setPrimaryOsInput(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                  >
                    <option value="Both Android & iOS (Dual OS)">Both Android &amp; iOS (Dual OS)</option>
                    <option value="Android Native (Play Store)">Android Native (Play Store)</option>
                    <option value="iOS Native (Apple App Store)">iOS Native (Apple App Store)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300">Target Audience &amp; Scale</label>
                <input
                  type="text"
                  value={targetAudienceInput}
                  onChange={(e) => setTargetAudienceInput(e.target.value)}
                  placeholder="e.g. Pan-India Retailers, 50,000+ Monthly Active Users"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300">Key Feature Requirements</label>
                <input
                  type="text"
                  value={keyFeaturesInput}
                  onChange={(e) => setKeyFeaturesInput(e.target.value)}
                  placeholder="e.g. UPI Intent, Live Driver Map, Push Alerts, Biometrics"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <button
                type="submit"
                disabled={isGeneratingArchitecture}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:opacity-50"
              >
                {isGeneratingArchitecture ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Analyzing Architecture...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Generate AI Mobile Architecture Blueprint</span>
                  </>
                )}
              </button>
            </form>

            {/* Generated Output Card */}
            {generatedArchitecture && (
              <div className="mt-4 p-5 rounded-2xl bg-slate-950 border border-cyan-500/40 space-y-4 animate-in fade-in duration-300">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-bold text-cyan-400 uppercase">Recommended Mobile Stack</span>
                    <h4 className="text-sm font-extrabold text-white">{generatedArchitecture.recommendedFramework}</h4>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-400 block">Est. Investment</span>
                    <span className="text-xs font-bold text-emerald-400">{generatedArchitecture.budgetTier}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                    <span className="text-[10px] text-slate-400 block">Backend Server</span>
                    <span className="font-bold text-slate-200">{generatedArchitecture.recommendedBackend}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                    <span className="text-[10px] text-slate-400 block">Database Architecture</span>
                    <span className="font-bold text-slate-200">{generatedArchitecture.databaseArchitecture}</span>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <span className="text-[11px] font-bold text-cyan-300 block">Key Architecture Highlights:</span>
                  <div className="space-y-1">
                    {generatedArchitecture.keyArchitectureHighlights.map((hl: string, hIdx: number) => (
                      <div key={hIdx} className="flex items-center gap-2 text-[11px] text-slate-300">
                        <Check className="w-3 h-3 text-cyan-400 shrink-0" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleOpenFormWithPlan(`AI Blueprint: ${generatedArchitecture.recommendedFramework} (${generatedArchitecture.budgetTier})`)}
                  className="w-full py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Claim Free Technical Specification PDF</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

          </div>

          {/* Tool 2: App Development Cost & Timeline Calculator (5 cols) */}
          <div className="lg:col-span-5 rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 space-y-6 shadow-xl flex flex-col justify-between">
            <div className="space-y-1 border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2">
                <Sliders className="w-5 h-5 text-cyan-400" />
                <h3 className="text-base font-bold text-white">App Cost &amp; Timeline Calculator</h3>
              </div>
              <p className="text-xs text-slate-400">Interactive live estimate based on screens &amp; features</p>
            </div>

            {/* Slider 1: Screen Count */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="text-slate-300">Number of Unique UI Screens:</span>
                <span className="text-cyan-400 font-mono">{screenCount} Screens</span>
              </div>
              <input
                type="range"
                min="5"
                max="30"
                value={screenCount}
                onChange={(e) => setScreenCount(Number(e.target.value))}
                className="w-full accent-cyan-500 cursor-pointer"
              />
            </div>

            {/* Platform Selection */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300">Target Platforms:</label>
              <div className="grid grid-cols-3 gap-2 text-xs font-bold">
                <button
                  type="button"
                  onClick={() => setPlatformSelection('dual')}
                  className={`py-2 rounded-xl border text-center transition-all ${
                    platformSelection === 'dual'
                      ? 'bg-cyan-500/20 border-cyan-500 text-cyan-300'
                      : 'bg-slate-950 border-slate-800 text-slate-400'
                  }`}
                >
                  Both (Android + iOS)
                </button>
                <button
                  type="button"
                  onClick={() => setPlatformSelection('android')}
                  className={`py-2 rounded-xl border text-center transition-all ${
                    platformSelection === 'android'
                      ? 'bg-cyan-500/20 border-cyan-500 text-cyan-300'
                      : 'bg-slate-950 border-slate-800 text-slate-400'
                  }`}
                >
                  Android Only
                </button>
                <button
                  type="button"
                  onClick={() => setPlatformSelection('ios')}
                  className={`py-2 rounded-xl border text-center transition-all ${
                    platformSelection === 'ios'
                      ? 'bg-cyan-500/20 border-cyan-500 text-cyan-300'
                      : 'bg-slate-950 border-slate-800 text-slate-400'
                  }`}
                >
                  iOS Only
                </button>
              </div>
            </div>

            {/* Feature Checkboxes */}
            <div className="space-y-2 pt-2 border-t border-slate-800/80">
              <span className="text-xs font-bold text-slate-300 block">Include Native Modules:</span>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <label className="flex items-center gap-2 cursor-pointer text-slate-300">
                  <input
                    type="checkbox"
                    checked={hasPaymentGateway}
                    onChange={(e) => setHasPaymentGateway(e.target.checked)}
                    className="accent-cyan-500 rounded"
                  />
                  <span>1-Click UPI Gateway</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer text-slate-300">
                  <input
                    type="checkbox"
                    checked={hasLiveTracking}
                    onChange={(e) => setHasLiveTracking(e.target.checked)}
                    className="accent-cyan-500 rounded"
                  />
                  <span>Live GPS Tracking</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer text-slate-300">
                  <input
                    type="checkbox"
                    checked={hasBiometricAuth}
                    onChange={(e) => setHasBiometricAuth(e.target.checked)}
                    className="accent-cyan-500 rounded"
                  />
                  <span>Biometric Fingerprint</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer text-slate-300">
                  <input
                    type="checkbox"
                    checked={hasCustomBackend}
                    onChange={(e) => setHasCustomBackend(e.target.checked)}
                    className="accent-cyan-500 rounded"
                  />
                  <span>Custom Cloud API</span>
                </label>
              </div>
            </div>

            {/* Live Calculated Output Box */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-cyan-500/40 text-center space-y-2">
              <div className="text-xs text-slate-400">Estimated Total Investment</div>
              <div className="text-3xl font-black text-cyan-400">
                ₹{calculatedAppCost.toLocaleString('en-IN')}
              </div>
              <div className="text-xs text-emerald-400 font-medium">
                ⚡ Turnaround Timeline: ~{calculatedDays} Working Days
              </div>
            </div>

            <button
              onClick={() => handleOpenFormWithPlan(`Calculated Estimate: ₹${calculatedAppCost.toLocaleString('en-IN')} (${screenCount} Screens, ${calculatedDays} Days)`)}
              className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
            >
              <span>Lock This Estimated Quote</span>
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
            <span>TRANSPARENT APP PACKAGES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Clear Pricing, Zero Hidden Fees &amp; 100% Code Ownership
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Every package includes design wireframes, API integrations, Google Play / Apple App Store publishing, and 3 months of warranty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Plan 1: Starter Native App */}
          <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-8 flex flex-col justify-between space-y-6 hover:border-slate-700 transition-colors">
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Starter Tier</span>
                <h3 className="text-2xl font-black text-white">Single-Platform App</h3>
                <p className="text-xs text-slate-400">Perfect for local retail, startups, or single-store MVP</p>
              </div>

              <div className="text-3xl font-black text-white">
                ₹24,999
                <span className="text-xs font-normal text-slate-400"> / one-time</span>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-slate-800 text-xs text-slate-300">
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" /><span>Native Android or iOS App Build</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" /><span>Up to 8 Custom UI Screens</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" /><span>1-Click UPI Payment Gateway</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" /><span>Google Play Store Publishing</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" /><span>Admin Panel for Order / Product Management</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" /><span>Firebase Push Notifications</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" /><span>100% Full Source Code Handover</span></div>
              </div>
            </div>

            <button
              onClick={() => handleOpenFormWithPlan('Starter Single-Platform App (₹24,999)')}
              className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-colors cursor-pointer"
            >
              Choose Starter App
            </button>
          </div>

          {/* Plan 2: Pro Cross-Platform App (Popular) */}
          <div className="rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border-2 border-cyan-500 p-8 flex flex-col justify-between space-y-6 relative shadow-[0_0_40px_rgba(6,182,212,0.15)]">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-black text-[11px] uppercase tracking-wider shadow-md">
              ⭐ Most Popular Choice
            </div>

            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Growth Tier</span>
                <h3 className="text-2xl font-black text-white">Dual-OS Flutter Pro App</h3>
                <p className="text-xs text-slate-400">Both Android &amp; iOS from single unified codebase</p>
              </div>

              <div className="text-3xl font-black text-cyan-400">
                ₹44,999
                <span className="text-xs font-normal text-slate-400"> / one-time</span>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-slate-800 text-xs text-slate-200">
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" /><span>Both Android (APK) &amp; iOS (IPA) Apps</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" /><span>Up to 18 High-Converting UI Screens</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" /><span>1-Click UPI Intent + Cards + EMI</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" /><span>Live GPS Map Tracking &amp; Geofencing</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" /><span>Biometric Fingerprint &amp; FaceID Login</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" /><span>Play Store &amp; App Store Approval Guarantee</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" /><span>3 Months Dedicated Post-Launch Support</span></div>
              </div>
            </div>

            <button
              onClick={() => handleOpenFormWithPlan('Dual-OS Flutter Pro App (₹44,999)')}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:brightness-110 text-slate-950 font-black text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
            >
              Launch Dual-OS Pro App
            </button>
          </div>

          {/* Plan 3: Custom Enterprise Ecosystem */}
          <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-8 flex flex-col justify-between space-y-6 hover:border-slate-700 transition-colors">
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">Scale Tier</span>
                <h3 className="text-2xl font-black text-white">Enterprise Ecosystem</h3>
                <p className="text-xs text-slate-400">Customer App + Driver/Partner App + Master Console</p>
              </div>

              <div className="text-3xl font-black text-white">
                ₹79,999+
                <span className="text-xs font-normal text-slate-400"> / custom scope</span>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-slate-800 text-xs text-slate-300">
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" /><span>Dual Mobile Apps (Customer + Partner/Driver)</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" /><span>Unlimited UI Screens &amp; Custom Workflows</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" /><span>Custom Node.js / Go Cloud Microservices</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" /><span>ERP / SAP / Tally Custom API Webhooks</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" /><span>Automated CI/CD Deployment Pipeline</span></div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-cyan-400" /><span>Enterprise SLA Uptime &amp; Dedicated Tech Team</span></div>
              </div>
            </div>

            <button
              onClick={() => handleOpenFormWithPlan('Enterprise Ecosystem Suite (₹79,999+)')}
              className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-colors cursor-pointer"
            >
              Consult Enterprise Architect
            </button>
          </div>

        </div>
      </section>

      {/* 8. 5-STAGE MOBILE LAUNCH ROADMAP */}
      <section className="py-16 px-4 sm:px-6 lg:px-10 xl:px-12 max-w-[1720px] mx-auto space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
            <Clock className="w-3.5 h-3.5" />
            <span>AGILE DELIVERY ROADMAP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How We Take Your App from Concept to Play Store &amp; App Store
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Transparent 5-stage sprint structure ensuring fast turnaround with continuous milestone demos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            {
              step: '01',
              title: 'Wireframing & UX',
              desc: 'Figma interactive clickable prototype mapping every button, navigation tap, and user journey.'
            },
            {
              step: '02',
              title: 'Mobile Architecture',
              desc: 'Setting up Flutter/Native repo, database schemas, and clean state management.'
            },
            {
              step: '03',
              title: 'Agile Coding & APIs',
              desc: 'Frontend UI construction, payment gateways, push notifications, and live backend APIs.'
            },
            {
              step: '04',
              title: 'QA & Stress Testing',
              desc: 'Device testing across 20+ Android & iOS screen resolutions, low network tests, and 60 FPS checks.'
            },
            {
              step: '05',
              title: 'Store Publishing',
              desc: 'Google Play & Apple App Store submission, compliance review, and live public launch.'
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-2.5 relative hover:border-cyan-500/50 transition-colors"
            >
              <div className="text-2xl font-black text-cyan-400/30 font-mono">{item.step}</div>
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-semibold shadow-sm">
            <HelpCircle className="w-4 h-4 text-cyan-400" />
            <span>KNOWLEDGE BASE &amp; FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Everything You Need to Know About{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
              AVRX App Development
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Transparent answers regarding store approvals, cross-platform performance, UPI payments, push alerts, and 100% source code ownership.
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
              placeholder="Search questions (e.g. Play Store, Flutter, UPI, Biometric, Offline, Source Code, Apple)..."
              className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500/80 focus:ring-2 focus:ring-cyan-500/20 shadow-inner"
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
              { id: 'all', label: 'All Questions', count: appFaqs.length },
              { id: 'publishing', label: '🚀 Store Publishing', count: appFaqs.filter(f => f.category === 'publishing').length },
              { id: 'tech', label: '⚡ Tech & Performance', count: appFaqs.filter(f => f.category === 'tech').length },
              { id: 'payments', label: '💳 Payments & APIs', count: appFaqs.filter(f => f.category === 'payments').length },
              { id: 'ownership', label: '🔐 Ownership & Code', count: appFaqs.filter(f => f.category === 'ownership').length },
              { id: 'cost', label: '💰 Cost & Timelines', count: appFaqs.filter(f => f.category === 'cost').length }
            ].map((cat) => {
              const isSelected = faqCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setFaqCategory(cat.id as any)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.3)] font-extrabold'
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
          const filteredFaqs = appFaqs.filter(faq => {
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
                <HelpCircle className="w-8 h-8 text-cyan-400 mx-auto opacity-70" />
                <h4 className="text-base font-bold text-white">No Matching Questions Found</h4>
                <p className="text-xs text-slate-400">
                  Try searching for keywords like "Play Store", "Flutter", "UPI", or "Biometrics", or reset your search.
                </p>
                <button
                  onClick={() => { setFaqSearchQuery(''); setFaqCategory('all'); }}
                  className="px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 text-xs font-bold"
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
                        ? 'bg-slate-900/95 border-cyan-500/50 shadow-[0_0_25px_rgba(6,182,212,0.08)]' 
                        : 'bg-slate-900/70 hover:bg-slate-900/90 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : faq.id)}
                      className="w-full p-5 text-left flex items-start justify-between gap-3 font-bold text-sm sm:text-base text-slate-100 hover:text-cyan-300 transition-colors cursor-pointer group"
                    >
                      <div className="space-y-1.5 pr-2">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
                            {faq.categoryLabel}
                          </span>
                          <span className="text-[10px] font-mono text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded">
                            {faq.tag}
                          </span>
                        </div>
                        <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                          {faq.q}
                        </h4>
                      </div>
                      <div className={`p-1.5 rounded-lg shrink-0 mt-1 transition-all ${
                        isOpen ? 'bg-cyan-500 text-slate-950 rotate-180' : 'bg-slate-800 text-slate-400 group-hover:text-white'
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
        <div className="rounded-2xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 border border-cyan-500/30 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <Headphones className="w-5 h-5 text-cyan-400" />
              <h4 className="text-base font-bold text-white">Have a Custom Architecture or Hardware Integration Need?</h4>
            </div>
            <p className="text-xs sm:text-sm text-slate-300">
              Speak directly with an AVRX Mobile Solutions Specialist to evaluate your database requirements, hardware APIs, and rollout schedule.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0 flex-wrap justify-center">
            <button
              onClick={() => handleOpenFormWithPlan('Custom Mobile App Consultation')}
              className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
            >
              <span>Ask a Tech Lead</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <a
              href="https://wa.me/919999999999?text=Hello%20AVRX,%20I%20have%20a%20question%20regarding%20Mobile%20App%20Development"
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
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
              ⚡ FREE APP ARCHITECTURE BLUEPRINT
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Ready to Launch Your Mobile App?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Fill out this quick form and our Principal Mobile Architect will send you a detailed UI wireframe, tech roadmap, and commercial proposal within 30 minutes.
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
                  placeholder="e.g. Rahul Sharma"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
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
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-300">Email Address (Optional)</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. rahul@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-300">App Category</label>
                <select
                  value={formData.appType}
                  onChange={(e) => setFormData({ ...formData, appType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 focus:outline-none focus:border-cyan-500"
                >
                  <option value="Cross-Platform Mobile App (Android + iOS)">Cross-Platform Mobile App (Android + iOS)</option>
                  <option value="Native Android App (Play Store)">Native Android App (Play Store)</option>
                  <option value="Native iOS App (Apple App Store)">Native iOS App (Apple App Store)</option>
                  <option value="E-Commerce / Delivery App">E-Commerce / Delivery App</option>
                  <option value="FinTech / UPI Payment App">FinTech / UPI Payment App</option>
                  <option value="On-Demand Taxi / Booking App">On-Demand Taxi / Booking App</option>
                  <option value="Enterprise B2B Field App">Enterprise B2B Field App</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-300">Expected Budget Range</label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 focus:outline-none focus:border-cyan-500"
                >
                  <option value="₹24,999 - ₹40,000">₹24,999 - ₹40,000 (Starter App)</option>
                  <option value="₹40,000 - ₹75,000">₹40,000 - ₹75,000 (Dual-OS Pro Suite)</option>
                  <option value="₹75,000 - ₹1,50,000+">₹75,000 - ₹1,50,000+ (Custom Enterprise Suite)</option>
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-300">Project Concept &amp; Specific Features</label>
              <textarea
                rows={3}
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                placeholder="Tell us about your app concept, target users, or any specific integrations needed..."
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 hover:brightness-110 text-slate-950 font-black text-sm uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(6,182,212,0.3)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Submitting to Lead Engine...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Request Free App Architecture &amp; Live Demo</span>
                </>
              )}
            </button>
          </form>

        </div>
      </section>

      {/* POPUP MODAL FOR DIRECT PLAN QUOTE */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-cyan-500/40 rounded-3xl p-6 sm:p-8 max-w-lg w-full space-y-5 shadow-2xl relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg bg-slate-800 text-xs"
            >
              ✕
            </button>

            <div className="space-y-1">
              <span className="text-[10px] font-bold text-cyan-400 uppercase">Selected Configuration</span>
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
                  placeholder="Rahul Sharma"
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
                className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all"
              >
                {isSubmitting ? 'Sending Request...' : 'Confirm App Consultation'}
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
