import React from 'react';
import { motion } from 'motion/react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyles = "relative inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 rounded-full overflow-hidden";
  
  const variants = {
    primary: "bg-electric text-obsidian hover:bg-[#d4ed00] box-glow-hover box-glow",
    secondary: "bg-white/10 text-white hover:bg-white/20 backdrop-blur-md",
    outline: "border-2 border-electric text-electric hover:bg-electric/10"
  };

  return (
    <motion.button 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};
