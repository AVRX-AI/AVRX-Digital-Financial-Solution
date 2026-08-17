import React from 'react';
import { SEO } from '../components/common/SEO';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050811] text-white pt-28 pb-20">
      <SEO title="Privacy Policy | AVRX Digital & Financial Solution" description="AVRX Privacy Policy and data protection standards." />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-slate-900/90 border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-6 text-slate-300 text-sm leading-relaxed">
        <h1 className="text-3xl font-black text-white">Privacy Policy</h1>
        <p className="text-xs font-mono text-cyan-400">Last updated: January 2026</p>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white">1. Information We Collect</h2>
          <p>AVRX Digital & Financial Solution ("AVRX", "we", "us") collects information necessary to deliver digital development, loan consultation, tax filing, and insurance quotes. This includes name, phone number, email, business location, and specific service parameters.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white">2. Data Usage & Protection</h2>
          <p>We use strict SSL encryption and backend access controls. Your data is never sold to third-party telemarketers. Information shared for loan or insurance quotes is transmitted exclusively to regulated underwriting banking partners and IRDAI insurers.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white">3. Contact Us</h2>
          <p>For privacy inquiries, email <a href="mailto:info@avrx.in" className="text-cyan-400 underline">info@avrx.in</a>.</p>
        </section>
      </div>
    </div>
  );
};
