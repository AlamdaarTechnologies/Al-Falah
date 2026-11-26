import { useState, useEffect } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { royalBirdnetServices } from '../../data/services';

const ROTATE_INTERVAL_MS = 3800;

/**
 * Main Services Display:
 * Displays ONLY ONE main service card in the Services section.
 * Contains multiple service-related images that automatically rotate in a smooth slideshow.
 * Entire card is clickable to open the dedicated Services listing view.
 */
export default function ServicesSection({ onOpenServices }) {
  const [activeIdx, setActiveIdx] = useState(0);

  // Take the key showcase services for image rotation
  const rotatingServices = royalBirdnetServices.slice(0, 5);

  useEffect(() => {
    if (rotatingServices.length <= 1) return;
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % rotatingServices.length);
    }, ROTATE_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [rotatingServices.length]);

  return (
    <section className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-slate-200/90" aria-labelledby="services-section-heading">
      {/* Section Header */}
      <div className="mb-6 sm:mb-8 text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-50 text-navy-800 text-xs font-semibold uppercase tracking-wider mb-2 border border-navy-100">
          <Sparkles size={13} className="text-gold-500" />
          <span>Professional Installation</span>
        </div>
        <h2
          id="services-section-heading"
          className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-navy-900"
        >
          Our Services
        </h2>
        <p className="mt-1.5 text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
          Certified on-site netting, pigeon spikes, sports enclosures, and safety solutions executed by experienced technicians.
        </p>
      </div>

      {/* SINGLE MAIN SERVICES CARD WITH ROTATING IMAGES */}
      <div
        role="button"
        tabIndex={0}
        onClick={onOpenServices}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onOpenServices?.();
          }
        }}
        aria-label="View our complete services listing"
        className="group relative w-full rounded-[26px] sm:rounded-[34px] overflow-hidden cursor-pointer bg-[#0f2444] shadow-[0_16px_40px_rgba(8,31,65,0.12)] hover:shadow-[0_24px_55px_rgba(8,31,65,0.2)] transition-all duration-300 hover:-translate-y-1 border border-white/80 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-400"
      >
        {/* Rotating Image Background Container */}
        <div className="relative w-full aspect-[16/10] sm:aspect-[21/9] min-h-[300px] sm:min-h-[360px] overflow-hidden">
          {rotatingServices.map((service, index) => (
            <div
              key={service.id || index}
              className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
              style={{
                opacity: index === activeIdx ? 1 : 0,
                zIndex: index === activeIdx ? 1 : 0,
              }}
            >
              <img
                src={service.image}
                alt={service.name}
                loading={index === 0 ? 'eager' : 'lazy'}
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          ))}

          {/* Deep Navy/Black Gradient Overlay for Text Readability */}
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background:
                'linear-gradient(to top, rgba(10,25,50,0.92) 0%, rgba(10,25,50,0.65) 45%, rgba(10,25,50,0.2) 100%)',
            }}
          />

          {/* Card Content Overlay */}
          <div className="absolute inset-0 z-20 flex flex-col justify-between p-6 sm:p-8 md:p-10">
            {/* Top Tag & Slide Indicators */}
            <div className="flex items-center justify-between gap-4">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs sm:text-sm font-semibold tracking-wide border border-white/30 shadow-sm">
                <span>Featured Services</span>
                <span className="text-white/60">•</span>
                <span className="text-gold-300 font-bold">{activeIdx + 1}/{rotatingServices.length}</span>
              </span>

              {/* Progress Dots */}
              <div className="flex items-center gap-1.5">
                {rotatingServices.map((_, i) => (
                  <span
                    key={i}
                    className="h-1.5 rounded-full transition-all duration-500"
                    style={{
                      width: i === activeIdx ? '22px' : '6px',
                      background: i === activeIdx ? '#f0b429' : 'rgba(255,255,255,0.4)',
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Bottom Content Area */}
            <div className="max-w-xl">
              <div className="transition-all duration-500">
                <p className="text-xs sm:text-sm font-medium uppercase tracking-widest text-sky-200 mb-1">
                  Currently Viewing
                </p>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                  {rotatingServices[activeIdx]?.name}
                </h3>
                <p className="mt-2 text-xs sm:text-sm md:text-base text-slate-200 line-clamp-2 leading-relaxed">
                  {rotatingServices[activeIdx]?.description}
                </p>
              </div>

              {/* Action Call to Action */}
              <div className="mt-5 sm:mt-6 flex items-center gap-3">
                <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-navy-900 text-sm font-bold shadow-md group-hover:bg-gold-400 group-hover:text-slate-950 transition-colors">
                  <span>View All Services</span>
                  <ArrowUpRight size={17} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
                <span className="text-xs sm:text-sm text-slate-300 font-medium hidden sm:inline">
                  Click to browse full services catalogue
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
