// packages/lib/src/utils/generateID.ts
// Generates a short random ID, e.g. for local story references or ephemeral keys.

export const generateID = (): string => {
  return Math.random().toString(36).substr(2, 9);
};

export default generateID;
