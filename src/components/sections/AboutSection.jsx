import { businessInfo } from '../../data/businessInfo';

export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span aria-hidden="true" className="block mx-auto mb-5 h-0.5 w-12 bg-gold-500" />
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-navy-900">About Us</h2>
        <p className="mt-6 text-lg sm:text-xl font-medium leading-relaxed text-navy-900">
          {businessInfo.brandName} {businessInfo.subtitle.charAt(0).toLowerCase() + businessInfo.subtitle.slice(1)}
        </p>
        <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600">
          Send us your requirement on WhatsApp for rates and availability.
        </p>
      </div>
    </section>
  );
}
