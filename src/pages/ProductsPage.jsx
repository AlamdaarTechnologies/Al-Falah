import React from 'react';
import ProductsSection from '../components/sections/ProductsSection';
import WhatsAppInquirySection from '../components/sections/WhatsAppInquirySection';
import { businessInfo } from '../data/businessInfo';

export default function ProductsPage({ onOpenProductDetails }) {
  return (
    <div>
      {/* Banner */}
      <div className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 text-white py-10 sm:py-14 border-b-2 border-gold-500/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gold-500/5 rounded-full blur-2xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-wider text-gold-400 bg-gold-500/10 px-3 py-1 rounded border border-gold-500/30 inline-block mb-3">
            Complete Product Catalogue
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            Plumbing Systems & Birdnet Materials
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
            Browse our full range of certified CPVC/UPVC pipes, brass valves, bathroom drainage fixtures, and high-tensile anti-bird netting.
          </p>
        </div>
      </div>

      {/* Main Catalogue */}
      <ProductsSection onOpenProductDetails={onOpenProductDetails} />

      {/* WhatsApp Inquiry */}
      <WhatsAppInquirySection />
    </div>
  );
}
