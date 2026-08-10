import React from 'react';
import { AlertCircle } from 'lucide-react';

export const DisclaimerBanner: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  return (
    <div className={`w-full bg-amber-500/10 border-t border-b border-amber-500/20 text-amber-300/90 ${compact ? 'py-2 px-4 text-xs' : 'py-3 px-6 text-xs sm:text-sm'}`}>
      <div className="max-w-7xl mx-auto flex items-start gap-2 sm:gap-3">
        <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong className="font-semibold text-amber-200">Legal & Regulatory Disclaimer:</strong> AVRX Digital & Financial Solution provides technological facilitation, document preparation, and advisory support. All financial, loan, tax, and insurance products are subject to eligibility criteria, documentation checks, authorized lender/provider underwriting policies, and applicable regulatory terms. AVRX does not guarantee unconditional loan approvals, fixed investment returns, or policy claims.
        </p>
      </div>
    </div>
  );
};
