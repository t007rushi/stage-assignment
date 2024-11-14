import { useState, useCallback } from "react";
import { StoriesState } from "../types/story";
import { stories } from "../data/stories";

export function useStories(): StoriesState & {
  openStory: (index: number) => void;
  closeStories: () => void;
  goToNext: () => void;
  goToPrev: () => void;
} {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openStory = useCallback((index: number) => {
    setCurrentIndex(index);
    setIsViewerOpen(true);
  }, []);

  const closeStories = useCallback(() => {
    setIsViewerOpen(false);
    setCurrentIndex(0);
  }, []);

  const goToNext = useCallback(() => {
    if (currentIndex < stories.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      closeStories();
    }
  }, [currentIndex, closeStories]);

  const goToPrev = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  }, [currentIndex]);

  return {
    stories,
    currentIndex,
    isViewerOpen,
    openStory,
    closeStories,
    goToNext,
    goToPrev,
  };
}
