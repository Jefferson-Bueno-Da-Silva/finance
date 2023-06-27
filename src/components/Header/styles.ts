import styled from "styled-components/native";
import Constants from "expo-constants";
import { Header2 } from "../../styles/fonts";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled.View`
  margin-top: ${Constants.statusBarHeight}px;
  align-items: center;
  justify-content: center;
  height: 64px;
`;

export const ContainerRow = styled.View`
  flex-direction: row;
  margin-top: ${Constants.statusBarHeight}px;
  align-items: center;
  justify-content: center;
  height: 64px;
`;

export const Title = styled(Header2)`
  width: 130px;
  margin-right: 32px;
  margin-left: 32px;
  text-align: center;
`;

export const Button = styled(RectButton)`
  border-radius: 50px;
`;
