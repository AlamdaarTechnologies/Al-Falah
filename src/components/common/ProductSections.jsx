import { MessageCircle } from 'lucide-react';
import Button from './Button';
import { getProductInquiryUrl } from '../../utils/whatsapp';

/**
 * Safely renders specifications in any data format:
 * - Simple string array: ["Item 1", "Item 2"]
 * - Grouped object array: [{ title: "Available Colour", items: ["..."] }]
 * - Key/value object: { "Material": "HDPE", "Sizes": ["..."] }
 */
function renderSpecifications(specifications) {
  if (!specifications) return null;

  // Case 1: Array of items
  if (Array.isArray(specifications)) {
    if (specifications.length === 0) return null;

    const hasComplexObjects = specifications.some(
      (item) => typeof item === 'object' && item !== null
    );

    // Simple string array (e.g. Bird & Monkey Spike)
    if (!hasComplexObjects) {
      return (
        <ul className="mt-1.5 list-disc pl-5 space-y-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
          {specifications.map((spec, idx) => (
            <li key={idx}>{String(spec)}</li>
          ))}
        </ul>
      );
    }

    // Array containing objects (e.g. Mosquito Net with title & items)
    return (
      <div className="mt-2 space-y-2.5">
        {specifications.map((spec, idx) => {
          if (typeof spec === 'string') {
            return (
              <li key={idx} className="list-disc ml-5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {spec}
              </li>
            );
          }

          if (spec && typeof spec === 'object') {
            const title = spec.title || spec.name || Object.keys(spec)[0];
            const items = spec.items || spec.values || (spec.title ? null : Object.values(spec)[0]);

            return (
              <div
                key={idx}
                className="bg-slate-50/80 rounded-xl p-3 border border-slate-100 shadow-xs"
              >
                {title && (
                  <h5 className="text-[13px] sm:text-[14px] font-semibold text-slate-800">
                    {title}
                  </h5>
                )}

                {Array.isArray(items) ? (
                  <ul className="mt-1.5 list-disc pl-5 space-y-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {items.map((item, itemIdx) => (
                      <li key={itemIdx}>
                        {typeof item === 'object' ? JSON.stringify(item) : String(item)}
                      </li>
                    ))}
                  </ul>
                ) : items ? (
                  <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {typeof items === 'object' ? JSON.stringify(items) : String(items)}
                  </p>
                ) : null}
              </div>
            );
          }

          return null;
        })}
      </div>
    );
  }

  // Case 2: Key-value dictionary object
  if (typeof specifications === 'object') {
    const entries = Object.entries(specifications);
    if (entries.length === 0) return null;

    return (
      <div className="mt-2 space-y-2.5">
        {entries.map(([key, value]) => (
          <div
            key={key}
            className="bg-slate-50/80 rounded-xl p-3 border border-slate-100 shadow-xs"
          >
            <h5 className="text-[13px] sm:text-[14px] font-semibold text-slate-800">
              {key}
            </h5>
            {Array.isArray(value) ? (
              <ul className="mt-1.5 list-disc pl-5 space-y-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {value.map((item, idx) => (
                  <li key={idx}>{String(item)}</li>
                ))}
              </ul>
            ) : (
              <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {String(value)}
              </p>
            )}
          </div>
        ))}
      </div>
    );
  }

  return null;
}

/**
 * Dedicated renderer for multi-section products (e.g. Bird Spike & Monkey Spike, Mosquito Net).
 * Supports optional video, responsive 1 or 2 image layouts, descriptions, features, and flexible specifications.
 */
export default function ProductSections({ product }) {
  const isSingleSection = product.sections.length === 1;

  return (
    <div className="space-y-6 sm:space-y-8">
      {product.sections.map((section) => (
        <section
          key={section.id}
          aria-labelledby={`section-${section.id}`}
          className="bg-white rounded-[22px] sm:rounded-[28px] p-4 sm:p-6 md:p-8 shadow-[0_8px_24px_rgba(0,0,0,0.04)] border border-white"
        >
          {/* Section Heading (rendered if multiple sections or distinct title) */}
          {(!isSingleSection || section.title !== product.name) && (
            <h3
              id={`section-${section.id}`}
              className="text-lg sm:text-xl md:text-2xl font-bold text-navy-900 tracking-tight leading-snug"
            >
              {section.title}
            </h3>
          )}

          {/* 1. Optional Video (e.g. Monkey Spike) */}
          {Boolean(section.video) && (
            <div className="mt-3.5 sm:mt-4 w-full rounded-[10px] overflow-hidden bg-slate-900 shadow-sm max-h-[260px] sm:max-h-[340px] flex items-center justify-center">
              <video
                className="w-full max-h-[260px] sm:max-h-[340px] aspect-video object-cover"
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

          {/* 2. Images: 2 images displayed side-by-side (50% each on all screen sizes); 1 image displayed cleanly */}
          {section.images && section.images.length > 0 && (
            <div
              className={`mt-3.5 sm:mt-4 ${
                section.images.length === 1
                  ? 'max-w-md mx-auto sm:mx-0'
                  : 'grid grid-cols-2 gap-2.5 sm:gap-4'
              }`}
            >
              {section.images.map((src, i) => (
                <div
                  key={src}
                  className="rounded-[10px] overflow-hidden bg-slate-50 border border-slate-100 shadow-xs aspect-[4/3] sm:aspect-[16/10] flex items-center justify-center p-1.5 sm:p-2.5"
                >
                  <img
                    src={src}
                    alt={`${section.title} ${i + 1}`}
                    loading="lazy"
                    className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          )}

          {/* 3. Description directly beneath images */}
          {section.description && (
            <div className="mt-4 sm:mt-5">
              <h4 className="text-[15px] sm:text-[17px] font-bold uppercase tracking-wider text-navy-900">
                Description
              </h4>
              <p className="mt-1.5 text-sm sm:text-[15px] text-slate-600 leading-relaxed">
                {section.description}
              </p>
            </div>
          )}

          {/* 4. Features (if present) */}
          {section.features && section.features.length > 0 && (
            <div className="mt-4 sm:mt-5">
              <h4 className="text-[13px] sm:text-[14px] font-bold uppercase tracking-wider text-navy-900">
                Key Features
              </h4>
              <ul className="mt-1.5 list-disc pl-5 space-y-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {section.features.map((feat, idx) => (
                  <li key={idx}>{String(feat)}</li>
                ))}
              </ul>
            </div>
          )}

          {/* 5. Specifications directly beneath */}
          {section.specifications && (
            <div className="mt-4 sm:mt-5">
              <h4 className="text-[13px] sm:text-[14px] font-bold uppercase tracking-wider text-navy-900">
                Specifications
              </h4>
              {renderSpecifications(section.specifications)}
            </div>
          )}

          {/* 6. Closing Note (if present) */}
          {section.closingNote && (
            <p className="mt-4 text-xs sm:text-sm italic text-slate-600 border-l-2 border-[#f0b429] pl-3 py-1">
              {section.closingNote}
            </p>
          )}

          {/* WhatsApp Inquiry Button */}
          <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-slate-100">
            <Button
              as="a"
              href={getProductInquiryUrl({ ...product, name: section.title })}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              size="md"
              icon={MessageCircle}
              className="font-bold shadow-md hover:shadow-lg rounded-xl text-xs sm:text-sm py-2 sm:py-2.5 px-4"
            >
              Inquire on WhatsApp
            </Button>
          </div>
        </section>
      ))}
    </div>
  );
}
