import { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import MissionSection from './components/sections/MissionSection';
import AboutSection from './components/sections/AboutSection';
import SolutionsSection from './components/sections/SolutionsSection';
import ContactSection from './components/sections/ContactSection';

export default function App() {
  const [openSolutionId, setOpenSolutionId] = useState(null);

  // Used by the navbar dropdown: open that solution, then scroll to the section
  const handleSelectSolution = (id) => {
    setOpenSolutionId(id);
    setTimeout(() => {
      document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 antialiased font-sans selection:bg-gold-500 selection:text-slate-900">
      <Navbar onSelectSolution={handleSelectSolution} />
      <main className="flex-1">
        <Hero />
        <AboutSection />
        <MissionSection />
        <SolutionsSection openId={openSolutionId} setOpenId={setOpenSolutionId} />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
