import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Code2, Globe, Zap, Lock, ArrowRight, CheckCircle2, Database, Shield, Cpu, ShoppingBag, Leaf, Building2, Copy, Check } from 'lucide-react';

interface DevelopersProps { setCurrentPage: (page: string) => void; }

const sampleCode = `// Qvanto Governance SDK — Policy Enforcement Example
import { QvantoClient } from '@qvanto/sdk';

const client = new QvantoClient({
  apiKey: process.env.QVANTO_API_KEY,
  environment: 'production',
  vertical: 'bfsi',
});

// Deploy a compliance agent for regulatory classification
const agent = await client.agents.deploy({
  type: 'compliance',
  regulations: ['SEBI', 'RBI', 'DPDP'],
  policySet: 'bfsi-standard-v2',
});

// Classify an incoming data asset
const classification = await agent.classify({
  dataAsset: { id: 'ds_12345', schema: 'customer_pii' },
  context: { purpose: 'KYC_verification', team: 'risk' },
});

console.log(classification);
// → { sensitivity: 'HIGH', regulatoryFlags: ['DPDP§8'], approved: true }`;

const apis = [
  { icon: <Shield size={20} />, label: 'Governance SDK', sub: 'Python · Node.js · Java', color: '#06b6d4', cls: 'engine-governance', desc: 'Core governance primitives: policy deployment, data tagging, lineage tracking, and audit log streaming.' },
  { icon: <Building2 size={20} />, label: 'BFSI Compliance API', sub: 'REST + Webhooks', color: '#7c3aed', cls: 'engine-bfsi', desc: 'RegTech signal ingestion, compliance classification agents, and risk scoring endpoints.' },
  { icon: <Leaf size={20} />, label: 'ESG Reporting Webhooks', sub: 'Event-Driven · JSON', color: '#f59e0b', cls: 'engine-esg', desc: 'Real-time ESG metric streams, automated BRSR payload builder, and GRI report triggers.' },
  { icon: <ShoppingBag size={20} />, label: 'Commerce Orchestration API', sub: 'REST · GraphQL', color: '#10b981', cls: 'engine-commerce', desc: 'Supply chain agent endpoints, demand forecast APIs, and inventory optimization webhooks.' },
];

const integrations = ['AWS', 'Azure', 'Google Cloud', 'Snowflake', 'Databricks', 'dbt', 'Apache Kafka', 'Airflow', 'Power BI', 'Tableau', 'Salesforce', 'SAP'];

export default function Developers({ setCurrentPage }: DevelopersProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(sampleCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-brand-dark min-h-screen">
      {/* Hero */}
      <section className="relative pt-44 pb-20 text-center overflow-hidden">
        <div className="absolute inset-0 arch-grid opacity-50" />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(6,182,212,0.08) 0%, transparent 65%)' }} />
        <div className="max-content relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="section-label-dark">■ Developer Hub</div>
            <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-6 leading-[1.1]">
              Build on the<br />
              <span className="italic font-serif text-brand-blue">Qvanto Intelligence Layer.</span>
            </h1>
            <p className="text-xl text-white/40 max-w-2xl mx-auto font-medium leading-relaxed mb-10">
              API-first. Agent-native. Architected for interoperability across your existing enterprise stack.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button onClick={() => setCurrentPage('contact')}
                className="px-10 py-4 bg-white text-brand-dark rounded-md font-bold uppercase tracking-widest text-xs hover:bg-gray-100 transition-all">
                Request API Access
              </button>
              <button onClick={() => setCurrentPage('architecture')}
                className="px-10 py-4 bg-white/6 backdrop-blur-md border border-white/18 text-white rounded-md font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-all">
                View Architecture Spec
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* API Overview */}
      <section className="py-8 bg-brand-surface/40 border-y border-white/6">
        <div className="max-content">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            {[
              { label: 'REST API', icon: <Globe size={16} /> },
              { label: 'Webhooks', icon: <Zap size={16} /> },
              { label: 'Python SDK', icon: <Code2 size={16} /> },
              { label: 'Node.js SDK', icon: <Code2 size={16} /> },
              { label: 'SOC 2 Compliant', icon: <Lock size={16} /> },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-white/35">
                <span className="text-brand-blue">{item.icon}</span> {item.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SDK Hub */}
      <section className="py-24 relative">
        <div className="max-content">
          <div className="text-center mb-16">
            <div className="section-label-dark">■ SDK Hub</div>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-4">Four APIs. One Unified Intelligence Layer.</h2>
            <p className="text-white/35 max-w-xl mx-auto font-medium">Every vertical engine is API-first and architected for deep enterprise integration.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {apis.map((api, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1 }} className={`engine-card ${api.cls} group p-8`}>
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${api.color}20`, color: api.color }}>
                    {api.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-white">{api.label}</h3>
                    <div className="text-[10px] font-bold uppercase tracking-widest mt-0.5" style={{ color: api.color }}>{api.sub}</div>
                  </div>
                </div>
                <p className="text-sm text-white/40 leading-relaxed font-medium mb-5">{api.desc}</p>
                <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest cursor-pointer" style={{ color: api.color }}>
                  Request Access <ArrowRight size={10} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Code */}
      <section className="py-24 bg-white text-brand-dark">
        <div className="max-content">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label-light">■ Quick Start</div>
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 leading-tight">Deploy your first compliance agent in minutes.</h2>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed font-medium">Our SDK abstracts the complexity of multi-agent orchestration, policy enforcement, and regulatory classification into a clean, developer-friendly API surface.</p>
              <div className="space-y-3 mb-8">
                {['REST + webhook event architecture', 'Full TypeScript + Python type definitions', 'Sandbox environment for integration testing', 'HMAC-signed webhook payloads for security'].map((pt, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-gray-500 font-medium">
                    <CheckCircle2 size={15} className="text-brand-blue shrink-0" /> {pt}
                  </div>
                ))}
              </div>
              <button onClick={() => setCurrentPage('contact')}
                className="inline-flex items-center gap-2 px-8 py-3 bg-brand-dark text-white rounded-md font-bold uppercase tracking-widest text-xs hover:bg-gray-900 transition-all">
                Talk to a Solutions Architect <ArrowRight size={14} />
              </button>
            </div>

            <div className="relative">
              <div className="code-block p-6 relative">
                <button onClick={handleCopy}
                  className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white/70 hover:bg-white/10 transition-all">
                  {copied ? <><Check size={11} /> Copied</> : <><Copy size={11} /> Copy</>}
                </button>
                <pre className="text-[12px] leading-relaxed overflow-x-auto">
                  {sampleCode.split('\n').map((line, i) => {
                    const isComment = line.trim().startsWith('//');
                    const isImport = line.startsWith('import');
                    const isConst = line.includes('const ') || line.includes('await ');
                    return (
                      <div key={i} className={`${isComment ? 'text-white/25' : isImport ? 'text-brand-cyan' : isConst ? 'text-white/80' : 'text-white/55'}`}>
                        {line || <br />}
                      </div>
                    );
                  })}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Matrix */}
      <section className="py-24 relative">
        <div className="max-content">
          <div className="text-center mb-16">
            <div className="section-label-dark">■ Integration Matrix</div>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-4">Plug into your existing stack.</h2>
            <p className="text-white/35 max-w-xl mx-auto font-medium">Native connectors for the platforms your enterprise already runs on.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {integrations.map((int, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                transition={{ delay: i * 0.04 }} className="tech-badge cursor-default">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue/50" /> {int}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white text-brand-dark">
        <div className="max-content text-center">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">Ready to integrate?</h2>
          <p className="text-gray-400 mb-10 max-w-lg mx-auto font-medium text-lg">Request sandbox API access and a solutions architecture review.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button whileHover={{ scale: 1.04 }} onClick={() => setCurrentPage('contact')}
              className="inline-flex items-center gap-2 px-10 py-4 bg-brand-dark text-white rounded-md font-bold uppercase tracking-widest text-xs hover:bg-gray-900 transition-all">
              Request API Access <ArrowRight size={14} />
            </motion.button>
            <motion.button whileHover={{ scale: 1.04 }} onClick={() => setCurrentPage('architecture')}
              className="btn-secondary px-10 py-4 text-xs uppercase tracking-widest">
              View Architecture Spec
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
}
