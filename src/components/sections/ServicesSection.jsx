import { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { royalBirdnetServices } from '../../data/services';
import { getServiceInquiryUrl } from '../../utils/whatsapp';

/* ─── constants ─────────────────────────────────────────────────────────── */
const AUTOPLAY_MS = 4500;
const TRANSITION_MS = 500;

/* ─── helpers ─────────────────────────────────────────────────────────── */
function waLink(service) {
  return getServiceInquiryUrl(service.name);
}

/* ─── FeaturedCarousel ─────────────────────────────────────────────────── */
function FeaturedCarousel({ services, active, setActive, paused, setPaused }) {
  const total = services.length;

  const next = useCallback(() => {
    setActive((i) => (i + 1) % total);
  }, [total, setActive]);

  const prev = () => {
    setPaused(true);
    setActive((i) => (i - 1 + total) % total);
  };
  const handleNext = () => {
    setPaused(true);
    next();
  };

  /* autoplay */
  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, next]);

  /* touch swipe */
  const touchStartX = useRef(null);
  const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(dx) < 40) return;
    setPaused(true);
    if (dx < 0) next(); else setActive((i) => (i - 1 + total) % total);
  };

  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg"
      style={{ aspectRatio: '16/8' }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* slides */}
      {services.map((s, i) => (
        <a
          key={s.id}
          href={waLink(s)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Enquire about ${s.name}`}
          className="absolute inset-0 block"
          style={{
            opacity: i === active ? 1 : 0,
            transition: `opacity ${TRANSITION_MS}ms ease`,
            pointerEvents: i === active ? 'auto' : 'none',
            zIndex: i === active ? 1 : 0,
          }}
        >
          <img
            src={s.image}
            alt={s.name}
            className="absolute inset-0 w-full h-full object-cover"
            loading={i === 0 ? 'eager' : 'lazy'}
          />
          {/* gradient */}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)' }}
          />
          {/* text */}
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 pb-10 sm:pb-10">
            <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-white/65 mb-1">
              Our Services
            </p>
            <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-white leading-tight">
              {s.name}
            </h3>
            {s.description && (
              <p className="mt-1 text-xs sm:text-sm text-white/80 leading-snug line-clamp-2 max-w-lg">
                {s.description}
              </p>
            )}
            <span className="mt-2.5 inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white/90">
              Enquire on WhatsApp <ArrowUpRight size={13} />
            </span>
          </div>
        </a>
      ))}

      {/* prev / next arrows */}
      <button
        onClick={prev}
        aria-label="Previous service"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/20 backdrop-blur-sm hover:bg-black/40 active:bg-black/50 transition-colors"
      >
        <ChevronLeft size={20} className="text-white" />
      </button>
      <button
        onClick={handleNext}
        aria-label="Next service"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/20 backdrop-blur-sm hover:bg-black/40 active:bg-black/50 transition-colors"
      >
        <ChevronRight size={20} className="text-white" />
      </button>

      {/* dot indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
        {services.map((_, i) => (
          <button
            key={i}
            onClick={() => { setPaused(true); setActive(i); }}
            aria-label={`Go to slide ${i + 1}`}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === active ? '20px' : '7px',
              height: '7px',
              background: i === active ? '#fff' : 'rgba(255,255,255,0.45)',
            }}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── ServiceCard ─────────────────────────────────────────────────────────── */
function ServiceCard({ service }) {
  return (
    <a
      href={waLink(service)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Enquire about ${service.name}`}
      className="group relative flex-shrink-0 rounded-2xl overflow-hidden shadow-md cursor-pointer"
      style={{ width: '168px', height: '224px' }}
    >
      <img
        src={service.image}
        alt={service.name}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {/* gradient */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.25) 55%, transparent 100%)' }}
      />
      {/* text */}
      <div className="absolute bottom-0 left-0 right-0 p-3 pr-10">
        <p className="text-sm font-bold text-white leading-tight line-clamp-2">{service.name}</p>
      </div>
      {/* circular arrow */}
      <div className="absolute bottom-2.5 right-2.5 flex items-center justify-center w-8 h-8 rounded-full border-2 border-white/60 bg-[#142D50]/60 backdrop-blur-sm group-hover:bg-[#142D50] transition-colors">
        <ArrowUpRight size={14} className="text-white" />
      </div>
    </a>
  );
}

/* ─── ServicesSection (main export) ─────────────────────────────────────── */
export default function ServicesSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  if (!royalBirdnetServices || royalBirdnetServices.length === 0) return null;

  return (
    <section className="mt-10 sm:mt-14 pt-8 sm:pt-10 border-t border-slate-200" aria-labelledby="services-heading">
      {/* heading */}
      <div className="mb-5 sm:mb-6">
        <h2
          id="services-heading"
          className="text-2xl sm:text-3xl font-bold tracking-tight"
          style={{ color: '#142D50' }}
        >
          Our Services
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Tap any service to enquire directly on WhatsApp
        </p>
      </div>

      {/* featured carousel */}
      <FeaturedCarousel
        services={royalBirdnetServices}
        active={active}
        setActive={setActive}
        paused={paused}
        setPaused={setPaused}
      />

      {/* horizontal scrollable service cards */}
      <div
        className="mt-5 sm:mt-6 flex gap-3 sm:gap-4 overflow-x-auto pb-2"
        style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}
        onScroll={() => setPaused(true)}
      >
        {royalBirdnetServices.map((s) => (
          <ServiceCard key={s.id} service={s} />
        ))}
        {/* trailing spacer */}
        <div className="flex-shrink-0 w-1" />
      </div>
    </section>
  );
}
