import { useRef, useState } from 'react';
import SolutionCard from '../common/SolutionCard';
import ProductListItem from '../common/ProductListItem';
import ProductDetail from '../common/ProductDetail';
import { divisions } from '../../data/solutions';
import { products } from '../../data/products';
import { Layers } from 'lucide-react';

export default function SolutionsSection({ openId, setOpenId }) {
  const [productId, setProductId] = useState(null);
  const sectionRef = useRef(null);

  const openDivision = divisions.find((d) => d.id === openId);
  const list = openDivision ? products.filter((p) => p.divisionId === openDivision.id) : [];
  const product = list.find((p) => p.id === productId);

  const toTop = () => sectionRef.current?.scrollIntoView({ behavior: 'smooth' });

  const toggle = (id) => {
    setProductId(null);
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="solutions"
      ref={sectionRef}
      className="py-16 sm:py-24 bg-[#eaecf0] border-t border-slate-300/60 relative"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Header with clean eye-soothing hierarchy */}
        <div className="max-w-xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-slate-300 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3 shadow-xs">
            <Layers className="w-3.5 h-3.5 text-navy-900" />
            <span>Product Divisions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight">
            Our Products
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Select a division below to explore certified materials, technical specifications, and WhatsApp availability.
          </p>
        </div>

        {/* Compact, curved 3D cards with ample breathing room on all sides */}
        <div className={`mt-6 ${openDivision ? 'max-w-md mx-auto' : 'grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-3xl lg:max-w-4xl mx-auto'}`}>
          {(openDivision ? [openDivision] : divisions).map((division) => (
            <SolutionCard
              key={division.id}
              division={division}
              panelId="product-panel"
              isOpen={openId === division.id}
              onToggle={() => toggle(division.id)}
            />
          ))}
        </div>

        {/* Product listing panel when a solution is selected */}
        {openDivision && (
          <div id="product-panel" className="mt-12 max-w-4xl mx-auto">
            {product ? (
              <div className="bg-white rounded-[28px] sm:rounded-[32px] p-6 sm:p-10 shadow-[0_15px_35px_rgba(0,0,0,0.06)] border border-white">
                <ProductDetail
                  product={product}
                  backLabel={openDivision.shortName}
                  onBack={() => { setProductId(null); toTop(); }}
                />
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-between px-2 mb-2">
                  <h3 className="text-lg font-bold text-navy-900">
                    Available Products in {openDivision.shortName}
                  </h3>
                  <button
                    onClick={() => setOpenId(null)}
                    className="text-xs font-semibold text-slate-500 hover:text-navy-900 underline"
                  >
                    Close category
                  </button>
                </div>
                {list.map((p) => (
                  <ProductListItem
                    key={p.id}
                    product={p}
                    onSelect={(id) => { setProductId(id); toTop(); }}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
