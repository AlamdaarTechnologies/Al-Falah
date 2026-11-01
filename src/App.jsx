import { useState, useEffect, useRef } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import MissionSection from './components/sections/MissionSection';
import AboutSection from './components/sections/AboutSection';
import SolutionsSection from './components/sections/SolutionsSection';
import InquirySection from './components/sections/InquirySection';
import ContactSection from './components/sections/ContactSection';
import ProductView from './components/sections/ProductView';
import { divisions } from './data/solutions';

export default function App() {
  // The selected solution decides which view is shown: homepage (null) or focused product view
  const [selectedId, setSelectedId] = useState(null);
  const pendingScroll = useRef(null); // section to scroll to after returning to the homepage
  const selected = divisions.find((d) => d.id === selectedId);

  // Browser Back / Forward button
  useEffect(() => {
    window.history.replaceState(null, '');
    window.history.scrollRestoration = 'manual'; // we control scrolling when switching views
    const onPop = (e) => {
      const id = e.state?.solution ?? null;
      if (!id && !pendingScroll.current) pendingScroll.current = 'solutions';
      setSelectedId(id);
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  // After the view changes: product view starts at the top; the homepage returns to the requested section
  useEffect(() => {
    if (selectedId) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else if (pendingScroll.current) {
      const id = pendingScroll.current;
      pendingScroll.current = null;
      document.getElementById(id)?.scrollIntoView({ behavior: 'instant' });
    }
  }, [selectedId]);

  const selectSolution = (id) => {
    if (window.history.state?.solution) window.history.replaceState({ solution: id }, '');
    else window.history.pushState({ solution: id }, '');
    setSelectedId(id);
  };

  const leaveProductView = (sectionId) => {
    pendingScroll.current = sectionId;
    if (window.history.state?.solution) window.history.back(); // popstate restores the homepage
    else setSelectedId(null);
  };

  // Navbar links: scroll on the homepage, or return to it first from the product view
  const goTo = (id) => {
    if (selectedId) leaveProductView(id);
    else document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 antialiased font-sans selection:bg-gold-500 selection:text-slate-900">
      <Navbar onNavigate={goTo} onSelectSolution={selectSolution} inProductView={!!selected} />
      <main className="flex-1">
        {selected ? (
          <>
            <ProductView key={selected.id} division={selected} onBack={() => leaveProductView('solutions')} />
            <InquirySection solutionName={selected.shortName} />
          </>
        ) : (
          <>
            <Hero />
            <AboutSection />
            <MissionSection />
            <SolutionsSection onSelect={selectSolution} />
            <InquirySection />
            <ContactSection />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
