import React, { useCallback, useState } from "react";
import { FlatList } from "react-native";
import { useTheme } from "styled-components/native";

import { CheckIcon } from "../../../assets";
import { Body1, Label1 } from "../../../styles/fonts";
import { Checkbox, CheckboxContainer, Container } from "./styles";
import RenderValue from "./components";

export type option = {
  label: string;
  value: boolean;
};

interface MultipleChoiceInputProps {
  options: option[];
  onPress: (value: option) => void;
}

const MultipleChoiceInput: React.FC<MultipleChoiceInputProps> = ({
  options,
  onPress,
}) => {
  const theme = useTheme();
  const [selected, setSelected] = useState<option>();

  const toggleSelectedValue = useCallback((option: option) => {
    onPress(option);
    setSelected(option);
  }, []);

  return (
    <Container>
      <Body1>Repetir mensalmente ?</Body1>
      {options.map(({ value, label }, index) => (
        <RenderValue
          key={label}
          onPress={toggleSelectedValue}
          active={value === selected?.value}
          value={value}
          label={label}
          theme={theme}
        />
      ))}
    </Container>
  );
};

export default MultipleChoiceInput;
