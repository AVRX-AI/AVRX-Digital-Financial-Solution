import React from 'react';
import SeoMeta from '../components/common/SeoMeta';
import Breadcrumbs from '../components/common/Breadcrumbs';
import { RefreshCw, CheckCircle2, FileText } from 'lucide-react';

export default function RefundPolicyPage() {
  const breadcrumbs = [
    { name: 'Refund Policy', url: '/refund-policy' }
  ];

  return (
    <div className="bg-[#08090C] min-h-screen pt-28 pb-20">
      <SeoMeta
        title="Refund & Cancellation Policy | AVRX Digital & Financial Solution"
        description="Official Refund & Cancellation Policy for AVRX Digital & Financial Solution in Ambikapur, Chhattisgarh. Learn about service cancellation terms and digital licensing refunds."
        keywords="AVRX refund policy, service cancellation terms, digital product refund Ambikapur"
        canonicalUrl="https://avrx.in/refund-policy"
        breadcrumbsData={breadcrumbs}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Breadcrumbs items={breadcrumbs} />

        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Cancellation & Refund Policy</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-poppins font-extrabold text-white tracking-tight">
            Refund & Cancellation Policy
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Clear guidelines on project cancellations, digital product purchases, and service fee refunds at AVRX.
          </p>
        </div>

        <div className="glass-card p-6 sm:p-10 rounded-3xl border border-white/10 space-y-8 text-slate-300 text-sm leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-cyan-400" />
              1. Custom Web & App Development Services
            </h2>
            <p>
              Custom website design and application development services are billed on milestone basis as specified in client agreements. In case of project cancellation prior to milestone completion, unearned advance funds will be refunded pro-rata based on actual billable hours completed. Once a project milestone is reviewed, approved, and delivered, payments for that milestone are non-refundable.
            </p>
          </section>

          <section className="space-y-3 border-t border-white/10 pt-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <RefreshCw className="w-5 h-5 text-blue-400" />
              2. Digital Products & Software Licenses
            </h2>
            <p>
              For downloadable digital products (WordPress themes, source code starter kits, or plugins), refunds are available within 7 days of purchase if the file is proven defective and our technical support team is unable to resolve the defect.
            </p>
          </section>

          <section className="space-y-3 border-t border-white/10 pt-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
              3. Requesting a Refund
            </h2>
            <p>
              To initiate a cancellation or refund request, please email support@avrx.in with your invoice number, registered email, and reason for cancellation. Approved refunds will be processed to the original payment method within 5-7 working days.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
