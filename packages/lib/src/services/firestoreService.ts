// packages/lib/src/services/firestoreService.ts
// Example Firestore service for real-time session data.

import { firestore } from './firebaseConfig';

// Create a new session doc in Firestore
export const createSession = async (sessionId: string, participants: string[]) => {
  try {
    await firestore.collection('CollaborativeSessions').doc(sessionId).set({
      participants,
      active: true,
      createdAt: new Date(),
    });
  } catch (error) {
    console.error('Error creating session:', error);
    throw error;
  }
};

// Update the participant array
export const updateSessionParticipants = async (sessionId: string, participants: string[]) => {
  try {
    await firestore.collection('CollaborativeSessions').doc(sessionId).update({
      participants,
    });
  } catch (error) {
    console.error('Error updating participants:', error);
    throw error;
  }
};

// Mark a session as ended
export const endSession = async (sessionId: string) => {
  try {
    await firestore.collection('CollaborativeSessions').doc(sessionId).update({
      active: false,
      endedAt: new Date(),
    });
  } catch (error) {
    console.error('Error ending session:', error);
    throw error;
  }
};
