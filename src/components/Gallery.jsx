import React, { useState } from 'react';
import { Maximize2, Camera, ShieldCheck } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/hospitalData';
import Lightbox from './Lightbox';

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const handleOpen = (index) => setLightboxIndex(index);
  const handleClose = () => setLightboxIndex(null);
  const handlePrev = () => {
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : GALLERY_ITEMS.length - 1));
  };
  const handleNext = () => {
    setLightboxIndex((prev) => (prev < GALLERY_ITEMS.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-white border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-extrabold uppercase tracking-widest text-hospital-600 bg-hospital-50 border border-sky-100 px-3 py-1 rounded-full">
            Facility Visuals
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-hospital-950 tracking-tight">
            Hospital Gallery & Clinical Environment
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Take a visual tour of our clean reception, patient observation beds, diagnostic work areas, and accessible corridors at Medilix Hospital.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleOpen(index)}
              className="group relative rounded-3xl overflow-hidden bg-slate-900 shadow-sm hover:shadow-premium cursor-pointer border border-slate-100 transition-all duration-300"
            >
              {/* Image */}
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-hospital-950/90 via-hospital-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Tag & Expand Icon */}
              <div className="absolute top-4 right-4 p-2 rounded-xl bg-white/20 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>

              <div className="absolute top-4 left-4">
                <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-hospital-900/80 backdrop-blur-sm text-sky-300 border border-white/10">
                  {item.category}
                </span>
              </div>

              {/* Caption Bottom */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-base sm:text-lg font-bold leading-snug group-hover:text-sky-200 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 mt-1 line-clamp-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Gallery Context */}
        <div className="mt-8 text-center text-xs text-slate-400">
          Click any image to view in fullscreen high-resolution mode with department information.
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <Lightbox
          items={GALLERY_ITEMS}
          currentIndex={lightboxIndex}
          onClose={handleClose}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </section>
  );
}
