import React from 'react';
import { Link } from 'react-router-dom';
import SeoMeta from '../components/common/SeoMeta';
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
  const openings = [
    {
      title: 'Senior Next.js & React Solution Architect',
      type: 'Full-Time / Remote',
      location: 'Mumbai (BKC) / Silicon Valley',
      dept: 'Digital Product Engineering',
      desc: 'Lead enterprise client builds in Next.js 14, Tailwind CSS, and Edge NVMe architectures with strict 0.6s LCP Core Web Vitals SLA.'
    },
    {
      title: 'Practicing Chartered Accountant (GST & ITR Panel)',
      type: 'Full-Time Retainer',
      location: 'Mumbai (BKC)',
      dept: 'Statutory Compliance & Audit',
      desc: 'Manage GSTR-3B monthly filing, ROC AOC-4 annual returns, and corporate scrutiny notice advisory for enterprise clients.'
    },
    {
      title: 'AI Product Specialist & LLM Engineer',
      type: 'Full-Time / Hybrid',
      location: 'Silicon Valley / Mumbai',
      dept: 'AVRX AI Labs',
      desc: 'Build programmatic SEO scanners, custom schema engines, and conversational GPT-4 concierges for high-traffic platforms.'
    }
  ];

  return (
    <div className="bg-[#08090C] min-h-screen">
      <SeoMeta
        title="Career Opportunities | Join AVRX Digital & Financial Solution"
        description="Join our team of elite Solution Architects, practicing Chartered Accountants, and LLM Engineers."
      />

      <PageBanner
        title="Build CRED-Inspired Digital & Financial Assets"
        subtitle="We hire the top 1% of digital engineers, practicing chartered accountants, and corporate attorneys who take pride in flawless craftsmanship."
        badge="JOIN THE AVRX ECOSYSTEM"
        breadcrumbs={[{ label: 'Career Opportunities' }]}
        ctaText="View Open Roles"
      />

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
