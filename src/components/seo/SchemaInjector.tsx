import React, { useEffect } from 'react';
import { servicesData } from '../../data/servicesData';
import { blogArticles } from '../../data/blogArticles';

export const SchemaInjector: React.FC = () => {
  useEffect(() => {
    // 1. Organization Schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "AVRX Digital & Financial Solution",
      "alternateName": "AVRX",
      "url": "https://avrx.in",
      "logo": "https://avrx.in/logo.png",
      "description": "Your Trusted AI-Powered Digital & Financial Partner - Complete Website Design, Mobile Apps, AI Automation, SEO, Loans, Insurance, GST, ITR Tax Filing & Credit Score Solutions.",
      "sameAs": [
        "https://www.facebook.com/avrxdigital",
        "https://www.instagram.com/avrxdigital",
        "https://www.linkedin.com/company/avrxdigital",
        "https://twitter.com/avrxdigital"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9630661536",
        "contactType": "customer service",
        "email": "contact@avrx.in",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi"]
      }
    };

    // 2. Local Business Schema
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "AVRX Digital & Financial Solution",
      "image": "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
      "@id": "https://avrx.in/#business",
      "url": "https://avrx.in",
      "telephone": "+91-9630661536",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Waterpark, NH43",
        "addressLocality": "Ambikapur",
        "addressRegion": "Surguja C.G.",
        "postalCode": "497001",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 28.6139,
        "longitude": 77.2090
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "09:00",
        "closes": "20:00"
      },
      "priceRange": "₹₹"
    };

    // 3. Service Catalog Schema
    const serviceSchemas = servicesData.map(service => ({
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": service.title,
      "provider": {
        "@type": "Organization",
        "name": "AVRX Digital & Financial Solution",
        "url": "https://avrx.in"
      },
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "description": service.seoDescription,
      "offers": {
        "@type": "Offer",
        "priceCurrency": "INR",
        "price": service.startingPrice?.replace(/[^0-9]/g, '') || "9999",
        "url": `https://avrx.in/#service-${service.id}`
      }
    }));

    // 4. FAQ Schema from top blog and service FAQs
    const allFaqs = [
      ...servicesData.flatMap(s => s.faqs),
      ...blogArticles.slice(0, 5).flatMap(b => b.faqs)
    ];
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": allFaqs.slice(0, 10).map(f => ({
        "@type": "Question",
        "name": f.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.answer
        }
      }))
    };

    // Inject scripts
    const addSchemaScript = (id: string, data: any) => {
      let script = document.getElementById(id) as HTMLScriptElement;
      if (!script) {
        script = document.createElement('script');
        script.id = id;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(data);
    };

    addSchemaScript('schema-org', organizationSchema);
    addSchemaScript('schema-local', localBusinessSchema);
    addSchemaScript('schema-services', serviceSchemas);
    addSchemaScript('schema-faq', faqSchema);

    return () => {
      ['schema-org', 'schema-local', 'schema-services', 'schema-faq'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.remove();
      });
    };
  }, []);

  return null;
};
