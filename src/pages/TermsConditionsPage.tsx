import React from 'react';
import SeoMeta from '../components/common/SeoMeta';
import Breadcrumbs from '../components/common/Breadcrumbs';
import { FileText, ShieldAlert, CheckCircle2 } from 'lucide-react';

export default function TermsConditionsPage() {
  const breadcrumbs = [
    { name: 'Terms & Conditions', url: '/terms-and-conditions' }
  ];

  return (
    <div className="bg-[#08090C] min-h-screen pt-28 pb-20">
      <SeoMeta
        title="Terms & Conditions | AVRX Digital & Financial Solution"
        description="Official Terms and Conditions for AVRX Digital & Financial Solution in Ambikapur, Chhattisgarh. Read client service agreements, loan facilitation guidelines, and digital SLAs."
        keywords="AVRX terms and conditions, digital service agreement, loan facilitation terms Ambikapur"
        canonicalUrl="https://avrx.in/terms-and-conditions"
        breadcrumbsData={breadcrumbs}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Breadcrumbs items={breadcrumbs} />

        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
            <FileText className="w-3.5 h-3.5" />
            <span>Legal Agreement</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-poppins font-extrabold text-white tracking-tight">
            Terms & Conditions
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Please read these Terms & Conditions carefully before utilizing services provided by AVRX Digital & Financial Solution.
          </p>
        </div>

        <div className="glass-card p-6 sm:p-10 rounded-3xl border border-white/10 space-y-8 text-slate-300 text-sm leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-cyan-400" />
              1. Digital & Software Services SLA
            </h2>
            <p>
              AVRX provides custom website design, application development, hosting, and SEO services. All deliverables, timelines, and payment milestones are governed by project Statement of Works (SOW). Scope additions outside agreed SOWs are billed under standard developer hourly rates.
            </p>
          </section>

          <section className="space-y-3 border-t border-white/10 pt-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-amber-400" />
              2. Financial & Loan Facilitation Terms
            </h2>
            <p>
              AVRX acts as an authorized channel advisor and facilitator connecting clients with RBI-regulated banks, NBFCs, and government schemes. Loan approvals, interest rates, tenures, and dispatches are at the sole discretion of the respective lending institutions. AVRX does not charge upfront loan approval fees and never guarantees 100% approval.
            </p>
          </section>

          <section className="space-y-3 border-t border-white/10 pt-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-blue-400" />
              3. Tax & Legal Compliance
            </h2>
            <p>
              GST and Income Tax e-filings are prepared based on records submitted by the client. Clients are responsible for the accuracy and completeness of their financial books and tax returns.
            </p>
          </section>

          <section className="space-y-3 border-t border-white/10 pt-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-cyan-400" />
              4. Governing Law & Jurisdiction
            </h2>
            <p>
              These terms are governed by the laws of India. Any legal disputes are subject to the exclusive jurisdiction of the courts in Ambikapur / Surguja District, Chhattisgarh.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
