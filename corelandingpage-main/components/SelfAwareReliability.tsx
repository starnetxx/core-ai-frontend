import React from 'react';

export const SelfAwareReliability: React.FC = () => {
  return (
    <section id="reliability" className="py-24 md:py-36 bg-slate-950 bg-grid-dark text-white px-4 sm:px-6 relative overflow-hidden">
      {/* Ambient Radial Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-[#34A853]/12 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <div className="inline-flex items-center px-4 py-1.5 mb-6 text-[11px] font-mono font-semibold tracking-[0.2em] uppercase bg-[#34A853]/10 text-[#34A853] rounded-full border border-[#34A853]/25">
            Self-Aware Reliability
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.08]">
            The System That{' '}
            <span className="bg-gradient-to-r from-[#34A853] to-emerald-300 bg-clip-text text-transparent">
              Monitors Itself
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-300 font-normal leading-relaxed">
            Most vision systems report what they see. CORE reports how confident it is in what it sees and when that confidence is degrading.
          </p>
        </div>

        {/* 2x2 Diagnostic Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* 1. Persistence Heat Capacity */}
          <div className="p-8 md:p-10 rounded-[2rem] bg-slate-900/80 backdrop-blur-xl border border-white/10 hover:border-[#34A853]/40 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#34A853]/15 border border-[#34A853]/30 flex items-center justify-center text-[#34A853]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10">
                  TEMPORAL STABILITY
                </span>
              </div>

              <h3 className="font-display text-2xl font-bold text-white mb-4 group-hover:text-[#34A853] transition-colors">
                Persistence Heat Capacity
              </h3>
              <p className="text-slate-300 text-base leading-relaxed font-normal mb-8">
                Two objects both can report 85% persistence. One is stable under consistent partial occlusion. The other is swinging wildly between 95% and 30% every few frames. Heat capacity separates them: the first is correctly reporting sustained uncertainty, the second is architecturally unstable underneath a misleadingly calm average.
              </p>
            </div>

            {/* Telemetry Widget */}
            <div className="p-4 rounded-2xl bg-slate-950/90 border border-white/10 font-mono text-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">KERNEL_A (Sustained Occlusion)</span>
                <span className="text-[#34A853] font-semibold">85% · LOW VARIANCE</span>
              </div>
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full w-[85%] bg-[#34A853] rounded-full"></div>
              </div>
              <div className="flex items-center justify-between pt-1">
                <span className="text-slate-400">KERNEL_B (Oscillating 30%↔95%)</span>
                <span className="text-amber-400 font-semibold">85% · UNSTABLE</span>
              </div>
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden flex gap-0.5">
                <div className="h-full w-[30%] bg-amber-500"></div>
                <div className="h-full w-[15%] bg-red-500"></div>
                <div className="h-full w-[25%] bg-amber-400"></div>
                <div className="h-full w-[15%] bg-red-500"></div>
              </div>
            </div>
          </div>

          {/* 2. Cascade Risk Alerts */}
          <div className="p-8 md:p-10 rounded-[2rem] bg-slate-900/80 backdrop-blur-xl border border-white/10 hover:border-[#34A853]/40 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#34A853]/15 border border-[#34A853]/30 flex items-center justify-center text-[#34A853]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                    <line x1="12" y1="9" x2="12" y2="13" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                </div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10">
                  EARLY WARNING SIGNAL
                </span>
              </div>

              <h3 className="font-display text-2xl font-bold text-white mb-4 group-hover:text-[#34A853] transition-colors">
                Cascade Risk Alerts
              </h3>
              <p className="text-slate-300 text-base leading-relaxed font-normal mb-8">
                When an object's structural importance to the scene graph rises while its persistence falls, CORE flags it before it disappears, not after. Safety-critical systems can use this signal to increase reacquisition priority or trigger conservative behavior.
              </p>
            </div>

            {/* Telemetry Widget */}
            <div className="p-4 rounded-2xl bg-slate-950/90 border border-white/10 font-mono text-xs">
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/10">
                <span className="text-slate-400">ANCHOR NODE: #OBJ-409</span>
                <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px]">
                  PRE-EMPTIVE FLAG
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-2 rounded-lg bg-white/[0.03]">
                  <div className="text-[10px] text-slate-400">GRAPH CENTRALITY</div>
                  <div className="text-white font-semibold mt-0.5">↑ 0.92 HIGH</div>
                </div>
                <div className="p-2 rounded-lg bg-white/[0.03]">
                  <div className="text-[10px] text-slate-400">PERSISTENCE</div>
                  <div className="text-amber-400 font-semibold mt-0.5">↓ 0.61 DRIFT</div>
                </div>
                <div className="p-2 rounded-lg bg-[#34A853]/15 border border-[#34A853]/30">
                  <div className="text-[10px] text-emerald-300">ACTION</div>
                  <div className="text-[#34A853] font-semibold mt-0.5">REACQUIRE</div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Modality Mirror */}
          <div className="p-8 md:p-10 rounded-[2rem] bg-slate-900/80 backdrop-blur-xl border border-white/10 hover:border-[#34A853]/40 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#34A853]/15 border border-[#34A853]/30 flex items-center justify-center text-[#34A853]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                    <path d="M11 8v6" />
                    <path d="M8 11h6" />
                  </svg>
                </div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10">
                  DECISION ATTRIBUTION
                </span>
              </div>

              <h3 className="font-display text-2xl font-bold text-white mb-4 group-hover:text-[#34A853] transition-colors">
                Modality Mirror
              </h3>
              <p className="text-slate-300 text-base leading-relaxed font-normal mb-8">
                Every tracking decision logs which input dominated: visual appearance, language context, or scene graph relationships. When a kernel behaves unexpectedly, you can see exactly why — was the crop ambiguous, did the caption pull it somewhere unsupported, or did noisy scene context drag the decision?
              </p>
            </div>

            {/* Telemetry Widget */}
            <div className="p-4 rounded-2xl bg-slate-950/90 border border-white/10 font-mono text-xs space-y-2.5">
              <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                <span>DECISION LOG ATTRIBUTION</span>
                <span className="text-white">FRAME #1084</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-24 text-slate-400">Visual Crop</span>
                <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full w-[64%] bg-[#34A853] rounded-full"></div>
                </div>
                <span className="w-10 text-right text-white font-semibold">64%</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-24 text-slate-400">Scene Graph</span>
                <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full w-[28%] bg-emerald-400 rounded-full"></div>
                </div>
                <span className="w-10 text-right text-slate-300">28%</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-24 text-slate-400">Language</span>
                <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full w-[8%] bg-sky-400 rounded-full"></div>
                </div>
                <span className="w-10 text-right text-slate-400">8%</span>
              </div>
            </div>
          </div>

          {/* 4. Topological Weather */}
          <div className="p-8 md:p-10 rounded-[2rem] bg-slate-900/80 backdrop-blur-xl border border-white/10 hover:border-[#34A853]/40 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#34A853]/15 border border-[#34A853]/30 flex items-center justify-center text-[#34A853]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="18" cy="5" r="3" />
                    <circle cx="6" cy="12" r="3" />
                    <circle cx="18" cy="19" r="3" />
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                  </svg>
                </div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10">
                  SCENE DYNAMICS
                </span>
              </div>

              <h3 className="font-display text-2xl font-bold text-white mb-4 group-hover:text-[#34A853] transition-colors">
                Topological Weather
              </h3>
              <p className="text-slate-300 text-base leading-relaxed font-normal mb-8">
                A scene-level metric tracking how rapidly the relational structure between objects is changing. A cascade alert in a topologically calm scene deserves different confidence than the identical alert during rapid structural churn. Now the system can tell them apart.
              </p>
            </div>

            {/* Telemetry Widget */}
            <div className="p-4 rounded-2xl bg-slate-950/90 border border-white/10 font-mono text-xs">
              <div className="flex items-center justify-between mb-3">
                <span className="text-slate-400">RELATIONAL CHURN INDEX</span>
                <span className="text-[#34A853] font-semibold">0.14 rad/s (LAMINAR)</span>
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between">
                  <span className="text-slate-400">Calm Scene</span>
                  <span className="text-emerald-400 font-semibold">High Weight</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between">
                  <span className="text-slate-400">Rapid Churn</span>
                  <span className="text-amber-400 font-semibold">Damped Alert</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
