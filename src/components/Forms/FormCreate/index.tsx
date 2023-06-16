import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Masks } from "react-native-mask-input";

import { MultipleChoiceInput, TextInput } from "../../Inputs";
import { Container, FooterContainer } from "./styles";
import { option } from "../../Inputs/MultipleChoiceInput";
import { Button } from "../../Buttons";
import { validation } from "./validation";

const data = [
  { label: "Sim", value: true },
  { label: "Não", value: false },
];

type Inputs = {
  name: string;
  value: number;
  date: Date;
  monthlyRepeat: boolean;
};

interface FormCreateProps {
  onEnd: () => void;
  initialValue?: Inputs;
}

const FormCreate: React.FC<FormCreateProps> = ({ onEnd, initialValue }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<Inputs>({
    resolver: yupResolver(validation),
  });

  useEffect(() => {
    if (initialValue) {
      setValue("name", initialValue.name);
      setValue("value", initialValue.value);
      setValue("date", initialValue.date);
      setValue("monthlyRepeat", initialValue.monthlyRepeat);
    }
  }, [initialValue]);

  const handleCancel = useCallback(() => {
    onEnd();
  }, [onEnd]);

  const handleConfirm = useCallback(
    (data: Inputs) => {
      console.log(data);
      onEnd();
    },
    [onEnd]
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
        label="Data"
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
