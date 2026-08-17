import React, { useState, useMemo } from 'react';
import { BLOG_POSTS_DATA, BLOG_CATEGORIES } from '../data/blogData';
import { BlogCategory, BlogPost } from '../types/blog';
import { SEO } from '../components/common/SEO';
import { BlogHero } from '../components/blog/BlogHero';
import { CategoryFilter } from '../components/blog/CategoryFilter';
import { BlogSearch } from '../components/blog/BlogSearch';
import { BlogCard } from '../components/blog/BlogCard';
import { BookOpen, Sparkles, Filter, RefreshCw } from 'lucide-react';

interface BlogPageProps {
  onSelectPost: (slug: string) => void;
  initialCategory?: 'All' | BlogCategory;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onSelectPost, initialCategory = 'All' }) => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | BlogCategory>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Calculate counts per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      All: BLOG_POSTS_DATA.length
    };

    BLOG_POSTS_DATA.forEach(post => {
      counts[post.category] = (counts[post.category] || 0) + 1;
    });

    return counts;
  }, []);

  // Filtered posts based on category and search query
  const filteredPosts = useMemo(() => {
    return BLOG_POSTS_DATA.filter(post => {
      // Category match
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      if (!matchesCategory) return false;

      // Search match
      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      const matchTitle = post.title.toLowerCase().includes(q);
      const matchExcerpt = post.excerpt.toLowerCase().includes(q);
      const matchCategory = post.category.toLowerCase().includes(q);
      const matchTags = post.tags.some(tag => tag.toLowerCase().includes(q));

      return matchTitle || matchExcerpt || matchCategory || matchTags;
    });
  }, [selectedCategory, searchQuery]);

  const handleClearFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-[#050811] text-white pb-24">
      {/* Blog Page SEO */}
      <SEO
        title="Business & Digital Insights | AVRX"
        description="AVRX Insights पर Digital Solutions, Finance, Tax, Insurance और Business Growth से जुड़े practical articles पढ़ें।"
      />

      {/* Hero Section */}
      <BlogHero />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-10">
        
        {/* Controls Bar: Search + Category Filters */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 pb-6 border-b border-slate-800/80">
          <CategoryFilter
            activeCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            categoryCounts={categoryCounts}
          />

          <div className="flex items-center gap-3">
            <BlogSearch
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              onClear={() => setSearchQuery('')}
              resultCount={filteredPosts.length}
            />
          </div>
        </div>

        {/* Results Counter / Filter Indicator */}
        <div className="flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span>Showing <strong className="text-white">{filteredPosts.length}</strong> {filteredPosts.length === 1 ? 'article' : 'articles'}</span>
            {selectedCategory !== 'All' && (
              <span className="px-2 py-0.5 rounded-md bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 font-semibold">
                {selectedCategory}
              </span>
            )}
          </div>

          {(selectedCategory !== 'All' || searchQuery) && (
            <button
              onClick={handleClearFilters}
              className="text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition underline"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Reset Filters</span>
            </button>
          )}
        </div>

        {/* Articles Grid (Desktop 3, Tablet 2, Mobile 1) */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, idx) => (
              <BlogCard
                key={post.id}
                post={post}
                onSelect={onSelectPost}
                featured={idx === 0 && selectedCategory === 'All' && !searchQuery}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="py-20 text-center rounded-3xl bg-slate-900/60 border border-slate-800 max-w-xl mx-auto space-y-5 p-8">
            <div className="p-4 rounded-2xl bg-slate-800/80 w-fit mx-auto text-slate-400">
              <Filter className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">No articles found</h3>
              <p className="text-sm text-slate-400">
                We couldn't find any articles matching your search query "{searchQuery}" in category "{selectedCategory}".
              </p>
            </div>
            <button
              onClick={handleClearFilters}
              className="px-6 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs hover:brightness-110 transition shadow-lg"
            >
              Clear All Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
