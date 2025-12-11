import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}

const Section: React.FC<SectionProps> = ({ id, className = '', children, title, subtitle }) => {
  return (
    <section id={id} className={`min-h-screen py-24 px-6 md:px-12 relative z-10 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            {subtitle && (
              <span className="text-cyan-400 font-tech tracking-[0.2em] uppercase text-sm mb-2 block">
                {subtitle}
              </span>
            )}
            {title && (
              <h2 className="text-4xl md:text-6xl font-display font-bold text-white relative inline-block">
                {title}
                <motion.span 
                  className="absolute -bottom-2 left-0 w-full h-1 bg-cyan-500 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              </h2>
            )}
          </motion.div>
        )}
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default Section;