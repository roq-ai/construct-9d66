import * as yup from 'yup';

export const issueValidationSchema = yup.object().shape({
  description: yup.string().required(),
  status: yup.string().required(),
  type: yup.string().required(),
  reported_by: yup.string().nullable().required(),
  assigned_to: yup.string().nullable().required(),
});
