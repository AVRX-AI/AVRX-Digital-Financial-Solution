import React, { useState, useEffect } from 'react';
import { ProjectItem, DeviceMode } from '../../types/projectTypes';
import { WebsiteInteractivePreview } from './WebsiteInteractivePreview';
import { AppInteractivePreview } from './AppInteractivePreview';
import { 
  X, 
  Maximize2, 
  Minimize2, 
  Monitor, 
  Tablet, 
  Smartphone, 
  Lock, 
  RotateCw, 
  ExternalLink, 
  CheckCircle2, 
  Sparkles, 
  Star, 
  ArrowRight,
  Shield,
  Layers,
  Code2
} from 'lucide-react';

interface ProjectViewerModalProps {
  project: ProjectItem | null;
  isOpen: boolean;
  onClose: () => void;
  onNavigateToContact: (projectName: string) => void;
}

export const ProjectViewerModal: React.FC<ProjectViewerModalProps> = ({
  project,
  isOpen,
  onClose,
  onNavigateToContact
}) => {
  const [deviceMode, setDeviceMode] = useState<DeviceMode>('desktop');
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isReloading, setIsReloading] = useState<boolean>(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const isApp = project.projectType === 'android-app' || project.projectType === 'ios-app';

  const handleReload = () => {
    setIsReloading(true);
    setTimeout(() => setIsReloading(false), 500);
  };

  const getContainerWidthClass = () => {
    if (isApp) return 'max-w-4xl';
    switch (deviceMode) {
      case 'mobile':
        return 'max-w-[400px]';
      case 'tablet':
        return 'max-w-[780px]';
      case 'desktop':
      default:
        return 'max-w-6xl';
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex flex-col justify-between overflow-hidden animate-in fade-in duration-200">
      
      {/* 1. Modal Top Bar */}
      <div className="bg-[#060a17] border-b border-slate-800 px-4 sm:px-6 py-3 flex items-center justify-between gap-3 shrink-0 z-50">
        
        {/* Left: Project Brand & Category */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-black text-sm text-slate-950 shadow-md shrink-0">
            {project.title.charAt(0)}
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h2 className="font-extrabold text-white text-sm sm:text-base tracking-tight truncate">
                {project.title}
              </h2>
              <span className="hidden sm:inline-block px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-[10px] font-bold text-cyan-300">
                {project.category}
              </span>
            </div>
            <div className="text-[11px] text-slate-400 truncate">
              {project.client} • {project.platform}
            </div>
          </div>
        </div>

        {/* Center: Device Viewport Controls (For Web) */}
        {!isApp && (
          <div className="hidden md:flex items-center bg-slate-900 border border-slate-800 rounded-xl p-1 gap-1">
            <button
              onClick={() => setDeviceMode('desktop')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${
                deviceMode === 'desktop'
                  ? 'bg-cyan-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Desktop View (100%)"
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>Desktop</span>
            </button>

            <button
              onClick={() => setDeviceMode('tablet')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${
                deviceMode === 'tablet'
                  ? 'bg-cyan-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Tablet View (768px)"
            >
              <Tablet className="w-3.5 h-3.5" />
              <span>Tablet</span>
            </button>

            <button
              onClick={() => setDeviceMode('mobile')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${
                deviceMode === 'mobile'
                  ? 'bg-cyan-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Mobile View (390px)"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Mobile</span>
            </button>
          </div>
        )}

        {/* Right: Actions (Fullscreen, Contact CTA, Close) */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => onNavigateToContact(project.title)}
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-bold text-xs hover:brightness-110 shadow-[0_0_15px_rgba(0,240,255,0.4)] transition"
          >
            <span>Start Similar Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition"
            title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 hover:bg-rose-500 hover:text-white transition"
            title="Close Preview (Esc)"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* 2. Main Center Stage (Browser Mockup + Scrollable Prototype) */}
      <div className="flex-1 overflow-y-auto p-2 sm:p-6 flex flex-col items-center justify-start custom-scrollbar">
        
        {/* Browser / Prototype Window Container */}
        <div className={`w-full ${getContainerWidthClass()} transition-all duration-300 my-auto`}>
          
          {/* Browser Chrome Header (For Web / Portals) */}
          {!isApp && (
            <div className="w-full bg-[#080d1e] border-t border-x border-slate-800 rounded-t-2xl px-4 py-2.5 flex items-center justify-between gap-3 shadow-2xl select-none">
              
              {/* Window Dots */}
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>

              {/* URL Address Bar */}
              <div className="flex-1 max-w-md mx-auto bg-slate-950 border border-slate-800/90 rounded-lg px-3 py-1 text-xs text-slate-300 flex items-center justify-between gap-2 shadow-inner">
                <div className="flex items-center gap-1.5 truncate">
                  <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span className="text-emerald-400 font-mono text-[11px]">https://</span>
                  <span className="text-slate-200 font-mono text-[11px] truncate">
                    live.avrx.in/projects/{project.id}
                  </span>
                </div>

                <button 
                  onClick={handleReload}
                  className={`text-slate-400 hover:text-white transition ${isReloading ? 'animate-spin' : ''}`}
                  title="Reload Prototype"
                >
                  <RotateCw className="w-3 h-3" />
                </button>
              </div>

              {/* Resolution Tag */}
              <div className="text-[10px] font-mono text-slate-500 hidden sm:block">
                {deviceMode === 'desktop' ? '1920 × 1080 (HD)' : deviceMode === 'tablet' ? '768 × 1024' : '390 × 844'}
              </div>

            </div>
          )}

          {/* Prototype Display Body */}
          <div className={`w-full bg-[#03060f] border border-slate-800 ${
            isApp ? 'rounded-3xl p-2' : 'rounded-b-2xl border-t-0'
          } shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden min-h-[500px]`}>
            
            {isReloading ? (
              <div className="h-[500px] flex items-center justify-center text-center text-slate-400">
                <RotateCw className="w-8 h-8 text-cyan-400 animate-spin mx-auto mb-2" />
                <p className="text-xs">Refreshing interactive experience...</p>
              </div>
            ) : isApp ? (
              <AppInteractivePreview 
                project={project}
                onOpenContact={(pName) => onNavigateToContact(pName)}
              />
            ) : (
              <WebsiteInteractivePreview 
                project={project}
                onOpenContact={(pName) => onNavigateToContact(pName)}
              />
            )}

          </div>

        </div>

      </div>

      {/* 3. Bottom Information & Performance Metrics Drawer */}
      <div className="bg-[#050814] border-t border-slate-800/90 px-4 sm:px-6 py-3 shrink-0 z-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
          
          {/* Performance Metrics */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Verified Results:</span>
            </span>

            {project.metrics.map((m, idx) => (
              <div key={idx} className="flex items-center gap-1.5 bg-slate-900/80 px-2.5 py-1 rounded-lg border border-slate-800">
                <span className="font-extrabold text-cyan-400">{m.value}</span>
                <span className="text-slate-300 font-medium text-[11px]">{m.label}</span>
              </div>
            ))}
          </div>

          {/* Core Feature Badges */}
          <div className="hidden lg:flex items-center gap-2">
            <span className="inline-flex items-center gap-1 text-[11px] text-emerald-300 font-medium">
              <CheckCircle2 className="w-3 h-3 text-emerald-400" /> 100% Responsive
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] text-emerald-300 font-medium">
              <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Modern UI/UX
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] text-emerald-300 font-medium">
              <CheckCircle2 className="w-3 h-3 text-emerald-400" /> SEO Ready
            </span>
          </div>

          {/* CTA on mobile/desktop */}
          <button
            onClick={() => onNavigateToContact(project.title)}
            className="w-full sm:w-auto px-4 py-2 rounded-xl bg-cyan-400 text-slate-950 font-bold hover:bg-cyan-300 transition shadow-md flex items-center justify-center gap-1.5 text-xs"
          >
            <span>Start Your Project With AVRX</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

        </div>
      </div>

    </div>
  );
};
