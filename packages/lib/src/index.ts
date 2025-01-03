// packages/lib/src/index.ts
export * from './config/config';

export * from './contexts/UserContext';
export * from './contexts/CollaborativeSessionContext';
export * from './contexts/ThemeContext';
export * from './contexts/AuthContext';

export * from './navigation/routes';
export * from './navigation/AuthStack';
export * from './navigation/StackNavigator';
export * from './navigation/AppNavigator';
export * from './navigation/NavigationTypes';
export * from './navigation/MainStack';
export * from './navigation/TabNavigator';

export * from './services/firestoreService';
export * from './services/notificationsService';
export * from './services/firebase';
export * from './services/authService';
export * from './services/api';
export * from './services/analyticsService';
export * from './services/firebaseConfig';
export * from './services/openAIService';

export * from './store/slices/gamificationSlice';
export * from './store/slices/authSlice';
export * from './store/slices/userSlice';
export * from './store/slices/storySlice';
export * from './store/store';
export * from './store/ReduxProvider';

export * from './theme/colors';
export * from './theme/fonts';
export * from './theme/styles';
export * from './theme/darkColors';
export { ThemeProvider as UIThemeProvider, useTheme as useUITheme } from './theme/ThemeProvider';
export * from './theme/dimensions';

export * from './utils/validation';
export * from './utils/throttle';
export * from './utils/helpers';
export * from './utils/debounce';
export * from './utils/firebaseUtils';
export * from './utils/logger';
export * from './utils/cache';
export { formatDate as formatDateUtil } from './utils/formatDate';
export * from './utils/generateID';

export { default as makeRestRequest, restFetcher } from './makeRestRequest';
export { handleRestRequest, CustomError } from './handleRestRequest';
