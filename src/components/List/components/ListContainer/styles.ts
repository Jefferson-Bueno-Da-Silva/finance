import styled from "styled-components";
import { View } from "react-native";

export const Container = styled(View)`
  width: 100%;
  height: 262px;
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.primary.white};
  overflow: hidden;
`;
