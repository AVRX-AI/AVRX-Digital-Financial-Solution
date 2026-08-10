import React from 'react';
import { BLOG_POSTS } from '../data/servicesData';
import { SEO } from '../components/common/SEO';
import { ArrowLeft, Calendar, User, BookOpen } from 'lucide-react';

interface BlogPostPageProps {
  postId: string;
  onBack: () => void;
  onNavigate: (page: string) => void;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ postId, onBack, onNavigate }) => {
  const post = BLOG_POSTS.find(p => p.id === postId) || BLOG_POSTS[0];

  return (
    <div className="min-h-screen bg-[#050811] text-white pt-28 pb-20">
      <SEO
        title={`${post.title} | AVRX Insights`}
        description={post.excerpt}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white mb-8 transition"
        >
          <ArrowLeft className="w-4 h-4 text-cyan-400" />
          <span>Back to Blog Articles</span>
        </button>

        {/* Article Container */}
        <article className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-12 shadow-2xl space-y-8">
          
          <div className="space-y-4 pb-6 border-b border-slate-800">
            <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 text-xs font-bold uppercase tracking-wider">
              {post.category}
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-6 text-xs text-slate-400 font-mono pt-2">
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4 text-cyan-400" />
                {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-emerald-400" />
                {post.date}
              </span>
            </div>
          </div>

          <div className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base leading-relaxed space-y-6">
            <p className="text-lg font-medium text-slate-200 leading-relaxed border-l-2 border-cyan-400 pl-4">
              {post.excerpt}
            </p>
            <p>{post.content}</p>
          </div>

          <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-400">
              Need assistance implementing these strategies for your business?
            </div>
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs rounded-xl transition"
            >
              Talk to an AVRX Specialist
            </button>
          </div>

        </article>

      </div>
    </div>
  );
};
