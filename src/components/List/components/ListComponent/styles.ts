import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled.View`
  width: 100%;
  height: 70px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.secondary.separator};
  background-color: ${(props) => props.theme.primary.white};
`;

export const ContainerValue = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CircleIcon = styled(LinearGradient)`
  height: 38px;
  width: 38px;
  border-radius: 38px;
  background-color: green;
  margin-right: 16px;
  align-items: center;
  justify-content: center;
`;

export const ButtonContainer = styled(LinearGradient)`
  width: 100px;
  height: 100%;
  flex-direction: row;
`;

export const Button = styled(RectButton)`
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 16px;
`;
