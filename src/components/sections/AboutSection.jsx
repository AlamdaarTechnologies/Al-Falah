import React from 'react';
import { businessInfo } from '../../data/businessInfo';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import BrandLogo from '../common/BrandLogo';

export default function AboutSection({ onNavigateToInquiry }) {
  return (
    <section id="about" className="py-12 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left: Introduction & Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <SectionHeading
              badge="About Our Business"
              title="Supplying Quality Plumbing Materials & Bird Protection Solutions"
              subtitle="Wholesale distributor and counter retailer serving plumbing contractors, builders, societies, and commercial establishments."
            />

            <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed pt-1">
              <p>
                <strong>{businessInfo.brandName}</strong> operates two dedicated product divisions to cater to both fluid piping infrastructure and architectural bird protection. We maintain ready stock of high-demand pipes, valves, sanitary accessories, and heavy HDPE netting.
              </p>
              <p>
                Our inventory is selected to match Indian construction specifications and municipal plumbing guidelines. We provide direct itemized quotations on WhatsApp, helping contractors calculate bill-of-quantities (BOQ) with accurate wholesale pricing.
              </p>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <Button
                variant="primary"
                size="sm"
                onClick={onNavigateToInquiry}
                className="font-semibold"
              >
                Send Your Material List
              </Button>
            </div>
          </div>

          {/* Right: Brand Visual & Operational Capabilities Table (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Brand Banner Card */}
            <div className="rounded-lg overflow-hidden border border-slate-200 shadow-sm bg-navy-950 group">
              <img 
                src="/images/banner.jpg" 
                alt="Al Falah Hardware & Sanitary Official Banner"
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-102"
              />
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 space-y-2.5">
              <h3 className="text-xs font-bold text-navy-900 uppercase tracking-wider flex items-center justify-between">
                <span>Supply Capabilities</span>
                <span className="text-gold-600 font-bold text-[11px]">Certified Standards</span>
              </h3>

              <div className="divide-y divide-slate-200/80 text-xs sm:text-sm">
                <div className="py-2">
                  <span className="font-bold text-navy-950 block text-xs">Product Quality & Standards</span>
                  <p className="text-slate-600 text-xs mt-0.5">CPVC/UPVC pipes compliant with IS 15778 / ASTM D2846; Virgin HDPE netting with UV stabilization.</p>
                </div>

                <div className="py-2">
                  <span className="font-bold text-navy-950 block text-xs">Counter & Bulk Inquiries</span>
                  <p className="text-slate-600 text-xs mt-0.5">Immediate counter pickup available for local plumbers; truckload site delivery for builders and developers.</p>
                </div>

                <div className="py-2">
                  <span className="font-bold text-navy-950 block text-xs">Fast WhatsApp Quotation</span>
                  <p className="text-slate-600 text-xs mt-0.5">Share pipe sizes, valve quantities, or balcony square footage to receive itemized rate sheets.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
