import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  icon, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "relative px-8 py-3 font-tech font-bold uppercase tracking-wider text-sm transition-all duration-300 overflow-hidden group flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-cyan-500/10 text-cyan-400 border border-cyan-500/50 hover:bg-cyan-500 hover:text-slate-950 hover:shadow-[0_0_20px_rgba(6,182,212,0.6)]",
    secondary: "bg-slate-800 text-white border border-slate-700 hover:border-white hover:bg-slate-700",
    outline: "bg-transparent text-slate-300 border border-slate-700 hover:border-cyan-400 hover:text-cyan-400"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && <span className="group-hover:translate-x-1 transition-transform">{icon}</span>}
      </span>
      {/* Glare effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </motion.button>
  );
};

export default Button;