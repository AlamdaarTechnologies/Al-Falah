import SolutionCard from '../common/SolutionCard';
import { divisions } from '../../data/solutions';
import { Layers } from 'lucide-react';

export default function SolutionsSection({ onSelect }) {
  return (
    <section 
      id="solutions" 
      className="py-16 sm:py-24 bg-[#eaecf0] border-t border-slate-300/60 relative"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Header with clean eye-soothing hierarchy */}
        <div className="max-w-xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-slate-300 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3 shadow-xs">
            <Layers className="w-3.5 h-3.5 text-navy-900" />
            <span>Product Divisions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight">
            Our Solutions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Select a division below to explore certified materials, technical specifications, and WhatsApp availability.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-3xl lg:max-w-4xl mx-auto">
          {divisions.map((division) => (
            <SolutionCard key={division.id} division={division} isOpen={false} onToggle={() => onSelect(division.id)} />
          ))}
        </div>
      </div>
    </section>
  );
}
