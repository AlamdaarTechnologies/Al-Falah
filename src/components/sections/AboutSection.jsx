import { businessInfo } from '../../data/businessInfo';

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-12 sm:py-16 lg:py-20 px-6 sm:px-8 bg-transparent">
      <div className="max-w-2xl sm:max-w-3xl mx-auto text-center">
        {/* Top Gold Accent Bar */}
        <span aria-hidden="true" className="block mx-auto mb-3 h-0.5 w-10 bg-[#d4af37]" />

        {/* Eyebrow */}
        <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-[#b8860b] mb-2">
          About Al Falah
        </p>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-navy-900 [text-wrap:balance]">
          About Us
        </h2>

        {/* Existing Content */}
        <p className="mt-4 sm:mt-5 text-base sm:text-lg font-medium leading-relaxed sm:leading-8 text-navy-700 [text-wrap:pretty]">
          {businessInfo.brandName} supplies fibre mesh, bird netting, pipes, fittings, valves and sanitary fixtures to contractors, builders, societies and homeowners.
        </p>
      </div>
    </section>
  );
}
