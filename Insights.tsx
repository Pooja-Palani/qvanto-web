import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Clock, ArrowRight } from 'lucide-react';
import { blogSummariesForInsights } from './blogArticlesData';

interface InsightsProps { setCurrentPage: (page: string) => void; }

type Article = {
  tag: string;
  color: string;
  title: string;
  excerpt: string;
  read: string;
  featured: boolean;
  img: string;
  slug?: string;
};

const articles: Article[] = [
  ...blogSummariesForInsights(),
  {
    tag: 'BFSI', color: '#7c3aed',
    title: 'How BFSI is Reinventing Compliance with Autonomous Agents',
    excerpt: 'Basel III convergence, SEBI amendments, and RBI digital lending guidelines are arriving faster than legacy compliance systems can adapt. We examine how BFSI institutions are deploying agentic frameworks to automate regulatory classification at the speed of regulation.',
    read: '9 min', featured: false,
    img: '/images/blog_bfsi_compliance.png',
  },
  {
    tag: 'Architecture', color: '#06b6d4',
    title: 'The Governance Fabric: A New Architecture Standard',
    excerpt: 'What does it mean to build governance into the architecture — not bolt it on afterward? We define the Governance Fabric: the cross-cutting intelligence layer that enforces data integrity, access policy, and audit continuity across every enterprise vertical.',
    read: '10 min', featured: false,
    img: '/images/blog_governance_fabric.png',
  },
  {
    tag: 'Technology', color: '#64748b',
    title: 'From Data Silos to Intelligence Networks: The Enterprise Shift',
    excerpt: 'The next decade of enterprise technology is not about more data — it is about connecting data estates into governed intelligence networks. We trace the architectural evolution from point-to-point integrations to agent-orchestrated, policy-enforced data fabrics.',
    read: '8 min', featured: false,
    img: '/images/blog_data_intelligence.png',
  },
];

const tags = ['All', 'AI & Governance', 'ESG', 'Digital Retail', 'BFSI', 'Architecture', 'Technology'];

export default function Insights({ setCurrentPage }: InsightsProps) {
  const [activeTag, setActiveTag] = useState('All');
  const filtered = activeTag === 'All' ? articles : articles.filter(a => a.tag === activeTag);
  const featured = filtered.filter(a => a.featured);
  const rest = filtered.filter(a => !a.featured);

  return (
    <div className="bg-brand-dark min-h-screen">
      {/* Hero */}
      <section className="relative pt-44 pb-16 text-center overflow-hidden">
        <div className="absolute inset-0 arch-grid opacity-40" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(59,130,246,0.08) 0%, transparent 65%)' }} />
        <div className="max-content relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="section-label-dark">■ Intelligence Insights</div>
            <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-5 leading-[1.1]">
              Thinking at the frontier<br />
              <span className="italic font-serif text-brand-blue">of agentic enterprise.</span>
            </h1>
            <p className="text-base text-white/40 max-w-xl mx-auto font-medium leading-relaxed">
              Analysis, perspective, and technical depth on agentic AI, data governance, ESG intelligence, and digital retail platforms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tag filter */}
      <section className="py-3 border-y border-white/6 bg-brand-surface/40 backdrop-blur-xl sticky top-44 z-40">
        <div className="max-content">
          <div className="flex items-center gap-2 overflow-x-auto pb-0.5 scrollbar-none">
            {tags.map(t => (
              <button key={t} onClick={() => setActiveTag(t)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all whitespace-nowrap border ${activeTag === t ? 'bg-white/10 text-white border-white/20' : 'text-white/35 hover:text-white/60 border-transparent hover:bg-white/5'}`}>
                {t}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured articles */}
      {featured.length > 0 && (
        <section className="py-16 relative">
          <div className="max-content">
            <div className="grid md:grid-cols-3 gap-6">
              {featured.map((post, i) => (
                <motion.div key={post.slug ?? post.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.09 }} whileHover={{ y: -6 }}
                  onClick={() => post.slug && setCurrentPage(post.slug)}
                  className={`group rounded-2xl overflow-hidden border border-white/8 bg-white/3 backdrop-blur-sm transition-all hover:border-white/15 hover:bg-white/5 ${post.slug ? 'cursor-pointer' : ''}`}>
                  <div className="relative h-44 overflow-hidden">
                    <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] via-[#0a0f1c]/40 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full backdrop-blur-md"
                        style={{ backgroundColor: `${post.color}30`, color: post.color }}>{post.tag}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[9px] text-white/25 font-medium flex items-center gap-1"><Clock size={9} /> {post.read} read</span>
                    </div>
                    <h3 className="font-bold text-base mb-3 text-white group-hover:text-brand-blue transition-colors leading-snug">{post.title}</h3>
                    <p className="text-sm text-white/35 leading-relaxed font-medium line-clamp-3">{post.excerpt}</p>
                    <div className="mt-5 flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: post.color }}>
                      Read Article <ArrowRight size={10} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* More articles */}
      {rest.length > 0 && (
        <section className="py-8 pb-24">
          <div className="max-content">
            {featured.length > 0 && (
              <div className="section-label-dark mb-8">■ More Insights</div>
            )}
            <div className="space-y-4">
              {rest.map((post, i) => (
                <motion.div key={post.title} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="group cursor-pointer flex items-start gap-5 p-5 rounded-2xl border border-white/6 bg-white/2 hover:bg-white/4 hover:border-white/12 transition-all">
                  <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
                    <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-[9px] font-bold uppercase tracking-widest" style={{ color: post.color }}>{post.tag}</span>
                      <span className="text-white/15">·</span>
                      <span className="text-[9px] text-white/25 font-medium flex items-center gap-1"><Clock size={9} /> {post.read} read</span>
                    </div>
                    <h3 className="font-bold text-sm text-white group-hover:text-brand-blue transition-colors mb-1">{post.title}</h3>
                    <p className="text-xs text-white/30 leading-relaxed font-medium line-clamp-2">{post.excerpt}</p>
                  </div>
                  <ArrowRight size={14} className="text-white/15 group-hover:text-white/50 group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-white text-brand-dark">
        <div className="max-content text-center">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">Stay at the intelligence frontier.</h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto font-medium">Talk to our team about how agentic intelligence applies to your specific enterprise context.</p>
          <motion.button whileHover={{ scale: 1.04 }} onClick={() => setCurrentPage('contact')}
            className="inline-flex items-center gap-2 px-8 py-3 bg-brand-dark text-white rounded-md font-bold uppercase tracking-widest text-xs hover:bg-gray-900 transition-all">
            Connect with Our Team <ArrowRight size={14} />
          </motion.button>
        </div>
      </section>
    </div>
  );
}
