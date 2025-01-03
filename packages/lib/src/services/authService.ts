// packages/lib/src/services/authService.ts
import * as admin from 'firebase-admin';
import { FirebaseError } from '../types/firebaseTypes';

const auth = admin.auth();

const getErrorMessage = (errorCode: string): string => {
  switch (errorCode) {
    case 'auth/email-already-in-use':
      return 'This email is already in use.';
    case 'auth/invalid-email':
      return 'The email address is invalid.';
    case 'auth/weak-password':
      return 'The password is too weak.';
    case 'auth/user-not-found':
      return 'No user found with this email.';
    case 'auth/wrong-password':
      return 'Incorrect password.';
    case 'auth/user-disabled':
      return 'This user account has been disabled.';
    case 'auth/operation-not-allowed':
      return 'Operation not allowed. Please contact support.';
    case 'auth/invalid-continue-uri':
      return 'The continue URL is invalid.';
    case 'auth/invalid-action-code':
      return 'The action code is invalid or has expired.';
    case 'auth/expired-action-code':
      return 'The action code has expired.';
    case 'auth/missing-continue-uri':
      return 'A continue URL must be provided.';
    case 'auth/missing-android-pkg-name':
      return 'An Android package name must be provided.';
    case 'auth/missing-android-cert':
      return 'An Android app\'s SHA-1 certificate must be provided.';
    case 'auth/invalid-android-pkg-name':
      return 'The Android package name is invalid.';
    case 'auth/invalid-android-cert':
      return 'The Android app\'s SHA-1 certificate is invalid.';
    case 'auth/app-deleted':
      return 'The application has been deleted.';
    case 'auth/invalid-api-key':
      return 'The API key provided is invalid.';
    case 'auth/invalid-user-token':
      return 'The user token is invalid.';
    case 'auth/requires-recent-login':
      return 'This operation is sensitive and requires recent authentication. Log in again before retrying.';
    // Add more cases as needed
    default:
      return 'An unexpected error occurred. Please try again.';};
  }

export const createUser = async (email: string, password: string) => {
  try {
    const userRecord = await auth.createUser({
      email,
      password,
    });
    return userRecord;
  } catch (error) {
    const firebaseError = error as FirebaseError;
    const message = getErrorMessage(firebaseError.code);
    console.error(`Error Code: ${firebaseError.code}, Message: ${message}`);
    throw new Error(message);
  }
};

export const verifyToken = async (idToken: string) => {
  try {
    const decodedToken = await auth.verifyIdToken(idToken);
    return decodedToken;
  } catch (error) {
    const firebaseError = error as FirebaseError;
    const message = getErrorMessage(firebaseError.code);
    console.error(`Error Code: ${firebaseError.code}, Message: ${message}`);
    throw new Error(message);
  }
};

export const getUserById = async (uid: string) => {
  try {
    const userRecord = await auth.getUser(uid);
    return userRecord;
  } catch (error) {
    const firebaseError = error as FirebaseError;
    const message = getErrorMessage(firebaseError.code);
    console.error(`Error Code: ${firebaseError.code}, Message: ${message}`);
    throw new Error(message);
  }
};

export const updateUser = async (uid: string, updates: admin.auth.UpdateRequest) => {
  try {
    const userRecord = await auth.updateUser(uid, updates);
    return userRecord;
  } catch (error) {
    const firebaseError = error as FirebaseError;
    const message = getErrorMessage(firebaseError.code);
    console.error(`Error Code: ${firebaseError.code}, Message: ${message}`);
    throw new Error(message);
  }
};
