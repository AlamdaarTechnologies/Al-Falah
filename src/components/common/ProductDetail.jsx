import { ArrowLeft, MessageCircle } from 'lucide-react';
import Button from './Button';
import { getProductInquiryUrl } from '../../utils/whatsapp';

function List({ title, items }) {
  if (!items || items.length === 0) return null;
  return (
    <>
      <h4 className="mt-6 text-lg font-bold text-navy-900">{title}</h4>
      <ul className="mt-2 list-disc pl-5 space-y-1.5 text-sm sm:text-base text-slate-700">
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </>
  );
}

export default function ProductDetail({ product, backLabel, onBack }) {
  const specs = Object.entries(product.specifications || {}).map(([k, v]) => `${k}: ${v}`);

  return (
    <div>
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-2 text-sm font-medium text-navy-900 hover:text-teal-600"
      >
        <ArrowLeft className="w-4 h-4" /> Back to {backLabel}
      </button>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        <img
          src={product.image}
          alt={product.name}
          className="w-full rounded-lg shadow-md object-cover bg-slate-200 md:sticky md:top-24 self-start"
        />
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-navy-900">{product.name}</h3>
          <h4 className="mt-5 text-lg font-bold text-navy-900">Product Description</h4>
          <p className="mt-2 text-sm sm:text-base text-slate-700 leading-relaxed">{product.fullDescription}</p>
          <List title="Product Specification" items={specs} />
          <List title="Product Advantages" items={product.features} />
          <List title="Available Sizes" items={product.sizes} />
          <List title="Product Applications" items={product.applications} />
          <div className="mt-8">
            <Button
              as="a"
              href={getProductInquiryUrl(product)}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              size="md"
              icon={MessageCircle}
              className="font-bold"
            >
              Inquire on WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
