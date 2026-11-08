import { businessInfo } from '../../data/businessInfo';

export default function Hero() {
  return (
    <section id="home" className="w-full pt-6 sm:pt-8 md:pt-10 pb-6 sm:pb-8 px-4 sm:px-6 lg:px-8">
      <h1 className="sr-only">{businessInfo.brandName}</h1>
      <div className="max-w-5xl lg:max-w-6xl mx-auto">
        {/* Floating 3D Card with Subtle Gold Border and Soft Shadows (matching reference image) */}
        <div className="relative bg-white rounded-[24px] sm:rounded-[32px] lg:rounded-[38px] overflow-hidden border border-[#e7e1d7] shadow-[0_20px_45px_rgba(8,31,65,0.06),0_4px_16px_rgba(0,0,0,0.02)] hover:shadow-[0_26px_55px_rgba(8,31,65,0.09),0_8px_20px_rgba(0,0,0,0.03)] transition-all duration-300">
          <img
            src="/images/hero-banner.jpg"
            alt="Al Falah Hardware & Sanitary"
            width={1280}
            height={762}
            className="block w-full h-auto object-contain sm:object-cover aspect-[1280/762]"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
