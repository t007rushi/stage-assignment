import React from "react";
import { Story as StoryType } from "../types/story";

interface StoryProps {
  story: StoryType;
  onNext: () => void;
  onPrev: () => void;
  progress: number;
  isFirst: boolean;
  isLast: boolean;
}

export function Story({
  story,
  onNext,
  onPrev,
  progress,
  isFirst,
  isLast,
}: StoryProps) {
  return (
    <div className="relative w-full h-full">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gray-600/30 z-20">
        <div
          className="h-full bg-white transition-all duration-100 ease-linear"
          style={{ width: `${progress}%` }}
          data-testid="story-progress"
        />
      </div>

      <div className="absolute inset-0">
        <img
          src={story.image}
          alt={`Story by ${story.username}`}
          className="w-full h-full object-cover"
          data-testid="story-image"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />
      </div>

      <div className="absolute top-4 left-4 right-4 flex items-center z-20">
        <div className="flex items-center">
          <img
            src={story.avatar}
            alt={story.username}
            className="w-8 h-8 rounded-full border-2 border-white"
          />
          <span className="ml-2 text-white font-semibold">
            {story.username}
          </span>
          <span className="ml-2 text-white/70 text-sm">{story.timestamp}</span>
        </div>
      </div>

      <button
        onClick={onPrev}
        className={`absolute left-0 top-0 w-1/2 h-full z-10 ${
          isFirst ? "hidden" : ""
        }`}
        data-testid="prev-story-area"
      />
      <button
        onClick={onNext}
        className={`absolute right-0 top-0 w-1/2 h-full z-10 ${
          isLast ? "hidden" : ""
        }`}
        data-testid="next-story-area"
      />
    </div>
  );
}
