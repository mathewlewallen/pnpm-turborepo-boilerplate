// packages/lib/src/utils/cache.ts
// Uses AsyncStorage to cache data locally, e.g., for offline usage.
import AsyncStorage from '@react-native-async-storage/async-storage';

export const cacheData = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error('Error caching data', e);
  }
};

export const getCachedData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value) {
      try {
        return JSON.parse(value);
      } catch (parseError) {
        console.error(`Error parsing cached data for key "${key}":`, parseError);
        return null;
      }
    }
    return null;
  } catch (e) {
    console.error('Error retrieving cached data', e);
    return null;
  }
};
