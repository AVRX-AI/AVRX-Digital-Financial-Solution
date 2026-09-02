import React from 'react';
import { BlogCategory } from '../../types/blog';
import { BLOG_CATEGORIES } from '../../data/blogData';

interface CategoryFilterProps {
  activeCategory: 'All' | BlogCategory;
  onSelectCategory: (category: 'All' | BlogCategory) => void;
  categoryCounts?: Record<string, number>;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  activeCategory,
  onSelectCategory,
  categoryCounts = {}
}) => {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent">
      {BLOG_CATEGORIES.map(category => {
        const isActive = activeCategory === category;
        const count = categoryCounts[category];

        return (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 border ${
              isActive
                ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-[0_0_20px_rgba(0,240,255,0.4)] scale-105'
                : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white hover:bg-slate-850'
            }`}
          >
            <span>{category === 'All' ? 'All Blogs' : category}</span>
            {count !== undefined && (
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono font-bold ${
                  isActive
                    ? 'bg-slate-950/20 text-slate-950'
                    : 'bg-slate-800 text-slate-400'
                }`}
              >
                {count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};
