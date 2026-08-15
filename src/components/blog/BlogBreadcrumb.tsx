import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

interface BlogBreadcrumbProps {
  category: string;
  title: string;
  onNavigateHome: () => void;
  onNavigateBlog: () => void;
  onSelectCategory?: (category: string) => void;
}

export const BlogBreadcrumb: React.FC<BlogBreadcrumbProps> = ({
  category,
  title,
  onNavigateHome,
  onNavigateBlog,
  onSelectCategory
}) => {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 overflow-x-auto pb-1">
      <ol className="flex items-center gap-1.5 text-xs text-slate-400 whitespace-nowrap">
        <li>
          <button
            onClick={onNavigateHome}
            className="hover:text-cyan-300 transition flex items-center gap-1 text-slate-400"
            title="Go to Home"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
        </li>

        <li>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
        </li>

        <li>
          <button
            onClick={onNavigateBlog}
            className="hover:text-cyan-300 transition text-slate-400"
            title="Go to Blog"
          >
            Blog
          </button>
        </li>

        <li>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
        </li>

        <li>
          <button
            onClick={() => onSelectCategory ? onSelectCategory(category) : onNavigateBlog()}
            className="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-cyan-300 hover:border-cyan-500/40 transition font-semibold"
          >
            {category}
          </button>
        </li>

        <li>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
        </li>

        <li className="text-slate-200 font-medium truncate max-w-xs sm:max-w-md" title={title}>
          {title}
        </li>
      </ol>
    </nav>
  );
};
