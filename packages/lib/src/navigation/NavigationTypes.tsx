// packages/lib/src/navigation/NavigationTypes.tsx
// Defines types for typed navigation with React Navigation in TypeScript.

import React from 'react';
import { Story } from '../types/story';

export type RootStackParamList = {
  READING: { story: Story };
  Home: undefined;
  Details: { itemId: number; otherParam?: string };
  Dashboard: undefined;
  Login: undefined;
  Profile: { userId: string };
};
