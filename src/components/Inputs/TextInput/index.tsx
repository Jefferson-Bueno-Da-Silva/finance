import React, { useState } from "react";
import { TextInputProps as TextProps } from "react-native";
import { useTheme } from "styled-components/native";

import { CalendarOutline, ErrorCircleOutline } from "../../../assets";
import {
  Container,
  ContainerProps,
  ErrorContainer,
  IconContainer,
  Input,
  InputContainer,
} from "./styles";
import { Body1 } from "../../../styles/fonts";

export type TextInputProps = TextProps &
  ContainerProps & {
    label?: string;
    errorMessage?: string;
    icon?: boolean;
  };

const TextInput: React.FC<TextInputProps> = ({
  icon = false,
  disabled = false,
  label = "",
  errorMessage = "",
  ...props
}) => {
  const theme = useTheme();
  const [selected, setSelected] = useState(false);
  return (
    <Container disabled={disabled}>
      {!!label && (
        <Body1
          style={{ textTransform: "capitalize" }}
          color={theme.secondary.black}
        >
          {label}
        </Body1>
      )}
      <InputContainer error={!!errorMessage} selected={selected}>
        {icon && (
          <IconContainer>
            <CalendarOutline
              size={24}
              color={selected ? theme.primary.cleanGreen : theme.primary.gray}
            />
          </IconContainer>
        )}
        <Input
          {...props}
          placeholderTextColor={theme.primary.gray}
          editable={!disabled}
          placeholder="Placeholder"
          onFocus={() => setSelected(true)}
          onBlur={() => setSelected(false)}
        />
      </InputContainer>
      {!!errorMessage && (
        <ErrorContainer>
          <ErrorCircleOutline color={theme.commons.error} />
          <Body1 style={{ marginLeft: 4 }} color={theme.commons.error}>
            {errorMessage}
          </Body1>
        </ErrorContainer>
      )}
    </Container>
  );
};

export default TextInput;
