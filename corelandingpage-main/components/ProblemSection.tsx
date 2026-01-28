
import React from 'react';

export const ProblemSection: React.FC = () => {
  return (
    <section className="py-20 md:py-40 bg-gradient-to-br from-[#1E8E3E] to-[#34A853] text-white px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight px-2 flex flex-col items-center gap-4 md:gap-6">
          <p className="opacity-80 md:whitespace-nowrap">
            Your models currently encode → answer → forget.
          </p>
          <p className="md:whitespace-nowrap">
            CORE lets them perceive → update world → reason.
          </p>
        </div>
      </div>
      
      {/* Texture overlay for depth */}
      <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>
    </section>
  );
};
