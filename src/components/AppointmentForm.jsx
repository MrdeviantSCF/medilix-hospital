import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, Building2, MessageSquare, CheckCircle, AlertTriangle, ShieldCheck, ArrowRight } from 'lucide-react';
import { HOSPITAL_INFO, VERIFIED_SERVICES } from '../data/hospitalData';

export default function AppointmentForm({ initialDepartment = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    department: initialDepartment || 'General Medicine',
    preferredDate: '',
    preferredTime: 'Morning (09:00 AM - 01:00 PM)',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(null);

  // Sync if initialDepartment prop updates
  React.useEffect(() => {
    if (initialDepartment) {
      setFormData((prev) => ({ ...prev, department: initialDepartment }));
    }
  }, [initialDepartment]);

  // Minimum date should be tomorrow
  const getTomorrowDate = () => {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    return today.toISOString().split('T')[0];
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Patient name is required.';
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'Please provide full patient name (min 3 chars).';
    }

    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!formData.phone.trim()) {
      newErrors.phone = 'Mobile number is required.';
    } else if (cleanPhone.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number.';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select your preferred consultation date.';
    }

    if (!formData.department) {
      newErrors.department = 'Please select a department.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate structured frontend client processing
    setTimeout(() => {
      const generatedRef = `MED-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmissionSuccess({
        referenceNumber: generatedRef,
        details: { ...formData },
        timestamp: new Date().toLocaleString()
      });
      setIsSubmitting(false);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      department: 'General Medicine',
      preferredDate: '',
      preferredTime: 'Morning (09:00 AM - 01:00 PM)',
      message: ''
    });
    setErrors({});
    setSubmissionSuccess(null);
  };

  return (
    <section id="appointment" className="py-20 lg:py-28 bg-white border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-hospital-600 bg-hospital-50 border border-sky-100 px-3 py-1 rounded-full">
              Outpatient Scheduling
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-hospital-950 tracking-tight">
              Request a Consultation Appointment
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mx-auto">
              Submit your preferred date and time. Our hospital reception desk will coordinate with available doctors and confirm your appointment by call or WhatsApp.
            </p>
          </div>

          {/* Emergency Warning Strip */}
          <div className="mb-8 p-4 rounded-2xl bg-red-50 border border-red-200 text-xs sm:text-sm text-red-800 flex items-start space-x-3">
            <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
            <div>
              <strong className="font-bold">Medical Emergency Notice:</strong> If you are experiencing sudden chest pain, breathing difficulty, severe injury, or other acute conditions, <strong>do not wait for an online appointment request</strong>. Please call our 24/7 emergency casualty directly at <a href={`tel:${HOSPITAL_INFO.phoneRaw}`} className="underline font-bold text-red-900">{HOSPITAL_INFO.phone}</a> or visit the hospital emergency department immediately.
            </div>
          </div>

          {/* Main Appointment Container */}
          <div className="bg-slate-50/70 border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-sm relative overflow-hidden">
            {submissionSuccess ? (
              /* Success Confirmation UI */
              <div className="text-center py-6 sm:py-8 space-y-6 animate-fadeIn">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle className="w-10 h-10" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-hospital-950">
                    Appointment Request Recorded
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                    Your request has been validated on the client interface and assigned a local tracking token.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-slate-200 text-left max-w-md mx-auto space-y-3 text-xs sm:text-sm shadow-xs">
                  <div className="flex justify-between pb-2 border-b border-slate-100">
                    <span className="text-slate-500">Request Token:</span>
                    <span className="font-mono font-bold text-hospital-800">{submissionSuccess.referenceNumber}</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-slate-100">
                    <span className="text-slate-500">Patient:</span>
                    <span className="font-semibold text-slate-800">{submissionSuccess.details.name}</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-slate-100">
                    <span className="text-slate-500">Mobile:</span>
                    <span className="font-semibold text-slate-800">{submissionSuccess.details.phone}</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-slate-100">
                    <span className="text-slate-500">Department:</span>
                    <span className="font-semibold text-hospital-700">{submissionSuccess.details.department}</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-slate-100">
                    <span className="text-slate-500">Requested Date:</span>
                    <span className="font-semibold text-slate-800">{submissionSuccess.details.preferredDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Preferred Slot:</span>
                    <span className="font-semibold text-slate-800">{submissionSuccess.details.preferredTime}</span>
                  </div>
                </div>

                <div className="p-3 bg-sky-50 text-hospital-800 text-xs rounded-xl border border-sky-200 max-w-md mx-auto">
                  <strong>Next Step:</strong> You may also share this token via WhatsApp to <a href={HOSPITAL_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="font-bold underline">{HOSPITAL_INFO.phone}</a> for instant confirmation.
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/918484962526?text=Hello%20Medilix%20Hospital,%20I%20have%20requested%20an%20appointment%20with%20Token%20${submissionSuccess.referenceNumber}%20for%20Patient%20${encodeURIComponent(submissionSuccess.details.name)}%20(${encodeURIComponent(submissionSuccess.details.department)}).`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs sm:text-sm shadow-sm transition-colors"
                  >
                    Confirm via WhatsApp
                  </a>

                  <button
                    onClick={handleReset}
                    className="w-full sm:w-auto px-6 py-3 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 font-semibold rounded-xl text-xs sm:text-sm transition-colors"
                  >
                    Book Another Appointment
                  </button>
                </div>
              </div>
            ) : (
              /* Input Form */
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Patient Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Patient Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Ramesh Patil"
                        className={`w-full pl-10 pr-4 py-3 bg-white rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 transition-all ${
                          errors.name
                            ? 'border-red-400 focus:ring-red-400/30'
                            : 'border-slate-200 focus:border-sky-500 focus:ring-sky-500/20'
                        }`}
                      />
                    </div>
                    {errors.name && <p className="text-xs text-red-500 font-medium">{errors.name}</p>}
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 9876543210"
                        className={`w-full pl-10 pr-4 py-3 bg-white rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 transition-all ${
                          errors.phone
                            ? 'border-red-400 focus:ring-red-400/30'
                            : 'border-slate-200 focus:border-sky-500 focus:ring-sky-500/20'
                        }`}
                      />
                    </div>
                    {errors.phone && <p className="text-xs text-red-500 font-medium">{errors.phone}</p>}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Email Address <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="patient@example.com"
                        className={`w-full pl-10 pr-4 py-3 bg-white rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 transition-all ${
                          errors.email
                            ? 'border-red-400 focus:ring-red-400/30'
                            : 'border-slate-200 focus:border-sky-500 focus:ring-sky-500/20'
                        }`}
                      />
                    </div>
                    {errors.email && <p className="text-xs text-red-500 font-medium">{errors.email}</p>}
                  </div>

                  {/* Department */}
                  <div className="space-y-1.5">
                    <label htmlFor="department" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Department / Service <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <select
                        id="department"
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 bg-white rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all appearance-none"
                      >
                        {VERIFIED_SERVICES.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                        <option value="General Consultation">General Consultation</option>
                        <option value="Routine Health Check">Routine Health Check</option>
                      </select>
                    </div>
                  </div>

                  {/* Preferred Date */}
                  <div className="space-y-1.5">
                    <label htmlFor="preferredDate" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Preferred Date <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <input
                        type="date"
                        id="preferredDate"
                        name="preferredDate"
                        min={getTomorrowDate()}
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-3 bg-white rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 transition-all ${
                          errors.preferredDate
                            ? 'border-red-400 focus:ring-red-400/30'
                            : 'border-slate-200 focus:border-sky-500 focus:ring-sky-500/20'
                        }`}
                      />
                    </div>
                    {errors.preferredDate && <p className="text-xs text-red-500 font-medium">{errors.preferredDate}</p>}
                  </div>

                  {/* Preferred Time Slot */}
                  <div className="space-y-1.5">
                    <label htmlFor="preferredTime" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Preferred Time Slot <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Clock className="w-4 h-4" />
                      </div>
                      <select
                        id="preferredTime"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 bg-white rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all appearance-none"
                      >
                        <option value="Morning (09:00 AM - 01:00 PM)">Morning (09:00 AM – 01:00 PM)</option>
                        <option value="Afternoon (02:00 PM - 05:00 PM)">Afternoon (02:00 PM – 05:00 PM)</option>
                        <option value="Evening (05:00 PM - 08:30 PM)">Evening (05:00 PM – 08:30 PM)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Message / Symptoms */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Brief Symptoms or Reason for Visit <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <div className="relative">
                    <div className="absolute top-3.5 left-3.5 pointer-events-none text-slate-400">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please briefly mention your health concern (e.g. fever for 2 days, sugar check, general weakness)..."
                      className="w-full pl-10 pr-4 py-3 bg-white rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all"
                    ></textarea>
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-slate-500 flex items-center space-x-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Your personal information is kept strictly confidential.</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3.5 bg-hospital-700 hover:bg-hospital-800 active:scale-98 text-white font-bold rounded-xl shadow-md shadow-sky-900/10 text-sm sm:text-base transition-all flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <span>Validating Request...</span>
                    ) : (
                      <>
                        <span>Request Appointment</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
