import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Hexagon } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Unified Scroll Handler for Background and Scroll Spy
  useEffect(() => {
    const handleScroll = () => {
      // 1. Handle Background
      setIsScrolled(window.scrollY > 50);

      // 2. Handle Scroll Spy
      // Add a generous offset (e.g., 30% of viewport) to trigger the active state 
      // before the section hits the very top, but not too early.
      const scrollPosition = window.scrollY + window.innerHeight * 0.3;

      // Find the current section
      for (const link of NAV_LINKS) {
        const sectionId = link.href.substring(1);
        const element = document.getElementById(sectionId);
        
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break; // Stop checking once we find the match
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on mount to set initial active state
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      // Offset for sticky header
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 group cursor-pointer" onClick={(e) => { e.preventDefault(); scrollToSection('#hero'); }}>
          <Hexagon className="w-8 h-8 text-cyan-400 fill-cyan-400/20 group-hover:rotate-180 transition-transform duration-500" />
          <span className="font-display font-bold text-2xl tracking-wide text-white">Theresia C.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2 bg-slate-900/50 p-1.5 rounded-full border border-slate-800/50 backdrop-blur-sm shadow-lg shadow-black/20">
          {NAV_LINKS.map((link) => {
             const sectionId = link.href.substring(1);
             const isActive = activeSection === sectionId;
             
             return (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`relative px-5 py-2 rounded-full text-sm font-tech uppercase tracking-wider transition-colors duration-300 ${
                  isActive ? 'text-slate-950 font-bold z-10' : 'text-slate-400 hover:text-white z-10'
                }`}
              >
                {/* Sliding Background Pill */}
                {isActive && (
                  <motion.span
                    layoutId="activeTab"
                    className="absolute inset-0 bg-cyan-400 rounded-full -z-10 shadow-[0_0_20px_rgba(34,211,238,0.5)]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {link.name}
              </button>
            );
          })}
        </div>

        <div className="hidden md:block">
          {/* Hire Me Pulsing Button */}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              scale: [1, 1.05, 1],
              boxShadow: [
                "0 0 0px rgba(6,182,212,0)",
                "0 0 25px rgba(6,182,212,0.6)",
                "0 0 0px rgba(6,182,212,0)"
              ],
              borderColor: [
                "rgba(6,182,212,0.5)",
                "rgba(6,182,212,1)",
                "rgba(6,182,212,0.5)"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="px-6 py-2.5 rounded-full border border-cyan-500 bg-cyan-500/10 text-cyan-400 font-tech text-sm uppercase font-bold hover:bg-cyan-500 hover:text-slate-900 transition-colors duration-300"
          >
            Hire Me
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-950 border-b border-slate-800 overflow-hidden absolute top-full left-0 right-0 shadow-2xl"
          >
            <div className="flex flex-col p-6 gap-4">
              {NAV_LINKS.map((link) => {
                 const sectionId = link.href.substring(1);
                 const isActive = activeSection === sectionId;
                 return (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className={`text-left font-tech text-lg transition-colors ${
                      isActive ? 'text-cyan-400 font-bold pl-2 border-l-2 border-cyan-400' : 'text-slate-300'
                    }`}
                  >
                    {link.name}
                  </button>
                );
              })}
              <button className="mt-2 w-full py-3 rounded-lg bg-cyan-500 text-slate-900 font-bold uppercase font-tech shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;