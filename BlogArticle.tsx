import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react';
import { BLOG_BY_SLUG, getSuggestedBlogs, type BlogArticleData } from './blogArticlesData';

interface BlogArticleProps {
  slug: string;
  setCurrentPage: (page: string) => void;
}

export default function BlogArticle({ slug, setCurrentPage }: BlogArticleProps) {
  const post: BlogArticleData | undefined = BLOG_BY_SLUG[slug];
  if (!post) {
    return (
      <div className="bg-brand-dark min-h-screen pt-40 pb-24 text-center text-white/50">
        <p className="mb-6 font-medium">Article not found.</p>
        <button
          type="button"
          onClick={() => setCurrentPage('insights')}
          className="text-brand-blue text-sm font-bold uppercase tracking-widest"
        >
          Back to Insights
        </button>
      </div>
    );
  }

  const suggested = getSuggestedBlogs(slug);

  return (
    <div className="bg-[#05070A] min-h-screen text-white">
      {/* Top bar */}
      <div className="border-b border-white/[0.06] bg-[#05070A]/90 backdrop-blur-md">
        <div className="max-content py-4 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => setCurrentPage('insights')}
            className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-white/45 hover:text-white transition-colors"
          >
            <ArrowLeft size={14} />
            Insights
          </button>
          <span className="text-[10px] font-bold uppercase tracking-widest text-white/25 hidden sm:inline truncate max-w-[50%]">
            {post.title}
          </span>
        </div>
      </div>

      {/* Hero visual */}
      <div className="max-content pt-8 pb-10 px-4 sm:px-0">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="relative rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0C0E14] min-h-[220px] h-[min(42vw,400px)] max-h-[440px]"
        >
          <img src={post.img} alt={post.title} className="absolute inset-0 w-full h-full object-cover opacity-95" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05070A] via-transparent to-[#05070A]/30" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
            <span
              className="inline-block text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4"
              style={{ backgroundColor: `${post.color}28`, color: post.color }}
            >
              {post.tag}
            </span>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.15] max-w-4xl">
              {post.title}
            </h1>
            <p className="mt-4 flex items-center gap-2 text-[11px] text-white/40 font-medium">
              <Clock size={12} className="opacity-70" />
              {post.read} read
            </p>
          </div>
        </motion.div>
      </div>

      {/* Article body */}
      <article className="max-content max-w-[680px] pb-16 px-4 sm:px-6">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1, duration: 0.4 }}>
          <p className="text-lg text-white/70 font-medium leading-relaxed mb-12">{post.lead}</p>

          {post.sections.map((section, i) => (
            <section key={section.heading} className="mb-12 last:mb-0">
              <h2 className="text-xl font-bold text-white mb-5 tracking-tight">{section.heading}</h2>
              <div className="space-y-4">
                {section.paragraphs.map((p, j) => (
                  <p key={j} className="text-[15px] sm:text-base text-white/55 leading-relaxed font-medium">
                    {p}
                  </p>
                ))}
              </div>
            </section>
          ))}

          {/* Keywords */}
          <div className="mt-16 pt-10 border-t border-white/[0.08]">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-white/35 mb-4">Keywords</h2>
            <div className="flex flex-wrap gap-2">
              {post.keywords.map((kw) => (
                <span
                  key={kw}
                  className="px-3 py-1.5 rounded-lg text-[12px] font-medium text-white/60 bg-white/[0.04] border border-white/[0.08]"
                >
                  {kw}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </article>

      {/* Suggested blogs */}
      <section className="border-t border-white/[0.06] bg-[#0a0c12] py-16">
        <div className="max-content">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-white/35 mb-8">Suggested blogs</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            {suggested.map((s, i) => (
              <motion.button
                key={s.slug}
                type="button"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                onClick={() => setCurrentPage(s.slug)}
                className="text-left rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0C0E14] hover:border-white/[0.14] hover:bg-[#10131c] transition-all group"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C0E14] via-[#0C0E14]/35 to-transparent" />
                  <span
                    className="absolute top-3 left-3 text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full backdrop-blur-md"
                    style={{ backgroundColor: `${s.color}35`, color: s.color }}
                  >
                    {s.tag}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2 text-[10px] text-white/30 font-medium">
                    <Clock size={10} />
                    {s.read} read
                  </div>
                  <h3 className="font-bold text-base text-white group-hover:text-brand-blue transition-colors leading-snug mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm text-white/40 leading-relaxed font-medium line-clamp-2">{s.excerpt}</p>
                  <div
                    className="mt-4 flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest opacity-70 group-hover:opacity-100"
                    style={{ color: s.color }}
                  >
                    Read <ArrowRight size={10} />
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          <div className="mt-10 text-center md:text-left">
            <button
              type="button"
              onClick={() => setCurrentPage('insights')}
              className="text-[11px] font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors inline-flex items-center gap-2"
            >
              View all insights <ArrowRight size={12} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
