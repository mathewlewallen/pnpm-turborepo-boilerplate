// packages/lib/src/navigation/MainStack.tsx
// The primary stack for main in-app screens once the user is authenticated.

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import ReadingScreen from '../screens/Story/ReadingScreen';
import PhonicsScreen from '../screens/Story/PhonicsScreen';
import { ROUTES } from './routes';

// The SettingsScreen is included so the user can navigate to account settings, etc.
import SettingsScreen from '../screens/Profile/SettingsScreen';

const Stack = createStackNavigator();

const MainStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ROUTES.MAIN.HOME} component={TabNavigator} />
      <Stack.Screen name={ROUTES.MAIN.READING} component={ReadingScreen} />
      <Stack.Screen name={ROUTES.MAIN.PHONICS} component={PhonicsScreen} />

      {/* [ADDED] Provide a route for the user to navigate to SETTINGS */}
      <Stack.Screen name={ROUTES.MAIN.SETTINGS} component={SettingsScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
