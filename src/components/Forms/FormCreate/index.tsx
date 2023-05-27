import React from "react";

import { TextInput } from "../../Inputs";
import { Container } from "./styles";
import { ScrollView } from "react-native";

const FormCreate: React.FC = () => {
  return (
    <Container>
      <TextInput label="teste" />
      <TextInput label="teste" />
    </Container>
  );
};

export default FormCreate;
