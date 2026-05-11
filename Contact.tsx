import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail as MailIcon, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2,
  Plus,
  Linkedin,
  MessageSquare
} from 'lucide-react';

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [submitError, setSubmitError] = useState('');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);



  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');
    setSubmitError('');
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        setFormStatus('sent');
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      console.error('Error:', error);
      setFormStatus('error');
      setSubmitError('Failed to send message. Please try again.');
    }
  };

  const handleReset = () => {
    setFormStatus('idle');
    setSubmitError('');
  };

  const faqs = [
    { q: "What makes Qvanto different from other governance platforms?", a: "Qvanto is metadata-driven — it works only on data about data, so no raw data is ever moved. This means zero privacy risk and faster integration across any multi-cloud environment." },
    { q: "Which regulations does Qvanto support?", a: "Qvanto supports GDPR, HIPAA, CCPA, India's DPDP Act, SEBI BRSR, and RBI/IRDAI ESG guidelines out of the box." },
    { q: "How quickly can Qvanto be deployed?", a: "Qvanto deploys in weeks — compared to months or years for traditional governance platforms." },
    { q: "Which cloud platforms does Qvanto work with?", a: "Qvanto is fully vendor-neutral and works across AWS, Azure, GCP, Snowflake, and hybrid on-prem environments." },
    { q: "Can we request a proof-of-concept before committing?", a: "Yes. Contact us at qvanto.ai.ltd@gmail.com to discuss a PoC or trial tailored to your organization." },
  ];

  return (
    <div className="bg-brand-dark min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 overflow-hidden text-center">
        <div className="absolute inset-0 hero-gradient opacity-40"></div>
        <div className="max-content relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-medium tracking-tight text-white mb-8 leading-[1.1]"
          >
            Let's build something<br />
            <span className="italic font-serif text-brand-blue">intelligent together.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl text-white/60 max-w-2xl mx-auto font-medium leading-relaxed"
          >
            Reach out to explore how Qvanto's agentic intelligence and governance architecture maps to your enterprise stack.
          </motion.p>
        </div>
      </section>

      {/* Contact Details & Form Section */}
      <section className="py-32 relative">
        <div className="max-content">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
            {/* Contact Info — narrower column so the form reads wider */}
            <div className="lg:col-span-4">
              <div className="inline-block px-4 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-white/60 mb-12">
                ■ Contact Details
              </div>
              
              <div className="space-y-12">
                {[
                  { icon: <MailIcon size={24} />, title: 'Email Us', content: 'qvanto.ai.ltd@gmail.com', type: 'email' },
                  { 
                    icon: <Phone size={24} />, 
                    title: 'Call Us', 
                    content: ['+91 9500006530', '+91 9840736745'],
                    type: 'phone'
                  },
                  { icon: <Linkedin size={24} />, title: 'LinkedIn', content: 'linkedin.com/company/qvanto-ai', type: 'linkedin' }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex gap-8 group"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-brand-blue/50 transition-colors"
                    >
                      <span className="text-brand-blue">{item.icon}</span>
                    </motion.div>
                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2">{item.title}</h4>
                      {Array.isArray(item.content) ? (
                        item.content.map((line, idx) => (
                          <p key={idx} className="text-2xl font-bold">{line}</p>
                        ))
                      ) : (
                        <p className="text-2xl font-bold">{item.content}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Contact Form — wider column */}
            <div className="glass-card relative flex min-h-[36rem] flex-col overflow-hidden p-8 sm:p-12 lg:col-span-8">
              <div className="relative z-10 flex-1 flex flex-col">
                <AnimatePresence mode="wait">
                  {formStatus === 'sent' ? (
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="flex-1 flex flex-col items-center justify-center text-center space-y-6"
                    >
                      <div className="w-24 h-24 rounded-full bg-brand-blue/20 flex items-center justify-center">
                        <CheckCircle2 className="text-brand-blue" size={48} />
                      </div>
                      <h3 className="text-4xl font-bold">Message Sent!</h3>
                      <p className="text-white/60 max-w-sm mx-auto">
                        Thank you for reaching out. Our team will get back to you within 24 hours.
                      </p>
                      <button 
                        onClick={handleReset}
                        className="px-8 py-3 border border-white/10 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-white/5 transition-colors"
                      >
                        Send Another Message
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex-1 flex flex-col"
                    >
                      <h3 className="text-3xl font-bold mb-8">Send Us a Message</h3>
                      <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col">
                        <input type="hidden" name="form-name" value="contact" />
                        <p className="hidden">
                          <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-1">Full Name (required)</label>
                            <input 
                              required
                              name="fullName"
                              type="text" 
                              placeholder="John Doe"
                              className="w-full bg-white/5 border border-white/10 rounded-lg px-6 py-4 text-white focus:outline-none focus:border-brand-blue/50 transition-colors"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-1">Company Name (required)</label>
                            <input 
                              required
                              name="companyName"
                              type="text" 
                              placeholder="Enterprise Name"
                              className="w-full bg-white/5 border border-white/10 rounded-lg px-6 py-4 text-white focus:outline-none focus:border-brand-blue/50 transition-colors"
                            />
                          </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-1">Work Email (required)</label>
                            <input 
                              required
                              name="workEmail"
                              type="email" 
                              placeholder="john@company.com"
                              className="w-full bg-white/5 border border-white/10 rounded-lg px-6 py-4 text-white focus:outline-none focus:border-brand-blue/50 transition-colors"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-1">Phone Number</label>
                            <input 
                              name="phoneNumber"
                              type="tel" 
                              placeholder="+91 00000 00000"
                              className="w-full bg-white/5 border border-white/10 rounded-lg px-6 py-4 text-white focus:outline-none focus:border-brand-blue/50 transition-colors"
                            />
                          </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-1">Industry</label>
                            <select name="industry" className="w-full bg-white/5 border border-white/10 rounded-lg px-6 py-4 text-white focus:outline-none focus:border-brand-blue/50 transition-colors appearance-none">
                              <option value="" className="bg-brand-dark">Select Industry</option>
                              <option value="BFSI" className="bg-brand-dark">BFSI</option>
                              <option value="Digital Retail" className="bg-brand-dark">Digital Retail</option>
                              <option value="ESG / Sustainability" className="bg-brand-dark">ESG / Sustainability</option>
                              <option value="Healthcare" className="bg-brand-dark">Healthcare</option>
                              <option value="Telecom" className="bg-brand-dark">Telecom</option>
                              <option value="Manufacturing" className="bg-brand-dark">Manufacturing</option>
                              <option value="Other" className="bg-brand-dark">Other</option>
                            </select>
                          </div>
                          <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-1">I am looking for...</label>
                            <select name="lookingFor" className="w-full bg-white/5 border border-white/10 rounded-lg px-6 py-4 text-white focus:outline-none focus:border-brand-blue/50 transition-colors appearance-none">
                              <option value="" className="bg-brand-dark">Select Option</option>
                              <option value="Product Demo" className="bg-brand-dark">Product Demo</option>
                              <option value="Pricing Info" className="bg-brand-dark">Pricing Info</option>
                              <option value="Partnership" className="bg-brand-dark">Partnership</option>
                              <option value="General Inquiry" className="bg-brand-dark">General Inquiry</option>
                            </select>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-1">Your Message</label>
                          <textarea 
                            required
                            name="message"
                            rows={4}
                            placeholder="How can we help you?"
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-6 py-4 text-white focus:outline-none focus:border-brand-blue/50 transition-colors resize-none"
                          ></textarea>
                        </div>
                        <div className="mt-auto pt-6">
                          {formStatus === 'error' && (
                            <p className="mb-4 text-sm text-red-400 border border-red-500/30 bg-red-500/10 rounded-lg px-4 py-3">
                              {submitError}
                            </p>
                          )}
                          <button 
                            disabled={formStatus === 'sending'}
                            className="w-full py-5 bg-brand-blue text-white rounded-lg font-bold uppercase tracking-widest text-xs hover:bg-brand-blue/80 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                          >
                            {(formStatus === 'idle' || formStatus === 'error') && (
                              <>
                                Send Message <Send size={16} />
                              </>
                            )}
                            {formStatus === 'sending' && (
                              <>
                                Sending... <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                              </>
                            )}
                          </button>
                        </div>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

