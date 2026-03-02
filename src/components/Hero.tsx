import React from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/Button';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* Background gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1.5 px-4 rounded-full glass text-electric text-xs font-bold tracking-widest uppercase mb-8">
            Premium Auto Detailing
          </span>
          
          <h1 className="text-6xl md:text-8xl lg:text-[100px] font-display font-bold tracking-tighter mb-8 leading-[1]">
            The ultimate <br className="hidden md:block" />
            <span className="relative inline-block mt-2">
              clean for your car.
              <svg className="absolute w-full h-6 -bottom-2 left-0 text-electric" viewBox="0 0 200 20" preserveAspectRatio="none">
                <path d="M0,10 Q50,20 100,10 T200,10" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Experience the luxury of a showroom finish. Our premium detailing services bring back the shine you fell in love with.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" className="w-full sm:w-auto group text-lg px-10 py-4">
              Book Your Wash
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="secondary" className="w-full sm:w-auto text-lg px-10 py-4">
              View Packages
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
