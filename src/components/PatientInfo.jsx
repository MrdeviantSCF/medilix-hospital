import React, { useState } from 'react';
import { Clock, FileText, ChevronDown, ChevronUp, AlertCircle, Phone, CheckCircle2 } from 'lucide-react';
import { PATIENT_FAQS, HOSPITAL_INFO } from '../data/hospitalData';

export default function PatientInfo() {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="patient-guide" className="py-20 lg:py-28 bg-slate-50/70 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-extrabold uppercase tracking-widest text-hospital-600 bg-hospital-50 border border-sky-100 px-3 py-1 rounded-full">
            Helpful Information
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-hospital-950 tracking-tight">
            Patient & Visitor Guide
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Essential information to assist patients and their families before visiting or during admission at Medilix Hospital.
          </p>
        </div>

        {/* 3 Key Patient Guidance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {/* Card 1: Timings */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-700 flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-hospital-950">Hospital Operating Hours</h3>
            <div className="space-y-2 text-xs sm:text-sm text-slate-600">
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="font-semibold text-hospital-900">Emergency & Casualty:</span>
                <span className="text-emerald-700 font-bold">24 Hours / 7 Days</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span>Morning OPD:</span>
                <span>09:00 AM – 01:30 PM</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span>Evening OPD:</span>
                <span>04:30 PM – 08:30 PM</span>
              </div>
              <div className="flex justify-between py-1">
                <span>Diagnostic Sampling:</span>
                <span>08:30 AM – 08:00 PM</span>
              </div>
            </div>
          </div>

          {/* Card 2: What to Bring */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-hospital-950">Checklist for Your Visit</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Government-issued photo ID proof (Aadhaar, Voter ID)</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Current list of prescribed medications & insulin doses</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Previous blood reports, discharge summaries or ECG scans</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Contact details of an emergency family attendant</span>
              </li>
            </ul>
          </div>

          {/* Card 3: Emergency Protocol */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-red-200 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-hospital-950">Emergency Admission Steps</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              In an acute emergency, please bring the patient directly to the casualty desk. Prior appointment is not required.
            </p>
            <div className="pt-2">
              <a
                href={`tel:${HOSPITAL_INFO.phoneRaw}`}
                className="w-full inline-flex items-center justify-center space-x-2 py-2.5 px-4 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Emergency: {HOSPITAL_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-hospital-950">
              Frequently Asked Questions
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Common questions about visits, appointments, and hospital procedures.
            </p>
          </div>

          <div className="space-y-3">
            {PATIENT_FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-5 text-left font-bold text-sm sm:text-base text-hospital-950 hover:text-hospital-700"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <span className="p-1 rounded-lg bg-slate-50 text-slate-500">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
