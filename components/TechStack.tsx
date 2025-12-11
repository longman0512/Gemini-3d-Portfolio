import React from 'react';
import { motion } from 'framer-motion';
import Section from './ui/Section';
import { TECH_STACK } from '../constants';
import { LucideIcon } from 'lucide-react';

const TechStack: React.FC = () => {
  // Container variant to handle staggering of children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Sequential delay between each item
      },
    },
  };

  // Item variant for 3D flip effect
  const itemVariants = {
    hidden: { 
      opacity: 0, 
      rotateX: -90, 
      y: 50 
    },
    visible: { 
      opacity: 1, 
      rotateX: 0, 
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12
      }
    },
  };

  return (
    <Section id="tech" title="Technologies" subtitle="My Arsenal" className="bg-slate-950/50">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 perspective-1000"
      >
        {TECH_STACK.map((tech) => {
            const Icon = tech.icon as LucideIcon;
            return (
                <motion.div
                    key={tech.name}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.05, 
                      rotateY: 15,
                      transition: { duration: 0.3 }
                    }}
                    className="group relative h-40 bg-slate-900/40 border border-slate-800 rounded-xl flex flex-col items-center justify-center gap-4 cursor-pointer hover:border-cyan-500/50 hover:bg-slate-900/80 transition-colors preserve-3d shadow-lg"
                >
                    {/* Hover Glow Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="p-4 bg-slate-800 rounded-full group-hover:bg-cyan-500/20 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300 relative z-10 transform-style-3d group-hover:translate-z-10">
                        <Icon className="w-8 h-8 text-slate-300 group-hover:text-cyan-400 transition-colors" />
                    </div>
                    
                    <div className="text-center z-10 transform-style-3d group-hover:translate-z-5">
                        <h4 className="font-bold text-white group-hover:text-cyan-400 transition-colors">{tech.name}</h4>
                        <span className="text-xs text-slate-500 uppercase tracking-wider block mt-1">{tech.category}</span>
                    </div>
                </motion.div>
            );
        })}
      </motion.div>
    </Section>
  );
};

export default TechStack;