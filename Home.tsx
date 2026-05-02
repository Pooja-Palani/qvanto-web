import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Cpu, Shield, Building2, ShoppingBag, Leaf, CheckCircle2, TrendingUp, AlertCircle, BarChart3, Globe, Clock, ChevronRight } from 'lucide-react';
import GridDistortion from './GridDistortion';
import VantaDots from './VantaDots';

// ── Hero Orbs (kept for colour accent on top of GridDistortion) ──────────────
function HeroOrbs() {
  return (
    <>
      <motion.div className="absolute pointer-events-none rounded-full z-[2]"
        style={{ width: 600, height: 600, top: '-10%', left: '-12%', background: 'radial-gradient(circle, rgba(59,130,246,0.09) 0%, transparent 70%)', filter: 'blur(50px)' }}
        animate={{ scale: [1, 1.18, 1], opacity: [0.55, 1, 0.55] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }} />
      <motion.div className="absolute pointer-events-none rounded-full z-[2]"
        style={{ width: 420, height: 420, top: '25%', right: '-10%', background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)', filter: 'blur(50px)' }}
        animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut', delay: 3 }} />
      <motion.div className="absolute pointer-events-none rounded-full z-[2]"
        style={{ width: 300, height: 300, bottom: '8%', left: '22%', background: 'radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 70%)', filter: 'blur(45px)' }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 6 }} />
    </>
  );
}

// ── Section Ambient ──────────────────────────────────────────────────────────
function SectionAmbient({ color = '#3b82f6', position = 'left' }: { color?: string; position?: 'left' | 'right' | 'center' }) {
  const posStyle = position === 'left'
    ? { left: '-15%', top: '50%', transform: 'translateY(-50%)' }
    : position === 'right'
    ? { right: '-15%', top: '50%', transform: 'translateY(-50%)' }
    : { left: '50%', top: '50%', transform: 'translate(-50%,-50%)' };
  return (
    <motion.div className="absolute w-96 h-96 rounded-full pointer-events-none"
      style={{ ...posStyle, background: `radial-gradient(circle, ${color}12 0%, transparent 70%)`, filter: 'blur(60px)' }}
      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.9, 0.5] }}
      transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
    />
  );
}

interface HomeProps { setCurrentPage: (page: string) => void; }

// ── Ecosystem Map Component ──────────────────────────────────────────────────
function EcosystemMap({ setCurrentPage }: HomeProps) {
  return (
    <div className="relative w-full max-w-5xl mx-auto select-none px-4">

      {/* ─ Data Sources ─ */}
      <motion.div initial={{ opacity: 0, y: -16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ duration: 0.6 }} className="flex justify-center gap-4 mb-8 flex-wrap">
        {['Cloud Platforms', 'On-Prem Systems', 'External APIs', 'Legacy Data'].map((src, i) => (
          <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            className="px-5 py-2.5 rounded-xl border border-white/10 bg-white/4 text-[10px] font-bold uppercase tracking-widest text-white/50 backdrop-blur-md hover:bg-white/8 hover:text-white/70 transition-all">
            {src}
          </motion.div>
        ))}
      </motion.div>

      {/* ─ Flow: Sources → Core ─ */}
      <div className="flex justify-center mb-4">
        <svg width="600" height="40" viewBox="0 0 600 40" className="w-full max-w-3xl opacity-30" preserveAspectRatio="xMidYMid meet">
          {[90, 220, 380, 510].map((x, i) => (
            <motion.line key={i} x1={x} y1="0" x2="300" y2="40" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="5 4"
              initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.08, duration: 0.8 }} />
          ))}
        </svg>
      </div>

      {/* ─ Intelligence Core ─ */}
      <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.25 }}
        onClick={() => setCurrentPage('capabilities')}
        className="relative mx-auto mb-4 rounded-2xl border border-brand-blue/40 bg-brand-blue/8 backdrop-blur-xl cursor-pointer group transition-all hover:border-brand-blue/70 hover:bg-brand-blue/14 hover:shadow-xl hover:shadow-brand-blue/10"
        style={{ maxWidth: 640 }}>
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-blue/6 to-transparent animate-shimmer" />
        </div>
        <div className="relative z-10 p-7 flex items-center gap-5">
          <div className="relative shrink-0">
            <div className="w-14 h-14 rounded-2xl bg-brand-blue/20 flex items-center justify-center">
              <Cpu size={26} className="text-brand-blue" />
            </div>
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-brand-blue animate-node-pulse" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-blue/70 mb-1">Intelligence Core</div>
            <div className="text-lg font-bold text-white mb-1.5">Agentic AI Framework</div>
            <div className="text-[12px] text-white/35 font-medium leading-relaxed">
              Cross-industry autonomous agent orchestration — the reasoning engine powering every vertical suite with policy-gated intelligence.
            </div>
          </div>
          <div className="shrink-0 flex flex-col items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <ArrowRight size={16} className="text-brand-blue" />
            <span className="text-[8px] font-bold uppercase tracking-widest text-brand-blue/70">Explore</span>
          </div>
        </div>
      </motion.div>

      {/* ─ Flow: Core → Engines ─ */}
      <div className="flex justify-center mb-4">
        <svg width="800" height="48" viewBox="0 0 800 48" className="w-full max-w-4xl opacity-25" preserveAspectRatio="xMidYMid meet">
          {[[400, 0, 130, 48], [400, 0, 400, 48], [400, 0, 670, 48]].map(([x1, y1, x2, y2], i) => (
            <motion.line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
              stroke={['#7c3aed', '#10b981', '#f59e0b'][i]} strokeWidth="1.5" strokeDasharray="6 4"
              initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
              transition={{ delay: 0.55 + i * 0.1, duration: 0.7 }} />
          ))}
        </svg>
      </div>

      {/* ─ Vertical Suite Engines ─ */}
      <div className="grid md:grid-cols-3 gap-5 mb-4">
        {[
          { icon: <Building2 size={22} />, label: 'BFSI Engine', sub: 'Compliance & RegTech', color: '#7c3aed', cls: 'engine-bfsi',
            desc: 'Autonomous compliance agents for SEBI, RBI, and Basel III — monitor, classify, and report regulatory signals without human latency.',
            page: 'capabilities' },
          { icon: <ShoppingBag size={22} />, label: 'Digital Retail Engine', sub: 'Platform Orchestration', color: '#10b981', cls: 'engine-commerce',
            desc: 'Intelligent orchestration across digital retail platforms — supply chain visibility, demand prediction, and personalisation at scale.',
            page: 'capabilities' },
          { icon: <Leaf size={22} />, label: 'ESG Framework', sub: 'Sustainability Intelligence', color: '#f59e0b', cls: 'engine-esg',
            desc: 'Data-agent pipelines for BRSR, GRI, and TCFD reporting — transforming ESG compliance into a strategic intelligence asset.',
            page: 'capabilities' },
        ].map((eng, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.45 + i * 0.12 }}
            onClick={() => setCurrentPage(eng.page)}
            className={`engine-card cursor-pointer group p-6 ${eng.cls} hover:shadow-lg transition-all`}
            style={{ borderTopWidth: 3, borderTopColor: eng.color }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${eng.color}18`, color: eng.color }}>
                {eng.icon}
              </div>
              <div>
                <div className="text-sm font-bold text-white">{eng.label}</div>
                <div className="text-[9px] font-bold text-white/30 uppercase tracking-widest">{eng.sub}</div>
              </div>
            </div>
            <p className="text-[12px] text-white/35 font-medium leading-relaxed mb-5">{eng.desc}</p>
            <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity"
              style={{ color: eng.color }}>
              Explore Engine <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* ─ Flow: Engines → Governance ─ */}
      <div className="flex justify-center mb-4">
        <svg width="800" height="40" viewBox="0 0 800 40" className="w-full max-w-4xl opacity-25" preserveAspectRatio="xMidYMid meet">
          {[[130, 0, 400, 40], [400, 0, 400, 40], [670, 0, 400, 40]].map(([x1, y1, x2, y2], i) => (
            <motion.line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="6 4"
              initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
              transition={{ delay: 0.75 + i * 0.08, duration: 0.6 }} />
          ))}
        </svg>
      </div>

      {/* ─ Governance Fabric ─ */}
      <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.65 }}
        onClick={() => setCurrentPage('architecture')}
        className="mx-auto rounded-2xl border border-brand-cyan/30 bg-brand-cyan/6 backdrop-blur-xl cursor-pointer group hover:border-brand-cyan/55 hover:bg-brand-cyan/10 hover:shadow-xl hover:shadow-brand-cyan/8 transition-all"
        style={{ maxWidth: 640 }}>
        <div className="p-7 flex items-center gap-5">
          <div className="w-12 h-12 rounded-2xl bg-brand-cyan/15 flex items-center justify-center shrink-0">
            <Shield size={22} className="text-brand-cyan" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-brand-cyan/60 mb-1">Foundation Layer</div>
            <div className="text-base font-bold text-white mb-1.5">Governance Fabric</div>
            <div className="text-[12px] text-white/35 font-medium leading-relaxed">
              The cross-cutting control plane enforcing data integrity, access policy, audit continuity, and privacy automation across all engines.
            </div>
          </div>
          <div className="shrink-0 flex flex-col items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <ArrowRight size={16} className="text-brand-cyan" />
            <span className="text-[8px] font-bold uppercase tracking-widest text-brand-cyan/70">View</span>
          </div>
        </div>
      </motion.div>

    </div>
  );
}

// ── Main Home Component ────────────────────────────────────────────────────────
export default function Home({ setCurrentPage }: HomeProps) {
  return (
    <div className="bg-brand-dark min-h-screen">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
        {/* ── Vanta.js Dots Background ── */}
        <div className="absolute inset-0 z-0">
          <VantaDots />
        </div>
        
        {/* Dark overlay — subtle to let dots pop but keep text legible */}
        <div className="absolute inset-0 z-[1] bg-brand-dark/40" />
        
        {/* Colour accent orbs — reduced opacity for Vanta compatibility */}
        <HeroOrbs />
        
        {/* Architectural grid overlay */}
        <div className="absolute inset-0 arch-grid opacity-15 z-[2]" />
        
        {/* Central radial glow */}
        <div className="absolute inset-0 z-[2]" style={{ background: 'radial-gradient(ellipse 65% 50% at 50% 42%, rgba(59,130,246,0.1) 0%, rgba(124,58,237,0.05) 45%, transparent 72%)' }} />
        
        {/* Scanline — kept for technical aesthetic */}
        <div className="absolute inset-0 z-[2] pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.005) 3px, rgba(255,255,255,0.005) 4px)' }} />

        <div className="max-content relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/8 border border-white/15 backdrop-blur-md mb-10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue" />
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">
              Agentic Intelligence · Enterprise Grade
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.08 }}
            className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-6 max-w-4xl mx-auto leading-[1.1]">
            We engineer the Agentic Intelligence<br />
            and Governance layers that power<br />
            <span className="italic font-serif text-brand-blue">data-critical enterprises.</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}
            className="text-base text-white/45 mb-10 max-w-xl mx-auto font-medium leading-relaxed">
            One Intelligence Core. Three Vertical Engines. One unified governance fabric — deployable in weeks.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-20">
            <button onClick={() => setCurrentPage('capabilities')}
              className="px-10 py-4 bg-white text-brand-dark rounded-md font-bold uppercase tracking-widest text-xs hover:bg-gray-100 transition-all shadow-2xl shadow-white/10">
              Explore the Ecosystem
            </button>
            <button onClick={() => setCurrentPage('contact')}
              className="px-10 py-4 bg-white/6 backdrop-blur-md border border-white/18 text-white rounded-md font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-all">
              Talk to Our Team
            </button>
          </motion.div>

          {/* Engine Strip */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.35 }}
            className="flex flex-wrap justify-center gap-3">
            {[
              { label: 'BFSI Engine', color: '#7c3aed' },
              { label: 'Digital Retail Engine', color: '#10b981' },
              { label: 'ESG Framework', color: '#f59e0b' },
              { label: 'Governance Fabric', color: '#06b6d4' },
            ].map((e, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/8 bg-white/3 text-[10px] font-bold uppercase tracking-widest text-white/40">
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: e.color }} />
                {e.label}
              </div>
            ))}
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-brand-dark to-transparent z-0" />
      </section>

      {/* ── ECOSYSTEM MAP ─────────────────────────────────────────────────── */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 arch-grid opacity-25" />
        <SectionAmbient color="#3b82f6" position="left" />
        <SectionAmbient color="#7c3aed" position="right" />
        <div className="max-content relative z-10">
          <div className="text-center mb-16">
            <div className="section-label-dark">■ The Qvanto Ecosystem</div>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-6">
              One Architecture.<br />
              <span className="italic font-serif text-brand-blue">Every Enterprise Domain.</span>
            </h2>
            <p className="text-lg text-white/35 max-w-2xl mx-auto font-medium leading-relaxed">
              Our Agentic AI sits above and between your enterprise platforms — acting as the intelligent glue across BFSI, Retail, and ESG systems.
            </p>
          </div>
          <EcosystemMap setCurrentPage={setCurrentPage} />
          <div className="text-center mt-12">
            <button onClick={() => setCurrentPage('architecture')}
              className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors">
              View Full Architecture Specification <ChevronRight size={12} />
            </button>
          </div>
        </div>
      </section>

      {/* ── CAPABILITY MODULES ────────────────────────────────────────────── */}
      <section className="py-32 bg-white text-brand-dark">
        <div className="max-content">
          <div className="text-center mb-20">
            <div className="section-label-light">■ Technological Capabilities</div>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-6">Four Engines. One Unified Intelligence.</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto font-medium">
              Each capability module is powered by the same agentic DNA — governed, secure, and deployable in weeks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Shield className="text-brand-blue" />, title: 'Autonomous Compliance', body: 'Deploy compliance agents that monitor, classify, and report regulatory signals — without human latency in the loop.', accent: 'border-t-brand-violet' },
              { icon: <Building2 className="text-purple-600" />, title: 'Predictive Risk', body: 'ML-driven risk scoring with real-time regulatory signal ingestion across BFSI portfolios and cross-border entities.', accent: '' },
              { icon: <ShoppingBag className="text-emerald-600" />, title: 'Retail Orchestration', body: 'Autonomous agents optimize supply chain resilience and demand forecasting, governed by enterprise-grade data frameworks.', accent: '' },
              { icon: <Leaf className="text-amber-500" />, title: 'ESG Intelligence', body: 'Data-driven sustainability monitoring with automated BRSR, GRI, and TCFD reporting pipelines — continuously audited.', accent: '' },
            ].map((cap, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }} whileHover={{ y: -8, boxShadow: '0 24px 48px rgba(0,0,0,0.12)' }}
                className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:border-gray-200 transition-all cursor-pointer group"
                onClick={() => setCurrentPage('capabilities')}>
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                  {cap.icon}
                </div>
                <h3 className="text-lg font-bold mb-3 group-hover:text-brand-blue transition-colors">{cap.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed font-medium">{cap.body}</p>
                <div className="mt-6 flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-brand-blue opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight size={10} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MARKET FORCES ─────────────────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(59,130,246,0.07) 0%, transparent 70%)' }} />
        <SectionAmbient color="#06b6d4" position="center" />
        <div className="max-content relative z-10">
          <div className="text-center mb-16">
            <div className="section-label-dark">■ The Intelligence Imperative</div>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-5">The signals are clear. The window is now.</h2>
            <p className="text-base text-white/35 max-w-xl mx-auto font-medium leading-relaxed">
              Four converging forces are reshaping how enterprises must think about data, intelligence, and governance.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: <AlertCircle size={20} />, color: '#7c3aed', label: 'Regulatory Acceleration', stat: '40+', statSub: 'new BFSI regulations since 2022', body: 'SEBI, RBI, and Basel III convergence is outpacing legacy compliance infrastructure — autonomous agents are the only scalable answer.' },
              { icon: <Globe size={20} />, color: '#f59e0b', label: 'ESG Mandates Go Mandatory', stat: '1,000+', statSub: 'listed companies under BRSR', body: 'Mandatory ESG reporting is no longer optional. Enterprises without data-agent pipelines are exposed to material reporting risk.' },
              { icon: <TrendingUp size={20} />, color: '#10b981', label: 'Digital Retail Complexity', stat: '65%', statSub: 'of retailers cite data fragmentation', body: 'Digital retail platforms operate across fragmented data estates. Autonomous orchestration is the only path to supply chain resilience.' },
              { icon: <BarChart3 size={20} />, color: '#06b6d4', label: 'Governance Debt Rising', stat: '35%', statSub: 'of analyst time lost to access delays', body: 'Manual governance is a structural bottleneck. Every day without agentic intelligence is a day of compounding operational debt.' },
            ].map((force, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="engine-card p-6 relative" style={{ borderLeftColor: force.color }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${force.color}20`, color: force.color }}>
                    {force.icon}
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-widest" style={{ color: force.color }}>{force.label}</div>
                </div>
                <div className="text-3xl font-black text-white mb-1 tracking-tight">{force.stat}</div>
                <div className="text-[10px] text-white/30 font-medium mb-4 uppercase tracking-wide">{force.statSub}</div>
                <p className="text-xs text-white/45 leading-relaxed font-medium">{force.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ARCHITECTURE TEASER ───────────────────────────────────────────── */}
      <section className="py-24 bg-white text-brand-dark">
        <div className="max-content">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label-light">■ Technical Foundation</div>
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 leading-tight">
                Our Intelligence Core deploys across your existing infrastructure.
              </h2>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed font-medium">
                Zero raw data migration. Full governance chain from day one. Every vertical suite shares the same high-security, agentic DNA — consistent across BFSI, Retail, and ESG deployments.
              </p>
              <div className="space-y-4 mb-10">
                {['Zero raw data migration — governance at the metadata layer', 'Policy-enforcement-first architecture across all engines', 'Agent-native runtime deployable in weeks, not quarters', 'Compliance-by-design: not an add-on, but the foundation'].map((pt, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-brand-blue mt-0.5 shrink-0" />
                    <span className="text-sm text-gray-500 font-medium">{pt}</span>
                  </motion.div>
                ))}
              </div>
              <button onClick={() => setCurrentPage('contact')}
                className="inline-flex items-center gap-2 px-8 py-3 rounded-md font-bold text-xs uppercase tracking-widest bg-brand-dark text-white hover:bg-gray-900 transition-all">
                Talk to Our Team <ArrowRight size={14} />
              </button>
            </div>

            {/* Architecture visual */}
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative rounded-3xl overflow-hidden border border-white/8">
              <img src="/images/architecture_stack.png" alt="Qvanto Architecture Stack" className="w-full h-auto" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                <div className="space-y-2">
                  {[
                    { label: 'Data Ingestion Layer', color: '#3b82f6' },
                    { label: 'Agent Runtime', color: '#7c3aed' },
                    { label: 'Vertical Engines', color: '#10b981' },
                    { label: 'Governance Fabric', color: '#06b6d4' },
                    { label: 'Enterprise Outputs', color: '#f59e0b' },
                  ].map((layer, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full animate-node-pulse" style={{ backgroundColor: layer.color }} />
                      <span className="text-[11px] font-bold text-white/70">{layer.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── INSIGHTS PREVIEW ──────────────────────────────────────────────── */}
      <section className="py-24 bg-white text-brand-dark">
        <div className="max-content">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="section-label-light">■ Intelligence Insights</div>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight">Thinking at the frontier<br />of agentic enterprise.</h2>
            </div>
            <button onClick={() => setCurrentPage('insights')}
              className="hidden md:inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-brand-blue hover:text-blue-700 transition-colors">
              All Articles <ArrowRight size={11} />
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { tag: 'AI & Governance', color: '#3b82f6', title: 'The Rise of Agentic AI in Enterprise Governance', excerpt: 'Why the RPA era is over and autonomous agents are becoming the new compliance infrastructure for regulated enterprises.', read: '8 min', img: '/images/blog_ai_governance.png' },
              { tag: 'ESG', color: '#f59e0b', title: 'ESG Data: From Compliance Burden to Competitive Edge', excerpt: 'How data-agent pipelines are transforming mandatory ESG reporting from a cost centre into a strategic intelligence asset.', read: '6 min', img: '/images/blog_esg_data.png' },
              { tag: 'Digital Retail', color: '#10b981', title: 'Why Digital Retail Platforms Need an Intelligence Layer', excerpt: 'Supply chain fragmentation, demand volatility, and personalisation at scale — autonomous orchestration is the only answer.', read: '7 min', img: '/images/blog_digital_retail.png' },
            ].map((post, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.09 }} whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                onClick={() => setCurrentPage('insights')}
                className="group cursor-pointer rounded-2xl border border-gray-100 bg-gray-50 overflow-hidden transition-all hover:border-gray-200">
                <div className="relative h-40 overflow-hidden">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-transparent to-transparent" />
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full" style={{ backgroundColor: `${post.color}15`, color: post.color }}>{post.tag}</span>
                    <span className="text-[9px] text-gray-400 font-medium flex items-center gap-1"><Clock size={9} /> {post.read} read</span>
                  </div>
                  <h3 className="font-bold text-base mb-3 text-brand-dark group-hover:text-brand-blue transition-colors leading-snug">{post.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed font-medium">{post.excerpt}</p>
                  <div className="mt-5 flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-brand-blue opacity-0 group-hover:opacity-100 transition-opacity">
                    Read Article <ArrowRight size={10} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8 md:hidden">
            <button onClick={() => setCurrentPage('insights')} className="text-[11px] font-bold uppercase tracking-widest text-brand-blue">All Articles <ArrowRight size={11} className="inline" /></button>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────────────────────────────── */}
      <section className="py-24 bg-brand-dark">
        <div className="max-content">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card text-center py-20 px-12 relative overflow-hidden">
            <div className="absolute inset-0 arch-grid opacity-20" />
            <div className="absolute inset-0 pointer-events-none">
              <motion.div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl"
                animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }} />
              <motion.div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-brand-violet/10 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.9, 0.5] }} transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut', delay: 2 }} />
              <motion.div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-40 bg-brand-cyan/8 rounded-full blur-3xl"
                animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0.8, 0.4] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 4 }} />
            </div>
            <div className="relative z-10">
              <div className="section-label-dark mx-auto w-fit mb-6">■ Start the Conversation</div>
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-5 leading-tight">
                Ready to bring intelligence<br />
                <span className="italic font-serif text-brand-blue">into your enterprise stack?</span>
              </h2>
              <p className="text-white/40 mb-10 max-w-xl mx-auto font-medium text-base leading-relaxed">
                Our team works with enterprises to map agentic intelligence across BFSI, Digital Retail, and ESG operations — and deploy in weeks.
              </p>
              <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} onClick={() => setCurrentPage('contact')} className="btn-primary">
                Connect with Our Team
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
