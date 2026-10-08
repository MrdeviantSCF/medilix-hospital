import React from 'react';
import { ShieldCheck, HeartHandshake, MapPin, CheckCircle2, UserCheck, Sparkles, Building2 } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

export default function About() {
  const highlights = [
    {
      title: "Patient-First Philosophy",
      description: "Every diagnosis and treatment plan is centered on patient comfort, clear clinical explanation, and compassionate human care.",
      icon: HeartHandshake,
      color: "text-sky-600 bg-sky-50"
    },
    {
      title: "Hygienic & Sanitized Environment",
      description: "Stringent sanitation protocols across consultation chambers, observation beds, and patient corridors to prevent cross-contamination.",
      icon: Sparkles,
      color: "text-emerald-600 bg-emerald-50"
    },
    {
      title: "Accessible Community Location",
      description: "Conveniently situated on Shevgaon Road near Arjun Baba Mandir, ensuring straightforward road connectivity for Pathardi and nearby villages.",
      icon: MapPin,
      color: "text-indigo-600 bg-indigo-50"
    },
    {
      title: "Inclusive & Wheelchair Accessible",
      description: "Equipped with ground-level accessibility, ramps, and supportive assistance for senior citizens and mobility-challenged visitors.",
      icon: UserCheck,
      color: "text-teal-600 bg-teal-50"
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Visual Column */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Background badge shadow */}
              <div className="absolute -inset-4 bg-hospital-100 rounded-3xl -rotate-2" />

              <div className="relative rounded-2xl overflow-hidden bg-slate-900 shadow-xl border border-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&w=900&q=80"
                  alt="Modern clean hospital corridor at Medilix Hospital"
                  className="w-full h-80 sm:h-96 object-cover opacity-90"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-hospital-950/80 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xs uppercase tracking-widest text-sky-300 font-semibold mb-1">
                    Community Healthcare
                  </div>
                  <h4 className="text-lg font-bold">MEDILIX HOSPITAL, Pathardi</h4>
                  <p className="text-xs text-slate-300">
                    Shevgaon Road, Near Arjun Baba Mandir
                  </p>
                </div>
              </div>

              {/* Floating verified badge */}
              <div className="absolute -bottom-5 -right-3 sm:-right-5 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center space-x-3">
                <div className="w-12 h-12 rounded-xl bg-hospital-700 text-white flex items-center justify-center font-bold text-xl">
                  4.9★
                </div>
                <div>
                  <div className="text-xs font-bold text-hospital-950">Patient Satisfaction</div>
                  <div className="text-[11px] text-slate-500">Based on local community reviews</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content Column */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div className="space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-widest text-hospital-600 bg-hospital-50 px-3 py-1 rounded-full">
                About Our Healthcare Center
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-hospital-950 tracking-tight">
                Dedicated to Patient Well-Being & Accessible Healthcare in Pathardi
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              <strong className="text-hospital-900 font-semibold">MEDILIX HOSPITAL</strong> was established to provide reliable, modern, and compassionate medical care for the families of Pathardi and the broader Ahmednagar region.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We focus on clinical accuracy, patient safety, and transparent communication. Whether dealing with an acute illness, routine medical evaluation, diabetic management, or sudden medical emergency, our medical team is committed to delivering prompt, dignified care.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {highlights.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-slate-100 bg-slate-50/60 hover:bg-white hover:shadow-subtle transition-all space-y-2"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${item.color}`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold text-sm sm:text-base text-hospital-950">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-normal">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="pt-2 border-t border-slate-100 flex items-center space-x-2 text-xs sm:text-sm text-slate-500">
              <Building2 className="w-4 h-4 text-hospital-600" />
              <span>Full Address: {HOSPITAL_INFO.address.fullAddress}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
