import React from 'react';
import { Button } from './ui/Button';

interface HeaderProps {
  onLoginClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onLoginClick }) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 glass border-b-0 border-white/5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center relative cursor-pointer" onClick={(e) => handleScroll(e as any, 'top')} style={{ transform: 'skewX(-10deg)' }}>
          <span className="font-display font-black italic text-electric text-3xl tracking-tighter">
            SHINE
          </span>
          <svg className="absolute -top-2 -right-3 w-6 h-6 text-electric fill-electric" viewBox="0 0 24 24">
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
          </svg>
        </div>

        {/* Centered Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {['Location', 'Packages', 'Testimonials', 'About'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              onClick={(e) => handleScroll(e, item.toLowerCase())}
              className="text-sm font-medium text-white/70 hover:text-electric transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-8">
          <button onClick={onLoginClick} className="hidden md:block text-sm font-medium text-white/70 hover:text-white transition-colors">
            Log in
          </button>
          <Button variant="primary" className="px-6 py-2.5 text-sm" onClick={() => {
            document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            Book Now
          </Button>
        </div>
      </div>
    </header>
  );
};
