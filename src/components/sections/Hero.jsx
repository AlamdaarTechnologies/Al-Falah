import { businessInfo } from '../../data/businessInfo';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-navy-950 bg-cover bg-center text-white text-center border-b-4 border-teal-600"
      style={{ backgroundImage: "url('/images/hero-banner.jpg')" }}
    >
      {/* Navy tint over the image so the text stays readable. Lower the numbers (e.g. /60) to show more of the image. */}
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-navy-950/90 via-navy-900/80 to-navy-700/70" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-24 sm:py-32 lg:py-40">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
          {businessInfo.brandName}
        </h1>
        <p className="mt-5 flex items-center justify-center gap-3 text-xs sm:text-sm uppercase tracking-[0.25em] text-gold-400">
          <span aria-hidden="true" className="hidden sm:block h-px w-10 bg-gold-500" />
          {businessInfo.tagline}
        </p>
      </div>
    </section>
  );
}