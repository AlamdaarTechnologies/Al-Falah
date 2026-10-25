import { businessInfo } from '../../data/businessInfo';

export default function AboutSection() {
  return (
    <section id="about" className="py-14 sm:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <span aria-hidden="true" className="block mx-auto mb-4 h-0.5 w-12 bg-gold-500" />
        <h2 className="text-2xl sm:text-4xl font-bold text-navy-900">About Us</h2>
        <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
          {businessInfo.brandName} {businessInfo.subtitle.charAt(0).toLowerCase() + businessInfo.subtitle.slice(1)}
        </p>
        <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
          Send us your requirement on WhatsApp for rates and availability.
        </p>
      </div>
    </section>
  );
}
