import React, { useEffect } from 'react';
import { SITE_CONFIG } from '../../config';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  type?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description = SITE_CONFIG.description,
  canonicalUrl = SITE_CONFIG.url,
  type = 'website'
}) => {
  const fullTitle = title
    ? `${title} | ${SITE_CONFIG.name}`
    : `${SITE_CONFIG.name} | Digital, Financial, Tax, Insurance & AI Ecosystem`;

  useEffect(() => {
    document.title = fullTitle;

    // Set meta tags
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

    setMeta('description', description);
    setMeta('og:title', fullTitle, true);
    setMeta('og:description', description, true);
    setMeta('og:type', type, true);
    setMeta('og:url', canonicalUrl, true);
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', description);

    // Schema.org JSON-LD
    const schemaData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': `${SITE_CONFIG.url}/#organization`,
          'name': SITE_CONFIG.name,
          'url': SITE_CONFIG.url,
          'logo': `${SITE_CONFIG.url}/logo.png`,
          'description': SITE_CONFIG.description,
          'contactPoint': {
            '@type': 'ContactPoint',
            'telephone': SITE_CONFIG.contact.phone,
            'contactType': 'customer support',
            'email': SITE_CONFIG.contact.email,
            'areaServed': 'IN',
            'availableLanguage': ['English', 'Hindi']
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
          }
        }
      ]
    };

    let scriptTag = document.getElementById('avrx-json-ld');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'avrx-json-ld';
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(schemaData);
  }, [fullTitle, description, canonicalUrl, type]);

  return null;
};
