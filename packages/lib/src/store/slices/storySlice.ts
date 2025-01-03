// packages/lib/src/store/slices/storySlice.ts
// Redux slice to track which story a user is currently reading and their progress.

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface StoryState {
  activeStory: {
    id: string;
    title: string;
    progress: number;
  } | null;
  completedStories: string[];
}

const initialState: StoryState = {
  activeStory: null,
  completedStories: [],
};

const storySlice = createSlice({
  name: 'story',
  initialState,
  reducers: {
    startStory: (state, action: PayloadAction<{ id: string; title: string }>) => {
      state.activeStory = { ...action.payload, progress: 0 };
    },
    updateProgress: (state, action: PayloadAction<number>) => {
      if (state.activeStory) {
        state.activeStory.progress = action.payload;
      }
    },
    completeStory: (state) => {
      if (state.activeStory) {
        state.completedStories.push(state.activeStory.id);
        state.activeStory = null;
      }
    },
  },
});

export const { startStory, updateProgress, completeStory } = storySlice.actions;
export default storySlice.reducer;
