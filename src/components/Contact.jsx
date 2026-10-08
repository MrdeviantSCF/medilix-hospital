import React from 'react';
import { MapPin, Phone, Clock, MessageSquare, Navigation, ExternalLink, ShieldCheck } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

export default function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-50/80 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-extrabold uppercase tracking-widest text-hospital-600 bg-hospital-50 border border-sky-100 px-3 py-1 rounded-full">
            Hospital Location & Support
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-hospital-950 tracking-tight">
            Contact & Visit Us
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Conveniently situated on Shevgaon Road, near Arjun Baba Mandir in Pathardi. Open round-the-clock for emergencies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
                Official Listing Details
              </span>
              <h3 className="text-2xl font-extrabold text-hospital-950 mt-1">
                MEDILIX HOSPITAL
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Pathardi, Ahmednagar District, Maharashtra
              </p>
            </div>

            {/* Address */}
            <div className="flex items-start space-x-3.5 pt-2 border-t border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Hospital Address</h4>
                <address className="not-italic text-sm sm:text-base font-semibold text-hospital-950 mt-0.5 leading-snug">
                  Shevgaon Road,<br />
                  Near Arjun Baba Mandir,<br />
                  Pathardi, Maharashtra 414102, India
                </address>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-3.5 pt-2 border-t border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Contact & Emergency Helpline</h4>
                <a
                  href={`tel:${HOSPITAL_INFO.phoneRaw}`}
                  className="text-base sm:text-lg font-bold text-red-600 hover:text-red-700 block mt-0.5"
                >
                  {HOSPITAL_INFO.phone}
                </a>
                <span className="text-xs text-slate-500">Direct hospital reception and emergency desk</span>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start space-x-3.5 pt-2 border-t border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Availability</h4>
                <div className="text-sm sm:text-base font-bold text-emerald-700 mt-0.5 flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>Open 24 Hours / 7 Days</span>
                </div>
                <span className="text-xs text-slate-500">24/7 Casualty & Inpatient Services</span>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href={`tel:${HOSPITAL_INFO.phoneRaw}`}
                className="w-full flex items-center justify-center space-x-2 py-3.5 bg-hospital-700 hover:bg-hospital-800 text-white font-bold rounded-xl text-sm transition-colors shadow-xs"
              >
                <Phone className="w-4 h-4" />
                <span>Call Hospital (+91 84849 62526)</span>
              </a>

              <a
                href={HOSPITAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-sm transition-colors shadow-xs"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={HOSPITAL_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-sm transition-colors"
              >
                <Navigation className="w-4 h-4 text-sky-600" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>

          {/* Embedded Map Column */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-4 sm:p-5 border border-slate-200/80 shadow-sm flex flex-col h-full">
            <div className="flex items-center justify-between pb-3 px-2">
              <div className="flex items-center space-x-2">
                <Navigation className="w-4 h-4 text-sky-600" />
                <span className="text-xs sm:text-sm font-bold text-hospital-950">
                  Interactive Map Location
                </span>
              </div>
              <a
                href={HOSPITAL_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-hospital-700 hover:text-hospital-900 inline-flex items-center space-x-1"
              >
                <span>Full Map</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Embedded Google Map */}
            <div className="relative w-full h-80 sm:h-96 lg:h-[460px] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
              <iframe
                title="MEDILIX HOSPITAL Google Maps Location"
                src={HOSPITAL_INFO.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>

            <div className="pt-3 px-2 flex items-center justify-between text-[11px] sm:text-xs text-slate-500">
              <span>Landmark: Near Arjun Baba Mandir on Shevgaon Road</span>
              <span className="font-medium text-emerald-600">Ample Patient Parking</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
