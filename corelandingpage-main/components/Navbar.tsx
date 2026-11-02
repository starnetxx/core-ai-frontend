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
  const whiteLogo = "https://i.ibb.co/xqrNnFJj/CORE-01.png";
  const blackLogo = "https://i.ibb.co/0V8CCZQn/Whats-App-Image-2026-01-28-at-12-55-18-AM-removebg.png";

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 sm:px-6 md:px-10 ${
          isScrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div
          className={`max-w-7xl mx-auto flex items-center justify-between transition-all duration-500 rounded-full px-5 md:px-7 py-2.5 ${
            isScrolled
              ? 'bg-white/90 backdrop-blur-2xl border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.06)]'
              : 'bg-slate-950/30 backdrop-blur-md border border-white/10'
          }`}
        >
          <a href="/" onClick={(e) => { e.preventDefault(); window.location.reload(); }} className="flex items-center gap-3 group">
            <div className="group-hover:scale-105 transition-transform duration-300">
              <img 
                src={isScrolled ? blackLogo : whiteLogo} 
                alt="CORE Logo" 
                className="h-6 md:h-7 w-auto object-contain transition-all duration-300"
              />
            </div>
            <span className={`hidden lg:inline-flex items-center gap-1.5 text-[10px] font-mono font-semibold uppercase tracking-widest px-2.5 py-0.5 rounded-full border ${
              isScrolled
                ? 'bg-slate-100 text-slate-600 border-slate-200'
                : 'bg-white/10 text-white/80 border-white/15'
            }`}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#34A853] animate-pulse"></span>
              v1.4 Engine
            </span>
          </a>
          
          <div className={`hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.16em] font-semibold transition-colors duration-300 ${
            isScrolled ? 'text-slate-600' : 'text-white/80'
          }`}>
            <a href="#how-it-works" className="hover:text-[#34A853] transition-colors">Architecture</a>
            <a href="#reliability" className="hover:text-[#34A853] transition-colors">Reliability</a>
            <a href="#benefits" className="hover:text-[#34A853] transition-colors">Capabilities</a>
            <a href="#use-cases" className="hover:text-[#34A853] transition-colors">Use Cases</a>
            <a href="#pricing" onClick={onPricingClick} className="hover:text-[#34A853] transition-colors">Pricing</a>
            <a href="#docs" onClick={onDocsClick} className="hover:text-[#34A853] transition-colors">Docs</a>
          </div>

          <div className="flex items-center gap-2.5">
            <button 
              onClick={onSignIn || onTryDemo}
              className={`hidden md:block px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                isScrolled 
                  ? 'text-slate-700 hover:text-slate-950 hover:bg-slate-100' 
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              Sign In
            </button>
            <button 
              onClick={onTryDemo}
              className="group relative inline-flex items-center gap-2 bg-[#34A853] text-white px-5 md:px-6 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-semibold hover:bg-[#2d9248] transition-all active:scale-95 shadow-lg shadow-[#34A853]/25"
            >
              <span>Try Demo</span>
              <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            
            {/* Mobile Toggle */}
            <button 
              onClick={toggleMenu}
              aria-label="Toggle Menu"
              className={`md:hidden p-2 rounded-full transition-colors ${isScrolled ? 'text-slate-900 hover:bg-slate-100' : 'text-white hover:bg-white/10'}`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        className={`fixed inset-0 z-[45] bg-slate-950/95 backdrop-blur-2xl transition-all duration-500 ease-in-out md:hidden flex flex-col items-center justify-center p-8 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center gap-7 text-white text-lg font-semibold uppercase tracking-[0.2em]">
          <a href="#how-it-works" onClick={toggleMenu} className="hover:text-[#34A853] transition-colors">Architecture</a>
          <a href="#reliability" onClick={toggleMenu} className="hover:text-[#34A853] transition-colors">Reliability</a>
          <a href="#benefits" onClick={toggleMenu} className="hover:text-[#34A853] transition-colors">Capabilities</a>
          <a href="#use-cases" onClick={toggleMenu} className="hover:text-[#34A853] transition-colors">Use Cases</a>
          <a href="#pricing" onClick={(e) => { toggleMenu(); onPricingClick(e); }} className="hover:text-[#34A853] transition-colors">Pricing</a>
          <a href="#docs" onClick={(e) => { toggleMenu(); onDocsClick(e); }} className="hover:text-[#34A853] transition-colors">Docs</a>
          <div className="w-16 h-px bg-white/10 my-2"></div>
          <button 
            onClick={() => { toggleMenu(); (onSignIn || onTryDemo)(); }}
            className="text-white/80 hover:text-[#34A853] transition-colors text-base"
          >
            Sign In
          </button>
          <button 
            onClick={() => { toggleMenu(); onTryDemo(); }}
            className="mt-2 bg-[#34A853] text-white px-10 py-4 rounded-full text-base font-bold shadow-2xl shadow-[#34A853]/40"
          >
            Try Demo
          </button>
        </div>
      </div>
    </>
  );
};
