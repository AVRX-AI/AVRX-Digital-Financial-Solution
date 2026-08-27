import { BlogPost, BlogCategory } from '../types/blog';
import featuredBusinessImg from '../assets/images/business_website_2026_1786766818552.jpg';

export const BLOG_CATEGORIES: ('All' | BlogCategory)[] = [
  'All',
  'Digital Solutions',
  'Financial Solutions',
  'Tax & GST',
  'Insurance',
  'Business & Startup'
];

export const BLOG_POSTS_DATA: BlogPost[] = [
  {
    id: 'blog-website-2026',
    slug: 'why-business-website-is-important-in-2026',
    title: '2026 में Business Website क्यों जरूरी है? जानिए 10 बड़े फायदे',
    category: 'Digital Solutions',
    featuredImage: featuredBusinessImg,
    imageAlt: '2026 में Business Website के फायदे - AVRX Digital & Financial Solution',
    excerpt: 'आज के digital era में professional business website सिर्फ online presence नहीं बल्कि credibility, SEO, customer trust और lead generation का powerful tool बन सकती है।',
    date: '15 August 2026',
    isoDate: '2026-08-15',
    readTime: '8–10 min read',
    author: {
      name: 'AVRX Digital Strategy Team',
      role: 'Enterprise Digital Solutions'
    },
    tags: ['Business Website', 'Web Development', 'Digital Transformation', 'SEO', 'Lead Generation', 'India 2026'],
    seoTitle: '2026 में Business Website क्यों जरूरी है? | AVRX',
    metaDescription: 'जानिए 2026 में Business Website क्यों जरूरी है और कैसे professional website आपके business की credibility, SEO, online visibility और customer enquiries बढ़ाने में मदद कर सकती है।',
    canonicalUrl: 'https://www.avrx.in/blog/why-business-website-is-important-in-2026',
    isFeatured: true,
    tableOfContents: [
      { id: 'intro', title: 'Introduction' },
      { id: 'what-is-website', title: 'Business Website क्या होती है?' },
      { id: 'benefit-1', title: '1. Professional Business Identity' },
      { id: 'benefit-2', title: '2. Customer Trust & Credibility' },
      { id: 'benefit-3', title: '3. 24×7 Online Presence & Accessibility' },
      { id: 'benefit-4', title: '4. Google Search Visibility & Organic Traffic' },
      { id: 'benefit-5', title: '5. Reduced Dependence on Social Media Algorithms' },
      { id: 'benefit-6', title: '6. High-Converting Lead Generation Machine' },
      { id: 'benefit-7', title: '7. Better Service & Product Showcase' },
      { id: 'benefit-8', title: '8. Local Business Visibility & Regional Reach' },
      { id: 'benefit-9', title: '9. Fast Mobile-First User Experience' },
      { id: 'benefit-10', title: '10. Sustainable Long-Term Competitive Advantage' },
      { id: 'infographics', title: 'Visual Blueprint: Digital Growth & Best Practices' },
      { id: 'faq', title: 'Frequently Asked Questions (FAQ)' },
      { id: 'conclusion', title: 'Conclusion & Next Steps' }
    ],
    introduction: [
      'आज के digital era में किसी business की पहली पहचान सिर्फ उसका office, दुकान, visiting card या social media profile नहीं है। 2026 में consumer buying behavior पूरी तरह से बदल चुका है—चाहे कोई local customer हो या corporate client, किसी भी service या product को खरीदने से पहले वह Google पर search करके business की official website verify करता है।',
      '2026 में business website सिर्फ एक static online brochure या formality नहीं रह गई है। यह आपके business का official digital storefront, information center, credibility anchor और 24×7 automated lead-generation channel बन चुकी है। जो business आज professional website नहीं रखते, वे हर दिन सैकड़ों potential leads और valuable customer trust खो रहे हैं।'
    ],
    whatIsSection: {
      title: 'Business Website क्या होती है?',
      content: [
        'Business Website किसी भी company, enterprise, startup या professional service provider का official digital address (Domain) होता है, जहां business की संपूर्ण जानकारी—जैसे services, products, pricing, achievements, customer reviews, legal compliance और direct contact options—व्यवस्थित तरीके से उपलब्ध रहती है।',
        'सोशल मीडिया प्लेटफॉर्म्स (जैसे Instagram, Facebook या WhatsApp) third-party algorithm पर निर्भर होते हैं, जबकि आपकी website आपकी exclusive digital asset होती है जिस पर आपका 100% control होता है।'
      ]
    },
    mainSections: [
      {
        id: 'benefit-1',
        title: '1. Professional Business Identity (प्रोफेशनल पहचान)',
        content: 'आज के competitive market में professional domain (जैसे yourbusiness.com) और customized corporate website आपके brand को local competition से अलग करती है। जब कोई client आपके business का नाम सुनता है, तो वह सबसे पहले website देखता है। एक sleek, fast और high-tech website instantly establish करती है कि आप एक serious और trustworthy business हैं।',
        points: [
          'Professional Custom Domain (@yourcompany.com email addresses के साथ)',
          'Consistent Brand Colors, Typography और Visual Identity',
          'Third-party ads और distraction-free clean environment'
        ],
        callout: 'Fact: 84% Indian consumers मानते हैं कि जिन businesses के पास professional website होती है, वे सिर्फ social media page वाले businesses से अधिक credible होते हैं।'
      },
      {
        id: 'benefit-2',
        title: '2. Customer Trust & Credibility (ग्राहकों का अटूट भरोसा)',
        content: 'Online frauds और unverified pages के दौर में genuine customers verification खोजते हैं। आपकी website पर company registration details, GST info, verified client testimonials, portfolio showcase, privacy policy और physical address देखकर customer बिना किसी संकोच के deal finalize करता है।',
        points: [
          'Verified client testimonials और case studies',
          'SSL Security Certificate (HTTPS) जो user data सुरक्षित रखता है',
          'Official contact details और verified legal disclosures'
        ]
      },
      {
        id: 'benefit-3',
        title: '3. 24×7 Online Presence & Accessibility (बिना रुके चौबीसों घंटे खुला)',
        content: 'आपकी physical office या shop शाम को बंद हो सकती है, लेकिन आपकी website 24 घंटे, 365 दिन live रहती है। कोई भी potential customer रात के 11 बजे या रविवार की सुबह भी आपकी services को explore कर सकता है, pricing calculator use कर सकता है, और inquiry submit कर सकता है।',
        points: [
          'Non-stop accessibility across all timezones and holidays',
          'Automated inquiry capture और instant WhatsApp connection',
          'Customers अपनी सुविधा अनुसार information read कर सकते हैं'
        ]
      },
      {
        id: 'benefit-4',
        title: '4. Google Search Visibility & Organic Traffic (Google पर मुफ्त ग्राहक)',
        content: 'जब कोई व्यक्ति Google पर search करता है—"Best Web Developer near me", "Business Loan Consultant", या "GST Registration Service"—तो Google सिर्फ optimized websites को search results में ऊपर rank करता है। SEO-friendly website होने से आपको high-intent organic traffic मिलता है जिसके लिए आपको बार-बार paid ads का खर्चा नहीं करना पड़ता।',
        points: [
          'Targeted high-intent search keywords पर Google First Page Ranking',
          'Free recurring organic leads month after month',
          'Brand authority in your targeted industry niche'
        ],
        callout: 'SEO Advantage: Organic search से आने वाले leads का conversion rate paid display ads की तुलना में 3x से अधिक होता है।'
      },
      {
        id: 'benefit-5',
        title: '5. Reduced Dependence on Social Media Algorithms (स्वतंत्र डिजिटल संपत्ति)',
        content: 'Instagram, Facebook और LinkedIn अपने algorithms बदलते रहते हैं जिससे organic reach कभी भी 90% तक गिर सकती है। Social media accounts block या hack होने का जोखिम भी रहता है। लेकिन आपकी website आपकी proprietary digital asset है—इसका traffic, data, email list और client inquiries पूरी तरह आपके स्वामित्व में रहते हैं।',
        points: [
          'Algorithm changes का कोई negative impact नहीं',
          'Zero platform lock-in: direct customer connection',
          'Complete ownership of customer lead database and analytics'
        ]
      },
      {
        id: 'benefit-6',
        title: '6. High-Converting Lead Generation Machine (लीड जनरेशन का पॉवरहाउस)',
        content: 'एक strategic website visitors को paying customers में बदलने का वैज्ञानिक funnel बनाती है: Visitor → Service Clarity → Value & Trust → Interactive CTA → High-Quality Enquiry → Deal Closed। Clear Call-to-Actions (CTAs) जैसे Get a Quote, WhatsApp Chat, Request a Callback और Instant Booking forms से conversion rate कई गुना बढ़ जाता है।',
        points: [
          'Direct WhatsApp Instant Chat Integration',
          'Interactive Quote Calculators और multi-step inquiry forms',
          'Automated CRM synchronization for instant sales follow-up'
        ]
      },
      {
        id: 'benefit-7',
        title: '7. Better Service & Product Showcase (सेवाओं का विस्तृत प्रदर्शन)',
        content: 'Social media की सीमित carousel posts की जगह website पर आप अपनी प्रत्येक service का dedicated landing page बना सकते हैं। जैसे AVRX पर Website Design, E-Commerce, Mobile Apps, SEO, Financial Loans, GST Filing और Insurance—हर service के features, process, pricing और benefits विस्तार से समझाए जा सकते हैं।',
        points: [
          'Dedicated Landing Pages for each specialized service',
          'High-resolution portfolio galleries, live demo previews और video walkthroughs',
          'Transparent comparison tables और package breakdowns'
        ]
      },
      {
        id: 'benefit-8',
        title: '8. Local Business Visibility & Regional Reach (लोकल से ग्लोबल विस्तार)',
        content: 'Local SEO integration (Google Business Profile + Website schema) की मदद से आपका business अपने शहर, राज्य और पूरे भारत के targeted pincodes में easily discoverable बनता है। एक local shop या office अपनी website के दम पर nationwide clients को services serve कर सकती है।',
        points: [
          'Google Maps और Local Search results में top ranking',
          'Hyper-local structured data schema markup',
          'Geographic expansion without expensive physical branch offices'
        ]
      },
      {
        id: 'benefit-9',
        title: '9. Fast Mobile-First User Experience (स्मार्टफोन पर सुपरफास्ट स्पीड)',
        content: '2026 में 80% से अधिक Indian users mobile smartphones पर browse करते हैं। एक modern responsive website हर screen size (Mobile, Tablet, Laptop, Ultra-wide 4K) पर instantly load होती है। Ultra-fast loading speed (sub-second) bounce rate घटाती है और Google ranking boost करती है।',
        points: [
          '100% Mobile Responsive fluid Tailwind layout',
          'Lightning fast sub-second page rendering speed',
          'Seamless touch gestures, one-click call और easy navigation'
        ]
      },
      {
        id: 'benefit-10',
        title: '10. Sustainable Long-Term Competitive Advantage (प्रतिस्पर्धा में सबसे आगे)',
        content: 'यदि आपके competitors के पास modern website नहीं है या उनकी website outdated और slow है, तो एक fast, modern, AI-integrated AVRX standard website launch करके आप instantly market leadership हासिल कर लेते हैं। यह एक one-time strategic investment है जो सालों-साल continuous ROI देती है।',
        points: [
          'Market differentiation through next-gen UI/UX design',
          'Higher perceived brand value allowing premium pricing',
          'Future-ready integration with AI chatbots, payments, and analytics'
        ]
      }
    ],
    faqs: [
      {
        question: 'क्या 2026 में छोटे Business को भी Website चाहिए?',
        answer: 'हाँ, बिल्कुल। आज चाहे किराना सप्लायर हो, CA, legal consultant, manufacturer, freelance developer या local retailer—छोटे businesses को local trust बनाने, Google Map search में ऊपर आने और WhatsApp पर direct genuine inquiries पाने के लिए website सबसे आवश्यक tool है।'
      },
      {
        question: 'Business Website बनाने में कितना खर्च आता है?',
        answer: 'Website का खर्च आपकी आवश्यकता पर निर्भर करता है। AVRX पर standard business landing pages ₹4,999 से शुरू होते हैं, comprehensive dynamic corporate websites ₹9,999 - ₹19,999 तक आती हैं, और custom full-stack enterprise/e-commerce platforms ₹24,999+ में तैयार किए जाते हैं जिसमें domain, cloud hosting, SSL, SEO और maintenance support शामिल रहता है।'
      },
      {
        question: 'क्या Website से Google Ranking मिल सकती है?',
        answer: 'हाँ। यदि आपकी website clean coding standards, fast loading speed, mobile responsiveness, targeted keywords और proper schema structured data के साथ बनाई गई है, तो Google search results में organic top ranking आसानी से प्राप्त होती है।'
      },
      {
        question: 'क्या सिर्फ Instagram या Facebook से Business चला सकते हैं?',
        answer: 'Social media awareness के लिए बहुत अच्छा है, लेकिन सिर्फ social media पर निर्भर रहना खतरनाक हो सकता है क्योंकि algorithm changes, account restrictions या lack of direct customer ownership आपके business को नुकसान पहुँचा सकते हैं। Website आपकी अपनी 100% नियंत्रित digital asset होती है।'
      },
      {
        question: 'क्या Business Website Mobile Friendly होनी चाहिए?',
        answer: 'हाँ, 2026 में mobile friendliness अनिवार्य है। भारत में 80%+ traffic smartphones से आता है और Google भी mobile-first indexing का उपयोग करता है। AVRX द्वारा बनाई गई सभी websites fully responsive और mobile-optimized होती हैं।'
      },
      {
        question: 'Website और SEO में क्या अंतर है?',
        answer: 'Website आपका digital office/storefront है, जबकि SEO (Search Engine Optimization) वह तकनीक है जिससे लोग Google search के माध्यम से आपके digital office तक पहुंचते हैं। एक अच्छी website में SEO शुरू से integrated होना चाहिए।'
      }
    ],
    relatedSlugs: [
      'digital-marketing-guide-for-business-growth',
      'complete-seo-ranking-guide-2026',
      'business-website-development-cost-in-india'
    ]
  },
  {
    id: 'blog-digital-marketing',
    slug: 'digital-marketing-guide-for-business-growth',
    title: 'Digital Marketing क्या है और Business को इससे क्या फायदा है?',
    category: 'Digital Solutions',
    featuredImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Digital Marketing Guide for Business Growth - AVRX',
    excerpt: 'Google Ads, Meta Lead Ads, Social Media और Content Marketing के जरिए कम बजट में targeted customers कैसे हासिल करें।',
    date: '10 August 2026',
    isoDate: '2026-08-10',
    readTime: '6–8 min read',
    author: {
      name: 'AVRX Growth Advisory',
      role: 'Performance Marketing'
    },
    tags: ['Digital Marketing', 'Meta Ads', 'Google Ads', 'ROI', 'Lead Generation'],
    seoTitle: 'Digital Marketing Guide for Business Growth | AVRX',
    metaDescription: 'Digital Marketing क्या है और 2026 में Indian businesses Google और Meta Ads के जरिए high ROI sales leads कैसे generate कर सकते हैं।',
    canonicalUrl: 'https://www.avrx.in/blog/digital-marketing-guide-for-business-growth',
    isComingSoon: false,
    tableOfContents: [
      { id: 'intro', title: 'What is Digital Marketing?' },
      { id: 'channels', title: 'Top 5 Digital Channels in 2026' },
      { id: 'roi', title: 'Measuring Real ROI & Customer Acquisition' }
    ],
    introduction: [
      'पारंपरिक अखबार के विज्ञापन या पैम्फलेट बांटने की तुलना में Digital Marketing आपके targeted customer के smartphone screen तक सीधे पहुंचने का सबसे cost-effective माध्यम है।',
      '2026 में performance marketing की मदद से आप सिर्फ उन लोगों को ads दिखा सकते हैं जो आपकी specific services में रुचि रखते हैं।'
    ]
  },
  {
    id: 'blog-seo-guide',
    slug: 'complete-seo-ranking-guide-2026',
    title: 'SEO क्या है और Google पर Website कैसे Rank करें?',
    category: 'Digital Solutions',
    featuredImage: 'https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'SEO Ranking Guide 2026 - AVRX Insights',
    excerpt: 'On-page SEO, Technical Speed, Quality Backlinks और Google AI Overviews में अपनी business website को rank करने की proven strategy।',
    date: '05 August 2026',
    isoDate: '2026-08-05',
    readTime: '7–9 min read',
    author: {
      name: 'AVRX SEO Engineers',
      role: 'Search Engine Optimization'
    },
    tags: ['SEO', 'Google Ranking', 'Organic Traffic', 'Technical SEO'],
    seoTitle: 'SEO Guide 2026: Google पर Website कैसे Rank करें | AVRX',
    metaDescription: 'Complete 2026 guide to SEO: On-page, technical factors, speed optimization and ranking in Google AI Overviews.',
    canonicalUrl: 'https://www.avrx.in/blog/complete-seo-ranking-guide-2026',
    isComingSoon: false,
    tableOfContents: [
      { id: 'intro', title: 'Understanding Modern SEO' },
      { id: 'core-pillars', title: 'The 3 Core Pillars of SEO' },
      { id: 'checklist', title: '2026 Actionable SEO Checklist' }
    ],
    introduction: [
      'Search Engine Optimization (SEO) आपकी website को Google के ranking algorithms के अनुरूप optimize करने की प्रक्रिया है ताकि relevant searches पर आपकी website शीर्ष पर दिखाई दे।',
      'Organic search traffic मुफ्त और continuous होता है जो आपके brand को sustainable competitive edge प्रदान करता है।'
    ]
  },
  {
    id: 'blog-cost-guide',
    slug: 'business-website-development-cost-in-india',
    title: 'Business Website बनवाने में कितना खर्च आता है? Complete Pricing Guide',
    category: 'Digital Solutions',
    featuredImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Website Development Cost in India - AVRX',
    excerpt: 'Domain, Hosting, UI/UX Design, Development, SSL और Maintenance—2026 में भारत में business website development की पारदर्शी cost breakdown।',
    date: '01 August 2026',
    isoDate: '2026-08-01',
    readTime: '6–8 min read',
    author: {
      name: 'AVRX Pricing Strategy',
      role: 'Commercial Architecture'
    },
    tags: ['Pricing', 'Website Cost', 'Web Development', 'Startups India'],
    seoTitle: 'Business Website Development Cost in India 2026 | AVRX',
    metaDescription: 'Complete cost breakdown of building a business website in India in 2026: Landing page, Corporate website, and E-commerce portal.',
    canonicalUrl: 'https://www.avrx.in/blog/business-website-development-cost-in-india',
    isComingSoon: false,
    tableOfContents: [
      { id: 'intro', title: 'Website Cost Components' },
      { id: 'packages', title: 'Tiered Cost Breakdowns' },
      { id: 'hidden-costs', title: 'Avoiding Hidden Agency Fees' }
    ],
    introduction: [
      'एक website बनवाने की cost इस बात पर निर्भर करती है कि आपकी जरूरत single landing page है, multi-service corporate website है, या dynamic e-commerce portal।',
      'AVRX पर बिना किसी hidden fee के transparent packages उपलब्ध हैं ताकि हर Indian entrepreneur अपनी digital journey आत्मविश्वास से शुरू कर सके।'
    ]
  },
  {
    id: 'blog-business-loans',
    slug: 'business-loan-eligibility-schemes-india-2026',
    title: 'PMEGP, MUDRA & MSME Business Loan: कम ब्याज पर सही लोन कैसे चुनें?',
    category: 'Financial Solutions',
    featuredImage: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Business Loan Schemes India - AVRX Finance',
    excerpt: 'Government subsidy schemes, PMEGP, MUDRA loans up to ₹10-20 Lakhs, और bank capital eligibility criteria की संपूर्ण जानकारी।',
    date: '28 July 2026',
    isoDate: '2026-07-28',
    readTime: '6 min read',
    author: {
      name: 'AVRX Financial Advisory',
      role: 'Credit & Capital Strategy'
    },
    tags: ['Business Loan', 'PMEGP', 'MUDRA', 'MSME', 'Finance'],
    seoTitle: 'PMEGP, MUDRA & MSME Loan Guide | AVRX',
    metaDescription: 'Complete guide to government business loan schemes in India, subsidy percentages, and document checklists for fast approval.',
    canonicalUrl: 'https://www.avrx.in/blog/business-loan-eligibility-schemes-india-2026',
    isComingSoon: false,
    introduction: [
      'अपने business के विस्तार के लिए सही समय पर सही capital का चुनाव करना सफलता की कुंजी है। MUDRA और PMEGP जैसी योजनाएं subsidized interest rates प्रदान करती हैं।'
    ]
  },
  {
    id: 'blog-tax-compliance',
    slug: 'gst-compliance-and-itr-filing-guide-for-startups',
    title: 'GST Compliance & ITR Filing Guide: पेनल्टी से बचें और ITC का पूरा फायदा उठाएं',
    category: 'Tax & GST',
    featuredImage: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'GST Compliance and ITR Filing Guide - AVRX Tax',
    excerpt: 'GSTR-3B, GSTR-1, Input Tax Credit (ITC) reconciliation और timely ITR filing से business credit score कैसे मजबूत करें।',
    date: '15 July 2026',
    isoDate: '2026-07-15',
    readTime: '5 min read',
    author: {
      name: 'AVRX Tax & Legal Experts',
      role: 'Taxation & Regulatory Affairs'
    },
    tags: ['GST', 'ITR', 'Tax Compliance', 'ITC', 'Audit'],
    seoTitle: 'GST Compliance & ITR Filing Guide for Startups | AVRX',
    metaDescription: 'Avoid GST late fees, maximize valid Input Tax Credit, and build solid creditworthiness with timely tax filing.',
    canonicalUrl: 'https://www.avrx.in/blog/gst-compliance-and-itr-filing-guide-for-startups',
    isComingSoon: false,
    introduction: [
      'समय पर GST और ITR file करना सिर्फ कानूनी अनिवार्यता नहीं है बल्कि भविष्य में bank loans और enterprise contracts हासिल करने का सबसे मजबूत आधार है।'
    ]
  }
];

export const getBlogPostBySlug = (slugOrId: string): BlogPost | undefined => {
  return BLOG_POSTS_DATA.find(p => p.slug === slugOrId || p.id === slugOrId);
};

export const getFeaturedBlogPost = (): BlogPost => {
  return BLOG_POSTS_DATA.find(p => p.isFeatured) || BLOG_POSTS_DATA[0];
};

export const getRelatedPosts = (currentSlug: string): BlogPost[] => {
  const current = getBlogPostBySlug(currentSlug);
  if (!current) return BLOG_POSTS_DATA.slice(0, 3);
  
  if (current.relatedSlugs && current.relatedSlugs.length > 0) {
    const related = BLOG_POSTS_DATA.filter(p => current.relatedSlugs?.includes(p.slug));
    if (related.length > 0) return related;
  }

  return BLOG_POSTS_DATA.filter(p => p.slug !== current.slug).slice(0, 3);
};
