import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View``;

export const CheckboxContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;

interface CheckboxProps {
  active: boolean;
}

export const Checkbox = styled(TouchableOpacity)<CheckboxProps>`
  height: 30px;
  width: 30px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.secondary.white};
  margin-right: 8px;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.active &&
    css`
      border-width: 2px;
      border-color: ${props.theme.primary.cleanGreen};
    `}
`;
