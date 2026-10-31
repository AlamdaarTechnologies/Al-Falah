import { ArrowLeft, MessageCircle } from 'lucide-react';
import Button from './Button';
import { getProductInquiryUrl } from '../../utils/whatsapp';

function DetailBlock({ title, items }) {
  if (!items || items.length === 0) return null;
  return (
    <div className="mt-5">
      <h4 className="text-sm font-bold uppercase tracking-wider text-navy-900">{title}</h4>
      <ul className="mt-2 list-disc pl-5 space-y-1 text-sm text-slate-600 leading-relaxed">
        {items.map((item, idx) => <li key={idx}>{item}</li>)}
      </ul>
    </div>
  );
}

export default function ProductDetail({ product, backLabel, onBack }) {
  const specs = Object.entries(product.specifications || {}).map(([k, v]) => `${k}: ${v}`);

  return (
    <div>
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-2 text-sm font-semibold text-navy-900 hover:text-teal-700 transition-colors mb-6 group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
        Back to {backLabel}
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        <div className="relative rounded-[22px] overflow-hidden bg-slate-100 shadow-sm md:sticky md:top-24 self-start">
          <img
            src={product.image}
            alt={product.name}
            className="w-full aspect-[4/3] object-cover"
          />
        </div>

        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-navy-900 tracking-tight">
            {product.name}
          </h3>

          <div className="mt-4 pt-4 border-t border-slate-100">
            <h4 className="text-sm font-bold uppercase tracking-wider text-navy-900">Description</h4>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
              {product.fullDescription}
            </p>
          </div>

          <DetailBlock title="Technical Specifications" items={specs} />
          <DetailBlock title="Key Advantages" items={product.features} />
          <DetailBlock title="Available Sizes & Grades" items={product.sizes} />
          <DetailBlock title="Applications" items={product.applications} />

          <div className="mt-8 pt-6 border-t border-slate-100">
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
      </div>
    </div>
  );
}
