
import React from 'react';

interface FooterProps {
  onDocsClick?: (e: React.MouseEvent) => void;
}

export const Footer: React.FC<FooterProps> = ({ onDocsClick }) => {
  return (
    <footer className="py-12 md:py-20 px-4 sm:px-6 border-t border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 md:gap-12 mb-12 md:mb-16">
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-6">
              <div className="transition-transform hover:scale-105">
                <img 
                  src="https://i.ibb.co/0V8CCZQn/Whats-App-Image-2026-01-28-at-12-55-18-AM-removebg.png" 
                  alt="CORE Logo" 
                  className="h-6 md:h-8 w-auto object-contain"
                />
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed font-light">
              Advancing artificial intelligence through physical continuity and object memory.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-12 text-sm w-full md:w-auto">
            <div className="space-y-4">
              <p className="font-semibold text-slate-900">Product</p>
              <ul className="space-y-2 text-slate-500">
                <li><a href="#" className="hover:text-[#34A853] transition-colors">Middleware</a></li>
                <li><a href="#" className="hover:text-[#34A853] transition-colors">SDK</a></li>
                <li><a href="https://surveillance.chat" target="_blank" rel="noopener noreferrer" className="hover:text-[#34A853] transition-colors lowercase">surveillance.chat</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <p className="font-semibold text-slate-900">Company</p>
              <ul className="space-y-2 text-slate-500">
                <li><a href="#" className="hover:text-[#34A853] transition-colors">Research</a></li>
                <li><a href="#" className="hover:text-[#34A853] transition-colors">About</a></li>
                <li><a href="#" className="hover:text-[#34A853] transition-colors">Careers</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <p className="font-semibold text-slate-900">Contact</p>
              <ul className="space-y-2 text-slate-500">
                <li><a href="#" onClick={onDocsClick} className="hover:text-[#34A853] transition-colors">Docs</a></li>
                <li><a href="#" className="hover:text-[#34A853] transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-[#34A853] transition-colors">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-50 text-[10px] md:text-xs text-slate-400 gap-6 text-center md:text-left">
          <p>© 2026 CORE. All rights reserved.</p>
          <div className="flex gap-6 md:gap-8">
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
