import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Cpu, Shield, Building2, ShoppingBag, Layers, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  setCurrentPage: (page: string) => void;
  currentPage: string;
}

const capabilitiesMenu = [
  {
    icon: <Cpu size={16} />,
    label: 'Intelligence Core',
    sub: 'Agentic AI Framework',
    color: '#3b82f6',
    page: 'capabilities',
  },
  {
    icon: <Shield size={16} />,
    label: 'Governance Fabric',
    sub: 'Data Integrity & Security',
    color: '#06b6d4',
    page: 'capabilities',
  },
  {
    icon: <Building2 size={16} />,
    label: 'BFSI Engine',
    sub: 'Compliance & RegTech Infrastructure',
    color: '#7c3aed',
    page: 'capabilities',
  },
  {
    icon: <ShoppingBag size={16} />,
    label: 'Commerce Engine',
    sub: 'Retail Orchestration & Supply Chain',
    color: '#10b981',
    page: 'capabilities',
  },
  {
    icon: <Layers size={16} />,
    label: 'Agentic platform delivery',
    sub: 'Governed integration & rollout',
    color: '#f59e0b',
    page: 'capabilities',
  },
];

export default function Navbar({ setCurrentPage, currentPage }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [capabilitiesOpen, setCapabilitiesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setCapabilitiesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const primaryLinks = [
    { name: 'Ecosystem', id: 'home' },
    { name: 'Architecture', id: 'architecture' },
    { name: 'Insights', id: 'insights' },
    { name: 'About', id: 'about' },
  ];

  const navigate = (page: string) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
    setCapabilitiesOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-brand-dark/85 backdrop-blur-xl py-3 border-b border-white/8'
          : 'bg-transparent py-5'
        }`}
    >
      <div className="max-content flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center cursor-pointer"
          onClick={() => navigate('home')}
        >
          <img src="/Logo.png" alt="Qvanto AI" className="h-[6rem] w-auto max-w-[min(100%,360px)] object-contain object-left sm:h-[6.25rem] md:h-30 lg:h-36" />
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {/* Ecosystem link */}
          {primaryLinks.slice(0, 1).map((link, idx) => (
            <NavLink
              key={link.id}
              label={link.name}
              active={currentPage === link.id}
              onClick={() => navigate(link.id)}
              delay={idx * 0.05}
            />
          ))}

          {/* Capabilities Dropdown */}
          <div ref={dropdownRef} className="relative">
            <motion.button
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              onClick={() => setCapabilitiesOpen(!capabilitiesOpen)}
              onMouseEnter={() => setCapabilitiesOpen(true)}
              className={`flex items-center gap-1 text-[11px] font-bold uppercase tracking-[0.18em] transition-colors ${currentPage === 'capabilities'
                  ? 'text-white'
                  : 'text-white/55 hover:text-white'
                }`}
            >
              Capabilities
              <motion.div animate={{ rotate: capabilitiesOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown size={12} />
              </motion.div>
              {currentPage === 'capabilities' && (
                <motion.div
                  layoutId="navbar-underline"
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-brand-blue"
                  transition={{ type: 'spring', bounce: 0.2 }}
                />
              )}
            </motion.button>

            <AnimatePresence>
              {capabilitiesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.97 }}
                  transition={{ duration: 0.18 }}
                  onMouseLeave={() => setCapabilitiesOpen(false)}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[340px] bg-brand-dark/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl shadow-black/60 overflow-hidden"
                >
                  {/* Header */}
                  <div className="px-5 py-4 border-b border-white/8">
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/30">
                      Technological Capabilities
                    </p>
                  </div>

                  {/* Items */}
                  <div className="p-2">
                    {capabilitiesMenu.map((item, i) => (
                      <motion.button
                        key={i}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.04 }}
                        onClick={() => navigate(item.page)}
                        className="w-full flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-white/5 transition-all group text-left"
                      >
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                          style={{ backgroundColor: `${item.color}18`, color: item.color }}
                        >
                          {item.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-[12px] font-bold text-white group-hover:text-white transition-colors">
                            {item.label}
                          </div>
                          <div className="text-[10px] text-white/35 font-medium mt-0.5 truncate">{item.sub}</div>
                        </div>
                        <ArrowRight
                          size={12}
                          className="text-white/20 group-hover:text-white/60 group-hover:translate-x-1 transition-all shrink-0"
                        />
                      </motion.button>
                    ))}
                  </div>

                  {/* Footer CTA */}
                  <div className="px-5 py-3 border-t border-white/8 bg-white/2">
                    <button
                      onClick={() => navigate('capabilities')}
                      className="text-[10px] font-bold text-brand-blue hover:text-blue-400 uppercase tracking-widest transition-colors flex items-center gap-1"
                    >
                      View Full Capability Stack <ArrowRight size={10} />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Rest of primary links */}
          {primaryLinks.slice(1).map((link, idx) => (
            <NavLink
              key={link.id}
              label={link.name}
              active={
                link.id === 'insights'
                  ? currentPage === 'insights' || currentPage.startsWith('blog-')
                  : currentPage === link.id
              }
              onClick={() => navigate(link.id)}
              delay={(idx + 2) * 0.05}
            />
          ))}

          {/* CTA */}
          <motion.button
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => navigate('contact')}
            className="btn-primary text-[10px] py-2.5 px-6 uppercase tracking-widest"
          >
            Architecture Brief
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="lg:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-brand-dark/97 backdrop-blur-2xl border-b border-white/8 overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-1">
              {[{ name: 'Ecosystem', id: 'home' }, { name: 'Capabilities', id: 'capabilities' }, { name: 'Architecture', id: 'architecture' }, { name: 'Insights', id: 'insights' }, { name: 'About', id: 'about' }, { name: 'Contact', id: 'contact' }].map((link, idx) => {
                const mobileActive =
                  link.id === 'insights'
                    ? currentPage === 'insights' || currentPage.startsWith('blog-')
                    : currentPage === link.id;
                return (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => navigate(link.id)}
                  className={`text-left py-3 px-4 rounded-xl font-bold text-sm uppercase tracking-widest transition-all ${mobileActive
                      ? 'text-white bg-white/5'
                      : 'text-white/50 hover:text-white hover:bg-white/3'
                    }`}
                >
                  {link.name}
                </motion.button>
              );
              })}
              <div className="mt-4 pt-4 border-t border-white/8">
                <button
                  onClick={() => navigate('contact')}
                  className="w-full btn-primary text-[10px] py-3 uppercase tracking-widest"
                >
                  Request Architecture Brief
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function NavLink({
  label,
  active,
  onClick,
  delay = 0,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
  delay?: number;
}) {
  return (
    <motion.button
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      onClick={onClick}
      className={`relative text-[11px] font-bold uppercase tracking-[0.18em] transition-colors ${active ? 'text-white' : 'text-white/55 hover:text-white'
        }`}
    >
      {label}
      {active && (
        <motion.div
          layoutId="navbar-underline"
          className="absolute -bottom-2 left-0 right-0 h-0.5 bg-brand-blue"
          transition={{ type: 'spring', bounce: 0.2 }}
        />
      )}
    </motion.button>
  );
}
