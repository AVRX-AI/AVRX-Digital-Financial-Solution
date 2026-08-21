import React, { useState } from 'react';
import { SEO } from '../components/common/SEO';
import { PartnersSlider } from '../components/common/PartnersSlider';
import { 
  Users, 
  Handshake, 
  CheckCircle2, 
  ArrowRight, 
  RefreshCw, 
  Send, 
  DollarSign, 
  Building, 
  ShieldCheck, 
  ChevronRight, 
  Sparkles,
  TrendingUp,
  Award,
  Wallet,
  Clock
} from 'lucide-react';
import { submitLeadForm } from '../utils/formSubmit';
import { SubmissionFeedbackModal } from '../components/common/SubmissionFeedbackModal';

interface PartnerPageProps {
  onNavigate?: (page: string, slug?: string) => void;
}

export const PartnerPage: React.FC<PartnerPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    partnerType: 'Referral Partner / Agent',
    experience: '',
    website_hp: ''
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [feedback, setFeedback] = useState<{
    isOpen: boolean;
    type: 'success' | 'error';
    leadId?: string;
    message?: string;
  }>({
    isOpen: false,
    type: 'success'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    setErrorMessage('');
    setLoading(true);

    const result = await submitLeadForm({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      city: formData.city,
      location: formData.city,
      serviceCategory: `Partner Application — ${formData.partnerType}`,
      subject: `AVRX Channel Partner Application — ${formData.name}`,
      message: formData.experience ? `Experience/Background: ${formData.experience}` : 'Partner Application Submitted',
      sourcePage: 'Partner With Us Page',
      formType: 'Partner Application Form',
      website_hp: formData.website_hp,
      additionalFields: {
        'Partnership Model': formData.partnerType,
        'Experience & Background': formData.experience || 'Not specified'
      }
    });

    setLoading(false);

    if (result.success) {
      setFeedback({
        isOpen: true,
        type: 'success',
        leadId: result.leadId,
        message: result.message
      });
      setFormData({
        name: '',
        phone: '',
        email: '',
        city: '',
        partnerType: 'Referral Partner / Agent',
        experience: '',
        website_hp: ''
      });
    } else {
      setErrorMessage(result.message || 'Unable to submit your application right now.');
      setFeedback({
        isOpen: true,
        type: 'error',
        message: result.message
      });
    }
  };

  const partnerPillars = [
    {
      icon: Users,
      color: 'text-cyan-400',
      badge: 'Zero Investment',
      title: 'Referral Agents & Affiliates',
      desc: 'Introduce individuals and businesses seeking custom websites, business loans, GST filings, or insurance and earn attractive recurring referral payouts on every successful closure.'
    },
    {
      icon: DollarSign,
      color: 'text-emerald-400',
      badge: 'High Ticket Payouts',
      title: 'Loan DSAs & Financial Connectors',
      desc: 'Channel personal, business, home, and government subsidy loan applications through AVRX’s 30+ lending institutional network with transparent commission disbursals.'
    },
    {
      icon: Building,
      color: 'text-amber-400',
      badge: 'Territory Exclusivity',
      title: 'City & Regional Franchise Centers',
      desc: 'Establish an authorized AVRX Digital & Financial Solution physical center in your district with end-to-end operational software, branding kits, and customer lead generation support.'
    },
    {
      icon: Handshake,
      color: 'text-purple-400',
      badge: 'Collaborative Tech',
      title: 'Chartered Accountants & Legal Allies',
      desc: 'Legal and tax professionals can leverage AVRX’s digital infrastructure to automate client filing workflows, web solutions, and software integrations with seamless co-branding.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#050811] text-white pt-24 pb-20 selection:bg-emerald-500 selection:text-slate-950">
      <SEO
        title="Partner With Us | Channel Partner & Franchise Opportunities | AVRX"
        description="Become an AVRX Digital & Financial partner. Expand your earning potential with referral commissions across websites, loans, tax filings, and insurance."
      />

      {/* Main Container - Stretched Widescreen Layout */}
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="pt-4 pb-6 flex items-center gap-2 text-xs text-slate-400">
          <button 
            onClick={() => onNavigate ? onNavigate('home') : null}
            className="hover:text-emerald-400 transition-colors"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-emerald-300 font-semibold">Partner With Us</span>
        </nav>

        {/* 1. Page Hero Section */}
        <div className="text-center max-w-4xl mx-auto my-8 space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(16,185,129,0.15)]">
            <Handshake className="w-3.5 h-3.5 text-emerald-400" />
            <span>GROWTH ECOSYSTEM PARTNERSHIP</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight">
            Partner with <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">AVRX Enterprises.</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-lg leading-relaxed max-w-3xl mx-auto">
            Join India’s premier unified digital and financial growth ecosystem as a certified referral agent, loan DSA, regional franchise owner, or corporate technology affiliate.
          </p>
        </div>

        {/* 2. Partners Slider */}
        <div className="my-10">
          <PartnersSlider 
            title="Channel & Enterprise Network"
            badgeText="EXPANSION ALLIANCES"
            description="Powering mutual growth across banking, digital engineering, and statutory services."
            variant="compact"
          />
        </div>

        {/* 3. 4 Partner Models Grid */}
        <div className="my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {partnerPillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-4 hover:border-emerald-500/40 transition hover:shadow-[0_10px_30px_rgba(16,185,129,0.1)] flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 w-fit">
                      <Icon className={`w-6 h-6 ${item.color}`} />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 text-[10px] font-mono font-bold">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white">{item.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* 4. Partner Value Proposition */}
        <div className="my-20 bg-gradient-to-br from-[#04120a] via-[#070b14] to-[#02050f] border border-emerald-500/30 rounded-3xl p-6 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] relative overflow-hidden">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>THE PARTNER ADVANTAGE</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-black text-white">
              Why Partner with AVRX?
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-2 text-center">
              <div className="text-emerald-400 font-mono font-bold text-xs">01 / FAST PAYOUTS</div>
              <h4 className="font-bold text-white text-sm">Weekly Commission Cycles</h4>
              <p className="text-xs text-slate-400">Direct bank transfers with automated statements and zero delayed dues.</p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-2 text-center">
              <div className="text-emerald-400 font-mono font-bold text-xs">02 / PORTFOLIO BREADTH</div>
              <h4 className="font-bold text-white text-sm">30+ Market Offerings</h4>
              <p className="text-xs text-slate-400">Cross-sell websites, loans, tax filings, insurance, and hosting seamlessly.</p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-2 text-center">
              <div className="text-emerald-400 font-mono font-bold text-xs">03 / DEDICATED RM</div>
              <h4 className="font-bold text-white text-sm">Personal Relationship Desk</h4>
              <p className="text-xs text-slate-400">Direct relationship manager to expedite client proposals and loan sanctions.</p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-2 text-center">
              <div className="text-emerald-400 font-mono font-bold text-xs">04 / BRAND BACKING</div>
              <h4 className="font-bold text-white text-sm">Enterprise Marketing Kits</h4>
              <p className="text-xs text-slate-400">Free digital brochures, co-branded landing pages, and lead tracking tools.</p>
            </div>
          </div>
        </div>

        {/* 5. Partner Application Form */}
        <div className="max-w-3xl mx-auto my-16 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="text-center space-y-1">
              <h3 className="text-2xl sm:text-3xl font-black text-white">Apply for AVRX Partnership</h3>
              <p className="text-xs text-slate-400">Complete your details to receive an instant partnership kit and callback.</p>
            </div>

            {/* Hidden Honeypot Field */}
            <input
              type="text"
              name="website_hp"
              value={formData.website_hp}
              onChange={e => setFormData({ ...formData, website_hp: e.target.value })}
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
            />

            {errorMessage && (
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs font-semibold">
                {errorMessage}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300 uppercase">Your Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Vikram Singhania"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-400"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300 uppercase">Phone / WhatsApp Number *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300 uppercase">Email Address *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  placeholder="vikram@example.com"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-400"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300 uppercase">City & State *</label>
                <input
                  type="text"
                  required
                  value={formData.city}
                  onChange={e => setFormData({ ...formData, city: e.target.value })}
                  placeholder="e.g. Ambikapur, Chhattisgarh"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-400"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300 uppercase">Preferred Partnership Track</label>
              <select
                value={formData.partnerType}
                onChange={e => setFormData({ ...formData, partnerType: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-400"
              >
                <option value="Referral Partner / Agent">Referral Partner / Agent (Zero Investment)</option>
                <option value="Loan DSA / Financial Connector">Loan DSA / Financial Connector</option>
                <option value="City / Regional Franchise Center">City / Regional Franchise Center</option>
                <option value="CA / Tax / Legal Technology Affiliate">CA / Tax / Legal Technology Affiliate</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300 uppercase">Current Business / Experience (Optional)</label>
              <textarea
                rows={3}
                value={formData.experience}
                onChange={e => setFormData({ ...formData, experience: e.target.value })}
                placeholder="Tell us briefly about your current professional background or client network..."
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-emerald-400"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-slate-950 font-black text-sm rounded-2xl shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:scale-[1.02] transition flex items-center justify-center gap-2 cursor-pointer"
            >
              {loading ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Transmitting Application...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Submit Partner Application</span>
                </>
              )}
            </button>
          </form>
        </div>

      </div>

      <SubmissionFeedbackModal
        isOpen={feedback.isOpen}
        type={feedback.type}
        leadId={feedback.leadId}
        message={feedback.message}
        onClose={() => setFeedback(prev => ({ ...prev, isOpen: false }))}
        onRetry={() => setFeedback(prev => ({ ...prev, isOpen: false }))}
      />
    </div>
  );
};
