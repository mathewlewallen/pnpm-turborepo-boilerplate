// packages/lib/src/handleRestRequest.ts
// A helper function for Next.js API routes that standardizes error handling.

import type { NextApiRequest, NextApiResponse } from 'next';

type ActionFunction = (req: NextApiRequest, res: NextApiResponse) => Promise<void>;

interface RequestAndResponse {
  req: NextApiRequest;
  res: NextApiResponse;
}

export const handleRestRequest = async function handleRestRequest(
  actionFunction: ActionFunction,
  { req, res }: RequestAndResponse,
): Promise<void> {
  try {
    await actionFunction(req, res);
  } catch (error: any) {
    const reference = `E${Math.round(1000 * Math.random())}`;
    const message = error?.message ?? 'An error occurred';
    const status = error?.status ?? 400;
    console.error(`[${reference}] Error ${status}: “${message}” –`, error);
    res.status(status).json({ status, message, reference });
  }
};

// An example custom error class if you want to throw specific status codes
export class CustomError extends Error {
  status?: number;

  constructor(message: string, status: number) {
    super(message);
    Object.setPrototypeOf(this, CustomError.prototype);
    (Error as any).captureStackTrace?.(this, CustomError);
    this.status = status;
  }
}
