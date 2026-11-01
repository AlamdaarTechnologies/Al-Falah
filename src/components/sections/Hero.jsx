import { businessInfo } from '../../data/businessInfo';

export default function Hero() {
  return (
    <section id="home" className="w-full bg-white p-3 sm:p-4">
      <h1 className="sr-only">{businessInfo.brandName}</h1>
      {/* Gold rounded frame around the banner */}
      <div className="overflow-hidden rounded-2xl sm:rounded-3xl border-[3px] border-[#e1ab2d]">
        <img
          src="/images/hero-banner.jpg"
          alt="Al Falah Hardware & Sanitary"
          width={1280}
          height={762}
          className="block w-full object-cover object-center aspect-[1.85/1] sm:aspect-[1280/762] max-h-[calc(100svh-7rem)]"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </div>
    </section>
  );
}