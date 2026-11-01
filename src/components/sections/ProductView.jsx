import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import ProductListItem from '../common/ProductListItem';
import ProductDetail from '../common/ProductDetail';
import { products } from '../../data/products';

const toTop = () => window.scrollTo({ top: 0, behavior: 'instant' });

/** Focused view: only the products of the selected solution. */
export default function ProductView({ division, onBack }) {
  const [productId, setProductId] = useState(null);
  const list = products.filter((p) => p.divisionId === division.id);
  const product = list.find((p) => p.id === productId);

  return (
    <section id="products" aria-labelledby="products-heading" className="bg-[#eaecf0] py-10 sm:py-14 min-h-[70vh]">
      <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-12">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 rounded-full bg-navy-900 hover:bg-navy-800 text-white text-sm font-semibold px-5 py-2.5 shadow-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Solutions
        </button>

        <h2 id="products-heading" className="mt-8 text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight">
          {division.shortName}
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-600">Available products</p>

        <div className="mt-8">
          {product ? (
            <div className="bg-white rounded-[28px] sm:rounded-[32px] p-6 sm:p-10 shadow-[0_15px_35px_rgba(0,0,0,0.06)] border border-white">
              <ProductDetail
                product={product}
                backLabel={division.shortName}
                onBack={() => { setProductId(null); toTop(); }}
              />
            </div>
          ) : (
            <div className="space-y-4">
              {list.map((p) => (
                <ProductListItem key={p.id} product={p} onSelect={(id) => { setProductId(id); toTop(); }} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
