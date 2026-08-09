import React from 'react';
import { Link } from 'react-router-dom';
import SeoMeta from '../components/common/SeoMeta';
import Breadcrumbs from '../components/common/Breadcrumbs';
import PageBanner from '../components/layout/PageBanner';
import {
  Code2,
  Database,
  Cpu,
  Server,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Download
} from 'lucide-react';

export default function DigitalProductsPage() {
  const breadcrumbs = [
    { name: 'Digital Products', url: '/digital-products' }
  ];

  const products = [
    {
      id: 'website-starter-kit',
      title: 'AVRX High-Performance Web Starter Kit',
      badge: 'SOURCE CODE LICENSED',
      price: '₹14,999 One-Time',
      desc: 'Turnkey React & Tailwind web architecture boilerplate with mobile responsiveness, WhatsApp lead integration, local SEO schema, and fast load optimization.',
      features: [
        'Complete TypeScript & React App Boilerplate',
        'Built-in WhatsApp & Inquiry Form Handlers',
        'Local Business Schema & Meta Tag Generator',
        '100% Code Ownership & Commercial License'
      ]
    },
    {
      id: 'fintech-loan-crm',
      title: 'AVRX FinTech Loan & GST CRM Dashboard Template',
      badge: 'FINANCIAL DASHBOARD',
      price: '₹19,999 One-Time',
      desc: 'Pre-built React & Recharts administrative portal for financial advisors, GST consultants, and loan brokers with built-in EMI calculators.',
      features: [
        'React 18 + Tailwind UI Components',
        'Dynamic EMI & Amortization interactive charts',
        'Lead pipeline & KYC document upload drawers',
        'Responsive Retina design for tablet/mobile'
      ]
    },
    {
      id: 'nvme-edge-hosting',
      title: 'Managed NVMe Cloud Hosting & SSL SLA',
      badge: '99.99% UPTIME SLA',
      price: '₹3,999 / Month',
      desc: 'High-frequency NVMe server nodes with automated daily backups, CDN integration, SSL certificate, and DDoS mitigation.',
      features: [
        'Dedicated NVMe SSD storage with fast uplink',
        'Automated daily off-site snapshot backups',
        'Free SSL Wildcard certificates & DDoS firewall',
        '24/7 Monitoring & technical support SLA'
      ]
    }
  ];

  return (
    <div className="bg-[#08090C] min-h-screen">
      <SeoMeta
        title="Digital Products & Web Templates | AVRX Ambikapur"
        description="Explore AVRX web application templates, financial dashboard starter kits, and cloud hosting SLAs in Ambikapur, Chhattisgarh."
        keywords="digital products Ambikapur, web templates Chhattisgarh, financial dashboard CRM, web hosting Ambikapur"
        canonicalUrl="https://avrx.in/digital-products"
        breadcrumbsData={breadcrumbs}
      />

      <PageBanner
        title="Ready-to-Deploy Digital Products & Assets"
        subtitle="Pre-built web application starters, financial dashboards, and managed cloud hosting SLAs."
        badge="DIGITAL PRODUCTS"
        breadcrumbs={[{ label: 'Digital Products' }]}
        ctaText="Inquire About Licenses"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      <section className="py-20 bg-[#06070B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((item) => (
              <div
                key={item.id}
                className="glass-card p-8 rounded-3xl border border-white/10 hover:border-cyan-500/40 bg-[#0C0F1C]/90 hover:bg-[#101324] transition-all duration-300 flex flex-col justify-between space-y-6"
              >
                <div>
                  <span className="px-3 py-1 rounded-full bg-cyan-500/15 text-cyan-300 text-[11px] font-bold block w-max mb-4">
                    {item.badge}
                  </span>
                  <h3 className="text-xl font-poppins font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <div className="text-2xl font-poppins font-black text-cyan-400 mb-4">
                    {item.price}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {item.desc}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {item.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <Link
                    to="/contact"
                    className="w-full py-3.5 rounded-xl bg-white/10 hover:bg-cyan-500 text-white text-center font-bold text-xs flex items-center justify-center gap-2 transition-all"
                  >
                    <Download className="w-4 h-4" />
                    <span>Inquire License & Demo</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
