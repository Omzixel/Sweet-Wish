import { useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FullscreenImageProps {
  src: string;
  alt: string;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
  currentIndex: number;
  totalImages: number;
}

export function FullscreenImage({
  src,
  alt,
  onClose,
  onNext,
  onPrevious,
  currentIndex,
  totalImages,
}: FullscreenImageProps) {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onNext();
      if (event.key === "ArrowLeft") onPrevious();
    },
    [onClose, onNext, onPrevious]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center">
      <div className="relative flex items-center justify-center w-full h-full">
        <img
          src={src}
          alt={alt}
          className="select-none max-w-full max-h-full object-contain"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 text-white"
          onClick={onClose}
        >
          <X className="h-6 w-6" />
          <span className="sr-only">Close fullscreen</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white"
          onClick={onPrevious}
        >
          <ChevronLeft className="h-6 w-6" />
          <span className="sr-only">Previous image</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white"
          onClick={onNext}
        >
          <ChevronRight className="h-6 w-6" />
          <span className="sr-only bg-red-900">Next image</span>
        </Button>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-3 py-1 rounded-full">
          {currentIndex + 1} / {totalImages}
        </div>
      </div>
    </div>
  );
}
