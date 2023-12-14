import * as yup from "yup";

export const UserSchema = yup.object().shape({
  name: yup.string().min(3).required(),
  agree_to_terms: yup.boolean().required(),
  sector: yup.number().required(),
});
