import React, { useState } from 'react';
import { 
  Sparkles, 
  ExternalLink, 
  Code2, 
  TrendingUp, 
  Layers, 
  CheckCircle2, 
  ArrowRight,
  Laptop,
  Smartphone,
  Zap
} from 'lucide-react';

interface ProjectsShowcaseLabProps {
  onNavigate: (page: string, slug?: string) => void;
}

interface ProjectCase {
  id: string;
  title: string;
  clientType: string;
  industry: string;
  challenge: string;
  solution: string;
  techStack: string[];
  metrics: { label: string; value: string }[];
  accent: string;
}

export const ProjectsShowcaseLab: React.FC<ProjectsShowcaseLabProps> = ({ onNavigate }) => {
  const [activeProjectIdx, setActiveProjectIdx] = useState<number>(0);

  const projects: ProjectCase[] = [
    {
      id: 'fintech-portal',
      title: 'BharatFin Lending & Credit Automation Engine',
      clientType: 'Commercial NBFC & Fintech Brokerage',
      industry: 'FinTech / Lending',
      challenge: 'Manual loan document verification and slow turnarounds causing 45% drop-off in SME loan applications.',
      solution: 'Engineered automated digital KYC pipeline, instant CIBIL scoring API, and real-time bank statement OCR parsing.',
      techStack: ['Next.js 14', 'TypeScript', 'Node.js', 'Razorpay', 'Python OCR', 'PostgreSQL'],
      metrics: [
        { label: 'Sanction Speed', value: '< 24 Hours' },
        { label: 'Conversion Lift', value: '+280%' },
        { label: 'Disbursal Volume', value: '₹18+ Crore' }
      ],
      accent: 'from-amber-400 to-yellow-500'
    },
    {
      id: 'ecom-hyperlocal',
      title: 'KisanBazaar Hyperlocal Agri-Direct Store',
      clientType: 'Agri-Tech Startup & Farmer Producer Co.',
      industry: 'E-Commerce / Retail',
      challenge: 'High latency on 4G networks and lack of local language support resulting in low tier-2/3 customer adoption.',
      solution: 'Built PWA with sub-800ms load time on mobile 4G, Hindi & English UI switch, and instant WhatsApp order sync.',
      techStack: ['React', 'Tailwind CSS', 'Vite', 'Node.js', 'UPI Gateway', 'Redis Edge Cache'],
      metrics: [
        { label: 'Mobile Page Load', value: '0.75s' },
        { label: 'Monthly Orders', value: '12,500+' },
        { label: 'Cart Abandonment', value: '-62%' }
      ],
      accent: 'from-emerald-400 to-teal-500'
    },
    {
      id: 'healthcare-portal',
      title: 'AarogyaPlus Multispeciality Telehealth Portal',
      clientType: 'Healthcare Hospital Chain',
      industry: 'Healthcare / Telemedicine',
      challenge: 'Inability to coordinate multi-doctor video consultations and manage digital prescriptions centrally.',
      solution: 'Architected WebRTC encrypted video consults, SMS/WhatsApp appointment bot, and integrated digital billing.',
      techStack: ['WebRTC', 'React', 'Node.js', 'Tailwind CSS', 'MongoDB', 'Cloudflare CDN'],
      metrics: [
        { label: 'Consultations', value: '45,000+' },
        { label: 'No-Show Rate', value: '< 4%' },
        { label: 'Patient Rating', value: '4.9 / 5' }
      ],
      accent: 'from-cyan-400 to-blue-500'
    }
  ];

  const currentProject = projects[activeProjectIdx];

  return (
    <section className="py-24 bg-[#070b16] relative overflow-hidden border-t border-slate-800/80">
      
      {/* Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[750px] h-[500px] bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-transparent rounded-full blur-[160px] pointer-events-none" />

      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-5xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-bold font-mono uppercase tracking-widest">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>Engineering Case Studies</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            Inside the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              AVRX Lab
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Real enterprise implementations and technology architectures engineered for reliability, conversion, and scale.
          </p>
        </div>

        {/* Project Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {projects.map((proj, idx) => {
            const isActive = idx === activeProjectIdx;
            return (
              <button
                key={proj.id}
                onClick={() => setActiveProjectIdx(idx)}
                className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 border cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 text-white border-cyan-400 shadow-[0_0_20px_rgba(0,240,255,0.3)] scale-103'
                    : 'bg-slate-950/80 text-slate-400 hover:text-white border-slate-800'
                }`}
              >
                {proj.title.split(' ')[0]} {proj.title.split(' ')[1]} ({proj.industry})
              </button>
            );
          })}
        </div>

        {/* Active Project Case Showcase Card */}
        <div className="rounded-3xl bg-slate-950/90 border border-cyan-500/30 p-6 sm:p-10 backdrop-blur-2xl shadow-2xl space-y-8 animate-in fade-in zoom-in-95 duration-200">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
                <span>CASE STUDY // {currentProject.industry}</span>
                <span>•</span>
                <span>{currentProject.clientType}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                {currentProject.title}
              </h3>
            </div>

            <button
              onClick={() => onNavigate('projects')}
              className="self-start lg:self-auto px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-bold text-cyan-300 hover:text-white flex items-center gap-2 transition cursor-pointer"
            >
              <span>View All Lab Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Challenge & Solution 2-Column Split */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-rose-400">
                The Engineering Challenge:
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {currentProject.challenge}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                The AVRX Architecture &amp; Solution:
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {currentProject.solution}
              </p>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
              Verified Measured Outcomes:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {currentProject.metrics.map((m, i) => (
                <div key={i} className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-center space-y-1">
                  <div className="text-2xl sm:text-3xl font-black text-cyan-300 font-mono">
                    {m.value}
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="space-y-2 pt-2">
            <span className="text-xs text-slate-400 font-mono">Technology &amp; API Stack:</span>
            <div className="flex flex-wrap gap-2">
              {currentProject.techStack.map((tech, i) => (
                <span key={i} className="px-3 py-1 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono font-bold text-slate-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
