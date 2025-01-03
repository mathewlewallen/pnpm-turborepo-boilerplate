// packages/hooks/src/useValidation.ts
// A simple hook for validating user input (e.g., name, email, password).

import { useState } from 'react';
import { validateEmail, validatePassword, validateName } from '../utils/validation';

const useValidation = () => {
  // Store field errors in an object keyed by field name
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateField = (field: string, value: string) => {
    let error = '';
    // Basic validation checks
    if (field === 'email' && !validateEmail(value)) {
      error = 'Invalid email address';
    } else if (field === 'password' && !validatePassword(value)) {
      error = 'Password must be at least 6 characters';
    } else if (field === 'name' && !validateName(value)) {
      error = 'Name cannot be empty';
    }

    setErrors((prevErrors) => ({ ...prevErrors, [field]: error }));
    return !error;
  };

  const clearErrors = () => setErrors({});

  return {
    errors,
    validateField,
    clearErrors,
  };
};

export default useValidation;
