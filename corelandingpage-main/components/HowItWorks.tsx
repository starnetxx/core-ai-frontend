import React from 'react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "1",
      title: "Perceive",
      description: "Your existing VLM feeds raw detections into CORE.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    },
    {
      number: "2",
      title: "Update World State",
      description: "CORE assigns stable IDs, builds/updates the relational scene graph, and tracks objects through occlusions and re-entries.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    },
    {
      number: "3",
      title: "Reason and Act",
      description: "Downstream agents query a consistent world model instead of hallucinating from scratch.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v8l9-11h-7z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-white px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
            How It Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
          {/* Horizontal connection line (desktop only) */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-[#34A853]/10 via-[#34A853]/30 to-[#34A853]/10 z-0"></div>

          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-[2rem] bg-slate-50 border border-slate-100 shadow-sm flex items-center justify-center mb-8 relative transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#34A853]/20 group-hover:border-[#34A853]/30">
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#34A853] text-white flex items-center justify-center font-bold text-sm shadow-md">
                  {step.number}
                </div>
                <div className="text-slate-400 group-hover:text-[#1E8E3E] transition-colors duration-500">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed font-normal">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
