import { Target, Lightbulb, Gem } from 'lucide-react';
import { businessInfo } from '../../data/businessInfo';

const values = [
  {
    title: 'Uncompromising Quality',
    desc: 'Every metre of fibre mesh and every pipe fitting is sourced to comply with certified ISI and ASTM industrial standards for long-term safety and durability.',
  },
  {
    title: 'Direct & Transparent Pricing',
    desc: 'No middlemen markups or guesswork. We provide instant, itemized rate sheets and transparent quotes directly via WhatsApp or counter sales.',
  },
  {
    title: 'Prompt Site Dispatch',
    desc: 'Swift turnaround and dependable delivery to contractors, housing societies, high-rise balconies, and infrastructure job sites.',
  },
  {
    title: 'Tailored Technical Solutions',
    desc: 'From heavy-duty industrial duct protection to leak-proof CPVC/UPVC sanitary setups, we supply the exact specs your project requires.',
  },
];

// Each block: coloured strip + icon, small "OUR" label, large heading, text.
const blocks = [
  {
    id: 'mission',
    word: 'Mission',
    icon: Target,
    strip: 'bg-navy-900',
    text: 'To provide builders, contractors, housing societies, and homeowners with trusted, certified hardware and sanitary systems. We deliver peace of mind through reliable materials, honest dealings, and dependable service that stands the test of time.',
  },
  {
    id: 'vision',
    word: 'Vision',
    icon: Lightbulb,
    strip: 'bg-teal-600',
    // DRAFT: please confirm or reword this statement with the client, or delete this block.
    text: 'To be a dependable local source of fibre mesh and plumbing sanitary materials, known for honest advice, fair prices and products that last.',
  },
  {
    id: 'values',
    word: 'Values',
    icon: Gem,
    strip: 'bg-gold-500',
    list: values,
  },
];


export default function MissionSection() {
  return (
    <section id="mission" className="bg-mist py-16 sm:py-20 lg:py-24 border-t-4 border-teal-600">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 divide-y divide-teal-600/30">
        {blocks.map((b) => {
          const Icon = b.icon;
          return (
            <div key={b.id} id={b.id === 'mission' ? undefined : b.id} className="flex gap-5 sm:gap-8 lg:gap-10 py-10 sm:py-14 first:pt-0 last:pb-0">
              <div className={`${b.strip} w-14 sm:w-20 lg:w-24 shrink-0 flex items-start justify-center pt-5 sm:pt-7 rounded-sm`}>
                <Icon aria-hidden="true" className="w-7 h-7 sm:w-10 sm:h-10 text-white" />
              </div>

              <div className="min-w-0 flex-1">
                <h2 className="uppercase leading-none">
                  <span className="block text-lg sm:text-2xl font-semibold tracking-[0.2em] text-teal-600">Our</span>
                  <span className="block mt-1 text-[clamp(2.5rem,12vw,6rem)] font-black tracking-tight text-navy-900">{b.word}</span>
                </h2>

                {b.text && (
                  <p className="mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600">{b.text}</p>
                )}

                {b.list && (
                  <ol className="mt-4 sm:mt-6 max-w-2xl list-decimal pl-5 space-y-4 marker:font-bold marker:text-teal-600">
                    {b.list.map((v) => (
                      <li key={v.title} className="pl-1">
                        <span className="block font-bold text-navy-900">{v.title}</span>
                        <span className="block mt-1 text-sm sm:text-base leading-relaxed text-slate-600">{v.desc}</span>
                      </li>
                    ))}
                  </ol>
                )}
              </div>
            </div>
          );
        })}

        <p className="pt-10 sm:pt-12 text-center text-sm sm:text-base text-slate-600">
          Have a project or site requirement?{' '}
          <a
            href={`https://wa.me/91${businessInfo.whatsappNumber}?text=${encodeURIComponent('Hello Al Falah Enterprise, I would like to inquire about your products.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-teal-600 hover:text-navy-900 underline underline-offset-4"
          >
            Get in touch on WhatsApp &rarr;
          </a>
        </p>
      </div>
    </section>
  );
}
