import React, { useEffect } from 'react';
import { BlogPost } from '../../types/blog';
import { SITE_CONFIG } from '../../config';

interface BlogSEOProps {
  post: BlogPost;
}

export const BlogSEO: React.FC<BlogSEOProps> = ({ post }) => {
  useEffect(() => {
    const title = `${post.seoTitle || post.title}`;
    document.title = title;

    // Helper to set meta tags
    const setMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('description', post.metaDescription || post.excerpt);
    setMeta('og:title', title, true);
    setMeta('og:description', post.metaDescription || post.excerpt, true);
    setMeta('og:type', 'article', true);
    setMeta('og:url', post.canonicalUrl, true);
    setMeta('og:image', post.featuredImage, true);
    setMeta('og:site_name', SITE_CONFIG.name, true);
    setMeta('article:published_time', post.isoDate, true);
    setMeta('article:section', post.category, true);
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', post.metaDescription || post.excerpt);
    setMeta('twitter:image', post.featuredImage);

    // Canonical link tag
    let canonicalLink = document.querySelector("link[rel='canonical']");
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', post.canonicalUrl);

    // Rich JSON-LD Structured Data (Article + BreadcrumbList + Organization)
    const jsonLdData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Article',
          '@id': `${post.canonicalUrl}/#article`,
          'isPartOf': {
            '@type': 'WebPage',
            '@id': post.canonicalUrl,
            'url': post.canonicalUrl,
            'name': title
          },
          'headline': post.title,
          'description': post.metaDescription || post.excerpt,
          'datePublished': post.isoDate,
          'dateModified': post.isoDate,
          'image': post.featuredImage,
          'author': {
            '@type': 'Organization',
            'name': post.author.name,
            'url': SITE_CONFIG.url
          },
          'publisher': {
            '@type': 'Organization',
            'name': SITE_CONFIG.name,
            'url': SITE_CONFIG.url,
            'logo': {
              '@type': 'ImageObject',
              'url': `${SITE_CONFIG.url}/logo.png`
            }
          },
          'mainEntityOfPage': {
            '@type': 'WebPage',
            '@id': post.canonicalUrl
          },
          'keywords': post.tags.join(', ')
        },
        {
          '@type': 'BreadcrumbList',
          '@id': `${post.canonicalUrl}/#breadcrumb`,
          'itemListElement': [
            {
              '@type': 'ListItem',
              'position': 1,
              'name': 'Home',
              'item': SITE_CONFIG.url
            },
            {
              '@type': 'ListItem',
              'position': 2,
              'name': 'Blog',
              'item': `${SITE_CONFIG.url}/blog`
            },
            {
              '@type': 'ListItem',
              'position': 3,
              'name': post.category,
              'item': `${SITE_CONFIG.url}/blog?category=${encodeURIComponent(post.category)}`
            },
            {
              '@type': 'ListItem',
              'position': 4,
              'name': post.title,
              'item': post.canonicalUrl
            }
          ]
        },
        {
          '@type': 'Organization',
          '@id': `${SITE_CONFIG.url}/#organization`,
          'name': SITE_CONFIG.name,
          'url': SITE_CONFIG.url,
          'description': SITE_CONFIG.description
        }
      ]
    };

    let scriptTag = document.getElementById('avrx-blog-article-jsonld');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'avrx-blog-article-jsonld';
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(jsonLdData);

    return () => {
      // Cleanup script tag on unmount if needed
      const el = document.getElementById('avrx-blog-article-jsonld');
      if (el) el.remove();
    };
  }, [post]);

  return null;
};
