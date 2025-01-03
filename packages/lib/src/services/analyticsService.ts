// packages/lib/src/services/analyticsService.ts
// A simple wrapper around @react-native-firebase/analytics for logging events or user properties.

import { Analytics } from '@react-native-firebase/analytics';

const logEvent = async (eventName: string, params?: object) => {
  try {
    await Analytics().logEvent(eventName, params);
    console.log(`Event logged: ${eventName}`, params);
  } catch (error) {
    console.error('Error logging analytics event:', error);
  }
};

const setUserProperty = async (name: string, value: string) => {
  try {
    await Analytics().setUserProperty(name, value);
    console.log(`User property set: ${name} = ${value}`);
  } catch (error) {
    console.error('Error setting user property:', error);
  }
};

export default { logEvent, setUserProperty };
