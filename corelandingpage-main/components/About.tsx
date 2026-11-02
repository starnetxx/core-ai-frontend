import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 bg-slate-50 border-y border-slate-200/70">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-200/80 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200">
              <div className="w-1.5 h-1.5 bg-[#34A853] rounded-full animate-pulse"></div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-slate-600">
                Technical Specification
              </span>
            </div>
            <h4 className="font-display text-xl md:text-2xl font-bold text-slate-950 mb-3 tracking-tight">
              CORE — Cognitive Objects Representation Engine
            </h4>
            <p className="text-base text-slate-600 leading-relaxed font-normal">
              An object memory middleware for AI, enabling persistent object identity, self-aware reliability scoring, and compositional understanding across long-horizon interactions in robotics and spatial computing. CORE utilizes a latency-optimized vector graph architecture to maintain object states across sensor modalities.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 w-full md:w-auto flex-shrink-0 font-mono text-xs">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
              <div className="text-slate-400 text-[10px] uppercase">GRAPH LATENCY</div>
              <div className="text-slate-900 font-bold text-base mt-1">&lt; 4.2 ms</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
              <div className="text-slate-400 text-[10px] uppercase">MEMORY STATE</div>
              <div className="text-slate-900 font-bold text-base mt-1">Vector-DAG</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
              <div className="text-slate-400 text-[10px] uppercase">INTEGRATION</div>
              <div className="text-slate-900 font-bold text-base mt-1">REST / ROS 2</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
              <div className="text-slate-400 text-[10px] uppercase">ATTRIBUTION</div>
              <div className="text-[#1E8E3E] font-bold text-base mt-1">3-Modality</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
