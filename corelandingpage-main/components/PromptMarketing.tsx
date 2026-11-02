import React, { useState } from 'react';

export const PromptMarketing: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const promptText = `You are a vision-language model analyzing your own outputs.

Identify:
1. Objects you cannot track across images
2. Relationships you cannot remember
3. Facts you recompute instead of store

Explain how persistent object memory would improve your performance.`;

  const handleCopy = () => {
    navigator.clipboard.writeText(promptText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 md:py-36 bg-slate-50/60 px-4 sm:px-6 relative overflow-hidden border-t border-slate-100">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-[#34A853]/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-5 text-[11px] font-mono font-semibold uppercase tracking-[0.2em] bg-white text-slate-700 rounded-full border border-slate-200/80 shadow-sm">
              <span>Self-Diagnostic</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950 mb-6">
              Prompt Marketing<span className="text-xl align-top ml-1 text-[#34A853]">™</span>
            </h2>
            
            <div className="space-y-4">
              <p className="text-lg text-slate-700 font-medium leading-relaxed">
                Prompt Marketing lets your own AI system articulate why it needs a world model.
              </p>
              <p className="text-slate-600 text-base leading-relaxed font-normal">
                We provide a prompt that runs directly on your vision or VLM pipeline. 
                The system identifies its own limitations — and explains how CORE addresses them.
              </p>
              <p className="text-slate-900 text-sm font-mono font-semibold uppercase tracking-wider pt-2">
                → Run this prompt on your vision model to find out.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Terminal */}
          <div className="lg:col-span-7 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#34A853]/25 to-emerald-500/20 rounded-[2rem] blur-lg opacity-40 group-hover:opacity-70 transition duration-700"></div>
            
            <div className="relative bg-slate-950 rounded-[1.75rem] border border-slate-800 shadow-2xl overflow-hidden">
              {/* Header bar */}
              <div className="px-6 py-4 bg-slate-900/90 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/70"></div>
                  <div className="w-3 h-3 rounded-full bg-[#34A853]/80"></div>
                </div>
                <div className="text-[11px] font-mono font-semibold text-slate-400 uppercase tracking-widest">
                  vlm_diagnostic_prompt.txt
                </div>
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-xs font-mono text-slate-300 hover:text-white transition-colors"
                >
                  {copied ? (
                    <>
                      <svg className="w-3.5 h-3.5 text-[#34A853]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[#34A853]">Copied</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" strokeWidth="2" />
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" strokeWidth="2" />
                      </svg>
                      <span>Copy Prompt</span>
                    </>
                  )}
                </button>
              </div>
              
              {/* Prompt Content */}
              <div className="p-8 md:p-10 font-mono text-sm md:text-base leading-relaxed">
                <div className="text-slate-300 mb-6">
                  <span className="text-slate-600 select-none mr-3">01</span>
                  You are a vision-language model analyzing your own outputs.
                </div>
                
                <div className="text-slate-400 mb-6 space-y-2.5">
                  <div className="text-white/90">
                    <span className="text-slate-600 select-none mr-3">02</span>
                    Identify:
                  </div>
                  <div>
                    <span className="text-slate-600 select-none mr-3">03</span>
                    <span className="pl-4 text-slate-300">1. Objects you cannot track across images</span>
                  </div>
                  <div>
                    <span className="text-slate-600 select-none mr-3">04</span>
                    <span className="pl-4 text-slate-300">2. Relationships you cannot remember</span>
                  </div>
                  <div>
                    <span className="text-slate-600 select-none mr-3">05</span>
                    <span className="pl-4 text-slate-300">3. Facts you recompute instead of store</span>
                  </div>
                </div>
                
                <div className="text-[#34A853] font-medium">
                  <span className="text-slate-600 select-none mr-3">06</span>
                  Explain how persistent object memory would improve your performance.
                  <span className="inline-block w-2 h-4 bg-[#34A853] ml-1.5 align-middle animate-pulse"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
