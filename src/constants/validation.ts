import * as z from 'zod';
import { IValidation } from '@interfaces';

interface IValidationFields {
  PRODUCT_LIST_SEARCH: IValidation;
  LOGIN_FORM_EMAIL: IValidation;
  LOGIN_FORM_PASSWORD: IValidation;
}

const VALIDATION_FIELDS: IValidationFields = {
  PRODUCT_LIST_SEARCH: {
    FIELD: 'search',
    VALIDATION: z.string().min(3).max(100),
  },
  LOGIN_FORM_EMAIL: {
    FIELD: 'email',
    VALIDATION: z.string().email(),
  },
  LOGIN_FORM_PASSWORD: {
    FIELD: 'password',
    VALIDATION: z.string().min(8),
  },
};

export default VALIDATION_FIELDS;
