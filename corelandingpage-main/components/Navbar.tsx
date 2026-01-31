
import React, { useState } from 'react';

interface NavbarProps {
  isScrolled: boolean;
  onTryDemo: () => void;
  onPricingClick: (e: React.MouseEvent) => void;
  onDocsClick: (e: React.MouseEvent) => void;
  onSignIn?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isScrolled, onTryDemo, onPricingClick, onDocsClick, onSignIn }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Logo variants
  const whiteLogo = "https://i.ibb.co/xqrNnFJj/CORE-01.png"; // Original logo with white text
  const blackLogo = "https://i.ibb.co/0V8CCZQn/Whats-App-Image-2026-01-28-at-12-55-18-AM-removebg.png"; // New logo with black text

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 sm:px-6 md:px-12 py-3 md:py-4 ${
          isScrolled ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200/50 shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="/" onClick={(e) => { e.preventDefault(); window.location.reload(); }} className="flex items-center gap-2 group">
            <div className="group-hover:scale-105 transition-transform duration-300">
              <img 
                src={isScrolled ? blackLogo : whiteLogo} 
                alt="CORE Logo" 
                className="h-6 md:h-8 w-auto object-contain transition-all duration-300"
              />
            </div>
          </a>
          
          <div className={`hidden md:flex items-center gap-10 text-xs uppercase tracking-widest font-bold transition-colors duration-300 ${
            isScrolled ? 'text-slate-600' : 'text-white/80'
          }`}>
            <a href="#benefits" onClick={onPricingClick} className="hover:text-[#34A853] transition-colors">Pricing</a>
            <a href="#use-cases" className="hover:text-[#34A853] transition-colors">Use Cases</a>
            <a href="#docs" onClick={onDocsClick} className="hover:text-[#34A853] transition-colors">Docs</a>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={onSignIn || onTryDemo}
              className={`hidden md:block px-4 md:px-5 py-2 md:py-2.5 rounded-full text-[11px] md:text-sm font-bold transition-all ${
                isScrolled 
                  ? 'text-slate-700 hover:text-[#34A853] hover:bg-slate-100' 
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              Sign In
            </button>
            <button 
              onClick={onTryDemo}
              className="bg-[#34A853] text-white px-4 md:px-6 py-2 md:py-2.5 rounded-full text-[11px] md:text-sm font-bold hover:bg-[#1E8E3E] transition-all active:scale-95 shadow-lg shadow-[#34A853]/20"
            >
              Try Demo
            </button>
            
            {/* Mobile Toggle */}
            <button 
              onClick={toggleMenu}
              className={`md:hidden p-2 rounded-xl transition-colors ${isScrolled ? 'text-slate-900' : 'text-white'}`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[45] bg-slate-900 transition-transform duration-500 ease-in-out md:hidden flex flex-col items-center justify-center p-8 ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex flex-col items-center gap-8 text-white text-xl font-bold uppercase tracking-widest">
          <a href="#benefits" onClick={(e) => { toggleMenu(); onPricingClick(e); }} className="hover:text-[#34A853] transition-colors">Pricing</a>
          <a href="#use-cases" onClick={toggleMenu} className="hover:text-[#34A853] transition-colors">Use Cases</a>
          <a href="#docs" onClick={(e) => { toggleMenu(); onDocsClick(e); }} className="hover:text-[#34A853] transition-colors">Docs</a>
          <button 
            onClick={() => { toggleMenu(); (onSignIn || onTryDemo)(); }}
            className="text-white/80 hover:text-[#34A853] transition-colors"
          >
            Sign In
          </button>
          <button 
            onClick={() => { toggleMenu(); onTryDemo(); }}
            className="mt-4 bg-[#34A853] text-white px-10 py-4 rounded-full text-lg shadow-2xl shadow-[#34A853]/40"
          >
            Try Demo
          </button>
        </div>
      </div>
    </>
  );
};
