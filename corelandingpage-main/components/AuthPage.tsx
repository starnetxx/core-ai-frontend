
import React, { useState } from 'react';

interface AuthPageProps {
  onBack: () => void;
}

export const AuthPage: React.FC<AuthPageProps> = ({ onBack }) => {
  const [isLogin, setIsLogin] = useState(true);

  const whiteLogo = "https://i.ibb.co/xqrNnFJj/CORE-01.png";
  const blackLogo = "https://i.ibb.co/0V8CCZQn/Whats-App-Image-2026-01-28-at-12-55-18-AM-removebg.png";

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
      {/* Left side - Brand/Visuals */}
      <div className="md:w-1/2 relative bg-slate-900 overflow-hidden hidden md:flex items-center justify-center p-12">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://i.ibb.co/LDKxjbVM/Gemini-Generated-Image-nxjjbxnxjjbxnxjj.png" 
            alt="CORE Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-md text-white">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-12 group"
          >
            <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </button>
          
          <div className="mb-8 group">
            <img 
              src={whiteLogo} 
              alt="CORE Logo" 
              className="h-10 w-auto object-contain"
            />
          </div>
          
          <h2 className="text-4xl font-bold tracking-tight mb-6">
            The next generation of <span className="text-[#34A853]">spatial intelligence</span>.
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed font-light">
            Join the waitlist of teams building machines that perceive the world with true continuity.
          </p>
          
          <div className="mt-12 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#34A853]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-slate-300 text-sm">Real-time object persistence</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#34A853]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-slate-300 text-sm">Compositional scene graphs</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="flex-1 flex flex-col justify-center items-center p-6 md:p-12 lg:p-24 bg-white">
        <div className="w-full max-w-sm">
          {/* Mobile Logo */}
          <div className="md:hidden flex flex-col items-center mb-12">
            <div className="mb-4">
              <img 
                src={blackLogo} 
                alt="CORE Logo" 
                className="h-8 w-auto object-contain"
              />
            </div>
            <button 
              onClick={onBack}
              className="text-xs text-slate-400 font-bold uppercase tracking-widest hover:text-[#34A853]"
            >
              Back to landing
            </button>
          </div>

          <div className="mb-10 text-center md:text-left">
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight mb-2">
              {isLogin ? 'Sign in to CORE' : 'Get early access'}
            </h1>
            <p className="text-slate-500">
              {isLogin ? 'Enter your credentials to access your dashboard' : 'Join the queue to start building with CORE'}
            </p>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            {!isLogin && (
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 placeholder:text-slate-300 focus:outline-none focus:ring-4 focus:ring-[#34A853]/10 focus:border-[#34A853] transition-all"
                />
              </div>
            )}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
              <input 
                type="email" 
                placeholder="john@example.com"
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 placeholder:text-slate-300 focus:outline-none focus:ring-4 focus:ring-[#34A853]/10 focus:border-[#34A853] transition-all"
              />
            </div>
            <div className="space-y-1.5">
              <div className="flex justify-between items-center px-1">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Password</label>
                {isLogin && (
                  <button className="text-[10px] font-bold text-[#34A853] uppercase hover:underline">Forgot?</button>
                )}
              </div>
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 placeholder:text-slate-300 focus:outline-none focus:ring-4 focus:ring-[#34A853]/10 focus:border-[#34A853] transition-all"
              />
            </div>

            <button className="w-full bg-[#34A853] text-white py-4 rounded-2xl font-bold text-lg hover:bg-[#1E8E3E] transition-all shadow-xl shadow-[#34A853]/20 active:scale-[0.98] mt-4">
              {isLogin ? 'Sign In' : 'Join Waitlist'}
            </button>
          </form>

          <div className="mt-10 pt-10 border-t border-slate-100 text-center">
            <p className="text-slate-500 text-sm">
              {isLogin ? "Don't have an account?" : "Already on the list?"}
              <button 
                onClick={() => setIsLogin(!isLogin)}
                className="ml-2 text-[#34A853] font-bold hover:text-[#1E8E3E] transition-colors"
              >
                {isLogin ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </div>
          
          <p className="mt-12 text-[10px] text-slate-400 text-center uppercase tracking-widest leading-loose">
            By continuing, you agree to our <br />
            <a href="#" className="underline">Terms</a> and <a href="#" className="underline">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
};
