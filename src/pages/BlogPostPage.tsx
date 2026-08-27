import React from 'react';
import { getBlogPostBySlug, getRelatedPosts } from '../data/blogData';
import { BlogBreadcrumb } from '../components/blog/BlogBreadcrumb';
import { BlogSocialShare } from '../components/blog/BlogSocialShare';
import { BlogSidebar } from '../components/blog/BlogSidebar';
import { BlogInfographics } from '../components/blog/BlogInfographics';
import { BlogFAQAccordion } from '../components/blog/BlogFAQAccordion';
import { BlogCTA } from '../components/blog/BlogCTA';
import { RelatedPosts } from '../components/blog/RelatedPosts';
import { BlogSEO } from '../components/blog/BlogSEO';
import { Calendar, Clock, User, ArrowLeft, CheckCircle2, Sparkles, Tag, ShieldCheck } from 'lucide-react';

interface BlogPostPageProps {
  postId: string; // can be slug or ID
  onBack: () => void;
  onNavigate: (page: string, postSlug?: string) => void;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ postId, onBack, onNavigate }) => {
  const post = getBlogPostBySlug(postId) || getBlogPostBySlug('why-business-website-is-important-in-2026');

  if (!post) {
    return (
      <div className="min-h-screen bg-[#050811] text-white pt-36 pb-20 flex flex-col items-center justify-center space-y-4">
        <h1 className="text-2xl font-bold">Article not found</h1>
        <button
          onClick={onBack}
          className="px-6 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs"
        >
          Return to Blog
        </button>
      </div>
    );
  }

  const relatedPosts = getRelatedPosts(post.slug);
  const currentUrl = typeof window !== 'undefined' ? window.location.href : post.canonicalUrl;

  return (
    <div className="min-h-screen bg-[#050811] text-white pt-28 pb-24 selection:bg-cyan-500 selection:text-slate-950">
      {/* Dynamic SEO Tags & Structured Data */}
      <BlogSEO post={post} />

      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        
        {/* Navigation & Breadcrumbs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 transition w-fit cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-cyan-400" />
            <span>Back to All Articles</span>
          </button>

          <BlogBreadcrumb
            category={post.category}
            title={post.title}
            onNavigateHome={() => onNavigate('home')}
            onNavigateBlog={() => onNavigate('blog')}
          />
        </div>

        {/* Article Header (Hero Area) */}
        <header className="max-w-5xl mx-auto mb-10 space-y-6 text-left">
          {/* Category Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>{post.category}</span>
          </div>

          {/* H1 Main Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
            {post.title}
          </h1>

          {/* Metadata Row */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-400 font-mono pb-6 border-b border-slate-800/80">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300 font-bold text-xs">
                A
              </div>
              <div>
                <span className="text-slate-200 font-semibold">{post.author.name}</span>
                <span className="text-slate-500 text-[11px] block">{post.author.role}</span>
              </div>
            </div>

            <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-slate-700" />

            <div className="flex items-center gap-1.5 text-slate-300">
              <Calendar className="w-4 h-4 text-cyan-400" />
              <span>{post.date}</span>
            </div>

            <span className="w-1 h-1 rounded-full bg-slate-700" />

            <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Social Share Row */}
          <div className="flex items-center justify-between flex-wrap gap-4 pt-1">
            <BlogSocialShare title={post.title} url={currentUrl} />
          </div>
        </header>

        {/* Featured Image */}
        <div className="max-w-6xl mx-auto mb-14 rounded-3xl overflow-hidden border border-slate-800 shadow-[0_12px_40px_rgba(0,0,0,0.6)] bg-slate-950 relative aspect-[16/9] group">
          <img
            src={post.featuredImage}
            alt={post.imageAlt || post.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="eager"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-4 left-6 text-xs text-slate-300 font-mono drop-shadow">
            AVRX Digital Architecture • 2026 Edition
          </div>
        </div>

        {/* Main Content Layout: Desktop 70% Content + 30% Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-[1720px] mx-auto">
          
          {/* Main Article Content (approx 70% ~ 8 cols) */}
          <main className="lg:col-span-8 space-y-12">
            
            {/* Lead Excerpt */}
            <div className="p-6 rounded-2xl bg-cyan-500/5 border-l-4 border-cyan-400 text-slate-200 text-base sm:text-lg font-medium leading-relaxed shadow-sm">
              {post.excerpt}
            </div>

            {/* Introduction Section */}
            {post.introduction && (
              <section id="intro" className="space-y-5 text-slate-300 text-base leading-relaxed">
                <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                  <span>परिचय (Introduction)</span>
                </h2>
                {post.introduction.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </section>
            )}

            {/* What is a Business Website Section */}
            {post.whatIsSection && (
              <section id="what-is-website" className="p-6 sm:p-8 rounded-3xl bg-slate-900/70 border border-slate-800 space-y-4">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                  <span>{post.whatIsSection.title}</span>
                </h2>
                {post.whatIsSection.content.map((p, idx) => (
                  <p key={idx} className="text-slate-300 text-base leading-relaxed">
                    {p}
                  </p>
                ))}
              </section>
            )}

            {/* Infographics Component 1: Modern Growth Engine & 8 Pillars */}
            <BlogInfographics />

            {/* 10 Core Benefit Sections */}
            {post.mainSections && post.mainSections.length > 0 && (
              <div className="space-y-12">
                <div className="pb-4 border-b border-slate-800">
                  <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                    2026 में Business Website के 10 बड़े फायदे
                  </h2>
                  <p className="text-sm text-slate-400 mt-1">
                    How an advanced website drives scalable growth, leads, and customer trust
                  </p>
                </div>

                {post.mainSections.map((sec, idx) => (
                  <section
                    key={sec.id}
                    id={sec.id}
                    className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800/90 space-y-5 transition-all duration-300 hover:border-slate-700"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold flex items-center justify-center shrink-0">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        {sec.title}
                      </h3>
                    </div>

                    <p className="text-slate-300 text-base leading-relaxed">
                      {sec.content}
                    </p>

                    {sec.points && (
                      <div className="pt-2 space-y-2.5">
                        {sec.points.map((pt, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-2.5 text-sm text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {sec.callout && (
                      <div className="p-4 rounded-xl bg-slate-950/80 border border-cyan-500/30 text-xs sm:text-sm text-cyan-300 font-medium leading-relaxed">
                        💡 {sec.callout}
                      </div>
                    )}
                  </section>
                ))}
              </div>
            )}

            {/* AVRX Conversion CTA Section */}
            <BlogCTA onNavigate={onNavigate} />

            {/* FAQ Accordion Section */}
            {post.faqs && post.faqs.length > 0 && (
              <section id="faq">
                <BlogFAQAccordion faqs={post.faqs} />
              </section>
            )}

            {/* Article Tags */}
            <div className="pt-8 border-t border-slate-800 flex items-center flex-wrap gap-2 text-xs">
              <span className="text-slate-400 flex items-center gap-1.5 mr-2">
                <Tag className="w-3.5 h-3.5 text-cyan-400" />
                <span>Related Topics:</span>
              </span>
              {post.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 font-mono"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Bottom Social Share */}
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-sm font-semibold text-slate-300">
                Did you find this guide insightful? Share it with other entrepreneurs:
              </span>
              <BlogSocialShare title={post.title} url={currentUrl} />
            </div>

            {/* Related Articles ("You May Also Like") */}
            <RelatedPosts
              posts={relatedPosts}
              onSelectPost={(slug) => {
                onNavigate('blog-post', slug);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

          </main>

          {/* Desktop Sidebar (~30% ~ 4 cols) */}
          <div className="hidden lg:block lg:col-span-4">
            <BlogSidebar
              tableOfContents={post.tableOfContents}
              onNavigate={onNavigate}
            />
          </div>

        </div>

      </div>
    </div>
  );
};
