// packages/lib/src/navigation/AppNavigator.tsx
// The top-level navigator that decides whether to show AuthStack or MainStack based on auth.

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import { useAuth } from '../contexts/AuthContext';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const { isAuthenticated } = useAuth();

  return (
    <NavigationContainer>{isAuthenticated ? <MainStack /> : <AuthStack />}</NavigationContainer>
  );
};

export default AppNavigator;
