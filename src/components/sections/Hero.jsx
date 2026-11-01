import { businessInfo } from '../../data/businessInfo';

/**
 * Full-width banner. The height follows the image's aspect ratio (1280:762) but never
 * exceeds the visible screen height under the header, so on laptops the whole banner
 * fits without scrolling and there are no side gaps. object-cover only trims a little
 * from the top/bottom on wide, short screens.
 */
export default function Hero() {
  return (
    <section id="home" className="w-full bg-white">
      <h1 className="sr-only">{businessInfo.brandName}</h1>
      <img
        src="/images/hero-banner.jpg"
        alt="Al Falah Hardware & Sanitary"
        width={1280}
        height={762}
        className="block w-full object-cover object-center h-[calc(100vw/1.85)] sm:h-[min(calc(100vw/1.6798),calc(100svh-5rem))] sm:min-h-[12rem]"
        loading="eager"
        fetchPriority="high"
        decoding="async"
      />
    </section>
  );
}
