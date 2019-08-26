import * as yup from 'yup';

export const registerSchema = yup.object().shape({
  username: yup.string().notRequired(),
  email: yup
    .string()
    .email()
    .required(),
  password: yup
    .string()
    .required()
    .min(6, 'Min length is 6')
});
