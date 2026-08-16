export interface ToolDefinition {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  category: 'pdf' | 'finance' | 'ai' | 'website' | 'productivity';
  categoryLabel: string;
  iconName: string;
  badge?: string;
  isPopular?: boolean;
  seoTitle: string;
  seoDescription: string;
  features: string[];
  howItWorks: { step: number; title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
  privacyNote: string;
  relatedToolIds: string[];
}

export const TOOLS_CATEGORIES = [
  { id: 'all', label: 'All Tools', count: 24 },
  { id: 'pdf', label: 'Documents & PDF', count: 6 },
  { id: 'finance', label: 'Finance & Insurance', count: 5 },
  { id: 'ai', label: 'AI & Content', count: 5 },
  { id: 'website', label: 'Website & SEO', count: 4 },
  { id: 'productivity', label: 'Productivity & Utilities', count: 6 },
] as const;

export const TOOLS_LIST: ToolDefinition[] = [
  // 1. Documents & PDF
  {
    id: 'word-to-pdf',
    slug: 'word-to-pdf',
    name: 'Word to PDF Converter',
    shortDescription: 'Convert Microsoft Word (.docx, .doc) and text documents into high-quality PDF files instantly.',
    fullDescription: 'Convert your DOCX, DOC, and text documents to standard PDF documents directly in your browser. All formatting, headings, and paragraphs are preserved with zero server file storage for complete privacy.',
    category: 'pdf',
    categoryLabel: 'Documents & PDF',
    iconName: 'FileText',
    badge: 'Fast & Secure',
    isPopular: true,
    seoTitle: 'Free Word to PDF Converter Online - AVRX Tools',
    seoDescription: 'Convert DOCX and DOC documents to PDF in your browser with 100% privacy and zero data leakage. Free online Word to PDF tool by AVRX.',
    features: [
      'Pure browser-based conversion for maximum privacy',
      'Supports DOCX, DOC, TXT, and Markdown files',
      'Automatic page formatting and margin preservation',
      'Instant real-time PDF generation and direct download',
      'No file size limit for local processing'
    ],
    howItWorks: [
      { step: 1, title: 'Upload Word Document', desc: 'Drag and drop your .docx or .doc file into the drop zone.' },
      { step: 2, title: 'Process Content', desc: 'Our engine extracts document text, headings, and layout structure.' },
      { step: 3, title: 'Download PDF', desc: 'Click Download to save your newly formatted PDF file instantly.' }
    ],
    faqs: [
      { question: 'Is my Word document uploaded to any external server?', answer: 'No. The conversion is executed entirely client-side in your web browser memory. Your confidential files never leave your device.' },
      { question: 'What file formats are supported?', answer: 'We support .docx (modern Word), .doc (legacy Word), .txt plain text, and .md markdown files.' }
    ],
    privacyNote: '100% Client-Side Privacy: Your uploaded documents are processed entirely in browser memory and are automatically destroyed when you close the tab.',
    relatedToolIds: ['pdf-to-word', 'pdf-editor', 'pdf-to-jpg', 'jpg-to-pdf']
  },
  {
    id: 'pdf-to-word',
    slug: 'pdf-to-word',
    name: 'PDF to Word Converter',
    shortDescription: 'Extract text and layout from PDF files and convert them into editable Microsoft Word (.docx) documents.',
    fullDescription: 'Easily convert non-editable PDF documents into clean, fully editable Microsoft Word (.docx) files. Extracts text content across all pages with customizable paragraph and font styling.',
    category: 'pdf',
    categoryLabel: 'Documents & PDF',
    iconName: 'FileType',
    badge: 'Editable DOCX',
    isPopular: true,
    seoTitle: 'PDF to Word (DOCX) Converter Online - AVRX Tools',
    seoDescription: 'Convert PDF files to editable Microsoft Word (.docx) documents online for free. Real client-side text extraction and DOCX generation.',
    features: [
      'Extracts text layers from multi-page PDFs',
      'Generates native .docx files compatible with MS Word, Google Docs, and LibreOffice',
      'Page-by-page progress indicator with page count display',
      'Zero server upload — total document confidentiality',
      'Option to preview extracted text before exporting'
    ],
    howItWorks: [
      { step: 1, title: 'Select PDF File', desc: 'Upload the PDF document you wish to make editable.' },
      { step: 2, title: 'Extract Text Layer', desc: 'The tool parses text streams and reconstructs paragraphs.' },
      { step: 3, title: 'Export DOCX', desc: 'Download the generated Word document directly to your device.' }
    ],
    faqs: [
      { question: 'Can it convert scanned image PDFs?', answer: 'This tool extracts text layers from digitally generated PDFs. Scanned PDFs with pure raster images without OCR layers may require OCR pre-processing.' },
      { question: 'Will complex tables be preserved?', answer: 'Standard text, headings, and lists are converted smoothly. Very intricate multi-column vector layouts may convert as linear paragraphs.' }
    ],
    privacyNote: 'Documents are processed locally in your browser session. No data is stored or transmitted.',
    relatedToolIds: ['word-to-pdf', 'pdf-editor', 'pdf-to-jpg']
  },
  {
    id: 'pdf-editor',
    slug: 'pdf-editor',
    name: 'Interactive PDF Editor',
    shortDescription: 'Annotate, add text, draw signatures, insert images, reorder, rotate, delete pages, merge and split PDFs.',
    fullDescription: 'A complete browser-based PDF suite. View all pages, add custom text annotations, insert images or stamps, draw digital signatures, highlight text, draw shapes, redact sensitive data with whiteout, rotate or delete pages, merge multiple PDFs, and export the modified PDF.',
    category: 'pdf',
    categoryLabel: 'Documents & PDF',
    iconName: 'Edit3',
    badge: 'Pro Suite',
    isPopular: true,
    seoTitle: 'Free Online PDF Editor & Annotator - AVRX Tools',
    seoDescription: 'Edit, annotate, sign, rotate, merge, split, and redact PDF documents directly in your browser. Free PDF Editor by AVRX.',
    features: [
      'Visual page navigator with zoom, rotate (90°/180°/270°), and page deletion',
      'Add customizable text with font size and color controls',
      'Draw digital signatures and freehand sketches with pen tool',
      'Insert image stamps and company seals',
      'Whiteout & Redaction box tool to cover confidential numbers',
      'Add date stamps and automatic page numbers',
      'Merge multiple PDFs into a single file or split specific pages',
      'Download modified PDF with all vector annotations embedded'
    ],
    howItWorks: [
      { step: 1, title: 'Open PDF', desc: 'Upload your PDF document to load the interactive visual canvas.' },
      { step: 2, title: 'Edit & Annotate', desc: 'Select tools from the top toolbar to write text, sign, draw, or organize pages.' },
      { step: 3, title: 'Save & Download', desc: 'Click "Download Edited PDF" to render and save the final document.' }
    ],
    faqs: [
      { question: 'Is there a limit on how many pages I can edit?', answer: 'There is no hard page limit. The editor handles standard business PDFs (1-100+ pages) smoothly in modern browsers.' },
      { question: 'Are my signatures and stamps safe?', answer: 'Yes! Everything happens in your device memory. We do not store or transmit your signatures, stamps, or documents.' }
    ],
    privacyNote: 'End-to-end client-side operation. No cookies or server databases store your edited documents.',
    relatedToolIds: ['pdf-to-jpg', 'jpg-to-pdf', 'word-to-pdf', 'image-compressor']
  },
  {
    id: 'pdf-to-jpg',
    slug: 'pdf-to-jpg',
    name: 'PDF to JPG Converter',
    shortDescription: 'Convert PDF pages into high-resolution JPG images with custom quality and batch ZIP download.',
    fullDescription: 'Render individual pages of your PDF document into crisp JPG image files. Select specific pages or convert the entire document with configurable image quality and export all pages as a compressed ZIP file.',
    category: 'pdf',
    categoryLabel: 'Documents & PDF',
    iconName: 'Image',
    badge: 'High DPI',
    isPopular: false,
    seoTitle: 'PDF to JPG Converter Online - AVRX Tools',
    seoDescription: 'Extract and convert PDF pages into high quality JPG images online. Download individual pages or all as ZIP.',
    features: [
      'High-resolution HTML5 canvas rendering engine',
      'Individual page preview grid with select/deselect options',
      'Configurable image quality slider (50% to 100%)',
      'Download individual page JPGs or batch ZIP archive',
      'Maintains sharp text, charts, and vector clarity'
    ],
    howItWorks: [
      { step: 1, title: 'Upload PDF', desc: 'Select your PDF document to generate page previews.' },
      { step: 2, title: 'Choose Quality & Pages', desc: 'Adjust JPG quality and pick which pages to convert.' },
      { step: 3, title: 'Download Images', desc: 'Download single JPGs or get all pages bundled in a .zip file.' }
    ],
    faqs: [
      { question: 'What resolution are the rendered images?', answer: 'Images are rendered at standard 150-300 DPI viewport scaling, ensuring crisp text and graphics for sharing and printing.' }
    ],
    privacyNote: 'Images are created locally in your browser memory and never uploaded to any remote server.',
    relatedToolIds: ['jpg-to-pdf', 'pdf-editor', 'image-compressor']
  },
  {
    id: 'jpg-to-pdf',
    slug: 'jpg-to-pdf',
    name: 'JPG to PDF Converter',
    shortDescription: 'Merge multiple JPG, PNG, and WebP images into a single professional PDF document.',
    fullDescription: 'Combine multiple images into one organized PDF file. Drag and drop to reorder images, customize page size (A4, US Letter, Fit Image), choose page orientation (Portrait / Landscape), adjust margins, and download your consolidated PDF.',
    category: 'pdf',
    categoryLabel: 'Documents & PDF',
    iconName: 'Images',
    badge: 'Multi-Image',
    isPopular: true,
    seoTitle: 'JPG to PDF Converter Online - Combine Images to PDF - AVRX Tools',
    seoDescription: 'Convert JPG, PNG, and WebP images into a single PDF document online. Set page size, orientation, and margins easily.',
    features: [
      'Supports JPG, JPEG, PNG, and WebP formats',
      'Drag and drop reordering of image sequence',
      'Configurable page dimensions (A4, Letter, Auto-Fit)',
      'Portrait and Landscape orientation options',
      'Adjustable page margins and image compression settings'
    ],
    howItWorks: [
      { step: 1, title: 'Upload Images', desc: 'Upload one or multiple image files simultaneously.' },
      { step: 2, title: 'Arrange & Configure', desc: 'Drag images into your preferred sequence and set page options.' },
      { step: 3, title: 'Generate PDF', desc: 'Click "Convert to PDF" and download your consolidated document.' }
    ],
    faqs: [
      { question: 'Can I combine different image formats together?', answer: 'Yes! You can mix JPG, PNG, and WebP files in the same PDF document.' }
    ],
    privacyNote: 'Local browser generation guarantees complete privacy for personal photos and official documents.',
    relatedToolIds: ['pdf-to-jpg', 'image-compressor', 'pdf-editor']
  },
  {
    id: 'image-compressor',
    slug: 'image-compressor',
    name: 'Image Compressor',
    shortDescription: 'Compress JPG, PNG, and WebP images locally with customizable quality slider and zero quality loss.',
    fullDescription: 'Reduce image file size dramatically by up to 90% without visible quality degradation. Upload multiple images, adjust the compression level in real time, view before-and-after size comparisons, and download individually or as a ZIP.',
    category: 'pdf',
    categoryLabel: 'Documents & PDF',
    iconName: 'Minimize2',
    badge: 'Save 90% Size',
    isPopular: true,
    seoTitle: 'Free Image Compressor Online - JPG, PNG, WebP - AVRX Tools',
    seoDescription: 'Compress JPG, PNG, and WebP image sizes online in seconds without uploading to any server. Free image optimizer by AVRX.',
    features: [
      'Batch compression for multiple images at once',
      'Supports JPG, JPEG, PNG, and modern WebP formats',
      'Live compression quality slider (1% to 100%)',
      'Optional max width / height dimension scaling',
      'Real-time before vs after file size savings display',
      'Download individual compressed images or batch ZIP archive'
    ],
    howItWorks: [
      { step: 1, title: 'Upload Images', desc: 'Select or drag-and-drop your images into the drop area.' },
      { step: 2, title: 'Adjust Quality', desc: 'Move the quality slider to find your desired balance of size and clarity.' },
      { step: 3, title: 'Download', desc: 'Download the optimized images with massive bandwidth savings.' }
    ],
    faqs: [
      { question: 'Does image compression reduce dimensions?', answer: 'By default, it optimizes encoding without altering pixel dimensions. You can also specify max width/height if you want to resize.' }
    ],
    privacyNote: '100% Client-Side. Images are processed using HTML5 Canvas in your browser.',
    relatedToolIds: ['jpg-to-pdf', 'pdf-to-jpg', 'qr-generator']
  },

  // 2. Finance & Insurance
  {
    id: 'loan-calculator',
    slug: 'loan-calculator',
    name: 'Loan / EMI Calculator',
    shortDescription: 'Calculate monthly EMI, total interest, and complete month-by-month amortization schedule for any loan.',
    fullDescription: 'A comprehensive loan and EMI calculator with mathematical precision. Enter loan amount, annual interest rate, and tenure (months or years) to calculate exact monthly EMI, total interest payable, total repayment amount, and a visual interactive principal vs interest breakdown chart.',
    category: 'finance',
    categoryLabel: 'Finance & Insurance',
    iconName: 'Calculator',
    badge: 'With Amortization',
    isPopular: true,
    seoTitle: 'Loan EMI Calculator with Amortization Schedule - AVRX Tools',
    seoDescription: 'Calculate loan EMI, total interest payable, and view complete year-by-year and month-by-month repayment amortization schedule online.',
    features: [
      'Standard mathematical formula: EMI = P × r × (1+r)^n / ((1+r)^n - 1)',
      'Flexible tenure input in Months or Years',
      'Visual Principal vs Interest interactive proportion chart',
      'Complete year-by-year and month-by-month amortization schedule',
      'Export amortization schedule to CSV spreadsheet or printable format',
      'Instant calculation updates as you adjust sliders'
    ],
    howItWorks: [
      { step: 1, title: 'Enter Loan Details', desc: 'Input your desired principal amount, interest rate (% p.a.), and tenure.' },
      { step: 2, title: 'Review EMI & Breakdown', desc: 'Inspect monthly EMI, total interest, and the interactive pie chart.' },
      { step: 3, title: 'Inspect Amortization', desc: 'Scroll through the repayment table or export it as a CSV file.' }
    ],
    faqs: [
      { question: 'What is the formula used for EMI calculation?', answer: 'EMI = [P x R x (1+R)^N]/[(1+R)^N-1], where P is Principal, R is monthly interest rate (Annual rate / 12 / 100), and N is number of monthly installments.' },
      { question: 'Can I use this for Home, Car, and Personal Loans?', answer: 'Yes! It works accurately for all reducing balance loans including home loans, auto loans, personal loans, and business loans.' }
    ],
    privacyNote: 'All financial calculations run locally on your device without storing your loan figures.',
    relatedToolIds: ['insurance-premium-calculator', 'gst-calculator', 'cibil-report', 'income-tax-calculator']
  },
  {
    id: 'insurance-premium-calculator',
    slug: 'insurance-premium-calculator',
    name: 'Insurance Premium Calculator',
    shortDescription: 'Estimate motor insurance premiums (Car, Bike, Commercial) based on IDV, engine CC, NCB, and add-ons.',
    fullDescription: 'Calculate transparent motor insurance premium estimates. Select vehicle category, vehicle age, insured declared value (IDV), engine cubic capacity (CC), registration zone, policy type (Comprehensive / Third Party / Own Damage), No Claim Bonus (NCB), and add-on covers with 18% GST calculation.',
    category: 'finance',
    categoryLabel: 'Finance & Insurance',
    iconName: 'ShieldCheck',
    badge: 'Motor & Health',
    isPopular: true,
    seoTitle: 'Insurance Premium Calculator Online - Motor & Vehicle - AVRX Tools',
    seoDescription: 'Estimate vehicle insurance premiums for Car, Bike, and Commercial vehicles. Includes IDV calculation, NCB discount, add-ons, and GST breakdown.',
    features: [
      'Supports Private Cars, Two-Wheelers, and Commercial Vehicles',
      'Configurable IDV (Insured Declared Value) calculation based on vehicle age depreciation',
      'Engine CC brackets (<1000cc, 1000-1500cc, >1500cc)',
      'Registration Zone differentiation (Zone A Metro, Zone B, Zone C)',
      'No Claim Bonus (NCB) discounts from 0% up to 50%',
      'Add-on coverage options: Zero Depreciation, Engine Protect, Roadside Assistance, Consumables, Return to Invoice',
      'Transparent itemized premium breakdown: Own Damage + Third Party + Add-ons + 18% GST'
    ],
    howItWorks: [
      { step: 1, title: 'Select Vehicle & Specs', desc: 'Choose vehicle type, manufacturing year, and engine capacity.' },
      { step: 2, title: 'Set IDV & NCB', desc: 'Enter vehicle ex-showroom price or IDV and your previous NCB discount.' },
      { step: 3, title: 'View Itemized Quote', desc: 'Review the detailed premium breakup and connect with AVRX for cashless policy binding.' }
    ],
    faqs: [
      { question: 'Is this an official insurance quotation?', answer: 'This calculator provides an estimated premium for informational purposes only. Actual premium may vary by insurer, vehicle, coverage, location, IDV, add-ons and applicable taxes.' }
    ],
    privacyNote: 'Informational utility. Vehicle details are not shared with third-party telemarketers.',
    relatedToolIds: ['loan-calculator', 'gst-calculator', 'cibil-report']
  },
  {
    id: 'gst-calculator',
    slug: 'gst-calculator',
    name: 'GST Calculator',
    shortDescription: 'Calculate GST inclusive (Add GST) and GST exclusive (Remove GST) amounts with CGST, SGST, and IGST breakdown.',
    fullDescription: 'A versatile Goods and Services Tax (GST) calculator. Quickly compute Add GST (GST Inclusive) or Remove GST (GST Exclusive) amounts with standard tax slabs (0%, 5%, 12%, 18%, 28%) and custom tax rates, with automatic CGST, SGST, and IGST split.',
    category: 'finance',
    categoryLabel: 'Finance & Insurance',
    iconName: 'Percent',
    badge: 'Add / Remove GST',
    isPopular: true,
    seoTitle: 'Online GST Calculator (Add/Remove GST) - AVRX Tools',
    seoDescription: 'Calculate GST inclusive and exclusive amounts with CGST, SGST, and IGST breakdown. 0%, 5%, 12%, 18%, 28% slab presets.',
    features: [
      'Dual modes: "Add GST" (Net to Gross) and "Remove GST" (Gross to Net)',
      'Standard Indian GST rate presets: 0%, 5%, 12%, 18%, 28%',
      'Custom GST percentage input support',
      'Automatic CGST (50%) + SGST (50%) intra-state split and IGST (100%) inter-state calculation',
      'Detailed mathematical explanation and formula display',
      'One-click copy for invoice preparation'
    ],
    howItWorks: [
      { step: 1, title: 'Select Mode', desc: 'Choose whether you want to Add GST or Remove GST.' },
      { step: 2, title: 'Enter Amount & Rate', desc: 'Enter the monetary value and select your GST rate percentage.' },
      { step: 3, title: 'View Breakdown', desc: 'Check Base Amount, GST Tax Amount, CGST/SGST split, and Final Total.' }
    ],
    faqs: [
      { question: 'How is "Add GST" calculated?', answer: 'GST Amount = (Original Cost × GST %) / 100. Net Price = Original Cost + GST Amount.' },
      { question: 'How is "Remove GST" calculated?', answer: 'GST Amount = Original Cost - [Original Cost × {100 / (100 + GST %)}]. Base Price = Original Cost - GST Amount.' }
    ],
    privacyNote: '100% browser-based financial utility. No commercial data is logged.',
    relatedToolIds: ['income-tax-calculator', 'loan-calculator', 'cibil-report']
  },
  {
    id: 'cibil-report',
    slug: 'cibil-report',
    name: 'CIBIL Report & Credit Score Guide',
    shortDescription: 'PAN validation, official credit bureau information, credit score ranges, and expert credit improvement roadmap.',
    fullDescription: 'A transparent, professional credit score resource and education hub. Includes valid PAN card format checking, credit score tier breakdowns (300 to 900), the 5 key factors that determine your score, common credit myths, and an actionable credit score enhancement roadmap.',
    category: 'finance',
    categoryLabel: 'Finance & Insurance',
    iconName: 'Award',
    badge: 'Educational & Safe',
    isPopular: false,
    seoTitle: 'CIBIL Score Checker & Credit Improvement Guide - AVRX Tools',
    seoDescription: 'Understand your CIBIL score, validate PAN credentials format, explore factors affecting credit scores, and learn how to improve credit health.',
    features: [
      'Client-side PAN Card format validation (Regex algorithm)',
      'Zero fake score fabrication — 100% transparent and honest',
      'Detailed score range breakdown (300-549 Poor, 550-649 Fair, 650-749 Good, 750-900 Excellent)',
      'The 5 Pillars of Credit Health: Payment History (35%), Utilization (30%), Age (15%), Credit Mix (10%), New Inquiries (10%)',
      'Actionable step-by-step roadmap to boost credit score above 750+',
      'Direct links to official RBI-authorized credit bureau resources'
    ],
    howItWorks: [
      { step: 1, title: 'Validate PAN Format', desc: 'Check your PAN structure to ensure accurate identification.' },
      { step: 2, title: 'Explore Score Factors', desc: 'Understand how credit utilization and on-time repayments impact your rating.' },
      { step: 3, title: 'Implement Roadmap', desc: 'Follow AVRX expert guidelines to improve eligibility for low-interest loans.' }
    ],
    faqs: [
      { question: 'Why does AVRX not display a random instant score?', answer: 'Official credit report retrieval requires direct integration with an authorized credit bureau service (TransUnion CIBIL, Experian, Equifax, CRIF High Mark). AVRX does not generate or fabricate fake credit scores.' }
    ],
    privacyNote: 'Your PAN is checked purely for structural validity in your browser and is never stored or transmitted.',
    relatedToolIds: ['loan-calculator', 'income-tax-calculator', 'insurance-premium-calculator']
  },
  {
    id: 'income-tax-calculator',
    slug: 'income-tax-calculator',
    name: 'Income Tax Calculator',
    shortDescription: 'Compare Old vs New Tax Regime side-by-side with Standard Deduction, 80C, 80D, 87A rebate, and cess.',
    fullDescription: 'Calculate your income tax liability in India for Assessment Years 2025-26 & 2026-27. Compare the New Tax Regime vs Old Tax Regime side-by-side with Standard Deduction (₹75k for New / ₹50k for Old), Section 80C (up to ₹1.5L), Section 80D health insurance, NPS 80CCD(1B), Home loan interest 24b, Section 87A tax rebate, and 4% Health & Education Cess.',
    category: 'finance',
    categoryLabel: 'Finance & Insurance',
    iconName: 'Receipt',
    badge: 'Old vs New Regime',
    isPopular: true,
    seoTitle: 'Income Tax Calculator FY 2025-26 (Old vs New Regime) - AVRX Tools',
    seoDescription: 'Compare New vs Old Tax Regime side-by-side. Calculate taxable income, 87A rebate, 80C deductions, standard deduction, and net tax liability.',
    features: [
      'Updated tax slabs for New Tax Regime (Budget 2024-2025 updates)',
      'Side-by-side comparison of Old Tax Regime vs New Tax Regime',
      'Configurable Standard Deduction (₹75,000 New Regime / ₹50,000 Old Regime)',
      'Detailed deduction inputs: Section 80C, Section 80D, NPS 80CCD(1B), HRA, Section 24b Home Loan Interest',
      'Automatic calculation of Section 87A Tax Rebate (Zero tax up to ₹7.75 Lakhs in New Regime)',
      '4% Health and Education Cess calculation and net tax payable recommendation'
    ],
    howItWorks: [
      { step: 1, title: 'Enter Gross Income', desc: 'Input your annual salary or business income.' },
      { step: 2, title: 'Add Deductions', desc: 'Enter eligible investments (80C, 80D, NPS, Home Loan Interest).' },
      { step: 3, title: 'Compare Regimes', desc: 'See which regime saves you more money and download the summary.' }
    ],
    faqs: [
      { question: 'Is this calculator updated for latest Budget slabs?', answer: 'Yes! It incorporates the updated New Tax Regime slabs (0-3L Nil, 3-7L 5%, 7-10L 10%, 10-12L 15%, 12-15L 20%, >15L 30%) and standard deduction of ₹75,000.' },
      { question: 'Does this constitute official tax advice?', answer: 'This is an estimation tool for informational planning. Consult AVRX Tax Professionals or a Chartered Accountant for official tax filing and audit compliance.' }
    ],
    privacyNote: 'Your financial information is processed solely in your browser memory.',
    relatedToolIds: ['gst-calculator', 'loan-calculator', 'cibil-report']
  },

  // 3. AI & Content
  {
    id: 'text-to-image',
    slug: 'text-to-image',
    name: 'Text to Image Generator',
    shortDescription: 'Generate high-resolution visual artwork, illustrations, and concept photos from descriptive text prompts.',
    fullDescription: 'Transform natural language prompts into stunning visual imagery. Choose aspect ratios (1:1 Square, 16:9 Landscape, 9:16 Story, 4:3 Standard), select artistic styles (Photorealistic, Cyberpunk, 3D Render, Cinematic, Digital Art, Anime), and generate downloadable high-definition visual assets.',
    category: 'ai',
    categoryLabel: 'AI & Content',
    iconName: 'Sparkles',
    badge: 'AI Vision',
    isPopular: true,
    seoTitle: 'Free AI Text to Image Generator Online - AVRX Tools',
    seoDescription: 'Generate futuristic imagery, digital art, and concept photos from text prompts. Connects securely with server-side AI models.',
    features: [
      'Custom text prompt input with prompt enhancement suggestions',
      'Multiple aspect ratios: 1:1 (Square), 16:9 (Widescreen), 9:16 (Mobile/Reels), 4:3 (Classic)',
      'Multiple visual styles: Cinematic, Photorealistic, 3D Isometric, Cyberpunk Neon, Minimalist Vector, Anime',
      'Instant high-resolution PNG download and prompt clipboard copy',
      'Zero client-side API key exposure for 100% security'
    ],
    howItWorks: [
      { step: 1, title: 'Write Prompt', desc: 'Describe the scene, subject, lighting, and mood in detail.' },
      { step: 2, title: 'Select Style & Ratio', desc: 'Choose aspect ratio and visual aesthetic preset.' },
      { step: 3, title: 'Generate & Save', desc: 'Click "Generate Artwork" to create and download your image.' }
    ],
    faqs: [
      { question: 'Where does the image generation happen?', answer: 'Requests are proxied securely through our backend server to prevent API key exposure. When server AI keys are active, generative models synthesize images; otherwise, high-res canvas rendering is provided.' }
    ],
    privacyNote: 'We do not sell or index your creative prompts.',
    relatedToolIds: ['ai-content-generator', 'text-summarizer', 'image-compressor']
  },
  {
    id: 'ai-content-generator',
    slug: 'ai-content-generator',
    name: 'AI Content Generator',
    shortDescription: 'Generate high-converting blog posts, social media captions, ad copy, emails, and website content with AI.',
    fullDescription: 'Create engaging, professional copy in seconds. Select from 11+ content formats including Blog Articles, LinkedIn Posts, Instagram Captions, Facebook Ads, Product Descriptions, Cold Outreach Emails, YouTube Descriptions, and SEO Meta descriptions with customizable tone, audience, language, and keyword density.',
    category: 'ai',
    categoryLabel: 'AI & Content',
    iconName: 'Bot',
    badge: '11+ Content Types',
    isPopular: true,
    seoTitle: 'AI Content & Copywriting Generator Online - AVRX Tools',
    seoDescription: 'Generate blog posts, social media captions, ad copy, emails, and SEO descriptions instantly with AI. Free online copywriter by AVRX.',
    features: [
      '11 Content Types: Blog, LinkedIn Post, Instagram Caption, Facebook Post, Ad Copy, Product Description, Website Copy, Email, YouTube Description, SEO Meta',
      'Customizable Tones: Professional, Persuasive, Casual, Witty, Academic, Urgent',
      'Target Audience & Keyword integration fields',
      'Multi-language output support (English, Hindi, and regional languages)',
      'One-click Copy to Clipboard and Download as TXT file',
      'Word and character counter with live generation metrics'
    ],
    howItWorks: [
      { step: 1, title: 'Select Format & Topic', desc: 'Choose what type of content you need and enter your topic or outline.' },
      { step: 2, title: 'Set Tone & Keywords', desc: 'Specify your target audience, tone of voice, and keywords to include.' },
      { step: 3, title: 'Generate Copy', desc: 'Click "Generate Content" to receive structured, ready-to-publish copy.' }
    ],
    faqs: [
      { question: 'Is the generated content unique?', answer: 'Yes! The AI engine crafts original, contextual copy based on your specific prompts and keywords.' }
    ],
    privacyNote: 'Prompts are processed ephemerally on the server and never retained or trained on.',
    relatedToolIds: ['text-summarizer', 'paraphrasing-tool', 'text-translator', 'seo-meta-checker']
  },
  {
    id: 'text-summarizer',
    slug: 'text-summarizer',
    name: 'AI Text Summarizer',
    shortDescription: 'Condense long articles, reports, and meeting notes into concise executive summaries or bullet points.',
    fullDescription: 'Extract the most crucial insights from any lengthy text. Paste articles, research papers, legal documents, or business memos and choose between Executive Summary, Key Bullet Points, or 1-Sentence TL;DR modes with adjustable length settings.',
    category: 'ai',
    categoryLabel: 'AI & Content',
    iconName: 'FileCheck',
    badge: 'Instant TL;DR',
    isPopular: false,
    seoTitle: 'Free AI Text Summarizer Online - Bullet Points & TL;DR - AVRX Tools',
    seoDescription: 'Summarize articles, essays, and documents into clear bullet points or executive summaries online with AI.',
    features: [
      'Multiple summary modes: Executive Summary, Bullet Points, 1-Sentence TL;DR',
      'Length controls: Concise (<150 words), Balanced (150-300 words), Detailed (300+ words)',
      'Character & word reduction percentage metrics',
      'Handles articles up to 10,000+ characters',
      'Instant copy and download as text file'
    ],
    howItWorks: [
      { step: 1, title: 'Paste Text', desc: 'Paste your long article, report, or notes into the text box.' },
      { step: 2, title: 'Choose Mode', desc: 'Select summary style (Bullet points or Executive Summary) and length.' },
      { step: 3, title: 'Get Summary', desc: 'Receive instant distilled takeaways and copy with one click.' }
    ],
    faqs: [
      { question: 'Does it retain important numbers and data?', answer: 'Yes! The summarization model prioritizes factual accuracy, data points, and primary conclusions.' }
    ],
    privacyNote: 'Uploaded text is processed in memory and never stored on persistent storage.',
    relatedToolIds: ['paraphrasing-tool', 'ai-content-generator', 'text-counter']
  },
  {
    id: 'paraphrasing-tool',
    slug: 'paraphrasing-tool',
    name: 'AI Paraphrasing & Rewriter Tool',
    shortDescription: 'Rewrite and rephrase sentences, paragraphs, and essays with superior clarity and zero plagiarism.',
    fullDescription: 'Enhance your writing with smart rephrasing. Transform rough drafts into polished, articulate text. Choose from multiple rewrite modes including Standard, Fluent, Formal, Creative, Shorten, and Expand with side-by-side diff comparison.',
    category: 'ai',
    categoryLabel: 'AI & Content',
    iconName: 'RefreshCw',
    badge: 'Smart Rewrite',
    isPopular: false,
    seoTitle: 'Free AI Paraphrasing Tool Online - Rewrite Sentences - AVRX Tools',
    seoDescription: 'Rephrase and rewrite sentences and paragraphs online for free. Choose from Fluent, Formal, Creative, and Shorten modes.',
    features: [
      '6 Paraphrasing Modes: Standard, Fluent, Formal, Creative, Shorten, Expand',
      'Eliminates grammatical errors and enhances vocabulary',
      'Maintains 100% of the original core meaning',
      'Side-by-side input vs output comparison with word count metrics',
      'One-click copy and text export'
    ],
    howItWorks: [
      { step: 1, title: 'Enter Text', desc: 'Type or paste the sentence or paragraph you want to rewrite.' },
      { step: 2, title: 'Pick Mode', desc: 'Select your preferred rewriting tone (Formal, Creative, Fluent, etc.).' },
      { step: 3, title: 'Paraphrase', desc: 'Click "Rephrase Text" to view the rewritten output.' }
    ],
    faqs: [
      { question: 'Does paraphrasing change the meaning?', answer: 'No. The AI engine understands semantic intent and restructures syntax while preserving original meaning.' }
    ],
    privacyNote: 'Zero retention. Your written drafts are not logged or stored.',
    relatedToolIds: ['ai-content-generator', 'text-summarizer', 'text-counter']
  },
  {
    id: 'text-translator',
    slug: 'text-translator',
    name: 'AI Multilingual Text Translator',
    shortDescription: 'Translate text accurately between English, Hindi, Bengali, Marathi, Tamil, Telugu, and 20+ world languages.',
    fullDescription: 'Break language barriers with contextual neural translation. Accurately translate between English, major Indian languages (Hindi, Bengali, Marathi, Telugu, Tamil, Gujarati, Kannada, Punjabi, Malayalam, Odia) and international languages with built-in voice pronunciation.',
    category: 'ai',
    categoryLabel: 'AI & Content',
    iconName: 'Languages',
    badge: 'Indian & Global',
    isPopular: true,
    seoTitle: 'Free Multilingual Text Translator Online (Hindi, English, Regional) - AVRX Tools',
    seoDescription: 'Translate text between English, Hindi, Bengali, Marathi, Tamil, Telugu, and 20+ languages with voice pronunciation.',
    features: [
      'Supports major Indian languages: Hindi, Bengali, Marathi, Telugu, Tamil, Gujarati, Punjabi, Kannada, Malayalam',
      'Supports world languages: Spanish, French, German, Japanese, Arabic, Russian, Portuguese, Chinese',
      'Auto-language detection and quick language swap button',
      'Built-in Web Speech API voice pronunciation synthesizer',
      'Context-aware idiomatic accuracy rather than literal word-by-word translation',
      'Copy translation and character counter'
    ],
    howItWorks: [
      { step: 1, title: 'Choose Languages', desc: 'Select source language (or Auto-Detect) and your target language.' },
      { step: 2, title: 'Type or Paste', desc: 'Enter the text you want translated.' },
      { step: 3, title: 'Translate & Listen', desc: 'Click Translate, review the translation, and click the speaker icon to listen to pronunciation.' }
    ],
    faqs: [
      { question: 'Does it support Indian regional scripts?', answer: 'Yes! It provides native Devanagari, Bengali, Tamil, Telugu, and other regional scripts accurately.' }
    ],
    privacyNote: 'Translations are processed securely and transiently without logging.',
    relatedToolIds: ['ai-content-generator', 'paraphrasing-tool', 'text-counter']
  },

  // 4. Website & SEO
  {
    id: 'website-health-check',
    slug: 'website-health-check',
    name: 'Website Health & Speed Check',
    shortDescription: 'Audit URL performance, TTFB latency, SEO tags, mobile UX, SSL security, and discover technical bottlenecks.',
    fullDescription: 'Comprehensive real-time website audit. Inspect any live web URL to measure server response latency (TTFB), verify HTTP/HTTPS security headers, test robots.txt and sitemap.xml presence, audit title & meta description tags, inspect heading structures, check mobile viewports, and receive actionable optimization fixes.',
    category: 'website',
    categoryLabel: 'Website & SEO',
    iconName: 'Activity',
    badge: 'Live Server Audit',
    isPopular: true,
    seoTitle: 'Free Website Health & Speed Checker Online - AVRX Tools',
    seoDescription: 'Audit website speed, performance, SEO health, SSL security, and mobile readiness. Get instant actionable recommendations.',
    features: [
      'Real server fetch measuring genuine response latency (TTFB in milliseconds)',
      'Scoring across 5 core categories: Performance, SEO, Mobile UX, Security, Accessibility',
      'Verifies HTTPS encryption and HSTS security headers',
      'Tests /robots.txt and /sitemap.xml detection at root domain',
      'Inspects title tag length, meta description, and heading hierarchy (H1/H2)',
      'Categorized report with Critical Issues, Warnings, and Actionable Fixes'
    ],
    howItWorks: [
      { step: 1, title: 'Enter Website URL', desc: 'Type your website address (e.g. https://yourcompany.com).' },
      { step: 2, title: 'Run Health Audit', desc: 'Our crawler inspects server response headers and HTML structure.' },
      { step: 3, title: 'Review Audit Report', desc: 'Inspect score breakdowns and implement recommended speed fixes.' }
    ],
    faqs: [
      { question: 'Why is website speed crucial for my business?', answer: 'Google ranks fast websites higher in search results, and 53% of mobile visitors abandon sites that take longer than 3 seconds to load.' }
    ],
    privacyNote: 'Public website audit. We do not store proprietary source code or credentials.',
    relatedToolIds: ['seo-meta-checker', 'website-tech-checker', 'url-status-checker']
  },
  {
    id: 'seo-meta-checker',
    slug: 'seo-meta-checker',
    name: 'SEO & Meta Tag Checker',
    shortDescription: 'Analyze on-page SEO meta tags, title length, Open Graph social cards, Twitter cards, and image alt tags.',
    fullDescription: 'Deep on-page search engine optimization tool. Analyze meta titles, descriptions, canonical links, Open Graph social share cards (with interactive Google Search snippet, Facebook feed, and X/Twitter card previews), heading hierarchy, and image alt tags with severity badges.',
    category: 'website',
    categoryLabel: 'Website & SEO',
    iconName: 'Search',
    badge: 'Social Card Preview',
    isPopular: true,
    seoTitle: 'SEO & Meta Tag Analyzer Tool Online - Social Card Preview - AVRX Tools',
    seoDescription: 'Check SEO meta tags, title length, meta description, Open Graph cards, and Twitter cards online with live preview simulators.',
    features: [
      'Audit Title Tag length (ideal 50-60 characters)',
      'Audit Meta Description length (ideal 150-160 characters)',
      'Canonical URL validation and robots indexing directives',
      'Live Google Search snippet simulator (Desktop & Mobile view)',
      'Live Facebook & LinkedIn Open Graph card preview',
      'Live X (Twitter) summary card preview',
      'Header tag structure (H1, H2, H3 count) and image alt tag ratio analysis'
    ],
    howItWorks: [
      { step: 1, title: 'Input URL or Meta Content', desc: 'Enter your live website URL or paste raw meta tags.' },
      { step: 2, title: 'Analyze Metadata', desc: 'The tool checks character limits and search engine best practices.' },
      { step: 3, title: 'Inspect Previews', desc: 'See how your link appears when shared on Google, Facebook, and Twitter.' }
    ],
    faqs: [
      { question: 'What happens if meta description is too long?', answer: 'Search engines truncate meta descriptions beyond ~160 characters with an ellipsis (...), hiding crucial call-to-actions from searchers.' }
    ],
    privacyNote: 'Public metadata inspection with zero data storage.',
    relatedToolIds: ['website-health-check', 'website-tech-checker', 'ai-content-generator']
  },
  {
    id: 'website-tech-checker',
    slug: 'website-tech-checker',
    name: 'Website Technology Checker',
    shortDescription: 'Detect CMS, web server, CDN, JavaScript frameworks, CSS libraries, and analytics tools used on any website.',
    fullDescription: 'Uncover the technology stack behind any website. Detect Content Management Systems (WordPress, Shopify, Webflow), Web Servers (Nginx, Apache, LiteSpeed, Cloudflare), Frontend Frameworks (React, Next.js, Vue), CSS libraries, and Analytics trackers.',
    category: 'website',
    categoryLabel: 'Website & SEO',
    iconName: 'Cpu',
    badge: 'Stack Detector',
    isPopular: false,
    seoTitle: 'Website Technology Stack Checker Online - What Tech Does It Use - AVRX Tools',
    seoDescription: 'Detect what CMS, server, CDN, framework, and analytics tools any website is built with online for free.',
    features: [
      'Inspects HTTP response headers (Server, X-Powered-By, CDN flags)',
      'Detects CMS platforms: WordPress, Shopify, Magento, Webflow, Wix',
      'Identifies CDN & Security: Cloudflare, AWS CloudFront, Fastly, Akamai',
      'Detects Frameworks & Libraries: React, Next.js, Tailwind CSS, Bootstrap, jQuery',
      'Identifies Tracking & Analytics: Google Analytics 4, Tag Manager, Meta Pixel'
    ],
    howItWorks: [
      { step: 1, title: 'Enter Target Domain', desc: 'Type any domain (e.g. example.com).' },
      { step: 2, title: 'Inspect Stack', desc: 'Our engine analyzes server signatures and client runtime indicators.' },
      { step: 3, title: 'View Tech Breakdown', desc: 'Browse the categorized list of detected tools, server info, and CMS.' }
    ],
    faqs: [
      { question: 'How are technologies detected?', answer: 'By examining public HTTP response headers, meta generator tags, script signatures, and DOM footprints.' }
    ],
    privacyNote: 'Reads only publicly accessible headers and tags.',
    relatedToolIds: ['website-health-check', 'url-status-checker', 'seo-meta-checker']
  },
  {
    id: 'url-status-checker',
    slug: 'url-status-checker',
    name: 'Website Status & URL Reachability Checker',
    shortDescription: 'Verify whether a website or API endpoint is online, check HTTP status codes (200, 301, 404, 500), and latency.',
    fullDescription: 'Check website uptime and reachability in real time. Verify whether a URL is currently online or down, inspect exact HTTP status codes (200 OK, 301/302 Redirect, 403 Forbidden, 404 Not Found, 500 Internal Server Error), and measure server round-trip latency.',
    category: 'website',
    categoryLabel: 'Website & SEO',
    iconName: 'Globe',
    badge: 'Uptime & Status',
    isPopular: false,
    seoTitle: 'Website Status & HTTP Code Checker Online - Is It Down? - AVRX Tools',
    seoDescription: 'Check if a website is online or down. Inspect real HTTP status codes, response time, and SSL security status.',
    features: [
      'Real HTTP GET/HEAD verification with timeout protection',
      'Inspects exact HTTP Status Code and status message',
      'Measures roundtrip server response time in milliseconds',
      'Verifies SSL/TLS encryption protocol',
      'Batch URL check capability for up to 5 URLs at once'
    ],
    howItWorks: [
      { step: 1, title: 'Input URL(s)', desc: 'Enter the website address or API endpoint.' },
      { step: 2, title: 'Test Reachability', desc: 'Our server sends a diagnostic ping to test connectivity.' },
      { step: 3, title: 'Inspect Status', desc: 'View status code (200 OK, 404, etc.) and response latency.' }
    ],
    faqs: [
      { question: 'What does a 301 status code mean?', answer: 'A 301 indicates a permanent redirect to a new URL, commonly used when redirecting HTTP to HTTPS or forwarding domains.' }
    ],
    privacyNote: 'Diagnostic tool with zero credential logging.',
    relatedToolIds: ['website-health-check', 'website-tech-checker']
  },

  // 5. Productivity & Utilities
  {
    id: 'qr-generator',
    slug: 'qr-generator',
    name: 'QR Code Generator',
    shortDescription: 'Create custom, high-resolution QR codes for URLs, Plain Text, Phone, Email, SMS, and Wi-Fi networks.',
    fullDescription: 'Generate customized high-resolution QR codes instantly. Create QR codes for Website URLs, Plain Text, Phone Numbers, Pre-filled Emails, SMS messages, Wi-Fi network credentials (SSID & Password), and vCard contacts. Customize colors, size, error correction level, and download in PNG or vector SVG format.',
    category: 'productivity',
    categoryLabel: 'Productivity & Utilities',
    iconName: 'QrCode',
    badge: 'PNG & Vector SVG',
    isPopular: true,
    seoTitle: 'Free QR Code Generator Online (URL, Wi-Fi, vCard) - AVRX Tools',
    seoDescription: 'Create custom high-resolution QR codes for websites, Wi-Fi passwords, phone numbers, and vCards. Download PNG or SVG.',
    features: [
      'Multiple QR Data types: URL, Text, Phone Call, Email, SMS, Wi-Fi (WPA/WEP), vCard',
      'Customizable QR Size slider (128px to 1024px)',
      'Custom foreground and background color pickers',
      '4 Error Correction Levels: L (7%), M (15%), Q (25%), H (30%)',
      'Download as high-res PNG image or scalable vector SVG',
      'One-click Copy QR Image to clipboard'
    ],
    howItWorks: [
      { step: 1, title: 'Select Data Type', desc: 'Choose what content your QR code should contain (e.g. Website URL or Wi-Fi).' },
      { step: 2, title: 'Customize Style', desc: 'Pick your brand colors, size, and error correction level.' },
      { step: 3, title: 'Download & Print', desc: 'Download as PNG for digital display or vector SVG for crisp print brochures.' }
    ],
    faqs: [
      { question: 'Do these QR codes ever expire?', answer: 'No! These are standard static QR codes that encode your data directly into the pixel matrix. They never expire and have no scan limits.' }
    ],
    privacyNote: '100% Client-Side generation. Your Wi-Fi passwords and sensitive contact details never leave your browser.',
    relatedToolIds: ['password-generator', 'image-compressor', 'json-formatter']
  },
  {
    id: 'password-generator',
    slug: 'password-generator',
    name: 'Password Generator & Strength Meter',
    shortDescription: 'Generate cryptographically secure random passwords and passphrases with entropy and crack-time metrics.',
    fullDescription: 'Create unhackable passwords using browser cryptographic randomness (crypto.getRandomValues). Customize length (6 to 64 chars), character sets (uppercase, lowercase, numbers, symbols), exclude ambiguous characters, generate memorable passphrases, and view real-time entropy and brute-force crack time estimates.',
    category: 'productivity',
    categoryLabel: 'Productivity & Utilities',
    iconName: 'Key',
    badge: 'Crypto Secure',
    isPopular: true,
    seoTitle: 'Strong Password Generator & Security Meter - AVRX Tools',
    seoDescription: 'Generate cryptographically secure passwords and passphrases online. Measure entropy, crack time, and copy with one click.',
    features: [
      'Uses Web Cryptography API (window.crypto.getRandomValues) for true randomness',
      'Length slider from 6 to 64 characters',
      'Toggleable sets: Uppercase (A-Z), Lowercase (a-z), Numbers (0-9), Symbols (!@#$%^&*)',
      'Option to exclude ambiguous characters (e.g. 0, O, 1, l, I)',
      'Memorable passphrase generator mode (readable word combinations)',
      'Password Strength & Entropy meter with estimated crack time calculation',
      'Bulk generator mode (generate up to 10 passwords at once)',
      'Zero server transmission — 100% private and confidential'
    ],
    howItWorks: [
      { step: 1, title: 'Set Length & Rules', desc: 'Choose how many characters and which character sets to include.' },
      { step: 2, title: 'Check Strength', desc: 'Verify the security level (e.g. 128-bit entropy = centuries to crack).' },
      { step: 3, title: 'Copy Password', desc: 'Click the copy button to safely paste into your password manager.' }
    ],
    faqs: [
      { question: 'Are generated passwords saved anywhere?', answer: 'Never! Passwords are generated exclusively inside your browser memory and discarded immediately upon closing or refreshing.' }
    ],
    privacyNote: 'Strict zero-storage policy. Generated passwords never touch any network socket.',
    relatedToolIds: ['qr-generator', 'json-formatter', 'text-counter']
  },
  {
    id: 'age-calculator',
    slug: 'age-calculator',
    name: 'Age Calculator & Milestone Tracker',
    shortDescription: 'Calculate exact age in years, months, days, hours, and minutes with next birthday countdown and zodiac sign.',
    fullDescription: 'Calculate your exact age down to the day and minute. Input your Date of Birth and calculate age on any specified target date. See exact age in Years, Months, and Days, total days lived, total hours, minutes, seconds, next birthday countdown with day-of-week, Western and Vedic Zodiac signs, and milestone tracker.',
    category: 'productivity',
    categoryLabel: 'Productivity & Utilities',
    iconName: 'Calendar',
    badge: 'With Zodiac & Countdown',
    isPopular: false,
    seoTitle: 'Exact Age Calculator (Years, Months, Days, Hours) - AVRX Tools',
    seoDescription: 'Calculate your exact age in years, months, days, hours, and seconds. View next birthday countdown and zodiac sign.',
    features: [
      'Exact age breakdown: Years, Months, and Days',
      'Alternative metrics: Total Days, Total Weeks, Total Hours, Total Minutes, Total Seconds lived',
      'Next Birthday countdown with remaining days, months, and exact day of the week',
      'Western Zodiac Sun Sign (Aries, Taurus, etc.) with astrological element (Fire, Earth, Air, Water)',
      'Half-birthday and upcoming milestone age calendar',
      'Custom target date calculation (e.g. "What was my age on 15 Aug 2020?")'
    ],
    howItWorks: [
      { step: 1, title: 'Enter Date of Birth', desc: 'Select your birth date from the date picker.' },
      { step: 2, title: 'Set Target Date', desc: 'Default is today, or select any historical/future date.' },
      { step: 3, title: 'View Age Statistics', desc: 'Explore exact age, next birthday countdown, and astrological traits.' }
    ],
    faqs: [
      { question: 'Does the calculator account for leap years?', answer: 'Yes! The mathematical engine accurately handles leap years (366 days) and varying month lengths (28, 29, 30, 31 days).' }
    ],
    privacyNote: 'Calculated 100% locally in your browser session.',
    relatedToolIds: ['unit-converter', 'text-counter', 'loan-calculator']
  },
  {
    id: 'text-counter',
    slug: 'text-counter',
    name: 'Text & Word Counter with Case Converter',
    shortDescription: 'Live statistics: character count, words, sentences, paragraphs, reading time, keyword density, and case transformation.',
    fullDescription: 'An all-in-one text analysis and formatting workspace. Count characters (with and without spaces), words, sentences, paragraphs, estimated reading time, and speaking time in real time. Analyze keyword density and transform text into UPPERCASE, lowercase, Title Case, Sentence case, camelCase, kebab-case, or snake_case.',
    category: 'productivity',
    categoryLabel: 'Productivity & Utilities',
    iconName: 'AlignLeft',
    badge: 'Live Analytics',
    isPopular: false,
    seoTitle: 'Online Word Counter & Character Counter with Case Converter - AVRX Tools',
    seoDescription: 'Count words, characters, sentences, reading time, and keyword density in real-time. Includes case converter tools.',
    features: [
      'Real-time metrics: Characters (with spaces), Characters (no spaces), Words, Sentences, Paragraphs',
      'Estimated Reading Time (at 200 words/min) and Speaking Time (at 130 words/min)',
      'Top 5 Keyword Density frequency table with percentages',
      'One-click Case Converter: UPPERCASE, lowercase, Title Case, Sentence case, camelCase, kebab-case, snake_case',
      'Clean Extra Whitespace and line breaks tool',
      'One-click Copy and Download as .txt file'
    ],
    howItWorks: [
      { step: 1, title: 'Type or Paste Text', desc: 'Enter your copy into the large interactive text editor.' },
      { step: 2, title: 'Monitor Live Stats', desc: 'Watch character and word counters update instantly with every keystroke.' },
      { step: 3, title: 'Transform Case & Export', desc: 'Click any case converter button to format your text and copy with one click.' }
    ],
    faqs: [
      { question: 'What reading speed is used for the calculation?', answer: 'It uses standard adult reading speed of 200-250 words per minute and speech presentation speed of 130-150 words per minute.' }
    ],
    privacyNote: 'Text remains entirely in your browser memory and is never uploaded.',
    relatedToolIds: ['json-formatter', 'ai-content-generator', 'text-summarizer']
  },
  {
    id: 'json-formatter',
    slug: 'json-formatter',
    name: 'JSON Formatter, Validator & Tree Inspector',
    shortDescription: 'Beautify, format, minify, validate syntax errors with line numbers, and inspect JSON in an interactive tree view.',
    fullDescription: 'A developer-grade JSON utility. Format and beautify messy JSON with customizable indentation (2 spaces, 4 spaces, Tabs), minify into a compact single line, detect syntax errors with exact line and column locations, inspect structures in an interactive collapsible tree view with type badges, and export to CSV or JSON file.',
    category: 'productivity',
    categoryLabel: 'Productivity & Utilities',
    iconName: 'Code',
    badge: 'Tree Inspector',
    isPopular: true,
    seoTitle: 'JSON Formatter, Validator & Tree Viewer Online - AVRX Tools',
    seoDescription: 'Format, validate, beautify, and minify JSON data online. Interactive tree viewer with syntax error line highlighting.',
    features: [
      'Real-time JSON parsing and validation with native JavaScript engine',
      'Syntax error detection highlighting exact line and column location with helpful error messages',
      'Indentation controls: 2 Spaces, 4 Spaces, Tab indentation',
      'Minify / Compact JSON mode for efficient API payloads',
      'Interactive collapsible Tree View inspector with data type badges (string, number, boolean, array, object)',
      'Load sample JSON templates (User profile, E-Commerce order, Config settings)',
      'One-click Copy formatted JSON and Download as .json file'
    ],
    howItWorks: [
      { step: 1, title: 'Paste JSON Data', desc: 'Paste raw, minified, or unformatted JSON into the editor.' },
      { step: 2, title: 'Format or Validate', desc: 'Click "Format JSON" to beautify or check for syntax errors.' },
      { step: 3, title: 'Inspect & Download', desc: 'Explore the interactive tree view, copy formatted code, or download as a .json file.' }
    ],
    faqs: [
      { question: 'Can it handle large JSON payloads?', answer: 'Yes! Modern browser V8 engines parse megabytes of JSON in milliseconds.' },
      { question: 'Is my proprietary API data safe?', answer: '100% safe. Parsing happens purely on the client side using browser JSON APIs.' }
    ],
    privacyNote: 'Zero server communication. Your sensitive API payloads and configuration files remain confidential.',
    relatedToolIds: ['text-counter', 'qr-generator', 'password-generator']
  },
  {
    id: 'unit-converter',
    slug: 'unit-converter',
    name: 'Multi-Category Unit Converter',
    shortDescription: 'Convert Length, Weight, Area, Volume, Temperature, Speed, Time, and Digital Data Storage units instantly.',
    fullDescription: 'An intuitive multi-category unit converter. Seamlessly convert between metric and imperial units across 8 core categories: Length (km, m, cm, mm, miles, yards, feet, inches), Weight & Mass (kg, g, mg, pounds, ounces, metric tons), Temperature (°C, °F, Kelvin), Area (sq km, sq m, acres, hectares, sq ft), Volume (liters, ml, gallons, cups), Speed (km/h, mph, m/s, knots), Digital Storage (Bytes, KB, MB, GB, TB, PB), and Time.',
    category: 'productivity',
    categoryLabel: 'Productivity & Utilities',
    iconName: 'Layers',
    badge: '8 Categories',
    isPopular: false,
    seoTitle: 'Online Unit Converter (Length, Weight, Temp, Storage) - AVRX Tools',
    seoDescription: 'Convert units across Length, Weight, Temperature, Area, Speed, Time, and Digital Storage instantly. Free converter by AVRX.',
    features: [
      '8 Comprehensive Categories: Length, Weight/Mass, Temperature, Area, Volume, Speed, Digital Storage, Time',
      'Dual-direction live conversion with instant bidirectional updates',
      'Quick Unit Swap button to reverse conversion with one click',
      'Formula explanation showing exact mathematical conversion factor',
      'Support for scientific notations and decimal precision controls',
      'One-click Copy result button'
    ],
    howItWorks: [
      { step: 1, title: 'Select Category', desc: 'Choose unit category (e.g. Length, Weight, Temperature, or Digital Storage).' },
      { step: 2, title: 'Choose Units & Amount', desc: 'Pick "From" and "To" units and enter the numeric value.' },
      { step: 3, title: 'Get Result & Formula', desc: 'Read the instant converted value along with the exact mathematical equation.' }
    ],
    faqs: [
      { question: 'How accurate are the conversions?', answer: 'All conversions use high-precision floating point constants aligned with international metrology standards (NIST and ISO).' }
    ],
    privacyNote: '100% client-side calculator without external tracking.',
    relatedToolIds: ['age-calculator', 'loan-calculator', 'text-counter']
  }
];
