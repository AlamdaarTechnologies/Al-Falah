import { useRef } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import SolutionCard from '../common/SolutionCard';
import ProductCard from '../common/ProductCard';
import { divisions } from '../../data/solutions';
import { products } from '../../data/products';

export default function SolutionsSection({ openId, setOpenId, onOpenProductDetails }) {
  const scrollRef = useRef(null);

  const openDivision = divisions.find((d) => d.id === openId);
  const openProducts = openDivision ? products.filter((p) => p.divisionId === openDivision.id) : [];

  const scrollBy = (dir) => {
    const el = scrollRef.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: 'smooth' });
  };

  return (
    <section id="solutions" className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Solutions"
          subtitle="Choose a solution to see the products we supply."
        />

        <div className={`mt-8 grid gap-6 items-start ${openDivision ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'}`}>
          {(openDivision ? [openDivision] : divisions).map((division) => (
            <SolutionCard
              key={division.id}
              division={division}
              panelId="product-gallery"
              isOpen={openId === division.id}
              onToggle={() => setOpenId(openId === division.id ? null : division.id)}
            />
          ))}
        </div>

        {openDivision && (
          <div id="product-gallery" className="mt-4 rounded border border-slate-200 bg-white p-4 sm:p-6 shadow-sm">
            <div className="flex items-center justify-between gap-3">
              <p className="text-base sm:text-lg font-bold text-navy-950">
                {openDivision.shortName} products
              </p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => scrollBy(-1)}
                  aria-label="Scroll products left"
                  className="hidden md:inline-flex p-2 rounded border border-slate-300 text-slate-700 hover:bg-slate-100"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollBy(1)}
                  aria-label="Scroll products right"
                  className="hidden md:inline-flex p-2 rounded border border-slate-300 text-slate-700 hover:bg-slate-100"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setOpenId(null)}
                  aria-label="Close product gallery"
                  className="p-2 rounded border border-slate-300 text-slate-700 hover:bg-slate-100"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div
              key={openDivision.id}
              ref={scrollRef}
              role="region"
              aria-label={`${openDivision.shortName} product list`}
              className="mt-4 flex gap-4 sm:gap-5 overflow-x-auto snap-x snap-mandatory pb-3"
            >
              {openProducts.map((product) => (
                <div key={product.id} className="snap-start shrink-0 w-[78%] sm:w-72 lg:w-80">
                  <ProductCard product={product} onOpenDetails={onOpenProductDetails} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
