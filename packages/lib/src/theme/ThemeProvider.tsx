// packages/lib/src/theme/ThemeProvider.tsx
// Context-based approach for theming. Exports a hook to toggle theme and retrieve color values.

import React, { createContext, useState, useContext, ReactNode } from 'react';
import { colors as lightColors } from './colors';
import darkColors from './darkColors';

type ThemeType = 'light' | 'dark';

interface ThemeContextType {
  theme: ThemeType;
  toggleTheme: () => void;
  colors: typeof lightColors | typeof darkColors;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>('light');

  const toggleTheme = () => {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'));
  };

  // Select the correct color set based on current theme
  const colors = theme === 'light' ? lightColors.light : darkColors;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, colors }}>{children}</ThemeContext.Provider>
  );
};

// Hook for accessing theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
