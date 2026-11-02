import React from 'react';

export const UseCases: React.FC = () => {
  const cases = [
    {
      tag: "MISSION CRITICAL",
      title: "Safety-Critical Autonomy",
      desc: "Robots, drones, and autonomous vehicles need more than tracking, they need to know when tracking is unreliable. CORE's cascade risk and heat capacity metrics give execution controllers the evidence they need to make proceed/slow/halt decisions. When persistence degrades but hasn't failed yet, the system can trigger conservative behavior before a failure occurs.",
      featured: true,
    },
    {
      tag: "INDUSTRIAL AUTOMATION",
      title: "Robotics and Warehouses",
      desc: "Tools, parts, and humans stay tracked across the entire shift.",
      featured: false,
    },
    {
      tag: "SECURITY & INFRASTRUCTURE",
      title: "Surveillance and Smart Cities",
      desc: "One camera now “remembers everything”.",
      featured: false,
    },
    {
      tag: "SPATIAL COMPUTING",
      title: "Augmented Reality",
      desc: "Objects persist in the user’s view exactly as they do in reality.",
      featured: false,
    },
    {
      tag: "FIELD AUTONOMY",
      title: "Agricultural Drones and Physical Assistants",
      desc: "Context never resets in dynamic outdoor environments.",
      featured: false,
    },
  ];

  const featuredCase = cases[0];
  const standardCases = cases.slice(1);

  return (
    <section id="use-cases" className="py-24 md:py-36 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-5 text-[11px] font-mono font-semibold uppercase tracking-[0.2em] bg-[#34A853]/10 text-[#1E8E3E] rounded-full border border-[#34A853]/20">
            <span>Deployments</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-950">
            Real-World Use Cases
          </h2>
        </div>

        {/* Featured Use Case: Safety-Critical Autonomy */}
        <div className="mb-8 rounded-[2.25rem] bg-slate-950 text-white p-8 sm:p-10 md:p-14 border border-slate-800 shadow-2xl relative overflow-hidden group">
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-[#34A853]/15 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-mono font-semibold uppercase tracking-widest bg-[#34A853]/20 text-[#34A853] border border-[#34A853]/30 mb-5">
                {featuredCase.tag}
              </div>
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                {featuredCase.title}
              </h3>
              <p className="text-slate-300 text-base md:text-lg leading-relaxed font-normal">
                {featuredCase.desc}
              </p>
            </div>

            {/* Controller State Machine Pill */}
            <div className="lg:w-72 flex-shrink-0 bg-white/[0.04] border border-white/10 rounded-2xl p-5 font-mono text-xs space-y-3">
              <div className="text-[10px] text-slate-400 uppercase tracking-widest border-b border-white/10 pb-2">
                EXECUTION CONTROLLER GATE
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-[#34A853]/15 border border-[#34A853]/30">
                <span className="text-emerald-300">PROCEED</span>
                <span className="text-white font-semibold">Conf &gt; 0.85</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-amber-500/15 border border-amber-500/30">
                <span className="text-amber-300">SLOW / REACQUIRE</span>
                <span className="text-white font-semibold">Cascade Flag</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-red-500/15 border border-red-500/30">
                <span className="text-red-300">SAFE HALT</span>
                <span className="text-white font-semibold">High Churn</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2x2 Grid for Standard Use Cases */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {standardCases.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 hover:bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 hover:border-[#34A853]/40 hover:shadow-xl hover:shadow-slate-900/5 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.18em] text-slate-400 group-hover:text-[#1E8E3E] transition-colors">
                    {item.tag}
                  </span>
                  <div className="w-10 h-10 bg-white border border-slate-200/80 rounded-xl flex items-center justify-center text-[#34A853] group-hover:bg-[#34A853] group-hover:text-white group-hover:border-[#34A853] transition-all">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-display text-xl md:text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#1E8E3E] transition-colors">
                  {item.title}
                </h3>
                <p className="text-base text-slate-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
