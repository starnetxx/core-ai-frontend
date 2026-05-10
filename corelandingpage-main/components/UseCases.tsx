import React from 'react';

export const UseCases: React.FC = () => {
  const cases = [
    { title: "Robotics and Warehouses", desc: "Tools, parts, and humans stay tracked across the entire shift." },
    { title: "Surveillance and Smart Cities", desc: "One camera now “remembers everything”." },
    { title: "Augmented Reality", desc: "Objects persist in the user’s view exactly as they do in reality." },
    { title: "Agricultural Drones and Physical Assistants", desc: "Context never resets in dynamic outdoor environments." }
  ];

  return (
    <section id="use-cases" className="py-20 md:py-32 px-4 sm:px-6 bg-slate-50/50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 tracking-tight text-slate-900">Real-World Use Cases</h2>
        
        <div className="space-y-4">
          {cases.map((item, idx) => (
            <div key={idx} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4 md:gap-6 transition-all hover:shadow-md hover:border-[#34A853]/20 group">
              <div className="flex-shrink-0 w-10 h-10 bg-[#34A853]/10 rounded-full flex items-center justify-center text-[#34A853]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-2 group-hover:text-[#1E8E3E] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-slate-500 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
