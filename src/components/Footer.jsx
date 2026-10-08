import React, { useState } from 'react';
import { Phone, MapPin, Clock, ShieldAlert, Heart, ArrowUp } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';
import PolicyModal from './PolicyModal';

export default function Footer() {
  const [modalType, setModalType] = useState(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Doctors', href: '#doctors' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Patient Guide', href: '#patient-guide' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-hospital-950 text-slate-300 border-t border-hospital-900 pt-16 pb-24 lg:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-hospital-500 to-sky-700 flex items-center justify-center text-white font-black text-lg shadow-md">
                <span className="text-white">MH</span>
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-tight text-white block">
                  MEDILIX HOSPITAL
                </span>
                <span className="text-xs text-sky-400 font-medium tracking-wider uppercase block">
                  Pathardi • Maharashtra 414102
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Providing accessible, reliable and patient-focused healthcare and 24/7 emergency casualty assistance for the community of Pathardi and surrounding areas.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center space-x-2 bg-red-950/80 border border-red-800/80 px-3.5 py-2 rounded-xl text-xs font-bold text-red-300">
                <ShieldAlert className="w-4 h-4 text-red-400 shrink-0" />
                <span>24/7 Emergency Casualty: {HOSPITAL_INFO.phone}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-sky-400">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors hover:underline underline-offset-4"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Address */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-sky-400">
              Hospital Address & Desk
            </h4>
            <address className="not-italic text-xs sm:text-sm text-slate-400 space-y-2 leading-relaxed">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>
                  Shevgaon Road, Near Arjun Baba Mandir,<br />
                  Pathardi, Maharashtra 414102, India
                </span>
              </div>

              <div className="flex items-center space-x-2 pt-1">
                <Phone className="w-4 h-4 text-red-400 shrink-0" />
                <a
                  href={`tel:${HOSPITAL_INFO.phoneRaw}`}
                  className="text-white hover:text-sky-300 font-semibold"
                >
                  {HOSPITAL_INFO.phone}
                </a>
              </div>

              <div className="flex items-center space-x-2 pt-1">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-emerald-400 font-semibold">Open 24/7 (Emergency & Admissions)</span>
              </div>
            </address>

            <div className="pt-2">
              <a
                href={HOSPITAL_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-xs text-sky-400 hover:text-sky-300 underline underline-offset-4"
              >
                <span>Find Us on Google Maps</span>
              </a>
            </div>
          </div>
        </div>

        {/* Prominent Medical Disclaimer */}
        <div className="p-4 sm:p-5 rounded-2xl bg-hospital-900/60 border border-hospital-800 text-xs text-slate-400 leading-relaxed space-y-1">
          <div className="flex items-center space-x-2 text-sky-300 font-bold uppercase tracking-wider text-[11px]">
            <ShieldAlert className="w-4 h-4 text-sky-400" />
            <span>Official Medical Disclaimer</span>
          </div>
          <p>
            The information provided on this website is for general informational purposes and does not replace professional medical advice, diagnosis or treatment. In an emergency, contact the hospital directly.
          </p>
        </div>

        {/* Bottom copyright and legal links */}
        <div className="pt-6 border-t border-hospital-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} MEDILIX HOSPITAL. All rights reserved.
          </div>

          <div className="flex items-center space-x-6">
            <button
              onClick={() => setModalType('privacy')}
              className="hover:text-slate-300 transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setModalType('terms')}
              className="hover:text-slate-300 transition-colors"
            >
              Terms & Conditions
            </button>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-lg bg-hospital-900 hover:bg-hospital-800 text-slate-300 transition-colors"
              title="Scroll to top"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {modalType && (
        <PolicyModal type={modalType} onClose={() => setModalType(null)} />
      )}
    </footer>
  );
}
