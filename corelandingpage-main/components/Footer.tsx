import React from 'react';

interface FooterProps {
  onDocsClick?: (e: React.MouseEvent) => void;
  onContactClick?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onDocsClick, onContactClick }) => {
  return (
    <footer className="py-16 md:py-20 px-4 sm:px-6 border-t border-slate-200/70 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12 mb-16">
          <div className="max-w-sm">
            <div className="flex items-center gap-3 mb-5">
              <img 
                src="https://i.ibb.co/0V8CCZQn/Whats-App-Image-2026-01-28-at-12-55-18-AM-removebg.png" 
                alt="CORE Logo" 
                className="h-7 md:h-8 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-slate-500 leading-relaxed font-normal mb-6">
              Cognitive Objects Representation Engine. Advancing spatial intelligence through persistent object identity, relational context, and self-aware reliability.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200/80 text-xs font-mono text-slate-600">
              <span className="w-2 h-2 rounded-full bg-[#34A853]"></span>
              All Systems Operational
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 md:gap-16 text-sm w-full md:w-auto">
            <div className="space-y-4">
              <p className="font-mono text-xs font-bold uppercase tracking-widest text-slate-900">Product</p>
              <ul className="space-y-2.5 text-slate-500">
                <li><a href="#how-it-works" className="hover:text-[#34A853] transition-colors">Architecture</a></li>
                <li><a href="#reliability" className="hover:text-[#34A853] transition-colors">Self-Aware Reliability</a></li>
                <li><a href="#pricing" className="hover:text-[#34A853] transition-colors">Pricing</a></li>
                <li><a href="https://surveillance.chat" target="_blank" rel="noopener noreferrer" className="hover:text-[#34A853] transition-colors lowercase">surveillance.chat</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <p className="font-mono text-xs font-bold uppercase tracking-widest text-slate-900">Company</p>
              <ul className="space-y-2.5 text-slate-500">
                <li><a href="#about" className="hover:text-[#34A853] transition-colors">Technical Specs</a></li>
                <li><a href="#use-cases" className="hover:text-[#34A853] transition-colors">Use Cases</a></li>
                <li><a href="#" onClick={onDocsClick} className="hover:text-[#34A853] transition-colors">Documentation</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <p className="font-mono text-xs font-bold uppercase tracking-widest text-slate-900">Connect</p>
              <ul className="space-y-2.5 text-slate-500">
                <li><button onClick={onContactClick} className="hover:text-[#34A853] transition-colors">Contact Us</button></li>
                <li><a href="#" className="hover:text-[#34A853] transition-colors">Twitter / X</a></li>
                <li><a href="#" className="hover:text-[#34A853] transition-colors">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-100 text-xs text-slate-400 gap-4 text-center md:text-left">
          <p>© 2026 CORE AI. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
