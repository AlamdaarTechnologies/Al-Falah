import React from 'react';
import SectionHeading from '../components/common/SectionHeading';
import AboutSection from '../components/sections/AboutSection';
import WhatsAppInquirySection from '../components/sections/WhatsAppInquirySection';
import { businessInfo } from '../data/businessInfo';
import Button from '../components/common/Button';
import { buildWhatsAppLink } from '../utils/whatsapp';

export default function AboutPage({ onNavigate }) {
  const whatsappUrl = buildWhatsAppLink("Hello Al Falah Team, I would like to learn more about your supply terms.");

  return (
    <div>
      {/* Banner */}
      <div className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 text-white py-10 sm:py-14 border-b-2 border-gold-500/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gold-500/5 rounded-full blur-2xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-wider text-gold-400 bg-gold-500/10 px-3 py-1 rounded border border-gold-500/30 inline-block mb-3">
            Company Background & Distribution
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            About {businessInfo.brandName}
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
            Established supplier of certified CPVC/UPVC piping systems, brass valves, sanitary drainage accessories, and high-tensile birdnet protection solutions.
          </p>
        </div>
      </div>

      {/* Main About Component */}
      <AboutSection onNavigateToInquiry={() => onNavigate('inquiry')} />

      {/* Supply & Standards Table */}
      <section className="py-10 sm:py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Material Integrity"
            title="Quality Standards & Supply Practices"
            subtitle="Strict testing guidelines ensure reliable, leak-free plumbing performance and weather-durable netting."
            centered={false}
          />

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
            <div className="bg-white p-4 rounded border border-slate-200">
              <h3 className="font-bold text-slate-900 text-sm mb-1">Standard ISI & BIS Batches</h3>
              <p className="text-slate-600 leading-relaxed">
                Pipes, fittings, and valves comply with standard Bureau of Indian Standards (BIS) and ASTM classifications for pressure thresholds and potable water safety.
              </p>
            </div>

            <div className="bg-white p-4 rounded border border-slate-200">
              <h3 className="font-bold text-slate-900 text-sm mb-1">UV Virgin HDPE Netting</h3>
              <p className="text-slate-600 leading-relaxed">
                Our Royal Birdnet division stocks exclusively UV-stabilized virgin polymer monofilaments, ensuring high breaking strength and long life under strong sunlight.
              </p>
            </div>

            <div className="bg-white p-4 rounded border border-slate-200">
              <h3 className="font-bold text-slate-900 text-sm mb-1">Direct Wholesale Logistics</h3>
              <p className="text-slate-600 leading-relaxed">
                Ready warehouse stock allows quick turnaround for local plumber counter pickups as well as bulk transport dispatch for outstation construction sites.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <Button
              variant="whatsapp"
              size="sm"
              as="a"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold"
            >
              Contact Wholesale Desk on WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* WhatsApp Inquiry */}
      <WhatsAppInquirySection />
    </div>
  );
}
