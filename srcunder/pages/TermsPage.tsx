import React from 'react';
import { SEO } from '../components/common/SEO';

export const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050811] text-white pt-28 pb-20">
      <SEO title="Terms & Conditions | AVRX Digital & Financial Solution" description="AVRX Terms of Service and platform user agreement." />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-slate-900/90 border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-6 text-slate-300 text-sm leading-relaxed">
        <h1 className="text-3xl font-black text-white">Terms & Conditions</h1>
        <p className="text-xs font-mono text-cyan-400">Last updated: January 2026</p>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white">1. Service Scope</h2>
          <p>AVRX operates as an integrated digital technology provider, financial concierge, tax advisor, and insurance facilitator. All service scopes are governed by mutual proposal agreements.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white">2. User Responsibilities</h2>
          <p>Clients are required to provide authentic documentation for GST filings, income tax returns, and loan applications. Submission of falsified records will result in immediate termination.</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white">3. Platform Domain</h2>
          <p>The official domain is <span className="text-cyan-400 font-mono">avrx.in</span>.</p>
        </section>
      </div>
    </div>
  );
};
