/**
 * Homepage division card, full-bleed photo style.
 * Photo -> bottom navy fade -> title -> subtitle -> pill button + counter.
 * The card has no effect on the page background; only the card itself is styled.
 * The whole card is clickable. index/total are optional and drive the "01 / 02" counter.
 */
function Arrow() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function SolutionCard({ division, isOpen, onToggle, index, total }) {
  const title = division.cardTitle || division.shortName;
  const subtitle = division.description || division.tagline;
  const showCount = Number.isInteger(index) && total > 1;
  const count = showCount
    ? `${String(index + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`
    : null;

  return (
    <article
      onClick={onToggle}
      className={`group relative isolate h-full w-full cursor-pointer overflow-hidden rounded-[28px] border bg-[#142d50] aspect-[4/4.3] min-h-[360px] shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(0,0,0,0.12)] ${isOpen ? 'border-sky-300 ring-2 ring-sky-300/60' : 'border-white/80'
        }`}
    >
      <img
        src={division.image}
        alt={division.imageAlt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* bottom-up navy fade keeps the text readable on any photo */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a1a3a] via-[#0a1a3a]/70 via-40% to-transparent to-65%" />

      <div className="absolute inset-x-0 bottom-0 p-5 text-left sm:p-7">
        <h3 title={title} className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl">
          {title}
        </h3>
        {subtitle && (
          <p className="mt-2 text-sm leading-snug text-slate-200 sm:text-base line-clamp-2">{subtitle}</p>
        )}

        <div className="mt-5 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onToggle();
            }}
            className="inline-flex items-center gap-3 rounded-full border border-sky-300/50 bg-[#0f2a55] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#143568] focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 sm:text-base"
          >
            <span>{isOpen ? 'Close' : 'View Products'}</span>
            <Arrow />
          </button>

          {count && (
            <div className="ml-auto flex items-center gap-3 text-sm text-slate-300">
              <span className="hidden h-px w-16 bg-white/40 sm:block" aria-hidden="true" />
              <span>{count}</span>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}