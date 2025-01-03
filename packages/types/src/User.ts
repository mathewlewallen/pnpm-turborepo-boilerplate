// packages/types/src/User.ts
// Data types for user objects in the system, separate from AuthUser to avoid naming collisions

export interface UserPreferences {
  // Preferences stored on the user profile (theme, language, etc.)
  theme: 'light' | 'dark';
  language: string;
}

export interface User {
  // A more robust user entity that might be used outside of auth logic
  id: string;
  name: string;
  avatar: string;
  preferences: { theme: string; language: string };
  // or equivalently:
  // preferences: UserPreferences;
  //
  // (If you plan to expand user preferences, you can import and use 'UserPreferences' here.)
}
