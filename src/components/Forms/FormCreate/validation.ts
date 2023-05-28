import * as yup from "yup";

export const validation = yup.object({
  name: yup.string().required("Informe um apelido para a sua renda ou débito"),
  value: yup.string().required("Informe o valor da sua conta ou renda"),
  date: yup.string().required("informe o dia do registro"),
});
