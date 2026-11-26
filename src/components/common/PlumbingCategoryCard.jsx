import { ArrowUpRight } from 'lucide-react';

/**
 * Category Card for the 6 Plumbing categories.
 * Features relevant visual, category title, short description, and clear action.
 */
export default function PlumbingCategoryCard({ category, onSelect }) {
  return (
    <article
      onClick={() => onSelect(category.id)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(category.id);
        }
      }}
      className="group relative flex flex-col justify-between w-full bg-white rounded-[24px] sm:rounded-[28px] overflow-hidden border border-slate-200/80 shadow-[0_8px_24px_rgba(8,31,65,0.06)] hover:shadow-[0_18px_40px_rgba(8,31,65,0.12)] hover:-translate-y-1 transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-500"
    >
      {/* Category Visual */}
      <div className="relative w-full aspect-[16/10] bg-slate-100 overflow-hidden border-b border-slate-100">
        <img
          src={category.image}
          alt={category.name}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 bg-[#142D50]/90 backdrop-blur-sm text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          Category 0{category.order}
        </div>
      </div>

      {/* Category Text & Action */}
      <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-navy-900 tracking-tight leading-snug group-hover:text-sky-700 transition-colors">
            {category.name}
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
            {category.shortDescription}
          </p>
        </div>

        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            {category.products?.length || 10} Products
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-navy-900 group-hover:text-sky-600 transition-colors">
            <span>View Products</span>
            <ArrowUpRight size={15} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </article>
  );
}
