import { ArrowRight } from 'lucide-react';

/**
 * Product list card: full-bleed image, dark gradient at the bottom,
 * white capitalised title bottom-left, round arrow button bottom-right.
 * Used for every division (Royal Bird Net and Plumbing).
 * The dark base colour keeps the title readable even if an image fails to load.
 */
export default function ProductListItem({ product, onSelect }) {
  const open = () => onSelect(product.id);

  return (
    <article
      role="button"
      tabIndex={0}
      onClick={open}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          open();
        }
      }}
      className="group relative isolate aspect-[4/3] w-full overflow-hidden rounded-[28px] bg-navy-900 cursor-pointer shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_14px_30px_rgba(0,0,0,0.16)] hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
    >
      <img
        src={product.image}
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Gradient keeps the title legible on any image */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-navy-950 via-navy-950/70 to-transparent"
      />

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 sm:p-5">
        <h3 className="min-w-0 break-words font-sans text-[24px] font-bold uppercase leading-snug text-white [text-shadow:0_1px_4px_rgba(0,0,0,0.6)]">
          {product.name}
        </h3>

        <span
          aria-hidden="true"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy-900 text-white ring-1 ring-white/20 transition-colors group-hover:bg-navy-700"
        >
          <ArrowRight className="h-5 w-5" />
        </span>
        <span className="sr-only">View Details</span>
      </div>
    </article>
  );
}
