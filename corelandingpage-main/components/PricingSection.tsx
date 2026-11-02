import React from 'react';

interface PricingSectionProps {
  onGetStarted: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onGetStarted }) => {
  return (
    <section id="pricing" className="py-24 md:py-36 bg-white px-4 sm:px-6 border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-5 text-[11px] font-mono font-semibold uppercase tracking-[0.2em] bg-[#34A853]/10 text-[#1E8E3E] rounded-full border border-[#34A853]/20">
            <span>Transparent Tiers</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-950 mb-4">
            Pricing and Get Started
          </h2>
          <p className="text-lg md:text-xl text-slate-600">
            Start free. Scale deterministically with your object update volume.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
          {/* Free Tier */}
          <div className="bg-slate-50/70 rounded-[2rem] p-8 md:p-10 border border-slate-200/80 flex flex-col justify-between transition-all duration-300 hover:bg-white hover:shadow-xl hover:border-slate-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display text-2xl font-bold text-slate-900">Free Tier</h3>
                <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-200/70 text-slate-600 font-semibold">
                  Sandbox
                </span>
              </div>
              <div className="mb-8 pb-8 border-b border-slate-200/80">
                <span className="font-display text-4xl md:text-5xl font-extrabold text-slate-950">$0</span>
                <span className="text-slate-500 font-medium ml-1">/month</span>
              </div>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <div className="w-5 h-5 rounded-full bg-[#34A853]/15 text-[#1E8E3E] flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  500 object updates/month
                </li>
                <li className="flex items-center gap-3 text-slate-600 text-sm">
                  <div className="w-5 h-5 rounded-full bg-slate-200/80 text-slate-600 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  Interactive web demo access
                </li>
              </ul>
            </div>
            <button
              onClick={onGetStarted}
              className="w-full py-4 rounded-xl font-semibold border border-slate-300 bg-white text-slate-800 hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all"
            >
              Get Started
            </button>
          </div>

          {/* Starter */}
          <div className="bg-slate-950 rounded-[2rem] p-8 md:p-10 border border-[#34A853]/40 shadow-2xl shadow-slate-950/20 flex flex-col justify-between transform md:-translate-y-4 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#34A853] text-white px-4 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase shadow-lg shadow-[#34A853]/30">
              Most Popular
            </div>
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display text-2xl font-bold text-white">Starter</h3>
                <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#34A853]/15 text-[#34A853] border border-[#34A853]/30 font-semibold">
                  Builders
                </span>
              </div>
              <div className="mb-8 pb-8 border-b border-white/10">
                <span className="font-display text-4xl md:text-5xl font-extrabold text-white">$14.99</span>
                <span className="text-slate-400 font-medium ml-1">/month</span>
              </div>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-slate-200 font-medium">
                  <div className="w-5 h-5 rounded-full bg-[#34A853]/20 text-[#34A853] flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  10k object updates
                </li>
                <li className="flex items-center gap-3 text-slate-200 font-medium">
                  <div className="w-5 h-5 rounded-full bg-[#34A853]/20 text-[#34A853] flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  Full scene graph API
                </li>
                <li className="flex items-center gap-3 text-slate-300 text-sm">
                  <div className="w-5 h-5 rounded-full bg-[#34A853]/20 text-[#34A853] flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  Reliability & Modality Mirror logs
                </li>
              </ul>
            </div>
            <button
              onClick={onGetStarted}
              className="w-full py-4 rounded-xl font-semibold bg-[#34A853] text-white hover:bg-[#2d9248] transition-all shadow-lg shadow-[#34A853]/25"
            >
              Start Free Trial
            </button>
          </div>

          {/* Production */}
          <div className="bg-slate-50/70 rounded-[2rem] p-8 md:p-10 border border-slate-200/80 flex flex-col justify-between transition-all duration-300 hover:bg-white hover:shadow-xl hover:border-slate-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display text-2xl font-bold text-slate-900">Production</h3>
                <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-200/70 text-slate-600 font-semibold">
                  Scale
                </span>
              </div>
              <div className="mb-8 pb-8 border-b border-slate-200/80">
                <span className="font-display text-4xl md:text-5xl font-extrabold text-slate-950">$59.99</span>
                <span className="text-slate-500 font-medium ml-1">/month</span>
              </div>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <div className="w-5 h-5 rounded-full bg-[#34A853]/15 text-[#1E8E3E] flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  Custom enterprise (surveillance, robotics)
                </li>
                <li className="flex items-center gap-3 text-slate-600 text-sm">
                  <div className="w-5 h-5 rounded-full bg-slate-200/80 text-slate-600 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  Cascade Risk & Topological Weather streams
                </li>
              </ul>
            </div>
            <button
              onClick={onGetStarted}
              className="w-full py-4 rounded-xl font-semibold border border-slate-300 bg-white text-slate-800 hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
