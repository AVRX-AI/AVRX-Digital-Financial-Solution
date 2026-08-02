import React from 'react';
import { Star, Quote, CheckCircle2, ShieldCheck, Award } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Rajeshwar Bhargava',
      role: 'Founder & CEO',
      company: 'Vedic Organic Foods Pvt Ltd, Pune',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
      tag: '₹75L MSME Loan + E-Commerce Website',
      rating: 5,
      content: 'AVRX is a rare gem in India. Their tech team launched our high-speed e-commerce store in just 10 days, while their CA advisors helped us sanction a ₹75 Lakh collateral-free CGTMSE loan from SBI without a single bribe or delay.'
    },
    {
      id: 2,
      name: 'Dr. Anaya Kulkarni',
      role: 'Medical Director',
      company: 'MedPlus Multispecialty Clinics, Bangalore',
      image: 'https://images.unsplash.com/photo-1594824813571-600b3967963d?auto=format&fit=crop&w=300&q=80',
      tag: 'Healthcare Portal + Google Local SEO',
      rating: 5,
      content: 'We went from 15 online patient inquiries a month to over 450 within 60 days of launching our new AVRX website. We rank #1 on Google Maps across 4 Bangalore locations. Highly professional!'
    },
    {
      id: 3,
      name: 'Vikramaditya Singh',
      role: 'Managing Partner',
      company: 'Apex Software Consulting LLP, Noida',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
      tag: 'GST Reconciliation & Corporate Tax',
      rating: 5,
      content: 'Before AVRX, our previous CA missed several legitimate Input Tax Credit claims. AVRX conducted a thorough FY 2024-25 audit and got our company a ₹4.2 Lakh tax refund credited directly to our account.'
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-[#081B33] via-[#040D1A] to-[#081B33] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-bold mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>REAL STORIES FROM PAN-INDIA LEADERS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Trusted by Indian <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-[#0A66FF]">Founders & MSMEs</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white/70">
            Read how our combined digital and financial solutions have driven measurable revenue and tax savings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="p-7 rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-400/40 transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-cyan-500/10 text-cyan-300 border border-cyan-400/30">
                    {t.tag}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-white/20 mb-3" />

                <p className="text-xs sm:text-sm text-white/90 leading-relaxed mb-6 italic">
                  "{t.content}"
                </p>
              </div>

              <div className="flex items-center space-x-3 pt-4 border-t border-white/10">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-cyan-400"
                />
                <div>
                  <div className="text-sm font-bold text-white flex items-center space-x-1.5">
                    <span>{t.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div className="text-xs text-white/60">{t.role}, {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
