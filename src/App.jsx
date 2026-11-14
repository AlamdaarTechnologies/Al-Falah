
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

// Read the current view from the browser URL
function readRouteFromHash() {
  const hash = window.location.hash.slice(1);

  // Product view: #product/product-id
  if (hash.startsWith('product/')) {
    const id = decodeURIComponent(hash.slice(8));

    const exists = divisions.some((division) => division.id === id);

    if (exists) {
      return { solution: id, section: null };
    }

    return { solution: null, section: 'solutions' };
  }

  // Homepage sections
  const sections = [
    'home',
    'about',
    'mission',
    'solutions',
    'inquiry',
    'contact'
  ];

  return {
    solution: null,
    section: sections.includes(hash) ? hash : null
  };
}

export default function App() {
  // Initialize the selected view from the URL
  const [initialRoute] = useState(readRouteFromHash);

  const [selectedId, setSelectedId] = useState(
    initialRoute.solution
  );

  const pendingScroll = useRef(initialRoute.section);

  const selected = divisions.find(
    (division) => division.id === selectedId
  );

  // Browser Back / Forward navigation
  useEffect(() => {
    const previousRestoration = window.history.scrollRestoration;

    window.history.scrollRestoration = 'manual';

    const onPop = () => {
      const route = readRouteFromHash();

      pendingScroll.current = route.section;

      setSelectedId(route.solution);

      // Return to the top if the URL has no recognized section
      if (!route.solution && !route.section) {
        window.scrollTo({ top: 0, behavior: 'auto' });
      }
    };

    window.addEventListener('popstate', onPop);

    return () => {
      window.removeEventListener('popstate', onPop);
      window.history.scrollRestoration = previousRestoration;
    };
  }, []);

  // Restore scroll position after switching views or refreshing
  // Restore the correct view after refresh or navigation
  useEffect(() => {
    if (selectedId) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    const sectionId = pendingScroll.current;

    if (!sectionId) return;

    // Wait until the page sections are rendered
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.getElementById(sectionId)?.scrollIntoView({
          behavior: 'auto',
          block: 'start',
        });

        pendingScroll.current = null;
      });
    });
  }, [selectedId]);

  // Open a particular product
  const selectSolution = (id) => {
    window.history.pushState(
      { solution: id },
      '',
      `#product/${encodeURIComponent(id)}`
    );

    setSelectedId(id);
  };

  // Return to homepage and navigate to the requested section
  const leaveProductView = (sectionId) => {
    pendingScroll.current = sectionId;

    window.history.pushState(
      { section: sectionId },
      '',
      `#${sectionId}`
    );

    setSelectedId(null);
  };

  // Navbar navigation
  const goTo = (id) => {
    if (selectedId) {
      leaveProductView(id);
      return;
    }

    window.history.pushState(
      { section: id },
      '',
      `#${id}`
    );

    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-[#fafafa] text-slate-800 antialiased font-sans selection:bg-gold-500 selection:text-slate-900 overflow-x-hidden">

      <Navbar
        onNavigate={goTo}
        onSelectSolution={selectSolution}
        inProductView={!!selected}
      />

      <main className="flex-1">
        {selected ? (
          <>
            <ProductView
              key={selected.id}
              division={selected}
            />

            <InquirySection
              solutionName={selected.shortName}
            />
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
