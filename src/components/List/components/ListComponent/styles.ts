import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled.View`
  width: 100%;
  height: 70px;
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.secondary.separator};
  background-color: ${(props) => props.theme.primary.white};
`;

export const TextLeft = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ButtonContent = styled(RectButton)`
  position: relative;
  flex: 1;
  padding: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Completed = styled.View`
  position: absolute;
  left: 50px;
  right: 15px;
  height: 1px;
  background-color: ${(props) => props.theme.secondary.black};
`;

export const ContainerValue = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CheckBoxButton = styled.View`
  height: 30px;
  width: 30px;
  border-radius: 8px;
  border-width: 2px;
  border-color: ${(props) => props.theme.secondary.separator};
  background-color: ${(props) => props.theme.secondary.white};
  align-items: center;
  justify-content: center;
  margin-right: 8px;
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
