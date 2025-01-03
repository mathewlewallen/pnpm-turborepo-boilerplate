// packages/lib/src/store/slices/gamificationSlice.ts
// Redux slice to handle gamification logic such as points, badges, streak tracking.

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GamificationState {
  points: number;
  badges: string[];
  streak: number;
}

const initialState: GamificationState = {
  points: 0,
  badges: [],
  streak: 0,
};

const gamificationSlice = createSlice({
  name: 'gamification',
  initialState,
  reducers: {
    addPoints: (state, action: PayloadAction<number>) => {
      state.points += action.payload;
    },
    addBadge: (state, action: PayloadAction<string>) => {
      if (!state.badges.includes(action.payload)) {
        state.badges.push(action.payload);
      }
    },
    incrementStreak: (state) => {
      state.streak += 1;
    },
    resetStreak: (state) => {
      state.streak = 0;
    },
  },
});

export const { addPoints, addBadge, incrementStreak, resetStreak } = gamificationSlice.actions;
export default gamificationSlice.reducer;
