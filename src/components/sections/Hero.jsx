import { ArrowDown } from 'lucide-react';
import { businessInfo } from '../../data/businessInfo';
import Button from '../common/Button';

export default function Hero() {
  return (
    <section id="home" className="bg-navy-950 text-white border-b-2 border-gold-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight max-w-5xl">
          {businessInfo.brandName}
        </h1>
        <p className="mt-5 text-lg sm:text-2xl font-bold text-slate-200 max-w-4xl">
          {businessInfo.tagline}
        </p>
        <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
          {businessInfo.subtitle}
        </p>
        <div className="mt-8">
          <Button as="a" href="#solutions" variant="gold" size="md" icon={ArrowDown} iconPosition="right" className="font-bold">
            Our Solutions
          </Button>
        </div>
      </div>
    </section>
  );
}
