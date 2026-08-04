import React from 'react';
import { Star, Quote, ShieldCheck, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ClientTestimonialsSection() {
  const testimonials = [
    {
      quote:
        "AVRX Digital completely reimagined our FinTech portal. Not only did they deliver a CRED-level aesthetic that boosted our conversion rate by 48%, but their CA team also handles our monthly GST filing without a single statutory error.",
      name: "Rajeshwar Singhania",
      role: "Managing Director & CFO, Apex Capital Markets",
      location: "Mumbai, India",
      rating: 5,
      tag: "WEBSITE + TAX SLA",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
    },
    {
      quote:
        "When our e-commerce platform required emergency ₹5 Crore working capital during Diwali peak season, AVRX facilitated a collateral-free loan sanction within 48 hours at just 8.9% interest. Exceptional financial advisory.",
      name: "Aarav Mehta",
      role: "Founder & CEO, LuxeRetail Direct",
      location: "Bangalore, India",
      rating: 5,
      tag: "₹5 CR BUSINESS LOAN",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    },
    {
      quote:
        "Their AI Website Health Checker identified our LCP speed bottlenecks immediately. We contracted AVRX for our SEO and application redesign, and our Google organic traffic tripled in just 90 days.",
      name: "Elena Rostova",
      role: "VP of Product, CloudScale AI",
      location: "Silicon Valley, USA",
      rating: 5,
      tag: "AI TOOLS + SEO",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <section className="py-24 bg-[#06070B] border-t border-white/10 relative overflow-hidden">
      {/* Back glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              <span>VERIFIED EXECUTIVE ENDORSEMENTS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-poppins font-extrabold text-white tracking-tight">
              What CFOs, Tech Leaders & <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
                Founders Say About Us
              </span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Read how our unified digital engineering, tax compliance, and instant capital solutions accelerate enterprise growth.
            </p>
          </div>

          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white text-sm font-semibold transition-all group self-start md:self-auto"
          >
            <span>View 50+ Case Studies & Work</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-blue-400" />
          </Link>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <div
              key={idx}
              className="glass-card p-8 rounded-3xl border border-white/10 bg-gradient-to-b from-[#0F121E]/90 to-[#08090C] shadow-2xl flex flex-col justify-between space-y-6 hover:border-blue-500/40 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-blue-500/15 text-blue-300 border border-blue-500/30 text-[10px] font-bold">
                    {test.tag}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-blue-500/40" />

                <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-normal">
                  "{test.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center gap-3.5">
                <img
                  src={test.avatar}
                  alt={test.name}
                  className="w-11 h-11 rounded-full object-cover border border-white/20"
                />
                <div>
                  <div className="text-sm font-bold text-white flex items-center gap-1.5">
                    <span>{test.name}</span>
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                  </div>
                  <div className="text-xs text-slate-400">{test.role}</div>
                  <div className="text-[11px] text-slate-500">{test.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
