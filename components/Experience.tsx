import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import Section from './ui/Section';
import { EXPERIENCE, EDUCATION } from '../constants';

const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Experience" subtitle="My Journey">
      <div className="grid md:grid-cols-2 gap-12 md:gap-24 relative">
        {/* Central Divider Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-900 to-transparent hidden md:block" />

        {/* Work Experience */}
        <div>
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/30">
              <Briefcase className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-2xl font-display font-bold">Work History</h3>
          </div>

          <div className="space-y-12">
            {EXPERIENCE.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative group pl-8 md:pl-0"
              >
                {/* Timeline Dot (Mobile) */}
                <div className="absolute left-0 top-2 w-3 h-3 bg-cyan-500 rounded-full md:hidden" />
                
                {/* Card Container with Animated Border */}
                <div className="relative rounded-2xl p-[1px] overflow-hidden" style={{height: 'fit-content'}}>
                  {/* Rotating Border Gradient */}
                  <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,#0f172a_0%,#06b6d4_50%,#0f172a_100%)] animate-spin-slow" />
                  
                  {/* Inner Content */}
                  <div className="relative h-full p-6 bg-slate-950 rounded-2xl backdrop-blur-sm">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {job.role}
                      </h4>
                      <span className="text-xs font-tech text-cyan-500 bg-cyan-500/10 px-2 py-1 rounded border border-cyan-500/20">
                        {job.period}
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm font-semibold mb-4">{job.company}</p>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                      {job.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map(skill => (
                        <span key={skill} className="text-xs text-slate-500 border border-slate-800 px-2 py-1 rounded hover:text-cyan-400 hover:border-cyan-500/30 transition-colors">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-12 md:mt-0">
          <div className="flex items-center gap-4 mb-12 md:flex-row-reverse md:text-right">
            <div className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/30">
              <GraduationCap className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-2xl font-display font-bold">Education</h3>
          </div>

          <div className="space-y-12">
            {EDUCATION.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative group pl-8 md:pl-0"
              >
                 {/* Timeline Dot (Mobile) */}
                 <div className="absolute left-0 top-2 w-3 h-3 bg-cyan-500 rounded-full md:hidden" />

                 {/* Card Container with Animated Border (Slightly different gradient for education) */}
                <div className="relative rounded-2xl p-[1px] overflow-hidden" style={{height: 'fit-content'}}>
                   <div className="absolute inset-0 bg-[conic-gradient(from_270deg_at_50%_50%,#0f172a_0%,#3b82f6_50%,#0f172a_100%)] animate-spin-slow" />

                  <div className="relative h-full p-6 bg-slate-950 rounded-2xl backdrop-blur-sm">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {edu.degree}
                      </h4>
                      <span className="text-xs font-tech text-cyan-500 bg-cyan-500/10 px-2 py-1 rounded border border-cyan-500/20">
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm font-semibold mb-2">{edu.institution}</p>
                    <p className="text-slate-500 text-sm">
                      {edu.details}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Experience;