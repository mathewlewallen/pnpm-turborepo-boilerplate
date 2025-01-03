// packages/hooks/src/useUniqueDeviceID.ts
// A hook that ensures each device is assigned a unique ID stored securely
// using expo-secure-store, which persists across app launches.

import { useState, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

const STORAGE_KEY_UNIQUE_DEVICE_ID = 'uniqueDeviceID';

export default function useUniqueDeviceID(): string | undefined {
  const [uniqueDeviceID, setUniqueDeviceID] = useState<string>();

  useEffect(() => {
    async function getUniqueDeviceID(): Promise<void> {
      const fetchUUID = await SecureStore.getItemAsync(STORAGE_KEY_UNIQUE_DEVICE_ID);
      if (fetchUUID !== null) {
        // If a device ID is already stored, parse and set it
        setUniqueDeviceID(JSON.parse(fetchUUID));
      } else {
        // Otherwise, generate a new one and save it securely
        const newUUID = uuidv4();
        await SecureStore.setItemAsync(STORAGE_KEY_UNIQUE_DEVICE_ID, JSON.stringify(newUUID));
        setUniqueDeviceID(newUUID);
      }
    }
    void getUniqueDeviceID();
  }, []);

  return uniqueDeviceID;
}
