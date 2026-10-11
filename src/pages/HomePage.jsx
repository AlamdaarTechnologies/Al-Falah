import React from 'react';
import Hero from '../components/sections/Hero';
import AboutSection from '../components/sections/AboutSection';
import SolutionsSection from '../components/sections/SolutionsSection';
import ProductsSection from '../components/sections/ProductsSection';
import BrochuresSection from '../components/sections/BrochuresSection';
import WhatsAppInquirySection from '../components/sections/WhatsAppInquirySection';
import ContactSection from '../components/sections/ContactSection';

export default function HomePage({
  onSelectDivision,
  onOpenProductDetails,
  onViewBrochure,
  onNavigate
}) {
  return (
    <div>
      {/* 1. Hero Section */}
      <Hero
        onExploreSolutions={() => {
          const el = document.getElementById('solutions');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenInquiry={() => {
          const el = document.getElementById('inquiry');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onSelectDivision={onSelectDivision}
      />

      {/* 2. About Section */}
      <AboutSection
        onNavigateToInquiry={() => {
          const el = document.getElementById('inquiry');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 3. Solutions / Business Divisions */}
      <SolutionsSection
        onExploreDivision={onSelectDivision}
        onOpenBrochure={onViewBrochure}
      />

      {/* 4. Products Catalogue Section */}
      <ProductsSection
        onOpenProductDetails={onOpenProductDetails}
      />

      {/* 5. Brochures & Catalogues Section */}
      <BrochuresSection
        onViewBrochure={onViewBrochure}
      />

      {/* 6. WhatsApp Inquiry Section */}
      <WhatsAppInquirySection />

      {/* 7. Contact & Store Location Section */}
      <ContactSection />
    </div>
  );
}
