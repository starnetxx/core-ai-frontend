
import React from 'react';

export const SolutionSection: React.FC = () => {
  return (
    <section className="py-20 md:py-40 bg-white px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div className="flex-1 max-w-xl w-full">
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6 md:mb-8 leading-relaxed md:leading-relaxed">
              Instead of treating objects as ephemeral predictions, <br className="hidden md:block" />
              CORE maintains stateful object representations that evolve <br className="hidden md:block" />
              as new images, prompts, and relationships are observed.
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 font-normal leading-relaxed mb-10 md:mb-12">
              So the world doesn’t reset every time the frame changes. 
              CORE sits between perception and action, maintaining 
              the identity of everything the system encounters.
            </p>
            
            <div className="space-y-4">
              <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4 transition-all hover:shadow-md hover:border-[#34A853]/20">
                <div className="flex-shrink-0 w-8 h-8 bg-[#34A853]/10 rounded-full flex items-center justify-center text-[#34A853]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Persistent Identity</h4>
                  <p className="text-slate-600 text-base font-normal mt-1">Objects maintain their unique ID even across occlusions or sensor drops.</p>
                </div>
              </div>
              <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4 transition-all hover:shadow-md hover:border-[#34A853]/20">
                <div className="flex-shrink-0 w-8 h-8 bg-[#34A853]/10 rounded-full flex items-center justify-center text-[#34A853]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Compositional Awareness</h4>
                  <p className="text-slate-600 text-base font-normal mt-1">The engine understands that a "coffee cup" is on a "book," creating a stable scene graph.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 w-full relative group mt-8 lg:mt-0">
            <div className="relative rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200 border border-slate-100 transition-transform duration-700 hover:scale-[1.01]">
              <img 
                src="https://i.ibb.co/206yPjPx/5a2c10a5-3755-4593-969b-966dfff9e0de.png" 
                alt="CORE Cognitive Representation" 
                className="w-full h-auto aspect-[4/5] object-cover"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none"></div>
              
              <div className="absolute top-4 left-4 md:top-8 md:left-8 p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-white animate-fade-in-up">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-2 md:h-3 md:w-3 h-2 bg-[#34A853] rounded-full animate-pulse shadow-[0_0_15px_rgba(52,168,83,0.8)]"></div>
                  <div className="flex flex-col">
                    <span className="text-[8px] md:text-[10px] uppercase tracking-widest font-bold opacity-70">Object Instance ID</span>
                    <span className="text-xs md:text-sm font-mono font-medium text-[#34A853]">AX-7091-B</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
