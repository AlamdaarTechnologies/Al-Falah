import React from 'react';
import { ArrowRight, MessageCircle, ShieldCheck, Award } from 'lucide-react';
import { businessInfo } from '../../data/businessInfo';
import { divisions } from '../../data/solutions';
import Button from '../common/Button';
import BrandLogo from '../common/BrandLogo';
import { buildWhatsAppLink } from '../../utils/whatsapp';

export default function Hero({ onExploreSolutions, onOpenInquiry, onSelectDivision }) {
  const whatsappUrl = buildWhatsAppLink("Hello Al Falah Hardware & Sanitary, I would like to get a product quotation.");

  return (
    <section className="relative bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 text-white border-b-2 border-gold-500/20 overflow-hidden">
      {/* Subtle Background Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Business Headline & Actions (7 cols) */}
          <div className="lg:col-span-7 space-y-4 text-left">
            
            {/* Top Badge */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-gold-400 bg-gold-500/10 px-3 py-1 rounded border border-gold-500/30 inline-flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
                <span>Certified Hardware & Sanitary Supplier</span>
              </span>
            </div>

            <div>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                {businessInfo.brandName}
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-gold-500 to-gold-300 rounded-full my-3"></div>
              <p className="text-base sm:text-lg font-bold text-slate-200">
                {businessInfo.tagline}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
              Supplying certified CPVC and UPVC pipes, ASTM brass valves, bathroom drainage fittings, and heavy-duty virgin HDPE bird netting for residential buildings, commercial complexes, and industrial sites.
            </p>

            {/* Practical CTAs */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <Button
                variant="gold"
                size="md"
                onClick={onExploreSolutions}
                icon={ArrowRight}
                iconPosition="right"
                className="font-extrabold shadow-lg shadow-gold-500/30 ring-1 ring-gold-400/50"
              >
                Explore Solutions
              </Button>

              <Button
                variant="whatsapp"
                size="md"
                as="a"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                icon={MessageCircle}
                className="font-bold"
              >
                WhatsApp Inquiry
              </Button>

              <Button
                variant="outline"
                size="md"
                onClick={onOpenInquiry}
                className="bg-white/10 border-white/40 text-white hover:bg-white hover:text-navy-950 hover:border-white backdrop-blur-sm"
              >
                Inquiry Form
              </Button>
            </div>
          </div>

          {/* Right Column: Two Business Divisions Quick Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-3.5">
            <div className="flex items-center justify-between">
              <p className="text-xs font-bold uppercase tracking-wider text-gold-400">
                Main Product Divisions:
              </p>
              <span className="text-[11px] text-slate-400 flex items-center gap-1">
                <Award className="w-3.5 h-3.5 text-gold-400" />
                Wholesale & Retail
              </span>
            </div>

            {divisions.map((div) => {
              const isBirdnet = div.id === 'birdnet-solutions';
              return (
                <div
                  key={div.id}
                  onClick={() => onSelectDivision(div)}
                  className="group bg-navy-900/80 backdrop-blur-sm border border-navy-700/80 hover:border-gold-500/60 rounded-md p-4 cursor-pointer transition-all duration-200 hover:shadow-lg hover:shadow-navy-950/50"
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-gold-400 transition-colors">
                      {div.badge}
                    </span>
                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded text-white ${
                      isBirdnet ? 'bg-emerald-800 border border-emerald-600/50' : 'bg-brand-900 border border-gold-500/40'
                    }`}>
                      {isBirdnet ? 'Netting & Spikes' : 'Piping & Valves'}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-gold-300 transition-colors mt-1.5">
                    {div.name}
                  </h3>

                  <p className="text-xs text-slate-300 line-clamp-2 mt-1 leading-relaxed">
                    {div.description}
                  </p>

                  <div className="mt-2.5 text-xs font-semibold text-gold-400 group-hover:text-gold-300 flex items-center gap-1">
                    <span>View catalogue & products →</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Operational Highlights Bar */}
        <div className="mt-10 pt-6 border-t border-navy-800/90 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
          {businessInfo.capabilities.map((cap, idx) => (
            <div key={idx} className="space-y-1 bg-navy-950/40 p-2.5 rounded border border-navy-800/50">
              <span className="font-bold text-white block text-xs">{cap.title}</span>
              <p className="text-slate-400 text-[11px] leading-normal">{cap.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
