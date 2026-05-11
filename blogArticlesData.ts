/** Full articles for Insights — slugs map to App.tsx routes */

export interface BlogSection {
  heading: string;
  paragraphs: string[];
}

export interface BlogArticleData {
  slug: string;
  tag: string;
  color: string;
  title: string;
  excerpt: string;
  read: string;
  img: string;
  lead: string;
  sections: BlogSection[];
  keywords: string[];
}

export const BLOG_ARTICLES: BlogArticleData[] = [
  {
    slug: 'blog-ai-governance',
    tag: 'AI & Governance',
    color: '#3b82f6',
    title: 'The Rise of Agentic AI in Enterprise Governance',
    excerpt:
      'Why the RPA era is ending and autonomous agents are becoming the foundational compliance infrastructure for regulated industries. We explore the architectural shift from rule-based automation to self-reasoning agent networks that operate within policy boundaries.',
    read: '8 min',
    img: '/images/blog_ai_governance.png',
    lead:
      'Regulated enterprises are moving from brittle, script-based automation to agentic systems that can interpret policy, chain tools, and leave an auditable trail. That shift is not a UX trend — it is a governance architecture decision.',
    sections: [
      {
        heading: 'Why RPA hits a ceiling in compliance',
        paragraphs: [
          'Traditional RPA excels at deterministic steps: open a form, copy a field, submit a report. Regulatory work is rarely that stable. Rules change mid-quarter, exceptions multiply, and “if this then that” trees become impossible to maintain.',
          'When every edge case requires a developer ticket, compliance teams either slow down or work outside the system. Neither outcome is acceptable for banks, insurers, or healthcare operators under supervisory scrutiny.',
        ],
      },
      {
        heading: 'What “agentic” means in practice',
        paragraphs: [
          'Agentic AI combines language or reasoning models with tools (databases, ticketing, policy engines) and explicit guardrails. Agents plan steps, call APIs, and stop when policy says stop — rather than blindly replaying a macro.',
          'The goal is not autonomy for its own sake. It is to compress the time between a regulatory signal and a governed action, while preserving segregation of duties, evidence chains, and human escalation paths.',
        ],
      },
      {
        heading: 'Designing for audit from day zero',
        paragraphs: [
          'Enterprise-grade agent stacks log intent, inputs, tool outputs, and model versions. Metadata-first patterns mean sensitive payloads often stay in place while agents operate on classifications, tags, and routing decisions.',
          'When auditors ask “who decided what, when, and under which policy version?”, the answer should be queryable — not buried in screenshots and email threads.',
        ],
      },
      {
        heading: 'Where teams should start',
        paragraphs: [
          'High-friction, high-repeat workflows are the best first targets: KYC refresh triggers, policy attestation cycles, or breach-of-limit alerts that today require swivel-chair coordination.',
          'Pilot with narrow scope, hard caps on autonomous actions, and a human-in-the-loop gate for anything that changes customer rights or financial exposure. Scale when telemetry proves the control model holds.',
        ],
      },
    ],
    keywords: [
      'Agentic AI',
      'Enterprise governance',
      'RPA',
      'Compliance infrastructure',
      'Regulated industries',
      'Autonomous agents',
      'Audit trail',
      'Policy gating',
      'RegTech',
      'Metadata-first architecture',
    ],
  },
  {
    slug: 'blog-esg-data',
    tag: 'ESG',
    color: '#f59e0b',
    title: 'ESG Data: From Compliance Burden to Competitive Edge',
    excerpt:
      'Mandatory BRSR, GRI, and TCFD reporting are no longer optional. Leading enterprises are deploying data-agent pipelines to transform ESG reporting from a cost centre into a real-time strategic intelligence asset that informs capital allocation.',
    read: '6 min',
    img: '/images/blog_esg_data.png',
    lead:
      'Sustainability reporting stopped being a PDF exercise. Investors, boards, and regulators expect traceable numbers, comparable metrics, and evidence that disclosures match operational reality. Data discipline is now competitive advantage.',
    sections: [
      {
        heading: 'The reporting stack is a data problem',
        paragraphs: [
          'BRSR, GRI, and TCFD each ask for indicators that span finance, operations, HR, and supply chain. Spreadsheets and manual consolidation create version drift: the number in the board deck is not always the number in the source system.',
          'Fixing that requires lineage: which field fed which KPI, at what time, under which methodology. Agents help by continuously reconciling sources, flagging gaps, and packaging reviewer-ready packets.',
        ],
      },
      {
        heading: 'From periodic filing to continuous assurance',
        paragraphs: [
          'Annual disclosures hide surprises. Continuous monitoring surfaces anomalies early — energy intensity spikes, supplier mix shifts, or incomplete scope-3 coverage — when teams can still correct course.',
          'Agentic pipelines can schedule fetches, validate ranges, and open tasks in your GRC or ESG workflow tool when thresholds breach. Humans approve; machines do the tedious reconciliation.',
        ],
      },
      {
        heading: 'Trust and greenwashing risk',
        paragraphs: [
          'Marketing narratives move faster than verified data. A governed ESG stack ties public statements to underlying metrics and approvals, reducing reputational and legal exposure.',
          'Strong controls look like role-based access, immutable logs, and model transparency for any AI-assisted narrative generation. If a claim is questioned, you show the chain — not a best-effort narrative.',
        ],
      },
      {
        heading: 'Capital allocation follows credible signals',
        paragraphs: [
          'When disclosure quality improves, internal capital decisions improve with it. The same indicators that satisfy regulators can steer capex toward lower-carbon projects or more resilient suppliers.',
          'Treat ESG data as a product: owners, SLAs, and quality metrics — not a side-of-desk export job.',
        ],
      },
    ],
    keywords: [
      'ESG data',
      'Compliance reporting',
      'BRSR',
      'GRI',
      'TCFD',
      'Data-agent pipelines',
      'Lineage',
      'Sustainability disclosure',
      'Continuous assurance',
      'Capital allocation',
    ],
  },
  {
    slug: 'blog-digital-retail',
    tag: 'Digital Retail',
    color: '#10b981',
    title: 'Why Digital Retail Platforms Need an Intelligence Layer',
    excerpt:
      'Supply chain fragmentation, demand volatility, and personalisation at scale demand more than traditional orchestration. Autonomous agents that govern data across digital retail platforms are the only path to resilient, adaptive operations.',
    read: '7 min',
    img: '/images/blog_digital_retail.png',
    lead:
      'Retail platforms sit on a patchwork of OMS, WMS, POS, CDP, and marketplace APIs. Without an intelligence layer, “real-time commerce” becomes a slogan — teams react late because signals arrive late and fragmented.',
    sections: [
      {
        heading: 'Fragmentation is the default state',
        paragraphs: [
          'Each channel optimizes for itself. E-commerce, stores, and wholesale partners each produce partial demand signals. Integrations break, latency varies, and planners compensate with buffer stock and discounts.',
          'An intelligence layer normalizes events, resolves identities, and applies business rules before recommendations hit merchandising or supply systems.',
        ],
      },
      {
        heading: 'Demand volatility needs more than static forecasts',
        paragraphs: [
          'Classic batch forecasts miss viral spikes, weather shocks, or competitor moves. Agentic workflows can combine short-horizon signals (search trends, basket mix, fulfillment constraints) with guardrails on price and inventory risk.',
          'Models propose; policies approve. That separation keeps automation inside brand and margin constraints.',
        ],
      },
      {
        heading: 'Personalisation without creepiness',
        paragraphs: [
          'Customers expect relevance and privacy. A governed layer enforces consent, purpose limitation, and suppression lists while still enabling segment-level offers.',
          'Agents should never “leak” cross-context data into messaging. Governance is part of the product surface, not an afterthought.',
        ],
      },
      {
        heading: 'Operational resilience',
        paragraphs: [
          'When a DC goes down or a carrier slips, orchestration agents can re-route, re-promise delivery windows, and notify customer service with consistent facts — reducing chargebacks and support load.',
          'Resilience is measured in minutes-to-recover and dollars-not-lost. Intelligence layers earn their keep on those KPIs.',
        ],
      },
    ],
    keywords: [
      'Digital retail platforms',
      'Intelligence layer',
      'Supply chain fragmentation',
      'Demand volatility',
      'Hyper-personalisation',
      'Autonomous agents',
      'OMS / WMS integration',
      'Customer consent',
      'Operational resilience',
      'Real-time orchestration',
    ],
  },
];

export const BLOG_BY_SLUG: Record<string, BlogArticleData> = Object.fromEntries(
  BLOG_ARTICLES.map((a) => [a.slug, a])
);

export function getSuggestedBlogs(currentSlug: string): BlogArticleData[] {
  return BLOG_ARTICLES.filter((a) => a.slug !== currentSlug);
}

/** Summaries for the Insights listing (featured trio) */
export function blogSummariesForInsights(): Array<{
  tag: string;
  color: string;
  title: string;
  excerpt: string;
  read: string;
  img: string;
  featured: boolean;
  slug: string;
}> {
  return BLOG_ARTICLES.map((a) => ({
    tag: a.tag,
    color: a.color,
    title: a.title,
    excerpt: a.excerpt,
    read: a.read,
    img: a.img,
    featured: true,
    slug: a.slug,
  }));
}
