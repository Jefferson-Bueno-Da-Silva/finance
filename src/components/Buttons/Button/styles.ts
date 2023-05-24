import styled, { css } from "styled-components/native";

import { ButtonProps } from ".";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled.View<Partial<ButtonProps>>`
  width: 45%;
  height: 50px;
  border-radius: 8px;

  background-color: ${(props) => props.theme.primary.darkGreen};

  ${(props) =>
    props.large &&
    css`
      width: 100%;
    `}

  ${(props) =>
    props.secondary &&
    css`
      background-color: transparent;
      border-color: ${(props) => props.theme.primary.darkGreen};
      border-width: 2px;
    `}

  ${(props) =>
    props.error &&
    css`
      border-color: ${(props) => props.theme.primary.darkRed};
      border-width: 2px;
    `}
`;

export const ButtonContainer = styled(RectButton)`
  flex: 1;
  border-radius: 8px;

  align-items: center;
  justify-content: center;
`;
