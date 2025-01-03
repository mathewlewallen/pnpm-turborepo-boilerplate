// packages/lib/src/utils/errorHandler.ts
import { AxiosError } from 'axios';

export const handleAxiosError = (error: AxiosError): string => {
  if (error.response) {
    const status = error.response.status;
    const serverMessage = error.response.data?.message || error.message;

    switch (status) {
      case 400:
        return 'Bad Request. Please check your input.';
      case 401:
        return 'Unauthorized. Please log in again.';
      case 404:
        return 'Resource not found.';
      case 500:
        return 'Server error. Please try again later.';
      default:
        return serverMessage;
    }
  } else if (error.request) {
    return 'Network error. Please check your internet connection.';
  } else {
    return error.message;
  }
};