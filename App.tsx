import React, { useEffect, useState } from 'react';
import Background3D from './components/Background3D';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial asset loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-slate-950 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin mx-auto mb-4" />
          <h2 className="text-cyan-400 font-display text-xl tracking-widest animate-pulse">INITIALIZING SYSTEM...</h2>
        </div>
      </div>
    );
  }

  return (
    <main className="relative bg-slate-950 min-h-screen text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-200">
      <Background3D />
      <Navbar />
      
      <div className="relative z-10">
        <Hero />
        <TechStack />
        <Experience />
        <Projects />
        <Testimonials />
        <Contact />
        
        {/* Footer */}
        <footer className="py-8 text-center text-slate-600 text-sm border-t border-slate-900 bg-slate-950 relative z-10">
          <p>© {new Date().getFullYear()} NEXUS. Built with React, Three.js & Tailwind.</p>
        </footer>
      </div>
    </main>
  );
};

export default App;