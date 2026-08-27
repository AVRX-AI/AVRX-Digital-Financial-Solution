import React, { useEffect } from 'react';
import { SITE_CONFIG } from '../../config';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

interface ServiceSchemaInfo {
  name: string;
  description: string;
  price?: string;
  priceCurrency?: string;
  category?: string;
}

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  type?: string;
  image?: string;
  keywords?: string;
  breadcrumbs?: BreadcrumbItem[];
  faqs?: FaqItem[];
  serviceSchema?: ServiceSchemaInfo;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description = SITE_CONFIG.description,
  canonicalUrl = typeof window !== 'undefined' ? window.location.href : SITE_CONFIG.url,
  type = 'website',
  image = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
  keywords = 'AVRX, Digital Solutions India, Website Design, App Development, SEO Ranking, GST Registration, ITR Filing, Business Loans, AI Tools Suite, Next-Gen Tech Agency',
  breadcrumbs,
  faqs,
  serviceSchema
}) => {
  const fullTitle = title
    ? (title.includes('AVRX') ? title : `${title} | ${SITE_CONFIG.shortName} - Digital & Financial Solutions`)
    : `${SITE_CONFIG.name} — Premier Digital, Financial, Tax & AI Solutions`;

  useEffect(() => {
    document.title = fullTitle;

    // Helper to set meta tags
    const setMeta = (name: string, content: string, property = false) => {
      const attr = property ? 'property' : 'name';
      let element = document.querySelector(`meta[${attr}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Standard Meta
    setMeta('description', description);
    setMeta('keywords', keywords);
    setMeta('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    setMeta('author', 'AVRX Digital & Financial Solutions');
    setMeta('theme-color', '#050811');

    // OpenGraph
    setMeta('og:title', fullTitle, true);
    setMeta('og:description', description, true);
    setMeta('og:type', type, true);
    setMeta('og:url', canonicalUrl, true);
    setMeta('og:image', image, true);
    setMeta('og:image:width', '1200', true);
    setMeta('og:image:height', '630', true);
    setMeta('og:site_name', SITE_CONFIG.name, true);
    setMeta('og:locale', 'en_IN', true);

    // Twitter Card
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', description);
    setMeta('twitter:image', image);
    setMeta('twitter:site', '@AVRXOfficial');
    setMeta('twitter:creator', '@AVRXOfficial');

    // Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // Schema.org JSON-LD graph builder
    const graph: any[] = [
      {
        '@type': 'Organization',
        '@id': `${SITE_CONFIG.url}/#organization`,
        'name': SITE_CONFIG.name,
        'alternateName': 'AVRX Digital',
        'url': SITE_CONFIG.url,
        'logo': {
          '@type': 'ImageObject',
          'url': `${SITE_CONFIG.url}/logo.png`,
          'caption': 'AVRX Logo'
        },
        'description': SITE_CONFIG.description,
        'contactPoint': {
          '@type': 'ContactPoint',
          'telephone': SITE_CONFIG.contact.phone,
          'contactType': 'customer support',
          'email': SITE_CONFIG.contact.email,
          'areaServed': 'IN',
          'availableLanguage': ['English', 'Hindi']
        },
        'aggregateRating': {
          '@type': 'AggregateRating',
          'ratingValue': '4.9',
          'reviewCount': '2840',
          'bestRating': '5',
          'worstRating': '1'
        },
        'sameAs': [
          SITE_CONFIG.social.linkedin,
          SITE_CONFIG.social.twitter,
          SITE_CONFIG.social.instagram,
          SITE_CONFIG.social.facebook
        ]
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_CONFIG.url}/#website`,
        'url': SITE_CONFIG.url,
        'name': SITE_CONFIG.name,
        'description': SITE_CONFIG.description,
        'publisher': {
          '@id': `${SITE_CONFIG.url}/#organization`
        },
        'potentialAction': {
          '@type': 'SearchAction',
          'target': `${SITE_CONFIG.url}/services?q={search_term_string}`,
          'query-input': 'required name=search_term_string'
        }
      }
    ];

    // Add BreadcrumbList Schema if present
    if (breadcrumbs && breadcrumbs.length > 0) {
      graph.push({
        '@type': 'BreadcrumbList',
        'itemListElement': breadcrumbs.map((crumb, idx) => ({
          '@type': 'ListItem',
          'position': idx + 1,
          'name': crumb.name,
          'item': crumb.url
        }))
      });
    }

    // Add FAQPage Schema if present
    if (faqs && faqs.length > 0) {
      graph.push({
        '@type': 'FAQPage',
        'mainEntity': faqs.map(faq => ({
          '@type': 'Question',
          'name': faq.question,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': faq.answer
          }
        }))
      });
    }

    // Add Service Schema if present
    if (serviceSchema) {
      graph.push({
        '@type': 'Service',
        'name': serviceSchema.name,
        'description': serviceSchema.description,
        'provider': {
          '@id': `${SITE_CONFIG.url}/#organization`
        },
        'serviceType': serviceSchema.category || 'Digital & Financial Services',
        'areaServed': 'India',
        ...(serviceSchema.price ? {
          'offers': {
            '@type': 'Offer',
            'price': serviceSchema.price.replace(/[^0-9]/g, '') || '4999',
            'priceCurrency': serviceSchema.priceCurrency || 'INR',
            'availability': 'https://schema.org/InStock'
          }
        } : {})
      });
    }

    const schemaData = {
      '@context': 'https://schema.org',
      '@graph': graph
    };

    let scriptTag = document.getElementById('avrx-json-ld');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'avrx-json-ld';
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(schemaData);
  }, [fullTitle, description, canonicalUrl, type, image, keywords, breadcrumbs, faqs, serviceSchema]);

  return null;
};
