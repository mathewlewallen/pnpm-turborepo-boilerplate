// packages/hooks/src/useGamification.ts
// Exposes Redux actions and state for managing points, badges, streaks, etc.

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@readventure/lib/src/store';
import { addPoints, addBadge, incrementStreak, resetStreak } from '@readventure/lib';

const useGamification = () => {
  // Pull out the current points, badges, streak from the Redux store
  const { points, badges, streak } = useSelector((state: RootState) => state.gamification);
  const dispatch = useDispatch();

  const handleAddPoints = (pointsToAdd: number) => {
    dispatch(addPoints(pointsToAdd));
  };

  const handleAddBadge = (badge: string) => {
    dispatch(addBadge(badge));
  };

  const handleIncrementStreak = () => {
    dispatch(incrementStreak());
  };

  const handleResetStreak = () => {
    dispatch(resetStreak());
  };

  return {
    points,
    badges,
    streak,
    handleAddPoints,
    handleAddBadge,
    handleIncrementStreak,
    handleResetStreak,
  };
};

export default useGamification;
