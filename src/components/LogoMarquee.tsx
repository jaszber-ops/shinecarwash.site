import React from 'react';

const logos = [
  "HubSpot", "Square", "Stripe", "Shopify", "Tesla", "Porsche", "BMW", "Audi"
];

export const LogoMarquee: React.FC = () => {
  return (
    <section className="py-12 border-y border-white/5 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <p className="text-sm font-medium text-white/40 uppercase tracking-widest">Trusted by premium brands and partners</p>
      </div>
      
      <div className="marquee">
        <div className="marquee-content">
          {logos.map((logo, i) => (
            <div 
              key={i} 
              className="flex items-center justify-center px-8 py-4 text-2xl font-display font-bold text-white/20 hover:text-electric hover:text-glow transition-all duration-300 cursor-pointer"
            >
              {logo}
            </div>
          ))}
        </div>
        <div className="marquee-content" aria-hidden="true">
          {logos.map((logo, i) => (
            <div 
              key={`dup-${i}`} 
              className="flex items-center justify-center px-8 py-4 text-2xl font-display font-bold text-white/20 hover:text-electric hover:text-glow transition-all duration-300 cursor-pointer"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
