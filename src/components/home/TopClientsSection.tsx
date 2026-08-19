import React from 'react';
import { 
  Sparkles, 
  Building2, 
  ShieldCheck, 
  TrendingUp, 
  CheckCircle2,
  Star,
  HeartHandshake
} from 'lucide-react';

interface ClientItem {
  name: string;
  type: 'Business' | 'Individual' | 'Startup' | 'Enterprise';
  sector: string;
  location: string;
  result: string;
  iconBg: string;
  avatarText: string;
  tagColor: string;
  rating: number;
}

export const TopClientsSection: React.FC = () => {
  // Comprehensive list of businesses, enterprises, startups and individuals
  const clientsList: ClientItem[] = [
    {
      name: 'Shree Balaji Steels & Infra',
      type: 'Enterprise',
      sector: 'Manufacturing & Infra',
      location: 'Raipur, CG',
      result: '₹2.5 Cr Working Capital Sanctioned',
      iconBg: 'from-amber-500/20 to-orange-500/20 text-amber-400 border-amber-500/30',
      avatarText: 'SB',
      tagColor: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
      rating: 5
    },
    {
      name: 'Dr. Rajesh Sharma & Associates',
      type: 'Individual',
      sector: 'Medical Consulting',
      location: 'Raipur, CG',
      result: 'Personal ITR & Tax Optimization',
      iconBg: 'from-teal-500/20 to-emerald-500/20 text-teal-400 border-teal-500/30',
      avatarText: 'RS',
      tagColor: 'text-teal-400 bg-teal-500/10 border-teal-500/30',
      rating: 5
    },
    {
      name: 'Nexora HealthTech Pvt Ltd',
      type: 'Startup',
      sector: 'Healthcare SaaS',
      location: 'Bengaluru / Bilaspur',
      result: 'Full-Stack Web & Mobile App Built',
      iconBg: 'from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/30',
      avatarText: 'NX',
      tagColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
      rating: 5
    },
    {
      name: 'Priyanka Verma (Legal Advisory)',
      type: 'Individual',
      sector: 'Legal & Advisory',
      location: 'Raipur, CG',
      result: 'Family Health & ₹1.5 Cr Term Insurance',
      iconBg: 'from-indigo-500/20 to-purple-500/20 text-indigo-400 border-indigo-500/30',
      avatarText: 'PV',
      tagColor: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/30',
      rating: 5
    },
    {
      name: 'MahaMaya Agro Logistics',
      type: 'Business',
      sector: 'Agri Supply Chain',
      location: 'Durg, CG',
      result: 'GST & ROC Compliance Managed',
      iconBg: 'from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30',
      avatarText: 'MM',
      tagColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
      rating: 5
    },
    {
      name: 'Sunil Agrawal & Sons',
      type: 'Individual',
      sector: 'Property Investor',
      location: 'Korba, CG',
      result: '₹1.2 Cr Home Loan Sanctioned at 8.4%',
      iconBg: 'from-amber-500/20 to-yellow-500/20 text-amber-400 border-amber-500/30',
      avatarText: 'SA',
      tagColor: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
      rating: 5
    },
    {
      name: 'QuantumGrid Fleet Logistics',
      type: 'Enterprise',
      sector: 'Fleet & Cargo',
      location: 'Nagpur & Raipur',
      result: 'Commercial Fleet Insurance Hub',
      iconBg: 'from-purple-500/20 to-indigo-500/20 text-purple-400 border-purple-500/30',
      avatarText: 'QG',
      tagColor: 'text-purple-400 bg-purple-500/10 border-purple-500/30',
      rating: 5
    },
    {
      name: 'Aarav Fashion Boutique',
      type: 'Startup',
      sector: 'E-Commerce Store',
      location: 'Bilaspur, CG',
      result: 'E-Commerce Portal + Payment Gateway',
      iconBg: 'from-pink-500/20 to-rose-500/20 text-pink-400 border-pink-500/30',
      avatarText: 'AF',
      tagColor: 'text-pink-400 bg-pink-500/10 border-pink-500/30',
      rating: 5
    },
    {
      name: 'Vidhata Jewellers & Retail',
      type: 'Business',
      sector: 'Luxury Retail',
      location: 'Bhilai, CG',
      result: '₹85 Lakhs Business Expansion Loan',
      iconBg: 'from-yellow-500/20 to-amber-500/20 text-yellow-400 border-yellow-500/30',
      avatarText: 'VJ',
      tagColor: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/30',
      rating: 5
    },
    {
      name: 'Ananya Dubey',
      type: 'Individual',
      sector: 'IT Professional & NRI',
      location: 'Pune / Raipur',
      result: 'NRI Taxation & Asset Compliance',
      iconBg: 'from-purple-500/20 to-pink-500/20 text-purple-400 border-purple-500/30',
      avatarText: 'AD',
      tagColor: 'text-purple-400 bg-purple-500/10 border-purple-500/30',
      rating: 5
    },
    {
      name: 'Apex Infotech Solutions',
      type: 'Enterprise',
      sector: 'Cloud Services',
      location: 'Hyderabad & CG',
      result: 'Dedicated High-Speed Cloud Hosting',
      iconBg: 'from-blue-500/20 to-cyan-500/20 text-blue-400 border-blue-500/30',
      avatarText: 'AI',
      tagColor: 'text-blue-400 bg-blue-500/10 border-blue-500/30',
      rating: 5
    }
  ];

  // Tripled list for seamless 100% infinite looping
  const infiniteLoopList = [...clientsList, ...clientsList, ...clientsList];

  return (
    <section className="relative w-full py-20 sm:py-24 bg-[#030712] border-y border-slate-800/80 overflow-hidden select-none">
      
      {/* Background Decorative Glows */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      {/* Header Container */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8 mb-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-3.5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest shadow-[0_0_20px_rgba(0,240,255,0.15)]">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>5,000+ SATISFIED CLIENTS ACROSS INDIA</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400">Businesses & Individuals</span>
          </h2>
          
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            From emerging startups and local MSMEs to large industrial enterprises and salaried professionals, AVRX powers growth with speed, precision, and trust.
          </p>

          {/* Quick Metrics Bar - Stretched Wide */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto pt-4 text-left">
            <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 backdrop-blur-md flex items-center gap-3.5 hover:border-cyan-500/30 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-lg font-black text-white">5,000+</div>
                <div className="text-xs text-slate-400 font-medium">Clients Powered</div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 backdrop-blur-md flex items-center gap-3.5 hover:border-emerald-500/30 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <div className="text-lg font-black text-white">₹350+ Cr</div>
                <div className="text-xs text-slate-400 font-medium">Loans & Capital</div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 backdrop-blur-md flex items-center gap-3.5 hover:border-amber-500/30 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-lg font-black text-white">99.8%</div>
                <div className="text-xs text-slate-400 font-medium">Compliance Rate</div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 backdrop-blur-md flex items-center gap-3.5 hover:border-purple-500/30 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                <Star className="w-5 h-5 fill-purple-400" />
              </div>
              <div>
                <div className="text-lg font-black text-white">4.9 / 5</div>
                <div className="text-xs text-slate-400 font-medium">Google CSAT Score</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FULL-WIDTH STRETCHED Slider Showcase with Cinematic Edge Fade Masks */}
      <div className="relative w-full overflow-hidden py-3">
        
        {/* Left Fade Gradient Mask - Stretched wide */}
        <div className="absolute top-0 bottom-0 left-0 w-28 sm:w-64 bg-gradient-to-r from-[#030712] via-[#030712]/90 to-transparent z-20 pointer-events-none" />
        
        {/* Right Fade Gradient Mask - Stretched wide */}
        <div className="absolute top-0 bottom-0 right-0 w-28 sm:w-64 bg-gradient-to-l from-[#030712] via-[#030712]/90 to-transparent z-20 pointer-events-none" />

        {/* Continuous Loop Slider Track - Full Width */}
        <div className="relative w-full overflow-hidden group py-2">
          <div className="animate-marquee space-x-6 sm:space-x-8">
            {infiniteLoopList.map((client, idx) => (
              <div
                key={`client-${idx}`}
                className="w-[340px] sm:w-[400px] shrink-0 p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900/95 transition-all duration-300 backdrop-blur-xl shadow-2xl group/card cursor-default"
              >
                <div className="flex items-start justify-between gap-3.5 mb-4">
                  <div className="flex items-center gap-3.5">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${client.iconBg} border flex items-center justify-center font-black text-base shrink-0 shadow-inner`}>
                      {client.avatarText}
                    </div>
                    <div className="text-left">
                      <div className="text-base font-bold text-white group-hover/card:text-cyan-300 transition-colors truncate max-w-[190px]">
                        {client.name}
                      </div>
                      <div className="text-xs text-slate-400 flex items-center gap-2 mt-0.5">
                        <span className="font-medium">{client.sector}</span>
                        <span>•</span>
                        <span className="text-slate-400">{client.location}</span>
                      </div>
                    </div>
                  </div>

                  <span className={`px-3 py-1 rounded-full text-[11px] font-bold border uppercase tracking-wider ${client.tagColor} shrink-0`}>
                    {client.type}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/90 border border-slate-800/90 flex items-center justify-between text-xs sm:text-sm">
                  <div className="flex items-center gap-2 text-emerald-400 font-semibold truncate pr-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span className="truncate">{client.result}</span>
                  </div>
                  <div className="flex items-center text-amber-400 shrink-0 gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Trust Assurance Badge */}
      <div className="pt-8 text-center flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-400 relative z-10">
        <HeartHandshake className="w-4 h-4 text-cyan-400" />
        <span>Join thousands of flourishing enterprises & professionals growing with AVRX ecosystem.</span>
      </div>

    </section>
  );
};
