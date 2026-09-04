import React, { useState, useEffect } from 'react';
import { 
  Dices, 
  Sparkles, 
  Clock, 
  Calendar, 
  ArrowRight, 
  CheckCircle2, 
  RefreshCw,
  Bookmark,
  Share2,
  Tag
} from 'lucide-react';
import { BlogPost, BlogCategory } from '../../types/blog';
import { getRandomFeaturedBlogPost, BLOG_POSTS_DATA } from '../../data/blogData';

interface RandomFeaturedBlogSectionProps {
  onSelectPost: (slug: string) => void;
  titlePrefix?: string;
  className?: string;
  categoryFilter?: 'All' | BlogCategory;
  showShuffleButton?: boolean;
}

export const RandomFeaturedBlogSection: React.FC<RandomFeaturedBlogSectionProps> = ({
  onSelectPost,
  titlePrefix = 'Featured Spotlight',
  className = '',
  categoryFilter = 'All',
  showShuffleButton = true
}) => {
  // Initialize with a random blog, making sure it changes across visits
  const [featuredPost, setFeaturedPost] = useState<BlogPost>(() => {
    let lastSlug: string | null = null;
    try {
      if (typeof window !== 'undefined' && window.sessionStorage) {
        lastSlug = window.sessionStorage.getItem('avrx_featured_blog_slug');
      }
    } catch {
      // ignore
    }
    const selected = getRandomFeaturedBlogPost(lastSlug || undefined, categoryFilter);
    try {
      if (typeof window !== 'undefined' && window.sessionStorage) {
        window.sessionStorage.setItem('avrx_featured_blog_slug', selected.slug);
      }
    } catch {
      // ignore
    }
    return selected;
  });

  const [isRotating, setIsRotating] = useState(false);
  const [isFading, setIsFading] = useState(false);

  // When categoryFilter changes, if current post does not match, pick a random one in that category
  useEffect(() => {
    if (categoryFilter && categoryFilter !== 'All' && featuredPost.category !== categoryFilter) {
      const newPost = getRandomFeaturedBlogPost(featuredPost.slug, categoryFilter);
      setFeaturedPost(newPost);
    }
  }, [categoryFilter]);

  const handleShuffle = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setIsRotating(true);
    setIsFading(true);

    setTimeout(() => {
      const nextPost = getRandomFeaturedBlogPost(featuredPost.slug, categoryFilter);
      setFeaturedPost(nextPost);
      try {
        if (typeof window !== 'undefined' && window.sessionStorage) {
          window.sessionStorage.setItem('avrx_featured_blog_slug', nextPost.slug);
        }
      } catch {
        // ignore
      }
      setIsFading(false);
      setTimeout(() => setIsRotating(false), 200);
    }, 220);
  };

  const getCategoryBadgeClass = (category: string) => {
    switch (category) {
      case 'Digital Solutions':
        return 'bg-cyan-500/15 text-cyan-300 border-cyan-500/40 shadow-cyan-500/10';
      case 'Financial Solutions':
        return 'bg-emerald-500/15 text-emerald-300 border-emerald-500/40 shadow-emerald-500/10';
      case 'Tax & GST':
        return 'bg-amber-500/15 text-amber-300 border-amber-500/40 shadow-amber-500/10';
      case 'Insurance':
        return 'bg-purple-500/15 text-purple-300 border-purple-500/40 shadow-purple-500/10';
      case 'Business & Startup':
        return 'bg-rose-500/15 text-rose-300 border-rose-500/40 shadow-rose-500/10';
      default:
        return 'bg-blue-500/15 text-blue-300 border-blue-500/40 shadow-blue-500/10';
    }
  };

  if (!featuredPost) return null;

  return (
    <div className={`relative w-full ${className}`}>
      {/* Decorative Outer Glow */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-indigo-500/15 to-emerald-500/20 blur-xl opacity-75 pointer-events-none" />

      <div className="relative rounded-3xl bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-slate-950/95 border border-cyan-500/40 hover:border-cyan-400/60 p-6 sm:p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-2xl overflow-hidden transition-all duration-300">
        
        {/* Subtle grid texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370f_1px,transparent_1px),linear-gradient(to_bottom,#1f29370f_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />
        
        {/* Top Header Bar with Live Indicator & Shuffle Control */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800/80 mb-6 sm:mb-8">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-500 text-slate-950 text-xs font-black tracking-wide shadow-md shadow-cyan-500/25">
              <Sparkles className="w-3.5 h-3.5 fill-slate-950 text-slate-950" />
              <span>RANDOM FEATURED BLOG</span>
            </span>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/90 border border-slate-700/80 text-cyan-300 text-xs font-mono font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
              <span>हर विज़िट पर नया लेख (Random on every visit)</span>
            </span>
          </div>

          {showShuffleButton && (
            <button
              onClick={handleShuffle}
              disabled={isRotating}
              title="Click to discover another random article"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800/90 hover:bg-slate-750 text-slate-200 hover:text-white border border-slate-700 hover:border-cyan-500/50 text-xs font-bold transition-all shadow-md active:scale-95 cursor-pointer group/shuffle"
            >
              <Dices className={`w-4 h-4 text-cyan-400 group-hover/shuffle:text-cyan-300 transition-transform ${isRotating ? 'animate-spin' : ''}`} />
              <span>डिस्कवर नया लेख (Shuffle Random)</span>
            </button>
          )}
        </div>

        {/* Content Body Grid */}
        <div className={`relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center transition-opacity duration-200 ${isFading ? 'opacity-30' : 'opacity-100'}`}>
          
          {/* Left Column: Interactive Image */}
          <div 
            onClick={() => onSelectPost(featuredPost.slug)}
            className="lg:col-span-6 relative aspect-[16/10] rounded-2xl overflow-hidden bg-slate-950 border border-slate-800/80 shadow-2xl group/img cursor-pointer"
          >
            <img
              src={featuredPost.featuredImage}
              alt={featuredPost.imageAlt || featuredPost.title}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/img:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

            {/* Badges on Top of Image */}
            <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
              <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border backdrop-blur-md shadow-lg ${getCategoryBadgeClass(featuredPost.category)}`}>
                {featuredPost.category}
              </span>

              <span className="px-2.5 py-1 rounded-full bg-slate-950/85 border border-slate-700/80 text-[11px] font-mono text-emerald-300 backdrop-blur-md flex items-center gap-1.5 shadow-md">
                <Clock className="w-3 h-3 text-emerald-400" />
                <span>{featuredPost.readTime}</span>
              </span>
            </div>

            {/* Bottom Subtle Overlay Note */}
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] text-slate-300/90 font-mono pointer-events-none">
              <span className="truncate">AVRX Business Intelligence</span>
              <span className="text-cyan-400 font-semibold group-hover/img:underline">Click to read →</span>
            </div>
          </div>

          {/* Right Column: Content & Direct Actions */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-5 text-left">
            <div className="space-y-4">
              
              {/* Meta details */}
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  {featuredPost.date}
                </span>
                <span className="text-slate-600">•</span>
                <span className="text-slate-300">
                  लेखक: <strong className="text-white font-semibold">{featuredPost.author.name}</strong>
                </span>
                <span className="text-slate-600">•</span>
                <span className="text-cyan-400 font-semibold">
                  {featuredPost.category}
                </span>
              </div>

              {/* Title */}
              <h3 
                onClick={() => onSelectPost(featuredPost.slug)}
                className="text-2xl sm:text-3xl lg:text-3xl font-black text-white hover:text-cyan-300 transition-colors leading-tight cursor-pointer"
              >
                {featuredPost.title}
              </h3>

              {/* Excerpt */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed line-clamp-3 sm:line-clamp-4">
                {featuredPost.excerpt}
              </p>

              {/* Quick Topic Chips */}
              {featuredPost.tags && featuredPost.tags.length > 0 && (
                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  <span className="text-xs text-slate-500 font-mono mr-1">मुख्य विषय:</span>
                  {featuredPost.tags.slice(0, 4).map((tag, idx) => (
                    <span 
                      key={idx}
                      className="px-2.5 py-0.5 rounded-md bg-slate-800/80 border border-slate-700/60 text-slate-300 text-xs font-mono"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="pt-5 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <button
                onClick={() => onSelectPost(featuredPost.slug)}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-slate-950 font-black text-sm transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] cursor-pointer"
              >
                <span>पूरा लेख पढ़ें (Read Complete Guide)</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {showShuffleButton && (
                <button
                  onClick={handleShuffle}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-750 text-slate-300 hover:text-white border border-slate-700 text-xs font-semibold transition cursor-pointer"
                >
                  <Dices className="w-4 h-4 text-cyan-400" />
                  <span>कोई अन्य लेख दिखाएं</span>
                </button>
              )}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
