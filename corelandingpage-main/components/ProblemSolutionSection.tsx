import React from 'react';

export const ProblemSolutionSection: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-slate-50 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
            A memory layer for <span className="text-[#1E8E3E]">vision models</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative">
          {/* Vertical Divider for desktop */}
          <div className="hidden md:block absolute top-10 bottom-10 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent"></div>

          {/* The Problem */}
          <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col relative">
            <div className="absolute top-0 right-8 -translate-y-1/2">
              <div className="w-12 h-12 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center border border-red-100 shadow-sm">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-slate-900 mb-6">The Problem</h3>
            <p className="text-lg text-slate-600 leading-relaxed font-normal mb-6 flex-grow">
              Modern VLMs are powerful but stateless. They treat every frame as new. 
              Objects disappear behind occlusions. Scene graphs collapse. Long-horizon tasks fail.
            </p>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <p className="text-slate-800 font-medium">
                <span className="font-bold text-red-500">Result:</span> robots drop tools, AR overlays drift, surveillance systems lose continuity.
              </p>
            </div>
          </div>

          {/* CORE Solves It */}
          <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-lg shadow-[#34A853]/5 border border-[#34A853]/20 flex flex-col relative">
             <div className="absolute top-0 right-8 -translate-y-1/2">
              <div className="w-12 h-12 bg-[#34A853]/10 text-[#34A853] rounded-2xl flex items-center justify-center border border-[#34A853]/20 shadow-sm">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-[#1E8E3E] mb-6">CORE Solves It</h3>
            <ul className="space-y-4 text-lg text-slate-600 font-medium mb-8 flex-grow">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#34A853]"></div>
                Persistent Identity
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#34A853]"></div>
                Compositional Scene Graphs
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#34A853]"></div>
                Stateful Memory Across Frames
              </li>
            </ul>
            <div className="bg-[#34A853]/5 p-6 rounded-2xl border border-[#34A853]/10">
              <p className="text-slate-800 font-medium">
                All in a lightweight vector-graph layer that runs at edge speed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
