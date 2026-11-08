import { useState, useEffect } from 'react';
import ProductListItem from '../common/ProductListItem';
import ProductDetail from '../common/ProductDetail';
import ProductSections from '../common/ProductSections';
import SubcategoryCard from '../common/SubcategoryCard';
import SubcategoryDetail from '../common/SubcategoryDetail';
import { products } from '../../data/products';

const toTop = () => window.scrollTo({ top: 0, behavior: 'instant' });
const detailCard = 'bg-white rounded-[28px] sm:rounded-[32px] p-6 sm:p-10 shadow-[0_15px_35px_rgba(0,0,0,0.06)] border border-white';

/**
 * Focused view for one solution. Levels:
 * product list -> product page (detail / sections / subcategory grid) -> subcategory page.
 * Navigation between views is handled cleanly via the top navbar and clicks.
 */
export default function ProductView({ division }) {
  const [productId, setProductId] = useState(null);
  const [subId, setSubId] = useState(null);

  useEffect(() => {
    const onPop = (e) => {
      setProductId(e.state?.product ?? null);
      setSubId(e.state?.sub ?? null);
      toTop();
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const go = (state) => {
    window.history.pushState({ solution: division.id, ...state }, '');
    setProductId(state.product ?? null);
    setSubId(state.sub ?? null);
    toTop();
  };

  const list = products.filter((p) => p.divisionId === division.id);
  const product = list.find((p) => p.id === productId);
  const sub = product?.subcategories?.find((s) => s.id === subId);

  let heading = (
    <>
      <h2 id="products-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-900 tracking-tight">{division.shortName}</h2>
      <p className="mt-1.5 text-sm sm:text-base text-slate-600">Available products</p>
    </>
  );
  let body = (
    <div className="space-y-4">
      {list.map((p) => (
        <ProductListItem key={p.id} product={p} onSelect={(id) => go({ product: id })} />
      ))}
    </div>
  );

  if (product) {
    heading = <h1 id="products-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-900 tracking-tight">{product.name}</h1>;

    if (sub) {
      heading = <h1 id="products-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-900 tracking-tight">{sub.name}</h1>;
      body = <div className={detailCard}><SubcategoryDetail parent={product} item={sub} /></div>;
    } else if (product.subcategories) {
      body = (
        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          {product.subcategories.map((s) => (
            <SubcategoryCard key={s.id} item={s} onSelect={(id) => go({ product: product.id, sub: id })} />
          ))}
        </div>
      );
    } else if (product.sections) {
      body = <ProductSections product={product} />;
    } else {
      body = <div className={detailCard}><ProductDetail product={product} /></div>;
    }
  }

  return (
    <section id="products" aria-labelledby="products-heading" className="bg-transparent pt-8 sm:pt-10 md:pt-12 pb-12 sm:pb-16 min-h-[70vh]">
      <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="mb-6 sm:mb-8">{heading}</div>
        <div className="mt-6 sm:mt-8">{body}</div>
      </div>
    </section>
  );
}
