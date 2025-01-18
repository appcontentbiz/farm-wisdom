export const passwordStrengthRegex = {
  minLength: /.{8,}/,
  hasUpperCase: /[A-Z]/,
  hasLowerCase: /[a-z]/,
  hasNumbers: /\d/,
  hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/
};

export const validatePassword = (password) => {
  const validations = {
    minLength: passwordStrengthRegex.minLength.test(password),
    hasUpperCase: passwordStrengthRegex.hasUpperCase.test(password),
    hasLowerCase: passwordStrengthRegex.hasLowerCase.test(password),
    hasNumbers: passwordStrengthRegex.hasNumbers.test(password),
    hasSpecialChar: passwordStrengthRegex.hasSpecialChar.test(password)
  };

  const messages = {
    minLength: 'Password must be at least 8 characters long',
    hasUpperCase: 'Password must contain at least one uppercase letter',
    hasLowerCase: 'Password must contain at least one lowercase letter',
    hasNumbers: 'Password must contain at least one number',
    hasSpecialChar: 'Password must contain at least one special character'
  };

  const failedValidations = Object.entries(validations)
    .filter(([_, valid]) => !valid)
    .map(([key]) => messages[key]);

  return {
    isValid: failedValidations.length === 0,
    strength: (Object.values(validations).filter(Boolean).length / 5) * 100,
    messages: failedValidations
  };
};

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
