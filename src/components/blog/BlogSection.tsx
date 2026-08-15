import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { BlogCard } from './BlogCard';
import { BLOG_POSTS_DATA } from '../../data/blogData';

interface BlogSectionProps {
  onNavigate: (page: string, postSlug?: string) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onNavigate }) => {
  // Show top 3 featured/latest posts on homepage
  const homepagePosts = BLOG_POSTS_DATA.slice(0, 3);

  const handleCardClick = (slug: string) => {
    onNavigate('blog-post', slug);
  };

  return (
    <section className="py-24 bg-[#050811] relative overflow-hidden border-t border-slate-800/80">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 right-10 w-72 h-72 bg-[#FF9933]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(0,240,255,0.15)]">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>AVRX INSIGHTS</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Insights That Move Your Business Forward
          </h2>

          {/* Subheading */}
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Practical insights on Digital Solutions, Finance, Tax, Insurance and Business Growth.
          </p>
        </div>

        {/* 3-Column Responsive Grid (Desktop 3, Tablet 2, Mobile 1) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {homepagePosts.map((post, idx) => (
            <BlogCard
              key={post.id}
              post={post}
              onSelect={handleCardClick}
              featured={idx === 0}
            />
          ))}
        </div>

        {/* Homepage Bottom CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={() => onNavigate('blog')}
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-slate-900/90 hover:bg-cyan-500 text-slate-200 hover:text-slate-950 font-bold text-sm border border-slate-800 hover:border-cyan-400 transition-all duration-300 shadow-xl hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:scale-105 active:scale-95"
          >
            <span>Explore All Insights</span>
            <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:text-slate-950 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};
