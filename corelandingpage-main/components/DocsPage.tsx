
import React from 'react';

interface DocsPageProps {
  onBack: () => void;
  onTryDemo: () => void;
}

export const DocsPage: React.FC<DocsPageProps> = ({ onBack, onTryDemo }) => {
  const blackLogo = "https://i.ibb.co/0V8CCZQn/Whats-App-Image-2026-01-28-at-12-55-18-AM-removebg.png";

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-slate-100 py-6 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button 
              onClick={onBack}
              className="p-2 hover:bg-slate-50 rounded-full transition-colors group"
              aria-label="Back to landing"
            >
              <svg className="w-5 h-5 text-slate-400 group-hover:text-[#34A853]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <img src={blackLogo} alt="CORE Logo" className="h-6 md:h-7 w-auto object-contain" />
          </div>
          <button 
            onClick={onTryDemo}
            className="text-[10px] font-bold uppercase tracking-widest text-[#34A853] hover:underline"
          >
            Try Demo
          </button>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <div className="animate-fade-in-up">
          <div className="mb-4 inline-flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-[#34A853] rounded-full animate-pulse"></div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#34A853]">v1.0.0 Documentation</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-8">
            CORE Documentation
          </h1>
          
          <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-light mb-12">
            CORE (Cognitive Objects Representation Engine) is a middleware layer that augments vision systems and Vision-Language Models with persistent object memory, identity continuity, and relational world state.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <section>
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6 border-b border-slate-100 pb-2">
                Start Here
              </h2>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="group flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-[#34A853] group-hover:bg-[#34A853] group-hover:text-white transition-all">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm">Augmentation Guide</p>
                      <p className="text-xs text-slate-400">how to integrate CORE</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" className="group flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-[#34A853] group-hover:bg-[#34A853] group-hover:text-white transition-all">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm">Live Demo</p>
                      <p className="text-xs text-slate-400">see persistent perception in action</p>
                    </div>
                  </a>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6 border-b border-slate-100 pb-2">
                What CORE Adds
              </h2>
              <ul className="space-y-4">
                {[
                  "Object permanence across frames",
                  "Stable identities (UUID-based)",
                  "Spatial and relational reasoning",
                  "World state you can query"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-600 font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#34A853]"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="p-8 bg-slate-900 rounded-[2rem] text-white relative overflow-hidden group">
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
              <div className="w-12 h-12 rounded-2xl bg-[#34A853] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-lg md:text-xl font-light leading-relaxed text-center md:text-left">
                CORE does <span className="text-[#34A853] font-bold">not replace</span> your vision model. <br className="hidden md:block" />
                It gives it <span className="italic">memory</span>.
              </p>
            </div>
            {/* Abstract background for the callout */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#34A853]/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </div>
      </main>
    </div>
  );
};
