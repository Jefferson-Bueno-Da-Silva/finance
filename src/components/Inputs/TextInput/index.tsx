import React, { useState } from "react";
import { MaskInputProps } from "react-native-mask-input";
import { Control, Controller } from "react-hook-form";
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
import { MessageError } from "../../Alerts";

export type TextInputProps = MaskInputProps &
  ContainerProps & {
    label?: string;
    errorMessage?: string;
    icon?: boolean;
    control: Control<any>;
    name: string;
  };

const TextInput: React.FC<TextInputProps> = ({
  name,
  control,
  icon = false,
  disabled = false,
  label = "",
  errorMessage = "",
  ...props
}) => {
  const theme = useTheme();
  const [selected, setSelected] = useState(false);
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
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
                  color={
                    selected ? theme.primary.cleanGreen : theme.primary.gray
                  }
                />
              </IconContainer>
            )}
            <Input
              {...props}
              value={value}
              onChangeText={(masked) => onChange(masked)}
              placeholderTextColor={theme.primary.gray}
              editable={!disabled}
              placeholder="Placeholder"
              onFocus={() => setSelected(true)}
              onBlur={() => setSelected(false)}
            />
          </InputContainer>
          {!!errorMessage && <MessageError errorMessage={errorMessage} />}
        </Container>
      )}
    />
  );
};

export default TextInput;
