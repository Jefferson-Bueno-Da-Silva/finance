import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { Masks } from "react-native-mask-input";

import { MultipleChoiceInput, TextInput } from "../../Inputs";
import { Container, FooterContainer } from "./styles";
import { Button } from "../../Buttons";
import { validation } from "./validation";
import { ListData, TypeData } from "../../../interfaces";
import moment from "moment";
import { useTransactions } from "../../../hooks";

const data = [
  { label: "Sim", value: true },
  { label: "Não", value: false },
];

export type Inputs = {
  id?: string | number[];
  name: string;
  value: string;
  date: string;
  monthlyRepeat: boolean;
};

interface FormCreateProps {
  typeData: TypeData;
  onEnd: () => void;
  initialValue?: ListData;
}

const FormCreate: React.FC<FormCreateProps> = ({
  typeData,
  onEnd,
  initialValue,
}) => {
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<Inputs>({
    resolver: yupResolver(validation),
  });
  const { add, edit } = useTransactions();

  useEffect(() => {
    setValue("date", moment().format("DD/MM/YYYY"));

    if (initialValue) {
      const { label, amount, date, monthlyRepeat, id } = initialValue;

      setValue("id", id);
      setValue("name", label);
      setValue("value", amount.toFixed(2));
      setValue("date", moment(date).format("DD/MM/YYYY"));
      setValue("monthlyRepeat", monthlyRepeat);
    }
  }, [initialValue]);

  const handleCancel = useCallback(() => {
    onEnd();
  }, [onEnd]);

  const handleConfirm = useCallback(
    (data: Inputs) => {
      if (initialValue) {
        edit(typeData, data);
        onEnd();
        return;
      }

      add(typeData, data);
      onEnd();
      return;
    },
    [onEnd, typeData, initialValue]
  );

  return (
    <Container>
      <TextInput
        name="name"
        control={control}
        errorMessage={errors.name?.message}
        label="nome"
      />
      <TextInput
        name="value"
        control={control}
        errorMessage={errors.value?.message}
        label="Valor"
        keyboardType="numeric"
        mask={Masks.BRL_CURRENCY}
        maskAutoComplete
      />
      <TextInput
        name="date"
        control={control}
        errorMessage={errors.date?.message}
        label="Vencimento"
        icon
        keyboardType="number-pad"
        mask={Masks.DATE_DDMMYYYY}
        maskAutoComplete
      />
      <MultipleChoiceInput
        name="monthlyRepeat"
        control={control}
        options={data}
        errorMessage={errors.monthlyRepeat?.message}
      />
      <FooterContainer>
        <Button label="Cancelar" onPress={handleCancel} secondary error />
        <Button label="Confirmar" onPress={handleSubmit(handleConfirm)} />
      </FooterContainer>
    </Container>
  );
};

export default FormCreate;
