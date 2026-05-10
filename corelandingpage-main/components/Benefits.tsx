import React from 'react';

const BenefitCard: React.FC<{ title: string; icon: React.ReactNode }> = ({ title, icon }) => (
  <div className="p-6 md:p-8 bg-white border border-slate-100 rounded-[2rem] hover:shadow-xl hover:shadow-[#34A853]/5 transition-all group flex flex-col items-center text-center">
    <div className="mb-6 w-14 h-14 flex items-center justify-center bg-slate-50 rounded-2xl group-hover:bg-[#1E8E3E] group-hover:text-white transition-colors duration-500 text-slate-400">
      {icon}
    </div>
    <h3 className="text-lg md:text-xl font-bold text-slate-900 group-hover:text-[#1E8E3E] transition-colors">{title}</h3>
  </div>
);

export const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-24 md:py-32 bg-[#fdfdfd] px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">What Teams <span className="text-[#1E8E3E]">Actually Get</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <BenefitCard 
            title="Persistent object IDs that survive heavy occlusion and sensor gaps"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
            }
          />
          <BenefitCard 
            title="Stable compositional scene graphs (cup on book, person holding tool)"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
            }
          />
          <BenefitCard 
            title="Long-horizon memory for video streams"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 22h14"/><path d="M5 2h14"/><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"/><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"/></svg>
            }
          />
          <BenefitCard 
            title="Zero retraining, drop in middleware"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/></svg>
            }
          />
          <BenefitCard 
            title="Real-time on edge devices (designed for robots and AR)"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            }
          />
          <BenefitCard 
            title="Open inference engine"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h4l3-9 5 18 3-9h5"/></svg>
            }
          />
        </div>
      </div>
    </section>
  );
};