import { businessInfo } from '../../data/businessInfo';

export default function AboutSection() {
  return (
    <section id="about" className="bg-white pt-9 pb-12 sm:py-20 lg:py-24">
      <div className="max-w-xl mx-auto px-6 sm:px-8 text-center">
        <span aria-hidden="true" className="block mx-auto mb-3 h-0.5 w-10 bg-gold-500" />
        <h2 className="text-[1.75rem] sm:text-4xl font-bold leading-tight tracking-tight text-navy-900 [text-wrap:balance]">
          About Us
        </h2>
        <p className="mt-4 sm:mt-5 text-base sm:text-lg font-medium leading-7 sm:leading-8 text-navy-700 [text-wrap:pretty]">
          {businessInfo.brandName} supplies fibre mesh, bird netting, pipes, fittings, valves and sanitary fixtures to contractors, builders, societies and homeowners.
        </p>
        <p className="mt-3 text-[0.9375rem] sm:text-base font-normal leading-7 text-slate-600 [text-wrap:balance]">
          Send us your requirement on <span className="font-semibold text-navy-900">WhatsApp</span> for rates and availability.
        </p>
      </div>
    </section>
  );
}
