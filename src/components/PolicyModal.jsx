import React from 'react';
import { X, ShieldAlert, FileText, CheckCircle2 } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

export default function PolicyModal({ type, onClose }) {
  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 max-h-[85vh] overflow-y-auto relative">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-sky-50 text-hospital-700 flex items-center justify-center">
              <FileText className="w-4 h-4" />
            </div>
            <h3 className="text-xl font-bold text-hospital-950">
              {isPrivacy ? 'Privacy & Data Policy' : 'Terms & Hospital Conditions'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="py-5 space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
          {isPrivacy ? (
            <>
              <p>
                At <strong>MEDILIX HOSPITAL</strong>, we uphold the highest confidentiality regarding your patient records, contact information, and medical history.
              </p>
              <h4 className="font-bold text-hospital-900">1. Information Collection</h4>
              <p>
                Appointment scheduling details submitted via this website (such as patient name, phone number, and preferred department) are used strictly to coordinate clinical visits.
              </p>
              <h4 className="font-bold text-hospital-900">2. Medical Confidentiality</h4>
              <p>
                Clinical records generated during your examination or inpatient stay remain protected under professional Indian medical confidentiality norms. We do not sell or disclose patient contact details to third-party commercial vendors.
              </p>
              <h4 className="font-bold text-hospital-900">3. Contact Inquiries</h4>
              <p>
                For questions regarding your records or appointment details, please contact the administration desk at {HOSPITAL_INFO.phone}.
              </p>
            </>
          ) : (
            <>
              <p>
                Welcome to the official web portal of <strong>MEDILIX HOSPITAL</strong> (Pathardi, Maharashtra). By browsing or using this site, you acknowledge the terms set out below.
              </p>
              <h4 className="font-bold text-hospital-900">1. Nature of Online Information</h4>
              <p>
                The information on this website is for general informational and navigational purposes. It does not constitute a doctor-patient relationship, nor does it replace personalized in-person medical evaluation.
              </p>
              <h4 className="font-bold text-hospital-900">2. Appointment Scheduling</h4>
              <p>
                Submitting an appointment form via this website represents a request for scheduling. Confirmation is finalized only upon verification by hospital reception.
              </p>
              <h4 className="font-bold text-hospital-900">3. Emergencies</h4>
              <p>
                In any medical emergency, patients must contact the casualty desk immediately at {HOSPITAL_INFO.phone} or report in person to the casualty department.
              </p>
            </>
          )}
        </div>

        <div className="pt-4 border-t border-slate-100 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold text-white bg-hospital-700 hover:bg-hospital-800 rounded-xl"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
}
