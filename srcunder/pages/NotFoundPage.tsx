import React from 'react';
import { SEO } from '../components/common/SEO';
import { ArrowLeft, Home } from 'lucide-react';

interface NotFoundPageProps {
  onNavigate: (page: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#050811] text-white pt-32 pb-20 flex items-center justify-center text-center">
      <SEO title="Page Not Found | AVRX" description="The requested page could not be found." />
      <div className="space-y-6 max-w-md px-4">
        <div className="text-6xl font-black text-cyan-400 font-mono">404</div>
        <h1 className="text-2xl font-bold text-white">Page Not Found</h1>
        <p className="text-slate-400 text-sm">
          The requested page URL does not exist or has been moved in the AVRX ecosystem directory.
        </p>
        <button
          onClick={() => onNavigate('home')}
          className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-bold text-xs rounded-xl transition inline-flex items-center gap-2"
        >
          <Home className="w-4 h-4" />
          <span>Return to Homepage</span>
        </button>
      </div>
    </div>
  );
};
