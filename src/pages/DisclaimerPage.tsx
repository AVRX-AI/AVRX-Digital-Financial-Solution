import React from 'react';
import SeoMeta from '../components/common/SeoMeta';
import Breadcrumbs from '../components/common/Breadcrumbs';
import { ShieldAlert, Info, Landmark, ShieldCheck } from 'lucide-react';

export default function DisclaimerPage() {
  const breadcrumbs = [
    { name: 'Disclaimer', url: '/disclaimer' }
  ];

  return (
    <div className="bg-[#08090C] min-h-screen pt-28 pb-20">
      <SeoMeta
        title="Financial & Insurance Disclaimer | AVRX Digital & Financial Solution"
        description="Official Disclaimer for AVRX Digital & Financial Solution in Ambikapur, Chhattisgarh. Transparency details regarding loan facilitation, tax advisory, and insurance policies."
        keywords="AVRX disclaimer, financial disclaimer, loan approval disclosure, insurance terms Ambikapur"
        canonicalUrl="https://avrx.in/disclaimer"
        breadcrumbsData={breadcrumbs}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Breadcrumbs items={breadcrumbs} />

        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Important Legal Disclosures</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-poppins font-extrabold text-white tracking-tight">
            Financial & Insurance Disclaimer
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Transparency is our core value. Please read these disclosures regarding our financial loan and insurance facilitation services.
          </p>
        </div>

        <div className="glass-card p-6 sm:p-10 rounded-3xl border border-white/10 space-y-8 text-slate-300 text-sm leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Landmark className="w-5 h-5 text-cyan-400" />
              1. Financial Loans Disclaimer
            </h2>
            <p>
              AVRX Digital & Financial Solution is a financial service consultant and channel partner. AVRX is not a bank or a Non-Banking Financial Company (NBFC) itself. All loan approvals, interest rates, processing fees, loan amounts, tenures, and dispatches are subject to credit assessment, eligibility verification, and the final decision of respective RBI-registered lending institutions. AVRX does not guarantee loan sanctions or 100% approvals.
            </p>
          </section>

          <section className="space-y-3 border-t border-white/10 pt-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-blue-400" />
              2. Insurance Products Disclaimer
            </h2>
            <p>
              Insurance products (health, motor, home, shop, travel, and life insurance) displayed on our platform are provided by IRDAI-regulated insurance companies. Policy terms, coverage limits, exclusions, claim settlements, and premium rates are governed solely by the respective insurer&apos;s policy documents. AVRX does not guarantee claim approval or specific claim ratios.
            </p>
          </section>

          <section className="space-y-3 border-t border-white/10 pt-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Info className="w-5 h-5 text-amber-400" />
              3. Tax & Legal Advisory Disclaimer
            </h2>
            <p>
              Tax registration and filing guidance provided by AVRX is for information and statutory compliance purposes. Official tax liabilities, interest on late filings, and assessments are determined by relevant statutory authorities (GSTN & Income Tax Department of India).
            </p>
          </section>

          <section className="space-y-3 border-t border-white/10 pt-6 text-xs text-slate-400">
            <p>
              Address: AVRX Digital & Financial Solution, Waterpark Ambikapur, NH343, Surguja, Chhattisgarh, India - 497001. Contact: support@avrx.in | +91-9630661536.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
