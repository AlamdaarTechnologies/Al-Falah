import { ArrowUpRight } from 'lucide-react';

export default function SolutionCard({ division, isOpen, onToggle, panelId }) {
  return (
    <article
      onClick={onToggle}
      className={`group relative bg-white rounded-[28px] sm:rounded-[32px] p-3.5 sm:p-4 pb-5 sm:pb-6 cursor-pointer border border-white/90 transition-all duration-300 ease-out flex flex-col justify-between ${
        isOpen
          ? 'ring-2 ring-navy-900/40 shadow-[0_20px_45px_rgba(0,0,0,0.12),0_4px_12px_rgba(0,0,0,0.05)] -translate-y-1'
          : 'shadow-[0_12px_32px_rgba(0,0,0,0.06),0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_22px_45px_rgba(0,0,0,0.11),0_6px_14px_rgba(0,0,0,0.05)] hover:-translate-y-2'
      }`}
    >
      {/* Top Image Container with Inner Smooth Curves & Badges (Matching Screenshot) */}
      <div className="relative w-full aspect-[4/3] rounded-[20px] sm:rounded-[22px] overflow-hidden bg-slate-100 shadow-inner">
        <img
          src={division.image}
          alt={division.imageAlt}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Floating Top-Right Badge (Matching '10$' tag in screenshot) */}
        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-sm text-xs font-bold text-slate-900 flex items-center gap-1 border border-white/80">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          {division.badge}
        </div>

        {/* Bottom Banner Strip Inside Image (Matching 'Free Delivery' green strip in screenshot) */}
        <div className={`absolute bottom-0 inset-x-0 ${division.bannerColor} backdrop-blur-sm py-2 px-3 text-center text-[11px] sm:text-xs font-medium tracking-wide flex items-center justify-center gap-1.5`}>
          <span>{division.bannerText}</span>
        </div>
      </div>

      {/* Card Details Body */}
      <div className="pt-4 sm:pt-5 px-1 sm:px-2 flex-1 flex flex-col justify-between">
        <div>
          {/* Header row with Title and 'Order Now ↗' styled action link */}
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              {division.shortName}
            </h3>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onToggle();
              }}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="inline-flex items-center gap-0.5 text-xs sm:text-sm font-semibold text-slate-900 hover:text-navy-900 border-b border-slate-900 pb-0.5 transition-all group-hover:translate-x-0.5"
            >
              <span>{isOpen ? 'Close' : 'View Products'}</span>
              <ArrowUpRight className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`} />
            </button>
          </div>

          {/* Description */}
          <p className="mt-2 text-xs sm:text-sm text-slate-500 leading-relaxed font-normal line-clamp-2">
            {division.description}
          </p>
        </div>

        {/* Feature Pills Row (Matching matcha pills row in screenshot) */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap gap-1.5 sm:gap-2">
          {division.tags?.map((tag, idx) => (
            <span
              key={idx}
              className="px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-medium bg-[#edf0f3] text-slate-700 hover:bg-[#e2e7ec] transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}