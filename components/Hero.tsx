import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Disc } from 'lucide-react';
import Button from './ui/Button';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        
        {/* Left Content (Text) */}
        <div className="md:col-span-2 text-center md:text-left order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-slate-800/50 border border-slate-700 text-cyan-400 font-tech text-sm tracking-wider mb-6 backdrop-blur-sm">
              AVAILABLE FOR HIRE
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tight mb-6"
          >
            BUILDING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-x">
              DIGITAL REALITIES
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-slate-400 text-lg md:text-xl max-w-2xl md:mx-0 mx-auto mb-10 font-sans font-light leading-relaxed"
          >
            I am a Senior Frontend Engineer specialized in building high-performance 3D web applications, scalable architectures, and immersive user experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-6"
          >
            <Button variant="primary" icon={<ArrowRight size={18} />}>
              Explore My Work
            </Button>
            <Button variant="outline" icon={<Download size={18} />}>
              Download CV
            </Button>
          </motion.div>
        </div>

        {/* Right Content (Photo) */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="order-1 md:order-2 flex justify-center relative"
        >
          {/* 3D Photo Container */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 group shrink-0 aspect-square">
            
            {/* Spinning Outer Ring */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-500/30 animate-[spin_10s_linear_infinite]" />
            <div className="absolute -inset-4 rounded-full border border-slate-700 animate-[spin_15s_linear_infinite_reverse]" />
            
            {/* Orbiting Disc Element */}
            <div className="absolute -inset-12 animate-[spin_8s_linear_infinite] pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-slate-950 border border-cyan-500/50 rounded-full p-2 shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                        <Disc className="w-6 h-6 text-cyan-400 animate-spin-slow" />
                    </div>
                </div>
            </div>
            
            {/* Glowing Pulse Behind */}
            <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-2xl animate-pulse" />

            {/* Hexagon Clip Path Image */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-slate-900 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 z-10 mix-blend-overlay" />
              <img 
                src="https://picsum.photos/400/400" 
                alt="Profile" 
                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700 grayscale group-hover:grayscale-0"
              />
            </div>

            {/* Tech Decoration Elements */}
            <div className="absolute -bottom-6 -right-6 bg-slate-900 p-4 rounded-2xl border border-slate-800 shadow-xl flex items-center gap-3 animate-bounce-slow z-20">
               <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
               <span className="text-xs font-tech text-white">SYSTEM ONLINE</span>
            </div>

          </div>
        </motion.div>
      </div>

      {/* Decorative Grid Floor */}
      <div className="absolute bottom-0 left-0 w-full h-[30vh] bg-gradient-to-t from-slate-950 to-transparent z-20 pointer-events-none" />
    </section>
  );
};

export default Hero;