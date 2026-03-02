import React from 'react';
import { Twitter, Instagram, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="about" className="py-12 px-6 border-t border-white/5 bg-obsidian">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center relative mb-6 w-fit" style={{ transform: 'skewX(-10deg)' }}>
            <span className="font-display font-black italic text-electric text-3xl tracking-tighter">
              SHINE
            </span>
            <svg className="absolute -top-2 -right-3 w-6 h-6 text-electric fill-electric" viewBox="0 0 24 24">
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>
          </div>
          <p className="text-white/60 max-w-sm mb-8">
            Premium auto detailing for those who demand perfection. We bring the showroom finish to your driveway.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/60 hover:text-electric hover:border-electric/50 transition-all">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/60 hover:text-electric hover:border-electric/50 transition-all">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/60 hover:text-electric hover:border-electric/50 transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold mb-6">Services</h4>
          <ul className="space-y-4 text-white/60">
            <li><a href="#" className="hover:text-electric transition-colors">Express Wash</a></li>
            <li><a href="#" className="hover:text-electric transition-colors">Signature Detail</a></li>
            <li><a href="#" className="hover:text-electric transition-colors">Ceramic Coating</a></li>
            <li><a href="#" className="hover:text-electric transition-colors">Paint Correction</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Company</h4>
          <ul className="space-y-4 text-white/60">
            <li><a href="#" className="hover:text-electric transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-electric transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-electric transition-colors">Contact</a></li>
            <li><a href="#" className="hover:text-electric transition-colors">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 text-center text-white/40 text-sm">
        <p>&copy; {new Date().getFullYear()} SHINE Premium Auto Detailing. All rights reserved.</p>
      </div>
    </footer>
  );
};
