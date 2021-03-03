/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ZodNullable,
  ZodObject,
  ZodOptional,
  ZodRawShape,
  ZodString,
  ZodTypeAny,
} from 'zod';

export default interface IValidation {
  FIELD: string;
  VALIDATION:
    | ZodString
    | ZodObject<ZodRawShape>
    | ZodOptional<ZodTypeAny>
    | ZodNullable<ZodTypeAny>;
}
