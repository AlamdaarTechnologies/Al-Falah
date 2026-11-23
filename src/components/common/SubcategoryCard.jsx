import { typo } from './productFormat';

/**
 * Subcategory card — full-width horizontal row (image left, name right).
 * Used in vertical single-column lists (Sports Net, Mosquito Net, Fiberglass Mesh, etc.)
 */
export default function SubcategoryCard({ item, onSelect }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(item.id)}
      className="group flex flex-row items-center gap-4 sm:gap-6 w-full text-left bg-white border border-white/80 rounded-[22px] p-3.5 sm:p-4 cursor-pointer shadow-[0_8px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_14px_30px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
    >
      {/* Image on the left */}
      <span className="block w-28 sm:w-36 h-20 sm:h-24 rounded-[10px] overflow-hidden bg-slate-100 shrink-0">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </span>

      {/* Title on the right, vertically centred */}
      <span className={`font-sans min-w-0 ${typo.title}`}>
        {item.name}
      </span>
    </button>
  );
}
