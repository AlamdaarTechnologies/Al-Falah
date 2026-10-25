export default function ProductListItem({ product, onSelect }) {
  return (
    <article className="relative flex gap-4 sm:gap-6 bg-white border border-slate-200 rounded p-3 sm:p-4 hover:border-teal-600 transition-colors">
      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
        className="w-24 h-24 sm:w-44 sm:h-32 object-cover rounded bg-slate-200 shrink-0"
      />
      <div className="min-w-0 self-center">
        <h3 className="text-base sm:text-xl font-bold text-navy-900">
          <button
            type="button"
            onClick={() => onSelect(product.id)}
            className="text-left after:absolute after:inset-0 focus:outline-none focus-visible:after:ring-2 focus-visible:after:ring-teal-600 after:rounded"
          >
            {product.name}
          </button>
        </h3>
        <p className="mt-1 text-sm sm:text-base text-slate-600 leading-relaxed line-clamp-3">
          {product.shortDescription}
        </p>
      </div>
    </article>
  );
}
