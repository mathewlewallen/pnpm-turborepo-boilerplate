// packages/lib/src/utils/firebaseUtils.ts
// Simple Firestore utility functions for fetching, adding, deleting documents.

import { firestore } from '../services/firebaseConfig';

export const fetchCollection = async (collection: string) => {
  try {
    const snapshot = await firestore.collection(collection).get();
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Error fetching collection:', error);
    throw error;
  }
};

export const addToCollection = async (collection: string, data: object) => {
  try {
    const docRef = await firestore.collection(collection).add(data);
    return docRef.id;
  } catch (error) {
    console.error('Error adding to collection:', error);
    throw error;
  }
};

export const deleteFromCollection = async (collection: string, docId: string) => {
  try {
    await firestore.collection(collection).doc(docId).delete();
  } catch (error) {
    console.error('Error deleting from collection:', error);
    throw error;
  }
};
