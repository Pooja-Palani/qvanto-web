import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Cpu, Shield, Building2, ShoppingBag, Leaf,
  CheckCircle2, ArrowRight, Lock, Globe, Workflow,
  Database, Tag, FileText, Activity, Settings, RefreshCw,
  ShieldCheck, Layers, BarChart3, AlertTriangle, Zap
} from 'lucide-react';

interface CapabilitiesProps { setCurrentPage: (page: string) => void; }

const suites = [
  { id: 'core', label: 'Intelligence Core', color: '#3b82f6', cls: 'engine-core' },
  { id: 'bfsi', label: 'BFSI Engine', color: '#7c3aed', cls: 'engine-bfsi' },
  { id: 'commerce', label: 'Commerce Engine', color: '#10b981', cls: 'engine-commerce' },
  { id: 'esg', label: 'ESG Framework', color: '#f59e0b', cls: 'engine-esg' },
  { id: 'governance', label: 'Governance Fabric', color: '#06b6d4', cls: 'engine-governance' },
];

const suiteContent: Record<string, { icon: React.ReactNode; tagline: string; description: string; features: { icon: React.ReactNode; title: string; body: string }[] }> = {
  core: {
    icon: <Cpu size={28} />,
    tagline: 'Agentic AI Framework',
    description: 'The Intelligence Core is the autonomous reasoning engine shared by every vertical suite. It orchestrates multi-agent workflows, enforces policy-at-inference, and adapts to complex regulatory environments without human latency.',
    features: [
      { icon: <Zap />, title: 'Multi-Agent Orchestration', body: 'Deploy coordinated agent swarms that communicate, delegate, and resolve complex enterprise workflows autonomously.' },
      { icon: <Shield />, title: 'Policy-Enforcement-First', body: 'Every agent decision is gated by the governance fabric — compliance is not a check, it is the runtime itself.' },
      { icon: <Cpu />, title: 'LLM-Agnostic Runtime', body: 'Deploy on any model backbone. Switch between proprietary and open-source LLMs without re-engineering your pipeline.' },
      { icon: <RefreshCw />, title: 'Continuous Learning', body: 'Agents refine decision boundaries based on feedback loops from the governance fabric, improving accuracy over time.' },
    ],
  },
  bfsi: {
    icon: <Building2 size={28} />,
    tagline: 'Compliance & RegTech Infrastructure',
    description: 'Our BFSI Engine deploys autonomous agents to classify regulatory risk signals across your entire portfolio, governed by our enterprise-grade compliance fabric. Purpose-built for SEBI, RBI, IRDAI, and Basel III environments.',
    features: [
      { icon: <ShieldCheck />, title: 'Autonomous Compliance Agents', body: 'Monitor, classify, and report compliance signals across SEBI, RBI, IRDAI, and Basel III frameworks — without human latency.' },
      { icon: <BarChart3 />, title: 'Predictive Risk Scoring', body: 'ML-driven risk scoring with real-time regulatory signal ingestion across BFSI portfolios and cross-border entities.' },
      { icon: <AlertTriangle />, title: 'Incident Response', body: 'Real-time data visibility allows rapid response to compliance breaches before they escalate into regulatory action.' },
      { icon: <Lock />, title: 'Data Loss Prevention', body: 'Enforce DLP strategies to protect sensitive financial data at every layer — from ingestion to analytics output.' },
    ],
  },
  commerce: {
    icon: <ShoppingBag size={28} />,
    tagline: 'Digital Retail Orchestration',
    description: 'Our Commerce Engine deploys autonomous agents to optimize supply chain resilience, demand forecasting, and retail personalization — governed by the same enterprise-grade data framework that underpins BFSI operations.',
    features: [
      { icon: <Workflow />, title: 'Supply Chain Agents', body: 'Autonomous agents continuously model supply chain risk, route optimization, and vendor performance across global operations.' },
      { icon: <Activity />, title: 'Demand Intelligence', body: 'Predictive demand forecasting engines that ingest multi-source signals — weather, social, macroeconomic — to optimize inventory.' },
      { icon: <Globe />, title: 'Multi-Entity Orchestration', body: 'Enable cross-border teams with clear approvals and data segregation across entities and lines of business.' },
      { icon: <Database />, title: 'Retail Data Marketplace', body: 'Centralized repository where all retail data assets are listed, governed, and securely distributed across teams.' },
    ],
  },
  esg: {
    icon: <Leaf size={28} />,
    tagline: 'Sustainability & Regulatory Reporting',
    description: 'Our ESG Intelligence deploys data agents to continuously monitor sustainability metrics, automate BRSR, GRI, and TCFD reporting pipelines, and provide audit-ready evidence chains for regulators and investors.',
    features: [
      { icon: <FileText />, title: 'Automated BRSR Reporting', body: 'Deploy agents that collect, classify, and compile SEBI BRSR-compliant ESG data from across your enterprise systems.' },
      { icon: <Tag />, title: 'ESG Data Tagging', body: 'Tag data attributes as ESG-relevant at the source — linking them to defined reporting projects and permitted regulatory purposes.' },
      { icon: <Activity />, title: 'Sustainability Monitoring', body: 'Continuous monitoring of carbon emissions, water usage, and social metrics against net-zero targets and regulatory thresholds.' },
      { icon: <ShieldCheck />, title: 'GRI & TCFD Pipelines', body: 'Pre-built reporting pipelines for GRI Standards and TCFD framework — reducing manual ESG reporting effort by over 80%.' },
    ],
  },
  governance: {
    icon: <Shield size={28} />,
    tagline: 'Data Integrity & Security Across All Platforms',
    description: 'The Governance Fabric is the cross-cutting foundation layer beneath every engine. It enforces consistent data privacy, access control, lineage tracking, and audit capabilities — regardless of which vertical suite you are operating in.',
    features: [
      { icon: <Lock />, title: 'Privacy Automation', body: 'GDPR, HIPAA, CCPA, and DPDP Act 2023 compliance built into every workflow — not applied as an afterthought.' },
      { icon: <Workflow />, title: 'Data Lineage', body: 'Track data from source to dashboard with complete visibility across your multi-cloud and on-prem estate.' },
      { icon: <Settings />, title: 'Policy Controls', body: 'Enforce custom-defined policies to control how data assets are accessed, processed, and distributed across teams.' },
      { icon: <Layers />, title: 'Metadata Management', body: 'Steward information assets, data definitions, and manage changes to data schemas and classifications over time.' },
    ],
  },
};

export default function Capabilities({ setCurrentPage }: CapabilitiesProps) {
  const [active, setActive] = useState<string>('core');
  const suite = suiteContent[active];
  const suiteMeta = suites.find(s => s.id === active)!;

  return (
    <div className="bg-brand-dark min-h-screen">
      {/* Hero */}
      <section className="relative pt-44 pb-24 overflow-hidden text-center">
        <div className="absolute inset-0 arch-grid opacity-40" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 30%, rgba(59,130,246,0.1) 0%, transparent 65%)' }} />
        <div className="max-content relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="section-label-dark">■ Technological Capabilities</div>
            <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-6 leading-[1.1]">
              Five Engines.<br />
              <span className="italic font-serif text-brand-blue">One Agentic Core.</span>
            </h1>
            <p className="text-xl text-white/40 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
              Every capability module is governed by the same intelligence layer, security framework, and compliance fabric — ensuring consistent, institutional-grade performance across every domain.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Suite Navigator */}
      <section className="py-4 bg-brand-surface/50 border-y border-white/6 sticky top-[64px] z-40 backdrop-blur-xl">
        <div className="max-content">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {suites.map(s => (
              <button key={s.id} onClick={() => setActive(s.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-[11px] font-bold uppercase tracking-widest transition-all whitespace-nowrap ${active === s.id ? 'bg-white/10 text-white border border-white/20' : 'text-white/40 hover:text-white/70 hover:bg-white/5 border border-transparent'}`}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: active === s.id ? s.color : 'currentColor', opacity: active === s.id ? 1 : 0.4 }} />
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Suite Detail */}
      <section className="py-24 relative">
        <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse 50% 50% at 40% 40%, ${suiteMeta.color}0d 0%, transparent 60%)` }} />
        <div className="max-content relative z-10">
          <motion.div key={active} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ backgroundColor: `${suiteMeta.color}20`, color: suiteMeta.color }}>
                    {suite.icon}
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] mb-1" style={{ color: suiteMeta.color }}>{suite.tagline}</div>
                    <h2 className="text-2xl font-bold text-white">{suiteMeta.label}</h2>
                  </div>
                </div>
                <p className="text-lg text-white/50 leading-relaxed font-medium mb-8">{suite.description}</p>
                <button onClick={() => setCurrentPage('contact')}
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-md bg-white text-brand-dark font-bold text-xs uppercase tracking-widest hover:bg-gray-100 transition-all">
                  Request Architecture Brief <ArrowRight size={14} />
                </button>
              </div>

              <div className={`engine-card ${suiteMeta.cls} p-8`}>
                <div className="text-[9px] font-bold uppercase tracking-[0.2em] mb-6" style={{ color: suiteMeta.color }}>Core Specifications</div>
                <div className="space-y-3">
                  {[
                    'Agent-native runtime — no RPA wrappers',
                    'Policy-enforcement at every inference step',
                    'Multi-cloud: AWS, Azure, GCP, Snowflake',
                    'Zero raw data migration architecture',
                    'Deployment in weeks, not quarters',
                    'Full audit trail and lineage tracking',
                  ].map((spec, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 size={14} style={{ color: suiteMeta.color, flexShrink: 0 }} />
                      <span className="text-white/60 font-medium">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {suite.features.map((feat, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
                  className={`engine-card ${suiteMeta.cls} group`}>
                  <div className="mb-5 transition-transform group-hover:scale-110" style={{ color: suiteMeta.color }}>
                    {feat.icon}
                  </div>
                  <h4 className="font-bold text-sm mb-3 text-white">{feat.title}</h4>
                  <p className="text-xs text-white/40 leading-relaxed font-medium">{feat.body}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Differentiator table */}
      <section className="py-24 bg-white text-brand-dark">
        <div className="max-content">
          <div className="text-center mb-16">
            <div className="section-label-light">■ Why Qvanto</div>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">Engineered different. By design.</h2>
          </div>
          <div className="max-w-4xl mx-auto overflow-hidden rounded-3xl border border-gray-100 shadow-xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-6 text-xs font-bold uppercase tracking-widest text-gray-400">Specification</th>
                  <th className="p-6 text-xs font-bold uppercase tracking-widest text-gray-400">Market Standard</th>
                  <th className="p-6 text-xs font-bold uppercase tracking-widest text-brand-blue">Qvanto Standard</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { f: 'Architecture Model', c: 'RPA + Rule-based', q: '✅ Agentic AI Native' },
                  { f: 'Multi-Cloud / On-Prem', c: 'Rare — cloud-locked', q: '✅ Fully Neutral' },
                  { f: 'Raw Data Movement', c: 'Required for analytics', q: '✅ Zero — metadata layer' },
                  { f: 'Privacy Automation', c: 'Add-on module', q: '✅ Core Runtime' },
                  { f: 'ESG Reporting', c: 'Manual / periodic', q: '✅ Continuous Agent Pipeline' },
                  { f: 'Deployment Speed', c: 'Months to years', q: '✅ Weeks' },
                  { f: 'Vertical Coverage', c: 'Single domain', q: '✅ BFSI + Commerce + ESG' },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50/60 transition-colors">
                    <td className="p-6 text-sm font-bold text-gray-600">{row.f}</td>
                    <td className="p-6 text-sm font-medium text-gray-400">{row.c}</td>
                    <td className="p-6 text-sm font-black text-brand-blue">{row.q}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-dark">
        <div className="max-content text-center">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-6">
            Ready to deploy <span className="italic font-serif text-brand-blue">agentic intelligence?</span>
          </h2>
          <p className="text-white/40 mb-10 max-w-xl mx-auto font-medium text-lg">
            Schedule an architecture review with our solutions engineering team.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} onClick={() => setCurrentPage('contact')} className="btn-primary">
              Schedule Architecture Review
            </motion.button>
            <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} onClick={() => setCurrentPage('developers')} className="btn-secondary">
              Explore the API Hub
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
}
