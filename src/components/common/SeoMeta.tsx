import React, { useEffect } from 'react';

interface SeoMetaProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
}

export default function SeoMeta({
  title,
  description,
  keywords = 'AVRX Digital, Financial Solutions, AI tools, Website Design, GST filing, Loans, SEO Optimization',
  canonicalUrl = 'https://avrxdigital.com',
  ogImage = 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80'
}: SeoMetaProps) {
  useEffect(() => {
    // Update Document Title
    const fullTitle = `${title} | AVRX Digital & Financial Solution`;
    document.title = fullTitle;

    // Update Meta Tags
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

    updateMeta('description', description);
    updateMeta('keywords', keywords);
    updateMeta('og:title', fullTitle, true);
    updateMeta('og:description', description, true);
    updateMeta('og:image', ogImage, true);
    updateMeta('og:url', canonicalUrl, true);
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', fullTitle);
    updateMeta('twitter:description', description);
  }, [title, description, keywords, canonicalUrl, ogImage]);

  return null;
}
