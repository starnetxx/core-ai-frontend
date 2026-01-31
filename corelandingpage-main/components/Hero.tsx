
import React from 'react';

interface HeroProps {
  onTryDemo: () => void;
  onPricingClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onTryDemo, onPricingClick }) => {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.ibb.co/LDKxjbVM/Gemini-Generated-Image-nxjjbxnxjjbxnxjj.png" 
          alt="CORE Cognitive Background" 
          className="w-full h-full object-cover object-center transform scale-105"
          loading="eager"
        />
        <div className="absolute inset-0 bg-slate-900/60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-transparent to-slate-900/90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(15,23,42,0.6)_100%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto text-center animate-fade-in-up relative z-10 py-20">
        <div className="inline-block px-4 py-1.5 mb-6 md:mb-8 text-[9px] md:text-[10px] font-bold tracking-[0.25em] uppercase bg-white/10 backdrop-blur-md text-white/90 rounded-full border border-white/20 shadow-2xl">
          Cognitive Object Representation Engine
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white mb-6 md:mb-8 leading-[1.1] md:leading-[1] drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] px-2 max-w-6xl mx-auto">
          AI that <br className="hidden md:block" />
          understands <br className="hidden md:block" />
          and remembers <br className="hidden md:block" />
          the world.
        </h1>
        
        <p className="text-base sm:text-lg md:text-2xl text-white/90 mb-8 md:mb-12 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-lg px-4">
          CORE helps AI keep track of what it has seen before. <br className="hidden sm:block" />
          Giving machines the continuity they need to understand reality.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 relative z-10 px-4">
          <button 
            onClick={onTryDemo}
            className="w-full sm:w-auto bg-[#34A853] text-white px-8 md:px-10 py-4 md:py-5 rounded-full text-base md:text-lg font-bold hover:bg-[#1E8E3E] hover:scale-105 transition-all shadow-2xl shadow-[#34A853]/40 active:scale-95"
          >
            Try Demo
          </button>
          <button 
            onClick={onPricingClick}
            className="w-full sm:w-auto bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 md:px-10 py-4 md:py-5 rounded-full text-base md:text-lg font-medium hover:bg-white/20 hover:scale-105 transition-all active:scale-95"
          >
            Pricing
          </button>
        </div>
      </div>
    </section>
  );
};
