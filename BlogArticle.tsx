import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react';
import { BLOG_BY_SLUG, getSuggestedBlogs, type BlogArticleData } from './blogArticlesData';

/** Readable column — blog content width */
const ARTICLE_COL = 'max-w-5xl mx-auto w-full';

interface BlogArticleProps {
  slug: string;
  setCurrentPage: (page: string) => void;
}

export default function BlogArticle({ slug, setCurrentPage }: BlogArticleProps) {
  const post: BlogArticleData | undefined = BLOG_BY_SLUG[slug];
  if (!post) {
    return (
      <div className="relative min-h-screen pt-36 pb-24 text-center text-white/50">
        <div className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-b from-slate-900 to-brand-dark" />
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
    <div className="relative min-h-screen text-white pb-20">
      {/* Softer page background + subtle grid (glass-friendly) */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-b from-slate-800/90 via-[#0f172a] to-[#0b1120]" aria-hidden />
      <div className="pointer-events-none fixed inset-0 -z-10 arch-grid opacity-[0.25]" aria-hidden />
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_90%_60%_at_50%_0%,rgba(59,130,246,0.14),transparent_55%)]"
        aria-hidden
      />

      {/* Space below fixed navbar — must clear nav height so “All insights” receives clicks */}
      <div className="max-content pt-36 md:pt-44">
        <div className={ARTICLE_COL}>
          <button
            type="button"
            onClick={() => setCurrentPage('insights')}
            className="mb-6 inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-4 py-2 text-[11px] font-bold uppercase tracking-widest text-white/80 backdrop-blur-md transition-colors hover:border-white/25 hover:bg-white/[0.12] hover:text-white"
          >
            <ArrowLeft size={14} className="opacity-80" />
            All insights
          </button>

          {/* Hero — same width as article column */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/[0.04] shadow-2xl shadow-black/30 backdrop-blur-sm min-h-[220px] h-[min(42vw,380px)] max-h-[420px]"
          >
            <img src={post.img} alt={post.title} className="absolute inset-0 h-full w-full object-cover opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/95 via-[#0f172a]/25 to-[#1e293b]/40" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] to-transparent" />
            <div className="relative flex h-full min-h-[220px] flex-col justify-end p-6 sm:p-9">
              <span
                className="mb-3 inline-flex w-fit rounded-full border border-white/10 px-3 py-1.5 text-[9px] font-bold uppercase tracking-widest backdrop-blur-md"
                style={{ backgroundColor: `${post.color}22`, color: post.color }}
              >
                {post.tag}
              </span>
              <h1 className="text-2xl font-medium leading-[1.15] tracking-tight sm:text-4xl md:text-[2.35rem]">
                {post.title}
              </h1>
              <p className="mt-4 flex items-center gap-2 text-[11px] font-medium text-white/55">
                <Clock size={12} className="opacity-70" />
                {post.read} read
              </p>
            </div>
          </motion.div>

          {/* Body — glass panel, same width as hero */}
          <motion.article
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.4 }}
            className="mt-8 rounded-2xl border border-white/12 bg-white/[0.06] p-8 shadow-xl shadow-black/25 backdrop-blur-xl sm:p-10"
          >
            <p className="mb-10 text-lg font-medium leading-relaxed text-white/75">{post.lead}</p>

            {post.sections.map((section) => (
              <section key={section.heading} className="mb-10 last:mb-0">
                <h2 className="mb-4 text-xl font-bold tracking-tight text-white">{section.heading}</h2>
                <div className="space-y-4">
                  {section.paragraphs.map((p, j) => (
                    <p key={j} className="text-[15px] font-medium leading-relaxed text-white/60 sm:text-base">
                      {p}
                    </p>
                  ))}
                </div>
              </section>
            ))}

            <div className="mt-12 border-t border-white/10 pt-10">
              <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white/40">Keywords</h2>
              <div className="flex flex-wrap gap-2">
                {post.keywords.map((kw) => (
                  <span
                    key={kw}
                    className="rounded-lg border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[12px] font-medium text-white/65 backdrop-blur-sm"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        </div>
      </div>

      {/* Suggested — full band, glass cards */}
      <section className="mt-4 border-t border-white/10 bg-white/[0.03] py-14 backdrop-blur-md">
        <div className="max-content">
          <div className="mx-auto w-full max-w-5xl space-y-8">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">Suggested blogs</h2>
            <div className="grid gap-6 md:grid-cols-2">
            {suggested.map((s, i) => (
              <motion.button
                key={s.slug}
                type="button"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                onClick={() => setCurrentPage(s.slug)}
                className="group text-left overflow-hidden rounded-2xl border border-white/12 bg-white/[0.05] shadow-lg shadow-black/20 backdrop-blur-xl transition-all hover:border-white/20 hover:bg-white/[0.08]"
              >
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/40 to-transparent" />
                  <span
                    className="absolute left-3 top-3 rounded-full border border-white/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest backdrop-blur-md"
                    style={{ backgroundColor: `${s.color}30`, color: s.color }}
                  >
                    {s.tag}
                  </span>
                </div>
                <div className="p-5">
                  <div className="mb-2 flex items-center gap-2 text-[10px] font-medium text-white/35">
                    <Clock size={10} />
                    {s.read} read
                  </div>
                  <h3 className="mb-2 text-base font-bold leading-snug text-white transition-colors group-hover:text-brand-blue">
                    {s.title}
                  </h3>
                  <p className="line-clamp-2 text-sm font-medium leading-relaxed text-white/45">{s.excerpt}</p>
                  <div
                    className="mt-4 flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest opacity-70 transition-opacity group-hover:opacity-100"
                    style={{ color: s.color }}
                  >
                    Read <ArrowRight size={10} />
                  </div>
                </div>
              </motion.button>
            ))}
            </div>

            <div className="text-center md:text-left">
              <button
                type="button"
                onClick={() => setCurrentPage('insights')}
                className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-white/45 transition-colors hover:text-white"
              >
                View all insights <ArrowRight size={12} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
