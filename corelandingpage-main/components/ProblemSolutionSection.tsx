import React from 'react';

export const ProblemSolutionSection: React.FC = () => {
  return (
    <section className="py-24 md:py-36 bg-white bg-grid-light px-4 sm:px-6 relative overflow-hidden border-b border-slate-100">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-5 text-[11px] font-mono font-semibold uppercase tracking-[0.2em] bg-slate-100 text-slate-700 rounded-full border border-slate-200/80">
            <span>The Paradigm Shift</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-950 leading-[1.12]">
            A stateful memory layer for <span className="text-[#1E8E3E]">vision models</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {/* The Problem */}
          <div className="bg-slate-50/90 backdrop-blur-sm p-8 sm:p-10 md:p-12 rounded-[2rem] border border-slate-200/80 flex flex-col justify-between relative overflow-hidden group hover:border-red-200 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-red-500/10 text-red-600 border border-red-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                  Stateless Vision
                </span>
                <div className="w-11 h-11 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center border border-red-100">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
              </div>
              
              <h3 className="font-display text-2xl md:text-3xl font-bold text-slate-950 mb-5">The Problem</h3>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-normal mb-8">
                Modern VLMs are powerful but stateless. They treat every frame as new. Objects disappear behind occlusions. Scene graphs collapse. Long-horizon tasks fail without warning.
              </p>

              {/* Visual Pipeline Breakdown */}
              <div className="grid grid-cols-3 gap-2 mb-8 font-mono text-xs">
                <div className="p-3 rounded-xl bg-white border border-slate-200/80 text-center">
                  <div className="text-slate-400 text-[10px] mb-1">FRAME t₀</div>
                  <div className="text-slate-700 font-semibold">Encode</div>
                </div>
                <div className="p-3 rounded-xl bg-white border border-slate-200/80 text-center">
                  <div className="text-slate-400 text-[10px] mb-1">OCCLUSION</div>
                  <div className="text-amber-600 font-semibold">Context Lost</div>
                </div>
                <div className="p-3 rounded-xl bg-red-50/70 border border-red-200 text-center">
                  <div className="text-red-400 text-[10px] mb-1">FRAME t₁</div>
                  <div className="text-red-600 font-semibold">Silent Failure</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-5 md:p-6 rounded-2xl border border-slate-200/80 shadow-sm">
              <p className="text-slate-700 text-sm md:text-base font-medium leading-relaxed">
                <span className="font-mono font-bold text-red-600 uppercase tracking-wider text-xs mr-2">Impact:</span>
                Robots drop tools, AR overlays drift, surveillance systems lose continuity.
              </p>
            </div>
          </div>

          {/* CORE Solves It */}
          <div className="bg-slate-950 text-white p-8 sm:p-10 md:p-12 rounded-[2rem] shadow-2xl shadow-slate-900/15 border border-slate-800 flex flex-col justify-between relative overflow-hidden">
            {/* Ambient Glow */}
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#34A853]/20 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-[#34A853]/15 text-[#34A853] border border-[#34A853]/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#34A853] animate-pulse"></span>
                  Stateful World Model
                </span>
                <div className="w-11 h-11 bg-[#34A853]/15 text-[#34A853] rounded-2xl flex items-center justify-center border border-[#34A853]/30">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>

              <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-6">CORE Solves It</h3>
              
              <div className="space-y-4 mb-8">
                {[
                  {
                    title: "Persistent Identity",
                    desc: "Stable UUIDs across heavy occlusion, motion blur, and camera handoffs."
                  },
                  {
                    title: "Compositional Scene Graphs",
                    desc: "Continuous relational tracking (e.g., cup on book, operator holding wrench)."
                  },
                  {
                    title: "Stateful Memory & Self-Aware Reliability",
                    desc: "Real-time confidence telemetry, heat capacity, and cascade risk alerts."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#34A853]/20 text-[#34A853] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-white text-base">{item.title}</div>
                      <div className="text-slate-400 text-sm mt-0.5 leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 bg-[#34A853]/10 p-5 md:p-6 rounded-2xl border border-[#34A853]/25">
              <p className="text-emerald-100 text-sm md:text-base font-medium leading-relaxed">
                <span className="font-mono font-bold text-[#34A853] uppercase tracking-wider text-xs mr-2">Architecture:</span>
                All in a lightweight vector-graph layer that runs at edge speed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
