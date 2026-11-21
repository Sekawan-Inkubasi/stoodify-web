import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { DownloadSection } from './components/DownloadSection';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { LoadingScreen } from './components/LoadingScreen';
import { SpinTheWheelQuiz } from './components/games/SpinTheWheelQuiz';
import { useScrollReveal } from './hooks/useScrollReveal';

export function App() {
  const [currentView, setCurrentView] = useState<'landing' | 'quiz'>('landing');
  const [isLoading, setIsLoading] = useState(true);

  // Activate scroll-reveal animations across sections
  useScrollReveal();

  // Ensure scroll is reset to top on page load/refresh so loading screen is never misaligned
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  // Sync hash with view state
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#quiz' || hash === '#teka-teki' || hash === '#games') {
        setCurrentView('quiz');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '' || hash === '#') {
        setCurrentView('landing');
      }
    };

    // Check on mount
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const openQuiz = () => {
    setCurrentView('quiz');
    window.location.hash = '#quiz';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const backToHome = () => {
    setCurrentView('landing');
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FBFE] text-[#171923] selection:bg-[#0062FF] selection:text-white">
      {/* Brand Intro & Loading Reveal */}
      <LoadingScreen onComplete={() => setIsLoading(false)} />

      {currentView === 'quiz' ? (
        /* Dedicated Full-Page Spin the Wheel Quiz */
        <SpinTheWheelQuiz onBackToHome={backToHome} />
      ) : (
        /* Stoodify Landing Page & Interactive Booth Showcase */
        <>
          <Navbar onOpenGame={openQuiz} isAppLoading={isLoading} />

          <main className="flex-1">
            <Hero />
            <Features />
            <ProblemSolution />
            <HowItWorks />
            <FAQ />
            <DownloadSection />
          </main>

          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
