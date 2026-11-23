import { typo } from './productFormat';

export default function SubcategoryDetail({ parent, item }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-8 items-center">
      <div className="md:col-span-2 min-w-0 rounded-[10px] overflow-hidden bg-slate-100 shadow-sm">
        <img src={item.image} alt={item.name} className="block w-full max-w-full aspect-[4/3] object-cover" />
      </div>
      <div className="md:col-span-3 min-w-0">
        <h4 className={typo.title}>{item.name}</h4>
        <p className={`mt-1.5 ${typo.description}`}>
          Part of our {parent.category} range. Message us on WhatsApp for sizes, rates and availability.
        </p>

      </div>
    </div>
  );
}
