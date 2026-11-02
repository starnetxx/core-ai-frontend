import React from 'react';

interface HeroProps {
  onTryDemo: () => void;
  onPricingClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onTryDemo, onPricingClick }) => {
  const stackPartners = [
    'ROS 2',
    'PyTorch',
    'Gemini',
    'Claude',
    'GPT-5',
    'Llama-4',
    'Qwen-VL',
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-between px-4 sm:px-6 pt-28 pb-12 overflow-hidden bg-slate-950">
      {/* Background Image & Cinematic Overlays */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.ibb.co/LDKxjbVM/Gemini-Generated-Image-nxjjbxnxjjbxnxjj.png" 
          alt="CORE Cognitive Background" 
          className="w-full h-full object-cover object-center scale-105 opacity-45"
          loading="eager"
        />
        <div className="absolute inset-0 bg-slate-950/65"></div>
        <div className="absolute inset-0 bg-grid-dark opacity-70"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/30 to-slate-950"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#34A853]/15 rounded-full blur-[150px] pointer-events-none"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto w-full text-center animate-fade-in-up relative z-10 my-auto py-12 md:py-16">
        {/* Top Telemetry Pill */}
        <div className="inline-flex items-center gap-3 px-4 py-2 mb-8 text-[10px] md:text-xs font-mono font-medium tracking-[0.22em] uppercase bg-white/[0.06] backdrop-blur-xl text-white/90 rounded-full border border-white/15 shadow-2xl">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34A853] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#34A853]"></span>
          </span>
          <span>Cognitive Object Representation Engine</span>
        </div>
        
        {/* Display Headline */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.25rem] font-bold tracking-[-0.03em] text-white mb-8 leading-[1.06] max-w-6xl mx-auto">
          AI that understands, <br className="hidden sm:block" />
          remembers the world, <br className="hidden sm:block" />
          and knows when{' '}
          <span className="bg-gradient-to-r from-[#34A853] via-emerald-400 to-teal-300 bg-clip-text text-transparent">
            it’s uncertain
          </span>.
        </h1>
        
        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl lg:text-[1.35rem] text-slate-300/95 mb-10 md:mb-12 max-w-3xl mx-auto font-normal leading-relaxed px-2">
          CORE gives vision systems persistent object identities, relational context, and self-aware reliability scoring. The system doesn’t just track objects; it monitors its own confidence and adapts when evidence degrades.
        </p>
        
        {/* Primary & Secondary CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 relative z-10 px-4 mb-14">
          <button 
            onClick={onTryDemo}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#34A853] text-white px-8 md:px-10 py-4 rounded-full text-base md:text-lg font-semibold hover:bg-[#2d9248] transition-all shadow-[0_0_40px_rgba(52,168,83,0.4)] hover:shadow-[0_0_60px_rgba(52,168,83,0.6)] active:scale-95"
          >
            <span>Try a demo</span>
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
          <button 
            onClick={onPricingClick}
            className="w-full sm:w-auto inline-flex items-center justify-center bg-white/[0.06] backdrop-blur-xl text-white border border-white/20 px-8 md:px-10 py-4 rounded-full text-base md:text-lg font-medium hover:bg-white/[0.12] hover:border-white/35 transition-all active:scale-95"
          >
            Pricing
          </button>
        </div>

        {/* Live Telemetry HUD Strip (Tesla / DeepMind style) */}
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 px-2 text-left">
          <div className="bg-slate-900/70 backdrop-blur-xl border border-white/10 rounded-2xl p-4">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">Object Identity</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#34A853]"></span>
            </div>
            <div className="font-mono text-sm sm:text-base font-semibold text-white">UUID-Persistent</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Zero-shot re-ID</div>
          </div>

          <div className="bg-slate-900/70 backdrop-blur-xl border border-white/10 rounded-2xl p-4">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">Heat Capacity</span>
              <span className="text-[10px] font-mono text-[#34A853]">85.4% STABLE</span>
            </div>
            <div className="font-mono text-sm sm:text-base font-semibold text-white">Self-Monitored</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Variance-aware confidence</div>
          </div>

          <div className="bg-slate-900/70 backdrop-blur-xl border border-white/10 rounded-2xl p-4">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">Cascade Risk</span>
              <span className="text-[10px] font-mono text-emerald-400">NOMINAL</span>
            </div>
            <div className="font-mono text-sm sm:text-base font-semibold text-white">Pre-Failure Alert</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Flags before occlusion loss</div>
          </div>

          <div className="bg-slate-900/70 backdrop-blur-xl border border-white/10 rounded-2xl p-4">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">Modality Mirror</span>
              <span className="text-[10px] font-mono text-sky-400">ACTIVE</span>
            </div>
            <div className="font-mono text-sm sm:text-base font-semibold text-white">Full Attribution</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Visual · Language · Graph</div>
          </div>
        </div>
      </div>

      {/* Bottom Ecosystem Compatibility Bar */}
      <div className="relative z-10 max-w-6xl mx-auto w-full pt-8 border-t border-white/10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-slate-400">
            Drop-in middleware compatible with your existing stack
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {stackPartners.map((partner) => (
              <span
                key={partner}
                className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-white/[0.05] text-slate-300 border border-white/10 hover:border-[#34A853]/40 hover:text-white transition-colors"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
