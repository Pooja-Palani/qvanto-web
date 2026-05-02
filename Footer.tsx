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
        { label: 'ESG Framework', id: 'capabilities' },
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
            <div className="flex items-center gap-3 mb-5 cursor-pointer" onClick={() => setCurrentPage('home')}>
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-brand-blue font-black -rotate-12">Q</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[15px] font-black tracking-tight uppercase">Qvanto AI</span>
                <span className="text-[8px] font-bold tracking-[0.18em] text-white/25 uppercase">Ecosystem</span>
              </div>
            </div>
            <p className="text-white/35 text-sm leading-relaxed mb-6 max-w-xs font-medium">
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
          <div className="flex flex-wrap gap-6 text-sm text-white/40 font-medium">
            {[
              { icon: MailIcon, text: 'qvanto.ai.ltd@gmail.com' },
              { icon: Phone, text: '+91 9500006530' },
              { icon: Linkedin, text: 'linkedin.com/company/qvanto-ai' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 hover:text-white/70 transition-colors cursor-pointer">
                <item.icon size={13} className="text-brand-blue" />
                {item.text}
              </div>
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
