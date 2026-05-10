import React from 'react';

interface PricingSectionProps {
  onGetStarted: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onGetStarted }) => {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-slate-50 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">Pricing and Get Started</h2>
          <p className="text-xl text-slate-600">Start free. Scale with usage.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Free Tier */}
          <div className="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-sm flex flex-col transition-all hover:shadow-lg hover:border-[#34A853]/30">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Free Tier</h3>
            <div className="mb-6">
              <span className="text-4xl font-extrabold text-slate-900">$0</span>
              <span className="text-slate-500">/month</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center gap-3 text-slate-600">
                <svg className="w-5 h-5 text-[#34A853] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                500 object updates/month
              </li>
            </ul>
            <button onClick={onGetStarted} className="w-full py-4 rounded-xl font-bold border-2 border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50 transition-colors">
              Get Started
            </button>
          </div>

          {/* Starter */}
          <div className="bg-slate-900 rounded-[2rem] p-8 border border-slate-800 shadow-xl flex flex-col transform md:-translate-y-4 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#34A853] text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide uppercase">
              Most Popular
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
            <div className="mb-6">
              <span className="text-4xl font-extrabold text-white">$14.99</span>
              <span className="text-slate-400">/month</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center gap-3 text-slate-300">
                <svg className="w-5 h-5 text-[#34A853] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                10k object updates
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <svg className="w-5 h-5 text-[#34A853] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                Full scene graph API
              </li>
            </ul>
            <button onClick={onGetStarted} className="w-full py-4 rounded-xl font-bold bg-[#34A853] text-white hover:bg-[#1E8E3E] transition-colors shadow-lg shadow-[#34A853]/20">
              Start Free Trial
            </button>
          </div>

          {/* Production */}
          <div className="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-sm flex flex-col transition-all hover:shadow-lg hover:border-[#34A853]/30">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Production</h3>
            <div className="mb-6">
              <span className="text-4xl font-extrabold text-slate-900">$59.99</span>
              <span className="text-slate-500">/month</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center gap-3 text-slate-600">
                <svg className="w-5 h-5 text-[#34A853] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                Custom enterprise (surveillance, robotics)
              </li>
            </ul>
            <button onClick={onGetStarted} className="w-full py-4 rounded-xl font-bold border-2 border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
