import React from 'react';
import { Phone, Calendar, Clock, MapPin, ShieldCheck, HeartHandshake, Award, Activity } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

export default function Hero({ onBookClick }) {
  return (
    <section id="home" className="relative bg-gradient-to-b from-hospital-50/70 via-white to-slate-50 pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
      {/* Decorative background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0284c70a_1px,transparent_1px),linear-gradient(to_bottom,#0284c70a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status badges */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <div className="inline-flex items-center space-x-2 bg-emerald-50 border border-emerald-200/80 px-3 py-1.5 rounded-full text-xs font-bold text-emerald-800 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>24/7 Emergency Care Ready</span>
              </div>
              <div className="inline-flex items-center space-x-1.5 bg-sky-50 border border-sky-200/70 px-3 py-1.5 rounded-full text-xs font-semibold text-hospital-800">
                <MapPin className="w-3.5 h-3.5 text-sky-600" />
                <span>Pathardi, Ahmednagar</span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold text-hospital-950 tracking-tight leading-[1.12]">
              Compassionate Care.{' '}
              <span className="text-hospital-600 block sm:inline">Advanced Healthcare.</span>{' '}
              <span className="text-slate-700 block">Trusted by Your Family.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              MEDILIX HOSPITAL provides accessible, reliable and patient-focused healthcare services for the Pathardi community and surrounding areas.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <button
                onClick={onBookClick}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-6 py-3.5 bg-hospital-700 hover:bg-hospital-800 active:scale-98 text-white font-bold rounded-xl shadow-md shadow-sky-900/15 transition-all text-sm sm:text-base"
              >
                <Calendar className="w-5 h-5 text-sky-200" />
                <span>Book an Appointment</span>
              </button>

              <a
                href={`tel:${HOSPITAL_INFO.phoneRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-800 border-2 border-slate-200 hover:border-hospital-300 font-bold rounded-xl shadow-xs transition-all text-sm sm:text-base group"
              >
                <Phone className="w-5 h-5 text-red-600 group-hover:scale-110 transition-transform" />
                <span>Call {HOSPITAL_INFO.phone}</span>
              </a>
            </div>

            {/* Location callout */}
            <div className="pt-2 flex items-center justify-center lg:justify-start space-x-2 text-xs sm:text-sm text-slate-500">
              <span className="font-semibold text-slate-700">Location:</span>
              <span>Shevgaon Road, Near Arjun Baba Mandir, Pathardi</span>
            </div>
          </div>

          {/* Right Column: Visual Card Presentation */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Background gradient decorative glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-sky-300/30 to-hospital-600/20 rounded-3xl blur-2xl transform -rotate-1"></div>

              {/* Main Card with Medical Visual */}
              <div className="relative bg-white rounded-3xl p-3 sm:p-4 shadow-xl border border-slate-100/80 overflow-hidden">
                <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden bg-slate-900">
                  <img
                    src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80"
                    alt="MEDILIX HOSPITAL reception and medical care environment"
                    className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-hospital-950/85 via-hospital-900/20 to-transparent" />

                  {/* Top Badge overlay */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center space-x-2 text-xs font-bold text-hospital-900 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span>24/7 Facility</span>
                  </div>

                  {/* Bottom Text overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-xs uppercase tracking-wider font-semibold text-sky-300">Medilix Hospital</span>
                    <h3 className="text-lg font-bold leading-tight">Prompt Triage & Compassionate Clinical Care</h3>
                    <p className="text-xs text-slate-300 mt-1">Serving Pathardi with dedicated inpatient & emergency attention</p>
                  </div>
                </div>

                {/* Floating Micro-Card Overlays */}
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="bg-hospital-50/80 border border-sky-100 rounded-xl p-3 flex items-start space-x-2.5">
                    <div className="p-2 rounded-lg bg-sky-600 text-white shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-hospital-900">Always Open</div>
                      <div className="text-[11px] text-slate-500">24/7 Doctor On-Duty</div>
                    </div>
                  </div>

                  <div className="bg-emerald-50/80 border border-emerald-100 rounded-xl p-3 flex items-start space-x-2.5">
                    <div className="p-2 rounded-lg bg-emerald-600 text-white shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">High Hygiene</div>
                      <div className="text-[11px] text-slate-500">Sanitized Environment</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Small Verified Trust Strip (No invented statistics) */}
        <div className="mt-14 pt-8 border-t border-slate-200/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="flex items-center space-x-3 p-3 rounded-xl bg-white/80 border border-slate-100 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-sm text-hospital-950">24/7 Emergency</div>
                <div className="text-xs text-slate-500">Continuous casualty intake</div>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-3 rounded-xl bg-white/80 border border-slate-100 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-sm text-hospital-950">Experienced Medical Team</div>
                <div className="text-xs text-slate-500">Qualified physicians & staff</div>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-3 rounded-xl bg-white/80 border border-slate-100 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-sm text-hospital-950">Modern Healthcare</div>
                <div className="text-xs text-slate-500">Clean clinical facilities</div>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-3 rounded-xl bg-white/80 border border-slate-100 shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-sm text-hospital-950">Patient-Centred Care</div>
                <div className="text-xs text-slate-500">Dignity, empathy & safety</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
