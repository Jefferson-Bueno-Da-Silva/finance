import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { MultipleChoiceInput } from "../../Inputs";
import { Container, FooterContainer } from "./styles";
import { option } from "../../Inputs/MultipleChoiceInput";
import { Button } from "../../Buttons";
import ControlledInput from "../../ControlledInput";
import { validation } from "./validation";

const data = [
  { label: "Sim", value: true },
  { label: "Não", value: false },
];

interface FormCreateProps {
  onEnd: () => void;
}

type Inputs = {
  name: string;
  value: number;
  date: Date;
};

const FormCreate: React.FC<FormCreateProps> = ({ onEnd }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(validation),
  });

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

  const handleSelectedValue = useCallback((value: option) => {}, []);

  return (
    <Container>
      <ControlledInput
        name="name"
        control={control}
        errorMessage={errors.name?.message}
        label="nome"
      />
      <ControlledInput
        name="value"
        control={control}
        errorMessage={errors.value?.message}
        label="Valor"
        keyboardType="numeric"
      />
      <ControlledInput
        name="date"
        control={control}
        errorMessage={errors.date?.message}
        label="Data"
        icon
      />
      <MultipleChoiceInput options={data} onPress={handleSelectedValue} />
      <FooterContainer>
        <Button label="Cancelar" onPress={handleCancel} secondary error />
        <Button label="Confirmar" onPress={handleSubmit(handleConfirm)} />
      </FooterContainer>
    </Container>
  );
};

export default FormCreate;
