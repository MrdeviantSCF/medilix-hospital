import React, { useState } from 'react';
import { 
  Stethoscope, 
  Activity, 
  Flame, 
  Microscope, 
  BedDouble, 
  ClipboardList, 
  ArrowRight, 
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { VERIFIED_SERVICES } from '../data/hospitalData';
import ServiceModal from './ServiceModal';

const iconMap = {
  Stethoscope,
  Activity,
  Flame,
  Microscope,
  BedDouble,
  ClipboardList,
};

export default function Services({ onBookClick }) {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-50/70 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-extrabold uppercase tracking-widest text-hospital-600 bg-hospital-50 border border-sky-100 px-3 py-1 rounded-full">
            Clinical Care & Specialties
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-hospital-950 tracking-tight">
            Our Healthcare Services
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Medilix Hospital provides verified primary healthcare, dedicated diabetic monitoring, and round-the-clock emergency casualty support for patients in Pathardi.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {VERIFIED_SERVICES.map((service) => {
            const IconComp = iconMap[service.iconName] || Stethoscope;
            const isEmergency = service.id === 'emergency-care';

            return (
              <div
                key={service.id}
                className={`relative bg-white rounded-3xl p-6 sm:p-7 shadow-xs hover:shadow-premium border transition-all duration-300 flex flex-col justify-between group ${
                  isEmergency ? 'border-red-200 ring-1 ring-red-100' : 'border-slate-200/80 hover:border-sky-300'
                }`}
              >
                <div>
                  {/* Service Icon and badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105 ${
                        isEmergency
                          ? 'bg-red-50 text-red-600'
                          : 'bg-hospital-50 text-hospital-700'
                      }`}
                    >
                      <IconComp className="w-6 h-6" />
                    </div>

                    {isEmergency && (
                      <span className="text-[11px] font-extrabold text-red-700 bg-red-50 border border-red-200 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                        24/7 Available
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-hospital-950 group-hover:text-hospital-700 transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Card Footer interaction */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center space-x-1.5 text-xs sm:text-sm font-bold text-hospital-700 hover:text-hospital-900 group/btn"
                  >
                    <span>Department Details</span>
                    <ArrowRight className="w-4 h-4 text-sky-500 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => onBookClick(service.title)}
                    className="text-xs font-semibold text-slate-500 hover:text-hospital-700 underline underline-offset-4"
                  >
                    Book
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Disclaimer / Transparency Note */}
        <div className="mt-12 p-4 rounded-2xl bg-white border border-slate-200/80 text-xs text-slate-500 flex items-center space-x-3 max-w-3xl mx-auto text-center sm:text-left">
          <ShieldCheck className="w-5 h-5 text-hospital-600 shrink-0 hidden sm:block" />
          <p>
            <strong>Hospital Service Transparency:</strong> All displayed departments reflect services reasonably supported by public listings and hospital operations. For specialized surgeries or visiting consultant schedules, please consult the hospital reception directly.
          </p>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onBookClick={onBookClick}
        />
      )}
    </section>
  );
}
