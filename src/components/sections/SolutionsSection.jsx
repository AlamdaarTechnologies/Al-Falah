import { useRef, useState } from 'react';
import SolutionCard from '../common/SolutionCard';
import ProductListItem from '../common/ProductListItem';
import ProductDetail from '../common/ProductDetail';
import { divisions } from '../../data/solutions';
import { products } from '../../data/products';

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
    <section id="solutions" ref={sectionRef} className="py-14 sm:py-20 bg-mist border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-4xl font-bold text-navy-900 text-center">Our Solutions</h2>

        <div className={`mt-10 grid gap-6 lg:gap-8 ${openDivision ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'}`}>
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

        {openDivision && (
          <div id="product-panel" className="mt-8">
            {product ? (
              <ProductDetail
                product={product}
                backLabel={openDivision.shortName}
                onBack={() => { setProductId(null); toTop(); }}
              />
            ) : (
              <div className="space-y-4">
                {list.map((p) => (
                  <ProductListItem key={p.id} product={p} onSelect={(id) => { setProductId(id); toTop(); }} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
