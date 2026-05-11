import React from 'react';
import { motion } from 'motion/react';
import { Shield, Lock, Cpu, Database, CheckCircle2, ArrowRight, Globe, Layers, FileText, ShieldCheck } from 'lucide-react';

interface ArchitectureProps { setCurrentPage: (page: string) => void; }

const layers = [
  { label: 'Data Ingestion Layer', color: '#3b82f6', desc: 'Multi-cloud connectors, on-prem adapters, REST/event APIs, and legacy system bridges — with zero raw data movement.', specs: ['AWS S3, Azure Blob, GCP Storage', 'Snowflake, Databricks, dbt native', 'On-prem: Oracle, SAP, MSSQL', 'Streaming: Kafka, Kinesis'] },
  { label: 'Agent Runtime', color: '#7c3aed', desc: 'The autonomous execution engine. LLM-agnostic multi-agent orchestration with policy gating at every inference step.', specs: ['Multi-agent task orchestration', 'LLM-agnostic model layer', 'Real-time policy enforcement', 'Feedback loop learning'] },
  { label: 'Vertical Engines', color: '#10b981', desc: 'Domain-specific intelligence for BFSI and digital commerce — built with the same agentic methods we use to ship governed technology platforms end-to-end.', specs: ['BFSI: SEBI, RBI, Basel III agents', 'Commerce: Supply chain + demand', 'Extensible disclosure & reporting agents', 'Shared agent library across suites'] },
  { label: 'Governance Fabric', color: '#06b6d4', desc: 'The cross-cutting control plane. Data lineage, access control, privacy automation, and audit — applied uniformly across all layers.', specs: ['GDPR, HIPAA, CCPA, DPDP automated', 'Full data lineage graph', 'Role-based access + policy controls', 'Immutable audit trail'] },
  { label: 'Output & Integration', color: '#f59e0b', desc: 'Governed dashboards, API endpoints, webhook streams, and regulatory reports — all audit-stamped and lineage-traced.', specs: ['REST API + webhook delivery', 'Power BI / Tableau connectors', 'Regulatory report generators', 'SIEM and SOC integration'] },
];

const principles = [
  { icon: <Database size={22} />, title: 'Zero Raw Data Migration', body: 'We govern at the metadata layer. Your raw data never moves — eliminating exposure risk and simplifying compliance.', color: '#3b82f6' },
  { icon: <Shield size={22} />, title: 'Policy-Enforcement-First', body: 'Every agent operation is gated by the governance fabric before execution. Compliance is the runtime, not a post-process.', color: '#7c3aed' },
  { icon: <Cpu size={22} />, title: 'Agent-Native Architecture', body: 'Built from the ground up for autonomous agents — not retrofitted RPA. Decision-making is distributed, not centralized.', color: '#10b981' },
  { icon: <Lock size={22} />, title: 'Compliance-by-Design', body: 'Regulatory frameworks are embedded in the architecture specification — not bolted on as add-on modules after deployment.', color: '#f59e0b' },
];

export default function Architecture({ setCurrentPage }: ArchitectureProps) {
  return (
    <div className="bg-brand-dark min-h-screen">
      {/* Hero */}
      <section className="relative pt-44 pb-20 text-center overflow-hidden">
        <div className="absolute inset-0 arch-grid opacity-50" />
        <div className="absolute inset-0 scan-overlay" />
        <div className="max-content relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="section-label-dark">■ Architecture Specification</div>
            <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-6 leading-[1.1]">
              The Qvanto Standard.<br />
              <span className="italic font-serif text-brand-blue">Engineering Specification.</span>
            </h1>
            <p className="text-xl text-white/40 max-w-3xl mx-auto font-medium leading-relaxed mb-12">
              We develop solutions using agentic AI methods: the same architecture delivers privacy controls, regulatory compliance, security, auditability, and reporting aligned with enterprise expectations — including sustainability and disclosure programs where required.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Design Principles */}
      <section className="py-24 bg-white text-brand-dark">
        <div className="max-content">
          <div className="text-center mb-16">
            <div className="section-label-light">■ Design Principles</div>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">Four Pillars of the Qvanto Standard</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1 }} whileHover={{ y: -8 }}
                className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-xl transition-all">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: `${p.color}18`, color: p.color }}>
                  {p.icon}
                </div>
                <h3 className="font-bold text-base mb-3">{p.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed font-medium">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack Diagram */}
      <section className="py-24 relative">
        <div className="absolute inset-0 arch-grid opacity-30" />
        <div className="max-content relative z-10">
          <div className="text-center mb-16">
            <div className="section-label-dark">■ Stack Diagram</div>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-4">Architecture Layer Specification</h2>
            <p className="text-white/35 max-w-xl mx-auto font-medium">Five layers, one unified governance chain — from data ingestion to regulated output delivery.</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {layers.map((layer, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group relative rounded-2xl border border-white/8 bg-white/3 backdrop-blur-xl p-6 hover:border-white/15 hover:bg-white/5 transition-all cursor-default"
                style={{ borderLeftColor: layer.color, borderLeftWidth: 3 }}>
                <div className="flex items-start gap-5">
                  <div className="flex flex-col items-center gap-1 shrink-0">
                    <div className="w-2 h-2 rounded-full animate-node-pulse" style={{ backgroundColor: layer.color }} />
                    {i < layers.length - 1 && <div className="w-px flex-1 min-h-4 mt-1" style={{ backgroundColor: `${layer.color}30` }} />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-[9px] font-bold uppercase tracking-[0.2em]" style={{ color: layer.color }}>Layer {i + 1}</div>
                      <h3 className="text-base font-bold text-white">{layer.label}</h3>
                    </div>
                    <p className="text-sm text-white/40 font-medium mb-4 leading-relaxed">{layer.desc}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {layer.specs.map((spec, j) => (
                        <div key={j} className="flex items-center gap-2 text-[11px] text-white/35 font-medium">
                          <span className="w-1 h-1 rounded-full shrink-0" style={{ backgroundColor: layer.color }} />
                          {spec}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance Standard Table */}
      <section className="py-24 bg-white text-brand-dark">
        <div className="max-content">
          <div className="text-center mb-16">
            <div className="section-label-light">■ Governance Standard</div>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">Consistent Across Every Vertical Suite</h2>
            <p className="text-gray-400 max-w-xl mx-auto font-medium">One governed stack: the same data governance, security, and compliance posture applies across every domain module — privacy through to regulatory and disclosure obligations.</p>
          </div>
          <div className="max-w-4xl mx-auto overflow-x-auto rounded-3xl border border-gray-100 shadow-xl">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-5 text-xs font-bold uppercase tracking-widest text-gray-400">Governance Dimension</th>
                  <th className="p-5 text-xs font-bold uppercase tracking-widest text-brand-blue text-center">BFSI Engine</th>
                  <th className="p-5 text-xs font-bold uppercase tracking-widest text-emerald-600 text-center">Commerce Engine</th>
                  <th className="p-5 text-xs font-bold uppercase tracking-widest text-amber-500 text-center">Reporting & standards</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { dim: 'Data Privacy Automation', bfsi: '✅', commerce: '✅', esg: '✅' },
                  { dim: 'Zero Raw Data Migration', bfsi: '✅', commerce: '✅', esg: '✅' },
                  { dim: 'Full Audit Trail', bfsi: '✅', commerce: '✅', esg: '✅' },
                  { dim: 'Data Lineage Tracking', bfsi: '✅', commerce: '✅', esg: '✅' },
                  { dim: 'Role-Based Access Control', bfsi: '✅', commerce: '✅', esg: '✅' },
                  { dim: 'GDPR / DPDP Compliance', bfsi: '✅', commerce: '✅', esg: '✅' },
                  { dim: 'SEBI / RBI RegTech', bfsi: '✅ Core', commerce: '—', esg: 'Partial' },
                  { dim: 'Disclosure & sustainability reporting', bfsi: '✅', commerce: '✅', esg: '✅' },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50/60 transition-colors">
                    <td className="p-5 text-sm font-bold text-gray-600">{row.dim}</td>
                    <td className="p-5 text-sm font-black text-brand-blue text-center">{row.bfsi}</td>
                    <td className="p-5 text-sm font-black text-emerald-600 text-center">{row.commerce}</td>
                    <td className="p-5 text-sm font-black text-amber-500 text-center">{row.esg}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Security Spec */}
      <section className="py-24 relative">
        <div className="max-content">
          <div className="text-center mb-16">
            <div className="section-label-dark">■ Security Specification</div>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-4">Enterprise-Grade Security by Default</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: <Lock size={20} />, title: 'Encryption', points: ['AES-256 at rest', 'TLS 1.3 in transit', 'Key rotation policies', 'HSM support'] },
              { icon: <ShieldCheck size={20} />, title: 'Access Control', points: ['RBAC + ABAC models', 'Zero-trust network posture', 'MFA + SSO integration', 'Session audit logging'] },
              { icon: <FileText size={20} />, title: 'Audit & Compliance', points: ['Immutable audit logs', 'Real-time anomaly detection', 'SOC 2 Type II aligned', 'ISO 27001 controls'] },
            ].map((sec, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1 }} className="glass-card p-8">
                <div className="text-brand-blue mb-5">{sec.icon}</div>
                <h3 className="font-bold text-lg mb-5 text-white">{sec.title}</h3>
                <ul className="space-y-2.5">
                  {sec.points.map((pt, j) => (
                    <li key={j} className="flex items-center gap-2.5 text-sm text-white/45 font-medium">
                      <CheckCircle2 size={13} className="text-brand-blue shrink-0" /> {pt}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white text-brand-dark">
        <div className="max-content text-center">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">Request the Full Architecture Whitepaper</h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto font-medium text-lg">
            Our solutions engineering team will walk you through the full technical specification tailored to your enterprise stack.
          </p>
          <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} onClick={() => setCurrentPage('contact')}
            className="inline-flex items-center gap-2 px-10 py-4 bg-brand-dark text-white rounded-md font-bold uppercase tracking-widest text-xs hover:bg-gray-900 transition-all">
            Request Architecture Brief <ArrowRight size={14} />
          </motion.button>
        </div>
      </section>
    </div>
  );
}
