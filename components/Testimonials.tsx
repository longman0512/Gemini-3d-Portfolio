import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import Section from './ui/Section';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <Section id="testimonials" title="Testimonials" subtitle="Client Feedback">
      <div className="grid md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((t, i) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            whileHover={{ y: -10 }}
            className="bg-gradient-to-b from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-slate-700/50 backdrop-blur-sm relative"
          >
            <Quote className="absolute top-6 right-6 text-slate-700 w-10 h-10 rotate-180" />
            
            <p className="text-slate-300 italic mb-8 relative z-10 leading-relaxed">
              "{t.content}"
            </p>
            
            <div className="flex items-center gap-4">
              <img 
                src={t.avatar} 
                alt={t.name} 
                className="w-12 h-12 rounded-full border-2 border-cyan-500/30"
              />
              <div>
                <h4 className="font-bold text-white text-sm">{t.name}</h4>
                <p className="text-cyan-400 text-xs">{t.role} @ {t.company}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-20 text-center">
        <h3 className="text-2xl font-display font-bold text-white mb-6">Ready to Start a Project?</h3>
        <p className="text-slate-400 mb-8 max-w-lg mx-auto">Let's collaborate to build something extraordinary. My inbox is always open for new opportunities.</p>
        <a href="mailto:contact@nexus.dev" className="inline-block">
            <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-cyan-500 text-slate-900 font-bold rounded-full hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all"
            >
                Say Hello
            </motion.button>
        </a>
      </div>
    </Section>
  );
};

export default Testimonials;