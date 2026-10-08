import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Lightbox({ items, currentIndex, onClose, onPrev, onNext }) {
  const currentItem = items[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext]);

  if (!currentItem) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery lightbox"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-10 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev Button */}
      <button
        onClick={onPrev}
        className="absolute left-3 sm:left-6 z-10 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next Button */}
      <button
        onClick={onNext}
        className="absolute right-3 sm:right-6 z-10 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Image container & Caption */}
      <div className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center">
        <div className="relative rounded-2xl overflow-hidden bg-black max-h-[65vh] w-auto flex items-center justify-center shadow-2xl">
          <img
            src={currentItem.imageUrl}
            alt={currentItem.alt}
            className="max-h-[65vh] max-w-full object-contain select-none"
          />
        </div>

        {/* Caption */}
        <div className="mt-4 text-center max-w-xl text-white px-4">
          <span className="text-xs uppercase tracking-widest text-sky-400 font-semibold">
            {currentItem.category} • Image {currentIndex + 1} of {items.length}
          </span>
          <h3 className="text-lg sm:text-xl font-bold mt-1 text-slate-100">
            {currentItem.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            {currentItem.description}
          </p>
        </div>
      </div>
    </div>
  );
}
