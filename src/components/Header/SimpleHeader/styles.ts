import styled from "styled-components/native";
import Constants from "expo-constants";
import { Header2 } from "../../../styles/fonts";

export const Container = styled.View`
  margin-top: ${Constants.statusBarHeight}px;
  align-items: center;
  justify-content: center;
  height: 64px;
`;

export const Title = styled(Header2)``;
