// packages/types/src/Story.ts
// Basic structures for reading or story content within the app

export interface Story {
  id: string;
  title: string;
  content: string;
  author: string;
  progress: number;
}

export interface StoryState {
  activeStory: Story | null;
  completedStories: string[];
}
