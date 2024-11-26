import { useState, useCallback } from "react";

export function useFullscreen(totalImages: number) {
  const [fullscreenIndex, setFullscreenIndex] = useState<number | null>(null);

  const openFullscreen = useCallback((index: number) => {
    setFullscreenIndex(index);
  }, []);

  const closeFullscreen = useCallback(() => {
    setFullscreenIndex(null);
  }, []);

  const goToNext = useCallback(() => {
    setFullscreenIndex((prev) =>
      prev === null || prev === totalImages - 1 ? 0 : prev + 1
    );
  }, [totalImages]);

  const goToPrevious = useCallback(() => {
    setFullscreenIndex((prev) =>
      prev === null || prev === 0 ? totalImages - 1 : prev - 1
    );
  }, [totalImages]);

  return {
    fullscreenIndex,
    openFullscreen,
    closeFullscreen,
    goToNext,
    goToPrevious,
  };
}
