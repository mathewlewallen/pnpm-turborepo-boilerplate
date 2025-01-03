// packages/lib/src/navigation/TabNavigator.tsx
// Defines the bottom-tab navigation used in the app for main sections.

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home/HomeScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import LeaderboardScreen from '../screens/Gamification/LeaderboardScreen';
import { useTheme } from '../contexts/ThemeContext';

const Tab = createBottomTabNavigator();

const TabNavigator: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: isDark ? '#121212' : '#FFFFFF',
        },
        tabBarActiveTintColor: isDark ? '#BB86FC' : '#6200EE',
        tabBarInactiveTintColor: isDark ? '#B3B3B3' : '#757575',
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Leaderboard" component={LeaderboardScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
