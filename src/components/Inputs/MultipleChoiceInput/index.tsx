import React, { useCallback, useState } from "react";
import { FlatList } from "react-native";
import { useTheme } from "styled-components/native";
import { Control, Controller } from "react-hook-form";

import { CheckIcon } from "../../../assets";
import { Body1, Label1 } from "../../../styles/fonts";
import { Checkbox, CheckboxContainer, Container } from "./styles";
import RenderValue from "./components";
import { MessageError } from "../../Alerts";

export type option = {
  label: string;
  value: boolean;
};

interface MultipleChoiceInputProps {
  options: option[];
  errorMessage?: string;
  control: Control<any>;
  name: string;
}

const MultipleChoiceInput: React.FC<MultipleChoiceInputProps> = ({
  options,
  errorMessage,
  control,
  name,
}) => {
  const theme = useTheme();
  const [selected, setSelected] = useState<option>();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <Container>
          <Body1>Repetir mensalmente ?</Body1>
          {options.map(({ value, label }, index) => (
            <RenderValue
              key={label}
              onPress={(op) => {
                setSelected(op);
                onChange(op.value);
              }}
              active={value === selected?.value}
              value={value}
              label={label}
              theme={theme}
            />
          ))}
          {!!errorMessage && <MessageError errorMessage={errorMessage} />}
        </Container>
      )}
    />
  );
};

export default MultipleChoiceInput;
