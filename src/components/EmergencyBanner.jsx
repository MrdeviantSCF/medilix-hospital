import React from 'react';
import { Phone, Navigation, AlertCircle, ShieldAlert, Clock, Ambulance } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

export default function EmergencyBanner() {
  return (
    <section className="relative -mt-6 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-gradient-to-r from-hospital-950 via-hospital-900 to-slate-900 text-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl border-2 border-red-500/20 relative overflow-hidden">
        {/* Subtle accent light */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 left-1/3 w-64 h-64 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Emergency Info */}
          <div className="lg:col-span-7 space-y-3">
            <div className="inline-flex items-center space-x-2 bg-red-600/20 border border-red-500/40 px-3.5 py-1 rounded-full text-red-300 text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
              <span>Immediate Medical Attention</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
              24/7 Emergency Care
            </h2>

            <p className="text-slate-300 text-base sm:text-lg max-w-xl">
              Medical assistance when you need it most. Our emergency team is on standby round-the-clock for acute stabilization, trauma, and critical patient care.
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-1 text-xs sm:text-sm text-slate-300">
              <span className="flex items-center space-x-1.5">
                <Clock className="w-4 h-4 text-sky-400" />
                <span>Round-the-clock Resident Doctor</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <AlertCircle className="w-4 h-4 text-emerald-400" />
                <span>Priority Triage Protocol</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <Ambulance className="w-4 h-4 text-amber-400" />
                <span>Ambulance Coordination</span>
              </span>
            </div>
          </div>

          {/* Emergency CTAs */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3.5 sm:gap-4 justify-center">
            <a
              href={`tel:${HOSPITAL_INFO.phoneRaw}`}
              className="flex items-center justify-center space-x-3 px-6 py-4 bg-red-600 hover:bg-red-700 active:scale-98 text-white font-extrabold rounded-2xl shadow-lg shadow-red-900/40 text-base sm:text-lg transition-all group"
            >
              <Phone className="w-6 h-6 animate-bounce" />
              <div className="text-left">
                <div className="text-xs uppercase tracking-wider text-red-200 font-semibold">Immediate Helpline</div>
                <div>CALL NOW: {HOSPITAL_INFO.phone}</div>
              </div>
            </a>

            <a
              href={HOSPITAL_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 px-6 py-3.5 bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 active:scale-98 text-white font-bold rounded-2xl shadow-md text-sm sm:text-base transition-all"
            >
              <Navigation className="w-5 h-5 text-sky-400" />
              <span>GET DIRECTIONS (Pathardi)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
