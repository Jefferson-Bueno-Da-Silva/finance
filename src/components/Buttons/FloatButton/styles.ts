import styled from "styled-components/native";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { RectButton } from "react-native-gesture-handler";

export const ContainerAbsolute = styled(View)`
  position: absolute;
  bottom: 16px;
  right: 16px;

  flex: 1;
  align-items: center;
`;

export const Container = styled(LinearGradient)`
  height: 70px;
  width: 70px;
  border-radius: 50px;
`;

export const ContainerSecondary = styled(LinearGradient)`
  height: 50px;
  width: 50px;
  border-radius: 50px;
  margin-bottom: 8px;
`;

export const Button = styled(RectButton)`
  flex: 1;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`;
