import React, { useState, useEffect } from 'react';
import { 
  Bot, 
  BarChart3, 
  Users, 
  MessageSquare, 
  Settings, 
  Layers, 
  Tag, 
  FolderKanban, 
  BookOpen, 
  Sparkles, 
  Search, 
  Plus, 
  Trash2, 
  Edit3, 
  Check, 
  X, 
  Phone, 
  PhoneCall, 
  ExternalLink, 
  ArrowRight, 
  RefreshCw, 
  AlertCircle, 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck, 
  Flame, 
  Clock, 
  Save
} from 'lucide-react';
import { 
  LeadItem, 
  ServiceItem, 
  ServicePackage, 
  PortfolioSample, 
  AIKnowledgeItem, 
  AISettings, 
  AIAnalyticsSummary,
  LeadStatus,
  LeadPriority
} from '../types/ai';

interface AdminAIPageProps {
  onNavigate: (page: string, slug?: string) => void;
}

type TabType = 'analytics' | 'leads' | 'conversations' | 'services' | 'packages' | 'portfolio' | 'knowledge' | 'settings';

export const AdminAIPage: React.FC<AdminAIPageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<TabType>('analytics');
  const [loading, setLoading] = useState(false);
  const [saveMessage, setSaveMessage] = useState<string | null>(null);

  // Data States
  const [analytics, setAnalytics] = useState<AIAnalyticsSummary | null>(null);
  const [leads, setLeads] = useState<LeadItem[]>([]);
  const [conversations, setConversations] = useState<any[]>([]);
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [packages, setPackages] = useState<ServicePackage[]>([]);
  const [samples, setSamples] = useState<PortfolioSample[]>([]);
  const [knowledge, setKnowledge] = useState<AIKnowledgeItem[]>([]);
  const [settings, setSettings] = useState<AISettings>({
    assistant_name: 'AVRX AI Assistant',
    greeting: 'नमस्ते! मैं AVRX AI Assistant हूँ। आपकी क्या सहायता कर सकती हूँ?',
    default_language: 'auto',
    voice_enabled: true,
    chat_enabled: true,
    lead_collection_enabled: true,
    human_handoff_enabled: true,
    business_hours: '10:00 AM - 07:00 PM IST (Mon - Sat)',
    whatsapp_number: '+919630661536',
    admin_email: 'avinash.rai.official@gmail.com',
    phone_number: '+917000859994'
  });

  // Leads Filter States
  const [leadStatusFilter, setLeadStatusFilter] = useState<string>('all');
  const [leadSearch, setLeadSearch] = useState<string>('');
  const [selectedLead, setSelectedLead] = useState<LeadItem | null>(null);

  // Conversation inspect modal state
  const [selectedConversation, setSelectedConversation] = useState<any | null>(null);

  // Edit Modals
  const [editingPackage, setEditingPackage] = useState<ServicePackage | null>(null);
  const [editingSample, setEditingSample] = useState<PortfolioSample | null>(null);
  const [editingKnowledge, setEditingKnowledge] = useState<AIKnowledgeItem | null>(null);

  // Load all data
  const refreshAll = async () => {
    setLoading(true);
    try {
      const [anRes, ldRes, cvRes, svRes, pkRes, smRes, knRes, stRes] = await Promise.all([
        fetch('/api/ai/analytics').then(r => r.json()),
        fetch('/api/ai/leads').then(r => r.json()),
        fetch('/api/ai/conversations').then(r => r.json()),
        fetch('/api/ai/services').then(r => r.json()),
        fetch('/api/ai/packages').then(r => r.json()),
        fetch('/api/ai/portfolio').then(r => r.json()),
        fetch('/api/ai/knowledge').then(r => r.json()),
        fetch('/api/ai/settings').then(r => r.json())
      ]);

      if (anRes.success) setAnalytics(anRes.analytics);
      if (ldRes.success) setLeads(ldRes.leads);
      if (cvRes.success) setConversations(cvRes.conversations);
      if (svRes.success) setServices(svRes.services);
      if (pkRes.success) setPackages(pkRes.packages);
      if (smRes.success) setSamples(smRes.samples);
      if (knRes.success) setKnowledge(knRes.knowledge);
      if (stRes.success) setSettings(stRes.settings);
    } catch (e) {
      console.error('Failed to load admin data:', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshAll();
  }, []);

  // Update Lead Status
  const updateLeadStatus = async (leadId: string, status: LeadStatus) => {
    try {
      const res = await fetch(`/api/ai/leads/${leadId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status })
      });
      const data = await res.json();
      if (data.success) {
        setLeads(prev => prev.map(l => l.id === leadId ? data.lead : l));
        if (selectedLead?.id === leadId) setSelectedLead(data.lead);
      }
    } catch (e) {}
  };

  // Delete Lead
  const deleteLead = async (leadId: string) => {
    if (!confirm('Are you sure you want to delete this lead?')) return;
    try {
      const res = await fetch(`/api/ai/leads/${leadId}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        setLeads(prev => prev.filter(l => l.id !== leadId));
        if (selectedLead?.id === leadId) setSelectedLead(null);
      }
    } catch (e) {}
  };

  // Save Settings
  const handleSaveSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/ai/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings)
      });
      const data = await res.json();
      if (data.success) {
        setSaveMessage('AI Settings saved & synced successfully!');
        setTimeout(() => setSaveMessage(null), 3000);
      }
    } catch (e) {
      setSaveMessage('Failed to save settings.');
    }
  };

  // Filtered Leads
  const filteredLeads = leads.filter(lead => {
    if (leadStatusFilter !== 'all' && lead.status !== leadStatusFilter) return false;
    if (leadSearch.trim()) {
      const q = leadSearch.toLowerCase();
      return (
        lead.full_name.toLowerCase().includes(q) ||
        (lead.business_name && lead.business_name.toLowerCase().includes(q)) ||
        lead.mobile.includes(q) ||
        lead.lead_number.toLowerCase().includes(q) ||
        lead.service_name.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pb-20">
      {/* Top Admin Header */}
      <div className="bg-slate-900/80 border-b border-slate-800 sticky top-0 z-30 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-[0_0_20px_rgba(0,240,255,0.2)]">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-black text-white">AVRX AI Control Center</h1>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-mono font-bold">
                  LIVE SYSTEM
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono">
                Conversational AI • Lead Engine • Dynamic Pricing & Samples • CRM
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={refreshAll}
              disabled={loading}
              className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold flex items-center gap-1.5 transition cursor-pointer disabled:opacity-50"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
              <span>Refresh Live Data</span>
            </button>

            <button
              onClick={() => onNavigate('home')}
              className="px-3 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:brightness-110 text-slate-950 text-xs font-black flex items-center gap-1.5 transition cursor-pointer"
            >
              <span>View Live Website</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex overflow-x-auto scrollbar-none gap-1 border-t border-slate-800/80 pt-2 pb-2">
          {[
            { id: 'analytics', label: 'Overview & Stats', icon: BarChart3 },
            { id: 'leads', label: `Leads CRM (${leads.length})`, icon: Users },
            { id: 'conversations', label: `Conversations (${conversations.length})`, icon: MessageSquare },
            { id: 'packages', label: `Pricing & Packages (${packages.length})`, icon: Tag },
            { id: 'portfolio', label: `Portfolio & Demos (${samples.length})`, icon: FolderKanban },
            { id: 'services', label: `Services (${services.length})`, icon: Layers },
            { id: 'knowledge', label: `Knowledge Base (${knowledge.length})`, icon: BookOpen },
            { id: 'settings', label: 'AI Settings', icon: Settings }
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabType)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-2 whitespace-nowrap transition cursor-pointer ${
                  isActive
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900 border border-transparent'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">

        {/* Save message notification */}
        {saveMessage && (
          <div className="mb-6 p-3 rounded-2xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-xs flex items-center gap-2 animate-in fade-in">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>{saveMessage}</span>
          </div>
        )}

        {/* TAB 1: ANALYTICS & OVERVIEW */}
        {activeTab === 'analytics' && analytics && (
          <div className="space-y-6">
            
            {/* Top Metric Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
                <div className="text-xs text-slate-400 font-mono">Total AI Conversations</div>
                <div className="text-2xl sm:text-3xl font-black text-white mt-1">
                  {analytics.total_conversations}
                </div>
                <div className="text-[11px] text-cyan-400 mt-1 font-mono">
                  +{analytics.today_conversations} today
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
                <div className="text-xs text-slate-400 font-mono">Total Qualified Leads</div>
                <div className="text-2xl sm:text-3xl font-black text-emerald-400 mt-1">
                  {analytics.total_leads}
                </div>
                <div className="text-[11px] text-emerald-300 mt-1 font-mono">
                  +{analytics.today_leads} today
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
                <div className="text-xs text-slate-400 font-mono">Conversion Rate</div>
                <div className="text-2xl sm:text-3xl font-black text-cyan-300 mt-1">
                  {analytics.conversion_rate}%
                </div>
                <div className="text-[11px] text-slate-400 mt-1 font-mono">
                  Visitor to lead ratio
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
                <div className="text-xs text-slate-400 font-mono">Voice Conversations</div>
                <div className="text-2xl sm:text-3xl font-black text-purple-300 mt-1">
                  {analytics.voice_conversations}
                </div>
                <div className="text-[11px] text-purple-400 mt-1 font-mono">
                  Speech-to-text active
                </div>
              </div>
            </div>

            {/* Lead Breakdown & Temperature */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Category Breakdown */}
              <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
                <h3 className="text-sm font-black text-white flex items-center gap-2">
                  <Layers className="w-4 h-4 text-cyan-400" />
                  <span>Leads Distribution by Service</span>
                </h3>

                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-300">Website & Digital Engineering</span>
                      <span className="font-bold text-cyan-300">{analytics.website_leads} leads</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                      <div className="h-full bg-cyan-500 rounded-full" style={{ width: `${Math.min(100, (analytics.website_leads / (analytics.total_leads || 1)) * 100)}%` }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-300">Business & Personal Loans</span>
                      <span className="font-bold text-emerald-400">{analytics.loan_leads} leads</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${Math.min(100, (analytics.loan_leads / (analytics.total_leads || 1)) * 100)}%` }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-300">Tax & GST Filings</span>
                      <span className="font-bold text-amber-400">{analytics.tax_leads} leads</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                      <div className="h-full bg-amber-500 rounded-full" style={{ width: `${Math.min(100, (analytics.tax_leads / (analytics.total_leads || 1)) * 100)}%` }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-300">Insurance Solutions</span>
                      <span className="font-bold text-blue-400">{analytics.insurance_leads} leads</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full" style={{ width: `${Math.min(100, (analytics.insurance_leads / (analytics.total_leads || 1)) * 100)}%` }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Lead Temperatures & Hotness */}
              <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
                <h3 className="text-sm font-black text-white flex items-center gap-2">
                  <Flame className="w-4 h-4 text-rose-400" />
                  <span>Lead Temperature & Readiness</span>
                </h3>

                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-xl bg-rose-950/40 border border-rose-500/30 text-center">
                    <div className="text-2xl font-black text-rose-400">{analytics.hot_leads_count}</div>
                    <div className="text-[11px] font-bold text-rose-300 mt-0.5">🔥 HOT LEADS</div>
                    <div className="text-[9px] text-slate-400 mt-1">High purchase intent</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-amber-950/40 border border-amber-500/30 text-center">
                    <div className="text-2xl font-black text-amber-400">{analytics.warm_leads_count}</div>
                    <div className="text-[11px] font-bold text-amber-300 mt-0.5">⚡ WARM LEADS</div>
                    <div className="text-[9px] text-slate-400 mt-1">Samples/Price checked</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-blue-950/40 border border-blue-500/30 text-center">
                    <div className="text-2xl font-black text-blue-400">{analytics.cold_leads_count}</div>
                    <div className="text-[11px] font-bold text-blue-300 mt-0.5">❄️ COLD LEADS</div>
                    <div className="text-[9px] text-slate-400 mt-1">General inquiries</div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-slate-300">
                    <PhoneCall className="w-4 h-4 text-emerald-400" />
                    <span>Human Specialist Handoffs</span>
                  </div>
                  <span className="font-black text-emerald-400">{analytics.human_handoffs}</span>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* TAB 2: LEADS CRM */}
        {activeTab === 'leads' && (
          <div className="space-y-4">
            
            {/* Filters Bar */}
            <div className="flex flex-col sm:flex-row gap-3 items-center justify-between bg-slate-900 p-3 rounded-2xl border border-slate-800">
              
              {/* Search */}
              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  value={leadSearch}
                  onChange={(e) => setLeadSearch(e.target.value)}
                  placeholder="Search by name, phone, lead ID..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                />
              </div>

              {/* Status Filter */}
              <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto">
                {['all', 'new', 'contacted', 'qualified', 'converted', 'human_required'].map(st => (
                  <button
                    key={st}
                    onClick={() => setLeadStatusFilter(st)}
                    className={`px-3 py-1.5 rounded-xl text-[11px] font-bold uppercase transition cursor-pointer ${
                      leadStatusFilter === st
                        ? 'bg-cyan-500 text-slate-950 shadow'
                        : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                    }`}
                  >
                    {st.replace('_', ' ')}
                  </button>
                ))}
              </div>

            </div>

            {/* Leads Table */}
            <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-950 text-slate-400 font-mono text-[10px] uppercase border-b border-slate-800">
                    <tr>
                      <th className="p-3.5">Lead ID & Date</th>
                      <th className="p-3.5">Customer & Business</th>
                      <th className="p-3.5">Contact Details</th>
                      <th className="p-3.5">Service & Package</th>
                      <th className="p-3.5">Intent Score</th>
                      <th className="p-3.5">Status</th>
                      <th className="p-3.5 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {filteredLeads.map((lead) => (
                      <tr key={lead.id} className="hover:bg-slate-800/40 transition">
                        
                        {/* ID & Date */}
                        <td className="p-3.5">
                          <div className="font-mono font-bold text-cyan-300">{lead.lead_number}</div>
                          <div className="text-[10px] text-slate-500 mt-0.5">
                            {new Date(lead.created_at).toLocaleDateString()} {new Date(lead.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </div>
                        </td>

                        {/* Customer */}
                        <td className="p-3.5">
                          <div className="font-bold text-white">{lead.full_name}</div>
                          {lead.business_name && (
                            <div className="text-[11px] text-slate-400">{lead.business_name}</div>
                          )}
                          {lead.city && (
                            <div className="text-[10px] text-slate-500 font-mono">{lead.city}</div>
                          )}
                        </td>

                        {/* Contact */}
                        <td className="p-3.5">
                          <div className="font-mono text-emerald-400 font-bold">{lead.mobile}</div>
                          {lead.email && <div className="text-[10px] text-slate-400">{lead.email}</div>}
                        </td>

                        {/* Service */}
                        <td className="p-3.5">
                          <div className="font-medium text-slate-200">{lead.service_name}</div>
                          {lead.package_name && (
                            <span className="inline-block mt-0.5 px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 text-[10px] border border-cyan-500/20">
                              {lead.package_name}
                            </span>
                          )}
                        </td>

                        {/* Score */}
                        <td className="p-3.5">
                          <span
                            className={`px-2 py-0.5 rounded-full text-[10px] font-black font-mono uppercase ${
                              lead.lead_score === 'HOT'
                                ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                                : lead.lead_score === 'WARM'
                                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                                : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                            }`}
                          >
                            {lead.lead_score} ({lead.lead_temperature}°)
                          </span>
                        </td>

                        {/* Status Select */}
                        <td className="p-3.5">
                          <select
                            value={lead.status}
                            onChange={(e) => updateLeadStatus(lead.id, e.target.value as LeadStatus)}
                            className="bg-slate-950 border border-slate-800 text-slate-200 rounded-lg px-2 py-1 text-[11px] font-mono focus:outline-none focus:border-cyan-400 cursor-pointer"
                          >
                            <option value="new">New</option>
                            <option value="contacted">Contacted</option>
                            <option value="qualified">Qualified</option>
                            <option value="follow_up">Follow Up</option>
                            <option value="converted">Converted</option>
                            <option value="human_required">Human Required</option>
                            <option value="closed">Closed</option>
                          </select>
                        </td>

                        {/* Action Buttons */}
                        <td className="p-3.5 text-right space-x-1.5 whitespace-nowrap">
                          
                          {/* Direct WhatsApp */}
                          <a
                            href={`https://wa.me/${lead.mobile.replace(/\D/g, '')}?text=${encodeURIComponent(`Hello ${lead.full_name}, Thank you for connecting with AVRX Digital & Financial Solution regarding ${lead.service_name} (Lead ID: ${lead.lead_number}).`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex p-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition"
                            title="Chat on WhatsApp"
                          >
                            <MessageSquare className="w-3.5 h-3.5" />
                          </a>

                          {/* Direct Phone Call */}
                          <a
                            href={`tel:${lead.mobile.replace(/\D/g, '')}`}
                            className="inline-flex p-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition"
                            title="Call Customer"
                          >
                            <Phone className="w-3.5 h-3.5" />
                          </a>

                          {/* Delete */}
                          <button
                            onClick={() => deleteLead(lead.id)}
                            className="p-1.5 rounded-lg bg-slate-950 hover:bg-rose-950 border border-slate-800 hover:border-rose-500/50 text-slate-400 hover:text-rose-300 transition cursor-pointer"
                            title="Delete Lead"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </td>

                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

        {/* TAB 3: CONVERSATIONS */}
        {activeTab === 'conversations' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {conversations.map((conv) => (
                <div
                  key={conv.id}
                  onClick={() => setSelectedConversation(conv)}
                  className="p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition cursor-pointer shadow-lg space-y-2.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-cyan-300">
                      {conv.session_id.slice(0, 16)}...
                    </span>
                    <span className={`px-2 py-0.5 rounded-full text-[9px] font-mono uppercase ${
                      conv.status === 'handed_off' ? 'bg-rose-500/20 text-rose-300' : 'bg-emerald-500/20 text-emerald-300'
                    }`}>
                      {conv.status}
                    </span>
                  </div>

                  <div className="text-xs text-slate-300 line-clamp-2">
                    {conv.messages?.[0]?.message || 'No messages'}
                  </div>

                  <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono pt-1 border-t border-slate-800/60">
                    <span>{conv.messages?.length || 0} messages</span>
                    <span>{new Date(conv.started_at).toLocaleTimeString()}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Conversation Inspect Modal */}
            {selectedConversation && (
              <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
                <div className="bg-slate-900 border border-cyan-500/30 rounded-3xl w-full max-w-2xl max-h-[85vh] flex flex-col overflow-hidden shadow-2xl">
                  <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-bold text-white">Conversation Transcript</h3>
                      <p className="text-[10px] text-cyan-400 font-mono">{selectedConversation.session_id}</p>
                    </div>
                    <button
                      onClick={() => setSelectedConversation(null)}
                      className="p-1 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs">
                    {selectedConversation.messages?.map((m: any, i: number) => (
                      <div
                        key={i}
                        className={`p-3 rounded-2xl max-w-[85%] ${
                          m.role === 'user'
                            ? 'bg-blue-600 text-white ml-auto rounded-tr-none'
                            : 'bg-slate-950 border border-slate-800 text-slate-200 rounded-tl-none'
                        }`}
                      >
                        <div className="text-[9px] font-mono text-cyan-300/80 mb-1 uppercase">{m.role}</div>
                        <div className="whitespace-pre-wrap">{m.message}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

          </div>
        )}

        {/* TAB 4: PACKAGES & PRICING EDITOR */}
        {activeTab === 'packages' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-black text-white">Active Service Pricing & Packages</h2>
              <p className="text-xs text-slate-400">Updates sync immediately with AI Assistant recommendations</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {packages.map((pkg) => (
                <div key={pkg.id} className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-black text-white">{pkg.package_name}</h3>
                    {pkg.popular && (
                      <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-[9px] font-mono">Popular</span>
                    )}
                  </div>

                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-black text-cyan-300">₹{pkg.price.toLocaleString('en-IN')}</span>
                    {pkg.discount_price && (
                      <span className="text-xs text-slate-500 line-through">₹{pkg.discount_price.toLocaleString('en-IN')}</span>
                    )}
                    <span className="text-[10px] text-emerald-400 ml-auto font-mono">{pkg.delivery_time}</span>
                  </div>

                  <p className="text-[11px] text-slate-400 line-clamp-2">{pkg.description}</p>

                  <ul className="space-y-1 text-[10px] text-slate-300">
                    {pkg.features.slice(0, 3).map((f, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <Check className="w-3 h-3 text-cyan-400 shrink-0" />
                        <span className="line-clamp-1">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => setEditingPackage(pkg)}
                    className="w-full py-1.5 rounded-xl bg-slate-800 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 border border-slate-700 text-xs font-bold transition cursor-pointer flex items-center justify-center gap-1"
                  >
                    <Edit3 className="w-3 h-3" />
                    <span>Edit Pricing & Features</span>
                  </button>
                </div>
              ))}
            </div>

            {/* Edit Package Modal */}
            {editingPackage && (
              <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
                <div className="bg-slate-900 border border-cyan-500/30 rounded-3xl w-full max-w-lg p-6 space-y-4 shadow-2xl">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-white">Edit Package: {editingPackage.package_name}</h3>
                    <button onClick={() => setEditingPackage(null)} className="text-slate-400 hover:text-white">
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div>
                      <label className="block text-slate-400 mb-1">Package Name</label>
                      <input
                        type="text"
                        value={editingPackage.package_name}
                        onChange={(e) => setEditingPackage({ ...editingPackage, package_name: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-slate-400 mb-1">Active Price (₹)</label>
                        <input
                          type="number"
                          value={editingPackage.price}
                          onChange={(e) => setEditingPackage({ ...editingPackage, price: Number(e.target.value) })}
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-slate-400 mb-1">Discount Price (₹)</label>
                        <input
                          type="number"
                          value={editingPackage.discount_price || ''}
                          onChange={(e) => setEditingPackage({ ...editingPackage, discount_price: Number(e.target.value) })}
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-400 mb-1">Delivery Time</label>
                      <input
                        type="text"
                        value={editingPackage.delivery_time}
                        onChange={(e) => setEditingPackage({ ...editingPackage, delivery_time: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-400 mb-1">Description</label>
                      <textarea
                        rows={2}
                        value={editingPackage.description}
                        onChange={(e) => setEditingPackage({ ...editingPackage, description: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end gap-2 pt-2">
                    <button
                      onClick={() => setEditingPackage(null)}
                      className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-bold"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={async () => {
                        await fetch(`/api/ai/packages/${editingPackage.id}`, {
                          method: 'PUT',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify(editingPackage)
                        });
                        setPackages(prev => prev.map(p => p.id === editingPackage.id ? editingPackage : p));
                        setEditingPackage(null);
                      }}
                      className="px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 text-xs font-black"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 5: PORTFOLIO SAMPLES */}
        {activeTab === 'portfolio' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-black text-white">Interactive Portfolio & Samples Showcase</h2>
              <p className="text-xs text-slate-400">AI automatically suggests these samples matching user business type</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {samples.map((sample) => (
                <div key={sample.id} className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden space-y-2 p-3">
                  <div className="aspect-video rounded-xl overflow-hidden bg-slate-950">
                    <img
                      src={sample.preview_image}
                      alt={sample.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xs font-bold text-white line-clamp-1">{sample.title}</h3>
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="px-2 py-0.5 rounded bg-slate-800 text-cyan-300 font-mono uppercase">{sample.business_type}</span>
                    <span className="text-emerald-400 font-bold">₹{sample.starting_price.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 6: KNOWLEDGE BASE */}
        {activeTab === 'knowledge' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-black text-white">AI Knowledge Base & Verified Facts</h2>
              <p className="text-xs text-slate-400">AI queries this knowledge base before generating responses</p>
            </div>

            <div className="space-y-3">
              {knowledge.map((item) => (
                <div key={item.id} className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-[10px] font-mono uppercase">
                        {item.category}
                      </span>
                      <h3 className="text-xs font-bold text-white">{item.title}</h3>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono">Priority: {item.priority}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 7: SERVICES */}
        {activeTab === 'services' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((srv) => (
                <div key={srv.id} className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded bg-slate-800 text-cyan-300 text-[9px] font-mono uppercase">{srv.category}</span>
                    <span className="text-emerald-400 text-xs font-bold">
                      {srv.starting_price > 0 ? `From ₹${srv.starting_price}` : 'Facilitation'}
                    </span>
                  </div>
                  <h3 className="text-xs font-bold text-white">{srv.name}</h3>
                  <p className="text-[11px] text-slate-400 line-clamp-2">{srv.short_desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 8: AI SETTINGS */}
        {activeTab === 'settings' && (
          <div className="max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">
            <form onSubmit={handleSaveSettings} className="space-y-4 text-xs">
              <h2 className="text-sm font-black text-white flex items-center gap-2">
                <Settings className="w-4 h-4 text-cyan-400" />
                <span>Configure AI Assistant & Contact Rules</span>
              </h2>

              <div>
                <label className="block text-slate-400 mb-1">Assistant Name</label>
                <input
                  type="text"
                  value={settings.assistant_name}
                  onChange={(e) => setSettings({ ...settings, assistant_name: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white"
                />
              </div>

              <div>
                <label className="block text-slate-400 mb-1">Default Greeting Message (Hindi/English)</label>
                <textarea
                  rows={2}
                  value={settings.greeting}
                  onChange={(e) => setSettings({ ...settings, greeting: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-400 mb-1">WhatsApp Escalation Number</label>
                  <input
                    type="text"
                    value={settings.whatsapp_number}
                    onChange={(e) => setSettings({ ...settings, whatsapp_number: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 mb-1">Admin Alert Email</label>
                  <input
                    type="email"
                    value={settings.admin_email}
                    onChange={(e) => setSettings({ ...settings, admin_email: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-400 mb-1">Business Operating Hours</label>
                <input
                  type="text"
                  value={settings.business_hours}
                  onChange={(e) => setSettings({ ...settings, business_hours: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white"
                />
              </div>

              <div className="flex items-center gap-6 pt-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.voice_enabled}
                    onChange={(e) => setSettings({ ...settings, voice_enabled: e.target.checked })}
                    className="rounded text-cyan-500 focus:ring-cyan-400"
                  />
                  <span>Enable Voice Interaction</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.human_handoff_enabled}
                    onChange={(e) => setSettings({ ...settings, human_handoff_enabled: e.target.checked })}
                    className="rounded text-cyan-500 focus:ring-cyan-400"
                  />
                  <span>Enable Human Handoff</span>
                </label>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:brightness-110 text-slate-950 font-black text-xs flex items-center gap-2 transition cursor-pointer"
                >
                  <Save className="w-4 h-4" />
                  <span>Save AI Configuration</span>
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
