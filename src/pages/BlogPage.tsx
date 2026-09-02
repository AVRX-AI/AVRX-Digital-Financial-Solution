import React, { useState, useMemo } from 'react';
import { 
  BLOG_POSTS_DATA, 
  BLOG_CATEGORIES, 
  CATEGORY_METAS,
  CategoryMeta 
} from '../data/blogData';
import { BlogCategory, BlogPost } from '../types/blog';
import { SEO } from '../components/common/SEO';
import { BlogCard } from '../components/blog/BlogCard';
import { 
  BookOpen, 
  Sparkles, 
  Search, 
  ArrowRight, 
  Clock, 
  Calendar, 
  Layers, 
  ShieldCheck, 
  Globe, 
  DollarSign, 
  FileText, 
  Shield, 
  TrendingUp, 
  ExternalLink,
  RefreshCw,
  SlidersHorizontal,
  LayoutGrid,
  ListFilter,
  CheckCircle2
} from 'lucide-react';

interface BlogPageProps {
  onSelectPost: (slug: string) => void;
  onNavigate?: (page: string, slug?: string) => void;
  initialCategory?: 'All' | BlogCategory;
}

export const BlogPage: React.FC<BlogPageProps> = ({ 
  onSelectPost, 
  onNavigate,
  initialCategory = 'Digital Solutions' 
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | BlogCategory>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'systematic-categories' | 'grid'>('grid');

  // Featured article (spotlight)
  const featuredPost = useMemo(() => {
    return BLOG_POSTS_DATA.find(p => p.isFeatured) || BLOG_POSTS_DATA[0];
  }, []);

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
      const matchTags = post.tags?.some(tag => tag.toLowerCase().includes(q));

      return matchTitle || matchExcerpt || matchCategory || matchTags;
    });
  }, [selectedCategory, searchQuery]);

  // Grouped posts by category for systematic section view
  const categorizedSections = useMemo(() => {
    return CATEGORY_METAS.map(meta => {
      let posts = BLOG_POSTS_DATA.filter(p => p.category === meta.id);
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        posts = posts.filter(post => 
          post.title.toLowerCase().includes(q) ||
          post.excerpt.toLowerCase().includes(q) ||
          post.tags?.some(tag => tag.toLowerCase().includes(q))
        );
      }
      return {
        meta,
        posts
      };
    }).filter(section => section.posts.length > 0);
  }, [searchQuery]);

  const handleClearFilters = () => {
    setSelectedCategory('Digital Solutions');
    setSearchQuery('');
  };

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe': return <Globe className="w-5 h-5" />;
      case 'DollarSign': return <DollarSign className="w-5 h-5" />;
      case 'FileText': return <FileText className="w-5 h-5" />;
      case 'Shield': return <Shield className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 pt-28 pb-24 relative overflow-hidden">
      {/* Blog Page SEO */}
      <SEO
        title="AVRX Knowledge Hub & Insights - Practical Business, Tech, Loan & Tax Guides"
        description="Comprehensive, practical guides on Next-Gen Web Development, MSME Business Loans (PMEGP, MUDRA), GST & ITR Compliance, Commercial Insurance, and AI Tools."
        canonicalUrl="https://avrx.in/blog"
      />

      {/* Ambient Neon Backdrops */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-cyan-500/10 via-blue-600/10 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 space-y-12 relative z-10">
        
        {/* Hub Header & Hero */}
        <div className="text-center max-w-4xl mx-auto space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/40 text-cyan-300 text-xs font-bold shadow-lg shadow-cyan-500/10">
            <BookOpen className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span>AVRX Systematic Knowledge &amp; Business Intelligence Hub</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
            Practical Guides for{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
              Growth, Finance &amp; Technology
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            व्यवस्थित श्रेणीवार आर्टिकल्स — वेबसाइट डेवलपमेंट, सरकारी लोन योजनाएं (PMEGP/MUDRA), जीएसटी अनुपालन, कमर्शियल इंश्योरेंस और आधुनिक एआई टूल्स।
          </p>

          {/* Interactive Live Search Bar */}
          <div className="max-w-2xl mx-auto relative pt-2">
            <Search className="w-5 h-5 text-cyan-400 absolute left-4 top-1/2 -translate-y-1/2 pt-0.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by topic (e.g. Website, PMEGP Loan, GST Filing, Trademark, AI Tools, SEO)..."
              className="w-full pl-12 pr-20 py-4 rounded-2xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 shadow-2xl text-sm sm:text-base backdrop-blur-xl"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white bg-slate-800 px-2.5 py-1 rounded-lg transition"
              >
                Clear
              </button>
            )}
          </div>

          {/* Quick Keywords Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-slate-400 pt-1">
            <span className="font-semibold text-slate-500">Popular Topics:</span>
            {['Business Website 2026', 'PMEGP Subsidy', 'GST ITC', 'MUDRA Loan', 'SEO AI', 'Shop Insurance', 'Free AI Tools'].map((keyword) => (
              <button
                key={keyword}
                onClick={() => setSearchQuery(keyword)}
                className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-cyan-400 text-xs transition"
              >
                {keyword}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Spotlight Article (Only shown when not searching & in 'All' category) */}
        {!searchQuery && selectedCategory === 'All' && featuredPost && (
          <div 
            onClick={() => onSelectPost(featuredPost.slug)}
            className="group relative rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/60 p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 cursor-pointer backdrop-blur-xl overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-5 text-left">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider">
                    ★ Featured Spotlight Guide
                  </span>
                  <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{featuredPost.readTime}</span>
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white group-hover:text-cyan-300 transition-colors leading-tight">
                  {featuredPost.title}
                </h2>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed line-clamp-3">
                  {featuredPost.excerpt}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 font-mono pt-2">
                  <span>By {featuredPost.author.name}</span>
                  <span>•</span>
                  <span>{featuredPost.date}</span>
                </div>

                <div className="pt-2">
                  <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-black text-xs group-hover:scale-105 transition-transform shadow-lg shadow-cyan-500/25">
                    <span>Read Complete 10-Point Blueprint</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>

              <div className="lg:col-span-6 rounded-2xl overflow-hidden aspect-[16/10] border border-slate-800 bg-slate-950 shadow-xl group-hover:scale-[1.02] transition-transform duration-500">
                <img
                  src={featuredPost.featuredImage}
                  alt={featuredPost.imageAlt || featuredPost.title}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        )}

        {/* Category Controls & View Switcher Bar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 p-4 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {BLOG_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    if (cat !== 'All') {
                      setViewMode('grid');
                    }
                  }}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-md shadow-cyan-500/25'
                      : 'bg-slate-950 border border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white'
                  }`}
                >
                  <span>{cat === 'All' ? 'All Blogs' : cat}</span>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono ${
                    isActive ? 'bg-slate-950/30 text-slate-950' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {categoryCounts[cat] || 0}
                  </span>
                </button>
              );
            })}
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-2 border-t lg:border-t-0 border-slate-800 pt-3 lg:pt-0">
            <span className="text-xs text-slate-400 font-semibold mr-1">View Mode:</span>
            <button
              onClick={() => {
                setViewMode('systematic-categories');
                setSelectedCategory('All');
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition ${
                viewMode === 'systematic-categories' && selectedCategory === 'All'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-slate-200'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Category Shelves</span>
            </button>

            <button
              onClick={() => setViewMode('grid')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition ${
                viewMode === 'grid' || selectedCategory !== 'All'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-slate-200'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>All Grid</span>
            </button>
          </div>
        </div>

        {/* RESULTS VIEW */}

        {/* MODE A: Systematic Category-Wise Shelves */}
        {viewMode === 'systematic-categories' && selectedCategory === 'All' && !searchQuery ? (
          <div className="space-y-16">
            {categorizedSections.map(({ meta, posts }) => (
              <section key={meta.id} className="space-y-6 pt-4 border-t border-slate-800/80 first:border-none first:pt-0">
                {/* Category Shelf Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-3xl bg-slate-900/60 border border-slate-800">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl bg-slate-950 border border-slate-800 ${meta.accentColor}`}>
                        {getCategoryIcon(meta.icon)}
                      </div>
                      <div>
                        <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                          <span>{meta.name}</span>
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-400">{meta.hindiTitle}</p>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 max-w-3xl pt-1">
                      {meta.description}
                    </p>
                  </div>

                  {/* Action Shortcuts for this Category */}
                  <div className="flex flex-wrap items-center gap-2 self-start md:self-center">
                    {onNavigate && meta.serviceLink && (
                      <button
                        onClick={() => {
                          const slug = meta.serviceLink.replace('/services/', '');
                          onNavigate('service-detail', slug);
                        }}
                        className="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 hover:text-white text-xs font-bold transition flex items-center gap-1"
                      >
                        <span>Related Services</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    )}
                    {onNavigate && meta.toolLink && (
                      <button
                        onClick={() => {
                          const slug = meta.toolLink.replace('/ai-tools/', '');
                          onNavigate('ai-tools', slug);
                        }}
                        className="px-3.5 py-1.5 rounded-xl bg-cyan-950/60 hover:bg-cyan-900/80 text-cyan-400 border border-cyan-500/30 text-xs font-bold transition flex items-center gap-1"
                      >
                        <span>Free AI Tool</span>
                        <Sparkles className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Articles in this Category */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {posts.map((post) => (
                    <BlogCard
                      key={post.id}
                      post={post}
                      onSelect={onSelectPost}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>
        ) : (
          /* MODE B: Filtered Grid View */
          <div className="space-y-6">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span>Showing <strong className="text-white">{filteredPosts.length}</strong> {filteredPosts.length === 1 ? 'article' : 'articles'}</span>
                {selectedCategory !== 'All' && (
                  <span className="px-2.5 py-0.5 rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 font-bold">
                    {selectedCategory}
                  </span>
                )}
                {searchQuery && (
                  <span className="px-2.5 py-0.5 rounded-lg bg-amber-500/10 text-amber-300 border border-amber-500/30 font-bold">
                    Search: "{searchQuery}"
                  </span>
                )}
              </div>

              {(selectedCategory !== 'All' || searchQuery) && (
                <button
                  onClick={handleClearFilters}
                  className="text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition underline font-semibold"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Reset All Filters</span>
                </button>
              )}
            </div>

            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map((post) => (
                  <BlogCard
                    key={post.id}
                    post={post}
                    onSelect={onSelectPost}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-slate-900/60 rounded-3xl border border-slate-800 space-y-4">
                <BookOpen className="w-12 h-12 text-slate-600 mx-auto" />
                <h3 className="text-lg font-bold text-white">No articles found matching your filter</h3>
                <p className="text-xs text-slate-400 max-w-sm mx-auto">
                  Try adjusting your search keywords or select 'All' to browse our full repository.
                </p>
                <button
                  onClick={handleClearFilters}
                  className="px-5 py-2 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs"
                >
                  Show All Articles
                </button>
              </div>
            )}
          </div>
        )}

        {/* Free Advisory & Tools Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-cyan-950/40 border border-cyan-500/30 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-left max-w-2xl">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
              Free Consultation &amp; Assessment
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Need tailored guidance for your business growth or compliance?
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Connect with AVRX Chartered Engineers, CA tax advisors, and banking specialists for 100% confidential, personalized advisory.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {onNavigate && (
              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-black text-xs sm:text-sm hover:from-cyan-400 hover:to-blue-500 shadow-xl shadow-cyan-500/25 transition"
              >
                Schedule Free 1-on-1 Advisory
              </button>
            )}
            {onNavigate && (
              <button
                onClick={() => onNavigate('ai-tools')}
                className="px-6 py-3.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm border border-slate-700 transition"
              >
                Explore 29 Free AI Tools
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
