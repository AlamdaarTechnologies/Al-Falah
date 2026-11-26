/**
 * Non-clickable vertical visual showcase for Sports Net products.
 * Displays Cricket Net, Turf Net, Badminton Net, and Volleyball Net
 * one below another with high-visibility image and clean typography.
 */
export default function SportsNetShowcase({ items = [] }) {
  if (!items || items.length === 0) return null;

  return (
    <div className="flex flex-col gap-6 sm:gap-8 max-w-2xl mx-auto w-full">
      {items.map((item, index) => (
        <article
          key={item.id || index}
          className="bg-white rounded-[24px] sm:rounded-[28px] overflow-hidden border border-slate-100 shadow-[0_10px_30px_rgba(8,31,65,0.05)] transition-all duration-300"
        >
          {/* Product Image Container */}
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-slate-50 overflow-hidden border-b border-slate-100/80">
            <img
              src={item.image}
              alt={item.name}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Name Display (Non-clickable) */}
          <div className="p-5 sm:p-6 bg-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <h3 className="text-xl sm:text-2xl font-bold text-navy-900 tracking-tight">
              {item.name}
            </h3>
            <span className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-slate-400 bg-slate-50 px-3 py-1 rounded-full border border-slate-200/60 w-fit">
              Product Display
            </span>
          </div>
        </article>
      ))}
    </div>
  );
}
