import React from 'react';
import { Calendar, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { BlogPost } from '../../types/blog';

interface BlogCardProps {
  post: BlogPost;
  onSelect: (slug: string) => void;
  featured?: boolean;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post, onSelect, featured = false }) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Digital Solutions':
        return 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30';
      case 'Financial Solutions':
        return 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30';
      case 'Tax & GST':
        return 'bg-amber-500/10 text-amber-300 border-amber-500/30';
      case 'Insurance':
        return 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30';
      default:
        return 'bg-blue-500/10 text-blue-300 border-blue-500/30';
    }
  };

  return (
    <article
      onClick={() => onSelect(post.slug)}
      className={`group relative rounded-3xl bg-slate-900/80 border border-slate-800/90 hover:border-cyan-500/40 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_12px_40px_rgba(0,240,255,0.12)] transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col overflow-hidden ${
        featured ? 'ring-1 ring-cyan-500/30' : ''
      }`}
    >
      {/* Subtle AVRX Gradient Glow Shimmer on Hover */}
      <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-[#FF9933]/0 via-cyan-400/0 to-[#138808]/0 group-hover:from-[#FF9933]/15 group-hover:via-cyan-400/15 group-hover:to-[#138808]/15 transition-all duration-500 pointer-events-none" />

      {/* Image Container with Zoom */}
      <div className="relative w-full aspect-[16/9] overflow-hidden bg-slate-950">
        <img
          src={post.featuredImage}
          alt={post.imageAlt || post.title}
          loading="lazy"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

        {/* Badges on Image */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
          <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border backdrop-blur-md shadow-md ${getCategoryColor(post.category)}`}>
            {post.category}
          </span>

          {post.isFeatured && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-cyan-500/90 text-slate-950 text-[11px] font-black tracking-wide shadow-lg">
              <Sparkles className="w-3 h-3 text-slate-950 fill-slate-950" />
              <span>FEATURED</span>
            </span>
          )}

          {post.isComingSoon && (
            <span className="px-2.5 py-1 rounded-full bg-slate-900/90 text-amber-300 border border-amber-500/40 text-[11px] font-bold tracking-wide">
              COMING SOON
            </span>
          )}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between space-y-4 relative z-10">
        <div className="space-y-3">
          {/* Metadata Row */}
          <div className="flex items-center gap-4 text-xs text-slate-400 font-mono">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-cyan-400" />
              {post.date}
            </span>
            <span className="w-1 h-1 rounded-full bg-slate-600" />
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              {post.readTime}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed line-clamp-2 sm:line-clamp-3">
            {post.excerpt}
          </p>
        </div>

        {/* Footer Action */}
        <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2 text-xs font-semibold">
          <span className="text-slate-400 text-[11px] font-medium truncate">
            By <span className="text-slate-300">{post.author.name}</span>
          </span>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onSelect(post.slug);
            }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500 text-cyan-300 hover:text-slate-950 border border-cyan-500/30 hover:border-cyan-400 text-xs font-bold transition-all shadow-sm group-hover:translate-x-0.5 cursor-pointer whitespace-nowrap"
          >
            <span>Continue Read</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </article>
  );
};
