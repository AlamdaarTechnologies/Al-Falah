import { ChevronDown } from 'lucide-react';

export default function SolutionCard({ division, isOpen, onToggle, panelId }) {
  return (
    <article
      id={`solution-${division.id}`}
      className={`bg-white rounded border overflow-hidden shadow-sm transition-colors ${isOpen ? 'border-gold-500 ring-1 ring-gold-500 md:flex' : 'border-slate-200'
        }`}
    >
      <img
        src={division.image}
        alt={division.imageAlt}
        className={`w-full object-cover bg-slate-200 ${isOpen ? 'h-48 sm:h-56 md:h-auto md:w-80 shrink-0' : 'h-48 sm:h-56'
          }`}
        loading="lazy"
      />
      <div className={`p-5 sm:p-6 ${isOpen ? 'md:flex md:flex-col md:justify-center' : ''}`}>
        <h3 className="text-xl sm:text-2xl font-bold text-navy-950">{division.shortName}</h3>
        <p className="mt-2 text-sm text-slate-600 leading-relaxed">{division.description}</p>
        <div className="mt-4">
          <button
            type="button"
            onClick={onToggle}
            aria-expanded={isOpen}
            aria-controls={panelId}
            className="inline-flex items-center gap-2 px-4 py-2 rounded bg-navy-900 hover:bg-navy-800 text-white text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
          >
            {isOpen ? 'Hide Products' : 'View Products'}
            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>
    </article>
  );
}
