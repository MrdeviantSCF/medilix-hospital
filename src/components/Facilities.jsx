import React from 'react';
import { 
  ShieldAlert, 
  HeartHandshake, 
  Accessibility, 
  Pill, 
  TestTube, 
  Armchair,
  CheckCircle2
} from 'lucide-react';
import { VERIFIED_FACILITIES } from '../data/hospitalData';

const iconFacilityMap = {
  ShieldAlert,
  HeartHandshake,
  Accessibility,
  Pill,
  TestTube,
  Armchair
};

export default function Facilities() {
  return (
    <section id="facilities" className="py-20 lg:py-28 bg-slate-50/60 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-extrabold uppercase tracking-widest text-hospital-600 bg-hospital-50 border border-sky-100 px-3 py-1 rounded-full">
            Infrastructure & Amenities
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-hospital-950 tracking-tight">
            Hospital Facilities & Patient Comfort
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Medilix Hospital maintains clean clinical spaces and patient support infrastructure to ensure safety, dignity, and accessibility.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {VERIFIED_FACILITIES.map((facility) => {
            const IconComp = iconFacilityMap[facility.icon] || CheckCircle2;
            const isAccessibility = facility.id === 'facility-wheelchair';
            const isEmergency = facility.id === 'facility-emergency';

            return (
              <div
                key={facility.id}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-sky-300 hover:shadow-premium transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105 ${
                        isEmergency
                          ? 'bg-red-50 text-red-600'
                          : isAccessibility
                          ? 'bg-teal-50 text-teal-600'
                          : 'bg-hospital-50 text-hospital-700'
                      }`}
                    >
                      <IconComp className="w-6 h-6" />
                    </div>

                    {isAccessibility && (
                      <span className="text-[11px] font-bold text-teal-700 bg-teal-50 border border-teal-200 px-2.5 py-0.5 rounded-full">
                        Verified Accessible
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-hospital-950 mb-2">
                    {facility.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {facility.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center space-x-1.5 text-xs text-slate-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Maintained Daily</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
