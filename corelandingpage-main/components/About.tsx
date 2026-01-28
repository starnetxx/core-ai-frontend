
import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-50 px-6 border-y border-slate-100">
      <div className="max-w-3xl mx-auto text-center md:text-left">
        <div className="mb-6 inline-flex items-center gap-2">
          <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse"></div>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Technical Overview</span>
        </div>
        <h4 className="text-lg font-bold text-slate-900 mb-4 tracking-tight">CORE — Cognitive Objects Representation Engine</h4>
        <p className="text-sm text-slate-500 leading-relaxed font-normal">
          An object memory middleware for AI, enabling persistent object identity and compositional 
          understanding across long-horizon interactions in robotics and spatial computing. CORE 
          utilizes a latency-optimized vector graph architecture to maintain object states across 
          various sensor modalities.
        </p>
      </div>
    </section>
  );
};
