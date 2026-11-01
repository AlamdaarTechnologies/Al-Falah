import { businessInfo } from '../../data/businessInfo';

export default function InquirySection({ solutionName }) {
  const message = solutionName
    ? `Hello Al Falah Hardware, I would like to inquire about your ${solutionName} products.`
    : 'Hello Al Falah Hardware, I would like to inquire about your products.';

  return (
    <section id="inquiry" aria-label="WhatsApp inquiry" className="bg-white py-12 sm:py-16 border-t border-slate-200">
      <p className="max-w-3xl mx-auto px-4 sm:px-6 text-center text-base sm:text-lg text-slate-600">
        Have a product or site requirement?{' '}
        <a
          href={`https://wa.me/91${businessInfo.whatsappNumber}?text=${encodeURIComponent(message)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-teal-600 hover:text-navy-900 underline underline-offset-4"
        >
          Get in touch on WhatsApp &rarr;
        </a>
      </p>
    </section>
  );
}
