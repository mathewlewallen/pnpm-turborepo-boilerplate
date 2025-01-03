// packages/lib/src/services/notificationsService.ts
// Configures local push notifications for iOS/Android with react-native-push-notification.

import { Platform } from 'react-native';
import PushNotification from 'react-native-push-notification';

const configureNotifications = () => {
  PushNotification.configure({
    onRegister: (token) => {
      console.log('Notification token:', token);
    },
    onNotification: (notification) => {
      console.log('Notification received:', notification);
    },
    permissions: {
      alert: true,
      badge: true,
      sound: true,
    },
    popInitialNotification: true,
    // iOS might need requestPermissions: true
    requestPermissions: Platform.OS === 'ios',
  });
};

const sendLocalNotification = (title: string, message: string) => {
  PushNotification.localNotification({
    title,
    message,
    playSound: true,
    soundName: 'default',
    importance: 'high',
    vibrate: true,
  });
};

const scheduleNotification = (title: string, message: string, date: Date) => {
  PushNotification.localNotificationSchedule({
    title,
    message,
    date,
    playSound: true,
    soundName: 'default',
    importance: 'high',
    vibrate: true,
  });
};

export default {
  configureNotifications,
  sendLocalNotification,
  scheduleNotification,
};
