import React, { useState } from 'react';
import { ProjectItem } from '../../types/projectTypes';
import { 
  Check, 
  Star, 
  ArrowRight, 
  ShoppingCart, 
  Search, 
  ShieldCheck, 
  ChevronRight, 
  Sparkles,
  Calculator,
  Calendar,
  Layers,
  Award,
  Zap,
  Phone,
  Mail,
  Sliders,
  Plus,
  Minus,
  CheckCircle2,
  Lock,
  ExternalLink,
  MapPin,
  Clock,
  Users,
  CreditCard,
  Building,
  Heart,
  Eye
} from 'lucide-react';

interface WebsiteInteractivePreviewProps {
  project: ProjectItem;
  onOpenContact?: (projectName: string) => void;
}

export const WebsiteInteractivePreview: React.FC<WebsiteInteractivePreviewProps> = ({ 
  project,
  onOpenContact 
}) => {
  const data = project.websiteData;
  const [activeNavTab, setActiveNavTab] = useState<string>(data?.navigationItems[0] || 'Home');
  
  // Interactive E-Commerce Cart state
  const [cartItems, setCartItems] = useState<{ id: string; title: string; price: number; qty: number; image?: string }[]>([
    { 
      id: 'prod-1', 
      title: 'Obsidian Chronograph Automatic Watch', 
      price: 14999, 
      qty: 1,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80'
    }
  ]);
  const [promoCode, setPromoCode] = useState<string>('');
  const [discountApplied, setDiscountApplied] = useState<boolean>(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);
  const [checkoutComplete, setCheckoutComplete] = useState<boolean>(false);

  // Interactive Loan Calculator state
  const [loanAmount, setLoanAmount] = useState<number>(2500000);
  const [loanTenure, setLoanTenure] = useState<number>(5);
  const [interestRate, setInterestRate] = useState<number>(9.25);

  // Interactive Table / Tour Reservation state
  const [bookingDate, setBookingDate] = useState<string>('2026-03-20');
  const [partySize, setPartySize] = useState<number>(2);
  const [seatingPreference, setSeatingPreference] = useState<string>('Terrace Lounge');
  const [bookingSuccess, setBookingSuccess] = useState<boolean>(false);

  // Interactive Property Filter state
  const [propertyBhk, setPropertyBhk] = useState<string>('all');
  const [maxBudget, setMaxBudget] = useState<number>(150000000);

  // Interactive Doctor Booking state
  const [doctorSpecialty, setDoctorSpecialty] = useState<string>('Cardiology');
  const [consultSlot, setConsultSlot] = useState<string>('Today 4:30 PM (Video)');
  const [consultBooked, setConsultBooked] = useState<boolean>(false);

  // Interactive Cloud ROI Calculator state
  const [cloudBudget, setCloudBudget] = useState<number>(500000);

  // Calculate EMI
  const monthlyRate = interestRate / 12 / 100;
  const totalMonths = loanTenure * 12;
  const emi = Math.round(
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
    (Math.pow(1 + monthlyRate, totalMonths) - 1)
  );
  const totalPayment = emi * totalMonths;
  const totalInterest = totalPayment - loanAmount;

  // Cart helper
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  const discountAmount = discountApplied ? Math.round(subtotal * 0.15) : 0;
  const grandTotal = Math.max(0, subtotal - discountAmount);

  const handleAddToCart = (product: any) => {
    const rawPrice = parseInt(String(product.price).replace(/\D/g, '')) || 4999;
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...prev, { id: product.id, title: product.title, price: rawPrice, qty: 1, image: product.image }];
    });
  };

  if (!data) {
    return (
      <div className="p-12 text-center text-slate-400">
        <Sparkles className="w-8 h-8 text-cyan-400 mx-auto mb-2 animate-spin" />
        <p>Interactive preview data initializing...</p>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#03060f] text-slate-100 font-sans selection:bg-cyan-500 selection:text-black">
      
      {/* 1. MOCK WEBSITE HEADER & NAVIGATION */}
      <header className="sticky top-0 z-30 bg-[#060a17]/95 backdrop-blur-md border-b border-slate-800 px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4">
        
        {/* Brand logo & name */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-400 to-blue-600 flex items-center justify-center font-black text-xs text-slate-950 shadow-md">
            {project.client.charAt(0)}
          </div>
          <div>
            <div className="text-sm font-extrabold text-white tracking-tight">{project.client}</div>
            <div className="text-[10px] text-cyan-400 font-mono hidden sm:block">Verified Live Portal</div>
          </div>
        </div>

        {/* Navigation items */}
        <nav className="hidden md:flex items-center gap-5 text-xs font-medium text-slate-300">
          {data.navigationItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setActiveNavTab(item)}
              className={`hover:text-cyan-300 transition ${activeNavTab === item ? 'text-cyan-400 font-bold' : ''}`}
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Header Right Action */}
        <div className="flex items-center gap-2.5">
          {project.projectType === 'e-commerce' && (
            <button
              onClick={() => setIsCheckoutOpen(true)}
              className="relative p-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 hover:text-white"
              title="View Shopping Bag"
            >
              <ShoppingCart className="w-4 h-4 text-cyan-400" />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-500 text-[10px] font-bold text-white flex items-center justify-center">
                  {cartItems.reduce((sum, item) => sum + item.qty, 0)}
                </span>
              )}
            </button>
          )}

          <button
            onClick={() => onOpenContact ? onOpenContact(project.title) : null}
            className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-black text-xs hover:brightness-110 shadow-sm transition"
          >
            {data.hero.ctaPrimary}
          </button>
        </div>

      </header>

      {/* 2. REALISTIC WEBSITE HERO SECTION WITH PHOTOGRAPHY */}
      <section className="relative py-12 sm:py-20 px-4 sm:px-8 overflow-hidden border-b border-slate-800">
        
        {/* Background Curated Photography */}
        {data.hero.heroImage && (
          <div className="absolute inset-0 z-0">
            <img 
              src={data.hero.heroImage} 
              alt={data.hero.title}
              className="w-full h-full object-cover brightness-[0.22] contrast-[1.1]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#03060f] via-[#03060f]/80 to-transparent" />
          </div>
        )}

        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-black uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>{data.hero.badge}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            {data.hero.title}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300">
              {data.hero.highlightWord}
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {data.hero.subtitle}
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => onOpenContact ? onOpenContact(project.title) : null}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 text-slate-950 font-black text-xs sm:text-sm hover:brightness-110 shadow-[0_0_20px_rgba(0,240,255,0.4)] transition flex items-center gap-2"
            >
              <span>{data.hero.ctaPrimary}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                const el = document.getElementById('interactive-module-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-5 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-slate-200 font-semibold text-xs sm:text-sm hover:border-cyan-500/50 transition"
            >
              {data.hero.ctaSecondary}
            </button>
          </div>

          {/* Hero Stats Pill */}
          <div className="grid grid-cols-3 gap-3 max-w-2xl mx-auto pt-6">
            {data.hero.stats.map((s, idx) => (
              <div key={idx} className="p-3 rounded-2xl bg-slate-950/80 backdrop-blur-md border border-slate-800">
                <div className="text-base sm:text-xl font-black text-cyan-400">{s.value}</div>
                <div className="text-[11px] text-slate-400 font-medium">{s.label}</div>
              </div>
            ))}
          </div>

        </div>

      </section>

      {/* 3. INTERACTIVE FUNCTIONAL MODULE (LOAN CALCULATOR / CART / TABLE BOOKING / PROPERTY FILTER) */}
      <section id="interactive-module-section" className="py-12 px-4 sm:px-8 border-b border-slate-800 bg-[#050916]">
        <div className="max-w-4xl mx-auto space-y-6">
          
          <div className="text-center space-y-2">
            <span className="px-3 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-[10px] font-black uppercase tracking-widest">
              ● LIVE SIMULATOR ENGINE
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-white">
              {data.interactiveModule?.title || 'Interactive Product Demonstration'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
              {data.interactiveModule?.description || 'Test the real-time responsive logic and calculations below.'}
            </p>
          </div>

          {/* A. E-COMMERCE CART SIMULATOR */}
          {project.projectType === 'e-commerce' && (
            <div className="rounded-2xl bg-slate-900/90 border border-pink-500/30 p-6 space-y-6 shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="font-black text-white text-sm flex items-center gap-2">
                  <ShoppingCart className="w-4 h-4 text-pink-400" />
                  <span>Interactive Shopping Bag Simulator</span>
                </div>
                <span className="text-xs text-pink-400 font-mono">Promo: AVRX15 (15% OFF)</span>
              </div>

              {/* Cart items list */}
              <div className="space-y-3">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800">
                    <div className="flex items-center gap-3">
                      {item.image && (
                        <img src={item.image} alt={item.title} className="w-12 h-12 rounded-lg object-cover border border-slate-800" referrerPolicy="no-referrer" />
                      )}
                      <div>
                        <div className="font-bold text-white text-xs">{item.title}</div>
                        <div className="text-[11px] text-cyan-400 font-mono">₹{item.price.toLocaleString()} each</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          setCartItems(prev => prev.map(i => i.id === item.id ? { ...i, qty: Math.max(1, i.qty - 1) } : i));
                        }}
                        className="w-6 h-6 rounded-md bg-slate-800 text-slate-300 flex items-center justify-center hover:bg-slate-700"
                      >
                        -
                      </button>
                      <span className="text-xs font-mono font-bold w-6 text-center">{item.qty}</span>
                      <button
                        onClick={() => {
                          setCartItems(prev => prev.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i));
                        }}
                        className="w-6 h-6 rounded-md bg-slate-800 text-slate-300 flex items-center justify-center hover:bg-slate-700"
                      >
                        +
                      </button>
                      <div className="text-xs font-black text-white font-mono ml-3">
                        ₹{(item.price * item.qty).toLocaleString()}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Promo code bar */}
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter Promo Code (Try: AVRX15)"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-1 px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white uppercase font-mono placeholder:normal-case placeholder:text-slate-600 focus:outline-none focus:border-pink-400"
                />
                <button
                  onClick={() => {
                    if (promoCode.trim().toUpperCase() === 'AVRX15') {
                      setDiscountApplied(true);
                    }
                  }}
                  className="px-4 py-2 rounded-xl bg-pink-500 text-slate-950 font-bold text-xs hover:bg-pink-400 transition"
                >
                  Apply Code
                </button>
              </div>

              {discountApplied && (
                <div className="p-2.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-semibold flex items-center justify-between">
                  <span>✓ Promo code AVRX15 applied (15% Savings)</span>
                  <span className="font-mono font-bold">-₹{discountAmount.toLocaleString()}</span>
                </div>
              )}

              {/* Summary and Checkout */}
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-[11px] text-slate-400">Total Payable:</div>
                  <div className="text-xl font-black text-pink-400 font-mono">₹{grandTotal.toLocaleString()}</div>
                </div>

                <button
                  onClick={() => {
                    setCheckoutComplete(true);
                    setTimeout(() => setCheckoutComplete(false), 3000);
                  }}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-indigo-500 text-white font-black text-xs hover:brightness-110 shadow-md transition flex items-center gap-2"
                >
                  <Lock className="w-3.5 h-3.5" />
                  <span>{checkoutComplete ? 'Order Placed ✓' : 'Instant 1-Click Checkout'}</span>
                </button>
              </div>
            </div>
          )}

          {/* B. FINTECH / LOAN EMI SIMULATOR */}
          {project.projectType === 'financial-portal' && (
            <div className="rounded-2xl bg-slate-900/90 border border-cyan-500/30 p-6 space-y-6 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Sliders (2 cols) */}
                <div className="md:col-span-2 space-y-5">
                  <div>
                    <div className="flex justify-between text-xs font-semibold text-slate-300 mb-2">
                      <span>Loan Amount:</span>
                      <span className="text-cyan-400 font-bold font-mono">₹ {(loanAmount / 100000).toFixed(2)} Lakhs</span>
                    </div>
                    <input 
                      type="range" 
                      min={100000} 
                      max={10000000} 
                      step={50000}
                      value={loanAmount} 
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                      className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-semibold text-slate-300 mb-2">
                      <span>Tenure:</span>
                      <span className="text-cyan-400 font-bold font-mono">{loanTenure} Years ({totalMonths} Months)</span>
                    </div>
                    <input 
                      type="range" 
                      min={1} 
                      max={20} 
                      step={1}
                      value={loanTenure} 
                      onChange={(e) => setLoanTenure(Number(e.target.value))}
                      className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-semibold text-slate-300 mb-2">
                      <span>Interest Rate:</span>
                      <span className="text-cyan-400 font-bold font-mono">{interestRate}% p.a.</span>
                    </div>
                    <input 
                      type="range" 
                      min={7.5} 
                      max={16.0} 
                      step={0.25}
                      value={interestRate} 
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                    />
                  </div>
                </div>

                {/* Calculation Summary Card (1 col) */}
                <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="text-[10px] uppercase font-bold text-slate-400">Monthly EMI</div>
                    <div className="text-2xl font-black text-cyan-400 font-mono">₹ {emi.toLocaleString()}</div>
                    <div className="text-[10px] text-slate-500">Principal: ₹{(loanAmount).toLocaleString()}</div>
                    <div className="text-[10px] text-slate-500">Total Interest: ₹{totalInterest.toLocaleString()}</div>
                  </div>

                  <button
                    onClick={() => onOpenContact ? onOpenContact(project.title) : null}
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-black text-xs hover:brightness-110 shadow-sm transition"
                  >
                    Apply for ₹{(loanAmount / 100000).toFixed(0)}L Loan
                  </button>
                </div>

              </div>
            </div>
          )}

          {/* C. RESTAURANT / TABLE RESERVATION SIMULATOR */}
          {project.subcategory === 'Hospitality & Dining' && (
            <div className="rounded-2xl bg-slate-900/90 border border-amber-500/30 p-6 space-y-6 shadow-xl">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                
                <div>
                  <label className="text-xs text-slate-300 font-bold block mb-1.5">Date:</label>
                  <input
                    type="date"
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="text-xs text-slate-300 font-bold block mb-1.5">Guests:</label>
                  <select
                    value={partySize}
                    onChange={(e) => setPartySize(Number(e.target.value))}
                    className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-amber-400"
                  >
                    {[1, 2, 4, 6, 8, 12].map(n => (
                      <option key={n} value={n}>{n} Guests</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs text-slate-300 font-bold block mb-1.5">Seating Ambience:</label>
                  <select
                    value={seatingPreference}
                    onChange={(e) => setSeatingPreference(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-amber-400"
                  >
                    <option value="Terrace Lounge">Terrace Waterfront Lounge</option>
                    <option value="Chef Counter">Private Chef’s Counter (Live Theater)</option>
                    <option value="Grand Dining Hall">Grand Heritage Dining Hall</option>
                  </select>
                </div>

              </div>

              <div className="pt-2 flex items-center justify-between">
                <div className="text-xs text-slate-400">
                  Confirmed Instant Table Hold for <strong>{partySize} Guests</strong> at <strong>{seatingPreference}</strong>.
                </div>

                <button
                  onClick={() => {
                    setBookingSuccess(true);
                    setTimeout(() => setBookingSuccess(false), 3000);
                  }}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black text-xs hover:brightness-110 shadow-md transition"
                >
                  {bookingSuccess ? 'Table Reserved ✓ (SMS Sent)' : 'Confirm VIP Reservation'}
                </button>
              </div>
            </div>
          )}

          {/* D. LUXURY REAL ESTATE PROPERTY FILTER SIMULATOR */}
          {project.subcategory === 'Luxury Real Estate' && (
            <div className="rounded-2xl bg-slate-900/90 border border-amber-500/30 p-6 space-y-6 shadow-xl">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400 font-bold">Configuration:</span>
                  {['all', '3 BHK', '4 BHK', '5 BHK Penthouse'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setPropertyBhk(tab)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                        propertyBhk === tab
                          ? 'bg-amber-500 text-slate-950'
                          : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                      }`}
                    >
                      {tab.toUpperCase()}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => onOpenContact ? onOpenContact(project.title) : null}
                  className="px-4 py-2 rounded-xl bg-amber-500/20 border border-amber-500/50 text-amber-300 font-bold text-xs hover:bg-amber-500 hover:text-slate-950 transition"
                >
                  Download VIP Floor Plans (PDF)
                </button>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* 4. REALISTIC PRODUCT & SERVICE CARDS WITH PHOTOGRAPHY */}
      {data.servicesOrProducts && data.servicesOrProducts.length > 0 && (
        <section className="py-12 sm:py-16 px-4 sm:px-8 border-b border-slate-800 max-w-6xl mx-auto">
          <div className="text-center space-y-2 mb-10">
            <h3 className="text-xl sm:text-3xl font-black text-white">
              Curated Showcase Offerings
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              High-resolution digital product presentation with full feature specifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.servicesOrProducts.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-xl group"
              >
                <div>
                  {/* Photo thumbnail */}
                  {item.image && (
                    <div className="relative h-48 overflow-hidden bg-slate-950">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                      {item.badge && (
                        <span className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-cyan-500/90 text-slate-950 font-black text-[10px] shadow-md">
                          {item.badge}
                        </span>
                      )}
                    </div>
                  )}

                  <div className="p-5 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-cyan-400 uppercase">{item.category}</span>
                      <span className="text-xs font-black text-white font-mono">{item.price}</span>
                    </div>

                    <h4 className="text-base font-black text-white group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h4>

                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                      {item.desc}
                    </p>

                    {item.features && (
                      <div className="space-y-1 pt-2">
                        {item.features.map((f, idx) => (
                          <div key={idx} className="flex items-center gap-1.5 text-[11px] text-slate-400">
                            <Check className="w-3 h-3 text-cyan-400 shrink-0" />
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-5 pt-0">
                  {project.projectType === 'e-commerce' ? (
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="w-full py-2 rounded-xl bg-pink-500/20 border border-pink-500/40 text-pink-300 font-bold text-xs hover:bg-pink-500 hover:text-slate-950 transition flex items-center justify-center gap-1.5"
                    >
                      <ShoppingCart className="w-3.5 h-3.5" />
                      <span>Add to Bag</span>
                    </button>
                  ) : (
                    <button
                      onClick={() => onOpenContact ? onOpenContact(project.title) : null}
                      className="w-full py-2 rounded-xl bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 border border-slate-700 text-slate-200 font-bold text-xs transition"
                    >
                      Inquire Details &rarr;
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 5. AUTHENTIC TESTIMONIALS */}
      {data.testimonials && data.testimonials.length > 0 && (
        <section className="py-12 px-4 sm:px-8 border-b border-slate-800 max-w-4xl mx-auto">
          <div className="text-center space-y-2 mb-8">
            <h3 className="text-xl font-black text-white">Client Experience & Endorsement</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.testimonials.map((t, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                  "{t.comment}"
                </p>
                <div className="flex items-center gap-3 pt-2">
                  {t.avatar && (
                    <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover border border-cyan-500/40" referrerPolicy="no-referrer" />
                  )}
                  <div>
                    <div className="text-xs font-bold text-white">{t.name}</div>
                    <div className="text-[10px] text-slate-400">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 6. MOCK WEBSITE FOOTER */}
      <footer className="py-8 px-4 sm:px-8 bg-[#020409] text-slate-500 text-xs flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-900">
        <div>
          © 2026 {project.client}. All rights reserved. Designed & Engineered by AVRX Digital.
        </div>
        <div className="flex items-center gap-4 text-[11px] text-slate-400">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Security Whitepaper</span>
        </div>
      </footer>

    </div>
  );
};
