import React from 'react';
import { Link } from 'react-router-dom';
import SeoMeta from '../components/common/SeoMeta';
import Breadcrumbs from '../components/common/Breadcrumbs';
import { Globe, DollarSign, FileCheck, ShieldCheck, Cpu, Building2, ExternalLink } from 'lucide-react';

export default function SitemapPage() {
  const breadcrumbs = [
    { name: 'HTML Sitemap', url: '/sitemap' }
  ];

  const sitemapCategories = [
    {
      title: 'Digital Services',
      icon: Globe,
      color: 'text-blue-400',
      links: [
        { name: 'Digital Services Overview', path: '/services' },
        { name: 'Website Design', path: '/website-design' },
        { name: 'Web Development', path: '/web-development' },
        { name: 'Application Development', path: '/application-development' },
        { name: 'E-Commerce Website Development', path: '/ecommerce-website' },
        { name: 'Digital Marketing Services', path: '/digital-marketing' },
        { name: 'SEO Optimization Services', path: '/seo-services' },
        { name: 'Website Redesign', path: '/website-redesign' },
        { name: 'Website Maintenance SLA', path: '/website-maintenance' },
        { name: 'AI Solutions & Tools', path: '/ai-solutions' },
      ]
    },
    {
      title: 'Financial & Loan Services',
      icon: DollarSign,
      color: 'text-cyan-400',
      links: [
        { name: 'Financial Services Overview', path: '/financial-solutions' },
        { name: 'Personal Loan', path: '/personal-loan' },
        { name: 'Business Loan & MSME Capital', path: '/business-loan' },
        { name: 'Home Loan & Construction', path: '/home-loan' },
        { name: 'Car & Auto Loan', path: '/car-loan' },
        { name: 'Mortgage Loan (LAP)', path: '/mortgage-loan' },
        { name: 'Balance Transfer & Refinance', path: '/refinance' },
        { name: 'PMEGP Subsidy Loan Scheme', path: '/pmegp-loan' },
        { name: 'Pradhan Mantri MUDRA Yojana', path: '/mudra-loan' },
      ]
    },
    {
      title: 'Tax & GST Compliance',
      icon: FileCheck,
      color: 'text-emerald-400',
      links: [
        { name: 'Tax Solutions Overview', path: '/tax-solutions' },
        { name: 'GST Registration', path: '/gst-registration' },
        { name: 'Monthly GST Filing', path: '/gst-filing' },
        { name: 'Income Tax Return (ITR)', path: '/itr-filing' },
        { name: 'Udyam / MSME Registration', path: '/udyam-registration' },
      ]
    },
    {
      title: 'Insurance Solutions',
      icon: ShieldCheck,
      color: 'text-purple-400',
      links: [
        { name: 'Insurance Overview', path: '/insurance-solutions' },
        { name: 'Motor & Car Insurance', path: '/motor-insurance' },
        { name: 'Health Insurance', path: '/health-insurance' },
        { name: 'International Travel Insurance', path: '/travel-insurance' },
        { name: 'Home & Property Protection', path: '/home-insurance' },
        { name: 'Shop & Retail Cover', path: '/shop-insurance' },
        { name: 'Property & Commercial Policy', path: '/property-insurance' },
      ]
    },
    {
      title: 'Company & Resources',
      icon: Building2,
      color: 'text-amber-400',
      links: [
        { name: 'About AVRX', path: '/about' },
        { name: 'Client Work & Portfolio', path: '/portfolio' },
        { name: 'Pricing & Packages', path: '/pricing' },
        { name: 'Digital Products Store', path: '/digital-products' },
        { name: 'Insights Blog', path: '/blog' },
        { name: 'Career Opportunities', path: '/career' },
        { name: 'FAQ & Support Center', path: '/faq' },
        { name: 'Contact Us', path: '/contact' },
      ]
    },
    {
      title: 'Legal & Compliance',
      icon: Cpu,
      color: 'text-slate-400',
      links: [
        { name: 'Privacy Policy', path: '/privacy-policy' },
        { name: 'Terms & Conditions', path: '/terms-and-conditions' },
        { name: 'Financial & Insurance Disclaimer', path: '/disclaimer' },
        { name: 'Refund & Cancellation Policy', path: '/refund-policy' },
        { name: 'XML Sitemap (Googlebot)', path: '/sitemap.xml' },
        { name: 'Robots.txt', path: '/robots.txt' },
      ]
    }
  ];

  return (
    <div className="bg-[#08090C] min-h-screen pt-28 pb-20">
      <SeoMeta
        title="HTML Sitemap & Navigation Index | AVRX Digital & Financial Solution"
        description="Complete site index for AVRX Digital & Financial Solution in Ambikapur, Chhattisgarh. Easily navigate all digital, financial loan, GST tax, and insurance service pages."
        keywords="AVRX sitemap, site index, website links Ambikapur, digital solutions directory"
        canonicalUrl="https://avrx.in/sitemap"
        breadcrumbsData={breadcrumbs}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Breadcrumbs items={breadcrumbs} />

        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
            <Globe className="w-3.5 h-3.5" />
            <span>Complete Directory Index</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-poppins font-extrabold text-white tracking-tight">
            HTML Website Sitemap
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Comprehensive index of all crawlable service sections, loan portals, compliance tools, and legal agreements at AVRX Digital & Financial Solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
          {sitemapCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="glass-card p-6 rounded-3xl border border-white/10 bg-slate-900/40 hover:border-blue-500/30 transition-all space-y-4"
              >
                <div className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <Icon className={`w-5 h-5 ${cat.color}`} />
                  </div>
                  <h2 className="text-lg font-bold text-white font-poppins">{cat.title}</h2>
                </div>

                <ul className="space-y-2.5 text-sm">
                  {cat.links.map((link) => (
                    <li key={link.name}>
                      {link.path.startsWith('http') || link.path.endsWith('.xml') || link.path.endsWith('.txt') ? (
                        <a
                          href={link.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-300 hover:text-cyan-400 transition-colors flex items-center justify-between text-xs font-medium"
                        >
                          <span>{link.name}</span>
                          <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                        </a>
                      ) : (
                        <Link
                          to={link.path}
                          className="text-slate-300 hover:text-blue-400 transition-colors flex items-center gap-2 text-xs font-medium"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50" />
                          <span>{link.name}</span>
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
