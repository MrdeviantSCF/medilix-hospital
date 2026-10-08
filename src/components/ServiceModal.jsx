import React from 'react';
import { X, CheckCircle2, Phone, Calendar, ArrowRight } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

export default function ServiceModal({ service, onClose, onBookClick }) {
  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
    >
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Top header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-100">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-hospital-600">
              Department Details
            </span>
            <h3 id="service-modal-title" className="text-xl sm:text-2xl font-extrabold text-hospital-950 mt-1">
              {service.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal body */}
        <div className="py-5 space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
          <p>{service.fullDesc}</p>

          <div className="bg-hospital-50/70 rounded-2xl p-4 border border-sky-100 space-y-2.5">
            <h4 className="font-bold text-sm text-hospital-950 uppercase tracking-wide">
              Key Clinical Scope & Features:
            </h4>
            <ul className="space-y-2 text-sm text-slate-700">
              {service.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-xs text-amber-900">
            <strong>Note for Patients:</strong> For specific consulting hours or doctor availability for this department, please contact our hospital desk.
          </div>
        </div>

        {/* Footer actions */}
        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-end gap-3">
          <a
            href={`tel:${HOSPITAL_INFO.phoneRaw}`}
            className="w-full sm:w-auto px-4 py-2.5 text-xs font-bold text-hospital-800 bg-slate-100 hover:bg-slate-200 rounded-xl flex items-center justify-center space-x-1.5 transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call {HOSPITAL_INFO.phone}</span>
          </a>

          <button
            onClick={() => {
              onClose();
              onBookClick(service.title);
            }}
            className="w-full sm:w-auto px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-hospital-700 hover:bg-hospital-800 rounded-xl flex items-center justify-center space-x-1.5 shadow-sm transition-all"
          >
            <Calendar className="w-4 h-4 text-sky-200" />
            <span>Request Appointment</span>
          </button>
        </div>
      </div>
    </div>
  );
}
