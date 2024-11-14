import { StoryPreview } from "./components/StoryPreview";
import { StoriesViewer } from "./components/StoriesViewer";
import { useStories } from "./hooks/useStories";

function App() {
  const {
    stories,
    currentIndex,
    isViewerOpen,
    openStory,
    closeStories,
    goToNext,
    goToPrev,
  } = useStories();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="max-w-screen-lg mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              STAGE Stories
            </h1>
          </div>
        </div>
      </header>

      <div className="bg-white rounded-lg shadow-sm p-2">
        <div className="flex space-x-4 overflow-x-auto pb-2">
          {stories.map((story: any, index: any) => (
            <StoryPreview
              key={story.id}
              story={story}
              onClick={() => openStory(index)}
            />
          ))}
        </div>
      </div>

      {isViewerOpen && (
        <StoriesViewer
          stories={stories}
          currentIndex={currentIndex}
          onClose={closeStories}
          onNext={goToNext}
          onPrev={goToPrev}
        />
      )}
    </div>
  );
}

export default App;
