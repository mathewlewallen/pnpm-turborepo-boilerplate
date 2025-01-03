// packages/lib/src/store/store.ts
// Configures a Redux store, combining multiple slices (auth, user, gamification, etc.).

import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import gamificationReducer from './slices/gamificationSlice';
import storyReducer from './slices/storySlice';
import userReducer from './slices/userSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    gamification: gamificationReducer,
    story: storyReducer,
    user: userReducer,
  },
});

// Export RootState and AppDispatch types for typed usage
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
