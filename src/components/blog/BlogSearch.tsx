import React from 'react';
import { Search, X } from 'lucide-react';

interface BlogSearchProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onClear: () => void;
  resultCount?: number;
}

export const BlogSearch: React.FC<BlogSearchProps> = ({
  searchQuery,
  onSearchChange,
  onClear,
  resultCount
}) => {
  return (
    <div className="relative w-full max-w-md">
      <div className="relative flex items-center">
        <Search className="absolute left-4 w-4 h-4 text-cyan-400 pointer-events-none" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search articles..."
          className="w-full pl-11 pr-10 py-2.5 rounded-2xl bg-slate-900/90 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-slate-500 text-sm transition outline-none shadow-inner"
        />
        {searchQuery && (
          <button
            onClick={onClear}
            className="absolute right-3 p-1 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition"
            title="Clear search"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {searchQuery && resultCount !== undefined && (
        <div className="absolute top-full mt-1.5 left-2 text-[11px] font-mono text-cyan-300">
          Found {resultCount} {resultCount === 1 ? 'article' : 'articles'} matching "{searchQuery}"
        </div>
      )}
    </div>
  );
};
