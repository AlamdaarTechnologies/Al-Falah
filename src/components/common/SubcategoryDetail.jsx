import { MessageCircle } from 'lucide-react';
import Button from './Button';
import { getProductInquiryUrl } from '../../utils/whatsapp';

export default function SubcategoryDetail({ parent, item }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-center">
      <div className="rounded-[10px] overflow-hidden bg-slate-100 shadow-sm">
        <img src={item.image} alt={item.name} className="w-full aspect-[4/3] object-cover" />
      </div>
      <div>
        <h4 className="text-[18px] sm:text-[19px] font-bold uppercase tracking-wider text-navy-900">{item.name}</h4>
        <p className="mt-2 text-base sm:text-[17px] text-slate-600 leading-relaxed">
          Part of our {parent.category} range. Message us on WhatsApp for sizes, rates and availability.
        </p>
        <div className="mt-8 pt-6 border-t border-slate-100">
          <Button
            as="a"
            href={getProductInquiryUrl({ ...parent, name: item.name })}
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
  );
}
