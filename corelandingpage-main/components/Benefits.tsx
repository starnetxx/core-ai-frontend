
import React from 'react';

const BenefitCard: React.FC<{ title: string; description: string; icon: React.ReactNode }> = ({ title, description, icon }) => (
  <div className="p-8 md:p-10 bg-white border border-slate-100 rounded-[2rem] hover:shadow-2xl hover:shadow-[#34A853]/5 transition-all group">
    <div className="mb-6 w-12 h-12 flex items-center justify-center bg-slate-50 rounded-2xl group-hover:bg-[#1E8E3E] group-hover:text-white transition-colors duration-500">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#1E8E3E] transition-colors">{title}</h3>
    <p className="text-slate-500 leading-relaxed font-light">{description}</p>
  </div>
);

export const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-24 md:py-32 bg-[#fdfdfd] px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Better memory, <span className="text-[#1E8E3E]">better results</span>.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <BenefitCard 
            title="Remembers objects"
            description="AI can recognize the same object over time, even if it leaves the field of view."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
            }
          />
          <BenefitCard 
            title="Structural context"
            description="Objects aren’t just pixels — they have parts and relationships that CORE understands."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
            }
          />
          <BenefitCard 
            title="Native integration"
            description="CORE works alongside what teams already use. ROS, PyTorch, and common spatial stacks."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/></svg>
            }
          />
          <BenefitCard 
            title="Built to be fast"
            description="Designed for real-time edge computing. Low latency for seamless physical interactions."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            }
          />
        </div>
      </div>
    </section>
  );
};