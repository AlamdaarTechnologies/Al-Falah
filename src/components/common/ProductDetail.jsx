
import { MessageCircle } from 'lucide-react';
import Button from './Button';
import { getProductInquiryUrl } from '../../utils/whatsapp';

function DetailBlock({ title, items }) {
  if (!items || items.length === 0) return null;

  return (
    <div className="mt-4">
      <h4 className="text-[14px] sm:text-[16px] font-bold uppercase tracking-wider text-navy-900">
        {title}
      </h4>
      <ul className="mt-2 list-disc pl-5 space-y-1 text-sm sm:text-[15px] text-slate-600 leading-relaxed">
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
            <h3 className="text-[18px] sm:text-[20px] font-bold uppercase tracking-wider text-navy-900 mb-3">
              {mosquitoSection.title}
            </h3>
          )}

          {/* Description */}
          <div>
            {!mosquitoSection && (
              <h4 className="text-[18px] sm:text-[20px] font-bold uppercase tracking-wider text-navy-900">
                Description
              </h4>
            )}

            <p className="mt-2 text-sm sm:text-[15px] text-slate-600 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Mosquito Net Key Features */}
          {mosquitoSection && (
            <DetailBlock
              title="Key Features"
              items={mosquitoSection.features}
            />
          )}

          {/* Existing Technical Specifications */}
          {!mosquitoSection && specs.length > 0 && (
            <div className="mt-5">
              <h4 className="text-[14px] sm:text-[16px] font-bold uppercase tracking-wider text-navy-900">
                Technical Specifications
              </h4>

              {specs.map(([key, value]) => (
                <div key={key} className="mt-3">
                  <h5 className="text-[13px] sm:text-[14px] font-semibold text-slate-800">
                    {key}
                  </h5>

                  {Array.isArray(value) ? (
                    <ul className="mt-1 list-disc pl-5 space-y-1 text-sm sm:text-[15px] text-slate-600 leading-relaxed">
                      {value.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-1 text-sm sm:text-[15px] text-slate-600 leading-relaxed">
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

          {/* Existing Product Features */}
          {!mosquitoSection && (
            <>
              <DetailBlock title="Key Advantages" items={product.features} />
              <DetailBlock title="Available Sizes & Grades" items={product.sizes} />
              <DetailBlock title="Applications" items={product.applications} />
            </>
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

      {/* Existing Nylon Bird Protection Net */}
      {showNylonNet && product.additionalProduct && (
        <div className="mt-10 pt-8 border-t border-slate-200">
          <div className="flex flex-row md:grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-center">
            <div className="shrink-0">
              {product.additionalProduct.image ? (
                <div className="w-28 sm:w-44 md:w-64 lg:w-72 aspect-[4/3] rounded-[10px] overflow-hidden bg-slate-100 shadow-sm border border-slate-100">
                  <img
                    src={product.additionalProduct.image.startsWith('/') ||
                      product.additionalProduct.image.startsWith('http')
                      ? product.additionalProduct.image
                      : `/${product.additionalProduct.image}`}
                    alt={product.additionalProduct.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ) : (
                <div className="w-28 sm:w-44 md:w-64 lg:w-72 aspect-[4/3] rounded-[10px] bg-slate-100 border border-dashed border-slate-300 flex items-center justify-center">
                  <span className="text-xs text-slate-400">Image Soon</span>
                </div>
              )}
            </div>

            <div className="min-w-0 flex-1">
              <h3 className="text-[20px] sm:text-[22px] font-bold text-navy-900">
                {product.additionalProduct.name}
              </h3>
              {product.additionalProduct.description && (
                <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {product.additionalProduct.description}
                </p>
              )}
            </div>
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
