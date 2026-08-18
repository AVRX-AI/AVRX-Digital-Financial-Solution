import React, { useState } from 'react';
import { 
  Sparkles, 
  Send, 
  CheckCircle2, 
  Code2, 
  DollarSign, 
  ShieldCheck, 
  FileText, 
  TrendingUp, 
  Cpu, 
  ArrowRight, 
  ChevronLeft, 
  Loader2, 
  MessageSquare, 
  Phone, 
  Mail,
  Lock,
  Headphones,
  Shield,
  Zap,
  Globe,
  Clock,
  Award
} from 'lucide-react';
import { submitLeadForm } from '../../utils/formSubmit';

interface SmartJourneyContactSectionProps {
  onNavigate: (page: string, slug?: string) => void;
}

export const SmartJourneyContactSection: React.FC<SmartJourneyContactSectionProps> = ({ onNavigate }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedService, setSelectedService] = useState<string>('Website & Mobile App');
  const [budgetRange, setBudgetRange] = useState<string>('₹25,000 - ₹50,000');
  const [preferredContact, setPreferredContact] = useState<'whatsapp' | 'call' | 'email'>('whatsapp');
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    requirement: '',
    website_hp: ''
  });

  const [loading, setLoading] = useState(false);
  const [submittedLeadId, setSubmittedLeadId] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const servicesList = [
    { title: 'Website & Mobile App', icon: Code2, desc: 'High-speed web platforms, mobile apps & e-commerce stores', tag: 'Fast 48h MVP' },
    { title: 'SEO & Growth Marketing', icon: TrendingUp, desc: 'Page-1 Google ranking, Meta & Google lead generation ads', tag: 'Guaranteed Rank' },
    { title: 'Business / Personal Loan', icon: DollarSign, desc: 'Collateral-free credit, home loans & PMEGP/MUDRA schemes', tag: '8.4% Onwards' },
    { title: 'Insurance Shield', icon: ShieldCheck, desc: 'Cashless medical, comprehensive motor & property cover', tag: 'IRDAI Certified' },
    { title: 'GST & Tax Compliance', icon: FileText, desc: 'Company incorporation, GST filings & maximized ITR returns', tag: 'CA Backed' },
    { title: 'AI & Custom Automation', icon: Cpu, desc: 'In-browser AI tools, CRM bots & automated workflows', tag: 'Smart Ops' }
  ];

  const budgetOptions = [
    '₹10,000 - ₹25,000',
    '₹25,000 - ₹50,000',
    '₹50,000 - ₹1,00,000',
    '₹1,00,000 - ₹5,00,000',
    '₹5,00,000+ / Enterprise Capital'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMessage('Please provide your full name and valid 10-digit mobile number.');
      return;
    }

    setErrorMessage('');
    setLoading(true);

    const result = await submitLeadForm({
      name: formData.name,
      phone: formData.phone,
      email: formData.email || `${formData.phone}@avrx-lead.in`,
      city: formData.city || 'Chhattisgarh / India',
      location: formData.city || 'India',
      serviceCategory: selectedService,
      subject: `Smart Journey Intake — ${selectedService} — ${formData.name}`,
      message: formData.requirement || `Requirement for ${selectedService} with budget ${budgetRange}`,
      sourcePage: 'Homepage Smart Journey Wizard',
      formType: 'Homepage 4-Step Smart Journey Form',
      website_hp: formData.website_hp,
      additionalFields: {
        'Selected Solution': selectedService,
        'Budget Tier': budgetRange,
        'Preferred Contact Method': preferredContact,
        'Client Location': formData.city
      }
    });

    setLoading(false);

    if (result.success) {
      setSubmittedLeadId(result.leadId || `AVRX-${Math.floor(100000 + Math.random() * 900000)}`);
      setCurrentStep(4);
    } else {
      setErrorMessage(result.message || 'Error submitting request. Please retry or contact us directly on WhatsApp.');
    }
  };

  return (
    <section id="start-journey" className="py-24 bg-[#050811] relative overflow-hidden border-t border-slate-800 select-none">
      
      {/* Background Glows */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-gradient-to-tr from-cyan-500/10 via-blue-500/10 to-transparent rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[700px] h-[500px] bg-purple-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800/80 pb-8">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold font-mono uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>CATEGORY 05 • INTERACTIVE INTAKE SYSTEM</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Start Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                AVRX Journey
              </span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Complete our interactive intake wizard. Our senior technical architects and financial advisors will review your roadmap and contact you within 2-4 business hours.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Direct Intake Active</span>
            </div>
            <a
              href="https://wa.me/919630661536?text=Hi%20AVRX%20Team%2C%20I%20want%20to%20discuss%20my%20business%20requirements."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 font-bold text-xs uppercase tracking-wider transition group shrink-0"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Quick WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Stretched 12-Column Full-Width Architecture Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Sidebar: Trust, Steps Overview & Guarantee Badges (4 Columns) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Step Navigation Pill Tracker */}
            <div className="p-6 rounded-3xl bg-slate-950/90 border border-slate-800 space-y-4 shadow-xl">
              <div className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center justify-between">
                <span>Intake Milestone</span>
                <span className="text-slate-400 font-normal">Step {currentStep} of 4</span>
              </div>

              <div className="space-y-3">
                {[
                  { num: 1, title: 'Select Service Type', desc: 'Define your core objective' },
                  { num: 2, title: 'Scope & Budget Tier', desc: 'Calibrate scale and timelines' },
                  { num: 3, title: 'Contact Information', desc: 'Secure transmission details' },
                  { num: 4, title: 'Roadmap Generation', desc: 'Architecture review & kickoff' }
                ].map((s) => {
                  const isDone = currentStep > s.num;
                  const isCurrent = currentStep === s.num;
                  return (
                    <div 
                      key={s.num}
                      onClick={() => {
                        if (isDone) setCurrentStep(s.num);
                      }}
                      className={`flex items-start gap-3.5 p-3 rounded-2xl transition border ${
                        isCurrent 
                          ? 'bg-slate-900 border-cyan-400/60 shadow-[0_0_15px_rgba(0,240,255,0.15)]' 
                          : isDone 
                            ? 'bg-slate-950/60 border-emerald-500/30 cursor-pointer hover:bg-slate-900/60' 
                            : 'bg-slate-950/30 border-slate-900 opacity-60'
                      }`}
                    >
                      <div className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-mono font-black shrink-0 ${
                        isDone 
                          ? 'bg-emerald-500 text-slate-950' 
                          : isCurrent 
                            ? 'bg-cyan-500 text-slate-950' 
                            : 'bg-slate-800 text-slate-400'
                      }`}>
                        {isDone ? '✓' : `0${s.num}`}
                      </div>
                      <div>
                        <div className={`text-xs font-bold ${isCurrent ? 'text-cyan-300' : isDone ? 'text-emerald-300' : 'text-slate-300'}`}>
                          {s.title}
                        </div>
                        <div className="text-[10px] text-slate-400 mt-0.5">
                          {s.desc}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* AVRX Service Guarantee Shield */}
            <div className="p-6 rounded-3xl bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border border-slate-800 space-y-4 shadow-xl">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
                <Shield className="w-4 h-4 text-cyan-400" />
                <span>Enterprise SLA Commitments</span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>2-4 Hour</strong> Guaranteed Response Window</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span><strong>100% Confidential</strong> Non-Disclosure Guarantee</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                  <span><strong>Zero Advance</strong> for Preliminary Discovery Call</span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>Direct Support:</span>
                <a href="tel:+919630661536" className="text-cyan-400 font-bold hover:underline">
                  +91 96306 61536
                </a>
              </div>
            </div>

          </div>

          {/* Right Main Panel: Full-Width Stretched Multi-Step Wizard (8 Columns) */}
          <div className="lg:col-span-8">
            <div className="w-full rounded-3xl bg-slate-950/95 border border-cyan-500/30 p-6 sm:p-10 backdrop-blur-2xl shadow-[0_0_50px_rgba(0,0,0,0.8)] space-y-8 min-h-[560px] flex flex-col justify-between">
              
              {/* Progress Top Bar */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono font-bold text-slate-400">
                  <span className="text-cyan-400 uppercase tracking-wider">STEP 0{currentStep} OF 04</span>
                  <span className="text-slate-300">
                    {currentStep === 1 ? 'Choose Primary Solution' : currentStep === 2 ? 'Requirements & Scale' : currentStep === 3 ? 'Contact & Schedule' : 'Confirmation'}
                  </span>
                </div>
                <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                  <div 
                    className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 transition-all duration-300"
                    style={{ width: `${(currentStep / 4) * 100}%` }}
                  />
                </div>
              </div>

              {/* STEP 1: What do you need? */}
              {currentStep === 1 && (
                <div className="space-y-6 animate-in fade-in duration-200 flex-1 flex flex-col justify-between">
                  <div className="space-y-1 text-left">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      Step 1: What type of solution do you need?
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400">
                      Select your primary category to assign specialized technical and financial managers.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {servicesList.map((srv, idx) => {
                      const Icon = srv.icon;
                      const isSelected = selectedService === srv.title;

                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setSelectedService(srv.title)}
                          className={`p-4 sm:p-5 rounded-2xl text-left transition-all border flex flex-col justify-between gap-3 cursor-pointer group ${
                            isSelected
                              ? 'bg-slate-900 border-cyan-400 shadow-[0_0_25px_rgba(0,240,255,0.25)] text-white scale-[1.02]'
                              : 'bg-slate-950/80 hover:bg-slate-900/90 border-slate-800 text-slate-400 hover:border-slate-700'
                          }`}
                        >
                          <div className="flex items-center justify-between w-full">
                            <div className={`p-2.5 rounded-xl bg-slate-950 border border-slate-800 ${isSelected ? 'text-cyan-400' : 'text-slate-500 group-hover:text-cyan-300'}`}>
                              <Icon className="w-5 h-5" />
                            </div>
                            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-slate-900 text-cyan-300 border border-slate-800">
                              {srv.tag}
                            </span>
                          </div>

                          <div>
                            <div className={`text-sm font-bold ${isSelected ? 'text-white' : 'text-slate-200'}`}>
                              {srv.title}
                            </div>
                            <div className="text-xs text-slate-400 mt-1 leading-snug">
                              {srv.desc}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  <div className="flex justify-end pt-4 border-t border-slate-800/80">
                    <button
                      onClick={() => setCurrentStep(2)}
                      className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 hover:brightness-110 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(0,240,255,0.3)] transition"
                    >
                      <span>Next: Project Details &amp; Budget</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Requirements & Scale */}
              {currentStep === 2 && (
                <div className="space-y-6 animate-in fade-in duration-200 flex-1 flex flex-col justify-between">
                  <div className="space-y-1 text-left">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      Step 2: Tell us about your requirement &amp; budget tier
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400">
                      Provide details about your project or funding requirement for a tailored proposal.
                    </p>
                  </div>

                  <div className="space-y-5">
                    <div className="space-y-2 text-left">
                      <label className="text-xs font-mono font-bold uppercase text-slate-300">
                        Describe your goals, requirements or deadlines:
                      </label>
                      <textarea
                        rows={4}
                        value={formData.requirement}
                        onChange={e => setFormData({ ...formData, requirement: e.target.value })}
                        placeholder="e.g. Need a mobile-friendly e-commerce site with UPI payment gateway, or looking for ₹25 Lakhs unsecured business loan for retail expansion..."
                        className="w-full p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-white text-sm focus:border-cyan-400 focus:outline-none transition"
                      />
                    </div>

                    <div className="space-y-2 text-left">
                      <label className="text-xs font-mono font-bold uppercase text-slate-300">
                        Target Budget or Capital Requirement:
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                        {budgetOptions.map((opt, i) => (
                          <button
                            key={i}
                            type="button"
                            onClick={() => setBudgetRange(opt)}
                            className={`p-3.5 rounded-xl text-xs font-bold border transition cursor-pointer text-left ${
                              budgetRange === opt
                                ? 'bg-cyan-500 text-slate-950 border-cyan-400 font-black shadow-md'
                                : 'bg-slate-900/90 text-slate-300 border-slate-800 hover:bg-slate-850 hover:border-slate-700'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
                    <button
                      onClick={() => setCurrentStep(1)}
                      className="px-5 py-3 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer transition"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>

                    <button
                      onClick={() => setCurrentStep(3)}
                      className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 hover:brightness-110 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(0,240,255,0.3)] transition"
                    >
                      <span>Next: Contact Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: Contact Details & Preferred Channel */}
              {currentStep === 3 && (
                <form onSubmit={handleSubmit} className="space-y-6 animate-in fade-in duration-200 flex-1 flex flex-col justify-between">
                  <div className="space-y-1 text-left">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      Step 3: Where should we send your project roadmap?
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400">
                      Your information is protected by 256-bit SSL encryption and never shared with 3rd parties.
                    </p>
                  </div>

                  {/* Honeypot field */}
                  <input
                    type="text"
                    name="website_hp"
                    value={formData.website_hp}
                    onChange={e => setFormData({ ...formData, website_hp: e.target.value })}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-bold uppercase text-slate-300">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ramesh Kumar"
                        className="w-full p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:border-cyan-400 focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-bold uppercase text-slate-300">Mobile / WhatsApp Number *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 9876543210"
                        className="w-full p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:border-cyan-400 focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-bold uppercase text-slate-300">Email Address (Optional)</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. ramesh@example.com"
                        className="w-full p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:border-cyan-400 focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-bold uppercase text-slate-300">City / State</label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={e => setFormData({ ...formData, city: e.target.value })}
                        placeholder="e.g. Raipur, Chhattisgarh"
                        className="w-full p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:border-cyan-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Preferred Contact Method */}
                  <div className="space-y-2 text-left">
                    <label className="text-xs font-mono font-bold uppercase text-slate-300">
                      Preferred Communication Mode:
                    </label>
                    <div className="grid grid-cols-3 gap-2.5">
                      <button
                        type="button"
                        onClick={() => setPreferredContact('whatsapp')}
                        className={`p-3 rounded-xl text-xs font-bold border transition cursor-pointer flex items-center justify-center gap-2 ${
                          preferredContact === 'whatsapp'
                            ? 'bg-emerald-500 text-slate-950 border-emerald-400 font-black shadow-md'
                            : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-850'
                        }`}
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>WhatsApp</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setPreferredContact('call')}
                        className={`p-3 rounded-xl text-xs font-bold border transition cursor-pointer flex items-center justify-center gap-2 ${
                          preferredContact === 'call'
                            ? 'bg-cyan-500 text-slate-950 border-cyan-400 font-black shadow-md'
                            : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-850'
                        }`}
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>Phone Call</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setPreferredContact('email')}
                        className={`p-3 rounded-xl text-xs font-bold border transition cursor-pointer flex items-center justify-center gap-2 ${
                          preferredContact === 'email'
                            ? 'bg-purple-500 text-slate-950 border-purple-400 font-black shadow-md'
                            : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-850'
                        }`}
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>Email</span>
                      </button>
                    </div>
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs text-left">
                      {errorMessage}
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      className="px-5 py-3 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>

                    <button
                      type="submit"
                      disabled={loading}
                      className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 hover:brightness-110 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-[0_0_25px_rgba(0,240,255,0.4)] disabled:opacity-50 transition"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Requirement</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

              {/* STEP 4: Confirmation Screen */}
              {currentStep === 4 && (
                <div className="text-center py-10 space-y-6 animate-in zoom-in-95 duration-200 flex-1 flex flex-col justify-center items-center">
                  <div className="p-4 w-16 h-16 rounded-3xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shadow-lg">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-3">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold">
                      <span>Lead Reference ID: {submittedLeadId}</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black text-white">
                      Your requirement is received by AVRX HQ.
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
                      We have logged your requirement for <strong className="text-cyan-300">{selectedService}</strong>. A dedicated AVRX technical &amp; financial architect will contact you on your preferred channel.
                    </p>
                  </div>

                  <div className="pt-4 flex flex-wrap justify-center gap-3">
                    <button
                      onClick={() => {
                        setCurrentStep(1);
                        setSubmittedLeadId(null);
                      }}
                      className="px-6 py-3 rounded-2xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-white text-xs font-bold cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>

                    <button
                      onClick={() => onNavigate('home')}
                      className="px-6 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold cursor-pointer shadow-lg"
                    >
                      Return to Homepage
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
