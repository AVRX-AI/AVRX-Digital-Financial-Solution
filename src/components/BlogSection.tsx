import React, { useState } from 'react';
import { BookOpen, Calendar, ArrowRight, User, Tag, CheckCircle2, X } from 'lucide-react';

export const BlogSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<any | null>(null);

  const articles = [
    {
      id: 1,
      title: 'How to Sanction a ₹5 Crore Collateral-Free MSME Loan Under CGTMSE in 2026',
      category: 'Financial Strategy',
      readTime: '6 min read',
      date: 'July 28, 2026',
      image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
      summary: 'A step-by-step CA guide on preparing Udyam registration, 3-year projected balance sheets, and clean CIBIL scores to unlock zero-collateral government loans.',
      fullContent: `
        The Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE) allows eligible Indian startups and MSMEs to secure collateral-free loans up to ₹5 Crores from major banks like SBI, HDFC, ICICI, and Bank of Baroda.
        
        Key Eligibility Checklist:
        1. Valid Udyam Registration with correct NIC Activity Codes.
        2. Clean CIBIL Commercial & Personal Credit Score above 720.
        3. At least 2 years of continuous ITR & GST filings with positive operating cash flows.
        4. Detailed CMA (Credit Monitoring Arrangement) Data & 3-Year Projected Balance Sheets certified by a Chartered Accountant.
        
        AVRX CA Tip: Avoid declaring zero profits for consecutive years to save tax if you plan to apply for MSME capital expansion. Banks evaluate Debt-Service Coverage Ratio (DSCR) based on declared taxable profits.
      `
    },
    {
      id: 2,
      title: 'Why Custom React Websites Outperform WordPress Templates in Google SEO (2026)',
      category: 'Digital Tech',
      readTime: '5 min read',
      date: 'July 22, 2026',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      summary: 'Explore why Google Core Web Vitals algorithms penalize bloated plugin websites and reward sub-100ms custom React/Vite web applications.',
      fullContent: `
        Google's ranking algorithm now heavily prioritizes Core Web Vitals: Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS).
        
        Why WordPress templates fail Core Web Vitals:
        - Bloated DOM trees from page builders like Elementor or Divi.
        - Heavy third-party scripts and database queries on shared hosting.
        - Unnecessary CSS/JS bundles loaded across every page.
        
        How AVRX Custom React & Node.js Architecture Wins:
        - Static Asset Edge Delivery via high-speed NVMe cloud servers.
        - Zero-bloat code with code-splitting and responsive image WebP compression.
        - 100/100 Lighthouse performance score guaranteed on launch.
      `
    },
    {
      id: 3,
      title: 'Top 5 Legal Tax Saving Strategies for Private Limited Companies & LLP in FY 2026-27',
      category: 'Tax Planning',
      readTime: '7 min read',
      date: 'July 15, 2026',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
      summary: 'Learn how to utilize Section 80JJAA, director remuneration structuring, and R&D expenditure to legally minimize corporate income tax liability.',
      fullContent: `
        Corporate tax planning is not about evasion — it is about utilizing every incentive provided under the Indian Income Tax Act.
        
        1. Section 80JJAA (Deduction for New Employment):
           Companies can claim a 30% additional deduction on employee cost for new workers hired during the financial year for 3 assessment years.
           
        2. Director Remuneration vs. Dividend Payouts:
           Structure director payouts as professional fees/salary to claim them as deductible business expenses rather than non-deductible dividend distributions.
           
        3. Full Input Tax Credit (ITC) Reconciliation:
           Ensure 100% matching of GSTR-2B with purchase invoices so you never pay excess GST out of pocket.
      `
    }
  ];

  return (
    <section id="blog" className="py-24 bg-[#081B33] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-bold mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>KNOWLEDGE HUB & INDUSTRY GUIDES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Latest Insights in <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-[#0A66FF]">Tech & Finance</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white/70">
            Actionable strategies written by our Senior Tech Architects & Chartered Accountants.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((art) => (
            <div
              key={art.id}
              onClick={() => setSelectedArticle(art)}
              className="group rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-400/50 overflow-hidden flex flex-col justify-between cursor-pointer transition-all duration-300 hover:-translate-y-1 shadow-xl"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081B33] via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#081B33]/80 backdrop-blur-md text-[10px] font-bold text-cyan-300 border border-white/10">
                    {art.category}
                  </span>
                  <span className="absolute bottom-3 right-3 text-[11px] font-semibold text-white/80 bg-black/60 px-2.5 py-1 rounded-lg">
                    {art.readTime}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-2 text-[11px] text-white/50 mb-2">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{art.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-3">
                    {art.title}
                  </h3>
                  <p className="text-xs text-white/70 leading-relaxed line-clamp-3">
                    {art.summary}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-white/10 flex items-center justify-between text-xs font-bold text-cyan-300 group-hover:text-white">
                <span>Read Complete Article</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#081B33] border border-cyan-400/40 rounded-3xl max-w-2xl w-full p-6 sm:p-8 max-h-[85vh] overflow-y-auto relative shadow-2xl">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-400/30 text-xs font-bold">
              {selectedArticle.category}
            </span>

            <h3 className="text-2xl font-black text-white mt-3 mb-4 leading-snug">
              {selectedArticle.title}
            </h3>

            <div className="flex items-center space-x-4 text-xs text-white/60 mb-6 pb-4 border-b border-white/10">
              <span>Published: {selectedArticle.date}</span>
              <span>•</span>
              <span>{selectedArticle.readTime}</span>
            </div>

            <div className="text-sm text-white/80 whitespace-pre-line leading-relaxed space-y-4">
              {selectedArticle.fullContent}
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#0A66FF] to-cyan-500 text-white font-bold text-xs"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
