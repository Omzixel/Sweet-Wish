import React from "react";

import { useFullscreen } from "@/hooks/use-fullscreen";
import { FullscreenImage } from "@/components/FullscreenImage";

const Gallery: React.FC = () => {
  const images = [
    { src: "https://picsum.photos/200/300", alt: "Image 1" },
    { src: "https://picsum.photos/200/300", alt: "Image 2" },
    { src: "https://picsum.photos/200/300", alt: "Image 3" },
    { src: "https://picsum.photos/200/300", alt: "Image 4" },
    { src: "https://picsum.photos/200/300", alt: "Image 5" },
  ];

  const {
    fullscreenIndex,
    openFullscreen,
    closeFullscreen,
    goToNext,
    goToPrevious,
  } = useFullscreen(images.length);

  return (
    <section className="">
      <div className="container mx-auto px-4 py-8">
        <div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square  overflow-hidden rounded-lg"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  onClick={() => openFullscreen(index)}
                  className="transition-transform duration-300 hover:scale-110 cursor-pointer"
                />
              </div>
            ))}
          </div>
          {fullscreenIndex !== null && (
            <FullscreenImage
              src={images[fullscreenIndex].src}
              alt={images[fullscreenIndex].alt}
              onClose={closeFullscreen}
              onNext={goToNext}
              onPrevious={goToPrevious}
              currentIndex={fullscreenIndex}
              totalImages={images.length}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
