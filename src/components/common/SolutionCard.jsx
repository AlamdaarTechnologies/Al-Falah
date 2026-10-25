import { ChevronDown } from 'lucide-react';

export default function SolutionCard({ division, isOpen, onToggle, panelId }) {
  return (
    <article
      onClick={onToggle}
      className={`bg-white rounded border overflow-hidden cursor-pointer transition-colors hover:border-teal-600 ${isOpen ? 'border-teal-600 ring-1 ring-teal-600 md:flex' : 'border-slate-200'
        }`}
    >
      <img
        src={division.image}
        alt={division.imageAlt}
        loading="lazy"
        className={`w-full object-cover bg-slate-200 ${isOpen ? 'h-48 sm:h-56 md:h-auto md:w-80 shrink-0' : 'h-48 sm:h-60'
          }`}
      />
      <div className="p-6 sm:p-8 lg:p-10 md:flex-1">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-navy-900">
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); onToggle(); }}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 rounded"
            >
              {division.shortName}
            </button>
          </h3>
          <ChevronDown aria-hidden="true" className={`w-6 h-6 shrink-0 mt-1 text-teal-600 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </div>
        <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">{division.description}</p>
      </div>
    </article>
  );
}