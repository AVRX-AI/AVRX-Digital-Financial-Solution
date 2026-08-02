import React, { useState } from 'react';
import { Layout, Sparkles, Check, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { AIRecommendationResult } from '../../types';

export const AIWebsiteRecommendation: React.FC<{ onOpenConsultation: () => void }> = ({ onOpenConsultation }) => {
  const [businessType, setBusinessType] = useState('E-Commerce & Online Retail');
  const [budget, setBudget] = useState('₹25,000 - ₹50,000');
  const [city, setCity] = useState('New Delhi');
  const [goals, setGoals] = useState('Generate Online Leads & Rank #1 on Google');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AIRecommendationResult | null>(null);

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      let recPackage = 'AVRX Growth Catalyst Package';
      let webType = 'Custom Glassmorphic Business Portal / E-Commerce Store';
      let hostPlan = 'High-Speed NVMe Cloud VPS (1-Year Free SSL & Domain included)';
      let seoStrat = 'Complete Technical SEO + Local Google Business Profile Ranking';
      let mktPlan = 'Targeted Google Search & Meta Performance Max Lead Engine';
      let cost = '₹34,999 All-Inclusive';
      let time = '10 to 14 Business Days';

      if (budget.includes('₹100,000') || budget.includes('Enterprise')) {
        recPackage = 'AVRX Enterprise 360° AI Suite';
        webType = 'Custom React / Node.js PWA & Native App Hub';
        cost = '₹89,999 All-Inclusive';
        time = '3 to 4 Weeks';
      } else if (budget.includes('₹15,000')) {
        recPackage = 'AVRX Starter Express Website';
        webType = '5-Page Modern Responsive WordPress/Custom Business Site';
        cost = '₹4,999 All-Inclusive';
        time = '7 Business Days';
      }

      setResult({
        recommendedPackage: recPackage,
        websiteType: webType,
        hostingPlan: hostPlan,
        seoStrategy: seoStrat,
        marketingPlan: mktPlan,
        estimatedCost: cost,
        timeline: time,
        whyThisMatches: [
          `Customized for ${businessType} audience in ${city}`,
          `Matches your budget of ${budget} with guaranteed zero hidden costs`,
          `Optimized to fulfill your primary goal: "${goals}"`,
          'Includes 100/100 Core Web Vitals speed & free 1-year SSL certificate'
        ]
      });
      setLoading(false);
    }, 800);
  };

  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xl">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/30">
          <Layout className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">2. AI Website Recommendation Tool</h3>
          <p className="text-xs text-white/70">Get an instant AI architecture package, timeline & cost estimate for your project</p>
        </div>
      </div>

      <form onSubmit={handleGenerate} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label className="block text-xs font-semibold text-white/80 mb-1.5">Business Type</label>
          <select
            value={businessType}
            onChange={(e) => setBusinessType(e.target.value)}
            className="w-full px-3.5 py-3 rounded-xl bg-[#081B33] border border-white/20 text-white text-xs focus:outline-none focus:border-cyan-400"
          >
            <option>E-Commerce & Online Retail</option>
            <option>Corporate & Consulting Agency</option>
            <option>Healthcare / Clinic / Medical</option>
            <option>Real Estate / Architecture</option>
            <option>Education / EdTech / Institute</option>
            <option>Restaurant / Hospitality / Hotel</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-white/80 mb-1.5">Your Estimated Budget</label>
          <select
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full px-3.5 py-3 rounded-xl bg-[#081B33] border border-white/20 text-white text-xs focus:outline-none focus:border-cyan-400"
          >
            <option>₹15,000 - ₹25,000 (Starter)</option>
            <option>₹25,000 - ₹50,000 (Growth)</option>
            <option>₹50,000 - ₹100,000 (Pro Scale)</option>
            <option>₹100,000+ (Enterprise Suite)</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-white/80 mb-1.5">Target City / Market</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="e.g. Noida / New Delhi / Pan India"
            className="w-full px-3.5 py-3 rounded-xl bg-[#081B33] border border-white/20 text-white text-xs focus:outline-none focus:border-cyan-400"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-white/80 mb-1.5">Primary Growth Goal</label>
          <select
            value={goals}
            onChange={(e) => setGoals(e.target.value)}
            className="w-full px-3.5 py-3 rounded-xl bg-[#081B33] border border-white/20 text-white text-xs focus:outline-none focus:border-cyan-400"
          >
            <option>Generate Online Leads & Rank #1 on Google</option>
            <option>Sell Physical / Digital Products Online</option>
            <option>Establish High-Trust Corporate Identity</option>
            <option>Automate Customer Inquiries with AI Chat</option>
          </select>
        </div>

        <div className="sm:col-span-2 lg:col-span-4 pt-2">
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-[#0A66FF] hover:from-cyan-600 hover:to-blue-700 text-white font-bold text-sm shadow-lg shadow-cyan-500/30 transition-all flex items-center justify-center space-x-2"
          >
            {loading ? (
              <Sparkles className="w-5 h-5 animate-spin" />
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>Generate Instant AI Recommendation & Price</span>
              </>
            )}
          </button>
        </div>
      </form>

      {/* Output card */}
      {result && (
        <div className="mt-6 p-6 rounded-2xl bg-gradient-to-br from-[#081B33] to-[#0D2847] border border-cyan-400/40 space-y-5 animate-fadeIn">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
            <div>
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Recommended Architecture</span>
              <h4 className="text-xl font-extrabold text-white mt-1">{result.recommendedPackage}</h4>
            </div>
            <div className="text-right">
              <span className="text-xs text-white/60">Estimated Investment</span>
              <div className="text-2xl font-black text-emerald-400">{result.estimatedCost}</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
              <div className="text-[11px] font-semibold text-blue-300">WEBSITE DESIGN</div>
              <div className="text-xs font-bold text-white mt-1">{result.websiteType}</div>
            </div>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
              <div className="text-[11px] font-semibold text-purple-300">CLOUD HOSTING</div>
              <div className="text-xs font-bold text-white mt-1">{result.hostingPlan}</div>
            </div>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
              <div className="text-[11px] font-semibold text-cyan-300">SEO PACKAGE</div>
              <div className="text-xs font-bold text-white mt-1">{result.seoStrategy}</div>
            </div>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
              <div className="text-[11px] font-semibold text-emerald-300">DELIVERY TIMELINE</div>
              <div className="text-xs font-bold text-white mt-1">{result.timeline}</div>
            </div>
          </div>

          <div className="space-y-2 pt-1">
            <span className="text-xs font-semibold text-white/80">Why this package matches your goals:</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {result.whyThisMatches.map((reason, i) => (
                <div key={i} className="flex items-center space-x-2 text-xs text-white/80">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{reason}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2 flex items-center justify-end">
            <button
              onClick={onOpenConsultation}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#0A66FF] to-purple-600 text-white font-bold text-xs flex items-center space-x-2 shadow-lg shadow-blue-500/30 hover:scale-105 transition-all"
            >
              <span>Lock This Package Price</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
