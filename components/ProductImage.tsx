import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductImageProps {
  images: string[];
}

export const ProductImage: React.FC<ProductImageProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (!images || images.length === 0) {
    return <div className="w-full aspect-square bg-gray-200" />;
  }

  return (
    <div className="relative w-full aspect-square bg-gray-100 overflow-hidden group select-none">
      <img 
        src={images[currentIndex]} 
        alt={`Product ${currentIndex + 1}`} 
        className="w-full h-full object-cover"
      />
      
      {/* Image Counter Badge */}
      <div className="absolute bottom-4 right-4 bg-black/60 text-white text-xs px-2.5 py-1 rounded-full font-medium z-10">
        {currentIndex + 1}/{images.length}
      </div>

      {/* Navigation Controls - Show on hover or always on mobile if desired, here we show simple buttons */}
      {images.length > 1 && (
        <>
            <button 
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-1 rounded-full transition-colors z-20"
                onClick={handlePrev}
            >
                <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-1 rounded-full transition-colors z-20"
                onClick={handleNext}
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1.5 z-10">
                {images.map((_, idx) => (
                    <div 
                        key={idx}
                        className={`w-1.5 h-1.5 rounded-full shadow-sm transition-all ${idx === currentIndex ? 'bg-[#fe2c55] scale-125' : 'bg-white/60'}`}
                    />
                ))}
            </div>
        </>
      )}
    </div>
  );
};