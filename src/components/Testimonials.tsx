import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "James Wilson",
    role: "Porsche 911 Owner",
    content: "Absolutely incredible service. They brought my 911 back to life. The ceramic coating is flawless.",
    rating: 5
  },
  {
    name: "Sarah Jenkins",
    role: "Tesla Model S Owner",
    content: "The attention to detail is unmatched. I've tried many detailing services, but SHINE is on another level.",
    rating: 5
  },
  {
    name: "Michael Chang",
    role: "BMW M4 Owner",
    content: "Professional, punctual, and perfectionists. The interior smells brand new and the exterior is like glass.",
    rating: 5
  },
  {
    name: "Elena Rodriguez",
    role: "Audi RS6 Owner",
    content: "I was hesitant about the price, but the Signature package is worth every penny. My car looks better than when I bought it.",
    rating: 5
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Client Stories</h2>
          <p className="text-white/60 max-w-2xl mx-auto">Don't just take our word for it. Hear from our satisfied clients.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="glass p-8 rounded-3xl hover:border-electric/30 transition-colors duration-300">
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-electric text-electric" />
                ))}
              </div>
              <p className="text-lg text-white/90 mb-8 font-light leading-relaxed">"{t.content}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center font-display font-bold text-xl">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold">{t.name}</div>
                  <div className="text-sm text-white/50">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
