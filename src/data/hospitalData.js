export const HOSPITAL_INFO = {
  name: "MEDILIX HOSPITAL",
  tagline: "Compassionate Care. Advanced Healthcare. Trusted by Your Family.",
  shortDescription: "MEDILIX HOSPITAL provides accessible, reliable, and patient-focused healthcare services for the Pathardi community and surrounding areas.",
  address: {
    line1: "Shevgaon Road",
    landmark: "Near Arjun Baba Mandir",
    city: "Pathardi",
    district: "Ahmednagar",
    state: "Maharashtra",
    pincode: "414102",
    country: "India",
    fullAddress: "Shevgaon Road, Near Arjun Baba Mandir, Pathardi, Maharashtra 414102, India",
  },
  phone: "+91 84849 62526",
  phoneRaw: "+918484962526",
  emergencyPhone: "+91 84849 62526",
  hours: "Open 24 Hours / 7 Days a Week",
  rating: "4.9",
  reviewsCount: "20+",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=MEDILIX+HOSPITAL+Shevgaon+Road+Pathardi+Maharashtra+414102",
  googleMapsEmbedUrl: "https://maps.google.com/maps?q=MEDILIX%20HOSPITAL,%20Shevgaon%20Road,%20Near%20Arjun%20Baba%20Mandir,%20Pathardi,%20Maharashtra%20414102&t=&z=15&ie=UTF8&iwloc=&output=embed",
  whatsappUrl: "https://wa.me/918484962526?text=Hello%20Medilix%20Hospital%2C%20I%20would%20like%20to%20inquire%20about%20medical%20services%20or%20an%20appointment.",
};

export const VERIFIED_SERVICES = [
  {
    id: "general-medicine",
    title: "General Medicine",
    shortDesc: "Primary care diagnosis, treatment of acute & chronic medical conditions, seasonal illnesses, and routine consultations.",
    fullDesc: "Our General Medicine department handles a broad spectrum of non-surgical adult medical care. From acute fevers, respiratory infections, and gastrointestinal ailments to the ongoing management of chronic conditions, our physicians focus on early diagnosis, preventative counsel, and evidence-based treatment plans tailored to each patient.",
    keyFeatures: [
      "Treatment of acute infections & viral illnesses",
      "Hypertension and lifestyle disease management",
      "Comprehensive adult health evaluations",
      "Preventative health screening & follow-ups"
    ],
    iconName: "Stethoscope"
  },
  {
    id: "diabetology",
    title: "Diabetology & Metabolic Care",
    shortDesc: "Specialized assessment, blood sugar regulation, insulin therapy, and preventative care for diabetic patients.",
    fullDesc: "Diabetes requires consistent clinical oversight to prevent cardiovascular, renal, and neuropathic complications. At Medilix Hospital, our diabetology practice provides patient-centric blood sugar monitoring, personalized medication and insulin regimens, dietary and lifestyle guidance, and regular metabolic evaluations.",
    keyFeatures: [
      "Type 1 & Type 2 diabetes management",
      "Fasting & postprandial glucose tracking",
      "Diabetic neuropathy & foot screening counsel",
      "Dietary education & metabolic stabilization"
    ],
    iconName: "Activity"
  },
  {
    id: "emergency-care",
    title: "24/7 Emergency & Casualty",
    shortDesc: "Round-the-clock triage and immediate stabilization for acute medical emergencies, trauma, and critical symptoms.",
    fullDesc: "Emergencies require swift, decisive clinical intervention. Medilix Hospital maintains a 24-hour emergency casualty unit equipped for priority triage, acute medical stabilization, wound management, and emergency medication delivery. Resident medical officers are on-site at all hours.",
    keyFeatures: [
      "24/7 round-the-clock doctor availability",
      "Immediate triage and resuscitation protocols",
      "Acute trauma, burn & laceration first-care",
      "Rapid ambulance and transport coordination"
    ],
    iconName: "Flame"
  },
  {
    id: "diagnostic-services",
    title: "Diagnostic & Laboratory Support",
    shortDesc: "Clinical pathology, blood analyses, glucose evaluations, and routine diagnostic investigations.",
    fullDesc: "Accurate diagnostics are the foundation of effective patient care. Medilix Hospital provides integrated laboratory and diagnostic support for routine hematology, biochemical profiling, blood sugar tests, urine analysis, and rapid diagnostic screening to facilitate prompt medical decisions.",
    keyFeatures: [
      "Routine blood work (CBC, lipid, renal & liver panels)",
      "Blood glucose & HbA1c screening",
      "Infection & inflammatory marker tests",
      "Prompt report turnaround for attending doctors"
    ],
    iconName: "Microscope"
  },
  {
    id: "inpatient-care",
    title: "Inpatient & Observation Care",
    shortDesc: "Clean, supervised patient observation beds with continuous nursing support and vital signs monitoring.",
    fullDesc: "For patients requiring clinical observation, intravenous medication, or recovery after acute illness, our inpatient facilities provide clean, well-ventilated, and hygienic accommodations supervised by dedicated nursing staff.",
    keyFeatures: [
      "Round-the-clock vital signs monitoring",
      "Intravenous therapy and scheduled medication",
      "Clean, sanitized observation rooms",
      "Compassionate, attentive nursing care"
    ],
    iconName: "BedDouble"
  },
  {
    id: "outpatient-consultation",
    title: "Outpatient (OPD) Consultations",
    shortDesc: "Daily clinical consultation hours for family medicine, prescription reviews, and follow-up examinations.",
    fullDesc: "Our Outpatient Department (OPD) offers accessible, scheduled consultations for patients seeking medical evaluation, second opinions, prescription renewals, and regular health check-ups in a calm, professional atmosphere.",
    keyFeatures: [
      "Scheduled morning and evening consultation slots",
      "Thorough patient history reviews",
      "Preventative guidance and health counseling",
      "Referral coordination for complex conditions"
    ],
    iconName: "ClipboardList"
  }
];

export const VERIFIED_FACILITIES = [
  {
    id: "facility-emergency",
    title: "24/7 Casualty & Triage Desk",
    description: "Dedicated emergency entrance with immediate reception, vital-sign triage, and acute clinical response.",
    icon: "ShieldAlert"
  },
  {
    id: "facility-observation",
    title: "Sanitized Patient Observation Rooms",
    description: "Clean, hygienic, and well-ventilated patient beds designed for restful observation and recovery.",
    icon: "HeartHandshake"
  },
  {
    id: "facility-wheelchair",
    title: "Wheelchair-Accessible Infrastructure",
    description: "Wide doors, ground-level access, and accessible corridors to assist elderly and mobility-impaired patients.",
    icon: "Accessibility"
  },
  {
    id: "facility-pharmacy",
    title: "Medical & Pharmacy Support",
    description: "Immediate access to critical therapeutics, essential emergency drugs, and prescribed medications.",
    icon: "Pill"
  },
  {
    id: "facility-diagnostics",
    title: "Diagnostic Investigation Desk",
    description: "Convenient on-site sample collection ensuring minimal waiting times for vital diagnostic results.",
    icon: "TestTube"
  },
  {
    id: "facility-waiting",
    title: "Patient & Attendant Waiting Area",
    description: "Spacious, comfortable seating area maintaining proper ventilation and hygiene for patient families.",
    icon: "Armchair"
  }
];

export const GALLERY_ITEMS = [
  {
    id: "gal-1",
    title: "Hospital Reception & Registration",
    category: "Hospital Overview",
    description: "Welcoming, organized patient registration and emergency coordination desk at Medilix Hospital.",
    // Premium medical facility photograph (clean healthcare environment)
    imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
    alt: "Medilix Hospital reception and triage area"
  },
  {
    id: "gal-2",
    title: "Consultation & Examination Suite",
    category: "Consultation",
    description: "Private consultation room equipped for comprehensive clinical evaluations and patient discussions.",
    imageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
    alt: "Clean medical consultation and examination suite"
  },
  {
    id: "gal-3",
    title: "24/7 Emergency & Acute Care Ward",
    category: "Emergency",
    description: "Fully prepared observation and resuscitation station for round-the-clock emergency assistance.",
    imageUrl: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
    alt: "Emergency medical treatment unit at Medilix Hospital"
  },
  {
    id: "gal-4",
    title: "Inpatient Observation & Recovery Beds",
    category: "Patient Care",
    description: "Hygienic patient recovery units with continuous monitoring and dedicated nursing support.",
    imageUrl: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80",
    alt: "Clean inpatient observation and recovery room"
  },
  {
    id: "gal-5",
    title: "Diagnostic Investigation Laboratory",
    category: "Diagnostics",
    description: "Diagnostic work station for essential blood analysis, metabolic tests, and diagnostic screening.",
    imageUrl: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=80",
    alt: "Diagnostic and laboratory testing station"
  },
  {
    id: "gal-6",
    title: "Patient Comfort & Sanitary Corridors",
    category: "Infrastructure",
    description: "Wheelchair-accessible corridors with rigorous daily sanitization and clean environment standards.",
    imageUrl: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&w=1200&q=80",
    alt: "Wheelchair accessible hospital corridor and clean interior"
  }
];

export const PATIENT_FAQS = [
  {
    question: "What are Medilix Hospital's operating hours?",
    answer: "Medilix Hospital operates 24 hours a day, 7 days a week for emergency care and acute admissions. Regular Outpatient Department (OPD) consultations are scheduled between 9:00 AM and 8:30 PM daily."
  },
  {
    question: "Do I need a prior appointment for an emergency?",
    answer: "No appointment is necessary for emergency care. If you or a loved one requires immediate medical assistance, visit the emergency desk directly or call our round-the-clock line at +91 84849 62526."
  },
  {
    question: "Where is Medilix Hospital located in Pathardi?",
    answer: "We are conveniently located on Shevgaon Road, near Arjun Baba Mandir, Pathardi, Ahmednagar district, Maharashtra 414102. The facility has direct road access with wheelchair-friendly entry."
  },
  {
    question: "How can I check visiting specialist availability?",
    answer: "Our panel includes resident physicians as well as visiting consultants. Please call our reception desk at +91 84849 62526 or message us via WhatsApp to confirm the daily OPD timings for specific consulting specialists."
  },
  {
    question: "What should I bring for my first consultation or admission?",
    answer: "Please bring a valid photo ID, any prior medical records, discharge summaries, current prescription medications, and relevant diagnostic lab reports."
  }
];
