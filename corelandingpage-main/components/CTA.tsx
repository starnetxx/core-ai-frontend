import React from 'react';

interface CTAProps {
  onTryDemo: () => void;
  onContactClick?: () => void;
}

export const CTA: React.FC<CTAProps> = ({ onTryDemo, onContactClick }) => {
  return (
    <section className="py-24 md:py-36 px-4 sm:px-6 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-[2.5rem] bg-slate-950 bg-grid-dark px-6 py-20 md:p-24 text-center overflow-hidden border border-slate-800 shadow-2xl">
          {/* Ambient radial glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#34A853]/20 rounded-full blur-[130px] pointer-events-none"></div>

          <div className="max-w-3xl mx-auto relative z-10">
            <div className="inline-flex items-center px-3.5 py-1.5 mb-6 text-[11px] font-mono font-semibold uppercase tracking-[0.2em] bg-white/[0.06] text-emerald-300 rounded-full border border-white/10">
              Ready for Deployment
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.08]">
              Augment Your Model with a{' '}
              <span className="bg-gradient-to-r from-[#34A853] to-emerald-300 bg-clip-text text-transparent">
                World
              </span>.
            </h2>
            <p className="text-lg md:text-xl text-slate-300 font-normal leading-relaxed mb-10 max-w-2xl mx-auto">
              CORE integrates alongside your existing stack. <br className="hidden sm:block" />
              No retraining. No foundation model replacement.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={onTryDemo}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#34A853] text-white px-9 py-4 rounded-full text-base md:text-lg font-semibold hover:bg-[#2d9248] transition-all shadow-[0_0_40px_rgba(52,168,83,0.4)] active:scale-95"
              >
                <span>Try Demo</span>
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <button 
                onClick={onContactClick}
                className="w-full sm:w-auto inline-flex items-center justify-center bg-white/[0.06] text-white border border-white/15 px-9 py-4 rounded-full text-base md:text-lg font-medium hover:bg-white/[0.12] hover:border-white/30 transition-all active:scale-95"
              >
                Contact us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
