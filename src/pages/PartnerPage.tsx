import React, { useState } from 'react';
import { SEO } from '../components/common/SEO';
import { Users, Handshake, CheckCircle2, ArrowRight, RefreshCw, Send, DollarSign, Building } from 'lucide-react';

export const PartnerPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    partnerType: 'Referral Partner / Agent',
    experience: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);

    try {
      await fetch('/api/partner', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      setSubmitted(true);
    } catch (err) {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050811] text-white pt-28 pb-20">
      <SEO
        title="Partner With Us | Channel Partner & Franchise Opportunities | AVRX"
        description="Become an AVRX Digital & Financial partner. Expand your earning potential with referral commissions across websites, loans, tax filings, and insurance."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
            <Handshake className="w-4 h-4 text-emerald-400" />
            <span>Growth Ecosystem Partnership</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white">
            Partner With <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">AVRX</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg">
            Join India's fastest-growing digital and financial network as a referral partner, DSA, franchise owner, or technology affiliate.
          </p>
        </div>

        {/* 4 Partner Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-4">
            <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 w-fit text-cyan-400">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Referral Agents</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Earn attractive recurring commissions simply by introducing clients who need websites, loans, tax filings, or insurance.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-4">
            <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 w-fit text-emerald-400">
              <DollarSign className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Loan DSAs</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Partner with AVRX to disburse personal, business, and home loans through top banking partners with fast payout cycles.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-4">
            <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 w-fit text-amber-400">
              <Building className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">City Franchise</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Operate an exclusive AVRX Digital & Financial Solution center in your city with full marketing and operational backing.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-4">
            <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/30 w-fit text-purple-400">
              <Handshake className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">CA & Tax Affiliates</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Chartered Accountants & advocates can leverage AVRX digital infrastructure to scale client filings with zero manual burden.
            </p>
          </div>

        </div>

        {/* Partner Application Form */}
        <div className="max-w-3xl mx-auto bg-slate-900/90 border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
              <h3 className="text-2xl font-bold text-white">Partner Application Submitted!</h3>
              <p className="text-slate-300 text-sm">
                Our partner relations team will evaluate your profile and contact you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-2xl font-bold text-white text-center">Apply for AVRX Partnership</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300 uppercase">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Full name"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-400"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300 uppercase">Phone Number *</label>
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
                    placeholder="partner@example.com"
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
                    placeholder="e.g. Pune, Maharashtra"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-400"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300 uppercase">Partnership Type</label>
                <select
                  value={formData.partnerType}
                  onChange={e => setFormData({ ...formData, partnerType: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-400"
                >
                  <option value="Referral Partner / Agent">Referral Partner / Agent</option>
                  <option value="Loan DSA / Financial Consultant">Loan DSA / Financial Consultant</option>
                  <option value="City Franchise Center">City Franchise Center</option>
                  <option value="CA / Tax Advocate Partner">CA / Tax Advocate Partner</option>
                  <option value="Technology / Software Affiliate">Technology / Software Affiliate</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300 uppercase">Brief Background / Experience</label>
                <textarea
                  rows={3}
                  value={formData.experience}
                  onChange={e => setFormData({ ...formData, experience: e.target.value })}
                  placeholder="Tell us briefly about your network or current business..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-emerald-400"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-gradient-to-r from-emerald-400 to-cyan-500 text-slate-950 font-bold text-sm rounded-2xl shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:scale-105 transition flex items-center justify-center gap-2"
              >
                {loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                <span>Submit Partner Application</span>
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
