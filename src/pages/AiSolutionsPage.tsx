import React, { useState } from 'react';
import SeoMeta from '../components/common/SeoMeta';
import Breadcrumbs from '../components/common/Breadcrumbs';
import PageBanner from '../components/layout/PageBanner';
import JarvisAiEngine from '../components/tools/JarvisAiEngine';
import TextToImageAi from '../components/tools/TextToImageAi';
import PromptToWebsiteAi from '../components/tools/PromptToWebsiteAi';
import WebsiteHealthChecker from '../components/tools/WebsiteHealthChecker';
import EmiCalculator from '../components/tools/EmiCalculator';
import InsurancePremiumCalculator from '../components/tools/InsurancePremiumCalculator';
import {
  Cpu,
  Sparkles,
  Image as ImageIcon,
  Globe,
  Calculator,
  ShieldCheck,
  Zap,
  ArrowRight
} from 'lucide-react';

export default function AiSolutionsPage() {
  const [activeToolTab, setActiveToolTab] = useState<'jarvis' | 'text2image' | 'prompt2web' | 'health' | 'emi' | 'insurance'>('jarvis');

  const breadcrumbs = [
    { name: 'AI Solutions & Tools', url: '/ai-solutions' }
  ];

  const toolsList = [
    {
      id: 'jarvis',
      name: 'JARVIS AI Engine',
      badge: 'GEMINI 3.6 FLASH',
      icon: Cpu,
      desc: 'AI assistant powered by Gemini 3.6 Flash server API for queries on services, loans, taxes & tech.'
    },
    {
      id: 'text2image',
      name: 'Text to Image AI',
      badge: '3D MOCKUPS',
      icon: ImageIcon,
      desc: 'Interactive prompt image generator producing downloadable 3D visual mockups.'
    },
    {
      id: 'prompt2web',
      name: 'Prompt to Website AI',
      badge: '3D WIREFRAME',
      icon: Globe,
      desc: 'Generates live 3D website wireframe previews from client prompts in real time.'
    },
    {
      id: 'health',
      name: 'Website Health Checker',
      badge: 'LIVE AUDIT',
      icon: Zap,
      desc: 'Analyzes target domains for speed, SEO, security, mobile responsiveness & AI readiness.'
    },
    {
      id: 'emi',
      name: 'EMI Calculator',
      badge: 'LOAN SLIDER',
      icon: Calculator,
      desc: 'Financial slider tool with loan tenure and interest breakdown.'
    },
    {
      id: 'insurance',
      name: 'Insurance Calculator',
      badge: 'POLICY ESTIMATOR',
      icon: ShieldCheck,
      desc: 'Estimator for health, motor, life, property, and commercial insurance policies.'
    }
  ];

  return (
    <div className="bg-[#08090C] min-h-screen">
      <SeoMeta
        title="AI Tools & Website Health Checker | AVRX Digital Ambikapur"
        description="Explore AI tools powered by Gemini, Website SEO & Speed Auditor, Financial EMI Calculator, and Insurance Estimators in Ambikapur, Chhattisgarh."
        keywords="AI tools Ambikapur, website health checker, EMI calculator Surguja, AI website wireframe generator, AVRX AI solutions"
        canonicalUrl="https://avrx.in/ai-solutions"
        breadcrumbsData={breadcrumbs}
      />

      <PageBanner
        title="JARVIS 3D AI Tools Suite (Ambikapur)"
        subtitle="Powered by Gemini 3.6 Flash server API, interactive 3D visual mockups, live wireframe preview generators, domain health audits, and financial calculators."
        badge="AVRX 3D INTELLIGENCE"
        breadcrumbs={[{ label: 'AI Tools Suite' }]}
        ctaText="Request Custom Enterprise Model"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      {/* Main Suite Explorer */}
      <section className="py-16 bg-[#06070B] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block flex items-center justify-center gap-1.5">
              <Sparkles className="w-4 h-4 text-cyan-400" /> INTERACTIVE 3D TOOL SUITE
            </span>
            <h2 className="text-3xl sm:text-4xl font-poppins font-extrabold text-white">
              6 Next-Gen AI & Financial Tools
            </h2>
            <p className="text-sm text-slate-400">
              Select any tool below to launch its live interactive 3D interface right inside your browser.
            </p>
          </div>

          {/* Interactive Navigation Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {toolsList.map((tool) => {
              const Icon = tool.icon;
              const isActive = activeToolTab === tool.id;
              return (
                <button
                  key={tool.id}
                  onClick={() => setActiveToolTab(tool.id as any)}
                  className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between space-y-3 ${
                    isActive
                      ? 'bg-gradient-to-b from-cyan-500/20 to-blue-600/20 border-cyan-500/60 text-white shadow-xl shadow-cyan-500/15 scale-[1.02]'
                      : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className={`p-2.5 rounded-xl ${isActive ? 'bg-cyan-500 text-white' : 'bg-white/10 text-slate-300'}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    {isActive && <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-cyan-300 block uppercase tracking-wider">{tool.badge}</span>
                    <h3 className="text-xs font-bold text-white mt-0.5">{tool.name}</h3>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Interactive Tool Stage */}
          <div className="pt-4">
            {activeToolTab === 'jarvis' && <JarvisAiEngine />}
            {activeToolTab === 'text2image' && <TextToImageAi />}
            {activeToolTab === 'prompt2web' && <PromptToWebsiteAi />}
            {activeToolTab === 'health' && <WebsiteHealthChecker />}
            {activeToolTab === 'emi' && <EmiCalculator />}
            {activeToolTab === 'insurance' && <InsurancePremiumCalculator />}
          </div>
        </div>
      </section>

      {/* Overview Grid Showcase for All 6 Tools */}
      <section className="py-20 bg-[#08090C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h3 className="text-3xl font-poppins font-bold text-white">
              Capabilities of the JARVIS 3D Suite
            </h3>
            <p className="text-sm text-slate-400">
              Built with server-side Gemini API integration, responsive 3D WebGL framing, and mathematical financial engines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {toolsList.map((tool) => {
              const Icon = tool.icon;
              return (
                <div
                  key={tool.id}
                  className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-cyan-500/40 bg-[#0D101C]/80 space-y-5 flex flex-col justify-between transition-all group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-[10px] font-bold">
                        {tool.badge}
                      </span>
                    </div>
                    <h4 className="text-lg font-poppins font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {tool.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {tool.desc}
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setActiveToolTab(tool.id as any);
                      window.scrollTo({ top: 400, behavior: 'smooth' });
                    }}
                    className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-cyan-500 text-white text-xs font-bold flex items-center justify-center gap-2 border border-white/10 transition-all group-hover:border-cyan-500/40"
                  >
                    <span>Launch {tool.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
