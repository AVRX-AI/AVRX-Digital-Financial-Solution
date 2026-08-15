import React, { useState } from 'react';
import { Share2, Check, Copy, MessageCircle, Linkedin, Facebook } from 'lucide-react';

interface BlogSocialShareProps {
  title: string;
  url: string;
}

export const BlogSocialShare: React.FC<BlogSocialShareProps> = ({ title, url }) => {
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="flex items-center flex-wrap gap-2 text-xs">
      <span className="text-slate-400 font-semibold flex items-center gap-1.5 mr-2">
        <Share2 className="w-3.5 h-3.5 text-cyan-400" />
        <span>Share:</span>
      </span>

      {/* WhatsApp */}
      <a
        href={`https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-1.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5 transition font-semibold"
        title="Share on WhatsApp"
      >
        <MessageCircle className="w-3.5 h-3.5" />
        <span>WhatsApp</span>
      </a>

      {/* LinkedIn */}
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-1.5 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 border border-blue-500/30 flex items-center gap-1.5 transition font-semibold"
        title="Share on LinkedIn"
      >
        <Linkedin className="w-3.5 h-3.5" />
        <span>LinkedIn</span>
      </a>

      {/* Facebook */}
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-1.5 rounded-xl bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 flex items-center gap-1.5 transition font-semibold"
        title="Share on Facebook"
      >
        <Facebook className="w-3.5 h-3.5" />
        <span>Facebook</span>
      </a>

      {/* Copy Link */}
      <button
        onClick={handleCopy}
        className={`px-3 py-1.5 rounded-xl border flex items-center gap-1.5 transition font-semibold ${
          copied
            ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-[0_0_10px_rgba(0,240,255,0.3)]'
            : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border-slate-700'
        }`}
        title="Copy article link"
      >
        {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
        <span>{copied ? 'Link Copied!' : 'Copy Link'}</span>
      </button>
    </div>
  );
};
