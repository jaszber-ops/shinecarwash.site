import React, { useState, useRef, useEffect } from 'react';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    
    const containerRect = containerRef.current.getBoundingClientRect();
    const x = clientX - containerRect.left;
    const percentage = Math.max(0, Math.min(100, (x / containerRect.width) * 100));
    setSliderPosition(percentage);
  };

  const onMouseMove = (event: MouseEvent) => {
    if (!isDragging) return;
    handleMove(event.clientX);
  };

  const onTouchMove = (event: TouchEvent) => {
    if (!isDragging) return;
    handleMove(event.touches[0].clientX);
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', stopDragging);
      window.addEventListener('touchmove', onTouchMove);
      window.addEventListener('touchend', stopDragging);
    } else {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', stopDragging);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', stopDragging);
    }

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', stopDragging);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', stopDragging);
    };
  }, [isDragging]);

  return (
    <section id="services" className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">The SHINE Difference</h2>
          <p className="text-white/60 max-w-2xl mx-auto">See the transformation. Slide to compare an ordinary wash with the SHINE premium detailing experience.</p>
        </div>
        
        <div 
          ref={containerRef}
          className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden cursor-ew-resize select-none border border-white/10"
          onMouseDown={(e) => {
            setIsDragging(true);
            handleMove(e.clientX);
          }}
          onTouchStart={(e) => {
            setIsDragging(true);
            handleMove(e.touches[0].clientX);
          }}
        >
          {/* After Image (Clean - SHINE) */}
          <div className="absolute inset-0 w-full h-full">
            <img 
              src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=2000" 
              alt="Clean Car" 
              className="w-full h-full object-cover"
              draggable="false"
            />
            <div className="absolute top-6 right-6 bg-electric text-obsidian px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
              SHINE
            </div>
          </div>

          {/* Before Image (Dirty - Other) */}
          <div 
            className="absolute inset-0 w-full h-full"
            style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
          >
            <img 
              src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=2000" 
              alt="Dirty Car" 
              className="w-full h-full object-cover sepia-[.3] contrast-[.8] brightness-[.7]"
              draggable="false"
            />
            <div className="absolute top-6 left-6 bg-obsidian/80 text-white px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider backdrop-blur-sm border border-white/10">
              Other Wash
            </div>
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-electric cursor-ew-resize shadow-[0_0_10px_rgba(229,255,0,0.5)]"
            style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-electric rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(229,255,0,0.6)]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#050505" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l-6-6 6-6" />
                <path d="M15 18l6-6-6-6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
