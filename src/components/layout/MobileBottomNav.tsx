import React from 'react';
import { 
  Home, 
  Layers, 
  Sparkles, 
  Calculator, 
  MessageSquare,
  Bot
} from 'lucide-react';

interface MobileBottomNavProps {
  activePage: string;
  onNavigate: (page: string, slug?: string) => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ activePage, onNavigate }) => {
  const navItems = [
    {
      id: 'home',
      label: 'Home',
      icon: Home,
      page: 'home'
    },
    {
      id: 'solutions',
      label: 'Services',
      icon: Layers,
      page: 'services'
    },
    {
      id: 'ai-tools',
      label: 'AI Hub',
      icon: Sparkles,
      page: 'ai-tools'
    },
    {
      id: 'projects',
      label: 'Lab',
      icon: Calculator,
      page: 'projects'
    },
    {
      id: 'contact',
      label: 'Contact',
      icon: MessageSquare,
      page: 'contact'
    }
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#050811]/95 backdrop-blur-2xl border-t border-slate-800/80 px-2 py-1 shadow-[0_-10px_25px_rgba(0,0,0,0.7)]">
      {/* Subtle Tricolour Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#FF9933]/50 via-white/50 via-[#138808]/50 to-transparent" />

      <div className="flex items-center justify-around">
        {navItems.map(item => {
          const Icon = item.icon;
          const isActive = activePage === item.page || (item.id === 'solutions' && ['digital-solutions', 'financial-solutions', 'tax-solutions', 'insurance-solutions'].includes(activePage));

          return (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.page);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`flex flex-col items-center justify-center py-1.5 px-3 rounded-xl transition-all cursor-pointer min-w-[56px] min-h-[48px] ${
                isActive
                  ? 'text-cyan-400 font-bold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <div className={`p-1 rounded-lg transition-transform ${isActive ? 'scale-110 text-cyan-400 bg-cyan-500/10' : ''}`}>
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono tracking-tight mt-0.5">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
