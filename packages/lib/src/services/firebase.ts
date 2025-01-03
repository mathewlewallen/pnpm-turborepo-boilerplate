// packages/lib/src/services/firebase.ts
// Provides a few convenience functions to get/set/delete documents from Firestore.

import { firestore } from './firebaseConfig';

export const getDocument = async (collection: string, docId: string) => {
  try {
    const doc = await firestore.collection(collection).doc(docId).get();
    if (doc.exists) {
      return doc.data();
    } else {
      throw new Error('Document not found');
    }
  } catch (error) {
    console.error('Error fetching document:', error);
    throw error;
  }
};

export const setDocument = async (collection: string, docId: string, data: object) => {
  try {
    await firestore.collection(collection).doc(docId).set(data, { merge: true });
  } catch (error) {
    console.error('Error setting document:', error);
    throw error;
  }
};

export const deleteDocument = async (collection: string, docId: string) => {
  try {
    await firestore.collection(collection).doc(docId).delete();
  } catch (error) {
    console.error('Error deleting document:', error);
    throw error;
  }
};
