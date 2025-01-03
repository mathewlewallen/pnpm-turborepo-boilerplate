// packages/types/src/Gamification.ts
// Types relating to points, badges, and other gamification aspects

export interface Badge {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface GamificationState {
  points: number;
  badges: Badge[];
  streak: number;
}
