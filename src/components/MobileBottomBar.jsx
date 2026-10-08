import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

export default function MobileBottomBar({ onBookClick }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 py-2 px-3 sm:hidden shadow-[0_-4px_16px_rgba(0,0,0,0.06)]">
      <div className="grid grid-cols-3 gap-2">
        {/* Call Now */}
        <a
          href={`tel:${HOSPITAL_INFO.phoneRaw}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-red-50 text-red-700 active:bg-red-100 border border-red-200/80 transition-colors"
        >
          <Phone className="w-4 h-4 mb-0.5 text-red-600" />
          <span className="text-[11px] font-bold leading-tight">Call Now</span>
        </a>

        {/* WhatsApp */}
        <a
          href={HOSPITAL_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-50 text-emerald-800 active:bg-emerald-100 border border-emerald-200/80 transition-colors"
        >
          <MessageSquare className="w-4 h-4 mb-0.5 text-emerald-600" />
          <span className="text-[11px] font-bold leading-tight">WhatsApp</span>
        </a>

        {/* Appointment */}
        <button
          onClick={onBookClick}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-hospital-700 text-white active:bg-hospital-800 shadow-xs transition-colors"
        >
          <Calendar className="w-4 h-4 mb-0.5 text-sky-200" />
          <span className="text-[11px] font-bold leading-tight">Appointment</span>
        </button>
      </div>
    </div>
  );
}
