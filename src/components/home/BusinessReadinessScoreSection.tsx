import React, { useState } from 'react';
import { 
  Gauge, 
  Sparkles, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  TrendingUp, 
  ShieldCheck, 
  Globe, 
  DollarSign, 
  FileText,
  RotateCcw
} from 'lucide-react';

interface BusinessReadinessScoreSectionProps {
  onNavigate: (page: string, slug?: string) => void;
}

interface Question {
  id: string;
  category: 'digital' | 'growth' | 'finance' | 'protection' | 'compliance';
  question: string;
  weight: number;
}

export const BusinessReadinessScoreSection: React.FC<BusinessReadinessScoreSectionProps> = ({ onNavigate }) => {
  const questions: Question[] = [
    { id: 'q1', category: 'digital', question: 'Do you have a modern, mobile-responsive website with fast loading speed and SSL?', weight: 20 },
    { id: 'q2', category: 'growth', question: 'Is your business ranked on Google Search or Google Maps local 3-pack?', weight: 20 },
    { id: 'q3', category: 'growth', question: 'Do you regularly run targeted online lead generation campaigns (Google/Meta)?', weight: 20 },
    { id: 'q4', category: 'compliance', question: 'Do you have active GST registration, MSME Udyam certificate, and up-to-date ITR?', weight: 20 },
    { id: 'q5', category: 'protection', question: 'Is your business, inventory, and leadership covered by commercial & health insurance?', weight: 20 }
  ];

  const [answers, setAnswers] = useState<Record<string, boolean>>({
    q1: true,
    q2: false,
    q3: false,
    q4: true,
    q5: false
  });

  const toggleAnswer = (id: string) => {
    setAnswers(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const totalScore = Object.entries(answers).reduce((acc, [id, val]) => {
    if (val) {
      const q = questions.find(item => item.id === id);
      return acc + (q ? q.weight : 0);
    }
    return acc;
  }, 0);

  const getStatusMessage = (score: number) => {
    if (score >= 80) return { label: 'HIGH MARKET READINESS', color: 'text-emerald-400', desc: 'Your business has strong foundations. Ready for accelerated digital scaling and enterprise capital.' };
    if (score >= 60) return { label: 'MODERATE FOUNDATION', color: 'text-amber-400', desc: 'Good core presence, but missing key digital lead channels or risk protection shields.' };
    return { label: 'NEEDS INFRASTRUCTURE UPGRADE', color: 'text-rose-400', desc: 'Critical gaps in digital visibility, statutory tax compliance, or capital readiness.' };
  };

  const status = getStatusMessage(totalScore);

  return (
    <section className="py-24 bg-[#050811] relative overflow-hidden">
      
      {/* Glow */}
      <div className="absolute top-1/2 right-1/3 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-l from-cyan-500/10 via-emerald-500/10 to-transparent rounded-full blur-[150px] pointer-events-none" />

      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-5xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-bold font-mono uppercase tracking-widest">
            <Gauge className="w-3.5 h-3.5 text-cyan-400" />
            <span>Interactive Business Audit</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            How Ready Is{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-400">
              Your Business?
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Take our 60-second diagnostic assessment to evaluate your digital presence, search ranking, tax compliance, and financing readiness.
          </p>
        </div>

        {/* Interactive Score Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full max-w-[1600px] mx-auto items-center">
          
          {/* Left: Interactive Checklist */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between pb-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                Diagnostic Assessment Checklist
              </span>
              <button
                onClick={() => setAnswers({ q1: false, q2: false, q3: false, q4: false, q5: false })}
                className="text-xs text-slate-500 hover:text-cyan-400 flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset All</span>
              </button>
            </div>

            <div className="space-y-3">
              {questions.map((q, idx) => {
                const isChecked = !!answers[q.id];

                return (
                  <button
                    key={q.id}
                    onClick={() => toggleAnswer(q.id)}
                    className={`w-full p-4 rounded-2xl text-left transition-all duration-200 border flex items-start gap-3.5 cursor-pointer ${
                      isChecked
                        ? 'bg-slate-900 border-cyan-500/50 shadow-[0_0_15px_rgba(0,240,255,0.15)] text-white'
                        : 'bg-slate-950/70 hover:bg-slate-900 border-slate-800 text-slate-400'
                    }`}
                  >
                    <div className="mt-0.5 shrink-0">
                      {isChecked ? (
                        <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                      ) : (
                        <div className="w-5 h-5 rounded-full border border-slate-700 bg-slate-950" />
                      )}
                    </div>

                    <div className="space-y-1">
                      <div className="text-xs font-bold text-slate-200">
                        {idx + 1}. {q.question}
                      </div>
                      <span className="text-[10px] font-mono text-slate-500 uppercase">
                        Weight: +{q.weight} Points • Category: {q.category}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Dynamic Composite Readiness Gauge */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 border border-cyan-500/30 shadow-2xl space-y-6 text-center">
            <div className="space-y-1">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
                AVRX Readiness Score
              </div>
              <div className="text-6xl sm:text-7xl font-black text-white font-mono tracking-tight">
                {totalScore}
                <span className="text-2xl text-slate-500 font-sans font-normal">/100</span>
              </div>
            </div>

            {/* Progress Visual Bar */}
            <div className="space-y-2">
              <div className="w-full h-3 bg-slate-950 rounded-full overflow-hidden border border-slate-800 p-0.5">
                <div 
                  className="h-full bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 rounded-full transition-all duration-500"
                  style={{ width: `${totalScore}%` }}
                />
              </div>
              <div className={`text-xs font-mono font-bold tracking-wider ${status.color}`}>
                {status.label}
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              {status.desc}
            </p>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('contact')}
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-cyan-400 to-emerald-400 hover:brightness-110 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition cursor-pointer shadow-lg"
              >
                <span>Get Full Custom Roadmap</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[10px] text-slate-500 mt-2">
                *Diagnostic score is an advisory benchmark and not an official regulatory certification.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
