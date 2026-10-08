import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import EmergencyBanner from './components/EmergencyBanner';
import About from './components/About';
import Services from './components/Services';
import Doctors from './components/Doctors';
import Facilities from './components/Facilities';
import Gallery from './components/Gallery';
import PatientInfo from './components/PatientInfo';
import AppointmentForm from './components/AppointmentForm';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileBottomBar from './components/MobileBottomBar';

export default function App() {
  const [selectedDepartment, setSelectedDepartment] = useState('General Medicine');

  const scrollToAppointment = (dept) => {
    if (dept && typeof dept === 'string') {
      setSelectedDepartment(dept);
    }
    const target = document.getElementById('appointment');
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-sky-500 selection:text-white">
      {/* Sticky Premium Header */}
      <Header onBookClick={() => scrollToAppointment('General Medicine')} />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onBookClick={() => scrollToAppointment('General Medicine')} />

        {/* 24/7 Emergency Prominent Banner */}
        <EmergencyBanner />

        {/* About Medilix Hospital */}
        <About />

        {/* Verified Healthcare Services */}
        <Services onBookClick={scrollToAppointment} />

        {/* Medical Staff & Visiting Specialists Panel */}
        <Doctors onBookClick={scrollToAppointment} />

        {/* Hospital Facilities */}
        <Facilities />

        {/* Image Gallery with Fullscreen Lightbox */}
        <Gallery />

        {/* Patient & Attendant Guide / FAQs */}
        <PatientInfo />

        {/* Appointment Scheduling System */}
        <AppointmentForm initialDepartment={selectedDepartment} />

        {/* Contact, Hours & Map Location */}
        <Contact />
      </main>

      {/* Footer & Medical Disclaimer */}
      <Footer />

      {/* Mobile Sticky Bottom Action Controls */}
      <MobileBottomBar onBookClick={() => scrollToAppointment('General Medicine')} />
    </div>
  );
}
