import React from 'react';
import { Activity, TrendingUp, Users, DollarSign, Shield, FileText, Bot, ArrowUpRight } from 'lucide-react';

export const BusinessOSPreview: React.FC = () => {
  return (
    <section className="py-24 bg-[#050811] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-3">
            <Activity className="w-4 h-4 text-cyan-400" />
            <span>Product Concept Preview</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            AVRX Business OS
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3">
            A unified command center concept where businesses manage digital analytics, loan disbursements, GST filings, and AI growth recommendations in real-time.
          </p>
        </div>

        {/* Dashboard Mockup Card */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl max-w-6xl mx-auto space-y-6">
          
          {/* Top OS Navigation Header */}
          <div className="flex flex-wrap items-center justify-between pb-6 border-b border-slate-800 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
              <span className="font-mono text-xs text-slate-300 font-bold uppercase tracking-wider">
                AVRX Command Center • Live Telemetry
              </span>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono">
              <span className="px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-cyan-400">
                ACTIVE DOMAIN: avrx.in
              </span>
              <span className="px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                STATUS: OPTIMAL
              </span>
            </div>
          </div>

          {/* Metric Cards Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Monthly Traffic</span>
                <Activity className="w-4 h-4 text-cyan-400" />
              </div>
              <div className="text-2xl font-black text-white font-mono">48,250</div>
              <div className="text-[11px] font-semibold text-emerald-400 flex items-center gap-1">
                <ArrowUpRight className="w-3 h-3" />
                <span>+24.8% vs last month</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Organic SEO Score</span>
                <TrendingUp className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="text-2xl font-black text-white font-mono">94 / 100</div>
              <div className="text-[11px] font-semibold text-cyan-400">
                #1 Page Rank for 18 Keywords
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Verified Leads</span>
                <Users className="w-4 h-4 text-purple-400" />
              </div>
              <div className="text-2xl font-black text-white font-mono">312</div>
              <div className="text-[11px] font-semibold text-emerald-400">
                Conversion Rate 6.2%
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Active Capital</span>
                <DollarSign className="w-4 h-4 text-amber-400" />
              </div>
              <div className="text-2xl font-black text-white font-mono">₹25,00,000</div>
              <div className="text-[11px] font-semibold text-amber-300">
                Business Loan Approved
              </div>
            </div>

          </div>

          {/* Module Status Panels */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Tax & Insurance Panel */}
            <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                <FileText className="w-4 h-4 text-amber-400" />
                <span>Tax & Compliance Pipeline</span>
              </h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between p-2 rounded bg-slate-900 text-slate-300">
                  <span>GSTR-3B Filing</span>
                  <span className="text-emerald-400 font-semibold">FILLED (Aug)</span>
                </div>
                <div className="flex justify-between p-2 rounded bg-slate-900 text-slate-300">
                  <span>Annual ITR Return</span>
                  <span className="text-cyan-400 font-semibold">VERIFIED</span>
                </div>
                <div className="flex justify-between p-2 rounded bg-slate-900 text-slate-300">
                  <span>Udyam MSME Status</span>
                  <span className="text-emerald-400 font-semibold">ACTIVE</span>
                </div>
              </div>
            </div>

            {/* Insurance & Cloud Infrastructure Panel */}
            <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                <Shield className="w-4 h-4 text-purple-400" />
                <span>Insurance & Server Uptime</span>
              </h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between p-2 rounded bg-slate-900 text-slate-300">
                  <span>Shop Insurance Policy</span>
                  <span className="text-emerald-400 font-semibold">ACTIVE (₹50L)</span>
                </div>
                <div className="flex justify-between p-2 rounded bg-slate-900 text-slate-300">
                  <span>NVMe Cloud Hosting</span>
                  <span className="text-cyan-400 font-semibold">99.98% UPTIME</span>
                </div>
                <div className="flex justify-between p-2 rounded bg-slate-900 text-slate-300">
                  <span>Daily Offsite Backup</span>
                  <span className="text-emerald-400 font-semibold">SUCCESS (04:00 AM)</span>
                </div>
              </div>
            </div>

            {/* AI Assistant Real-time Insight */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-cyan-950/40 to-slate-950 border border-cyan-500/30 space-y-3">
              <h4 className="text-xs font-bold text-cyan-300 uppercase tracking-wider flex items-center gap-2">
                <Bot className="w-4 h-4 text-cyan-400" />
                <span>AVRX AI Recommendation</span>
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                "Your mobile traffic surged by 32% this week. We recommend enabling the AVRX E-Commerce WhatsApp checkout plugin to capture 40% higher direct purchases."
              </p>
              <div className="pt-2 text-[11px] font-bold text-cyan-400 flex items-center gap-1 cursor-pointer hover:underline">
                <span>Apply AI Recommendation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
