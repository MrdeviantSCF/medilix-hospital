import React, { useState, useEffect } from 'react';
import { Phone, Clock, MapPin, Menu, X, Calendar, ShieldAlert } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

export default function Header({ onBookClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Medical Team', href: '#doctors' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Patient Guide', href: '#patient-guide' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 90;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Utility Announcement Bar */}
      <div className="bg-hospital-900 text-slate-200 text-xs sm:text-sm py-2 px-4 border-b border-hospital-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-4 sm:space-x-6">
            <div className="flex items-center space-x-1.5 text-emerald-400 font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Open 24/7 for Emergencies</span>
            </div>
            <div className="hidden md:flex items-center space-x-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              <span>Shevgaon Road, Near Arjun Baba Mandir, Pathardi</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href={`tel:${HOSPITAL_INFO.phoneRaw}`}
              className="flex items-center space-x-1.5 font-semibold text-white hover:text-sky-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-red-400 animate-pulse" />
              <span>24/7 Helpline: {HOSPITAL_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
            : 'bg-white shadow-sm py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Wordmark */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center space-x-3 group"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-hospital-700 to-hospital-900 flex items-center justify-center shadow-md shadow-sky-900/10 text-white font-black text-xl group-hover:scale-105 transition-transform">
                <span className="text-sky-300">M</span>
                <span className="text-white">H</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-extrabold tracking-tight text-hospital-900 group-hover:text-hospital-700 transition-colors">
                  MEDILIX HOSPITAL
                </span>
                <span className="text-[11px] sm:text-xs font-medium text-slate-500 tracking-wider uppercase">
                  Pathardi • Ahmednagar
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-hospital-700 hover:bg-slate-100/70 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="hidden sm:flex items-center space-x-3">
              <a
                href={`tel:${HOSPITAL_INFO.phoneRaw}`}
                className="flex items-center space-x-1.5 px-3 py-2 text-xs font-semibold text-red-700 bg-red-50 hover:bg-red-100 border border-red-200 rounded-lg transition-colors"
                title="Immediate 24/7 Emergency Helpline"
              >
                <ShieldAlert className="w-4 h-4 text-red-600" />
                <span className="hidden xl:inline">Emergency:</span>
                <span>84849 62526</span>
              </a>

              <button
                onClick={onBookClick}
                className="flex items-center space-x-1.5 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-hospital-700 hover:bg-hospital-800 active:scale-95 shadow-sm rounded-lg transition-all"
              >
                <Calendar className="w-4 h-4 text-sky-200" />
                <span>Book Appointment</span>
              </button>
            </div>

            {/* Mobile Hamburger Menu Button */}
            <div className="flex items-center sm:hidden space-x-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:text-hospital-900 hover:bg-slate-100 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-fadeIn">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-2.5 text-base font-medium text-slate-800 hover:bg-hospital-50 hover:text-hospital-800 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href={`tel:${HOSPITAL_INFO.phoneRaw}`}
                className="w-full flex items-center justify-center space-x-2 py-3 bg-red-50 text-red-700 border border-red-200 rounded-xl font-bold text-sm shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>24/7 Emergency: {HOSPITAL_INFO.phone}</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookClick();
                }}
                className="w-full flex items-center justify-center space-x-2 py-3 bg-hospital-800 text-white rounded-xl font-bold text-sm shadow-md"
              >
                <Calendar className="w-4 h-4 text-sky-300" />
                <span>Book an Appointment</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
