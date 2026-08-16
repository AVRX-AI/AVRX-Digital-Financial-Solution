export type ToolCategoryType = 
  | 'content'
  | 'creative'
  | 'documents'
  | 'data'
  | 'business'
  | 'seo'
  | 'career'
  | 'finance'
  | 'developer'
  | 'utilities'
  | 'automation'
  | 'lab';

export interface AiToolItem {
  id: string;
  slug: string;
  name: string;
  category: ToolCategoryType;
  categoryLabel: string;
  shortDescription: string;
  fullDescription: string;
  badge?: 'New' | 'Popular' | 'AI Lab' | 'Pro' | 'Fast';
  iconName: string;
  inputPlaceholder?: string;
  defaultPrompt?: string;
  options?: { label: string; value: string }[];
  seoTitle: string;
  seoDescription: string;
  features: string[];
  howItWorks: { step: number; title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
}

export interface AiToolCategory {
  id: ToolCategoryType | 'all';
  label: string;
  shortName: string;
  description: string;
  iconName: string;
  badge?: string;
}

export const AI_SUITE_CATEGORIES: AiToolCategory[] = [
  { id: 'all', label: 'All Tools', shortName: 'All Tools', description: 'Browse full suite of 70+ AI tools', iconName: 'Sparkles' },
  { id: 'content', label: 'AI Content & Writing', shortName: 'Content', description: 'Blog, SEO, copywriting & emails', iconName: 'PenTool', badge: '5 Tools' },
  { id: 'creative', label: 'AI Image & Creative', shortName: 'Creative', description: 'Text-to-image, poster & logos', iconName: 'Palette', badge: '5 Tools' },
  { id: 'documents', label: 'AI Document & Productivity', shortName: 'Documents', description: 'PDF editor, summaries & chat', iconName: 'FileText', badge: '5 Tools' },
  { id: 'data', label: 'AI Data & Spreadsheet', shortName: 'Data', description: 'Excel assistant & formula tools', iconName: 'Table', badge: '5 Tools' },
  { id: 'business', label: 'AI Business Tools', shortName: 'Business', description: 'Business plans & strategies', iconName: 'Briefcase', badge: '5 Tools' },
  { id: 'seo', label: 'AI Website & SEO', shortName: 'SEO', description: 'Website health & meta tags', iconName: 'Globe', badge: '7 Tools' },
  { id: 'career', label: 'AI Career Tools', shortName: 'Career', description: 'ATS resume, cover letters & prep', iconName: 'Award', badge: '5 Tools' },
  { id: 'finance', label: 'AI Finance & Calculators', shortName: 'Finance', description: 'EMI, GST, SIP & CIBIL guide', iconName: 'DollarSign', badge: '8 Tools' },
  { id: 'developer', label: 'AI Developer Tools', shortName: 'Developer', description: 'Code gen, SQL, debug & JSON', iconName: 'Code', badge: '8 Tools' },
  { id: 'utilities', label: 'AI Text Utilities', shortName: 'Utilities', description: 'Summarizer, translator & words', iconName: 'Layers', badge: '7 Tools' },
  { id: 'automation', label: 'AI Business Automation', shortName: 'Automation', description: 'Meeting notes, replies & WhatsApp', iconName: 'Zap', badge: '6 Tools' },
  { id: 'lab', label: 'AVRX AI Lab', shortName: 'AI Lab', description: 'Next-gen experimental intelligence', iconName: 'FlaskConical', badge: 'AI Lab' },
];

export const AI_SUITE_TOOLS: AiToolItem[] = [
  // 1. AI Content & Writing
  {
    id: 'ai-content-generator',
    slug: 'content-generator',
    name: 'AI Content Generator',
    category: 'content',
    categoryLabel: 'AI Content & Writing',
    shortDescription: 'Generate high-converting blogs, articles, website copy, product descriptions, and marketing copy.',
    fullDescription: 'Create bespoke content across 10+ formats with granular control over tone, language, and creativity parameters.',
    badge: 'Popular',
    iconName: 'PenTool',
    inputPlaceholder: 'Enter topic, audience, and key points (e.g. Benefits of NVMe Cloud Hosting in India)...',
    seoTitle: 'Free AI Content Generator Online - AVRX AI Suite',
    seoDescription: 'Generate high-ranking blog articles, website copy, marketing ads and social posts with AVRX AI Content Generator.',
    features: ['Blog & Article generation', 'Website copy & Landing pages', 'Product descriptions & Ad copy', 'Tone & Creativity tuning', 'Multi-language output'],
    howItWorks: [
      { step: 1, title: 'Define Topic & Type', desc: 'Select content format (Blog, Ad, Website Copy, Product).' },
      { step: 2, title: 'Set Tone & Audience', desc: 'Choose Professional, Casual, Persuasive, or Technical tone.' },
      { step: 3, title: 'Generate & Copy', desc: 'Instant AI-generated content ready to publish or edit.' }
    ],
    faqs: [
      { question: 'Is the generated content unique and SEO-friendly?', answer: 'Yes, AVRX AI creates original, plagiarism-free content structured with optimized headings and natural keywords.' }
    ]
  },
  {
    id: 'ai-blog-writer',
    slug: 'blog-writer',
    name: 'AI Blog Writer',
    category: 'content',
    categoryLabel: 'AI Content & Writing',
    shortDescription: 'Generate full long-form articles complete with SEO titles, meta descriptions, headings, and FAQs.',
    fullDescription: 'Turn any topic into an authoritative, beautifully structured blog post with target keywords and complete H1-H3 layout.',
    badge: 'Popular',
    iconName: 'BookOpen',
    inputPlaceholder: 'Topic, target keywords, word count (e.g., How to apply for MSME business loan in 2026)...',
    seoTitle: 'AI Blog Writer - Generate Complete SEO Articles | AVRX',
    seoDescription: 'Write 1000+ word high-ranking blog posts with SEO meta descriptions, structured headers, and FAQs in seconds.',
    features: ['Catchy SEO Titles', 'Structured H1, H2, H3 headers', 'Full engaging body sections', 'Auto-generated FAQs', 'Keyword density optimization'],
    howItWorks: [
      { step: 1, title: 'Enter Article Topic', desc: 'Provide your primary keyword and focus subject.' },
      { step: 2, title: 'Configure Depth', desc: 'Select target word count and writing style.' },
      { step: 3, title: 'Generate Article', desc: 'Get a full publication-ready blog post with meta tags.' }
    ],
    faqs: [
      { question: 'Can I export the article as Markdown or HTML?', answer: 'Yes, copy formatted text or download directly as a text/markdown file.' }
    ]
  },
  {
    id: 'ai-seo-content-generator',
    slug: 'seo-content-generator',
    name: 'AI SEO Content Generator',
    category: 'content',
    categoryLabel: 'AI Content & Writing',
    shortDescription: 'Generate search-optimized articles with focus keywords, secondary LSI terms, and internal link ideas.',
    fullDescription: 'Architect high-intent organic ranking pages with semantic keyword clustering and optimal content scoring.',
    badge: 'New',
    iconName: 'TrendingUp',
    inputPlaceholder: 'Focus keyword & industry (e.g., Best GST filing software in Raipur)...',
    seoTitle: 'AI SEO Content Generator - Rank on Page 1 | AVRX',
    seoDescription: 'Boost search rankings with AI generated SEO articles containing focus keywords, LSI terms, and meta schema.',
    features: ['Focus & LSI keyword integration', 'Meta Title & Description', 'Heading optimization', 'FAQ Schema generation', 'Internal linking strategies'],
    howItWorks: [
      { step: 1, title: 'Enter Focus Keyword', desc: 'Input your main target search term.' },
      { step: 2, title: 'Generate Blueprint', desc: 'AI maps LSI terms, structure, and content flow.' },
      { step: 3, title: 'Deploy Content', desc: 'Publish high-ranking SEO content.' }
    ],
    faqs: [
      { question: 'How does it help rank higher?', answer: 'It aligns content depth with Google search intent, keyword density, and rich snippet schemas.' }
    ]
  },
  {
    id: 'ai-social-media-post-generator',
    slug: 'social-media-post-generator',
    name: 'AI Social Media Post Generator',
    category: 'content',
    categoryLabel: 'AI Content & Writing',
    shortDescription: 'Generate viral captions, hashtags, and CTAs tailored for Instagram, LinkedIn, Facebook, X, and WhatsApp.',
    fullDescription: 'Create multi-platform social campaigns with customized formatting, high-engagement hook lines, and trending hashtags.',
    badge: 'Fast',
    iconName: 'Share2',
    inputPlaceholder: 'Product launch, tip, quote, or announcement...',
    seoTitle: 'AI Social Media Post Generator - Instagram, LinkedIn, X | AVRX',
    seoDescription: 'Generate engaging social media captions, hashtag clusters, and CTA variants for LinkedIn, Instagram, and Twitter.',
    features: ['Platform-specific formatting', 'High-click hook lines', 'Targeted hashtag clusters', 'Compelling CTA options', 'Multiple post variations'],
    howItWorks: [
      { step: 1, title: 'Pick Platform', desc: 'Select Instagram, LinkedIn, X, or Facebook.' },
      { step: 2, title: 'Input Core Idea', desc: 'Briefly state your message or offer.' },
      { step: 3, title: 'Copy Variants', desc: 'Get 3 ready-to-post variations with hashtags.' }
    ],
    faqs: [
      { question: 'Does it format LinkedIn spacing properly?', answer: 'Yes, it formats with clean line breaks and emojis optimized for feed readability.' }
    ]
  },
  {
    id: 'ai-email-writer',
    slug: 'email-writer',
    name: 'AI Email Writer',
    category: 'content',
    categoryLabel: 'AI Content & Writing',
    shortDescription: 'Draft professional outreach, sales pitches, follow-ups, newsletters, and customer support responses.',
    fullDescription: 'Save hours on communications. Generate high-response business emails with custom subject lines and clear calls-to-action.',
    iconName: 'Mail',
    inputPlaceholder: 'Email objective, recipient context, key message...',
    seoTitle: 'AI Email Writer - Professional Business & Sales Emails | AVRX',
    seoDescription: 'Draft high-converting sales emails, client proposals, follow-ups, and customer replies instantly.',
    features: ['Compelling Subject Lines', 'Sales & Pitch templates', 'Polite Follow-up sequences', 'Customer support replies', 'Tone adjustment'],
    howItWorks: [
      { step: 1, title: 'Set Email Goal', desc: 'Choose Cold Outreach, Follow-up, Support, or Formal.' },
      { step: 2, title: 'Add Key Points', desc: 'Enter recipient name and core discussion points.' },
      { step: 3, title: 'Send with Confidence', desc: 'Copy a polished email ready for your inbox.' }
    ],
    faqs: [
      { question: 'Can I choose casual or formal tone?', answer: 'Yes, choose from Executive, Friendly, Persuasive, or Concise styles.' }
    ]
  },

  // 2. AI Image & Creative
  {
    id: 'text-to-image',
    slug: 'text-to-image',
    name: 'Text to Image Studio',
    category: 'creative',
    categoryLabel: 'AI Image & Creative',
    shortDescription: 'Transform descriptive text prompts into stunning visual concepts, 3D graphics, photos, and posters.',
    fullDescription: 'Produce visual imagery across 10+ artistic styles including Realistic, Cinematic, 3D, Anime, Corporate, and Product Photography.',
    badge: 'Popular',
    iconName: 'Image',
    inputPlaceholder: 'Futuristic AI financial tech dashboard with neon cyan lighting and glowing graph nodes...',
    seoTitle: 'Free AI Text to Image Studio Online | AVRX AI',
    seoDescription: 'Generate custom AI images, 3D renders, cinematic photos, and product art from text descriptions.',
    features: ['10+ Artistic Styles (Cinematic, 3D, Realistic, Anime)', 'Aspect ratio controls (1:1, 16:9, 9:16, 4:3)', 'High definition rendering', 'Instant one-click download', 'Preset prompt library'],
    howItWorks: [
      { step: 1, title: 'Describe Your Vision', desc: 'Enter your visual prompt in plain English.' },
      { step: 2, title: 'Choose Style & Aspect', desc: 'Select 3D, Cinematic, Anime, or Product style.' },
      { step: 3, title: 'Generate & Save', desc: 'View instant visual art and download in high resolution.' }
    ],
    faqs: [
      { question: 'Can I use the images for commercial projects?', answer: 'Yes, images created in AVRX AI Studio are free for personal and commercial business usage.' }
    ]
  },
  {
    id: 'ai-image-prompt-generator',
    slug: 'image-prompt-generator',
    name: 'AI Image Prompt Generator',
    category: 'creative',
    categoryLabel: 'AI Image & Creative',
    shortDescription: 'Convert simple thoughts into hyper-detailed prompts for Midjourney, DALL-E 3, Stable Diffusion, and Gemini.',
    fullDescription: 'Supercharge your AI art. Adds precise lighting, camera angles, textures, render engines (Octane, Unreal 5), and aspect ratios.',
    badge: 'Fast',
    iconName: 'Wand2',
    inputPlaceholder: 'Simple concept (e.g., Cyberpunk coffee shop in Mumbai)...',
    seoTitle: 'AI Image Prompt Generator for Midjourney & DALL-E | AVRX',
    seoDescription: 'Transform basic concepts into hyper-detailed visual prompts with lighting, camera lenses, and style tags.',
    features: ['Engine-specific tags (Midjourney / DALL-E / SD)', 'Cinematic lighting & angle modifiers', 'Photorealistic camera simulation', 'One-click copy with parameters'],
    howItWorks: [
      { step: 1, title: 'Enter Basic Concept', desc: 'Type a simple 2-4 word visual idea.' },
      { step: 2, title: 'Select Target Model', desc: 'Choose Midjourney, DALL-E 3, or Stable Diffusion.' },
      { step: 3, title: 'Copy Master Prompt', desc: 'Use the enriched prompt for top-tier image outputs.' }
    ],
    faqs: [
      { question: 'Does it add camera lenses and lighting?', answer: 'Yes! It injects 35mm lens, volumetric lighting, Octane render, 8K UHD, and color palette tags.' }
    ]
  },
  {
    id: 'ai-poster-generator',
    slug: 'poster-generator',
    name: 'AI Poster & Banner Designer',
    category: 'creative',
    categoryLabel: 'AI Image & Creative',
    shortDescription: 'Generate promotional posters and festival banners with business name, offers, theme, and contact details.',
    fullDescription: 'Craft event banners, Independence Day promotions, festival flyers, and business discount posters ready to share on WhatsApp and social media.',
    badge: 'New',
    iconName: 'Layers',
    inputPlaceholder: 'Business Name: AVRX, Offer: 50% Off Cloud Hosting, Theme: Tech Fest, Contact: support@avrx.in...',
    seoTitle: 'AI Promotional Poster & Banner Generator | AVRX',
    seoDescription: 'Create business flyers, festival posters, discount banners, and promotional ad concepts automatically with AI.',
    features: ['Business branding integration', 'High-impact promotional copy', 'Visual layout concept guide', 'WhatsApp & Story dimensions', 'Color theme recommendations'],
    howItWorks: [
      { step: 1, title: 'Enter Business & Offer', desc: 'Provide your company name, discount, and date.' },
      { step: 2, title: 'Select Theme', desc: 'Choose Festive, Tech, Corporate, or Flash Sale.' },
      { step: 3, title: 'Generate & Export', desc: 'Get full poster copy, visual prompts, and layout blueprints.' }
    ],
    faqs: [
      { question: 'Can I customize font and colors?', answer: 'Yes, the generator provides exact hex palettes and typography pairing recommendations.' }
    ]
  },
  {
    id: 'ai-ad-creative-generator',
    slug: 'ad-creative-generator',
    name: 'AI Ad Creative Generator',
    category: 'creative',
    categoryLabel: 'AI Image & Creative',
    shortDescription: 'Generate high-ROAS ad headlines, primary texts, visual scene concepts, and CTAs for Google & Meta Ads.',
    fullDescription: 'Stop burning ad spend on low-converting copy. Generate multi-angle advertising concepts tailored to user pain points.',
    iconName: 'Target',
    inputPlaceholder: 'Product: MSME Business Loans up to 1Cr, Target: Indian Manufacturers, Offer: Quick 24h Approval...',
    seoTitle: 'AI Ad Creative & Copy Generator for Meta & Google Ads | AVRX',
    seoDescription: 'Generate high-converting Facebook, Instagram and Google ad headlines, primary copy, and creative visual concepts.',
    features: ['Pain-point & Benefit hooks', 'Google Ads headline character limits', 'Meta primary text variations', 'Visual creative storyboard prompt', 'Clear action-driven CTAs'],
    howItWorks: [
      { step: 1, title: 'Provide Offer Details', desc: 'Input product benefit and ideal customer.' },
      { step: 2, title: 'Choose Ad Platform', desc: 'Select Meta (FB/Insta), Google Search, or YouTube.' },
      { step: 3, title: 'Get Ad Bundles', desc: 'Deploy 3 ready-to-test ad copy and visual creative packs.' }
    ],
    faqs: [
      { question: 'Does it adhere to Google 30-char headline rules?', answer: 'Yes, it checks character limits for search ads and carousel posts.' }
    ]
  },
  {
    id: 'ai-logo-concept-generator',
    slug: 'logo-concept-generator',
    name: 'AI Logo Concept Generator',
    category: 'creative',
    categoryLabel: 'AI Image & Creative',
    shortDescription: 'Generate brand identity concepts, minimalist emblem prompts, and color palettes from your business name.',
    fullDescription: 'Discover modern minimalist, geometric, tech-forward, and luxury logo concepts complete with typography guidelines.',
    iconName: 'Hexagon',
    inputPlaceholder: 'Brand Name: AVRX FinTech, Industry: Financial Services, Vibe: Trustworthy, Modern, High-Tech...',
    seoTitle: 'AI Logo Concept & Brand Identity Generator | AVRX',
    seoDescription: 'Generate modern corporate logo concepts, icon ideas, typography pairs, and color palettes for your business.',
    features: ['Minimalist & Tech emblem concepts', 'Font pairing recommendations', 'Color theory hex palettes', 'Detailed image prompts for rendering'],
    howItWorks: [
      { step: 1, title: 'Enter Brand Details', desc: 'Type your company name and industry sector.' },
      { step: 2, title: 'Choose Aesthetic', desc: 'Select Minimalist, Modern, Abstract, or Classic.' },
      { step: 3, title: 'Explore Concepts', desc: 'Review 3 distinct branding concepts and prompt blueprints.' }
    ],
    faqs: [
      { question: 'Can I generate actual vector visuals?', answer: 'The tool provides complete logo design specs, color codes, and prompts for AI visual renderers.' }
    ]
  },

  // 3. AI Document & Productivity
  {
    id: 'word-to-pdf',
    slug: 'word-to-pdf',
    name: 'Word to PDF Converter',
    category: 'documents',
    categoryLabel: 'AI Document & Productivity',
    shortDescription: 'Convert Microsoft Word (.docx, .doc) and text documents into high-quality PDF files instantly.',
    fullDescription: 'Convert your DOCX, DOC, and text documents to standard PDF documents directly in your browser with zero server data storage.',
    badge: 'Popular',
    iconName: 'FileText',
    seoTitle: 'Free Word to PDF Converter Online - AVRX Tools',
    seoDescription: 'Convert DOCX and DOC documents to PDF in your browser with 100% privacy and zero data leakage.',
    features: ['Pure browser-based conversion', 'Supports DOCX, DOC, and TXT', 'Auto formatting & margins', 'Instant PDF download'],
    howItWorks: [
      { step: 1, title: 'Upload Word Document', desc: 'Drop your .docx or .doc file into the dropzone.' },
      { step: 2, title: 'Process Content', desc: 'Engine structures headings and text layout.' },
      { step: 3, title: 'Download PDF', desc: 'Save your formatted PDF file instantly.' }
    ],
    faqs: [
      { question: 'Is my document private?', answer: 'Yes, 100% client-side memory processing. Files are never stored on any server.' }
    ]
  },
  {
    id: 'pdf-editor',
    slug: 'pdf-editor',
    name: 'Professional PDF Editor',
    category: 'documents',
    categoryLabel: 'AI Document & Productivity',
    shortDescription: 'Edit text, draw signatures, highlight, rotate, reorder, delete pages, merge and split PDFs.',
    fullDescription: 'An all-in-one PDF workspace. Add annotations, insert signatures, organize pages, merge multiple documents, or split chapters.',
    badge: 'Popular',
    iconName: 'Edit3',
    seoTitle: 'Online PDF Editor - Annotate, Sign & Merge | AVRX',
    seoDescription: 'Full-featured PDF editor: add digital signatures, highlight text, rotate pages, merge and split PDF files online for free.',
    features: ['Digital signature pad', 'Rotate & Delete pages', 'Merge multiple PDFs', 'Split & Reorder pages', 'Add text & Annotations'],
    howItWorks: [
      { step: 1, title: 'Upload PDF', desc: 'Select or drag your PDF file into the editor.' },
      { step: 2, title: 'Apply Edits & Sign', desc: 'Draw signature, reorder pages, or add annotations.' },
      { step: 3, title: 'Export PDF', desc: 'Download your finalized document.' }
    ],
    faqs: [
      { question: 'Does it support signing legal agreements?', answer: 'Yes, draw or type your signature and place it anywhere on the document.' }
    ]
  },
  {
    id: 'pdf-summarizer',
    slug: 'pdf-summarizer',
    name: 'AI PDF Summarizer',
    category: 'documents',
    categoryLabel: 'AI Document & Productivity',
    shortDescription: 'Upload any document or paste text to generate executive summaries, key bullet points, and action items.',
    fullDescription: 'Distill 50-page reports, legal contracts, research papers, or invoices into crisp, actionable 2-minute summaries.',
    badge: 'Popular',
    iconName: 'FileSearch',
    inputPlaceholder: 'Paste report text, contract excerpt, or document content...',
    seoTitle: 'AI PDF Summarizer - Summarize Documents & Reports | AVRX',
    seoDescription: 'Summarize PDFs, contracts, research papers, and business reports into key bullet points and action items.',
    features: ['Executive Short Summary', 'Detailed Key Points Breakdown', 'Crucial Financial Numbers', 'Action Items & Deadlines', 'Extracted FAQs'],
    howItWorks: [
      { step: 1, title: 'Paste or Upload Document', desc: 'Input your document text or paste PDF content.' },
      { step: 2, title: 'Choose Summary Depth', desc: 'Select Quick Brief, Key Takeaways, or Comprehensive.' },
      { step: 3, title: 'Review & Copy', desc: 'Get structured executive briefing in seconds.' }
    ],
    faqs: [
      { question: 'Can it summarize financial and legal reports?', answer: 'Yes, it highlights key numbers, covenants, deadlines, and obligations accurately.' }
    ]
  },
  {
    id: 'chat-with-pdf',
    slug: 'chat-with-pdf',
    name: 'Chat with PDF (Document AI)',
    category: 'documents',
    categoryLabel: 'AI Document & Productivity',
    shortDescription: 'Upload a document and ask interactive questions with page citations and structured insights.',
    fullDescription: 'Interactive document intelligence. Chat with contracts, balance sheets, policies, and manuals with zero friction.',
    badge: 'AI Lab',
    iconName: 'MessageSquare',
    inputPlaceholder: 'Ask a question about this document (e.g. What is the cancellation clause in section 4?)...',
    seoTitle: 'Chat with PDF Online - AI Document Assistant | AVRX',
    seoDescription: 'Chat with any PDF document. Ask questions, extract clauses, find data points, and verify facts with page references.',
    features: ['Interactive side-by-side chat interface', 'Suggested intelligent queries', 'Page citation references', 'Data point extraction', 'Instant query answering'],
    howItWorks: [
      { step: 1, title: 'Select Document', desc: 'Upload your PDF or use our sample business agreement.' },
      { step: 2, title: 'Ask Questions', desc: 'Type any inquiry or click suggested questions.' },
      { step: 3, title: 'Get Cited Answers', desc: 'Receive precise answers with document context.' }
    ],
    faqs: [
      { question: 'How large a document can I query?', answer: 'You can query multi-page documents, contracts, agreements, and technical manuals easily.' }
    ]
  },
  {
    id: 'ai-document-generator',
    slug: 'document-generator',
    name: 'AI Document Generator',
    category: 'documents',
    categoryLabel: 'AI Document & Productivity',
    shortDescription: 'Generate formal business proposals, NDAs, invoices, partnership agreements, and project charters.',
    fullDescription: 'Create legally structured contracts, service agreements, and commercial documents compliant with standard Indian business practices.',
    badge: 'New',
    iconName: 'FileCheck',
    inputPlaceholder: 'Document type: Service Agreement, Client: Apex Tech, Scope: Full-Stack Web App, Value: ₹1,50,000...',
    seoTitle: 'AI Business Document & Contract Generator | AVRX',
    seoDescription: 'Generate formal business proposals, NDAs, invoices, service contracts, and agreements with standard legal clauses.',
    features: ['Business proposals & Scopes', 'Non-Disclosure Agreements (NDA)', 'Service & Freelance contracts', 'Formal letters & Project plans', 'Clean downloadable format'],
    howItWorks: [
      { step: 1, title: 'Choose Document Type', desc: 'Select Proposal, NDA, Agreement, or Invoice.' },
      { step: 2, title: 'Fill Key Details', desc: 'Enter parties, scope, timelines, and payment terms.' },
      { step: 3, title: 'Generate & Export', desc: 'Receive a structured legal draft ready for signing.' }
    ],
    faqs: [
      { question: 'Are these legally binding templates?', answer: 'The generated templates follow standard commercial contract conventions. Review with your legal counsel for specific jurisdictional requirements.' }
    ]
  },

  // 4. AI Data & Spreadsheet
  {
    id: 'word-to-xls',
    slug: 'word-to-xls',
    name: 'Word to Excel / Table Converter',
    category: 'data',
    categoryLabel: 'AI Data & Spreadsheet',
    shortDescription: 'Convert structured Word documents, tabular text, or lists into organized Excel (.xlsx) and CSV sheets.',
    fullDescription: 'Extract lists, pricing sheets, or invoice tables from Word or text and export clean spreadsheet rows with auto-detected columns.',
    iconName: 'Table',
    inputPlaceholder: 'Paste table text or comma/tab separated list (e.g. Item | Qty | Price)...',
    seoTitle: 'Convert Word & Text to Excel (XLSX) Online | AVRX',
    seoDescription: 'Extract structured text and tables from Word or notes and export them into Microsoft Excel (.xlsx) or CSV format.',
    features: ['Auto delimiter detection (Tab, Comma, Pipe)', 'Instant table grid preview', 'Export to Excel (.xlsx) and CSV', 'Clean blank row stripper'],
    howItWorks: [
      { step: 1, title: 'Paste Text / Table', desc: 'Input raw tabular data or structured text.' },
      { step: 2, title: 'Review Grid Preview', desc: 'Verify parsed columns and rows.' },
      { step: 3, title: 'Download Excel', desc: 'Save clean .xlsx spreadsheet file.' }
    ],
    faqs: [
      { question: 'Can it parse inconsistent tabs or spaces?', answer: 'Yes, our smart parser detects tabular delimiters automatically.' }
    ]
  },
  {
    id: 'ai-excel-assistant',
    slug: 'excel-assistant',
    name: 'AI Excel & Google Sheets Assistant',
    category: 'data',
    categoryLabel: 'AI Data & Spreadsheet',
    shortDescription: 'Ask questions, clean messy spreadsheets, build pivot logic, and troubleshoot complex spreadsheet issues.',
    fullDescription: 'Your 24/7 spreadsheet expert. Explain errors like #N/A, #VALUE!, construct VLOOKUP/XLOOKUP queries, and write Google Apps Script macros.',
    badge: 'Popular',
    iconName: 'FileSpreadsheet',
    inputPlaceholder: 'Describe what you want to calculate or paste your error message...',
    seoTitle: 'AI Excel Assistant - Formula & Spreadsheet Helper | AVRX',
    seoDescription: 'Solve Excel and Google Sheets problems with AI. Troubleshoot formulas, build pivot queries, and generate Apps Script macros.',
    features: ['Formula troubleshooting & error fixes', 'XLOOKUP & INDEX/MATCH guidance', 'Google Apps Script automation', 'Conditional formatting recipes'],
    howItWorks: [
      { step: 1, title: 'Describe Spreadsheet Task', desc: 'Explain what data you have and what you want to achieve.' },
      { step: 2, title: 'Get Step-by-Step Solution', desc: 'Receive exact formulas with cell reference examples.' },
      { step: 3, title: 'Apply to Sheet', desc: 'Copy formula and apply directly to your spreadsheet.' }
    ],
    faqs: [
      { question: 'Does it work for both Microsoft Excel and Google Sheets?', answer: 'Yes, it provides compatible solutions for Excel 365, legacy Excel, and Google Sheets.' }
    ]
  },
  {
    id: 'ai-data-analyzer',
    slug: 'data-analyzer',
    name: 'AI Data Analyzer & Insights',
    category: 'data',
    categoryLabel: 'AI Data & Spreadsheet',
    shortDescription: 'Upload CSV or paste data numbers to generate trend analysis, summary statistics, anomalies, and chart ideas.',
    fullDescription: 'Turn raw numbers into business intelligence. Identifies growth spikes, revenue drivers, outliers, and visual dashboard recommendations.',
    badge: 'New',
    iconName: 'BarChart2',
    inputPlaceholder: 'Paste CSV rows, monthly revenue figures, sales numbers, or inventory stats...',
    seoTitle: 'AI Data Analyzer - Instant CSV & Numbers Insights | AVRX',
    seoDescription: 'Upload CSV or paste sales figures to extract growth trends, anomalies, summary KPIs, and chart recommendations.',
    features: ['Statistical summary (Mean, Median, Max, Trend)', 'Anomaly & Outlier detection', 'Chart type recommendations', 'Executive narrative insights'],
    howItWorks: [
      { step: 1, title: 'Paste Data or CSV', desc: 'Input numeric data rows with headers.' },
      { step: 2, title: 'Run Analysis', desc: 'AI calculates trends, variances, and correlations.' },
      { step: 3, title: 'Read Executive Report', desc: 'Get clear business takeaways and chart layouts.' }
    ],
    faqs: [
      { question: 'Is my data secure?', answer: 'Yes, calculations and evaluations run securely with strict ephemeral privacy.' }
    ]
  },
  {
    id: 'ai-formula-generator',
    slug: 'formula-generator',
    name: 'AI Excel Formula Generator',
    category: 'data',
    categoryLabel: 'AI Data & Spreadsheet',
    shortDescription: 'Translate plain English instructions into complex Excel and Google Sheets formulas instantly.',
    fullDescription: 'Say goodbye to syntax errors. Type "Calculate 18% GST if column C is \'Services\' else 12%" and get the exact formula with explanation.',
    badge: 'Fast',
    iconName: 'Binary',
    inputPlaceholder: 'e.g. Calculate 18% GST on amount in cell B2, or sum column D only when column A is "Paid"...',
    seoTitle: 'AI Excel Formula Generator - Text to Formula | AVRX',
    seoDescription: 'Convert plain English instructions into advanced Excel and Google Sheets formulas instantly with explanations.',
    features: ['Natural language to formula', 'Supports nested IF, SUMIFS, XLOOKUP', 'Regex & String extraction formulas', 'Clear formula breakdown'],
    howItWorks: [
      { step: 1, title: 'Type Instruction in Plain English', desc: 'Describe your calculation and cell references.' },
      { step: 2, title: 'Generate Formula', desc: 'Get the exact syntax ready to copy.' },
      { step: 3, title: 'Paste into Excel', desc: 'Paste into formula bar.' }
    ],
    faqs: [
      { question: 'Does it support nested conditions?', answer: 'Yes, it effortlessly generates multi-tier IFS, SUMPRODUCT, and FILTER formulas.' }
    ]
  },
  {
    id: 'ai-table-generator',
    slug: 'table-generator',
    name: 'AI Table Generator',
    category: 'data',
    categoryLabel: 'AI Data & Spreadsheet',
    shortDescription: 'Convert unstructured ideas, product specs, or comparison requirements into formatted tables.',
    fullDescription: 'Generate comparison matrices, price lists, employee rosters, and project timelines with structured columns in Markdown or HTML.',
    iconName: 'Grid',
    inputPlaceholder: 'e.g. Create a 4-column comparison table comparing AVRX NVMe Cloud Hosting vs Generic Shared Hosting...',
    seoTitle: 'AI Table Generator - Markdown & HTML Table Creator | AVRX',
    seoDescription: 'Create clean comparison tables, pricing matrices, and structured data tables from natural language prompts.',
    features: ['Markdown & HTML table export', 'CSV format download', 'Auto column alignment', 'Custom row formatting'],
    howItWorks: [
      { step: 1, title: 'Describe Table Content', desc: 'List rows, columns, or items to compare.' },
      { step: 2, title: 'Generate Structure', desc: 'AI formats data into balanced tabular grid.' },
      { step: 3, title: 'Copy Markdown/HTML', desc: 'Paste into website or documentation.' }
    ],
    faqs: [
      { question: 'Can I import this table into WordPress or Notion?', answer: 'Yes, copy as Markdown or HTML and paste directly into any CMS or Notion page.' }
    ]
  },

  // 5. AI Business Tools
  {
    id: 'ai-business-name-generator',
    slug: 'business-name-generator',
    name: 'AI Business Name Generator',
    category: 'business',
    categoryLabel: 'AI Business Tools',
    shortDescription: 'Generate brandable, modern, catchy business names with available domain ideas and slogan pairings.',
    fullDescription: 'Find memorable brand names for tech startups, finance firms, agency ventures, and local shops across India.',
    badge: 'Popular',
    iconName: 'Sparkles',
    inputPlaceholder: 'Industry: FinTech & Cloud, Keywords: Speed, Security, Shield, Trust...',
    seoTitle: 'AI Business Name Generator - Brandable Company Names | AVRX',
    seoDescription: 'Generate creative, memorable business and startup names with domain suggestions and brand identity themes.',
    features: ['Modern & Brandable name variations', 'Domain extension suggestions (.in, .com, .io)', 'Punchy brand slogan ideas', 'Brand personality tags'],
    howItWorks: [
      { step: 1, title: 'Enter Industry & Keywords', desc: 'Type your focus sector and core values.' },
      { step: 2, title: 'Generate Names', desc: 'Explore 15+ curated brand concepts with slogans.' },
      { step: 3, title: 'Check & Register', desc: 'Pick your favorite name and secure the domain.' }
    ],
    faqs: [
      { question: 'Are these names suitable for trademark registration?', answer: 'The names are uniquely crafted. Always run a quick MCA/Trademark registry check before final incorporation.' }
    ]
  },
  {
    id: 'ai-business-idea-generator',
    slug: 'business-idea-generator',
    name: 'AI Business Idea Generator',
    category: 'business',
    categoryLabel: 'AI Business Tools',
    shortDescription: 'Generate viable, high-ROI business ideas based on your budget, skills, location, and industry sector.',
    fullDescription: 'Discover practical startup and business concepts tailored for Indian tier-1, tier-2, and tier-3 markets with estimated startup capital and margins.',
    badge: 'Popular',
    iconName: 'Lightbulb',
    inputPlaceholder: 'Budget: ₹2 Lakhs, Skills: Sales & Digital Marketing, City: Tier-2 Indian City...',
    seoTitle: 'AI Business Idea Generator - High Profit Startup Ideas | AVRX',
    seoDescription: 'Find profitable business and startup ideas based on your investment budget, skillset, and local Indian market dynamics.',
    features: ['Budget-aligned startup concepts', 'Initial capital breakdown', 'Profit margin & ROI estimates', '90-day launch roadmap'],
    howItWorks: [
      { step: 1, title: 'Input Capital & Skills', desc: 'Enter your investment capacity and experience.' },
      { step: 2, title: 'Generate Opportunities', desc: 'AI formulates 3 distinct, high-potential business models.' },
      { step: 3, title: 'Execute Launch Plan', desc: 'Follow the 90-day step-by-step launch playbook.' }
    ],
    faqs: [
      { question: 'Does it consider Indian govt schemes like PMEGP/MUDRA?', answer: 'Yes, it highlights eligible government subsidy schemes and loan pathways.' }
    ]
  },
  {
    id: 'ai-business-plan-generator',
    slug: 'business-plan-generator',
    name: 'AI Business Plan Generator',
    category: 'business',
    categoryLabel: 'AI Business Tools',
    shortDescription: 'Generate executive summaries, market sizing, target audience, revenue models, and financial forecasts.',
    fullDescription: 'Create pitch-deck ready business plans suitable for bank loan applications, MSME subsidies, or angel investors.',
    badge: 'New',
    iconName: 'Briefcase',
    inputPlaceholder: 'Company: FreshCart Organic Grocery, Target: Urban households, Revenue: Subscription model...',
    seoTitle: 'AI Business Plan Generator - Complete Bank & Investor Plans | AVRX',
    seoDescription: 'Generate professional business plans with executive summaries, market analysis, revenue models, and financial projections.',
    features: ['Executive summary & Value proposition', 'Market sizing & Competitor landscape', 'Operational & Tech requirements', '3-year Financial projections overview'],
    howItWorks: [
      { step: 1, title: 'Provide Business Concept', desc: 'Outline your product or service idea.' },
      { step: 2, title: 'Generate Plan', desc: 'AI structures full 7-section professional plan.' },
      { step: 3, title: 'Export for Banks/Investors', desc: 'Copy or export for bank loan/investor presentations.' }
    ],
    faqs: [
      { question: 'Can I submit this for a bank loan application?', answer: 'Yes, it provides the core operational, market, and financial sections required by lending institutions.' }
    ]
  },
  {
    id: 'ai-marketing-strategy-generator',
    slug: 'marketing-strategy-generator',
    name: 'AI Marketing Strategy Generator',
    category: 'business',
    categoryLabel: 'AI Business Tools',
    shortDescription: 'Architect full 30-day go-to-market strategies with paid ads, SEO, WhatsApp funnels, and retention tactics.',
    fullDescription: 'Grow customer acquisition systematically with tailored channel allocations, CAC targets, and weekly content pillars.',
    iconName: 'Compass',
    inputPlaceholder: 'Industry: Luxury Dental Clinic, Target City: Pune, Monthly Ad Budget: ₹50,000...',
    seoTitle: 'AI Marketing Strategy Generator - 30-Day Growth Plan | AVRX',
    seoDescription: 'Generate comprehensive digital marketing strategies, channel allocations, content calendars, and CAC optimization tactics.',
    features: ['Omnichannel allocation (Meta, Google, SEO, WhatsApp)', 'Target audience persona definition', 'Weekly content calendar blueprint', 'Key metrics (CAC, LTV, ROAS) benchmarks'],
    howItWorks: [
      { step: 1, title: 'Input Niche & Budget', desc: 'Enter your business category and monthly ad budget.' },
      { step: 2, title: 'Generate Blueprint', desc: 'Get channel strategy, ad angles, and content pillars.' },
      { step: 3, title: 'Deploy & Track', desc: 'Execute the weekly checklist.' }
    ],
    faqs: [
      { question: 'Is this effective for local Indian businesses?', answer: 'Yes, it integrates WhatsApp marketing, Google Business Profile, and local hyper-targeted ads.' }
    ]
  },
  {
    id: 'ai-competitor-analysis',
    slug: 'competitor-analysis',
    name: 'AI Competitor Analysis & Positioning',
    category: 'business',
    categoryLabel: 'AI Business Tools',
    shortDescription: 'Analyze competitor strengths, weaknesses, pricing gaps, and uncover unserved market opportunities.',
    fullDescription: 'Enter competitor websites or names to get a SWOT breakdown, value gap analysis, and differentiation playbook.',
    iconName: 'ShieldAlert',
    inputPlaceholder: 'Enter competitor website or business name (e.g. competitor.com or Leading ERP Provider in India)...',
    seoTitle: 'AI Competitor Analysis Tool - SWOT & Market Positioning | AVRX',
    seoDescription: 'Perform in-depth competitor audits, uncover pricing gaps, analyze marketing angles, and find differentiation strategies.',
    features: ['SWOT (Strengths, Weaknesses, Opportunities, Threats)', 'Pricing & Feature gap identification', 'Unique Value Proposition (UVP) angles', 'Marketing counter-strategies'],
    howItWorks: [
      { step: 1, title: 'Enter Competitor Name/URL', desc: 'Input your rival or main industry benchmark.' },
      { step: 2, title: 'Run Analysis', desc: 'AI evaluates offerings, positioning, and vulnerabilities.' },
      { step: 3, title: 'Win Market Share', desc: 'Implement targeted differentiation strategies.' }
    ],
    faqs: [
      { question: 'How does it find opportunities?', answer: 'It evaluates competitor feature sets, user complaints in the industry, and gaps in value pricing.' }
    ]
  },

  // 6. AI Website & SEO
  {
    id: 'website-health-checker',
    slug: 'website-health-checker',
    name: 'Website Health & Speed Checker',
    category: 'seo',
    categoryLabel: 'AI Website & SEO',
    shortDescription: 'Analyze website speed, Core Web Vitals, mobile UX, security SSL, and SEO health with actionable fixes.',
    fullDescription: 'Enter any website URL to perform a comprehensive audit with technical bottleneck identification and speed optimizations.',
    badge: 'Popular',
    iconName: 'Gauge',
    inputPlaceholder: 'https://yourwebsite.com...',
    seoTitle: 'Website Health & Speed Checker - Real Audit | AVRX',
    seoDescription: 'Free website health audit: check performance score, Core Web Vitals, mobile responsiveness, and SEO health.',
    features: ['Performance, SEO, Mobile, & Security Scores', 'Core Web Vitals (LCP, FID, CLS) estimates', 'Critical technical bottlenecks identified', 'Step-by-step developer fix roadmap'],
    howItWorks: [
      { step: 1, title: 'Enter Website URL', desc: 'Type your domain or landing page address.' },
      { step: 2, title: 'Audit Site Health', desc: 'Engine analyzes server response, assets, and tags.' },
      { step: 3, title: 'Fix & Accelerate', desc: 'Implement recommendations for 95+ performance scores.' }
    ],
    faqs: [
      { question: 'Can AVRX optimize our website speed?', answer: 'Yes, AVRX Digital team migrates and accelerates web applications to sub-second load times on NVMe cloud servers.' }
    ]
  },
  {
    id: 'ai-seo-audit',
    slug: 'seo-audit',
    name: 'AI SEO Audit & Growth Roadmaps',
    category: 'seo',
    categoryLabel: 'AI Website & SEO',
    shortDescription: 'Audit on-page SEO, heading hierarchy, content depth, internal linking, and organic search gaps.',
    fullDescription: 'Uncover why your pages are not ranking on Google. Get keyword intent maps, missing heading tags, and content depth improvements.',
    badge: 'Popular',
    iconName: 'Search',
    inputPlaceholder: 'Website URL or target search query (e.g. avrx.in or Best MSME Loan In Raipur)...',
    seoTitle: 'AI SEO Audit Tool - On-Page & Technical Ranking Guide | AVRX',
    seoDescription: 'Audit webpage SEO: identify technical issues, optimize keyword intent, fix heading structure, and boost Google ranking.',
    features: ['Technical SEO checklist', 'Keyword intent & search density audit', 'H1-H6 hierarchy validation', 'Internal linking strategy'],
    howItWorks: [
      { step: 1, title: 'Enter Page or Query', desc: 'Provide your webpage URL or main target topic.' },
      { step: 2, title: 'Audit SEO Factors', desc: 'AI reviews metadata, structure, and keyword density.' },
      { step: 3, title: 'Implement Fixes', desc: 'Execute on-page tweaks to climb Google rankings.' }
    ],
    faqs: [
      { question: 'How long until I see ranking improvements?', answer: 'On-page structure fixes often reflect in Google search impressions within 14 to 30 days.' }
    ]
  },
  {
    id: 'meta-tag-generator',
    slug: 'meta-tag-generator',
    name: 'Meta Title & Description Generator',
    category: 'seo',
    categoryLabel: 'AI Website & SEO',
    shortDescription: 'Generate click-optimized Meta Titles, Meta Descriptions, and OpenGraph social preview tags.',
    fullDescription: 'Ensure your pages never get truncated on Google search results. Check exact pixel and character length counts with live SERP preview.',
    badge: 'Fast',
    iconName: 'Tag',
    inputPlaceholder: 'Page topic, company name, key offerings...',
    seoTitle: 'Meta Title & Description Generator with Live SERP Preview | AVRX',
    seoDescription: 'Generate Google-optimized Meta Title and Meta Description tags with live SERP snippet preview and character counter.',
    features: ['60-char title limit validation', '155-char description count tracker', 'Live Google SERP preview box', 'OpenGraph social media tags'],
    howItWorks: [
      { step: 1, title: 'Enter Page Details', desc: 'Input topic, target keyword, and brand name.' },
      { step: 2, title: 'Generate Meta Tags', desc: 'Review high CTR titles and descriptions.' },
      { step: 3, title: 'Copy HTML Tags', desc: 'Paste directly into your website <head> tag.' }
    ],
    faqs: [
      { question: 'Why is character count critical?', answer: 'Google truncates titles over ~60 characters with ellipses (...), reducing organic click-through rates.' }
    ]
  },
  {
    id: 'keyword-generator',
    slug: 'keyword-generator',
    name: 'AI Keyword & LSI Research Generator',
    category: 'seo',
    categoryLabel: 'AI Website & SEO',
    shortDescription: 'Discover high-intent primary keywords, long-tail variations, question queries, and local SEO terms.',
    fullDescription: 'Find untapped search queries with high conversion intent for commercial blogs, e-commerce, and service businesses.',
    iconName: 'Key',
    inputPlaceholder: 'Seed topic (e.g. Business Loan, GST Filing, Web Hosting)...',
    seoTitle: 'AI Keyword Generator - Long-Tail & Question Keywords | AVRX',
    seoDescription: 'Generate high-intent primary keywords, long-tail search queries, customer questions, and local SEO search terms.',
    features: ['High-intent commercial keywords', 'Long-tail search questions (People Also Ask)', 'Local city/region search modifiers', 'Competitor keyword clusters'],
    howItWorks: [
      { step: 1, title: 'Enter Seed Topic', desc: 'Type your core niche or product offering.' },
      { step: 2, title: 'Generate Clusters', desc: 'AI groups keywords by intent (Informational, Transactional).' },
      { step: 3, title: 'Export Keyword List', desc: 'Use in your blogs, ad campaigns, and landing pages.' }
    ],
    faqs: [
      { question: 'Can I use these for Google Ads PPC?', answer: 'Yes, it provides exact search intent tags perfect for Google Search Ads match types.' }
    ]
  },
  {
    id: 'robots-txt-generator',
    slug: 'robots-txt-generator',
    name: 'Robots.txt Generator',
    category: 'seo',
    categoryLabel: 'AI Website & SEO',
    shortDescription: 'Create clean, error-free robots.txt files to guide Googlebot, Bingbot, and AI crawlers properly.',
    fullDescription: 'Define crawler access rules, disallow private admin folders, declare XML sitemaps, and block unwanted scrapers.',
    iconName: 'Bot',
    inputPlaceholder: 'Sitemap URL (e.g. https://avrx.in/sitemap.xml), Disallow paths (/admin, /private)...',
    seoTitle: 'Free Robots.txt Generator Online | AVRX SEO Tools',
    seoDescription: 'Generate valid robots.txt rules for WordPress, custom web apps, and e-commerce with sitemap integration.',
    features: ['Googlebot & Bingbot rules', 'Disallow admin & private paths', 'XML Sitemap declaration', 'AI crawler control (GPTBot, CCBot)'],
    howItWorks: [
      { step: 1, title: 'Select CMS / App Type', desc: 'Pick WordPress, Next.js, or Custom site.' },
      { step: 2, title: 'Configure Paths', desc: 'Add sitemap URL and private folders.' },
      { step: 3, title: 'Download robots.txt', desc: 'Place in your website root directory.' }
    ],
    faqs: [
      { question: 'Where do I upload the robots.txt file?', answer: 'Upload it to the root folder of your web hosting so it is accessible at yourdomain.com/robots.txt.' }
    ]
  },
  {
    id: 'sitemap-generator',
    slug: 'sitemap-generator',
    name: 'XML Sitemap Generator',
    category: 'seo',
    categoryLabel: 'AI Website & SEO',
    shortDescription: 'Generate Google-compliant XML sitemaps with custom change frequencies and priority tags.',
    fullDescription: 'Structure all your website URLs with lastmod timestamps and crawl priorities for fast Google indexing.',
    iconName: 'FileCode',
    inputPlaceholder: 'Paste list of URLs (one per line): https://avrx.in, https://avrx.in/ai-tools, https://avrx.in/services...',
    seoTitle: 'XML Sitemap Generator for Google Search Console | AVRX',
    seoDescription: 'Generate clean XML sitemaps compliant with Google Search Console standards with priority and changefreq attributes.',
    features: ['Valid XML schema syntax', 'Change frequency & Priority tags', 'Last modified date formatting', 'Instant .xml file download'],
    howItWorks: [
      { step: 1, title: 'Paste Website URLs', desc: 'Enter your website page links.' },
      { step: 2, title: 'Set Frequencies', desc: 'Choose daily, weekly, or monthly crawl tags.' },
      { step: 3, title: 'Download sitemap.xml', desc: 'Submit to Google Search Console.' }
    ],
    faqs: [
      { question: 'How do I submit this to Google?', answer: 'Go to Google Search Console > Sitemaps > enter sitemap.xml and click Submit.' }
    ]
  },
  {
    id: 'schema-markup-generator',
    slug: 'schema-markup-generator',
    name: 'Schema Markup (JSON-LD) Generator',
    category: 'seo',
    categoryLabel: 'AI Website & SEO',
    shortDescription: 'Generate structured JSON-LD data for Organization, LocalBusiness, FAQPage, Product, and Article schemas.',
    fullDescription: 'Win Google Rich Snippets (star ratings, FAQ accordions, business info) with structured schema markup.',
    badge: 'Popular',
    iconName: 'Code2',
    inputPlaceholder: 'Select Schema Type (LocalBusiness, Organization, FAQPage, Article) and enter business details...',
    seoTitle: 'Schema Markup Generator (JSON-LD) - Rich Snippets | AVRX',
    seoDescription: 'Create Google-compliant JSON-LD Schema markup for Local Business, Organization, FAQ, Product, and Articles.',
    features: ['LocalBusiness & Organization schemas', 'FAQ Accordion Rich Snippet JSON-LD', 'Product pricing & review schema', 'Validated against Schema.org standards'],
    howItWorks: [
      { step: 1, title: 'Choose Schema Type', desc: 'Select FAQ, LocalBusiness, or Organization.' },
      { step: 2, title: 'Fill Business Details', desc: 'Enter name, address, phone, and questions.' },
      { step: 3, title: 'Copy JSON-LD Code', desc: 'Paste into <script type="application/ld+json"> tag.' }
    ],
    faqs: [
      { question: 'Does schema markup guarantee rich snippets on Google?', answer: 'It gives Google structured data needed to display FAQ drop-downs and business knowledge panels in search results.' }
    ]
  },

  // 7. AI Career Tools
  {
    id: 'ai-resume-builder',
    slug: 'resume-builder',
    name: 'AI Resume Builder (ATS-Friendly)',
    category: 'career',
    categoryLabel: 'AI Career Tools',
    shortDescription: 'Build professional, ATS-optimized resumes with punchy bullet points, action verbs, and clean typography.',
    fullDescription: 'Craft resumes that pass Applicant Tracking Systems with ease. Converts duties into metric-driven achievements.',
    badge: 'Popular',
    iconName: 'Award',
    inputPlaceholder: 'Role: Senior Full Stack Developer, Years Exp: 5, Key achievements: Built payment gateway handling 10k daily txns...',
    seoTitle: 'AI Resume Builder - ATS-Friendly Professional Resumes | AVRX',
    seoDescription: 'Build modern, ATS-compliant resumes with AI. Generate high-impact bullet points and clean formatting.',
    features: ['ATS-optimized layout', 'Action verb bullet points', 'Quantified achievement phrasing', 'Skill keyword tagging', 'Export formatted resume'],
    howItWorks: [
      { step: 1, title: 'Enter Work Experience', desc: 'Input your job titles, company, and key duties.' },
      { step: 2, title: 'Enhance with AI', desc: 'AI turns basic duties into metric-driven wins.' },
      { step: 3, title: 'Export & Apply', desc: 'Download a clean, ATS-compliant resume.' }
    ],
    faqs: [
      { question: 'Will this resume pass automated ATS screening?', answer: 'Yes, it uses standard single-column hierarchies, clear headers, and high-frequency industry keywords.' }
    ]
  },
  {
    id: 'ai-resume-analyzer',
    slug: 'resume-analyzer',
    name: 'AI Resume & ATS Score Analyzer',
    category: 'career',
    categoryLabel: 'AI Career Tools',
    shortDescription: 'Upload or paste your resume text to get an ATS compatibility score, missing keywords, and improvement tips.',
    fullDescription: 'Find out why your job applications are not getting interview callbacks. Get a comprehensive ATS audit with keyword benchmarks.',
    badge: 'Popular',
    iconName: 'FileCheck2',
    inputPlaceholder: 'Paste your resume text and target job description...',
    seoTitle: 'AI Resume Analyzer & ATS Score Checker | AVRX',
    seoDescription: 'Audit your resume for ATS score, missing industry keywords, formatting errors, and actionable career improvements.',
    features: ['ATS Match Score (0-100)', 'Missing critical job keywords', 'Impact & Quantification rating', 'Formatting & Section recommendations'],
    howItWorks: [
      { step: 1, title: 'Paste Resume & Job Description', desc: 'Input your CV and the job post you want to apply for.' },
      { step: 2, title: 'Run ATS Scan', desc: 'AI compares keyword overlap and formatting quality.' },
      { step: 3, title: 'Boost Your Score', desc: 'Apply suggested tweaks to double callback rates.' }
    ],
    faqs: [
      { question: 'What is a good ATS score?', answer: 'An ATS match score above 80% generally places your resume in the top tier reviewed by recruiters.' }
    ]
  },
  {
    id: 'ai-cover-letter-generator',
    slug: 'cover-letter-generator',
    name: 'AI Cover Letter Generator',
    category: 'career',
    categoryLabel: 'AI Career Tools',
    shortDescription: 'Draft personalized, persuasive cover letters matching your skills directly to the target employer and job role.',
    fullDescription: 'Generate tailor-made cover letters that highlight your strengths and enthusiasm for the specific company culture.',
    iconName: 'MailOpen',
    inputPlaceholder: 'Job Title: Financial Analyst, Company: AVRX Solution, Experience: 3 years in credit underwriting...',
    seoTitle: 'AI Cover Letter Generator - Tailored Job Applications | AVRX',
    seoDescription: 'Generate compelling, personalized cover letters matching your experience to job descriptions in seconds.',
    features: ['Tailored to specific job postings', 'Highlight relevant career achievements', 'Tone options (Confident, Enthusiastic, Formal)', 'One-click copy & export'],
    howItWorks: [
      { step: 1, title: 'Enter Role & Company', desc: 'Specify the job title and organization name.' },
      { step: 2, title: 'Highlight Key Experience', desc: 'List your top 2-3 qualifications.' },
      { step: 3, title: 'Generate Letter', desc: 'Get an executive-ready cover letter.' }
    ],
    faqs: [
      { question: 'Can I customize the opening and closing?', answer: 'Yes, all sections are fully editable before copying or saving.' }
    ]
  },
  {
    id: 'ai-interview-preparation',
    slug: 'interview-preparation',
    name: 'AI Mock Interview Preparation',
    category: 'career',
    categoryLabel: 'AI Career Tools',
    shortDescription: 'Generate role-specific interview questions, STAR method model answers, and behavioral scenario prep.',
    fullDescription: 'Practice with confidence. Generates technical questions, leadership behavioral inquiries, and salary negotiation tips for any job title.',
    badge: 'Popular',
    iconName: 'HelpCircle',
    inputPlaceholder: 'Role: Senior Account Manager / React Developer, Experience: 4 years...',
    seoTitle: 'AI Interview Preparation - Practice Questions & Model Answers | AVRX',
    seoDescription: 'Master your next interview with AI generated role-specific questions, STAR method answers, and interview simulation.',
    features: ['Role-specific technical questions', 'STAR method behavioral frameworks', 'Tough scenario questions & model replies', 'Questions to ask the interviewer'],
    howItWorks: [
      { step: 1, title: 'Select Job Title', desc: 'Type the role you are interviewing for.' },
      { step: 2, title: 'Generate Question Pack', desc: 'Receive top 10 questions with expert model answers.' },
      { step: 3, title: 'Practice & Ace', desc: 'Rehearse your answers using the STAR framework.' }
    ],
    faqs: [
      { question: 'What is the STAR method?', answer: 'STAR stands for Situation, Task, Action, and Result — the gold standard structure for answering behavioral interview questions.' }
    ]
  },
  {
    id: 'ai-job-description-generator',
    slug: 'job-description-generator',
    name: 'AI Job Description Generator',
    category: 'career',
    categoryLabel: 'AI Career Tools',
    shortDescription: 'Generate comprehensive, legally compliant job descriptions with responsibilities, requirements, and perks.',
    fullDescription: 'Hire top talent faster. Create polished job postings for LinkedIn, Naukri, and Indeed tailored to your team culture.',
    iconName: 'UserPlus',
    inputPlaceholder: 'Job Title: Digital Marketing Specialist, Location: Raipur (Hybrid), Experience: 2-4 Years...',
    seoTitle: 'AI Job Description Generator - Create Job Postings | AVRX',
    seoDescription: 'Generate professional job descriptions with clear responsibilities, qualifications, requirements, and company perks.',
    features: ['Detailed responsibilities list', 'Must-have vs nice-to-have skills', 'Company culture & perks section', 'Optimized for job board SEO'],
    howItWorks: [
      { step: 1, title: 'Enter Role Details', desc: 'Input title, seniority, and work location.' },
      { step: 2, title: 'Generate JD', desc: 'AI drafts comprehensive job posting.' },
      { step: 3, title: 'Publish to Portals', desc: 'Post directly to LinkedIn, Naukri, or your careers page.' }
    ],
    faqs: [
      { question: 'Does it include compensation and benefits?', answer: 'Yes, you can specify CTC ranges, health benefits, and remote flexibility.' }
    ]
  },

  // 8. AI Finance & Calculators
  {
    id: 'loan-emi-calculator',
    slug: 'loan-calculator',
    name: 'Loan EMI & Amortization Calculator',
    category: 'finance',
    categoryLabel: 'AI Finance & Calculators',
    shortDescription: 'Calculate exact monthly EMI, total interest, overall repayment, and view full month-by-month amortization schedules.',
    fullDescription: 'Comprehensive loan calculator for Personal Loans, Business Loans, Home Loans, and Car Loans with interest graphs and prepayment simulations.',
    badge: 'Popular',
    iconName: 'Calculator',
    seoTitle: 'Loan EMI Calculator with Amortization Schedule | AVRX Finance',
    seoDescription: 'Calculate monthly EMI, total interest payable, and full amortization schedule for Personal, Home, and Business loans.',
    features: ['Interactive sliders for Amount, Rate, Tenure', 'Total interest vs principal breakdown pie chart', 'Year-by-year amortization schedule', 'Instant loan eligibility consultation link'],
    howItWorks: [
      { step: 1, title: 'Set Loan Amount', desc: 'Choose your desired loan capital.' },
      { step: 2, title: 'Adjust Rate & Tenure', desc: 'Set interest rate and loan duration in years/months.' },
      { step: 3, title: 'View EMI & Schedule', desc: 'Get exact monthly commitment and total payment.' }
    ],
    faqs: [
      { question: 'Does AVRX provide business and personal loans?', answer: 'Yes! AVRX provides Personal Loans starting from 10.5% p.a. and collateral-free Business Loans up to ₹1 Crore.' }
    ]
  },
  {
    id: 'insurance-calculator',
    slug: 'insurance-calculator',
    name: 'Insurance Premium & Coverage Calculator',
    category: 'finance',
    categoryLabel: 'AI Finance & Calculators',
    shortDescription: 'Estimate premium costs and compare coverage options for Health, Motor, Term Life, and Shop Insurance.',
    fullDescription: 'Discover optimal insurance coverage for your family, vehicles, or business premises with cashless hospital/garage networks.',
    badge: 'Popular',
    iconName: 'Shield',
    seoTitle: 'Insurance Premium Calculator - Health, Motor & Life | AVRX',
    seoDescription: 'Estimate insurance premiums and find optimal cover for Health, Motor, Life, and Shop insurance with instant quotes.',
    features: ['Health Insurance sum insured estimator', 'Motor Insurance IDV & NCB calculation', 'Term Life human life value calculator', 'Shop & Property risk assessments'],
    howItWorks: [
      { step: 1, title: 'Select Insurance Type', desc: 'Choose Health, Motor, Life, or Business.' },
      { step: 2, title: 'Input Profile Details', desc: 'Enter age, vehicle value, or family size.' },
      { step: 3, title: 'Compare Premiums', desc: 'View estimated annual premium and benefit riders.' }
    ],
    faqs: [
      { question: 'Are quotes instant and free?', answer: 'Yes, calculations are instant with no obligation. Talk to AVRX insurance advisors for cashless policy issuance.' }
    ]
  },
  {
    id: 'sip-calculator',
    slug: 'sip-calculator',
    name: 'SIP & Wealth Compound Calculator',
    category: 'finance',
    categoryLabel: 'AI Finance & Calculators',
    shortDescription: 'Calculate maturity value and compounding returns for Systematic Investment Plans (SIP) and mutual funds.',
    fullDescription: 'Visualize the power of compounding. Calculate future corpus based on monthly investment, expected return rate, and time horizon.',
    badge: 'Popular',
    iconName: 'TrendingUp',
    seoTitle: 'SIP Calculator - Mutual Fund Returns & Wealth Growth | AVRX',
    seoDescription: 'Calculate compound returns for monthly Systematic Investment Plans (SIP) and mutual funds with visual wealth growth charts.',
    features: ['Monthly SIP & Lumpsum modes', 'Compound growth projection chart', 'Total invested vs wealth gained ratio', 'Inflation-adjusted corpus calculator'],
    howItWorks: [
      { step: 1, title: 'Set Monthly Investment', desc: 'Input your monthly SIP amount (e.g. ₹5,000).' },
      { step: 2, title: 'Set Duration & Returns', desc: 'Select investment period and expected annual return (e.g. 12%).' },
      { step: 3, title: 'View Future Wealth', desc: 'See total maturity corpus and profit accrued.' }
    ],
    faqs: [
      { question: 'What is a realistic expected return for equity SIP?', answer: 'Historically, diversified equity mutual funds in India have averaged 12% to 15% annualized returns over 5+ year horizons.' }
    ]
  },
  {
    id: 'fd-calculator',
    slug: 'fd-calculator',
    name: 'Fixed Deposit (FD) Returns Calculator',
    category: 'finance',
    categoryLabel: 'AI Finance & Calculators',
    shortDescription: 'Calculate maturity amount and total interest for Bank Fixed Deposits and Cumulative/Non-cumulative schemes.',
    fullDescription: 'Calculate guaranteed fixed deposit returns across monthly, quarterly, or annual compounding frequencies with senior citizen bonus rates.',
    iconName: 'DollarSign',
    seoTitle: 'Fixed Deposit (FD) Calculator - Interest & Maturity | AVRX',
    seoDescription: 'Calculate FD maturity amount, total interest earned, and quarterly compounding returns with senior citizen interest rates.',
    features: ['Quarterly, monthly, annual compounding', 'Senior citizen interest rate toggle (+0.50%)', 'TDS deduction estimation', 'Visual principal vs interest graph'],
    howItWorks: [
      { step: 1, title: 'Enter Deposit Capital', desc: 'Input principal investment amount.' },
      { step: 2, title: 'Set Rate & Tenure', desc: 'Enter bank interest rate and tenure.' },
      { step: 3, title: 'Get Maturity Value', desc: 'View exact payout on maturity.' }
    ],
    faqs: [
      { question: 'How is FD interest compounded in Indian banks?', answer: 'Most commercial Indian banks compound fixed deposit interest on a quarterly basis.' }
    ]
  },
  {
    id: 'gst-calculator',
    slug: 'gst-calculator',
    name: 'GST Calculator (Inclusive / Exclusive)',
    category: 'finance',
    categoryLabel: 'AI Finance & Calculators',
    shortDescription: 'Calculate GST (5%, 12%, 18%, 28%) with CGST, SGST, IGST split for inclusive and exclusive amounts.',
    fullDescription: 'Accurate Goods and Services Tax calculator for Indian traders, freelancers, and businesses with invoice line item export.',
    badge: 'Popular',
    iconName: 'Receipt',
    seoTitle: 'Online GST Calculator (5%, 12%, 18%, 28%) | AVRX Tax Tools',
    seoDescription: 'Calculate CGST, SGST, and IGST for GST inclusive and exclusive prices with invoice breakdowns.',
    features: ['Inclusive & Exclusive GST modes', 'All standard GST slabs (5%, 12%, 18%, 28%)', 'Intra-state (CGST+SGST) vs Inter-state (IGST) split', 'Invoice itemizer table'],
    howItWorks: [
      { step: 1, title: 'Enter Base Amount', desc: 'Type net or gross transaction amount.' },
      { step: 2, title: 'Select GST Slab', desc: 'Pick 5%, 12%, 18%, or 28%.' },
      { step: 3, title: 'View Tax Breakdown', desc: 'Get exact tax amount and final billing price.' }
    ],
    faqs: [
      { question: 'What is the difference between GST inclusive and exclusive?', answer: 'GST Exclusive adds tax on top of base cost, whereas GST Inclusive calculates the tax already embedded within the total price.' }
    ]
  },
  {
    id: 'income-tax-calculator',
    slug: 'income-tax-calculator',
    name: 'Income Tax Calculator (New vs Old Regime)',
    category: 'finance',
    categoryLabel: 'AI Finance & Calculators',
    shortDescription: 'Compare your tax liabilities under New Tax Regime vs Old Tax Regime with 80C, 80D, HRA deductions.',
    fullDescription: 'Calculate your exact tax liability, cess, standard deduction, and find out which tax regime saves you more money.',
    badge: 'Popular',
    iconName: 'Percent',
    seoTitle: 'Income Tax Calculator FY 2025-26 (AY 2026-27) | AVRX Tax',
    seoDescription: 'Compare New vs Old Tax Regime liabilities with standard deductions, 80C, 80D health insurance, and HRA exemptions.',
    features: ['Budget 2025-26 New Regime slabs', 'Side-by-side Old vs New regime comparison', 'Section 80C, 80D, NPS deduction calculator', 'Net take-home salary estimator'],
    howItWorks: [
      { step: 1, title: 'Enter Annual Income', desc: 'Input salary or business profit.' },
      { step: 2, title: 'Add Deductions', desc: 'Enter 80C, health insurance, and home loan interest.' },
      { step: 3, title: 'Compare & Save', desc: 'Discover the most tax-efficient regime.' }
    ],
    faqs: [
      { question: 'Is the standard deduction ₹75,000 in New Tax Regime?', answer: 'Yes, for salaried individuals, the standard deduction under the revised New Tax Regime is ₹75,000.' }
    ]
  },
  {
    id: 'cibil-score-guide',
    slug: 'cibil-guide',
    name: 'CIBIL / Credit Score Guide & Advisor',
    category: 'finance',
    categoryLabel: 'AI Finance & Calculators',
    shortDescription: 'Educational credit score factors, score range benchmarks, improvement tips, and official credit bureau access guide.',
    fullDescription: 'Learn what drives your credit score, how to remove disputes, optimize credit utilization, and access your authentic report through authorized bureau channels.',
    badge: 'New',
    iconName: 'ShieldCheck',
    seoTitle: 'CIBIL & Credit Score Improvement Guide | AVRX Finance',
    seoDescription: 'Understand CIBIL score factors, credit report health, dispute resolution, and authentic credit bureau access pathways.',
    features: ['CIBIL score bracket breakdown (300-900)', 'Key score factors (Payment history, Credit mix, Utilization)', '7-Step score repair playbook', 'Authorized bureau connection guide with disclaimer'],
    howItWorks: [
      { step: 1, title: 'Select Current Score Range', desc: 'Choose your approximate credit bracket.' },
      { step: 2, title: 'Analyze Risk Factors', desc: 'Review utilization ratio and late payment impacts.' },
      { step: 3, title: 'Follow Action Checklist', desc: 'Apply proven steps to elevate your score to 750+.' }
    ],
    faqs: [
      { question: 'Does AVRX show my live credit score?', answer: 'Credit score access requires an authorized credit-bureau integration. AVRX provides authentic educational guidance, score factors, and direct pathways to official bureau portals without simulating or faking scores.' }
    ]
  },

  // 9. AI Developer Tools
  {
    id: 'ai-code-generator',
    slug: 'ai-code-generator',
    name: 'AI Code Generator',
    category: 'developer',
    categoryLabel: 'AI Developer Tools',
    shortDescription: 'Generate clean, commented code in JavaScript, TypeScript, Python, HTML/CSS, Java, Dart (Flutter), and SQL.',
    fullDescription: 'Accelerate your development workflow. Convert requirements into production-ready frontend components, backend controllers, and database scripts.',
    badge: 'Popular',
    iconName: 'Code',
    inputPlaceholder: 'e.g. Build a responsive React navbar with mobile drawer and dark mode in Tailwind CSS...',
    seoTitle: 'AI Code Generator - Multi-Language Code Assistant | AVRX',
    seoDescription: 'Generate clean, modern code in React, TypeScript, Python, SQL, Java, and Flutter with comments and syntax formatting.',
    features: ['Multi-language support (JS, TS, Python, Dart, Java, SQL)', 'Clean comments and best practices', 'Modern framework support (React, Node, Tailwind)', 'One-click copy and download'],
    howItWorks: [
      { step: 1, title: 'Choose Programming Language', desc: 'Select TypeScript, Python, SQL, HTML, etc.' },
      { step: 2, title: 'Describe Requirement', desc: 'Explain function, component, or algorithm.' },
      { step: 3, title: 'Copy Production Code', desc: 'Get clean code with explanatory documentation.' }
    ],
    faqs: [
      { question: 'Does it write TypeScript types?', answer: 'Yes, it provides full TypeScript interfaces and types for strict type safety.' }
    ]
  },
  {
    id: 'ai-code-explainer',
    slug: 'code-explainer',
    name: 'AI Code Explainer & Docstring Generator',
    category: 'developer',
    categoryLabel: 'AI Developer Tools',
    shortDescription: 'Paste complex code or legacy snippets to get a plain-English explanation, time complexity, and docstrings.',
    fullDescription: 'Demystify legacy codebases, understand intricate algorithms, and generate JSDoc/Docstrings for your codebase in seconds.',
    iconName: 'FileQuestion',
    inputPlaceholder: 'Paste code snippet here to explain...',
    seoTitle: 'AI Code Explainer & Algorithm Breakdown | AVRX Developer Tools',
    seoDescription: 'Explain complicated code snippets, calculate Big-O time complexity, and auto-generate clean JSDoc documentation.',
    features: ['Line-by-line code explanation', 'Time & Space complexity (Big-O)', 'JSDoc and Python Docstring generator', 'Edge case and vulnerability detection'],
    howItWorks: [
      { step: 1, title: 'Paste Code Snippet', desc: 'Insert code in any programming language.' },
      { step: 2, title: 'Run Explainer', desc: 'AI analyzes logic flow and architecture.' },
      { step: 3, title: 'Read Plain English Breakdown', desc: 'Understand exactly how the code functions.' }
    ],
    faqs: [
      { question: 'Can it explain regex and recursive logic?', answer: 'Yes, it breaks down complex regex groups, recursion trees, and async event loops.' }
    ]
  },
  {
    id: 'ai-debugger',
    slug: 'debugger',
    name: 'AI Code Debugger & Bug Fixer',
    category: 'developer',
    categoryLabel: 'AI Developer Tools',
    shortDescription: 'Paste broken code and error logs to identify the exact root cause and receive fixed, tested code.',
    fullDescription: 'Debug runtime errors, null pointer exceptions, CSS layout quirks, and async race conditions in seconds.',
    badge: 'Popular',
    iconName: 'Bug',
    inputPlaceholder: 'Paste broken code snippet and the error stack trace...',
    seoTitle: 'AI Code Debugger & Error Fixer | AVRX Developer Tools',
    seoDescription: 'Fix coding errors, debug stack traces, resolve async bugs, and get corrected code with detailed explanations.',
    features: ['Root cause identification', 'Corrected code with diff highlights', 'Vulnerability and edge case patching', 'Prevention best practices'],
    howItWorks: [
      { step: 1, title: 'Paste Code & Error', desc: 'Insert the faulty code and console error.' },
      { step: 2, title: 'Identify Bug', desc: 'AI pinpoints exact bug line and failure reason.' },
      { step: 3, title: 'Apply Fix', desc: 'Copy tested, patched code.' }
    ],
    faqs: [
      { question: 'Does it support full-stack JavaScript and Python errors?', answer: 'Yes, it covers React render loops, Node.js memory leaks, Python syntax errors, and SQL query locks.' }
    ]
  },
  {
    id: 'ai-sql-generator',
    slug: 'sql-generator',
    name: 'AI SQL Query & Schema Generator',
    category: 'developer',
    categoryLabel: 'AI Developer Tools',
    shortDescription: 'Convert plain English requirements into complex SQL queries, JOINs, aggregations, and CREATE TABLE schemas.',
    fullDescription: 'Generate optimized queries for PostgreSQL, MySQL, SQLite, and SQL Server. Handles indexing, CTEs, and window functions.',
    badge: 'Fast',
    iconName: 'Database',
    inputPlaceholder: 'e.g. Find top 5 customers by total order amount in the last 30 days who live in Maharashtra...',
    seoTitle: 'AI SQL Query Generator - Text to SQL | AVRX Tools',
    seoDescription: 'Generate optimized SQL queries, JOIN statements, database schemas, and indexes from plain English descriptions.',
    features: ['Supports PostgreSQL, MySQL, SQLite, MS SQL', 'Complex JOINs, Subqueries, & CTEs', 'Database schema DDL generation', 'Query optimization suggestions'],
    howItWorks: [
      { step: 1, title: 'Describe Query Goal', desc: 'Type your data requirement in plain English.' },
      { step: 2, title: 'Pick Database Engine', desc: 'Select PostgreSQL, MySQL, or SQLite.' },
      { step: 3, title: 'Copy Executable SQL', desc: 'Run query directly in your database client.' }
    ],
    faqs: [
      { question: 'Can it generate database schemas?', answer: 'Yes, it creates complete CREATE TABLE scripts with primary keys, foreign keys, and indexes.' }
    ]
  },
  {
    id: 'json-formatter',
    slug: 'json-formatter',
    name: 'AI JSON Formatter & Validator',
    category: 'developer',
    categoryLabel: 'AI Developer Tools',
    shortDescription: 'Validate, beautify, minify, and inspect JSON payloads with interactive tree inspector and error highlighting.',
    fullDescription: 'Clean and format messy JSON strings, fix trailing commas, inspect nested objects in an interactive tree view, and download formatted files.',
    badge: 'Fast',
    iconName: 'FileJson',
    seoTitle: 'JSON Formatter & Validator Online with Tree View | AVRX',
    seoDescription: 'Format, minify, validate, and inspect JSON data online with interactive hierarchical tree view and syntax checking.',
    features: ['Syntax validation & error highlighting', 'Beautify (2 spaces, 4 spaces, Tab)', 'Minify into single line payload', 'Interactive collapsible object tree inspector'],
    howItWorks: [
      { step: 1, title: 'Paste JSON String', desc: 'Input your raw or messy JSON data.' },
      { step: 2, title: 'Validate & Format', desc: 'Instant syntax check with indentation.' },
      { step: 3, title: 'Copy or Download', desc: 'Export formatted .json file.' }
    ],
    faqs: [
      { question: 'Is my JSON data kept private?', answer: 'All formatting and validation is performed 100% client-side in your web browser.' }
    ]
  },
  {
    id: 'ai-regex-generator',
    slug: 'regex-generator',
    name: 'AI Regex Generator & Tester',
    category: 'developer',
    categoryLabel: 'AI Developer Tools',
    shortDescription: 'Convert plain English rules into Regular Expressions (Regex) with pattern explanation and live test cases.',
    fullDescription: 'Never struggle with regex syntax again. Generate patterns for emails, Indian phone numbers, PAN cards, GSTIN numbers, and passwords.',
    iconName: 'Code',
    inputPlaceholder: 'e.g. Validate 15-character Indian GSTIN number (e.g. 22AAAAA0000A1Z5)...',
    seoTitle: 'AI Regex Generator & Pattern Tester | AVRX Developer Tools',
    seoDescription: 'Generate Regular Expressions (Regex) from plain text descriptions with line-by-line breakdown and live test validation.',
    features: ['Pattern generation for all languages (JS, Python, PHP, Java)', 'Includes test string validation', 'Preset library for Indian PAN, GST, Aadhaar, Phone', 'Detailed regex breakdown'],
    howItWorks: [
      { step: 1, title: 'Describe Pattern Rule', desc: 'Explain what string format you need to match or extract.' },
      { step: 2, title: 'Generate Regex', desc: 'Get pattern with flag modifiers (g, i, m).' },
      { step: 3, title: 'Test & Copy', desc: 'Test against sample inputs and copy pattern.' }
    ],
    faqs: [
      { question: 'Does it support Indian identity formats?', answer: 'Yes, it has built-in patterns for GSTIN, PAN card, 10-digit mobile numbers, and pincodes.' }
    ]
  },
  {
    id: 'ai-api-documentation-generator',
    slug: 'api-doc-generator',
    name: 'AI API Documentation Generator',
    category: 'developer',
    categoryLabel: 'AI Developer Tools',
    shortDescription: 'Generate OpenAPI / Swagger docs, curl requests, and endpoint documentation from code or endpoints.',
    fullDescription: 'Create clean developer documentation with request headers, body payloads, status codes (200, 400, 500), and curl snippets.',
    iconName: 'Book',
    inputPlaceholder: 'Endpoint: POST /api/v1/loan/apply, Body: { name, phone, amount, pan }, Responses: 201 Created, 400 Bad Request...',
    seoTitle: 'AI API Documentation Generator - Swagger & Curl | AVRX',
    seoDescription: 'Generate professional API documentation, OpenAPI specs, response payloads, and curl commands automatically.',
    features: ['OpenAPI 3.0 / Swagger schema', 'Curl & JavaScript fetch code examples', 'Request and Response schema modeling', 'Markdown API docs ready for Git'],
    howItWorks: [
      { step: 1, title: 'Provide API Endpoint Info', desc: 'Enter HTTP method, path, and payload.' },
      { step: 2, title: 'Generate Docs', desc: 'AI builds comprehensive technical spec.' },
      { step: 3, title: 'Export Markdown', desc: 'Add to your GitHub README or developer portal.' }
    ],
    faqs: [
      { question: 'Can I export to Postman or Swagger?', answer: 'Yes, it formats cleanly in Markdown and OpenAPI JSON-compatible structures.' }
    ]
  },
  {
    id: 'ai-website-code-generator',
    slug: 'website-code-generator',
    name: 'AI Website Code Generator (HTML/Tailwind)',
    category: 'developer',
    categoryLabel: 'AI Developer Tools',
    shortDescription: 'Generate responsive HTML, Tailwind CSS, and React landing page sections with modern gradients and UI.',
    fullDescription: 'Build modern hero headers, pricing cards, feature bento grids, and contact forms with clean Tailwind CSS styling.',
    badge: 'Popular',
    iconName: 'Layout',
    inputPlaceholder: 'Hero section for an AI SaaS company with glowing dark theme, badge, 2 CTA buttons, and customer logos...',
    seoTitle: 'AI Website Code Generator - Tailwind CSS & HTML | AVRX',
    seoDescription: 'Generate responsive HTML & Tailwind CSS landing page sections, hero headers, pricing tables, and UI cards.',
    features: ['Clean HTML5 & Tailwind CSS utility classes', 'Modern responsive layouts (Mobile + Desktop)', 'Accessible semantic markup', 'Live preview ready to copy'],
    howItWorks: [
      { step: 1, title: 'Describe UI Section', desc: 'Specify Hero, Features, Pricing, or Testimonial layout.' },
      { step: 2, title: 'Generate Tailwind Code', desc: 'AI outputs responsive, styled component code.' },
      { step: 3, title: 'Paste into Project', desc: 'Drop into your React or HTML website.' }
    ],
    faqs: [
      { question: 'Does it use Tailwind CSS v3/v4 classes?', answer: 'Yes, it outputs modern, utility-first Tailwind CSS classes.' }
    ]
  },

  // 10. AI Text Utilities
  {
    id: 'ai-text-summarizer',
    slug: 'text-summarizer',
    name: 'AI Text Summarizer',
    category: 'utilities',
    categoryLabel: 'AI Text Utilities',
    shortDescription: 'Condense long articles, transcripts, essays, and notes into key takeaways and concise bullet points.',
    fullDescription: 'Read faster and comprehend deeper. Choose from 3 summary modes: TL;DR Brief, Bullet Key Takeaways, or Executive Summary.',
    badge: 'Popular',
    iconName: 'FileText',
    inputPlaceholder: 'Paste long article or text here to summarize...',
    seoTitle: 'AI Text Summarizer - Instant Summary & Key Points | AVRX',
    seoDescription: 'Summarize articles, essays, and documents into executive briefs, bullet points, and key takeaways in seconds.',
    features: ['3 Summary Depth Modes (TL;DR, Bullets, Detailed)', 'Reading time saved calculation', 'Key points extraction', 'Copy and download support'],
    howItWorks: [
      { step: 1, title: 'Paste Text', desc: 'Insert any length text or article.' },
      { step: 2, title: 'Select Summary Length', desc: 'Choose Quick Brief, Standard, or Detailed.' },
      { step: 3, title: 'Read Key Takeaways', desc: 'Get essential facts in seconds.' }
    ],
    faqs: [
      { question: 'How much reading time does it save?', answer: 'It typically reduces 10-minute articles down to a 30-second structured brief.' }
    ]
  },
  {
    id: 'ai-paraphraser',
    slug: 'paraphrasing-tool',
    name: 'AI Paraphrasing & Rewriter Tool',
    category: 'utilities',
    categoryLabel: 'AI Text Utilities',
    shortDescription: 'Rewrite sentences and paragraphs in multiple modes: Standard, Fluent, Formal, Creative, or Shorten.',
    fullDescription: 'Improve vocabulary, eliminate repetitive phrasing, and enhance sentence flow while preserving the original meaning.',
    badge: 'Popular',
    iconName: 'RefreshCw',
    inputPlaceholder: 'Enter text to rewrite with fresh phrasing...',
    seoTitle: 'AI Paraphrasing Tool - Rewrite Text & Improve Flow | AVRX',
    seoDescription: 'Rewrite sentences and articles with AI in Formal, Fluent, Creative, or Concise tones while keeping original intent.',
    features: ['5 Rewriting Modes (Formal, Fluent, Creative, Shorten, Expand)', 'Synonym replacement suggestions', 'Plagiarism-free original phrasing', 'One-click copy'],
    howItWorks: [
      { step: 1, title: 'Paste Sentence or Paragraph', desc: 'Enter text you want to restyle.' },
      { step: 2, title: 'Pick Rewriting Mode', desc: 'Select Formal, Creative, or Fluent.' },
      { step: 3, title: 'Copy Fresh Phrasing', desc: 'Use polished text in your documents.' }
    ],
    faqs: [
      { question: 'Does it change the core meaning?', answer: 'No, it preserves the semantic meaning while enhancing tone, vocabulary, and flow.' }
    ]
  },
  {
    id: 'ai-grammar-checker',
    slug: 'grammar-checker',
    name: 'AI Grammar & Spelling Checker',
    category: 'utilities',
    categoryLabel: 'AI Text Utilities',
    shortDescription: 'Detect and fix grammatical errors, punctuation mistakes, spelling slips, and awkward sentence phrasing.',
    fullDescription: 'Ensure error-free writing across emails, proposals, and publications with detailed explanations of corrected errors.',
    iconName: 'CheckCircle',
    inputPlaceholder: 'Paste text with potential grammatical or spelling mistakes...',
    seoTitle: 'AI Grammar Checker & Spell Check Online | AVRX',
    seoDescription: 'Fix grammar mistakes, punctuation errors, spelling slips, and awkward phrasing instantly with AI explanations.',
    features: ['Real-time grammar & spelling fixes', 'Punctuation and comma correction', 'Vocabulary enhancement tips', 'Side-by-side comparison'],
    howItWorks: [
      { step: 1, title: 'Paste Draft Text', desc: 'Insert your writing for analysis.' },
      { step: 2, title: 'Scan for Errors', desc: 'AI highlights grammar and spelling issues.' },
      { step: 3, title: 'Apply Corrections', desc: 'Copy 100% polished, error-free text.' }
    ],
    faqs: [
      { question: 'Does it explain why something was corrected?', answer: 'Yes, it provides clear grammar rules explaining the improvements.' }
    ]
  },
  {
    id: 'ai-translator',
    slug: 'translator',
    name: 'AI Multi-Language Translator',
    category: 'utilities',
    categoryLabel: 'AI Text Utilities',
    shortDescription: 'Translate between Hindi, English, Bengali, Tamil, Telugu, Marathi, Gujarati, Spanish, French, and German.',
    fullDescription: 'High-accuracy neural translation capturing cultural nuances, business terminology, and natural regional idioms.',
    badge: 'Popular',
    iconName: 'Globe2',
    inputPlaceholder: 'Enter text to translate...',
    seoTitle: 'AI Language Translator - Hindi, English & Indian Languages | AVRX',
    seoDescription: 'Accurate translation across Hindi, English, Tamil, Telugu, Bengali, Marathi, Gujarati, and global languages.',
    features: ['Major Indian languages (Hindi, Bengali, Tamil, Telugu, Marathi, Gujarati)', 'Global languages (English, Spanish, French, German, Arabic)', 'Context-aware conversational tone', 'Instant audio text-to-speech copy'],
    howItWorks: [
      { step: 1, title: 'Select Source & Target Language', desc: 'Choose English to Hindi, or vice versa.' },
      { step: 2, title: 'Enter Text', desc: 'Type or paste content.' },
      { step: 3, title: 'Get Natural Translation', desc: 'Copy authentic translated text.' }
    ],
    faqs: [
      { question: 'Does it support Hinglish and colloquial phrases?', answer: 'Yes, it understands conversational nuances and business vocabulary.' }
    ]
  },
  {
    id: 'ai-text-humanizer',
    slug: 'text-humanizer',
    name: 'AI Text Humanizer & Polisher',
    category: 'utilities',
    categoryLabel: 'AI Text Utilities',
    shortDescription: 'Transform robotic or stiff AI phrasing into natural, engaging, and conversational human writing.',
    fullDescription: 'Add authentic rhythm, varied sentence lengths, natural transitions, and relatable voice to your content. (Responsible ethical writing tool).',
    badge: 'New',
    iconName: 'UserCheck',
    inputPlaceholder: 'Paste stiff or overly generic text to make it sound natural and conversational...',
    seoTitle: 'AI Text Humanizer - Natural Writing & Tone Polisher | AVRX',
    seoDescription: 'Polishes stiff, robotic writing into natural, engaging prose with human rhythm, emotional resonance, and varied sentence lengths.',
    features: ['Natural conversational flow', 'Varied sentence cadence (short + long)', 'Eliminates repetitive robotic transition words', 'Ethical and responsible writing polish'],
    howItWorks: [
      { step: 1, title: 'Paste Robotic Draft', desc: 'Insert stiff or repetitive writing.' },
      { step: 2, title: 'Humanize Tone', desc: 'AI injects warmth, varied cadence, and natural idioms.' },
      { step: 3, title: 'Enjoy Engaging Reading', desc: 'Publish writing that connects with real people.' }
    ],
    faqs: [
      { question: 'What does this tool do?', answer: 'It eliminates robotic clichés, repetitive buzzwords, and monotone cadence to create warm, engaging human reading.' }
    ]
  },
  {
    id: 'text-counter',
    slug: 'word-character-counter',
    name: 'Word, Character & Read Time Counter',
    category: 'utilities',
    categoryLabel: 'AI Text Utilities',
    shortDescription: 'Live counter for words, characters (with/without spaces), sentences, paragraphs, reading speed, and top keyword density.',
    fullDescription: 'Complete real-time text inspector with one-click case converters (UPPERCASE, lowercase, Title Case, camelCase, snake_case).',
    badge: 'Fast',
    iconName: 'AlignLeft',
    seoTitle: 'Free Word & Character Counter with Reading Time | AVRX Tools',
    seoDescription: 'Count words, characters, sentences, paragraphs, speaking duration, reading time, and keyword density in real-time.',
    features: ['Live word & character count', 'Sentences & Paragraph statistics', 'Estimated reading & speaking time', 'One-click case transformers (Title, camelCase, snake_case)', 'Top keyword frequency breakdown'],
    howItWorks: [
      { step: 1, title: 'Type or Paste Text', desc: 'Watch statistics update live with every keystroke.' },
      { step: 2, title: 'Transform Case', desc: 'Click buttons to convert to camelCase, UPPERCASE, etc.' },
      { step: 3, title: 'Export or Copy', desc: 'Copy clean formatted text.' }
    ],
    faqs: [
      { question: 'What is the average reading speed used?', answer: 'Reading time is calculated based on the standard average of 200 words per minute (WPM).' }
    ]
  },

  // 11. AI Business Automation
  {
    id: 'ai-meeting-notes-generator',
    slug: 'meeting-notes-generator',
    name: 'AI Meeting Notes & Minutes (MoM) Generator',
    category: 'automation',
    categoryLabel: 'AI Business Automation',
    shortDescription: 'Paste raw transcripts or discussion notes to generate executive summaries, key decisions, and action item tables.',
    fullDescription: 'Never lose track of meeting outcomes. Automatically extract decisions made, owners, deadlines, and next steps from any call notes.',
    badge: 'Popular',
    iconName: 'ClipboardList',
    inputPlaceholder: 'Paste rough meeting transcript, bullet notes, or discussion points...',
    seoTitle: 'AI Meeting Notes & Minutes (MoM) Generator | AVRX',
    seoDescription: 'Convert rough meeting transcripts into structured Minutes of Meeting (MoM) with decisions, action items, and assigned owners.',
    features: ['Executive Meeting Summary', 'Key Decisions Log', 'Action Item Table (Task, Assignee, Due Date)', 'Follow-up Email draft'],
    howItWorks: [
      { step: 1, title: 'Paste Transcript / Notes', desc: 'Insert raw discussion text or voice notes.' },
      { step: 2, title: 'Extract Minutes', desc: 'AI categorizes decisions and assignments.' },
      { step: 3, title: 'Share with Team', desc: 'Copy ready-to-send MoM email.' }
    ],
    faqs: [
      { question: 'Does it format assignee names and deadlines?', answer: 'Yes, it builds a neat structured table with Task, Owner, and Target Deadline.' }
    ]
  },
  {
    id: 'ai-action-item-generator',
    slug: 'action-item-generator',
    name: 'AI Action Item & Task Extractor',
    category: 'automation',
    categoryLabel: 'AI Business Automation',
    shortDescription: 'Extract prioritized task lists, deadlines, and deliverables from client emails, project briefs, and chat threads.',
    fullDescription: 'Turn messy email threads or client voice notes into clean Jira/Trello/Asana style tasks with priority rankings.',
    iconName: 'CheckSquare',
    inputPlaceholder: 'Paste client email, Slack thread, or project requirement brief...',
    seoTitle: 'AI Action Item & Task Extractor - Email to Tasks | AVRX',
    seoDescription: 'Extract actionable tasks, deadlines, and deliverables from emails and project documents into prioritized to-do lists.',
    features: ['High / Medium / Low priority tags', 'Deliverable milestone mapping', 'Formatted for Trello, Jira, and Notion', 'Clear ownership assignment'],
    howItWorks: [
      { step: 1, title: 'Paste Client Message', desc: 'Insert lengthy email or conversation.' },
      { step: 2, title: 'Extract Tasks', desc: 'AI isolates all commitments and deliverables.' },
      { step: 3, title: 'Import to Workflow', desc: 'Copy directly into your project management board.' }
    ],
    faqs: [
      { question: 'Can I copy this directly into Jira or Trello?', answer: 'Yes, output is structured with clean Markdown checklists ready for any PM tool.' }
    ]
  },
  {
    id: 'ai-customer-reply-generator',
    slug: 'customer-reply-generator',
    name: 'AI Customer Reply & Support Assistant',
    category: 'automation',
    categoryLabel: 'AI Business Automation',
    shortDescription: 'Draft empathetic, professional customer support responses for inquiries, complaints, refund requests, and praise.',
    fullDescription: 'De-escalate frustrated customers and resolve tickets faster with polite, solution-oriented replies tailored to your company policy.',
    badge: 'Fast',
    iconName: 'MessageCircle',
    inputPlaceholder: 'Customer message or complaint (e.g. My order is delayed by 3 days, where is my refund?)...',
    seoTitle: 'AI Customer Support Reply Generator | AVRX Business Tools',
    seoDescription: 'Draft empathetic, professional customer support replies for complaints, refund requests, and support tickets.',
    features: ['De-escalation of angry customers', 'Clear resolution steps', 'Polite, empathetic tone matching', 'Multiple response options (Short, Detailed, Formal)'],
    howItWorks: [
      { step: 1, title: 'Paste Customer Query', desc: 'Enter the user ticket or email.' },
      { step: 2, title: 'Select Resolution Policy', desc: 'Indicate refund, replacement, or timeline.' },
      { step: 3, title: 'Send Polished Reply', desc: 'Copy professional response to your support helpdesk.' }
    ],
    faqs: [
      { question: 'Does it maintain a professional company tone?', answer: 'Yes, it uses empathetic, solution-oriented language that protects brand reputation.' }
    ]
  },
  {
    id: 'ai-whatsapp-message-generator',
    slug: 'whatsapp-message-generator',
    name: 'AI WhatsApp Business Message Generator',
    category: 'automation',
    categoryLabel: 'AI Business Automation',
    shortDescription: 'Generate high-response WhatsApp promotional broadcasts, appointment reminders, payment links, and greetings.',
    fullDescription: 'Create engaging WhatsApp messages formatted with bold text (*text*), emojis, and quick-reply CTAs that drive instant actions.',
    badge: 'Popular',
    iconName: 'Send',
    inputPlaceholder: 'Message Goal: Payment Reminder for Invoice #842, Due: Tomorrow, Amount: ₹15,000...',
    seoTitle: 'AI WhatsApp Message Generator for Business & Marketing | AVRX',
    seoDescription: 'Generate high-converting WhatsApp marketing messages, payment reminders, greetings, and appointment alerts.',
    features: ['WhatsApp formatting (*bold*, _italic_, emojis)', 'Payment reminder templates', 'Promotional broadcast copy', 'Customer greeting & onboarding flows'],
    howItWorks: [
      { step: 1, title: 'Choose Message Type', desc: 'Select Promo, Reminder, Greeting, or Update.' },
      { step: 2, title: 'Enter Customer/Offer Details', desc: 'Input offer specifics and links.' },
      { step: 3, title: 'Send on WhatsApp', desc: 'Click to copy with perfect mobile formatting.' }
    ],
    faqs: [
      { question: 'Does it use WhatsApp native formatting?', answer: 'Yes, asterisks and underscores are placed properly for WhatsApp rendering.' }
    ]
  },
  {
    id: 'ai-proposal-generator',
    slug: 'proposal-generator',
    name: 'AI Client Proposal & Scope of Work Generator',
    category: 'automation',
    categoryLabel: 'AI Business Automation',
    shortDescription: 'Generate comprehensive client proposals with project scope, deliverables, timeline milestones, and pricing tiers.',
    fullDescription: 'Close high-ticket clients faster. Generate agency-grade commercial proposals with technical architecture, deliverables, and payment terms.',
    badge: 'New',
    iconName: 'FileCheck',
    inputPlaceholder: 'Project: E-commerce Website for Fashion Brand, Budget: ₹1.5 Lakhs, Timeline: 4 Weeks...',
    seoTitle: 'AI Client Business Proposal Generator | AVRX Solutions',
    seoDescription: 'Create winning client proposals with project scope, milestones, deliverables, tech stack, and commercial pricing tables.',
    features: ['Executive project overview', 'Deliverables breakdown & Milestones', 'Pricing tiers (Basic, Standard, Premium)', 'Warranty, support, and payment milestones'],
    howItWorks: [
      { step: 1, title: 'Enter Project Details', desc: 'Input client name, project scope, and budget.' },
      { step: 2, title: 'Generate Proposal', desc: 'AI structures full commercial agreement.' },
      { step: 3, title: 'Send to Client', desc: 'Export as professional PDF or proposal document.' }
    ],
    faqs: [
      { question: 'Can I use this for digital agencies and freelancers?', answer: 'Yes, it is designed for agencies, IT companies, consultants, and service providers.' }
    ]
  },
  {
    id: 'ai-invoice-description-generator',
    slug: 'invoice-description-generator',
    name: 'AI Invoice Description & Line Item Generator',
    category: 'automation',
    categoryLabel: 'AI Business Automation',
    shortDescription: 'Generate professional, audit-proof invoice line items, milestone descriptions, and terms of payment.',
    fullDescription: 'Avoid client disputes and tax audit questions with clear, descriptive billing itemizations and SAC/HSN aligned wording.',
    iconName: 'Receipt',
    inputPlaceholder: 'Service: Custom Web App Development, Milestone: Phase 2 Backend API Integration & Database Setup...',
    seoTitle: 'AI Invoice Description & Line Item Generator | AVRX',
    seoDescription: 'Generate professional, audit-compliant invoice line item descriptions, milestone breakdowns, and payment terms.',
    features: ['Clear milestone billing itemization', 'Professional terminology for GST invoices', 'Standard payment terms & bank notes', 'One-click copy for accounting software'],
    howItWorks: [
      { step: 1, title: 'Enter Service Rendered', desc: 'Describe work performed during the billing period.' },
      { step: 2, title: 'Generate Itemizations', desc: 'Get professional line item descriptions.' },
      { step: 3, title: 'Paste to Invoice', desc: 'Add directly into Zoho, Tally, or Excel invoice.' }
    ],
    faqs: [
      { question: 'Is this suitable for GST tax compliance?', answer: 'Yes, it provides clear descriptions that comply with GST invoice itemization norms.' }
    ]
  },

  // 12. AVRX AI Lab (Next-Gen Experimental)
  {
    id: 'ai-prompt-engineer',
    slug: 'prompt-engineer',
    name: 'AI Prompt Engineer (Advanced)',
    category: 'lab',
    categoryLabel: 'AVRX AI Lab',
    shortDescription: 'Turn vague, simple instructions into high-precision system prompts with persona, constraints, and output schema.',
    fullDescription: 'Engineer master prompts for ChatGPT, Gemini 1.5/2.0, Claude 3.5, and LLM applications using few-shot techniques and guardrails.',
    badge: 'AI Lab',
    iconName: 'Cpu',
    inputPlaceholder: 'e.g. I need an AI that acts as a strict code reviewer for senior TypeScript developers...',
    seoTitle: 'AI Prompt Engineer - Master Prompt Architecture | AVRX AI Lab',
    seoDescription: 'Architect advanced LLM system prompts with personas, negative constraints, few-shot examples, and strict JSON output schemas.',
    features: ['System Persona definition', 'Negative constraints & Guardrails', 'Few-Shot demonstration templates', 'Strict JSON/Markdown output formatting'],
    howItWorks: [
      { step: 1, title: 'Enter Raw Goal', desc: 'State what you want your AI model to perform.' },
      { step: 2, title: 'Compile Prompt', desc: 'AI compiles complete production-grade system prompt.' },
      { step: 3, title: 'Deploy to LLM', desc: 'Paste into your AI system instructions or API call.' }
    ],
    faqs: [
      { question: 'What makes an engineered prompt superior?', answer: 'It defines role boundaries, edge-case constraints, structured thinking steps, and deterministic output schemas.' }
    ]
  },
  {
    id: 'ai-prompt-optimizer',
    slug: 'prompt-optimizer',
    name: 'AI Prompt Optimizer & Refiner',
    category: 'lab',
    categoryLabel: 'AVRX AI Lab',
    shortDescription: 'Paste your existing prompts to eliminate hallucinations, improve reasoning, and reduce token waste.',
    fullDescription: 'Benchmark and optimize your AI prompts with Chain-of-Thought reasoning steps, XML delimiter tags, and clarity enhancers.',
    badge: 'AI Lab',
    iconName: 'Zap',
    inputPlaceholder: 'Paste your current prompt here to optimize...',
    seoTitle: 'AI Prompt Optimizer - Reduce Hallucinations & Boost Accuracy | AVRX',
    seoDescription: 'Refine existing prompts with Chain-of-Thought logic, XML tags, token efficiency, and accuracy boosters.',
    features: ['Token reduction & clarity optimization', 'Chain-of-Thought (CoT) reasoning injected', 'XML structure tags (<context>, <rules>)', 'Side-by-side Before/After comparison'],
    howItWorks: [
      { step: 1, title: 'Paste Current Prompt', desc: 'Insert your existing prompt.' },
      { step: 2, title: 'Run Optimization', desc: 'AI refines grammar, delimiters, and instructions.' },
      { step: 3, title: 'Test Enhanced Prompt', desc: 'Experience significantly higher answer accuracy.' }
    ],
    faqs: [
      { question: 'Does this work for all LLM providers?', answer: 'Yes, it works universally across OpenAI GPT-4o, Google Gemini, Anthropic Claude, and Llama 3.' }
    ]
  },
  {
    id: 'ai-research-assistant',
    slug: 'research-assistant',
    name: 'AI Deep Research Assistant',
    category: 'lab',
    categoryLabel: 'AVRX AI Lab',
    shortDescription: 'Generate comprehensive multi-angle research blueprints, literature summaries, and source verification frameworks.',
    fullDescription: 'Accelerate academic or market investigations. Constructs hypothesis testing matrices, counter-arguments, and citation checklists.',
    badge: 'AI Lab',
    iconName: 'FlaskConical',
    inputPlaceholder: 'Research topic: Impact of Sovereign AI Data Centers on Indian Digital Economy by 2030...',
    seoTitle: 'AI Research Assistant - Deep Investigation Blueprints | AVRX AI Lab',
    seoDescription: 'Generate deep research frameworks, literature outlines, counter-arguments, and source verification methodologies with AI.',
    features: ['Hypothesis & Research Question formulation', 'Key trends and consensus breakdown', 'Contrarian viewpoints & Counter-arguments', 'Source verification & Fact-checking checklist'],
    howItWorks: [
      { step: 1, title: 'Enter Research Question', desc: 'Type your inquiry or academic topic.' },
      { step: 2, title: 'Synthesize Research Plan', desc: 'AI constructs multi-dimensional study blueprint.' },
      { step: 3, title: 'Execute Investigation', desc: 'Use the framework to write papers or reports.' }
    ],
    faqs: [
      { question: 'Does it include opposing viewpoints?', answer: 'Yes, it automatically analyzes contrarian arguments to ensure balanced, unbiased research.' }
    ]
  },
  {
    id: 'ai-idea-generator',
    slug: 'idea-generator',
    name: 'AI Multi-Domain Idea Generator',
    category: 'lab',
    categoryLabel: 'AVRX AI Lab',
    shortDescription: 'Brainstorm breakthrough ideas for startups, YouTube videos, ad hooks, marketing stunts, and tech inventions.',
    fullDescription: 'Break through creative blocks. Generates cross-industry concepts combining unexpected domains with high viral potential.',
    badge: 'AI Lab',
    iconName: 'Sparkles',
    inputPlaceholder: 'Domain: FinTech + Gamification for Indian Gen-Z...',
    seoTitle: 'AI Idea Generator - Startups, Content & Marketing Brainstorm | AVRX',
    seoDescription: 'Generate innovative startup concepts, viral YouTube hooks, marketing stunts, and novel product features with AI.',
    features: ['Cross-industry concept mashups', 'Viral score & Feasibility rating', 'Unique angles and hook lines', 'Fast execution suggestions'],
    howItWorks: [
      { step: 1, title: 'Select Domain', desc: 'Choose Startup, Content, Marketing, or Product.' },
      { step: 2, title: 'Brainstorm Concepts', desc: 'Get 5 distinct, high-creativity concepts.' },
      { step: 3, title: 'Pick & Build', desc: 'Take action on the most compelling angle.' }
    ],
    faqs: [
      { question: 'Are the ideas practical to execute?', answer: 'Each idea includes an estimated feasibility score and recommended MVP tech stack.' }
    ]
  },
  {
    id: 'ai-decision-assistant',
    slug: 'decision-assistant',
    name: 'AI Strategic Decision Assistant',
    category: 'lab',
    categoryLabel: 'AVRX AI Lab',
    shortDescription: 'Input difficult business, tech, or career dilemmas to get a structured decision matrix with weighted pros, cons, and risks.',
    fullDescription: 'Make decisions with executive clarity. Evaluates reversibility (Type 1 vs Type 2 decisions), downstream second-order consequences, and optimal paths.',
    badge: 'AI Lab',
    iconName: 'GitBranch',
    inputPlaceholder: 'Dilemma: Should we migrate our monolithic backend to microservices now or focus on new feature launches?...',
    seoTitle: 'AI Decision Assistant - Strategic Decision Matrix & Risk Analysis | AVRX',
    seoDescription: 'Make complex business and career decisions with AI. Weigh pros, cons, second-order consequences, and risk-mitigation frameworks.',
    features: ['Type 1 (Irreversible) vs Type 2 (Reversible) analysis', 'Weighted Pros and Cons score', 'Second-order consequence prediction', 'Clear recommended decision framework'],
    howItWorks: [
      { step: 1, title: 'Describe Your Dilemma', desc: 'Enter the choices and context of your decision.' },
      { step: 2, title: 'Analyze Trade-offs', desc: 'AI maps downstream consequences and risks.' },
      { step: 3, title: 'Make Confident Choice', desc: 'Execute using the recommended decision framework.' }
    ],
    faqs: [
      { question: 'What is second-order thinking?', answer: 'Second-order thinking looks beyond immediate consequences to evaluate what happens next ("and then what?"), preventing short-term traps.' }
    ]
  },
  {
    id: 'ai-workflow-generator',
    slug: 'workflow-generator',
    name: 'AI Workflow & SOP Automation Generator',
    category: 'lab',
    categoryLabel: 'AVRX AI Lab',
    shortDescription: 'Describe any business task to generate standard operating procedures (SOP), Zapier/Make flowcharts, and automated pipelines.',
    fullDescription: 'Turn chaotic recurring tasks into streamlined, automated workflows with trigger-action logic and QA validation checkpoints.',
    badge: 'AI Lab',
    iconName: 'Workflow',
    inputPlaceholder: 'Task: Onboard a new business loan applicant from initial web lead to verification and bank sanction...',
    seoTitle: 'AI Workflow & SOP Generator - Business Process Automation | AVRX',
    seoDescription: 'Generate Standard Operating Procedures (SOPs), Zapier automation flows, and step-by-step business workflows with AI.',
    features: ['Step-by-step SOP documentation', 'Trigger -> Action automation recipes (Zapier/Make)', 'Role & Permission checklist', 'Quality assurance gates'],
    howItWorks: [
      { step: 1, title: 'Describe Business Process', desc: 'Input the task you want to standardize.' },
      { step: 2, title: 'Generate Workflow', desc: 'Get full SOP with automated trigger checkpoints.' },
      { step: 3, title: 'Distribute to Team', desc: 'Ensure consistent, error-free team execution.' }
    ],
    faqs: [
      { question: 'Can I use this for employee onboarding and client delivery?', answer: 'Yes, it creates standardized SOP manuals ready to share with operations teams.' }
    ]
  },
  {
    id: 'ai-personal-assistant',
    slug: 'personal-assistant',
    name: 'AVRX AI Conversational Assistant',
    category: 'lab',
    categoryLabel: 'AVRX AI Lab',
    shortDescription: 'Conversational intelligent co-pilot for multi-task productivity, rapid brainstorming, calculations, and AVRX ecosystem advice.',
    fullDescription: 'Your all-in-one digital companion. Ask questions about loans, tax rules, web design, SEO, coding, or everyday productivity tasks.',
    badge: 'AI Lab',
    iconName: 'Bot',
    inputPlaceholder: 'Ask me anything about AVRX services, finance, code, or business planning...',
    seoTitle: 'AVRX AI Personal Co-Pilot - Conversational Assistant | AVRX',
    seoDescription: 'Chat with AVRX AI: ask questions about loans, tax compliance, web development, SEO strategies, and general productivity.',
    features: ['24/7 Conversational AI intelligence', 'Integrated AVRX ecosystem knowledge', 'Multi-turn memory context', 'Actionable links and roadmaps'],
    howItWorks: [
      { step: 1, title: 'Type Any Question', desc: 'Ask about finance, digital tech, or general advice.' },
      { step: 2, title: 'Receive Expert Guidance', desc: 'Get accurate, concise, and structured answers.' },
      { step: 3, title: 'Take Immediate Action', desc: 'Connect with human advisors or execute directly.' }
    ],
    faqs: [
      { question: 'Is AVRX AI free to chat with?', answer: 'Yes, AVRX AI Assistant is free and available 24/7 for all website visitors.' }
    ]
  }
];

export const POPULAR_HIGHLIGHTED_TOOLS = [
  {
    id: 'ai-content-generator',
    name: 'AI Content Generator',
    desc: 'Create high-quality blogs, ads, and website copy instantly.',
    icon: 'PenTool',
    badge: 'Popular',
    category: 'content'
  },
  {
    id: 'text-to-image',
    name: 'Text to Image Studio',
    desc: 'Turn ideas into photorealistic art, 3D graphics, and visuals.',
    icon: 'Image',
    badge: 'Popular',
    category: 'creative'
  },
  {
    id: 'chat-with-pdf',
    name: 'Chat with PDF',
    desc: 'Ask questions and extract insights from your documents.',
    icon: 'MessageSquare',
    badge: 'AI Lab',
    category: 'documents'
  },
  {
    id: 'ai-data-analyzer',
    name: 'AI Data Analyzer',
    desc: 'Turn raw numbers into actionable growth charts and trends.',
    icon: 'BarChart2',
    badge: 'New',
    category: 'data'
  },
  {
    id: 'website-health-checker',
    name: 'Website Health Checker',
    desc: 'Audit website speed, SEO, mobile UX, and security in 10s.',
    icon: 'Gauge',
    badge: 'Popular',
    category: 'seo'
  },
  {
    id: 'loan-emi-calculator',
    name: 'Loan EMI Calculator',
    desc: 'Calculate monthly commitments and amortization schedules.',
    icon: 'Calculator',
    badge: 'Popular',
    category: 'finance'
  },
  {
    id: 'ai-prompt-engineer',
    name: 'AI Prompt Engineer',
    desc: 'Master prompt compiler for next-gen LLMs and AI models.',
    icon: 'FlaskConical',
    badge: 'AI Lab',
    category: 'lab'
  }
];
