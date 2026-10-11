import React from 'react';
import { Phone, MessageCircle, Mail, Clock } from 'lucide-react';
import { businessInfo } from '../../data/businessInfo';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { buildWhatsAppLink } from '../../utils/whatsapp';

export default function ContactSection() {
  const whatsappUrl = buildWhatsAppLink("Hello Al Falah Hardware team, I am reaching out from your website.");

  return (
    <section id="contact" className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeading
          badge="Get In Touch"
          title="Contact Details & Business Hours"
          subtitle="Reach out directly via phone, email, or WhatsApp for wholesale quotations and inquiries."
          centered={false}
        />

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">

          {/* Direct Contact Lines Card */}
          <div className="bg-white rounded border border-slate-200 p-5 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Direct Contact Lines
            </h4>

            <div className="space-y-2 text-sm">
              <a
                href={`tel:${businessInfo.phonePrimary.replace(/\s+/g, '')}`}
                className="flex items-center gap-3 p-2.5 rounded bg-slate-50 hover:bg-slate-100 text-slate-800 transition-colors"
              >
                <Phone className="w-4 h-4 text-navy-700 shrink-0" />
                <div>
                  <p className="text-[11px] text-slate-500 font-medium">Sales & Orders</p>
                  <p className="font-bold text-slate-900">{businessInfo.phonePrimary}</p>
                </div>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-2.5 rounded bg-green-50 hover:bg-green-100 text-green-950 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-green-700 shrink-0" />
                <div>
                  <p className="text-[11px] text-green-700 font-medium">WhatsApp Quotation Hotline</p>
                  <p className="font-bold text-green-900">{businessInfo.displayWhatsapp}</p>
                </div>
              </a>

              <a
                href={`mailto:${businessInfo.email}`}
                className="flex items-center gap-3 p-2.5 rounded bg-slate-50 hover:bg-slate-100 text-slate-800 transition-colors"
              >
                <Mail className="w-4 h-4 text-slate-600 shrink-0" />
                <div>
                  <p className="text-[11px] text-slate-500 font-medium">Email Inquiries</p>
                  <p className="font-semibold text-slate-900 text-xs sm:text-sm">{businessInfo.email}</p>
                </div>
              </a>
            </div>
          </div>

          {/* Working Hours Card */}
          <div className="bg-white rounded border border-slate-200 p-5 space-y-3 text-xs sm:text-sm">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Business Hours
            </h4>

            <div className="flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-navy-700 shrink-0 mt-0.5" />
              <div className="space-y-1.5">
                {businessInfo.workingHours.map((wh, idx) => (
                  <div key={idx} className="text-slate-700">
                    <span className="font-bold text-slate-900">{wh.days}:</span>
                    <span className="ml-1">{wh.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <p className="text-xs text-slate-600">Direct pickup and truck loading support available.</p>
              <Button
                variant="whatsapp"
                size="sm"
                as="a"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                icon={MessageCircle}
                className="w-full sm:w-auto text-xs font-bold"
              >
                Chat on WhatsApp
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
