import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingWhatsApp from './components/layout/FloatingWhatsApp';

import HomePage from './pages/HomePage';
import DivisionPage from './pages/DivisionPage';
import ProductsPage from './pages/ProductsPage';
import AboutPage from './pages/AboutPage';
import BrochuresPage from './pages/BrochuresPage';
import ContactPage from './pages/ContactPage';

import ProductDetailModal from './components/common/ProductDetailModal';
import BrochureViewerModal from './components/common/BrochureViewerModal';
import { divisions } from './data/solutions';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedDivision, setSelectedDivision] = useState(divisions[0]);
  const [activeProductModal, setActiveProductModal] = useState(null);
  const [activeBrochureModal, setActiveBrochureModal] = useState(null);

  // Navigate to division page
  const handleOpenDivision = (division) => {
    setSelectedDivision(division);
    setActivePage('division');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Open product details modal
  const handleOpenProductDetails = (product) => {
    setActiveProductModal(product);
  };

  // Open brochure preview modal
  const handleViewBrochure = (brochure) => {
    setActiveBrochureModal(brochure);
  };

  // Global navigation handler
  const handleNavigate = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased font-sans selection:bg-brand-600 selection:text-white">
      {/* 1. Global Navigation Bar */}
      <Navbar
        activePage={activePage}
        setActivePage={handleNavigate}
        onOpenDivision={handleOpenDivision}
      />

      {/* 2. Main Page Content View */}
      <main className="flex-1">
        {activePage === 'home' && (
          <HomePage
            onSelectDivision={handleOpenDivision}
            onOpenProductDetails={handleOpenProductDetails}
            onViewBrochure={handleViewBrochure}
            onNavigate={handleNavigate}
          />
        )}

        {activePage === 'division' && (
          <DivisionPage
            division={selectedDivision}
            onBack={() => handleNavigate('solutions')}
            onOpenProductDetails={handleOpenProductDetails}
            onViewBrochure={handleViewBrochure}
          />
        )}

        {activePage === 'solutions' && (
          <HomePage
            onSelectDivision={handleOpenDivision}
            onOpenProductDetails={handleOpenProductDetails}
            onViewBrochure={handleViewBrochure}
            onNavigate={handleNavigate}
          />
        )}

        {activePage === 'products' && (
          <ProductsPage
            onOpenProductDetails={handleOpenProductDetails}
          />
        )}

        {activePage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
          />
        )}

        {activePage === 'brochures' && (
          <BrochuresPage
            onViewBrochure={handleViewBrochure}
          />
        )}

        {activePage === 'inquiry' && (
          <ContactPage />
        )}

        {activePage === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* 3. Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenDivision={handleOpenDivision}
      />

      {/* 4. Floating WhatsApp Quick Action Button */}
      <FloatingWhatsApp />

      {/* 5. Product Details Modal */}
      {activeProductModal && (
        <ProductDetailModal
          product={activeProductModal}
          onClose={() => setActiveProductModal(null)}
          onOpenBrochure={() => {
            const div = divisions.find(d => d.id === activeProductModal.divisionId) || divisions[0];
            setActiveProductModal(null);
            handleViewBrochure(div.brochure);
          }}
        />
      )}

      {/* 6. Brochure Preview Modal */}
      {activeBrochureModal && (
        <BrochureViewerModal
          brochure={activeBrochureModal}
          onClose={() => setActiveBrochureModal(null)}
        />
      )}
    </div>
  );
}
