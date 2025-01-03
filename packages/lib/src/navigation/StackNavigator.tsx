// packages/lib/src/navigation/StackNavigator.tsx
// Example stack for screens in a typical React Navigation usage.

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './NavigationTypes';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import DashboardScreen from '../screens/Home/DashboardScreen';
import LoginScreen from '../screens/LoginScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigator: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Details" component={DetailsScreen} />
    <Stack.Screen name="Dashboard" component={DashboardScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Profile" component={ProfileScreen} />
  </Stack.Navigator>
);

export default StackNavigator;
