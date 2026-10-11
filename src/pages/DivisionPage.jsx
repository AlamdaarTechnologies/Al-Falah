import React from 'react';
import { ArrowLeft, Download, MessageCircle } from 'lucide-react';
import SectionHeading from '../components/common/SectionHeading';
import ProductCard from '../components/common/ProductCard';
import Button from '../components/common/Button';
import BrochureCard from '../components/common/BrochureCard';
import WhatsAppInquirySection from '../components/sections/WhatsAppInquirySection';
import { products } from '../data/products';
import { getDivisionInquiryUrl } from '../utils/whatsapp';

export default function DivisionPage({ 
  division, 
  onBack, 
  onOpenProductDetails, 
  onViewBrochure 
}) {
  if (!division) return null;

  const isBirdnet = division.id === 'birdnet-solutions';
  const divisionProducts = products.filter(p => p.divisionId === division.id);
  const divisionInquiryUrl = getDivisionInquiryUrl(division.name);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Return Bar */}
      <div className="bg-navy-950 text-white py-2.5 px-4 sm:px-8 border-b border-gold-500/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs sm:text-sm">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-1.5 font-semibold text-slate-300 hover:text-gold-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Solutions</span>
          </button>

          <div className="flex items-center gap-2 text-slate-400 text-xs">
            <span>AL FALAH</span>
            <span>/</span>
            <span className="text-gold-400 font-bold">{division.name}</span>
          </div>
        </div>
      </div>

      {/* Division Banner */}
      <section className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 text-white py-10 sm:py-14 border-b-2 border-gold-500/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gold-500/5 rounded-full blur-2xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-400 bg-gold-500/10 px-2.5 py-1 rounded inline-block border border-gold-500/30 mb-3">
              {division.badge}
            </span>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              {division.name}
            </h1>

            <p className="mt-2 text-base sm:text-lg font-semibold text-slate-200">
              {division.tagline}
            </p>

            <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
              {division.overview}
            </p>

            {/* Quick Actions */}
            <div className="mt-6 flex flex-wrap items-center gap-2.5">
              <Button
                variant="whatsapp"
                size="md"
                as="a"
                href={divisionInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                icon={MessageCircle}
                className="font-bold"
              >
                Inquire for {division.shortName}
              </Button>

              <Button
                variant="outline"
                size="md"
                onClick={() => onViewBrochure && onViewBrochure(division.brochure)}
                icon={Download}
                className="bg-navy-800 border-navy-700 text-slate-200 hover:bg-navy-700 hover:text-white hover:border-gold-500/40"
              >
                View Catalogue ({division.brochure.fileSize})
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Advantages */}
      <section className="py-10 sm:py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-6">
            Technical Standards & Features:
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {division.advantages.map((adv, idx) => (
              <div key={idx} className="p-4 rounded bg-slate-50 border border-slate-200">
                <h3 className="text-sm font-bold text-slate-900 mb-1">{adv.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{adv.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-slate-100/80 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
            <h2 className="text-base font-bold text-slate-900">Categories in this Division</h2>
            <span className="text-xs text-slate-500 font-medium">
              {division.categories.length} Specialized Lines
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
            {division.categories.map((cat, idx) => (
              <div key={idx} className="p-3 bg-white border border-slate-200 rounded text-xs font-bold text-slate-800 text-center">
                {cat}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Division Products */}
      <section className="py-12 sm:py-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-gold-600">
                Inventory
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-0.5">
                {division.name} — Product Items
              </h2>
            </div>
            <p className="text-xs text-slate-500 max-w-sm">
              Click "View Details" to check dimensions and request wholesale rates.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {divisionProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOpenDetails={onOpenProductDetails}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Division Brochure */}
      <section className="py-10 sm:py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-bold text-slate-900 mb-5">
            Technical Catalogue — {division.name}
          </h2>
          <div className="max-w-3xl">
            <BrochureCard
              divisionName={division.name}
              title={division.brochure.title}
              edition={division.brochure.edition}
              fileSize={division.brochure.fileSize}
              format={division.brochure.format}
              pages={division.brochure.pages}
              coverImage={division.brochure.coverImage}
              description={`Official catalogue for ${division.name}, including product codes, technical parameters, and application guidelines.`}
              onViewBrochure={onViewBrochure}
            />
          </div>
        </div>
      </section>

      {/* Pre-filled WhatsApp Inquiry */}
      <WhatsAppInquirySection prefilledDivision={division.name} />
    </div>
  );
}
