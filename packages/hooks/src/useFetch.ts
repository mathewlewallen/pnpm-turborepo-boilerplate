// packages/hooks/src/useFetch.ts
// A lightweight hook to fetch data from an API endpoint with Axios.

import { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import { fetchData as apiFetchData } from '@readventure/lib/src/services/api'; // Ensure correct import path
import logger from '@readventure/lib/src/utils/logger'; // Ensure correct import path
import { handleAxiosError } from '@readventure/lib/src/utils/errorHandler'; // Ensure correct import path

interface UseFetchReturn<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

const useFetch = <T>(
  endpoint: string,
  params?: object,
  retries = 3,
  delay = 1000,
): UseFetchReturn<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (attempt = 1) => {
    setLoading(true);
    setError(null);
    try {
      const response = await apiFetchData<T>(endpoint, params);
      setData(response);
      logger.log(`Data fetched successfully from ${endpoint}`);
    } catch (err) {
      if (attempt < retries) {
        logger.warn(`Retrying fetch for ${endpoint} (Attempt ${attempt + 1})`);
        setTimeout(() => fetchData(attempt + 1), delay);
      } else {
        const axiosError = err as AxiosError;
        const errorMessage = handleAxiosError(axiosError);
        setError(errorMessage);
        logger.error(`Error fetching data from ${endpoint}: ${errorMessage}`, axiosError);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [endpoint, JSON.stringify(params)]);

  return { data, loading, error };
};

export default useFetch;
