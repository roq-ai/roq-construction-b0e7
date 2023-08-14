import * as yup from 'yup';

export const billingValidationSchema = yup.object().shape({
  invoice: yup.number().integer().nullable(),
});
