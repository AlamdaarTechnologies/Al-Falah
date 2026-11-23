import { LabelValue, ProductInfo } from './ProductContent';
import { typo, normalizeSpecs } from './productFormat';

/**
 * Nylon Bird Protection Net details.
 * The data's description is: "<name line>\nPly: …\nSize: …".
 * - The first line only repeats the product name, so it is not rendered again.
 * - Ply / Size are shown inline as "Available Ply:" / "Available Sizes:"
 *   (labels bold, values untouched).
 */
const NYLON_LABELS = { Ply: 'Available Ply', Size: 'Available Sizes' };

function NylonDetails({ description }) {
  const lines = String(description || '')
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean);
  if (lines.length === 0) return null;

  const labelled = (l) => /^([^:]{1,30}):\s+(.+)$/.exec(l);
  const body = labelled(lines[0]) ? lines : lines.slice(1);

  return (
    <div className="space-y-1">
      {body.map((line, idx) => {
        const m = labelled(line);
        if (!m) return <p key={idx} className={typo.body}>{line}</p>;
        return (
          <LabelValue key={idx} label={NYLON_LABELS[m[1]] || m[1]}>
            {m[2]}
          </LabelValue>
        );
      })}
    </div>
  );
}

export default function ProductDetail({ product }) {
  const displayImage = product.detailImage || product.image;

  const showNylonNet = product.id === 'ss-304-anti-bird-spikes';

  // Support the Mosquito Net structure (single `sections[0]`) alongside standard products.
  const mosquitoSection = product.id === 'mosquito-net' ? product.sections?.[0] : null;

  const description = mosquitoSection?.description || product.fullDescription;

  // Specification rows: spec table, then extra titled groups, then sizes — one compact box.
  const specRows = mosquitoSection
    ? normalizeSpecs(mosquitoSection.specifications)
    : [
      ...normalizeSpecs(product.specifications),
      ...(product.detailSections || []).map((g) => ({ label: g.title, value: g.items })),
      ...(product.sizes && product.sizes.length
        ? [{ label: 'Available Sizes & Grades', value: product.sizes }]
        : []),
    ];

  const hasSpecTable = Boolean(product.specifications);
  const extra = product.additionalProduct;
  const nylonImage = extra?.image
    ? (extra.image.startsWith('/') || extra.image.startsWith('http') ? extra.image : `/${extra.image}`)
    : null;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-8">

        {/* Main Product Image(s) */}
        <div className="md:col-span-2 min-w-0 space-y-3 md:sticky md:top-24 self-start">
          <div className="relative rounded-[10px] overflow-hidden bg-slate-100 shadow-sm">
            <img
              src={displayImage}
              alt={product.name}
              className="block w-full max-w-full aspect-[4/3] object-cover"
            />
          </div>

          {/* Additional images or placeholder if specified */}
          {product.images && product.images.length > 0 ? (
            product.images.map((imgSrc, idx) => (
              <div key={idx} className="relative rounded-[10px] overflow-hidden bg-slate-100 shadow-sm aspect-[4/3]">
                <img
                  src={imgSrc}
                  alt={`${product.name} ${idx + 2}`}
                  className="block w-full max-w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))
          ) : product.hasSecondImagePlaceholder ? (
            <div className="relative rounded-[10px] overflow-hidden bg-slate-100 border-2 border-dashed border-slate-300 flex flex-col items-center justify-center aspect-[4/3] text-slate-500 p-4 text-center">
              <svg className="w-10 h-10 mb-2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-sm font-semibold text-slate-600">Image Placeholder</span>
              <span className="text-xs text-slate-400 mt-1">Second image coming soon</span>
            </div>
          ) : null}
        </div>

        {/* Product Information */}
        <div className="md:col-span-3 min-w-0">
          {mosquitoSection && (
            <h3 className={`${typo.title} mb-3`}>{mosquitoSection.title}</h3>
          )}

          <ProductInfo
            description={description}
            features={mosquitoSection ? mosquitoSection.features : product.features}
            specRows={specRows}
            specTitle={mosquitoSection ? 'Specifications' : hasSpecTable ? 'Technical Specifications' : null}
            applications={mosquitoSection ? null : product.applications}
          />


        </div>
      </div>

      {/* Nylon Bird Protection Net — title → image + details */}
      {showNylonNet && extra && (
        <div className="mt-6 pt-6 border-t border-slate-200">
          <h3 className={typo.title}>{extra.name}</h3>

          <div className="mt-3 grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-8">
            {nylonImage && (
              <div className="md:col-span-2 min-w-0 rounded-[10px] overflow-hidden bg-slate-100 shadow-sm border border-slate-100 aspect-[4/3]">
                <img
                  src={nylonImage}
                  alt={extra.name}
                  className="block w-full h-full max-w-full object-cover"
                  loading="lazy"
                />
              </div>
            )}

            <div className="md:col-span-3 min-w-0">
              {extra.description && <NylonDetails description={extra.description} />}


            </div>
          </div>
        </div>
      )}
    </div>
  );
}
