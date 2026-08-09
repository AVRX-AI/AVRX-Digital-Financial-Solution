import React from 'react';
import { Link } from 'react-router-dom';
import SeoMeta from '../components/common/SeoMeta';
import Breadcrumbs from '../components/common/Breadcrumbs';
import PageBanner from '../components/layout/PageBanner';
import {
  Sparkles,
  CheckCircle2,
  Briefcase,
  MapPin,
  Clock,
  ArrowRight
} from 'lucide-react';

export default function CareerPage() {
  const breadcrumbs = [
    { name: 'Careers', url: '/careers' }
  ];

  const openings = [
    {
      title: 'Full Stack Web Developer (React / Node.js)',
      type: 'Full-Time / Hybrid',
      location: 'Ambikapur, CG / Remote',
      dept: 'Digital Product Engineering',
      desc: 'Build high-performance web applications, responsive client websites, and API integrations with SEO and mobile speed optimization.'
    },
    {
      title: 'Tax & GST Executive',
      type: 'Full-Time',
      location: 'Ambikapur Office',
      dept: 'Statutory Compliance & Audit',
      desc: 'Assist in GSTR-1, GSTR-3B monthly filings, ITR tax e-filing, and client accounting support for businesses in Chhattisgarh.'
    },
    {
      title: 'Financial & Loan Advisory Consultant',
      type: 'Full-Time',
      location: 'Ambikapur Office',
      dept: 'Financial Capital Division',
      desc: 'Help business clients with loan application documentation, bank coordination, and credit profile preparation.'
    }
  ];

  return (
    <div className="bg-[#08090C] min-h-screen">
      <SeoMeta
        title="Careers & Openings in Ambikapur | AVRX Jobs"
        description="Explore job openings and career opportunities in Web Development, Tax Compliance, and Loan Consultancy at AVRX Digital & Financial Solution in Ambikapur."
        keywords="jobs in Ambikapur, web developer jobs Surguja, tax assistant jobs Chhattisgarh, AVRX careers"
        canonicalUrl="https://avrx.in/careers"
        breadcrumbsData={breadcrumbs}
      />

      <PageBanner
        title="Careers at AVRX Digital & Financial Solution"
        subtitle="Join our team of developers, tax consultants, and financial advisors in Ambikapur, Chhattisgarh."
        badge="JOIN OUR TEAM"
        breadcrumbs={[{ label: 'Career Opportunities' }]}
        ctaText="View Open Roles"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      <section className="py-20 bg-[#06070B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {openings.map((role, idx) => (
              <div
                key={idx}
                className="glass-card p-8 rounded-3xl border border-white/10 hover:border-blue-500/40 bg-[#0C0F1D]/80 transition-all duration-300 flex flex-col justify-between space-y-6"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-blue-500/15 text-blue-300 border border-blue-500/30 text-[10px] font-bold uppercase">
                      {role.dept}
                    </span>
                    <span className="text-xs text-slate-400">{role.type}</span>
                  </div>

                  <h3 className="text-xl font-poppins font-bold text-white mb-2">
                    {role.title}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-4">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{role.location}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {role.desc}
                  </p>
                </div>

                <Link
                  to="/contact"
                  className="w-full py-3.5 rounded-xl bg-white/10 hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-500 text-white text-center font-bold text-xs flex items-center justify-center gap-2 transition-all"
                >
                  <span>Apply with Executive CV</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
