import { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import ProductListItem from '../common/ProductListItem';
import ProductDetail from '../common/ProductDetail';
import ProductSections from '../common/ProductSections';
import SubcategoryCard from '../common/SubcategoryCard';
import SubcategoryDetail from '../common/SubcategoryDetail';
import SportsNetShowcase from '../common/SportsNetShowcase';
import ServicesSection from './ServicesSection';
import ServicesListingView from './ServicesListingView';
import PlumbingCategoryGallery from './PlumbingCategoryGallery';
import { products } from '../../data/products';
import { plumbingCategories } from '../../data/plumbingCategories';
import { typo } from '../common/productFormat';

const toTop = () => window.scrollTo({ top: 0, behavior: 'instant' });
const detailCard = 'bg-white rounded-[28px] sm:rounded-[32px] p-4 sm:p-6 md:p-8 shadow-[0_15px_35px_rgba(0,0,0,0.06)] border border-white';

/**
 * Focused view for one solution (Royal Bird Net or Plumbing & Sanitary).
 * Supports:
 *  - Royal Bird Net: product list, Sports Net non-clickable showcase,
 *    product detail, single rotating services card, dedicated services listing.
 *  - Plumbing & Sanitary: 6 organized categories, 10-product vertical gallery.
 */
export default function ProductView({ division }) {
  const [productId, setProductId] = useState(null);
  const [subId, setSubId] = useState(null);
  const [viewingServices, setViewingServices] = useState(false);
  const [plumbingCatId, setPlumbingCatId] = useState(null);

  useEffect(() => {
    const onPop = (e) => {
      setProductId(e.state?.product ?? null);
      setSubId(e.state?.sub ?? null);
      setViewingServices(e.state?.services ?? false);
      setPlumbingCatId(e.state?.plumbingCat ?? null);
      toTop();
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const go = (state) => {
    window.history.pushState({ solution: division.id, ...state }, '');
    setProductId(state.product ?? null);
    setSubId(state.sub ?? null);
    setViewingServices(state.services ?? false);
    setPlumbingCatId(state.plumbingCat ?? null);
    toTop();
  };

  const handleBackToProducts = () => {
    if (subId) {
      go({ product: productId, sub: null });
    } else {
      go({ product: null, services: false, plumbingCat: null });
    }
  };

  // -------------------------------------------------------------
  // 1. PLUMBING & SANITARY DIVISION LOGIC
  // -------------------------------------------------------------
  if (division.id === 'plumbing-sanitary') {
    // If a plumbing category is selected, display its 10 vertical products
    if (plumbingCatId) {
      const activeCategory = plumbingCategories.find((c) => c.id === plumbingCatId) || plumbingCategories[0];
      return (
        <section id="products" aria-labelledby="products-heading" className="bg-transparent pt-8 sm:pt-10 md:pt-12 pb-12 sm:pb-16 min-h-[70vh]">
          <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-12">
            <PlumbingCategoryGallery
              category={activeCategory}
              onBack={() => go({ plumbingCat: null })}
            />
          </div>
        </section>
      );
    }

    // Default Plumbing Main Page: Display all 6 categories in exact order
    return (
      <section id="products" aria-labelledby="products-heading" className="bg-transparent pt-8 sm:pt-10 md:pt-12 pb-12 sm:pb-16 min-h-[70vh]">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="mb-6 sm:mb-8 text-left">
            <h2 id="products-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-900 tracking-tight">
              {division.shortName}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
              {division.tagline || 'Certified CPVC/UPVC pipes, precision MAF series, Joint Plus couplings, and complete sanitary accessories.'}
            </p>
            <p className="mt-4 text-xs sm:text-sm font-semibold uppercase tracking-widest text-slate-400">
              Product Categories ({plumbingCategories.length})
            </p>
          </div>

          {/* 6 Category Cards Grid — exact same card style as Royal Bird Net */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {plumbingCategories.map((cat, index) => (
              <ProductListItem
                key={cat.id}
                product={cat}
                onSelect={(id) => go({ plumbingCat: id })}
                priority={index === 0}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  // -------------------------------------------------------------
  // 2. ROYAL BIRD NET DIVISION LOGIC
  // -------------------------------------------------------------

  // Dedicated Services Listing View
  if (viewingServices) {
    return (
      <section id="products" aria-labelledby="products-heading" className="bg-transparent pt-8 sm:pt-10 md:pt-12 pb-12 sm:pb-16 min-h-[70vh]">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-12">
          <ServicesListingView onBack={() => go({ services: false })} />
        </div>
      </section>
    );
  }

  const list = products.filter((p) => p.divisionId === division.id);
  const product = list.find((p) => p.id === productId);
  const sub = product?.subcategories?.find((s) => s.id === subId);

  let heading = (
    <>
      <h2 id="products-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-900 tracking-tight">
        {division.shortName}
      </h2>

      {division.tagline && (
        <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
          {division.tagline}
        </p>
      )}

      <p className="mt-3 text-xs sm:text-sm font-semibold uppercase tracking-widest text-slate-400">
        Available products
      </p>
    </>
  );

  let body = (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
      {list.map((p, index) => (
        <ProductListItem
          key={p.id}
          product={p}
          onSelect={(id) => go({ product: id })}
          priority={index === 0}
        />
      ))}
    </div>
  );

  if (product) {
    heading = (
      <>
        {/* Back Button */}
        <div className="mb-4">
          <button
            type="button"
            onClick={handleBackToProducts}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-navy-900 border border-slate-200/80 shadow-sm hover:bg-slate-50 font-semibold text-xs sm:text-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
          >
            <ArrowLeft size={15} />
            <span>Back to Products</span>
          </button>
        </div>

        <h1 id="products-heading" className={typo.title}>
          {product.name}
        </h1>

        {product.shortDescription && (
          <p className={`mt-2 border-l-[3px] border-gold-400 pl-3 max-w-3xl ${typo.description}`}>
            {product.shortDescription}
          </p>
        )}
      </>
    );

    // SPECIAL CASE: Sports Net -> Non-clickable vertical visual showcase
    if (product.id === 'sports-net' && product.subcategories) {
      body = <SportsNetShowcase items={product.subcategories} />;
    } else if (sub) {
      heading = (
        <>
          <div className="mb-4">
            <button
              type="button"
              onClick={() => go({ product: product.id, sub: null })}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-navy-900 border border-slate-200/80 shadow-sm hover:bg-slate-50 font-semibold text-xs sm:text-sm transition-all"
            >
              <ArrowLeft size={15} />
              <span>Back to {product.name}</span>
            </button>
          </div>
          <h1 id="products-heading" className={typo.title}>{sub.name}</h1>
        </>
      );
      body = (
        <div className={detailCard}>
          <SubcategoryDetail parent={product} item={sub} />
        </div>
      );
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
      body = (
        <div className={detailCard}>
          <ProductDetail product={product} />
        </div>
      );
    }
  }

  return (
    <section id="products" aria-labelledby="products-heading" className="bg-transparent pt-8 sm:pt-10 md:pt-12 pb-12 sm:pb-16 min-h-[70vh]">
      <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="mb-6 sm:mb-8">{heading}</div>
        <div className="mt-6 sm:mt-8">{body}</div>

        {/* SINGLE MAIN SERVICES CARD WITH ROTATING IMAGES (Only when on product list) */}
        {!product && division.id === 'royal-birdnet' && (
          <ServicesSection onOpenServices={() => go({ services: true })} />
        )}
      </div>
    </section>
  );
}
