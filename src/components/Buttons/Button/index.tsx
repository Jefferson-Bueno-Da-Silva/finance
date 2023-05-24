import React, { useMemo } from "react";
import { RectButton } from "react-native-gesture-handler";

import { ButtonContainer, Container } from "./styles";
import { Header4 } from "../../../styles/fonts";
import { useTheme } from "styled-components/native";

export interface ButtonProps {
  error?: boolean;
  secondary?: boolean;
  large?: boolean;
  label: string;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({
  error = false,
  large = false,
  secondary = false,
  label,
  onPress,
}) => {
  const theme = useTheme();

  const color = useMemo(() => {
    if (error && secondary) return theme.primary.darkRed;
    if (secondary) return theme.primary.darkGreen;
    return theme.primary.white;
  }, []);
  return (
    <Container error={error} secondary={secondary} large={large}>
      <ButtonContainer onPress={onPress}>
        <Header4 color={color}>{label}</Header4>
      </ButtonContainer>
    </Container>
  );
};

export default Button;
