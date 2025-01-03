// packages/lib/src/utils/helpers.ts
// Miscellaneous helper functions used across the app.

export const formatDate = (date: Date): string => {
  // Returns YYYY-MM-DD from a Date object
  return date.toISOString().split('T')[0];
};

export const capitalize = (str: string): string => {
  // Capitalizes first letter of the string
  return str.charAt(0).toUpperCase() + str.slice(1);
};
