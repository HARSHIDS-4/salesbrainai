import { useEffect, useState } from 'react';
import { useScrollReveal } from './hooks/useScrollReveal';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { Features } from './components/Features';
import { PlatformPreview } from './components/PlatformPreview';
import { UseCases } from './components/UseCases';
import { WhySalesBrain } from './components/WhySalesBrain';
import { Trust } from './components/Trust';
import { About } from './components/About';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { LegalPages } from './components/LegalPages';

type Route = 'privacy' | 'terms' | null;

function useHashRoute(): Route {
  const [route, setRoute] = useState<Route>(null);

  useEffect(() => {
    const check = () => {
      const hash = window.location.hash;
      if (hash === '#/privacy') setRoute('privacy');
      else if (hash === '#/terms') setRoute('terms');
      else setRoute(null);
    };
    check();
    window.addEventListener('hashchange', check);
    return () => window.removeEventListener('hashchange', check);
  }, []);

  return route;
}

export default function App() {
  const route = useHashRoute();
  useScrollReveal();

  if (route) {
    return <LegalPages route={route} />;
  }

  return (
    <div className="min-h-screen bg-ink-50 text-ink-900 antialiased">
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <PlatformPreview />
        <UseCases />
        <WhySalesBrain />
        <Trust />
        <About />
        <FAQ />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
