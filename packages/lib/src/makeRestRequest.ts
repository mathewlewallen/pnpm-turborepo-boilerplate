// packages/lib/src/makeRestRequest.ts
// A helper to make REST calls with fetch, integrating error handling and JSON parsing.

import config from './config/config';
import logger from './utils/logger';

// Throw an error with a reference code for debugging
const throwError = (jsonData: any, res: Response): void => {
  const reference = `E${Math.round(1000 * Math.random())}`;
  const { message, status = 400 } = jsonData;
  console.error(`[${reference}] Error ${status}: "${message}" –`, jsonData);
  if (!isNaN(status)) (res as any).status = status;
  throw new Error(message);
};

export const makeRestRequest = async (
  method = 'GET',
  path: string,
  data?: object,
  sessionAccessToken?: string,
): Promise<any> => {
  const completeUrl = (config.apiBaseUrl as string) + path;

  return await fetch(completeUrl, {
    method,
    mode: 'cors',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...(sessionAccessToken !== undefined && {
        Authorization: `Bearer ${sessionAccessToken ?? ''}`,
      }),
    },
    body: data !== undefined ? JSON.stringify(data) : null,
  }).then(async (res: Response) => {
    if (!res.ok) {
      const jsonData = await res.json();
      throwError(jsonData, res);
    } else {
      let jsonData: any = {};
      try {
        jsonData = await res.json();
      } catch (error: any) {
        console.warn('Parse JSON:', error?.message ?? error);
      }
      // Some error payloads might set code = 'error_something'
      if (jsonData.code?.toLowerCase?.()?.includes('error')) {
        throwError(jsonData, res);
      }
      return jsonData;
    }
  });
};

export const restFetcher = async (path: string): Promise<object> => {
  const completeUrl = `${config.apiBaseUrl}${path}`;
  logger.log(`restFetcher - Method: GET, URL: ${completeUrl}`);
  return await makeRestRequest('GET', path);
};

export default makeRestRequest;