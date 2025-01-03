// packages/lib/src/navigation/AuthStack.tsx
// Defines the stack for auth-related screens (onboarding, login, signup, etc.)

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingScreen from '../screens/Auth/OnboardingScreen.tsx';
import LoginScreen from '../screens/Auth/LoginScreen.tsx';
import SignupScreen from '../screens/Auth/SignupScreen.tsx';
import { ROUTES } from './routes.ts';

const Stack = createStackNavigator();

const AuthStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ROUTES.AUTH.ONBOARDING} component={OnboardingScreen} />
      <Stack.Screen name={ROUTES.AUTH.LOGIN} component={LoginScreen} />
      <Stack.Screen name={ROUTES.AUTH.SIGNUP} component={SignupScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
