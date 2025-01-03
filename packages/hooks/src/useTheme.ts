// packages/hooks/src/useTheme.ts
// Allows access to theme context, including the ability to toggle between light/dark.

import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const useTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return {
    theme,
    toggleTheme,
  };
};

export default useTheme;
