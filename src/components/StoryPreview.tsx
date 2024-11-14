import React from "react";
import { Story } from "../types/story";

interface StoryPreviewProps {
  story: Story;
  onClick: () => void;
}

export function StoryPreview({ story, onClick }: StoryPreviewProps) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center space-y-1 focus:outline-none"
    >
      <div
        className={`p-[2px] rounded-full ${
          story.hasUnseenStories
            ? "bg-gradient-to-tr from-yellow-400 to-fuchsia-600"
            : "bg-gray-200"
        }`}
      >
        <div className="p-[2px] bg-white rounded-full">
          <img
            src={story.avatar}
            alt={story.username}
            className="w-16 h-16 rounded-full object-cover"
          />
        </div>
      </div>
      <span className="text-sm text-gray-700 truncate w-20">
        {story.username}
      </span>
    </button>
  );
}
