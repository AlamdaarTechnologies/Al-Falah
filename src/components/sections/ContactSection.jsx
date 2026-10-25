import { MessageCircle, Phone, Mail, MapPin } from 'lucide-react';
import { businessInfo } from '../../data/businessInfo';
import { divisions } from '../../data/solutions';
import { getDivisionInquiryUrl } from '../../utils/whatsapp';
import Button from '../common/Button';

export default function ContactSection() {
  return (
    <section id="contact" className="py-14 sm:py-20 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-700 border-t-4 border-teal-600">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-4xl font-bold text-white">Contact Us</h2>
        <p className="mt-4 text-base sm:text-lg text-slate-300">
          Tell us what you need on WhatsApp. Choose the solution you are interested in.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          {divisions.map((d) => (
            <Button
              key={d.id}
              as="a"
              href={getDivisionInquiryUrl(d.shortName)}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              size="md"
              icon={MessageCircle}
              className="font-bold"
            >
              WhatsApp: {d.shortName}
            </Button>
          ))}
        </div>

        <ul className="mt-10 space-y-3 text-slate-200">
          <li>
            <a href={`tel:${businessInfo.phonePrimary.replace(/\s+/g, '')}`} className="inline-flex items-center gap-2 hover:text-white">
              <Phone className="w-4 h-4 text-gold-400" />{businessInfo.phonePrimary}
            </a>
          </li>
          <li>
            <a href={`mailto:${businessInfo.email}`} className="inline-flex items-center gap-2 hover:text-white">
              <Mail className="w-4 h-4 text-gold-400" />{businessInfo.email}
            </a>
          </li>
          {businessInfo.address && (
            <li className="inline-flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gold-400" />{businessInfo.address}
            </li>
          )}
        </ul>
      </div>
    </section>
  );
}
