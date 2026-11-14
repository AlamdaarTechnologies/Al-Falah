

/**
 * Homepage division card.
 * Reading order: image -> title -> tags -> action. The whole card is clickable.
 */
export default function SolutionCard({ division, isOpen, onToggle }) {
  const title = division.cardTitle || division.shortName;

  return (
    <article
      onClick={onToggle}
      className={`group relative h-full bg-white rounded-2xl p-3 sm:p-3.5 cursor-pointer border transition-all duration-200 ease-out flex flex-col shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:-translate-y-0.5 hover:shadow-[0_6px_16px_rgba(0,0,0,0.07)] ${isOpen
        ? 'border-navy-900/40 ring-1 ring-navy-900/30'
        : 'border-[#E5E7EB] hover:border-slate-300'
        }`}
    >
      {/* Image (inset, softly rounded) */}
      <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-100">
        <img
          src={division.image}
          alt={division.imageAlt}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {division.bannerText && (
          <div className={`absolute bottom-0 inset-x-0 ${division.bannerColor || ''} backdrop-blur-sm py-2 px-3 text-center text-[11px] sm:text-xs font-medium tracking-wide flex items-center justify-center gap-1.5`}>
            <span>{division.bannerText}</span>
          </div>
        )}
      </div>

      {/* Details, left aligned */}
      <div className="pt-3.5 px-1 flex-1 flex flex-col text-left">
        <h3 title={title} className="text-2xl sm:text-3xl font-semibold leading-snug text-[#111827] tracking-tight">
          {title}
        </h3>

        {division.description && (
          <p className="mt-1.5 text-xs sm:text-sm text-slate-500 leading-relaxed line-clamp-2">
            {division.description}
          </p>
        )}

        {/* Tags */}
        <div className="mt-3 flex flex-wrap justify-start gap-1.5">
          {division.tags?.slice(0, 3).map((tag, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 rounded-md text-[11px] sm:text-xs font-medium leading-5 bg-[#F8FAFC] text-slate-600 border border-[#E2E8F0]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action pinned to the bottom of the card */}
        <div className="mt-auto pt-4">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onToggle();
            }}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1E293B] hover:text-navy-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 rounded"
          >
            <span>{isOpen ? 'Close' : 'View Products'}</span>
          </button>
        </div>
      </div>
    </article>
  );
}
