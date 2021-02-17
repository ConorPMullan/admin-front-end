import { ZodIssue } from 'zod';

const getErrorMessage = (
  errors: ZodIssue[],
  field: string
): string | undefined => {
  const filteredErrors = errors.filter((error) =>
    isMatchingField(error, field)
  );
  return filteredErrors.length > 0 ? filteredErrors[0].message : undefined;
};

const isFieldValid = (errors: ZodIssue[], field: string): boolean => {
  return errors.filter((error) => isMatchingField(error, field)).length > 0;
};

const removeError = (errors: ZodIssue[], field: string): ZodIssue[] => {
  return errors.filter((error) => !isMatchingField(error, field));
};

const isMatchingField = (error: ZodIssue, field: string): boolean => {
  return error.path.includes(field);
};

const ValidationService = {
  getErrorMessage,
  isFieldValid,
  removeError,
};

export default ValidationService;
