import * as z from 'zod';
import { IValidation } from '@interfaces';

interface IValidationFields {
  PRODUCT_LIST_SEARCH: IValidation;
  PRODUCT_LIST_FILTER_VENDORS: IValidation;
  LOGIN_FORM_EMAIL: IValidation;
  LOGIN_FORM_PASSWORD: IValidation;
}

const VALIDATION_FIELDS: IValidationFields = {
  PRODUCT_LIST_SEARCH: {
    FIELD: 'search',
    VALIDATION: z.string().min(3).max(100).optional(),
  },
  PRODUCT_LIST_FILTER_VENDORS: {
    FIELD: 'vendor',
    VALIDATION: z.nullable(
      z.object({
        label: z.string(),
      })
    ),
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
