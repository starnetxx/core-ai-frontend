import React from 'react';

export const SelfAwareReliability: React.FC = () => {
  const features = [
    {
      title: "Persistence Heat Capacity",
      description:
        "Two objects both can report 85% persistence. One is stable under consistent partial occlusion. The other is swinging wildly between 95% and 30% every few frames. Heat capacity separates them: the first is correctly reporting sustained uncertainty, the second is architecturally unstable underneath a misleadingly calm average.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
    },
    {
      title: "Cascade Risk Alerts",
      description:
        "When an object's structural importance to the scene graph rises while its persistence falls, CORE flags it before it disappears, not after. Safety-critical systems can use this signal to increase reacquisition priority or trigger conservative behavior.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      ),
    },
    {
      title: "Modality Mirror",
      description:
        "Every tracking decision logs which input dominated: visual appearance, language context, or scene graph relationships. When a kernel behaves unexpectedly, you can see exactly why — was the crop ambiguous, did the caption pull it somewhere unsupported, or did noisy scene context drag the decision?",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
          <path d="M11 8v6" />
          <path d="M8 11h6" />
        </svg>
      ),
    },
    {
      title: "Topological Weather",
      description:
        "A scene-level metric tracking how rapidly the relational structure between objects is changing. A cascade alert in a topologically calm scene deserves different confidence than the identical alert during rapid structural churn. Now the system can tell them apart.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
        </svg>
      ),
    },
  ];

  return (
    <section id="reliability" className="py-24 md:py-36 bg-slate-900 text-white px-4 sm:px-6 relative overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#34A853]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase bg-[#34A853]/10 text-[#34A853] rounded-full border border-[#34A853]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#34A853] animate-pulse"></span>
            Self-Aware Reliability
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
            The System That <span className="text-[#34A853]">Monitors Itself</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed">
            Most vision systems report what they see. CORE reports how confident it is in what it sees and when that confidence is degrading.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="p-8 md:p-10 rounded-[2rem] bg-white/[0.03] border border-white/10 hover:border-[#34A853]/40 hover:bg-white/[0.05] transition-all duration-300 group"
            >
              <div className="mb-6 w-12 h-12 rounded-2xl bg-[#34A853]/10 border border-[#34A853]/20 flex items-center justify-center text-[#34A853] group-hover:bg-[#34A853] group-hover:text-white transition-colors duration-500">
                {item.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-[#34A853] transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-300 text-base leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
