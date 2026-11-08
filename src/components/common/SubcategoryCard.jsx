/** Image tile with the name underneath. Same card styling as ProductListItem. */
export default function SubcategoryCard({ item, onSelect }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(item.id)}
      className="group flex flex-col gap-3 sm:gap-4 w-full text-left bg-white border border-white/80 rounded-[22px] p-3 sm:p-4 cursor-pointer shadow-[0_8px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_14px_30px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
    >
      <span className="block w-full aspect-[4/3] rounded-[10px] overflow-hidden bg-slate-100">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </span>
      <span className="px-1 pb-1 font-sans text-base sm:text-lg font-semibold text-slate-900 group-hover:text-navy-900 transition-colors leading-snug">
        {item.name}
      </span>
    </button>
  );
}
