export interface Story {
  id: number;
  username: string;
  avatar: string;
  image: string;
  timestamp: string;
  hasUnseenStories?: boolean;
}

export interface StoriesState {
  stories: Story[];
  currentIndex: number;
  isViewerOpen: boolean;
}
