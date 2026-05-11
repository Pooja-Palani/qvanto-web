import React from 'react';
import { Linkedin, Mail as MailIcon, Phone, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface FooterProps { setCurrentPage: (page: string) => void; }

export default function Footer({ setCurrentPage }: FooterProps) {
  const columns = [
    {
      heading: 'Ecosystem',
      links: [
        { label: 'Home', id: 'home' },
        { label: 'About', id: 'about' },
        { label: 'Contact', id: 'contact' },
      ],
    },
    {
      heading: 'Capabilities',
      links: [
        { label: 'Intelligence Core', id: 'capabilities' },
        { label: 'BFSI Engine', id: 'capabilities' },
        { label: 'Commerce Engine', id: 'capabilities' },
        { label: 'Agentic platform delivery', id: 'capabilities' },
        { label: 'Governance Fabric', id: 'capabilities' },
      ],
    },
    {
      heading: 'Platform',
      links: [
        { label: 'Architecture Spec', id: 'architecture' },
        { label: 'Insights', id: 'insights' },
      ],
    },
  ];

  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-content">
        <div className="grid md:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="md:col-span-2">
            <button
              type="button"
              onClick={() => setCurrentPage('home')}
              className="mb-5 block text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/60 rounded-lg"
            >
              <img
                src="/Logo.png"
                alt="Qvanto AI"
                className="h-18 w-auto max-w-[min(100%,380px)] object-contain object-left sm:h-22 md:h-[5.5rem] lg:h-25"
              />
              <span className="mt-2 block text-[8px] font-bold tracking-[0.18em] text-white/25 uppercase">Ecosystem</span>
            </button>
            <p className="text-white/35 text-sm leading-relaxed mb-6 max-w-md font-medium">
              We engineer the Agentic Intelligence and Governance layers that power the world's most data-critical enterprises.
            </p>
            <button onClick={() => setCurrentPage('contact')}
              className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-blue hover:text-blue-400 transition-colors">
              Request Architecture Brief <ArrowRight size={10} />
            </button>
          </motion.div>

          {/* Link columns */}
          {columns.map((col, ci) => (
            <motion.div key={ci} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 + ci * 0.07 }} viewport={{ once: true }}>
              <h4 className="font-bold text-[10px] uppercase tracking-[0.2em] text-white/30 mb-6">{col.heading}</h4>
              <ul className="space-y-3">
                {col.links.map((link, li) => (
                  <li key={li}>
                    <button onClick={() => setCurrentPage(link.id)}
                      className="text-sm text-white/50 hover:text-white transition-colors font-medium text-left">
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact strip */}
        <div className="py-8 border-t border-white/5 border-b border-white/5 mb-8">
          <div className="flex flex-wrap gap-6 text-sm font-medium">
            {[
              {
                icon: MailIcon,
                text: 'qvanto.ai.ltd@gmail.com',
                href: 'mailto:qvanto.ai.ltd@gmail.com',
              },
              {
                icon: Phone,
                text: '+91 9500006530',
                href: 'tel:+919500006530',
              },
              {
                icon: Linkedin,
                text: 'linkedin.com/company/qvanto-ai',
                href: 'https://www.linkedin.com/company/qvanto-ai',
                external: true,
              },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="flex items-center gap-2 text-white/40 transition-colors hover:text-white/85"
              >
                <item.icon size={13} className="shrink-0 text-brand-blue" />
                <span>{item.text}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-bold text-white/18 uppercase tracking-[0.2em]">
            © 2026 Qvanto AI. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Terms & Conditions', 'Privacy Policy'].map((label, i) => (
              <button key={i} className="text-[10px] font-bold text-white/18 uppercase tracking-[0.15em] hover:text-white/50 transition-colors">
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
