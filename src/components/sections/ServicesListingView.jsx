import { ArrowLeft, MessageCircle, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { royalBirdnetServices } from '../../data/services';
import { getServiceInquiryUrl } from '../../utils/whatsapp';

/**
 * Dedicated Services Listing View:
 * Displays 4-5 curated services in a vertical layout (one below another).
 * Each card features a prominent service image, clear title, rich description,
 * key highlights, and direct WhatsApp inquiry button.
 */
export default function ServicesListingView({ onBack }) {
  // Display 5 premium individual services as requested
  const displayServices = royalBirdnetServices.slice(0, 5);

  return (
    <div className="w-full">
      {/* Back Button & Navigation Header */}
      <div className="mb-6 sm:mb-8 flex items-center justify-between">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-navy-900 border border-slate-200/80 shadow-sm hover:bg-slate-50 hover:border-slate-300 font-semibold text-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
        >
          <ArrowLeft size={16} />
          <span>Back to Products</span>
        </button>
      </div>

      {/* View Header */}
      <div className="mb-8 sm:mb-10 text-left">
        <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-gold-600 block mb-1">
          The Royal Bird Net
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-navy-900">
          Our Installation & Supply Services
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
          Select any service below to review specifications or discuss site requirements, measurements, and rate estimates directly with our technical team on WhatsApp.
        </p>
      </div>

      {/* Vertical List of Individual Services */}
      <div className="flex flex-col gap-6 sm:gap-8">
        {displayServices.map((service, index) => {
          const waUrl = getServiceInquiryUrl(service.name);

          return (
            <article
              key={service.id || index}
              className="bg-white rounded-[24px] sm:rounded-[30px] border border-slate-100 shadow-[0_12px_32px_rgba(8,31,65,0.06)] hover:shadow-[0_18px_45px_rgba(8,31,65,0.1)] transition-all duration-300 overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-6 items-stretch">
                {/* Service Image Container */}
                <div className="md:col-span-5 relative w-full aspect-[16/10] md:aspect-auto min-h-[220px] md:min-h-[260px] bg-slate-100 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-navy-900/80 backdrop-blur-sm text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Service 0{index + 1}
                  </div>
                </div>

                {/* Service Content Details */}
                <div className="md:col-span-7 p-5 sm:p-7 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-navy-900 tracking-tight leading-snug">
                      {service.name}
                    </h3>
                    <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Quality Highlights */}
                    <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 size={15} className="text-teal-600 shrink-0" />
                        <span>Professional Installation</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 size={15} className="text-teal-600 shrink-0" />
                        <span>UV-Resistant & Heavy Duty</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 size={15} className="text-teal-600 shrink-0" />
                        <span>On-site Inspection Available</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 size={15} className="text-teal-600 shrink-0" />
                        <span>Society & Commercial Rates</span>
                      </li>
                    </ul>
                  </div>

                  {/* WhatsApp Action Button */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between flex-wrap gap-3">
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#142D50] text-white hover:bg-[#0c1f38] active:scale-[0.98] font-semibold text-sm shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-navy-600"
                    >
                      <MessageCircle size={16} className="text-emerald-400" />
                      <span>Enquire on WhatsApp</span>
                      <ArrowUpRight size={15} className="text-white/70" />
                    </a>
                    <span className="text-xs text-slate-400">
                      Direct quote & availability
                    </span>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
