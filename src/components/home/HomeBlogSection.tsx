import React, { useState, useMemo } from 'react';
import { 
  BLOG_POSTS_DATA, 
  BLOG_CATEGORIES, 
  CATEGORY_METAS, 
  CategoryMeta 
} from '../../data/blogData';
import { BlogCategory, BlogPost } from '../../types/blog';
import { 
  BookOpen, 
  Sparkles, 
  Search, 
  ArrowRight, 
  Clock, 
  Calendar, 
  Layers, 
  Globe, 
  DollarSign, 
  FileText, 
  Shield, 
  TrendingUp, 
  ChevronRight,
  BookmarkCheck,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

interface HomeBlogSectionProps {
  onNavigate: (page: string, slug?: string) => void;
}

export const HomeBlogSection: React.FC<HomeBlogSectionProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | BlogCategory>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Category icons mapper
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Digital Solutions':
        return <Globe className="w-4 h-4 text-cyan-400" />;
      case 'Financial Solutions':
        return <DollarSign className="w-4 h-4 text-emerald-400" />;
      case 'Tax & GST':
        return <FileText className="w-4 h-4 text-amber-400" />;
      case 'Insurance':
        return <Shield className="w-4 h-4 text-purple-400" />;
      case 'Business & Startup':
        return <Sparkles className="w-4 h-4 text-rose-400" />;
      default:
        return <BookOpen className="w-4 h-4 text-cyan-400" />;
    }
  };

  // Category badge & border styles
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Digital Solutions':
        return 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30';
      case 'Financial Solutions':
        return 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30';
      case 'Tax & GST':
        return 'bg-amber-500/10 text-amber-300 border-amber-500/30';
      case 'Insurance':
        return 'bg-purple-500/10 text-purple-300 border-purple-500/30';
      case 'Business & Startup':
        return 'bg-rose-500/10 text-rose-300 border-rose-500/30';
      default:
        return 'bg-blue-500/10 text-blue-300 border-blue-500/30';
    }
  };

  // Filtered posts based on active tab and search query
  const filteredPosts = useMemo(() => {
    return BLOG_POSTS_DATA.filter(post => {
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      return (
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q) ||
        post.tags?.some(tag => tag.toLowerCase().includes(q))
      );
    });
  }, [selectedCategory, searchQuery]);

  // Featured post for highlighted preview
  const featuredPost = useMemo(() => {
    return (
      filteredPosts.find(p => p.isFeatured) || 
      filteredPosts[0] || 
      BLOG_POSTS_DATA[0]
    );
  }, [filteredPosts]);

  // Remaining posts for grid
  const gridPosts = useMemo(() => {
    if (selectedCategory === 'All' && !searchQuery.trim()) {
      return filteredPosts.filter(p => p.slug !== featuredPost?.slug);
    }
    return filteredPosts;
  }, [filteredPosts, featuredPost, selectedCategory, searchQuery]);

  const activeCategoryMeta = CATEGORY_METAS.find(m => m.id === selectedCategory);

  const handleOpenBlogPost = (slug: string) => {
    onNavigate('blog-post', slug);
  };

  return (
    <section id="home-blog-section" className="py-24 bg-[#040814] relative overflow-hidden border-t border-slate-800/80">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-10 left-1/4 -translate-x-1/2 w-[650px] h-[400px] bg-gradient-to-tr from-cyan-600/15 via-blue-600/10 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[600px] h-[400px] bg-gradient-to-bl from-purple-600/15 via-emerald-600/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold font-mono uppercase tracking-widest">
              <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
              <span>AVRX Blog &amp; Knowledge Hub</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              ताज़ा लेख, गाइड एवं{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                व्यापारिक इनसाइट्स
              </span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              वेबसाइट डेवलपमेंट, बिजनेस लोन, जीएसटी टैक्स कंप्लायंस, कमर्शियल इंश्योरेंस और एआई टूल्स पर व्यावहारिक और प्रमाणिक आर्टिकल्स।
            </p>
          </div>

          {/* Quick Search & Explore All Button */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="relative min-w-[260px] sm:min-w-[300px]">
              <Search className="w-4 h-4 text-cyan-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search blogs, topics or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-cyan-500 focus:outline-none text-white text-xs placeholder:text-slate-500 transition-all shadow-inner"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs"
                >
                  ✕
                </button>
              )}
            </div>

            <button
              onClick={() => onNavigate('blog')}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-cyan-500/30 hover:border-cyan-400 text-xs font-bold transition-all shadow-md cursor-pointer whitespace-nowrap"
            >
              <span>Explore All Blogs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 pb-2 border-b border-slate-800/80">
          {BLOG_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            const count = cat === 'All' 
              ? BLOG_POSTS_DATA.length 
              : BLOG_POSTS_DATA.filter(p => p.category === cat).length;

            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-lg shadow-cyan-500/20'
                    : 'bg-slate-900/90 text-slate-300 hover:text-white hover:bg-slate-800 border-slate-800'
                }`}
              >
                {cat !== 'All' && getCategoryIcon(cat)}
                <span>{cat}</span>
                <span className={`px-1.5 py-0.5 rounded-md text-[10px] font-mono ${
                  isSelected ? 'bg-slate-950/30 text-slate-950' : 'bg-slate-800 text-slate-400'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Category Information Banner (if specific category selected) */}
        {activeCategoryMeta && selectedCategory !== 'All' && (
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider border ${getCategoryColor(activeCategoryMeta.id)}`}>
                  {activeCategoryMeta.badge}
                </span>
                <h4 className="text-white font-bold text-sm sm:text-base">
                  {activeCategoryMeta.name} — <span className="text-cyan-400 font-normal text-xs sm:text-sm">{activeCategoryMeta.hindiTitle}</span>
                </h4>
              </div>
              <p className="text-slate-400 text-xs sm:text-sm max-w-4xl">
                {activeCategoryMeta.description}
              </p>
            </div>
            <button
              onClick={() => onNavigate('blog')}
              className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-semibold whitespace-nowrap cursor-pointer"
            >
              <span>View All in {activeCategoryMeta.id}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* FEATURED SPOTLIGHT ARTICLE (When on "All" or if post matches) */}
        {selectedCategory === 'All' && !searchQuery && featuredPost && (
          <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-cyan-500/30 hover:border-cyan-500/60 p-6 sm:p-8 lg:p-10 shadow-[0_12px_45px_rgba(0,0,0,0.5)] transition-all duration-300 group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Featured Image with Zoom */}
              <div 
                onClick={() => handleOpenBlogPost(featuredPost.slug)}
                className="lg:col-span-6 relative aspect-[16/10] rounded-2xl overflow-hidden bg-slate-950 cursor-pointer shadow-xl"
              >
                <img
                  src={featuredPost.featuredImage}
                  alt={featuredPost.imageAlt || featuredPost.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                
                {/* Badges Overlay */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border backdrop-blur-md shadow-md ${getCategoryColor(featuredPost.category)}`}>
                    {featuredPost.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500 text-slate-950 text-xs font-black tracking-wide shadow-lg">
                    <Sparkles className="w-3.5 h-3.5 text-slate-950 fill-slate-950" />
                    <span>FEATURED ARTICLE</span>
                  </span>
                </div>

                <div className="absolute bottom-3 left-4 text-[11px] text-slate-300 font-mono">
                  AVRX Flagship Guide • Complete 2026 Edition
                </div>
              </div>

              {/* Featured Content & Details */}
              <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 font-mono">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      {featuredPost.date}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-slate-600" />
                    <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                      <Clock className="w-3.5 h-3.5" />
                      {featuredPost.readTime}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-slate-600" />
                    <span className="text-slate-300">
                      By {featuredPost.author.name}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 
                    onClick={() => handleOpenBlogPost(featuredPost.slug)}
                    className="text-2xl sm:text-3xl font-black text-white group-hover:text-cyan-300 transition-colors leading-tight cursor-pointer"
                  >
                    {featuredPost.title}
                  </h3>

                  {/* Tagline / Excerpt */}
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed line-clamp-3">
                    {featuredPost.excerpt}
                  </p>

                  {/* Key Highlights / Tagline Points */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                    <div className="flex items-center gap-2 text-xs text-slate-300 bg-slate-950/60 px-3 py-2 rounded-xl border border-slate-800/80">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span className="truncate">10 Major Business Advantages</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-300 bg-slate-950/60 px-3 py-2 rounded-xl border border-slate-800/80">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="truncate">SEO &amp; Organic Leads Guide</span>
                    </div>
                  </div>
                </div>

                {/* Continue Read Button & Tags */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {featuredPost.tags?.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-lg bg-slate-800/80 text-slate-400 text-[11px] font-mono">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => handleOpenBlogPost(featuredPost.slug)}
                    className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-sm transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] cursor-pointer"
                  >
                    <span>Continue Read</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* BLOG GRID (Categorized Blogs with Image, Tagline, Excerpt, Author, and Continue Read Button) */}
        {gridPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {gridPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => handleOpenBlogPost(post.slug)}
                className="group relative rounded-3xl bg-slate-900/80 border border-slate-800/90 hover:border-cyan-500/40 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_12px_40px_rgba(0,240,255,0.12)] transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col overflow-hidden"
              >
                {/* Image Container with Zoom & Tagline Overlay */}
                <div className="relative w-full aspect-[16/9] overflow-hidden bg-slate-950">
                  <img
                    src={post.featuredImage}
                    alt={post.imageAlt || post.title}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent" />

                  {/* Badges on Image */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                    <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider border backdrop-blur-md shadow-md ${getCategoryColor(post.category)}`}>
                      {post.category}
                    </span>

                    <span className="px-2 py-0.5 rounded-full bg-slate-950/80 border border-slate-700/80 text-[10px] font-mono text-slate-300 backdrop-blur-md">
                      {post.readTime}
                    </span>
                  </div>

                  {/* Tagline on image bottom */}
                  <div className="absolute bottom-2 left-3 right-3 text-[10px] text-slate-300 font-mono drop-shadow truncate">
                    {post.tags && post.tags.length > 0 ? `#${post.tags[0]}` : 'AVRX Enterprise Blog'}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between space-y-4 relative z-10">
                  <div className="space-y-2.5">
                    {/* Metadata Row */}
                    <div className="flex items-center gap-3 text-[11px] text-slate-400 font-mono">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-cyan-400" />
                        {post.date}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-slate-600" />
                      <span className="text-slate-400 truncate">
                        {post.author.name}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Tagline / Excerpt */}
                    <p className="text-slate-400 text-xs leading-relaxed line-clamp-2 sm:line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Action Row with Continue Read Button */}
                  <div className="pt-3.5 border-t border-slate-800/80 flex items-center justify-between gap-2">
                    <span className="text-[11px] text-slate-500 font-mono">
                      {post.category}
                    </span>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenBlogPost(post.slug);
                      }}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500 text-cyan-300 hover:text-slate-950 border border-cyan-500/30 hover:border-cyan-400 text-xs font-bold transition-all shadow-sm group-hover:translate-x-0.5 cursor-pointer whitespace-nowrap"
                    >
                      <span>Continue Read</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 px-4 bg-slate-900/40 rounded-3xl border border-slate-800 space-y-4">
            <BookOpen className="w-12 h-12 text-slate-600 mx-auto" />
            <h3 className="text-lg font-bold text-white">No blogs found matching "{searchQuery}"</h3>
            <p className="text-slate-400 text-xs max-w-md mx-auto">
              Try searching with other keywords or switch to a different category tab.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Bottom Banner & CTA to Full Blog Engine */}
        <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-[#071328] to-slate-900 border border-cyan-500/30 p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 text-[11px] font-bold uppercase tracking-wider">
              <Sparkles className="w-3 h-3 text-cyan-400" />
              <span>Full Resource Directory</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-black text-white">
              Want to read all 50+ In-Depth Guides &amp; Whitepapers?
            </h4>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Explore our full blog directory with structured chapter outlines, interactive calculators, download checklists, and Hindi translations.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              onClick={() => onNavigate('blog')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black text-xs sm:text-sm transition-all shadow-lg shadow-cyan-500/25 cursor-pointer whitespace-nowrap"
            >
              <span>Visit Full Blog Directory</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
