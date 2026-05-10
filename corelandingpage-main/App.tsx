
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSolutionSection } from './components/ProblemSolutionSection';
import { Benefits } from './components/Benefits';
import { UseCases } from './components/UseCases';
import { PromptMarketing } from './components/PromptMarketing';
import { HowItWorks } from './components/HowItWorks';
import { PricingSection } from './components/PricingSection';
import { About } from './components/About';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { AuthPage } from './components/AuthPage';
import { DocsPage } from './components/DocsPage';
import { AdminDashboard } from './components/AdminDashboard';
import { PricingModal } from './components/PricingModal';
import { ContactModal } from './components/ContactModal';
import { supabase } from './lib/supabase';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [view, setView] = useState<'landing' | 'auth' | 'docs' | 'admin'>('landing');
  const [showPricingModal, setShowPricingModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Check for admin view in hash
    if (window.location.hash === '#admin') {
      checkAdminStatus();
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const checkAdminStatus = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      const { data: profile } = await supabase
        .from('profiles')
        .select('is_admin')
        .eq('id', user.id)
        .single();
      
      if (profile?.is_admin) {
        setIsAdmin(true);
        setView('admin');
      } else {
        setView('landing');
      }
    } else {
      setView('auth');
    }
  };

  const navigateToAuth = () => {
    window.location.href = '/signin';
  };

  const navigateToSignIn = () => {
    window.location.href = '/signin';
  };

  const navigateToDocs = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setView('docs');
    window.scrollTo(0, 0);
  };

  const navigateToLanding = () => {
    setView('landing');
    window.scrollTo(0, 0);
  };

  const handlePricingClick = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };


  const handleContactClick = () => {
    setShowContactModal(true);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsAdmin(false);
    setView('landing');
    window.location.hash = '';
  };

  if (view === 'admin') {
    return <AdminDashboard onLogout={handleLogout} />;
  }

  if (view === 'auth') {
    return <AuthPage onBack={navigateToLanding} />;
  }

  if (view === 'docs') {
    return <DocsPage onBack={navigateToLanding} onTryDemo={navigateToAuth} />;
  }

  return (
    <div className="min-h-screen selection:bg-slate-200 selection:text-slate-900 relative">
      {/* Modals */}
      <PricingModal isOpen={showPricingModal} onClose={() => setShowPricingModal(false)} />
      <ContactModal isOpen={showContactModal} onClose={() => setShowContactModal(false)} />

      <Navbar 
        isScrolled={scrolled} 
        onTryDemo={navigateToAuth} 
        onSignIn={navigateToSignIn}
        onPricingClick={handlePricingClick} 
        onDocsClick={navigateToDocs}
      />
      <main>
        <Hero onTryDemo={navigateToAuth} onPricingClick={handlePricingClick} />
        <ProblemSolutionSection />
        <HowItWorks />
        <Benefits />
        <UseCases />
        <PromptMarketing />
        <PricingSection onGetStarted={navigateToAuth} />
        <About />
        <CTA onTryDemo={navigateToAuth} onContactClick={handleContactClick} />
      </main>
      <Footer onDocsClick={navigateToDocs} onContactClick={handleContactClick} />
    </div>
  );
};

export default App;
