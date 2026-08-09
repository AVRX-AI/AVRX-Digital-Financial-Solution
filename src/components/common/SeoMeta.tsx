import React, { useEffect } from 'react';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface FaqSchemaItem {
  question: string;
  answer: string;
}

interface SeoMetaProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  schemaData?: object | object[];
  faqData?: FaqSchemaItem[];
  breadcrumbsData?: BreadcrumbItem[];
}

export default function SeoMeta({
  title,
  description,
  keywords = 'AVRX Digital, Financial Solutions, Website Design Ambikapur, Personal Loan Ambikapur, Business Loan Surguja, GST Filing Chhattisgarh, SEO Services India',
  canonicalUrl,
  ogImage = 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
  ogType = 'website',
  schemaData,
  faqData,
  breadcrumbsData
}: SeoMetaProps) {
  useEffect(() => {
    // 1. Format Document Title
    const fullTitle = title.includes('AVRX')
      ? title
      : `${title} | AVRX Digital & Financial Solution`;
    document.title = fullTitle;

    // 2. Derive Absolute Canonical URL
    const currentPath = window.location.pathname;
    const resolvedCanonical = canonicalUrl || `https://avrx.in${currentPath === '/' ? '' : currentPath}`;

    // Helper: Update or Create Meta Tag
    const updateMeta = (name: string, content: string, isProperty = false) => {
      const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        if (isProperty) el.setAttribute('property', name);
        else el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // 3. Update Primary Meta Tags
    updateMeta('description', description);
    updateMeta('keywords', keywords);
    updateMeta('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    updateMeta('author', 'AVRX Digital & Financial Solution');

    // 4. Local SEO Geo Location Meta Tags
    updateMeta('geo.region', 'IN-CT');
    updateMeta('geo.placename', 'Ambikapur, Surguja, Chhattisgarh');
    updateMeta('geo.position', '23.1182;83.1987');
    updateMeta('ICBM', '23.1182, 83.1987');

    // 5. Google Search Console Verification Meta Tag Placeholder
    updateMeta('google-site-verification', 'GSC_VERIFICATION_TOKEN_PLACEHOLDER');

    // 6. Open Graph Tags
    updateMeta('og:title', fullTitle, true);
    updateMeta('og:description', description, true);
    updateMeta('og:image', ogImage, true);
    updateMeta('og:url', resolvedCanonical, true);
    updateMeta('og:type', ogType, true);
    updateMeta('og:site_name', 'AVRX Digital & Financial Solution', true);
    updateMeta('og:locale', 'en_IN', true);

    // 7. Twitter Card Tags
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', fullTitle);
    updateMeta('twitter:description', description);
    updateMeta('twitter:image', ogImage);
    updateMeta('twitter:site', '@AVRXOfficial');

    // 8. Canonical Link Tag
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', resolvedCanonical);

    // 9. Structured Data JSON-LD
    const schemas: object[] = [];

    // Base Organization & LocalBusiness Schema
    const baseLocalBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': 'https://avrx.in/#organization',
      name: 'AVRX Digital & Financial Solution',
      url: 'https://avrx.in/',
      logo: 'https://avrx.in/logo.png',
      image: ogImage,
      description:
        'AVRX Digital & Financial Solution provides website design, web development, mobile app development, digital marketing, SEO, financial loans, GST filing, and insurance solutions in Ambikapur, Surguja, Chhattisgarh.',
      telephone: '+91-9630661536',
      email: 'support@avrx.in',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Waterpark Ambikapur, NH343',
        addressLocality: 'Ambikapur',
        addressRegion: 'Chhattisgarh',
        postalCode: '497001',
        addressCountry: 'IN'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 23.1182,
        longitude: 83.1987
      },
      areaServed: [
        { '@type': 'City', name: 'Ambikapur' },
        { '@type': 'AdministrativeArea', name: 'Surguja' },
        { '@type': 'AdministrativeArea', name: 'Chhattisgarh' },
        { '@type': 'Country', name: 'India' }
      ],
      priceRange: '₹₹',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '09:00',
          closes: '19:00'
        }
      ],
      sameAs: [
        'https://linkedin.com',
        'https://twitter.com',
        'https://instagram.com',
        'https://facebook.com'
      ]
    };

    schemas.push(baseLocalBusinessSchema);

    // Breadcrumbs Schema if provided
    if (breadcrumbsData && breadcrumbsData.length > 0) {
      const breadcrumbListSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbsData.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: item.url.startsWith('http') ? item.url : `https://avrx.in${item.url}`
        }))
      };
      schemas.push(breadcrumbListSchema);
    }

    // FAQ Schema if provided
    if (faqData && faqData.length > 0) {
      const faqPageSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqData.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer
          }
        }))
      };
      schemas.push(faqPageSchema);
    }

    // Custom Schema Data if provided
    if (schemaData) {
      if (Array.isArray(schemaData)) {
        schemas.push(...schemaData);
      } else {
        schemas.push(schemaData);
      }
    }

    // Inject Script Tag into Head
    let scriptTag = document.querySelector('script[id="avrx-jsonld-schema"]') as HTMLScriptElement;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'avrx-jsonld-schema';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(schemas, null, 2);
  }, [title, description, keywords, canonicalUrl, ogImage, ogType, schemaData, faqData, breadcrumbsData]);

  return null;
}

