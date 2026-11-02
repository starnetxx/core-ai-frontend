import React from 'react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "01",
      tag: "INGESTION",
      title: "Perceive",
      description: "Your existing VLM or detector feeds raw frame detections, crops, and language prompts directly into CORE.",
      metrics: "Zero Foundation Retraining",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    },
    {
      number: "02",
      tag: "STATE GRAPH",
      title: "Update World State",
      description: "CORE assigns stable UUIDs, builds and updates the relational scene graph, and tracks objects through occlusions and re-entries.",
      metrics: "Vector-Graph Persistence",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    },
    {
      number: "03",
      tag: "EXECUTION",
      title: "Reason and Act",
      description: "Downstream controllers and agents query a consistent, confidence-scored world model instead of hallucinating from scratch.",
      metrics: "Deterministic Control Signals",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v8l9-11h-7z" />
        </svg>
      )
    }
  ];

  return (
    <section id="how-it-works" className="py-24 md:py-36 bg-white px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-5 text-[11px] font-mono font-semibold uppercase tracking-[0.2em] bg-[#34A853]/10 text-[#1E8E3E] rounded-full border border-[#34A853]/20">
            <span>Pipeline Architecture</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-950">
            How It Works
          </h2>
          <p className="text-lg text-slate-600 mt-4 font-normal">
            Sits seamlessly between perception and action in three deterministic stages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Horizontal connection line (desktop only) */}
          <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-px bg-gradient-to-r from-slate-200 via-[#34A853]/40 to-slate-200 -translate-y-1/2 z-0"></div>

          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative z-10 bg-white rounded-[2rem] p-8 md:p-10 border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(52,168,83,0.08)] hover:border-[#34A853]/40 transition-all duration-500 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-center text-slate-700 group-hover:bg-[#34A853] group-hover:text-white group-hover:border-[#34A853] transition-all duration-300">
                    {step.icon}
                  </div>
                  <div className="text-right">
                    <span className="block text-[10px] font-mono uppercase tracking-widest text-slate-400">{step.tag}</span>
                    <span className="font-mono text-2xl font-bold text-slate-300 group-hover:text-[#34A853] transition-colors">{step.number}</span>
                  </div>
                </div>

                <h3 className="font-display text-2xl font-bold text-slate-950 mb-4 group-hover:text-[#1E8E3E] transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed font-normal mb-8">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-mono font-medium text-slate-500">{step.metrics}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
