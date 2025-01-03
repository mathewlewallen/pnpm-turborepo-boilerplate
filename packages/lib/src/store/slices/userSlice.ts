// packages/lib/src/store/slices/userSlice.ts
// Redux slice for more detailed user info (avatar, preferences, etc.).
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  id: string | null;
  name: string;
  avatar: string;
  preferences: {
    theme: string;
    language: string;
  };
}

const initialState: UserState = {
  id: null,
  name: '',
  avatar: '',
  preferences: {
    theme: 'light',
    language: 'en',
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      return { ...state, ...action.payload };
    },
    updatePreferences: (state, action: PayloadAction<Partial<UserState['preferences']>>) => {
      state.preferences = { ...state.preferences, ...action.payload };
    },
    clearUser: () => initialState,
  },
});

export const { setUser, updatePreferences, clearUser } = userSlice.actions;
export default userSlice.reducer;
