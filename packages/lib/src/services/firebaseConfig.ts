// packages/lib/src/services/firebaseConfig.ts
// Initializes the React Native Firebase app with environment variables for config.
// TODO: ADD ALL FIREBASE ENV VARIABLES.

import { initializeApp } from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storageModule from '@react-native-firebase/storage';

// The config object is partially derived from environment variables
// which are typically injected at build-time or set in .env
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

initializeApp(firebaseConfig);

// Export the relevant modules so the rest of the code can use them
export { auth, firestore };
export const storage = storageModule();
