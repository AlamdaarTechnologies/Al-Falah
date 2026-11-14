
import { MessageCircle } from 'lucide-react';
import Button from './Button';
import { getProductInquiryUrl } from '../../utils/whatsapp';

function DetailBlock({ title, items }) {
  if (!items || items.length === 0) return null;

  return (
    <div className="mt-4">
      <h4 className="text-[14px] sm:text-[15px] font-bold uppercase tracking-wider text-navy-900">
        {title}
      </h4>
      <ul className="mt-2 list-disc pl-5 space-y-1 text-[13px] sm:text-[14px] text-slate-600 leading-relaxed">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function ProductDetail({ product }) {
  const displayImage = product.detailImage || product.image;

  const specs = Object.entries(product.specifications || {});

  const showNylonNet = product.id === "ss-304-anti-bird-spikes";

  // Detect the new Mosquito Net data structure
  const mosquitoSection = product.id === "mosquito-net"
    ? product.sections?.[0]
    : null;

  // Support existing products and the new Mosquito Net structure
  const description = mosquitoSection?.description || product.fullDescription;

  const mosquitoSpecs = mosquitoSection?.specifications || [];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">

        {/* Main Product Image */}
        <div className="relative rounded-[10px] overflow-hidden bg-slate-100 shadow-sm md:sticky md:top-24 self-start">
          <img
            src={displayImage}
            alt={product.name}
            className="w-full aspect-[4/3] object-cover"
          />
        </div>

        {/* Product Information */}
        <div className="min-w-0">

          {/* Product Heading */}
          {mosquitoSection && (
            <h3 className="text-[18px] sm:text-[19px] font-bold uppercase tracking-wider text-navy-900 mb-3">
              {mosquitoSection.title}
            </h3>
          )}

          {/* Description */}
          <div>
            {!mosquitoSection && (
              <h4 className="text-[18px] sm:text-[19px] font-bold uppercase tracking-wider text-navy-900">
                Description
              </h4>
            )}

            {String(description || '').split('\n\n').filter(Boolean).map((para, idx) => (
              <p
                key={idx}
                className={`${idx === 0 ? 'mt-2' : 'mt-3'} text-base sm:text-[17px] text-slate-600 leading-relaxed`}
              >
                {para}
              </p>
            ))}
          </div>

          {/* Mosquito Net Key Features */}
          {mosquitoSection && (
            <DetailBlock
              title="Key Features"
              items={mosquitoSection.features}
            />
          )}

          {/* Existing Product Features */}
          {!mosquitoSection && (
            <DetailBlock title="Key Features" items={product.features} />
          )}

          {/* Existing Technical Specifications */}
          {!mosquitoSection && specs.length > 0 && (
            <div className="mt-5">
              <h4 className="text-[15px] sm:text-[16px] font-bold uppercase tracking-wider text-navy-900">
                Technical Specifications
              </h4>

              {specs.map(([key, value]) => (
                <div key={key} className="mt-3">
                  <h5 className="text-[14px] sm:text-[15px] font-semibold text-slate-800">
                    {key}
                  </h5>

                  {Array.isArray(value) ? (
                    <ul className="mt-1 list-disc pl-5 space-y-1 text-[13px] sm:text-[14px] text-slate-600 leading-relaxed">
                      {value.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-1 text-[13px] sm:text-[14px] text-slate-600 leading-relaxed">
                      {value}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* New Mosquito Net Specifications */}
          {mosquitoSection && mosquitoSpecs.map((group) => (
            <DetailBlock
              key={group.title}
              title={group.title}
              items={group.items}
            />
          ))}

          {!mosquitoSection && (
            <>
              {/* Optional extra titled lists, e.g. "Available In", "Available Colours" */}
              {(product.detailSections || []).map((group) => (
                <DetailBlock key={group.title} title={group.title} items={group.items} />
              ))}
              <DetailBlock title="Available Sizes & Grades" items={product.sizes} />
              <DetailBlock title="Applications" items={product.applications} />
            </>
          )}

          {/* Optional closing note (same style as the multi-section product pages) */}
          {!mosquitoSection && product.closingNote && (
            <p className="mt-4 text-xs sm:text-sm italic text-slate-600 border-l-2 border-[#f0b429] pl-3 py-1">
              {product.closingNote}
            </p>
          )}

          {/* WhatsApp Inquiry */}
          {!showNylonNet && (
            <div className="mt-6 pt-5 border-t border-slate-100">
              <Button
                as="a"
                href={getProductInquiryUrl(product)}
                target="_blank"
                rel="noopener noreferrer"
                variant="whatsapp"
                size="md"
                icon={MessageCircle}
                className="font-bold shadow-md hover:shadow-lg rounded-xl"
              >
                Inquire on WhatsApp
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Nylon Bird Protection Net — vertical: title → image → description */}
      {showNylonNet && product.additionalProduct && (
        <div className="mt-10 pt-8 border-t border-slate-200">
          <div className="flex flex-col gap-4">

            {/* 1. Title */}
            <h3 className="text-[20px] sm:text-[22px] font-bold text-navy-900 leading-snug">
              {product.additionalProduct.name}
            </h3>

            {/* 2. Image */}
            {product.additionalProduct.image && (
              <div className="w-full max-w-sm rounded-[10px] overflow-hidden bg-slate-100 shadow-sm border border-slate-100 aspect-[4/3]">
                <img
                  src={
                    product.additionalProduct.image.startsWith('/') ||
                    product.additionalProduct.image.startsWith('http')
                      ? product.additionalProduct.image
                      : `/${product.additionalProduct.image}`
                  }
                  alt={product.additionalProduct.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            )}

            {/* 3. Description */}
            {product.additionalProduct.description && (
              <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed">
                {product.additionalProduct.description}
              </p>
            )}

          </div>

          <div className="mt-6 pt-6 border-t border-slate-100">
            <Button
              as="a"
              href={getProductInquiryUrl(product)}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              size="md"
              icon={MessageCircle}
              className="font-bold shadow-md hover:shadow-lg rounded-xl"
            >
              Inquire on WhatsApp
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
