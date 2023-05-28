import * as yup from "yup";

export const validation = yup.object({
  name: yup
    .string()
    .max(50, "Esse nome é muito grande,por favor use um nome\nmenor")
    .required("Informe um apelido para a sua renda ou débito"),
  value: yup
    .string()
    .test("value", "O valor é obrigatório", (value) => {
      return !!value?.trim().replace(/R\$/gi, "").replace(/R/gi, "");
    })
    .required("Informe o valor da sua conta ou renda"),
  date: yup.string().required("informe o dia do registro"),
  monthlyRepeat: yup
    .boolean()
    .required("Informe se deseja ser lembrado na data escolhida"),
});
