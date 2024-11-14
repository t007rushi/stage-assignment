import { useState, useEffect, useCallback } from "react";
import { Story } from "./Story";
import { Story as StoryType } from "../types/story";

interface StoriesViewerProps {
  stories: StoryType[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export function StoriesViewer({
  stories,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}: StoriesViewerProps) {
  const [progressBar, setProgressBar] = useState(0);
  const [isPaused, setPaused] = useState(false);

  useEffect(() => {
    setProgressBar(0);
  }, [currentIndex]);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setProgressBar((prev) => {
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isPaused]);

  useEffect(() => {
    if (progressBar === 100) {
      onNext();
      setProgressBar(0);
    }
  }, [progressBar, onNext]);

  const handleTouchStart = useCallback(() => {
    setPaused(true);
  }, []);

  const handleTouchEnd = useCallback(() => {
    setPaused(false);
  }, []);

  return (
    <div
      className="fixed inset-0 bg-black z-50 touch-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleTouchStart}
      onMouseUp={handleTouchEnd}
      onMouseLeave={handleTouchEnd}
    >
      <div className="relative w-full h-full">
        <Story
          story={stories[currentIndex]}
          onNext={onNext}
          onPrev={onPrev}
          progress={progressBar}
          isFirst={currentIndex === 0}
          isLast={currentIndex === stories.length - 1}
        />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-30"
        >
          X
        </button>
      </div>
    </div>
  );
}
