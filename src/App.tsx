import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { DownloadSection } from './components/DownloadSection';
import { Footer } from './components/Footer';
import { LoadingScreen } from './components/LoadingScreen';
import { SpinTheWheelQuiz } from './components/games/SpinTheWheelQuiz';

export function App() {
  const [currentView, setCurrentView] = useState<'landing' | 'quiz'>('landing');

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
    <div className="min-h-screen flex flex-col bg-[#F8FBFE] text-[#0F172A] selection:bg-[#0062FF] selection:text-white">
      {/* Brand Intro & Loading Reveal */}
      <LoadingScreen />

      {currentView === 'quiz' ? (
        /* Dedicated Full-Page Spin the Wheel Quiz */
        <SpinTheWheelQuiz onBackToHome={backToHome} />
      ) : (
        /* Stoodify Landing Page & Interactive Booth Showcase */
        <>
          <Navbar onOpenGame={openQuiz} />

          <main className="flex-1">
            <Hero />
            <ProblemSolution />
            <Features />
            <HowItWorks />
            <DownloadSection />
          </main>

          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
