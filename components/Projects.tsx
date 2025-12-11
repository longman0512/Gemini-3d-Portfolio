import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';
import Section from './ui/Section';
import { PROJECTS } from '../constants';
import Button from './ui/Button';
import { Project } from '../types';

const ProjectCard: React.FC<{ project: Project; index: number; onSelect: (p: Project) => void }> = ({ project, index, onSelect }) => {
  const ref = useRef<HTMLDivElement>(null);

  // Mouse position state for spotlight
  const [hovered, setHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 3D Tilt Values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring animation for tilt
  const rotateX = useSpring(useMotionValue(0), { stiffness: 150, damping: 15 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate relative mouse position
    const mouseClickX = e.clientX - rect.left;
    const mouseClickY = e.clientY - rect.top;

    // Update spotlight position
    mouseX.set(mouseClickX);
    mouseY.set(mouseClickY);

    // Calculate rotation (max 15 degrees)
    const xPct = mouseClickX / width - 0.5;
    const yPct = mouseClickY / height - 0.5;
    
    rotateX.set(yPct * -15); // Invert Y for correct tilt direction
    rotateY.set(xPct * 15);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="perspective-1000"
    >
      <motion.div
        ref={ref}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        onClick={() => onSelect(project)}
        className="group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden cursor-pointer shadow-xl"
      >
        {/* Spotlight Effect */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                650px circle at ${mouseX}px ${mouseY}px,
                rgba(6, 182, 212, 0.15),
                transparent 80%
              )
            `,
          }}
        />

        <div className="relative h-64 overflow-hidden transform-style-3d">
          <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10" />
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity translate-z-20">
              <span className="bg-slate-950/80 backdrop-blur text-cyan-400 p-2 rounded-full border border-cyan-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                  <ExternalLink size={16} />
              </span>
          </div>
        </div>
        
        <div className="p-6 relative z-20 bg-slate-900/90 backdrop-blur-sm transform-style-3d">
          <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors translate-z-10">
            {project.title}
          </h3>
          <p className="text-slate-400 text-sm line-clamp-2 mb-4 translate-z-5">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 translate-z-5">
            {project.tags.slice(0, 3).map(tag => (
              <span key={tag} className="text-xs font-tech bg-slate-800 text-slate-300 px-2 py-1 rounded border border-slate-700">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <Section id="projects" title="Featured Work" subtitle="Portfolio">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {PROJECTS.map((project, index) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            index={index} 
            onSelect={setSelectedProject} 
          />
        ))}
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, rotateX: 20 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              exit={{ scale: 0.9, opacity: 0, rotateX: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-900 border border-slate-700 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-[0_0_50px_rgba(0,0,0,0.5)] relative flex flex-col"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-50 p-2 bg-slate-800/80 backdrop-blur rounded-full hover:bg-slate-700 hover:text-cyan-400 transition-colors border border-slate-700"
              >
                <X size={20} />
              </button>

              <div className="h-64 md:h-96 w-full shrink-0 overflow-hidden relative group">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />
                <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-10">
                  <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-2 drop-shadow-lg">
                    {selectedProject.title}
                  </h2>
                </div>
              </div>

              <div className="p-6 md:p-10 bg-slate-900 grow">
                <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded-full text-sm font-tech shadow-[0_0_10px_rgba(6,182,212,0.2)]">
                            {tag}
                        </span>
                    ))}
                </div>
                
                <p className="text-slate-300 text-lg leading-relaxed mb-8">
                    {selectedProject.description}
                    <br /><br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <div className="flex gap-4">
                    <Button variant="primary" icon={<ExternalLink size={18} />}>
                        Live Demo
                    </Button>
                    <Button variant="secondary" icon={<Github size={18} />}>
                        View Code
                    </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default Projects;