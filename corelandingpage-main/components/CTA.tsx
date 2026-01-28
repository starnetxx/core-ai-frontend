
import React from 'react';

interface CTAProps {
  onTryDemo: () => void;
}

export const CTA: React.FC<CTAProps> = ({ onTryDemo }) => {
  return (
    <section className="py-32 md:py-48 px-6 bg-white overflow-hidden relative">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6">
          Augment Your Model with a <span className="text-[#1E8E3E]">World</span>.
        </h2>
        <p className="text-lg md:text-xl text-slate-500 font-light leading-relaxed mb-12 max-w-2xl mx-auto">
          CORE integrates alongside your existing stack. <br className="hidden sm:block" />
          No retraining. No foundation model replacement.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={onTryDemo}
            className="w-full sm:w-auto bg-[#34A853] text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-[#1E8E3E] transition-all shadow-xl shadow-[#34A853]/30 active:scale-95"
          >
            Try Demo
          </button>
          <button className="w-full sm:w-auto bg-white text-slate-600 border border-slate-200 px-10 py-5 rounded-full text-lg font-medium hover:bg-slate-50 transition-all active:scale-95">
            Contact us
          </button>
        </div>
      </div>
      
      {/* Brand-consistent abstract shapes using new green palette */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.05]">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <circle cx="50" cy="50" r="40" stroke="#1E8E3E" strokeWidth="0.1" fill="none" />
          <circle cx="50" cy="50" r="30" stroke="#34A853" strokeWidth="0.1" fill="none" />
          <circle cx="50" cy="50" r="20" stroke="#1E8E3E" strokeWidth="0.1" fill="none" />
        </svg>
      </div>
      
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-full h-64 bg-gradient-to-t from-[#34A853]/10 to-transparent blur-[100px] pointer-events-none"></div>
    </section>
  );
};
