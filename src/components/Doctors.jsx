import React from 'react';
import { Phone, Calendar, Clock, UserCheck, ShieldCheck, HelpCircle, Users } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

export default function Doctors({ onBookClick }) {
  const staffCategories = [
    {
      title: "Round-the-Clock Resident Medical Team",
      role: "Emergency & Casualty Care",
      desc: "Qualified resident doctors are on site 24 hours a day to manage initial patient intake, emergency stabilization, vital-sign monitoring, and acute treatments.",
      availability: "Available 24/7 (Day & Night)",
      badge: "On-Duty 24/7",
      badgeColor: "bg-red-50 text-red-700 border-red-200"
    },
    {
      title: "General Medicine & Physician Care",
      role: "Primary Diagnosis & Adult Medicine",
      desc: "Comprehensive diagnostic evaluations for seasonal infections, fever protocols, chronic adult health disorders, and preventive health screenings.",
      availability: "Daily OPD: Morning & Evening",
      badge: "Daily OPD",
      badgeColor: "bg-sky-50 text-sky-700 border-sky-200"
    },
    {
      title: "Diabetology & Metabolic Care Consultation",
      role: "Blood Sugar & Endocrine Management",
      desc: "Dedicated clinical consultation for blood sugar control, insulin initiation, diabetic lifestyle counsel, and prevention of long-term metabolic complications.",
      availability: "Scheduled OPD Consultation",
      badge: "Clinical Focus",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200"
    },
    {
      title: "Visiting Consultant Specialists",
      role: "Specialized Disciplines",
      desc: "Visiting consultants across specialties visit Medilix Hospital on designated days. Patients can confirm visiting days and advance bookings via reception.",
      availability: "Consult Reception for Schedule",
      badge: "By Schedule",
      badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200"
    }
  ];

  return (
    <section id="doctors" className="py-20 lg:py-28 bg-white border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-extrabold uppercase tracking-widest text-hospital-600 bg-hospital-50 border border-sky-100 px-3 py-1 rounded-full">
            Clinical Care Panel
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-hospital-950 tracking-tight">
            Our Medical Team & Specialists
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Medilix Hospital provides dedicated medical care through resident medical officers and visiting consulting specialists serving Pathardi and surrounding communities.
          </p>
        </div>

        {/* Staffing Panel Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {staffCategories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 hover:bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 hover:border-sky-300 hover:shadow-premium transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-hospital-100/70 text-hospital-800 flex items-center justify-center font-bold">
                    <Users className="w-5 h-5 text-hospital-700" />
                  </div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full border ${cat.badgeColor}`}>
                    {cat.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-hospital-950 mb-1">
                  {cat.title}
                </h3>
                <div className="text-xs font-semibold text-hospital-600 uppercase tracking-wider mb-3">
                  {cat.role}
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {cat.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/60 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
                <div className="flex items-center space-x-1.5 text-slate-500 font-medium">
                  <Clock className="w-4 h-4 text-sky-600" />
                  <span>{cat.availability}</span>
                </div>

                <a
                  href={`tel:${HOSPITAL_INFO.phoneRaw}`}
                  className="font-bold text-hospital-700 hover:text-hospital-900 inline-flex items-center space-x-1"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Inquire Availability</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Notice for Patients */}
        <div className="mt-12 bg-hospital-50 border border-sky-200/80 rounded-2xl p-6 text-center max-w-3xl mx-auto shadow-xs">
          <div className="inline-flex items-center space-x-2 text-hospital-800 font-bold text-sm sm:text-base mb-2">
            <HelpCircle className="w-5 h-5 text-hospital-600" />
            <span>Looking for a Specific Consultant or OPD Timing?</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto mb-4">
            Visiting consultant schedules and daily OPD hours can vary. Please call our hospital reception desk directly to verify the exact consultant schedule for today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`tel:${HOSPITAL_INFO.phoneRaw}`}
              className="inline-flex items-center space-x-2 px-5 py-2.5 bg-hospital-800 hover:bg-hospital-900 text-white rounded-xl text-xs sm:text-sm font-bold shadow-xs transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call Reception (+91 84849 62526)</span>
            </a>
            <button
              onClick={() => onBookClick('General Consultation')}
              className="inline-flex items-center space-x-2 px-5 py-2.5 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 rounded-xl text-xs sm:text-sm font-bold transition-colors"
            >
              <Calendar className="w-4 h-4 text-sky-600" />
              <span>Request Appointment Slot</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
