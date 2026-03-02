import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { Button } from './ui/Button';

const packages = [
  {
    name: "Express Wash",
    price: "$49",
    description: "A quick, thorough exterior clean to keep your car looking fresh.",
    features: ["Hand Wash & Dry", "Wheel Cleaning", "Tire Dressing", "Exterior Window Wipe"],
    popular: false,
  },
  {
    name: "The SHINE Signature",
    price: "$149",
    description: "Our most popular package. Complete interior and exterior detailing.",
    features: ["Everything in Express", "Interior Vacuum", "Dashboard & Console Wipe", "Leather Conditioning", "Spray Wax Application"],
    popular: true,
  },
  {
    name: "Ultimate Ceramic",
    price: "$399",
    description: "Long-lasting protection and an unbeatable mirror finish.",
    features: ["Everything in Signature", "Clay Bar Treatment", "Machine Polish", "1-Year Ceramic Coating", "Engine Bay Detail"],
    popular: false,
  }
];

export const Packages: React.FC = () => {
  return (
    <section id="packages" className="py-16 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Choose your Package</h2>
          <p className="text-white/60 max-w-2xl mx-auto">Select the perfect level of care for your vehicle. From a quick refresh to a complete transformation.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className={`relative p-8 rounded-3xl glass transition-all duration-300 box-glow-hover ${
                pkg.popular ? 'border-electric/50 box-glow' : 'border-white/10 hover:border-electric/50'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-electric text-obsidian px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-display font-bold mb-2">{pkg.name}</h3>
              <div className="text-4xl font-bold text-electric mb-4">{pkg.price}</div>
              <p className="text-white/60 text-sm mb-8 h-10">{pkg.description}</p>
              
              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-white/80">
                    <Check className="w-5 h-5 text-electric shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button variant={pkg.popular ? 'primary' : 'secondary'} className="w-full">
                Select Package
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
