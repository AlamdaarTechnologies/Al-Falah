import { services } from '../../data/services';

/**
 * "Our Services" block shown at the end of the Royal Bird Net catalogue.
 * Renders the heading only until entries are added to src/data/services.js.
 */
export default function ServicesSection() {
  return (
    <section
      id="our-services"
      aria-labelledby="our-services-heading"
      className="mt-10 sm:mt-14 pt-8 sm:pt-10 border-t border-slate-200"
    >
      <h2 id="our-services-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-900 tracking-tight">
        Our Services
      </h2>

      {services.length > 0 && (
        <div className="mt-6 sm:mt-8 space-y-4">
          {services.map((s) => (
            <article
              key={s.id}
              className="bg-white border border-white/80 rounded-[22px] p-4 sm:p-5 shadow-[0_8px_24px_rgba(0,0,0,0.04)]"
            >
              <h3 className="font-sans text-base sm:text-lg font-semibold text-slate-900 leading-snug">{s.name}</h3>
              {s.description && (
                <p className="mt-1.5 text-sm sm:text-[15px] text-slate-600 leading-relaxed">{s.description}</p>
              )}
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
