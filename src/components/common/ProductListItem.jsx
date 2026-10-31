import { ArrowUpRight } from 'lucide-react';

export default function ProductListItem({ product, onSelect }) {
  return (
    <article 
      onClick={() => onSelect(product.id)}
      className="group relative flex flex-col sm:flex-row gap-4 sm:gap-6 bg-white border border-white/80 rounded-[22px] p-3.5 sm:p-4 cursor-pointer shadow-[0_8px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_14px_30px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-200"
    >
      <div className="w-full sm:w-40 h-36 sm:h-28 rounded-[16px] overflow-hidden bg-slate-100 shrink-0 relative">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="min-w-0 flex-1 flex flex-col justify-center">
        <div className="flex items-center justify-between gap-2">
          <h4 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-navy-900 transition-colors">
            {product.name}
          </h4>
          <span className="hidden sm:inline-flex items-center gap-0.5 text-xs font-semibold text-slate-700 group-hover:text-navy-900 group-hover:translate-x-0.5 transition-transform">
            View Details <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>

        <p className="mt-1 text-xs sm:text-sm text-slate-500 leading-relaxed line-clamp-2">
          {product.shortDescription}
        </p>

        {product.specifications && (
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {Object.entries(product.specifications).slice(0, 3).map(([key, val], idx) => (
              <span key={idx} className="px-2 py-0.5 rounded-md text-[11px] bg-slate-100 text-slate-600 font-medium">
                {key}: {val}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
