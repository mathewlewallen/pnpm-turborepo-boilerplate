// packages/types/src/firebaseTypes.ts
// Some Firebase error typings for better TypeScript coverage

export interface FirebaseError extends Error {
  code: string;
  message: string;
}
