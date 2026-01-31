
import React from 'react';

export const PromptMarketing: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-white px-4 sm:px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-[#34A853]/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
              Prompt Marketing<span className="text-xl align-top ml-1 text-slate-400">™</span>
            </h2>
          </div>
          
          <div className="space-y-4 max-w-2xl">
            <p className="text-lg md:text-xl text-slate-600 font-medium">
              Prompt Marketing lets your own AI system articulate why it needs a world model.
            </p>
            <p className="text-slate-600 text-base leading-relaxed font-normal">
              We provide a prompt that runs directly on your vision or VLM pipeline. 
              The system identifies its own limitations — and explains how CORE addresses them.
            </p>
            <p className="text-slate-900 text-base font-bold mt-4">
              Use the prompt below on your vision model to find out.
            </p>
          </div>
        </div>

        {/* Terminal/Prompt Window */}
        <div className="relative group">
          {/* Decorative glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#34A853]/20 to-emerald-500/20 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          
          <div className="relative bg-slate-950 rounded-[2rem] border border-white/5 shadow-2xl overflow-hidden">
            {/* Header bar */}
            <div className="px-6 py-4 bg-white/5 border-b border-white/5 flex items-center justify-between">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/20"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/20"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#34A853]/40"></div>
              </div>
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">System Prompt</div>
              <div className="w-10"></div>
            </div>
            
            {/* Prompt Content */}
            <div className="p-8 md:p-12 font-mono text-sm md:text-base leading-relaxed">
              <div className="text-slate-300 mb-6">
                You are a vision-language model analyzing your own outputs.
              </div>
              
              <div className="text-slate-400 mb-6 space-y-2">
                <div className="text-white/90">Identify:</div>
                <div className="pl-4">1. Objects you cannot track across images</div>
                <div className="pl-4">2. Relationships you cannot remember</div>
                <div className="pl-4">3. Facts you recompute instead of store</div>
              </div>
              
              <div className="text-[#34A853] font-medium">
                Explain how persistent object memory would improve your performance.
              </div>
              
              {/* Cursor animation */}
              <div className="inline-block w-2 h-5 bg-[#34A853] ml-1 align-middle animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
