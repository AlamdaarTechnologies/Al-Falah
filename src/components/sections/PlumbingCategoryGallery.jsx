import { ArrowLeft } from 'lucide-react';

/**
 * Vertical Product Gallery for Plumbing Categories.
 * Renders all 10 products vertically, one after another.
 * Exact visual structure:
 *  - Product Image
 *  - Product description directly underneath (4 lines of text on desktop)
 *  - Subtle divider and whitespace before next product
 */
export default function PlumbingCategoryGallery({ category, onBack }) {
  if (!category) return null;

  const products = category.products || [];

  return (
    <div className="w-full">
      {/* Top Back Navigation Button */}
      <div className="mb-6 sm:mb-8 flex items-center justify-between">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-navy-900 border border-slate-200/80 shadow-sm hover:bg-slate-50 hover:border-slate-300 font-semibold text-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
        >
          <ArrowLeft size={16} />
          <span>Back to Categories</span>
        </button>
      </div>

      {/* Category Header */}
      <div className="mb-8 sm:mb-12 text-left">
        <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-sky-700 block mb-1">
          Plumbing &amp; Sanitary • Category 0{category.order} of 06
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-navy-900">
          {category.name}
        </h2>
        {category.shortDescription && (
          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
            {category.shortDescription}
          </p>
        )}
      </div>

      {/* Vertical Product Showcase (10 items, one after another) */}
      <div className="max-w-2xl mx-auto w-full flex flex-col gap-10 sm:gap-14">
        {products.map((item, index) => {
          const itemNumber = String(index + 1).padStart(2, '0');

          return (
            <article
              key={item.id || index}
              className="group flex flex-col w-full"
            >
              {/* Product Card Container uniting Image + Description */}
              <div className="bg-white rounded-[24px] sm:rounded-[30px] overflow-hidden border border-slate-200/80 shadow-[0_10px_30px_rgba(8,31,65,0.06)] transition-all duration-300">
                {/* 1. Product Image */}
                <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] bg-slate-100 overflow-hidden border-b border-slate-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute top-3.5 left-3.5 bg-[#142D50]/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Item {itemNumber} of 10
                  </div>
                </div>

                {/* 2. Product Description Directly Underneath */}
                <div className="p-6 sm:p-8 bg-white">
                  <h3 className="text-lg sm:text-xl font-bold text-navy-900 tracking-tight mb-2.5">
                    {item.name}
                  </h3>

                  {/* Exactly 4 lines of readable description on desktop */}
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Subtle divider before the next product */}
              {index < products.length - 1 && (
                <div className="w-full pt-8 sm:pt-10 flex items-center justify-center">
                  <div className="w-16 h-1 rounded-full bg-slate-200/70" />
                </div>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
}
