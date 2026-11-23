import { ProductInfo } from './ProductContent';
import { typo, normalizeSpecs } from './productFormat';

/**
 * Renderer for multi-section products (e.g. Bird Spike & Monkey Spike, Mosquito Net).
 * Same layout language as ProductDetail: media on the left, text column on the right
 * (stacked on small screens). Supports an optional video, 1 or 2 images, description,
 * features and any specification shape.
 */
export default function ProductSections({ product }) {
  const isSingleSection = product.sections.length === 1;

  return (
    <div className="bg-white rounded-[28px] sm:rounded-[32px] p-4 sm:p-6 md:p-8 shadow-[0_15px_35px_rgba(0,0,0,0.06)] border border-white">
      {product.sections.map((section, sectionIdx) => {
        const images = section.images || [];
        const hasMedia = Boolean(section.video) || images.length > 0;
        const showTitle = !isSingleSection || section.title !== product.name;

        return (
          <section
            key={section.id}
            aria-labelledby={`section-${section.id}`}
            className={sectionIdx > 0 ? 'mt-6 pt-6 border-t border-slate-200' : ''}
          >
            {showTitle && (
              <h3 id={`section-${section.id}`} className={`${typo.title} mb-3`}>
                {section.title}
              </h3>
            )}

            <div className={hasMedia ? 'grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-8 items-start' : ''}>
              {hasMedia && (
                <div className="md:col-span-2 min-w-0 space-y-3">
                  {Boolean(section.video) && (
                    <div className="w-full rounded-[10px] overflow-hidden bg-slate-900 shadow-sm">
                      <video
                        className="block w-full max-w-full aspect-video object-cover"
                        src={section.video}
                        controls
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        aria-label={`${section.title} video`}
                      />
                    </div>
                  )}

                  {images.length > 0 && (
                    <div className="flex flex-col gap-3">
                      {images.map((src, i) => (
                        <img
                          key={src}
                          src={src}
                          alt={`${section.title} ${i + 1}`}
                          loading="lazy"
                          className="block w-full max-w-full h-auto rounded-[10px]"
                        />
                      ))}
                    </div>
                  )}
                </div>
              )}

              <div className={hasMedia ? 'md:col-span-3 min-w-0' : 'min-w-0'}>
                <ProductInfo
                  description={section.description}
                  features={section.features}
                  specRows={normalizeSpecs(section.specifications)}
                  specTitle="Specifications"
                />


              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
