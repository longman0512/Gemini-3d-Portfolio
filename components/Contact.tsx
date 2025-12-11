import React from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone } from 'lucide-react';
import Section from './ui/Section';
import Button from './ui/Button';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  return (
    <Section id="contact" title="Get In Touch" subtitle="Connect With Me">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-slate-900/50 backdrop-blur-md p-8 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden group"
        >
          {/* Neon Border Effect */}
          <div className="absolute inset-0 border border-transparent rounded-3xl pointer-events-none transition-all duration-500 group-hover:border-cyan-500/30" />
          
          <h3 className="text-2xl font-display font-bold text-white mb-6">Send a Message</h3>
          
          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-tech text-cyan-400 uppercase tracking-wider ml-1">Name</label>
              <input 
                type="text" 
                id="name"
                className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-cyan-500 focus:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300"
                placeholder="John Doe"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-tech text-cyan-400 uppercase tracking-wider ml-1">Email</label>
              <input 
                type="email" 
                id="email"
                className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-cyan-500 focus:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300"
                placeholder="john@example.com"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-tech text-cyan-400 uppercase tracking-wider ml-1">Message</label>
              <textarea 
                id="message"
                rows={4}
                className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-cyan-500 focus:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300 resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <Button variant="primary" className="w-full" icon={<Send size={18} />}>
              Transmit Message
            </Button>
          </form>
        </motion.div>

        {/* Contact Info & Socials */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          {/* Info Cards */}
          <div className="space-y-6">
             <div className="flex items-center gap-4 group cursor-default">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-900 transition-colors duration-300 shadow-[0_0_15px_rgba(6,182,212,0.1)] group-hover:shadow-[0_0_20px_rgba(6,182,212,0.6)]">
                    <Mail size={20} />
                </div>
                <div>
                    <h4 className="text-slate-400 text-sm font-tech uppercase tracking-wider">Email</h4>
                    <p className="text-white text-lg font-semibold group-hover:text-cyan-400 transition-colors">contact@nexus.dev</p>
                </div>
             </div>
             
             <div className="flex items-center gap-4 group cursor-default">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-900 transition-colors duration-300 shadow-[0_0_15px_rgba(6,182,212,0.1)] group-hover:shadow-[0_0_20px_rgba(6,182,212,0.6)]">
                    <Phone size={20} />
                </div>
                <div>
                    <h4 className="text-slate-400 text-sm font-tech uppercase tracking-wider">Phone</h4>
                    <p className="text-white text-lg font-semibold group-hover:text-cyan-400 transition-colors">+1 (555) 123-4567</p>
                </div>
             </div>

             <div className="flex items-center gap-4 group cursor-default">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-900 transition-colors duration-300 shadow-[0_0_15px_rgba(6,182,212,0.1)] group-hover:shadow-[0_0_20px_rgba(6,182,212,0.6)]">
                    <MapPin size={20} />
                </div>
                <div>
                    <h4 className="text-slate-400 text-sm font-tech uppercase tracking-wider">Location</h4>
                    <p className="text-white text-lg font-semibold group-hover:text-cyan-400 transition-colors">San Francisco, CA</p>
                </div>
             </div>
          </div>

          {/* Social Grid */}
          <div>
            <h4 className="text-white font-display text-xl font-bold mb-6">Connect on Social</h4>
            <div className="grid grid-cols-2 gap-4">
                {SOCIAL_LINKS.map((social, index) => {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    const Icon = social.icon as any;
                    return (
                        <motion.a
                            key={social.name}
                            href={social.url}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            whileHover={{ 
                                scale: 1.05, 
                                rotateY: 10,
                                z: 20,
                                transition: { duration: 0.3 }
                            }}
                            className={`
                                relative p-4 rounded-xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm
                                flex items-center gap-3 cursor-pointer overflow-hidden group perspective-1000
                                hover:${social.borderColor} hover:bg-slate-900 transition-colors duration-300
                            `}
                        >
                            {/* Animated Background Glow */}
                            <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-r from-transparent via-${social.color.replace('text-', '')} to-transparent transition-opacity duration-300`} />
                            
                            <div className={`
                                w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center 
                                ${social.color} transition-colors group-hover:bg-slate-950 group-hover:shadow-[0_0_15px_rgba(0,0,0,0.5)]
                                shadow-lg
                            `}>
                                <Icon size={20} />
                            </div>
                            
                            <span className={`font-bold text-slate-400 group-hover:${social.color} transition-colors`}>
                                {social.name}
                            </span>

                            {/* Floating particles effect for card */}
                            <div className="absolute top-0 right-0 p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className={`w-1 h-1 rounded-full ${social.color.replace('text-', 'bg-')} animate-ping`} />
                            </div>
                        </motion.a>
                    )
                })}
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact;