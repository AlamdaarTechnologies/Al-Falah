import { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingWhatsApp from './components/layout/FloatingWhatsApp';
import Hero from './components/sections/Hero';
import SolutionsSection from './components/sections/SolutionsSection';
import WhatsAppInquirySection from './components/sections/WhatsAppInquirySection';
import ContactSection from './components/sections/ContactSection';
import ProductDetailModal from './components/common/ProductDetailModal';

export default function App() {
  const [activeProduct, setActiveProduct] = useState(null);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased font-sans selection:bg-brand-600 selection:text-white">
      <Navbar />

      <main className="flex-1">
        <Hero />
        <SolutionsSection onOpenProductDetails={setActiveProduct} />
        <WhatsAppInquirySection />
        <ContactSection />
      </main>

      <Footer />
      <FloatingWhatsApp />

      {activeProduct && (
        <ProductDetailModal product={activeProduct} onClose={() => setActiveProduct(null)} />
      )}
    </div>
  );
}
