import React from 'react';
import { SEO } from '../components/common/SEO';
import { DisclaimerBanner } from '../components/common/DisclaimerBanner';

export const DisclaimerPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050811] text-white pt-28 pb-20">
      <SEO title="Legal Disclaimer | AVRX Digital & Financial Solution" description="AVRX Legal Disclaimer regarding financial, tax, and insurance services." />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <h1 className="text-3xl font-black text-white text-center">Legal Disclaimer</h1>
        <DisclaimerBanner />
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-8 space-y-4 text-slate-300 text-sm leading-relaxed">
          <p>
            AVRX Digital & Financial Solution (avrx.in) does not make unconditional financial return guarantees or fixed loan approval assurances. Loan disbursal is governed solely by bank credit policies.
          </p>
        </div>
      </div>
    </div>
  );
};
