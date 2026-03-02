import React from 'react';

export const Location: React.FC = () => {
  return (
    <section id="location" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Find Us</h2>
          <p className="text-white/60 max-w-2xl mx-auto">Visit our premium detailing center in Brentwood, California.</p>
        </div>
        
        <div className="relative w-full h-[500px] rounded-3xl overflow-hidden bg-[#1a2332]">
          {/* Map Background Embed */}
          <div className="absolute inset-0">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.225577002028!2d-121.7348984!3d37.9485642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085570000000000%3A0x0!2s6945%20Lone%20Tree%20Wy%2C%20Brentwood%2C%20CA%2094513!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(85%)', backgroundColor: '#ffffff' }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="SHINE Car Wash Location"
            ></iframe>
          </div>

          {/* Center Marker Overlay */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none">
            {/* Tooltip */}
            <div className="bg-obsidian border-2 border-[#ff4d6d] rounded-xl p-4 mb-2 shadow-2xl relative min-w-[260px]">
              <div className="flex justify-between items-start gap-4 mb-1">
                <span className="font-bold text-white text-lg">SHINE Car Wash</span>
              </div>
              <div className="text-white/80 text-sm">
                6945 Lone Tree Wy<br/>Brentwood, CA 94513
              </div>
              {/* Tooltip Arrow */}
              <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-4 h-4 bg-obsidian border-b-2 border-r-2 border-[#ff4d6d] rotate-45"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
