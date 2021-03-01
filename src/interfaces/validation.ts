import { ZodString } from 'zod';

export default interface IValidation {
  FIELD: string;
  VALIDATION: ZodString;
}
