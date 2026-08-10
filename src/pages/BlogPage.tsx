import React from 'react';
import { BLOG_POSTS } from '../data/servicesData';
import { SEO } from '../components/common/SEO';
import { ArrowRight, Calendar, User, BookOpen } from 'lucide-react';

interface BlogPageProps {
  onSelectPost: (postId: string) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onSelectPost }) => {
  return (
    <div className="min-h-screen bg-[#050811] text-white pt-28 pb-20">
      <SEO
        title="AVRX Insights & Strategy Blog | Digital, Loans, Tax & AI"
        description="Read latest insights on website development, business loan eligibility, GST compliance, and AI growth strategies."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
            <BookOpen className="w-4 h-4 text-cyan-400" />
            <span>Market Intelligence & Insights</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white">
            AVRX Strategy Blog
          </h1>
          <p className="text-slate-300 text-base sm:text-lg">
            Practical guides on digital growth, loan disbursement strategies, tax saving, and AI integration for Indian businesses.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map(post => (
            <div
              key={post.id}
              onClick={() => onSelectPost(post.id)}
              className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 transition duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between space-y-6 shadow-xl group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 font-semibold">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    {post.date}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition leading-snug">
                  {post.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-cyan-400 group-hover:translate-x-1 transition">
                <span className="flex items-center gap-1 text-slate-400">
                  <User className="w-3.5 h-3.5 text-slate-500" />
                  {post.author}
                </span>
                <div className="flex items-center gap-1">
                  <span>Read Guide</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
