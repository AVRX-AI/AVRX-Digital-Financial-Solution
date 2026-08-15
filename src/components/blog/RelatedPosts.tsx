import React from 'react';
import { BlogPost } from '../../types/blog';
import { BlogCard } from './BlogCard';

interface RelatedPostsProps {
  posts: BlogPost[];
  onSelectPost: (slug: string) => void;
}

export const RelatedPosts: React.FC<RelatedPostsProps> = ({ posts, onSelectPost }) => {
  if (!posts || posts.length === 0) return null;

  return (
    <section className="mt-16 pt-12 border-t border-slate-800/80 not-prose">
      <div className="flex items-center justify-between mb-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            Recommended Reading
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-white mt-2">
            You May Also Like
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map(post => (
          <BlogCard
            key={post.id}
            post={post}
            onSelect={onSelectPost}
          />
        ))}
      </div>
    </section>
  );
};
