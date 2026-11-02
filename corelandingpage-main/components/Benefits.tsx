import React from 'react';

const BenefitCard: React.FC<{ index: string; title: string; icon: React.ReactNode }> = ({ index, title, icon }) => (
  <div className="p-7 md:p-8 bg-white border border-slate-200/80 rounded-[1.75rem] shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(52,168,83,0.08)] hover:border-[#34A853]/40 transition-all duration-300 group flex flex-col justify-between">
    <div className="flex items-center justify-between mb-6">
      <div className="w-12 h-12 flex items-center justify-center bg-slate-50 border border-slate-200/70 rounded-2xl text-slate-600 group-hover:bg-[#34A853] group-hover:text-white group-hover:border-[#34A853] transition-all duration-300">
        {icon}
      </div>
      <span className="font-mono text-xs font-semibold text-slate-300 group-hover:text-[#34A853] transition-colors">
        {index}
      </span>
    </div>
    <h3 className="text-base md:text-lg font-semibold text-slate-900 leading-snug group-hover:text-slate-950 transition-colors">
      {title}
    </h3>
  </div>
);

export const Benefits: React.FC = () => {
  const items = [
    {
      title: "Persistent object IDs that survive heavy occlusion and sensor gaps",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
      ),
    },
    {
      title: "Stable compositional scene graphs (cup on book, person holding tool)",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
      ),
    },
    {
      title: "Long-horizon memory for video streams",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 22h14"/><path d="M5 2h14"/><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"/><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"/></svg>
      ),
    },
    {
      title: "Zero retraining, drop in middleware",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/></svg>
      ),
    },
    {
      title: "Real-time on edge devices (designed for robots and AR)",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
      ),
    },
    {
      title: "Self-aware reliability scoring that degrades gracefully under occlusion and poor lighting",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
      ),
    },
    {
      title: "Cascade risk alerts before objects disappear, not after",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
      ),
    },
    {
      title: "Full modality attribution for every tracking decision, see exactly why the system chose what it chose",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/><path d="M11 8v6"/><path d="M8 11h6"/></svg>
      ),
    },
    {
      title: "Topological weather metrics that contextualize confidence in unstable scenes",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
      ),
    },
    {
      title: "Proof buffer that accumulates hard cases for continuous improvement",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
      ),
    },
  ];

  return (
    <section id="benefits" className="py-24 md:py-36 bg-slate-50/70 bg-grid-light px-4 sm:px-6 border-b border-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-5 text-[11px] font-mono font-semibold uppercase tracking-[0.2em] bg-white text-slate-700 rounded-full border border-slate-200/80 shadow-sm">
            <span>Production Deliverables</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-950">
            What Teams <span className="text-[#1E8E3E]">Actually Get</span>
          </h2>
          <p className="text-lg text-slate-600 mt-4">
            Ten core primitives engineered for deterministic spatial perception.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {items.map((item, idx) => (
            <BenefitCard
              key={idx}
              index={String(idx + 1).padStart(2, '0')}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
