import { useState, useEffect } from 'react';
import ProductListItem from '../common/ProductListItem';
import ProductDetail from '../common/ProductDetail';
import ProductSections from '../common/ProductSections';
import SubcategoryCard from '../common/SubcategoryCard';
import SubcategoryDetail from '../common/SubcategoryDetail';
import ServicesSection from './ServicesSection';
import { products } from '../../data/products';
import { typo } from '../common/productFormat';

const toTop = () => window.scrollTo({ top: 0, behavior: 'instant' });
const detailCard = 'bg-white rounded-[28px] sm:rounded-[32px] p-4 sm:p-6 md:p-8 shadow-[0_15px_35px_rgba(0,0,0,0.06)] border border-white';

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

      {division.tagline && (
        <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
          {division.tagline}
        </p>
      )}

      <p className="mt-3 text-xs sm:text-sm font-semibold uppercase tracking-widest text-slate-400">Available products</p>
    </>
  );
  let body = (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
      {list.map((p) => (
        <ProductListItem key={p.id} product={p} onSelect={(id) => go({ product: id })} />
      ))}
    </div>
  );

  if (product) {
    heading = (
      <>
        <h1 id="products-heading" className={typo.title}>{product.name}</h1>
        {/* Short description: product detail pages only (Royal Bird Net). Plumbing keeps its existing layout. */}
        {division.id === 'royal-birdnet' && product.shortDescription && (
          <p className={`mt-2 border-l-[3px] border-gold-400 pl-3 max-w-3xl ${typo.description}`}>
            {product.shortDescription}
          </p>
        )}
      </>
    );

    if (sub) {
      heading = <h1 id="products-heading" className={typo.title}>{sub.name}</h1>;
      body = <div className={detailCard}><SubcategoryDetail parent={product} item={sub} /></div>;
    } else if (product.subcategories) {
      body = (
        <div className="flex flex-col gap-4 sm:gap-6">
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
        {!product && division.id === 'royal-birdnet' && <ServicesSection />}
      </div>
    </section>
  );
}
