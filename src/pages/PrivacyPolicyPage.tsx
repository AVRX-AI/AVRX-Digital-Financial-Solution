import React from 'react';
import SeoMeta from '../components/common/SeoMeta';
import Breadcrumbs from '../components/common/Breadcrumbs';
import { ShieldCheck, Lock, FileText, CheckCircle2 } from 'lucide-react';

export default function PrivacyPolicyPage() {
  const breadcrumbs = [
    { name: 'Privacy Policy', url: '/privacy-policy' }
  ];

  return (
    <div className="bg-[#08090C] min-h-screen pt-28 pb-20">
      <SeoMeta
        title="Privacy Policy | AVRX Digital & Financial Solution"
        description="Official Privacy Policy of AVRX Digital & Financial Solution in Ambikapur, Chhattisgarh. Learn how we collect, store, and protect client data and financial documents."
        keywords="AVRX privacy policy, data security, financial document safety, Ambikapur digital company privacy"
        canonicalUrl="https://avrx.in/privacy-policy"
        breadcrumbsData={breadcrumbs}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Breadcrumbs items={breadcrumbs} />

        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
            <Lock className="w-3.5 h-3.5" />
            <span>Data Protection & Privacy</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-poppins font-extrabold text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Last updated: August 2026. AVRX Digital & Financial Solution (&ldquo;AVRX&rdquo;) is committed to protecting your privacy and security.
          </p>
        </div>

        <div className="glass-card p-6 sm:p-10 rounded-3xl border border-white/10 space-y-8 text-slate-300 text-sm leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-cyan-400" />
              1. Information We Collect
            </h2>
            <p>
              We collect information you voluntarily provide when inquiring about our digital development services, applying for financial loan facilitation, requesting GST & tax support, or purchasing digital assets. This includes contact information (name, phone, email, address in Ambikapur/Surguja/Chhattisgarh), business details, GST numbers, and financial documentation required by bank partners for loan underwriting.
            </p>
          </section>

          <section className="space-y-3 border-t border-white/10 pt-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-400" />
              2. How We Use Your Information
            </h2>
            <ul className="space-y-2 list-disc list-inside text-slate-300">
              <li>To deliver customized website, application, and SEO solutions.</li>
              <li>To submit loan pre-approval files directly to authorized banks and NBFC partners upon your consent.</li>
              <li>To prepare and e-file GST, ITR, and statutory compliance documents with GSTN and Income Tax Dept.</li>
              <li>To respond to inquiries via phone, email, or official WhatsApp channels.</li>
            </ul>
          </section>

          <section className="space-y-3 border-t border-white/10 pt-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Lock className="w-5 h-5 text-cyan-400" />
              3. Data Security & Storage
            </h2>
            <p>
              All client documents and communication records are encrypted in transit using 256-bit SSL encryption and stored in secure cloud environments with strict role-based access control. We never sell, rent, or monetize personal or financial data.
            </p>
          </section>

          <section className="space-y-3 border-t border-white/10 pt-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
              4. Contact Our Data Desk
            </h2>
            <p>
              For privacy queries or data deletion requests, contact AVRX Digital & Financial Solution, Waterpark Ambikapur, NH343, Surguja, Chhattisgarh, India. Email: <a href="mailto:support@avrx.in" className="text-cyan-400 hover:underline">support@avrx.in</a> | Phone: +91-9630661536.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
