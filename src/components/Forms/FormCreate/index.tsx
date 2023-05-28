import React, { useCallback } from "react";

import { MultipleChoiceInput, TextInput } from "../../Inputs";
import { Container } from "./styles";
import { ScrollView } from "react-native";
import { option } from "../../Inputs/MultipleChoiceInput";

const data = [
  { label: "Sim", value: true },
  { label: "Não", value: false },
];

const FormCreate: React.FC = () => {
  const handleSelectedValue = useCallback((value: option) => {}, []);

  return (
    <Container>
      <TextInput label="nome" />
      <TextInput label="Valor" />
      <TextInput label="Data" icon />
      <MultipleChoiceInput options={data} onPress={handleSelectedValue} />
    </Container>
  );
};

export default FormCreate;
