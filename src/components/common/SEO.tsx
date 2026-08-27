import React, { useEffect } from 'react';
import { SITE_CONFIG } from '../../config';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  type?: string;
  noindex?: boolean;
}

const normalizeCanonical = (url: string) => {
  try {
    const parsed = new URL(url, SITE_CONFIG.url);
    parsed.protocol = 'https:';
    parsed.hostname = new URL(SITE_CONFIG.url).hostname;
    parsed.hash = '';
    parsed.search = '';
    if (parsed.pathname !== '/' && parsed.pathname.endsWith('/')) parsed.pathname = parsed.pathname.slice(0, -1);
    return parsed.toString();
  } catch {
    return SITE_CONFIG.url;
  }
};

export const SEO: React.FC<SEOProps> = ({
  title,
  description = SITE_CONFIG.description,
  canonicalUrl,
  type = 'website',
  noindex = false
}) => {
  const fullTitle = title
    ? (title.includes('AVRX') ? title : `${title} | ${SITE_CONFIG.shortName}`)
    : SITE_CONFIG.name;

  const resolvedCanonical = canonicalUrl || (typeof window !== 'undefined' ? window.location.href : SITE_CONFIG.url);
  const canonical = normalizeCanonical(resolvedCanonical);

  useEffect(() => {
    document.title = fullTitle;

    const setMeta = (name: string, content: string, property = false) => {
      const attr = property ? 'property' : 'name';
      let element = document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    setMeta('description', description);
    setMeta('robots', noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    setMeta('og:title', fullTitle, true);
    setMeta('og:description', description, true);
    setMeta('og:type', type, true);
    setMeta('og:url', canonical, true);
    setMeta('og:site_name', SITE_CONFIG.shortName, true);
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', description);

    let canonicalLink = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonical;

    const schemaData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': `${SITE_CONFIG.url}/#organization`,
          name: SITE_CONFIG.name,
          url: SITE_CONFIG.url,
          logo: `${SITE_CONFIG.url}/favicon.svg`,
          description: SITE_CONFIG.description,
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: SITE_CONFIG.contact.phone,
            contactType: 'customer support',
            email: SITE_CONFIG.contact.email,
            areaServed: 'IN',
            availableLanguage: ['English', 'Hindi']
          },
          address: {
            '@type': 'PostalAddress',
            streetAddress: SITE_CONFIG.contact.address,
            addressLocality: SITE_CONFIG.contact.city,
            addressRegion: SITE_CONFIG.contact.region,
            addressCountry: SITE_CONFIG.contact.country
          },
          sameAs: Object.values(SITE_CONFIG.social).filter(Boolean)
        },
        {
          '@type': 'WebSite',
          '@id': `${SITE_CONFIG.url}/#website`,
          url: SITE_CONFIG.url,
          name: SITE_CONFIG.name,
          description: SITE_CONFIG.description,
          publisher: { '@id': `${SITE_CONFIG.url}/#organization` }
        },
        {
          '@type': 'WebPage',
          '@id': `${canonical}#webpage`,
          url: canonical,
          name: fullTitle,
          description,
          isPartOf: { '@id': `${SITE_CONFIG.url}/#website` }
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
  }, [fullTitle, description, canonical, type, noindex]);

  return null;
};
